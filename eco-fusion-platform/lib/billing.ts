/**
 * Turning a Stripe subscription into an agency's access.
 *
 * The subscription belongs to the agency, and covers every business it holds.
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
import { getStripe, planForStripePrice } from '@/lib/stripe';
import { isPlanKey } from '@/lib/plans';

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

/**
 * Map Stripe's status onto the agency's, which has fewer states.
 *
 * Null for the states that say nothing yet: `incomplete` is a first payment
 * still being confirmed (3-D Secure, a bank transfer) and
 * `incomplete_expired` one that never was. Neither is a cancellation, and
 * reading them as one ended a trial the moment somebody started to pay.
 */
export function statusFor(subscription: Stripe.Subscription): string | null {
  if (subscription.status === 'active' || subscription.status === 'trialing') return 'active';
  if (subscription.status === 'past_due' || subscription.status === 'unpaid') return 'past_due';
  if (subscription.status === 'incomplete' || subscription.status === 'incomplete_expired') return null;
  return 'canceled';
}

export const isLiveSubscription = (subscription: Stripe.Subscription) =>
  subscription.status === 'active' || subscription.status === 'trialing';

/**
 * Which plan a subscription is for: the Price it charges, which is what
 * actually decides what the agency pays, and failing that what checkout wrote
 * into its metadata. Null when neither says, so the stored plan is left alone.
 */
function planOf(subscription: Stripe.Subscription): string | null {
  const price = subscription.items?.data?.[0]?.price?.id;
  const fromPrice = planForStripePrice(price);
  if (fromPrice) return fromPrice;
  const fromMetadata = subscription.metadata?.plan;
  return isPlanKey(fromMetadata) ? fromMetadata : null;
}

/**
 * Apply a subscription's current state to the agency it belongs to.
 *
 * `agencyId` is passed when the caller already knows it; otherwise it comes
 * from the metadata set at checkout. A subscription from before agencies,
 * which names a business, is applied to that business's agency.
 */
export async function applySubscription(
  subscription: Stripe.Subscription,
  agencyId?: string
): Promise<string | null> {
  let id: string | null = agencyId ?? subscription.metadata?.agencyId ?? null;
  if (!id && subscription.metadata?.organizationId) {
    id =
      (
        await prisma.organization.findUnique({
          where: { id: subscription.metadata.organizationId },
          select: { agencyId: true },
        })
      )?.agencyId ?? null;
  }
  if (!id) {
    console.warn('Stripe subscription without an agency:', subscription.id);
    return null;
  }

  const status = statusFor(subscription);
  if (!status) return id;

  // Only the subscription on record speaks for the agency - unless this one
  // is live and that one is not. Otherwise an old subscription renewing, or
  // ending, overwrote the plan and period of the current one, or cancelled an
  // agency that was paying.
  const agency = await prisma.agency.findUnique({
    where: { id },
    select: { stripeSubscriptionId: true, subscriptionStatus: true },
  });
  if (!agency) return null;
  if (
    agency.stripeSubscriptionId &&
    agency.stripeSubscriptionId !== subscription.id &&
    !(isLiveSubscription(subscription) && agency.subscriptionStatus !== 'active')
  ) {
    return id;
  }

  const plan = planOf(subscription);

  await prisma.agency.update({
    where: { id },
    data: {
      ...(plan ? { plan } : {}),
      subscriptionStatus: status,
      currentPeriodEnd: subscriptionPeriodEnd(subscription),
      canceledAt: subscription.canceled_at ? new Date(subscription.canceled_at * 1000) : null,
      stripeSubscriptionId: subscription.id,
    },
  });

  return id;
}

/**
 * Pull an agency's subscription state from Stripe and store it.
 *
 * Used when someone returns from checkout, so paying takes effect immediately
 * even if the webhook never arrives. Returns true when the agency now holds a
 * live subscription.
 */
export async function syncSubscriptionFromStripe(agencyId: string): Promise<boolean> {
  const stripe = getStripe();
  if (!stripe) return false;

  try {
    const agency = await prisma.agency.findUnique({
      where: { id: agencyId },
      select: { stripeCustomerId: true },
    });
    if (!agency?.stripeCustomerId) return false;

    const subscriptions = await stripe.subscriptions.list({
      customer: agency.stripeCustomerId,
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

    await applySubscription(chosen, agencyId);
    return Boolean(live);
  } catch (error) {
    // Reconciling is a best effort - a Stripe outage must not take the billing
    // page down with it, since that page is where someone goes to fix things.
    console.error('Failed to reconcile subscription from Stripe:', error);
    return false;
  }
}
