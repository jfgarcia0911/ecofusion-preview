import { NextResponse } from 'next/server';
import { z } from 'zod';
import { activeOrg } from '@/lib/api-access';
import { prisma } from '@/lib/prisma';
import { readJson } from '@/lib/validation/request';
import { optionalInt, optionalNumber, optionalText, requiredInt } from '@/lib/validation/fields';

const logSchema = z.object({
  heightCm: optionalNumber(0, 100_000),
  healthScore: optionalInt(1, 10),
  // Losses only take plants away; a negative count would have added them.
  losses: requiredInt(0, 10_000_000).default(0),
  notes: optionalText(2000),
});

/** The crop, only if it is this business's. */
function cropInBusiness(id: string, organizationId: string) {
  return prisma.plantCrop.findFirst({ where: { id, organizationId }, select: { id: true } });
}

// GET - Growth logs for one of this business's plant crops
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;

    const { id } = await params;
    if (!(await cropInBusiness(id, ctx.organizationId))) {
      return NextResponse.json({ error: 'Plant crop not found' }, { status: 404 });
    }

    const growthLogs = await prisma.plantGrowthLog.findMany({
      where: { plantCropId: id },
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

    if (!(await cropInBusiness(id, ctx.organizationId))) {
      return NextResponse.json({ error: 'Plant crop not found' }, { status: 404 });
    }

    const result = await prisma.$transaction(async (tx) => {
      const growthLog = await tx.plantGrowthLog.create({
        data: {
          plantCropId: id,
          heightCm: input.heightCm ?? null,
          healthScore: input.healthScore ?? null,
          losses: input.losses,
          notes: input.notes ?? null,
        },
      });

      if (input.losses > 0) {
        // Read inside the transaction, so two logs at once both count.
        const crop = await tx.plantCrop.findUniqueOrThrow({ where: { id }, select: { quantity: true } });
        await tx.plantCrop.update({
          where: { id },
          data: { quantity: Math.max(0, crop.quantity - input.losses) },
        });
      }

      return growthLog;
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error('Failed to add growth log:', error);
    return NextResponse.json({ error: 'Failed to add growth log' }, { status: 500 });
  }
}
