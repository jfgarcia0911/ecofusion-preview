import { describe, expect, it } from 'vitest';
import { grade, publicQuestions } from '@/lib/quiz';
import { csvCell, csvRow } from '@/lib/csv';

const questions = [
    { id: 'q1', question: 'One?', options: ['a', 'b'], correctAnswer: 0, explanation: 'because' },
    { id: 'q2', question: 'Two?', options: ['a', 'b'], correctAnswer: 1 },
];

describe('quiz marking', () => {
    it('never sends answers with the questions', () => {
        expect(JSON.stringify(publicQuestions(questions))).not.toContain('correctAnswer');
    });

    it('shows answers and explanations only on a pass', () => {
        const pass = grade(questions, { q1: 0, q2: 1 }, 80);
        expect(pass.passed).toBe(true);
        expect(pass.results[0]).toMatchObject({ correct: true, correctAnswer: 0, explanation: 'because' });
    });

    it('gives a failed attempt its score and nothing per question', () => {
        const fail = grade(questions, { q1: 0, q2: 0 }, 80);
        expect(fail).toMatchObject({ passed: false, score: 50, correct: 1, total: 2 });
        expect(fail.results).toEqual([]);
    });

    it('counts an unanswered question as wrong', () => {
        expect(grade(questions, {}, 80).score).toBe(0);
    });
});

describe('csv cells', () => {
    it('quotes every cell and doubles quotes', () => {
        expect(csvCell('say "hi", ok')).toBe('"say ""hi"", ok"');
        expect(csvRow(['a', 1, null])).toBe('"a","1",""');
    });

    it('defuses spreadsheet formulas but leaves negative numbers alone', () => {
        expect(csvCell('=HYPERLINK("x")')).toBe(`"'=HYPERLINK(""x"")"`);
        expect(csvCell('@SUM(A1)')).toBe(`"'@SUM(A1)"`);
        expect(csvCell('-12.50')).toBe('"-12.50"');
        expect(csvCell('-1+1')).toBe(`"'-1+1"`);
    });
});
