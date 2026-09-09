'use client';

import { useState, useEffect } from 'react';
import Joyride, { CallBackProps, STATUS, Step } from 'react-joyride';
import { useRouter } from 'next/navigation';

interface OnboardingTourProps {
    showTour: boolean;
    onComplete: () => void;
}

// Tour steps that target elements present for all users
const tourSteps: Step[] = [
    {
        target: 'body',
        content: (
            <div className="text-center">
                <h2 className="text-xl font-bold mb-2">Welcome to EcoFusion!</h2>
                <p>Let&apos;s take a quick tour to help you get started with your integrated farming platform.</p>
            </div>
        ),
        placement: 'center',
        disableBeacon: true,
    },
    {
        target: '[data-tour="sidebar"]',
        content: (
            <div>
                <h3 className="font-bold mb-2">Navigation Sidebar</h3>
                <p>This is your main navigation. Access all platform features from here including dashboards, academy, and business tools.</p>
            </div>
        ),
        placement: 'right',
    },
    {
        target: '[data-tour="nav-executive"]',
        content: (
            <div>
                <h3 className="font-bold mb-2">Executive Dashboard</h3>
                <p>Get a high-level overview of your entire operation - revenue, efficiency metrics, and key performance indicators.</p>
            </div>
        ),
        placement: 'right',
    },
    {
        target: '[data-tour="nav-operations"]',
        content: (
            <div>
                <h3 className="font-bold mb-2">Operations Center</h3>
                <p>Monitor your zones in real-time. Track sensor data, manage aquaculture tanks, hydroponics systems, and more.</p>
            </div>
        ),
        placement: 'right',
    },
    {
        target: '[data-tour="nav-phases"]',
        content: (
            <div>
                <h3 className="font-bold mb-2">Business Units</h3>
                <p>Manage your 7 integrated business silos: Aquaculture, Plant Production, Methane Gas, Bio-Fertilizer, Training, Farm-to-Table, and Solar.</p>
            </div>
        ),
        placement: 'right',
    },
    {
        target: '[data-tour="nav-inventory"]',
        content: (
            <div>
                <h3 className="font-bold mb-2">Inventory</h3>
                <p>Your fish stock, crops, harvests and the parameters you grow to. What is alive on the farm and how it is doing.</p>
            </div>
        ),
        placement: 'right',
    },
    {
        target: '[data-tour="nav-sales"]',
        content: (
            <div>
                <h3 className="font-bold mb-2">Sales</h3>
                <p>Record what you sell and to whom. Stock comes out of inventory as it goes, so the two never disagree.</p>
            </div>
        ),
        placement: 'right',
    },
    {
        target: '[data-tour="nav-academy"]',
        content: (
            <div>
                <h3 className="font-bold mb-2">Academy (LMS)</h3>
                <p>Learn and grow! Access training courses, earn XP, complete certifications, and track your learning progress.</p>
            </div>
        ),
        placement: 'right',
    },
    {
        target: '[data-tour="nav-intelligence"]',
        content: (
            <div>
                <h3 className="font-bold mb-2">Intelligence Hub</h3>
                <p>AI-powered insights and recommendations. Get predictive analytics, optimization suggestions, and smart alerts.</p>
            </div>
        ),
        placement: 'right',
    },
    {
        target: '[data-tour="nav-tasks"]',
        content: (
            <div>
                <h3 className="font-bold mb-2">Task Manager</h3>
                <p>Create, assign, and track tasks. Set priorities, due dates, and keep your team organized.</p>
            </div>
        ),
        placement: 'right',
    },
    {
        target: '[data-tour="nav-employees"]',
        content: (
            <div>
                <h3 className="font-bold mb-2">Employees</h3>
                <p>Everybody who works here: what they do, how to reach them, and whether they have a login. Giving somebody access starts on this screen.</p>
            </div>
        ),
        placement: 'right',
    },
    {
        target: '[data-tour="nav-settings"]',
        content: (
            <div>
                <h3 className="font-bold mb-2">Settings</h3>
                <p>Everything that configures rather than runs: your units and password, the business&apos;s integrations and training, and what your subscription covers.</p>
            </div>
        ),
        placement: 'right',
    },
    {
        target: '[data-tour="nav-help"]',
        content: (
            <div>
                <h3 className="font-bold mb-2">Help Center</h3>
                <p>Access comprehensive documentation, tutorials, and support articles. Find answers to any questions about using EcoFusion.</p>
            </div>
        ),
        placement: 'right',
    },
    {
        target: '[data-tour="header"]',
        content: (
            <div>
                <h3 className="font-bold mb-2">Quick Actions</h3>
                <p>Search across the platform, check notifications, and access your profile settings from the header.</p>
            </div>
        ),
        placement: 'bottom',
    },
    {
        target: '[data-tour="user-menu"]',
        content: (
            <div>
                <h3 className="font-bold mb-2">Your Profile</h3>
                <p>Access your account settings, preferences, and sign out from here.</p>
            </div>
        ),
        placement: 'bottom-end',
    },
    {
        target: 'body',
        content: (
            <div className="text-center">
                <h2 className="text-xl font-bold mb-2">You&apos;re All Set!</h2>
                <p className="mb-2">Start by exploring the Executive Dashboard to see your operation overview.</p>
                <p className="text-sm text-white/70">You can run this tour again whenever you like, from Settings &rarr; Preferences.</p>
            </div>
        ),
        placement: 'center',
    },
];

