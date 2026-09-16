import { NextResponse } from 'next/server';
import { z } from 'zod';
import { activeOrg } from '@/lib/api-access';
import { prisma } from '@/lib/prisma';
import { readJson } from '@/lib/validation/request';
import { recordId } from '@/lib/validation/fields';

const assignSchema = z.object({
  // An Employee id, which must be one of this business's people.
  assigneeId: recordId,
});

// POST - Assign alert to an employee
export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;

    const { id } = await params;
    const body = await readJson(request, assignSchema);
    if (!body.ok) return body.response;
    const { assigneeId } = body.data;

    const [existingAlert, employee] = await Promise.all([
      prisma.alert.findFirst({
        where: { id, organizationId: ctx.organizationId },
        select: { id: true, title: true, status: true },
      }),
      prisma.employee.findFirst({
        where: { id: assigneeId, organizationId: ctx.organizationId },
        select: { id: true, name: true },
      }),
    ]);
    if (!existingAlert) {
      return NextResponse.json({ error: 'Alert not found' }, { status: 404 });
    }
    if (!employee) {
      return NextResponse.json({ error: 'Employee not found' }, { status: 404 });
    }

    const { count } = await prisma.alert.updateMany({
      where: { id, organizationId: ctx.organizationId },
      data: {
        assigneeId: employee.id,
        status: existingAlert.status === 'active' ? 'acknowledged' : existingAlert.status,
      },
    });
    if (count === 0) {
      return NextResponse.json({ error: 'Alert not found' }, { status: 404 });
    }

    const alert = await prisma.alert.findFirst({
      where: { id, organizationId: ctx.organizationId },
      include: {
        zone: { select: { id: true, name: true } },
        assignee: { select: { id: true, name: true, email: true } },
      },
    });

    // Employees may not have a login, so the note goes to whoever assigned it.
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
