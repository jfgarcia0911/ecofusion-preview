"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CreditCard, KeyRound, LayoutDashboard, Activity, Brain, Users, ClipboardList, Layers, BookOpen, HelpCircle, Calendar, GraduationCap, Package, ShoppingCart, Settings, Bot, SlidersHorizontal, Building2 } from "lucide-react";
import clsx from "clsx";

interface User {
    name?: string | null;
    image?: string | null;
    /**
     * The account's standing on the platform, not within a farm. Only
     * EcoFusion staff hold 'admin' here; a customer's own administrator is an
     * admin in `orgRole` and an ordinary 'user' in this one.
     */
    role?: string;
    /** Role held in the current organization: owner | admin | manager | member. */
    orgRole?: string;
}

/** Reachable only by EcoFusion staff, and only ever about other farms. */
const staffNavItems = [
    { name: "Farms", href: "/admin/farms", icon: Building2, tourId: undefined },
];

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

// Admin-only navigation items
const adminNavItems = [
    { name: "Team Access", href: "/business/team", icon: KeyRound, tourId: "nav-team" },
    { name: "Employees", href: "/business/employees", icon: Users, tourId: "nav-employees" },
    { name: "Training Mgmt", href: "/admin/training", icon: GraduationCap, tourId: "nav-training" },
    { name: "Scheduling", href: "/admin/scheduling", icon: Calendar, tourId: "nav-scheduling" },
    { name: "Integrations", href: "/settings/integrations", icon: Settings, tourId: "nav-integrations" },
];

// User-only navigation items
const userNavItems = [
    { name: "My Schedule", href: "/schedules", icon: Calendar, tourId: "nav-schedules" },
];

// Common items for all users
const commonNavItems = [
    { name: "Preferences", href: "/settings/preferences", icon: SlidersHorizontal, tourId: "nav-preferences" },
    { name: "Tasks", href: "/business/tasks", icon: ClipboardList, tourId: "nav-tasks" },
    { name: "Billing", href: "/billing", icon: CreditCard, tourId: "nav-billing" },
    { name: "Help Center", href: "/help", icon: HelpCircle, tourId: "nav-help" },
];

export default function Sidebar({ user }: { user?: User }) {
    const pathname = usePathname() ?? '';
    // What someone may do is decided by their role in this farm, not by the
    // legacy global role: an owner is an administrator of their own farm.
    const role = user?.orgRole ?? user?.role;
    const isAdmin = role === 'owner' || role === 'admin' || role === 'manager';

    // Staff is a fact about the account itself, so it is read from the global
    // role rather than from `role` above, which resolves to the farm.
    const isStaff = user?.role === 'admin';

    // Build nav items based on role
    const navItems = [
        ...baseNavItems,
        ...(isAdmin ? adminNavItems : userNavItems),
        ...commonNavItems,
        ...(isStaff ? staffNavItems : []),
    ];

    return (
        <aside data-tour="sidebar" className="w-64 border-r border-white/10 glass-panel flex flex-col z-20">
            <div className="p-6">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                    EcoFusion
                </h1>
                <p className="text-xs text-white/50 tracking-wider mt-1">INTEGRATED PLATFORM</p>
            </div>
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
