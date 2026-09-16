"use client";

import { useState, useEffect, useCallback } from "react";
import RevenueByUnit from "@/components/sales/RevenueByUnit";
import Link from "next/link";
import { ShoppingCart, Plus, TrendingUp, DollarSign, Users, Package, Download, ChevronRight } from "lucide-react";
import { useToast } from "@/components/ui/Toast";

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

interface Sale {
  id: string;
  saleDate: string;
  customerName: string | null;
  customerEmail: string | null;
  subtotal: number;
  tax: number;
  discount: number;
  total: number;
  paymentMethod: string | null;
  status: string;
  items: SaleItem[];
  crmSynced: boolean;
}

interface SalesStats {
  totalSales: number;
  totalRevenue: number;
  avgSaleValue: number;
  todaySales: number;
  todayRevenue: number;
}

export default function SalesDashboard() {
  const toast = useToast();
  const [recentSales, setRecentSales] = useState<Sale[]>([]);
  // The list below shows ten; the breakdown is over everything, or a silo would
  // look small only because its last sale was eleven ago. It arrives already
  // summed by product and unit, which is all the breakdown reads.
  const [saleLines, setSaleLines] = useState<{ productName: string; total: number; phaseId: string | null }[]>([]);
  const [stats, setStats] = useState<SalesStats>({
    totalSales: 0,
    totalRevenue: 0,
    avgSaleValue: 0,
    todaySales: 0,
    todayRevenue: 0,
  });
  const [loading, setLoading] = useState(true);
  const [exporting, setExporting] = useState(false);

  const fetchSales = useCallback(async () => {
    try {
      // Summed in the database rather than downloading every sale.
      const res = await fetch("/api/sales/summary");
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        // An error body is not an empty sales history; say so instead of showing zeroes as fact.
        toast.error(data.error ?? "Could not load sales");
        return;
      }
      setRecentSales(Array.isArray(data.recentSales) ? data.recentSales : []);
      setSaleLines(Array.isArray(data.revenueLines) ? data.revenueLines : []);
      if (data.stats) setStats(data.stats as SalesStats);
    } catch (error) {
      console.error("Failed to fetch sales:", error);
      toast.error("Could not load sales");
    } finally {
      setLoading(false);
    }
  }, [toast]);

  useEffect(() => {
    fetchSales();
  }, [fetchSales]);

  async function handleExport() {
    if (exporting) return;
    setExporting(true);
    try {
      const res = await fetch("/api/sales/export");
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        toast.error(data.error ?? "Could not export sales");
        return;
      }
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `sales-export-${new Date().toISOString().split("T")[0]}.csv`;
      a.click();
      // Some browsers start the download after click returns, so the URL has to outlive it.
      setTimeout(() => window.URL.revokeObjectURL(url), 1000);
    } catch (error) {
      console.error("Failed to export sales:", error);
      toast.error("Could not export sales");
    } finally {
      setExporting(false);
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

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
            Sales
          </h1>
          <p className="text-white/50 mt-1">Manage sales and track revenue</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={handleExport}
            disabled={exporting}
            className="px-4 py-2 bg-white/5 text-white/70 font-medium rounded-lg hover:bg-white/10 disabled:opacity-50 flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            {exporting ? "Exporting..." : "Export"}
          </button>
          <Link
            href="/sales/new"
            className="px-4 py-2 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90 inline-flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            New Sale
          </Link>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="glass-card p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-green-400" />
            </div>
            <div>
              <div className="text-white/50 text-sm">Total Revenue</div>
              <div className="text-xl font-bold text-white">${stats.totalRevenue.toFixed(2)}</div>
            </div>
          </div>
        </div>
        <div className="glass-card p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
              <ShoppingCart className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <div className="text-white/50 text-sm">Total Sales</div>
              <div className="text-xl font-bold text-white">{stats.totalSales}</div>
            </div>
          </div>
        </div>
        <div className="glass-card p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <div className="text-white/50 text-sm">Avg Sale Value</div>
              <div className="text-xl font-bold text-white">${stats.avgSaleValue.toFixed(2)}</div>
            </div>
          </div>
        </div>
        <div className="glass-card p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
              <Package className="w-5 h-5 text-accent" />
            </div>
            <div>
              <div className="text-white/50 text-sm">Today&apos;s Sales</div>
              <div className="text-xl font-bold text-white">{stats.todaySales}</div>
            </div>
          </div>
        </div>
        <div className="glass-card p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <div className="text-white/50 text-sm">Today&apos;s Revenue</div>
              <div className="text-xl font-bold text-white">${stats.todayRevenue.toFixed(2)}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link href="/sales/new" className="glass-card p-4 hover:border-accent/30 transition-colors group">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ShoppingCart className="w-5 h-5 text-accent" />
              <span className="font-medium text-white">New Sale</span>
            </div>
            <ChevronRight className="w-5 h-5 text-white/50 group-hover:text-accent transition-colors" />
          </div>
        </Link>
        <Link href="/sales/history" className="glass-card p-4 hover:border-accent/30 transition-colors group">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <TrendingUp className="w-5 h-5 text-purple-400" />
              <span className="font-medium text-white">Sales History</span>
            </div>
            <ChevronRight className="w-5 h-5 text-white/50 group-hover:text-accent transition-colors" />
          </div>
        </Link>
        <Link href="/sales/customers" className="glass-card p-4 hover:border-accent/30 transition-colors group">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-blue-400" />
              <span className="font-medium text-white">Customers</span>
            </div>
            <ChevronRight className="w-5 h-5 text-white/50 group-hover:text-accent transition-colors" />
          </div>
        </Link>
      </div>

        {/* Which silo the money came from, above the list of individual
            sales: the shape of the business before its latest transactions. */}
        <RevenueByUnit lines={saleLines} className="mb-6" />

      {/* Recent Sales */}
      <div className="glass-card p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-white">Recent Sales</h2>
          <Link href="/sales/history" className="text-accent text-sm hover:underline">
            View All
          </Link>
        </div>

        {loading ? (
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="animate-pulse flex items-center gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg"></div>
                <div className="flex-1">
                  <div className="h-4 bg-white/10 rounded w-1/3 mb-2"></div>
                  <div className="h-3 bg-white/10 rounded w-1/4"></div>
                </div>
                <div className="h-6 bg-white/10 rounded w-20"></div>
              </div>
            ))}
          </div>
        ) : recentSales.length === 0 ? (
          <div className="text-center py-8">
            <ShoppingCart className="w-12 h-12 text-white/20 mx-auto mb-3" />
            <p className="text-white/50 mb-4">No sales recorded yet</p>
            <Link
              href="/sales/new"
              className="inline-block px-4 py-2 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90"
            >
              Create First Sale
            </Link>
          </div>
        ) : (
          <div className="space-y-3">
            {recentSales.map((sale) => (
              <div
                key={sale.id}
                className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                    <ShoppingCart className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-medium text-white">
                      {sale.customerName || "Walk-in Customer"}
                    </div>
                    <div className="text-sm text-white/50">
                      {new Date(sale.saleDate).toLocaleDateString()} •{" "}
                      {sale.items.length} item{sale.items.length !== 1 ? "s" : ""}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(sale.status)}`}>
                    {sale.status}
                  </span>
                  <div className="text-lg font-semibold text-accent">${sale.total.toFixed(2)}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
