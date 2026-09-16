"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Loader2, Mail } from "lucide-react";
import AuthShell from "@/components/auth/AuthShell";

/**
 * Asking for a reset link.
 *
 * The reply is the same whether or not the email has an account. When email
 * is not set up on this deployment the page says who can help instead, rather
 * than promising a message that will never arrive.
 */
export default function ForgotPasswordPage() {
    const [email, setEmail] = useState("");
    const [state, setState] = useState<"idle" | "sending" | "sent" | "no-email" | "error">("idle");

    async function submit(e: React.FormEvent) {
        e.preventDefault();
        setState("sending");
        try {
            const res = await fetch("/api/auth/forgot-password", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });
            const data = await res.json().catch(() => ({}));
            if (!res.ok) {
                setState("error");
                return;
            }
            setState(data.emailConfigured === false ? "no-email" : "sent");
        } catch {
            setState("error");
        }
    }

    return (
        <AuthShell title="Forgot password" subtitle="We'll email you a link to set a new one">
            {state === "sent" ? (
                <p className="text-sm text-white/70 text-center leading-relaxed">
                    If <span className="text-white">{email}</span> has an EcoFusion password, a reset link is on
                    its way. It works for one hour.
                </p>
            ) : state === "no-email" ? (
                <p className="text-sm text-white/70 text-center leading-relaxed">
                    Password emails are not switched on yet. Ask the owner of your business or a supervisor to
                    set a new password for you under Employees. Owners, email support@llayd.com.
                </p>
            ) : (
                <form onSubmit={submit} className="space-y-4">
                    <div className="space-y-2">
                        <label htmlFor="reset-email" className="text-xs font-medium text-white/70 ml-1">
                            Email
                        </label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                            <input
                                id="reset-email"
                                type="email"
                                required
                                autoComplete="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-10 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-accent/50"
                                placeholder="name@company.com"
                            />
                        </div>
                    </div>
                    {state === "error" && (
                        <p className="text-sm text-red-300" role="alert">
                            Something went wrong. Try again in a minute.
                        </p>
                    )}
                    <button
                        type="submit"
                        disabled={state === "sending"}
                        className="w-full py-3 bg-accent text-primary font-bold rounded-xl hover:bg-accent/90 disabled:opacity-60 flex items-center justify-center gap-2"
                    >
                        {state === "sending" && <Loader2 size={16} className="animate-spin" />}
                        Send reset link
                    </button>
                </form>
            )}
            <div className="mt-6 text-center">
                <Link href="/login" className="inline-flex items-center gap-1.5 text-xs text-white/50 hover:text-white">
                    <ArrowLeft size={12} /> Back to sign in
                </Link>
            </div>
        </AuthShell>
    );
}
