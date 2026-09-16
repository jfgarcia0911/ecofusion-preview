import type { Instrumentation } from 'next';

/**
 * Next calls this for every error thrown while handling a request - pages,
 * route handlers, server actions - with where it happened. They are reported
 * through lib/monitoring, which logs them as one JSON line each and forwards
 * them to ALERT_WEBHOOK_URL when that is set.
 */
export const onRequestError: Instrumentation.onRequestError = async (error, request, context) => {
    if (process.env.NEXT_RUNTIME !== 'nodejs') return;
    const { report } = await import('./lib/monitoring');
    await report({
        event: 'request.error',
        message: error instanceof Error ? error.message : String(error),
        detail: {
            error,
            digest: (error as { digest?: string })?.digest,
            method: request.method,
            path: request.path,
            route: context.routePath,
            routeType: context.routeType,
        },
    });
};
