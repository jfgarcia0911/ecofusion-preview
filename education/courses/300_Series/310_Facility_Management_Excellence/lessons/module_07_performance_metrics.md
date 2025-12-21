# Module 7: Performance Metrics

**Duration:** 60 minutes
**Level:** Advanced

---

## Learning Objectives

By the end of this module, you will be able to:
1. Design balanced scorecards for CEA operations
2. Select and implement KPIs that drive performance
3. Create visual management dashboards
4. Analyze trends and take corrective action
5. Align metrics with strategic goals
6. Build a data-driven decision culture

---

## Performance Measurement Framework

### Why Measure?

**Key Principles:**
- **What gets measured gets managed**
- **What gets managed gets improved**
- **Metrics drive behavior** - Choose wisely

**Purposes of Metrics:**
1. **Monitor** - Track current performance
2. **Control** - Stay within targets
3. **Improve** - Identify opportunities
4. **Communicate** - Share progress
5. **Motivate** - Engage and challenge teams

### Characteristics of Good Metrics

**SMART Metrics:**
- **Specific:** Clear definition, no ambiguity
- **Measurable:** Quantifiable with data
- **Achievable:** Realistic yet challenging
- **Relevant:** Aligned with business goals
- **Time-bound:** Defined measurement period

**Additional Criteria:**
- **Visible:** Easy to see and understand
- **Actionable:** Can influence the result
- **Leading indicators:** Predictive, not just historical
- **Balanced:** Financial and non-financial
- **Simple:** Easy to calculate and track

---

## The Balanced Scorecard

### Four Perspectives

**Balanced Scorecard Framework:**

```
┌────────────────────────────────────────────────────┐
│              STRATEGIC VISION & GOALS              │
└────────────┬───────────────────────────────────────┘
             │
    ┌────────┴────────┐
    │                 │
    ▼                 ▼
┌─────────┐       ┌─────────┐
│FINANCIAL│       │CUSTOMER │
│         │       │         │
│Revenue  │       │Satisfac-│
│Profit   │◄──────┤tion     │
│ROI      │       │Quality  │
└────┬────┘       │Delivery │
     │            └────┬────┘
     │                 │
     │                 │
     ▼                 ▼
┌─────────┐       ┌─────────┐
│INTERNAL │       │LEARNING │
│PROCESS  │       │& GROWTH │
│         │       │         │
│Quality  │       │Training │
│Efficien-│◄──────┤Employee │
│cy       │       │Engagem. │
│Safety   │       │Innovation
└─────────┘       └─────────┘
```

### CEA Balanced Scorecard Example

**1. Financial Perspective**

| KPI | Formula | Target | Frequency |
|-----|---------|--------|-----------|
| **Revenue/sq ft** | Annual revenue / Growing area | $75-100 | Monthly |
| **Gross margin** | (Revenue - COGS) / Revenue × 100 | 45-55% | Monthly |
| **Operating cost/lb** | Total operating cost / Lbs produced | <$1.50 | Weekly |
| **EBITDA** | Earnings before interest, tax, depreciation, amortization | >20% | Monthly |
| **Cash flow** | Cash in - Cash out | Positive | Weekly |

**2. Customer Perspective**

| KPI | Formula | Target | Frequency |
|-----|---------|--------|-----------|
| **On-time delivery** | Orders delivered on time / Total orders × 100 | >95% | Daily |
| **Order fill rate** | Orders filled completely / Total orders × 100 | >98% | Daily |
| **Customer satisfaction** | Average rating from surveys | >4.5/5 | Monthly |
| **Customer retention** | Customers retained / Total customers × 100 | >90% | Quarterly |
| **Complaint rate** | Customer complaints / Total orders × 100 | <1% | Weekly |

**3. Internal Process Perspective**

