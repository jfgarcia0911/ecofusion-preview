/**
 * Reading quizzes and handouts out of the written curriculum.
 *
 * The curriculum was written by hand over many sittings and it shows: a quiz
 * marks its answer with a tick on the option in one course, with a bold
 * "Correct Answer" line in another, and in a table at the bottom headed
 * "remove before distributing to students" in a third. All three are read
 * here. What cannot be read with confidence is reported and left out rather
 * than guessed at - a quiz with one wrong answer key is worse than no quiz,
 * because the learner who answers correctly is the one marked down.
 */

export interface QuizQuestion {
    id: string;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation?: string;
}

export interface ParsedQuiz {
    title: string | null;
    /** The learner-facing instructions. Never the answer key. */
    instructions: string | null;
    timeLimit: number | null;
    questions: QuizQuestion[];
    /** Questions that could not be marked automatically, and why. */
    skipped: Array<{ number: number; reason: string }>;
}

/** Headings whose sections are written for instructors, not learners. */
const INSTRUCTOR_ONLY =
    /answer\s*key|instructor\s*notes?|instructor\s*reference|instructor\s*use|for\s+instructors|scoring\s*guide/i;

const TICK = /[✓✔]/;

// ----------------------------------------------------------------------------
// Sections

interface Section {
    level: number;
    heading: string;
    start: number;
    end: number;
}

