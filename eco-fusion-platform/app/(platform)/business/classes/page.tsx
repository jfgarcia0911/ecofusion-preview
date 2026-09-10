"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
    BookOpen,
    Check,
    ChevronRight,
    Clock,
    Gift,
    GraduationCap,
    Loader2,
    Receipt,
    Search,
    ShieldAlert,
    ShoppingCart,
    Trash2,
} from "lucide-react";
import { useToast } from "@/components/ui/Toast";
import { useConfirm } from "@/components/ui/ConfirmDialog";
import { groupByCategory, hours } from "@/lib/course-groups";
import { formatPrice } from "@/lib/course-price";
import { BusinessClassesSkeleton } from "@/components/skeletons/PageSkeletons";

interface ShopCourse {
    id: string;
    code: string;
    title: string;
    category: string;
    duration: number;
    isActive: boolean;
    lessonCount: number;
    /** Null: not on sale yet. Only the master account is ever sent these. */
    priceCents: number | null;
    held: { source: "purchase" | "free" | "gift"; since: string } | null;
}

interface Purchase {
    id: string;
    status: "paid" | "refunded";
    amountCents: number;
    currency: string;
    paidAt: string | null;
    refundedAt: string | null;
    createdAt: string;
    purchasedBy: { name: string | null; email: string } | null;
    items: { courseCode: string; courseTitle: string; priceCents: number }[];
}

interface Shop {
    currency: string;
    paymentsReady: boolean;
    isMaster: boolean;
    courses: ShopCourse[];
    purchases: Purchase[];
}

const SOURCE_LABEL: Record<NonNullable<ShopCourse["held"]>["source"], string> = {
    purchase: "Bought",
    free: "Free",
    gift: "Gift from EcoFusion",
};

/**
 * The courses this business holds, and the shop it buys more from.
 *
 * A course the business holds appears in its Academy and can be assigned from
 * Training Management. Buying is the owner's alone. Paid courses go through
 * Stripe and unlock only once Stripe confirms the payment, which is checked
 * again here when the owner comes back so they are not left waiting on it.
 *
 * The master account, entering as the owner, can also give courses free and
 * take any course back. Both are written to the business's access record.
 */
