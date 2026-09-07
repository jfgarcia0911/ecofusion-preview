"use client";

import { useState, useEffect } from "react";
import { Package, Plus, Edit2, Trash2, ShoppingCart, X } from "lucide-react";
import Link from "next/link";
import { useConfirm } from "@/components/ui/ConfirmDialog";

interface SalesInventoryItem {
  id: string;
  productName: string;
  productType: string;
  quantity: number;
  unit: string;
  unitPrice: number;
  addedDate: string;
  expiryDate: string | null;
  status: string;
  harvest: {
    id: string;
    type: string;
    harvestDate: string;
  } | null;
  _count: { saleItems: number };
}

export default function SalesStockPage() {
  const confirmAction = useConfirm();
  const [inventory, setInventory] = useState<SalesInventoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState<SalesInventoryItem | null>(null);
  const [filterStatus, setFilterStatus] = useState<string>("available");

  const [formData, setFormData] = useState({
    productName: "",
    productType: "produce",
    quantity: "",
    unit: "kg",
    unitPrice: "",
    expiryDate: "",
  });

  useEffect(() => {
    fetchInventory();
  }, [filterStatus]);

  async function fetchInventory() {
    try {
      const url = filterStatus === "all"
        ? "/api/inventory/sales-stock"
        : `/api/inventory/sales-stock?status=${filterStatus}`;
      const res = await fetch(url);
      const data = await res.json();
      setInventory(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Failed to fetch sales inventory:", error);
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const payload = {
        ...formData,
        quantity: parseFloat(formData.quantity),
        unitPrice: parseFloat(formData.unitPrice),
        expiryDate: formData.expiryDate || null,
      };

      if (editingItem) {
        await fetch("/api/inventory/sales-stock", {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: editingItem.id, ...payload }),
        });
      } else {
        await fetch("/api/inventory/sales-stock", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }

      setShowForm(false);
      setEditingItem(null);
      resetForm();
      fetchInventory();
    } catch (error) {
      console.error("Failed to save inventory item:", error);
    }
  }

  async function handleDelete(id: string) {
    if (!(await confirmAction({
      title: "Delete this inventory item?",
      message: "This cannot be undone.",
      confirmLabel: "Delete",
      tone: "danger",
    }))) return;
    try {
      await fetch(`/api/inventory/sales-stock?id=${id}`, { method: "DELETE" });
      fetchInventory();
    } catch (error) {
      console.error("Failed to delete inventory item:", error);
    }
  }

  function resetForm() {
    setFormData({
      productName: "",
      productType: "produce",
      quantity: "",
      unit: "kg",
      unitPrice: "",
      expiryDate: "",
    });
  }

  function openEditForm(item: SalesInventoryItem) {
    setEditingItem(item);
    setFormData({
      productName: item.productName,
      productType: item.productType,
      quantity: item.quantity.toString(),
      unit: item.unit,
      unitPrice: item.unitPrice.toString(),
      expiryDate: item.expiryDate?.split("T")[0] || "",
    });
    setShowForm(true);
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "available":
        return "bg-green-500/20 text-green-400";
      case "reserved":
        return "bg-yellow-500/20 text-yellow-400";
      case "sold":
        return "bg-blue-500/20 text-blue-400";
      case "expired":
        return "bg-red-500/20 text-red-400";
      default:
        return "bg-white/10 text-white/50";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "fish":
        return "text-blue-400";
      case "produce":
        return "text-green-400";
      default:
        return "text-white/70";
    }
  };

  const totalValue = inventory.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
  const totalItems = inventory.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
            Sales Inventory
          </h1>
          <p className="text-white/50 mt-1">Products available for sale</p>
        </div>
        <div className="flex gap-3">
          <Link href="/sales/new">
            <button className="px-4 py-2 bg-accent/20 text-accent font-medium rounded-lg hover:bg-accent/30 flex items-center gap-2">
              <ShoppingCart className="w-4 h-4" />
              New Sale
            </button>
          </Link>
          <button
            onClick={() => {
              resetForm();
              setEditingItem(null);
              setShowForm(true);
            }}
            className="px-4 py-2 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90 flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Add Item
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="glass-card p-4">
          <div className="text-white/50 text-sm">Total Items</div>
          <div className="text-2xl font-bold text-white">{inventory.length}</div>
        </div>
        <div className="glass-card p-4">
          <div className="text-white/50 text-sm">Total Quantity</div>
          <div className="text-2xl font-bold text-white">{totalItems.toLocaleString()}</div>
        </div>
        <div className="glass-card p-4">
          <div className="text-white/50 text-sm">Total Value</div>
          <div className="text-2xl font-bold text-accent">${totalValue.toFixed(2)}</div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2">
        {["available", "reserved", "sold", "expired", "all"].map((status) => (
          <button
            key={status}
            onClick={() => setFilterStatus(status)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors capitalize ${
              filterStatus === status
                ? "bg-accent text-primary"
                : "bg-white/5 text-white/70 hover:bg-white/10"
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="glass-card p-6 w-full max-w-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-white">
                {editingItem ? "Edit Inventory Item" : "Add Inventory Item"}
              </h2>
              <button onClick={() => setShowForm(false)} className="text-white/50 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-white/70 mb-1">Product Name *</label>
                <input
                  type="text"
                  value={formData.productName}
                  onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                  placeholder="e.g., Fresh Tilapia, Organic Lettuce"
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-white/70 mb-1">Type *</label>
                  <select
                    value={formData.productType}
                    onChange={(e) => setFormData({ ...formData, productType: e.target.value })}
                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white"
                    required
                  >
                    <option value="fish">Fish</option>
                    <option value="produce">Produce</option>
                    <option value="other">Other</option>
                  </select>
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
                  <label className="block text-sm text-white/70 mb-1">Quantity *</label>
                  <input
                    type="number"
                    step="0.01"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white"
                    required
                    min="0"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/70 mb-1">Unit Price ($) *</label>
                  <input
                    type="number"
                    step="0.01"
                    value={formData.unitPrice}
                    onChange={(e) => setFormData({ ...formData, unitPrice: e.target.value })}
                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white"
                    required
                    min="0"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-1">Expiry Date</label>
                <input
                  type="date"
                  value={formData.expiryDate}
                  onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white"
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
                  {editingItem ? "Update" : "Add Item"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Inventory List */}
      {loading ? (
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="glass-card p-6 animate-pulse">
              <div className="h-6 bg-white/10 rounded w-1/3 mb-3"></div>
              <div className="h-4 bg-white/10 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      ) : inventory.length === 0 ? (
        <div className="glass-card p-12 text-center">
          <Package className="w-16 h-16 text-white/20 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">No Inventory Items</h3>
          <p className="text-white/50 mb-4">
            {filterStatus === "available"
              ? "Add items to your sales inventory or harvest products"
              : "No items match this filter"}
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="px-4 py-2 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90"
          >
            Add Item
          </button>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 px-4 text-white/50 font-medium">Product</th>
                <th className="text-left py-3 px-4 text-white/50 font-medium">Type</th>
                <th className="text-right py-3 px-4 text-white/50 font-medium">Quantity</th>
                <th className="text-right py-3 px-4 text-white/50 font-medium">Price</th>
                <th className="text-right py-3 px-4 text-white/50 font-medium">Value</th>
                <th className="text-center py-3 px-4 text-white/50 font-medium">Status</th>
                <th className="text-center py-3 px-4 text-white/50 font-medium">Expiry</th>
                <th className="text-right py-3 px-4 text-white/50 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {inventory.map((item) => (
                <tr key={item.id} className="border-b border-white/5 hover:bg-white/5">
                  <td className="py-4 px-4">
                    <div className="font-medium text-white">{item.productName}</div>
                    {item.harvest && (
                      <div className="text-xs text-white/50">
                        From harvest {new Date(item.harvest.harvestDate).toLocaleDateString()}
                      </div>
                    )}
                  </td>
                  <td className={`py-4 px-4 ${getTypeColor(item.productType)} capitalize`}>
                    {item.productType}
                  </td>
                  <td className="py-4 px-4 text-right text-white">
                    {item.quantity} {item.unit}
                  </td>
                  <td className="py-4 px-4 text-right text-white">
                    ${item.unitPrice.toFixed(2)}
                  </td>
                  <td className="py-4 px-4 text-right text-accent font-medium">
                    ${(item.quantity * item.unitPrice).toFixed(2)}
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(item.status)}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center text-white/50">
                    {item.expiryDate
                      ? new Date(item.expiryDate).toLocaleDateString()
                      : "-"}
                  </td>
                  <td className="py-4 px-4 text-right">
                    <div className="flex justify-end gap-1">
                      <button
                        onClick={() => openEditForm(item)}
                        className="p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-lg"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="p-2 text-white/50 hover:text-red-400 hover:bg-red-500/10 rounded-lg"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
