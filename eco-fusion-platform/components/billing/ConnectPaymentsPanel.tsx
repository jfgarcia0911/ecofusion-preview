import { Banknote, CheckCircle2, CircleDashed, ExternalLink } from "lucide-react";
import ConnectPaymentsButton from "./ConnectPaymentsButton";
import { prisma } from "@/lib/prisma";
import { evaluateClientAccess, CLIENT_BILLING_SELECT } from "@/lib/sub-account-billing";
import { SUB_ACCOUNT_PRICE_LABEL, SUB_ACCOUNT_TRIAL_DAYS } from "@/lib/plans";

/**
 * Where the agency is paid by its sub-accounts: its own Stripe account,
 * connected with Stripe Connect, and how many of its businesses are paying.
 */
export default async function ConnectPaymentsPanel({
    agencyId,
    canManage,
}: {
    agencyId: string;
    /** The master account, signed in as itself. */
    canManage: boolean;
}) {
    const agency = await prisma.agency.findUnique({
        where: { id: agencyId },
        select: {
            stripeAccountId: true,
            stripeChargesEnabled: true,
            organizations: { select: CLIENT_BILLING_SELECT },
        },
    });
    if (!agency) return null;

    const counts = { paying: 0, trial: 0, unpaid: 0 };
    for (const org of agency.organizations) {
        const access = evaluateClientAccess(org, agency);
        if (access.reason === "active") counts.paying += 1;
        else if (access.reason === "trialing") counts.trial += 1;
        else if (access.reason !== "exempt") counts.unpaid += 1;
    }

    const state = agency.stripeChargesEnabled ? "ready" : agency.stripeAccountId ? "pending" : "none";

    return (
        <div className="glass-card border-white/10 p-6 rounded-3xl bg-black/40">
            <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-start gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-accent/15 border border-accent/25 flex items-center justify-center shrink-0">
                        <Banknote size={20} className="text-accent" />
                    </div>
                    <div className="min-w-0">
                        <h2 className="text-lg font-semibold text-white">Payments from sub-accounts</h2>
                        <p className="text-sm text-white/50 mt-1 max-w-2xl">
                            Each business you add pays you {SUB_ACCOUNT_PRICE_LABEL} after a {SUB_ACCOUNT_TRIAL_DAYS}-day
                            free period, straight into your own Stripe account. Your own business pays nothing. Until
                            Stripe is connected, sub-accounts are not charged and nothing is locked.
                        </p>
                    </div>
                </div>
                <span
                    className={`px-2.5 py-1 rounded-full border text-xs flex items-center gap-1.5 shrink-0 ${
                        state === "ready"
                            ? "border-accent/30 bg-accent/10 text-accent"
                            : "border-white/15 bg-white/5 text-white/50"
                    }`}
                >
                    {state === "ready" ? <CheckCircle2 size={12} /> : <CircleDashed size={12} />}
                    {state === "ready" ? "Taking payments" : state === "pending" ? "Setup not finished" : "Not connected"}
                </span>
            </div>

            <div className="grid grid-cols-3 gap-3 mt-6">
                {[
                    { label: "Paying", value: counts.paying },
                    { label: "In free period", value: counts.trial },
                    { label: "Unpaid", value: counts.unpaid },
                ].map((item) => (
                    <div key={item.label} className="p-3 rounded-xl bg-white/5 text-center">
                        <p className="text-2xl font-bold text-white tabular-nums">{item.value}</p>
                        <p className="text-xs text-white/45 mt-0.5">{item.label}</p>
                    </div>
                ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
                {canManage && state !== "ready" && (
                    <ConnectPaymentsButton label={state === "pending" ? "Finish Stripe setup" : "Connect Stripe"} />
                )}
                {state === "ready" && (
                    <a
                        href="https://dashboard.stripe.com"
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2.5 rounded-xl bg-white/10 text-white text-sm flex items-center gap-2 hover:bg-white/15 transition-colors"
                    >
                        Open your Stripe dashboard
                        <ExternalLink size={14} />
                    </a>
                )}
                {!canManage && state !== "ready" && (
                    <p className="text-sm text-white/40">Only the agency&apos;s master account can connect Stripe.</p>
                )}
            </div>
        </div>
    );
}
