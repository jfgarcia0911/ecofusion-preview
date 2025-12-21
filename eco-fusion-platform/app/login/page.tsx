
import LoginForm from './login-form';
import { Leaf } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
    return (
        <main className="flex items-center justify-center min-h-screen relative overflow-hidden bg-primary font-sans">
            {/* Background Ambience */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,_var(--color-accent)_0%,_transparent_40%)] opacity-20 blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,_var(--color-secondary)_0%,_transparent_40%)] opacity-20 blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[100px]"></div>
            </div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 z-0 bg-[url('/grid.svg')] opacity-10"></div>

            <div className="relative z-10 w-full max-w-md p-6">
                <div className="glass-card border-white/10 shadow-2xl shadow-black/50 p-8 rounded-3xl backdrop-blur-xl bg-black/40">
                    <div className="flex flex-col items-center mb-8">
                        <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-accent/20">
                            <Leaf className="text-primary" size={24} strokeWidth={2.5} />
                        </div>
                        <h1 className="text-3xl font-bold text-white mb-1">Welcome Back</h1>
                        <p className="text-white/50 text-sm">Sign in to EcoFusion Platform</p>
                    </div>

                    <LoginForm />

                    <div className="mt-8 text-center">
                        <p className="text-xs text-white/30">
                            Don't have an account? <Link href="#" className="text-accent hover:underline">Contact Admin</Link>
                        </p>
                    </div>
                </div>

                <div className="mt-8 text-center text-xs text-white/20">
                    <p>&copy; 2025 EcoFusion Industries. All rights reserved.</p>
                </div>
            </div>
        </main>
    );
}
