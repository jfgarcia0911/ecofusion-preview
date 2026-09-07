"use client";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { ArrowLeft, Save, RotateCcw, Thermometer, Droplets, Wind, Clock, Wifi, Bluetooth, Cable, Zap, AlertTriangle, Plus, Trash2 } from "lucide-react";
import { useUnits } from "@/lib/contexts/UnitContext";
import { temperatureToDisplay, temperatureToCanonical, temperatureLabel } from "@/lib/units";
import clsx from "clsx";
import { useZones, Zone } from "@/lib/contexts/ZoneContext";
import { useConfirm } from "@/components/ui/ConfirmDialog";

const equipmentList = [
    { name: "Main Pump (2000 GPH)", wattage: 150 },
    { name: "Air Pump (Commercial)", wattage: 80 },
    { name: "LED Grow Lights (Bar)", wattage: 300 },
    { name: "Water Heater (1000W)", wattage: 1000 },
    { name: "UV Sterilizer", wattage: 55 },
];

interface SensorConfig {
    type: "wifi" | "bluetooth" | "wired";
    protocol: "mqtt" | "http" | "ble" | "serial";
}

interface AlertThreshold {
    id: string;
    parameter: string;
    minValue: number | null;
    maxValue: number | null;
    enabled: boolean;
    alertLevel: string;
}

const SENSOR_PARAMETERS = [
    { key: 'temperature', label: 'Temperature', unit: '°C', defaultMin: 18, defaultMax: 30 },
    { key: 'ph', label: 'pH Level', unit: 'pH', defaultMin: 6.5, defaultMax: 7.5 },
    { key: 'dissolvedO2', label: 'Dissolved O2', unit: 'mg/L', defaultMin: 6, defaultMax: 12 },
    { key: 'ammonia', label: 'Ammonia', unit: 'ppm', defaultMin: 0, defaultMax: 0.05 },
    { key: 'humidity', label: 'Humidity', unit: '%', defaultMin: 40, defaultMax: 70 },
];

