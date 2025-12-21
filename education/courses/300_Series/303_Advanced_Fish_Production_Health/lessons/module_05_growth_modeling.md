# Module 5: Growth Modeling & Prediction

**Duration:** 1 hour
**Course:** 303 - Advanced Fish Production & Health

---

## Learning Objectives

By the end of this module, you will be able to:
1. Apply growth models to predict fish production
2. Calculate specific growth rate (SGR) and thermal growth coefficient (TGC)
3. Project harvest dates and biomass
4. Optimize stocking and grading schedules
5. Use growth data for business planning

---

## 1. Growth Fundamentals

### Growth Patterns

```
FISH GROWTH CURVE

Weight
  │
  │                    ┌──────────
  │                  ╱
  │                ╱  Asymptotic phase
  │              ╱    (slowing growth)
  │            ╱
  │          ╱  Exponential phase
  │        ╱    (rapid growth)
  │      ╱
  │    ╱  Lag phase
  │  ╱    (adaptation)
  │╱
  └────────────────────────────────> Time

Sigmoid (S-shaped) Growth Curve
```

### Factors Affecting Growth

| Factor | Effect | Optimization |
|--------|--------|--------------|
| **Temperature** | Exponential within optimal range | Maintain species optimum |
| **Oxygen** | Linear until saturation | Keep >6 mg/L |
| **Feed Quality** | Direct correlation | High-quality protein/energy |
| **Feed Rate** | Optimal curve exists | Match to appetite |
| **Stocking Density** | Inverse relationship | Monitor and adjust |
| **Genetics** | Determines growth potential | Select improved strains |
| **Health** | Disease reduces growth | Biosecurity, vaccination |

---

## 2. Growth Rate Calculations

### Absolute Growth Rate (AGR)

```
AGR (g/day) = (Final Weight - Initial Weight) ÷ Days

Example:
  Initial weight: 50g
  Final weight: 200g
  Days: 60

  AGR = (200 - 50) ÷ 60 = 2.5 g/day

Limitations:
  - Doesn't account for fish size
  - Can't compare different size classes
  - Linear assumption
```

### Specific Growth Rate (SGR)

```
SGR (%/day) = ((ln(Wf) - ln(Wi)) ÷ t) × 100

Where:
  Wf = Final weight (g)
  Wi = Initial weight (g)
  t = Time (days)
  ln = Natural logarithm


Example Calculation:
  Initial: 50g
  Final: 200g
  Days: 60

  SGR = ((ln(200) - ln(50)) ÷ 60) × 100
      = ((5.298 - 3.912) ÷ 60) × 100
      = (1.386 ÷ 60) × 100
      = 2.31% per day


Interpretation:
  SGR < 1.0%/day = Poor growth
  SGR 1.0-2.0%/day = Moderate growth
  SGR 2.0-3.0%/day = Good growth
  SGR > 3.0%/day = Excellent growth (usually small fish)
```

### Thermal Growth Coefficient (TGC)

```
TGC = ((Wf^(1/3) - Wi^(1/3)) ÷ (T × t)) × 1000

Where:
  Wf = Final weight (g)
  Wi = Initial weight (g)
  T = Temperature (°C)
  t = Time (days)


Example (Trout at 15°C):
  Initial: 50g
  Final: 200g
  Days: 60
  Temperature: 15°C

  TGC = ((200^0.333 - 50^0.333) ÷ (15 × 60)) × 1000
      = ((5.848 - 3.684) ÷ 900) × 1000
      = (2.164 ÷ 900) × 1000
      = 2.40


Advantage:
  ✓ Temperature-independent
  ✓ Can compare across different temperatures
  ✓ More accurate for salmonids
  ✓ Useful for modeling

Typical TGC values:
  Rainbow trout: 2.0-3.5
  Atlantic salmon: 3.0-4.5
```

---

## 3. Growth Models

### Von Bertalanffy Growth Model

