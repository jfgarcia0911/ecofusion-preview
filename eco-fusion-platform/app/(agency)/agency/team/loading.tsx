import { AgencyListSkeleton } from "@/components/skeletons/PageSkeletons";
import { KeyRound } from "lucide-react";

/** Shaped like the page that is coming, so nothing rearranges when it lands. */
export default function Loading() {
    return (
        <AgencyListSkeleton
            title="Team Access"
            standfirst="The people who work at EcoFusion."
            icon={KeyRound}
            rows={4}
            search={false}
        />
    );
}
