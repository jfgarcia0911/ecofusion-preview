"use client";

import { useEffect, useMemo, useState } from "react";
import { Layers } from "lucide-react";
import { groupRevenueByPhase, type PhaseKeywords } from "@/lib/phase-revenue";

interface Unit {
    key: string;
    title: string;
    keywords: string[];
}

export interface RevenueLine {
    productName: string;
    total: number;
    phaseId?: string | null;
}

/**
 * What each silo sold.
 *
 * One measure split across categories, so it is one hue and no legend: the
 * bars differ in length, not in meaning, and each row names itself. Seven
 * colours here would say the units are different kinds of thing when the only
 * difference is how much they took.
 *
 * Sorted by size, because the question is which silo is carrying the business
 * and a fixed order buries the answer. Unassigned sits last in grey and is
 * never dropped - revenue that matched no silo is still revenue, and hiding it
 * would make the parts disagree with the total.
 */
export default function RevenueByUnit({
    lines,
    className = "",
}: {
    lines: RevenueLine[];
    className?: string;
}) {
    const [units, setUnits] = useState<Unit[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch("/api/business-units");
                if (res.ok) setUnits(await res.json());
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    const rows = useMemo(() => {
        if (units.length === 0) return { list: [], total: 0, unassigned: 0 };

        const keywords: PhaseKeywords[] = units.map((u) => ({
            key: u.key,
            keywords: u.keywords ?? [],
        }));
        const { byPhase, unassigned } = groupRevenueByPhase(lines, keywords);

        const list = units
            .map((u) => ({ key: u.key, title: u.title, total: byPhase.get(u.key) ?? 0 }))
            .sort((a, b) => b.total - a.total);

        const total = list.reduce((sum, r) => sum + r.total, 0) + unassigned;
        return { list, total, unassigned };
    }, [lines, units]);

    const money = (n: number) =>
        n.toLocaleString(undefined, { style: "currency", currency: "USD" });

    // Bars are read against the biggest one, not against the total. Against the
    // total, seven silos of similar size are seven short stubs and the ranking
    // they exist to show is invisible.
    const widest = Math.max(...rows.list.map((r) => r.total), rows.unassigned, 1);

    if (loading) {
        return (
            <div className={`p-6 rounded-2xl bg-white/[0.03] border border-white/10 ${className}`}>
                <p className="text-white/40 text-sm py-6 text-center">Loading...</p>
            </div>
        );
    }

    if (rows.total === 0) {
        return (
            <div className={`p-6 rounded-2xl bg-white/[0.03] border border-white/10 ${className}`}>
                <h2 className="text-white font-bold flex items-center gap-2">
                    <Layers size={17} className="text-accent" />
                    Revenue by business unit
                </h2>
                <p className="text-white/40 text-sm mt-4 py-6 text-center">
                    Nothing sold yet. Once you record a sale, each line counts towards the
                    silo it came from.
                </p>
            </div>
        );
    }

    return (
        <section className={`p-6 rounded-2xl bg-white/[0.03] border border-white/10 ${className}`}>
            <div className="flex items-baseline justify-between gap-4 mb-5">
                <h2 className="text-white font-bold flex items-center gap-2">
                    <Layers size={17} className="text-accent" />
                    Revenue by business unit
                </h2>
                <span className="text-sm text-white/45 tabular-nums">{money(rows.total)} total</span>
            </div>

            {/* A table, so the figures are readable without the bars. */}
            <table className="w-full border-collapse">
                <caption className="sr-only">
                    Revenue for each business unit, largest first
                </caption>
                <thead className="sr-only">
                    <tr>
                        <th scope="col">Business unit</th>
                        <th scope="col">Share</th>
                        <th scope="col">Revenue</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.list.map((row) => {
                        const share = rows.total > 0 ? (row.total / rows.total) * 100 : 0;
                        return (
                            <tr key={row.key} className="align-middle">
                                <th
                                    scope="row"
                                    className="py-1.5 pr-4 text-left text-sm font-normal text-white/70 whitespace-nowrap w-px"
                                >
                                    {row.title}
                                </th>
                                <td className="py-1.5 w-full">
                                    <span
                                        className="block h-2 rounded-full bg-white/[0.06] overflow-hidden"
                                        title={`${row.title}: ${money(row.total)}, ${share.toFixed(1)}% of revenue`}
                                    >
                                        <span
                                            className="block h-full rounded-full bg-accent transition-[width] duration-500"
                                            style={{ width: `${(row.total / widest) * 100}%` }}
                                        />
                                    </span>
                                </td>
                                <td className="py-1.5 pl-4 text-right text-sm text-white tabular-nums whitespace-nowrap">
                                    {money(row.total)}
                                </td>
                                <td className="py-1.5 pl-3 text-right text-xs text-white/35 tabular-nums whitespace-nowrap w-px">
                                    {share.toFixed(0)}%
                                </td>
                            </tr>
                        );
                    })}

                    {rows.unassigned > 0 && (
                        <tr className="align-middle">
                            <th
                                scope="row"
                                className="py-1.5 pr-4 text-left text-sm font-normal text-white/40 whitespace-nowrap w-px"
                            >
                                Unassigned
                            </th>
                            <td className="py-1.5 w-full">
                                <span
                                    className="block h-2 rounded-full bg-white/[0.06] overflow-hidden"
                                    title={`Unassigned: ${money(rows.unassigned)}`}
                                >
                                    <span
                                        className="block h-full rounded-full bg-white/25"
                                        style={{ width: `${(rows.unassigned / widest) * 100}%` }}
                                    />
                                </span>
                            </td>
                            <td className="py-1.5 pl-4 text-right text-sm text-white/55 tabular-nums whitespace-nowrap">
                                {money(rows.unassigned)}
                            </td>
                            <td className="py-1.5 pl-3 text-right text-xs text-white/35 tabular-nums whitespace-nowrap w-px">
                                {((rows.unassigned / rows.total) * 100).toFixed(0)}%
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

            {rows.unassigned > 0 && (
                <p className="text-xs text-white/30 mt-4">
                    Unassigned lines were sold without a business unit chosen, and their
                    product name matched none. Pick a unit on the line when recording a
                    sale and it lands in the right silo.
                </p>
            )}
        </section>
    );
}
