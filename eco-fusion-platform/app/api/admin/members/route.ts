import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';
import { isPlatformAdmin, logStaffAccess } from '@/lib/staff';
import { validatePassword } from '@/lib/validation/password';
import { ASSIGNABLE_BUSINESS_ROLES } from '@/lib/roles';

/**
 * Who can sign in to a named business, read and granted by EcoFusion.
 *
 * The customer's own version of this is Employees, which reaches only the
 * business the caller belongs to. Staff belong to none, so the business is
 * named in the request instead - which is the whole reason this route exists
 * rather than staff borrowing the customer's one.
 *
 * Doing this without opening a support session is deliberate. Answering "who
 * can get in here" should not require the power to change everything else in
 * the business, and a session left open is worse than a narrow route. Both
 * reading and granting are written to the business's own access record, so the
 * owner sees it either way.
 */

const ROLES = ASSIGNABLE_BUSINESS_ROLES;

function organizationIdFrom(request: Request): string | null {
  return new URL(request.url).searchParams.get('organizationId')?.trim() || null;
}

// GET - the logins that reach one business.
export async function GET(request: Request) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    if (!(await isPlatformAdmin(session.user.id))) {
      return NextResponse.json({ error: 'Staff access required' }, { status: 403 });
    }

    const organizationId = organizationIdFrom(request);
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

    const memberships = await prisma.membership.findMany({
      where: { organizationId },
      orderBy: { createdAt: 'asc' },
      select: {
        id: true,
        role: true,
        createdAt: true,
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            employeeRecord: { select: { role: true } },
          },
        },
      },
    });

    return NextResponse.json({
      organization,
      members: memberships.map((m) => ({
        membershipId: m.id,
        id: m.user.id,
        name: m.user.name,
        email: m.user.email,
        role: m.role,
        /** What they do at the business, when there is an employee record. */
        jobTitle: m.user.employeeRecord?.role ?? null,
        joinedAt: m.createdAt,
      })),
    });
  } catch (error) {
    console.error('Failed to read a business\'s members:', error);
    return NextResponse.json({ error: 'Failed to read the members' }, { status: 500 });
  }
}

// POST - create a login that reaches one business.
export async function POST(request: Request) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    if (!(await isPlatformAdmin(session.user.id))) {
      return NextResponse.json({ error: 'Staff access required' }, { status: 403 });
    }

    const { organizationId, name, email, password, role } = await request.json();
    if (!organizationId) {
      return NextResponse.json({ error: 'organizationId is required' }, { status: 400 });
    }
    if (!email || !password) {
      return NextResponse.json(
        { error: 'An email and a starting password are both required' },
        { status: 400 }
      );
    }

    const requestedRole = role || 'member';
    // Owner is absent on purpose. A business has one, it got one when it was
    // made, and handing out a second is not a thing support does from a list.
    if (!ROLES.includes(requestedRole)) {
      return NextResponse.json({ error: 'Invalid role' }, { status: 400 });
    }

    // Held to the same standard as a password somebody picks for themselves.
    const strength = validatePassword(password);
    if (!strength.isValid) {
      return NextResponse.json({ error: strength.errors[0] }, { status: 400 });
    }

    const organization = await prisma.organization.findUnique({
      where: { id: organizationId },
      select: { id: true },
    });
    if (!organization) {
      return NextResponse.json({ error: 'No such business' }, { status: 404 });
    }

    const normalisedEmail = String(email).trim().toLowerCase();
    const existing = await prisma.user.findUnique({
      where: { email: normalisedEmail },
      select: { id: true },
    });
    if (existing) {
      const alreadyHere = await prisma.membership.findUnique({
        where: { userId_organizationId: { userId: existing.id, organizationId } },
        select: { id: true },
      });
      return NextResponse.json(
        {
          error: alreadyHere
            ? 'That person already reaches this business'
            : 'That email already has an account',
        },
        { status: 409 }
      );
    }

    const created = await prisma.$transaction(async (tx) => {
      const user = await tx.user.create({
        data: {
          name: name || null,
          email: normalisedEmail,
          password: await bcrypt.hash(password, 12),
          onboardingComplete: true,
        },
      });
      await tx.membership.create({
        data: { userId: user.id, organizationId, role: requestedRole },
      });
      return user;
    });

    // A login is a change to the business, so it lands in the record its owner
    // reads, beside everything else EcoFusion has done to it.
    await logStaffAccess(session.user.id, organizationId, 'write', {
      method: 'POST',
      path: '/api/admin/members',
    });

    return NextResponse.json(
      { id: created.id, name: created.name, email: created.email, role: requestedRole },
      { status: 201 }
    );
  } catch (error) {
    console.error('Failed to create a member:', error);
    return NextResponse.json({ error: 'Failed to create the login' }, { status: 500 });
  }
}
