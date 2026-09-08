import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getOrgContext } from '@/lib/tenancy';

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
 * agency one, and a support session reading the log of the session it is
 * inside reads as the business's own record when it is not.
 */

const PAGE_SIZE = 200;

export async function GET() {
  try {
    const ctx = await getOrgContext();
    if (!ctx) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (ctx.role !== 'owner' || ctx.isStaff) {
      return NextResponse.json(
        { error: 'Only the owner can read this business’s access record' },
        { status: 403 }
      );
    }

    const entries = await prisma.staffAccessLog.findMany({
      where: { organizationId: ctx.organizationId },
      select: {
        id: true,
        action: true,
        method: true,
        path: true,
        createdAt: true,
        staffUser: { select: { name: true, email: true } },
      },
      orderBy: { createdAt: 'desc' },
      take: PAGE_SIZE,
    });

    return NextResponse.json({
      entries,
      // Said plainly rather than left for the reader to infer from a short list.
      truncated: entries.length === PAGE_SIZE,
    });
  } catch (error) {
    console.error('Failed to read the access record:', error);
    return NextResponse.json({ error: 'Failed to read the access record' }, { status: 500 });
  }
}
