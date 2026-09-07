"use client";

import { useState, useEffect } from "react";
import { Scale, Plus, Edit2, Trash2, Fish, Leaf, X, Package } from "lucide-react";
import { useConfirm } from "@/components/ui/ConfirmDialog";

interface Zone {
  id: string;
  name: string;
}

interface FishStock {
  id: string;
  species: string;
  quantity: number;
  zone: Zone;
}

interface PlantCrop {
  id: string;
  cropType: string;
  variety: string | null;
  quantity: number;
  zone: Zone;
}

interface Harvest {
  id: string;
  harvestDate: string;
  type: string;
  quantity: number;
  unit: string;
  quality: string | null;
  destination: string;
  notes: string | null;
  fishStock: FishStock | null;
  plantCrop: PlantCrop | null;
  _count: { saleItems: number; salesInventory: number };
}

export default function HarvestsPage() {
  const confirmAction = useConfirm();
  const [harvests, setHarvests] = useState<Harvest[]>([]);
  const [fishStocks, setFishStocks] = useState<FishStock[]>([]);
  const [plantCrops, setPlantCrops] = useState<PlantCrop[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [filterType, setFilterType] = useState<string>("all");

  const [formData, setFormData] = useState({
    type: "fish",
    fishStockId: "",
    plantCropId: "",
    quantity: "",
    unit: "kg",
    quality: "",
    destination: "inventory",
    notes: "",
    addToSalesInventory: false,
    unitPrice: "",
  });

  useEffect(() => {
    fetchHarvests();
    fetchFishStocks();
    fetchPlantCrops();
  }, [filterType]);

  async function fetchHarvests() {
    try {
      const url = filterType === "all" ? "/api/inventory/harvests" : `/api/inventory/harvests?type=${filterType}`;
      const res = await fetch(url);
      const data = await res.json();
      setHarvests(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Failed to fetch harvests:", error);
    } finally {
      setLoading(false);
    }
  }

  async function fetchFishStocks() {
    try {
      const res = await fetch("/api/inventory/fish");
      const data = await res.json();
      const ready = (Array.isArray(data) ? data : []).filter(
        (f: FishStock & { status: string }) => f.status !== "harvested"
      );
      setFishStocks(ready);
    } catch (error) {
      console.error("Failed to fetch fish stocks:", error);
    }
  }

  async function fetchPlantCrops() {
    try {
      const res = await fetch("/api/inventory/plants");
      const data = await res.json();
      const ready = (Array.isArray(data) ? data : []).filter(
        (p: PlantCrop & { status: string }) => p.status !== "harvested"
      );
      setPlantCrops(ready);
    } catch (error) {
      console.error("Failed to fetch plant crops:", error);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const payload = {
        type: formData.type,
        fishStockId: formData.type === "fish" ? formData.fishStockId : null,
        plantCropId: formData.type === "plant" ? formData.plantCropId : null,
        quantity: parseFloat(formData.quantity),
        unit: formData.unit,
        quality: formData.quality || null,
        destination: formData.destination,
        notes: formData.notes || null,
        addToSalesInventory: formData.addToSalesInventory,
        unitPrice: formData.unitPrice ? parseFloat(formData.unitPrice) : 0,
      };

      await fetch("/api/inventory/harvests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      setShowForm(false);
      resetForm();
      fetchHarvests();
      fetchFishStocks();
      fetchPlantCrops();
    } catch (error) {
      console.error("Failed to record harvest:", error);
    }
  }

  async function handleDelete(id: string) {
    if (!(await confirmAction({
      title: "Delete this harvest record?",
      message: "This cannot be undone.",
      confirmLabel: "Delete",
      tone: "danger",
    }))) return;
    try {
      await fetch(`/api/inventory/harvests?id=${id}`, { method: "DELETE" });
      fetchHarvests();
    } catch (error) {
      console.error("Failed to delete harvest:", error);
    }
  }

  function resetForm() {
    setFormData({
      type: "fish",
      fishStockId: "",
      plantCropId: "",
      quantity: "",
      unit: "kg",
      quality: "",
      destination: "inventory",
      notes: "",
      addToSalesInventory: false,
      unitPrice: "",
    });
  }

  const getQualityColor = (quality: string | null) => {
    switch (quality) {
      case "A":
        return "bg-green-500/20 text-green-400";
      case "B":
        return "bg-yellow-500/20 text-yellow-400";
      case "C":
        return "bg-orange-500/20 text-orange-400";
      default:
        return "bg-white/10 text-white/50";
    }
  };

  const getDestinationColor = (destination: string) => {
    switch (destination) {
      case "inventory":
        return "bg-blue-500/20 text-blue-400";
      case "sale":
        return "bg-green-500/20 text-green-400";
      case "waste":
        return "bg-red-500/20 text-red-400";
      default:
        return "bg-white/10 text-white/50";
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
            Harvest Log
          </h1>
          <p className="text-white/50 mt-1">Record and track all harvests</p>
        </div>
        <button
          onClick={() => {
            resetForm();
            setShowForm(true);
          }}
          className="px-4 py-2 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90 flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Record Harvest
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
              <h2 className="text-xl font-semibold text-white">Record Harvest</h2>
              <button onClick={() => setShowForm(false)} className="text-white/50 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-white/70 mb-1">Type *</label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value, fishStockId: "", plantCropId: "" })}
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white"
                  required
                >
                  <option value="fish">Fish</option>
                  <option value="plant">Plant</option>
                </select>
              </div>

              {formData.type === "fish" ? (
                <div>
                  <label className="block text-sm text-white/70 mb-1">Fish Stock *</label>
                  <select
                    value={formData.fishStockId}
                    onChange={(e) => setFormData({ ...formData, fishStockId: e.target.value })}
                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white"
                    required
                  >
                    <option value="">Select fish stock</option>
                    {fishStocks.map((stock) => (
                      <option key={stock.id} value={stock.id}>
                        {stock.species} - {stock.zone.name} ({stock.quantity} fish)
                      </option>
                    ))}
                  </select>
                </div>
              ) : (
                <div>
                  <label className="block text-sm text-white/70 mb-1">Plant Crop *</label>
                  <select
                    value={formData.plantCropId}
                    onChange={(e) => setFormData({ ...formData, plantCropId: e.target.value })}
                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white"
                    required
                  >
                    <option value="">Select plant crop</option>
                    {plantCrops.map((crop) => (
                      <option key={crop.id} value={crop.id}>
                        {crop.cropType}{crop.variety ? ` (${crop.variety})` : ""} - {crop.zone.name} ({crop.quantity} plants)
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-white/70 mb-1">Quantity *</label>
                  <input
                    type="number"
                    step="0.01"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/70 mb-1">Unit *</label>
                  <select
                    value={formData.unit}
                    onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white"
                    required
                  >
                    <option value="kg">kg</option>
                    <option value="heads">heads</option>
                    <option value="bunches">bunches</option>
                    <option value="pieces">pieces</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-white/70 mb-1">Quality Grade</label>
                  <select
                    value={formData.quality}
                    onChange={(e) => setFormData({ ...formData, quality: e.target.value })}
                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white"
                  >
                    <option value="">Not graded</option>
                    <option value="A">Grade A</option>
                    <option value="B">Grade B</option>
                    <option value="C">Grade C</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-white/70 mb-1">Destination</label>
                  <select
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white"
                  >
                    <option value="inventory">Inventory</option>
                    <option value="sale">Direct Sale</option>
                    <option value="waste">Waste</option>
                  </select>
                </div>
              </div>

              {formData.destination === "inventory" && (
                <div className="p-4 bg-white/5 rounded-lg space-y-3">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.addToSalesInventory}
                      onChange={(e) => setFormData({ ...formData, addToSalesInventory: e.target.checked })}
                      className="w-4 h-4 rounded bg-white/10 border-white/20"
                    />
                    <span className="text-sm text-white">Add to Sales Inventory</span>
                  </label>
                  {formData.addToSalesInventory && (
                    <div>
                      <label className="block text-sm text-white/70 mb-1">Unit Price ($)</label>
                      <input
                        type="number"
                        step="0.01"
                        value={formData.unitPrice}
                        onChange={(e) => setFormData({ ...formData, unitPrice: e.target.value })}
                        placeholder="Price per unit"
                        className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white"
                      />
                    </div>
                  )}
                </div>
              )}

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
                  Record Harvest
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Harvests List */}
      {loading ? (
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="glass-card p-6 animate-pulse">
              <div className="h-6 bg-white/10 rounded w-1/3 mb-3"></div>
              <div className="h-4 bg-white/10 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      ) : harvests.length === 0 ? (
        <div className="glass-card p-12 text-center">
          <Scale className="w-16 h-16 text-white/20 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">No Harvests Recorded</h3>
          <p className="text-white/50 mb-4">Record your first harvest to start tracking</p>
          <button
            onClick={() => setShowForm(true)}
            className="px-4 py-2 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90"
          >
            Record Harvest
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {harvests.map((harvest) => (
            <div key={harvest.id} className="glass-card p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    harvest.type === "fish" ? "bg-blue-500/20" : "bg-green-500/20"
                  }`}>
                    {harvest.type === "fish" ? (
                      <Fish className="w-6 h-6 text-blue-400" />
                    ) : (
                      <Leaf className="w-6 h-6 text-green-400" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {harvest.type === "fish"
                        ? harvest.fishStock?.species
                        : `${harvest.plantCrop?.cropType}${harvest.plantCrop?.variety ? ` (${harvest.plantCrop.variety})` : ""}`}
                    </h3>
                    <p className="text-white/50 text-sm">
                      {harvest.type === "fish"
                        ? harvest.fishStock?.zone.name
                        : harvest.plantCrop?.zone.name}
                      {" • "}
                      {new Date(harvest.harvestDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {harvest.quality && (
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getQualityColor(harvest.quality)}`}>
                      Grade {harvest.quality}
                    </span>
                  )}
                  <span className={`px-2 py-1 rounded text-xs font-medium ${getDestinationColor(harvest.destination)}`}>
                    {harvest.destination}
                  </span>
                  <button
                    onClick={() => handleDelete(harvest.id)}
                    className="p-2 text-white/50 hover:text-red-400 hover:bg-red-500/10 rounded-lg"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-6 mt-4 pt-4 border-t border-white/10">
                <div>
                  <span className="text-white/50 text-sm">Quantity:</span>
                  <span className="text-white font-semibold ml-2">
                    {harvest.quantity} {harvest.unit}
                  </span>
                </div>
                {harvest._count.salesInventory > 0 && (
                  <div className="flex items-center gap-1 text-cyan-400">
                    <Package className="w-4 h-4" />
                    <span className="text-sm">In Sales Inventory</span>
                  </div>
                )}
                {harvest.notes && (
                  <div className="text-white/50 text-sm">{harvest.notes}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
