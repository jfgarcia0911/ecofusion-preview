import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';

// Simple encryption/decryption for API keys (in production, use proper encryption)
function encryptApiKey(key: string): string {
  // Base64 encode with a simple transformation
  return Buffer.from(key).toString('base64');
}

function decryptApiKey(encrypted: string): string {
  try {
    return Buffer.from(encrypted, 'base64').toString('utf-8');
  } catch {
    return '';
  }
}

// GET - Fetch integration settings
export async function GET() {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const settings = await prisma.integrationSettings.findUnique({
      where: { userId: session.user.id },
    });

    if (!settings) {
      return NextResponse.json({
        provider: 'gohighlevel',
        apiKey: null,
        locationId: null,
        isEnabled: false,
        lastSyncAt: null,
      });
    }

    // Mask the API key for security
    return NextResponse.json({
      ...settings,
      apiKey: settings.apiKey ? '••••••••' + settings.apiKey.slice(-4) : null,
      hasApiKey: !!settings.apiKey,
    });
  } catch (error) {
    console.error('Failed to fetch integration settings:', error);
    return NextResponse.json({ error: 'Failed to fetch settings' }, { status: 500 });
  }
}

// POST - Create or update integration settings
export async function POST(request: Request) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const data = await request.json();
    const { apiKey, locationId, isEnabled } = data;

    const updateData: {
      provider: string;
      apiKey?: string;
      locationId?: string | null;
      isEnabled?: boolean;
    } = {
      provider: 'gohighlevel',
    };

    if (apiKey && apiKey !== '••••••••') {
      updateData.apiKey = encryptApiKey(apiKey);
    }
    if (locationId !== undefined) {
      updateData.locationId = locationId || null;
    }
    if (isEnabled !== undefined) {
      updateData.isEnabled = isEnabled;
    }

    const settings = await prisma.integrationSettings.upsert({
      where: { userId: session.user.id },
      update: updateData,
      create: {
        userId: session.user.id,
        ...updateData,
      },
    });

    return NextResponse.json({
      ...settings,
      apiKey: settings.apiKey ? '••••••••' + settings.apiKey.slice(-4) : null,
      hasApiKey: !!settings.apiKey,
    });
  } catch (error) {
    console.error('Failed to update integration settings:', error);
    return NextResponse.json({ error: 'Failed to update settings' }, { status: 500 });
  }
}

// DELETE - Remove integration settings
export async function DELETE() {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await prisma.integrationSettings.delete({
      where: { userId: session.user.id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to delete integration settings:', error);
    return NextResponse.json({ error: 'Failed to delete settings' }, { status: 500 });
  }
}
