# Module 10: Energy Storage

## Learning Objectives

- Understand battery storage technologies
- Calculate storage requirements for CEA
- Analyze storage economics and applications
- Design integrated storage systems
- Evaluate thermal vs electrical storage

---

## 10.1 Battery Storage Basics

### Technology Comparison

```
BATTERY TECHNOLOGY MATRIX
═══════════════════════════════════════════════════════════════════

Type          Energy    Power    Cycles  Lifespan  Cost      Best For
              Density   Density                    ($/kWh)
─────────────────────────────────────────────────────────────────
Lithium-ion   High      High     5,000+  10-15yr   $400-800  Most apps
LFP (LiFePO₄) Med-High  High     7,000+  12-18yr   $350-650  CEA ideal
Lead-acid     Low       Medium   500-    3-7yr     $150-300  Backup only
                                 1,500
Flow battery  Medium    Low      10,000+ 15-25yr   $600-     Large scale
                                                    1,200
Sodium-ion    Medium    High     3,000+  8-12yr    $300-500  Emerging

RECOMMENDATION FOR CEA: Lithium iron phosphate (LFP)
  • Safest lithium technology (minimal fire risk)
  • Long cycle life
  • Good temperature tolerance
  • Reasonable cost
```

---

## 10.2 Storage Applications

### Use Cases for CEA

```
ENERGY STORAGE VALUE STREAMS
═══════════════════════════════════════════════════════════════════

1. PEAK DEMAND REDUCTION
────────────────────────────────────────────────────────────────
  Goal: Lower monthly demand charges
  Strategy: Discharge battery during facility peak times
  Savings: $15-25/kW/month × kW reduced

  Example: 50 kW peak shaving
    Demand charge: $18/kW
    Monthly: 50 × $18 = $900
    Annual: $10,800

2. TIME-OF-USE ARBITRAGE
────────────────────────────────────────────────────────────────
  Goal: Buy low (off-peak), use high (on-peak)
  Strategy: Charge at night, discharge during day
  Savings: Price differential × kWh shifted

  Example: Daily cycle
    Charge: 100 kWh at $0.08/kWh = $8.00
    Discharge: 85 kWh at $0.22/kWh = $18.70
    Round-trip efficiency: 85%
    Daily net: $18.70 - $8.00 = $10.70
    Annual: $3,906

3. SOLAR SELF-CONSUMPTION
────────────────────────────────────────────────────────────────
  Goal: Store excess solar for use when needed
  Strategy: Charge from solar, discharge evenings/nights
  Value: Avoided grid purchases

  Example: 50 kW solar, 100 kWh battery
    Excess solar: 30 kWh/day average
    Evening load: 40 kW (6pm-10pm)
    Storage provides: 30 kWh × 300 days = 9,000 kWh/year
    Value: 9,000 × $0.16 = $1,440/year

4. BACKUP POWER
────────────────────────────────────────────────────────────────
  Goal: Maintain critical loads during outages
  Strategy: Automatic switchover to battery
  Value: Avoided losses, business continuity

  Critical loads: 25 kW (controls, minimal HVAC, monitoring)
  Backup duration: 4 hours
  Required capacity: 25 kW × 4 hrs = 100 kWh
  Value: Insurance against $10,000+ crop losses

5. GRID SERVICES (advanced)
────────────────────────────────────────────────────────────────
  Goal: Earn revenue from utility programs
  Options: Frequency regulation, demand response
  Payments: Varies by program ($50-150/kW-year)

  Complex, requires aggregator or sophisticated controls
```

---

## 10.3 System Sizing

### Sizing Methodology

