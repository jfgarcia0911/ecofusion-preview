import Link from "next/link";
import { redirect } from "next/navigation";
import { ChevronRight, Lock, Building2, UserCog } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { getOrgContext } from "@/lib/tenancy";

/**
 * One place for everything that configures rather than runs.
 *
 * Split by what a setting actually reaches, because the two are easy to
 * confuse and expensive to confuse: an owner with three businesses needs to
 * know that changing a password changes it everywhere, and that adding
 * somebody to Team Access adds them here and nowhere else.
 *
 * Sections the reader may not open are not listed at all. Naming them and
 * refusing would tell an employee what the owner can do without letting them
 * do it, which is an invitation rather than an explanation.
 */


import { type SettingsSection as Section, visibleSections } from "@/lib/settings-sections";

function SectionList({ sections }: { sections: Section[] }) {
    return (
        <div className="grid gap-3">
            {sections.map((section) => (
                <Link
                    key={section.href}
                    href={section.href}
                    className="group flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] hover:border-white/20 transition-all"
                >
                    <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                        <section.icon size={20} strokeWidth={1.8} />
                    </div>
                    <div className="min-w-0 flex-1">
                        <p className="font-semibold text-white">{section.name}</p>
                        <p className="text-sm text-white/45 mt-0.5">{section.description}</p>
                    </div>
                    <ChevronRight
                        size={18}
                        className="text-white/20 group-hover:text-white/50 group-hover:translate-x-0.5 transition-all shrink-0"
                    />
                </Link>
            ))}
        </div>
    );
}

export default async function SettingsPage() {
    const ctx = await getOrgContext();
    if (!ctx) redirect("/login");

    // True for the master account inside any business, which enters as its
    // owner. Other staff enter as supervisors and are not shown these.
    const isOwner = ctx.role === "owner";

    const [business, ownedCount] = await Promise.all([
        prisma.organization.findUnique({
            where: { id: ctx.organizationId },
            select: { name: true },
        }),
        prisma.membership.count({ where: { userId: ctx.userId, role: "owner" } }),
    ]);

    const { account, business: business_ } = visibleSections(isOwner);

    return (
        <div className="max-w-3xl space-y-10">
            <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                    Settings
                </h1>
                <p className="text-white/50 mt-2">
                    {isOwner
                        ? "What follows your account, and what stops at this business."
                        : "Your account. Anything that configures the business is the owner’s."}
                </p>
            </div>

            {account.length > 0 && (
                <section className="space-y-3">
                    <div className="flex items-center gap-2.5 px-1">
                        <UserCog size={15} className="text-white/35" />
                        <h2 className="text-sm font-bold uppercase tracking-[0.12em] text-white/50">
                            Your account
                        </h2>
                    </div>
                    <p className="text-sm text-white/35 px-1 -mt-1">
                        {ownedCount > 1
                            ? `Applies across all ${ownedCount} of your businesses.`
                            : "Applies wherever you sign in."}
                    </p>
                    <SectionList sections={account} />
                </section>
            )}

            {business_.length > 0 && (
                <section className="space-y-3">
                    <div className="flex items-center gap-2.5 px-1">
                        <Building2 size={15} className="text-white/35" />
                        <h2 className="text-sm font-bold uppercase tracking-[0.12em] text-white/50">
                            {business?.name ?? "This business"}
                        </h2>
                    </div>
                    <p className="text-sm text-white/35 px-1 -mt-1">
                        {ownedCount > 1
                            ? "Stops here. Switch business in the sidebar to change another one."
                            : "Applies to this business only."}
                    </p>
                    <SectionList sections={business_} />
                </section>
            )}

            {!isOwner && (
                <p className="flex items-start gap-2.5 text-sm text-white/35 px-1">
                    <Lock size={14} className="mt-0.5 shrink-0" />
                    Billing, team access and the rest of this business’s settings belong to
                    its owner.
                </p>
            )}
        </div>
    );
}