export default function OnboardingTour({ showTour, onComplete }: OnboardingTourProps) {
    const [run, setRun] = useState(false);
    // Not every step applies to every reader: Employees is on the sidebar for
    // somebody who runs the business and not for somebody who works in it. A
    // step pointing at an element that is not there stalls the tour, so the
    // steps are chosen from what the page actually has once it has mounted.
    const [steps, setSteps] = useState<Step[]>([]);
    const router = useRouter();

    useEffect(() => {
        if (!showTour) return;
        const timer = setTimeout(() => {
            setSteps(
                tourSteps.filter(
                    (step) =>
                        typeof step.target !== 'string' ||
                        step.target === 'body' ||
                        document.querySelector(step.target) !== null
                )
            );
            setRun(true);
        }, 500);
        return () => clearTimeout(timer);
    }, [showTour]);

    const handleCallback = async (data: CallBackProps) => {
        const { status } = data;
        const finishedStatuses: string[] = [STATUS.FINISHED, STATUS.SKIPPED];

        if (finishedStatuses.includes(status)) {
            setRun(false);

            // Mark onboarding as complete
            try {
                await fetch('/api/user/onboarding', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ complete: true }),
                });
            } catch (error) {
                console.error('Failed to save onboarding status:', error);
            }

            onComplete();
            router.refresh();
        }
    };

    if (!showTour) return null;

    return (
        <Joyride
            steps={steps}
            run={run}
            continuous
            showSkipButton
            showProgress
            scrollToFirstStep
            disableScrolling
            spotlightClicks
            callback={handleCallback}
            styles={{
                options: {
                    primaryColor: '#00FF9D',
                    backgroundColor: '#1a1a2e',
                    textColor: '#ffffff',
                    arrowColor: '#1a1a2e',
                    overlayColor: 'rgba(0, 0, 0, 0.75)',
                    zIndex: 10000,
                },
                tooltip: {
                    borderRadius: '12px',
                    padding: '20px',
                },
                tooltipContainer: {
                    textAlign: 'left',
                },
                tooltipTitle: {
                    fontSize: '18px',
                    fontWeight: 'bold',
                },
                tooltipContent: {
                    fontSize: '14px',
                    lineHeight: '1.6',
                },
                buttonNext: {
                    backgroundColor: '#00FF9D',
                    color: '#0a0a0f',
                    borderRadius: '8px',
                    padding: '10px 20px',
                    fontWeight: 'bold',
                },
                buttonBack: {
                    color: '#ffffff',
                    marginRight: '10px',
                },
                buttonSkip: {
                    color: '#ffffff80',
                },
                spotlight: {
                    borderRadius: '12px',
                },
                beacon: {
                    display: 'none',
                },
            }}
            locale={{
                back: 'Back',
                close: 'Close',
                last: 'Get Started!',
                next: 'Next',
                skip: 'Skip Tour',
            }}
        />
    );
}
