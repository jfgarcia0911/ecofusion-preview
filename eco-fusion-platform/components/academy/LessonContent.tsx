'use client';

/**
 * Renders lesson markdown for the academy course player.
 *
 * This deliberately does not use @tailwindcss/typography. The `prose` classes
 * the player used before were silently inert - the plugin was never installed -
 * so Tailwind's preflight flattened every heading and list into body text. A
 * component map is what the design system needs anyway: prose's defaults are
 * tuned for light-background article pages, not a dark operations console, and
 * overriding them token by token costs more than writing the elements.
 *
 * Authoring format is documented in components/academy/LESSON-FORMAT.md.
 */

import React from 'react';
import ReactMarkdown, { type Components } from 'react-markdown';
import {
    AlertTriangle, Info, Lightbulb, ShieldAlert, CheckCircle2,
} from 'lucide-react';
import clsx from 'clsx';

/* ------------------------------------------------------------------ *
 * Callouts
 *
 * Authors write GitHub-style alerts, which are plain blockquotes so the
 * source stays readable anywhere markdown is displayed:
 *
 *   > [!DANGER]
 *   > Never open an energised panel with wet hands.
 * ------------------------------------------------------------------ */

type CalloutKind = 'note' | 'tip' | 'important' | 'warning' | 'danger';

const CALLOUTS: Record<CalloutKind, {
    label: string;
    Icon: typeof Info;
    wrap: string;
    edge: string;
    tint: string;
}> = {
    note: {
        label: 'Note',
        Icon: Info,
        wrap: 'bg-info/[0.07] border-info/25',
        edge: 'bg-info',
        tint: 'text-info',
    },
    tip: {
        label: 'Tip',
        Icon: Lightbulb,
        wrap: 'bg-accent/[0.07] border-accent/25',
        edge: 'bg-accent',
        tint: 'text-accent',
    },
    important: {
        label: 'Important',
        Icon: CheckCircle2,
        wrap: 'bg-accent/[0.07] border-accent/30',
        edge: 'bg-accent',
        tint: 'text-accent',
    },
    warning: {
        label: 'Warning',
        Icon: AlertTriangle,
        wrap: 'bg-warning/[0.07] border-warning/30',
        edge: 'bg-warning',
        tint: 'text-warning',
    },
    danger: {
        label: 'Danger',
        Icon: ShieldAlert,
        wrap: 'bg-error/[0.08] border-error/35',
        edge: 'bg-error',
        tint: 'text-error',
    },
};

/** CAUTION reads as a warning; DANGER is reserved for "this can kill you". */
const CALLOUT_ALIASES: Record<string, CalloutKind> = {
    note: 'note',
    info: 'note',
    tip: 'tip',
    hint: 'tip',
    important: 'important',
    warning: 'warning',
    caution: 'warning',
    danger: 'danger',
};

const CALLOUT_MARKER = /^\s*\[!(\w+)\]\s*\n?/;

/**
 * Pulls a `[!KIND]` marker off the front of a blockquote.
 *
 * Only the leading text node is rewritten, so inline markup in the rest of the
 * callout survives untouched.
 */
function extractCallout(children: React.ReactNode): {
    kind: CalloutKind | null;
    body: React.ReactNode;
} {
    const nodes = React.Children.toArray(children);
    const first = nodes.find((n) => React.isValidElement(n)) as
        | React.ReactElement<{ children?: React.ReactNode }>
        | undefined;
    if (!first) return { kind: null, body: children };

    const inner = React.Children.toArray(first.props.children);
    const lead = inner[0];
    if (typeof lead !== 'string') return { kind: null, body: children };

    const match = lead.match(CALLOUT_MARKER);
    if (!match) return { kind: null, body: children };

    const kind = CALLOUT_ALIASES[match[1].toLowerCase()];
    if (!kind) return { kind: null, body: children };

    const stripped = lead.slice(match[0].length);
    const rebuiltFirst = React.cloneElement(first, {
        children: stripped ? [stripped, ...inner.slice(1)] : inner.slice(1),
    });

    return {
        kind,
        body: nodes.map((n) => (n === first ? rebuiltFirst : n)),
    };
}

function Callout({ children }: { children?: React.ReactNode }) {
    const { kind, body } = extractCallout(children);

    // A plain blockquote is still a quote - render it as one.
    if (!kind) {
        return (
            <blockquote className="my-7 border-l-2 border-white/15 pl-5 text-white/60 italic [&>p]:my-2">
                {children}
            </blockquote>
        );
    }

    const { label, Icon, wrap, edge, tint } = CALLOUTS[kind];

    return (
        <div
            role="note"
            aria-label={label}
            className={clsx(
                'relative my-7 overflow-hidden rounded-xl border pl-6 pr-5 py-4',
                wrap
            )}
        >
            <span className={clsx('absolute inset-y-0 left-0 w-[3px]', edge)} aria-hidden />
            <div className={clsx('mb-1.5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em]', tint)}>
                <Icon size={14} strokeWidth={2.5} />
                {label}
            </div>
            <div className="text-[0.95rem] leading-[1.7] text-white/80 [&>p]:my-2 [&>p:first-child]:mt-0 [&>p:last-child]:mb-0 [&>ul]:my-2">
                {body}
            </div>
        </div>
    );
}

