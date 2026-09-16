import { NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import crypto from 'crypto';

/** How old a signed payload may be before it is treated as a replay. */
const MAX_AGE_MS = 10 * 60 * 1000;

/** The parts of a payload this route reads. Everything else is ignored. */
const webhookSchema = z
  .object({
    type: z.string().max(100).optional(),
    locationId: z.string().trim().max(200).optional(),
    contact: z.object({ id: z.string().max(200).optional() }).passthrough().optional(),
    opportunity: z.object({ id: z.string().max(200).optional() }).passthrough().optional(),
    timestamp: z.union([z.string().max(100), z.number()]).optional(),
  })
  .passthrough();

/**
 * When the payload says it was sent, in epoch milliseconds; null when it does
 * not say, and 'invalid' when it says something that is not a time.
 */
function timestampOf(data: { timestamp?: string | number }): number | null | 'invalid' {
  const raw = data.timestamp;
  if (raw === undefined || raw === '') return null;
  let ms: number;
  if (typeof raw === 'number' || /^\d+$/.test(raw)) {
    const n = Number(raw);
    // Seconds or milliseconds, whichever the sender used.
    ms = n < 1e12 ? n * 1000 : n;
  } else {
    ms = Date.parse(raw);
  }
  return Number.isFinite(ms) ? ms : 'invalid';
}

/**
 * Verifies the webhook signature from GoHighLevel
 * The signature is an HMAC SHA256 hash of the request body
 */
function verifyWebhookSignature(signature: string | null, body: string): boolean {
  const webhookSecret = process.env.GOHIGHLEVEL_WEBHOOK_SECRET;

  // Unconfigured is fatal in production and permitted only locally.
  //
  // This used to return true either way, so a deployment with the variable
  // unset accepted anything posted to the URL as though GoHighLevel had signed
  // it. Development keeps the old behaviour, because a tunnel with no secret is
  // how the endpoint gets tested at all - and says so, loudly, each time.
  if (!webhookSecret) {
    if (process.env.NODE_ENV === 'production') {
      console.error(
        'GOHIGHLEVEL_WEBHOOK_SECRET is not set. Webhooks are being rejected ' +
        'rather than trusted unsigned. Set it to accept them.'
      );
      return false;
    }
    console.warn('GOHIGHLEVEL_WEBHOOK_SECRET not set - accepting unsigned webhooks (development only)');
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

    // Parse the JSON body. A malformed one is the sender's fault and is said
    // to be, rather than acknowledged as though it had been handled.
    let parsed: unknown;
    try {
      parsed = JSON.parse(body);
    } catch {
      return NextResponse.json({ error: 'Malformed JSON' }, { status: 400 });
    }
    const payload = webhookSchema.safeParse(parsed);
    if (!payload.success) {
      return NextResponse.json({ error: 'Unrecognised payload' }, { status: 400 });
    }
    const data = payload.data;

    // Log webhook for debugging (redact sensitive data in production)
    if (process.env.NODE_ENV === 'development') {
      console.log('CRM Webhook received:', JSON.stringify(data, null, 2));
    }

    // A signed payload replayed long after it was sent is refused, when the
    // payload says when it was sent.
    const sentAt = timestampOf(data);
    if (sentAt === 'invalid') {
      return NextResponse.json({ error: 'Invalid timestamp' }, { status: 400 });
    }
    if (sentAt !== null && Math.abs(Date.now() - sentAt) > MAX_AGE_MS) {
      return NextResponse.json({ error: 'Webhook is too old' }, { status: 400 });
    }

    const { type, locationId, contact, opportunity } = data;

    // A payload that names no location belongs to nobody; never look one up
    // with an empty or missing id, which would match whichever came first.
    if (!locationId) {
      return NextResponse.json({ error: 'locationId is required' }, { status: 400 });
    }

    const settings = await prisma.integrationSettings.findFirst({
      where: { locationId },
      select: { id: true },
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
