import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { getOrgContext } from "@/lib/tenancy";
import { platformStanding } from "@/lib/staff";
import { agencyStanding } from "@/lib/agency";
import { PERMISSIONS } from "@/lib/staff-permissions";
import { Eye } from "lucide-react";
import Sidebar, { type AboveLink } from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import OnboardingWrapper from "@/components/onboarding/OnboardingWrapper";
import SubAccountLock from "@/components/billing/SubAccountLock";
import { ToastProvider } from "@/components/ui/Toast";
import { ConfirmProvider } from "@/components/ui/ConfirmDialog";

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await auth();
    const userId = session?.user?.id;

    // Access belongs to the agency, so one check here covers every page for
    // every member of every business it holds.
    //
    // Whether to show the onboarding tour, and whether this person works above
    // businesses, depend on nothing but who is signed in, so they are asked
    // alongside the business rather than after it. Both standings are cached
    // for the request and shared with the business lookup.
    const [ctx, user, platform, agency] = await Promise.all([
        getOrgContext(),
        userId
            ? prisma.user.findUnique({
                  where: { id: userId },
                  select: { onboardingComplete: true },
              })
            : Promise.resolve(null),
        userId ? platformStanding(userId) : Promise.resolve(null),
        userId ? agencyStanding(userId) : Promise.resolve(null),
    ]);
    // A lapsed business is often why EcoFusion was called in, so it opens for
    // EcoFusion. It stays shut for the agency's own people, who are the customer.
    if (ctx && !ctx.access.allowed && !ctx.isStaff) {
        redirect("/billing");
    }

    // An account above businesses may have no business of its own open. These
    // screens are all scoped to one, so without one there is nothing here to
    // show: EcoFusion works from its console, an agency's team from its view.
    if (!ctx && platform) redirect("/console");
    if (!ctx && agency) redirect("/agency/sub-accounts");

    // The way up, for whoever has one.
    const above: AboveLink | null = platform
        ? { href: "/console", label: "EcoFusion console" }
        : agency
          ? { href: "/agency/sub-accounts", label: "Agency view" }
          : null;

    // Named rather than left as an id so the sidebar and the banner can both
    // say whose business this is; the switcher shows it at all times, which is
    // how somebody notices they are not where they thought they were. It comes
    // with the business lookup itself, so saying so costs no query.
    const business = ctx?.business ?? null;

    const showOnboarding = Boolean(userId) && !user?.onboardingComplete;

    // The settings the sidebar offers depend on this, and the session's own
    // orgRole is the wrong answer while somebody is inside a business they
    // stepped into: it still names their own membership somewhere else.
    // Admins of either kind enter as the owner and are shown everything an
    // owner is; staff enter as supervisors.
    const isOwner = ctx?.role === "owner";

    // What a staff member's permissions leave them, shown rather than left for
    // them to find out one refusal at a time. Admins are never limited.
    const limitedStaff = Boolean(ctx?.entered && !ctx.fullControl);
    const viewOnly =
        limitedStaff && !ctx!.staffPermissions.includes(PERMISSIONS.WORK_IN_BUSINESS);
    // EcoFusion staff allowed to give or take back classes get the Classes
    // screen to do it from; an owner has it anyway, to buy.
    const showClasses =
        isOwner ||
        (limitedStaff &&
            ctx!.isStaff &&
            (ctx!.staffPermissions.includes(PERMISSIONS.GIVE_CLASSES) ||
                ctx!.staffPermissions.includes(PERMISSIONS.TAKE_CLASSES)));

    const askWho = ctx?.isStaff ? "an EcoFusion admin" : "your agency's master account";

    return (
        <ToastProvider>
        <ConfirmProvider>
        <div className="flex h-screen w-full overflow-hidden bg-background text-foreground bg-[url('/grid-pattern.svg')] bg-cover">
            <div className="absolute inset-0 bg-background/90 z-0 pointer-events-none" />
            <div className="relative z-10 flex w-full h-full">
                <Sidebar
                    user={session?.user ? { ...session.user, orgRole: ctx?.role ?? session.user.orgRole } : undefined}
                    business={business}
                    isOwner={isOwner}
                    showClasses={showClasses}
                    above={above}
                />
                <div className="flex flex-col flex-1 overflow-hidden">
                    <Header />
                    <main className="flex-1 overflow-y-auto p-6 transition-all duration-300 scrollbar-hide">
                        {viewOnly && (
                            <p className="mb-6 px-4 py-3 rounded-xl border border-info/25 bg-info/10 text-sm text-info flex items-center gap-2">
                                <Eye size={15} className="shrink-0" />
                                View only. Your access lets you look around this business but not change anything. Ask {askWho} if you need to.
                            </p>
                        )}
                        {/* No trial banner in a sub-account: the agency's trial is
                            the agency's business, shown in its own view, and the
                            sub-account's 30 days count down on its Billing page. */}
                        <SubAccountLock
                            locked={Boolean(ctx && !ctx.entered && !ctx.client.allowed)}
                            isOwner={isOwner}
                        >
                            {children}
                        </SubAccountLock>
                    </main>
                </div>
            </div>
            <OnboardingWrapper initialShowTour={showOnboarding} />
        </div>
        </ConfirmProvider>
        </ToastProvider>
    );
}
