import { AgencyListSkeleton } from "@/components/skeletons/PageSkeletons";
import { Building2 } from "lucide-react";

/** Shaped like the page that is coming, so nothing rearranges when it lands. */
export default function Loading() {
    return (
        <AgencyListSkeleton
            title="Sub Accounts"
            standfirst="Every business on the platform."
            icon={Building2}
            rows={5}
            search={true}
        />
    );
}
