import { NextResponse } from 'next/server';
import { getOrgContext } from '@/lib/tenancy';
import { prisma } from '@/lib/prisma';
import { resolvePhaseId, monthRange } from '@/lib/phase-revenue';


// GET - Fetch revenue data for a phase (weekly breakdown for the current month)
export async function GET(
  request: Request,
  { params }: { params: Promise<{ phaseId: string }> }
) {
  try {
    const ctx = await getOrgContext();
    if (!ctx) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { phaseId } = await params;

    // Get the current month's date range
    const now = new Date();
    const { startOfMonth, endOfMonth } = monthRange(now);

    // Get all sales for the current month
    const sales = await prisma.sale.findMany({
      where: {
        organizationId: ctx.organizationId,
        saleDate: {
          gte: startOfMonth,
          lte: endOfMonth,
        },
        status: 'completed',
      },
      include: {
        items: true,
      },
      orderBy: { saleDate: 'asc' },
    });

    // Group sales by week and filter by phase-related products
    const weeklyData: { name: string; revenue: number }[] = [];
    const weeksInMonth = Math.ceil((endOfMonth.getDate() - startOfMonth.getDate() + 1) / 7);

    for (let week = 0; week < Math.min(weeksInMonth, 5); week++) {
      const weekStart = new Date(startOfMonth);
      weekStart.setDate(startOfMonth.getDate() + week * 7);
      const weekEnd = new Date(weekStart);
      weekEnd.setDate(weekStart.getDate() + 6);

      // Filter sales in this week
      const weekSales = sales.filter(sale => {
        const saleDate = new Date(sale.saleDate);
        return saleDate >= weekStart && saleDate <= weekEnd;
      });

      // Calculate revenue for phase-related products
      let weekRevenue = 0;

      for (const sale of weekSales) {
        for (const item of sale.items) {
          if (resolvePhaseId(item) === phaseId) {
            weekRevenue += item.total;
          }
        }
      }

      weeklyData.push({
        name: `Week ${week + 1}`,
        revenue: Math.round(weekRevenue * 100) / 100,
      });
    }

    // Calculate total revenue for the month
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
