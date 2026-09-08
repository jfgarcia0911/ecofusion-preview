import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';
import { ACTIVE_ORG_COOKIE } from '@/lib/tenancy';

/**
 * Switch which of your own businesses you are working in.
 *
 * The counterpart to /api/admin/session, which is staff stepping into somebody
 * else's business and is written to the access trail. This is a person moving
 * between businesses that are already theirs, so there is nothing to record.
 *
 * Membership is checked here and checked again on every read, so the cookie is
 * a preference rather than a credential.
 */
export async function POST(request: Request) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { organizationId } = await request.json();
    if (!organizationId || typeof organizationId !== 'string') {
      return NextResponse.json({ error: 'organizationId is required' }, { status: 400 });
    }

    const membership = await prisma.membership.findUnique({
      where: { userId_organizationId: { userId: session.user.id, organizationId } },
      select: { role: true, organization: { select: { id: true, name: true } } },
    });

    // Not a member: the same answer as a business that does not exist, so this
    // cannot be used to find out which ids are real.
    if (!membership) {
      return NextResponse.json({ error: 'No such business' }, { status: 404 });
    }

    const response = NextResponse.json({
      organization: membership.organization,
      role: membership.role,
    });
    response.cookies.set(ACTIVE_ORG_COOKIE, organizationId, {
      httpOnly: true,
      sameSite: 'lax',
      path: '/',
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 365,
    });
    return response;
  } catch (error) {
    console.error('Failed to switch business:', error);
    return NextResponse.json({ error: 'Failed to switch business' }, { status: 500 });
  }
}

// DELETE - go back to the default choice, which is the oldest membership.
export async function DELETE() {
  const response = NextResponse.json({ cleared: true });
  response.cookies.delete(ACTIVE_ORG_COOKIE);
  return response;
}
