"use client";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { ArrowLeft, Save, RotateCcw, Thermometer, Droplets, Wind, Clock, Wifi, Bluetooth, Cable, Zap, AlertTriangle, Plus, Trash2 } from "lucide-react";
import clsx from "clsx";
import { useZones, Zone } from "@/lib/contexts/ZoneContext";

const equipmentList = [
    { name: "Main Pump (2000 GPH)", wattage: 150 },
    { name: "Air Pump (Commercial)", wattage: 80 },
    { name: "LED Grow Lights (Bar)", wattage: 300 },
    { name: "Water Heater (1000W)", wattage: 1000 },
    { name: "UV Sterilizer", wattage: 55 },
];

export default function ZoneConfigurationPage() {
    const params = useParams();
    const router = useRouter();
    const { zones, updateZone, removeZone, addZone } = useZones();

    const zoneId = params.zoneId as string;
    const isNewZone = zoneId === "new";

    const [localZone, setLocalZone] = useState<Zone | null>(null);

    // Power Calculation State
    const [equipment, setEquipment] = useState<{ name: string, wattage: number, qty: number }[]>([
        { name: "Main Pump (2000 GPH)", wattage: 150, qty: 1 }
    ]);

    useEffect(() => {
        if (isNewZone) {
            setLocalZone({
                id: `zone-${Date.now()}`,
                name: "New Zone",
                type: "hydroponics",
                status: "active",
                sensors: { type: "wifi", protocol: "mqtt", lastUpdate: "Never" },
                metrics: { temp: 70, ph: 7.0 }
            });
        } else {
            const found = zones.find(z => z.id === zoneId);
            if (found) setLocalZone(found);
        }
    }, [zones, zoneId, isNewZone]);

    if (!localZone) return <div className="text-white p-6">Loading zone data...</div>;

    const totalWatts = equipment.reduce((acc, item) => acc + (item.wattage * item.qty), 0);
    const monthlyCost = ((totalWatts * 24 * 30) / 1000) * 0.12; // Assuming $0.12/kWh

    const handleSave = () => {
        if (isNewZone) {
            addZone(localZone);
            alert("New zone created!");
        } else {
            updateZone(localZone.id, localZone);
            alert("Configuration saved!");
        }
        router.back();
    };

    const handleDelete = () => {
        if (confirm("Are you sure you want to delete this zone? This cannot be undone.")) {
            removeZone(localZone.id);
            router.back();
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
                        {["wifi", "bluetooth", "wired"].map((type) => (
                            <button
                                key={type}
                                onClick={() => setLocalZone({ ...localZone, sensors: { ...localZone.sensors, type: type as any } })}
                                className={clsx("flex flex-col items-center justify-center p-3 rounded-xl border transition-all",
                                    localZone.sensors.type === type
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
                                value={localZone.sensors.protocol}
                                onChange={(e) => setLocalZone({ ...localZone, sensors: { ...localZone.sensors, protocol: e.target.value as any } })}
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
                                Signal detected (Last: {localZone.sensors.lastUpdate})
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
        </div>
    );
}
