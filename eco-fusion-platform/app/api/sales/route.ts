import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';

// GET - Fetch all sales for user
export async function GET(request: Request) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');

    const where: {
      userId: string;
      status?: string;
      saleDate?: { gte?: Date; lte?: Date };
    } = { userId: session.user.id };

    if (status) {
      where.status = status;
    }

    if (startDate || endDate) {
      where.saleDate = {};
      if (startDate) {
        where.saleDate.gte = new Date(startDate);
      }
      if (endDate) {
        where.saleDate.lte = new Date(endDate);
      }
    }

    const sales = await prisma.sale.findMany({
      where,
      include: {
        items: {
          include: {
            inventoryItem: true,
            harvest: true,
          },
        },
      },
      orderBy: { saleDate: 'desc' },
    });

    return NextResponse.json(sales);
  } catch (error) {
    console.error('Failed to fetch sales:', error);
    return NextResponse.json({ error: 'Failed to fetch sales' }, { status: 500 });
  }
}

// POST - Create a new sale
export async function POST(request: Request) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const data = await request.json();
    const {
      customerName,
      customerEmail,
      customerPhone,
      items,
      tax,
      discount,
      paymentMethod,
      notes,
      crmCustomerId,
    } = data;

    if (!items || items.length === 0) {
      return NextResponse.json({ error: 'At least one item is required' }, { status: 400 });
    }

    // Calculate totals
    let subtotal = 0;
    for (const item of items) {
      if (!item.productName || !item.quantity || item.unitPrice === undefined) {
        return NextResponse.json({ error: 'Invalid item data' }, { status: 400 });
      }
      subtotal += item.quantity * item.unitPrice;
    }

    const taxAmount = tax || 0;
    const discountAmount = discount || 0;
    const total = subtotal + taxAmount - discountAmount;

    // Create sale with items in transaction
    const result = await prisma.$transaction(async (tx) => {
      const sale = await tx.sale.create({
        data: {
          userId: session.user.id,
          customerName: customerName || null,
          customerEmail: customerEmail || null,
          customerPhone: customerPhone || null,
          subtotal,
          tax: taxAmount,
          discount: discountAmount,
          total,
          paymentMethod: paymentMethod || null,
          notes: notes || null,
          crmCustomerId: crmCustomerId || null,
        },
      });

      // Create sale items and update inventory
      for (const item of items) {
        await tx.saleItem.create({
          data: {
            saleId: sale.id,
            inventoryItemId: item.inventoryItemId || null,
            harvestId: item.harvestId || null,
            productName: item.productName,
            quantity: item.quantity,
            unit: item.unit || 'unit',
            unitPrice: item.unitPrice,
            total: item.quantity * item.unitPrice,
          },
        });

        // Update inventory quantity if selling from sales inventory
        if (item.inventoryItemId) {
          const inventoryItem = await tx.salesInventory.findUnique({
            where: { id: item.inventoryItemId },
          });

          if (inventoryItem) {
            const newQuantity = Math.max(0, inventoryItem.quantity - item.quantity);
            await tx.salesInventory.update({
              where: { id: item.inventoryItemId },
              data: {
                quantity: newQuantity,
                status: newQuantity === 0 ? 'sold' : 'available',
              },
            });
          }
        }
      }

      return sale;
    });

    // Fetch the complete sale with items
    const completeSale = await prisma.sale.findUnique({
      where: { id: result.id },
      include: {
        items: {
          include: {
            inventoryItem: true,
            harvest: true,
          },
        },
      },
    });

    return NextResponse.json(completeSale);
  } catch (error) {
    console.error('Failed to create sale:', error);
    return NextResponse.json({ error: 'Failed to create sale' }, { status: 500 });
  }
}

// PATCH - Update sale status
export async function PATCH(request: Request) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const data = await request.json();
    const { id, ...updates } = data;

    if (!id) {
      return NextResponse.json({ error: 'Missing sale ID' }, { status: 400 });
    }

    // Verify ownership
    const sale = await prisma.sale.findUnique({ where: { id } });
    if (!sale || sale.userId !== session.user.id) {
      return NextResponse.json({ error: 'Sale not found' }, { status: 404 });
    }

    const updated = await prisma.sale.update({
      where: { id },
      data: updates,
      include: {
        items: true,
      },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error('Failed to update sale:', error);
    return NextResponse.json({ error: 'Failed to update sale' }, { status: 500 });
  }
}

// DELETE - Cancel/delete a sale
export async function DELETE(request: Request) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Missing sale ID' }, { status: 400 });
    }

    // Verify ownership
    const sale = await prisma.sale.findUnique({
      where: { id },
      include: { items: true },
    });

    if (!sale || sale.userId !== session.user.id) {
      return NextResponse.json({ error: 'Sale not found' }, { status: 404 });
    }

    // Restore inventory quantities
    await prisma.$transaction(async (tx) => {
      for (const item of sale.items) {
        if (item.inventoryItemId) {
          const inventoryItem = await tx.salesInventory.findUnique({
            where: { id: item.inventoryItemId },
          });

          if (inventoryItem) {
            await tx.salesInventory.update({
              where: { id: item.inventoryItemId },
              data: {
                quantity: inventoryItem.quantity + item.quantity,
                status: 'available',
              },
            });
          }
        }
      }

      await tx.sale.delete({ where: { id } });
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to delete sale:', error);
    return NextResponse.json({ error: 'Failed to delete sale' }, { status: 500 });
  }
}
