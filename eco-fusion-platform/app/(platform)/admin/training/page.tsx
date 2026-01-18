'use client';

import { useState, useEffect } from 'react';
import {
    BookOpen, Users, Plus, Search, CheckCircle, Clock,
    AlertCircle, Shield, Download, ChevronDown, X,
    Award, Calendar, FileText
} from 'lucide-react';

interface Course {
    id: string;
    code: string;
    title: string;
    description: string;
    category: string;
    duration: number;
    isRequired: boolean;
    renewalDays: number | null;
    passScore: number;
    lessons: { id: string; title: string; type: string; duration: number }[];
    _count: { assignments: number; completions: number };
}

interface User {
    id: string;
    name: string;
    email: string;
    role: string;
}

interface Assignment {
    id: string;
    courseId: string;
    assigneeId: string;
    status: string;
    dueDate: string | null;
    priority: string;
    course: Course;
    assignee: User;
    completion?: {
        completedAt: string;
        quizScore: number | null;
        certificateId: string | null;
        expiresAt: string | null;
    };
    progress: {
        totalLessons: number;
        completedLessons: number;
        percentComplete: number;
    };
}

export default function AdminTrainingPage() {
    const [courses, setCourses] = useState<Course[]>([]);
    const [users, setUsers] = useState<User[]>([]);
    const [selectedUser, setSelectedUser] = useState<string | null>(null);
    const [userAssignments, setUserAssignments] = useState<Assignment[]>([]);
    const [isAssignModalOpen, setIsAssignModalOpen] = useState(false);
    const [isBulkAssignOpen, setIsBulkAssignOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [assignDueDate, setAssignDueDate] = useState('');
    const [assignPriority, setAssignPriority] = useState('normal');
    const [selectedCourseIds, setSelectedCourseIds] = useState<string[]>([]);
    const [selectedUserIds, setSelectedUserIds] = useState<string[]>([]);

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (selectedUser) {
            fetchUserAssignments(selectedUser);
        }
    }, [selectedUser]);

    const fetchData = async () => {
        setLoading(true);
        try {
            const [coursesRes, usersRes] = await Promise.all([
                fetch('/api/training/courses'),
                fetch('/api/users')
            ]);

            if (coursesRes.ok) setCourses(await coursesRes.json());
            if (usersRes.ok) {
                const allUsers = await usersRes.json();
                // Filter to only show non-admin users
                setUsers(allUsers.filter((u: User) => u.role === 'user'));
            }
        } catch (error) {
            console.error('Failed to fetch data:', error);
        }
        setLoading(false);
    };

    const fetchUserAssignments = async (userId: string) => {
        try {
            const res = await fetch(`/api/training/assignments?userId=${userId}`);
            if (res.ok) setUserAssignments(await res.json());
        } catch (error) {
            console.error('Failed to fetch assignments:', error);
        }
    };

    const handleAssignCourse = async (courseId: string, userId: string) => {
        try {
            const res = await fetch('/api/training/assignments', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    courseId,
                    assigneeId: userId,
                    dueDate: assignDueDate || null,
                    priority: assignPriority
                })
            });

            if (res.ok) {
                if (selectedUser) fetchUserAssignments(selectedUser);
                fetchData();
                setIsAssignModalOpen(false);
            } else {
                const error = await res.json();
                alert(error.error || 'Failed to assign course');
            }
        } catch (error) {
            console.error('Failed to assign course:', error);
        }
    };

    const handleBulkAssign = async () => {
        if (selectedCourseIds.length === 0 || selectedUserIds.length === 0) {
            alert('Please select at least one course and one employee');
            return;
        }

        let successCount = 0;
        let errorCount = 0;

        for (const userId of selectedUserIds) {
            for (const courseId of selectedCourseIds) {
                try {
                    const res = await fetch('/api/training/assignments', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            courseId,
                            assigneeId: userId,
                            dueDate: assignDueDate || null,
                            priority: assignPriority
                        })
                    });
                    if (res.ok) successCount++;
                    else errorCount++;
                } catch {
                    errorCount++;
                }
            }
        }

        alert(`Assigned ${successCount} courses successfully. ${errorCount > 0 ? `${errorCount} failed (may already be assigned).` : ''}`);
        setIsBulkAssignOpen(false);
        setSelectedCourseIds([]);
        setSelectedUserIds([]);
        fetchData();
    };

    const handleRemoveAssignment = async (assignmentId: string) => {
        if (!confirm('Remove this course assignment?')) return;

        try {
            const res = await fetch(`/api/training/assignments?id=${assignmentId}`, {
                method: 'DELETE'
            });

            if (res.ok && selectedUser) {
                fetchUserAssignments(selectedUser);
                fetchData();
            }
        } catch (error) {
            console.error('Failed to remove assignment:', error);
        }
    };

    const handleExportRecords = (userId: string) => {
        window.open(`/api/training/export?userId=${userId}`, '_blank');
    };

    const filteredUsers = users.filter(u =>
        u.name?.toLowerCase().includes(search.toLowerCase()) ||
        u.email.toLowerCase().includes(search.toLowerCase())
    );

    const requiredCourses = courses.filter(c => c.isRequired);
    const optionalCourses = courses.filter(c => !c.isRequired);

    const getCategoryColor = (category: string) => {
        switch (category) {
            case 'safety': return 'bg-red-500/20 text-red-400';
            case 'compliance': return 'bg-yellow-500/20 text-yellow-400';
            case 'operations': return 'bg-blue-500/20 text-blue-400';
            case 'technical': return 'bg-purple-500/20 text-purple-400';
            default: return 'bg-gray-500/20 text-gray-400';
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'completed': return 'text-green-400';
            case 'in_progress': return 'text-yellow-400';
            case 'overdue': return 'text-red-400';
            default: return 'text-white/50';
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent"></div>
            </div>
        );
    }

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                        Training Management
                    </h1>
                    <p className="text-white/50 mt-1">Assign and track employee safety training</p>
                </div>
                <button
                    onClick={() => setIsBulkAssignOpen(true)}
                    className="bg-white text-black px-4 py-2 rounded-lg font-bold flex items-center gap-2 hover:bg-white/90 transition-colors"
                >
                    <Plus size={16} /> Bulk Assign Courses
                </button>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="glass-card p-4 rounded-xl">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-accent/20 rounded-lg">
                            <BookOpen size={20} className="text-accent" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-white">{courses.length}</p>
                            <p className="text-xs text-white/50">Total Courses</p>
                        </div>
                    </div>
                </div>
                <div className="glass-card p-4 rounded-xl">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-red-500/20 rounded-lg">
                            <Shield size={20} className="text-red-400" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-white">{requiredCourses.length}</p>
                            <p className="text-xs text-white/50">Required Courses</p>
                        </div>
                    </div>
                </div>
                <div className="glass-card p-4 rounded-xl">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-500/20 rounded-lg">
                            <Users size={20} className="text-blue-400" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-white">{users.length}</p>
                            <p className="text-xs text-white/50">Employees</p>
                        </div>
                    </div>
                </div>
                <div className="glass-card p-4 rounded-xl">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-green-500/20 rounded-lg">
                            <Award size={20} className="text-green-400" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-white">
                                {courses.reduce((acc, c) => acc + c._count.completions, 0)}
                            </p>
                            <p className="text-xs text-white/50">Certifications Issued</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Employee List */}
                <div className="lg:col-span-1 space-y-4">
                    <div className="bg-white/5 border border-white/5 rounded-2xl p-4">
                        <div className="flex items-center gap-2 mb-4">
                            <Users size={18} className="text-white/50" />
                            <h2 className="font-bold text-white">Employees</h2>
                        </div>

                        <div className="relative mb-4">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" size={14} />
                            <input
                                type="text"
                                placeholder="Search employees..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full bg-black/20 border border-white/10 rounded-lg pl-9 pr-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-accent/50"
                            />
                        </div>

                        <div className="space-y-2 max-h-[600px] overflow-y-auto">
                            {filteredUsers.map(user => (
                                <button
                                    key={user.id}
                                    onClick={() => setSelectedUser(user.id)}
                                    className={`w-full text-left p-3 rounded-xl transition-all ${
                                        selectedUser === user.id
                                            ? 'bg-accent/20 border border-accent/50'
                                            : 'bg-white/5 hover:bg-white/10 border border-transparent'
                                    }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center text-white text-sm font-bold">
                                            {user.name?.charAt(0) || user.email.charAt(0).toUpperCase()}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-white truncate">
                                                {user.name || 'Unnamed'}
                                            </p>
                                            <p className="text-xs text-white/50 truncate">{user.email}</p>
                                        </div>
                                    </div>
                                </button>
                            ))}

                            {filteredUsers.length === 0 && (
                                <p className="text-center text-white/50 text-sm py-4">
                                    No employees found
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Employee Training Details */}
                <div className="lg:col-span-2 space-y-4">
                    {selectedUser ? (
                        <>
                            <div className="flex items-center justify-between">
                                <h2 className="text-xl font-bold text-white">
                                    {users.find(u => u.id === selectedUser)?.name || 'Employee'}&apos;s Training
                                </h2>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => handleExportRecords(selectedUser)}
                                        className="px-3 py-1.5 rounded-lg border border-white/10 hover:bg-white/10 text-sm font-medium text-white/70 hover:text-white flex items-center gap-2 transition-colors"
                                    >
                                        <Download size={14} /> Export Records
                                    </button>
                                    <button
                                        onClick={() => setIsAssignModalOpen(true)}
                                        className="px-3 py-1.5 rounded-lg bg-accent/20 hover:bg-accent/30 text-sm font-bold text-accent flex items-center gap-2 transition-colors"
                                    >
                                        <Plus size={14} /> Assign Course
                                    </button>
                                </div>
                            </div>

                            {userAssignments.length > 0 ? (
                                <div className="space-y-3">
                                    {userAssignments.map(assignment => (
                                        <div
                                            key={assignment.id}
                                            className="bg-white/5 border border-white/5 rounded-xl p-4"
                                        >
                                            <div className="flex items-start justify-between gap-4">
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <span className={`px-2 py-0.5 rounded text-xs font-bold uppercase ${getCategoryColor(assignment.course.category)}`}>
                                                            {assignment.course.category}
                                                        </span>
                                                        {assignment.course.isRequired && (
                                                            <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-400 text-xs font-bold">
                                                                Required
                                                            </span>
                                                        )}
                                                    </div>
                                                    <h3 className="font-bold text-white">{assignment.course.title}</h3>
                                                    <p className="text-xs text-white/50 mt-1">
                                                        {assignment.course.code} • {Math.round(assignment.course.duration / 60)} hours
                                                    </p>
                                                </div>

                                                <div className="text-right">
                                                    <div className={`flex items-center gap-1 text-sm font-medium ${getStatusColor(assignment.status)}`}>
                                                        {assignment.status === 'completed' ? (
                                                            <><CheckCircle size={14} /> Completed</>
                                                        ) : assignment.status === 'in_progress' ? (
                                                            <><Clock size={14} /> In Progress</>
                                                        ) : (
                                                            <><Clock size={14} /> Assigned</>
                                                        )}
                                                    </div>
                                                    {assignment.dueDate && (
                                                        <p className="text-xs text-white/50 mt-1">
                                                            Due: {new Date(assignment.dueDate).toLocaleDateString()}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>

                                            {assignment.status !== 'completed' && (
                                                <div className="mt-3">
                                                    <div className="flex justify-between text-xs text-white/50 mb-1">
                                                        <span>Progress</span>
                                                        <span>{assignment.progress.percentComplete}%</span>
                                                    </div>
                                                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                                                        <div
                                                            className="h-full bg-accent transition-all"
                                                            style={{ width: `${assignment.progress.percentComplete}%` }}
                                                        />
                                                    </div>
                                                    <p className="text-xs text-white/40 mt-1">
                                                        {assignment.progress.completedLessons} of {assignment.progress.totalLessons} lessons
                                                    </p>
                                                </div>
                                            )}

                                            {assignment.completion && (
                                                <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                                                    <div className="flex items-center gap-4 text-white/50">
                                                        <span>Completed: {new Date(assignment.completion.completedAt).toLocaleDateString()}</span>
                                                        {assignment.completion.quizScore && (
                                                            <span>Score: {assignment.completion.quizScore}%</span>
                                                        )}
                                                        {assignment.completion.expiresAt && (
                                                            <span>Expires: {new Date(assignment.completion.expiresAt).toLocaleDateString()}</span>
                                                        )}
                                                    </div>
                                                    {assignment.completion.certificateId && (
                                                        <span className="text-accent font-mono">
                                                            {assignment.completion.certificateId}
                                                        </span>
                                                    )}
                                                </div>
                                            )}

                                            {assignment.status !== 'completed' && (
                                                <div className="mt-3 pt-3 border-t border-white/5 flex justify-end">
                                                    <button
                                                        onClick={() => handleRemoveAssignment(assignment.id)}
                                                        className="text-xs text-red-400 hover:text-red-300"
                                                    >
                                                        Remove Assignment
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="bg-white/5 border border-white/5 rounded-xl p-8 text-center">
                                    <BookOpen size={48} className="mx-auto mb-4 text-white/20" />
                                    <p className="text-white/50">No courses assigned yet</p>
                                    <button
                                        onClick={() => setIsAssignModalOpen(true)}
                                        className="mt-4 px-4 py-2 bg-accent/20 text-accent rounded-lg text-sm font-bold hover:bg-accent/30 transition-colors"
                                    >
                                        Assign First Course
                                    </button>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="bg-white/5 border border-white/5 rounded-xl p-8 text-center h-full flex flex-col items-center justify-center">
                            <Users size={48} className="mx-auto mb-4 text-white/20" />
                            <p className="text-white/50">Select an employee to view their training</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Course Catalog Section */}
            <div className="space-y-4">
                <h2 className="text-xl font-bold text-white">Course Catalog</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {courses.map(course => (
                        <div key={course.id} className="bg-white/5 border border-white/5 rounded-xl p-4">
                            <div className="flex items-center gap-2 mb-2">
                                <span className={`px-2 py-0.5 rounded text-xs font-bold uppercase ${getCategoryColor(course.category)}`}>
                                    {course.category}
                                </span>
                                {course.isRequired && (
                                    <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-400 text-xs font-bold">
                                        Required
                                    </span>
                                )}
                            </div>
                            <h3 className="font-bold text-white mb-1">{course.title}</h3>
                            <p className="text-xs text-white/50 line-clamp-2 mb-3">{course.description}</p>
                            <div className="flex items-center justify-between text-xs text-white/40">
                                <span>{course.code}</span>
                                <span>{Math.round(course.duration / 60)} hrs • {course.lessons.length} lessons</span>
                            </div>
                            <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/5">
                                <span className="text-xs text-white/50">
                                    {course._count.assignments} assigned • {course._count.completions} completed
                                </span>
                                {course.renewalDays && (
                                    <span className="text-xs text-yellow-400">
                                        Renews: {course.renewalDays} days
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Assign Course Modal */}
            {isAssignModalOpen && selectedUser && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
                    <div className="bg-[#0f1520] border border-white/10 w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl">
                        <div className="p-6 border-b border-white/10">
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-bold text-white">Assign Course</h3>
                                <button onClick={() => setIsAssignModalOpen(false)} className="text-white/50 hover:text-white">
                                    <X size={20} />
                                </button>
                            </div>
                            <p className="text-white/50 text-sm mt-1">
                                Assigning to {users.find(u => u.id === selectedUser)?.name}
                            </p>
                        </div>

                        <div className="p-4 space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs text-white/50 mb-1">Due Date (Optional)</label>
                                    <input
                                        type="date"
                                        value={assignDueDate}
                                        onChange={(e) => setAssignDueDate(e.target.value)}
                                        className="w-full bg-black/20 border border-white/10 rounded-lg px-3 py-2 text-sm text-white"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs text-white/50 mb-1">Priority</label>
                                    <select
                                        value={assignPriority}
                                        onChange={(e) => setAssignPriority(e.target.value)}
                                        className="w-full bg-black/20 border border-white/10 rounded-lg px-3 py-2 text-sm text-white"
                                    >
                                        <option value="low">Low</option>
                                        <option value="normal">Normal</option>
                                        <option value="high">High</option>
                                        <option value="urgent">Urgent</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="max-h-80 overflow-y-auto p-4 space-y-2">
                            {courses.map(course => {
                                const isAssigned = userAssignments.some(a => a.courseId === course.id);
                                return (
                                    <button
                                        key={course.id}
                                        disabled={isAssigned}
                                        onClick={() => handleAssignCourse(course.id, selectedUser)}
                                        className={`w-full text-left p-4 rounded-xl border flex justify-between items-center transition-all ${
                                            isAssigned
                                                ? 'bg-white/5 border-white/5 opacity-50 cursor-not-allowed'
                                                : 'bg-white/5 border-white/10 hover:border-accent hover:bg-accent/10'
                                        }`}
                                    >
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold uppercase ${getCategoryColor(course.category)}`}>
                                                    {course.category}
                                                </span>
                                                {course.isRequired && (
                                                    <span className="px-1.5 py-0.5 rounded bg-red-500/20 text-red-400 text-[10px] font-bold">
                                                        Required
                                                    </span>
                                                )}
                                            </div>
                                            <p className="font-bold text-white text-sm">{course.title}</p>
                                            <p className="text-xs text-white/50">{course.code} • {Math.round(course.duration / 60)} hours</p>
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
                            <button
                                onClick={() => setIsAssignModalOpen(false)}
                                className="text-white/70 hover:text-white px-4 py-2 text-sm font-bold"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Bulk Assign Modal */}
            {isBulkAssignOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
                    <div className="bg-[#0f1520] border border-white/10 w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl">
                        <div className="p-6 border-b border-white/10">
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-bold text-white">Bulk Assign Courses</h3>
                                <button onClick={() => setIsBulkAssignOpen(false)} className="text-white/50 hover:text-white">
                                    <X size={20} />
                                </button>
                            </div>
                            <p className="text-white/50 text-sm mt-1">
                                Select courses and employees for bulk assignment
                            </p>
                        </div>

                        <div className="p-4 grid grid-cols-2 gap-4">
                            {/* Courses Selection */}
                            <div>
                                <h4 className="text-sm font-bold text-white mb-2">Select Courses</h4>
                                <div className="bg-black/20 border border-white/10 rounded-lg max-h-60 overflow-y-auto">
                                    {courses.map(course => (
                                        <label
                                            key={course.id}
                                            className="flex items-center gap-2 p-2 hover:bg-white/5 cursor-pointer"
                                        >
                                            <input
                                                type="checkbox"
                                                checked={selectedCourseIds.includes(course.id)}
                                                onChange={(e) => {
                                                    if (e.target.checked) {
                                                        setSelectedCourseIds([...selectedCourseIds, course.id]);
                                                    } else {
                                                        setSelectedCourseIds(selectedCourseIds.filter(id => id !== course.id));
                                                    }
                                                }}
                                                className="accent-accent"
                                            />
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm text-white truncate">{course.title}</p>
                                                <p className="text-xs text-white/50">{course.code}</p>
                                            </div>
                                        </label>
                                    ))}
                                </div>
                                <p className="text-xs text-white/50 mt-1">{selectedCourseIds.length} selected</p>
                            </div>

                            {/* Employees Selection */}
                            <div>
                                <h4 className="text-sm font-bold text-white mb-2">Select Employees</h4>
                                <div className="bg-black/20 border border-white/10 rounded-lg max-h-60 overflow-y-auto">
                                    {users.map(user => (
                                        <label
                                            key={user.id}
                                            className="flex items-center gap-2 p-2 hover:bg-white/5 cursor-pointer"
                                        >
                                            <input
                                                type="checkbox"
                                                checked={selectedUserIds.includes(user.id)}
                                                onChange={(e) => {
                                                    if (e.target.checked) {
                                                        setSelectedUserIds([...selectedUserIds, user.id]);
                                                    } else {
                                                        setSelectedUserIds(selectedUserIds.filter(id => id !== user.id));
                                                    }
                                                }}
                                                className="accent-accent"
                                            />
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm text-white truncate">{user.name || 'Unnamed'}</p>
                                                <p className="text-xs text-white/50 truncate">{user.email}</p>
                                            </div>
                                        </label>
                                    ))}
                                </div>
                                <p className="text-xs text-white/50 mt-1">{selectedUserIds.length} selected</p>
                            </div>
                        </div>

                        <div className="p-4 space-y-4 border-t border-white/5">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs text-white/50 mb-1">Due Date (Optional)</label>
                                    <input
                                        type="date"
                                        value={assignDueDate}
                                        onChange={(e) => setAssignDueDate(e.target.value)}
                                        className="w-full bg-black/20 border border-white/10 rounded-lg px-3 py-2 text-sm text-white"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs text-white/50 mb-1">Priority</label>
                                    <select
                                        value={assignPriority}
                                        onChange={(e) => setAssignPriority(e.target.value)}
                                        className="w-full bg-black/20 border border-white/10 rounded-lg px-3 py-2 text-sm text-white"
                                    >
                                        <option value="low">Low</option>
                                        <option value="normal">Normal</option>
                                        <option value="high">High</option>
                                        <option value="urgent">Urgent</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 bg-white/5 border-t border-white/5 flex justify-between items-center">
                            <p className="text-sm text-white/50">
                                {selectedCourseIds.length * selectedUserIds.length} total assignments
                            </p>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => setIsBulkAssignOpen(false)}
                                    className="text-white/70 hover:text-white px-4 py-2 text-sm font-bold"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleBulkAssign}
                                    disabled={selectedCourseIds.length === 0 || selectedUserIds.length === 0}
                                    className="bg-accent text-black px-4 py-2 rounded-lg text-sm font-bold hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Assign Selected
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
