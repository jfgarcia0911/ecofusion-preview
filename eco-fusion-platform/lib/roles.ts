/**
 * The role vocabularies, kept apart on purpose.
 *
 * There are three levels, modelled on HighLevel's:
 *
 *   EcoFusion (the platform)    User.role           platform_admin | platform_staff
 *     Agency (the subscriber)   AgencyMember.role   admin ("master account") | user
 *       Business (sub-account)  Membership.role     owner | supervisor | manager | member
 *
 * They used to share words - "admin", then "master" - that meant different
 * things at different levels. Reading a permission check meant knowing which
 * level a variable held, and granting the wrong one handed a customer the
 * platform. Each level now has its own vocabulary and its own label.
 */

/** Roles on User.role: standing across the whole platform. */
export const PLATFORM_ROLES = {
  /**
   * The EcoFusion admin: EcoFusion itself, above every agency. Sees and
   * supports every agency, sets plans and prices, and decides what EcoFusion's
   * own staff may do.
   */
  ADMIN: 'platform_admin',
  /** EcoFusion support. Reaches the businesses it is given, with the permissions it is given. */
  STAFF: 'platform_staff',
  /** Everybody else: a customer, whose standing comes from their agency and memberships. */
  USER: 'user',
} as const;

/**
 * What the EcoFusion admin was called before. The migration renames every
 * stored row, but a session token carries the role it was issued with for up
 * to thirty days, so these are still recognised until those tokens expire.
 */
const LEGACY_ADMIN_ROLES = ['master', 'platform_owner'];

/** Every User.role value that marks an EcoFusion account, old names included. */
export const PLATFORM_ROLE_VALUES: string[] = [
  PLATFORM_ROLES.ADMIN,
  ...LEGACY_ADMIN_ROLES,
  PLATFORM_ROLES.STAFF,
];

/** Roles on AgencyMember.role: standing inside one agency. */
export const AGENCY_ROLES = {
  /** The agency's master account. Holds its plan and billing, and every one of its sub-accounts. */
  ADMIN: 'admin',
  /** Agency staff: the sub-accounts and permissions the master account gives them. */
  USER: 'user',
} as const;

/** Roles on Membership.role: standing inside one business. */
export const BUSINESS_ROLES = {
  /** Holds the business, and appoints and removes its supervisors. */
  OWNER: 'owner',
  /** The owner's senior hand: adds people, resets passwords, holds integrations. */
  SUPERVISOR: 'supervisor',
  /** Runs the working week. No say over who has a login. */
  MANAGER: 'manager',
  /** Day-to-day access. */
  MEMBER: 'member',
} as const;

/** Roles an owner or supervisor may hand out; never owner, never a platform role. */
export const ASSIGNABLE_BUSINESS_ROLES: string[] = [
  BUSINESS_ROLES.SUPERVISOR,
  BUSINESS_ROLES.MANAGER,
  BUSINESS_ROLES.MEMBER,
];

/** Every valid business role, owner included. */
export const ALL_BUSINESS_ROLES: string[] = [
  BUSINESS_ROLES.OWNER,
  ...ASSIGNABLE_BUSINESS_ROLES,
];

/** Whether a User.role belongs to EcoFusion rather than to a customer. */
export function isPlatformRole(role: string | null | undefined): boolean {
  return PLATFORM_ROLE_VALUES.includes(role ?? '');
}

/** Whether a User.role is the EcoFusion admin, above EcoFusion's staff. */
export function isPlatformAdminRole(role: string | null | undefined): boolean {
  return role === PLATFORM_ROLES.ADMIN || LEGACY_ADMIN_ROLES.includes(role ?? '');
}

/** How each standing is named on screen. */
export function standingLabel(standing: {
  platform?: 'admin' | 'staff' | null;
  agency?: 'admin' | 'user' | null;
}): string {
  if (standing.platform === 'admin') return 'EcoFusion admin';
  if (standing.platform === 'staff') return 'EcoFusion staff';
  if (standing.agency === 'admin') return 'Master account';
  if (standing.agency === 'user') return 'Agency staff';
  return 'Member';
}
