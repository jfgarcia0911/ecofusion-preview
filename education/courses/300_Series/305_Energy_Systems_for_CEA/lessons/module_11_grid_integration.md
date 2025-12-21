# Module 11: Grid Integration & Demand Response

## Learning Objectives

- Understand utility rate structures and demand charges
- Implement demand response strategies
- Optimize power factor and power quality
- Participate in grid services programs
- Manage time-of-use rates effectively

---

## 11.1 Understanding Demand Charges

### What Are Demand Charges?

```
DEMAND CHARGE STRUCTURE
═══════════════════════════════════════════════════════════════════

Concept: Charge based on peak power draw (kW), not just energy (kWh)

Monthly Bill Components:
  1. Energy charges: $ per kWh consumed
  2. Demand charges: $ per kW of peak demand
  3. Fixed charges: Monthly customer fee

Example Monthly Bill:
────────────────────────────────────────────────────────────────
  Energy: 50,000 kWh × $0.10 = $5,000
  Demand: 120 kW × $18/kW = $2,160
  Fixed: $45
  ────────────────────────────────
  TOTAL: $7,205

  Demand = 30% of bill!

Peak Demand Measurement:
────────────────────────────────────────────────────────────────

Utility typically measures in 15-minute intervals

   kW
  120│     ███
     │     ███
  100│  ██ ███
     │  ██ ███
   80│  ██ ███ ██
     │  ██ ███ ██
   60│██ ██ ███ ██ ██
     │██ ██ ███ ██ ██
   40│██ ██ ███ ██ ██
     └────────────────────
      15-minute intervals

Peak for month: 120 kW (highest 15-min average)

ONE spike = charged for entire month!
```

---

## 11.2 Demand Management Strategies

### Peak Shaving Techniques

```
DEMAND REDUCTION METHODS
═══════════════════════════════════════════════════════════════════

1. LOAD SHIFTING
────────────────────────────────────────────────────────────────

Move non-critical loads to off-peak times

Examples:
  • Water heating: Heat at night, store in tank
  • Irrigation: Pump at night if possible
  • Fertilizer mixing: Prepare during low-load periods
  • Battery charging: Off-peak only

Potential savings: 10-30% demand reduction

2. LOAD SHEDDING
────────────────────────────────────────────────────────────────

Temporarily reduce loads during peak events

Priority system:
  Critical (never shed): Climate control, monitoring
  Important (shed briefly): Some lighting zones
  Deferrable (shed anytime): Non-essential equipment

Control strategy:
  IF facility demand > 100 kW threshold THEN:
    - Shed Zone 3 lighting (save 15 kW)
    - Reduce HVAC setpoint 2°F (save 8 kW)
    - Delay irrigation start (save 5 kW)
  Result: 28 kW demand reduction

3. EQUIPMENT STAGING
────────────────────────────────────────────────────────────────

Avoid multiple large loads starting simultaneously

Poor practice:
  All lights on at 6:00am → 80 kW spike

Better practice:
  Zone 1: 5:45am (25 kW)
  Zone 2: 6:00am (25 kW)
  Zone 3: 6:15am (25 kW)
  Zone 4: 6:30am (25 kW)
  Peak: 75 kW vs. 105 kW (30 kW savings!)

4. POWER FACTOR CORRECTION
────────────────────────────────────────────────────────────────

Improve power factor reduces apparent demand

Before: PF = 0.75
  Real power: 100 kW
  Apparent power: 133 kVA
  Demand charge on: 133 kVA × 0.9 = 120 kW

After: PF = 0.95 (with capacitors)
  Real power: 100 kW
  Apparent power: 105 kVA
  Demand charge on: 105 kVA × 0.9 = 95 kW

Savings: 25 kW × $18 = $450/month = $5,400/year
Capacitor cost: $8,000
Payback: 1.5 years
```

---

## 11.3 Time-of-Use Optimization

### TOU Rate Analysis

```
TIME-OF-USE RATE STRUCTURE EXAMPLE
═══════════════════════════════════════════════════════════════════

Summer (June-September):
  Super off-peak (12am-6am):    $0.08/kWh
  Off-peak (6am-12pm, 9pm-12am): $0.14/kWh
  Mid-peak (12pm-3pm, 6pm-9pm):  $0.24/kWh
  On-peak (3pm-6pm):             $0.38/kWh

Winter (October-May):
  Off-peak (11pm-7am):           $0.10/kWh
  Mid-peak (7am-5pm, 8pm-11pm):  $0.16/kWh
  On-peak (5pm-8pm):             $0.28/kWh

Impact on CEA Operations:
────────────────────────────────────────────────────────────────

Typical indoor farm: 120 kW average load, 24/7 operation

Without TOU optimization:
  Flat consumption across all periods
  Summer day consumption breakdown:
    Super off-peak (6 hrs): 720 kWh × $0.08 = $57.60
    Off-peak (12 hrs): 1,440 kWh × $0.14 = $201.60
    Mid-peak (4 hrs): 480 kWh × $0.24 = $115.20
    On-peak (2 hrs): 240 kWh × $0.38 = $91.20
  Daily cost: $465.60
  Monthly: $13,968

With TOU optimization (shift 30% of on/mid-peak to off-peak):
  Strategies:
    - Reduce lighting 20% during on-peak (dim or zone off)
    - Pre-cool space before on-peak (thermal mass)
    - Shift water pumping to super off-peak
    - Use battery storage for on-peak periods

  Optimized consumption:
    Super off-peak: 900 kWh × $0.08 = $72.00
    Off-peak: 1,620 kWh × $0.14 = $226.80
    Mid-peak: 360 kWh × $0.24 = $86.40
    On-peak: 120 kWh × $0.38 = $45.60
  Daily cost: $430.80
  Monthly: $12,924

  Monthly savings: $1,044 (7.5%)
  Annual savings: $12,528
```

