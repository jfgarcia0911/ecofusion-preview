"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Briefcase, Search, Plus, LifeBuoy, CalendarPlus, Crown } from "lucide-react";
import { useToast } from "@/components/ui/Toast";
import { useConfirm } from "@/components/ui/ConfirmDialog";
import Modal from "@/components/ui/Modal";
import { AgencyListSkeleton } from "@/components/skeletons/PageSkeletons";
import { PLANS } from "@/lib/plans";
import { AGENCIES_STANDFIRST } from "./standfirst";

interface Agency {
    id: string;
    name: string;
    plan: string;
    planName: string;
    subscriptionStatus: string;
    trialEndsAt: string | null;
    createdAt: string;
    admin: { name: string | null; email: string } | null;
    teamSize: number;
    businesses: number;
    usage: string;
    overLimit: boolean;
    standing: "active" | "trial" | "inactive";
    trialDaysLeft: number | null;
}

const STANDING: Record<Agency["standing"], { label: string; className: string }> = {
    active: { label: "Active", className: "border-accent/30 bg-accent/10 text-accent" },
    trial: { label: "Trial", className: "border-info/30 bg-info/10 text-info" },
    inactive: { label: "Inactive", className: "border-white/15 bg-white/5 text-white/40" },
};

const EMPTY_DRAFT = {
    name: "",
    businessName: "",
    adminName: "",
    adminEmail: "",
    adminPassword: "",
    plan: "starter",
};

/**
 * Every agency on the platform: EcoFusion's customers.
 *
 * The EcoFusion admin sets agencies up, changes their plans and extends their
 * trials here, for arrangements made outside Stripe; a plan paid through
 * Stripe is kept in step by the webhook. Anybody on EcoFusion's team may open
 * an agency they support, to see it as its own team does.
 */
