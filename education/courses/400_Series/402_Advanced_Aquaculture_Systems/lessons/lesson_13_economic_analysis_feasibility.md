# Lesson 13: Economic Analysis & Feasibility

## Course 402: Advanced Aquaculture Systems | Week 13

---

## Learning Objectives

1. Conduct comprehensive techno-economic analysis for RAS projects
2. Calculate production costs and profitability metrics
3. Perform sensitivity and risk analysis
4. Develop business plans and financial models
5. Evaluate financing options and investment structures
6. Calculate break-even analysis and payback periods

---

## Capital Expenditure (CAPEX) Analysis

### System Components Costs

**100-Tonne Annual Production RAS Facility:**

```
┌────────────────────────────────────────────────────┐
│         CAPITAL COSTS BREAKDOWN                    │
├────────────────────────────────────────────────────┤
│                                                     │
│  BUILDINGS & INFRASTRUCTURE:              $Cost    │
│  ├─ Building (1,500 m²)                  $300,000  │
│  ├─ Site preparation                      $50,000  │
│  ├─ Electrical service upgrade            $75,000  │
│  ├─ Water supply & discharge              $40,000  │
│  └─ Roads, parking, landscaping           $35,000  │
│                          Subtotal:       $500,000  │
│                                                     │
│  CULTURE SYSTEM:                                   │
│  ├─ Tanks (32× 25m³)                     $160,000  │
│  ├─ Plumbing & valves                     $80,000  │
│  ├─ Recirculation pumps                   $60,000  │
│  └─ Support structures                    $40,000  │
│                          Subtotal:       $340,000  │
│                                                     │
│  WATER TREATMENT:                                  │
│  ├─ Biofilters (MBBR)                   $120,000  │
│  ├─ Solids removal (drum filters)        $150,000  │
│  ├─ Oxygenation system                   $100,000  │
│  ├─ Pure O₂ generator (PSA)              $200,000  │
│  ├─ Degassing/aeration                    $60,000  │
│  └─ UV sterilization                      $40,000  │
│                          Subtotal:       $670,000  │
│                                                     │
│  BACKUP & SAFETY:                                  │
│  ├─ Emergency generator (100kW)          $75,000   │
│  ├─ Backup aeration                       $30,000  │
│  ├─ UPS systems                          $25,000  │
│  └─ Fire suppression                      $40,000  │
│                          Subtotal:       $170,000  │
│                                                     │
│  AUTOMATION & MONITORING:                          │
│  ├─ SCADA system                          $80,000  │
│  ├─ Sensors & probes                      $60,000  │
│  ├─ PLCs & controllers                    $50,000  │
│  └─ Automated feeding                     $40,000  │
│                          Subtotal:       $230,000  │
│                                                     │
│  SUPPORT EQUIPMENT:                                │
│  ├─ Grading equipment                     $50,000  │
│  ├─ Harvest equipment                     $30,000  │
│  ├─ Fork lift, vehicles                   $45,000  │
│  ├─ Laboratory equipment                  $25,000  │
│  ├─ Tools & maintenance equipment         $20,000  │
│  └─ Office equipment                      $15,000  │
│                          Subtotal:       $185,000  │
│                                                     │
│  ─────────────────────────────────────────────────  │
│  DIRECT COSTS TOTAL:                  $2,095,000  │
│                                                     │
│  INDIRECT COSTS:                                   │
│  ├─ Engineering & design (8%)            $167,600  │
│  ├─ Project management (5%)              $104,750  │
│  ├─ Contingency (15%)                    $314,250  │
│  └─ Permitting & legal                    $50,000  │
│                          Subtotal:       $636,600  │
│                                                     │
│  ═════════════════════════════════════════════════  │
│  TOTAL CAPITAL INVESTMENT:            $2,731,600  │
│  ═════════════════════════════════════════════════  │
│                                                     │
│  Cost per kg capacity: $27.32/kg                   │
│  Cost per tonne capacity: $27,316/tonne            │
│                                                     │
└────────────────────────────────────────────────────┘
```

### Scaling Factors

**Capital Cost Scaling:**

