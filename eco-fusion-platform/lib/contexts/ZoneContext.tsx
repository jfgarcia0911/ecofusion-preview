"use client";
import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

export interface ZoneMetrics {
    temp: number | null;
    ph: number | null;
    do?: number | null;
    ammonia?: number | null;
    humidity?: number | null;
}

export interface Zone {
    id: string;
    name: string;
    type: "aquaculture" | "hydroponics" | "biodigestion" | "other";
    status: "active" | "maintenance" | "offline";
    metrics: ZoneMetrics | null;
    lastUpdate: string;
    alertThresholds?: Array<{
        id: string;
        parameter: string;
        minValue: number | null;
        maxValue: number | null;
        enabled: boolean;
        alertLevel: string;
    }>;
}

interface ZoneContextType {
    zones: Zone[];
    loading: boolean;
    error: string | null;
    addZone: (zone: Omit<Zone, 'id' | 'metrics' | 'lastUpdate'>) => Promise<Zone | null>;
    removeZone: (id: string) => Promise<boolean>;
    /** Local-only edit. Use saveZone to persist. */
    updateZone: (id: string, updates: Partial<Zone>) => void;
    /** Persists the change to the API, then syncs local state. */
    saveZone: (id: string, updates: Partial<Zone>) => Promise<boolean>;
    refreshZones: () => Promise<void>;
}

const ZoneContext = createContext<ZoneContextType | undefined>(undefined);

const POLLING_INTERVAL = 30000; // 30 seconds

export function ZoneProvider({ children }: { children: React.ReactNode }) {
    const [zones, setZones] = useState<Zone[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchZones = useCallback(async () => {
        try {
            const response = await fetch('/api/zones');
            if (!response.ok) {
                if (response.status === 401) {
                    // User not logged in, clear zones
                    setZones([]);
                    setError(null);
                    return;
                }
                throw new Error('Failed to fetch zones');
            }
            const data = await response.json();
            setZones(data);
            setError(null);
        } catch (err) {
            console.error('Error fetching zones:', err);
            setError(err instanceof Error ? err.message : 'Failed to fetch zones');
        } finally {
            setLoading(false);
        }
    }, []);

    // Initial fetch and polling
    useEffect(() => {
        fetchZones();

        const interval = setInterval(fetchZones, POLLING_INTERVAL);
        return () => clearInterval(interval);
    }, [fetchZones]);

    const addZone = async (zoneData: Omit<Zone, 'id' | 'metrics' | 'lastUpdate'>): Promise<Zone | null> => {
        try {
            const response = await fetch('/api/zones', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(zoneData),
            });
            if (!response.ok) throw new Error('Failed to create zone');
            const newZone = await response.json();
            await fetchZones(); // Refresh to get full zone data
            return newZone;
        } catch (err) {
            console.error('Error creating zone:', err);
            setError(err instanceof Error ? err.message : 'Failed to create zone');
            return null;
        }
    };

    const removeZone = async (id: string): Promise<boolean> => {
        try {
            const response = await fetch(`/api/zones/${id}`, { method: 'DELETE' });
            if (!response.ok) throw new Error('Failed to delete zone');
            setZones(zones.filter(z => z.id !== id));
            return true;
        } catch (err) {
            console.error('Error deleting zone:', err);
            setError(err instanceof Error ? err.message : 'Failed to delete zone');
            return false;
        }
    };

    const updateZone = (id: string, updates: Partial<Zone>) => {
        setZones(zones.map(z => z.id === id ? { ...z, ...updates } : z));
    };

    const saveZone = async (id: string, updates: Partial<Zone>): Promise<boolean> => {
        try {
            const response = await fetch(`/api/zones/${id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: updates.name,
                    type: updates.type,
                    status: updates.status,
                }),
            });
            if (!response.ok) throw new Error('Failed to update zone');
            // Optimistic local update, then re-fetch so the row matches the server.
            setZones(prev => prev.map(z => z.id === id ? { ...z, ...updates } : z));
            await fetchZones();
            return true;
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to update zone');
            return false;
        }
    };

    const refreshZones = async () => {
        setLoading(true);
        await fetchZones();
    };

    return (
        <ZoneContext.Provider value={{ zones, loading, error, addZone, removeZone, updateZone, saveZone, refreshZones }}>
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
