"use client";

import { useEffect, useState } from "react";
import { ScrollText, LogIn, LogOut, Pencil, Crown, Globe, Ban, ShieldAlert } from "lucide-react";
import { useToast } from "@/components/ui/Toast";
import { isMasterRole } from "@/lib/roles";
import { AccessLogRowsSkeleton, AgencyAccessLogSkeleton } from "@/components/skeletons/PageSkeletons";
import { ACCESS_LOG_STANDFIRST } from "./standfirst";

interface Person {
    id: string;
    name: string | null;
    email: string;
    role: string;
}

interface Entry {
    id: string;
    action: string;
    method: string | null;
    path: string | null;
    /** What the change said, with secrets blanked out. Null for older lines. */
    detail: string | null;
    createdAt: string;
    staffUser: Person;
    /** Null for a change to the platform itself rather than to one business. */
    organization: { id: string; name: string } | null;
}

const ACTION_STYLES: Record<string, { style: string; icon: typeof LogIn; label: string }> = {
    enter: { style: "bg-amber-400/15 text-amber-200 border-amber-400/30", icon: LogIn, label: "entered" },
    leave: { style: "bg-white/10 text-white/60 border-white/20", icon: LogOut, label: "left" },
    write: { style: "bg-red-400/15 text-red-300 border-red-400/30", icon: Pencil, label: "changed" },
    // Somebody tried something their permissions do not cover. Nothing happened.
    denied: { style: "bg-white/5 text-white/70 border-white/25 border-dashed", icon: Ban, label: "refused" },
};

/**
 * What EcoFusion staff have done inside customers' businesses, and to the
 * platform itself.
 *
 * The point of the trail is that it can be read, not merely that it is
 * written. A support session that nobody ever looks at is the same as no
 * record at all, so this is a page rather than a table somebody has to know
 * how to query. The master account has no limits anywhere in the app, and
 * this is where that is answered for: every change it makes lands here.
 */
export default function AccessLogPage() {
    const [entries, setEntries] = useState<Entry[]>([]);
    const [people, setPeople] = useState<Person[]>([]);
    const [loading, setLoading] = useState(true);
    // Only the first load draws the whole page as a skeleton. After that the
    // filters stay on screen and only the lines below them wait.
    const [loadedOnce, setLoadedOnce] = useState(false);
    const [who, setWho] = useState("");
    const [changesOnly, setChangesOnly] = useState(false);
    const [denied, setDenied] = useState<string | null>(null);
    const toast = useToast();

    useEffect(() => {
        let cancelled = false;
        setLoading(true);
        (async () => {
            try {
                const query = new URLSearchParams();
                if (who) query.set("staffUserId", who);
                if (changesOnly) query.set("changesOnly", "1");
                const res = await fetch(`/api/admin/access-log?${query}`);
                if (res.status === 403) {
                    if (!cancelled) setDenied((await res.json()).error ?? "You cannot read the Access Log.");
                    return;
                }
                if (!res.ok) {
                    toast.error("Could not load the access trail");
                    return;
                }
                const data = await res.json();
                if (cancelled) return;
                setEntries(data.entries ?? []);
                setPeople(data.people ?? []);
            } catch {
                if (!cancelled) toast.error("Could not load the access trail");
            } finally {
                if (!cancelled) {
                    setLoading(false);
                    setLoadedOnce(true);
                }
            }
        })();
        return () => {
            cancelled = true;
        };
    }, [toast, who, changesOnly]);

    if (denied) {
        return (
            <div className="max-w-2xl">
                <h1 className="text-2xl font-bold text-white flex items-center gap-2 mb-2">
                    <ScrollText size={22} className="text-accent" />
                    Access Log
                </h1>
                <p className="px-4 py-3 rounded-xl border border-white/10 bg-white/[0.03] text-sm text-white/60 flex items-center gap-2">
                    <ShieldAlert size={15} className="text-white/40 shrink-0" />
                    {denied}
                </p>
            </div>
        );
    }

    if (!loadedOnce) return <AgencyAccessLogSkeleton standfirst={ACCESS_LOG_STANDFIRST} />;

    return (
        <div>
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-white flex items-center gap-2">
                    <ScrollText size={22} className="text-accent" />
                    Access Log
                </h1>
                <p className="text-white/50 mt-1 max-w-2xl text-sm">{ACCESS_LOG_STANDFIRST}</p>
            </div>

            <div className="flex flex-wrap items-center gap-3 mb-4">
                <select
                    value={who}
                    onChange={(e) => setWho(e.target.value)}
                    className="px-3 py-2 bg-black/20 border border-white/10 rounded-lg text-sm text-white"
                >
                    <option value="" className="bg-neutral-900">Everyone</option>
                    {people.map((person) => (
                        <option key={person.id} value={person.id} className="bg-neutral-900">
                            {person.name ?? person.email}
                            {isMasterRole(person.role) ? " (Master)" : ""}
                        </option>
                    ))}
                </select>
                <label className="flex items-center gap-2 text-sm text-white/60 cursor-pointer select-none">
                    <input
                        type="checkbox"
                        checked={changesOnly}
                        onChange={(e) => setChangesOnly(e.target.checked)}
                        className="accent-accent"
                    />
                    Changes only
                </label>
            </div>

            {loading ? (
                <AccessLogRowsSkeleton />
            ) : entries.length === 0 ? (
                <p className="text-white/40 text-sm py-8 text-center">
                    {who || changesOnly
                        ? "Nothing recorded that matches."
                        : "Nobody has entered a customer's business yet."}
                </p>
            ) : (
                <div className="space-y-2">
                    {entries.map((entry) => {
                        const kind = ACTION_STYLES[entry.action] ?? ACTION_STYLES.write;
                        const Icon = kind.icon;
                        const master = isMasterRole(entry.staffUser.role);
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
                                    <div className="text-white text-sm truncate flex items-center gap-1.5">
                                        <span className="font-medium truncate">
                                            {entry.staffUser.name ?? entry.staffUser.email}
                                        </span>
                                        {master && (
                                            <span className="px-1.5 py-0.5 rounded border border-accent/30 bg-accent/10 text-accent text-[10px] flex items-center gap-1 shrink-0">
                                                <Crown size={10} />
                                                Master
                                            </span>
                                        )}
                                        <span className="text-white/40"> &middot; </span>
                                        {entry.organization ? (
                                            <span className="truncate">{entry.organization.name}</span>
                                        ) : (
                                            <span className="text-white/60 flex items-center gap-1 shrink-0">
                                                <Globe size={12} />
                                                Platform
                                            </span>
                                        )}
                                    </div>
                                    {entry.detail && (
                                        <div className="text-xs text-white/70 mt-0.5 truncate" title={entry.detail}>
                                            {entry.detail}
                                        </div>
                                    )}
                                    {entry.path && (
                                        <div className="text-[11px] text-white/35 mt-0.5 truncate font-mono">
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
