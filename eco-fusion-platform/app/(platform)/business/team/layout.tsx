import { redirect } from "next/navigation";
import { getOrgContext } from "@/lib/tenancy";

/**
 * Team Access is EcoFusion's view of who can sign in to a business.
 *
 * An owner does not come here. They manage their people under Employees, where
 * giving somebody a login sits beside the record of who that person is and what
 * they do - one screen for one subject, rather than two that overlap.
 *
 * This is the same list without the employment side of it, which is what staff
 * need when looking at a business they did not staff themselves. Anyone else is
 * sent to Employees, which is the screen they actually wanted.
 */
export default async function TeamAccessLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const ctx = await getOrgContext();
    if (!ctx) redirect("/login");
    if (!ctx.isStaff) redirect("/business/employees");

    return <>{children}</>;
}
