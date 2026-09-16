'use client';

import { useEffect } from 'react';

/**
 * The last resort: an error in the root layout itself, where nothing else -
 * not the stylesheet, not the fonts - can be relied on. So it carries its own
 * html and body and plain inline styles.
 */
export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
    useEffect(() => {
        console.error('Application error:', error);
    }, [error]);

    return (
        <html lang="en">
            <body style={{ margin: 0, minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#05140e', color: '#fff', fontFamily: 'system-ui, sans-serif' }}>
                <div style={{ maxWidth: 420, padding: 32, textAlign: 'center' }} role="alert">
                    <h1 style={{ fontSize: 22, marginBottom: 8 }}>EcoFusion could not load</h1>
                    <p style={{ opacity: 0.6, fontSize: 14, marginBottom: 24 }}>
                        Something went wrong on our side. Try again in a moment
                        {error.digest ? ` (reference ${error.digest})` : ''}.
                    </p>
                    <button
                        onClick={() => reset()}
                        style={{ padding: '10px 20px', borderRadius: 8, border: 0, background: '#4ade80', color: '#05140e', fontWeight: 600, cursor: 'pointer' }}
                    >
                        Try again
                    </button>
                </div>
            </body>
        </html>
    );
}
