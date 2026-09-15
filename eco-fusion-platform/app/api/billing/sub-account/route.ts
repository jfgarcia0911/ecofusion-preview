import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { getOrgContext } from '@/lib/tenancy';
import { clientCheckoutUrl } from '@/lib/sub-account-billing';

// POST - Start a Stripe Checkout for this business's $99 a month, paid to its
// agency on the agency's own Stripe account.
//
// Only the business's owner, signed in as themselves: somebody who stepped in
// from above does not pay on the business's behalf.
export async function POST() {
    try {
        const [session, ctx] = await Promise.all([auth(), getOrgContext()]);
        if (!session?.user?.id || !ctx) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }
        if (ctx.role !== 'owner' || ctx.entered) {
            return NextResponse.json({ error: "Only the business's owner can subscribe" }, { status: 403 });
        }
        if (ctx.client.reason === 'exempt') {
            return NextResponse.json({ error: "This business is covered by its agency's plan" }, { status: 400 });
        }
        if (ctx.client.reason === 'active') {
            return NextResponse.json({ error: 'This business is already subscribed' }, { status: 400 });
        }
        if (!ctx.client.canPay) {
            return NextResponse.json({ error: 'Your agency has not switched on payments yet' }, { status: 503 });
        }

        const url = await clientCheckoutUrl(ctx.organizationId, session.user.email ?? null);
        return NextResponse.json({ url });
    } catch (error) {
        console.error('Failed to start sub-account checkout:', error);
        return NextResponse.json({ error: 'Failed to start checkout' }, { status: 500 });
    }
}
