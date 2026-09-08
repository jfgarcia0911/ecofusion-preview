"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import clsx from "clsx";
import { visibleSections, type SettingsSection } from "@/lib/settings-sections";

/**
 * The sidebar while you are inside settings.
 *
 * Settings replace the navigation rather than sitting inside it, so the whole
 * column is about configuring and nothing on screen invites you back into the
 * working week by accident. Leaving is one deliberate button.
 *
 * The two groups are labelled by how far they reach. An owner running three
 * businesses has to be able to see, without opening anything, that a password
 * changes everywhere and that team access stops here.
 */
export default function SettingsNav({
    pathname,
    isOwner,
    businessName,
}: {
    pathname: string;
    isOwner: boolean;
    /** Named in the business group's caption, so "here" means somewhere. */
    businessName?: string | null;
}) {
    const router = useRouter();
    const { account, business } = visibleSections(isOwner);

    function goBack() {
        // Back where they came from when that was inside the app, and to the
        // dashboard when settings was opened cold - a bookmark, a fresh tab,
        // a redirect from billing. Sending someone to the previous site
        // because they arrived directly would be a strange way to leave.
        if (typeof window !== "undefined" && window.history.length > 1) {
            router.back();
            return;
        }
        router.push("/dashboard/executive");
    }

    return (
        <>
            <div className="px-4 pb-4">
                <button
                    type="button"
                    onClick={goBack}
                    className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-full bg-black/40 border border-white/10 text-white font-semibold hover:bg-black/60 transition-colors group"
                >
                    <ArrowLeft
                        size={17}
                        className="group-hover:-translate-x-0.5 transition-transform"
                    />
                    Go Back
                </button>
            </div>

            <nav className="flex-1 px-4 pb-4 overflow-y-auto custom-scrollbar">
                <h2 className="text-xl font-bold text-white px-1 mb-4">Settings</h2>

                <Group
                    caption="Your account"
                    hint="Changes everywhere you work"
                    sections={account}
                    pathname={pathname}
                />

                {business.length > 0 && (
                    <Group
                        caption={businessName ?? "This business"}
                        hint="Stops at this business"
                        sections={business}
                        pathname={pathname}
                    />
                )}
            </nav>
        </>
    );
}

function Group({
    caption,
    hint,
    sections,
    pathname,
}: {
    caption: string;
    hint: string;
    sections: SettingsSection[];
    pathname: string;
}) {
    if (sections.length === 0) return null;

    return (
        <div className="mb-6 last:mb-0">
            <div className="px-1 mb-2">
                <p className="text-[11px] uppercase tracking-wider text-white/40 font-semibold truncate">
                    {caption}
                </p>
                <p className="text-[11px] text-white/25">{hint}</p>
            </div>

            <div className="space-y-1">
                {sections.map((section) => {
                    const isActive =
                        pathname === section.href || pathname.startsWith(section.href + "/");
                    return (
                        <Link
                            key={section.href}
                            href={section.href}
                            className={clsx(
                                "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group",
                                isActive
                                    ? "bg-primary/50 text-accent border border-accent/20"
                                    : "text-white/70 hover:bg-white/5 hover:text-white border border-transparent"
                            )}
                        >
                            <section.icon
                                size={18}
                                className={
                                    isActive ? "text-accent" : "text-white/40 group-hover:text-white"
                                }
                            />
                            <span className="text-sm font-medium truncate">{section.name}</span>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
