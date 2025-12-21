# Handout: Earned Value Management (EVM) Quick Reference Guide

## What is Earned Value Management?

Earned Value Management (EVM) is an integrated project management technique that combines scope, schedule, and cost measures to assess project performance and progress objectively.

**Why EVM Matters for CEA Projects:**
- Provides early warning of cost and schedule problems
- Enables accurate forecasting of final cost and completion date
- Integrates cost and schedule (not separate silos)
- Objective measurement (not subjective "percent complete")
- Industry standard for capital projects >$10M

---

## The Three Core Values

```
┌─────────────────────────────────────────────────────────┐
│ 1. PLANNED VALUE (PV)                                   │
│    Also called: Budgeted Cost of Work Scheduled (BCWS)  │
│                                                         │
│    What you PLANNED to spend by this date               │
│    Based on baseline budget and schedule                │
│                                                         │
│    Example: Project baseline says you should have       │
│    spent $10M by Month 12                               │
│    PV = $10M                                            │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ 2. EARNED VALUE (EV)                                    │
│    Also called: Budgeted Cost of Work Performed (BCWP)  │
│                                                         │
│    VALUE of work actually COMPLETED (at budget rates)   │
│    Not what you spent, but what completed work is worth │
│                                                         │
│    Example: You completed work that was budgeted at $9M │
│    EV = $9M (regardless of what you actually spent)     │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ 3. ACTUAL COST (AC)                                     │
│    Also called: Actual Cost of Work Performed (ACWP)    │
│                                                         │
│    What you ACTUALLY spent to date                      │
│    Invoices paid, labor costs, committed costs          │
│                                                         │
│    Example: You actually spent $9.5M                    │
│    AC = $9.5M                                           │
└─────────────────────────────────────────────────────────┘
```

---

## Variance Analysis

### Schedule Variance (SV)

**Formula:** SV = EV - PV

**Interpretation:**
- SV > 0: Ahead of schedule (completed more than planned)
- SV = 0: On schedule
- SV < 0: Behind schedule (completed less than planned)

**Example:**
- EV = $9M, PV = $10M
- SV = $9M - $10M = -$1M
- **Interpretation:** $1M worth of work behind schedule

### Cost Variance (CV)

**Formula:** CV = EV - AC

**Interpretation:**
- CV > 0: Under budget (spent less than value delivered)
- CV = 0: On budget
- CV < 0: Over budget (spent more than value delivered)

**Example:**
- EV = $9M, AC = $9.5M
- CV = $9M - $9.5M = -$0.5M
- **Interpretation:** $500K over budget for work completed

---

## Performance Indices

### Schedule Performance Index (SPI)

**Formula:** SPI = EV / PV

**Interpretation:**
- SPI > 1.0: Ahead of schedule
- SPI = 1.0: On schedule
- SPI < 1.0: Behind schedule

**Rule of Thumb:**
- SPI ≥ 0.95: Acceptable (within 5%)
- SPI < 0.95: Requires attention
- SPI < 0.90: Serious concern, corrective action needed

**Example:**
- EV = $9M, PV = $10M
- SPI = $9M / $10M = 0.90
- **Interpretation:** Completing work at 90% of planned rate (10% behind)

### Cost Performance Index (CPI)

**Formula:** CPI = EV / AC

**Interpretation:**
- CPI > 1.0: Under budget
- CPI = 1.0: On budget
- CPI < 1.0: Over budget

**Rule of Thumb:**
- CPI ≥ 0.95: Acceptable
- CPI < 0.95: Requires attention
- CPI < 0.90: Serious concern

**Example:**
- EV = $9M, AC = $9.5M
- CPI = $9M / $9.5M = 0.947
- **Interpretation:** Getting $0.95 of value for every $1 spent (5.3% over budget)

**KEY INSIGHT:** CPI tends to stabilize after first 20% of project and rarely improves significantly. Early CPI is highly predictive of final cost performance!

---

## Forecasting

### Estimate at Completion (EAC)

**Most Common Formula:** EAC = BAC / CPI

Where:
- BAC = Budget at Completion (original total budget)
- CPI = Current Cost Performance Index

**Interpretation:** Forecasted final project cost based on current cost performance

**Example:**
- BAC = $30M (original budget)
- CPI = 0.947
- EAC = $30M / 0.947 = $31.67M
- **Interpretation:** Project forecasted to cost $31.67M (7% overrun)

