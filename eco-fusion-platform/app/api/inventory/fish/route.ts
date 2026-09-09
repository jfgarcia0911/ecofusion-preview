import { NextResponse } from 'next/server';
import { activeOrg } from '@/lib/api-access';
import { prisma } from '@/lib/prisma';

// GET - Fetch all fish stock for user
export async function GET() {
  try {
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;

    const fishStock = await prisma.fishStock.findMany({
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

    return NextResponse.json(fishStock);
  } catch (error) {
    console.error('Failed to fetch fish stock:', error);
    return NextResponse.json({ error: 'Failed to fetch fish stock' }, { status: 500 });
  }
}

// POST - Create new fish stock
export async function POST(request: Request) {
  try {
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;

    const data = await request.json();
    const { zoneId, species, quantity, avgWeight, ageWeeks, expectedHarvest, notes } = data;

    if (!zoneId || !species || !quantity) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Verify zone belongs to user
    const zone = await prisma.zone.findUnique({ where: { id: zoneId } });
    if (!zone || zone.userId !== ctx.userId) {
      return NextResponse.json({ error: 'Zone not found' }, { status: 404 });
    }

    const fishStock = await prisma.fishStock.create({
      data: {
        userId: ctx.userId,
        organizationId: ctx.organizationId,
        zoneId,
        species,
        quantity,
        avgWeight: avgWeight || null,
        ageWeeks: ageWeeks || null,
        expectedHarvest: expectedHarvest ? new Date(expectedHarvest) : null,
        notes: notes || null,
      },
      include: {
        zone: true,
      },
    });

    return NextResponse.json(fishStock);
  } catch (error) {
    console.error('Failed to create fish stock:', error);
    return NextResponse.json({ error: 'Failed to create fish stock' }, { status: 500 });
  }
}

// PATCH - Update fish stock
export async function PATCH(request: Request) {
  try {
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;

    const data = await request.json();
    const { id, ...updates } = data;

    if (!id) {
      return NextResponse.json({ error: 'Missing fish stock ID' }, { status: 400 });
    }

    // Verify ownership
    const fishStock = await prisma.fishStock.findUnique({ where: { id } });
    if (!fishStock || fishStock.userId !== ctx.userId) {
      return NextResponse.json({ error: 'Fish stock not found' }, { status: 404 });
    }

    // Handle date conversion
    if (updates.expectedHarvest) {
      updates.expectedHarvest = new Date(updates.expectedHarvest);
    }

    const updated = await prisma.fishStock.update({
      where: { id },
      data: updates,
      include: {
        zone: true,
      },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error('Failed to update fish stock:', error);
    return NextResponse.json({ error: 'Failed to update fish stock' }, { status: 500 });
  }
}

// DELETE - Delete fish stock
export async function DELETE(request: Request) {
  try {
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Missing fish stock ID' }, { status: 400 });
    }

    // Verify ownership
    const fishStock = await prisma.fishStock.findUnique({ where: { id } });
    if (!fishStock || fishStock.userId !== ctx.userId) {
      return NextResponse.json({ error: 'Fish stock not found' }, { status: 404 });
    }

    await prisma.fishStock.delete({ where: { id } });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to delete fish stock:', error);
    return NextResponse.json({ error: 'Failed to delete fish stock' }, { status: 500 });
  }
}
