import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { prisma } from '@/lib/prisma';
import { logStaffAccess } from '@/lib/staff';
import { validatePassword } from '@/lib/validation/password';
import { AGENCY_ROLES, PLATFORM_ROLES } from '@/lib/roles';
import { PERMISSIONS, cleanPermissions, permissionLabel } from '@/lib/staff-permissions';
import { preferOf, requireScope, type Scope } from '@/lib/agency';

/**
 * A team above the businesses, and exactly what each person on it may do.
 *
 * Two teams share this route, decided by the caller's scope (lib/agency):
 *
 *   - platform: EcoFusion's own staff, managed by the EcoFusion admin.
 *   - agency: an agency's own staff, managed by its master account (or by the
 *     EcoFusion admin supporting that agency).
 *
 * For each person: which businesses they open (StaffBusinessAccess), and which
 * permissions they hold. Only the team's admin changes either. A staff member
 * who could appoint staff, or change permissions, could give themselves
 * everything.
 */

async function requireManager(request: Request): Promise<Scope | NextResponse> {
    const scope = await requireScope({ prefer: preferOf(request) });
    if (scope instanceof NextResponse) return scope;
    if (!scope.admin) {
        return NextResponse.json(
            {
                error:
                    scope.kind === 'platform'
                        ? 'Only an EcoFusion admin can manage EcoFusion staff'
                        : "Only the agency's master account can manage its team",
            },
            { status: 403 }
        );
    }
    return scope;
}

/** The team members this scope covers, as a Prisma filter on User. */
function teamWhere(scope: Scope) {
    return scope.kind === 'platform'
        ? { role: PLATFORM_ROLES.STAFF }
        : { agencyMembership: { agencyId: scope.agencyId, role: AGENCY_ROLES.USER } };
}

/** The businesses a team member may be given: the agency's, or every one. */
function businessWhere(scope: Scope) {
    return scope.kind === 'agency' ? { agencyId: scope.agencyId } : {};
}

function permissionScopeFor(scope: Scope): 'platform' | 'agency' {
    return scope.kind === 'platform' ? 'platform' : 'agency';
}

/** A user on this scope's team, or null. */
async function onTeam(scope: Scope, userId: string): Promise<{ email: string; permissions: string[] } | null> {
    const user = await prisma.user.findFirst({
        where: { id: userId, ...teamWhere(scope) },
        select: { email: true, staffPermissions: true, agencyMembership: { select: { permissions: true } } },
    });
    if (!user) return null;
    return {
        email: user.email,
        permissions: scope.kind === 'platform' ? user.staffPermissions : user.agencyMembership?.permissions ?? [],
    };
}

// GET - every team member, and what each one reaches and may do.
export async function GET(request: Request) {
    try {
        const scope = await requireScope({ anyOf: [PERMISSIONS.SEE_TEAM], prefer: preferOf(request) });
        if (scope instanceof NextResponse) return scope;

        const [people, businesses] = await Promise.all([
            prisma.user.findMany({
                where: teamWhere(scope),
                orderBy: { createdAt: 'asc' },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    createdAt: true,
                    staffPermissions: true,
                    agencyMembership: { select: { permissions: true } },
                    staffBusinesses: {
                        where: { organization: businessWhere(scope) },
                        orderBy: { createdAt: 'asc' },
                        select: { organization: { select: { id: true, name: true } } },
                    },
                },
            }),
            // The things a grant can name, and only for the person who can grant.
            scope.admin
                ? prisma.organization.findMany({
                      where: businessWhere(scope),
                      orderBy: { name: 'asc' },
                      select: { id: true, name: true },
                  })
                : Promise.resolve([]),
        ]);

        return NextResponse.json({
            /** Whether this reader may change any of it, or only look. */
            canManage: scope.admin,
            /** Which permission list applies to this team. */
            permissionScope: permissionScopeFor(scope),
            team: scope.kind === 'platform' ? 'EcoFusion' : scope.agency.name,
            staff: people.map((s) => ({
                id: s.id,
                name: s.name,
                email: s.email,
                createdAt: s.createdAt,
                permissions:
                    scope.kind === 'platform'
                        ? cleanPermissions(s.staffPermissions)
                        : cleanPermissions(s.agencyMembership?.permissions, 'agency'),
                businesses: s.staffBusinesses.map((b) => b.organization),
            })),
            businesses,
        });
    } catch (error) {
        console.error('Failed to list staff:', error);
        return NextResponse.json({ error: 'Failed to list staff' }, { status: 500 });
    }
}

