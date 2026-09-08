import { redirect } from "next/navigation";
import { getOrgContext } from "@/lib/tenancy";

/**
 * The access record is the owner's.
 *
 * It names EcoFusion staff and the changes they made, which is the owner's
 * business to examine and nobody else's to browse. Staff are turned away as
 * well: they read the same trail from the agency view, and a support session
 * reading it from inside would make the business's own record of that session
 * look like something the business had gone and fetched.
 */
export default async function AuditLogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const ctx = await getOrgContext();
    if (!ctx) redirect("/login");
    if (ctx.role !== "owner" || ctx.isStaff) redirect("/settings");

    return <>{children}</>;
}
