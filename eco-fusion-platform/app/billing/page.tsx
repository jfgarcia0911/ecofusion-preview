import { redirect } from "next/navigation";
import BillingPanel from "@/components/billing/BillingPanel";
import { getOrgContext } from "@/lib/tenancy";
import { syncSubscriptionFromStripe } from "@/lib/billing";

// Outside the (platform) group on purpose: this is the one page a business can
// still reach once its access has lapsed. A business that can still get in has
// Settings → Billing, with the sidebar, and is sent there.
export default async function BillingPage({
    searchParams,
}: {
    searchParams: Promise<{ checkout?: string }>;
}) {
    let ctx = await getOrgContext();
    if (!ctx) redirect("/login");

    const { checkout } = await searchParams;

    // Stripe's webhook is meant to grant access, but it is also the only thing
    // that does - so a missing STRIPE_WEBHOOK_SECRET, an un-forwarded local
    // tunnel, or a delivery Stripe has not retried yet all leave someone who
    // has just paid staring at a trial notice. Reading the live state on the
    // way back from checkout makes the payment take effect regardless.
    if (checkout === "success") {
        const live = await syncSubscriptionFromStripe(ctx.organizationId);
        if (live) redirect("/dashboard/executive");

        // Not live yet (Stripe can still be finalising). Re-read so the page at
        // least reflects whatever the reconcile did store.
        ctx = (await getOrgContext()) ?? ctx;
    } else if (ctx.access.allowed) {
        redirect("/settings/billing");
    }

    return (
        <main className="flex items-center justify-center min-h-screen bg-primary font-sans p-6">
            <BillingPanel ctx={ctx} embedded={false} />
        </main>
    );
}