// POST - take somebody on.
export async function POST(request: Request) {
    try {
        const scope = await requireManager(request);
        if (scope instanceof NextResponse) return scope;

        const { name, email, password, permissions } = await request.json();
        const starting = cleanPermissions(permissions, permissionScopeFor(scope));
        if (!email || !password) {
            return NextResponse.json(
                { error: 'An email and a starting password are both required' },
                { status: 400 }
            );
        }

        const strength = validatePassword(password);
        if (!strength.isValid) {
            return NextResponse.json({ error: strength.errors[0] }, { status: 400 });
        }

        const normalisedEmail = String(email).trim().toLowerCase();
        if (await prisma.user.findUnique({ where: { email: normalisedEmail }, select: { id: true } })) {
            return NextResponse.json({ error: 'That email already has an account' }, { status: 409 });
        }

        const created = await prisma.user.create({
            data: {
                name: name?.trim() || null,
                email: normalisedEmail,
                password: await bcrypt.hash(password, 12),
                onboardingComplete: true,
                ...(scope.kind === 'platform'
                    ? { role: PLATFORM_ROLES.STAFF, staffPermissions: starting }
                    : {
                          agencyMembership: {
                              create: {
                                  agencyId: scope.agencyId,
                                  role: AGENCY_ROLES.USER,
                                  permissions: starting,
                                  grantedById: scope.userId,
                              },
                          },
                      }),
            },
            select: { id: true, name: true, email: true, createdAt: true },
        });

        await logStaffAccess(scope.userId, null, 'write', {
            method: 'POST',
            path: '/api/admin/staff',
            agencyId: scope.kind === 'agency' ? scope.agencyId : null,
            summary:
                `Took on ${created.email} as ${scope.kind === 'platform' ? 'EcoFusion' : 'agency'} staff` +
                (starting.length ? `, able to: ${starting.map(permissionLabel).join(', ')}` : ', able to do nothing yet'),
        });

        // No business comes with the account. Reach is handed over deliberately,
        // one at a time, rather than arriving with the job.
        return NextResponse.json({ ...created, permissions: starting, businesses: [] }, { status: 201 });
    } catch (error) {
        console.error('Failed to create staff:', error);
        return NextResponse.json({ error: 'Failed to create the staff account' }, { status: 500 });
    }
}

// PUT - set exactly which businesses one team member reaches.
export async function PUT(request: Request) {
    try {
        const scope = await requireManager(request);
        if (scope instanceof NextResponse) return scope;

        const { userId, organizationIds } = await request.json();
        if (!userId || !Array.isArray(organizationIds)) {
            return NextResponse.json(
                { error: 'userId and organizationIds are required' },
                { status: 400 }
            );
        }

        const target = await onTeam(scope, userId);
        if (!target) {
            return NextResponse.json({ error: 'That is not somebody on this team' }, { status: 404 });
        }

        const before = new Set(
            (
                await prisma.staffBusinessAccess.findMany({
                    where: { userId, organization: businessWhere(scope) },
                    select: { organizationId: true },
                })
            ).map((row) => row.organizationId)
        );

        // Only businesses this team may be given: an agency's own, never another's.
        const wanted = [...new Set(organizationIds.map(String))];
        const realIds = (
            await prisma.organization.findMany({
                where: { id: { in: wanted }, ...businessWhere(scope) },
                select: { id: true },
            })
        ).map((o) => o.id);

        // Sent as the whole answer rather than an addition, so unticking is how
        // access is taken away and one request cannot half-apply.
        await prisma.$transaction([
            prisma.staffBusinessAccess.deleteMany({
                where: {
                    userId,
                    organization: businessWhere(scope),
                    organizationId: { notIn: realIds.length ? realIds : ['-'] },
                },
            }),
            prisma.staffBusinessAccess.createMany({
                data: realIds.map((organizationId) => ({ userId, organizationId, grantedById: scope.userId })),
                skipDuplicates: true,
            }),
        ]);

        const now = await prisma.staffBusinessAccess.findMany({
            where: { userId, organization: businessWhere(scope) },
            orderBy: { createdAt: 'asc' },
            select: { organization: { select: { id: true, name: true } } },
        });

        // One line for the change as a whole, and one in each business that was
        // handed over or taken back, so its owner sees in their own record that
        // somebody new may now come in.
        const given = now.filter((b) => !before.has(b.organization.id)).map((b) => b.organization);
        const taken = [...before].filter((id) => !realIds.includes(id));
        if (given.length || taken.length) {
            await logStaffAccess(scope.userId, null, 'write', {
                method: 'PUT',
                path: '/api/admin/staff',
                agencyId: scope.kind === 'agency' ? scope.agencyId : null,
                summary:
                    `Changed what ${target.email} reaches: ` +
                    `${given.length} business${given.length === 1 ? '' : 'es'} given, ${taken.length} taken back`,
            });
            await Promise.all([
                ...given.map((b) =>
                    logStaffAccess(scope.userId, b.id, 'write', {
                        method: 'PUT',
                        path: '/api/admin/staff',
                        summary: `Let ${target.email} into this business`,
                    })
                ),
                ...taken.map((id) =>
                    logStaffAccess(scope.userId, id, 'write', {
                        method: 'PUT',
                        path: '/api/admin/staff',
                        summary: `Took away ${target.email}'s access to this business`,
                    })
                ),
            ]);
        }

        return NextResponse.json({ businesses: now.map((b) => b.organization) });
    } catch (error) {
        console.error('Failed to set staff access:', error);
        return NextResponse.json({ error: 'Failed to set what they reach' }, { status: 500 });
    }
}

