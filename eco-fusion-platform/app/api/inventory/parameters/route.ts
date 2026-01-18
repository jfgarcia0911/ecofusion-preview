import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';

// GET - Fetch all growth parameters for user
export async function GET(request: Request) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type'); // Optional filter by "fish" or "plant"

    const where: { userId: string; type?: string } = { userId: session.user.id };
    if (type) {
      where.type = type;
    }

    const parameters = await prisma.growthParameter.findMany({
      where,
      orderBy: [{ type: 'asc' }, { species: 'asc' }],
    });

    return NextResponse.json(parameters);
  } catch (error) {
    console.error('Failed to fetch growth parameters:', error);
    return NextResponse.json({ error: 'Failed to fetch growth parameters' }, { status: 500 });
  }
}

// POST - Create new growth parameter template
export async function POST(request: Request) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const data = await request.json();
    const {
      type,
      species,
      variety,
      seedlingDays,
      growingDays,
      harvestWeight,
      optimalTempMin,
      optimalTempMax,
      optimalPh,
      expectedYield,
      yieldUnit,
      notes,
    } = data;

    if (!type || !species || !growingDays) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    if (!['fish', 'plant'].includes(type)) {
      return NextResponse.json({ error: 'Type must be "fish" or "plant"' }, { status: 400 });
    }

    const parameter = await prisma.growthParameter.create({
      data: {
        userId: session.user.id,
        type,
        species,
        variety: variety || null,
        seedlingDays: seedlingDays || null,
        growingDays,
        harvestWeight: harvestWeight || null,
        optimalTempMin: optimalTempMin || null,
        optimalTempMax: optimalTempMax || null,
        optimalPh: optimalPh || null,
        expectedYield: expectedYield || null,
        yieldUnit: yieldUnit || null,
        notes: notes || null,
      },
    });

    return NextResponse.json(parameter);
  } catch (error) {
    console.error('Failed to create growth parameter:', error);
    return NextResponse.json({ error: 'Failed to create growth parameter' }, { status: 500 });
  }
}

// PATCH - Update growth parameter
export async function PATCH(request: Request) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const data = await request.json();
    const { id, ...updates } = data;

    if (!id) {
      return NextResponse.json({ error: 'Missing parameter ID' }, { status: 400 });
    }

    // Verify ownership
    const parameter = await prisma.growthParameter.findUnique({ where: { id } });
    if (!parameter || parameter.userId !== session.user.id) {
      return NextResponse.json({ error: 'Parameter not found' }, { status: 404 });
    }

    const updated = await prisma.growthParameter.update({
      where: { id },
      data: updates,
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error('Failed to update growth parameter:', error);
    return NextResponse.json({ error: 'Failed to update growth parameter' }, { status: 500 });
  }
}

// DELETE - Delete growth parameter
export async function DELETE(request: Request) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Missing parameter ID' }, { status: 400 });
    }

    // Verify ownership
    const parameter = await prisma.growthParameter.findUnique({ where: { id } });
    if (!parameter || parameter.userId !== session.user.id) {
      return NextResponse.json({ error: 'Parameter not found' }, { status: 404 });
    }

    await prisma.growthParameter.delete({ where: { id } });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to delete growth parameter:', error);
    return NextResponse.json({ error: 'Failed to delete growth parameter' }, { status: 500 });
  }
}
