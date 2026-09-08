import { NextResponse } from 'next/server';
import { getOrgContext, canAdminister, canManageMembers } from '@/lib/tenancy';
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

        if (!canManageMembers(ctx)) {
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

        // Who is an owner, and who is an admin, is the owner's call alone.
        //
        // An admin able to grant ownership would promote itself and then demote
        // the owner straight past the last-owner guard below, taking the farm
        // and its billing with it. An admin able to demote a fellow admin could
        // do the same thing sideways, by stripping everyone who might undo it.
        // The password reset in organization/members already draws this line.
        if (ctx.role !== 'owner') {
            if (role === 'owner' || membership.role === 'owner') {
                return NextResponse.json(
                    { error: "Only the farm's owner can grant or remove ownership" },
                    { status: 403 }
                );
            }
            if (membership.role === 'admin') {
                return NextResponse.json(
                    { error: "Only the farm's owner can change an admin's role" },
                    { status: 403 }
                );
            }
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
