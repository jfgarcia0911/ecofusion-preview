"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/Toast";

/**
 * Renewing a certificate means taking the course again, so the learner's
 * progress in it is cleared first and the course opens at its first lesson.
 * A plain link opened a course already marked finished, with nothing to do.
 */
export default function RenewButton({
    courseId,
    label,
    className,
}: {
    courseId: string;
    label: string;
    className: string;
}) {
    const [busy, setBusy] = useState(false);
    const router = useRouter();
    const toast = useToast();

    async function renew() {
        setBusy(true);
        try {
            const res = await fetch(`/api/training/courses/${courseId}/renew`, { method: "POST" });
            const data = await res.json().catch(() => ({}));
            if (!res.ok) {
                toast.error(data.error ?? "Could not start the renewal. Try again.");
                return;
            }
            router.push(`/academy/course/${courseId}`);
        } catch {
            toast.error("Could not reach the server. Try again.");
        } finally {
            setBusy(false);
        }
    }

    return (
        <button type="button" onClick={renew} disabled={busy} className={`${className} disabled:opacity-60`}>
            {busy ? "Starting..." : label}
        </button>
    );
}
