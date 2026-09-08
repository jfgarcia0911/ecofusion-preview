"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export interface Remaining {
    ms: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

/** Time left until `endsAt`, split into the units a countdown shows. */
function remainingFrom(endsAt: number): Remaining {
    const ms = Math.max(0, endsAt - Date.now());
    return {
        ms,
        days: Math.floor(ms / 86_400_000),
        hours: Math.floor(ms / 3_600_000) % 24,
        minutes: Math.floor(ms / 60_000) % 60,
        seconds: Math.floor(ms / 1_000) % 60,
    };
}

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * The remaining time as digits. The day segment is dropped inside the last
 * day, where it would only ever read "0d".
 */
export function formatClock(left: Remaining): string {
    const clock = `${pad(left.hours)}h ${pad(left.minutes)}m ${pad(left.seconds)}s`;
    return left.days > 0 ? `${left.days}d ${clock}` : clock;
}

/**
 * Counts down to `endsAt`, ticking every second.
 *
 * Each tick is measured from the clock rather than added to the last one, so a
 * tab that was backgrounded catches up instead of falling behind. Reaching zero
 * refreshes the route once, handing the expiry back to the server to re-decide
 * access where it is actually enforced, rather than leaving a stale page that
 * believes the trial is still running.
 *
 * Returns null only when the business has no trial end date at all.
 */
export function useTrialCountdown(endsAt: number | null): Remaining | null {
    const [left, setLeft] = useState(() => (endsAt === null ? null : remainingFrom(endsAt)));
    const router = useRouter();
    const lapsed = useRef(false);

    useEffect(() => {
        if (endsAt === null) return;
        const id = setInterval(() => {
            const next = remainingFrom(endsAt);
            setLeft(next);
            if (next.ms <= 0 && !lapsed.current) {
                lapsed.current = true;
                router.refresh();
            }
        }, 1_000);
        return () => clearInterval(id);
    }, [endsAt, router]);

    return left;
}

/**
 * Just the digits, for dropping into a sentence.
 *
 * Hydration warnings are suppressed on the digits: server and client render a
 * second apart by definition, and the client value is the correct one.
 */
export default function TrialClock({ endsAt }: { endsAt: number | null }) {
    const left = useTrialCountdown(endsAt);

    return (
        <span className="font-mono tabular-nums" suppressHydrationWarning>
            {left === null ? "--h --m --s" : formatClock(left)}
        </span>
    );
}
