import { CredentialsSignin } from 'next-auth';
import { checkRateLimit, clientIp } from '@/lib/rate-limit';

/**
 * The wall in front of a password.
 *
 * Checked inside the credentials provider itself, because that is the one
 * place every sign-in passes: the login form posts a server action to /login,
 * which the middleware's /api limiter never saw, so guessing was unlimited.
 *
 * Counted twice - by address, and by the account being tried - so rotating
 * addresses does not buy more guesses at one account, and one address cannot
 * work through a list of them. Every attempt counts, not only failures: a
 * person signing in successfully does not come near these numbers.
 */
const PER_ADDRESS = { interval: 5 * 60 * 1000, maxRequests: 20 };
const PER_ACCOUNT = { interval: 15 * 60 * 1000, maxRequests: 10 };

/** Thrown to the login form, which says to wait rather than "invalid credentials". */
export class TooManyAttempts extends CredentialsSignin {
    code = 'rate_limited';
}

export async function assertLoginAllowed(request: Request | undefined, email: string): Promise<void> {
    const ip = request ? clientIp(request.headers) : 'unknown';
    const [byAddress, byAccount] = await Promise.all([
        checkRateLimit(`login:ip:${ip}`, PER_ADDRESS),
        checkRateLimit(`login:email:${email}`, PER_ACCOUNT),
    ]);
    if (!byAddress.success || !byAccount.success) throw new TooManyAttempts();
}

/**
 * A bcrypt hash of nothing anybody knows, compared against when there is no
 * account or no password, so an unknown email takes as long to refuse as a
 * wrong password does and the timing no longer says which accounts exist.
 */
export const NO_ACCOUNT_HASH = '$2b$12$D5ghpxcQu4TwsBv5hZ/fE.Y/EkltQLD86wLir745.X.9WWEvu2Zma';
