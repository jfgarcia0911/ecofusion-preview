"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { ShoppingCart } from "lucide-react";
import { useToast } from "@/components/ui/Toast";
import EmbeddedCheckoutPanel from "@/components/training/EmbeddedCheckoutPanel";
import {
    basketFrom,
    basketUrl,
    confirmCoursePayment,
    type Basket,
} from "@/components/training/checkout-client";

interface OpenCheckout {
    clientSecret: string;
    publishableKey: string;
    sessionId: string;
}

const SHOP = "/business/classes";

/**
 * Paying for a basket of courses, on a page of its own.
 *
 * The shop sends the buyer here the moment Buy is pressed, with the basket in
 * the address, so the page they are going to is on screen at once and Stripe's
 * outline fills it while the payment is being prepared. Stripe's form then
 * arrives in the space already held for it.
 *
 * Every way out tells the server first, so the Stripe session cannot be paid
 * later from somewhere else - including one that was still being prepared
 * when the buyer left, which is closed as soon as it arrives.
 */
export default function CheckoutPage() {
    const router = useRouter();
    const toast = useToast();
    const [checkout, setCheckout] = useState<OpenCheckout | null>(null);
    const [leaving, setLeaving] = useState(false);
    const basket = useRef<Basket>({ courses: [], packages: [] });
    const started = useRef(false);
    const abandoned = useRef(false);

    const cancelSession = useCallback(async (sessionId: string) => {
        const res = await fetch("/api/training/purchases/cancel", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ sessionId }),
        });
        const { outcome } = await res.json().catch(() => ({ outcome: null }));
        return outcome as string | null;
    }, []);

    useEffect(() => {
        // Once, even where React runs effects twice to check them: a second
        // run would open a second Stripe session for the same basket.
        if (started.current) return;
        started.current = true;

        basket.current = basketFrom(window.location.search);
        if (!basket.current.courses.length && !basket.current.packages.length) {
            router.replace(SHOP);
            return;
        }

        (async () => {
            try {
                const res = await fetch("/api/training/purchases", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        courseIds: basket.current.courses,
                        packages: basket.current.packages,
                        embedded: true,
                    }),
                });
                const data = await res.json();
                if (!res.ok) {
                    toast.error(data.error ?? "Could not start the purchase");
                    router.replace(basketUrl(SHOP, basket.current));
                    return;
                }
                if (data.checkout) {
                    // The buyer left while this was being prepared: close it
                    // rather than leave a payable session behind them.
                    if (abandoned.current) {
                        await cancelSession(data.checkout.sessionId);
                        return;
                    }
                    setCheckout(data.checkout);
                    return;
                }
                if (data.url) {
                    // No key for the form inside the page, so Stripe's own.
                    window.location.assign(data.url);
                    return;
                }
                toast.success(`${data.added} free course${data.added === 1 ? "" : "s"} added`);
                router.replace(SHOP);
            } catch {
                toast.error("Could not start the purchase");
                router.replace(basketUrl(SHOP, basket.current));
            }
        })();
    }, [router, toast, cancelSession]);

    async function leave(keepBasket: boolean) {
        setLeaving(true);
        abandoned.current = true;
        let alreadyPaid = false;
        try {
            if (checkout) {
                const outcome = await cancelSession(checkout.sessionId);
                alreadyPaid = outcome === "unlocked" || outcome === "already";
            }
        } finally {
            if (alreadyPaid) {
                toast.success("That payment had already gone through. Your courses are ready.");
                router.push(SHOP);
            } else {
                toast.info(
                    keepBasket
                        ? "Back in the shop. Nothing was charged."
                        : "Purchase cancelled. Nothing was charged."
                );
                router.push(keepBasket ? basketUrl(SHOP, basket.current) : SHOP);
            }
        }
    }

    async function complete() {
        if (!checkout) return;
        setLeaving(true);
        await confirmCoursePayment(checkout.sessionId, toast);
        router.push(SHOP);
    }

    return (
        <div className="w-full space-y-6">
            <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent flex items-center gap-3">
                    <ShoppingCart className="text-accent" />
                    Checkout
                </h1>
                <p className="text-white/50 mt-1 max-w-2xl">
                    Check what you are buying and pay below. Your courses unlock as soon as the
                    payment is confirmed.
                </p>
            </div>
            <EmbeddedCheckoutPanel
                clientSecret={checkout?.clientSecret ?? null}
                publishableKey={checkout?.publishableKey ?? null}
                leaving={leaving}
                onBack={() => leave(true)}
                onCancel={() => leave(false)}
                onComplete={complete}
            />
        </div>
    );
}
