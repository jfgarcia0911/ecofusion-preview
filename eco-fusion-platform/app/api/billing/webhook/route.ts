import { NextResponse } from 'next/server';
import type Stripe from 'stripe';
import { getStripe } from '@/lib/stripe';
import { applySubscription } from '@/lib/billing';

// Stripe signs the raw body, so it must not be parsed before verification.
export const runtime = 'nodejs';

export async function POST(request: Request) {
  const stripe = getStripe();
  const secret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!stripe || !secret) {
    // This is the failure that looks like "I paid and nothing happened": Stripe
    // takes the payment, posts here, gets a 503, and the farm stays on trial.
    // Say so in the log rather than returning a quiet status nobody reads.
    console.error(
      'Stripe webhook rejected: %s is not set. Paid subscriptions will NOT be applied until it is.',
      !stripe ? 'STRIPE_SECRET_KEY' : 'STRIPE_WEBHOOK_SECRET'
    );
    return NextResponse.json({ error: 'Billing is not configured' }, { status: 503 });
  }

  const signature = request.headers.get('stripe-signature');
  if (!signature) {
    return NextResponse.json({ error: 'Missing signature' }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    const body = await request.text();
    event = stripe.webhooks.constructEvent(body, signature, secret);
  } catch (error) {
    // An unverified body is not trustworthy and must never reach the database.
    console.error('Stripe signature verification failed:', error);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;
        if (session.subscription) {
          const subscription = await stripe.subscriptions.retrieve(
            typeof session.subscription === 'string' ? session.subscription : session.subscription.id
          );
          await applySubscription(subscription);
        }
        break;
      }

      case 'customer.subscription.created':
      case 'customer.subscription.updated':
      case 'customer.subscription.deleted':
        await applySubscription(event.data.object as Stripe.Subscription);
        break;

      default:
        // Everything else is acknowledged and ignored, so Stripe stops retrying.
        break;
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Failed to handle Stripe event:', event.type, error);
    return NextResponse.json({ error: 'Handler failed' }, { status: 500 });
  }
}
