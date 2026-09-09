import type { ReactNode } from "react";

/**
 * The waiting state of a particular page, shaped like that page.
 *
 * Each of these is used twice: once by the route's loading file, while the
 * server works, and again by the page itself, while it fetches after mounting.
 * That is deliberate. Two different placeholders in a row is what made opening
 * the Executive Summary look like it loaded twice - a generic panel skeleton
 * swapping for the page's own, then swapping again for the content. One
 * component in both places makes those three moments look like one.
 *
 * The headings are the real headings, not grey bars. They are static text and
 * can be shown immediately, so the title never changes after it appears and
 * only the parts that are genuinely unknown wait.
 */

/** The heading block every dashboard opens with. */
function PageHeading({ title, standfirst, action }: { title: string; standfirst: string; action?: ReactNode }) {
    return (
        <div className="flex justify-between items-center">
            <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                    {title}
                </h1>
                <p className="text-white/50 mt-1">{standfirst}</p>
            </div>
            {action}
        </div>
    );
}

/**
 * Executive Summary: four figures across the top, then a wide chart beside a
 * narrow column of alerts.
 */
export function ExecutiveSkeleton() {
    return (
        <div className="space-y-6" aria-busy="true" aria-label="Loading the executive summary">
            <PageHeading
                title="Executive Summary"
                standfirst="Real-time overview of business performance"
                action={<div className="h-9 w-32 rounded-lg bg-white/5" />}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[0, 1, 2, 3].map((card) => (
                    <div key={card} className="glass-card p-6 animate-pulse">
                        <div className="h-4 bg-white/10 rounded w-1/2 mb-4" />
                        <div className="h-8 bg-white/10 rounded w-3/4" />
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 glass-card p-6 animate-pulse">
                    <div className="h-5 bg-white/10 rounded w-40 mb-6" />
                    {/* A chart is mostly its plotting area, so the block is tall. */}
                    <div className="h-64 bg-white/5 rounded" />
                </div>
                <div className="glass-card p-6 animate-pulse space-y-4">
                    <div className="h-5 bg-white/10 rounded w-32" />
                    {[0, 1, 2, 3, 4].map((row) => (
                        <div key={row} className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-white/10 shrink-0" />
                            <div className="flex-1 space-y-1.5">
                                <div className="h-3 bg-white/10 rounded w-3/4" />
                                <div className="h-2.5 bg-white/5 rounded w-1/2" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

/**
 * Operations Center: one broad panel per zone, each a row of readings.
 */
export function OperationsSkeleton({ zones = 2 }: { zones?: number }) {
    return (
        <div className="space-y-8 pb-10" aria-busy="true" aria-label="Loading the operations centre">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                        Operations Center
                    </h1>
                    <p className="text-white/50 mt-1">Real-time facility monitoring and control</p>
                </div>
            </div>

            <div className="space-y-6">
                {Array.from({ length: zones }).map((_, zone) => (
                    <div key={zone} className="glass-card p-6 animate-pulse">
                        <div className="h-6 bg-white/10 rounded w-1/3 mb-4" />
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                            {Array.from({ length: 6 }).map((_, reading) => (
                                <div key={reading} className="h-20 bg-white/5 rounded" />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
