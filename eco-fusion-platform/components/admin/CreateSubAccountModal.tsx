"use client";

import { useEffect, useState } from "react";
import Modal from "@/components/ui/Modal";
import { useToast } from "@/components/ui/Toast";
import { getPasswordRequirements, validatePassword } from "@/lib/validation/password";
import type { SubAccount } from "@/app/(agency)/agency/sub-accounts/page";

/**
 * Sets a customer up on the platform.
 *
 * The owner gets a real login, not a placeholder: the account created here is
 * indistinguishable from one somebody made for themselves, and the starting
 * password is theirs to change. Staff take no membership in the new business -
 * reaching inside it still means stepping in, which is recorded.
 */
export default function CreateSubAccountModal({
    open,
    onClose,
    onCreated,
}: {
    open: boolean;
    onClose: () => void;
    onCreated: (business: SubAccount) => void;
}) {
    const [name, setName] = useState("");
    const [ownerName, setOwnerName] = useState("");
    const [ownerEmail, setOwnerEmail] = useState("");
    const [ownerPassword, setOwnerPassword] = useState("");
    const [saving, setSaving] = useState(false);
    const toast = useToast();

    useEffect(() => {
        if (open) {
            setName("");
            setOwnerName("");
            setOwnerEmail("");
            setOwnerPassword("");
        }
    }, [open]);

    // Checked here as well as on the server, so a weak password is refused
    // before the account is anywhere near being created rather than after.
    const passwordError = ownerPassword ? validatePassword(ownerPassword).errors[0] : null;
    const ready = name.trim() && ownerEmail.trim() && ownerPassword && !passwordError;

    async function create() {
        if (!ready) return;
        setSaving(true);
        try {
            const res = await fetch("/api/admin/organizations", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: name.trim(),
                    ownerName: ownerName.trim(),
                    ownerEmail: ownerEmail.trim(),
                    ownerPassword,
                }),
            });
            const data = await res.json();
            if (!res.ok) {
                toast.error(data.error ?? "Could not create that sub account");
                return;
            }
            onCreated(data.organization);
            toast.success(`Created ${data.organization.name}`, {
                description: `${data.organization.owner.email} can sign in now. Send them the starting password yourself - it is not emailed.`,
            });
            onClose();
        } catch {
            toast.error("Could not create that sub account");
        } finally {
            setSaving(false);
        }
    }

    return (
        <Modal isOpen={open} onClose={onClose} title="Create sub account" size="md">
            <div className="flex flex-col gap-5">
                <div className="text-sm text-white/50 leading-relaxed">
                    <p>
                        Creates the business, its owner&apos;s login, and a{" "}
                        <strong className="text-white/80">15 day trial</strong>, with whatever
                        the default snapshot carries: business units, zones, growing parameters
                        and classes.
                    </p>
                    <p className="mt-2">
                        The starting password is not emailed to anyone. Pass it to the owner
                        yourself and have them change it.
                    </p>
                </div>

                <label className="flex flex-col gap-1.5">
                    <span className="text-xs text-white/50">Business name</span>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="px-3 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/25 text-sm"
                        placeholder="Riverbend Aquaponics"
                    />
                </label>

                <div className="grid grid-cols-2 gap-3">
                    <label className="flex flex-col gap-1.5">
                        <span className="text-xs text-white/50">
                            Owner name <span className="text-white/25">(optional)</span>
                        </span>
                        <input
                            value={ownerName}
                            onChange={(e) => setOwnerName(e.target.value)}
                            className="px-3 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/25 text-sm"
                            placeholder="Sam Rivera"
                        />
                    </label>

                    <label className="flex flex-col gap-1.5">
                        <span className="text-xs text-white/50">Owner email</span>
                        <input
                            type="email"
                            value={ownerEmail}
                            onChange={(e) => setOwnerEmail(e.target.value)}
                            className="px-3 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/25 text-sm"
                            placeholder="sam@riverbend.com"
                        />
                    </label>
                </div>

                <label className="flex flex-col gap-1.5">
                    <span className="text-xs text-white/50">Starting password</span>
                    <input
                        type="text"
                        value={ownerPassword}
                        onChange={(e) => setOwnerPassword(e.target.value)}
                        className="px-3 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/25 text-sm font-mono"
                        placeholder="Type the password you will pass on"
                    />
                    {passwordError ? (
                        <span className="text-xs text-red-300">{passwordError}</span>
                    ) : (
                        <span className="text-xs text-white/30">
                            {getPasswordRequirements().join(" - ")}
                        </span>
                    )}
                </label>

                <div className="flex items-center gap-3 pt-1">
                    <button
                        type="button"
                        onClick={create}
                        disabled={saving || !ready}
                        className="px-6 py-2 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90 disabled:opacity-50"
                    >
                        {saving ? "Creating..." : "Create sub account"}
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
