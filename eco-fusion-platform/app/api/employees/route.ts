import { NextResponse } from 'next/server';
import { getOrgContext } from '@/lib/tenancy';
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

    const lastSignIns = accountIds.length
      ? await prisma.activityLog.groupBy({
          by: ['userId'],
          where: {
            organizationId: ctx.organizationId,
            action: 'signin',
            userId: { in: accountIds },
          },
          _max: { createdAt: true },
        })
      : [];

    const seenAt = new Map(
      lastSignIns.map((row) => [row.userId, row._max.createdAt] as const)
    );

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