```
VBGM (Von Bertalanffy Growth Model)

Wt = W∞ × (1 - e^(-K(t-t0)))^3

Where:
  Wt = Weight at time t
  W∞ = Asymptotic (maximum) weight
  K = Growth coefficient
  t = Time (days or years)
  t0 = Theoretical age at zero length
  e = Euler's number (2.71828)


Species Parameters (Example):

Tilapia:
  W∞ = 2,500g (max weight)
  K = 0.003 (per day)
  t0 = -10 days

Prediction for 180 days:
  W180 = 2500 × (1 - e^(-0.003(180-(-10))))^3
       = 2500 × (1 - e^(-0.57))^3
       = 2500 × (1 - 0.566)^3
       = 2500 × 0.082
       = 205g
```

### Gompertz Growth Model

```
GOMPERTZ MODEL

Wt = W∞ × e^(-e^(-K(t-ti)))

Where:
  Wt = Weight at time t
  W∞ = Asymptotic weight
  K = Growth rate
  ti = Inflection point
  e = Euler's number


Better for:
  ✓ Early life stages
  ✓ Intensive culture
  ✓ Short growth cycles
```

### Logistic Growth Model

```
LOGISTIC MODEL

Wt = W∞ ÷ (1 + e^(-K(t-ti)))

Where:
  Wt = Weight at time t
  W∞ = Carrying capacity (max weight)
  K = Growth rate
  ti = Time at inflection point


Application:
  - Simple S-curve
  - Density-dependent growth
  - Resource limitation modeling
```

---

## 4. Practical Growth Modeling

### Creating a Growth Table

```
TILAPIA GROWTH PROJECTION

Conditions:
  - Initial: 10g fingerlings
  - Temperature: 28°C
  - SGR: 2.5%/day (declining with size)
  - Target: 500g

Month │ Days │ SGR(%/d) │ Weight(g) │ Daily Gain(g)
──────┼──────┼──────────┼───────────┼──────────────
  0   │   0  │   2.50   │    10     │    0.25
  1   │  30  │   2.40   │    21     │    0.50
  2   │  60  │   2.20   │    43     │    0.95
  3   │  90  │   2.00   │    82     │    1.64
  4   │ 120  │   1.80   │   145     │    2.61
  5   │ 150  │   1.60   │   239     │    3.82
  6   │ 180  │   1.40   │   365     │    5.11
  7   │ 210  │   1.20   │   505     │    6.06

Target reached: ~210 days (7 months)


Growth Formula Used:
  Weight(month+1) = Weight(month) × e^(SGR/100 × 30)
```

### Cohort Analysis

```
MULTIPLE STOCKING COHORTS

Tank System: 4 tanks, rotating production

Tank 1:  Month 0 → 7   (Stock to harvest)
Tank 2:  Month 2 → 9   (2-month delay)
Tank 3:  Month 4 → 11  (4-month delay)
Tank 4:  Month 6 → 13  (6-month delay)

Result: Harvest every 2 months after Month 7

Continuous Production:
  Month 7:  Tank 1 harvest → Restock
  Month 9:  Tank 2 harvest → Restock
  Month 11: Tank 3 harvest → Restock
  Month 13: Tank 4 harvest → Restock
  Month 14: Tank 1 harvest → Restock (cycle repeats)
```

---

## 5. Biomass Projections

### Population Biomass Calculation

```
BIOMASS GROWTH MODEL

Bt = N × W̄t × SR

Where:
  Bt = Biomass at time t
  N = Initial number of fish
  W̄t = Average weight at time t
  SR = Survival rate (decimal)


Example Projection:

Initial Stocking:
  Fish: 1,000
  Weight: 50g each
  Biomass: 50 kg

Month 3:
  Fish: 1,000 × 0.97 = 970 (97% survival)
  Weight: 150g each
  Biomass: 970 × 0.15 = 145.5 kg

Month 6:
  Fish: 1,000 × 0.95 = 950 (95% cumulative survival)
  Weight: 350g each
  Biomass: 950 × 0.35 = 332.5 kg

Month 9:
  Fish: 1,000 × 0.93 = 930 (93% survival)
  Weight: 500g each
  Biomass: 930 × 0.50 = 465 kg
```

