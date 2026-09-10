import { NextResponse } from 'next/server';
import { activeOrg } from '@/lib/api-access';
import { cancelCheckoutSession } from '@/lib/course-shop';

/**
 * POST - The owner pressed Back or Cancel on the checkout inside the page.
 *
 * Expires the Stripe session so it cannot be paid later. Answers `cancelled`,
 * or - if the payment had already gone through - `unlocked`, so the page can
 * say so rather than claim nothing was charged.
 */
export async function POST(request: Request) {
    try {
        const { ctx, refusal } = await activeOrg();
        if (refusal) return refusal;
        if (ctx.role !== 'owner') {
            return NextResponse.json({ error: 'Only the owner buys courses' }, { status: 403 });
        }

        const { sessionId } = await request.json();
        if (typeof sessionId !== 'string' || !sessionId.startsWith('cs_')) {
            return NextResponse.json({ error: 'That is not a checkout' }, { status: 400 });
        }

        const outcome = await cancelCheckoutSession(sessionId, ctx.organizationId);
        return NextResponse.json({ outcome });
    } catch (error) {
        console.error('Failed to cancel a course checkout:', error);
        return NextResponse.json({ error: 'Failed to cancel the checkout' }, { status: 500 });
    }
}
