import Link from "next/link";
import { Clock, AlertTriangle, ArrowRight } from "lucide-react";
import type { OrgAccess } from "@/lib/tenancy";

/**
 * Standing notice of where a farm is in its trial.
 *
 * A trial that expires without warning reads as the product breaking, so the
 * banner is always present while trialing and grows more insistent as the end
 * approaches. Paid farms see nothing.
 */
export default function TrialBanner({ access }: { access: OrgAccess }) {
    if (access.reason === "active") return null;

    if (access.reason === "past_due") {
        return (
            <Link
                href="/billing"
                className="flex items-center gap-3 px-4 py-3 rounded-xl border border-red-400/25 bg-red-400/10 hover:bg-red-400/15 transition-colors group"
            >
                <AlertTriangle size={17} className="text-red-300 shrink-0" />
                <span className="text-sm text-red-100 flex-1">
                    <span className="font-semibold">Payment is overdue.</span> Update your billing
                    details to keep access to this farm.
                </span>
                <span className="text-xs text-red-200/70 flex items-center gap-1 shrink-0">
                    Fix now
                    <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                </span>
            </Link>
        );
    }

    if (access.reason !== "trialing") return null;

    const days = access.daysLeft ?? 0;
    const urgent = days <= 5;

    return (
        <Link
            href="/billing"
            className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition-colors group ${
                urgent
                    ? "border-amber-400/30 bg-amber-400/10 hover:bg-amber-400/15"
                    : "border-white/10 bg-white/[0.03] hover:bg-white/[0.06]"
            }`}
        >
            <Clock size={17} className={urgent ? "text-amber-300 shrink-0" : "text-white/40 shrink-0"} />
            <span className={`text-sm flex-1 ${urgent ? "text-amber-100" : "text-white/70"}`}>
                <span className="font-semibold">
                    {days > 0
                        ? `${days} day${days === 1 ? "" : "s"} left in your free trial`
                        : "Your free trial ends today"}
                </span>
                <span className={urgent ? "text-amber-100/70" : "text-white/40"}>
                    {" — subscribe to keep your data and carry on."}
                </span>
            </span>
            <span
                className={`text-xs flex items-center gap-1 shrink-0 ${
                    urgent ? "text-amber-200/80" : "text-white/40"
                }`}
            >
                View plans
                <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
            </span>
        </Link>
    );
}
