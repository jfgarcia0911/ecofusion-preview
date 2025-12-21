# Module 3: Production Management

**Duration:** 60 minutes
**Level:** Advanced

---

## Learning Objectives

By the end of this module, you will be able to:
1. Develop production plans aligned with customer demand
2. Manage production schedules and capacity
3. Optimize crop rotation and succession planning
4. Balance inventory levels (seedlings, growing, finished)
5. Manage bottlenecks and constraints
6. Track and improve production efficiency

---

## Production Planning Fundamentals

### The Production Planning Hierarchy

```
Strategic Level (Annual)
    ↓
Tactical Level (Monthly/Quarterly)
    ↓
Operational Level (Weekly/Daily)
    ↓
Execution Level (Shift/Hourly)
```

### Strategic Production Planning (12-Month Horizon)

**Key Decisions:**
- Product mix (what crops to grow)
- Capacity requirements (space, equipment)
- Major capital investments
- Staffing levels
- Supplier partnerships

**Example Strategic Plan:**
```
Facility: 20,000 sq ft vertical farm
Annual Target: $1.2M revenue

Product Mix:
- Lettuce (60%): 240,000 lbs @ $2.50/lb = $600K
- Herbs (25%): 40,000 lbs @ $6.00/lb = $240K
- Microgreens (15%): 8,000 lbs @ $22.50/lb = $180K

Capacity Allocation:
- Lettuce: 12,000 sq ft
- Herbs: 5,000 sq ft
- Microgreens: 3,000 sq ft

Seasonality Adjustments:
- Q1: Higher herb demand (25% → 30%)
- Q2-Q3: Peak lettuce season
- Q4: Holiday microgreens boost
```

### Tactical Production Planning (Monthly/Quarterly)

**Key Activities:**
- Demand forecasting
- Capacity balancing
- Crop scheduling
- Resource allocation
- Preventive maintenance scheduling

**Monthly Planning Process:**

```
Week 1 of prior month:
└─ Review sales forecasts
   └─ Assess current inventory
      └─ Calculate production requirements
         └─ Check capacity constraints
            └─ Draft production plan
               └─ Review with team
                  └─ Finalize and communicate

Key Inputs:
- Sales forecast by product
- Current inventory levels
- Crop cycle times
- Capacity constraints
- Maintenance schedule
- Holiday/event calendar
```

### Operational Production Planning (Weekly/Daily)

**Daily Production Meeting Agenda:**
```
1. Review yesterday's performance (5 min)
   - Production vs. target
   - Quality issues
   - Equipment problems

2. Today's priorities (10 min)
   - Harvest schedule
   - Transplant schedule
   - Special tasks
   - Staffing

3. Constraints and issues (5 min)
   - Material shortages
   - Equipment status
   - Schedule conflicts

4. Action items (5 min)
   - Who, what, when

Total: 25 minutes
```

---

## Demand Forecasting for CEA

### Forecasting Methods

#### 1. Historical Data Analysis

**Formula:**
```
Basic Forecast = Last Year Same Period × (1 + Growth Rate)

Example:
Last January: 8,000 lbs lettuce
Growth rate: 15%
Forecast: 8,000 × 1.15 = 9,200 lbs
```

#### 2. Moving Average

**Formula:**
```
3-Month Moving Average = (Month1 + Month2 + Month3) / 3

Example:
September: 9,500 lbs
October: 10,200 lbs
November: 9,800 lbs
December forecast: (9,500 + 10,200 + 9,800) / 3 = 9,833 lbs
```

#### 3. Customer Orders + Safety Stock

**Most accurate for CEA:**
```
Production Need = Confirmed Orders + Pipeline Orders + Safety Stock

Example for Week:
Confirmed orders: 2,500 lbs
Pipeline (80% probability): 800 lbs
Safety stock: 500 lbs (20%)
Total production target: 3,800 lbs
```

### Demand Variability Management

**Customer Demand Patterns:**

| Customer Type | Order Pattern | Lead Time | Variability |
|--------------|---------------|-----------|-------------|
| Grocery chains | Weekly standing | 3 days | Low (±10%) |
| Restaurants | Bi-weekly | 1 day | Medium (±25%) |
| Farmers markets | Weekly | Same day | High (±40%) |
| Food service | Monthly contracts | 5 days | Low (±15%) |

**Strategy by Customer Type:**
- **Stable customers:** Produce to order
- **Variable customers:** Maintain safety stock
- **New customers:** Start conservative, adjust

