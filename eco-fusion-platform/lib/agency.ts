/**
 * Agencies: EcoFusion's customers, and the level between EcoFusion and a business.
 *
 *   EcoFusion (admin, staff)          lib/staff
 *     Agency (master account, staff)  this file
 *       Business (owner, members)     lib/tenancy
 *
 * An agency subscribes, gets the trial, and holds businesses (sub-accounts) up
 * to its plan's limit. Its master account reaches every one of them; its staff
 * reach the ones they are given, with the permissions they are given. A farm
 * that signs up on its own is an agency with one sub-account, whose owner is
 * also its master account.
 *
 * Every question here is read from the database per request rather than from
 * the session token, so taking somebody off a team, or a sub-account off
 * them, takes effect on their next click.
 */

import { cache } from 'react';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';
import { platformStanding } from '@/lib/staff';
import { AGENCY_ROLES } from '@/lib/roles';
import { AGENCY_TRIAL_DAYS, planFor, type Plan, type PlanKey } from '@/lib/plans';
import {
    askWhom,
    cleanPermissions,
    type PermissionScope,
    type StaffPermission,
} from '@/lib/staff-permissions';

/**
 * The agency an EcoFusion account is looking at from the console, to support
 * it. Only ever honoured for EcoFusion accounts, and checked on every request.
 */
export const SUPPORT_AGENCY_COOKIE = 'ecofusion-support-agency';

const AGENCY_SELECT = {
    id: true,
    name: true,
    plan: true,
    subscriptionStatus: true,
    trialEndsAt: true,
    currentPeriodEnd: true,
} as const;

export interface AgencySummary {
    id: string;
    name: string;
    plan: string;
    subscriptionStatus: string;
    trialEndsAt: Date | null;
    currentPeriodEnd: Date | null;
}

/**
 * The agency a person is on the team of, and how, or null for anybody who is
 * on no agency's team. Cached for the request.
 */
export const agencyStanding = cache(
    async (
        userId: string
    ): Promise<{
        agencyId: string;
        admin: boolean;
        permissions: StaffPermission[];
        agency: AgencySummary;
    } | null> => {
        const member = await prisma.agencyMember.findUnique({
            where: { userId },
            select: { agencyId: true, role: true, permissions: true, agency: { select: AGENCY_SELECT } },
        });
        if (!member) return null;
        return {
            agencyId: member.agencyId,
            admin: member.role === AGENCY_ROLES.ADMIN,
            permissions: cleanPermissions(member.permissions, 'agency'),
            agency: member.agency,
        };
    }
);

/**
 * Where a request made above any one business is working.
 *
 * `platform`: EcoFusion, across every agency (the console).
 * `agency`: one agency - the caller's own, or one EcoFusion is supporting.
 *
 * `admin` is full control within that scope: the EcoFusion admin across the
 * platform, or an agency's master account (or the EcoFusion admin supporting
 * it) within the agency. Everybody else works by `permissions`.
 */
export type Scope =
    | {
          kind: 'platform';
          userId: string;
          admin: boolean;
          permissions: StaffPermission[];
      }
    | {
          kind: 'agency';
          userId: string;
          agencyId: string;
          agency: AgencySummary;
          /** member: the caller's own agency. platform: EcoFusion supporting it. */
          via: 'member' | 'platform';
          admin: boolean;
          /** True when the caller is the EcoFusion admin, whichever scope. */
          platformAdmin: boolean;
          permissions: StaffPermission[];
      };

/** The agency EcoFusion is supporting, from the console, if any. */
async function supportAgencyId(): Promise<string | null> {
    return (await cookies()).get(SUPPORT_AGENCY_COOKIE)?.value ?? null;
}

/**
 * The caller's scope, or null when they work above no business at all.
 *
 * EcoFusion accounts are in the platform scope unless they have opened an
 * agency from the console, and `prefer: 'platform'` keeps them there
 * regardless - the console's own screens pass it. EcoFusion staff open only an
 * agency in which they were given at least one business.
 */
