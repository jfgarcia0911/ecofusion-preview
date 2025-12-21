# Module 7: Budget Development & Cost Control

## Learning Objectives

By the end of this module, you will be able to:
- Develop comprehensive project budgets using bottom-up estimating
- Allocate and manage contingency reserves appropriately
- Implement earned value management (EVM) for integrated cost/schedule control
- Track and forecast costs using cost performance metrics
- Manage cash flow and funding requirements
- Control costs through effective change order management

---

## 1. Cost Estimating & Budget Development

### Cost Estimating Accuracy Levels

```
COST ESTIMATE CLASSIFICATION
+====================================================================================+
| Class | Project Phase  | Purpose            | Accuracy    | Effort   | Basis      |
+=======+================+====================+=============+==========+============+
| 5     | Concept        | Feasibility        | -50% to     | Minimal  | Capacity,  |
|       |                | screening          | +100%       |          | analogous  |
+-------+----------------+--------------------+-------------+----------+------------+
| 4     | Feasibility    | Business case,     | -30% to +50%| Low      | Parametric,|
|       |                | go/no-go           |             |          | vendor     |
|       |                |                    |             |          | budgetary  |
+-------+----------------+--------------------+-------------+----------+------------+
| 3     | Design (30%)   | Budget approval,   | -20% to +30%| Medium   | Preliminary|
|       |                | funding            |             |          | design,    |
|       |                |                    |             |          | quantities |
+-------+----------------+--------------------+-------------+----------+------------+
| 2     | Design (90%)   | Control budget,    | -10% to +15%| Medium-  | Detailed   |
|       |                | contracting        |             | High     | design,    |
|       |                |                    |             |          | firm quotes|
+-------+----------------+--------------------+-------------+----------+------------+
| 1     | Construction   | Change control     | -5% to +10% | High     | Bids,      |
|       | ready          | baseline           |             |          | contracts, |
|       |                |                    |             |          | actual     |
+====================================================================================+

CEA PROJECT ESTIMATE PROGRESSION:
Concept ($50M ±$35M):         $15M - $85M range
Feasibility ($30M ±$9M):      $21M - $39M range
30% Design ($30M ±$6M):       $24M - $36M range
90% Design ($30M ±$3M):       $27M - $33M range
Bid/Contract ($30M ±$1.5M):   $28.5M - $31.5M range
```

### Bottom-Up Cost Estimating

```
COST BREAKDOWN STRUCTURE (CBS)
+=====================================================================+
| WBS     | Cost Element           | Quantity | Unit Cost | Total     |
+=========+========================+==========+===========+===========+
| 1.6.1.1 | CHILLER INSTALLATION                                        |
+---------+------------------------+----------+-----------+-----------+
|         | Equipment:                                                  |
|         | - 500-ton chiller      | 2 ea     | $250,000  | $500,000  |
|         | - Chilled water pumps  | 4 ea     | $15,000   | $60,000   |
|         | - Cooling towers       | 2 ea     | $75,000   | $150,000  |
|         | - Water treatment      | 1 lot    | $25,000   | $25,000   |
|         | Equipment Subtotal:                            | $735,000  |
+---------+------------------------+----------+-----------+-----------+
|         | Installation Labor:                                         |
|         | - Rigging & setting    | 120 hrs  | $95/hr    | $11,400   |
|         | - Piping installation  | 800 hrs  | $85/hr    | $68,000   |
|         | - Electrical conn.     | 200 hrs  | $90/hr    | $18,000   |
|         | - Controls integration | 160 hrs  | $100/hr   | $16,000   |
|         | - Startup support      | 80 hrs   | $110/hr   | $8,800    |
|         | Labor Subtotal:                                | $122,200  |
+---------+------------------------+----------+-----------+-----------+
|         | Materials (piping, valves, fittings, wire):    | $85,000   |
|         | Subcontractor overhead & profit (15%):         | $31,080   |
|         | Equipment freight & delivery:                  | $18,000   |
+---------+------------------------+----------+-----------+-----------+
|         | WORK PACKAGE TOTAL:                            | $991,280  |
|         | Rounded to:                                    | $1,000,000|
+=====================================================================+
```

### Contingency Allocation

