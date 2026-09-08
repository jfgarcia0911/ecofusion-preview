"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Building2, Camera, ScrollText, ArrowLeft } from "lucide-react";
import clsx from "clsx";

interface User {
    name?: string | null;
    image?: string | null;
    email?: string | null;
}

/**
 * What EcoFusion does across every customer, rather than what any one customer
 * does.
 *
 * Kept apart from the business sidebar on purpose. The two answer different
 * questions - "how is this business doing" against "which businesses are
 * there" - and mixing them is how somebody ends up changing a customer's stock
 * levels while believing they are looking at their own.
 */
const agencyNavItems = [
    { name: "Sub Accounts", href: "/agency/sub-accounts", icon: Building2 },
    { name: "Snapshots", href: "/agency/snapshots", icon: Camera },
    { name: "Access Log", href: "/agency/access-log", icon: ScrollText },
];

export default function AgencySidebar({ user }: { user?: User }) {
    const pathname = usePathname() ?? "";

    return (
        <aside className="w-64 border-r border-white/10 glass-panel flex flex-col z-20">
            <div className="p-6">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                    EcoFusion
                </h1>
                <p className="text-xs text-amber-300/80 tracking-wider mt-1">AGENCY VIEW</p>
            </div>

            <nav className="flex-1 px-4 space-y-2 mt-4 overflow-y-auto custom-scrollbar">
                {agencyNavItems.map((item) => {
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
                            <item.icon
                                size={20}
                                className={isActive ? "text-accent" : "text-white/50 group-hover:text-white"}
                            />
                            <span className="font-medium">{item.name}</span>
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-white/10 space-y-4">
                <Link
                    href="/dashboard/executive"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/70 hover:bg-white/5 hover:text-white transition-all duration-200"
                >
                    <ArrowLeft size={18} className="text-white/50" />
                    <span className="font-medium text-sm">My business</span>
                </Link>

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
                        <p className="text-xs text-amber-300/70 truncate">EcoFusion staff</p>
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
