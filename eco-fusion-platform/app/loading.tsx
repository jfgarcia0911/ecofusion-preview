import { SkeletonPage, SkeletonHeading, SkeletonRows } from "@/components/ui/Skeleton";

/**
 * What shows while a whole section is being swapped.
 *
 * The loading files inside each group sit under that group's layout, so they
 * cannot appear until the layout above them has finished: crossing from a
 * business screen to the agency view meant waiting on the agency layout, its
 * staff check and its lookups, with nothing on screen saying so.
 *
 * This boundary sits above every layout, so it paints the moment a navigation
 * starts. It carries no sidebar because at that instant it is not yet known
 * which sidebar is coming - the shell that arrives replaces this one.
 */
export default function RootLoading() {
    return (
        <div className="flex h-screen w-full overflow-hidden bg-background text-foreground">
            {/* Where a sidebar is about to be, so the page does not lurch sideways. */}
            <div className="w-64 border-r border-white/10 shrink-0 hidden md:block">
                <div className="p-6 space-y-3 animate-pulse">
                    <div className="h-6 w-32 rounded bg-white/10" />
                    <div className="h-3 w-40 rounded bg-white/5" />
                </div>
                <div className="px-4 mt-8 space-y-2 animate-pulse">
                    {Array.from({ length: 7 }).map((_, row) => (
                        <div key={row} className="h-11 rounded-xl bg-white/[0.04]" />
                    ))}
                </div>
            </div>

            <div className="flex-1 min-w-0 p-6">
                <SkeletonPage>
                    <SkeletonHeading />
                    <SkeletonRows rows={5} />
                </SkeletonPage>
            </div>
        </div>
    );
}
