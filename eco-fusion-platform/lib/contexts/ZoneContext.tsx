"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

export interface Zone {
    id: string;
    name: string;
    type: "aquaculture" | "hydroponics" | "biodigestion" | "other";
    status: "active" | "maintenance" | "offline";
    sensors: {
        type: "wifi" | "bluetooth" | "wired";
        protocol: "mqtt" | "http" | "ble" | "serial";
        lastUpdate: string;
    };
    metrics: {
        temp: number;
        ph: number;
        do?: number;
        ammonia?: number;
        humidity?: number;
    };
}

interface ZoneContextType {
    zones: Zone[];
    addZone: (zone: Zone) => void;
    removeZone: (id: string) => void;
    updateZone: (id: string, updates: Partial<Zone>) => void;
}

const ZoneContext = createContext<ZoneContextType | undefined>(undefined);

const INITIAL_ZONES: Zone[] = [
    {
        id: "zone-a",
        name: "Zone A: Leafy Green Aquaponics",
        type: "hydroponics",
        status: "active",
        sensors: { type: "wifi", protocol: "mqtt", lastUpdate: "Just now" },
        metrics: { temp: 72.4, ph: 6.8, do: 7.2, ammonia: 0.02, humidity: 55 }
    },
    {
        id: "zone-b",
        name: "Zone B: Tilapia Rearing Tank",
        type: "aquaculture",
        status: "active",
        sensors: { type: "wired", protocol: "serial", lastUpdate: "Just now" },
        metrics: { temp: 78.1, ph: 7.1, do: 6.5, ammonia: 0.45 }
    }
];

export function ZoneProvider({ children }: { children: React.ReactNode }) {
    const [zones, setZones] = useState<Zone[]>(INITIAL_ZONES);

    const addZone = (zone: Zone) => setZones([...zones, zone]);
    const removeZone = (id: string) => setZones(zones.filter(z => z.id !== id));
    const updateZone = (id: string, updates: Partial<Zone>) => {
        setZones(zones.map(z => z.id === id ? { ...z, ...updates } : z));
    };

    return (
        <ZoneContext.Provider value={{ zones, addZone, removeZone, updateZone }}>
            {children}
        </ZoneContext.Provider>
    );
}

export function useZones() {
    const context = useContext(ZoneContext);
    if (context === undefined) {
        throw new Error("useZones must be used within a ZoneProvider");
    }
    return context;
}
