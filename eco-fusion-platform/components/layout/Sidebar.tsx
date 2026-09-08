"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Activity, Brain, Users, ClipboardList, Layers, BookOpen, HelpCircle, Calendar, Package, ShoppingCart, Settings, Bot, Building2 } from "lucide-react";
import clsx from "clsx";
import SubAccountSwitcher from "@/components/layout/SubAccountSwitcher";
import SettingsNav from "@/components/layout/SettingsNav";
import { isSettingsPath } from "@/lib/settings-sections";
import { isPlatformRole } from "@/lib/roles";

interface User {
    name?: string | null;
    image?: string | null;
    /**
     * The account's standing on the platform, not within a business. Only
     * EcoFusion holds a platform role here; a customer's own supervisor is a
     * admin in `orgRole` and an ordinary 'user' in this one.
     */
    role?: string;
    /** Role held in the current organization: owner | admin | manager | member. */
    orgRole?: string;
}

// Base navigation items for all users
const baseNavItems = [
    { name: "Executive", href: "/dashboard/executive", icon: LayoutDashboard, tourId: "nav-executive" },
    { name: "Operations", href: "/dashboard/operations", icon: Activity, tourId: "nav-operations" },
    { name: "Business Units", href: "/dashboard/phases", icon: Layers, tourId: "nav-phases" },
    { name: "Inventory", href: "/inventory", icon: Package, tourId: "nav-inventory" },
    { name: "Sales", href: "/sales", icon: ShoppingCart, tourId: "nav-sales" },
    { name: "Academy (LMS)", href: "/academy", icon: BookOpen, tourId: "nav-academy" },
    { name: "Intelligence", href: "/dashboard/intelligence", icon: Brain, tourId: "nav-intelligence" },
    { name: "AI Assistant", href: "/assistant", icon: Bot, tourId: "nav-assistant" },
];

// Runs the working week: managers and administrators as well as the owner.
const adminNavItems = [
    { name: "Employees", href: "/business/employees", icon: Users, tourId: "nav-employees" },
    { name: "Scheduling", href: "/admin/scheduling", icon: Calendar, tourId: "nav-scheduling" },
];

// User-only navigation items
const userNavItems = [
    { name: "My Schedule", href: "/schedules", icon: Calendar, tourId: "nav-schedules" },
];

// Common items for all users
/**
 * Common items, and the one door behind which the rest now sit.
 *
 * Billing, team access, training management, integrations and the access
 * record were five entries in an already long sidebar, next to the screens
 * somebody opens every day. They are visited rarely and mostly by one person,
 * so /settings lists the ones the reader may actually open and the sidebar
 * carries a single line instead of five.
 */
/**
 * The way into the agency view, for EcoFusion staff only.
 *
 * That view has its own shell and its own sidebar, so nothing here reaches it
 * once you are inside. Without this line it could only be reached by typing
 * the address, which is how the sub account list, the snapshot library and the
 * class loader all sat finished and unreachable.
 */
// Only EcoFusion sees these, and only while inside a customer's business.
const staffNavItems = [
    { name: "Agency", href: "/agency", icon: Building2, tourId: undefined },
];

const commonNavItems = [
    { name: "Tasks", href: "/business/tasks", icon: ClipboardList, tourId: "nav-tasks" },
    // Lands on Sub Accounts rather than the index of settings. Opening
    // settings is nearly always about a particular business, and the first
    // question is which one; the sidebar already lists everything the index
    // would have offered, so a page of the same links in card form was a stop
    // on the way rather than a destination.
    { name: "Settings", href: "/settings", icon: Settings, tourId: "nav-settings" },
    { name: "Help Center", href: "/help", icon: HelpCircle, tourId: "nav-help" },
];

export default function Sidebar({
    user,
    business,
    isOwner = false,
}: {
    user?: User;
    /** The business these screens are showing, named at the top of the sidebar. */
    business?: { name: string; location: string | null } | null;
    /**
     * Whether this reader owns the business they are looking at. Decided by the
     * layout from the request's own context rather than from the session, which
     * still names the account's own membership while staff are inside somebody
     * else's business.
     */
    isOwner?: boolean;
}) {
    const pathname = usePathname() ?? '';
    // What someone may do is decided by their role in this business, not by the
    // legacy global role: an owner is an administrator of their own business.
    const role = user?.orgRole ?? user?.role;
    const isAdmin = role === 'owner' || role === 'supervisor' || role === 'manager';

    // Staff is a fact about the account itself, so it is read from the global
    // role rather than from `role` above, which resolves to the business.
    const isStaff = isPlatformRole(user?.role);

    // Build nav items based on role
    const navItems = [
        ...baseNavItems,
        ...(isAdmin ? adminNavItems : userNavItems),
        ...commonNavItems,
        ...(isStaff ? staffNavItems : []),
    ];

    // Inside settings the column becomes settings, rather than settings
    // becoming one more entry in a list of places to be. Nothing on screen
    // then invites somebody back into the working week by accident, and
    // leaving is the one button that says so.
    const inSettings = isSettingsPath(pathname);

    return (
        <aside data-tour="sidebar" className="w-64 border-r border-white/10 glass-panel flex flex-col z-20">
            <div className="p-6">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                    EcoFusion
                </h1>
                <p className="text-xs text-white/50 tracking-wider mt-1">INTEGRATED PLATFORM</p>
            </div>

            {/*
             * Whose business these screens are showing, said before anything
             * else is. For staff it is also the way into another one, which is
             * the same recorded act as entering from the sub account list.
             */}
            <SubAccountSwitcher
                business={business ?? null}
                isStaff={isStaff}
            />

            {inSettings ? (
                <div className="flex-1 flex flex-col mt-4 min-h-0">
                    <SettingsNav
                        pathname={pathname}
                        isOwner={isOwner}
                        businessName={business?.name}
                    />
                </div>
            ) : (
            <nav className="flex-1 px-4 space-y-2 mt-4 overflow-y-auto custom-scrollbar">
                {navItems.map((item) => {
                    const isActive = pathname.startsWith(item.href);
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            data-tour={item.tourId}
                            className={clsx(
                                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group",
                                isActive
                                    ? "bg-primary/50 text-accent shadow-lg border border-accent/20"
                                    : "text-white/70 hover:bg-white/5 hover:text-white"
                            )}
                        >
                            <item.icon size={20} className={isActive ? "text-accent" : "text-white/50 group-hover:text-white"} />
                            <span className="font-medium">{item.name}</span>
                        </Link>
                    );
                })}
            </nav>
            )}
            <div className="p-4 border-t border-white/10 space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-black/20">
                    {user?.image ? (
                        <img src={user.image} alt={user.name ?? "User"} className="w-8 h-8 rounded-full" />
                    ) : (
                        <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">
                            {user?.name?.[0] || "U"}
                        </div>
                    )}
                    <div className="overflow-hidden">
                        <p className="text-sm font-medium truncate">{user?.name || "Guest"}</p>
                        <p className="text-xs text-white/50 truncate capitalize">{role || "Member"}</p>
                    </div>
                </div>
                <form action={async () => {
                    const { logout } = await import("@/lib/actions");
                    await logout();
                }}>
                    <button className="w-full text-xs text-white/40 hover:text-red-400 transition-colors flex items-center justify-center gap-2 py-2">
                        Sign Out
                    </button>
                </form>
            </div>
        </aside>
    );
}
