/**
 * What a sub-account pays its agency, as in HighLevel's SaaS mode.
 *
 *   EcoFusion  <- the agency pays for its plan         (lib/billing)
 *   Agency     <- each sub-account pays $99 a month     (this file)
 *
 * A new sub-account gets 30 days. After that, until it pays, its own people
 * can reach Settings and nothing else; the agency's team and EcoFusion still
 * open it in full. The money goes to the agency's own Stripe account, connected
 * with Stripe Connect, so EcoFusion never holds it.
 *
 * Two kinds of business are never shut out for not paying:
 *   - the agency's own, owned by its master account, which the plan covers;
 *   - one whose agency has not connected a Stripe account that can take
 *     payments, since there is nowhere for it to pay.
 */

import type Stripe from 'stripe';
import { prisma } from '@/lib/prisma';
import { appUrl, getStripe } from '@/lib/stripe';
import { subscriptionPeriodEnd } from '@/lib/billing';
import { SUB_ACCOUNT_PRICE_CENTS } from '@/lib/plans';

export interface ClientAccess {
    /** Whether the business's own people may use it past Settings. */
    allowed: boolean;
    /**
     * exempt: the agency's own business.
     * active: paid up.
     * trialing: inside its 30 days.
     * not_set_up: past its 30 days, but its agency cannot take payments yet.
     * unpaid: its 30 days are over and it has not paid.
     * past_due / canceled: it paid, and then stopped.
     */
    reason: 'exempt' | 'active' | 'trialing' | 'not_set_up' | 'unpaid' | 'past_due' | 'canceled';
    /** When the 30 days end, as epoch milliseconds, for the countdown. */
    trialEndsAt: number | null;
    daysLeft: number | null;
    /** Whether the agency can take the payment yet. */
    canPay: boolean;
}

/** The fields an access decision reads. Selected wherever a business is looked up. */
export const CLIENT_BILLING_SELECT = {
    clientBillingExempt: true,
    clientStatus: true,
    clientTrialEndsAt: true,
    clientPeriodEnd: true,
} as const;

export function evaluateClientAccess(
    org: {
        clientBillingExempt: boolean;
        clientStatus: string;
        clientTrialEndsAt: Date | null;
        clientPeriodEnd: Date | null;
    },
    agency: { stripeChargesEnabled: boolean }
): ClientAccess {
    const now = Date.now();
    const trialEndsAt = org.clientTrialEndsAt?.getTime() ?? null;
    const daysLeft = trialEndsAt !== null ? Math.ceil((trialEndsAt - now) / 86_400_000) : null;
    const canPay = agency.stripeChargesEnabled;
    const base = { trialEndsAt, daysLeft, canPay };

    if (org.clientBillingExempt) return { ...base, allowed: true, reason: 'exempt' };

    // Owed, and why: a trial that ran out, or a subscription that stopped.
    let owed: 'unpaid' | 'past_due' | 'canceled';
    if (org.clientStatus === 'active') {
        const lapsed = org.clientPeriodEnd !== null && org.clientPeriodEnd.getTime() < now;
        if (!lapsed) return { ...base, allowed: true, reason: 'active' };
        owed = 'past_due';
    } else if (org.clientStatus === 'past_due' || org.clientStatus === 'canceled') {
        owed = org.clientStatus;
    } else if (trialEndsAt === null || trialEndsAt > now) {
        return { ...base, allowed: true, reason: 'trialing' };
    } else {
        owed = 'unpaid';
    }

    // Nothing to pay with: not the business's fault, so not its lock.
    if (!canPay) return { ...base, allowed: true, reason: 'not_set_up' };
    return { ...base, allowed: false, reason: owed };
}

function statusFor(subscription: Stripe.Subscription): string {
    if (subscription.status === 'active' || subscription.status === 'trialing') return 'active';
    if (subscription.status === 'past_due' || subscription.status === 'unpaid') return 'past_due';
    return 'canceled';
}

/**
 * Apply a sub-account's subscription, from the webhook or a return from
 * checkout. The business is named in the metadata checkout set.
 */
export async function applyClientSubscription(subscription: Stripe.Subscription): Promise<string | null> {
    const organizationId = subscription.metadata?.organizationId;
    if (!organizationId || subscription.metadata?.kind !== 'sub_account') return null;

    const customer =
        typeof subscription.customer === 'string' ? subscription.customer : subscription.customer?.id ?? null;

    await prisma.organization.update({
        where: { id: organizationId },
        data: {
            clientStatus: statusFor(subscription),
            clientPeriodEnd: subscriptionPeriodEnd(subscription),
            clientCanceledAt: subscription.canceled_at ? new Date(subscription.canceled_at * 1000) : null,
            clientSubscriptionId: subscription.id,
            clientCustomerId: customer,
        },
    });
    return organizationId;
}

/**
 * On the way back from checkout: read the session from the agency's Stripe
 * account and apply what it bought, so paying takes effect even when the
 * webhook has not arrived. True when the business is now paid up.
 */
