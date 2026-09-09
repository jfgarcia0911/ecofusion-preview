/**
 * EcoFusion staff working inside a customer's farm.
 *
 * Everyone else reaches exactly one organization, the one their membership
 * names. Staff reach any of them, which is a different kind of access and is
 * treated as one: it is opt-in per farm, it is announced in the interface
 * while it lasts, and it is written down.
 */

import { cache } from 'react';
import { cookies, headers } from 'next/headers';
import { prisma } from '@/lib/prisma';
import { isPlatformRole, isPlatformOwnerRole } from '@/lib/roles';

/** The farm a staff member is currently working inside. */
export const STAFF_ORG_COOKIE = 'ecofusion-staff-org';

/**
 * Whether an account is EcoFusion staff.
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
export const isPlatformAdmin = cache(async (userId: string): Promise<boolean> => {
    const user = await prisma.user.findUnique({
        where: { id: userId },
        select: { role: true },
    });
    return isPlatformRole(user?.role);
});

/**
 * Whether an account is EcoFusion itself, rather than somebody working for it.
 *
 * The owner holds the platform: they reach every business, and they decide who
 * else on the team reaches which. Staff are their assistants and can do neither.
 */
export async function isPlatformOwner(userId: string): Promise<boolean> {
    const user = await prisma.user.findUnique({
        where: { id: userId },
        select: { role: true },
    });
    return isPlatformOwnerRole(user?.role);
}

/**
 * Whether this platform account may work inside this particular business.
 *
 * The owner may work in any: the platform is theirs. Staff may work only in the
 * ones handed to them, so somebody brought in to look after three customers
 * cannot open the other forty. Read from the database rather than a token, so
 * taking a business back takes effect on the next request.
 */
export async function staffMayReach(userId: string, organizationId: string): Promise<boolean> {
    const user = await prisma.user.findUnique({
        where: { id: userId },
        select: { role: true },
    });
    if (!isPlatformRole(user?.role)) return false;
    if (isPlatformOwnerRole(user?.role)) return true;

    const granted = await prisma.staffBusinessAccess.findUnique({
        where: { userId_organizationId: { userId, organizationId } },
        select: { id: true },
    });
    return granted !== null;
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
    const user = await prisma.user.findUnique({
        where: { id: userId },
        select: { role: true },
    });
    if (isPlatformOwnerRole(user?.role)) return null;
    if (!isPlatformRole(user?.role)) return [];

    const rows = await prisma.staffBusinessAccess.findMany({
        where: { userId },
        select: { organizationId: true },
    });
    return rows.map((r) => r.organizationId);
}

/** The farm named by the staff cookie, or null when there is none. */
export async function currentStaffOrganizationId(): Promise<string | null> {
    const jar = await cookies();
    return jar.get(STAFF_ORG_COOKIE)?.value ?? null;
}

type StaffAction = 'enter' | 'leave' | 'write';

/**
 * Write one line of the access trail.
 *
 * Never throws. A failed log must not turn into a failed request for the
 * customer, but it must be visible, so it goes to the server log instead.
 */
export async function logStaffAccess(
    staffUserId: string,
    organizationId: string,
    action: StaffAction,
    detail?: { method?: string | null; path?: string | null }
): Promise<void> {
    try {
        await prisma.staffAccessLog.create({
            data: {
                staffUserId,
                organizationId,
                action,
                method: detail?.method ?? null,
                path: detail?.path ?? null,
            },
        });
    } catch (error) {
        console.error('[staff] failed to record access:', error);
    }
}

/** Requests that only read do not need a line in the trail. */
const READ_ONLY = new Set(['GET', 'HEAD', 'OPTIONS']);

/**
 * Record a staff change, if this request is one.
 *
 * The method and path arrive as headers set by middleware, because a route
 * handler's own request object is not reachable from here. A server component
 * render carries neither, and reads as a GET, which is what it is.
 */
export async function logStaffWriteIfAny(
    staffUserId: string,
    organizationId: string
): Promise<void> {
    const head = await headers();
    const method = head.get('x-request-method');
    if (!method || READ_ONLY.has(method.toUpperCase())) return;

    await logStaffAccess(staffUserId, organizationId, 'write', {
        method: method.toUpperCase(),
        path: head.get('x-request-path'),
    });
}
