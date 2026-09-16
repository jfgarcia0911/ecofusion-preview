import { NextResponse } from 'next/server';
import { z } from 'zod';
import { activeOrg } from '@/lib/api-access';
import { prisma } from '@/lib/prisma';
import { readJson } from '@/lib/validation/request';
import { optionalText } from '@/lib/validation/fields';

const resolveSchema = z.object({
  resolution: optionalText(2000),
});

// POST - Resolve an alert
export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;

    const { id } = await params;
    // A resolution note is optional, so an empty body means "no note" rather
    // than a malformed request.
    const hasBody = request.headers.get('content-length') !== '0' && request.body !== null;
    let resolution: string | null = null;
    if (hasBody) {
      const body = await readJson(request, resolveSchema);
      if (!body.ok) return body.response;
      resolution = body.data.resolution ?? null;
    }

    const existingAlert = await prisma.alert.findFirst({
      where: { id, organizationId: ctx.organizationId },
      select: { id: true, title: true },
    });
    if (!existingAlert) {
      return NextResponse.json({ error: 'Alert not found' }, { status: 404 });
    }

    const { count } = await prisma.alert.updateMany({
      where: { id, organizationId: ctx.organizationId },
      data: {
        status: 'resolved',
        resolvedAt: new Date(),
        resolvedBy: ctx.userId,
        resolution,
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
