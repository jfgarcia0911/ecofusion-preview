
'use client';

import { useActionState } from 'react';
import { authenticate } from '@/lib/actions';
import { Leaf, Lock, Mail, ArrowRight, Loader2 } from 'lucide-react';

export default function LoginForm() {
    const [errorMessage, formAction, isPending] = useActionState(
        authenticate,
        undefined,
    );

    return (
        <form action={formAction} className="space-y-6">
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
                <div className="relative">
                    <input
                        className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all backdrop-blur-sm"
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        required
                        minLength={6}
                    />
                </div>
            </div>

            <div className="flex items-center justify-between text-xs text-white/50">
                <label className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
                    <input type="checkbox" className="rounded bg-white/10 border-white/10 text-accent focus:ring-accent" />
                    <span>Remember me</span>
                </label>
                <a href="#" className="hover:text-accent transition-colors">Forgot password?</a>
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
    );
}
