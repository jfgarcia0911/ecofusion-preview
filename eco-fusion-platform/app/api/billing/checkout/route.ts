import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getOrgContext } from '@/lib/tenancy';
import { getStripe, isBillingConfigured, appUrl } from '@/lib/stripe';

// POST - Start a Stripe Checkout session for the caller's farm.
export async function POST() {
  try {
    const ctx = await getOrgContext();
    if (!ctx) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // The subscription belongs to the farm, so only its owner may buy it.
    if (ctx.role !== 'owner') {
      return NextResponse.json(
        { error: "Only the farm's owner can manage the subscription" },
        { status: 403 }
      );
    }

    const stripe = getStripe();
    if (!stripe || !isBillingConfigured()) {
      return NextResponse.json(
        { error: 'Billing is not configured yet. Set STRIPE_SECRET_KEY and STRIPE_PRICE_ID.' },
        { status: 503 }
      );
    }

    const org = await prisma.organization.findUnique({
      where: { id: ctx.organizationId },
      select: { id: true, name: true, stripeCustomerId: true },
    });
    if (!org) {
      return NextResponse.json({ error: 'Organization not found' }, { status: 404 });
    }

    // One Stripe customer per farm, reused across renewals.
    let customerId = org.stripeCustomerId;
    if (!customerId) {
      const customer = await stripe.customers.create({
        name: org.name,
        metadata: { organizationId: org.id },
      });
      customerId = customer.id;
      await prisma.organization.update({
        where: { id: org.id },
        data: { stripeCustomerId: customerId },
      });
    }

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      customer: customerId,
      line_items: [{ price: process.env.STRIPE_PRICE_ID!, quantity: 1 }],
      success_url: `${appUrl()}/billing?checkout=success`,
      cancel_url: `${appUrl()}/billing?checkout=cancelled`,
      // Read back on the webhook, which is the only thing that grants access.
      subscription_data: { metadata: { organizationId: org.id } },
      metadata: { organizationId: org.id },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Failed to start checkout:', error);
    return NextResponse.json({ error: 'Failed to start checkout' }, { status: 500 });
  }
}
