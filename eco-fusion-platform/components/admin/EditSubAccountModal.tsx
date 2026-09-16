"use client";

import { useEffect, useState } from "react";
import Modal from "@/components/ui/Modal";
import { useToast } from "@/components/ui/Toast";
import BillingChoice from "@/components/admin/BillingChoice";
import { SUB_ACCOUNT_TRIAL_DAYS } from "@/lib/plans";
import type { SubAccount } from "@/app/(agency)/agency/sub-accounts/page";

type Saved = Pick<SubAccount, "id" | "name" | "standing" | "trialDaysLeft">;

/**
 * Corrects how a business is identified in a list, and - for the master
 * account - whether the agency charges it.
 *
 * Nothing else. Where a business is, who owns it and its people are the
 * business's own to state, and are changed from inside it, which means opening
 * a support session and being recorded doing it. A typo in a name is not worth
 * that. Whether the agency charges it is different: that is the agency's
 * decision, not the business's.
 */
export default function EditSubAccountModal({
    business,
    canComp,
    onClose,
    onSaved,
}: {
    business: Pick<SubAccount, "id" | "name" | "standing"> | null;
    /** May change whether the business is charged. The master account alone. */
    canComp: boolean;
    onClose: () => void;
    onSaved: (business: Saved) => void;
}) {
    const [name, setName] = useState("");
    const [complimentary, setComplimentary] = useState(false);
    const [saving, setSaving] = useState(false);
    const toast = useToast();

    useEffect(() => {
        if (business) {
            setName(business.name);
            setComplimentary(business.standing === "free");
        }
    }, [business]);

    // The agency's own business pays nothing whatever this says, so it is not asked.
    const showBilling = canComp && business !== null && business.standing !== "own";
    const wasComplimentary = business?.standing === "free";
    const billingChanged = showBilling && complimentary !== wasComplimentary;

    async function save() {
        if (!business || !name.trim()) return;
        setSaving(true);
        try {
            const res = await fetch("/api/admin/organizations", {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    organizationId: business.id,
                    name: name.trim(),
                    ...(billingChanged ? { complimentary } : {}),
                }),
            });
            const data = await res.json();
            if (!res.ok) {
                toast.error(data.error ?? "Could not save that");
                return;
            }
            onSaved(data.organization);
            toast.success(`Saved ${data.organization.name}`);
            onClose();
        } catch {
            toast.error("Could not save that");
        } finally {
            setSaving(false);
        }
    }

    return (
        <Modal
            isOpen={business !== null}
            onClose={onClose}
            title={business ? `Edit ${business.name}` : "Edit sub account"}
            size="md"
        >
            <div className="flex flex-col gap-5">
                <label className="flex flex-col gap-1.5">
                    <span className="text-xs text-white/50">Business name</span>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="px-3 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/25 text-sm"
                        placeholder="Riverbend Aquaponics"
                    />
                </label>


                {showBilling && (
                    <BillingChoice
                        complimentary={complimentary}
                        onChange={setComplimentary}
                        chargeNote={
                            wasComplimentary
                                ? `Starts a fresh ${SUB_ACCOUNT_TRIAL_DAYS}-day free period, then the owner subscribes.`
                                : undefined
                        }
                        compDisabledReason={
                            business?.standing === "active"
                                ? "Paying by card. Cancel its subscription in your Stripe dashboard first."
                                : null
                        }
                    />
                )}

                <div className="flex items-center gap-3 pt-1">
                    <button
                        type="button"
                        onClick={save}
                        disabled={saving || !name.trim()}
                        className="px-6 py-2 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90 disabled:opacity-50"
                    >
                        {saving ? "Saving..." : "Save"}
                    </button>
                    <button
                        type="button"
                        onClick={onClose}
                        className="px-4 py-2 text-white/60 hover:text-white rounded-lg"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </Modal>
    );
}
