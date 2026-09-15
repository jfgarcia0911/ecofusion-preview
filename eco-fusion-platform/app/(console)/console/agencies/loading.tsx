import { Briefcase } from "lucide-react";
import { AgencyListSkeleton } from "@/components/skeletons/PageSkeletons";
import { AGENCIES_STANDFIRST } from "./standfirst";

/** Shaped like the page that is coming, so nothing rearranges when it lands. */
export default function Loading() {
    return <AgencyListSkeleton title="Agencies" standfirst={AGENCIES_STANDFIRST} icon={Briefcase} rows={6} search />;
}
