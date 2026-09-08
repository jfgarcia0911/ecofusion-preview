"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ShieldAlert, LogOut, ArrowRight } from "lucide-react";

/**
 * Shown in the agency view when a support session is still open somewhere.
 *
 * Leaving the business is a deliberate act, so nothing closes a session on its
 * own just because staff navigated away from it. The cost of that is a session
 * left open and forgotten, which this is here to prevent: from the agency view
 * it is always visible that one business is still standing open, and it can be
 * closed without going back into it.
 */
export default function OpenSessionNotice({ businessName }: { businessName: string }) {
    const [leaving, setLeaving] = useState(false);
    const router = useRouter();

    async function leave() {
        setLeaving(true);
        try {
            await fetch("/api/admin/session", { method: "DELETE" });
            router.refresh();
        } finally {
            setLeaving(false);
        }
    }

    return (
        <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-amber-400/40 bg-amber-400/15">
            <ShieldAlert size={17} className="text-amber-300 shrink-0" />
            <span className="text-sm text-amber-100 flex-1">
                <span className="font-semibold">Support session open.</span> You are still
                inside <span className="font-semibold">{businessName}</span>. Anything you do
                in the business view lands on their data.
            </span>
            <button
                type="button"
                onClick={() => router.push("/dashboard/executive")}
                className="text-xs flex items-center gap-1.5 shrink-0 px-3 py-1.5 rounded-lg bg-amber-400/20 text-amber-100 hover:bg-amber-400/30 transition-colors"
            >
                <ArrowRight size={13} />
                Go back in
            </button>
            <button
                type="button"
                onClick={leave}
                disabled={leaving}
                className="text-xs flex items-center gap-1.5 shrink-0 px-3 py-1.5 rounded-lg bg-amber-400/20 text-amber-100 hover:bg-amber-400/30 disabled:opacity-50 transition-colors"
            >
                <LogOut size={13} />
                {leaving ? "Leaving..." : "Leave"}
            </button>
        </div>
    );
}
