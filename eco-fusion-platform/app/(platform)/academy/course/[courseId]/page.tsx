'use client';

import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { useParams, useRouter } from 'next/navigation';
import {
    PlayCircle, CheckCircle, Circle, FileText, HelpCircle,
    ArrowLeft, ArrowRight, Video, Shield, Award, Lock,
    ChevronDown, Folder, FolderOpen
} from 'lucide-react';
import clsx from 'clsx';
import LessonContent from '@/components/academy/LessonContent';
import CourseCompleteModal from '@/components/academy/CourseCompleteModal';
import CourseResources from '@/components/academy/CourseResources';
import { useToast } from '@/components/ui/Toast';
import { useAcademyViewer } from '@/lib/contexts/AcademyViewerContext';
import { videoSource } from '@/lib/lesson-video';
import { sectionsOf } from '@/lib/lesson-sections';

/**
 * A question as the browser receives it: no answer attached. The quiz is
 * marked on the server, which sends back how each answer went.
 */
interface QuizQuestion {
    id: string;
    question: string;
    options: string[];
}

interface QuizGrade {
    score: number;
    correct: number;
    total: number;
    passed: boolean;
    /** Correct answers and explanations arrive only with a pass. */
    results: Array<{ id: string; correct: boolean; correctAnswer?: number; explanation?: string }>;
}

interface Lesson {
    id: string;
    title: string;
    description: string | null;
    module: string | null;
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
    const toast = useToast();
    const courseId = params?.courseId as string | undefined;
    // Somebody who stepped in from above - EcoFusion's admin or support, or
    // the agency's team - is looking the course over, not taking it. Every
    // lesson is open to them and nothing is recorded: the server takes
    // lessons in order, so completing one out of turn would only be refused.
    const { entered: previewing } = useAcademyViewer();

    const [course, setCourse] = useState<Course | null>(null);
    const [completedLessons, setCompletedLessons] = useState<LessonCompletion[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeLessonIndex, setActiveLessonIndex] = useState(0);
    const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
    // The server's mark for the attempt on screen. Null until submitted.
    const [quizGrade, setQuizGrade] = useState<QuizGrade | null>(null);
    const [quizError, setQuizError] = useState<string | null>(null);
    // The course's score as the server recorded it, for the certificate.
    const [courseScore, setCourseScore] = useState<number | null>(null);
    const [completing, setCompleting] = useState(false);
    // Set when the final lesson lands, so the certification modal can take over
    // from the alert() that used to fire here.
    const [courseComplete, setCourseComplete] = useState(false);
    // The lesson pane scrolls on its own; the window does not move.
    const lessonPaneRef = useRef<HTMLDivElement>(null);
    const sections = useMemo(() => sectionsOf(course?.lessons ?? []), [course]);
    // Which modules are open in the sidebar, by where each starts. Null until
    // the learner opens, closes or moves, meaning: only the one they are in.
    const [openSections, setOpenSections] = useState<Set<number> | null>(null);
    const sectionStartOf = (index: number) =>
        sections.find((s) => index >= s.start && index < s.start + s.lessons.length)?.start ?? 0;
    const openNow = openSections ?? new Set([sectionStartOf(activeLessonIndex)]);

    const toggleSection = (start: number) => {
        const next = new Set(openNow);
        if (next.has(start)) next.delete(start);
        else next.add(start);
        setOpenSections(next);
    };

    const fetchCourse = useCallback(async () => {
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
    }, [courseId, router]);

    useEffect(() => {
        if (courseId) {
            fetchCourse();
        }
    }, [courseId, fetchCourse]);

    const isLessonCompleted = (lessonId: string) => {
        return completedLessons.some(c => c.lessonId === lessonId);
    };

