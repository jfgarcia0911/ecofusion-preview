"use client";

import { useMemo, useState } from "react";
import { Check, ChevronRight, Search, Clock, Plus, CheckCircle, Loader2 } from "lucide-react";

export interface PickableCourse {
    id: string;
    code: string;
    title: string;
    category: string;
    duration: number;
    isRequired: boolean;
}

/**
 * The order the curriculum is meant to be climbed in.
 *
 * Alphabetical would put Advanced above Foundational, which is the wrong shape
 * for a list somebody reads to decide what to give a new starter. Categories
 * not named here - the compliance ones, and anything a business writes for
 * itself - follow, in their own order.
 */
const CURRICULUM = ["Foundational", "Intermediate", "Advanced", "Expert", "Master"];

/** Categories arrive in whatever case they were written in. */
function label(category: string): string {
    return category.charAt(0).toUpperCase() + category.slice(1);
}

function hours(minutes: number): string {
    if (!minutes) return "";
    const value = minutes / 60;
    return `${Number.isInteger(value) ? value : value.toFixed(1)}h`;
}

/** Courses by category, in curriculum order, filtered by a search term. */
export function useCourseGroups(courses: PickableCourse[], term: string) {
    return useMemo(() => {
        const needle = term.trim().toLowerCase();
        const matching = courses.filter(
            (course) =>
                needle === "" ||
                course.title.toLowerCase().includes(needle) ||
                course.code.toLowerCase().includes(needle)
        );

        const byCategory = new Map<string, PickableCourse[]>();
        matching.forEach((course) => {
            const list = byCategory.get(course.category) ?? [];
            list.push(course);
            byCategory.set(course.category, list);
        });

        const known = CURRICULUM.filter((level) => byCategory.has(level));
        const rest = [...byCategory.keys()].filter((c) => !CURRICULUM.includes(c)).sort();

        return [...known, ...rest].map((category) => ({
            category,
            courses: byCategory.get(category)!,
        }));
    }, [courses, term]);
}

/**
 * Ninety-nine courses, arranged so somebody can find one.
 *
 * Grouped by level and closed, so the first thing on screen is the shape of
 * the curriculum rather than a column of ninety-nine identical rows. A group
 * opens when it already holds something chosen, or when a search finds
 * something inside it, and searching disables collapsing: hiding the thing
 * somebody has just searched for would be perverse.
 *
 * Two ways of using it. `select` is a set of tick boxes for assigning several
 * courses at once; `pick` fires as each row is clicked, for assigning them one
 * at a time. Rows already assigned are shown and disabled rather than hidden,
 * so the reader can see that the thing they were looking for is already done.
 */
