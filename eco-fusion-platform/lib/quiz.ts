/**
 * Quizzes are marked where their answers are, which is here.
 *
 * The browser used to receive every question with its correct answer attached,
 * mark itself, and report the score back - which the server stored as given.
 * A quiz that trusts its own candidate is not a quiz. Now the browser gets the
 * questions and nothing else, sends back what was chosen, and the mark is
 * worked out on the server against the answers it never let go of.
 */

export interface StoredQuestion {
    id: string;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation?: string;
}

/** What a learner is shown before answering: the question, not the answer. */
export interface PublicQuestion {
    id: string;
    question: string;
    options: string[];
}

export interface QuestionResult {
    id: string;
    correct: boolean;
    /** Only once the quiz is passed. See `grade`. */
    correctAnswer?: number;
    explanation?: string;
}

export interface Grade {
    score: number;
    correct: number;
    total: number;
    passed: boolean;
    results: QuestionResult[];
}

function isStoredQuestion(value: unknown): value is StoredQuestion {
    const q = value as StoredQuestion;
    return (
        typeof q?.id === 'string' &&
        typeof q.question === 'string' &&
        Array.isArray(q.options) &&
        typeof q.correctAnswer === 'number'
    );
}

/** The stored questions, or an empty list if the JSON is not what it should be. */
export function storedQuestions(json: unknown): StoredQuestion[] {
    return Array.isArray(json) ? json.filter(isStoredQuestion) : [];
}

/** Questions with their answers and explanations taken off. */
export function publicQuestions(json: unknown): PublicQuestion[] {
    return storedQuestions(json).map(({ id, question, options }) => ({ id, question, options }));
}

/**
 * Marks a set of answers.
 *
 * A question left unanswered counts as wrong rather than as not asked, so a
 * blank submission scores zero instead of dividing by nothing.
 *
 * What comes back depends on the outcome. A pass shows every correct answer
 * and every explanation - that is the teaching. A fail gives the score and
 * nothing per question: saying which answers were wrong let a learner find
 * every right one in a handful of attempts, one option at a time, without
 * reading the lesson.
 */
export function grade(json: unknown, answers: Record<string, unknown>, passScore: number): Grade {
    const questions = storedQuestions(json);
    const results = questions.map((q) => ({
        q,
        correct: answers[q.id] === q.correctAnswer,
    }));
    const correct = results.filter((r) => r.correct).length;
    const total = questions.length;
    const score = total === 0 ? 0 : Math.round((correct / total) * 100);
    const passed = total > 0 && score >= passScore;

    return {
        score,
        correct,
        total,
        passed,
        results: passed
            ? results.map(({ q, correct }) => ({
                  id: q.id,
                  correct,
                  correctAnswer: q.correctAnswer,
                  ...(q.explanation && { explanation: q.explanation }),
              }))
            : [],
    };
}
