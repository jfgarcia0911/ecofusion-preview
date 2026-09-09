import { SettingsListSkeleton } from "@/components/skeletons/PageSkeletons";

/** Shaped like the page that is coming, so nothing rearranges when it lands. */
export default function Loading() {
    return <SettingsListSkeleton title="Access Record" rows={8} />;
}
