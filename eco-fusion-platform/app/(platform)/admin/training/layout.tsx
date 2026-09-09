import { redirect } from "next/navigation";
import { getOrgContext } from "@/lib/tenancy";

/**
 * Training management belongs to the owner, and to EcoFusion helping them.
 *
 * What a business is answerable for having taught its staff is the owner's to
 * decide, so nobody they gave an account to reaches this screen. The sidebar
 * hides the link from them; this turns away anyone who types the address.
 *
 * EcoFusion staff reach it too. Helping a customer with their training is why
 * support was called, and they entered the business to do it - a screen they
 * cannot open is a support call that ends in "log in as yourself and try".
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
    if (ctx.role !== "owner" && !ctx.isStaff) redirect("/dashboard/executive");

    return <>{children}</>;
}
