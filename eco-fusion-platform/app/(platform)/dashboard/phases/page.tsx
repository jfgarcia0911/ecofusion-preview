import Link from "next/link";
import { BUSINESS_PHASES } from "@/lib/constants";
import { ArrowUpRight } from "lucide-react";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { monthRange, sumPhaseRevenue } from "@/lib/phase-revenue";

const currency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
});

export default async function PhasesDashboard() {
    const session = await auth();
    const { startOfMonth, endOfMonth } = monthRange();

    // One query for the month's sale items; every card's total is derived from
    // it rather than issuing a request per business unit.
    const items = session?.user?.id
        ? await prisma.saleItem.findMany({
              where: {
                  sale: {
                      userId: session.user.id,
                      status: "completed",
                      saleDate: { gte: startOfMonth, lte: endOfMonth },
                  },
              },
              select: { productName: true, total: true },
          })
        : [];

    const revenueByPhase = new Map(
        BUSINESS_PHASES.map((phase) => [phase.id, sumPhaseRevenue(items, phase.id)])
    );

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                    Business Units (Silos)
                </h1>
                <p className="text-white/50 mt-1">Select a phase to manage revenue, tasks, and operations.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {BUSINESS_PHASES.map((phase) => (
                    <Link
                        key={phase.id}
                        href={`/dashboard/phases/${phase.id}`}
                        className="group relative glass-card p-6 rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300 border border-white/5 hover:border-white/20"
                    >
                        <div className={`absolute top-0 right-0 p-20 rounded-full bg-gradient-to-br ${phase.color} opacity-5 blur-[60px] group-hover:opacity-10 transition-opacity`} />

                        <div className="relative z-10">
                            <div className={`p-3 rounded-xl bg-white/5 w-fit mb-4 ${phase.accent}`}>
                                <phase.icon size={24} />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                                {phase.title}
                            </h3>
                            <p className="text-sm text-white/50 mb-6">
                                {phase.description}
                            </p>

                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                                <div className="flex flex-col">
                                    <span className="text-[10px] uppercase tracking-wider text-white/30">Revenue MTD</span>
                                    <span className="text-lg font-bold text-white">
                                        {currency.format(revenueByPhase.get(phase.id) ?? 0)}
                                    </span>
                                </div>
                                <ArrowUpRight className="text-white/30 group-hover:text-white transition-colors" size={20} />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
