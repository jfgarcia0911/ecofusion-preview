"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BookOpen, Search, Clock, Layers, Star } from "lucide-react";
import clsx from "clsx";

interface CatalogCourse {
    id: string;
    code: string;
    title: string;
    description: string;
    category: string;
    duration: number;
    isRequired: boolean;
    lessonCount: number;
    isOwn: boolean;
}

/**
 * The order the curriculum is meant to be climbed in, which is not alphabetical
 * and not the order a database returns.
 */
const LEVELS = ["Foundational", "Intermediate", "Advanced", "Expert", "Master"];

/** Hours, said the way a person would say them. */
function hours(minutes: number): string {
    if (minutes < 60) return `${minutes} min`;
    const value = minutes / 60;
    return `${Number.isInteger(value) ? value : value.toFixed(1)} hr`;
}

/**
 * Everything this business carries, to browse rather than to be assigned.
 *
 * Reads the catalogue from the database rather than a file compiled into the
 * page. The file version listed courses the business had never been given and
 * whose lessons did not exist, so every card led to a player that could not
 * find them and bounced the reader back to the academy.
 */
export default function CatalogPage() {
    const [courses, setCourses] = useState<CatalogCourse[]>([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState("All");
    const [search, setSearch] = useState("");

    useEffect(() => {
        let cancelled = false;
        (async () => {
            try {
                const res = await fetch("/api/training/catalog");
                if (!res.ok) return;
                const data = await res.json();
                if (!cancelled) setCourses(data.courses ?? []);
            } finally {
                if (!cancelled) setLoading(false);
            }
        })();
        return () => {
            cancelled = true;
        };
    }, []);

    // Only the levels actually present, so a business carrying six foundational
    // classes is not offered four empty filters.
    const levels = [
        "All",
        ...LEVELS.filter((level) => courses.some((c) => c.category === level)),
        ...[...new Set(courses.map((c) => c.category))]
            .filter((category) => !LEVELS.includes(category))
            .sort(),
    ];

    const term = search.trim().toLowerCase();
    const filtered = courses.filter(
        (course) =>
            (filter === "All" || course.category === filter) &&
            (term === "" ||
                course.title.toLowerCase().includes(term) ||
                course.code.toLowerCase().includes(term) ||
                course.description.toLowerCase().includes(term))
    );

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                    Course Catalog
                </h1>
                <p className="text-white/50 mt-1">
                    Everything this business carries. Start any of them whenever you like.
                </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white/5 p-4 rounded-2xl border border-white/5">
                <div className="relative w-full md:w-96">
                    <Search
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30"
                        size={16}
                    />
                    <input
                        type="text"
                        placeholder="Search courses..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full bg-black/20 border border-white/5 rounded-xl pl-10 pr-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-accent/50 transition-all"
                    />
                </div>
                <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
                    {levels.map((level) => (
                        <button
                            key={level}
                            onClick={() => setFilter(level)}
                            className={clsx(
                                "px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap transition-colors",
                                filter === level
                                    ? "bg-accent text-primary"
                                    : "bg-white/5 text-white/70 hover:bg-white/10"
                            )}
                        >
                            {level}
                        </button>
                    ))}
                </div>
            </div>

            {loading ? (
                <p className="text-white/40 text-sm py-20 text-center">Loading the catalogue...</p>
            ) : courses.length === 0 ? (
                <div className="text-center py-20 border border-white/10 rounded-2xl bg-white/[0.02]">
                    <BookOpen className="mx-auto text-white/20 mb-3" size={28} />
                    <p className="text-white/50 text-sm">No classes yet.</p>
                    <p className="text-white/30 text-xs mt-1">
                        EcoFusion loads classes into a business. Ask them for the ones you need.
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filtered.length === 0 ? (
                        <div className="col-span-full text-center py-20 text-white/30">
                            No courses found matching your criteria.
                        </div>
                    ) : (
                        filtered.map((course) => (
                            <div
                                key={course.id}
                                className="glass-card p-0 overflow-hidden group hover:-translate-y-1 transition-transform duration-300 flex flex-col h-full"
                            >
                                <div className="h-40 bg-white/5 relative flex items-center justify-center">
                                    <BookOpen size={48} className="text-white/10" />
                                    <div className="absolute top-4 left-4 flex gap-2">
                                        <span className="px-2 py-1 rounded bg-black/50 backdrop-blur text-xs font-bold text-white uppercase tracking-wider">
                                            {course.code}
                                        </span>
                                    </div>
                                    {course.isRequired && (
                                        <span className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 rounded bg-amber-400/20 text-amber-200 text-[11px] font-bold">
                                            <Star size={10} fill="currentColor" />
                                            Required
                                        </span>
                                    )}
                                </div>
                                <div className="p-6 space-y-4 flex-1 flex flex-col">
                                    <div className="flex-1">
                                        <h4 className="text-lg font-bold text-white line-clamp-2">
                                            {course.title}
                                        </h4>
                                        <p className="text-sm text-white/50 line-clamp-3 mt-2">
                                            {course.description}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mt-2">
                                        <span className="text-[10px] px-2 py-1 rounded bg-white/5 text-white/60 border border-white/5">
                                            {course.category}
                                        </span>
                                        {course.isOwn && (
                                            <span className="text-[10px] px-2 py-1 rounded bg-accent/10 text-accent border border-accent/20">
                                                Yours
                                            </span>
                                        )}
                                    </div>

                                    <div className="flex items-center justify-between text-xs text-white/40 border-t border-white/5 pt-4 mt-auto">
                                        <span className="flex items-center gap-1">
                                            <Clock size={12} /> {hours(course.duration)}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Layers size={12} /> {course.lessonCount}{" "}
                                            {course.lessonCount === 1 ? "lesson" : "lessons"}
                                        </span>
                                    </div>
                                    <Link
                                        href={`/academy/course/${course.id}`}
                                        className="block w-full text-center py-2 rounded-lg bg-accent/10 hover:bg-accent/20 text-accent text-sm font-bold border border-accent/20 transition-colors"
                                    >
                                        Start Learning
                                    </Link>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
}