**Alternative Formula (if performance expected to change):**
EAC = AC + (BAC - EV) / (CPI × SPI)

### Estimate to Complete (ETC)

**Formula:** ETC = EAC - AC

**Interpretation:** How much more money needed to complete the project

**Example:**
- EAC = $31.67M
- AC = $9.5M (spent to date)
- ETC = $31.67M - $9.5M = $22.17M
- **Interpretation:** Need $22.17M more to complete

### Variance at Completion (VAC)

**Formula:** VAC = BAC - EAC

**Interpretation:** Projected final cost variance (over/under budget)

**Example:**
- BAC = $30M
- EAC = $31.67M
- VAC = $30M - $31.67M = -$1.67M
- **Interpretation:** Projected $1.67M overrun at completion

---

## To-Complete Performance Index (TCPI)

**Formula:** TCPI = (BAC - EV) / (BAC - AC)

**Interpretation:** Cost performance index required on remaining work to stay on budget

**Example:**
- BAC = $30M, EV = $9M, AC = $9.5M
- TCPI = ($30M - $9M) / ($30M - $9.5M) = $21M / $20.5M = 1.024
- **Interpretation:** Must achieve CPI of 1.024 on remaining work to meet budget

**If TCPI > 1.0:** Must perform better than baseline plan
**If TCPI > 1.1:** Very difficult to achieve
**If TCPI > 1.2:** Unrealistic - budget increase likely needed

---

## Visual Representation: The S-Curve

```
CUMULATIVE COST S-CURVE

$M
30│                                          BAC ────
  │                                      ────/
25│                                  ────/  EAC ----
  │                              ────/     /
20│                          ────/       /
  │                      ────/         /
15│                  ────/   PV      /  AC (Actual)
  │              ────/   (Planned) /
10│          ────/             ──+── EV (Earned)
  │      ────/             ────/ /
 5│  ────/             ────/   /
  │──/             ────/      /
 0└────────────────────────────────────────────
   0   3    6    9   12   15   18   21   24  Month
                       ^
                  Current Period

Analysis:
- AC above PV: Spending faster than planned
- EV below PV: Completing work slower than planned
- AC above EV: Over budget for work completed
- Gap between EAC and BAC: Forecasted overrun
```

---

## Step-by-Step EVM Calculation Guide

### Setup (Before Project Starts)

**Step 1:** Create Work Breakdown Structure (WBS)

**Step 2:** Assign budget to each work package
- Total must equal BAC (Budget at Completion)

**Step 3:** Create baseline schedule
- Allocate budgeted work over time
- Creates time-phased budget (Planned Value curve)

**Step 4:** Establish measurement rules
- Define "percent complete" for each work package type
- Examples:
  - 0/100 rule: No credit until 100% complete
  - 50/50 rule: 50% at start, 50% at completion
  - Weighted milestones: Credit at specific milestones
  - Percent complete: Proportional credit (use carefully - subjective)

### Monthly Reporting (During Project)

**Step 1: Determine Planned Value (PV)**
- Sum of budgeted work scheduled to be complete by now
- Read from time-phased baseline

**Step 2: Determine Actual Cost (AC)**
- Sum all costs incurred to date
- Include: invoices paid, labor, materials, equipment, subcontracts

**Step 3: Determine Earned Value (EV)**
- For each work package:
  - Assess percent complete (using pre-defined rules)
  - Multiply budget × percent complete
  - Sum across all work packages

**Step 4: Calculate Variances and Indices**
- SV = EV - PV
- CV = EV - AC
- SPI = EV / PV
- CPI = EV / AC

**Step 5: Forecast**
- EAC = BAC / CPI (or other formula if conditions changed)
- ETC = EAC - AC
- VAC = BAC - EAC
- TCPI = (BAC - EV) / (BAC - AC)

**Step 6: Analyze and Report**
- Create dashboard with key metrics
- Traffic light indicators (Red/Yellow/Green)
- Explain variances and corrective actions

---

## Common EVM Mistakes to Avoid

❌ **Mistake 1: Confusing EV with AC**
- Earned Value is NOT what you spent
- It's the budgeted value of completed work

❌ **Mistake 2: Using subjective percent complete**
- "We're 80% done" is often optimistic
- Use objective measures (milestones, 0/100 rule)

❌ **Mistake 3: Ignoring early warnings**
- CPI rarely improves after first 20% of project
- Don't assume "we'll make it up later"

