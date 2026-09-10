"use client";

import { useEffect, useState } from "react";
import { Building2, GraduationCap, Search } from "lucide-react";
import { useToast } from "@/components/ui/Toast";
import { useConfirm } from "@/components/ui/ConfirmDialog";
import ClassChooser, { type ChoosableCourse } from "@/components/training/ClassChooser";
import { AgencyClassesSkeleton } from "@/components/skeletons/PageSkeletons";

interface Business {
    id: string;
    name: string;
    location: string | null;
    standing: "active" | "trial" | "inactive";
    classCount: number;
}

const STANDING: Record<Business["standing"], { label: string; className: string }> = {
    active: { label: "Active", className: "border-accent/30 bg-accent/10 text-accent" },
    trial: { label: "Trial", className: "border-white/15 bg-white/5 text-white/60" },
    inactive: { label: "Inactive", className: "border-white/10 bg-white/[0.03] text-white/35" },
};

/**
 * Which of EcoFusion's classes each business carries, set up from the agency.
 *
 * A business's owner can now choose for themselves from their own sidebar.
 * This is where EcoFusion sets up a customer who has not, or corrects one who
 * has, across several businesses in one sitting; both write the same rows.
 *
 * The list shows how many classes each business carries and picks out the
 * ones that have none, which is the question somebody arrives here asking.
 */