---

## 11.4 Demand Response Programs

### Utility DR Programs

```
DEMAND RESPONSE PARTICIPATION
═══════════════════════════════════════════════════════════════════

Program Types:

1. CAPACITY PROGRAMS (enrollment-based)
────────────────────────────────────────────────────────────────

Commitment: Reduce load by X kW when called (typically 5-15 events/year)
Payment: $$/kW-year capacity payment
Events: 2-6 hours duration, typically hot summer afternoons

Example program:
  Enrollment: 50 kW reduction capability
  Capacity payment: $100/kW-year
  Annual payment: $5,000

  Events called: 8 times/year
  Must reduce load by 50 kW for 4 hours each

  Penalties if fail to perform: $500-1,000/event

2. ECONOMIC PROGRAMS (price-based)
────────────────────────────────────────────────────────────────

Real-time pricing: Rates vary by hour based on grid conditions
Critical peak pricing: Very high rates during grid stress

Example:
  Normal: $0.14/kWh
  Critical peak: $0.85/kWh (8 events/summer, 3-6pm)

  Strategy: Reduce load 40% during critical peaks
    Normal use: 120 kW × 3 hrs × $0.85 = $306
    Reduced: 72 kW × 3 hrs × $0.85 = $184
    Savings per event: $122
    Annual (8 events): $976

3. ANCILLARY SERVICES (advanced)
────────────────────────────────────────────────────────────────

Frequency regulation, spinning reserves
Requires fast response (<1 second to 10 minutes)
Best with battery storage or fast-response generation

Payment: $50-150/kW-year
Complexity: High (requires aggregator)

Best for: Facilities with battery storage and advanced controls

Suitability for CEA:
────────────────────────────────────────────────────────────────

Moderate to Good:
  ✓ 24/7 operation (always have load to reduce)
  ✓ Flexible loads (lighting can dim, temp can vary slightly)
  ✓ Thermal mass (buildings buffer short interruptions)

Challenges:
  ✗ Sensitive crops (limits reduction amount)
  ✗ Reliability needs (can't risk crop damage)
  ✗ Complex to automate properly

Recommendation: Start with simple capacity programs, low commitment
```

---

## 11.5 Power Quality

### Power Factor Correction

```
POWER FACTOR BASICS
═══════════════════════════════════════════════════════════════════

Power Factor (PF) = Real Power (kW) ÷ Apparent Power (kVA)

Good: PF > 0.95
Fair: PF 0.85-0.95
Poor: PF < 0.85

Causes of low PF in CEA:
  • Motors (pumps, fans) without correction
  • Older magnetic ballasts (HPS, T12 fluorescent)
  • Under-loaded transformers
  • Long cable runs

Impact of Low PF:
────────────────────────────────────────────────────────────────

Example: 100 kW real power, PF = 0.75

  Apparent power: 100 ÷ 0.75 = 133 kVA
  Extra current: 33% higher than necessary!

  Consequences:
    • Higher demand charges (billed on kVA, not kW)
    • Increased line losses in facility
    • Transformer heating
    • Possible penalties from utility

Correction Methods:
────────────────────────────────────────────────────────────────

1. Capacitor Banks (most common)
   Cost: $60-120/kVAR
   Payback: 1-3 years typically

2. Active Harmonic Filters
   Cost: $150-300/kVAR
   Also corrects harmonics (from LED drivers, VFDs)

3. Synchronous Condensers
   Cost: High
   Only for large installations

Example Calculation:
────────────────────────────────────────────────────────────────

Current: 150 kW, 0.78 PF → 192 kVA
Target: 150 kW, 0.95 PF → 158 kVA

Required reactive power (kVAR):
  Before: 125 kVAR (lagging)
  After: 49 kVAR (lagging)
  Correction needed: 76 kVAR capacitors

Cost: 76 kVAR × $90 = $6,840

Demand savings:
  Before: 192 kVA
  After: 158 kVA
  Reduction: 34 kVA → ~31 kW billing demand
  Monthly: 31 × $18 = $558
  Annual: $6,696

Payback: $6,840 ÷ $6,696 = 1.0 year
```

