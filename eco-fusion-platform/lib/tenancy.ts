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
  logStaffAccess,
  logStaffWriteIfAny,
} from '@/lib/staff';
import { decideBusinessReach, loadReachFacts } from '@/lib/agency';
import { AGENCY_TRIAL_DAYS, SUB_ACCOUNT_TRIAL_DAYS } from '@/lib/plans';
import { CLIENT_BILLING_SELECT, evaluateClientAccess, type ClientAccess } from '@/lib/sub-account-billing';
import {
  askWhom,
  permissionForBusinessRequest,
  permissionLabel,
  type StaffPermission,
} from '@/lib/staff-permissions';
import { applySnapshot, defaultSnapshot, startingBusinessUnits } from '@/lib/snapshots';
import { logMemberWriteIfAny } from '@/lib/activity';

/** Days a new agency may use the platform before it has to subscribe. See lib/plans. */
export const TRIAL_DAYS = AGENCY_TRIAL_DAYS;

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
  /** The agency this business is a sub-account of, whose plan and subscription decide access. */
  agencyId: string;
  /** Role within this organization: owner | admin | manager | member. */
  role: string;
  access: OrgAccess;
  /**
   * What this business owes its agency: $99 a month after 30 days. Shuts its
   * own people out of everything but Settings when unpaid; never anybody who
   * stepped in from above.
   */
  client: ClientAccess;
  /**
   * True when this is EcoFusion (its admin or staff) working inside a business
   * it is not a member of. The interface says so while it lasts, and a lapsed
   * business still opens, since needing repair is usually why EcoFusion is there.
   */
  isStaff: boolean;
  /** True when that EcoFusion account is the EcoFusion admin. */
  isPlatformAdmin: boolean;
  /**
   * True when this is the business's own agency's team - its master account or
   * agency staff - working inside one of its sub-accounts. Unlike EcoFusion,
   * they are the customer, so a lapsed agency stays shut for them too.
   */
  isAgency: boolean;
  /** Stepped in from above - EcoFusion or the agency - rather than a member of the business. */
  entered: boolean;
  /**
   * Stepped in with full control: the EcoFusion admin, or the agency's master
   * account. Enters as the business's owner, and may do what only the owner
   * could, down to resetting the owner's password. Every change is written to
   * the access trail.
   */
  fullControl: boolean;
  /** What the person who stepped in was allowed. Empty for everyone else. */
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

  // Somebody who stepped into a business from above - EcoFusion, or the
  // business's own agency - works in the one they chose, not one they belong
  // to, so that choice is resolved before membership is consulted at all.
  const enteredContext = await resolveEnteredContext(session.user.id);
  if (enteredContext) return enteredContext;

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
          agencyId: true,
          ...CLIENT_BILLING_SELECT,
          agency: {
            select: {
              subscriptionStatus: true,
              trialEndsAt: true,
              currentPeriodEnd: true,
              stripeChargesEnabled: true,
            },
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
    agencyId: membership.organization.agencyId,
    role: membership.role,
    // The agency pays for every business it holds, so the agency is asked.
    access: evaluateAccess(membership.organization.agency),
    client: evaluateClientAccess(membership.organization, membership.organization.agency),
    isStaff: false,
    isPlatformAdmin: false,
    isAgency: false,
    entered: false,
    fullControl: false,
    staffPermissions: [],
    staffRefusal: null,
    business: {
      name: membership.organization.name,
      location: membership.organization.location,
    },
  };
});

/**
 * The business somebody has stepped into from above it, or null.
 *
 * Two kinds of people step in, and both are checked against the database on
 * every request that makes the claim, so taking access away takes effect at
 * once rather than whenever a token happens to be refreshed:
 *
 *   - EcoFusion: its admin reaches every business, its staff the ones they
 *     were given. A lapsed business still opens for them.
 *   - The business's own agency: its master account reaches every business
 *     the agency holds, its staff the ones they were given. They are the
 *     customer, so a lapsed agency stays shut for them as for anybody.
 *
 * Admins of either kind enter with the owner's powers; staff of either kind
 * enter as supervisors, limited further by their permissions. Every change
 * any of them makes is written to the access trail, which the business's
 * owner and its agency can read.
 */
