import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import {
  getOrgContext,
  provisionOrganization,
  evaluateAccess,
  ACTIVE_ORG_COOKIE,
} from '@/lib/tenancy';

/**
 * The businesses a person runs, and the making of another one.
 *
 * Distinct from /api/admin/organizations, which is EcoFusion creating a
 * business for somebody else and gives it an owner of its own. Here the caller
 * is the owner, and the business they add is theirs: they hold it, they switch
 * into it, and the subscription they already pay covers it.
 */

const NAME_MAX = 100;
const LOCATION_MAX = 200;

/** More than this from one login is a mistake or an abuse, not a business. */
const MAX_BUSINESSES_PER_OWNER = 20;

// GET - every business the caller belongs to, for the switcher.
export async function GET() {
  try {
    const ctx = await getOrgContext();
    if (!ctx) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const memberships = await prisma.membership.findMany({
      where: { userId: ctx.userId },
      orderBy: { createdAt: 'asc' },
      select: {
        role: true,
        organization: {
          select: {
            id: true,
            name: true,
            location: true,
            createdAt: true,
            billingParentId: true,
            subscriptionStatus: true,
            trialEndsAt: true,
            currentPeriodEnd: true,
            // A business added by an owner is paid for by the one that owns the
            // subscription, so the badge reads from there or it would show a
            // trial nobody is on.
            billingParent: {
              select: {
                subscriptionStatus: true,
                trialEndsAt: true,
                currentPeriodEnd: true,
              },
            },
            _count: { select: { memberships: true } },
          },
        },
      },
    });

    return NextResponse.json({
      activeId: ctx.organizationId,
      businesses: memberships.map((m) => {
        const org = m.organization;
        const access = evaluateAccess(org.billingParent ?? org);
        return {
          id: org.id,
          name: org.name,
          location: org.location,
          role: m.role,
          memberCount: org._count.memberships,
          createdAt: org.createdAt,
          /** trialing | active | trial_expired | past_due | canceled */
          status: access.reason,
          /** Whether this business can be worked in right now. */
          allowed: access.allowed,
          /** Days left, when the answer is a trial. Null otherwise. */
          trialDaysLeft: access.reason === 'trialing' ? access.daysLeft : null,
          /** False for the one that carries the subscription. */
          billedElsewhere: org.billingParentId !== null,
          isActive: org.id === ctx.organizationId,
        };
      }),
    });
  } catch (error) {
    console.error('Failed to list businesses:', error);
    return NextResponse.json({ error: 'Failed to list businesses' }, { status: 500 });
  }
}

// POST - add another business to the caller's account.
export async function POST(request: Request) {
  try {
    const ctx = await getOrgContext();
    if (!ctx) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Adding a business is an act of ownership. An admin runs the one they were
    // added to; they do not get to start more in someone else's name.
    if (ctx.role !== 'owner') {
      return NextResponse.json(
        { error: 'Only an owner can add another business' },
        { status: 403 }
      );
    }

    // Staff have their own route for this, and it makes a business with its own
    // owner. Letting the staff view fall through to here would quietly attach a
    // customer's business to an EcoFusion account.
    if (ctx.isStaff) {
      return NextResponse.json(
        { error: 'Use the agency sub-account screen to create a business for a customer' },
        { status: 400 }
      );
    }

    const body = await request.json();
    const name = String(body.name ?? '').trim();
    const location = String(body.location ?? '').trim();

    if (!name) {
      return NextResponse.json({ error: 'A business name is required' }, { status: 400 });
    }
    if (name.length > NAME_MAX) {
      return NextResponse.json(
        { error: `Business name must be ${NAME_MAX} characters or fewer` },
        { status: 400 }
      );
    }
    if (location.length > LOCATION_MAX) {
      return NextResponse.json(
        { error: `Location must be ${LOCATION_MAX} characters or fewer` },
        { status: 400 }
      );
    }

    const owned = await prisma.membership.count({
      where: { userId: ctx.userId, role: 'owner' },
    });
    if (owned >= MAX_BUSINESSES_PER_OWNER) {
      return NextResponse.json(
        { error: `An account may hold ${MAX_BUSINESSES_PER_OWNER} businesses` },
        { status: 409 }
      );
    }

    // Whichever of the caller's businesses carries the subscription pays for
    // this one too. Following the current business's own parent keeps the chain
    // one hop deep however many are added.
    const current = await prisma.organization.findUnique({
      where: { id: ctx.organizationId },
      select: { billingParentId: true },
    });
    const billingParentId = current?.billingParentId ?? ctx.organizationId;

    const organizationId = await provisionOrganization({
      ownerUserId: ctx.userId,
      name,
      location: location || null,
      billingParentId,
    });

    const organization = await prisma.organization.findUniqueOrThrow({
      where: { id: organizationId },
      select: { id: true, name: true, slug: true, location: true, billingParentId: true },
    });

    // Somebody who just made a business means to be in it.
    const response = NextResponse.json({ organization }, { status: 201 });
    response.cookies.set(ACTIVE_ORG_COOKIE, organizationId, {
      httpOnly: true,
      sameSite: 'lax',
      path: '/',
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 365,
    });
    return response;
  } catch (error) {
    console.error('Failed to create business:', error);
    return NextResponse.json({ error: 'Failed to create business' }, { status: 500 });
  }
}
