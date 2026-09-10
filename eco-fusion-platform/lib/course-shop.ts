/**
 * Businesses buying EcoFusion's courses.
 *
 * A business holds a course when it has a CourseGrant for it, and there are
 * three ways to come by one: pay for it, take it while it is free, or be given
 * it by the master account. Paying is the only one that goes through Stripe,
 * and it is the only one where the browser is never believed: a course is
 * unlocked when Stripe says the money arrived, by the webhook or by asking
 * Stripe directly when the buyer comes back, and by nothing else.
 *
 * Both of those can happen for the same payment, in either order, so
 * unlocking is written to be done once no matter how many times it is asked.
 */

import type Stripe from 'stripe';
import { prisma } from '@/lib/prisma';
import { getStripe, appUrl } from '@/lib/stripe';

/** A request the shop cannot honour, with the status to answer it with. */
export class CourseShopError extends Error {
    constructor(message: string, readonly status = 400) {
        super(message);
    }
}

/** The currency courses are sold in. One for the whole shop. */
export function courseCurrency(): string {
    return (process.env.COURSE_CURRENCY || 'usd').trim().toLowerCase();
}

/** Stripe allows at most this many lines on one checkout. */
const MAX_LINES = 100;

/** Tells a course checkout apart from a subscription one on the way back. */
const KIND = 'courses';

/**
 * The key the browser needs to show Stripe's payment form inside the page.
 *
 * Publishable by design - Stripe issues it for exactly this - so it is handed
 * to the page by the server rather than baked in at build time. Without it,
 * checkout falls back to sending the buyer to Stripe's own page.
 */
export function stripePublishableKey(): string | null {
    return process.env.STRIPE_PUBLISHABLE_KEY?.trim() || null;
}

/** A checkout to draw inside the page rather than send the buyer away to. */
export interface EmbeddedCheckoutStart {
    clientSecret: string;
    publishableKey: string;
    sessionId: string;
}

/** The business's Stripe customer, created the first time it is needed. */
async function stripeCustomerFor(stripe: Stripe, organizationId: string): Promise<string> {
    const org = await prisma.organization.findUnique({
        where: { id: organizationId },
        select: { id: true, name: true, stripeCustomerId: true },
    });
    if (!org) throw new CourseShopError('No such business', 404);
    if (org.stripeCustomerId) return org.stripeCustomerId;

    // The same customer the subscription uses, so Stripe shows one history
    // per business rather than one per thing it bought.
    const customer = await stripe.customers.create({
        name: org.name,
        metadata: { organizationId: org.id },
    });
    await prisma.organization.update({
        where: { id: org.id },
        data: { stripeCustomerId: customer.id },
    });
    return customer.id;
}

/** What one level's package would cost one business right now. */
export interface PackageQuote {
    category: string;
    /** The package's own price, as set on Course Prices. */
    priceCents: number;
    /** Active courses in the level. */
    totalCourses: number;
    /** The ones this business does not hold yet: what buying would unlock. */
    courseIds: string[];
    /** What this business would pay for them. */
    chargeCents: number;
    /** Whether that is less than the package price, and why. */
    reduced: boolean;
}

/**
 * The pricing rule for a package, written once so the shop and the checkout
 * cannot disagree about it.
 *
 * A business that already holds some of a level pays for the rest, never more
 * than the rest would cost bought one at a time. When any of the rest cannot be
 * bought on its own there is nothing to compare with, and the package price
 * stands.
 */
export function quotePackage(
    pkg: { category: string; priceCents: number },
    levelCourses: { id: string; priceCents: number | null }[],
    held: Set<string>
): PackageQuote {
    const remaining = levelCourses.filter((course) => !held.has(course.id));
    const allPriced = remaining.every((course) => course.priceCents !== null);
    const individually = remaining.reduce((sum, course) => sum + (course.priceCents ?? 0), 0);
    const chargeCents =
        remaining.length === 0 ? 0 : allPriced ? Math.min(pkg.priceCents, individually) : pkg.priceCents;
    return {
        category: pkg.category,
        priceCents: pkg.priceCents,
        totalCourses: levelCourses.length,
        courseIds: remaining.map((course) => course.id),
        chargeCents,
        reduced: chargeCents < pkg.priceCents,
    };
}

