'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import {
    PlayCircle, CheckCircle, Circle, FileText, HelpCircle,
    ArrowLeft, ArrowRight, Video, Shield, Clock, Award
} from 'lucide-react';
import clsx from 'clsx';
import LessonContent from '@/components/academy/LessonContent';
import CourseCompleteModal from '@/components/academy/CourseCompleteModal';

interface QuizQuestion {
    id: string;
    question: string;
    options: string[];
    correctAnswer: number;
}

interface Lesson {
    id: string;
    title: string;
    description: string | null;
    type: string;
    content: string | null;
    duration: number;
    sortOrder: number;
    questions: QuizQuestion[] | null;
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

interface LessonCompletion {
    lessonId: string;
    completedAt: string;
    quizScore: number | null;
}

export default function CoursePlayerPage() {
    const params = useParams();
    const router = useRouter();
    const courseId = params?.courseId as string | undefined;

    const [course, setCourse] = useState<Course | null>(null);
    const [completedLessons, setCompletedLessons] = useState<LessonCompletion[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeLessonIndex, setActiveLessonIndex] = useState(0);
    const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
    const [quizSubmitted, setQuizSubmitted] = useState(false);
    const [quizScore, setQuizScore] = useState<number | null>(null);
    const [completing, setCompleting] = useState(false);
    // Set when the final lesson lands, so the certification modal can take over
    // from the alert() that used to fire here.
    const [courseComplete, setCourseComplete] = useState(false);

    useEffect(() => {
        if (courseId) {
            fetchCourse();
        }
    }, [courseId]);

    const fetchCourse = async () => {
        try {
            // Fetch course details
            const courseRes = await fetch(`/api/training/courses/${courseId}`);
            if (courseRes.ok) {
                const courseData = await courseRes.json();
                setCourse(courseData);
            } else {
                router.push('/academy');
                return;
            }

            // Fetch user's completed lessons for this course
            const completionsRes = await fetch(`/api/training/courses/${courseId}/progress`);
            if (completionsRes.ok) {
                setCompletedLessons(await completionsRes.json());
            }
        } catch (error) {
            console.error('Failed to fetch course:', error);
        }
        setLoading(false);
    };

    const isLessonCompleted = (lessonId: string) => {
        return completedLessons.some(c => c.lessonId === lessonId);
    };

    const handleCompleteLesson = async () => {
        if (!course) return;

        const currentLesson = course.lessons[activeLessonIndex];
        setCompleting(true);

        try {
            const res = await fetch(`/api/training/lessons/${currentLesson.id}/complete`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    quizScore: currentLesson.type === 'quiz' ? quizScore : null
                })
            });

