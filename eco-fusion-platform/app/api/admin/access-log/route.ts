import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';
import { isPlatformAdmin } from '@/lib/staff';

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

        const entries = await prisma.staffAccessLog.findMany({
            where: organizationId ? { organizationId } : undefined,
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
