'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { googleSignIn } from '@/lib/actions';
import { Lock, Mail, User, ArrowRight, Loader2 } from 'lucide-react';

function GoogleIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" width="20" height="20">
            <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
        </svg>
    );
}

export default function SignupForm() {
    const router = useRouter();
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsPending(true);
        setError(null);

        const formData = new FormData(e.currentTarget);
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;
        const confirmPassword = formData.get('confirmPassword') as string;

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            setIsPending(false);
            return;
        }

        try {
            const res = await fetch('/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password }),
            });

            const data = await res.json();

            if (!res.ok) {
                setError(data.error || 'Something went wrong');
                setIsPending(false);
                return;
            }

            router.push('/login?registered=true');
        } catch {
            setError('Something went wrong');
            setIsPending(false);
        }
    }

    return (
        <div className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-white/70 flex items-center gap-2">
                        <User size={14} /> Full Name
                    </label>
                    <input
                        className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all backdrop-blur-sm"
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                        required
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-white/70 flex items-center gap-2">
                        <Mail size={14} /> Email
                    </label>
                    <input
                        className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all backdrop-blur-sm"
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-white/70 flex items-center gap-2">
                        <Lock size={14} /> Password
                    </label>
                    <input
                        className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all backdrop-blur-sm"
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Create a password (min 8 characters)"
                        required
                        minLength={8}
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-white/70 flex items-center gap-2">
                        <Lock size={14} /> Confirm Password
                    </label>
                    <input
                        className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all backdrop-blur-sm"
                        id="confirmPassword"
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm your password"
                        required
                        minLength={8}
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-3 px-4 bg-accent text-primary font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
                    disabled={isPending}
                >
                    {isPending ? <Loader2 className="animate-spin" size={20} /> : (
                        <>
                            Create Account <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </>
                    )}
                </button>

                <div
                    className="flex h-8 items-end space-x-1"
                    aria-live="polite"
                    aria-atomic="true"
                >
                    {error && (
                        <p className="text-sm text-red-400 flex items-center gap-2 bg-red-500/10 px-3 py-1 rounded-lg w-full justify-center border border-red-500/20">
                            {error}
                        </p>
                    )}
                </div>
            </form>

            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-white/10"></div>
                </div>
                <div className="relative flex justify-center text-xs">
                    <span className="px-3 bg-black/40 text-white/40">or continue with</span>
                </div>
            </div>

            <form action={googleSignIn}>
                <button
                    type="submit"
                    className="w-full py-3 px-4 bg-white/5 border border-white/10 text-white font-medium rounded-xl flex items-center justify-center gap-3 hover:bg-white/10 hover:border-white/20 transition-all"
                >
                    <GoogleIcon />
                    Continue with Google
                </button>
            </form>
        </div>
    );
}
