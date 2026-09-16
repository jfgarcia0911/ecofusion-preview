import { createHash, randomBytes } from 'crypto';
import { prisma } from '@/lib/prisma';

/**
 * Password reset links.
 *
 * The link carries a random token; only its SHA-256 is stored, so a copy of
 * the database cannot be used to reset anybody's password. Tokens last an
 * hour, work once, and asking again replaces the previous one. They live in
 * VerificationToken, marked by an identifier of `reset:<email>`.
 */

const LIFETIME_MS = 60 * 60 * 1000;
const PREFIX = 'reset:';

const digest = (token: string) => createHash('sha256').update(token).digest('hex');

/** A fresh token for this email. The caller puts it in a link and sends it. */
export async function createResetToken(email: string): Promise<string> {
    const token = randomBytes(32).toString('hex');
    const identifier = `${PREFIX}${email}`;
    await prisma.$transaction([
        prisma.verificationToken.deleteMany({ where: { identifier } }),
        prisma.verificationToken.create({
            data: { identifier, token: digest(token), expires: new Date(Date.now() + LIFETIME_MS) },
        }),
    ]);
    return token;
}

/** The email a token was issued for, if it is valid - and the token is spent either way. */
export async function consumeResetToken(token: string): Promise<string | null> {
    if (!/^[0-9a-f]{64}$/.test(token)) return null;
    const hashed = digest(token);
    const row = await prisma.verificationToken.findUnique({ where: { token: hashed } });
    if (!row || !row.identifier.startsWith(PREFIX)) return null;
    await prisma.verificationToken.delete({ where: { token: hashed } }).catch(() => null);
    if (row.expires.getTime() < Date.now()) return null;
    return row.identifier.slice(PREFIX.length);
}
