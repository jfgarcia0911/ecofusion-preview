import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { Prisma } from '@prisma/client';
import { prisma } from '@/lib/prisma';
import { logStaffAccess } from '@/lib/staff';
import { validatePassword } from '@/lib/validation/password';
import { AGENCY_ROLES } from '@/lib/roles';
import { evaluateAccess, provisionOrganization } from '@/lib/tenancy';
import { provisionAgency, requireScope } from '@/lib/agency';
import { isPlanKey, planFor, usageLabel } from '@/lib/plans';

/**
 * Every agency on the platform, for EcoFusion's console.
 *
 * The EcoFusion admin sees and manages all of them: their plans, their
 * trials, and setting a new one up. EcoFusion staff see the agencies in which
 * they were given at least one business, and change nothing here.
 */

// GET - every agency, with its plan, standing and how much of it is used.
export async function GET(request: Request) {
    try {
        const scope = await requireScope({ prefer: 'platform', kind: 'platform' });
        if (scope instanceof NextResponse) return scope;

        const search = new URL(request.url).searchParams.get('q')?.trim();

        const agencies = await prisma.agency.findMany({
            where: {
                ...(scope.admin
                    ? {}
                    : { organizations: { some: { staffBusinessAccess: { some: { userId: scope.userId } } } } }),
                ...(search ? { name: { contains: search, mode: 'insensitive' as const } } : {}),
            },
            select: {
                id: true,
                name: true,
                plan: true,
                subscriptionStatus: true,
                trialEndsAt: true,
                currentPeriodEnd: true,
                createdAt: true,
                members: {
                    where: { role: AGENCY_ROLES.ADMIN },
                    select: { user: { select: { name: true, email: true } } },
                    take: 1,
                },
                _count: { select: { organizations: true, members: true } },
            },
            orderBy: { createdAt: 'desc' },
            take: 200,
        });

        return NextResponse.json({
            canManage: scope.admin,
            agencies: agencies.map((agency) => {
                const plan = planFor(agency.plan);
                const access = evaluateAccess(agency);
                return {
                    id: agency.id,
                    name: agency.name,
                    plan: plan.key,
                    planName: plan.name,
                    subscriptionStatus: agency.subscriptionStatus,
                    trialEndsAt: agency.trialEndsAt,
                    createdAt: agency.createdAt,
                    admin: agency.members[0]?.user ?? null,
                    teamSize: agency._count.members,
                    businesses: agency._count.organizations,
                    usage: usageLabel(agency._count.organizations, plan),
                    overLimit: agency._count.organizations > plan.subAccountLimit,
                    standing:
                        access.reason === 'active' ? 'active' : access.reason === 'trialing' ? 'trial' : 'inactive',
                    trialDaysLeft: access.reason === 'trialing' ? access.daysLeft : null,
                };
            }),
        });
    } catch (error) {
        console.error('Failed to list agencies:', error);
        return NextResponse.json({ error: 'Failed to list agencies' }, { status: 500 });
    }
}

