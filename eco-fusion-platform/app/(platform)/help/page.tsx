'use client';

import { useState, useMemo } from 'react';
import {
    Search,
    ChevronDown,
    ChevronRight,
    LayoutDashboard,
    Activity,
    Brain,
    Users,
    ClipboardList,
    Layers,
    BookOpen,
    Settings,
    Shield,
    Zap,
    HelpCircle,
    ExternalLink,
    Mail,
    MessageSquare,
    Leaf,
    Database,
    Bell,
    BarChart3,
    Cpu,
    Droplets,
    Sun,
    Utensils,
    GraduationCap,
    FileText,
    Play,
    CheckCircle2,
} from 'lucide-react';

// Version and build info
const BUILD_INFO = {
    version: '1.0.0',
    build: '2024.01.18',
    platform: 'EcoFusion Integrated Platform',
    framework: 'Next.js 16.1.3',
    database: 'PostgreSQL (Supabase)',
    auth: 'NextAuth.js v5',
};

// Help articles organized by category
const HELP_SECTIONS = [
    {
        id: 'getting-started',
        title: 'Getting Started',
        icon: Play,
        articles: [
            {
                id: 'welcome',
                title: 'Welcome to EcoFusion',
                content: `
EcoFusion is an integrated aquaponics management platform that combines aquaculture, hydroponics, and sustainable farming practices into a unified ecosystem.

## What is EcoFusion?

EcoFusion helps you manage and optimize your integrated farming operation through:
- **Real-time monitoring** of all your zones and systems
- **AI-powered intelligence** for predictive insights
- **Comprehensive training** through our Academy
- **Business management** tools for employees and tasks

## Key Benefits

1. **Unified Dashboard** - See everything at a glance
2. **Data-Driven Decisions** - Make informed choices with real-time data
3. **Automated Alerts** - Never miss critical system changes
4. **Team Collaboration** - Manage your entire workforce
5. **Continuous Learning** - Grow your skills with integrated training
                `,
            },
            {
                id: 'first-login',
                title: 'Your First Login',
                content: `
When you first log in to EcoFusion, you'll be greeted with an interactive tour that walks you through all the main features.

## The Onboarding Tour

The tour highlights each section of the platform:
1. **Navigation Sidebar** - Your main menu for all features
2. **Executive Dashboard** - High-level overview
3. **Operations Center** - Real-time monitoring
4. **Business Units** - Your 7 integrated silos
5. **Academy** - Training and certification
6. **Intelligence Hub** - AI insights
7. **Employee Management** - Team tools
8. **Task Manager** - Workflow organization

## Skipping or Restarting the Tour

- Click "Skip Tour" at any time to exit
- The tour only shows once for new accounts
- Contact support to reset your tour if needed

## Next Steps

After the tour, we recommend:
1. Explore the Executive Dashboard
2. Set up your zones in Operations
3. Add your team members
4. Start a training course in the Academy
                `,
            },
            {
                id: 'navigation',
                title: 'Navigating the Platform',
                content: `
EcoFusion uses a consistent layout across all pages for easy navigation.

## Sidebar Navigation

The left sidebar contains links to all major sections:
- **Executive** - Overview dashboard
- **Operations** - Zone monitoring
- **Business Units** - 7 integrated silos
- **Academy (LMS)** - Training courses
- **Intelligence** - AI insights
- **Employees** - Team management
- **Tasks** - Task tracking
- **Help Center** - You are here!

## Header Bar

The top header provides:
- **Search** - Find anything across the platform
- **Notifications** - System alerts and updates
- **Profile Menu** - Account settings and logout

## Keyboard Shortcuts

- \`Ctrl/Cmd + K\` - Open search
- \`Ctrl/Cmd + /\` - Open help
- \`Esc\` - Close modals and menus
                `,
            },
        ],
    },
    {
        id: 'dashboards',
        title: 'Dashboards',
        icon: LayoutDashboard,
        articles: [
            {
                id: 'executive-dashboard',
                title: 'Executive Dashboard',
                content: `
The Executive Dashboard provides a high-level overview of your entire operation.

## Key Metrics

- **Total Revenue** - Combined revenue from all business units
- **Monthly Revenue** - Current month performance
- **Active Zones** - Number of operational zones
- **System Efficiency** - Overall system performance percentage
- **Alert Count** - Active alerts requiring attention

## Revenue Charts

View revenue trends over time with interactive charts:
- Daily, weekly, monthly, and yearly views
- Compare performance across business units
- Export data for reporting

## Quick Actions

From the Executive Dashboard, you can:
- View critical alerts
- Access recent reports
- Navigate to any business unit
- Check system health status

## Customization

The dashboard adapts to your role and permissions, showing the most relevant information for your responsibilities.
                `,
            },
            {
                id: 'operations-dashboard',
                title: 'Operations Center',
                content: `
The Operations Center is your real-time monitoring hub for all zones and systems.

## Zone Management

Each zone represents a distinct area of your operation:
- **Aquaculture Zones** - Fish tanks and water systems
- **Hydroponics Zones** - Plant growing areas
- **Biodigestion Zones** - Waste processing systems
- **Other Zones** - Custom zone types

## Sensor Data

Monitor critical metrics in real-time:
- **Temperature** - Water and air temperature
- **pH Levels** - Acidity/alkalinity balance
- **Dissolved Oxygen** - O2 levels in water
- **Ammonia** - NH3 concentration
- **Humidity** - Air moisture levels

## Zone Status

Each zone displays its current status:
- 🟢 **Active** - Operating normally
- 🟡 **Maintenance** - Scheduled maintenance
- 🔴 **Offline** - Requires attention

## Adding New Zones

1. Click "Add Zone" button
2. Enter zone name and type
3. Configure sensors
4. Set alert thresholds
5. Save and activate
                `,
            },
        ],
    },
    {
        id: 'business-units',
        title: 'Business Units',
        icon: Layers,
        articles: [
            {
                id: 'seven-silos',
                title: 'The 7 Integrated Silos',
                content: `
EcoFusion organizes your operation into 7 interconnected business silos, creating a circular economy.

## 1. Aquaculture 🐟
**Fish and aquatic life production**
- Species management
- Feeding schedules
- Water quality monitoring
- Harvest tracking

## 2. Plant Production 🌱
**Hydroponics and crop growing**
- Crop planning
- Growth tracking
- Nutrient management
- Harvest scheduling

## 3. Methane Gas ⚡
**Biogas production from waste**
- Digester monitoring
- Gas production metrics
- Energy output tracking
- Maintenance schedules

## 4. Bio-Fertilizer 🌿
**Organic fertilizer production**
- Compost processing
- Nutrient analysis
- Distribution tracking
- Quality control

## 5. Training Center 📚
**Education and workforce development**
- Course management
- Certification tracking
- Skill assessments
- Training schedules

## 6. Farm-to-Table 🍽️
**Direct sales and distribution**
- Inventory management
- Order processing
- Customer relationships
- Delivery scheduling

## 7. Solar & Efficiency ☀️
**Energy management and optimization**
- Solar panel monitoring
- Energy consumption
- Efficiency metrics
- Cost savings tracking

## Interconnections

Each silo feeds into others:
- Fish waste → Biodigester → Methane + Fertilizer
- Fertilizer → Plants → Fish food
- Solar → Powers all operations
- Training → Skilled workforce → Better operations
                `,
            },
            {
                id: 'business-metrics',
                title: 'Business Unit Metrics',
                content: `
Each business unit tracks specific KPIs relevant to its operation.

## Common Metrics

All units track:
- **Revenue** - Income generated
- **Costs** - Operating expenses
- **Efficiency** - Performance ratio
- **Output** - Production volume

## Unit-Specific Metrics

### Aquaculture
- Fish population count
- Feed conversion ratio
- Mortality rate
- Growth rate

### Plant Production
- Crop yield per square foot
- Growth cycle duration
- Nutrient consumption
- Harvest weight

### Methane Gas
- Cubic meters produced
- Energy output (kWh)
- Digester temperature
- Retention time

### Bio-Fertilizer
- Tons produced
- Nutrient content (NPK)
- Processing time
- Quality grade

## Viewing Metrics

1. Navigate to Business Units
2. Select a specific silo
3. View dashboard with live metrics
4. Export reports as needed
                `,
            },
        ],
    },
    {
        id: 'academy',
        title: 'Academy (LMS)',
        icon: BookOpen,
        articles: [
            {
                id: 'academy-overview',
                title: 'Academy Overview',
                content: `
The EcoFusion Academy is your integrated Learning Management System (LMS) for continuous education and certification.

## Features

- **Structured Courses** - Organized learning paths
- **Video Lessons** - Visual instruction
- **Quizzes** - Knowledge assessment
- **Certifications** - Verified credentials
- **Progress Tracking** - See your advancement
- **XP System** - Gamified learning rewards

## Course Categories

1. **Aquaculture Fundamentals**
2. **Hydroponics Systems**
3. **Biogas & Energy**
4. **Sustainable Agriculture**
5. **Business Operations**
6. **Safety & Compliance**
7. **Advanced Techniques**

## Getting Started

1. Browse available courses
2. Enroll in courses that interest you
3. Complete lessons in order
4. Pass quizzes to earn XP
5. Finish all modules for certification
                `,
            },
            {
                id: 'xp-system',
                title: 'XP & Achievements',
                content: `
The Academy uses an XP (Experience Points) system to reward your learning progress.

## Earning XP

- **Completing Lessons** - 10-50 XP each
- **Passing Quizzes** - 25-100 XP based on score
- **Finishing Courses** - 200-500 XP bonus
- **Daily Streaks** - Bonus XP for consecutive days
- **Perfect Scores** - Double XP on 100% quiz scores

## Levels

Your total XP determines your level:
- **Beginner** (0-500 XP)
- **Apprentice** (501-1500 XP)
- **Practitioner** (1501-3500 XP)
- **Expert** (3501-7500 XP)
- **Master** (7501+ XP)

## Achievements

Unlock special badges for:
- First course completed
- 7-day learning streak
- Perfect quiz score
- All courses in a category
- Helping other learners

## Leaderboard

Compare your progress with team members on the Academy leaderboard.
                `,
            },
            {
                id: 'certifications',
                title: 'Certifications',
                content: `
Earn official certifications to verify your expertise.

## Available Certifications

- **Certified Aquaculture Technician**
- **Certified Hydroponics Specialist**
- **Certified Biogas Operator**
- **Certified Sustainability Manager**
- **EcoFusion Platform Expert**

## Certification Process

1. Complete all required courses
2. Pass the certification exam (80%+ required)
3. Receive digital certificate
4. Certificate added to your profile
5. Shareable credential link

## Certificate Features

Each certificate includes:
- Unique verification ID
- Issue date
- Expiration date (if applicable)
- QR code for verification
- Downloadable PDF

## Recertification

Some certifications require renewal:
- Complete refresher course
- Pass updated exam
- Maintain continuous learning
                `,
            },
        ],
    },
    {
        id: 'intelligence',
        title: 'Intelligence Hub',
        icon: Brain,
        articles: [
            {
                id: 'ai-insights',
                title: 'AI-Powered Insights',
                content: `
The Intelligence Hub uses artificial intelligence to analyze your data and provide actionable insights.

## How It Works

1. **Data Collection** - Sensors gather real-time data
2. **Analysis** - AI processes patterns and trends
3. **Insights** - Actionable recommendations generated
4. **Alerts** - Critical issues flagged automatically

## Types of Insights

### Predictive
- Harvest timing optimization
- Equipment failure prediction
- Demand forecasting
- Growth rate projections

### Diagnostic
- Root cause analysis
- Performance bottlenecks
- Efficiency gaps
- Resource waste identification

### Prescriptive
- Optimal feeding schedules
- Temperature adjustments
- Nutrient mix recommendations
- Staffing suggestions

## Using Insights

Each insight includes:
- **Priority Level** - High, Medium, Low
- **Impact Score** - Potential benefit
- **Action Steps** - What to do
- **Expected Outcome** - Projected results
                `,
            },
            {
                id: 'reports',
                title: 'Reports & Analytics',
                content: `
Generate comprehensive reports from your data.

## Report Types

- **Daily Operations** - Daily summary
- **Weekly Performance** - Week-over-week comparison
- **Monthly Business** - Financial and operational
- **Quarterly Review** - Strategic analysis
- **Annual Report** - Yearly comprehensive

## Custom Reports

Build custom reports by:
1. Selecting date range
2. Choosing metrics
3. Adding filters
4. Selecting visualization
5. Scheduling delivery

## Export Options

Reports can be exported as:
- PDF documents
- Excel spreadsheets
- CSV data files
- Interactive dashboards

## Scheduled Reports

Set up automatic report delivery:
- Daily email digests
- Weekly summaries
- Monthly stakeholder reports
- Custom schedules
                `,
            },
        ],
    },
    {
        id: 'team',
        title: 'Team Management',
        icon: Users,
        articles: [
            {
                id: 'employees',
                title: 'Employee Management',
                content: `
Manage your team members and their roles within EcoFusion.

## Adding Employees

1. Navigate to Employees
2. Click "Add Employee"
3. Enter employee details:
   - Name
   - Email
   - Role
   - Phone (optional)
4. Set initial status
5. Save

## Employee Roles

Assign appropriate roles:
- **Administrator** - Full system access
- **Manager** - Department oversight
- **Technician** - Operations access
- **Trainee** - Limited access + Academy

## Employee Status

Track workforce availability:
- **Active** - Currently working
- **On Leave** - Temporary absence
- **Inactive** - No longer employed

## Employee Profiles

Each profile shows:
- Contact information
- Assigned zones
- Task history
- Training progress
- Performance metrics
                `,
            },
            {
                id: 'tasks',
                title: 'Task Management',
                content: `
Organize and track work across your operation.

## Creating Tasks

1. Navigate to Tasks
2. Click "Add Task"
3. Enter task details:
   - Description
   - Priority (High/Medium/Low)
   - Due date
   - Assignee (optional)
4. Save task

## Task Priority

Color-coded for quick identification:
- 🔴 **High** - Urgent, do first
- 🟡 **Medium** - Important, schedule soon
- 🟢 **Low** - Can wait

## Task Status

Track progress:
- **Pending** - Not started
- **In Progress** - Being worked on
- **Completed** - Finished

## Task Views

Multiple ways to view tasks:
- **List View** - All tasks in a list
- **Board View** - Kanban-style columns
- **Calendar View** - By due date
- **My Tasks** - Assigned to you
                `,
            },
        ],
    },
    {
        id: 'settings',
        title: 'Settings & Account',
        icon: Settings,
        articles: [
            {
                id: 'account-settings',
                title: 'Account Settings',
                content: `
Manage your personal account settings.

## Profile Information

Update your profile:
- Display name
- Profile picture
- Email address
- Phone number
- Time zone

## Password & Security

- Change password
- Enable two-factor authentication (2FA)
- View login history
- Manage connected devices

## Notification Preferences

Control what notifications you receive:
- Email notifications
- In-app alerts
- Critical system alerts
- Weekly digest emails
- Training reminders

## Connected Accounts

Link external accounts:
- Google (for sign-in)
- Calendar integration
- Email integration
                `,
            },
            {
                id: 'data-privacy',
                title: 'Data & Privacy',
                content: `
Your data security and privacy are important to us.

## Data Storage

- All data stored securely in cloud database
- Encrypted in transit and at rest
- Regular automated backups
- Data centers with physical security

## Your Rights

You have the right to:
- **Access** - View all your data
- **Export** - Download your data
- **Correct** - Fix inaccurate data
- **Delete** - Request data deletion

## Data Retention

- Active account data retained indefinitely
- Deleted accounts purged after 30 days
- Logs retained for 90 days
- Backups retained for 1 year

## Privacy Policy

For full details, view our Privacy Policy in the footer links.
                `,
            },
        ],
    },
    {
        id: 'troubleshooting',
        title: 'Troubleshooting',
        icon: HelpCircle,
        articles: [
            {
                id: 'common-issues',
                title: 'Common Issues',
                content: `
Solutions to frequently encountered problems.

## Login Issues

**Can't log in?**
1. Check email spelling
2. Reset password if forgotten
3. Clear browser cache
4. Try incognito/private mode
5. Contact support if persists

## Page Not Loading

**Blank or stuck pages?**
1. Refresh the page (Ctrl/Cmd + R)
2. Clear browser cache
3. Check internet connection
4. Try different browser
5. Disable browser extensions

## Data Not Saving

**Changes not sticking?**
1. Check internet connection
2. Wait for save confirmation
3. Don't navigate away too quickly
4. Refresh and try again
5. Report if continues

## Sensor Data Missing

**No readings showing?**
1. Check sensor connectivity
2. Verify zone is active
3. Check for maintenance mode
4. Review sensor health in Operations
5. Contact technical support
                `,
            },
            {
                id: 'contact-support',
                title: 'Contact Support',
                content: `
Get help when you need it.

## Support Channels

### Email Support
📧 support@ecofusion.com
Response time: Within 24 hours

### Live Chat
Available in-app during business hours
Monday - Friday, 9am - 5pm EST

### Phone Support
📞 1-800-ECO-FARM
For urgent technical issues

### Knowledge Base
You're reading it! Search for answers here first.

## When Contacting Support

Please include:
1. Your account email
2. Description of the issue
3. Steps to reproduce
4. Screenshots if applicable
5. Browser and device info

## Support Hours

- Email: 24/7 (response within 24h)
- Chat: Mon-Fri 9am-5pm EST
- Phone: Mon-Fri 9am-5pm EST
- Emergency: 24/7 for critical issues
                `,
            },
        ],
    },
];

