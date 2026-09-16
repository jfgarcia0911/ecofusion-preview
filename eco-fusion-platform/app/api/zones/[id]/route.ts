import { NextResponse } from 'next/server';
import { z } from 'zod';
import { activeOrg } from '@/lib/api-access';
import { canAdminister } from '@/lib/tenancy';
import { prisma } from '@/lib/prisma';
import { readJson } from '@/lib/validation/request';
import { adminOnly, requiredText } from '@/lib/validation/fields';

const ZONE_STATUSES = ['active', 'maintenance', 'offline'] as const;

// Only these fields; anything else in the body is dropped before Prisma.
const updateSchema = z.object({
  name: requiredText(120).optional(),
  type: requiredText(60).optional(),
  status: z.enum(ZONE_STATUSES).optional(),
});

// GET - Fetch a single zone with its latest readings
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;

    const { id } = await params;

    const zone = await prisma.zone.findFirst({
      where: {
        id,
        organizationId: ctx.organizationId,
      },
      include: {
        metrics: {
          orderBy: { timestamp: 'desc' },
          take: 24, // Last 24 readings for charts
        },
        alertThresholds: { orderBy: { parameter: 'asc' }, take: 50 },
        fishStocks: {
          where: { status: 'growing' },
          take: 5,
        },
        plantCrops: {
          where: { status: 'growing' },
          take: 5,
        },
        alerts: {
          where: { status: 'active' },
          take: 5,
          orderBy: { createdAt: 'desc' },
        },
      },
    });

    if (!zone) {
      return NextResponse.json({ error: 'Zone not found' }, { status: 404 });
    }

    // Transform the latest reading for easy access
    const latestReading = zone.metrics[0];
    const response = {
      ...zone,
      currentMetrics: latestReading ? {
        temp: latestReading.temperature,
        ph: latestReading.ph,
        do: latestReading.dissolvedO2,
        ammonia: latestReading.ammonia,
        humidity: latestReading.humidity,
        timestamp: latestReading.timestamp,
      } : null,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Failed to fetch zone:', error);
    return NextResponse.json({ error: 'Failed to fetch zone' }, { status: 500 });
  }
}

// PATCH - Update a zone
export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;
    if (!canAdminister(ctx)) return adminOnly('change zones');

    const { id } = await params;
    const body = await readJson(request, updateSchema);
    if (!body.ok) return body.response;
    const changes = body.data;

    const { count } = await prisma.zone.updateMany({
      where: { id, organizationId: ctx.organizationId },
      data: {
        name: changes.name,
        type: changes.type,
        status: changes.status,
      },
    });
    if (count === 0) {
      return NextResponse.json({ error: 'Zone not found' }, { status: 404 });
    }

    const zone = await prisma.zone.findFirst({
      where: { id, organizationId: ctx.organizationId },
      include: {
        metrics: {
          orderBy: { timestamp: 'desc' },
          take: 1,
        },
        alertThresholds: { orderBy: { parameter: 'asc' }, take: 50 },
      },
    });
    if (!zone) {
      return NextResponse.json({ error: 'Zone not found' }, { status: 404 });
    }

    return NextResponse.json(zone);
  } catch (error) {
    console.error('Failed to update zone:', error);
    return NextResponse.json({ error: 'Failed to update zone' }, { status: 500 });
  }
}

// DELETE - Delete a zone (cascades to readings, thresholds, alerts)
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;
    if (!canAdminister(ctx)) return adminOnly('delete zones');

    const { id } = await params;

    const existingZone = await prisma.zone.findFirst({
      where: { id, organizationId: ctx.organizationId },
      select: {
        id: true,
        _count: {
          select: {
            fishStocks: { where: { status: 'growing' } },
            plantCrops: { where: { status: 'growing' } },
          },
        },
      },
    });

    if (!existingZone) {
      return NextResponse.json({ error: 'Zone not found' }, { status: 404 });
    }

    // Refuse while the zone still has live stock in it
    const fishStockCount = existingZone._count.fishStocks;
    const plantCropCount = existingZone._count.plantCrops;
    if (fishStockCount > 0 || plantCropCount > 0) {
      return NextResponse.json({
        error: 'Cannot delete zone with active fish stocks or plant crops. Please harvest or relocate them first.',
        hasActiveStock: true,
        fishStockCount,
        plantCropCount,
      }, { status: 400 });
    }

    // Delete zone (cascade will handle readings, thresholds, alerts)
    const { count } = await prisma.zone.deleteMany({
      where: { id, organizationId: ctx.organizationId },
    });
    if (count === 0) {
      return NextResponse.json({ error: 'Zone not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to delete zone:', error);
    return NextResponse.json({ error: 'Failed to delete zone' }, { status: 500 });
  }
}
