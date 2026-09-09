import { NextResponse } from 'next/server';
import { activeOrg } from '@/lib/api-access';
import { prisma } from '@/lib/prisma';

// GET - Export sales data as CSV
export async function GET(request: Request) {
  try {
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;

    const { searchParams } = new URL(request.url);
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');
    const format = searchParams.get('format') || 'csv';

    const where: {
      organizationId: string;
      saleDate?: { gte?: Date; lte?: Date };
    } = { organizationId: ctx.organizationId };

    if (startDate || endDate) {
      where.saleDate = {};
      if (startDate) {
        where.saleDate.gte = new Date(startDate);
      }
      if (endDate) {
        where.saleDate.lte = new Date(endDate);
      }
    }

    const sales = await prisma.sale.findMany({
      where,
      include: {
        items: true,
      },
      orderBy: { saleDate: 'desc' },
    });

    if (format === 'json') {
      return NextResponse.json(sales);
    }

    // Generate CSV
    const csvRows = [
      [
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
      ].join(','),
    ];

    for (const sale of sales) {
      const row = [
        sale.id,
        sale.saleDate.toISOString(),
        `"${(sale.customerName || '').replace(/"/g, '""')}"`,
        `"${(sale.customerEmail || '').replace(/"/g, '""')}"`,
        `"${(sale.customerPhone || '').replace(/"/g, '""')}"`,
        sale.subtotal.toFixed(2),
        sale.tax.toFixed(2),
        sale.discount.toFixed(2),
        sale.total.toFixed(2),
        sale.paymentMethod || '',
        sale.status,
        sale.items.length.toString(),
        `"${(sale.notes || '').replace(/"/g, '""')}"`,
      ].join(',');
      csvRows.push(row);
    }

    const csv = csvRows.join('\n');

    return new NextResponse(csv, {
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': `attachment; filename="sales-export-${new Date().toISOString().split('T')[0]}.csv"`,
      },
    });
  } catch (error) {
    console.error('Failed to export sales:', error);
    return NextResponse.json({ error: 'Failed to export sales' }, { status: 500 });
  }
}
