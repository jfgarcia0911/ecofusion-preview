import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import UserMenu from "./UserMenu";
import NotificationBell from "./NotificationBell";
import { MobileNavButton } from "./MobileNav";

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
        <header data-tour="header" className="h-16 border-b border-white/10 glass-panel flex items-center justify-between px-4 md:px-6 z-10">
            {/* A search box used to sit here that searched nothing. The slot now
                holds the menu button on small screens and is empty otherwise,
                which keeps the bell and the account menu on the right. */}
            <div className="flex items-center gap-4">
                <MobileNavButton />
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
