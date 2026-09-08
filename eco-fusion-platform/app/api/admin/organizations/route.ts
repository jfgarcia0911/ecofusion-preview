import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';
import { isPlatformAdmin } from '@/lib/staff';

// GET - Every farm on the platform, for EcoFusion staff.
//
// The only route in the app that reads across organizations. It returns what
// is needed to find a farm and judge its state, and no farm data: staff who
// want to see inside one have to step into it, which is recorded.
export async function GET(request: Request) {
    try {
        const session = await auth();
        if (!session?.user?.id) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        if (!(await isPlatformAdmin(session.user.id))) {
            return NextResponse.json({ error: 'Staff access required' }, { status: 403 });
        }

        const search = new URL(request.url).searchParams.get('q')?.trim();

        const organizations = await prisma.organization.findMany({
            where: search
                ? {
                      OR: [
                          { name: { contains: search, mode: 'insensitive' } },
                          { slug: { contains: search, mode: 'insensitive' } },
                      ],
                  }
                : undefined,
            select: {
                id: true,
                name: true,
                slug: true,
                plan: true,
                subscriptionStatus: true,
                trialEndsAt: true,
                createdAt: true,
                memberships: {
                    where: { role: 'owner' },
                    select: { user: { select: { name: true, email: true } } },
                    take: 1,
                },
                _count: { select: { memberships: true } },
            },
            orderBy: { createdAt: 'desc' },
            take: 100,
        });

        return NextResponse.json({
            organizations: organizations.map((org) => ({
                id: org.id,
                name: org.name,
                slug: org.slug,
                plan: org.plan,
                subscriptionStatus: org.subscriptionStatus,
                trialEndsAt: org.trialEndsAt,
                createdAt: org.createdAt,
                memberCount: org._count.memberships,
                owner: org.memberships[0]?.user ?? null,
            })),
        });
    } catch (error) {
        console.error('Failed to list organizations:', error);
        return NextResponse.json({ error: 'Failed to list farms' }, { status: 500 });
    }
}
