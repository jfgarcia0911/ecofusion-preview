import { NextResponse } from 'next/server';
import { activeOrg } from '@/lib/api-access';
import { prisma } from '@/lib/prisma';
import { CourseGrantError, setCourseGrants } from '@/lib/training';

/**
 * A business choosing which of EcoFusion's classes it carries.
 *
 * The owner's decision, as the curriculum a business teaches is part of what
 * the business is. This is the only place it is made: the agency view no
 * longer has a screen of its own for it.
 *
 * Staff inside a business act with a supervisor's standing and are refused
 * here. The master account enters as the owner and may choose, and its choice
 * is recorded in the business's access record as EcoFusion's rather than the
 * owner's.
 */

// GET - The catalogue, and which of it this business carries.
//
// One request rather than two: the page needs both before it can draw anything,
// and they live a long way from the function asking.
export async function GET() {
    try {
        const { ctx, refusal } = await activeOrg();
        if (refusal) return refusal;
        if (ctx.role !== 'owner') {
            return NextResponse.json({ error: 'Only the owner chooses classes' }, { status: 403 });
        }

        const [courses, grants] = await Promise.all([
            prisma.trainingCourse.findMany({
                where: { organizationId: null },
                select: {
                    id: true,
                    code: true,
                    title: true,
                    category: true,
                    duration: true,
                    isActive: true,
                    _count: { select: { lessons: true } },
                },
                orderBy: { sortOrder: 'asc' },
            }),
            prisma.courseGrant.findMany({
                where: { organizationId: ctx.organizationId },
                select: { courseId: true },
            }),
        ]);

        return NextResponse.json({
            courses: courses.map((course) => ({
                id: course.id,
                code: course.code,
                title: course.title,
                category: course.category,
                duration: course.duration,
                isActive: course.isActive,
                lessonCount: course._count.lessons,
            })),
            courseIds: grants.map((grant) => grant.courseId),
        });
    } catch (error) {
        console.error('Failed to load classes:', error);
        return NextResponse.json({ error: 'Failed to load classes' }, { status: 500 });
    }
}

// PUT - Set exactly which classes this business carries.
export async function PUT(request: Request) {
    try {
        const { ctx, refusal } = await activeOrg();
        if (refusal) return refusal;
        if (ctx.role !== 'owner') {
            return NextResponse.json({ error: 'Only the owner chooses classes' }, { status: 403 });
        }

        const { courseIds } = await request.json();
        if (!Array.isArray(courseIds) || courseIds.some((id) => typeof id !== 'string')) {
            return NextResponse.json({ error: 'courseIds must be a list' }, { status: 400 });
        }

        try {
            const result = await setCourseGrants(ctx.organizationId, courseIds, ctx.userId);
            return NextResponse.json(result);
        } catch (error) {
            if (error instanceof CourseGrantError) {
                return NextResponse.json({ error: error.message }, { status: 400 });
            }
            throw error;
        }
    } catch (error) {
        console.error('Failed to save classes:', error);
        return NextResponse.json({ error: 'Failed to save classes' }, { status: 500 });
    }
}
