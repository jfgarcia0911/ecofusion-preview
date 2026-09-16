import { z } from 'zod';
import { NextResponse } from 'next/server';

/**
 * Field shapes the business routes share.
 *
 * Every route that writes a record builds its Prisma `data` from one of these
 * schemas and nothing else. A request body handed to Prisma as-is can carry
 * nested relation writes - `{"user": {"update": {"role": ...}}}` on a sale
 * rewrote the account that entered it - so an object schema is the door, and
 * keys it does not name are dropped on the way through.
 *
 * Forms post "" for a field left blank and strings for numbers, so both are
 * read the way a person meant them rather than refused.
 */

const blankToNull = (value: unknown) =>
    typeof value === 'string' && value.trim() === '' ? null : value;

// Numbers from a number or a numeric string. Anything else becomes NaN and is
// refused, rather than coerced: `true` is not 1 and `[7]` is not 7.
const numeric = (value: unknown) => {
    if (value === null || value === undefined) return value;
    if (typeof value === 'number') return value;
    if (typeof value === 'string') return value.trim() === '' ? null : Number(value);
    return NaN;
};

/** Required free text, trimmed, with a ceiling. */
export const requiredText = (max: number) => z.string().trim().min(1, 'is required').max(max);

/** Optional free text; blank means absent. */
export const optionalText = (max: number) =>
    z.preprocess(blankToNull, z.string().trim().max(max).nullish());

/** A required number inside a range. */
export const requiredNumber = (min: number, max: number) =>
    z.preprocess(numeric, z.number('must be a number').finite('must be a number').min(min).max(max));

/** An optional number inside a range; blank means absent. */
export const optionalNumber = (min: number, max: number) =>
    z.preprocess(numeric, z.number('must be a number').finite('must be a number').min(min).max(max).nullish());

/** A required whole number inside a range. */
export const requiredInt = (min: number, max: number) =>
    z.preprocess(numeric, z.number('must be a whole number').int('must be a whole number').min(min).max(max));

/** An optional whole number inside a range; blank means absent. */
export const optionalInt = (min: number, max: number) =>
    z.preprocess(
        numeric,
        z.number('must be a whole number').int('must be a whole number').min(min).max(max).nullish()
    );

const EARLIEST = new Date('1970-01-01T00:00:00Z');
const LATEST = new Date('2100-01-01T00:00:00Z');

/** A date from an ISO string; an unreadable one is refused rather than stored as Invalid Date. */
export const requiredDate = z.coerce
    .date('must be a date')
    .min(EARLIEST, 'must be a real date')
    .max(LATEST, 'must be a real date');

/** An optional date; blank means absent. */
export const optionalDate = z.preprocess(blankToNull, requiredDate.nullish());

/** An id of another record, which the route must still check belongs to this business. */
export const recordId = z.string().trim().min(1).max(200);

/** An optional linked id; blank means none. */
export const optionalRecordId = z.preprocess(blankToNull, recordId.nullish());

/** Money in the currency's main unit, kept to cents. */
export const money = (max = 10_000_000) =>
    requiredNumber(0, max).transform((value) => Math.round(value * 100) / 100);

/** The query-string id the DELETE handlers take. */
export function idFromQuery(request: Request): string | null {
    const id = new URL(request.url).searchParams.get('id')?.trim();
    return id && id.length <= 200 ? id : null;
}

/** Refused for the business's own people below manager. */
export function adminOnly(action: string): NextResponse {
    return NextResponse.json(
        { error: `Only an owner, supervisor or manager can ${action}` },
        { status: 403 }
    );
}

// --- AI chat ------------------------------------------------------------------

/** Longest message a person may send to the assistant. */
export const CHAT_MESSAGE_MAX = 4000;

/** How many earlier turns are passed back to the model. */
export const CHAT_HISTORY_TURNS = 20;

/** What a person types to the assistant. */
export const chatMessage = z.string().trim().min(1, 'is required').max(CHAT_MESSAGE_MAX);

/**
 * The conversation so far, as the chat pages send it.
 *
 * The pages send every message they hold, with their own replies labelled
 * 'assistant', and a long conversation is ordinary rather than an error. So the
 * shape is checked, the model's turns are named as the model names them, and
 * only the most recent turns - each cut to the message ceiling - are kept.
 * The array and each turn still have a hard ceiling, so the body cannot be used
 * to make the server hold something enormous.
 */
export const chatHistory = z
    .array(
        z.object({
            role: z.enum(['user', 'model', 'assistant']),
            content: z.string().max(50_000),
        })
    )
    .max(500)
    .optional()
    .transform((turns) => {
        const recent = (turns ?? [])
            .slice(-CHAT_HISTORY_TURNS)
            .map((turn) => ({
                role: turn.role === 'user' ? ('user' as const) : ('model' as const),
                content: turn.content.slice(0, CHAT_MESSAGE_MAX),
            }))
            .filter((turn) => turn.content.trim() !== '');
        // The history is placed after the model's own opening turn, so it
        // starts with the person rather than with a second model turn.
        while (recent.length > 0 && recent[0].role !== 'user') recent.shift();
        return recent;
    });

/** The friendly refusal when somebody has used up the assistant for the hour. */
export function aiRateLimited(): NextResponse {
    return NextResponse.json(
        {
            error: 'You have sent a lot of messages to the assistant in the last hour. Please wait a little and try again.',
        },
        { status: 429 }
    );
}
