"use client";

import { useEffect, useState } from "react";
import Modal from "@/components/ui/Modal";
import { useToast } from "@/components/ui/Toast";

/**
 * Corrects how a business is identified in a list.
 *
 * The name and nothing else. Where a business is, who owns it, its people, its
 * subscription - all of that is the business's own to state, and is changed
 * from inside it, which means opening a support session and being recorded
 * doing it. A typo in a name is not worth that, and pretending it is only
 * teaches staff to keep a session open all day.
 */
export default function EditSubAccountModal({
    business,
    onClose,
    onSaved,
}: {
    business: { id: string; name: string } | null;
    onClose: () => void;
    onSaved: (business: { id: string; name: string }) => void;
}) {
    const [name, setName] = useState("");
    const [saving, setSaving] = useState(false);
    const toast = useToast();

    useEffect(() => {
        if (business) {
            setName(business.name);
        }
    }, [business]);

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
