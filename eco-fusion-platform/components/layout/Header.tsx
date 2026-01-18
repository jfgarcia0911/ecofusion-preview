import { Bell, Search } from "lucide-react";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import UserMenu from "./UserMenu";
import NotificationBell from "./NotificationBell";

export default async function Header() {
    const session = await auth();

    // Fetch unread notification count
    let unreadCount = 0;
    if (session?.user?.id) {
        unreadCount = await prisma.notification.count({
            where: {
                userId: session.user.id,
                read: false,
            },
        });
    }

    return (
        <header data-tour="header" className="h-16 border-b border-white/10 glass-panel flex items-center justify-between px-6 z-10">
            <div className="flex items-center gap-4 w-96">
                <div className="relative w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" size={16} />
                    <input
                        type="text"
                        placeholder="Search ecosystem..."
                        className="w-full bg-black/20 border border-white/5 rounded-full pl-10 pr-4 py-1.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-accent/50 transition-all"
                    />
                </div>
            </div>
            <div className="flex items-center gap-4">
                <NotificationBell initialCount={unreadCount} />
                {session?.user && (
                    <div data-tour="user-menu">
                        <UserMenu user={session.user} />
                    </div>
                )}
            </div>
        </header>
    );
}
