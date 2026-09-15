import { NextResponse } from 'next/server';
import { randomUUID } from 'crypto';
import { cookies } from 'next/headers';
import { resolveScope } from '@/lib/agency';
import { getStripe } from '@/lib/stripe';
import { logStaffAccess } from '@/lib/staff';
import { connectClientId, connectOnboardingUrl, connectSignInUrl } from '@/lib/sub-account-billing';

/** Names the request Stripe answers, so only the agency that asked is connected. */
export const CONNECT_STATE_COOKIE = 'ecofusion_connect_state';

// POST - Connect (or finish connecting) the agency's own Stripe account, on
// which its sub-accounts pay it. Returns the address of Stripe's onboarding.
//
// The agency's master account only, signed in as itself: where an agency's
// money goes is not something anybody else sets up for it.
export async function POST() {
    try {
        const scope = await resolveScope();
        if (!scope || scope.kind !== 'agency' || scope.via !== 'member' || !scope.admin) {
            return NextResponse.json(
                { error: "Only the agency's master account can connect its Stripe account" },
                { status: 403 }
            );
        }
        if (!getStripe()) {
            return NextResponse.json({ error: 'Billing is not set up yet.' }, { status: 503 });
        }

        // With a Connect client id the agency signs in to the Stripe account
        // it already has, which is one screen; without one, Stripe's onboarding
        // for a new account, which is several.
        let url: string;
        if (connectClientId()) {
            const state = `${scope.agencyId}.${randomUUID()}`;
            (await cookies()).set(CONNECT_STATE_COOKIE, state, {
                httpOnly: true,
                sameSite: 'lax',
                secure: process.env.NODE_ENV === 'production',
                path: '/',
                maxAge: 60 * 30,
            });
            url = connectSignInUrl(state);
        } else {
            url = await connectOnboardingUrl(scope.agencyId);
        }
        await logStaffAccess(scope.userId, null, 'write', {
            method: 'POST',
            path: '/api/billing/connect',
            agencyId: scope.agencyId,
            summary: 'Started connecting a Stripe account to take sub-account payments',
        });
        return NextResponse.json({ url });
    } catch (error) {
        console.error('Failed to start Stripe Connect onboarding:', error);
        const message =
            error instanceof Error && /connect/i.test(error.message)
                ? 'Stripe Connect is not switched on for EcoFusion yet.'
                : 'Could not reach Stripe. Try again.';
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
