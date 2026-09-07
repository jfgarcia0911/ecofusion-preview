
import type { NextAuthConfig } from 'next-auth';

/**
 * Pages reachable without signing in. Everything else requires a session.
 *
 * This list is deliberately deny-by-default: a new section added under
 * app/(platform) is protected the moment it exists, rather than staying open
 * until someone remembers to add it here.
 *
 * API routes never reach this callback - middleware.ts returns early for
 * /api, and each route checks the session itself.
 */
const PUBLIC_ROUTES = ['/login', '/signup',
    '/api/billing/webhook',
];

/** Signed-in users have no reason to sit on these. */
const AUTH_ENTRY_ROUTES = ['/', '/login', '/signup'];

const isPublicRoute = (pathname: string) =>
    pathname === '/' ||
    PUBLIC_ROUTES.some((route) => pathname === route || pathname.startsWith(`${route}/`));

export const authConfig = {
    pages: {
        signIn: '/login',
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const { pathname } = nextUrl;

            if (isLoggedIn) {
                if (AUTH_ENTRY_ROUTES.includes(pathname)) {
                    return Response.redirect(new URL('/dashboard/executive', nextUrl));
                }
                return true;
            }

            // Returning false sends unauthenticated users to the sign-in page.
            return isPublicRoute(pathname);
        },
    },
    providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
