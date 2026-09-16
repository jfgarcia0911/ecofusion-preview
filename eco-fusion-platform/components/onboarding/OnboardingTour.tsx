'use client';

import { useState, useEffect } from 'react';
import { Joyride, STATUS, type EventData, type Step } from 'react-joyride';
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
        skipBeacon: true,
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
        target: '[data-tour="business-switcher"]',
        content: (
            <div>
                <h3 className="font-bold mb-2">Your Business</h3>
                <p>The business these screens are showing. If you can reach more than one, click its name to switch to another.</p>
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
                <p>Your zones and their readings: water temperature, pH, dissolved oxygen, ammonia and humidity. Add a reading, set the limits, and anything outside them raises an alert.</p>
            </div>
        ),
        placement: 'right',
    },
    {
        target: '[data-tour="nav-phases"]',
        content: (
            <div>
                <h3 className="font-bold mb-2">Business Units</h3>
                <p>The silos this business runs - seven to start with, from Aquaculture to Solar - and the revenue each one brings in this month.</p>
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
                <p>The courses assigned to you. Lessons are taken in order, quizzes are marked as you go, and a finished course earns its certification.</p>
            </div>
        ),
        placement: 'right',
    },
    {
        target: '[data-tour="nav-intelligence"]',
        content: (
            <div>
                <h3 className="font-bold mb-2">Intelligence Hub</h3>
                <p>Ask about your own zones and readings in plain words. It can also set or remove alert limits when you ask it to.</p>
            </div>
        ),
        placement: 'right',
    },
    {
        target: '[data-tour="nav-assistant"]',
        content: (
            <div>
                <h3 className="font-bold mb-2">AI Assistant</h3>
                <p>General growing advice, in plain words. It does not see your data - for questions about your own zones, use Intelligence.</p>
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
        target: '[data-tour="nav-scheduling"]',
        content: (
            <div>
                <h3 className="font-bold mb-2">Scheduling</h3>
                <p>The weekly rota, and tasks with a time and a due date. Whoever you assign is told, and sees it under My Schedule.</p>
            </div>
        ),
        placement: 'right',
    },
    {
        target: '[data-tour="nav-training"]',
        content: (
            <div>
                <h3 className="font-bold mb-2">Training Management</h3>
                <p>Decide what your people are trained on. Assign courses, see who has finished which, and export the record when somebody asks for it.</p>
            </div>
        ),
        placement: 'right',
    },
    {
        target: '[data-tour="nav-classes"]',
        content: (
            <div>
                <h3 className="font-bold mb-2">Classes</h3>
                <p>The courses this business holds, and the shop for more - one course at a time or a whole level. Paid for here, and ready to assign as soon as the payment goes through.</p>
            </div>
        ),
        placement: 'right',
    },
    {
        target: '[data-tour="nav-schedules"]',
        content: (
            <div>
                <h3 className="font-bold mb-2">My Schedule</h3>
                <p>The shifts and recurring work assigned to you, and nobody else&apos;s. What you are on for this week.</p>
            </div>
        ),
        placement: 'right',
    },
    {
        target: '[data-tour="nav-tasks"]',
        content: (
            <div>
                <h3 className="font-bold mb-2">Task Manager</h3>
                <p>A shared checklist for the business. Add what needs doing and tick it off when it is done.</p>
            </div>
        ),
        placement: 'right',
    },
    {
        target: '[data-tour="nav-settings"]',
        content: (
            <div>
                <h3 className="font-bold mb-2">Settings</h3>
                <p>Everything that configures rather than runs: your units and password, and for the owner, this business&apos;s billing, business units, integrations and the access record.</p>
            </div>
        ),
        placement: 'right',
    },
    {
        target: '[data-tour="nav-help"]',
        content: (
            <div>
                <h3 className="font-bold mb-2">Help Center</h3>
                <p>How each screen works, what to do when something goes wrong, and how to reach support.</p>
            </div>
        ),
        placement: 'right',
    },
    {
        // Only there for an agency's own team, including the master account
        // every new sign-up becomes.
        target: '[data-tour="nav-agency"]',
        content: (
            <div>
                <h3 className="font-bold mb-2">Agency View</h3>
                <p className="mb-2">Your agency, above its businesses. From here you:</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li><b>Sub Accounts</b> - add businesses for your clients and step into any of them</li>
                    <li><b>Team Access</b> - give your staff the businesses and permissions they need</li>
                    <li><b>Billing</b> - choose your plan before the 14-day trial ends, and connect Stripe so each client business pays you $99 a month</li>
                </ul>
            </div>
        ),
        placement: 'right',
    },
    {
        target: '[data-tour="nav-console"]',
        content: (
            <div>
                <h3 className="font-bold mb-2">EcoFusion Console</h3>
                <p>EcoFusion&apos;s own side of the platform: every agency, their plans and trials, the team, templates and the Access Log.</p>
            </div>
        ),
        placement: 'right',
    },
    {
        target: '[data-tour="header"]',
        content: (
            <div>
                <h3 className="font-bold mb-2">Notifications</h3>
                <p>Notifications land here: readings outside their limits, alerts, new shifts and tasks, and courses assigned to you.</p>
            </div>
        ),
        placement: 'bottom',
    },
    {
        target: '[data-tour="user-menu"]',
        content: (
            <div>
                <h3 className="font-bold mb-2">Your Account</h3>
                <p>Sign out from here. Your units and password are under Settings &rarr; Preferences.</p>
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

/**
 * Bring a sidebar item into view before its step.
 *
 * The sidebar menu scrolls on its own inside a page that does not, and the
 * items from Training Management down sit below its fold on most laptop
 * screens. Rather than leave that to the tour library's general scroll logic,
 * the menu itself is scrolled so the item sits in its middle, and the step
 * opens once that has been painted. Only the menu moves: the page around it is
 * never scrolled, so the header and layout stay where they are.
 */
function revealInSidebar(selector: string): Pick<Step, 'before' | 'skipScroll'> {
    return {
        skipScroll: true,
        before: async () => {
            const item = document.querySelector<HTMLElement>(selector);
            const menu = item?.closest('nav');
            if (!item || !menu) return;
            const itemBox = item.getBoundingClientRect();
            const menuBox = menu.getBoundingClientRect();
            const offset = itemBox.top - menuBox.top - (menuBox.height - itemBox.height) / 2;
            menu.scrollTop += offset;
            await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
        },
    };
}

/**
 * Whether an element is on screen to point at. On a phone the sidebar is a
 * closed drawer - hidden and moved off to the left - and a step aimed at it
 * left the tour waiting with no tooltip and no way on.
 */
function isShown(element: Element | null): boolean {
    if (!element) return false;
    for (let node: Element | null = element; node && node !== document.body; node = node.parentElement) {
        const style = getComputedStyle(node);
        if (style.display === 'none' || style.visibility === 'hidden') return false;
    }
    const box = element.getBoundingClientRect();
    return box.width > 0 && box.height > 0 && box.right > 0 && box.left < window.innerWidth;
}

const sidebarAwareSteps: Step[] = tourSteps.map((step) =>
    typeof step.target === 'string' && step.target.startsWith('[data-tour="nav-')
        ? { ...step, ...revealInSidebar(step.target) }
        : step
);

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
                sidebarAwareSteps.filter(
                    (step) =>
                        typeof step.target !== 'string' ||
                        step.target === 'body' ||
                        isShown(document.querySelector(step.target))
                )
            );
            setRun(true);
        }, 500);
        return () => clearTimeout(timer);
    }, [showTour]);

    const handleEvent = async (data: EventData) => {
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
            scrollToFirstStep
            onEvent={handleEvent}
            // Colours and behaviour live in options since react-joyride 3; the
            // beacon is skipped on every step, and the target stays clickable.
            options={{
                primaryColor: '#00FF9D',
                backgroundColor: '#1a1a2e',
                textColor: '#ffffff',
                arrowColor: '#1a1a2e',
                overlayColor: 'rgba(0, 0, 0, 0.75)',
                zIndex: 10000,
                showProgress: true,
                skipBeacon: true,
                blockTargetInteraction: false,
                spotlightRadius: 12,
                buttons: ['back', 'skip', 'primary'],
            }}
            styles={{
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
                buttonPrimary: {
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
