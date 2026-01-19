'use client';

import { useState, useEffect, Component, ReactNode } from 'react';
import dynamic from 'next/dynamic';

// Dynamic import to avoid SSR issues with Joyride
const OnboardingTour = dynamic(() => import('./OnboardingTour'), {
    ssr: false,
    loading: () => null,
});

// Error boundary to catch react-joyride errors with React 19
class TourErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
    constructor(props: { children: ReactNode }) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error('Onboarding tour error:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return null; // Silently fail - tour is optional
        }
        return this.props.children;
    }
}

interface OnboardingWrapperProps {
    initialShowTour: boolean;
}

export default function OnboardingWrapper({ initialShowTour }: OnboardingWrapperProps) {
    const [showTour, setShowTour] = useState(initialShowTour);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleComplete = () => {
        setShowTour(false);
    };

    // Don't render until mounted to avoid hydration issues
    if (!mounted) return null;

    return (
        <TourErrorBoundary>
            <OnboardingTour showTour={showTour} onComplete={handleComplete} />
        </TourErrorBoundary>
    );
}
