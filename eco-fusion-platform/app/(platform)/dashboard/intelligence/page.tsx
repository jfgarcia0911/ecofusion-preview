import { Brain, Sparkles, Zap, Sprout } from "lucide-react";

export default function IntelligencePage() {
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
            </div>

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
        </div>
    );
}
