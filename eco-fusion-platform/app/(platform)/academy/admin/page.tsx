"use client";
import React, { useState } from "react";
import { COURSES } from "@/lib/data/lms-seed";
import { Users, BookOpen, Plus, Search, CheckCircle, MoreHorizontal } from "lucide-react";
import clsx from "clsx";
import { useToast } from "@/components/ui/Toast";

const MOCK_EMPLOYEES = [
    { id: "e1", name: "Sarah Chen", role: "Hydroponics Lead", assigned: ["course-101"] },
    { id: "e2", name: "Michael Ross", role: "Aquaculture Tech", assigned: ["course-102"] },
    { id: "e3", name: "David Kim", role: "Operations Manager", assigned: ["course-101", "course-102"] },
    { id: "e4", name: "Elena Rodriguez", role: "Intern", assigned: [] },
];

export default function AdminLmsPage() {
    const toast = useToast();
    const [selectedEmployee, setSelectedEmployee] = useState<string | null>(null);
    const [isAssignModalOpen, setIsAssignModalOpen] = useState(false);
    const [search, setSearch] = useState("");

    const filteredEmployees = MOCK_EMPLOYEES.filter(e => e.name.toLowerCase().includes(search.toLowerCase()));

    const handleAssign = (courseId: string) => {
        toast.success('Course assigned');
        setIsAssignModalOpen(false);
    };

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                        LMS Administration
                    </h1>
                    <p className="text-white/50 mt-1">Manage learning paths and assignments</p>
                </div>
                <button className="bg-white text-black px-4 py-2 rounded-lg font-bold flex items-center gap-2 hover:bg-white/90 transition-colors">
                    <Plus size={16} /> Create Learning Path
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Employee List */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white/5 border border-white/5 rounded-2xl p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold text-white flex items-center gap-2"><Users size={20} /> Team Progress</h2>
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" size={14} />
                                <input
                                    type="text"
                                    placeholder="Search employees..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="bg-black/20 border border-white/10 rounded-lg pl-9 pr-3 py-1.5 text-sm text-white focus:outline-none"
                                />
                            </div>
                        </div>

                        <div className="space-y-4">
                            {filteredEmployees.map(emp => (
                                <div key={emp.id} className="group p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-colors flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center text-white font-bold">
                                            {emp.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="font-bold text-white">{emp.name}</p>
                                            <p className="text-xs text-white/50">{emp.role}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-6">
                                        <div className="text-right">
                                            <p className="text-xs text-white/50 uppercase font-bold">Courses</p>
                                            <p className="text-white font-mono">{emp.assigned.length} Active</p>
                                        </div>
                                        <button
                                            onClick={() => { setSelectedEmployee(emp.id); setIsAssignModalOpen(true); }}
                                            className="px-3 py-1.5 rounded-lg border border-white/10 hover:bg-white/10 text-xs font-bold text-white transition-colors"
                                        >
                                            Assign Course
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Quick Stats */}
                <div className="space-y-6">
                    <div className="glass-card p-6 rounded-2xl">
                        <h3 className="text-lg font-bold text-white mb-4">Engagement Stats</h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center py-2 border-b border-white/5">
                                <span className="text-white/70">Total Learners</span>
                                <span className="text-xl font-bold text-white">42</span>
                            </div>
                            <div className="flex justify-between items-center py-2 border-b border-white/5">
                                <span className="text-white/70">Completion Rate</span>
                                <span className="text-xl font-bold text-accent">78%</span>
                            </div>
                            <div className="flex justify-between items-center py-2 border-b border-white/5">
                                <span className="text-white/70">Avg. Test Score</span>
                                <span className="text-xl font-bold text-secondary">88%</span>
                            </div>
                            <div className="flex justify-between items-center py-2">
                                <span className="text-white/70">Hours Learned</span>
                                <span className="text-xl font-bold text-white">1,240h</span>
                            </div>
                        </div>
                    </div>

                    <div className="glass-card p-6 rounded-2xl">
                        <h3 className="text-lg font-bold text-white mb-4">Top Performing Courses</h3>
                        <div className="space-y-3">
                            {COURSES.slice(0, 3).map((course, i) => (
                                <div key={course.id} className="flex items-center gap-3">
                                    <div className="text-lg font-bold text-white/20 w-4">#{i + 1}</div>
                                    <div className="flex-1">
                                        <p className="text-sm font-bold text-white line-clamp-1">{course.title}</p>
                                        <p className="text-xs text-white/50">{course.modules.reduce((acc, m) => acc + m.lessons.length, 0)} lessons</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Assignment Modal */}
            {isAssignModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
                    <div className="bg-[#0f1520] border border-white/10 w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl">
                        <div className="p-6 border-b border-white/10">
                            <h3 className="text-xl font-bold text-white">Assign Course</h3>
                            <p className="text-white/50">Assigning to {MOCK_EMPLOYEES.find(e => e.id === selectedEmployee)?.name}</p>
                        </div>
                        <div className="p-4 max-h-96 overflow-y-auto space-y-2">
                            {COURSES.map(course => {
                                const isAssigned = MOCK_EMPLOYEES.find(e => e.id === selectedEmployee)?.assigned.includes(course.id);
                                return (
                                    <button
                                        key={course.id}
                                        disabled={isAssigned}
                                        onClick={() => handleAssign(course.id)}
                                        className={clsx("w-full text-left p-4 rounded-xl border flex justify-between items-center transition-all",
                                            isAssigned ? "bg-white/5 border-white/5 opacity-50 cursor-not-allowed" : "bg-white/5 border-white/10 hover:border-accent hover:bg-accent/10"
                                        )}
                                    >
                                        <div>
                                            <p className="font-bold text-white text-sm">{course.title}</p>
                                            <p className="text-xs text-white/50">{course.level} • {course.duration}</p>
                                        </div>
                                        {isAssigned ? (
                                            <div className="flex items-center gap-1 text-xs font-bold text-green-500 uppercase">
                                                <CheckCircle size={14} /> Assigned
                                            </div>
                                        ) : (
                                            <Plus size={16} className="text-white/50" />
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                        <div className="p-4 bg-white/5 border-t border-white/5 flex justify-end">
                            <button onClick={() => setIsAssignModalOpen(false)} className="text-white/70 hover:text-white px-4 py-2 text-sm font-bold">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
