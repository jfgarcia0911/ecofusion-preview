/**
 * What the agency view shows while it is fetching.
 *
 * Without a file at this path Next renders nothing during the navigation: the
 * browser stays on the previous page, unchanged, until the server answers.
 * Clicking Agency and watching the business dashboard sit there is
 * indistinguishable from clicking a dead link, which is exactly what it felt
 * like.
 *
 * The shape matches the sub account list this view opens on, so the real
 * content replaces it without the page jumping.
 */
export default function AgencyLoading() {
    return (
        <div className="animate-pulse" aria-busy="true" aria-label="Loading the agency view">
            <div className="mb-6 space-y-2">
                <div className="h-7 w-40 rounded-lg bg-white/10" />
                <div className="h-4 w-96 max-w-full rounded bg-white/5" />
            </div>

            <div className="h-11 w-full rounded-xl bg-white/5 mb-4" />

            <div className="space-y-2">
                {[0, 1, 2, 3, 4].map((row) => (
                    <div
                        key={row}
                        className="flex items-center gap-4 px-4 py-3.5 rounded-xl border border-white/10 bg-white/[0.02]"
                    >
                        <div className="w-9 h-9 rounded-lg bg-white/10 shrink-0" />
                        <div className="flex-1 min-w-0 space-y-2">
                            <div className="h-3.5 w-48 max-w-full rounded bg-white/10" />
                            <div className="h-3 w-64 max-w-full rounded bg-white/5" />
                        </div>
                        <div className="h-7 w-20 rounded-lg bg-white/5 shrink-0" />
                        <div className="h-7 w-16 rounded-lg bg-white/5 shrink-0" />
                    </div>
                ))}
            </div>
        </div>
    );
}
