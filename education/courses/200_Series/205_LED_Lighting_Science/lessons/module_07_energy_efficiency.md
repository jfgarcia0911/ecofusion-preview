# Module 7: Energy Efficiency

**Course:** 205 - LED Lighting Science
**Duration:** 60 minutes
**Level:** Intermediate

## Introduction

Lighting typically represents 30-50% of total energy consumption in indoor CEA facilities. Optimizing energy efficiency reduces operating costs, improves profitability, and enhances environmental sustainability. This module explores strategies for maximizing photosynthetic efficiency per watt while minimizing waste.

## Learning Objectives

By the end of this module, you will be able to:

1. Calculate lighting energy consumption and associated costs
2. Optimize photoperiod strategies for energy efficiency
3. Implement dimming and demand response programs
4. Evaluate ROI for efficiency upgrades
5. Reduce cooling loads through efficient lighting
6. Access utility rebates and incentives for LED lighting

## 1. Energy Consumption Analysis

```
Calculating Lighting Energy Use
================================

BASIC FORMULA:
Energy (kWh) = Power (kW) × Hours × Days

Example Facility:
- Fixtures: 100 units
- Power: 400W each
- Photoperiod: 16 hours/day
- Operating: 365 days/year

Daily Consumption:
= (100 fixtures × 400W) / 1000 × 16 hours
= 40 kW × 16 hours
= 640 kWh/day

Annual Consumption:
= 640 kWh/day × 365 days
= 233,600 kWh/year

Annual Cost (at $0.12/kWh):
= 233,600 × $0.12
= $28,032/year

ENERGY INTENSITY METRICS

Per Square Foot:
Growing area: 10,000 sq ft
Energy intensity = 233,600 kWh / 10,000 sq ft
                 = 23.4 kWh/sq ft/year

Per Kilogram Produced:
Annual production: 50,000 kg lettuce
Energy per kg = 233,600 kWh / 50,000 kg
              = 4.67 kWh/kg

Benchmark Comparison:
┌────────────────────────────────────┐
│ Crop Type    kWh/kg   Assessment   │
│ ──────────   ──────   ──────────   │
│ Lettuce      3-5      Typical      │
│ Leafy Greens 4-7      Typical      │
│ Herbs        5-8      Typical      │
│ Tomato       8-15     Typical      │
│ Cannabis     20-40    Typical      │
└────────────────────────────────────┘
```

### Cost Components

```
Comprehensive Energy Costing
============================

UTILITY RATE STRUCTURES

1. FLAT RATE (Simplest)
   $0.10-0.15/kWh regardless of usage or time

   Example: $0.12/kWh
   Monthly cost = Monthly kWh × $0.12

2. TIME-OF-USE (TOU)
   Different rates by time of day

   Example:
   Peak (12pm-8pm):     $0.18/kWh
   Off-Peak (8pm-12pm): $0.09/kWh

   Strategy: Shift photoperiod to off-peak hours

3. TIERED RATE
   Rate increases with consumption

   Example:
   0-1,000 kWh:      $0.10/kWh
   1,001-5,000 kWh:  $0.12/kWh
   >5,000 kWh:       $0.15/kWh

4. DEMAND CHARGES
   Based on peak kW draw during billing period

   Example:
   Energy: $0.10/kWh
   Demand: $15/kW of peak demand

   Facility with 50 kW peak:
   - Energy: 36,000 kWh × $0.10 = $3,600
   - Demand: 50 kW × $15 = $750
   - Total: $4,350

   Strategy: Reduce peak demand through staging

TOTAL COST CALCULATION
┌────────────────────────────────────┐
│ Component        Amount      Cost  │
│ ──────────       ──────      ────  │
│ Energy (kWh)     20,000    $2,400  │
│ Demand (kW)      45        $  675  │
│ Fixed charges    -         $   50  │
│ Taxes & fees     -         $  175  │
│ ─────────────────────────────────  │
│ TOTAL                      $3,300  │
└────────────────────────────────────┘
```

## 2. Efficiency Optimization Strategies

