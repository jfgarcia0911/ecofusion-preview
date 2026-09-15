import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { auth } from '@/auth';
import { agencyStanding } from '@/lib/agency';
import { isPlanKey, planFor } from '@/lib/plans';
import { getStripe, isBillingConfigured, stripePriceFor, appUrl } from '@/lib/stripe';

// POST - Start a Stripe Checkout session for the caller's agency, on a plan.
//
// The subscription belongs to the agency and covers every business it holds,
// so only the agency's master account may buy it. Body: { plan }.
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
    const planKey = isPlanKey(body?.plan) ? body.plan : 'starter';
    const plan = planFor(planKey);

    const stripe = getStripe();
    const price = stripePriceFor(planKey);
    if (!stripe || !isBillingConfigured(planKey) || !price) {
      return NextResponse.json(
        { error: `Billing for the ${plan.name} plan is not set up yet.` },
        { status: 503 }
      );
    }

    // A plan that holds fewer businesses than the agency already has would
    // shut it out of some of them, so it is refused rather than sold.
    const used = await prisma.organization.count({ where: { agencyId: standing.agencyId } });
    if (used > plan.subAccountLimit) {
      return NextResponse.json(
        {
          error: `The agency has ${used} businesses, more than the ${plan.name} plan's ${plan.subAccountLimit}. Choose a larger plan.`,
        },
        { status: 400 }
      );
    }

    const agency = await prisma.agency.findUnique({
      where: { id: standing.agencyId },
      select: { id: true, name: true, stripeCustomerId: true },
    });
    if (!agency) {
      return NextResponse.json({ error: 'Agency not found' }, { status: 404 });
    }

    // One Stripe customer per agency, reused across renewals and plan changes.
    let customerId = agency.stripeCustomerId;
    if (!customerId) {
      const customer = await stripe.customers.create({
        name: agency.name,
        metadata: { agencyId: agency.id },
      });
      customerId = customer.id;
      await prisma.agency.update({
        where: { id: agency.id },
        data: { stripeCustomerId: customerId },
      });
    }

    const metadata = { agencyId: agency.id, plan: planKey };
    const checkout = await stripe.checkout.sessions.create({
      mode: 'subscription',
      customer: customerId,
      line_items: [{ price, quantity: 1 }],
      success_url: `${appUrl()}/billing?checkout=success`,
      cancel_url: `${appUrl()}/agency/billing`,
      // Read back on the webhook, which is the only thing that grants access.
      subscription_data: { metadata },
      metadata,
    });

    return NextResponse.json({ url: checkout.url });
  } catch (error) {
    console.error('Failed to start checkout:', error);
    return NextResponse.json({ error: 'Failed to start checkout' }, { status: 500 });
  }
}