export default function AgencyClassesPage() {
    const [businesses, setBusinesses] = useState<Business[]>([]);
    const [courses, setCourses] = useState<ChoosableCourse[]>([]);
    const [loading, setLoading] = useState(true);
    const [businessSearch, setBusinessSearch] = useState("");

    const [selected, setSelected] = useState<Business | null>(null);
    const [saved, setSaved] = useState<Set<string>>(new Set());
    const [chosen, setChosen] = useState<Set<string>>(new Set());
    const [grantsLoading, setGrantsLoading] = useState(false);
    const [saving, setSaving] = useState(false);

    const toast = useToast();
    const confirmAction = useConfirm();

    // The catalogue is the same for every business, so it is fetched once
    // alongside the list rather than again for each business opened.
    useEffect(() => {
        let cancelled = false;
        (async () => {
            try {
                const [orgs, catalogue] = await Promise.all([
                    fetch("/api/admin/organizations").then((r) => r.json()),
                    fetch("/api/admin/courses").then((r) => r.json()),
                ]);
                if (cancelled) return;
                setBusinesses(orgs.organizations ?? []);
                setCourses(catalogue.courses ?? []);
            } catch {
                if (!cancelled) toast.error("Could not load businesses and classes");
            } finally {
                if (!cancelled) setLoading(false);
            }
        })();
        return () => {
            cancelled = true;
        };
    }, [toast]);

    const toLoad = [...chosen].filter((id) => !saved.has(id)).length;
    const toUnload = [...saved].filter((id) => !chosen.has(id)).length;
    const dirty = toLoad > 0 || toUnload > 0;

    async function openBusiness(business: Business) {
        if (selected?.id === business.id) return;

        if (dirty) {
            const leave = await confirmAction({
                title: `Leave ${selected?.name} without saving?`,
                message: `${toLoad} to load and ${toUnload} to unload will be lost.`,
                confirmLabel: "Discard changes",
                tone: "danger",
            });
            if (!leave) return;
        }

        setSelected(business);
        // Emptied before the request rather than after, so the previous
        // business's classes are never shown under this one's name.
        setSaved(new Set());
        setChosen(new Set());
        setGrantsLoading(true);

        try {
            const res = await fetch(`/api/admin/course-grants?organizationId=${business.id}`);
            const held = await res.json();
            const ids = new Set<string>(held.courseIds ?? []);
            setSaved(ids);
            setChosen(new Set(ids));
        } catch {
            toast.error(`Could not load the classes for ${business.name}`);
        } finally {
            setGrantsLoading(false);
        }
    }

    async function save() {
        if (!selected || !dirty) return;
        setSaving(true);
        try {
            const res = await fetch("/api/admin/course-grants", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ organizationId: selected.id, courseIds: [...chosen] }),
            });
            if (!res.ok) {
                toast.error((await res.json()).error ?? "Could not update classes");
                return;
            }
            const { loaded, unloaded } = await res.json();
            toast.success(`${selected.name}: ${loaded} loaded, ${unloaded} unloaded`);

            // What was saved becomes the new baseline, and the count beside the
            // business in the list moves with it, without asking again.
            setSaved(new Set(chosen));
            setBusinesses((current) =>
                current.map((b) => (b.id === selected.id ? { ...b, classCount: chosen.size } : b))
            );
        } finally {
            setSaving(false);
        }
    }

    if (loading) return <AgencyClassesSkeleton />;

    const businessTerm = businessSearch.trim().toLowerCase();
    const visibleBusinesses = businesses.filter(
        (b) =>
            businessTerm === "" ||
            b.name.toLowerCase().includes(businessTerm) ||
            (b.location ?? "").toLowerCase().includes(businessTerm)
    );

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-white flex items-center gap-2">
                    <GraduationCap size={22} className="text-accent" />
                    Classes
                </h1>
                <p className="text-white/50 mt-1 max-w-2xl text-sm">
                    Set up which EcoFusion classes a business carries. Owners can also choose
                    for themselves from their own sidebar; both change the same list.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1">
                    <div className="bg-white/5 border border-white/5 rounded-2xl p-4">
                        <div className="flex items-center gap-2 mb-4">
                            <Building2 size={18} className="text-white/50" />
                            <h2 className="font-bold text-white">Businesses</h2>
                            <span className="ml-auto text-xs text-white/35">{businesses.length}</span>
                        </div>
                        <div className="relative mb-4">
                            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
                            <input
                                value={businessSearch}
                                onChange={(e) => setBusinessSearch(e.target.value)}
                                placeholder="Search businesses"
                                className="w-full pl-9 pr-3 py-2 bg-black/20 border border-white/10 rounded-lg text-sm text-white placeholder:text-white/25"
                            />
                        </div>

                        <div className="space-y-1.5 max-h-[60vh] overflow-y-auto custom-scrollbar pr-1">
                            {visibleBusinesses.length === 0 ? (
                                <p className="text-center text-white/40 text-sm py-6">No businesses match that.</p>
                            ) : (
                                visibleBusinesses.map((business) => {
                                    const isSelected = selected?.id === business.id;
                                    return (
                                        <button
                                            key={business.id}
                                            type="button"
                                            onClick={() => openBusiness(business)}
                                            className={`w-full text-left p-3 rounded-xl border transition-colors ${
                                                isSelected
                                                    ? "bg-accent/15 border-accent/40"
                                                    : "bg-white/[0.03] border-transparent hover:bg-white/[0.07]"
                                            }`}
                                        >
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm font-medium text-white truncate flex-1">
                                                    {business.name}
                                                </span>
                                                <span
                                                    className={`px-1.5 py-0.5 rounded-full border text-[10px] shrink-0 ${
                                                        STANDING[business.standing].className
                                                    }`}
                                                >
                                                    {STANDING[business.standing].label}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2 mt-1 text-xs">
                                                <span className="text-white/35 truncate flex-1">
                                                    {business.location || "No location"}
                                                </span>
                                                <span
                                                    className={
                                                        business.classCount === 0
                                                            ? "text-amber-300/80 shrink-0"
                                                            : "text-white/45 shrink-0"
                                                    }
                                                >
                                                    {business.classCount === 0
                                                        ? "No classes"
                                                        : `${business.classCount} ${business.classCount === 1 ? "class" : "classes"}`}
                                                </span>
                                            </div>
                                        </button>
                                    );
                                })
                            )}
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-2">
                    {!selected ? (
                        <div className="h-full min-h-[320px] flex flex-col items-center justify-center text-center border border-dashed border-white/10 rounded-2xl p-8">
                            <Building2 size={36} className="text-white/15 mb-3" />
                            <p className="text-white/60 font-medium">Choose a business</p>
                            <p className="text-white/35 text-sm mt-1 max-w-sm">
                                Its classes open here, grouped by level. Nothing changes until you save.
                            </p>
                        </div>
                    ) : (
                        // Keyed on the business and on whether its classes have
                        // arrived, so the chooser starts afresh for each and opens
                        // the levels the business already draws from.
                        <ClassChooser
                            key={`${selected.id}-${grantsLoading ? "loading" : "ready"}`}
                            heading={selected.name}
                            courses={courses}
                            saved={saved}
                            chosen={chosen}
                            onChange={setChosen}
                            loading={grantsLoading}
                            saving={saving}
                            onSave={save}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}
