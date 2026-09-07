"use client";

import { useState, useEffect } from "react";
import { BUSINESS_PHASES } from "@/lib/constants";
import { useRouter } from "next/navigation";
import { ShoppingCart, Plus, Trash2, Search, User, Package, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface InventoryItem {
  id: string;
  productName: string;
  productType: string;
  quantity: number;
  unit: string;
  unitPrice: number;
  status: string;
}

interface SaleItem {
  id: string;
  inventoryItemId: string | null;
  phaseId: string;
  productName: string;
  quantity: number;
  unit: string;
  unitPrice: number;
  maxQuantity: number;
}

interface CRMContact {
  id: string;
  name: string;
  email: string | null;
  phone: string | null;
}

export default function NewSalePage() {
  const router = useRouter();
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const [items, setItems] = useState<SaleItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [showInventoryPicker, setShowInventoryPicker] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [crmContacts, setCrmContacts] = useState<CRMContact[]>([]);
  const [crmEnabled, setCrmEnabled] = useState(false);

  const [customerData, setCustomerData] = useState({
    customerName: "",
    customerEmail: "",
    customerPhone: "",
    crmCustomerId: "",
  });

  const [saleData, setSaleData] = useState({
    tax: "",
    discount: "",
    paymentMethod: "cash",
    notes: "",
  });

  useEffect(() => {
    fetchInventory();
    checkCrmStatus();
  }, []);

  async function fetchInventory() {
    try {
      const res = await fetch("/api/inventory/sales-stock?status=available");
      const data = await res.json();
      setInventory(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Failed to fetch inventory:", error);
    } finally {
      setLoading(false);
    }
  }

  async function checkCrmStatus() {
    try {
      const res = await fetch("/api/crm/sync");
      const data = await res.json();
      setCrmEnabled(data.isConfigured);
    } catch (error) {
      console.error("Failed to check CRM status:", error);
    }
  }

  async function searchCrmContacts(query: string) {
    if (!crmEnabled || query.length < 2) {
      setCrmContacts([]);
      return;
    }
    try {
      const res = await fetch(`/api/crm/customers?query=${encodeURIComponent(query)}`);
      const data = await res.json();
      setCrmContacts(data.contacts || []);
    } catch (error) {
      console.error("Failed to search CRM contacts:", error);
    }
  }

  function addItemFromInventory(inventoryItem: InventoryItem) {
    const existingIndex = items.findIndex((i) => i.inventoryItemId === inventoryItem.id);
    if (existingIndex !== -1) {
      // Already added, increment quantity
      const updated = [...items];
      if (updated[existingIndex].quantity < inventoryItem.quantity) {
        updated[existingIndex].quantity += 1;
      }
      setItems(updated);
    } else {
      setItems([
        ...items,
        {
          id: Math.random().toString(36).substr(2, 9),
          inventoryItemId: inventoryItem.id,
          phaseId: "",
          productName: inventoryItem.productName,
          quantity: 1,
          unit: inventoryItem.unit,
          unitPrice: inventoryItem.unitPrice,
          maxQuantity: inventoryItem.quantity,
        },
      ]);
    }
    setShowInventoryPicker(false);
  }

  function addCustomItem() {
    setItems([
      ...items,
      {
        id: Math.random().toString(36).substr(2, 9),
        inventoryItemId: null,
        phaseId: "",
        productName: "",
        quantity: 1,
        unit: "unit",
        unitPrice: 0,
        maxQuantity: 999999,
      },
    ]);
  }

  function updateItem(id: string, field: keyof SaleItem, value: string | number) {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  }

  function removeItem(id: string) {
    setItems(items.filter((item) => item.id !== id));
  }

  function selectCrmContact(contact: CRMContact) {
    setCustomerData({
      ...customerData,
      customerName: contact.name,
      customerEmail: contact.email || "",
      customerPhone: contact.phone || "",
      crmCustomerId: contact.id,
    });
    setCrmContacts([]);
  }

  const subtotal = items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
  const tax = parseFloat(saleData.tax) || 0;
  const discount = parseFloat(saleData.discount) || 0;
  const total = subtotal + tax - discount;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (items.length === 0) {
      alert("Please add at least one item");
      return;
    }

    for (const item of items) {
      if (!item.productName || item.quantity <= 0 || item.unitPrice < 0) {
        alert("Please fill in all item details");
        return;
      }
    }

    setSubmitting(true);
    try {
      const payload = {
        customerName: customerData.customerName || null,
        customerEmail: customerData.customerEmail || null,
        customerPhone: customerData.customerPhone || null,
        crmCustomerId: customerData.crmCustomerId || null,
        items: items.map((item) => ({
          inventoryItemId: item.inventoryItemId,
          phaseId: item.phaseId || null,
          productName: item.productName,
          quantity: item.quantity,
          unit: item.unit,
          unitPrice: item.unitPrice,
        })),
        tax,
        discount,
        paymentMethod: saleData.paymentMethod,
        notes: saleData.notes || null,
      };

      const res = await fetch("/api/sales", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        router.push("/sales");
      } else {
        const error = await res.json();
        alert(error.error || "Failed to create sale");
      }
    } catch (error) {
      console.error("Failed to create sale:", error);
      alert("Failed to create sale");
    } finally {
      setSubmitting(false);
    }
  }

  const filteredInventory = inventory.filter(
    (item) =>
      item.productName.toLowerCase().includes(searchQuery.toLowerCase()) &&
      item.quantity > 0
  );

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/sales">
          <button className="p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-lg">
            <ArrowLeft className="w-5 h-5" />
          </button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
            New Sale
          </h1>
          <p className="text-white/50 mt-1">Create a new sales transaction</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Items */}
          <div className="glass-card p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-white">Items</h2>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setShowInventoryPicker(true)}
                  className="px-3 py-1.5 bg-accent/20 text-accent text-sm rounded-lg hover:bg-accent/30 flex items-center gap-1"
                >
                  <Package className="w-4 h-4" />
                  From Inventory
                </button>
                <button
                  type="button"
                  onClick={addCustomItem}
                  className="px-3 py-1.5 bg-white/10 text-white text-sm rounded-lg hover:bg-white/20 flex items-center gap-1"
                >
                  <Plus className="w-4 h-4" />
                  Custom Item
                </button>
              </div>
            </div>

            {items.length === 0 ? (
              <div className="text-center py-8 border border-dashed border-white/20 rounded-lg">
                <ShoppingCart className="w-10 h-10 text-white/20 mx-auto mb-2" />
                <p className="text-white/50">No items added yet</p>
              </div>
            ) : (
              <div className="space-y-3">
                {items.map((item, index) => (
                  <div key={item.id} className="p-4 bg-white/5 rounded-lg">
                    <div className="flex items-start gap-4">
                      <div className="text-white/50 font-medium">{index + 1}</div>
                      <div className="flex-1 grid grid-cols-2 md:grid-cols-5 gap-3">
                        <div className="col-span-2 md:col-span-1">
                          <label className="block text-xs text-white/50 mb-1">Product</label>
                          <input
                            type="text"
                            value={item.productName}
                            onChange={(e) => updateItem(item.id, "productName", e.target.value)}
                            placeholder="Product name"
                            className="w-full px-2 py-1.5 bg-white/5 border border-white/10 rounded text-white text-sm"
                            disabled={!!item.inventoryItemId}
                            required
                          />
                        </div>
                        <div className="col-span-2 md:col-span-1">
                          <label className="block text-xs text-white/50 mb-1">Business Unit</label>
                          <select
                            value={item.phaseId}
                            onChange={(e) => updateItem(item.id, "phaseId", e.target.value)}
                            className="w-full px-2 py-1.5 bg-white/5 border border-white/10 rounded text-white text-sm"
                          >
                            <option value="">Auto (from product name)</option>
                            {BUSINESS_PHASES.map((phase) => (
                              <option key={phase.id} value={phase.id} className="bg-neutral-900">
                                {phase.title}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs text-white/50 mb-1">Quantity</label>
                          <input
                            type="number"
                            value={item.quantity}
                            onChange={(e) => updateItem(item.id, "quantity", parseFloat(e.target.value) || 0)}
                            className="w-full px-2 py-1.5 bg-white/5 border border-white/10 rounded text-white text-sm"
                            min="0.01"
                            max={item.maxQuantity}
                            step="0.01"
                            required
                          />
                          {item.inventoryItemId && (
                            <div className="text-xs text-white/40 mt-0.5">Max: {item.maxQuantity}</div>
                          )}
                        </div>
                        <div>
                          <label className="block text-xs text-white/50 mb-1">Price</label>
                          <input
                            type="number"
                            value={item.unitPrice}
                            onChange={(e) => updateItem(item.id, "unitPrice", parseFloat(e.target.value) || 0)}
                            className="w-full px-2 py-1.5 bg-white/5 border border-white/10 rounded text-white text-sm"
                            min="0"
                            step="0.01"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-white/50 mb-1">Total</label>
                          <div className="px-2 py-1.5 text-accent font-medium">
                            ${(item.quantity * item.unitPrice).toFixed(2)}
                          </div>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="p-1.5 text-white/50 hover:text-red-400 hover:bg-red-500/10 rounded"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Customer */}
          <div className="glass-card p-6">
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <User className="w-5 h-5" />
              Customer (Optional)
            </h2>
            <div className="space-y-4">
              <div className="relative">
                <label className="block text-sm text-white/70 mb-1">Name</label>
                <input
                  type="text"
                  value={customerData.customerName}
                  onChange={(e) => {
                    setCustomerData({ ...customerData, customerName: e.target.value, crmCustomerId: "" });
                    searchCrmContacts(e.target.value);
                  }}
                  placeholder="Customer name"
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white"
                />
                {crmContacts.length > 0 && (
                  <div className="absolute z-10 top-full left-0 right-0 mt-1 bg-primary border border-white/10 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                    {crmContacts.map((contact) => (
                      <button
                        key={contact.id}
                        type="button"
                        onClick={() => selectCrmContact(contact)}
                        className="w-full px-3 py-2 text-left hover:bg-white/10 flex items-center gap-2"
                      >
                        <User className="w-4 h-4 text-white/50" />
                        <div>
                          <div className="text-white text-sm">{contact.name}</div>
                          {contact.email && (
                            <div className="text-white/50 text-xs">{contact.email}</div>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-white/70 mb-1">Email</label>
                  <input
                    type="email"
                    value={customerData.customerEmail}
                    onChange={(e) => setCustomerData({ ...customerData, customerEmail: e.target.value })}
                    placeholder="customer@example.com"
                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/70 mb-1">Phone</label>
                  <input
                    type="tel"
                    value={customerData.customerPhone}
                    onChange={(e) => setCustomerData({ ...customerData, customerPhone: e.target.value })}
                    placeholder="+1 234 567 8900"
                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="glass-card p-6">
            <label className="block text-sm text-white/70 mb-1">Notes</label>
            <textarea
              value={saleData.notes}
              onChange={(e) => setSaleData({ ...saleData, notes: e.target.value })}
              placeholder="Optional notes..."
              className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white resize-none"
              rows={2}
            />
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Summary */}
          <div className="glass-card p-6 sticky top-6">
            <h2 className="text-lg font-semibold text-white mb-4">Order Summary</h2>
            <div className="space-y-3 mb-4">
              <div className="flex justify-between text-white/70">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white/70 w-20">Tax</span>
                <input
                  type="number"
                  value={saleData.tax}
                  onChange={(e) => setSaleData({ ...saleData, tax: e.target.value })}
                  placeholder="0.00"
                  className="flex-1 px-2 py-1 bg-white/5 border border-white/10 rounded text-white text-right text-sm"
                  min="0"
                  step="0.01"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white/70 w-20">Discount</span>
                <input
                  type="number"
                  value={saleData.discount}
                  onChange={(e) => setSaleData({ ...saleData, discount: e.target.value })}
                  placeholder="0.00"
                  className="flex-1 px-2 py-1 bg-white/5 border border-white/10 rounded text-white text-right text-sm"
                  min="0"
                  step="0.01"
                />
              </div>
              <div className="flex justify-between text-xl font-bold pt-3 border-t border-white/10">
                <span className="text-white">Total</span>
                <span className="text-accent">${total.toFixed(2)}</span>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm text-white/70 mb-1">Payment Method</label>
              <select
                value={saleData.paymentMethod}
                onChange={(e) => setSaleData({ ...saleData, paymentMethod: e.target.value })}
                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white"
              >
                <option value="cash">Cash</option>
                <option value="card">Card</option>
                <option value="invoice">Invoice</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={submitting || items.length === 0}
              className="w-full py-3 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {submitting ? (
                "Processing..."
              ) : (
                <>
                  <ShoppingCart className="w-5 h-5" />
                  Complete Sale
                </>
              )}
            </button>
          </div>
        </div>
      </form>

      {/* Inventory Picker Modal */}
      {showInventoryPicker && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="glass-card p-6 w-full max-w-lg max-h-[80vh] overflow-hidden flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-white">Select from Inventory</h2>
              <button
                onClick={() => setShowInventoryPicker(false)}
                className="text-white/50 hover:text-white"
              >
                &times;
              </button>
            </div>
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full pl-10 pr-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white"
                autoFocus
              />
            </div>
            <div className="flex-1 overflow-y-auto space-y-2">
              {loading ? (
                <div className="text-center py-8 text-white/50">Loading...</div>
              ) : filteredInventory.length === 0 ? (
                <div className="text-center py-8 text-white/50">
                  {searchQuery ? "No products found" : "No inventory available"}
                </div>
              ) : (
                filteredInventory.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => addItemFromInventory(item)}
                    className="w-full p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors text-left flex items-center justify-between"
                  >
                    <div>
                      <div className="font-medium text-white">{item.productName}</div>
                      <div className="text-sm text-white/50">
                        {item.quantity} {item.unit} available
                      </div>
                    </div>
                    <div className="text-accent font-semibold">${item.unitPrice.toFixed(2)}</div>
                  </button>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
