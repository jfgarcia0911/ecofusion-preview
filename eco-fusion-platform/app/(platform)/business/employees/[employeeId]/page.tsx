"use client";

import { useCallback, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
    ArrowLeft, Mail, Phone, KeyRound, Calendar, GraduationCap, ShoppingCart,
    ShieldAlert, CheckCircle2, Clock,
} from "lucide-react";
import { EmployeeProfileSkeleton } from "@/components/skeletons/PageSkeletons";

const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

interface Profile {
    employee: {
        id: string;
        name: string;
        role: string;
        email: string;
        phone: string | null;
        createdAt: string;
        account: { id: string; email: string; image: string | null } | null;
    };
    hasLogin: boolean;
    orgRole: string | null;
    loginSince?: string | null;
    lastSignInAt: string | null;
    shifts: { id: string; title: string; dayOfWeek: number; startTime: string; endTime: string }[];
    training: {
        assigned: {
            id: string;
            status: string;
            dueDate: string | null;
            course: { code: string; title: string; isRequired: boolean };
        }[];
        completed: { id: string; completedAt: string; course: { code: string; title: string } }[];
    };
    sales: {
        count: number;
        total: number;
        recent: { id: string; saleDate: string; customerName: string | null; total: number }[];
    };
}

const money = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });

function when(value: string | null): string {
    if (!value) return "never";
    const days = Math.floor((Date.now() - new Date(value).getTime()) / 86_400_000);
    if (days <= 0) return "today";
    if (days === 1) return "yesterday";
    if (days < 30) return `${days} days ago`;
    if (days < 365) {
        const months = Math.round(days / 30);
        return `${months} month${months === 1 ? "" : "s"} ago`;
    }
    return "over a year ago";
}

/** A titled block, so the sections read alike without repeating the markup. */
function Section({
    title,
    icon: Icon,
    aside,
    children,
}: {
    title: string;
    icon: typeof Calendar;
    aside?: string;
    children: React.ReactNode;
}) {
    return (
        <section className="glass-card rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                    <Icon size={18} className="text-accent" />
                    {title}
                </h2>
                {aside && <span className="text-xs text-white/40">{aside}</span>}
            </div>
            {children}
        </section>
    );
}

/** What a section says when it has nothing, without sounding like a fault. */
function Empty({ children }: { children: React.ReactNode }) {
    return <p className="text-sm text-white/35 py-2">{children}</p>;
}

/**
 * One person, and what this business knows about their work.
 *
 * Almost everything here hangs off the login rather than the employee record,
 * so somebody without one has a name, an email and nothing else. The page says
 * that in one line at the top rather than showing four empty sections, which
 * would read as a person who has done nothing rather than a record with
 * nothing attached to it.
 */