```
Maximizing Efficacy
===================

STRATEGY 1: High-Efficacy Fixtures
Current: 2.4 μmol/J fixtures
Upgrade: 3.0 μmol/J fixtures

Same light output (1200 μmol/s):
Current power: 1200 / 2.4 = 500W
Upgraded power: 1200 / 3.0 = 400W
Savings: 100W per fixture (20%)

100 fixtures × 100W × 16 hrs × 365 days / 1000:
= 58,400 kWh/year saved
= $7,008/year at $0.12/kWh

Payback:
Upgrade cost: $150 per fixture × 100 = $15,000
Payback period: $15,000 / $7,008 = 2.1 years ✓

STRATEGY 2: Spectral Optimization
White + Red vs. White only

White only fixture:
- PPF: 1000 μmol/s
- Power: 400W
- Efficacy: 2.5 μmol/J

White + supplemental red:
- PPF: 1200 μmol/s (same delivered PAR)
- Power: 400W
- Efficacy: 3.0 μmol/J

Why more efficient:
- Red LEDs: 40-50% electrical→PAR efficiency
- Blue LEDs: 50-60% electrical→PAR efficiency
- White LEDs: 30-40% efficiency (phosphor loss)

Adding red photons increases total efficacy

STRATEGY 3: Optimal Mounting Height
Balance intensity and coverage

Too Low (12"):
- PPFD: 500 μmol/m²/s
- Coverage: 2 m²
- Uniformity: 60%
- Fixtures needed: 50
- Total power: 20 kW

Optimized (24"):
- PPFD: 300 μmol/m²/s
- Coverage: 4 m²
- Uniformity: 85%
- Fixtures needed: 30
- Total power: 12 kW
- Savings: 40% ✓

STRATEGY 4: Reflective Surfaces
Improve light capture efficiency

Without reflective walls:
- Delivered light: 75% of fixture output
- Lost to absorption: 25%

With white/mylar walls:
- Delivered light: 85-90% of fixture output
- Lost to absorption: 10-15%
- Effective gain: 12-15%

Return on investment:
- Cost: $2-5/sq ft for reflective material
- Energy savings: 10-12%
- Payback: 1-2 years typical
```

### Photoperiod Optimization

```
Photoperiod Energy Strategies
==============================

SCENARIO: Lettuce Production
Target DLI: 15 mol/m²/d
Electricity rate: TOU pricing

Option A: Traditional (18 hours, day)
Photoperiod: 6am-12am (includes peak)
PPFD: 231 μmol/m²/s
Power: 20 kW

Energy breakdown:
Off-peak (6am-12pm): 6 hrs × 20 kW = 120 kWh × $0.09 = $10.80
Peak (12pm-8pm):     8 hrs × 20 kW = 160 kWh × $0.18 = $28.80
Off-peak (8pm-12am): 4 hrs × 20 kW = 80 kWh × $0.09 = $ 7.20
Daily cost: $46.80

Option B: Off-Peak Shift (18 hours, night)
Photoperiod: 2pm-8am (avoids peak)
PPFD: 231 μmol/m²/s
Power: 20 kW

Energy breakdown:
Peak (2pm-8pm):      6 hrs × 20 kW = 120 kWh × $0.18 = $21.60
Off-peak (8pm-8am): 12 hrs × 20 kW = 240 kWh × $0.09 = $21.60
Daily cost: $43.20
Savings: $3.60/day = $1,314/year

Option C: Split Photoperiod (18 hours total)
Morning: 5am-11am (6 hours, off-peak)
Evening: 6pm-6am (12 hours, off-peak)
PPFD: 231 μmol/m²/s
Power: 20 kW

Energy breakdown:
All off-peak: 18 hrs × 20 kW = 360 kWh × $0.09 = $32.40
Daily cost: $32.40
Savings: $14.40/day = $5,256/year ✓

Plant Response Check:
- Some crops tolerate split photoperiod well
- Others may experience circadian disruption
- Test before full implementation

DEMAND CHARGE REDUCTION

Problem: All fixtures on simultaneously = high peak demand

Solution: Staged startup

Traditional:
6:00am - All 100 fixtures ON instantly
Peak demand: 40 kW
Demand charge: 40 kW × $15 = $600/month

Staged (4 zones):
6:00am - Zone 1 (25 fixtures, 10 kW)
6:15am - Zone 2 (25 fixtures, 20 kW total)
6:30am - Zone 3 (25 fixtures, 30 kW total)
6:45am - Zone 4 (25 fixtures, 40 kW total)

Peak demand: Still 40 kW (all eventually on)
BUT ramp is smoother, may trigger lower tier

With gradual ramp and dimming integration:
Peak demand: 35 kW (dimming during overlap)
Demand charge: 35 kW × $15 = $525/month
Savings: $75/month = $900/year
```

## 3. Thermal Management and HVAC Integration

