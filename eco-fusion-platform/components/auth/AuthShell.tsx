import { Leaf } from 'lucide-react';

/** The sign-in screens' frame: the same ground and card as the login page. */
export default function AuthShell({
    title,
    subtitle,
    children,
}: {
    title: string;
    subtitle: string;
    children: React.ReactNode;
}) {
    return (
        <main className="flex items-center justify-center min-h-screen relative overflow-hidden bg-primary font-sans">
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,_var(--color-accent)_0%,_transparent_40%)] opacity-20 blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,_var(--color-secondary)_0%,_transparent_40%)] opacity-20 blur-3xl"></div>
            </div>
            <div className="relative z-10 w-full max-w-md p-6">
                <div className="glass-card border-white/10 shadow-2xl shadow-black/50 p-8 rounded-3xl backdrop-blur-xl bg-black/40">
                    <div className="flex flex-col items-center mb-8 text-center">
                        <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-accent/20">
                            <Leaf className="text-primary" size={24} strokeWidth={2.5} />
                        </div>
                        <h1 className="text-3xl font-bold text-white mb-1">{title}</h1>
                        <p className="text-white/50 text-sm">{subtitle}</p>
                    </div>
                    {children}
                </div>
            </div>
        </main>
    );
}
