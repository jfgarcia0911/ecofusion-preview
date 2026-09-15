/**
 * What a sub-account that has not paid its agency may still reach: Settings,
 * where it pays, and help. Imports nothing, so the browser-side lock and the
 * server agree without the browser loading Stripe.
 */

/** API routes a locked sub-account may still call. */
const OPEN_API_PREFIXES = [
    '/api/billing',
    '/api/business-units',
    '/api/settings',
    '/api/crm',
    '/api/organization',
    '/api/user',
    '/api/notifications',
];

export function openWhileLocked(path: string | null): boolean {
    return Boolean(path && OPEN_API_PREFIXES.some((prefix) => path === prefix || path.startsWith(prefix + '/')));
}

/** Pages a locked sub-account may still open. */
export function pageOpenWhileLocked(pathname: string): boolean {
    return pathname.startsWith('/settings') || pathname.startsWith('/help');
}
