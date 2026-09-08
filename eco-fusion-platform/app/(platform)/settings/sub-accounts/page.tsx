"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Building2, Check, Plus, ArrowRight, Lock } from "lucide-react";
import { useToast } from "@/components/ui/Toast";

interface Business {
    id: string;
    name: string;
    location: string | null;
    role: string;
    memberCount: number;
    createdAt: string;
    /** trialing | active | trial_expired | past_due | canceled */
    status: string;
    /** Whether this business can be worked in right now. */
    allowed: boolean;
    trialDaysLeft: number | null;
    /** False for the one that carries the subscription. */
    billedElsewhere: boolean;
    isActive: boolean;
}

/**
 * What each status is called, and how loudly.
 *
 * Named for what it means to the reader rather than for the Stripe state
 * behind it: somebody looking at this list wants to know whether the business
 * works, not which webhook last fired.
 */
const STATUS_STYLES: Record<string, { label: string; className: string }> = {
    active: { label: "Active", className: "border-accent/30 bg-accent/10 text-accent" },
    trialing: { label: "Trial", className: "border-info/30 bg-info/10 text-info" },
    trial_expired: { label: "Trial ended", className: "border-warning/30 bg-warning/10 text-warning" },
    past_due: { label: "Past due", className: "border-error/35 bg-error/10 text-error" },
    canceled: { label: "Cancelled", className: "border-white/15 bg-white/5 text-white/45" },
};

const ROLE_STYLES: Record<string, string> = {
    owner: "bg-accent/15 text-accent border-accent/30",
    admin: "bg-white/10 text-white/70 border-white/20",
    manager: "bg-white/10 text-white/70 border-white/20",
    member: "bg-white/[0.06] text-white/50 border-white/10",
};

/**
 * Every business this account reaches, and the way to add another.
 *
 * Sits in the account half of settings rather than the business half, because
 * it is the one screen here that is about none of them in particular. An owner
 * running three businesses opens this to see all three; everything else under
 * settings answers only for the one they are currently in.
 */