```
CONTINGENCY FRAMEWORK
+===================================================================+
|                                                                   |
| CONTINGENCY RESERVE (Known-Unknowns)                              |
| - Identified risks with mitigation costs                          |
| - Design development changes                                      |
| - Minor scope adjustments                                         |
| - Typical: 10-20% for CEA projects                                |
| - Managed by Project Manager                                      |
| - Drawn down through change control process                       |
|                                                                   |
+-------------------------------------------------------------------+
|                                                                   |
| MANAGEMENT RESERVE (Unknown-Unknowns)                             |
| - Unidentified risks                                              |
| - Major scope changes outside baseline                            |
| - Typical: 5-10% for CEA projects                                 |
| - Managed by Sponsor/Executive                                    |
| - Requires formal approval to access                              |
| - Not included in performance measurement baseline                |
|                                                                   |
+===================================================================+

CONTINGENCY ALLOCATION EXAMPLE:
+-------------------------------------------------------------------+
| Base Cost Estimate:                    $27,200,000                |
| Contingency Reserve (10%):             $2,800,000                 |
| -----------------------------------------------------------       |
| TOTAL PROJECT BUDGET:                  $30,000,000                |
| ===========================                                       |
| Management Reserve (5%):               $1,500,000                 |
| -----------------------------------------------------------       |
| TOTAL FUNDING REQUIREMENT:             $31,500,000                |
+-------------------------------------------------------------------+

CONTINGENCY DRAWDOWN TRIGGERS:
- Design changes: Allocated per change order
- Risk events: Allocated per risk response plan
- Productivity variances: Monthly allocation based on CPI
- Schedule recovery: Allocated for crash/acceleration costs
```

---

## 2. Earned Value Management (EVM)

### EVM Core Metrics

```
EARNED VALUE MANAGEMENT FUNDAMENTALS
+===================================================================+
|                                                                   |
| THREE KEY VALUES:                                                 |
|                                                                   |
| PLANNED VALUE (PV) - Budgeted Cost of Work Scheduled              |
| What you PLANNED to spend by this date                           |
|                                                                   |
| EARNED VALUE (EV) - Budgeted Cost of Work Performed               |
| Value of work ACTUALLY completed (at budget rates)                |
|                                                                   |
| ACTUAL COST (AC) - Actual Cost of Work Performed                  |
| What you ACTUALLY spent                                           |
|                                                                   |
+-------------------------------------------------------------------+
|                                                                   |
| VARIANCE ANALYSIS:                                                |
|                                                                   |
| SCHEDULE VARIANCE (SV) = EV - PV                                  |
| Positive = Ahead of schedule                                      |
| Negative = Behind schedule                                        |
|                                                                   |
| COST VARIANCE (CV) = EV - AC                                      |
| Positive = Under budget                                           |
| Negative = Over budget                                            |
|                                                                   |
+-------------------------------------------------------------------+
|                                                                   |
| PERFORMANCE INDICES:                                              |
|                                                                   |
| SCHEDULE PERFORMANCE INDEX (SPI) = EV / PV                        |
| >1.0 = Ahead of schedule                                          |
| <1.0 = Behind schedule                                            |
|                                                                   |
| COST PERFORMANCE INDEX (CPI) = EV / AC                            |
| >1.0 = Under budget (good!)                                       |
| <1.0 = Over budget (concern)                                      |
|                                                                   |
+-------------------------------------------------------------------+
|                                                                   |
| FORECASTING:                                                      |
|                                                                   |
| ESTIMATE AT COMPLETION (EAC) = BAC / CPI                          |
| (Assumes current performance continues)                           |
|                                                                   |
| ESTIMATE TO COMPLETE (ETC) = EAC - AC                             |
| (How much more money needed)                                      |
|                                                                   |
| VARIANCE AT COMPLETION (VAC) = BAC - EAC                          |
| (Projected over/under budget at completion)                       |
|                                                                   |
+===================================================================+
```

### EVM Example - CEA Project Month 12

