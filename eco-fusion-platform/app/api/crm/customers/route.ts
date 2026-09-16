import { NextResponse } from 'next/server';
import { z } from 'zod';
import { activeOrg } from '@/lib/api-access';
import { prisma } from '@/lib/prisma';
import { decryptStoredKey } from '@/lib/encryption';
import { readJson, readQuery } from '@/lib/validation/request';
import { optionalText } from '@/lib/validation/fields';

const searchQuery = z.object({
  query: z.string().trim().max(100).optional(),
  limit: z.coerce.number().int().min(1).max(100).catch(20),
});

const contactSchema = z
  .object({
    name: optionalText(120),
    email: z.preprocess(
      (value) => (typeof value === 'string' && value.trim() === '' ? undefined : value),
      z.string().trim().max(254).email('must be an email address').optional()
    ),
    phone: optionalText(40),
    company: optionalText(160),
    tags: z.array(z.string().trim().min(1).max(60)).max(20).optional(),
  })
  .refine((c) => Boolean(c.email || c.phone), {
    message: 'Email or phone is required',
    path: ['email'],
  });

/** The business's CRM connection, or the answer to send when there is none. */
async function crmConnection(organizationId: string) {
  const settings = await prisma.integrationSettings.findUnique({
    where: { organizationId },
    select: { apiKey: true, isEnabled: true, locationId: true },
  });
  if (!settings?.apiKey || !settings.isEnabled) return null;
  return { apiKey: decryptStoredKey(settings.apiKey), locationId: settings.locationId };
}

// GET - Search/fetch CRM contacts
export async function GET(request: Request) {
  try {
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;

    const query = readQuery(request, searchQuery);
    if (!query.ok) return query.response;

    const crm = await crmConnection(ctx.organizationId);
    if (!crm) {
      return NextResponse.json({ error: 'CRM integration not configured' }, { status: 400 });
    }

    try {
      // Search contacts in GoHighLevel
      const searchUrl = new URL('https://rest.gohighlevel.com/v1/contacts/');
      if (crm.locationId) searchUrl.searchParams.set('locationId', crm.locationId);
      if (query.data.query) searchUrl.searchParams.set('query', query.data.query);
      searchUrl.searchParams.set('limit', String(query.data.limit));

      const response = await fetch(searchUrl.toString(), {
        headers: {
          'Authorization': `Bearer ${crm.apiKey}`,
        },
        signal: AbortSignal.timeout(15_000),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('GoHighLevel API error:', response.status, errorText.slice(0, 500));
        return NextResponse.json({ error: 'Failed to fetch contacts from CRM' }, { status: 502 });
      }

      const data = await response.json();

      // Transform contacts for our use
      const contacts = (Array.isArray(data.contacts) ? data.contacts : []).map((contact: {
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
      return NextResponse.json({ error: 'Failed to connect to CRM' }, { status: 502 });
    }
  } catch (error) {
    console.error('Failed to fetch CRM customers:', error);
    return NextResponse.json({ error: 'Failed to fetch customers' }, { status: 500 });
  }
}

// POST - Create a new contact in CRM
export async function POST(request: Request) {
  try {
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;

    const body = await readJson(request, contactSchema);
    if (!body.ok) return body.response;
    const input = body.data;

    const crm = await crmConnection(ctx.organizationId);
    if (!crm) {
      return NextResponse.json({ error: 'CRM integration not configured' }, { status: 400 });
    }

    // Parse name into first/last
    const nameParts = (input.name ?? '').split(/\s+/).filter(Boolean);
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    try {
      // Built field by field: only these reach the CRM.
      const contactData = {
        firstName,
        lastName,
        email: input.email,
        phone: input.phone ?? undefined,
        companyName: input.company ?? undefined,
        tags: input.tags ?? [],
        locationId: crm.locationId,
      };

      const response = await fetch('https://rest.gohighlevel.com/v1/contacts/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${crm.apiKey}`,
        },
        body: JSON.stringify(contactData),
        signal: AbortSignal.timeout(15_000),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('GoHighLevel API error:', response.status, errorText.slice(0, 500));
        return NextResponse.json({ error: 'Failed to create contact in CRM' }, { status: 502 });
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
      return NextResponse.json({ error: 'Failed to connect to CRM' }, { status: 502 });
    }
  } catch (error) {
    console.error('Failed to create CRM customer:', error);
    return NextResponse.json({ error: 'Failed to create customer' }, { status: 500 });
  }
}
