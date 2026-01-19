import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';

// GET - Fetch all employees for user
export async function GET() {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const employees = await prisma.employee.findMany({
      where: { userId: session.user.id },
      orderBy: { name: 'asc' },
    });

    return NextResponse.json(employees);
  } catch (error) {
    console.error('Failed to fetch employees:', error);
    return NextResponse.json({ error: 'Failed to fetch employees' }, { status: 500 });
  }
}

// POST - Create a new employee
export async function POST(request: Request) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const data = await request.json();
    const { name, role, email, phone, status } = data;

    if (!name || !role || !email) {
      return NextResponse.json({ error: 'Name, role, and email are required' }, { status: 400 });
    }

    const employee = await prisma.employee.create({
      data: {
        userId: session.user.id,
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
