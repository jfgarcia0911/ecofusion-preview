import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import Google from 'next-auth/providers/google';
import { PrismaAdapter } from '@auth/prisma-adapter';
import type { Adapter } from 'next-auth/adapters';
import bcrypt from 'bcryptjs';
import { assertLoginAllowed, NO_ACCOUNT_HASH } from '@/lib/login-guard';
import { authConfig } from './auth.config';
import { ensurePersonalOrganization } from './lib/tenancy';
import { logSignIn } from './lib/activity';
import { prisma } from './lib/prisma';

/** How often a session re-reads its account: role, memberships, and whether it still stands. */
const SESSION_RECHECK_MS = 5 * 60 * 1000;

export const { handlers, auth, signIn, signOut } = NextAuth({
    ...authConfig,
    // The adapter's own types and next-auth's drift by a version; naming the
    // interface it satisfies says which one is right instead of silencing both.
    adapter: PrismaAdapter(prisma) as Adapter,
    session: {
        strategy: 'jwt',
    },
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        Credentials({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, request) {
                // Every account is stored lowercase, so "Bob@x.com" must be
                // looked up the same way or it can never sign in.
                const email =
                    typeof credentials?.email === 'string' ? credentials.email.trim().toLowerCase() : '';
                const password = typeof credentials?.password === 'string' ? credentials.password : '';
                if (!email || !password || email.length > 254 || password.length > 256) {
                    return null;
                }

                await assertLoginAllowed(request, email);

                const user = await prisma.user.findUnique({
                    where: { email },
                });

                // Compared even when there is nothing to compare against, so an
                // unknown email is refused as slowly as a wrong password.
                const isPasswordValid = await bcrypt.compare(password, user?.password ?? NO_ACCOUNT_HASH);

                if (!user?.password || !isPasswordValid) {
                    return null;
                }

                return {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    image: user.image,
                    role: user.role,
                };
            },
        }),
    ],
    events: {
        // Recorded against the business they land in, so an owner can see who
        // has actually been using the account rather than only who holds a login.
        async signIn({ user }) {
            if (user.id) await logSignIn(user.id);
        },
        // The adapter creates the User for OAuth sign-ins; without a farm of
        // their own, every request they make would fail authorization.
        async createUser({ user }) {
            if (user.id) {
                await ensurePersonalOrganization(user.id, user.name, user.email);
            }
        },
    },
    callbacks: {
        ...authConfig.callbacks,
        async session({ session, token }) {
            if (token.sub && session.user) {
                session.user.id = token.sub;
                session.user.role = token.role as string;
                session.user.organizationId = token.organizationId as string | undefined;
                session.user.orgRole = token.orgRole as string | undefined;
            }
            return session;
        },
        async jwt({ token, user, trigger }) {
            if (user) {
                token.sub = user.id;
                token.role = user.role;
                token.checkedAt = 0;
            }
            if (!token.sub) return token;

            // The account is re-read now and then rather than on every request
            // - the database is a round trip away - and whenever the session
            // is updated. Accounts with no business of their own used to query
            // their memberships on every single call.
            const due =
                trigger === 'update' ||
                !token.checkedAt ||
                Date.now() - token.checkedAt > SESSION_RECHECK_MS;
            if (!due) return token;

            const [account, membership] = await Promise.all([
                prisma.user.findUnique({
                    where: { id: token.sub },
                    select: { role: true, sessionVersion: true },
                }),
                prisma.membership.findFirst({
                    where: { userId: token.sub },
                    orderBy: { createdAt: 'asc' },
                    select: { organizationId: true, role: true },
                }),
            ]);

            // A deleted account, or a password changed since this session
            // began, ends it. A fresh sign-in (or a token from before versions
            // existed) takes the current version.
            if (!account) return null;
            if (user || token.sv === undefined) {
                token.sv = account.sessionVersion;
            } else if (token.sv !== account.sessionVersion) {
                return null;
            }

            token.role = account.role;
            token.organizationId = membership?.organizationId;
            token.orgRole = membership?.role;
            token.checkedAt = Date.now();
            return token;
        },
    },
});
