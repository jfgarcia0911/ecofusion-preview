import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';

// Demo users - in production, replace with database lookup
// SECURITY: Credentials must be set via environment variables
const DEMO_USERS = [
    {
        id: '1',
        email: process.env.ADMIN_EMAIL || 'admin@ecofusion.com',
        password: process.env.ADMIN_PASSWORD,
        name: 'EcoFusion Admin',
        image: 'https://i.pravatar.cc/150?u=admin',
        role: 'admin'
    },
    {
        id: '2',
        email: process.env.OPS_EMAIL || 'ops@ecofusion.com',
        password: process.env.OPS_PASSWORD,
        name: 'Ops Manager',
        image: 'https://i.pravatar.cc/150?u=ops',
        role: 'manager'
    }
].filter(user => user.password); // Only include users with passwords configured

export const { handlers, auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                if (!credentials) return null;
                const { email, password } = credentials;

                // Find matching user
                const user = DEMO_USERS.find(
                    u => u.email === email && u.password === password
                );

                if (user) {
                    return {
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        image: user.image,
                        role: user.role
                    };
                }

                return null;
            },
        }),
    ],
});
