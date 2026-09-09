import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { canAdminister } from '@/lib/tenancy';
import { activeOrg } from '@/lib/api-access';
import { ICON_NAMES, isKnownPalette, keyFromTitle, UNIT_PALETTES } from '@/lib/business-units';

/**
 * The silos a business runs.
 *
 * A silo is referenced from sales, tasks and phase settings by its `key`, held
 * as a plain string with no foreign key behind it. That shapes two rules here:
 * the key is set once and never edited, and a silo with history behind it is
 * retired rather than deleted. Both exist so revenue already attributed to a
 * silo keeps pointing at something that answers.
 */

/** Fields an operator may set, cleaned up and checked. */
function readUnitFields(data: Record<string, unknown>) {
  const title = typeof data.title === 'string' ? data.title.trim() : '';
  const description = typeof data.description === 'string' ? data.description.trim() : '';
  const icon = typeof data.icon === 'string' ? data.icon : 'Layers';
  const color = typeof data.color === 'string' ? data.color : UNIT_PALETTES[0].color;
  const accent = typeof data.accent === 'string' ? data.accent : UNIT_PALETTES[0].accent;
  const keywords = Array.isArray(data.keywords)
    ? data.keywords
        .filter((k): k is string => typeof k === 'string')
        .map((k) => k.trim().toLowerCase())
        .filter(Boolean)
    : [];

  return { title, description, icon, color, accent, keywords };
}

/** The first problem with these fields, or null. */
function validate(fields: ReturnType<typeof readUnitFields>): string | null {
  if (!fields.title) return 'A name is required';
  if (!ICON_NAMES.includes(fields.icon)) return 'That icon is not one of the available icons';
  if (!isKnownPalette(fields.color, fields.accent)) return 'That colour is not one of the available colours';
  return null;
}

// GET - The silos this business runs, in display order.
//
// Disabled ones are left out unless asked for: everything that renders a silo
// wants the live set, and only the editor wants the retired ones too.
export async function GET(request: Request) {
  try {
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;

    const includeDisabled = new URL(request.url).searchParams.get('includeDisabled') === '1';

    const units = await prisma.businessUnit.findMany({
      where: {
        organizationId: ctx.organizationId,
        ...(includeDisabled ? {} : { enabled: true }),
      },
      orderBy: { sortOrder: 'asc' },
    });

    return NextResponse.json(units);
  } catch (error) {
    console.error('Failed to fetch business units:', error);
    return NextResponse.json({ error: 'Failed to fetch business units' }, { status: 500 });
  }
}

// POST - Add a silo.
export async function POST(request: Request) {
  try {
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;
    if (!canAdminister(ctx)) {
      return NextResponse.json({ error: 'Admin access required' }, { status: 403 });
    }

    const data = await request.json();
    const fields = readUnitFields(data);
    const problem = validate(fields);
    if (problem) {
      return NextResponse.json({ error: problem }, { status: 400 });
    }

    const key = keyFromTitle(fields.title);
    if (!key) {
      return NextResponse.json(
        { error: 'That name has no letters or numbers in it to build an identifier from' },
        { status: 400 }
      );
    }

    const clash = await prisma.businessUnit.findUnique({
      where: { organizationId_key: { organizationId: ctx.organizationId, key } },
      select: { id: true, enabled: true },
    });
    if (clash) {
      return NextResponse.json(
        {
          error: clash.enabled
            ? 'A silo with that name already exists'
            : 'A retired silo has that name. Bring it back rather than adding a second one.',
        },
        { status: 409 }
      );
    }

    const last = await prisma.businessUnit.aggregate({
      where: { organizationId: ctx.organizationId },
      _max: { sortOrder: true },
    });

    const unit = await prisma.businessUnit.create({
      data: {
        organizationId: ctx.organizationId,
        key,
        ...fields,
        sortOrder: (last._max.sortOrder ?? 0) + 1,
      },
    });

    return NextResponse.json(unit, { status: 201 });
  } catch (error) {
    console.error('Failed to create business unit:', error);
    return NextResponse.json({ error: 'Failed to add that silo' }, { status: 500 });
  }
}

