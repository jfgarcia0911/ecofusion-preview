"use client";

import { useEffect, useMemo, useState } from "react";
import { ChevronRight, Loader2, Search, ShieldAlert, Tag } from "lucide-react";
import { useToast } from "@/components/ui/Toast";
import { groupByCategory } from "@/lib/course-groups";
import {
    formatPrice,
    parsePriceInput,
    priceInputValue,
    priceProblem,
    type CoursePrice,
} from "@/lib/course-price";
import { AgencyCoursePricesSkeleton } from "@/components/skeletons/PageSkeletons";
import { COURSE_PRICES_STANDFIRST } from "./standfirst";

interface PricedCourse {
    id: string;
    code: string;
    title: string;
    category: string;
    isActive: boolean;
    priceCents: CoursePrice;
    lessonCount: number;
    /** How many businesses hold it. */
    holders: number;
}

type Filter = "all" | "unpriced" | "free" | "paid";

/**
 * Setting what EcoFusion's courses cost.
 *
 * Prices are typed as text and only become numbers on save, so a half-typed
 * "12." is not rejected mid-keystroke. A box that cannot be read is outlined
 * and holds the save back until it is fixed or cleared.
 *
 * The master account sets prices; other staff see the list and cannot change
 * it. The route enforces that; this only avoids offering what would be refused.
 */
