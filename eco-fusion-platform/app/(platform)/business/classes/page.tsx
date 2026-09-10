"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { GraduationCap, ShieldAlert } from "lucide-react";
import { useToast } from "@/components/ui/Toast";
import ClassChooser, { type ChoosableCourse } from "@/components/training/ClassChooser";
import { BusinessClassesSkeleton } from "@/components/skeletons/PageSkeletons";

/**
 * The classes this business carries, chosen by its owner.
 *
 * Choosing puts a class in the business's academy, where its people can open
 * it and where Training Management can assign it. It does not assign anything
 * to anybody by itself: carrying a class and requiring somebody to take it are
 * separate decisions, and the second is made on the Training Management screen.
 *
 * Unticking a class takes it out of the academy. Anyone who already finished
 * it keeps that record.
 */
export default function BusinessClassesPage() {
    const [courses, setCourses] = useState<ChoosableCourse[]>([]);
    const [saved, setSaved] = useState<Set<string>>(new Set());
    const [chosen, setChosen] = useState<Set<string>>(new Set());
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [refused, setRefused] = useState(false);
    const toast = useToast();

    useEffect(() => {
        let cancelled = false;
        (async () => {
            try {
                const res = await fetch("/api/training/grants");
                if (res.status === 403) {
                    if (!cancelled) setRefused(true);
                    return;
                }
                const data = await res.json();
                if (cancelled) return;
                const ids = new Set<string>(data.courseIds ?? []);
                setCourses(data.courses ?? []);
                setSaved(ids);
                setChosen(new Set(ids));
            } catch {
                if (!cancelled) toast.error("Could not load the classes");
            } finally {
                if (!cancelled) setLoading(false);
            }
        })();
        return () => {
            cancelled = true;
        };
    }, [toast]);

    async function save() {
        setSaving(true);
        try {
            const res = await fetch("/api/training/grants", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ courseIds: [...chosen] }),
            });
            if (!res.ok) {
                toast.error((await res.json()).error ?? "Could not save your classes");
                return;
            }
            const { loaded, unloaded } = await res.json();
            toast.success(
                loaded || unloaded
                    ? `${loaded} added, ${unloaded} removed`
                    : "Your classes were already exactly those"
            );
            setSaved(new Set(chosen));
        } finally {
            setSaving(false);
        }
    }

    if (loading) return <BusinessClassesSkeleton />;

    if (refused) {
        return (
            <div className="max-w-lg mx-auto mt-20 text-center">
                <ShieldAlert className="mx-auto text-white/30 mb-4" size={32} />
                <h1 className="text-xl font-bold text-white mb-2">Chosen by the owner</h1>
                <p className="text-white/50 text-sm">
                    Which classes this business carries is the owner&apos;s decision. You can take
                    any of them from the{" "}
                    <Link href="/academy" className="text-accent hover:underline">
                        Academy
                    </Link>
                    .
                </p>
            </div>
        );
    }

    return (
        <div className="max-w-4xl space-y-6">
            <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent flex items-center gap-3">
                    <GraduationCap className="text-accent" />
                    Classes
                </h1>
                <p className="text-white/50 mt-1 max-w-2xl">
                    Choose which EcoFusion classes your business carries. Chosen classes appear in
                    your Academy, and can be assigned to your team from Training Management.
                </p>
            </div>

            <ClassChooser
                heading="EcoFusion classes"
                courses={courses}
                saved={saved}
                chosen={chosen}
                onChange={setChosen}
                loading={false}
                saving={saving}
                onSave={save}
            />
        </div>
    );
}
