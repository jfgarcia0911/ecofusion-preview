import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// POST - Receive webhooks from GoHighLevel
export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Log webhook for debugging
    console.log('CRM Webhook received:', JSON.stringify(data, null, 2));

    const { type, locationId, contact, opportunity } = data;

    // Find user by locationId
    const settings = await prisma.integrationSettings.findFirst({
      where: { locationId },
    });

    if (!settings) {
      // Location not registered, ignore webhook
      return NextResponse.json({ received: true, processed: false });
    }

    switch (type) {
      case 'ContactCreate':
      case 'ContactUpdate':
        // Could update local cache of contacts if needed
        console.log(`Contact ${type}:`, contact?.id);
        break;

      case 'OpportunityCreate':
      case 'OpportunityUpdate':
        // Could track opportunities/sales pipeline
        console.log(`Opportunity ${type}:`, opportunity?.id);
        break;

      case 'ContactDelete':
        // Could clean up any local references
        console.log('Contact deleted:', contact?.id);
        break;

      default:
        console.log('Unknown webhook type:', type);
    }

    return NextResponse.json({ received: true, processed: true });
  } catch (error) {
    console.error('Webhook processing failed:', error);
    // Return 200 to prevent retries for bad data
    return NextResponse.json({ received: true, error: 'Processing failed' });
  }
}

// GET - Verify webhook endpoint (for setup)
export async function GET() {
  return NextResponse.json({
    status: 'active',
    endpoint: '/api/crm/webhook',
    supportedEvents: [
      'ContactCreate',
      'ContactUpdate',
      'ContactDelete',
      'OpportunityCreate',
      'OpportunityUpdate',
    ],
  });
}
