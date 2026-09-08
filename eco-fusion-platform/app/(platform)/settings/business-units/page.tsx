"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUp, ArrowDown, Layers, Plus, Trash2, Eye, EyeOff, Pencil } from "lucide-react";
import { ICON_NAMES, UNIT_PALETTES, iconFor } from "@/lib/business-units";
import Modal from "@/components/ui/Modal";
import { useToast } from "@/components/ui/Toast";
import { useConfirm } from "@/components/ui/ConfirmDialog";

interface Unit {
    id: string;
    key: string;
    title: string;
    description: string;
    icon: string;
    color: string;
    accent: string;
    keywords: string[];
    sortOrder: number;
    enabled: boolean;
}

/** A silo being written, before it is a row. */
interface Draft {
    id: string | null;
    title: string;
    description: string;
    icon: string;
    color: string;
    accent: string;
    keywords: string;
}

const BLANK: Draft = {
    id: null,
    title: "",
    description: "",
    icon: "Layers",
    color: UNIT_PALETTES[0].color,
    accent: UNIT_PALETTES[0].accent,
    keywords: "",
};

/**
 * The silos this business runs.
 *
 * Retiring is offered ahead of deleting, and deleting is refused outright once
 * a silo has revenue behind it. Sales record a silo by name rather than by a
 * link the database enforces, so a deleted silo would leave money attributed
 * to something nothing can name.
 */