```
Cost_new = Cost_base × (Capacity_new / Capacity_base)^0.7

Where 0.7 is the economy of scale factor for aquaculture

Example:
100-tonne facility: $2,732,000
Estimate for 200-tonne facility:

Cost_200 = $2,732,000 × (200/100)^0.7
         = $2,732,000 × 1.62
         = $4,426,000

Cost per tonne: $22,130 (vs $27,316 for 100-tonne)
Savings: 19% per unit capacity
```

---

## Operating Expenditure (OPEX) Analysis

### Annual Operating Costs

```
┌────────────────────────────────────────────────────┐
│      ANNUAL OPERATING COSTS (100 tonnes)           │
├────────────────────────────────────────────────────┤
│                                                     │
│  VARIABLE COSTS:                          $/year   │
│  ├─ Feed (130t @ $1,200/tonne)           $156,000  │
│  ├─ Fingerlings (222,000 @ $0.15)         $33,300  │
│  ├─ Oxygen (800 kg/day @ $0.40/kg)       $116,800  │
│  ├─ Electricity (350,000 kWh @ $0.12)     $42,000  │
│  ├─ Water & discharge                      $6,000  │
│  ├─ Chemicals & treatments                 $8,000  │
│  └─ Packaging materials                   $10,000  │
│                          Subtotal:       $372,100  │
│                                                     │
│  FIXED COSTS:                                      │
│  ├─ Labor (4 FTE @ $45,000)              $180,000  │
│  ├─ Management (1 @ $70,000)              $70,000  │
│  ├─ Insurance                             $25,000  │
│  ├─ Property tax                          $15,000  │
│  ├─ Maintenance & repairs                 $40,000  │
│  ├─ Laboratory & testing                  $12,000  │
│  ├─ Utilities (other)                     $10,000  │
│  ├─ Marketing & sales                     $15,000  │
│  ├─ Administration & office               $20,000  │
│  └─ Professional services                 $10,000  │
│                          Subtotal:       $397,000  │
│                                                     │
│  DEPRECIATION:                                     │
│  ├─ Buildings (20 years)                  $25,000  │
│  ├─ Equipment (10 years)                 $160,000  │
│  └─ Vehicles & misc (5 years)             $20,000  │
│                          Subtotal:       $205,000  │
│                                                     │
│  ─────────────────────────────────────────────────  │
│  TOTAL OPERATING COSTS:                 $974,100  │
│  ═════════════════════════════════════════════════  │
│                                                     │
│  Cost Breakdown:                                   │
│  - Variable costs: 38.2% of total                  │
│  - Fixed costs: 40.7% of total                     │
│  - Depreciation: 21.1% of total                    │
│                                                     │
│  Per kg production cost: $9.74/kg                  │
│                                                     │
└────────────────────────────────────────────────────┘

COST DRIVERS:
1. Feed: 16.0% of total costs (largest variable)
2. Labor: 25.7% of total costs (largest fixed)
3. Oxygen: 12.0% of total costs
4. Depreciation: 21.1% of total costs
```

---

## Revenue and Profitability Analysis

### Revenue Projections

```
┌────────────────────────────────────────────────────┐
│           REVENUE ANALYSIS                         │
├────────────────────────────────────────────────────┤
│                                                     │
│  PRODUCTION:                                       │
│  Annual harvest: 100,000 kg (100 tonnes)           │
│  Average size: 500g                                │
│  Count: 200,000 fish                               │
│                                                     │
│  PRICING SCENARIOS:                                │
│                                                     │
│  Conservative ($4.00/kg):                          │
│  Revenue: 100,000 kg × $4.00 =           $400,000  │
│                                                     │
│  Moderate ($4.50/kg):                              │
│  Revenue: 100,000 kg × $4.50 =           $450,000  │
│                                                     │
│  Optimistic ($5.00/kg):                            │
│  Revenue: 100,000 kg × $5.00 =           $500,000  │
│                                                     │
│  PREMIUM MARKET (+$1.00/kg):                       │
│  Revenue: 100,000 kg × $5.50 =           $550,000  │
│                                                     │
└────────────────────────────────────────────────────┘
```

### Profitability Metrics

**Base Case Analysis ($4.50/kg price):**

