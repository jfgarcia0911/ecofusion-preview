"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Search, ShieldAlert, LogIn, Users, Building2, GraduationCap, Camera } from "lucide-react";
import { useToast } from "@/components/ui/Toast";
import { useConfirm } from "@/components/ui/ConfirmDialog";
import LoadClassesModal from "@/components/admin/LoadClassesModal";
import CaptureSnapshotModal from "@/components/admin/CaptureSnapshotModal";

interface Farm {
    id: string;
    name: string;
    slug: string;
    plan: string;
    subscriptionStatus: string;
    trialEndsAt: string | null;
    createdAt: string;
    memberCount: number;
    owner: { name: string | null; email: string } | null;
}

const STATUS_STYLES: Record<string, string> = {
    active: "bg-accent/15 text-accent border-accent/30",
    trialing: "bg-white/10 text-white/70 border-white/20",
    past_due: "bg-red-400/15 text-red-300 border-red-400/30",
    canceled: "bg-red-400/10 text-red-300/70 border-red-400/20",
};

/**
 * Every farm on the platform, for EcoFusion staff.
 *
 * Entering one is a deliberate act with a confirmation in front of it, because
 * what follows is reading and changing somebody else's data under their own
 * screens. The list itself carries no farm data, only enough to find the right
 * farm and see what state it is in.
 */
export default function SupportFarmsPage() {
    const [farms, setFarms] = useState<Farm[]>([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    const [denied, setDenied] = useState(false);
    const [entering, setEntering] = useState<string | null>(null);
    // The farm whose class list is open. Loading classes needs no support
    // session: it decides what a farm may reach, not what is inside it.
    const [classesFor, setClassesFor] = useState<{ id: string; name: string } | null>(null);
    // Capturing reads a farm's setup without entering it, so no support session
    // is opened and none is needed.
    const [captureFrom, setCaptureFrom] = useState<{ id: string; name: string } | null>(null);
    const router = useRouter();
    const toast = useToast();
    const confirmAction = useConfirm();

    const load = useCallback(async (q: string) => {
        setLoading(true);
        try {
            const res = await fetch(`/api/admin/organizations?q=${encodeURIComponent(q)}`);
            if (res.status === 403 || res.status === 401) {
                setDenied(true);
                return;
            }
            const data = await res.json();
            setFarms(data.organizations ?? []);
        } catch {
            toast.error("Could not load the farm list");
        } finally {
            setLoading(false);
        }
    }, [toast]);

    useEffect(() => {
        const id = setTimeout(() => load(search), 250);
        return () => clearTimeout(id);
    }, [search, load]);

    async function enter(farm: Farm) {
        const ok = await confirmAction({
            title: `Enter ${farm.name}?`,
            message:
                "You will see and be able to change this farm's data as though it were your own. " +
                "Entering is recorded, and so is every change you make while inside.",
            confirmLabel: "Enter farm",
        });
        if (!ok) return;

        setEntering(farm.id);
        try {
            const res = await fetch("/api/admin/session", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ organizationId: farm.id }),
            });
            if (!res.ok) {
                toast.error((await res.json()).error ?? "Could not enter that farm");
                return;
            }
            router.push("/dashboard/executive");
            router.refresh();
        } finally {
            setEntering(null);
        }
    }

    if (denied) {
        return (
            <div className="max-w-lg mx-auto mt-20 text-center">
                <ShieldAlert className="mx-auto text-white/30 mb-4" size={32} />
                <h1 className="text-xl font-bold text-white mb-2">Staff only</h1>
                <p className="text-white/50 text-sm">
                    This page is for EcoFusion support accounts.
                </p>
            </div>
        );
    }

    return (
        <div>
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-white flex items-center gap-2">
                    <Building2 size={22} className="text-accent" />
                    Farms
                </h1>
                <p className="text-white/50 mt-1 max-w-2xl text-sm">
                    Every farm on the platform. Step into one to diagnose or fix a problem, then
                    leave it. Both are written to the access trail.
                </p>
            </div>

            <div className="relative mb-4">
                <Search
                    size={16}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30"
                />
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search by farm name"
                    className="w-full pl-10 pr-3 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/25 text-sm"
                />
            </div>

            {loading ? (
                <p className="text-white/40 text-sm py-8 text-center">Loading farms...</p>
            ) : farms.length === 0 ? (
                <p className="text-white/40 text-sm py-8 text-center">No farms match that.</p>
            ) : (
                <div className="space-y-2">
                    {farms.map((farm) => (
                        <div
                            key={farm.id}
                            className="flex items-center gap-4 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10"
                        >
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2">
                                    <span className="text-white font-medium truncate">
                                        {farm.name}
                                    </span>
                                    <span
                                        className={`px-2 py-0.5 rounded-full border text-[11px] ${
                                            STATUS_STYLES[farm.subscriptionStatus] ??
                                            STATUS_STYLES.trialing
                                        }`}
                                    >
                                        {farm.subscriptionStatus}
                                    </span>
                                </div>
                                <div className="text-xs text-white/40 mt-0.5 truncate">
                                    {farm.owner
                                        ? `${farm.owner.name ?? farm.owner.email} (${farm.owner.email})`
                                        : "No owner on record"}
                                </div>
                            </div>

                            <span className="text-xs text-white/40 flex items-center gap-1.5 shrink-0">
                                <Users size={13} />
                                {farm.memberCount}
                            </span>

                            <button
                                type="button"
                                onClick={() => setClassesFor({ id: farm.id, name: farm.name })}
                                className="text-xs flex items-center gap-1.5 shrink-0 px-3 py-1.5 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
                            >
                                <GraduationCap size={13} />
                                Classes
                            </button>

                            <button
                                type="button"
                                onClick={() => setCaptureFrom({ id: farm.id, name: farm.name })}
                                title="Capture this farm's setup as a template"
                                className="text-xs flex items-center gap-1.5 shrink-0 px-3 py-1.5 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
                            >
                                <Camera size={13} />
                                Capture
                            </button>

                            <button
                                type="button"
                                onClick={() => enter(farm)}
                                disabled={entering === farm.id}
                                className="text-xs flex items-center gap-1.5 shrink-0 px-3 py-1.5 rounded-lg bg-white/10 text-white hover:bg-white/20 disabled:opacity-50 transition-colors"
                            >
                                <LogIn size={13} />
                                {entering === farm.id ? "Entering..." : "Enter"}
                            </button>
                        </div>
                    ))}
                </div>
            )}

            <LoadClassesModal farm={classesFor} onClose={() => setClassesFor(null)} />
            <CaptureSnapshotModal farm={captureFrom} onClose={() => setCaptureFrom(null)} />
        </div>
    );
}
