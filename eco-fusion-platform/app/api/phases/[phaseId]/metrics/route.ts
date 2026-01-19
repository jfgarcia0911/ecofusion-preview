import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';

// GET - Fetch efficiency metrics for a phase
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

    // Calculate efficiency based on multiple factors:
    // 1. Task completion rate (40% weight)
    // 2. Alert resolution rate (30% weight)
    // 3. Activity level (30% weight)

    // 1. Task completion rate for this phase
    const phaseTasks = await prisma.task.findMany({
      where: {
        userId: session.user.id,
        phaseId,
        createdAt: {
          gte: startOfMonth,
          lte: endOfMonth,
        },
      },
    });

    let taskCompletionRate = 0;
    if (phaseTasks.length > 0) {
      const completedTasks = phaseTasks.filter(t => t.completed).length;
      taskCompletionRate = (completedTasks / phaseTasks.length) * 100;
    } else {
      // No tasks = neutral (50%)
      taskCompletionRate = 50;
    }

    // 2. Alert resolution rate
    const alerts = await prisma.alert.findMany({
      where: {
        userId: session.user.id,
        createdAt: {
          gte: startOfMonth,
          lte: endOfMonth,
        },
      },
    });

    let alertResolutionRate = 0;
    if (alerts.length > 0) {
      const resolvedAlerts = alerts.filter(a => a.status === 'resolved').length;
      alertResolutionRate = (resolvedAlerts / alerts.length) * 100;
    } else {
      // No alerts = good (100%)
      alertResolutionRate = 100;
    }

    // 3. Activity level based on recent sales/harvests
    const recentSales = await prisma.sale.count({
      where: {
        userId: session.user.id,
        saleDate: {
          gte: startOfMonth,
          lte: endOfMonth,
        },
        status: 'completed',
      },
    });

    const recentHarvests = await prisma.harvest.count({
      where: {
        userId: session.user.id,
        harvestDate: {
          gte: startOfMonth,
          lte: endOfMonth,
        },
      },
    });

    // Activity score: normalize based on expected monthly activity
    const expectedMonthlyActivity = 10; // Expected sales + harvests per month
    const actualActivity = recentSales + recentHarvests;
    const activityRate = Math.min(100, (actualActivity / expectedMonthlyActivity) * 100);

    // Calculate weighted efficiency
    const efficiency = Math.round(
      taskCompletionRate * 0.4 +
      alertResolutionRate * 0.3 +
      activityRate * 0.3
    );

    // Get phase settings for target revenue if configured
    const phaseSettings = await prisma.phaseSettings.findUnique({
      where: {
        userId_phaseId: {
          userId: session.user.id,
          phaseId,
        },
      },
    });

    return NextResponse.json({
      phaseId,
      efficiency: Math.min(100, Math.max(0, efficiency)),
      breakdown: {
        taskCompletion: Math.round(taskCompletionRate),
        alertResolution: Math.round(alertResolutionRate),
        activityLevel: Math.round(activityRate),
      },
      details: {
        totalTasks: phaseTasks.length,
        completedTasks: phaseTasks.filter(t => t.completed).length,
        totalAlerts: alerts.length,
        resolvedAlerts: alerts.filter(a => a.status === 'resolved').length,
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