---

## Crop Scheduling and Succession Planting

### The Production Pipeline

**Lettuce Example (35-day cycle):**

```
Week 1: Seeding
Week 2: Germination
Week 3-4: Nursery
Week 5-9: Production
Week 10: Harvest

Pipeline Management:
┌─────────┬─────────┬─────────┬─────────┬─────────┐
│ Week 1  │ Week 2  │ Week 3  │ Week 4  │ Week 5  │
├─────────┼─────────┼─────────┼─────────┼─────────┤
│ Cohort A│ Cohort B│ Cohort C│ Cohort D│ Cohort E│
│ Seed    │ Germ.   │ Nursery │ Growing │ Harvest │
└─────────┴─────────┴─────────┴─────────┴─────────┘

Each week:
- Harvest mature cohort
- Seed new cohort
- Advance all cohorts one stage
```

### Succession Planting Calculator

**Formula:**
```
Seeding Frequency = Crop Cycle Time / Number of Harvests per Cycle

Example:
Crop cycle: 35 days
Target: Daily harvest
Seeding frequency: 35 / 35 = Seed daily

Crop cycle: 35 days
Target: 2 harvests per week (every 3.5 days)
Seeding frequency: Every 3.5 days
```

**Space Requirements:**
```
Total Space = (Space per Cohort) × (Number of Cohorts)

Example:
Lettuce space per cohort: 400 sq ft
Crop cycle: 35 days
Harvest frequency: Every 7 days
Number of cohorts: 35/7 = 5 cohorts

Total space needed: 400 × 5 = 2,000 sq ft
```

### Multi-Crop Production Calendar

**Example Monthly Calendar:**

```
═══════════════════════════════════════════════════════════
               PRODUCTION CALENDAR - JANUARY
═══════════════════════════════════════════════════════════

Week │ Mon    │ Tue     │ Wed     │ Thu     │ Fri     │
─────┼────────┼─────────┼─────────┼─────────┼─────────┤
  1  │ H: Let │ S: Let  │ H: Herb │ TP: Let │ H: Let  │
     │ TP:Let │ H: Let  │ S: Herb │ H: Herb │ S: Let  │
─────┼────────┼─────────┼─────────┼─────────┼─────────┤
  2  │ H: Let │ S: Let  │ H: Herb │ TP: Let │ H: Let  │
     │ TP:Herb│ H: Let  │ S: Micro│ H: Herb │ S: Let  │
─────┼────────┼─────────┼─────────┼─────────┼─────────┤
  3  │ H: Let │ S: Let  │ H: Herb │ TP: Let │ H: Let  │
     │ H:Micro│ H: Let  │ S: Herb │ H: Micro│ S: Let  │
─────┼────────┼─────────┼─────────┼─────────┼─────────┤
  4  │ H: Let │ S: Let  │ H: Herb │ TP: Let │ H: Let  │
     │ TP:Let │ H: Let  │ S: Micro│ H: Herb │ S: Let  │
═══════════════════════════════════════════════════════════

Legend:
H = Harvest, S = Seed, TP = Transplant
Let = Lettuce, Herb = Basil, Micro = Microgreens
```

---

## Capacity Management

### Understanding Capacity

**Types of Capacity:**

1. **Design Capacity:** Maximum theoretical output
2. **Effective Capacity:** Realistic sustainable output
3. **Actual Capacity:** Current actual output

**Example:**
```
Facility: 10,000 sq ft growing space

Design Capacity:
- 10,000 sq ft × 40 lbs/sq ft/year = 400,000 lbs/year

Effective Capacity (accounting for reality):
- Crop transitions: -10% = 360,000 lbs
- Maintenance downtime: -5% = 342,000 lbs
- Quality loss: -5% = 324,900 lbs
Effective capacity: ~325,000 lbs/year

Actual Capacity (current performance):
- 285,000 lbs/year
- Utilization: 285,000 / 325,000 = 88%
```

### Capacity Utilization Analysis

**Calculate Utilization:**
```
Utilization % = (Actual Output / Effective Capacity) × 100

Target: 90-95% utilization
- Below 90%: Underutilized, inefficient
- Above 95%: No buffer for problems, stressed
```

**Capacity Bottleneck Identification:**

