/**
 * Adds "The BRRRR Method LLAYD WAY" as one of EcoFusion's courses.
 *
 * A video course copying LLAYD's outline module by module: every lesson is an
 * AI presenter video, and most modules end in a quiz. Each lesson carries its
 * module, and the course player gathers the lessons under their modules.
 *
 * A video with no link of its own yet plays a stand-in clip. To put a real one
 * in, turn its title into [title, link] below and run this again. A quiz's
 * questions are written in brrrr-quizzes.ts and given to its module here. A
 * quiz without any lands empty, and the player says it is not ready; it cannot
 * be passed until it has some, so the course should not go on sale before then.
 *
 * It sits under "Real Estate" on Course Prices, not for sale. Price it there.
 *
 * Usage: ALLOW_PRODUCTION_WRITE=1 npx tsx scripts/seed-brrrr-course.ts
 *
 * Safe to run again: the course is matched on its code and each lesson on its
 * sourceKey, and both are updated in place. Nothing is deleted, because a
 * lesson's completions cascade from it. The price and whether the course is
 * active are left as they were set, and so are the questions of a quiz that
 * has none written here.
 *
 * Videos are keyed by their number through the whole course and quizzes by
 * their module, so add a new video at the end of the list. One added in the
 * middle would shift every key after it, and with them learners' progress.
 */

import { Prisma, PrismaClient } from '@prisma/client';
import type { StoredQuestion } from '../lib/quiz';
import { INTRO_QUIZ } from './brrrr-quizzes';
import { assertSafeTarget } from './guard';

assertSafeTarget('seed-brrrr-course');

const prisma = new PrismaClient();

/** A short free clip (CC0, MDN's examples) standing in for every unmade video. */
const STAND_IN = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4';

const CODE = 'BRRRR-001';
/** Minutes per video and per quiz, until the real ones say how long they run. */
const VIDEO_MINUTES = 10;
const QUIZ_MINUTES = 5;

/** A title alone plays the stand-in; [title, link] plays the real video. */
type Video = string | [title: string, link: string];

