"use client";
import { useState, useEffect } from "react";
import Modal from "@/components/ui/Modal";
import { DollarSign, Bell, Target, FileText, Save } from "lucide-react";

interface PhaseSettings {
  phaseId: string;
  budgetMonthly: number | null;
  targetRevenue: number | null;
  alertsEnabled: boolean;
  notifications: boolean;
  notes: string | null;
}

interface PhaseSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  phaseId: string;
  phaseName: string;
  onSettingsSaved?: () => void;
}

export default function PhaseSettingsModal({
  isOpen,
  onClose,
  phaseId,
  phaseName,
  onSettingsSaved,
}: PhaseSettingsModalProps) {
  const [settings, setSettings] = useState<PhaseSettings>({
    phaseId,
    budgetMonthly: null,
    targetRevenue: null,
    alertsEnabled: true,
    notifications: true,
    notes: null,
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      fetchSettings();
    }
  }, [isOpen, phaseId]);

  const fetchSettings = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/phases/${phaseId}/settings`);
      if (response.ok) {
        const data = await response.json();
        setSettings(data);
      }
      setError(null);
    } catch (err) {
      console.error("Error fetching settings:", err);
      setError("Failed to load settings");
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    setError(null);

    try {
      const response = await fetch(`/api/phases/${phaseId}/settings`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(settings),
      });

      if (!response.ok) throw new Error("Failed to save settings");

      onSettingsSaved?.();
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save settings");
    } finally {
      setSaving(false);
    }
  };

  const handleChange = (field: keyof PhaseSettings, value: unknown) => {
    setSettings((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`${phaseName} Settings`} size="md">
      {loading ? (
        <div className="space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-12 bg-white/5 rounded-lg animate-pulse" />
          ))}
        </div>
      ) : (
        <div className="space-y-6">
          {error && (
            <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
              {error}
            </div>
          )}

          {/* Budget */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-white/70 flex items-center gap-2">
              <DollarSign size={16} />
              Monthly Budget
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50">$</span>
              <input
                type="number"
                value={settings.budgetMonthly || ""}
                onChange={(e) =>
                  handleChange(
                    "budgetMonthly",
                    e.target.value ? parseFloat(e.target.value) : null
                  )
                }
                placeholder="0.00"
                className="w-full bg-black/20 border border-white/10 rounded-lg pl-8 pr-4 py-3 text-white focus:outline-none focus:border-accent/50"
              />
            </div>
          </div>

          {/* Target Revenue */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-white/70 flex items-center gap-2">
              <Target size={16} />
              Target Revenue
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50">$</span>
              <input
                type="number"
                value={settings.targetRevenue || ""}
                onChange={(e) =>
                  handleChange(
                    "targetRevenue",
                    e.target.value ? parseFloat(e.target.value) : null
                  )
                }
                placeholder="0.00"
                className="w-full bg-black/20 border border-white/10 rounded-lg pl-8 pr-4 py-3 text-white focus:outline-none focus:border-accent/50"
              />
            </div>
          </div>

          {/* Toggles */}
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
              <div className="flex items-center gap-3">
                <Bell size={18} className="text-white/50" />
                <div>
                  <p className="text-sm font-medium text-white">Alerts Enabled</p>
                  <p className="text-xs text-white/50">Receive alerts for this phase</p>
                </div>
              </div>
              <button
                onClick={() => handleChange("alertsEnabled", !settings.alertsEnabled)}
                className={`w-12 h-6 rounded-full transition-colors ${
                  settings.alertsEnabled ? "bg-accent" : "bg-white/20"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white transition-transform ${
                    settings.alertsEnabled ? "translate-x-6" : "translate-x-0.5"
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
              <div className="flex items-center gap-3">
                <Bell size={18} className="text-white/50" />
                <div>
                  <p className="text-sm font-medium text-white">Notifications</p>
                  <p className="text-xs text-white/50">Receive notification updates</p>
                </div>
              </div>
              <button
                onClick={() => handleChange("notifications", !settings.notifications)}
                className={`w-12 h-6 rounded-full transition-colors ${
                  settings.notifications ? "bg-accent" : "bg-white/20"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white transition-transform ${
                    settings.notifications ? "translate-x-6" : "translate-x-0.5"
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Notes */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-white/70 flex items-center gap-2">
              <FileText size={16} />
              Notes
            </label>
            <textarea
              value={settings.notes || ""}
              onChange={(e) => handleChange("notes", e.target.value || null)}
              placeholder="Add notes about this phase..."
              className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-accent/50 resize-none"
              rows={4}
            />
          </div>

          {/* Save Button */}
          <button
            onClick={handleSave}
            disabled={saving}
            className="w-full py-3 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
          >
            <Save size={18} />
            {saving ? "Saving..." : "Save Settings"}
          </button>
        </div>
      )}
    </Modal>
  );
}