### Density Impact Modeling

```
CARRYING CAPACITY ADJUSTMENT

Basic Model:
  Growth Rate = Base SGR × (1 - (Current Density ÷ Max Density))

Example:
  Base SGR: 2.5%/day
  Current density: 40 kg/m³
  Max density: 80 kg/m³

  Adjusted SGR = 2.5 × (1 - (40 ÷ 80))
               = 2.5 × (1 - 0.5)
               = 2.5 × 0.5
               = 1.25%/day


Impact on Production:

Density    │ Adjusted SGR │ Days to 500g │ Impact
───────────┼──────────────┼──────────────┼────────
20 kg/m³   │   2.38%/d    │    175       │  Best
40 kg/m³   │   2.13%/d    │    195       │  Good
60 kg/m³   │   1.88%/d    │    221       │  Fair
80 kg/m³   │   1.63%/d    │    254       │  Poor
```

---

## 6. Grading and Size Distribution

### Coefficient of Variation (CV)

```
CV (%) = (Standard Deviation ÷ Mean Weight) × 100

Example Population:
  Sample weights (g): 95, 105, 110, 98, 102, 115, 92, 108

  Mean = 103.1g
  SD = 7.9g

  CV = (7.9 ÷ 103.1) × 100 = 7.7%


Interpretation:
  CV < 10% = Excellent uniformity
  CV 10-15% = Good uniformity
  CV 15-25% = Moderate uniformity
  CV > 25% = Poor uniformity (grade needed)


Management:
  High CV → Increased grading frequency
  Low CV → Efficient production, better FCR
```

### Grading Strategy

```
GRADING PROTOCOL

When to Grade:
  ✓ CV exceeds 20%
  ✓ Visible size differences
  ✓ Feeding competition observed
  ✓ Every 4-6 weeks in intensive systems

Size Classes:
  Small:   <80% of mean weight
  Medium:  80-120% of mean weight
  Large:   >120% of mean weight


Example Grading Results:

Initial Population: 1,000 fish, mean 150g, CV 28%

After Grading:
  Small (120g avg):   200 fish → Tank A
  Medium (150g avg):  600 fish → Tank B
  Large (200g avg):   200 fish → Tank C

New CV in each tank: 8-12%


Benefits:
  ✓ Reduced competition
  ✓ Improved FCR
  ✓ Better feed size matching
  ✓ Uniform harvest size
  ✓ Higher survival
```

---

## 7. Production Forecasting

### Harvest Date Prediction

```
HARVEST DATE CALCULATOR

Given:
  - Current weight: 100g
  - Target weight: 500g
  - Current SGR: 1.8%/day

Formula:
  Days = (ln(Target) - ln(Current)) ÷ (SGR ÷ 100)

Calculation:
  Days = (ln(500) - ln(100)) ÷ (1.8 ÷ 100)
       = (6.215 - 4.605) ÷ 0.018
       = 1.610 ÷ 0.018
       = 89 days

Harvest Date: Current Date + 89 days


Adjustments:
  Temperature drops → Add 10-20% time
  Disease outbreak → Add 20-30% time
  Improved feed → Subtract 5-10% time
```

### Production Planning Tool

