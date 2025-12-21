
"use client";

import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Share2, Award, Printer } from 'lucide-react';
import clsx from 'clsx';
import { useLmsStore } from '@/lib/stores/use-lms-store';

interface CertificateModalProps {
    isOpen: boolean;
    onClose: () => void;
    courseTitle: string;
    userName?: string;
    completionDate?: Date;
}

export function CertificateModal({ isOpen, onClose, courseTitle, userName = "EcoFusion Scholar", completionDate = new Date() }: CertificateModalProps) {
    const certificateRef = useRef<HTMLDivElement>(null);

    const handlePrint = () => {
        window.print();
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                />

                {/* Modal Content */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    className="relative w-full max-w-4xl bg-[#0a0f18] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
                >
                    {/* Header Controls */}
                    <div className="flex justify-between items-center p-4 border-b border-white/10 bg-white/5">
                        <h2 className="text-white font-bold flex items-center gap-2">
                            <Award className="text-accent" /> Course Completion
                        </h2>
                        <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                            <X size={20} className="text-white/50" />
                        </button>
                    </div>

                    {/* Certificate Preview */}
                    <div className="flex-1 overflow-y-auto p-8 bg-[#1a1f2e] flex items-center justify-center">
                        <div
                            ref={certificateRef}
                            className="w-full aspect-[1.414/1] bg-white text-black p-12 relative shadow-xl flex flex-col items-center justify-center text-center border-[20px] border-double border-[#1a1f2e]"
                            style={{ backgroundImage: 'radial-gradient(circle at center, #ffffff 0%, #f0f0f0 100%)' }}
                        >
                            {/* Watermark / Background decoration */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
                                <Award size={400} />
                            </div>

                            {/* Corner Accents */}
                            <div className="absolute top-4 left-4 w-16 h-16 border-t-4 border-l-4 border-accent" />
                            <div className="absolute top-4 right-4 w-16 h-16 border-t-4 border-r-4 border-accent" />
                            <div className="absolute bottom-4 left-4 w-16 h-16 border-b-4 border-l-4 border-accent" />
                            <div className="absolute bottom-4 right-4 w-16 h-16 border-b-4 border-r-4 border-accent" />

                            {/* Content */}
                            <div className="relative z-10 space-y-8 max-w-2xl">
                                <div className="space-y-2">
                                    <h1 className="text-5xl font-serif font-bold text-[#1a1f2e] tracking-widest uppercase mb-4">Certificate</h1>
                                    <p className="text-xl font-light tracking-[0.2em] uppercase text-gray-500">of Completion</p>
                                </div>

                                <div className="py-4">
                                    <p className="text-gray-500 italic mb-2">This is to certify that</p>
                                    <h2 className="text-4xl font-serif font-bold text-accent border-b-2 border-accent/20 pb-4 px-8 inline-block min-w-[300px]">
                                        {userName}
                                    </h2>
                                </div>

                                <div>
                                    <p className="text-gray-500 italic mb-2">Has successfully completed the course</p>
                                    <h3 className="text-3xl font-bold text-[#1a1f2e]">{courseTitle}</h3>
                                </div>

                                <div className="pt-8 flex justify-between items-end w-full px-12">
                                    <div className="text-center">
                                        <div className="w-40 border-b border-gray-400 mb-2"></div>
                                        <p className="text-xs uppercase tracking-wider text-gray-500">Date</p>
                                        <p className="font-mono text-sm">{completionDate.toLocaleDateString()}</p>
                                    </div>
                                    <div className="text-center">
                                        {/* Mock Signature */}
                                        <div className="w-40 border-b border-gray-400 mb-2 font-mono text-xl italic text-gray-400 font-bold" style={{ transform: 'rotate(-5deg)' }}>EcoFusion</div>
                                        <p className="text-xs uppercase tracking-wider text-gray-500">Instructor</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="p-6 border-t border-white/10 bg-white/5 flex gap-4 justify-end">
                        <button
                            onClick={handlePrint}
                            className="px-6 py-3 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-colors flex items-center gap-2"
                        >
                            <Printer size={18} /> Print
                        </button>
                        <button className="px-6 py-3 bg-accent text-primary font-bold rounded-xl hover:bg-accent/90 transition-colors flex items-center gap-2">
                            <Download size={18} /> Download PDF
                        </button>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}

// Add print styles to global CSS or a style tag
const printStyles = `
@media print {
    body * {
        visibility: hidden;
    }
    .modal-content, .modal-content * {
        visibility: visible;
    }
    .modal-content {
        position: absolute;
        left: 0;
        top: 0;
    }
}
`;