            if (res.ok) {
                const data = await res.json();

                // Update local state
                setCompletedLessons(prev => [...prev, {
                    lessonId: currentLesson.id,
                    completedAt: new Date().toISOString(),
                    quizScore: quizScore
                }]);

                // Check if course is complete
                if (data.courseProgress.allCompleted) {
                    // Record course completion
                    const completionRes = await fetch('/api/training/completions', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            courseId: course.id,
                            quizScore: quizScore
                        })
                    });

                    if (completionRes.ok) {
                        // Stay on the page - the modal owns the exit now, so the
                        // pending flag has to be cleared here rather than by
                        // navigating away.
                        setCompleting(false);
                        setCourseComplete(true);
                        return;
                    }
                }

                // Move to next lesson
                if (activeLessonIndex < course.lessons.length - 1) {
                    navigateTo(activeLessonIndex + 1);
                }
            }
        } catch (error) {
            console.error('Failed to complete lesson:', error);
        }
        setCompleting(false);
    };

    const handleQuizSubmit = () => {
        if (!course) return;

        const currentLesson = course.lessons[activeLessonIndex];
        if (!currentLesson.questions) return;

        let correct = 0;
        currentLesson.questions.forEach((q) => {
            if (quizAnswers[q.id] === q.correctAnswer) {
                correct++;
            }
        });

        const score = Math.round((correct / currentLesson.questions.length) * 100);
        setQuizScore(score);
        setQuizSubmitted(true);
    };

    const navigateTo = (index: number) => {
        setActiveLessonIndex(index);
        setQuizAnswers({});
        setQuizSubmitted(false);
        setQuizScore(null);
        window.scrollTo(0, 0);
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent"></div>
            </div>
        );
    }

    if (!course) {
        return (
            <div className="text-center py-12">
                <p className="text-white/50">Course not found</p>
            </div>
        );
    }

    const currentLesson = course.lessons[activeLessonIndex];
    const prevLesson = activeLessonIndex > 0 ? course.lessons[activeLessonIndex - 1] : null;
    const nextLesson = activeLessonIndex < course.lessons.length - 1 ? course.lessons[activeLessonIndex + 1] : null;
    const currentLessonCompleted = isLessonCompleted(currentLesson.id);
    const progress = Math.round((completedLessons.length / course.lessons.length) * 100);

    return (
        <>
        <CourseCompleteModal
            open={courseComplete}
            courseTitle={course.title}
            courseCode={course.code}
            score={quizScore}
            passScore={course.passScore}
            onDismiss={() => router.push('/academy')}
            onReview={() => {
                setCourseComplete(false);
                navigateTo(0);
            }}
        />
        <div className="flex h-[calc(100vh-80px)] -m-6 md:-m-8">
            {/* Sidebar Navigation */}
            <div className="w-80 border-r border-white/10 bg-black/20 flex flex-col h-full overflow-hidden">
                <div className="p-4 border-b border-white/10">
                    <button
                        onClick={() => router.push('/academy')}
                        className="flex items-center gap-2 text-xs text-white/50 hover:text-white mb-4 transition-colors"
                    >
                        <ArrowLeft size={12} /> Back to Academy
                    </button>
                    <div className="flex items-center gap-2 mb-2">
                        {course.isRequired && (
                            <span className="flex items-center gap-1 text-xs text-red-400">
                                <Shield size={10} /> Required
                            </span>
                        )}
                    </div>
                    <h2 className="font-bold text-white text-sm line-clamp-2">{course.title}</h2>
                    <p className="text-xs text-white/50 mt-1">{course.code}</p>
                    <div className="w-full bg-white/10 h-1.5 rounded-full mt-3 overflow-hidden">
                        <div className="bg-accent h-full transition-all" style={{ width: `${progress}%` }} />
                    </div>
                    <p className="text-[10px] text-white/40 mt-1 text-right">{progress}% Complete</p>
                </div>

                <div className="flex-1 overflow-y-auto custom-scrollbar">
                    {course.lessons.map((lesson, idx) => {
                        const isActive = idx === activeLessonIndex;
                        const isCompleted = isLessonCompleted(lesson.id);

                        return (
                            <button
                                key={lesson.id}
                                onClick={() => navigateTo(idx)}
                                className={clsx(
                                    'w-full text-left px-4 py-3 flex items-start gap-3 hover:bg-white/5 transition-colors border-l-2',
                                    isActive ? 'bg-accent/10 border-accent' : 'border-transparent'
                                )}
                            >
                                <div className={clsx(
                                    'mt-0.5',
                                    isActive ? 'text-accent' : isCompleted ? 'text-green-500' : 'text-white/30'
                                )}>
                                    {isCompleted ? (
                                        <CheckCircle size={16} />
                                    ) : isActive ? (
                                        <PlayCircle size={16} />
                                    ) : (
                                        <Circle size={16} />
                                    )}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className={clsx(
                                        'text-sm font-medium line-clamp-2',
                                        isActive ? 'text-white' : 'text-white/70'
                                    )}>
                                        {lesson.title}
                                    </p>
                                    <div className="flex items-center gap-2 mt-1">
                                        {lesson.type === 'video' && <Video size={10} className="text-white/40" />}
                                        {lesson.type === 'text' && <FileText size={10} className="text-white/40" />}
                                        {lesson.type === 'quiz' && <HelpCircle size={10} className="text-white/40" />}
                                        <span className="text-[10px] text-white/30">{lesson.duration}m</span>
                                    </div>
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 overflow-y-auto bg-[#0a0f18] relative">
                <div className="max-w-4xl mx-auto p-8 lg:p-12 min-h-full flex flex-col">
                    {/* Content Header */}
                    <div className="mb-8 border-b border-white/10 pb-6">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-accent text-xs font-bold uppercase tracking-wider">
                                Lesson {activeLessonIndex + 1} of {course.lessons.length}
                            </span>
                            {currentLessonCompleted && (
                                <span className="flex items-center gap-1 text-xs text-green-400">
                                    <CheckCircle size={12} /> Completed
                                </span>
                            )}
                        </div>
                        <h1 className="text-3xl font-bold text-white">{currentLesson.title}</h1>
                        {currentLesson.description && (
                            <p className="text-white/50 mt-2">{currentLesson.description}</p>
                        )}
                    </div>

                    {/* Dynamic Content Renderer */}
                    <div className="flex-1 space-y-6">
                        {currentLesson.type === 'video' && (
                            <div className="aspect-video bg-black rounded-2xl border border-white/10 flex items-center justify-center relative overflow-hidden group">
                                <div className="text-center">
                                    <PlayCircle size={64} className="text-white/50 group-hover:text-accent transition-colors mx-auto mb-4" />
                                    <p className="text-white/50 font-mono text-sm">[Video Player Placeholder]</p>
                                    <p className="text-xs text-white/30 mt-2">{currentLesson.content || 'Video content'}</p>
                                </div>
                            </div>
                        )}

                        {(currentLesson.type === 'text' || currentLesson.type === 'interactive') && currentLesson.content && (
                            <LessonContent content={currentLesson.content} />
                        )}

                        {currentLesson.type === 'quiz' && currentLesson.questions && (
                            <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
                                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-white/10">
                                    <HelpCircle size={32} className="text-accent" />
                                    <div>
                                        <h3 className="text-xl font-bold text-white">Knowledge Check</h3>
                                        <p className="text-white/50 text-sm">
                                            Answer the following questions. You need {course.passScore}% to pass.
                                        </p>
                                    </div>
                                </div>

                                {quizSubmitted && quizScore !== null && (
                                    <div className={clsx(
                                        'mb-6 p-4 rounded-xl',
                                        quizScore >= course.passScore
                                            ? 'bg-green-500/10 border border-green-500/30'
                                            : 'bg-red-500/10 border border-red-500/30'
                                    )}>
                                        <div className="flex items-center gap-3">
                                            {quizScore >= course.passScore ? (
                                                <Award className="text-green-400" size={24} />
                                            ) : (
                                                <HelpCircle className="text-red-400" size={24} />
                                            )}
                                            <div>
                                                <p className={clsx(
                                                    'font-bold',
                                                    quizScore >= course.passScore ? 'text-green-400' : 'text-red-400'
                                                )}>
                                                    {quizScore >= course.passScore ? 'Passed!' : 'Not Passed'}
                                                </p>
                                                <p className="text-sm text-white/50">
                                                    Your score: {quizScore}% (Required: {course.passScore}%)
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <div className="space-y-6">
                                    {currentLesson.questions.map((q, idx) => (
                                        <div key={q.id} className="space-y-4">
                                            <p className="font-bold text-white text-lg">
                                                {idx + 1}. {q.question}
                                            </p>
                                            <div className="space-y-2">
                                                {q.options.map((opt, optIdx) => {
                                                    const isSelected = quizAnswers[q.id] === optIdx;
                                                    const isCorrect = q.correctAnswer === optIdx;
                                                    const showResult = quizSubmitted;

                                                    return (
                                                        <label
                                                            key={optIdx}
                                                            className={clsx(
                                                                'flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-colors',
                                                                showResult && isCorrect
                                                                    ? 'bg-green-500/10 border-green-500/30'
                                                                    : showResult && isSelected && !isCorrect
                                                                    ? 'bg-red-500/10 border-red-500/30'
                                                                    : isSelected
                                                                    ? 'bg-accent/10 border-accent/30'
                                                                    : 'bg-white/5 border-white/10 hover:bg-white/10',
                                                                quizSubmitted && 'cursor-default'
                                                            )}
                                                        >
                                                            <input
                                                                type="radio"
                                                                name={q.id}
                                                                checked={isSelected}
                                                                onChange={() => !quizSubmitted && setQuizAnswers({ ...quizAnswers, [q.id]: optIdx })}
                                                                disabled={quizSubmitted}
                                                                className="accent-accent w-4 h-4"
                                                            />
                                                            <span className={clsx(
                                                                showResult && isCorrect ? 'text-green-400' :
                                                                showResult && isSelected && !isCorrect ? 'text-red-400' :
                                                                'text-white/80'
                                                            )}>
                                                                {opt}
                                                            </span>
                                                            {showResult && isCorrect && (
                                                                <CheckCircle size={16} className="text-green-400 ml-auto" />
                                                            )}
                                                        </label>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {!quizSubmitted ? (
                                    <button
                                        onClick={handleQuizSubmit}
                                        disabled={Object.keys(quizAnswers).length !== currentLesson.questions.length}
                                        className="w-full mt-8 py-3 bg-accent text-primary font-bold rounded-xl hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        Submit Answers
                                    </button>
                                ) : quizScore !== null && quizScore >= course.passScore ? (
                                    <button
                                        onClick={handleCompleteLesson}
                                        disabled={completing}
                                        className="w-full mt-8 py-3 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition-colors disabled:opacity-50"
                                    >
                                        {completing ? 'Completing...' : nextLesson ? 'Continue to Next Lesson' : 'Complete Course'}
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => {
                                            setQuizAnswers({});
                                            setQuizSubmitted(false);
                                            setQuizScore(null);
                                        }}
                                        className="w-full mt-8 py-3 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-colors"
                                    >
                                        Try Again
                                    </button>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Footer Navigation */}
                    {currentLesson.type !== 'quiz' && (
                        <div className="mt-12 pt-8 border-t border-white/10 flex justify-between items-center">
                            {prevLesson ? (
                                <button
                                    onClick={() => navigateTo(activeLessonIndex - 1)}
                                    className="group flex items-center gap-2 text-white/50 hover:text-white transition-colors"
                                >
                                    <div className="p-2 rounded-full border border-white/10 group-hover:bg-white/10">
                                        <ArrowLeft size={16} />
                                    </div>
                                    <div className="text-left hidden md:block">
                                        <p className="text-xs uppercase font-bold tracking-wider text-white/30">Previous</p>
                                        <p className="text-sm font-bold line-clamp-1">{prevLesson.title}</p>
                                    </div>
                                </button>
                            ) : <div />}

                            {currentLessonCompleted ? (
                                nextLesson ? (
                                    <button
                                        onClick={() => navigateTo(activeLessonIndex + 1)}
                                        className="group flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-xl hover:bg-white/90 transition-colors"
                                    >
                                        <span>Next Lesson</span>
                                        <ArrowRight size={16} />
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => router.push('/academy')}
                                        className="group flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition-colors"
                                    >
                                        <Award size={16} />
                                        <span>Course Complete!</span>
                                    </button>
                                )
                            ) : (
                                <button
                                    onClick={handleCompleteLesson}
                                    disabled={completing}
                                    className="group flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-xl hover:bg-white/90 transition-colors disabled:opacity-50"
                                >
                                    <span>{completing ? 'Saving...' : nextLesson ? 'Complete & Continue' : 'Finish Course'}</span>
                                    <ArrowRight size={16} />
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
        </>
    );
}
