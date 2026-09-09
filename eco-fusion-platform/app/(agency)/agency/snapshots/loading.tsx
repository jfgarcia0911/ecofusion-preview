import { AgencyListSkeleton } from "@/components/skeletons/PageSkeletons";

/** Shaped like the page that is coming, so nothing rearranges when it lands. */
export default function Loading() {
    return (
        <AgencyListSkeleton
            title="Snapshots"
            standfirst="Business setups captured as templates."
            rows={3}
        />
    );
}