```
Lighting Heat Load Impact
=========================

HEAT GENERATION CALCULATION

LED Fixture Energy Balance:
Input power: 400W
Light output (PAR): 160W (40% efficient)
Heat output: 240W (60% waste heat)

100 fixtures:
Total input: 40 kW
Light energy: 16 kW
Heat energy: 24 kW = 81,900 BTU/hr

HVAC Cooling Requirement

Heat load from lights: 81,900 BTU/hr
Cooling capacity needed: 81,900 / 12,000 = 6.8 tons

HVAC Operating Cost:
Cooling power: 6.8 tons × 1 kW/ton = 6.8 kW
Hours operated: 16 hrs/day (when lights on)
Daily energy: 6.8 kW × 16 hrs = 108.8 kWh
Annual energy: 108.8 × 365 = 39,712 kWh
Annual cost: 39,712 × $0.12 = $4,765

TRUE COST OF LIGHTING
┌────────────────────────────────────┐
│ Direct lighting: $28,032/year      │
│ Cooling load:    $ 4,765/year      │
│ ──────────────────────────────     │
│ Total impact:    $32,797/year      │
│                                    │
│ Cooling = 17% additional cost      │
└────────────────────────────────────┘

EFFICIENCY UPGRADE IMPACT

Upgrade to 3.0 μmol/J (from 2.4):
Power reduction: 20% (40 kW → 32 kW)

New heat load:
Heat: 32 kW × 0.60 = 19.2 kW = 65,520 BTU/hr
Cooling reduction: 5.4 tons → 4.3 tons (1.1 ton savings)

Cooling cost savings:
Reduced cooling power: 1.1 kW
Annual cooling savings: 1.1 × 16 × 365 = 6,424 kWh
Cost savings: 6,424 × $0.12 = $771/year

TOTAL SAVINGS FROM EFFICIENCY UPGRADE:
┌────────────────────────────────────┐
│ Lighting energy: $7,008/year       │
│ Cooling energy:  $  771/year       │
│ ──────────────────────────────     │
│ Total savings:   $7,779/year       │
│                                    │
│ ROI improves from 2.1 to 1.9 years │
└────────────────────────────────────┘
```

### Heat Recovery Opportunities

```
Recovering Waste Heat
=====================

WINTER HEATING BENEFIT

Facility heat load: 24 kW from lighting
Heating season: 6 months (November-April)
Hours lights on: 16 hrs/day

Heat available: 24 kW × 81,900 BTU/hr
Heating offset: Reduces gas/electric heating

Natural gas heating cost: $1.00/therm
Heat from lights: 81,900 BTU/hr × 16 hr = 1,310,400 BTU/day
                = 13.1 therms/day equivalent
Winter season: 180 days × 13.1 = 2,358 therms
Heating savings: 2,358 × $1.00 = $2,358

NET ANNUAL ENERGY COST:
Summer (cooling cost):  $2,382 (6 months)
Winter (heating credit): -$2,358
Net HVAC impact: $24/year (nearly neutral!)

THERMAL MANAGEMENT STRATEGIES

1. Passive Heat Removal (Warm Weather)
   ├─ Natural ventilation
   ├─ Heat rises strategy
   └─ Exhaust fans at ceiling

2. Heat Isolation (Year-round)
   ├─ Remote drivers (place outside grow area)
   ├─ Ducted heat removal
   └─ Separate cooling zones

3. Heat Recovery (Cold Weather)
   ├─ Capture and distribute to facility
   ├─ Offset HVAC heating
   └─ Pre-heat incoming ventilation air

Optimal Strategy (Climate-Dependent):
Cold climate: Embrace heat, minimal cooling
Hot climate: Maximize efficiency, heat removal
Mixed climate: Seasonal strategies
```

## 4. Dimming and Dynamic Control

