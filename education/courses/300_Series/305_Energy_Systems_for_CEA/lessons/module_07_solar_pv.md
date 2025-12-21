# Module 7: Solar PV Systems

## Learning Objectives

By the end of this module, you will be able to:
- Size solar PV systems for CEA facilities
- Calculate solar production and economics
- Understand net metering and grid connection
- Evaluate battery storage options
- Perform complete solar ROI analysis

---

## 7.1 Solar PV Fundamentals

### Solar Resource Assessment

```
SOLAR IRRADIANCE BY REGION (Average kWh/m²/day)
═══════════════════════════════════════════════════════════════════

Region                      Annual    Summer    Winter
─────────────────────────────────────────────────────────────────
Southwest (AZ, NM, NV)      6.5-7.5   8.0-9.0   4.5-5.5
California                  5.5-6.5   7.0-8.0   3.5-4.5
Southeast                   4.5-5.5   6.0-7.0   3.0-4.0
Mid-Atlantic                4.0-5.0   5.5-6.5   2.5-3.5
Midwest                     4.0-4.5   5.5-6.0   2.0-3.0
Northeast                   3.5-4.5   5.0-6.0   2.0-3.0
Northwest                   3.5-4.5   5.5-6.5   1.5-2.5
Alaska                      2.5-3.5   5.0-6.0   0.5-1.5

Find your location: www.nrel.gov/gis/solar.html

╔══════════════════════════════════════════════════════════════════╗
║           ANNUAL SOLAR PRODUCTION MAP (relative)                 ║
╠══════════════════════════════════════════════════════════════════╣
║                                                                  ║
║  Southwest      ████████████████████████████████░ 100%          ║
║  California     █████████████████████████░░░░░░░░  85%          ║
║  Southeast      ███████████████████░░░░░░░░░░░░░░  70%          ║
║  Mid-Atlantic   ██████████████████░░░░░░░░░░░░░░░  65%          ║
║  Midwest        █████████████████░░░░░░░░░░░░░░░░  60%          ║
║  Northeast      ████████████████░░░░░░░░░░░░░░░░░  58%          ║
║  Northwest      ████████████████░░░░░░░░░░░░░░░░░  55%          ║
║                                                                  ║
╚══════════════════════════════════════════════════════════════════╝
```

### System Components

```
SOLAR PV SYSTEM ARCHITECTURE
═══════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────┐
│  SOLAR PANELS (modules)                                          │
│  • Convert sunlight to DC electricity                            │
│  • Typical: 350-450W per panel                                   │
│  • Efficiency: 18-22%                                            │
│  • Lifespan: 25-30 years                                         │
│  • Degradation: 0.5%/year                                        │
└──────────────────┬──────────────────────────────────────────────┘
                   │ DC power
                   ▼
┌─────────────────────────────────────────────────────────────────┐
│  INVERTER                                                        │
│  • Converts DC to AC electricity                                 │
│  • Types: String, micro, power optimizer                         │
│  • Efficiency: 96-99%                                            │
│  • Lifespan: 10-15 years                                         │
└──────────────────┬──────────────────────────────────────────────┘
                   │ AC power
                   ▼
┌─────────────────────────────────────────────────────────────────┐
│  MAIN ELECTRICAL PANEL                                           │
│  • Feeds facility loads                                          │
│  • Exports excess to grid (if net metered)                       │
│  • Imports from grid when needed                                 │
└─────────────────────────────────────────────────────────────────┘

Optional: Battery storage between inverter and panel
```

---

## 7.2 System Sizing

### Annual Production Calculation

```
SOLAR PV PRODUCTION FORMULA
═══════════════════════════════════════════════════════════════════

Annual kWh = System Size (kW) × Hours × Derate Factor

Where:
  System Size = Total DC watts ÷ 1,000
  Hours = Solar hours/day × 365 days
  Derate Factor = Efficiency losses (0.75-0.85 typical)

Derate Factors:
  Panel efficiency:        0.98 (2% loss)
  Temperature:             0.95 (5% loss)
  Inverter efficiency:     0.98 (2% loss)
  Soiling/shading:         0.95 (5% loss)
  Mismatch/wiring:         0.98 (2% loss)
  ────────────────────────────────────────
  Combined: 0.98 × 0.95 × 0.98 × 0.95 × 0.98 = 0.82

Example: 50 kW system in Midwest (4.2 sun hours/day)
───────────────────────────────────────────────────────────────────

Annual Production:
  50 kW × 4.2 hrs/day × 365 days × 0.82 = 62,730 kWh/year

Monthly variation:
  Winter (2.5 hrs/day): 50 × 2.5 × 30 × 0.82 = 3,075 kWh/month
  Summer (6.0 hrs/day): 50 × 6.0 × 30 × 0.82 = 7,380 kWh/month
```

