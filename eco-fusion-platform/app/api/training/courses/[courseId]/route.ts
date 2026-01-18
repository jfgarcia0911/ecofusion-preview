import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';

// GET - Fetch single course with lessons
export async function GET(
    request: Request,
    { params }: { params: Promise<{ courseId: string }> }
) {
    try {
        const session = await auth();

        if (!session?.user?.id) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const { courseId } = await params;

        const course = await prisma.trainingCourse.findUnique({
            where: { id: courseId },
            include: {
                lessons: {
                    orderBy: { sortOrder: 'asc' }
                }
            }
        });

        if (!course) {
            return NextResponse.json({ error: 'Course not found' }, { status: 404 });
        }

        return NextResponse.json(course);
    } catch (error) {
        console.error('Failed to fetch course:', error);
        return NextResponse.json({ error: 'Failed to fetch course' }, { status: 500 });
    }
}
