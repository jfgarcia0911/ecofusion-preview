import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getOrgContext } from '@/lib/tenancy';

// GET - The business units this organization runs, in display order.
export async function GET() {
  try {
    const ctx = await getOrgContext();
    if (!ctx) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const units = await prisma.businessUnit.findMany({
      where: { organizationId: ctx.organizationId, enabled: true },
      orderBy: { sortOrder: 'asc' },
    });

    return NextResponse.json(units);
  } catch (error) {
    console.error('Failed to fetch business units:', error);
    return NextResponse.json({ error: 'Failed to fetch business units' }, { status: 500 });
  }
}