export const resolveScope = cache(async (prefer?: 'platform'): Promise<Scope | null> => {
    const session = await auth();
    const userId = session?.user?.id;
    if (!userId) return null;

    const [platform, agency, supportId] = await Promise.all([
        platformStanding(userId),
        agencyStanding(userId),
        supportAgencyId(),
    ]);

    if (platform) {
        if (prefer !== 'platform' && supportId) {
            const [supported, granted] = await Promise.all([
                prisma.agency.findUnique({ where: { id: supportId }, select: AGENCY_SELECT }),
                platform.admin
                    ? Promise.resolve(1)
                    : prisma.staffBusinessAccess.count({
                          where: { userId, organization: { agencyId: supportId } },
                      }),
            ]);
            if (supported && granted > 0) {
                return {
                    kind: 'agency',
                    userId,
                    agencyId: supported.id,
                    agency: supported,
                    via: 'platform',
                    admin: platform.admin,
                    platformAdmin: platform.admin,
                    permissions: platform.permissions,
                };
            }
        }
        return { kind: 'platform', userId, admin: platform.admin, permissions: platform.permissions };
    }

    if (agency) {
        return {
            kind: 'agency',
            userId,
            agencyId: agency.agencyId,
            agency: agency.agency,
            via: 'member',
            admin: agency.admin,
            platformAdmin: false,
            permissions: agency.permissions,
        };
    }

    return null;
});

/**
 * The console's own screens ask for the platform scope with ?scope=platform,
 * so an EcoFusion account that is supporting an agency still sees EcoFusion's
 * team, templates and log there rather than that agency's.
 */
export function preferOf(request: Request): 'platform' | undefined {
    return new URL(request.url).searchParams.get('scope') === 'platform' ? 'platform' : undefined;
}

/** Whether the scope may do this. Its admin may do anything. */
export function scopeCan(scope: Scope, permission: StaffPermission): boolean {
    return scope.admin || scope.permissions.includes(permission);
}

/** Which permission list applies: EcoFusion's, or an agency's. */
export function permissionScopeOf(scope: Scope): PermissionScope {
    return scope.kind === 'agency' && scope.via === 'member' ? 'agency' : 'platform';
}

/**
 * The caller's scope if it may do any one of these, or the response that says
 * why not. With no permissions named, any scope will do.
 */
export async function requireScope(options: {
    prefer?: 'platform';
    kind?: Scope['kind'];
    anyOf?: StaffPermission[];
} = {}): Promise<Scope | NextResponse> {
    const scope = await resolveScope(options.prefer);
    if (!scope) {
        const session = await auth();
        return NextResponse.json(
            { error: session?.user?.id ? 'Agency access required' : 'Unauthorized' },
            { status: session?.user?.id ? 403 : 401 }
        );
    }
    if (options.kind && scope.kind !== options.kind) {
        return NextResponse.json(
            {
                error:
                    options.kind === 'agency'
                        ? 'Open an agency first.'
                        : 'This is part of the EcoFusion console.',
            },
            { status: 403 }
        );
    }
    if (options.anyOf?.length && !scope.admin && !options.anyOf.some((p) => scope.permissions.includes(p))) {
        return NextResponse.json(
            { error: `Your access does not include this. Ask ${askWhom(permissionScopeOf(scope))}.` },
            { status: 403 }
        );
    }
    return scope;
}

/**
 * The businesses a scope reaches, or null for every business it covers.
 *
 * In the platform scope "every" means the whole platform; in an agency scope
 * the caller must still add the agency filter, which `organizationWhere` does.
 */
export async function reachableOrganizationIds(scope: Scope): Promise<string[] | null> {
    if (scope.admin) return null;
    const rows = await prisma.staffBusinessAccess.findMany({
        where: {
            userId: scope.userId,
            ...(scope.kind === 'agency' ? { organization: { agencyId: scope.agencyId } } : {}),
        },
        select: { organizationId: true },
    });
    return rows.map((r) => r.organizationId);
}

