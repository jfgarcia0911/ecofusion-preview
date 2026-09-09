import { NextResponse } from 'next/server';
import { activeOrg } from '@/lib/api-access';
import { prisma } from '@/lib/prisma';

// GET - Fetch all sales inventory for user
export async function GET(request: Request) {
  try {
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;

    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status'); // Optional filter
    const productType = searchParams.get('productType'); // Optional filter

    const where: {
      organizationId: string;
      status?: string;
      productType?: string;
    } = { organizationId: ctx.organizationId };

    if (status) {
      where.status = status;
    }
    if (productType) {
      where.productType = productType;
    }

    const inventory = await prisma.salesInventory.findMany({
      where,
      include: {
        harvest: {
          include: {
            fishStock: { include: { zone: true } },
            plantCrop: { include: { zone: true } },
          },
        },
        _count: {
          select: { saleItems: true },
        },
      },
      orderBy: { addedDate: 'desc' },
    });

    return NextResponse.json(inventory);
  } catch (error) {
    console.error('Failed to fetch sales inventory:', error);
    return NextResponse.json({ error: 'Failed to fetch sales inventory' }, { status: 500 });
  }
}

// POST - Add item to sales inventory
export async function POST(request: Request) {
  try {
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;

    const data = await request.json();
    const {
      productName,
      productType,
      quantity,
      unit,
      unitPrice,
      harvestId,
      expiryDate,
    } = data;

    if (!productName || !productType || !quantity || !unit || unitPrice === undefined) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Verify harvest ownership if provided
    if (harvestId) {
      const harvest = await prisma.harvest.findUnique({ where: { id: harvestId } });
      if (!harvest || harvest.userId !== ctx.userId) {
        return NextResponse.json({ error: 'Harvest not found' }, { status: 404 });
      }
    }

    const inventoryItem = await prisma.salesInventory.create({
      data: {
        userId: ctx.userId,
        organizationId: ctx.organizationId,
        productName,
        productType,
        quantity,
        unit,
        unitPrice,
        harvestId: harvestId || null,
        expiryDate: expiryDate ? new Date(expiryDate) : null,
      },
      include: {
        harvest: true,
      },
    });

    return NextResponse.json(inventoryItem);
  } catch (error) {
    console.error('Failed to add to sales inventory:', error);
    return NextResponse.json({ error: 'Failed to add to sales inventory' }, { status: 500 });
  }
}

// PATCH - Update sales inventory item
export async function PATCH(request: Request) {
  try {
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;

    const data = await request.json();
    const { id, ...updates } = data;

    if (!id) {
      return NextResponse.json({ error: 'Missing inventory item ID' }, { status: 400 });
    }

    // Verify ownership
    const item = await prisma.salesInventory.findUnique({ where: { id } });
    if (!item || item.userId !== ctx.userId) {
      return NextResponse.json({ error: 'Inventory item not found' }, { status: 404 });
    }

    // Handle date conversion
    if (updates.expiryDate) {
      updates.expiryDate = new Date(updates.expiryDate);
    }

    const updated = await prisma.salesInventory.update({
      where: { id },
      data: updates,
      include: {
        harvest: true,
      },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error('Failed to update sales inventory:', error);
    return NextResponse.json({ error: 'Failed to update sales inventory' }, { status: 500 });
  }
}

// DELETE - Delete sales inventory item
export async function DELETE(request: Request) {
  try {
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Missing inventory item ID' }, { status: 400 });
    }

    // Verify ownership
    const item = await prisma.salesInventory.findUnique({ where: { id } });
    if (!item || item.userId !== ctx.userId) {
      return NextResponse.json({ error: 'Inventory item not found' }, { status: 404 });
    }

    await prisma.salesInventory.delete({ where: { id } });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to delete sales inventory:', error);
    return NextResponse.json({ error: 'Failed to delete sales inventory' }, { status: 500 });
  }
}
