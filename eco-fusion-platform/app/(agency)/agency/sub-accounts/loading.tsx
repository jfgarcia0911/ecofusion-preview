import { SubAccountsSkeleton } from "@/components/skeletons/PageSkeletons";
import { SUB_ACCOUNTS_STANDFIRST } from "./standfirst";

/** Shaped like the page that is coming, so nothing rearranges when it lands. */
export default function Loading() {
    return <SubAccountsSkeleton standfirst={SUB_ACCOUNTS_STANDFIRST} />;
}
