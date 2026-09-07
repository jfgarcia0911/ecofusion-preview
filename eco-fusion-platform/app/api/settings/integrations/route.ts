import { NextResponse } from 'next/server';
import { getOrgContext } from '@/lib/tenancy';
import { prisma } from '@/lib/prisma';
import { encrypt, decrypt, isEncrypted } from '@/lib/encryption';

/**
 * Encrypts an API key using AES-256-GCM
 */
function encryptApiKey(key: string): string {
  return encrypt(key);
}

/**
 * Decrypts an API key. Handles both new encrypted format and legacy base64 format.
 */
function decryptApiKey(encrypted: string): string {
  try {
    // Check if it's in the new encrypted format (iv:authTag:data)
    if (isEncrypted(encrypted)) {
      return decrypt(encrypted);
    }
    // Legacy: try base64 decode for migration purposes
    return Buffer.from(encrypted, 'base64').toString('utf-8');
  } catch {
    return '';
  }
}

// GET - Fetch integration settings
export async function GET() {
  try {
    const ctx = await getOrgContext();
    if (!ctx) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const settings = await prisma.integrationSettings.findUnique({
      where: { organizationId: ctx.organizationId },
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
    const ctx = await getOrgContext();
    if (!ctx) {
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
      where: { organizationId: ctx.organizationId },
      update: updateData,
      create: {
        userId: ctx.userId,
        organizationId: ctx.organizationId,
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
    const ctx = await getOrgContext();
    if (!ctx) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await prisma.integrationSettings.delete({
      where: { organizationId: ctx.organizationId },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to delete integration settings:', error);
    return NextResponse.json({ error: 'Failed to delete settings' }, { status: 500 });
  }
}
