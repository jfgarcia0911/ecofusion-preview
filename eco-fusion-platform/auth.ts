import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import Google from 'next-auth/providers/google';
import { PrismaAdapter } from '@auth/prisma-adapter';
import bcrypt from 'bcryptjs';
import { authConfig } from './auth.config';
import { ensurePersonalOrganization } from './lib/tenancy';
import { prisma } from './lib/prisma';

export const { handlers, auth, signIn, signOut } = NextAuth({
    ...authConfig,
    adapter: PrismaAdapter(prisma) as any,
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