export default function ZoneConfigurationPage() {
    const confirmAction = useConfirm();
    const params = useParams();
    const router = useRouter();
    const { zones, saveZone, removeZone, addZone, refreshZones } = useZones();

    const zoneId = params?.zoneId as string | undefined;
    const isNewZone = zoneId === "new";

    const { units } = useUnits();
    const [localZone, setLocalZone] = useState<{ name: string; type: string; status: string } | null>(null);
    const [sensorConfig, setSensorConfig] = useState<SensorConfig>({ type: "wifi", protocol: "mqtt" });
    const [saving, setSaving] = useState(false);
    const [alertThresholds, setAlertThresholds] = useState<AlertThreshold[]>([]);
    const [savingThreshold, setSavingThreshold] = useState<string | null>(null);

    // Power Calculation State
    const [equipment, setEquipment] = useState<{ name: string, wattage: number, qty: number }[]>([
        { name: "Main Pump (2000 GPH)", wattage: 150, qty: 1 }
    ]);

    useEffect(() => {
        if (!zoneId) return;
        if (isNewZone) {
            setLocalZone({
                name: "New Zone",
                type: "hydroponics",
                status: "active",
            });
        } else {
            const found = zones.find(z => z.id === zoneId);
            if (found) {
                setLocalZone({
                    name: found.name,
                    type: found.type,
                    status: found.status,
                });
            }
            // Fetch alert thresholds
            fetchThresholds();
        }
    }, [zones, zoneId, isNewZone]);

    const fetchThresholds = async () => {
        if (!zoneId || isNewZone) return;
        try {
            const response = await fetch(`/api/zones/${zoneId}/alerts`);
            if (response.ok) {
                const data = await response.json();
                setAlertThresholds(data);
            }
        } catch (err) {
            console.error('Failed to fetch thresholds:', err);
        }
    };

    const saveThreshold = async (parameter: string, minValue: number | null, maxValue: number | null, enabled: boolean, alertLevel: string) => {
        if (!zoneId || isNewZone) return;
        setSavingThreshold(parameter);
        try {
            const response = await fetch(`/api/zones/${zoneId}/alerts`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ parameter, minValue, maxValue, enabled, alertLevel }),
            });
            if (response.ok) {
                const updated = await response.json();
                setAlertThresholds(prev => {
                    const exists = prev.find(t => t.parameter === parameter);
                    if (exists) {
                        return prev.map(t => t.parameter === parameter ? updated : t);
                    }
                    return [...prev, updated];
                });
            }
        } catch (err) {
            console.error('Failed to save threshold:', err);
        } finally {
            setSavingThreshold(null);
        }
    };

    const getThreshold = (parameter: string): AlertThreshold | undefined => {
        return alertThresholds.find(t => t.parameter === parameter);
    };

    if (!localZone) return <div className="text-white p-6">Loading zone data...</div>;

    const totalWatts = equipment.reduce((acc, item) => acc + (item.wattage * item.qty), 0);
    const monthlyCost = ((totalWatts * 24 * 30) / 1000) * 0.12; // Assuming $0.12/kWh

    const handleSave = async () => {
        setSaving(true);
        try {
            if (isNewZone) {
                const result = await addZone({
                    name: localZone.name,
                    type: localZone.type as Zone["type"],
                    status: localZone.status as Zone["status"],
                });
                if (result) {
                    router.back();
                }
            } else if (zoneId) {
                const saved = await saveZone(zoneId, localZone as Partial<Zone>);
                if (saved) router.back();
            }
        } finally {
            setSaving(false);
        }
    };

    const handleDelete = async () => {
        if (await confirmAction({
            title: "Delete this zone?",
            message: "The zone and its sensor history will be removed. This cannot be undone.",
            confirmLabel: "Delete",
            tone: "danger",
        })) {
            if (zoneId) {
                const success = await removeZone(zoneId);
                if (success) {
                    router.back();
                }
            }
        }
    };

    return (
        <div className="space-y-6">
            <button onClick={() => router.back()} className="flex items-center gap-2 text-white/50 hover:text-white transition-colors">
                <ArrowLeft size={16} /> Back to Operations
            </button>

            <div className="flex justify-between items-end border-b border-white/10 pb-6">
                <div>
                    <input
                        type="text"
                        value={localZone.name}
                        onChange={(e) => setLocalZone({ ...localZone, name: e.target.value })}
                        className="text-3xl font-bold text-white mb-2 bg-transparent border-none focus:outline-none focus:ring-1 focus:ring-accent rounded px-2 -ml-2 w-full max-w-lg"
                    />
                    <p className="text-white/50">System parameter configuration and calibration</p>
                </div>

                    <div>
                        <label className="block text-sm text-white/70 mb-1">Operational Status</label>
                        <select
                            value={localZone.status}
                            onChange={(e) => setLocalZone({ ...localZone, status: e.target.value })}
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-accent/50"
                        >
                            <option value="active">Active - running normally</option>
                            <option value="maintenance">Maintenance - scheduled work in progress</option>
                            <option value="offline">Offline - not currently operating</option>
                        </select>
                        <p className="text-xs text-white/40 mt-1">
                            Shown as a badge on the Operations Center so readings from a zone
                            that is down are not mistaken for live data.
                        </p>
                    </div>
                <div className="flex gap-3">
                    {!isNewZone && (
                        <button onClick={handleDelete} className="px-4 py-2 border border-red-500/20 rounded-lg text-red-400 hover:bg-red-500/10 flex items-center gap-2">
                            <Trash2 size={16} /> Delete Zone
                        </button>
                    )}
                    <button onClick={handleSave} className="px-4 py-2 rounded-lg font-bold flex items-center gap-2 bg-accent text-primary hover:bg-accent/90 transition-colors">
                        <Save size={16} /> {isNewZone ? "Create Zone" : "Save Changes"}
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* IoT & Connectivity */}
                <div className="glass-card p-6 rounded-2xl space-y-6">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                        <Wifi size={20} className="text-secondary" />
                        Connectivity & Sensors
                    </h3>

                    <div className="grid grid-cols-3 gap-2">
                        {(["wifi", "bluetooth", "wired"] as const).map((type) => (
                            <button
                                key={type}
                                onClick={() => setSensorConfig({ ...sensorConfig, type })}
                                className={clsx("flex flex-col items-center justify-center p-3 rounded-xl border transition-all",
                                    sensorConfig.type === type
                                        ? "bg-secondary/20 border-secondary text-white"
                                        : "bg-white/5 border-white/5 text-white/50 hover:bg-white/10"
                                )}
                            >
                                {type === "wifi" ? <Wifi size={24} /> : type === "bluetooth" ? <Bluetooth size={24} /> : <Cable size={24} />}
                                <span className="text-xs uppercase font-bold mt-2">{type}</span>
                            </button>
                        ))}
                    </div>

                    <div className="p-4 bg-black/20 rounded-xl border border-white/5">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-white/70">Protocol</span>
                            <select
                                value={sensorConfig.protocol}
                                onChange={(e) => setSensorConfig({ ...sensorConfig, protocol: e.target.value as SensorConfig["protocol"] })}
                                className="bg-white/5 border border-white/10 rounded text-xs text-white px-2 py-1"
                            >
                                <option value="mqtt">MQTT (IoT)</option>
                                <option value="http">HTTP / REST</option>
                                <option value="ble">Bluetooth LE</option>
                                <option value="serial">Serial / Modbus</option>
                            </select>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-white/70">Heartbeat</span>
                            <div className="flex items-center gap-2 text-xs text-green-400">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                Awaiting sensor connection
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-red-500/10 border border-red-500/20 rounded-xl">
                        <AlertTriangle className="text-red-400" />
                        <div>
                            <p className="text-sm font-bold text-red-200">Power Outage Alarm</p>
                            <p className="text-xs text-red-200/50">Alert triggers if heartbeat lost {'>'} 30s</p>
                        </div>
                        <div className="ml-auto w-10 h-6 bg-red-500/50 rounded-full relative cursor-pointer">
                            <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-md" />
                        </div>
                    </div>
                </div>

                {/* Power & Equipment */}
                <div className="glass-card p-6 rounded-2xl space-y-6">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                        <Zap size={20} className="text-yellow-400" />
                        Power Management
                    </h3>

                    <div className="space-y-3 max-h-64 overflow-y-auto pr-2 custom-scrollbar">
                        {equipment.map((item, idx) => (
                            <div key={idx} className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5">
                                <div>
                                    <p className="text-sm font-bold text-white">{item.name}</p>
                                    <p className="text-xs text-white/50">{item.wattage}W each</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center bg-black/20 rounded px-2 py-1">
                                        <button onClick={() => {
                                            const newEq = [...equipment];
                                            newEq[idx].qty = Math.max(0, newEq[idx].qty - 1);
                                            setEquipment(newEq.filter(e => e.qty > 0));
                                        }} className="text-white hover:text-white/70">-</button>
                                        <span className="text-sm text-white font-mono w-6 text-center">{item.qty}</span>
                                        <button onClick={() => {
                                            const newEq = [...equipment];
                                            newEq[idx].qty += 1;
                                            setEquipment(newEq);
                                        }} className="text-white hover:text-white/70">+</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex gap-2">
                        <select className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none"
                            onChange={(e) => {
                                if (e.target.value) {
                                    const eq = equipmentList.find(i => i.name === e.target.value);
                                    if (eq) setEquipment([...equipment, { ...eq, qty: 1 }]);
                                }
                            }}
                            value=""
                        >
                            <option value="">+ Add Equipment...</option>
                            {equipmentList.map(e => <option key={e.name} value={e.name}>{e.name} ({e.wattage}W)</option>)}
                        </select>
                    </div>

                    <div className="border-t border-white/10 pt-4 mt-2">
                        <div className="flex justify-between items-end">
                            <span className="text-white/50 text-sm">Total Consumption</span>
                            <span className="text-2xl font-bold text-white">{totalWatts}W</span>
                        </div>
                        <div className="flex justify-between items-end mt-1">
                            <span className="text-white/50 text-sm">Est. Monthly Cost</span>
                            <span className="text-lg font-bold text-yellow-400">${monthlyCost.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Alert Thresholds Configuration */}
            {!isNewZone && (
                <div className="glass-card p-6 rounded-2xl space-y-6">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                        <AlertTriangle size={20} className="text-yellow-400" />
                        Alert Thresholds
                    </h3>
                    <p className="text-white/50 text-sm">Set min/max thresholds for sensor readings. Alerts will be generated when values exceed these limits.</p>

                    <div className="space-y-4">
                        {SENSOR_PARAMETERS.map(param => {
                            const threshold = getThreshold(param.key);
                            const isTemp = param.key === 'temperature';
                            // Stored value -> what the field shows.
                            const show = (v: number | null) =>
                                v === null ? null : isTemp ? Number(temperatureToDisplay(v, units.temperature).toFixed(2)) : v;
                            // What was typed -> what gets stored.
                            const store = (v: number | null) =>
                                v === null ? null : isTemp ? temperatureToCanonical(v, units.temperature) : v;
                            const unitLabel = isTemp ? temperatureLabel(units.temperature) : param.unit;
                            const minVal = threshold?.minValue ?? param.defaultMin;
                            const maxVal = threshold?.maxValue ?? param.defaultMax;
                            const enabled = threshold?.enabled ?? false;
                            const alertLevel = threshold?.alertLevel ?? 'warning';

                            return (
                                <div key={param.key} className="p-4 bg-white/5 rounded-xl border border-white/5">
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex items-center gap-3">
                                            <span className="text-white font-medium">{param.label}</span>
                                            <span className="text-white/30 text-xs">({unitLabel})</span>
                                        </div>
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <span className="text-xs text-white/50">{enabled ? 'Enabled' : 'Disabled'}</span>
                                            <input
                                                type="checkbox"
                                                checked={enabled}
                                                onChange={(e) => saveThreshold(param.key, minVal, maxVal, e.target.checked, alertLevel)}
                                                className="w-4 h-4 rounded border-white/20 bg-white/5 text-accent focus:ring-accent"
                                            />
                                        </label>
                                    </div>

                                    <div className="grid grid-cols-3 gap-4">
                                        <div>
                                            <label className="text-xs text-white/50 block mb-1">Min Value</label>
                                            <input
                                                type="number"
                                                step="0.01"
                                                value={show(minVal) ?? ''}
                                                onChange={(e) => {
                                                    const val = e.target.value === '' ? null : store(parseFloat(e.target.value));
                                                    saveThreshold(param.key, val, maxVal, enabled, alertLevel);
                                                }}
                                                className="w-full bg-black/20 border border-white/10 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-accent/50"
                                                placeholder={String(show(param.defaultMin))}
                                            />
                                        </div>
                                        <div>
                                            <label className="text-xs text-white/50 block mb-1">Max Value</label>
                                            <input
                                                type="number"
                                                step="0.01"
                                                value={show(maxVal) ?? ''}
                                                onChange={(e) => {
                                                    const val = e.target.value === '' ? null : store(parseFloat(e.target.value));
                                                    saveThreshold(param.key, minVal, val, enabled, alertLevel);
                                                }}
                                                className="w-full bg-black/20 border border-white/10 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-accent/50"
                                                placeholder={String(show(param.defaultMax))}
                                            />
                                        </div>
                                        <div>
                                            <label className="text-xs text-white/50 block mb-1">Alert Level</label>
                                            <select
                                                value={alertLevel}
                                                onChange={(e) => saveThreshold(param.key, minVal, maxVal, enabled, e.target.value)}
                                                className="w-full bg-black/20 border border-white/10 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-accent/50"
                                            >
                                                <option value="info">Info</option>
                                                <option value="warning">Warning</option>
                                                <option value="critical">Critical</option>
                                            </select>
                                        </div>
                                    </div>

                                    {savingThreshold === param.key && (
                                        <div className="mt-2 text-xs text-accent">Saving...</div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}