---

## 11.6 Monitoring and Control

### Real-Time Energy Monitoring

```
ENERGY MONITORING SYSTEM ARCHITECTURE
═══════════════════════════════════════════════════════════════════

Components:
  1. Power meters (main + submeters)
  2. Data acquisition system
  3. Analytics software
  4. Automated controls (optional)

Metering Points:
────────────────────────────────────────────────────────────────

Main service        [METER 1] ← Whole facility demand
  ├─ Lighting       [METER 2] ← Largest load usually
  ├─ HVAC           [METER 3] ← Temperature-sensitive
  ├─ Pumps/water    [METER 4] ← Flexible timing
  ├─ Controls       [METER 5] ← Base load
  └─ Other          [METER 6] ← Miscellaneous

Benefits:
  ✓ Identify peak demand drivers
  ✓ Verify equipment efficiency
  ✓ Detect equipment failures
  ✓ Enable automated demand response
  ✓ Track savings from upgrades

Cost:
  Equipment: $5,000-15,000
  Installation: $3,000-8,000
  Software: $500-2,000/year

  Typical payback: 1-2 years through improved operations

Key Performance Indicators to Track:
────────────────────────────────────────────────────────────────

• Peak demand (kW) - daily, monthly
• Energy use intensity (kWh/sq ft, kWh/lb)
• Power factor
• Load factor = avg demand ÷ peak demand
• Time-of-use distribution (% in each rate period)
• Cost per kWh (blended rate)
• Demand charge % of total bill
```

---

## 11.7 Case Study: Grid Optimization

```
COMPREHENSIVE GRID INTEGRATION PROJECT
═══════════════════════════════════════════════════════════════════

Facility: 25,000 sq ft greenhouse
Baseline:
  Peak demand: 185 kW
  Monthly bill: $9,200 ($5,100 energy + $4,100 demand)
  Power factor: 0.79
  No monitoring system

Phase 1: Monitoring & Analysis
────────────────────────────────────────────────────────────────
  Installed submetering: $12,000
  Discovered:
    • Morning lighting startup creating peak (8am)
    • Poor power factor from old ballasts
    • Unnecessary after-hours loads ($400/month waste)

Phase 2: Low-Cost Fixes
────────────────────────────────────────────────────────────────
  Actions:
    • Staggered lighting zones (15-min intervals)
    • Timer controls on non-critical loads
    • Shutdown protocols for after-hours

  Cost: $2,500
  Results:
    • Peak reduced: 185 → 165 kW (11% reduction)
    • Monthly demand charge: $4,100 → $3,670 (-$430)
    • Energy waste eliminated: -$400/month
    • Monthly savings: $830

  Payback: ($12,000 + $2,500) ÷ $830 = 17 months

Phase 3: Power Factor Correction
────────────────────────────────────────────────────────────────
  Installed capacitor bank: $9,500

  Results:
    • Power factor: 0.79 → 0.96
    • Billing demand reduction: 15 kW
    • Monthly savings: 15 × $18 = $270

  Payback: $9,500 ÷ $270 = 35 months (3 years)

Phase 4: Demand Response Enrollment
────────────────────────────────────────────────────────────────
  Program: 30 kW capacity commitment
  Strategy: Reduce lighting in 2 zones during DR events

  Revenue:
    • Capacity payment: 30 kW × $85/kW-year = $2,550/year
    • Performance payments (8 events): $800/year
    • Total: $3,350/year

  No capital cost (used existing controls)

Cumulative Results (Year 3):
────────────────────────────────────────────────────────────────
  Total investment: $24,000
  Annual savings: $13,310/year ($830 + $270 monthly = $13,200)
                  + $3,350 DR = $16,660/year

  Peak demand: 185 → 150 kW (19% reduction)
  Monthly bill: $9,200 → $6,200 (33% reduction)

  Payback: $24,000 ÷ $16,660 = 1.4 years (actual)
  5-year NPV: $48,300
```

---

## Key Takeaways

1. **Demand charges are significant** - Often 20-40% of bill
2. **One peak event affects whole month** - Monitor and control peaks
3. **TOU rates reward flexibility** - Shift loads to off-peak when possible
4. **Power factor correction pays back** - Usually 1-3 years
5. **Monitoring enables optimization** - Can't manage what you don't measure
6. **DR programs add revenue** - If compatible with operations
7. **Integrated approach works best** - Combine multiple strategies

---

## Practice Exercise

Optimize grid integration:
1. Analyze current rate structure and bills
2. Identify peak demand drivers
3. Calculate power factor improvement opportunity
4. Design load shifting strategy
5. Evaluate DR program participation
6. Project savings and payback

---

**Next Module**: Module 12 - Economic Analysis

---

*Course 305: Energy Systems for CEA | Module 11 | EcoFusion Academy*
