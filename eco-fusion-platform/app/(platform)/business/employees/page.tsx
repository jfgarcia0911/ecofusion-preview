import { User, Mail, Phone, Calendar } from "lucide-react";

const employees = [
    { id: 1, name: "Sarah Jenkins", role: "Lead Grower", email: "sarah@ecofusion.com", status: "Active" },
    { id: 2, name: "Mike Ross", role: "Aquaculture Specialist", email: "mike@ecofusion.com", status: "Active" },
    { id: 3, name: "David Kim", role: "Operations Manager", email: "david@ecofusion.com", status: "On Leave" },
    { id: 4, name: "Jessica Chen", role: "Harvest Technician", email: "jessica@ecofusion.com", status: "Active" },
];

export default function EmployeesPage() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                        Employee Directory
                    </h1>
                    <p className="text-white/50 mt-1">Manage staff and permissions</p>
                </div>
                <button className="px-4 py-2 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90 transition-colors cursor-pointer">
                    Add Employee
                </button>
            </div>

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
                                ID: EF-00{emp.id}
                            </div>
                            <div className="flex items-center gap-3">
                                <div className={`w-2 h-2 rounded-full ${emp.status === 'Active' ? 'bg-green-500' : 'bg-yellow-500'}`} />
                                {emp.status}
                            </div>
                        </div>

                        <div className="mt-6 flex gap-3 w-full">
                            <button className="flex-1 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-sm text-white transition-colors cursor-pointer">View Profile</button>
                            <button className="flex-1 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-sm text-white transition-colors cursor-pointer">Edit</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
