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
  optionalText,
  recordId,
  requiredNumber,
  requiredText,
} from '@/lib/validation/fields';

const STATUSES = ['completed', 'pending', 'cancelled'] as const;

const itemSchema = z.object({
  inventoryItemId: optionalRecordId,
  harvestId: optionalRecordId,
  phaseId: optionalText(60),
  productName: requiredText(160),
  quantity: requiredNumber(0.001, 10_000_000),
  unit: optionalText(20),
  // What the seller charged, which the sale form lets them adjust. It is the
  // business's own record of its own sale, not a payment, so it is kept as
  // entered - but never negative, and to the cent.
  unitPrice: money(),
});

const createSchema = z.object({
  customerName: optionalText(160),
  customerEmail: optionalText(254),
  customerPhone: optionalText(40),
  items: z.array(itemSchema).min(1, 'At least one item is required').max(200),
  tax: money().optional(),
  discount: money().optional(),
  paymentMethod: optionalText(40),
  notes: optionalText(2000),
  crmCustomerId: optionalText(120),
});

// Only these fields; anything else in the body is dropped before Prisma.
// Amounts and items are not editable here: a sale is corrected by deleting it,
// which puts its stock back, and recording it again.
const updateSchema = z.object({
  id: recordId,
  status: z.enum(STATUSES).optional(),
  customerName: optionalText(160),
  customerEmail: optionalText(254),
  customerPhone: optionalText(40),
  paymentMethod: optionalText(40),
  notes: optionalText(2000),
});

const listQuery = z.object({
  status: z.enum(STATUSES).optional().catch(undefined),
  startDate: optionalDate.catch(undefined),
  endDate: optionalDate.catch(undefined),
});

/** Raised inside the transaction to undo it when stock has run out. */
class OutOfStock extends Error {
  constructor(readonly productName: string) {
    super('out of stock');
  }
}

const round = (value: number) => Math.round(value * 100) / 100;

