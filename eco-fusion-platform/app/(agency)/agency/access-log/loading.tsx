import { AgencyAccessLogSkeleton } from "@/components/skeletons/PageSkeletons";
import { ACCESS_LOG_STANDFIRST } from "./standfirst";

/** Shaped like the page that is coming, so nothing rearranges when it lands. */
export default function Loading() {
    return <AgencyAccessLogSkeleton standfirst={ACCESS_LOG_STANDFIRST} />;
}
