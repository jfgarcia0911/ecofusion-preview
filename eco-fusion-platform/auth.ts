import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import Google from 'next-auth/providers/google';
import { PrismaAdapter } from '@auth/prisma-adapter';
import type { Adapter } from 'next-auth/adapters';
import bcrypt from 'bcryptjs';
import { authConfig } from './auth.config';
import { ensurePersonalOrganization } from './lib/tenancy';
import { logSignIn } from './lib/activity';
import { prisma } from './lib/prisma';

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
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    return null;
                }

                const user = await prisma.user.findUnique({
                    where: { email: credentials.email as string },
                });

                if (!user || !user.password) {
                    return null;
                }

                const isPasswordValid = await bcrypt.compare(
                    credentials.password as string,
                    user.password
                );

                if (!isPasswordValid) {
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
            }
            // Resolve the organization once per token rather than on every request.
            if (token.sub && !token.organizationId) {
                const membership = await prisma.membership.findFirst({
                    where: { userId: token.sub },
                    orderBy: { createdAt: 'asc' },
                    select: { organizationId: true, role: true },
                });
                if (membership) {
                    token.organizationId = membership.organizationId;
                    token.orgRole = membership.role;
                }
            }
            // Refresh role from database on update
            if (trigger === 'update' && token.sub) {
                const dbUser = await prisma.user.findUnique({
                    where: { id: token.sub },
                    select: { role: true },
                });
                if (dbUser) {
                    token.role = dbUser.role;
                }
                const membership = await prisma.membership.findFirst({
                    where: { userId: token.sub },
                    orderBy: { createdAt: 'asc' },
                    select: { organizationId: true, role: true },
                });
                if (membership) {
                    token.organizationId = membership.organizationId;
                    token.orgRole = membership.role;
                }
            }
            return token;
        },
    },
});
