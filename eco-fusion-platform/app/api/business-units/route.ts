import { NextResponse } from 'next/server';
import { z } from 'zod';
import { Prisma } from '@prisma/client';
import { prisma } from '@/lib/prisma';
import { canAdminister } from '@/lib/tenancy';
import { activeOrg } from '@/lib/api-access';
import { readJson } from '@/lib/validation/request';
import { idFromQuery, recordId, requiredInt } from '@/lib/validation/fields';
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

/** Fields an operator may set. Anything else in the body is dropped. */
const unitFieldShape = {
  title: z.string().trim().max(120, 'A name must be 120 characters or fewer'),
  description: z.string().trim().max(2000).optional(),
  icon: z.string().max(60).optional(),
  color: z.string().max(120).optional(),
  accent: z.string().max(120).optional(),
  keywords: z.array(z.string().max(60)).max(50).optional(),
};

type UnitFieldInput = {
  title: string;
  description?: string;
  icon?: string;
  color?: string;
  accent?: string;
  keywords?: string[];
};

const createSchema = z.object(unitFieldShape);

const updateSchema = z.object({
  id: recordId,
  title: unitFieldShape.title.optional(),
  description: unitFieldShape.description,
  icon: unitFieldShape.icon,
  color: unitFieldShape.color,
  accent: unitFieldShape.accent,
  keywords: unitFieldShape.keywords,
  enabled: z.boolean().optional(),
  sortOrder: requiredInt(0, 100_000).optional(),
});

/** The fields cleaned up, with the defaults a new silo takes. */
function readUnitFields(data: UnitFieldInput) {
  return {
    title: data.title.trim(),
    description: data.description?.trim() ?? '',
    icon: data.icon ?? 'Layers',
    color: data.color ?? UNIT_PALETTES[0].color,
    accent: data.accent ?? UNIT_PALETTES[0].accent,
    keywords: [
      ...new Set(
        (data.keywords ?? []).map((k) => k.trim().toLowerCase()).filter(Boolean)
      ),
    ],
  };
}

/** The first problem with these fields, or null. */
function validate(fields: ReturnType<typeof readUnitFields>): string | null {
  if (!fields.title) return 'A name is required';
  if (!ICON_NAMES.includes(fields.icon)) return 'That icon is not one of the available icons';
  if (!isKnownPalette(fields.color, fields.accent)) return 'That colour is not one of the available colours';
  return null;
}

const isUniqueClash = (error: unknown) =>
  error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002';

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
      take: 500,
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

    const body = await readJson(request, createSchema);
    if (!body.ok) return body.response;
    const fields = readUnitFields(body.data);
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

    try {
      const unit = await prisma.businessUnit.create({
        data: {
          organizationId: ctx.organizationId,
          key,
          title: fields.title,
          description: fields.description,
          icon: fields.icon,
          color: fields.color,
          accent: fields.accent,
          keywords: fields.keywords,
          sortOrder: (last._max.sortOrder ?? 0) + 1,
        },
      });
      return NextResponse.json(unit, { status: 201 });
    } catch (error) {
      // Two people adding the same name at once: the second loses the race.
      if (isUniqueClash(error)) {
        return NextResponse.json({ error: 'A silo with that name already exists' }, { status: 409 });
      }
      throw error;
    }
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

    const body = await readJson(request, updateSchema);
    if (!body.ok) return body.response;
    const { id, enabled, sortOrder, ...definition } = body.data;

    // Only what was sent is touched, so a reorder does not have to restate the
    // silo's whole definition.
    const patch: Prisma.BusinessUnitUpdateManyMutationInput = {};

    const definitionSent = Object.values(definition).some((value) => value !== undefined);
    if (definitionSent) {
      const fields = readUnitFields({ ...definition, title: definition.title ?? '' });
      const problem = validate(fields);
      if (problem) {
        return NextResponse.json({ error: problem }, { status: 400 });
      }
      Object.assign(patch, fields);
    }

    if (enabled !== undefined) patch.enabled = enabled;
    if (sortOrder !== undefined) patch.sortOrder = sortOrder;

    if (Object.keys(patch).length === 0) {
      return NextResponse.json({ error: 'Nothing to change' }, { status: 400 });
    }

    // Scoped by organization, so an id from another business reads as absent.
    const where = { id, organizationId: ctx.organizationId };
    const { count } = await prisma.businessUnit.updateMany({ where, data: patch });
    if (count === 0) {
      return NextResponse.json({ error: 'No such silo' }, { status: 404 });
    }

    const unit = await prisma.businessUnit.findFirst({ where });
    if (!unit) {
      return NextResponse.json({ error: 'No such silo' }, { status: 404 });
    }

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

    const id = idFromQuery(request);
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

    const { count } = await prisma.businessUnit.deleteMany({
      where: { id: unit.id, organizationId: ctx.organizationId },
    });
    if (count === 0) {
      return NextResponse.json({ error: 'No such silo' }, { status: 404 });
    }

    return NextResponse.json({ deleted: id });
  } catch (error) {
    console.error('Failed to delete business unit:', error);
    return NextResponse.json({ error: 'Failed to delete that silo' }, { status: 500 });
  }
}