```
Energy Savings Through Dimming
===============================

STATIC vs. DYNAMIC INTENSITY

Static System (No Dimming):
- Fixtures always at 100%
- Energy: Constant 40 kW × 16 hrs = 640 kWh/day

Dynamic System (DLI-Based Dimming):
- Adjust intensity for crop stage
- Reduce intensity when target DLI met

Example: Lettuce Growth Cycle (28 days)

Week 1 (Seedling):
Target DLI: 10 mol/m²/d
Required PPFD: 154 μmol/m²/s
Dimming: 67% (154/231)
Power: 26.8 kW
Energy: 26.8 × 16 = 428.8 kWh/day

Week 2-3 (Vegetative):
Target DLI: 14 mol/m²/d
Required PPFD: 216 μmol/m²/s
Dimming: 93% (216/231)
Power: 37.2 kW
Energy: 37.2 × 16 = 595.2 kWh/day

Week 4 (Mature):
Target DLI: 15 mol/m²/d
Required PPFD: 231 μmol/m²/s
Dimming: 100%
Power: 40 kW
Energy: 40 × 16 = 640 kWh/day

Cycle Average:
= (428.8×7 + 595.2×14 + 640×7) / 28
= 582.4 kWh/day (vs. 640 without dimming)
Savings: 9% average

Annual savings:
13 cycles × 28 days × 57.6 kWh = 21,034 kWh
Cost savings: $2,524/year

GREENHOUSE SUPPLEMENTAL DIMMING

Natural light varies throughout day
Strategy: Supplement only what's needed

Target: 500 μmol/m²/s total PPFD

No Dimming System:
Lights always provide 400 μmol/m²/s
Total: Natural + 400 (often exceeds target)
Wasted energy when sunny

With Dimming:
Lights adjust: Target - Natural = Supplement

Cloudy day (100 μmol/m²/s natural):
Supplement: 400 μmol/m²/s (100% power)

Partly cloudy (250 μmol/m²/s natural):
Supplement: 250 μmol/m²/s (63% power)

Sunny (500+ μmol/m²/s natural):
Supplement: 0 μmol/m²/s (lights off)

Annual energy savings: 30-50% typical
ROI for dimming system: 2-3 years
```

## 5. Utility Incentives and Rebates

```
Accessing Energy Efficiency Programs
=====================================

COMMON INCENTIVE PROGRAMS

1. EQUIPMENT REBATES
   LED fixture purchase rebates

   Typical structure:
   - $0.50-2.00 per watt replaced
   - Efficacy minimums (>2.5 μmol/J)
   - DLC (DesignLights Consortium) listing required

   Example:
   Replacing 100 × 600W HPS with 100 × 400W LED
   Watts reduced: 200W × 100 = 20,000W
   Rebate: 20,000 × $1.00 = $20,000

   Effective fixture cost:
   LED cost: $500 × 100 = $50,000
   Rebate: -$20,000
   Net cost: $30,000 (40% discount!)

2. CUSTOM INCENTIVES
   Unique projects, calculated savings

   Based on measured kWh savings
   Typical: $0.08-0.15 per kWh saved annually

   Example:
   Annual savings: 100,000 kWh
   Incentive: 100,000 × $0.10 = $10,000

3. TAX CREDITS & DEDUCTIONS
   Federal/state tax benefits

   - Section 179D (Commercial Buildings)
   - Investment Tax Credit (ITC)
   - Accelerated depreciation (MACRS)

   Example Section 179D:
   Energy reduction: 25%
   Deduction: $0.60-1.80/sq ft
   10,000 sq ft × $1.00 = $10,000 deduction
   Tax savings (25% rate): $2,500

4. DEMAND RESPONSE PROGRAMS
   Reduce load during grid peak events

   Compensation: $50-200 per kW reduced
   Events: 10-20 per year, 2-4 hours each

   Example:
   Facility load: 50 kW
   Curtailment: 20 kW (40% dimming)
   Compensation: 20 kW × $100 = $2,000/year

INCENTIVE STACKING EXAMPLE
┌────────────────────────────────────┐
│ LED Upgrade Project                │
│ ───────────────────────────────    │
│ Equipment cost:      $50,000       │
│ Utility rebate:     -$20,000       │
│ Tax credit:         -$ 5,000       │
│ ───────────────────────────────    │
│ Net investment:      $25,000       │
│                                    │
│ Annual energy savings: $10,000     │
│ Simple payback: 2.5 years          │
│ (vs. 5.0 years without incentives) │
└────────────────────────────────────┘

HOW TO ACCESS PROGRAMS
┌────────────────────────────────────┐
│ 1. Contact utility account manager │
│ 2. Check DSIRE database            │
│    (dsireusa.org)                  │
│ 3. Verify DLC listing of fixtures  │
│ 4. Submit pre-approval application │
│ 5. Install equipment                │
│ 6. Provide verification/invoices   │
│ 7. Receive incentive payment       │
└────────────────────────────────────┘
```

## 6. Monitoring and Continuous Improvement

