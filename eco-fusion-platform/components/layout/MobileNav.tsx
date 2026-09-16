"use client";

/**
 * The sidebar on small screens.
 *
 * The sidebars are a fixed 16rem column, which on a phone left the page itself
 * a sliver. Below md the column is taken out of the flow and opened as a drawer
 * from a menu button in the header; from md up nothing changes.
 *
 * The provider sits around both the header and the sidebar, since the button
 * lives in one and the drawer in the other.
 */

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const DRAWER_ID = "mobile-nav";

interface MobileNavState {
    open: boolean;
    setOpen: (open: boolean) => void;
}

const MobileNavContext = createContext<MobileNavState | null>(null);

export function MobileNavProvider({ children }: { children: React.ReactNode }) {
    const pathname = usePathname() ?? "";
    // Remembers which page the drawer was opened on rather than a plain flag.
    // Following a link changes the path, so the drawer reads as closed on the
    // next page without an effect having to notice the navigation.
    const [openOn, setOpenOn] = useState<string | null>(null);
    const open = openOn === pathname;

    const setOpen = useCallback(
        (next: boolean) => setOpenOn(next ? pathname : null),
        [pathname],
    );

    const value = useMemo(() => ({ open, setOpen }), [open, setOpen]);
    return <MobileNavContext.Provider value={value}>{children}</MobileNavContext.Provider>;
}

/** The header's menu button. Hidden from md up, where the sidebar is always shown. */
export function MobileNavButton() {
    const ctx = useContext(MobileNavContext);
    if (!ctx) return null;
    return (
        <button
            type="button"
            onClick={() => ctx.setOpen(!ctx.open)}
            aria-label={ctx.open ? "Close menu" : "Open menu"}
            aria-expanded={ctx.open}
            aria-controls={DRAWER_ID}
            className="md:hidden p-2 -ml-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
        >
            {ctx.open ? <X size={20} /> : <Menu size={20} />}
        </button>
    );
}

/** Wraps a sidebar: in the flow from md up, a drawer over the page below it. */
export function MobileNavDrawer({ children }: { children: React.ReactNode }) {
    const ctx = useContext(MobileNavContext);
    const open = ctx?.open ?? false;
    const setOpen = ctx?.setOpen;
    const drawerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!open || !setOpen) return;
        // Focus moves into the drawer so keyboard users land in the menu they
        // just opened rather than behind it.
        drawerRef.current?.focus();
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };
        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, [open, setOpen]);

    // A link to the page already open doesn't change the path, so the drawer
    // closes on any link click as well.
    const onClick = (e: React.MouseEvent) => {
        if (open && (e.target as HTMLElement).closest("a")) setOpen?.(false);
    };

    return (
        <>
            {open && (
                <div
                    className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm md:hidden"
                    onClick={() => setOpen?.(false)}
                    aria-hidden="true"
                />
            )}
            <div
                id={DRAWER_ID}
                ref={drawerRef}
                tabIndex={-1}
                onClick={onClick}
                className={clsx(
                    // Closed on a small screen it is also invisible, not just
                    // moved off-screen, so Tab can't wander into links nobody
                    // can see.
                    "fixed inset-y-0 left-0 z-40 flex bg-background outline-none transition-[transform,visibility] duration-200",
                    "md:static md:z-auto md:flex md:translate-x-0 md:visible md:bg-transparent md:transition-none",
                    open ? "translate-x-0 visible" : "-translate-x-full invisible",
                )}
            >
                {children}
            </div>
        </>
    );
}
