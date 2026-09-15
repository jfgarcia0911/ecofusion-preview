import { redirect } from "next/navigation";
import { CreditCard, AlertTriangle } from "lucide-react";
import BillingPanel from "@/components/billing/BillingPanel";
import ConnectPaymentsPanel from "@/components/billing/ConnectPaymentsPanel";
import { resolveScope } from "@/lib/agency";
import { standingLabel } from "@/lib/roles";
import { refreshConnectedAccount } from "@/lib/sub-account-billing";

/**
 * The agency's money, both ways: the plan it pays EcoFusion for, and the $99 a
 * month each of its sub-accounts pays it. The master account chooses the plan
 * and connects Stripe here; EcoFusion supporting the agency sees the same page
 * and can do neither on its behalf.
 */
export default async function AgencyBillingPage({
    searchParams,
}: {
    searchParams: Promise<{ connect?: string }>;
}) {
    const scope = await resolveScope();
    if (!scope || scope.kind !== "agency") redirect("/agency/sub-accounts");
    if (!scope.admin) redirect("/agency/sub-accounts");

    // Back from Stripe: read whether the account can take payments now,
    // rather than waiting for Stripe to say so.
    const { connect } = await searchParams;
    if (connect === "return") await refreshConnectedAccount(scope.agencyId);

    // Anything other than a finished sign-in is said plainly. A page that
    // simply shows "Not connected" again leaves somebody pressing the same
    // button wondering what they did wrong.
    const trouble =
        connect === "cancelled"
            ? "Stripe was closed before the account was connected. Nothing has changed."
            : connect === "mismatch"
              ? "That sign-in could not be matched to this agency. Start again from the button below."
              : connect === "refused"
                ? "Only the agency's master account, signed in as itself, can connect Stripe."
                : connect === "failed"
                  ? "Stripe could not be reached to finish connecting. Nothing was changed; try again."
                  : null;

    const role =
        scope.via === "platform"
            ? standingLabel({ platform: scope.platformAdmin ? "admin" : "staff" })
            : standingLabel({ agency: "admin" });
    const canManage = scope.via === "member";

    return (
        <div className="space-y-6 pb-10">
            <div>
                <h1 className="text-2xl font-bold text-white flex items-center gap-2">
                    <CreditCard size={22} className="text-accent" />
                    Billing
                </h1>
                <p className="text-white/50 mt-1 max-w-2xl text-sm">
                    The agency&apos;s plan, which EcoFusion charges, and the payments your sub-accounts make to you.
                </p>
            </div>
            {trouble && (
                <p className="px-4 py-3 rounded-xl border border-amber-400/25 bg-amber-400/10 text-sm text-amber-100 flex items-center gap-2">
                    <AlertTriangle size={15} className="shrink-0" />
                    {trouble}
                </p>
            )}
            <BillingPanel agencyId={scope.agencyId} canManage={canManage} role={role} embedded />
            <ConnectPaymentsPanel agencyId={scope.agencyId} canManage={canManage} />
        </div>
    );
}
