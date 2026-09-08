import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getOrgContext } from '@/lib/tenancy';

/**
 * Put somebody who already has a login into another of your businesses.
 *
 * Creating a member asks for an email and a password, so it cannot be used to
 * add a person who already has both. A manager who starts covering a second
 * site should not need a second account with a different address, so this
 * grants the membership instead of making a person.
 *
 * Two things bound it. The caller must own each business named, and the person
 * must already be in one of the caller's businesses - otherwise this would be a
 * way to attach any account on the platform to your own business by knowing its
 * id.
 */

const ROLES = ['admin', 'manager', 'member'];

export async function POST(request: Request) {
  try {
    const ctx = await getOrgContext();
    if (!ctx) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Who reaches a business is the owner's decision, matching the screen this
    // is called from. Staff act with an administrator's powers, not an owner's.
    if (ctx.role !== 'owner' || ctx.isStaff) {
      return NextResponse.json(
        { error: 'Only the owner can move people between businesses' },
        { status: 403 }
      );
    }

    const { userId, organizationIds, role } = await request.json();

    if (!userId || typeof userId !== 'string') {
      return NextResponse.json({ error: 'userId is required' }, { status: 400 });
    }
    if (!Array.isArray(organizationIds) || organizationIds.length === 0) {
      return NextResponse.json({ error: 'Pick at least one business' }, { status: 400 });
    }

    const requestedRole = role || 'member';
    if (!ROLES.includes(requestedRole)) {
      return NextResponse.json({ error: 'Invalid role' }, { status: 400 });
    }

    const targetIds = [...new Set(organizationIds.map(String))];

    // Businesses the caller owns, which is the only place they may put anyone.
    const owned = new Set(
      (
        await prisma.membership.findMany({
          where: { userId: ctx.userId, role: 'owner' },
          select: { organizationId: true },
        })
      ).map((m) => m.organizationId)
    );

    const refused = targetIds.filter((id) => !owned.has(id));
    if (refused.length > 0) {
      return NextResponse.json(
        { error: 'You can only assign people to a business you own' },
        { status: 403 }
      );
    }

    // The person must already be somewhere the caller owns. Without this, an id
    // would be enough to pull a stranger's account into your business.
    const knownHere = await prisma.membership.findFirst({
      where: { userId, organizationId: { in: [...owned] } },
      select: { id: true },
    });
    if (!knownHere) {
      return NextResponse.json({ error: 'That person is not on your team' }, { status: 404 });
    }

    if (userId === ctx.userId) {
      return NextResponse.json(
        { error: 'You already own these businesses' },
        { status: 400 }
      );
    }

    // Already a member of some of them is not a failure - it is the state being
    // asked for. Existing rows keep the role they have, so this never quietly
    // demotes anyone.
    const before = await prisma.membership.findMany({
      where: { userId, organizationId: { in: targetIds } },
      select: { organizationId: true },
    });
    const existing = new Set(before.map((m) => m.organizationId));
    const toAdd = targetIds.filter((id) => !existing.has(id));

    if (toAdd.length > 0) {
      await prisma.membership.createMany({
        data: toAdd.map((organizationId) => ({ userId, organizationId, role: requestedRole })),
      });
    }

    const now = await prisma.membership.findMany({
      where: { userId },
      select: { role: true, organization: { select: { id: true, name: true } } },
      orderBy: { createdAt: 'asc' },
    });

    return NextResponse.json({
      added: toAdd.length,
      alreadyThere: existing.size,
      businesses: now.map((m) => ({
        id: m.organization.id,
        name: m.organization.name,
        role: m.role,
      })),
    });
  } catch (error) {
    console.error('Failed to assign member:', error);
    return NextResponse.json({ error: 'Failed to assign member' }, { status: 500 });
  }
}

// DELETE - take somebody out of one of your businesses, leaving the others.
export async function DELETE(request: Request) {
  try {
    const ctx = await getOrgContext();
    if (!ctx) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    if (ctx.role !== 'owner' || ctx.isStaff) {
      return NextResponse.json(
        { error: 'Only the owner can move people between businesses' },
        { status: 403 }
      );
    }

    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    const organizationId = searchParams.get('organizationId');
    if (!userId || !organizationId) {
      return NextResponse.json(
        { error: 'userId and organizationId are required' },
        { status: 400 }
      );
    }

    const owns = await prisma.membership.findUnique({
      where: { userId_organizationId: { userId: ctx.userId, organizationId } },
      select: { role: true },
    });
    if (owns?.role !== 'owner') {
      return NextResponse.json(
        { error: 'You can only change a business you own' },
        { status: 403 }
      );
    }

    // A business with no owner cannot be paid for or given a login, so the last
    // one is not removable here.
    const target = await prisma.membership.findUnique({
      where: { userId_organizationId: { userId, organizationId } },
      select: { role: true },
    });
    if (!target) {
      return NextResponse.json({ error: 'They are not on that business' }, { status: 404 });
    }
    if (target.role === 'owner') {
      return NextResponse.json(
        { error: "A business's owner cannot be removed from it" },
        { status: 409 }
      );
    }

    await prisma.membership.delete({
      where: { userId_organizationId: { userId, organizationId } },
    });

    return NextResponse.json({ removed: true });
  } catch (error) {
    console.error('Failed to unassign member:', error);
    return NextResponse.json({ error: 'Failed to unassign member' }, { status: 500 });
  }
}
