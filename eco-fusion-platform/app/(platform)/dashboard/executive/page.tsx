"use client";
import { useState } from "react";
import KpiCard from "@/components/widgets/KpiCard";
import RevenueChart from "@/components/widgets/RevenueChart";
import AlertWidget from "@/components/widgets/AlertWidget";
import AlertDetailModal from "@/components/modals/AlertDetailModal";
import { DollarSign, Fish, Leaf, Zap } from "lucide-react";

interface Alert {
    id: string;
    title: string;
    message: string;
    severity: "info" | "warning" | "critical";
    status: "active" | "acknowledged" | "resolved";
    type: string;
    createdAt: string;
    resolvedAt?: string | null;
    resolution?: string | null;
    zone?: { id: string; name: string } | null;
    assignee?: { id: string; name: string; email: string } | null;
}

export default function ExecutiveDashboard() {
    const [selectedAlert, setSelectedAlert] = useState<Alert | null>(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [refreshKey, setRefreshKey] = useState(0);

    const handleAlertClick = (alert: Alert) => {
        setSelectedAlert(alert);
        setModalOpen(true);
    };

    const handleAlertUpdated = () => {
        setRefreshKey(prev => prev + 1);
    };

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
                <AlertWidget
                    key={refreshKey}
                    title="Critical Alerts"
                    limit={5}
                    showOnlyActive={true}
                    onAlertClick={handleAlertClick}
                />
            </div>

            <AlertDetailModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                alert={selectedAlert}
                onAlertUpdated={handleAlertUpdated}
            />
        </div>
    );
}
