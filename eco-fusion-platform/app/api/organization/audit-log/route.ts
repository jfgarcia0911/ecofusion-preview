import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { activeOrg } from '@/lib/api-access';
import { standingOfRoles } from '@/lib/roles';
import { NOT_BY_ECOFUSION_ADMIN } from '@/lib/staff';

/** How each standing reads to a business owner looking at who has been in. */
const STAFF_LABELS: Record<string, string> = {
  'EcoFusion admin': 'EcoFusion admin',
  'EcoFusion staff': 'EcoFusion',
  'Master account': 'Your agency (master account)',
  'Agency staff': 'Your agency',
};

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

    // Anybody with full control enters as the owner, so passes: the EcoFusion
    // admin, or the agency's master account. Staff enter as supervisors and
    // read their own team's log instead.
    if (ctx.role !== 'owner') {
      return NextResponse.json(
        { error: 'Only the owner can read this business’s access record' },
        { status: 403 }
      );
    }

    const [staff, members] = await Promise.all([
      prisma.staffAccessLog.findMany({
        // The EcoFusion admin's visits are not shown to the business. Its
        // support staff's are. The admin, stepped in, still sees them all.
        where: {
          organizationId: ctx.organizationId,
          ...(ctx.isPlatformAdmin ? {} : NOT_BY_ECOFUSION_ADMIN),
        },
        select: {
          id: true,
          action: true,
          method: true,
          path: true,
          detail: true,
          createdAt: true,
          staffName: true,
          staffEmail: true,
          staffStanding: true,
          staffUser: { select: { name: true, email: true, role: true, agencyMembership: { select: { role: true } } } },
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
      ...staff.map((e) => {
        // A deleted account's lines stay, with who they were written onto
        // them as the account went.
        const standing = e.staffUser
          ? standingOfRoles(e.staffUser.role, e.staffUser.agencyMembership?.role)
          : e.staffStanding ?? 'Member';
        return {
          id: `s_${e.id}`,
          by: 'staff' as const,
          action: e.action,
          method: e.method,
          path: e.path,
          detail: e.detail,
          createdAt: e.createdAt,
          who: e.staffUser
            ? { name: e.staffUser.name, email: e.staffUser.email }
            : { name: e.staffName, email: `${e.staffEmail ?? 'Unknown'} (account deleted)` },
          // Whose visit it was, said plainly: EcoFusion, or this business's own
          // agency. The two are different kinds of people to have been in.
          label: STAFF_LABELS[standing] ?? 'Your agency',
        };
      }),
      ...members.map((e) => ({
        id: `m_${e.id}`,
        by: 'member' as const,
        action: e.action,
        method: e.method,
        path: e.path,
        detail: null,
        createdAt: e.createdAt,
        who: e.user,
        label: 'Your team',
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
