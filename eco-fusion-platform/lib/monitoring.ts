/**
 * Reporting failures somewhere a person will see them.
 *
 * Every report is written to the log as one JSON line, so the host's log
 * search can find it by `event`. When ALERT_WEBHOOK_URL is set (a Slack or
 * Discord incoming webhook, or anything that accepts a JSON POST), it is also
 * posted there - which is the difference between "paid subscriptions will not
 * be applied" sitting in a log and somebody hearing about it.
 *
 * Never throws: a failure to report must not become a second failure.
 */

export interface Report {
    /** A short, stable name to search and alert on, e.g. "stripe.webhook.unconfigured". */
    event: string;
    message: string;
    severity?: 'error' | 'warning';
    detail?: Record<string, unknown>;
}

const recent = new Map<string, number>();
/** The same event is posted at most once in this window per instance, so a storm is one message. */
const QUIET_MS = 10 * 60 * 1000;

function describe(value: unknown): unknown {
    if (value instanceof Error) return { name: value.name, message: value.message, stack: value.stack?.split('\n').slice(0, 6).join('\n') };
    return value;
}

export async function report({ event, message, severity = 'error', detail }: Report): Promise<void> {
    const line = {
        level: severity,
        event,
        message,
        at: new Date().toISOString(),
        env: process.env.VERCEL_ENV ?? process.env.NODE_ENV,
        ...(detail ? { detail: Object.fromEntries(Object.entries(detail).map(([k, v]) => [k, describe(v)])) } : {}),
    };
    try {
        (severity === 'error' ? console.error : console.warn)(JSON.stringify(line));
    } catch {
        console.error(event, message);
    }

    const url = process.env.ALERT_WEBHOOK_URL;
    if (!url) return;
    const last = recent.get(event) ?? 0;
    if (Date.now() - last < QUIET_MS) return;
    recent.set(event, Date.now());
    try {
        await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            // `text` is what Slack and Discord-compatible hooks read; the rest
            // is there for anything that wants the structure.
            body: JSON.stringify({ text: `[EcoFusion ${line.env ?? ''}] ${severity.toUpperCase()} ${event}: ${message}`, ...line }),
            signal: AbortSignal.timeout(3000),
        });
    } catch {
        // Reported to the log above; the alert channel being down is not news.
    }
}
