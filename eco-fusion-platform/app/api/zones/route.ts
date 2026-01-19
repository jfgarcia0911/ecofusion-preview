import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';

// GET - Fetch all zones for user with latest sensor readings
export async function GET() {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const zones = await prisma.zone.findMany({
      where: { userId: session.user.id },
      orderBy: { name: 'asc' },
      include: {
        metrics: {
          orderBy: { timestamp: 'desc' },
          take: 1,
        },
        alertThresholds: true,
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
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const data = await request.json();
    const { name, type } = data;

    if (!name || !type) {
      return NextResponse.json({ error: 'Name and type are required' }, { status: 400 });
    }

    const zone = await prisma.zone.create({
      data: {
        userId: session.user.id,
        name,
        type,
      },
    });

    return NextResponse.json(zone);
  } catch (error) {
    console.error('Failed to create zone:', error);
    return NextResponse.json({ error: 'Failed to create zone' }, { status: 500 });
  }
}
