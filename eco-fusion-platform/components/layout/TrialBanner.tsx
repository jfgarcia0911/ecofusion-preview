"use client";

import Link from "next/link";
import { Clock, AlertTriangle, ArrowRight } from "lucide-react";
import type { OrgAccess } from "@/lib/tenancy";
import { formatClock, useTrialCountdown } from "@/components/billing/trial-countdown";

/**
 * Standing notice of where a farm is in its trial.
 *
 * A trial that expires without warning reads as the product breaking, so the
 * banner is always present while trialing and grows more insistent as the end
 * approaches. Paid farms see nothing.
 *
 * The remaining time counts down live rather than sitting on a day count: "15
 * days left" is the same sentence for twenty-four hours, which reads as a label
 * instead of a deadline.
 */
export default function TrialBanner({ access }: { access: OrgAccess }) {
    const left = useTrialCountdown(access.trialEndsAt);

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

    // Under five days the banner changes colour.
    const urgent = left === null ? (access.daysLeft ?? 0) <= 5 : left.ms <= 5 * 86_400_000;

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
                    {left === null || left.ms <= 0 ? (
                        "Your free trial has ended."
                    ) : (
                        <>
                            Free trial ends in{" "}
                            <span className="font-mono tabular-nums" suppressHydrationWarning>
                                {formatClock(left)}
                            </span>
                            .
                        </>
                    )}
                </span>
                <span className={urgent ? "text-amber-100/70" : "text-white/40"}>
                    {" Subscribe to keep your data and carry on."}
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
