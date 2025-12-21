import { ArrowUp, ArrowDown } from "lucide-react";
import clsx from "clsx";

interface KpiCardProps {
    title: string;
    value: string;
    change: string;
    trend: "up" | "down" | "neutral";
    icon?: React.ElementType;
}

export default function KpiCard({ title, value, change, trend, icon: Icon }: KpiCardProps) {
    return (
        <div className="glass-card p-6 flex flex-col justify-between hover:border-accent/30 transition-all duration-300">
            <div className="flex justify-between items-start">
                <span className="text-white/50 text-sm font-medium uppercase tracking-wider">{title}</span>
                {Icon && <div className="p-2 rounded-lg bg-white/5"><Icon size={16} className="text-accent" /></div>}
            </div>
            <div className="mt-4">
                <h3 className="text-3xl font-bold text-white">{value}</h3>
                <div className="flex items-center gap-2 mt-1">
                    <span className={clsx("text-xs font-bold px-1.5 py-0.5 rounded flex items-center gap-1",
                        trend === "up" ? "bg-green-500/20 text-green-400" :
                            trend === "down" ? "bg-red-500/20 text-red-400" : "bg-gray-500/20 text-gray-400"
                    )}>
                        {trend === "up" ? <ArrowUp size={10} /> : trend === "down" ? <ArrowDown size={10} /> : null}
                        {change}
                    </span>
                    <span className="text-xs text-white/30">vs last month</span>
                </div>
            </div>
        </div>
    );
}
