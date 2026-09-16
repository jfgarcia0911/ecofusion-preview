import { NextResponse } from 'next/server';
import { z } from 'zod';
import { activeOrg } from '@/lib/api-access';
import { canAdminister } from '@/lib/tenancy';
import { prisma } from '@/lib/prisma';
import { readJson } from '@/lib/validation/request';
import {
  adminOnly,
  idFromQuery,
  optionalInt,
  optionalNumber,
  optionalText,
  recordId,
  requiredInt,
  requiredText,
} from '@/lib/validation/fields';

const TYPES = ['fish', 'plant'] as const;

const fields = {
  species: requiredText(120),
  variety: optionalText(120),
  seedlingDays: optionalInt(0, 3650),
  growingDays: requiredInt(1, 3650),
  harvestWeight: optionalNumber(0, 1_000_000),
  optimalTempMin: optionalNumber(-50, 100),
  optimalTempMax: optionalNumber(-50, 100),
  optimalPh: optionalNumber(0, 14),
  expectedYield: optionalNumber(0, 10_000_000),
  yieldUnit: optionalText(20),
  notes: optionalText(2000),
};

const createSchema = z.object({
  type: z.enum(TYPES, 'Type must be "fish" or "plant"'),
  ...fields,
});

// Only these fields; anything else in the body is dropped before Prisma.
const updateSchema = z.object({
  id: recordId,
  type: z.enum(TYPES).optional(),
  species: fields.species.optional(),
  variety: fields.variety,
  seedlingDays: fields.seedlingDays,
  growingDays: fields.growingDays.optional(),
  harvestWeight: fields.harvestWeight,
  optimalTempMin: fields.optimalTempMin,
  optimalTempMax: fields.optimalTempMax,
  optimalPh: fields.optimalPh,
  expectedYield: fields.expectedYield,
  yieldUnit: fields.yieldUnit,
  notes: fields.notes,
});

// GET - This business's growth parameter templates
export async function GET(request: Request) {
  try {
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;

    const type = new URL(request.url).searchParams.get('type');

    const parameters = await prisma.growthParameter.findMany({
      where: {
        organizationId: ctx.organizationId,
        ...(type === 'fish' || type === 'plant' ? { type } : {}),
      },
      orderBy: [{ type: 'asc' }, { species: 'asc' }],
    });

    return NextResponse.json(parameters);
  } catch (error) {
    console.error('Failed to fetch growth parameters:', error);
    return NextResponse.json({ error: 'Failed to fetch growth parameters' }, { status: 500 });
  }
}

// POST - Create new growth parameter template
export async function POST(request: Request) {
  try {
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;

    const body = await readJson(request, createSchema);
    if (!body.ok) return body.response;
    const input = body.data;

    const parameter = await prisma.growthParameter.create({
      data: {
        userId: ctx.userId,
        organizationId: ctx.organizationId,
        type: input.type,
        species: input.species,
        variety: input.variety ?? null,
        seedlingDays: input.seedlingDays ?? null,
        growingDays: input.growingDays,
        harvestWeight: input.harvestWeight ?? null,
        optimalTempMin: input.optimalTempMin ?? null,
        optimalTempMax: input.optimalTempMax ?? null,
        optimalPh: input.optimalPh ?? null,
        expectedYield: input.expectedYield ?? null,
        yieldUnit: input.yieldUnit ?? null,
        notes: input.notes ?? null,
      },
    });

    return NextResponse.json(parameter);
  } catch (error) {
    console.error('Failed to create growth parameter:', error);
    return NextResponse.json({ error: 'Failed to create growth parameter' }, { status: 500 });
  }
}

// PATCH - Update growth parameter
export async function PATCH(request: Request) {
  try {
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;

    const body = await readJson(request, updateSchema);
    if (!body.ok) return body.response;
    const { id, ...changes } = body.data;

    const existing = await prisma.growthParameter.findFirst({
      where: { id, organizationId: ctx.organizationId },
      select: { id: true },
    });
    if (!existing) {
      return NextResponse.json({ error: 'Parameter not found' }, { status: 404 });
    }

    const updated = await prisma.growthParameter.update({
      where: { id },
      data: {
        type: changes.type,
        species: changes.species,
        variety: changes.variety,
        seedlingDays: changes.seedlingDays,
        growingDays: changes.growingDays,
        harvestWeight: changes.harvestWeight,
        optimalTempMin: changes.optimalTempMin,
        optimalTempMax: changes.optimalTempMax,
        optimalPh: changes.optimalPh,
        expectedYield: changes.expectedYield,
        yieldUnit: changes.yieldUnit,
        notes: changes.notes,
      },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error('Failed to update growth parameter:', error);
    return NextResponse.json({ error: 'Failed to update growth parameter' }, { status: 500 });
  }
}

// DELETE - Delete growth parameter
export async function DELETE(request: Request) {
  try {
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;
    if (!canAdminister(ctx)) return adminOnly('delete growing parameters');

    const id = idFromQuery(request);
    if (!id) {
      return NextResponse.json({ error: 'Missing parameter ID' }, { status: 400 });
    }

    const { count } = await prisma.growthParameter.deleteMany({
      where: { id, organizationId: ctx.organizationId },
    });
    if (count === 0) {
      return NextResponse.json({ error: 'Parameter not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to delete growth parameter:', error);
    return NextResponse.json({ error: 'Failed to delete growth parameter' }, { status: 500 });
  }
}
