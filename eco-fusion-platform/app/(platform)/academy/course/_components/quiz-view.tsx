
"use client";

import React, { useState } from 'react';
import { HelpCircle, CheckCircle, XCircle, RefreshCw, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { useLmsStore } from '@/lib/stores/use-lms-store';

interface Question {
    id: string;
    question: string;
    options: string[];
    correctAnswer: number;
}

interface QuizViewProps {
    lessonId: string;
    questions: Question[];
    onComplete: () => void;
}

export function QuizView({ lessonId, questions, onComplete }: QuizViewProps) {
    const { submitQuizScore, addXp, isLessonCompleted } = useLmsStore();
    const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
    const [submitted, setSubmitted] = useState(false);
    const [score, setScore] = useState(0);

    const handleSelect = (qId: string, optIdx: number) => {
        if (submitted) return;
        setSelectedAnswers(prev => ({ ...prev, [qId]: optIdx }));
    };

    const handleSubmit = () => {
        if (!questions || questions.length === 0) {
            setScore(0);
            setSubmitted(true);
            return;
        }

        let correctCount = 0;
        questions.forEach(q => {
            if (selectedAnswers[q.id] === q.correctAnswer) {
                correctCount++;
            }
        });

        const calculatedScore = Math.round((correctCount / questions.length) * 100);
        setScore(calculatedScore);
        setSubmitted(true);
        submitQuizScore(lessonId, calculatedScore);

        if (calculatedScore >= 70) {
            if (!isLessonCompleted(lessonId)) {
                addXp(100); // Bonus for passing
            }
            // Allow parent to mark lesson complete
            // setTimeout(onComplete, 2000); // Auto advances? Maybe not, allow user to review.
        }
    };

    const handleRetry = () => {
        setSelectedAnswers({});
        setSubmitted(false);
        setScore(0);
    };

    const allAnswered = questions.every(q => selectedAnswers[q.id] !== undefined);
    const passed = score >= 70;

    return (
        <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto border border-white/10">
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-white/10">
                <div className={clsx("p-3 rounded-full", submitted ? (passed ? "bg-green-500/20 text-green-500" : "bg-red-500/20 text-red-500") : "bg-accent/20 text-accent")}>
                    <HelpCircle size={32} />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-white">
                        {submitted ? (passed ? "Quiz Passed!" : "Quiz Failed") : "Knowledge Check"}
                    </h3>
                    <p className="text-white/50 text-sm">
                        {submitted
                            ? `You scored ${score}%. ${passed ? "Great job!" : "Review the material and try again."}`
                            : "Answer all questions to proceed."
                        }
                    </p>
                </div>
            </div>

            <div className="space-y-8">
                {questions.map((q, idx) => {
                    const isCorrect = selectedAnswers[q.id] === q.correctAnswer;
                    const showResult = submitted;

                    return (
                        <div key={q.id} className="space-y-4">
                            <p className="font-bold text-white text-lg flex gap-2">
                                <span className="text-white/30">{idx + 1}.</span> {q.question}
                            </p>
                            <div className="space-y-2">
                                {q.options.map((opt, optIdx) => {
                                    const isSelected = selectedAnswers[q.id] === optIdx;
                                    const isThisCorrect = q.correctAnswer === optIdx;

                                    let itemClass = "border-white/10 bg-white/5 hover:bg-white/10";
                                    let icon = null;

                                    if (showResult) {
                                        if (isThisCorrect) {
                                            itemClass = "border-green-500/50 bg-green-500/10 text-green-200";
                                            icon = <CheckCircle size={16} className="text-green-500" />;
                                        } else if (isSelected && !isThisCorrect) {
                                            itemClass = "border-red-500/50 bg-red-500/10 text-red-200";
                                            icon = <XCircle size={16} className="text-red-500" />;
                                        } else {
                                            itemClass = "border-white/5 bg-transparent opacity-50";
                                        }
                                    } else if (isSelected) {
                                        itemClass = "border-accent bg-accent/10 text-white";
                                    }

                                    return (
                                        <button
                                            key={optIdx}
                                            onClick={() => handleSelect(q.id, optIdx)}
                                            disabled={submitted}
                                            className={clsx(
                                                "w-full flex items-center justify-between text-left p-4 rounded-xl border transition-all",
                                                itemClass
                                            )}
                                        >
                                            <span className="text-sm font-medium">{opt}</span>
                                            {icon}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
                {!submitted ? (
                    <button
                        onClick={handleSubmit}
                        disabled={!allAnswered}
                        className={clsx(
                            "w-full py-3 font-bold rounded-xl transition-all flex items-center justify-center gap-2",
                            allAnswered
                                ? "bg-accent text-primary hover:bg-accent/90"
                                : "bg-white/10 text-white/30 cursor-not-allowed"
                        )}
                    >
                        Submit Answers
                    </button>
                ) : (
                    <div className="flex gap-4">
                        {!passed && (
                            <button
                                onClick={handleRetry}
                                className="flex-1 py-3 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
                            >
                                <RefreshCw size={18} /> Retry Quiz
                            </button>
                        )}
                        {passed && (
                            <button
                                onClick={onComplete}
                                className="flex-1 py-3 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
                            >
                                Continue <ArrowRight size={18} />
                            </button>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
