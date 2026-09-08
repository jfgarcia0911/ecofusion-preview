"use client";
import { useState, useEffect, useCallback } from "react";
import { User, Mail, Plus, UserPlus, X, KeyRound, CheckCircle2 } from "lucide-react";
import Modal from "@/components/ui/Modal";

interface Employee {
    id: string;
    name: string;
    role: string;
    email: string;
    phone: string | null;
    status: string;
    account: { id: string; email: string } | null;
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
                                <div className="flex items-center gap-3">
                                    <div className={`w-2 h-2 rounded-full ${emp.status === 'Active' ? 'bg-green-500' : 'bg-yellow-500'}`} />
                                    {emp.status}
                                </div>
                                <div className="flex items-center gap-3">
                                    {emp.account ? (
                                        <>
                                            <CheckCircle2 size={16} className="text-accent" />
                                            <span className="text-accent">Can sign in</span>
                                        </>
                                    ) : (
                                        <>
                                            <KeyRound size={16} className="text-white/30" />
                                            <span className="text-white/40">No login yet</span>
                                        </>
                                    )}
                                </div>
                            </div>

                            <div className="mt-6 flex gap-3 w-full">
                                <button className="flex-1 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-sm text-white transition-colors cursor-pointer">View Profile</button>
                                {emp.account ? (
                                    <span className="flex-1 py-2 rounded-lg border border-white/5 text-sm text-white/30 text-center">
                                        Has access
                                    </span>
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
        </div>
    );
}
