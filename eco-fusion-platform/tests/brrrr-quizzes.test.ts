import { describe, expect, it } from 'vitest';
import { grade, storedQuestions } from '@/lib/quiz';
import { INTRO_QUIZ } from '@/scripts/brrrr-quizzes';

/** The BRRRR course's pass mark, from seed-brrrr-course.ts. */
const PASS_SCORE = 80;

const answering = (right: number) =>
    Object.fromEntries(INTRO_QUIZ.map((q, i) => [q.id, i < right ? q.correctAnswer : -1]));

describe('BRRRR quizzes', () => {
    it('keeps every question markable, with its answer among its options', () => {
        expect(storedQuestions(INTRO_QUIZ)).toHaveLength(INTRO_QUIZ.length);
        expect(new Set(INTRO_QUIZ.map((q) => q.id)).size).toBe(INTRO_QUIZ.length);
        for (const q of INTRO_QUIZ) {
            expect(q.options).toHaveLength(4);
            expect(q.options[q.correctAnswer]).toBeDefined();
            expect(q.explanation).toBeTruthy();
        }
    });

    it('passes twelve right out of fifteen and fails eleven', () => {
        expect(INTRO_QUIZ).toHaveLength(15);
        expect(grade(INTRO_QUIZ, answering(15), PASS_SCORE).passed).toBe(true);
        expect(grade(INTRO_QUIZ, answering(12), PASS_SCORE)).toMatchObject({ passed: true, score: 80 });
        expect(grade(INTRO_QUIZ, answering(11), PASS_SCORE).passed).toBe(false);
    });
});
