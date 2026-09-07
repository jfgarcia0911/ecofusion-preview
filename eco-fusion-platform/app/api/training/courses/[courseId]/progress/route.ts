import { NextResponse } from 'next/server';
import { getOrgContext } from '@/lib/tenancy';
import { prisma } from '@/lib/prisma';

// GET - Fetch user's lesson completions for a course
export async function GET(
    request: Request,
    { params }: { params: Promise<{ courseId: string }> }
) {
    try {
        const ctx = await getOrgContext();

        if (!ctx) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const { courseId } = await params;

        // Get all lessons for this course
        const lessons = await prisma.trainingLesson.findMany({
            where: { courseId },
            select: { id: true }
        });

        const lessonIds = lessons.map(l => l.id);

        // Get user's completions for these lessons
        const completions = await prisma.lessonCompletion.findMany({
            where: {
                userId: ctx.userId,
                lessonId: { in: lessonIds }
            },
            select: {
                lessonId: true,
                completedAt: true,
                quizScore: true
            }
        });

        return NextResponse.json(completions);
    } catch (error) {
        console.error('Failed to fetch course progress:', error);
        return NextResponse.json({ error: 'Failed to fetch course progress' }, { status: 500 });
    }
}