```
ANNUAL PRODUCTION MODEL

System Specifications:
  Total volume: 50 m³
  Tanks: 5 × 10 m³
  Target density: 50 kg/m³
  Rotation: 7-month cycles

Tank Schedule:

  Tank │ Jan-Mar │ Apr-Jun │ Jul-Sep │ Oct-Dec
  ─────┼─────────┼─────────┼─────────┼─────────
    1  │ Growing │ Harvest │ Stock   │ Growing
    2  │ Stock   │ Growing │ Growing │ Harvest
    3  │ Growing │ Growing │ Harvest │ Stock
    4  │ Harvest │ Stock   │ Growing │ Growing
    5  │ Growing │ Harvest │ Stock   │ Growing

Annual Production:
  Harvests per year: 7-8 (staggered)
  Per harvest: 500 kg (10 m³ × 50 kg/m³)
  Annual total: 3,500-4,000 kg


Revenue Projection (@ $5/kg):
  Conservative (3,500 kg): $17,500
  Expected (3,750 kg):     $18,750
  Optimistic (4,000 kg):   $20,000
```

---

## 8. Feed Requirement Modeling

### Feed Budget Calculation

```
FEED REQUIREMENT MODEL

Based on Growth Projection:

Month │ Avg Weight │ Biomass │ Feed Rate │ Monthly Feed
──────┼────────────┼─────────┼───────────┼─────────────
  1   │    15g     │   15kg  │    7%     │    32 kg
  2   │    35g     │   34kg  │    5%     │    51 kg
  3   │    75g     │   73kg  │    4%     │    88 kg
  4   │   140g     │  133kg  │   3.5%    │   140 kg
  5   │   235g     │  223kg  │    3%     │   201 kg
  6   │   360g     │  342kg  │   2.5%    │   257 kg
  7   │   500g     │  465kg  │    2%     │   279 kg
──────┴────────────┴─────────┴───────────┴─────────────
                         TOTAL:          1,048 kg

Total Feed: 1,048 kg
Final Harvest: 465 kg
FCR: 1,048 ÷ 465 = 2.25 (needs improvement)


Cost Analysis:
  Feed: 1,048 kg × $1.00/kg = $1,048
  Harvest: 465 kg × $5.00/kg = $2,325
  Gross margin: $1,277
  ROI: 122%
```

### Dynamic Feed Adjustment

```
REAL-TIME MODEL ADJUSTMENT

Weekly Sampling Protocol:
  1. Weigh 50-100 fish
  2. Calculate mean weight
  3. Compare to model prediction
  4. Adjust if deviation >10%

Example Adjustment:

Week 12 Sample:
  Predicted: 150g
  Actual: 135g
  Deviation: -10%

Causes to Investigate:
  □ Temperature lower than expected
  □ Disease/parasite load
  □ Feed quality issue
  □ Oxygen limitation
  □ Feeding rate inadequate

Actions:
  1. Check water quality
  2. Health inspection
  3. Verify feed freshness
  4. Increase feeding if appetite good
  5. Extend production timeline
```

---

## 9. Economic Optimization Models

### Maximum Profit Point

```
PROFIT OPTIMIZATION

Revenue = Price × Weight × Count × Survival
Costs = Fixed + (Variable × Weight × Count)

Profit = Revenue - Costs


Example Analysis:

Harvest at Different Weights:

Weight │Revenue│ Feed │ Other │ Total │ Profit │ Days
───────┼───────┼──────┼───────┼───────┼────────┼─────
300g   │$1,350 │ $450 │  $200 │  $650 │  $700  │ 150
400g   │$1,800 │ $600 │  $250 │  $850 │  $950  │ 180
500g   │$2,250 │ $750 │  $300 │$1,050 │$1,200  │ 210
600g   │$2,700 │ $920 │  $350 │$1,270 │$1,430  │ 245
700g   │$3,150 │$1,120│  $400 │$1,520 │$1,630  │ 285

Optimal: 700g (highest absolute profit)

BUT consider Profit/Day:
  500g: $1,200 ÷ 210 = $5.71/day
  600g: $1,430 ÷ 245 = $5.84/day ← BEST
  700g: $1,630 ÷ 285 = $5.72/day

Conclusion: Harvest at 600g for best efficiency
```

