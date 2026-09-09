"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { User, Mail, Plus, UserPlus, X, KeyRound } from "lucide-react";
import Modal from "@/components/ui/Modal";

interface Employee {
    id: string;
    name: string;
    role: string;
    email: string;
    phone: string | null;
    status: string;
    account: { id: string; email: string } | null;
    /** Last sign-in to this business, or null. See describePresence. */
    lastSignInAt: string | null;
    /** Role held on this business by their login, when they have one. */
    orgRole: string | null;
    /**
     * Whether this reader may set a new password for them.
     *
     * Decided by the route, using the same rules the reset enforces, so the
     * control appears exactly where it would work. Judging it here would be a
     * second copy of the policy, and the copy is the one that drifts.
     */
    canResetPassword: boolean;
    /** Whether this reader may change their access level. Decided by the route. */
    canChangeRole: boolean;
}

const ACCESS_LEVELS = [
    { value: "member", label: "Member", hint: "Day-to-day access" },
    { value: "manager", label: "Manager", hint: "Also schedules and training" },
    { value: "admin", label: "Admin", hint: "Also adds and removes people" },
];

/**
 * How recently somebody has actually been here.
 *
 * This replaced a status field, and the two answer different questions. The
 * status said whether a person was employed and was maintained by nobody, so
 * it said "Active" about everyone for ever. This says when they were last in
 * the app, which is observed rather than declared and cannot go stale.
 *
 * It is not a statement about employment. Somebody who feeds fish all day and
 * never opens a dashboard is doing their job; the honest reading of a long gap
 * is "this login is not being used", not "this person has gone".
 *
 * Null means two different things, and they are named differently: an employee
 * with no account cannot sign in at all, while an account that has never been
 * used is a login somebody was given and never picked up.
 */
function describePresence(employee: Employee): {
    label: string;
    dot: string;
    tone: string;
    icon?: "key";
} {
    if (!employee.account) {
        return { label: "No login", dot: "", tone: "text-white/40", icon: "key" };
    }
    if (!employee.lastSignInAt) {
        return { label: "Login never used", dot: "bg-yellow-500", tone: "text-yellow-200/80" };
    }

    const days = Math.floor(
        (Date.now() - new Date(employee.lastSignInAt).getTime()) / 86_400_000
    );

    if (days <= 0) return { label: "Here today", dot: "bg-green-500", tone: "text-green-300" };
    if (days === 1) return { label: "Here yesterday", dot: "bg-green-500", tone: "text-green-300" };
    if (days < 30) {
        return { label: `Last here ${days} days ago`, dot: "bg-green-500", tone: "text-white/60" };
    }
    if (days < 365) {
        const months = Math.round(days / 30);
        return {
            label: `Last here ${months} month${months === 1 ? "" : "s"} ago`,
            dot: "bg-yellow-500",
            tone: "text-yellow-200/80",
        };
    }
    return { label: "Not here for over a year", dot: "bg-yellow-500", tone: "text-yellow-200/80" };
}

