import TaskManager from "@/components/business/TaskManager";

export default function TasksPage() {
    return (
        <div className="h-[calc(100vh-8rem)]">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                        Task Management
                    </h1>
                    <p className="text-white/50 mt-1">Track daily operations and employee duties</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
                <div className="h-full">
                    <TaskManager />
                </div>
                <div className="h-full flex flex-col gap-6">
                    <div className="glass-card p-6 flex-1 overflow-y-auto">
                        <h3 className="text-lg font-bold text-white mb-4">Recurring Schedules</h3>
                        <div className="space-y-4 text-white/70 text-sm">
                            <div className="p-3 border border-white/10 rounded-lg bg-white/5">
                                <div className="flex justify-between font-bold text-white mb-1">
                                    <span>Daily Water Testing</span>
                                    <span className="text-accent">08:00 AM</span>
                                </div>
                                <p className="text-white/50">Zone A, B, C pH and Ammonia check.</p>
                            </div>
                            <div className="p-3 border border-white/10 rounded-lg bg-white/5">
                                <div className="flex justify-between font-bold text-white mb-1">
                                    <span>Filter Backwash</span>
                                    <span className="text-accent">05:00 PM</span>
                                </div>
                                <p className="text-white/50">Biofilter system flush sequence.</p>
                            </div>
                            <div className="p-3 border border-white/10 rounded-lg bg-white/5">
                                <div className="flex justify-between font-bold text-white mb-1">
                                    <span>Fish Feeding - Morning</span>
                                    <span className="text-accent">09:00 AM</span>
                                </div>
                                <p className="text-white/50">Automated feeder check and manual supplement.</p>
                            </div>
                        </div>
                    </div>

                    <div className="glass-card p-6 flex-1">
                        <h3 className="text-lg font-bold text-white mb-4">Team Performance</h3>
                        <div className="flex items-center gap-6">
                            <div className="w-24 h-24 rounded-full border-8 border-accent border-r-transparent flex items-center justify-center text-white font-bold text-2xl rotate-45">
                                <div className="-rotate-45">85%</div>
                            </div>
                            <div>
                                <p className="font-bold text-white text-lg">Weekly Completion Rate</p>
                                <p className="text-sm text-green-400 font-medium">+5% vs last week</p>
                                <p className="text-sm text-white/50 mt-1">Team is performing efficiently.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
