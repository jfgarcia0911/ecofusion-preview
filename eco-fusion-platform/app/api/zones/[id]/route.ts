import { NextResponse } from 'next/server';
import { getOrgContext } from '@/lib/tenancy';
import { prisma } from '@/lib/prisma';

// GET - Fetch a single zone with its latest readings
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const ctx = await getOrgContext();
    if (!ctx) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

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
        alertThresholds: true,
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
    const ctx = await getOrgContext();
    if (!ctx) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    const data = await request.json();
    const { name, type, status } = data;

    // Verify zone belongs to user
    const existingZone = await prisma.zone.findFirst({
      where: {
        id,
        organizationId: ctx.organizationId,
      },
    });

    if (!existingZone) {
      return NextResponse.json({ error: 'Zone not found' }, { status: 404 });
    }

    // Update zone
    const zone = await prisma.zone.update({
      where: { id },
      data: {
        name: name !== undefined ? name : undefined,
        type: type !== undefined ? type : undefined,
        status: status !== undefined ? status : undefined,
      },
      include: {
        metrics: {
          orderBy: { timestamp: 'desc' },
          take: 1,
        },
        alertThresholds: true,
      },
    });

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
    const ctx = await getOrgContext();
    if (!ctx) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;

    // Verify zone belongs to user
    const existingZone = await prisma.zone.findFirst({
      where: {
        id,
        organizationId: ctx.organizationId,
      },
      include: {
        fishStocks: { where: { status: 'growing' } },
        plantCrops: { where: { status: 'growing' } },
      },
    });

    if (!existingZone) {
      return NextResponse.json({ error: 'Zone not found' }, { status: 404 });
    }

    // Warn if zone has active stock
    if (existingZone.fishStocks.length > 0 || existingZone.plantCrops.length > 0) {
      return NextResponse.json({
        error: 'Cannot delete zone with active fish stocks or plant crops. Please harvest or relocate them first.',
        hasActiveStock: true,
        fishStockCount: existingZone.fishStocks.length,
        plantCropCount: existingZone.plantCrops.length,
      }, { status: 400 });
    }

    // Delete zone (cascade will handle readings, thresholds, alerts)
    await prisma.zone.delete({ where: { id } });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to delete zone:', error);
    return NextResponse.json({ error: 'Failed to delete zone' }, { status: 500 });
  }
}
