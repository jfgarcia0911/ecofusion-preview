"use client";

import { useEffect, useState } from "react";
import { BookOpen, Check } from "lucide-react";
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
 * Chooses which of EcoFusion's classes a business carries.
 *
 * The whole selection is saved at once rather than a course at a time, so what
 * is on screen when Save is pressed is what the business ends up with. Unticking a
 * class takes it out of that business's academy; it does not touch anyone's record
 * of having completed it.
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
    const [loading, setLoading] = useState(false);
    const [saving, setSaving] = useState(false);
    const toast = useToast();

    useEffect(() => {
        if (!business) return;
        let cancelled = false;

        (async () => {
            setLoading(true);
            try {
                const [catalogue, held] = await Promise.all([
                    fetch("/api/admin/courses").then((r) => r.json()),
                    fetch(`/api/admin/course-grants?organizationId=${business.id}`).then((r) => r.json()),
                ]);
                if (cancelled) return;
                setCourses(catalogue.courses ?? []);
                setSelected(new Set<string>(held.courseIds ?? []));
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

    function toggle(courseId: string) {
        setSelected((current) => {
            const next = new Set(current);
            if (next.has(courseId)) next.delete(courseId);
            else next.add(courseId);
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
            size="lg"
        >
            <p className="text-sm text-white/50 mb-4">
                Tick the EcoFusion classes this business should carry. They stay ours: corrections
                reach every business holding them, and the business cannot edit them. Classes the business
                wrote itself are not listed here and are not affected.
            </p>

            {loading ? (
                <p className="text-white/40 text-sm py-8 text-center">Loading classes...</p>
            ) : courses.length === 0 ? (
                <p className="text-white/40 text-sm py-8 text-center">
                    There are no EcoFusion classes yet.
                </p>
            ) : (
                <div className="space-y-1.5 max-h-[45vh] overflow-y-auto custom-scrollbar pr-1">
                    {courses.map((course) => {
                        const on = selected.has(course.id);
                        return (
                            <button
                                key={course.id}
                                type="button"
                                onClick={() => toggle(course.id)}
                                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl border text-left transition-colors ${
                                    on
                                        ? "border-accent/40 bg-accent/10"
                                        : "border-white/10 bg-white/[0.03] hover:bg-white/[0.06]"
                                }`}
                            >
                                <span
                                    className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border ${
                                        on ? "bg-accent border-accent" : "border-white/25"
                                    }`}
                                >
                                    {on && <Check size={11} className="text-primary" strokeWidth={3} />}
                                </span>
                                <BookOpen size={15} className="text-white/30 shrink-0" />
                                <span className="flex-1 min-w-0">
                                    <span className="text-sm text-white block truncate">
                                        {course.title}
                                    </span>
                                    <span className="text-xs text-white/40">
                                        {course.code} · {course.category} · {course.lessonCount}{" "}
                                        {course.lessonCount === 1 ? "lesson" : "lessons"}
                                    </span>
                                </span>
                                {!course.isActive && (
                                    <span className="text-[11px] text-white/30 shrink-0">retired</span>
                                )}
                            </button>
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
                <span className="ml-auto text-xs text-white/30">
                    {selected.size} selected
                </span>
            </div>
        </Modal>
    );
}
