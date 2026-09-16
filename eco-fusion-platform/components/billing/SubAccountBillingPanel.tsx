import Link from "next/link";
import { Clock, Building2, CheckCircle2, AlertTriangle, Leaf } from "lucide-react";
import TrialClock from "./trial-countdown";
import SubAccountPayButton from "./SubAccountPayButton";
import { SUB_ACCOUNT_PRICE_LABEL, SUB_ACCOUNT_TRIAL_DAYS } from "@/lib/plans";
import { isTestMode } from "@/lib/stripe";
import type { OrgContext } from "@/lib/tenancy";

const dateOf = (ms: number | Date | null) =>
    ms === null
        ? "-"
        : new Date(ms).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });

/**
 * A sub-account's own billing: $99 a month to its agency, after 30 days.
 *
 * Nothing about the agency's plan is here. That is the agency's to buy, in the
 * agency view; a business only ever sees what it pays.
 */
export default function SubAccountBillingPanel({
    ctx,
    agencyName,
    periodEnd,
    ownAgencyAdmin,
}: {
    ctx: OrgContext;
    agencyName: string;
    periodEnd: Date | null;
    /** The viewer is this business's agency's master account. */
    ownAgencyAdmin: boolean;
}) {
    const { client } = ctx;
    const canPay = ctx.role === "owner" && !ctx.entered;

    if (client.reason === "complimentary") {
        return (
            <div className="glass-card border-white/10 p-8 rounded-3xl bg-black/40 text-center">
                <div className="w-12 h-12 mx-auto bg-accent rounded-xl flex items-center justify-center mb-4">
                    <Leaf className="text-primary" size={24} strokeWidth={2.5} />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Complimentary</h2>
                <p className="text-white/50 text-sm leading-relaxed max-w-lg mx-auto">
                    {agencyName} does not charge {ctx.business.name}, so there is nothing to pay and nothing
                    will be locked.
                </p>
            </div>
        );
    }

    if (client.reason === "exempt") {
        return (
            <div className="glass-card border-white/10 p-8 rounded-3xl bg-black/40 text-center">
                <div className="w-12 h-12 mx-auto bg-accent rounded-xl flex items-center justify-center mb-4">
                    <Leaf className="text-primary" size={24} strokeWidth={2.5} />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Covered by {agencyName}&apos;s plan</h2>
                <p className="text-white/50 text-sm leading-relaxed max-w-lg mx-auto">
                    This is the agency&apos;s own business, so it has nothing to pay. The agency&apos;s plan is managed in
                    the agency view.
                </p>
                {ownAgencyAdmin && (
                    <Link
                        href="/agency/billing"
                        className="mt-6 inline-flex px-5 py-3 rounded-xl bg-white/10 text-white font-medium hover:bg-white/15 transition-colors"
                    >
                        Open agency billing
                    </Link>
                )}
            </div>
        );
    }

    const headline =
        client.reason === "active" ? (
            "Your subscription is active"
        ) : client.reason === "trialing" ? (
            <>
                Free for <TrialClock endsAt={client.trialEndsAt} />
            </>
        ) : client.reason === "not_set_up" ? (
            "Your free period has ended"
        ) : client.reason === "past_due" ? (
            "Payment is overdue"
        ) : client.reason === "canceled" ? (
            "Your subscription was cancelled"
        ) : (
            "Your free period has ended"
        );

    const explanation =
        client.reason === "active"
            ? `${ctx.business.name} is subscribed at ${SUB_ACCOUNT_PRICE_LABEL}.`
            : client.reason === "trialing"
              ? `Everything is open for your first ${SUB_ACCOUNT_TRIAL_DAYS} days. After that it is ${SUB_ACCOUNT_PRICE_LABEL}, or the dashboard closes and only Settings stays open.`
              : client.reason === "not_set_up"
                ? `${agencyName} has not switched on payments yet, so everything stays open for now.`
                : `The dashboard is closed until the subscription is paid. Nothing has been deleted, and it all comes back as you left it.`;

    const Icon = client.reason === "active" ? CheckCircle2 : client.allowed ? Clock : AlertTriangle;

    const rows = [
        { label: "Business", value: ctx.business.name },
        { label: "Billed by", value: agencyName },
        { label: "Price", value: SUB_ACCOUNT_PRICE_LABEL },
        client.reason === "active"
            ? { label: "Renews", value: dateOf(periodEnd) }
            : { label: "Free period ends", value: dateOf(client.trialEndsAt) },
    ];

    return (
        <div className="w-full">
            <div className="glass-card border-white/10 shadow-2xl shadow-black/50 p-8 rounded-3xl backdrop-blur-xl bg-black/40">
                <div className="flex flex-col items-center text-center mb-8">
                    <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                            client.allowed ? "bg-accent shadow-lg shadow-accent/20" : "bg-amber-400/20 border border-amber-400/30"
                        }`}
                    >
                        <Icon className={client.allowed ? "text-primary" : "text-amber-300"} size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">{headline}</h2>
                    <p className="text-white/50 text-sm leading-relaxed max-w-xl">{explanation}</p>
                </div>

                <div className="text-center mb-8">
                    <span className="text-5xl font-bold text-white">$99</span>
                    <span className="text-white/50 ml-1">/ month</span>
                </div>

                <dl className="space-y-3 mb-8">
                    {rows.map((row) => (
                        <div
                            key={row.label}
                            className="flex items-center justify-between gap-4 py-3 px-4 bg-white/5 rounded-xl"
                        >
                            <dt className="text-sm text-white/50 flex items-center gap-2">
                                {row.label === "Business" && <Building2 size={14} />}
                                {row.label}
                            </dt>
                            <dd className="text-sm font-medium text-white text-right">{row.value}</dd>
                        </div>
                    ))}
                </dl>

                {client.reason === "active" ? null : !client.canPay ? (
                    <p className="text-center text-sm text-white/40 py-3">
                        {agencyName} has not switched on payments yet. There is nothing to pay until it does.
                    </p>
                ) : canPay ? (
                    <SubAccountPayButton />
                ) : (
                    <p className="text-center text-sm text-white/40 py-3">
                        {ctx.entered
                            ? "Only the business's owner can subscribe."
                            : "Only the business's owner can subscribe. Ask them to pay here."}
                    </p>
                )}
            </div>

            {isTestMode() && client.canPay && client.reason !== "active" && (
                <p className="mt-6 text-center text-xs text-amber-300/60">
                    Stripe test mode. Use card 4242 4242 4242 4242, any future expiry and CVC.
                </p>
            )}
        </div>
    );
}
