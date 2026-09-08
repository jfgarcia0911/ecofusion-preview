"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Modal from "@/components/ui/Modal";
import { useToast } from "@/components/ui/Toast";

/**
 * Captures a farm's setup as a template other farms can start from.
 *
 * Deliberately says what does and does not travel. The distinction matters to
 * whoever presses the button: capturing a customer's farm sounds like copying
 * their business, and the only way to make it obviously not that is to name
 * what is left behind.
 */
export default function CaptureSnapshotModal({
    farm,
    onClose,
}: {
    farm: { id: string; name: string } | null;
    onClose: () => void;
}) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [makeDefault, setMakeDefault] = useState(false);
    const [saving, setSaving] = useState(false);
    const toast = useToast();
    const router = useRouter();

    useEffect(() => {
        if (farm) {
            setName(`${farm.name} setup`);
            setDescription("");
            setMakeDefault(false);
        }
    }, [farm]);

    async function capture() {
        if (!farm || !name.trim()) return;
        setSaving(true);
        try {
            const res = await fetch("/api/admin/snapshots", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    organizationId: farm.id,
                    name: name.trim(),
                    description: description.trim(),
                    isDefault: makeDefault,
                }),
            });
            if (!res.ok) {
                toast.error((await res.json()).error ?? "Could not capture that farm");
                return;
            }
            const { contents } = await res.json();
            toast.success(`Captured "${name.trim()}"`, {
                description: `${contents.businessUnits} units, ${contents.zones} zones, ${contents.growthParameters} growing parameters, ${contents.courses} classes`,
            });
            onClose();
            router.refresh();
        } finally {
            setSaving(false);
        }
    }

    return (
        <Modal
            isOpen={farm !== null}
            onClose={onClose}
            title={farm ? `Capture ${farm.name}` : "Capture farm"}
            size="md"
        >
            <div className="flex flex-col gap-5">
                <div className="text-sm text-white/50 leading-relaxed">
                    <p>
                        Takes this farm&apos;s <strong className="text-white/80">setup</strong> as a
                        template: business units, zones and their alert thresholds, growing
                        parameters, and which EcoFusion classes it carries.
                    </p>
                    <p className="mt-2">
                        Nothing that happened on the farm is copied. No stock, sales, sensor
                        readings, training records or people.
                    </p>
                </div>

                <label className="flex flex-col gap-1.5">
                    <span className="text-xs text-white/50">Name</span>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="px-3 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/25 text-sm"
                        placeholder="Standard aquaponics setup"
                    />
                </label>

                <label className="flex flex-col gap-1.5">
                    <span className="text-xs text-white/50">
                        What it is for <span className="text-white/25">(optional)</span>
                    </span>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows={2}
                        className="px-3 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/25 text-sm resize-none"
                        placeholder="For small farms running fish and leafy greens"
                    />
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                    <input
                        type="checkbox"
                        checked={makeDefault}
                        onChange={(e) => setMakeDefault(e.target.checked)}
                        className="w-4 h-4 mt-0.5 rounded bg-white/10 border-white/20"
                    />
                    <span className="text-sm text-white/70">
                        Start every new farm from this
                        <span className="block text-xs text-white/40 mt-0.5">
                            Replaces whichever snapshot currently does. Farms already created are
                            not touched.
                        </span>
                    </span>
                </label>

                <div className="flex items-center gap-3 pt-1">
                    <button
                        type="button"
                        onClick={capture}
                        disabled={saving || !name.trim()}
                        className="px-6 py-2 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90 disabled:opacity-50"
                    >
                        {saving ? "Capturing..." : "Capture setup"}
                    </button>
                    <button
                        type="button"
                        onClick={onClose}
                        className="px-4 py-2 text-white/60 hover:text-white rounded-lg"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </Modal>
    );
}
