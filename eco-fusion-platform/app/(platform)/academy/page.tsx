"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BookOpen, Trophy, Clock, Medal, PlayCircle, Star } from "lucide-react";
import { COURSES } from "@/lib/data/lms-seed";
import { useLmsStore } from "@/lib/stores/use-lms-store";

export default function AcademyDashboard() {
    // Hydration safe state - intentional pattern for SSR/client sync
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsClient(true);
    }, []);

    const { xp, completedCourses, getCourseProgress } = useLmsStore();

    // Default to first course if none in progress? For now just pick 101.
    // In future we should track "lastActiveCourseId"
    const inProgressCourseId = "course-101";
    const inProgressCourse = COURSES.find(c => c.id === inProgressCourseId);

    // Calculate percent for the featured course
    const totalLessons = inProgressCourse
        ? inProgressCourse.modules.reduce((acc, m) => acc + m.lessons.length, 0)
        : 0;

    const percentComplete = isClient && inProgressCourse
        ? getCourseProgress(inProgressCourse.id, totalLessons)
        : 0;

    // Calculate total badges
    const totalBadges = isClient ? completedCourses.length : 0;

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                        EcoFusion Academy
                    </h1>
                    <p className="text-white/50 mt-1">Your learning journey starts here.</p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="glass-card px-4 py-2 flex items-center gap-3">
                        <div className="p-2 bg-yellow-500/20 rounded-full text-yellow-400">
                            <Trophy size={16} />
                        </div>
                        <div>
                            <p className="text-xs text-white/50 uppercase font-bold">XP Points</p>
                            <p className="text-lg font-bold text-white">{isClient ? xp.toLocaleString() : "..."}</p>
                        </div>
                    </div>
                    <div className="glass-card px-4 py-2 flex items-center gap-3">
                        <div className="p-2 bg-purple-500/20 rounded-full text-purple-400">
                            <Medal size={16} />
                        </div>
                        <div>
                            <p className="text-xs text-white/50 uppercase font-bold">Badges</p>
                            <p className="text-lg font-bold text-white">{totalBadges}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Continue Learning Hero */}
            {inProgressCourse && (
                <div className="glass-panel p-8 rounded-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                    <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                        <div className="flex-1 space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-wider">
                                <Clock size={12} /> {percentComplete > 0 ? "Continue Learning" : "Start Learning"}
                            </div>
                            <h2 className="text-3xl font-bold text-white">{inProgressCourse.title}</h2>
                            <p className="text-white/70 max-w-xl">{inProgressCourse.description}</p>

                            <div className="space-y-2 max-w-md">
                                <div className="flex justify-between text-sm text-white/70">
                                    <span>Progress</span>
                                    <span>{percentComplete}%</span>
                                </div>
                                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full bg-accent transition-all duration-500" style={{ width: `${percentComplete}%` }} />
                                </div>
                                <p className="text-xs text-white/40">{Math.round((percentComplete / 100) * totalLessons)} of {totalLessons} lessons completed</p>
                            </div>

                            <div className="pt-4">
                                <Link href={`/academy/course/${inProgressCourse.id}`} className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-xl hover:bg-white/90 transition-colors">
                                    <PlayCircle size={20} /> {percentComplete > 0 ? "Resume Course" : "Start Course"}
                                </Link>
                            </div>
                        </div>

                        {/* Decorative Course Art */}
                        <div className="w-64 h-40 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-xl border border-white/10 flex items-center justify-center transform rotate-3 group-hover:rotate-0 transition-transform duration-500">
                            <BookOpen size={64} className="text-white/20" />
                        </div>
                    </div>
                </div>
            )}

            {/* Catalog Preview */}
            <div>
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-white">Recommended For You</h3>
                    <Link href="/academy/catalog" className="text-sm text-accent hover:text-white transition-colors">Browse Full Catalog</Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {COURSES.slice(0, 6).map(course => (
                        <div key={course.id} className="glass-card p-0 overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                            <div className="h-40 bg-white/5 relative flex items-center justify-center">
                                <BookOpen size={48} className="text-white/10" />
                                <div className="absolute top-4 left-4 flex gap-2">
                                    <span className="px-2 py-1 rounded bg-black/50 backdrop-blur text-xs font-bold text-white">{course.level}</span>
                                </div>
                            </div>
                            <div className="p-6 space-y-4">
                                <div>
                                    <h4 className="text-lg font-bold text-white line-clamp-1">{course.title}</h4>
                                    <p className="text-sm text-white/50 line-clamp-2 mt-1">{course.description}</p>
                                </div>
                                <div className="flex items-center gap-4 text-xs text-white/40 border-t border-white/5 pt-4">
                                    <span className="flex items-center gap-1"><Clock size={12} /> {course.duration}</span>
                                    <span className="flex items-center gap-1"><Star size={12} className="text-yellow-500" /> 4.9</span>
                                </div>
                                <Link href={`/academy/course/${course.id}`} className="block w-full text-center py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white text-sm font-bold border border-white/10 transition-colors">
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
