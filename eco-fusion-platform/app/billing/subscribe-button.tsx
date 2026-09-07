"use client";

import { useState } from "react";
import { CreditCard, Loader2 } from "lucide-react";

export default function SubscribeButton({ configured }: { configured: boolean }) {
    const [busy, setBusy] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function startCheckout() {
        setBusy(true);
        setError(null);
        try {
            const res = await fetch("/api/billing/checkout", { method: "POST" });
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

    if (!configured) {
        return (
            <p className="text-center text-sm text-white/40 py-3">
                Billing is not switched on yet. Add your Stripe keys to enable subscriptions.
            </p>
        );
    }

    return (
        <div className="space-y-3">
            <button
                type="button"
                onClick={startCheckout}
                disabled={busy}
                className="w-full py-3 px-4 bg-accent text-primary font-semibold rounded-xl flex items-center justify-center gap-2 hover:bg-accent/90 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            >
                {busy ? <Loader2 size={18} className="animate-spin" /> : <CreditCard size={18} />}
                {busy ? "Opening checkout…" : "Subscribe"}
            </button>
            {error && <p className="text-sm text-red-300 text-center">{error}</p>}
        </div>
    );
}
