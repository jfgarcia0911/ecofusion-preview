/**
 * Stripe client, test mode until live keys are supplied.
 *
 * Pinned to an API version. stripe-node sends the version it was built for,
 * not the account's, so an SDK upgrade used to change the API under the code
 * without anybody deciding to. This is the version the code was written and
 * tested against; move it on purpose, together with the SDK.
 */

import Stripe from 'stripe';
import type { PlanKey } from '@/lib/plans';

let client: Stripe | null = null;

/** The configured Stripe client, or null when billing is not set up. */
/** The Stripe API version this code speaks. */
export const STRIPE_API_VERSION = '2026-08-26.dahlia' as const;

let warnedTestKey = false;

export function getStripe(): Stripe | null {
  if (client) return client;

  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return null;

  // A deployment taking real customers on test keys takes no real money.
  // Said loudly rather than refused, since a preview site runs on test keys
  // by design.
  if (process.env.VERCEL_ENV === 'production' && key.startsWith('sk_test_') && !warnedTestKey) {
    warnedTestKey = true;
    console.warn('STRIPE_SECRET_KEY is a test key on a production deployment: no payment here is real.');
  }

  client = new Stripe(key, { apiVersion: STRIPE_API_VERSION });
  return client;
}

/** Whether billing is configured well enough to start a checkout. */
export function isBillingConfigured(plan?: PlanKey): boolean {
  return Boolean(process.env.STRIPE_SECRET_KEY && (plan ? stripePriceFor(plan) : stripePriceFor('starter')));
}

/**
 * The Stripe Price an agency pays for a plan: one Price per plan, set in the
 * Stripe dashboard and named here by environment variable.
 *
 * STRIPE_PRICE_ID, the single price from before plans existed, stands in for
 * Starter until STRIPE_PRICE_STARTER is set, so billing keeps working through
 * the change.
 */
export function stripePriceFor(plan: PlanKey): string | null {
  const byPlan: Record<PlanKey, string | undefined> = {
    starter: process.env.STRIPE_PRICE_STARTER || process.env.STRIPE_PRICE_ID,
    growth: process.env.STRIPE_PRICE_GROWTH,
    pro: process.env.STRIPE_PRICE_PRO,
  };
  return byPlan[plan]?.trim() || null;
}

/** The plan a Stripe Price is, when it is one of ours. */
export function planForStripePrice(priceId: string | null | undefined): PlanKey | null {
  if (!priceId) return null;
  const plans: PlanKey[] = ['starter', 'growth', 'pro'];
  return plans.find((plan) => stripePriceFor(plan) === priceId) ?? null;
}

/** True while the configured key is a Stripe test key. */
export function isTestMode(): boolean {
  return (process.env.STRIPE_SECRET_KEY ?? '').startsWith('sk_test_');
}

/**
 * Absolute origin for Stripe's return URLs.
 *
 * Vercel supplies the host itself, so a deployment there needs no variable
 * set. Preview deployments resolve to their own host and production to the
 * project's stable domain rather than the one-off deployment URL - either way
 * the customer returns to the origin they left, so their session cookie
 * survives the round trip. An explicit variable still wins, for local and
 * Render. Empty is treated as unset: a blank dashboard field is not an answer.
 */
export function appUrl(): string {
  const configured = process.env.NEXT_PUBLIC_APP_URL || process.env.NEXTAUTH_URL;
  if (configured) return configured.replace(/\/$/, '');

  const vercelHost =
    process.env.VERCEL_ENV === 'production'
      ? process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL
      : process.env.VERCEL_URL;
  if (vercelHost) return `https://${vercelHost}`;

  return 'http://localhost:3000';
}
