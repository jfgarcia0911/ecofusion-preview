import { NextResponse } from 'next/server';
import { getOrgContext } from '@/lib/tenancy';
import { prisma } from '@/lib/prisma';

// GET - Fetch growth logs for a fish stock
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

    // Verify ownership
    const fishStock = await prisma.fishStock.findUnique({ where: { id } });
    if (!fishStock || fishStock.userId !== ctx.userId) {
      return NextResponse.json({ error: 'Fish stock not found' }, { status: 404 });
    }

    const growthLogs = await prisma.fishGrowthLog.findMany({
      where: { fishStockId: id },
      orderBy: { recordedAt: 'desc' },
    });

    return NextResponse.json(growthLogs);
  } catch (error) {
    console.error('Failed to fetch growth logs:', error);
    return NextResponse.json({ error: 'Failed to fetch growth logs' }, { status: 500 });
  }
}

// POST - Add growth log entry
export async function POST(
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
    const { avgWeight, mortality, feedUsed, notes } = data;

    if (!avgWeight) {
      return NextResponse.json({ error: 'Average weight is required' }, { status: 400 });
    }

    // Verify ownership
    const fishStock = await prisma.fishStock.findUnique({ where: { id } });
    if (!fishStock || fishStock.userId !== ctx.userId) {
      return NextResponse.json({ error: 'Fish stock not found' }, { status: 404 });
    }

    // Create growth log and update fish stock in transaction
    const result = await prisma.$transaction(async (tx) => {
      const growthLog = await tx.fishGrowthLog.create({
        data: {
          fishStockId: id,
          avgWeight,
          mortality: mortality || 0,
          feedUsed: feedUsed || null,
          notes: notes || null,
        },
      });

      // Update fish stock with latest weight and reduce quantity by mortality
      const newQuantity = Math.max(0, fishStock.quantity - (mortality || 0));
      await tx.fishStock.update({
        where: { id },
        data: {
          avgWeight,
          quantity: newQuantity,
        },
      });

      return growthLog;
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error('Failed to add growth log:', error);
    return NextResponse.json({ error: 'Failed to add growth log' }, { status: 500 });
  }
}