const MODULES: { title: string; videos: Video[]; quiz?: string; questions?: StoredQuestion[] }[] = [
    {
        title: 'Introduction to Real Estate Investing',
        videos: [
            [
                'What is Real Estate Investing? Ep 1',
                'https://assets.cdn.filesafe.space/UZRZRAnmmFU42ljvjTFO/media/6adb8440eacc239122449daf.mp4',
            ],
            [
                'What is Real Estate Investing? Ep 2',
                'https://assets.cdn.filesafe.space/UZRZRAnmmFU42ljvjTFO/media/6adb9df75ea8f691db75dbc9.mp4',
            ],
            [
                'Types of Real Estate Asset Classes Ep 1',
                'https://assets.cdn.filesafe.space/UZRZRAnmmFU42ljvjTFO/media/6adbbe05651cc02cde2796b8.mp4',
            ],
            [
                'Types of Real Estate Asset Classes Ep 2',
                'https://assets.cdn.filesafe.space/UZRZRAnmmFU42ljvjTFO/media/6adbc551f10175622aa3b542.mp4',
            ],
            [
                'Benefits of Real Estate Investing Ep 1',
                'https://assets.cdn.filesafe.space/UZRZRAnmmFU42ljvjTFO/media/6adbcb24da8a5d61108e865b.mp4',
            ],
            [
                'Benefits of Real Estate Investing Ep 2',
                'https://assets.cdn.filesafe.space/UZRZRAnmmFU42ljvjTFO/media/6adbd26e651cc02cde29f8a8.mp4',
            ],
            [
                'Benefits of Real Estate Investing Ep 3',
                'https://assets.cdn.filesafe.space/UZRZRAnmmFU42ljvjTFO/media/6adbd8b479756dcaf071ec00.mp4',
            ],
            'Risk to Be Aware Of Ep 1',
            'Risk to be Aware Of Ep 2',
            'Risk to Be Aware Of Ep 3',
            'Reflection and Group Discussion',
        ],
        quiz: 'Intro to Real Estate Investing Quiz',
        questions: INTRO_QUIZ,
    },
    {
        title: 'Understanding the BRRRR Method',
        videos: [
            'Understanding the BRRRR Method',
            'BRRRR Breakdown',
            'Why BRRRR Works',
            'Common BRRRR Mistakes',
        ],
        quiz: 'Understanding the BRRRR Method Quiz',
    },
    {
        title: 'Market Analysis - Choosing The Right Properties',
        videos: [
            'What is Market Analysis Ep 1',
            'What is Market Analysis Ep 2',
            'How to Choose The Right Market',
            'Economic Indicators to Watch',
            'Neighborhood-Level Analysis',
            'Property Evaluation Tools',
        ],
        quiz: 'Market Analysis-Choosing The Right Properties Quiz',
    },
    {
        title: 'Financing Your Investment – Loans & Funding Options',
        videos: [
            'Traditional Financing Option',
            'Requirements for Traditional Financing',
            'Creative Financing Strategies',
            'Hard Money & Private Lending',
            'Building Relationships with Private Lenders Ep 1',
            'Building Relationships with Private Lenders Ep 2',
            'Partnerships & Joint Ventures',
            'Comparing Financing Option',
            'Preparation: Getting Funding Ready',
        ],
        quiz: 'Financing Your Investment - Loans & Funding Options Quiz',
    },
    {
        title: 'Property Inspection: What to Look For',
        videos: [
            'Why Property Inspection Matters',
            'Essential Inspection Equipment',
            'Foundation & Structural Assessment',
            'Roof & Exterior Evaluation',
            'Electrical System Inspection',
            'Plumbing System Evaluation',
            'HVAC System Assessment',
            'Interior Space Inspection',
            'Windows & Door Inspection',
            'Attic & Insulation Inspection',
            'Basement & Crawlspace Evaluation',
            'Detecting Hidden Problems',
            'Evaluating Renovation Potential',
            'Creating your Inspection Checklist',
        ],
        quiz: 'Property Inspection: What to Look For Quiz',
    },
    {
        title: 'Estimating Rehab Costs: Budgeting for Success Part 1',
        videos: [
            'Why Accurate Estimates Make or Break Your Investment',
            "Rehabilitation Cost Categories: What You're Paying For",
            'Real-World Kitchen Remodel: Cost Breakdown',
            'Bathroom Renovation: Real Numbers That Matter',
            'Profitable vs. Unprofitable Projects: Real Examples',
            'Professional Estimating Techniques That Work Ep 1',
            'Professional Estimating Techniques That Work Ep 2',
            'Site Visit',
        ],
        quiz: 'Estimating Rehab Costs: Budgeting for Success Part 1 Quiz',
    },
    {
        title: 'Estimating Rehab Costs: Budgeting for Success Part 2',
        videos: [
            'Renovation Priority Hierarchy: Where to Spend First Ep 1',
            'Renovation Priority Hierarchy: Where to Spend First Ep 2',
            'Cost-Saving Strategies Without Sacrificing Quality',
            'Detailed Estimating Example: 1950s Ranch Home',
            'Return on Investment: Which Renovations Pay Off',
            'Technology Tools for Better Estimating',
            'Working with Contractors: Getting Accurate Bids',
        ],
        quiz: 'Estimating Rehab Costs: Budgeting for Success Part 2 Quiz',
    },
    {
        title: "Finding & Vetting Contractors and Building a Team: A Real Estate Developer's Guide",
        videos: [
            'The Impact of Contractor Selection',
            'Contracting as an Art Form',
            'Essential Qualities to Seek',
            'The Comprehensive Vetting Process',
            'Effective Interview Techniques',
            'Red Flags to Watch For',
            'Contract Essentials Ep 1',
            'Contract Essentials Ep 2',
            'Negotiation Strategies',
            'Building Effective Relationships',
            'Technology for Project Management',
            'Effective Project Monitoring',
            'Managing Issues and Conflicts',
            'Building Your Contractor Network',
            'Action Plan: Next Steps',
        ],
        quiz: "Finding & Vetting Contractors and Building a Team: A Real Estate Developer's Guide Quiz",
    },
    {
        title: 'DIY vs. Hiring Pros – Making the Right Call',
        videos: [
            'DIY vs. Hiring Pros',
            'When to DIY',
            'When to Hire Professionals',
            'Permits, Codes & Compliance',
            'Safety First: DIY Precautions',
            'Time Investment Comparison',
            'Avoiding Costly DIY Mistakes',
            'DIY Cost Savings Analysis',
            'DIY Skill Assessment',
            'Action Items',
        ],
        quiz: 'DIY vs. Hiring Pros - Making the Right Call Quiz',
    },
    {
        title: 'Managing Timelines for Rehab Projects',
        videos: [
            'Critical Path Management',
            'Creating a Realistic Timeline',
            'Keeping Projects on Track',
            'Handling Unexpected Setbacks Ep 1',
            'Handling Unexpected Setbacks Ep 2',
            'Tools & Templates',
            'Action Items',
            'Timeline Development Process',
            'Common Timeline Challenges',
            'Timeline Communication Strategies',
            'Timeline Recovery Techniques',
            'Measuring Timeline Success',
        ],
        quiz: 'Managing Timelines for Rehab Projects Quiz',
    },
    {
        title: 'Setting the Right Rent for Your Market',
        videos: [
            'Evaluating Comparable Rentals',
            'Impact of Location on Rent',
            'Impact of Property Condition & Amenities',
            'Setting Competitive Rent',
            'The 1% Rule in Rental Property Investing',
            'The 50% Rule for Operating Expenses',
            'Rental Laws & Fair Housing',
            'Rental Market Analysis Tools',
            'Neighborhood Factors Affecting Rental Value',
            'High-Value Rental Property Upgrades',
            'Fair Housing Protection Examples',
            'Seasonal Rental Market Fluctuations',
            'Rental Property Marketing Strategies',
        ],
        quiz: 'Setting the Right Rent for Your Market Quiz',
    },
    {
        title: 'The What, The Why, The How',
        videos: ['The What', 'The Why', 'The How'],
    },
    {
        title: 'Advanced Tips',
        videos: ['Advanced Tips', 'Going Beyond this Course'],
    },
    {
        title: 'Course Wrap Up',
        videos: ['Wrapping Things Up', 'Resources'],
    },
];