### Sizing for CEA Facilities

```
SYSTEM SIZING STRATEGIES
═══════════════════════════════════════════════════════════════════

Strategy 1: OFFSET PERCENTAGE OF USE
───────────────────────────────────────────────────────────────────

Facility: 10,000 sq ft greenhouse
Annual consumption: 400,000 kWh
Goal: 50% solar offset = 200,000 kWh/year

Location: Mid-Atlantic (4.5 sun hrs/day, 0.82 derate)
  Production per kW: 1 kW × 4.5 × 365 × 0.82 = 1,348 kWh/year

  Required system: 200,000 ÷ 1,348 = 148 kW DC

  Number of panels (400W each): 148,000W ÷ 400W = 370 panels
  Roof area needed: 370 × 18 sq ft = 6,660 sq ft

  Cost estimate: 148 kW × $2.50/W = $370,000

Strategy 2: MAXIMUM ROOF COVERAGE
───────────────────────────────────────────────────────────────────

Available roof: 8,000 sq ft
Usable (accounting for setbacks, equipment): 6,000 sq ft

  Panels fitting: 6,000 ÷ 18 sq ft = 333 panels
  System size: 333 × 400W = 133 kW

  Annual production: 133 × 1,348 = 179,284 kWh
  Offset percentage: 179,284 ÷ 400,000 = 45%

  Cost: 133 kW × $2.50/W = $332,500

Strategy 3: NET METERING MAXIMUM
───────────────────────────────────────────────────────────────────

Many utilities limit to 100-120% of annual consumption

  Maximum system: 400,000 kWh ÷ 1,348 kWh/kW = 297 kW
  This would require: 16,000 sq ft roof (likely too large)

  Constraint: Limited by available roof space

RECOMMENDATION: Size to available space or economic optimum
```

---

## 7.3 Financial Analysis

### Cost Breakdown (2025)

```
SOLAR PV SYSTEM COSTS
═══════════════════════════════════════════════════════════════════

Component               $/Watt    % of Total
─────────────────────────────────────────────────────────────────
Panels                  $0.60     24%
Inverters               $0.25     10%
Racking/mounting        $0.30     12%
Electrical/wiring       $0.20      8%
Labor (installation)    $0.70     28%
Engineering/permits     $0.20      8%
Overhead/profit         $0.25     10%
─────────────────────────────────────────────────────────────────
TOTAL                   $2.50/W   100%

Economies of Scale:
  Residential (<10 kW):    $3.00-4.00/W
  Small commercial (10-50): $2.50-3.50/W
  Large commercial (50-500): $2.00-2.80/W
  Utility scale (>500):     $1.50-2.20/W

50 kW Example: 50,000W × $2.50 = $125,000 installed
```

### ROI Calculation

```
COMPLETE FINANCIAL ANALYSIS
═══════════════════════════════════════════════════════════════════

System: 50 kW in Midwest greenhouse
Annual production: 62,730 kWh
Electricity rate: $0.14/kWh
System cost: $125,000

YEAR 1 ECONOMICS
───────────────────────────────────────────────────────────────────

Electricity Savings:
  62,730 kWh × $0.14 = $8,782/year

Federal Tax Credit (30% through 2032):
  $125,000 × 0.30 = $37,500 (Year 1)

State/Utility Rebates (varies by location):
  Example: $0.50/W × 50,000W = $25,000

Net System Cost After Incentives:
  $125,000 - $37,500 - $25,000 = $62,500

PAYBACK ANALYSIS
───────────────────────────────────────────────────────────────────

Simple Payback (post-incentive):
  $62,500 ÷ $8,782/year = 7.1 years

With electricity escalation (3%/year):
  Year 1: $8,782
  Year 2: $9,045
  Year 3: $9,316
  ...
  Payback: ~6.5 years

25-YEAR FINANCIAL SUMMARY
───────────────────────────────────────────────────────────────────

Cash Flows (5% discount rate, 3% electric escalation):
  Initial investment:        -$125,000
  Year 1 (with ITC):         +$46,282
  Years 2-10 savings:        +$94,850 (NPV)
  Inverter replacement Y10:  -$8,000
  Years 11-25 savings:       +$115,120 (NPV)
  ─────────────────────────────────────
  Net Present Value:         +$123,252

Internal Rate of Return (IRR): 14.8%
Levelized Cost of Energy: $0.047/kWh (vs. $0.14 grid)

BREAK-EVEN SCENARIOS
───────────────────────────────────────────────────────────────────

Best case (good sun, high rates, full incentives):
  Payback: 4-6 years, NPV: $150,000+

Average case (moderate sun/rates, partial incentives):
  Payback: 6-10 years, NPV: $75,000-125,000

Worst case (poor sun, low rates, no incentives):
  Payback: 12-18 years, NPV: $0-50,000
```

