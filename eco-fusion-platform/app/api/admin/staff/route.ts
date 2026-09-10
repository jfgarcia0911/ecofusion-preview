import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';
import { isPlatformOwner, logStaffAccess, staffCan } from '@/lib/staff';
import { PERMISSIONS, cleanPermissions, permissionLabel } from '@/lib/staff-permissions';
import { validatePassword } from '@/lib/validation/password';
import { PLATFORM_ROLES } from '@/lib/roles';

/**
 * EcoFusion's own people, and which businesses each of them may work in.
 *
 * Not a customer's team: nobody here is employed by a business, and none of
 * this touches Membership. A platform_staff account is the master account's
 * assistant, and reaches a business only because the owner handed it over -
 * one business at a time, so somebody brought in to look after three customers
 * cannot open the other forty.
 *
 * The owner alone works this route. An assistant who could appoint assistants
 * would be an owner, and could reach every business by granting it to
 * themselves.
 */

/**
 * For reading: the master account, or staff with "See the team".
 *
 * A colleague list, not a lever: knowing that somebody looks after three
 * customers, or what they may do there, is not the same as being able to give
 * yourself either.
 */
async function requirePlatform(): Promise<{ userId: string; isOwner: boolean } | NextResponse> {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  if (!(await staffCan(session.user.id, PERMISSIONS.SEE_TEAM))) {
    return NextResponse.json(
      { error: 'Your EcoFusion access does not include seeing the team. Ask the master account.' },
      { status: 403 }
    );
  }
  return { userId: session.user.id, isOwner: await isPlatformOwner(session.user.id) };
}

async function requireOwner(): Promise<{ userId: string } | NextResponse> {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  if (!(await isPlatformOwner(session.user.id))) {
    return NextResponse.json(
      { error: "Only EcoFusion's owner can manage staff" },
      { status: 403 }
    );
  }
  return { userId: session.user.id };
}

// GET - every staff account, and what each one reaches.
export async function GET() {
  try {
    const guard = await requirePlatform();
    if (guard instanceof NextResponse) return guard;

    const staff = await prisma.user.findMany({
      where: { role: PLATFORM_ROLES.STAFF },
      orderBy: { createdAt: 'asc' },
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
        staffPermissions: true,
        staffBusinesses: {
          orderBy: { createdAt: 'asc' },
          select: { organization: { select: { id: true, name: true } } },
        },
      },
    });

    // The things a grant can name, and only for the person who can grant. A
    // staff account reading the team has no need for the full list of every
    // business on the platform, so it is not sent one.
    const businesses = guard.isOwner
      ? await prisma.organization.findMany({
          orderBy: { name: 'asc' },
          select: { id: true, name: true },
        })
      : [];

    return NextResponse.json({
      /** Whether this reader may change any of it, or only look. */
      canManage: guard.isOwner,
      staff: staff.map((s) => ({
        id: s.id,
        name: s.name,
        email: s.email,
        createdAt: s.createdAt,
        permissions: cleanPermissions(s.staffPermissions),
        businesses: s.staffBusinesses.map((b) => b.organization),
      })),
      businesses,
    });
  } catch (error) {
    console.error('Failed to list staff:', error);
    return NextResponse.json({ error: 'Failed to list staff' }, { status: 500 });
  }
}

// POST - take somebody on.
export async function POST(request: Request) {
  try {
    const guard = await requireOwner();
    if (guard instanceof NextResponse) return guard;

    const { name, email, password, permissions } = await request.json();
    const starting = cleanPermissions(permissions);
    if (!email || !password) {
      return NextResponse.json(
        { error: 'An email and a starting password are both required' },
        { status: 400 }
      );
    }

    const strength = validatePassword(password);
    if (!strength.isValid) {
      return NextResponse.json({ error: strength.errors[0] }, { status: 400 });
    }

    const normalisedEmail = String(email).trim().toLowerCase();
    if (await prisma.user.findUnique({ where: { email: normalisedEmail }, select: { id: true } })) {
      return NextResponse.json({ error: 'That email already has an account' }, { status: 409 });
    }

    const created = await prisma.user.create({
      data: {
        name: name?.trim() || null,
        email: normalisedEmail,
        password: await bcrypt.hash(password, 12),
        role: PLATFORM_ROLES.STAFF,
        staffPermissions: starting,
        onboardingComplete: true,
      },
      select: { id: true, name: true, email: true, createdAt: true, staffPermissions: true },
    });

    await logStaffAccess(guard.userId, null, 'write', {
      method: 'POST',
      path: '/api/admin/staff',
      summary:
        `Took on ${created.email} as EcoFusion staff` +
        (starting.length ? `, able to: ${starting.map(permissionLabel).join(', ')}` : ', able to do nothing yet'),
    });

    // No business comes with the account. Reach is handed over deliberately,
    // one at a time, rather than arriving with the job.
    return NextResponse.json(
      { ...created, permissions: cleanPermissions(created.staffPermissions), businesses: [] },
      { status: 201 }
    );
  } catch (error) {
    console.error('Failed to create staff:', error);
    return NextResponse.json({ error: 'Failed to create the staff account' }, { status: 500 });
  }
}

