import { NextResponse } from 'next/server';
import { z } from 'zod';

/**
 * Checking what arrived before acting on it.
 *
 * Routes read `await request.json()` and destructured whatever came back, so
 * the shape a handler assumed and the shape it got were only ever the same by
 * habit. `{"ph": "abc"}` became NaN in the database; a missing field became
 * undefined three lines later; a number where a string was expected reached
 * Prisma and came back as a 500 carrying its internals.
 *
 * A schema says the shape once, at the door, and the handler below it can stop
 * asking.
 */

export interface Invalid {
  ok: false;
  response: NextResponse;
}

export interface Valid<T> {
  ok: true;
  data: T;
}

/** What a failed check says back. One message, no internals. */
function rejection(error: z.ZodError): NextResponse {
  const first = error.issues[0];
  const where = first?.path.join('.');
  return NextResponse.json(
    {
      error: where ? `${where}: ${first.message}` : (first?.message ?? 'Invalid request'),
      // Every problem, for a form that wants to mark more than one field.
      issues: error.issues.map((i) => ({ path: i.path.join('.'), message: i.message })),
    },
    { status: 400 }
  );
}

/**
 * Read and check a JSON body.
 *
 * Returns either the parsed value or the response to send. Malformed JSON is
 * caught here too - it used to throw into the route's catch and come back as a
 * 500, which told the caller the server had broken when they had sent nonsense.
 */
export async function readJson<T extends z.ZodType>(
  request: Request,
  schema: T
): Promise<Valid<z.infer<T>> | Invalid> {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return {
      ok: false,
      response: NextResponse.json({ error: 'Expected a JSON body' }, { status: 400 }),
    };
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) return { ok: false, response: rejection(parsed.error) };
  return { ok: true, data: parsed.data };
}

/** The same, for query strings. */
export function readQuery<T extends z.ZodType>(
  request: Request,
  schema: T
): Valid<z.infer<T>> | Invalid {
  const params = Object.fromEntries(new URL(request.url).searchParams);
  const parsed = schema.safeParse(params);
  if (!parsed.success) return { ok: false, response: rejection(parsed.error) };
  return { ok: true, data: parsed.data };
}

// --- pieces the routes keep needing -----------------------------------------

/**
 * A sensor value.
 *
 * Read from a number or a numeric string, because a form posts "6.8" and a
 * device posts 6.8 and both mean the same reading. Finite, because
 * parseFloat("abc") is NaN and NaN reached the database happily. Nullable,
 * because a probe that reads pH and not ammonia should send what it has rather
 * than inventing the rest.
 */
export const sensorValue = z.preprocess((value) => {
  // Absent stays absent.
  if (value === null || value === undefined) return value;
  if (typeof value === 'number') return value;
  // A form posts strings; an empty one means the field was left blank.
  if (typeof value === 'string') return value.trim() === '' ? null : Number(value);
  // Everything else is refused rather than coerced. z.coerce would have turned
  // [7] into 7 and true into 1, so a checkbox could have been stored as a pH
  // of 1 - which is the kind of thing this file exists to stop.
  return NaN;
}, z.number().finite('must be a number').nullish());

/** A count the caller asked for, kept inside something a page can render. */
export const listLimit = z.coerce
  .number()
  .int()
  .min(1)
  .max(200)
  .catch(50);

/** A cuid-shaped id, loose enough for the fixed ids provisioning writes. */
export const id = z.string().min(1).max(200);

/** Free text with a ceiling, trimmed, where empty means absent. */
export function text(max: number) {
  return z.string().trim().max(max);
}
