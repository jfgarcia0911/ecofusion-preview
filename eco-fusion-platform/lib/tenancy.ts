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
import {
  currentStaffOrganizationId,
  isPlatformAdmin,
  logStaffWriteIfAny,
} from '@/lib/staff';
import { applySnapshot, defaultSnapshot, startingBusinessUnits } from '@/lib/snapshots';

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
  /**
   * True when this is EcoFusion staff working inside a farm they are not a
   * member of. The interface says so while it lasts, and a lapsed farm still
   * opens, since needing repair is usually why staff are there.
   */
  isStaff: boolean;
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

  // Staff work inside a farm chosen deliberately, not one they belong to, so
  // that choice is resolved before membership is consulted at all.
  const staffContext = await resolveStaffContext(session.user.id);
  if (staffContext) return staffContext;

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
    isStaff: false,
  };
}

/**
 * The farm a staff member has stepped into, or null.
 *
 * Returns null for everyone else, including an account that presents the
 * cookie without the role to back it: the claim is checked against the
 * database on every request that makes it, so withdrawing staff access takes
 * effect at once rather than whenever a token happens to be refreshed.
 *
 * Staff act with an admin's powers. Not an owner's - ownership and billing
 * stay with the person who pays, and the guards in the member routes already
 * turn away anyone who is not them.
 */
async function resolveStaffContext(userId: string): Promise<OrgContext | null> {
  const organizationId = await currentStaffOrganizationId();
  if (!organizationId) return null;

  if (!(await isPlatformAdmin(userId))) return null;

  const organization = await prisma.organization.findUnique({
    where: { id: organizationId },
    select: { subscriptionStatus: true, trialEndsAt: true, currentPeriodEnd: true },
  });
  if (!organization) return null;

  await logStaffWriteIfAny(userId, organizationId);

  return {
    userId,
    organizationId,
    role: 'admin',
    access: evaluateAccess(organization),
    isStaff: true,
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
  if (!ctx) return null;
  // A lapsed farm is one of the reasons staff are called in, so it opens for
  // them. It stays shut for everyone who belongs to it.
  return ctx.access.allowed || ctx.isStaff ? ctx : null;
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

/** A business name that is safe to put in a URL, and unlike any other. */
function slugify(name: string, seed: string): string {
  const base = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 40);
  // The suffix is what makes it unique. Two businesses may legitimately share
  // a name - two branches of the same operation - and neither should be the
  // one that fails to be created.
  return `${base || 'business'}-${seed.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().slice(-8)}`;
}

/**
 * Create a business and hand it to its owner.
 *
 * The single place a business comes into existence, whether someone signed
 * themselves up or EcoFusion staff set them up. Both routes must produce the
 * same thing: a trial, an owner, the starting business units, and whatever
 * the default snapshot carries.
 */
export async function provisionOrganization(options: {
  ownerUserId: string;
  /** Shown everywhere. Defaults to the owner's name or email. */
  name: string;
  /** Fixed id, for the personal business whose id is derived from the user. */
  organizationId?: string;
}): Promise<string> {
  const { ownerUserId, name } = options;
  const organizationId = options.organizationId ?? `org_${ownerUserId}`;

  // Read before the transaction, so the business's opening configuration is
  // settled by the time anything is written.
  const template = await defaultSnapshot();
  const businessUnits = await startingBusinessUnits();

  await prisma.$transaction([
    prisma.organization.create({
      data: {
        id: organizationId,
        name,
        slug: slugify(name, organizationId),
        subscriptionStatus: 'trialing',
        trialEndsAt: new Date(Date.now() + TRIAL_DAYS * 86_400_000),
      },
    }),
    prisma.membership.create({
      data: { userId: ownerUserId, organizationId, role: 'owner' },
    }),
    prisma.businessUnit.createMany({
      data: businessUnits.map((unit) => ({ ...unit, organizationId })),
    }),
  ]);

  // The rest of the template - zones, growing parameters, which classes the
  // business carries. Outside the transaction because a business that exists
  // with a thin setup is a better outcome than a signup that failed on its
  // scenery.
  if (template) {
    try {
      await applySnapshot(template, organizationId, ownerUserId);
    } catch (error) {
      console.error('[snapshots] could not apply the default to a new business:', error);
    }
  }

  return organizationId;
}

/**
 * Give a new account its own business.
 *
 * Every user needs an organization or nothing they do has an owner and every
 * request fails authorization. Called when an account is first created, by
 * either sign-in route. Idempotent, so a retry or a race cannot produce two
 * businesses for one person.
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
  return provisionOrganization({
    ownerUserId: userId,
    name: `${label} Business`,
    // Derived from the user, so a second attempt collides rather than
    // quietly producing a second business for the same person.
    organizationId: `org_${userId}`,
  });
}
