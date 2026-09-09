import { NextResponse } from 'next/server';
import { activeOrg } from '@/lib/api-access';
import { visibleToOrganization } from '@/lib/training';
import { prisma } from '@/lib/prisma';

// GET - The classes this business carries, for the people expected to study them.
//
// Separate from /api/training/courses, which is the administrator's view and
// carries assignment and completion counts across the whole business. A
// learner needs to know what there is to learn and nothing about who else has
// or has not done it, so this returns less rather than the same thing behind a
// weaker check.
export async function GET() {
    try {
        const { ctx, refusal } = await activeOrg();
        if (refusal) return refusal;

        const courses = await prisma.trainingCourse.findMany({
            where: { isActive: true, ...visibleToOrganization(ctx.organizationId) },
            select: {
                id: true,
                code: true,
                title: true,
                description: true,
                category: true,
                duration: true,
                isRequired: true,
                organizationId: true,
                _count: { select: { lessons: true } },
            },
            orderBy: [{ category: 'asc' }, { sortOrder: 'asc' }],
        });

        return NextResponse.json({
            courses: courses.map((course) => ({
                id: course.id,
                code: course.code,
                title: course.title,
                description: course.description,
                category: course.category,
                duration: course.duration,
                isRequired: course.isRequired,
                lessonCount: course._count.lessons,
                /** Written here rather than loaded in from EcoFusion. */
                isOwn: course.organizationId !== null,
            })),
        });
    } catch (error) {
        console.error('Failed to fetch the catalogue:', error);
        return NextResponse.json({ error: 'Failed to load the catalogue' }, { status: 500 });
    }
}
