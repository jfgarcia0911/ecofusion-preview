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

const { auth } = NextAuth(authConfig);

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Apply rate limiting to API routes
  if (pathname.startsWith('/api')) {
    const identifier = getRateLimitIdentifier(request, pathname);
    const config = getRateLimitConfig(pathname);
    const rateLimitResult = checkRateLimit(identifier, config);

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

    // Add rate limit headers to successful requests
    const response = NextResponse.next();
    const headers = getRateLimitHeaders(rateLimitResult);
    Object.entries(headers).forEach(([key, value]) => {
      response.headers.set(key, value);
    });

    return response;
  }

  // For non-API routes, apply authentication middleware
  return auth(request as any);
}

export const config = {
  // Match all routes except static files
  matcher: [
    '/((?!_next/static|_next/image|.*\\.png$|.*\\.svg$|favicon\\.ico).*)',
  ],
};