    /**
     * Record the course as finished, once every lesson is.
     *
     * The server decides whether it is - from the lessons this learner has
     * actually completed - and what it scored. Nothing is sent but the course.
     * Returns whether the certificate modal took over.
     */
    const finishCourseIfDone = async (allCompleted: boolean): Promise<boolean> => {
        if (!course || !allCompleted) return false;
        const completionRes = await fetch('/api/training/completions', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ courseId: course.id }),
        });
        if (!completionRes.ok) return false;
        const completion = await completionRes.json();
        setCourseScore(typeof completion.quizScore === 'number' ? completion.quizScore : null);
        // Stay on the page - the modal owns the exit now.
        setCourseComplete(true);
        return true;
    };

    /** Mark a reading lesson done. Quizzes complete by being passed instead. */
    const handleCompleteLesson = async () => {
        if (!course) return;

        const currentLesson = course.lessons[activeLessonIndex];
        setCompleting(true);

        try {
            const res = await fetch(`/api/training/lessons/${currentLesson.id}/complete`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({}),
            });

            const data = await res.json().catch(() => ({}));
            // A refusal (an earlier lesson still open, say) must not tick the
            // lesson off here, or the page would disagree with the server.
            if (!res.ok) {
                toast.error(data.error ?? 'Could not mark this lesson complete');
                setCompleting(false);
                return;
            }

            setCompletedLessons(prev => [...prev, {
                lessonId: currentLesson.id,
                completedAt: new Date().toISOString(),
                quizScore: null,
            }]);

            if (await finishCourseIfDone(data.courseProgress?.allCompleted)) {
                setCompleting(false);
                return;
            }

            if (activeLessonIndex < course.lessons.length - 1) {
                navigateTo(activeLessonIndex + 1);
            }
        } catch (error) {
            console.error('Failed to complete lesson:', error);
            toast.error('Could not mark this lesson complete', { description: 'Check your connection and try again.' });
        }
        setCompleting(false);
    };

    /**
     * Send the chosen answers to be marked.
     *
     * The browser has never seen the answers, so it cannot mark anything
     * itself. A pass completes the lesson on the server in the same step; a
     * fail records nothing and leaves the quiz open to try again.
     */
    const handleQuizSubmit = async () => {
        if (!course) return;
        const currentLesson = course.lessons[activeLessonIndex];
        setCompleting(true);
        setQuizError(null);

        try {
            const res = await fetch(`/api/training/lessons/${currentLesson.id}/complete`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ answers: quizAnswers }),
            });
            const data = await res.json();
            if (!res.ok || !data.grade) {
                setQuizError(data.error ?? 'Could not mark this quiz. Try again.');
                return;
            }

            setQuizGrade(data.grade);
            toTop();

            if (data.passed) {
                setCompletedLessons(prev => [
                    ...prev.filter((c) => c.lessonId !== currentLesson.id),
                    {
                        lessonId: currentLesson.id,
                        completedAt: new Date().toISOString(),
                        quizScore: data.grade.score,
                    },
                ]);
                await finishCourseIfDone(data.courseProgress?.allCompleted);
            }
        } catch (error) {
            console.error('Failed to submit quiz:', error);
            setQuizError('Could not mark this quiz. Try again.');
        } finally {
            setCompleting(false);
        }
    };

    const resetQuiz = () => {
        setQuizAnswers({});
        setQuizGrade(null);
        setQuizError(null);
    };

    // Back to the top of the lesson pane. window.scrollTo cannot do it: the
    // player fills the screen and only the pane itself scrolls.
    const toTop = () => lessonPaneRef.current?.scrollTo({ top: 0 });

    const navigateTo = (index: number) => {
        setActiveLessonIndex(index);
        // Moving into a closed module opens it, so the lesson on screen is
        // always the one lit in the sidebar.
        setOpenSections(new Set(openNow).add(sectionStartOf(index)));
        resetQuiz();
        toTop();
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
    const video = currentLesson.type === 'video' ? videoSource(currentLesson.content) : null;
    const progress = Math.round((completedLessons.length / course.lessons.length) * 100);
    // Where the learner is up to: the first lesson not yet finished. Everything
    // finished can be revisited, and this one can be opened; what lies past it
    // stays locked until it is done. -1 once every lesson is.
    const upToIndex = course.lessons.findIndex((l) => !isLessonCompleted(l.id));

    /** One lesson in the sidebar; set in from the edge when it sits in a module. */
    const lessonRow = (lesson: Lesson, idx: number, inModule: boolean) => {
        const isActive = idx === activeLessonIndex;
        const isCompleted = isLessonCompleted(lesson.id);
        const isLocked = !previewing && !isActive && !isCompleted && idx !== upToIndex;

        return (
            <button
                key={lesson.id}
                onClick={() => navigateTo(idx)}
                disabled={isLocked}
                title={isLocked ? 'Finish the lessons above to unlock this one' : undefined}
                className={clsx(
                    'w-full text-left py-3 flex items-start gap-3 transition-colors border-l-2',
                    inModule ? 'pl-9 pr-4' : 'px-4',
                    isActive ? 'bg-accent/10 border-accent' : 'border-transparent',
                    isLocked ? 'cursor-not-allowed' : 'hover:bg-white/5'
                )}
            >
                <div className={clsx(
                    'mt-0.5',
                    isActive ? 'text-accent' : isCompleted ? 'text-green-500' : isLocked ? 'text-white/20' : 'text-white/30'
                )}>
                    {isCompleted ? (
                        <CheckCircle size={16} />
                    ) : isActive ? (
                        <PlayCircle size={16} />
                    ) : isLocked ? (
                        <Lock size={16} />
                    ) : (
                        <Circle size={16} />
                    )}
                </div>
                <div className="flex-1 min-w-0">
                    <p className={clsx(
                        'text-sm font-medium line-clamp-2',
                        isActive ? 'text-white' : isLocked ? 'text-white/35' : 'text-white/70'
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
    };

    return (
        <>
        <CourseCompleteModal
            open={courseComplete}
            courseTitle={course.title}
            courseCode={course.code}
            score={courseScore}
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
                    {previewing ? (
                        // Nothing is recorded in a preview, so a bar here would
                        // only ever read 0%.
                        <p className="text-[11px] text-white/45 mt-3 leading-relaxed">
                            Preview: every lesson is open, and nothing you do here is saved.
                        </p>
                    ) : (
                        <>
                            <div className="w-full bg-white/10 h-1.5 rounded-full mt-3 overflow-hidden">
                                <div className="bg-accent h-full transition-all" style={{ width: `${progress}%` }} />
                            </div>
                            <p className="text-[10px] text-white/40 mt-1 text-right">{progress}% Complete</p>
                        </>
                    )}
                    <CourseResources courseId={course.id} />
                </div>

                <div className="flex-1 overflow-y-auto custom-scrollbar">
                    {sections.map((section) => {
                        if (section.module === null) return lessonRow(section.lessons[0], section.start, false);

                        const isOpen = openNow.has(section.start);
                        const done = section.lessons.filter((l) => isLessonCompleted(l.id)).length;
                        const FolderIcon = isOpen ? FolderOpen : Folder;
                        return (
                            <div key={`module-${section.start}`} className="border-b border-white/5">
                                <button
                                    type="button"
                                    onClick={() => toggleSection(section.start)}
                                    aria-expanded={isOpen}
                                    className="w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-white/5 transition-colors"
                                >
                                    <FolderIcon
                                        size={16}
                                        className={clsx('shrink-0', done === section.lessons.length ? 'text-green-500' : 'text-white/40')}
                                    />
                                    <span className="flex-1 min-w-0 text-sm font-semibold text-white line-clamp-2">
                                        {section.module}
                                    </span>
                                    <span className="text-[10px] text-white/35 shrink-0 tabular-nums">
                                        {done}/{section.lessons.length}
                                    </span>
                                    <ChevronDown
                                        size={14}
                                        className={clsx('text-white/40 shrink-0 transition-transform', isOpen && 'rotate-180')}
                                    />
                                </button>
                                {isOpen && section.lessons.map((lesson, i) => lessonRow(lesson, section.start + i, true))}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Main Content Area */}
            <div ref={lessonPaneRef} className="flex-1 overflow-y-auto bg-[#0a0f18] relative">
                <div className="p-8 lg:p-12 min-h-full flex flex-col">
                    {/* Content Header */}
                    <div className="mb-8 border-b border-white/10 pb-6">
                        {currentLesson.module && (
                            <p className="text-xs text-white/40 mb-2">{currentLesson.module}</p>
                        )}
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
                            <div className="aspect-video bg-black rounded-2xl border border-white/10 flex items-center justify-center relative overflow-hidden">
                                {video?.kind === 'file' ? (
                                    <video
                                        key={currentLesson.id}
                                        src={video.src}
                                        controls
                                        playsInline
                                        preload="metadata"
                                        className="w-full h-full"
                                    />
                                ) : video?.kind === 'embed' ? (
                                    <iframe
                                        key={currentLesson.id}
                                        src={video.src}
                                        title={currentLesson.title}
                                        allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                                        allowFullScreen
                                        sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        className="w-full h-full"
                                    />
                                ) : (
                                    <div className="text-center">
                                        <PlayCircle size={64} className="text-white/30 mx-auto mb-4" />
                                        <p className="text-white/50 text-sm">This video is not ready yet</p>
                                    </div>
                                )}
                            </div>
                        )}

                        {(currentLesson.type === 'text' || currentLesson.type === 'interactive') && currentLesson.content && (
                            <LessonContent content={currentLesson.content} />
                        )}

                        {currentLesson.type === 'quiz' && !currentLesson.questions?.length && (
                            <div className="glass-card p-8 rounded-2xl text-center">
                                <HelpCircle size={48} className="text-white/30 mx-auto mb-4" />
                                <p className="text-white/50 text-sm">This quiz is not ready yet</p>
                            </div>
                        )}

                        {currentLesson.type === 'quiz' && !!currentLesson.questions?.length && (
                            <div className="glass-card p-8 rounded-2xl">
                                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-white/10">
                                    <HelpCircle size={32} className="text-accent" />
                                    <div>
                                        <h3 className="text-xl font-bold text-white">Knowledge Check</h3>
                                        <p className="text-white/50 text-sm">
                                            Answer the following questions. You need {course.passScore}% to pass.
                                        </p>
                                    </div>
                                </div>

                                {currentLesson.content && !quizGrade && (
                                    <div className="mb-6">
                                        <LessonContent content={currentLesson.content} />
                                    </div>
                                )}

                                {quizGrade && (
                                    <div className={clsx(
                                        'mb-6 p-4 rounded-xl',
                                        quizGrade.passed
                                            ? 'bg-green-500/10 border border-green-500/30'
                                            : 'bg-red-500/10 border border-red-500/30'
                                    )}>
                                        <div className="flex items-center gap-3">
                                            {quizGrade.passed ? (
                                                <Award className="text-green-400" size={24} />
                                            ) : (
                                                <HelpCircle className="text-red-400" size={24} />
                                            )}
                                            <div>
                                                <p className={clsx(
                                                    'font-bold',
                                                    quizGrade.passed ? 'text-green-400' : 'text-red-400'
                                                )}>
                                                    {quizGrade.passed ? 'Passed!' : 'Not Passed'}
                                                </p>
                                                <p className="text-sm text-white/50">
                                                    {quizGrade.correct} of {quizGrade.total} correct - {quizGrade.score}%
                                                    {' '}(Required: {course.passScore}%)
                                                </p>
                                                {!quizGrade.passed && (
                                                    <p className="text-xs text-white/40 mt-1">
                                                        Review the lesson and try again. The right answers, and why,
                                                        are shown once you pass.
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {quizError && (
                                    <p className="mb-6 text-sm text-red-300">{quizError}</p>
                                )}

                                <div className="space-y-6">
                                    {currentLesson.questions.map((q, idx) => {
                                        const result = quizGrade?.results.find((r) => r.id === q.id);
                                        return (
                                        <div key={q.id} className="space-y-4">
                                            <p className="font-bold text-white text-lg">
                                                {idx + 1}. {q.question}
                                            </p>
                                            <div className="space-y-2">
                                                {q.options.map((opt, optIdx) => {
                                                    const isSelected = quizAnswers[q.id] === optIdx;
                                                    // What the server said about this choice. The
                                                    // right option is only known once it is sent,
                                                    // which is only on a pass.
                                                    const markedRight = Boolean(result && isSelected && result.correct);
                                                    const markedWrong = Boolean(result && isSelected && !result.correct);
                                                    const revealed = result?.correctAnswer === optIdx;

                                                    return (
                                                        <label
                                                            key={optIdx}
                                                            className={clsx(
                                                                'flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-colors',
                                                                markedRight || revealed
                                                                    ? 'bg-green-500/10 border-green-500/30'
                                                                    : markedWrong
                                                                    ? 'bg-red-500/10 border-red-500/30'
                                                                    : isSelected
                                                                    ? 'bg-accent/10 border-accent/30'
                                                                    : 'bg-white/5 border-white/10 hover:bg-white/10',
                                                                quizGrade && 'cursor-default'
                                                            )}
                                                        >
                                                            <input
                                                                type="radio"
                                                                name={q.id}
                                                                checked={isSelected}
                                                                onChange={() => !quizGrade && setQuizAnswers({ ...quizAnswers, [q.id]: optIdx })}
                                                                disabled={Boolean(quizGrade)}
                                                                className="accent-accent w-4 h-4"
                                                            />
                                                            <span className={clsx(
                                                                markedRight || revealed ? 'text-green-400' :
                                                                markedWrong ? 'text-red-400' :
                                                                'text-white/80'
                                                            )}>
                                                                {opt}
                                                            </span>
                                                            {(markedRight || revealed) && (
                                                                <CheckCircle size={16} className="text-green-400 ml-auto" />
                                                            )}
                                                        </label>
                                                    );
                                                })}
                                            </div>
                                            {result?.explanation && (
                                                <p className="text-sm text-white/55 pl-1 border-l-2 border-accent/40 ml-1 py-1 px-3">
                                                    {result.explanation}
                                                </p>
                                            )}
                                        </div>
                                        );
                                    })}
                                </div>

                                {previewing ? (
                                    <p className="mt-8 text-sm text-white/45 text-center">
                                        Preview: answers are not marked here, and nothing is saved.
                                    </p>
                                ) : !quizGrade ? (
                                    <button
                                        onClick={handleQuizSubmit}
                                        disabled={completing || Object.keys(quizAnswers).length !== currentLesson.questions.length}
                                        className="w-full mt-8 py-3 bg-accent text-primary font-bold rounded-xl hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {completing ? 'Marking...' : 'Submit Answers'}
                                    </button>
                                ) : quizGrade.passed ? (
                                    // Already completed on the server when it was marked.
                                    nextLesson && (
                                        <button
                                            onClick={() => navigateTo(activeLessonIndex + 1)}
                                            className="w-full mt-8 py-3 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition-colors"
                                        >
                                            Continue to Next Lesson
                                        </button>
                                    )
                                ) : (
                                    <button
                                        onClick={resetQuiz}
                                        className="w-full mt-8 py-3 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-colors"
                                    >
                                        Try Again
                                    </button>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Footer Navigation. A learner leaves a quiz by passing it;
                        a preview has no passing, so it moves on from here too. */}
                    {(currentLesson.type !== 'quiz' || previewing) && (
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

                            {currentLessonCompleted || previewing ? (
                                nextLesson ? (
                                    <button
                                        onClick={() => navigateTo(activeLessonIndex + 1)}
                                        className="group flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-xl hover:bg-white/90 transition-colors"
                                    >
                                        <span>Next Lesson</span>
                                        <ArrowRight size={16} />
                                    </button>
                                ) : previewing ? (
                                    <button
                                        onClick={() => router.push('/academy/catalog')}
                                        className="group flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-colors"
                                    >
                                        <ArrowLeft size={16} />
                                        <span>Back to Courses</span>
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
