"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, LogIn, Building2, Camera, Plus, Pencil } from "lucide-react";
import { useToast } from "@/components/ui/Toast";
import { useConfirm } from "@/components/ui/ConfirmDialog";
import CaptureSnapshotModal from "@/components/admin/CaptureSnapshotModal";
import { PERMISSIONS, type StaffPermission } from "@/lib/staff-permissions";
import { SUB_ACCOUNT_COLUMNS, SubAccountsTableSkeleton } from "@/components/skeletons/PageSkeletons";
import { SUB_ACCOUNTS_STANDFIRST } from "./standfirst";
import CreateSubAccountModal from "@/components/admin/CreateSubAccountModal";
import EditSubAccountModal from "@/components/admin/EditSubAccountModal";

export interface SubAccount {
    id: string;
    name: string;
    slug: string;
    location: string | null;
    plan: string;
    subscriptionStatus: string;
    trialEndsAt: string | null;
    createdAt: string;
    memberCount: number;
    owner: { name: string | null; email: string } | null;
    /**
     * What the business pays the agency: active = paying, trial = in its free
     * 30 days, inactive = unpaid (its people are locked out), own = the
     * agency's own business, free = complimentary (the master account chose not
     * to charge it), not_charged = the agency has not connected Stripe.
     */
    standing: "active" | "trial" | "inactive" | "own" | "free" | "not_charged";
    trialDaysLeft: number | null;
}

/**
 * How each business stands with the agency's $99 a month.
 *
 * Plain words rather than Stripe's vocabulary, because the person reading this
 * list is asking whether a customer is paying, still in its free period, or
 * not - not which webhook last fired. "Unpaid" covers a free period that ran
 * out and a subscription that stopped, which look the same from here.
 */
const STANDING: Record<
    SubAccount["standing"],
    { label: string; className: string }
> = {
    active: { label: "Paid", className: "border-accent/30 bg-accent/10 text-accent" },
    trial: { label: "Free period", className: "border-info/30 bg-info/10 text-info" },
    inactive: { label: "Unpaid", className: "border-amber-400/30 bg-amber-400/10 text-amber-200" },
    own: { label: "Agency's own", className: "border-white/15 bg-white/5 text-white/60" },
    free: { label: "Complimentary", className: "border-emerald-300/25 bg-emerald-300/10 text-emerald-200" },
    not_charged: { label: "Not charged", className: "border-white/15 bg-white/5 text-white/40" },
};

/**
 * The agency's businesses (sub-accounts): the master account sees all of them,
 * agency staff the ones they were given, and EcoFusion the same while it is
 * supporting the agency.
 *
 * Entering one is a deliberate act with a confirmation in front of it, because
 * what follows is reading and changing somebody else's data under their own
 * screens. The list itself carries no business data, only enough to find the
 * right one and see what state it is in.
 *
 * The page does not check who is looking itself. The agency layout above it
 * does, on the server, before this ever renders.
 */
