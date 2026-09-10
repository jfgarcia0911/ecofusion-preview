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

/**
 * Start buying `courseIds` for a business.
 *
 * Free courses in the basket are unlocked at once; there is nothing to pay.
 * The rest become one Stripe checkout, and the answer carries its address.
 * A basket of only free courses comes back with no address at all.
 */
export async function startCoursePurchase(options: {
    organizationId: string;
    userId: string;
    courseIds: string[];
}): Promise<{ url: string | null; added: number }> {
    const { organizationId, userId } = options;
    const requested = [...new Set(options.courseIds)];
    if (requested.length === 0) throw new CourseShopError('Choose at least one course');
    if (requested.length > MAX_LINES) {
        throw new CourseShopError(`Choose at most ${MAX_LINES} courses at a time`);
    }

    const courses = await prisma.trainingCourse.findMany({
        where: { id: { in: requested }, organizationId: null, isActive: true },
        select: { id: true, code: true, title: true, priceCents: true },
    });
    if (courses.length !== requested.length) {
        throw new CourseShopError('One or more of those courses is not for sale');
    }
    if (courses.some((course) => course.priceCents === null)) {
        throw new CourseShopError('One or more of those courses is not on sale yet');
    }

    const held = await prisma.courseGrant.count({
        where: { organizationId, courseId: { in: requested } },
    });
    if (held > 0) {
        throw new CourseShopError('Your business already has one or more of those courses');
    }

    const free = courses.filter((course) => course.priceCents === 0);
    const paid = courses.filter((course) => (course.priceCents ?? 0) > 0);

    // Asked before anything is unlocked, so a basket that cannot be paid for
    // is refused whole rather than half given away.
    const stripe = paid.length ? getStripe() : null;
    if (paid.length && !stripe) {
        throw new CourseShopError(
            'Payments are not set up yet, so paid courses cannot be bought. Try again later.',
            503
        );
    }

    if (free.length) {
        await prisma.courseGrant.createMany({
            data: free.map((course) => ({
                courseId: course.id,
                organizationId,
                source: 'free',
                grantedById: userId,
            })),
            skipDuplicates: true,
        });
    }
    if (!paid.length || !stripe) return { url: null, added: free.length };

    const currency = courseCurrency();
    const purchase = await prisma.coursePurchase.create({
        data: {
            organizationId,
            purchasedById: userId,
            amountCents: paid.reduce((sum, course) => sum + (course.priceCents ?? 0), 0),
            currency,
            items: {
                create: paid.map((course) => ({
                    courseId: course.id,
                    courseCode: course.code,
                    courseTitle: course.title,
                    priceCents: course.priceCents ?? 0,
                })),
            },
        },
        select: { id: true },
    });

    try {
        const metadata = { kind: KIND, purchaseId: purchase.id, organizationId };
        const session = await stripe.checkout.sessions.create({
            mode: 'payment',
            customer: await stripeCustomerFor(stripe, organizationId),
            line_items: paid.map((course) => ({
                quantity: 1,
                price_data: {
                    currency,
                    unit_amount: course.priceCents ?? 0,
                    product_data: { name: `${course.code} ${course.title}`.slice(0, 250) },
                },
            })),
            // Stripe puts the session's own id where the placeholder is, which
            // is how the page knows which payment to ask about on return.
            success_url: `${appUrl()}/business/classes?purchase={CHECKOUT_SESSION_ID}`,
            cancel_url: `${appUrl()}/business/classes?purchase=cancelled`,
            metadata,
            // On the payment as well, because a refund arrives about the
            // payment and not about the checkout it came from.
            payment_intent_data: { metadata },
        });

        await prisma.coursePurchase.update({
            where: { id: purchase.id },
            data: { stripeSessionId: session.id },
        });
        return { url: session.url, added: free.length };
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
