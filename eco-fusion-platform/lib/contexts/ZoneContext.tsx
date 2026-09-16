"use client";
import React, { createContext, useContext, useState, useCallback, useMemo, useRef } from "react";
import { useVisibleInterval } from "@/lib/use-visible-interval";

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
    // Each fetch takes the next number, and only the newest one may write.
    // Otherwise a slow poll that started before a save could land after the
    // save's own refresh and put the old values back.
    const requestIdRef = useRef(0);
    const hasDataRef = useRef(false);

    const fetchZones = useCallback(async () => {
        const requestId = ++requestIdRef.current;
        try {
            const response = await fetch('/api/zones');
            if (requestId !== requestIdRef.current) return;
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
            if (requestId !== requestIdRef.current) return;
            setZones(Array.isArray(data) ? data : []);
            hasDataRef.current = true;
            setError(null);
        } catch (err) {
            if (requestId !== requestIdRef.current) return;
            console.error('Error fetching zones:', err);
            // A poll that fails once shouldn't blank a dashboard that was
            // showing good readings a moment ago. Keep them, and only report
            // the failure when there is nothing to show yet.
            if (!hasDataRef.current) {
                setError(err instanceof Error ? err.message : 'Failed to fetch zones');
            }
        } finally {
            if (requestId === requestIdRef.current) setLoading(false);
        }
    }, []);

    // Pauses while the tab is hidden and refreshes once when it's shown again.
    useVisibleInterval(fetchZones, POLLING_INTERVAL);

    const addZone = useCallback(async (zoneData: Omit<Zone, 'id' | 'metrics' | 'lastUpdate'>): Promise<Zone | null> => {
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
    }, [fetchZones]);

    const removeZone = useCallback(async (id: string): Promise<boolean> => {
        try {
            const response = await fetch(`/api/zones/${id}`, { method: 'DELETE' });
            if (!response.ok) throw new Error('Failed to delete zone');
            setZones(prev => prev.filter(z => z.id !== id));
            return true;
        } catch (err) {
            console.error('Error deleting zone:', err);
            setError(err instanceof Error ? err.message : 'Failed to delete zone');
            return false;
        }
    }, []);

    const updateZone = useCallback((id: string, updates: Partial<Zone>) => {
        setZones(prev => prev.map(z => z.id === id ? { ...z, ...updates } : z));
    }, []);

    const saveZone = useCallback(async (id: string, updates: Partial<Zone>): Promise<boolean> => {
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
    }, [fetchZones]);

    const refreshZones = useCallback(async () => {
        setLoading(true);
        await fetchZones();
    }, [fetchZones]);

    const value = useMemo(
        () => ({ zones, loading, error, addZone, removeZone, updateZone, saveZone, refreshZones }),
        [zones, loading, error, addZone, removeZone, updateZone, saveZone, refreshZones],
    );

    return (
        <ZoneContext.Provider value={value}>
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
