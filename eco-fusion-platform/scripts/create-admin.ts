/**
 * Admin User Creation Script
 *
 * Usage: npx ts-node scripts/create-admin.ts
 * Or: npx tsx scripts/create-admin.ts
 *
 * This script creates or updates admin users in the database.
 */

import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

interface AdminUser {
    email: string;
    password: string;
    name: string;
    role: 'admin' | 'manager';
}

// Define admin users to create
const ADMIN_USERS: AdminUser[] = [
    {
        email: 'support@llayd.com',
        password: 'C@sper11',
        name: 'LLAYD Support',
        role: 'admin',
    },
    // Add more admin users here as needed
    // {
    //     email: 'admin@example.com',
    //     password: 'SecurePassword123!',
    //     name: 'Admin User',
    //     role: 'admin',
    // },
];

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