| KPI | Formula | Target | Frequency |
|-----|---------|--------|-----------|
| **Yield/sq ft/year** | Annual harvest lbs / Growing sq ft | 30-40 | Monthly |
| **Crop cycle time** | Days from seed to harvest | On target ±5% | Per crop |
| **Grade A rate** | Grade A lbs / Total lbs × 100 | >95% | Daily |
| **Equipment uptime** | Operating hours / Planned hours × 100 | >95% | Daily |
| **Energy efficiency** | kWh per lb produced | <3.5 kWh | Weekly |
| **Water efficiency** | Gallons per lb produced | <5 gal | Weekly |

**4. Learning & Growth Perspective**

| KPI | Formula | Target | Frequency |
|-----|---------|--------|-----------|
| **Safety incidents** | Lost time injuries per year | 0 | Monthly |
| **Training completion** | Employees trained / Total employees × 100 | 100% | Quarterly |
| **Employee satisfaction** | Survey rating average | >4/5 | Quarterly |
| **Turnover rate** | Employees left / Avg employees × 100 | <15% | Monthly |
| **Suggestions implemented** | Ideas implemented / Ideas submitted × 100 | >50% | Monthly |

---

## Leading vs. Lagging Indicators

### Understanding the Difference

**Lagging Indicators:**
- Measure outcomes (what happened)
- Historical, backward-looking
- Hard to influence once measured
- Example: Monthly revenue, crop yield

