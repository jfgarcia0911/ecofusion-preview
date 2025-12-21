# Lesson 11: Production Planning & Optimization

## Course 402: Advanced Aquaculture Systems | Week 11

---

## Learning Objectives

1. Develop comprehensive production plans and schedules
2. Optimize stocking density and cohort management
3. Calculate carrying capacity and production cycles
4. Implement grading and size management strategies
5. Plan harvest logistics and inventory management
6. Maximize facility utilization and profitability

---

## Production System Planning

### Annual Production Targets

**Key Metrics:**

```
┌────────────────────────────────────────────────────┐
│        PRODUCTION PLANNING PARAMETERS              │
├────────────────────────────────────────────────────┤
│                                                     │
│  Target Annual Production: 100 tonnes              │
│  Species: Tilapia                                  │
│  Harvest size: 500g                                │
│  Number of fish: 200,000 fish/year                 │
│                                                     │
│  System capacity: 800 m³                           │
│  Maximum density: 80 kg/m³                         │
│  Working density: 60 kg/m³ (safety margin)         │
│  Maximum standing stock: 48,000 kg                 │
│                                                     │
│  Growth period: 6 months (180 days)                │
│  Stocking size: 10g                                │
│  Survival rate: 90%                                │
│                                                     │
└────────────────────────────────────────────────────┘
```

### Cohort Management Strategies

**Option 1: Batch Production**

```
┌────────────────────────────────────────────────────┐
│            BATCH PRODUCTION SCHEDULE               │
├────────────────────────────────────────────────────┤
│                                                     │
│  Month 1-6:    Batch A growing (10g → 500g)       │
│  Month 7:      Harvest Batch A                     │
│                Stock Batch B (10g)                 │
│  Month 8-13:   Batch B growing                     │
│  Month 14:     Harvest Batch B                     │
│                Stock Batch C                       │
│                                                     │
│  ADVANTAGES:                                        │
│  - Simple management                               │
│  - Uniform size at harvest                         │
│  - Easy to plan                                    │
│  - All-in, all-out biosecurity                     │
│                                                     │
│  DISADVANTAGES:                                     │
│  - No production for periods                       │
│  - Facility underutilized early in cycle           │
│  - Harvest all at once (market glut risk)          │
│                                                     │
└────────────────────────────────────────────────────┘
```

**Option 2: Split Stocking (Continuous Production)**

```
┌────────────────────────────────────────────────────┐
│         CONTINUOUS PRODUCTION SCHEDULE             │
├────────────────────────────────────────────────────┤
│                                                     │
│  4 cohorts, staggered 1.5 months apart            │
│                                                     │
│  Tank 1-8:   Cohort A (Months 1-6)                │
│  Tank 9-16:  Cohort B (Months 2.5-7.5)            │
│  Tank 17-24: Cohort C (Months 4-9)                │
│  Tank 25-32: Cohort D (Months 5.5-10.5)           │
│                                                     │
│  Harvest monthly: 1 cohort every 1.5 months        │
│  Annual harvests: 8 events                         │
│  Average per harvest: 12.5 tonnes                  │
│                                                     │
│  ADVANTAGES:                                        │
│  - Continuous cash flow                            │
│  - Better facility utilization                     │
│  - Steady market supply                            │
│  - Risk spread over multiple cohorts               │
│                                                     │
│  DISADVANTAGES:                                     │
│  - More complex management                         │
│  - Multiple size classes simultaneously            │
│  - Different feed sizes needed                     │
│  - Biosecurity more challenging                    │
│                                                     │
└────────────────────────────────────────────────────┘
```

---

## Stocking Density Optimization

### Carrying Capacity Calculation

**Method 1: Feed-Based**

```
Carrying Capacity = (System Flow × DO Removal) / (O₂ Demand per kg feed)

Example:
System flow: 400 m³/hr
DO removal: 3 mg/L (9 mg/L → 6 mg/L)
O₂ available: 400 m³/hr × 3 g/m³ = 1,200 g O₂/hr = 28.8 kg O₂/day

O₂ requirement: 0.5 kg O₂/kg feed (species-dependent)
Feed capacity: 28.8 kg O₂ ÷ 0.5 = 57.6 kg feed/day

With FCR of 1.2:
Fish growth: 57.6 kg feed ÷ 1.2 FCR = 48 kg gain/day

Standing stock (at 2% feeding rate):
48 kg/day ÷ 0.02 = 2,400 kg maximum

With 30% safety factor:
Working capacity: 2,400 × 0.70 = 1,680 kg
```

