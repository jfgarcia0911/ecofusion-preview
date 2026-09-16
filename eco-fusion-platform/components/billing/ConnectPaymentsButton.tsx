"use client";

import { useState } from "react";
import { Link2, Loader2 } from "lucide-react";
import { STRIPE_COUNTRIES } from "@/lib/stripe-countries";

/**
 * Sends the master account to Stripe to connect, or finish connecting, the
 * agency's account. The first time, Stripe needs the country the agency is in
 * before it opens its form, so that is asked here, beside the button.
 */
export default function ConnectPaymentsButton({
    label,
    askCountry = false,
}: {
    label: string;
    /** No Stripe account yet: ask which country it is in. */
    askCountry?: boolean;
}) {
    const [country, setCountry] = useState("US");
    const [busy, setBusy] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function connect() {
        setBusy(true);
        setError(null);
        try {
            const res = await fetch("/api/billing/connect", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(askCountry ? { country } : {}),
            });
            const data = await res.json();
            if (!res.ok) {
                setError(data.error || "Could not reach Stripe. Try again.");
                setBusy(false);
                return;
            }
            window.location.href = data.url;
        } catch {
            setError("Could not reach Stripe. Check your connection and try again.");
            setBusy(false);
        }
    }

    return (
        <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
                {askCountry && (
                    <label className="flex items-center gap-2 text-sm text-white/60">
                        Your business is in
                        <select
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            disabled={busy}
                            className="px-3 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm"
                        >
                            {STRIPE_COUNTRIES.map((c) => (
                                <option key={c.code} value={c.code} className="bg-neutral-900">
                                    {c.name}
                                </option>
                            ))}
                        </select>
                    </label>
                )}
                <button
                    type="button"
                    onClick={connect}
                    disabled={busy}
                    className="px-5 py-2.5 bg-accent text-primary font-semibold rounded-xl flex items-center gap-2 hover:bg-accent/90 transition-all disabled:opacity-60"
                >
                    {busy ? <Loader2 size={16} className="animate-spin" /> : <Link2 size={16} />}
                    {busy ? "Opening Stripe…" : label}
                </button>
            </div>
            {askCountry && (
                <p className="text-xs text-white/35">
                    Stripe needs this first and it can&apos;t be changed later. Only countries Stripe pays out to are
                    listed.
                </p>
            )}
            {error && <p className="text-sm text-red-300">{error}</p>}
        </div>
    );
}
