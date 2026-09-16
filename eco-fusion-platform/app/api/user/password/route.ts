import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { auth, signIn } from '@/auth';
import { prisma } from '@/lib/prisma';
import { validatePassword } from '@/lib/validation/password';
import { isPlatformRole } from '@/lib/roles';
import { logStaffAccess } from '@/lib/staff';

// PATCH - Change your own password.
//
// Requires the current one, so a borrowed session cannot lock the owner out
// of their own account.
export async function PATCH(request: Request) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json().catch(() => null);
    const currentPassword = typeof body?.currentPassword === 'string' ? body.currentPassword : '';
    const newPassword = typeof body?.newPassword === 'string' ? body.newPassword : '';
    if (!currentPassword || !newPassword) {
      return NextResponse.json(
        { error: 'Current and new password are required' },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: { password: true, role: true, email: true },
    });

    if (!user?.password) {
      return NextResponse.json(
        { error: 'This account signs in with Google and has no password to change' },
        { status: 400 }
      );
    }

    if (!(await bcrypt.compare(currentPassword, user.password))) {
      return NextResponse.json({ error: 'Your current password is not correct' }, { status: 403 });
    }

    const check = validatePassword(newPassword);
    if (!check.isValid) {
      return NextResponse.json({ error: check.errors[0] }, { status: 400 });
    }

    // Every other session ends with the old password. This one is renewed
    // below, with the new one.
    await prisma.user.update({
      where: { id: session.user.id },
      data: { password: await bcrypt.hash(newPassword, 12), sessionVersion: { increment: 1 } },
    });
    await signIn('credentials', { email: user.email, password: newPassword, redirect: false }).catch((error) => {
      console.error('Password changed, but the session could not be renewed:', error);
    });

    // An EcoFusion account changing its own password is a change to who can
    // reach every business it reaches, so it is written to the platform's
    // trail. The password itself never is.
    if (isPlatformRole(user.role)) {
      await logStaffAccess(session.user.id, null, 'write', {
        method: 'PATCH',
        path: '/api/user/password',
        summary: 'Changed their own password',
      });
    }

    return NextResponse.json({ changed: true });
  } catch (error) {
    console.error('Failed to change password:', error);
    return NextResponse.json({ error: 'Failed to change password' }, { status: 500 });
  }
}
