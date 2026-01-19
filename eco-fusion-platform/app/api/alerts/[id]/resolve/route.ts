import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';

// POST - Resolve an alert
export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    const data = await request.json();
    const { resolution } = data;

    // Verify alert belongs to user
    const existingAlert = await prisma.alert.findFirst({
      where: { id, userId: session.user.id },
    });
    if (!existingAlert) {
      return NextResponse.json({ error: 'Alert not found' }, { status: 404 });
    }

    const alert = await prisma.alert.update({
      where: { id },
      data: {
        status: 'resolved',
        resolvedAt: new Date(),
        resolvedBy: session.user.id,
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
        userId: session.user.id,
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
