'use client';

import { useEffect, useRef } from 'react';

/**
 * Runs `callback` once on mount and then every `ms` while the tab is visible.
 *
 * Dashboards used to poll with a bare setInterval, which kept hitting the API
 * from tabs nobody was looking at. Here the timer stops when the tab is hidden
 * and restarts when it comes back, with one immediate run so the person isn't
 * looking at data from whenever they switched away.
 *
 * The latest callback is read through a ref, so passing an inline function
 * doesn't restart the timer on every render.
 */
export function useVisibleInterval(callback: () => void, ms: number) {
    const callbackRef = useRef(callback);

    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    useEffect(() => {
        let timer: ReturnType<typeof setInterval> | null = null;

        const start = () => {
            if (timer === null) {
                timer = setInterval(() => callbackRef.current(), ms);
            }
        };
        const stop = () => {
            if (timer !== null) {
                clearInterval(timer);
                timer = null;
            }
        };
        const onVisibilityChange = () => {
            if (document.hidden) {
                stop();
            } else {
                callbackRef.current();
                start();
            }
        };

        callbackRef.current();
        if (!document.hidden) start();
        document.addEventListener('visibilitychange', onVisibilityChange);
        return () => {
            stop();
            document.removeEventListener('visibilitychange', onVisibilityChange);
        };
    }, [ms]);
}
