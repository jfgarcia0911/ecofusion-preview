import { redirect } from "next/navigation";
import { getOrgContext } from "@/lib/tenancy";

/**
 * Team Access belongs to the owner.
 *
 * The sidebar stops showing the link to everyone else, but a link is not a
 * lock: the page is a URL somebody can type, and an account created for an
 * employee must not reach it by doing so. Checked on the server, where the
 * answer cannot be edited.
 *
 * Staff who have stepped into a business are turned away here as well. They
 * act with an administrator's powers and not an owner's, and who holds a login
 * to a customer's business is the customer's decision.
 */
export default async function TeamAccessLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const ctx = await getOrgContext();
    if (!ctx) redirect("/login");
    if (ctx.role !== "owner" || ctx.isStaff) redirect("/dashboard/executive");

    return <>{children}</>;
}
