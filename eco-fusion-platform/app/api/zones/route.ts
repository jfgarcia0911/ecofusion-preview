import { NextResponse } from 'next/server';
import { z } from 'zod';
import { activeOrg } from '@/lib/api-access';
import { canAdminister } from '@/lib/tenancy';
import { prisma } from '@/lib/prisma';
import { readJson } from '@/lib/validation/request';
import { adminOnly, requiredText } from '@/lib/validation/fields';

const ZONE_STATUSES = ['active', 'maintenance', 'offline'] as const;

const createSchema = z.object({
  name: requiredText(120),
  // Free text rather than a list: templates and snapshots carry types of their own.
  type: requiredText(60),
  status: z.enum(ZONE_STATUSES).optional(),
});

// GET - This business's zones with their latest sensor reading
export async function GET() {
  try {
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;

    const zones = await prisma.zone.findMany({
      where: { organizationId: ctx.organizationId },
      orderBy: { name: 'asc' },
      take: 500,
      include: {
        metrics: {
          orderBy: { timestamp: 'desc' },
          take: 1,
        },
        // One per parameter at most (unique on zone + parameter), so bounded
        // by the handful of parameters there are.
        alertThresholds: { orderBy: { parameter: 'asc' }, take: 50 },
      },
    });

    // Transform zones to include latest metrics in a flattened structure
    const zonesWithMetrics = zones.map(zone => {
      const latestReading = zone.metrics[0];
      return {
        id: zone.id,
        name: zone.name,
        type: zone.type,
        status: zone.status,
        createdAt: zone.createdAt,
        updatedAt: zone.updatedAt,
        metrics: latestReading ? {
          temp: latestReading.temperature,
          ph: latestReading.ph,
          do: latestReading.dissolvedO2,
          ammonia: latestReading.ammonia,
          humidity: latestReading.humidity,
        } : null,
        lastUpdate: latestReading?.timestamp || zone.updatedAt,
        alertThresholds: zone.alertThresholds,
      };
    });

    return NextResponse.json(zonesWithMetrics);
  } catch (error) {
    console.error('Failed to fetch zones:', error);
    return NextResponse.json({ error: 'Failed to fetch zones' }, { status: 500 });
  }
}

// POST - Create a new zone
export async function POST(request: Request) {
  try {
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;
    if (!canAdminister(ctx)) return adminOnly('add zones');

    const body = await readJson(request, createSchema);
    if (!body.ok) return body.response;
    const input = body.data;

    const zone = await prisma.zone.create({
      data: {
        userId: ctx.userId,
        organizationId: ctx.organizationId,
        name: input.name,
        type: input.type,
        ...(input.status ? { status: input.status } : {}),
      },
    });

    return NextResponse.json(zone);
  } catch (error) {
    console.error('Failed to create zone:', error);
    return NextResponse.json({ error: 'Failed to create zone' }, { status: 500 });
  }
}
