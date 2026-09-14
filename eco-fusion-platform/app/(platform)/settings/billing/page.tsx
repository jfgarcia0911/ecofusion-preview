import Link from "next/link";
import { redirect } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import BillingPanel from "@/components/billing/BillingPanel";
import { getOrgContext } from "@/lib/tenancy";

// Billing inside the app, beside the sidebar. A lapsed business never reaches
// this: the (platform) layout sends it to /billing, which stands on its own.
export default async function SettingsBillingPage() {
    const ctx = await getOrgContext();
    if (!ctx) redirect("/login");

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
                <p className="text-white/50 mt-1">One subscription, covering every business you run.</p>
            </div>
            <BillingPanel ctx={ctx} embedded />
        </div>
    );
}
