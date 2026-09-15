import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { currentStaffOrganizationId, platformStanding } from "@/lib/staff";
import { agencyStanding, businessReach } from "@/lib/agency";
import { standingLabel } from "@/lib/roles";
import AgencySidebar from "@/components/layout/AgencySidebar";
import Header from "@/components/layout/Header";
import OpenSessionNotice from "@/components/layout/OpenSessionNotice";
import { ToastProvider } from "@/components/ui/Toast";
import { ConfirmProvider } from "@/components/ui/ConfirmDialog";

/**
 * The EcoFusion console: EcoFusion itself, above every agency.
 *
 * Only EcoFusion accounts reach it - its admin, and the staff the admin takes
 * on. An agency's team, however senior, has its own agency view instead and
 * never sees this. Checked once, here, on the server, from the database
 * rather than the token.
 */
export default async function ConsoleLayout({ children }: { children: React.ReactNode }) {
    const session = await auth();
    if (!session?.user?.id) redirect("/login");
    const userId = session.user.id;

    const [platform, openSessionId] = await Promise.all([
        platformStanding(userId),
        currentStaffOrganizationId(),
    ]);
    if (!platform) {
        redirect((await agencyStanding(userId)) ? "/agency/sub-accounts" : "/dashboard/executive");
    }

    const openSession = openSessionId
        ? await prisma.organization.findUnique({
              where: { id: openSessionId },
              select: { id: true, name: true, agencyId: true },
          })
        : null;
    const sessionReachable = openSession
        ? (await businessReach(userId, openSession.id, openSession.agencyId)) !== null
        : false;

    return (
        <ToastProvider>
            <ConfirmProvider>
                <div className="flex h-screen w-full overflow-hidden bg-background text-foreground bg-[url('/grid-pattern.svg')] bg-cover">
                    <div className="absolute inset-0 bg-background/90 z-0 pointer-events-none" />
                    <div className="relative z-10 flex w-full h-full">
                        <AgencySidebar
                            variant="console"
                            title="EcoFusion console"
                            user={session.user}
                            access={{ admin: platform.admin, permissions: platform.permissions }}
                            standing={standingLabel({ platform: platform.admin ? "admin" : "staff" })}
                            backTo={openSession && sessionReachable ? openSession.name : null}
                        />
                        <div className="flex flex-col flex-1 overflow-hidden">
                            <Header />
                            <main className="flex-1 overflow-y-auto p-6 scrollbar-hide">
                                {openSession && sessionReachable && (
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
