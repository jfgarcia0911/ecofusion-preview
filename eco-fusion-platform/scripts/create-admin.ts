/**
 * Creates or promotes a staff account.
 *
 * Usage:
 *   ADMIN_EMAIL=you@example.com ADMIN_PASSWORD='...' npx tsx scripts/create-admin.ts
 *
 * Optional: ADMIN_NAME, ADMIN_ROLE (master | platform_staff, default master).
 *
 * The credentials are read from the environment and never written down here.
 * A password committed to a repository is a password that has been published:
 * this file previously carried a live one, and it had to be treated as burned
 * the moment the repository was readable by anyone who was not meant to see it.
 */

import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

interface AdminUser {
    email: string;
    password: string;
    name: string;
    role: 'master' | 'platform_staff';
}

function adminUsersFromEnv(): AdminUser[] {
    const email = process.env.ADMIN_EMAIL?.trim().toLowerCase();
    const password = process.env.ADMIN_PASSWORD;
    const role = (process.env.ADMIN_ROLE ?? 'master') as AdminUser['role'];

    if (!email || !password) {
        console.error(
            'ADMIN_EMAIL and ADMIN_PASSWORD must both be set. For example:\n' +
                "  ADMIN_EMAIL=you@example.com ADMIN_PASSWORD='...' npx tsx scripts/create-admin.ts"
        );
        process.exit(1);
    }

    if (role !== 'master' && role !== 'platform_staff') {
        console.error(`ADMIN_ROLE must be 'master' or 'platform_staff', not '${role}'.`);
        process.exit(1);
    }

    return [{ email, password, role, name: process.env.ADMIN_NAME ?? email }];
}

const ADMIN_USERS: AdminUser[] = adminUsersFromEnv();

async function createAdminUsers() {
    console.log('🔐 Starting admin user creation...\n');

    for (const adminUser of ADMIN_USERS) {
        try {
            // Check if user already exists
            const existingUser = await prisma.user.findUnique({
                where: { email: adminUser.email },
            });

            const hashedPassword = await bcrypt.hash(adminUser.password, 12);

            if (existingUser) {
                // Update existing user to admin
                await prisma.user.update({
                    where: { email: adminUser.email },
                    data: {
                        role: adminUser.role,
                        password: hashedPassword,
                        name: adminUser.name,
                    },
                });
                console.log(`✅ Updated existing user to ${adminUser.role}: ${adminUser.email}`);
            } else {
                // Create new admin user
                await prisma.user.create({
                    data: {
                        email: adminUser.email,
                        password: hashedPassword,
                        name: adminUser.name,
                        role: adminUser.role,
                        onboardingComplete: true, // Skip onboarding for admin
                    },
                });
                console.log(`✅ Created new ${adminUser.role} user: ${adminUser.email}`);
            }
        } catch (error) {
            console.error(`❌ Failed to create/update user ${adminUser.email}:`, error);
        }
    }

    console.log('\n🎉 Admin user creation complete!');
}

// Run the script
createAdminUsers()
    .catch((error) => {
        console.error('Script failed:', error);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
