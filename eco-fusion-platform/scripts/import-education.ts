/**
 * Loads the written curriculum into the database as EcoFusion's own courses.
 *
 * The `education/` folder is where the curriculum is actually authored. Until
 * now it was transcribed by hand into lib/data/lms-seed.ts, which had drifted
 * to a subset, carried generated placeholder modules for the courses nobody
 * had got to, and was imported by a client component - shipping the whole
 * catalogue to the browser to render a page of cards.
 *
 * Courses land with no organizationId, which makes them EcoFusion's and
 * therefore loadable into a business rather than automatically visible to
 * every one of them.
 *
 * Alongside the lessons it now brings in the rest of each course: its quizzes
 * and final test as gradable quiz lessons slotted in behind the modules they
 * test, and its syllabus, handouts, cheatsheets, glossary, activities and
 * assignment briefs as course materials. Answer keys and instructor notes are
 * cut out on the way in, and the grading summaries in assessments/ are never
 * read at all.
 *
 * Usage:
 *   npx tsx scripts/import-education.ts                     writes everything
 *   npx tsx scripts/import-education.ts --dry-run           parses and reports only
 *   npx tsx scripts/import-education.ts --course=EDU-101    one course (or a comma list)
 *
 * Safe to run again. Courses are matched on their code, lessons and materials
 * on a sourceKey naming the file they came from, and all of it is updated in
 * place. Nothing is ever deleted: a LessonCompletion cascades from its lesson,
 * so removing a lesson to re-add it would silently erase every learner's
 * record of having finished it.
 */

import { PrismaClient, Prisma } from '@prisma/client';
import { readFileSync, readdirSync, existsSync, statSync } from 'fs';
import { join, resolve, basename } from 'path';
import {
    parseQuiz,
    stripInstructorSections,
    titleOf,
    withoutTitleBlock,
    type QuizQuestion,
} from './education/parse';

const prisma = new PrismaClient();
const dryRun = process.argv.includes('--dry-run');
const onlyCourses = process.argv
    .find((arg) => arg.startsWith('--course='))
    ?.slice('--course='.length)
    .split(',')
    .map((code) => code.trim().toUpperCase())
    .filter(Boolean);

/** A question type that is simply not multiple choice, as opposed to misread. */
const NEEDS_A_PERSON = 'not multiple choice - needs a person to mark it';

/** Fewer than this and it is not a quiz worth putting in a learner's path. */
const MIN_QUESTIONS = 3;

/** The curriculum lives beside the app, not inside it. */
const ROOT = resolve(process.cwd(), '..', 'education', 'courses');

interface ParsedLesson {
    sortOrder: number;
    title: string;
    content: string;
    duration: number;
}

interface ParsedQuizLesson {
    sourceKey: string;
    sortOrder: number;
    title: string;
    instructions: string | null;
    duration: number;
    questions: QuizQuestion[];
    /** Questions left out because a person has to mark them. */
    handMarked: number;
}

interface ParsedMaterial {
    sourceKey: string;
    kind: string;
    title: string;
    content: string;
    sortOrder: number;
}

interface ParsedCourse {
    code: string;
    number: number;
    title: string;
    description: string;
    category: string;
    duration: number;
    lessons: ParsedLesson[];
    quizzes: ParsedQuizLesson[];
    materials: ParsedMaterial[];
    /** What was found and deliberately not imported, and why. */
    problems: string[];
    /** Instructor-only sections cut out of materials. */
    stripped: number;
}

/**
 * Where each folder's files go, in the order a learner meets them.
 *
 * assessments/ is absent on purpose: it holds the grading summaries written
 * for whoever marks the course. Grading rubrics inside an assignment brief do
 * come through - learners are meant to see how they will be marked.
 */
const MATERIAL_FOLDERS: Array<{ folder: string; kind: string }> = [
    { folder: 'handouts', kind: 'handout' },
    { folder: 'cheatsheets', kind: 'cheatsheet' },
    { folder: 'resources', kind: 'reference' },
    { folder: 'activities', kind: 'activity' },
    { folder: 'assignments', kind: 'assignment' },
];

