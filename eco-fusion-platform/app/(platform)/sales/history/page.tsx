"use client";

import { useState, useEffect } from "react";
import { resolvePhaseId } from "@/lib/phase-revenue";
import Link from "next/link";
import { ArrowLeft, Download, ShoppingCart, Calendar, Filter, ChevronDown, ChevronUp, Trash2 } from "lucide-react";
import { useConfirm } from "@/components/ui/ConfirmDialog";

interface SaleItem {
  id: string;
  productName: string;
  quantity: number;
  unit: string;
  unitPrice: number;
  total: number;
  /** The business unit this line was sold under, when one was chosen. */
  phaseId: string | null;
}

interface BusinessUnit {
  key: string;
  title: string;
  keywords: string[];
}

interface Sale {
  id: string;
  saleDate: string;
  customerName: string | null;
  customerEmail: string | null;
  customerPhone: string | null;
  subtotal: number;
  tax: number;
  discount: number;
  total: number;
  paymentMethod: string | null;
  status: string;
  notes: string | null;
  items: SaleItem[];
  crmSynced: boolean;
}

export default function SalesHistoryPage() {
  const confirmAction = useConfirm();
  const [sales, setSales] = useState<Sale[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedSale, setExpandedSale] = useState<string | null>(null);
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [units, setUnits] = useState<BusinessUnit[]>([]);
  const [filterUnit, setFilterUnit] = useState<string>("all");
  const [dateRange, setDateRange] = useState({
    startDate: "",
    endDate: "",
  });

  useEffect(() => {
    fetchSales();
  }, [filterStatus, dateRange]);

  // The silos this business runs, for the filter. Read once: they do not change
  // while somebody reads their sales.
  useEffect(() => {
    fetch("/api/business-units")
      .then((r) => (r.ok ? r.json() : []))
      .then(setUnits)
      .catch(() => setUnits([]));
  }, []);

  async function fetchSales() {
    try {
      let url = "/api/sales";
      const params = new URLSearchParams();
      if (filterStatus !== "all") params.set("status", filterStatus);
      if (dateRange.startDate) params.set("startDate", dateRange.startDate);
      if (dateRange.endDate) params.set("endDate", dateRange.endDate);
      if (params.toString()) url += `?${params.toString()}`;

      const res = await fetch(url);
      const data = await res.json();
      setSales(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Failed to fetch sales:", error);
    } finally {
      setLoading(false);
    }
  }

  async function handleExport() {
    try {
      let url = "/api/sales/export";
      const params = new URLSearchParams();
      if (dateRange.startDate) params.set("startDate", dateRange.startDate);
      if (dateRange.endDate) params.set("endDate", dateRange.endDate);
      if (params.toString()) url += `?${params.toString()}`;

      const res = await fetch(url);
      const blob = await res.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = downloadUrl;
      a.download = `sales-export-${new Date().toISOString().split("T")[0]}.csv`;
      a.click();
      window.URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error("Failed to export sales:", error);
    }
  }

  async function handleDelete(id: string) {
    if (!(await confirmAction({
      title: "Delete this sale?",
      message: "Inventory quantities from this sale will be restored. This cannot be undone.",
      confirmLabel: "Delete",
      tone: "danger",
    }))) return;
    try {
      await fetch(`/api/sales?id=${id}`, { method: "DELETE" });
      fetchSales();
    } catch (error) {
      console.error("Failed to delete sale:", error);
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500/20 text-green-400";
      case "pending":
        return "bg-yellow-500/20 text-yellow-400";
      case "cancelled":
        return "bg-red-500/20 text-red-400";
      default:
        return "bg-white/10 text-white/50";
    }
  };

  // A sale belongs to a silo if any of its lines does: one sale can carry fish
  // and lettuce, and asking for fish should still find it.
  const shown =
    filterUnit === "all"
      ? sales
      : sales.filter((sale) =>
          sale.items.some(
            (item) =>
              resolvePhaseId(item, units.map((u) => ({ key: u.key, keywords: u.keywords ?? [] }))) ===
              filterUnit
          )
        );

  const totalRevenue = shown
    .filter((s) => s.status === "completed")
    .reduce((sum, s) => sum + s.total, 0);

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/sales">
            <button className="p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-lg">
              <ArrowLeft className="w-5 h-5" />
            </button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              Sales History
            </h1>
            <p className="text-white/50 mt-1">
              {shown.length} sales • ${totalRevenue.toFixed(2)} total revenue
            </p>
          </div>
        </div>
        <button
          onClick={handleExport}
          className="px-4 py-2 bg-accent/20 text-accent font-medium rounded-lg hover:bg-accent/30 flex items-center gap-2"
        >
          <Download className="w-4 h-4" />
          Export CSV
        </button>
      </div>

      {/* Filters */}
      <div className="glass-card p-4">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-white/50" />
            <span className="text-white/70 text-sm">Filters:</span>
          </div>
          <div className="flex gap-2">
            {["all", "completed", "pending", "cancelled"].map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors capitalize ${
                  filterStatus === status
                    ? "bg-accent text-primary"
                    : "bg-white/5 text-white/70 hover:bg-white/10"
                }`}
              >
                {status}
              </button>
            ))}
          </div>

            {units.length > 0 && (
              <select
                value={filterUnit}
                onChange={(e) => setFilterUnit(e.target.value)}
                aria-label="Filter by business unit"
                className="px-3 py-1.5 rounded-lg text-sm bg-white/5 border border-white/10 text-white/80"
              >
                <option value="all" className="bg-[#0b1a14]">
                  All business units
                </option>
                {units.map((u) => (
                  <option key={u.key} value={u.key} className="bg-[#0b1a14]">
                    {u.title}
                  </option>
                ))}
              </select>
            )}
          <div className="flex items-center gap-2 ml-auto">
            <Calendar className="w-4 h-4 text-white/50" />
            <input
              type="date"
              value={dateRange.startDate}
              onChange={(e) => setDateRange({ ...dateRange, startDate: e.target.value })}
              className="px-2 py-1.5 bg-white/5 border border-white/10 rounded-lg text-white text-sm"
            />
            <span className="text-white/50">to</span>
            <input
              type="date"
              value={dateRange.endDate}
              onChange={(e) => setDateRange({ ...dateRange, endDate: e.target.value })}
              className="px-2 py-1.5 bg-white/5 border border-white/10 rounded-lg text-white text-sm"
            />
          </div>
        </div>
      </div>

      {/* Sales List */}
      {loading ? (
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="glass-card p-6 animate-pulse">
              <div className="h-6 bg-white/10 rounded w-1/3 mb-3"></div>
              <div className="h-4 bg-white/10 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      ) : shown.length === 0 ? (
        <div className="glass-card p-12 text-center">
          <ShoppingCart className="w-16 h-16 text-white/20 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">No Sales Found</h3>
          <p className="text-white/50 mb-4">
            {filterStatus !== "all" || dateRange.startDate || dateRange.endDate
              ? "Try adjusting your filters"
              : "Create your first sale to see it here"}
          </p>
          <Link href="/sales/new">
            <button className="px-4 py-2 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90">
              New Sale
            </button>
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {shown.map((sale) => (
            <div key={sale.id} className="glass-card overflow-hidden">
              <div
                className="p-6 cursor-pointer"
                onClick={() => setExpandedSale(expandedSale === sale.id ? null : sale.id)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                      <ShoppingCart className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {sale.customerName || "Walk-in Customer"}
                      </h3>
                      <div className="text-white/50 text-sm flex items-center gap-3">
                        <span>{new Date(sale.saleDate).toLocaleString()}</span>
                        <span>•</span>
                        <span>{sale.items.length} item{sale.items.length !== 1 ? "s" : ""}</span>
                        {sale.paymentMethod && (
                          <>
                            <span>•</span>
                            <span className="capitalize">{sale.paymentMethod}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(sale.status)}`}>
                      {sale.status}
                    </span>
                    {sale.crmSynced && (
                      <span className="px-2 py-1 rounded text-xs font-medium bg-blue-500/20 text-blue-400">
                        CRM
                      </span>
                    )}
                    <div className="text-xl font-bold text-accent">${sale.total.toFixed(2)}</div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(sale.id);
                      }}
                      className="p-2 text-white/50 hover:text-red-400 hover:bg-red-500/10 rounded-lg"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    {expandedSale === sale.id ? (
                      <ChevronUp className="w-5 h-5 text-white/50" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-white/50" />
                    )}
                  </div>
                </div>
              </div>

              {/* Expanded Details */}
              {expandedSale === sale.id && (
                <div className="px-6 pb-6 border-t border-white/10 mt-0 pt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Items */}
                    <div>
                      <h4 className="text-sm font-medium text-white/70 mb-3">Items</h4>
                      <div className="space-y-2">
                        {sale.items.map((item) => (
                          <div key={item.id} className="flex justify-between p-2 bg-white/5 rounded">
                            <div>
                              <span className="text-white">{item.productName}</span>
                              <span className="text-white/50 text-sm ml-2">
                                {item.quantity} {item.unit} @ ${item.unitPrice.toFixed(2)}
                              </span>
                            </div>
                            <span className="text-accent">${item.total.toFixed(2)}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Details */}
                    <div>
                      <h4 className="text-sm font-medium text-white/70 mb-3">Details</h4>
                      <div className="space-y-2 text-sm">
                        {sale.customerEmail && (
                          <div className="flex justify-between">
                            <span className="text-white/50">Email</span>
                            <span className="text-white">{sale.customerEmail}</span>
                          </div>
                        )}
                        {sale.customerPhone && (
                          <div className="flex justify-between">
                            <span className="text-white/50">Phone</span>
                            <span className="text-white">{sale.customerPhone}</span>
                          </div>
                        )}
                        <div className="flex justify-between">
                          <span className="text-white/50">Subtotal</span>
                          <span className="text-white">${sale.subtotal.toFixed(2)}</span>
                        </div>
                        {sale.tax > 0 && (
                          <div className="flex justify-between">
                            <span className="text-white/50">Tax</span>
                            <span className="text-white">${sale.tax.toFixed(2)}</span>
                          </div>
                        )}
                        {sale.discount > 0 && (
                          <div className="flex justify-between">
                            <span className="text-white/50">Discount</span>
                            <span className="text-red-400">-${sale.discount.toFixed(2)}</span>
                          </div>
                        )}
                        <div className="flex justify-between font-medium pt-2 border-t border-white/10">
                          <span className="text-white">Total</span>
                          <span className="text-accent">${sale.total.toFixed(2)}</span>
                        </div>
                      </div>
                      {sale.notes && (
                        <div className="mt-4 p-2 bg-white/5 rounded text-sm text-white/70">
                          {sale.notes}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