```
BATTERY STORAGE SIZING
═══════════════════════════════════════════════════════════════════

Step 1: Define Primary Use Case
────────────────────────────────────────────────────────────────

For peak shaving:
  Target reduction: 50 kW
  Duration needed: 4 hours/day (peak period)
  Energy capacity: 50 kW × 4 hrs = 200 kWh
  Account for depth of discharge (DOD): 200 ÷ 0.90 = 222 kWh
  System size: 225 kWh battery, 50 kW inverter

For TOU arbitrage:
  Daily energy shift: 100 kWh
  Single cycle per day
  Account for efficiency (85%): 100 ÷ 0.85 = 118 kWh
  Charging time: 6 hours
  Power needed: 118 ÷ 6 = 20 kW
  System size: 120 kWh battery, 20 kW inverter

For solar storage:
  Excess solar production: 40 kWh/day average
  Evening consumption: 60 kWh (6pm-midnight)
  Battery provides: 40 kWh (rest from grid)
  System size: 50 kWh battery, 10 kW inverter

Step 2: Calculate Multiple Benefits (stacking)
────────────────────────────────────────────────────────────────

Battery can provide MULTIPLE value streams:

Example: 100 kWh / 50 kW system
  Morning: Charge from solar excess (20 kWh)
  Midday: Peak shaving (discharge 30 kWh, 2-4pm)
  Evening: Recharge off-peak (40 kWh, 11pm-5am)
  Night: TOU arbitrage (discharge 35 kWh, 6-10pm)
  Always: Backup capability (remaining charge)

Annual Value Stack:
  Peak demand reduction: $8,500
  TOU arbitrage: $2,800
  Solar self-consumption: $900
  Grid services (if enrolled): $3,000
  ──────────────────────────────
  Total: $15,200/year
```

---

## 10.4 Financial Analysis

### Battery Storage Economics

```
COMPLETE FINANCIAL MODEL
═══════════════════════════════════════════════════════════════════

System: 100 kWh LFP battery, 50 kW inverter
Application: Indoor vertical farm

Capital Costs:
────────────────────────────────────────────────────────────────
  Battery pack: 100 kWh × $550 = $55,000
  Inverter/controls: 50 kW × $400 = $20,000
  Installation: $12,000
  Electrical/integration: $8,000
  Engineering/permits: $5,000
  ──────────────────────────────────
  Total: $100,000

Incentives:
────────────────────────────────────────────────────────────────
  Federal ITC (if paired with solar): 30% × $100,000 = $30,000
  State storage incentive: $250/kWh × 100 = $25,000
  Net cost: $45,000

  (Without incentives: $100,000 net)

Annual Benefits:
────────────────────────────────────────────────────────────────
  Demand reduction (40 kW): $8,640/year
  Energy arbitrage: $3,200/year
  Solar optimization: $1,100/year
  ──────────────────────────────────
  Total: $12,940/year

Operating Costs:
────────────────────────────────────────────────────────────────
  Electricity for charging losses: $180/year
  Monitoring/maintenance: $500/year
  ──────────────────────────────────
  Total: $680/year

Net Annual Benefit: $12,260/year

Financial Metrics:
────────────────────────────────────────────────────────────────

With Incentives:
  Simple payback: $45,000 ÷ $12,260 = 3.7 years
  10-year NPV (5%): $49,590
  IRR: 26.8%

Without Incentives:
  Simple payback: $100,000 ÷ $12,260 = 8.2 years
  10-year NPV: $-5,410 (negative!)
  IRR: 8.1%

KEY INSIGHT: Incentives make or break battery economics!

Degradation Analysis:
────────────────────────────────────────────────────────────────

Battery capacity loss: 2% per year
Impact on savings over 10 years:

Year 1: $12,260 (100% capacity)
Year 5: $11,277 (92% capacity)
Year 10: $9,808 (80% capacity)

Cumulative 10-year savings: $113,530 (vs. $122,600 if no degradation)
```

---

## 10.5 Integration Design

### Battery + Solar System

```
INTEGRATED SOLAR + STORAGE
═══════════════════════════════════════════════════════════════════

Configuration Options:

Option A: AC-COUPLED (separate inverters)
────────────────────────────────────────────────────────────────

  Solar panels → Solar inverter → AC bus ←  Grid
                                    ↕
                            Battery inverter
                                    ↕
                                 Battery

  Pros:
    ✓ Modular (add battery later)
    ✓ Flexible (different sized inverters)
    ✓ Battery can charge from grid OR solar

  Cons:
    ✗ Two conversion steps (lower efficiency)
    ✗ Higher equipment cost

Option B: DC-COUPLED (hybrid inverter)
────────────────────────────────────────────────────────────────

  Solar panels → Hybrid inverter → AC bus → Grid
                      ↕
                   Battery

  Pros:
    ✓ Higher efficiency (direct DC charging)
    ✓ Lower equipment cost
    ✓ Simpler design

  Cons:
    ✗ Battery size limited by solar system
    ✗ Less flexible for future changes

Recommendation: AC-coupled for retrofit, DC-coupled for new systems
```

