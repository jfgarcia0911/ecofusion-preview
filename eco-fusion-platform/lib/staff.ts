/**
 * EcoFusion's own accounts: the EcoFusion admin and EcoFusion staff.
 *
 * These stand above every agency, the way HighLevel's own team stands above
 * its agencies. Customers reach their businesses through an agency or a
 * membership (lib/agency, lib/tenancy); EcoFusion reaches them through this
 * file, which is a different kind of access and is treated as one: staff reach
 * only the businesses they are given, it is announced in the interface while
 * it lasts, and it is written down.
 */

import { cache } from 'react';
import { cookies, headers } from 'next/headers';
import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';
import type { Prisma } from '@prisma/client';
import { PLATFORM_ADMIN_ROLE_VALUES, isPlatformRole, isPlatformAdminRole } from '@/lib/roles';
import { SUMMARY_HEADER, readSummaryHeader } from '@/lib/audit-summary';
import { cleanPermissions, type StaffPermission } from '@/lib/staff-permissions';

/**
 * The business somebody has stepped into from above it: EcoFusion support, or
 * an agency's own team opening one of its sub-accounts. Checked against the
 * database on every request that presents it (lib/tenancy).
 */
export const STAFF_ORG_COOKIE = 'ecofusion-staff-org';

/**
 * Whether an account is one of EcoFusion's own: the admin or staff.
 *
 * Read from the database rather than the session token: the token is only
 * refreshed when something asks it to, and revoking staff access should not
 * wait on that. The cost lands only on requests that are already claiming
 * staff access, since nothing else calls this.
 *
 * Cached for the life of one request. A layout and the route below it both ask
 * this, and asking a database in another hemisphere the same question twice in
 * a row is a round trip spent on an answer already held.
 */
export const isPlatformAccount = cache(async (userId: string): Promise<boolean> => {
    return (await platformStanding(userId)) !== null;
});

/**
 * How an account stands on the platform: null for anybody who is not EcoFusion,
 * otherwise whether it is the EcoFusion admin and what it has been allowed.
 *
 * One read answers "is this staff", "is this the admin" and "may they do this"
 * together, cached for the request, since a layout and the route under it both
 * ask. Read from the database every request rather than the token, so a
 * permission taken away is gone on the next click.
 */
export const platformStanding = cache(
    async (userId: string): Promise<{ admin: boolean; permissions: StaffPermission[] } | null> => {
        const user = await prisma.user.findUnique({
            where: { id: userId },
            select: { role: true, staffPermissions: true },
        });
        if (!isPlatformRole(user?.role)) return null;
        if (isPlatformAdminRole(user?.role)) return { admin: true, permissions: [] };
        return { admin: false, permissions: cleanPermissions(user?.staffPermissions) };
    }
);

/** Whether an EcoFusion account may do this. The EcoFusion admin may do anything. */
export async function staffCan(userId: string, permission: StaffPermission): Promise<boolean> {
    const standing = await platformStanding(userId);
    if (!standing) return false;
    return standing.admin || standing.permissions.includes(permission);
}

/**
 * The signed-in platform account, if it may do this; otherwise the response
 * that says why not. For the agency's own routes, which sit outside any
 * business and so are not covered by the check in lib/tenancy.
 *
 * Pass several to accept any one of them.
 */
export async function requireStaffPermission(
    ...permissions: StaffPermission[]
): Promise<{ userId: string; admin: boolean } | NextResponse> {
    const session = await auth();
    if (!session?.user?.id) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const standing = await platformStanding(session.user.id);
    if (!standing) {
        return NextResponse.json({ error: 'Staff access required' }, { status: 403 });
    }
    if (!standing.admin && !permissions.some((p) => standing.permissions.includes(p))) {
        return NextResponse.json(
            { error: 'Your EcoFusion access does not include this. Ask an EcoFusion admin.' },
            { status: 403 }
        );
    }
    return { userId: session.user.id, admin: standing.admin };
}

/**
 * Whether an account is the EcoFusion admin, rather than somebody working for it.
 *
 * The EcoFusion admin holds the platform: it reaches every agency and business,
 * and decides who else on EcoFusion's team reaches which. Staff are its
 * assistants and can do neither.
 */
export async function isEcoFusionAdmin(userId: string): Promise<boolean> {
    return (await platformStanding(userId))?.admin ?? false;
}

/**
 * Whether this platform account may work inside this particular business.
 *
 * The EcoFusion admin may work in any. Staff may work only in the
 * ones handed to them, so somebody brought in to look after three customers
 * cannot open the other forty. Read from the database rather than a token, so
 * taking a business back takes effect on the next request.
 */
export async function staffMayReach(userId: string, organizationId: string): Promise<boolean> {
    return (await platformReach(userId, organizationId)) !== null;
}

/**
 * How a platform account stands in this business: null when it may not enter,
 * otherwise whether it enters as the EcoFusion admin.
 *
 * One read answers both, because the tenancy check needs both on every request
 * a support session makes, and the role is what decides each.
 */
