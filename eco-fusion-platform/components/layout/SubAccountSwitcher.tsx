"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronsUpDown, Search, Undo2, Pin, PinOff } from "lucide-react";
import { useToast } from "@/components/ui/Toast";

interface SubAccount {
    id: string;
    name: string;
    location: string | null;
}

/** Businesses this staff account reached lately, newest first. */
const RECENT_KEY = "ecofusion-recent-sub-accounts";
/** Businesses this staff account keeps at the top of the list. */
const PINNED_KEY = "ecofusion-pinned-sub-accounts";
const RECENT_LIMIT = 4;

/**
 * Both halves of browser storage, wrapped.
 *
 * Recents and pins are one person's convenience on one machine, so they live
 * in the browser rather than the database - losing them costs nothing, and
 * they should not follow somebody onto a shared screen. Storage throws in a
 * private window and in some embedded views, and a switcher that cannot open
 * because of a remembered list is worse than one with no memory at all.
 */
function readList(key: string): string[] {
    try {
        const raw = localStorage.getItem(key);
        const parsed = raw ? JSON.parse(raw) : [];
        return Array.isArray(parsed) ? parsed.filter((v) => typeof v === "string") : [];
    } catch {
        return [];
    }
}

function writeList(key: string, value: string[]): void {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch {
        // Nothing to do and nothing worth saying: the switcher works without it.
    }
}

/**
 * The account this session is looking at, and the way to another one.
 *
 * Staff reach every business on the platform, so the question "whose data am I
 * about to change" has to be answerable without reading the page. The name
 * sits at the top of the sidebar at all times, and switching is what opens a
 * support session - the same deliberate, recorded act as entering from the sub
 * account list, reached in one click instead of three.
 *
 * Everyone else belongs to exactly one business. They see its name and nothing
 * to press, because there is nowhere else for them to go.
 */
