/**
 * What an EcoFusion staff account may do, one permission at a time.
 *
 * Staff used to be a single level: everyone on the team could do the same
 * things, and the only choice was which sub accounts they opened. Now the
 * master account ticks, per person, exactly what they may do. Which sub
 * accounts they open is still chosen separately, on StaffBusinessAccess.
 *
 * The master account holds every permission without being given any, and
 * some things are never delegable at all - see NEVER_DELEGATED. Imports
 * nothing, so the Team Access page and the server read the same list.
 */

export const PERMISSIONS = {
    /** Inside a sub account: change its stock, sales, schedules, tasks and so on. */
    WORK_IN_BUSINESS: 'business.edit',
    /** Inside a sub account: add or remove employees, reset passwords, change access levels. */
    MANAGE_PEOPLE: 'business.people',
    /** Inside a sub account: see and change its integration keys. */
    INTEGRATIONS: 'business.integrations',
    CREATE_BUSINESS: 'subaccounts.create',
    RENAME_BUSINESS: 'subaccounts.rename',
    GIVE_CLASSES: 'classes.give',
    TAKE_CLASSES: 'classes.take',
    /** Inside a sub account: assign courses to anyone in it. */
    ASSIGN_COURSES: 'classes.assign',
    SET_PRICES: 'classes.prices',
    CAPTURE_SNAPSHOTS: 'snapshots.capture',
    MANAGE_SNAPSHOTS: 'snapshots.manage',
    APPLY_SNAPSHOTS: 'snapshots.apply',
    READ_ACCESS_LOG: 'log.read',
    SEE_TEAM: 'team.read',
} as const;

export type StaffPermission = (typeof PERMISSIONS)[keyof typeof PERMISSIONS];

export interface PermissionInfo {
    key: StaffPermission;
    group: string;
    label: string;
    hint: string;
}

/** Every permission, in the order and groups the Team Access page shows them. */
export const PERMISSION_LIST: PermissionInfo[] = [
    {
        key: PERMISSIONS.WORK_IN_BUSINESS,
        group: 'Inside a sub account',
        label: 'Make changes',
        hint: 'Stock, sales, schedules, tasks and the rest. Without this they can look but not change anything.',
    },
    {
        key: PERMISSIONS.MANAGE_PEOPLE,
        group: 'Inside a sub account',
        label: 'Manage people',
        hint: "Add or remove employees, reset passwords, change access levels. Never the owner's.",
    },
    {
        key: PERMISSIONS.INTEGRATIONS,
        group: 'Inside a sub account',
        label: 'Integration keys',
        hint: 'See and change the keys that connect a business to other systems, such as its CRM.',
    },
    {
        key: PERMISSIONS.ASSIGN_COURSES,
        group: 'Inside a sub account',
        label: 'Assign courses',
        hint: 'Put courses the business holds in front of anyone who works there.',
    },
    {
        key: PERMISSIONS.CREATE_BUSINESS,
        group: 'Sub accounts',
        label: 'Create sub accounts',
        hint: 'Set up a new business. They are given the one they create.',
    },
    {
        key: PERMISSIONS.RENAME_BUSINESS,
        group: 'Sub accounts',
        label: 'Rename sub accounts',
        hint: 'Correct the name of a business they open.',
    },
    {
        key: PERMISSIONS.GIVE_CLASSES,
        group: 'Classes',
        label: 'Give free classes',
        hint: 'Give a business courses without it paying.',
    },
    {
        key: PERMISSIONS.TAKE_CLASSES,
        group: 'Classes',
        label: 'Take classes back',
        hint: 'Remove a course from a business, including one it bought. This does not refund it.',
    },
    {
        key: PERMISSIONS.SET_PRICES,
        group: 'Classes',
        label: 'Set prices',
        hint: 'Change what courses and level packages cost every business.',
    },
    {
        key: PERMISSIONS.CAPTURE_SNAPSHOTS,
        group: 'Snapshots',
        label: 'Capture snapshots',
        hint: "Save a business's setup as a template.",
    },
    {
        key: PERMISSIONS.MANAGE_SNAPSHOTS,
        group: 'Snapshots',
        label: 'Edit and delete snapshots',
        hint: 'Rename or delete templates, and choose the one every new business starts from.',
    },
    {
        key: PERMISSIONS.APPLY_SNAPSHOTS,
        group: 'Snapshots',
        label: 'Apply snapshots',
        hint: "Load a template into a business they open. This adds to that business's setup.",
    },
    {
        key: PERMISSIONS.READ_ACCESS_LOG,
        group: 'Oversight',
        label: 'Read the Access Log',
        hint: 'See what staff did in the sub accounts they open.',
    },
    {
        key: PERMISSIONS.SEE_TEAM,
        group: 'Oversight',
        label: 'See the team',
        hint: 'See who else is on the EcoFusion team and what each of them can do.',
    },
];