export default function SubAccountsPage() {
    const [businesses, setBusinesses] = useState<SubAccount[]>([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    // Whether the list has arrived at least once. Before it has, the table is
    // drawn as its skeleton; after, a new search keeps the rows on screen and
    // dims them rather than blanking the table on every keystroke.
    const [loadedOnce, setLoadedOnce] = useState(false);
    const [entering, setEntering] = useState<string | null>(null);
    const [creating, setCreating] = useState(false);
    const [editing, setEditing] = useState<SubAccount | null>(null);
    // Capturing reads a setup without entering it, so no support session is
    // opened and none is needed.
    const [captureFrom, setCaptureFrom] = useState<{ id: string; name: string } | null>(null);
    // What the reader may do here, as the server says. Starts empty so nothing
    // is offered before the answer arrives.
    const [viewer, setViewer] = useState<{
        admin: boolean;
        permissions: StaffPermission[];
        canCreate: boolean;
        /** May choose whether a sub-account is charged. The master account's. */
        canComp: boolean;
    }>({
        admin: false,
        permissions: [],
        canCreate: false,
        canComp: false,
    });
    // How much of the agency's plan is used. Adding past the limit is refused
    // by the server; the page says so first rather than after the form.
    const [usage, setUsage] = useState<{
        used: number;
        limit: number | null;
        plan: string;
        label: string;
        canAdd: boolean;
    } | null>(null);
    const can = (permission: StaffPermission) =>
        viewer.admin || viewer.permissions.includes(permission);
    const router = useRouter();
    const toast = useToast();
    const confirmAction = useConfirm();

    const load = useCallback(async (q: string) => {
        setLoading(true);
        try {
            const res = await fetch(`/api/admin/organizations?q=${encodeURIComponent(q)}`);
            if (!res.ok) {
                toast.error("Could not load the sub account list");
                return;
            }
            const data = await res.json();
            setBusinesses(data.organizations ?? []);
            if (data.viewer) setViewer(data.viewer);
            setUsage(data.usage ?? null);
        } catch {
            toast.error("Could not load the sub account list");
        } finally {
            setLoading(false);
            setLoadedOnce(true);
        }
    }, [toast]);

    // The first load goes at once. Only typing waits, so a search is sent
    // when somebody pauses rather than on every letter; the page opening
    // used to wait the same quarter second for no reason.
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

    async function enter(business: SubAccount) {
        const ok = await confirmAction({
            title: `Enter ${business.name}?`,
            message:
                "You will see and be able to change the data in this business as though it " +
                "were your own. Entering is recorded, and so is every change you make inside.",
            confirmLabel: "Enter business",
        });
        if (!ok) return;

        setEntering(business.id);
        try {
            const res = await fetch("/api/admin/session", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ organizationId: business.id }),
            });
            if (!res.ok) {
                toast.error((await res.json()).error ?? "Could not enter that business");
                return;
            }
            router.push("/dashboard/executive");
            router.refresh();
        } finally {
            setEntering(null);
        }
    }

    return (
        <div>
            <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-white flex items-center gap-2">
                        <Building2 size={22} className="text-accent" />
                        Sub Accounts
                    </h1>
                    <p className="text-white/50 mt-1 max-w-2xl text-sm">{SUB_ACCOUNTS_STANDFIRST}</p>
                </div>
                {/* Held as the skeleton's placeholder until the server has said
                    whether this reader may create, so it does not pop in late. */}
                {!loadedOnce && (
                    <div className="shrink-0 h-[42px] w-[182px] rounded-xl bg-accent/10 border border-accent/20 animate-pulse" />
                )}
                {loadedOnce && viewer.canCreate && (
                    <div className="shrink-0 flex flex-col items-end gap-1.5">
                        <button
                            type="button"
                            onClick={() => setCreating(true)}
                            disabled={usage ? !usage.canAdd : false}
                            title={usage && !usage.canAdd ? `The ${usage.plan} plan is full` : undefined}
                            className="text-sm flex items-center gap-2 px-4 py-2.5 rounded-xl bg-accent/20 text-accent border border-accent/30 hover:bg-accent/30 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                            <Plus size={16} />
                            Create Sub Account
                        </button>
                    </div>
                )}
            </div>

            {usage && (
                <p
                    className={`mb-4 px-4 py-2.5 rounded-xl border text-sm flex flex-wrap items-center gap-x-2 gap-y-1 ${
                        usage.canAdd
                            ? "border-white/10 bg-white/[0.03] text-white/60"
                            : "border-amber-400/25 bg-amber-400/10 text-amber-200"
                    }`}
                >
                    <span>
                        <span className="text-white font-medium">{usage.plan}</span> plan:{" "}
                        {usage.limit === null ? `${usage.label} businesses, no limit` : `${usage.label} businesses used`}
                    </span>
                    {!usage.canAdd && (
                        <>
                            <span className="text-white/30">&middot;</span>
                            <span>
                                Full.{" "}
                                {viewer.admin ? (
                                    <Link href="/agency/billing" className="underline hover:text-white">
                                        Upgrade the plan
                                    </Link>
                                ) : (
                                    "Ask the master account to upgrade the plan"
                                )}{" "}
                                to add another.
                            </span>
                        </>
                    )}
                </p>
            )}

            <div className="relative mb-4">
                <Search
                    size={16}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30"
                />
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search by business name"
                    className="w-full pl-10 pr-3 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/25 text-sm"
                />
            </div>

            {!loadedOnce ? (
                <SubAccountsTableSkeleton />
            ) : businesses.length === 0 ? (
                <p className="text-white/40 text-sm py-8 text-center">
                    {search ? "No businesses match that." : "No sub accounts yet."}
                </p>
            ) : (
                // Columns, because every business answers the same questions and
                // the answers are worth reading down rather than across. The
                // wrapper alone scrolls, so a narrow window moves the table and
                // leaves the page still.
                <div
                    className={`overflow-x-auto rounded-xl border border-white/10 custom-scrollbar transition-opacity ${
                        loading ? "opacity-50" : ""
                    }`}
                    aria-busy={loading}
                >
                    <table className="w-full border-collapse text-left text-sm">
                        <thead>
                            <tr className="bg-white/[0.04]">
                                {SUB_ACCOUNT_COLUMNS.map(
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
                                const standing = STANDING[business.standing];
                                return (
                                    <tr
                                        key={business.id}
                                        className="border-t border-white/5 hover:bg-white/[0.02]"
                                    >
                                        <td className="px-4 py-3.5">
                                            <span className="flex items-center gap-2.5 min-w-0">
                                                <Building2 size={15} className="text-white/35 shrink-0" />
                                                <span className="text-white font-medium truncate">
                                                    {business.name}
                                                </span>
                                            </span>
                                        </td>

                                        <td className="px-4 py-3.5">
                                            <span
                                                className={`px-2 py-0.5 rounded-full border text-[11px] whitespace-nowrap ${standing.className}`}
                                            >
                                                {standing.label}
                                                {business.standing === "trial" &&
                                                    business.trialDaysLeft !== null &&
                                                    ` · ${business.trialDaysLeft}d`}
                                            </span>
                                        </td>

                                        <td className="px-4 py-3.5 text-white/55">
                                            {business.owner ? (
                                                <span className="block min-w-0">
                                                    <span className="block truncate">
                                                        {business.owner.name ?? business.owner.email}
                                                    </span>
                                                    {business.owner.name && (
                                                        <span className="block text-xs text-white/35 truncate">
                                                            {business.owner.email}
                                                        </span>
                                                    )}
                                                </span>
                                            ) : (
                                                <span className="text-white/25">No owner</span>
                                            )}
                                        </td>

                                        <td className="px-4 py-3.5 text-white/55">
                                            {business.location || <span className="text-white/25">-</span>}
                                        </td>

                                        <td className="px-4 py-3.5 text-white/55 text-right tabular-nums">
                                            {business.memberCount}
                                        </td>

                                        <td className="px-4 py-3.5">
                                            <div className="flex items-center justify-end gap-1.5">
                                                {can(PERMISSIONS.RENAME_BUSINESS) && (
                                                    <button
                                                        type="button"
                                                        onClick={() => setEditing(business)}
                                                        title={
                                                            viewer.canComp
                                                                ? "Rename this business, or change whether it is charged"
                                                                : "Rename this business"
                                                        }
                                                        className="text-xs flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors whitespace-nowrap"
                                                    >
                                                        <Pencil size={13} />
                                                        Edit
                                                    </button>
                                                )}
                                                {can(PERMISSIONS.CAPTURE_SNAPSHOTS) && (
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            setCaptureFrom({ id: business.id, name: business.name })
                                                        }
                                                        title="Capture this setup as a template"
                                                        className="text-xs flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors whitespace-nowrap"
                                                    >
                                                        <Camera size={13} />
                                                        Capture
                                                    </button>
                                                )}
                                                <button
                                                    type="button"
                                                    onClick={() => enter(business)}
                                                    disabled={entering === business.id}
                                                    className="text-xs flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 text-white hover:bg-white/20 disabled:opacity-50 transition-colors whitespace-nowrap"
                                                >
                                                    <LogIn size={13} />
                                                    {entering === business.id ? "Entering..." : "Enter"}
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

            <CreateSubAccountModal
                open={creating}
                canComp={viewer.canComp}
                onClose={() => setCreating(false)}
                onCreated={(business) => {
                    setBusinesses((current) => [business, ...current]);
                    // The plan's count moved; the server has the new answer.
                    load(search);
                }}
            />
            <EditSubAccountModal
                business={editing}
                canComp={viewer.canComp}
                onClose={() => setEditing(null)}
                onSaved={(saved) =>
                    setBusinesses((current) =>
                        current.map((b) =>
                            b.id === saved.id
                                ? { ...b, name: saved.name, standing: saved.standing, trialDaysLeft: saved.trialDaysLeft }
                                : b
                        )
                    )
                }
            />
            <CaptureSnapshotModal business={captureFrom} onClose={() => setCaptureFrom(null)} />
        </div>
    );
}
