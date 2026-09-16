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
  optionalText,
  recordId,
  requiredDate,
  requiredInt,
  requiredText,
} from '@/lib/validation/fields';

const STATUSES = ['growing', 'ready', 'harvested'] as const;

const createSchema = z.object({
  zoneId: recordId,
  cropType: requiredText(120),
  variety: optionalText(120),
  quantity: requiredInt(1, 10_000_000),
  plantedDate: requiredDate,
  expectedHarvest: optionalDate,
  location: optionalText(200),
  notes: optionalText(2000),
});

// Only these fields; anything else in the body is dropped before Prisma.
const updateSchema = z.object({
  id: recordId,
  zoneId: recordId.optional(),
  cropType: requiredText(120).optional(),
  variety: optionalText(120),
  quantity: requiredInt(0, 10_000_000).optional(),
  plantedDate: requiredDate.optional(),
  expectedHarvest: optionalDate,
  status: z.enum(STATUSES).optional(),
  location: optionalText(200),
  notes: optionalText(2000),
});

function zoneInBusiness(zoneId: string, organizationId: string) {
  return prisma.zone.findFirst({ where: { id: zoneId, organizationId }, select: { id: true } });
}

// GET - This business's plant crops
export async function GET() {
  try {
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;

    const plantCrops = await prisma.plantCrop.findMany({
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

    return NextResponse.json(plantCrops);
  } catch (error) {
    console.error('Failed to fetch plant crops:', error);
    return NextResponse.json({ error: 'Failed to fetch plant crops' }, { status: 500 });
  }
}

// POST - Create new plant crop
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

    const plantCrop = await prisma.plantCrop.create({
      data: {
        userId: ctx.userId,
        organizationId: ctx.organizationId,
        zoneId: input.zoneId,
        cropType: input.cropType,
        variety: input.variety ?? null,
        quantity: input.quantity,
        plantedDate: input.plantedDate,
        expectedHarvest: input.expectedHarvest ?? null,
        location: input.location ?? null,
        notes: input.notes ?? null,
      },
      include: {
        zone: true,
      },
    });

    return NextResponse.json(plantCrop);
  } catch (error) {
    console.error('Failed to create plant crop:', error);
    return NextResponse.json({ error: 'Failed to create plant crop' }, { status: 500 });
  }
}

// PATCH - Update plant crop
export async function PATCH(request: Request) {
  try {
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;

    const body = await readJson(request, updateSchema);
    if (!body.ok) return body.response;
    const { id, ...changes } = body.data;

    const existing = await prisma.plantCrop.findFirst({
      where: { id, organizationId: ctx.organizationId },
      select: { id: true },
    });
    if (!existing) {
      return NextResponse.json({ error: 'Plant crop not found' }, { status: 404 });
    }
    if (changes.zoneId && !(await zoneInBusiness(changes.zoneId, ctx.organizationId))) {
      return NextResponse.json({ error: 'Zone not found' }, { status: 404 });
    }

    const updated = await prisma.plantCrop.update({
      where: { id },
      data: {
        zoneId: changes.zoneId,
        cropType: changes.cropType,
        variety: changes.variety,
        quantity: changes.quantity,
        plantedDate: changes.plantedDate,
        expectedHarvest: changes.expectedHarvest,
        status: changes.status,
        location: changes.location,
        notes: changes.notes,
      },
      include: {
        zone: true,
      },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error('Failed to update plant crop:', error);
    return NextResponse.json({ error: 'Failed to update plant crop' }, { status: 500 });
  }
}

// DELETE - Delete plant crop
export async function DELETE(request: Request) {
  try {
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;
    if (!canAdminister(ctx)) return adminOnly('delete crops');

    const id = idFromQuery(request);
    if (!id) {
      return NextResponse.json({ error: 'Missing plant crop ID' }, { status: 400 });
    }

    const { count } = await prisma.plantCrop.deleteMany({
      where: { id, organizationId: ctx.organizationId },
    });
    if (count === 0) {
      return NextResponse.json({ error: 'Plant crop not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to delete plant crop:', error);
    return NextResponse.json({ error: 'Failed to delete plant crop' }, { status: 500 });
  }
}
