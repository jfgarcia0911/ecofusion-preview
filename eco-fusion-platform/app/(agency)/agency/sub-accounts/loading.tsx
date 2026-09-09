import { AgencyListSkeleton } from "@/components/skeletons/PageSkeletons";

/** Shaped like the page that is coming, so nothing rearranges when it lands. */
export default function Loading() {
    return (
        <AgencyListSkeleton
            title="Sub Accounts"
            standfirst="Every business on the platform."
            rows={5}
        />
    );
}
