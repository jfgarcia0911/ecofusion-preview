import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import {
  getOrgContext,
  evaluateAccess,
} from '@/lib/tenancy';

/**
 * The businesses a person belongs to, for the switcher.
 *
 * Read-only: an owner holds one business, and new businesses are made by an
 * agency (/api/admin/organizations), never from here.
 */

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
            // The agency pays for every business it holds, so the badge reads
            // from there or it would show a trial nobody is on.
            agency: {
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
        const access = evaluateAccess(org.agency);
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
