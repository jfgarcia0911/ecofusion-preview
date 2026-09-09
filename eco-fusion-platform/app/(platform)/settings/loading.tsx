import { SkeletonPage, SkeletonHeading, SkeletonRows } from "@/components/ui/Skeleton";

/**
 * Settings pages are narrow, so the placeholder is too. A full width skeleton
 * followed by a half width page is a jump, which is the thing these exist to
 * avoid.
 */
export default function SettingsLoading() {
    return (
        <div className="max-w-3xl">
            <SkeletonPage>
                <SkeletonHeading />
                <SkeletonRows rows={4} />
            </SkeletonPage>
        </div>
    );
}