**Leading Indicators:**
- Measure activities (what's happening)
- Predictive, forward-looking
- Can influence now
- Example: Daily environmental conditions, seeding rate

**Relationship:**
```
Leading Indicators → Drive → Lagging Indicators

Examples:
EC/pH stability (leading) → Yield per sq ft (lagging)
Training hours (leading) → Quality rate (lagging)
PM compliance (leading) → Equipment uptime (lagging)
Safety audits (leading) → Incident rate (lagging)
```

### Balanced Metrics Example

**Goal: Improve Revenue per Square Foot**

| Lagging (Result) | Leading (Driver) |
|------------------|------------------|
| Revenue/sq ft | Crop cycles per year |
| | Yield per cycle |
| | Grade A rate |
| | Selling price |
| | Customer orders |

**Management Focus:**
- Track lagging to know if succeeding
- Manage leading to influence results
- Both are necessary

---

## Visual Management Dashboards

### Dashboard Design Principles

**Effective Dashboards:**
1. **At-a-glance understanding** - No analysis needed
2. **Visual hierarchy** - Most important metrics prominent
3. **Color coding** - Green/yellow/red status
4. **Trend indicators** - Arrows showing direction
5. **Located at Gemba** - Where work happens
6. **Updated frequently** - Real-time or daily

### Daily Operations Dashboard

```
╔══════════════════════════════════════════════════════════════════╗
║              DAILY OPERATIONS DASHBOARD                          ║
║              Date: December 10, 2025  |  Shift: Day              ║
╠══════════════════════════════════════════════════════════════════╣
║                                                                  ║
║  PRODUCTION                QUALITY                 SAFETY        ║
║  ┌──────────────┐         ┌──────────────┐       ┌──────────┐   ║
║  │ Today: 485   │         │ Grade A: 96% │       │ Days:    │   ║
║  │ Target: 500  │         │ Target: 95%  │       │   142    │   ║
║  │   ▼ 3%       │         │   ▲ 1%    ✓  │       │ Without  │   ║
║  │              │         │              │       │ Incident │   ║
║  │ MTD: 97%     │         │ Rejects: 2%  │       │          │   ║
║  └──────────────┘         └──────────────┘       └──────────┘   ║
║                                                                  ║
║  EQUIPMENT                 ENVIRONMENT             PEOPLE        ║
║  ┌──────────────┐         ┌──────────────┐       ┌──────────┐   ║
║  │ Status: ✓    │         │ Temp: 72°F ✓ │       │ Staff:   │   ║
║  │ Uptime: 98%  │         │ RH: 62% ✓    │       │ 14/14 ✓  │   ║
║  │              │         │ CO2: 950ppm✓ │       │          │   ║
║  │ PM Due: 2    │         │ EC: 2.0 ✓    │       │ Overtime:│   ║
║  │ (scheduled)  │         │ pH: 6.1 ✓    │       │ 0 hrs ✓  │   ║
║  └──────────────┘         └──────────────┘       └──────────┘   ║
║                                                                  ║
║  TOP 3 PRIORITIES TODAY:                                         ║
║  1. Complete Zone C harvest (300 lbs target)                     ║
║  2. Transplant 1,200 seedlings to nursery                        ║
║  3. PM on pump #3 (scheduled 2pm)                                ║
║                                                                  ║
║  ISSUES / NOTES:                                                 ║
║  • Production slightly low - 2 operators out sick (covered)      ║
║  • Quality excellent - maintain current practices                ║
║  • All environmental parameters in range                         ║
║                                                                  ║
╚══════════════════════════════════════════════════════════════════╝
```

### Weekly Performance Dashboard

```
╔══════════════════════════════════════════════════════════════════╗
║           WEEKLY PERFORMANCE SUMMARY - Week 50                   ║
╠══════════════════════════════════════════════════════════════════╣
║                                                                  ║
║  PRODUCTION VOLUME                    FINANCIAL                  ║
║  ┌────────┬──────┬────────┬──────┐  ┌──────────────────────┐    ║
║  │Product │Target│ Actual │ Var% │  │ Revenue: $28,450     │    ║
║  ├────────┼──────┼────────┼──────┤  │ Target:  $30,000     │    ║
║  │Lettuce │2,000 │ 1,950  │ -2.5%│  │ Variance: -5.2% ▼    │    ║
║  │Basil   │  400 │   420  │ +5.0%│  │                      │    ║
║  │Micro   │   80 │    78  │ -2.5%│  │ Cost/lb: $1.45       │    ║
║  └────────┴──────┴────────┴──────┘  │ Target:  $1.50       │    ║
║  Overall: 98% attainment ✓           │ Variance: +3.3% ✓    │    ║
║                                      └──────────────────────┘    ║
║                                                                  ║
║  QUALITY TRENDS (4-week)              EFFICIENCY                 ║
║  Grade A Rate:                        ┌──────────────────────┐   ║
║  100%┃                                 │ OEE: 87%      ✓      │   ║
║      ┃     ●─────●                     │ Target: 85%          │   ║
║   95%┃ ●─●           ●                 │                      │   ║
║      ┃                   ●             │ Labor Prod:          │   ║
║   90%┃                                 │ 8.2 lbs/hr    ✓      │   ║
║      ┗━━━━━━━━━━━━━━━━━━━━            │ Target: 7.5 lbs/hr   │   ║
║       Wk47 Wk48 Wk49 Wk50             └──────────────────────┘   ║
║                                                                  ║
║  KEY WINS THIS WEEK:                                             ║
║  ✓ Zero customer complaints                                      ║
║  ✓ Exceeded labor productivity target by 9%                      ║
║  ✓ Maintained 100% on-time delivery                              ║
║                                                                  ║
║  FOCUS AREAS NEXT WEEK:                                          ║
║  • Increase lettuce production to target (address bottleneck)    ║
║  • Maintain quality performance                                  ║
║  • Complete Q4 safety training                                   ║
║                                                                  ║
╚══════════════════════════════════════════════════════════════════╝
```

---

## Tier Meeting Structure

### Daily Tiered Huddles

**Three-Tier System:**

```
Tier 1: Team Level (5-10 minutes)
├─ Time: Start of shift
├─ Attendees: Frontline team + supervisor
├─ Location: At the dashboard/Gemba
└─ Agenda:
   ├─ Safety moment
   ├─ Yesterday's results
   ├─ Today's targets
   ├─ Issues to escalate
   └─ Recognition

Tier 2: Department Level (15 minutes)
├─ Time: 30 min after shift start
├─ Attendees: Supervisors + manager
├─ Location: Department area
└─ Agenda:
   ├─ Roll-up from Tier 1 meetings
   ├─ Department metrics review
   ├─ Problem-solving (A3 updates)
   ├─ Resource allocation
   └─ Escalations to Tier 3

Tier 3: Facility Level (30 minutes)
├─ Time: Mid-morning
├─ Attendees: Managers + leadership
├─ Location: Conference room
└─ Agenda:
   ├─ Facility-wide metrics
   ├─ Strategic initiatives
   ├─ Major issues resolution
   ├─ Resource decisions
   └─ Improvement project reviews
```

**Benefits:**
- Daily alignment on priorities
- Quick issue identification and resolution
- Information flows up and down
- Accountability and ownership
- Continuous improvement focus

---

## Metric Selection Process

### Choosing the Right Metrics

**Steps:**

**1. Start with Strategy**
```
Strategic Goal → Critical Success Factors → KPIs

Example:
Goal: Be the highest quality CEA producer
Success Factors:
├─ Consistent crop quality
├─ Food safety excellence
├─ Customer satisfaction
└─ Sustainable practices

KPIs:
├─ Grade A rate >95%
├─ Zero food safety incidents
├─ Customer satisfaction >4.5/5
└─ Water use <5 gal/lb
```

**2. Apply Selection Criteria**

For each potential metric, ask:
- □ Does it align with strategic goals?
- □ Can we influence it through our actions?
- □ Is data available and reliable?
- □ Will teams understand it?
- □ Does it drive the right behaviors?
- □ Can we act on the results?

**3. Keep it Simple**

**Guideline:** 5-7 metrics per level
- Too few: Miss important aspects
- Too many: Dilute focus, overwhelm

**4. Balance Leading and Lagging**

Typical mix: 60% lagging (results) + 40% leading (drivers)

---

## Data Collection and Analysis

### Data Sources in CEA

**Automated Collection:**
- Environmental sensors (temp, humidity, CO2, EC, pH)
- Energy meters
- Water flow meters
- Production equipment (seeders, packers)

**Manual Collection:**
- Quality inspections
- Harvest counts and weights
- Customer feedback
- Labor hours
- Maintenance logs

### Data Quality

**GIGO Principle:** Garbage In, Garbage Out

**Ensure Data Quality:**
1. **Accuracy** - Calibrate sensors, train inspectors
2. **Timeliness** - Real-time or frequent collection
3. **Completeness** - No gaps in data
4. **Consistency** - Standard definitions and methods
5. **Validation** - Check for errors and outliers

### Trend Analysis

**Look for Patterns:**

**1. Direction**
- Improving (↑)
- Declining (↓)
- Stable (→)

**2. Variation**
- High variability (inconsistent)
- Low variability (stable)
- Outliers (special causes)

**3. Cycles**
- Daily patterns
- Weekly patterns
- Seasonal patterns

**Example Analysis:**
```
Grade A Rate (12 weeks):

100%┃
    ┃           ●─────●─────●
 95%┃     ●─────┘
    ┃ ●─●─┘
 90%┃
    ┗━━━━━━━━━━━━━━━━━━━━━━
     W1 W3 W5 W7 W9 W11 W12

Observations:
- Upward trend (good!)
- Improved from 92% to 98%
- Plateau at 98% last 4 weeks
- Low variation (stable process)

Analysis:
- Improvements from quality training (Week 3)
- Standard work implementation (Week 5)
- Currently at sustainable level
- Consider stretch goal to 99%

Actions:
- Maintain current practices
- Share success with other departments
- Investigate occasional dips below 98%
```

---

## Taking Action on Metrics

### Red-Yellow-Green Status

**Traffic Light System:**

**🟢 Green:** On target or better
- Action: Maintain, recognize team

**🟡 Yellow:** Caution, off target but within control limits
- Action: Monitor closely, identify cause, take corrective action

**🔴 Red:** Out of spec, immediate action required
- Action: Stop and fix, escalate if needed, prevent recurrence

**Example Thresholds:**
```
KPI: On-Time Delivery

🟢 Green: ≥95%
🟡 Yellow: 90-94.9%
🔴 Red: <90%

Current: 91% → Yellow status
Action: Review late orders, identify root cause,
        implement corrective action, monitor daily
```

### Response Protocols

**When Metrics Go Red:**

```
1. IMMEDIATE (within 1 hour)
   ├─ Verify data is correct
   ├─ Assess impact on customers/safety
   ├─ Take containment action
   └─ Notify supervisor/manager

2. SHORT-TERM (within 24 hours)
   ├─ Conduct root cause analysis
   ├─ Implement temporary countermeasure
   ├─ Communicate to affected parties
   └─ Begin tracking recovery

3. LONG-TERM (within 1 week)
   ├─ Develop permanent solution
   ├─ Update standards/SOPs
   ├─ Train team on changes
   └─ Monitor for sustained improvement
```

---

## Common Pitfalls to Avoid

### 1. Too Many Metrics

**Problem:** Tracking 50+ KPIs, can't focus

**Solution:** Ruthlessly prioritize to vital few (5-7 per level)

### 2. Metrics Without Action

**Problem:** Measure but don't respond to results

**Solution:** Every metric needs an owner and action plan

### 3. Gaming the System

**Problem:** Hitting metric but harming overall performance
- Example: Rushing harvest to hit volume target → Quality suffers

**Solution:** Balanced metrics, audit for gaming, focus on purpose not just numbers

### 4. Stale Metrics

**Problem:** Measuring what was important last year

**Solution:** Review and update metrics quarterly, align with current strategy

### 5. Invisible Metrics

**Problem:** Data in spreadsheet on manager's computer

**Solution:** Visual boards at Gemba, accessible to all

### 6. Blame Culture

**Problem:** Metrics used to punish, not improve

**Solution:** Metrics are for learning, focus on system improvement not individual blame

---

## Key Takeaways

1. **Balanced approach** - Financial, customer, process, and people metrics
2. **Leading and lagging** - Track both drivers and results
3. **Visual management** - Make performance visible to all
4. **Daily discipline** - Tier meetings create accountability
5. **Right metrics** - Aligned with strategy, actionable, simple
6. **Quality data** - Accurate, timely, complete
7. **Action-oriented** - Measure to improve, not just to know
8. **Continuous review** - Metrics evolve with business

---

## Practical Exercise

### Design Your Dashboard

**Create a balanced scorecard for your facility:**

1. **Identify 4-6 KPIs in each perspective:**
   - Financial
   - Customer
   - Internal Process
   - Learning & Growth

2. **For each KPI:**
   - Define calculation method
   - Set target
   - Identify data source
   - Determine frequency

3. **Design visual dashboard:**
   - Sketch layout
   - Choose display format
   - Plan update process

4. **Implement and test:**
   - Pilot for 2 weeks
   - Gather feedback
   - Refine and roll out

---

## Resources & Tools

### Templates
- Balanced Scorecard Template
- Daily Dashboard Template
- Tier Meeting Agenda
- Metric Selection Matrix

### Software Tools
- Excel/Google Sheets (free dashboards)
- Power BI, Tableau (advanced analytics)
- CEA-specific platforms (Artemis, etc.)

### References
- "The Balanced Scorecard" by Kaplan & Norton
- "Measure What Matters" by John Doerr
- "The Performance Prism" by Neely et al.

### Next Steps
- Complete Module 7 Quiz
- Design balanced scorecard for your operation
- Create one visual dashboard
- Implement daily tier meeting

---

**Module 7 Complete**
**Next Module:** Team Leadership - Building High-Performing Teams

*EcoFusion Academy - Course 310: Facility Management Excellence*
