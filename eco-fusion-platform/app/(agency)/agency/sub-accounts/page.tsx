"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Search, LogIn, Building2, Camera, Plus, Pencil } from "lucide-react";
import { useToast } from "@/components/ui/Toast";
import { useConfirm } from "@/components/ui/ConfirmDialog";
import CaptureSnapshotModal from "@/components/admin/CaptureSnapshotModal";
import { PERMISSIONS, type StaffPermission } from "@/lib/staff-permissions";
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
    /** active = paying, trial = trying, inactive = neither. */
    standing: "active" | "trial" | "inactive";
    trialDaysLeft: number | null;
}

/**
 * How a business's standing is shown.
 *
 * Three words rather than Stripe's vocabulary, because the person reading this
 * list is asking whether a customer is paying, still deciding, or gone - not
 * which webhook last fired. "Inactive" covers a trial that lapsed and a
 * subscription that stopped, which look the same from here.
 */
const STANDING: Record<
    SubAccount["standing"],
    { label: string; className: string }
> = {
    active: { label: "Active", className: "border-accent/30 bg-accent/10 text-accent" },
    trial: { label: "Trial", className: "border-info/30 bg-info/10 text-info" },
    inactive: { label: "Inactive", className: "border-white/15 bg-white/5 text-white/40" },
};

/**
 * Every business on the platform, for EcoFusion staff.
 *
 * Entering one is a deliberate act with a confirmation in front of it, because
 * what follows is reading and changing somebody else's data under their own
 * screens. The list itself carries no business data, only enough to find the
 * right one and see what state it is in.
 *
 * The page does not check for staff itself. The agency layout above it does,
 * on the server, before this ever renders.
 */
export default function SubAccountsPage() {
    const [businesses, setBusinesses] = useState<SubAccount[]>([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    const [entering, setEntering] = useState<string | null>(null);
    const [creating, setCreating] = useState(false);
    const [editing, setEditing] = useState<SubAccount | null>(null);
    // Capturing reads a setup without entering it, so no support session is
    // opened and none is needed.
    const [captureFrom, setCaptureFrom] = useState<{ id: string; name: string } | null>(null);
    // What the reader may do here, as the server says. Starts empty so nothing
    // is offered before the answer arrives.
    const [viewer, setViewer] = useState<{ master: boolean; permissions: StaffPermission[] }>({
        master: false,
        permissions: [],
    });
    const can = (permission: StaffPermission) =>
        viewer.master || viewer.permissions.includes(permission);
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
        } catch {
            toast.error("Could not load the sub account list");
        } finally {
            setLoading(false);
        }
    }, [toast]);

    useEffect(() => {
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
                    <p className="text-white/50 mt-1 max-w-2xl text-sm">
                        Every business on the platform. Create one for a customer, or step into
                        an existing one to diagnose or fix a problem and then leave it. Entering
                        and leaving are both written to the access trail.
                    </p>
                </div>
                {can(PERMISSIONS.CREATE_BUSINESS) && (
                    <button
                        type="button"
                        onClick={() => setCreating(true)}
                        className="shrink-0 text-sm flex items-center gap-2 px-4 py-2.5 rounded-xl bg-accent/20 text-accent border border-accent/30 hover:bg-accent/30 transition-colors"
                    >
                        <Plus size={16} />
                        Create Sub Account
                    </button>
                )}
            </div>

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

            {loading ? (
                <p className="text-white/40 text-sm py-8 text-center">Loading sub accounts...</p>
            ) : businesses.length === 0 ? (
                <p className="text-white/40 text-sm py-8 text-center">
                    {search ? "No businesses match that." : "No sub accounts yet."}
                </p>
            ) : (
                // Columns, because every business answers the same questions and
                // the answers are worth reading down rather than across. The
                // wrapper alone scrolls, so a narrow window moves the table and
                // leaves the page still.
                <div className="overflow-x-auto rounded-xl border border-white/10 custom-scrollbar">
                    <table className="w-full border-collapse text-left text-sm">
                        <thead>
                            <tr className="bg-white/[0.04]">
                                {["Business", "Status", "Owner", "Location", "People", ""].map(
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
                                                        title="Rename this business"
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
                onClose={() => setCreating(false)}
                onCreated={(business) => setBusinesses((current) => [business, ...current])}
            />
            <EditSubAccountModal
                business={editing}
                onClose={() => setEditing(null)}
                onSaved={(saved) =>
                    setBusinesses((current) =>
                        current.map((b) => (b.id === saved.id ? { ...b, name: saved.name } : b))
                    )
                }
            />
            <CaptureSnapshotModal business={captureFrom} onClose={() => setCaptureFrom(null)} />
        </div>
    );
}