---

## 7.4 Net Metering and Grid Integration

### Net Metering Basics

```
NET METERING EXPLAINED
═══════════════════════════════════════════════════════════════════

Concept: Utility credits you for excess solar production

Daily Energy Flow (example):
───────────────────────────────────────────────────────────────────

Time      Solar    Load     Grid        Net Meter
          (kW)     (kW)     Flow        (kWh)
────────────────────────────────────────────────────────────────
Midnight  0        25       +25 import  -25
6am       10       30       +20 import  -45
Noon      50       25       -25 export  -20
6pm       15       40       +25 import  -45
────────────────────────────────────────────────────────────────

End of day: -45 kWh net import
  Charged for 45 kWh
  Solar offset: 75 kWh generated - 45 kWh net = 30 kWh exported

Monthly Settlement:
  Total consumption: 30,000 kWh
  Total solar generation: 8,000 kWh
  Excess exported: 2,000 kWh
  Net consumption: 22,000 kWh

  Scenarios by state policy:
    A) 1:1 credit: Pay for 22,000 kWh only
    B) Wholesale credit: Pay for 24,000 - 2,000 × 0.04/$0.14
    C) Use-it-or-lose-it: Pay for 24,000 (no export credit)

Key Variables:
  • Credit rate (retail vs wholesale)
  • Annual true-up vs monthly
  • System size limits (100-120% typical)
  • Demand charge treatment
  • Connection fees
```

### Time-of-Use Rate Optimization

```
SOLAR + TOU RATE STRATEGY
═══════════════════════════════════════════════════════════════════

TOU Rate Example:
  On-peak (12pm-6pm):    $0.24/kWh ← Solar producing!
  Mid-peak (8am-12pm, 6-10pm): $0.16/kWh
  Off-peak (10pm-8am):   $0.10/kWh

Facility Load Profile:
  Lighting on: 6am-10pm (16 hours)
  Base load: 24/7
  Peak demand: 95 kW (2pm)

Solar Production Profile (50 kW system):
  Peak production: 12pm-2pm (~45 kW)
  Perfect alignment with on-peak pricing!

Value Analysis:
───────────────────────────────────────────────────────────────────

Without TOU consideration (flat $0.14/kWh):
  62,730 kWh × $0.14 = $8,782/year

With TOU optimization:
  On-peak production: 30,000 kWh × $0.24 = $7,200
  Mid-peak production: 25,000 kWh × $0.16 = $4,000
  Off-peak production: 7,730 kWh × $0.10 = $773
  Total value: $11,973/year

Increased value: 36%!

Enhanced Payback:
  $62,500 ÷ $11,973 = 5.2 years (vs 7.1 years flat rate)
```

---

## 7.5 Battery Storage Integration

### Battery Sizing

```
ENERGY STORAGE ANALYSIS
═══════════════════════════════════════════════════════════════════

Use Cases for CEA:
  1. Peak demand reduction (demand charge savings)
  2. Time-shift solar (store day, use night)
  3. Backup power (critical loads during outage)
  4. Grid services (utility programs)

Example: Peak Shaving Application
───────────────────────────────────────────────────────────────────

Current Situation:
  Monthly peak demand: 95 kW
  Demand charge: $18/kW
  Monthly demand cost: 95 × $18 = $1,710

Strategy: Reduce peak to 70 kW using battery
  Target reduction: 25 kW
  Duration needed: 2 hours/day
  Energy capacity: 25 kW × 2 hrs = 50 kWh

Battery System:
  Capacity: 60 kWh (usable, accounting for DOD limits)
  Power rating: 30 kW
  Cost: $750/kWh × 60 = $45,000
  Installation: $10,000
  Total: $55,000

Savings:
  Demand reduction: 25 kW × $18 × 12 months = $5,400/year

Simple payback: $55,000 ÷ $5,400 = 10.2 years

With solar integration (charge from excess solar):
  Additional energy savings: 40 kWh/day × 300 days × $0.16
    = $1,920/year
  Total savings: $7,320/year
  Improved payback: 7.5 years

Considerations:
  ✓ Lifespan: 10-15 years (7,000-10,000 cycles)
  ✓ Degradation: ~2%/year capacity loss
  ✓ Maintenance: Minimal (lithium-ion)
  ✓ Incentives: Check for storage rebates
```

