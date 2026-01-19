"use client";
import { useParams } from "next/navigation";
import { BUSINESS_PHASES } from "@/lib/constants";
import { DollarSign, AlertCircle, Plus, Trash2, Check } from "lucide-react";
import KpiCard from "@/components/widgets/KpiCard";
import PhaseSettingsModal from "@/components/modals/PhaseSettingsModal";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useState, useEffect, useCallback } from "react";
import clsx from "clsx";

// Mock Data for graphs (would be dynamic based on ID in real app)
const mockRevenueData = [
    { name: 'Week 1', revenue: 1200 },
    { name: 'Week 2', revenue: 1800 },
    { name: 'Week 3', revenue: 1500 },
    { name: 'Week 4', revenue: 2200 },
];

interface Task {
    id: string;
    text: string;
    completed: boolean;
    assignee: string | null;
}

interface Employee {
    id: string;
    name: string;
    role: string;
    status: string;
}

export default function PhaseDetailPage() {
    const params = useParams();
    const id = params?.id as string | undefined;
    const phase = BUSINESS_PHASES.find(p => p.id === id);

    const [tasks, setTasks] = useState<Task[]>([]);
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [newTask, setNewTask] = useState("");
    const [assignee, setAssignee] = useState("");
    const [loading, setLoading] = useState(true);
    const [settingsOpen, setSettingsOpen] = useState(false);

    const fetchTasks = useCallback(async () => {
        if (!id) return;
        try {
            const response = await fetch(`/api/phases/${id}/tasks`);
            if (response.ok) {
                const data = await response.json();
                setTasks(data);
            }
        } catch (err) {
            console.error("Error fetching tasks:", err);
        } finally {
            setLoading(false);
        }
    }, [id]);

    const fetchEmployees = useCallback(async () => {
        try {
            const response = await fetch("/api/employees");
            if (response.ok) {
                const data = await response.json();
                setEmployees(data);
            }
        } catch (err) {
            console.error("Error fetching employees:", err);
        }
    }, []);

    useEffect(() => {
        fetchTasks();
        fetchEmployees();
    }, [fetchTasks, fetchEmployees]);

    if (!phase) return <div className="text-white">Phase not found</div>;

    const addTask = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newTask.trim() || !id) return;

        try {
            const response = await fetch(`/api/phases/${id}/tasks`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ text: newTask, assignee: assignee || null }),
            });
            if (response.ok) {
                const task = await response.json();
                setTasks([task, ...tasks]);
                setNewTask("");
                setAssignee("");
            }
        } catch (err) {
            console.error("Error creating task:", err);
        }
    };

    const toggleTask = async (taskId: string, completed: boolean) => {
        if (!id) return;
        try {
            const response = await fetch(`/api/phases/${id}/tasks`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ taskId, completed }),
            });
            if (response.ok) {
                setTasks(tasks.map(t => t.id === taskId ? { ...t, completed } : t));
            }
        } catch (err) {
            console.error("Error updating task:", err);
        }
    };

    const deleteTask = async (taskId: string) => {
        if (!id) return;
        try {
            const response = await fetch(`/api/phases/${id}/tasks?taskId=${taskId}`, {
                method: "DELETE",
            });
            if (response.ok) {
                setTasks(tasks.filter(t => t.id !== taskId));
            }
        } catch (err) {
            console.error("Error deleting task:", err);
        }
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg bg-white/5 ${phase.accent}`}>
                            <phase.icon size={24} />
                        </div>
                        <h1 className="text-3xl font-bold text-white">
                            {phase.title}
                        </h1>
                    </div>
                    <p className="text-white/50 mt-1 ml-11">{phase.description}</p>
                </div>
                <button
                    onClick={() => setSettingsOpen(true)}
                    className="px-4 py-2 border border-white/10 rounded-lg text-sm text-white/70 hover:bg-white/5 transition-colors"
                >
                    Phase Settings
                </button>
            </div>

            {/* Revenue Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 glass-card p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-bold text-white flex items-center gap-2">
                            <DollarSign size={18} className="text-accent" />
                            Revenue Performance
                        </h3>
                        <span className="text-2xl font-bold text-white">$6,700 <span className="text-xs text-white/50 font-normal">this month</span></span>
                    </div>
                    <div className="h-[250px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={mockRevenueData}>
                                <defs>
                                    <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#4ade80" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#4ade80" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                                <XAxis dataKey="name" stroke="rgba(255,255,255,0.3)" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis stroke="rgba(255,255,255,0.3)" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
                                <Tooltip contentStyle={{ backgroundColor: '#0B2219', borderColor: 'rgba(255,255,255,0.1)', color: '#fff' }} />
                                <Area type="monotone" dataKey="revenue" stroke="#4ade80" strokeWidth={3} fillOpacity={1} fill="url(#colorRev)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="space-y-6">
                    <KpiCard title="Monthly OpEx" value="$4,200" change="-2.1%" trend="up" icon={DollarSign} />
                    <div className="glass-card p-6">
                        <h3 className="text-sm font-bold text-white/70 uppercase mb-4">Phase Efficiency</h3>
                        <div className="flex items-center justify-center py-4">
                            <div className="relative w-32 h-32">
                                <svg className="w-full h-full transform -rotate-90">
                                    <circle cx="64" cy="64" r="60" stroke="rgba(255,255,255,0.1)" strokeWidth="8" fill="transparent" />
                                    <circle cx="64" cy="64" r="60" stroke="#4ade80" strokeWidth="8" fill="transparent" strokeDasharray="377" strokeDashoffset="40" strokeLinecap="round" />
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <span className="text-3xl font-bold text-white">89%</span>
                                    <span className="text-[10px] text-white/50 uppercase">Optimization</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Task & Employee Assignment */}
            <div className="glass-panel p-6 rounded-2xl">
                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <AlertCircle className="text-secondary" />
                    Phase Tasks & Assignments
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Task Creation */}
                    <div>
                        <form onSubmit={addTask} className="space-y-4 mb-6">
                            <div>
                                <input
                                    type="text"
                                    value={newTask}
                                    onChange={(e) => setNewTask(e.target.value)}
                                    placeholder="Add new task..."
                                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-secondary/50 transition-colors"
                                />
                            </div>
                            <div className="flex gap-2">
                                <select
                                    value={assignee}
                                    onChange={(e) => setAssignee(e.target.value)}
                                    className="bg-black/20 border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:outline-none flex-1"
                                >
                                    <option value="">Assign to Employee...</option>
                                    {employees.filter(e => e.status === "Active").map(emp => (
                                        <option key={emp.id} value={emp.name}>{emp.name}</option>
                                    ))}
                                </select>
                                <button type="submit" className="px-4 py-2 bg-secondary/20 text-secondary hover:bg-secondary/30 rounded-xl transition-colors font-bold">
                                    <Plus size={20} />
                                </button>
                            </div>
                        </form>

                        <div className="space-y-3">
                            {loading ? (
                                <div className="space-y-3">
                                    {[1, 2].map(i => (
                                        <div key={i} className="p-3 rounded-xl bg-white/5 animate-pulse h-12" />
                                    ))}
                                </div>
                            ) : tasks.length === 0 ? (
                                <div className="text-center py-8 text-white/50">
                                    <p className="text-sm">No tasks yet. Add your first task above.</p>
                                </div>
                            ) : (
                                tasks.map(task => (
                                    <div key={task.id} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors group">
                                        <div className="flex items-center gap-3">
                                            <button
                                                onClick={() => toggleTask(task.id, !task.completed)}
                                                className={clsx(
                                                    "w-5 h-5 rounded border flex items-center justify-center transition-colors",
                                                    task.completed ? "bg-secondary border-secondary" : "border-white/30 hover:border-secondary"
                                                )}
                                            >
                                                {task.completed && <Check size={12} className="text-primary" />}
                                            </button>
                                            <span className={task.completed ? "text-white/30 line-through" : "text-white"}>{task.text}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            {task.assignee && (
                                                <div className="text-xs px-2 py-1 rounded bg-white/10 text-white/70">
                                                    {task.assignee}
                                                </div>
                                            )}
                                            <button
                                                onClick={() => deleteTask(task.id)}
                                                className="p-1 rounded hover:bg-red-500/20 text-white/30 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-all"
                                            >
                                                <Trash2 size={14} />
                                            </button>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>

                    {/* Roster / Status */}
                    <div className="border-l border-white/10 pl-8">
                        <h3 className="text-sm font-bold text-white/50 uppercase mb-4">Assigned Team Members</h3>
                        <div className="space-y-4">
                            {employees.filter(e => e.status === "Active").slice(0, 5).map((emp) => (
                                <div key={emp.id} className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white/50">
                                        {emp.name.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-white">{emp.name}</p>
                                        <p className="text-xs text-secondary">{emp.role}</p>
                                    </div>
                                </div>
                            ))}
                            {employees.length === 0 && (
                                <p className="text-sm text-white/50">No employees found</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Settings Modal */}
            {id && (
                <PhaseSettingsModal
                    isOpen={settingsOpen}
                    onClose={() => setSettingsOpen(false)}
                    phaseId={id}
                    phaseName={phase.title}
                />
            )}
        </div>
    );
}
