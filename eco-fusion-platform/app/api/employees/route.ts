import { NextResponse } from 'next/server';
import { canManageMembers } from '@/lib/tenancy';
import { activeOrg } from '@/lib/api-access';
import { prisma } from '@/lib/prisma';

/** One row of the directory query in GET. */
interface EmployeeRow {
  id: string;
  userId: string;
  organizationId: string;
  name: string;
  role: string;
  email: string;
  phone: string | null;
  status: string;
  accountId: string | null;
  createdAt: Date;
  updatedAt: Date;
  accountEmail: string | null;
  orgRole: string | null;
  lastSignInAt: Date | null;
}

// GET - Fetch all employees for user
export async function GET() {
  try {
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;

    // The whole directory in one query: each person, the login they sign in
    // with, the access level that login holds here, and when it last signed
    // in to this business.
    //
    // It was three round trips to the database in Tokyo one after another -
    // the people, then their logins (Prisma fetches an include as a second
    // query), then sign-ins and roles, which had to wait for the logins to
    // know whose to ask about - and the last of those opened a second
    // connection, which costs a further half second when none is open. About
    // a second when warm and 1.6 cold, measured; one trip now.
    //
    // Last sign-in reads ActivityLog through the index on (organizationId,
    // action, userId, createdAt), which answers it without scanning the log:
    // every change anybody makes in a business is written there, so the log
    // grows much faster than the sign-ins in it.
    const rows = await prisma.$queryRaw<EmployeeRow[]>`
      SELECT
        e."id", e."userId", e."organizationId", e."name", e."role", e."email",
        e."phone", e."status", e."accountId", e."createdAt", e."updatedAt",
        u."email" AS "accountEmail",
        m."role" AS "orgRole",
        (SELECT max(al."createdAt") FROM "ActivityLog" al
          WHERE al."organizationId" = e."organizationId"
            AND al."action" = 'signin'
            AND al."userId" = e."accountId") AS "lastSignInAt"
      FROM "Employee" e
      LEFT JOIN "User" u ON u."id" = e."accountId"
      LEFT JOIN "Membership" m
             ON m."userId" = e."accountId" AND m."organizationId" = e."organizationId"
      WHERE e."organizationId" = ${ctx.organizationId}
      ORDER BY e."name" ASC
    `;

    const employees = rows.map(({ accountEmail, orgRole, lastSignInAt, ...employee }) => ({
      employee: {
        ...employee,
        // Lets the list show who can actually sign in.
        account: employee.accountId && accountEmail ? { id: employee.accountId, email: accountEmail } : null,
      },
      orgRole,
      lastSignInAt,
    }));
    const roleOf = new Map(
      employees
        .filter((row) => row.employee.accountId && row.orgRole)
        .map((row) => [row.employee.accountId as string, row.orgRole as string] as const)
    );

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
      if (role === 'owner') return ctx.isMaster;
      if (role === 'supervisor' && ctx.role !== 'owner') return false;
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
      // Only the master account moves an owner. The last owner is still
      // protected by the role route itself.
      if (role === 'owner') return ctx.isMaster;
      if (role === 'supervisor' && ctx.role !== 'owner') return false;
      return true;
    };

    return NextResponse.json(
      employees.map(({ employee, orgRole, lastSignInAt }) => ({
        ...employee,
        /**
         * When this person last signed in to this business, or null.
         *
         * Null means two different things and the interface has to tell them
         * apart: somebody with no account cannot sign in, while somebody with
         * one who never has is a login nobody has picked up.
         */
        lastSignInAt: employee.accountId ? lastSignInAt : null,
        /** Role held on this business by the login, when there is one. */
        orgRole: employee.accountId ? orgRole : null,
        canResetPassword: mayReset(employee.accountId),
        canChangeRole: mayChangeRole(employee.accountId),
        /**
         * Whether "Owner" is among the levels offered. Only the master account
         * hands out ownership from here; an owner's own team never sees it.
         */
        canMakeOwner: ctx.isMaster && mayChangeRole(employee.accountId),
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
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;

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
