import { NextResponse } from 'next/server';
import { activeOrg } from '@/lib/api-access';
import { prisma } from '@/lib/prisma';
import { resolvePhaseId, monthRange } from '@/lib/phase-revenue';

/** Most sales one month's chart reads. Far above any real month. */
const MAX_SALES = 20_000;

// GET - Fetch revenue data for a phase (weekly breakdown for the current month)
export async function GET(
  request: Request,
  { params }: { params: Promise<{ phaseId: string }> }
) {
  try {
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;

    const { phaseId } = await params;

    // Get the current month's date range
    const now = new Date();
    const { startOfMonth, endOfMonth } = monthRange(now);

    const [units, sales] = await Promise.all([
      // The business's own units decide which product belongs where, in the
      // order the business keeps them, rather than the platform defaults.
      prisma.businessUnit.findMany({
        where: { organizationId: ctx.organizationId },
        orderBy: { sortOrder: 'asc' },
        select: { key: true, keywords: true, enabled: true },
      }),
      prisma.sale.findMany({
        where: {
          organizationId: ctx.organizationId,
          saleDate: {
            gte: startOfMonth,
            lte: endOfMonth,
          },
          status: 'completed',
        },
        select: {
          saleDate: true,
          items: { select: { productName: true, total: true, phaseId: true } },
        },
        orderBy: { saleDate: 'asc' },
        take: MAX_SALES,
      }),
    ]);

    if (!units.some((unit) => unit.key === phaseId)) {
      return NextResponse.json({ error: 'Business unit not found' }, { status: 404 });
    }
    // Keywords are matched against live units only, as the overview does, so
    // the two agree on where an untagged line belongs.
    const keywordTable = units
      .filter((unit) => unit.enabled)
      .map((unit) => ({ key: unit.key, keywords: unit.keywords }));

    // Group sales by week and filter by phase-related products
    const weeklyData: { name: string; revenue: number }[] = [];
    const weeksInMonth = Math.ceil((endOfMonth.getDate() - startOfMonth.getDate() + 1) / 7);

    for (let week = 0; week < Math.min(weeksInMonth, 5); week++) {
      const weekStart = new Date(startOfMonth);
      weekStart.setDate(startOfMonth.getDate() + week * 7);
      const weekEnd = new Date(weekStart);
      weekEnd.setDate(weekStart.getDate() + 6);

      const weekSales = sales.filter(sale => {
        const saleDate = new Date(sale.saleDate);
        return saleDate >= weekStart && saleDate <= weekEnd;
      });

      let weekRevenue = 0;
      for (const sale of weekSales) {
        for (const item of sale.items) {
          if (resolvePhaseId(item, keywordTable) === phaseId) {
            weekRevenue += item.total;
          }
        }
      }

      weeklyData.push({
        name: `Week ${week + 1}`,
        revenue: Math.round(weekRevenue * 100) / 100,
      });
    }

    const totalRevenue = weeklyData.reduce((sum, week) => sum + week.revenue, 0);

    return NextResponse.json({
      phaseId,
      weeklyData,
      totalRevenue: Math.round(totalRevenue * 100) / 100,
      month: now.toLocaleString('default', { month: 'long', year: 'numeric' }),
    });
  } catch (error) {
    console.error('Failed to fetch phase revenue:', error);
    return NextResponse.json({ error: 'Failed to fetch phase revenue' }, { status: 500 });
  }
}
