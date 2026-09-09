import { NextResponse } from 'next/server';
import { activeOrg } from '@/lib/api-access';
import { prisma } from '@/lib/prisma';

// GET - Fetch aggregated dashboard statistics
export async function GET() {
  try {
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;

    const userId = ctx.userId;
    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const startOfLastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    const endOfLastMonth = new Date(now.getFullYear(), now.getMonth(), 0);

    // Get current month sales
    const currentMonthSales = await prisma.sale.aggregate({
      where: {
        userId,
        saleDate: { gte: startOfMonth },
        status: 'completed',
      },
      _sum: { total: true },
      _count: true,
    });

    // Get last month sales for comparison
    const lastMonthSales = await prisma.sale.aggregate({
      where: {
        userId,
        saleDate: { gte: startOfLastMonth, lte: endOfLastMonth },
        status: 'completed',
      },
      _sum: { total: true },
    });

    // Get total revenue (all time)
    const totalRevenue = await prisma.sale.aggregate({
      where: { userId, status: 'completed' },
      _sum: { total: true },
    });

    // Get monthly revenue data for chart (last 6 months)
    const sixMonthsAgo = new Date(now.getFullYear(), now.getMonth() - 5, 1);
    const salesByMonth = await prisma.sale.groupBy({
      by: ['saleDate'],
      where: {
        userId,
        saleDate: { gte: sixMonthsAgo },
        status: 'completed',
      },
      _sum: { total: true },
    });

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

    // Get active zones count
    const activeZones = await prisma.zone.count({
      where: { userId, status: 'active' },
    });

    // Get total zones
    const totalZones = await prisma.zone.count({
      where: { userId },
    });

    // Get harvest data for yield calculation
    const currentMonthHarvests = await prisma.harvest.aggregate({
      where: {
        userId,
        harvestDate: { gte: startOfMonth },
      },
      _sum: { quantity: true },
      _count: true,
    });

    const lastMonthHarvests = await prisma.harvest.aggregate({
      where: {
        userId,
        harvestDate: { gte: startOfLastMonth, lte: endOfLastMonth },
      },
      _sum: { quantity: true },
    });

    // Get active alerts count
    const activeAlerts = await prisma.alert.count({
      where: { userId, status: 'active' },
    });

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

    // Get latest sensor readings for system health
    const latestReadings = await prisma.sensorReading.findMany({
      where: {
        zone: { userId },
      },
      orderBy: { timestamp: 'desc' },
      take: 10,
      include: { zone: { select: { name: true, type: true } } },
    });

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
