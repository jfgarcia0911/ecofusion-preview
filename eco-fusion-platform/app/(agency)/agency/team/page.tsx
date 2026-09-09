"use client";

import { useCallback, useEffect, useState } from "react";
import { KeyRound, UserPlus, Building2, Trash2, ShieldCheck } from "lucide-react";
import { useToast } from "@/components/ui/Toast";
import { useConfirm } from "@/components/ui/ConfirmDialog";
import Modal from "@/components/ui/Modal";

interface Business {
    id: string;
    name: string;
}

interface Staff {
    id: string;
    name: string | null;
    email: string;
    createdAt: string;
    businesses: Business[];
}

/**
 * EcoFusion's own people.
 *
 * Not a customer's team. Nobody listed here is employed by a business, and
 * nothing on this page touches a business's own members - a customer's staff
 * are managed by that customer, under Employees.
 *
 * A staff account is the platform owner's assistant. It arrives opening
 * nothing, and opens a sub account only because the owner handed that one
 * over. Somebody taken on to look after three customers cannot open the other
 * forty, which is the whole reason this screen exists rather than everyone
 * with a platform login seeing everything.
 */
export default function AgencyTeamPage() {
    const [staff, setStaff] = useState<Staff[]>([]);
    const [businesses, setBusinesses] = useState<Business[]>([]);
    const [loading, setLoading] = useState(true);
    const [denied, setDenied] = useState<string | null>(null);
    // Staff read the team; only the owner changes it. Said by the server
    // rather than worked out here, so the page cannot offer what the route
    // would refuse.
    const [canManage, setCanManage] = useState(false);

    const [adding, setAdding] = useState(false);
    const [draft, setDraft] = useState({ name: "", email: "", password: "" });
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [granting, setGranting] = useState<Staff | null>(null);
    const [picked, setPicked] = useState<string[]>([]);

    const toast = useToast();
    const confirmAction = useConfirm();

    const load = useCallback(async () => {
        try {
            const res = await fetch("/api/admin/staff");
            const data = await res.json();
            if (!res.ok) {
                setDenied(data.error ?? "Could not load the staff list.");
                return;
            }
            setStaff(data.staff ?? []);
            setBusinesses(data.businesses ?? []);
            setCanManage(Boolean(data.canManage));
        } catch {
            setDenied("Could not reach the server. Try again.");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        load();
    }, [load]);

    async function create(event: React.FormEvent) {
        event.preventDefault();
        if (saving) return;
        setSaving(true);
        setError(null);
        try {
            const res = await fetch("/api/admin/staff", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(draft),
            });
            const data = await res.json();
            if (!res.ok) {
                setError(data.error ?? "Could not create the account.");
                return;
            }
            toast.success(`${data.email} can now sign in as EcoFusion staff`);
            setAdding(false);
            setDraft({ name: "", email: "", password: "" });
            load();
        } catch {
            setError("Could not reach the server. Try again.");
        } finally {
            setSaving(false);
        }
    }

    function openGrant(person: Staff) {
        setGranting(person);
        setPicked(person.businesses.map((b) => b.id));
    }

    async function saveGrant(event: React.FormEvent) {
        event.preventDefault();
        if (!granting || saving) return;
        setSaving(true);
        try {
            const res = await fetch("/api/admin/staff", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userId: granting.id, organizationIds: picked }),
            });
            const data = await res.json();
            if (!res.ok) {
                toast.error(data.error ?? "Could not save their sub accounts.");
                return;
            }
            toast.success(
                picked.length === 0
                    ? `${granting.name || granting.email} now opens nothing`
                    : `${granting.name || granting.email} opens ${picked.length} sub account${picked.length === 1 ? "" : "s"}`
            );
            setGranting(null);
            load();
        } finally {
            setSaving(false);
        }
    }

    async function remove(person: Staff) {
        const ok = await confirmAction({
            title: `Remove ${person.name || person.email}?`,
            message:
                "Their account and every sub account it opens go. What they did inside a business stays in that business's access record.",
            confirmLabel: "Remove",
            tone: "danger",
        });
        if (!ok) return;

        const res = await fetch(`/api/admin/staff?userId=${encodeURIComponent(person.id)}`, {
            method: "DELETE",
        });
        if (!res.ok) {
            toast.error((await res.json()).error ?? "Could not remove the account.");
            return;
        }
        toast.success(`${person.email} removed`);
        load();
    }

    if (denied) {
        return (
            <div className="max-w-2xl">
                <h1 className="text-2xl font-bold text-white flex items-center gap-2 mb-2">
                    <KeyRound size={22} className="text-accent" />
                    Team Access
                </h1>
                <p className="px-4 py-3 rounded-xl border border-white/10 bg-white/[0.03] text-sm text-white/60">
                    {denied}
                </p>
            </div>
        );
    }

    return (
        <div>
            <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-white flex items-center gap-2">
                        <KeyRound size={22} className="text-accent" />
                        Team Access
                    </h1>
                    <p className="text-white/50 mt-1 text-sm max-w-2xl">
                        {canManage
                            ? "EcoFusion's own people. An account here opens nothing until you hand it a sub account, and opens only the ones you hand it. Customers manage their own staff under Employees."
                            : "EcoFusion's own people, and which sub accounts each of them opens. Taking somebody on, and deciding what they open, is the platform owner's."}
                    </p>
                </div>
                {canManage && !adding && (
                    <button
                        type="button"
                        onClick={() => {
                            setError(null);
                            setAdding(true);
                        }}
                        className="shrink-0 text-sm flex items-center gap-2 px-4 py-2.5 rounded-xl bg-accent/20 text-accent border border-accent/30 hover:bg-accent/30 transition-colors"
                    >
                        <UserPlus size={16} />
                        Add staff
                    </button>
                )}
            </div>

            {canManage && adding && (
                <form
                    onSubmit={create}
                    className="grid gap-3 sm:grid-cols-3 p-4 mb-5 rounded-2xl border border-accent/25 bg-accent/[0.06]"
                >
                    <label className="flex flex-col gap-1.5">
                        <span className="text-xs text-white/50">Name</span>
                        <input
                            value={draft.name}
                            onChange={(e) => setDraft({ ...draft, name: e.target.value })}
                            placeholder="Alex Reyes"
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
                            placeholder="alex@llayd.com"
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
                    </label>

                    {error && <p className="sm:col-span-3 text-sm text-red-300">{error}</p>}

                    <div className="sm:col-span-3 flex items-center gap-2">
                        <button
                            type="submit"
                            disabled={saving}
                            className="px-5 py-2.5 rounded-xl bg-accent text-primary font-bold text-sm disabled:opacity-50"
                        >
                            {saving ? "Creating..." : "Create account"}
                        </button>
                        <button
                            type="button"
                            onClick={() => setAdding(false)}
                            className="px-4 py-2.5 rounded-xl border border-white/10 text-sm text-white/60 hover:text-white"
                        >
                            Cancel
                        </button>
                        <span className="text-xs text-white/30 ml-auto">
                            They start with none. Hand them a sub account afterwards.
                        </span>
                    </div>
                </form>
            )}

            {loading ? (
                <p className="text-white/40 text-sm py-10 text-center">Loading...</p>
            ) : staff.length === 0 ? (
                <div className="flex flex-col items-center text-center py-16 rounded-2xl border border-white/10 bg-white/[0.02]">
                    <ShieldCheck size={32} className="text-accent/50 mb-3" />
                    <p className="text-white font-medium">No staff yet</p>
                    <p className="text-sm text-white/40 mt-1.5 max-w-sm">
                        {canManage
                            ? "You are the only EcoFusion account. Add somebody to help, then choose which sub accounts they can open."
                            : "Nobody has been taken on yet."}
                    </p>
                </div>
            ) : (
                <div className="overflow-x-auto rounded-xl border border-white/10 custom-scrollbar">
                    <table className="w-full border-collapse text-left text-sm">
                        <thead>
                            <tr className="bg-white/[0.04]">
                                {["Name", "Email", "Sub Accounts", "Added", ""].map((h, i) => (
                                    <th
                                        key={h || i}
                                        scope="col"
                                        className="px-4 py-3 text-[11px] font-bold uppercase tracking-wider text-white/40 whitespace-nowrap"
                                    >
                                        {h}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {staff.map((person) => (
                                <tr key={person.id} className="border-t border-white/5 hover:bg-white/[0.02]">
                                    <td className="px-4 py-3.5 text-white">
                                        {person.name || <span className="text-white/25">-</span>}
                                    </td>
                                    <td className="px-4 py-3.5 text-white/55">{person.email}</td>
                                    <td className="px-4 py-3.5">
                                        {person.businesses.length === 0 ? (
                                            <span className="text-xs text-white/30">None yet</span>
                                        ) : (
                                            <span className="flex flex-wrap gap-1">
                                                {person.businesses.map((b) => (
                                                    <span
                                                        key={b.id}
                                                        className="px-2 py-0.5 rounded border border-white/10 bg-white/[0.04] text-[11px] text-white/55 whitespace-nowrap"
                                                    >
                                                        {b.name}
                                                    </span>
                                                ))}
                                            </span>
                                        )}
                                    </td>
                                    <td className="px-4 py-3.5 text-white/40 whitespace-nowrap tabular-nums">
                                        {new Date(person.createdAt).toLocaleDateString()}
                                    </td>
                                    <td className="px-4 py-3.5 text-right">
                                        <div className="flex items-center justify-end gap-1.5">
                                            {canManage && (
                                            <button
                                                type="button"
                                                onClick={() => openGrant(person)}
                                                className="text-xs flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors whitespace-nowrap"
                                            >
                                                <Building2 size={13} />
                                                Sub accounts
                                            </button>
                                            )}
                                            {canManage && (
                                            <button
                                                type="button"
                                                onClick={() => remove(person)}
                                                aria-label={`Remove ${person.name || person.email}`}
                                                className="p-2 rounded-lg text-white/30 hover:text-red-300 hover:bg-red-400/10 transition-all"
                                            >
                                                <Trash2 size={15} />
                                            </button>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            <Modal
                isOpen={granting !== null}
                onClose={() => setGranting(null)}
                title={`Sub accounts for ${granting?.name || granting?.email || ""}`}
            >
                <form onSubmit={saveGrant} className="space-y-4">
                    <p className="text-sm text-white/55">
                        They can open the ones ticked, and nothing else. Unticking takes it
                        back; any support session they have open ends on their next request.
                    </p>

                    <div className="space-y-2 max-h-80 overflow-y-auto custom-scrollbar">
                        {businesses.map((b) => {
                            const on = picked.includes(b.id);
                            return (
                                <label
                                    key={b.id}
                                    className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-colors ${
                                        on
                                            ? "bg-accent/10 border-accent/30"
                                            : "bg-white/5 border-white/10 hover:bg-white/10"
                                    }`}
                                >
                                    <input
                                        type="checkbox"
                                        checked={on}
                                        onChange={(e) =>
                                            setPicked((prev) =>
                                                e.target.checked
                                                    ? [...prev, b.id]
                                                    : prev.filter((id) => id !== b.id)
                                            )
                                        }
                                        className="accent-[color:var(--color-accent)] w-4 h-4"
                                    />
                                    <span className="flex-1 text-sm text-white">{b.name}</span>
                                </label>
                            );
                        })}
                    </div>

                    <div className="flex gap-2">
                        <button
                            type="submit"
                            disabled={saving}
                            className="flex-1 py-2.5 rounded-xl bg-accent text-primary font-bold text-sm disabled:opacity-50"
                        >
                            {saving ? "Saving..." : "Save"}
                        </button>
                        <button
                            type="button"
                            onClick={() => setGranting(null)}
                            className="px-4 py-2.5 rounded-xl border border-white/10 text-sm text-white/60 hover:text-white"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    );
}
