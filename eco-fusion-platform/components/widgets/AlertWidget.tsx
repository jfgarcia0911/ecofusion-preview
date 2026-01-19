"use client";
import { useState, useEffect, useCallback } from "react";
import { AlertCircle, ChevronRight, RefreshCw } from "lucide-react";
import clsx from "clsx";

interface Alert {
  id: string;
  title: string;
  message: string;
  type: string;
  severity: "info" | "warning" | "critical";
  status: "active" | "acknowledged" | "resolved";
  createdAt: string;
  resolvedAt?: string | null;
  resolution?: string | null;
  zone?: { id: string; name: string } | null;
  assignee?: { id: string; name: string; email: string } | null;
}

interface AlertWidgetProps {
  title?: string;
  limit?: number;
  showOnlyActive?: boolean;
  onAlertClick?: (alert: Alert) => void;
}

export default function AlertWidget({
  title = "Critical Alerts",
  limit = 5,
  showOnlyActive = true,
  onAlertClick,
}: AlertWidgetProps) {
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAlerts = useCallback(async () => {
    try {
      const params = new URLSearchParams();
      if (showOnlyActive) params.set("status", "active");
      params.set("limit", String(limit));

      const response = await fetch(`/api/alerts?${params.toString()}`);
      if (!response.ok) {
        if (response.status === 401) {
          setAlerts([]);
          return;
        }
        throw new Error("Failed to fetch alerts");
      }
      const data = await response.json();
      setAlerts(data);
      setError(null);
    } catch (err) {
      console.error("Error fetching alerts:", err);
      setError(err instanceof Error ? err.message : "Failed to fetch alerts");
    } finally {
      setLoading(false);
    }
  }, [limit, showOnlyActive]);

  useEffect(() => {
    fetchAlerts();
    const interval = setInterval(fetchAlerts, 30000);
    return () => clearInterval(interval);
  }, [fetchAlerts]);

  const getSeverityStyles = (severity: string) => {
    switch (severity) {
      case "critical":
        return {
          container: "bg-red-500/10 border-red-500/20",
          dot: "bg-red-500 animate-pulse",
          title: "text-red-200",
          message: "text-red-200/50",
        };
      case "warning":
        return {
          container: "bg-yellow-500/10 border-yellow-500/20",
          dot: "bg-yellow-500",
          title: "text-yellow-200",
          message: "text-yellow-200/50",
        };
      default:
        return {
          container: "bg-blue-500/10 border-blue-500/20",
          dot: "bg-blue-500",
          title: "text-blue-200",
          message: "text-blue-200/50",
        };
    }
  };

  if (loading) {
    return (
      <div className="glass-card p-6">
        <h3 className="text-lg font-bold mb-4 text-white">{title}</h3>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-3 bg-white/5 rounded-lg animate-pulse">
              <div className="h-4 bg-white/10 rounded w-3/4 mb-2" />
              <div className="h-3 bg-white/5 rounded w-1/2" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="glass-card p-6">
        <h3 className="text-lg font-bold mb-4 text-white">{title}</h3>
        <div className="text-red-400 text-sm flex items-center gap-2">
          <AlertCircle size={16} />
          {error}
          <button
            onClick={fetchAlerts}
            className="ml-auto p-1 hover:bg-white/10 rounded"
          >
            <RefreshCw size={14} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="glass-card p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-white">{title}</h3>
        {alerts.length > 0 && (
          <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/70">
            {alerts.length} active
          </span>
        )}
      </div>
      <div className="space-y-4">
        {alerts.length === 0 ? (
          <div className="text-center py-8 text-white/50">
            <AlertCircle size={32} className="mx-auto mb-2 opacity-50" />
            <p className="text-sm">No active alerts</p>
          </div>
        ) : (
          alerts.map((alert) => {
            const styles = getSeverityStyles(alert.severity);
            return (
              <div
                key={alert.id}
                className={clsx(
                  "p-3 border rounded-lg flex gap-3 items-start cursor-pointer transition-all hover:scale-[1.02]",
                  styles.container
                )}
                onClick={() => onAlertClick?.(alert)}
              >
                <div className={clsx("w-2 h-2 mt-2 rounded-full", styles.dot)} />
                <div className="flex-1 min-w-0">
                  <p className={clsx("text-sm font-medium", styles.title)}>
                    {alert.title}
                  </p>
                  <p className={clsx("text-xs truncate", styles.message)}>
                    {alert.message}
                  </p>
                  {alert.zone && (
                    <p className="text-xs text-white/30 mt-1">
                      {alert.zone.name}
                    </p>
                  )}
                </div>
                {onAlertClick && (
                  <ChevronRight size={16} className="text-white/30 mt-1" />
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