const KNOWN = new Set<string>(PERMISSION_LIST.map((p) => p.key));

/** Only real permissions, each once. Anything else sent is dropped. */
export function cleanPermissions(values: unknown): StaffPermission[] {
    if (!Array.isArray(values)) return [];
    return [...new Set(values.filter((v): v is StaffPermission => typeof v === 'string' && KNOWN.has(v)))];
}

export function permissionLabel(key: string): string {
    return PERMISSION_LIST.find((p) => p.key === key)?.label ?? key;
}

/** Starting points on the Team Access page. Adjustable once applied. */
export const PRESETS: { key: string; label: string; hint: string; permissions: StaffPermission[] }[] = [
    {
        key: 'view',
        label: 'Support (view only)',
        hint: 'Opens the sub accounts it is given and reads the Access Log. Changes nothing.',
        permissions: [PERMISSIONS.READ_ACCESS_LOG],
    },
    {
        key: 'support',
        label: 'Support',
        hint: 'Also makes changes inside a business and manages its people.',
        permissions: [PERMISSIONS.WORK_IN_BUSINESS, PERMISSIONS.MANAGE_PEOPLE, PERMISSIONS.READ_ACCESS_LOG],
    },
    {
        key: 'manager',
        label: 'Account manager',
        hint: 'Also creates sub accounts, gives and takes back free classes, assigns courses, and works with snapshots.',
        permissions: [
            PERMISSIONS.WORK_IN_BUSINESS,
            PERMISSIONS.MANAGE_PEOPLE,
            PERMISSIONS.INTEGRATIONS,
            PERMISSIONS.ASSIGN_COURSES,
            PERMISSIONS.CREATE_BUSINESS,
            PERMISSIONS.RENAME_BUSINESS,
            PERMISSIONS.GIVE_CLASSES,
            PERMISSIONS.TAKE_CLASSES,
            PERMISSIONS.CAPTURE_SNAPSHOTS,
            PERMISSIONS.MANAGE_SNAPSHOTS,
            PERMISSIONS.APPLY_SNAPSHOTS,
            PERMISSIONS.READ_ACCESS_LOG,
            PERMISSIONS.SEE_TEAM,
        ],
    },
];

/** The preset a set of permissions matches exactly, or null for a custom mix. */
export function matchingPreset(permissions: string[]): (typeof PRESETS)[number] | null {
    const have = new Set(permissions);
    return (
        PRESETS.find(
            (preset) =>
                preset.permissions.length === have.size && preset.permissions.every((p) => have.has(p))
        ) ?? null
    );
}

/** What stays with the master account whatever is ticked, shown on the page. */
export const NEVER_DELEGATED = [
    'Taking on and removing staff, and deciding what they can do',
    'Making someone an owner, removing an owner, or resetting an owner’s password',
    'A business’s billing and subscription, and buying courses for it',
    'Editing or deleting the Access Log (nobody can)',
];

/** Requests that only read. */
const READ_ONLY = new Set(['GET', 'HEAD', 'OPTIONS']);

/**
 * Requests that are about the staff member's own session rather than the
 * business: switching business, dismissing a notification, their own password.
 * These need no permission.
 */
const PERSONAL = ['/api/organizations/active', '/api/notifications', '/api/user/', '/api/auth'];

/**
 * The permission a request made inside a sub account needs, or null when it
 * needs none beyond being able to open the business.
 *
 * Reading needs nothing, except the integration keys, which are secrets.
 * Every change needs "Make changes" unless it is one of the kinds with a
 * permission of its own, in which case that one is what it needs.
 */
export function permissionForBusinessRequest(
    method: string | null,
    path: string | null
): StaffPermission | null {
    if (!method || !path || !path.startsWith('/api/')) return null;
    const upper = method.toUpperCase();

    if (path.startsWith('/api/settings/integrations')) return PERMISSIONS.INTEGRATIONS;
    if (READ_ONLY.has(upper)) return null;
    if (PERSONAL.some((prefix) => path.startsWith(prefix))) return null;

    if (
        path.startsWith('/api/organization/members') ||
        path.startsWith('/api/users') ||
        path.startsWith('/api/employees')
    ) {
        return PERMISSIONS.MANAGE_PEOPLE;
    }
    if (path.startsWith('/api/training/assignments')) return PERMISSIONS.ASSIGN_COURSES;
    if (path.startsWith('/api/training/gifts')) {
        return upper === 'DELETE' ? PERMISSIONS.TAKE_CLASSES : PERMISSIONS.GIVE_CLASSES;
    }
    return PERMISSIONS.WORK_IN_BUSINESS;
}
