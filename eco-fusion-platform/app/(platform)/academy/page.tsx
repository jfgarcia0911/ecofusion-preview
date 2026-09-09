'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { AcademySkeleton } from '@/components/skeletons/PageSkeletons';
import {
    BookOpen, Trophy, Clock, Medal, PlayCircle, Star,
    CheckCircle, AlertCircle, Shield, Download, Award
} from 'lucide-react';

interface Lesson {
    id: string;
    title: string;
    type: string;
    duration: number;
    sortOrder: number;
}

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
    lessons: Lesson[];
}

interface Assignment {
    id: string;
    courseId: string;
    status: string;
    dueDate: string | null;
    priority: string;
    notes: string | null;
    course: Course;
    completion?: {
        completedAt: string;
        quizScore: number | null;
        certificateId: string | null;
        expiresAt: string | null;
        passed: boolean;
    };
    progress: {
        totalLessons: number;
        completedLessons: number;
        percentComplete: number;
    };
}

interface Completion {
    id: string;
    courseId: string;
    completedAt: string;
    quizScore: number | null;
    certificateId: string | null;
    expiresAt: string | null;
    passed: boolean;
    renewalStatus: string;
    daysUntilRenewal: number | null;
    course: {
        id: string;
        code: string;
        title: string;
        category: string;
        duration: number;
        renewalDays: number | null;
        isRequired: boolean;
    };
}

