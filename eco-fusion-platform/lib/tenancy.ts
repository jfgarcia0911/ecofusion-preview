/**
 * Organization scoping for API routes.
 *
 * Farm data belongs to an organization, not to the person who typed it in, so
 * every query filters on `organizationId`. `userId` is still written on create
 * to record who entered a row, but it must never be what a read is scoped by.
 * That is what kept a farm's own manager from seeing the farm's data.
 */

import { randomUUID } from 'node:crypto';
import { cache } from 'react';
import { cookies, headers } from 'next/headers';
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';
import {
  currentStaffOrganizationId,
  platformReach,
  logStaffAccess,
  logStaffWriteIfAny,
} from '@/lib/staff';
import {
  permissionForBusinessRequest,
  permissionLabel,
  type StaffPermission,
} from '@/lib/staff-permissions';
import { applySnapshot, defaultSnapshot, startingBusinessUnits } from '@/lib/snapshots';
import { logMemberWriteIfAny } from '@/lib/activity';

/** Days a new farm may use the platform before it has to subscribe. */
export const TRIAL_DAYS = 15;

/**
 * Which of their own businesses a member is currently looking at.
 *
 * Separate from the staff cookie: that one is EcoFusion visiting a customer and
 * is written down, this one is somebody moving between businesses that are
 * already theirs. The value is never trusted on its own - every read checks it
 * against a real membership, so a forged cookie reaches nothing.
 */
export const ACTIVE_ORG_COOKIE = 'ecofusion-active-org';

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
  /**
   * True when that staff member is the master account. It enters as the
   * business's owner rather than as a supervisor: nothing inside the business
   * is closed to it. Always alongside `isStaff`, so every change it makes is
   * written to the same trail as any other EcoFusion visit.
   */
  isMaster: boolean;
  /** What a staff member was allowed by the master account. Empty for everyone else. */
  staffPermissions: StaffPermission[];
  /**
   * Why this request is refused, when it is a staff member doing something
   * their permissions do not cover. Set here, where the request is first seen,
   * and answered by activeOrg before the route does anything.
   */
  staffRefusal: string | null;
  /**
   * The business's name and where it is. Read in the same lookup that finds
   * the business, so the layout, the sidebar and the switcher need no query
   * of their own to say whose business this is.
   */
  business: { name: string; location: string | null };
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

/** The subscription fields access is decided from. */
interface BillingFacts {
  subscriptionStatus: string;
  trialEndsAt: Date | null;
  currentPeriodEnd: Date | null;
}

/**
 * The business whose subscription decides whether `organizationId` may be used.
 *
 * Usually itself. When an owner has added a business it points at the one that
 * pays, and that one answers for both, so a second site is covered by the
 * subscription already being paid rather than starting a trial of its own.
 *
 * Only one hop is followed. A billing account is by definition the end of the
 * chain, so a longer one would be a bug, and walking it would turn a cycle into
 * a hang.
 */
export async function billingFactsFor(organizationId: string): Promise<BillingFacts | null> {
  const org = await prisma.organization.findUnique({
    where: { id: organizationId },
    select: {
      subscriptionStatus: true,
      trialEndsAt: true,
      currentPeriodEnd: true,
      billingParent: {
        select: { subscriptionStatus: true, trialEndsAt: true, currentPeriodEnd: true },
      },
    },
  });
  if (!org) return null;
  return org.billingParent ?? org;
}

/** Roles allowed to administer an organization rather than just work in it. */
export function canAdminister(ctx: OrgContext): boolean {
  return ctx.role === 'owner' || ctx.role === 'supervisor' || ctx.role === 'manager';
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
  return ctx.role === 'owner' || ctx.role === 'supervisor';
}

/**
 * The signed-in user's organization, or null when there is no session.
 *
 * Worked out once per request and shared: the layout, the page and anything
 * else rendered for the same request all get this one answer instead of each
 * asking the database again. (In a route handler there is only one caller,
 * and it runs as before.)
 *
 * Reads from the token where possible. Sessions issued before organizations
 * existed carry no organizationId, so those fall back to a membership lookup
 * rather than logging everyone out.
 */
