import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';
import { STAFF_ORG_COOKIE, logStaffAccess } from '@/lib/staff';
import { businessReach } from '@/lib/agency';

/**
 * Stepping into a business from above it, and back out.
 *
 * EcoFusion (its admin, or staff given the business) and the business's own
 * agency (its master account, or agency staff given the business) both step
 * in this way. Checked here, and again on every request made inside by
 * lib/tenancy, so taking the business off somebody ends their session at once.
 */

// POST - Step into a business.
//
// Recorded before the cookie is set, so a crash between the two leaves an
// entry that overstates the trail rather than one that hides access.
export async function POST(request: Request) {
    try {
        const session = await auth();
        if (!session?.user?.id) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }
        const userId = session.user.id;

        const { organizationId } = await request.json();
        if (!organizationId) {
            return NextResponse.json({ error: 'organizationId is required' }, { status: 400 });
        }

        const organization = await prisma.organization.findUnique({
            where: { id: organizationId },
            select: { id: true, name: true, agencyId: true },
        });

        // A business somebody may not open is answered as though it does not
        // exist, so the route cannot be used to find out which ids are real.
        const reach = organization
            ? await businessReach(userId, organization.id, organization.agencyId)
            : null;
        if (!organization || !reach) {
            return NextResponse.json({ error: 'No such business' }, { status: 404 });
        }

        await logStaffAccess(userId, organization.id, 'enter', { agencyId: organization.agencyId });

        (await cookies()).set(STAFF_ORG_COOKIE, organization.id, {
            httpOnly: true,
            sameSite: 'lax',
            secure: process.env.NODE_ENV === 'production',
            path: '/',
            // Sessions from above are meant to be short. People step in again
            // rather than staying in for a day, and each entry is recorded.
            maxAge: 60 * 60 * 2,
        });

        return NextResponse.json({ entered: organization.id, name: organization.name });
    } catch (error) {
        console.error('Failed to enter business:', error);
        return NextResponse.json({ error: 'Failed to enter business' }, { status: 500 });
    }
}

// DELETE - Leave the business and go back to being yourself.
export async function DELETE() {
    try {
        const session = await auth();
        if (!session?.user?.id) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const jar = await cookies();
        const organizationId = jar.get(STAFF_ORG_COOKIE)?.value;
        if (organizationId) {
            const organization = await prisma.organization.findUnique({
                where: { id: organizationId },
                select: { id: true, agencyId: true },
            });
            // Only somebody who could have been inside leaves a line: a cookie
            // naming any other business writes nothing to that business's trail.
            if (organization && (await businessReach(session.user.id, organization.id, organization.agencyId))) {
                await logStaffAccess(session.user.id, organizationId, 'leave', { agencyId: organization.agencyId });
            }
        }
        jar.delete(STAFF_ORG_COOKIE);

        return NextResponse.json({ left: organizationId ?? null });
    } catch (error) {
        console.error('Failed to leave business:', error);
        return NextResponse.json({ error: 'Failed to leave business' }, { status: 500 });
    }
}
