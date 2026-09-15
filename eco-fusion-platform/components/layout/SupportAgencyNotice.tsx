"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LifeBuoy, Undo2 } from "lucide-react";

/**
 * Shown across an agency's view while EcoFusion is looking at it from the
 * console, so it is never mistaken for EcoFusion's own screens. Opening and
 * closing are both written to the agency's Access Log.
 */
export default function SupportAgencyNotice({ agencyName }: { agencyName: string }) {
    const [leaving, setLeaving] = useState(false);
    const router = useRouter();

    async function backToConsole() {
        setLeaving(true);
        try {
            await fetch("/api/admin/agency-session", { method: "DELETE" });
            router.push("/console/agencies");
            router.refresh();
        } finally {
            setLeaving(false);
        }
    }

    return (
        <div className="flex flex-wrap items-center gap-3 px-4 py-3 rounded-xl border border-sky-400/40 bg-sky-400/10">
            <LifeBuoy size={17} className="text-sky-300 shrink-0" />
            <span className="text-sm text-sky-100 flex-1 min-w-[12rem]">
                <span className="font-semibold">EcoFusion support.</span> You are looking at{" "}
                <span className="font-semibold">{agencyName}</span> as its own team sees it. What you change here
                is theirs, and is recorded in their Access Log.
            </span>
            <button
                type="button"
                onClick={backToConsole}
                disabled={leaving}
                className="text-xs flex items-center gap-1.5 shrink-0 px-3 py-1.5 rounded-lg bg-sky-400/20 text-sky-100 hover:bg-sky-400/30 disabled:opacity-50 transition-colors"
            >
                <Undo2 size={13} />
                {leaving ? "Closing..." : "Back to console"}
            </button>
        </div>
    );
}