```
Energy Performance Tracking
===========================

KEY PERFORMANCE INDICATORS (KPIs)

1. Energy Use Intensity (EUI)
   kWh per square foot per year

   Target: <25 kWh/sq ft/year (lighting only)

   Calculation:
   Annual energy / Growing area
   = 233,600 kWh / 10,000 sq ft
   = 23.4 kWh/sq ft/year ✓

2. Energy Per Unit Production
   kWh per kg harvested

   Targets:
   - Lettuce: 3-5 kWh/kg
   - Herbs: 5-8 kWh/kg
   - Tomato: 8-15 kWh/kg

   Improvement strategies:
   - Increase yields (more kg same energy)
   - Reduce energy (same kg less energy)

3. Photon Efficacy (System-Level)
   Delivered PPFD / Total electrical input

   Accounts for:
   - Fixture efficacy
   - Driver efficiency
   - Optical losses
   - Control system overhead

   Target: >70% of fixture rated efficacy

4. Cost Per DLI
   Operating cost / DLI delivered

   Lower is better
   Accounts for electricity rates, not just efficiency

MONITORING IMPLEMENTATION
┌────────────────────────────────────┐
│ Equipment Needed:                  │
│ □ Power meters (sub-metering)      │
│ □ Data logger (record trends)      │
│ □ Quantum sensor (PPFD)            │
│ □ Dashboard/software               │
│                                    │
│ Monitoring Frequency:              │
│ - Real-time: Power draw            │
│ - Daily: Energy consumption        │
│ - Weekly: PPFD verification        │
│ - Monthly: Efficiency metrics      │
│ - Quarterly: Full audit            │
└────────────────────────────────────┘

BENCHMARK AND OPTIMIZE
┌────────────────────────────────────┐
│ Quarterly Review Process:          │
│                                    │
│ 1. Collect data (energy, yield)    │
│ 2. Calculate KPIs                  │
│ 3. Compare to baseline/targets     │
│ 4. Identify efficiency gaps        │
│ 5. Implement improvements          │
│ 6. Verify savings                  │
│ 7. Update targets                  │
└────────────────────────────────────┘
```

## Summary

Energy efficiency optimization reduces operational costs while maintaining or improving crop performance. Through fixture selection, photoperiod strategies, dimming control, and utility incentives, growers can achieve significant energy and cost savings.

**Key Takeaways**:

1. Lighting represents 30-50% of CEA facility energy consumption
2. Higher-efficacy fixtures reduce both direct lighting and cooling costs
3. Time-of-use pricing enables photoperiod optimization for cost savings
4. Dimming systems provide 10-30% energy savings through dynamic control
5. Utility rebates can offset 20-50% of LED upgrade costs
6. Heat from lighting can offset winter heating (climate-dependent)
7. Regular monitoring and KPI tracking drive continuous improvement
8. Total cost includes lighting energy + cooling load

**Efficiency Priorities**:
1. Fixture efficacy (>2.7 μmol/J minimum)
2. Appropriate PPFD (don't over-light)
3. Dimming capability for dynamic control
4. Photoperiod optimization for rate structure
5. Regular maintenance (cleaning, replacement)
6. Monitoring and optimization

## Check Your Understanding

1. Calculate annual cost: 50 fixtures, 400W each, 18 hrs/day, $0.11/kWh
2. Why does improving lighting efficacy also reduce HVAC costs?
3. A facility uses 200,000 kWh/year for lighting. Upgrading saves 20%. What's annual savings at $0.13/kWh?
4. List three strategies to reduce demand charges.
5. How can waste heat from LEDs benefit facilities?

**Answers**:
1. Daily: 50 × 400W × 18 hrs / 1000 = 360 kWh. Annual: 360 × 365 = 131,400 kWh. Cost: 131,400 × $0.11 = $14,454
2. Efficient fixtures generate less waste heat (60% vs. 40-50% of input power). Less heat = reduced cooling load and HVAC operating costs.
3. Savings: 200,000 × 0.20 = 40,000 kWh. Cost savings: 40,000 × $0.13 = $5,200/year
4. Any three: Staged startup (avoid simultaneous on), dimming during overlap, shift loads to off-peak, reduce total connected load, load shedding during peak
5. In cold climates, lighting waste heat can offset heating requirements during winter, reducing natural gas or electric heating costs. Net HVAC impact can be nearly neutral year-round.

## Next Module Preview

In Module 8: Photoperiod Control, you'll learn about photoperiodic plant responses, flowering control strategies, day-neutral vs. photoperiodic crops, critical day length concepts, and implementing night interruption and day extension techniques for commercial production.

---

**Estimated Time**: 60 minutes
**Difficulty**: Intermediate
**Prerequisites**: Modules 1-6
