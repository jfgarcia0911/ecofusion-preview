import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { logStaffAccess } from '@/lib/staff';
import { preferOf, requireScope, scopeCan, scopeReaches, type Scope } from '@/lib/agency';
import { PERMISSIONS } from '@/lib/staff-permissions';
import { SNAPSHOT_VERSION, captureSnapshot, type SnapshotPayload } from '@/lib/snapshots';

/**
 * Snapshots: a business's setup saved as a template.
 *
 * Two libraries, by scope (lib/agency). EcoFusion's own templates (agencyId
 * null) are managed from the console, and every agency may apply them. An
 * agency's own snapshots are managed by that agency and seen by nobody else.
 */

/** The snapshots a scope sees: EcoFusion's templates, plus an agency's own. */
function visibleWhere(scope: Scope) {
  return scope.kind === 'agency'
    ? { OR: [{ agencyId: scope.agencyId }, { agencyId: null }] }
    : { agencyId: null };
}

/** The library a scope captures into and manages: its agency's, or EcoFusion's. */
function ownAgencyId(scope: Scope): string | null {
  return scope.kind === 'agency' ? scope.agencyId : null;
}

/** What a snapshot holds, counted, for a list that has to stay readable. */
function summarise(payload: SnapshotPayload) {
  return {
    businessUnits: payload.businessUnits?.length ?? 0,
    zones: payload.zones?.length ?? 0,
    growthParameters: payload.growthParameters?.length ?? 0,
  };
}

// GET - Every snapshot this caller may see.
export async function GET(request: Request) {
  try {
    // Anyone who may do anything with snapshots may see the library.
    const scope = await requireScope({
      anyOf: [PERMISSIONS.CAPTURE_SNAPSHOTS, PERMISSIONS.MANAGE_SNAPSHOTS, PERMISSIONS.APPLY_SNAPSHOTS],
      prefer: preferOf(request),
    });
    if (scope instanceof NextResponse) return scope;

    const snapshots = await prisma.snapshot.findMany({
      where: visibleWhere(scope),
      orderBy: [{ isDefault: 'desc' }, { createdAt: 'desc' }],
      include: {
        capturedFrom: { select: { name: true } },
        createdBy: { select: { name: true, email: true } },
      },
    });

    return NextResponse.json({
      /** What the reader may do here, so the page offers only that. */
      can: {
        capture: scopeCan(scope, PERMISSIONS.CAPTURE_SNAPSHOTS),
        manage: scopeCan(scope, PERMISSIONS.MANAGE_SNAPSHOTS),
        apply: scopeCan(scope, PERMISSIONS.APPLY_SNAPSHOTS),
      },
      /** Which library this caller manages: an agency's own, or EcoFusion's templates. */
      scope: scope.kind,
      snapshots: snapshots.map((snapshot) => ({
        id: snapshot.id,
        name: snapshot.name,
        /** EcoFusion's template, which an agency may apply but not change. */
        template: scope.kind === 'agency' && snapshot.agencyId === null,
        /** Whether this caller's library holds it, and so may change it. */
        editable: snapshot.agencyId === ownAgencyId(scope),
        description: snapshot.description,
        isDefault: snapshot.isDefault,
        version: snapshot.version,
        stale: snapshot.version !== SNAPSHOT_VERSION,
        capturedFrom: snapshot.capturedFrom?.name ?? null,
        createdBy: snapshot.createdBy?.name ?? snapshot.createdBy?.email ?? null,
        createdAt: snapshot.createdAt,
        contents: summarise(snapshot.payload as unknown as SnapshotPayload),
      })),
    });
  } catch (error) {
    console.error('Failed to list snapshots:', error);
    return NextResponse.json({ error: 'Failed to list snapshots' }, { status: 500 });
  }
}

// POST - Capture a business's configuration as a snapshot.
//
// Taken from a real business rather than written by hand, because a business someone
// has set up properly is a better description of a good setup than a form.
// Configuration only: nothing that happened on the business travels.
export async function POST(request: Request) {
  try {
    const scope = await requireScope({ anyOf: [PERMISSIONS.CAPTURE_SNAPSHOTS], prefer: preferOf(request) });
    if (scope instanceof NextResponse) return scope;
    const staffUserId = scope.userId;

    const { organizationId, name, description, isDefault } = await request.json();
    // Capturing copies a business's whole configuration out of it, which is
    // reading it. Nobody captures a business they could not open.
    if (organizationId && !(await scopeReaches(scope, organizationId))) {
      return NextResponse.json({ error: 'No such business' }, { status: 404 });
    }
    if (!organizationId || !name?.trim()) {
      return NextResponse.json(
        { error: 'organizationId and a name are required' },
        { status: 400 }
      );
    }

    const organization = await prisma.organization.findUnique({
      where: { id: organizationId },
      select: { id: true, name: true },
    });
    if (!organization) {
      return NextResponse.json({ error: 'No such business' }, { status: 404 });
    }

    if (isDefault && !scopeCan(scope, PERMISSIONS.MANAGE_SNAPSHOTS)) {
      return NextResponse.json(
        { error: 'Choosing the snapshot new businesses start from needs "Edit and delete snapshots".' },
        { status: 403 }
      );
    }

    const payload = await captureSnapshot(organizationId);

    // At most one default, so marking a new one steps the old one down in the
    // same breath rather than leaving two claims to be resolved at signup.
    const snapshot = await prisma.$transaction(async (tx) => {
      if (isDefault) {
        // One default per library: an agency's own, or EcoFusion's.
        await tx.snapshot.updateMany({
          where: { isDefault: true, agencyId: ownAgencyId(scope) },
          data: { isDefault: false },
        });
      }
      return tx.snapshot.create({
        data: {
          agencyId: ownAgencyId(scope),
          name: name.trim(),
          description: description?.trim() || null,
          isDefault: Boolean(isDefault),
          version: SNAPSHOT_VERSION,
          payload: payload as unknown as object,
          capturedFromId: organizationId,
          createdById: staffUserId,
        },
      });
    });

    await logStaffAccess(staffUserId, organizationId, 'write', {
      method: 'POST',
      path: '/api/admin/snapshots',
      summary:
        `Captured the snapshot "${snapshot.name}" from this business` +
        (isDefault ? ', and made it the default for new businesses' : ''),
    });

    return NextResponse.json(
      {
        id: snapshot.id,
        name: snapshot.name,
        isDefault: snapshot.isDefault,
        contents: summarise(payload),
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Failed to capture snapshot:', error);
    return NextResponse.json({ error: 'Failed to capture snapshot' }, { status: 500 });
  }
}
