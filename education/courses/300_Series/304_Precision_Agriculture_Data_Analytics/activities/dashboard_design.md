# Dashboard Design Project

## Course 304: Precision Agriculture & Data Analytics

**Activity Type:** Design Project | **Duration:** 3-4 hours | **Points:** 30

---

## Objective

Design a comprehensive monitoring and control dashboard for an aquaponics or greenhouse operation. Create mockups, define data flows, and specify functionality for a production-ready system.

---

## Project Scenario

You are designing a dashboard for **GreenFresh Farms**, a 5,000 sqft commercial aquaponics facility producing leafy greens and tilapia. The facility has:

- 2 growing zones (2,500 sqft each)
- 1 fish system (1,000 gallon total volume)
- Automated climate control
- Automated fertigation system
- 30+ sensors deployed
- 3 shifts of operators (early, day, night)
- Manager who reviews performance remotely

**User Personas:**
1. **Operators** - Need real-time status, alerts, quick actions
2. **Facility Manager** - Needs performance trends, KPIs, reports
3. **Owner** - Needs financial metrics, high-level summary

---

## Part 1: Requirements Analysis (5 points)

### Task 1.1: User Stories (2 points)

Write 10 user stories following this format:
"As a [user type], I want to [action] so that [benefit]"

**Examples:**
- As an operator, I want to see current DO levels with color-coded status so that I can quickly identify critical situations
- As a manager, I want to compare this week's yields to last week so that I can track production trends

**Deliverable:** List of 10 user stories covering all three personas

---

### Task 1.2: Critical Metrics Identification (3 points)

Identify and prioritize metrics for the dashboard:

1. **Critical (Real-time, large/top position):**
   - List 5 metrics that require immediate attention if out of range
   - Define thresholds for each (optimal, warning, critical)

2. **Important (Visible, but not prominent):**
   - List 8 metrics for operational monitoring
   - Define update frequency

3. **Reference (Available on-demand):**
   - List 5 metrics for analysis/troubleshooting
   - Define when these would be accessed

**Deliverable:** Prioritized metrics table with thresholds and update frequencies

---

## Part 2: Dashboard Design (15 points)

### Task 2.1: Operator Dashboard Mockup (6 points)

Create a mockup for the primary operator view.

**Requirements:**

1. **Layout:**
   - Design for 1920×1080 screen (desktop monitor)
   - Responsive design considerations for tablet (1024×768)
   - Clear visual hierarchy

2. **Required Components:**
   - Current system status (at-a-glance health check)
   - Critical parameter gauges (DO, pH, temperature)
   - Active alerts list
   - Recent trends (last 24 hours)
   - Quick action buttons (acknowledge alert, manual override, etc.)
   - Current production status

3. **Design Principles:**
   - Use color coding (green/yellow/red)
   - Large, readable fonts for critical data
   - Minimal clicks to access information
   - Clear visual hierarchy

**Deliverable:** Dashboard mockup (hand-drawn sketch, wireframe tool, or graphic design software)

---

### Task 2.2: Manager Dashboard Mockup (5 points)

Create a mockup for manager/analytical view.

**Requirements:**

1. **Performance KPIs:**
   - Yield per square foot (current vs. target)
   - System uptime percentage
   - Water use efficiency
   - Energy cost per pound
   - Quality grade distribution

2. **Trend Visualizations:**
   - 30-day harvest trend
   - Environmental parameters trend
   - Alert frequency over time
   - Comparison to benchmarks

3. **Reports Section:**
   - Weekly summary
   - Monthly performance
   - Export functionality (PDF, Excel)

**Deliverable:** Manager dashboard mockup

---

### Task 2.3: Mobile Alert View (4 points)

Design a simplified mobile view for off-site monitoring.

**Requirements:**

1. **Mobile Constraints:**
   - Design for 375×667 (iPhone SE) as minimum
   - Touch-friendly controls (44px minimum)
   - Simplified information hierarchy

2. **Essential Features:**
   - System status summary (one-glance health check)
   - Active critical alerts
   - Ability to acknowledge alerts
   - Emergency contact/escalation

3. **Notifications:**
   - Push notification design
   - Alert prioritization on mobile

**Deliverable:** Mobile dashboard mockup (2-3 key screens)

---

## Part 3: Data Visualization Specifications (5 points)

### Task 3.1: Visualization Selection (3 points)

For each metric category, specify appropriate visualization:

| Metric | Visualization Type | Justification | Update Frequency |
|--------|-------------------|---------------|------------------|
| DO (current) | Gauge | At-a-glance status | 30 seconds |
| DO (24hr trend) | Line chart | Show patterns | 5 minutes |
| ... | ... | ... | ... |

**Requirements:**
- Specify at least 12 metrics
- Choose from: Gauge, Line chart, Bar chart, Heatmap, Sparkline, Number display, Status indicator
- Justify each choice
- Define update frequency

**Deliverable:** Complete visualization specification table

---

### Task 3.2: Color Scheme and Thresholds (2 points)

Define color-coding scheme:

