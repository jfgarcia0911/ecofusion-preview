import { OperationsSkeleton } from "@/components/skeletons/DashboardSkeletons";

/** The same placeholder the page itself shows, so the two do not swap. */
export default function OperationsLoading() {
    return <OperationsSkeleton />;
}
