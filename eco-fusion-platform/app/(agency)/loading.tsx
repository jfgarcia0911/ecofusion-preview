import { SkeletonPage, SkeletonHeading, SkeletonRows } from "@/components/ui/Skeleton";

/**
 * What the agency view shows while it is fetching.
 *
 * Without a file at this path Next renders nothing during the navigation: the
 * browser stays on the previous page, unchanged, until the server answers.
 * Clicking Agency and watching the business dashboard sit there is
 * indistinguishable from clicking a dead link, which is exactly what it felt
 * like.
 *
 * Shaped like the sub account list this view opens on, so the real content
 * replaces it without the page jumping.
 */
export default function AgencyLoading() {
    return (
        <SkeletonPage>
            <SkeletonHeading />
            <SkeletonRows rows={5} />
        </SkeletonPage>
    );
}
