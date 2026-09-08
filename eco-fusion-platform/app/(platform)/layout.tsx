import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { getOrgContext } from "@/lib/tenancy";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import OnboardingWrapper from "@/components/onboarding/OnboardingWrapper";
import TrialBanner from "@/components/layout/TrialBanner";
import StaffBanner from "@/components/layout/StaffBanner";
import { ToastProvider } from "@/components/ui/Toast";
import { ConfirmProvider } from "@/components/ui/ConfirmDialog";

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await auth();

    // Access belongs to the business, so one check here covers every page for
    // every member, including accounts an owner created for staff.
    const ctx = await getOrgContext();
    // A lapsed business is often why staff were called in, so it opens for them.
    if (ctx && !ctx.access.allowed && !ctx.isStaff) {
        redirect("/billing");
    }

    // Named rather than left as an id, so the sidebar and the banner can both
    // say whose business this is. Read for everyone, not only for staff: the
    // switcher shows the name at all times, which is how somebody notices they
    // are not where they thought they were.
    const business = ctx
        ? await prisma.organization.findUnique({
              where: { id: ctx.organizationId },
              select: { name: true, location: true },
          })
        : null;
    const staffBusiness = ctx?.isStaff ? business : null;

    // Check if user needs onboarding
    let showOnboarding = false;
    if (session?.user?.id) {
        const user = await prisma.user.findUnique({
            where: { id: session.user.id },
            select: { onboardingComplete: true },
        });
        showOnboarding = !user?.onboardingComplete;
    }

    return (
        <ToastProvider>
        <ConfirmProvider>
        <div className="flex h-screen w-full overflow-hidden bg-background text-foreground bg-[url('/grid-pattern.svg')] bg-cover">
            <div className="absolute inset-0 bg-background/90 z-0 pointer-events-none" />
            <div className="relative z-10 flex w-full h-full">
                <Sidebar user={session?.user} business={business} />
                <div className="flex flex-col flex-1 overflow-hidden">
                    <Header />
                    <main className="flex-1 overflow-y-auto p-6 transition-all duration-300 scrollbar-hide">
                        {staffBusiness && (
                            <div className="mb-6">
                                <StaffBanner businessName={staffBusiness.name} />
                            </div>
                        )}
                        {ctx && !ctx.isStaff && (
                            <div className="mb-6">
                                <TrialBanner access={ctx.access} />
                            </div>
                        )}
                        {children}
                    </main>
                </div>
            </div>
            <OnboardingWrapper initialShowTour={showOnboarding} />
        </div>
        </ConfirmProvider>
        </ToastProvider>
    );
}