```
EARNED VALUE ANALYSIS - MONTH 12
+===================================================================+
| PROJECT: GreenLeaf Vertical Farm                                  |
| REPORTING PERIOD: Month 12 (of 24-month project)                  |
+===================================================================+

BUDGET AT COMPLETION (BAC): $30,000,000

CURRENT STATUS:
+-------------------------------------------------------------------+
| Planned Value (PV):        $15,000,000  (should have completed)   |
| Earned Value (EV):         $14,200,000  (actually completed)      |
| Actual Cost (AC):          $14,800,000  (actually spent)          |
+-------------------------------------------------------------------+

VARIANCE ANALYSIS:
+-------------------------------------------------------------------+
| Schedule Variance (SV):    $14.2M - $15.0M = -$800,000            |
| Interpretation: Project is $800K behind schedule                  |
|                                                                   |
| Cost Variance (CV):        $14.2M - $14.8M = -$600,000            |
| Interpretation: Project is $600K over budget                      |
+-------------------------------------------------------------------+

PERFORMANCE INDICES:
+-------------------------------------------------------------------+
| SPI = $14.2M / $15.0M = 0.947                                     |
| Interpretation: Completing work at 94.7% of planned rate          |
|                 (5.3% behind schedule)                            |
|                                                                   |
| CPI = $14.2M / $14.8M = 0.959                                     |
| Interpretation: Getting $0.96 of value for every $1 spent         |
|                 (4.1% over budget)                                |
+-------------------------------------------------------------------+

FORECASTING:
+-------------------------------------------------------------------+
| EAC = $30M / 0.959 = $31,282,000                                  |
| Interpretation: Project forecasted to cost $31.3M at completion   |
|                                                                   |
| VAC = $30M - $31.3M = -$1,282,000                                 |
| Interpretation: Projected to be $1.28M over budget                |
|                                                                   |
| ETC = $31.3M - $14.8M = $16,500,000                               |
| Interpretation: Need $16.5M more to complete (vs $15.2M planned)  |
+-------------------------------------------------------------------+

MANAGEMENT ACTIONS REQUIRED:
+-------------------------------------------------------------------+
| CONCERN LEVEL: YELLOW (Performance below targets)                 |
|                                                                   |
| IMMEDIATE ACTIONS:                                                |
| 1. Root cause analysis of schedule delays (focus on critical path)|
| 2. Productivity improvement plan for remaining work                |
| 3. Re-estimate remaining work packages (validate ETC)              |
| 4. Identify schedule recovery options (crash analysis)             |
| 5. Review contingency drawdown plan ($2.8M budgeted, $1.3M needed)|
|                                                                   |
| REPORTING:                                                        |
| - Notify Steering Committee of status and corrective actions      |
| - Weekly monitoring until CPI and SPI improve to >0.95            |
+-------------------------------------------------------------------+
```

### S-Curve Analysis

```
CUMULATIVE COST CURVE (S-CURVE)
+===================================================================+
|                                                                   |
| $M                                                                |
| 30 |                                            EAC ----           |
|    |                                       BAC ----/               |
| 25 |                                      ----/  /                 |
|    |                                 ----/     /                  |
| 20 |                            ----/        /  AC (Actual)       |
|    |                       ----/           /                      |
| 15 |                  ----/   PV (Plan)  /    EV (Earned)         |
|    |             ----/              ---+---                       |
| 10 |        ----/              ----/  /                           |
|    |   ----/              ----/     /                             |
|  5 | --/             ----/        /                               |
|    |/          ----/            /                                 |
|  0 +--------------------------------------------------------      |
|    0   3    6    9   12   15   18   21   24  Month               |
|                          ^                                        |
|                     Current Status                                |
|                                                                   |
| INTERPRETATION:                                                   |
| - AC above PV: Spending faster than planned                       |
| - EV below PV: Completing work slower than planned                |
| - AC above EV: Costs higher than budgeted for work done           |
| - EAC > BAC: Forecasting budget overrun                           |
|                                                                   |
+===================================================================+
```

---

## 3. Cost Control & Change Management

### Change Order Cost Impact Analysis

