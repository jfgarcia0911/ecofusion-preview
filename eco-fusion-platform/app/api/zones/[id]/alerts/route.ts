import { NextResponse } from 'next/server';
import { z } from 'zod';
import { activeOrg } from '@/lib/api-access';
import { canAdminister } from '@/lib/tenancy';
import { prisma } from '@/lib/prisma';
import { readJson } from '@/lib/validation/request';
import { adminOnly, optionalNumber } from '@/lib/validation/fields';

const PARAMETERS = ['temperature', 'ph', 'dissolvedO2', 'ammonia', 'humidity'] as const;
const ALERT_LEVELS = ['info', 'warning', 'critical'] as const;

// A limit is a sensor value: generous, but finite and bounded.
const limit = optionalNumber(-1_000_000, 1_000_000);

const thresholdSchema = z
  .object({
    parameter: z.enum(PARAMETERS),
    minValue: limit,
    maxValue: limit,
    enabled: z.boolean().optional(),
    alertLevel: z.enum(ALERT_LEVELS).optional(),
  })
  .refine(
    (t) => t.minValue === null || t.minValue === undefined ||
      t.maxValue === null || t.maxValue === undefined ||
      t.minValue <= t.maxValue,
    { message: 'Minimum must not be above maximum', path: ['minValue'] }
  );

const deleteQuery = z.object({ parameter: z.enum(PARAMETERS) });

/** A zone, only if it is this business's. */
function zoneInBusiness(zoneId: string, organizationId: string) {
  return prisma.zone.findFirst({ where: { id: zoneId, organizationId }, select: { id: true } });
}

// GET - Fetch all alert thresholds for a zone
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;

    const { id: zoneId } = await params;

    const alerts = await prisma.zoneAlertThreshold.findMany({
      where: { zoneId, zone: { organizationId: ctx.organizationId } },
      orderBy: { parameter: 'asc' },
      take: 50,
    });
    if (alerts.length === 0 && !(await zoneInBusiness(zoneId, ctx.organizationId))) {
      return NextResponse.json({ error: 'Zone not found' }, { status: 404 });
    }

    return NextResponse.json(alerts);
  } catch (error) {
    console.error('Error fetching zone alerts:', error);
    return NextResponse.json({ error: 'Failed to fetch alerts' }, { status: 500 });
  }
}

// POST - Create or update an alert threshold
export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;
    if (!canAdminister(ctx)) return adminOnly('change alert limits');

    const { id: zoneId } = await params;
    const body = await readJson(request, thresholdSchema);
    if (!body.ok) return body.response;
    const input = body.data;

    if (!(await zoneInBusiness(zoneId, ctx.organizationId))) {
      return NextResponse.json({ error: 'Zone not found' }, { status: 404 });
    }

    // Upsert the alert threshold
    const alert = await prisma.zoneAlertThreshold.upsert({
      where: {
        zoneId_parameter: { zoneId, parameter: input.parameter },
      },
      update: {
        minValue: input.minValue,
        maxValue: input.maxValue,
        enabled: input.enabled,
        alertLevel: input.alertLevel,
      },
      create: {
        zoneId,
        parameter: input.parameter,
        minValue: input.minValue ?? null,
        maxValue: input.maxValue ?? null,
        enabled: input.enabled ?? true,
        alertLevel: input.alertLevel ?? 'warning',
      },
    });

    return NextResponse.json(alert);
  } catch (error) {
    console.error('Error creating/updating zone alert:', error);
    return NextResponse.json({ error: 'Failed to save alert' }, { status: 500 });
  }
}

// DELETE - Remove an alert threshold
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;
    if (!canAdminister(ctx)) return adminOnly('change alert limits');

    const { id: zoneId } = await params;
    const parsed = deleteQuery.safeParse(
      Object.fromEntries(new URL(request.url).searchParams)
    );
    if (!parsed.success) {
      return NextResponse.json({ error: 'A valid parameter is required' }, { status: 400 });
    }

    const { count } = await prisma.zoneAlertThreshold.deleteMany({
      where: {
        zoneId,
        parameter: parsed.data.parameter,
        zone: { organizationId: ctx.organizationId },
      },
    });
    if (count === 0) {
      const zone = await zoneInBusiness(zoneId, ctx.organizationId);
      return NextResponse.json(
        { error: zone ? 'Alert not found' : 'Zone not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting zone alert:', error);
    return NextResponse.json({ error: 'Failed to delete alert' }, { status: 500 });
  }
}
