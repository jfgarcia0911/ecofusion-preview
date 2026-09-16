import { prisma } from '@/lib/prisma';

/**
 * Which schedules and assigned tasks belong to a business: the ones recorded
 * against it. Before the column existed a record was placed by its assignee's
 * membership, which showed a person's shifts from one business to the other.
 */
export function assignedWithin(organizationId: string) {
    return { organizationId };
}

/** Whether somebody may be given a shift or a task in this business. */
export async function isMemberOf(userId: string, organizationId: string): Promise<boolean> {
    const membership = await prisma.membership.findUnique({
        where: { userId_organizationId: { userId, organizationId } },
        select: { id: true },
    });
    return Boolean(membership);
}
