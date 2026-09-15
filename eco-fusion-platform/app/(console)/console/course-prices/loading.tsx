import { AgencyCoursePricesSkeleton } from "@/components/skeletons/PageSkeletons";
import { COURSE_PRICES_STANDFIRST } from "./standfirst";

/** Shaped like the page that is coming, so nothing rearranges when it lands. */
export default function Loading() {
    return <AgencyCoursePricesSkeleton standfirst={COURSE_PRICES_STANDFIRST} />;
}
