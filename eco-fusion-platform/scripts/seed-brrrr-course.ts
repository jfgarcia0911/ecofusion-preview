/**
 * Adds "The BRRRR Method LLAYD WAY" as one of EcoFusion's courses.
 *
 * A video course: every lesson is an AI presenter video. The videos are not
 * made yet, so each lesson plays the same stand-in clip until its own link
 * goes into LESSONS. The lessons copy LLAYD's existing outline, and the module
 * they belong to is their description, which the course player prints under
 * each lesson's title.
 *
 * It lands under "Real Estate" on Course Prices, not for sale. Price it there.
 *
 * Usage: ALLOW_PRODUCTION_WRITE=1 npx tsx scripts/seed-brrrr-course.ts
 *
 * Safe to run again, and how a real link replaces the stand-in: the course is
 * matched on its code and each lesson on its sourceKey, and both are updated
 * in place. Nothing is deleted, because a lesson's completions cascade from it.
 * The price and whether the course is active are left as they were set.
 */

import { PrismaClient } from '@prisma/client';
import { assertSafeTarget } from './guard';

assertSafeTarget('seed-brrrr-course');

const prisma = new PrismaClient();

/** A short free clip (CC0, MDN's examples) standing in for every video. */
const STAND_IN = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4';

const CODE = 'BRRRR-001';
const MODULE = 'Introduction to Real Estate Investing';
/** Minutes per lesson, until the real videos say how long they run. */
const MINUTES = 10;

const LESSONS: { title: string; video: string }[] = [
    { title: 'What is Real Estate Investing? Ep 1', video: STAND_IN },
    { title: 'What is Real Estate Investing? Ep 2', video: STAND_IN },
    { title: 'Types of Real Estate Asset Classes Ep 1', video: STAND_IN },
    { title: 'Types of Real Estate Asset Classes Ep 2', video: STAND_IN },
    { title: 'Benefits of Real Estate Investing Ep 1', video: STAND_IN },
    { title: 'Benefits of Real Estate Investing Ep 2', video: STAND_IN },
    { title: 'Benefits of Real Estate Investing Ep 3', video: STAND_IN },
    { title: 'Risk to Be Aware Of Ep 1', video: STAND_IN },
    { title: 'Risk to be Aware Of Ep 2', video: STAND_IN },
    { title: 'Risk to Be Aware Of Ep 3', video: STAND_IN },
    { title: 'Reflection and Group Discussion', video: STAND_IN },
];

const COURSE = {
    code: CODE,
    title: 'The BRRRR Method LLAYD WAY',
    description:
        'Buy, Rehab, Rent, Refinance, Repeat: building a rental portfolio the LLAYD way, taught in short AI presenter videos. It opens with an introduction to real estate investing.',
    category: 'Real Estate',
    duration: LESSONS.length * MINUTES,
    isRequired: false,
    renewalDays: null,
    passScore: 80,
    // After the curriculum's levels, which run to 515.
    sortOrder: 600,
};

async function main() {
    const result = await prisma.$transaction(async (tx) => {
        const existing = await tx.trainingCourse.findFirst({
            where: { organizationId: null, code: CODE },
            select: { id: true },
        });
        const course = existing
            ? await tx.trainingCourse.update({ where: { id: existing.id }, data: COURSE })
            : await tx.trainingCourse.create({ data: COURSE });

        for (const [index, lesson] of LESSONS.entries()) {
            const sourceKey = `video:${String(index + 1).padStart(2, '0')}`;
            const data = {
                title: lesson.title,
                description: MODULE,
                type: 'video',
                content: lesson.video,
                duration: MINUTES,
                sortOrder: index + 1,
            };
            await tx.trainingLesson.upsert({
                where: { courseId_sourceKey: { courseId: course.id, sourceKey } },
                update: data,
                create: { ...data, courseId: course.id, sourceKey },
            });
        }
        return { course, created: !existing };
    });

    const standIns = LESSONS.filter((l) => l.video === STAND_IN).length;
    console.log(
        `\n${result.created ? 'Added' : 'Updated'} ${result.course.code} ${result.course.title}: ` +
            `${LESSONS.length} video lessons, ${standIns} still on the stand-in clip.`
    );
    console.log('Find it under Real Estate on Course Prices.\n');
}

main()
    .catch((error) => {
        console.error('\nSeed failed:', error);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
