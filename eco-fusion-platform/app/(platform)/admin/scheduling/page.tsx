'use client';

import { useState, useEffect } from 'react';
import { SchedulingSkeleton } from '@/components/skeletons/PageSkeletons';
import {
    Calendar,
    Clock,
    Plus,
    Users,
    X,
    ChevronLeft,
    ChevronRight,
    AlertCircle,
    CheckCircle2,
    Loader2,
    Trash2,
    MapPin,
} from 'lucide-react';

interface User {
    id: string;
    name: string | null;
    email: string;
    image: string | null;
    role: string;
}

interface Schedule {
    id: string;
    title: string;
    description: string | null;
    dayOfWeek: number;
    startTime: string;
    endTime: string;
    location: string | null;
    recurring: boolean;
    color: string;
    assignee: User;
}

interface ScheduledTask {
    id: string;
    title: string;
    description: string | null;
    scheduledFor: string;
    dueDate: string;
    priority: string;
    status: string;
    zone: string | null;
    assignee: User;
}

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const COLORS = ['#00FF9D', '#FF6B6B', '#4ECDC4', '#FFE66D', '#95E1D3', '#DDA0DD', '#87CEEB'];

export default function AdminSchedulingPage() {
    const [users, setUsers] = useState<User[]>([]);
    const [schedules, setSchedules] = useState<Schedule[]>([]);
    const [tasks, setTasks] = useState<ScheduledTask[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState<'schedules' | 'tasks'>('schedules');
    const [showScheduleModal, setShowScheduleModal] = useState(false);
    const [showTaskModal, setShowTaskModal] = useState(false);
    const [selectedDay, setSelectedDay] = useState<number | null>(null);

    // Form states
    const [formData, setFormData] = useState({
        assigneeId: '',
        title: '',
        description: '',
        dayOfWeek: 1,
        startTime: '09:00',
        endTime: '17:00',
        location: '',
        color: '#00FF9D',
    });

    const [taskFormData, setTaskFormData] = useState({
        assigneeId: '',
        title: '',
        description: '',
        scheduledFor: '',
        dueDate: '',
        priority: 'medium',
        zone: '',
    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true);
        try {
            const [usersRes, schedulesRes, tasksRes] = await Promise.all([
                fetch('/api/users'),
                fetch('/api/schedules'),
                fetch('/api/scheduled-tasks'),
            ]);

            if (usersRes.ok) setUsers(await usersRes.json());
            if (schedulesRes.ok) setSchedules(await schedulesRes.json());
            if (tasksRes.ok) setTasks(await tasksRes.json());
        } catch (error) {
            console.error('Failed to fetch data:', error);
        }
        setLoading(false);
    };

    const handleCreateSchedule = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await fetch('/api/schedules', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                const newSchedule = await res.json();
                setSchedules([...schedules, newSchedule]);
                setShowScheduleModal(false);
                resetForm();
            }
        } catch (error) {
            console.error('Failed to create schedule:', error);
        }
    };

    const handleCreateTask = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await fetch('/api/scheduled-tasks', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(taskFormData),
            });

            if (res.ok) {
                const newTask = await res.json();
                setTasks([...tasks, newTask]);
                setShowTaskModal(false);
                resetTaskForm();
            }
        } catch (error) {
            console.error('Failed to create task:', error);
        }
    };

    const handleDeleteSchedule = async (id: string) => {
        try {
            const res = await fetch(`/api/schedules?id=${id}`, { method: 'DELETE' });
            if (res.ok) {
                setSchedules(schedules.filter(s => s.id !== id));
            }
        } catch (error) {
            console.error('Failed to delete schedule:', error);
        }
    };

    const resetForm = () => {
        setFormData({
            assigneeId: '',
            title: '',
            description: '',
            dayOfWeek: selectedDay ?? 1,
            startTime: '09:00',
            endTime: '17:00',
            location: '',
            color: '#00FF9D',
        });
    };

    const resetTaskForm = () => {
        setTaskFormData({
            assigneeId: '',
            title: '',
            description: '',
            scheduledFor: '',
            dueDate: '',
            priority: 'medium',
            zone: '',
        });
    };

    const openScheduleModal = (day?: number) => {
        if (day !== undefined) {
            setSelectedDay(day);
            setFormData(prev => ({ ...prev, dayOfWeek: day }));
        }
        setShowScheduleModal(true);
    };

    const getSchedulesForDay = (day: number) => {
        return schedules.filter(s => s.dayOfWeek === day);
    };

    // The same component the route's loading file renders, so the week does
    // not collapse to a spinner between the two.
    if (loading) {
        return <SchedulingSkeleton />;
    }

    return (
        <div className="max-w-7xl mx-auto space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold flex items-center gap-3">
                        <Calendar className="text-accent" />
                        Scheduling Management
                    </h1>
                    <p className="text-white/50 mt-1">Create and manage schedules for your team</p>
                </div>
                <div className="flex gap-3">
                    <button
                        onClick={() => setShowTaskModal(true)}
                        className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl flex items-center gap-2 transition-colors"
                    >
                        <Plus size={18} />
                        Assign Task
                    </button>
                    <button
                        onClick={() => openScheduleModal()}
                        className="px-4 py-2 bg-accent text-black font-semibold rounded-xl flex items-center gap-2 hover:bg-accent/80 transition-colors"
                    >
                        <Plus size={18} />
                        Add Schedule
                    </button>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 border-b border-white/10 pb-2">
                <button
                    onClick={() => setActiveTab('schedules')}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                        activeTab === 'schedules' ? 'bg-accent text-black font-semibold' : 'text-white/70 hover:bg-white/10'
                    }`}
                >
                    Weekly Schedules
                </button>
                <button
                    onClick={() => setActiveTab('tasks')}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                        activeTab === 'tasks' ? 'bg-accent text-black font-semibold' : 'text-white/70 hover:bg-white/10'
                    }`}
                >
                    Assigned Tasks ({tasks.length})
                </button>
            </div>

            {activeTab === 'schedules' ? (
                /* Weekly Calendar View */
                <div className="grid grid-cols-7 gap-2">
                    {DAYS.map((day, index) => (
                        <div key={day} className="bg-black/20 border border-white/10 rounded-xl overflow-hidden">
                            <div
                                className="p-3 bg-black/30 border-b border-white/10 flex items-center justify-between cursor-pointer hover:bg-black/40 transition-colors"
                                onClick={() => openScheduleModal(index)}
                            >
                                <span className="font-semibold text-sm">{day}</span>
                                <Plus size={14} className="text-white/50" />
                            </div>
                            <div className="p-2 space-y-2 min-h-[200px]">
                                {getSchedulesForDay(index).map((schedule) => (
                                    <div
                                        key={schedule.id}
                                        className="p-2 rounded-lg text-xs group relative"
                                        style={{ backgroundColor: schedule.color + '20', borderLeft: `3px solid ${schedule.color}` }}
                                    >
                                        <button
                                            onClick={() => handleDeleteSchedule(schedule.id)}
                                            className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 p-1 hover:bg-red-500/20 rounded transition-all"
                                        >
                                            <X size={12} className="text-red-400" />
                                        </button>
                                        <p className="font-semibold truncate">{schedule.title}</p>
                                        <p className="text-white/50">{schedule.startTime} - {schedule.endTime}</p>
                                        <p className="text-white/70 truncate">{schedule.assignee?.name}</p>
                                        {schedule.location && (
                                            <p className="text-white/40 flex items-center gap-1 mt-1">
                                                <MapPin size={10} /> {schedule.location}
                                            </p>
                                        )}
                                    </div>
                                ))}
                                {getSchedulesForDay(index).length === 0 && (
                                    <p className="text-white/30 text-xs text-center py-8">No schedules</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                /* Tasks List View */
                <div className="space-y-3">
                    {tasks.length === 0 ? (
                        <div className="text-center py-12 text-white/50">
                            <AlertCircle size={48} className="mx-auto mb-4 opacity-50" />
                            <p>No tasks assigned yet</p>
                            <button
                                onClick={() => setShowTaskModal(true)}
                                className="mt-4 px-4 py-2 bg-accent text-black font-semibold rounded-xl"
                            >
                                Assign First Task
                            </button>
                        </div>
                    ) : (
                        tasks.map((task) => (
                            <div
                                key={task.id}
                                className="bg-black/20 border border-white/10 rounded-xl p-4 flex items-center justify-between"
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`w-3 h-3 rounded-full ${
                                        task.priority === 'high' ? 'bg-red-500' :
                                        task.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                                    }`} />
                                    <div>
                                        <h3 className="font-semibold">{task.title}</h3>
                                        <p className="text-sm text-white/50">
                                            Assigned to: {task.assignee?.name} • Due: {new Date(task.dueDate).toLocaleDateString()}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className={`px-3 py-1 rounded-full text-xs ${
                                        task.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                                        task.status === 'in_progress' ? 'bg-blue-500/20 text-blue-400' :
                                        task.status === 'overdue' ? 'bg-red-500/20 text-red-400' :
                                        'bg-yellow-500/20 text-yellow-400'
                                    }`}>
                                        {task.status.replace('_', ' ')}
                                    </span>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            )}

            {/* Schedule Modal */}
            {showScheduleModal && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
                    <div className="bg-[#1a1a2e] border border-white/10 rounded-2xl w-full max-w-md">
                        <div className="p-4 border-b border-white/10 flex items-center justify-between">
                            <h2 className="text-lg font-bold">Add Weekly Schedule</h2>
                            <button onClick={() => setShowScheduleModal(false)} className="p-1 hover:bg-white/10 rounded">
                                <X size={20} />
                            </button>
                        </div>
                        <form onSubmit={handleCreateSchedule} className="p-4 space-y-4">
                            <div>
                                <label className="block text-sm text-white/70 mb-1">Assign To</label>
                                <select
                                    value={formData.assigneeId}
                                    onChange={(e) => setFormData({ ...formData, assigneeId: e.target.value })}
                                    className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent/50"
                                    required
                                >
                                    <option value="">Select user...</option>
                                    {users.map((user) => (
                                        <option key={user.id} value={user.id}>{user.name || user.email}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm text-white/70 mb-1">Title</label>
                                <input
                                    type="text"
                                    value={formData.title}
                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                    className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent/50"
                                    placeholder="e.g., Morning Shift"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-white/70 mb-1">Day of Week</label>
                                <select
                                    value={formData.dayOfWeek}
                                    onChange={(e) => setFormData({ ...formData, dayOfWeek: parseInt(e.target.value) })}
                                    className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent/50"
                                >
                                    {DAYS.map((day, i) => (
                                        <option key={day} value={i}>{day}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-sm text-white/70 mb-1">Start Time</label>
                                    <input
                                        type="time"
                                        value={formData.startTime}
                                        onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
                                        className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent/50"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-white/70 mb-1">End Time</label>
                                    <input
                                        type="time"
                                        value={formData.endTime}
                                        onChange={(e) => setFormData({ ...formData, endTime: e.target.value })}
                                        className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent/50"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm text-white/70 mb-1">Location (optional)</label>
                                <input
                                    type="text"
                                    value={formData.location}
                                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                    className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent/50"
                                    placeholder="e.g., Zone A"
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-white/70 mb-1">Color</label>
                                <div className="flex gap-2">
                                    {COLORS.map((color) => (
                                        <button
                                            key={color}
                                            type="button"
                                            onClick={() => setFormData({ ...formData, color })}
                                            className={`w-8 h-8 rounded-full transition-transform ${formData.color === color ? 'ring-2 ring-white scale-110' : ''}`}
                                            style={{ backgroundColor: color }}
                                        />
                                    ))}
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3 bg-accent text-black font-bold rounded-xl hover:bg-accent/80 transition-colors"
                            >
                                Create Schedule
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* Task Modal */}
            {showTaskModal && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
                    <div className="bg-[#1a1a2e] border border-white/10 rounded-2xl w-full max-w-md">
                        <div className="p-4 border-b border-white/10 flex items-center justify-between">
                            <h2 className="text-lg font-bold">Assign New Task</h2>
                            <button onClick={() => setShowTaskModal(false)} className="p-1 hover:bg-white/10 rounded">
                                <X size={20} />
                            </button>
                        </div>
                        <form onSubmit={handleCreateTask} className="p-4 space-y-4">
                            <div>
                                <label className="block text-sm text-white/70 mb-1">Assign To</label>
                                <select
                                    value={taskFormData.assigneeId}
                                    onChange={(e) => setTaskFormData({ ...taskFormData, assigneeId: e.target.value })}
                                    className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent/50"
                                    required
                                >
                                    <option value="">Select user...</option>
                                    {users.map((user) => (
                                        <option key={user.id} value={user.id}>{user.name || user.email}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm text-white/70 mb-1">Task Title</label>
                                <input
                                    type="text"
                                    value={taskFormData.title}
                                    onChange={(e) => setTaskFormData({ ...taskFormData, title: e.target.value })}
                                    className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent/50"
                                    placeholder="e.g., Check water pH levels"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-white/70 mb-1">Description</label>
                                <textarea
                                    value={taskFormData.description}
                                    onChange={(e) => setTaskFormData({ ...taskFormData, description: e.target.value })}
                                    className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent/50 h-20"
                                    placeholder="Task details..."
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-sm text-white/70 mb-1">Scheduled For</label>
                                    <input
                                        type="datetime-local"
                                        value={taskFormData.scheduledFor}
                                        onChange={(e) => setTaskFormData({ ...taskFormData, scheduledFor: e.target.value })}
                                        className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent/50"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-white/70 mb-1">Due Date</label>
                                    <input
                                        type="datetime-local"
                                        value={taskFormData.dueDate}
                                        onChange={(e) => setTaskFormData({ ...taskFormData, dueDate: e.target.value })}
                                        className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent/50"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm text-white/70 mb-1">Priority</label>
                                <select
                                    value={taskFormData.priority}
                                    onChange={(e) => setTaskFormData({ ...taskFormData, priority: e.target.value })}
                                    className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent/50"
                                >
                                    <option value="low">Low</option>
                                    <option value="medium">Medium</option>
                                    <option value="high">High</option>
                                </select>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3 bg-accent text-black font-bold rounded-xl hover:bg-accent/80 transition-colors"
                            >
                                Assign Task
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
