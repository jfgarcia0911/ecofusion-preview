"use client";
import { useState, useEffect } from "react";
import Modal from "@/components/ui/Modal";
import { AlertCircle, UserPlus, CheckCircle, Clock, MapPin } from "lucide-react";
import clsx from "clsx";

interface Alert {
  id: string;
  title: string;
  message: string;
  severity: "info" | "warning" | "critical";
  status: "active" | "acknowledged" | "resolved";
  type: string;
  createdAt: string;
  resolvedAt?: string | null;
  resolution?: string | null;
  zone?: { id: string; name: string } | null;
  assignee?: { id: string; name: string; email: string } | null;
}

interface Employee {
  id: string;
  name: string;
  role: string;
  email: string;
  status: string;
}

interface AlertDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  alert: Alert | null;
  onAlertUpdated?: () => void;
}

export default function AlertDetailModal({
  isOpen,
  onClose,
  alert,
  onAlertUpdated,
}: AlertDetailModalProps) {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [selectedEmployee, setSelectedEmployee] = useState<string>("");
  const [resolution, setResolution] = useState("");
  const [isAssigning, setIsAssigning] = useState(false);
  const [isResolving, setIsResolving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      fetchEmployees();
    }
  }, [isOpen]);

  const fetchEmployees = async () => {
    try {
      const response = await fetch("/api/employees");
      if (response.ok) {
        const data = await response.json();
        setEmployees(data);
      }
    } catch (err) {
      console.error("Error fetching employees:", err);
    }
  };

  const handleAssign = async () => {
    if (!alert || !selectedEmployee) return;

    setIsAssigning(true);
    setError(null);

    try {
      const response = await fetch(`/api/alerts/${alert.id}/assign`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ assigneeId: selectedEmployee }),
      });

      if (!response.ok) throw new Error("Failed to assign alert");

      onAlertUpdated?.();
      setSelectedEmployee("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to assign alert");
    } finally {
      setIsAssigning(false);
    }
  };

  const handleResolve = async () => {
    if (!alert) return;

    setIsResolving(true);
    setError(null);

    try {
      const response = await fetch(`/api/alerts/${alert.id}/resolve`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ resolution }),
      });

      if (!response.ok) throw new Error("Failed to resolve alert");

      onAlertUpdated?.();
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to resolve alert");
    } finally {
      setIsResolving(false);
    }
  };

  const handleAcknowledge = async () => {
    if (!alert) return;

    try {
      const response = await fetch(`/api/alerts/${alert.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "acknowledged" }),
      });

      if (!response.ok) throw new Error("Failed to acknowledge alert");

      onAlertUpdated?.();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to acknowledge alert");
    }
  };

  if (!alert) return null;

  const getSeverityStyles = (severity: string) => {
    switch (severity) {
      case "critical":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      case "warning":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      default:
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
    }
  };

  const getStatusStyles = (status: string) => {
    switch (status) {
      case "resolved":
        return "bg-green-500/20 text-green-400";
      case "acknowledged":
        return "bg-yellow-500/20 text-yellow-400";
      default:
        return "bg-red-500/20 text-red-400";
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Alert Details" size="lg">
      <div className="space-y-6">
        {/* Alert Header */}
        <div className="flex items-start gap-4">
          <div className={clsx("p-3 rounded-lg", getSeverityStyles(alert.severity))}>
            <AlertCircle size={24} />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white">{alert.title}</h3>
            <p className="text-white/60 mt-1">{alert.message}</p>
          </div>
          <span className={clsx("px-3 py-1 rounded-full text-xs font-medium", getStatusStyles(alert.status))}>
            {alert.status}
          </span>
        </div>

        {/* Alert Info */}
        <div className="grid grid-cols-2 gap-4 p-4 bg-white/5 rounded-lg">
          <div className="flex items-center gap-2 text-sm">
            <Clock size={16} className="text-white/30" />
            <span className="text-white/50">Created:</span>
            <span className="text-white">{new Date(alert.createdAt).toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <AlertCircle size={16} className="text-white/30" />
            <span className="text-white/50">Type:</span>
            <span className="text-white capitalize">{alert.type}</span>
          </div>
          {alert.zone && (
            <div className="flex items-center gap-2 text-sm">
              <MapPin size={16} className="text-white/30" />
              <span className="text-white/50">Zone:</span>
              <span className="text-white">{alert.zone.name}</span>
            </div>
          )}
          {alert.assignee && (
            <div className="flex items-center gap-2 text-sm">
              <UserPlus size={16} className="text-white/30" />
              <span className="text-white/50">Assigned to:</span>
              <span className="text-white">{alert.assignee.name}</span>
            </div>
          )}
        </div>

        {error && (
          <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
            {error}
          </div>
        )}

        {/* Actions for Active/Acknowledged Alerts */}
        {alert.status !== "resolved" && (
          <>
            {/* Acknowledge Button */}
            {alert.status === "active" && (
              <button
                onClick={handleAcknowledge}
                className="w-full py-2 bg-yellow-500/20 text-yellow-400 rounded-lg hover:bg-yellow-500/30 transition-colors"
              >
                Acknowledge Alert
              </button>
            )}

            {/* Assign Section */}
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-white/70 flex items-center gap-2">
                <UserPlus size={16} />
                Assign to Employee
              </h4>
              <div className="flex gap-2">
                <select
                  value={selectedEmployee}
                  onChange={(e) => setSelectedEmployee(e.target.value)}
                  className="flex-1 bg-black/20 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-accent/50"
                >
                  <option value="">Select employee...</option>
                  {employees
                    .filter((e) => e.status === "Active")
                    .map((emp) => (
                      <option key={emp.id} value={emp.id}>
                        {emp.name} - {emp.role}
                      </option>
                    ))}
                </select>
                <button
                  onClick={handleAssign}
                  disabled={!selectedEmployee || isAssigning}
                  className="px-4 py-2 bg-accent/20 text-accent rounded-lg hover:bg-accent/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isAssigning ? "Assigning..." : "Assign"}
                </button>
              </div>
            </div>

            {/* Resolve Section */}
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-white/70 flex items-center gap-2">
                <CheckCircle size={16} />
                Resolve Alert
              </h4>
              <textarea
                value={resolution}
                onChange={(e) => setResolution(e.target.value)}
                placeholder="Enter resolution notes (optional)..."
                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-accent/50 resize-none"
                rows={3}
              />
              <button
                onClick={handleResolve}
                disabled={isResolving}
                className="w-full py-2 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30 transition-colors disabled:opacity-50"
              >
                {isResolving ? "Resolving..." : "Mark as Resolved"}
              </button>
            </div>
          </>
        )}

        {/* Resolution Info for Resolved Alerts */}
        {alert.status === "resolved" && (
          <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
            <h4 className="text-sm font-medium text-green-400 flex items-center gap-2 mb-2">
              <CheckCircle size={16} />
              Resolved
            </h4>
            {alert.resolvedAt && (
              <p className="text-sm text-white/60">
                Resolved on: {new Date(alert.resolvedAt).toLocaleString()}
              </p>
            )}
            {alert.resolution && (
              <p className="text-sm text-white mt-2">{alert.resolution}</p>
            )}
          </div>
        )}
      </div>
    </Modal>
  );
}
