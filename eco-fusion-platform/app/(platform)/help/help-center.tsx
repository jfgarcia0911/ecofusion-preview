'use client';

import { useState, type ReactNode } from 'react';
import {
    Search,
    ChevronDown,
    ChevronRight,
    LayoutDashboard,
    Brain,
    Users,
    Layers,
    BookOpen,
    Settings,
    Shield,
    HelpCircle,
    MessageSquare,
    Cpu,
    Play,
} from 'lucide-react';

// Version and build info
const BUILD_INFO = {
    version: '1.0.0',
    build: '2026.09.11',
    platform: 'EcoFusion Integrated Platform',
    framework: 'Next.js 16.1.3',
    database: 'PostgreSQL (Supabase)',
    auth: 'NextAuth.js v5',
};

interface Article {
    id: string;
    title: string;
    content: string;
}

interface Section {
    id: string;
    title: string;
    icon: typeof Play;
    /** Shown to EcoFusion's own accounts only. Customers have no agency view. */
    staffOnly?: boolean;
    articles: Article[];
}

/*
 * Every article describes the screen as it is. Where something is not built
 * yet, it is left out rather than promised: an article that describes a
 * button which does nothing sends the reader looking for a fault that is ours.
 */
const HELP_SECTIONS: Section[] = [
    {
        id: 'getting-started',
        title: 'Getting Started',
        icon: Play,
        articles: [
            {
                id: 'welcome',
                title: 'Welcome to EcoFusion',
                content: `
EcoFusion runs an integrated farm in one place: the fish and the crops, the readings from each zone, what you harvest and sell, the people who work there, and the training they need.

## What you can do

- **Watch your zones** - add readings for water temperature, pH, dissolved oxygen, ammonia and humidity, set limits, and get an alert when a reading goes outside them
- **Keep stock** - fish, crops and harvests, and the products you have for sale
- **Record sales** - stock comes out as you sell, and revenue is counted against each business unit
- **Run your team** - employees, logins, a weekly rota and tasks
- **Train your people** - buy courses in **Classes**, assign them in **Training Management**, and your people take them in the **Academy**
- **Ask questions** - **Intelligence** answers questions about your own zones; the **AI Assistant** gives general growing advice

## One business per account

Each owner runs one business. Its name is shown at the top of the sidebar, under the EcoFusion logo, so you always know whose farm you are looking at.
                `,
            },
            {
                id: 'signing-up',
                title: 'Signing Up and Your Trial',
                content: `
## Creating an account

1. Open the sign-up page
2. Enter your **Company Name** first - this becomes the name of your business
3. Add your full name, email and a password, then confirm the password
4. Or choose **Continue with Google** instead of a password

You are signed in straight away and land on the Executive dashboard.

## What you get

- A business, with you as its **owner**
- A **15-day free trial**
- Seven business units to start from, which you can change in **Settings → Business Units**

To rename your business later, email EcoFusion support at support@llayd.com.

## Passwords

A password needs at least 10 characters, with upper and lower case letters, a number and a symbol. If you signed up with Google, you sign in with Google and have no EcoFusion password.

## When the trial ends

A banner counts the trial down and turns amber in its last 5 days. See **Settings & Account → Billing and Your Trial** for what happens next.
                `,
            },
            {
                id: 'first-login',
                title: 'Your First Login',
                content: `
The first time you sign in, a short walkthrough opens and points at each part of the sidebar in turn.

## What the tour covers

It walks the sidebar from top to bottom, in the order you see it:

1. **The sidebar** - everything you can reach, in one column
2. **Executive** - the whole operation on one screen
3. **Operations** - your zones, their readings and their alerts
4. **Business Units** - the silos this business runs
5. **Inventory** - fish, crops, harvests and what you have for sale
6. **Sales** - what you sold, to whom, and which unit it counts for
7. **Academy** - the courses assigned to you
8. **Intelligence** - questions about your own zones
9. **AI Assistant** - general growing advice
10. **Employees** - your people, and who has a login
11. **Scheduling** - the weekly rota and assigned tasks
12. **Training Management** - assign courses and keep the record
13. **Classes** - the courses your business holds, and the shop for more
14. **Tasks** - a shared checklist
15. **Settings** - your account, and how this business is configured
16. **Help Center** - this
17. **The header** - your notifications
18. **Your account menu** - signing out

Steps for screens you cannot open are left out rather than shown and skipped, so the tour is only as long as the sidebar you actually have. Training Management and Classes are the owner's. Supervisors and managers see Employees and Scheduling. Everybody else sees **My Schedule** instead of those.

## Skipping and running it again

- **Skip tour** closes it at any point
- It opens by itself only once, when an account is new
- **Settings → Preferences → Run the tour** opens it again, as often as you like

## What to do next

1. Set your zones up under **Operations** and add a first reading
2. Add your people under **Employees**, and give a login to anybody who needs one
3. Pick courses in **Classes** and assign them in **Training Management**
4. Record a sale, so the Executive dashboard has something to show
                `,
            },
            {
                id: 'navigation',
                title: 'Navigating the Platform',
                content: `
Every page uses the same layout: the sidebar on the left, the header across the top, and the screen you asked for in the middle.

## The sidebar

Everybody sees these:

- **Executive** - the overview
- **Operations** - zones, readings and alerts
- **Business Units** - the silos this business runs
- **Inventory** - fish, crops, harvests and products for sale
- **Sales** - sales, customers and history
- **Academy (LMS)** - your courses
- **Intelligence** - questions about your own data
- **AI Assistant** - general growing advice
- **Tasks** - a shared checklist
- **Settings** - your account, and this business
- **Help Center** - this

Depending on your role, some of these appear too:

- **Employees** and **Scheduling** - for the owner, supervisors and managers
- **Training Management** and **Classes** - for the owner
- **My Schedule** - for everybody else, showing their own shifts and tasks

## The header

- **Notifications** - the bell shows your latest 10. Click one to open what it is about, or mark them read
- **Your account** - the menu at the top right, for signing out

## Settings

Clicking **Settings** turns the sidebar into the settings menu until you leave. It is split by how far each setting reaches: **Your account** follows you wherever you sign in, and the section named after your business stops there. See **Settings & Account → Settings Overview**.

## Moving around

- **Esc** closes an open dialog or menu
- The sidebar is always there; you never need the back button to change section
                `,
            },
        ],
    },
    {
        id: 'dashboards',
        title: 'Dashboards & Operations',
        icon: LayoutDashboard,
        articles: [
            {
                id: 'executive-dashboard',
                title: 'Executive Dashboard',
                content: `
The Executive dashboard is the first screen after you sign in: the state of the operation, on one page.

## The four cards

- **Total Revenue** - everything sold, with the change against last month
- **Monthly Yield** - what has been harvested this month
- **System Efficiency** - how many of your zones have recent readings
- **Active Alerts** - how many alerts are open, or "all clear"

## Revenue Trend

A chart of revenue over the last six months.

## Critical Alerts

The five most recent open alerts. Click one to open it, then:

- **Acknowledge** - you have seen it
- **Assign to Employee** - hand it to somebody
- **Mark as Resolved** - close it, with a note of what was done

The dashboard refreshes itself every minute.
                `,
            },
            {
                id: 'operations-dashboard',
                title: 'Operations and Readings',
                content: `
Operations shows each zone of the farm and its latest readings.

## Readings

Each zone has five readings:

- **Water temperature** - shown as a warning outside 18-30°C
- **pH** - a warning outside 6.5-7.5
- **Dissolved oxygen** - a warning below 6
- **Ammonia** - a warning above 0.05
- **Humidity** - a warning below 40

## Adding a reading

Readings are entered by hand. Click **Add Reading** on a zone and fill in any of the five. EcoFusion does not yet take readings from sensors directly.

The page refreshes every 30 seconds, and the refresh button fetches the latest at once, so a reading somebody else adds shows up without reloading.

## Zone status

- **Active** - working normally
- **Maintenance** - being worked on
- **Offline** - out of use

A zone in maintenance or offline is marked, with a note that its readings may be old.

## Adding a zone

1. Click **Add Zone**
2. Give it a name and a status
3. Click **Create Zone**
                `,
            },
            {
                id: 'zone-alerts',
                title: 'Limits and Alerts',
                content: `
You decide what counts as a problem in each zone.

## Setting limits

1. Open a zone's settings from Operations
2. For each of the five readings, set a **Min** and a **Max**
3. Switch the limit **on**, and choose how serious a breach is: **Info**, **Warning** or **Critical**

Changes save as you make them. Limits start switched off, so nothing alerts until you set one.

You can also ask **Intelligence** to set or remove a limit for you, in plain words.

## When a reading breaks a limit

- An **alert** opens for that reading - one at a time per reading, so a run of bad readings does not bury you
- A **notification** is sent to whoever entered the reading
- The alert shows on the Executive dashboard until somebody resolves it
                `,
            },
        ],
    },
    {
        id: 'farm',
        title: 'Units, Inventory & Sales',
        icon: Layers,
        articles: [
            {
                id: 'seven-silos',
                title: 'Business Units',
                content: `
Business units are the silos your farm is organised into. Every business starts with seven:

1. **Aquaculture** - fish and aquatic life
2. **Plant Production** - hydroponics and crops
3. **Methane Gas** - biogas from waste
4. **Bio-Fertilizer** - organic fertiliser
5. **Training Center** - education and workforce development
6. **Farm-to-Table** - direct sales and distribution
7. **Solar & Efficiency** - energy

They feed each other: fish waste goes to the digester, the digester gives methane and fertiliser, the fertiliser feeds the plants, and solar powers the lot.

## The Business Units screen

Each unit shows the revenue it has brought in this month. If some of this month's sales could not be matched to a unit, an amber banner says how much.

Open a unit to see:

- **Revenue Performance** - this month, week by week
- **Efficiency** - drawn from tasks done, alerts resolved, and sales and harvests
- **Tasks** - add a task for the unit, with an employee if you like, and tick it off
- **Settings** - a monthly budget, a revenue target and notes

## Changing your units

The owner can add, rename, reorder, retire or delete units in **Settings → Business Units**. A unit can only be deleted when nothing refers to it; retire it instead to keep its history.
                `,
            },
            {
                id: 'inventory',
                title: 'Inventory',
                content: `
Inventory holds what is alive on the farm, what has come off it, and what you have to sell.

## Fish

Each batch has its zone, species, quantity, average weight, age and expected harvest date. **Log Growth** records its weight, any losses and the feed given.

## Plants

Each crop has its zone, crop and variety, quantity, location, and planted and expected harvest dates. Growth logs record height, a health score from 1 to 10, and losses.

## Harvests

Record what came off, from which batch, how much, its grade (A, B or C) and where it went:

- **Inventory** - kept; tick **Add to Sales Inventory** and set a price to put it up for sale
- **Direct Sale** - sold straight away
- **Waste** - not usable

## Parameters

Growth templates: days to harvest, target weight, temperature and pH, and the yield you expect.

## Sales Inventory

The products you have for sale, with their quantity and price. Filter by available, reserved, sold or expired.
                `,
            },
            {
                id: 'sales',
                title: 'Sales and Revenue by Unit',
                content: `
## Recording a sale

Add a sale with its customer and one line per product. A line can be:

- **A product from Sales Inventory** - its quantity comes out of stock as you sell. You cannot sell more than you have, and a product that reaches zero is marked sold
- **A custom item** - anything else. It does not touch stock

Deleting a sale puts its stock back.

## Which business unit a sale counts for

Each line has a **Business Unit**. Left on **Auto**, EcoFusion matches the product name against each unit's keywords and uses the first that fits. A line that matches nothing is counted as **Unassigned**.

For figures you can rely on, pick the unit yourself. Keywords are set per unit in **Settings → Business Units**.

## The Sales screen

- Totals at the top
- **Revenue by business unit** - every unit's share of all sales, largest first, with Unassigned at the bottom
- Recent sales, and **Export** as CSV

## History

Filter past sales by status, business unit and date. A sale counts for a unit when any of its lines does. **Export CSV** uses the date range you have chosen.

## Customers

Built from your sales: each customer's orders, what they have spent and when they last bought. If a CRM is connected under Integrations, you can add a customer to it from here.
                `,
            },
        ],
    },
    {
        id: 'intelligence',
        title: 'Intelligence & AI',
        icon: Brain,
        articles: [
            {
                id: 'ai-insights',
                title: 'Intelligence',
                content: `
Intelligence answers questions about your own farm, in plain words.

## What it can see

Your zones and their readings, your fish and crops, your growth templates, and the limits you have set. It does not see sales or harvests.

## What to ask

- "Which zones have had a pH problem this week?"
- "Is the ammonia in tank two trending up?"
- "Set a warning if dissolved oxygen in the nursery drops below 5"

It can set or remove alert limits when you ask, and those changes are real: they show on the zone's settings straight away.

Answers come from Google Gemini. Check anything important before acting on it.
                `,
            },
            {
                id: 'assistant',
                title: 'AI Assistant',
                content: `
The AI Assistant gives general advice on aquaponics, aquaculture and growing - the kind of question you would put to an experienced grower.

## What it does not do

- It does **not** see your data. For questions about your own zones and readings, use **Intelligence**
- Conversations are not saved. Leaving the page starts a fresh one

Answers come from Google Gemini. Check anything important before acting on it.
                `,
            },
        ],
    },
    {
        id: 'academy',
        title: 'Academy & Training',
        icon: BookOpen,
        articles: [
            {
                id: 'academy-overview',
                title: 'The Academy',
                content: `
The Academy is where you take the courses assigned to you.

## How a course reaches you

1. Your business gets the course - the owner buys it in **Classes**, or EcoFusion gives it
2. The owner assigns it to you in **Training Management**
3. It appears in your Academy, and you get a notification

If your Academy is empty, nothing has been assigned to you yet. Ask your owner.

## The Academy screen

- **Assigned**, **Completed**, **In Progress** and your **Completion Rate**
- **Continue Learning** - the courses you have started
- The **Assigned** and **Completed** tabs
- **Export My Records** - your training record as a CSV file

## Inside a course

The list of lessons is on the left and the lesson on the right. Some courses have a **Course resources** button with the syllabus, handouts, cheatsheets and reference material. Resources are there to read and do not count towards finishing the course.
                `,
            },
            {
                id: 'lessons-quizzes',
                title: 'Lessons and Quizzes',
                content: `
## Lessons are taken in order

You can open every lesson you have finished, and the one you are up to. Lessons after that are **locked** until the ones before them are done - hover over a locked lesson to see why.

Finish a lesson with **Complete & Continue**. The next one opens at its top.

## Quizzes

- Answer every question, then **Submit Answers**
- You need the course's pass mark, usually **80%**
- **Pass** - the quiz counts as done, and you see the right answers with an explanation for each
- **Not passed** - the questions you missed are marked, but the right answers are not shown. Review the lesson and choose **Try Again**. There is no limit on attempts

Nothing is recorded for an attempt that did not pass.
                `,
            },
            {
                id: 'certifications',
                title: 'Finishing a Course',
                content: `
When you finish the last lesson, a **Certification Earned** window opens with the course and your final score. Choose **Review course** to look back through it, or **Back to Academy**.

## Your score

The average of your quiz scores in that course.

## Your certificate

Each completion is given a certificate ID. It shows on the course in your **Completed** tab, and in your exported records.

## Renewal

Some courses have to be renewed every so many days:

- From 30 days before it runs out, the course is marked **Expiring soon**, with a **Renew Certification** button
- Once it has run out, it shows **Retake Course**
                `,
            },
            {
                id: 'classes',
                title: 'Classes: Buying Courses',
                content: `
**Classes** is where the owner chooses which courses the business holds. Only courses your business holds can be assigned.

## Your courses

Everything the business already holds, each marked **Bought**, **Free** or **Gift from EcoFusion**.

## The course shop

Courses are grouped by level, with a search box.

- Add a course to your basket one at a time
- Or **Buy whole level** where a level has a package price
- If you already hold part of a level, you pay whichever is less: the package price, or the rest of the courses one by one
- **Package only** means that course is sold as part of its level
- Free courses are added straight away

## Paying

The basket sits at the bottom of the screen with its total. Click **Buy** to pay by card without leaving EcoFusion. **Back to shop** keeps your basket; **Cancel purchase** ends it.

- **Card payments** - the courses unlock as soon as the payment goes through
- **Bank transfers** and other slower payments - the courses unlock when the money arrives

Your purchase history shows each purchase, who made it, and whether it was paid or refunded. A full refund removes the courses it paid for.
                `,
            },
            {
                id: 'training-management',
                title: 'Training Management',
                content: `
Training Management is where the owner decides who is trained on what, and keeps the record.

## The screen

- Totals: courses, required courses, employees, and certifications issued
- Your people, with a search box. Select somebody to see every course assigned to them: status, due date, progress, score, expiry and certificate ID
- **Export Records** - the selected person's training record as a CSV file
- The course list, with how many people each is assigned to and has been finished by

## Assigning a course

1. Select a person
2. Click **Assign Course**
3. Pick the course - ones they already have are greyed out
4. Set a due date and a priority (Low, Normal, High or Urgent) if you want to
5. Assign. They get a notification

**Bulk Assign Courses** gives several courses to several people in one go.

## Good to know

- Only courses your business holds can be assigned. Get more in **Classes**
- A course can be taken off somebody with **Remove Assignment** until they finish it
- Whether a course is required, and how often it renews, is set by EcoFusion on the course
                `,
            },
        ],
    },
    {
        id: 'team',
        title: 'Your Team',
        icon: Users,
        articles: [
            {
                id: 'employees',
                title: 'Employees and Logins',
                content: `
**Employees** lists everybody who works in the business, whether or not they use EcoFusion.

## Adding somebody

1. Click **Add Employee**
2. Enter their name, job title and email, and a phone number if you like
3. Save

## Giving them a login

1. Find them and click **Create login**
2. Choose their access: **Member**, **Manager** or **Supervisor**
3. Set a temporary password and give it to them yourself - EcoFusion does not email it

**Manage login** changes their access later, or sets a new password if they have forgotten theirs.

## Who has been in

Each person shows when they were last here: **No login**, **Login never used**, **Here today**, **Here yesterday**, or how long ago.

Opening somebody shows their weekly shifts, their training, and the sales they have recorded.
                `,
            },
            {
                id: 'roles',
                title: 'Roles and What They Can Do',
                content: `
Every login has a role in the business.

## Owner

The person the business belongs to. Everything below, plus:

- **Billing** and the subscription
- **Classes** - buying courses
- **Training Management** - assigning courses
- **Settings** for the business: business units, integrations and the access record
- Changing or removing a supervisor

There is one owner per business. Only EcoFusion can hand ownership to somebody else.

## Supervisor

- **Employees** - add people, give logins, change access and reset passwords
- **Scheduling** - the rota and assigned tasks

## Manager

- **Employees** and **Scheduling**, without any say over logins

## Member

- The everyday screens, the Academy, and **My Schedule** for their own shifts and tasks

## EcoFusion support

EcoFusion staff can open your business to help you. Every visit, and everything they change, is written to your **Access Record** under Settings.
                `,
            },
            {
                id: 'scheduling',
                title: 'Scheduling and My Schedule',
                content: `
## Scheduling

For the owner, supervisors and managers. Two tabs:

### Weekly Schedules

A week from Sunday to Saturday. Each shift has a person, a title, the day, start and end times, a location and a colour. Only people with a login can be scheduled. A shift can be deleted but not edited - delete it and add it again.

### Assigned Tasks

A task with a description, a time, a due date and a priority: **Low**, **Medium** or **High**. It moves through **pending**, **in progress** and **completed**, or becomes **overdue**.

Whoever you schedule or assign is sent a notification.

## My Schedule

What everybody else sees, showing only their own:

- **Today** and **Week** - their shifts
- **Tasks** - their assigned tasks. **Start Task** when they begin and **Mark Complete** when they are done

With My Schedule open, the browser reminds you 30 minutes before a task is due.
                `,
            },
            {
                id: 'tasks',
                title: 'Tasks',
                content: `
**Tasks** is a shared checklist for the whole business.

- Type what needs doing and add it
- Tick it off when it is done
- Delete it when it no longer matters

Tasks added on a business unit's page appear here too.

For work with a time, a due date and a person responsible, use **Scheduling → Assigned Tasks** instead.
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
                id: 'settings-overview',
                title: 'Settings Overview',
                content: `
**Settings** gathers everything that configures rather than runs. It is split by how far each setting reaches.

## Your account

Follows you wherever you sign in.

- **Preferences** - units, the tour, and your password. Everybody has this
- **Billing** - the subscription. The owner's

## Your business

Listed under your business's name, and stops there. All three are the owner's.

- **Business Units** - the silos this business runs, and the keywords that send sales to each
- **Integrations** - connect your CRM
- **Access Record** - who has been in the business, and what they changed

Anything you cannot open is not listed at all.
                `,
            },
            {
                id: 'account-settings',
                title: 'Preferences and Password',
                content: `
## Units

- **Temperature** - °C or °F
- **Weight** - metric (g, kg) or imperial (oz, lb)

Units are kept in the browser you set them in. On another computer or phone, set them again.

## The welcome tour

**Run the tour** walks you through the sidebar again, as often as you like.

## Changing your password

Enter your current password, then the new one twice. It needs at least 10 characters, with upper and lower case letters, a number and a symbol.

If you sign in with Google, you have no EcoFusion password to change.

## Forgotten your password?

Ask your owner or a supervisor to set a new one from **Employees → Manage login**. If you are the owner, email support@llayd.com.
                `,
            },
            {
                id: 'billing',
                title: 'Billing and Your Trial',
                content: `
Billing is the owner's, under **Settings → Billing**.

## The trial

Every new business has **15 days** free. A banner counts down, and turns amber in the last 5 days.

## Subscribing

Click **Subscribe** and pay by card. Your trial ends and the subscription starts at once. Only the owner can subscribe.

## If the trial ends, or a payment fails

The business is **paused** for everybody in it until the owner subscribes. Nothing is deleted - subscribing brings everything back as it was.

## Changing your card, or cancelling

Email support@llayd.com.

## Courses

Courses are paid for separately, in **Classes**. See **Academy & Training → Classes: Buying Courses**.
                `,
            },
            {
                id: 'integrations',
                title: 'Integrations',
                content: `
**Settings → Integrations** connects your business to the systems it already uses. It is the owner's.

## Satistio CRM

Connects EcoFusion to your Go HighLevel account, so customers and sales reach your CRM.

1. Enter your **API key** and **Location ID**
2. Turn the integration on
3. **Test Connection** to check it works
4. **Sync Now** sends any sales that have not gone yet

Remove it at any time. Your key is stored encrypted.
                `,
            },
            {
                id: 'access-record',
                title: 'Access Record',
                content: `
**Settings → Access Record** shows who has been in your business, and what they did. It is the owner's.

## What it lists

- Your own people signing in and making changes
- EcoFusion staff **opening** and **leaving** your business
- Every change EcoFusion staff made, and anything they tried that was refused

Each line says who, what and when, and is marked **Your team** or **EcoFusion**.

## Good to know

- Nobody can edit or delete a line, including EcoFusion
- The 200 most recent entries are shown
                `,
            },
            {
                id: 'data-privacy',
                title: 'Data and Privacy',
                content: `
## Where your data is kept

In a hosted PostgreSQL database. Every connection to EcoFusion is encrypted, and keys for connected systems are stored encrypted.

## Who can see it

- **Your people** - according to their role in the business
- **EcoFusion staff** - only to help you, and every visit is written to your **Access Record**

## Taking your data with you

- **Sales** - Export as CSV from Sales
- **Training** - Export Records from Training Management, or Export My Records from the Academy

For anything else - a full copy of your data, or deleting it - email support@llayd.com.
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
## I can't sign in

1. Check the email for spelling
2. If you signed up with Google, use **Continue with Google**
3. Forgotten your password? Ask your owner or a supervisor to set a new one. Owners, email support@llayd.com
4. Too many attempts in a row are blocked for a minute - wait, then try again

## Everything says access is paused

The trial has ended or a payment failed. The owner can subscribe under **Settings → Billing**; nothing has been deleted.

## A screen in this guide is not in my sidebar

It belongs to another role. See **Your Team → Roles and What They Can Do**.

## A lesson is locked

Lessons are taken in order. Finish the one you are up to and the next unlocks.

## My Academy is empty

Nothing has been assigned to you yet. Courses are assigned by the owner in Training Management.

## No readings are showing

Readings are entered by hand with **Add Reading**. Check the zone is not in maintenance or offline.

## Sales show as Unassigned

The product name matched no business unit's keywords. Pick the unit on each sale line, or add keywords in **Settings → Business Units**.

## A page is blank or stuck

1. Refresh the page
2. Check your internet connection
3. Try another browser, or a private window
                `,
            },
            {
                id: 'contact-support',
                title: 'Contact Support',
                content: `
## Email

support@llayd.com

## What to include

1. The email you sign in with, and your business's name
2. What you were trying to do
3. What happened instead, and any message on screen
4. A screenshot, if you can
5. Your browser and device

EcoFusion support may open your business to look into it. Every visit is written to your **Access Record**.
                `,
            },
        ],
    },
    {
        id: 'staff',
        title: 'For EcoFusion Staff',
        icon: Shield,
        staffOnly: true,
        articles: [
            {
                id: 'agency-view',
                title: 'The Agency View',
                content: `
The agency view is EcoFusion's own side of the platform. Reach it from **Agency** in the sidebar, or **Switch to Agency View** in the business switcher.

What you can do in it depends on the permissions the master account has given you. Screens and buttons you cannot use are not shown.

## Sub Accounts

Every business you can reach - all of them for the master account, the ones granted to you otherwise. Each row shows its **Status** (Active, Trial with days left, or Inactive), owner, location and how many people it has, with:

- **Edit** - rename the business
- **Capture** - save its setup as a snapshot
- **Enter** - open it

**Create Sub Account** makes a new business: its name and location, and its owner's name and email.

## Course Prices

The price of each course and each level's package. An empty price means not for sale; 0 means free.

## Snapshots

Saved setups - business units, zones with their limits, and growing parameters. Mark one as the default for new businesses, or apply one to an existing business. Applying adds to its setup; it does not copy stock, sales, readings, training or people.

## Access Log

Everything EcoFusion staff have done, across every business.
                `,
            },
            {
                id: 'entering-business',
                title: 'Working Inside a Business',
                content: `
## Entering

Click **Enter** on Sub Accounts and confirm, or pick the business from the switcher at the top of the sidebar.

## While you are in

- The business's owner sees your visit, and every change you make, in their **Access Record**
- What you can change depends on your permissions. Without permission to make changes, you can look but not edit
- You have no training record of your own, and cannot be assigned courses

## Leaving

Open the switcher and choose **Leave**, or **Switch to Agency View**.
                `,
            },
            {
                id: 'team-access',
                title: 'Team Access',
                content: `
**Team Access** lists EcoFusion's staff: what each one can do, and which sub accounts each one can open.

## For the master account

- **Add staff** - takes somebody on, with a starting password
- **Can do** - tick exactly what they may do, or start from a preset: **Support (view only)**, **Support** or **Account manager**
- **Sub Accounts** - choose the businesses they can open. A new staff account opens none until you give it some

Some things are never handed to staff, including billing, buying courses, and taking on other staff.

## For other staff

You can see the team and what each person looks after, if you have permission to see the team. You cannot change it.
                `,
            },
        ],
    },
];

/** Bold (**...**) and code (`...`) anywhere in a line, not only at its start. */
function renderInline(text: string): ReactNode {
    return text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g).map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
            return (
                <strong key={i} className="text-white">
                    {part.slice(2, -2)}
                </strong>
            );
        }
        if (part.startsWith('`') && part.endsWith('`') && part.length > 2) {
            return (
                <code key={i} className="bg-black/40 px-1.5 py-0.5 rounded text-accent text-sm">
                    {part.slice(1, -1)}
                </code>
            );
        }
        return part;
    });
}

export default function HelpCenter({ isStaff }: { isStaff: boolean }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [expandedSections, setExpandedSections] = useState<string[]>(['getting-started']);
    const [selectedArticle, setSelectedArticle] = useState<string | null>('welcome');

    // What this reader may read. The staff section is not for customers: it
    // describes a view they do not have. Worked out plainly on each render -
    // a few dozen strings - and left to the React compiler to memoise.
    const sections = HELP_SECTIONS.filter((section) => !section.staffOnly || isStaff);

    // Filter articles based on search
    const query = searchQuery.trim().toLowerCase();
    const filteredSections = !query
        ? sections
        : sections
              .map((section) => ({
                  ...section,
                  articles: section.articles.filter(
                      (article) =>
                          article.title.toLowerCase().includes(query) ||
                          article.content.toLowerCase().includes(query)
                  ),
              }))
              .filter((section) => section.articles.length > 0);

    // Find selected article
    const currentSection = sections.find((section) =>
        section.articles.some((a) => a.id === selectedArticle)
    );
    const found = currentSection?.articles.find((a) => a.id === selectedArticle);
    const currentArticle =
        currentSection && found ? { ...found, sectionTitle: currentSection.title } : null;

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
        <div>
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
                    How each screen works, what to do when something goes wrong, and how to reach support.
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
                    { icon: BookOpen, label: 'Academy & Training', section: 'academy', article: 'academy-overview' },
                    { icon: Users, label: 'Your Team', section: 'team', article: 'roles' },
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

// Renders the small subset of markdown the articles use.
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
                    return (
                        <div key={index} className="flex items-start gap-2 ml-4">
                            <span className="text-accent mt-1">•</span>
                            <p className="text-white/80">{renderInline(trimmedLine.slice(2))}</p>
                        </div>
                    );
                }

                // Numbered list
                const numberedMatch = trimmedLine.match(/^(\d+)\.\s+(.*)$/);
                if (numberedMatch) {
                    return (
                        <div key={index} className="flex items-start gap-3 ml-4">
                            <span className="text-accent font-medium min-w-[20px]">{numberedMatch[1]}.</span>
                            <p className="text-white/80">{renderInline(numberedMatch[2])}</p>
                        </div>
                    );
                }

                // Empty line
                if (!trimmedLine) {
                    return <div key={index} className="h-2" />;
                }

                return (
                    <p key={index} className="text-white/80 leading-relaxed">
                        {renderInline(trimmedLine)}
                    </p>
                );
            })}
        </div>
    );
}
