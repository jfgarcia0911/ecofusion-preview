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

/*
 * There is no POST here on purpose.
 *
 * A person owns one business. It is made for them - by signing up, or by
 * EcoFusion creating it with their login - and running a second means a second
 * account. That keeps a subscription, a team and a set of records answering to
 * exactly one person, which is what every guard in this app already assumes.
 *
 * The GET above remains because things still ask which business the caller is
 * in; it just never returns more than one for anybody but staff.
 */
