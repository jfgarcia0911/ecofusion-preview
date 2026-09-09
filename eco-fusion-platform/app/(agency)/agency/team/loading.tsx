import { AgencyListSkeleton } from "@/components/skeletons/PageSkeletons";

/** Shaped like the page that is coming, so nothing rearranges when it lands. */
export default function Loading() {
    return (
        <AgencyListSkeleton
            title="Team Access"
            standfirst="The people who work at EcoFusion."
            rows={4}
        />
    );
}