/** Readable title from a file name, for files with no H1. */
function titleFromFile(file: string): string {
    return basename(file, '.md')
        .replace(/^(module|quiz|handout|activity|assignment|cheatsheet)_\d+_?/i, '')
        .replace(/_/g, ' ')
        .replace(/\b\w/g, (c) => c.toUpperCase())
        .trim();
}

/** The module a quiz tests, from "quiz_03_..." or "module_03_quiz". */
function moduleOf(file: string): number | null {
    const match = basename(file).match(/(?:quiz|module)_?(\d+)/i);
    return match ? parseInt(match[1], 10) : null;
}

/**
 * A quiz or test, if it can be marked automatically and was read cleanly.
 *
 * Any question that was misread - no answer found, answer and tick
 * disagreeing, an answer left in the wording - rejects the whole file rather
 * than shipping the rest of it. A quiz that silently drops the question it
 * misread is a quiz whose score means something different from what its
 * author wrote. Questions that are simply another kind - short answer, fill in
 * the blank - are left for a person and the rest go in.
 */
function readQuiz(
    path: string,
    sourceKey: string,
    sortOrder: number,
    fallbackTitle: string
): { quiz: ParsedQuizLesson } | { problem: string } | null {
    const parsed = parseQuiz(readFileSync(path, 'utf8'));
    const misread = parsed.skipped.filter((s) => s.reason !== NEEDS_A_PERSON);
    const handMarked = parsed.skipped.length - misread.length;

    if (parsed.questions.length === 0 && misread.length === 0) return null;
    if (misread.length > 0) {
        const reasons = [...new Set(misread.map((m) => m.reason))].join('; ');
        return { problem: `${basename(path)}: ${misread.length} question(s) misread (${reasons}) - not imported` };
    }
    if (parsed.questions.length < MIN_QUESTIONS) {
        return { problem: `${basename(path)}: only ${parsed.questions.length} gradable question(s) - not imported` };
    }

    return {
        quiz: {
            sourceKey,
            sortOrder,
            title: parsed.title ?? fallbackTitle,
            instructions: parsed.instructions,
            // Roughly a minute a question when the file does not say.
            duration: parsed.timeLimit ?? Math.max(10, parsed.questions.length),
            questions: parsed.questions,
            handMarked,
        },
    };
}

function readQuizzes(dir: string, problems: string[]): ParsedQuizLesson[] {
    const quizzes: ParsedQuizLesson[] = [];

    const quizDir = join(dir, 'quizzes');
    if (existsSync(quizDir)) {
        readdirSync(quizDir)
            .filter((f) => f.endsWith('.md'))
            .sort()
            .forEach((file, index) => {
                const moduleNumber = moduleOf(file);
                // Behind the module it tests; unnumbered ones after every module.
                const sortOrder = moduleNumber !== null ? moduleNumber * 10 + 5 : 9000 + index;
                const result = readQuiz(
                    join(quizDir, file),
                    `quiz:${basename(file, '.md')}`,
                    sortOrder,
                    `Quiz ${moduleNumber ?? index + 1}`
                );
                if (result && 'quiz' in result) quizzes.push(result.quiz);
                else if (result) problems.push(result.problem);
                // Said out loud rather than skipped. A quiz written in a layout
                // nobody taught the parser is still a quiz somebody wrote, and
                // the only way it gets in is if its absence is noticed.
                else problems.push(`${file}: no questions recognised in this layout - not imported`);
            });
    }

    // Tests come last in the path. One that cannot be graded automatically is
    // not shown as reading either: a final exam handed out as a handout is an
    // exam with its questions published. Projects and presentations are briefs,
    // not exams, and go in with the materials instead.
    const testDir = join(dir, 'tests');
    if (existsSync(testDir)) {
        readdirSync(testDir)
            .filter((f) => f.endsWith('.md') && !/project|presentation|portfolio/i.test(f))
            .sort()
            .forEach((file, index) => {
                const result = readQuiz(
                    join(testDir, file),
                    `test:${basename(file, '.md')}`,
                    10000 + index,
                    'Final Exam'
                );
                if (result && 'quiz' in result) quizzes.push(result.quiz);
                else if (result) problems.push(result.problem);
                else problems.push(`${file}: no gradable questions - not imported`);
            });
    }

    return quizzes;
}

