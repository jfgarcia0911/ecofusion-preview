import { NextResponse } from 'next/server';
import { activeOrg } from '@/lib/api-access';
import { prisma } from '@/lib/prisma';
import { getStripe } from '@/lib/stripe';
import { courseCurrency } from '@/lib/course-shop';

/**
 * GET - The course shop, as this business's owner sees it.
 *
 * Every EcoFusion course that is on sale, every one the business already
 * holds and how it came to, and what the business has bought before. One
 * request, because the page needs all of it before it can draw anything.
 *
 * A course with no price yet is kept out of the owner's view: it is not for
 * sale, and a shop full of things that cannot be bought is not a shop. The
 * master account sees those too, since it can give them away.
 */
export async function GET() {
    try {
        const { ctx, refusal } = await activeOrg();
        if (refusal) return refusal;
        if (ctx.role !== 'owner') {
            return NextResponse.json({ error: 'Only the owner buys courses' }, { status: 403 });
        }

        const [courses, grants, purchases] = await Promise.all([
            prisma.trainingCourse.findMany({
                where: {
                    organizationId: null,
                    OR: [
                        { grants: { some: { organizationId: ctx.organizationId } } },
                        ctx.isMaster ? { isActive: true } : { isActive: true, priceCents: { not: null } },
                    ],
                },
                select: {
                    id: true,
                    code: true,
                    title: true,
                    category: true,
                    duration: true,
                    isActive: true,
                    priceCents: true,
                    _count: { select: { lessons: true } },
                },
                orderBy: { sortOrder: 'asc' },
            }),
            prisma.courseGrant.findMany({
                where: { organizationId: ctx.organizationId },
                select: { courseId: true, source: true, createdAt: true },
            }),
            prisma.coursePurchase.findMany({
                where: { organizationId: ctx.organizationId, status: { in: ['paid', 'refunded'] } },
                select: {
                    id: true,
                    status: true,
                    amountCents: true,
                    currency: true,
                    paidAt: true,
                    refundedAt: true,
                    createdAt: true,
                    purchasedBy: { select: { name: true, email: true } },
                    items: { select: { courseCode: true, courseTitle: true, priceCents: true } },
                },
                orderBy: { createdAt: 'desc' },
                take: 50,
            }),
        ]);

        const held = new Map(grants.map((grant) => [grant.courseId, grant]));

        return NextResponse.json({
            currency: courseCurrency(),
            /** Whether paid courses can be bought right now. */
            paymentsReady: getStripe() !== null,
            /** The master account may give courses and take them back. */
            isMaster: ctx.isMaster,
            courses: courses.map((course) => {
                const grant = held.get(course.id);
                return {
                    id: course.id,
                    code: course.code,
                    title: course.title,
                    category: course.category,
                    duration: course.duration,
                    isActive: course.isActive,
                    lessonCount: course._count.lessons,
                    priceCents: course.priceCents,
                    held: grant ? { source: grant.source, since: grant.createdAt } : null,
                };
            }),
            purchases,
        });
    } catch (error) {
        console.error('Failed to load the course shop:', error);
        return NextResponse.json({ error: 'Failed to load the course shop' }, { status: 500 });
    }
}
