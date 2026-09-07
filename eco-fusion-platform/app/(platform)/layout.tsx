import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { getOrgContext } from "@/lib/tenancy";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import OnboardingWrapper from "@/components/onboarding/OnboardingWrapper";
import TrialBanner from "@/components/layout/TrialBanner";
import { ToastProvider } from "@/components/ui/Toast";
import { ConfirmProvider } from "@/components/ui/ConfirmDialog";

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await auth();

    // Access belongs to the farm, so one check here covers every page for every
    // member, including accounts an owner created for staff.
    const ctx = await getOrgContext();
    if (ctx && !ctx.access.allowed) {
        redirect("/billing");
    }

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
                <Sidebar user={session?.user} />
                <div className="flex flex-col flex-1 overflow-hidden">
                    <Header />
                    <main className="flex-1 overflow-y-auto p-6 transition-all duration-300 scrollbar-hide">
                        {ctx && (
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
