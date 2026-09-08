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
 * Usage:
 *   npx tsx scripts/import-education.ts            writes
 *   npx tsx scripts/import-education.ts --dry-run  parses and reports only
 *
 * Safe to run again. Courses are matched on their code and lessons on their
 * module number, and both are updated in place. Nothing is ever deleted: a
 * LessonCompletion cascades from its lesson, so removing a lesson to re-add it
 * would silently erase every learner's record of having finished it.
 */

import { PrismaClient } from '@prisma/client';
import { readFileSync, readdirSync, existsSync, statSync } from 'fs';
import { join, resolve, basename } from 'path';

const prisma = new PrismaClient();
const dryRun = process.argv.includes('--dry-run');

/** The curriculum lives beside the app, not inside it. */
const ROOT = resolve(process.cwd(), '..', 'education', 'courses');

interface ParsedLesson {
    sortOrder: number;
    title: string;
    content: string;
    duration: number;
}

interface ParsedCourse {
    code: string;
    number: number;
    title: string;
    description: string;
    category: string;
    duration: number;
    lessons: ParsedLesson[];
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

    return {
        code: `EDU-${number}`,
        number,
        title,
        description,
        category: level,
        duration: duration || 60,
        lessons,
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

    // Matched on module number and updated in place. A lesson is never
    // deleted to be re-added: LessonCompletion cascades from it, so that would
    // erase every learner's record of having finished it.
    const held = await prisma.trainingLesson.findMany({
        where: { courseId },
        select: { id: true, sortOrder: true },
    });
    const bySortOrder = new Map(held.map((lesson) => [lesson.sortOrder, lesson.id]));

    let created = 0;
    let updated = 0;

    for (const lesson of course.lessons) {
        const id = bySortOrder.get(lesson.sortOrder);
        const data = {
            title: lesson.title,
            content: lesson.content,
            duration: lesson.duration,
            type: 'text',
        };

        if (id) {
            await prisma.trainingLesson.update({ where: { id }, data });
            updated += 1;
        } else {
            await prisma.trainingLesson.create({
                data: { courseId, sortOrder: lesson.sortOrder, ...data },
            });
            created += 1;
        }
    }

    const orphaned = held.filter(
        (lesson) => !course.lessons.some((l) => l.sortOrder === lesson.sortOrder)
    ).length;

    return { created, updated, orphaned, isNew: !existing };
}

async function main() {
    const directories = everyCourseDirectory();
    console.log(
        `\n${directories.length} course folders under ${ROOT}` +
            (dryRun ? '  (dry run, nothing will be written)\n' : '\n')
    );

    const parsed: ParsedCourse[] = [];
    const skipped: string[] = [];

    for (const dir of directories) {
        const course = parseCourse(dir);
        if (course) parsed.push(course);
        else skipped.push(basename(dir));
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

    if (dryRun) {
        console.log('\nA sample of what would be written:\n');
        parsed.slice(0, 3).forEach((c) => {
            console.log(`  ${c.code}  ${c.title}`);
            console.log(`         ${c.category} · ${c.duration} min · ${c.lessons.length} lessons`);
            console.log(`         ${c.description.slice(0, 110)}...`);
            c.lessons.slice(0, 2).forEach((l) =>
                console.log(`           ${l.sortOrder}. ${l.title} (${l.duration} min, ${l.content.length} chars)`)
            );
            console.log('');
        });
        return;
    }

    let newCourses = 0;
    let createdLessons = 0;
    let updatedLessons = 0;
    let orphanedLessons = 0;

    for (const course of parsed) {
        const result = await write(course);
        if (result.isNew) newCourses += 1;
        createdLessons += result.created;
        updatedLessons += result.updated;
        orphanedLessons += result.orphaned;
        process.stdout.write(
            `  ${course.code.padEnd(8)} ${result.isNew ? 'added  ' : 'updated'} ` +
                `${String(course.lessons.length).padStart(3)} lessons\n`
        );
    }

    console.log(
        `\n${parsed.length} courses (${newCourses} new), ` +
            `${createdLessons} lessons added, ${updatedLessons} updated.`
    );
    if (orphanedLessons > 0) {
        console.log(
            `\n${orphanedLessons} lessons in the database have no module in the folder any more. ` +
                `They were left alone rather than deleted, because learners may have completed them. ` +
                `Retire them from Training Management if they are genuinely gone.`
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
