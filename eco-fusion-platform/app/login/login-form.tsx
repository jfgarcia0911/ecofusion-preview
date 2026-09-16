'use client';

import { useActionState } from 'react';
import Link from 'next/link';
import { authenticate, googleSignIn } from '@/lib/actions';
import { Lock, Mail, ArrowRight, Loader2 } from 'lucide-react';

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

export default function LoginForm() {
    const [errorMessage, formAction, isPending] = useActionState(
        authenticate,
        undefined,
    );

    return (
        <div className="space-y-6">
            <form action={formAction} className="space-y-6">
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-white/70 flex items-center gap-2">
                        <Mail size={14} aria-hidden="true" /> Email
                    </label>
                    <input
                        className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all backdrop-blur-sm"
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        autoComplete="email"
                        required
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="password" className="text-sm font-medium text-white/70 flex items-center gap-2">
                        <Lock size={14} aria-hidden="true" /> Password
                    </label>
                    <div className="relative">
                        <input
                            className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all backdrop-blur-sm"
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            autoComplete="current-password"
                            required
                            minLength={6}
                        />
                    </div>
                </div>

                {/* A "Remember me" box used to sit here that nothing read, so
                    ticking it changed nothing about how long the session lasts. */}
                <div className="flex items-center justify-end text-xs text-white/50">
                    <Link href="/forgot-password" className="hover:text-accent transition-colors">Forgot password?</Link>
                </div>

                <button
                    className="w-full py-3 px-4 bg-accent text-primary font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
                    aria-disabled={isPending}
                    disabled={isPending}
                >
                    {isPending ? <Loader2 className="animate-spin" size={20} /> : (
                        <>
                            Sign In <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </>
                    )}
                </button>

                <div
                    className="flex h-8 items-end space-x-1"
                    aria-live="polite"
                    aria-atomic="true"
                >
                    {errorMessage && (
                        <p className="text-sm text-red-400 flex items-center gap-2 bg-red-500/10 px-3 py-1 rounded-lg w-full justify-center border border-red-500/20">
                            {errorMessage}
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