/* ------------------------------------------------------------------ *
 * Element map
 * ------------------------------------------------------------------ */

const components: Components = {
    /**
     * The player already prints the lesson title above this content, so a
     * content-level H1 is a second title. It is styled below the page title
     * rather than competing with it - see LESSON-FORMAT.md, which asks authors
     * to start at H2.
     */
    h1: ({ children }) => (
        <h1 className="mt-2 mb-6 text-[1.75rem] font-bold leading-tight tracking-tight text-white">
            {children}
        </h1>
    ),

    // Hairline + accent tick gives long lessons a scannable spine.
    h2: ({ children }) => (
        <h2 className="mt-14 mb-4 border-t border-white/10 pt-8 text-[1.375rem] font-bold leading-snug tracking-tight text-white first:mt-0 first:border-0 first:pt-0">
            <span className="mr-3 inline-block h-[0.7em] w-[3px] translate-y-[0.05em] rounded-full bg-accent align-middle" aria-hidden />
            {children}
        </h2>
    ),

    h3: ({ children }) => (
        <h3 className="mt-9 mb-3 text-[1.0625rem] font-semibold leading-snug text-white">
            {children}
        </h3>
    ),

    h4: ({ children }) => (
        <h4 className="mt-7 mb-2 text-[0.8125rem] font-bold uppercase tracking-[0.1em] text-accent/90">
            {children}
        </h4>
    ),

    p: ({ children }) => (
        <p className="my-4 text-[0.9375rem] leading-[1.8] text-white/70">{children}</p>
    ),

    ul: ({ children }) => (
        <ul className="my-5 list-disc space-y-2 pl-5 marker:text-accent/70">{children}</ul>
    ),

    ol: ({ children }) => (
        <ol className="my-5 list-decimal space-y-2 pl-5 marker:font-semibold marker:text-accent/70">
            {children}
        </ol>
    ),

    li: ({ children }) => (
        <li className="pl-1.5 text-[0.9375rem] leading-[1.75] text-white/70 [&>p]:my-1">
            {children}
        </li>
    ),

    strong: ({ children }) => (
        <strong className="font-semibold text-white">{children}</strong>
    ),

    em: ({ children }) => <em className="italic text-white/80">{children}</em>,

    a: ({ href, children }) => {
        const external = /^https?:\/\//.test(href ?? '');
        return (
            <a
                href={href}
                className="text-accent underline decoration-accent/30 underline-offset-[3px] transition-colors hover:decoration-accent"
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
                {children}
            </a>
        );
    },

    blockquote: ({ children }) => <Callout>{children}</Callout>,

    code: ({ className, children }) => {
        // react-markdown routes fenced blocks through `pre`; this is the inline case.
        const fenced = /language-/.test(className ?? '');
        if (fenced) {
            return (
                <code className="font-mono text-[0.85rem] leading-relaxed text-white/85">
                    {children}
                </code>
            );
        }
        return (
            <code className="rounded-md border border-white/10 bg-white/[0.06] px-[0.4em] py-[0.15em] font-mono text-[0.85em] text-accent">
                {children}
            </code>
        );
    },

    pre: ({ children }) => (
        <pre className="my-6 overflow-x-auto rounded-xl border border-white/10 bg-black/40 p-5 custom-scrollbar">
            {children}
        </pre>
    ),

    hr: () => (
        <hr className="my-12 h-px border-0 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
    ),

    img: ({ src, alt }) => (
        <figure className="my-8">
            {/* Lesson images are author-supplied and often remote; plain img keeps
                authoring simple and next/image's sizing contract out of markdown. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src={typeof src === 'string' ? src : ''}
                alt={alt ?? ''}
                // Shown at its own size up to the column, and never taller than the
                // screen: stretched to a wide column, a screenshot scrolls off it.
                className="mx-auto block h-auto w-auto max-w-full max-h-[75vh] rounded-xl border border-white/10"
            />
            {alt && (
                <figcaption className="mt-2.5 text-center text-xs text-white/40">{alt}</figcaption>
            )}
        </figure>
    ),

    // Tables require remark-gfm. These stay ready for when it is added.
    table: ({ children }) => (
        <div className="my-7 overflow-x-auto rounded-xl border border-white/10 custom-scrollbar">
            <table className="w-full border-collapse text-left text-[0.875rem]">{children}</table>
        </div>
    ),
    thead: ({ children }) => <thead className="bg-white/[0.04]">{children}</thead>,
    th: ({ children }) => (
        <th className="border-b border-white/10 px-4 py-3 text-xs font-bold uppercase tracking-wider text-white/80">
            {children}
        </th>
    ),
    td: ({ children }) => (
        <td className="border-b border-white/5 px-4 py-3 align-top text-white/70">{children}</td>
    ),
};

export default function LessonContent({ content }: { content: string }) {
    return (
        // Fills the player's column, as the rest of the platform fills its page.
        <div className="text-white/70">
            <ReactMarkdown components={components}>{content}</ReactMarkdown>
        </div>
    );
}
