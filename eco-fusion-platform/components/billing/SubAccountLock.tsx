"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Lock, ArrowRight } from "lucide-react";
import { pageOpenWhileLocked } from "@/lib/sub-account-paths";

/**
 * Stands in for every screen but Settings while a sub-account's 30 days are
 * over and it has not paid its agency.
 *
 * The routes behind those screens refuse too (lib/api-access), so this is the
 * explanation rather than the lock itself.
 */
export default function SubAccountLock({
    locked,
    isOwner,
    children,
}: {
    locked: boolean;
    isOwner: boolean;
    children: React.ReactNode;
}) {
    const pathname = usePathname() ?? "";
    if (!locked || pageOpenWhileLocked(pathname)) return <>{children}</>;

    return (
        <div className="max-w-xl mx-auto mt-16 text-center glass-card border-white/10 p-8 rounded-3xl bg-black/30">
            <div className="w-12 h-12 mx-auto rounded-xl bg-amber-400/15 border border-amber-400/30 flex items-center justify-center mb-4">
                <Lock className="text-amber-300" size={22} />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">Your free period has ended</h1>
            <p className="text-white/55 text-sm leading-relaxed">
                {isOwner
                    ? "This business's 30 days are over. Subscribe for $99 a month to open the dashboard again. Nothing has been deleted, and Settings stays open."
                    : "This business's 30 days are over and its subscription has not been paid. The owner can subscribe under Settings → Billing. Nothing has been deleted."}
            </p>
            {isOwner && (
                <Link
                    href="/settings/billing"
                    className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-accent text-primary font-semibold hover:bg-accent/90 transition-colors"
                >
                    Go to Billing
                    <ArrowRight size={16} />
                </Link>
            )}
        </div>
    );
}
