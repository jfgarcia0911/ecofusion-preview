'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Dynamic import to avoid SSR issues with Joyride
const OnboardingTour = dynamic(() => import('./OnboardingTour'), {
    ssr: false,
});

interface OnboardingWrapperProps {
    initialShowTour: boolean;
}

export default function OnboardingWrapper({ initialShowTour }: OnboardingWrapperProps) {
    const [showTour, setShowTour] = useState(initialShowTour);

    const handleComplete = () => {
        setShowTour(false);
    };

    return <OnboardingTour showTour={showTour} onComplete={handleComplete} />;
}
