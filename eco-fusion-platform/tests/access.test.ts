import './setup-mocks';
import { describe, expect, it } from 'vitest';
import { evaluateAccess } from '@/lib/tenancy';
import { evaluateClientAccess } from '@/lib/sub-account-billing';
import { decideBusinessReach } from '@/lib/agency';
import { BILLING_GRACE_MS } from '@/lib/plans';

const DAY = 86_400_000;
const ago = (ms: number) => new Date(Date.now() - ms);
const ahead = (ms: number) => new Date(Date.now() + ms);

describe('agency access', () => {
    it('admits a live trial and refuses an expired one', () => {
        expect(
            evaluateAccess({ subscriptionStatus: 'trialing', trialEndsAt: ahead(DAY), currentPeriodEnd: null }).allowed
        ).toBe(true);
        expect(
            evaluateAccess({ subscriptionStatus: 'trialing', trialEndsAt: ago(DAY), currentPeriodEnd: null })
        ).toMatchObject({ allowed: false, reason: 'trial_expired' });
    });

    it('keeps a paid agency open through the grace period, then locks it', () => {
        expect(
            evaluateAccess({ subscriptionStatus: 'active', trialEndsAt: null, currentPeriodEnd: ago(DAY) }).allowed
        ).toBe(true);
        expect(
            evaluateAccess({
                subscriptionStatus: 'active',
                trialEndsAt: null,
                currentPeriodEnd: ago(BILLING_GRACE_MS + DAY),
            })
        ).toMatchObject({ allowed: false, reason: 'past_due' });
    });

    it('refuses cancelled and unknown states', () => {
        expect(evaluateAccess({ subscriptionStatus: 'canceled', trialEndsAt: null, currentPeriodEnd: null }).allowed).toBe(false);
        expect(evaluateAccess({ subscriptionStatus: 'weird', trialEndsAt: null, currentPeriodEnd: null }).allowed).toBe(false);
    });
});

describe('sub-account access', () => {
    const base = {
        clientBillingExempt: false,
        clientComplimentary: false,
        clientStatus: 'trialing',
        clientTrialEndsAt: ago(DAY),
        clientPeriodEnd: null as Date | null,
    };
    const canPay = { stripeChargesEnabled: true };
    process.env.STRIPE_SECRET_KEY = 'sk_test_x';

    it('locks an unpaid business once its free period is over', () => {
        expect(evaluateClientAccess(base, canPay)).toMatchObject({ allowed: false, reason: 'unpaid' });
    });

    it("never locks the agency's own or a complimentary business", () => {
        expect(evaluateClientAccess({ ...base, clientBillingExempt: true }, canPay)).toMatchObject({
            allowed: true,
            reason: 'exempt',
        });
        expect(
            evaluateClientAccess({ ...base, clientComplimentary: true, clientStatus: 'canceled' }, canPay)
        ).toMatchObject({ allowed: true, reason: 'complimentary' });
    });

    it('does not lock a business whose agency cannot take payments', () => {
        expect(evaluateClientAccess(base, { stripeChargesEnabled: false })).toMatchObject({
            allowed: true,
            reason: 'not_set_up',
        });
    });

    it('gives a paid business the grace period', () => {
        expect(evaluateClientAccess({ ...base, clientStatus: 'active', clientPeriodEnd: ago(DAY) }, canPay).allowed).toBe(true);
        expect(
            evaluateClientAccess(
                { ...base, clientStatus: 'active', clientPeriodEnd: ago(BILLING_GRACE_MS + DAY) },
                canPay
            )
        ).toMatchObject({ allowed: false, reason: 'past_due' });
    });
});

describe('who may enter a business', () => {
    const none = { platform: null, agency: null, granted: false };

    it('lets the EcoFusion admin in anywhere, and staff only where granted', () => {
        expect(decideBusinessReach({ ...none, platform: { admin: true, permissions: [] } }, 'a1')).toMatchObject({
            via: 'platform',
            admin: true,
        });
        expect(decideBusinessReach({ ...none, platform: { admin: false, permissions: [] } }, 'a1')).toBeNull();
        expect(
            decideBusinessReach({ ...none, platform: { admin: false, permissions: [] }, granted: true }, 'a1')
        ).toMatchObject({ via: 'platform', admin: false });
    });

    it('keeps an agency inside its own businesses', () => {
        const agency = { agencyId: 'a1', admin: true, permissions: [] } as never;
        expect(decideBusinessReach({ ...none, agency }, 'a1')).toMatchObject({ via: 'agency' });
        expect(decideBusinessReach({ ...none, agency }, 'a2')).toBeNull();
    });

    it('refuses everybody else', () => {
        expect(decideBusinessReach(none, 'a1')).toBeNull();
    });
});
