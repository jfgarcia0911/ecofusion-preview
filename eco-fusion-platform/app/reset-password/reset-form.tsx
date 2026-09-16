"use client";

import { useState } from "react";
import Link from "next/link";
import { Loader2, Lock } from "lucide-react";
import { getPasswordRequirements, validatePassword } from "@/lib/validation/password";

export default function ResetPasswordForm({ token }: { token: string }) {
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [done, setDone] = useState(false);

    if (!token) {
        return (
            <p className="text-sm text-white/70 text-center">
                This link is incomplete. <Link href="/forgot-password" className="text-accent hover:underline">Ask for a new one</Link>.
            </p>
        );
    }

    if (done) {
        return (
            <div className="text-center space-y-4">
                <p className="text-sm text-white/70">Your password has been changed, and you have been signed out everywhere else.</p>
                <Link href="/login" className="inline-block px-6 py-2.5 bg-accent text-primary font-bold rounded-xl">
                    Sign in
                </Link>
            </div>
        );
    }

    const weak = password ? validatePassword(password).errors[0] : null;
    const mismatch = confirm && confirm !== password ? "The passwords do not match" : null;

    async function submit(e: React.FormEvent) {
        e.preventDefault();
        if (weak || mismatch || !password) return;
        setSaving(true);
        setError(null);
        try {
            const res = await fetch("/api/auth/reset-password", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ token, password }),
            });
            const data = await res.json().catch(() => ({}));
            if (!res.ok) {
                setError(data.error ?? "Could not reset the password. Try again.");
                return;
            }
            setDone(true);
        } catch {
            setError("Could not reach the server. Try again.");
        } finally {
            setSaving(false);
        }
    }

    const field =
        "w-full bg-white/5 border border-white/10 rounded-xl px-10 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-accent/50";

    return (
        <form onSubmit={submit} className="space-y-4">
            <div className="space-y-2">
                <label htmlFor="new-password" className="text-xs font-medium text-white/70 ml-1">
                    New password
                </label>
                <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                    <input
                        id="new-password"
                        type="password"
                        autoComplete="new-password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={field}
                    />
                </div>
                <p className={`text-xs ml-1 ${weak ? "text-red-300" : "text-white/30"}`}>
                    {weak ?? getPasswordRequirements().join(" - ")}
                </p>
            </div>
            <div className="space-y-2">
                <label htmlFor="confirm-password" className="text-xs font-medium text-white/70 ml-1">
                    Confirm password
                </label>
                <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                    <input
                        id="confirm-password"
                        type="password"
                        autoComplete="new-password"
                        required
                        value={confirm}
                        onChange={(e) => setConfirm(e.target.value)}
                        className={field}
                    />
                </div>
                {mismatch && <p className="text-xs text-red-300 ml-1">{mismatch}</p>}
            </div>
            {error && (
                <p className="text-sm text-red-300" role="alert">
                    {error}
                </p>
            )}
            <button
                type="submit"
                disabled={saving || Boolean(weak) || Boolean(mismatch) || !password}
                className="w-full py-3 bg-accent text-primary font-bold rounded-xl hover:bg-accent/90 disabled:opacity-60 flex items-center justify-center gap-2"
            >
                {saving && <Loader2 size={16} className="animate-spin" />}
                Set new password
            </button>
        </form>
    );
}
