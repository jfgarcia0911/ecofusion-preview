'use client';

import { useEffect, useMemo, useState } from 'react';
import { ArrowLeft, BookMarked, ClipboardList, FileText, Library, ListChecks, NotebookPen, ScrollText } from 'lucide-react';
import Modal from '@/components/ui/Modal';
import LessonContent from '@/components/academy/LessonContent';

interface MaterialSummary {
    id: string;
    kind: string;
    title: string;
}

interface Material extends MaterialSummary {
    content: string;
}

/** The order a learner reaches for things, and what each kind is called. */
const KINDS: Array<{ kind: string; label: string; Icon: typeof FileText }> = [
    { kind: 'syllabus', label: 'Syllabus', Icon: ScrollText },
    { kind: 'handout', label: 'Handouts', Icon: FileText },
    { kind: 'cheatsheet', label: 'Cheatsheets', Icon: ListChecks },
    { kind: 'reference', label: 'Reference', Icon: BookMarked },
    { kind: 'activity', label: 'Activities', Icon: NotebookPen },
    { kind: 'assignment', label: 'Assignments', Icon: ClipboardList },
];

/**
 * What a course hands its learners besides the lessons.
 *
 * Kept off the lesson path deliberately. The path is what has to be finished;
 * these are what to keep open beside it - the glossary while reading, the
 * handout during the activity, the brief while doing the assignment. Opening
 * one never counts towards completing the course, and nothing here has to be
 * clicked through to earn a certificate.
 *
 * Assignment briefs are here to be read. There is no way to hand one in yet,
 * so the brief says what to do and the platform does not pretend to collect it.
 */
export default function CourseResources({ courseId }: { courseId: string }) {
    const [materials, setMaterials] = useState<MaterialSummary[]>([]);
    const [open, setOpen] = useState(false);
    const [reading, setReading] = useState<Material | null>(null);
    const [loadingId, setLoadingId] = useState<string | null>(null);

    useEffect(() => {
        let cancelled = false;
        fetch(`/api/training/courses/${courseId}/materials`)
            .then((res) => (res.ok ? res.json() : { materials: [] }))
            .then((data) => {
                if (!cancelled) setMaterials(data.materials ?? []);
            })
            .catch(() => {});
        return () => {
            cancelled = true;
        };
    }, [courseId]);

    const groups = useMemo(
        () =>
            KINDS.map((k) => ({ ...k, items: materials.filter((m) => m.kind === k.kind) })).filter(
                (g) => g.items.length > 0
            ),
        [materials]
    );

    async function read(material: MaterialSummary) {
        setLoadingId(material.id);
        try {
            const res = await fetch(
                `/api/training/courses/${courseId}/materials?id=${encodeURIComponent(material.id)}`
            );
            if (res.ok) setReading(await res.json());
        } finally {
            setLoadingId(null);
        }
    }

    // A course with nothing besides its lessons shows nothing, rather than an
    // empty panel promising something.
    if (materials.length === 0) return null;

    return (
        <>
            <button
                type="button"
                onClick={() => setOpen(true)}
                className="w-full mt-3 flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10 bg-white/5 text-xs text-white/70 hover:bg-white/10 hover:text-white transition-colors"
            >
                <Library size={14} className="text-accent" />
                <span className="flex-1 text-left">Course resources</span>
                <span className="text-white/40">{materials.length}</span>
            </button>

            <Modal
                isOpen={open}
                onClose={() => {
                    setOpen(false);
                    setReading(null);
                }}
                title={reading ? reading.title : 'Course resources'}
                size="xl"
            >
                {reading ? (
                    <div className="flex flex-col gap-4">
                        <button
                            type="button"
                            onClick={() => setReading(null)}
                            className="self-start flex items-center gap-1.5 text-xs text-white/50 hover:text-white transition-colors"
                        >
                            <ArrowLeft size={12} /> All resources
                        </button>
                        <div className="max-h-[65vh] overflow-y-auto custom-scrollbar pr-2">
                            <LessonContent content={reading.content} />
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col gap-5 max-h-[65vh] overflow-y-auto custom-scrollbar pr-1">
                        {groups.map(({ kind, label, Icon, items }) => (
                            <section key={kind}>
                                <h3 className="text-[11px] font-bold uppercase tracking-wider text-white/40 mb-2">
                                    {label}
                                </h3>
                                <div className="space-y-1.5">
                                    {items.map((item) => (
                                        <button
                                            key={item.id}
                                            type="button"
                                            onClick={() => read(item)}
                                            disabled={loadingId === item.id}
                                            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg border border-white/10 bg-white/[0.03] hover:bg-white/[0.07] text-left transition-colors disabled:opacity-50"
                                        >
                                            <Icon size={15} className="text-white/40 shrink-0" />
                                            <span className="text-sm text-white/85 flex-1 min-w-0 truncate">
                                                {item.title}
                                            </span>
                                            {loadingId === item.id && (
                                                <span className="text-xs text-white/40">Opening...</span>
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>
                )}
            </Modal>
        </>
    );
}
