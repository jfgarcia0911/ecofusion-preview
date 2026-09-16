import { NextResponse } from 'next/server';
import { z } from 'zod';
import { activeOrg } from '@/lib/api-access';
import { canAdminister } from '@/lib/tenancy';
import { prisma } from '@/lib/prisma';
import { readJson } from '@/lib/validation/request';
import {
  adminOnly,
  idFromQuery,
  money,
  optionalRecordId,
  optionalText,
  recordId,
  requiredDate,
  requiredNumber,
  requiredText,
} from '@/lib/validation/fields';

const TYPES = ['fish', 'plant'] as const;
const DESTINATIONS = ['inventory', 'sale', 'waste'] as const;

const createSchema = z.object({
  type: z.enum(TYPES, 'Type must be "fish" or "plant"'),
  fishStockId: optionalRecordId,
  plantCropId: optionalRecordId,
  quantity: requiredNumber(0.001, 10_000_000),
  unit: requiredText(20),
  quality: optionalText(20),
  destination: z.enum(DESTINATIONS).default('inventory'),
  notes: optionalText(2000),
  addToSalesInventory: z.boolean().default(false),
  unitPrice: money().optional(),
});

// Only these fields; anything else in the body is dropped before Prisma.
const updateSchema = z.object({
  id: recordId,
  harvestDate: requiredDate.optional(),
  quantity: requiredNumber(0.001, 10_000_000).optional(),
  unit: requiredText(20).optional(),
  quality: optionalText(20),
  destination: z.enum(DESTINATIONS).optional(),
  notes: optionalText(2000),
});

// GET - This business's harvests
export async function GET(request: Request) {
  try {
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;

    const type = new URL(request.url).searchParams.get('type');

    const harvests = await prisma.harvest.findMany({
      where: {
        organizationId: ctx.organizationId,
        ...(type === 'fish' || type === 'plant' ? { type } : {}),
      },
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

    const body = await readJson(request, createSchema);
    if (!body.ok) return body.response;
    const input = body.data;

    const fishStockId = input.type === 'fish' ? input.fishStockId ?? null : null;
    const plantCropId = input.type === 'plant' ? input.plantCropId ?? null : null;

    // The batch it came from must be this business's.
    if (fishStockId) {
      const source = await prisma.fishStock.findFirst({
        where: { id: fishStockId, organizationId: ctx.organizationId },
        select: { id: true },
      });
      if (!source) return NextResponse.json({ error: 'Fish stock not found' }, { status: 404 });
    }
    if (plantCropId) {
      const source = await prisma.plantCrop.findFirst({
        where: { id: plantCropId, organizationId: ctx.organizationId },
        select: { id: true },
      });
      if (!source) return NextResponse.json({ error: 'Plant crop not found' }, { status: 404 });
    }

    const result = await prisma.$transaction(async (tx) => {
      const harvest = await tx.harvest.create({
        data: {
          userId: ctx.userId,
          organizationId: ctx.organizationId,
          type: input.type,
          fishStockId,
          plantCropId,
          quantity: input.quantity,
          unit: input.unit,
          quality: input.quality ?? null,
          destination: input.destination,
          notes: input.notes ?? null,
        },
        include: {
          fishStock: { include: { zone: true } },
          plantCrop: { include: { zone: true } },
        },
      });

      if (fishStockId) {
        await tx.fishStock.update({ where: { id: fishStockId }, data: { status: 'harvested' } });
      }
      if (plantCropId) {
        await tx.plantCrop.update({ where: { id: plantCropId }, data: { status: 'harvested' } });
      }

      if (input.addToSalesInventory && input.destination === 'inventory') {
        const productName =
          input.type === 'fish'
            ? harvest.fishStock?.species || 'Fish'
            : harvest.plantCrop?.cropType || 'Produce';

        await tx.salesInventory.create({
          data: {
            userId: ctx.userId,
            organizationId: ctx.organizationId,
            productName,
            productType: input.type === 'fish' ? 'fish' : 'produce',
            quantity: input.quantity,
            unit: input.unit,
            unitPrice: input.unitPrice ?? 0,
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

    const body = await readJson(request, updateSchema);
    if (!body.ok) return body.response;
    const { id, ...changes } = body.data;

    const existing = await prisma.harvest.findFirst({
      where: { id, organizationId: ctx.organizationId },
      select: { id: true },
    });
    if (!existing) {
      return NextResponse.json({ error: 'Harvest not found' }, { status: 404 });
    }

    const updated = await prisma.harvest.update({
      where: { id },
      data: {
        harvestDate: changes.harvestDate,
        quantity: changes.quantity,
        unit: changes.unit,
        quality: changes.quality,
        destination: changes.destination,
        notes: changes.notes,
      },
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
    if (!canAdminister(ctx)) return adminOnly('delete harvests');

    const id = idFromQuery(request);
    if (!id) {
      return NextResponse.json({ error: 'Missing harvest ID' }, { status: 400 });
    }

    const { count } = await prisma.harvest.deleteMany({
      where: { id, organizationId: ctx.organizationId },
    });
    if (count === 0) {
      return NextResponse.json({ error: 'Harvest not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to delete harvest:', error);
    return NextResponse.json({ error: 'Failed to delete harvest' }, { status: 500 });
  }
}
