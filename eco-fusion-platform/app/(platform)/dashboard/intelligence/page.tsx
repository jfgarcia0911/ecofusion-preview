"use client";
import { useState } from "react";
import { Brain, Sparkles, Zap, Sprout, FileText, Download, Calendar, TrendingUp, AlertTriangle, CheckCircle, Clock, Filter } from "lucide-react";

// Sample intelligence findings data
const INTELLIGENCE_FINDINGS = [
    {
        id: 1,
        type: "optimization",
        title: "Water Quality Optimization",
        description: "pH fluctuations in Zone B detected. Buffer solution dosing increase recommended.",
        recommendation: "Increase buffer solution dosing by 5%",
        confidence: 94,
        impact: "high",
        status: "pending",
        zone: "Zone B",
        timestamp: "2025-12-25T14:30:00",
        category: "Water Quality"
    },
    {
        id: 2,
        type: "prediction",
        title: "Harvest Prediction Update",
        description: "Lettuce crop maturing faster than scheduled due to optimized lighting.",
        recommendation: "Update harvest schedule - 1.5 days earlier",
        confidence: 88,
        impact: "medium",
        status: "pending",
        zone: "Zone A",
        timestamp: "2025-12-25T13:15:00",
        category: "Crop Management"
    },
    {
        id: 3,
        type: "alert",
        title: "Humidity Trend Warning",
        description: "Humidity levels trending upward in Zone A. May affect plant transpiration.",
        recommendation: "Increase ventilation by 10% during peak hours",
        confidence: 82,
        impact: "medium",
        status: "resolved",
        zone: "Zone A",
        timestamp: "2025-12-25T10:45:00",
        category: "Environmental"
    },
    {
        id: 4,
        type: "optimization",
        title: "Energy Efficiency Opportunity",
        description: "LED lighting schedule can be optimized based on plant growth stage.",
        recommendation: "Reduce lighting by 15% during vegetative phase",
        confidence: 91,
        impact: "low",
        status: "applied",
        zone: "Zone C",
        timestamp: "2025-12-24T16:20:00",
        category: "Energy"
    },
    {
        id: 5,
        type: "prediction",
        title: "Nutrient Depletion Forecast",
        description: "Nitrogen levels projected to drop below optimal in 3 days.",
        recommendation: "Schedule nutrient top-up for December 27",
        confidence: 87,
        impact: "high",
        status: "pending",
        zone: "Zone B",
        timestamp: "2025-12-24T09:00:00",
        category: "Nutrients"
    }
];

