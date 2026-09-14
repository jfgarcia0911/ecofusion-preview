import Link from "next/link";
import { Leaf, Clock } from "lucide-react";
import SubscribeButton from "./subscribe-button";
import TrialClock from "./trial-countdown";
import { prisma } from "@/lib/prisma";
import { evaluateAccess, TRIAL_DAYS, type OrgContext } from "@/lib/tenancy";
import { isBillingConfigured, isTestMode } from "@/lib/stripe";

/**
 * A business's subscription: where its trial stands, and the way to pay.
 *
 * Shown in two places. Settings → Billing puts it inside the app, beside the
 * sidebar, for a business that can still get in. /billing puts it on a page of
 * its own for a business that cannot, since every screen with a sidebar sends
 * a lapsed business away. `embedded` says which: inside the app there is
 * already a way back to the dashboard, so the panel does not offer one.
 */
export default async function BillingPanel({ ctx, embedded }: { ctx: OrgContext; embedded: boolean }) {
    const org = await prisma.organization.findUnique({
        where: { id: ctx.organizationId },
        select: {
            name: true,
            trialEndsAt: true,
            subscriptionStatus: true,
            currentPeriodEnd: true,
        },
    });

    const { role } = ctx;
    // Prefer the freshly-read organization over the context's snapshot.
    const access = org ? evaluateAccess(org) : ctx.access;
    const isOwner = role === "owner";

    const headline =
        access.reason === "trial_expired"
            ? "Your trial has ended"
            : access.reason === "past_due"
              ? "Payment is overdue"
              : access.reason === "canceled"
                ? "This subscription was cancelled"
                : access.reason === "active"
                  ? "Your subscription is active"
                  : (
                      <>
                          Free trial ends in <TrialClock endsAt={access.trialEndsAt} />
                      </>
                    );

    const explanation =
        access.reason === "active"
            ? `Every part of ${org?.name ?? "your business"} is available.`
            : access.allowed
              ? `Every part of ${org?.name ?? "your business"} is available until your trial ends. Subscribe any time to keep it.`
              : isOwner
                ? `Access to ${org?.name ?? "your business"} is paused. Your data is safe and nothing has been deleted. Subscribing restores everything exactly as you left it.`
                : `Access to ${org?.name ?? "this business"} is paused. The owner needs to renew the subscription; anyone they added shares the same access.`;

    return (
        <div className="w-full max-w-lg">
            <div className="glass-card border-white/10 shadow-2xl shadow-black/50 p-8 rounded-3xl backdrop-blur-xl bg-black/40">
                <div className="flex flex-col items-center text-center mb-8">
                    <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-accent/20">
                        <Leaf className="text-primary" size={24} strokeWidth={2.5} />
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">{headline}</h2>
                    <p className="text-white/50 text-sm leading-relaxed">{explanation}</p>
                </div>

                <dl className="space-y-3 mb-8">
                    <div className="flex items-center justify-between py-3 px-4 bg-white/5 rounded-xl">
                        <dt className="text-sm text-white/50">Business</dt>
                        <dd className="text-sm font-medium text-white">{org?.name ?? "-"}</dd>
                    </div>
                    <div className="flex items-center justify-between py-3 px-4 bg-white/5 rounded-xl">
                        <dt className="text-sm text-white/50">Your role</dt>
                        <dd className="text-sm font-medium text-white capitalize">{role}</dd>
                    </div>
                    <div className="flex items-center justify-between py-3 px-4 bg-white/5 rounded-xl">
                        <dt className="text-sm text-white/50 flex items-center gap-2">
                            <Clock size={14} /> Trial period
                        </dt>
                        <dd className="text-sm font-medium text-white">
                            {org?.trialEndsAt
                                ? org.trialEndsAt.toLocaleDateString(undefined, {
                                      year: "numeric",
                                      month: "long",
                                      day: "numeric",
                                  })
                                : `${TRIAL_DAYS} days`}
                        </dd>
                    </div>
                </dl>

                {access.reason === "active" ? null : isOwner ? (
                    <SubscribeButton configured={isBillingConfigured()} />
                ) : (
                    <p className="text-center text-sm text-white/40 py-3">
                        Only the business&apos;s owner can manage the subscription.
                    </p>
                )}

                {!embedded && access.allowed && (
                    <Link
                        href="/dashboard/executive"
                        className="mt-3 w-full py-3 px-4 bg-white/5 border border-white/10 text-white font-medium rounded-xl flex items-center justify-center hover:bg-white/10 transition-all"
                    >
                        Continue to dashboard
                    </Link>
                )}
            </div>

            {isTestMode() && (
                <p className="mt-6 text-center text-xs text-amber-300/60">
                    Stripe test mode. Use card 4242 4242 4242 4242, any future expiry and CVC.
                </p>
            )}

            <p className="mt-3 text-center text-xs text-white/30">
                Questions about billing? Email support@llayd.com
            </p>
        </div>
    );
}
