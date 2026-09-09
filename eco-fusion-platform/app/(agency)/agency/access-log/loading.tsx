import { AgencyListSkeleton } from "@/components/skeletons/PageSkeletons";
import { ScrollText } from "lucide-react";

/** Shaped like the page that is coming, so nothing rearranges when it lands. */
export default function Loading() {
    return (
        <AgencyListSkeleton
            title="Access Log"
            standfirst="When EcoFusion staff opened a business, and what they changed."
            icon={ScrollText}
            rows={8}
            search={false}
        />
    );
}
