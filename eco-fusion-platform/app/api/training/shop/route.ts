import { NextResponse } from 'next/server';
import { activeOrg } from '@/lib/api-access';
import { prisma } from '@/lib/prisma';
import { getStripe } from '@/lib/stripe';
import { courseCurrency, packageQuotes, stripePublishableKey } from '@/lib/course-shop';
import { PERMISSIONS } from '@/lib/staff-permissions';

/**
 * GET - The course shop, as this business's owner sees it.
 *
 * Every EcoFusion course that is on sale, every one the business already
 * holds and how it came to, and what the business has bought before. One
 * request, because the page needs all of it before it can draw anything.
 *
 * A course with no price of its own is kept out of the owner's view unless its
 * level is sold as a package, when it is shown as part of that. The master
 * account sees every course, since it can give any of them away.
 *
 * Package prices are quoted for this business, because one that already
 * holds part of a level pays less for the rest.
 */
export async function GET() {
    try {
        const { ctx, refusal } = await activeOrg();
        if (refusal) return refusal;
        // The owner buys. EcoFusion staff allowed to give or take back classes
        // see the shop too, to do that; they cannot buy.
        const canGive = ctx.isMaster || (ctx.isStaff && ctx.staffPermissions.includes(PERMISSIONS.GIVE_CLASSES));
        const canTake = ctx.isMaster || (ctx.isStaff && ctx.staffPermissions.includes(PERMISSIONS.TAKE_CLASSES));
        const canBuy = ctx.role === 'owner';
        if (!canBuy && !canGive && !canTake) {
            return NextResponse.json({ error: 'Only the owner buys courses' }, { status: 403 });
        }

        // Asked first, since the levels sold as packages decide which unpriced
        // courses an owner is shown.
        const packages = await packageQuotes(ctx.organizationId);
        const packaged = packages.map((quote) => quote.category);

        const [courses, grants, purchases] = await Promise.all([
            prisma.trainingCourse.findMany({
                where: {
                    organizationId: null,
                    OR: [
                        { grants: { some: { organizationId: ctx.organizationId } } },
                        canGive
                            ? { isActive: true }
                            : {
                                  isActive: true,
                                  OR: [{ priceCents: { not: null } }, { category: { in: packaged } }],
                              },
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
                    items: {
                        select: {
                            courseCode: true,
                            courseTitle: true,
                            priceCents: true,
                            packageCategory: true,
                        },
                    },
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
            /** Whether paying can happen inside EcoFusion rather than on Stripe's page. */
            embeddedCheckout: getStripe() !== null && stripePublishableKey() !== null,
            /** The master account may give courses and take them back. */
            isMaster: ctx.isMaster,
            /** What this reader may do here. */
            canBuy,
            canGive,
            canTake,
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
            /** Levels sold whole, each quoted for this business. */
            packages: packages.map((quote) => ({
                category: quote.category,
                priceCents: quote.priceCents,
                chargeCents: quote.chargeCents,
                reduced: quote.reduced,
                totalCourses: quote.totalCourses,
                remainingCourses: quote.courseIds.length,
            })),
        });
    } catch (error) {
        console.error('Failed to load the course shop:', error);
        return NextResponse.json({ error: 'Failed to load the course shop' }, { status: 500 });
    }
}
