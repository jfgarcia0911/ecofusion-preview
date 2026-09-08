"use client";

import { useEffect, useState } from "react";
import { ScrollText, LogIn, LogOut, Pencil } from "lucide-react";
import { useToast } from "@/components/ui/Toast";

interface Entry {
    id: string;
    action: string;
    method: string | null;
    path: string | null;
    createdAt: string;
    staffUser: { name: string | null; email: string };
    organization: { id: string; name: string };
}

const ACTION_STYLES: Record<string, { style: string; icon: typeof LogIn; label: string }> = {
    enter: { style: "bg-amber-400/15 text-amber-200 border-amber-400/30", icon: LogIn, label: "entered" },
    leave: { style: "bg-white/10 text-white/60 border-white/20", icon: LogOut, label: "left" },
    write: { style: "bg-red-400/15 text-red-300 border-red-400/30", icon: Pencil, label: "changed" },
};

/**
 * What EcoFusion staff have done inside customers' businesses.
 *
 * The point of the trail is that it can be read, not merely that it is
 * written. A support session that nobody ever looks at is the same as no
 * record at all, so this is a page rather than a table somebody has to know
 * how to query.
 */
export default function AccessLogPage() {
    const [entries, setEntries] = useState<Entry[]>([]);
    const [loading, setLoading] = useState(true);
    const toast = useToast();

    useEffect(() => {
        let cancelled = false;
        (async () => {
            try {
                const res = await fetch("/api/admin/access-log");
                if (!res.ok) {
                    toast.error("Could not load the access trail");
                    return;
                }
                const data = await res.json();
                if (!cancelled) setEntries(data.entries ?? []);
            } catch {
                toast.error("Could not load the access trail");
            } finally {
                if (!cancelled) setLoading(false);
            }
        })();
        return () => {
            cancelled = true;
        };
    }, [toast]);

    return (
        <div>
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-white flex items-center gap-2">
                    <ScrollText size={22} className="text-accent" />
                    Access Log
                </h1>
                <p className="text-white/50 mt-1 max-w-2xl text-sm">
                    Every time EcoFusion staff stepped into a customer&apos;s business, and every
                    change made while inside one. Written by the app and never deleted by it.
                </p>
            </div>

            {loading ? (
                <p className="text-white/40 text-sm py-8 text-center">Loading the trail...</p>
            ) : entries.length === 0 ? (
                <p className="text-white/40 text-sm py-8 text-center">
                    Nobody has entered a customer&apos;s business yet.
                </p>
            ) : (
                <div className="space-y-2">
                    {entries.map((entry) => {
                        const kind = ACTION_STYLES[entry.action] ?? ACTION_STYLES.write;
                        const Icon = kind.icon;
                        return (
                            <div
                                key={entry.id}
                                className="flex items-center gap-4 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10"
                            >
                                <span
                                    className={`px-2 py-0.5 rounded-full border text-[11px] flex items-center gap-1.5 shrink-0 ${kind.style}`}
                                >
                                    <Icon size={12} />
                                    {kind.label}
                                </span>

                                <div className="flex-1 min-w-0">
                                    <div className="text-white text-sm truncate">
                                        <span className="font-medium">
                                            {entry.staffUser.name ?? entry.staffUser.email}
                                        </span>
                                        <span className="text-white/40"> &middot; </span>
                                        {entry.organization.name}
                                    </div>
                                    {entry.path && (
                                        <div className="text-xs text-white/40 mt-0.5 truncate font-mono">
                                            {entry.method} {entry.path}
                                        </div>
                                    )}
                                </div>

                                <span className="text-xs text-white/40 shrink-0">
                                    {new Date(entry.createdAt).toLocaleString()}
                                </span>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
