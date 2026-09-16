import { describe, expect, it, vi } from 'vitest';

vi.mock('next-auth', () => ({
    CredentialsSignin: class extends Error {
        code = 'credentials';
    },
}));

import { assertLoginAllowed, TooManyAttempts } from '@/lib/login-guard';
import { clientIp } from '@/lib/rate-limit';

const req = (ip: string) => new Request('http://x/login', { headers: { 'x-real-ip': ip } });

async function attemptsUntilBlocked(make: (i: number) => [Request, string], limit: number) {
    for (let i = 1; i <= limit + 1; i++) {
        const [request, email] = make(i);
        try {
            await assertLoginAllowed(request, email);
        } catch (error) {
            if (error instanceof TooManyAttempts) return i;
            throw error;
        }
    }
    return null;
}

describe('sign-in guessing', () => {
    it('limits one account however many addresses try it', async () => {
        expect(await attemptsUntilBlocked((i) => [req(`10.1.0.${i}`), 'victim@test.local'], 10)).toBe(11);
    });

    it('limits one address however many accounts it tries', async () => {
        expect(await attemptsUntilBlocked((i) => [req('10.2.0.1'), `user${i}@test.local`], 20)).toBe(21);
    });

    it('ignores a client-supplied Cloudflare address', () => {
        expect(clientIp(new Headers({ 'cf-connecting-ip': '1.2.3.4', 'x-real-ip': '5.6.7.8' }))).toBe('5.6.7.8');
    });
});
