"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
    BookOpen, Building2, Check, ChevronRight, Clock, GraduationCap, Loader2, Search,
} from "lucide-react";
import { useToast } from "@/components/ui/Toast";
import { useConfirm } from "@/components/ui/ConfirmDialog";
import { groupByCategory, hours } from "@/lib/course-groups";
import { AgencyClassesSkeleton } from "@/components/skeletons/PageSkeletons";

interface Business {
    id: string;
    name: string;
    location: string | null;
    standing: "active" | "trial" | "inactive";
    classCount: number;
}

interface PlatformCourse {
    id: string;
    code: string;
    title: string;
    category: string;
    duration: number;
    lessonCount: number;
    isActive: boolean;
}

const STANDING: Record<Business["standing"], { label: string; className: string }> = {
    active: { label: "Active", className: "border-accent/30 bg-accent/10 text-accent" },
    trial: { label: "Trial", className: "border-white/15 bg-white/5 text-white/60" },
    inactive: { label: "Inactive", className: "border-white/10 bg-white/[0.03] text-white/35" },
};

/** Two sets hold the same members. */
function sameSet(a: Set<string>, b: Set<string>): boolean {
    if (a.size !== b.size) return false;
    for (const value of a) if (!b.has(value)) return false;
    return true;
}

/**
 * Which of EcoFusion's classes each business carries.
 *
 * Its own section rather than a button on every row of the sub account list.
 * Loading classes is a job somebody sits down to do across several businesses
 * in one go, and a modal opened one row at a time made that job a sequence of
 * separate trips, each starting from a closed list.
 *
 * Changes are held until saved, and the page says how many are pending rather
 * than how many are ticked: "three to load, one to unload" is what somebody
 * needs to know before pressing Save, and a total of ticked boxes is not.
 * Leaving a business with unsaved changes asks first.
 */
