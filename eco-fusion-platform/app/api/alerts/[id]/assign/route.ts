import { NextResponse } from 'next/server';
import { getOrgContext } from '@/lib/tenancy';
import { prisma } from '@/lib/prisma';

// POST - Assign alert to an employee
export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const ctx = await getOrgContext();
    if (!ctx) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    const data = await request.json();
    const { assigneeId } = data;

    if (!assigneeId) {
      return NextResponse.json({ error: 'Assignee ID is required' }, { status: 400 });
    }

    // Verify alert belongs to user
    const existingAlert = await prisma.alert.findFirst({
      where: { id, organizationId: ctx.organizationId },
    });
    if (!existingAlert) {
      return NextResponse.json({ error: 'Alert not found' }, { status: 404 });
    }

    // Verify employee exists and belongs to user
    const employee = await prisma.employee.findFirst({
      where: { id: assigneeId, organizationId: ctx.organizationId },
    });
    if (!employee) {
      return NextResponse.json({ error: 'Employee not found' }, { status: 404 });
    }

    const alert = await prisma.alert.update({
      where: { id },
      data: {
        assigneeId,
        status: existingAlert.status === 'active' ? 'acknowledged' : existingAlert.status,
      },
      include: {
        zone: { select: { id: true, name: true } },
        assignee: { select: { id: true, name: true, email: true } },
      },
    });

    // Create notification for the assigned employee (using their linked user if exists)
    // For now, just create a general notification since employees may not have user accounts
    await prisma.notification.create({
      data: {
        userId: ctx.userId,
        title: `Alert Assigned: ${existingAlert.title}`,
        message: `Alert has been assigned to ${employee.name}`,
        type: 'info',
        link: `/dashboard/operations`,
      },
    });

    return NextResponse.json(alert);
  } catch (error) {
    console.error('Failed to assign alert:', error);
    return NextResponse.json({ error: 'Failed to assign alert' }, { status: 500 });
  }
}
