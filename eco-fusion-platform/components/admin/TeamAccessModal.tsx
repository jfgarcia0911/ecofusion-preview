"use client";

import { useCallback, useEffect, useState } from "react";
import { KeyRound, UserPlus, ShieldCheck } from "lucide-react";
import Modal from "@/components/ui/Modal";
import { useToast } from "@/components/ui/Toast";
import { ASSIGNABLE_BUSINESS_ROLES } from "@/lib/roles";

interface Member {
    id: string;
    membershipId: string;
    name: string | null;
    email: string;
    role: string;
    jobTitle: string | null;
    joinedAt: string;
}

const ROLE_STYLES: Record<string, string> = {
    owner: "bg-accent/15 text-accent border-accent/30",
    supervisor: "bg-white/10 text-white/70 border-white/20",
    manager: "bg-white/10 text-white/70 border-white/20",
    member: "bg-white/[0.06] text-white/50 border-white/10",
};

/**
 * Who can sign in to a customer's business, from the agency list.
 *
 * Reached without entering the business, because "who has a login here" is a
 * question support answers often and opening a session to answer it grants far
 * more than the question needs. Creating one is still written to the business's
 * own access record, so the owner sees it.
 *
 * The owner's equivalent is Employees, which is this list with the employment
 * side attached. Here the job title is shown but not editable: what somebody
 * does at a business is the business's to say.
 */
export default function TeamAccessModal({
    business,
    onClose,
}: {
    business: { id: string; name: string } | null;
    onClose: () => void;
}) {
    const [members, setMembers] = useState<Member[]>([]);
    const [loading, setLoading] = useState(false);
    const [adding, setAdding] = useState(false);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [draft, setDraft] = useState({ name: "", email: "", password: "", role: "member" });
    const toast = useToast();

    const load = useCallback(async () => {
        if (!business) return;
        setLoading(true);
        try {
            const res = await fetch(
                `/api/admin/members?organizationId=${encodeURIComponent(business.id)}`
            );
            const data = await res.json();
            if (!res.ok) {
                setError(data.error ?? "Could not read the logins for this business.");
                return;
            }
            setMembers(data.members ?? []);
        } catch {
            setError("Could not reach the server. Try again.");
        } finally {
            setLoading(false);
        }
    }, [business]);

    useEffect(() => {
        if (!business) return;
        setError(null);
        setAdding(false);
        setDraft({ name: "", email: "", password: "", role: "member" });
        load();
    }, [business, load]);

    async function create(event: React.FormEvent) {
        event.preventDefault();
        if (!business || saving) return;

        setSaving(true);
        setError(null);
        try {
            const res = await fetch("/api/admin/members", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ organizationId: business.id, ...draft }),
            });
            const data = await res.json();
            if (!res.ok) {
                setError(data.error ?? "Could not create the login.");
                return;
            }
            toast.success(`${data.email} can now sign in to ${business.name}`);
            setAdding(false);
            setDraft({ name: "", email: "", password: "", role: "member" });
            load();
        } catch {
            setError("Could not reach the server. Try again.");
        } finally {
            setSaving(false);
        }
    }

    return (
        <Modal
            isOpen={business !== null}
            onClose={onClose}
            title={`Logins for ${business?.name ?? ""}`}
            size="lg"
        >
            <div className="space-y-4">
                <p className="text-sm text-white/50">
                    Everybody who can sign in to this business. Creating a login here is
                    written to the business&apos;s access record, which its owner reads.
                </p>

                {error && (
                    <p className="px-3 py-2.5 rounded-xl border border-red-400/25 bg-red-400/10 text-sm text-red-100">
                        {error}
                    </p>
                )}

                {loading ? (
                    <p className="text-white/40 text-sm py-8 text-center">Loading...</p>
                ) : members.length === 0 ? (
                    <p className="text-white/40 text-sm py-8 text-center">
                        Nobody can sign in to this business yet.
                    </p>
                ) : (
                    <div className="rounded-xl border border-white/10 overflow-hidden">
                        {members.map((m) => (
                            <div
                                key={m.membershipId}
                                className="flex items-center gap-3 px-4 py-3 border-b border-white/5 last:border-0"
                            >
                                <div className="min-w-0 flex-1">
                                    <p className="text-sm text-white truncate">
                                        {m.name || m.email}
                                        {m.jobTitle && (
                                            <span className="ml-2 text-xs text-white/35">{m.jobTitle}</span>
                                        )}
                                    </p>
                                    <p className="text-xs text-white/40 truncate">{m.email}</p>
                                </div>
                                <span
                                    className={`px-2 py-0.5 rounded-full border text-[11px] capitalize whitespace-nowrap ${
                                        ROLE_STYLES[m.role] ?? ROLE_STYLES.member
                                    }`}
                                >
                                    {m.role === "owner" && <ShieldCheck size={11} className="inline mr-1" />}
                                    {m.role}
                                </span>
                            </div>
                        ))}
                    </div>
                )}

                {!adding ? (
                    <button
                        type="button"
                        onClick={() => {
                            setError(null);
                            setAdding(true);
                        }}
                        className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-white/10 text-sm text-white/70 hover:bg-white/5 hover:text-white transition-colors"
                    >
                        <UserPlus size={15} />
                        Create a login
                    </button>
                ) : (
                    <form onSubmit={create} className="space-y-3 p-4 rounded-xl border border-accent/25 bg-accent/[0.06]">
                        <label className="flex flex-col gap-1.5">
                            <span className="text-xs text-white/50">Name</span>
                            <input
                                value={draft.name}
                                onChange={(e) => setDraft({ ...draft, name: e.target.value })}
                                placeholder="Maria Santos"
                                className="px-3 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/25 text-sm"
                            />
                        </label>

                        <label className="flex flex-col gap-1.5">
                            <span className="text-xs text-white/50">Email</span>
                            <input
                                type="email"
                                required
                                value={draft.email}
                                onChange={(e) => setDraft({ ...draft, email: e.target.value })}
                                placeholder="maria@example.com"
                                className="px-3 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/25 text-sm"
                            />
                        </label>

                        <label className="flex flex-col gap-1.5">
                            <span className="text-xs text-white/50">Starting password</span>
                            <input
                                required
                                value={draft.password}
                                onChange={(e) => setDraft({ ...draft, password: e.target.value })}
                                placeholder="At least 10 characters"
                                className="px-3 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/25 text-sm font-mono"
                            />
                            <span className="text-xs text-white/30">
                                Not emailed. Hand it over, and they can change it themselves.
                            </span>
                        </label>

                        <label className="flex flex-col gap-1.5">
                            <span className="text-xs text-white/50">Role</span>
                            <select
                                value={draft.role}
                                onChange={(e) => setDraft({ ...draft, role: e.target.value })}
                                className="px-3 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm capitalize"
                            >
                                {ASSIGNABLE_BUSINESS_ROLES.map((role) => (
                                    <option key={role} value={role} className="bg-[#0b1a14] capitalize">
                                        {role}
                                    </option>
                                ))}
                            </select>
                        </label>

                        <div className="flex gap-2 pt-1">
                            <button
                                type="submit"
                                disabled={saving}
                                className="flex-1 py-2.5 rounded-xl bg-accent text-primary font-bold text-sm disabled:opacity-50"
                            >
                                {saving ? "Creating..." : "Create login"}
                            </button>
                            <button
                                type="button"
                                onClick={() => setAdding(false)}
                                className="px-4 py-2.5 rounded-xl border border-white/10 text-sm text-white/60 hover:text-white"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </Modal>
    );
}