### Solar + Storage Economics

```
COMBINED SYSTEM ANALYSIS
═══════════════════════════════════════════════════════════════════

System: 50 kW solar + 60 kWh battery
Location: California (high rates, TOU, demand charges)

Investment:
  Solar: $125,000
  Battery: $55,000
  Integration: $8,000
  Total: $188,000

Incentives:
  Federal ITC 30%: $56,400
  State storage rebate: $15,000
  Net cost: $116,600

Annual Benefits:
  Solar energy: $11,973 (TOU optimized)
  Demand reduction: $5,400
  Battery arbitrage: $1,920
  Total: $19,293/year

Financial Metrics:
  Payback: 6.0 years
  25-year NPV: $215,680
  IRR: 17.3%

vs Solar Alone:
  Higher upfront cost: +$71,000
  Higher annual savings: +$10,511
  Incremental payback: 6.8 years

Best for:
  ✓ High demand charges (>$15/kW)
  ✓ Significant TOU differential (>$0.10/kWh)
  ✓ Need for backup power
  ✓ Unreliable grid
  ✓ Available incentives
```

---

## 7.6 Mounting and Integration

### Greenhouse Solar Considerations

```
GREENHOUSE SOLAR INTEGRATION CHALLENGES
═══════════════════════════════════════════════════════════════════

Option 1: ROOF-MOUNTED (above glazing)
───────────────────────────────────────────────────────────────────

Pros:
  ✓ Doesn't use separate land
  ✓ Simple electrical connection
  ✓ Reduced building heat gain (shading)

Cons:
  ✗ Shades crops below (10-30% light reduction)
  ✗ Structural load on greenhouse
  ✗ May require permits/engineering
  ✗ Potential wind load issues

Shading Analysis:
  Panels cover: 30% of roof area
  Light reduction: ~15-25% (depending on spacing)
  Production impact: Crop-dependent
    - Shade-tolerant (lettuce): Minimal
    - High-light (tomatoes): Significant

Economic Trade-off:
  Solar value: $10,000/year
  Crop loss (15% × $50,000 revenue): -$7,500/year
  Net benefit: $2,500/year (marginal)

  Better for: Shade-tolerant crops, northern climates

Option 2: GROUND-MOUNTED (adjacent to greenhouse)
───────────────────────────────────────────────────────────────────

Pros:
  ✓ No shading of crops
  ✓ Easier installation
  ✓ Optimal panel angle
  ✓ Better cooling (higher efficiency)

Cons:
  ✗ Requires additional land
  ✗ Longer wire runs (losses, cost)
  ✗ Separate foundation work

Land requirement:
  50 kW system: ~3,000 sq ft land area

Best for: Facilities with available land

Option 3: VERTICAL WALL-MOUNTED
───────────────────────────────────────────────────────────────────

Pros:
  ✓ No crop shading
  ✓ Uses unused vertical space
  ✓ Good winter production (low sun angle)

Cons:
  ✗ Lower annual production (non-optimal angle)
  ✗ Limited capacity

Production: ~70-80% of optimal mounting

Best for: South-facing walls, supplemental generation
```

### Indoor Farm Solar

```
INDOOR FARM SOLAR STRATEGY
═══════════════════════════════════════════════════════════════════

Challenge: Indoor farms have limited roof area relative to energy use

Example: 20,000 sq ft warehouse vertical farm
  Energy use: 1,500,000 kWh/year
  Available roof: 20,000 sq ft
  Usable for solar: 15,000 sq ft

Maximum solar capacity:
  15,000 sq ft ÷ 18 sq ft/panel = 833 panels
  833 × 400W = 333 kW

Annual production (Midwest, 4.2 sun hours):
  333 kW × 4.2 × 365 × 0.82 = 418,656 kWh/year

Offset: 418,656 ÷ 1,500,000 = 28%

Conclusion: Solar alone cannot power indoor farms
  But: 28% offset = significant savings
  $50,283/year at $0.12/kWh

Solar should be part of comprehensive strategy:
  ✓ High-efficiency LED lighting
  ✓ Optimized HVAC/dehumidification
  ✓ Heat recovery
  ✓ Maximum roof solar
  ✓ Consider: Wind, if site permits
  ✓ Grid services (demand response)
```

---

## 7.7 Maintenance and Monitoring

### O&M Requirements

