import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#05140e] text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] bg-cover opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] pointer-events-none" />

      <div className="z-10 text-center space-y-6 max-w-2xl px-6">
        <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium tracking-widest uppercase mb-4 text-accent animate-pulse">
          Internal System v1.0
        </div>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">
          EcoFusion<span className="text-accent">.</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/50 font-light">
          Advanced Aquaponics Management & Intelligence Platform
        </p>

        <div className="pt-10">
          <Link href="/dashboard/executive" className="group inline-flex items-center gap-3 px-8 py-4 bg-accent text-primary font-bold rounded-full text-lg hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(74,222,128,0.3)] hover:shadow-[0_0_40px_rgba(74,222,128,0.5)]">
            Enter Platform
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      <div className="absolute bottom-10 text-white/20 text-xs text-center w-full">
        &copy; 2025 EcoFusion Enterprise. Authorized Personnel Only.
      </div>
    </div>
  );
}
