import { NextResponse } from 'next/server';
import { activeOrg } from '@/lib/api-access';
import { prisma } from '@/lib/prisma';

// GET - What the Sales dashboard shows, worked out in the database.
//
// The page used to download every sale with every line and add them up in the
// browser - fine for eleven sales, and a page that slows with every sale ever
// made after that. Totals are aggregates, the unit breakdown is grouped by
// product and unit (the only two things it reads), and only ten sales come
// back in full.
export async function GET() {
    try {
        const { ctx, refusal } = await activeOrg();
        if (refusal) return refusal;

        const organizationId = ctx.organizationId;
        const completed = { organizationId, status: 'completed' };
        // Today as the page counted it: the UTC date.
        const startOfToday = new Date(new Date().toISOString().slice(0, 10) + 'T00:00:00.000Z');

        const [all, today, recent, lines] = await Promise.all([
            prisma.sale.aggregate({ where: completed, _sum: { total: true }, _count: true }),
            prisma.sale.aggregate({
                where: { ...completed, saleDate: { gte: startOfToday } },
                _sum: { total: true },
                _count: true,
            }),
            prisma.sale.findMany({
                where: { organizationId },
                include: { items: true },
                orderBy: { saleDate: 'desc' },
                take: 10,
            }),
            prisma.saleItem.groupBy({
                by: ['productName', 'phaseId'],
                where: { sale: completed },
                _sum: { total: true },
            }),
        ]);

        const totalRevenue = all._sum.total ?? 0;
        return NextResponse.json({
            stats: {
                totalSales: all._count,
                totalRevenue,
                avgSaleValue: all._count > 0 ? totalRevenue / all._count : 0,
                todaySales: today._count,
                todayRevenue: today._sum.total ?? 0,
            },
            recentSales: recent,
            revenueLines: lines.map((line) => ({
                productName: line.productName,
                phaseId: line.phaseId,
                total: line._sum.total ?? 0,
            })),
        });
    } catch (error) {
        console.error('Failed to summarise sales:', error);
        return NextResponse.json({ error: 'Failed to load sales' }, { status: 500 });
    }
}
