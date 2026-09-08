import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';
import { isPlatformAdmin } from '@/lib/staff';

// GET - EcoFusion's own course catalogue.
//
// Platform courses only: a business's private courses are its own business and are
// not listed here, even to staff. Seeing inside a business means entering it.
export async function GET() {
    try {
        const session = await auth();
        if (!session?.user?.id) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        if (!(await isPlatformAdmin(session.user.id))) {
            return NextResponse.json({ error: 'Staff access required' }, { status: 403 });
        }

        const courses = await prisma.trainingCourse.findMany({
            where: { organizationId: null },
            select: {
                id: true,
                code: true,
                title: true,
                category: true,
                duration: true,
                isRequired: true,
                isActive: true,
                _count: { select: { grants: true, lessons: true } },
            },
            orderBy: { sortOrder: 'asc' },
        });

        return NextResponse.json({
            courses: courses.map((course) => ({
                id: course.id,
                code: course.code,
                title: course.title,
                category: course.category,
                duration: course.duration,
                isRequired: course.isRequired,
                isActive: course.isActive,
                lessonCount: course._count.lessons,
                loadedIntoBusinesses: course._count.grants,
            })),
        });
    } catch (error) {
        console.error('Failed to list platform courses:', error);
        return NextResponse.json({ error: 'Failed to list courses' }, { status: 500 });
    }
}
