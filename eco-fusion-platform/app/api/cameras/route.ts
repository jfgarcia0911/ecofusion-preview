import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';

// GET - Fetch all cameras for user
export async function GET() {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const cameras = await prisma.camera.findMany({
      where: { userId: session.user.id },
      include: {
        zone: {
          select: { id: true, name: true, type: true },
        },
      },
      orderBy: [{ sortOrder: 'asc' }, { name: 'asc' }],
    });

    return NextResponse.json(cameras);
  } catch (error) {
    console.error('Failed to fetch cameras:', error);
    return NextResponse.json({ error: 'Failed to fetch cameras' }, { status: 500 });
  }
}

// POST - Create a new camera
export async function POST(request: Request) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const data = await request.json();
    const {
      name,
      location,
      zoneId,
      connectionType,
      rtspUrl,
      protocol,
      brand,
      model,
      isEnabled,
    } = data;

    if (!name || !rtspUrl) {
      return NextResponse.json({ error: 'Name and RTSP URL are required' }, { status: 400 });
    }

    // Validate zoneId if provided
    if (zoneId) {
      const zone = await prisma.zone.findFirst({
        where: { id: zoneId, userId: session.user.id },
      });
      if (!zone) {
        return NextResponse.json({ error: 'Zone not found' }, { status: 404 });
      }
    }

    // Get the next sort order
    const maxSortOrder = await prisma.camera.aggregate({
      where: { userId: session.user.id },
      _max: { sortOrder: true },
    });

    const camera = await prisma.camera.create({
      data: {
        userId: session.user.id,
        name,
        location: location || null,
        zoneId: zoneId || null,
        connectionType: connectionType || 'wired',
        rtspUrl,
        protocol: protocol || 'rtsp',
        brand: brand || null,
        model: model || null,
        isEnabled: isEnabled !== false,
        sortOrder: (maxSortOrder._max.sortOrder || 0) + 1,
      },
      include: {
        zone: {
          select: { id: true, name: true, type: true },
        },
      },
    });

    return NextResponse.json(camera);
  } catch (error) {
    console.error('Failed to create camera:', error);
    return NextResponse.json({ error: 'Failed to create camera' }, { status: 500 });
  }
}