### Control Strategies

```
BATTERY CONTROL LOGIC
═══════════════════════════════════════════════════════════════════

Priority Hierarchy (typical):

1. BACKUP RESERVE (highest priority)
   IF grid down → Maintain 20% SOC minimum
   Reserve: 20 kWh for critical loads

2. PEAK SHAVING
   IF facility demand > 100 kW → Discharge battery
   Discharge rate: Match demand above threshold

3. SOLAR SELF-CONSUMPTION
   IF solar production > facility load → Charge battery
   IF SOC < 90% → Charge at excess solar rate

4. TOU ARBITRAGE
   IF off-peak period AND SOC < 100% → Charge from grid
   IF on-peak period AND SOC > 30% → Discharge to facility

5. GRID SERVICES
   IF enrolled in program → Follow dispatch signals

Example Daily Cycle:
────────────────────────────────────────────────────────────────

Time     Grid  Solar  Load  Battery  Action
         (kW)  (kW)   (kW)  (SOC)
──────────────────────────────────────────────────────────────
00:00    20    0      20    35%      Hold (backup reserve)
02:00    -15   0      20    50%      Charge (off-peak)
06:00    10    5      30    75%      Light charging
10:00    0     45     30    90%      Charge (excess solar)
14:00    0     40     55    85%      Discharge (peak shave)
18:00    15    10     60    55%      Discharge (peak shave)
22:00    5     0      40    40%      Discharge (on-peak TOU)
24:00    20    0      20    35%      Return to reserve level

Benefits achieved:
  ✓ Peak reduced from 60 kW to 40 kW
  ✓ Excess solar stored (15 kWh)
  ✓ TOU arbitrage (20 kWh shifted)
  ✓ Backup reserve maintained (20 kWh minimum)
```

---

## 10.6 Thermal Energy Storage

### Comparison to Batteries

```
THERMAL vs ELECTRICAL STORAGE
═══════════════════════════════════════════════════════════════════

Application: Store 200 kWh equivalent for 4 hours

ELECTRICAL (Battery):
────────────────────────────────────────────────────────────────
  Technology: 200 kWh lithium battery
  Cost: $110,000 (installed)
  Efficiency: 85% round-trip
  Lifespan: 10-15 years
  Space: 100 cubic feet
  Applications: All electrical uses

THERMAL (Water/Ice):
────────────────────────────────────────────────────────────────
  Technology: 200 kWh = 683,000 Btu thermal

  Option A: Hot water storage (20°F swing)
    Volume: 683,000 ÷ (8.34 × 20) = 4,096 gallons
    Cost: $20,000 (insulated tanks)
    Efficiency: 90% (losses to ambient)
    Lifespan: 25+ years
    Space: 550 cubic feet
    Applications: Heating only

  Option B: Ice storage (for cooling)
    Ice energy: 144 Btu/lb (latent heat)
    Ice needed: 683,000 ÷ 144 = 4,743 lb = 570 gallons
    Cost: $35,000 (ice storage system)
    Efficiency: 85%
    Lifespan: 20+ years
    Space: 300 cubic feet
    Applications: Cooling only

Cost Comparison:
  Battery: $110,000 (flexible use)
  Hot water: $20,000 (heating only) → 82% cheaper!
  Ice: $35,000 (cooling only) → 68% cheaper!

Decision Matrix:
────────────────────────────────────────────────────────────────

Use electrical storage IF:
  ✓ Need demand charge reduction
  ✓ Need backup power for critical loads
  ✓ Multiple value streams (peak + TOU + solar)
  ✓ Incentives available (>30% of cost)

Use thermal storage IF:
  ✓ Primary need is heating OR cooling (not both)
  ✓ Large thermal loads
  ✓ Lower budget
  ✓ Long-term investment (25+ year horizon)
```

### Ice Storage for Cooling

