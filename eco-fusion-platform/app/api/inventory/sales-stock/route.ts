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
  optionalDate,
  optionalRecordId,
  recordId,
  requiredNumber,
  requiredText,
} from '@/lib/validation/fields';

const PRODUCT_TYPES = ['fish', 'produce', 'other'] as const;
const STATUSES = ['available', 'reserved', 'sold', 'expired'] as const;

const createSchema = z.object({
  productName: requiredText(160),
  productType: z.enum(PRODUCT_TYPES),
  quantity: requiredNumber(0.001, 10_000_000),
  unit: requiredText(20),
  unitPrice: money(),
  harvestId: optionalRecordId,
  expiryDate: optionalDate,
});

// Only these fields; anything else in the body is dropped before Prisma.
const updateSchema = z.object({
  id: recordId,
  productName: requiredText(160).optional(),
  productType: z.enum(PRODUCT_TYPES).optional(),
  quantity: requiredNumber(0, 10_000_000).optional(),
  unit: requiredText(20).optional(),
  unitPrice: money().optional(),
  expiryDate: optionalDate,
  status: z.enum(STATUSES).optional(),
});

// GET - This business's sales inventory
export async function GET(request: Request) {
  try {
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;

    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const productType = searchParams.get('productType');

    const inventory = await prisma.salesInventory.findMany({
      where: {
        organizationId: ctx.organizationId,
        ...(status && (STATUSES as readonly string[]).includes(status) ? { status } : {}),
        ...(productType && (PRODUCT_TYPES as readonly string[]).includes(productType)
          ? { productType }
          : {}),
      },
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

    const body = await readJson(request, createSchema);
    if (!body.ok) return body.response;
    const input = body.data;

    if (input.harvestId) {
      const harvest = await prisma.harvest.findFirst({
        where: { id: input.harvestId, organizationId: ctx.organizationId },
        select: { id: true },
      });
      if (!harvest) {
        return NextResponse.json({ error: 'Harvest not found' }, { status: 404 });
      }
    }

    const inventoryItem = await prisma.salesInventory.create({
      data: {
        userId: ctx.userId,
        organizationId: ctx.organizationId,
        productName: input.productName,
        productType: input.productType,
        quantity: input.quantity,
        unit: input.unit,
        unitPrice: input.unitPrice,
        harvestId: input.harvestId ?? null,
        expiryDate: input.expiryDate ?? null,
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

    const body = await readJson(request, updateSchema);
    if (!body.ok) return body.response;
    const { id, ...changes } = body.data;

    const existing = await prisma.salesInventory.findFirst({
      where: { id, organizationId: ctx.organizationId },
      select: { id: true },
    });
    if (!existing) {
      return NextResponse.json({ error: 'Inventory item not found' }, { status: 404 });
    }

    const updated = await prisma.salesInventory.update({
      where: { id },
      data: {
        productName: changes.productName,
        productType: changes.productType,
        quantity: changes.quantity,
        unit: changes.unit,
        unitPrice: changes.unitPrice,
        expiryDate: changes.expiryDate,
        status: changes.status,
      },
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
    if (!canAdminister(ctx)) return adminOnly('delete stock for sale');

    const id = idFromQuery(request);
    if (!id) {
      return NextResponse.json({ error: 'Missing inventory item ID' }, { status: 400 });
    }

    const { count } = await prisma.salesInventory.deleteMany({
      where: { id, organizationId: ctx.organizationId },
    });
    if (count === 0) {
      return NextResponse.json({ error: 'Inventory item not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to delete sales inventory:', error);
    return NextResponse.json({ error: 'Failed to delete sales inventory' }, { status: 500 });
  }
}