```
┌────────────────────────────────────────────────────┐
│        PROFITABILITY ANALYSIS (BASE CASE)          │
├────────────────────────────────────────────────────┤
│                                                     │
│  Revenue:                                $450,000  │
│  Less: Variable costs                   ($372,100) │
│  ───────────────────────────────────────────────   │
│  Contribution Margin:                     $77,900  │
│  Contribution Margin %:                      17.3% │
│                                                     │
│  Less: Fixed costs                      ($397,000) │
│  ───────────────────────────────────────────────   │
│  EBITDA (Earnings Before Interest,                │
│          Taxes, Depreciation, Amort.):  ($319,100) │
│  EBITDA Margin:                             -70.9% │
│                                                     │
│  Less: Depreciation                     ($205,000) │
│  ───────────────────────────────────────────────   │
│  Operating Income (EBIT):               ($524,100) │
│                                                     │
│  Less: Interest (6% on $2M loan)        ($120,000) │
│  ───────────────────────────────────────────────   │
│  Net Income Before Tax:                 ($644,100) │
│                                                     │
│  ═════════════════════════════════════════════════  │
│                                                     │
│  CONCLUSION: NOT VIABLE AT 100 TONNES               │
│                                                     │
│  Break-even production needed:                     │
│  Fixed costs / (Price - Variable cost/kg)          │
│  = $397,000 / ($4.50 - $3.72)                      │
│  = $397,000 / $0.78                                │
│  = 509,000 kg = 509 tonnes annual production       │
│                                                     │
│  RECOMMENDATION: Scale up or improve pricing       │
│                                                     │
└────────────────────────────────────────────────────┘
```

### Revised Analysis: 200-Tonne Facility

```
┌────────────────────────────────────────────────────┐
│      200-TONNE FACILITY PROFITABILITY              │
├────────────────────────────────────────────────────┤
│                                                     │
│  CAPITAL INVESTMENT:                  $4,426,000   │
│  (Using scaling factor calculation)                │
│                                                     │
│  OPERATING COSTS:                                  │
│  Variable (200t × $3,721/t):           $744,200   │
│  Fixed (not doubled, +50% only):       $595,500   │
│  Depreciation:                         $360,000   │
│  Total Operating:                    $1,699,700   │
│                                                     │
│  REVENUE ($4.50/kg):                   $900,000   │
│                                                     │
│  PROFITABILITY:                                    │
│  Revenue:                              $900,000   │
│  Less: Variable costs                 ($744,200)  │
│  Contribution Margin:                  $155,800   │
│  Less: Fixed costs                    ($595,500)  │
│  EBITDA:                              ($439,700)  │
│  Less: Depreciation                   ($360,000)  │
│  EBIT:                                ($799,700)  │
│  Less: Interest (6% on $3.5M)         ($210,000)  │
│  Net Loss:                          ($1,009,700)  │
│                                                     │
│  STILL NOT VIABLE - Need higher scale or price     │
│                                                     │
└────────────────────────────────────────────────────┘
```

### Viable Scenario: 500-Tonne Facility

```
┌────────────────────────────────────────────────────┐
│      500-TONNE FACILITY - VIABLE SCALE             │
├────────────────────────────────────────────────────┤
│                                                     │
│  CAPITAL INVESTMENT:                  $9,100,000   │
│  (Includes all systems, building for scale)        │
│                                                     │
│  ANNUAL OPERATING COSTS:                           │
│  Variable ($3,600/t × 500t):         $1,800,000   │
│  Fixed (management, facilities):       $850,000   │
│  Depreciation:                         $750,000   │
│  Total Operating:                    $3,400,000   │
│                                                     │
│  REVENUE ($4.50/kg):                 $2,250,000   │
│                                                     │
│  PROFITABILITY:                                    │
│  Revenue:                            $2,250,000   │
│  Less: Variable costs               ($1,800,000)  │
│  Contribution Margin:                  $450,000   │
│  Contribution Margin %:                     20%    │
│                                                     │
│  Less: Fixed costs                    ($850,000)  │
│  EBITDA:                              ($400,000)  │
│  EBITDA Margin:                          -17.8%   │
│                                                     │
│  Less: Depreciation                   ($750,000)  │
│  EBIT:                              ($1,150,000)  │
│                                                     │
│  Less: Interest (6% on $7M loan)      ($420,000)  │
│  Net Income:                        ($1,570,000)  │
│                                                     │
│  ═════════════════════════════════════════════════  │
│                                                     │
│  WITH PREMIUM PRICING ($5.50/kg):                  │
│  Revenue:                            $2,750,000   │
│  Net Income (after all costs):          $30,000   │
│  Net Margin:                                1.1%   │
│                                                     │
│  MARGINALLY VIABLE with premium pricing            │
│                                                     │
└────────────────────────────────────────────────────┘
```

