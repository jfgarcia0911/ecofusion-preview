import { NextResponse } from 'next/server';
import { activeOrg } from '@/lib/api-access';
import { prisma } from '@/lib/prisma';

// GET - Fetch alerts with optional filters
export async function GET(request: Request) {
  try {
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;

    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const severity = searchParams.get('severity');
    const zoneId = searchParams.get('zoneId');
    const limit = parseInt(searchParams.get('limit') || '50');

    const where: Record<string, unknown> = { organizationId: ctx.organizationId };

    if (status) where.status = status;
    if (severity) where.severity = severity;
    if (zoneId) where.zoneId = zoneId;

    const alerts = await prisma.alert.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      take: limit,
      include: {
        zone: { select: { id: true, name: true } },
        assignee: { select: { id: true, name: true, email: true } },
      },
    });

    return NextResponse.json(alerts);
  } catch (error) {
    console.error('Failed to fetch alerts:', error);
    return NextResponse.json({ error: 'Failed to fetch alerts' }, { status: 500 });
  }
}

// POST - Create a new alert
export async function POST(request: Request) {
  try {
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;

    const data = await request.json();
    const { zoneId, type, severity, title, message } = data;

    if (!title || !message) {
      return NextResponse.json({ error: 'Title and message are required' }, { status: 400 });
    }

    // Validate zone belongs to user if provided
    if (zoneId) {
      const zone = await prisma.zone.findFirst({
        where: { id: zoneId, organizationId: ctx.organizationId },
      });
      if (!zone) {
        return NextResponse.json({ error: 'Zone not found' }, { status: 404 });
      }
    }

    const alert = await prisma.alert.create({
      data: {
        userId: ctx.userId,
        organizationId: ctx.organizationId,
        zoneId: zoneId || null,
        type: type || 'manual',
        severity: severity || 'warning',
        title,
        message,
      },
      include: {
        zone: { select: { id: true, name: true } },
      },
    });

    // Create notification for the alert
    await prisma.notification.create({
      data: {
        userId: ctx.userId,
        title: `Alert: ${title}`,
        message,
        type: severity === 'critical' ? 'error' : severity === 'warning' ? 'warning' : 'info',
        link: `/dashboard/operations`,
      },
    });

    return NextResponse.json(alert);
  } catch (error) {
    console.error('Failed to create alert:', error);
    return NextResponse.json({ error: 'Failed to create alert' }, { status: 500 });
  }
}
