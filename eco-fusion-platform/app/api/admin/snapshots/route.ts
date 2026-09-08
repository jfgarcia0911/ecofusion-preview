import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';
import { isPlatformAdmin, logStaffAccess } from '@/lib/staff';
import { SNAPSHOT_VERSION, captureSnapshot, type SnapshotPayload } from '@/lib/snapshots';

/** The staff account making the request, or null. */
async function requireStaff(): Promise<string | null> {
  const session = await auth();
  if (!session?.user?.id) return null;
  return (await isPlatformAdmin(session.user.id)) ? session.user.id : null;
}

/** What a snapshot holds, counted, for a list that has to stay readable. */
function summarise(payload: SnapshotPayload) {
  return {
    businessUnits: payload.businessUnits?.length ?? 0,
    zones: payload.zones?.length ?? 0,
    growthParameters: payload.growthParameters?.length ?? 0,
    courses: payload.courseIds?.length ?? 0,
  };
}

// GET - Every snapshot.
export async function GET() {
  try {
    if (!(await requireStaff())) {
      return NextResponse.json({ error: 'Staff access required' }, { status: 403 });
    }

    const snapshots = await prisma.snapshot.findMany({
      orderBy: [{ isDefault: 'desc' }, { createdAt: 'desc' }],
      include: {
        capturedFrom: { select: { name: true } },
        createdBy: { select: { name: true, email: true } },
      },
    });

    return NextResponse.json({
      snapshots: snapshots.map((snapshot) => ({
        id: snapshot.id,
        name: snapshot.name,
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
    const staffUserId = await requireStaff();
    if (!staffUserId) {
      return NextResponse.json({ error: 'Staff access required' }, { status: 403 });
    }

    const { organizationId, name, description, isDefault } = await request.json();
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

    const payload = await captureSnapshot(organizationId);

    // At most one default, so marking a new one steps the old one down in the
    // same breath rather than leaving two claims to be resolved at signup.
    const snapshot = await prisma.$transaction(async (tx) => {
      if (isDefault) {
        await tx.snapshot.updateMany({
          where: { isDefault: true },
          data: { isDefault: false },
        });
      }
      return tx.snapshot.create({
        data: {
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
