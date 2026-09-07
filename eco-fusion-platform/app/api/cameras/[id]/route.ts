import { NextResponse } from 'next/server';
import { getOrgContext } from '@/lib/tenancy';
import { prisma } from '@/lib/prisma';

// GET - Fetch a single camera
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const ctx = await getOrgContext();
    if (!ctx) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;

    const camera = await prisma.camera.findFirst({
      where: {
        id,
        organizationId: ctx.organizationId,
      },
      include: {
        zone: {
          select: { id: true, name: true, type: true },
        },
      },
    });

    if (!camera) {
      return NextResponse.json({ error: 'Camera not found' }, { status: 404 });
    }

    return NextResponse.json(camera);
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
    const ctx = await getOrgContext();
    if (!ctx) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    const data = await request.json();
    const {
      name,
      location,
      zoneId,
      connectionType,
      rtspUrl,
      protocol,
      brand,
      model,
      status,
      isEnabled,
      sortOrder,
    } = data;

    // Verify camera belongs to user
    const existingCamera = await prisma.camera.findFirst({
      where: {
        id,
        organizationId: ctx.organizationId,
      },
    });

    if (!existingCamera) {
      return NextResponse.json({ error: 'Camera not found' }, { status: 404 });
    }

    // Validate zoneId if provided
    if (zoneId !== undefined && zoneId !== null) {
      const zone = await prisma.zone.findFirst({
        where: { id: zoneId, organizationId: ctx.organizationId },
      });
      if (!zone) {
        return NextResponse.json({ error: 'Zone not found' }, { status: 404 });
      }
    }

    const camera = await prisma.camera.update({
      where: { id },
      data: {
        name: name !== undefined ? name : undefined,
        location: location !== undefined ? location : undefined,
        zoneId: zoneId !== undefined ? zoneId : undefined,
        connectionType: connectionType !== undefined ? connectionType : undefined,
        rtspUrl: rtspUrl !== undefined ? rtspUrl : undefined,
        protocol: protocol !== undefined ? protocol : undefined,
        brand: brand !== undefined ? brand : undefined,
        model: model !== undefined ? model : undefined,
        status: status !== undefined ? status : undefined,
        isEnabled: isEnabled !== undefined ? isEnabled : undefined,
        sortOrder: sortOrder !== undefined ? sortOrder : undefined,
        lastOnline: status === 'online' ? new Date() : undefined,
      },
      include: {
        zone: {
          select: { id: true, name: true, type: true },
        },
      },
    });

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
    const ctx = await getOrgContext();
    if (!ctx) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;

    // Verify camera belongs to user
    const existingCamera = await prisma.camera.findFirst({
      where: {
        id,
        organizationId: ctx.organizationId,
      },
    });

    if (!existingCamera) {
      return NextResponse.json({ error: 'Camera not found' }, { status: 404 });
    }

    await prisma.camera.delete({ where: { id } });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to delete camera:', error);
    return NextResponse.json({ error: 'Failed to delete camera' }, { status: 500 });
  }
}
