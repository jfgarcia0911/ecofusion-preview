"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Building2,
    KeyRound,
    Camera,
    ScrollText,
    ArrowLeft,
    Tag,
    CreditCard,
    Briefcase,
} from "lucide-react";
import clsx from "clsx";
import { LinkSpinner } from "@/components/ui/Skeleton";
import { PERMISSIONS, type StaffPermission } from "@/lib/staff-permissions";

interface User {
    name?: string | null;
    image?: string | null;
    email?: string | null;
}

type NavItem = {
    name: string;
    href: string;
    icon: typeof Building2;
    /** Any one of these opens it. None listed: everybody here has it. */
    needs?: StaffPermission[];
    /** The team's admin alone. */
    adminOnly?: boolean;
};

const SNAPSHOT_PERMISSIONS = [
    PERMISSIONS.CAPTURE_SNAPSHOTS,
    PERMISSIONS.MANAGE_SNAPSHOTS,
    PERMISSIONS.APPLY_SNAPSHOTS,
];

/**
 * The two views above the businesses, which share a shell.
 *
 *   agency:  one agency's own view - its sub-accounts, its team, its snapshots,
 *            its trail and its plan.
 *   console: EcoFusion's, above every agency - the agencies themselves,
 *            EcoFusion's team, the templates every agency may apply, the whole
 *            platform's trail, and what each course costs.
 *
 * Kept apart from the business sidebar on purpose. The two answer different
 * questions - "how is this business doing" against "which businesses are
 * there" - and mixing them is how somebody ends up changing a customer's stock
 * levels while believing they are looking at their own. A section somebody
 * cannot use is left out rather than shown and refused.
 */
const NAV: Record<"agency" | "console", NavItem[]> = {
    agency: [
        { name: "Sub Accounts", href: "/agency/sub-accounts", icon: Building2 },
        { name: "Team Access", href: "/agency/team", icon: KeyRound, needs: [PERMISSIONS.SEE_TEAM] },
        { name: "Snapshots", href: "/agency/snapshots", icon: Camera, needs: SNAPSHOT_PERMISSIONS },
        { name: "Access Log", href: "/agency/access-log", icon: ScrollText, needs: [PERMISSIONS.READ_ACCESS_LOG] },
        { name: "Billing", href: "/agency/billing", icon: CreditCard, adminOnly: true },
    ],
    console: [
        { name: "Agencies", href: "/console/agencies", icon: Briefcase },
        { name: "Team Access", href: "/console/team", icon: KeyRound, needs: [PERMISSIONS.SEE_TEAM] },
        { name: "Templates", href: "/console/templates", icon: Camera, needs: SNAPSHOT_PERMISSIONS },
        { name: "Access Log", href: "/console/access-log", icon: ScrollText, needs: [PERMISSIONS.READ_ACCESS_LOG] },
        // What each course costs a business. Everyone on the team can see it,
        // since customers will ask them; changing it is a permission of its own.
        { name: "Course Prices", href: "/console/course-prices", icon: Tag },
    ],
};

export default function AgencySidebar({
    variant,
    title,
    user,
    access,
    standing,
    backTo,
}: {
    variant: "agency" | "console";
    /** Under the wordmark: the agency's name, or the console's. */
    title: string;
    user?: User;
    /** What this account may do here. The team's admin may do all of it. */
    access: { admin: boolean; permissions: StaffPermission[] };
    /** What to call this account: "Master account", "EcoFusion admin" and so on. */
    standing: string;
    /**
     * The business the business screens would open: one stepped into, or the
     * account's own. Null when there is neither, and then there is nowhere to
     * go back to.
     */
    backTo: string | null;
}) {
    const pathname = usePathname() ?? "";
    const visible = NAV[variant].filter((item) =>
        item.adminOnly
            ? access.admin
            : access.admin || !item.needs || item.needs.some((p) => access.permissions.includes(p))
    );

    return (
        <aside className="w-64 border-r border-white/10 glass-panel flex flex-col z-20">
            <div className="p-6">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                    EcoFusion
                </h1>
                <p className="text-xs text-amber-300/80 tracking-wider mt-1 truncate" title={title}>
                    {title.toUpperCase()}
                </p>
            </div>

            <nav className="flex-1 px-4 space-y-2 mt-4 overflow-y-auto custom-scrollbar">
                {visible.map((item) => {
                    const isActive = pathname.startsWith(item.href);
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={clsx(
                                // Border always present, transparent when
                                // inactive. Adding one on activation grows the
                                // box by two pixels and shifts every item below
                                // it; transition-all then animated the shift.
                                "flex items-center gap-3 px-4 py-3 rounded-xl border transition-colors duration-200 group",
                                isActive
                                    ? "bg-primary/50 text-accent shadow-lg border-accent/20"
                                    : "text-white/70 hover:bg-white/5 hover:text-white border-transparent"
                            )}
                        >
                            <item.icon
                                size={20}
                                className={isActive ? "text-accent" : "text-white/50 group-hover:text-white"}
                            />
                            <span className="font-medium">{item.name}</span>
                            <LinkSpinner className="ml-auto" />
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-white/10 space-y-4">
                {backTo ? (
                    <Link
                        href="/dashboard/executive"
                        title={`Back to ${backTo}`}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/70 hover:bg-white/5 hover:text-white transition-colors duration-200"
                    >
                        <ArrowLeft size={18} className="text-white/50 shrink-0" />
                        <span className="font-medium text-sm truncate">Back to {backTo}</span>
                    </Link>
                ) : (
                    // Nothing to go back to. Said, rather than offered as a
                    // link that returns straight here.
                    <p className="px-4 py-2 text-xs text-white/35 leading-relaxed">
                        {variant === "console"
                            ? "No business open. Open an agency from Agencies to work inside it."
                            : "No business open. Enter one from Sub Accounts to work inside it."}
                    </p>
                )}

                <div className="flex items-center gap-3 p-3 rounded-lg bg-black/20">
                    {user?.image ? (
                        <img src={user.image} alt={user.name ?? "User"} className="w-8 h-8 rounded-full" />
                    ) : (
                        <div className="w-8 h-8 rounded-full bg-amber-400/20 flex items-center justify-center text-amber-300 font-bold">
                            {user?.name?.[0] || "S"}
                        </div>
                    )}
                    <div className="overflow-hidden">
                        <p className="text-sm font-medium truncate">{user?.name || "Staff"}</p>
                        <p className="text-xs text-amber-300/70 truncate">{standing}</p>
                    </div>
                </div>

                <form
                    action={async () => {
                        const { logout } = await import("@/lib/actions");
                        await logout();
                    }}
                >
                    <button className="w-full text-xs text-white/40 hover:text-red-400 transition-colors flex items-center justify-center gap-2 py-2">
                        Sign Out
                    </button>
                </form>
            </div>
        </aside>
    );
}
