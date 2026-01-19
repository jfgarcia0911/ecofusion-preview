"use client";
import { useState, useEffect, useCallback } from "react";
import KpiCard from "@/components/widgets/KpiCard";
import RevenueChart from "@/components/widgets/RevenueChart";
import AlertWidget from "@/components/widgets/AlertWidget";
import AlertDetailModal from "@/components/modals/AlertDetailModal";
import { DollarSign, Activity, Leaf, AlertTriangle } from "lucide-react";

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

interface DashboardStats {
    kpis: {
        totalRevenue: { value: number; change: number };
        monthlyRevenue: { value: number; change: number };
        yieldRate: { value: number; unit: string; change: number };
        activeZones: { value: number; total: number };
        systemEfficiency: { value: number; unit: string };
        activeAlerts: { value: number };
    };
    revenueChart: Array<{ name: string; revenue: number }>;
}

export default function ExecutiveDashboard() {
    const [selectedAlert, setSelectedAlert] = useState<Alert | null>(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [refreshKey, setRefreshKey] = useState(0);
    const [stats, setStats] = useState<DashboardStats | null>(null);
    const [loading, setLoading] = useState(true);

    const fetchStats = useCallback(async () => {
        try {
            const response = await fetch('/api/dashboard/stats');
            if (response.ok) {
                const data = await response.json();
                setStats(data);
            }
        } catch (err) {
            console.error('Error fetching dashboard stats:', err);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchStats();
        const interval = setInterval(fetchStats, 60000); // Refresh every minute
        return () => clearInterval(interval);
    }, [fetchStats]);

    const handleAlertClick = (alert: Alert) => {
        setSelectedAlert(alert);
        setModalOpen(true);
    };

    const handleAlertUpdated = () => {
        setRefreshKey(prev => prev + 1);
        fetchStats(); // Refresh stats when alerts change
    };

    const formatCurrency = (value: number) => {
        if (value >= 1000000) return `$${(value / 1000000).toFixed(1)}M`;
        if (value >= 1000) return `$${(value / 1000).toFixed(1)}K`;
        return `$${value.toFixed(0)}`;
    };

    const formatChange = (change: number) => {
        const sign = change >= 0 ? '+' : '';
        return `${sign}${change.toFixed(1)}%`;
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
                {loading ? (
                    <>
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="glass-card p-6 animate-pulse">
                                <div className="h-4 bg-white/10 rounded w-1/2 mb-4" />
                                <div className="h-8 bg-white/10 rounded w-3/4" />
                            </div>
                        ))}
                    </>
                ) : (
                    <>
                        <KpiCard
                            title="Total Revenue"
                            value={stats ? formatCurrency(stats.kpis.totalRevenue.value) : '$0'}
                            change={stats ? formatChange(stats.kpis.totalRevenue.change) : '0%'}
                            trend={stats && stats.kpis.totalRevenue.change >= 0 ? 'up' : 'down'}
                            icon={DollarSign}
                        />
                        <KpiCard
                            title="Monthly Yield"
                            value={stats ? `${stats.kpis.yieldRate.value.toLocaleString()} ${stats.kpis.yieldRate.unit}` : '0 lbs'}
                            change={stats ? formatChange(stats.kpis.yieldRate.change) : '0%'}
                            trend={stats && stats.kpis.yieldRate.change >= 0 ? 'up' : 'down'}
                            icon={Leaf}
                        />
                        <KpiCard
                            title="System Efficiency"
                            value={stats ? `${stats.kpis.systemEfficiency.value}%` : '0%'}
                            change={`${stats?.kpis.activeZones.value || 0}/${stats?.kpis.activeZones.total || 0} zones`}
                            trend="up"
                            icon={Activity}
                        />
                        <KpiCard
                            title="Active Alerts"
                            value={stats ? stats.kpis.activeAlerts.value.toString() : '0'}
                            change={stats && stats.kpis.activeAlerts.value > 0 ? 'needs attention' : 'all clear'}
                            trend={stats && stats.kpis.activeAlerts.value === 0 ? 'up' : 'down'}
                            icon={AlertTriangle}
                        />
                    </>
                )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <RevenueChart data={stats?.revenueChart} loading={loading} />
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