interface LessonRow {
    sourceKey: string;
    title: string;
    module: string;
    /** Cleared: it held the module before lessons had a module of their own. */
    description: null;
    type: 'video' | 'quiz';
    content: string | null;
    duration: number;
    sortOrder: number;
    /** Only on a quiz with questions written; without it, a quiz keeps what it has. */
    questions?: Prisma.InputJsonValue;
}

/** The outline as lessons, in the order a learner meets them. */
function lessonRows(): LessonRow[] {
    const rows: LessonRow[] = [];
    let videoNumber = 0;
    for (const [index, module] of MODULES.entries()) {
        for (const video of module.videos) {
            const [title, link] = typeof video === 'string' ? [video, STAND_IN] : video;
            rows.push({
                sourceKey: `video:${String(++videoNumber).padStart(2, '0')}`,
                title,
                module: module.title,
                description: null,
                type: 'video',
                content: link,
                duration: VIDEO_MINUTES,
                sortOrder: rows.length + 1,
            });
        }
        if (module.quiz) {
            rows.push({
                sourceKey: `quiz:${String(index + 1).padStart(2, '0')}`,
                title: module.quiz,
                module: module.title,
                description: null,
                type: 'quiz',
                content: null,
                // A minute a question, once it has them.
                duration: module.questions?.length ?? QUIZ_MINUTES,
                sortOrder: rows.length + 1,
                // An interface has no index signature, so Prisma's Json type
                // will not take one as it is.
                ...(module.questions && { questions: module.questions as unknown as Prisma.InputJsonValue }),
            });
        }
    }
    return rows;
}

async function main() {
    const lessons = lessonRows();
    const course = {
        code: CODE,
        title: 'The BRRRR Method LLAYD WAY',
        description:
            'Buy, Rehab, Rent, Refinance, Repeat: building a rental portfolio the LLAYD way, taught in short AI presenter videos. From an introduction to real estate investing through market analysis, financing, inspection, rehab budgeting, contractors, timelines and setting the rent.',
        category: 'Real Estate',
        duration: lessons.reduce((sum, lesson) => sum + lesson.duration, 0),
        isRequired: false,
        renewalDays: null,
        passScore: 80,
        // After the curriculum's levels, which run to 515.
        sortOrder: 600,
    };

    const result = await prisma.$transaction(
        async (tx) => {
            const existing = await tx.trainingCourse.findFirst({
                where: { organizationId: null, code: CODE },
                select: { id: true },
            });
            const saved = existing
                ? await tx.trainingCourse.update({ where: { id: existing.id }, data: course })
                : await tx.trainingCourse.create({ data: course });

            for (const { sourceKey, ...data } of lessons) {
                await tx.trainingLesson.upsert({
                    where: { courseId_sourceKey: { courseId: saved.id, sourceKey } },
                    update: data,
                    create: { ...data, courseId: saved.id, sourceKey },
                });
            }
            return { course: saved, created: !existing };
        },
        // One round trip per lesson, over a pooled connection, outlasts the
        // default five seconds.
        { timeout: 60_000 }
    );

    const videos = lessons.filter((l) => l.type === 'video');
    const standIns = videos.filter((l) => l.content === STAND_IN).length;
    const quizzes = lessons.filter((l) => l.type === 'quiz');
    const written = quizzes.filter((l) => l.questions).length;
    console.log(
        `\n${result.created ? 'Added' : 'Updated'} ${result.course.code} ${result.course.title}: ` +
            `${MODULES.length} modules, ${videos.length} videos (${standIns} still on the stand-in clip), ` +
            `${quizzes.length} quizzes (${written} with questions written here).`
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
