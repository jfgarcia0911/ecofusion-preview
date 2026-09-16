'use server';

import { signIn, signOut } from '@/auth';
import { AuthError } from 'next-auth';
import { TooManyAttempts } from '@/lib/login-guard';

export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
) {
    try {
        await signIn('credentials', formData);
    } catch (error) {
        if (error instanceof TooManyAttempts || (error as { code?: string })?.code === 'rate_limited') {
            return 'Too many sign-in attempts. Wait a few minutes and try again.';
        }
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Invalid credentials.';
                default:
                    return 'Something went wrong.';
            }
        }
        throw error;
    }
}

export async function googleSignIn() {
    await signIn('google', { redirectTo: '/dashboard/executive' });
}

export async function logout() {
    await signOut();
}
