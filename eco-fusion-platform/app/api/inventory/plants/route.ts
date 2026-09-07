import { NextResponse } from 'next/server';
import { getOrgContext } from '@/lib/tenancy';
import { prisma } from '@/lib/prisma';

// GET - Fetch all plant crops for user
export async function GET() {
  try {
    const ctx = await getOrgContext();
    if (!ctx) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const plantCrops = await prisma.plantCrop.findMany({
      where: { organizationId: ctx.organizationId },
      include: {
        zone: true,
        growthLogs: {
          orderBy: { recordedAt: 'desc' },
          take: 5,
        },
        _count: {
          select: { harvests: true },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(plantCrops);
  } catch (error) {
    console.error('Failed to fetch plant crops:', error);
    return NextResponse.json({ error: 'Failed to fetch plant crops' }, { status: 500 });
  }
}

// POST - Create new plant crop
export async function POST(request: Request) {
  try {
    const ctx = await getOrgContext();
    if (!ctx) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const data = await request.json();
    const { zoneId, cropType, variety, quantity, plantedDate, expectedHarvest, location, notes } = data;

    if (!zoneId || !cropType || !quantity || !plantedDate) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Verify zone belongs to user
    const zone = await prisma.zone.findUnique({ where: { id: zoneId } });
    if (!zone || zone.userId !== ctx.userId) {
      return NextResponse.json({ error: 'Zone not found' }, { status: 404 });
    }

    const plantCrop = await prisma.plantCrop.create({
      data: {
        userId: ctx.userId,
        organizationId: ctx.organizationId,
        zoneId,
        cropType,
        variety: variety || null,
        quantity,
        plantedDate: new Date(plantedDate),
        expectedHarvest: expectedHarvest ? new Date(expectedHarvest) : null,
        location: location || null,
        notes: notes || null,
      },
      include: {
        zone: true,
      },
    });

    return NextResponse.json(plantCrop);
  } catch (error) {
    console.error('Failed to create plant crop:', error);
    return NextResponse.json({ error: 'Failed to create plant crop' }, { status: 500 });
  }
}

// PATCH - Update plant crop
export async function PATCH(request: Request) {
  try {
    const ctx = await getOrgContext();
    if (!ctx) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const data = await request.json();
    const { id, ...updates } = data;

    if (!id) {
      return NextResponse.json({ error: 'Missing plant crop ID' }, { status: 400 });
    }

    // Verify ownership
    const plantCrop = await prisma.plantCrop.findUnique({ where: { id } });
    if (!plantCrop || plantCrop.userId !== ctx.userId) {
      return NextResponse.json({ error: 'Plant crop not found' }, { status: 404 });
    }

    // Handle date conversions
    if (updates.plantedDate) {
      updates.plantedDate = new Date(updates.plantedDate);
    }
    if (updates.expectedHarvest) {
      updates.expectedHarvest = new Date(updates.expectedHarvest);
    }

    const updated = await prisma.plantCrop.update({
      where: { id },
      data: updates,
      include: {
        zone: true,
      },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error('Failed to update plant crop:', error);
    return NextResponse.json({ error: 'Failed to update plant crop' }, { status: 500 });
  }
}

// DELETE - Delete plant crop
export async function DELETE(request: Request) {
  try {
    const ctx = await getOrgContext();
    if (!ctx) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Missing plant crop ID' }, { status: 400 });
    }

    // Verify ownership
    const plantCrop = await prisma.plantCrop.findUnique({ where: { id } });
    if (!plantCrop || plantCrop.userId !== ctx.userId) {
      return NextResponse.json({ error: 'Plant crop not found' }, { status: 404 });
    }

    await prisma.plantCrop.delete({ where: { id } });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to delete plant crop:', error);
    return NextResponse.json({ error: 'Failed to delete plant crop' }, { status: 500 });
  }
}