```
ICE THERMAL STORAGE APPLICATION
═══════════════════════════════════════════════════════════════════

Indoor Farm Cooling Strategy:

Current: Direct mechanical cooling, 50 tons peak (2-6pm)
  Peak demand charge: $25/kW × 60 kW = $1,500/month
  On-peak cooling energy: High cost

Ice Storage Approach:
  Make ice at night (off-peak, cool temperatures)
  Use ice for cooling during peak hours
  Reduce chiller size and peak demand

System Design:
────────────────────────────────────────────────────────────────

Ice-making (11pm-7am, 8 hours):
  Chiller: 30 tons (smaller than 50-ton peak)
  Ice production: 30 tons × 8 hrs = 240 ton-hours
  (1 ton-hour = 12,000 Btu)

Ice melting (2pm-6pm, 4 hours):
  Cooling delivered: 240 ton-hrs ÷ 4 hrs = 60 tons
  Covers peak + margin

Results:
  Peak demand: Reduced from 60 kW to 36 kW (24 kW savings)
  Demand charge savings: 24 × $25 × 12 = $7,200/year
  Energy savings (night vs day rates): $3,800/year
  Total benefit: $11,000/year

System Cost:
  30-ton ice-maker chiller: $45,000
  Ice storage tanks: $25,000
  Controls & integration: $15,000
  Installation: $18,000
  ──────────────────────────────────
  Total: $103,000

Payback: $103,000 ÷ $11,000 = 9.4 years

Less attractive than battery (but no incentives in this example)
Better if: Can use smaller chiller, deferred expansion,
           or has very high demand charges (>$30/kW)
```

---

## 10.7 Case Study: Battery Storage Implementation

```
VERTICAL FARM BATTERY PROJECT
═══════════════════════════════════════════════════════════════════

Facility: 15,000 sq ft indoor farm
Location: California (high rates, TOU, demand charges)
Energy profile:
  Peak demand: 180 kW
  Average: 120 kW
  Monthly consumption: 87,000 kWh

Rate Structure:
  Demand charge: $22/kW
  On-peak (12-9pm): $0.32/kWh
  Part-peak (8am-12pm, 9pm-11pm): $0.22/kWh
  Off-peak (11pm-8am): $0.12/kWh

System Installed:
────────────────────────────────────────────────────────────────
  Battery: 200 kWh LFP
  Inverter: 100 kW
  Cost: $180,000
  Incentives: $80,000 (state SGIP program)
  Net: $100,000

First Year Performance:
────────────────────────────────────────────────────────────────

Peak Demand Reduction:
  Before: 180 kW peak
  After: 110 kW peak (70 kW reduction)
  Monthly savings: 70 × $22 = $1,540
  Annual: $18,480

Energy Arbitrage:
  Daily cycle: Charge 150 kWh off-peak, discharge 130 kWh on-peak
  Daily savings: 130 × ($0.32 - $0.12) - 20 × $0.12 = $23.60
  Annual (300 cycling days): $7,080

Solar Integration (10 kW existing):
  Store excess: 15 kWh/day average
  Self-consumption value: 15 × $0.32 × 300 = $1,440

Total Annual Benefit: $27,000

Financial Results:
────────────────────────────────────────────────────────────────
  Payback: $100,000 ÷ $27,000 = 3.7 years
  5-year cumulative savings: $135,000
  10-year NPV: $108,500
  Owner feedback: "Best investment we made"

Lessons Learned:
────────────────────────────────────────────────────────────────
  ✓ Careful monitoring optimized performance
  ✓ Software updates improved algorithms
  ✓ Demand savings exceeded projections (better peak prediction)
  ✓ Battery degradation minimal after 2 years (<3%)
  ✓ Zero maintenance issues

  ✗ Initial software tuning took 2 months
  ✗ One grid outage exceeded backup reserve (learned to increase)
```

---

## Key Takeaways

1. **Storage enables value stacking** - Multiple revenue streams from one system
2. **Incentives are critical** - Often make difference between viable and not
3. **LFP is preferred for CEA** - Safe, long-lived, appropriate performance
4. **Size for primary use case** - Then optimize for secondary benefits
5. **Integration matters** - Proper controls maximize value
6. **Thermal storage cheaper** - But limited to heating/cooling only
7. **Demand charges drive ROI** - Systems pay back faster with high demand rates

---

## Practice Exercise

Design storage for a facility:
1. Analyze load profile and rate structure
2. Identify highest-value application
3. Size battery for primary + secondary uses
4. Calculate investment and incentives
5. Project annual benefits
6. Calculate payback and NPV

---

**Next Module**: Module 11 - Grid Integration

---

*Course 305: Energy Systems for CEA | Module 10 | EcoFusion Academy*
