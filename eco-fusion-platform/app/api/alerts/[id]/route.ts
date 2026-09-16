import { NextResponse } from 'next/server';
import { z } from 'zod';
import { activeOrg } from '@/lib/api-access';
import { canAdminister } from '@/lib/tenancy';
import { prisma } from '@/lib/prisma';
import { readJson } from '@/lib/validation/request';
import { adminOnly } from '@/lib/validation/fields';

const updateSchema = z.object({
  status: z.enum(['active', 'acknowledged', 'resolved']),
});

const ALERT_INCLUDE = {
  zone: { select: { id: true, name: true } },
  assignee: { select: { id: true, name: true, email: true } },
} as const;

// GET - Fetch a single alert
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;

    const { id } = await params;

    const alert = await prisma.alert.findFirst({
      where: { id, organizationId: ctx.organizationId },
      include: ALERT_INCLUDE,
    });

    if (!alert) {
      return NextResponse.json({ error: 'Alert not found' }, { status: 404 });
    }

    return NextResponse.json(alert);
  } catch (error) {
    console.error('Failed to fetch alert:', error);
    return NextResponse.json({ error: 'Failed to fetch alert' }, { status: 500 });
  }
}

// PATCH - Update alert status
export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;

    const { id } = await params;
    const body = await readJson(request, updateSchema);
    if (!body.ok) return body.response;

    const { count } = await prisma.alert.updateMany({
      where: { id, organizationId: ctx.organizationId },
      data: { status: body.data.status },
    });
    if (count === 0) {
      return NextResponse.json({ error: 'Alert not found' }, { status: 404 });
    }

    const alert = await prisma.alert.findFirst({
      where: { id, organizationId: ctx.organizationId },
      include: ALERT_INCLUDE,
    });
    if (!alert) {
      return NextResponse.json({ error: 'Alert not found' }, { status: 404 });
    }

    return NextResponse.json(alert);
  } catch (error) {
    console.error('Failed to update alert:', error);
    return NextResponse.json({ error: 'Failed to update alert' }, { status: 500 });
  }
}

// DELETE - Delete an alert
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;
    if (!canAdminister(ctx)) return adminOnly('delete alerts');

    const { id } = await params;

    const { count } = await prisma.alert.deleteMany({
      where: { id, organizationId: ctx.organizationId },
    });
    if (count === 0) {
      return NextResponse.json({ error: 'Alert not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to delete alert:', error);
    return NextResponse.json({ error: 'Failed to delete alert' }, { status: 500 });
  }
}
