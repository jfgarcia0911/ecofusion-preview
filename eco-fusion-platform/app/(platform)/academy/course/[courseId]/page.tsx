"use client";
import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { COURSES } from "@/lib/data/lms-seed";
import { useLmsStore } from "@/lib/stores/use-lms-store";
import { PlayCircle, CheckCircle, Circle, FileText, HelpCircle, ArrowLeft, ArrowRight, Video, Lock } from "lucide-react";
import clsx from "clsx";
import ReactMarkdown from "react-markdown";
import { QuizView } from "../_components/quiz-view";
import { CertificateModal } from "../_components/certificate-modal";

export default function CoursePlayerPage() {
    const params = useParams();
    const router = useRouter();
    const courseId = params.courseId as string;
    const course = COURSES.find(c => c.id === courseId);

    const {
        isLessonCompleted,
        completeLesson,
        completeCourse,
        addXp
    } = useLmsStore();

    // State for active lesson (default to first)
    // We could hydrate this from URL query param or store last viewed,
    // but defaulting to 0 is fine for now.
    const [activeModuleIndex, setActiveModuleIndex] = useState(0);
    const [activeLessonIndex, setActiveLessonIndex] = useState(0);
    const [showCertificate, setShowCertificate] = useState(false);

    if (!course) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-10">
                <div className="w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center mb-6">
                    <FileText size={40} className="text-red-400" />
                </div>
                <h1 className="text-2xl font-bold text-white mb-2">Course Not Found</h1>
                <p className="text-white/50 mb-6 max-w-md">
                    The course you&apos;re looking for doesn&apos;t exist or may have been removed.
                </p>
                <button
                    onClick={() => router.push('/academy')}
                    className="px-6 py-3 bg-accent text-primary font-bold rounded-xl hover:bg-accent/90 transition-colors flex items-center gap-2"
                >
                    <ArrowLeft size={18} /> Back to Academy
                </button>
            </div>
        );
    }

    const currentModule = course.modules[activeModuleIndex];
    const currentLesson = currentModule.lessons[activeLessonIndex];

    // Flatten for navigation logic
    const allLessons = course.modules.flatMap((m, mIdx) => m.lessons.map((l, lIdx) => ({ ...l, mIdx, lIdx })));
    const currentIndex = allLessons.findIndex(l => l.id === currentLesson.id);
    const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
    const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;

    // Check if current lesson is locked (previous lesson must be completed)
    // First lesson is always unlocked.
    const isLocked = (mIdx: number, lIdx: number) => {
        if (mIdx === 0 && lIdx === 0) return false;

        // Find absolute index of target
        const targetFlatIndex = allLessons.findIndex(l => l.mIdx === mIdx && l.lIdx === lIdx);
        if (targetFlatIndex <= 0) return false;

        // Check if previous lesson is completed
        const prevId = allLessons[targetFlatIndex - 1].id;
        return !isLessonCompleted(prevId);
    };

    const navigateTo = (mIdx: number, lIdx: number) => {
        if (isLocked(mIdx, lIdx)) {
            // Optional: Shake animation or toast "Finish previous lesson first"
            return;
        }
        setActiveModuleIndex(mIdx);
        setActiveLessonIndex(lIdx);
        window.scrollTo(0, 0);
    };

    const handleLessonComplete = () => {
        // Mark current lesson as complete
        if (!isLessonCompleted(currentLesson.id)) {
            completeLesson(currentLesson.id);
            addXp(50); // Standard lesson XP
        }

        // Navigate to next
        if (nextLesson) {
            navigateTo(nextLesson.mIdx, nextLesson.lIdx);
        } else {
            // Course Complete!
            completeCourse(courseId);
            addXp(500); // Course bonus
            setShowCertificate(true);
        }
    };

    return (
        <div className="flex h-[calc(100vh-80px)] -m-6 md:-m-8">
            <CertificateModal
                isOpen={showCertificate}
                onClose={() => {
                    setShowCertificate(false);
                    router.push('/academy');
                }}
                courseTitle={course.title}
            />

            {/* Sidebar Navigation */}
            <div className="w-80 border-r border-white/10 bg-black/20 flex flex-col h-full overflow-hidden shrink-0">
                <div className="p-4 border-b border-white/10">
                    <button onClick={() => router.push("/academy")} className="flex items-center gap-2 text-xs text-white/50 hover:text-white mb-4 transition-colors">
                        <ArrowLeft size={12} /> Back to Dashboard
                    </button>
                    <h2 className="font-bold text-white text-sm line-clamp-1">{course.title}</h2>
                    {/* Progress Bar */}
                    <div className="w-full bg-white/10 h-1 rounded-full mt-3 overflow-hidden">
                        {/* We could calculate real % here */}
                        <div className="bg-accent h-full" style={{ width: `${(allLessons.filter(l => isLessonCompleted(l.id)).length / allLessons.length) * 100}%` }} />
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto custom-scrollbar">
                    {course.modules.map((module, mIdx) => (
                        <div key={module.id} className="border-b border-white/5">
                            <div className="px-4 py-3 bg-white/5">
                                <h3 className="text-xs font-bold text-white/70 uppercase tracking-wider line-clamp-1">{module.title}</h3>
                            </div>
                            <div>
                                {module.lessons.map((lesson, lIdx) => {
                                    const isActive = mIdx === activeModuleIndex && lIdx === activeLessonIndex;
                                    const isCompleted = isLessonCompleted(lesson.id);
                                    const locked = isLocked(mIdx, lIdx);

                                    return (
                                        <button
                                            key={lesson.id}
                                            onClick={() => navigateTo(mIdx, lIdx)}
                                            disabled={locked}
                                            className={clsx("w-full text-left px-4 py-3 flex items-start gap-3 transition-colors border-l-2 relative",
                                                isActive ? "bg-accent/10 border-accent" : "border-transparent hover:bg-white/5",
                                                locked && "opacity-50 cursor-not-allowed"
                                            )}
                                        >
                                            <div className={clsx("mt-0.5", isActive ? "text-accent" : isCompleted ? "text-green-500" : "text-white/30")}>
                                                {locked ? <Lock size={16} /> : isCompleted ? <CheckCircle size={16} /> : isActive ? <PlayCircle size={16} /> : <Circle size={16} />}
                                            </div>
                                            <div>
                                                <p className={clsx("text-sm font-medium line-clamp-2", isActive ? "text-white" : "text-white/70")}>{lesson.title}</p>
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
                    ))}
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 overflow-y-auto bg-[#0a0f18] relative">
                <div className="max-w-4xl mx-auto p-8 lg:p-12 min-h-full flex flex-col">

                    {/* Content Header */}
                    <div className="mb-8 border-b border-white/10 pb-6">
                        <span className="text-accent text-xs font-bold uppercase tracking-wider mb-2 block">
                            {currentModule.title}
                        </span>
                        <div className="flex items-center justify-between">
                            <h1 className="text-3xl font-bold text-white">{currentLesson.title}</h1>
                            {isLessonCompleted(currentLesson.id) && (
                                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold uppercase tracking-wide">
                                    <CheckCircle size={14} /> Completed
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Dynamic Content Renderer */}
                    <div className="flex-1 space-y-6">
                        {currentLesson.type === 'video' && (
                            <div className="space-y-6">
                                <div className="aspect-video bg-black rounded-2xl border border-white/10 flex items-center justify-center relative overflow-hidden group shadow-2xl">
                                    <div className="text-center">
                                        <PlayCircle size={64} className="text-white/50 group-hover:text-accent transition-colors mx-auto mb-4 cursor-pointer hover:scale-110 duration-300" />
                                        <p className="text-white/50 font-mono text-sm">[Video Player Placeholder]</p>
                                        <p className="text-xs text-white/30 mt-2">{currentLesson.videoUrl || "No source"}</p>
                                    </div>
                                </div>
                                <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-xl flex gap-3 text-blue-200 text-sm">
                                    <div className="mt-0.5"><Video size={16} /></div>
                                    <p>Watch the entire video above to master this concept.</p>
                                </div>
                            </div>
                        )}

                        {(currentLesson.type === 'text' || currentLesson.type === 'interactive') && (
                            <div className="prose prose-invert max-w-none prose-headings:text-white prose-p:text-white/70 prose-a:text-accent prose-strong:text-white prose-li:text-white/70">
                                {currentLesson.content ? (
                                    <div className="whitespace-pre-wrap">{currentLesson.content}</div>
                                ) : (
                                    <p className="text-white/30 italic">Content loading...</p>
                                )}

                                {/* Placeholder Content Filler if short */}
                                {!currentLesson.content?.includes('\n') && (
                                    <div className="mt-8 space-y-4 text-white/50">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        <h3>Key Takeaways</h3>
                                        <ul>
                                            <li>Understanding the core principles of {course.title}</li>
                                            <li>Applying sustainable practices in daily operations</li>
                                            <li>Analyzing system components and their interactions</li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        )}

                        {currentLesson.type === 'quiz' && (
                            <QuizView
                                lessonId={currentLesson.id}
                                questions={currentLesson.questions || []}
                                onComplete={handleLessonComplete}
                            />
                        )}
                    </div>

                    {/* Footer Navigation */}
                    {currentLesson.type !== 'quiz' && (
                        <div className="mt-12 pt-8 border-t border-white/10 flex justify-between items-center">
                            {prevLesson ? (
                                <button
                                    onClick={() => navigateTo(prevLesson.mIdx, prevLesson.lIdx)}
                                    className="group flex items-center gap-2 text-white/50 hover:text-white transition-colors"
                                >
                                    <div className="p-2 rounded-full border border-white/10 group-hover:bg-white/10">
                                        <ArrowLeft size={16} />
                                    </div>
                                    <div className="text-left hidden md:block">
                                        <p className="text-xs uppercase font-bold tracking-wider text-white/30">Previous</p>
                                        <p className="text-sm font-bold">{prevLesson.title}</p>
                                    </div>
                                </button>
                            ) : <div />}

                            <button
                                onClick={handleLessonComplete}
                                className="group flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-xl hover:bg-white/90 transition-colors shadow-lg hover:shadow-xl"
                            >
                                <span>{isLessonCompleted(currentLesson.id) ? (nextLesson ? "Next Lesson" : "Finish Course") : "Mark Complete & Continue"}</span>
                                <ArrowRight size={16} />
                            </button>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}