---

## Break-Even Analysis

### Break-Even Calculation

```
Break-Even Volume (kg) = Fixed Costs / (Price per kg - Variable Cost per kg)

For 500-tonne facility:
Fixed Costs: $850,000 + $750,000 (depreciation) = $1,600,000
Variable Cost per kg: $3.60
Price per kg: $5.50 (premium market)

Break-Even = $1,600,000 / ($5.50 - $3.60)
           = $1,600,000 / $1.90
           = 842,105 kg per year

With $4.50 pricing:
Break-Even = $1,600,000 / ($4.50 - $3.60)
           = 1,777,778 kg per year
           = NOT ACHIEVABLE with 500-tonne capacity

CONCLUSION: Premium pricing ($5.50+/kg) is essential for viability
```

### Visual Break-Even Chart

```
Revenue/Cost ($000)
    │
3500│                                    ╱ Total Revenue
    │                              ╱    ╱  ($5.50/kg)
3000│                         ╱   ╱    ╱
    │                    ╱   ╱    ╱
2500│               ╱   ╱    ╱   ← Break-even point
    │          ╱   ╱    ╱         (842,105 kg)
2000│     ╱   ╱    ╱
    │╱   ╱    ╱   ╱ Total Cost
1500│   ╱    ╱   (Variable + Fixed)
    │  ╱    ╱
1000│ ╱    ╱
    │╱   ╱────────── Fixed Costs ($1.6M)
 500│  ╱
    │╱
   0└─────────────────────────────────────> Production (tonnes)
    0    100   200   300   400   500
```

---

## Sensitivity Analysis

### Key Variables Impact

```
┌────────────────────────────────────────────────────┐
│         SENSITIVITY TO PRICE CHANGES               │
│         (500-tonne facility baseline)              │
├────────────────────────────────────────────────────┤
│                                                     │
│  Sale Price    Revenue      Net Income    Margin   │
│  ──────────────────────────────────────────────     │
│  $4.00/kg    $2,000,000   ($1,570,000)   -78.5%   │
│  $4.50/kg    $2,250,000   ($1,070,000)   -47.6%   │
│  $5.00/kg    $2,500,000    ($570,000)    -22.8%   │
│  $5.50/kg    $2,750,000     ($70,000)     -2.5%   │
│  $6.00/kg    $3,000,000      $430,000     14.3%   │
│  $6.50/kg    $3,250,000      $930,000     28.6%   │
│                                                     │
│  Each $0.50/kg price increase = $250,000 revenue   │
│                               = $500,000 profit swing│
│                                                     │
└────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────┐
│         SENSITIVITY TO FCR CHANGES                 │
├────────────────────────────────────────────────────┤
│                                                     │
│  FCR    Feed Cost    Impact on Net Income          │
│  ────────────────────────────────────────────────   │
│  1.0    $600,000     +$250,000                     │
│  1.1    $660,000     +$150,000                     │
│  1.2    $720,000     +$50,000                      │
│  1.3    $780,000     -$50,000 (base case)          │
│  1.4    $840,000     -$150,000                     │
│  1.5    $900,000     -$250,000                     │
│                                                     │
│  Each 0.1 improvement in FCR = ~$100,000 savings   │
│                                                     │
└────────────────────────────────────────────────────┘
```

---

## Financial Metrics

### Return on Investment (ROI)

```
ROI = (Net Annual Profit / Total Investment) × 100

Viable Scenario (500t, $6.00/kg pricing):
Net Annual Profit: $430,000
Total Investment: $9,100,000

ROI = ($430,000 / $9,100,000) × 100 = 4.7% annually
```

### Payback Period

```
Simple Payback = Total Investment / Annual Net Profit

$9,100,000 / $430,000 = 21.2 years

Discounted Payback (accounting for time value):
~25-30 years

CONCLUSION: Long payback period typical for aquaculture
```

### Net Present Value (NPV)

