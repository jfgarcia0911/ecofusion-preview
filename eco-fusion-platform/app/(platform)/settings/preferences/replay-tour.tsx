"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Compass } from "lucide-react";
import { useToast } from "@/components/ui/Toast";

/**
 * Run the welcome tour again.
 *
 * The tour has always ended by saying it can be restarted from preferences,
 * and the help centre by saying you had to ask support. Neither was true and
 * they contradicted each other; the tour was a thing you saw once and then
 * could not see again.
 *
 * Marking onboarding incomplete is all it takes - the platform layout reads
 * that flag on the next render and starts the tour, the same way it does for
 * somebody signing in for the first time.
 */
export default function ReplayTour() {
    const [starting, setStarting] = useState(false);
    const router = useRouter();
    const toast = useToast();

    async function replay() {
        setStarting(true);
        try {
            const res = await fetch("/api/user/onboarding", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ complete: false }),
            });
            if (!res.ok) {
                toast.error("Could not start the tour");
                return;
            }
            // The tour points at the sidebar of the working screens, so it is
            // started from one of them rather than from inside settings.
            router.push("/dashboard/executive");
            router.refresh();
        } catch {
            toast.error("Could not reach the server. Try again.");
        } finally {
            setStarting(false);
        }
    }

    return (
        <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <h2 className="text-white font-bold">Welcome tour</h2>
                    <p className="text-sm text-white/45 mt-1 max-w-md">
                        The walkthrough you saw when you first signed in. Run it again to
                        see what each part of the sidebar is for.
                    </p>
                </div>
                <button
                    type="button"
                    onClick={replay}
                    disabled={starting}
                    className="shrink-0 text-sm flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 text-white/70 hover:bg-white/5 hover:text-white disabled:opacity-50 transition-colors"
                >
                    <Compass size={15} />
                    {starting ? "Starting..." : "Run the tour"}
                </button>
            </div>
        </div>
    );
}
