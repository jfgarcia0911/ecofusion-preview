'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { AlertCircle, RefreshCw } from 'lucide-react';

/**
 * What every error boundary shows.
 *
 * The digest is the server's reference for the failure; saying it lets
 * support find the matching line in the logs without the user describing it.
 */
export default function ErrorPanel({
    error,
    reset,
    where,
    homeHref = '/',
}: {
    error: Error & { digest?: string };
    reset: () => void;
    where: string;
    homeHref?: string;
}) {
    useEffect(() => {
        console.error(`${where} error:`, error);
    }, [error, where]);

    return (
        <div className="min-h-[60vh] flex items-center justify-center p-6">
            <div className="glass-card p-8 max-w-md text-center" role="alert">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-500/20 flex items-center justify-center">
                    <AlertCircle className="w-8 h-8 text-red-500" />
                </div>
                <h2 className="text-xl font-bold mb-2">Something went wrong</h2>
                <p className="text-white/50 mb-6 text-sm">
                    This page could not be loaded. Try again, and if it keeps happening, tell support
                    {error.digest ? (
                        <>
                            {' '}the reference <span className="font-mono text-white/70">{error.digest}</span>
                        </>
                    ) : null}
                    .
                </p>
                <div className="flex items-center justify-center gap-3">
                    <button
                        onClick={() => reset()}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-primary font-semibold rounded-lg hover:bg-accent/90 transition-colors"
                    >
                        <RefreshCw className="w-4 h-4" />
                        Try again
                    </button>
                    <Link href={homeHref} className="px-4 py-3 text-white/60 hover:text-white rounded-lg">
                        Go home
                    </Link>
                </div>
            </div>
        </div>
    );
}