export default function SubAccountsPage() {
    const [businesses, setBusinesses] = useState<Business[]>([]);
    const [canCreate, setCanCreate] = useState(false);
    const [loading, setLoading] = useState(true);
    const [adding, setAdding] = useState(false);
    const [newName, setNewName] = useState("");
    const [busy, setBusy] = useState<string | null>(null);
    const toast = useToast();
    const router = useRouter();

    const load = useCallback(async () => {
        try {
            const res = await fetch("/api/organizations");
            if (!res.ok) {
                toast.error("Could not load your businesses");
                return;
            }
            const data = await res.json();
            const list: Business[] = data.businesses ?? [];
            setBusinesses(list);
            setCanCreate(list.some((b) => b.isActive && b.role === "owner"));
        } finally {
            setLoading(false);
        }
    }, [toast]);

    useEffect(() => {
        load();
    }, [load]);

    async function switchTo(business: Business) {
        if (business.isActive) return;
        setBusy(business.id);
        try {
            const res = await fetch("/api/organizations/active", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ organizationId: business.id }),
            });
            if (!res.ok) {
                toast.error((await res.json()).error ?? "Could not switch to that business");
                return;
            }
            // Straight to the dashboard rather than back here: the settings
            // around this page have just changed underneath it, and staying
            // would show one business's settings under another one's name.
            router.push("/dashboard/executive");
            router.refresh();
        } finally {
            setBusy(null);
        }
    }

    async function create(event: React.FormEvent) {
        event.preventDefault();
        const name = newName.trim();
        if (!name || busy) return;

        setBusy("new");
        try {
            const res = await fetch("/api/organizations", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name }),
            });
            if (!res.ok) {
                toast.error((await res.json()).error ?? "Could not add that business");
                return;
            }
            toast.success(`${name} is ready`);
            setNewName("");
            setAdding(false);
            router.push("/dashboard/executive");
            router.refresh();
        } finally {
            setBusy(null);
        }
    }

    return (
        // Full width on purpose. This is a list that grows - a business per row,
        // each with a name, a role, a location and a headcount - so it reads
        // like a register rather than an article. The prose below keeps its own
        // measure, because that is the one part narrow lines actually help.
        <div>
            <Link
                href="/settings"
                className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white mb-6 transition-colors"
            >
                <ArrowLeft size={15} />
                Settings
            </Link>

            <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-white flex items-center gap-2">
                        <Building2 size={22} className="text-accent" />
                        Sub Accounts
                    </h1>
                    <p className="text-white/50 mt-1 text-sm max-w-xl">
                        Every business this login reaches. Each keeps its own units, zones, people
                        and records; your account and its subscription cover all of them.
                    </p>
                </div>
                {canCreate && !adding && (
                    <button
                        type="button"
                        onClick={() => setAdding(true)}
                        className="shrink-0 text-sm flex items-center gap-1.5 px-4 py-2 rounded-lg bg-accent text-primary font-bold hover:bg-accent/90"
                    >
                        <Plus size={15} />
                        Add a business
                    </button>
                )}
            </div>

            {adding && (
                <form
                    onSubmit={create}
                    // The list is wide; a single name field should not be. An
                    // input stretched the width of a monitor reads as a mistake.
                    className="flex flex-col gap-3 p-4 mb-4 max-w-xl rounded-2xl border border-accent/25 bg-accent/[0.06]"
                >
                    <label className="flex flex-col gap-1.5">
                        <span className="text-xs text-white/50">Name of the new business</span>
                        <input
                            autoFocus
                            value={newName}
                            onChange={(e) => setNewName(e.target.value)}
                            placeholder="Riverside Aquaponics"
                            className="px-3 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/25 text-sm"
                        />
                        <span className="text-[11px] text-white/35">
                            It starts from your standard setup and you land inside it. Nothing from
                            this business is copied across.
                        </span>
                    </label>
                    <div className="flex items-center gap-3">
                        <button
                            type="submit"
                            disabled={!newName.trim() || busy === "new"}
                            className="px-5 py-2 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90 disabled:opacity-50 text-sm"
                        >
                            {busy === "new" ? "Creating..." : "Create business"}
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                setAdding(false);
                                setNewName("");
                            }}
                            className="px-4 py-2 text-white/60 hover:text-white rounded-lg text-sm"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            )}

            {loading ? (
                <p className="text-white/40 text-sm py-8 text-center">Loading businesses...</p>
            ) : (
                <>
                    {/* A real table, because these are columns: every business
                        answers the same six questions and the answers line up
                        down the page, which is the whole reason to put them
                        side by side. The wrapper alone scrolls, so a narrow
                        window moves the table and not the page. */}
                    <div className="overflow-x-auto rounded-xl border border-white/10 custom-scrollbar">
                        <table className="w-full border-collapse text-left text-sm">
                            <thead>
                                <tr className="bg-white/[0.04]">
                                    {["Business", "Role", "Status", "Location", "People", "Added", ""].map(
                                        (heading, i) => (
                                            <th
                                                key={heading || i}
                                                scope="col"
                                                className={`px-4 py-3 text-[11px] font-bold uppercase tracking-wider text-white/40 whitespace-nowrap ${
                                                    heading === "People" ? "text-right" : ""
                                                }`}
                                            >
                                                {heading}
                                            </th>
                                        )
                                    )}
                                </tr>
                            </thead>
                            <tbody>
                                {businesses.map((business) => {
                                    const status = STATUS_STYLES[business.status] ?? STATUS_STYLES.canceled;
                                    return (
                                        <tr
                                            key={business.id}
                                            className={`border-t border-white/5 ${
                                                business.isActive
                                                    ? "bg-accent/[0.06]"
                                                    : "hover:bg-white/[0.02]"
                                            }`}
                                        >
                                            <td className="px-4 py-3.5">
                                                <div className="flex items-center gap-2.5 min-w-0">
                                                    <Building2 size={15} className="text-white/35 shrink-0" />
                                                    <span className="text-white font-medium truncate">
                                                        {business.name}
                                                    </span>
                                                    {business.isActive && (
                                                        <span className="flex items-center gap-1 text-[11px] text-accent whitespace-nowrap">
                                                            <Check size={12} />
                                                            You are here
                                                        </span>
                                                    )}
                                                </div>
                                            </td>

                                            <td className="px-4 py-3.5">
                                                <span
                                                    className={`px-2 py-0.5 rounded-full border text-[11px] capitalize whitespace-nowrap ${
                                                        ROLE_STYLES[business.role] ?? ROLE_STYLES.member
                                                    }`}
                                                >
                                                    {business.role}
                                                </span>
                                            </td>

                                            <td className="px-4 py-3.5">
                                                <span
                                                    className={`px-2 py-0.5 rounded-full border text-[11px] whitespace-nowrap ${status.className}`}
                                                >
                                                    {status.label}
                                                    {business.status === "trialing" &&
                                                        business.trialDaysLeft !== null &&
                                                        ` · ${business.trialDaysLeft}d`}
                                                </span>
                                            </td>

                                            <td className="px-4 py-3.5 text-white/55">
                                                {business.location || <span className="text-white/25">-</span>}
                                            </td>

                                            <td className="px-4 py-3.5 text-white/55 text-right tabular-nums">
                                                {business.memberCount}
                                            </td>

                                            <td className="px-4 py-3.5 text-white/45 whitespace-nowrap tabular-nums">
                                                <time dateTime={business.createdAt}>
                                                    {new Date(business.createdAt).toLocaleDateString(undefined, {
                                                        year: "numeric",
                                                        month: "short",
                                                        day: "numeric",
                                                    })}
                                                </time>
                                            </td>

                                            <td className="px-4 py-3.5 text-right">
                                                {!business.isActive && (
                                                    <button
                                                        type="button"
                                                        onClick={() => switchTo(business)}
                                                        disabled={busy === business.id}
                                                        className="text-xs inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 text-white hover:bg-white/20 disabled:opacity-50 transition-colors group whitespace-nowrap"
                                                    >
                                                        {busy === business.id ? "Switching..." : "Switch to"}
                                                        <ArrowRight
                                                            size={13}
                                                            className="group-hover:translate-x-0.5 transition-transform"
                                                        />
                                                    </button>
                                                )}
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>

                    {!canCreate && businesses.length > 0 && (
                        <p className="flex items-start gap-2 text-xs text-white/30 pt-3">
                            <Lock size={13} className="mt-0.5 shrink-0" />
                            Adding a business is the owner&apos;s to do. You reach the ones you
                            have been given access to.
                        </p>
                    )}
                </>
            )}
        </div>
    );
}
