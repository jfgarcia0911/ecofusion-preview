import type { ReactNode } from "react";

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

function Heading({
    title,
    standfirst,
    action,
}: {
    title: string;
    standfirst?: string;
    action?: ReactNode;
}) {
    return (
        <div className="flex justify-between items-end gap-4">
            <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
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

/** Business Units: one panel per silo, two abreast. */
export function PhasesSkeleton() {
    return (
        <div className="space-y-8" aria-busy="true" aria-label="Loading business units">
            <Heading
                title="Business Units (Silos)"
                standfirst="Select a phase to manage revenue, tasks, and operations."
            />
            <Cards count={6} cols="lg:grid-cols-2" />
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

/** Sales: figures across the top, then the ledger. */
export function SalesSkeleton() {
    return (
        <div className="p-6 space-y-6" aria-busy="true" aria-label="Loading sales">
            <Heading title="Sales" standfirst="Manage sales and track revenue" action={<ActionButton width="w-28" />} />
            <StatRow count={3} />
            <Rows count={6} />
        </div>
    );
}

/** Academy: progress, then a grid of courses. */
export function AcademySkeleton() {
    return (
        <div className="space-y-8" aria-busy="true" aria-label="Loading the academy">
            <Heading
                title="Training Academy"
                standfirst="Your assigned training courses will appear here"
            />
            <StatRow />
            <Cards count={8} cols="lg:grid-cols-4" />
        </div>
    );
}

/** Intelligence: a wide conversation beside a narrower column of insight. */
export function IntelligenceSkeleton() {
    return (
        <div className="space-y-6 h-[calc(100vh-8rem)]" aria-busy="true" aria-label="Loading intelligence">
            <Heading title="NutriBalance AI" standfirst="AI-driven ecosystem optimization and insights" />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 glass-card p-6 animate-pulse space-y-4">
                    <div className="h-5 w-40 rounded bg-white/10" />
                    <div className="h-72 rounded bg-white/5" />
                </div>
                <div className="glass-card p-6 animate-pulse space-y-4">
                    <div className="h-5 w-32 rounded bg-white/10" />
                    {[0, 1, 2, 3].map((row) => (
                        <div key={row} className="space-y-1.5">
                            <div className="h-3 w-3/4 rounded bg-white/10" />
                            <div className="h-2.5 w-1/2 rounded bg-white/5" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

/**
 * The assistant: a conversation, so the placeholder is turns of one, alternating
 * sides, with the composer waiting at the bottom.
 */
export function AssistantSkeleton() {
    return (
        <div className="h-[calc(100vh-4rem)] flex flex-col p-6 gap-6" aria-busy="true" aria-label="Loading the assistant">
            <Heading title="EcoFusion AI Assistant" />
            <div className="glass-card p-6 animate-pulse space-y-5">
                {[false, true, false, true].map((mine, turn) => (
                    <div key={turn} className={`flex ${mine ? "justify-end" : "justify-start"}`}>
                        <div
                            className={`rounded-2xl bg-white/5 ${mine ? "w-1/2" : "w-2/3"} h-16`}
                        />
                    </div>
                ))}
                <div className="h-12 rounded-xl bg-white/[0.04] mt-6" />
            </div>
        </div>
    );
}

/** Employees: a directory, which is rows of people. */
export function EmployeesSkeleton() {
    return (
        <div className="space-y-6" aria-busy="true" aria-label="Loading the employee directory">
            <Heading
                title="Employee Directory"
                standfirst="Manage staff and permissions"
                action={<ActionButton width="w-32" />}
            />
            <Rows count={6} />
        </div>
    );
}

/** Scheduling: a week of shifts. */
export function SchedulingSkeleton() {
    return (
        <div className="max-w-7xl mx-auto space-y-6" aria-busy="true" aria-label="Loading scheduling">
            <Heading
                title="Scheduling Management"
                standfirst="Create and manage schedules for your team"
                action={<ActionButton width="w-32" />}
            />
            <Rows count={7} />
        </div>
    );
}

/** My Schedule: the same shifts, seen by one person. */
export function MyScheduleSkeleton() {
    return (
        <div className="max-w-6xl mx-auto space-y-6" aria-busy="true" aria-label="Loading your schedule">
            <Heading title="My Schedule" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {[0, 1, 2, 3].map((card) => (
                    <div key={card} className="glass-card p-6 animate-pulse space-y-3">
                        <div className="h-4 w-32 rounded bg-white/10" />
                        <div className="h-3 w-48 rounded bg-white/5" />
                        <div className="h-3 w-24 rounded bg-white/5" />
                    </div>
                ))}
            </div>
        </div>
    );
}

/** Tasks: two columns of things to do. */
export function TasksSkeleton() {
    return (
        <div className="h-[calc(100vh-8rem)] space-y-6" aria-busy="true" aria-label="Loading tasks">
            <Heading
                title="Task Management"
                standfirst="Track daily operations and employee duties"
                action={<ActionButton width="w-28" />}
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {[0, 1].map((column) => (
                    <div key={column} className="glass-card p-6 animate-pulse space-y-4">
                        <div className="h-5 w-36 rounded bg-white/10" />
                        {[0, 1, 2, 3].map((task) => (
                            <div key={task} className="flex items-center gap-3">
                                <div className="w-4 h-4 rounded bg-white/10 shrink-0" />
                                <div className="h-3 flex-1 rounded bg-white/5" />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

/** Help: a list of articles beside the one being read. */
export function HelpSkeleton() {
    return (
        <div className="max-w-7xl mx-auto space-y-6" aria-busy="true" aria-label="Loading the help centre">
            <Heading title="Help Center" standfirst="Select an article to read" />
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="space-y-2 animate-pulse">
                    {[0, 1, 2, 3, 4, 5].map((item) => (
                        <div key={item} className="h-10 rounded-xl bg-white/[0.04]" />
                    ))}
                </div>
                <div className="lg:col-span-3 glass-card p-6 animate-pulse space-y-3">
                    <div className="h-6 w-1/2 rounded bg-white/10 mb-4" />
                    {[0, 1, 2, 3, 4, 5, 6].map((line) => (
                        <div
                            key={line}
                            className={`h-3 rounded bg-white/5 ${line % 3 === 2 ? "w-2/3" : "w-full"}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

/* ------------------------------------------------------------------ agency */

/** Sub Accounts, and the other agency lists, which are all rows of businesses. */
export function AgencyListSkeleton({
    title,
    standfirst,
    rows = 5,
}: {
    title: string;
    standfirst: string;
    rows?: number;
}) {
    return (
        <div aria-busy="true" aria-label={`Loading ${title.toLowerCase()}`}>
            <div className="mb-6">
                <Heading title={title} standfirst={standfirst} />
            </div>
            <div className="h-11 w-full rounded-xl bg-white/5 mb-4 animate-pulse" />
            <Rows count={rows} />
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

/** Training Management: what has been assigned, and to whom. */
export function TrainingSkeleton() {
    return (
        <div className="space-y-6" aria-busy="true" aria-label="Loading training management">
            <Heading title="Training Management" standfirst="Assign courses and track completions" />
            <StatRow />
            <Rows count={6} />
        </div>
    );
}