// PATCH - Rename a silo, restyle it, retire it, or move it in the order.
//
// The key is not among the editable fields, on purpose. See the note above.
export async function PATCH(request: Request) {
  try {
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;
    if (!canAdminister(ctx)) {
      return NextResponse.json({ error: 'Admin access required' }, { status: 403 });
    }

    const data = await request.json();
    const { id, enabled, sortOrder } = data;
    if (!id) {
      return NextResponse.json({ error: 'id is required' }, { status: 400 });
    }

    // Scoped by organization, so an id from another business reads as absent.
    const existing = await prisma.businessUnit.findFirst({
      where: { id, organizationId: ctx.organizationId },
      select: { id: true },
    });
    if (!existing) {
      return NextResponse.json({ error: 'No such silo' }, { status: 404 });
    }

    // Only what was sent is touched, so a reorder does not have to restate the
    // silo's whole definition.
    const patch: Record<string, unknown> = {};

    if (data.title !== undefined || data.description !== undefined ||
        data.icon !== undefined || data.color !== undefined ||
        data.accent !== undefined || data.keywords !== undefined) {
      const fields = readUnitFields(data);
      const problem = validate(fields);
      if (problem) {
        return NextResponse.json({ error: problem }, { status: 400 });
      }
      Object.assign(patch, fields);
    }

    if (typeof enabled === 'boolean') patch.enabled = enabled;
    if (typeof sortOrder === 'number') patch.sortOrder = sortOrder;

    if (Object.keys(patch).length === 0) {
      return NextResponse.json({ error: 'Nothing to change' }, { status: 400 });
    }

    const unit = await prisma.businessUnit.update({ where: { id }, data: patch });

    return NextResponse.json(unit);
  } catch (error) {
    console.error('Failed to update business unit:', error);
    return NextResponse.json({ error: 'Failed to update that silo' }, { status: 500 });
  }
}

// DELETE - Remove a silo entirely.
//
// Allowed only while nothing refers to it. Sales, tasks and phase settings
// record a silo by key with no foreign key to stop this, so deleting one that
// has been used would leave revenue attributed to a silo nothing can name.
// Those are retired instead, which is what `enabled` is for.
export async function DELETE(request: Request) {
  try {
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;
    if (!canAdminister(ctx)) {
      return NextResponse.json({ error: 'Admin access required' }, { status: 403 });
    }

    const id = new URL(request.url).searchParams.get('id');
    if (!id) {
      return NextResponse.json({ error: 'id is required' }, { status: 400 });
    }

    const unit = await prisma.businessUnit.findFirst({
      where: { id, organizationId: ctx.organizationId },
      select: { id: true, key: true, title: true },
    });
    if (!unit) {
      return NextResponse.json({ error: 'No such silo' }, { status: 404 });
    }

    const [sales, tasks, settings] = await Promise.all([
      prisma.saleItem.count({
        where: { phaseId: unit.key, sale: { organizationId: ctx.organizationId } },
      }),
      prisma.task.count({ where: { phaseId: unit.key, organizationId: ctx.organizationId } }),
      prisma.phaseSettings.count({
        where: { phaseId: unit.key, organizationId: ctx.organizationId },
      }),
    ]);

    const used = sales + tasks + settings;
    if (used > 0) {
      return NextResponse.json(
        {
          error: `${unit.title} has ${used} record${used === 1 ? '' : 's'} behind it. Retire it instead, and it will stop appearing without detaching that history.`,
          canRetire: true,
        },
        { status: 409 }
      );
    }

    await prisma.businessUnit.delete({ where: { id } });

    return NextResponse.json({ deleted: id });
  } catch (error) {
    console.error('Failed to delete business unit:', error);
    return NextResponse.json({ error: 'Failed to delete that silo' }, { status: 500 });
  }
}
