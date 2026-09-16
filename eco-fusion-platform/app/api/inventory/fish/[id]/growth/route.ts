import { NextResponse } from 'next/server';
import { z } from 'zod';
import { activeOrg } from '@/lib/api-access';
import { prisma } from '@/lib/prisma';
import { readJson } from '@/lib/validation/request';
import { optionalNumber, optionalText, requiredInt, requiredNumber } from '@/lib/validation/fields';

const logSchema = z.object({
  avgWeight: requiredNumber(0.0001, 1_000_000),
  // Losses only take fish away; a negative count would have added them.
  mortality: requiredInt(0, 10_000_000).default(0),
  feedUsed: optionalNumber(0, 10_000_000),
  notes: optionalText(2000),
});

/** The stock, only if it is this business's. */
function stockInBusiness(id: string, organizationId: string) {
  return prisma.fishStock.findFirst({ where: { id, organizationId }, select: { id: true } });
}

// GET - Growth logs for one of this business's fish stocks
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;

    const { id } = await params;
    if (!(await stockInBusiness(id, ctx.organizationId))) {
      return NextResponse.json({ error: 'Fish stock not found' }, { status: 404 });
    }

    const growthLogs = await prisma.fishGrowthLog.findMany({
      where: { fishStockId: id },
      orderBy: { recordedAt: 'desc' },
      take: 500,
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
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;

    const { id } = await params;
    const body = await readJson(request, logSchema);
    if (!body.ok) return body.response;
    const input = body.data;

    if (!(await stockInBusiness(id, ctx.organizationId))) {
      return NextResponse.json({ error: 'Fish stock not found' }, { status: 404 });
    }

    const result = await prisma.$transaction(async (tx) => {
      const growthLog = await tx.fishGrowthLog.create({
        data: {
          fishStockId: id,
          avgWeight: input.avgWeight,
          mortality: input.mortality,
          feedUsed: input.feedUsed ?? null,
          notes: input.notes ?? null,
        },
      });

      // Read inside the transaction, so two logs at once both count.
      const stock = await tx.fishStock.findUniqueOrThrow({ where: { id }, select: { quantity: true } });
      await tx.fishStock.update({
        where: { id },
        data: {
          avgWeight: input.avgWeight,
          quantity: Math.max(0, stock.quantity - input.mortality),
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