**Method 2: Density-Based**

```
Simply use established density limits:

Conservative: 40-50 kg/m³
Moderate: 50-70 kg/m³
Intensive: 70-100 kg/m³

800 m³ system × 60 kg/m³ (moderate) = 48,000 kg capacity
```

### Dynamic Stocking Plans

**Growth-Based Tank Allocation:**

```
Tilapia Growth Curve (10g → 500g in 180 days):

Month 1:  10g  → 30g   (need 1 m³ per 1,000 fish)
Month 2:  30g  → 70g   (need 2 m³ per 1,000 fish)
Month 3:  70g  → 130g  (need 3 m³ per 1,000 fish)
Month 4:  130g → 230g  (need 4 m³ per 1,000 fish)
Month 5:  230g → 360g  (need 5 m³ per 1,000 fish)
Month 6:  360g → 500g  (need 6 m³ per 1,000 fish)

Total fish: 100,000
Survival: 90% = 90,000 at harvest

Volume required by month:
Month 1: 100 m³
Month 2: 200 m³
Month 3: 300 m³
Month 4: 360 m³ (some mortality)
Month 5: 450 m³
Month 6: 540 m³

Facility: 800 m³ total
Space available for additional cohorts: Yes
```

---

## Grading and Size Management

### Why Grade?

**Benefits:**
- Reduces size variation (improves FCR)
- Minimizes cannibalism
- Allows targeted feeding
- Optimizes tank space utilization
- Uniform harvest size

**Frequency:**
- Fingerlings: Every 3-4 weeks
- Juveniles: Every 4-6 weeks
- Grow-out: Every 6-8 weeks

### Grading Methods

**Manual Grading (Small Scale):**

```
Equipment:
- Bar graders (adjustable bar spacing)
- Mesh graders
- Sorting tables

Process:
1. Crowd fish gently
2. Pass through grader
3. Sort into 3-4 size classes
4. Count and weigh each class
5. Redistribute to appropriate tanks

Duration: 2-4 hours per tank
Labor: 2-4 people
```

**Automated Grading (Commercial Scale):**

```
┌────────────────────────────────────────────────────┐
│          AUTOMATED FISH GRADER                     │
├────────────────────────────────────────────────────┤
│                                                     │
│              Fish In (pump from tank)              │
│                     ↓                              │
│              ┌──────────────┐                      │
│              │  Dewatering  │                      │
│              └──────┬───────┘                      │
│                     ↓                              │
│              ┌──────────────┐                      │
│              │   Imaging    │  ← Camera system     │
│              │   System     │    measures each fish│
│              └──────┬───────┘                      │
│                     ↓                              │
│              ┌──────────────┐                      │
│              │ Diversion    │  ← Pneumatic gates   │
│              │ Gates        │    sort by size      │
│              └──┬───┬───┬───┘                      │
│                 ↓   ↓   ↓                          │
│            Small │ Med │ Large                     │
│                  ↓   ↓   ↓                         │
│            Separate holding tanks                  │
│                                                     │
│  Capacity: 5,000-20,000 fish/hour                 │
│  Accuracy: ±5g                                     │
│  Data: Count, weight, size distribution           │
│                                                     │
└────────────────────────────────────────────────────┘

Cost: $50,000-200,000 depending on capacity
ROI: 1-3 years for facilities >50 tonnes/year
```

### Grading Strategy Example

```
100,000 fish stocked at Month 1

Month 2 Grading (at 70g average):
- Large (15%): 90g → Move to grow-out tank
- Medium (70%): 70g → Keep in current tanks
- Small (15%): 45g → Move to nursery for extra growth

Benefits of grading:
- Reduces coefficient of variation from 35% to 15%
- Improves FCR by 10-15%
- Reduces mortality from cannibalism by 5%
- Allows more precise feeding
```

