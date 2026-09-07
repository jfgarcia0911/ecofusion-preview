"use client";
import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { DEFAULT_UNITS, type UnitPreferences, type TemperatureUnit, type WeightUnit } from "@/lib/units";

const STORAGE_KEY = "ecofusion:units";

interface UnitContextType {
    units: UnitPreferences;
    /** True until the stored preference has been read, to avoid a flash of the wrong unit. */
    ready: boolean;
    setTemperatureUnit: (unit: TemperatureUnit) => void;
    setWeightUnit: (unit: WeightUnit) => void;
}

const UnitContext = createContext<UnitContextType | undefined>(undefined);

export function UnitProvider({ children }: { children: React.ReactNode }) {
    const [units, setUnits] = useState<UnitPreferences>(DEFAULT_UNITS);
    const [ready, setReady] = useState(false);

    // Read once on mount. localStorage is unavailable during SSR and can throw
    // in private windows, so failure just falls back to the defaults.
    useEffect(() => {
        try {
            const raw = window.localStorage.getItem(STORAGE_KEY);
            if (raw) {
                const parsed = JSON.parse(raw) as Partial<UnitPreferences>;
                setUnits({
                    temperature: parsed.temperature === "F" ? "F" : "C",
                    weight: parsed.weight === "imperial" ? "imperial" : "metric",
                });
            }
        } catch {
            // Keep defaults.
        }
        setReady(true);
    }, []);

    const persist = useCallback((next: UnitPreferences) => {
        setUnits(next);
        try {
            window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
        } catch {
            // Preference stays for this session only.
        }
    }, []);

    const setTemperatureUnit = useCallback(
        (temperature: TemperatureUnit) => persist({ ...units, temperature }),
        [units, persist]
    );

    const setWeightUnit = useCallback(
        (weight: WeightUnit) => persist({ ...units, weight }),
        [units, persist]
    );

    return (
        <UnitContext.Provider value={{ units, ready, setTemperatureUnit, setWeightUnit }}>
            {children}
        </UnitContext.Provider>
    );
}

export function useUnits() {
    const context = useContext(UnitContext);
    if (!context) throw new Error("useUnits must be used within a UnitProvider");
    return context;
}
