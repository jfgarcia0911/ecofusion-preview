"use client";
import { useState, useEffect, useCallback } from "react";
import { KeyRound, Mail, Plus, RotateCcw, ShieldCheck, Trash2, UserPlus } from "lucide-react";
import Modal from "@/components/ui/Modal";
import { useConfirm } from "@/components/ui/ConfirmDialog";

interface Member {
    id: string;
    membershipId: string;
    name: string | null;
    email: string;
    role: string;
    joinedAt: string;
}

const ROLE_OPTIONS = [
    { value: "member", label: "Member", hint: "Day-to-day access to the farm's operations" },
    { value: "manager", label: "Manager", hint: "Also manages schedules and training" },
    { value: "admin", label: "Admin", hint: "Also adds and removes people" },
];

const ROLE_STYLES: Record<string, string> = {
    owner: "bg-accent/15 text-accent border-accent/30",
    admin: "bg-purple-400/15 text-purple-300 border-purple-400/30",
    manager: "bg-blue-400/15 text-blue-300 border-blue-400/30",
    member: "bg-white/10 text-white/60 border-white/15",
};

export default function TeamPage() {
    const confirmAction = useConfirm();
    const [members, setMembers] = useState<Member[]>([]);
    const [loading, setLoading] = useState(true);
    const [showAddModal, setShowAddModal] = useState(false);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [resetting, setResetting] = useState<Member | null>(null);
    const [resetPassword, setResetPassword] = useState("");
    const [resetDone, setResetDone] = useState(false);
    const [newMember, setNewMember] = useState({
        name: "",
        email: "",
        password: "",
        role: "member",
    });

    const fetchMembers = useCallback(async () => {
        try {
            const res = await fetch("/api/organization/members");
            if (res.ok) setMembers(await res.json());
        } catch (err) {
            console.error("Error fetching members:", err);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchMembers();
    }, [fetchMembers]);

    const handleAddMember = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);
        setError(null);
        try {
            const res = await fetch("/api/organization/members", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newMember),
            });
            const data = await res.json();
            if (!res.ok) {
                setError(data.error || "Could not create the account.");
                return;
            }
            setNewMember({ name: "", email: "", password: "", role: "member" });
            setShowAddModal(false);
            fetchMembers();
        } catch {
            setError("Could not reach the server. Try again.");
        } finally {
            setSaving(false);
        }
    };

    const handleReset = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!resetting) return;
        setSaving(true);
        setError(null);
        try {
            const res = await fetch("/api/organization/members", {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userId: resetting.id, password: resetPassword }),
            });
            const data = await res.json();
            if (!res.ok) {
                setError(data.error || "Could not reset the password.");
                return;
            }
            setResetDone(true);
        } catch {
            setError("Could not reach the server. Try again.");
        } finally {
            setSaving(false);
        }
    };

    const openReset = (member: Member) => {
        setResetting(member);
        setResetPassword("");
        setResetDone(false);
        setError(null);
    };

    const handleRemove = async (member: Member) => {
        if (!(await confirmAction({
            title: `Remove ${member.name || member.email}?`,
            message: "They lose access to this farm immediately.",
            confirmLabel: "Remove",
            tone: "danger",
        }))) {
            return;
        }
        try {
            const res = await fetch(`/api/organization/members?userId=${member.id}`, {
                method: "DELETE",
            });
            if (res.ok) fetchMembers();
            else setError((await res.json()).error || "Could not remove them.");
        } catch {
            setError("Could not reach the server. Try again.");
        }
    };

    return (
        <div className="space-y-8">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                        Team Access
                    </h1>
                    <p className="text-white/50 mt-1 max-w-2xl">
                        People who can sign in to this farm. Everyone here shares the farm&apos;s
                        subscription. If it lapses, all of these accounts pause together.
                    </p>
                </div>
                <button
                    onClick={() => { setError(null); setShowAddModal(true); }}
                    className="shrink-0 px-4 py-2.5 bg-accent text-primary font-semibold rounded-xl flex items-center gap-2 hover:bg-accent/90 transition-all"
                >
                    <Plus size={18} />
                    Add Person
                </button>
            </div>

            {error && !showAddModal && (
                <div className="glass-card rounded-2xl border border-red-400/20 bg-red-400/5 p-4">
                    <p className="text-sm text-red-200">{error}</p>
                </div>
            )}

            {loading ? (
                <p className="text-white/40">Loading…</p>
            ) : members.length === 0 ? (
                <div className="glass-card rounded-2xl border border-white/10 p-12 text-center">
                    <UserPlus className="mx-auto text-white/20 mb-4" size={40} />
                    <p className="text-white/70 mb-1">No one else has access yet</p>
                    <p className="text-white/40 text-sm mb-6">
                        Create a login for someone and they can sign in to this farm.
                    </p>
                    <button
                        onClick={() => setShowAddModal(true)}
                        className="px-4 py-2.5 bg-accent text-primary font-semibold rounded-xl inline-flex items-center gap-2 hover:bg-accent/90 transition-all"
                    >
                        <Plus size={18} />
                        Add Person
                    </button>
                </div>
            ) : (
                <div className="glass-card rounded-2xl border border-white/10 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-white/10 text-left">
                                    <th className="px-5 py-3 font-medium text-white/40 text-xs uppercase tracking-wider">Name</th>
                                    <th className="px-5 py-3 font-medium text-white/40 text-xs uppercase tracking-wider">Email</th>
                                    <th className="px-5 py-3 font-medium text-white/40 text-xs uppercase tracking-wider">Role</th>
                                    <th className="px-5 py-3 font-medium text-white/40 text-xs uppercase tracking-wider">Added</th>
                                    <th className="px-5 py-3"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {members.map((member) => (
                                    <tr key={member.membershipId} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02]">
                                        <td className="px-5 py-4 text-white font-medium">
                                            {member.name || <span className="text-white/30">-</span>}
                                        </td>
                                        <td className="px-5 py-4 text-white/60">{member.email}</td>
                                        <td className="px-5 py-4">
                                            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs capitalize ${ROLE_STYLES[member.role] ?? ROLE_STYLES.member}`}>
                                                {member.role === "owner" && <ShieldCheck size={12} />}
                                                {member.role}
                                            </span>
                                        </td>
                                        <td className="px-5 py-4 text-white/40 tabular-nums">
                                            {new Date(member.joinedAt).toLocaleDateString()}
                                        </td>
                                        <td className="px-5 py-4 text-right">
                                            <div className="flex items-center justify-end gap-1">
                                                <button
                                                    onClick={() => openReset(member)}
                                                    className="p-2 rounded-lg text-white/30 hover:text-accent hover:bg-accent/10 transition-all"
                                                    aria-label={`Reset password for ${member.name || member.email}`}
                                                    title="Reset password"
                                                >
                                                    <RotateCcw size={16} />
                                                </button>
                                                {member.role === "owner" ? (
                                                    <span className="text-xs text-white/25 pl-1">Owner</span>
                                                ) : (
                                                    <button
                                                        onClick={() => handleRemove(member)}
                                                        className="p-2 rounded-lg text-white/30 hover:text-red-300 hover:bg-red-400/10 transition-all"
                                                        aria-label={`Remove ${member.name || member.email}`}
                                                        title="Remove from farm"
                                                    >
                                                        <Trash2 size={16} />
                                                    </button>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            <Modal
                isOpen={resetting !== null}
                onClose={() => setResetting(null)}
                title={`Reset password for ${resetting?.name || resetting?.email || ""}`}
            >
                {resetDone ? (
                    <div className="space-y-4">
                        <p className="text-sm text-white/70">
                            Password changed. Give them this to sign in with:
                        </p>
                        <p className="px-3 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white font-mono text-sm break-all">
                            {resetPassword}
                        </p>
                        <p className="text-xs text-white/40">
                            It is not emailed. Once they are in, they can change it themselves under
                            Preferences.
                        </p>
                        <button
                            type="button"
                            onClick={() => setResetting(null)}
                            className="w-full py-2.5 px-4 bg-accent text-primary font-semibold rounded-xl hover:bg-accent/90 transition-all"
                        >
                            Done
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleReset} className="space-y-4">
                        <div>
                            <label className="block text-sm text-white/60 mb-1.5">New password</label>
                            <input
                                type="text"
                                required
                                value={resetPassword}
                                onChange={(e) => setResetPassword(e.target.value)}
                                placeholder="At least 10 characters"
                                className="w-full px-3 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/25 font-mono text-sm"
                            />
                            <p className="text-xs text-white/30 mt-1.5">
                                Needs 10+ characters with upper and lower case, a number and a symbol.
                            </p>
                        </div>
                        {error && <p className="text-sm text-red-300">{error}</p>}
                        <div className="flex gap-3">
                            <button
                                type="button"
                                onClick={() => setResetting(null)}
                                className="flex-1 py-2.5 px-4 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 transition-all"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={saving}
                                className="flex-1 py-2.5 px-4 bg-accent text-primary font-semibold rounded-xl hover:bg-accent/90 transition-all disabled:opacity-60"
                            >
                                {saving ? "Saving…" : "Reset password"}
                            </button>
                        </div>
                    </form>
                )}
            </Modal>

            <Modal isOpen={showAddModal} onClose={() => setShowAddModal(false)} title="Add Person">
                <form onSubmit={handleAddMember} className="space-y-4">
                    <div>
                        <label className="block text-sm text-white/60 mb-1.5">Name</label>
                        <input
                            type="text"
                            value={newMember.name}
                            onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
                            placeholder="Maria Santos"
                            className="w-full px-3 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/25"
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-white/60 mb-1.5">
                            <Mail size={13} className="inline mr-1.5 -mt-0.5" />
                            Email
                        </label>
                        <input
                            type="email"
                            required
                            value={newMember.email}
                            onChange={(e) => setNewMember({ ...newMember, email: e.target.value })}
                            placeholder="maria@example.com"
                            className="w-full px-3 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/25"
                        />
                        <p className="text-xs text-white/30 mt-1.5">They sign in with this address.</p>
                    </div>

                    <div>
                        <label className="block text-sm text-white/60 mb-1.5">
                            <KeyRound size={13} className="inline mr-1.5 -mt-0.5" />
                            Temporary password
                        </label>
                        <input
                            type="text"
                            required
                            value={newMember.password}
                            onChange={(e) => setNewMember({ ...newMember, password: e.target.value })}
                            placeholder="At least 10 characters"
                            className="w-full px-3 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/25 font-mono text-sm"
                        />
                        <p className="text-xs text-white/30 mt-1.5">
                            Needs 10+ characters with upper and lower case, a number and a symbol.
                            Share it with them directly. It is not emailed.
                        </p>
                    </div>

                    <div>
                        <label className="block text-sm text-white/60 mb-1.5">Role</label>
                        <div className="space-y-2">
                            {ROLE_OPTIONS.map((option) => (
                                <label
                                    key={option.value}
                                    className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                                        newMember.role === option.value
                                            ? "border-accent/40 bg-accent/5"
                                            : "border-white/10 hover:border-white/20"
                                    }`}
                                >
                                    <input
                                        type="radio"
                                        name="role"
                                        value={option.value}
                                        checked={newMember.role === option.value}
                                        onChange={(e) => setNewMember({ ...newMember, role: e.target.value })}
                                        className="mt-1 accent-[color:var(--color-accent)]"
                                    />
                                    <span>
                                        <span className="block text-sm text-white">{option.label}</span>
                                        <span className="block text-xs text-white/40">{option.hint}</span>
                                    </span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {error && <p className="text-sm text-red-300">{error}</p>}

                    <div className="flex gap-3 pt-2">
                        <button
                            type="button"
                            onClick={() => setShowAddModal(false)}
                            className="flex-1 py-2.5 px-4 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 transition-all"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={saving}
                            className="flex-1 py-2.5 px-4 bg-accent text-primary font-semibold rounded-xl hover:bg-accent/90 transition-all disabled:opacity-60"
                        >
                            {saving ? "Creating…" : "Create account"}
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    );
}
