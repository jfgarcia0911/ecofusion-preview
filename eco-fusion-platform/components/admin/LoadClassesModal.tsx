"use client";

import { useEffect, useMemo, useState } from "react";
import { BookOpen, Check, ChevronRight, Search, Clock } from "lucide-react";
import Modal from "@/components/ui/Modal";
import { useToast } from "@/components/ui/Toast";

interface PlatformCourse {
    id: string;
    code: string;
    title: string;
    category: string;
    duration: number;
    lessonCount: number;
    isActive: boolean;
}

/**
 * The order the curriculum is meant to be climbed in.
 *
 * Alphabetical would put Advanced above Foundational, which is the wrong shape
 * for a list somebody reads to decide what a business should start with.
 * Anything not named here is a category of its own, listed after these.
 */
const LEVELS = ["Foundational", "Intermediate", "Advanced", "Expert", "Master"];

/** Hours, said the way a person would say them. */
function hours(minutes: number): string {
    if (!minutes) return "";
    if (minutes < 60) return `${minutes}m`;
    const value = minutes / 60;
    return `${Number.isInteger(value) ? value : value.toFixed(1)}h`;
}

/**
 * Chooses which of EcoFusion's classes a business carries.
 *
 * There are the better part of a hundred of them, so they arrive grouped by
 * level and closed, and what you see first is the shape of the curriculum
 * rather than a column of ninety identical rows. A group opens when it holds
 * something already chosen, or when a search finds something inside it.
 *
 * The whole selection is saved at once, so what is on screen when Save is
 * pressed is what the business ends up with. Unticking a class takes it out of
 * that business's academy; it does not touch anyone's record of having
 * completed it.
 */