export default function AgencyClassesPage() {
    const [businesses, setBusinesses] = useState<Business[]>([]);
    const [courses, setCourses] = useState<PlatformCourse[]>([]);
    const [loading, setLoading] = useState(true);
    const [businessSearch, setBusinessSearch] = useState("");

    const [selected, setSelected] = useState<Business | null>(null);
    const [saved, setSaved] = useState<Set<string>>(new Set());
    const [chosen, setChosen] = useState<Set<string>>(new Set());
    const [grantsLoading, setGrantsLoading] = useState(false);
    const [saving, setSaving] = useState(false);

    const [search, setSearch] = useState("");
    const [open, setOpen] = useState<Set<string>>(new Set());

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

    const dirty = !sameSet(saved, chosen);
    const toLoad = [...chosen].filter((id) => !saved.has(id)).length;
    const toUnload = [...saved].filter((id) => !chosen.has(id)).length;

    const openBusiness = useCallback(
        async (business: Business) => {
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
            setSearch("");
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
                // Open the levels this business already draws from, so its
                // shape is visible without hunting for it.
                setOpen(new Set(courses.filter((c) => ids.has(c.id)).map((c) => c.category)));
            } catch {
                toast.error(`Could not load the classes for ${business.name}`);
            } finally {
                setGrantsLoading(false);
            }
        },
        [selected, dirty, toLoad, toUnload, courses, confirmAction, toast]
    );

    const term = search.trim().toLowerCase();
    const groups = useMemo(
        () =>
            groupByCategory(
                courses.filter(
                    (course) =>
                        term === "" ||
                        course.title.toLowerCase().includes(term) ||
                        course.code.toLowerCase().includes(term)
                )
            ),
        [courses, term]
    );

    const businessTerm = businessSearch.trim().toLowerCase();
    const visibleBusinesses = businesses.filter(
        (b) =>
            businessTerm === "" ||
            b.name.toLowerCase().includes(businessTerm) ||
            (b.location ?? "").toLowerCase().includes(businessTerm)
    );

    function toggle(courseId: string) {
        setChosen((current) => {
            const next = new Set(current);
            if (next.has(courseId)) next.delete(courseId);
            else next.add(courseId);
            return next;
        });
    }

    function setGroup(list: PlatformCourse[], on: boolean) {
        setChosen((current) => {
            const next = new Set(current);
            list.forEach((course) => (on ? next.add(course.id) : next.delete(course.id)));
            return next;
        });
    }

    function toggleOpen(category: string) {
        setOpen((current) => {
            const next = new Set(current);
            if (next.has(category)) next.delete(category);
            else next.add(category);
            return next;
        });
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

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-white flex items-center gap-2">
                    <GraduationCap size={22} className="text-accent" />
                    Classes
                </h1>
                <p className="text-white/50 mt-1 max-w-2xl text-sm">
                    Choose which EcoFusion classes each business carries. They stay yours:
                    corrections reach every business holding them, and a business cannot edit
                    them. Classes a business wrote for itself are not listed and are not affected.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Businesses */}
                <div className="lg:col-span-1">
                    <div className="bg-white/5 border border-white/5 rounded-2xl p-4">
                        <div className="flex items-center gap-2 mb-4">
                            <Building2 size={18} className="text-white/50" />
                            <h2 className="font-bold text-white">Businesses</h2>
                            <span className="ml-auto text-xs text-white/35">{businesses.length}</span>
                        </div>
                        <div className="relative mb-4">
                            <Search
                                size={14}
                                className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30"
                            />
                            <input
                                value={businessSearch}
                                onChange={(e) => setBusinessSearch(e.target.value)}
                                placeholder="Search businesses"
                                className="w-full pl-9 pr-3 py-2 bg-black/20 border border-white/10 rounded-lg text-sm text-white placeholder:text-white/25"
                            />
                        </div>

                        <div className="space-y-1.5 max-h-[60vh] overflow-y-auto custom-scrollbar pr-1">
                            {visibleBusinesses.length === 0 ? (
                                <p className="text-center text-white/40 text-sm py-6">
                                    No businesses match that.
                                </p>
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
                                                        : `${business.classCount} ${
                                                              business.classCount === 1 ? "class" : "classes"
                                                          }`}
                                                </span>
                                            </div>
                                        </button>
                                    );
                                })
                            )}
                        </div>
                    </div>
                </div>

                {/* Classes for the chosen business */}
                <div className="lg:col-span-2">
                    {!selected ? (
                        <div className="h-full min-h-[320px] flex flex-col items-center justify-center text-center border border-dashed border-white/10 rounded-2xl p-8">
                            <Building2 size={36} className="text-white/15 mb-3" />
                            <p className="text-white/60 font-medium">Choose a business</p>
                            <p className="text-white/35 text-sm mt-1 max-w-sm">
                                Its classes open here, grouped by level. Nothing changes until you
                                save.
                            </p>
                        </div>
                    ) : (
                        <div className="bg-white/5 border border-white/5 rounded-2xl p-5 flex flex-col">
                            <div className="flex items-center justify-between gap-3 mb-4">
                                <h2 className="text-lg font-bold text-white truncate">
                                    {selected.name}
                                </h2>
                                <span className="text-xs text-white/40 shrink-0">
                                    {chosen.size} of {courses.length} classes
                                </span>
                            </div>

                            <div className="relative mb-3">
                                <Search
                                    size={15}
                                    className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30"
                                />
                                <input
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    placeholder="Search by name or code"
                                    className="w-full pl-9 pr-3 py-2 bg-black/20 border border-white/10 rounded-xl text-white placeholder:text-white/25 text-sm"
                                />
                            </div>

                            {grantsLoading ? (
                                // Shaped like the closed level groups that are
                                // coming, so the panel does not resize when
                                // they land.
                                <div className="space-y-2" aria-busy="true" aria-label="Loading classes">
                                    {Array.from({ length: 6 }).map((_, row) => (
                                        <div
                                            key={row}
                                            className="h-11 rounded-xl border border-white/10 bg-white/[0.02] animate-pulse"
                                        />
                                    ))}
                                </div>
                            ) : courses.length === 0 ? (
                                <div className="py-12 text-center">
                                    <BookOpen className="mx-auto text-white/20 mb-3" size={26} />
                                    <p className="text-white/50 text-sm">There are no EcoFusion classes yet.</p>
                                </div>
                            ) : groups.length === 0 ? (
                                <p className="text-white/40 text-sm py-10 text-center">
                                    Nothing matches &ldquo;{search.trim()}&rdquo;.
                                </p>
                            ) : (
                                <div className="space-y-2 max-h-[52vh] overflow-y-auto custom-scrollbar pr-1">
                                    {groups.map(({ category, courses: list }) => {
                                        // A search result is always open: hiding
                                        // what somebody just searched for would
                                        // be perverse.
                                        const isOpen = term !== "" || open.has(category);
                                        const count = list.filter((c) => chosen.has(c.id)).length;
                                        const all = count === list.length;

                                        return (
                                            <div
                                                key={category}
                                                className="rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden"
                                            >
                                                <div className="flex items-center gap-2 px-3 py-2.5">
                                                    <button
                                                        type="button"
                                                        onClick={() => toggleOpen(category)}
                                                        disabled={term !== ""}
                                                        className="flex items-center gap-2 flex-1 min-w-0 text-left disabled:cursor-default"
                                                    >
                                                        <ChevronRight
                                                            size={15}
                                                            className={`text-white/30 shrink-0 transition-transform ${
                                                                isOpen ? "rotate-90" : ""
                                                            }`}
                                                        />
                                                        <span className="text-sm font-semibold text-white truncate">
                                                            {category}
                                                        </span>
                                                        <span
                                                            className={`text-xs shrink-0 ${
                                                                count > 0 ? "text-accent" : "text-white/30"
                                                            }`}
                                                        >
                                                            {count} of {list.length}
                                                        </span>
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={() => setGroup(list, !all)}
                                                        className="text-[11px] shrink-0 px-2.5 py-1 rounded-lg text-white/50 hover:text-white hover:bg-white/10 transition-colors"
                                                    >
                                                        {all ? "Clear" : "Select all"}
                                                    </button>
                                                </div>

                                                {isOpen && (
                                                    <div className="px-2 pb-2 space-y-1">
                                                        {list.map((course) => {
                                                            const on = chosen.has(course.id);
                                                            const changed = on !== saved.has(course.id);
                                                            return (
                                                                <button
                                                                    key={course.id}
                                                                    type="button"
                                                                    onClick={() => toggle(course.id)}
                                                                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg border text-left transition-colors ${
                                                                        on
                                                                            ? "border-accent/40 bg-accent/10"
                                                                            : "border-transparent hover:bg-white/5"
                                                                    }`}
                                                                >
                                                                    <span
                                                                        className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border ${
                                                                            on ? "bg-accent border-accent" : "border-white/25"
                                                                        }`}
                                                                    >
                                                                        {on && (
                                                                            <Check size={11} className="text-primary" strokeWidth={3} />
                                                                        )}
                                                                    </span>
                                                                    <span className="font-mono text-[11px] text-white/40 shrink-0 w-16">
                                                                        {course.code}
                                                                    </span>
                                                                    <span className="text-sm text-white flex-1 min-w-0 truncate">
                                                                        {course.title}
                                                                    </span>
                                                                    {/* Marks an unsaved change on the row itself. */}
                                                                    {changed && (
                                                                        <span className="text-[10px] font-bold uppercase text-amber-300/90 shrink-0">
                                                                            {on ? "to load" : "to unload"}
                                                                        </span>
                                                                    )}
                                                                    <span className="text-[11px] text-white/35 shrink-0 flex items-center gap-2">
                                                                        <span>{course.lessonCount} lessons</span>
                                                                        {course.duration > 0 && (
                                                                            <span className="flex items-center gap-1">
                                                                                <Clock size={10} />
                                                                                {hours(course.duration)}
                                                                            </span>
                                                                        )}
                                                                    </span>
                                                                    {!course.isActive && (
                                                                        <span className="text-[11px] text-white/25 shrink-0">
                                                                            retired
                                                                        </span>
                                                                    )}
                                                                </button>
                                                            );
                                                        })}
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            )}

                            <div className="flex items-center gap-3 pt-5 mt-auto">
                                <button
                                    type="button"
                                    onClick={save}
                                    disabled={saving || grantsLoading || !dirty}
                                    className="px-6 py-2 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90 disabled:opacity-40 flex items-center gap-2"
                                >
                                    {saving && <Loader2 size={15} className="motion-safe:animate-spin" />}
                                    {saving ? "Saving..." : "Save classes"}
                                </button>
                                {dirty && !saving && (
                                    <button
                                        type="button"
                                        onClick={() => setChosen(new Set(saved))}
                                        className="px-4 py-2 text-white/60 hover:text-white rounded-lg text-sm"
                                    >
                                        Discard
                                    </button>
                                )}
                                <span className="ml-auto text-xs text-white/45">
                                    {dirty
                                        ? `${toLoad} to load, ${toUnload} to unload`
                                        : "No unsaved changes"}
                                </span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