function readMaterials(dir: string): { materials: ParsedMaterial[]; stripped: number } {
    const materials: ParsedMaterial[] = [];
    let stripped = 0;

    const add = (path: string, sourceKey: string, kind: string, sortOrder: number) => {
        const raw = readFileSync(path, 'utf8');
        const clean = stripInstructorSections(raw);
        if (clean.length < raw.replace(/\r/g, '').trim().length - 5) stripped += 1;
        const content = withoutTitleBlock(clean);
        if (!content) return;
        materials.push({
            sourceKey,
            kind,
            title: titleOf(raw) ?? titleFromFile(path),
            content,
            sortOrder,
        });
    };

    // The syllabus first: what the course is, how it runs, how it is graded.
    const overview = join(dir, 'course_overview.md');
    if (existsSync(overview)) add(overview, 'syllabus', 'syllabus', 0);

    MATERIAL_FOLDERS.forEach(({ folder, kind }, group) => {
        const path = join(dir, folder);
        if (!existsSync(path)) return;
        readdirSync(path)
            .filter((f) => f.endsWith('.md'))
            .sort()
            .forEach((file, index) =>
                add(join(path, file), `${folder}/${file}`, kind, (group + 1) * 100 + index)
            );
    });

    // Project and presentation briefs from tests/ are assignments in all but
    // folder.
    const testDir = join(dir, 'tests');
    if (existsSync(testDir)) {
        readdirSync(testDir)
            .filter((f) => f.endsWith('.md') && /project|presentation|portfolio/i.test(f))
            .sort()
            .forEach((file, index) => add(join(testDir, file), `tests/${file}`, 'assignment', 900 + index));
    }

    return { materials, stripped };
}

/** The block under a `## Heading`, up to the next heading of any level. */
function sectionUnder(markdown: string, heading: string): string | null {
    const pattern = new RegExp(`^##\\s+${heading}\\s*$([\\s\\S]*?)(?=^#{1,3}\\s|\\z)`, 'im');
    const match = markdown.match(pattern);
    return match ? match[1].trim() : null;
}

/** A value from the `| **Field** | value |` tables the overviews use. */
function tableField(markdown: string, field: string): string | null {
    const pattern = new RegExp(`^\\|\\s*\\*\\*${field}\\*\\*\\s*\\|\\s*(.+?)\\s*\\|`, 'im');
    const match = markdown.match(pattern);
    return match ? match[1].trim() : null;
}

/** Minutes from "8 hours", "90 minutes", "1.5 hours". Null when unreadable. */
function minutesFrom(value: string | null): number | null {
    if (!value) return null;
    const hours = value.match(/([\d.]+)\s*hour/i);
    if (hours) return Math.round(parseFloat(hours[1]) * 60);
    const minutes = value.match(/([\d.]+)\s*min/i);
    if (minutes) return Math.round(parseFloat(minutes[1]));
    return null;
}

/**
 * One of five names, from however the level happened to be written.
 *
 * The curriculum states it fourteen different ways: bold and unbold, with and
 * without the series in brackets, "Expert/Professional" and "Expert /
 * Professional". Left alone that is fourteen categories in a filter meant to
 * offer five.
 *
 * The stated level is honoured rather than derived from the folder, because
 * the author grades deliberately: 105 and 106 sit in the 100 series and are
 * marked Intermediate, 107 and 108 Advanced. The series is where a course is
 * filed, not how hard it is. The folder decides only when nothing was stated.
 */
