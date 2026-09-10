import { prisma } from '@/lib/prisma';

/**
 * Which schedules and assigned tasks belong to a business.
 *
 * Neither record carries a business of its own - they were written when there
 * was only one - so "admin sees all" meant every business on the platform: an
 * owner opening Scheduling read other customers' rotas, with their people's
 * names and emails. A record belongs here when the person it is assigned to
 * does, which every record already says.
 *
 * Not a full answer for somebody who works in two businesses, whose rota from
 * one would show in the other. That needs the business written on the record,
 * which is a column and a backfill rather than a filter.
 */
export function assignedWithin(organizationId: string) {
    return { assignee: { memberships: { some: { organizationId } } } };
}

/** Whether somebody may be given a shift or a task in this business. */
export async function isMemberOf(userId: string, organizationId: string): Promise<boolean> {
    const membership = await prisma.membership.findUnique({
        where: { userId_organizationId: { userId, organizationId } },
        select: { id: true },
    });
    return Boolean(membership);
}
