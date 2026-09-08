import { redirect } from "next/navigation";
import { getOrgContext } from "@/lib/tenancy";

/**
 * Training management belongs to the owner.
 *
 * What a business is answerable for having taught its staff is the owner's to
 * decide, so the screen that assigns courses and exports the compliance record
 * is theirs alone. The sidebar hides the link; this turns away anyone who
 * types the address instead.
 *
 * The academy itself is untouched. Every employee still reaches their own
 * assigned courses at /academy - what is gated here is deciding who must take
 * what, not taking it.
 */
export default async function TrainingManagementLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const ctx = await getOrgContext();
    if (!ctx) redirect("/login");
    if (ctx.role !== "owner" || ctx.isStaff) redirect("/dashboard/executive");

    return <>{children}</>;
}
