import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { resolveScope } from '@/lib/agency';
import { appUrl } from '@/lib/stripe';
import { logStaffAccess } from '@/lib/staff';
import { completeConnectSignIn } from '@/lib/sub-account-billing';
import { CONNECT_STATE_COOKIE } from '../route';

// GET - Where Stripe sends the agency back after it signs in.
//
// Stripe returns the `state` this session sent it. It is checked against the
// cookie set when the sign-in started, so a link somebody else crafted cannot
// attach their Stripe account to this agency. The agency in that cookie is the
// one connected, not any named in the address.
export async function GET(request: Request) {
    const back = (query: string) => NextResponse.redirect(`${appUrl()}/agency/billing?${query}`);
    try {
        const scope = await resolveScope();
        if (!scope || scope.kind !== 'agency' || scope.via !== 'member' || !scope.admin) {
            return back('connect=refused');
        }

        const params = new URL(request.url).searchParams;
        const jar = await cookies();
        const expected = jar.get(CONNECT_STATE_COOKIE)?.value;
        jar.delete(CONNECT_STATE_COOKIE);

        // Stripe says so when the agency pressed Cancel on its screen.
        if (params.get('error')) return back('connect=cancelled');

        const state = params.get('state');
        const code = params.get('code');
        if (!code || !state || !expected || state !== expected || !state.startsWith(`${scope.agencyId}.`)) {
            return back('connect=mismatch');
        }

        const ready = await completeConnectSignIn(scope.agencyId, code);
        await logStaffAccess(scope.userId, null, 'write', {
            method: 'GET',
            path: '/api/billing/connect/callback',
            agencyId: scope.agencyId,
            summary: ready
                ? 'Connected a Stripe account; sub-account payments are on'
                : 'Connected a Stripe account, which cannot take payments yet',
        });
        return back('connect=return');
    } catch (error) {
        console.error('Failed to finish connecting Stripe:', error);
        return back('connect=failed');
    }
}
