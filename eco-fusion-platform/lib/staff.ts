/**
 * EcoFusion staff working inside a customer's farm.
 *
 * Everyone else reaches exactly one organization, the one their membership
 * names. Staff reach any of them, which is a different kind of access and is
 * treated as one: it is opt-in per farm, it is announced in the interface
 * while it lasts, and it is written down.
 */

import { cookies, headers } from 'next/headers';
import { prisma } from '@/lib/prisma';
import { isPlatformRole } from '@/lib/roles';

/** The farm a staff member is currently working inside. */
export const STAFF_ORG_COOKIE = 'ecofusion-staff-org';

/**
 * Whether an account is EcoFusion staff.
 *
 * Read from the database rather than the session token: the token is only
 * refreshed when something asks it to, and revoking staff access should not
 * wait on that. The cost lands only on requests that are already claiming
 * staff access, since nothing else calls this.
 */
export async function isPlatformAdmin(userId: string): Promise<boolean> {
    const user = await prisma.user.findUnique({
        where: { id: userId },
        select: { role: true },
    });
    return isPlatformRole(user?.role);
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
