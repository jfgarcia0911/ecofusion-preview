import { NextResponse } from 'next/server';
import { canAdminister, isSameOrganization } from '@/lib/tenancy';
import { activeOrg } from '@/lib/api-access';
import { prisma } from '@/lib/prisma';
import { isPlatformRole } from '@/lib/roles';
import { visibleToOrganization } from '@/lib/training';

/** One row of the assignment list query in GET. Counts are cast to int in SQL. */
interface AssignmentRow {
    id: string;
    courseId: string;
    assigneeId: string;
    assignedById: string;
    dueDate: Date | null;
    priority: string;
    notes: string | null;
    status: string;
    createdAt: Date;
    updatedAt: Date;
    c_code: string;
    c_title: string;
    c_description: string;
    c_category: string;
    c_duration: number;
    c_isRequired: boolean;
    c_renewalDays: number | null;
    c_passScore: number;
    assignedByName: string | null;
    totalLessons: number;
    completedLessons: number;
    cc_id: string | null;
    cc_completedAt: Date | null;
    cc_quizScore: number | null;
    cc_passed: boolean | null;
    cc_certificateId: string | null;
    cc_expiresAt: Date | null;
    cc_createdAt: Date | null;
}

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

        // One query for the whole list: each assignment with its course, who
        // assigned it, the person's completion of it if any, and two counts -
        // lessons in the course and lessons they have finished.
        //
        // Written as SQL because Prisma answers a nested include with a chain
        // of queries, each waiting on the last: assignments, then their
        // courses, then every lesson of every course, then who assigned them.
        // That was fifteen statements and three to four round trips to the
        // database in Tokyo, measured at 1.4 s where one trip is 0.4 s, and it
        // fetched every lesson row only to count them.
        //
        // The visibility rule is lib/training's assignmentShownIn, the same one
        // the rest of the app uses: a business's own courses always, and an
        // EcoFusion course only while this business holds it.
        const rows = await prisma.$queryRaw<AssignmentRow[]>`
            SELECT
                a."id", a."courseId", a."assigneeId", a."assignedById", a."dueDate",
                a."priority", a."notes", a."status", a."createdAt", a."updatedAt",
                c."code" AS "c_code", c."title" AS "c_title", c."description" AS "c_description",
                c."category" AS "c_category", c."duration" AS "c_duration",
                c."isRequired" AS "c_isRequired", c."renewalDays" AS "c_renewalDays",
                c."passScore" AS "c_passScore",
                u."name" AS "assignedByName",
                (SELECT count(*)::int FROM "TrainingLesson" l
                  WHERE l."courseId" = a."courseId") AS "totalLessons",
                (SELECT count(*)::int FROM "LessonCompletion" lc
                   JOIN "TrainingLesson" l ON l."id" = lc."lessonId"
                  WHERE l."courseId" = a."courseId" AND lc."userId" = a."assigneeId") AS "completedLessons",
                cc."id" AS "cc_id", cc."completedAt" AS "cc_completedAt", cc."quizScore" AS "cc_quizScore",
                cc."passed" AS "cc_passed", cc."certificateId" AS "cc_certificateId",
                cc."expiresAt" AS "cc_expiresAt", cc."createdAt" AS "cc_createdAt"
            FROM "CourseAssignment" a
            JOIN "TrainingCourse" c ON c."id" = a."courseId"
            LEFT JOIN "User" u ON u."id" = a."assignedById"
            LEFT JOIN "CourseCompletion" cc
                   ON cc."courseId" = a."courseId" AND cc."userId" = a."assigneeId"
            WHERE a."assigneeId" = ${targetUserId}
              AND (
                    c."organizationId" IS NOT NULL
                 OR EXISTS (SELECT 1 FROM "CourseGrant" g
                             WHERE g."courseId" = c."id" AND g."organizationId" = ${ctx.organizationId})
              )
            ORDER BY a."createdAt" DESC
        `;

        // The same shape the screens already read, less the lesson list,
        // which nothing needed beyond its length.
        const enrichedAssignments = rows.map((row) => ({
            id: row.id,
            courseId: row.courseId,
            assigneeId: row.assigneeId,
            assignedById: row.assignedById,
            dueDate: row.dueDate,
            priority: row.priority,
            notes: row.notes,
            status: row.status,
            createdAt: row.createdAt,
            updatedAt: row.updatedAt,
            course: {
                id: row.courseId,
                code: row.c_code,
                title: row.c_title,
                description: row.c_description,
                category: row.c_category,
                duration: row.c_duration,
                isRequired: row.c_isRequired,
                renewalDays: row.c_renewalDays,
                passScore: row.c_passScore,
                lessonCount: row.totalLessons,
            },
            assignedBy: { id: row.assignedById, name: row.assignedByName },
            completion: row.cc_id
                ? {
                      id: row.cc_id,
                      courseId: row.courseId,
                      userId: row.assigneeId,
                      completedAt: row.cc_completedAt,
                      quizScore: row.cc_quizScore,
                      passed: row.cc_passed,
                      certificateId: row.cc_certificateId,
                      expiresAt: row.cc_expiresAt,
                      createdAt: row.cc_createdAt,
                  }
                : undefined,
            progress: {
                totalLessons: row.totalLessons,
                completedLessons: row.completedLessons,
                percentComplete:
                    row.totalLessons > 0
                        ? Math.round((row.completedLessons / row.totalLessons) * 100)
                        : 0,
            },
        }));

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

        // EcoFusion staff assign only with the "Assign courses" permission,
        // checked for every staff request in lib/tenancy before this route
        // runs, and with it may assign to anyone in the business. The master
        // account needs none. Either way it is recorded in the trail the owner
        // reads.

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

        // Only a course this business can open. Without this any course id
        // could be assigned, including one the business never bought and a
        // course another business wrote for itself.
        const course = await prisma.trainingCourse.findFirst({
            where: { id: courseId, ...visibleToOrganization(ctx.organizationId) }
        });

        if (!course) {
            return NextResponse.json(
                { error: 'Your business does not have that course' },
                { status: 404 }
            );
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
