/**
 * A business's record of its own people.
 *
 * The counterpart to lib/staff: that one records EcoFusion going into somebody
 * else's business, this one records the business's own members working in it.
 * Kept apart because an owner reading the two is asking different questions -
 * "who from the platform has been in here" and "what has my team been doing".
 *
 * Never throws. A failed write must not turn into a failed request for the
 * person who was only trying to record a sale, but it must be visible, so it
 * goes to the server log instead.
 */

import { headers } from 'next/headers';
import { prisma } from '@/lib/prisma';

type Action = 'signin' | 'write';

async function record(
  organizationId: string,
  userId: string | null,
  action: Action,
  detail?: { method?: string | null; path?: string | null }
): Promise<void> {
  try {
    await prisma.activityLog.create({
      data: {
        organizationId,
        userId,
        action,
        method: detail?.method ?? null,
        path: detail?.path ?? null,
      },
    });
  } catch (error) {
    console.error('[activity] failed to record:', error);
  }
}

/** Requests that only read leave no trace. Reading is not an event. */
const READ_ONLY = new Set(['GET', 'HEAD', 'OPTIONS']);

/**
 * Paths whose writes are noise rather than record.
 *
 * Switching business and marking a notification read are things somebody did
 * to their own screen, not to the business. A log that carries them buries the
 * entries that matter under the ones that do not.
 */
const IGNORED = [
  '/api/organizations/active',
  '/api/notifications',
  '/api/user/onboarding',
  '/api/auth',
];

/**
 * Record a member's change, if this request is one.
 *
 * The method and path arrive as headers set by middleware, because a route
 * handler's own request object is not reachable from here. A server component
 * render carries neither and reads as a GET, which is what it is.
 */
export async function logMemberWriteIfAny(
  userId: string,
  organizationId: string
): Promise<void> {
  const head = await headers();
  const method = head.get('x-request-method');
  if (!method || READ_ONLY.has(method.toUpperCase())) return;

  const path = head.get('x-request-path');
  if (path && IGNORED.some((prefix) => path.startsWith(prefix))) return;

  await record(organizationId, userId, 'write', { method: method.toUpperCase(), path });
}

/**
 * Record that somebody signed in.
 *
 * Against the business they land in, which is the oldest of theirs. Somebody
 * who runs several signs in once and then switches, and the switch is not
 * itself worth a line.
 */
export async function logSignIn(userId: string): Promise<void> {
  try {
    const membership = await prisma.membership.findFirst({
      where: { userId },
      orderBy: { createdAt: 'asc' },
      select: { organizationId: true },
    });
    // A support account belongs to no business, so there is nothing for its
    // sign-in to be a fact about. lib/staff records what it does instead.
    if (!membership) return;

    await record(membership.organizationId, userId, 'signin');
  } catch (error) {
    console.error('[activity] failed to record a sign-in:', error);
  }
}
