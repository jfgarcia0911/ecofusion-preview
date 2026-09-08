/**
 * The two role vocabularies, kept apart on purpose.
 *
 * They used to share the word "admin", which meant one thing on User.role
 * (EcoFusion, who can enter any business) and something else entirely on
 * Membership.role (a customer's own senior staff, who answer to that
 * business's owner). Reading a permission check meant knowing which of the two
 * a variable held, and granting the wrong one handed a customer the platform.
 */

/** Roles on User.role: standing across the whole platform. */
export const PLATFORM_ROLES = {
  /** EcoFusion itself. Enters any business; holds the platform's own settings. */
  OWNER: 'platform_owner',
  /** EcoFusion support. Enters a customer's business to help, nothing above it. */
  STAFF: 'platform_staff',
  /** Everybody else: a customer, whose standing comes from their memberships. */
  USER: 'user',
} as const;

/** Roles on Membership.role: standing inside one business. */
export const BUSINESS_ROLES = {
  /** Holds the business. Buys the subscription, appoints and removes supervisors. */
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
  return role === PLATFORM_ROLES.OWNER || role === PLATFORM_ROLES.STAFF;
}

/** Whether a User.role is EcoFusion's own, above support. */
export function isPlatformOwnerRole(role: string | null | undefined): boolean {
  return role === PLATFORM_ROLES.OWNER;
}