/** Every package on sale, quoted for one business. */
export async function packageQuotes(organizationId: string): Promise<PackageQuote[]> {
    const packages = await prisma.coursePackage.findMany({ orderBy: { category: 'asc' } });
    if (!packages.length) return [];

    const [courses, grants] = await Promise.all([
        prisma.trainingCourse.findMany({
            where: {
                organizationId: null,
                isActive: true,
                category: { in: packages.map((p) => p.category) },
            },
            select: { id: true, category: true, priceCents: true },
        }),
        prisma.courseGrant.findMany({
            where: { organizationId },
            select: { courseId: true },
        }),
    ]);
    const held = new Set(grants.map((grant) => grant.courseId));

    return packages
        .map((pkg) =>
            quotePackage(
                pkg,
                courses.filter((course) => course.category === pkg.category),
                held
            )
        )
        // A level whose courses have all been retired has nothing to sell.
        .filter((quote) => quote.totalCourses > 0);
}

/**
 * Start buying courses and level packages for a business.
 *
 * Anything free in the basket is unlocked at once; there is nothing to pay.
 * The rest becomes one Stripe checkout, and the answer carries its address.
 * A basket of only free things comes back with no address at all.
 *
 * A course chosen on its own and also part of a chosen package is bought once,
 * as part of the package.
 */
