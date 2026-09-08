import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';
import { isPlatformAdmin, logStaffAccess } from '@/lib/staff';

/** The staff account making the request, or null. */
async function requireStaff(): Promise<string | null> {
    const session = await auth();
    if (!session?.user?.id) return null;
    return (await isPlatformAdmin(session.user.id)) ? session.user.id : null;
}

// GET - Which of EcoFusion's courses one business currently holds.
export async function GET(request: Request) {
    try {
        if (!(await requireStaff())) {
            return NextResponse.json({ error: 'Staff access required' }, { status: 403 });
        }

        const organizationId = new URL(request.url).searchParams.get('organizationId');
        if (!organizationId) {
            return NextResponse.json({ error: 'organizationId is required' }, { status: 400 });
        }

        const grants = await prisma.courseGrant.findMany({
            where: { organizationId },
            select: { courseId: true },
        });

        return NextResponse.json({ courseIds: grants.map((g) => g.courseId) });
    } catch (error) {
        console.error('Failed to read course grants:', error);
        return NextResponse.json({ error: 'Failed to read grants' }, { status: 500 });
    }
}

// PUT - Set exactly which courses a business holds.
//
// The whole set is sent rather than one change at a time, so the request says
// what the business should end up with and repeating it changes nothing. Courses
// dropped from the set are unloaded; the business's own courses are untouched,
// since they were never grants.
//
// Unloading leaves completions alone. Someone who finished a course still
// finished it, whether or not their business still carries it.
export async function PUT(request: Request) {
    try {
        const staffUserId = await requireStaff();
        if (!staffUserId) {
            return NextResponse.json({ error: 'Staff access required' }, { status: 403 });
        }

        const { organizationId, courseIds } = await request.json();
        if (!organizationId || !Array.isArray(courseIds)) {
            return NextResponse.json(
                { error: 'organizationId and courseIds are required' },
                { status: 400 }
            );
        }

        const organization = await prisma.organization.findUnique({
            where: { id: organizationId },
            select: { id: true },
        });
        if (!organization) {
            return NextResponse.json({ error: 'No such business' }, { status: 404 });
        }

        // Only EcoFusion's own courses can be loaded. A business's private course
        // is not ours to hand to anybody, including its author's neighbours.
        const grantable = await prisma.trainingCourse.findMany({
            where: { id: { in: courseIds }, organizationId: null },
            select: { id: true },
        });
        const grantableIds = grantable.map((c) => c.id);

        if (grantableIds.length !== courseIds.length) {
            return NextResponse.json(
                { error: 'One or more of those courses is not an EcoFusion course' },
                { status: 400 }
            );
        }

        // Work out the difference rather than clearing and rewriting, so a
        // course the business already had keeps the date it was loaded and the name
        // of whoever loaded it. Those are the only record of how this business's
        // academy came to look the way it does.
        const held = await prisma.courseGrant.findMany({
            where: { organizationId },
            select: { courseId: true },
        });
        const heldIds = new Set(held.map((g) => g.courseId));
        const wanted = new Set(grantableIds);

        const toRemove = [...heldIds].filter((id) => !wanted.has(id));
        const toAdd = grantableIds.filter((id) => !heldIds.has(id));

        if (toRemove.length > 0 || toAdd.length > 0) {
            await prisma.$transaction([
                ...(toRemove.length > 0
                    ? [
                          prisma.courseGrant.deleteMany({
                              where: { organizationId, courseId: { in: toRemove } },
                          }),
                      ]
                    : []),
                ...(toAdd.length > 0
                    ? [
                          prisma.courseGrant.createMany({
                              data: toAdd.map((courseId) => ({
                                  courseId,
                                  organizationId,
                                  grantedById: staffUserId,
                              })),
                              skipDuplicates: true,
                          }),
                      ]
                    : []),
            ]);

            await logStaffAccess(staffUserId, organizationId, 'write', {
                method: 'PUT',
                path: '/api/admin/course-grants',
            });
        }

        return NextResponse.json({
            organizationId,
            courseIds: grantableIds,
            loaded: toAdd.length,
            unloaded: toRemove.length,
        });
    } catch (error) {
        console.error('Failed to set course grants:', error);
        return NextResponse.json({ error: 'Failed to update classes' }, { status: 500 });
    }
}
