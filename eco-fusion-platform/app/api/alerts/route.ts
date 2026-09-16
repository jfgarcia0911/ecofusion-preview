import { NextResponse } from 'next/server';
import { z } from 'zod';
import { activeOrg } from '@/lib/api-access';
import { prisma } from '@/lib/prisma';
import { listLimit, readJson } from '@/lib/validation/request';
import { optionalRecordId, requiredText } from '@/lib/validation/fields';

const SEVERITIES = ['info', 'warning', 'critical'] as const;
const STATUSES = ['active', 'acknowledged', 'resolved'] as const;
// 'threshold' is left out on purpose: those are raised by readings, and a
// hand-made one would suppress the real alert the next reading should raise.
const MANUAL_TYPES = ['manual', 'system', 'equipment', 'maintenance'] as const;

const listQuery = z.object({
  status: z.enum(STATUSES).optional().catch(undefined),
  severity: z.enum(SEVERITIES).optional().catch(undefined),
  zoneId: z.string().trim().min(1).max(200).optional().catch(undefined),
  limit: listLimit,
});

const createSchema = z.object({
  zoneId: optionalRecordId,
  type: z.enum(MANUAL_TYPES).optional(),
  severity: z.enum(SEVERITIES).optional(),
  title: requiredText(200),
  message: requiredText(4000),
});

// GET - Fetch alerts with optional filters
export async function GET(request: Request) {
  try {
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;

    const query = listQuery.parse(Object.fromEntries(new URL(request.url).searchParams));

    const alerts = await prisma.alert.findMany({
      where: {
        organizationId: ctx.organizationId,
        ...(query.status ? { status: query.status } : {}),
        ...(query.severity ? { severity: query.severity } : {}),
        ...(query.zoneId ? { zoneId: query.zoneId } : {}),
      },
      orderBy: { createdAt: 'desc' },
      take: query.limit,
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

    const body = await readJson(request, createSchema);
    if (!body.ok) return body.response;
    const input = body.data;

    if (input.zoneId) {
      const zone = await prisma.zone.findFirst({
        where: { id: input.zoneId, organizationId: ctx.organizationId },
        select: { id: true },
      });
      if (!zone) {
        return NextResponse.json({ error: 'Zone not found' }, { status: 404 });
      }
    }

    const severity = input.severity ?? 'warning';

    const alert = await prisma.alert.create({
      data: {
        userId: ctx.userId,
        organizationId: ctx.organizationId,
        zoneId: input.zoneId ?? null,
        type: input.type ?? 'manual',
        severity,
        title: input.title,
        message: input.message,
      },
      include: {
        zone: { select: { id: true, name: true } },
      },
    });

    await prisma.notification.create({
      data: {
        userId: ctx.userId,
        title: `Alert: ${input.title}`,
        message: input.message,
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