---

## Harvest Planning

### Harvest Scheduling

**Market-Driven Scheduling:**

```
Considerations:
- Market demand peaks (holidays, seasons)
- Price fluctuations
- Processor capacity
- Labor availability
- Live haul logistics

Example Schedule:
Q1: 20 tonnes (post-holiday, slower)
Q2: 25 tonnes (spring increase)
Q3: 30 tonnes (summer peak)
Q4: 25 tonnes (holiday prep)

Adjust stocking to meet harvest targets
```

### Harvest Methods

**Crowding and Netting:**

```
Process:
1. Stop feeding 24-48 hours prior
2. Lower water level
3. Crowd fish into small area
4. Net or pump fish out
5. Grade if needed
6. Transfer to harvest tank/truck
7. Process or live haul

Duration: 4-8 hours per tank
Labor: 4-6 people

Stress level: Moderate
Suitable for: Most species
```

**Pump Harvest:**

```
Use fish pumps to transfer:
- Less handling stress
- Faster than netting
- Can grade during transfer
- Requires pump infrastructure

Capacity: 5,000-10,000 kg/hour
Best for: High-volume operations
```

**Seine Harvest:**

```
For large tanks/ponds:
- Seine net pulled through tank
- Concentrates fish
- Transfer to harvest area

Gentle, low stress if done properly
```

### Pre-Harvest Preparation

**Purging:**

```
Purpose: Remove off-flavors, empty gut

Duration:
- Minimum: 24 hours (no feed)
- Preferred: 48-72 hours
- Extended: 5-7 days for severe off-flavor

Water quality during purge:
- Excellent quality
- High DO (>6 mg/L)
- Cool temperature if possible
- Good flow

Result: Cleaner tasting fish, longer shelf life
```

---

## Inventory Management

### Tracking System

**Essential Data:**

```
Real-Time Inventory:

Tank ID: T-12
Cohort: Batch C
Stock Date: January 15
Initial Count: 5,000 fish
Initial Weight: 10g average
Current Age: 120 days
Current Count: 4,750 fish (95% survival)
Current Weight: 320g average
Total Biomass: 1,520 kg
Density: 61 kg/m³ (25 m³ tank)

Feed Data:
Current feed: 4mm pellet
Feeding rate: 2.5% BWD
Daily feed: 38 kg/day
Cumulative feed: 3,800 kg
Current FCR: 1.15

Projections:
Estimated harvest date: March 15 (60 days)
Estimated harvest size: 500g
Estimated harvest count: 4,700 fish
Estimated harvest biomass: 2,350 kg
```

**Software Solutions:**
- AquaManager
- Fishtalk
- IntraFish
- Custom database systems
- Excel-based tracking (small operations)

### Performance Monitoring

**Key Performance Indicators (KPIs):**

```
┌────────────────────────────────────────────────────┐
│              MONTHLY KPI DASHBOARD                 │
├────────────────────────────────────────────────────┤
│                                                     │
│  PRODUCTION METRICS:                               │
│  - Biomass gain: 8,500 kg                          │
│  - Feed used: 9,500 kg                             │
│  - FCR: 1.12 (target: 1.20) ✓                     │
│  - Survival: 98% (target: 95%) ✓                  │
│  - SGR: 2.1%/day (target: 2.0%) ✓                 │
│                                                     │
│  FACILITY UTILIZATION:                             │
│  - Tank occupancy: 92% (target: 85%) ✓            │
│  - Production per m³: 115 kg/m³/yr (target: 100)  │
│                                                     │
│  WATER QUALITY:                                    │
│  - DO average: 6.8 mg/L (target: >6.0) ✓          │
│  - TAN average: 0.4 mg/L (target: <1.0) ✓         │
│  - NO₂⁻ average: 0.2 mg/L (target: <0.5) ✓        │
│                                                     │
│  ECONOMIC:                                         │
│  - Feed cost per kg gain: $1.68 (target: $1.80)   │
│  - Labor hours per tonne: 35 hrs (target: 40)     │
│  - Energy cost per kg: $0.22 (target: $0.25)      │
│                                                     │
└────────────────────────────────────────────────────┘
```

---

