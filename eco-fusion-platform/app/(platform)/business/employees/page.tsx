"use client";
import { useState } from "react";
import {
    User, Mail, Phone, Calendar, Plus, X, CheckCircle, Clock, AlertCircle,
    Briefcase, Building, DollarSign, FileText, UserPlus, ClipboardCheck,
    Timer, ChevronDown, ChevronRight, Edit, Eye, MoreVertical, Download
} from "lucide-react";

// Job roles based on HR documentation
const JOB_ROLES = [
    { code: "OPS-001", title: "Operations Manager", department: "Operations", grade: "G5" },
    { code: "OPS-002", title: "Lead Farm Technician", department: "Operations", grade: "G4" },
    { code: "OPS-003", title: "Farm Technician", department: "Operations", grade: "G2-G3" },
    { code: "OPS-004", title: "Harvest & Packaging Technician", department: "Operations", grade: "G2" },
    { code: "SAL-001", title: "Sales & Marketing Manager", department: "Sales", grade: "G5" },
    { code: "SAL-002", title: "Account Executive", department: "Sales", grade: "G4" },
    { code: "SAL-003", title: "Sales Development Representative", department: "Sales", grade: "G2-G3" },
    { code: "MKT-001", title: "Marketing Coordinator", department: "Marketing", grade: "G3" },
    { code: "FIN-001", title: "Controller", department: "Finance", grade: "G6" },
    { code: "FIN-002", title: "Staff Accountant", department: "Finance", grade: "G3-G4" },
    { code: "HR-001", title: "HR Manager", department: "Human Resources", grade: "G5" },
    { code: "HR-002", title: "HR Coordinator", department: "Human Resources", grade: "G3" },
    { code: "QFS-001", title: "QA Manager", department: "Quality", grade: "G5" },
    { code: "QFS-002", title: "QA Technician", department: "Quality", grade: "G3" },
    { code: "TECH-001", title: "IT Manager", department: "Technology", grade: "G5" },
    { code: "TECH-002", title: "Data Analyst", department: "Technology", grade: "G4" },
];

// Onboarding checklist based on HR documentation
const ONBOARDING_CHECKLIST = {
    preboarding: [
        { id: "pb1", task: "Offer letter signed and returned", owner: "HR" },
        { id: "pb2", task: "Background check completed", owner: "HR" },
        { id: "pb3", task: "Employee record created in HRIS", owner: "HR" },
        { id: "pb4", task: "New hire paperwork sent", owner: "HR" },
        { id: "pb5", task: "Computer/equipment ordered", owner: "IT" },
        { id: "pb6", task: "Email/accounts created", owner: "IT" },
        { id: "pb7", task: "Workspace prepared", owner: "Manager" },
        { id: "pb8", task: "30-60-90 day plan created", owner: "Manager" },
        { id: "pb9", task: "Onboarding buddy assigned", owner: "Manager" },
    ],
    day1: [
        { id: "d1", task: "Complete I-9 with documents", owner: "HR" },
        { id: "d2", task: "Complete W-4 and tax forms", owner: "HR" },
        { id: "d3", task: "Set up direct deposit", owner: "HR" },
        { id: "d4", task: "Benefits enrollment overview", owner: "HR" },
        { id: "d5", task: "Employee handbook review", owner: "HR" },
        { id: "d6", task: "Policy acknowledgments signed", owner: "HR" },
        { id: "d7", task: "Badge/access provisioned", owner: "HR" },
        { id: "d8", task: "Equipment setup verified", owner: "IT" },
        { id: "d9", task: "Welcome and facility tour", owner: "Manager" },
        { id: "d10", task: "Team introductions", owner: "Manager" },
    ],
    week1: [
        { id: "w1", task: "Complete required online training", owner: "Employee" },
        { id: "w2", task: "Complete safety training", owner: "Employee" },
        { id: "w3", task: "Complete facility tour", owner: "Manager" },
        { id: "w4", task: "Meet with all team members", owner: "Employee" },
        { id: "w5", task: "Begin job-specific training", owner: "Manager" },
        { id: "w6", task: "Week 1 check-in completed", owner: "Manager" },
    ],
    days30: [
        { id: "30a", task: "Complete all compliance training", owner: "Employee" },
        { id: "30b", task: "Complete job-specific training", owner: "Employee" },
        { id: "30c", task: "Benefits enrollment completed", owner: "HR" },
        { id: "30d", task: "30-day check-in completed", owner: "Manager" },
        { id: "30e", task: "30-day survey completed", owner: "Employee" },
    ],
    days60: [
        { id: "60a", task: "Taking ownership of responsibilities", owner: "Employee" },
        { id: "60b", task: "60-day check-in completed", owner: "Manager" },
        { id: "60c", task: "Cross-functional relationships building", owner: "Employee" },
    ],
    days90: [
        { id: "90a", task: "Performing at expected level", owner: "Employee" },
        { id: "90b", task: "90-day review completed", owner: "Manager" },
        { id: "90c", task: "Introductory period concluded", owner: "HR" },
        { id: "90d", task: "Ongoing goals established", owner: "Manager" },
    ],
};

