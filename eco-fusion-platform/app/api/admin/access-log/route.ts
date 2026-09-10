import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';
import { staffCan, staffMayReach, staffReachableOrganizationIds } from '@/lib/staff';
import { PERMISSIONS } from '@/lib/staff-permissions';
import { PLATFORM_ROLE_VALUES } from '@/lib/roles';
import type { Prisma } from '@prisma/client';

// GET - The record of EcoFusion staff working inside customers' businesses,
// and of changes made to the platform itself.
//
// The trail is written by lib/staff and never deleted by the app. Reading it
// takes the "Read the Access Log" permission, which the master account holds
// and may hand on; staff who hold it see the businesses they open. That includes the master account,
// which has no limits anywhere else and so is the one whose record matters most.
//
// Optional filters: organizationId, staffUserId, and changesOnly=1 to leave out
// comings and goings.
export async function GET(request: Request) {
    try {
        const session = await auth();
        if (!session?.user?.id) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        // Reading the trail is a permission of its own; the master holds it.
        if (!(await staffCan(session.user.id, PERMISSIONS.READ_ACCESS_LOG))) {
            return NextResponse.json(
                { error: 'Your EcoFusion access does not include reading the Access Log. Ask the master account.' },
                { status: 403 }
            );
        }

        const params = new URL(request.url).searchParams;
        const organizationId = params.get('organizationId')?.trim() || undefined;
        const staffUserId = params.get('staffUserId')?.trim() || undefined;
        const changesOnly = params.get('changesOnly') === '1';

        // The master reads the whole platform's trail; staff read only the
        // businesses they were handed, plus the platform-wide lines they wrote
        // themselves. Naming a business they were not handed is answered as
        // though it does not exist, so the route cannot be used to discover ids.
        const reachable = await staffReachableOrganizationIds(session.user.id);
        if (organizationId && !(await staffMayReach(session.user.id, organizationId))) {
            return NextResponse.json({ error: 'No such business' }, { status: 404 });
        }

        const filters: Prisma.StaffAccessLogWhereInput[] = [];
        if (organizationId) filters.push({ organizationId });
        else if (reachable !== null) {
            filters.push({
                OR: [
                    { organizationId: { in: reachable } },
                    { organizationId: null, staffUserId: session.user.id },
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
                    staffUser: { select: { id: true, name: true, email: true, role: true } },
                    organization: { select: { id: true, name: true } },
                },
                orderBy: { createdAt: 'desc' },
                take: 200,
            }),
            // Everybody the trail can be filtered by. A colleague list, which
            // every staff account can already read from the team screen.
            prisma.user.findMany({
                where: { role: { in: PLATFORM_ROLE_VALUES } },
                select: { id: true, name: true, email: true, role: true },
                orderBy: { createdAt: 'asc' },
            }),
        ]);

        return NextResponse.json({ entries, people });
    } catch (error) {
        console.error('Failed to read the access trail:', error);
        return NextResponse.json({ error: 'Failed to read the access trail' }, { status: 500 });
    }
}
