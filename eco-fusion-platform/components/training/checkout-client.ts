/**
 * The browser's side of buying courses, shared by the shop and the checkout
 * page so both say the same thing about the same payment.
 */

type Toaster = {
    success: (message: string) => unknown;
    info: (message: string) => unknown;
    error: (message: string) => unknown;
};

/**
 * Ask the server, which asks Stripe, whether a checkout was paid, and tell the
 * buyer what came back. Never throws.
 */
export async function confirmCoursePayment(sessionId: string, toast: Toaster): Promise<void> {
    try {
        const res = await fetch("/api/training/purchases/confirm", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ sessionId }),
        });
        const { outcome } = await res.json();
        if (outcome === "unlocked" || outcome === "already") {
            toast.success("Payment received. Your new courses are ready.");
        } else if (outcome === "unpaid") {
            toast.info("Your payment has not gone through yet. The courses unlock as soon as it does.");
        } else {
            toast.error(
                "We could not confirm that payment. If you were charged, contact EcoFusion support."
            );
        }
    } catch {
        toast.error("Could not confirm your payment. Refresh to try again.");
    }
}

/** What is in a basket: courses by id, packages by level. */
export interface Basket {
    courses: string[];
    packages: string[];
}

/**
 * A page address carrying a basket. The checkout page reads it to know what
 * to charge for, and the shop reads it on the way back so going back does not
 * lose what was chosen.
 */
export function basketUrl(path: string, basket: Basket): string {
    const query = new URLSearchParams();
    basket.courses.forEach((id) => query.append("course", id));
    basket.packages.forEach((level) => query.append("package", level));
    const text = query.toString();
    return text ? `${path}?${text}` : path;
}

/** The basket an address carries, or an empty one. */
export function basketFrom(search: string): Basket {
    const query = new URLSearchParams(search);
    return { courses: query.getAll("course"), packages: query.getAll("package") };
}
