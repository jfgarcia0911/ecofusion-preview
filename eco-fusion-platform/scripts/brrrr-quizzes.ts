/**
 * The questions for The BRRRR Method LLAYD WAY's quizzes.
 *
 * Each quiz is written from the AI presenter scripts of the module it closes,
 * and asks only what those videos teach. Claims the scripts cut or sent for
 * legal review - tax write-offs, REIT returns, credit scores - are not asked
 * about, because a learner cannot be marked on what the video never says.
 *
 * Answers count from 0. The learner sees the options in the order given here.
 */

import type { StoredQuestion } from '../lib/quiz';

/**
 * Introduction to Real Estate Investing, from its first eight videos: What is
 * Real Estate Investing? 1-2, the Asset Classes 1-2, Benefits 1-3 and Risk 1.
 */
export const INTRO_QUIZ: StoredQuestion[] = [
    {
        id: 'intro-q1',
        question: 'What does a bird dog, or wholesaler, do?',
        options: [
            'Lists homes for sale on the MLS as a licensed agent',
            'Lends investors money for rehab projects',
            'Finds vacant or dormant properties and sells the deal to an investor for a fee',
            'Inspects properties before closing',
        ],
        correctAnswer: 2,
        explanation:
            "A bird dog finds vacant or dormant properties, finds an investor, and sells the deal to that investor with their fee on top. Wholesalers aren't licensed agents, and their deals usually stay off the MLS.",
    },
    {
        id: 'intro-q2',
        question: 'Which three basic strategies does real estate investing use, each creating wealth differently?',
        options: [
            'Rentals, flips and wholesale deals',
            'Stocks, bonds and savings accounts',
            'Auctions, timeshares and land banking',
            'REITs, CDs and annuities',
        ],
        correctAnswer: 0,
        explanation: 'The basic strategies are rentals, flips and wholesale deals, and each one creates wealth differently.',
    },
    {
        id: 'intro-q3',
        question: "You're new and have never bought a property. What should you do before you pick a deal?",
        options: [
            'Buy the cheapest house you can find',
            'Build your financial foundation and buying power',
            'Start out as a wholesaler',
            'Borrow from a hard money lender',
        ],
        correctAnswer: 1,
        explanation:
            'Start with your foundation: build your personal capital stack, the credit and resources you can tap, so you never have to beg for money.',
    },
    {
        id: 'intro-q4',
        question: 'What does BRRRR stand for?',
        options: [
            'Borrow, rent, repair, resell, retire',
            'Build, rent, refinance, repay, reinvest',
            'Buy, renovate, resell, rent, refinance',
            'Buy, rehab, rent, refinance, repeat',
        ],
        correctAnswer: 3,
        explanation: 'BRRRR stands for buy, rehab, rent, refinance, repeat: the method this course teaches.',
    },
    {
        id: 'intro-q5',
        question: 'In Baltimore, what do people usually call a townhome?',
        options: ['A condo', 'A row home', 'A duplex', 'A mixed-use property'],
        correctAnswer: 1,
        explanation:
            "By definition, a row home is a townhome: a home that's connected to a whole row of other homes on the block.",
    },
    {
        id: 'intro-q6',
        question: 'What makes a property industrial?',
        options: [
            'Whether it has air conditioning',
            'Whether it has interior walls',
            "Its type of use under the city's code",
            'Its listing price',
        ],
        correctAnswer: 2,
        explanation:
            "Industrial spaces are often bare bones, with no interior walls and sometimes no air conditioning, but what makes a property industrial is its type of use under the city's code.",
    },
    {
        id: 'intro-q7',
        question: "What's the difference between a duplex and a twin home?",
        options: [
            'A duplex is two units in one building; a twin home is two joined, identical homes, each with its own entrance',
            'A duplex is two separate buildings; a twin home is a single unit',
            "There's no difference at all",
            'A twin home is always commercial property',
        ],
        correctAnswer: 0,
        explanation:
            'People use the names interchangeably, but a duplex is two units on one property, in one building. A twin home is two identical homes joined together, each with its own entrance.',
    },
    {
        id: 'intro-q8',
        question: 'What kind of zoning do you need to have trucks park overnight on a lot?',
        options: ['Residential zoning', 'Agricultural zoning', 'No zoning at all', 'Industrial zoning'],
        correctAnswer: 3,
        explanation: 'Overnight truck parking needs industrial zoning, which is rare in the city and very expensive to get.',
    },
    {
        id: 'intro-q9',
        question: 'Why is real estate called a hedge against inflation?',
        options: [
            'Its value never goes down',
            'It typically does well when the cost of everything is going up',
            'The government sets its price',
            'It has no expenses',
        ],
        correctAnswer: 1,
        explanation:
            'Real estate typically does well during inflationary periods. As the cost of everything goes up, so does the cost of real estate.',
    },
    {
        id: 'intro-q10',
        question: 'Why does education matter when someone else is investing your money in real estate?',
        options: [
            'So you can avoid paying any taxes',
            'So you can lock in a guaranteed return',
            'So you know where the money goes and who keeps the profits',
            'So you never have to read a contract',
        ],
        correctAnswer: 2,
        explanation:
            'Many people and companies will take your money but only give you a set percentage, while they keep the appreciation and the rest of the gains. Education shows you who is getting paid.',
    },
    {
        id: 'intro-q11',
        question: 'Someone offers you ten percent on your money. What does the course suggest asking for instead?',
        options: [
            'Twenty percent on your money',
            'A one-time fee at closing',
            'A guaranteed monthly check',
            'Ten percent ownership in the property',
        ],
        correctAnswer: 3,
        explanation:
            'Ask for ownership, not a rate. As an owner, you share in the appreciation, the equity and the monthly income.',
    },
    {
        id: 'intro-q12',
        question: 'Why do many established business owners become hard money lenders instead of buying properties themselves?',
        options: [
            "They know the game, but they don't want the extra work of finding, closing and rehabbing properties",
            "The law doesn't let them own real estate",
            'Lending carries no risk at all',
            "They don't understand real estate",
        ],
        correctAnswer: 0,
        explanation:
            "They know the game, but they'd rather fund you and earn their return than find the property, go through closing and do the work themselves.",
    },
    {
        id: 'intro-q13',
        question: 'What does it mean to build "a diamond in the rough"?',
        options: [
            'Buying only in the most expensive neighborhoods',
            'Creating one standout property that is far nicer than the homes around it',
            'Matching every renovation to the cheapest house on the block',
            'Avoiding any neighborhood that needs work',
        ],
        correctAnswer: 1,
        explanation:
            'Common advice says to stick to the level of the neighborhood. The course teaches that you can change an area by building a standout property: a diamond that can make the whole rough shine.',
    },
    {
        id: 'intro-q14',
        question: 'How does the course describe the returns from renting to Housing Choice Voucher holders?',
        options: [
            'Phenomenal and guaranteed',
            'Higher than any other strategy',
            'Steady and predictable, but not phenomenal',
            'Always a money loser',
        ],
        correctAnswer: 2,
        explanation:
            "Like the safe setting on a retirement account, voucher rent tends to be steady and predictable, but it isn't phenomenal, and it isn't guaranteed.",
    },
    {
        id: 'intro-q15',
        question: 'However you screen tenants, how should you apply your screening?',
        options: [
            "Only to applicants you're unsure about",
            'Only to applicants who use a voucher',
            'Only when the rental market is slow',
            'The same way for every applicant, every time',
        ],
        correctAnswer: 3,
        explanation: 'Do your diligence, and apply the same process to every single applicant, every single time.',
    },
];