```
NPV = Σ [Cash Flow_t / (1+r)^t] - Initial Investment

Assumptions:
- Discount rate (r): 8%
- Project life: 20 years
- Annual cash flow: $430,000 (after stabilization in year 3)

NPV = $430,000 × [(1-(1.08)^-20)/0.08] - $9,100,000
    = $430,000 × 9.818 - $9,100,000
    = $4,222,000 - $9,100,000
    = -$4,878,000

NPV < 0 = Project NOT financially attractive at 8% discount

Would need $6.50/kg pricing or higher for positive NPV
```

### Internal Rate of Return (IRR)

```
IRR is the discount rate that makes NPV = 0

For this project: IRR ≈ 2.5%

Interpretation:
- Project returns 2.5% annually
- Below typical hurdle rate (8-12%)
- Below cost of capital
- NOT ATTRACTIVE as pure financial investment

However:
- Strategic value (vertical integration)
- Environmental benefits
- Food security contribution
- May justify lower return
```

---

## Financing Options

### Debt Financing

```
┌────────────────────────────────────────────────────┐
│           LOAN STRUCTURE EXAMPLE                   │
├────────────────────────────────────────────────────┤
│                                                     │
│  Total Investment:                    $9,100,000   │
│  Equity (25%):                        $2,275,000   │
│  Debt (75%):                          $6,825,000   │
│                                                     │
│  Loan Terms:                                       │
│  Amount:                              $6,825,000   │
│  Interest rate:                             6.0%   │
│  Term:                                   15 years   │
│  Annual payment:                        $703,000   │
│                                                     │
│  Impact on Cash Flow:                              │
│  EBITDA:                                $850,000   │
│  Less: Loan payment                    ($703,000)  │
│  Cash available:                        $147,000   │
│                                                     │
│  Debt Service Coverage Ratio:                     │
│  DSCR = EBITDA / Debt Service                      │
│       = $850,000 / $703,000                        │
│       = 1.21                                       │
│                                                     │
│  Lenders typically require DSCR > 1.25             │
│  This project is borderline                        │
│                                                     │
└────────────────────────────────────────────────────┘
```

### Grant and Subsidy Programs

**Potential Funding Sources:**

- USDA Rural Development grants
- State aquaculture development programs
- Economic development incentives
- Environmental/sustainability grants
- University partnerships (research funding)
- Tax credits (renewable energy, job creation)

**Impact of 30% Grant:**

```
If $2,730,000 grant received (30% of capital):

Revised Investment: $6,370,000
Equity needed (25%): $1,592,500
Debt (75%): $4,777,500

Annual debt service: $492,000

EBITDA: $850,000
Debt service: $492,000
Cash available: $358,000

DSCR: 1.73 ✓ (much improved)

Payback improves to ~15 years
NPV becomes positive
Project becomes financially viable
```

---

## Risk Analysis

### Major Risk Factors

```
┌────────────────────────────────────────────────────┐
│              RISK ASSESSMENT MATRIX                │
├────────────────────────────────────────────────────┤
│                                                     │
│  Risk              Probability  Impact   Mitigation│
│  ────────────────────────────────────────────────  │
│  Disease outbreak    Medium      High    Biosecurity,│
│                                           vaccination│
│                                                     │
│  Market price drop   Medium      High    Contracts,│
│                                           premium market│
│                                                     │
│  Equipment failure   Medium    Medium    Maintenance,│
│                                           redundancy│
│                                                     │
│  Power outage        Low        High    Generator,│
│                                           UPS, alarms│
│                                                     │
│  Regulatory change   Low       Medium    Compliance,│
│                                           flexibility│
│                                                     │
│  Feed cost increase  High      Medium    Contracts,│
│                                           FCR improve│
│                                                     │
│  Labor shortage      Medium     Medium    Automation,│
│                                           training  │
│                                                     │
└────────────────────────────────────────────────────┘
```

---

## Key Takeaways

1. **Scale matters** - small facilities rarely profitable
2. **500+ tonnes minimum** - economies of scale essential
3. **Premium pricing critical** - $5.50-6.00/kg needed for viability
4. **Feed is largest variable cost** - optimize FCR
5. **Fixed costs are high** - must operate at capacity
6. **Long payback periods** - 15-25 years typical
7. **Grants improve viability** - seek all available funding
8. **Market access essential** - secure buyers before building

---

*Next Lesson: Module 14 - Case Studies & Industry Applications*

*EcoFusion Academy - Course 402: Advanced Aquaculture Systems*