function normaliseLevel(stated: string | null, number: number): string {
    const text = (stated ?? '').replace(/\*/g, ' ').replace(/\s+/g, ' ').trim().toLowerCase();

    // Ordered so the specific wins: a master-level course whose blurb mentions
    // professional development is a master course, not a professional one.
    if (text.includes('foundation')) return 'Foundational';
    if (text.includes('intermediate')) return 'Intermediate';
    if (text.includes('advanced')) return 'Advanced';
    if (text.includes('master') || text.includes('executive')) return 'Master';
    if (text.includes('expert') || text.includes('professional')) return 'Expert';

    const bySeries: Record<number, string> = {
        1: 'Foundational',
        2: 'Intermediate',
        3: 'Advanced',
        4: 'Expert',
        5: 'Master',
    };
    return bySeries[Math.floor(number / 100)] ?? 'Foundational';
}

/** The first real paragraph, for overviews with no Course Description. */
function firstParagraph(markdown: string): string {
    const body = markdown
        .split('\n')
        .filter((line) => !line.startsWith('#') && !line.startsWith('|') && line.trim() !== '---')
        .join('\n');
    const paragraph = body.split(/\n\s*\n/).map((p) => p.trim()).find((p) => p.length > 60);
    return paragraph ?? '';
}

/** Collapses a section to one paragraph of plain prose. */
function tidy(text: string): string {
    return text
        .split(/\n\s*\n/)[0]
        .replace(/\s+/g, ' ')
        .trim()
        .slice(0, 1000);
}

