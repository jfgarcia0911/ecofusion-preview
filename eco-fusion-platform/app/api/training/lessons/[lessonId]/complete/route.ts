import { NextResponse } from 'next/server';
import { activeOrg } from '@/lib/api-access';
import { prisma } from '@/lib/prisma';
import { visibleToOrganization } from '@/lib/training';
import { grade } from '@/lib/quiz';

// POST - Mark lesson as complete
export async function POST(
    request: Request,
    { params }: { params: Promise<{ lessonId: string }> }
) {
    try {
        const { ctx, refusal } = await activeOrg();
        if (refusal) return refusal;

        // A support account is not a trainee. It has no training record of its
        // own, so there is nothing here for it to complete.
        if (ctx.isStaff) {
            return NextResponse.json(
                { error: 'An EcoFusion account has no training record' },
                { status: 403 }
            );
        }

        const { lessonId } = await params;
        const data = await request.json();
        const timeSpent = typeof data.timeSpent === 'number' ? data.timeSpent : null;

        // The lesson, and only if its course is one this business holds.
        const lesson = await prisma.trainingLesson.findFirst({
            where: { id: lessonId, course: visibleToOrganization(ctx.organizationId) },
            include: { course: true }
        });

        if (!lesson) {
            return NextResponse.json({ error: 'Lesson not found' }, { status: 404 });
        }

        // A quiz is marked here, against answers the browser was never sent.
        // Any score the request carries is ignored; what counts is what was
        // chosen. A quiz that is not passed is not completed - the attempt is
        // answered with the mark and nothing is recorded, so the lesson stays
        // open to try again.
        let quizScore: number | null = null;
        let graded: ReturnType<typeof grade> | null = null;
        if (lesson.type === 'quiz') {
            const answers =
                data.answers && typeof data.answers === 'object' ? data.answers : {};
            graded = grade(lesson.questions, answers, lesson.course.passScore);
            if (graded.total === 0) {
                return NextResponse.json({ error: 'This quiz has no questions' }, { status: 409 });
            }
            if (!graded.passed) {
                return NextResponse.json({
                    passed: false,
                    passScore: lesson.course.passScore,
                    grade: graded,
                });
            }
            quizScore = graded.score;
        }

        // Create or update lesson completion
        const completion = await prisma.lessonCompletion.upsert({
            where: {
                lessonId_userId: { lessonId, userId: ctx.userId }
            },
            update: {
                completedAt: new Date(),
                quizScore,
                timeSpent
            },
            create: {
                lessonId,
                userId: ctx.userId,
                quizScore,
                timeSpent
            }
        });

        // Check if all lessons in course are completed
        const courseLessons = await prisma.trainingLesson.findMany({
            where: { courseId: lesson.courseId }
        });

        const completedLessons = await prisma.lessonCompletion.findMany({
            where: {
                userId: ctx.userId,
                lessonId: { in: courseLessons.map(l => l.id) }
            }
        });

        const allCompleted = courseLessons.length === completedLessons.length;

        // Update assignment status to in_progress if not already
        await prisma.courseAssignment.updateMany({
            where: {
                courseId: lesson.courseId,
                assigneeId: ctx.userId,
                status: 'assigned'
            },
            data: {
                status: 'in_progress'
            }
        });

        return NextResponse.json({
            completion,
            passed: true,
            ...(graded && { passScore: lesson.course.passScore, grade: graded }),
            courseProgress: {
                totalLessons: courseLessons.length,
                completedLessons: completedLessons.length,
                allCompleted
            }
        });
    } catch (error) {
        console.error('Failed to complete lesson:', error);
        return NextResponse.json({ error: 'Failed to complete lesson' }, { status: 500 });
    }
}
