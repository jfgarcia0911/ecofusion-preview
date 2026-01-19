import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import crypto from 'crypto';

/**
 * Verifies the webhook signature from GoHighLevel
 * The signature is an HMAC SHA256 hash of the request body
 */
function verifyWebhookSignature(signature: string | null, body: string): boolean {
  const webhookSecret = process.env.GOHIGHLEVEL_WEBHOOK_SECRET;

  // If no secret is configured, log warning and allow (for development)
  if (!webhookSecret) {
    console.warn('GOHIGHLEVEL_WEBHOOK_SECRET not configured - webhook verification disabled');
    return true;
  }

  // If secret is configured but no signature provided, reject
  if (!signature) {
    return false;
  }

  const expectedSignature = crypto
    .createHmac('sha256', webhookSecret)
    .update(body)
    .digest('hex');

  // Use timing-safe comparison to prevent timing attacks
  try {
    return crypto.timingSafeEqual(
      Buffer.from(signature),
      Buffer.from(expectedSignature)
    );
  } catch {
    // Buffer lengths don't match
    return false;
  }
}

// POST - Receive webhooks from GoHighLevel
export async function POST(request: Request) {
  try {
    // Get raw body for signature verification
    const body = await request.text();

    // Verify webhook signature
    const signature = request.headers.get('x-signature') || request.headers.get('x-ghl-signature');
    if (!verifyWebhookSignature(signature, body)) {
      console.error('Webhook signature verification failed');
      return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
    }

    // Parse the JSON body
    const data = JSON.parse(body);

    // Log webhook for debugging (redact sensitive data in production)
    if (process.env.NODE_ENV === 'development') {
      console.log('CRM Webhook received:', JSON.stringify(data, null, 2));
    }

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