export default function EmployeesPage() {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [loading, setLoading] = useState(true);
    const [showAddModal, setShowAddModal] = useState(false);
    const [newEmployee, setNewEmployee] = useState({
        name: "",
        role: "",
        email: "",
        phone: "",
    });
    const [saving, setSaving] = useState(false);
    const [grantingFor, setGrantingFor] = useState<Employee | null>(null);
    const [grant, setGrant] = useState({ password: "", role: "member" });
    const [grantError, setGrantError] = useState<string | null>(null);
    const [grantDone, setGrantDone] = useState(false);
    const [resettingFor, setResettingFor] = useState<Employee | null>(null);
    const [resetPassword, setResetPassword] = useState("");
    const [resetError, setResetError] = useState<string | null>(null);
    const [resetDone, setResetDone] = useState(false);
    const [level, setLevel] = useState("member");
    const [levelSaved, setLevelSaved] = useState(false);

    const fetchEmployees = useCallback(async () => {
        try {
            const response = await fetch("/api/employees");
            if (response.ok) {
                const data = await response.json();
                setEmployees(data);
            }
        } catch (err) {
            console.error("Error fetching employees:", err);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchEmployees();
    }, [fetchEmployees]);

    const openGrant = (employee: Employee) => {
        setGrantingFor(employee);
        setGrant({ password: "", role: "member" });
        setGrantError(null);
        setGrantDone(false);
    };

    const handleGrantLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!grantingFor) return;
        setSaving(true);
        setGrantError(null);
        try {
            const res = await fetch("/api/organization/members", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: grantingFor.name,
                    email: grantingFor.email,
                    password: grant.password,
                    role: grant.role,
                    employeeId: grantingFor.id,
                }),
            });
            const data = await res.json();
            if (!res.ok) {
                setGrantError(data.error || "Could not create the login.");
                return;
            }
            setGrantDone(true);
            fetchEmployees();
        } catch {
            setGrantError("Could not reach the server. Try again.");
        } finally {
            setSaving(false);
        }
    };

    const openReset = (employee: Employee) => {
        setResettingFor(employee);
        setResetPassword("");
        setResetError(null);
        setResetDone(false);
        setLevel(employee.orgRole ?? "member");
        setLevelSaved(false);
    };

    /**
     * Moves somebody between access levels.
     *
     * Ownership is not on offer here. Handing a business over is a deliberate
     * act with consequences for billing, and burying it in a dropdown beside a
     * password field is not where that decision should be made.
     */
    const handleChangeLevel = async () => {
        if (!resettingFor?.account) return;
        setSaving(true);
        setResetError(null);
        try {
            const res = await fetch("/api/users", {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userId: resettingFor.account.id, role: level }),
            });
            const data = await res.json();
            if (!res.ok) {
                setResetError(data.error || "Could not change that access level.");
                return;
            }
            setLevelSaved(true);
            fetchEmployees();
        } catch {
            setResetError("Could not reach the server. Try again.");
        } finally {
            setSaving(false);
        }
    };

    /**
     * Sets a new password without asking for the old one.
     *
     * Somebody who has forgotten theirs cannot supply it, which is the whole
     * situation this exists for. The route decides who may do this to whom;
     * the button only appears where it already said yes.
     */
    const handleResetPassword = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!resettingFor?.account) return;
        setSaving(true);
        setResetError(null);
        try {
            const res = await fetch("/api/organization/members", {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    userId: resettingFor.account.id,
                    password: resetPassword,
                }),
            });
            const data = await res.json();
            if (!res.ok) {
                setResetError(data.error || "Could not set that password.");
                return;
            }
            setResetDone(true);
        } catch {
            setResetError("Could not reach the server. Try again.");
        } finally {
            setSaving(false);
        }
    };

    const handleAddEmployee = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newEmployee.name || !newEmployee.role || !newEmployee.email) return;

        setSaving(true);
        try {
            const response = await fetch("/api/employees", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newEmployee),
            });
            if (response.ok) {
                const emp = await response.json();
                setEmployees([...employees, emp]);
                setNewEmployee({ name: "", role: "", email: "", phone: "" });
                setShowAddModal(false);
            }
        } catch (err) {
            console.error("Error creating employee:", err);
        } finally {
            setSaving(false);
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                        Employee Directory
                    </h1>
                    <p className="text-white/50 mt-1">Manage staff and permissions</p>
                </div>
                <button
                    onClick={() => setShowAddModal(true)}
                    className="px-4 py-2 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90 transition-colors cursor-pointer flex items-center gap-2"
                >
                    <UserPlus size={18} />
                    Add Employee
                </button>
            </div>

            {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="glass-card p-6 animate-pulse">
                            <div className="w-20 h-20 rounded-full bg-white/10 mx-auto mb-4" />
                            <div className="h-6 bg-white/10 rounded w-3/4 mx-auto mb-2" />
                            <div className="h-4 bg-white/5 rounded w-1/2 mx-auto" />
                        </div>
                    ))}
                </div>
            ) : employees.length === 0 ? (
                <div className="glass-card p-12 text-center">
                    <UserPlus size={48} className="mx-auto mb-4 text-white/30" />
                    <h3 className="text-xl font-bold text-white mb-2">No employees yet</h3>
                    <p className="text-white/50 mb-6">Add your first employee to get started</p>
                    <button
                        onClick={() => setShowAddModal(true)}
                        className="px-4 py-2 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90 transition-colors"
                    >
                        Add Employee
                    </button>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {employees.map(emp => (
                        <div key={emp.id} className="glass-card p-6 flex flex-col items-center text-center group hover:border-accent/30 transition-all">
                            <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-4 text-3xl font-bold text-white/20 group-hover:bg-accent/20 group-hover:text-accent transition-colors">
                                {emp.name.charAt(0)}
                            </div>
                            <h3 className="text-xl font-bold text-white">{emp.name}</h3>
                            <p className="text-accent text-sm font-medium mb-4">{emp.role}</p>

                            <div className="w-full space-y-3 pt-4 border-t border-white/10 text-sm text-white/60">
                                <div className="flex items-center gap-3">
                                    <Mail size={16} className="text-white/30" />
                                    {emp.email}
                                </div>
                                <div className="flex items-center gap-3">
                                    <User size={16} className="text-white/30" />
                                    ID: {emp.id.slice(0, 8)}
                                </div>
                                {/*
                                  * One line where there were two, and it is
                                  * observed rather than declared. The status
                                  * field it replaces could only ever say
                                  * "Active": nothing in the app was able to
                                  * change it, so every person in every
                                  * directory read Active for ever, including
                                  * the ones who had left.
                                  */}
                                <div className="flex items-center gap-3">
                                    {(() => {
                                        const presence = describePresence(emp);
                                        return (
                                            <>
                                                {presence.icon === "key" ? (
                                                    <KeyRound size={16} className="text-white/30" />
                                                ) : (
                                                    <div
                                                        className={`w-2 h-2 rounded-full ${presence.dot}`}
                                                    />
                                                )}
                                                <span className={presence.tone}>{presence.label}</span>
                                            </>
                                        );
                                    })()}
                                </div>
                            </div>

                            <div className="mt-6 flex gap-3 w-full">
                                <Link
                                    href={`/business/employees/${emp.id}`}
                                    className="flex-1 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-sm text-white text-center transition-colors"
                                >
                                    View profile
                                </Link>
                                {emp.account ? (
                                    emp.canResetPassword || emp.canChangeRole ? (
                                        <button
                                            onClick={() => openReset(emp)}
                                            className="flex-1 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-sm text-white transition-colors cursor-pointer"
                                        >
                                            Manage login
                                        </button>
                                    ) : (
                                        <span className="flex-1 py-2 rounded-lg border border-white/5 text-sm text-white/30 text-center">
                                            Has access
                                        </span>
                                    )
                                ) : (
                                    <button
                                        onClick={() => openGrant(emp)}
                                        className="flex-1 py-2 rounded-lg bg-accent/10 hover:bg-accent/20 border border-accent/30 text-sm text-accent transition-colors cursor-pointer"
                                    >
                                        Create login
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}


            <Modal
                isOpen={grantingFor !== null}
                onClose={() => setGrantingFor(null)}
                title={`Create a login for ${grantingFor?.name ?? ""}`}
            >
                {grantDone ? (
                    <div className="space-y-4">
                        <p className="text-sm text-white/70">
                            {grantingFor?.name} can now sign in as{" "}
                            <span className="text-white">{grantingFor?.email}</span> with:
                        </p>
                        <p className="px-3 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white font-mono text-sm break-all">
                            {grant.password}
                        </p>
                        <p className="text-xs text-white/40">
                            It is not emailed. They can change it under Preferences once signed in.
                        </p>
                        <button
                            type="button"
                            onClick={() => setGrantingFor(null)}
                            className="w-full py-2.5 px-4 bg-accent text-primary font-semibold rounded-xl hover:bg-accent/90 transition-all"
                        >
                            Done
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleGrantLogin} className="space-y-4">
                        <p className="text-sm text-white/50">
                            They will sign in with{" "}
                            <span className="text-white/80">{grantingFor?.email}</span> and share this
                            business&apos;s subscription.
                        </p>
                        <div>
                            <label className="block text-sm text-white/60 mb-1.5">
                                <KeyRound size={13} className="inline mr-1.5 -mt-0.5" />
                                Temporary password
                            </label>
                            <input
                                type="text"
                                required
                                value={grant.password}
                                onChange={(e) => setGrant({ ...grant, password: e.target.value })}
                                placeholder="At least 10 characters"
                                className="w-full px-3 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/25 font-mono text-sm"
                            />
                            <p className="text-xs text-white/30 mt-1.5">
                                Needs 10+ characters with upper and lower case, a number and a symbol.
                            </p>
                        </div>
                        <div>
                            <label className="block text-sm text-white/60 mb-1.5">Access level</label>
                            <select
                                value={grant.role}
                                onChange={(e) => setGrant({ ...grant, role: e.target.value })}
                                className="w-full px-3 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white"
                            >
                                <option value="member" className="bg-neutral-900">Member: day-to-day access</option>
                                <option value="manager" className="bg-neutral-900">Manager: also schedules and training</option>
                                <option value="admin" className="bg-neutral-900">Admin: also adds and removes people</option>
                            </select>
                        </div>
                        {grantError && <p className="text-sm text-red-300">{grantError}</p>}
                        <div className="flex gap-3 pt-1">
                            <button
                                type="button"
                                onClick={() => setGrantingFor(null)}
                                className="flex-1 py-2.5 px-4 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 transition-all"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={saving}
                                className="flex-1 py-2.5 px-4 bg-accent text-primary font-semibold rounded-xl hover:bg-accent/90 transition-all disabled:opacity-60"
                            >
                                {saving ? "Creating…" : "Create login"}
                            </button>
                        </div>
                    </form>
                )}
            </Modal>

            {/* Add Employee Modal */}
            <Modal isOpen={showAddModal} onClose={() => setShowAddModal(false)} title="Add Employee">
                <form onSubmit={handleAddEmployee} className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-white/70">Name *</label>
                        <input
                            type="text"
                            value={newEmployee.name}
                            onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
                            className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent/50"
                            placeholder="John Doe"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-white/70">Role *</label>
                        <input
                            type="text"
                            value={newEmployee.role}
                            onChange={(e) => setNewEmployee({ ...newEmployee, role: e.target.value })}
                            className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent/50"
                            placeholder="Operations Manager"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-white/70">Email *</label>
                        <input
                            type="email"
                            value={newEmployee.email}
                            onChange={(e) => setNewEmployee({ ...newEmployee, email: e.target.value })}
                            className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent/50"
                            placeholder="john@example.com"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-white/70">Phone</label>
                        <input
                            type="tel"
                            value={newEmployee.phone}
                            onChange={(e) => setNewEmployee({ ...newEmployee, phone: e.target.value })}
                            className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent/50"
                            placeholder="(555) 123-4567"
                        />
                    </div>
                    <div className="flex gap-3 pt-4">
                        <button
                            type="button"
                            onClick={() => setShowAddModal(false)}
                            className="flex-1 py-3 border border-white/10 rounded-lg text-white hover:bg-white/5 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={saving}
                            className="flex-1 py-3 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90 transition-colors disabled:opacity-50"
                        >
                            {saving ? "Adding..." : "Add Employee"}
                        </button>
                    </div>
                </form>
            </Modal>

            {/*
              * One panel for the login rather than a button each. Changing
              * somebody's access and resetting their password are the two
              * things anyone comes here to do, and they are usually prompted
              * by the same conversation.
              *
              * The two act independently: each saves on its own, so setting a
              * password does not quietly also apply a level the reader was
              * only looking at.
              */}
            <Modal
                isOpen={resettingFor !== null}
                onClose={() => setResettingFor(null)}
                title={`Login for ${resettingFor?.name ?? ""}`}
            >
                <div className="space-y-6">
                    <p className="text-sm text-white/50">
                        They sign in with{" "}
                        <span className="text-white/80">{resettingFor?.account?.email}</span>.
                    </p>

                    {resettingFor?.canChangeRole && (
                        <div className="space-y-2">
                            <label className="block text-sm text-white/60">Access level</label>
                            <select
                                value={level}
                                onChange={(e) => {
                                    setLevel(e.target.value);
                                    setLevelSaved(false);
                                }}
                                className="w-full px-3 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white"
                            >
                                {ACCESS_LEVELS.map((option) => (
                                    <option
                                        key={option.value}
                                        value={option.value}
                                        className="bg-neutral-900"
                                    >
                                        {option.label}: {option.hint}
                                    </option>
                                ))}
                            </select>
                            <div className="flex items-center gap-3">
                                <button
                                    type="button"
                                    onClick={handleChangeLevel}
                                    disabled={saving || level === (resettingFor?.orgRole ?? "member")}
                                    className="px-4 py-2 bg-white/10 border border-white/10 text-white text-sm rounded-lg hover:bg-white/20 disabled:opacity-40 transition-colors"
                                >
                                    Save access level
                                </button>
                                {levelSaved && (
                                    <span className="text-sm text-accent">Saved</span>
                                )}
                            </div>
                        </div>
                    )}

                    {resettingFor?.canResetPassword && (
                        <form
                            onSubmit={handleResetPassword}
                            className="space-y-2 pt-2 border-t border-white/10"
                        >
                            <label className="block text-sm text-white/60 pt-4">
                                <KeyRound size={13} className="inline mr-1.5 -mt-0.5" />
                                New password
                            </label>
                            {resetDone ? (
                                <p className="text-sm text-accent">
                                    Password set. Give it to them directly, it is not emailed.
                                </p>
                            ) : (
                                <>
                                    <input
                                        type="text"
                                        required
                                        value={resetPassword}
                                        onChange={(e) => setResetPassword(e.target.value)}
                                        placeholder="At least 10 characters"
                                        className="w-full px-3 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/25 font-mono text-sm"
                                    />
                                    <p className="text-xs text-white/30">
                                        Needs 10+ characters with upper and lower case, a number and
                                        a symbol. The old one is not needed: somebody who has
                                        forgotten theirs cannot supply it.
                                    </p>
                                    <button
                                        type="submit"
                                        disabled={saving || !resetPassword.trim()}
                                        className="px-4 py-2 bg-white/10 border border-white/10 text-white text-sm rounded-lg hover:bg-white/20 disabled:opacity-40 transition-colors mt-1"
                                    >
                                        {saving ? "Setting..." : "Set password"}
                                    </button>
                                </>
                            )}
                        </form>
                    )}

                    {resetError && <p className="text-sm text-red-300">{resetError}</p>}

                    <button
                        type="button"
                        onClick={() => setResettingFor(null)}
                        className="w-full py-2.5 px-4 bg-accent text-primary font-semibold rounded-xl hover:bg-accent/90 transition-all"
                    >
                        Done
                    </button>
                </div>
            </Modal>
        </div>
    );
}
