import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';
import { isPlatformAdmin, logStaffAccess } from '@/lib/staff';
import { isPlatformRole } from '@/lib/roles';
import { visibleToOrganization } from '@/lib/training';

/**
 * Putting a course in front of the person answerable for a business.
 *
 * The same act as assigning from inside a business, reached without entering
 * one. Onboarding a customer means granting them the classes and then saying
 * which the owner should start with, and those two belong side by side rather
 * than either side of a support session.
 *
 * The rule about who may be assigned to is unchanged and deliberately so:
 * EcoFusion assigns to a business's owner, never over their head to their
 * staff. What the owner does with it afterwards is theirs to decide, and they
 * already have the tools to do it.
 */

/** The owner of a business, and whether they can hold a course at all. */
async function ownerOf(organizationId: string) {
    const membership = await prisma.membership.findFirst({
        where: { organizationId, role: 'owner' },
        orderBy: { createdAt: 'asc' },
        select: { user: { select: { id: true, name: true, email: true, role: true } } },
    });
    return membership?.user ?? null;
}

// GET - What can be assigned to this business's owner, and what already is.
export async function GET(request: Request) {
    try {
        const session = await auth();
        if (!session?.user?.id) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }
        if (!(await isPlatformAdmin(session.user.id))) {
            return NextResponse.json({ error: 'Staff access required' }, { status: 403 });
        }

        const organizationId = new URL(request.url).searchParams.get('organizationId')?.trim();
        if (!organizationId) {
            return NextResponse.json({ error: 'organizationId is required' }, { status: 400 });
        }

        const organization = await prisma.organization.findUnique({
            where: { id: organizationId },
            select: { id: true },
        });
        if (!organization) {
            return NextResponse.json({ error: 'No such business' }, { status: 404 });
        }

        const owner = await ownerOf(organizationId);

        // Only what this business actually holds. Offering the whole catalogue
        // would let staff assign a course the business cannot open, which
        // reads to the owner as a broken link rather than as training.
        const courses = await prisma.trainingCourse.findMany({
            where: { ...visibleToOrganization(organizationId), isActive: true },
            select: {
                id: true,
                code: true,
                title: true,
                category: true,
                duration: true,
                isRequired: true,
            },
            orderBy: [{ sortOrder: 'asc' }, { code: 'asc' }],
        });

        const assigned = owner
            ? await prisma.courseAssignment.findMany({
                  where: { assigneeId: owner.id, courseId: { in: courses.map((c) => c.id) } },
                  select: { courseId: true },
              })
            : [];

        return NextResponse.json({
            owner: owner ? { id: owner.id, name: owner.name, email: owner.email } : null,
            courses,
            assignedCourseIds: assigned.map((a) => a.courseId),
        });
    } catch (error) {
        console.error('Failed to read assignable courses:', error);
        return NextResponse.json({ error: 'Failed to read the course list' }, { status: 500 });
    }
}

// POST - Assign one or more courses to a business's owner.
//
// Repeatable. A course the owner already holds is counted and skipped rather
// than refused, so assigning five courses of which two are already there
// succeeds with three instead of failing on the first duplicate.
export async function POST(request: Request) {
    try {
        const session = await auth();
        if (!session?.user?.id) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }
        if (!(await isPlatformAdmin(session.user.id))) {
            return NextResponse.json({ error: 'Staff access required' }, { status: 403 });
        }

        const body = await request.json();
        const organizationId = String(body.organizationId ?? '').trim();
        const courseIds: string[] = Array.isArray(body.courseIds)
            ? body.courseIds.filter((id: unknown) => typeof id === 'string')
            : [];
        const dueDate = body.dueDate ? new Date(body.dueDate) : null;
        const priority = ['low', 'normal', 'high'].includes(body.priority) ? body.priority : 'normal';
        const notes = body.notes ? String(body.notes).trim() || null : null;

        if (!organizationId) {
            return NextResponse.json({ error: 'organizationId is required' }, { status: 400 });
        }
        if (courseIds.length === 0) {
            return NextResponse.json({ error: 'Choose at least one course' }, { status: 400 });
        }
        if (dueDate && Number.isNaN(dueDate.getTime())) {
            return NextResponse.json({ error: 'That due date is not a date' }, { status: 400 });
        }

        const owner = await ownerOf(organizationId);
        if (!owner) {
            return NextResponse.json(
                {
                    error:
                        'This business has no owner, so there is nobody to assign to. ' +
                        'Give it an owner first.',
                },
                { status: 400 }
            );
        }

        // A support account is not a trainee. Nothing it does is a business's
        // compliance record, and a course sitting on it is an obligation
        // nobody is owed.
        if (isPlatformRole(owner.role)) {
            return NextResponse.json(
                { error: 'Courses cannot be assigned to an EcoFusion account' },
                { status: 400 }
            );
        }

        // Checked against what the business holds rather than taken on trust
        // from the browser, which is the only thing standing between a crafted
        // request and a course the business was never granted.
        const courses = await prisma.trainingCourse.findMany({
            where: {
                id: { in: courseIds },
                isActive: true,
                ...visibleToOrganization(organizationId),
            },
            select: { id: true, title: true, isRequired: true },
        });
        if (courses.length === 0) {
            return NextResponse.json(
                { error: 'None of those courses are loaded into this business' },
                { status: 400 }
            );
        }

        const existing = await prisma.courseAssignment.findMany({
            where: { assigneeId: owner.id, courseId: { in: courses.map((c) => c.id) } },
            select: { courseId: true },
        });
        const already = new Set(existing.map((e) => e.courseId));
        const toAssign = courses.filter((c) => !already.has(c.id));

        if (toAssign.length > 0) {
            await prisma.$transaction([
                prisma.courseAssignment.createMany({
                    data: toAssign.map((course) => ({
                        courseId: course.id,
                        assigneeId: owner.id,
                        assignedById: session.user!.id!,
                        dueDate,
                        priority,
                        notes,
                    })),
                    skipDuplicates: true,
                }),
                // One notice per course, matching what an assignment made from
                // inside a business produces. The owner should not be able to
                // tell where it came from.
                prisma.notification.createMany({
                    data: toAssign.map((course) => ({
                        userId: owner.id,
                        title: 'New Training Assigned',
                        message:
                            `You have been assigned "${course.title}".` +
                            (dueDate ? ` Due by ${dueDate.toLocaleDateString()}.` : '') +
                            (course.isRequired ? ' This is a required compliance course.' : ''),
                        type: 'task',
                        link: '/academy',
                    })),
                }),
            ]);
        }

        await logStaffAccess(session.user.id, organizationId, 'write', {
            method: 'POST',
            path: '/api/admin/course-assignments',
        });

        return NextResponse.json({
            assigned: toAssign.length,
            skipped: courses.length - toAssign.length,
            owner: { name: owner.name, email: owner.email },
        });
    } catch (error) {
        console.error('Failed to assign courses:', error);
        return NextResponse.json({ error: 'Failed to assign those courses' }, { status: 500 });
    }
}