function parseLesson(path: string, fallbackOrder: number): ParsedLesson | null {
    const raw = readFileSync(path, 'utf8');

    const heading = raw.match(/^#\s+Module\s+(\d+)\s*:\s*(.+?)\s*$/im);
    const fromName = basename(path).match(/module_(\d+)/i);

    const sortOrder = heading
        ? parseInt(heading[1], 10)
        : fromName
          ? parseInt(fromName[1], 10)
          : fallbackOrder;

    const title = heading
        ? heading[2].trim()
        : basename(path, '.md').replace(/^module_\d+_/, '').replace(/_/g, ' ');

    // The H1 repeats the title the player already shows in its own chrome, and
    // the line under it is a breadcrumb back to the course. Both are noise
    // once the lesson is inside the app rather than a file on disk.
    const content = raw
        .replace(/^#\s+Module\s+\d+\s*:.*$/im, '')
        .replace(/^##\s+Course\s+\d+\s*:.*$/im, '')
        .replace(/^\s*---\s*$/m, '')
        .trim();

    if (!content) return null;

    return {
        sortOrder,
        title,
        content,
        duration: minutesFrom(tableField(raw, 'Duration')) ?? 45,
    };
}

function parseCourse(dir: string): ParsedCourse | null {
    const overviewPath = join(dir, 'course_overview.md');
    if (!existsSync(overviewPath)) return null;

    const overview = readFileSync(overviewPath, 'utf8');

    // The one anchor every overview shares, in both of the two layouts the
    // curriculum was written in.
    const heading = overview.match(/^#\s+Course\s+(\d+)\s*:\s*(.+?)\s*$/im);
    if (!heading) return null;

    const number = parseInt(heading[1], 10);
    const title = heading[2].trim();

    const description =
        tidy(sectionUnder(overview, 'Course Description') ?? '') || tidy(firstParagraph(overview));

    // The 100 to 300 series carry a metadata table; the 400 and 500 series
    // use headings instead.
    const statedLevel =
        tableField(overview, 'Level') ??
        sectionUnder(overview, 'Course Level')?.split('\n')[0].trim() ??
        null;
    const level = normaliseLevel(statedLevel, number);

    const lessonsDir = join(dir, 'lessons');
    const lessons: ParsedLesson[] = [];

    if (existsSync(lessonsDir)) {
        const files = readdirSync(lessonsDir)
            .filter((f) => f.endsWith('.md'))
            .sort();
        files.forEach((file, index) => {
            const lesson = parseLesson(join(lessonsDir, file), index + 1);
            if (lesson) lessons.push(lesson);
        });
    }

    // The table gives a course length where there is one. Otherwise the
    // lessons themselves are the better answer than a guess at the top.
    const stated = minutesFrom(tableField(overview, 'Duration'));
    const duration = stated ?? lessons.reduce((total, l) => total + l.duration, 0) ?? 0;

    const problems: string[] = [];
    const quizzes = readQuizzes(dir, problems);
    const { materials, stripped } = readMaterials(dir);

    return {
        code: `EDU-${number}`,
        number,
        title,
        description,
        category: level,
        duration: duration || 60,
        lessons,
        quizzes,
        materials,
        problems,
        stripped,
    };
}

function everyCourseDirectory(): string[] {
    if (!existsSync(ROOT)) {
        console.error(`\nNo curriculum at ${ROOT}.\n`);
        process.exit(1);
    }
    return readdirSync(ROOT)
        .filter((entry) => entry.endsWith('_Series'))
        .sort()
        .flatMap((series) => {
            const seriesDir = join(ROOT, series);
            return readdirSync(seriesDir)
                .map((course) => join(seriesDir, course))
                .filter((path) => statSync(path).isDirectory());
        });
}

async function write(course: ParsedCourse) {
    const existing = await prisma.trainingCourse.findFirst({
        where: { code: course.code, organizationId: null },
        select: { id: true },
    });

    const fields = {
        title: course.title,
        description: course.description,
        category: course.category,
        duration: course.duration,
        sortOrder: course.number,
        isActive: true,
    };

    const courseId = existing
        ? (
              await prisma.trainingCourse.update({
                  where: { id: existing.id },
                  data: fields,
                  select: { id: true },
              })
          ).id
        : (
              await prisma.trainingCourse.create({
                  data: { code: course.code, organizationId: null, ...fields },
                  select: { id: true },
              })
          ).id;

    // Every lesson is found again by its sourceKey and updated in place. A
    // lesson is never deleted to be re-added: LessonCompletion cascades from
    // it, so that would erase every learner's record of having finished it.
    //
    // Lessons imported before sourceKey existed carry none and sit at their
    // bare module number. Those are adopted - given their key and moved to
    // their new position - rather than duplicated. The snapshot is taken
    // before anything moves, so a module adopted onto position 10 cannot then
    // be mistaken for the old module 10.
    const held = await prisma.trainingLesson.findMany({
        where: { courseId },
        select: { id: true, sortOrder: true, sourceKey: true, type: true },
    });
    const byKey = new Map(held.filter((l) => l.sourceKey).map((l) => [l.sourceKey!, l.id]));
    const legacyByModule = new Map(
        held.filter((l) => !l.sourceKey && l.type === 'text').map((l) => [l.sortOrder, l.id])
    );

    let created = 0;
    let updated = 0;
    const wanted = new Set<string>();

    const put = async (
        sourceKey: string,
        data: Omit<Prisma.TrainingLessonUncheckedCreateInput, 'courseId' | 'sourceKey'>,
        legacyId?: string
    ) => {
        wanted.add(sourceKey);
        const id = byKey.get(sourceKey) ?? legacyId;
        if (id) {
            await prisma.trainingLesson.update({ where: { id }, data: { ...data, sourceKey } });
            updated += 1;
        } else {
            await prisma.trainingLesson.create({ data: { ...data, courseId, sourceKey } });
            created += 1;
        }
    };

    for (const lesson of course.lessons) {
        const moduleNumber = lesson.sortOrder;
        await put(
            `module:${String(moduleNumber).padStart(2, '0')}`,
            {
                title: lesson.title,
                content: lesson.content,
                duration: lesson.duration,
                type: 'text',
                questions: Prisma.DbNull,
                // Tens, so the quiz for module 3 has room at 35.
                sortOrder: moduleNumber * 10,
            },
            legacyByModule.get(moduleNumber)
        );
    }

    for (const quiz of course.quizzes) {
        await put(quiz.sourceKey, {
            title: quiz.title,
            // The instructions only. The markdown the quiz came from carries
            // its answers, and never reaches a lesson.
            content: quiz.instructions,
            duration: quiz.duration,
            type: 'quiz',
            questions: quiz.questions as unknown as Prisma.InputJsonValue,
            sortOrder: quiz.sortOrder,
        });
    }

    const orphaned = held.filter(
        (lesson) => lesson.sourceKey && !wanted.has(lesson.sourceKey)
    ).length;

    // Materials carry no completions, but are kept the same way for the same
    // reason a lesson is: an import should never be the thing that loses work.
    const heldMaterials = await prisma.courseMaterial.findMany({
        where: { courseId },
        select: { sourceKey: true },
    });
    for (const material of course.materials) {
        await prisma.courseMaterial.upsert({
            where: { courseId_sourceKey: { courseId, sourceKey: material.sourceKey } },
            update: {
                kind: material.kind,
                title: material.title,
                content: material.content,
                sortOrder: material.sortOrder,
            },
            create: { courseId, ...material },
        });
    }
    const orphanedMaterials = heldMaterials.filter(
        (m) => !course.materials.some((c) => c.sourceKey === m.sourceKey)
    ).length;

    return { created, updated, orphaned, orphanedMaterials, isNew: !existing };
}

async function main() {
    const directories = everyCourseDirectory();
    console.log(
        `\n${directories.length} course folders under ${ROOT}` +
            (dryRun ? '  (dry run, nothing will be written)\n' : '\n')
    );

    const everything: ParsedCourse[] = [];
    const skipped: string[] = [];

    for (const dir of directories) {
        const course = parseCourse(dir);
        if (course) everything.push(course);
        else skipped.push(basename(dir));
    }

    const parsed = onlyCourses
        ? everything.filter((course) => onlyCourses.includes(course.code))
        : everything;
    if (onlyCourses) {
        const missing = onlyCourses.filter((code) => !parsed.some((c) => c.code === code));
        if (missing.length) {
            console.error(`\nNo course folder for: ${missing.join(', ')}\n`);
            process.exit(1);
        }
        console.log(`Only ${onlyCourses.join(', ')}.\n`);
    }

    const noLessons = parsed.filter((c) => c.lessons.length === 0);
    const lessonCount = parsed.reduce((total, c) => total + c.lessons.length, 0);

    console.log(`Parsed ${parsed.length} courses, ${lessonCount} lessons.`);
    if (skipped.length) {
        console.log(`\nNo course heading, skipped:\n  ${skipped.join('\n  ')}`);
    }
    if (noLessons.length) {
        console.log(
            `\nParsed but carry no lessons:\n  ${noLessons.map((c) => c.code).join(', ')}`
        );
    }

    const categories = new Map<string, number>();
    parsed.forEach((c) => categories.set(c.category, (categories.get(c.category) ?? 0) + 1));
    console.log('\nCategories:');
    [...categories.entries()]
        .sort((a, b) => b[1] - a[1])
        .forEach(([name, count]) => console.log(`  ${String(count).padStart(3)}  ${name}`));

    const totals = {
        quizzes: parsed.reduce((n, c) => n + c.quizzes.length, 0),
        questions: parsed.reduce((n, c) => n + c.quizzes.reduce((q, z) => q + z.questions.length, 0), 0),
        handMarked: parsed.reduce((n, c) => n + c.quizzes.reduce((q, z) => q + z.handMarked, 0), 0),
        materials: parsed.reduce((n, c) => n + c.materials.length, 0),
        stripped: parsed.reduce((n, c) => n + c.stripped, 0),
        problems: parsed.reduce((n, c) => n + c.problems.length, 0),
    };
    console.log(
        `\nQuizzes and tests: ${totals.quizzes} (${totals.questions} questions, ` +
            `${totals.handMarked} left for a person to mark)`
    );
    console.log(
        `Materials: ${totals.materials} (instructor-only sections cut from ${totals.stripped})`
    );
    console.log(`Not imported: ${totals.problems} quiz or test file(s), listed below`);

    /** One course, in full: what goes where, and what was held back. */
    const describe = (c: ParsedCourse) => {
        console.log(`\n  ${c.code}  ${c.title}`);
        console.log(`         ${c.category} · ${c.duration} min`);
        const path = [
            ...c.lessons.map((l) => ({ at: l.sortOrder * 10, line: `lesson  ${l.title}` })),
            ...c.quizzes.map((q) => ({
                at: q.sortOrder,
                line:
                    `quiz    ${q.title} - ${q.questions.length} questions` +
                    (q.handMarked ? `, ${q.handMarked} for a person` : ''),
            })),
        ].sort((a, b) => a.at - b.at);
        path.forEach((p) => console.log(`    ${String(p.at).padStart(5)}  ${p.line}`));
        const kinds = new Map<string, number>();
        c.materials.forEach((m) => kinds.set(m.kind, (kinds.get(m.kind) ?? 0) + 1));
        console.log(
            `    materials: ${[...kinds].map(([k, n]) => `${n} ${k}`).join(', ') || 'none'}`
        );
        c.problems.forEach((p) => console.log(`    held back: ${p}`));
    };

    if (dryRun) {
        if (parsed.length <= 3) {
            parsed.forEach(describe);
        } else {
            console.log('\nPer course:');
            parsed.forEach((c) =>
                console.log(
                    `  ${c.code.padEnd(8)} ${String(c.lessons.length).padStart(3)} lessons ` +
                        `${String(c.quizzes.length).padStart(3)} quizzes ` +
                        `${String(c.materials.length).padStart(3)} materials` +
                        (c.problems.length ? `   ${c.problems.length} held back` : '')
                )
            );
            const held = parsed.flatMap((c) => c.problems.map((p) => `${c.code}  ${p}`));
            if (held.length) console.log(`\nHeld back:\n  ${held.join('\n  ')}`);
        }
        console.log('\nDry run - nothing was written.\n');
        return;
    }

    let newCourses = 0;
    let createdLessons = 0;
    let updatedLessons = 0;
    let orphanedLessons = 0;
    let orphanedMaterials = 0;

    for (const course of parsed) {
        const result = await write(course);
        if (result.isNew) newCourses += 1;
        createdLessons += result.created;
        updatedLessons += result.updated;
        orphanedLessons += result.orphaned;
        orphanedMaterials += result.orphanedMaterials;
        process.stdout.write(
            `  ${course.code.padEnd(8)} ${result.isNew ? 'added  ' : 'updated'} ` +
                `${String(course.lessons.length).padStart(3)} lessons ` +
                `${String(course.quizzes.length).padStart(3)} quizzes ` +
                `${String(course.materials.length).padStart(3)} materials\n`
        );
    }

    console.log(
        `\n${parsed.length} courses (${newCourses} new), ` +
            `${createdLessons} lessons added, ${updatedLessons} updated.`
    );
    const held = parsed.flatMap((c) => c.problems.map((p) => `${c.code}  ${p}`));
    if (held.length) {
        console.log(`\nHeld back, fix the file and run again to bring these in:\n  ${held.join('\n  ')}`);
    }
    if (orphanedLessons > 0 || orphanedMaterials > 0) {
        console.log(
            `\n${orphanedLessons} lesson(s) and ${orphanedMaterials} material(s) in the database ` +
                `have no file in the folder any more. They were left alone rather than deleted, ` +
                `because learners may have completed them.`
        );
    }
    console.log('\nThese are EcoFusion courses. Load them into a business from Classes.\n');
}

main()
    .catch((error) => {
        console.error('\nImport failed:', error);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
