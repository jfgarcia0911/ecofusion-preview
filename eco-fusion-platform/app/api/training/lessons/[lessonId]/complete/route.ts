import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';

// POST - Mark lesson as complete
export async function POST(
    request: Request,
    { params }: { params: Promise<{ lessonId: string }> }
) {
    try {
        const session = await auth();

        if (!session?.user?.id) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const { lessonId } = await params;
        const data = await request.json();
        const { quizScore, timeSpent } = data;

        // Verify lesson exists
        const lesson = await prisma.trainingLesson.findUnique({
            where: { id: lessonId },
            include: { course: true }
        });

        if (!lesson) {
            return NextResponse.json({ error: 'Lesson not found' }, { status: 404 });
        }

        // Create or update lesson completion
        const completion = await prisma.lessonCompletion.upsert({
            where: {
                lessonId_userId: { lessonId, userId: session.user.id }
            },
            update: {
                completedAt: new Date(),
                quizScore,
                timeSpent
            },
            create: {
                lessonId,
                userId: session.user.id,
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
                userId: session.user.id,
                lessonId: { in: courseLessons.map(l => l.id) }
            }
        });

        const allCompleted = courseLessons.length === completedLessons.length;

        // Update assignment status to in_progress if not already
        await prisma.courseAssignment.updateMany({
            where: {
                courseId: lesson.courseId,
                assigneeId: session.user.id,
                status: 'assigned'
            },
            data: {
                status: 'in_progress'
            }
        });

        return NextResponse.json({
            completion,
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