async function resolveEnteredContext(userId: string): Promise<OrgContext | null> {
  const organizationId = await currentStaffOrganizationId();
  if (!organizationId) return null;

  // The business and who the caller is, together: neither waits on the other.
  const [organization, facts] = await Promise.all([
    prisma.organization.findUnique({
      where: { id: organizationId },
      select: {
        name: true,
        location: true,
        agencyId: true,
        ...CLIENT_BILLING_SELECT,
        agency: {
          select: { subscriptionStatus: true, trialEndsAt: true, currentPeriodEnd: true, stripeChargesEnabled: true },
        },
      },
    }),
    loadReachFacts(userId, organizationId),
  ]);
  if (!organization) return null;

  const reach = decideBusinessReach(facts, organization.agencyId);
  if (!reach) return null;

  // What this request needs, against what this person was given. Admins need
  // nothing. Worked out from the method and path that middleware forwards, so
  // one list in lib/staff-permissions governs every route in a business
  // rather than each route remembering to ask.
  const head = await headers();
  const method = head.get('x-request-method');
  const path = head.get('x-request-path');
  const needed = reach.admin ? null : permissionForBusinessRequest(method, path);
  const scope = reach.via === 'platform' ? 'platform' : 'agency';
  const staffRefusal =
    needed && !reach.permissions.includes(needed)
      ? `Your access does not include "${permissionLabel(needed)}" in this business. Ask ${askWhom(scope)}.`
      : null;

  if (staffRefusal && needed) {
    // Written down as an attempt rather than a change: nothing happened, but
    // somebody tried, and that is what an access trail is for.
    await logStaffAccess(userId, organizationId, 'denied', {
      method: method?.toUpperCase() ?? null,
      path,
      summary: `Refused: needs "${permissionLabel(needed)}"`,
      agencyId: organization.agencyId,
    });
  } else {
    // Every write by anybody who stepped in, before the route has done
    // anything with it. Unlimited reach is only acceptable because of this.
    await logStaffWriteIfAny(userId, organizationId, organization.agencyId);
  }

  return {
    userId,
    organizationId,
    agencyId: organization.agencyId,
    role: reach.admin ? 'owner' : 'supervisor',
    access: evaluateAccess(organization.agency),
    client: evaluateClientAccess(organization, organization.agency),
    isStaff: reach.via === 'platform',
    isPlatformAdmin: reach.via === 'platform' && reach.admin,
    isAgency: reach.via === 'agency',
    entered: true,
    fullControl: reach.admin,
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
  // Somebody who stepped in holds no membership here to widen from.
  if (ctx.entered) return false;

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
 * themselves up or an agency added one. Both must produce the same thing: an
 * owner, the starting business units, and whatever the default snapshot
 * carries. The trial is not the business's: it belongs to the agency.
 */
export async function provisionOrganization(options: {
  /** The agency the business is a sub-account of. Its plan and trial cover it. */
  agencyId: string;
  ownerUserId: string;
  /** Shown everywhere. Defaults to the owner's name or email. */
  name: string;
  /** Where the business is, free text. Optional. */
  location?: string | null;
  /** Fixed id, for the personal business whose id is derived from the user. */
  organizationId?: string;
  /** Never charged by its agency. The master account's choice alone. */
  complimentary?: boolean;
}): Promise<string> {
  const { ownerUserId, name } = options;
  // Only the personal business derives its id from its owner, and it asks for
  // that explicitly so a retry collides instead of making a second one. Every
  // other business gets a fresh id, because an owner may hold several and they
  // cannot all be named after the same person.
  const organizationId = options.organizationId ?? createId();

  // Read before the transaction, so the business's opening configuration is
  // settled by the time anything is written.
  const [template, businessUnits, ownerStanding] = await Promise.all([
    defaultSnapshot(options.agencyId),
    startingBusinessUnits(),
    prisma.agencyMember.findUnique({ where: { userId: ownerUserId }, select: { agencyId: true, role: true } }),
  ]);
  // The agency's own business - owned by its master account - is covered by
  // the agency's plan. Every other business pays the agency, after 30 days.
  const exempt = ownerStanding?.agencyId === options.agencyId && ownerStanding.role === 'admin';

  await prisma.$transaction([
    prisma.organization.create({
      data: {
        id: organizationId,
        name,
        slug: slugify(name, organizationId),
        location: options.location ?? null,
        agencyId: options.agencyId,
        clientBillingExempt: exempt,
        clientComplimentary: !exempt && Boolean(options.complimentary),
        clientTrialEndsAt: new Date(Date.now() + SUB_ACCOUNT_TRIAL_DAYS * 86_400_000),
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
 * Give a new account its own agency and its first business.
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
): Promise<string | null> {
  const existing = await prisma.membership.findFirst({
    where: { userId },
    orderBy: { createdAt: 'asc' },
    select: { organizationId: true },
  });
  if (existing) return existing.organizationId;

  // Somebody who is already on an agency's team (staff it added) does not get
  // an agency of their own.
  const onTeam = await prisma.agencyMember.findUnique({ where: { userId }, select: { id: true } });
  if (onTeam) return null;

  // A company name given at signup is the business's real name and is used as
  // it was typed. Only when there is none - an OAuth sign-in, which never asks
  // for one - is a name derived from the person, which is a placeholder rather
  // than an answer.
  const company = companyName?.trim();
  const label = name?.trim() || email?.split('@')[0] || 'My';

  // Everybody who signs up is an agency - a farm on its own is an agency with
  // one business - and they are its master account and that business's owner.
  const businessName = company || `${label} Business`;
  const { provisionAgency } = await import('@/lib/agency');
  const agencyId = await provisionAgency({ name: businessName, adminUserId: userId });

  return provisionOrganization({
    agencyId,
    ownerUserId: userId,
    name: businessName,
    // Derived from the user, so a second attempt collides rather than
    // quietly producing a second business for the same person.
    organizationId: `org_${userId}`,
  });
}
