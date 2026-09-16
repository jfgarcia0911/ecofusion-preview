import { NextResponse } from 'next/server';
import { z } from 'zod';
import { activeOrg } from '@/lib/api-access';
import { canAdminister } from '@/lib/tenancy';
import { prisma } from '@/lib/prisma';
import { readJson } from '@/lib/validation/request';
import {
  adminOnly,
  optionalRecordId,
  optionalText,
  requiredInt,
  requiredText,
} from '@/lib/validation/fields';

const CAMERA_STATUSES = ['online', 'offline', 'error', 'maintenance'] as const;

/** See the note in ../route.ts: stored and handed back, never fetched. */
const streamUrl = z
  .string()
  .trim()
  .min(1, 'is required')
  .max(500)
  .regex(/^(rtsps?|https?):\/\/\S+$/i, 'must start with rtsp://, rtsps://, http:// or https://');

// Only these fields; anything else in the body is dropped before Prisma.
const updateSchema = z.object({
  name: requiredText(120).optional(),
  location: optionalText(200),
  zoneId: optionalRecordId,
  connectionType: requiredText(40).optional(),
  rtspUrl: streamUrl.optional(),
  protocol: requiredText(40).optional(),
  brand: optionalText(120),
  model: optionalText(120),
  status: z.enum(CAMERA_STATUSES).optional(),
  isEnabled: z.boolean().optional(),
  sortOrder: requiredInt(0, 100_000).optional(),
});

const CAMERA_INCLUDE = {
  zone: {
    select: { id: true, name: true, type: true },
  },
} as const;

/** Credentials in a stream address hidden: `rtsp://***@host/stream`. */
function maskStreamUrl(url: string): string {
  return url.replace(/^([a-z][a-z0-9+.-]*:\/\/)[^/?#]*@/i, '$1***@');
}

// GET - Fetch a single camera
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;

    const { id } = await params;

    const camera = await prisma.camera.findFirst({
      where: {
        id,
        organizationId: ctx.organizationId,
      },
      include: CAMERA_INCLUDE,
    });

    if (!camera) {
      return NextResponse.json({ error: 'Camera not found' }, { status: 404 });
    }

    return NextResponse.json(
      canAdminister(ctx) ? camera : { ...camera, rtspUrl: maskStreamUrl(camera.rtspUrl) }
    );
  } catch (error) {
    console.error('Failed to fetch camera:', error);
    return NextResponse.json({ error: 'Failed to fetch camera' }, { status: 500 });
  }
}

// PATCH - Update a camera
export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;
    if (!canAdminister(ctx)) return adminOnly('change cameras');

    const { id } = await params;
    const body = await readJson(request, updateSchema);
    if (!body.ok) return body.response;
    const changes = body.data;

    if (changes.zoneId) {
      const zone = await prisma.zone.findFirst({
        where: { id: changes.zoneId, organizationId: ctx.organizationId },
        select: { id: true },
      });
      if (!zone) {
        return NextResponse.json({ error: 'Zone not found' }, { status: 404 });
      }
    }

    const { count } = await prisma.camera.updateMany({
      where: { id, organizationId: ctx.organizationId },
      data: {
        name: changes.name,
        location: changes.location,
        zoneId: changes.zoneId,
        connectionType: changes.connectionType,
        rtspUrl: changes.rtspUrl,
        protocol: changes.protocol,
        brand: changes.brand,
        model: changes.model,
        status: changes.status,
        isEnabled: changes.isEnabled,
        sortOrder: changes.sortOrder,
        lastOnline: changes.status === 'online' ? new Date() : undefined,
      },
    });
    if (count === 0) {
      return NextResponse.json({ error: 'Camera not found' }, { status: 404 });
    }

    const camera = await prisma.camera.findFirst({
      where: { id, organizationId: ctx.organizationId },
      include: CAMERA_INCLUDE,
    });
    if (!camera) {
      return NextResponse.json({ error: 'Camera not found' }, { status: 404 });
    }

    return NextResponse.json(camera);
  } catch (error) {
    console.error('Failed to update camera:', error);
    return NextResponse.json({ error: 'Failed to update camera' }, { status: 500 });
  }
}

// DELETE - Delete a camera
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;
    if (!canAdminister(ctx)) return adminOnly('delete cameras');

    const { id } = await params;

    const { count } = await prisma.camera.deleteMany({
      where: { id, organizationId: ctx.organizationId },
    });
    if (count === 0) {
      return NextResponse.json({ error: 'Camera not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to delete camera:', error);
    return NextResponse.json({ error: 'Failed to delete camera' }, { status: 500 });
  }
}
