"use client";
import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { COURSES, MOCK_USER_PROGRESS } from "@/lib/data/lms-seed";
import { PlayCircle, CheckCircle, Circle, FileText, HelpCircle, ArrowLeft, ArrowRight, Video } from "lucide-react";
import clsx from "clsx";
import ReactMarkdown from "react-markdown";

export default function CoursePlayerPage() {
    const params = useParams();
    const router = useRouter();
    const courseId = params.courseId as string;
    const course = COURSES.find(c => c.id === courseId);

    // State for active lesson (default to first)
    const [activeModuleIndex, setActiveModuleIndex] = useState(0);
    const [activeLessonIndex, setActiveLessonIndex] = useState(0);

    if (!course) return <div className="text-white p-10">Course not found</div>;

    const currentModule = course.modules[activeModuleIndex];
    const currentLesson = currentModule.lessons[activeLessonIndex];

    // Flatten for navigation
    const allLessons = course.modules.flatMap((m, mIdx) => m.lessons.map((l, lIdx) => ({ ...l, mIdx, lIdx })));
    const currentIndex = allLessons.findIndex(l => l.id === currentLesson.id);
    const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
    const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;

    const navigateTo = (mIdx: number, lIdx: number) => {
        setActiveModuleIndex(mIdx);
        setActiveLessonIndex(lIdx);
        window.scrollTo(0, 0);
    };

    const handleComplete = () => {
        // Mock completion logic
        if (nextLesson) {
            navigateTo(nextLesson.mIdx, nextLesson.lIdx);
        } else {
            alert("Course Completed! +500 XP");
            router.push("/academy");
        }
    };

    return (
        <div className="flex h-[calc(100vh-80px)] -m-6 md:-m-8">
            {/* Sidebar Navigation */}
            <div className="w-80 border-r border-white/10 bg-black/20 flex flex-col h-full overflow-hidden">
                <div className="p-4 border-b border-white/10">
                    <button onClick={() => router.push("/academy")} className="flex items-center gap-2 text-xs text-white/50 hover:text-white mb-4 transition-colors">
                        <ArrowLeft size={12} /> Back to Dashboard
                    </button>
                    <h2 className="font-bold text-white text-sm line-clamp-1">{course.title}</h2>
                    <div className="w-full bg-white/10 h-1 rounded-full mt-3 overflow-hidden">
                        <div className="bg-accent h-full w-1/4" />
                    </div>
                    <p className="text-[10px] text-white/40 mt-1 text-right">25% Complete</p>
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
                                    // Mock completion status for UI demo
                                    const isCompleted = mIdx < activeModuleIndex || (mIdx === activeModuleIndex && lIdx < activeLessonIndex);

                                    return (
                                        <button
                                            key={lesson.id}
                                            onClick={() => navigateTo(mIdx, lIdx)}
                                            className={clsx("w-full text-left px-4 py-3 flex items-start gap-3 hover:bg-white/5 transition-colors border-l-2",
                                                isActive ? "bg-accent/10 border-accent" : "border-transparent"
                                            )}
                                        >
                                            <div className={clsx("mt-0.5", isActive ? "text-accent" : isCompleted ? "text-green-500" : "text-white/30")}>
                                                {isCompleted ? <CheckCircle size={16} /> : isActive ? <PlayCircle size={16} /> : <Circle size={16} />}
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
                        <h1 className="text-3xl font-bold text-white">{currentLesson.title}</h1>
                    </div>

                    {/* Dynamic Content Renderer */}
                    <div className="flex-1 space-y-6">
                        {currentLesson.type === 'video' && (
                            <div className="aspect-video bg-black rounded-2xl border border-white/10 flex items-center justify-center relative overflow-hidden group">
                                {/* Using a placeholder image or iframe if real */}
                                <div className="text-center">
                                    <PlayCircle size={64} className="text-white/50 group-hover:text-accent transition-colors mx-auto mb-4" />
                                    <p className="text-white/50 font-mono text-sm">[Video Player Placeholder]</p>
                                    <p className="text-xs text-white/30 mt-2">{currentLesson.videoUrl || "No source"}</p>
                                </div>
                            </div>
                        )}

                        {(currentLesson.type === 'text' || currentLesson.type === 'interactive') && (
                            <div className="prose prose-invert max-w-none prose-headings:text-white prose-p:text-white/70 prose-a:text-accent prose-strong:text-white">
                                {/* Render markdown content if available, else placeholder */}
                                {currentLesson.content ? (
                                    <div className="whitespace-pre-wrap">{currentLesson.content}</div>
                                ) : (
                                    <p>Content loading...</p>
                                )}

                                {/* Placeholder for long text content to fill space */}
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <h3>Key Takeaways</h3>
                                <ul>
                                    <li>Understanding the core principles of {course.title}</li>
                                    <li>Applying sustainable practices in daily operations</li>
                                    <li>Analyzing system components and their interactions</li>
                                </ul>
                            </div>
                        )}

                        {currentLesson.type === 'quiz' && (
                            <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
                                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-white/10">
                                    <HelpCircle size={32} className="text-accent" />
                                    <div>
                                        <h3 className="text-xl font-bold text-white">Knowledge Check</h3>
                                        <p className="text-white/50 text-sm">Answer the following questions to complete this lesson.</p>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    {currentLesson.questions?.map((q, idx) => (
                                        <div key={q.id} className="space-y-4">
                                            <p className="font-bold text-white text-lg">{idx + 1}. {q.question}</p>
                                            <div className="space-y-2">
                                                {q.options.map((opt, optIdx) => (
                                                    <label key={optIdx} className="flex items-center gap-3 p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 cursor-pointer transition-colors group">
                                                        <input type="radio" name={q.id} className="accent-accent w-4 h-4" />
                                                        <span className="text-white/80 group-hover:text-white">{opt}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <button onClick={handleComplete} className="w-full mt-8 py-3 bg-accent text-primary font-bold rounded-xl hover:bg-accent/90 transition-colors">
                                    Submit Answers
                                </button>
                            </div>
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
                                onClick={handleComplete}
                                className="group flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-xl hover:bg-white/90 transition-colors"
                            >
                                <span>{nextLesson ? "Next Lesson" : "Finish Course"}</span>
                                <ArrowRight size={16} />
                            </button>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}
