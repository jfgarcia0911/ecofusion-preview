'use client';

/**
 * Promise-based confirmation dialog, replacing window.confirm().
 *
 * The API is shaped to keep call sites a single line, the way the native one
 * was, so swapping it in doesn't restructure the handler around it:
 *
 *   if (!(await confirm({ title: 'Delete this sale?', tone: 'danger' }))) return;
 *
 * Destructive actions default to focusing Cancel, so a stray Enter keypress
 * does not delete a farm's records.
 */

import React, {
    createContext, useCallback, useContext, useEffect, useRef, useState,
} from 'react';
import { createPortal } from 'react-dom';
import { AlertTriangle, HelpCircle, Trash2 } from 'lucide-react';
import clsx from 'clsx';
import { useIsClient } from './use-is-client';

export interface ConfirmOptions {
    title: string;
    /** Optional detail below the title. Say what happens, not "are you sure". */
    message?: string;
    confirmLabel?: string;
    cancelLabel?: string;
    tone?: 'danger' | 'default';
}

type Resolver = (value: boolean) => void;

const ConfirmContext = createContext<((options: ConfirmOptions) => Promise<boolean>) | null>(null);

export function useConfirm() {
    const ctx = useContext(ConfirmContext);
    if (!ctx) throw new Error('useConfirm must be used within <ConfirmProvider>');
    return ctx;
}

const EXIT_MS = 150;

export function ConfirmProvider({ children }: { children: React.ReactNode }) {
    const [options, setOptions] = useState<ConfirmOptions | null>(null);
    const [leaving, setLeaving] = useState(false);
    const mounted = useIsClient();
    const resolver = useRef<Resolver | null>(null);
    const confirmBtn = useRef<HTMLButtonElement>(null);
    const cancelBtn = useRef<HTMLButtonElement>(null);
    const restoreFocus = useRef<HTMLElement | null>(null);

    const confirm = useCallback((opts: ConfirmOptions) => {
        restoreFocus.current = document.activeElement as HTMLElement | null;
        setLeaving(false);
        setOptions(opts);
        return new Promise<boolean>((resolve) => {
            resolver.current = resolve;
        });
    }, []);

    const close = useCallback((result: boolean) => {
        resolver.current?.(result);
        resolver.current = null;
        setLeaving(true);
        setTimeout(() => {
            setOptions(null);
            setLeaving(false);
            restoreFocus.current?.focus?.();
        }, EXIT_MS);
    }, []);

    // Escape cancels; Tab is trapped between the two buttons.
    useEffect(() => {
        if (!options) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                e.preventDefault();
                close(false);
                return;
            }
            if (e.key !== 'Tab') return;

            const focusable = [cancelBtn.current, confirmBtn.current].filter(Boolean) as HTMLElement[];
            if (focusable.length < 2) return;

            const [first, last] = [focusable[0], focusable[focusable.length - 1]];
            const active = document.activeElement;

            if (e.shiftKey && active === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && active === last) {
                e.preventDefault();
                first.focus();
            }
        };

        document.addEventListener('keydown', onKeyDown);
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        // Destructive prompts open on Cancel so Enter is not a deletion.
        const target = options.tone === 'danger' ? cancelBtn.current : confirmBtn.current;
        target?.focus();

        return () => {
            document.removeEventListener('keydown', onKeyDown);
            document.body.style.overflow = prevOverflow;
        };
    }, [options, close]);

    const danger = options?.tone === 'danger';
    const Icon = danger ? (/(delete|remove)/i.test(options?.confirmLabel ?? '') ? Trash2 : AlertTriangle) : HelpCircle;

    return (
        <ConfirmContext.Provider value={confirm}>
            {children}
            {mounted && options && createPortal(
                <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
                    <div
                        onClick={() => close(false)}
                        className={clsx(
                            'absolute inset-0 bg-black/70 backdrop-blur-sm',
                            leaving ? 'animate-overlay-out' : 'animate-overlay-in'
                        )}
                    />

                    <div
                        role="alertdialog"
                        aria-modal="true"
                        aria-labelledby="confirm-title"
                        aria-describedby={options.message ? 'confirm-message' : undefined}
                        className={clsx(
                            'relative w-full max-w-md overflow-hidden rounded-2xl border border-white/10',
                            'bg-[#0b1a14]/95 backdrop-blur-xl shadow-2xl',
                            leaving ? 'animate-dialog-out' : 'animate-dialog-in'
                        )}
                    >
                        <div className={clsx('h-[3px] w-full', danger ? 'bg-error' : 'bg-accent')} aria-hidden />

                        <div className="p-6">
                            <div className="flex gap-4">
                                <div
                                    className={clsx(
                                        'flex h-10 w-10 shrink-0 items-center justify-center rounded-full border',
                                        danger
                                            ? 'border-error/30 bg-error/10 text-error'
                                            : 'border-accent/30 bg-accent/10 text-accent'
                                    )}
                                    aria-hidden
                                >
                                    <Icon size={18} strokeWidth={2.3} />
                                </div>

                                <div className="min-w-0 flex-1 pt-0.5">
                                    <h2 id="confirm-title" className="text-[1.0625rem] font-bold leading-snug text-white">
                                        {options.title}
                                    </h2>
                                    {options.message && (
                                        <p id="confirm-message" className="mt-2 text-[0.875rem] leading-relaxed text-white/60">
                                            {options.message}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="mt-6 flex justify-end gap-2.5">
                                <button
                                    ref={cancelBtn}
                                    type="button"
                                    onClick={() => close(false)}
                                    className="rounded-lg border border-white/10 px-4 py-2 text-sm font-semibold text-white/70 transition-colors hover:bg-white/5 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                                >
                                    {options.cancelLabel ?? 'Cancel'}
                                </button>
                                <button
                                    ref={confirmBtn}
                                    type="button"
                                    onClick={() => close(true)}
                                    className={clsx(
                                        'rounded-lg px-4 py-2 text-sm font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1a14]',
                                        danger
                                            ? 'bg-error text-white hover:bg-error/85 focus-visible:ring-error'
                                            : 'bg-accent text-primary hover:bg-accent/85 focus-visible:ring-accent'
                                    )}
                                >
                                    {options.confirmLabel ?? 'Confirm'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </ConfirmContext.Provider>
    );
}
