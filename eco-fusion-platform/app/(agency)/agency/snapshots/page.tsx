"use client";

import { useCallback, useEffect, useState } from "react";
import { Camera, ShieldAlert, Star, Trash2, Download, Layers, MapPin, Sprout } from "lucide-react";
import { useToast } from "@/components/ui/Toast";
import { useConfirm } from "@/components/ui/ConfirmDialog";

interface Snapshot {
    id: string;
    name: string;
    description: string | null;
    isDefault: boolean;
    stale: boolean;
    capturedFrom: string | null;
    createdBy: string | null;
    createdAt: string;
    contents: {
        businessUnits: number;
        zones: number;
        growthParameters: number;
    };
}

interface Business {
    id: string;
    name: string;
}

/**
 * The template library.
 *
 * A snapshot is taken from a business on the Sub Accounts page; this is where they are
 * kept, marked as the one new businesses start from, applied to a business that already
 * exists, and thrown away.
 */
export default function SnapshotsPage() {
    const [snapshots, setSnapshots] = useState<Snapshot[]>([]);
    const [businesses, setBusinesses] = useState<Business[]>([]);
    const [loading, setLoading] = useState(true);
    const [denied, setDenied] = useState(false);
    const [busy, setBusy] = useState<string | null>(null);
    const [applyTo, setApplyTo] = useState<Record<string, string>>({});
    // What the reader may do here, as the server says. Nothing is offered
    // before it has said.
    const [can, setCan] = useState<{ manage: boolean; apply: boolean }>({ manage: false, apply: false });
    const toast = useToast();
    const confirmAction = useConfirm();

    const load = useCallback(async () => {
        try {
            const res = await fetch("/api/admin/snapshots");
            if (res.status === 403 || res.status === 401) {
                setDenied(true);
                return;
            }
            const data = await res.json();
            setSnapshots(data.snapshots ?? []);
            if (data.can) setCan(data.can);

            const businessRes = await fetch("/api/admin/organizations");
            if (businessRes.ok) {
                const businessData = await businessRes.json();
                setBusinesses(
                    (businessData.organizations ?? []).map((o: { id: string; name: string }) => ({
                        id: o.id,
                        name: o.name,
                    }))
                );
            }
        } catch {
            toast.error("Could not load the snapshot library");
        } finally {
            setLoading(false);
        }
    }, [toast]);

    useEffect(() => {
        load();
    }, [load]);

    async function setDefault(snapshot: Snapshot) {
        setBusy(snapshot.id);
        try {
            const res = await fetch(`/api/admin/snapshots/${snapshot.id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ isDefault: !snapshot.isDefault }),
            });
            if (!res.ok) {
                toast.error((await res.json()).error ?? "Could not update that snapshot");
                return;
            }
            toast.success(
                snapshot.isDefault
                    ? "New businesses will start from the built-in defaults again"
                    : `New businesses will start from "${snapshot.name}"`
            );
            await load();
        } finally {
            setBusy(null);
        }
    }

    async function remove(snapshot: Snapshot) {
        const ok = await confirmAction({
            title: `Delete "${snapshot.name}"?`,
            message:
                "Businesses already started from it keep everything they were given. Only the template goes.",
            confirmLabel: "Delete snapshot",
            tone: "danger",
        });
        if (!ok) return;

        setBusy(snapshot.id);
        try {
            const res = await fetch(`/api/admin/snapshots/${snapshot.id}`, { method: "DELETE" });
            if (!res.ok) {
                toast.error((await res.json()).error ?? "Could not delete that snapshot");
                return;
            }
            toast.success(`Deleted "${snapshot.name}"`);
            await load();
        } finally {
            setBusy(null);
        }
    }

    async function apply(snapshot: Snapshot) {
        const organizationId = applyTo[snapshot.id];
        if (!organizationId) {
            toast.error("Choose a business first");
            return;
        }
        const business = businesses.find((f) => f.id === organizationId);

        const ok = await confirmAction({
            title: `Apply "${snapshot.name}" to ${business?.name ?? "this business"}?`,
            message:
                "Adds anything the business does not already have under the same name. Nothing is removed or overwritten, and no existing records are touched.",
            confirmLabel: "Apply snapshot",
        });
        if (!ok) return;

        setBusy(snapshot.id);
        try {
            const res = await fetch(`/api/admin/snapshots/${snapshot.id}/apply`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ organizationId }),
            });
            if (!res.ok) {
                toast.error((await res.json()).error ?? "Could not apply that snapshot");
                return;
            }
            const { applied, business: businessName } = await res.json();
            const added =
                applied.businessUnits + applied.zones + applied.growthParameters;
            toast.success(
                added === 0
                    ? `${businessName} already had everything in this snapshot`
                    : `Added to ${businessName}`,
                {
                    description:
                        added === 0
                            ? undefined
                            : `${applied.businessUnits} units, ${applied.zones} zones, ${applied.growthParameters} growing parameters`,
                }
            );
        } finally {
            setBusy(null);
        }
    }

    if (denied) {
        return (
            <div className="max-w-lg mx-auto mt-20 text-center">
                <ShieldAlert className="mx-auto text-white/30 mb-4" size={32} />
                <h1 className="text-xl font-bold text-white mb-2">Staff only</h1>
                <p className="text-white/50 text-sm">This page is for EcoFusion support accounts.</p>
            </div>
        );
    }

    return (
        <div>
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-white flex items-center gap-2">
                    <Camera size={22} className="text-accent" />
                    Snapshots
                </h1>
                <p className="text-white/50 mt-1 max-w-2xl text-sm">
                    Business setups captured as templates. Mark one to start every new business from it, or
                    apply one to a business that already exists. Capture a new snapshot from the Sub Accounts
                    page.
                </p>
            </div>

            {loading ? (
                <p className="text-white/40 text-sm py-8 text-center">Loading snapshots...</p>
            ) : snapshots.length === 0 ? (
                <div className="text-center py-16 border border-white/10 rounded-2xl bg-white/[0.02]">
                    <Camera className="mx-auto text-white/20 mb-3" size={28} />
                    <p className="text-white/50 text-sm">No snapshots yet.</p>
                    <p className="text-white/30 text-xs mt-1">
                        Set a business up the way you want, then capture it from the Sub Accounts page.
                    </p>
                </div>
            ) : (
                <div className="space-y-3">
                    {snapshots.map((snapshot) => (
                        <div
                            key={snapshot.id}
                            className={`px-5 py-4 rounded-2xl border ${
                                snapshot.isDefault
                                    ? "border-accent/30 bg-accent/[0.06]"
                                    : "border-white/10 bg-white/[0.03]"
                            }`}
                        >
                            <div className="flex items-start gap-4">
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <span className="text-white font-medium">{snapshot.name}</span>
                                        {snapshot.isDefault && (
                                            <span className="px-2 py-0.5 rounded-full border border-accent/30 bg-accent/15 text-accent text-[11px]">
                                                new businesses start here
                                            </span>
                                        )}
                                        {snapshot.stale && (
                                            <span className="px-2 py-0.5 rounded-full border border-amber-400/30 bg-amber-400/15 text-amber-200 text-[11px]">
                                                too old to apply
                                            </span>
                                        )}
                                    </div>
                                    {snapshot.description && (
                                        <p className="text-sm text-white/50 mt-1">{snapshot.description}</p>
                                    )}
                                    <div className="text-xs text-white/35 mt-1.5">
                                        {snapshot.capturedFrom
                                            ? `From ${snapshot.capturedFrom}`
                                            : "Source business since deleted"}
                                        {snapshot.createdBy ? ` · by ${snapshot.createdBy}` : ""}
                                    </div>

                                    <div className="flex flex-wrap gap-x-5 gap-y-1 mt-3 text-xs text-white/45">
                                        <span className="flex items-center gap-1.5">
                                            <Layers size={12} /> {snapshot.contents.businessUnits} units
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <MapPin size={12} /> {snapshot.contents.zones} zones
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <Sprout size={12} /> {snapshot.contents.growthParameters} growing parameters
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 shrink-0">
                                    {can.manage && (
                                        <>
                                            <button
                                                type="button"
                                                onClick={() => setDefault(snapshot)}
                                                disabled={busy === snapshot.id || snapshot.stale}
                                                title={
                                                    snapshot.isDefault
                                                        ? "Stop new businesses starting from this"
                                                        : "Start new businesses from this"
                                                }
                                                className={`p-2 rounded-lg transition-colors disabled:opacity-40 ${
                                                    snapshot.isDefault
                                                        ? "text-accent bg-accent/15 hover:bg-accent/25"
                                                        : "text-white/40 hover:text-white hover:bg-white/10"
                                                }`}
                                            >
                                                <Star size={15} fill={snapshot.isDefault ? "currentColor" : "none"} />
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => remove(snapshot)}
                                                disabled={busy === snapshot.id}
                                                title="Delete this snapshot"
                                                className="p-2 rounded-lg text-white/40 hover:text-red-300 hover:bg-red-500/10 transition-colors disabled:opacity-40"
                                            >
                                                <Trash2 size={15} />
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>

                            {can.apply && (
                                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-white/[0.07]">
                                    <select
                                        value={applyTo[snapshot.id] ?? ""}
                                        onChange={(e) =>
                                            setApplyTo((current) => ({
                                                ...current,
                                                [snapshot.id]: e.target.value,
                                            }))
                                        }
                                        className="flex-1 min-w-0 px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm"
                                    >
                                        <option value="" className="bg-neutral-900">
                                            Apply to an existing business...
                                        </option>
                                        {businesses.map((business) => (
                                            <option key={business.id} value={business.id} className="bg-neutral-900">
                                                {business.name}
                                            </option>
                                        ))}
                                    </select>
                                    <button
                                        type="button"
                                        onClick={() => apply(snapshot)}
                                        disabled={busy === snapshot.id || snapshot.stale || !applyTo[snapshot.id]}
                                        className="text-sm flex items-center gap-1.5 shrink-0 px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 disabled:opacity-40 transition-colors"
                                    >
                                        <Download size={14} />
                                        {busy === snapshot.id ? "Applying..." : "Apply"}
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
