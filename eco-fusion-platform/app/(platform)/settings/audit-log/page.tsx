"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ScrollText, LogIn, LogOut, PenLine, ShieldCheck } from "lucide-react";

interface Entry {
    id: string;
    action: string;
    method: string | null;
    path: string | null;
    createdAt: string;
    staffUser: { name: string | null; email: string } | null;
}

const ACTIONS: Record<string, { label: string; icon: typeof LogIn; tint: string }> = {
    enter: { label: "Opened this business", icon: LogIn, tint: "text-info" },
    leave: { label: "Left this business", icon: LogOut, tint: "text-white/40" },
    write: { label: "Made a change", icon: PenLine, tint: "text-warning" },
};

/**
 * Who from EcoFusion has been inside this business.
 *
 * Read-only by design, and by nobody's choice: the trail is written by the
 * platform and there is no route that deletes a line of it. A record the
 * subject can edit would not be worth showing them.
 */
export default function AuditLogPage() {
    const [entries, setEntries] = useState<Entry[]>([]);
    const [truncated, setTruncated] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const load = useCallback(async () => {
        try {
            const res = await fetch("/api/organization/audit-log");
            const data = await res.json();
            if (!res.ok) {
                setError(data.error ?? "Could not read the access record.");
                return;
            }
            setEntries(data.entries ?? []);
            setTruncated(Boolean(data.truncated));
        } catch {
            setError("Could not reach the server. Try again.");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        load();
    }, [load]);

    return (
        <div className="max-w-4xl space-y-6">
            <div>
                <Link
                    href="/settings"
                    className="inline-flex items-center gap-2 text-xs text-white/40 hover:text-white mb-4 transition-colors"
                >
                    <ArrowLeft size={12} /> Settings
                </Link>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                    Access Record
                </h1>
                <p className="text-white/50 mt-2">
                    Every time EcoFusion staff opened this business, and every change they
                    made while they were in it. Written by the platform and never edited.
                </p>
            </div>

            {error && (
                <p className="px-4 py-3 rounded-xl border border-red-400/25 bg-red-400/10 text-sm text-red-100">
                    {error}
                </p>
            )}

            {loading ? (
                <p className="text-white/40 text-sm py-10 text-center">Loading...</p>
            ) : entries.length === 0 && !error ? (
                <div className="flex flex-col items-center text-center py-16 rounded-2xl border border-white/10 bg-white/[0.02]">
                    <ShieldCheck size={36} className="text-accent/60 mb-4" />
                    <p className="text-white font-semibold">Nobody has been in</p>
                    <p className="text-sm text-white/45 mt-1.5 max-w-sm">
                        No EcoFusion staff has opened this business. If support ever does,
                        every visit and change will be listed here.
                    </p>
                </div>
            ) : (
                <div className="rounded-2xl border border-white/10 overflow-hidden">
                    {entries.map((entry) => {
                        const meta = ACTIONS[entry.action] ?? {
                            label: entry.action,
                            icon: ScrollText,
                            tint: "text-white/40",
                        };
                        return (
                            <div
                                key={entry.id}
                                className="flex items-start gap-3.5 px-5 py-4 border-b border-white/5 last:border-0 hover:bg-white/[0.02]"
                            >
                                <meta.icon size={16} className={`mt-0.5 shrink-0 ${meta.tint}`} />
                                <div className="min-w-0 flex-1">
                                    <p className="text-sm text-white">
                                        {meta.label}
                                        {entry.method && entry.path && (
                                            <span className="ml-2 font-mono text-xs text-white/35">
                                                {entry.method} {entry.path}
                                            </span>
                                        )}
                                    </p>
                                    <p className="text-xs text-white/40 mt-0.5">
                                        {entry.staffUser?.name || entry.staffUser?.email || "A staff account"}
                                    </p>
                                </div>
                                <time
                                    className="text-xs text-white/30 tabular-nums shrink-0"
                                    dateTime={entry.createdAt}
                                >
                                    {new Date(entry.createdAt).toLocaleString()}
                                </time>
                            </div>
                        );
                    })}
                </div>
            )}

            {truncated && (
                <p className="text-xs text-white/30 px-1">
                    Showing the 200 most recent entries.
                </p>
            )}
        </div>
    );
}