export async function startCoursePurchase(options: {
    organizationId: string;
    userId: string;
    courseIds: string[];
    packages?: string[];
    /** Draw Stripe's form inside the page, when the key for it is set. */
    embedded?: boolean;
}): Promise<{ url: string | null; added: number; checkout: EmbeddedCheckoutStart | null }> {
    const { organizationId, userId } = options;
    const wantedPackages = [...new Set(options.packages ?? [])];
    let requested = [...new Set(options.courseIds)];
    if (requested.length === 0 && wantedPackages.length === 0) {
        throw new CourseShopError('Choose at least one course or package');
    }

    // Packages first, so their courses can be taken out of the loose ones.
    const quotes = wantedPackages.length
        ? (await packageQuotes(organizationId)).filter((q) => wantedPackages.includes(q.category))
        : [];
    if (quotes.length !== wantedPackages.length) {
        throw new CourseShopError('One or more of those levels has no package for sale');
    }
    const emptied = quotes.find((quote) => quote.courseIds.length === 0);
    if (emptied) {
        throw new CourseShopError(`Your business already has every course in ${emptied.category}`);
    }
    const inPackages = new Set(quotes.flatMap((quote) => quote.courseIds));
    requested = requested.filter((id) => !inPackages.has(id));

    if (requested.length + quotes.length > MAX_LINES) {
        throw new CourseShopError(`Choose at most ${MAX_LINES} items at a time`);
    }

    const courses = requested.length
        ? await prisma.trainingCourse.findMany({
              where: { id: { in: requested }, organizationId: null, isActive: true },
              select: { id: true, code: true, title: true, priceCents: true },
          })
        : [];
    if (courses.length !== requested.length) {
        throw new CourseShopError('One or more of those courses is not for sale');
    }
    if (courses.some((course) => course.priceCents === null)) {
        throw new CourseShopError(
            'One or more of those courses is only sold as part of its level package'
        );
    }

    const held = requested.length
        ? await prisma.courseGrant.count({
              where: { organizationId, courseId: { in: requested } },
          })
        : 0;
    if (held > 0) {
        throw new CourseShopError('Your business already has one or more of those courses');
    }

    const freeCourses = courses.filter((course) => course.priceCents === 0);
    const paidCourses = courses.filter((course) => (course.priceCents ?? 0) > 0);
    const freePackages = quotes.filter((quote) => quote.chargeCents === 0);
    const paidPackages = quotes.filter((quote) => quote.chargeCents > 0);
    const somethingToPay = paidCourses.length > 0 || paidPackages.length > 0;

    // Asked before anything is unlocked, so a basket that cannot be paid for
    // is refused whole rather than half given away.
    const stripe = somethingToPay ? getStripe() : null;
    if (somethingToPay && !stripe) {
        throw new CourseShopError(
            'Payments are not set up yet, so paid courses cannot be bought. Try again later.',
            503
        );
    }

    const freeIds = [
        ...freeCourses.map((course) => course.id),
        ...freePackages.flatMap((quote) => quote.courseIds),
    ];
    if (freeIds.length) {
        await prisma.courseGrant.createMany({
            data: freeIds.map((courseId) => ({
                courseId,
                organizationId,
                source: 'free',
                grantedById: userId,
            })),
            skipDuplicates: true,
        });
    }
    if (!somethingToPay || !stripe) return { url: null, added: freeIds.length, checkout: null };

    // A package's courses are recorded one by one, so the history can say
    // exactly what was unlocked, each carrying an even share of the package
    // price. The shares add up to the charge to the cent.
    const packageCourses = paidPackages.length
        ? await prisma.trainingCourse.findMany({
              where: { id: { in: paidPackages.flatMap((q) => q.courseIds) } },
              select: { id: true, code: true, title: true, category: true },
              orderBy: { sortOrder: 'asc' },
          })
        : [];
    const packageItems = paidPackages.flatMap((quote) => {
        const list = packageCourses.filter((course) => course.category === quote.category);
        const share = Math.floor(quote.chargeCents / list.length);
        const leftover = quote.chargeCents - share * list.length;
        return list.map((course, index) => ({
            courseId: course.id,
            courseCode: course.code,
            courseTitle: course.title,
            priceCents: share + (index < leftover ? 1 : 0),
            packageCategory: quote.category,
        }));
    });

    const currency = courseCurrency();
    const amountCents =
        paidCourses.reduce((sum, course) => sum + (course.priceCents ?? 0), 0) +
        paidPackages.reduce((sum, quote) => sum + quote.chargeCents, 0);

    const purchase = await prisma.coursePurchase.create({
        data: {
            organizationId,
            purchasedById: userId,
            amountCents,
            currency,
            items: {
                create: [
                    ...paidCourses.map((course) => ({
                        courseId: course.id,
                        courseCode: course.code,
                        courseTitle: course.title,
                        priceCents: course.priceCents ?? 0,
                    })),
                    ...packageItems,
                ],
            },
        },
        select: { id: true },
    });

    try {
        const metadata = { kind: KIND, purchaseId: purchase.id, organizationId };
        const publishableKey = options.embedded ? stripePublishableKey() : null;
        const returnTo = `${appUrl()}/business/classes?purchase={CHECKOUT_SESSION_ID}`;
        const session = await stripe.checkout.sessions.create({
            mode: 'payment',
            // Inside the page: Stripe's form and its summary of what is being
            // paid for, in a frame, with the shop still around it. Stripe only
            // leaves the page for a payment method that insists on it, and
            // then comes back to the same address a redirect would have.
            ...(publishableKey
                ? {
                      ui_mode: 'embedded_page' as const,
                      redirect_on_completion: 'if_required' as const,
                      return_url: returnTo,
                  }
                : {
                      success_url: returnTo,
                      cancel_url: `${appUrl()}/business/classes?purchase=cancelled`,
                  }),
            customer: await stripeCustomerFor(stripe, organizationId),
            line_items: [
                ...paidCourses.map((course) => ({
                    quantity: 1,
                    price_data: {
                        currency,
                        unit_amount: course.priceCents ?? 0,
                        product_data: { name: `${course.code} ${course.title}`.slice(0, 250) },
                    },
                })),
                ...paidPackages.map((quote) => ({
                    quantity: 1,
                    price_data: {
                        currency,
                        unit_amount: quote.chargeCents,
                        product_data: {
                            name: `${quote.category} package (${quote.courseIds.length} course${
                                quote.courseIds.length === 1 ? '' : 's'
                            })`.slice(0, 250),
                        },
                    },
                })),
            ],
            // Stripe puts the session's own id where the placeholder in the
            // return address is, which is how the page knows which payment to
            // ask about on return.
            metadata,
            // On the payment as well, because a refund arrives about the
            // payment and not about the checkout it came from.
            payment_intent_data: { metadata },
        });

        await prisma.coursePurchase.update({
            where: { id: purchase.id },
            data: { stripeSessionId: session.id },
        });
        if (publishableKey && session.client_secret) {
            return {
                url: null,
                added: freeIds.length,
                checkout: { clientSecret: session.client_secret, publishableKey, sessionId: session.id },
            };
        }
        return { url: session.url, added: freeIds.length, checkout: null };
    } catch (error) {
        // Nobody was sent to pay, so there is no purchase to keep a record of.
        await prisma.coursePurchase.delete({ where: { id: purchase.id } }).catch(() => undefined);
        throw error;
    }
}

