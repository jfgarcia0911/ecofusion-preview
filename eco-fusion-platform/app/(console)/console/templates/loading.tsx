import { AgencyListSkeleton } from "@/components/skeletons/PageSkeletons";
import { Camera } from "lucide-react";

/** Shaped like the page that is coming, so nothing rearranges when it lands. */
export default function Loading() {
    return (
        <AgencyListSkeleton
            title="Templates"
            standfirst="EcoFusion's own templates, which every agency may apply."
            icon={Camera}
            rows={3}
            search={false}
        />
    );
}
