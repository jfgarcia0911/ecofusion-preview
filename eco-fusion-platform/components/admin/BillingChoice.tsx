"use client";

import { SUB_ACCOUNT_PRICE_LABEL, SUB_ACCOUNT_TRIAL_DAYS } from "@/lib/plans";

/**
 * Whether a sub-account is charged: the agency's $99 a month, or complimentary.
 *
 * Two cards rather than a checkbox, because both answers have consequences
 * the person choosing should read before choosing - one of them locks a
 * business that does not pay, the other never charges it at all.
 */
export default function BillingChoice({
    complimentary,
    onChange,
    chargeDisabledReason,
    compDisabledReason,
    chargeNote,
}: {
    complimentary: boolean;
    onChange: (complimentary: boolean) => void;
    /** Why charging cannot be chosen, if it cannot. */
    chargeDisabledReason?: string | null;
    /** Why complimentary cannot be chosen, if it cannot. */
    compDisabledReason?: string | null;
    /** What choosing to charge means here, when it differs from a new business. */
    chargeNote?: string;
}) {
    const options = [
        {
            value: false,
            title: `Charge ${SUB_ACCOUNT_PRICE_LABEL}`,
            body: chargeNote ?? `Free for ${SUB_ACCOUNT_TRIAL_DAYS} days, then the owner subscribes.`,
            disabled: chargeDisabledReason ?? null,
        },
        {
            value: true,
            title: "Complimentary",
            body: "Never charged and never locked. For a partner, a demo, or a business you look after for free.",
            disabled: compDisabledReason ?? null,
        },
    ];

    return (
        <fieldset className="flex flex-col gap-1.5">
            <legend className="text-xs text-white/50 mb-1.5">Billing</legend>
            <div className="grid grid-cols-2 gap-3">
                {options.map((option) => {
                    const selected = complimentary === option.value;
                    return (
                        <label
                            key={option.title}
                            title={option.disabled ?? undefined}
                            className={`flex items-start gap-2.5 p-3 rounded-xl border text-left transition-colors ${
                                selected
                                    ? "border-accent/40 bg-accent/10"
                                    : "border-white/10 bg-white/[0.03] hover:bg-white/[0.06]"
                            } ${option.disabled ? "opacity-45 cursor-not-allowed" : "cursor-pointer"}`}
                        >
                            <input
                                type="radio"
                                name="sub-account-billing"
                                checked={selected}
                                disabled={Boolean(option.disabled)}
                                onChange={() => onChange(option.value)}
                                className="accent-accent mt-0.5"
                            />
                            <span className="min-w-0">
                                <span className="block text-sm font-medium text-white">{option.title}</span>
                                <span className="block text-xs text-white/45 mt-0.5 leading-relaxed">
                                    {option.disabled ?? option.body}
                                </span>
                            </span>
                        </label>
                    );
                })}
            </div>
        </fieldset>
    );
}
