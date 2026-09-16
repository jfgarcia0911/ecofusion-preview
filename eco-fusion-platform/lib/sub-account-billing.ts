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
 * Three kinds of business are never shut out for not paying:
 *   - the agency's own, owned by its master account, which the plan covers;
 *   - a complimentary one, which the master account has chosen not to charge;
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
     * complimentary: the agency has chosen not to charge it.
     * active: paid up.
     * trialing: inside its 30 days.
     * not_set_up: past its 30 days, but its agency cannot take payments yet.
     * unpaid: its 30 days are over and it has not paid.
     * past_due / canceled: it paid, and then stopped.
     */
    reason:
        | 'exempt'
        | 'complimentary'
        | 'active'
        | 'trialing'
        | 'not_set_up'
        | 'unpaid'
        | 'past_due'
        | 'canceled';
    /** When the 30 days end, as epoch milliseconds, for the countdown. */
    trialEndsAt: number | null;
    daysLeft: number | null;
    /** Whether the agency can take the payment yet. */
    canPay: boolean;
}

/** The fields an access decision reads. Selected wherever a business is looked up. */
export const CLIENT_BILLING_SELECT = {
    clientBillingExempt: true,
    clientComplimentary: true,
    clientStatus: true,
    clientTrialEndsAt: true,
    clientPeriodEnd: true,
} as const;

export function evaluateClientAccess(
    org: {
        clientBillingExempt: boolean;
        clientComplimentary: boolean;
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
    if (org.clientComplimentary) return { ...base, allowed: true, reason: 'complimentary' };

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
 * EcoFusion's Connect client id, from the Stripe dashboard's Connect
 * settings. Set: an agency signs in to the Stripe account it already has and
 * grants EcoFusion access, which is one screen. Unset: the agency is taken
 * through Stripe's onboarding for a brand new account instead.
 */
export function connectClientId(): string | null {
    return process.env.STRIPE_CONNECT_CLIENT_ID?.trim() || null;
}

/** Where Stripe returns the agency to once it has signed in. */
export function connectCallbackUrl(): string {
    return `${appUrl()}/api/billing/connect/callback`;
}

/**
 * Stripe's "sign in to connect" page for an agency, which is the flow a
 * HighLevel user knows: log in to your Stripe account, press Connect, come
 * back connected. `state` comes back with the agency so the answer can be
 * matched to the request that started it and nobody else's.
 */
export function connectSignInUrl(state: string): string {
    const clientId = connectClientId();
    if (!clientId) throw new Error('Stripe Connect is not set up for EcoFusion');
    const query = new URLSearchParams({
        response_type: 'code',
        client_id: clientId,
        scope: 'read_write',
        redirect_uri: connectCallbackUrl(),
        state,
    });
    return `https://connect.stripe.com/oauth/authorize?${query}`;
}

/**
 * Finish a sign-in: swap Stripe's code for the account it belongs to, keep it
 * against the agency, and read whether that account can take payments yet.
 */
export async function completeConnectSignIn(agencyId: string, code: string): Promise<boolean> {
    const stripe = getStripe();
    if (!stripe) throw new Error('Stripe is not configured');

    const token = await stripe.oauth.token({ grant_type: 'authorization_code', code });
    const account = token.stripe_user_id;
    if (!account) throw new Error('Stripe returned no account');

    await prisma.agency.update({ where: { id: agencyId }, data: { stripeAccountId: account } });
    return refreshConnectedAccount(agencyId);
}

/**
 * Start (or continue) connecting an agency's Stripe account, and return the
 * address of Stripe's onboarding for it.
 *
 * Created with Stripe's Accounts v2, which Stripe requires of new Connect
 * platforms. The account is the agency's own: its own full Stripe dashboard,
 * paying its own Stripe fees and carrying its own refunds and disputes. What
 * EcoFusion already knows - the agency's name and the owner's email - is
 * filled in, so Stripe's form asks for less.
 */
export async function connectOnboardingUrl(
    agencyId: string,
    options: { email?: string | null; country?: string | null } = {}
): Promise<string> {
    const stripe = getStripe();
    if (!stripe) throw new Error('Stripe is not configured');

    const agency = await prisma.agency.findUniqueOrThrow({
        where: { id: agencyId },
        select: { id: true, name: true, stripeAccountId: true },
    });

    let account = agency.stripeAccountId;
    if (!account) {
        // Stripe will not take payments for an account without its country.
        if (!options.country) throw new Error('Choose the country the agency is in');
        const created = await stripe.v2.core.accounts.create({
            display_name: agency.name,
            ...(options.email ? { contact_email: options.email } : {}),
            identity: { country: options.country.toLowerCase() },
            dashboard: 'full',
            defaults: {
                responsibilities: { fees_collector: 'stripe', losses_collector: 'stripe' },
            },
            configuration: {
                customer: {},
                merchant: { capabilities: { card_payments: { requested: true } } },
            },
            metadata: { agencyId: agency.id },
        });
        account = created.id;
        await prisma.agency.update({ where: { id: agency.id }, data: { stripeAccountId: account } });
    }

    const link = await stripe.v2.core.accountLinks.create({
        account,
        use_case: {
            type: 'account_onboarding',
            account_onboarding: {
                configurations: ['merchant', 'customer'],
                refresh_url: `${appUrl()}/agency/billing?connect=refresh`,
                return_url: `${appUrl()}/agency/billing?connect=return`,
            },
        },
    });
    return link.url;
}

/**
 * Whether a connected account can take card payments. Asked of Accounts v2
 * first; an account connected by signing in may be one v2 does not describe,
 * so the older API answers for it.
 */
async function chargesEnabled(stripe: Stripe, accountId: string): Promise<boolean> {
    try {
        const account = await stripe.v2.core.accounts.retrieve(accountId, {
            include: ['configuration.merchant'],
        });
        const merchant = account.configuration?.merchant;
        if (merchant) return merchant.capabilities?.card_payments?.status === 'active';
    } catch {
        // Fall through to the older API.
    }
    const account = await stripe.accounts.retrieve(accountId);
    return account.charges_enabled;
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
        const enabled = await chargesEnabled(stripe, agency.stripeAccountId);
        if (enabled !== agency.stripeChargesEnabled) {
            await prisma.agency.update({
                where: { id: agencyId },
                data: { stripeChargesEnabled: enabled },
            });
        }
        return enabled;
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
