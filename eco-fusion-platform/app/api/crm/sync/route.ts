import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';

// Helper to decrypt API key
function decryptApiKey(encrypted: string): string {
  try {
    return Buffer.from(encrypted, 'base64').toString('utf-8');
  } catch {
    return '';
  }
}

// POST - Sync sales to CRM
export async function POST(request: Request) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get integration settings
    const settings = await prisma.integrationSettings.findUnique({
      where: { userId: session.user.id },
    });

    if (!settings?.apiKey || !settings.isEnabled) {
      return NextResponse.json({ error: 'CRM integration not configured' }, { status: 400 });
    }

    const apiKey = decryptApiKey(settings.apiKey);
    const locationId = settings.locationId;

    const data = await request.json();
    const { type, saleId } = data;

    if (type === 'sale' && saleId) {
      // Sync a specific sale
      const sale = await prisma.sale.findUnique({
        where: { id: saleId },
        include: { items: true },
      });

      if (!sale || sale.userId !== session.user.id) {
        return NextResponse.json({ error: 'Sale not found' }, { status: 404 });
      }

      // Create or update contact in GoHighLevel
      if (sale.customerEmail || sale.customerPhone) {
        try {
          const contactData = {
            email: sale.customerEmail,
            phone: sale.customerPhone,
            name: sale.customerName,
            locationId,
            customFields: [
              {
                key: 'last_purchase_date',
                value: sale.saleDate.toISOString(),
              },
              {
                key: 'last_purchase_amount',
                value: sale.total.toString(),
              },
            ],
          };

          // Make API call to GoHighLevel
          const contactResponse = await fetch('https://rest.gohighlevel.com/v1/contacts/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${apiKey}`,
            },
            body: JSON.stringify(contactData),
          });

          if (contactResponse.ok) {
            const contact = await contactResponse.json();

            // Update sale with CRM customer ID
            await prisma.sale.update({
              where: { id: saleId },
              data: {
                crmCustomerId: contact.contact?.id || contact.id,
                crmSynced: true,
                crmSyncedAt: new Date(),
              },
            });

            // Create opportunity in GoHighLevel
            const opportunityData = {
              contactId: contact.contact?.id || contact.id,
              locationId,
              name: `Sale #${sale.id.slice(-8)}`,
              status: 'won',
              monetaryValue: sale.total,
              pipelineId: data.pipelineId, // Optional - user can specify
            };

            await fetch('https://rest.gohighlevel.com/v1/opportunities/', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
              },
              body: JSON.stringify(opportunityData),
            });
          }
        } catch (crmError) {
          console.error('CRM sync error:', crmError);
          return NextResponse.json({ error: 'Failed to sync with CRM' }, { status: 500 });
        }
      }
    }

    // Update last sync time
    await prisma.integrationSettings.update({
      where: { userId: session.user.id },
      data: { lastSyncAt: new Date() },
    });

    return NextResponse.json({ success: true, syncedAt: new Date() });
  } catch (error) {
    console.error('CRM sync failed:', error);
    return NextResponse.json({ error: 'CRM sync failed' }, { status: 500 });
  }
}

// GET - Check sync status
export async function GET() {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const settings = await prisma.integrationSettings.findUnique({
      where: { userId: session.user.id },
    });

    // Get count of unsynced sales
    const unsyncedCount = await prisma.sale.count({
      where: {
        userId: session.user.id,
        crmSynced: false,
        OR: [
          { customerEmail: { not: null } },
          { customerPhone: { not: null } },
        ],
      },
    });

    return NextResponse.json({
      isConfigured: !!(settings?.apiKey && settings?.isEnabled),
      lastSyncAt: settings?.lastSyncAt || null,
      unsyncedSalesCount: unsyncedCount,
    });
  } catch (error) {
    console.error('Failed to get sync status:', error);
    return NextResponse.json({ error: 'Failed to get sync status' }, { status: 500 });
  }
}
