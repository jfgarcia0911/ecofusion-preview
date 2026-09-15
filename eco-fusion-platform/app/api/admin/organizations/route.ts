import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { Prisma } from '@prisma/client';
import { prisma } from '@/lib/prisma';
import { logStaffAccess } from '@/lib/staff';
import { PERMISSIONS } from '@/lib/staff-permissions';
import { evaluateAccess, provisionOrganization } from '@/lib/tenancy';
import { validatePassword } from '@/lib/validation/password';
import {
    limitMessage,
    organizationWhere,
    preferOf,
    requireScope,
    scopeCan,
    scopeReaches,
    subAccountUsage,
    type Scope,
} from '@/lib/agency';
import { planFor, usageLabel } from '@/lib/plans';

/**
 * The businesses (sub-accounts) a caller works with from above them.
 *
 * Answers for the caller's scope (lib/agency): an agency's own team sees its
 * agency's businesses; EcoFusion sees every agency's from the console, or one
 * agency's while supporting it. Staff of either kind see only the businesses
 * they were given. It returns what is needed to find a business and judge its
 * state, and no business data: seeing inside one means stepping into it,
 * which is recorded.
 */

/** What the reader may do here, so the page offers only that. */
function viewerOf(scope: Scope) {
    return {
        scope: scope.kind,
        admin: scope.admin,
        permissions: scope.permissions,
        canCreate: scope.kind === 'agency' && scopeCan(scope, PERMISSIONS.CREATE_BUSINESS),
    };
}

// GET - The businesses this caller reaches.
export async function GET(request: Request) {
    try {
        const scope = await requireScope({ prefer: preferOf(request) });
        if (scope instanceof NextResponse) return scope;

        const search = new URL(request.url).searchParams.get('q')?.trim();

        const [organizations, usage] = await Promise.all([
            prisma.organization.findMany({
                where: {
                    ...(await organizationWhere(scope)),
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
                    createdAt: true,
                    agency: {
                        select: {
                            id: true,
                            name: true,
                            plan: true,
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
            }),
            scope.kind === 'agency' ? subAccountUsage(scope.agencyId) : Promise.resolve(null),
        ]);

        return NextResponse.json({
            viewer: viewerOf(scope),
            /** The agency's plan and how much of it is used, in an agency scope. */
            usage: usage
                ? {
                      used: usage.used,
                      limit: Number.isFinite(usage.plan.subAccountLimit) ? usage.plan.subAccountLimit : null,
                      plan: usage.plan.name,
                      label: usageLabel(usage.used, usage.plan),
                      canAdd: usage.canAdd,
                  }
                : null,
            organizations: organizations.map((org) => {
                // The agency pays for every business it holds, so the agency's
                // subscription is what decides each one's standing.
                const access = evaluateAccess(org.agency);
                return {
                    id: org.id,
                    name: org.name,
                    slug: org.slug,
                    location: org.location,
                    agency: { id: org.agency.id, name: org.agency.name, plan: planFor(org.agency.plan).name },
                    plan: org.agency.plan,
                    subscriptionStatus: org.agency.subscriptionStatus,
                    trialEndsAt: org.agency.trialEndsAt,
                    createdAt: org.createdAt,
                    memberCount: org._count.memberships,
                    owner: org.memberships[0]?.user ?? null,
                    // Three standings, not Stripe's five: paying, trying, or
                    // neither. A lapsed trial and a stopped subscription look
                    // the same from outside - nobody is paying.
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

// POST - Add a business to the agency, with its owner's login.
//
// The same act as somebody signing up: the owner gets a real login they can
// use at once, and the business the same starting configuration as any other.
// It is covered by the agency's plan, which is why the plan's limit is checked
// first. Only ever inside an agency: EcoFusion adds a business by supporting
// the agency, or sets up a new agency from the console.
export async function POST(request: Request) {
    try {
        const scope = await requireScope({ kind: 'agency', anyOf: [PERMISSIONS.CREATE_BUSINESS] });
        if (scope instanceof NextResponse) return scope;
        if (scope.kind !== 'agency') return NextResponse.json({ error: 'Open an agency first.' }, { status: 403 });

        const usage = await subAccountUsage(scope.agencyId);
        if (!usage.canAdd) {
            return NextResponse.json({ error: limitMessage(usage.plan), limitReached: true }, { status: 402 });
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
        // themselves. A business set up for somebody is not a place for a weaker one.
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
                        'That email already has an account. A person owns one business, ' +
                        'so use a different email for this one.',
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
            agencyId: scope.agencyId,
            ownerUserId: owner.id,
            name,
            location: location || null,
        });

        await logStaffAccess(scope.userId, organizationId, 'write', {
            method: 'POST',
            path: '/api/admin/organizations',
            summary: `Added the business "${name}" to the agency, with ${ownerEmail} as its owner`,
            agencyId: scope.agencyId,
        });

        // Staff who add a business are given it, or they could not open what
        // they had just made. Admins open every business already.
        if (!scope.admin) {
            await prisma.staffBusinessAccess.create({
                data: { userId: scope.userId, organizationId, grantedById: scope.userId },
            });
        }

        const organization = await prisma.organization.findUniqueOrThrow({
            where: { id: organizationId },
            select: { id: true, name: true, slug: true, location: true, createdAt: true },
        });

        return NextResponse.json(
            {
                organization: {
                    ...organization,
                    plan: scope.agency.plan,
                    subscriptionStatus: scope.agency.subscriptionStatus,
                    trialEndsAt: scope.agency.trialEndsAt,
                    memberCount: 1,
                    owner: { name: owner.name, email: owner.email },
                    ...(() => {
                        const access = evaluateAccess(scope.agency);
                        return {
                            standing:
                                access.reason === 'active' ? 'active' : access.reason === 'trialing' ? 'trial' : 'inactive',
                            trialDaysLeft: access.reason === 'trialing' ? access.daysLeft : null,
                        };
                    })(),
                },
            },
            { status: 201 }
        );
    } catch (error) {
        // A duplicate email that slipped past the check above races the unique
        // index, and the caller gets the answer it would have got a moment
        // earlier rather than a 500 carrying Prisma's internals.
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
            return NextResponse.json({ error: 'That email already has an account' }, { status: 409 });
        }
        console.error('Failed to create business:', error);
        return NextResponse.json({ error: 'Failed to create the business' }, { status: 500 });
    }
}

// PATCH - Rename a business.
//
// The name and nothing else. Who owns a business is what its team, its
// billing and its access record hang from, and moving it is a decision for
// the people involved rather than a field on a form.
export async function PATCH(request: Request) {
    try {
        const scope = await requireScope({ anyOf: [PERMISSIONS.RENAME_BUSINESS] });
        if (scope instanceof NextResponse) return scope;

        const body = await request.json();
        const organizationId = String(body.organizationId ?? '').trim();
        if (!organizationId) {
            return NextResponse.json({ error: 'organizationId is required' }, { status: 400 });
        }

        // Renaming somebody's business is a change to it, so it needs the same
        // reach as opening it.
        if (!(await scopeReaches(scope, organizationId))) {
            return NextResponse.json({ error: 'No such business' }, { status: 404 });
        }

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

        const organization = await prisma.organization.update({
            where: { id: organizationId },
            data: { name },
            select: { id: true, name: true, slug: true, location: true },
        });

        // Renaming somebody's business is a change to it, so it lands in the
        // record the owner reads alongside everything else done from above.
        await logStaffAccess(scope.userId, organizationId, 'write', {
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