export async function platformReach(
    userId: string,
    organizationId: string
): Promise<{ admin: boolean; permissions: StaffPermission[] } | null> {
    // Asked together: the grant does not depend on the answer to "who is
    // this", and one after the other they were two round trips to Tokyo on
    // every request a support session made. For the admin and for anybody
    // who is not staff the grant is simply not looked at.
    const [standing, granted] = await Promise.all([
        platformStanding(userId),
        prisma.staffBusinessAccess.findUnique({
            where: { userId_organizationId: { userId, organizationId } },
            select: { id: true },
        }),
    ]);
    if (!standing) return null;
    if (standing.admin) return standing;
    return granted ? standing : null;
}

/**
 * The businesses a platform account may work in, or null for "all of them".
 *
 * Null rather than a list of every id, so a caller filtering a query can leave
 * the filter off entirely for the owner instead of building one that matches
 * everything.
 */
export async function staffReachableOrganizationIds(
    userId: string
): Promise<string[] | null> {
    const standing = await platformStanding(userId);
    if (standing?.admin) return null;
    if (!standing) return [];

    const rows = await prisma.staffBusinessAccess.findMany({
        where: { userId },
        select: { organizationId: true },
    });
    return rows.map((r) => r.organizationId);
}

/**
 * Leaves out the EcoFusion admin's Access Log lines.
 *
 * The admin's own activity is EcoFusion's business, read in the console. An
 * agency's team and a business's owner see everybody else who was in -
 * their own people, and EcoFusion's support staff - but not the admin. A
 * line whose account has since been deleted is recognised by the standing
 * written onto it as it went.
 */
export const NOT_BY_ECOFUSION_ADMIN: Prisma.StaffAccessLogWhereInput = {
    NOT: {
        OR: [
            { staffUser: { is: { role: { in: PLATFORM_ADMIN_ROLE_VALUES } } } },
            { staffUserId: null, staffStanding: 'EcoFusion admin' },
        ],
    },
};

/** The farm named by the staff cookie, or null when there is none. */
export async function currentStaffOrganizationId(): Promise<string | null> {
    const jar = await cookies();
    return jar.get(STAFF_ORG_COOKIE)?.value ?? null;
}

/** denied: a staff member tried something their permissions do not cover. */
// 'signin' is written by lib/activity, which cannot import this file.
type StaffAction = 'signin' | 'enter' | 'leave' | 'write' | 'denied';

/**
 * The description middleware made of this request's body, or null. Null too
 * outside a request altogether, where there are no headers to ask.
 */
async function summaryFromRequest(): Promise<string | null> {
    try {
        return readSummaryHeader((await headers()).get(SUMMARY_HEADER));
    } catch {
        return null;
    }
}

/**
 * Write one line of the access trail.
 *
 * `organizationId` is null for a change to the platform rather than to one
 * business: taking on staff, editing a snapshot, an EcoFusion account changing
 * its own password. Those are changes too, and a trail that only recorded the
 * ones made inside a customer's business would miss the ones that decide who
 * can get into them.
 *
 * `summary` says what the change was, in words. Left out, the description
 * middleware took from the request body is used, so every write says something
 * even where nobody wrote a sentence for it.
 *
 * Never throws. A failed log must not turn into a failed request for the
 * customer, but it must be visible, so it goes to the server log instead.
 */
export async function logStaffAccess(
    staffUserId: string,
    organizationId: string | null,
    action: StaffAction,
    detail?: {
        method?: string | null;
        path?: string | null;
        summary?: string | null;
        /**
         * The agency the line belongs to. Worked out from the business when
         * left out, so every line naming a business lands in that business's
         * agency's trail; pass it for an agency-wide change that names none.
         */
        agencyId?: string | null;
    }
): Promise<void> {
    try {
        const summary =
            detail?.summary ?? (action === 'write' ? await summaryFromRequest() : null);

        let agencyId = detail?.agencyId ?? null;
        if (!agencyId && organizationId) {
            agencyId =
                (
                    await prisma.organization.findUnique({
                        where: { id: organizationId },
                        select: { agencyId: true },
                    })
                )?.agencyId ?? null;
        }

        await prisma.staffAccessLog.create({
            data: {
                staffUserId,
                organizationId,
                agencyId,
                action,
                method: detail?.method ?? null,
                path: detail?.path ?? null,
                detail: summary,
            },
        });
    } catch (error) {
        console.error('[staff] failed to record access:', error);
    }
}

/** Requests that only read do not need a line in the trail. */
const READ_ONLY = new Set(['GET', 'HEAD', 'OPTIONS']);

/**
 * Routes that write their own line, in words, once they know what they did.
 * Recording them here as well would put every such change in the trail twice,
 * once readably and once as ids.
 */
const SELF_DESCRIBED = new Set(['/api/training/gifts']);

/**
 * Record a staff change, if this request is one.
 *
 * The method and path arrive as headers set by middleware, because a route
 * handler's own request object is not reachable from here. A server component
 * render carries neither, and reads as a GET, which is what it is.
 */
export async function logStaffWriteIfAny(
    staffUserId: string,
    organizationId: string | null,
    agencyId?: string | null
): Promise<void> {
    const head = await headers();
    const method = head.get('x-request-method');
    if (!method || READ_ONLY.has(method.toUpperCase())) return;

    const path = head.get('x-request-path');
    if (path && SELF_DESCRIBED.has(path)) return;

    await logStaffAccess(staffUserId, organizationId, 'write', {
        method: method.toUpperCase(),
        path,
        agencyId,
    });
}