export default function CoursePricesPage() {
    const [courses, setCourses] = useState<PricedCourse[]>([]);
    const [currency, setCurrency] = useState("usd");
    const [canEdit, setCanEdit] = useState(false);
    const [loading, setLoading] = useState(true);
    const [drafts, setDrafts] = useState<Record<string, string>>({});
    const [levelDrafts, setLevelDrafts] = useState<Record<string, string>>({});
    const [open, setOpen] = useState<Set<string>>(new Set());
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState<Filter>("all");
    const [saving, setSaving] = useState(false);
    const toast = useToast();

    useEffect(() => {
        let cancelled = false;
        (async () => {
            try {
                const res = await fetch("/api/admin/course-prices");
                if (!res.ok) {
                    toast.error("Could not load the course prices");
                    return;
                }
                const data = await res.json();
                if (cancelled) return;
                setCourses(data.courses ?? []);
                setCurrency(data.currency ?? "usd");
                setCanEdit(Boolean(data.canEdit));
            } catch {
                if (!cancelled) toast.error("Could not load the course prices");
            } finally {
                if (!cancelled) setLoading(false);
            }
        })();
        return () => {
            cancelled = true;
        };
    }, [toast]);

    /** The box's text: the draft if one was typed, else the saved price. */
    const textFor = (course: PricedCourse) => drafts[course.id] ?? priceInputValue(course.priceCents);

    /** Each course whose box differs from what is saved, and what it says now. */
    const changes = useMemo(() => {
        const out: { id: string; cents: CoursePrice | undefined; problem: string | null }[] = [];
        for (const course of courses) {
            const draft = drafts[course.id];
            if (draft === undefined) continue;
            const cents = parsePriceInput(draft);
            if (cents === course.priceCents) continue;
            const problem =
                cents === undefined ? "Not a price" : cents === null ? null : priceProblem(cents);
            out.push({ id: course.id, cents, problem });
        }
        return out;
    }, [courses, drafts]);
    const broken = changes.filter((c) => c.problem);
    const brokenIds = new Set(broken.map((c) => c.id));

    const term = search.trim().toLowerCase();
    const visible = courses.filter((course) => {
        if (term && !course.title.toLowerCase().includes(term) && !course.code.toLowerCase().includes(term)) {
            return false;
        }
        if (filter === "unpriced") return course.priceCents === null;
        if (filter === "free") return course.priceCents === 0;
        if (filter === "paid") return (course.priceCents ?? 0) > 0;
        return true;
    });
    const groups = groupByCategory(visible);

    function setDraft(id: string, text: string) {
        setDrafts((current) => ({ ...current, [id]: text }));
    }

    function applyToLevel(category: string, list: PricedCourse[]) {
        const text = levelDrafts[category] ?? "";
        if (parsePriceInput(text) === undefined) {
            toast.error("That is not a price");
            return;
        }
        setDrafts((current) => {
            const next = { ...current };
            list.forEach((course) => (next[course.id] = text));
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
        if (!changes.length || broken.length) return;
        setSaving(true);
        try {
            const prices = Object.fromEntries(changes.map((c) => [c.id, c.cents ?? null]));
            const res = await fetch("/api/admin/course-prices", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ prices }),
            });
            const data = await res.json();
            if (!res.ok) {
                toast.error(data.error ?? "Could not save the prices");
                return;
            }
            // What was saved becomes the baseline, without asking again.
            setCourses((current) =>
                current.map((course) =>
                    course.id in prices ? { ...course, priceCents: prices[course.id] } : course
                )
            );
            setDrafts({});
            toast.success(`Saved ${data.changed} price${data.changed === 1 ? "" : "s"}`);
        } finally {
            setSaving(false);
        }
    }

    if (loading) return <AgencyCoursePricesSkeleton standfirst={COURSE_PRICES_STANDFIRST} />;

    const priced = courses.filter((c) => c.priceCents !== null).length;

    return (
        <div className="pb-24">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-white flex items-center gap-2">
                    <Tag size={22} className="text-accent" />
                    Course Prices
                </h1>
                <p className="text-white/50 mt-1 max-w-2xl text-sm">{COURSE_PRICES_STANDFIRST}</p>
            </div>

            {!canEdit && (
                <p className="mb-4 px-4 py-3 rounded-xl border border-white/10 bg-white/[0.03] text-sm text-white/60 flex items-center gap-2">
                    <ShieldAlert size={15} className="text-white/40" />
                    Only the master account can change prices. You can see them here.
                </p>
            )}

            <div className="flex flex-wrap items-center gap-3 mb-4">
                <div className="relative flex-1 min-w-[14rem]">
                    <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search by name or code"
                        className="w-full pl-9 pr-3 py-2 bg-black/20 border border-white/10 rounded-lg text-sm text-white placeholder:text-white/25"
                    />
                </div>
                <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value as Filter)}
                    className="px-3 py-2 bg-black/20 border border-white/10 rounded-lg text-sm text-white"
                >
                    <option value="all" className="bg-neutral-900">All courses</option>
                    <option value="unpriced" className="bg-neutral-900">Not for sale</option>
                    <option value="free" className="bg-neutral-900">Free</option>
                    <option value="paid" className="bg-neutral-900">Paid</option>
                </select>
                <span className="text-xs text-white/40">
                    {priced} of {courses.length} on sale
                </span>
            </div>

            {groups.length === 0 ? (
                <p className="text-white/40 text-sm py-10 text-center">No courses match.</p>
            ) : (
                <div className="space-y-2">
                    {groups.map(({ category, courses: list }) => {
                        const isOpen = term !== "" || filter !== "all" || open.has(category);
                        const onSale = list.filter((c) => c.priceCents !== null).length;
                        return (
                            <div
                                key={category}
                                className="rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden"
                            >
                                <div className="flex items-center gap-2 px-3 py-2.5">
                                    <button
                                        type="button"
                                        onClick={() => toggleOpen(category)}
                                        className="flex items-center gap-2 flex-1 min-w-0 text-left"
                                    >
                                        <ChevronRight
                                            size={15}
                                            className={`text-white/30 shrink-0 transition-transform ${isOpen ? "rotate-90" : ""}`}
                                        />
                                        <span className="text-sm font-semibold text-white truncate">{category}</span>
                                        <span className="text-xs text-white/35 shrink-0">
                                            {onSale} of {list.length} on sale
                                        </span>
                                    </button>
                                    {canEdit && isOpen && (
                                        <div className="flex items-center gap-1.5 shrink-0">
                                            <input
                                                value={levelDrafts[category] ?? ""}
                                                onChange={(e) =>
                                                    setLevelDrafts((current) => ({ ...current, [category]: e.target.value }))
                                                }
                                                placeholder="0.00"
                                                aria-label={`Price for every course in ${category}`}
                                                className="w-20 px-2 py-1 bg-black/20 border border-white/10 rounded-lg text-xs text-white text-right placeholder:text-white/20"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => applyToLevel(category, list)}
                                                className="text-[11px] px-2.5 py-1 rounded-lg text-white/60 hover:text-white hover:bg-white/10 whitespace-nowrap"
                                            >
                                                Set all
                                            </button>
                                        </div>
                                    )}
                                </div>

                                {isOpen && (
                                    <div className="px-2 pb-2 space-y-1">
                                        {list.map((course) => {
                                            const text = textFor(course);
                                            const changed = drafts[course.id] !== undefined &&
                                                parsePriceInput(text) !== course.priceCents;
                                            const bad = brokenIds.has(course.id);
                                            return (
                                                <div
                                                    key={course.id}
                                                    className="flex items-center gap-3 px-3 py-1.5 rounded-lg hover:bg-white/[0.03]"
                                                >
                                                    <span className="font-mono text-[11px] text-white/40 shrink-0 w-16">
                                                        {course.code}
                                                    </span>
                                                    <span className="text-sm text-white flex-1 min-w-0 truncate">
                                                        {course.title}
                                                        {!course.isActive && (
                                                            <span className="ml-2 text-[11px] text-white/25">retired</span>
                                                        )}
                                                    </span>
                                                    <span className="text-[11px] text-white/35 shrink-0 hidden md:inline w-24 text-right">
                                                        {course.holders} business{course.holders === 1 ? "" : "es"}
                                                    </span>
                                                    <span className="text-[11px] shrink-0 w-20 text-right hidden sm:inline">
                                                        {changed ? (
                                                            <span className="text-amber-300/90 font-bold uppercase text-[10px]">changed</span>
                                                        ) : course.priceCents === null ? (
                                                            <span className="text-white/25">not for sale</span>
                                                        ) : (
                                                            <span className="text-white/45">{formatPrice(course.priceCents, currency)}</span>
                                                        )}
                                                    </span>
                                                    <div className="relative shrink-0">
                                                        <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[11px] text-white/30 uppercase">
                                                            {currency}
                                                        </span>
                                                        <input
                                                            value={text}
                                                            onChange={(e) => setDraft(course.id, e.target.value)}
                                                            disabled={!canEdit}
                                                            placeholder="-"
                                                            inputMode="decimal"
                                                            aria-label={`Price of ${course.code}`}
                                                            title={bad ? changes.find((c) => c.id === course.id)?.problem ?? undefined : undefined}
                                                            className={`w-28 pl-11 pr-2.5 py-1.5 bg-black/20 border rounded-lg text-sm text-white text-right tabular-nums placeholder:text-white/20 disabled:opacity-60 ${
                                                                bad ? "border-red-400/60" : changed ? "border-amber-300/40" : "border-white/10"
                                                            }`}
                                                        />
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            )}

            {canEdit && changes.length > 0 && (
                <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-30 w-[min(40rem,calc(100%-3rem))] rounded-2xl border border-white/10 bg-neutral-900/95 backdrop-blur shadow-2xl px-5 py-3.5 flex items-center gap-3">
                    <div className="flex-1 min-w-0">
                        <p className="text-sm text-white">
                            {changes.length} price{changes.length === 1 ? "" : "s"} changed
                        </p>
                        {broken.length > 0 && (
                            <p className="text-[11px] text-red-300/90">
                                {broken.length} can&apos;t be saved: {broken[0].problem?.toLowerCase()}
                            </p>
                        )}
                    </div>
                    <button
                        type="button"
                        onClick={() => setDrafts({})}
                        disabled={saving}
                        className="px-3 py-2 text-white/60 hover:text-white rounded-lg text-sm"
                    >
                        Discard
                    </button>
                    <button
                        type="button"
                        onClick={save}
                        disabled={saving || broken.length > 0}
                        className="px-5 py-2 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90 disabled:opacity-40 flex items-center gap-2"
                    >
                        {saving && <Loader2 size={15} className="motion-safe:animate-spin" />}
                        {saving ? "Saving..." : "Save prices"}
                    </button>
                </div>
            )}
        </div>
    );
}
