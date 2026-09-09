"use client";

import { useLinkStatus } from "next/link";
import { Loader2 } from "lucide-react";

/**
 * Placeholders for content that has been asked for and has not arrived.
 *
 * The database sits in one hemisphere and the functions querying it in
 * another, so a page opening is not instant and pretending otherwise is what
 * made the app feel hung. Nothing here makes it faster; all of it makes the
 * wait legible, which is the difference between slow and broken.
 *
 * One pulse rate and one set of greys throughout: skeletons that shimmer at
 * different speeds in different corners read as several things going wrong
 * rather than one thing loading.
 */

/** A bar standing in for a line of text. */
export function SkeletonLine({
    width = "w-full",
    height = "h-4",
    className = "",
}: {
    width?: string;
    height?: string;
    className?: string;
}) {
    return <div className={`${height} ${width} rounded bg-white/10 ${className}`} />;
}

/** The title and standfirst nearly every page opens with. */
export function SkeletonHeading() {
    return (
        <div className="space-y-2.5 mb-6">
            <SkeletonLine width="w-52" height="h-7" />
            <SkeletonLine width="w-96 max-w-full" height="h-4" className="bg-white/5" />
        </div>
    );
}

/** Rows in a list: an icon, two lines of text, a control or two. */
export function SkeletonRows({ rows = 5 }: { rows?: number }) {
    return (
        <div className="space-y-2">
            {Array.from({ length: rows }).map((_, row) => (
                <div
                    key={row}
                    className="flex items-center gap-4 px-4 py-3.5 rounded-xl border border-white/10 bg-white/[0.02]"
                >
                    <div className="w-9 h-9 rounded-lg bg-white/10 shrink-0" />
                    <div className="flex-1 min-w-0 space-y-2">
                        <SkeletonLine width="w-48 max-w-full" height="h-3.5" />
                        <SkeletonLine width="w-64 max-w-full" height="h-3" className="bg-white/5" />
                    </div>
                    <div className="h-7 w-20 rounded-lg bg-white/5 shrink-0" />
                </div>
            ))}
        </div>
    );
}

/** Panels in a grid: dashboards, and anything else built from cards. */
export function SkeletonCards({ cards = 6 }: { cards?: number }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: cards }).map((_, card) => (
                <div
                    key={card}
                    className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 space-y-4"
                >
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-white/10 shrink-0" />
                        <SkeletonLine width="w-28" height="h-4" />
                    </div>
                    <SkeletonLine width="w-24" height="h-8" />
                    <SkeletonLine width="w-full" height="h-3" className="bg-white/5" />
                </div>
            ))}
        </div>
    );
}

/**
 * Wraps a whole page's worth of placeholder, and announces itself.
 *
 * `aria-busy` is what a screen reader has instead of a shimmer, and the label
 * is what it reads out: without them this is a silent block of empty divs.
 */
export function SkeletonPage({ children }: { children: React.ReactNode }) {
    return (
        <div className="animate-pulse" aria-busy="true" aria-label="Loading">
            {children}
        </div>
    );
}

/**
 * A spinner on the link that was clicked, for as long as the navigation takes.
 *
 * Must be rendered inside the Link it belongs to: useLinkStatus reads the
 * navigation from the link above it, and returns nothing anywhere else.
 *
 * This is the half that a loading skeleton cannot do. A skeleton appears once
 * the new route starts rendering; between the click and that moment the
 * browser is still showing the old page, and only the link itself can say that
 * anything was heard.
 */
export function LinkSpinner({ className = "" }: { className?: string }) {
    const { pending } = useLinkStatus();
    if (!pending) return null;
    return (
        <Loader2
            size={15}
            aria-hidden
            className={`shrink-0 text-accent motion-safe:animate-spin ${className}`}
        />
    );
}
