import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';
import { STAFF_ORG_COOKIE, isPlatformAdmin, logStaffAccess } from '@/lib/staff';

/** Whether the caller is staff, and who they are. */
async function requireStaff() {
    const session = await auth();
    if (!session?.user?.id) return null;
    return (await isPlatformAdmin(session.user.id)) ? session.user.id : null;
}

// POST - Step into a business.
//
// Recorded before the cookie is set, so a crash between the two leaves an
// entry that overstates the trail rather than one that hides access.
export async function POST(request: Request) {
    try {
        const staffUserId = await requireStaff();
        if (!staffUserId) {
            return NextResponse.json({ error: 'Staff access required' }, { status: 403 });
        }

        const { organizationId } = await request.json();
        if (!organizationId) {
            return NextResponse.json({ error: 'organizationId is required' }, { status: 400 });
        }

        const organization = await prisma.organization.findUnique({
            where: { id: organizationId },
            select: { id: true, name: true },
        });
        if (!organization) {
            return NextResponse.json({ error: 'No such business' }, { status: 404 });
        }

        await logStaffAccess(staffUserId, organization.id, 'enter');

        (await cookies()).set(STAFF_ORG_COOKIE, organization.id, {
            httpOnly: true,
            sameSite: 'lax',
            secure: process.env.NODE_ENV === 'production',
            path: '/',
            // Support sessions are meant to be short. Staff step in again
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
        const staffUserId = await requireStaff();
        if (!staffUserId) {
            return NextResponse.json({ error: 'Staff access required' }, { status: 403 });
        }

        const jar = await cookies();
        const organizationId = jar.get(STAFF_ORG_COOKIE)?.value;
        if (organizationId) {
            await logStaffAccess(staffUserId, organizationId, 'leave');
        }
        jar.delete(STAFF_ORG_COOKIE);

        return NextResponse.json({ left: organizationId ?? null });
    } catch (error) {
        console.error('Failed to leave business:', error);
        return NextResponse.json({ error: 'Failed to leave business' }, { status: 500 });
    }
}
