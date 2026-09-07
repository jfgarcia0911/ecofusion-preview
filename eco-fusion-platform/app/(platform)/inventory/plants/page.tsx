"use client";

import { useState, useEffect } from "react";
import { Leaf, Plus, Edit2, Trash2, TrendingUp, Calendar, X, ChevronDown, ChevronUp } from "lucide-react";
import { useConfirm } from "@/components/ui/ConfirmDialog";

interface Zone {
  id: string;
  name: string;
  type: string;
}

interface GrowthLog {
  id: string;
  recordedAt: string;
  heightCm: number | null;
  healthScore: number | null;
  losses: number;
  notes: string | null;
}

interface PlantCrop {
  id: string;
  zoneId: string;
  cropType: string;
  variety: string | null;
  quantity: number;
  plantedDate: string;
  expectedHarvest: string | null;
  status: string;
  location: string | null;
  notes: string | null;
  zone: Zone;
  growthLogs: GrowthLog[];
  _count: { harvests: number };
}

export default function PlantInventoryPage() {
  const confirmAction = useConfirm();
  const [plantCrops, setPlantCrops] = useState<PlantCrop[]>([]);
  const [zones, setZones] = useState<Zone[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingCrop, setEditingCrop] = useState<PlantCrop | null>(null);
  const [expandedCrop, setExpandedCrop] = useState<string | null>(null);
  const [showGrowthForm, setShowGrowthForm] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    zoneId: "",
    cropType: "",
    variety: "",
    quantity: "",
    plantedDate: "",
    expectedHarvest: "",
    location: "",
    notes: "",
  });

  const [growthData, setGrowthData] = useState({
    heightCm: "",
    healthScore: "",
    losses: "0",
    notes: "",
  });

  useEffect(() => {
    fetchPlantCrops();
    fetchZones();
  }, []);

  async function fetchPlantCrops() {
    try {
      const res = await fetch("/api/inventory/plants");
      const data = await res.json();
      setPlantCrops(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Failed to fetch plant crops:", error);
    } finally {
      setLoading(false);
    }
  }

  async function fetchZones() {
    try {
      const res = await fetch("/api/zones");
      const data = await res.json();
      const hydroponicsZones = (Array.isArray(data) ? data : []).filter(
        (z: Zone) => z.type === "hydroponics"
      );
      setZones(hydroponicsZones);
    } catch (error) {
      console.error("Failed to fetch zones:", error);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const payload = {
        ...formData,
        quantity: parseInt(formData.quantity),
      };

      if (editingCrop) {
        await fetch("/api/inventory/plants", {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: editingCrop.id, ...payload }),
        });
      } else {
        await fetch("/api/inventory/plants", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }

      setShowForm(false);
      setEditingCrop(null);
      resetForm();
      fetchPlantCrops();
    } catch (error) {
      console.error("Failed to save plant crop:", error);
    }
  }

  async function handleDelete(id: string) {
    if (!(await confirmAction({
      title: "Delete this plant crop?",
      message: "This cannot be undone.",
      confirmLabel: "Delete",
      tone: "danger",
    }))) return;
    try {
      await fetch(`/api/inventory/plants?id=${id}`, { method: "DELETE" });
      fetchPlantCrops();
    } catch (error) {
      console.error("Failed to delete plant crop:", error);
    }
  }

  async function handleGrowthSubmit(e: React.FormEvent, plantCropId: string) {
    e.preventDefault();
    try {
      await fetch(`/api/inventory/plants/${plantCropId}/growth`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          heightCm: growthData.heightCm ? parseFloat(growthData.heightCm) : null,
          healthScore: growthData.healthScore ? parseInt(growthData.healthScore) : null,
          losses: parseInt(growthData.losses) || 0,
          notes: growthData.notes || null,
        }),
      });

      setShowGrowthForm(null);
      setGrowthData({ heightCm: "", healthScore: "", losses: "0", notes: "" });
      fetchPlantCrops();
    } catch (error) {
      console.error("Failed to add growth log:", error);
    }
  }

  function resetForm() {
    setFormData({
      zoneId: "",
      cropType: "",
      variety: "",
      quantity: "",
      plantedDate: "",
      expectedHarvest: "",
      location: "",
      notes: "",
    });
  }

  function openEditForm(crop: PlantCrop) {
    setEditingCrop(crop);
    setFormData({
      zoneId: crop.zoneId,
      cropType: crop.cropType,
      variety: crop.variety || "",
      quantity: crop.quantity.toString(),
      plantedDate: crop.plantedDate.split("T")[0],
      expectedHarvest: crop.expectedHarvest?.split("T")[0] || "",
      location: crop.location || "",
      notes: crop.notes || "",
    });
    setShowForm(true);
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "seedling":
        return "bg-yellow-500/20 text-yellow-400";
      case "growing":
        return "bg-blue-500/20 text-blue-400";
      case "ready":
        return "bg-green-500/20 text-green-400";
      case "harvested":
        return "bg-gray-500/20 text-gray-400";
      default:
        return "bg-white/10 text-white/70";
    }
  };

  const getHealthColor = (score: number | null) => {
    if (!score) return "text-white/50";
    if (score >= 8) return "text-green-400";
    if (score >= 5) return "text-yellow-400";
    return "text-red-400";
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
            Plant Inventory
          </h1>
          <p className="text-white/50 mt-1">Manage plant crops and track growth</p>
        </div>
        <button
          onClick={() => {
            resetForm();
            setEditingCrop(null);
            setShowForm(true);
          }}
          className="px-4 py-2 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90 flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Add Plant Crop
        </button>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="glass-card p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-white">
                {editingCrop ? "Edit Plant Crop" : "Add Plant Crop"}
              </h2>
              <button onClick={() => setShowForm(false)} className="text-white/50 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-white/70 mb-1">Zone/Grow Bed *</label>
                <select
                  value={formData.zoneId}
                  onChange={(e) => setFormData({ ...formData, zoneId: e.target.value })}
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white"
                  required
                >
                  <option value="">Select a zone</option>
                  {zones.map((zone) => (
                    <option key={zone.id} value={zone.id}>
                      {zone.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-white/70 mb-1">Crop Type *</label>
                  <input
                    type="text"
                    value={formData.cropType}
                    onChange={(e) => setFormData({ ...formData, cropType: e.target.value })}
                    placeholder="e.g., Lettuce, Basil"
                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/70 mb-1">Variety</label>
                  <input
                    type="text"
                    value={formData.variety}
                    onChange={(e) => setFormData({ ...formData, variety: e.target.value })}
                    placeholder="e.g., Butterhead"
                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-white/70 mb-1">Quantity *</label>
                  <input
                    type="number"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    placeholder="Number of plants"
                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white"
                    required
                    min="1"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/70 mb-1">Location</label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g., Row A, Bed 1"
                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-white/70 mb-1">Planted Date *</label>
                  <input
                    type="date"
                    value={formData.plantedDate}
                    onChange={(e) => setFormData({ ...formData, plantedDate: e.target.value })}
                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/70 mb-1">Expected Harvest</label>
                  <input
                    type="date"
                    value={formData.expectedHarvest}
                    onChange={(e) => setFormData({ ...formData, expectedHarvest: e.target.value })}
                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-1">Notes</label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Optional notes..."
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white resize-none"
                  rows={3}
                />
              </div>
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="flex-1 px-4 py-2 border border-white/20 rounded-lg text-white hover:bg-white/5"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90"
                >
                  {editingCrop ? "Update" : "Add Crop"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Plant Crop List */}
      {loading ? (
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="glass-card p-6 animate-pulse">
              <div className="h-6 bg-white/10 rounded w-1/3 mb-3"></div>
              <div className="h-4 bg-white/10 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      ) : plantCrops.length === 0 ? (
        <div className="glass-card p-12 text-center">
          <Leaf className="w-16 h-16 text-white/20 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">No Plant Crops</h3>
          <p className="text-white/50 mb-4">Add your first plant crop to start tracking</p>
          <button
            onClick={() => setShowForm(true)}
            className="px-4 py-2 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90"
          >
            Add Plant Crop
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {plantCrops.map((crop) => (
            <div key={crop.id} className="glass-card overflow-hidden">
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center">
                      <Leaf className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {crop.cropType}
                        {crop.variety && <span className="text-white/50 font-normal"> ({crop.variety})</span>}
                      </h3>
                      <p className="text-white/50 text-sm">
                        {crop.zone.name}
                        {crop.location && ` • ${crop.location}`}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(crop.status)}`}>
                      {crop.status}
                    </span>
                    <button
                      onClick={() => openEditForm(crop)}
                      className="p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-lg"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(crop.id)}
                      className="p-2 text-white/50 hover:text-red-400 hover:bg-red-500/10 rounded-lg"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="text-white/50 text-xs mb-1">Quantity</div>
                    <div className="text-white font-semibold">{crop.quantity.toLocaleString()}</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="text-white/50 text-xs mb-1">Planted</div>
                    <div className="text-white font-semibold">
                      {new Date(crop.plantedDate).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="text-white/50 text-xs mb-1">Days Growing</div>
                    <div className="text-white font-semibold">
                      {Math.floor((Date.now() - new Date(crop.plantedDate).getTime()) / (1000 * 60 * 60 * 24))}
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="text-white/50 text-xs mb-1">Expected Harvest</div>
                    <div className="text-white font-semibold">
                      {crop.expectedHarvest
                        ? new Date(crop.expectedHarvest).toLocaleDateString()
                        : "-"}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
                  <button
                    onClick={() => setShowGrowthForm(showGrowthForm === crop.id ? null : crop.id)}
                    className="px-3 py-1.5 bg-accent/20 text-accent rounded-lg text-sm hover:bg-accent/30 flex items-center gap-2"
                  >
                    <TrendingUp className="w-4 h-4" />
                    Log Growth
                  </button>
                  <button
                    onClick={() => setExpandedCrop(expandedCrop === crop.id ? null : crop.id)}
                    className="text-white/50 hover:text-white flex items-center gap-1 text-sm"
                  >
                    {crop.growthLogs.length} growth logs
                    {expandedCrop === crop.id ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Growth Log Form */}
                {showGrowthForm === crop.id && (
                  <form
                    onSubmit={(e) => handleGrowthSubmit(e, crop.id)}
                    className="mt-4 p-4 bg-white/5 rounded-lg space-y-3"
                  >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      <div>
                        <label className="block text-xs text-white/50 mb-1">Height (cm)</label>
                        <input
                          type="number"
                          step="0.1"
                          value={growthData.heightCm}
                          onChange={(e) => setGrowthData({ ...growthData, heightCm: e.target.value })}
                          className="w-full px-2 py-1.5 bg-white/5 border border-white/10 rounded text-white text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-white/50 mb-1">Health (1-10)</label>
                        <input
                          type="number"
                          value={growthData.healthScore}
                          onChange={(e) => setGrowthData({ ...growthData, healthScore: e.target.value })}
                          className="w-full px-2 py-1.5 bg-white/5 border border-white/10 rounded text-white text-sm"
                          min="1"
                          max="10"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-white/50 mb-1">Losses</label>
                        <input
                          type="number"
                          value={growthData.losses}
                          onChange={(e) => setGrowthData({ ...growthData, losses: e.target.value })}
                          className="w-full px-2 py-1.5 bg-white/5 border border-white/10 rounded text-white text-sm"
                          min="0"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-white/50 mb-1">Notes</label>
                        <input
                          type="text"
                          value={growthData.notes}
                          onChange={(e) => setGrowthData({ ...growthData, notes: e.target.value })}
                          className="w-full px-2 py-1.5 bg-white/5 border border-white/10 rounded text-white text-sm"
                        />
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setShowGrowthForm(null)}
                        className="px-3 py-1.5 text-white/50 hover:text-white text-sm"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-3 py-1.5 bg-accent text-primary font-medium rounded text-sm hover:bg-accent/90"
                      >
                        Save Log
                      </button>
                    </div>
                  </form>
                )}

                {/* Growth Logs History */}
                {expandedCrop === crop.id && crop.growthLogs.length > 0 && (
                  <div className="mt-4 space-y-2">
                    <h4 className="text-sm font-medium text-white/70">Growth History</h4>
                    <div className="space-y-2">
                      {crop.growthLogs.map((log) => (
                        <div key={log.id} className="flex items-center justify-between p-3 bg-white/5 rounded-lg text-sm">
                          <div className="flex items-center gap-4">
                            <div className="text-white/50">
                              {new Date(log.recordedAt).toLocaleDateString()}
                            </div>
                            {log.heightCm && (
                              <div className="text-white">
                                <span className="text-white/50">Height:</span> {log.heightCm}cm
                              </div>
                            )}
                            {log.healthScore && (
                              <div className={getHealthColor(log.healthScore)}>
                                <span className="text-white/50">Health:</span> {log.healthScore}/10
                              </div>
                            )}
                            {log.losses > 0 && (
                              <div className="text-red-400">
                                <span className="text-white/50">Losses:</span> {log.losses}
                              </div>
                            )}
                          </div>
                          {log.notes && <div className="text-white/50">{log.notes}</div>}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
