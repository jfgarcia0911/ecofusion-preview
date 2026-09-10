import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { logStaffAccess, requireStaffPermission } from '@/lib/staff';
import { PERMISSIONS } from '@/lib/staff-permissions';

/** The staff account making the request, if it may edit and delete snapshots. */
async function requireManager(): Promise<string | NextResponse> {
  const guard = await requireStaffPermission(PERMISSIONS.MANAGE_SNAPSHOTS);
  return guard instanceof NextResponse ? guard : guard.userId;
}

// PATCH - Rename a snapshot, or make it the one new businesses start from.
export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ snapshotId: string }> }
) {
  try {
    const staffUserId = await requireManager();
    if (staffUserId instanceof NextResponse) return staffUserId;

    const { snapshotId } = await params;
    const { name, description, isDefault } = await request.json();

    const existing = await prisma.snapshot.findUnique({
      where: { id: snapshotId },
      select: { id: true },
    });
    if (!existing) {
      return NextResponse.json({ error: 'No such snapshot' }, { status: 404 });
    }

    const snapshot = await prisma.$transaction(async (tx) => {
      // Exactly one default, or none. Clearing the others first means the
      // window where two claim it is inside the transaction and invisible.
      if (isDefault === true) {
        await tx.snapshot.updateMany({
          where: { isDefault: true, id: { not: snapshotId } },
          data: { isDefault: false },
        });
      }
      return tx.snapshot.update({
        where: { id: snapshotId },
        data: {
          name: typeof name === 'string' && name.trim() ? name.trim() : undefined,
          description: description !== undefined ? description?.trim() || null : undefined,
          isDefault: typeof isDefault === 'boolean' ? isDefault : undefined,
        },
        select: { id: true, name: true, description: true, isDefault: true },
      });
    });

    // A snapshot belongs to no one business, so the line names none. Making
    // one the default decides how every future business starts, which is a
    // change as real as any made inside one.
    await logStaffAccess(staffUserId, null, 'write', {
      method: 'PATCH',
      path: `/api/admin/snapshots/${snapshotId}`,
      summary:
        `Edited the snapshot "${snapshot.name}"` +
        (isDefault === true
          ? ': made it the default for new businesses'
          : isDefault === false
            ? ': cleared it as the default'
            : ''),
    });

    return NextResponse.json(snapshot);
  } catch (error) {
    console.error('Failed to update snapshot:', error);
    return NextResponse.json({ error: 'Failed to update snapshot' }, { status: 500 });
  }
}

// DELETE - Discard a snapshot.
//
// Businesses already started from it are unaffected: applying copies, so nothing
// downstream refers back to this row.
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ snapshotId: string }> }
) {
  try {
    const staffUserId = await requireManager();
    if (staffUserId instanceof NextResponse) return staffUserId;

    const { snapshotId } = await params;

    const existing = await prisma.snapshot.findUnique({
      where: { id: snapshotId },
      select: { isDefault: true, name: true },
    });
    if (!existing) {
      return NextResponse.json({ error: 'No such snapshot' }, { status: 404 });
    }

    if (existing.isDefault) {
      return NextResponse.json(
        {
          error:
            'This is the snapshot new businesses start from. Make another one the default first, or clear the default.',
        },
        { status: 400 }
      );
    }

    await prisma.snapshot.delete({ where: { id: snapshotId } });

    await logStaffAccess(staffUserId, null, 'write', {
      method: 'DELETE',
      path: `/api/admin/snapshots/${snapshotId}`,
      summary: `Deleted the snapshot "${existing.name}"`,
    });

    return NextResponse.json({ deleted: snapshotId });
  } catch (error) {
    console.error('Failed to delete snapshot:', error);
    return NextResponse.json({ error: 'Failed to delete snapshot' }, { status: 500 });
  }
}