export const getOrgContext = cache(async (): Promise<OrgContext | null> => {
  const session = await auth();
  if (!session?.user?.id) return null;

  // Staff work inside a farm chosen deliberately, not one they belong to, so
  // that choice is resolved before membership is consulted at all.
  const staffContext = await resolveStaffContext(session.user.id);
  if (staffContext) return staffContext;

  // What the person last switched to, then what the token remembers, then the
  // one they have had longest. Each candidate is looked up as a membership, so
  // a cookie naming a business they do not belong to simply finds nothing and
  // the next candidate is tried.
  const jar = await cookies();
  const candidates = [
    jar.get(ACTIVE_ORG_COOKIE)?.value,
    session.user.organizationId,
  ].filter((id): id is string => Boolean(id));

  // Every membership at once, oldest first, and the choice made here. A
  // person belongs to a handful of businesses at most - an owner is capped at
  // twenty - so one query that returns them all is cheaper than the up to
  // three it replaces, each of which was a round trip to Tokyo in front of
  // every page and every request.
  const memberships = await prisma.membership.findMany({
    where: { userId: session.user.id },
    orderBy: { createdAt: 'asc' },
    select: {
      organizationId: true,
      role: true,
      organization: {
        select: {
          name: true,
          location: true,
          subscriptionStatus: true,
          trialEndsAt: true,
          currentPeriodEnd: true,
          billingParent: {
            select: { subscriptionStatus: true, trialEndsAt: true, currentPeriodEnd: true },
          },
        },
      },
    },
  });

  const membership =
    candidates
      .map((id) => memberships.find((m) => m.organizationId === id))
      .find((m) => m !== undefined) ?? memberships[0];
  if (!membership) return null;

  // The business's own record of what its people did. Staff changes are
  // recorded by resolveStaffContext instead, into the separate trail an owner
  // reads to see who from EcoFusion has been in.
  await logMemberWriteIfAny(session.user.id, membership.organizationId);

  return {
    userId: session.user.id,
    organizationId: membership.organizationId,
    role: membership.role,
    // A business added by its owner is paid for by the one that owns the
    // subscription, so that is the one asked.
    access: evaluateAccess(membership.organization.billingParent ?? membership.organization),
    isStaff: false,
    isMaster: false,
    staffPermissions: [],
    staffRefusal: null,
    business: {
      name: membership.organization.name,
      location: membership.organization.location,
    },
  };
});

/**
 * The farm a staff member has stepped into, or null.
 *
 * Returns null for everyone else, including an account that presents the
 * cookie without the role to back it: the claim is checked against the
 * database on every request that makes it, so withdrawing staff access takes
 * effect at once rather than whenever a token happens to be refreshed.
 *
 * Staff act with a supervisor's powers. Not an owner's - ownership and billing
 * stay with the person who pays, and the guards in the member routes already
 * turn away anyone who is not them.
 *
 * The master account is the exception. It holds the platform, so it enters
 * every business with the owner's powers and no less: whatever a customer can
 * get stuck on, it can undo. What it gives up in exchange is privacy - every
 * change it makes, like any staff member's, is written to the trail below, and
 * that trail is one the business's own owner can read.
 */
