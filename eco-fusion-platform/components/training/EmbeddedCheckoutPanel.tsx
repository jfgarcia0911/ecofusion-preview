"use client";

import { useEffect, useRef, useState } from "react";
import { loadStripe, type StripeEmbeddedCheckout } from "@stripe/stripe-js";
import { ArrowLeft, Loader2, Lock, X } from "lucide-react";
import { StripeFrameSkeleton } from "@/components/skeletons/PageSkeletons";

/**
 * Stripe's checkout, drawn inside the EcoFusion page.
 *
 * The frame is Stripe's: the itemised summary of what is being bought, the
 * total, and the card form. Card details go straight from it to Stripe and
 * never pass through EcoFusion. Around it the page stays EcoFusion's, with a
 * way back to the shop and a way to call the purchase off.
 *
 * Backing out is the parent's to handle, because it has to tell the server:
 * a checkout merely hidden could still be paid from another tab.
 *
 * Drawn before the payment exists: with no `clientSecret` yet it holds
 * Stripe's outline in place, so the page is already where it will be and only
 * the form arrives.
 */
export default function EmbeddedCheckoutPanel({
    clientSecret,
    publishableKey,
    leaving,
    onBack,
    onCancel,
    onComplete,
}: {
    /** Null while the server is still preparing the payment. */
    clientSecret: string | null;
    publishableKey: string | null;
    /** True while the parent is closing the checkout with the server. */
    leaving: boolean;
    /** Back to the shop, keeping what was chosen. */
    onBack: () => void;
    /** Call the purchase off and empty the basket. */
    onCancel: () => void;
    /** Stripe says the payment went through without leaving the page. */
    onComplete: () => void;
}) {
    const mountRef = useRef<HTMLDivElement>(null);
    const [ready, setReady] = useState(false);
    const [failed, setFailed] = useState(false);

    // Held in a ref so a new callback from the parent does not tear down and
    // rebuild the checkout halfway through somebody typing a card number.
    const completeRef = useRef(onComplete);
    useEffect(() => {
        completeRef.current = onComplete;
    }, [onComplete]);

    useEffect(() => {
        let cancelled = false;
        let checkout: StripeEmbeddedCheckout | null = null;
        if (!clientSecret || !publishableKey) return;

        (async () => {
            try {
                const stripe = await loadStripe(publishableKey);
                if (!stripe || cancelled) return;
                checkout = await stripe.initEmbeddedCheckout({
                    clientSecret,
                    onComplete: () => completeRef.current(),
                });
                if (cancelled || !mountRef.current) {
                    checkout.destroy();
                    return;
                }
                checkout.mount(mountRef.current);
                setReady(true);
            } catch (error) {
                console.error("Could not load Stripe checkout:", error);
                if (!cancelled) setFailed(true);
            }
        })();

        return () => {
            cancelled = true;
            // Stripe allows one embedded checkout on a page at a time, so the
            // old one has to go before a new one can be drawn.
            checkout?.destroy();
        };
    }, [clientSecret, publishableKey]);

    return (
        <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
                <button
                    type="button"
                    onClick={onBack}
                    disabled={leaving}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-white/70 hover:text-white hover:bg-white/10 disabled:opacity-40 transition-colors"
                >
                    {leaving ? <Loader2 size={15} className="motion-safe:animate-spin" /> : <ArrowLeft size={15} />}
                    Back to shop
                </button>
                <span className="text-xs text-white/40 flex items-center gap-1.5">
                    <Lock size={12} />
                    Secure payment by Stripe. Your card details never reach EcoFusion.
                </span>
                <button
                    type="button"
                    onClick={onCancel}
                    disabled={leaving}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-white/60 hover:text-red-300 hover:bg-red-400/10 disabled:opacity-40 transition-colors"
                >
                    <X size={15} />
                    Cancel purchase
                </button>
            </div>

            {/*
             * Stripe draws on white whatever the page around it looks like,
             * so the frame gets a light card of its own rather than floating
             * on the dark background.
             */}
            <div className="relative rounded-2xl overflow-hidden bg-white min-h-[640px]">
                {!ready && !failed && (
                    <div className="absolute inset-0">
                        <StripeFrameSkeleton />
                    </div>
                )}
                {failed && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center px-6">
                        <p className="text-neutral-800 font-medium">The checkout could not be loaded.</p>
                        <p className="text-sm text-neutral-500">
                            Nothing was charged. Go back to the shop and try again.
                        </p>
                    </div>
                )}
                <div ref={mountRef} />
            </div>
        </div>
    );
}
