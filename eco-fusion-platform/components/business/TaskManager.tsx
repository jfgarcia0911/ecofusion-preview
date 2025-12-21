"use client";
import { useState } from "react";
import { Check, Plus, Trash2, Calendar, ClipboardList } from "lucide-react";
import clsx from "clsx";

interface Task {
    id: string;
    text: string;
    completed: boolean;
    priority: "high" | "medium" | "low";
    dueDate: string;
}

export default function TaskManager() {
    const [tasks, setTasks] = useState<Task[]>([
        { id: '1', text: "Review water quality log for Zone A", completed: false, priority: "high", dueDate: "Today" },
        { id: '2', text: "Order new filter pads", completed: true, priority: "medium", dueDate: "Yesterday" },
        { id: '3', text: "Schedule team meeting", completed: false, priority: "low", dueDate: "Tomorrow" },
        { id: '4', text: "Calibrate pH sensors", completed: false, priority: "high", dueDate: "Today" },
    ]);
    const [newTask, setNewTask] = useState("");

    const addTask = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newTask.trim()) return;
        setTasks([...tasks, {
            id: Date.now().toString(),
            text: newTask,
            completed: false,
            priority: "medium",
            dueDate: "Today"
        }]);
        setNewTask("");
    };

    const toggleTask = (id: string) => {
        setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
    };

    const deleteTask = (id: string) => {
        setTasks(tasks.filter(t => t.id !== id));
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
                />
                <button type="submit" className="absolute right-2 top-2 p-1.5 bg-accent/20 hover:bg-accent/40 rounded-lg text-accent transition-colors cursor-pointer">
                    <Plus size={20} />
                </button>
            </form>

            <div className="space-y-3 overflow-y-auto pr-2 custom-scrollbar flex-1">
                {tasks.map(task => (
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
                                    <Calendar size={10} /> {task.dueDate}
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
                ))}
            </div>
        </div>
    );
}
