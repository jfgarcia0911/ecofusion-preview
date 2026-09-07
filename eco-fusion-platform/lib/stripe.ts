/**
 * Stripe client, test mode until live keys are supplied.
 *
 * Deliberately not pinned to an apiVersion: the SDK sends the version the
 * account is pinned to, which is what test and live share. Pinning here is a
 * change to make on purpose, not a default to inherit.
 */

import Stripe from 'stripe';

let client: Stripe | null = null;

/** The configured Stripe client, or null when billing is not set up. */
export function getStripe(): Stripe | null {
  if (client) return client;

  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return null;

  client = new Stripe(key);
  return client;
}

/** Whether billing is configured well enough to start a checkout. */
export function isBillingConfigured(): boolean {
  return Boolean(process.env.STRIPE_SECRET_KEY && process.env.STRIPE_PRICE_ID);
}

/** True while the configured key is a Stripe test key. */
export function isTestMode(): boolean {
  return (process.env.STRIPE_SECRET_KEY ?? '').startsWith('sk_test_');
}

/** Absolute origin for Stripe's return URLs. */
export function appUrl(): string {
  return (
    process.env.NEXT_PUBLIC_APP_URL ??
    process.env.NEXTAUTH_URL ??
    'http://localhost:3000'
  ).replace(/\/$/, '');
}
