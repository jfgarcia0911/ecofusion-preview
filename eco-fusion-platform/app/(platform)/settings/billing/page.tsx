import Link from "next/link";
import { redirect } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import SubAccountBillingPanel from "@/components/billing/SubAccountBillingPanel";
import { BILLING_STANDFIRST } from "@/components/skeletons/PageSkeletons";
import { getOrgContext } from "@/lib/tenancy";
import { prisma } from "@/lib/prisma";
import { agencyStanding } from "@/lib/agency";
import { syncClientCheckout } from "@/lib/sub-account-billing";

// A sub-account's billing: what this business pays its agency. The agency's
// own plan is not here; it is bought in the agency view.
//
// Stays open when the business has not paid, since this is where it pays.
export default async function SettingsBillingPage({
    searchParams,
}: {
    searchParams: Promise<{ checkout?: string; session_id?: string }>;
}) {
    const ctx = await getOrgContext();
    if (!ctx) redirect("/login");

    // Back from Stripe: apply the payment straight away rather than waiting
    // on the webhook, then open the dashboard it paid for.
    const { checkout, session_id } = await searchParams;
    if (checkout === "success" && session_id) {
        if (await syncClientCheckout(ctx.organizationId, session_id)) redirect("/dashboard/executive");
    }

    const [organization, standing] = await Promise.all([
        prisma.organization.findUnique({
            where: { id: ctx.organizationId },
            select: { clientPeriodEnd: true, agency: { select: { name: true } } },
        }),
        agencyStanding(ctx.userId),
    ]);

    return (
        <div className="space-y-8 pb-10">
            <div>
                <Link
                    href="/settings"
                    className="text-white/50 hover:text-white text-sm flex items-center gap-2 mb-4 w-fit transition-colors"
                >
                    <ArrowLeft size={16} /> Back to Settings
                </Link>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                    Billing
                </h1>
                <p className="text-white/50 mt-1">{BILLING_STANDFIRST}</p>
            </div>
            <SubAccountBillingPanel
                ctx={ctx}
                agencyName={organization?.agency.name ?? "Your agency"}
                periodEnd={organization?.clientPeriodEnd ?? null}
                ownAgencyAdmin={Boolean(standing?.admin && standing.agencyId === ctx.agencyId)}
            />
        </div>
    );
}
