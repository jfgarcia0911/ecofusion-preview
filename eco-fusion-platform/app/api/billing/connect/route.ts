import { NextResponse } from 'next/server';
import { resolveScope } from '@/lib/agency';
import { getStripe } from '@/lib/stripe';
import { logStaffAccess } from '@/lib/staff';
import { connectOnboardingUrl } from '@/lib/sub-account-billing';

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

        const url = await connectOnboardingUrl(scope.agencyId);
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