export default function BusinessClassesPage() {
    const [shop, setShop] = useState<Shop | null>(null);
    const [refused, setRefused] = useState(false);
    const [basket, setBasket] = useState<Set<string>>(new Set());
    const [search, setSearch] = useState("");
    const [open, setOpen] = useState<Set<string>>(new Set());
    const [busy, setBusy] = useState<"buy" | "give" | null>(null);
    const [removing, setRemoving] = useState<string | null>(null);
    const [confirming, setConfirming] = useState(false);
    const toast = useToast();
    const confirmAction = useConfirm();

    const load = useCallback(async () => {
        const res = await fetch("/api/training/shop");
        if (res.status === 403) {
            setRefused(true);
            return;
        }
        if (!res.ok) throw new Error("load");
        setShop(await res.json());
    }, []);

    useEffect(() => {
        let cancelled = false;
        (async () => {
            // Back from Stripe. The address says which checkout, and the
            // server asks Stripe whether it was paid; nothing is taken on the
            // page's word. The address is cleaned first so a reload does not
            // ask again.
            const returned = new URLSearchParams(window.location.search).get("purchase");
            if (returned) window.history.replaceState(null, "", "/business/classes");

            if (returned === "cancelled") {
                toast.info("Checkout cancelled. Nothing was charged.");
            } else if (returned?.startsWith("cs_")) {
                setConfirming(true);
                try {
                    const res = await fetch("/api/training/purchases/confirm", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ sessionId: returned }),
                    });
                    const { outcome } = await res.json();
                    if (cancelled) return;
                    if (outcome === "unlocked" || outcome === "already") {
                        toast.success("Payment received. Your new courses are ready.");
                    } else if (outcome === "unpaid") {
                        toast.info(
                            "Your payment has not gone through yet. The courses unlock as soon as it does."
                        );
                    } else {
                        toast.error(
                            "We could not confirm that payment. If you were charged, contact EcoFusion support."
                        );
                    }
                } catch {
                    if (!cancelled) toast.error("Could not confirm your payment. Refresh to try again.");
                } finally {
                    if (!cancelled) setConfirming(false);
                }
            }

            try {
                await load();
            } catch {
                if (!cancelled) toast.error("Could not load the course shop");
            }
        })();
        return () => {
            cancelled = true;
        };
    }, [load, toast]);

    const held = useMemo(() => (shop?.courses ?? []).filter((c) => c.held), [shop]);
    const forSale = useMemo(() => (shop?.courses ?? []).filter((c) => !c.held && c.isActive), [shop]);

    const term = search.trim().toLowerCase();
    const groups = useMemo(
        () =>
            groupByCategory(
                forSale.filter(
                    (c) =>
                        term === "" ||
                        c.title.toLowerCase().includes(term) ||
                        c.code.toLowerCase().includes(term)
                )
            ),
        [forSale, term]
    );

    const chosen = forSale.filter((c) => basket.has(c.id));
    const total = chosen.reduce((sum, c) => sum + (c.priceCents ?? 0), 0);
    const unpriced = chosen.filter((c) => c.priceCents === null).length;
    const paidCount = chosen.filter((c) => (c.priceCents ?? 0) > 0).length;

    function toggle(id: string) {
        setBasket((current) => {
            const next = new Set(current);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            return next;
        });
    }

    function setGroup(list: ShopCourse[], on: boolean) {
        setBasket((current) => {
            const next = new Set(current);
            list.forEach((c) => (on ? next.add(c.id) : next.delete(c.id)));
            return next;
        });
    }

    function toggleOpen(category: string) {
        setOpen((current) => {
            const next = new Set(current);
            if (next.has(category)) next.delete(category);
            else next.add(category);
            return next;
        });
    }

    async function buy() {
        if (!chosen.length) return;
        setBusy("buy");
        try {
            const res = await fetch("/api/training/purchases", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ courseIds: chosen.map((c) => c.id) }),
            });
            const data = await res.json();
            if (!res.ok) {
                toast.error(data.error ?? "Could not start the purchase");
                return;
            }
            if (data.url) {
                // Off to Stripe. Anything free in the basket is already
                // unlocked; the rest unlocks when the payment is confirmed.
                window.location.assign(data.url);
                return;
            }
            toast.success(`${data.added} free course${data.added === 1 ? "" : "s"} added`);
            setBasket(new Set());
            await load();
        } finally {
            setBusy((b) => (b === "buy" ? null : b));
        }
    }

    async function give() {
        if (!chosen.length) return;
        setBusy("give");
        try {
            const res = await fetch("/api/training/gifts", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ courseIds: chosen.map((c) => c.id) }),
            });
            const data = await res.json();
            if (!res.ok) {
                toast.error(data.error ?? "Could not give those courses");
                return;
            }
            toast.success(`Gave ${data.given} course${data.given === 1 ? "" : "s"} free`);
            setBasket(new Set());
            await load();
        } finally {
            setBusy(null);
        }
    }

    async function takeBack(course: ShopCourse) {
        const bought = course.held?.source === "purchase";
        const ok = await confirmAction({
            title: `Take back ${course.code}?`,
            message: bought
                ? "This business paid for it. Taking it back does not refund them; a full refund in Stripe returns the money and takes the course back by itself."
                : "It disappears from this business's Academy. Anyone who finished it keeps that record.",
            confirmLabel: "Take it back",
            tone: "danger",
        });
        if (!ok) return;
        setRemoving(course.id);
        try {
            const res = await fetch(`/api/training/gifts?courseId=${encodeURIComponent(course.id)}`, {
                method: "DELETE",
            });
            if (!res.ok) {
                toast.error((await res.json()).error ?? "Could not take it back");
                return;
            }
            toast.success(`${course.code} taken back`);
            await load();
        } finally {
            setRemoving(null);
        }
    }

    if (refused) {
        return (
            <div className="max-w-lg mx-auto mt-20 text-center">
                <ShieldAlert className="mx-auto text-white/30 mb-4" size={32} />
                <h1 className="text-xl font-bold text-white mb-2">Bought by the owner</h1>
                <p className="text-white/50 text-sm">
                    Which courses this business has is the owner&apos;s decision. You can take any of
                    them from the{" "}
                    <Link href="/academy" className="text-accent hover:underline">
                        Academy
                    </Link>
                    .
                </p>
            </div>
        );
    }

    if (!shop) return <BusinessClassesSkeleton confirming={confirming} />;

    const money = (cents: number) => formatPrice(cents, shop.currency);

    return (
        <div className="max-w-5xl space-y-6 pb-24">
            <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent flex items-center gap-3">
                    <GraduationCap className="text-accent" />
                    Classes
                </h1>
                <p className="text-white/50 mt-1 max-w-2xl">
                    Buy EcoFusion courses for your business. Each is paid for once and stays yours.
                    Your courses appear in the Academy and can be assigned from Training Management.
                </p>
            </div>

            {!shop.paymentsReady && (
                <p className="px-4 py-3 rounded-xl border border-amber-400/25 bg-amber-400/10 text-sm text-amber-100">
                    Payments are not switched on yet, so paid courses cannot be bought right now. Free
                    courses can still be added.
                </p>
            )}

            {/* What the business already has. */}
            <section className="bg-white/5 border border-white/5 rounded-2xl p-5">
                <div className="flex items-center justify-between gap-3 mb-4">
                    <h2 className="text-lg font-bold text-white">Your courses</h2>
                    <span className="text-xs text-white/40">{held.length}</span>
                </div>
                {held.length === 0 ? (
                    <div className="py-8 text-center">
                        <BookOpen className="mx-auto text-white/20 mb-3" size={26} />
                        <p className="text-white/50 text-sm">
                            Your business has no EcoFusion courses yet. Choose some from the shop below.
                        </p>
                    </div>
                ) : (
                    <div className="space-y-1 max-h-[40vh] overflow-y-auto custom-scrollbar pr-1">
                        {held.map((course) => (
                            <div
                                key={course.id}
                                className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white/[0.02] border border-white/5"
                            >
                                <Check size={14} className="text-accent shrink-0" />
                                <span className="font-mono text-[11px] text-white/40 shrink-0 w-16">
                                    {course.code}
                                </span>
                                <span className="text-sm text-white flex-1 min-w-0 truncate">{course.title}</span>
                                <span className="text-[11px] text-white/35 shrink-0 hidden sm:inline">
                                    {course.category}
                                </span>
                                <span className="text-[10px] px-1.5 py-0.5 rounded border border-white/10 bg-white/[0.04] text-white/55 shrink-0">
                                    {course.held ? SOURCE_LABEL[course.held.source] : ""}
                                </span>
                                {shop.isMaster && (
                                    <button
                                        type="button"
                                        onClick={() => takeBack(course)}
                                        disabled={removing === course.id}
                                        title="Take this course back"
                                        className="p-1.5 rounded-lg text-white/40 hover:text-red-300 hover:bg-red-400/10 disabled:opacity-40 shrink-0"
                                    >
                                        {removing === course.id ? (
                                            <Loader2 size={14} className="motion-safe:animate-spin" />
                                        ) : (
                                            <Trash2 size={14} />
                                        )}
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </section>

            {/* The shop. */}
            <section className="bg-white/5 border border-white/5 rounded-2xl p-5">
                <div className="flex items-center justify-between gap-3 mb-4">
                    <h2 className="text-lg font-bold text-white flex items-center gap-2">
                        <ShoppingCart size={18} className="text-accent" />
                        Course shop
                    </h2>
                    <span className="text-xs text-white/40">{forSale.length} available</span>
                </div>

                <div className="relative mb-3">
                    <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search by name or code"
                        className="w-full pl-9 pr-3 py-2 bg-black/20 border border-white/10 rounded-xl text-white placeholder:text-white/25 text-sm"
                    />
                </div>

                {forSale.length === 0 ? (
                    <p className="text-white/40 text-sm py-10 text-center">
                        {held.length ? "Your business has every course on sale." : "No courses are on sale yet."}
                    </p>
                ) : groups.length === 0 ? (
                    <p className="text-white/40 text-sm py-10 text-center">
                        Nothing matches &ldquo;{search.trim()}&rdquo;.
                    </p>
                ) : (
                    <div className="space-y-2">
                        {groups.map(({ category, courses: list }) => {
                            const isOpen = term !== "" || open.has(category);
                            const count = list.filter((c) => basket.has(c.id)).length;
                            const all = count === list.length;
                            return (
                                <div
                                    key={category}
                                    className="rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden"
                                >
                                    <div className="flex items-center gap-2 px-3 py-2.5">
                                        <button
                                            type="button"
                                            onClick={() => toggleOpen(category)}
                                            disabled={term !== ""}
                                            className="flex items-center gap-2 flex-1 min-w-0 text-left disabled:cursor-default"
                                        >
                                            <ChevronRight
                                                size={15}
                                                className={`text-white/30 shrink-0 transition-transform ${isOpen ? "rotate-90" : ""}`}
                                            />
                                            <span className="text-sm font-semibold text-white truncate">{category}</span>
                                            <span className="text-xs text-white/30 shrink-0">
                                                {list.length} course{list.length === 1 ? "" : "s"}
                                                {count > 0 && <span className="text-accent"> · {count} chosen</span>}
                                            </span>
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setGroup(list, !all)}
                                            className="text-[11px] shrink-0 px-2.5 py-1 rounded-lg text-white/50 hover:text-white hover:bg-white/10 transition-colors"
                                        >
                                            {all ? "Clear" : "Select all"}
                                        </button>
                                    </div>

                                    {isOpen && (
                                        <div className="px-2 pb-2 space-y-1">
                                            {list.map((course) => {
                                                const on = basket.has(course.id);
                                                return (
                                                    <button
                                                        key={course.id}
                                                        type="button"
                                                        onClick={() => toggle(course.id)}
                                                        className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg border text-left transition-colors ${
                                                            on ? "border-accent/40 bg-accent/10" : "border-transparent hover:bg-white/5"
                                                        }`}
                                                    >
                                                        <span
                                                            className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border ${
                                                                on ? "bg-accent border-accent" : "border-white/25"
                                                            }`}
                                                        >
                                                            {on && <Check size={11} className="text-primary" strokeWidth={3} />}
                                                        </span>
                                                        <span className="font-mono text-[11px] text-white/40 shrink-0 w-16">
                                                            {course.code}
                                                        </span>
                                                        <span className="text-sm text-white flex-1 min-w-0 truncate">
                                                            {course.title}
                                                        </span>
                                                        <span className="text-[11px] text-white/35 shrink-0 hidden md:flex items-center gap-2">
                                                            <span>{course.lessonCount} lessons</span>
                                                            {course.duration > 0 && (
                                                                <span className="flex items-center gap-1">
                                                                    <Clock size={10} />
                                                                    {hours(course.duration)}
                                                                </span>
                                                            )}
                                                        </span>
                                                        <span
                                                            className={`text-sm font-semibold shrink-0 w-24 text-right tabular-nums ${
                                                                course.priceCents === null
                                                                    ? "text-white/30 font-normal text-xs"
                                                                    : course.priceCents === 0
                                                                      ? "text-accent"
                                                                      : "text-white"
                                                            }`}
                                                        >
                                                            {course.priceCents === null ? "Not for sale" : money(course.priceCents)}
                                                        </span>
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                )}
            </section>

            {/* What has been bought before. */}
            {shop.purchases.length > 0 && (
                <section className="bg-white/5 border border-white/5 rounded-2xl p-5">
                    <h2 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
                        <Receipt size={18} className="text-white/50" />
                        Purchase history
                    </h2>
                    <div className="space-y-2">
                        {shop.purchases.map((purchase) => (
                            <div
                                key={purchase.id}
                                className="flex items-start gap-4 px-4 py-3 rounded-xl bg-white/[0.02] border border-white/5"
                            >
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm text-white">
                                        {purchase.items.length} course{purchase.items.length === 1 ? "" : "s"}
                                        <span className="text-white/40">
                                            {" "}
                                            · {new Date(purchase.paidAt ?? purchase.createdAt).toLocaleDateString()}
                                            {purchase.purchasedBy &&
                                                ` · by ${purchase.purchasedBy.name ?? purchase.purchasedBy.email}`}
                                        </span>
                                    </p>
                                    <p className="text-xs text-white/45 mt-0.5 truncate">
                                        {purchase.items.map((item) => item.courseCode).join(", ")}
                                    </p>
                                </div>
                                <span className="text-sm font-semibold text-white tabular-nums shrink-0">
                                    {formatPrice(purchase.amountCents, purchase.currency)}
                                </span>
                                <span
                                    className={`text-[10px] px-1.5 py-0.5 rounded border shrink-0 ${
                                        purchase.status === "refunded"
                                            ? "border-white/15 bg-white/5 text-white/45"
                                            : "border-accent/30 bg-accent/10 text-accent"
                                    }`}
                                >
                                    {purchase.status === "refunded" ? "Refunded" : "Paid"}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* The basket, pinned to the bottom while anything is in it. */}
            {chosen.length > 0 && (
                <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-30 w-[min(44rem,calc(100%-3rem))] rounded-2xl border border-white/10 bg-neutral-900/95 backdrop-blur shadow-2xl px-5 py-3.5 flex items-center gap-3">
                    <div className="flex-1 min-w-0">
                        <p className="text-sm text-white">
                            {chosen.length} course{chosen.length === 1 ? "" : "s"} chosen
                            <span className="text-white/40"> · </span>
                            <span className="font-semibold">{money(total)}</span>
                        </p>
                        {unpriced > 0 && (
                            <p className="text-[11px] text-amber-200/80">
                                {unpriced} not for sale yet: give {unpriced === 1 ? "it" : "them"} instead, or unselect
                            </p>
                        )}
                    </div>
                    <button
                        type="button"
                        onClick={() => setBasket(new Set())}
                        className="px-3 py-2 text-white/60 hover:text-white rounded-lg text-sm"
                    >
                        Clear
                    </button>
                    {shop.isMaster && (
                        <button
                            type="button"
                            onClick={give}
                            disabled={busy !== null}
                            title="Give these to this business without payment"
                            className="px-4 py-2 bg-white/10 border border-white/10 text-white text-sm rounded-lg hover:bg-white/20 disabled:opacity-40 flex items-center gap-2"
                        >
                            {busy === "give" ? <Loader2 size={15} className="motion-safe:animate-spin" /> : <Gift size={15} />}
                            Give free
                        </button>
                    )}
                    <button
                        type="button"
                        onClick={buy}
                        disabled={busy !== null || unpriced > 0 || (paidCount > 0 && !shop.paymentsReady)}
                        className="px-5 py-2 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90 disabled:opacity-40 flex items-center gap-2"
                    >
                        {busy === "buy" && <Loader2 size={15} className="motion-safe:animate-spin" />}
                        {paidCount > 0 ? `Buy for ${money(total)}` : "Add free courses"}
                    </button>
                </div>
            )}
        </div>
    );
}
