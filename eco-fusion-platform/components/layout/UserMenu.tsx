'use client';

import { useState, useRef, useEffect } from 'react';
import { logout } from '@/lib/actions';
import { LogOut, User, ChevronDown } from 'lucide-react';
import Image from 'next/image';

interface UserMenuProps {
    user: {
        name?: string | null;
        email?: string | null;
        image?: string | null;
    };
}

export default function UserMenu({ user }: UserMenuProps) {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={menuRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 p-1.5 pr-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
            >
                {user.image ? (
                    <Image
                        src={user.image}
                        alt={user.name || 'User'}
                        width={28}
                        height={28}
                        className="rounded-full"
                    />
                ) : (
                    <div className="w-7 h-7 rounded-full bg-accent/20 flex items-center justify-center">
                        <User size={14} className="text-accent" />
                    </div>
                )}
                <span className="text-sm text-white/70 max-w-[120px] truncate">
                    {user.name || user.email?.split('@')[0]}
                </span>
                <ChevronDown size={14} className={`text-white/50 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-xl bg-black/90 backdrop-blur-xl border border-white/10 shadow-xl shadow-black/50 py-2 z-50">
                    <div className="px-4 py-3 border-b border-white/10">
                        <p className="text-sm font-medium text-white truncate">{user.name}</p>
                        <p className="text-xs text-white/50 truncate">{user.email}</p>
                    </div>
                    <form action={logout} className="py-1">
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-left text-sm text-white/70 hover:text-white hover:bg-white/5 flex items-center gap-2 transition-colors"
                        >
                            <LogOut size={14} />
                            Sign out
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}
