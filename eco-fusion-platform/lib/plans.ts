/**
 * What an agency's plan allows, and what it is called.
 *
 * The plan is what separates one subscriber from another: every plan gets
 * every feature, and the difference is how many businesses (sub-accounts) the
 * agency may run. A farm on its own needs Starter; somebody looking after a
 * dozen needs Growth or Pro.
 *
 * Imports nothing, so the billing page, the sub-account screen and the server
 * all read the same limits. Prices live in Stripe, one Price per plan, named
 * by environment variables in lib/stripe; the amounts shown here are only what
 * the billing page says, and must be kept in step with those Prices.
 */

export type PlanKey = 'starter' | 'growth' | 'pro';

export interface Plan {
    key: PlanKey;
    name: string;
    /** How many businesses the agency may hold. Infinity for no limit. */
    subAccountLimit: number;
    /** Shown on the billing page. The charge itself is the Stripe Price's. */
    priceLabel: string;
    blurb: string;
}

export const PLANS: Plan[] = [
    {
        key: 'starter',
        name: 'Starter',
        subAccountLimit: 3,
        priceLabel: '$97 / month',
        blurb: 'One farm, or a small group. Up to 3 businesses.',
    },
    {
        key: 'growth',
        name: 'Growth',
        subAccountLimit: 10,
        priceLabel: '$297 / month',
        blurb: 'For agencies and multi-site operators. Up to 10 businesses.',
    },
    {
        key: 'pro',
        name: 'Pro',
        subAccountLimit: Infinity,
        priceLabel: '$497 / month',
        blurb: 'No limit on businesses.',
    },
];

/** Days a new agency may use the platform before it has to subscribe. */
export const AGENCY_TRIAL_DAYS = 14;

/**
 * What each sub-account pays its agency, as HighLevel's SaaS mode does: the
 * agency pays EcoFusion for its plan, and each business it runs pays the agency.
 * Charged on the agency's own Stripe account, through Stripe Connect.
 */
export const SUB_ACCOUNT_PRICE_CENTS = 9900;
export const SUB_ACCOUNT_PRICE_LABEL = '$99 / month';

/** Days a new sub-account may be used before its $99 is due. */
export const SUB_ACCOUNT_TRIAL_DAYS = 30;

export function planFor(key: string | null | undefined): Plan {
    return PLANS.find((plan) => plan.key === key) ?? PLANS[0];
}

export function isPlanKey(value: unknown): value is PlanKey {
    return typeof value === 'string' && PLANS.some((plan) => plan.key === value);
}

/** "2 of 3", or "2" when the plan has no limit. */
export function usageLabel(used: number, plan: Plan): string {
    return Number.isFinite(plan.subAccountLimit) ? `${used} of ${plan.subAccountLimit}` : `${used}`;
}

/**
 * Days a paid subscription keeps working after its period ends, while the
 * renewal is still arriving. Renewal is only ever learned from Stripe's
 * webhook; without this, a late or failed delivery locked a paying customer
 * out on the day it renewed.
 */
export const BILLING_GRACE_DAYS = 3;
export const BILLING_GRACE_MS = BILLING_GRACE_DAYS * 86_400_000;
