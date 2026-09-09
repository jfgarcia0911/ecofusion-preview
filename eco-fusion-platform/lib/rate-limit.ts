/**
 * Rate limiting for the API.
 *
 * Backed by Upstash Redis when it is configured, and by an in-memory map when
 * it is not. The difference matters more than it looks: this app runs on
 * serverless instances, and an in-memory counter is per-instance and dies with
 * it. Five sign-in attempts a minute became five per instance per deploy, which
 * for the one limit standing between an attacker and a password is no limit at
 * all.
 *
 * The fallback exists so local development needs no account, and so a missing
 * variable degrades rather than takes the site down. It says so, once, rather
 * than failing silently the way the old one did.
 *
 * Edge-compatible: Upstash speaks HTTP, so this works in middleware.
 */

import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

export interface RateLimitConfig {
  /** Time window in milliseconds. */
  interval: number;
  maxRequests: number;
}

export interface RateLimitResult {
  success: boolean;
  limit: number;
  remaining: number;
  resetTime: number;
}

export const RATE_LIMITS = {
  /** Sign-in and registration: the only wall in front of a password. */
  auth: { interval: 60 * 1000, maxRequests: 5 },
  api: { interval: 60 * 1000, maxRequests: 100 },
  /** Signed payloads from somebody else's server, which arrive in bursts. */
  webhook: { interval: 60 * 1000, maxRequests: 1000 },
  strict: { interval: 60 * 1000, maxRequests: 3 },
} as const;

// --- shared store, when there is one ----------------------------------------

const isConfigured = Boolean(
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
);

let warned = false;

function warnOnce() {
  if (warned || isConfigured) return;
  warned = true;
  const message =
    'UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN are not set. Rate limits ' +
    'are counted per instance and reset on deploy, so they do not hold.';
  if (process.env.NODE_ENV === 'production') console.error(message);
  else console.warn(message);
}

const redis = isConfigured ? Redis.fromEnv() : null;

/** One limiter per window, made on first use and reused after. */
const limiters = new Map<string, Ratelimit>();

function limiterFor(config: RateLimitConfig): Ratelimit | null {
  if (!redis) return null;
  const key = `${config.maxRequests}/${config.interval}`;
  const existing = limiters.get(key);
  if (existing) return existing;

  const made = new Ratelimit({
    redis,
    // Sliding rather than fixed: a fixed window lets somebody spend the whole
    // allowance at the end of one window and again at the start of the next.
    limiter: Ratelimit.slidingWindow(config.maxRequests, `${config.interval} ms`),
    prefix: `ecofusion:rl:${key}`,
    analytics: false,
  });
  limiters.set(key, made);
  return made;
}

// --- the fallback -----------------------------------------------------------

const memory = new Map<string, RateLimitEntry>();

function cleanup() {
  if (memory.size <= 10_000) return;
  const now = Date.now();
  for (const [key, entry] of memory.entries()) {
    if (entry.resetTime < now) memory.delete(key);
  }
}

function checkInMemory(identifier: string, config: RateLimitConfig): RateLimitResult {
  cleanup();
  const now = Date.now();
  let entry = memory.get(identifier);

  if (!entry || entry.resetTime < now) {
    entry = { count: 1, resetTime: now + config.interval };
    memory.set(identifier, entry);
    return {
      success: true,
      limit: config.maxRequests,
      remaining: config.maxRequests - 1,
      resetTime: entry.resetTime,
    };
  }

  entry.count += 1;
  return {
    success: entry.count <= config.maxRequests,
    limit: config.maxRequests,
    remaining: Math.max(0, config.maxRequests - entry.count),
    resetTime: entry.resetTime,
  };
}

// --- what callers use -------------------------------------------------------

/**
 * Whether this request is allowed through.
 *
 * Async because the shared store is over the network. A failure to reach it
 * lets the request past rather than locking everybody out: a rate limiter that
 * takes the site down when Redis blinks has traded one outage for a worse one.
 */
export async function checkRateLimit(
  identifier: string,
  config: RateLimitConfig = RATE_LIMITS.api
): Promise<RateLimitResult> {
  warnOnce();

  const limiter = limiterFor(config);
  if (!limiter) return checkInMemory(identifier, config);

  try {
    const { success, limit, remaining, reset } = await limiter.limit(identifier);
    return { success, limit, remaining, resetTime: reset };
  } catch (error) {
    console.error('[rate-limit] shared store unreachable, letting the request through:', error);
    return {
      success: true,
      limit: config.maxRequests,
      remaining: config.maxRequests,
      resetTime: Date.now() + config.interval,
    };
  }
}

/**
 * Who is being counted.
 *
 * The client's address, from whichever header the host in front of us sets.
 * Prefixed by route group, so exhausting the sign-in allowance does not also
 * lock somebody out of the rest of the app.
 */
export function getRateLimitIdentifier(request: Request, prefix: string = ''): string {
  const headers = request.headers;
  const ip =
    headers.get('cf-connecting-ip') ||
    headers.get('x-real-ip') ||
    headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    'unknown';

  return prefix ? `${prefix}:${ip}` : ip;
}

export function getRateLimitHeaders(result: RateLimitResult): Record<string, string> {
  return {
    'X-RateLimit-Limit': result.limit.toString(),
    'X-RateLimit-Remaining': result.remaining.toString(),
    'X-RateLimit-Reset': Math.ceil(result.resetTime / 1000).toString(),
  };
}

/** Which window a path falls into. */
export function getRateLimitConfig(pathname: string): RateLimitConfig {
  if (pathname.startsWith('/api/auth')) return RATE_LIMITS.auth;
  if (pathname.includes('/webhook')) return RATE_LIMITS.webhook;
  return RATE_LIMITS.api;
}
