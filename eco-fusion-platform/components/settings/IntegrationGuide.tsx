/**
 * The two panels under the CRM card on Settings → Integrations. They never
 * change, so the page and its loading skeleton draw the same component and the
 * handover between them moves nothing.
 */

const STEPS = [
    "Log in to your Satistio/Go HighLevel account",
    "Navigate to Settings → API Keys and generate a new key",
    "Copy your Location ID from Settings → Business Info",
    "Paste both values above and click Save Settings",
    "Test the connection to verify everything is working",
];

const FEATURES = [
    { title: "Sync Customers", text: "Automatically sync customer data from sales to your CRM" },
    { title: "Search Contacts", text: "Look up existing CRM contacts when creating sales" },
    { title: "Create Opportunities", text: "Record sales as opportunities in your CRM pipeline" },
    { title: "Add Contacts", text: "Create new CRM contacts directly from this platform" },
];

export function IntegrationSetupGuide() {
    return (
        <div className="glass-card p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Setup Guide</h3>
            <ol className="space-y-3 text-white/70">
                {STEPS.map((step, index) => (
                    <li key={step} className="flex gap-3">
                        <span className="w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center text-sm font-medium shrink-0">
                            {index + 1}
                        </span>
                        <span>{step}</span>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export function IntegrationFeatures() {
    return (
        <div className="glass-card p-6">
            <h3 className="text-lg font-semibold text-white mb-4">What You Can Do</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {FEATURES.map((feature) => (
                    <div key={feature.title} className="p-4 bg-white/5 rounded-lg">
                        <div className="font-medium text-white mb-1">{feature.title}</div>
                        <div className="text-sm text-white/50">{feature.text}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
