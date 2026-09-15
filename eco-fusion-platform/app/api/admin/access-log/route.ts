import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { PERMISSIONS } from '@/lib/staff-permissions';
import { PLATFORM_ROLE_VALUES, isAdminStanding, standingOfRoles } from '@/lib/roles';
import { preferOf, reachableOrganizationIds, requireScope, scopeReaches } from '@/lib/agency';
import type { Prisma } from '@prisma/client';

// GET - The record of what people above the businesses did.
//
// Written by lib/staff and never deleted by the app. Read by scope
// (lib/agency):
//
//   - An agency reads its own trail: its team's sign-ins and changes, and
//     every visit to its businesses, EcoFusion's included. Never another
//     agency's.
//   - EcoFusion reads the whole platform's from the console.
//
// Reading takes the "Read the Access Log" permission, which each team's admin
// holds and may hand on; staff who hold it see the businesses they open, plus
// the lines they wrote themselves.
//
// Optional filters: organizationId, staffUserId, and changesOnly=1 to leave out
// comings and goings.
export async function GET(request: Request) {
    try {
        const params = new URL(request.url).searchParams;
        const scope = await requireScope({
            anyOf: [PERMISSIONS.READ_ACCESS_LOG],
            prefer: preferOf(request),
        });
        if (scope instanceof NextResponse) return scope;

        const organizationId = params.get('organizationId')?.trim() || undefined;
        const staffUserId = params.get('staffUserId')?.trim() || undefined;
        const changesOnly = params.get('changesOnly') === '1';

        // Naming a business the caller does not reach is answered as though it
        // does not exist, so the route cannot be used to discover ids.
        if (organizationId && !(await scopeReaches(scope, organizationId))) {
            return NextResponse.json({ error: 'No such business' }, { status: 404 });
        }

        const filters: Prisma.StaffAccessLogWhereInput[] = [];
        if (scope.kind === 'agency') filters.push({ agencyId: scope.agencyId });
        if (organizationId) {
            filters.push({ organizationId });
        } else if (!scope.admin) {
            const reachable = (await reachableOrganizationIds(scope)) ?? [];
            filters.push({
                OR: [
                    { organizationId: { in: reachable } },
                    { organizationId: null, staffUserId: scope.userId },
                ],
            });
        }
        if (staffUserId) filters.push({ staffUserId });
        if (changesOnly) filters.push({ action: 'write' });

        const [entries, people] = await Promise.all([
            prisma.staffAccessLog.findMany({
                where: filters.length ? { AND: filters } : undefined,
                select: {
                    id: true,
                    action: true,
                    method: true,
                    path: true,
                    detail: true,
                    createdAt: true,
                    staffName: true,
                    staffEmail: true,
                    staffStanding: true,
                    staffUser: {
                        select: {
                            id: true,
                            name: true,
                            email: true,
                            role: true,
                            agencyMembership: { select: { role: true } },
                        },
                    },
                    organization: { select: { id: true, name: true } },
                    agency: { select: { id: true, name: true } },
                },
                orderBy: { createdAt: 'desc' },
                take: 200,
            }),
            // Everybody the trail can be filtered by: this agency's team, or
            // EcoFusion's.
            prisma.user.findMany({
                where:
                    scope.kind === 'agency'
                        ? { agencyMembership: { agencyId: scope.agencyId } }
                        : { role: { in: PLATFORM_ROLE_VALUES } },
                select: { id: true, name: true, email: true, role: true, agencyMembership: { select: { role: true } } },
                orderBy: { createdAt: 'asc' },
            }),
        ]);

        return NextResponse.json({
            scope: scope.kind,
            entries: entries.map(({ staffName, staffEmail, staffStanding, staffUser, ...entry }) => {
                // A deleted account's lines stay, with who they were written
                // onto them as the account went.
                const standing = staffUser
                    ? standingOfRoles(staffUser.role, staffUser.agencyMembership?.role)
                    : staffStanding ?? 'Member';
                return {
                    ...entry,
                    staffUser: {
                        id: staffUser?.id ?? null,
                        name: staffUser ? staffUser.name : staffName,
                        email: staffUser ? staffUser.email : staffEmail ?? 'Deleted account',
                        standing,
                        admin: isAdminStanding(standing),
                        removed: !staffUser,
                    },
                };
            }),
            people: people.map((person) => {
                const standing = standingOfRoles(person.role, person.agencyMembership?.role);
                return { id: person.id, name: person.name, email: person.email, standing, admin: isAdminStanding(standing) };
            }),
        });
    } catch (error) {
        console.error('Failed to read the access trail:', error);
        return NextResponse.json({ error: 'Failed to read the access trail' }, { status: 500 });
    }
}
