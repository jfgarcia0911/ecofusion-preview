import { SkeletonPage, SkeletonHeading, SkeletonCards } from "@/components/ui/Skeleton";

/** Dashboards are panels rather than rows, so they wait as panels. */
export default function DashboardLoading() {
    return (
        <SkeletonPage>
            <SkeletonHeading />
            <SkeletonCards cards={6} />
        </SkeletonPage>
    );
}
