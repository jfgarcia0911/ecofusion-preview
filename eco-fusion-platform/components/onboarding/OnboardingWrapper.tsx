'use client';

import { useState, Component, ReactNode } from 'react';
import dynamic from 'next/dynamic';

// Client-only, and only fetched when the tour is actually shown, so
// react-joyride stays out of the bundle for everybody who has done it.
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

    const handleComplete = () => {
        setShowTour(false);
    };

    // The dynamic import renders nothing on the server and nothing while it
    // loads, so the first client render matches the HTML without a mount gate.
    if (!showTour) return null;

    return (
        <TourErrorBoundary>
            <OnboardingTour showTour={showTour} onComplete={handleComplete} />
        </TourErrorBoundary>
    );
}