export type FulfilOutcome = 'unlocked' | 'already' | 'unpaid' | 'unknown';

/**
 * Unlock what a completed checkout paid for. Safe to call any number of times.
 *
 * Only the first caller to move the purchase from pending to paid unlocks
 * anything; the webhook and the buyer's return both arrive here and one of
 * them always finds the work already done.
 */
export async function fulfilCheckoutSession(session: Stripe.Checkout.Session): Promise<FulfilOutcome> {
    if (session.metadata?.kind !== KIND) return 'unknown';
    if (session.payment_status !== 'paid') return 'unpaid';

    const purchaseId = session.metadata.purchaseId;
    const purchase = purchaseId
        ? await prisma.coursePurchase.findUnique({
              where: { id: purchaseId },
              include: { items: { select: { courseId: true } } },
          })
        : null;
    if (!purchase || purchase.stripeSessionId !== session.id) return 'unknown';
    if (purchase.status === 'paid' || purchase.status === 'refunded') return 'already';

    // What was charged has to be what was recorded. The session is created
    // here with these amounts, so a difference means something other than
    // this code made it, and nothing should be unlocked on its say-so.
    if (session.amount_total !== purchase.amountCents || session.currency !== purchase.currency) {
        console.error('[courses] checkout %s charged a different amount than recorded', session.id);
        return 'unknown';
    }

    const paymentIntentId =
        typeof session.payment_intent === 'string'
            ? session.payment_intent
            : session.payment_intent?.id ?? null;
    const courseIds = purchase.items
        .map((item) => item.courseId)
        .filter((id): id is string => id !== null);

    const unlocked = await prisma.$transaction(async (tx) => {
        const claimed = await tx.coursePurchase.updateMany({
            where: { id: purchase.id, status: { in: ['pending', 'expired'] } },
            data: { status: 'paid', paidAt: new Date(), stripePaymentIntentId: paymentIntentId },
        });
        if (claimed.count === 0) return false;

        await tx.courseGrant.createMany({
            data: courseIds.map((courseId) => ({
                courseId,
                organizationId: purchase.organizationId,
                source: 'purchase',
                purchaseId: purchase.id,
                grantedById: purchase.purchasedById,
            })),
            skipDuplicates: true,
        });
        // A course they had been given while this was being paid for becomes
        // the one they bought: they paid for it, and a refund should know so.
        await tx.courseGrant.updateMany({
            where: {
                organizationId: purchase.organizationId,
                courseId: { in: courseIds },
                purchaseId: null,
            },
            data: { source: 'purchase', purchaseId: purchase.id },
        });
        return true;
    });

    return unlocked ? 'unlocked' : 'already';
}