export default function AgenciesPage() {
    const [agencies, setAgencies] = useState<Agency[]>([]);
    const [canManage, setCanManage] = useState(false);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    const [loadedOnce, setLoadedOnce] = useState(false);
    const [busy, setBusy] = useState<string | null>(null);
    const [creating, setCreating] = useState(false);
    const [draft, setDraft] = useState(EMPTY_DRAFT);
    const [error, setError] = useState<string | null>(null);
    const [saving, setSaving] = useState(false);
    const toast = useToast();
    const confirmAction = useConfirm();
    const router = useRouter();

    // Only the newest search may fill the table, so a slow answer to an
    // earlier query cannot land after a newer one and replace it.
    const pending = useRef<AbortController | null>(null);
    useEffect(
        () => () => {
            pending.current?.abort();
            pending.current = null;
        },
        []
    );

    const load = useCallback(
        async (q: string) => {
            pending.current?.abort();
            const controller = new AbortController();
            pending.current = controller;
            setLoading(true);
            try {
                const res = await fetch(`/api/admin/agencies?q=${encodeURIComponent(q)}`, {
                    signal: controller.signal,
                });
                const data = await res.json().catch(() => ({}));
                if (controller.signal.aborted) return;
                if (!res.ok) {
                    toast.error(data.error ?? "Could not load the agencies");
                    return;
                }
                setAgencies(data.agencies ?? []);
                setCanManage(Boolean(data.canManage));
            } catch {
                if (controller.signal.aborted) return;
                toast.error("Could not load the agencies");
            } finally {
                // A superseded request leaves the spinner to the one that replaced it.
                if (pending.current === controller) {
                    pending.current = null;
                    setLoading(false);
                    setLoadedOnce(true);
                }
            }
        },
        [toast]
    );

    const firstLoad = useRef(true);
    useEffect(() => {
        if (firstLoad.current) {
            firstLoad.current = false;
            load(search);
            return;
        }
        const id = setTimeout(() => load(search), 250);
        return () => clearTimeout(id);
    }, [search, load]);

    async function change(agency: Agency, body: Record<string, unknown>, done: string) {
        setBusy(agency.id);
        try {
            const res = await fetch("/api/admin/agencies", {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ agencyId: agency.id, ...body }),
            });
            const data = await res.json().catch(() => ({}));
            if (!res.ok) {
                toast.error(data.error ?? "Could not change the agency");
                return;
            }
            if (data.changed) toast.success(done);
            await load(search);
        } finally {
            setBusy(null);
        }
    }

    async function changePlan(agency: Agency, plan: string) {
        const next = PLANS.find((p) => p.key === plan);
        if (!next || plan === agency.plan) return;
        const ok = await confirmAction({
            title: `Move ${agency.name} to ${next.name}?`,
            message:
                agency.standing === "active"
                    ? "This agency pays through Stripe, which decides its plan. A change here is overwritten the next time its subscription updates; change it in Stripe to make it stick."
                    : `${next.name} holds ${Number.isFinite(next.subAccountLimit) ? `up to ${next.subAccountLimit}` : "any number of"} businesses. The change is recorded in the agency's Access Log.`,
            confirmLabel: "Change plan",
        });
        if (!ok) return;
        await change(agency, { plan }, `${agency.name} is now on ${next.name}`);
    }

    async function extendTrial(agency: Agency) {
        const ok = await confirmAction({
            title: `Extend ${agency.name}'s trial by 14 days?`,
            message:
                "Counted from today or from when the trial was due to end, whichever is later. A lapsed trial opens again.",
            confirmLabel: "Extend trial",
        });
        if (!ok) return;
        await change(agency, { extendTrialDays: 14 }, `${agency.name}'s trial was extended by 14 days`);
    }

    async function open(agency: Agency) {
        const ok = await confirmAction({
            title: `Open ${agency.name}?`,
            message:
                "You will see this agency's own view - its sub-accounts, team and trail - as its team does. Opening and closing are both recorded in its Access Log.",
            confirmLabel: "Open agency",
        });
        if (!ok) return;
        setBusy(agency.id);
        try {
            const res = await fetch("/api/admin/agency-session", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ agencyId: agency.id }),
            });
            if (!res.ok) {
                toast.error((await res.json()).error ?? "Could not open that agency");
                return;
            }
            router.push("/agency/sub-accounts");
            router.refresh();
        } finally {
            setBusy(null);
        }
    }

    async function create(event: React.FormEvent) {
        event.preventDefault();
        if (saving) return;
        setSaving(true);
        setError(null);
        try {
            const res = await fetch("/api/admin/agencies", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(draft),
            });
            const data = await res.json();
            if (!res.ok) {
                setError(data.error ?? "Could not set up the agency.");
                return;
            }
            toast.success(`${data.name} is set up`, {
                description: `${data.admin.email} can sign in as its master account.`,
            });
            setCreating(false);
            setDraft(EMPTY_DRAFT);
            await load(search);
        } catch {
            setError("Could not reach the server. Try again.");
        } finally {
            setSaving(false);
        }
    }

    if (!loadedOnce) {
        return (
            <AgencyListSkeleton title="Agencies" standfirst={AGENCIES_STANDFIRST} icon={Briefcase} rows={6} search />
        );
    }

    const field =
        "px-3 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/25 text-sm";

    return (
        <div>
            <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-white flex items-center gap-2">
                        <Briefcase size={22} className="text-accent" />
                        Agencies
                    </h1>
                    <p className="text-white/50 mt-1 max-w-2xl text-sm">{AGENCIES_STANDFIRST}</p>
                </div>
                {canManage && (
                    <button
                        type="button"
                        onClick={() => {
                            setError(null);
                            setCreating(true);
                        }}
                        className="shrink-0 text-sm flex items-center gap-2 px-4 py-2.5 rounded-xl bg-accent/20 text-accent border border-accent/30 hover:bg-accent/30 transition-colors"
                    >
                        <Plus size={16} />
                        Set up agency
                    </button>
                )}
            </div>

            <div className="relative mb-4">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search by agency name"
                    className="w-full pl-10 pr-3 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/25 text-sm"
                />
            </div>

            {agencies.length === 0 ? (
                <p className="text-white/40 text-sm py-8 text-center">
                    {search
                        ? "No agencies match that."
                        : canManage
                          ? "No agencies yet."
                          : "You have not been given a business in any agency yet."}
                </p>
            ) : (
                <div
                    className={`overflow-x-auto rounded-xl border border-white/10 custom-scrollbar transition-opacity ${
                        loading ? "opacity-50" : ""
                    }`}
                    aria-busy={loading}
                >
                    <table className="w-full border-collapse text-left text-sm">
                        <thead>
                            <tr className="bg-white/[0.04]">
                                {["Agency", "Status", "Plan", "Businesses", "Master account", "Team", ""].map((h, i) => (
                                    <th
                                        key={h || i}
                                        scope="col"
                                        className={`px-4 py-3 text-[11px] font-bold uppercase tracking-wider text-white/40 whitespace-nowrap ${
                                            h === "Businesses" || h === "Team" ? "text-right" : ""
                                        }`}
                                    >
                                        {h}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {agencies.map((agency) => {
                                const standing = STANDING[agency.standing];
                                return (
                                    <tr key={agency.id} className="border-t border-white/5 hover:bg-white/[0.02]">
                                        <td className="px-4 py-3.5">
                                            <span className="flex items-center gap-2.5 min-w-0">
                                                <Briefcase size={15} className="text-white/35 shrink-0" />
                                                <span className="text-white font-medium truncate">{agency.name}</span>
                                            </span>
                                        </td>
                                        <td className="px-4 py-3.5">
                                            <span
                                                className={`px-2 py-0.5 rounded-full border text-[11px] whitespace-nowrap ${standing.className}`}
                                            >
                                                {standing.label}
                                                {agency.standing === "trial" &&
                                                    agency.trialDaysLeft !== null &&
                                                    ` · ${agency.trialDaysLeft}d`}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3.5">
                                            {canManage ? (
                                                <select
                                                    value={agency.plan}
                                                    disabled={busy === agency.id}
                                                    onChange={(e) => changePlan(agency, e.target.value)}
                                                    className="px-2 py-1 bg-black/20 border border-white/10 rounded-lg text-sm text-white disabled:opacity-50"
                                                >
                                                    {PLANS.map((plan) => (
                                                        <option key={plan.key} value={plan.key} className="bg-neutral-900">
                                                            {plan.name}
                                                        </option>
                                                    ))}
                                                </select>
                                            ) : (
                                                <span className="text-white/70">{agency.planName}</span>
                                            )}
                                        </td>
                                        <td
                                            className={`px-4 py-3.5 text-right tabular-nums whitespace-nowrap ${
                                                agency.overLimit ? "text-amber-300" : "text-white/55"
                                            }`}
                                            title={agency.overLimit ? "More businesses than the plan holds" : undefined}
                                        >
                                            {agency.usage}
                                        </td>
                                        <td className="px-4 py-3.5 text-white/55">
                                            {agency.admin ? (
                                                <span className="block min-w-0">
                                                    <span className="flex items-center gap-1.5 truncate">
                                                        <Crown size={11} className="text-accent/70 shrink-0" />
                                                        {agency.admin.name ?? agency.admin.email}
                                                    </span>
                                                    {agency.admin.name && (
                                                        <span className="block text-xs text-white/35 truncate">
                                                            {agency.admin.email}
                                                        </span>
                                                    )}
                                                </span>
                                            ) : (
                                                <span className="text-white/25">None</span>
                                            )}
                                        </td>
                                        <td className="px-4 py-3.5 text-white/55 text-right tabular-nums">
                                            {agency.teamSize}
                                        </td>
                                        <td className="px-4 py-3.5">
                                            <div className="flex items-center justify-end gap-1.5">
                                                {canManage && agency.standing !== "active" && (
                                                    <button
                                                        type="button"
                                                        onClick={() => extendTrial(agency)}
                                                        disabled={busy === agency.id}
                                                        title="Extend the trial by 14 days"
                                                        className="text-xs flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 text-white hover:bg-white/20 disabled:opacity-50 transition-colors whitespace-nowrap"
                                                    >
                                                        <CalendarPlus size={13} />
                                                        +14 days
                                                    </button>
                                                )}
                                                <button
                                                    type="button"
                                                    onClick={() => open(agency)}
                                                    disabled={busy === agency.id}
                                                    className="text-xs flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 text-white hover:bg-white/20 disabled:opacity-50 transition-colors whitespace-nowrap"
                                                >
                                                    <LifeBuoy size={13} />
                                                    Open
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            )}

            <Modal isOpen={creating} onClose={() => setCreating(false)} title="Set up an agency" size="lg">
                <form onSubmit={create} className="space-y-5">
                    <p className="text-sm text-white/50 leading-relaxed">
                        The same as signing up, done on somebody&apos;s behalf: the agency starts a{" "}
                        14-day trial, with its master account&apos;s login and its first business.
                    </p>
                    <div className="grid gap-3 sm:grid-cols-2">
                        <label className="flex flex-col gap-1.5">
                            <span className="text-xs text-white/50">Agency name</span>
                            <input
                                required
                                value={draft.name}
                                onChange={(e) => setDraft({ ...draft, name: e.target.value })}
                                placeholder="Green Valley Growers"
                                className={field}
                            />
                        </label>
                        <label className="flex flex-col gap-1.5">
                            <span className="text-xs text-white/50">
                                First business <span className="text-white/25">(defaults to the agency name)</span>
                            </span>
                            <input
                                value={draft.businessName}
                                onChange={(e) => setDraft({ ...draft, businessName: e.target.value })}
                                placeholder="Green Valley Farm"
                                className={field}
                            />
                        </label>
                        <label className="flex flex-col gap-1.5">
                            <span className="text-xs text-white/50">Master account name</span>
                            <input
                                value={draft.adminName}
                                onChange={(e) => setDraft({ ...draft, adminName: e.target.value })}
                                placeholder="Sam Rivera"
                                className={field}
                            />
                        </label>
                        <label className="flex flex-col gap-1.5">
                            <span className="text-xs text-white/50">Master account email</span>
                            <input
                                type="email"
                                required
                                value={draft.adminEmail}
                                onChange={(e) => setDraft({ ...draft, adminEmail: e.target.value })}
                                placeholder="sam@greenvalley.com"
                                className={field}
                            />
                        </label>
                        <label className="flex flex-col gap-1.5">
                            <span className="text-xs text-white/50">Starting password</span>
                            <input
                                required
                                value={draft.adminPassword}
                                onChange={(e) => setDraft({ ...draft, adminPassword: e.target.value })}
                                placeholder="At least 10 characters"
                                className={`${field} font-mono`}
                            />
                        </label>
                        <label className="flex flex-col gap-1.5">
                            <span className="text-xs text-white/50">Plan</span>
                            <select
                                value={draft.plan}
                                onChange={(e) => setDraft({ ...draft, plan: e.target.value })}
                                className={field}
                            >
                                {PLANS.map((plan) => (
                                    <option key={plan.key} value={plan.key} className="bg-neutral-900">
                                        {plan.name} · {plan.priceLabel}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>

                    {error && <p className="text-sm text-red-300">{error}</p>}

                    <div className="flex items-center gap-2 pt-2 border-t border-white/10">
                        <button
                            type="submit"
                            disabled={saving}
                            className="px-6 py-2.5 rounded-xl bg-accent text-primary font-bold text-sm disabled:opacity-50"
                        >
                            {saving ? "Setting up..." : "Set up agency"}
                        </button>
                        <button
                            type="button"
                            onClick={() => setCreating(false)}
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
