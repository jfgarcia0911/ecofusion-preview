import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { logStaffAccess, requireStaffPermission, staffMayReach } from '@/lib/staff';
import { PERMISSIONS } from '@/lib/staff-permissions';
import { SNAPSHOT_VERSION, applySnapshot, type SnapshotPayload } from '@/lib/snapshots';

// POST - Load a snapshot into a business.
//
// Additive and repeatable. Anything the business already has under the same name
// is left alone, so applying a snapshot to a working business fills gaps rather
// than undoing whatever its operator has decided since. Nothing is ever
// removed, and no record of what happened on the business is touched.
export async function POST(
  request: Request,
  { params }: { params: Promise<{ snapshotId: string }> }
) {
  try {
    // Applying writes a template into a customer's business from outside it,
    // so it is a permission of its own, and only ever into a business the
    // applier may open.
    const guard = await requireStaffPermission(PERMISSIONS.APPLY_SNAPSHOTS);
    if (guard instanceof NextResponse) return guard;
    const staffUserId = guard.userId;

    const { snapshotId } = await params;
    const { organizationId } = await request.json();
    if (!organizationId) {
      return NextResponse.json({ error: 'organizationId is required' }, { status: 400 });
    }
    if (!(await staffMayReach(staffUserId, organizationId))) {
      return NextResponse.json({ error: 'No such business' }, { status: 404 });
    }

    const snapshot = await prisma.snapshot.findUnique({
      where: { id: snapshotId },
      select: { name: true, payload: true, version: true },
    });
    if (!snapshot) {
      return NextResponse.json({ error: 'No such snapshot' }, { status: 404 });
    }

    if (snapshot.version !== SNAPSHOT_VERSION) {
      return NextResponse.json(
        {
          error:
            'This snapshot was taken by an older version of the app and cannot be applied. Capture it again from a business.',
        },
        { status: 409 }
      );
    }

    // Zones and growing parameters record who entered them, and a template has
    // nobody to name, so the business's owner stands in. Without an owner there is
    // no honest answer, and writing a staff account there would put EcoFusion's
    // name on the customer's own records.
    const owner = await prisma.membership.findFirst({
      where: { organizationId, role: 'owner' },
      orderBy: { createdAt: 'asc' },
      select: { userId: true, organization: { select: { name: true } } },
    });
    if (!owner) {
      return NextResponse.json(
        { error: 'That business has no owner, so there is nobody to attribute the new records to.' },
        { status: 400 }
      );
    }

    const applied = await applySnapshot(
      snapshot.payload as unknown as SnapshotPayload,
      organizationId,
      owner.userId
    );

    await logStaffAccess(staffUserId, organizationId, 'write', {
      method: 'POST',
      path: `/api/admin/snapshots/${snapshotId}/apply`,
      summary: `Loaded the snapshot "${snapshot.name}" into this business`,
    });

    return NextResponse.json({
      snapshot: snapshot.name,
      business: owner.organization.name,
      applied,
    });
  } catch (error) {
    console.error('Failed to apply snapshot:', error);
    return NextResponse.json({ error: 'Failed to apply snapshot' }, { status: 500 });
  }
}
