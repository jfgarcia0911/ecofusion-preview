"use client";

import { useMemo, useState } from "react";
import { BookOpen, Check, ChevronRight, Clock, Loader2, Search } from "lucide-react";
import { groupByCategory, hours } from "@/lib/course-groups";

export interface ChoosableCourse {
    id: string;
    code: string;
    title: string;
    category: string;
    duration: number;
    lessonCount: number;
    isActive: boolean;
}

/**
 * Choosing which of EcoFusion's classes one business carries.
 *
 * Used by the agency, which sets a customer up, and by a business's owner,
 * who chooses for themselves. The parent holds what is saved and what is
 * chosen, so it can ask before somebody walks away from unsaved changes; this
 * only draws them and says what saving would do.
 *
 * Groups arrive closed, except the levels the business already draws from, so
 * the first thing on screen is the shape of the curriculum and where this
 * business sits in it. Give it a key per business so that opening state starts
 * afresh for each.
 */
export default function ClassChooser({
    heading,
    courses,
    saved,
    chosen,
    onChange,
    loading,
    saving,
    onSave,
}: {
    heading: string;
    courses: ChoosableCourse[];
    saved: Set<string>;
    chosen: Set<string>;
    onChange: (next: Set<string>) => void;
    loading: boolean;
    saving: boolean;
    onSave: () => void;
}) {
    const [search, setSearch] = useState("");
    const [open, setOpen] = useState<Set<string>>(
        () => new Set(courses.filter((c) => saved.has(c.id)).map((c) => c.category))
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

    const toLoad = [...chosen].filter((id) => !saved.has(id)).length;
    const toUnload = [...saved].filter((id) => !chosen.has(id)).length;
    const dirty = toLoad > 0 || toUnload > 0;

    function toggle(courseId: string) {
        const next = new Set(chosen);
        if (next.has(courseId)) next.delete(courseId);
        else next.add(courseId);
        onChange(next);
    }

    function setGroup(list: ChoosableCourse[], on: boolean) {
        const next = new Set(chosen);
        list.forEach((course) => (on ? next.add(course.id) : next.delete(course.id)));
        onChange(next);
    }

    function toggleOpen(category: string) {
        setOpen((current) => {
            const next = new Set(current);
            if (next.has(category)) next.delete(category);
            else next.add(category);
            return next;
        });
    }

    return (
        <div className="bg-white/5 border border-white/5 rounded-2xl p-5 flex flex-col">
            <div className="flex items-center justify-between gap-3 mb-4">
                <h2 className="text-lg font-bold text-white truncate">{heading}</h2>
                <span className="text-xs text-white/40 shrink-0">
                    {chosen.size} of {courses.length} classes
                </span>
            </div>

            <div className="relative mb-3">
                <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search by name or code"
                    className="w-full pl-9 pr-3 py-2 bg-black/20 border border-white/10 rounded-xl text-white placeholder:text-white/25 text-sm"
                />
            </div>

            {loading ? (
                // Shaped like the closed level groups that are coming, so the
                // panel does not resize when they land.
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
                        // A search result is always open: hiding what somebody
                        // just searched for would be perverse.
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
                                                        {on && <Check size={11} className="text-primary" strokeWidth={3} />}
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
                                                        <span className="text-[11px] text-white/25 shrink-0">retired</span>
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
                    onClick={onSave}
                    disabled={saving || loading || !dirty}
                    className="px-6 py-2 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90 disabled:opacity-40 flex items-center gap-2"
                >
                    {saving && <Loader2 size={15} className="motion-safe:animate-spin" />}
                    {saving ? "Saving..." : "Save classes"}
                </button>
                {dirty && !saving && (
                    <button
                        type="button"
                        onClick={() => onChange(new Set(saved))}
                        className="px-4 py-2 text-white/60 hover:text-white rounded-lg text-sm"
                    >
                        Discard
                    </button>
                )}
                <span className="ml-auto text-xs text-white/45">
                    {dirty ? `${toLoad} to load, ${toUnload} to unload` : "No unsaved changes"}
                </span>
            </div>
        </div>
    );
}
