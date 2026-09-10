"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { KeyRound, UserPlus, Trash2, ShieldCheck, SlidersHorizontal, Lock, Check } from "lucide-react";
import { useToast } from "@/components/ui/Toast";
import { useConfirm } from "@/components/ui/ConfirmDialog";
import Modal from "@/components/ui/Modal";
import { TeamAccessSkeleton } from "@/components/skeletons/PageSkeletons";
import {
    NEVER_DELEGATED,
    PERMISSION_LIST,
    PRESETS,
    matchingPreset,
    type StaffPermission,
} from "@/lib/staff-permissions";

interface Business {
    id: string;
    name: string;
}

interface Staff {
    id: string;
    name: string | null;
    email: string;
    createdAt: string;
    permissions: StaffPermission[];
    businesses: Business[];
}

/** The permission list in its groups, in the order it is written. */
const GROUPS = PERMISSION_LIST.reduce<{ group: string; items: typeof PERMISSION_LIST }[]>((out, item) => {
    const last = out[out.length - 1];
    if (last && last.group === item.group) last.items.push(item);
    else out.push({ group: item.group, items: [item] });
    return out;
}, []);

/** How somebody's permissions read in one line of the table. */
function accessSummary(permissions: StaffPermission[]): { label: string; muted: boolean } {
    if (permissions.length === 0) return { label: "Nothing yet", muted: true };
    const preset = matchingPreset(permissions);
    if (preset) return { label: preset.label, muted: false };
    return { label: `Custom · ${permissions.length} permission${permissions.length === 1 ? "" : "s"}`, muted: false };
}

/**
 * EcoFusion's own people, and exactly what each of them may do.
 *
 * Not a customer's team: nobody here is employed by a business, and nothing on
 * this page touches a business's own members.
 *
 * Two separate choices per person, made together in one panel: which sub
 * accounts they open, and what they may do - inside those businesses and in
 * the agency view. Somebody new opens nothing and may do nothing until the
 * master account says otherwise. Every change is written to the Access Log,
 * and takes effect on the person's next click.
 */
