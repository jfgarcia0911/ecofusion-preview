import { NextResponse } from 'next/server';
import { activeOrg } from '@/lib/api-access';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';
import { readJson, sensorValue, listLimit } from '@/lib/validation/request';

/**
 * A reading. Every value optional and independently checked, because a probe
 * sends what it measures: one that reads pH and temperature and not ammonia
 * should post those two rather than inventing the rest.
 */
const readingSchema = z.object({
  temperature: sensorValue,
  ph: sensorValue,
  dissolvedO2: sensorValue,
  ammonia: sensorValue,
  humidity: sensorValue,
});

type Parameter = 'temperature' | 'ph' | 'dissolvedO2' | 'ammonia' | 'humidity';

const LABELS: Record<Parameter, string> = {
  temperature: 'Temperature',
  ph: 'pH',
  dissolvedO2: 'Dissolved O2',
  ammonia: 'Ammonia',
  humidity: 'Humidity',
};

const SEVERITIES = new Set(['info', 'warning', 'critical']);

/** The roles told about a threshold being crossed, besides whoever entered the reading. */
const ALERTED_ROLES = ['owner', 'supervisor', 'manager'];

// GET - Fetch sensor readings for a zone
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;

    const { id: zoneId } = await params;
    const { searchParams } = new URL(request.url);
    // Out of range or not a number falls back to 50 rather than refusing:
    // a bad limit is the caller's typo, not a reason to withhold the list.
    // listLimit already caps it at 200.
    const limit = listLimit.parse(searchParams.get('limit'));

    const zone = await prisma.zone.findFirst({
      where: { id: zoneId, organizationId: ctx.organizationId },
      select: { id: true },
    });
    if (!zone) {
      return NextResponse.json({ error: 'Zone not found' }, { status: 404 });
    }

    const readings = await prisma.sensorReading.findMany({
      where: { zoneId: zone.id },
      orderBy: { timestamp: 'desc' },
      take: limit,
    });

    return NextResponse.json(readings);
  } catch (error) {
    console.error('Failed to fetch readings:', error);
    return NextResponse.json({ error: 'Failed to fetch readings' }, { status: 500 });
  }
}

// POST - Add a new sensor reading and check thresholds
export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;

    const { id: zoneId } = await params;
    const parsed = await readJson(request, readingSchema);
    if (!parsed.ok) return parsed.response;
    const values = parsed.data;

    const zone = await prisma.zone.findFirst({
      where: { id: zoneId, organizationId: ctx.organizationId },
      select: {
        id: true,
        name: true,
        alertThresholds: { where: { enabled: true }, take: 50 },
      },
    });
    if (!zone) {
      return NextResponse.json({ error: 'Zone not found' }, { status: 404 });
    }

    // What this reading breaches, worked out before touching the database.
    const breaches: { paramName: string; message: string; severity: string }[] = [];
    for (const threshold of zone.alertThresholds) {
      if (!(threshold.parameter in LABELS)) continue;
      const parameter = threshold.parameter as Parameter;
      const value = values[parameter];
      if (value === null || value === undefined) continue;
      const paramName = LABELS[parameter];

      let message: string | null = null;
      if (threshold.minValue !== null && value < threshold.minValue) {
        message = `${paramName} (${value}) is below minimum threshold (${threshold.minValue})`;
      } else if (threshold.maxValue !== null && value > threshold.maxValue) {
        message = `${paramName} (${value}) is above maximum threshold (${threshold.maxValue})`;
      }
      if (message) {
        breaches.push({
          paramName,
          message,
          severity: SEVERITIES.has(threshold.alertLevel) ? threshold.alertLevel : 'warning',
        });
      }
    }

    // Everyone answerable for the business hears about it, and the person who
    // entered the reading, once each.
    const recipients = breaches.length
      ? [
          ...new Set([
            ctx.userId,
            ...(
              await prisma.membership.findMany({
                where: { organizationId: ctx.organizationId, role: { in: ALERTED_ROLES } },
                select: { userId: true },
                take: 200,
              })
            ).map((m) => m.userId),
          ]),
        ]
      : [];

    const { reading, alerts } = await prisma.$transaction(
      async (tx) => {
        const reading = await tx.sensorReading.create({
          data: {
            zoneId: zone.id,
            temperature: values.temperature ?? null,
            ph: values.ph ?? null,
            dissolvedO2: values.dissolvedO2 ?? null,
            ammonia: values.ammonia ?? null,
            humidity: values.humidity ?? null,
          },
        });

        const alerts: string[] = [];
        if (breaches.length === 0) return { reading, alerts };

        // One reading at a time decides this zone's alerts, so two readings
        // arriving together cannot each see "no active alert" and both raise one.
        await tx.$executeRaw`SELECT pg_advisory_xact_lock(hashtext(${`zone-alert:${zone.id}`}))`;

        for (const breach of breaches) {
          const title = `${breach.paramName} Alert - ${zone.name}`;
          const existingAlert = await tx.alert.findFirst({
            where: {
              organizationId: ctx.organizationId,
              zoneId: zone.id,
              type: 'threshold',
              status: 'active',
              title: { startsWith: `${breach.paramName} Alert` },
            },
            select: { id: true },
          });
          if (existingAlert) continue;

          await tx.alert.create({
            data: {
              userId: ctx.userId,
              organizationId: ctx.organizationId,
              zoneId: zone.id,
              type: 'threshold',
              severity: breach.severity,
              title,
              message: breach.message,
            },
          });

          await tx.notification.createMany({
            data: recipients.map((userId) => ({
              userId,
              title: `Threshold Alert: ${breach.paramName}`,
              message: `${zone.name}: ${breach.message}`,
              type: breach.severity === 'critical' ? 'error' : 'warning',
              link: '/dashboard/operations',
            })),
          });

          alerts.push(breach.message);
        }

        return { reading, alerts };
      },
      { timeout: 15_000 }
    );

    return NextResponse.json({
      reading,
      alertsGenerated: alerts,
    });
  } catch (error) {
    console.error('Failed to create reading:', error);
    return NextResponse.json({ error: 'Failed to create reading' }, { status: 500 });
  }
}