/**
 * Ask Stripe about a checkout the buyer has just come back from.
 *
 * The webhook normally gets there first, but not always, and somebody who has
 * just paid should not be told to wait for it. The session is fetched from
 * Stripe rather than taken from the address bar, and must belong to the
 * business asking.
 */
export async function confirmCheckoutSession(
    sessionId: string,
    organizationId: string
): Promise<FulfilOutcome> {
    const stripe = getStripe();
    if (!stripe) return 'unknown';
    let session: Stripe.Checkout.Session;
    try {
        session = await stripe.checkout.sessions.retrieve(sessionId);
    } catch {
        return 'unknown';
    }
    if (session.metadata?.organizationId !== organizationId) return 'unknown';
    return fulfilCheckoutSession(session);
}

/**
 * The buyer backed out of a checkout shown inside the page.
 *
 * The session is expired at Stripe so it can no longer be paid - otherwise a
 * form left open in another tab could still take the money for a basket the
 * buyer had walked away from. If it turns out to have been paid in the
 * meantime, it is unlocked instead: money taken is never ignored.
 */
export async function cancelCheckoutSession(
    sessionId: string,
    organizationId: string
): Promise<'cancelled' | FulfilOutcome> {
    const stripe = getStripe();
    if (!stripe) return 'unknown';

    const purchase = await prisma.coursePurchase.findUnique({
        where: { stripeSessionId: sessionId },
        select: { organizationId: true },
    });
    if (!purchase || purchase.organizationId !== organizationId) return 'unknown';

    const session = await stripe.checkout.sessions.retrieve(sessionId);
    if (session.status === 'complete') return fulfilCheckoutSession(session);
    if (session.status === 'open') {
        const expired = await stripe.checkout.sessions.expire(sessionId);
        await expireCheckoutSession(expired);
    }
    return 'cancelled';
}

/** A checkout nobody finished. Kept as a record, marked so. */
export async function expireCheckoutSession(session: Stripe.Checkout.Session): Promise<void> {
    if (session.metadata?.kind !== KIND) return;
    await prisma.coursePurchase.updateMany({
        where: { stripeSessionId: session.id, status: 'pending' },
        data: { status: 'expired' },
    });
}

/**
 * Take back what a fully refunded payment bought.
 *
 * A partial refund is a goodwill gesture and leaves the courses where they
 * are. Only money returned in full returns the courses.
 */
export async function revokeRefundedCharge(charge: Stripe.Charge): Promise<void> {
    if (!charge.refunded) return;
    const paymentIntentId =
        typeof charge.payment_intent === 'string' ? charge.payment_intent : charge.payment_intent?.id;
    if (!paymentIntentId) return;

    const purchase = await prisma.coursePurchase.findUnique({
        where: { stripePaymentIntentId: paymentIntentId },
        select: { id: true, status: true },
    });
    if (!purchase || purchase.status !== 'paid') return;

    await prisma.$transaction([
        prisma.coursePurchase.update({
            where: { id: purchase.id },
            data: { status: 'refunded', refundedAt: new Date() },
        }),
        prisma.courseGrant.deleteMany({ where: { purchaseId: purchase.id } }),
    ]);
}

/**
 * The master account giving a business courses, without payment.
 *
 * Any EcoFusion course, priced or not. Returns how many were new; one the
 * business already holds is left exactly as it was.
 */
export async function giveCourses(
    organizationId: string,
    courseIds: string[],
    givenById: string
): Promise<number> {
    const ids = [...new Set(courseIds)];
    const courses = await prisma.trainingCourse.findMany({
        where: { id: { in: ids }, organizationId: null },
        select: { id: true },
    });
    if (courses.length !== ids.length) {
        throw new CourseShopError('One or more of those courses is not an EcoFusion course');
    }
    const created = await prisma.courseGrant.createMany({
        data: courses.map((course) => ({
            courseId: course.id,
            organizationId,
            source: 'gift',
            grantedById: givenById,
        })),
        skipDuplicates: true,
    });
    return created.count;
}
