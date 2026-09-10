"use client";

import { useEffect, useMemo, useState } from "react";
import { ChevronDown, ChevronRight, Search, Check } from "lucide-react";
import Modal from "@/components/ui/Modal";
import { useToast } from "@/components/ui/Toast";
import { groupByCategory, hours } from "@/lib/course-groups";

interface AssignableCourse {
    id: string;
    code: string;
    title: string;
    category: string;
    duration: number;
    isRequired: boolean;
}

/**
 * Puts a course in front of the person answerable for a business.
 *
 * Assigning is not the same as loading. Loading decides what a business may
 * open at all; this says which of those its owner is expected to work through,
 * with a date if there is one. Only what the business already holds is
 * offered, so nothing here can point at a class it cannot reach.
 *
 * It assigns to the owner and to nobody else. Training a customer's employees
 * over their head is the owner's call to make, not EcoFusion's - what staff can
 * do is put the course in front of the person who decides.
 */
export default function AssignCoursesModal({
    business,
    onClose,
}: {
    business: { id: string; name: string } | null;
    onClose: () => void;
}) {
    const [owner, setOwner] = useState<{ name: string | null; email: string } | null>(null);
    const [courses, setCourses] = useState<AssignableCourse[]>([]);
    const [assignedIds, setAssignedIds] = useState<Set<string>>(new Set());
    const [selected, setSelected] = useState<Set<string>>(new Set());
    const [open, setOpen] = useState<Set<string>>(new Set());
    const [search, setSearch] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [priority, setPriority] = useState("normal");
    const [loading, setLoading] = useState(false);
    const [saving, setSaving] = useState(false);
    const toast = useToast();

    useEffect(() => {
        if (!business) return;
        let cancelled = false;

        setSelected(new Set());
        setOpen(new Set());
        setSearch("");
        setDueDate("");
        setPriority("normal");
        setLoading(true);

        (async () => {
            try {
                const res = await fetch(
                    `/api/admin/course-assignments?organizationId=${encodeURIComponent(business.id)}`
                );
                if (!res.ok) {
                    toast.error((await res.json()).error ?? "Could not load that course list");
                    return;
                }
                const data = await res.json();
                if (cancelled) return;
                setOwner(data.owner);
                setCourses(data.courses ?? []);
                setAssignedIds(new Set<string>(data.assignedCourseIds ?? []));
            } catch {
                if (!cancelled) toast.error("Could not load that course list");
            } finally {
                if (!cancelled) setLoading(false);
            }
        })();

        return () => {
            cancelled = true;
        };
    }, [business, toast]);

    const term = search.trim().toLowerCase();

    const groups = useMemo(() => {
        const matching = courses.filter(
            (course) =>
                term === "" ||
                course.title.toLowerCase().includes(term) ||
                course.code.toLowerCase().includes(term)
        );
        return groupByCategory(matching);
    }, [courses, term]);

    function toggle(courseId: string) {
        if (assignedIds.has(courseId)) return;
        setSelected((current) => {
            const next = new Set(current);
            if (next.has(courseId)) next.delete(courseId);
            else next.add(courseId);
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

    async function assign() {
        if (!business || selected.size === 0) return;
        setSaving(true);
        try {
            const res = await fetch("/api/admin/course-assignments", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    organizationId: business.id,
                    courseIds: [...selected],
                    dueDate: dueDate || null,
                    priority,
                }),
            });
            const data = await res.json();
            if (!res.ok) {
                toast.error(data.error ?? "Could not assign those courses");
                return;
            }
            toast.success(
                `${data.assigned} assigned to ${data.owner.name ?? data.owner.email}`,
                data.skipped
                    ? { description: `${data.skipped} were already assigned and were left alone.` }
                    : undefined
            );
            onClose();
        } catch {
            toast.error("Could not assign those courses");
        } finally {
            setSaving(false);
        }
    }

    const ownerLabel = owner ? owner.name ?? owner.email : null;

    return (
        <Modal
            isOpen={business !== null}
            onClose={onClose}
            title={business ? `Assign courses in ${business.name}` : "Assign courses"}
            size="lg"
        >
            <div className="flex flex-col gap-4">
                <p className="text-sm text-white/50 leading-relaxed">
                    {ownerLabel ? (
                        <>
                            Assigns to <strong className="text-white/80">{ownerLabel}</strong>, who
                            owns this business. They decide what reaches their own staff. Only the
                            classes this business already carries are listed.
                        </>
                    ) : (
                        "This business has no owner, so there is nobody to assign to yet."
                    )}
                </p>

                {owner && (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <label className="flex flex-col gap-1.5 sm:col-span-1">
                                <span className="text-xs text-white/50">
                                    Due <span className="text-white/25">(optional)</span>
                                </span>
                                <input
                                    type="date"
                                    value={dueDate}
                                    onChange={(e) => setDueDate(e.target.value)}
                                    className="px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm [color-scheme:dark]"
                                />
                            </label>

                            <label className="flex flex-col gap-1.5 sm:col-span-1">
                                <span className="text-xs text-white/50">Priority</span>
                                <select
                                    value={priority}
                                    onChange={(e) => setPriority(e.target.value)}
                                    className="px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm"
                                >
                                    <option value="low" className="bg-neutral-900">Low</option>
                                    <option value="normal" className="bg-neutral-900">Normal</option>
                                    <option value="high" className="bg-neutral-900">High</option>
                                </select>
                            </label>

                            <label className="flex flex-col gap-1.5 sm:col-span-1">
                                <span className="text-xs text-white/50">Find a class</span>
                                <span className="relative">
                                    <Search
                                        size={14}
                                        className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30"
                                    />
                                    <input
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                        placeholder="Title or code"
                                        className="w-full pl-9 pr-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/25 text-sm"
                                    />
                                </span>
                            </label>
                        </div>

                        <div className="max-h-80 overflow-y-auto custom-scrollbar rounded-xl border border-white/10">
                            {loading ? (
                                <p className="text-white/40 text-sm py-8 text-center">
                                    Loading classes...
                                </p>
                            ) : groups.length === 0 ? (
                                <p className="text-white/40 text-sm py-8 text-center">
                                    {courses.length === 0
                                        ? "This business carries no classes yet. Load some first."
                                        : "No classes match that."}
                                </p>
                            ) : (
                                groups.map(({ category, courses: list }) => {
                                    const isOpen = open.has(category) || term !== "";
                                    const chosen = list.filter((c) => selected.has(c.id)).length;
                                    return (
                                        <div key={category} className="border-b border-white/5 last:border-0">
                                            <button
                                                type="button"
                                                onClick={() => toggleOpen(category)}
                                                className="w-full flex items-center gap-2 px-4 py-2.5 hover:bg-white/[0.03] transition-colors"
                                            >
                                                {isOpen ? (
                                                    <ChevronDown size={14} className="text-white/40 shrink-0" />
                                                ) : (
                                                    <ChevronRight size={14} className="text-white/40 shrink-0" />
                                                )}
                                                <span className="text-sm text-white capitalize flex-1 text-left">
                                                    {category}
                                                </span>
                                                <span className="text-xs text-white/35">
                                                    {chosen > 0 && `${chosen} chosen · `}
                                                    {list.length}
                                                </span>
                                            </button>

                                            {isOpen &&
                                                list.map((course) => {
                                                    const already = assignedIds.has(course.id);
                                                    return (
                                                        <label
                                                            key={course.id}
                                                            className={`flex items-center gap-3 pl-10 pr-4 py-2 ${
                                                                already
                                                                    ? "opacity-45"
                                                                    : "cursor-pointer hover:bg-white/[0.03]"
                                                            }`}
                                                        >
                                                            <input
                                                                type="checkbox"
                                                                disabled={already}
                                                                checked={already || selected.has(course.id)}
                                                                onChange={() => toggle(course.id)}
                                                                className="w-4 h-4 rounded bg-white/10 border-white/20 shrink-0"
                                                            />
                                                            <span className="min-w-0 flex-1">
                                                                <span className="block text-sm text-white truncate">
                                                                    {course.title}
                                                                </span>
                                                                <span className="block text-xs text-white/35 truncate">
                                                                    {course.code}
                                                                    {course.duration ? ` · ${hours(course.duration)}` : ""}
                                                                    {course.isRequired ? " · required" : ""}
                                                                </span>
                                                            </span>
                                                            {already && (
                                                                <span className="text-[11px] text-white/40 flex items-center gap-1 shrink-0">
                                                                    <Check size={12} />
                                                                    assigned
                                                                </span>
                                                            )}
                                                        </label>
                                                    );
                                                })}
                                        </div>
                                    );
                                })
                            )}
                        </div>
                    </>
                )}

                <div className="flex items-center gap-3 pt-1">
                    <button
                        type="button"
                        onClick={assign}
                        disabled={saving || !owner || selected.size === 0}
                        className="px-6 py-2 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90 disabled:opacity-50"
                    >
                        {saving
                            ? "Assigning..."
                            : selected.size > 0
                              ? `Assign ${selected.size}`
                              : "Assign"}
                    </button>
                    <button
                        type="button"
                        onClick={onClose}
                        className="px-4 py-2 text-white/60 hover:text-white rounded-lg"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </Modal>
    );
}
