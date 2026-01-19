"use client";
import Link from "next/link";
import SensorWidget from "@/components/widgets/SensorWidget";
import { useZones } from "@/lib/contexts/ZoneContext";
import { Plus, RefreshCw, AlertCircle } from "lucide-react";

export default function OperationsDashboard() {
    const { zones, loading, error, refreshZones } = useZones();

    if (loading) {
        return (
            <div className="space-y-8 pb-10">
                <div className="flex justify-between items-end">
                    <div>
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                            Operations Center
                        </h1>
                        <p className="text-white/50 mt-1">Real-time facility monitoring and control</p>
                    </div>
                </div>
                <div className="space-y-6">
                    {[1, 2].map(i => (
                        <div key={i} className="glass-card p-6 animate-pulse">
                            <div className="h-6 bg-white/10 rounded w-1/3 mb-4" />
                            <div className="grid grid-cols-6 gap-4">
                                {[1, 2, 3, 4, 5, 6].map(j => (
                                    <div key={j} className="h-20 bg-white/5 rounded" />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="space-y-8 pb-10">
                <div className="flex justify-between items-end">
                    <div>
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                            Operations Center
                        </h1>
                        <p className="text-white/50 mt-1">Real-time facility monitoring and control</p>
                    </div>
                </div>
                <div className="glass-card p-8 text-center">
                    <AlertCircle size={48} className="mx-auto mb-4 text-red-400" />
                    <h3 className="text-xl font-bold text-white mb-2">Error Loading Zones</h3>
                    <p className="text-white/50 mb-4">{error}</p>
                    <button onClick={refreshZones} className="px-4 py-2 bg-accent text-primary font-bold rounded-lg">
                        Retry
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-8 pb-10">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                        Operations Center
                    </h1>
                    <p className="text-white/50 mt-1">Real-time facility monitoring and control</p>
                </div>
                <div className="flex items-center gap-4">
                    <button onClick={refreshZones} className="p-2 hover:bg-white/10 rounded-lg transition-colors text-white/50 hover:text-white">
                        <RefreshCw size={16} />
                    </button>
                    <div className="flex items-center gap-2 text-xs text-white/30">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        System Online • Auto-refresh: 30s
                    </div>
                </div>
            </div>

            {zones.length === 0 ? (
                <div className="glass-card p-12 text-center">
                    <Plus size={48} className="mx-auto mb-4 text-white/30" />
                    <h3 className="text-xl font-bold text-white mb-2">No zones configured</h3>
                    <p className="text-white/50 mb-6">Add your first monitoring zone to get started</p>
                    <Link href="/dashboard/operations/configure/new" className="px-4 py-2 bg-accent text-primary font-bold rounded-lg">
                        Add Zone
                    </Link>
                </div>
            ) : (
                zones.map(zone => (
                    <div key={zone.id} className="space-y-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-bold text-white flex items-center gap-3">
                                <span className={`w-1.5 h-8 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.2)] ${zone.type === 'hydroponics' ? 'bg-accent shadow-[0_0_10px_rgba(74,222,128,0.5)]' : zone.type === 'aquaculture' ? 'bg-secondary shadow-[0_0_10px_rgba(44,177,207,0.5)]' : 'bg-white'}`}></span>
                                {zone.name}
                            </h2>
                            <Link href={`/dashboard/operations/configure/${zone.id}`} className={`text-xs hover:text-white transition-colors uppercase tracking-wider font-bold border px-3 py-1 rounded hover:bg-white/10 ${zone.type === 'hydroponics' ? 'text-accent border-accent/20' : zone.type === 'aquaculture' ? 'text-secondary border-secondary/20' : 'text-white border-white/20'}`}>
                                Configure
                            </Link>
                        </div>

                        {zone.metrics ? (
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                                {zone.metrics.temp !== null && (
                                    <SensorWidget label="Water Temp" value={zone.metrics.temp.toString()} unit="°F" status={zone.metrics.temp > 80 || zone.metrics.temp < 65 ? "warning" : "good"} />
                                )}
                                {zone.metrics.ph !== null && (
                                    <SensorWidget label="pH Level" value={zone.metrics.ph.toString()} unit="pH" status={zone.metrics.ph < 6.5 || zone.metrics.ph > 7.5 ? "warning" : "good"} />
                                )}
                                {zone.metrics.do !== null && zone.metrics.do !== undefined && (
                                    <SensorWidget label="Dissolved O2" value={zone.metrics.do.toString()} unit="mg/L" status={zone.metrics.do < 6 ? "warning" : "good"} />
                                )}
                                {zone.metrics.ammonia !== null && zone.metrics.ammonia !== undefined && (
                                    <SensorWidget label="Ammonia" value={zone.metrics.ammonia.toString()} unit="ppm" status={zone.metrics.ammonia > 0.05 ? "warning" : "good"} />
                                )}
                                {zone.metrics.humidity !== null && zone.metrics.humidity !== undefined && (
                                    <SensorWidget label="Humidity" value={zone.metrics.humidity.toString()} unit="%" status={zone.metrics.humidity < 40 ? "warning" : "good"} />
                                )}
                                <SensorWidget label="Conn. Status" value="OK" unit="" status="good" />
                            </div>
                        ) : (
                            <div className="glass-card p-6 text-center text-white/50">
                                <p>No sensor readings available for this zone</p>
                                <p className="text-xs mt-2">Add sensor readings to see metrics</p>
                            </div>
                        )}
                    </div>
                ))
            )}

            <div className="flex justify-center mt-6">
                <Link href="/dashboard/operations/configure/new" className="group flex items-center gap-3 px-6 py-4 glass-card hover:bg-white/5 border border-white/10 hover:border-accent/40 rounded-xl transition-all">
                    <div className="p-2 rounded-lg bg-white/5 group-hover:bg-accent/20 group-hover:text-accent transition-colors">
                        <Plus size={24} />
                    </div>
                    <div className="text-left">
                        <p className="font-bold text-white group-hover:text-accent transition-colors">Add Monitoring Zone</p>
                        <p className="text-xs text-white/50">Setup new sensor array</p>
                    </div>
                </Link>
            </div>

            <div className="glass-panel p-6 rounded-2xl mt-8">
                <h3 className="text-lg font-bold text-white mb-4">Live Camera Feed</h3>
                <div className="aspect-video bg-black/40 rounded-lg flex items-center justify-center border border-white/5 relative overflow-hidden">
                    <div className="absolute top-4 left-4 bg-red-500/80 text-white text-[10px] font-bold px-2 py-0.5 rounded animate-pulse">LIVE</div>
                    <p className="text-white/20 font-mono">CAMERA SIGNAL FEED NOT CONNECTED</p>
                </div>
            </div>
        </div>
    );
}
