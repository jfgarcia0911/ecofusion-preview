"use client";

import { useState, useEffect } from "react";
import { Fish, Plus, Edit2, Trash2, TrendingUp, Calendar, X, ChevronDown, ChevronUp } from "lucide-react";

interface Zone {
  id: string;
  name: string;
  type: string;
}

interface GrowthLog {
  id: string;
  recordedAt: string;
  avgWeight: number;
  mortality: number;
  feedUsed: number | null;
  notes: string | null;
}

interface FishStock {
  id: string;
  zoneId: string;
  species: string;
  quantity: number;
  avgWeight: number | null;
  ageWeeks: number | null;
  dateAdded: string;
  expectedHarvest: string | null;
  status: string;
  notes: string | null;
  zone: Zone;
  growthLogs: GrowthLog[];
  _count: { harvests: number };
}

export default function FishInventoryPage() {
  const [fishStocks, setFishStocks] = useState<FishStock[]>([]);
  const [zones, setZones] = useState<Zone[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingStock, setEditingStock] = useState<FishStock | null>(null);
  const [expandedStock, setExpandedStock] = useState<string | null>(null);
  const [showGrowthForm, setShowGrowthForm] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    zoneId: "",
    species: "",
    quantity: "",
    avgWeight: "",
    ageWeeks: "",
    expectedHarvest: "",
    notes: "",
  });

  const [growthData, setGrowthData] = useState({
    avgWeight: "",
    mortality: "0",
    feedUsed: "",
    notes: "",
  });

  useEffect(() => {
    fetchFishStocks();
    fetchZones();
  }, []);

  async function fetchFishStocks() {
    try {
      const res = await fetch("/api/inventory/fish");
      const data = await res.json();
      setFishStocks(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Failed to fetch fish stocks:", error);
    } finally {
      setLoading(false);
    }
  }

  async function fetchZones() {
    try {
      const res = await fetch("/api/zones");
      const data = await res.json();
      const aquacultureZones = (Array.isArray(data) ? data : []).filter(
        (z: Zone) => z.type === "aquaculture"
      );
      setZones(aquacultureZones);
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
        avgWeight: formData.avgWeight ? parseFloat(formData.avgWeight) : null,
        ageWeeks: formData.ageWeeks ? parseInt(formData.ageWeeks) : null,
      };

      if (editingStock) {
        await fetch("/api/inventory/fish", {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: editingStock.id, ...payload }),
        });
      } else {
        await fetch("/api/inventory/fish", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }

      setShowForm(false);
      setEditingStock(null);
      resetForm();
      fetchFishStocks();
    } catch (error) {
      console.error("Failed to save fish stock:", error);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Are you sure you want to delete this fish stock?")) return;
    try {
      await fetch(`/api/inventory/fish?id=${id}`, { method: "DELETE" });
      fetchFishStocks();
    } catch (error) {
      console.error("Failed to delete fish stock:", error);
    }
  }

  async function handleGrowthSubmit(e: React.FormEvent, fishStockId: string) {
    e.preventDefault();
    try {
      await fetch(`/api/inventory/fish/${fishStockId}/growth`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          avgWeight: parseFloat(growthData.avgWeight),
          mortality: parseInt(growthData.mortality) || 0,
          feedUsed: growthData.feedUsed ? parseFloat(growthData.feedUsed) : null,
          notes: growthData.notes || null,
        }),
      });

      setShowGrowthForm(null);
      setGrowthData({ avgWeight: "", mortality: "0", feedUsed: "", notes: "" });
      fetchFishStocks();
    } catch (error) {
      console.error("Failed to add growth log:", error);
    }
  }

  function resetForm() {
    setFormData({
      zoneId: "",
      species: "",
      quantity: "",
      avgWeight: "",
      ageWeeks: "",
      expectedHarvest: "",
      notes: "",
    });
  }

  function openEditForm(stock: FishStock) {
    setEditingStock(stock);
    setFormData({
      zoneId: stock.zoneId,
      species: stock.species,
      quantity: stock.quantity.toString(),
      avgWeight: stock.avgWeight?.toString() || "",
      ageWeeks: stock.ageWeeks?.toString() || "",
      expectedHarvest: stock.expectedHarvest?.split("T")[0] || "",
      notes: stock.notes || "",
    });
    setShowForm(true);
  }

  const getStatusColor = (status: string) => {
    switch (status) {
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

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
            Fish Inventory
          </h1>
          <p className="text-white/50 mt-1">Manage fish stocks and track growth</p>
        </div>
        <button
          onClick={() => {
            resetForm();
            setEditingStock(null);
            setShowForm(true);
          }}
          className="px-4 py-2 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90 flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Add Fish Stock
        </button>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="glass-card p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-white">
                {editingStock ? "Edit Fish Stock" : "Add Fish Stock"}
              </h2>
              <button onClick={() => setShowForm(false)} className="text-white/50 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-white/70 mb-1">Zone/Tank *</label>
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
              <div>
                <label className="block text-sm text-white/70 mb-1">Species *</label>
                <input
                  type="text"
                  value={formData.species}
                  onChange={(e) => setFormData({ ...formData, species: e.target.value })}
                  placeholder="e.g., Tilapia, Catfish, Trout"
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-white/70 mb-1">Quantity *</label>
                  <input
                    type="number"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    placeholder="Number of fish"
                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white"
                    required
                    min="1"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/70 mb-1">Avg Weight (g)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={formData.avgWeight}
                    onChange={(e) => setFormData({ ...formData, avgWeight: e.target.value })}
                    placeholder="Grams"
                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-white/70 mb-1">Age (weeks)</label>
                  <input
                    type="number"
                    value={formData.ageWeeks}
                    onChange={(e) => setFormData({ ...formData, ageWeeks: e.target.value })}
                    placeholder="Weeks"
                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white"
                    min="0"
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
                  {editingStock ? "Update" : "Add Stock"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Fish Stock List */}
      {loading ? (
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="glass-card p-6 animate-pulse">
              <div className="h-6 bg-white/10 rounded w-1/3 mb-3"></div>
              <div className="h-4 bg-white/10 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      ) : fishStocks.length === 0 ? (
        <div className="glass-card p-12 text-center">
          <Fish className="w-16 h-16 text-white/20 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">No Fish Stock</h3>
          <p className="text-white/50 mb-4">Add your first fish stock to start tracking</p>
          <button
            onClick={() => setShowForm(true)}
            className="px-4 py-2 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90"
          >
            Add Fish Stock
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {fishStocks.map((stock) => (
            <div key={stock.id} className="glass-card overflow-hidden">
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center">
                      <Fish className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{stock.species}</h3>
                      <p className="text-white/50 text-sm">{stock.zone.name}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(stock.status)}`}>
                      {stock.status}
                    </span>
                    <button
                      onClick={() => openEditForm(stock)}
                      className="p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-lg"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(stock.id)}
                      className="p-2 text-white/50 hover:text-red-400 hover:bg-red-500/10 rounded-lg"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="text-white/50 text-xs mb-1">Quantity</div>
                    <div className="text-white font-semibold">{stock.quantity.toLocaleString()}</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="text-white/50 text-xs mb-1">Avg Weight</div>
                    <div className="text-white font-semibold">
                      {stock.avgWeight ? `${stock.avgWeight}g` : "—"}
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="text-white/50 text-xs mb-1">Age</div>
                    <div className="text-white font-semibold">
                      {stock.ageWeeks ? `${stock.ageWeeks} weeks` : "—"}
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="text-white/50 text-xs mb-1">Expected Harvest</div>
                    <div className="text-white font-semibold">
                      {stock.expectedHarvest
                        ? new Date(stock.expectedHarvest).toLocaleDateString()
                        : "—"}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
                  <button
                    onClick={() => setShowGrowthForm(showGrowthForm === stock.id ? null : stock.id)}
                    className="px-3 py-1.5 bg-accent/20 text-accent rounded-lg text-sm hover:bg-accent/30 flex items-center gap-2"
                  >
                    <TrendingUp className="w-4 h-4" />
                    Log Growth
                  </button>
                  <button
                    onClick={() => setExpandedStock(expandedStock === stock.id ? null : stock.id)}
                    className="text-white/50 hover:text-white flex items-center gap-1 text-sm"
                  >
                    {stock.growthLogs.length} growth logs
                    {expandedStock === stock.id ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Growth Log Form */}
                {showGrowthForm === stock.id && (
                  <form
                    onSubmit={(e) => handleGrowthSubmit(e, stock.id)}
                    className="mt-4 p-4 bg-white/5 rounded-lg space-y-3"
                  >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      <div>
                        <label className="block text-xs text-white/50 mb-1">Avg Weight (g) *</label>
                        <input
                          type="number"
                          step="0.1"
                          value={growthData.avgWeight}
                          onChange={(e) => setGrowthData({ ...growthData, avgWeight: e.target.value })}
                          className="w-full px-2 py-1.5 bg-white/5 border border-white/10 rounded text-white text-sm"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-white/50 mb-1">Mortality</label>
                        <input
                          type="number"
                          value={growthData.mortality}
                          onChange={(e) => setGrowthData({ ...growthData, mortality: e.target.value })}
                          className="w-full px-2 py-1.5 bg-white/5 border border-white/10 rounded text-white text-sm"
                          min="0"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-white/50 mb-1">Feed Used (kg)</label>
                        <input
                          type="number"
                          step="0.1"
                          value={growthData.feedUsed}
                          onChange={(e) => setGrowthData({ ...growthData, feedUsed: e.target.value })}
                          className="w-full px-2 py-1.5 bg-white/5 border border-white/10 rounded text-white text-sm"
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
                {expandedStock === stock.id && stock.growthLogs.length > 0 && (
                  <div className="mt-4 space-y-2">
                    <h4 className="text-sm font-medium text-white/70">Growth History</h4>
                    <div className="space-y-2">
                      {stock.growthLogs.map((log) => (
                        <div key={log.id} className="flex items-center justify-between p-3 bg-white/5 rounded-lg text-sm">
                          <div className="flex items-center gap-4">
                            <div className="text-white/50">
                              {new Date(log.recordedAt).toLocaleDateString()}
                            </div>
                            <div className="text-white">
                              <span className="text-white/50">Weight:</span> {log.avgWeight}g
                            </div>
                            {log.mortality > 0 && (
                              <div className="text-red-400">
                                <span className="text-white/50">Mortality:</span> {log.mortality}
                              </div>
                            )}
                            {log.feedUsed && (
                              <div className="text-white">
                                <span className="text-white/50">Feed:</span> {log.feedUsed}kg
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
