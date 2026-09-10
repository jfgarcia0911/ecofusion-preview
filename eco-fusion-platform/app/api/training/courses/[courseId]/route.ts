import { NextResponse } from 'next/server';
import { canAdminister } from '@/lib/tenancy';
import { activeOrg } from '@/lib/api-access';
import { ownedByOrganization, visibleToOrganization } from '@/lib/training';
import { prisma } from '@/lib/prisma';
import { publicQuestions } from '@/lib/quiz';

// GET - Fetch single course with lessons
export async function GET(
    request: Request,
    { params }: { params: Promise<{ courseId: string }> }
) {
    try {
        const { ctx, refusal } = await activeOrg();
        if (refusal) return refusal;

        const { courseId } = await params;

        // Scoped to what this farm holds, so an id belonging to another farm's
        // course reads as absent rather than as forbidden.
        const course = await prisma.trainingCourse.findFirst({
            where: { id: courseId, ...visibleToOrganization(ctx.organizationId) },
            include: {
                lessons: {
                    // Ties broken by id, as the completion route does, so both
                    // agree on which lesson comes first.
                    orderBy: [{ sortOrder: 'asc' }, { id: 'asc' }]
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

        // Quiz questions go out without their answers. This is what the course
        // player reads, and it used to hand every learner the answer key in the
        // page data; the quiz is marked on the server now, where they stay.
        return NextResponse.json({
            ...course,
            lessons: course.lessons.map((lesson) => ({
                ...lesson,
                questions: lesson.type === 'quiz' ? publicQuestions(lesson.questions) : null,
            })),
        });
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
        const { ctx, refusal } = await activeOrg();
        if (refusal) return refusal;

        const isAdmin = canAdminister(ctx);
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
        const existingCourse = await prisma.trainingCourse.findFirst({
            where: { id: courseId, ...visibleToOrganization(ctx.organizationId) },
        });

        if (!existingCourse) {
            return NextResponse.json({ error: 'Course not found' }, { status: 404 });
        }

        // A granted course stays EcoFusion's. Editing it here would rewrite it
        // for every other farm holding it, which is exactly what used to happen.
        if (!ownedByOrganization(existingCourse, ctx.organizationId)) {
            return NextResponse.json({
                error: 'This course belongs to EcoFusion and cannot be edited here.'
            }, { status: 403 });
        }

        // Check for duplicate code if code is being changed
        if (code && code !== existingCourse.code) {
            const duplicateCourse = await prisma.trainingCourse.findFirst({
                where: { code, organizationId: ctx.organizationId },
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
                    orderBy: [{ sortOrder: 'asc' }, { id: 'asc' }],
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
        const { ctx, refusal } = await activeOrg();
        if (refusal) return refusal;

        const isAdmin = canAdminister(ctx);
        if (!isAdmin) {
            return NextResponse.json({ error: 'Admin access required' }, { status: 403 });
        }

        const { courseId } = await params;

        // Verify course exists
        const existingCourse = await prisma.trainingCourse.findFirst({
            where: { id: courseId, ...visibleToOrganization(ctx.organizationId) },
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

        // Deleting a granted course would take it from every farm at once.
        // A farm that no longer wants one asks for it to be unloaded instead.
        if (!ownedByOrganization(existingCourse, ctx.organizationId)) {
            return NextResponse.json({
                error: 'This course belongs to EcoFusion and cannot be deleted here.'
            }, { status: 403 });
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
