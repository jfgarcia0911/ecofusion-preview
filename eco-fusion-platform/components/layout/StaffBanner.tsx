"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ShieldAlert, LogOut } from "lucide-react";

/**
 * Says, at all times, that this is somebody else's business.
 *
 * Staff see a customer's data in the same screens they would see their own,
 * which is exactly how a support session turns into a change made in the
 * wrong place. The banner is loud on purpose and cannot be dismissed; the way
 * to be rid of it is to leave.
 */
export default function StaffBanner({ businessName }: { businessName: string }) {
    const [leaving, setLeaving] = useState(false);
    const router = useRouter();

    async function leave() {
        setLeaving(true);
        try {
            await fetch("/api/admin/session", { method: "DELETE" });
            router.push("/agency/sub-accounts");
            router.refresh();
        } finally {
            setLeaving(false);
        }
    }

    return (
        <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-amber-400/40 bg-amber-400/15">
            <ShieldAlert size={17} className="text-amber-300 shrink-0" />
            <span className="text-sm text-amber-100 flex-1">
                <span className="font-semibold">Support session.</span> You are inside{" "}
                <span className="font-semibold">{businessName}</span>, which is not your business.
                Everything you change here is theirs, and every change is recorded.
            </span>
            <button
                type="button"
                onClick={leave}
                disabled={leaving}
                className="text-xs flex items-center gap-1.5 shrink-0 px-3 py-1.5 rounded-lg bg-amber-400/20 text-amber-100 hover:bg-amber-400/30 disabled:opacity-50 transition-colors"
            >
                <LogOut size={13} />
                {leaving ? "Leaving..." : "Leave business"}
            </button>
        </div>
    );
}