export default function AgencyTeamPage() {
    const [staff, setStaff] = useState<Staff[]>([]);
    const [businesses, setBusinesses] = useState<Business[]>([]);
    const [loading, setLoading] = useState(true);
    const [denied, setDenied] = useState<string | null>(null);
    // Only the master account changes any of this. Said by the server rather
    // than worked out here, so the page cannot offer what the route would refuse.
    const [canManage, setCanManage] = useState(false);

    const [adding, setAdding] = useState(false);
    const [draft, setDraft] = useState({ name: "", email: "", password: "", preset: "" });
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [editing, setEditing] = useState<Staff | null>(null);
    const [pickedPermissions, setPickedPermissions] = useState<Set<StaffPermission>>(new Set());
    const [pickedBusinesses, setPickedBusinesses] = useState<Set<string>>(new Set());
    const [businessSearch, setBusinessSearch] = useState("");

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
            const preset = PRESETS.find((p) => p.key === draft.preset);
            const res = await fetch("/api/admin/staff", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: draft.name,
                    email: draft.email,
                    password: draft.password,
                    permissions: preset?.permissions ?? [],
                }),
            });
            const data = await res.json();
            if (!res.ok) {
                setError(data.error ?? "Could not create the account.");
                return;
            }
            toast.success(`${data.email} can now sign in as EcoFusion staff`);
            setAdding(false);
            setDraft({ name: "", email: "", password: "", preset: "" });
            await load();
            // Straight on to the second half of taking somebody on: which sub
            // accounts they open, and adjusting what they can do.
            openEditor({ ...data, businesses: [] });
        } catch {
            setError("Could not reach the server. Try again.");
        } finally {
            setSaving(false);
        }
    }

    function openEditor(person: Staff) {
        setEditing(person);
        setPickedPermissions(new Set(person.permissions));
        setPickedBusinesses(new Set(person.businesses.map((b) => b.id)));
        setBusinessSearch("");
    }

    function togglePermission(key: StaffPermission) {
        setPickedPermissions((current) => {
            const next = new Set(current);
            if (next.has(key)) next.delete(key);
            else next.add(key);
            return next;
        });
    }

    function toggleBusiness(id: string) {
        setPickedBusinesses((current) => {
            const next = new Set(current);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            return next;
        });
    }

    const permissionsChanged = useMemo(() => {
        if (!editing) return false;
        const before = new Set(editing.permissions);
        return before.size !== pickedPermissions.size || [...pickedPermissions].some((p) => !before.has(p));
    }, [editing, pickedPermissions]);

    const businessesChanged = useMemo(() => {
        if (!editing) return false;
        const before = new Set(editing.businesses.map((b) => b.id));
        return before.size !== pickedBusinesses.size || [...pickedBusinesses].some((id) => !before.has(id));
    }, [editing, pickedBusinesses]);

    async function saveAccess(event: React.FormEvent) {
        event.preventDefault();
        if (!editing || saving) return;
        if (!permissionsChanged && !businessesChanged) {
            setEditing(null);
            return;
        }
        setSaving(true);
        try {
            // Two answers, saved one after the other; each is recorded in the
            // Access Log on its own line.
            if (permissionsChanged) {
                const res = await fetch("/api/admin/staff", {
                    method: "PATCH",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ userId: editing.id, permissions: [...pickedPermissions] }),
                });
                if (!res.ok) {
                    toast.error((await res.json()).error ?? "Could not save what they can do.");
                    return;
                }
            }
            if (businessesChanged) {
                const res = await fetch("/api/admin/staff", {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ userId: editing.id, organizationIds: [...pickedBusinesses] }),
                });
                if (!res.ok) {
                    toast.error((await res.json()).error ?? "Could not save their sub accounts.");
                    return;
                }
            }
            toast.success(`Saved ${editing.name || editing.email}'s access`);
            setEditing(null);
            load();
        } finally {
            setSaving(false);
        }
    }

    async function remove(person: Staff) {
        const ok = await confirmAction({
            title: `Remove ${person.name || person.email}?`,
            message:
                "Their account, what they can do, and every sub account it opens go. What they did inside a business stays in the Access Log.",
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

    if (loading) return <TeamAccessSkeleton />;

    const selectedPreset = matchingPreset([...pickedPermissions]);
    const term = businessSearch.trim().toLowerCase();
    const shownBusinesses = businesses.filter((b) => !term || b.name.toLowerCase().includes(term));

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
                            ? "EcoFusion's own people. For each, choose which sub accounts they open and exactly what they may do. Somebody new opens nothing and can do nothing until you say so."
                            : "EcoFusion's own people, which sub accounts each opens, and what each may do. Only the master account changes this."}
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
                    className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 p-4 mb-5 rounded-2xl border border-accent/25 bg-accent/[0.06]"
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
                    <label className="flex flex-col gap-1.5">
                        <span className="text-xs text-white/50">Starting access</span>
                        <select
                            value={draft.preset}
                            onChange={(e) => setDraft({ ...draft, preset: e.target.value })}
                            className="px-3 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm"
                        >
                            <option value="" className="bg-neutral-900">Nothing yet</option>
                            {PRESETS.map((preset) => (
                                <option key={preset.key} value={preset.key} className="bg-neutral-900">
                                    {preset.label}
                                </option>
                            ))}
                        </select>
                    </label>

                    {error && <p className="sm:col-span-2 lg:col-span-4 text-sm text-red-300">{error}</p>}

                    <div className="sm:col-span-2 lg:col-span-4 flex items-center gap-2">
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
                            Next you choose which sub accounts they open, and can adjust what they may do.
                        </span>
                    </div>
                </form>
            )}

            {staff.length === 0 ? (
                <div className="flex flex-col items-center text-center py-16 rounded-2xl border border-white/10 bg-white/[0.02]">
                    <ShieldCheck size={32} className="text-accent/50 mb-3" />
                    <p className="text-white font-medium">No staff yet</p>
                    <p className="text-sm text-white/40 mt-1.5 max-w-sm">
                        {canManage
                            ? "You are the only EcoFusion account. Add somebody to help, then choose what they open and what they may do."
                            : "Nobody has been taken on yet."}
                    </p>
                </div>
            ) : (
                <div className="overflow-x-auto rounded-xl border border-white/10 custom-scrollbar">
                    <table className="w-full border-collapse text-left text-sm">
                        <thead>
                            <tr className="bg-white/[0.04]">
                                {["Name", "Email", "Can do", "Sub Accounts", "Added", ""].map((h, i) => (
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
                            {staff.map((person) => {
                                const summary = accessSummary(person.permissions);
                                return (
                                    <tr key={person.id} className="border-t border-white/5 hover:bg-white/[0.02]">
                                        <td className="px-4 py-3.5 text-white">
                                            {person.name || <span className="text-white/25">-</span>}
                                        </td>
                                        <td className="px-4 py-3.5 text-white/55">{person.email}</td>
                                        <td className="px-4 py-3.5 whitespace-nowrap">
                                            <span
                                                className={`px-2 py-0.5 rounded border text-[11px] ${
                                                    summary.muted
                                                        ? "border-white/10 text-white/30"
                                                        : "border-accent/30 bg-accent/10 text-accent"
                                                }`}
                                            >
                                                {summary.label}
                                            </span>
                                        </td>
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
                                            {canManage && (
                                                <div className="flex items-center justify-end gap-1.5">
                                                    <button
                                                        type="button"
                                                        onClick={() => openEditor(person)}
                                                        className="text-xs flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors whitespace-nowrap"
                                                    >
                                                        <SlidersHorizontal size={13} />
                                                        Edit access
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={() => remove(person)}
                                                        aria-label={`Remove ${person.name || person.email}`}
                                                        className="p-2 rounded-lg text-white/30 hover:text-red-300 hover:bg-red-400/10 transition-colors"
                                                    >
                                                        <Trash2 size={15} />
                                                    </button>
                                                </div>
                                            )}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            )}

            {/* What no permission reaches, said once so nobody goes looking for it. */}
            <div className="mt-6 p-4 rounded-2xl border border-white/10 bg-white/[0.02]">
                <p className="text-sm font-semibold text-white flex items-center gap-2 mb-2">
                    <Lock size={14} className="text-white/40" />
                    Always the master account&apos;s, whatever is ticked
                </p>
                <ul className="space-y-1">
                    {NEVER_DELEGATED.map((line) => (
                        <li key={line} className="text-xs text-white/45 pl-5 relative">
                            <span className="absolute left-1.5 top-[7px] w-1 h-1 rounded-full bg-white/25" />
                            {line}
                        </li>
                    ))}
                </ul>
            </div>

            <Modal
                isOpen={editing !== null}
                onClose={() => setEditing(null)}
                title={`Access for ${editing?.name || editing?.email || ""}`}
                size="xl"
            >
                <form onSubmit={saveAccess} className="space-y-6">
                    <div className="grid gap-6 lg:grid-cols-5">
                        {/* What they may do. */}
                        <section className="lg:col-span-3 space-y-4">
                            <div>
                                <h3 className="text-sm font-semibold text-white">What they can do</h3>
                                <p className="text-xs text-white/45 mt-0.5">
                                    Start from a preset, then tick or untick anything.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {PRESETS.map((preset) => {
                                    const on = selectedPreset?.key === preset.key;
                                    return (
                                        <button
                                            key={preset.key}
                                            type="button"
                                            title={preset.hint}
                                            onClick={() => setPickedPermissions(new Set(preset.permissions))}
                                            className={`text-xs px-3 py-1.5 rounded-lg border flex items-center gap-1.5 transition-colors ${
                                                on
                                                    ? "border-accent/50 bg-accent/15 text-accent"
                                                    : "border-white/10 text-white/60 hover:text-white hover:bg-white/10"
                                            }`}
                                        >
                                            {on && <Check size={12} strokeWidth={3} />}
                                            {preset.label}
                                        </button>
                                    );
                                })}
                                <button
                                    type="button"
                                    onClick={() => setPickedPermissions(new Set())}
                                    className="text-xs px-3 py-1.5 rounded-lg border border-white/10 text-white/40 hover:text-white hover:bg-white/10"
                                >
                                    Nothing
                                </button>
                            </div>

                            <div className="space-y-4 max-h-[48vh] overflow-y-auto custom-scrollbar pr-1">
                                {GROUPS.map(({ group, items }) => (
                                    <div key={group}>
                                        <p className="text-[11px] font-bold uppercase tracking-wider text-white/35 mb-1.5">
                                            {group}
                                        </p>
                                        <div className="space-y-1">
                                            {items.map((item) => {
                                                const on = pickedPermissions.has(item.key);
                                                return (
                                                    <label
                                                        key={item.key}
                                                        className={`flex items-start gap-3 p-2.5 rounded-xl border cursor-pointer transition-colors ${
                                                            on
                                                                ? "bg-accent/10 border-accent/30"
                                                                : "bg-white/[0.02] border-white/5 hover:bg-white/5"
                                                        }`}
                                                    >
                                                        <input
                                                            type="checkbox"
                                                            checked={on}
                                                            onChange={() => togglePermission(item.key)}
                                                            className="accent-[color:var(--color-accent)] w-4 h-4 mt-0.5 shrink-0"
                                                        />
                                                        <span className="min-w-0">
                                                            <span className="block text-sm text-white">{item.label}</span>
                                                            <span className="block text-xs text-white/40 mt-0.5">
                                                                {item.hint}
                                                            </span>
                                                        </span>
                                                    </label>
                                                );
                                            })}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Which sub accounts they open. */}
                        <section className="lg:col-span-2 space-y-3">
                            <div>
                                <h3 className="text-sm font-semibold text-white">Sub accounts they open</h3>
                                <p className="text-xs text-white/45 mt-0.5">
                                    {pickedBusinesses.size} of {businesses.length}. Everything above applies only
                                    inside these.
                                </p>
                            </div>
                            <input
                                value={businessSearch}
                                onChange={(e) => setBusinessSearch(e.target.value)}
                                placeholder="Search sub accounts"
                                className="w-full px-3 py-2 bg-black/20 border border-white/10 rounded-lg text-sm text-white placeholder:text-white/25"
                            />
                            <div className="space-y-1.5 max-h-[44vh] overflow-y-auto custom-scrollbar pr-1">
                                {shownBusinesses.length === 0 ? (
                                    <p className="text-xs text-white/35 py-4 text-center">No sub accounts match.</p>
                                ) : (
                                    shownBusinesses.map((b) => {
                                        const on = pickedBusinesses.has(b.id);
                                        return (
                                            <label
                                                key={b.id}
                                                className={`flex items-center gap-3 p-2.5 rounded-xl border cursor-pointer transition-colors ${
                                                    on
                                                        ? "bg-accent/10 border-accent/30"
                                                        : "bg-white/[0.02] border-white/5 hover:bg-white/5"
                                                }`}
                                            >
                                                <input
                                                    type="checkbox"
                                                    checked={on}
                                                    onChange={() => toggleBusiness(b.id)}
                                                    className="accent-[color:var(--color-accent)] w-4 h-4 shrink-0"
                                                />
                                                <span className="flex-1 text-sm text-white truncate">{b.name}</span>
                                            </label>
                                        );
                                    })
                                )}
                            </div>
                        </section>
                    </div>

                    <div className="flex items-center gap-2 pt-2 border-t border-white/10">
                        <button
                            type="submit"
                            disabled={saving}
                            className="px-6 py-2.5 rounded-xl bg-accent text-primary font-bold text-sm disabled:opacity-50"
                        >
                            {saving ? "Saving..." : "Save access"}
                        </button>
                        <button
                            type="button"
                            onClick={() => setEditing(null)}
                            className="px-4 py-2.5 rounded-xl border border-white/10 text-sm text-white/60 hover:text-white"
                        >
                            Cancel
                        </button>
                        <span className="text-xs text-white/35 ml-auto">
                            Takes effect on their next click. Written to the Access Log.
                        </span>
                    </div>
                </form>
            </Modal>
        </div>
    );
}