```
Process Flow Analysis:

Seeding → Germination → Transplant → Growing → Harvest → Pack
 2,000      2,000        1,600       2,200      2,000     1,800
plants/hr  plants/hr   plants/hr   plants/hr  lbs/hr    units/hr

BOTTLENECK: Transplanting (1,600 plants/hr)
- Limits overall system throughput
- Focus improvement efforts here
```

### Managing Bottlenecks

**Theory of Constraints (TOC) Five-Step Process:**

1. **Identify** the constraint
2. **Exploit** the constraint (maximize its output)
3. **Subordinate** everything else to the constraint
4. **Elevate** the constraint (add capacity)
5. **Repeat** (find the next constraint)

**Example Application:**
```
Step 1: Identify
- Transplanting is bottleneck at 1,600 plants/hr
- Limits facility to ~90% of demand

Step 2: Exploit
- Eliminate waste at transplant station
- Ensure 100% uptime (no breaks, material shortages)
- Optimize workstation layout
Result: 1,600 → 1,750 plants/hr (+9%)

Step 3: Subordinate
- Seed exactly what transplanting can handle
- Don't overproduce in germination
- Schedule harvest to match transplant pace

Step 4: Elevate
- Add second transplant station
- Cross-train more operators
Result: 1,750 → 3,000 plants/hr

Step 5: Repeat
- New bottleneck: Packaging (1,800 units/hr)
- Begin analysis again
```

---

## Inventory Management

### The Three Inventories in CEA

**1. Seed/Supply Inventory:**
- Raw materials (seeds, nutrients, packaging)
- Managed like traditional inventory
- Just-in-time ordering where possible

**2. Work-in-Process (WIP):**
- Germinating seedlings
- Growing plants
- Unharvested mature crops

**3. Finished Goods:**
- Harvested, packaged product
- Ready to ship
- Minimize (perishability)

### Optimal Inventory Levels

**Seeds and Supplies:**
```
Reorder Point = (Lead Time × Daily Usage) + Safety Stock

Example - Lettuce Seeds:
Lead time: 7 days
Daily usage: 2,000 seeds
Safety stock: 5,000 seeds (2.5 days)

Reorder point: (7 × 2,000) + 5,000 = 19,000 seeds

When inventory hits 19,000 seeds → Place order
```

**Work-in-Process (Growing Crops):**
```
Optimal WIP = Daily Demand × Crop Cycle Time

Example - Lettuce:
Daily demand: 500 lbs
Crop cycle: 35 days

Optimal WIP: 500 × 35 = 17,500 lbs in production

At any time, should have ~17,500 lbs of lettuce in various stages
```

**Finished Goods:**
```
Target: Minimize while meeting delivery requirements

Same-day delivery customers: 4-hour inventory
Next-day delivery: 24-hour inventory
2-day delivery: 48-hour inventory

Example:
Daily production: 500 lbs
Customer mix: 60% same-day, 40% next-day

Target finished goods:
Same-day (4 hrs): 500 × 0.60 × (4/24) = 50 lbs
Next-day (24 hrs): 500 × 0.40 × 1 = 200 lbs
Total target: 250 lbs maximum
```

### Inventory Tracking

**Daily Inventory Count:**
```
╔══════════════════════════════════════════════════════╗
║           DAILY INVENTORY SNAPSHOT                   ║
╠══════════════════════════════════════════════════════╣
║  Date: ____________                                  ║
║                                                      ║
║  LETTUCE PIPELINE:                                   ║
║  ┌────────────────┬────────┬────────┬──────────┐     ║
║  │ Stage          │ Plants │ Est Lbs│ Days Left│     ║
║  ├────────────────┼────────┼────────┼──────────┤     ║
║  │ Germination    │ 4,200  │   52   │   28     │     ║
║  │ Nursery        │ 3,800  │   95   │   21     │     ║
║  │ Growing (wk 1) │ 3,600  │  180   │   14     │     ║
║  │ Growing (wk 2) │ 3,400  │  340   │    7     │     ║
║  │ Mature (ready) │ 3,200  │  480   │    0     │     ║
║  │ Finished goods │   --   │   85   │   --     │     ║
║  └────────────────┴────────┴────────┴──────────┘     ║
║                                                      ║
║  Total WIP: 1,147 lbs (Target: 1,200 lbs) ✓          ║
║                                                      ║
║  ALERTS:                                             ║
║  ⚠ Germination slightly low - increase seeding      ║
║                                                      ║
╚══════════════════════════════════════════════════════╝
```

