'use client';

/**
 * Toast notifications.
 *
 * Replaces window.alert(), which blocked the page, could not be styled, and
 * announced itself as "localhost:3000 says". Toasts are non-blocking, so they
 * suit the thing alert() was actually being used for: telling someone what just
 * happened without interrupting them.
 *
 *   const toast = useToast();
 *   toast.success('Sale recorded');
 *   toast.error('Failed to assign course', { description: err.message });
 *
 * Anything that needs an answer belongs in useConfirm() instead - see
 * components/ui/ConfirmDialog.tsx.
 */

import React, {
    createContext, useCallback, useContext, useEffect, useMemo, useRef, useState,
} from 'react';
import { createPortal } from 'react-dom';
import { CheckCircle2, AlertTriangle, XCircle, Info, X } from 'lucide-react';
import clsx from 'clsx';
import { useIsClient } from './use-is-client';

export type ToastVariant = 'success' | 'error' | 'warning' | 'info';

export interface ToastOptions {
    /** Secondary line. Use for the detail behind the headline. */
    description?: string;
    /** Milliseconds on screen. Pass null to require manual dismissal. */
    duration?: number | null;
}

interface Toast extends ToastOptions {
    id: number;
    message: string;
    variant: ToastVariant;
    /** Set while the exit animation plays, before the node is removed. */
    leaving?: boolean;
}

const VARIANTS: Record<ToastVariant, {
    Icon: typeof Info;
    edge: string;
    tint: string;
    glow: string;
    role: 'status' | 'alert';
}> = {
    success: { Icon: CheckCircle2,  edge: 'bg-accent',  tint: 'text-accent',  glow: 'shadow-[0_0_28px_-6px_rgba(74,222,128,0.35)]', role: 'status' },
    error:   { Icon: XCircle,       edge: 'bg-error',   tint: 'text-error',   glow: 'shadow-[0_0_28px_-6px_rgba(239,68,68,0.35)]',  role: 'alert'  },
    warning: { Icon: AlertTriangle, edge: 'bg-warning', tint: 'text-warning', glow: 'shadow-[0_0_28px_-6px_rgba(251,191,36,0.3)]',  role: 'alert'  },
    info:    { Icon: Info,          edge: 'bg-info',    tint: 'text-info',    glow: 'shadow-[0_0_28px_-6px_rgba(59,130,246,0.3)]',  role: 'status' },
};

const DEFAULT_DURATION = 5000;
const EXIT_MS = 180;
/** Beyond this, the stack is taller than it is useful. */
const MAX_VISIBLE = 4;

interface ToastApi {
    show: (message: string, variant: ToastVariant, options?: ToastOptions) => number;
    success: (message: string, options?: ToastOptions) => number;
    error: (message: string, options?: ToastOptions) => number;
    warning: (message: string, options?: ToastOptions) => number;
    info: (message: string, options?: ToastOptions) => number;
    dismiss: (id: number) => void;
}

const ToastContext = createContext<ToastApi | null>(null);

