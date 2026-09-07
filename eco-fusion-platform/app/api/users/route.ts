import { NextResponse } from 'next/server';
import { getOrgContext, canAdminister } from '@/lib/tenancy';
import { prisma } from '@/lib/prisma';

// GET - People in the caller's organization (admin only)
export async function GET() {
    try {
        const ctx = await getOrgContext();

        if (!ctx) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        if (!canAdminister(ctx)) {
            return NextResponse.json({ error: 'Admin access required' }, { status: 403 });
        }

        // Scoped to this organization. An admin of one farm has no visibility
        // into the people of another.
        const memberships = await prisma.membership.findMany({
            where: { organizationId: ctx.organizationId },
            select: {
                role: true,
                user: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        image: true,
                        createdAt: true,
                    },
                },
            },
            orderBy: { user: { name: 'asc' } },
        });

        const users = memberships.map(({ user, role }) => ({ ...user, role }));

        return NextResponse.json(users);
    } catch (error) {
        console.error('Failed to fetch users:', error);
        return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
    }
}

// PATCH - Change someone's role within the caller's organization (owner/admin only)
export async function PATCH(request: Request) {
    try {
        const ctx = await getOrgContext();

        if (!ctx) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        if (ctx.role !== 'owner' && ctx.role !== 'admin') {
            return NextResponse.json({ error: 'Admin access required' }, { status: 403 });
        }

        const data = await request.json();
        const { userId, role } = data;

        if (!userId || !role) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        if (!['owner', 'admin', 'manager', 'member'].includes(role)) {
            return NextResponse.json({ error: 'Invalid role' }, { status: 400 });
        }

        // The role lives on the membership, so changing it cannot reach a user
        // outside this organization.
        const membership = await prisma.membership.findUnique({
            where: { userId_organizationId: { userId, organizationId: ctx.organizationId } },
        });

        if (!membership) {
            return NextResponse.json(
                { error: 'That person is not a member of this organization' },
                { status: 404 }
            );
        }

        // An organization must keep at least one owner.
        if (membership.role === 'owner' && role !== 'owner') {
            const owners = await prisma.membership.count({
                where: { organizationId: ctx.organizationId, role: 'owner' },
            });
            if (owners <= 1) {
                return NextResponse.json(
                    { error: 'This is the only owner. Make someone else an owner first.' },
                    { status: 400 }
                );
            }
        }

        const updated = await prisma.membership.update({
            where: { id: membership.id },
            data: { role },
            select: {
                role: true,
                user: { select: { id: true, name: true, email: true } },
            },
        });

        return NextResponse.json({ ...updated.user, role: updated.role });
    } catch (error) {
        console.error('Failed to update role:', error);
        return NextResponse.json({ error: 'Failed to update role' }, { status: 500 });
    }
}
