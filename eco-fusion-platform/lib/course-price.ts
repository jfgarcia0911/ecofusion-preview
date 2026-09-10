/**
 * Course prices as people read them.
 *
 * Imports nothing, so the shop, the price editor and the server can all share
 * one idea of what "$12.00" means. Prices are held in the smallest unit of the
 * currency - cents for dollars - because that is what Stripe charges in and
 * because whole numbers do not drift the way 12.1 + 0.2 does.
 */

/** A course that has not been priced yet is not for sale. */
export type CoursePrice = number | null;

export function formatPrice(cents: number, currency: string): string {
    if (cents === 0) return 'Free';
    try {
        return new Intl.NumberFormat(undefined, {
            style: 'currency',
            currency: currency.toUpperCase(),
        }).format(cents / 100);
    } catch {
        // An unrecognised currency code still reads as a number and a code.
        return `${(cents / 100).toFixed(2)} ${currency.toUpperCase()}`;
    }
}

/**
 * What somebody typed into a price box, as cents.
 *
 * Blank means "not for sale" and comes back as null. Anything else must be a
 * non-negative amount with at most two decimal places; a nonsense entry comes
 * back as undefined so the caller can say so rather than guess.
 */
export function parsePriceInput(text: string): CoursePrice | undefined {
    const trimmed = text.trim().replace(/^[$€£]/, '').replace(/,/g, '');
    if (trimmed === '') return null;
    if (!/^\d+(\.\d{1,2})?$/.test(trimmed)) return undefined;
    return Math.round(Number(trimmed) * 100);
}

/** Cents shown back in a price box: 1250 as "12.50", null as blank. */
export function priceInputValue(cents: CoursePrice): string {
    return cents === null ? '' : (cents / 100).toFixed(2);
}

/** The most a single course may cost, as a guard against a misplaced digit. */
export const MAX_PRICE_CENTS = 1_000_000;

/**
 * The least a paid course may cost. Stripe refuses to take a card payment
 * below about fifty cents, so a price under this could be set and never paid.
 */
export const MIN_PRICE_CENTS = 50;

/** Why a price cannot be used, or null when it can. */
export function priceProblem(cents: number): string | null {
    if (!Number.isInteger(cents) || cents < 0) return 'A price cannot be negative';
    if (cents > 0 && cents < MIN_PRICE_CENTS) return 'A paid course must cost at least 0.50';
    if (cents > MAX_PRICE_CENTS) return 'That price is higher than any course should cost';
    return null;
}