export default function BusinessUnitsPage() {
    const [units, setUnits] = useState<Unit[]>([]);
    const [loading, setLoading] = useState(true);
    const [draft, setDraft] = useState<Draft | null>(null);
    const [saving, setSaving] = useState(false);
    const [busy, setBusy] = useState<string | null>(null);
    const toast = useToast();
    const confirmAction = useConfirm();

    const load = useCallback(async () => {
        try {
            const res = await fetch("/api/business-units?includeDisabled=1");
            if (!res.ok) {
                toast.error("Could not load your silos");
                return;
            }
            setUnits(await res.json());
        } finally {
            setLoading(false);
        }
    }, [toast]);

    useEffect(() => {
        load();
    }, [load]);

    async function save() {
        if (!draft?.title.trim()) return;
        setSaving(true);
        try {
            const body = {
                id: draft.id ?? undefined,
                title: draft.title.trim(),
                description: draft.description.trim(),
                icon: draft.icon,
                color: draft.color,
                accent: draft.accent,
                keywords: draft.keywords
                    .split(",")
                    .map((k) => k.trim())
                    .filter(Boolean),
            };
            const res = await fetch("/api/business-units", {
                method: draft.id ? "PATCH" : "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });
            if (!res.ok) {
                toast.error((await res.json()).error ?? "Could not save that silo");
                return;
            }
            toast.success(draft.id ? "Silo updated" : `Added ${body.title}`);
            setDraft(null);
            await load();
        } finally {
            setSaving(false);
        }
    }

    async function patch(unit: Unit, changes: Record<string, unknown>, done?: string) {
        setBusy(unit.id);
        try {
            const res = await fetch("/api/business-units", {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id: unit.id, ...changes }),
            });
            if (!res.ok) {
                toast.error((await res.json()).error ?? "Could not update that silo");
                return;
            }
            if (done) toast.success(done);
            await load();
        } finally {
            setBusy(null);
        }
    }

    /** Swaps this silo with its neighbour, so the order is a real position. */
    async function move(unit: Unit, direction: -1 | 1) {
        const ordered = [...units].sort((a, b) => a.sortOrder - b.sortOrder);
        const index = ordered.findIndex((u) => u.id === unit.id);
        const neighbour = ordered[index + direction];
        if (!neighbour) return;

        setBusy(unit.id);
        try {
            await Promise.all([
                fetch("/api/business-units", {
                    method: "PATCH",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ id: unit.id, sortOrder: neighbour.sortOrder }),
                }),
                fetch("/api/business-units", {
                    method: "PATCH",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ id: neighbour.id, sortOrder: unit.sortOrder }),
                }),
            ]);
            await load();
        } finally {
            setBusy(null);
        }
    }

    async function remove(unit: Unit) {
        const ok = await confirmAction({
            title: `Delete ${unit.title}?`,
            message:
                "Only possible while nothing refers to it. If this silo has sales or tasks behind it, retire it instead and it will stop appearing without detaching that history.",
            confirmLabel: "Delete silo",
            tone: "danger",
        });
        if (!ok) return;

        setBusy(unit.id);
        try {
            const res = await fetch(`/api/business-units?id=${unit.id}`, { method: "DELETE" });
            if (!res.ok) {
                const { error, canRetire } = await res.json();
                toast.error(error ?? "Could not delete that silo", {
                    description: canRetire ? "Use the retire button instead." : undefined,
                });
                return;
            }
            toast.success(`Deleted ${unit.title}`);
            await load();
        } finally {
            setBusy(null);
        }
    }

    const ordered = [...units].sort((a, b) => a.sortOrder - b.sortOrder);

    return (
        <div className="max-w-3xl">
            <Link
                href="/settings"
                className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white mb-6 transition-colors"
            >
                <ArrowLeft size={15} />
                Settings
            </Link>

            <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-white flex items-center gap-2">
                        <Layers size={22} className="text-accent" />
                        Business Units
                    </h1>
                    <p className="text-white/50 mt-1 text-sm max-w-xl">
                        The silos this business runs. Sales, tasks and targets are attributed to
                        these, and the keywords decide which silo a sale lands in when nobody
                        picked one.
                    </p>
                </div>
                <button
                    type="button"
                    onClick={() => setDraft({ ...BLANK })}
                    className="shrink-0 text-sm flex items-center gap-1.5 px-4 py-2 rounded-lg bg-accent text-primary font-bold hover:bg-accent/90"
                >
                    <Plus size={15} />
                    Add silo
                </button>
            </div>

            {loading ? (
                <p className="text-white/40 text-sm py-8 text-center">Loading silos...</p>
            ) : (
                <div className="space-y-2">
                    {ordered.map((unit, index) => {
                        const Icon = iconFor(unit.icon);
                        return (
                            <div
                                key={unit.id}
                                className={`flex items-center gap-4 px-4 py-3 rounded-xl border ${
                                    unit.enabled
                                        ? "border-white/10 bg-white/[0.03]"
                                        : "border-white/[0.06] bg-white/[0.01] opacity-55"
                                }`}
                            >
                                <div
                                    className={`w-9 h-9 rounded-lg bg-gradient-to-br ${unit.color} flex items-center justify-center shrink-0`}
                                >
                                    <Icon size={17} className="text-white" />
                                </div>

                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2">
                                        <span className="text-white text-sm font-medium truncate">
                                            {unit.title}
                                        </span>
                                        {!unit.enabled && (
                                            <span className="text-[11px] text-white/40 border border-white/15 rounded-full px-2 py-0.5 shrink-0">
                                                retired
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-xs text-white/40 truncate">{unit.description}</p>
                                </div>

                                <div className="flex items-center gap-1 shrink-0">
                                    <button
                                        type="button"
                                        onClick={() => move(unit, -1)}
                                        disabled={index === 0 || busy === unit.id}
                                        title="Move up"
                                        className="p-1.5 rounded-lg text-white/35 hover:text-white hover:bg-white/10 disabled:opacity-25 transition-colors"
                                    >
                                        <ArrowUp size={14} />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => move(unit, 1)}
                                        disabled={index === ordered.length - 1 || busy === unit.id}
                                        title="Move down"
                                        className="p-1.5 rounded-lg text-white/35 hover:text-white hover:bg-white/10 disabled:opacity-25 transition-colors"
                                    >
                                        <ArrowDown size={14} />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setDraft({
                                                id: unit.id,
                                                title: unit.title,
                                                description: unit.description,
                                                icon: unit.icon,
                                                color: unit.color,
                                                accent: unit.accent,
                                                keywords: unit.keywords.join(", "),
                                            })
                                        }
                                        title="Edit"
                                        className="p-1.5 rounded-lg text-white/35 hover:text-white hover:bg-white/10 transition-colors"
                                    >
                                        <Pencil size={14} />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            patch(
                                                unit,
                                                { enabled: !unit.enabled },
                                                unit.enabled
                                                    ? `${unit.title} retired`
                                                    : `${unit.title} is back`
                                            )
                                        }
                                        disabled={busy === unit.id}
                                        title={unit.enabled ? "Retire this silo" : "Bring it back"}
                                        className="p-1.5 rounded-lg text-white/35 hover:text-white hover:bg-white/10 transition-colors"
                                    >
                                        {unit.enabled ? <EyeOff size={14} /> : <Eye size={14} />}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => remove(unit)}
                                        disabled={busy === unit.id}
                                        title="Delete"
                                        className="p-1.5 rounded-lg text-white/35 hover:text-red-300 hover:bg-red-500/10 transition-colors"
                                    >
                                        <Trash2 size={14} />
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}

            <Modal
                isOpen={draft !== null}
                onClose={() => setDraft(null)}
                title={draft?.id ? "Edit silo" : "Add a silo"}
                size="md"
            >
                {draft && (
                    <div className="flex flex-col gap-5">
                        <label className="flex flex-col gap-1.5">
                            <span className="text-xs text-white/50">Name</span>
                            <input
                                value={draft.title}
                                onChange={(e) => setDraft({ ...draft, title: e.target.value })}
                                placeholder="Livestock"
                                className="px-3 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/25 text-sm"
                            />
                            {draft.id && (
                                <span className="text-[11px] text-white/30">
                                    Renaming is safe. The identifier behind it stays as it was, so
                                    existing sales keep their attribution.
                                </span>
                            )}
                        </label>

                        <label className="flex flex-col gap-1.5">
                            <span className="text-xs text-white/50">What it covers</span>
                            <input
                                value={draft.description}
                                onChange={(e) => setDraft({ ...draft, description: e.target.value })}
                                placeholder="Poultry and small ruminants"
                                className="px-3 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/25 text-sm"
                            />
                        </label>

                        <div className="flex flex-col gap-2">
                            <span className="text-xs text-white/50">Icon</span>
                            <div className="flex flex-wrap gap-1.5">
                                {ICON_NAMES.map((name) => {
                                    const Icon = iconFor(name);
                                    const on = draft.icon === name;
                                    return (
                                        <button
                                            key={name}
                                            type="button"
                                            onClick={() => setDraft({ ...draft, icon: name })}
                                            title={name}
                                            className={`w-9 h-9 rounded-lg flex items-center justify-center border transition-colors ${
                                                on
                                                    ? "border-accent bg-accent/15 text-accent"
                                                    : "border-white/10 bg-white/5 text-white/40 hover:text-white"
                                            }`}
                                        >
                                            <Icon size={16} />
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <span className="text-xs text-white/50">Colour</span>
                            <div className="flex flex-wrap gap-1.5">
                                {UNIT_PALETTES.map((palette) => {
                                    const on = draft.color === palette.color;
                                    return (
                                        <button
                                            key={palette.name}
                                            type="button"
                                            onClick={() =>
                                                setDraft({
                                                    ...draft,
                                                    color: palette.color,
                                                    accent: palette.accent,
                                                })
                                            }
                                            title={palette.name}
                                            className={`w-9 h-9 rounded-lg bg-gradient-to-br ${palette.color} border-2 transition-colors ${
                                                on ? "border-white" : "border-transparent"
                                            }`}
                                        />
                                    );
                                })}
                            </div>
                        </div>

                        <label className="flex flex-col gap-1.5">
                            <span className="text-xs text-white/50">Keywords</span>
                            <input
                                value={draft.keywords}
                                onChange={(e) => setDraft({ ...draft, keywords: e.target.value })}
                                placeholder="poultry, eggs, goat"
                                className="px-3 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/25 text-sm"
                            />
                            <span className="text-[11px] text-white/30">
                                Comma separated. A sale with no silo chosen is matched against
                                these, so keep them distinct from the other silos&apos;.
                            </span>
                        </label>

                        <div className="flex items-center gap-3 pt-1">
                            <button
                                type="button"
                                onClick={save}
                                disabled={saving || !draft.title.trim()}
                                className="px-6 py-2 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90 disabled:opacity-50"
                            >
                                {saving ? "Saving..." : draft.id ? "Save changes" : "Add silo"}
                            </button>
                            <button
                                type="button"
                                onClick={() => setDraft(null)}
                                className="px-4 py-2 text-white/60 hover:text-white rounded-lg"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
}
