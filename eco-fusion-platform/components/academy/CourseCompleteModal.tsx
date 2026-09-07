'use client';

/**
 * Shown once, when the last lesson of a course is completed.
 *
 * This is the payoff for an hour of compliance training, so it gets a real
 * moment rather than the browser's "localhost:3000 says" alert. Everything
 * animated here is decorative - the text alone carries the message, and the
 * whole thing collapses to a static card under prefers-reduced-motion.
 */

import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Award, ArrowRight, RotateCcw } from 'lucide-react';
import clsx from 'clsx';
import { useIsClient } from '@/components/ui/use-is-client';

interface CourseCompleteModalProps {
    open: boolean;
    courseTitle: string;
    courseCode?: string;
    /** Final quiz score, when the course ended on one. */
    score?: number | null;
    passScore?: number;
    onDismiss: () => void;
    /** Optional "read it again" path back into the first lesson. */
    onReview?: () => void;
}

/** Fixed offsets keep the sparks from clustering; they never re-randomise. */
const SPARKS = [
    { left: '8%',  delay: '0s',    hue: 'bg-accent'  },
    { left: '21%', delay: '0.7s',  hue: 'bg-info'    },
    { left: '35%', delay: '0.25s', hue: 'bg-accent'  },
    { left: '49%', delay: '1.1s',  hue: 'bg-warning' },
    { left: '63%', delay: '0.45s', hue: 'bg-accent'  },
    { left: '77%', delay: '1.4s',  hue: 'bg-info'    },
    { left: '90%', delay: '0.9s',  hue: 'bg-accent'  },
];

export default function CourseCompleteModal({
    open,
    courseTitle,
    courseCode,
    score,
    passScore,
    onDismiss,
    onReview,
}: CourseCompleteModalProps) {
    const primaryBtn = useRef<HTMLButtonElement>(null);
    const mounted = useIsClient();

    useEffect(() => {
        if (!open) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onDismiss();
        };

        document.addEventListener('keydown', onKeyDown);
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        primaryBtn.current?.focus();

        return () => {
            document.removeEventListener('keydown', onKeyDown);
            document.body.style.overflow = prevOverflow;
        };
    }, [open, onDismiss]);

    if (!mounted || !open) return null;

    return createPortal(
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
            <div
                onClick={onDismiss}
                className="absolute inset-0 bg-black/75 backdrop-blur-md animate-overlay-in"
            />

            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="course-complete-title"
                className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-accent/20 bg-[#07160f]/97 shadow-[0_0_80px_-20px_rgba(74,222,128,0.45)] backdrop-blur-2xl animate-dialog-in"
            >
                {/* Falling sparks, clipped to the header area. */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-56 overflow-hidden" aria-hidden>
                    {SPARKS.map((s, i) => (
                        <span
                            key={i}
                            className={clsx('absolute top-0 h-1.5 w-1.5 rounded-[1px] opacity-0 animate-spark-fall', s.hue)}
                            style={{ left: s.left, animationDelay: s.delay }}
                        />
                    ))}
                </div>

                {/* Emerald wash behind the medal. */}
                <div
                    className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/3 rounded-full bg-accent/20 blur-[80px]"
                    aria-hidden
                />

                <div className="relative px-8 pb-8 pt-12 text-center">
                    {/* Medal with expanding rings */}
                    <div className="relative mx-auto mb-7 flex h-24 w-24 items-center justify-center" aria-hidden>
                        <span className="absolute inset-0 rounded-full border border-accent/40 animate-ring-expand" />
                        <span
                            className="absolute inset-0 rounded-full border border-accent/30 animate-ring-expand"
                            style={{ animationDelay: '1.2s' }}
                        />
                        <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-accent/30 bg-gradient-to-b from-accent/25 to-accent/5 animate-medal-pop">
                            <Award size={44} strokeWidth={1.6} className="text-accent drop-shadow-[0_0_12px_rgba(74,222,128,0.6)]" />
                        </div>
                    </div>

                    <p className="mb-3 text-[0.6875rem] font-bold uppercase tracking-[0.22em] text-accent">
                        Certification Earned
                    </p>

                    <h2
                        id="course-complete-title"
                        className="text-[1.625rem] font-bold leading-tight tracking-tight text-white"
                    >
                        {courseTitle}
                    </h2>

                    <p className="mx-auto mt-3 max-w-sm text-[0.9375rem] leading-relaxed text-white/55">
                        You&rsquo;ve completed every lesson in this course. Your certification is
                        recorded on your training record.
                    </p>

                    {(courseCode || typeof score === 'number') && (
                        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
                            {courseCode && (
                                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 font-mono text-xs text-white/60">
                                    {courseCode}
                                </span>
                            )}
                            {typeof score === 'number' && (
                                <span className="rounded-full border border-accent/25 bg-accent/10 px-3.5 py-1.5 text-xs font-semibold text-accent">
                                    Final score {score}%
                                    {typeof passScore === 'number' && (
                                        <span className="ml-1 font-normal text-accent/60">
                                            (pass {passScore}%)
                                        </span>
                                    )}
                                </span>
                            )}
                        </div>
                    )}

                    <div className="mt-8 flex flex-col-reverse gap-2.5 sm:flex-row sm:justify-center">
                        {onReview && (
                            <button
                                type="button"
                                onClick={onReview}
                                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold text-white/70 transition-colors hover:bg-white/5 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                            >
                                <RotateCcw size={15} />
                                Review course
                            </button>
                        )}
                        <button
                            ref={primaryBtn}
                            type="button"
                            onClick={onDismiss}
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-bold text-primary transition-colors hover:bg-accent/85 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#07160f]"
                        >
                            Back to Academy
                            <ArrowRight size={15} />
                        </button>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
}
