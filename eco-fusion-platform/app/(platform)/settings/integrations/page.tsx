"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ArrowLeft, Settings, CheckCircle, XCircle, RefreshCw, Key, Save, Trash2 } from "lucide-react";
import { useConfirm } from "@/components/ui/ConfirmDialog";
import { useToast } from "@/components/ui/Toast";
import { IntegrationFeatures, IntegrationSetupGuide } from "@/components/settings/IntegrationGuide";
import {
  IntegrationCardSkeleton,
  IntegrationStatusSkeleton,
  INTEGRATIONS_STANDFIRST,
} from "@/components/skeletons/PageSkeletons";

interface IntegrationSettings {
  provider: string;
  apiKey: string | null;
  hasApiKey: boolean;
  locationId: string | null;
  isEnabled: boolean;
  lastSyncAt: string | null;
}

interface SyncStatus {
  isConfigured: boolean;
  lastSyncAt: string | null;
  unsyncedSalesCount: number;
}

export default function IntegrationsPage() {
  const confirmAction = useConfirm();
  const toast = useToast();
  const [settings, setSettings] = useState<IntegrationSettings | null>(null);
  const [syncStatus, setSyncStatus] = useState<SyncStatus | null>(null);
  // Asked separately from the settings, so the badge waits on its own answer
  // rather than saying "Not Connected" until it arrives.
  const [syncLoaded, setSyncLoaded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [testing, setTesting] = useState(false);
  const [syncing, setSyncing] = useState(false);
  const [removing, setRemoving] = useState(false);
  const [testResult, setTestResult] = useState<{ success: boolean; message: string } | null>(null);

  const [formData, setFormData] = useState({
    apiKey: "",
    locationId: "",
    isEnabled: false,
  });

  const fetchSettings = useCallback(async () => {
    try {
      const res = await fetch("/api/settings/integrations");
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        // Leave the form blank rather than filling it from an error body.
        toast.error(data.error ?? "Could not load integration settings");
        return;
      }
      setSettings(data);
      setFormData({
        apiKey: "",
        locationId: data.locationId || "",
        isEnabled: data.isEnabled || false,
      });
    } catch (error) {
      console.error("Failed to fetch settings:", error);
      toast.error("Could not load integration settings");
    } finally {
      setLoading(false);
    }
  }, [toast]);

  const fetchSyncStatus = useCallback(async () => {
    try {
      const res = await fetch("/api/crm/sync");
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        toast.error(data.error ?? "Could not load the sync status");
        setSyncStatus(null);
        return;
      }
      setSyncStatus(data);
    } catch (error) {
      console.error("Failed to fetch sync status:", error);
      toast.error("Could not load the sync status");
    } finally {
      setSyncLoaded(true);
    }
  }, [toast]);

  useEffect(() => {
    fetchSettings();
    fetchSyncStatus();
  }, [fetchSettings, fetchSyncStatus]);

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    if (saving) return;
    setSaving(true);
    setTestResult(null);
    try {
      const payload: { apiKey?: string; locationId: string; isEnabled: boolean } = {
        locationId: formData.locationId,
        isEnabled: formData.isEnabled,
      };

      if (formData.apiKey) {
        payload.apiKey = formData.apiKey;
      }

      const res = await fetch("/api/settings/integrations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setSettings(data);
        setFormData((prev) => ({ ...prev, apiKey: "" }));
        toast.success("Settings saved");
        await fetchSyncStatus();
      } else {
        toast.error(data.error ?? "Failed to save settings");
      }
    } catch (error) {
      console.error("Failed to save settings:", error);
      toast.error("Failed to save settings");
    } finally {
      setSaving(false);
    }
  }

  async function handleTestConnection() {
    setTesting(true);
    setTestResult(null);
    try {
      // Try to fetch contacts to test the connection
      const res = await fetch("/api/crm/customers?limit=1");
      if (res.ok) {
        setTestResult({ success: true, message: "Connection successful! CRM is accessible." });
      } else {
        const data = await res.json().catch(() => ({}));
        setTestResult({ success: false, message: data.error ?? "Connection failed" });
      }
    } catch (error) {
      console.error("Connection test failed:", error);
      setTestResult({ success: false, message: "Connection test failed" });
    } finally {
      setTesting(false);
    }
  }

  async function handleRemoveIntegration() {
    if (!(await confirmAction({
      title: "Remove the CRM integration?",
      message: "Your stored API credentials will be deleted.",
      confirmLabel: "Remove",
      tone: "danger",
    }))) {
      return;
    }
    setRemoving(true);
    try {
      const res = await fetch("/api/settings/integrations", { method: "DELETE" });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        toast.error(data.error ?? "Failed to remove the integration");
        return;
      }
      setSettings(null);
      setFormData({ apiKey: "", locationId: "", isEnabled: false });
      setTestResult(null);
      toast.success("Integration removed");
      await fetchSyncStatus();
    } catch (error) {
      console.error("Failed to remove integration:", error);
      toast.error("Failed to remove the integration");
    } finally {
      setRemoving(false);
    }
  }

  async function handleSyncNow() {
    if (!syncStatus?.unsyncedSalesCount || syncing) return;
    setSyncing(true);
    try {
      const res = await fetch("/api/crm/sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "all" }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        toast.error(data.error ?? "Sync failed");
        return;
      }
      toast.success("Sales synced");
      await fetchSyncStatus();
    } catch (error) {
      console.error("Sync failed:", error);
      toast.error("Sync failed");
    } finally {
      setSyncing(false);
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link
          href="/sales"
          aria-label="Back to sales"
          className="inline-flex p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-lg"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
            Integrations
          </h1>
          <p className="text-white/50 mt-1">{INTEGRATIONS_STANDFIRST}</p>
        </div>
      </div>

      {/* The same card the route's loading file draws, beside the panels that never change. */}
      {loading ? (
        <div className="space-y-6">
          <IntegrationCardSkeleton />
          <IntegrationSetupGuide />
          <IntegrationFeatures />
        </div>
      ) : (
        <div className="space-y-6">
          {/* CRM Integration Card */}
          <div className="glass-card p-6">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <Settings className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white">Satistio CRM</h2>
                  <p className="text-white/50">Go HighLevel integration for customer management</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {!syncLoaded ? (
                  <IntegrationStatusSkeleton />
                ) : syncStatus?.isConfigured ? (
                  <span className="flex items-center gap-1.5 px-3 py-1.5 bg-green-500/20 text-green-400 rounded-full text-sm">
                    <CheckCircle className="w-4 h-4" />
                    Connected
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 text-white/50 rounded-full text-sm">
                    <XCircle className="w-4 h-4" />
                    Not Connected
                  </span>
                )}
              </div>
            </div>

            {/* Test Result Message */}
            {testResult && (
              <div
                className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                  testResult.success ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"
                }`}
              >
                {testResult.success ? <CheckCircle className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
                {testResult.message}
              </div>
            )}

            {/* Sync Status */}
            {syncStatus?.isConfigured && (
              <div className="mb-6 p-4 bg-white/5 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white font-medium">Sync Status</div>
                    <div className="text-sm text-white/50">
                      Last synced: {syncStatus.lastSyncAt
                        ? new Date(syncStatus.lastSyncAt).toLocaleString()
                        : "Never"}
                    </div>
                    {syncStatus.unsyncedSalesCount > 0 && (
                      <div className="text-sm text-yellow-400 mt-1">
                        {syncStatus.unsyncedSalesCount} sales pending sync
                      </div>
                    )}
                  </div>
                  {syncStatus.unsyncedSalesCount > 0 && (
                    <button
                      onClick={handleSyncNow}
                      disabled={syncing}
                      className="px-4 py-2 bg-accent/20 text-accent rounded-lg hover:bg-accent/30 disabled:opacity-50 flex items-center gap-2"
                    >
                      <RefreshCw className={`w-4 h-4 ${syncing ? "animate-spin" : ""}`} />
                      {syncing ? "Syncing..." : "Sync Now"}
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* Configuration Form */}
            <form onSubmit={handleSave} className="space-y-4">
              <div>
                <label className="block text-sm text-white/70 mb-1 flex items-center gap-2">
                  <Key className="w-4 h-4" />
                  API Key
                </label>
                <input
                  type="password"
                  value={formData.apiKey}
                  onChange={(e) => setFormData({ ...formData, apiKey: e.target.value })}
                  placeholder={settings?.hasApiKey ? "••••••••••••" : "Enter your Go HighLevel API key"}
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white"
                />
                <p className="text-xs text-white/40 mt-1">
                  Your API key is encrypted and stored securely
                </p>
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-1">Location ID</label>
                <input
                  type="text"
                  value={formData.locationId}
                  onChange={(e) => setFormData({ ...formData, locationId: e.target.value })}
                  placeholder="Enter your Location ID"
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white"
                />
                <p className="text-xs text-white/40 mt-1">
                  Find this in your Go HighLevel account settings
                </p>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.isEnabled}
                    onChange={(e) => setFormData({ ...formData, isEnabled: e.target.checked })}
                    className="w-4 h-4 rounded bg-white/10 border-white/20"
                  />
                  <span className="text-white">Enable CRM Integration</span>
                </label>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  disabled={saving}
                  className="px-6 py-2 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90 disabled:opacity-50 flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  {saving ? "Saving..." : "Save Settings"}
                </button>
                {syncStatus?.isConfigured && (
                  <>
                    <button
                      type="button"
                      onClick={handleTestConnection}
                      disabled={testing}
                      className="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 disabled:opacity-50 flex items-center gap-2"
                    >
                      <RefreshCw className={`w-4 h-4 ${testing ? "animate-spin" : ""}`} />
                      {testing ? "Testing..." : "Test Connection"}
                    </button>
                    <button
                      type="button"
                      onClick={handleRemoveIntegration}
                      disabled={removing}
                      className="px-4 py-2 text-red-400 hover:bg-red-500/10 rounded-lg disabled:opacity-50 flex items-center gap-2"
                    >
                      <Trash2 className="w-4 h-4" />
                      {removing ? "Removing..." : "Remove"}
                    </button>
                  </>
                )}
              </div>
            </form>
          </div>

          <IntegrationSetupGuide />

          <IntegrationFeatures />
        </div>
      )}
    </div>
  );
}
