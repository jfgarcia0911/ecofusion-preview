import { NextResponse } from 'next/server';
import { getOrgContext } from '@/lib/tenancy';
import { prisma } from '@/lib/prisma';

// Helper to decrypt API key
function decryptApiKey(encrypted: string): string {
  try {
    return Buffer.from(encrypted, 'base64').toString('utf-8');
  } catch {
    return '';
  }
}

// GET - Search/fetch CRM contacts
export async function GET(request: Request) {
  try {
    const ctx = await getOrgContext();
    if (!ctx) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get integration settings
    const settings = await prisma.integrationSettings.findUnique({
      where: { organizationId: ctx.organizationId },
    });

    if (!settings?.apiKey || !settings.isEnabled) {
      return NextResponse.json({ error: 'CRM integration not configured' }, { status: 400 });
    }

    const apiKey = decryptApiKey(settings.apiKey);
    const locationId = settings.locationId;

    const { searchParams } = new URL(request.url);
    const query = searchParams.get('query');
    const limit = searchParams.get('limit') || '20';

    try {
      // Search contacts in GoHighLevel
      const searchUrl = new URL('https://rest.gohighlevel.com/v1/contacts/');
      if (locationId) searchUrl.searchParams.set('locationId', locationId);
      if (query) searchUrl.searchParams.set('query', query);
      searchUrl.searchParams.set('limit', limit);

      const response = await fetch(searchUrl.toString(), {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
        },
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('GoHighLevel API error:', errorText);
        return NextResponse.json({ error: 'Failed to fetch contacts from CRM' }, { status: response.status });
      }

      const data = await response.json();

      // Transform contacts for our use
      const contacts = (data.contacts || []).map((contact: {
        id: string;
        firstName?: string;
        lastName?: string;
        email?: string;
        phone?: string;
        companyName?: string;
        tags?: string[];
        dateAdded?: string;
      }) => ({
        id: contact.id,
        name: `${contact.firstName || ''} ${contact.lastName || ''}`.trim() || 'Unknown',
        email: contact.email,
        phone: contact.phone,
        company: contact.companyName,
        tags: contact.tags || [],
        createdAt: contact.dateAdded,
      }));

      return NextResponse.json({
        contacts,
        total: data.meta?.total || contacts.length,
      });
    } catch (crmError) {
      console.error('CRM API error:', crmError);
      return NextResponse.json({ error: 'Failed to connect to CRM' }, { status: 500 });
    }
  } catch (error) {
    console.error('Failed to fetch CRM customers:', error);
    return NextResponse.json({ error: 'Failed to fetch customers' }, { status: 500 });
  }
}

// POST - Create a new contact in CRM
export async function POST(request: Request) {
  try {
    const ctx = await getOrgContext();
    if (!ctx) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get integration settings
    const settings = await prisma.integrationSettings.findUnique({
      where: { organizationId: ctx.organizationId },
    });

    if (!settings?.apiKey || !settings.isEnabled) {
      return NextResponse.json({ error: 'CRM integration not configured' }, { status: 400 });
    }

    const apiKey = decryptApiKey(settings.apiKey);
    const locationId = settings.locationId;

    const data = await request.json();
    const { name, email, phone, company, tags } = data;

    if (!email && !phone) {
      return NextResponse.json({ error: 'Email or phone is required' }, { status: 400 });
    }

    // Parse name into first/last
    const nameParts = (name || '').split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    try {
      const contactData = {
        firstName,
        lastName,
        email,
        phone,
        companyName: company,
        tags: tags || [],
        locationId,
      };

      const response = await fetch('https://rest.gohighlevel.com/v1/contacts/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify(contactData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('GoHighLevel API error:', errorText);
        return NextResponse.json({ error: 'Failed to create contact in CRM' }, { status: response.status });
      }

      const result = await response.json();
      const contact = result.contact || result;

      return NextResponse.json({
        id: contact.id,
        name: `${contact.firstName || ''} ${contact.lastName || ''}`.trim(),
        email: contact.email,
        phone: contact.phone,
      });
    } catch (crmError) {
      console.error('CRM API error:', crmError);
      return NextResponse.json({ error: 'Failed to connect to CRM' }, { status: 500 });
    }
  } catch (error) {
    console.error('Failed to create CRM customer:', error);
    return NextResponse.json({ error: 'Failed to create customer' }, { status: 500 });
  }
}
