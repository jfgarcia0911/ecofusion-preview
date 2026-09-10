import type { ReactNode } from "react";
import {
    Brain, Sparkles, Calendar, Bot, Clock, AlertCircle, UserPlus, Download, Plus,
    HelpCircle, Search, GraduationCap, ShoppingCart, Users, Building2, type LucideIcon,
} from "lucide-react";

/**
 * One waiting state per destination in the sidebar, shaped like the page it
 * stands in for.
 *
 * A generic skeleton is better than a frozen screen and worse than this: the
 * layout arrives, then rearranges itself into a different one, which reads as
 * the page loading a second time. These match what is coming, so the content
 * lands in the shape already on screen.
 *
 * Every heading here is the real heading. It is static text, so it can be
 * shown at once, and a title that appears as a grey bar and then changes into
 * itself is a flicker for nothing.
 */

/**
 * `icon` is drawn rather than left as a grey square. An icon is static markup,
 * so nothing about it is genuinely being waited for, and a title that appears
 * without one and then grows one is a jolt at the top of the page.
 */
function Heading({
    title,
    standfirst,
    action,
    icon: Icon,
}: {
    title: string;
    standfirst?: string;
    action?: ReactNode;
    icon?: LucideIcon;
}) {
    return (
        <div className="flex justify-between items-end gap-4">
            <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent flex items-center gap-3">
                    {Icon && <Icon className="text-accent" />}
                    {title}
                </h1>
                {standfirst && <p className="text-white/50 mt-1">{standfirst}</p>}
            </div>
            {action}
        </div>
    );
}

/** The button most of these pages carry in the top right. */
function ActionButton({ width = "w-36" }: { width?: string }) {
    return <div className={`h-9 ${width} rounded-lg bg-white/5 shrink-0 animate-pulse`} />;
}

