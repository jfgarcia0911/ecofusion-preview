import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { agencyStanding } from '@/lib/agency';
import { syncSubscriptionFromStripe } from '@/lib/billing';
import { getStripe } from '@/lib/stripe';

// POST - Finish a plan checkout that was drawn inside the Billing page.
// Body: { sessionId, cancel? }.
//
// Paid: the subscription is read back from Stripe at once, so the plan takes
// effect without waiting on the webhook. Left unpaid with `cancel`: the Stripe
// session is expired, so it cannot be paid later from another tab. Either way
// the answer says which happened - somebody can pay in the moment before they
// press Back, and they must be told they did.
export async function POST(request: Request) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const standing = await agencyStanding(session.user.id);
    if (!standing?.admin) {
      return NextResponse.json(
        { error: "Only the agency's master account can manage the subscription" },
        { status: 403 }
      );
    }

    const body = await request.json().catch(() => ({}));
    const sessionId = typeof body?.sessionId === 'string' ? body.sessionId : '';
    const stripe = getStripe();
    if (!sessionId || !stripe) {
      return NextResponse.json({ error: 'No such checkout' }, { status: 400 });
    }

    const checkout = await stripe.checkout.sessions.retrieve(sessionId);
    // Another agency's checkout is answered as though it does not exist.
    if (checkout.metadata?.agencyId !== standing.agencyId) {
      return NextResponse.json({ error: 'No such checkout' }, { status: 404 });
    }

    if (checkout.status === 'complete') {
      const live = await syncSubscriptionFromStripe(standing.agencyId);
      return NextResponse.json({ outcome: 'paid', live });
    }
    if (body?.cancel && checkout.status === 'open') {
      await stripe.checkout.sessions.expire(sessionId);
    }
    return NextResponse.json({ outcome: 'unpaid' });
  } catch (error) {
    console.error('Failed to finish checkout:', error);
    return NextResponse.json({ error: 'Failed to finish checkout' }, { status: 500 });
  }
}
