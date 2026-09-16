import { NextResponse } from 'next/server';
import { z } from 'zod';
import { activeOrg } from '@/lib/api-access';
import { canAdminister } from '@/lib/tenancy';
import { prisma } from '@/lib/prisma';
import { readJson } from '@/lib/validation/request';
import { adminOnly, optionalNumber, optionalText } from '@/lib/validation/fields';

// Only these fields; the modal posts the whole settings object back, and
// anything else in it (id, organizationId, timestamps) is dropped here.
const settingsSchema = z.object({
  budgetMonthly: optionalNumber(0, 1_000_000_000),
  targetRevenue: optionalNumber(0, 1_000_000_000),
  alertsEnabled: z.boolean().optional(),
  notifications: z.boolean().optional(),
  notes: optionalText(2000),
});

/** Whether `phaseId` is one of this business's units. */
async function unitInBusiness(phaseId: string, organizationId: string) {
  const unit = await prisma.businessUnit.findFirst({
    where: { organizationId, key: phaseId },
    select: { id: true },
  });
  return unit !== null;
}

// GET - Fetch phase settings
export async function GET(
  request: Request,
  { params }: { params: Promise<{ phaseId: string }> }
) {
  try {
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;

    const { phaseId } = await params;

    const [known, settings] = await Promise.all([
      unitInBusiness(phaseId, ctx.organizationId),
      prisma.phaseSettings.findUnique({
        where: {
          organizationId_phaseId: {
            organizationId: ctx.organizationId,
            phaseId,
          },
        },
      }),
    ]);
    if (!known) {
      return NextResponse.json({ error: 'Business unit not found' }, { status: 404 });
    }

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
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;
    if (!canAdminister(ctx)) return adminOnly('change business unit settings');

    const { phaseId } = await params;
    const body = await readJson(request, settingsSchema);
    if (!body.ok) return body.response;
    const input = body.data;

    if (!(await unitInBusiness(phaseId, ctx.organizationId))) {
      return NextResponse.json({ error: 'Business unit not found' }, { status: 404 });
    }

    const settings = await prisma.phaseSettings.upsert({
      where: {
        organizationId_phaseId: {
          organizationId: ctx.organizationId,
          phaseId,
        },
      },
      update: {
        budgetMonthly: input.budgetMonthly,
        targetRevenue: input.targetRevenue,
        alertsEnabled: input.alertsEnabled,
        notifications: input.notifications,
        notes: input.notes,
      },
      create: {
        userId: ctx.userId,
        organizationId: ctx.organizationId,
        phaseId,
        budgetMonthly: input.budgetMonthly ?? null,
        targetRevenue: input.targetRevenue ?? null,
        alertsEnabled: input.alertsEnabled ?? true,
        notifications: input.notifications ?? true,
        notes: input.notes ?? null,
      },
    });

    return NextResponse.json(settings);
  } catch (error) {
    console.error('Failed to update phase settings:', error);
    return NextResponse.json({ error: 'Failed to update phase settings' }, { status: 500 });
  }
}
