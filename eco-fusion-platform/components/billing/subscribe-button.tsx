"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Check, CheckCircle2, CreditCard, Loader2 } from "lucide-react";
import EmbeddedCheckoutPanel from "@/components/training/EmbeddedCheckoutPanel";

export interface PlanOption {
    key: string;
    name: string;
    priceLabel: string;
    blurb: string;
    /** Whether a Stripe Price is set for it. */
    configured: boolean;
    /** Why it cannot be chosen, e.g. it holds fewer businesses than the agency has. */
    unavailable: string | null;
}

interface OpenCheckout {
    clientSecret: string;
    publishableKey: string;
    sessionId: string;
}

/**
 * The agency's plans, and the way to subscribe to one. Only ever shown to the
 * agency's master account.
 *
 * Subscribing stays on the Billing page: Stripe's form takes the place of the
 * plans, with a way back to them. Card details go from that form straight to
 * Stripe. Only where no publishable key is set does the buyer leave for
 * Stripe's own page.
 */
export default function SubscribeButton({
    plans,
    current,
    active,
}: {
    plans: PlanOption[];
    /** The plan the agency is on now. */
    current: string;
    /** Whether the agency is already paying. */
    active: boolean;
}) {
    const firstChoosable = plans.find((p) => p.key === current && !p.unavailable) ?? plans.find((p) => !p.unavailable);
    const [selected, setSelected] = useState(firstChoosable?.key ?? current);
    const [busy, setBusy] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const router = useRouter();
    // Open from the moment Subscribe is pressed, so Stripe's outline is on
    // screen while the payment is prepared rather than a spinner in a button.
    const [checkingOut, setCheckingOut] = useState(false);
    const [checkout, setCheckout] = useState<OpenCheckout | null>(null);
    const [leaving, setLeaving] = useState(false);
    const [paid, setPaid] = useState(false);
    // Set when the buyer backs out before the payment was ready, so the
    // session that arrives afterwards is closed instead of left payable.
    const abandoned = useRef(false);

    const chosen = plans.find((p) => p.key === selected);

    async function finish(sessionId: string, cancel: boolean) {
        const res = await fetch("/api/billing/checkout/finish", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ sessionId, cancel }),
        });
        const data = await res.json().catch(() => ({}));
        return data.outcome === "paid";
    }

    async function startCheckout() {
        setBusy(true);
        setError(null);
        abandoned.current = false;
        setCheckingOut(true);
        try {
            const res = await fetch("/api/billing/checkout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ plan: selected, embedded: true }),
            });
            const data = await res.json();
            if (!res.ok) {
                setError(data.error || "Could not start checkout. Try again.");
                setCheckingOut(false);
                return;
            }
            if (data.checkout) {
                if (abandoned.current) {
                    await finish(data.checkout.sessionId, true);
                    return;
                }
                setCheckout(data.checkout);
                return;
            }
            // No key for the form inside the page, so Stripe's own.
            window.location.href = data.url;
        } catch {
            setError("Could not reach the billing service. Check your connection and try again.");
            setCheckingOut(false);
        } finally {
            setBusy(false);
        }
    }

    function showPaid() {
        setPaid(true);
        setCheckingOut(false);
        setCheckout(null);
        router.refresh();
    }

    async function backToPlans() {
        setLeaving(true);
        abandoned.current = true;
        try {
            if (checkout && (await finish(checkout.sessionId, true))) {
                showPaid();
                return;
            }
            setCheckout(null);
            setCheckingOut(false);
        } finally {
            setLeaving(false);
        }
    }

    async function complete() {
        if (!checkout) return;
        setLeaving(true);
        try {
            await finish(checkout.sessionId, false);
        } finally {
            setLeaving(false);
            showPaid();
        }
    }

    if (checkingOut) {
        return (
            <EmbeddedCheckoutPanel
                clientSecret={checkout?.clientSecret ?? null}
                publishableKey={checkout?.publishableKey ?? null}
                leaving={leaving}
                onBack={backToPlans}
                onCancel={backToPlans}
                onComplete={complete}
                backLabel="Back to plans"
                cancelLabel="Cancel"
            />
        );
    }

    return (
        <div className="space-y-4">
            <div className="grid gap-3 sm:grid-cols-3">
                {plans.map((plan) => {
                    const isSelected = plan.key === selected;
                    const disabled = Boolean(plan.unavailable);
                    return (
                        <button
                            key={plan.key}
                            type="button"
                            disabled={disabled}
                            onClick={() => setSelected(plan.key)}
                            title={plan.unavailable ?? undefined}
                            className={`text-left p-4 rounded-2xl border transition-all ${
                                isSelected
                                    ? "border-accent bg-accent/10"
                                    : "border-white/10 bg-white/5 hover:bg-white/10"
                            } disabled:opacity-40 disabled:cursor-not-allowed`}
                        >
                            <div className="flex items-center justify-between gap-2">
                                <span className="font-semibold text-white">{plan.name}</span>
                                {isSelected && <Check size={16} className="text-accent" />}
                            </div>
                            <p className="text-sm text-accent mt-1">{plan.priceLabel}</p>
                            <p className="text-xs text-white/50 mt-2 leading-relaxed">{plan.blurb}</p>
                            {plan.key === current && (
                                <p className="text-[11px] uppercase tracking-wide text-white/40 mt-3">
                                    {active ? "Current plan" : "Trial plan"}
                                </p>
                            )}
                            {plan.unavailable && <p className="text-xs text-amber-300/70 mt-2">{plan.unavailable}</p>}
                        </button>
                    );
                })}
            </div>

            {paid && (
                <p className="text-sm text-accent flex items-center justify-center gap-2">
                    <CheckCircle2 size={16} />
                    Payment received. Your plan is being updated.
                </p>
            )}

            {chosen && !chosen.configured ? (
                <p className="text-center text-sm text-white/40 py-3">
                    Billing for the {chosen.name} plan is not switched on yet.
                </p>
            ) : active && selected === current ? (
                <p className="text-center text-sm text-white/40 py-3">The agency is subscribed to this plan.</p>
            ) : (
                <button
                    type="button"
                    onClick={startCheckout}
                    disabled={busy || !chosen || Boolean(chosen.unavailable)}
                    className="w-full py-3 px-4 bg-accent text-primary font-semibold rounded-xl flex items-center justify-center gap-2 hover:bg-accent/90 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                >
                    {busy ? <Loader2 size={18} className="animate-spin" /> : <CreditCard size={18} />}
                    {busy ? "Opening checkout…" : `Subscribe to ${chosen?.name ?? "a plan"}`}
                </button>
            )}
            {error && <p className="text-sm text-red-300 text-center">{error}</p>}
        </div>
    );
}
