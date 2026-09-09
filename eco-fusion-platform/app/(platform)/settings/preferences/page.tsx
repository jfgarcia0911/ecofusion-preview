"use client";

import Link from "next/link";
import { ArrowLeft, Thermometer, Scale, Check } from "lucide-react";
import { useUnits } from "@/lib/contexts/UnitContext";
import ChangePassword from "./change-password";
import ReplayTour from "./replay-tour";
import { temperatureToDisplay, weightToDisplay, round } from "@/lib/units";

interface OptionProps {
    label: string;
    hint: string;
    selected: boolean;
    onSelect: () => void;
}

function Option({ label, hint, selected, onSelect }: OptionProps) {
    return (
        <button
            type="button"
            onClick={onSelect}
            aria-pressed={selected}
            className={`flex-1 text-left p-4 rounded-xl border transition-colors ${selected
                ? "bg-accent/10 border-accent/40"
                : "bg-white/5 border-white/10 hover:bg-white/10"
                }`}
        >
            <div className="flex items-center justify-between">
                <span className={`font-bold ${selected ? "text-accent" : "text-white"}`}>{label}</span>
                {selected && <Check size={16} className="text-accent" />}
            </div>
            <p className="text-xs text-white/50 mt-1">{hint}</p>
        </button>
    );
}

export default function PreferencesPage() {
    const { units, ready, setTemperatureUnit, setWeightUnit } = useUnits();

    // A worked example, so the choice is concrete rather than abstract.
    const sampleTemp = round(temperatureToDisplay(26.5, units.temperature), 1);
    const sampleWeight = weightToDisplay(350, units.weight);

    return (
        <div className="space-y-8 pb-10">
            <div>
                <Link
                    href="/dashboard"
                    className="text-white/50 hover:text-white text-sm flex items-center gap-2 mb-4 w-fit transition-colors"
                >
                    <ArrowLeft size={16} /> Back to Dashboard
                </Link>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                    Preferences
                </h1>
                <p className="text-white/50 mt-1">
                    Choose the units you want to see. Readings are stored the same way either
                    way, so switching never changes your data.
                </p>
            </div>

            <div className="glass-card p-6 space-y-4">
                <div className="flex items-center gap-3">
                    <Thermometer size={18} className="text-secondary" />
                    <div>
                        <h2 className="text-white font-bold">Temperature</h2>
                        <p className="text-xs text-white/50">
                            Used for sensor readings, zone thresholds, and the sensor entry form.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                    <Option
                        label="Celsius (°C)"
                        hint="Metric. Typical tank reading: 26.5 °C"
                        selected={units.temperature === "C"}
                        onSelect={() => setTemperatureUnit("C")}
                    />
                    <Option
                        label="Fahrenheit (°F)"
                        hint="Imperial. Typical tank reading: 79.7 °F"
                        selected={units.temperature === "F"}
                        onSelect={() => setTemperatureUnit("F")}
                    />
                </div>
                {ready && (
                    <p className="text-xs text-white/40">
                        A stored reading of 26.5 °C currently displays as{" "}
                        <span className="text-accent font-medium">
                            {sampleTemp}
                            {units.temperature === "F" ? "°F" : "°C"}
                        </span>
                        .
                    </p>
                )}
            </div>

            <div className="glass-card p-6 space-y-4">
                <div className="flex items-center gap-3">
                    <Scale size={18} className="text-accent" />
                    <div>
                        <h2 className="text-white font-bold">Weight</h2>
                        <p className="text-xs text-white/50">
                            Used for fish weights and growth logs.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                    <Option
                        label="Metric (g / kg)"
                        hint="Grams, switching to kilograms above 1,000 g"
                        selected={units.weight === "metric"}
                        onSelect={() => setWeightUnit("metric")}
                    />
                    <Option
                        label="Imperial (oz / lb)"
                        hint="Ounces, switching to pounds above 16 oz"
                        selected={units.weight === "imperial"}
                        onSelect={() => setWeightUnit("imperial")}
                    />
                </div>
                {ready && (
                    <p className="text-xs text-white/40">
                        A stored weight of 350 g currently displays as{" "}
                        <span className="text-accent font-medium">
                            {round(sampleWeight.value, 1)}
                            {sampleWeight.label}
                        </span>
                        .
                    </p>
                )}
            </div>

            <ReplayTour />

            <ChangePassword />

            <p className="text-xs text-white/30">
                Preferences are saved in this browser. Signing in elsewhere starts from the
                defaults.
            </p>
        </div>
    );
}
