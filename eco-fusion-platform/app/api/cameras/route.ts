import { NextResponse } from 'next/server';
import { z } from 'zod';
import { activeOrg } from '@/lib/api-access';
import { canAdminister, type OrgContext } from '@/lib/tenancy';
import { prisma } from '@/lib/prisma';
import { readJson } from '@/lib/validation/request';
import { adminOnly, optionalRecordId, optionalText, requiredText } from '@/lib/validation/fields';

/**
 * A stream address. Stored and handed back, never fetched by the server, so
 * the only checks are that it is a stream-shaped URL of reasonable length.
 */
const streamUrl = z
  .string()
  .trim()
  .min(1, 'is required')
  .max(500)
  .regex(/^(rtsps?|https?):\/\/\S+$/i, 'must start with rtsp://, rtsps://, http:// or https://');

const createSchema = z.object({
  name: requiredText(120),
  location: optionalText(200),
  zoneId: optionalRecordId,
  connectionType: optionalText(40),
  rtspUrl: streamUrl,
  protocol: optionalText(40),
  brand: optionalText(120),
  model: optionalText(120),
  isEnabled: z.boolean().optional(),
});

/**
 * The stream address with any credentials in it hidden, for readers who do not
 * administer the business. `rtsp://user:pass@host/stream` becomes
 * `rtsp://***@host/stream`.
 */
function maskStreamUrl(url: string): string {
  // Up to the last @ before the path, so an unencoded @ in a password is
  // hidden along with the rest of it.
  return url.replace(/^([a-z][a-z0-9+.-]*:\/\/)[^/?#]*@/i, '$1***@');
}

function forReader<T extends { rtspUrl: string }>(ctx: OrgContext, camera: T): T {
  return canAdminister(ctx) ? camera : { ...camera, rtspUrl: maskStreamUrl(camera.rtspUrl) };
}

// GET - This business's cameras
export async function GET() {
  try {
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;

    const cameras = await prisma.camera.findMany({
      where: { organizationId: ctx.organizationId },
      include: {
        zone: {
          select: { id: true, name: true, type: true },
        },
      },
      orderBy: [{ sortOrder: 'asc' }, { name: 'asc' }],
      take: 500,
    });

    return NextResponse.json(cameras.map((camera) => forReader(ctx, camera)));
  } catch (error) {
    console.error('Failed to fetch cameras:', error);
    return NextResponse.json({ error: 'Failed to fetch cameras' }, { status: 500 });
  }
}

// POST - Create a new camera
export async function POST(request: Request) {
  try {
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;
    if (!canAdminister(ctx)) return adminOnly('add cameras');

    const body = await readJson(request, createSchema);
    if (!body.ok) return body.response;
    const input = body.data;

    if (input.zoneId) {
      const zone = await prisma.zone.findFirst({
        where: { id: input.zoneId, organizationId: ctx.organizationId },
        select: { id: true },
      });
      if (!zone) {
        return NextResponse.json({ error: 'Zone not found' }, { status: 404 });
      }
    }

    // Get the next sort order
    const maxSortOrder = await prisma.camera.aggregate({
      where: { organizationId: ctx.organizationId },
      _max: { sortOrder: true },
    });

    const camera = await prisma.camera.create({
      data: {
        userId: ctx.userId,
        organizationId: ctx.organizationId,
        name: input.name,
        location: input.location ?? null,
        zoneId: input.zoneId ?? null,
        connectionType: input.connectionType ?? 'wired',
        rtspUrl: input.rtspUrl,
        protocol: input.protocol ?? 'rtsp',
        brand: input.brand ?? null,
        model: input.model ?? null,
        isEnabled: input.isEnabled !== false,
        sortOrder: (maxSortOrder._max.sortOrder || 0) + 1,
      },
      include: {
        zone: {
          select: { id: true, name: true, type: true },
        },
      },
    });

    return NextResponse.json(camera);
  } catch (error) {
    console.error('Failed to create camera:', error);
    return NextResponse.json({ error: 'Failed to create camera' }, { status: 500 });
  }
}
