import { redirect } from "next/navigation";
import { CreditCard } from "lucide-react";
import BillingPanel from "@/components/billing/BillingPanel";
import { BILLING_STANDFIRST } from "@/components/skeletons/PageSkeletons";
import { resolveScope } from "@/lib/agency";
import { standingLabel } from "@/lib/roles";

/**
 * The agency's plan and subscription: one trial, one subscription, covering
 * every business it holds. The master account chooses the plan here; EcoFusion
 * supporting the agency sees the same page and cannot pay on its behalf.
 */
export default async function AgencyBillingPage() {
    const scope = await resolveScope();
    if (!scope || scope.kind !== "agency") redirect("/agency/sub-accounts");
    if (!scope.admin) redirect("/agency/sub-accounts");

    const role =
        scope.via === "platform"
            ? standingLabel({ platform: scope.platformAdmin ? "admin" : "staff" })
            : standingLabel({ agency: "admin" });

    return (
        <div className="space-y-6 pb-10">
            <div>
                <h1 className="text-2xl font-bold text-white flex items-center gap-2">
                    <CreditCard size={22} className="text-accent" />
                    Billing
                </h1>
                <p className="text-white/50 mt-1 max-w-2xl text-sm">{BILLING_STANDFIRST}</p>
            </div>
            <BillingPanel
                agencyId={scope.agencyId}
                canManage={scope.via === "member"}
                role={role}
                embedded
            />
        </div>
    );
}
