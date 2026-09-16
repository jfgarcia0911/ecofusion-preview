import { prisma } from '@/lib/prisma';
import { isPlatformRole } from '@/lib/roles';
import type { OrgContext } from '@/lib/tenancy';

export type LoginControl = { ok: true } | { ok: false; status: number; error: string };

/**
 * Whether the caller may set another person's password.
 *
 * A login is not a thing one business holds: the same account can be a member
 * in several, and the password opens all of them. Checking only the business
 * that is open let one customer's owner reset a login that was a supervisor
 * somewhere else and walk into that business with it. So the reset is allowed
 * only when the caller could manage this person in every business they belong
 * to, and the owner/supervisor lines are drawn at their highest role anywhere.
 */
export async function mayResetPassword(ctx: OrgContext, userId: string): Promise<LoginControl> {
    if (userId === ctx.userId) {
        return {
            ok: false,
            status: 400,
            error: 'Change your own password under Settings → Preferences, with your current one.',
        };
    }

    const target = await prisma.user.findUnique({
        where: { id: userId },
        select: {
            role: true,
            agencyMembership: { select: { id: true } },
            memberships: { select: { organizationId: true, role: true } },
        },
    });
    if (!target || !target.memberships.some((m) => m.organizationId === ctx.organizationId)) {
        return { ok: false, status: 404, error: 'That person is not on this business' };
    }

    // EcoFusion's and agencies' logins reach far beyond one business; they are
    // looked after where they are managed, never from inside a sub-account.
    if (isPlatformRole(target.role) || target.agencyMembership) {
        return {
            ok: false,
            status: 403,
            error: 'That login is managed from the agency view, not from inside a business.',
        };
    }

    // The master account (EcoFusion admin, or the agency's own) has full
    // control of the business it entered; its reach elsewhere is checked by
    // the same membership test as anybody's.
    const callerRoles = new Map(
        (
            await prisma.membership.findMany({
                where: {
                    userId: ctx.userId,
                    organizationId: { in: target.memberships.map((m) => m.organizationId) },
                },
                select: { organizationId: true, role: true },
            })
        ).map((m) => [m.organizationId, m.role])
    );
    callerRoles.set(ctx.organizationId, ctx.role);

    for (const membership of target.memberships) {
        const mine = callerRoles.get(membership.organizationId);
        const here = membership.organizationId === ctx.organizationId;
        const full = here && ctx.fullControl;

        if (mine !== 'owner' && mine !== 'supervisor' && !full) {
            return {
                ok: false,
                status: 403,
                error: 'That login also opens a business you do not manage, so its password is not yours to change.',
            };
        }
        if (membership.role === 'owner' && !full) {
            return { ok: false, status: 403, error: "Only EcoFusion or the agency can reset an owner's password" };
        }
        if (membership.role === 'supervisor' && mine !== 'owner' && !full) {
            return { ok: false, status: 403, error: "Only the owner can reset a supervisor's password" };
        }
    }

    return { ok: true };
}
