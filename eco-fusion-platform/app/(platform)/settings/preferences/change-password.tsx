"use client";

import { useState } from "react";
import { KeyRound, Check } from "lucide-react";

/**
 * Self-service password change. Requires the current password, so a session
 * left open on a shared machine cannot be used to lock the owner out.
 */
export default function ChangePassword() {
    const [current, setCurrent] = useState("");
    const [next, setNext] = useState("");
    const [confirm, setConfirm] = useState("");
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [done, setDone] = useState(false);

    async function submit(e: React.FormEvent) {
        e.preventDefault();
        setError(null);

        if (next !== confirm) {
            setError("The new password and its confirmation do not match.");
            return;
        }

        setSaving(true);
        try {
            const res = await fetch("/api/user/password", {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ currentPassword: current, newPassword: next }),
            });
            const data = await res.json();
            if (!res.ok) {
                setError(data.error || "Could not change your password.");
                return;
            }
            setCurrent("");
            setNext("");
            setConfirm("");
            setDone(true);
        } catch {
            setError("Could not reach the server. Try again.");
        } finally {
            setSaving(false);
        }
    }

    const field =
        "w-full px-3 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/25";

    return (
        <div className="glass-card rounded-2xl border border-white/10 p-6">
            <div className="flex items-center gap-2 mb-1">
                <KeyRound size={18} className="text-white/40" />
                <h2 className="text-lg font-semibold text-white">Password</h2>
            </div>
            <p className="text-sm text-white/40 mb-5">
                If someone gave you a temporary password, change it here.
            </p>

            <form onSubmit={submit} className="space-y-4 max-w-md">
                <div>
                    <label className="block text-sm text-white/60 mb-1.5">Current password</label>
                    <input
                        type="password"
                        required
                        value={current}
                        onChange={(e) => setCurrent(e.target.value)}
                        className={field}
                        autoComplete="current-password"
                    />
                </div>

                <div>
                    <label className="block text-sm text-white/60 mb-1.5">New password</label>
                    <input
                        type="password"
                        required
                        value={next}
                        onChange={(e) => setNext(e.target.value)}
                        className={field}
                        autoComplete="new-password"
                    />
                    <p className="text-xs text-white/30 mt-1.5">
                        At least 10 characters, with upper and lower case, a number and a symbol.
                    </p>
                </div>

                <div>
                    <label className="block text-sm text-white/60 mb-1.5">Confirm new password</label>
                    <input
                        type="password"
                        required
                        value={confirm}
                        onChange={(e) => setConfirm(e.target.value)}
                        className={field}
                        autoComplete="new-password"
                    />
                </div>

                {error && <p className="text-sm text-red-300">{error}</p>}
                {done && (
                    <p className="text-sm text-accent flex items-center gap-2">
                        <Check size={15} /> Password changed. Use it next time you sign in.
                    </p>
                )}

                <button
                    type="submit"
                    disabled={saving}
                    className="py-2.5 px-5 bg-accent text-primary font-semibold rounded-xl hover:bg-accent/90 transition-all disabled:opacity-60"
                >
                    {saving ? "Saving…" : "Change password"}
                </button>
            </form>
        </div>
    );
}
