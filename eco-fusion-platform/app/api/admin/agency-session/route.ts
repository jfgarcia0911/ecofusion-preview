import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { prisma } from '@/lib/prisma';
import { logStaffAccess, STAFF_ORG_COOKIE } from '@/lib/staff';
import { requireScope, SUPPORT_AGENCY_COOKIE } from '@/lib/agency';

/**
 * EcoFusion opening an agency's own view from the console, to support it, and
 * closing it again.
 *
 * While open, the agency screens show that agency as its own team would see
 * them, with a notice saying who is looking. The EcoFusion admin may open any
 * agency; EcoFusion staff only one in which they were given a business, and
 * inside it only those businesses. Opening and closing are both recorded in
 * the agency's own Access Log.
 */

// POST - open an agency.
export async function POST(request: Request) {
    try {
        const scope = await requireScope({ prefer: 'platform', kind: 'platform' });
        if (scope instanceof NextResponse) return scope;

        const { agencyId } = await request.json();
        const agency = agencyId
            ? await prisma.agency.findUnique({ where: { id: String(agencyId) }, select: { id: true, name: true } })
            : null;
        const allowed =
            agency &&
            (scope.admin ||
                (await prisma.staffBusinessAccess.count({
                    where: { userId: scope.userId, organization: { agencyId: agency.id } },
                })) > 0);
        if (!agency || !allowed) {
            return NextResponse.json({ error: 'No such agency' }, { status: 404 });
        }

        await logStaffAccess(scope.userId, null, 'enter', {
            agencyId: agency.id,
            summary: `Opened the agency "${agency.name}" from the EcoFusion console`,
        });

        const jar = await cookies();
        jar.set(SUPPORT_AGENCY_COOKIE, agency.id, {
            httpOnly: true,
            sameSite: 'lax',
            secure: process.env.NODE_ENV === 'production',
            path: '/',
            maxAge: 60 * 60 * 2,
        });
        // Whatever business was open belongs to wherever it was opened from.
        jar.delete(STAFF_ORG_COOKIE);

        return NextResponse.json({ opened: agency.id, name: agency.name });
    } catch (error) {
        console.error('Failed to open agency:', error);
        return NextResponse.json({ error: 'Failed to open the agency' }, { status: 500 });
    }
}

// DELETE - back to the console.
export async function DELETE() {
    try {
        const scope = await requireScope({ prefer: 'platform', kind: 'platform' });
        if (scope instanceof NextResponse) return scope;

        const jar = await cookies();
        const agencyId = jar.get(SUPPORT_AGENCY_COOKIE)?.value;
        if (agencyId && (await prisma.agency.findUnique({ where: { id: agencyId }, select: { id: true } }))) {
            await logStaffAccess(scope.userId, null, 'leave', { agencyId });
        }
        jar.delete(SUPPORT_AGENCY_COOKIE);
        jar.delete(STAFF_ORG_COOKIE);

        return NextResponse.json({ left: agencyId ?? null });
    } catch (error) {
        console.error('Failed to close agency:', error);
        return NextResponse.json({ error: 'Failed to close the agency' }, { status: 500 });
    }
}
