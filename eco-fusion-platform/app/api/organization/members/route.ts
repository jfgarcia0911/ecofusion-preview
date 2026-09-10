import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { prisma } from '@/lib/prisma';
import { canManageMembers } from '@/lib/tenancy';
import { activeOrg } from '@/lib/api-access';
import { validatePassword } from '@/lib/validation/password';
import { ASSIGNABLE_BUSINESS_ROLES } from '@/lib/roles';

const ROLES = ASSIGNABLE_BUSINESS_ROLES;

/** Which role wins when one person holds different ones in different businesses. */
const RANK: Record<string, number> = { owner: 3, admin: 2, manager: 1, member: 0 };

// GET - Everyone with access to this farm.
export async function GET() {
  try {
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;

    // Every business the caller owns. Team Access is an account screen now: a
    // login is not a thing one business holds, so listing only the people in
    // the business that happens to be open would hide half a team from the
    // person who created it.
    const owned = (
      await prisma.membership.findMany({
        where: { userId: ctx.userId, role: 'owner' },
        select: { organizationId: true },
      })
    ).map((m) => m.organizationId);

    // Staff enter one business and hold no membership, so theirs is the only
    // one they can be shown.
    const scope = ctx.isStaff || owned.length === 0 ? [ctx.organizationId] : owned;

    const memberships = await prisma.membership.findMany({
      where: { organizationId: { in: scope } },
      select: {
        id: true,
        role: true,
        createdAt: true,
        user: { select: { id: true, name: true, email: true, image: true } },
        organization: { select: { id: true, name: true } },
      },
      orderBy: { createdAt: 'asc' },
    });

    // One row per person, carrying every business of the caller's they reach.
    // Somebody in two businesses appears once, not twice.
    const people = new Map<
      string,
      {
        id: string;
        membershipId: string;
        name: string | null;
        email: string;
        image: string | null;
        role: string;
        joinedAt: Date;
        businesses: { id: string; name: string; role: string }[];
      }
    >();

    for (const m of memberships) {
      const existing = people.get(m.user.id);
      const entry = {
        id: m.organization.id,
        name: m.organization.name,
        role: m.role,
      };

      if (existing) {
        existing.businesses.push(entry);
        // The strongest role they hold anywhere is the one worth showing, so a
        // manager of one business does not read as a member because of another.
        if (RANK[m.role] > RANK[existing.role]) existing.role = m.role;
        if (m.createdAt < existing.joinedAt) existing.joinedAt = m.createdAt;
        continue;
      }

      people.set(m.user.id, {
        id: m.user.id,
        membershipId: m.id,
        name: m.user.name,
        email: m.user.email,
        image: m.user.image,
        role: m.role,
        joinedAt: m.createdAt,
        businesses: [entry],
      });
    }

    return NextResponse.json([...people.values()]);
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
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;

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

    const { name, email, password, role, employeeId, organizationIds } = await request.json();

    // One login may cover several of the caller's businesses - a manager who
    // runs two sites should not need two accounts. Absent means "this one",
    // which is what every existing caller sends.
    const requestedOrgIds: string[] = Array.isArray(organizationIds) && organizationIds.length
      ? [...new Set(organizationIds.map(String))]
      : [ctx.organizationId];

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

    // The caller must be able to manage each business named, checked one by
    // one: holding one business does not grant a say in another.
    const permitted = await prisma.membership.findMany({
      where: {
        userId: ctx.userId,
        organizationId: { in: requestedOrgIds },
        role: { in: ['owner', 'supervisor'] },
      },
      select: { organizationId: true },
    });
    const permittedIds = new Set(permitted.map((m) => m.organizationId));

    // Staff act with an admin's powers inside the business they entered, and
    // hold no membership of their own, so that one is theirs to add to.
    if (ctx.isStaff) permittedIds.add(ctx.organizationId);

    const refused = requestedOrgIds.filter((id) => !permittedIds.has(id));
    if (refused.length > 0) {
      return NextResponse.json(
        { error: 'You can only add people to a business you own or administer' },
        { status: 403 }
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
      await tx.membership.createMany({
        data: requestedOrgIds.map((organizationId) => ({
          userId: user.id,
          organizationId,
          role: requestedRole,
        })),
      });
      if (employeeId) {
        await tx.employee.update({ where: { id: employeeId }, data: { accountId: user.id } });
      }
      return user;
    });

    return NextResponse.json(
      {
        id: created.id,
        name: created.name,
        email: created.email,
        role: requestedRole,
        organizationIds: requestedOrgIds,
      },
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
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;

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

    // Only the master account may remove an owner, and even it may not remove
    // the last one: a business with no owner has nobody to answer for it or
    // to pay for it, which no amount of reach can be allowed to produce.
    if (membership.role === 'owner') {
      if (!ctx.isMaster) {
        return NextResponse.json({ error: 'The owner cannot be removed' }, { status: 400 });
      }
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

    // Removing an admin is the same decision as demoting one, so it rests with
    // the owner too. Otherwise an admin could simply delete the colleagues who
    // would have reversed it.
    if (membership.role === 'supervisor' && ctx.role !== 'owner') {
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
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;

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
    //
    // The master account alone may reset an owner's: an owner locked out of
    // their own business is exactly the problem it is there to solve.
    if (ctx.userId !== userId) {
      if (membership.role === 'owner' && !ctx.isMaster) {
        return NextResponse.json(
          { error: "Only the owner can change the owner's password" },
          { status: 403 }
        );
      }
      if (membership.role === 'supervisor' && ctx.role !== 'owner') {
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
