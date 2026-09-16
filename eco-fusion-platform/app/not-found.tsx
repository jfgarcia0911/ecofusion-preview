import Link from 'next/link';
import { Leaf } from 'lucide-react';

export default function NotFound() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-primary p-6">
            <div className="text-center max-w-md">
                <div className="w-12 h-12 mx-auto bg-accent rounded-xl flex items-center justify-center mb-4">
                    <Leaf className="text-primary" size={24} strokeWidth={2.5} />
                </div>
                <h1 className="text-3xl font-bold text-white mb-2">Page not found</h1>
                <p className="text-white/50 text-sm mb-6">That address does not lead anywhere in EcoFusion.</p>
                <Link href="/" className="inline-block px-6 py-2.5 bg-accent text-primary font-bold rounded-xl">
                    Go home
                </Link>
            </div>
        </main>
    );
}