export default function IntelligencePage() {
    const [activeTab, setActiveTab] = useState<"recommendations" | "reports">("recommendations");
    const [filterStatus, setFilterStatus] = useState<string>("all");
    const [showExportMenu, setShowExportMenu] = useState(false);

    const filteredFindings = INTELLIGENCE_FINDINGS.filter(f =>
        filterStatus === "all" || f.status === filterStatus
    );

    const exportToCSV = () => {
        const headers = ["ID", "Type", "Title", "Description", "Recommendation", "Confidence", "Impact", "Status", "Zone", "Category", "Timestamp"];
        const rows = filteredFindings.map(f => [
            f.id,
            f.type,
            f.title,
            f.description,
            f.recommendation,
            `${f.confidence}%`,
            f.impact,
            f.status,
            f.zone,
            f.category,
            new Date(f.timestamp).toLocaleString()
        ]);

        const csvContent = [headers, ...rows].map(row => row.map(cell => `"${cell}"`).join(",")).join("\n");
        const blob = new Blob([csvContent], { type: "text/csv" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `intelligence-report-${new Date().toISOString().split("T")[0]}.csv`;
        a.click();
        URL.revokeObjectURL(url);
        setShowExportMenu(false);
    };

    const exportToPDF = () => {
        // Create a printable report
        const printWindow = window.open("", "_blank");
        if (!printWindow) return;

        const html = `
            <!DOCTYPE html>
            <html>
            <head>
                <title>EcoFusion Intelligence Report</title>
                <style>
                    body { font-family: Arial, sans-serif; padding: 40px; color: #333; }
                    h1 { color: #10b981; border-bottom: 2px solid #10b981; padding-bottom: 10px; }
                    h2 { color: #6366f1; margin-top: 30px; }
                    .meta { color: #666; font-size: 14px; margin-bottom: 30px; }
                    .finding { border: 1px solid #ddd; border-radius: 8px; padding: 16px; margin-bottom: 16px; }
                    .finding-header { display: flex; justify-content: space-between; margin-bottom: 8px; }
                    .title { font-weight: bold; font-size: 16px; }
                    .confidence { background: #10b981; color: white; padding: 2px 8px; border-radius: 4px; font-size: 12px; }
                    .description { color: #666; margin: 8px 0; }
                    .recommendation { background: #f0fdf4; padding: 8px; border-radius: 4px; margin-top: 8px; }
                    .recommendation strong { color: #10b981; }
                    .meta-row { display: flex; gap: 20px; font-size: 12px; color: #888; margin-top: 8px; }
                    .status-pending { color: #f59e0b; }
                    .status-applied { color: #10b981; }
                    .status-resolved { color: #6366f1; }
                    .summary { background: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 30px; }
                    .summary-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; text-align: center; }
                    .summary-item { }
                    .summary-value { font-size: 24px; font-weight: bold; color: #10b981; }
                    .summary-label { font-size: 12px; color: #666; }
                </style>
            </head>
            <body>
                <h1>🧠 EcoFusion Intelligence Report</h1>
                <div class="meta">Generated: ${new Date().toLocaleString()} | Filter: ${filterStatus === "all" ? "All Findings" : filterStatus}</div>

                <div class="summary">
                    <h2 style="margin-top: 0;">Summary</h2>
                    <div class="summary-grid">
                        <div class="summary-item">
                            <div class="summary-value">${filteredFindings.length}</div>
                            <div class="summary-label">Total Findings</div>
                        </div>
                        <div class="summary-item">
                            <div class="summary-value">${filteredFindings.filter(f => f.status === "pending").length}</div>
                            <div class="summary-label">Pending</div>
                        </div>
                        <div class="summary-item">
                            <div class="summary-value">${filteredFindings.filter(f => f.impact === "high").length}</div>
                            <div class="summary-label">High Impact</div>
                        </div>
                        <div class="summary-item">
                            <div class="summary-value">${Math.round(filteredFindings.reduce((acc, f) => acc + f.confidence, 0) / filteredFindings.length)}%</div>
                            <div class="summary-label">Avg Confidence</div>
                        </div>
                    </div>
                </div>

                <h2>Findings Detail</h2>
                ${filteredFindings.map(f => `
                    <div class="finding">
                        <div class="finding-header">
                            <span class="title">${f.title}</span>
                            <span class="confidence">${f.confidence}% confidence</span>
                        </div>
                        <div class="description">${f.description}</div>
                        <div class="recommendation"><strong>Recommendation:</strong> ${f.recommendation}</div>
                        <div class="meta-row">
                            <span>Zone: ${f.zone}</span>
                            <span>Category: ${f.category}</span>
                            <span>Impact: ${f.impact}</span>
                            <span class="status-${f.status}">Status: ${f.status}</span>
                            <span>${new Date(f.timestamp).toLocaleString()}</span>
                        </div>
                    </div>
                `).join("")}
            </body>
            </html>
        `;

        printWindow.document.write(html);
        printWindow.document.close();
        printWindow.print();
        setShowExportMenu(false);
    };

    const getStatusIcon = (status: string) => {
        switch (status) {
            case "pending": return <Clock size={14} className="text-yellow-400" />;
            case "applied": return <CheckCircle size={14} className="text-green-400" />;
            case "resolved": return <CheckCircle size={14} className="text-purple-400" />;
            default: return null;
        }
    };

    const getImpactColor = (impact: string) => {
        switch (impact) {
            case "high": return "text-red-400 bg-red-400/10 border-red-400/20";
            case "medium": return "text-yellow-400 bg-yellow-400/10 border-yellow-400/20";
            case "low": return "text-green-400 bg-green-400/10 border-green-400/20";
            default: return "text-white/50 bg-white/5 border-white/10";
        }
    };

    return (
        <div className="space-y-6 h-[calc(100vh-8rem)]">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent flex items-center gap-3">
                        <Brain className="text-accent" />
                        NutriBalance AI
                    </h1>
                    <p className="text-white/50 mt-1">AI-driven ecosystem optimization and insights</p>
                </div>
                <div className="flex items-center gap-3">
                    {/* Tab Toggle */}
                    <div className="flex bg-white/5 rounded-lg p-1">
                        <button
                            onClick={() => setActiveTab("recommendations")}
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                                activeTab === "recommendations"
                                    ? "bg-accent text-primary"
                                    : "text-white/70 hover:text-white"
                            }`}
                        >
                            <Sparkles size={16} className="inline mr-2" />
                            Live
                        </button>
                        <button
                            onClick={() => setActiveTab("reports")}
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                                activeTab === "reports"
                                    ? "bg-accent text-primary"
                                    : "text-white/70 hover:text-white"
                            }`}
                        >
                            <FileText size={16} className="inline mr-2" />
                            Reports
                        </button>
                    </div>
                </div>
            </div>

            {activeTab === "recommendations" ? (
                /* Original Recommendations View */
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full pb-6">
                    <div className="lg:col-span-2 space-y-6 overflow-y-auto pr-2 custom-scrollbar">
                        <div className="glass-panel p-6 rounded-2xl relative overflow-hidden border border-accent/20">
                            <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                                <Sparkles size={120} className="text-accent" />
                            </div>
                            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <Sparkles size={20} className="text-accent" />
                                Active Recommendations
                            </h2>
                            <div className="space-y-4">
                                <div className="p-4 bg-accent/5 border border-accent/20 rounded-xl hover:bg-accent/10 transition-colors">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="font-bold text-accent flex items-center gap-2">
                                            <Zap size={16} /> Water Quality Optimization
                                        </span>
                                        <span className="text-xs text-accent bg-accent/10 border border-accent/20 px-2 py-1 rounded">Confidence: 94%</span>
                                    </div>
                                    <p className="text-white/80 text-sm">Based on recent pH fluctuations in Zone B, increasing <strong>buffer solution dosing by 5%</strong> will stabilize overnight alkalinity drops.</p>
                                    <div className="mt-4 flex gap-3">
                                        <button className="px-4 py-2 bg-accent text-primary font-bold text-xs uppercase tracking-wide rounded-lg hover:bg-accent/90 cursor-pointer">Apply Automatic Fix</button>
                                        <button className="px-4 py-2 bg-white/5 text-white font-bold text-xs uppercase tracking-wide rounded-lg hover:bg-white/10 cursor-pointer">Simulate Impact</button>
                                    </div>
                                </div>
                                <div className="p-4 bg-secondary/5 border border-secondary/20 rounded-xl hover:bg-secondary/10 transition-colors">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="font-bold text-secondary flex items-center gap-2">
                                            <Sprout size={16} /> Harvest Prediction
                                        </span>
                                        <span className="text-xs text-secondary bg-secondary/10 border border-secondary/20 px-2 py-1 rounded">Confidence: 88%</span>
                                    </div>
                                    <p className="text-white/80 text-sm">Lettuce crop in Zone A is maturing <strong>1.5 days faster</strong> than scheduled due to optimized lighting conditions. Update harvest schedule?</p>
                                    <div className="mt-4 flex gap-3">
                                        <button className="px-4 py-2 bg-secondary/20 text-secondary border border-secondary/30 font-bold text-xs uppercase tracking-wide rounded-lg hover:bg-secondary/30 cursor-pointer">Update Schedule</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="glass-card p-6 min-h-[250px] flex flex-col items-center justify-center border-dashed border-2 border-white/10">
                            <Brain size={48} className="text-white/10 mb-4" />
                            <p className="text-white/30 font-medium">Machine Learning Model Training...</p>
                            <p className="text-white/20 text-xs mt-2">Gathering more data points for Predictive Yield Engine</p>
                        </div>
                    </div>

                    <div className="glass-panel p-6 rounded-2xl flex flex-col h-full max-h-[calc(100vh-12rem)]">
                        <h3 className="text-lg font-bold text-white mb-4">Ask EcoFusion</h3>
                        <div className="flex-1 bg-black/20 rounded-xl p-4 mb-4 text-sm text-white/50 overflow-y-auto space-y-4">
                            <div className="flex flex-col items-start">
                                <div className="bg-accent/20 text-white rounded-2xl rounded-tl-none px-4 py-3 max-w-[90%] border border-accent/10">
                                    <p>Hello! I&apos;m monitoring all 3 zones. Everything looks stable, but humidity in Zone A is trending upwards. How can I help?</p>
                                </div>
                                <span className="text-[10px] text-white/30 mt-1 ml-2">EcoFusion AI • Just now</span>
                            </div>
                        </div>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Ask about system status..."
                                className="w-full bg-white/5 border border-white/10 rounded-xl pl-4 pr-12 py-3 text-white text-sm focus:outline-none focus:border-accent/50 transition-colors placeholder:text-white/20"
                            />
                            <button className="absolute right-2 top-2 p-1.5 bg-accent/20 hover:bg-accent/40 rounded-lg text-accent transition-colors cursor-pointer">
                                <Sparkles size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                /* Reports View */
                <div className="space-y-6 h-full pb-6 overflow-y-auto">
                    {/* Report Controls */}
                    <div className="glass-panel p-4 rounded-xl flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <Filter size={16} className="text-white/50" />
                                <select
                                    value={filterStatus}
                                    onChange={(e) => setFilterStatus(e.target.value)}
                                    className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-accent/50"
                                >
                                    <option value="all">All Status</option>
                                    <option value="pending">Pending</option>
                                    <option value="applied">Applied</option>
                                    <option value="resolved">Resolved</option>
                                </select>
                            </div>
                            <span className="text-white/50 text-sm">{filteredFindings.length} findings</span>
                        </div>

                        <div className="relative">
                            <button
                                onClick={() => setShowExportMenu(!showExportMenu)}
                                className="flex items-center gap-2 px-4 py-2 bg-accent text-primary font-bold text-sm rounded-lg hover:bg-accent/90 transition-colors"
                            >
                                <Download size={16} />
                                Export Report
                            </button>
                            {showExportMenu && (
                                <div className="absolute right-0 top-12 bg-primary border border-white/10 rounded-xl shadow-xl z-10 overflow-hidden min-w-[160px]">
                                    <button
                                        onClick={exportToCSV}
                                        className="w-full px-4 py-3 text-left text-sm text-white hover:bg-white/5 flex items-center gap-2"
                                    >
                                        <FileText size={16} className="text-green-400" />
                                        Export as CSV
                                    </button>
                                    <button
                                        onClick={exportToPDF}
                                        className="w-full px-4 py-3 text-left text-sm text-white hover:bg-white/5 flex items-center gap-2 border-t border-white/5"
                                    >
                                        <FileText size={16} className="text-red-400" />
                                        Export as PDF
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Summary Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="glass-card p-4 rounded-xl">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-accent/20 rounded-lg">
                                    <TrendingUp size={20} className="text-accent" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-white">{filteredFindings.length}</p>
                                    <p className="text-xs text-white/50">Total Findings</p>
                                </div>
                            </div>
                        </div>
                        <div className="glass-card p-4 rounded-xl">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-yellow-400/20 rounded-lg">
                                    <Clock size={20} className="text-yellow-400" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-white">{filteredFindings.filter(f => f.status === "pending").length}</p>
                                    <p className="text-xs text-white/50">Pending Action</p>
                                </div>
                            </div>
                        </div>
                        <div className="glass-card p-4 rounded-xl">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-red-400/20 rounded-lg">
                                    <AlertTriangle size={20} className="text-red-400" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-white">{filteredFindings.filter(f => f.impact === "high").length}</p>
                                    <p className="text-xs text-white/50">High Impact</p>
                                </div>
                            </div>
                        </div>
                        <div className="glass-card p-4 rounded-xl">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-green-400/20 rounded-lg">
                                    <CheckCircle size={20} className="text-green-400" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-white">{filteredFindings.filter(f => f.status === "applied" || f.status === "resolved").length}</p>
                                    <p className="text-xs text-white/50">Resolved</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Findings Table */}
                    <div className="glass-panel rounded-xl overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-white/10 bg-white/5">
                                        <th className="text-left p-4 text-xs font-bold text-white/50 uppercase tracking-wider">Finding</th>
                                        <th className="text-left p-4 text-xs font-bold text-white/50 uppercase tracking-wider">Zone</th>
                                        <th className="text-left p-4 text-xs font-bold text-white/50 uppercase tracking-wider">Category</th>
                                        <th className="text-left p-4 text-xs font-bold text-white/50 uppercase tracking-wider">Confidence</th>
                                        <th className="text-left p-4 text-xs font-bold text-white/50 uppercase tracking-wider">Impact</th>
                                        <th className="text-left p-4 text-xs font-bold text-white/50 uppercase tracking-wider">Status</th>
                                        <th className="text-left p-4 text-xs font-bold text-white/50 uppercase tracking-wider">Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredFindings.map((finding) => (
                                        <tr key={finding.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                            <td className="p-4">
                                                <div>
                                                    <p className="font-medium text-white">{finding.title}</p>
                                                    <p className="text-xs text-white/50 mt-1 max-w-md truncate">{finding.recommendation}</p>
                                                </div>
                                            </td>
                                            <td className="p-4 text-sm text-white/70">{finding.zone}</td>
                                            <td className="p-4 text-sm text-white/70">{finding.category}</td>
                                            <td className="p-4">
                                                <span className="text-sm font-medium text-accent">{finding.confidence}%</span>
                                            </td>
                                            <td className="p-4">
                                                <span className={`text-xs px-2 py-1 rounded border capitalize ${getImpactColor(finding.impact)}`}>
                                                    {finding.impact}
                                                </span>
                                            </td>
                                            <td className="p-4">
                                                <span className="flex items-center gap-1 text-sm capitalize">
                                                    {getStatusIcon(finding.status)}
                                                    <span className="text-white/70">{finding.status}</span>
                                                </span>
                                            </td>
                                            <td className="p-4 text-sm text-white/50">
                                                <div className="flex items-center gap-1">
                                                    <Calendar size={12} />
                                                    {new Date(finding.timestamp).toLocaleDateString()}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