---

## Production Efficiency Metrics

### Key Performance Indicators (KPIs)

**1. Overall Equipment Effectiveness (OEE)**

```
OEE = Availability × Performance × Quality

Example - Growing System:
Availability: 95% (uptime)
Performance: 92% (actual vs. ideal speed)
Quality: 96% (good vs. total production)

OEE = 0.95 × 0.92 × 0.96 = 84%

World-class OEE: >85%
```

**2. Yield Metrics:**

```
Yield per Square Foot = Total Harvest (lbs) / Growing Area (sq ft) / Time Period

Example:
Harvest: 2,400 lbs
Area: 1,000 sq ft
Period: 1 month

Yield: 2,400 / 1,000 / 1 = 2.4 lbs/sq ft/month
Annual: 2.4 × 12 = 28.8 lbs/sq ft/year

Benchmark targets:
Lettuce: 30-40 lbs/sq ft/year
Herbs: 15-25 lbs/sq ft/year
Tomatoes: 50-70 lbs/sq ft/year
```

**3. Cycle Time Performance:**

```
Cycle Time Variance = (Actual Cycle Time - Target) / Target × 100

Example:
Target cycle time: 35 days
Actual average: 37 days
Variance: (37-35)/35 × 100 = +5.7% (late)

Target: ±5% variance
```

**4. Schedule Attainment:**

```
Schedule Attainment = (Actual Production / Planned Production) × 100

Example:
Planned: 2,500 lbs this week
Actual: 2,350 lbs
Attainment: (2,350 / 2,500) × 100 = 94%

Target: >95%
```

**5. Labor Productivity:**

```
Labor Productivity = Output / Labor Hours

Example:
Weekly output: 2,500 lbs
Labor hours: 320 hours
Productivity: 2,500 / 320 = 7.8 lbs/hour

Track over time for improvement trends
```

### Production Dashboard

```
╔══════════════════════════════════════════════════════════════╗
║          WEEKLY PRODUCTION PERFORMANCE DASHBOARD             ║
╠══════════════════════════════════════════════════════════════╣
║  Week of: ___________                                        ║
║                                                              ║
║  PRODUCTION VOLUME                                           ║
║  ┌────────────┬────────┬────────┬────────┬──────────┐        ║
║  │ Product    │ Target │ Actual │ Var %  │ Status   │        ║
║  ├────────────┼────────┼────────┼────────┼──────────┤        ║
║  │ Lettuce    │ 2,000  │ 1,950  │  -2.5% │    🟡    │        ║
║  │ Basil      │   400  │   420  │  +5.0% │    🟢    │        ║
║  │ Microgreen │    80  │    78  │  -2.5% │    🟢    │        ║
║  └────────────┴────────┴────────┴────────┴──────────┘        ║
║                                                              ║
║  QUALITY                                                     ║
║  Grade A Rate: 94% (Target: 95%) 🟡                          ║
║  Customer Complaints: 2 (Target: 0) 🔴                       ║
║                                                              ║
║  EFFICIENCY                                                  ║
║  OEE: 86% (Target: 85%) 🟢                                   ║
║  Labor Productivity: 7.8 lbs/hr (Target: 7.5) 🟢             ║
║                                                              ║
║  INVENTORY                                                   ║
║  WIP Status: 98% of target 🟢                                ║
║  Finished Goods: 4.2 hours (Target: <6) 🟢                   ║
║                                                              ║
║  TOP ISSUES THIS WEEK:                                       ║
║  1. Lettuce yield slightly low - investigate lighting        ║
║  2. Customer complaints on basil quality - review harvest    ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
```

---

## Production Problem-Solving

### Common Production Problems

**Problem 1: Can't Meet Demand**

**Symptoms:**
- Consistently producing below target
- Customer orders unfulfilled
- Running out of inventory

**Root Causes:**
- Insufficient capacity
- Poor planning/scheduling
- Quality issues causing waste
- Equipment downtime
- Inefficient processes

**Solutions:**
- Capacity analysis and expansion
- Improve scheduling accuracy
- Focus on quality at source
- Enhance preventive maintenance
- Lean process improvement

**Problem 2: Overproduction/Waste**

**Symptoms:**
- Excess finished goods spoiling
- More WIP than needed
- High disposal costs

**Root Causes:**
- Poor demand forecasting
- Batch sizes too large
- Lead times too long
- Lack of communication with sales

