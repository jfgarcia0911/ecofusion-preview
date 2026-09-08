"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Building2, Search, UserPlus, ShieldCheck, KeyRound } from "lucide-react";
import { useToast } from "@/components/ui/Toast";
import { ASSIGNABLE_BUSINESS_ROLES } from "@/lib/roles";

interface Business {
    id: string;
    name: string;
    location: string | null;
    memberCount: number;
}

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
 * Who can sign in to each business, as its own screen.
 *
 * Staff belong to no business, so the question needs one named before it means
 * anything: the businesses are on the left and the answer is on the right. That
 * is the shape of the question rather than a layout choice - picking a business
 * is the first half of asking it.
 *
 * No support session is opened. "Who can get in here" is asked often, and
 * entering a business to answer it grants the power to change everything else
 * in it as well. Creating a login is still written to that business's access
 * record, so the owner sees it either way.
 */
export default function AgencyTeamAccessPage() {
    const [businesses, setBusinesses] = useState<Business[]>([]);
    const [selected, setSelected] = useState<Business | null>(null);
    const [search, setSearch] = useState("");

    const [members, setMembers] = useState<Member[]>([]);
    const [loadingList, setLoadingList] = useState(true);
    const [loadingMembers, setLoadingMembers] = useState(false);

    const [adding, setAdding] = useState(false);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [draft, setDraft] = useState({ name: "", email: "", password: "", role: "member" });

    const toast = useToast();

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch("/api/admin/organizations");
                if (!res.ok) {
                    toast.error("Could not load the businesses");
                    return;
                }
                const data = await res.json();
                setBusinesses(data.organizations ?? []);
            } finally {
                setLoadingList(false);
            }
        })();
        // Once, on arrival. The list does not change while somebody reads it.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const loadMembers = useCallback(async (business: Business) => {
        setLoadingMembers(true);
        setError(null);
        try {
            const res = await fetch(
                `/api/admin/members?organizationId=${encodeURIComponent(business.id)}`
            );
            const data = await res.json();
            if (!res.ok) {
                setError(data.error ?? "Could not read the logins for this business.");
                setMembers([]);
                return;
            }
            setMembers(data.members ?? []);
        } catch {
            setError("Could not reach the server. Try again.");
        } finally {
            setLoadingMembers(false);
        }
    }, []);

    function choose(business: Business) {
        setSelected(business);
        setAdding(false);
        setDraft({ name: "", email: "", password: "", role: "member" });
        loadMembers(business);
    }

    async function create(event: React.FormEvent) {
        event.preventDefault();
        if (!selected || saving) return;

        setSaving(true);
        setError(null);
        try {
            const res = await fetch("/api/admin/members", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ organizationId: selected.id, ...draft }),
            });
            const data = await res.json();
            if (!res.ok) {
                setError(data.error ?? "Could not create the login.");
                return;
            }
            toast.success(`${data.email} can now sign in to ${selected.name}`);
            setAdding(false);
            setDraft({ name: "", email: "", password: "", role: "member" });
            loadMembers(selected);
        } catch {
            setError("Could not reach the server. Try again.");
        } finally {
            setSaving(false);
        }
    }

    const shown = useMemo(() => {
        const needle = search.trim().toLowerCase();
        return needle
            ? businesses.filter((b) => b.name.toLowerCase().includes(needle))
            : businesses;
    }, [businesses, search]);

    return (
        <div>
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-white flex items-center gap-2">
                    <KeyRound size={22} className="text-accent" />
                    Team Access
                </h1>
                <p className="text-white/50 mt-1 text-sm max-w-2xl">
                    Who can sign in to each business. Creating a login is written to that
                    business&apos;s access record, which its owner reads. No support session
                    is opened.
                </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-[20rem_1fr] items-start">
                {/* Left: the businesses. Picking one is half the question. */}
                <div className="rounded-xl border border-white/10 overflow-hidden">
                    <div className="relative border-b border-white/10">
                        <Search
                            size={15}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30"
                        />
                        <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search businesses"
                            className="w-full pl-9 pr-3 py-2.5 bg-transparent text-white placeholder:text-white/30 text-sm focus:outline-none"
                        />
                    </div>

                    <div className="max-h-[32rem] overflow-y-auto custom-scrollbar">
                        {loadingList ? (
                            <p className="text-white/40 text-sm py-8 text-center">Loading...</p>
                        ) : shown.length === 0 ? (
                            <p className="text-white/40 text-sm py-8 text-center">
                                {search ? "No businesses match that." : "No businesses yet."}
                            </p>
                        ) : (
                            shown.map((b) => (
                                <button
                                    key={b.id}
                                    type="button"
                                    onClick={() => choose(b)}
                                    className={`w-full text-left px-4 py-3 flex items-center gap-3 border-b border-white/5 last:border-0 transition-colors ${
                                        selected?.id === b.id
                                            ? "bg-accent/10 border-l-2 border-l-accent"
                                            : "hover:bg-white/[0.03] border-l-2 border-l-transparent"
                                    }`}
                                >
                                    <Building2 size={15} className="text-white/35 shrink-0" />
                                    <span className="min-w-0 flex-1">
                                        <span className="block text-sm text-white truncate">{b.name}</span>
                                        <span className="block text-xs text-white/35 truncate">
                                            {b.memberCount} {b.memberCount === 1 ? "login" : "logins"}
                                        </span>
                                    </span>
                                </button>
                            ))
                        )}
                    </div>
                </div>

                {/* Right: the answer for whichever is picked. */}
                <div>
                    {!selected ? (
                        <div className="flex flex-col items-center text-center py-20 rounded-xl border border-white/10 bg-white/[0.02]">
                            <Building2 size={32} className="text-white/20 mb-3" />
                            <p className="text-white/60 font-medium">Pick a business</p>
                            <p className="text-sm text-white/35 mt-1">
                                Its logins will show here.
                            </p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            <div className="flex items-center justify-between gap-4">
                                <div className="min-w-0">
                                    <h2 className="text-lg font-bold text-white truncate">{selected.name}</h2>
                                    {selected.location && (
                                        <p className="text-xs text-white/40 truncate">{selected.location}</p>
                                    )}
                                </div>
                                {!adding && (
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setError(null);
                                            setAdding(true);
                                        }}
                                        className="shrink-0 text-sm flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/20 text-accent border border-accent/30 hover:bg-accent/30 transition-colors"
                                    >
                                        <UserPlus size={15} />
                                        Create a login
                                    </button>
                                )}
                            </div>

                            {error && (
                                <p className="px-3 py-2.5 rounded-xl border border-red-400/25 bg-red-400/10 text-sm text-red-100">
                                    {error}
                                </p>
                            )}

                            {adding && (
                                <form
                                    onSubmit={create}
                                    className="grid gap-3 sm:grid-cols-2 p-4 rounded-xl border border-accent/25 bg-accent/[0.06]"
                                >
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

                                    <div className="sm:col-span-2 flex items-center gap-2">
                                        <button
                                            type="submit"
                                            disabled={saving}
                                            className="px-5 py-2.5 rounded-xl bg-accent text-primary font-bold text-sm disabled:opacity-50"
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
                                        <span className="text-xs text-white/30 ml-auto">
                                            Not emailed. Hand it over; they can change it themselves.
                                        </span>
                                    </div>
                                </form>
                            )}

                            {loadingMembers ? (
                                <p className="text-white/40 text-sm py-10 text-center">Loading...</p>
                            ) : members.length === 0 ? (
                                <p className="text-white/40 text-sm py-10 text-center rounded-xl border border-white/10">
                                    Nobody can sign in to this business yet.
                                </p>
                            ) : (
                                <div className="overflow-x-auto rounded-xl border border-white/10 custom-scrollbar">
                                    <table className="w-full border-collapse text-left text-sm">
                                        <thead>
                                            <tr className="bg-white/[0.04]">
                                                {["Name", "Email", "Job", "Role", "Added"].map((h) => (
                                                    <th
                                                        key={h}
                                                        scope="col"
                                                        className="px-4 py-3 text-[11px] font-bold uppercase tracking-wider text-white/40 whitespace-nowrap"
                                                    >
                                                        {h}
                                                    </th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {members.map((m) => (
                                                <tr key={m.membershipId} className="border-t border-white/5">
                                                    <td className="px-4 py-3 text-white">
                                                        {m.name || <span className="text-white/25">-</span>}
                                                    </td>
                                                    <td className="px-4 py-3 text-white/55">{m.email}</td>
                                                    <td className="px-4 py-3 text-white/45">
                                                        {m.jobTitle || <span className="text-white/25">-</span>}
                                                    </td>
                                                    <td className="px-4 py-3">
                                                        <span
                                                            className={`px-2 py-0.5 rounded-full border text-[11px] capitalize whitespace-nowrap ${
                                                                ROLE_STYLES[m.role] ?? ROLE_STYLES.member
                                                            }`}
                                                        >
                                                            {m.role === "owner" && (
                                                                <ShieldCheck size={11} className="inline mr-1" />
                                                            )}
                                                            {m.role}
                                                        </span>
                                                    </td>
                                                    <td className="px-4 py-3 text-white/40 whitespace-nowrap tabular-nums">
                                                        {new Date(m.joinedAt).toLocaleDateString()}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
