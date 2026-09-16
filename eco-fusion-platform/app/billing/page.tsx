import { redirect } from "next/navigation";
import BillingPanel, { billingViewerOf } from "@/components/billing/BillingPanel";
import { getOrgContext } from "@/lib/tenancy";
import { agencyStanding } from "@/lib/agency";
import { syncSubscriptionFromStripe } from "@/lib/billing";
import { auth } from "@/auth";

// Outside the (platform) group on purpose: this is the one page an agency can
// still reach once its access has lapsed. Anybody who can still get in has
// Settings → Billing, with the sidebar, and is sent there.
export default async function BillingPage({
    searchParams,
}: {
    searchParams: Promise<{ checkout?: string }>;
}) {
    const session = await auth();
    if (!session?.user?.id) redirect("/login");

    let ctx = await getOrgContext();
    // A master account whose agency holds no business yet still has billing.
    const standing = ctx ? null : await agencyStanding(session.user.id);
    const agencyId = ctx?.agencyId ?? standing?.agencyId;
    if (!agencyId) redirect("/login");

    const { checkout } = await searchParams;

    // Stripe's webhook is meant to grant access, but it is also the only thing
    // that does - so a missing STRIPE_WEBHOOK_SECRET, an un-forwarded local
    // tunnel, or a delivery Stripe has not retried yet all leave someone who
    // has just paid staring at a trial notice. Reading the live state on the
    // way back from checkout makes the payment take effect regardless.
    // Also on any visit while shut: renewal is only learned from the webhook,
    // and somebody locked out after paying should be let back in by coming here.
    if (checkout === "success" || (ctx && !ctx.access.allowed)) {
        const live = await syncSubscriptionFromStripe(agencyId);
        if (live) redirect(ctx ? "/dashboard/executive" : "/agency/sub-accounts");

        // Not live yet (Stripe can still be finalising). Re-read so the page at
        // least reflects whatever the reconcile did store.
        ctx = (await getOrgContext()) ?? ctx;
    } else if (ctx?.access.allowed) {
        redirect("/settings/billing");
    }

    const viewer = ctx
        ? await billingViewerOf(ctx)
        : { canManage: Boolean(standing?.admin), role: standing?.admin ? "Master account" : "Agency staff" };

    return (
        <main className="flex items-center justify-center min-h-screen bg-primary font-sans p-6">
            <BillingPanel
                agencyId={agencyId}
                canManage={viewer.canManage}
                role={viewer.role}
                businessName={ctx?.business.name}
                embedded={false}
            />
        </main>
    );
}
