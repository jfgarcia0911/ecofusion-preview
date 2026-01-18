"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Fish, Leaf, Package, TrendingUp, Calendar, Scale } from "lucide-react";

interface InventoryStats {
  fishStocks: number;
  plantCrops: number;
  readyToHarvest: number;
  totalHarvests: number;
  salesInventoryItems: number;
  salesInventoryValue: number;
}

export default function InventoryDashboard() {
  const [stats, setStats] = useState<InventoryStats>({
    fishStocks: 0,
    plantCrops: 0,
    readyToHarvest: 0,
    totalHarvests: 0,
    salesInventoryItems: 0,
    salesInventoryValue: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const [fishRes, plantsRes, harvestsRes, salesStockRes] = await Promise.all([
          fetch("/api/inventory/fish"),
          fetch("/api/inventory/plants"),
          fetch("/api/inventory/harvests"),
          fetch("/api/inventory/sales-stock?status=available"),
        ]);

        const [fish, plants, harvests, salesStock] = await Promise.all([
          fishRes.json(),
          plantsRes.json(),
          harvestsRes.json(),
          salesStockRes.json(),
        ]);

        const fishArray = Array.isArray(fish) ? fish : [];
        const plantsArray = Array.isArray(plants) ? plants : [];
        const harvestsArray = Array.isArray(harvests) ? harvests : [];
        const salesStockArray = Array.isArray(salesStock) ? salesStock : [];

        const readyFish = fishArray.filter((f: { status: string }) => f.status === "ready").length;
        const readyPlants = plantsArray.filter((p: { status: string }) => p.status === "ready").length;
        const salesValue = salesStockArray.reduce(
          (sum: number, item: { quantity: number; unitPrice: number }) => sum + item.quantity * item.unitPrice,
          0
        );

        setStats({
          fishStocks: fishArray.length,
          plantCrops: plantsArray.length,
          readyToHarvest: readyFish + readyPlants,
          totalHarvests: harvestsArray.length,
          salesInventoryItems: salesStockArray.length,
          salesInventoryValue: salesValue,
        });
      } catch (error) {
        console.error("Failed to fetch inventory stats:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, []);

  const cards = [
    {
      title: "Fish Stock",
      value: stats.fishStocks,
      subtitle: "Active batches",
      icon: Fish,
      href: "/inventory/fish",
      color: "text-blue-400",
    },
    {
      title: "Plant Crops",
      value: stats.plantCrops,
      subtitle: "Growing crops",
      icon: Leaf,
      href: "/inventory/plants",
      color: "text-green-400",
    },
    {
      title: "Ready to Harvest",
      value: stats.readyToHarvest,
      subtitle: "Fish & plants ready",
      icon: Calendar,
      href: "/inventory/harvests",
      color: "text-yellow-400",
    },
    {
      title: "Total Harvests",
      value: stats.totalHarvests,
      subtitle: "All time",
      icon: Scale,
      href: "/inventory/harvests",
      color: "text-purple-400",
    },
    {
      title: "Sales Inventory",
      value: stats.salesInventoryItems,
      subtitle: "Items available",
      icon: Package,
      href: "/inventory/sales-stock",
      color: "text-cyan-400",
    },
    {
      title: "Inventory Value",
      value: `$${stats.salesInventoryValue.toFixed(2)}`,
      subtitle: "Ready for sale",
      icon: TrendingUp,
      href: "/inventory/sales-stock",
      color: "text-accent",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
            Inventory Management
          </h1>
          <p className="text-white/50 mt-1">Track fish, plants, harvests, and sales inventory</p>
        </div>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="glass-card p-6 animate-pulse">
              <div className="h-4 bg-white/10 rounded w-1/2 mb-4"></div>
              <div className="h-8 bg-white/10 rounded w-1/3"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <Link key={card.title} href={card.href}>
              <div className="glass-card p-6 hover:border-accent/30 transition-all cursor-pointer group">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-white/70 text-sm font-medium">{card.title}</span>
                  <card.icon className={`w-5 h-5 ${card.color} group-hover:scale-110 transition-transform`} />
                </div>
                <div className="text-3xl font-bold text-white mb-1">{card.value}</div>
                <div className="text-white/50 text-sm">{card.subtitle}</div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Quick Actions */}
      <div className="glass-card p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/inventory/fish">
            <button className="w-full px-4 py-3 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors flex items-center justify-center gap-2">
              <Fish className="w-4 h-4" />
              Add Fish Stock
            </button>
          </Link>
          <Link href="/inventory/plants">
            <button className="w-full px-4 py-3 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30 transition-colors flex items-center justify-center gap-2">
              <Leaf className="w-4 h-4" />
              Add Plant Crop
            </button>
          </Link>
          <Link href="/inventory/harvests">
            <button className="w-full px-4 py-3 bg-yellow-500/20 text-yellow-400 rounded-lg hover:bg-yellow-500/30 transition-colors flex items-center justify-center gap-2">
              <Scale className="w-4 h-4" />
              Record Harvest
            </button>
          </Link>
          <Link href="/sales/new">
            <button className="w-full px-4 py-3 bg-accent/20 text-accent rounded-lg hover:bg-accent/30 transition-colors flex items-center justify-center gap-2">
              <Package className="w-4 h-4" />
              New Sale
            </button>
          </Link>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="glass-card p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Inventory Sections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link href="/inventory/fish" className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
            <div className="flex items-center gap-3">
              <Fish className="w-6 h-6 text-blue-400" />
              <div>
                <div className="font-medium text-white">Fish Inventory</div>
                <div className="text-sm text-white/50">Manage fish stocks and growth logs</div>
              </div>
            </div>
          </Link>
          <Link href="/inventory/plants" className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
            <div className="flex items-center gap-3">
              <Leaf className="w-6 h-6 text-green-400" />
              <div>
                <div className="font-medium text-white">Plant Crops</div>
                <div className="text-sm text-white/50">Track plants from seedling to harvest</div>
              </div>
            </div>
          </Link>
          <Link href="/inventory/parameters" className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
            <div className="flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-purple-400" />
              <div>
                <div className="font-medium text-white">Growth Parameters</div>
                <div className="text-sm text-white/50">Define species growth templates</div>
              </div>
            </div>
          </Link>
          <Link href="/inventory/harvests" className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
            <div className="flex items-center gap-3">
              <Scale className="w-6 h-6 text-yellow-400" />
              <div>
                <div className="font-medium text-white">Harvest Log</div>
                <div className="text-sm text-white/50">Record and track all harvests</div>
              </div>
            </div>
          </Link>
          <Link href="/inventory/sales-stock" className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
            <div className="flex items-center gap-3">
              <Package className="w-6 h-6 text-cyan-400" />
              <div>
                <div className="font-medium text-white">Sales Inventory</div>
                <div className="text-sm text-white/50">Items ready for sale</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
