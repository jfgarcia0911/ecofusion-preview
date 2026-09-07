import { NextResponse } from 'next/server';
import { getOrgContext } from '@/lib/tenancy';
import { prisma } from '@/lib/prisma';

// GET - Fetch all alert thresholds for a zone
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const ctx = await getOrgContext();
    if (!ctx) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id: zoneId } = await params;

    // Verify zone belongs to user
    const zone = await prisma.zone.findFirst({
      where: { id: zoneId, organizationId: ctx.organizationId },
    });
    if (!zone) {
      return NextResponse.json({ error: 'Zone not found' }, { status: 404 });
    }

    const alerts = await prisma.zoneAlertThreshold.findMany({
      where: { zoneId },
      orderBy: { parameter: 'asc' },
    });

    return NextResponse.json(alerts);
  } catch (error) {
    console.error('Error fetching zone alerts:', error);
    return NextResponse.json({ error: 'Failed to fetch alerts' }, { status: 500 });
  }
}

// POST - Create or update an alert threshold
export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const ctx = await getOrgContext();
    if (!ctx) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id: zoneId } = await params;
    const body = await request.json();

    const { parameter, minValue, maxValue, enabled, alertLevel } = body;

    if (!parameter) {
      return NextResponse.json({ error: 'Parameter is required' }, { status: 400 });
    }

    const validParameters = ['temperature', 'ph', 'dissolvedO2', 'ammonia', 'humidity'];
    if (!validParameters.includes(parameter)) {
      return NextResponse.json({ error: 'Invalid parameter' }, { status: 400 });
    }

    // Verify zone exists and belongs to user
    const zone = await prisma.zone.findFirst({ where: { id: zoneId, organizationId: ctx.organizationId } });
    if (!zone) {
      return NextResponse.json({ error: 'Zone not found' }, { status: 404 });
    }

    // Upsert the alert threshold
    const alert = await prisma.zoneAlertThreshold.upsert({
      where: {
        zoneId_parameter: { zoneId, parameter },
      },
      update: {
        minValue: minValue !== undefined ? minValue : undefined,
        maxValue: maxValue !== undefined ? maxValue : undefined,
        enabled: enabled !== undefined ? enabled : undefined,
        alertLevel: alertLevel || undefined,
      },
      create: {
        zoneId,
        parameter,
        minValue,
        maxValue,
        enabled: enabled ?? true,
        alertLevel: alertLevel || 'warning',
      },
    });

    return NextResponse.json(alert);
  } catch (error) {
    console.error('Error creating/updating zone alert:', error);
    return NextResponse.json({ error: 'Failed to save alert' }, { status: 500 });
  }
}

// DELETE - Remove an alert threshold
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const ctx = await getOrgContext();
    if (!ctx) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id: zoneId } = await params;
    const { searchParams } = new URL(request.url);
    const parameter = searchParams.get('parameter');

    if (!parameter) {
      return NextResponse.json({ error: 'Parameter is required' }, { status: 400 });
    }

    // Verify zone belongs to user
    const zone = await prisma.zone.findFirst({ where: { id: zoneId, organizationId: ctx.organizationId } });
    if (!zone) {
      return NextResponse.json({ error: 'Zone not found' }, { status: 404 });
    }

    await prisma.zoneAlertThreshold.delete({
      where: {
        zoneId_parameter: { zoneId, parameter },
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting zone alert:', error);
    return NextResponse.json({ error: 'Failed to delete alert' }, { status: 500 });
  }
}
