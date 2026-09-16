import { NextResponse } from 'next/server';
import { z } from 'zod';
import { activeOrg } from '@/lib/api-access';
import { canAdminister } from '@/lib/tenancy';
import { prisma } from '@/lib/prisma';
import { readJson } from '@/lib/validation/request';
import {
  adminOnly,
  idFromQuery,
  optionalDate,
  optionalInt,
  optionalNumber,
  optionalText,
  recordId,
  requiredInt,
  requiredText,
} from '@/lib/validation/fields';

const STATUSES = ['growing', 'ready', 'harvested'] as const;

const createSchema = z.object({
  zoneId: recordId,
  species: requiredText(120),
  quantity: requiredInt(1, 10_000_000),
  avgWeight: optionalNumber(0, 1_000_000),
  ageWeeks: optionalInt(0, 5_000),
  expectedHarvest: optionalDate,
  notes: optionalText(2000),
});

// Every field optional, and only these: anything else in the body is dropped
// before it can reach Prisma.
const updateSchema = z.object({
  id: recordId,
  zoneId: recordId.optional(),
  species: requiredText(120).optional(),
  quantity: requiredInt(0, 10_000_000).optional(),
  avgWeight: optionalNumber(0, 1_000_000),
  ageWeeks: optionalInt(0, 5_000),
  expectedHarvest: optionalDate,
  status: z.enum(STATUSES).optional(),
  notes: optionalText(2000),
});

/** A zone, only if it is this business's. */
function zoneInBusiness(zoneId: string, organizationId: string) {
  return prisma.zone.findFirst({ where: { id: zoneId, organizationId }, select: { id: true } });
}

// GET - This business's fish stock
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

    const body = await readJson(request, createSchema);
    if (!body.ok) return body.response;
    const input = body.data;

    if (!(await zoneInBusiness(input.zoneId, ctx.organizationId))) {
      return NextResponse.json({ error: 'Zone not found' }, { status: 404 });
    }

    const fishStock = await prisma.fishStock.create({
      data: {
        userId: ctx.userId,
        organizationId: ctx.organizationId,
        zoneId: input.zoneId,
        species: input.species,
        quantity: input.quantity,
        avgWeight: input.avgWeight ?? null,
        ageWeeks: input.ageWeeks ?? null,
        expectedHarvest: input.expectedHarvest ?? null,
        notes: input.notes ?? null,
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

    const body = await readJson(request, updateSchema);
    if (!body.ok) return body.response;
    const { id, ...changes } = body.data;

    // The business's record, whoever entered it.
    const existing = await prisma.fishStock.findFirst({
      where: { id, organizationId: ctx.organizationId },
      select: { id: true },
    });
    if (!existing) {
      return NextResponse.json({ error: 'Fish stock not found' }, { status: 404 });
    }
    if (changes.zoneId && !(await zoneInBusiness(changes.zoneId, ctx.organizationId))) {
      return NextResponse.json({ error: 'Zone not found' }, { status: 404 });
    }

    const updated = await prisma.fishStock.update({
      where: { id },
      data: {
        zoneId: changes.zoneId,
        species: changes.species,
        quantity: changes.quantity,
        avgWeight: changes.avgWeight,
        ageWeeks: changes.ageWeeks,
        expectedHarvest: changes.expectedHarvest,
        status: changes.status,
        notes: changes.notes,
      },
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
    if (!canAdminister(ctx)) return adminOnly('delete stock');

    const id = idFromQuery(request);
    if (!id) {
      return NextResponse.json({ error: 'Missing fish stock ID' }, { status: 400 });
    }

    const { count } = await prisma.fishStock.deleteMany({
      where: { id, organizationId: ctx.organizationId },
    });
    if (count === 0) {
      return NextResponse.json({ error: 'Fish stock not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to delete fish stock:', error);
    return NextResponse.json({ error: 'Failed to delete fish stock' }, { status: 500 });
  }
}
