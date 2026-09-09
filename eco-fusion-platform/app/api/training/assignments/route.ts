import { NextResponse } from 'next/server';
import { canAdminister, isSameOrganization } from '@/lib/tenancy';
import { activeOrg } from '@/lib/api-access';
import { prisma } from '@/lib/prisma';
import { isPlatformRole } from '@/lib/roles';

// GET - Fetch course assignments
export async function GET(request: Request) {
    try {
        const { ctx, refusal } = await activeOrg();
        if (refusal) return refusal;

        const { searchParams } = new URL(request.url);
        const userId = searchParams.get('userId');

        const isAdmin = canAdminister(ctx);

        // If specific user requested and requester is admin, get that user's assignments
        // Otherwise get the current user's assignments
        const targetUserId = (userId && isAdmin) ? userId : ctx.userId;

        if (targetUserId !== ctx.userId && !(await isSameOrganization(ctx, targetUserId))) {
            return NextResponse.json(
                { error: 'That person is not a member of this organization' },
                { status: 403 }
            );
        }

        // All three at once rather than one after another.
        //
        // The two completion queries used to narrow themselves by ids taken
        // from the assignments, which made them wait for it. That narrowing
        // was never doing any work: both are already filtered to this person,
        // so they can only return rows about courses and lessons that are
        // theirs, and the merge below picks out the relevant ones regardless.
        // Waiting for it cost two round trips to a database on the other side
        // of the world, every time somebody clicked a name.
        const [assignments, completions, lessonCompletions] = await Promise.all([
            prisma.courseAssignment.findMany({
                where: { assigneeId: targetUserId },
                include: {
                    course: {
                        include: {
                            lessons: {
                                select: { id: true, title: true, type: true, duration: true, sortOrder: true },
                                orderBy: { sortOrder: 'asc' }
                            }
                        }
                    },
                    assignedBy: {
                        select: { id: true, name: true }
                    }
                },
                orderBy: { createdAt: 'desc' }
            }),
            prisma.courseCompletion.findMany({
                where: { userId: targetUserId }
            }),
            // Only the id is read below, and there can be a great many of
            // these once somebody is working through the curriculum.
            prisma.lessonCompletion.findMany({
                where: { userId: targetUserId },
                select: { lessonId: true }
            }),
        ]);

        // Merge completion data
        const enrichedAssignments = assignments.map(assignment => {
            const completion = completions.find(c => c.courseId === assignment.courseId);
            const courseLessonIds = assignment.course.lessons.map(l => l.id);
            const completedLessons = lessonCompletions.filter(lc => courseLessonIds.includes(lc.lessonId));

            return {
                ...assignment,
                completion,
                progress: {
                    totalLessons: assignment.course.lessons.length,
                    completedLessons: completedLessons.length,
                    percentComplete: assignment.course.lessons.length > 0
                        ? Math.round((completedLessons.length / assignment.course.lessons.length) * 100)
                        : 0
                }
            };
        });

        return NextResponse.json(enrichedAssignments);
    } catch (error) {
        console.error('Failed to fetch assignments:', error);
        return NextResponse.json({ error: 'Failed to fetch assignments' }, { status: 500 });
    }
}

// POST - Create course assignment (admin only)
export async function POST(request: Request) {
    try {
        const { ctx, refusal } = await activeOrg();
        if (refusal) return refusal;

        const isAdmin = canAdminister(ctx);
        if (!isAdmin) {
            return NextResponse.json({ error: 'Admin access required' }, { status: 403 });
        }

        const data = await request.json();
        const { courseId, assigneeId, dueDate, priority, notes } = data;

        // A support account is not a trainee. It works on the platform rather
        // than inside a business, nothing it does is a business's compliance
        // record, and a course sitting on it is an obligation nobody is owed.
        const assignee = await prisma.user.findUnique({
            where: { id: assigneeId },
            select: { role: true },
        });
        if (isPlatformRole(assignee?.role)) {
            return NextResponse.json(
                { error: 'Courses cannot be assigned to an EcoFusion account' },
                { status: 400 }
            );
        }

        // EcoFusion assigns to the person answerable for a business, and that
        // is its owner. Training a customer's employees over their head is the
        // owner's call to make, not ours; what staff can do is put a course in
        // front of the person who decides.
        if (ctx.isStaff && assigneeId !== ctx.userId) {
            const owns = await prisma.membership.findFirst({
                where: { userId: assigneeId, organizationId: ctx.organizationId, role: 'owner' },
                select: { id: true },
            });
            if (!owns) {
                return NextResponse.json(
                    { error: "EcoFusion can only assign courses to a business's owner" },
                    { status: 403 }
                );
            }
        }

        if (!courseId || !assigneeId) {
            return NextResponse.json({ error: 'Course ID and Assignee ID are required' }, { status: 400 });
        }

        // Check if assignment already exists
        const existing = await prisma.courseAssignment.findUnique({
            where: {
                courseId_assigneeId: { courseId, assigneeId }
            }
        });

        if (existing) {
            return NextResponse.json({ error: 'Course already assigned to this user' }, { status: 400 });
        }

        // Get course details for notification
        const course = await prisma.trainingCourse.findUnique({
            where: { id: courseId }
        });

        if (!course) {
            return NextResponse.json({ error: 'Course not found' }, { status: 404 });
        }

        // Create assignment
        const assignment = await prisma.courseAssignment.create({
            data: {
                courseId,
                assigneeId,
                assignedById: ctx.userId,
                dueDate: dueDate ? new Date(dueDate) : null,
                priority: priority || 'normal',
                notes
            },
            include: {
                course: true,
                assignee: {
                    select: { id: true, name: true, email: true }
                }
            }
        });

        // Create notification for the assignee
        await prisma.notification.create({
            data: {
                userId: assigneeId,
                title: 'New Training Assigned',
                message: `You have been assigned "${course.title}". ${dueDate ? `Due by ${new Date(dueDate).toLocaleDateString()}.` : ''} ${course.isRequired ? 'This is a required compliance course.' : ''}`,
                type: 'task',
                link: '/academy'
            }
        });

        return NextResponse.json(assignment);
    } catch (error) {
        console.error('Failed to create assignment:', error);
        return NextResponse.json({ error: 'Failed to create assignment' }, { status: 500 });
    }
}

// DELETE - Remove course assignment (admin only)
export async function DELETE(request: Request) {
    try {
        const { ctx, refusal } = await activeOrg();
        if (refusal) return refusal;

        const isAdmin = canAdminister(ctx);
        if (!isAdmin) {
            return NextResponse.json({ error: 'Admin access required' }, { status: 403 });
        }

        const { searchParams } = new URL(request.url);
        const assignmentId = searchParams.get('id');

        if (!assignmentId) {
            return NextResponse.json({ error: 'Assignment ID required' }, { status: 400 });
        }

        await prisma.courseAssignment.delete({
            where: { id: assignmentId }
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Failed to delete assignment:', error);
        return NextResponse.json({ error: 'Failed to delete assignment' }, { status: 500 });
    }
}