```
CHANGE ORDER COST ANALYSIS
+===================================================================+
| CHANGE ORDER #: CO-018                                            |
| DESCRIPTION: Add CO2 enrichment system                            |
+===================================================================+

DIRECT COSTS:
+-------------------------------------------------------------------+
| Equipment:                                                        |
| - CO2 storage tank (5-ton)              $45,000                   |
| - Distribution manifold & piping        $35,000                   |
| - Sensors and controls                  $25,000                   |
| - Safety monitoring system              $15,000                   |
| Equipment Subtotal:                     $120,000                  |
+-------------------------------------------------------------------+
| Installation Labor:                                               |
| - Mechanical installation (160 hrs)     $15,000                   |
| - Electrical installation (80 hrs)      $8,000                    |
| - Controls programming (40 hrs)         $5,000                    |
| - Testing & commissioning (40 hrs)      $6,000                    |
| Labor Subtotal:                         $34,000                   |
+-------------------------------------------------------------------+
| Materials & Consumables:                $8,000                    |
| Contractor O&P (12%):                   $19,440                   |
+-------------------------------------------------------------------+
| TOTAL DIRECT COST:                      $181,440                  |
+===================================================================+

INDIRECT COSTS:
+-------------------------------------------------------------------+
| Engineering/Design Changes:                                       |
| - Mechanical engineering (40 hrs)       $6,000                    |
| - Electrical engineering (24 hrs)       $3,600                    |
| - Controls engineering (32 hrs)         $4,800                    |
| Engineering Subtotal:                   $14,400                   |
+-------------------------------------------------------------------+
| Project Management:                                               |
| - Procurement coordination              $2,000                    |
| - Vendor management                     $1,500                    |
| - Schedule impact (re-baseline)         $1,000                    |
| PM Subtotal:                            $4,500                    |
+-------------------------------------------------------------------+
| Commissioning:                                                    |
| - Updated comm. plan                    $2,000                    |
| - Performance testing                   $4,000                    |
| - Training materials update             $1,500                    |
| Commissioning Subtotal:                 $7,500                    |
+-------------------------------------------------------------------+
| TOTAL INDIRECT COST:                    $26,400                   |
+===================================================================+

CONTINGENCY:
+-------------------------------------------------------------------+
| Change Contingency (10%):               $20,784                   |
+-------------------------------------------------------------------+

TOTAL CHANGE ORDER COST:                  $228,624                  |
Rounded to:                               $230,000                  |

+===================================================================+

FUNDING SOURCE ANALYSIS:
+-------------------------------------------------------------------+
| Option 1: Project Contingency                                     |
| - Contingency available: $1,100,000                               |
| - This change: $230,000 (21% of remaining)                        |
| - Remaining after change: $870,000                                |
| - Recommendation: FEASIBLE                                        |
|                                                                   |
| Option 2: Budget Increase                                         |
| - Requires Sponsor approval                                       |
| - Impacts overall project budget baseline                         |
| - Recommendation: NOT NECESSARY (contingency sufficient)          |
+-------------------------------------------------------------------+
```

### Cost Control Dashboard

```
PROJECT COST DASHBOARD - MONTH 12
+=====================================================================+
| OVERALL COST STATUS: 🟡 YELLOW                                     |
+=====================================================================+

BUDGET SUMMARY:
+---------------------------------------------------------------------+
| Budget at Completion (BAC):          $30,000,000                    |
| Actual Cost to Date:                 $14,800,000  (49.3%)           |
| Committed Costs:                     $22,500,000  (75.0%)           |
| Estimate at Completion (EAC):        $31,282,000                    |
| Variance at Completion (VAC):        -$1,282,000  (4.3% over)       |
+---------------------------------------------------------------------+

PERFORMANCE METRICS:
+---------------------------------------------------------------------+
| Cost Performance Index (CPI):        0.959  🟡 (Target: ≥0.95)      |
| Schedule Performance Index (SPI):    0.947  🟡 (Target: ≥0.95)      |
| To-Complete Performance Index:       1.056  (Must achieve)          |
|   (TCPI = Work Remaining / Funds Remaining)                         |
+---------------------------------------------------------------------+

CONTINGENCY STATUS:
+---------------------------------------------------------------------+
| Original Contingency:                $2,800,000  (100%)             |
| Used to Date:                        $1,250,000  (45%)              |
| Committed (approved changes):        $680,000    (24%)              |
| Available:                           $870,000    (31%)              |
|                                                                     |
| Projected Need (based on CPI):       $1,950,000                     |
| GAP:                                 -$1,080,000  ⚠ CONCERN          |
+---------------------------------------------------------------------+

MAJOR COST DRIVERS (TOP 5):
+---------------------------------------------------------------------+
| 1. HVAC System                       $6,200,000  (20.7% of budget)  |
|    Status: On budget, on schedule                                   |
|                                                                     |
| 2. Lighting Systems                  $5,800,000  (19.3% of budget)  |
|    Status: 3% under budget, ahead of schedule                       |
|                                                                     |
| 3. Building Construction             $5,500,000  (18.3% of budget)  |
|    Status: 2% over budget, on schedule                              |
|                                                                     |
| 4. Growing Systems                   $4,600,000  (15.3% of budget)  |
|    Status: On budget, 1 week behind schedule                        |
|                                                                     |
| 5. Site & Civil Work                 $2,100,000  (7.0% of budget)   |
|    Status: 5% over budget, complete                                 |
+---------------------------------------------------------------------+

VARIANCE ANALYSIS:
+---------------------------------------------------------------------+
| Favorable Variances:                                                |
| + Lighting: Competitive bidding saved $180K                         |
| + Electrical: Efficient installation, $75K under                    |
|                                                                     |
| Unfavorable Variances:                                              |
| - Site work: Unexpected rock, $105K over                            |
| - General conditions: Extended schedule, $95K over                  |
| - Design changes (approved): $680K                                  |
| - Productivity below estimate: $250K impact                         |
+---------------------------------------------------------------------+

FORECAST & ACTIONS:
+---------------------------------------------------------------------+
| RISK ASSESSMENT: MODERATE                                           |
| - Current trajectory projects $1.28M overrun                        |
| - Contingency insufficient to cover at current performance          |
| - 12 months remaining, performance must improve                     |
|                                                                     |
| CORRECTIVE ACTIONS IN PROGRESS:                                     |
| 1. Value engineering remaining work (target: $400K savings)         |
| 2. Productivity improvement program (target: 5% improvement)        |
| 3. Competitive bidding for remaining packages (target: $200K savings)|
| 4. Delay non-critical items to future phase (target: $300K deferral)|
| 5. Strict change control (no non-essential changes)                 |
|                                                                     |
| TARGET: Return CPI to 0.95+ by Month 15                             |
+---------------------------------------------------------------------+
```