export default function SubAccountSwitcher({
    business,
    isStaff,
}: {
    business: { name: string; location: string | null } | null;
    isStaff: boolean;
}) {
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [accounts, setAccounts] = useState<SubAccount[]>([]);
    const [loading, setLoading] = useState(false);
    const [entering, setEntering] = useState<string | null>(null);
    const [recent, setRecent] = useState<string[]>([]);
    const [pinned, setPinned] = useState<string[]>([]);
    const panelRef = useRef<HTMLDivElement>(null);
    const router = useRouter();
    const toast = useToast();

    useEffect(() => {
        setRecent(readList(RECENT_KEY));
        setPinned(readList(PINNED_KEY));
    }, []);

    // Closing on an outside click rather than on blur, so moving between the
    // search box and the list does not shut the panel mid-search.
    useEffect(() => {
        if (!open) return;
        function onPointerDown(event: MouseEvent) {
            if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        }
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") setOpen(false);
        }
        document.addEventListener("mousedown", onPointerDown);
        document.addEventListener("keydown", onKeyDown);
        return () => {
            document.removeEventListener("mousedown", onPointerDown);
            document.removeEventListener("keydown", onKeyDown);
        };
    }, [open]);

    const load = useCallback(
        async (q: string) => {
            setLoading(true);
            try {
                const res = await fetch(`/api/admin/organizations?q=${encodeURIComponent(q)}`);
                if (!res.ok) {
                    toast.error("Could not load the sub account list");
                    return;
                }
                const data = await res.json();
                setAccounts(data.organizations ?? []);
            } catch {
                toast.error("Could not load the sub account list");
            } finally {
                setLoading(false);
            }
        },
        [toast]
    );

    useEffect(() => {
        if (!open) return;
        const id = setTimeout(() => load(search), 250);
        return () => clearTimeout(id);
    }, [open, search, load]);

    const byId = useMemo(() => new Map(accounts.map((a) => [a.id, a])), [accounts]);

    // Pinned first, then the rest in the order the server sent them. A pinned
    // business is not repeated further down.
    const ordered = useMemo(() => {
        const pins = pinned.map((id) => byId.get(id)).filter((a): a is SubAccount => Boolean(a));
        const pinSet = new Set(pins.map((a) => a.id));
        return [...pins, ...accounts.filter((a) => !pinSet.has(a.id))];
    }, [accounts, byId, pinned]);

    const recentAccounts = useMemo(
        () =>
            recent
                .map((id) => byId.get(id))
                .filter((a): a is SubAccount => Boolean(a))
                .slice(0, RECENT_LIMIT),
        [byId, recent]
    );

    function togglePin(id: string) {
        const next = pinned.includes(id) ? pinned.filter((p) => p !== id) : [id, ...pinned];
        setPinned(next);
        writeList(PINNED_KEY, next);
    }

    async function switchTo(account: SubAccount) {
        setEntering(account.id);
        try {
            const res = await fetch("/api/admin/session", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ organizationId: account.id }),
            });
            if (!res.ok) {
                toast.error((await res.json()).error ?? "Could not open that business");
                return;
            }
            const next = [account.id, ...recent.filter((r) => r !== account.id)].slice(0, RECENT_LIMIT);
            setRecent(next);
            writeList(RECENT_KEY, next);
            setOpen(false);
            router.push("/dashboard/executive");
            router.refresh();
        } finally {
            setEntering(null);
        }
    }

    const label = business?.name ?? "No business";
    const initial = label[0]?.toUpperCase() ?? "?";

    const identity = (
        <>
            <div className="w-9 h-9 rounded-lg bg-accent/20 flex items-center justify-center text-accent font-bold shrink-0">
                {initial}
            </div>
            <div className="min-w-0 flex-1 text-left">
                <p className="text-sm font-semibold text-white truncate">{label}</p>
                {business?.location && (
                    <p className="text-xs text-white/45 truncate">{business.location}</p>
                )}
            </div>
        </>
    );

    // One business, nowhere else to go: the name is information, not a control.
    if (!isStaff) {
        return (
            <div className="mx-4 flex items-center gap-3 px-3 py-2.5 rounded-xl bg-black/20 border border-white/10">
                {identity}
            </div>
        );
    }

    return (
        <div className="relative mx-4" ref={panelRef}>
            <button
                type="button"
                onClick={() => setOpen((o) => !o)}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl bg-black/20 border border-white/10 hover:border-white/25 transition-colors"
            >
                {identity}
                <ChevronsUpDown size={15} className="text-white/40 shrink-0" />
            </button>

            {/*
             * Opens beside the sidebar rather than inside it. A list of every
             * customer on the platform does not fit in a 256px column, and
             * pushing it down the sidebar would bury the navigation underneath
             * the thing meant to be read at a glance.
             */}
            {open && (
                <div className="absolute left-full top-0 ml-4 w-92 z-50 rounded-xl border border-white/10 bg-neutral-900 shadow-2xl overflow-hidden">
                    <div className="p-3 border-b border-white/10">
                        <div className="relative">
                            <Search
                                size={15}
                                className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30"
                            />
                            <input
                                autoFocus
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search for a sub-account"
                                className="w-full pl-9 pr-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/30 text-sm"
                            />
                        </div>
                    </div>

                    <Link
                        href="/agency/sub-accounts"
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-2 px-4 py-3 text-sm text-accent hover:bg-white/5 transition-colors"
                    >
                        <Undo2 size={15} />
                        Switch to Agency View
                    </Link>

                    <div className="max-h-80 overflow-y-auto custom-scrollbar border-t border-white/10">
                        {loading && accounts.length === 0 ? (
                            <p className="text-white/40 text-sm px-4 py-6 text-center">Loading...</p>
                        ) : accounts.length === 0 ? (
                            <p className="text-white/40 text-sm px-4 py-6 text-center">
                                No businesses match that.
                            </p>
                        ) : (
                            <>
                                {!search && recentAccounts.length > 0 && (
                                    <>
                                        <p className="px-4 pt-3 pb-1 text-[11px] tracking-wider text-white/35">
                                            RECENT
                                        </p>
                                        {recentAccounts.map((account) => (
                                            <Row
                                                key={`recent-${account.id}`}
                                                account={account}
                                                busy={entering === account.id}
                                                onSelect={() => switchTo(account)}
                                            />
                                        ))}
                                    </>
                                )}

                                <p className="px-4 pt-3 pb-1 text-[11px] tracking-wider text-white/35">
                                    ALL ACCOUNTS
                                </p>
                                {ordered.map((account) => (
                                    <Row
                                        key={account.id}
                                        account={account}
                                        busy={entering === account.id}
                                        pinned={pinned.includes(account.id)}
                                        onPin={() => togglePin(account.id)}
                                        onSelect={() => switchTo(account)}
                                    />
                                ))}
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

function Row({
    account,
    busy,
    pinned,
    onPin,
    onSelect,
}: {
    account: SubAccount;
    busy: boolean;
    pinned?: boolean;
    onPin?: () => void;
    onSelect: () => void;
}) {
    return (
        <div className="group flex items-center gap-3 px-4 py-2.5 hover:bg-white/5 transition-colors">
            <button
                type="button"
                onClick={onSelect}
                disabled={busy}
                className="flex items-center gap-3 flex-1 min-w-0 text-left disabled:opacity-50"
            >
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white/70 text-sm font-semibold shrink-0">
                    {account.name[0]?.toUpperCase() ?? "?"}
                </div>
                <div className="min-w-0">
                    <p className="text-sm text-white truncate">{account.name}</p>
                    <p className="text-xs text-white/40 truncate">
                        {busy ? "Opening..." : account.location ?? "No location on record"}
                    </p>
                </div>
            </button>

            {onPin && (
                <button
                    type="button"
                    onClick={onPin}
                    title={pinned ? "Unpin" : "Pin to the top"}
                    className={
                        pinned
                            ? "text-accent shrink-0"
                            : "text-white/25 hover:text-white/60 opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
                    }
                >
                    {pinned ? <PinOff size={14} /> : <Pin size={14} />}
                </button>
            )}
        </div>
    );
}
