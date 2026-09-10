import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { currentStaffOrganizationId, platformStanding } from "@/lib/staff";
import AgencySidebar from "@/components/layout/AgencySidebar";
import Header from "@/components/layout/Header";
import OpenSessionNotice from "@/components/layout/OpenSessionNotice";
import { ToastProvider } from "@/components/ui/Toast";
import { ConfirmProvider } from "@/components/ui/ConfirmDialog";

/**
 * The agency view: EcoFusion looking at its customers.
 *
 * A separate shell from (platform) rather than a section inside it, because
 * everything under here is about other people's businesses and nothing under
 * here is scoped to one. There is no organization context to speak of, so the
 * business sidebar, the trial banner and the onboarding tour have no meaning
 * and are absent.
 *
 * Staff is checked here, once, on the server. Every page below inherits it and
 * none of them has to be trusted to check for itself.
 */
export default async function AgencyLayout({ children }: { children: React.ReactNode }) {
    const session = await auth();
    if (!session?.user?.id) redirect("/login");

    // The staff check and the open session lookup have nothing to say to each
    // other, so they are asked for together rather than one after the other.
    // Both cross the Pacific; doing so twice in sequence is what the shell was
    // waiting on before it could render at all.
    //
    // The check still gates everything below. Starting a query before knowing
    // whether the caller may be here is not a leak: its result is thrown away
    // on the redirect, and the id it reads came from the caller's own cookie.
    const openSessionId = await currentStaffOrganizationId();
    const [staff, openSession] = await Promise.all([
        platformStanding(session.user.id),
        openSessionId
            ? prisma.organization.findUnique({
                  where: { id: openSessionId },
                  select: { name: true },
              })
            : Promise.resolve(null),
    ]);

    // Read from the database, not the token, so withdrawing staff access shuts
    // this view at once instead of whenever a session happens to refresh.
    if (!staff) {
        redirect("/dashboard/executive");
    }

    return (
        <ToastProvider>
            <ConfirmProvider>
                <div className="flex h-screen w-full overflow-hidden bg-background text-foreground bg-[url('/grid-pattern.svg')] bg-cover">
                    <div className="absolute inset-0 bg-background/90 z-0 pointer-events-none" />
                    <div className="relative z-10 flex w-full h-full">
                        <AgencySidebar
                            user={session.user}
                            access={{ master: staff.master, permissions: staff.permissions }}
                        />
                        <div className="flex flex-col flex-1 overflow-hidden">
                            <Header />
                            <main className="flex-1 overflow-y-auto p-6 scrollbar-hide">
                                {openSession && (
                                    <div className="mb-6">
                                        <OpenSessionNotice businessName={openSession.name} />
                                    </div>
                                )}
                                {children}
                            </main>
                        </div>
                    </div>
                </div>
            </ConfirmProvider>
        </ToastProvider>
    );
}