// POST - set up a new agency: its master account's login, and its first business.
//
// The same thing signing up produces, done on somebody's behalf.
export async function POST(request: Request) {
    try {
        const scope = await requireScope({ prefer: 'platform', kind: 'platform' });
        if (scope instanceof NextResponse) return scope;
        if (!scope.admin) {
            return NextResponse.json({ error: 'Only an EcoFusion admin can set up an agency' }, { status: 403 });
        }

        const body = await request.json();
        const name = String(body.name ?? '').trim();
        const businessName = String(body.businessName ?? '').trim() || name;
        const adminName = String(body.adminName ?? '').trim();
        const adminEmail = String(body.adminEmail ?? '').trim().toLowerCase();
        const adminPassword = String(body.adminPassword ?? '');
        const plan = isPlanKey(body.plan) ? body.plan : 'starter';

        if (!name) return NextResponse.json({ error: 'An agency name is required' }, { status: 400 });
        if (!adminEmail || !adminPassword) {
            return NextResponse.json(
                { error: "The master account's email and a starting password are both required" },
                { status: 400 }
            );
        }
        const strength = validatePassword(adminPassword);
        if (!strength.isValid) {
            return NextResponse.json({ error: strength.errors[0], errors: strength.errors }, { status: 400 });
        }
        if (await prisma.user.findUnique({ where: { email: adminEmail }, select: { id: true } })) {
            return NextResponse.json({ error: 'That email already has an account' }, { status: 409 });
        }

        const admin = await prisma.user.create({
            data: {
                name: adminName || adminEmail,
                email: adminEmail,
                password: await bcrypt.hash(adminPassword, 12),
            },
            select: { id: true, name: true, email: true },
        });

        const agencyId = await provisionAgency({ name, adminUserId: admin.id, plan });
        const organizationId = await provisionOrganization({
            agencyId,
            ownerUserId: admin.id,
            name: businessName,
        });

        await logStaffAccess(scope.userId, organizationId, 'write', {
            method: 'POST',
            path: '/api/admin/agencies',
            agencyId,
            summary: `Set up the agency "${name}" on ${planFor(plan).name}, with ${admin.email} as its master account`,
        });

        return NextResponse.json({ id: agencyId, name, admin }, { status: 201 });
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
            return NextResponse.json({ error: 'That email already has an account' }, { status: 409 });
        }
        console.error('Failed to create agency:', error);
        return NextResponse.json({ error: 'Failed to set up the agency' }, { status: 500 });
    }
}

// PATCH - change an agency's plan, extend its trial, or rename it.
//
// For support and for arrangements made outside Stripe. A plan paid through
// Stripe is kept in step by the webhook, so changing it here is for agencies
// that are not paying through it (a trial, or a deal agreed by hand).
export async function PATCH(request: Request) {
    try {
        const scope = await requireScope({ prefer: 'platform', kind: 'platform' });
        if (scope instanceof NextResponse) return scope;
        if (!scope.admin) {
            return NextResponse.json({ error: 'Only an EcoFusion admin can change an agency' }, { status: 403 });
        }

        const body = await request.json();
        const agencyId = String(body.agencyId ?? '');
        const agency = await prisma.agency.findUnique({
            where: { id: agencyId },
            select: { id: true, name: true, plan: true, trialEndsAt: true, subscriptionStatus: true },
        });
        if (!agency) return NextResponse.json({ error: 'No such agency' }, { status: 404 });

        const data: Prisma.AgencyUpdateInput = {};
        const changes: string[] = [];

        if (body.plan !== undefined) {
            if (!isPlanKey(body.plan)) return NextResponse.json({ error: 'Unknown plan' }, { status: 400 });
            if (body.plan !== agency.plan) {
                data.plan = body.plan;
                changes.push(`plan ${planFor(agency.plan).name} to ${planFor(body.plan).name}`);
            }
        }

        if (body.extendTrialDays !== undefined) {
            const days = Number(body.extendTrialDays);
            if (!Number.isInteger(days) || days < 1 || days > 90) {
                return NextResponse.json({ error: 'Extend the trial by 1 to 90 days' }, { status: 400 });
            }
            // From whichever is later: now, or when the trial was due to end.
            const from = Math.max(Date.now(), agency.trialEndsAt?.getTime() ?? 0);
            data.trialEndsAt = new Date(from + days * 86_400_000);
            if (agency.subscriptionStatus !== 'active') data.subscriptionStatus = 'trialing';
            changes.push(`trial extended by ${days} day${days === 1 ? '' : 's'}`);
        }

        if (typeof body.name === 'string' && body.name.trim() && body.name.trim() !== agency.name) {
            data.name = body.name.trim().slice(0, 100);
            changes.push(`renamed to "${data.name}"`);
        }

        if (!changes.length) return NextResponse.json({ changed: false });

        await prisma.agency.update({ where: { id: agency.id }, data });
        await logStaffAccess(scope.userId, null, 'write', {
            method: 'PATCH',
            path: '/api/admin/agencies',
            agencyId: agency.id,
            summary: `Changed the agency "${agency.name}": ${changes.join(', ')}`,
        });

        return NextResponse.json({ changed: true });
    } catch (error) {
        console.error('Failed to change agency:', error);
        return NextResponse.json({ error: 'Failed to change the agency' }, { status: 500 });
    }
}

