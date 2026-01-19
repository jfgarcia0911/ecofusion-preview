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
                },
                _count: {
                    select: {
                        assignments: true,
                        completions: true,
                    },
                },
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

// PATCH - Update a course (admin only)
export async function PATCH(
    request: Request,
    { params }: { params: Promise<{ courseId: string }> }
) {
    try {
        const session = await auth();

        if (!session?.user?.id) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const isAdmin = session.user.role === 'admin' || session.user.role === 'manager';
        if (!isAdmin) {
            return NextResponse.json({ error: 'Admin access required' }, { status: 403 });
        }

        const { courseId } = await params;
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
            isActive,
            sortOrder,
        } = data;

        // Verify course exists
        const existingCourse = await prisma.trainingCourse.findUnique({
            where: { id: courseId },
        });

        if (!existingCourse) {
            return NextResponse.json({ error: 'Course not found' }, { status: 404 });
        }

        // Check for duplicate code if code is being changed
        if (code && code !== existingCourse.code) {
            const duplicateCourse = await prisma.trainingCourse.findUnique({
                where: { code },
            });
            if (duplicateCourse) {
                return NextResponse.json({
                    error: 'A course with this code already exists'
                }, { status: 409 });
            }
        }

        const course = await prisma.trainingCourse.update({
            where: { id: courseId },
            data: {
                code: code !== undefined ? code : undefined,
                title: title !== undefined ? title : undefined,
                description: description !== undefined ? description : undefined,
                category: category !== undefined ? category : undefined,
                duration: duration !== undefined ? duration : undefined,
                isRequired: isRequired !== undefined ? isRequired : undefined,
                renewalDays: renewalDays !== undefined ? renewalDays : undefined,
                passScore: passScore !== undefined ? passScore : undefined,
                isActive: isActive !== undefined ? isActive : undefined,
                sortOrder: sortOrder !== undefined ? sortOrder : undefined,
            },
            include: {
                lessons: {
                    orderBy: { sortOrder: 'asc' },
                },
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
        console.error('Failed to update training course:', error);
        return NextResponse.json({ error: 'Failed to update training course' }, { status: 500 });
    }
}

// DELETE - Delete a course (admin only)
export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ courseId: string }> }
) {
    try {
        const session = await auth();

        if (!session?.user?.id) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const isAdmin = session.user.role === 'admin' || session.user.role === 'manager';
        if (!isAdmin) {
            return NextResponse.json({ error: 'Admin access required' }, { status: 403 });
        }

        const { courseId } = await params;

        // Verify course exists
        const existingCourse = await prisma.trainingCourse.findUnique({
            where: { id: courseId },
            include: {
                _count: {
                    select: {
                        completions: true,
                        assignments: true,
                    },
                },
            },
        });

        if (!existingCourse) {
            return NextResponse.json({ error: 'Course not found' }, { status: 404 });
        }

        // Prevent deletion if course has completions
        if (existingCourse._count.completions > 0) {
            return NextResponse.json({
                error: 'Cannot delete course with existing completions. Deactivate it instead.',
                completionCount: existingCourse._count.completions,
            }, { status: 400 });
        }

        // Delete course (cascade will handle lessons, assignments)
        await prisma.trainingCourse.delete({ where: { id: courseId } });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Failed to delete training course:', error);
        return NextResponse.json({ error: 'Failed to delete training course' }, { status: 500 });
    }
}