/** Panels in a grid. */
function Cards({ count = 6, cols = "lg:grid-cols-3" }: { count?: number; cols?: string }) {
    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 ${cols} gap-6`}>
            {Array.from({ length: count }).map((_, card) => (
                <div key={card} className="glass-card p-6 animate-pulse space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-white/10 shrink-0" />
                        <div className="h-4 w-28 rounded bg-white/10" />
                    </div>
                    <div className="h-7 w-24 rounded bg-white/10" />
                    <div className="h-3 w-full rounded bg-white/5" />
                </div>
            ))}
        </div>
    );
}

/** A stack of rows, which is what most management screens are. */
function Rows({ count = 6 }: { count?: number }) {
    return (
        <div className="space-y-2">
            {Array.from({ length: count }).map((_, row) => (
                <div
                    key={row}
                    className="flex items-center gap-4 px-4 py-3.5 rounded-xl border border-white/10 bg-white/[0.02] animate-pulse"
                >
                    <div className="w-10 h-10 rounded-full bg-white/10 shrink-0" />
                    <div className="flex-1 min-w-0 space-y-2">
                        <div className="h-3.5 w-44 max-w-full rounded bg-white/10" />
                        <div className="h-3 w-60 max-w-full rounded bg-white/5" />
                    </div>
                    <div className="h-7 w-24 rounded-lg bg-white/5 shrink-0 hidden sm:block" />
                    <div className="h-7 w-16 rounded-lg bg-white/5 shrink-0" />
                </div>
            ))}
        </div>
    );
}

/** A row of figures above whatever the page is really about. */
function StatRow({ count = 4 }: { count?: number }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: count }).map((_, stat) => (
                <div key={stat} className="glass-card p-6 animate-pulse">
                    <div className="h-4 w-1/2 rounded bg-white/10 mb-4" />
                    <div className="h-8 w-3/4 rounded bg-white/10" />
                </div>
            ))}
        </div>
    );
}

/* ---------------------------------------------------------------- business */

/**
 * Business Units: a card per silo, up to four abreast at the widest.
 *
 * The amber notice about unassigned revenue is conditional on the figures, so
 * no space is held open for it. Reserving room for something that usually is
 * not there is its own kind of jump.
 */
export function PhasesSkeleton() {
    return (
        <div className="space-y-8" aria-busy="true" aria-label="Loading business units">
            <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                    Business Units (Silos)
                </h1>
                <p className="text-white/50 mt-1">
                    Select a phase to manage revenue, tasks, and operations.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {Array.from({ length: 7 }).map((_, unit) => (
                    <div key={unit} className="glass-card rounded-2xl p-6 animate-pulse flex flex-col">
                        <div className="w-12 h-12 rounded-xl bg-white/10 mb-4" />
                        <div className="h-5 w-32 rounded bg-white/10 mb-2" />
                        <div className="h-3 w-full rounded bg-white/5 mb-1.5" />
                        <div className="h-3 w-2/3 rounded bg-white/5 mb-6" />
                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                            <div className="h-4 w-20 rounded bg-white/10" />
                            <div className="h-4 w-12 rounded bg-white/5" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

/**
 * Inventory: six figures, then two panels of links that never change.
 *
 * The two panels are static markup on the page, so they are drawn here at
 * their real size with their real titles. Only the figures are unknown, and
 * only the figures wait. The outer p-6 is the page's own, on top of the one
 * the layout already applies; without it here the whole page would step
 * inwards by twenty-four pixels the moment the content arrived.
 *
 * The card placeholders are the page's own, copied exactly. This component and
 * the page's loading branch have to be indistinguishable or the handover
 * between them is a flicker.
 */
export function InventorySkeleton() {
    return (
        <div className="p-6 space-y-6" aria-busy="true" aria-label="Loading inventory">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                        Inventory Management
                    </h1>
                    <p className="text-white/50 mt-1">
                        Track fish, plants, harvests, and sales inventory
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, card) => (
                    <div key={card} className="glass-card p-6 animate-pulse">
                        <div className="h-4 bg-white/10 rounded w-1/2 mb-4" />
                        <div className="h-8 bg-white/10 rounded w-1/3" />
                    </div>
                ))}
            </div>

            <div className="glass-card p-6">
                <h2 className="text-xl font-semibold text-white mb-4">Quick Actions</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {Array.from({ length: 4 }).map((_, action) => (
                        <div key={action} className="h-12 rounded-lg bg-white/5 animate-pulse" />
                    ))}
                </div>
            </div>

            <div className="glass-card p-6">
                <h2 className="text-xl font-semibold text-white mb-4">Inventory Sections</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {Array.from({ length: 5 }).map((_, section) => (
                        <div
                            key={section}
                            className="p-4 rounded-lg bg-white/5 flex items-center gap-3 animate-pulse"
                        >
                            <div className="w-6 h-6 rounded bg-white/10 shrink-0" />
                            <div className="flex-1 space-y-1.5">
                                <div className="h-3.5 w-32 rounded bg-white/10" />
                                <div className="h-3 w-44 max-w-full rounded bg-white/5" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

/**
 * Sales: five narrow tallies, then the recent ledger.
 *
 * Five across at the widest, in the page's own p-4 cards rather than the
 * taller panels other screens use. Both buttons are drawn at their real
 * widths, and the ledger rows are the page's own placeholder, copied exactly.
 */
export function SalesSkeleton() {
    return (
        <div className="p-6 space-y-6" aria-busy="true" aria-label="Loading sales">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                        Sales
                    </h1>
                    <p className="text-white/50 mt-1">Manage sales and track revenue</p>
                </div>
                <div className="flex gap-3">
                    <div className="px-4 py-2 bg-white/5 rounded-lg flex items-center gap-2 text-white/40 text-sm font-medium">
                        <Download className="w-4 h-4" />
                        Export
                    </div>
                    <div className="px-4 py-2 bg-accent/40 rounded-lg flex items-center gap-2 text-primary/60 text-sm font-bold animate-pulse">
                        <Plus className="w-4 h-4" />
                        New Sale
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {Array.from({ length: 5 }).map((_, tally) => (
                    <div key={tally} className="glass-card p-4 animate-pulse">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-white/10 shrink-0" />
                            <div className="space-y-1.5">
                                <div className="h-3 w-20 rounded bg-white/5" />
                                <div className="h-5 w-16 rounded bg-white/10" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="glass-card p-6">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold text-white">Recent Sales</h2>
                    <div className="h-4 w-16 rounded bg-white/5 animate-pulse" />
                </div>
                <div className="space-y-4">
                    {Array.from({ length: 5 }).map((_, row) => (
                        <div key={row} className="animate-pulse flex items-center gap-4">
                            <div className="w-10 h-10 bg-white/10 rounded-lg" />
                            <div className="flex-1">
                                <div className="h-4 bg-white/10 rounded w-1/3 mb-2" />
                                <div className="h-3 bg-white/10 rounded w-1/4" />
                            </div>
                            <div className="h-6 bg-white/10 rounded w-20" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

/**
 * Academy: four narrow tallies, then courses grouped by how far along they are.
 *
 * The heading here carries the accent gradient rather than the white one every
 * other page uses, and its own standfirst, because that is what the page does.
 * A skeleton that corrects the page it stands in for is a skeleton that
 * flickers when the page arrives.
 *
 * The tallies are the page's own `glass-card px-4 py-3` strips, not the taller
 * `p-6` panels used elsewhere, and the course grids are two and three abreast
 * as the page has them rather than four.
 */
export function AcademySkeleton() {
    return (
        <div className="space-y-8" aria-busy="true" aria-label="Loading the academy">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                        Training Academy
                    </h1>
                    <p className="text-white/50 mt-1">
                        Complete your required safety and compliance training
                    </p>
                </div>
                <div className="h-9 w-44 rounded-lg bg-white/10 shrink-0 animate-pulse" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {Array.from({ length: 4 }).map((_, tally) => (
                    <div
                        key={tally}
                        className="glass-card px-4 py-3 flex items-center gap-3 animate-pulse"
                    >
                        <div className="w-9 h-9 rounded-full bg-white/10 shrink-0" />
                        <div className="space-y-1.5">
                            <div className="h-2.5 w-16 rounded bg-white/10" />
                            <div className="h-5 w-8 rounded bg-white/10" />
                        </div>
                    </div>
                ))}
            </div>

            <div>
                <div className="h-6 w-44 rounded bg-white/10 mb-4 animate-pulse" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Array.from({ length: 2 }).map((_, course) => (
                        <div key={course} className="glass-panel p-6 rounded-xl animate-pulse">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-white/10 shrink-0" />
                                <div className="flex-1 space-y-2.5">
                                    <div className="h-4 w-24 rounded bg-white/10" />
                                    <div className="h-4 w-3/4 rounded bg-white/10" />
                                    <div className="h-2 w-full rounded-full bg-white/5" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <div className="h-5 w-32 rounded bg-white/10 mb-4 animate-pulse" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {Array.from({ length: 6 }).map((_, course) => (
                        <div key={course} className="glass-panel p-6 rounded-xl animate-pulse space-y-3">
                            <div className="w-10 h-10 rounded-xl bg-white/10" />
                            <div className="h-4 w-20 rounded bg-white/10" />
                            <div className="h-4 w-full rounded bg-white/10" />
                            <div className="h-3 w-1/2 rounded bg-white/5" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

/**
 * Intelligence: recommendations down the wide side, the assistant down the
 * narrow one.
 *
 * The heading carries its Brain icon and the accent gradient, both drawn for
 * real. An icon is static, so waiting for it would be waiting for nothing, and
 * a title that arrives without one and then grows one is a jolt in the corner
 * of the eye.
 */
export function IntelligenceSkeleton() {
    return (
        <div
            className="space-y-6 h-[calc(100vh-8rem)]"
            aria-busy="true"
            aria-label="Loading intelligence"
        >
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent flex items-center gap-3">
                        <Brain className="text-accent" />
                        NutriBalance AI
                    </h1>
                    <p className="text-white/50 mt-1">
                        AI-driven ecosystem optimization and insights
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full pb-6">
                <div className="lg:col-span-2 space-y-6">
                    <div className="glass-panel p-6 rounded-2xl border border-accent/20">
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <Sparkles size={20} className="text-accent" />
                            Active Recommendations
                        </h2>
                        <div className="space-y-4">
                            {Array.from({ length: 3 }).map((_, item) => (
                                <div
                                    key={item}
                                    className="p-4 bg-accent/5 border border-accent/20 rounded-xl animate-pulse space-y-2"
                                >
                                    <div className="flex justify-between items-start">
                                        <div className="h-4 w-56 max-w-full rounded bg-white/10" />
                                        <div className="h-4 w-16 rounded bg-white/5 shrink-0" />
                                    </div>
                                    <div className="h-3 w-full rounded bg-white/5" />
                                    <div className="h-3 w-2/3 rounded bg-white/5" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* The training notice is static text on the page, so it is drawn as it is. */}
                    <div className="glass-card p-6 min-h-[250px] flex flex-col items-center justify-center border-dashed border-2 border-white/10">
                        <Brain size={48} className="text-white/10 mb-4" />
                        <p className="text-white/30 font-medium">Machine Learning Model Training...</p>
                        <p className="text-white/20 text-xs mt-2">
                            Gathering more data points for Predictive Yield Engine
                        </p>
                    </div>
                </div>

                <div className="glass-panel p-6 rounded-2xl flex flex-col h-full max-h-[calc(100vh-12rem)]">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-bold text-white flex items-center gap-2">
                            <Brain size={20} className="text-accent" />
                            Ask EcoFusion AI
                        </h3>
                    </div>
                    <div className="flex-1 bg-black/20 rounded-xl p-4 mb-4 animate-pulse" />
                    <div className="h-11 rounded-xl bg-white/5 animate-pulse" />
                </div>
            </div>
        </div>
    );
}

/**
 * The assistant: a full height column, its heading badge above a chat panel
 * that takes the rest of the screen.
 *
 * The badge, the title and the "Powered by Google Gemini" line are all static
 * markup, so they are drawn rather than waited for. What is genuinely unknown
 * is whether there is a conversation yet, and the page's own answer to that is
 * a centred prompt with suggestions, so that is the shape held open here.
 */
export function AssistantSkeleton() {
    return (
        <div
            className="h-[calc(100vh-4rem)] flex flex-col p-6"
            aria-busy="true"
            aria-label="Loading the assistant"
        >
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
                        <Bot className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                            EcoFusion AI Assistant
                        </h1>
                        <p className="text-white/50 text-sm flex items-center gap-1">
                            <Sparkles className="w-3 h-3" />
                            Powered by Google Gemini
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex-1 glass-card rounded-xl flex flex-col overflow-hidden">
                <div className="flex-1 overflow-hidden p-4">
                    <div className="h-full flex flex-col items-center justify-center text-center px-4">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-600/20 flex items-center justify-center mb-4">
                            <Bot className="w-10 h-10 text-purple-400" />
                        </div>
                        <div className="h-5 w-56 rounded bg-white/10 mb-3 animate-pulse" />
                        <div className="h-3.5 w-80 max-w-full rounded bg-white/5 mb-6 animate-pulse" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-2xl w-full">
                            {Array.from({ length: 4 }).map((_, suggestion) => (
                                <div
                                    key={suggestion}
                                    className="h-11 rounded-lg bg-white/5 animate-pulse"
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="p-4 border-t border-white/10">
                    <div className="flex gap-3">
                        <div className="h-11 flex-1 rounded-lg bg-white/5 animate-pulse" />
                        <div className="h-11 w-11 rounded-lg bg-white/10 shrink-0 animate-pulse" />
                    </div>
                </div>
            </div>
        </div>
    );
}

/**
 * Employees: a directory of faces, three abreast.
 *
 * Cards with the portrait centred above the name, which is what a directory
 * is. This was standing in as a list of horizontal rows, which is a different
 * page entirely. The card placeholder is the page's own, copied exactly.
 */
export function EmployeesSkeleton() {
    return (
        <div className="space-y-6" aria-busy="true" aria-label="Loading the employee directory">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                        Employee Directory
                    </h1>
                    <p className="text-white/50 mt-1">Manage staff and permissions</p>
                </div>
                <div className="px-4 py-2 bg-accent/40 rounded-lg flex items-center gap-2 text-primary/60 font-bold animate-pulse">
                    <UserPlus size={18} />
                    Add Employee
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 3 }).map((_, person) => (
                    <div key={person} className="glass-card p-6 animate-pulse">
                        <div className="w-20 h-20 rounded-full bg-white/10 mx-auto mb-4" />
                        <div className="h-6 bg-white/10 rounded w-3/4 mx-auto mb-2" />
                        <div className="h-4 bg-white/5 rounded w-1/2 mx-auto" />
                    </div>
                ))}
            </div>
        </div>
    );
}

/**
 * Scheduling Management: a week laid out as seven columns, not a list.
 *
 * The day names are the week, which does not need fetching, so they are
 * printed. Each column holds its minimum height from the start, so the grid
 * does not grow downwards as shifts arrive into it.
 */
const WEEK = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export function SchedulingSkeleton() {
    return (
        <div
            className="max-w-7xl mx-auto space-y-6"
            aria-busy="true"
            aria-label="Loading scheduling"
        >
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold flex items-center gap-3">
                        <Calendar className="text-accent" />
                        Scheduling Management
                    </h1>
                    <p className="text-white/50 mt-1">Create and manage schedules for your team</p>
                </div>
                <div className="flex gap-3">
                    <div className="h-10 w-36 rounded-xl bg-white/10 animate-pulse" />
                </div>
            </div>

            <div className="flex gap-2 border-b border-white/10 pb-2">
                {Array.from({ length: 3 }).map((_, tab) => (
                    <div key={tab} className="h-9 w-28 rounded-lg bg-white/5 animate-pulse" />
                ))}
            </div>

            <div className="grid grid-cols-7 gap-2">
                {WEEK.map((day) => (
                    <div
                        key={day}
                        className="bg-black/20 border border-white/10 rounded-xl overflow-hidden"
                    >
                        <div className="flex items-center justify-between px-2 py-2 border-b border-white/10">
                            <span className="font-semibold text-sm text-white/70">
                                {day.slice(0, 3)}
                            </span>
                        </div>
                        <div className="p-2 space-y-2 min-h-[200px]">
                            {Array.from({ length: 2 }).map((_, shift) => (
                                <div
                                    key={shift}
                                    className="h-12 rounded-lg bg-white/5 animate-pulse"
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

/**
 * My Schedule: today's shifts beside today's tasks.
 *
 * The heading is plain bold rather than the gradient most pages use, and it
 * carries a Calendar, both of which are drawn as they are. The line beneath it
 * is today's date, computed in the browser, so it is the one part of the
 * heading held as a bar: rendering a date on the server that the reader's own
 * clock may disagree with is a worse flicker than a grey line.
 *
 * The two panels are `bg-black/20` cards rather than glass ones, with their
 * real titles and icons, because those are markup and not waiting for anything.
 */
export function MyScheduleSkeleton() {
    return (
        <div
            className="max-w-6xl mx-auto space-y-6"
            aria-busy="true"
            aria-label="Loading your schedule"
        >
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold flex items-center gap-3">
                        <Calendar className="text-accent" />
                        My Schedule
                    </h1>
                    <div className="h-4 w-56 rounded bg-white/5 mt-2 animate-pulse" />
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {[
                    { label: "Today's Shifts", Icon: Clock },
                    { label: "Tasks Due Today", Icon: AlertCircle },
                ].map(({ label, Icon }) => (
                    <div
                        key={label}
                        className="bg-black/20 border border-white/10 rounded-2xl p-6"
                    >
                        <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                            <Icon className="text-accent" size={20} />
                            {label}
                        </h2>
                        <div className="space-y-3">
                            {Array.from({ length: 3 }).map((_, row) => (
                                <div
                                    key={row}
                                    className="rounded-xl bg-white/5 p-4 animate-pulse space-y-2"
                                >
                                    <div className="h-4 w-40 max-w-full rounded bg-white/10" />
                                    <div className="h-3 w-28 rounded bg-white/5" />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

/** Tasks: two full height columns, which is what the task boards are. */
export function TasksSkeleton() {
    return (
        <div className="h-[calc(100vh-8rem)]" aria-busy="true" aria-label="Loading tasks">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                        Task Management
                    </h1>
                    <p className="text-white/50 mt-1">Track daily operations and employee duties</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
                {[0, 1].map((column) => (
                    <div key={column} className="glass-card rounded-2xl p-6 h-full animate-pulse">
                        <div className="h-5 w-40 rounded bg-white/10 mb-5" />
                        <div className="space-y-3">
                            {Array.from({ length: 5 }).map((_, task) => (
                                <div key={task} className="flex items-center gap-3">
                                    <div className="w-4 h-4 rounded bg-white/10 shrink-0" />
                                    <div className="h-3 flex-1 rounded bg-white/5" />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

/**
 * Help: a badge and a version line, a search field, then category tiles.
 *
 * The badge, its icon and the title are markup, so they are drawn. The version
 * line is not: it comes from the build, and a wrong one flashing before the
 * right one is worse than a grey bar.
 */
export function HelpSkeleton() {
    return (
        <div className="max-w-7xl mx-auto" aria-busy="true" aria-label="Loading the help centre">
            <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-xl bg-accent/20">
                        <HelpCircle className="text-accent" size={28} />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold">Help Center</h1>
                        <div className="h-3.5 w-64 rounded bg-white/5 mt-1.5 animate-pulse" />
                    </div>
                </div>
                <div className="h-4 w-96 max-w-full rounded bg-white/5 mt-2 animate-pulse" />
            </div>

            <div className="relative mb-8">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={20} />
                <div className="h-12 w-full rounded-xl bg-white/5 animate-pulse" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {Array.from({ length: 4 }).map((_, category) => (
                    <div
                        key={category}
                        className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 animate-pulse space-y-3"
                    >
                        <div className="w-10 h-10 rounded-xl bg-white/10" />
                        <div className="h-4 w-24 rounded bg-white/10" />
                        <div className="h-3 w-16 rounded bg-white/5" />
                    </div>
                ))}
            </div>
        </div>
    );
}

/* ------------------------------------------------------------------ agency */

/**
 * The agency lists, which are all a heading, a search field and rows.
 *
 * Their headings are text-2xl and white with an icon beside them, not the
 * text-3xl gradient the business screens use. Standing in for one with the
 * other changed the size of the title as the page arrived.
 */
export function AgencyListSkeleton({
    title,
    standfirst,
    icon: Icon,
    rows = 5,
    search = true,
}: {
    title: string;
    standfirst: string;
    icon: LucideIcon;
    rows?: number;
    search?: boolean;
}) {
    return (
        <div aria-busy="true" aria-label={"Loading " + title.toLowerCase()}>
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-white flex items-center gap-2">
                    <Icon size={22} className="text-accent" />
                    {title}
                </h1>
                <p className="text-white/50 mt-1 max-w-2xl text-sm">{standfirst}</p>
            </div>

            {search && <div className="h-11 w-full rounded-xl bg-white/5 mb-4 animate-pulse" />}

            <div className="space-y-2">
                {Array.from({ length: rows }).map((_, row) => (
                    <div
                        key={row}
                        className="flex items-center gap-4 px-4 py-3.5 rounded-xl border border-white/10 bg-white/[0.03] animate-pulse"
                    >
                        <div className="w-9 h-9 rounded-lg bg-white/10 shrink-0" />
                        <div className="flex-1 min-w-0 space-y-2">
                            <div className="h-3.5 w-44 max-w-full rounded bg-white/10" />
                            <div className="h-3 w-60 max-w-full rounded bg-white/5" />
                        </div>
                        <div className="h-7 w-20 rounded-lg bg-white/5 shrink-0 hidden sm:block" />
                        <div className="h-7 w-16 rounded-lg bg-white/5 shrink-0" />
                    </div>
                ))}
            </div>
        </div>
    );
}

/* ---------------------------------------------------------------- settings */

/** The settings index: two labelled groups of cards. */
export function SettingsIndexSkeleton() {
    return (
        <div className="max-w-3xl space-y-10" aria-busy="true" aria-label="Loading settings">
            <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                    Settings
                </h1>
                <div className="h-4 w-80 max-w-full rounded bg-white/5 mt-3 animate-pulse" />
            </div>
            {[2, 4].map((count, group) => (
                <div key={group} className="space-y-3">
                    <div className="h-3 w-32 rounded bg-white/10 animate-pulse" />
                    {Array.from({ length: count }).map((_, card) => (
                        <div
                            key={card}
                            className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/10 animate-pulse"
                        >
                            <div className="w-11 h-11 rounded-xl bg-white/10 shrink-0" />
                            <div className="flex-1 space-y-2">
                                <div className="h-4 w-40 rounded bg-white/10" />
                                <div className="h-3 w-64 max-w-full rounded bg-white/5" />
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

/** A settings page that is mostly a form: preferences, integrations. */
export function SettingsFormSkeleton({ title, fields = 4 }: { title: string; fields?: number }) {
    return (
        <div className="max-w-3xl" aria-busy="true" aria-label={`Loading ${title.toLowerCase()}`}>
            <div className="h-4 w-24 rounded bg-white/5 mb-6 animate-pulse" />
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-white">{title}</h1>
                <div className="h-3.5 w-96 max-w-full rounded bg-white/5 mt-2 animate-pulse" />
            </div>
            <div className="space-y-5 animate-pulse">
                {Array.from({ length: fields }).map((_, field) => (
                    <div key={field} className="space-y-2">
                        <div className="h-3 w-28 rounded bg-white/10" />
                        <div className="h-11 w-full rounded-xl bg-white/5" />
                    </div>
                ))}
                <div className="h-10 w-36 rounded-lg bg-white/5" />
            </div>
        </div>
    );
}

/** A settings page that is mostly a list: business units, the access record. */
export function SettingsListSkeleton({
    title,
    rows = 6,
}: {
    title: string;
    rows?: number;
}) {
    return (
        <div className="max-w-3xl" aria-busy="true" aria-label={`Loading ${title.toLowerCase()}`}>
            <div className="h-4 w-24 rounded bg-white/5 mb-6 animate-pulse" />
            <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-white">{title}</h1>
                    <div className="h-3.5 w-80 max-w-full rounded bg-white/5 mt-2 animate-pulse" />
                </div>
                <div className="h-9 w-28 rounded-lg bg-white/5 shrink-0 animate-pulse" />
            </div>
            <div className="space-y-2">
                {Array.from({ length: rows }).map((_, row) => (
                    <div
                        key={row}
                        className="flex items-center gap-4 px-4 py-3 rounded-xl border border-white/10 bg-white/[0.03] animate-pulse"
                    >
                        <div className="w-9 h-9 rounded-lg bg-white/10 shrink-0" />
                        <div className="flex-1 space-y-2">
                            <div className="h-3.5 w-40 rounded bg-white/10" />
                            <div className="h-3 w-56 max-w-full rounded bg-white/5" />
                        </div>
                        <div className="h-7 w-20 rounded-lg bg-white/5 shrink-0" />
                    </div>
                ))}
            </div>
        </div>
    );
}

/** Billing: one card in the middle of the screen, which is the whole page. */
export function BillingSkeleton() {
    return (
        <div
            className="flex items-center justify-center min-h-screen p-6"
            aria-busy="true"
            aria-label="Loading billing"
        >
            <div className="w-full max-w-lg glass-card p-8 rounded-3xl animate-pulse space-y-6">
                <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-white/10" />
                    <div className="h-6 w-56 rounded bg-white/10" />
                    <div className="h-3 w-72 max-w-full rounded bg-white/5" />
                </div>
                <div className="space-y-3">
                    {[0, 1, 2].map((row) => (
                        <div key={row} className="h-12 rounded-xl bg-white/5" />
                    ))}
                </div>
                <div className="h-11 rounded-xl bg-white/10" />
            </div>
        </div>
    );
}

/**
 * Training Management: four tallies, then the list of people beside the
 * training of whoever is chosen.
 *
 * The right hand column stands empty on purpose. Nobody is selected when the
 * page opens, and what the page shows then is a prompt to choose somebody, so
 * holding open a person's training there would promise something that is not
 * about to arrive.
 */
export function TrainingSkeleton() {
    return (
        <div className="space-y-8" aria-busy="true" aria-label="Loading training management">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                        Training Management
                    </h1>
                    <p className="text-white/50 mt-1">Assign and track employee safety training</p>
                </div>
                <div className="h-10 w-52 rounded-lg bg-white/10 shrink-0 animate-pulse" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {Array.from({ length: 4 }).map((_, tally) => (
                    <div key={tally} className="glass-card p-4 rounded-xl animate-pulse">
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-lg bg-white/10 shrink-0" />
                            <div className="space-y-1.5">
                                <div className="h-6 w-10 rounded bg-white/10" />
                                <div className="h-2.5 w-20 rounded bg-white/5" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                    <div className="bg-white/5 border border-white/5 rounded-2xl p-4">
                        <div className="flex items-center gap-2 mb-4">
                            <Users size={18} className="text-white/50" />
                            <h2 className="font-bold text-white">Employees</h2>
                        </div>
                        <div className="h-9 w-full rounded-lg bg-white/5 mb-4 animate-pulse" />
                        <div className="space-y-2">
                            {Array.from({ length: 6 }).map((_, person) => (
                                <div
                                    key={person}
                                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 animate-pulse"
                                >
                                    <div className="w-8 h-8 rounded-full bg-white/10 shrink-0" />
                                    <div className="flex-1 space-y-1.5">
                                        <div className="h-3.5 w-28 rounded bg-white/10" />
                                        <div className="h-2.5 w-36 max-w-full rounded bg-white/5" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-2 flex items-center justify-center min-h-[300px]">
                    <div className="text-center">
                        <Users size={40} className="mx-auto text-white/10 mb-3" />
                        <div className="h-3.5 w-56 rounded bg-white/5 mx-auto animate-pulse" />
                    </div>
                </div>
            </div>
        </div>
    );
}

/**
 * One employee's profile: their card, then their shifts, training and sales.
 *
 * Section titles and their icons are drawn, since those are markup and the
 * page always has all three. What is unknown is what is inside them.
 */
export function EmployeeProfileSkeleton() {
    return (
        <div className="max-w-4xl space-y-6" aria-busy="true" aria-label="Loading the profile">
            <div className="h-4 w-40 rounded bg-white/5 animate-pulse" />

            <div className="glass-card rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center gap-5 animate-pulse">
                <div className="w-20 h-20 rounded-full bg-white/10 shrink-0" />
                <div className="flex-1 space-y-2.5">
                    <div className="h-6 w-48 rounded bg-white/10" />
                    <div className="h-4 w-32 rounded bg-white/5" />
                    <div className="h-3.5 w-64 max-w-full rounded bg-white/5" />
                </div>
                <div className="h-4 w-36 rounded bg-white/5 shrink-0" />
            </div>

            {[
                { title: "Weekly shifts", Icon: Calendar, rows: 3 },
                { title: "Training", Icon: GraduationCap, rows: 3 },
                { title: "Sales recorded", Icon: ShoppingCart, rows: 3 },
            ].map(({ title, Icon, rows }) => (
                <section key={title} className="glass-card rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-bold text-white flex items-center gap-2">
                            <Icon size={18} className="text-accent" />
                            {title}
                        </h2>
                        <div className="h-3 w-20 rounded bg-white/5 animate-pulse" />
                    </div>
                    <div className="space-y-2">
                        {Array.from({ length: rows }).map((_, row) => (
                            <div
                                key={row}
                                className="h-11 rounded-xl bg-white/[0.03] border border-white/10 animate-pulse"
                            />
                        ))}
                    </div>
                </section>
            ))}
        </div>
    );
}

/**
 * Agency Classes: the list of businesses beside a prompt to choose one.
 *
 * The right hand side is held as the prompt rather than as a class list,
 * because that is what arrives. Nothing is chosen when the page opens.
 */
export function AgencyClassesSkeleton() {
    return (
        <div className="space-y-6" aria-busy="true" aria-label="Loading classes">
            <div>
                <h1 className="text-2xl font-bold text-white flex items-center gap-2">
                    <GraduationCap size={22} className="text-accent" />
                    Classes
                </h1>
                <div className="h-3.5 w-[28rem] max-w-full rounded bg-white/5 mt-2 animate-pulse" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1">
                    <div className="bg-white/5 border border-white/5 rounded-2xl p-4">
                        <div className="flex items-center gap-2 mb-4">
                            <Building2 size={18} className="text-white/50" />
                            <h2 className="font-bold text-white">Businesses</h2>
                        </div>
                        <div className="h-9 w-full rounded-lg bg-black/20 mb-4 animate-pulse" />
                        <div className="space-y-1.5">
                            {Array.from({ length: 6 }).map((_, row) => (
                                <div key={row} className="p-3 rounded-xl bg-white/[0.03] animate-pulse space-y-2">
                                    <div className="flex items-center gap-2">
                                        <div className="h-3.5 flex-1 rounded bg-white/10" />
                                        <div className="h-4 w-12 rounded-full bg-white/5" />
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="h-3 flex-1 rounded bg-white/5" />
                                        <div className="h-3 w-14 rounded bg-white/5" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-2">
                    <div className="h-full min-h-[320px] flex flex-col items-center justify-center text-center border border-dashed border-white/10 rounded-2xl p-8">
                        <Building2 size={36} className="text-white/15 mb-3" />
                        <p className="text-white/60 font-medium">Choose a business</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
