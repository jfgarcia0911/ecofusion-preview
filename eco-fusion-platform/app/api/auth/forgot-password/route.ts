import { NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import { readJson } from '@/lib/validation/request';
import { checkRateLimit } from '@/lib/rate-limit';
import { createResetToken } from '@/lib/password-reset';
import { isEmailConfigured, sendEmail } from '@/lib/email';
import { appUrl } from '@/lib/stripe';

const schema = z.object({ email: z.string().trim().toLowerCase().email().max(254) });

// POST - Send a password reset link.
//
// The answer is the same whether or not the email has an account, so this
// cannot be used to find out who does. The middleware limits it per address;
// here it is also limited per email, so nobody's inbox can be flooded.
export async function POST(request: Request) {
    const body = await readJson(request, schema);
    if (!body.ok) return body.response;
    const { email } = body.data;

    const sent = NextResponse.json({
        sent: true,
        emailConfigured: isEmailConfigured(),
    });

    try {
        const allowed = await checkRateLimit(`reset:${email}`, { interval: 60 * 60 * 1000, maxRequests: 3 });
        if (!allowed.success) return sent;

        const user = await prisma.user.findUnique({
            where: { email },
            select: { id: true, name: true, password: true },
        });
        // An account that signs in with Google has no password to reset.
        if (!user?.password) return sent;

        const token = await createResetToken(email);
        const link = `${appUrl()}/reset-password?token=${token}`;
        await sendEmail({
            to: email,
            subject: 'Reset your EcoFusion password',
            text:
                `Hello${user.name ? ` ${user.name}` : ''},\n\n` +
                `Someone asked to reset the password for this EcoFusion account. ` +
                `If it was you, open this link within the hour:\n\n${link}\n\n` +
                `If it was not, you can ignore this email; your password has not changed.\n`,
        });
    } catch (error) {
        console.error('Failed to start a password reset:', error);
    }
    return sent;
}
