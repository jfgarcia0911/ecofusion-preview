import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { Prisma } from '@prisma/client';
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';
import { isPlatformAdmin, isPlatformOwner, logStaffAccess, staffMayReach, staffReachableOrganizationIds, platformStanding, staffCan } from '@/lib/staff';
import { PERMISSIONS } from '@/lib/staff-permissions';
import { evaluateAccess, provisionOrganization } from '@/lib/tenancy';
import { validatePassword } from '@/lib/validation/password';

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

        const reachable = await staffReachableOrganizationIds(session.user.id);

        const organizations = await prisma.organization.findMany({
            where: {
                // The owner sees the whole platform; staff see the businesses
                // they were handed and nothing else.
                ...(reachable === null ? {} : { id: { in: reachable } }),
                ...(search
                    ? {
                          OR: [
                              { name: { contains: search, mode: 'insensitive' as const } },
                              { slug: { contains: search, mode: 'insensitive' as const } },
                          ],
                      }
                    : {}),
            },
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

        const standing = await platformStanding(session.user.id);
        return NextResponse.json({
            /** What the reader may do on this screen, so the page offers only that. */
            viewer: {
                master: standing?.master ?? false,
                permissions: standing?.permissions ?? [],
            },
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

export async function POST(request: Request) {
    try {
        const session = await auth();
        if (!session?.user?.id) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        // A new business comes with a subscription, a trial and an owner
        // account. Taking a customer on is the master account's decision, which
        // it can hand to somebody with the "Create sub accounts" permission.
        if (!(await staffCan(session.user.id, PERMISSIONS.CREATE_BUSINESS))) {
            return NextResponse.json(
                { error: 'Your EcoFusion access does not include creating sub accounts. Ask the master account.' },
                { status: 403 }
            );
        }

        const body = await request.json();
        const name = String(body.name ?? '').trim();
        const ownerName = String(body.ownerName ?? '').trim();
        const ownerEmail = String(body.ownerEmail ?? '').trim().toLowerCase();
        const location = String(body.location ?? '').trim();
        const ownerPassword = String(body.ownerPassword ?? '');

        if (!name) {
            return NextResponse.json({ error: 'A business name is required' }, { status: 400 });
        }
        if (!ownerEmail || !ownerPassword) {
            return NextResponse.json(
                { error: "The owner's email and a starting password are both required" },
                { status: 400 }
            );
        }

        // Held to the same standard as a password someone chooses for
        // themselves. A business set up by staff is not a place for a weaker one.
        const strength = validatePassword(ownerPassword);
        if (!strength.isValid) {
            return NextResponse.json(
                { error: strength.errors[0], errors: strength.errors },
                { status: 400 }
            );
        }

        const existing = await prisma.user.findUnique({
            where: { email: ownerEmail },
            select: { id: true },
        });
        if (existing) {
            return NextResponse.json(
                {
                    error:
                        'That email already has an account. It already owns a business, ' +
                        'so adding it here would leave the person with two.',
                },
                { status: 409 }
            );
        }

        const owner = await prisma.user.create({
            data: {
                name: ownerName || ownerEmail,
                email: ownerEmail,
                password: await bcrypt.hash(ownerPassword, 12),
            },
        });

        const organizationId = await provisionOrganization({
            ownerUserId: owner.id,
            name,
            location: location || null,
        });

        // Written to the same trail as any other staff act on a business, so
        // the record of who created it sits beside the record of who entered it.
        await logStaffAccess(session.user.id, organizationId, 'write', {
            method: 'POST',
            path: '/api/admin/organizations',
            summary: `Created the business "${name}" with ${ownerEmail} as its owner`,
        });

        // Staff who set a business up are given it, or they could not open
        // what they had just made. The master account opens everything already.
        if (!(await isPlatformOwner(session.user.id))) {
            await prisma.staffBusinessAccess.create({
                data: { userId: session.user.id, organizationId, grantedById: session.user.id },
            });
        }

        const organization = await prisma.organization.findUniqueOrThrow({
            where: { id: organizationId },
            select: {
                id: true,
                name: true,
                slug: true,
                location: true,
                plan: true,
                subscriptionStatus: true,
                trialEndsAt: true,
                createdAt: true,
            },
        });

        return NextResponse.json(
            {
                organization: {
                    ...organization,
                    memberCount: 1,
                    owner: { name: owner.name, email: owner.email },
                },
            },
            { status: 201 }
        );
    } catch (error) {
        // A duplicate email that slipped past the check above races the unique
        // index, and the caller gets the answer it would have got a moment
        // earlier rather than a 500 carrying Prisma's internals.
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
            return NextResponse.json(
                { error: 'That email already has an account' },
                { status: 409 }
            );
        }
        console.error('Failed to create business:', error);
        return NextResponse.json({ error: 'Failed to create the business' }, { status: 500 });
    }
}

// PATCH - Correct a business's name or where it is.
//
// Staff only, and deliberately limited to the two fields that exist to
// identify a business in a list. Nothing here touches a subscription, a
// membership, or anything the business itself owns: changing those means
// stepping inside, which is recorded.

export async function PATCH(request: Request) {
    try {
        const session = await auth();
        if (!session?.user?.id) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        if (!(await staffCan(session.user.id, PERMISSIONS.RENAME_BUSINESS))) {
            return NextResponse.json(
                { error: 'Your EcoFusion access does not include renaming sub accounts. Ask the master account.' },
                { status: 403 }
            );
        }

        const body = await request.json();
        const organizationId = String(body.organizationId ?? '').trim();
        if (!organizationId) {
            return NextResponse.json({ error: 'organizationId is required' }, { status: 400 });
        }

        // Renaming somebody's business is a change to it, so it needs the same
        // grant as opening it.
        if (!(await staffMayReach(session.user.id, organizationId))) {
            return NextResponse.json({ error: 'No such business' }, { status: 404 });
        }

        // The name and nothing else.
        //
        // A typo in a business's name is worth a support account fixing. Who
        // owns it is not: ownership is what the subscription, the team and the
        // whole of Team Access hang from, and moving it is a decision for the
        // people involved rather than a field on a staff form. Location goes
        // the same way - it is the business's to state.
        const name = String(body.name ?? '').trim();
        if (!name) {
            return NextResponse.json({ error: 'A business name is required' }, { status: 400 });
        }
        if (name.length > 100) {
            return NextResponse.json(
                { error: 'Business name must be 100 characters or fewer' },
                { status: 400 }
            );
        }

        const existing = await prisma.organization.findUnique({
            where: { id: organizationId },
            select: { id: true },
        });
        if (!existing) {
            return NextResponse.json({ error: 'No such business' }, { status: 404 });
        }

        const organization = await prisma.organization.update({
            where: { id: organizationId },
            data: { name },
            select: { id: true, name: true, slug: true, location: true },
        });

        // Renaming somebody's business is a change to it, so it lands in the
        // record the owner reads alongside every other thing staff did.
        await logStaffAccess(session.user.id, organizationId, 'write', {
            method: 'PATCH',
            path: '/api/admin/organizations',
            summary: `Renamed the business to "${name}"`,
        });

        return NextResponse.json({ organization });
    } catch (error) {
        console.error('Failed to rename business:', error);
        return NextResponse.json({ error: 'Failed to rename the business' }, { status: 500 });
    }
}
