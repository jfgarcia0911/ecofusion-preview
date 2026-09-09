import { NextResponse } from 'next/server';
import { getOrgContext, canManageMembers } from '@/lib/tenancy';
import { prisma } from '@/lib/prisma';

// GET - Fetch all employees for user
export async function GET() {
  try {
    const ctx = await getOrgContext();
    if (!ctx) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const employees = await prisma.employee.findMany({
      where: { organizationId: ctx.organizationId },
      orderBy: { name: 'asc' },
      include: {
        // Lets the list show who can actually sign in.
        account: { select: { id: true, email: true } },
      },
    });

    // When each of them was last here, from the sign-ins the business already
    // records. One grouped query for the whole directory rather than one per
    // person, and only for the people who have a login to sign in with.
    const accountIds = employees
      .map((employee) => employee.accountId)
      .filter((id): id is string => id !== null);

    const [lastSignIns, memberships] = accountIds.length
      ? await Promise.all([
          prisma.activityLog.groupBy({
            by: ['userId'],
            where: {
              organizationId: ctx.organizationId,
              action: 'signin',
              userId: { in: accountIds },
            },
            _max: { createdAt: true },
          }),
          prisma.membership.findMany({
            where: { organizationId: ctx.organizationId, userId: { in: accountIds } },
            select: { userId: true, role: true },
          }),
        ])
      : [[], []];

    const seenAt = new Map(
      lastSignIns.map((row) => [row.userId, row._max.createdAt] as const)
    );
    const roleOf = new Map(memberships.map((m) => [m.userId, m.role] as const));

    /**
     * Whether this reader may set a new password for that person.
     *
     * Decided here rather than in the browser, and by the same rules the reset
     * itself enforces, so the button is offered exactly when it would work. A
     * manager who could see it would be clicking on a refusal, and a client
     * copy of the policy is a copy that drifts.
     */
    const mayReset = (accountId: string | null): boolean => {
      if (!accountId || !canManageMembers(ctx)) return false;
      if (accountId === ctx.userId) return true;

      const role = roleOf.get(accountId);
      if (role === 'owner') return false;
      if (role === 'admin' && ctx.role !== 'owner') return false;
      return true;
    };

    /**
     * Whether this reader may change that person's access level.
     *
     * The same shape as the reset, and for the same reason, but without the
     * exception for yourself: resetting your own password is ordinary, and
     * quietly changing your own standing is not.
     */
    const mayChangeRole = (accountId: string | null): boolean => {
      if (!accountId || !canManageMembers(ctx)) return false;

      const role = roleOf.get(accountId);
      if (role === 'owner') return false;
      if (role === 'admin' && ctx.role !== 'owner') return false;
      return true;
    };

    return NextResponse.json(
      employees.map((employee) => ({
        ...employee,
        /**
         * When this person last signed in to this business, or null.
         *
         * Null means two different things and the interface has to tell them
         * apart: somebody with no account cannot sign in, while somebody with
         * one who never has is a login nobody has picked up.
         */
        lastSignInAt: employee.accountId ? seenAt.get(employee.accountId) ?? null : null,
        /** Role held on this business by the login, when there is one. */
        orgRole: employee.accountId ? roleOf.get(employee.accountId) ?? null : null,
        canResetPassword: mayReset(employee.accountId),
        canChangeRole: mayChangeRole(employee.accountId),
      }))
    );
  } catch (error) {
    console.error('Failed to fetch employees:', error);
    return NextResponse.json({ error: 'Failed to fetch employees' }, { status: 500 });
  }
}

// POST - Create a new employee
export async function POST(request: Request) {
  try {
    const ctx = await getOrgContext();
    if (!ctx) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const data = await request.json();
    const { name, role, email, phone, status } = data;

    if (!name || !role || !email) {
      return NextResponse.json({ error: 'Name, role, and email are required' }, { status: 400 });
    }

    const employee = await prisma.employee.create({
      data: {
        userId: ctx.userId,
        organizationId: ctx.organizationId,
        name,
        role,
        email,
        phone: phone || null,
        status: status || 'Active',
      },
    });

    return NextResponse.json(employee);
  } catch (error) {
    console.error('Failed to create employee:', error);
    return NextResponse.json({ error: 'Failed to create employee' }, { status: 500 });
  }
}
