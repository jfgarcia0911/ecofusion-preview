import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';

// Map phase IDs to product types for revenue calculation
const PHASE_PRODUCT_MAPPING: Record<string, string[]> = {
  'aquaculture': ['fish', 'tilapia', 'catfish', 'seafood'],
  'plant-production': ['plants', 'vegetables', 'herbs', 'lettuce', 'greens', 'produce'],
  'methane-gas': ['energy', 'gas', 'methane'],
  'fertilizer': ['fertilizer', 'compost', 'organic'],
  'training-center': ['training', 'event', 'education', 'workshop'],
  'restaurant': ['food', 'meal', 'restaurant', 'dining'],
  'solar-energy': ['solar', 'energy', 'power'],
};

// GET - Fetch revenue data for a phase (weekly breakdown for the current month)
export async function GET(
  request: Request,
  { params }: { params: Promise<{ phaseId: string }> }
) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { phaseId } = await params;

    // Get the current month's date range
    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);

    // Get all sales for the current month
    const sales = await prisma.sale.findMany({
      where: {
        userId: session.user.id,
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

    // Get the product types for this phase
    const phaseProductTypes = PHASE_PRODUCT_MAPPING[phaseId] || [];

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
          // Check if product name matches phase product types
          const productNameLower = item.productName.toLowerCase();
          const isPhaseProduct = phaseProductTypes.length === 0 || // If no mapping, include all
            phaseProductTypes.some(type => productNameLower.includes(type));

          if (isPhaseProduct) {
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