// Sample employee data
const initialEmployees = [
    {
        id: "EF-001",
        name: "Sarah Jenkins",
        email: "sarah@ecofusion.com",
        phone: "(555) 123-4567",
        role: "Lead Farm Technician",
        roleCode: "OPS-002",
        department: "Operations",
        status: "Active",
        hireDate: "2024-03-15",
        manager: "David Kim",
        salary: 52000,
        onboardingComplete: true,
        onboardingProgress: { preboarding: 9, day1: 10, week1: 6, days30: 5, days60: 3, days90: 4 },
        timeEntries: [
            { date: "2025-12-23", hoursWorked: 8, project: "Zone A Maintenance" },
            { date: "2025-12-24", hoursWorked: 6, project: "Harvest Operations" },
        ]
    },
    {
        id: "EF-002",
        name: "Mike Ross",
        email: "mike@ecofusion.com",
        phone: "(555) 234-5678",
        role: "Farm Technician",
        roleCode: "OPS-003",
        department: "Operations",
        status: "Active",
        hireDate: "2024-06-01",
        manager: "Sarah Jenkins",
        salary: 42000,
        onboardingComplete: true,
        onboardingProgress: { preboarding: 9, day1: 10, week1: 6, days30: 5, days60: 3, days90: 4 },
        timeEntries: [
            { date: "2025-12-23", hoursWorked: 8, project: "Zone B Planting" },
            { date: "2025-12-24", hoursWorked: 8, project: "System Monitoring" },
        ]
    },
    {
        id: "EF-003",
        name: "David Kim",
        email: "david@ecofusion.com",
        phone: "(555) 345-6789",
        role: "Operations Manager",
        roleCode: "OPS-001",
        department: "Operations",
        status: "Active",
        hireDate: "2024-01-10",
        manager: "Brad Phillips",
        salary: 85000,
        onboardingComplete: true,
        onboardingProgress: { preboarding: 9, day1: 10, week1: 6, days30: 5, days60: 3, days90: 4 },
        timeEntries: [
            { date: "2025-12-23", hoursWorked: 9, project: "Team Management" },
            { date: "2025-12-24", hoursWorked: 8, project: "Production Planning" },
        ]
    },
    {
        id: "EF-004",
        name: "Jessica Chen",
        email: "jessica@ecofusion.com",
        phone: "(555) 456-7890",
        role: "Farm Technician",
        roleCode: "OPS-003",
        department: "Operations",
        status: "Onboarding",
        hireDate: "2025-12-15",
        manager: "Sarah Jenkins",
        salary: 40000,
        onboardingComplete: false,
        onboardingProgress: { preboarding: 9, day1: 8, week1: 3, days30: 0, days60: 0, days90: 0 },
        timeEntries: []
    },
    {
        id: "EF-005",
        name: "Alex Thompson",
        email: "alex@ecofusion.com",
        phone: "(555) 567-8901",
        role: "Sales Development Representative",
        roleCode: "SAL-003",
        department: "Sales",
        status: "Active",
        hireDate: "2024-09-01",
        manager: "Lisa Wang",
        salary: 48000,
        onboardingComplete: true,
        onboardingProgress: { preboarding: 9, day1: 10, week1: 6, days30: 5, days60: 3, days90: 4 },
        timeEntries: [
            { date: "2025-12-23", hoursWorked: 8, project: "Lead Generation" },
            { date: "2025-12-24", hoursWorked: 7, project: "Customer Calls" },
        ]
    },
];

type Employee = typeof initialEmployees[0];
type TabType = "directory" | "onboarding" | "timetracking" | "myprofile";

