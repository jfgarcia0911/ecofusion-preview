import { NextResponse } from 'next/server';
import { activeOrg } from '@/lib/api-access';
import { CourseShopError, startCoursePurchase } from '@/lib/course-shop';

/**
 * POST - Buy courses for this business.
 *
 * The owner's to do, as they are the one who pays for the business. Free
 * courses in the basket are unlocked straight away; the rest go to a Stripe
 * checkout whose address comes back as `url`. Nothing paid for is unlocked
 * here - that waits for Stripe to confirm the payment.
 */
export async function POST(request: Request) {
    try {
        const { ctx, refusal } = await activeOrg();
        if (refusal) return refusal;
        if (ctx.role !== 'owner') {
            return NextResponse.json({ error: 'Only the owner buys courses' }, { status: 403 });
        }

        const { courseIds } = await request.json();
        if (!Array.isArray(courseIds) || courseIds.some((id) => typeof id !== 'string')) {
            return NextResponse.json({ error: 'courseIds must be a list' }, { status: 400 });
        }

        try {
            const result = await startCoursePurchase({
                organizationId: ctx.organizationId,
                userId: ctx.userId,
                courseIds,
            });
            return NextResponse.json(result);
        } catch (error) {
            if (error instanceof CourseShopError) {
                return NextResponse.json({ error: error.message }, { status: error.status });
            }
            throw error;
        }
    } catch (error) {
        console.error('Failed to start a course purchase:', error);
        return NextResponse.json({ error: 'Failed to start the purchase' }, { status: 500 });
    }
}
