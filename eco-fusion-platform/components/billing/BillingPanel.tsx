import Link from "next/link";
import { Leaf, Clock, Building2 } from "lucide-react";
import SubscribeButton, { type PlanOption } from "./subscribe-button";
import TrialClock from "./trial-countdown";
import { prisma } from "@/lib/prisma";
import { evaluateAccess, TRIAL_DAYS } from "@/lib/tenancy";
import { isBillingConfigured, isTestMode } from "@/lib/stripe";
import { PLANS, planFor, usageLabel } from "@/lib/plans";
import { agencyStanding } from "@/lib/agency";
import { standingLabel } from "@/lib/roles";
import type { OrgContext } from "@/lib/tenancy";

/**
 * Who is looking at billing from inside a business: whether they may change
 * the agency's plan, and what to call them.
 */
export async function billingViewerOf(ctx: OrgContext): Promise<{ canManage: boolean; role: string }> {
    const standing = await agencyStanding(ctx.userId);
    const ownAgencyAdmin = Boolean(standing?.admin && standing.agencyId === ctx.agencyId);
    const role = ctx.isStaff
        ? standingLabel({ platform: ctx.isPlatformAdmin ? "admin" : "staff" })
        : ctx.isAgency || ownAgencyAdmin
          ? standingLabel({ agency: ownAgencyAdmin ? "admin" : "user" })
          : ctx.role.charAt(0).toUpperCase() + ctx.role.slice(1);
    return { canManage: ownAgencyAdmin, role };
}

/**
 * An agency's subscription: its plan, where its trial stands, how many
 * businesses it holds against the plan, and the way to pay.
 *
 * The agency pays once and that covers every business it holds, so this is
 * the same panel wherever it is shown - Settings → Billing inside a business,
 * the agency's own Billing screen, and /billing for a lapsed agency, which
 * stands on a page of its own. Only the master account may choose a plan;
 * everybody else is told who can.
 */
export default async function BillingPanel({
    agencyId,
    canManage,
    businessName,
    role,
    embedded,
}: {
    agencyId: string;
    /** The agency's master account, who alone may subscribe. */
    canManage: boolean;
    /** The business being looked at, when opened from inside one. */
    businessName?: string | null;
    /** The viewer's standing, as shown. */
    role: string;
    embedded: boolean;
}) {
    const agency = await prisma.agency.findUnique({
        where: { id: agencyId },
        select: {
            name: true,
            plan: true,
            trialEndsAt: true,
            subscriptionStatus: true,
            currentPeriodEnd: true,
            _count: { select: { organizations: true } },
        },
    });
    if (!agency) return null;

    const access = evaluateAccess(agency);
    const plan = planFor(agency.plan);
    const used = agency._count.organizations;
    const active = access.reason === "active";

    const headline =
        access.reason === "trial_expired"
            ? "Your trial has ended"
            : access.reason === "past_due"
              ? "Payment is overdue"
              : access.reason === "canceled"
                ? "This subscription was cancelled"
                : active
                  ? "Your subscription is active"
                  : (
                      <>
                          Free trial ends in <TrialClock endsAt={access.trialEndsAt} />
                      </>
                    );

    const explanation = active
        ? `${agency.name} is on the ${plan.name} plan, which covers every business it holds.`
        : access.allowed
          ? `Every business in ${agency.name} is available until the trial ends. Subscribe any time to keep them.`
          : canManage
            ? `Access to ${agency.name} and its businesses is paused. Your data is safe and nothing has been deleted. Subscribing restores everything exactly as you left it.`
            : `Access to ${agency.name} is paused. The agency's master account needs to renew the subscription, which covers every business in it.`;

    const plans: PlanOption[] = PLANS.map((option) => ({
        key: option.key,
        name: option.name,
        priceLabel: option.priceLabel,
        blurb: option.blurb,
        configured: isBillingConfigured(option.key),
        unavailable:
            used > option.subAccountLimit
                ? `The agency has ${used} businesses; this plan holds ${option.subAccountLimit}.`
                : null,
    }));

    const rows: { label: React.ReactNode; value: React.ReactNode }[] = [
        { label: "Agency", value: agency.name },
        ...(businessName ? [{ label: "This business", value: businessName }] : []),
        { label: "Your role", value: role },
        { label: "Plan", value: plan.name },
        {
            label: (
                <span className="flex items-center gap-2">
                    <Building2 size={14} /> Businesses
                </span>
            ),
            value: usageLabel(used, plan),
        },
        active
            ? {
                  label: "Renews",
                  value: agency.currentPeriodEnd
                      ? agency.currentPeriodEnd.toLocaleDateString(undefined, {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })
                      : "-",
              }
            : {
                  label: (
                      <span className="flex items-center gap-2">
                          <Clock size={14} /> Trial ends
                      </span>
                  ),
                  value: agency.trialEndsAt
                      ? agency.trialEndsAt.toLocaleDateString(undefined, {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })
                      : `${TRIAL_DAYS} days`,
              },
    ];

    // Inside the app it takes the page's width, like every other settings page;
    // on its own page it stays a card in the middle of the screen.
    return (
        <div className={embedded ? "w-full" : "w-full max-w-2xl"}>
            <div className="glass-card border-white/10 shadow-2xl shadow-black/50 p-8 rounded-3xl backdrop-blur-xl bg-black/40">
                <div className="flex flex-col items-center text-center mb-8">
                    <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-accent/20">
                        <Leaf className="text-primary" size={24} strokeWidth={2.5} />
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">{headline}</h2>
                    <p className="text-white/50 text-sm leading-relaxed">{explanation}</p>
                </div>

                <dl className="space-y-3 mb-8">
                    {rows.map((row, i) => (
                        <div key={i} className="flex items-center justify-between gap-4 py-3 px-4 bg-white/5 rounded-xl">
                            <dt className="text-sm text-white/50">{row.label}</dt>
                            <dd className="text-sm font-medium text-white text-right">{row.value}</dd>
                        </div>
                    ))}
                </dl>

                {canManage ? (
                    <SubscribeButton plans={plans} current={plan.key} active={active} />
                ) : (
                    <p className="text-center text-sm text-white/40 py-3">
                        The subscription is the agency&apos;s, and covers this business. Only the agency&apos;s master
                        account can change it.
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
