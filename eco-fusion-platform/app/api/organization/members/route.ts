import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { prisma } from '@/lib/prisma';
import { getOrgContext, canManageMembers } from '@/lib/tenancy';
import { validatePassword } from '@/lib/validation/password';

const ROLES = ['admin', 'manager', 'member'];

// GET - Everyone with access to this farm.
export async function GET() {
  try {
    const ctx = await getOrgContext();
    if (!ctx) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const memberships = await prisma.membership.findMany({
      where: { organizationId: ctx.organizationId },
      select: {
        id: true,
        role: true,
        createdAt: true,
        user: { select: { id: true, name: true, email: true, image: true } },
      },
      orderBy: { createdAt: 'asc' },
    });

    return NextResponse.json(
      memberships.map((m) => ({
        membershipId: m.id,
        role: m.role,
        joinedAt: m.createdAt,
        ...m.user,
      }))
    );
  } catch (error) {
    console.error('Failed to fetch members:', error);
    return NextResponse.json({ error: 'Failed to fetch members' }, { status: 500 });
  }
}

// POST - Create a login for someone and attach it to this farm.
//
// The account has no independent existence: it is a member of this
// organization, so it is admitted or refused by this farm's subscription.
export async function POST(request: Request) {
  try {
    const ctx = await getOrgContext();
    if (!ctx) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (!canManageMembers(ctx)) {
      return NextResponse.json(
        { error: 'Only an owner or admin can add people to this business' },
        { status: 403 }
      );
    }

    if (!ctx.access.allowed) {
      return NextResponse.json(
        { error: 'This business has no active subscription. Renew it to add people.' },
        { status: 402 }
      );
    }

    const { name, email, password, role, employeeId } = await request.json();

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
    }

    const requestedRole = role || 'member';
    if (!ROLES.includes(requestedRole)) {
      return NextResponse.json({ error: 'Invalid role' }, { status: 400 });
    }

    const passwordCheck = validatePassword(password);
    if (!passwordCheck.isValid) {
      return NextResponse.json({ error: passwordCheck.errors[0] }, { status: 400 });
    }

    const normalisedEmail = String(email).trim().toLowerCase();
    const existing = await prisma.user.findUnique({
      where: { email: normalisedEmail },
      select: { id: true },
    });

    if (existing) {
      const alreadyHere = await prisma.membership.findUnique({
        where: {
          userId_organizationId: { userId: existing.id, organizationId: ctx.organizationId },
        },
      });
      return NextResponse.json(
        {
          error: alreadyHere
            ? 'That person is already on this business'
            : 'That email already has an account',
        },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    // An employee may only be linked if they belong to this farm.
    if (employeeId) {
      const employee = await prisma.employee.findFirst({
        where: { id: employeeId, organizationId: ctx.organizationId },
        select: { id: true, accountId: true },
      });
      if (!employee) {
        return NextResponse.json({ error: 'That employee is not on this business' }, { status: 404 });
      }
      if (employee.accountId) {
        return NextResponse.json({ error: 'That employee already has a login' }, { status: 409 });
      }
    }

    const created = await prisma.$transaction(async (tx) => {
      const user = await tx.user.create({
        data: {
          name: name || null,
          email: normalisedEmail,
          password: hashedPassword,
          onboardingComplete: true,
        },
      });
      await tx.membership.create({
        data: { userId: user.id, organizationId: ctx.organizationId, role: requestedRole },
      });
      if (employeeId) {
        await tx.employee.update({ where: { id: employeeId }, data: { accountId: user.id } });
      }
      return user;
    });

    return NextResponse.json(
      { id: created.id, name: created.name, email: created.email, role: requestedRole },
      { status: 201 }
    );
  } catch (error) {
    console.error('Failed to create member:', error);
    return NextResponse.json({ error: 'Failed to create member' }, { status: 500 });
  }
}

// DELETE - Remove someone's access to this farm.
export async function DELETE(request: Request) {
  try {
    const ctx = await getOrgContext();
    if (!ctx) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (!canManageMembers(ctx)) {
      return NextResponse.json({ error: 'Admin access required' }, { status: 403 });
    }

    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    if (!userId) {
      return NextResponse.json({ error: 'userId is required' }, { status: 400 });
    }

    const membership = await prisma.membership.findUnique({
      where: { userId_organizationId: { userId, organizationId: ctx.organizationId } },
    });

    if (!membership) {
      return NextResponse.json({ error: 'That person is not on this business' }, { status: 404 });
    }

    if (membership.role === 'owner') {
      return NextResponse.json({ error: 'The owner cannot be removed' }, { status: 400 });
    }

    // Removing an admin is the same decision as demoting one, so it rests with
    // the owner too. Otherwise an admin could simply delete the colleagues who
    // would have reversed it.
    if (membership.role === 'admin' && ctx.role !== 'owner') {
      return NextResponse.json(
        { error: "Only the owner can remove an admin" },
        { status: 403 }
      );
    }

    await prisma.membership.delete({ where: { id: membership.id } });

    return NextResponse.json({ removed: userId });
  } catch (error) {
    console.error('Failed to remove member:', error);
    return NextResponse.json({ error: 'Failed to remove member' }, { status: 500 });
  }
}

// PATCH - Set a new password for someone on this farm.
//
// An owner or admin resets a forgotten password without knowing the old one.
// Scoped by membership, so it cannot reach an account on another farm.
export async function PATCH(request: Request) {
  try {
    const ctx = await getOrgContext();
    if (!ctx) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (!canManageMembers(ctx)) {
      return NextResponse.json({ error: 'Admin access required' }, { status: 403 });
    }

    const { userId, password } = await request.json();
    if (!userId || !password) {
      return NextResponse.json({ error: 'userId and password are required' }, { status: 400 });
    }

    const passwordCheck = validatePassword(password);
    if (!passwordCheck.isValid) {
      return NextResponse.json({ error: passwordCheck.errors[0] }, { status: 400 });
    }

    const membership = await prisma.membership.findUnique({
      where: { userId_organizationId: { userId, organizationId: ctx.organizationId } },
      select: { role: true },
    });

    if (!membership) {
      return NextResponse.json({ error: 'That person is not on this business' }, { status: 404 });
    }

    // A reset hands over the account, so it follows the same line as changing
    // someone's role: an admin must not be able to seize the owner's account,
    // nor a fellow admin's. Resetting your own password is always allowed.
    if (ctx.userId !== userId) {
      if (membership.role === 'owner') {
        return NextResponse.json(
          { error: "Only the owner can change the owner's password" },
          { status: 403 }
        );
      }
      if (membership.role === 'admin' && ctx.role !== 'owner') {
        return NextResponse.json(
          { error: "Only the owner can reset an admin's password" },
          { status: 403 }
        );
      }
    }

    await prisma.user.update({
      where: { id: userId },
      data: { password: await bcrypt.hash(password, 12) },
    });

    return NextResponse.json({ reset: userId });
  } catch (error) {
    console.error('Failed to reset password:', error);
    return NextResponse.json({ error: 'Failed to reset password' }, { status: 500 });
  }
}
