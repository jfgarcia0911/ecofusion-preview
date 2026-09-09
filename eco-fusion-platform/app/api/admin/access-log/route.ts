import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';
import { isPlatformAdmin, staffMayReach, staffReachableOrganizationIds } from '@/lib/staff';

// GET - The record of EcoFusion staff working inside customers' businesses.
//
// The trail is written by lib/staff and never deleted by the app. Reading it
// is deliberately available to every staff account rather than to some smaller
// set: an account that can enter any business on the platform should be one
// whose colleagues can see that it did.
export async function GET(request: Request) {
    try {
        const session = await auth();
        if (!session?.user?.id) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        if (!(await isPlatformAdmin(session.user.id))) {
            return NextResponse.json({ error: 'Staff access required' }, { status: 403 });
        }

        const params = new URL(request.url).searchParams;
        const organizationId = params.get('organizationId')?.trim() || undefined;

        // The owner reads the whole platform's trail; staff read only the
        // businesses they were handed. Naming one they were not is answered as
        // though it does not exist, so the route cannot be used to discover ids.
        const reachable = await staffReachableOrganizationIds(session.user.id);
        if (organizationId && !(await staffMayReach(session.user.id, organizationId))) {
            return NextResponse.json({ error: 'No such business' }, { status: 404 });
        }

        const entries = await prisma.staffAccessLog.findMany({
            where: organizationId
                ? { organizationId }
                // Unnamed means "everything I may see", which for staff is not
                // everything. Without this the whole platform's trail came back.
                : reachable === null
                  ? undefined
                  : { organizationId: { in: reachable } },
            select: {
                id: true,
                action: true,
                method: true,
                path: true,
                createdAt: true,
                staffUser: { select: { name: true, email: true } },
                organization: { select: { id: true, name: true } },
            },
            orderBy: { createdAt: 'desc' },
            take: 200,
        });

        return NextResponse.json({ entries });
    } catch (error) {
        console.error('Failed to read the access trail:', error);
        return NextResponse.json({ error: 'Failed to read the access trail' }, { status: 500 });
    }
}