export function useToast(): ToastApi {
    const ctx = useContext(ToastContext);
    if (!ctx) throw new Error('useToast must be used within <ToastProvider>');
    return ctx;
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
    const [toasts, setToasts] = useState<Toast[]>([]);
    const mounted = useIsClient();
    const nextId = useRef(1);
    const timers = useRef(new Map<number, ReturnType<typeof setTimeout>>());

    const clearTimer = useCallback((id: number) => {
        const t = timers.current.get(id);
        if (t) {
            clearTimeout(t);
            timers.current.delete(id);
        }
    }, []);

    const dismiss = useCallback((id: number) => {
        clearTimer(id);
        setToasts((prev) => prev.map((t) => (t.id === id ? { ...t, leaving: true } : t)));
        setTimeout(() => {
            setToasts((prev) => prev.filter((t) => t.id !== id));
        }, EXIT_MS);
    }, [clearTimer]);

    const show = useCallback((
        message: string,
        variant: ToastVariant,
        options: ToastOptions = {}
    ) => {
        const id = nextId.current++;
        const duration = options.duration === undefined ? DEFAULT_DURATION : options.duration;

        setToasts((prev) => {
            const next = [...prev, { ...options, id, message, variant, duration }];
            // Drop the oldest rather than letting the stack run off screen.
            return next.length > MAX_VISIBLE ? next.slice(next.length - MAX_VISIBLE) : next;
        });

        if (duration !== null) {
            timers.current.set(id, setTimeout(() => dismiss(id), duration));
        }
        return id;
    }, [dismiss]);

    // Timers outlive the component if a navigation unmounts the provider.
    useEffect(() => {
        const pending = timers.current;
        return () => {
            pending.forEach(clearTimeout);
            pending.clear();
        };
    }, []);

    const api = useMemo<ToastApi>(() => ({
        show,
        success: (m, o) => show(m, 'success', o),
        error: (m, o) => show(m, 'error', o),
        warning: (m, o) => show(m, 'warning', o),
        info: (m, o) => show(m, 'info', o),
        dismiss,
    }), [show, dismiss]);

    return (
        <ToastContext.Provider value={api}>
            {children}
            {mounted && createPortal(
                <div
                    // aria-live on the container, so items announce as they arrive.
                    aria-live="polite"
                    aria-relevant="additions"
                    className="pointer-events-none fixed bottom-0 right-0 z-[100] flex w-full max-w-[26rem] flex-col gap-2.5 p-4 sm:p-6"
                >
                    {toasts.map((t) => (
                        <ToastCard key={t.id} toast={t} onDismiss={dismiss} onPause={clearTimer} />
                    ))}
                </div>,
                document.body
            )}
        </ToastContext.Provider>
    );
}

function ToastCard({
    toast, onDismiss, onPause,
}: {
    toast: Toast;
    onDismiss: (id: number) => void;
    onPause: (id: number) => void;
}) {
    const { Icon, edge, tint, glow, role } = VARIANTS[toast.variant];
    const [paused, setPaused] = useState(false);

    // Reading a long error shouldn't be a race against the timer.
    const handleEnter = () => {
        if (toast.duration !== null) {
            onPause(toast.id);
            setPaused(true);
        }
    };

    return (
        <div
            role={role}
            onMouseEnter={handleEnter}
            className={clsx(
                'pointer-events-auto relative overflow-hidden rounded-xl border border-white/10',
                'bg-[#0b1a14]/95 backdrop-blur-xl',
                glow,
                toast.leaving ? 'animate-toast-out' : 'animate-toast-in'
            )}
        >
            <span className={clsx('absolute inset-y-0 left-0 w-[3px]', edge)} aria-hidden />

            <div className="flex items-start gap-3 py-3.5 pl-5 pr-3">
                <Icon size={17} strokeWidth={2.4} className={clsx('mt-px shrink-0', tint)} />

                <div className="min-w-0 flex-1">
                    <p className="text-[0.875rem] font-semibold leading-snug text-white">
                        {toast.message}
                    </p>
                    {toast.description && (
                        <p className="mt-1 text-[0.8125rem] leading-relaxed text-white/55">
                            {toast.description}
                        </p>
                    )}
                </div>

                <button
                    type="button"
                    onClick={() => onDismiss(toast.id)}
                    aria-label="Dismiss notification"
                    className="-mr-1 shrink-0 rounded-md p-1.5 text-white/35 transition-colors hover:bg-white/10 hover:text-white"
                >
                    <X size={14} />
                </button>
            </div>

            {toast.duration !== null && !toast.leaving && !paused && (
                <span
                    aria-hidden
                    className={clsx('absolute bottom-0 left-0 h-[2px] w-full opacity-40 animate-toast-timer', edge)}
                    style={{ animationDuration: `${toast.duration}ms` }}
                />
            )}
        </div>
    );
}