export async function syncClientCheckout(organizationId: string, sessionId: string): Promise<boolean> {
    const stripe = getStripe();
    if (!stripe) return false;
    try {
        const organization = await prisma.organization.findUnique({
            where: { id: organizationId },
            select: { agency: { select: { stripeAccountId: true } } },
        });
        const account = organization?.agency.stripeAccountId;
        if (!account) return false;

        const session = await stripe.checkout.sessions.retrieve(sessionId, {}, { stripeAccount: account });
        if (session.metadata?.organizationId !== organizationId || !session.subscription) return false;

        const subscription = await stripe.subscriptions.retrieve(
            typeof session.subscription === 'string' ? session.subscription : session.subscription.id,
            {},
            { stripeAccount: account }
        );
        await applyClientSubscription(subscription);
        return subscription.status === 'active' || subscription.status === 'trialing';
    } catch (error) {
        console.error('Failed to reconcile a sub-account checkout:', error);
        return false;
    }
}

/**
 * Start (or continue) connecting an agency's Stripe account, and return the
 * address of Stripe's onboarding for it.
 *
 * The account is a standard one: the agency's own, with its own dashboard,
 * paying its own Stripe fees and carrying its own refunds and disputes.
 */
export async function connectOnboardingUrl(agencyId: string): Promise<string> {
    const stripe = getStripe();
    if (!stripe) throw new Error('Stripe is not configured');

    const agency = await prisma.agency.findUniqueOrThrow({
        where: { id: agencyId },
        select: { id: true, name: true, stripeAccountId: true },
    });

    let account = agency.stripeAccountId;
    if (!account) {
        const created = await stripe.accounts.create({
            controller: {
                stripe_dashboard: { type: 'full' },
                fees: { payer: 'account' },
                losses: { payments: 'stripe' },
            },
            business_profile: { name: agency.name },
            metadata: { agencyId: agency.id },
        });
        account = created.id;
        await prisma.agency.update({ where: { id: agency.id }, data: { stripeAccountId: account } });
    }

    const link = await stripe.accountLinks.create({
        account,
        type: 'account_onboarding',
        refresh_url: `${appUrl()}/agency/billing?connect=refresh`,
        return_url: `${appUrl()}/agency/billing?connect=return`,
    });
    return link.url;
}

/** Read whether an agency's connected account can take payments, and store it. */
export async function refreshConnectedAccount(agencyId: string): Promise<boolean> {
    const stripe = getStripe();
    if (!stripe) return false;
    const agency = await prisma.agency.findUnique({
        where: { id: agencyId },
        select: { stripeAccountId: true, stripeChargesEnabled: true },
    });
    if (!agency?.stripeAccountId) return false;
    try {
        const account = await stripe.accounts.retrieve(agency.stripeAccountId);
        if (account.charges_enabled !== agency.stripeChargesEnabled) {
            await prisma.agency.update({
                where: { id: agencyId },
                data: { stripeChargesEnabled: account.charges_enabled },
            });
        }
        return account.charges_enabled;
    } catch (error) {
        console.error('Failed to read the connected Stripe account:', error);
        return agency.stripeChargesEnabled;
    }
}

/** Keep an agency's payment readiness in step when Stripe reports a change. */
export async function applyAccountUpdate(account: Stripe.Account): Promise<void> {
    await prisma.agency.updateMany({
        where: { stripeAccountId: account.id },
        data: { stripeChargesEnabled: account.charges_enabled },
    });
}

/** A Checkout session for one sub-account's $99, on its agency's account. */
export async function clientCheckoutUrl(organizationId: string, email: string | null): Promise<string> {
    const stripe = getStripe();
    if (!stripe) throw new Error('Stripe is not configured');

    const organization = await prisma.organization.findUniqueOrThrow({
        where: { id: organizationId },
        select: {
            id: true,
            name: true,
            clientCustomerId: true,
            agency: { select: { name: true, stripeAccountId: true, stripeChargesEnabled: true } },
        },
    });
    const account = organization.agency.stripeAccountId;
    if (!account || !organization.agency.stripeChargesEnabled) {
        throw new Error('The agency cannot take payments yet');
    }

    const metadata = { organizationId: organization.id, kind: 'sub_account' };
    const session = await stripe.checkout.sessions.create(
        {
            mode: 'subscription',
            ...(organization.clientCustomerId
                ? { customer: organization.clientCustomerId }
                : email
                  ? { customer_email: email }
                  : {}),
            line_items: [
                {
                    quantity: 1,
                    price_data: {
                        currency: 'usd',
                        unit_amount: SUB_ACCOUNT_PRICE_CENTS,
                        recurring: { interval: 'month' },
                        product_data: { name: `${organization.agency.name} - ${organization.name}` },
                    },
                },
            ],
            success_url: `${appUrl()}/settings/billing?checkout=success&session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${appUrl()}/settings/billing`,
            subscription_data: { metadata },
            metadata,
        },
        { stripeAccount: account }
    );
    if (!session.url) throw new Error('Stripe returned no checkout address');
    return session.url;
}
