import { AgencyListSkeleton } from "@/components/skeletons/PageSkeletons";
import { Camera } from "lucide-react";

/** Shaped like the page that is coming, so nothing rearranges when it lands. */
export default function Loading() {
    return (
        <AgencyListSkeleton
            title="Snapshots"
            standfirst="Business setups captured as templates."
            icon={Camera}
            rows={3}
            search={false}
        />
    );
}
