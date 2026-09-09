import { NextResponse } from 'next/server';
import { activeOrg } from '@/lib/api-access';
import { prisma } from '@/lib/prisma';

// GET - Fetch sensor readings for a zone
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;

    const { id: zoneId } = await params;
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '50');

    // Verify zone belongs to user
    const zone = await prisma.zone.findFirst({
      where: { id: zoneId, organizationId: ctx.organizationId },
    });
    if (!zone) {
      return NextResponse.json({ error: 'Zone not found' }, { status: 404 });
    }

    const readings = await prisma.sensorReading.findMany({
      where: { zoneId },
      orderBy: { timestamp: 'desc' },
      take: limit,
    });

    return NextResponse.json(readings);
  } catch (error) {
    console.error('Failed to fetch readings:', error);
    return NextResponse.json({ error: 'Failed to fetch readings' }, { status: 500 });
  }
}

// POST - Add a new sensor reading and check thresholds
export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;

    const { id: zoneId } = await params;
    const data = await request.json();
    const { temperature, ph, dissolvedO2, ammonia, humidity } = data;

    // Verify zone belongs to user
    const zone = await prisma.zone.findFirst({
      where: { id: zoneId, organizationId: ctx.organizationId },
      include: { alertThresholds: true },
    });
    if (!zone) {
      return NextResponse.json({ error: 'Zone not found' }, { status: 404 });
    }

    // Create the sensor reading
    const reading = await prisma.sensorReading.create({
      data: {
        zoneId,
        temperature: temperature !== undefined ? parseFloat(temperature) : null,
        ph: ph !== undefined ? parseFloat(ph) : null,
        dissolvedO2: dissolvedO2 !== undefined ? parseFloat(dissolvedO2) : null,
        ammonia: ammonia !== undefined ? parseFloat(ammonia) : null,
        humidity: humidity !== undefined ? parseFloat(humidity) : null,
      },
    });

    // Check thresholds and generate alerts
    const alerts: string[] = [];

    for (const threshold of zone.alertThresholds) {
      if (!threshold.enabled) continue;

      let value: number | null = null;
      let paramName = '';

      switch (threshold.parameter) {
        case 'temperature':
          value = reading.temperature;
          paramName = 'Temperature';
          break;
        case 'ph':
          value = reading.ph;
          paramName = 'pH';
          break;
        case 'dissolvedO2':
          value = reading.dissolvedO2;
          paramName = 'Dissolved O2';
          break;
        case 'ammonia':
          value = reading.ammonia;
          paramName = 'Ammonia';
          break;
        case 'humidity':
          value = reading.humidity;
          paramName = 'Humidity';
          break;
      }

      if (value === null) continue;

      let alertMessage: string | null = null;

      if (threshold.minValue !== null && value < threshold.minValue) {
        alertMessage = `${paramName} (${value}) is below minimum threshold (${threshold.minValue})`;
      } else if (threshold.maxValue !== null && value > threshold.maxValue) {
        alertMessage = `${paramName} (${value}) is above maximum threshold (${threshold.maxValue})`;
      }

      if (alertMessage) {
        // Check if there's already an active alert for this parameter
        const existingAlert = await prisma.alert.findFirst({
          where: {
            organizationId: ctx.organizationId,
            zoneId,
            type: 'threshold',
            status: 'active',
            title: { contains: paramName },
          },
        });

        if (!existingAlert) {
          // Create new alert
          await prisma.alert.create({
            data: {
              userId: ctx.userId,
        organizationId: ctx.organizationId,
              zoneId,
              type: 'threshold',
              severity: threshold.alertLevel as 'info' | 'warning' | 'critical',
              title: `${paramName} Alert - ${zone.name}`,
              message: alertMessage,
            },
          });

          // Create notification
          await prisma.notification.create({
            data: {
              userId: ctx.userId,
              title: `Threshold Alert: ${paramName}`,
              message: `${zone.name}: ${alertMessage}`,
              type: threshold.alertLevel === 'critical' ? 'error' : 'warning',
              link: '/dashboard/operations',
            },
          });

          alerts.push(alertMessage);
        }
      }
    }

    return NextResponse.json({
      reading,
      alertsGenerated: alerts,
    });
  } catch (error) {
    console.error('Failed to create reading:', error);
    return NextResponse.json({ error: 'Failed to create reading' }, { status: 500 });
  }
}
