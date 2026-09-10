import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { getOrgContext } from "@/lib/tenancy";
import { isPlatformAdmin } from "@/lib/staff";
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

    // Access belongs to the business, so one check here covers every page for
    // every member, including accounts an owner created for staff.
    const ctx = await getOrgContext();
    // A lapsed business is often why staff were called in, so it opens for them.
    if (ctx && !ctx.access.allowed && !ctx.isStaff) {
        redirect("/billing");
    }

    // A support account belongs to no business, which is the point of it: it is
    // not somebody's employee and holds nothing of its own. These screens are
    // all scoped to a business, so without one there is nothing here to show -
    // the agency view is where that account actually works.
    if (!ctx && session?.user?.id && (await isPlatformAdmin(session.user.id))) {
        redirect("/agency");
    }

    // These three do not depend on each other, so they go together. Awaited one
    // after another they were three round trips to a database on the other side
    // of the world, in front of every screen in the app; asked for at once they
    // cost one. Nothing below reads a result before this line.
    //
    // `business` is named rather than left as an id so the sidebar and the
    // banner can both say whose business this is, and it is read for everyone
    // rather than only for staff: the switcher shows the name at all times,
    // which is how somebody notices they are not where they thought they were.
    const [business, user] = await Promise.all([
        ctx
            ? prisma.organization.findUnique({
                  where: { id: ctx.organizationId },
                  select: { name: true, location: true },
              })
            : Promise.resolve(null),
        session?.user?.id
            ? prisma.user.findUnique({
                  where: { id: session.user.id },
                  select: { onboardingComplete: true },
              })
            : Promise.resolve(null),
    ]);

    const showOnboarding = Boolean(session?.user?.id) && !user?.onboardingComplete;


    // An owner gets the panel even with a single business, because that panel
    // is where another one is added. Staff have their own, and a member with
    // one business has nowhere to go and nothing to create.
    // The settings the sidebar offers depend on this, and the session's own
    // orgRole is the wrong answer while staff are inside somebody else's
    // business: it still names their own membership somewhere else.
    // Staff enter as supervisors, so this is false for them; the master
    // account enters as the owner, and is shown everything an owner is.
    const isOwner = ctx?.role === "owner";


    return (
        <ToastProvider>
        <ConfirmProvider>
        <div className="flex h-screen w-full overflow-hidden bg-background text-foreground bg-[url('/grid-pattern.svg')] bg-cover">
            <div className="absolute inset-0 bg-background/90 z-0 pointer-events-none" />
            <div className="relative z-10 flex w-full h-full">
                <Sidebar user={session?.user} business={business} isOwner={isOwner} />
                <div className="flex flex-col flex-1 overflow-hidden">
                    <Header />
                    <main className="flex-1 overflow-y-auto p-6 transition-all duration-300 scrollbar-hide">
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