```
SOLAR SYSTEM MAINTENANCE
═══════════════════════════════════════════════════════════════════

Annual Tasks:
  □ Panel cleaning (2-4× per year)
  □ Visual inspection
  □ Performance monitoring review
  □ Inverter check
  □ Electrical connection inspection
  □ Vegetation control (ground mount)

Cleaning Impact:
  Soiling loss: 2-8% (varies by location)
  Cleaning frequency:
    - Low dust/rain: 1-2× per year
    - Moderate: 3-4× per year
    - High dust/low rain: 4-6× per year

  Cost: $0.10-0.25/panel = $500-1,000/year (50 kW)

  Value: Restore 5% production
    62,730 kWh × 0.05 = 3,137 kWh
    Value: $439/year

  ROI: Positive, but diminishing in rainy climates

Equipment Replacement:
  Inverters: Every 10-15 years ($6,000-10,000)
  Panels: 25-30 year lifespan
  Racking: 25+ years (no replacement needed)

Annual O&M Budget: 0.5-1.0% of system cost
  50 kW system: $625-1,250/year
```

### Monitoring Systems

```
PRODUCTION MONITORING
═══════════════════════════════════════════════════════════════════

Key Metrics to Track:
  • Daily/monthly/annual production (kWh)
  • Real-time power output (kW)
  • System efficiency (actual vs. expected)
  • Individual string/panel performance
  • Inverter status and errors
  • Weather conditions

Expected vs. Actual:
  Use monitoring to detect problems

  Example alert:
    Expected (based on irradiance): 220 kWh/day
    Actual: 180 kWh/day
    Variance: -18% → Investigate!

  Possible causes:
    • Soiling/snow
    • Shading (vegetation growth)
    • Inverter issues
    • Panel degradation/damage
    • Connection problems

Monitoring system cost: $500-2,000
Essential for:
  ✓ Warranty claims (prove underperformance)
  ✓ ROI verification
  ✓ Problem detection
  ✓ System optimization
```

---

## 7.8 Case Study: Complete Solar Installation

### Project Profile

**Valley View Greenhouse**
- Location: Colorado (excellent solar resource)
- Size: 15,000 sq ft greenhouse
- Annual consumption: 500,000 kWh
- Electric rate: $0.13/kWh average
- Available roof: 12,000 sq ft

### System Design

```
SOLAR PV SYSTEM SPECIFICATION
═══════════════════════════════════════════════════════════════════

System Size: 150 kW DC
  Panels: 375 × 400W modules
  Inverters: 3 × 50 kW string inverters
  Mounting: Ground-mount (saves roof, better for crops)

Annual Production:
  150 kW × 5.5 sun hrs × 365 × 0.82 = 247,140 kWh/year
  Offset: 49% of consumption

Investment:
  Equipment & installation: $375,000
  Land preparation: $15,000
  Total: $390,000

Incentives:
  Federal ITC (30%): $117,000
  State rebate: $45,000
  Net cost: $228,000

Annual Financial Performance:
  Energy savings: 247,140 × $0.13 = $32,128
  Avoided demand charges: $3,600
  Total benefit: $35,728/year

Financial Metrics:
  Simple payback: 6.4 years
  25-year NPV (5% discount): $378,540
  IRR: 16.2%
  LCOE: $0.035/kWh

Year 10 Analysis:
  Cumulative savings: $392,000
  Less: Net investment: $228,000
  Less: Inverter replacement: $18,000
  Net gain: $146,000

Environmental Impact:
  CO₂ avoided: 175 tons/year
  Equivalent: 38,500 miles not driven
  Grid independence: 49%

Additional Considerations:
  ✓ Improved sustainability marketing
  ✓ Energy price hedge (fixed cost)
  ✓ Increased property value
  ✓ Potential future expansion to 100% offset
```

---

## Key Takeaways

1. **Solar is increasingly cost-effective** - Especially with incentives
2. **Size appropriately** - Balance space, usage, and economics
3. **Net metering is critical** - Know your utility's policy
4. **TOU rates enhance value** - Solar peaks during high-price periods
5. **Batteries add resilience** - But need high demand charges to justify
6. **Greenhouses need careful planning** - Balance solar vs. crop shading
7. **Monitor performance** - Ensure system delivers expected production

---

## Practice Exercise

Design a solar system:
1. Assess facility energy consumption
2. Determine available space for solar
3. Calculate expected production
4. Estimate system cost
5. Apply available incentives
6. Calculate ROI metrics
7. Recommend system size and configuration

---

**Next Module**: Module 8 - Solar Thermal Applications

---

*Course 305: Energy Systems for CEA | Module 7 | EcoFusion Academy*
