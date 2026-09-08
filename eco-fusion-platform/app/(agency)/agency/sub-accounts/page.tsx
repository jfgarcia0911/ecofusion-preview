"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Search, LogIn, Users, Building2, GraduationCap, Camera } from "lucide-react";
import { useToast } from "@/components/ui/Toast";
import { useConfirm } from "@/components/ui/ConfirmDialog";
import LoadClassesModal from "@/components/admin/LoadClassesModal";
import CaptureSnapshotModal from "@/components/admin/CaptureSnapshotModal";

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
}

const STATUS_STYLES: Record<string, string> = {
    active: "bg-accent/15 text-accent border-accent/30",
    trialing: "bg-white/10 text-white/70 border-white/20",
    past_due: "bg-red-400/15 text-red-300 border-red-400/30",
    canceled: "bg-red-400/10 text-red-300/70 border-red-400/20",
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
    // The business whose class list is open. Loading classes needs no support
    // session: it decides what a business may reach, not what is inside it.
    const [classesFor, setClassesFor] = useState<{ id: string; name: string } | null>(null);
    // Capturing reads a setup without entering it, so no support session is
    // opened and none is needed.
    const [captureFrom, setCaptureFrom] = useState<{ id: string; name: string } | null>(null);
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
                        Every business on the platform. Step into one to diagnose or fix a
                        problem and then leave it, or choose which courses it carries.
                        Entering and leaving are both written to its access record.
                    </p>
                </div>
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
                <div className="space-y-2">
                    {businesses.map((business) => (
                        <div
                            key={business.id}
                            className="flex items-center gap-4 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10"
                        >
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2">
                                    <span className="text-white font-medium truncate">
                                        {business.name}
                                    </span>
                                    <span
                                        className={`px-2 py-0.5 rounded-full border text-[11px] ${
                                            STATUS_STYLES[business.subscriptionStatus] ??
                                            STATUS_STYLES.trialing
                                        }`}
                                    >
                                        {business.subscriptionStatus}
                                    </span>
                                </div>
                                <div className="text-xs text-white/40 mt-0.5 truncate">
                                    {business.location ?? "No location on record"}
                                    <span className="text-white/20"> &middot; </span>
                                    {business.owner
                                        ? `${business.owner.name ?? business.owner.email} (${business.owner.email})`
                                        : "No owner on record"}
                                </div>
                            </div>

                            <span className="text-xs text-white/40 flex items-center gap-1.5 shrink-0">
                                <Users size={13} />
                                {business.memberCount}
                            </span>


                            <button
                                type="button"
                                onClick={() => setClassesFor({ id: business.id, name: business.name })}
                                className="text-xs flex items-center gap-1.5 shrink-0 px-3 py-1.5 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
                            >
                                <GraduationCap size={13} />
                                Classes
                            </button>

                            <button
                                type="button"
                                onClick={() => setCaptureFrom({ id: business.id, name: business.name })}
                                title="Capture this setup as a template"
                                className="text-xs flex items-center gap-1.5 shrink-0 px-3 py-1.5 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
                            >
                                <Camera size={13} />
                                Capture
                            </button>

                            <button
                                type="button"
                                onClick={() => enter(business)}
                                disabled={entering === business.id}
                                className="text-xs flex items-center gap-1.5 shrink-0 px-3 py-1.5 rounded-lg bg-white/10 text-white hover:bg-white/20 disabled:opacity-50 transition-colors"
                            >
                                <LogIn size={13} />
                                {entering === business.id ? "Entering..." : "Enter"}
                            </button>
                        </div>
                    ))}
                </div>
            )}

            <LoadClassesModal business={classesFor} onClose={() => setClassesFor(null)} />
            <CaptureSnapshotModal business={captureFrom} onClose={() => setCaptureFrom(null)} />
        </div>
    );
}
