import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';
import { isPlatformAdmin, logStaffAccess, staffMayReach } from '@/lib/staff';
import { CourseGrantError, setCourseGrants } from '@/lib/training';

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

        const reader = await requireStaff();
        if (!reader || !(await staffMayReach(reader, organizationId))) {
            return NextResponse.json({ error: 'No such business' }, { status: 404 });
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
        if (organizationId && !(await staffMayReach(staffUserId, organizationId))) {
            return NextResponse.json({ error: 'No such business' }, { status: 404 });
        }
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

        // The rules live in lib/training, shared with the business's own
        // owner choosing for themselves, so the two cannot drift apart.
        let result;
        try {
            result = await setCourseGrants(organizationId, courseIds, staffUserId);
        } catch (error) {
            if (error instanceof CourseGrantError) {
                return NextResponse.json({ error: error.message }, { status: 400 });
            }
            throw error;
        }

        if (result.loaded > 0 || result.unloaded > 0) {
            await logStaffAccess(staffUserId, organizationId, 'write', {
                method: 'PUT',
                path: '/api/admin/course-grants',
                summary: `Classes: ${result.loaded} loaded, ${result.unloaded} unloaded, ${result.courseIds.length} carried now`,
            });
        }

        return NextResponse.json({ organizationId, ...result });
    } catch (error) {
        console.error('Failed to set course grants:', error);
        return NextResponse.json({ error: 'Failed to update classes' }, { status: 500 });
    }
}
