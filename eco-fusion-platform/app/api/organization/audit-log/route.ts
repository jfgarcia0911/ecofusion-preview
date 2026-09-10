import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { activeOrg } from '@/lib/api-access';
import { isMasterRole } from '@/lib/roles';

/**
 * The record of EcoFusion staff working inside this business.
 *
 * The same trail the agency reads, turned around: there it answers "what have
 * our people been doing", here it answers "who has been in my business". A
 * customer whose data can be opened by the people who host it is owed the list
 * without having to ask for it.
 *
 * Scoped to the caller's own business and to the owner, who is the person
 * answerable for it. Staff do not read it through this route - they have the
 * agency one. The master account can, since it enters as the owner; nothing
 * in a business is closed to it, and its own lines are marked as its own.
 */

const PAGE_SIZE = 200;

export async function GET() {
  try {
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;

    // The master account enters as the owner, so it passes. Other staff are
    // supervisors inside a business and read the agency's log instead.
    if (ctx.role !== 'owner') {
      return NextResponse.json(
        { error: 'Only the owner can read this business’s access record' },
        { status: 403 }
      );
    }

    const [staff, members] = await Promise.all([
      prisma.staffAccessLog.findMany({
        where: { organizationId: ctx.organizationId },
        select: {
          id: true,
          action: true,
          method: true,
          path: true,
          detail: true,
          createdAt: true,
          staffUser: { select: { name: true, email: true, role: true } },
        },
        orderBy: { createdAt: 'desc' },
        take: PAGE_SIZE,
      }),
      prisma.activityLog.findMany({
        where: { organizationId: ctx.organizationId },
        select: {
          id: true,
          action: true,
          method: true,
          path: true,
          createdAt: true,
          user: { select: { name: true, email: true } },
        },
        orderBy: { createdAt: 'desc' },
        take: PAGE_SIZE,
      }),
    ]);

    // One record, two sources: EcoFusion coming in, and the business's own
    // people working. `by` says which, because "made a change" means something
    // different depending on who did it.
    const entries = [
      ...staff.map((e) => ({
        id: `s_${e.id}`,
        by: 'staff' as const,
        action: e.action,
        method: e.method,
        path: e.path,
        detail: e.detail,
        createdAt: e.createdAt,
        who: { name: e.staffUser.name, email: e.staffUser.email },
        // The master account has no limits inside a business, so its lines
        // say so rather than passing as any other visit.
        master: isMasterRole(e.staffUser.role),
      })),
      ...members.map((e) => ({
        id: `m_${e.id}`,
        by: 'member' as const,
        action: e.action,
        method: e.method,
        path: e.path,
        detail: null,
        createdAt: e.createdAt,
        who: e.user,
        master: false,
      })),
    ]
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
      .slice(0, PAGE_SIZE);

    return NextResponse.json({
      entries,
      // Said plainly rather than left for the reader to infer from a short list.
      truncated: staff.length === PAGE_SIZE || members.length === PAGE_SIZE,
    });
  } catch (error) {
    console.error('Failed to read the access record:', error);
    return NextResponse.json({ error: 'Failed to read the access record' }, { status: 500 });
  }
}