## Production Optimization Strategies

### Strategy 1: Maximize Turnover

```
Reduce growth period by 10%:
- Better genetics (selective breeding)
- Optimal nutrition (high-quality feed)
- Perfect water quality (no stress)
- Optimal temperature
- Disease prevention

Impact:
180-day cycle → 162 days
Annual production cycles: 2.25 instead of 2.0
Production increase: 12.5%

ROI: High (genetics + management, minimal capital)
```

### Strategy 2: Increase Density

```
Increase safe density 40 kg/m³ → 60 kg/m³:
- Upgrade oxygenation system
- Improve solids removal
- Enhanced monitoring
- Better system management

Production increase: 50%
Capital required: Moderate
Risk: Moderate (requires excellent management)
```

### Strategy 3: Add Cohorts

```
From 2 cohorts → 4 cohorts annually:
- Continuous production
- Better facility utilization
- Steady cash flow
- Requires careful planning

Production increase: 10-20% (better space utilization)
Complexity: High
Cash flow: Improved significantly
```

### Strategy 4: Multi-Species Integration

```
Add secondary species:
- Tilapia (primary): 70% of production
- Carp (detritus feeder): 20% of production
- Prawns (bottom scavenger): 10% of production

Benefits:
- 15-25% increased productivity per m³
- Market diversification
- Improved resource use
- Better water quality (cleaning crew)
```

---

## Production Planning Software

### Spreadsheet Planning Tool

**Components:**

```
1. Growth Model
   - Input: Initial size, temperature, feed quality
   - Output: Daily growth projection

2. Feed Calculator
   - Input: Biomass, temperature
   - Output: Daily feed amount, cumulative feed

3. Density Monitor
   - Input: Tank volume, fish count, weight
   - Output: Current density, alerts

4. Harvest Projector
   - Input: Target size
   - Output: Estimated harvest date, yield

5. Economic Model
   - Input: Costs (feed, labor, energy)
   - Output: Production cost per kg, profitability

6. Scenario Planning
   - Compare different stocking strategies
   - Optimize for profit, production, or risk
```

---

## Case Study: 100-Tonne Tilapia Facility Optimization

**Baseline Performance:**

```
Annual Production: 100 tonnes
Facility: 800 m³
Density: 50 kg/m³ average
Cohorts: 2 per year
Growth period: 180 days
FCR: 1.30
Survival: 88%
Revenue: $400,000 (@$4/kg)
Feed cost: $156,000 (@$1.20/kg × 130 tonnes)
Profit margin: 25%
```

**After Optimization (Year 2):**

```
Improvements Implemented:
1. Genetic improvement: -15 days growth period
2. Feed upgrade: FCR 1.30 → 1.15
3. Management: Survival 88% → 94%
4. Cohort addition: 2 → 3 cohorts/year
5. Density increase: 50 → 65 kg/m³ average

Results:
Annual Production: 145 tonnes (+45%)
Growth period: 165 days
FCR: 1.15
Survival: 94%
Revenue: $580,000 (+45%)
Feed cost: $200,000 (167 tonnes @ $1.20)
Profit margin: 32% (+7 points)
Additional profit: $80,000/year

ROI on improvements: <1 year
```

---

## Key Takeaways

1. **Planning drives profitability** - detailed production plans essential
2. **Continuous production smooths cash flow** - multiple cohorts preferred
3. **Grading improves performance** - 10-15% better FCR with uniform size
4. **Track everything** - data-driven decisions beat intuition
5. **Optimize stepwise** - improve one variable at a time
6. **Harvest planning critical** - match production to market demand
7. **KPIs reveal opportunities** - monitor and adjust continuously
8. **Genetics provide leverage** - long-term improvement strategy

---

## Further Reading

1. Timmons, M.B. & Ebeling, J.M. (2013). "Recirculating Aquaculture" - Chapter 12
2. FAO (2012). "Farm business management"
3. Lucas, J.S. & Southgate, P.C. (2012). "Aquaculture: Farming Aquatic Animals and Plants"

---

*Next Lesson: Module 12 - System Automation & Monitoring*

*EcoFusion Academy - Course 402: Advanced Aquaculture Systems*
