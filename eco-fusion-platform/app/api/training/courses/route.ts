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

// POST - Create a new training course (admin only)
export async function POST(request: Request) {
    try {
        const session = await auth();

        if (!session?.user?.id) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const isAdmin = session.user.role === 'admin' || session.user.role === 'manager';
        if (!isAdmin) {
            return NextResponse.json({ error: 'Admin access required' }, { status: 403 });
        }

        const data = await request.json();
        const {
            code,
            title,
            description,
            category,
            duration,
            isRequired,
            renewalDays,
            passScore,
        } = data;

        if (!code || !title || !description || !category || !duration) {
            return NextResponse.json({
                error: 'Code, title, description, category, and duration are required'
            }, { status: 400 });
        }

        // Check for duplicate code
        const existingCourse = await prisma.trainingCourse.findUnique({
            where: { code },
        });

        if (existingCourse) {
            return NextResponse.json({
                error: 'A course with this code already exists'
            }, { status: 409 });
        }

        // Get the next sort order
        const maxSortOrder = await prisma.trainingCourse.aggregate({
            _max: { sortOrder: true },
        });

        const course = await prisma.trainingCourse.create({
            data: {
                code,
                title,
                description,
                category,
                duration,
                isRequired: isRequired || false,
                renewalDays: renewalDays || null,
                passScore: passScore || 80,
                sortOrder: (maxSortOrder._max.sortOrder || 0) + 1,
            },
            include: {
                lessons: true,
                _count: {
                    select: {
                        assignments: true,
                        completions: true,
                    },
                },
            },
        });

        return NextResponse.json(course);
    } catch (error) {
        console.error('Failed to create training course:', error);
        return NextResponse.json({ error: 'Failed to create training course' }, { status: 500 });
    }
}