/** A Prisma filter for the businesses a scope may see. */
export async function organizationWhere(scope: Scope): Promise<{ agencyId?: string; id?: { in: string[] } }> {
    const ids = await reachableOrganizationIds(scope);
    return {
        ...(scope.kind === 'agency' ? { agencyId: scope.agencyId } : {}),
        ...(ids === null ? {} : { id: { in: ids } }),
    };
}

/** Whether a scope reaches one business. */
export async function scopeReaches(scope: Scope, organizationId: string): Promise<boolean> {
    const org = await prisma.organization.findUnique({
        where: { id: organizationId },
        select: { agencyId: true },
    });
    if (!org) return false;
    if (scope.kind === 'agency' && org.agencyId !== scope.agencyId) return false;
    if (scope.admin) return true;
    const granted = await prisma.staffBusinessAccess.findUnique({
        where: { userId_organizationId: { userId: scope.userId, organizationId } },
        select: { id: true },
    });
    return granted !== null;
}

/**
 * How a person may step into one business from above it, or null.
 *
 * EcoFusion first (its admin reaches all; its staff what they were given),
 * then the person's own agency (its master account reaches all of the
 * agency's businesses; its staff what they were given).
 */
export async function businessReach(
    userId: string,
    organizationId: string,
    organizationAgencyId: string
): Promise<BusinessReach | null> {
    return decideBusinessReach(await loadReachFacts(userId, organizationId), organizationAgencyId);
}

export type BusinessReach = { via: 'platform' | 'agency'; admin: boolean; permissions: StaffPermission[] };

/**
 * Everything businessReach decides from, fetched together. Split from the
 * decision so a caller that also needs the business can fetch both at once
 * instead of one after the other.
 */
export async function loadReachFacts(userId: string, organizationId: string) {
    const [platform, agency, granted] = await Promise.all([
        platformStanding(userId),
        agencyStanding(userId),
        prisma.staffBusinessAccess.findUnique({
            where: { userId_organizationId: { userId, organizationId } },
            select: { id: true },
        }),
    ]);
    return { platform, agency, granted: granted !== null };
}

export function decideBusinessReach(
    facts: Awaited<ReturnType<typeof loadReachFacts>>,
    organizationAgencyId: string
): BusinessReach | null {
    const { platform, agency, granted } = facts;
    if (platform) {
        return platform.admin || granted
            ? { via: 'platform', admin: platform.admin, permissions: platform.permissions }
            : null;
    }
    if (agency && agency.agencyId === organizationAgencyId && (agency.admin || granted)) {
        return { via: 'agency', admin: agency.admin, permissions: agency.permissions };
    }
    return null;
}

/** How many businesses an agency holds against its plan's limit. */
export async function subAccountUsage(
    agencyId: string
): Promise<{ used: number; plan: Plan; canAdd: boolean }> {
    const [used, agency] = await Promise.all([
        prisma.organization.count({ where: { agencyId } }),
        prisma.agency.findUnique({ where: { id: agencyId }, select: { plan: true } }),
    ]);
    const plan = planFor(agency?.plan);
    return { used, plan, canAdd: used < plan.subAccountLimit };
}

/** What to tell somebody who has reached their plan's limit. */
export function limitMessage(plan: Plan): string {
    return `The ${plan.name} plan allows ${plan.subAccountLimit} businesses. Upgrade the agency's plan to add another.`;
}

/**
 * Create an agency and make somebody its master account.
 *
 * The single place an agency comes into existence: signing up, or EcoFusion
 * setting one up from the console. It starts on a trial.
 */
export async function provisionAgency(options: {
    name: string;
    adminUserId: string;
    plan?: PlanKey;
}): Promise<string> {
    const agency = await prisma.agency.create({
        data: {
            name: options.name,
            plan: options.plan ?? 'starter',
            subscriptionStatus: 'trialing',
            trialEndsAt: new Date(Date.now() + AGENCY_TRIAL_DAYS * 86_400_000),
            members: {
                create: { userId: options.adminUserId, role: AGENCY_ROLES.ADMIN },
            },
        },
        select: { id: true },
    });
    return agency.id;
}
