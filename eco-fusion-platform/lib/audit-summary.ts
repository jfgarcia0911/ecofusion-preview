/**
 * What a change actually said, in a form fit for an audit trail.
 *
 * The trail used to record a method and a path, which says that something
 * changed and where, but not what. "PATCH /api/users" is a record that somebody
 * changed a role; `role: "manager"` is a record of which one.
 *
 * Runs in middleware, so it imports nothing and touches no database. It only
 * ever describes a body, and never passes a secret through: anything whose name
 * suggests a password, key or token is written as [hidden], whatever it holds.
 */

/** Carried from middleware to the route in this header, URI-encoded. */
export const SUMMARY_HEADER = 'x-request-summary';

/** Longest description kept. A trail is for reading, not for replaying. */
const MAX_LENGTH = 1500;

/** Bodies larger than this are described by size alone rather than parsed. */
export const MAX_BODY_BYTES = 32 * 1024;

const SECRET = /pass|secret|token|api.?key|private.?key|credential|authori[sz]ation|signature|cvc|card.?number/i;

function describe(value: unknown, depth: number): string {
    if (value === null || value === undefined) return String(value);
    if (typeof value === 'string') {
        return JSON.stringify(value.length > 80 ? `${value.slice(0, 77)}...` : value);
    }
    if (typeof value === 'number' || typeof value === 'boolean') return String(value);

    if (Array.isArray(value)) {
        // A long list of ids reads as noise; its length is what a reader wants.
        if (value.length > 5 || depth >= 2) return `[${value.length} items]`;
        return `[${value.map((item) => describe(item, depth + 1)).join(', ')}]`;
    }

    if (typeof value === 'object') {
        if (depth >= 2) return '{...}';
        const parts = Object.entries(value as Record<string, unknown>).map(([key, inner]) =>
            SECRET.test(key) ? `${key}: [hidden]` : `${key}: ${describe(inner, depth + 1)}`
        );
        return depth === 0 ? parts.join(', ') : `{${parts.join(', ')}}`;
    }

    return typeof value;
}

/**
 * A short, secret-free description of a request body, or null when there is
 * nothing worth saying.
 */
export function summariseBody(text: string): string | null {
    const trimmed = text.trim();
    if (!trimmed) return null;

    let parsed: unknown;
    try {
        parsed = JSON.parse(trimmed);
    } catch {
        // Not JSON, so there is no telling which part of it is a secret.
        return `${trimmed.length} characters of non-JSON data`;
    }

    const summary = describe(parsed, 0);
    if (!summary) return null;
    return summary.length > MAX_LENGTH ? `${summary.slice(0, MAX_LENGTH - 3)}...` : summary;
}

/** The description middleware attached to this request, decoded, or null. */
export function readSummaryHeader(value: string | null): string | null {
    if (!value) return null;
    try {
        return decodeURIComponent(value);
    } catch {
        return null;
    }
}
