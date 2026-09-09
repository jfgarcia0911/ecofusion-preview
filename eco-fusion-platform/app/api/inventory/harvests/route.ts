import { NextResponse } from 'next/server';
import { activeOrg } from '@/lib/api-access';
import { prisma } from '@/lib/prisma';

// GET - Fetch all harvests for user
export async function GET(request: Request) {
  try {
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;

    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type'); // Optional filter by "fish" or "plant"

    const where: { organizationId: string; type?: string } = { organizationId: ctx.organizationId };
    if (type) {
      where.type = type;
    }

    const harvests = await prisma.harvest.findMany({
      where,
      include: {
        fishStock: {
          include: { zone: true },
        },
        plantCrop: {
          include: { zone: true },
        },
        _count: {
          select: { saleItems: true, salesInventory: true },
        },
      },
      orderBy: { harvestDate: 'desc' },
    });

    return NextResponse.json(harvests);
  } catch (error) {
    console.error('Failed to fetch harvests:', error);
    return NextResponse.json({ error: 'Failed to fetch harvests' }, { status: 500 });
  }
}

// POST - Record a harvest
export async function POST(request: Request) {
  try {
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;

    const data = await request.json();
    const {
      type,
      fishStockId,
      plantCropId,
      quantity,
      unit,
      quality,
      destination,
      notes,
      addToSalesInventory,
      unitPrice,
    } = data;

    if (!type || !quantity || !unit) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    if (!['fish', 'plant'].includes(type)) {
      return NextResponse.json({ error: 'Type must be "fish" or "plant"' }, { status: 400 });
    }

    // Verify ownership of source stock
    if (type === 'fish' && fishStockId) {
      const fishStock = await prisma.fishStock.findUnique({ where: { id: fishStockId } });
      if (!fishStock || fishStock.userId !== ctx.userId) {
        return NextResponse.json({ error: 'Fish stock not found' }, { status: 404 });
      }
    }

    if (type === 'plant' && plantCropId) {
      const plantCrop = await prisma.plantCrop.findUnique({ where: { id: plantCropId } });
      if (!plantCrop || plantCrop.userId !== ctx.userId) {
        return NextResponse.json({ error: 'Plant crop not found' }, { status: 404 });
      }
    }

    // Create harvest and optionally add to sales inventory
    const result = await prisma.$transaction(async (tx) => {
      const harvest = await tx.harvest.create({
        data: {
          userId: ctx.userId,
        organizationId: ctx.organizationId,
          type,
          fishStockId: type === 'fish' ? fishStockId : null,
          plantCropId: type === 'plant' ? plantCropId : null,
          quantity,
          unit,
          quality: quality || null,
          destination: destination || 'inventory',
          notes: notes || null,
        },
        include: {
          fishStock: { include: { zone: true } },
          plantCrop: { include: { zone: true } },
        },
      });

      // Update source stock status if fully harvested
      if (type === 'fish' && fishStockId) {
        await tx.fishStock.update({
          where: { id: fishStockId },
          data: { status: 'harvested' },
        });
      }
      if (type === 'plant' && plantCropId) {
        await tx.plantCrop.update({
          where: { id: plantCropId },
          data: { status: 'harvested' },
        });
      }

      // Add to sales inventory if requested
      if (addToSalesInventory && destination === 'inventory') {
        const productName =
          type === 'fish'
            ? harvest.fishStock?.species || 'Fish'
            : harvest.plantCrop?.cropType || 'Produce';

        await tx.salesInventory.create({
          data: {
            userId: ctx.userId,
        organizationId: ctx.organizationId,
            productName,
            productType: type === 'fish' ? 'fish' : 'produce',
            quantity,
            unit,
            unitPrice: unitPrice || 0,
            harvestId: harvest.id,
          },
        });
      }

      return harvest;
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error('Failed to record harvest:', error);
    return NextResponse.json({ error: 'Failed to record harvest' }, { status: 500 });
  }
}

// PATCH - Update harvest
export async function PATCH(request: Request) {
  try {
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;

    const data = await request.json();
    const { id, ...updates } = data;

    if (!id) {
      return NextResponse.json({ error: 'Missing harvest ID' }, { status: 400 });
    }

    // Verify ownership
    const harvest = await prisma.harvest.findUnique({ where: { id } });
    if (!harvest || harvest.userId !== ctx.userId) {
      return NextResponse.json({ error: 'Harvest not found' }, { status: 404 });
    }

    const updated = await prisma.harvest.update({
      where: { id },
      data: updates,
      include: {
        fishStock: { include: { zone: true } },
        plantCrop: { include: { zone: true } },
      },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error('Failed to update harvest:', error);
    return NextResponse.json({ error: 'Failed to update harvest' }, { status: 500 });
  }
}

// DELETE - Delete harvest
export async function DELETE(request: Request) {
  try {
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Missing harvest ID' }, { status: 400 });
    }

    // Verify ownership
    const harvest = await prisma.harvest.findUnique({ where: { id } });
    if (!harvest || harvest.userId !== ctx.userId) {
      return NextResponse.json({ error: 'Harvest not found' }, { status: 404 });
    }

    await prisma.harvest.delete({ where: { id } });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to delete harvest:', error);
    return NextResponse.json({ error: 'Failed to delete harvest' }, { status: 500 });
  }
}