export default function AcademyDashboard() {
    const [assignments, setAssignments] = useState<Assignment[]>([]);
    const [completions, setCompletions] = useState<Completion[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState<'assigned' | 'completed'>('assigned');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true);
        try {
            const [assignmentsRes, completionsRes] = await Promise.all([
                fetch('/api/training/assignments'),
                fetch('/api/training/completions')
            ]);

            if (assignmentsRes.ok) setAssignments(await assignmentsRes.json());
            if (completionsRes.ok) setCompletions(await completionsRes.json());
        } catch (error) {
            console.error('Failed to fetch training data:', error);
        }
        setLoading(false);
    };

    const handleExportRecords = () => {
        window.open('/api/training/export', '_blank');
    };

    // Filter assignments to show only those not yet completed
    const pendingAssignments = assignments.filter(a => a.status !== 'completed');
    const inProgressAssignments = pendingAssignments.filter(a => a.status === 'in_progress');
    const notStartedAssignments = pendingAssignments.filter(a => a.status === 'assigned');

    // Courses needing renewal
    const expiringCourses = completions.filter(c => c.renewalStatus === 'expiring_soon' || c.renewalStatus === 'expired');

    // Stats
    const totalCompleted = completions.filter(c => c.passed).length;
    const totalAssigned = assignments.length;
    const completionRate = totalAssigned > 0 ? Math.round((totalCompleted / totalAssigned) * 100) : 0;

    const getCategoryColor = (category: string) => {
        switch (category) {
            case 'safety': return 'bg-red-500/20 text-red-400 border-red-500/30';
            case 'compliance': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
            case 'operations': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
            case 'technical': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
            default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
        }
    };

    const getPriorityColor = (priority: string) => {
        switch (priority) {
            case 'urgent': return 'text-red-400';
            case 'high': return 'text-orange-400';
            case 'normal': return 'text-white/50';
            case 'low': return 'text-white/30';
            default: return 'text-white/50';
        }
    };

    // The same component the route's loading file renders. This used to be a
    // spinner in a small box, so opening the academy went from a full page of
    // placeholder to a lone spinner and then to the content: two rearrangements
    // where there should be none.
    if (loading) {
        return <AcademySkeleton />;
    }

    // Show message if no courses assigned
    if (assignments.length === 0 && completions.length === 0) {
        return (
            <div className="space-y-8">
                <div>
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                        Training Academy
                    </h1>
                    <p className="text-white/50 mt-1">Your assigned training courses will appear here</p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-12 text-center">
                    <BookOpen size={64} className="mx-auto mb-4 text-white/20" />
                    <h2 className="text-xl font-bold text-white mb-2">No Training Assigned</h2>
                    <p className="text-white/50 max-w-md mx-auto">
                        Your administrator has not assigned any training courses yet.
                        Check back later or contact your supervisor.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                        Training Academy
                    </h1>
                    <p className="text-white/50 mt-1">Complete your required safety and compliance training</p>
                </div>
                <button
                    onClick={handleExportRecords}
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium transition-colors"
                >
                    <Download size={16} /> Export My Records
                </button>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="glass-card px-4 py-3 flex items-center gap-3">
                    <div className="p-2 bg-blue-500/20 rounded-full text-blue-400">
                        <BookOpen size={18} />
                    </div>
                    <div>
                        <p className="text-xs text-white/50 uppercase font-bold">Assigned</p>
                        <p className="text-xl font-bold text-white">{totalAssigned}</p>
                    </div>
                </div>
                <div className="glass-card px-4 py-3 flex items-center gap-3">
                    <div className="p-2 bg-green-500/20 rounded-full text-green-400">
                        <CheckCircle size={18} />
                    </div>
                    <div>
                        <p className="text-xs text-white/50 uppercase font-bold">Completed</p>
                        <p className="text-xl font-bold text-white">{totalCompleted}</p>
                    </div>
                </div>
                <div className="glass-card px-4 py-3 flex items-center gap-3">
                    <div className="p-2 bg-yellow-500/20 rounded-full text-yellow-400">
                        <Clock size={18} />
                    </div>
                    <div>
                        <p className="text-xs text-white/50 uppercase font-bold">In Progress</p>
                        <p className="text-xl font-bold text-white">{inProgressAssignments.length}</p>
                    </div>
                </div>
                <div className="glass-card px-4 py-3 flex items-center gap-3">
                    <div className="p-2 bg-accent/20 rounded-full text-accent">
                        <Trophy size={18} />
                    </div>
                    <div>
                        <p className="text-xs text-white/50 uppercase font-bold">Completion Rate</p>
                        <p className="text-xl font-bold text-white">{completionRate}%</p>
                    </div>
                </div>
            </div>

            {/* Alerts for Expiring Certifications */}
            {expiringCourses.length > 0 && (
                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                        <AlertCircle className="text-yellow-400 flex-shrink-0 mt-0.5" size={20} />
                        <div>
                            <h3 className="font-bold text-yellow-400">Certification Renewal Required</h3>
                            <p className="text-sm text-yellow-200/70 mt-1">
                                {expiringCourses.length} course{expiringCourses.length > 1 ? 's' : ''} need{expiringCourses.length === 1 ? 's' : ''} renewal:
                            </p>
                            <ul className="mt-2 space-y-1">
                                {expiringCourses.map(c => (
                                    <li key={c.id} className="text-sm text-yellow-200/70">
                                        • {c.course.title} - {c.renewalStatus === 'expired' ? 'Expired' : `Expires in ${c.daysUntilRenewal} days`}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}

            {/* Continue Learning Section */}
            {inProgressAssignments.length > 0 && (
                <div>
                    <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <PlayCircle size={20} className="text-accent" /> Continue Learning
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {inProgressAssignments.map(assignment => (
                            <Link
                                key={assignment.id}
                                href={`/academy/course/${assignment.course.id}`}
                                className="glass-panel p-6 rounded-xl hover:bg-white/5 transition-all group"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-accent/20 rounded-xl group-hover:bg-accent/30 transition-colors">
                                        <BookOpen size={24} className="text-accent" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className={`px-2 py-0.5 rounded text-xs font-bold uppercase ${getCategoryColor(assignment.course.category)}`}>
                                                {assignment.course.category}
                                            </span>
                                            {assignment.course.isRequired && (
                                                <span className="flex items-center gap-1 text-xs text-red-400">
                                                    <Shield size={10} /> Required
                                                </span>
                                            )}
                                        </div>
                                        <h3 className="font-bold text-white group-hover:text-accent transition-colors">
                                            {assignment.course.title}
                                        </h3>
                                        <p className="text-xs text-white/50 mt-1">{assignment.course.code}</p>

                                        <div className="mt-4">
                                            <div className="flex justify-between text-xs text-white/50 mb-1">
                                                <span>Progress</span>
                                                <span>{assignment.progress.percentComplete}%</span>
                                            </div>
                                            <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-accent transition-all"
                                                    style={{ width: `${assignment.progress.percentComplete}%` }}
                                                />
                                            </div>
                                            <p className="text-xs text-white/40 mt-1">
                                                {assignment.progress.completedLessons} of {assignment.progress.totalLessons} lessons completed
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            )}

            {/* Tabs */}
            <div className="flex border-b border-white/10">
                <button
                    onClick={() => setActiveTab('assigned')}
                    className={`px-4 py-2 text-sm font-medium transition-colors ${
                        activeTab === 'assigned'
                            ? 'text-accent border-b-2 border-accent'
                            : 'text-white/50 hover:text-white'
                    }`}
                >
                    Assigned Courses ({pendingAssignments.length})
                </button>
                <button
                    onClick={() => setActiveTab('completed')}
                    className={`px-4 py-2 text-sm font-medium transition-colors ${
                        activeTab === 'completed'
                            ? 'text-accent border-b-2 border-accent'
                            : 'text-white/50 hover:text-white'
                    }`}
                >
                    Completed ({completions.length})
                </button>
            </div>

            {/* Assigned Courses Tab */}
            {activeTab === 'assigned' && (
                <div className="space-y-4">
                    {notStartedAssignments.length > 0 && (
                        <>
                            <h3 className="text-lg font-bold text-white">Not Started</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {notStartedAssignments.map(assignment => (
                                    <div
                                        key={assignment.id}
                                        className="bg-white/5 border border-white/5 rounded-xl p-4 hover:bg-white/10 transition-all"
                                    >
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className={`px-2 py-0.5 rounded text-xs font-bold uppercase ${getCategoryColor(assignment.course.category)}`}>
                                                {assignment.course.category}
                                            </span>
                                            {assignment.course.isRequired && (
                                                <Shield size={12} className="text-red-400" />
                                            )}
                                        </div>
                                        <h4 className="font-bold text-white mb-1">{assignment.course.title}</h4>
                                        <p className="text-xs text-white/50 line-clamp-2 mb-3">{assignment.course.description}</p>
                                        <div className="flex items-center justify-between text-xs text-white/40 mb-4">
                                            <span>{assignment.course.code}</span>
                                            <span>{Math.round(assignment.course.duration / 60)} hrs • {assignment.course.lessons.length} lessons</span>
                                        </div>
                                        {assignment.dueDate && (
                                            <p className={`text-xs mb-3 ${getPriorityColor(assignment.priority)}`}>
                                                Due: {new Date(assignment.dueDate).toLocaleDateString()}
                                            </p>
                                        )}
                                        <Link
                                            href={`/academy/course/${assignment.course.id}`}
                                            className="block w-full text-center py-2 rounded-lg bg-accent/20 hover:bg-accent/30 text-accent text-sm font-bold transition-colors"
                                        >
                                            Start Course
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}

                    {pendingAssignments.length === 0 && (
                        <div className="bg-white/5 border border-white/10 rounded-xl p-8 text-center">
                            <CheckCircle size={48} className="mx-auto mb-4 text-green-400" />
                            <h3 className="text-lg font-bold text-white mb-2">All Caught Up!</h3>
                            <p className="text-white/50">
                                You&apos;ve completed all your assigned training courses.
                            </p>
                        </div>
                    )}
                </div>
            )}

            {/* Completed Courses Tab */}
            {activeTab === 'completed' && (
                <div className="space-y-4">
                    {completions.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {completions.map(completion => (
                                <div
                                    key={completion.id}
                                    className={`bg-white/5 border rounded-xl p-4 ${
                                        completion.renewalStatus === 'expired'
                                            ? 'border-red-500/30'
                                            : completion.renewalStatus === 'expiring_soon'
                                            ? 'border-yellow-500/30'
                                            : 'border-white/5'
                                    }`}
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <span className={`px-2 py-0.5 rounded text-xs font-bold uppercase ${getCategoryColor(completion.course.category)}`}>
                                            {completion.course.category}
                                        </span>
                                        <div className="flex items-center gap-1 text-green-400">
                                            <CheckCircle size={14} />
                                            <span className="text-xs font-medium">Completed</span>
                                        </div>
                                    </div>
                                    <h4 className="font-bold text-white mb-1">{completion.course.title}</h4>
                                    <p className="text-xs text-white/50 mb-3">{completion.course.code}</p>

                                    <div className="space-y-2 text-xs text-white/50">
                                        <div className="flex justify-between">
                                            <span>Completed</span>
                                            <span>{new Date(completion.completedAt).toLocaleDateString()}</span>
                                        </div>
                                        {completion.quizScore && (
                                            <div className="flex justify-between">
                                                <span>Score</span>
                                                <span className={completion.passed ? 'text-green-400' : 'text-red-400'}>
                                                    {completion.quizScore}%
                                                </span>
                                            </div>
                                        )}
                                        {completion.expiresAt && (
                                            <div className="flex justify-between">
                                                <span>Expires</span>
                                                <span className={
                                                    completion.renewalStatus === 'expired' ? 'text-red-400' :
                                                    completion.renewalStatus === 'expiring_soon' ? 'text-yellow-400' :
                                                    'text-white/50'
                                                }>
                                                    {new Date(completion.expiresAt).toLocaleDateString()}
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    {completion.certificateId && (
                                        <div className="mt-3 pt-3 border-t border-white/5">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-1 text-accent">
                                                    <Award size={12} />
                                                    <span className="text-xs font-mono">{completion.certificateId}</span>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {completion.renewalStatus === 'expired' && (
                                        <div className="mt-3">
                                            <Link
                                                href={`/academy/course/${completion.courseId}`}
                                                className="block w-full text-center py-2 rounded-lg bg-red-500/20 hover:bg-red-500/30 text-red-400 text-sm font-bold transition-colors"
                                            >
                                                Retake Course
                                            </Link>
                                        </div>
                                    )}

                                    {completion.renewalStatus === 'expiring_soon' && (
                                        <div className="mt-3">
                                            <Link
                                                href={`/academy/course/${completion.courseId}`}
                                                className="block w-full text-center py-2 rounded-lg bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-400 text-sm font-bold transition-colors"
                                            >
                                                Renew Certification
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="bg-white/5 border border-white/10 rounded-xl p-8 text-center">
                            <BookOpen size={48} className="mx-auto mb-4 text-white/20" />
                            <h3 className="text-lg font-bold text-white mb-2">No Completed Courses</h3>
                            <p className="text-white/50">
                                Complete your assigned training to earn certifications.
                            </p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
