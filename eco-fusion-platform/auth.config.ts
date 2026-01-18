
import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
    pages: {
        signIn: '/login',
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
            const isOnBusiness = nextUrl.pathname.startsWith('/business');
            const isOnAcademy = nextUrl.pathname.startsWith('/academy');

            if (isOnDashboard || isOnBusiness || isOnAcademy) {
                if (isLoggedIn) return true;
                return false; // Redirect unauthenticated users to login page
            } else if (isLoggedIn) {
                // Redirect authenticated users away from home/auth pages to dashboard
                if (nextUrl.pathname === '/' || nextUrl.pathname === '/login' || nextUrl.pathname === '/signup') {
                    return Response.redirect(new URL('/dashboard/executive', nextUrl));
                }
            }
            return true;
        },
    },
    providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
