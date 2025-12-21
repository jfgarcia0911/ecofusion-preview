"use client";
import Link from "next/link";
import { BookOpen, Search, Filter, Clock, Star } from "lucide-react";
import { COURSES } from "@/lib/data/lms-seed";
import { useState } from "react";

export default function CatalogPage() {
    const [filter, setFilter] = useState("All");
    const [search, setSearch] = useState("");

    const filteredCourses = COURSES.filter(c =>
        (filter === "All" || c.level === filter) &&
        (c.title.toLowerCase().includes(search.toLowerCase()) || c.description.toLowerCase().includes(search.toLowerCase()))
    );

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                    Course Catalog
                </h1>
                <p className="text-white/50 mt-1">Explore our library of sustainable agriculture courses.</p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white/5 p-4 rounded-2xl border border-white/5">
                <div className="relative w-full md:w-96">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" size={16} />
                    <input
                        type="text"
                        placeholder="Search courses..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full bg-black/20 border border-white/5 rounded-xl pl-10 pr-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-accent/50 transition-all"
                    />
                </div>
                <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
                    {["All", "Foundational", "Intermediate", "Advanced", "Specialist", "Master"].map(lvl => (
                        <button
                            key={lvl}
                            onClick={() => setFilter(lvl)}
                            className={`px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap transition-colors ${filter === lvl ? "bg-accent text-primary" : "bg-white/5 text-white/70 hover:bg-white/10"}`}
                        >
                            {lvl}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredCourses.length === 0 ? (
                    <div className="col-span-full text-center py-20 text-white/30">
                        No courses found matching your criteria.
                    </div>
                ) : filteredCourses.map(course => (
                    <div key={course.id} className="glass-card p-0 overflow-hidden group hover:-translate-y-1 transition-transform duration-300 flex flex-col h-full">
                        <div className="h-40 bg-white/5 relative flex items-center justify-center">
                            <BookOpen size={48} className="text-white/10" />
                            <div className="absolute top-4 left-4 flex gap-2">
                                <span className="px-2 py-1 rounded bg-black/50 backdrop-blur text-xs font-bold text-white uppercase tracking-wider">{course.code}</span>
                            </div>
                        </div>
                        <div className="p-6 space-y-4 flex-1 flex flex-col">
                            <div className="flex-1">
                                <h4 className="text-lg font-bold text-white line-clamp-2">{course.title}</h4>
                                <p className="text-sm text-white/50 line-clamp-3 mt-2">{course.description}</p>
                            </div>

                            <div className="flex flex-wrap gap-2 mt-2">
                                {course.tags.map(tag => (
                                    <span key={tag} className="text-[10px] px-2 py-1 rounded bg-white/5 text-white/60 border border-white/5">{tag}</span>
                                ))}
                            </div>

                            <div className="flex items-center justify-between text-xs text-white/40 border-t border-white/5 pt-4 mt-auto">
                                <span className="flex items-center gap-1"><Clock size={12} /> {course.duration}</span>
                                <span className="font-bold text-accent">${course.price}</span>
                            </div>
                            <Link href={`/academy/course/${course.id}`} className="block w-full text-center py-2 rounded-lg bg-accent/10 hover:bg-accent/20 text-accent text-sm font-bold border border-accent/20 transition-colors">
                                Start Learning
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