export default function LoadClassesModal({
    business,
    onClose,
}: {
    business: { id: string; name: string } | null;
    onClose: () => void;
}) {
    const [courses, setCourses] = useState<PlatformCourse[]>([]);
    const [selected, setSelected] = useState<Set<string>>(new Set());
    const [open, setOpen] = useState<Set<string>>(new Set());
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [saving, setSaving] = useState(false);
    const toast = useToast();

    useEffect(() => {
        if (!business) return;
        let cancelled = false;

        (async () => {
            setLoading(true);
            setSearch("");
            try {
                const [catalogue, held] = await Promise.all([
                    fetch("/api/admin/courses").then((r) => r.json()),
                    fetch(`/api/admin/course-grants?organizationId=${business.id}`).then((r) =>
                        r.json()
                    ),
                ]);
                if (cancelled) return;

                const list: PlatformCourse[] = catalogue.courses ?? [];
                const chosen = new Set<string>(held.courseIds ?? []);
                setCourses(list);
                setSelected(chosen);

                // Open the groups this business already draws from, so its
                // current shape is visible without hunting for it.
                setOpen(
                    new Set(
                        list.filter((c) => chosen.has(c.id)).map((c) => c.category)
                    )
                );
            } catch {
                if (!cancelled) toast.error("Could not load the class list");
            } finally {
                if (!cancelled) setLoading(false);
            }
        })();

        return () => {
            cancelled = true;
        };
    }, [business, toast]);

    const term = search.trim().toLowerCase();

    /** Courses by category, in curriculum order, filtered by the search. */
    const groups = useMemo(() => {
        const matching = courses.filter(
            (course) =>
                term === "" ||
                course.title.toLowerCase().includes(term) ||
                course.code.toLowerCase().includes(term)
        );

        const byCategory = new Map<string, PlatformCourse[]>();
        matching.forEach((course) => {
            const list = byCategory.get(course.category) ?? [];
            list.push(course);
            byCategory.set(course.category, list);
        });

        const known = LEVELS.filter((level) => byCategory.has(level));
        const rest = [...byCategory.keys()].filter((c) => !LEVELS.includes(c)).sort();

        return [...known, ...rest].map((category) => ({
            category,
            courses: byCategory.get(category)!,
        }));
    }, [courses, term]);

    function toggle(courseId: string) {
        setSelected((current) => {
            const next = new Set(current);
            if (next.has(courseId)) next.delete(courseId);
            else next.add(courseId);
            return next;
        });
    }

    function setGroup(list: PlatformCourse[], on: boolean) {
        setSelected((current) => {
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
        if (!business) return;
        setSaving(true);
        try {
            const res = await fetch("/api/admin/course-grants", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ organizationId: business.id, courseIds: [...selected] }),
            });
            if (!res.ok) {
                toast.error((await res.json()).error ?? "Could not update classes");
                return;
            }
            const { loaded, unloaded } = await res.json();
            toast.success(
                loaded || unloaded
                    ? `${business.name}: ${loaded} loaded, ${unloaded} unloaded`
                    : `${business.name} already had exactly those classes`
            );
            onClose();
        } finally {
            setSaving(false);
        }
    }

    return (
        <Modal
            isOpen={business !== null}
            onClose={onClose}
            title={business ? `Classes for ${business.name}` : "Classes"}
            size="xl"
        >
            <p className="text-sm text-white/50 mb-4">
                Tick the EcoFusion classes this business should carry. They stay ours: corrections
                reach every business holding them, and the business cannot edit them. Classes it
                wrote itself are not listed here and are not affected.
            </p>

            <div className="relative mb-3">
                <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search by name or code"
                    className="w-full pl-9 pr-3 py-2 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/25 text-sm"
                />
            </div>

            {loading ? (
                <p className="text-white/40 text-sm py-10 text-center">Loading classes...</p>
            ) : courses.length === 0 ? (
                <div className="py-10 text-center">
                    <BookOpen className="mx-auto text-white/20 mb-3" size={26} />
                    <p className="text-white/50 text-sm">There are no EcoFusion classes yet.</p>
                    <p className="text-white/30 text-xs mt-1">
                        Run the curriculum import, then they will appear here.
                    </p>
                </div>
            ) : groups.length === 0 ? (
                <p className="text-white/40 text-sm py-10 text-center">
                    Nothing matches &ldquo;{search.trim()}&rdquo;.
                </p>
            ) : (
                <div className="space-y-2 max-h-[48vh] overflow-y-auto custom-scrollbar pr-1">
                    {groups.map(({ category, courses: list }) => {
                        // A search result is always open: hiding the thing
                        // somebody just searched for would be perverse.
                        const isOpen = term !== "" || open.has(category);
                        const chosen = list.filter((c) => selected.has(c.id)).length;
                        const all = chosen === list.length;

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
                                                chosen > 0 ? "text-accent" : "text-white/30"
                                            }`}
                                        >
                                            {chosen} of {list.length}
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
                                            const on = selected.has(course.id);
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
                                                            on
                                                                ? "bg-accent border-accent"
                                                                : "border-white/25"
                                                        }`}
                                                    >
                                                        {on && (
                                                            <Check
                                                                size={11}
                                                                className="text-primary"
                                                                strokeWidth={3}
                                                            />
                                                        )}
                                                    </span>
                                                    <span className="font-mono text-[11px] text-white/40 shrink-0 w-16">
                                                        {course.code}
                                                    </span>
                                                    <span className="text-sm text-white flex-1 min-w-0 truncate">
                                                        {course.title}
                                                    </span>
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

            <div className="flex items-center gap-3 pt-5">
                <button
                    type="button"
                    onClick={save}
                    disabled={saving || loading}
                    className="px-6 py-2 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90 disabled:opacity-50"
                >
                    {saving ? "Saving..." : "Save classes"}
                </button>
                <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 text-white/60 hover:text-white rounded-lg"
                >
                    Cancel
                </button>
                <span className="ml-auto text-xs text-white/40">
                    {selected.size} of {courses.length} selected
                </span>
            </div>
        </Modal>
    );
}