### Break-Even Analysis

```
BREAK-EVEN CALCULATION

Fixed Costs:
  Tank setup:     $5,000
  Equipment:      $3,000
  Total fixed:    $8,000

Variable Costs per Production Cycle:
  Fingerlings:    $200
  Feed:           $750
  Labor:          $300
  Utilities:      $150
  Total variable: $1,400

Revenue per Cycle:
  Harvest: 465 kg × $5/kg = $2,325

Profit per Cycle: $2,325 - $1,400 = $925

Break-even: $8,000 ÷ $925 = 8.6 cycles

At 2 cycles/year: 4.3 years to break-even
At 3 cycles/year: 2.9 years to break-even
```

---

## 10. Advanced Modeling Techniques

### Monte Carlo Simulation

```
RISK ANALYSIS MODEL

Variable Parameters (with probability):
  - Survival: 90-98% (mean 95%)
  - SGR: 1.5-2.5%/day (mean 2.0%)
  - FCR: 1.3-1.8 (mean 1.5%)
  - Price: $4.50-5.50/kg (mean $5.00)

Run 1,000 Simulations:

Result Distribution:
  Profit Range: $600-$1,800
  Mean profit: $1,200
  90% confidence: $900-$1,500

  Risk of loss (<$0): 2%
  Probability >$1,500: 15%


Decision Support:
  → Low risk investment
  → Expected positive returns
  → Some variability in outcomes
```

### Machine Learning Applications

```
PREDICTIVE ANALYTICS

Data Collection:
  - Historical growth data
  - Environmental parameters
  - Feed records
  - Health events

ML Model Training:
  Input features:
    • Temperature
    • DO levels
    • Feed amount
    • Stocking density
    • Fish age/weight

  Output prediction:
    • Daily growth rate
    • Feed conversion
    • Harvest date
    • Final weight

Accuracy: 92-97% for established systems

Benefits:
  ✓ Early problem detection
  ✓ Optimized feeding
  ✓ Better planning
  ✓ Reduced waste
```

### Digital Twin Technology

```
VIRTUAL SYSTEM MODEL

Real-time Data Integration:
  Sensors → Database → AI Model → Predictions

Digital Twin Components:
  1. Physical System (actual farm)
  2. Virtual Model (computer simulation)
  3. Data Connection (sensors/IoT)
  4. Analytics Engine (AI/ML)


Applications:
  • What-if scenarios
  • Optimization testing
  • Training simulations
  • Risk assessment
  • Decision support


Example Use:
  Question: "What if temperature drops 3°C?"

  Model runs simulation:
    → Growth slows 25%
    → Feed demand drops 20%
    → Harvest delayed 15 days
    → Profit impact: -$150

  Recommendation: Adjust stocking schedule
```

---

## Summary

Growth modeling enables:

1. **Predictive Planning** - Forecast harvest dates and yields
2. **Resource Optimization** - Calculate feed needs and costs
3. **Financial Projections** - Revenue and profit forecasting
4. **Risk Management** - Identify and mitigate production risks
5. **Continuous Improvement** - Track performance over time

Essential Tools:
- SGR and TGC calculations
- Von Bertalanffy and other growth models
- Biomass projection spreadsheets
- Economic optimization analysis
- Statistical monitoring (CV, sampling)

---

## Key Takeaways

1. **SGR** is the most practical growth metric for aquaculture
2. **TGC** allows temperature-independent comparisons
3. **Growth models** improve planning accuracy
4. **Regular sampling** enables model refinement
5. **Economic optimization** may differ from biological maximum
6. **Digital tools** enhance decision-making

---

## Module Quiz

Test your knowledge in Quiz 5 before proceeding to Module 6.

---

**Next Module:** Module 6 - Disease Diagnostics Methods

---

*EcoFusion Academy - Course 303: Advanced Fish Production & Health*
