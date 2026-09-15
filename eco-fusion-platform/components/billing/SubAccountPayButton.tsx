"use client";

import { useState } from "react";
import { CreditCard, Loader2 } from "lucide-react";

/** Opens Stripe's checkout for the sub-account's $99, on its agency's account. */
export default function SubAccountPayButton() {
    const [busy, setBusy] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function pay() {
        setBusy(true);
        setError(null);
        try {
            const res = await fetch("/api/billing/sub-account", { method: "POST" });
            const data = await res.json();
            if (!res.ok) {
                setError(data.error || "Could not start checkout. Try again.");
                setBusy(false);
                return;
            }
            window.location.href = data.url;
        } catch {
            setError("Could not reach the billing service. Check your connection and try again.");
            setBusy(false);
        }
    }

    return (
        <div className="space-y-3">
            <button
                type="button"
                onClick={pay}
                disabled={busy}
                className="w-full py-3 px-4 bg-accent text-primary font-semibold rounded-xl flex items-center justify-center gap-2 hover:bg-accent/90 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            >
                {busy ? <Loader2 size={18} className="animate-spin" /> : <CreditCard size={18} />}
                {busy ? "Opening checkout…" : "Subscribe for $99 / month"}
            </button>
            {error && <p className="text-sm text-red-300 text-center">{error}</p>}
        </div>
    );
}