**Solutions:**
- Improve forecast accuracy
- Reduce batch sizes
- Shorten crop cycles if possible
- Daily sales/production alignment

**Problem 3: Quality Variability**

**Symptoms:**
- Inconsistent grade rates
- Customer complaints
- High rework/waste

**Root Causes:**
- Unstable environmental conditions
- Operator variability
- Equipment issues
- Input material quality

**Solutions:**
- Environmental monitoring and control
- Standard work implementation
- Equipment maintenance
- Supplier quality requirements

---

## Production Planning Tools

### Tool 1: Master Production Schedule (MPS)

**Purpose:** High-level plan of what to produce and when

**Example MPS (4-week horizon):**

```
Product: Lettuce (Romaine)

Week │ Forecast │ Orders │ Planned │ WIP    │ Available │
     │ Demand   │ Firm   │ Prod.   │ Carry  │ to Promise│
─────┼──────────┼────────┼─────────┼────────┼───────────┤
  1  │  2,000   │ 1,800  │  2,000  │  200   │    400    │
  2  │  2,100   │ 1,500  │  2,000  │  300   │    800    │
  3  │  2,000   │   800  │  2,000  │  500   │  1,700    │
  4  │  2,200   │   500  │  2,200  │  500   │  2,200    │
```

### Tool 2: Material Requirements Planning (MRP)

**Purpose:** Calculate material needs based on production plan

**Example:**
```
Product: 2,000 lbs Lettuce this week

Bill of Materials:
- Lettuce seeds: 4,000 seeds (2 seeds/plant, 50% germ rate)
- Net pots: 2,000 pots (1 per plant)
- Growing media: 100 lbs (0.05 lbs per plant)
- Part A nutrient: 10 lbs
- Part B nutrient: 10 lbs
- Packaging: 500 boxes (4 lbs per box)
- Labels: 500 labels

Check inventory:
- Seeds on hand: 15,000 → Sufficient
- Net pots: 1,000 → ORDER 1,000
- Media: 50 lbs → ORDER 50 lbs
- Nutrients: Sufficient
- Packaging: 200 boxes → ORDER 300
```

### Tool 3: Production Leveling (Heijunka)

**Purpose:** Smooth production to match demand patterns

**Example:**

```
Unleveled Production:
Week 1: 1,500 lbs (Monday big order)
Week 2: 2,500 lbs (Friday big order)
Week 3: 1,800 lbs
Week 4: 2,200 lbs

Average: 2,000 lbs/week
Problem: Variable labor needs, stress, overtime

Leveled Production:
Every week: 2,000 lbs
Every day: ~285 lbs (2,000/7)

Benefits:
- Predictable staffing
- Smooth workflow
- Less overtime
- Better quality
- Use finished goods buffer for order spikes
```

---

## Key Takeaways

1. **Plan at multiple levels** - Strategic, tactical, operational aligned
2. **Demand drives production** - Start with customer need
3. **Manage the pipeline** - Succession planting for continuous flow
4. **Know your capacity** - Understand and optimize constraints
5. **Right-size inventory** - Enough to serve customers, not more
6. **Measure performance** - KPIs provide visibility and drive improvement
7. **Level production** - Smooth is efficient
8. **Continuous improvement** - Always finding ways to produce better

---

## Practical Exercise

### Create a 4-Week Production Plan

**Given:**
- Product: Lettuce
- Current demand: 2,000 lbs/week
- Crop cycle: 35 days
- Current WIP: 15,000 lbs in pipeline
- Germination rate: 90%
- Marketable yield: 95%

**Calculate:**
1. Weekly seeding requirements
2. Transplant schedule
3. Harvest forecast
4. Capacity utilization
5. Material requirements

**Present in MPS format**

---

## Resources & Tools

### Templates
- Master Production Schedule Template
- Capacity Analysis Worksheet
- Inventory Tracking Log
- Production Dashboard Template

### Software Recommendations
- Production planning: Excel, Google Sheets
- Advanced: MRP/ERP systems for CEA
- Inventory: Barcode scanning systems
- Scheduling: Gantt chart tools

### Next Steps
- Complete Module 3 Quiz
- Create a production plan for your facility
- Calculate your capacity utilization
- Develop a production dashboard

---

**Module 3 Complete**
**Next Module:** Quality Management Systems - Ensuring Excellence

*EcoFusion Academy - Course 310: Facility Management Excellence*
