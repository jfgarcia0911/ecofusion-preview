/**
 * Organization scoping for API routes.
 *
 * Farm data belongs to an organization, not to the person who typed it in, so
 * every query filters on `organizationId`. `userId` is still written on create
 * to record who entered a row, but it must never be what a read is scoped by.
 * That is what kept a farm's own manager from seeing the farm's data.
 */

import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';
import { DEFAULT_BUSINESS_UNITS } from '@/lib/business-units';

/** Days a new farm may use the platform before it has to subscribe. */
export const TRIAL_DAYS = 15;

export interface OrgAccess {
  /** Whether the organization may use the app right now. */
  allowed: boolean;
  status: string;
  /** Whole days remaining in the trial; negative once it has lapsed. */
  daysLeft: number | null;
  /**
   * When the trial runs out, as epoch milliseconds so it survives the trip to
   * a client component. Null when the farm never had a trial.
   */
  trialEndsAt: number | null;
  reason: 'trialing' | 'active' | 'trial_expired' | 'canceled' | 'past_due';
}

export interface OrgContext {
  userId: string;
  organizationId: string;
  /** Role within this organization: owner | admin | manager | member. */
  role: string;
  access: OrgAccess;
}

/**
 * Whether a farm may use the app, and why.
 *
 * Decided entirely from the organization, so every member, including accounts
 * the owner created, is admitted or refused together.
 */
export function evaluateAccess(org: {
  subscriptionStatus: string;
  trialEndsAt: Date | null;
  currentPeriodEnd: Date | null;
}): OrgAccess {
  const now = Date.now();
  const trialEndsAt = org.trialEndsAt?.getTime() ?? null;
  const daysLeft = trialEndsAt !== null ? Math.ceil((trialEndsAt - now) / 86_400_000) : null;

  if (org.subscriptionStatus === 'active') {
    const lapsed = org.currentPeriodEnd && org.currentPeriodEnd.getTime() < now;
    return lapsed
      ? { allowed: false, status: org.subscriptionStatus, daysLeft, trialEndsAt, reason: 'past_due' }
      : { allowed: true, status: org.subscriptionStatus, daysLeft, trialEndsAt, reason: 'active' };
  }

  if (org.subscriptionStatus === 'trialing') {
    const live = org.trialEndsAt !== null && org.trialEndsAt.getTime() > now;
    return {
      allowed: live,
      status: org.subscriptionStatus,
      daysLeft,
      trialEndsAt,
      reason: live ? 'trialing' : 'trial_expired',
    };
  }

  // canceled, past_due, or anything unrecognised: no access.
  return {
    allowed: false,
    status: org.subscriptionStatus,
    daysLeft,
    trialEndsAt,
    reason: org.subscriptionStatus === 'past_due' ? 'past_due' : 'canceled',
  };
}

/** Roles allowed to administer an organization rather than just work in it. */
export function canAdminister(ctx: OrgContext): boolean {
  return ctx.role === 'owner' || ctx.role === 'admin' || ctx.role === 'manager';
}

/**
 * Roles allowed to change who reaches the farm and how it connects to other
 * systems: adding and removing people, resetting their passwords, setting
 * their roles, and holding the integration credentials.
 *
 * Narrower than `canAdminister` on purpose. A manager runs the working week;
 * deciding who has a login, and what an outside system may do with the farm's
 * data, belongs with the people answerable for the farm itself.
 */
export function canManageMembers(ctx: OrgContext): boolean {
  return ctx.role === 'owner' || ctx.role === 'admin';
}

/**
 * The signed-in user's organization, or null when there is no session.
 *
 * Reads from the token where possible. Sessions issued before organizations
 * existed carry no organizationId, so those fall back to a membership lookup
 * rather than logging everyone out.
 */
export async function getOrgContext(): Promise<OrgContext | null> {
  const session = await auth();
  if (!session?.user?.id) return null;

  const membership = await prisma.membership.findFirst({
    where: session.user.organizationId
      ? { userId: session.user.id, organizationId: session.user.organizationId }
      : { userId: session.user.id },
    orderBy: { createdAt: 'asc' },
    select: {
      organizationId: true,
      role: true,
      organization: {
        select: { subscriptionStatus: true, trialEndsAt: true, currentPeriodEnd: true },
      },
    },
  });
  if (!membership) return null;

  return {
    userId: session.user.id,
    organizationId: membership.organizationId,
    role: membership.role,
    access: evaluateAccess(membership.organization),
  };
}

/**
 * Context for a farm that is allowed to use the app, or null.
 *
 * Routes that change data should use this so a lapsed farm becomes read-only
 * rather than continuing to accumulate records it cannot see.
 */
export async function getActiveOrgContext(): Promise<OrgContext | null> {
  const ctx = await getOrgContext();
  return ctx && ctx.access.allowed ? ctx : null;
}

/** Whether `userId` belongs to the caller's organization. */
export async function isSameOrganization(ctx: OrgContext, userId: string): Promise<boolean> {
  if (userId === ctx.userId) return true;
  const membership = await prisma.membership.findUnique({
    where: { userId_organizationId: { userId, organizationId: ctx.organizationId } },
    select: { id: true },
  });
  return membership !== null;
}

/**
 * Give a new account its own farm.
 *
 * Every user needs an organization or nothing they do has an owner and every
 * request fails authorization. Called when an account is first created, by
 * either sign-in route. Idempotent, so a retry or a race cannot produce two
 * farms for one person.
 */
export async function ensurePersonalOrganization(
  userId: string,
  name?: string | null,
  email?: string | null
): Promise<string> {
  const existing = await prisma.membership.findFirst({
    where: { userId },
    orderBy: { createdAt: 'asc' },
    select: { organizationId: true },
  });
  if (existing) return existing.organizationId;

  const label = name?.trim() || email?.split('@')[0] || 'My';
  const organizationId = `org_${userId}`;

  await prisma.$transaction([
    prisma.organization.create({
      data: {
        id: organizationId,
        name: `${label} Farm`,
        slug: `farm-${userId.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()}`,
        subscriptionStatus: 'trialing',
        trialEndsAt: new Date(Date.now() + TRIAL_DAYS * 86_400_000),
      },
    }),
    prisma.membership.create({
      data: { userId, organizationId, role: 'owner' },
    }),
    prisma.businessUnit.createMany({
      data: DEFAULT_BUSINESS_UNITS.map((unit, index) => ({
        organizationId,
        ...unit,
        sortOrder: index + 1,
      })),
    }),
  ]);

  return organizationId;
}