// PUT - set exactly which businesses one staff account reaches.
export async function PUT(request: Request) {
  try {
    const guard = await requireOwner();
    if (guard instanceof NextResponse) return guard;

    const { userId, organizationIds } = await request.json();
    if (!userId || !Array.isArray(organizationIds)) {
      return NextResponse.json(
        { error: 'userId and organizationIds are required' },
        { status: 400 }
      );
    }

    const target = await prisma.user.findUnique({
      where: { id: userId },
      select: { role: true, email: true },
    });
    if (target?.role !== PLATFORM_ROLES.STAFF) {
      return NextResponse.json({ error: 'That is not a staff account' }, { status: 404 });
    }

    const before = new Set(
      (
        await prisma.staffBusinessAccess.findMany({
          where: { userId },
          select: { organizationId: true },
        })
      ).map((row) => row.organizationId)
    );

    const wanted = [...new Set(organizationIds.map(String))];
    const real = await prisma.organization.findMany({
      where: { id: { in: wanted } },
      select: { id: true },
    });
    const realIds = real.map((o) => o.id);

    // Sent as the whole answer rather than an addition, so unticking is how
    // access is taken away and one request cannot half-apply.
    await prisma.$transaction([
      prisma.staffBusinessAccess.deleteMany({
        where: { userId, organizationId: { notIn: realIds.length ? realIds : ['-'] } },
      }),
      prisma.staffBusinessAccess.createMany({
        data: realIds.map((organizationId) => ({
          userId,
          organizationId,
          grantedById: guard.userId,
        })),
        skipDuplicates: true,
      }),
    ]);

    const now = await prisma.staffBusinessAccess.findMany({
      where: { userId },
      orderBy: { createdAt: 'asc' },
      select: { organization: { select: { id: true, name: true } } },
    });

    // One line for the change as a whole, and one in each business that was
    // handed over or taken back, so its owner sees in their own record that
    // somebody new may now come in.
    const given = now.filter((b) => !before.has(b.organization.id)).map((b) => b.organization);
    const taken = [...before].filter((id) => !realIds.includes(id));
    if (given.length || taken.length) {
      await logStaffAccess(guard.userId, null, 'write', {
        method: 'PUT',
        path: '/api/admin/staff',
        summary:
          `Changed what ${target.email} reaches: ` +
          `${given.length} business${given.length === 1 ? '' : 'es'} given, ${taken.length} taken back`,
      });
      await Promise.all([
        ...given.map((b) =>
          logStaffAccess(guard.userId, b.id, 'write', {
            method: 'PUT',
            path: '/api/admin/staff',
            summary: `Let ${target.email} from EcoFusion into this business`,
          })
        ),
        ...taken.map((id) =>
          logStaffAccess(guard.userId, id, 'write', {
            method: 'PUT',
            path: '/api/admin/staff',
            summary: `Took away ${target.email}'s access to this business`,
          })
        ),
      ]);
    }

    return NextResponse.json({ businesses: now.map((b) => b.organization) });
  } catch (error) {
    console.error('Failed to set staff access:', error);
    return NextResponse.json({ error: 'Failed to set what they reach' }, { status: 500 });
  }
}

// PATCH - set exactly what one staff account may do.
//
// The master account's alone, whatever anybody else has been given: a staff
// member who could change permissions could give themselves all of them.
export async function PATCH(request: Request) {
  try {
    const guard = await requireOwner();
    if (guard instanceof NextResponse) return guard;

    const { userId, permissions } = await request.json();
    if (!userId || !Array.isArray(permissions)) {
      return NextResponse.json({ error: 'userId and permissions are required' }, { status: 400 });
    }

    const target = await prisma.user.findUnique({
      where: { id: userId },
      select: { role: true, email: true, staffPermissions: true },
    });
    if (target?.role !== PLATFORM_ROLES.STAFF) {
      return NextResponse.json({ error: 'That is not a staff account' }, { status: 404 });
    }

    const wanted = cleanPermissions(permissions);
    const before = new Set(cleanPermissions(target.staffPermissions));
    const added = wanted.filter((p) => !before.has(p));
    const removed = [...before].filter((p) => !wanted.includes(p));

    if (added.length || removed.length) {
      await prisma.user.update({ where: { id: userId }, data: { staffPermissions: wanted } });
      await logStaffAccess(guard.userId, null, 'write', {
        method: 'PATCH',
        path: '/api/admin/staff',
        summary:
          `Changed what ${target.email} can do` +
          (added.length ? `. Now allowed: ${added.map(permissionLabel).join(', ')}` : '') +
          (removed.length ? `. No longer allowed: ${removed.map(permissionLabel).join(', ')}` : ''),
      });
    }

    return NextResponse.json({ permissions: wanted });
  } catch (error) {
    console.error('Failed to set staff permissions:', error);
    return NextResponse.json({ error: 'Failed to save what they can do' }, { status: 500 });
  }
}

// DELETE - let somebody go.
export async function DELETE(request: Request) {
  try {
    const guard = await requireOwner();
    if (guard instanceof NextResponse) return guard;

    const userId = new URL(request.url).searchParams.get('userId');
    if (!userId) {
      return NextResponse.json({ error: 'userId is required' }, { status: 400 });
    }
    if (userId === guard.userId) {
      return NextResponse.json(
        { error: 'You cannot remove your own account' },
        { status: 400 }
      );
    }

    const target = await prisma.user.findUnique({
      where: { id: userId },
      select: { role: true, email: true },
    });
    if (target?.role !== PLATFORM_ROLES.STAFF) {
      return NextResponse.json({ error: 'That is not a staff account' }, { status: 404 });
    }

    // The line is the master's rather than theirs, so it outlives them: the
    // trail's cascade removes only what the departing account did, not what
    // was done to it.
    await logStaffAccess(guard.userId, null, 'write', {
      method: 'DELETE',
      path: '/api/admin/staff',
      summary: `Removed ${target.email} from EcoFusion staff`,
    });

    // The grants go with the account; the trail of what they did does not,
    // because that belongs to the businesses they did it in.
    await prisma.user.delete({ where: { id: userId } });

    return NextResponse.json({ removed: true });
  } catch (error) {
    console.error('Failed to remove staff:', error);
    return NextResponse.json({ error: 'Failed to remove the staff account' }, { status: 500 });
  }
}