export default function CoursePicker({
    courses,
    mode,
    selected,
    onToggle,
    onSelectGroup,
    onPick,
    disabledIds,
    disabledLabel = "Assigned",
    busyId,
    maxHeight = "max-h-80",
}: {
    courses: PickableCourse[];
    mode: "select" | "pick";
    selected?: Set<string>;
    onToggle?: (courseId: string) => void;
    onSelectGroup?: (courseIds: string[], on: boolean) => void;
    onPick?: (courseId: string) => void;
    disabledIds?: Set<string>;
    disabledLabel?: string;
    /**
     * The row currently being acted on, which spins instead of offering a
     * plus. The answer lands on the row that was clicked, so that is where the
     * wait belongs: a spinner anywhere else leaves the reader unsure which of
     * ninety-nine rows they actually hit.
     */
    busyId?: string | null;
    maxHeight?: string;
}) {
    const [term, setTerm] = useState("");
    const [open, setOpen] = useState<Set<string>>(new Set());
    const groups = useCourseGroups(courses, term);

    const chosen = selected ?? new Set<string>();
    const already = disabledIds ?? new Set<string>();

    function toggleOpen(category: string) {
        setOpen((current) => {
            const next = new Set(current);
            if (next.has(category)) next.delete(category);
            else next.add(category);
            return next;
        });
    }

    return (
        <div className="flex flex-col gap-3 min-h-0">
            <div className="relative shrink-0">
                <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
                <input
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                    placeholder="Search by name or code"
                    className="w-full pl-9 pr-3 py-2 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/25 text-sm"
                />
            </div>

            {groups.length === 0 ? (
                <p className="text-white/40 text-sm py-8 text-center">
                    Nothing matches that.
                </p>
            ) : (
                <div className={`space-y-2 ${maxHeight} overflow-y-auto custom-scrollbar pr-1`}>
                    {groups.map(({ category, courses: list }) => {
                        const isOpen = term.trim() !== "" || open.has(category);
                        const picked = list.filter((c) => chosen.has(c.id)).length;
                        const done = list.filter((c) => already.has(c.id)).length;
                        const all = picked === list.length;

                        return (
                            <div
                                key={category}
                                className="rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden"
                            >
                                <div className="flex items-center gap-2 px-3 py-2.5">
                                    <button
                                        type="button"
                                        onClick={() => toggleOpen(category)}
                                        disabled={term.trim() !== ""}
                                        className="flex items-center gap-2 flex-1 min-w-0 text-left disabled:cursor-default"
                                    >
                                        <ChevronRight
                                            size={15}
                                            className={`text-white/30 shrink-0 transition-transform ${
                                                isOpen ? "rotate-90" : ""
                                            }`}
                                        />
                                        <span className="text-sm font-semibold text-white truncate">
                                            {label(category)}
                                        </span>
                                        <span
                                            className={`text-xs shrink-0 ${
                                                mode === "select" && picked > 0
                                                    ? "text-accent"
                                                    : "text-white/30"
                                            }`}
                                        >
                                            {mode === "select"
                                                ? `${picked} of ${list.length}`
                                                : done > 0
                                                  ? `${done} of ${list.length} assigned`
                                                  : `${list.length}`}
                                        </span>
                                    </button>

                                    {mode === "select" && onSelectGroup && (
                                        <button
                                            type="button"
                                            onClick={() =>
                                                onSelectGroup(
                                                    list.map((c) => c.id),
                                                    !all
                                                )
                                            }
                                            className="text-[11px] shrink-0 px-2.5 py-1 rounded-lg text-white/50 hover:text-white hover:bg-white/10 transition-colors"
                                        >
                                            {all ? "Clear" : "Select all"}
                                        </button>
                                    )}
                                </div>

                                {isOpen && (
                                    <div className="px-2 pb-2 space-y-1">
                                        {list.map((course) => {
                                            const isChosen = chosen.has(course.id);
                                            const isDone = already.has(course.id);
                                            const isBusy = busyId === course.id;
                                            return (
                                                <button
                                                    key={course.id}
                                                    type="button"
                                                    disabled={isDone || isBusy}
                                                    onClick={() =>
                                                        mode === "select"
                                                            ? onToggle?.(course.id)
                                                            : onPick?.(course.id)
                                                    }
                                                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg border text-left transition-colors ${
                                                        isDone
                                                            ? "border-transparent opacity-45 cursor-not-allowed"
                                                            : isChosen
                                                              ? "border-accent/40 bg-accent/10"
                                                              : "border-transparent hover:bg-white/5"
                                                    }`}
                                                >
                                                    {mode === "select" && (
                                                        <span
                                                            className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border ${
                                                                isChosen
                                                                    ? "bg-accent border-accent"
                                                                    : "border-white/25"
                                                            }`}
                                                        >
                                                            {isChosen && (
                                                                <Check
                                                                    size={11}
                                                                    className="text-primary"
                                                                    strokeWidth={3}
                                                                />
                                                            )}
                                                        </span>
                                                    )}

                                                    <span className="font-mono text-[11px] text-white/40 shrink-0 w-16">
                                                        {course.code}
                                                    </span>
                                                    <span className="text-sm text-white flex-1 min-w-0 truncate">
                                                        {course.title}
                                                    </span>

                                                    {course.isRequired && (
                                                        <span className="text-[11px] text-red-300 shrink-0">
                                                            required
                                                        </span>
                                                    )}
                                                    {course.duration > 0 && (
                                                        <span className="text-[11px] text-white/35 shrink-0 flex items-center gap-1">
                                                            <Clock size={10} />
                                                            {hours(course.duration)}
                                                        </span>
                                                    )}

                                                    {mode === "pick" &&
                                                        (isBusy ? (
                                                            <Loader2
                                                                size={15}
                                                                aria-label="Assigning"
                                                                className="shrink-0 text-accent motion-safe:animate-spin"
                                                            />
                                                        ) : isDone ? (
                                                            <span className="text-[11px] font-bold text-green-500 uppercase shrink-0 flex items-center gap-1">
                                                                <CheckCircle size={12} />
                                                                {disabledLabel}
                                                            </span>
                                                        ) : (
                                                            <Plus size={15} className="text-white/40 shrink-0" />
                                                        ))}
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
        </div>
    );
}
