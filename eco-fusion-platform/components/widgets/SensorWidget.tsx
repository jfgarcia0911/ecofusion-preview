import { clsx } from "clsx";

interface SensorWidgetProps {
    label: string;
    value: string;
    unit: string;
    status: "good" | "warning" | "critical";
}

export default function SensorWidget({ label, value, unit, status }: SensorWidgetProps) {
    return (
        <div className="glass-card p-4 flex flex-col items-center justify-center min-h-[140px] relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
            <div className={clsx("absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500",
                status === "good" ? "bg-accent" :
                    status === "warning" ? "bg-yellow-500" : "bg-red-500"
            )} />
            <span className="text-white/50 text-sm font-medium uppercase tracking-wider text-center">{label}</span>
            <div className="flex items-baseline gap-1 mt-3">
                <span className={clsx("text-3xl font-bold tracking-tight",
                    status === "good" ? "text-white" :
                        status === "warning" ? "text-yellow-400" : "text-red-400"
                )}>{value}</span>
                <span className="text-xs text-white/50 font-medium">{unit}</span>
            </div>
            <div className={clsx("mt-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest",
                status === "good" ? "bg-accent/10 text-accent border border-accent/20" :
                    status === "warning" ? "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20" : "bg-red-500/10 text-red-400 border border-red-500/20"
            )}>
                {status}
            </div>
        </div>
    );
}
