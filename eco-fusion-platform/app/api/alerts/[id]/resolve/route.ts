import { NextResponse } from 'next/server';
import { activeOrg } from '@/lib/api-access';
import { prisma } from '@/lib/prisma';

// POST - Resolve an alert
export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;

    const { id } = await params;
    const data = await request.json();
    const { resolution } = data;

    // Verify alert belongs to user
    const existingAlert = await prisma.alert.findFirst({
      where: { id, organizationId: ctx.organizationId },
    });
    if (!existingAlert) {
      return NextResponse.json({ error: 'Alert not found' }, { status: 404 });
    }

    const alert = await prisma.alert.update({
      where: { id },
      data: {
        status: 'resolved',
        resolvedAt: new Date(),
        resolvedBy: ctx.userId,
        resolution: resolution || null,
      },
      include: {
        zone: { select: { id: true, name: true } },
        assignee: { select: { id: true, name: true, email: true } },
      },
    });

    // Create notification for resolution
    await prisma.notification.create({
      data: {
        userId: ctx.userId,
        title: `Alert Resolved: ${existingAlert.title}`,
        message: resolution || 'Alert has been marked as resolved',
        type: 'success',
        link: `/dashboard/operations`,
      },
    });

    return NextResponse.json(alert);
  } catch (error) {
    console.error('Failed to resolve alert:', error);
    return NextResponse.json({ error: 'Failed to resolve alert' }, { status: 500 });
  }
}
