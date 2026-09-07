"use client";

import { useState, useEffect } from "react";
import { Settings, Plus, Edit2, Trash2, Fish, Leaf, X } from "lucide-react";
import { useConfirm } from "@/components/ui/ConfirmDialog";

interface GrowthParameter {
  id: string;
  type: string;
  species: string;
  variety: string | null;
  seedlingDays: number | null;
  growingDays: number;
  harvestWeight: number | null;
  optimalTempMin: number | null;
  optimalTempMax: number | null;
  optimalPh: number | null;
  expectedYield: number | null;
  yieldUnit: string | null;
  notes: string | null;
}

export default function GrowthParametersPage() {
  const confirmAction = useConfirm();
  const [parameters, setParameters] = useState<GrowthParameter[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingParam, setEditingParam] = useState<GrowthParameter | null>(null);
  const [filterType, setFilterType] = useState<string>("all");

  const [formData, setFormData] = useState({
    type: "fish",
    species: "",
    variety: "",
    seedlingDays: "",
    growingDays: "",
    harvestWeight: "",
    optimalTempMin: "",
    optimalTempMax: "",
    optimalPh: "",
    expectedYield: "",
    yieldUnit: "",
    notes: "",
  });

  useEffect(() => {
    fetchParameters();
  }, [filterType]);

  async function fetchParameters() {
    try {
      const url = filterType === "all" ? "/api/inventory/parameters" : `/api/inventory/parameters?type=${filterType}`;
      const res = await fetch(url);
      const data = await res.json();
      setParameters(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Failed to fetch parameters:", error);
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const payload = {
        ...formData,
        seedlingDays: formData.seedlingDays ? parseInt(formData.seedlingDays) : null,
        growingDays: parseInt(formData.growingDays),
        harvestWeight: formData.harvestWeight ? parseFloat(formData.harvestWeight) : null,
        optimalTempMin: formData.optimalTempMin ? parseFloat(formData.optimalTempMin) : null,
        optimalTempMax: formData.optimalTempMax ? parseFloat(formData.optimalTempMax) : null,
        optimalPh: formData.optimalPh ? parseFloat(formData.optimalPh) : null,
        expectedYield: formData.expectedYield ? parseFloat(formData.expectedYield) : null,
      };

      if (editingParam) {
        await fetch("/api/inventory/parameters", {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: editingParam.id, ...payload }),
        });
      } else {
        await fetch("/api/inventory/parameters", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }

      setShowForm(false);
      setEditingParam(null);
      resetForm();
      fetchParameters();
    } catch (error) {
      console.error("Failed to save parameter:", error);
    }
  }

  async function handleDelete(id: string) {
    if (!(await confirmAction({
      title: "Delete this parameter template?",
      message: "This cannot be undone.",
      confirmLabel: "Delete",
      tone: "danger",
    }))) return;
    try {
      await fetch(`/api/inventory/parameters?id=${id}`, { method: "DELETE" });
      fetchParameters();
    } catch (error) {
      console.error("Failed to delete parameter:", error);
    }
  }

  function resetForm() {
    setFormData({
      type: "fish",
      species: "",
      variety: "",
      seedlingDays: "",
      growingDays: "",
      harvestWeight: "",
      optimalTempMin: "",
      optimalTempMax: "",
      optimalPh: "",
      expectedYield: "",
      yieldUnit: "",
      notes: "",
    });
  }

  function openEditForm(param: GrowthParameter) {
    setEditingParam(param);
    setFormData({
      type: param.type,
      species: param.species,
      variety: param.variety || "",
      seedlingDays: param.seedlingDays?.toString() || "",
      growingDays: param.growingDays.toString(),
      harvestWeight: param.harvestWeight?.toString() || "",
      optimalTempMin: param.optimalTempMin?.toString() || "",
      optimalTempMax: param.optimalTempMax?.toString() || "",
      optimalPh: param.optimalPh?.toString() || "",
      expectedYield: param.expectedYield?.toString() || "",
      yieldUnit: param.yieldUnit || "",
      notes: param.notes || "",
    });
    setShowForm(true);
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
            Growth Parameters
          </h1>
          <p className="text-white/50 mt-1">Define species growth templates and expectations</p>
        </div>
        <button
          onClick={() => {
            resetForm();
            setEditingParam(null);
            setShowForm(true);
          }}
          className="px-4 py-2 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90 flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Add Template
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2">
        {["all", "fish", "plant"].map((type) => (
          <button
            key={type}
            onClick={() => setFilterType(type)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filterType === type
                ? "bg-accent text-primary"
                : "bg-white/5 text-white/70 hover:bg-white/10"
            }`}
          >
            {type === "all" ? "All" : type === "fish" ? "Fish" : "Plants"}
          </button>
        ))}
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="glass-card p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-white">
                {editingParam ? "Edit Template" : "Add Growth Template"}
              </h2>
              <button onClick={() => setShowForm(false)} className="text-white/50 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-white/70 mb-1">Type *</label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white"
                    required
                  >
                    <option value="fish">Fish</option>
                    <option value="plant">Plant</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-white/70 mb-1">Species *</label>
                  <input
                    type="text"
                    value={formData.species}
                    onChange={(e) => setFormData({ ...formData, species: e.target.value })}
                    placeholder="e.g., Tilapia, Lettuce"
                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-1">Variety</label>
                <input
                  type="text"
                  value={formData.variety}
                  onChange={(e) => setFormData({ ...formData, variety: e.target.value })}
                  placeholder="e.g., Nile, Butterhead"
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white"
                />
              </div>

              <div className="border-t border-white/10 pt-4">
                <h3 className="text-sm font-medium text-white mb-3">Growth Timeline</h3>
                <div className="grid grid-cols-2 gap-4">
                  {formData.type === "plant" && (
                    <div>
                      <label className="block text-sm text-white/70 mb-1">Seedling Days</label>
                      <input
                        type="number"
                        value={formData.seedlingDays}
                        onChange={(e) => setFormData({ ...formData, seedlingDays: e.target.value })}
                        className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white"
                      />
                    </div>
                  )}
                  <div>
                    <label className="block text-sm text-white/70 mb-1">Growing Days *</label>
                    <input
                      type="number"
                      value={formData.growingDays}
                      onChange={(e) => setFormData({ ...formData, growingDays: e.target.value })}
                      placeholder="Days to maturity"
                      className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-white/70 mb-1">Harvest Weight (g)</label>
                    <input
                      type="number"
                      step="0.1"
                      value={formData.harvestWeight}
                      onChange={(e) => setFormData({ ...formData, harvestWeight: e.target.value })}
                      placeholder="Expected weight"
                      className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white"
                    />
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 pt-4">
                <h3 className="text-sm font-medium text-white mb-3">Environment</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm text-white/70 mb-1">Min Temp (°C)</label>
                    <input
                      type="number"
                      step="0.1"
                      value={formData.optimalTempMin}
                      onChange={(e) => setFormData({ ...formData, optimalTempMin: e.target.value })}
                      className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-white/70 mb-1">Max Temp (°C)</label>
                    <input
                      type="number"
                      step="0.1"
                      value={formData.optimalTempMax}
                      onChange={(e) => setFormData({ ...formData, optimalTempMax: e.target.value })}
                      className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-white/70 mb-1">Optimal pH</label>
                    <input
                      type="number"
                      step="0.1"
                      value={formData.optimalPh}
                      onChange={(e) => setFormData({ ...formData, optimalPh: e.target.value })}
                      className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white"
                    />
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 pt-4">
                <h3 className="text-sm font-medium text-white mb-3">Yield Expectations</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-white/70 mb-1">Expected Yield</label>
                    <input
                      type="number"
                      step="0.1"
                      value={formData.expectedYield}
                      onChange={(e) => setFormData({ ...formData, expectedYield: e.target.value })}
                      className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-white/70 mb-1">Yield Unit</label>
                    <select
                      value={formData.yieldUnit}
                      onChange={(e) => setFormData({ ...formData, yieldUnit: e.target.value })}
                      className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white"
                    >
                      <option value="">Select unit</option>
                      <option value="kg">kg</option>
                      <option value="heads">heads</option>
                      <option value="bunches">bunches</option>
                      <option value="pieces">pieces</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-1">Notes</label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Optional notes..."
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white resize-none"
                  rows={2}
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
                  {editingParam ? "Update" : "Create Template"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Parameters List */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="glass-card p-6 animate-pulse">
              <div className="h-6 bg-white/10 rounded w-1/3 mb-3"></div>
              <div className="h-4 bg-white/10 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      ) : parameters.length === 0 ? (
        <div className="glass-card p-12 text-center">
          <Settings className="w-16 h-16 text-white/20 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">No Growth Templates</h3>
          <p className="text-white/50 mb-4">Create templates to standardize your species data</p>
          <button
            onClick={() => setShowForm(true)}
            className="px-4 py-2 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90"
          >
            Add Template
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {parameters.map((param) => (
            <div key={param.id} className="glass-card p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    param.type === "fish" ? "bg-blue-500/20" : "bg-green-500/20"
                  }`}>
                    {param.type === "fish" ? (
                      <Fish className="w-5 h-5 text-blue-400" />
                    ) : (
                      <Leaf className="w-5 h-5 text-green-400" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{param.species}</h3>
                    {param.variety && (
                      <p className="text-sm text-white/50">{param.variety}</p>
                    )}
                  </div>
                </div>
                <div className="flex gap-1">
                  <button
                    onClick={() => openEditForm(param)}
                    className="p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-lg"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(param.id)}
                    className="p-2 text-white/50 hover:text-red-400 hover:bg-red-500/10 rounded-lg"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <span className="text-white/50">Growing Days:</span>
                  <span className="text-white ml-2">{param.growingDays}</span>
                </div>
                {param.seedlingDays && (
                  <div>
                    <span className="text-white/50">Seedling Days:</span>
                    <span className="text-white ml-2">{param.seedlingDays}</span>
                  </div>
                )}
                {param.harvestWeight && (
                  <div>
                    <span className="text-white/50">Harvest Weight:</span>
                    <span className="text-white ml-2">{param.harvestWeight}g</span>
                  </div>
                )}
                {(param.optimalTempMin || param.optimalTempMax) && (
                  <div>
                    <span className="text-white/50">Temp:</span>
                    <span className="text-white ml-2">
                      {param.optimalTempMin || "-"}°C - {param.optimalTempMax || "-"}°C
                    </span>
                  </div>
                )}
                {param.optimalPh && (
                  <div>
                    <span className="text-white/50">pH:</span>
                    <span className="text-white ml-2">{param.optimalPh}</span>
                  </div>
                )}
                {param.expectedYield && (
                  <div>
                    <span className="text-white/50">Yield:</span>
                    <span className="text-white ml-2">
                      {param.expectedYield} {param.yieldUnit || "units"}
                    </span>
                  </div>
                )}
              </div>

              {param.notes && (
                <p className="mt-3 text-sm text-white/50 border-t border-white/10 pt-3">
                  {param.notes}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
