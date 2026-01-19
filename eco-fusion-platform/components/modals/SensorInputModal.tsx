"use client";
import { useState } from "react";
import Modal from "@/components/ui/Modal";
import { Thermometer, Droplets, Wind, FlaskConical, CloudRain } from "lucide-react";

interface SensorInputModalProps {
  isOpen: boolean;
  onClose: () => void;
  zoneId: string;
  zoneName: string;
  onReadingAdded?: () => void;
}

export default function SensorInputModal({
  isOpen,
  onClose,
  zoneId,
  zoneName,
  onReadingAdded,
}: SensorInputModalProps) {
  const [readings, setReadings] = useState({
    temperature: "",
    ph: "",
    dissolvedO2: "",
    ammonia: "",
    humidity: "",
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [alerts, setAlerts] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError(null);
    setAlerts([]);

    try {
      // Only send fields that have values
      const data: Record<string, number> = {};
      if (readings.temperature) data.temperature = parseFloat(readings.temperature);
      if (readings.ph) data.ph = parseFloat(readings.ph);
      if (readings.dissolvedO2) data.dissolvedO2 = parseFloat(readings.dissolvedO2);
      if (readings.ammonia) data.ammonia = parseFloat(readings.ammonia);
      if (readings.humidity) data.humidity = parseFloat(readings.humidity);

      if (Object.keys(data).length === 0) {
        setError("Please enter at least one reading");
        setSaving(false);
        return;
      }

      const response = await fetch(`/api/zones/${zoneId}/readings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to save reading");

      const result = await response.json();

      if (result.alertsGenerated && result.alertsGenerated.length > 0) {
        setAlerts(result.alertsGenerated);
      } else {
        onReadingAdded?.();
        onClose();
        setReadings({ temperature: "", ph: "", dissolvedO2: "", ammonia: "", humidity: "" });
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save reading");
    } finally {
      setSaving(false);
    }
  };

  const handleClose = () => {
    setAlerts([]);
    setError(null);
    onReadingAdded?.();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title={`Add Sensor Reading - ${zoneName}`} size="md">
      {alerts.length > 0 ? (
        <div className="space-y-4">
          <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
            <h4 className="text-yellow-400 font-bold mb-2">Threshold Alerts Generated</h4>
            <ul className="space-y-2">
              {alerts.map((alert, i) => (
                <li key={i} className="text-sm text-yellow-200">{alert}</li>
              ))}
            </ul>
          </div>
          <p className="text-white/60 text-sm">
            Reading saved. Alerts have been created for values outside thresholds.
          </p>
          <button
            onClick={handleClose}
            className="w-full py-3 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90 transition-colors"
          >
            Done
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
              {error}
            </div>
          )}

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/70 flex items-center gap-2">
                <Thermometer size={16} />
                Temperature (°F)
              </label>
              <input
                type="number"
                step="0.1"
                value={readings.temperature}
                onChange={(e) => setReadings({ ...readings, temperature: e.target.value })}
                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent/50"
                placeholder="72.5"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-white/70 flex items-center gap-2">
                <Droplets size={16} />
                pH Level
              </label>
              <input
                type="number"
                step="0.1"
                value={readings.ph}
                onChange={(e) => setReadings({ ...readings, ph: e.target.value })}
                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent/50"
                placeholder="7.0"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-white/70 flex items-center gap-2">
                <Wind size={16} />
                Dissolved O2 (mg/L)
              </label>
              <input
                type="number"
                step="0.1"
                value={readings.dissolvedO2}
                onChange={(e) => setReadings({ ...readings, dissolvedO2: e.target.value })}
                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent/50"
                placeholder="6.5"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-white/70 flex items-center gap-2">
                <FlaskConical size={16} />
                Ammonia (ppm)
              </label>
              <input
                type="number"
                step="0.01"
                value={readings.ammonia}
                onChange={(e) => setReadings({ ...readings, ammonia: e.target.value })}
                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent/50"
                placeholder="0.02"
              />
            </div>

            <div className="space-y-2 col-span-2">
              <label className="text-sm font-medium text-white/70 flex items-center gap-2">
                <CloudRain size={16} />
                Humidity (%)
              </label>
              <input
                type="number"
                step="1"
                value={readings.humidity}
                onChange={(e) => setReadings({ ...readings, humidity: e.target.value })}
                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent/50"
                placeholder="55"
              />
            </div>
          </div>

          <p className="text-xs text-white/40">
            Enter values for any sensors you want to record. Leave blank to skip.
          </p>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 border border-white/10 rounded-lg text-white hover:bg-white/5 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={saving}
              className="flex-1 py-3 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90 transition-colors disabled:opacity-50"
            >
              {saving ? "Saving..." : "Save Reading"}
            </button>
          </div>
        </form>
      )}
    </Modal>
  );
}
