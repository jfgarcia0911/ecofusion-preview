/**
 * Everything that configures rather than runs, and how far each one reaches.
 *
 * Split by what a setting actually touches, because the two are easy to
 * confuse and expensive to confuse: an owner with three businesses needs to
 * know that changing a password changes it everywhere, and that renaming a
 * business unit changes it in one place only.
 *
 * Team Access is not here. An owner manages their people in one place, under
 * Employees, where giving somebody a login sits beside the record of who they
 * are. The screen that lists memberships on their own is EcoFusion's, for
 * looking at a business it did not staff.
 *
 * Held here rather than on the settings page because the sidebar shows the
 * same list while you are inside settings. Two copies would drift, and the
 * one that drifted would be the sidebar, where a wrong entry is a dead link
 * rather than a missing card.
 */

import {
    CreditCard,
    Settings as SettingsIcon,
    ScrollText,
    SlidersHorizontal,
    Layers,
    type LucideIcon,
} from 'lucide-react';

export interface SettingsSection {
    href: string;
    name: string;
    description: string;
    icon: LucideIcon;
    /** Hidden entirely from anyone who is not the owner. */
    ownerOnly?: boolean;
}

/** Follows the account. Changing one of these changes it in every business. */
// Training Management is not here. Assigning courses and chasing completions
// is work somebody does during the week, not a setting they configure once, so
// it sits in the sidebar beside Employees and Scheduling where that work is.
export const ACCOUNT_SECTIONS: SettingsSection[] = [
    {
        href: '/settings/preferences',
        name: 'Preferences',
        description: 'Units, and the password you sign in with.',
        icon: SlidersHorizontal,
    },
    {
        href: '/billing',
        name: 'Billing',
        description: 'One subscription, covering every business you run.',
        icon: CreditCard,
        ownerOnly: true,
    },
];

/** Stops at the business you are in. Each one you run has its own. */
export const BUSINESS_SECTIONS: SettingsSection[] = [
    {
        href: '/settings/business-units',
        name: 'Business Units',
        description: 'The silos this business runs, and what lands in each.',
        icon: Layers,
        ownerOnly: true,
    },
    {
        href: '/settings/integrations',
        name: 'Integrations',
        description: 'Connect the systems this business already uses.',
        icon: SettingsIcon,
        ownerOnly: true,
    },
    {
        href: '/settings/audit-log',
        name: 'Access Record',
        description: 'When EcoFusion staff opened this business, and what they changed.',
        icon: ScrollText,
        ownerOnly: true,
    },
];

/**
 * Whether a path is inside settings.
 *
 * Billing and the two under /business are settings by what they do rather
 * than by where they live, so the sidebar cannot decide this from a single
 * prefix. Matching the list itself means a section added above is recognised
 * without anybody remembering to widen a regular expression.
 */
export function isSettingsPath(pathname: string): boolean {
    if (pathname.startsWith('/settings')) return true;
    return [...ACCOUNT_SECTIONS, ...BUSINESS_SECTIONS].some(
        (section) => pathname === section.href || pathname.startsWith(section.href + '/')
    );
}

/** The sections this reader may actually open, in their two groups. */
export function visibleSections(isOwner: boolean) {
    const allowed = (section: SettingsSection) => !section.ownerOnly || isOwner;
    return {
        account: ACCOUNT_SECTIONS.filter(allowed),
        business: BUSINESS_SECTIONS.filter(allowed),
    };
}