/** Every ## to #### heading, with the span of lines it owns. */
function sections(lines: string[]): Section[] {
    const found: Section[] = [];
    lines.forEach((line, index) => {
        const match = line.match(/^(#{2,4})\s+(.+?)\s*$/);
        if (match) found.push({ level: match[1].length, heading: match[2], start: index, end: lines.length });
    });
    // A section ends where the next heading of the same or a higher level begins.
    found.forEach((section, i) => {
        const next = found.slice(i + 1).find((s) => s.level <= section.level);
        if (next) section.end = next.start;
    });
    return found;
}

/**
 * The markdown with every instructor-only section cut out.
 *
 * Deliberately narrow. Grading rubrics stay: learners are meant to see how they
 * will be marked. So does anything merely titled "Solution" - in this
 * curriculum that is nutrient stock solutions and solution selling far more
 * often than it is an answer.
 */
export function stripInstructorSections(source: string): string {
    const lines = normalise(source).split('\n');
    const cut = new Set<number>();
    for (const section of sections(lines)) {
        const body = lines.slice(section.start, section.end).join('\n');
        if (INSTRUCTOR_ONLY.test(section.heading) || /for instructor use only/i.test(body)) {
            for (let i = section.start; i < section.end; i++) cut.add(i);
        }
    }
    return lines
        .filter((_, index) => !cut.has(index))
        .join('\n')
        .replace(/\n{3,}/g, '\n\n')
        .trim();
}

/** The H1, and the "## Course NNN:" breadcrumb under it, removed. */
export function withoutTitleBlock(markdown: string): string {
    return markdown
        .replace(/^#\s+.+$/m, '')
        .replace(/^##\s+Course\s+\d+\s*:.*$/im, '')
        .replace(/^\s*---\s*$/m, '')
        .trim();
}

export function titleOf(markdown: string): string | null {
    const match = markdown.match(/^#\s+(.+?)\s*$/m);
    return match ? match[1].replace(/\*/g, '').trim() : null;
}

// ----------------------------------------------------------------------------
// Answers written somewhere other than beside the question

type Answer = { letter?: string; truth?: boolean; explanation?: string };

function answerFromText(value: string): Answer | null {
    const text = value.replace(/\*/g, '').trim();
    if (/^(true|t)$/i.test(text)) return { truth: true };
    if (/^(false|f)$/i.test(text)) return { truth: false };
    const letter = text.match(/^([A-Ha-h])(?:[).:\s]|$)/);
    return letter ? { letter: letter[1].toUpperCase() } : null;
}

/**
 * Answers from inside an answer-key section.
 *
 * Handles three layouts: one table row per question with an optional
 * Explanation column; a compact grid running several question-answer pairs
 * across one row; and a numbered list, "3. **B) Xylem** - because...".
 */
function answerKey(lines: string[]): Map<number, Answer> {
    const answers = new Map<number, Answer>();
    for (const section of sections(lines)) {
        if (!/answer\s*key/i.test(section.heading)) continue;

        let explanationColumn = -1;
        for (const line of lines.slice(section.start, section.end)) {
            const listed = line.match(/^\s*(\d+)[.)]\s+\**\s*([A-Ha-h](?:[).]|(?=[*\s]|$))|True\b|False\b|T\b|F\b)[^-–—]*?\**\s*(?:[-–—:]\s*(.+))?$/i);
            if (listed) {
                const answer = answerFromText(listed[2]);
                if (answer) {
                    if (listed[3]) answer.explanation = listed[3].replace(/\*+/g, '').trim();
                    answers.set(parseInt(listed[1], 10), answer);
                }
                continue;
            }

            if (!line.trim().startsWith('|')) continue;
            const cells = line.split('|').slice(1, -1).map((c) => c.trim());
            if (cells.every((c) => /^:?-+:?$/.test(c))) continue;

            const header = cells.findIndex((c) => /explanation|rationale/i.test(c));
            if (header >= 0 && !/^\d+$/.test(cells[0])) {
                explanationColumn = header;
                continue;
            }

            for (let i = 0; i + 1 < cells.length; i += 2) {
                if (!/^\d+$/.test(cells[i])) continue;
                const answer = answerFromText(cells[i + 1]);
                if (!answer) continue;
                if (explanationColumn > 0 && cells[explanationColumn]) {
                    answer.explanation = cells[explanationColumn];
                }
                answers.set(parseInt(cells[i], 10), answer);
            }
        }
    }
    return answers;
}

// ----------------------------------------------------------------------------
// Questions

const OPTION = /^\s*(?:[-*+]\s*)?(?:\[([ xX])\]\s*)?\(?([A-Ha-h])[).:]\s+(.+?)\s*$/;
/** "- True", "- [x] False", "- **FALSE** ✓ (because...)". */
const TRUTH_LINE =
    /^\s*(?:[-*+]\s*)?(?:\[([ xX])\]\s*)?(\*\*)?\s*(True|False)\s*\**\s*([✓✔])?\s*(?:[-–—]\s*)?(?:\((.+)\))?\s*$/i;

/**
 * Marks that mean a question is carrying its own answer in its wording.
 *
 * The last line of defence. However the curriculum writes a question, if its
 * text still contains a tick or an "Answer:" when it reaches here, something
 * was misread - and shipping it would show every learner the answer.
 */
const LEAKED_ANSWER = /[✓✔]|\b(correct\s+)?answer\s*:|\s[-–—]\s*\**\s*(true|false)\b\**\s*(\(|$)/i;

function clean(text: string): string {
    return text
        .replace(TICK, '')
        .replace(/\*\*/g, '')
        .replace(/^\s*[-*+]\s+/, '')
        .replace(/\s+/g, ' ')
        .trim();
}

function parseQuestion(
    number: number,
    block: string[],
    fromKey: Answer | undefined
): QuizQuestion | { reason: string } {
    const options: string[] = [];
    let marked: number | null = null;
    let stated: Answer | null = null;
    let explanation: string | undefined;
    const prose: string[] = [];
    // True/false lines are gathered separately. Two of them are a pair of
    // options; one alone, ticked or bolded, is the answer written under the
    // statement. Either way they are never part of the question's wording.
    const truths: Array<{ value: boolean; marked: boolean; why?: string }> = [];

    for (const line of block) {
        // "**Correct Answer: B**", or the same as a list item, "- **Answer: B**".
        const correct = line.match(/^\s*(?:[-*+]\s+)?\**\s*(?:correct\s+)?answer\s*:\s*\**\s*(.+?)\s*\**\s*$/i);
        if (correct) {
            stated = answerFromText(correct[1]);
            continue;
        }
        const why = line.match(/^\s*[*_]*\s*explanation\s*:\s*(.+?)[*_]*\s*$/i);
        if (why) {
            explanation = why[1].replace(/[*_]+$/, '').trim();
            continue;
        }
        const option = line.match(OPTION);
        if (option) {
            if (TICK.test(option[3]) || option[1]?.toLowerCase() === 'x') marked = options.length;
            options.push(clean(option[3]));
            continue;
        }
        const truth = line.match(TRUTH_LINE);
        if (truth) {
            truths.push({
                value: truth[3].toLowerCase() === 'true',
                marked: Boolean(truth[4] || truth[2] || truth[1]?.toLowerCase() === 'x'),
                why: truth[5]?.trim(),
            });
            continue;
        }
        if (line.trim() && options.length === 0) prose.push(line.trim());
    }

    if (truths.length >= 2 && options.length === 0) {
        truths.forEach((t, i) => {
            options.push(t.value ? 'True' : 'False');
            if (t.marked) marked = i;
        });
    } else if (truths.length === 1 && truths[0].marked) {
        stated = stated ?? { truth: truths[0].value };
        explanation = explanation ?? truths[0].why;
    }

    const question = clean(prose.join(' '))
        .replace(/^(?:question\s*\d+\s*[:.)-]\s*)/i, '')
        .replace(/^\d+[.)]\s+/, '')
        .trim();
    if (!question) return { reason: 'no question text' };

    const answer = stated ?? fromKey ?? null;
    const leaks = (text: string) => LEAKED_ANSWER.test(text);

    // A statement with no options, answered true or false, is a true/false
    // question whose options were left for the reader to supply.
    if (options.length === 0 && answer?.truth !== undefined) {
        const statement = question.replace(/^true\s+or\s+false\s*[:.-]?\s*/i, '');
        if (leaks(statement)) return { reason: 'the answer appears in the question text' };
        return {
            id: `q${number}`,
            question: statement,
            options: ['True', 'False'],
            correctAnswer: answer.truth ? 0 : 1,
            ...((explanation ?? answer.explanation) && { explanation: explanation ?? answer.explanation }),
        };
    }

    if (options.length < 2) return { reason: 'not multiple choice - needs a person to mark it' };

    // Checked only now, on what would actually be imported. A short-answer
    // question with a model answer beneath it is excluded above for the
    // truer reason: it needs a person to mark it.
    if (leaks(question)) return { reason: 'the answer appears in the question text' };
    if (options.some(leaks)) return { reason: 'an answer marker survived into an option' };

    let correctAnswer = marked;
    if (correctAnswer === null && answer?.letter) {
        correctAnswer = answer.letter.charCodeAt(0) - 65;
    }
    if (correctAnswer === null && answer?.truth !== undefined) {
        correctAnswer = options.findIndex((o) => o.toLowerCase() === (answer.truth ? 'true' : 'false'));
    }
    if (correctAnswer === null || correctAnswer < 0) return { reason: 'no answer given anywhere' };
    if (correctAnswer >= options.length) return { reason: 'answer points past the last option' };

    // Two sources disagreeing means one of them is wrong, and there is no
    // telling which. Better unmarked than marked against the learner.
    if (marked !== null && answer?.letter && answer.letter.charCodeAt(0) - 65 !== marked) {
        return { reason: 'the tick and the answer key disagree' };
    }

    // Some answer keys follow the letter with the option's own wording rather
    // than a reason. Shown as an explanation, that is the answer read back to
    // the learner as though it explained itself, so it is dropped.
    const normalised = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
    let why = explanation ?? answer?.explanation;
    if (why && normalised(why) === normalised(options[correctAnswer])) why = undefined;

    return { id: `q${number}`, question, options, correctAnswer, ...(why && { explanation: why }) };
}

/** Minutes from "15 minutes" or "1 hour". */
function minutes(value: string | null): number | null {
    if (!value) return null;
    const h = value.match(/([\d.]+)\s*hour/i);
    if (h) return Math.round(parseFloat(h[1]) * 60);
    const m = value.match(/([\d.]+)\s*min/i);
    return m ? Math.round(parseFloat(m[1])) : null;
}

/**
 * Line endings made uniform before anything is read.
 *
 * Much of the curriculum was saved on Windows. A carriage return left on the
 * end of each line defeats every pattern anchored to the end of one - "." will
 * not match it - which made hundreds of answer keys invisible while looking,
 * in any editor, exactly like the ones that worked.
 */
function normalise(markdown: string): string {
    return markdown.replace(/\r\n?/g, '\n');
}

export function parseQuiz(source: string): ParsedQuiz {
    const markdown = normalise(source);
    const lines = markdown.split('\n');
    const all = sections(lines);
    const key = answerKey(lines);

    /** Where a section's own text stops: at the next heading of any level. */
    const ownEnd = (section: Section) =>
        all.find((s) => s.start > section.start)?.start ?? section.end;

    const instructionsSection = all.find((s) => /^instructions?$/i.test(s.heading.trim()));
    const instructions = instructionsSection
        ? lines.slice(instructionsSection.start + 1, ownEnd(instructionsSection)).join('\n').trim() || null
        : null;

    const timeLimit = minutes(
        markdown.match(/^\|\s*\*\*Time Limit\*\*\s*\|\s*(.+?)\s*\|/im)?.[1] ?? null
    );

    // A question starts at "### Question N", or at a bold numbered line -
    // "**7. Which of these...**" or "**Question 7:** Which...". Each runs to
    // the next question or the next heading of any kind, so an answer key or
    // scoring guide below the last question is never read as part of it.
    // Nothing inside an instructor-only section is a question, which keeps a
    // numbered answer key from being mistaken for twenty more of them.
    //
    // Instructions and scoring notes are excluded only as far as their own
    // paragraph. In some quizzes every question heading sits beneath
    // "## Instructions" with nothing in between, so excluding the whole
    // section would throw away every question in the file. An answer key is
    // excluded whole, subsections and all.
    const instructorLines = new Set<number>();
    for (const section of all) {
        const span = INSTRUCTOR_ONLY.test(section.heading)
            ? section.end
            : /^(instructions?|(quiz|exam|test)\s+information|scoring|grading)\b/i.test(section.heading.trim())
              ? ownEnd(section)
              : null;
        if (span !== null) for (let i = section.start; i < span; i++) instructorLines.add(i);
    }

    type Start = { line: number; number: number; inline: string | null };
    const strong: Start[] = [];
    const weak: Start[] = [];
    lines.forEach((line, index) => {
        if (instructorLines.has(index)) return;
        // "### Question 3", "### Question 3 (0.5 points)", or the question
        // written on the heading itself: "### Question 3: What is...?"
        const heading = line.match(/^#{2,4}\s+question\s+(\d+)\s*(.*)$/i);
        if (heading) {
            const rest = heading[2]
                .replace(/\(\s*[\d.]+\s*points?\s*\)/i, '')
                .replace(/^[\s:.)-]+/, '')
                .trim();
            strong.push({ line: index, number: parseInt(heading[1], 10), inline: rest || null });
            return;
        }
        const bold =
            line.match(/^\s*\*\*\s*(\d+)[.)]\s*(.+?)\s*$/) ??
            line.match(/^\s*\*\*\s*question\s+(\d+)\s*[:.)]?\s*\**\s*(.*?)\s*$/i);
        if (bold) {
            strong.push({ line: index, number: parseInt(bold[1], 10), inline: bold[2] });
            return;
        }
        // "1. **Which macronutrient...**" - the number outside the bold. A weak
        // signal: in a file that marks its questions any other way, a line
        // like this is an explanation or a list, not a question.
        const numbered = line.match(/^\s*(\d+)[.)]\s+(\*\*.+\*\*.*?)\s*$/);
        if (numbered) weak.push({ line: index, number: parseInt(numbered[1], 10), inline: numbered[2] });
    });
    // A file is written one way throughout, so the weak form is only trusted
    // where nothing stronger appears.
    const starts = strong.length > 0 ? strong : weak;

    const headingLines = all.map((s) => s.start);
    const questions: QuizQuestion[] = [];
    const skipped: ParsedQuiz['skipped'] = [];

    starts.forEach((start, i) => {
        const nextQuestion = starts[i + 1]?.line ?? lines.length;
        const nextHeading = headingLines.find((h) => h > start.line) ?? lines.length;
        const end = Math.min(nextQuestion, nextHeading);
        const block = [
            ...(start.inline ? [start.inline] : []),
            ...lines.slice(start.line + 1, end),
        ].filter((l) => l.trim() !== '---');

        const result = parseQuestion(start.number, block, key.get(start.number));
        if ('reason' in result) skipped.push({ number: start.number, reason: result.reason });
        else questions.push(result);
    });

    return { title: titleOf(markdown), instructions, timeLimit, questions, skipped };
}
