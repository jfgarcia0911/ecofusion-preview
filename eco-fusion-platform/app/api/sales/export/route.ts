import { NextResponse } from 'next/server';
import { z } from 'zod';
import { activeOrg } from '@/lib/api-access';
import { canAdminister } from '@/lib/tenancy';
import { prisma } from '@/lib/prisma';
import { readQuery } from '@/lib/validation/request';
import { adminOnly, optionalDate } from '@/lib/validation/fields';
import { csvRow } from '@/lib/csv';

/** Most sales one export carries. The newest are kept when there are more. */
const MAX_ROWS = 50_000;

const exportQuery = z
  .object({
    startDate: optionalDate,
    endDate: optionalDate,
    format: z.enum(['csv', 'json']).optional(),
  })
  .refine((q) => !q.startDate || !q.endDate || q.startDate <= q.endDate, {
    message: 'Start date must be on or before end date',
    path: ['startDate'],
  });

const HEADER = [
  'Sale ID',
  'Date',
  'Customer Name',
  'Customer Email',
  'Customer Phone',
  'Subtotal',
  'Tax',
  'Discount',
  'Total',
  'Payment Method',
  'Status',
  'Items Count',
  'Notes',
];

// GET - Export sales data as CSV
//
// Every customer's contact details are in it, so it is for the people who run
// the business rather than everyone who works in it.
export async function GET(request: Request) {
  try {
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;
    if (!canAdminister(ctx)) return adminOnly('export sales');

    const query = readQuery(request, exportQuery);
    if (!query.ok) return query.response;
    const { startDate, endDate } = query.data;
    const format = query.data.format ?? 'csv';

    const sales = await prisma.sale.findMany({
      where: {
        organizationId: ctx.organizationId,
        ...(startDate || endDate
          ? {
              saleDate: {
                ...(startDate ? { gte: startDate } : {}),
                ...(endDate ? { lte: endDate } : {}),
              },
            }
          : {}),
      },
      include: {
        items: true,
      },
      orderBy: { saleDate: 'desc' },
      take: MAX_ROWS,
    });

    if (format === 'json') {
      return NextResponse.json(sales);
    }

    const csvRows = [csvRow(HEADER)];
    for (const sale of sales) {
      csvRows.push(
        csvRow([
          sale.id,
          sale.saleDate.toISOString(),
          sale.customerName,
          sale.customerEmail,
          sale.customerPhone,
          sale.subtotal.toFixed(2),
          sale.tax.toFixed(2),
          sale.discount.toFixed(2),
          sale.total.toFixed(2),
          sale.paymentMethod,
          sale.status,
          sale.items.length,
          sale.notes,
        ])
      );
    }

    const csv = csvRows.join('\r\n');

    return new NextResponse(csv, {
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': `attachment; filename="sales-export-${new Date().toISOString().split('T')[0]}.csv"`,
        'Cache-Control': 'no-store',
      },
    });
  } catch (error) {
    console.error('Failed to export sales:', error);
    return NextResponse.json({ error: 'Failed to export sales' }, { status: 500 });
  }
}
