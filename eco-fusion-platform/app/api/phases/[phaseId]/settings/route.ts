import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';

// GET - Fetch phase settings
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

    const settings = await prisma.phaseSettings.findUnique({
      where: {
        userId_phaseId: {
          userId: session.user.id,
          phaseId,
        },
      },
    });

    // Return default settings if none exist
    if (!settings) {
      return NextResponse.json({
        phaseId,
        budgetMonthly: null,
        targetRevenue: null,
        alertsEnabled: true,
        notifications: true,
        notes: null,
      });
    }

    return NextResponse.json(settings);
  } catch (error) {
    console.error('Failed to fetch phase settings:', error);
    return NextResponse.json({ error: 'Failed to fetch phase settings' }, { status: 500 });
  }
}

// PUT - Update phase settings
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ phaseId: string }> }
) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { phaseId } = await params;
    const data = await request.json();
    const { budgetMonthly, targetRevenue, alertsEnabled, notifications, notes } = data;

    const settings = await prisma.phaseSettings.upsert({
      where: {
        userId_phaseId: {
          userId: session.user.id,
          phaseId,
        },
      },
      update: {
        budgetMonthly: budgetMonthly !== undefined ? budgetMonthly : undefined,
        targetRevenue: targetRevenue !== undefined ? targetRevenue : undefined,
        alertsEnabled: alertsEnabled !== undefined ? alertsEnabled : undefined,
        notifications: notifications !== undefined ? notifications : undefined,
        notes: notes !== undefined ? notes : undefined,
      },
      create: {
        userId: session.user.id,
        phaseId,
        budgetMonthly: budgetMonthly || null,
        targetRevenue: targetRevenue || null,
        alertsEnabled: alertsEnabled ?? true,
        notifications: notifications ?? true,
        notes: notes || null,
      },
    });

    return NextResponse.json(settings);
  } catch (error) {
    console.error('Failed to update phase settings:', error);
    return NextResponse.json({ error: 'Failed to update phase settings' }, { status: 500 });
  }
}
