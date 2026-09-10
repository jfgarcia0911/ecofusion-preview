import { NextResponse } from 'next/server';
import { activeOrg } from '@/lib/api-access';
import { confirmCheckoutSession } from '@/lib/course-shop';

/**
 * POST - The owner is back from Stripe; unlock what they paid for.
 *
 * The session id comes from the address Stripe sent them back to, but is only
 * used to ask Stripe about the payment. Whatever the page claims, a course
 * unlocks only if Stripe says this business paid for it.
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

        const outcome = await confirmCheckoutSession(sessionId, ctx.organizationId);
        return NextResponse.json({ outcome });
    } catch (error) {
        console.error('Failed to confirm a course purchase:', error);
        return NextResponse.json({ error: 'Failed to confirm the purchase' }, { status: 500 });
    }
}
