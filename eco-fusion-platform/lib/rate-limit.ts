/**
 * Rate limiting module for API protection
 * Uses an in-memory store. For production with multiple instances, use Redis/Upstash.
 * This implementation is Edge-compatible.
 */

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

interface RateLimitConfig {
  interval: number; // Time window in milliseconds
  maxRequests: number; // Maximum requests per interval
}

// In-memory store for rate limiting
// Note: This won't persist across serverless invocations in production
// For production, use Redis/Upstash or Vercel KV
const rateLimitStore = new Map<string, RateLimitEntry>();

// Clean up old entries when map gets too large
function cleanupStore() {
  if (rateLimitStore.size > 10000) {
    const now = Date.now();
    for (const [key, entry] of rateLimitStore.entries()) {
      if (entry.resetTime < now) {
        rateLimitStore.delete(key);
      }
    }
  }
}

// Default rate limit configurations
export const RATE_LIMITS = {
  // Authentication endpoints: 5 requests per minute
  auth: {
    interval: 60 * 1000,
    maxRequests: 5,
  },
  // General API endpoints: 100 requests per minute
  api: {
    interval: 60 * 1000,
    maxRequests: 100,
  },
  // Webhooks: 1000 requests per minute
  webhook: {
    interval: 60 * 1000,
    maxRequests: 1000,
  },
  // Strict rate limit for sensitive operations: 3 per minute
  strict: {
    interval: 60 * 1000,
    maxRequests: 3,
  },
} as const;

export interface RateLimitResult {
  success: boolean;
  limit: number;
  remaining: number;
  resetTime: number;
}

/**
 * Check if a request should be rate limited
 * @param identifier Unique identifier (IP address or user ID)
 * @param config Rate limit configuration
 * @returns Rate limit result
 */
export function checkRateLimit(
  identifier: string,
  config: RateLimitConfig = RATE_LIMITS.api
): RateLimitResult {
  // Clean up old entries periodically
  cleanupStore();

  const now = Date.now();
  const key = identifier;

  let entry = rateLimitStore.get(key);

  // If no entry exists or the window has expired, create a new one
  if (!entry || entry.resetTime < now) {
    entry = {
      count: 1,
      resetTime: now + config.interval,
    };
    rateLimitStore.set(key, entry);

    return {
      success: true,
      limit: config.maxRequests,
      remaining: config.maxRequests - 1,
      resetTime: entry.resetTime,
    };
  }

  // Increment the count
  entry.count += 1;

  // Check if limit exceeded
  if (entry.count > config.maxRequests) {
    return {
      success: false,
      limit: config.maxRequests,
      remaining: 0,
      resetTime: entry.resetTime,
    };
  }

  return {
    success: true,
    limit: config.maxRequests,
    remaining: config.maxRequests - entry.count,
    resetTime: entry.resetTime,
  };
}

/**
 * Get the identifier for rate limiting from a request
 * Uses IP address or falls back to a default key
 */
export function getRateLimitIdentifier(request: Request, prefix: string = ''): string {
  // Try to get IP from various headers
  const forwardedFor = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');
  const cfConnectingIp = request.headers.get('cf-connecting-ip');

  const ip = cfConnectingIp || realIp || forwardedFor?.split(',')[0]?.trim() || 'unknown';

  return prefix ? `${prefix}:${ip}` : ip;
}

/**
 * Get rate limit headers for response
 */
export function getRateLimitHeaders(result: RateLimitResult): Record<string, string> {
  return {
    'X-RateLimit-Limit': result.limit.toString(),
    'X-RateLimit-Remaining': result.remaining.toString(),
    'X-RateLimit-Reset': Math.ceil(result.resetTime / 1000).toString(),
  };
}

/**
 * Determine the rate limit config based on the URL path
 */
export function getRateLimitConfig(pathname: string): RateLimitConfig {
  // Auth endpoints
  if (pathname.startsWith('/api/auth')) {
    return RATE_LIMITS.auth;
  }

  // Webhook endpoints
  if (pathname.includes('/webhook')) {
    return RATE_LIMITS.webhook;
  }

  // Default API rate limit
  return RATE_LIMITS.api;
}
