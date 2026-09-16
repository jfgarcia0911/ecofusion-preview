"use client";
import { useState } from "react";
import Link from "next/link";
import SensorWidget from "@/components/widgets/SensorWidget";
import SensorInputModal from "@/components/modals/SensorInputModal";
import { useZones, type Zone } from "@/lib/contexts/ZoneContext";
import { Plus, RefreshCw, AlertCircle, PlusCircle } from "lucide-react";
import { useUnits } from "@/lib/contexts/UnitContext";
import { temperatureToDisplay, temperatureLabel, round } from "@/lib/units";
import { OperationsSkeleton } from "@/components/skeletons/DashboardSkeletons";

/**
 * Sensor values are stored as floats, so arithmetic can leave binary drift
 * (7.300000000000001). Round to a sensible precision for display.
 */
const fmtMetric = (value: number, decimals: number) => value.toFixed(decimals);

type SensorParameter = "temperature" | "ph" | "dissolvedO2" | "ammonia" | "humidity";

// Default range for each reading, used when the zone has no enabled threshold of
// its own for that parameter. Keys match the parameter names the configure page
// saves. Temperature is in Celsius - the unit the database stores - so the
// user's display preference cannot change what counts as a warning.
const DEFAULT_RANGES: Record<SensorParameter, { min: number | null; max: number | null }> = {
    temperature: { min: 18, max: 30 },
    ph: { min: 6.5, max: 7.5 },
    dissolvedO2: { min: 6, max: null },
    ammonia: { min: null, max: 0.05 },
    humidity: { min: 40, max: null },
};

// A zone's own thresholds are what the readings route raises alerts from, so the
// tiles use them too. Otherwise a tile could show a warning the zone was set up
// not to care about, or stay green while an alert fires.
function readingStatus(zone: Zone, parameter: SensorParameter, value: number): "good" | "warning" {
    const configured = zone.alertThresholds?.find(t => t.parameter === parameter && t.enabled);
    const range = configured
        ? { min: configured.minValue, max: configured.maxValue }
        : DEFAULT_RANGES[parameter];
    if (range.min !== null && value < range.min) return "warning";
    if (range.max !== null && value > range.max) return "warning";
    return "good";
}

// Only non-active states get a badge: if every zone carried one, the one that
// actually needs attention would not stand out.
const STATUS_BADGES: Record<string, { label: string; className: string }> = {
    maintenance: {
        label: "Maintenance",
        className: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    },
    offline: {
        label: "Offline",
        className: "bg-red-500/10 text-red-400 border-red-500/20",
    },
};

export default function OperationsDashboard() {
    const { zones, loading, error, refreshZones } = useZones();
    const { units } = useUnits();
    const [sensorModalOpen, setSensorModalOpen] = useState(false);
    const [selectedZone, setSelectedZone] = useState<{ id: string; name: string } | null>(null);

    const openSensorModal = (zone: { id: string; name: string }) => {
        setSelectedZone(zone);
        setSensorModalOpen(true);
    };

    const closeSensorModal = () => {
        setSensorModalOpen(false);
        setSelectedZone(null);
    };

    const handleReadingAdded = () => {
        refreshZones();
    };

    // The same component the route's loading file renders, so the placeholder
    // the server showed and the one this page shows while it fetches are one
    // continuous thing rather than two that swap.
    if (loading) {
        return <OperationsSkeleton />;
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
                    <button
                        onClick={refreshZones}
                        aria-label="Refresh zones"
                        title="Refresh zones"
                        className="p-2 hover:bg-white/10 rounded-lg transition-colors text-white/50 hover:text-white"
                    >
                        <RefreshCw size={16} />
                    </button>
                    {/* Nothing here checks whether the system is up, so it only
                        says what it does know: how often the page refreshes. */}
                    <div className="text-xs text-white/30">
                        Auto-refresh: 30s
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
                                {STATUS_BADGES[zone.status] && (
                                    <span
                                        className={`text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded border ${STATUS_BADGES[zone.status].className}`}
                                    >
                                        {STATUS_BADGES[zone.status].label}
                                    </span>
                                )}
                            </h2>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => openSensorModal({ id: zone.id, name: zone.name })}
                                    className={`flex items-center gap-1 text-xs hover:text-white transition-colors uppercase tracking-wider font-bold border px-3 py-1 rounded hover:bg-white/10 ${zone.type === 'hydroponics' ? 'text-accent border-accent/20' : zone.type === 'aquaculture' ? 'text-secondary border-secondary/20' : 'text-white border-white/20'}`}
                                >
                                    <PlusCircle size={14} />
                                    Add Reading
                                </button>
                                <Link href={`/dashboard/operations/configure/${zone.id}`} className={`text-xs hover:text-white transition-colors uppercase tracking-wider font-bold border px-3 py-1 rounded hover:bg-white/10 ${zone.type === 'hydroponics' ? 'text-accent border-accent/20' : zone.type === 'aquaculture' ? 'text-secondary border-secondary/20' : 'text-white border-white/20'}`}>
                                    Configure
                                </Link>
                            </div>
                        </div>

                        {zone.status !== "active" && zone.metrics && (
                            <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-white/50">
                                This zone is {zone.status}. The readings below are the last
                                recorded values and may not reflect current conditions.
                            </div>
                        )}

                        {zone.metrics ? (
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                                {zone.metrics.temp !== null && (
                                    <SensorWidget label="Water Temp" value={round(temperatureToDisplay(zone.metrics.temp, units.temperature), 1)} unit={temperatureLabel(units.temperature)} status={readingStatus(zone, "temperature", zone.metrics.temp)} />
                                )}
                                {zone.metrics.ph !== null && (
                                    <SensorWidget label="pH Level" value={fmtMetric(zone.metrics.ph, 1)} unit="pH" status={readingStatus(zone, "ph", zone.metrics.ph)} />
                                )}
                                {zone.metrics.do !== null && zone.metrics.do !== undefined && (
                                    <SensorWidget label="Dissolved O2" value={fmtMetric(zone.metrics.do, 1)} unit="mg/L" status={readingStatus(zone, "dissolvedO2", zone.metrics.do)} />
                                )}
                                {zone.metrics.ammonia !== null && zone.metrics.ammonia !== undefined && (
                                    <SensorWidget label="Ammonia" value={fmtMetric(zone.metrics.ammonia, 2)} unit="ppm" status={readingStatus(zone, "ammonia", zone.metrics.ammonia)} />
                                )}
                                {zone.metrics.humidity !== null && zone.metrics.humidity !== undefined && (
                                    <SensorWidget label="Humidity" value={fmtMetric(zone.metrics.humidity, 0)} unit="%" status={readingStatus(zone, "humidity", zone.metrics.humidity)} />
                                )}
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
                <h3 className="text-lg font-bold text-white mb-4">Camera Feed</h3>
                <div className="aspect-video bg-black/40 rounded-lg flex items-center justify-center border border-white/5">
                    <p className="text-white/30 text-sm">No camera connected</p>
                </div>
            </div>

            {selectedZone && (
                <SensorInputModal
                    isOpen={sensorModalOpen}
                    onClose={closeSensorModal}
                    zoneId={selectedZone.id}
                    zoneName={selectedZone.name}
                    onReadingAdded={handleReadingAdded}
                />
            )}
        </div>
    );
}