❌ **Mistake 4: Not updating baseline**
- Approved scope changes must update baseline (BAC, PV)
- Otherwise metrics become meaningless

❌ **Mistake 5: Measuring too infrequently**
- Monthly minimum for projects >$5M
- Weekly for critical periods or troubled projects

❌ **Mistake 6: EVM without schedule network**
- EVM shows you're behind, but not which activities or critical path impact
- Use with CPM scheduling

---

## EVM Dashboard Example

```
PROJECT PERFORMANCE DASHBOARD - MONTH 12
┌──────────────────────────────────────────────────────────┐
│ PROJECT: GreenLeaf Vertical Farm                         │
│ REPORTING PERIOD: Month 12 of 24                         │
│ OVERALL STATUS: 🟡 YELLOW (Performance below target)     │
└──────────────────────────────────────────────────────────┘

EARNED VALUE METRICS:
┌──────────────────────────────┬──────────┬─────────┬────────┐
│ Metric                       │ Value    │ Target  │ Status │
├──────────────────────────────┼──────────┼─────────┼────────┤
│ Budget at Completion (BAC)   │ $30.0M   │ $30.0M  │   -    │
│ Planned Value (PV)           │ $15.0M   │   -     │   -    │
│ Earned Value (EV)            │ $14.2M   │   -     │   -    │
│ Actual Cost (AC)             │ $14.8M   │   -     │   -    │
├──────────────────────────────┼──────────┼─────────┼────────┤
│ Schedule Variance (SV)       │ -$800K   │ $0      │  🔴    │
│ Cost Variance (CV)           │ -$600K   │ $0      │  🔴    │
├──────────────────────────────┼──────────┼─────────┼────────┤
│ SPI (Schedule Performance)   │ 0.947    │ ≥0.95   │  🟡    │
│ CPI (Cost Performance)       │ 0.959    │ ≥0.95   │  🟡    │
├──────────────────────────────┼──────────┼─────────┼────────┤
│ Estimate at Completion       │ $31.3M   │ $30.0M  │  🟡    │
│ Variance at Completion       │ -$1.3M   │ $0      │  🟡    │
│ Estimate to Complete         │ $16.5M   │ $15.0M  │  🟡    │
├──────────────────────────────┼──────────┼─────────┼────────┤
│ TCPI (To-Complete Index)     │ 1.056    │ ≤1.05   │  🟡    │
└──────────────────────────────┴──────────┴─────────┴────────┘

INTERPRETATION:
• Project 5.3% behind schedule (SPI=0.947)
• Project 4.1% over budget (CPI=0.959)
• Forecasted $1.3M overrun at completion
• Must achieve CPI of 1.056 on remaining work to meet budget

CORRECTIVE ACTIONS:
1. Schedule recovery plan implemented (target: 2-week recovery)
2. Productivity improvement initiatives launched
3. Value engineering remaining work (target: $400K savings)
4. Enhanced cost controls and weekly tracking
```

---

## Quick Reference Formulas

```
┌────────────────────────────────────────────────────────┐
│              EVM FORMULA QUICK REFERENCE                │
├────────────────────────────────────────────────────────┤
│ VARIANCES:                                             │
│  Schedule Variance:  SV = EV - PV                      │
│  Cost Variance:      CV = EV - AC                      │
│                                                        │
│ PERFORMANCE INDICES:                                   │
│  Schedule Performance:  SPI = EV / PV                  │
│  Cost Performance:      CPI = EV / AC                  │
│                                                        │
│ FORECASTING:                                           │
│  Estimate at Completion:  EAC = BAC / CPI              │
│  Estimate to Complete:    ETC = EAC - AC               │
│  Variance at Completion:  VAC = BAC - EAC              │
│  To-Complete Index:       TCPI = (BAC-EV)/(BAC-AC)     │
│                                                        │
│ THRESHOLDS (Rules of Thumb):                           │
│  SPI, CPI ≥ 0.95 = Acceptable 🟢                        │
│  SPI, CPI 0.90-0.94 = Caution 🟡                        │
│  SPI, CPI < 0.90 = Serious Concern 🔴                   │
└────────────────────────────────────────────────────────┘
```

---

## For More Information

- **PMI Practice Standard for Earned Value Management**
- **NDIA ANSI/EIA-748 Standard (Earned Value Management Systems)**
- **Course Module 7: Budget Development & Cost Control**

---

*Print this handout for quick reference during project cost control activities*
