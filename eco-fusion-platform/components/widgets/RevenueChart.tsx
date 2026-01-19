"use client";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface RevenueDataPoint {
    name: string;
    revenue: number;
}

interface RevenueChartProps {
    data?: RevenueDataPoint[];
    loading?: boolean;
}

export default function RevenueChart({ data, loading }: RevenueChartProps) {
    const hasData = data && data.length > 0 && data.some(d => d.revenue > 0);

    return (
        <div className="glass-card p-6 h-96 w-full">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-white">Revenue Trend</h3>
                <span className="text-xs text-white/50">Last 6 Months</span>
            </div>
            <div className="h-[280px] w-full">
                {loading ? (
                    <div className="h-full flex items-center justify-center">
                        <div className="animate-pulse text-white/30">Loading revenue data...</div>
                    </div>
                ) : !hasData ? (
                    <div className="h-full flex flex-col items-center justify-center text-white/50">
                        <p className="text-sm">No sales data yet</p>
                        <p className="text-xs mt-1">Revenue will appear here once you record sales</p>
                    </div>
                ) : (
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data}>
                            <defs>
                                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#4ade80" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#4ade80" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                            <XAxis dataKey="name" stroke="rgba(255,255,255,0.3)" fontSize={12} tickLine={false} axisLine={false} dy={10} />
                            <YAxis stroke="rgba(255,255,255,0.3)" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
                            <Tooltip
                                contentStyle={{ backgroundColor: '#0B2219', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff' }}
                                itemStyle={{ color: '#4ade80' }}
                                formatter={(value) => [`$${Number(value).toLocaleString()}`, 'Revenue']}
                            />
                            <Area type="monotone" dataKey="revenue" stroke="#4ade80" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
                        </AreaChart>
                    </ResponsiveContainer>
                )}
            </div>
        </div>
    );
}
