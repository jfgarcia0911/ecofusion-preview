"use client";
import { useState, useEffect, useCallback } from "react";
import { Check, Plus, Trash2, Calendar, ClipboardList, Loader2 } from "lucide-react";
import clsx from "clsx";

interface Task {
    id: string;
    text: string;
    completed: boolean;
    priority: "high" | "medium" | "low";
    dueDate: string | null;
    createdAt: string;
}

function formatDueDate(dueDate: string | null, createdAt: string): string {
    if (!dueDate) {
        // Show relative time based on created date
        const created = new Date(createdAt);
        const now = new Date();
        const diffDays = Math.floor((now.getTime() - created.getTime()) / (1000 * 60 * 60 * 24));

        if (diffDays === 0) return "Today";
        if (diffDays === 1) return "Yesterday";
        return `${diffDays} days ago`;
    }

    const due = new Date(dueDate);
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const dueDay = new Date(due.getFullYear(), due.getMonth(), due.getDate());
    const diffDays = Math.floor((dueDay.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Tomorrow";
    if (diffDays === -1) return "Yesterday";
    if (diffDays < -1) return `${Math.abs(diffDays)} days overdue`;
    if (diffDays <= 7) return `In ${diffDays} days`;
    return due.toLocaleDateString();
}

export default function TaskManager() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTask, setNewTask] = useState("");
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);

    const fetchTasks = useCallback(async () => {
        try {
            const response = await fetch('/api/tasks');
            if (response.ok) {
                const data = await response.json();
                setTasks(data);
            }
        } catch (err) {
            console.error("Error fetching tasks:", err);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchTasks();
    }, [fetchTasks]);

    const addTask = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newTask.trim() || submitting) return;

        setSubmitting(true);
        try {
            const response = await fetch('/api/tasks', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text: newTask, priority: 'medium' }),
            });

            if (response.ok) {
                const task = await response.json();
                setTasks([task, ...tasks]);
                setNewTask("");
            }
        } catch (err) {
            console.error("Error creating task:", err);
        } finally {
            setSubmitting(false);
        }
    };

    const toggleTask = async (id: string) => {
        const task = tasks.find(t => t.id === id);
        if (!task) return;

        // Optimistic update
        setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));

        try {
            const response = await fetch('/api/tasks', {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id, completed: !task.completed }),
            });

            if (!response.ok) {
                // Revert on error
                setTasks(tasks.map(t => t.id === id ? { ...t, completed: task.completed } : t));
            }
        } catch (err) {
            console.error("Error updating task:", err);
            // Revert on error
            setTasks(tasks.map(t => t.id === id ? { ...t, completed: task.completed } : t));
        }
    };

    const deleteTask = async (id: string) => {
        const taskToDelete = tasks.find(t => t.id === id);

        // Optimistic update
        setTasks(tasks.filter(t => t.id !== id));

        try {
            const response = await fetch(`/api/tasks?id=${id}`, {
                method: 'DELETE',
            });

            if (!response.ok && taskToDelete) {
                // Revert on error
                setTasks(prev => [...prev, taskToDelete]);
            }
        } catch (err) {
            console.error("Error deleting task:", err);
            if (taskToDelete) {
                setTasks(prev => [...prev, taskToDelete]);
            }
        }
    };

    return (
        <div className="glass-panel p-6 rounded-2xl h-full flex flex-col">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <ClipboardList className="text-accent" />
                Tasks & Priorities
            </h2>

            <form onSubmit={addTask} className="mb-6 relative">
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Add a new task..."
                    className="w-full bg-black/20 border border-white/10 rounded-xl pl-4 pr-12 py-3 text-white focus:outline-none focus:border-accent/50 transition-colors placeholder:text-white/20"
                    disabled={submitting}
                />
                <button
                    type="submit"
                    disabled={submitting}
                    className="absolute right-2 top-2 p-1.5 bg-accent/20 hover:bg-accent/40 rounded-lg text-accent transition-colors cursor-pointer disabled:opacity-50"
                >
                    {submitting ? <Loader2 size={20} className="animate-spin" /> : <Plus size={20} />}
                </button>
            </form>

            <div className="space-y-3 overflow-y-auto pr-2 custom-scrollbar flex-1">
                {loading ? (
                    <div className="flex items-center justify-center py-8">
                        <Loader2 className="animate-spin text-accent" size={24} />
                    </div>
                ) : tasks.length === 0 ? (
                    <div className="text-center py-8 text-white/50">
                        <p className="text-sm">No tasks yet. Add your first task above.</p>
                    </div>
                ) : (
                    tasks.map(task => (
                        <div key={task.id} className={clsx("group flex items-center gap-3 p-3 rounded-xl transition-all border border-transparent",
                            task.completed ? "bg-white/5 opacity-50" : "bg-white/5 hover:bg-white/10 hover:border-white/10"
                        )}>
                            <button
                                onClick={() => toggleTask(task.id)}
                                className={clsx("w-6 h-6 rounded-full border flex items-center justify-center transition-all cursor-pointer",
                                    task.completed ? "bg-accent border-accent text-black" : "border-white/20 group-hover:border-accent"
                                )}
                            >
                                {task.completed && <Check size={14} strokeWidth={3} />}
                            </button>

                            <div className="flex-1">
                                <p className={clsx("text-sm font-medium transition-colors", task.completed ? "text-white/50 line-through" : "text-white")}>
                                    {task.text}
                                </p>
                                <div className="flex items-center gap-2 mt-1">
                                    <div className={clsx("w-2 h-2 rounded-full",
                                        task.priority === "high" ? "bg-red-500" : task.priority === "medium" ? "bg-yellow-500" : "bg-blue-500"
                                    )} />
                                    <span className="text-xs text-white/40 flex items-center gap-1">
                                        <Calendar size={10} /> {formatDueDate(task.dueDate, task.createdAt)}
                                    </span>
                                </div>
                            </div>

                            <button
                                onClick={() => deleteTask(task.id)}
                                className="opacity-0 group-hover:opacity-100 text-red-400 hover:bg-red-500/20 p-2 rounded-lg transition-all cursor-pointer"
                            >
                                <Trash2 size={16} />
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
