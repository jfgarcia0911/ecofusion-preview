'use client';

import { useState, useEffect, useCallback } from 'react';
import { MyScheduleSkeleton } from '@/components/skeletons/PageSkeletons';
import {
    Calendar,
    Clock,
    CheckCircle2,
    AlertCircle,
    Loader2,
    MapPin,
    Bell,
    ChevronRight,
    PlayCircle,
    XCircle,
} from 'lucide-react';

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
    admin: { name: string | null };
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
    creator: { name: string | null };
}

interface Notification {
    id: string;
    title: string;
    message: string;
    type: string;
    read: boolean;
    link: string | null;
    createdAt: string;
}

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default function UserSchedulesPage() {
    const [schedules, setSchedules] = useState<Schedule[]>([]);
    const [tasks, setTasks] = useState<ScheduledTask[]>([]);
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState<'today' | 'week' | 'tasks'>('today');
    const today = new Date().getDay();

    useEffect(() => {
        fetchData();
        // Check for task notifications every minute
        const interval = setInterval(checkTaskNotifications, 60000);
        return () => clearInterval(interval);
    }, []);

    const fetchData = async () => {
        setLoading(true);
        try {
            const [schedulesRes, tasksRes, notificationsRes] = await Promise.all([
                fetch('/api/schedules'),
                fetch('/api/scheduled-tasks'),
                fetch('/api/notifications'),
            ]);

            if (schedulesRes.ok) setSchedules(await schedulesRes.json());
            if (tasksRes.ok) setTasks(await tasksRes.json());
            if (notificationsRes.ok) setNotifications(await notificationsRes.json());
        } catch (error) {
            console.error('Failed to fetch data:', error);
        }
        setLoading(false);
    };

    const checkTaskNotifications = useCallback(() => {
        const now = new Date();
        tasks.forEach(task => {
            if (task.status === 'pending') {
                const scheduledTime = new Date(task.scheduledFor);
                const timeDiff = scheduledTime.getTime() - now.getTime();
                const minutesDiff = timeDiff / (1000 * 60);

                // If task is within 30 minutes and not yet notified
                if (minutesDiff <= 30 && minutesDiff > 0) {
                    // Browser notification
                    if ('Notification' in window && Notification.permission === 'granted') {
                        new Notification(`Task Reminder: ${task.title}`, {
                            body: `Scheduled for ${scheduledTime.toLocaleTimeString()}`,
                            icon: '/favicon.ico',
                        });
                    }
                }
            }
        });
    }, [tasks]);

    // Request notification permission on mount
    useEffect(() => {
        if ('Notification' in window && Notification.permission === 'default') {
            Notification.requestPermission();
        }
    }, []);

    const updateTaskStatus = async (taskId: string, status: string) => {
        try {
            const res = await fetch('/api/scheduled-tasks', {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ taskId, status }),
            });

            if (res.ok) {
                setTasks(tasks.map(t => t.id === taskId ? { ...t, status } : t));
            }
        } catch (error) {
            console.error('Failed to update task:', error);
        }
    };

    const markNotificationRead = async (id: string) => {
        try {
            await fetch('/api/notifications', {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ notificationIds: [id] }),
            });
            setNotifications(notifications.map(n => n.id === id ? { ...n, read: true } : n));
        } catch (error) {
            console.error('Failed to mark notification as read:', error);
        }
    };

    const getTodaySchedules = () => schedules.filter(s => s.dayOfWeek === today);
    const getUpcomingTasks = () => tasks.filter(t => t.status !== 'completed').slice(0, 10);
    const getUnreadNotifications = () => notifications.filter(n => !n.read);

    const formatTime = (time: string) => {
        const [hours, minutes] = time.split(':');
        const h = parseInt(hours);
        const ampm = h >= 12 ? 'PM' : 'AM';
        const hour = h % 12 || 12;
        return `${hour}:${minutes} ${ampm}`;
    };

    const isTaskOverdue = (dueDate: string) => new Date(dueDate) < new Date();
    const isTaskToday = (date: string) => {
        const taskDate = new Date(date);
        const today = new Date();
        return taskDate.toDateString() === today.toDateString();
    };

    // The same component the route's loading file renders. This was a spinner
    // in the middle of an empty screen, so opening the page went from a full
    // placeholder to a bare dot and then to the content.
    if (loading) {
        return <MyScheduleSkeleton />;
    }

    return (
        <div className="max-w-6xl mx-auto space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold flex items-center gap-3">
                        <Calendar className="text-accent" />
                        My Schedule
                    </h1>
                    <p className="text-white/50 mt-1">
                        {DAYS[today]}, {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </p>
                </div>

                {/* Notification Badge */}
                {getUnreadNotifications().length > 0 && (
                    <div className="flex items-center gap-2 px-4 py-2 bg-accent/20 border border-accent/30 rounded-xl">
                        <Bell className="text-accent" size={18} />
                        <span className="text-sm">{getUnreadNotifications().length} new notifications</span>
                    </div>
                )}
            </div>

            {/* Notifications Banner */}
            {getUnreadNotifications().length > 0 && (
                <div className="space-y-2">
                    {getUnreadNotifications().slice(0, 3).map((notification) => (
                        <div
                            key={notification.id}
                            onClick={() => markNotificationRead(notification.id)}
                            className="bg-accent/10 border border-accent/20 rounded-xl p-4 flex items-center justify-between cursor-pointer hover:bg-accent/20 transition-colors"
                        >
                            <div className="flex items-center gap-3">
                                <Bell className="text-accent" size={20} />
                                <div>
                                    <p className="font-semibold">{notification.title}</p>
                                    <p className="text-sm text-white/70">{notification.message}</p>
                                </div>
                            </div>
                            <ChevronRight className="text-white/50" size={20} />
                        </div>
                    ))}
                </div>
            )}

            {/* Tabs */}
            <div className="flex gap-2 border-b border-white/10 pb-2">
                <button
                    onClick={() => setActiveTab('today')}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                        activeTab === 'today' ? 'bg-accent text-black font-semibold' : 'text-white/70 hover:bg-white/10'
                    }`}
                >
                    Today&apos;s Schedule
                </button>
                <button
                    onClick={() => setActiveTab('week')}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                        activeTab === 'week' ? 'bg-accent text-black font-semibold' : 'text-white/70 hover:bg-white/10'
                    }`}
                >
                    Weekly View
                </button>
                <button
                    onClick={() => setActiveTab('tasks')}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                        activeTab === 'tasks' ? 'bg-accent text-black font-semibold' : 'text-white/70 hover:bg-white/10'
                    }`}
                >
                    My Tasks ({getUpcomingTasks().length})
                </button>
            </div>

            {activeTab === 'today' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Today's Schedule */}
                    <div className="bg-black/20 border border-white/10 rounded-2xl p-6">
                        <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                            <Clock className="text-accent" size={20} />
                            Today&apos;s Shifts
                        </h2>
                        {getTodaySchedules().length === 0 ? (
                            <div className="text-center py-8 text-white/50">
                                <Calendar size={48} className="mx-auto mb-4 opacity-50" />
                                <p>No shifts scheduled for today</p>
                            </div>
                        ) : (
                            <div className="space-y-3">
                                {getTodaySchedules().map((schedule) => (
                                    <div
                                        key={schedule.id}
                                        className="p-4 rounded-xl"
                                        style={{ backgroundColor: schedule.color + '15', borderLeft: `4px solid ${schedule.color}` }}
                                    >
                                        <h3 className="font-semibold">{schedule.title}</h3>
                                        <p className="text-sm text-white/70 flex items-center gap-2 mt-1">
                                            <Clock size={14} />
                                            {formatTime(schedule.startTime)} - {formatTime(schedule.endTime)}
                                        </p>
                                        {schedule.location && (
                                            <p className="text-sm text-white/50 flex items-center gap-2 mt-1">
                                                <MapPin size={14} />
                                                {schedule.location}
                                            </p>
                                        )}
                                        {schedule.description && (
                                            <p className="text-sm text-white/60 mt-2">{schedule.description}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Today's Tasks */}
                    <div className="bg-black/20 border border-white/10 rounded-2xl p-6">
                        <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                            <AlertCircle className="text-accent" size={20} />
                            Tasks Due Today
                        </h2>
                        {tasks.filter(t => isTaskToday(t.dueDate) && t.status !== 'completed').length === 0 ? (
                            <div className="text-center py-8 text-white/50">
                                <CheckCircle2 size={48} className="mx-auto mb-4 opacity-50" />
                                <p>No tasks due today</p>
                            </div>
                        ) : (
                            <div className="space-y-3">
                                {tasks.filter(t => isTaskToday(t.dueDate) && t.status !== 'completed').map((task) => (
                                    <div
                                        key={task.id}
                                        className="p-4 rounded-xl bg-black/30 border border-white/10"
                                    >
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <div className={`w-2 h-2 rounded-full ${
                                                        task.priority === 'high' ? 'bg-red-500' :
                                                        task.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                                                    }`} />
                                                    <h3 className="font-semibold">{task.title}</h3>
                                                </div>
                                                {task.description && (
                                                    <p className="text-sm text-white/60 mt-1">{task.description}</p>
                                                )}
                                                <p className="text-xs text-white/40 mt-2">
                                                    Due: {new Date(task.dueDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                </p>
                                            </div>
                                            <div className="flex gap-2">
                                                {task.status === 'pending' && (
                                                    <button
                                                        onClick={() => updateTaskStatus(task.id, 'in_progress')}
                                                        className="p-2 bg-blue-500/20 hover:bg-blue-500/30 rounded-lg transition-colors"
                                                        title="Start Task"
                                                    >
                                                        <PlayCircle size={18} className="text-blue-400" />
                                                    </button>
                                                )}
                                                {task.status === 'in_progress' && (
                                                    <button
                                                        onClick={() => updateTaskStatus(task.id, 'completed')}
                                                        className="p-2 bg-green-500/20 hover:bg-green-500/30 rounded-lg transition-colors"
                                                        title="Mark Complete"
                                                    >
                                                        <CheckCircle2 size={18} className="text-green-400" />
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}

            {activeTab === 'week' && (
                <div className="grid grid-cols-7 gap-2">
                    {DAYS.map((day, index) => {
                        const isToday = index === today;
                        const daySchedules = schedules.filter(s => s.dayOfWeek === index);

                        return (
                            <div
                                key={day}
                                className={`bg-black/20 border rounded-xl overflow-hidden ${
                                    isToday ? 'border-accent' : 'border-white/10'
                                }`}
                            >
                                <div className={`p-3 border-b ${isToday ? 'bg-accent/20 border-accent/30' : 'bg-black/30 border-white/10'}`}>
                                    <span className={`font-semibold text-sm ${isToday ? 'text-accent' : ''}`}>
                                        {day.slice(0, 3)}
                                    </span>
                                    {isToday && <span className="ml-2 text-xs text-accent">(Today)</span>}
                                </div>
                                <div className="p-2 space-y-2 min-h-[150px]">
                                    {daySchedules.map((schedule) => (
                                        <div
                                            key={schedule.id}
                                            className="p-2 rounded-lg text-xs"
                                            style={{ backgroundColor: schedule.color + '20', borderLeft: `3px solid ${schedule.color}` }}
                                        >
                                            <p className="font-semibold truncate">{schedule.title}</p>
                                            <p className="text-white/50">{schedule.startTime}</p>
                                        </div>
                                    ))}
                                    {daySchedules.length === 0 && (
                                        <p className="text-white/30 text-xs text-center py-4">Off</p>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}

            {activeTab === 'tasks' && (
                <div className="space-y-3">
                    {getUpcomingTasks().length === 0 ? (
                        <div className="text-center py-12 text-white/50 bg-black/20 border border-white/10 rounded-2xl">
                            <CheckCircle2 size={48} className="mx-auto mb-4 opacity-50" />
                            <p>All tasks completed!</p>
                        </div>
                    ) : (
                        getUpcomingTasks().map((task) => {
                            const overdue = isTaskOverdue(task.dueDate) && task.status !== 'completed';

                            return (
                                <div
                                    key={task.id}
                                    className={`bg-black/20 border rounded-xl p-4 ${
                                        overdue ? 'border-red-500/50' : 'border-white/10'
                                    }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className={`w-3 h-3 rounded-full ${
                                                task.priority === 'high' ? 'bg-red-500' :
                                                task.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                                            }`} />
                                            <div>
                                                <h3 className="font-semibold">{task.title}</h3>
                                                <p className="text-sm text-white/50">
                                                    Scheduled: {new Date(task.scheduledFor).toLocaleString()}
                                                </p>
                                                <p className={`text-sm ${overdue ? 'text-red-400' : 'text-white/50'}`}>
                                                    Due: {new Date(task.dueDate).toLocaleString()}
                                                    {overdue && ' (OVERDUE)'}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className={`px-3 py-1 rounded-full text-xs ${
                                                task.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                                                task.status === 'in_progress' ? 'bg-blue-500/20 text-blue-400' :
                                                overdue ? 'bg-red-500/20 text-red-400' :
                                                'bg-yellow-500/20 text-yellow-400'
                                            }`}>
                                                {overdue && task.status === 'pending' ? 'Overdue' : task.status.replace('_', ' ')}
                                            </span>
                                            {task.status !== 'completed' && (
                                                <div className="flex gap-2">
                                                    {task.status === 'pending' && (
                                                        <button
                                                            onClick={() => updateTaskStatus(task.id, 'in_progress')}
                                                            className="p-2 bg-blue-500/20 hover:bg-blue-500/30 rounded-lg transition-colors"
                                                            title="Start Task"
                                                        >
                                                            <PlayCircle size={18} className="text-blue-400" />
                                                        </button>
                                                    )}
                                                    <button
                                                        onClick={() => updateTaskStatus(task.id, 'completed')}
                                                        className="p-2 bg-green-500/20 hover:bg-green-500/30 rounded-lg transition-colors"
                                                        title="Mark Complete"
                                                    >
                                                        <CheckCircle2 size={18} className="text-green-400" />
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>
            )}
        </div>
    );
}