**Example:**
```
Dissolved Oxygen:
  Optimal (>6.0 mg/L): Green #28A745
  Warning (5.0-6.0 mg/L): Yellow #FFC107
  Critical (<5.0 mg/L): Red #DC3545, flashing

pH:
  Optimal (6.2-7.2): Green #28A745
  Warning (6.0-6.2 or 7.2-7.5): Yellow #FFC107
  Critical (<6.0 or >7.5): Red #DC3545
```

Create complete color scheme for all critical parameters.

**Deliverable:** Color scheme specification document

---

## Part 4: Functional Specifications (5 points)

### Task 4.1: Alert System Design (2 points)

Design alert workflow:

1. **Alert Levels and Actions:**
   - Critical: Notification method, response time requirement
   - Warning: Notification method, response time requirement
   - Info: Notification method

2. **Alert Acknowledgment:**
   - How operators acknowledge alerts
   - Escalation if not acknowledged
   - Alert history/log

3. **Example Alert Specification:**

```
ALERT: Low Dissolved Oxygen
  Severity: CRITICAL
  Trigger: DO < 4.5 mg/L for >60 seconds
  Notifications:
    - SMS to on-duty operator (immediate)
    - Phone call if not acknowledged in 5 min
    - Email to manager
    - Push notification to mobile app
  Dashboard Display:
    - Flashing red indicator on DO gauge
    - Alert banner at top of screen
    - Sound alarm (optional, configurable)
  Required Action:
    - Check aerator status
    - Increase aeration
    - Acknowledge alert
    - Add notes on resolution
  Auto-Clear: When DO > 5.5 mg/L for >5 min (but keeps in history)
```

**Deliverable:** Alert specifications for 5 critical parameters

---

### Task 4.2: User Controls and Actions (2 points)

Define interactive features:

1. **Time Range Selection:**
   - Last hour, 6 hours, 24 hours, 7 days, 30 days, custom
   - How this affects all visualizations

2. **Manual Override Controls:**
   - What can operators manually control?
   - Safety lockouts/confirmations
   - Audit logging

3. **Data Export:**
   - What data can be exported?
   - Format options (CSV, PDF, Excel)
   - Date range selection

**Deliverable:** User interaction specification document

---

### Task 4.3: Performance and Technical Requirements (1 point)

Specify technical requirements:

1. **Performance:**
   - Page load time: <3 seconds
   - Data refresh rate by component
   - Concurrent users supported: 10+

2. **Browser Compatibility:**
   - Chrome, Firefox, Safari (latest 2 versions)
   - Mobile browsers

3. **Data Storage:**
   - Real-time data: InfluxDB
   - Operational data: PostgreSQL
   - Retention policy

4. **Security:**
   - Authentication required
   - Role-based access control
   - Audit logging

**Deliverable:** Technical requirements document

---

## Submission Requirements

### 1. Design Mockups (PDFs or Images)
- Operator dashboard (desktop)
- Manager dashboard (desktop)
- Mobile alert view (2-3 screens)

### 2. Specification Documents
- User stories
- Metrics prioritization table
- Visualization specifications
- Color scheme guide
- Alert system specifications
- User interaction specifications
- Technical requirements

### 3. Presentation (Optional)
- 5-10 slides presenting your design
- Walk through user flows
- Explain design decisions

---

## Grading Rubric

| Component | Points | Criteria |
|-----------|--------|----------|
| **Requirements Analysis** | 5 | Completeness, user-centered thinking |
| **Dashboard Design** | 15 | Visual quality, usability, completeness |
| **Visualization Specs** | 5 | Appropriate choices, clear specifications |
| **Functional Specs** | 5 | Thoroughness, practical considerations |
| **Presentation Quality** | 5 | Professionalism, clarity, organization |
| **Total** | 35 | (30 points max, 5 bonus for exceptional work) |

---

## Design Tools (Recommendations)

**Mockup Tools:**
- Figma (free, web-based, collaborative)
- Balsamiq (wireframing)
- draw.io (free, diagramming)
- Paper and pencil (perfectly acceptable!)

**Inspiration:**
- Grafana dashboards
- Plotly Dash examples
- Industrial SCADA interfaces
- Existing farm management software

---

## Bonus Challenges (Optional, +5 points)

1. **Interactive Prototype:** Build working dashboard in Grafana or Dash
2. **Video Walkthrough:** Screen recording demonstrating dashboard use
3. **Accessibility:** Design for colorblind users, screen readers
4. **Multi-language Support:** Specify internationalization approach

---

## Tips for Success

1. **Think like a user** - What information do they need RIGHT NOW?
2. **Prioritize ruthlessly** - Dashboard clutter reduces effectiveness
3. **Use real data ranges** - Base designs on actual sensor values
4. **Consider failure modes** - What happens when sensors fail?
5. **Test your design** - Walk through common scenarios
6. **Iterate** - First draft is never perfect

---

## Real-World Application

This project mirrors actual work you'd do as a precision agriculture consultant or system designer. Strong dashboards:
- Reduce operator cognitive load
- Speed up problem detection and resolution
- Enable data-driven decision making
- Provide accountability and traceability

Your design could become the blueprint for a real implementation!

---

*EcoFusion Academy - Course 304*
*Dashboard Design Project*
