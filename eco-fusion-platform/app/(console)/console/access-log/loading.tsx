import { AgencyAccessLogSkeleton } from "@/components/skeletons/PageSkeletons";
import { CONSOLE_ACCESS_LOG_STANDFIRST } from "@/app/(agency)/agency/access-log/standfirst";

/** Shaped like the page that is coming, so nothing rearranges when it lands. */
export default function Loading() {
    return <AgencyAccessLogSkeleton standfirst={CONSOLE_ACCESS_LOG_STANDFIRST} />;
}