// PATCH - set exactly what one team member may do.
export async function PATCH(request: Request) {
    try {
        const scope = await requireManager(request);
        if (scope instanceof NextResponse) return scope;

        const { userId, permissions } = await request.json();
        if (!userId || !Array.isArray(permissions)) {
            return NextResponse.json({ error: 'userId and permissions are required' }, { status: 400 });
        }

        const target = await onTeam(scope, userId);
        if (!target) {
            return NextResponse.json({ error: 'That is not somebody on this team' }, { status: 404 });
        }

        const wanted = cleanPermissions(permissions, permissionScopeFor(scope));
        const before = new Set(cleanPermissions(target.permissions, permissionScopeFor(scope)));
        const added = wanted.filter((p) => !before.has(p));
        const removed = [...before].filter((p) => !wanted.includes(p));

        if (added.length || removed.length) {
            if (scope.kind === 'platform') {
                await prisma.user.update({ where: { id: userId }, data: { staffPermissions: wanted } });
            } else {
                await prisma.agencyMember.update({ where: { userId }, data: { permissions: wanted } });
            }
            await logStaffAccess(scope.userId, null, 'write', {
                method: 'PATCH',
                path: '/api/admin/staff',
                agencyId: scope.kind === 'agency' ? scope.agencyId : null,
                summary:
                    `Changed what ${target.email} can do` +
                    (added.length ? `. Now allowed: ${added.map(permissionLabel).join(', ')}` : '') +
                    (removed.length ? `. No longer allowed: ${removed.map(permissionLabel).join(', ')}` : ''),
            });
        }

        return NextResponse.json({ permissions: wanted });
    } catch (error) {
        console.error('Failed to set staff permissions:', error);
        return NextResponse.json({ error: 'Failed to save what they can do' }, { status: 500 });
    }
}

// DELETE - let somebody go.
export async function DELETE(request: Request) {
    try {
        const scope = await requireManager(request);
        if (scope instanceof NextResponse) return scope;

        const userId = new URL(request.url).searchParams.get('userId');
        if (!userId) {
            return NextResponse.json({ error: 'userId is required' }, { status: 400 });
        }
        if (userId === scope.userId) {
            return NextResponse.json({ error: 'You cannot remove your own account' }, { status: 400 });
        }

        const target = await onTeam(scope, userId);
        if (!target) {
            return NextResponse.json({ error: 'That is not somebody on this team' }, { status: 404 });
        }

        // Written by the admin, about them, before the account goes.
        await logStaffAccess(scope.userId, null, 'write', {
            method: 'DELETE',
            path: '/api/admin/staff',
            agencyId: scope.kind === 'agency' ? scope.agencyId : null,
            summary: `Removed ${target.email} from the ${scope.kind === 'platform' ? 'EcoFusion' : 'agency'} team`,
        });

        // The account, its grants and its team membership go together: a staff
        // account exists only to be on the team it was made for.
        await prisma.user.delete({ where: { id: userId } });

        return NextResponse.json({ removed: true });
    } catch (error) {
        console.error('Failed to remove staff:', error);
        return NextResponse.json({ error: 'Failed to remove the staff account' }, { status: 500 });
    }
}
