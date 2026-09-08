import { NextResponse } from 'next/server';
import { getOrgContext, canAdminister, isSameOrganization } from '@/lib/tenancy';
import { prisma } from '@/lib/prisma';

// GET - Fetch course assignments
export async function GET(request: Request) {
    try {
        const ctx = await getOrgContext();

        if (!ctx) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

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

        const assignments = await prisma.courseAssignment.findMany({
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
        });

        // Get completion status for each assignment
        const completions = await prisma.courseCompletion.findMany({
            where: {
                userId: targetUserId,
                courseId: { in: assignments.map(a => a.courseId) }
            }
        });

        // Get lesson completions for progress tracking
        const lessonIds = assignments.flatMap(a => a.course.lessons.map(l => l.id));
        const lessonCompletions = await prisma.lessonCompletion.findMany({
            where: {
                userId: targetUserId,
                lessonId: { in: lessonIds }
            }
        });

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
        const ctx = await getOrgContext();

        if (!ctx) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const isAdmin = canAdminister(ctx);
        if (!isAdmin) {
            return NextResponse.json({ error: 'Admin access required' }, { status: 403 });
        }

        const data = await request.json();
        const { courseId, assigneeId, dueDate, priority, notes } = data;

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
        const ctx = await getOrgContext();

        if (!ctx) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

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