---

## 4. Cash Flow Management

### Cash Flow Projection

```
PROJECT CASH FLOW FORECAST
+====================================================================================+
| Quarter | Planned   | Actual    | Variance  | Funding     | Cash      | Cumulative|
|         | Spend     | Spend     |           | Drawdown    | Balance   | Spend     |
+=========+===========+===========+===========+=============+===========+===========+
| Q1-2025 | $1,200,000| $1,150,000| +$50,000  | $1,500,000  | $350,000  | $1,150,000|
| Q2-2025 | $2,800,000| $2,950,000| -$150,000 | $3,000,000  | $400,000  | $4,100,000|
| Q3-2025 | $4,500,000| $4,200,000| +$300,000 | $4,500,000  | $700,000  | $8,300,000|
| Q4-2025 | $3,800,000| $3,950,000| -$150,000 | $4,000,000  | $750,000  |$12,250,000|
| Q1-2026 | $5,200,000| (forecast)| --        | $5,500,000  | (proj.)   |$17,450,000|
| Q2-2026 | $6,500,000| (forecast)| --        | $7,000,000  | (proj.)   |$23,950,000|
| Q3-2026 | $4,800,000| (forecast)| --        | $5,000,000  | (proj.)   |$28,750,000|
| Q4-2026 | $1,200,000| (forecast)| --        | $1,250,000  | (proj.)   |$29,950,000|
+====================================================================================+

CASH FLOW MANAGEMENT CONSIDERATIONS:
+-------------------------------------------------------------------+
| OPTIMIZE TIMING:                                                  |
| ✓ Schedule funding drawdowns to minimize idle cash               |
| ✓ Negotiate payment terms with vendors (Net 30, Net 60)          |
| ✓ Front-load retainage releases where possible                   |
| ✓ Coordinate major equipment payments with delivery/milestones   |
|                                                                   |
| MANAGE WORKING CAPITAL:                                           |
| ✓ Maintain minimum cash balance ($500K buffer)                    |
| ✓ Plan for seasonal variations (winter weather delays)            |
| ✓ Coordinate with lender on draw schedule and requirements       |
|                                                                   |
| RISK MITIGATION:                                                  |
| ✓ Have contingent funding source identified                       |
| ✓ Monitor contractor payment applications closely                 |
| ✓ Avoid cash-flow driven compromises on quality/safety            |
+-------------------------------------------------------------------+
```

---

## Key Takeaways

1. **Accurate estimating requires detail** - Bottom-up estimates are most reliable but require time and data.

2. **Contingency is not extra budget** - It's for identified risks and scope refinement, not poor performance.

3. **EVM provides integrated view** - Cost and schedule together, not in isolation.

4. **CPI is predictive** - Historical CPI is strong predictor of final cost performance.

5. **Early detection enables correction** - Monthly EVM analysis catches problems while recoverable.

6. **Cash flow planning is critical** - Running out of cash stops projects even if budget exists.

7. **Change control protects budget** - Every change has cost impact, direct and indirect.

---

## Practical Exercise

**Cost Control Simulation**

Given project data:
- BAC: $25M
- Month 10 of 20-month project
- PV: $12.5M, EV: $11.8M, AC: $12.3M

Calculate:
1. SV, CV, SPI, CPI
2. EAC, VAC, ETC
3. Interpret results
4. Develop corrective action plan
5. Create cost dashboard presentation for steering committee

---

## Next Module

In **Module 8: Risk Identification & Quantitative Analysis**, we will learn systematic approaches to identifying project risks, assessing probability and impact, and developing quantitative risk models.

---

*Module 7 of 14 - CEA Project Management*
