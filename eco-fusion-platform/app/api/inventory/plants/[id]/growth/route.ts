import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';

// GET - Fetch growth logs for a plant crop
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;

    // Verify ownership
    const plantCrop = await prisma.plantCrop.findUnique({ where: { id } });
    if (!plantCrop || plantCrop.userId !== session.user.id) {
      return NextResponse.json({ error: 'Plant crop not found' }, { status: 404 });
    }

    const growthLogs = await prisma.plantGrowthLog.findMany({
      where: { plantCropId: id },
      orderBy: { recordedAt: 'desc' },
    });

    return NextResponse.json(growthLogs);
  } catch (error) {
    console.error('Failed to fetch growth logs:', error);
    return NextResponse.json({ error: 'Failed to fetch growth logs' }, { status: 500 });
  }
}

// POST - Add growth log entry
export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    const data = await request.json();
    const { heightCm, healthScore, losses, notes } = data;

    // Verify ownership
    const plantCrop = await prisma.plantCrop.findUnique({ where: { id } });
    if (!plantCrop || plantCrop.userId !== session.user.id) {
      return NextResponse.json({ error: 'Plant crop not found' }, { status: 404 });
    }

    // Create growth log and update plant crop in transaction
    const result = await prisma.$transaction(async (tx) => {
      const growthLog = await tx.plantGrowthLog.create({
        data: {
          plantCropId: id,
          heightCm: heightCm || null,
          healthScore: healthScore || null,
          losses: losses || 0,
          notes: notes || null,
        },
      });

      // Reduce quantity by losses
      if (losses && losses > 0) {
        const newQuantity = Math.max(0, plantCrop.quantity - losses);
        await tx.plantCrop.update({
          where: { id },
          data: { quantity: newQuantity },
        });
      }

      return growthLog;
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error('Failed to add growth log:', error);
    return NextResponse.json({ error: 'Failed to add growth log' }, { status: 500 });
  }
}
