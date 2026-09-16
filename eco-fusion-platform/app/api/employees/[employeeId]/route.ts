import { NextResponse } from 'next/server';
import { canAdminister } from '@/lib/tenancy';
import { activeOrg } from '@/lib/api-access';
import { prisma } from '@/lib/prisma';
import { assignedWithin } from '@/lib/schedule-scope';
import { visibleToOrganization } from '@/lib/training';

/** Most rows of any one kind the profile lists. */
const PROFILE_ROWS = 200;

// GET - One employee, and everything this business knows about their work.
//
// Nearly all of it hangs off the login rather than the employee record: shifts
// are assigned to an account, courses are completed by an account, sales are
// recorded by one. So somebody with no login has a profile with a name and an
// email and nothing else, and the page says so rather than showing empty
// sections that look like a person who has done nothing.
export async function GET(
    request: Request,
    { params }: { params: Promise<{ employeeId: string }> }
) {
    try {
        const { ctx, refusal } = await activeOrg();
        if (refusal) return refusal;
        if (!canAdminister(ctx)) {
            return NextResponse.json({ error: 'Admin access required' }, { status: 403 });
        }

        const { employeeId } = await params;

        // Scoped to the business, so an id from another one reads as absent
        // rather than as forbidden.
        const employee = await prisma.employee.findFirst({
            where: { id: employeeId, organizationId: ctx.organizationId },
            include: { account: { select: { id: true, email: true, image: true, createdAt: true } } },
        });

        if (!employee) {
            return NextResponse.json({ error: 'No such employee' }, { status: 404 });
        }

        const accountId = employee.accountId;

        if (!accountId) {
            return NextResponse.json({
                employee,
                hasLogin: false,
                orgRole: null,
                lastSignInAt: null,
                shifts: [],
                training: { assigned: [], completed: [] },
                sales: { count: 0, total: 0, recent: [] },
            });
        }

        // Independent of one another, so they go together rather than in a
        // queue. The database is a long way from the function asking.
        const [membership, lastSignIn, shifts, assigned, completed, salesTotals, recentSales] =
            await Promise.all([
                prisma.membership.findUnique({
                    where: {
                        userId_organizationId: {
                            userId: accountId,
                            organizationId: ctx.organizationId,
                        },
                    },
                    select: { role: true, createdAt: true },
                }),
                prisma.activityLog.findFirst({
                    where: {
                        organizationId: ctx.organizationId,
                        userId: accountId,
                        action: 'signin',
                    },
                    orderBy: { createdAt: 'desc' },
                    select: { createdAt: true },
                }),
                // Schedule carries no organizationId, so it is reached through
                // the account, and only while that account is a member here:
                // an employee row can name a login that has since left, or
                // never belonged, and its rota elsewhere is not ours to show.
                prisma.schedule.findMany({
                    where: { assigneeId: accountId, ...assignedWithin(ctx.organizationId) },
                    orderBy: [{ dayOfWeek: 'asc' }, { startTime: 'asc' }],
                    take: PROFILE_ROWS,
                    select: {
                        id: true,
                        title: true,
                        dayOfWeek: true,
                        startTime: true,
                        endTime: true,
                    },
                }),
                // Only courses this business can see: another business's own
                // courses, and its assignments, stay with that business.
                prisma.courseAssignment.findMany({
                    where: {
                        assigneeId: accountId,
                        ...assignedWithin(ctx.organizationId),
                        course: visibleToOrganization(ctx.organizationId),
                    },
                    orderBy: { createdAt: 'desc' },
                    take: PROFILE_ROWS,
                    select: {
                        id: true,
                        status: true,
                        dueDate: true,
                        course: { select: { code: true, title: true, isRequired: true } },
                    },
                }),
                prisma.courseCompletion.findMany({
                    where: {
                        userId: accountId,
                        user: { memberships: { some: { organizationId: ctx.organizationId } } },
                        course: visibleToOrganization(ctx.organizationId),
                    },
                    orderBy: { completedAt: 'desc' },
                    take: PROFILE_ROWS,
                    select: {
                        id: true,
                        completedAt: true,
                        course: { select: { code: true, title: true } },
                    },
                }),
                prisma.sale.aggregate({
                    where: { userId: accountId, organizationId: ctx.organizationId },
                    _count: true,
                    _sum: { total: true },
                }),
                prisma.sale.findMany({
                    where: { userId: accountId, organizationId: ctx.organizationId },
                    orderBy: { saleDate: 'desc' },
                    take: 5,
                    select: { id: true, saleDate: true, customerName: true, total: true },
                }),
            ]);

        return NextResponse.json({
            employee,
            hasLogin: true,
            orgRole: membership?.role ?? null,
            loginSince: membership?.createdAt ?? employee.account?.createdAt ?? null,
            lastSignInAt: lastSignIn?.createdAt ?? null,
            shifts,
            training: { assigned, completed },
            sales: {
                count: salesTotals._count,
                total: salesTotals._sum.total ?? 0,
                recent: recentSales,
            },
        });
    } catch (error) {
        console.error('Failed to fetch employee:', error);
        return NextResponse.json({ error: 'Failed to load that employee' }, { status: 500 });
    }
}
