import { NextResponse } from 'next/server';
import type Stripe from 'stripe';
import { getStripe } from '@/lib/stripe';
import {
    applyAccountUpdate,
    applyClientSubscription,
    applyDeauthorization,
} from '@/lib/sub-account-billing';
import { report } from '@/lib/monitoring';

// Events from agencies' connected Stripe accounts: sub-accounts paying their
// agency, and an agency's account becoming able to take payments.
//
// A separate endpoint from /api/billing/webhook because Stripe sends
// connected-account events to a Connect endpoint, signed with its own secret
// (STRIPE_CONNECT_WEBHOOK_SECRET).
export const runtime = 'nodejs';

export async function POST(request: Request) {
    const stripe = getStripe();
    const secret = process.env.STRIPE_CONNECT_WEBHOOK_SECRET;
    if (!stripe || !secret) {
        await report({
            event: 'stripe.connect_webhook.unconfigured',
            message: `${!stripe ? 'STRIPE_SECRET_KEY' : 'STRIPE_CONNECT_WEBHOOK_SECRET'} is not set. Sub-account payments rely on the return from checkout until it is.`,
        });
        return NextResponse.json({ error: 'Billing is not configured' }, { status: 503 });
    }

    const signature = request.headers.get('stripe-signature');
    if (!signature) return NextResponse.json({ error: 'Missing signature' }, { status: 400 });

    let event: Stripe.Event;
    try {
        event = stripe.webhooks.constructEvent(await request.text(), signature, secret);
    } catch (error) {
        console.error('Stripe Connect signature verification failed:', error);
        return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
    }

    try {
        const account = event.account;
        switch (event.type) {
            case 'account.updated':
                await applyAccountUpdate(event.data.object as Stripe.Account);
                break;

            case 'checkout.session.completed': {
                const session = event.data.object as Stripe.Checkout.Session;
                if (session.metadata?.kind === 'sub_account' && session.subscription && account) {
                    const subscription = await stripe.subscriptions.retrieve(
                        typeof session.subscription === 'string' ? session.subscription : session.subscription.id,
                        {},
                        { stripeAccount: account }
                    );
                    await applyClientSubscription(subscription, account);
                }
                break;
            }

            case 'customer.subscription.created':
            case 'customer.subscription.updated':
            case 'customer.subscription.deleted': {
                if (!account) break;
                // Read as it is now rather than as the event says. Stripe does
                // not deliver in order, and a late "past_due" must not lock a
                // business that has since paid.
                const sent = event.data.object as Stripe.Subscription;
                const current = await stripe.subscriptions.retrieve(sent.id, {}, { stripeAccount: account });
                await applyClientSubscription(current, account);
                break;
            }

            case 'account.application.deauthorized':
                if (account) await applyDeauthorization(account);
                break;

            default:
                break;
        }
        return NextResponse.json({ received: true });
    } catch (error) {
        await report({
            event: 'stripe.connect_webhook.failed',
            message: `Failed to handle ${event.type}; Stripe will retry.`,
            detail: { error, eventId: event.id, account: event.account },
        });
        return NextResponse.json({ error: 'Handler failed' }, { status: 500 });
    }
}
