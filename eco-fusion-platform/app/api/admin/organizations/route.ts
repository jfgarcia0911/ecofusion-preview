import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';
import { isPlatformAdmin } from '@/lib/staff';
import { evaluateAccess } from '@/lib/tenancy';

// GET - Every business on the platform, for EcoFusion staff.
//
// The only route in the app that reads across organizations. It returns what
// is needed to find a business and judge its state, and no business data: staff
// who want to see inside one have to step into it, which is recorded.
export async function GET(request: Request) {
    try {
        const session = await auth();
        if (!session?.user?.id) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        if (!(await isPlatformAdmin(session.user.id))) {
            return NextResponse.json({ error: 'Staff access required' }, { status: 403 });
        }

        const search = new URL(request.url).searchParams.get('q')?.trim();

        const organizations = await prisma.organization.findMany({
            where: search
                ? {
                      OR: [
                          { name: { contains: search, mode: 'insensitive' } },
                          { slug: { contains: search, mode: 'insensitive' } },
                      ],
                  }
                : undefined,
            select: {
                id: true,
                name: true,
                slug: true,
                location: true,
                plan: true,
                subscriptionStatus: true,
                trialEndsAt: true,
                currentPeriodEnd: true,
                createdAt: true,
                // A business an owner added is paid for by the one that owns
                // the subscription, so its standing is decided there. Asking
                // its own row would report a trial nobody is on.
                billingParent: {
                    select: {
                        subscriptionStatus: true,
                        trialEndsAt: true,
                        currentPeriodEnd: true,
                    },
                },
                memberships: {
                    where: { role: 'owner' },
                    select: { user: { select: { name: true, email: true } } },
                    take: 1,
                },
                _count: { select: { memberships: true } },
            },
            orderBy: { createdAt: 'desc' },
            take: 100,
        });

        return NextResponse.json({
            organizations: organizations.map((org) => {
                const access = evaluateAccess(org.billingParent ?? org);
                return {
                    id: org.id,
                    name: org.name,
                    slug: org.slug,
                    location: org.location,
                    plan: org.plan,
                    subscriptionStatus: org.subscriptionStatus,
                    trialEndsAt: org.trialEndsAt,
                    createdAt: org.createdAt,
                    memberCount: org._count.memberships,
                    owner: org.memberships[0]?.user ?? null,
                    // Three standings, not Stripe's five. A business is paying,
                    // trying, or neither, and the third covers a trial that ran
                    // out as well as a subscription that stopped - from the
                    // outside they are the same thing: nobody is paying and
                    // nobody is inside.
                    standing:
                        access.reason === 'active'
                            ? ('active' as const)
                            : access.reason === 'trialing'
                              ? ('trial' as const)
                              : ('inactive' as const),
                    trialDaysLeft: access.reason === 'trialing' ? access.daysLeft : null,
                };
            }),
        });
    } catch (error) {
        console.error('Failed to list organizations:', error);
        return NextResponse.json({ error: 'Failed to list businesses' }, { status: 500 });
    }
}

// POST - Set a business up on behalf of a customer.
//
// The other way a business comes into existence is somebody signing themselves
// up. This is the same act performed by staff: the owner gets a real login they
// can use immediately, and the business gets the same trial and the same
// starting configuration as any other. Nothing here is a lesser kind of
// business, and staff hold no standing membership in it - reaching inside still
// means stepping in, which is recorded.

/*
 * There is no POST or PATCH here on purpose.
 *
 * A business belongs to the person who runs it. EcoFusion can see every one of
 * them, step into one to help, and decide which courses it carries - but it
 * does not bring businesses into being, and it does not rename somebody else's.
 * A customer signs up and names their own; an owner adds their next from
 * settings. Staff reading this file looking for the create endpoint have not
 * missed it.
 */
