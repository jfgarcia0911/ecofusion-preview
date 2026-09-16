import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import { readJson } from '@/lib/validation/request';
import { validatePassword } from '@/lib/validation/password';
import { consumeResetToken } from '@/lib/password-reset';

const schema = z.object({
    token: z.string().trim().max(200),
    password: z.string().max(256),
});

// POST - Set a new password from a reset link.
//
// The token is spent on the first try, right or wrong, so a link cannot be
// guessed at. The new password ends every session the old one opened.
export async function POST(request: Request) {
    try {
        const body = await readJson(request, schema);
        if (!body.ok) return body.response;
        const { token, password } = body.data;

        const strength = validatePassword(password);
        if (!strength.isValid) {
            return NextResponse.json({ error: strength.errors[0] }, { status: 400 });
        }

        const email = await consumeResetToken(token);
        if (!email) {
            return NextResponse.json(
                { error: 'This link has expired or has already been used. Ask for a new one.' },
                { status: 400 }
            );
        }

        const { count } = await prisma.user.updateMany({
            where: { email },
            data: { password: await bcrypt.hash(password, 12), sessionVersion: { increment: 1 } },
        });
        if (count === 0) {
            return NextResponse.json({ error: 'This link has expired. Ask for a new one.' }, { status: 400 });
        }

        return NextResponse.json({ reset: true });
    } catch (error) {
        console.error('Failed to reset a password:', error);
        return NextResponse.json({ error: 'Could not reset the password. Try again.' }, { status: 500 });
    }
}
