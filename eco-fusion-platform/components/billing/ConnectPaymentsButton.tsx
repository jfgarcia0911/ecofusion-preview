"use client";

import { useState } from "react";
import { Link2, Loader2 } from "lucide-react";

/** Sends the master account to Stripe to connect, or finish connecting, the agency's account. */
export default function ConnectPaymentsButton({ label }: { label: string }) {
    const [busy, setBusy] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function connect() {
        setBusy(true);
        setError(null);
        try {
            const res = await fetch("/api/billing/connect", { method: "POST" });
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
            <button
                type="button"
                onClick={connect}
                disabled={busy}
                className="px-5 py-2.5 bg-accent text-primary font-semibold rounded-xl flex items-center gap-2 hover:bg-accent/90 transition-all disabled:opacity-60"
            >
                {busy ? <Loader2 size={16} className="animate-spin" /> : <Link2 size={16} />}
                {busy ? "Opening Stripe…" : label}
            </button>
            {error && <p className="text-sm text-red-300">{error}</p>}
        </div>
    );
}
