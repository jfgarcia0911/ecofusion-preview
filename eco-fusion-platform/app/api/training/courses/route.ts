import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';

// GET - Fetch all training courses (admin only)
export async function GET() {
    try {
        const session = await auth();

        if (!session?.user?.id) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const isAdmin = session.user.role === 'admin' || session.user.role === 'manager';
        if (!isAdmin) {
            return NextResponse.json({ error: 'Admin access required' }, { status: 403 });
        }

        const courses = await prisma.trainingCourse.findMany({
            where: { isActive: true },
            include: {
                lessons: {
                    select: { id: true, title: true, type: true, duration: true, sortOrder: true },
                    orderBy: { sortOrder: 'asc' }
                },
                _count: {
                    select: {
                        assignments: true,
                        completions: true
                    }
                }
            },
            orderBy: { sortOrder: 'asc' }
        });

        return NextResponse.json(courses);
    } catch (error) {
        console.error('Failed to fetch training courses:', error);
        return NextResponse.json({ error: 'Failed to fetch training courses' }, { status: 500 });
    }
}
