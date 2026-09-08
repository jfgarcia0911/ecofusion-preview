/**
 * Turning a Stripe subscription into a farm's access.
 *
 * The webhook is the intended path, but it is the single point of failure in
 * the whole flow: an unset STRIPE_WEBHOOK_SECRET, a tunnel that is not running
 * in local development, or a delivery Stripe has not retried yet all end the
 * same way - the customer has paid and the app still shows a trial notice.
 *
 * So the mapping lives here and two callers share it: the webhook, and a
 * reconcile that reads the live state straight from Stripe when someone comes
 * back from checkout. Both write the same fields from the same source of truth,
 * so whichever arrives first wins and the second is a no-op.
 */

import type Stripe from 'stripe';
import { prisma } from '@/lib/prisma';
import { getStripe } from '@/lib/stripe';

/**
 * A subscription's period end, across API versions.
 *
 * `current_period_end` sat on the subscription until Stripe's 2025 versions
 * moved it onto each item, and the SDK's types followed. Reading only the old
 * location silently stored null, which made a lapse impossible to detect.
 */
export function subscriptionPeriodEnd(subscription: Stripe.Subscription): Date | null {
  const onSubscription = (subscription as unknown as { current_period_end?: number })
    .current_period_end;
  if (typeof onSubscription === 'number') return new Date(onSubscription * 1000);

  const onItem = (
    subscription.items?.data?.[0] as unknown as { current_period_end?: number } | undefined
  )?.current_period_end;
  if (typeof onItem === 'number') return new Date(onItem * 1000);

  return null;
}

/** Map Stripe's status onto the business's, which has fewer states. */
function statusFor(subscription: Stripe.Subscription): { status: string; plan: string } {
  // Stripe reports several states; only these two admit a farm.
  if (subscription.status === 'active' || subscription.status === 'trialing') {
    return { status: 'active', plan: 'pro' };
  }
  if (subscription.status === 'past_due' || subscription.status === 'unpaid') {
    return { status: 'past_due', plan: 'trial' };
  }
  return { status: 'canceled', plan: 'trial' };
}

/**
 * Apply a subscription's current state to the farm it belongs to.
 *
 * `organizationId` is passed when the caller already knows it; otherwise it
 * comes from the metadata set at checkout.
 */
export async function applySubscription(
  subscription: Stripe.Subscription,
  organizationId?: string
): Promise<string | null> {
  const orgId = organizationId ?? subscription.metadata?.organizationId;
  if (!orgId) {
    console.warn('Stripe subscription without organizationId:', subscription.id);
    return null;
  }

  const { status, plan } = statusFor(subscription);

  await prisma.organization.update({
    where: { id: orgId },
    data: {
      plan,
      subscriptionStatus: status,
      currentPeriodEnd: subscriptionPeriodEnd(subscription),
      canceledAt: subscription.canceled_at ? new Date(subscription.canceled_at * 1000) : null,
      stripeSubscriptionId: subscription.id,
    },
  });

  return orgId;
}

/**
 * Pull a farm's subscription state from Stripe and store it.
 *
 * Used when someone returns from checkout, so paying takes effect immediately
 * even if the webhook never arrives. Returns true when the farm now holds a
 * live subscription.
 */
export async function syncSubscriptionFromStripe(organizationId: string): Promise<boolean> {
  const stripe = getStripe();
  if (!stripe) return false;

  try {
    const org = await prisma.organization.findUnique({
      where: { id: organizationId },
      select: { stripeCustomerId: true },
    });
    if (!org?.stripeCustomerId) return false;

    const subscriptions = await stripe.subscriptions.list({
      customer: org.stripeCustomerId,
      status: 'all',
      limit: 10,
    });
    if (subscriptions.data.length === 0) return false;

    // A customer can carry cancelled subscriptions alongside a live one; the
    // live one decides access, and otherwise the most recent describes them.
    const live = subscriptions.data.find(
      (s) => s.status === 'active' || s.status === 'trialing'
    );
    const chosen =
      live ?? [...subscriptions.data].sort((a, b) => b.created - a.created)[0];

    await applySubscription(chosen, organizationId);
    return Boolean(live);
  } catch (error) {
    // Reconciling is a best effort - a Stripe outage must not take the billing
    // page down with it, since that page is where someone goes to fix things.
    console.error('Failed to reconcile subscription from Stripe:', error);
    return false;
  }
}
