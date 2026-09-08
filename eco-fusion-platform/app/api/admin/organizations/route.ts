import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { Prisma } from '@prisma/client';
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';
import { isPlatformAdmin, logStaffAccess } from '@/lib/staff';
import { provisionOrganization } from '@/lib/tenancy';
import { validatePassword } from '@/lib/validation/password';

// GET - Every business on the platform, for EcoFusion staff.
//
// The only route in the app that reads across organizations. It returns what
// is needed to find a business and judge its state, and no business data: staff
// who want to see inside one have to step into it, which is recorded.
export async function GET(request: Request) {
    try {
        const session = await auth();
        if (!session?.user?.id) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        if (!(await isPlatformAdmin(session.user.id))) {
            return NextResponse.json({ error: 'Staff access required' }, { status: 403 });
        }

        const search = new URL(request.url).searchParams.get('q')?.trim();

        const organizations = await prisma.organization.findMany({
            where: search
                ? {
                      OR: [
                          { name: { contains: search, mode: 'insensitive' } },
                          { slug: { contains: search, mode: 'insensitive' } },
                      ],
                  }
                : undefined,
            select: {
                id: true,
                name: true,
                slug: true,
                plan: true,
                subscriptionStatus: true,
                trialEndsAt: true,
                createdAt: true,
                memberships: {
                    where: { role: 'owner' },
                    select: { user: { select: { name: true, email: true } } },
                    take: 1,
                },
                _count: { select: { memberships: true } },
            },
            orderBy: { createdAt: 'desc' },
            take: 100,
        });

        return NextResponse.json({
            organizations: organizations.map((org) => ({
                id: org.id,
                name: org.name,
                slug: org.slug,
                plan: org.plan,
                subscriptionStatus: org.subscriptionStatus,
                trialEndsAt: org.trialEndsAt,
                createdAt: org.createdAt,
                memberCount: org._count.memberships,
                owner: org.memberships[0]?.user ?? null,
            })),
        });
    } catch (error) {
        console.error('Failed to list organizations:', error);
        return NextResponse.json({ error: 'Failed to list businesses' }, { status: 500 });
    }
}

// POST - Set a business up on behalf of a customer.
//
// The other way a business comes into existence is somebody signing themselves
// up. This is the same act performed by staff: the owner gets a real login they
// can use immediately, and the business gets the same trial and the same
// starting configuration as any other. Nothing here is a lesser kind of
// business, and staff hold no standing membership in it - reaching inside still
// means stepping in, which is recorded.
export async function POST(request: Request) {
    try {
        const session = await auth();
        if (!session?.user?.id) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        if (!(await isPlatformAdmin(session.user.id))) {
            return NextResponse.json({ error: 'Staff access required' }, { status: 403 });
        }

        const body = await request.json();
        const name = String(body.name ?? '').trim();
        const ownerName = String(body.ownerName ?? '').trim();
        const ownerEmail = String(body.ownerEmail ?? '').trim().toLowerCase();
        const ownerPassword = String(body.ownerPassword ?? '');

        if (!name) {
            return NextResponse.json({ error: 'A business name is required' }, { status: 400 });
        }
        if (!ownerEmail || !ownerPassword) {
            return NextResponse.json(
                { error: "The owner's email and a starting password are both required" },
                { status: 400 }
            );
        }

        // Held to the same standard as a password someone chooses for
        // themselves. A business set up by staff is not a place for a weaker one.
        const strength = validatePassword(ownerPassword);
        if (!strength.isValid) {
            return NextResponse.json(
                { error: strength.errors[0], errors: strength.errors },
                { status: 400 }
            );
        }

        const existing = await prisma.user.findUnique({
            where: { email: ownerEmail },
            select: { id: true },
        });
        if (existing) {
            return NextResponse.json(
                {
                    error:
                        'That email already has an account. It already owns a business, ' +
                        'so adding it here would leave the person with two.',
                },
                { status: 409 }
            );
        }

        const owner = await prisma.user.create({
            data: {
                name: ownerName || ownerEmail,
                email: ownerEmail,
                password: await bcrypt.hash(ownerPassword, 12),
            },
        });

        const organizationId = await provisionOrganization({
            ownerUserId: owner.id,
            name,
        });

        // Written to the same trail as any other staff act on a business, so
        // the record of who created it sits beside the record of who entered it.
        await logStaffAccess(session.user.id, organizationId, 'write', {
            method: 'POST',
            path: '/api/admin/organizations',
        });

        const organization = await prisma.organization.findUniqueOrThrow({
            where: { id: organizationId },
            select: {
                id: true,
                name: true,
                slug: true,
                plan: true,
                subscriptionStatus: true,
                trialEndsAt: true,
                createdAt: true,
            },
        });

        return NextResponse.json(
            {
                organization: {
                    ...organization,
                    memberCount: 1,
                    owner: { name: owner.name, email: owner.email },
                },
            },
            { status: 201 }
        );
    } catch (error) {
        // A duplicate email that slipped past the check above races the unique
        // index, and the caller gets the answer it would have got a moment
        // earlier rather than a 500 carrying Prisma's internals.
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
            return NextResponse.json(
                { error: 'That email already has an account' },
                { status: 409 }
            );
        }
        console.error('Failed to create business:', error);
        return NextResponse.json({ error: 'Failed to create the business' }, { status: 500 });
    }
}