export default function HelpCenterPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [expandedSections, setExpandedSections] = useState<string[]>(['getting-started']);
    const [selectedArticle, setSelectedArticle] = useState<string | null>('welcome');

    // Filter articles based on search
    const filteredSections = useMemo(() => {
        if (!searchQuery.trim()) return HELP_SECTIONS;

        const query = searchQuery.toLowerCase();
        return HELP_SECTIONS.map(section => ({
            ...section,
            articles: section.articles.filter(
                article =>
                    article.title.toLowerCase().includes(query) ||
                    article.content.toLowerCase().includes(query)
            ),
        })).filter(section => section.articles.length > 0);
    }, [searchQuery]);

    // Find selected article
    const currentArticle = useMemo(() => {
        for (const section of HELP_SECTIONS) {
            const article = section.articles.find(a => a.id === selectedArticle);
            if (article) return { ...article, sectionTitle: section.title };
        }
        return null;
    }, [selectedArticle]);

    const toggleSection = (sectionId: string) => {
        setExpandedSections(prev =>
            prev.includes(sectionId)
                ? prev.filter(id => id !== sectionId)
                : [...prev, sectionId]
        );
    };

    const selectArticle = (articleId: string, sectionId: string) => {
        setSelectedArticle(articleId);
        if (!expandedSections.includes(sectionId)) {
            setExpandedSections(prev => [...prev, sectionId]);
        }
    };

    return (
        <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-xl bg-accent/20">
                        <HelpCircle className="text-accent" size={28} />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold">Help Center</h1>
                        <p className="text-white/50 text-sm">
                            EcoFusion Platform v{BUILD_INFO.version} • Build {BUILD_INFO.build}
                        </p>
                    </div>
                </div>
                <p className="text-white/70 mt-2">
                    Find answers, learn features, and get the most out of your EcoFusion experience.
                </p>
            </div>

            {/* Search Bar */}
            <div className="relative mb-8">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={20} />
                <input
                    type="text"
                    placeholder="Search help articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-black/30 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all text-lg"
                />
                {searchQuery && (
                    <button
                        onClick={() => setSearchQuery('')}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white"
                    >
                        Clear
                    </button>
                )}
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                    { icon: Play, label: 'Getting Started', section: 'getting-started', article: 'welcome' },
                    { icon: LayoutDashboard, label: 'Dashboards', section: 'dashboards', article: 'executive-dashboard' },
                    { icon: BookOpen, label: 'Academy Guide', section: 'academy', article: 'academy-overview' },
                    { icon: MessageSquare, label: 'Contact Support', section: 'troubleshooting', article: 'contact-support' },
                ].map((link) => (
                    <button
                        key={link.label}
                        onClick={() => selectArticle(link.article, link.section)}
                        className="flex items-center gap-3 p-4 rounded-xl bg-black/20 border border-white/10 hover:border-accent/50 hover:bg-black/30 transition-all group"
                    >
                        <link.icon className="text-accent" size={20} />
                        <span className="text-sm font-medium group-hover:text-accent transition-colors">{link.label}</span>
                    </button>
                ))}
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Sidebar - Article List */}
                <div className="lg:col-span-1 space-y-2">
                    <h3 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-3 px-2">
                        Topics
                    </h3>
                    {filteredSections.map((section) => (
                        <div key={section.id} className="rounded-xl overflow-hidden">
                            <button
                                onClick={() => toggleSection(section.id)}
                                className="w-full flex items-center justify-between p-3 bg-black/20 hover:bg-black/30 transition-colors"
                            >
                                <div className="flex items-center gap-2">
                                    <section.icon size={16} className="text-accent" />
                                    <span className="font-medium text-sm">{section.title}</span>
                                </div>
                                {expandedSections.includes(section.id) ? (
                                    <ChevronDown size={16} className="text-white/50" />
                                ) : (
                                    <ChevronRight size={16} className="text-white/50" />
                                )}
                            </button>
                            {expandedSections.includes(section.id) && (
                                <div className="bg-black/10 border-l-2 border-accent/20 ml-4">
                                    {section.articles.map((article) => (
                                        <button
                                            key={article.id}
                                            onClick={() => selectArticle(article.id, section.id)}
                                            className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                                                selectedArticle === article.id
                                                    ? 'text-accent bg-accent/10 border-l-2 border-accent -ml-[2px]'
                                                    : 'text-white/70 hover:text-white hover:bg-white/5'
                                            }`}
                                        >
                                            {article.title}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}

                    {filteredSections.length === 0 && (
                        <div className="text-center py-8 text-white/50">
                            <Search size={32} className="mx-auto mb-2 opacity-50" />
                            <p>No articles found</p>
                            <p className="text-sm">Try a different search term</p>
                        </div>
                    )}
                </div>

                {/* Main Article Content */}
                <div className="lg:col-span-3">
                    <div className="bg-black/20 border border-white/10 rounded-2xl p-8 min-h-[600px]">
                        {currentArticle ? (
                            <>
                                <div className="mb-6 pb-6 border-b border-white/10">
                                    <p className="text-xs text-accent uppercase tracking-wider mb-2">
                                        {currentArticle.sectionTitle}
                                    </p>
                                    <h2 className="text-2xl font-bold">{currentArticle.title}</h2>
                                </div>
                                <div className="prose prose-invert prose-sm max-w-none">
                                    <ArticleContent content={currentArticle.content} />
                                </div>
                            </>
                        ) : (
                            <div className="flex flex-col items-center justify-center h-full text-center">
                                <HelpCircle size={48} className="text-white/20 mb-4" />
                                <p className="text-white/50">Select an article to read</p>
                            </div>
                        )}
                    </div>

                    {/* Version Info Footer */}
                    <div className="mt-6 p-6 bg-black/20 border border-white/10 rounded-xl">
                        <h3 className="font-semibold mb-4 flex items-center gap-2">
                            <Cpu size={18} className="text-accent" />
                            System Information
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                            <div>
                                <p className="text-white/50">Platform</p>
                                <p className="font-medium">{BUILD_INFO.platform}</p>
                            </div>
                            <div>
                                <p className="text-white/50">Version</p>
                                <p className="font-medium">v{BUILD_INFO.version}</p>
                            </div>
                            <div>
                                <p className="text-white/50">Build</p>
                                <p className="font-medium">{BUILD_INFO.build}</p>
                            </div>
                            <div>
                                <p className="text-white/50">Framework</p>
                                <p className="font-medium">{BUILD_INFO.framework}</p>
                            </div>
                            <div>
                                <p className="text-white/50">Database</p>
                                <p className="font-medium">{BUILD_INFO.database}</p>
                            </div>
                            <div>
                                <p className="text-white/50">Authentication</p>
                                <p className="font-medium">{BUILD_INFO.auth}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Component to render markdown-like content
function ArticleContent({ content }: { content: string }) {
    const lines = content.trim().split('\n');

    return (
        <div className="space-y-4">
            {lines.map((line, index) => {
                const trimmedLine = line.trim();

                // Headers
                if (trimmedLine.startsWith('## ')) {
                    return (
                        <h3 key={index} className="text-lg font-bold text-white mt-6 mb-3">
                            {trimmedLine.slice(3)}
                        </h3>
                    );
                }
                if (trimmedLine.startsWith('### ')) {
                    return (
                        <h4 key={index} className="text-base font-semibold text-white/90 mt-4 mb-2">
                            {trimmedLine.slice(4)}
                        </h4>
                    );
                }

                // List items
                if (trimmedLine.startsWith('- ')) {
                    const content = trimmedLine.slice(2);
                    // Check for bold text
                    const boldMatch = content.match(/^\*\*(.+?)\*\*(.*)$/);
                    if (boldMatch) {
                        return (
                            <div key={index} className="flex items-start gap-2 ml-4">
                                <span className="text-accent mt-1">•</span>
                                <p className="text-white/80">
                                    <strong className="text-white">{boldMatch[1]}</strong>
                                    {boldMatch[2]}
                                </p>
                            </div>
                        );
                    }
                    return (
                        <div key={index} className="flex items-start gap-2 ml-4">
                            <span className="text-accent mt-1">•</span>
                            <p className="text-white/80">{content}</p>
                        </div>
                    );
                }

                // Numbered list
                const numberedMatch = trimmedLine.match(/^(\d+)\.\s+(.*)$/);
                if (numberedMatch) {
                    const content = numberedMatch[2];
                    const boldMatch = content.match(/^\*\*(.+?)\*\*(.*)$/);
                    if (boldMatch) {
                        return (
                            <div key={index} className="flex items-start gap-3 ml-4">
                                <span className="text-accent font-medium min-w-[20px]">{numberedMatch[1]}.</span>
                                <p className="text-white/80">
                                    <strong className="text-white">{boldMatch[1]}</strong>
                                    {boldMatch[2]}
                                </p>
                            </div>
                        );
                    }
                    return (
                        <div key={index} className="flex items-start gap-3 ml-4">
                            <span className="text-accent font-medium min-w-[20px]">{numberedMatch[1]}.</span>
                            <p className="text-white/80">{content}</p>
                        </div>
                    );
                }

                // Empty line
                if (!trimmedLine) {
                    return <div key={index} className="h-2" />;
                }

                // Regular paragraph - handle inline code and bold
                let processedContent: React.ReactNode = trimmedLine;

                // Process inline code
                if (trimmedLine.includes('`')) {
                    const parts = trimmedLine.split(/(`[^`]+`)/g);
                    processedContent = parts.map((part, i) => {
                        if (part.startsWith('`') && part.endsWith('`')) {
                            return (
                                <code key={i} className="bg-black/40 px-1.5 py-0.5 rounded text-accent text-sm">
                                    {part.slice(1, -1)}
                                </code>
                            );
                        }
                        return part;
                    });
                }

                return (
                    <p key={index} className="text-white/80 leading-relaxed">
                        {processedContent}
                    </p>
                );
            })}
        </div>
    );
}
