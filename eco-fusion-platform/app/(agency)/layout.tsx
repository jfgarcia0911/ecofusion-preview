import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { currentStaffOrganizationId } from "@/lib/staff";
import { businessReach, resolveScope } from "@/lib/agency";
import { evaluateAccess } from "@/lib/tenancy";
import { standingLabel } from "@/lib/roles";
import AgencySidebar from "@/components/layout/AgencySidebar";
import Header from "@/components/layout/Header";
import { MobileNavDrawer, MobileNavProvider } from "@/components/layout/MobileNav";
import OpenSessionNotice from "@/components/layout/OpenSessionNotice";
import SupportAgencyNotice from "@/components/layout/SupportAgencyNotice";
import TrialBanner from "@/components/layout/TrialBanner";
import { ToastProvider } from "@/components/ui/Toast";
import { ConfirmProvider } from "@/components/ui/ConfirmDialog";

/**
 * The agency view: one agency's own screens, above its businesses.
 *
 * Its team sees its own agency here and never another. EcoFusion sees an
 * agency here only after opening it from the console, with a notice saying
 * so; otherwise EcoFusion accounts belong in the console.
 *
 * A separate shell from (platform) rather than a section inside it, because
 * nothing under here is scoped to one business. Who may be here is checked
 * once, on the server; every page below inherits it.
 */
export default async function AgencyLayout({ children }: { children: React.ReactNode }) {
    const session = await auth();
    if (!session?.user?.id) redirect("/login");
    const userId = session.user.id;

    const [scope, openSessionId] = await Promise.all([resolveScope(), currentStaffOrganizationId()]);

    // Read from the database, not the token, so taking somebody off a team
    // shuts this view at once instead of whenever a session happens to refresh.
    if (!scope) redirect("/dashboard/executive");
    if (scope.kind === "platform") redirect("/console");

    // A lapsed agency is shut for its own team, like its businesses. /billing
    // stands outside every shell, and is where it subscribes again.
    if (scope.via === "member" && !evaluateAccess(scope.agency).allowed) {
        redirect("/billing");
    }

    const [openSession, ownBusiness] = await Promise.all([
        openSessionId
            ? prisma.organization.findUnique({
                  where: { id: openSessionId },
                  select: { id: true, name: true, agencyId: true },
              })
            : Promise.resolve(null),
        // A business the account belongs to in its own right, if it has one.
        prisma.membership.findFirst({
            where: { userId },
            orderBy: { createdAt: "asc" },
            select: { organization: { select: { name: true } } },
        }),
    ]);
    // A cookie naming a business this account may no longer open is not a
    // session; the business screens would ignore it, so this does too.
    const sessionReachable = openSession
        ? (await businessReach(userId, openSession.id, openSession.agencyId)) !== null
        : false;

    // Where "back to the business screens" actually leads: the business open
    // from above, else the account's own, else nowhere. The business screens
    // resolve in the same order, so the name shown is the one that opens.
    const backTo =
        openSession && sessionReachable
            ? openSession.name
            : scope.via === "member"
              ? ownBusiness?.organization.name ?? null
              : null;

    const standing =
        scope.via === "platform"
            ? standingLabel({ platform: scope.platformAdmin ? "admin" : "staff" })
            : standingLabel({ agency: scope.admin ? "admin" : "user" });

    return (
        <ToastProvider>
            <ConfirmProvider>
                <div className="flex h-screen w-full overflow-hidden bg-background text-foreground bg-[url('/grid-pattern.svg')] bg-cover">
                    <div className="absolute inset-0 bg-background/90 z-0 pointer-events-none" />
                    <div className="relative z-10 flex w-full h-full">
                        <MobileNavProvider>
                        <MobileNavDrawer>
                            <AgencySidebar
                                variant="agency"
                                title={scope.agency.name}
                                user={session.user}
                                access={{ admin: scope.admin, permissions: scope.permissions }}
                                standing={standing}
                                backTo={backTo}
                            />
                        </MobileNavDrawer>
                        <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
                            <Header />
                            <main className="flex-1 overflow-y-auto p-4 md:p-6 scrollbar-hide">
                                {scope.via === "platform" && (
                                    <div className="mb-6">
                                        <SupportAgencyNotice agencyName={scope.agency.name} />
                                    </div>
                                )}
                                {scope.via === "member" && scope.admin && (
                                    <div className="mb-6 empty:hidden">
                                        <TrialBanner access={evaluateAccess(scope.agency)} href="/agency/billing" />
                                    </div>
                                )}
                                {openSession && sessionReachable && (
                                    <div className="mb-6">
                                        <OpenSessionNotice businessName={openSession.name} />
                                    </div>
                                )}
                                {children}
                            </main>
                        </div>
                        </MobileNavProvider>
                    </div>
                </div>
            </ConfirmProvider>
        </ToastProvider>
    );
}
