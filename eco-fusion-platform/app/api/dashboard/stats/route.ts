import { NextResponse } from 'next/server';
import { activeOrg } from '@/lib/api-access';
import { prisma } from '@/lib/prisma';

// GET - Fetch aggregated dashboard statistics
//
// Every figure is the business's, not the reader's. These used to be scoped
// by userId, so a manager saw only what they had entered themselves, EcoFusion
// staff inside a business saw zeros, and somebody in two businesses saw both
// added together. lib/tenancy says it plainly: userId records who entered a
// row, and must never be what a read is scoped by.
//
// All asked at once. The ten questions below depend on nothing but the dates,
// and asked one after another each waited a full round trip to a database on
// the other side of the Pacific: about four seconds measured, against about
// one when sent together.
export async function GET() {
  try {
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;

    const organizationId = ctx.organizationId;
    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const startOfLastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    const endOfLastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    const sixMonthsAgo = new Date(now.getFullYear(), now.getMonth() - 5, 1);

    const [
      currentMonthSales,
      lastMonthSales,
      totalRevenue,
      salesByMonth,
      activeZones,
      totalZones,
      currentMonthHarvests,
      lastMonthHarvests,
      activeAlerts,
      latestReadings,
    ] = await Promise.all([
      // This month's sales
      prisma.sale.aggregate({
        where: { organizationId, saleDate: { gte: startOfMonth }, status: 'completed' },
        _sum: { total: true },
        _count: true,
      }),
      // Last month's, for comparison
      prisma.sale.aggregate({
        where: {
          organizationId,
          saleDate: { gte: startOfLastMonth, lte: endOfLastMonth },
          status: 'completed',
        },
        _sum: { total: true },
      }),
      // All time
      prisma.sale.aggregate({
        where: { organizationId, status: 'completed' },
        _sum: { total: true },
      }),
      // The last six months, for the chart
      prisma.sale.groupBy({
        by: ['saleDate'],
        where: { organizationId, saleDate: { gte: sixMonthsAgo }, status: 'completed' },
        _sum: { total: true },
      }),
      prisma.zone.count({ where: { organizationId, status: 'active' } }),
      prisma.zone.count({ where: { organizationId } }),
      // Harvests, for the yield figure
      prisma.harvest.aggregate({
        where: { organizationId, harvestDate: { gte: startOfMonth } },
        _sum: { quantity: true },
        _count: true,
      }),
      prisma.harvest.aggregate({
        where: { organizationId, harvestDate: { gte: startOfLastMonth, lte: endOfLastMonth } },
        _sum: { quantity: true },
      }),
      prisma.alert.count({ where: { organizationId, status: 'active' } }),
      // Latest sensor readings, for system health
      prisma.sensorReading.findMany({
        where: { zone: { organizationId } },
        orderBy: { timestamp: 'desc' },
        take: 10,
        include: { zone: { select: { name: true, type: true } } },
      }),
    ]);

    // Aggregate by month
    const monthlyRevenue: Record<string, number> = {};
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    // Initialize last 6 months with 0
    for (let i = 5; i >= 0; i--) {
      const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const key = monthNames[date.getMonth()];
      monthlyRevenue[key] = 0;
    }

    // Fill in actual data
    salesByMonth.forEach(sale => {
      const saleDate = new Date(sale.saleDate);
      const key = monthNames[saleDate.getMonth()];
      if (monthlyRevenue[key] !== undefined) {
        monthlyRevenue[key] += sale._sum.total || 0;
      }
    });

    const revenueChartData = Object.entries(monthlyRevenue).map(([name, revenue]) => ({
      name,
      revenue: Math.round(revenue * 100) / 100,
    }));

    // Calculate changes
    const currentMonthTotal = currentMonthSales._sum.total || 0;
    const lastMonthTotal = lastMonthSales._sum.total || 0;
    const revenueChange = lastMonthTotal > 0
      ? ((currentMonthTotal - lastMonthTotal) / lastMonthTotal) * 100
      : currentMonthTotal > 0 ? 100 : 0;

    const currentYield = currentMonthHarvests._sum.quantity || 0;
    const lastYield = lastMonthHarvests._sum.quantity || 0;
    const yieldChange = lastYield > 0
      ? ((currentYield - lastYield) / lastYield) * 100
      : currentYield > 0 ? 100 : 0;

    // Calculate system efficiency based on zones with recent readings
    const zonesWithReadings = new Set(latestReadings.map(r => r.zoneId)).size;
    const systemEfficiency = totalZones > 0 ? Math.round((zonesWithReadings / totalZones) * 100) : 0;

    return NextResponse.json({
      kpis: {
        totalRevenue: {
          value: totalRevenue._sum.total || 0,
          change: revenueChange,
        },
        monthlyRevenue: {
          value: currentMonthTotal,
          change: revenueChange,
        },
        yieldRate: {
          value: currentYield,
          unit: 'lbs',
          change: yieldChange,
        },
        activeZones: {
          value: activeZones,
          total: totalZones,
        },
        systemEfficiency: {
          value: systemEfficiency,
          unit: '%',
        },
        activeAlerts: {
          value: activeAlerts,
        },
      },
      revenueChart: revenueChartData,
      latestReadings: latestReadings.map(r => ({
        zoneId: r.zoneId,
        zoneName: r.zone.name,
        zoneType: r.zone.type,
        temperature: r.temperature,
        ph: r.ph,
        dissolvedO2: r.dissolvedO2,
        ammonia: r.ammonia,
        humidity: r.humidity,
        timestamp: r.timestamp,
      })),
    });
  } catch (error) {
    console.error('Failed to fetch dashboard stats:', error);
    return NextResponse.json({ error: 'Failed to fetch dashboard stats' }, { status: 500 });
  }
}
