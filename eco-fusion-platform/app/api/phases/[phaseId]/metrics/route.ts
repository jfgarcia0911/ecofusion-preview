import { NextResponse } from 'next/server';
import { activeOrg } from '@/lib/api-access';
import { prisma } from '@/lib/prisma';

// GET - Fetch efficiency metrics for a phase
export async function GET(
  request: Request,
  { params }: { params: Promise<{ phaseId: string }> }
) {
  try {
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;

    const { phaseId } = await params;
    const organizationId = ctx.organizationId;

    // A phase is one of this business's units, named by its key.
    const unit = await prisma.businessUnit.findFirst({
      where: { organizationId, key: phaseId },
      select: { id: true },
    });
    if (!unit) {
      return NextResponse.json({ error: 'Business unit not found' }, { status: 404 });
    }

    // Get the current month's date range
    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);
    const thisMonth = { gte: startOfMonth, lte: endOfMonth };

    // Efficiency is weighted from:
    // 1. Task completion rate (40%)
    // 2. Alert resolution rate (30%)
    // 3. Activity level (30%)
    // Counted in the database rather than by loading every row.
    const [
      totalTasks,
      completedTasks,
      totalAlerts,
      resolvedAlerts,
      recentSales,
      recentHarvests,
      phaseSettings,
    ] = await Promise.all([
      prisma.task.count({ where: { organizationId, phaseId, createdAt: thisMonth } }),
      prisma.task.count({ where: { organizationId, phaseId, createdAt: thisMonth, completed: true } }),
      prisma.alert.count({ where: { organizationId, createdAt: thisMonth } }),
      prisma.alert.count({ where: { organizationId, createdAt: thisMonth, status: 'resolved' } }),
      prisma.sale.count({ where: { organizationId, saleDate: thisMonth, status: 'completed' } }),
      prisma.harvest.count({ where: { organizationId, harvestDate: thisMonth } }),
      prisma.phaseSettings.findUnique({
        where: { organizationId_phaseId: { organizationId, phaseId } },
        select: { targetRevenue: true },
      }),
    ]);

    // No tasks = neutral (50%)
    const taskCompletionRate = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 50;
    // No alerts = good (100%)
    const alertResolutionRate = totalAlerts > 0 ? (resolvedAlerts / totalAlerts) * 100 : 100;

    // Activity score: normalize based on expected monthly activity
    const expectedMonthlyActivity = 10; // Expected sales + harvests per month
    const actualActivity = recentSales + recentHarvests;
    const activityRate = Math.min(100, (actualActivity / expectedMonthlyActivity) * 100);

    const efficiency = Math.round(
      taskCompletionRate * 0.4 +
      alertResolutionRate * 0.3 +
      activityRate * 0.3
    );

    return NextResponse.json({
      phaseId,
      efficiency: Math.min(100, Math.max(0, efficiency)),
      breakdown: {
        taskCompletion: Math.round(taskCompletionRate),
        alertResolution: Math.round(alertResolutionRate),
        activityLevel: Math.round(activityRate),
      },
      details: {
        totalTasks,
        completedTasks,
        totalAlerts,
        resolvedAlerts,
        salesCount: recentSales,
        harvestCount: recentHarvests,
      },
      targetRevenue: phaseSettings?.targetRevenue || null,
      month: now.toLocaleString('default', { month: 'long', year: 'numeric' }),
    });
  } catch (error) {
    console.error('Failed to fetch phase metrics:', error);
    return NextResponse.json({ error: 'Failed to fetch phase metrics' }, { status: 500 });
  }
}
