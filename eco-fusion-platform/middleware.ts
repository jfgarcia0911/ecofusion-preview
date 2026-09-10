import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import {
  checkRateLimit,
  getRateLimitIdentifier,
  getRateLimitConfig,
  getRateLimitHeaders,
} from '@/lib/rate-limit';
import { MAX_BODY_BYTES, SUMMARY_HEADER, summariseBody } from '@/lib/audit-summary';

const { auth } = NextAuth(authConfig);

/** Mirrors STAFF_ORG_COOKIE in lib/staff, which cannot be imported here. */
const STAFF_ORG_COOKIE = 'ecofusion-staff-org';

/**
 * A description of this request's body, when it is a change made by an
 * EcoFusion account: inside a support session, or on the agency's own routes.
 *
 * Nobody else's writes are read here. Their trail records where a change was
 * made, which is all it ever did, and a customer's every save does not need
 * its body opened on the way through. The route still receives the body
 * untouched, because what is read is a clone.
 */
async function summariseIfPlatformWrite(
  request: NextRequest,
  pathname: string
): Promise<string | null> {
  if (['GET', 'HEAD', 'OPTIONS'].includes(request.method)) return null;
  const platform =
    pathname.startsWith('/api/admin') || request.cookies.has(STAFF_ORG_COOKIE);
  if (!platform) return null;

  try {
    const type = request.headers.get('content-type') ?? '';
    const length = Number(request.headers.get('content-length') ?? NaN);
    if (!type.includes('application/json')) {
      return type ? `${type.split(';')[0]} upload` : null;
    }
    if (!Number.isFinite(length) || length > MAX_BODY_BYTES) {
      return Number.isFinite(length) ? `${length} bytes of JSON` : null;
    }
    return summariseBody(await request.clone().text());
  } catch {
    // A description that could not be made is not a reason to refuse the
    // change; the method and path are still recorded.
    return null;
  }
}

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Apply rate limiting to API routes
  if (pathname.startsWith('/api')) {
    const identifier = getRateLimitIdentifier(request, pathname);
    const config = getRateLimitConfig(pathname);
    const rateLimitResult = await checkRateLimit(identifier, config);

    if (!rateLimitResult.success) {
      return new NextResponse(
        JSON.stringify({
          error: 'Too many requests',
          retryAfter: Math.ceil((rateLimitResult.resetTime - Date.now()) / 1000),
        }),
        {
          status: 429,
          headers: {
            'Content-Type': 'application/json',
            ...getRateLimitHeaders(rateLimitResult),
          },
        }
      );
    }

    // Carry the method and path forward so a route handler's callees can see
    // them. Nothing downstream can reach the request itself, and the staff
    // access trail needs to name the change it is recording.
    const forwarded = new Headers(request.headers);
    forwarded.set('x-request-method', request.method);
    forwarded.set('x-request-path', pathname);

    // What the change said, for the platform's trail. Only ever set here: a
    // copy arriving from the browser is dropped first, so nobody can write
    // their own description of what they did.
    forwarded.delete(SUMMARY_HEADER);
    const summary = await summariseIfPlatformWrite(request, pathname);
    if (summary) forwarded.set(SUMMARY_HEADER, encodeURIComponent(summary));

    // Add rate limit headers to successful requests
    const response = NextResponse.next({ request: { headers: forwarded } });
    const headers = getRateLimitHeaders(rateLimitResult);
    Object.entries(headers).forEach(([key, value]) => {
      response.headers.set(key, value);
    });

    return response;
  }

  // For non-API routes, apply authentication middleware.
  //
  // The cast stays. next-auth exposes `auth` for use as a wrapper,
  // auth((req) => ...), and declares no overload for being handed a request
  // directly - which is what this file needs, because rate limiting has to
  // run first and return before auth is consulted. Rewriting it into the
  // wrapper form is a change to how every request is authenticated and does
  // not belong in a security pass; NextAuthRequest was tried and the call
  // does not typecheck against any declared overload.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return auth(request as any);
}

export const config = {
  // Match all routes except static files
  matcher: [
    '/((?!_next/static|_next/image|.*\\.png$|.*\\.svg$|favicon\\.ico).*)',
  ],
};