async function resolveStaffContext(userId: string): Promise<OrgContext | null> {
  const organizationId = await currentStaffOrganizationId();
  if (!organizationId) return null;

  // Not merely staff, but staff who were handed this business. The master
  // reaches every one; an assistant reaches what they were given.
  //
  // The business is read alongside rather than after, since neither answer
  // depends on the other. Reading it for somebody who turns out not to reach
  // it gives nothing away: the result is thrown away with the refusal, and
  // the id came from their own cookie.
  const [reach, organization] = await Promise.all([
    platformReach(userId, organizationId),
    prisma.organization.findUnique({
      where: { id: organizationId },
      select: {
        name: true,
        location: true,
        subscriptionStatus: true,
        trialEndsAt: true,
        currentPeriodEnd: true,
      },
    }),
  ]);
  if (!reach || !organization) return null;

  // What this request needs, against what this staff member was given. The
  // master account needs nothing. Worked out from the method and path that
  // middleware forwards, so one list in lib/staff-permissions governs every
  // route in a business rather than each route remembering to ask.
  const head = await headers();
  const method = head.get('x-request-method');
  const path = head.get('x-request-path');
  const needed = reach.master ? null : permissionForBusinessRequest(method, path);
  const staffRefusal =
    needed && !reach.permissions.includes(needed)
      ? `Your EcoFusion access does not include "${permissionLabel(needed)}" in this business. Ask the master account.`
      : null;

  if (staffRefusal && needed) {
    // Written down as an attempt rather than a change: nothing happened, but
    // somebody tried, and that is what an access trail is for.
    await logStaffAccess(userId, organizationId, 'denied', {
      method: method?.toUpperCase() ?? null,
      path,
      summary: `Refused: needs "${permissionLabel(needed)}"`,
    });
  } else {
    // Every write, by every platform account, before the route has done
    // anything with it. The master's unlimited reach is only acceptable
    // because of this line.
    await logStaffWriteIfAny(userId, organizationId);
  }

  return {
    userId,
    organizationId,
    role: reach.master ? 'owner' : 'supervisor',
    access: evaluateAccess(organization),
    isStaff: true,
    isMaster: reach.master,
    staffPermissions: reach.permissions,
    staffRefusal,
    business: { name: organization.name, location: organization.location },
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

  const here = await prisma.membership.findUnique({
    where: { userId_organizationId: { userId, organizationId: ctx.organizationId } },
    select: { id: true },
  });
  if (here) return true;

  // An owner's reach is their whole account, not whichever business is open.
  // Training is assigned to people, and a person who works at two of an
  // owner's sites is the owner's to train from either. This widens for owners
  // only, and only as far as businesses they own: a manager still reaches the
  // one business they were added to, which is the previous behaviour exactly.
  if (ctx.isStaff) return false;

  const shared = await prisma.membership.findFirst({
    where: {
      userId,
      organization: {
        memberships: { some: { userId: ctx.userId, role: 'owner' } },
      },
    },
    select: { id: true },
  });
  return shared !== null;
}

/** A business name that is safe to put in a URL, and unlike any other. */
/** An id for a business whose id is not derived from anything. */
function createId(): string {
  return `org_${randomUUID().replace(/-/g, '')}`;
}

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
  /** Where the business is, free text. Optional. */
  location?: string | null;
  /** Fixed id, for the personal business whose id is derived from the user. */
  organizationId?: string;
  /**
   * The business whose subscription pays for this one. Set when an owner adds
   * a second business; left null for one that bills for itself, which is what
   * signup and the agency screen both create.
   */
  billingParentId?: string | null;
}): Promise<string> {
  const { ownerUserId, name } = options;
  // Only the personal business derives its id from its owner, and it asks for
  // that explicitly so a retry collides instead of making a second one. Every
  // other business gets a fresh id, because an owner may hold several and they
  // cannot all be named after the same person.
  const organizationId = options.organizationId ?? createId();

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
        location: options.location ?? null,
        billingParentId: options.billingParentId ?? null,
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
  email?: string | null,
  companyName?: string | null
): Promise<string> {
  const existing = await prisma.membership.findFirst({
    where: { userId },
    orderBy: { createdAt: 'asc' },
    select: { organizationId: true },
  });
  if (existing) return existing.organizationId;

  // A company name given at signup is the business's real name and is used as
  // it was typed. Only when there is none - an OAuth sign-in, which never asks
  // for one - is a name derived from the person, which is a placeholder rather
  // than an answer.
  const company = companyName?.trim();
  const label = name?.trim() || email?.split('@')[0] || 'My';

  return provisionOrganization({
    ownerUserId: userId,
    name: company || `${label} Business`,
    // Derived from the user, so a second attempt collides rather than
    // quietly producing a second business for the same person.
    organizationId: `org_${userId}`,
  });
}
