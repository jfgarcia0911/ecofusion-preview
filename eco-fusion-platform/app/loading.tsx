"use client";

import { usePathname } from "next/navigation";
import clsx from "clsx";
import { ArrowLeft, Building2, Camera, KeyRound, ScrollText, Tag } from "lucide-react";
import { SkeletonPage, SkeletonHeading, SkeletonRows } from "@/components/ui/Skeleton";
import {
    AgencyAccessLogSkeleton,
    AgencyCoursePricesSkeleton,
    AgencyListSkeleton,
    SubAccountsSkeleton,
    TeamAccessSkeleton,
} from "@/components/skeletons/PageSkeletons";
import { ExecutiveSkeleton } from "@/components/skeletons/DashboardSkeletons";
import { SUB_ACCOUNTS_STANDFIRST } from "./(agency)/agency/sub-accounts/standfirst";
import { COURSE_PRICES_STANDFIRST } from "./(agency)/agency/course-prices/standfirst";
import { ACCESS_LOG_STANDFIRST } from "./(agency)/agency/access-log/standfirst";

/**
 * What shows while a whole section is being swapped.
 *
 * The loading files inside each group sit under that group's layout, so they
 * cannot appear until the layout above them has finished: crossing from a
 * business screen to the agency view meant waiting on the agency layout, its
 * staff check and its lookups. This boundary sits above every layout, so it
 * paints the moment a navigation starts.
 *
 * It used to be one generic shape for everything, which is what made the
 * crossing into the agency view look wrong: a business-style sidebar and some
 * grey rows, then a different sidebar and a table. It is a client component
 * now so it can read where the navigation is going - the address has already
 * changed by the time this is on screen - and draw that: the agency's own
 * sidebar, the header, and the page being opened, in the shapes they arrive in.
 */

const AGENCY_ITEMS = [
    { name: "Sub Accounts", href: "/agency/sub-accounts", icon: Building2 },
    { name: "Team Access", href: "/agency/team", icon: KeyRound },
    { name: "Snapshots", href: "/agency/snapshots", icon: Camera },
    { name: "Course Prices", href: "/agency/course-prices", icon: Tag },
    { name: "Access Log", href: "/agency/access-log", icon: ScrollText },
];

/** The page being opened inside the agency view, as its own skeleton. */
function agencyPage(pathname: string) {
    if (pathname.startsWith("/agency/team")) return <TeamAccessSkeleton />;
    if (pathname.startsWith("/agency/course-prices")) {
        return <AgencyCoursePricesSkeleton standfirst={COURSE_PRICES_STANDFIRST} />;
    }
    if (pathname.startsWith("/agency/access-log")) {
        return <AgencyAccessLogSkeleton standfirst={ACCESS_LOG_STANDFIRST} />;
    }
    if (pathname.startsWith("/agency/snapshots")) {
        return (
            <AgencyListSkeleton
                title="Snapshots"
                standfirst="Business setups captured as templates."
                icon={Camera}
                rows={3}
                search={false}
            />
        );
    }
    // /agency itself only redirects here.
    return <SubAccountsSkeleton standfirst={SUB_ACCOUNTS_STANDFIRST} />;
}

/** The agency sidebar as it is drawn, with the section being opened marked. */
function AgencySidebarSkeleton({ pathname }: { pathname: string }) {
    const active = pathname === "/agency" ? "/agency/sub-accounts" : pathname;
    return (
        <aside className="w-64 border-r border-white/10 glass-panel flex-col z-20 shrink-0 hidden md:flex">
            <div className="p-6">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                    EcoFusion
                </h1>
                <p className="text-xs text-amber-300/80 tracking-wider mt-1">AGENCY VIEW</p>
            </div>
            <nav className="flex-1 px-4 space-y-2 mt-4">
                {AGENCY_ITEMS.map((item) => {
                    const isActive = active.startsWith(item.href);
                    return (
                        <div
                            key={item.href}
                            className={clsx(
                                "flex items-center gap-3 px-4 py-3 rounded-xl border",
                                isActive
                                    ? "bg-primary/50 text-accent shadow-lg border-accent/20"
                                    : "text-white/70 border-transparent"
                            )}
                        >
                            <item.icon size={20} className={isActive ? "text-accent" : "text-white/50"} />
                            <span className="font-medium">{item.name}</span>
                        </div>
                    );
                })}
            </nav>
            <div className="p-4 border-t border-white/10 space-y-4">
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/70">
                    <ArrowLeft size={18} className="text-white/50" />
                    <span className="font-medium text-sm">My business</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-black/20 animate-pulse">
                    <div className="w-8 h-8 rounded-full bg-amber-400/20" />
                    <div className="space-y-1.5">
                        <div className="h-3.5 w-24 rounded bg-white/10" />
                        <div className="h-3 w-20 rounded bg-amber-300/10" />
                    </div>
                </div>
                <div className="h-8" />
            </div>
        </aside>
    );
}

/** The header both shells carry, so the page below does not drop when it arrives. */
function HeaderSkeleton() {
    return (
        <div className="h-16 border-b border-white/10 glass-panel flex items-center justify-between px-6 shrink-0">
            <div className="h-[34px] w-96 rounded-full bg-black/20 border border-white/5" />
            <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-white/5" />
                <div className="w-8 h-8 rounded-full bg-white/5" />
            </div>
        </div>
    );
}

export default function RootLoading() {
    const pathname = usePathname() ?? "";
    const agency = pathname === "/agency" || pathname.startsWith("/agency/");

    return (
        <div className="flex h-screen w-full overflow-hidden bg-background text-foreground bg-[url('/grid-pattern.svg')] bg-cover">
            <div className="absolute inset-0 bg-background/90 z-0 pointer-events-none" />
            <div className="relative z-10 flex w-full h-full">
                {agency ? (
                    <AgencySidebarSkeleton pathname={pathname} />
                ) : (
                    // Where a business sidebar is about to be, so the page does
                    // not lurch sideways.
                    <div className="w-64 border-r border-white/10 glass-panel shrink-0 hidden md:block">
                        <div className="p-6 space-y-3 animate-pulse">
                            <div className="h-6 w-32 rounded bg-white/10" />
                            <div className="h-3 w-40 rounded bg-white/5" />
                        </div>
                        <div className="px-4 mt-8 space-y-2 animate-pulse">
                            {Array.from({ length: 9 }).map((_, row) => (
                                <div key={row} className="h-[50px] rounded-xl bg-white/[0.04]" />
                            ))}
                        </div>
                    </div>
                )}

                <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
                    <HeaderSkeleton />
                    <main className="flex-1 overflow-y-auto p-6 scrollbar-hide">
                        {agency ? (
                            agencyPage(pathname)
                        ) : pathname.startsWith("/dashboard/executive") ? (
                            // Where "My business" leads back to.
                            <ExecutiveSkeleton />
                        ) : (
                            <SkeletonPage>
                                <SkeletonHeading />
                                <SkeletonRows rows={5} />
                            </SkeletonPage>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
}