// GET - This business's sales
export async function GET(request: Request) {
  try {
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;

    const query = listQuery.parse(Object.fromEntries(new URL(request.url).searchParams));

    const sales = await prisma.sale.findMany({
      where: {
        organizationId: ctx.organizationId,
        ...(query.status ? { status: query.status } : {}),
        ...(query.startDate || query.endDate
          ? {
              saleDate: {
                ...(query.startDate ? { gte: query.startDate } : {}),
                ...(query.endDate ? { lte: query.endDate } : {}),
              },
            }
          : {}),
      },
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
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;

    const body = await readJson(request, createSchema);
    if (!body.ok) return body.response;
    const input = body.data;
    const organizationId = ctx.organizationId;

    // Everything a line points at must be this business's.
    const harvestIds = [...new Set(input.items.map((i) => i.harvestId).filter((v): v is string => !!v))];
    const unitKeys = [...new Set(input.items.map((i) => i.phaseId).filter((v): v is string => !!v))];
    const [harvests, units] = await Promise.all([
      harvestIds.length
        ? prisma.harvest.count({ where: { id: { in: harvestIds }, organizationId } })
        : Promise.resolve(0),
      unitKeys.length
        ? prisma.businessUnit.count({ where: { key: { in: unitKeys }, organizationId } })
        : Promise.resolve(0),
    ]);
    if (harvests !== harvestIds.length) {
      return NextResponse.json({ error: 'Harvest not found' }, { status: 404 });
    }
    if (units !== unitKeys.length) {
      return NextResponse.json({ error: 'Business unit not found' }, { status: 404 });
    }

    // What each stock item is asked for across the whole sale. Two lines for
    // the same item are one demand on it, not two separate checks.
    const demand = new Map<string, { quantity: number; productName: string }>();
    for (const item of input.items) {
      if (!item.inventoryItemId) continue;
      const current = demand.get(item.inventoryItemId);
      demand.set(item.inventoryItemId, {
        quantity: (current?.quantity ?? 0) + item.quantity,
        productName: item.productName,
      });
    }

    if (demand.size > 0) {
      const stock = await prisma.salesInventory.findMany({
        where: { id: { in: [...demand.keys()] }, organizationId },
        select: { id: true, quantity: true },
      });
      const byId = new Map(stock.map((s) => [s.id, s]));
      for (const [itemId, want] of demand) {
        const have = byId.get(itemId);
        if (!have) {
          return NextResponse.json(
            { error: `Inventory item not found: ${want.productName}` },
            { status: 404 }
          );
        }
        if (have.quantity < want.quantity) {
          return NextResponse.json(
            {
              error: `Insufficient stock for ${want.productName}. Available: ${have.quantity}, Requested: ${want.quantity}`,
            },
            { status: 400 }
          );
        }
      }
    }

    const lines = input.items.map((item) => ({
      ...item,
      total: round(item.quantity * item.unitPrice),
    }));
    const subtotal = round(lines.reduce((sum, line) => sum + line.total, 0));
    const tax = input.tax ?? 0;
    const discount = input.discount ?? 0;
    const total = round(subtotal + tax - discount);
    if (total < 0) {
      return NextResponse.json({ error: 'The discount is larger than the sale' }, { status: 400 });
    }

    let saleId: string;
    try {
      saleId = await prisma.$transaction(
        async (tx) => {
          const sale = await tx.sale.create({
            data: {
              userId: ctx.userId,
              organizationId,
              customerName: input.customerName ?? null,
              customerEmail: input.customerEmail ?? null,
              customerPhone: input.customerPhone ?? null,
              subtotal,
              tax,
              discount,
              total,
              paymentMethod: input.paymentMethod ?? null,
              notes: input.notes ?? null,
              crmCustomerId: input.crmCustomerId ?? null,
            },
            select: { id: true },
          });

          await tx.saleItem.createMany({
            data: lines.map((line) => ({
              saleId: sale.id,
              inventoryItemId: line.inventoryItemId ?? null,
              harvestId: line.harvestId ?? null,
              phaseId: line.phaseId ?? null,
              productName: line.productName,
              quantity: line.quantity,
              unit: line.unit ?? 'unit',
              unitPrice: line.unitPrice,
              total: line.total,
            })),
          });

          // Taken off only if it is still there. The check above was a
          // courtesy; this is the one that holds when two sales race.
          for (const [itemId, want] of demand) {
            const { count } = await tx.salesInventory.updateMany({
              where: { id: itemId, organizationId, quantity: { gte: want.quantity } },
              data: { quantity: { decrement: want.quantity } },
            });
            if (count === 0) throw new OutOfStock(want.productName);
          }
          if (demand.size > 0) {
            await tx.salesInventory.updateMany({
              where: { id: { in: [...demand.keys()] }, organizationId, quantity: { lte: 0 } },
              data: { status: 'sold' },
            });
          }

          return sale.id;
        },
        { timeout: 15_000 }
      );
    } catch (error) {
      if (error instanceof OutOfStock) {
        return NextResponse.json(
          { error: `${error.productName} sold out while this sale was being saved` },
          { status: 409 }
        );
      }
      throw error;
    }

    const completeSale = await prisma.sale.findUnique({
      where: { id: saleId },
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

// PATCH - Update a sale's status and details
export async function PATCH(request: Request) {
  try {
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;

    const body = await readJson(request, updateSchema);
    if (!body.ok) return body.response;
    const { id, ...changes } = body.data;

    const existing = await prisma.sale.findFirst({
      where: { id, organizationId: ctx.organizationId },
      select: { id: true },
    });
    if (!existing) {
      return NextResponse.json({ error: 'Sale not found' }, { status: 404 });
    }

    const updated = await prisma.sale.update({
      where: { id },
      data: {
        status: changes.status,
        customerName: changes.customerName,
        customerEmail: changes.customerEmail,
        customerPhone: changes.customerPhone,
        paymentMethod: changes.paymentMethod,
        notes: changes.notes,
      },
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

// DELETE - Delete a sale and put its stock back
export async function DELETE(request: Request) {
  try {
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;
    if (!canAdminister(ctx)) return adminOnly('delete sales');

    const id = idFromQuery(request);
    if (!id) {
      return NextResponse.json({ error: 'Missing sale ID' }, { status: 400 });
    }

    const sale = await prisma.sale.findFirst({
      where: { id, organizationId: ctx.organizationId },
      select: { id: true, items: { select: { inventoryItemId: true, quantity: true } } },
    });
    if (!sale) {
      return NextResponse.json({ error: 'Sale not found' }, { status: 404 });
    }

    const restore = new Map<string, number>();
    for (const item of sale.items) {
      if (!item.inventoryItemId) continue;
      restore.set(item.inventoryItemId, (restore.get(item.inventoryItemId) ?? 0) + item.quantity);
    }

    await prisma.$transaction([
      ...[...restore].map(([itemId, quantity]) =>
        prisma.salesInventory.updateMany({
          where: { id: itemId, organizationId: ctx.organizationId },
          data: { quantity: { increment: quantity }, status: 'available' },
        })
      ),
      prisma.sale.delete({ where: { id: sale.id } }),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to delete sale:', error);
    return NextResponse.json({ error: 'Failed to delete sale' }, { status: 500 });
  }
}
