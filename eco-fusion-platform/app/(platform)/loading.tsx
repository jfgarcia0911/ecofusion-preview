import { SkeletonPage, SkeletonHeading, SkeletonRows } from "@/components/ui/Skeleton";

/**
 * What any business screen shows while it is opening.
 *
 * One file covers the whole group: without it, clicking anything in the
 * sidebar left the previous page on screen, unchanged, until the server
 * answered. That is what made the app feel like it had hung rather than like
 * it was working.
 *
 * Deliberately generic, because it stands in for pages as different as a
 * dashboard and a stock list. Sections whose shape is worth matching have
 * their own loading file beside them.
 */
export default function PlatformLoading() {
    return (
        <SkeletonPage>
            <SkeletonHeading />
            <SkeletonRows rows={6} />
        </SkeletonPage>
    );
}
