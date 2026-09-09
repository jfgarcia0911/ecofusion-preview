import { SkeletonPage, SkeletonHeading, SkeletonCards } from "@/components/ui/Skeleton";

/** The catalogue and the course player both open as a grid of panels. */
export default function AcademyLoading() {
    return (
        <SkeletonPage>
            <SkeletonHeading />
            <SkeletonCards cards={8} />
        </SkeletonPage>
    );
}
