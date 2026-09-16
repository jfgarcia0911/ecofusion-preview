"use client";
import React, { createContext, useContext, useCallback, useMemo, useSyncExternalStore } from "react";
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

// localStorage can throw in private windows. When a write fails the choice is
// held here instead, so it still applies for the rest of the session.
let unsaved: string | undefined;
const listeners = new Set<() => void>();

function readStored(): string | null {
    if (unsaved !== undefined) return unsaved;
    try {
        return window.localStorage.getItem(STORAGE_KEY);
    } catch {
        return null;
    }
}

function writeStored(value: string) {
    try {
        window.localStorage.setItem(STORAGE_KEY, value);
        unsaved = undefined;
    } catch {
        unsaved = value;
    }
    listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
    listeners.add(listener);
    // Another tab changing the preference is the same change made here.
    const onStorage = (event: StorageEvent) => {
        if (event.key === STORAGE_KEY) listener();
    };
    window.addEventListener("storage", onStorage);
    return () => {
        listeners.delete(listener);
        window.removeEventListener("storage", onStorage);
    };
}

const noSubscribe = () => () => {};

function parseUnits(raw: string | null): UnitPreferences {
    if (!raw) return DEFAULT_UNITS;
    try {
        const parsed = JSON.parse(raw) as Partial<UnitPreferences>;
        return {
            temperature: parsed.temperature === "F" ? "F" : "C",
            weight: parsed.weight === "imperial" ? "imperial" : "metric",
        };
    } catch {
        return DEFAULT_UNITS;
    }
}

export function UnitProvider({ children }: { children: React.ReactNode }) {
    // The server has no storage, so it and the first client render both use
    // the defaults; the stored preference replaces them straight after.
    const raw = useSyncExternalStore(subscribe, readStored, () => null);
    const ready = useSyncExternalStore(noSubscribe, () => true, () => false);
    const units = useMemo(() => parseUnits(raw), [raw]);

    const persist = useCallback((next: UnitPreferences) => {
        writeStored(JSON.stringify(next));
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
