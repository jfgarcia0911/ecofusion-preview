"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Users, Search, Plus, RefreshCw, Settings, X } from "lucide-react";

interface CRMContact {
  id: string;
  name: string;
  email: string | null;
  phone: string | null;
  company: string | null;
  tags: string[];
  createdAt: string | null;
}

interface LocalCustomer {
  customerName: string;
  customerEmail: string | null;
  customerPhone: string | null;
  totalSales: number;
  totalSpent: number;
  lastPurchase: string;
}

export default function CustomersPage() {
  const [crmContacts, setCrmContacts] = useState<CRMContact[]>([]);
  const [localCustomers, setLocalCustomers] = useState<LocalCustomer[]>([]);
  const [loading, setLoading] = useState(true);
  const [crmEnabled, setCrmEnabled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [addingContact, setAddingContact] = useState(false);

  const [newContact, setNewContact] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });

  useEffect(() => {
    checkCrmAndFetchData();
  }, []);

  async function checkCrmAndFetchData() {
    try {
      const syncRes = await fetch("/api/crm/sync");
      const syncData = await syncRes.json();
      setCrmEnabled(syncData.isConfigured);

      if (syncData.isConfigured) {
        await fetchCrmContacts();
      }
      await fetchLocalCustomers();
    } catch (error) {
      console.error("Failed to check CRM status:", error);
    } finally {
      setLoading(false);
    }
  }

  async function fetchCrmContacts(query?: string) {
    try {
      const url = query
        ? `/api/crm/customers?query=${encodeURIComponent(query)}`
        : "/api/crm/customers";
      const res = await fetch(url);
      const data = await res.json();
      setCrmContacts(data.contacts || []);
    } catch (error) {
      console.error("Failed to fetch CRM contacts:", error);
    }
  }

  async function fetchLocalCustomers() {
    try {
      const res = await fetch("/api/sales");
      const sales = await res.json();

      // Group by customer
      const customerMap = new Map<string, LocalCustomer>();
      for (const sale of Array.isArray(sales) ? sales : []) {
        if (!sale.customerName && !sale.customerEmail) continue;

        const key = sale.customerEmail || sale.customerName;
        const existing = customerMap.get(key);

        if (existing) {
          existing.totalSales += 1;
          existing.totalSpent += sale.total;
          if (new Date(sale.saleDate) > new Date(existing.lastPurchase)) {
            existing.lastPurchase = sale.saleDate;
          }
        } else {
          customerMap.set(key, {
            customerName: sale.customerName || "Unknown",
            customerEmail: sale.customerEmail,
            customerPhone: sale.customerPhone,
            totalSales: 1,
            totalSpent: sale.total,
            lastPurchase: sale.saleDate,
          });
        }
      }

      setLocalCustomers(Array.from(customerMap.values()));
    } catch (error) {
      console.error("Failed to fetch local customers:", error);
    }
  }

  async function handleSearch() {
    if (crmEnabled && searchQuery.length >= 2) {
      await fetchCrmContacts(searchQuery);
    }
  }

  async function handleAddContact(e: React.FormEvent) {
    e.preventDefault();
    if (!crmEnabled) return;

    setAddingContact(true);
    try {
      const res = await fetch("/api/crm/customers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newContact),
      });

      if (res.ok) {
        setShowAddForm(false);
        setNewContact({ name: "", email: "", phone: "", company: "" });
        await fetchCrmContacts();
      } else {
        const error = await res.json();
        alert(error.error || "Failed to add contact");
      }
    } catch (error) {
      console.error("Failed to add contact:", error);
      alert("Failed to add contact");
    } finally {
      setAddingContact(false);
    }
  }

  const filteredLocalCustomers = localCustomers.filter(
    (c) =>
      c.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (c.customerEmail && c.customerEmail.toLowerCase().includes(searchQuery.toLowerCase()))
  );

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
              Customers
            </h1>
            <p className="text-white/50 mt-1">
              {crmEnabled ? "Connected to Satistio CRM" : "Local customer data from sales"}
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          {crmEnabled && (
            <button
              onClick={() => setShowAddForm(true)}
              className="px-4 py-2 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90 flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Add to CRM
            </button>
          )}
          <Link href="/settings/integrations">
            <button className="px-4 py-2 bg-white/5 text-white/70 font-medium rounded-lg hover:bg-white/10 flex items-center gap-2">
              <Settings className="w-4 h-4" />
              Settings
            </button>
          </Link>
        </div>
      </div>

      {/* Search */}
      <div className="glass-card p-4">
        <div className="flex gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              placeholder="Search customers..."
              className="w-full pl-10 pr-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white"
            />
          </div>
          {crmEnabled && (
            <button
              onClick={handleSearch}
              className="px-4 py-2 bg-accent/20 text-accent font-medium rounded-lg hover:bg-accent/30"
            >
              Search CRM
            </button>
          )}
        </div>
      </div>

      {/* CRM Status Banner */}
      {!crmEnabled && (
        <div className="glass-card p-4 border-yellow-500/30 bg-yellow-500/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <RefreshCw className="w-5 h-5 text-yellow-400" />
              <div>
                <div className="font-medium text-white">CRM Not Connected</div>
                <div className="text-sm text-white/50">
                  Connect to Satistio to sync customers and access advanced features
                </div>
              </div>
            </div>
            <Link href="/settings/integrations">
              <button className="px-4 py-2 bg-yellow-500/20 text-yellow-400 font-medium rounded-lg hover:bg-yellow-500/30">
                Connect CRM
              </button>
            </Link>
          </div>
        </div>
      )}

      {/* Content */}
      {loading ? (
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="glass-card p-6 animate-pulse">
              <div className="h-6 bg-white/10 rounded w-1/3 mb-3"></div>
              <div className="h-4 bg-white/10 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-6">
          {/* CRM Contacts */}
          {crmEnabled && crmContacts.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-blue-400" />
                CRM Contacts
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {crmContacts.map((contact) => (
                  <div key={contact.id} className="glass-card p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-medium">
                        {contact.name.charAt(0).toUpperCase()}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-white truncate">{contact.name}</div>
                        {contact.email && (
                          <div className="text-sm text-white/50 truncate">{contact.email}</div>
                        )}
                        {contact.phone && (
                          <div className="text-sm text-white/50">{contact.phone}</div>
                        )}
                        {contact.tags.length > 0 && (
                          <div className="flex gap-1 mt-2 flex-wrap">
                            {contact.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-0.5 bg-white/10 rounded text-xs text-white/70"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Local Customers */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <Users className="w-4 h-4 text-accent" />
              Customers from Sales ({filteredLocalCustomers.length})
            </h2>
            {filteredLocalCustomers.length === 0 ? (
              <div className="glass-card p-12 text-center">
                <Users className="w-12 h-12 text-white/20 mx-auto mb-3" />
                <p className="text-white/50">
                  {searchQuery ? "No customers match your search" : "No customer data yet"}
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-3 px-4 text-white/50 font-medium">Customer</th>
                      <th className="text-left py-3 px-4 text-white/50 font-medium">Contact</th>
                      <th className="text-right py-3 px-4 text-white/50 font-medium">Orders</th>
                      <th className="text-right py-3 px-4 text-white/50 font-medium">Total Spent</th>
                      <th className="text-right py-3 px-4 text-white/50 font-medium">Last Purchase</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredLocalCustomers.map((customer, i) => (
                      <tr key={i} className="border-b border-white/5 hover:bg-white/5">
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-medium text-sm">
                              {customer.customerName.charAt(0).toUpperCase()}
                            </div>
                            <span className="font-medium text-white">{customer.customerName}</span>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-white/70">
                          {customer.customerEmail && <div>{customer.customerEmail}</div>}
                          {customer.customerPhone && (
                            <div className="text-sm">{customer.customerPhone}</div>
                          )}
                        </td>
                        <td className="py-4 px-4 text-right text-white">{customer.totalSales}</td>
                        <td className="py-4 px-4 text-right text-accent font-medium">
                          ${customer.totalSpent.toFixed(2)}
                        </td>
                        <td className="py-4 px-4 text-right text-white/50">
                          {new Date(customer.lastPurchase).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Add Contact Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="glass-card p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-white">Add CRM Contact</h2>
              <button onClick={() => setShowAddForm(false)} className="text-white/50 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleAddContact} className="space-y-4">
              <div>
                <label className="block text-sm text-white/70 mb-1">Name *</label>
                <input
                  type="text"
                  value={newContact.name}
                  onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-1">Email</label>
                <input
                  type="email"
                  value={newContact.email}
                  onChange={(e) => setNewContact({ ...newContact, email: e.target.value })}
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white"
                />
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-1">Phone</label>
                <input
                  type="tel"
                  value={newContact.phone}
                  onChange={(e) => setNewContact({ ...newContact, phone: e.target.value })}
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white"
                />
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-1">Company</label>
                <input
                  type="text"
                  value={newContact.company}
                  onChange={(e) => setNewContact({ ...newContact, company: e.target.value })}
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white"
                />
              </div>
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="flex-1 px-4 py-2 border border-white/20 rounded-lg text-white hover:bg-white/5"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={addingContact}
                  className="flex-1 px-4 py-2 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90 disabled:opacity-50"
                >
                  {addingContact ? "Adding..." : "Add Contact"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
