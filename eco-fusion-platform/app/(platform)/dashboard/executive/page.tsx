import KpiCard from "@/components/widgets/KpiCard";
import RevenueChart from "@/components/widgets/RevenueChart";
import { DollarSign, Fish, Leaf, Zap } from "lucide-react";

export default function ExecutiveDashboard() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                        Executive Summary
                    </h1>
                    <p className="text-white/50 mt-1">Real-time overview of business performance</p>
                </div>
                <div className="flex gap-3">
                    <button className="px-4 py-2 bg-accent/10 text-accent rounded-lg text-sm font-medium hover:bg-accent/20 transition-colors cursor-pointer">
                        Export Report
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <KpiCard title="Total Revenue" value="$425,000" change="+15%" trend="up" icon={DollarSign} />
                <KpiCard title="Yield Rate" value="23.5 lbs/sqft" change="+1.2%" trend="up" icon={Leaf} />
                <KpiCard title="Sustainability" value="95% Renewable" change="+5%" trend="up" icon={Zap} />
                <KpiCard title="OpEx Monthly" value="$187,000" change="-1.6%" trend="up" icon={Fish} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <RevenueChart />
                </div>
                <div className="glass-card p-6">
                    <h3 className="text-lg font-bold mb-4 text-white">Critical Alerts</h3>
                    <div className="space-y-4">
                        <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg flex gap-3 items-start">
                            <div className="w-2 h-2 mt-2 rounded-full bg-red-500 animate-pulse" />
                            <div>
                                <p className="text-sm font-medium text-red-200">Cold Storage Warning</p>
                                <p className="text-xs text-red-200/50">Temp dropped below 30°F in Zone B</p>
                            </div>
                        </div>
                        <div className="p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg flex gap-3 items-start">
                            <div className="w-2 h-2 mt-2 rounded-full bg-yellow-500" />
                            <div>
                                <p className="text-sm font-medium text-yellow-200">Inventory Low</p>
                                <p className="text-xs text-yellow-200/50">Fish feed stock below 15%</p>
                            </div>
                        </div>
                        <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg flex gap-3 items-start">
                            <div className="w-2 h-2 mt-2 rounded-full bg-blue-500" />
                            <div>
                                <p className="text-sm font-medium text-blue-200">New Employee Onboarding</p>
                                <p className="text-xs text-blue-200/50">Pending approval for J. Doe</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