export default function EmployeesPage() {
    const [employees, setEmployees] = useState(initialEmployees);
    const [activeTab, setActiveTab] = useState<TabType>("directory");
    const [showAddModal, setShowAddModal] = useState(false);
    const [showProfileModal, setShowProfileModal] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
    const [expandedOnboarding, setExpandedOnboarding] = useState<string | null>(null);

    // New employee form state
    const [newEmployee, setNewEmployee] = useState({
        name: "",
        email: "",
        phone: "",
        roleCode: "",
        hireDate: "",
        manager: "",
        salary: "",
    });

    const handleAddEmployee = () => {
        const role = JOB_ROLES.find(r => r.code === newEmployee.roleCode);
        if (!role || !newEmployee.name || !newEmployee.email) return;

        const employee: Employee = {
            id: `EF-${String(employees.length + 1).padStart(3, "0")}`,
            name: newEmployee.name,
            email: newEmployee.email,
            phone: newEmployee.phone,
            role: role.title,
            roleCode: role.code,
            department: role.department,
            status: "Onboarding",
            hireDate: newEmployee.hireDate,
            manager: newEmployee.manager,
            salary: parseInt(newEmployee.salary) || 0,
            onboardingComplete: false,
            onboardingProgress: { preboarding: 0, day1: 0, week1: 0, days30: 0, days60: 0, days90: 0 },
            timeEntries: [],
        };

        setEmployees([...employees, employee]);
        setNewEmployee({ name: "", email: "", phone: "", roleCode: "", hireDate: "", manager: "", salary: "" });
        setShowAddModal(false);
    };

    const getOnboardingPercentage = (emp: Employee) => {
        const total = 9 + 10 + 6 + 5 + 3 + 4; // Total tasks
        const completed = Object.values(emp.onboardingProgress).reduce((a, b) => a + b, 0);
        return Math.round((completed / total) * 100);
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Active": return "bg-green-500";
            case "Onboarding": return "bg-blue-500";
            case "On Leave": return "bg-yellow-500";
            case "Terminated": return "bg-red-500";
            default: return "bg-gray-500";
        }
    };

    const toggleOnboardingTask = (empId: string, phase: keyof typeof ONBOARDING_CHECKLIST, taskIndex: number, completed: boolean) => {
        setEmployees(employees.map(emp => {
            if (emp.id === empId) {
                const newProgress = { ...emp.onboardingProgress };
                const phaseKey = phase as keyof typeof emp.onboardingProgress;
                const maxTasks = ONBOARDING_CHECKLIST[phase].length;

                if (completed) {
                    newProgress[phaseKey] = Math.min(newProgress[phaseKey] + 1, maxTasks);
                } else {
                    newProgress[phaseKey] = Math.max(newProgress[phaseKey] - 1, 0);
                }

                const total = 9 + 10 + 6 + 5 + 3 + 4;
                const completedTotal = Object.values(newProgress).reduce((a, b) => a + b, 0);

                return {
                    ...emp,
                    onboardingProgress: newProgress,
                    onboardingComplete: completedTotal >= total,
                    status: completedTotal >= total ? "Active" : "Onboarding"
                };
            }
            return emp;
        }));
    };

    // Current logged-in user simulation (for My Profile tab)
    const currentUser = employees.find(e => e.email === "sarah@ecofusion.com") || employees[0];

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                        Employee Management
                    </h1>
                    <p className="text-white/50 mt-1">Manage staff, onboarding, and time tracking</p>
                </div>
                <button
                    onClick={() => setShowAddModal(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90 transition-colors"
                >
                    <UserPlus size={18} />
                    Add Employee
                </button>
            </div>

            {/* Tab Navigation */}
            <div className="flex bg-white/5 rounded-lg p-1 w-fit">
                {[
                    { id: "directory", label: "Directory", icon: User },
                    { id: "onboarding", label: "HR Onboarding", icon: ClipboardCheck },
                    { id: "timetracking", label: "Time Tracking", icon: Timer },
                    { id: "myprofile", label: "My Profile", icon: Eye },
                ].map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as TabType)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                            activeTab === tab.id
                                ? "bg-accent text-primary"
                                : "text-white/70 hover:text-white"
                        }`}
                    >
                        <tab.icon size={16} />
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            {activeTab === "directory" && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {employees.map(emp => (
                        <div key={emp.id} className="glass-card p-6 flex flex-col items-center text-center group hover:border-accent/30 transition-all">
                            <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-4 text-3xl font-bold text-white/20 group-hover:bg-accent/20 group-hover:text-accent transition-colors">
                                {emp.name.charAt(0)}
                            </div>
                            <h3 className="text-xl font-bold text-white">{emp.name}</h3>
                            <p className="text-accent text-sm font-medium">{emp.role}</p>
                            <p className="text-white/40 text-xs">{emp.department}</p>

                            <div className="w-full space-y-3 pt-4 mt-4 border-t border-white/10 text-sm text-white/60">
                                <div className="flex items-center gap-3">
                                    <Mail size={16} className="text-white/30" />
                                    {emp.email}
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone size={16} className="text-white/30" />
                                    {emp.phone}
                                </div>
                                <div className="flex items-center gap-3">
                                    <Calendar size={16} className="text-white/30" />
                                    Hired: {new Date(emp.hireDate).toLocaleDateString()}
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className={`w-2 h-2 rounded-full ${getStatusColor(emp.status)}`} />
                                    {emp.status}
                                    {emp.status === "Onboarding" && (
                                        <span className="text-xs text-accent">({getOnboardingPercentage(emp)}% complete)</span>
                                    )}
                                </div>
                            </div>

                            <div className="mt-6 flex gap-3 w-full">
                                <button
                                    onClick={() => { setSelectedEmployee(emp); setShowProfileModal(true); }}
                                    className="flex-1 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-sm text-white transition-colors flex items-center justify-center gap-1"
                                >
                                    <Eye size={14} /> View
                                </button>
                                <button className="flex-1 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-sm text-white transition-colors flex items-center justify-center gap-1">
                                    <Edit size={14} /> Edit
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {activeTab === "onboarding" && (
                <div className="space-y-6">
                    {/* Summary Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="glass-card p-4 rounded-xl">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-blue-400/20 rounded-lg">
                                    <UserPlus size={20} className="text-blue-400" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-white">{employees.filter(e => e.status === "Onboarding").length}</p>
                                    <p className="text-xs text-white/50">Currently Onboarding</p>
                                </div>
                            </div>
                        </div>
                        <div className="glass-card p-4 rounded-xl">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-green-400/20 rounded-lg">
                                    <CheckCircle size={20} className="text-green-400" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-white">{employees.filter(e => e.onboardingComplete).length}</p>
                                    <p className="text-xs text-white/50">Completed Onboarding</p>
                                </div>
                            </div>
                        </div>
                        <div className="glass-card p-4 rounded-xl">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-yellow-400/20 rounded-lg">
                                    <Clock size={20} className="text-yellow-400" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-white">
                                        {employees.filter(e => !e.onboardingComplete && getOnboardingPercentage(e) < 50).length}
                                    </p>
                                    <p className="text-xs text-white/50">Need Attention</p>
                                </div>
                            </div>
                        </div>
                        <div className="glass-card p-4 rounded-xl">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-accent/20 rounded-lg">
                                    <User size={20} className="text-accent" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-white">{employees.length}</p>
                                    <p className="text-xs text-white/50">Total Employees</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Onboarding List */}
                    <div className="glass-panel rounded-xl overflow-hidden">
                        <div className="p-4 border-b border-white/10 bg-white/5">
                            <h2 className="text-lg font-bold text-white">Onboarding Progress</h2>
                            <p className="text-sm text-white/50">Track employee onboarding tasks based on HR guidelines</p>
                        </div>
                        <div className="divide-y divide-white/5">
                            {employees.map(emp => (
                                <div key={emp.id} className="p-4">
                                    <div
                                        className="flex items-center justify-between cursor-pointer"
                                        onClick={() => setExpandedOnboarding(expandedOnboarding === emp.id ? null : emp.id)}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-lg font-bold text-white/40">
                                                {emp.name.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="font-medium text-white">{emp.name}</p>
                                                <p className="text-sm text-white/50">{emp.role} | Started {new Date(emp.hireDate).toLocaleDateString()}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="w-32 bg-white/10 rounded-full h-2">
                                                <div
                                                    className={`h-2 rounded-full transition-all ${
                                                        getOnboardingPercentage(emp) === 100 ? "bg-green-500" : "bg-accent"
                                                    }`}
                                                    style={{ width: `${getOnboardingPercentage(emp)}%` }}
                                                />
                                            </div>
                                            <span className="text-sm text-white/70 w-12">{getOnboardingPercentage(emp)}%</span>
                                            {expandedOnboarding === emp.id ? <ChevronDown size={20} className="text-white/50" /> : <ChevronRight size={20} className="text-white/50" />}
                                        </div>
                                    </div>

                                    {expandedOnboarding === emp.id && (
                                        <div className="mt-4 ml-14 space-y-4">
                                            {(Object.entries(ONBOARDING_CHECKLIST) as [keyof typeof ONBOARDING_CHECKLIST, typeof ONBOARDING_CHECKLIST.preboarding][]).map(([phase, tasks]) => {
                                                const phaseLabels: Record<string, string> = {
                                                    preboarding: "Pre-Boarding",
                                                    day1: "Day 1",
                                                    week1: "Week 1",
                                                    days30: "Days 1-30",
                                                    days60: "Days 31-60",
                                                    days90: "Days 61-90"
                                                };
                                                const completedCount = emp.onboardingProgress[phase as keyof typeof emp.onboardingProgress];

                                                return (
                                                    <div key={phase} className="bg-white/5 rounded-lg p-3">
                                                        <div className="flex items-center justify-between mb-2">
                                                            <h4 className="font-medium text-white text-sm">{phaseLabels[phase]}</h4>
                                                            <span className="text-xs text-white/50">{completedCount}/{tasks.length} complete</span>
                                                        </div>
                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                                            {tasks.map((task, idx) => {
                                                                const isCompleted = idx < completedCount;
                                                                return (
                                                                    <label
                                                                        key={task.id}
                                                                        className="flex items-center gap-2 text-sm cursor-pointer hover:bg-white/5 p-1 rounded"
                                                                    >
                                                                        <input
                                                                            type="checkbox"
                                                                            checked={isCompleted}
                                                                            onChange={(e) => toggleOnboardingTask(emp.id, phase, idx, e.target.checked)}
                                                                            className="w-4 h-4 rounded border-white/20 bg-white/5 text-accent focus:ring-accent"
                                                                        />
                                                                        <span className={isCompleted ? "text-white/50 line-through" : "text-white/80"}>
                                                                            {task.task}
                                                                        </span>
                                                                        <span className="text-xs text-white/30">({task.owner})</span>
                                                                    </label>
                                                                );
                                                            })}
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {activeTab === "timetracking" && (
                <div className="space-y-6">
                    {/* Time Tracking Summary */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="glass-card p-4 rounded-xl">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-accent/20 rounded-lg">
                                    <Timer size={20} className="text-accent" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-white">
                                        {employees.reduce((acc, emp) => acc + emp.timeEntries.reduce((a, t) => a + t.hoursWorked, 0), 0)}
                                    </p>
                                    <p className="text-xs text-white/50">Total Hours This Week</p>
                                </div>
                            </div>
                        </div>
                        <div className="glass-card p-4 rounded-xl">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-green-400/20 rounded-lg">
                                    <CheckCircle size={20} className="text-green-400" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-white">{employees.filter(e => e.timeEntries.length > 0).length}</p>
                                    <p className="text-xs text-white/50">Employees Logged Time</p>
                                </div>
                            </div>
                        </div>
                        <div className="glass-card p-4 rounded-xl">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-yellow-400/20 rounded-lg">
                                    <AlertCircle size={20} className="text-yellow-400" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-white">{employees.filter(e => e.timeEntries.length === 0 && e.status === "Active").length}</p>
                                    <p className="text-xs text-white/50">Missing Time Entries</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Time Entries Table */}
                    <div className="glass-panel rounded-xl overflow-hidden">
                        <div className="p-4 border-b border-white/10 bg-white/5 flex justify-between items-center">
                            <div>
                                <h2 className="text-lg font-bold text-white">Time Entries</h2>
                                <p className="text-sm text-white/50">Employee time tracking and project allocation</p>
                            </div>
                            <button className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white hover:bg-white/10">
                                <Download size={14} /> Export
                            </button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-white/10 bg-white/5">
                                        <th className="text-left p-4 text-xs font-bold text-white/50 uppercase">Employee</th>
                                        <th className="text-left p-4 text-xs font-bold text-white/50 uppercase">Department</th>
                                        <th className="text-left p-4 text-xs font-bold text-white/50 uppercase">Date</th>
                                        <th className="text-left p-4 text-xs font-bold text-white/50 uppercase">Hours</th>
                                        <th className="text-left p-4 text-xs font-bold text-white/50 uppercase">Project</th>
                                        <th className="text-left p-4 text-xs font-bold text-white/50 uppercase">Weekly Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {employees.flatMap(emp =>
                                        emp.timeEntries.length > 0
                                            ? emp.timeEntries.map((entry, idx) => (
                                                <tr key={`${emp.id}-${idx}`} className="border-b border-white/5 hover:bg-white/5">
                                                    <td className="p-4">
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-sm font-bold text-white/40">
                                                                {emp.name.charAt(0)}
                                                            </div>
                                                            <span className="text-white">{emp.name}</span>
                                                        </div>
                                                    </td>
                                                    <td className="p-4 text-white/70">{emp.department}</td>
                                                    <td className="p-4 text-white/70">{new Date(entry.date).toLocaleDateString()}</td>
                                                    <td className="p-4">
                                                        <span className="text-accent font-medium">{entry.hoursWorked}h</span>
                                                    </td>
                                                    <td className="p-4 text-white/70">{entry.project}</td>
                                                    <td className="p-4">
                                                        {idx === 0 && (
                                                            <span className="text-white font-medium">
                                                                {emp.timeEntries.reduce((a, t) => a + t.hoursWorked, 0)}h
                                                            </span>
                                                        )}
                                                    </td>
                                                </tr>
                                            ))
                                            : [{
                                                render: (
                                                    <tr key={emp.id} className="border-b border-white/5 hover:bg-white/5">
                                                        <td className="p-4">
                                                            <div className="flex items-center gap-3">
                                                                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-sm font-bold text-white/40">
                                                                    {emp.name.charAt(0)}
                                                                </div>
                                                                <span className="text-white">{emp.name}</span>
                                                            </div>
                                                        </td>
                                                        <td className="p-4 text-white/70">{emp.department}</td>
                                                        <td className="p-4 text-white/40 italic" colSpan={4}>No time entries</td>
                                                    </tr>
                                                )
                                            }].map(item => item.render)
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === "myprofile" && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Profile Card */}
                    <div className="glass-card p-6 text-center">
                        <div className="w-24 h-24 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4 text-4xl font-bold text-accent">
                            {currentUser.name.charAt(0)}
                        </div>
                        <h2 className="text-2xl font-bold text-white">{currentUser.name}</h2>
                        <p className="text-accent font-medium">{currentUser.role}</p>
                        <p className="text-white/50 text-sm">{currentUser.department}</p>

                        <div className="mt-6 space-y-3 text-left">
                            <div className="flex items-center gap-3 text-sm">
                                <Mail size={16} className="text-white/30" />
                                <span className="text-white/70">{currentUser.email}</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <Phone size={16} className="text-white/30" />
                                <span className="text-white/70">{currentUser.phone}</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <Briefcase size={16} className="text-white/30" />
                                <span className="text-white/70">ID: {currentUser.id}</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <Calendar size={16} className="text-white/30" />
                                <span className="text-white/70">Hired: {new Date(currentUser.hireDate).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <User size={16} className="text-white/30" />
                                <span className="text-white/70">Manager: {currentUser.manager}</span>
                            </div>
                        </div>

                        <div className="mt-6 pt-4 border-t border-white/10">
                            <div className="flex items-center justify-between">
                                <span className="text-white/50 text-sm">Status</span>
                                <span className={`px-2 py-1 rounded text-xs font-medium ${
                                    currentUser.status === "Active" ? "bg-green-500/20 text-green-400" : "bg-blue-500/20 text-blue-400"
                                }`}>
                                    {currentUser.status}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Employment Details */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Onboarding Progress */}
                        <div className="glass-card p-6">
                            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                <ClipboardCheck size={20} className="text-accent" />
                                Onboarding Status
                            </h3>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="flex-1 bg-white/10 rounded-full h-3">
                                    <div
                                        className={`h-3 rounded-full transition-all ${
                                            getOnboardingPercentage(currentUser) === 100 ? "bg-green-500" : "bg-accent"
                                        }`}
                                        style={{ width: `${getOnboardingPercentage(currentUser)}%` }}
                                    />
                                </div>
                                <span className="text-white font-bold">{getOnboardingPercentage(currentUser)}%</span>
                            </div>
                            {currentUser.onboardingComplete ? (
                                <div className="flex items-center gap-2 text-green-400">
                                    <CheckCircle size={16} />
                                    <span>Onboarding Complete</span>
                                </div>
                            ) : (
                                <div className="flex items-center gap-2 text-yellow-400">
                                    <Clock size={16} />
                                    <span>Onboarding In Progress</span>
                                </div>
                            )}
                        </div>

                        {/* Time Tracking Summary */}
                        <div className="glass-card p-6">
                            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                <Timer size={20} className="text-accent" />
                                My Time This Week
                            </h3>
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div className="bg-white/5 rounded-lg p-4">
                                    <p className="text-3xl font-bold text-accent">
                                        {currentUser.timeEntries.reduce((a, t) => a + t.hoursWorked, 0)}h
                                    </p>
                                    <p className="text-sm text-white/50">Hours Logged</p>
                                </div>
                                <div className="bg-white/5 rounded-lg p-4">
                                    <p className="text-3xl font-bold text-white">
                                        {currentUser.timeEntries.length}
                                    </p>
                                    <p className="text-sm text-white/50">Time Entries</p>
                                </div>
                            </div>
                            <div className="space-y-2">
                                {currentUser.timeEntries.length > 0 ? currentUser.timeEntries.map((entry, idx) => (
                                    <div key={idx} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                                        <div>
                                            <p className="text-white font-medium">{entry.project}</p>
                                            <p className="text-xs text-white/50">{new Date(entry.date).toLocaleDateString()}</p>
                                        </div>
                                        <span className="text-accent font-bold">{entry.hoursWorked}h</span>
                                    </div>
                                )) : (
                                    <p className="text-white/50 text-center py-4">No time entries this week</p>
                                )}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="glass-card p-6">
                            <h3 className="text-lg font-bold text-white mb-4">Quick Actions</h3>
                            <div className="grid grid-cols-2 gap-3">
                                <button className="p-3 bg-white/5 hover:bg-white/10 rounded-lg text-left transition-colors">
                                    <FileText size={20} className="text-accent mb-2" />
                                    <p className="text-white font-medium">View Handbook</p>
                                    <p className="text-xs text-white/50">Employee policies</p>
                                </button>
                                <button className="p-3 bg-white/5 hover:bg-white/10 rounded-lg text-left transition-colors">
                                    <DollarSign size={20} className="text-accent mb-2" />
                                    <p className="text-white font-medium">Benefits</p>
                                    <p className="text-xs text-white/50">View your benefits</p>
                                </button>
                                <button className="p-3 bg-white/5 hover:bg-white/10 rounded-lg text-left transition-colors">
                                    <Calendar size={20} className="text-accent mb-2" />
                                    <p className="text-white font-medium">Request Time Off</p>
                                    <p className="text-xs text-white/50">Submit PTO request</p>
                                </button>
                                <button className="p-3 bg-white/5 hover:bg-white/10 rounded-lg text-left transition-colors">
                                    <Building size={20} className="text-accent mb-2" />
                                    <p className="text-white font-medium">Company Directory</p>
                                    <p className="text-xs text-white/50">Find colleagues</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Add Employee Modal */}
            {showAddModal && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
                    <div className="glass-panel rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                        <div className="p-6 border-b border-white/10 flex justify-between items-center">
                            <div>
                                <h2 className="text-xl font-bold text-white">Add New Employee</h2>
                                <p className="text-sm text-white/50">Enter employee information based on HR guidelines</p>
                            </div>
                            <button
                                onClick={() => setShowAddModal(false)}
                                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                            >
                                <X size={20} className="text-white/50" />
                            </button>
                        </div>

                        <div className="p-6 space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-white/70 mb-2">Full Name *</label>
                                    <input
                                        type="text"
                                        value={newEmployee.name}
                                        onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-accent/50"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-white/70 mb-2">Email *</label>
                                    <input
                                        type="email"
                                        value={newEmployee.email}
                                        onChange={(e) => setNewEmployee({ ...newEmployee, email: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-accent/50"
                                        placeholder="john@ecofusion.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-white/70 mb-2">Phone</label>
                                    <input
                                        type="tel"
                                        value={newEmployee.phone}
                                        onChange={(e) => setNewEmployee({ ...newEmployee, phone: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-accent/50"
                                        placeholder="(555) 123-4567"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-white/70 mb-2">Position *</label>
                                    <select
                                        value={newEmployee.roleCode}
                                        onChange={(e) => setNewEmployee({ ...newEmployee, roleCode: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-accent/50"
                                    >
                                        <option value="">Select Position</option>
                                        {JOB_ROLES.map(role => (
                                            <option key={role.code} value={role.code}>
                                                {role.title} ({role.department})
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-white/70 mb-2">Start Date *</label>
                                    <input
                                        type="date"
                                        value={newEmployee.hireDate}
                                        onChange={(e) => setNewEmployee({ ...newEmployee, hireDate: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-accent/50"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-white/70 mb-2">Reports To</label>
                                    <select
                                        value={newEmployee.manager}
                                        onChange={(e) => setNewEmployee({ ...newEmployee, manager: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-accent/50"
                                    >
                                        <option value="">Select Manager</option>
                                        {employees.map(emp => (
                                            <option key={emp.id} value={emp.name}>{emp.name} - {emp.role}</option>
                                        ))}
                                        <option value="Brad Phillips">Brad Phillips - CEO</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-white/70 mb-2">Annual Salary</label>
                                    <input
                                        type="number"
                                        value={newEmployee.salary}
                                        onChange={(e) => setNewEmployee({ ...newEmployee, salary: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-accent/50"
                                        placeholder="50000"
                                    />
                                </div>
                            </div>

                            <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                                <h4 className="text-accent font-medium mb-2">Onboarding will be initiated</h4>
                                <p className="text-sm text-white/60">
                                    Once added, the employee will appear in the HR Onboarding tab with a checklist based on EcoFusion&apos;s onboarding guidelines including pre-boarding, Day 1, Week 1, and 30-60-90 day milestones.
                                </p>
                            </div>
                        </div>

                        <div className="p-6 border-t border-white/10 flex justify-end gap-3">
                            <button
                                onClick={() => setShowAddModal(false)}
                                className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleAddEmployee}
                                disabled={!newEmployee.name || !newEmployee.email || !newEmployee.roleCode}
                                className="px-4 py-2 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Add Employee
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Employee Profile Modal */}
            {showProfileModal && selectedEmployee && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
                    <div className="glass-panel rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
                        <div className="p-6 border-b border-white/10 flex justify-between items-center">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center text-2xl font-bold text-accent">
                                    {selectedEmployee.name.charAt(0)}
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-white">{selectedEmployee.name}</h2>
                                    <p className="text-accent">{selectedEmployee.role}</p>
                                </div>
                            </div>
                            <button
                                onClick={() => { setShowProfileModal(false); setSelectedEmployee(null); }}
                                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                            >
                                <X size={20} className="text-white/50" />
                            </button>
                        </div>

                        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <h3 className="text-lg font-bold text-white">Contact Information</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <Mail size={16} className="text-white/30" />
                                        <span className="text-white/70">{selectedEmployee.email}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Phone size={16} className="text-white/30" />
                                        <span className="text-white/70">{selectedEmployee.phone}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-lg font-bold text-white">Employment Details</h3>
                                <div className="space-y-3 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-white/50">Employee ID</span>
                                        <span className="text-white">{selectedEmployee.id}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-white/50">Department</span>
                                        <span className="text-white">{selectedEmployee.department}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-white/50">Role Code</span>
                                        <span className="text-white">{selectedEmployee.roleCode}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-white/50">Hire Date</span>
                                        <span className="text-white">{new Date(selectedEmployee.hireDate).toLocaleDateString()}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-white/50">Manager</span>
                                        <span className="text-white">{selectedEmployee.manager}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-white/50">Status</span>
                                        <span className={`px-2 py-0.5 rounded text-xs ${
                                            selectedEmployee.status === "Active" ? "bg-green-500/20 text-green-400" : "bg-blue-500/20 text-blue-400"
                                        }`}>
                                            {selectedEmployee.status}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="md:col-span-2">
                                <h3 className="text-lg font-bold text-white mb-4">Onboarding Progress</h3>
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="flex-1 bg-white/10 rounded-full h-3">
                                        <div
                                            className={`h-3 rounded-full ${
                                                getOnboardingPercentage(selectedEmployee) === 100 ? "bg-green-500" : "bg-accent"
                                            }`}
                                            style={{ width: `${getOnboardingPercentage(selectedEmployee)}%` }}
                                        />
                                    </div>
                                    <span className="text-white font-bold">{getOnboardingPercentage(selectedEmployee)}%</span>
                                </div>
                                <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                                    {Object.entries(selectedEmployee.onboardingProgress).map(([phase, count]) => {
                                        const labels: Record<string, string> = {
                                            preboarding: "Pre-Board",
                                            day1: "Day 1",
                                            week1: "Week 1",
                                            days30: "30 Days",
                                            days60: "60 Days",
                                            days90: "90 Days"
                                        };
                                        const maxCounts: Record<string, number> = {
                                            preboarding: 9, day1: 10, week1: 6, days30: 5, days60: 3, days90: 4
                                        };
                                        const isComplete = count === maxCounts[phase];
                                        return (
                                            <div key={phase} className={`p-2 rounded-lg text-center ${isComplete ? "bg-green-500/20" : "bg-white/5"}`}>
                                                <p className={`text-lg font-bold ${isComplete ? "text-green-400" : "text-white"}`}>
                                                    {count}/{maxCounts[phase]}
                                                </p>
                                                <p className="text-xs text-white/50">{labels[phase]}</p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        <div className="p-6 border-t border-white/10 flex justify-end gap-3">
                            <button
                                onClick={() => { setShowProfileModal(false); setSelectedEmployee(null); }}
                                className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white transition-colors"
                            >
                                Close
                            </button>
                            <button className="px-4 py-2 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90 transition-colors">
                                Edit Employee
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
