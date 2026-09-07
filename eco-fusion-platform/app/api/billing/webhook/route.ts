import { NextResponse } from 'next/server';
import type Stripe from 'stripe';
import { prisma } from '@/lib/prisma';
import { getStripe } from '@/lib/stripe';

// Stripe signs the raw body, so it must not be parsed before verification.
export const runtime = 'nodejs';

/** Apply a subscription's current state to the farm it belongs to. */
async function applySubscription(subscription: Stripe.Subscription) {
  const organizationId = subscription.metadata?.organizationId;
  if (!organizationId) {
    console.warn('Stripe subscription without organizationId:', subscription.id);
    return;
  }

  // Stripe reports several states; only these two admit a farm.
  const live = subscription.status === 'active' || subscription.status === 'trialing';
  const periodEndSeconds = (subscription as unknown as { current_period_end?: number })
    .current_period_end;

  await prisma.organization.update({
    where: { id: organizationId },
    data: {
      plan: live ? 'pro' : 'trial',
      subscriptionStatus: live ? 'active' : subscription.status === 'past_due' ? 'past_due' : 'canceled',
      currentPeriodEnd: periodEndSeconds ? new Date(periodEndSeconds * 1000) : null,
      canceledAt: subscription.canceled_at ? new Date(subscription.canceled_at * 1000) : null,
      stripeSubscriptionId: subscription.id,
    },
  });
}

export async function POST(request: Request) {
  const stripe = getStripe();
  const secret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!stripe || !secret) {
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
