"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Activity, Brain, Users, ClipboardList, Layers, BookOpen } from "lucide-react";
import clsx from "clsx";

const navItems = [
    { name: "Executive", href: "/dashboard/executive", icon: LayoutDashboard },
    { name: "Operations", href: "/dashboard/operations", icon: Activity },
    { name: "Business Units", href: "/dashboard/phases", icon: Layers },
    { name: "Academy (LMS)", href: "/academy", icon: BookOpen }, // Added LMS
    { name: "Intelligence", href: "/dashboard/intelligence", icon: Brain },
    { name: "Employees", href: "/business/employees", icon: Users },
    { name: "Tasks", href: "/business/tasks", icon: ClipboardList },
];

export default function Sidebar({ user }: { user?: any }) {
    const pathname = usePathname();

    return (
        <aside className="w-64 border-r border-white/10 glass-panel flex flex-col z-20">
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
                        <img src={user.image} alt={user.name} className="w-8 h-8 rounded-full" />
                    ) : (
                        <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">
                            {user?.name?.[0] || "U"}
                        </div>
                    )}
                    <div className="overflow-hidden">
                        <p className="text-sm font-medium truncate">{user?.name || "Guest"}</p>
                        <p className="text-xs text-white/50 truncate capitalize">{user?.role || "User"}</p>
                    </div>
                </div>
                <form action={async () => {
                    // Dynamic import to avoid cycles or client/server issues if actions imported directly
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