export default function EmployeeProfilePage() {
    const params = useParams();
    const employeeId = params?.employeeId as string | undefined;

    const [profile, setProfile] = useState<Profile | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const load = useCallback(async () => {
        if (!employeeId) return;
        try {
            const res = await fetch(`/api/employees/${employeeId}`);
            if (!res.ok) {
                setError(
                    res.status === 404
                        ? "That employee is not on this business."
                        : (await res.json()).error ?? "Could not load that employee."
                );
                return;
            }
            setProfile(await res.json());
        } catch {
            setError("Could not load that employee.");
        } finally {
            setLoading(false);
        }
    }, [employeeId]);

    useEffect(() => {
        load();
    }, [load]);

    if (loading) return <EmployeeProfileSkeleton />;

    if (error || !profile) {
        return (
            <div className="max-w-4xl">
                <Link
                    href="/business/employees"
                    className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white mb-6 transition-colors"
                >
                    <ArrowLeft size={15} />
                    Employee Directory
                </Link>
                <div className="glass-card rounded-2xl p-12 text-center">
                    <ShieldAlert className="mx-auto text-white/25 mb-4" size={40} />
                    <p className="text-white/60">{error}</p>
                </div>
            </div>
        );
    }

    const { employee, hasLogin, orgRole, lastSignInAt, shifts, training, sales } = profile;

    return (
        <div className="max-w-4xl space-y-6">
            <Link
                href="/business/employees"
                className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors"
            >
                <ArrowLeft size={15} />
                Employee Directory
            </Link>

            <div className="glass-card rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center gap-5">
                <div className="w-20 h-20 rounded-full bg-accent/20 text-accent flex items-center justify-center text-2xl font-bold shrink-0">
                    {employee.name.charAt(0).toUpperCase()}
                </div>
                <div className="flex-1 min-w-0">
                    <h1 className="text-2xl font-bold text-white truncate">{employee.name}</h1>
                    <p className="text-accent font-medium">{employee.role}</p>
                    <div className="flex flex-wrap gap-x-5 gap-y-1 mt-2 text-sm text-white/50">
                        <span className="flex items-center gap-2">
                            <Mail size={14} className="text-white/30" />
                            {employee.email}
                        </span>
                        {employee.phone && (
                            <span className="flex items-center gap-2">
                                <Phone size={14} className="text-white/30" />
                                {employee.phone}
                            </span>
                        )}
                    </div>
                </div>

                <div className="sm:text-right shrink-0">
                    {hasLogin ? (
                        <>
                            <p className="text-sm text-white flex items-center sm:justify-end gap-2">
                                <CheckCircle2 size={15} className="text-accent" />
                                Last here {when(lastSignInAt)}
                            </p>
                            {orgRole && (
                                <p className="text-xs text-white/40 mt-1 capitalize">
                                    {orgRole} on this business
                                </p>
                            )}
                        </>
                    ) : (
                        <p className="text-sm text-white/40 flex items-center sm:justify-end gap-2">
                            <KeyRound size={15} />
                            No login
                        </p>
                    )}
                </div>
            </div>

            {!hasLogin ? (
                // Everything below hangs off an account. Saying so once beats
                // four empty panels that read as a person who has done nothing.
                <div className="glass-card rounded-2xl p-8 text-center">
                    <KeyRound className="mx-auto text-white/25 mb-4" size={36} />
                    <h2 className="text-lg font-bold text-white mb-2">
                        {employee.name.split(" ")[0]} has no login yet
                    </h2>
                    <p className="text-sm text-white/50 max-w-md mx-auto">
                        Shifts, training and sales are all recorded against a login, so there is
                        nothing to show here until they have one. Create it from the directory.
                    </p>
                    <Link
                        href="/business/employees"
                        className="inline-block mt-5 px-4 py-2 rounded-lg bg-accent/10 border border-accent/30 text-accent text-sm font-bold hover:bg-accent/20 transition-colors"
                    >
                        Back to the directory
                    </Link>
                </div>
            ) : (
                <>
                    <Section
                        title="Weekly shifts"
                        icon={Calendar}
                        aside={shifts.length ? `${shifts.length} this week` : undefined}
                    >
                        {shifts.length === 0 ? (
                            <Empty>No shifts assigned.</Empty>
                        ) : (
                            <div className="space-y-2">
                                {shifts.map((shift) => (
                                    <div
                                        key={shift.id}
                                        className="flex items-center gap-4 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10"
                                    >
                                        <span className="text-sm text-white/50 w-24 shrink-0">
                                            {DAYS[shift.dayOfWeek] ?? "—"}
                                        </span>
                                        <span className="text-sm text-white flex-1 min-w-0 truncate">
                                            {shift.title}
                                        </span>
                                        <span className="text-sm text-white/50 flex items-center gap-1.5 shrink-0 tabular-nums">
                                            <Clock size={13} />
                                            {shift.startTime}&ndash;{shift.endTime}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </Section>

                    <Section
                        title="Training"
                        icon={GraduationCap}
                        aside={`${training.completed.length} completed`}
                    >
                        {training.assigned.length === 0 && training.completed.length === 0 ? (
                            <Empty>No courses assigned or completed.</Empty>
                        ) : (
                            <div className="space-y-2">
                                {training.assigned.map((item) => {
                                    const done = training.completed.some(
                                        (c) => c.course.code === item.course.code
                                    );
                                    return (
                                        <div
                                            key={item.id}
                                            className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10"
                                        >
                                            <span className="font-mono text-[11px] text-white/40 w-20 shrink-0">
                                                {item.course.code}
                                            </span>
                                            <span className="text-sm text-white flex-1 min-w-0 truncate">
                                                {item.course.title}
                                            </span>
                                            {item.course.isRequired && !done && (
                                                <span className="text-[11px] text-amber-300 shrink-0">
                                                    required
                                                </span>
                                            )}
                                            <span
                                                className={`text-xs shrink-0 ${
                                                    done ? "text-accent" : "text-white/40"
                                                }`}
                                            >
                                                {done ? "Completed" : item.status}
                                            </span>
                                        </div>
                                    );
                                })}

                                {training.completed
                                    .filter(
                                        (c) =>
                                            !training.assigned.some(
                                                (a) => a.course.code === c.course.code
                                            )
                                    )
                                    .map((item) => (
                                        <div
                                            key={item.id}
                                            className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10"
                                        >
                                            <span className="font-mono text-[11px] text-white/40 w-20 shrink-0">
                                                {item.course.code}
                                            </span>
                                            <span className="text-sm text-white flex-1 min-w-0 truncate">
                                                {item.course.title}
                                            </span>
                                            <span className="text-xs text-accent shrink-0">
                                                Completed {when(item.completedAt)}
                                            </span>
                                        </div>
                                    ))}
                            </div>
                        )}
                    </Section>

                    <Section
                        title="Sales recorded"
                        icon={ShoppingCart}
                        aside={
                            sales.count
                                ? `${sales.count} sale${sales.count === 1 ? "" : "s"} · ${money.format(sales.total)}`
                                : undefined
                        }
                    >
                        {sales.recent.length === 0 ? (
                            <Empty>No sales recorded by this person.</Empty>
                        ) : (
                            <div className="space-y-2">
                                {sales.recent.map((sale) => (
                                    <div
                                        key={sale.id}
                                        className="flex items-center gap-4 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10"
                                    >
                                        <span className="text-sm text-white flex-1 min-w-0 truncate">
                                            {sale.customerName || "Walk-in"}
                                        </span>
                                        <span className="text-xs text-white/40 shrink-0">
                                            {when(sale.saleDate)}
                                        </span>
                                        <span className="text-sm font-medium text-white shrink-0 tabular-nums">
                                            {money.format(sale.total)}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </Section>
                </>
            )}
        </div>
    );
}
