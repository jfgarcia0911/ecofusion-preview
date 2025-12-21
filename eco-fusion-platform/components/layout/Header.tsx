import { Bell, Search } from "lucide-react";

export default function Header() {
    return (
        <header className="h-16 border-b border-white/10 glass-panel flex items-center justify-between px-6 z-10">
            <div className="flex items-center gap-4 w-96">
                <div className="relative w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" size={16} />
                    <input
                        type="text"
                        placeholder="Search ecosystem..."
                        className="w-full bg-black/20 border border-white/5 rounded-full pl-10 pr-4 py-1.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-accent/50 transition-all"
                    />
                </div>
            </div>
            <div className="flex items-center gap-4">
                <button className="relative p-2 rounded-full hover:bg-white/10 transition-colors">
                    <Bell size={20} className="text-white/70" />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                </button>
            </div>
        </header>
    );
}
