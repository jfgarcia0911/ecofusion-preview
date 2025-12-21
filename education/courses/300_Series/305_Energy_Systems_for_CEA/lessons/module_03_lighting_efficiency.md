# Module 3: Lighting Efficiency

## Learning Objectives

By the end of this module, you will be able to:
- Compare lighting technologies for CEA applications
- Calculate lighting energy consumption and costs
- Design efficient lighting layouts for crop production
- Implement lighting controls for energy savings
- Perform LED retrofit ROI analysis

---

## 3.1 Lighting Technology Comparison

### Technology Overview

| Technology | Efficacy (µmol/J) | Lifespan (hrs) | Capital Cost | Best Use |
|------------|-------------------|----------------|--------------|----------|
| **HPS** | 1.7-2.0 | 24,000 | Low ($) | Large greenhouses, flowering |
| **CMH/LEC** | 1.8-2.1 | 20,000 | Medium ($$) | Small-medium grows, full spectrum |
| **T5 Fluorescent** | 1.2-1.5 | 20,000 | Low ($) | Propagation, microgreens |
| **LED (older)** | 2.0-2.5 | 50,000 | High ($$$) | All applications |
| **LED (current)** | 2.5-3.0 | 50,000-100,000 | Medium-High ($$-$$$) | All applications, preferred |
| **LED (cutting edge)** | 3.0-3.5+ | 100,000+ | Very High ($$$$) | High-value crops, vertical |

### Efficacy Comparison Chart

```
╔══════════════════════════════════════════════════════════════════╗
║           PHOTON EFFICACY BY TECHNOLOGY (µmol/J)                 ║
╠══════════════════════════════════════════════════════════════════╣
║                                                                  ║
║  LED (2025)     ████████████████████████████████░ 3.2          ║
║  LED (2023)     ████████████████████████████░░░░░ 2.8          ║
║  LED (2020)     ██████████████████████████░░░░░░░ 2.5          ║
║  CMH            █████████████████████░░░░░░░░░░░░ 2.0          ║
║  HPS            ████████████████████░░░░░░░░░░░░░ 1.9          ║
║  T5             ███████████████░░░░░░░░░░░░░░░░░░ 1.4          ║
║  Incandescent   ███░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 0.3          ║
║                                                                  ║
║  Higher efficacy = More light per watt = Lower energy cost      ║
║                                                                  ║
╚══════════════════════════════════════════════════════════════════╝
```

---

## 3.2 Energy Consumption Calculations

### Basic Lighting Power Formula

```
Power (W) = Number of Fixtures × Wattage per Fixture

Daily Energy = Power (kW) × Hours per Day

Annual Energy = Daily Energy × 365 days

Example:
  50 fixtures × 400W = 20,000W = 20 kW
  20 kW × 16 hrs/day = 320 kWh/day
  320 kWh/day × 365 = 116,800 kWh/year
```

### Target Light Levels by Crop

```
DAILY LIGHT INTEGRAL (DLI) REQUIREMENTS
═══════════════════════════════════════════════════════════════════

Crop Category          Target DLI        PPFD (16-hr day)
─────────────────────────────────────────────────────────────────
Low Light
  Lettuce, leafy greens   14-17 mol/m²/day   250-300 µmol/m²/s
  Herbs (shade-loving)    12-16 mol/m²/day   200-275 µmol/m²/s
  Microgreens            10-14 mol/m²/day   175-250 µmol/m²/s

Medium Light
  Herbs (sun-loving)      17-25 mol/m²/day   300-450 µmol/m²/s
  Strawberries           15-25 mol/m²/day   260-450 µmol/m²/s
  Peppers                20-30 mol/m²/day   350-520 µmol/m²/s

High Light
  Tomatoes               25-40 mol/m²/day   450-700 µmol/m²/s
  Cucumbers              20-30 mol/m²/day   350-520 µmol/m²/s
  Cannabis (veg)         25-40 mol/m²/day   450-700 µmol/m²/s
  Cannabis (flower)      40-60 mol/m²/day   700-1050 µmol/m²/s

Conversion: PPFD (µmol/m²/s) × Photoperiod (hrs) × 3.6 = DLI (mol/m²/day)
```

### Example: Sizing Lighting for Lettuce Production

```
SYSTEM SIZING CALCULATION
═══════════════════════════════════════════════════════════════════

Facility: 2,000 sq ft (186 m²) growing area
Crop: Lettuce
Target: 250 µmol/m²/s average PPFD
Photoperiod: 16 hours/day
Technology: LED at 2.8 µmol/J efficacy

Step 1: Calculate Total Photon Requirement
────────────────────────────────────────────────────────────
  Required flux = 250 µmol/m²/s × 186 m² = 46,500 µmol/s

Step 2: Calculate Required Electrical Power
────────────────────────────────────────────────────────────
  Power = Photon flux ÷ Efficacy
  Power = 46,500 µmol/s ÷ 2.8 µmol/J = 16,607 W ≈ 16.6 kW

Step 3: Select Fixtures
────────────────────────────────────────────────────────────
  Option: 600W LED fixtures
  Number needed: 16,600W ÷ 600W = 27.7 → 28 fixtures

Step 4: Calculate Energy Consumption
────────────────────────────────────────────────────────────
  Daily: 16.6 kW × 16 hrs = 265.6 kWh/day
  Annual: 265.6 kWh/day × 365 = 96,944 kWh/year

Step 5: Calculate Energy Cost
────────────────────────────────────────────────────────────
  At $0.12/kWh: 96,944 kWh × $0.12 = $11,633/year
  Per sq ft: $11,633 ÷ 2,000 = $5.82/sq ft/year
```

---

## 3.3 LED Retrofit Analysis

### HPS to LED Conversion

**Scenario**: 10,000 sq ft greenhouse with supplemental lighting

```
CURRENT SYSTEM (HPS)
═══════════════════════════════════════════════════════════════════

Fixtures: 60 × 1000W HPS (actual draw: 1100W with ballast)
Installed power: 66 kW
Photoperiod: 16 hours/day (October - March, 180 days)

Annual Energy Consumption:
  66 kW × 16 hrs/day × 180 days = 190,080 kWh/year

Average PPFD achieved: 200 µmol/m²/s
Efficacy: 1.9 µmol/J

Energy Cost:
  Winter rate: $0.14/kWh
  Annual cost: 190,080 kWh × $0.14 = $26,611/year

Additional Costs:
  Cooling (20% of lighting): $5,322/year
  Lamp replacement (annual): $3,600/year (60 lamps × $60)
  Total annual operating cost: $35,533/year
```

```
PROPOSED SYSTEM (LED)
═══════════════════════════════════════════════════════════════════

Fixtures: 60 × 480W LED (to achieve same 200 µmol/m²/s)
Installed power: 28.8 kW
Efficacy: 2.9 µmol/J

Annual Energy Consumption:
  28.8 kW × 16 hrs/day × 180 days = 82,944 kWh/year

Energy Cost:
  82,944 kWh × $0.14 = $11,612/year

Additional Costs:
  Cooling (5% of lighting): $581/year (less heat)
  No lamp replacements needed (50,000+ hour lifespan)
  Total annual operating cost: $12,193/year
```

```
ROI ANALYSIS
═══════════════════════════════════════════════════════════════════

Annual Savings:
  Energy: $26,611 - $11,612 = $15,000/year
  Cooling: $5,322 - $581 = $4,741/year
  Maintenance: $3,600 - $0 = $3,600/year
  ──────────────────────────────────────────
  TOTAL SAVINGS: $23,341/year (66% reduction)

Implementation Cost:
  LED fixtures: 60 × $800 = $48,000
  Installation: $6,000
  Disposal (HPS): $1,000
  ──────────────────────────────────────────
  TOTAL COST: $55,000

Financial Metrics:
  Simple payback: $55,000 ÷ $23,341 = 2.4 years
  10-year savings: $233,410 - $55,000 = $178,410
  10-year NPV (5%): $125,246
  IRR: 42%

Additional Benefits:
  ✓ Longer lifespan (50,000 vs 24,000 hours)
  ✓ Better spectrum control
  ✓ Reduced heat load
  ✓ Dimming capability
  ✓ Lower maintenance
```

---

## 3.4 Lighting Control Strategies

### Timer Controls

**Basic Automation:**

```
DAILY LIGHTING SCHEDULE EXAMPLE
═══════════════════════════════════════════════════════════════════

Hour    Status      Power   Notes
────────────────────────────────────────────────────────────────
00:00   OFF         0 kW    Night period
04:00   OFF         0 kW
06:00   ON          25 kW   ← Lights on
08:00   ON          25 kW
10:00   ON          25 kW
12:00   ON          25 kW
14:00   ON          25 kW
16:00   ON          25 kW
18:00   ON          25 kW
20:00   ON          25 kW
22:00   OFF         0 kW    ← Lights off (16-hour day)
24:00   OFF         0 kW

Daily consumption: 25 kW × 16 hrs = 400 kWh/day

Energy Savings vs 24/7:
  24/7 operation: 25 kW × 24 hrs = 600 kWh/day
  Controlled: 25 kW × 16 hrs = 400 kWh/day
  Savings: 200 kWh/day = 33%
```

### Dimming Controls

**Adaptive Lighting:**

```
GREENHOUSE SUPPLEMENTAL LIGHTING WITH DIMMING
═══════════════════════════════════════════════════════════════════

Scenario: Natural light + supplemental LED
Target: Constant 300 µmol/m²/s at canopy

                Outside    Natural   LED      Total    Power
Time            Light      Light     Output   PPFD     (kW)
────────────────────────────────────────────────────────────────
Sunrise (6am)   Low        50        250      300      15.0
Morning (9am)   Rising     150       150      300       9.0
Midday (12pm)   High       300       0        300       0.0
Afternoon (3pm) Falling    200       100      300       6.0
Sunset (6pm)    Low        80        220      300      13.2
Evening (8pm)   None       0         300      300      18.0
────────────────────────────────────────────────────────────────

Without Dimming:
  Constant 18 kW × 14 hours = 252 kWh/day

With Dimming:
  Average 10.2 kW × 14 hours = 142.8 kWh/day

Daily Savings: 109.2 kWh (43%)
Annual Savings: 39,858 kWh
Cost Savings: $4,783/year (at $0.12/kWh)

Dimming System Cost: $6,000
Payback: 1.3 years
```

### Zoned Lighting

**Optimized by Crop Stage:**

```
MULTI-ZONE LIGHTING STRATEGY
═══════════════════════════════════════════════════════════════════

Zone          Area      Crop Stage    Target PPFD   Power
────────────────────────────────────────────────────────────────
Propagation   1,000 sf  Seedlings     150 µmol/m²/s  3.5 kW
Vegetative    2,000 sf  Young plants  250 µmol/m²/s  9.3 kW
Mature        3,000 sf  Harvest-ready 200 µmol/m²/s 11.2 kW
────────────────────────────────────────────────────────────────
TOTAL         6,000 sf                                24.0 kW

Single-Zone Alternative (all at 250 µmol/m²/s):
  6,000 sf × 250 µmol/m²/s = 35.8 kW required

Savings with Zoning:
  Power reduction: 35.8 - 24.0 = 11.8 kW (33%)
  Daily (16 hrs): 11.8 kW × 16 = 188.8 kWh
  Annual: 68,912 kWh
  Cost savings: $8,269/year

Zoning Implementation:
  Separate circuits: $3,500
  Payback: 0.4 years (5 months)
```

### Spectral Tuning

**Optimizing for Growth Stage:**

```
LED SPECTRAL RECIPE STRATEGIES
═══════════════════════════════════════════════════════════════════

Growth Stage        Blue%  Red%   Far-red%  White%  Notes
────────────────────────────────────────────────────────────────
Seedling/Clone      30%    50%    5%        15%     Compact growth
Vegetative          25%    60%    5%        10%     Leaf development
Pre-flower          20%    65%    10%       5%      Transition
Flowering           15%    70%    10%       5%      Maximum yield
Finishing           20%    60%    15%       5%      Quality

Energy Considerations:
• Blue LEDs: Slightly lower efficacy (~2.5 µmol/J)
• Red LEDs: Highest efficacy (~3.2 µmol/J)
• White LEDs: Medium efficacy (~2.8 µmol/J)
• Far-red: Lower efficacy (~2.3 µmol/J)

Optimal Recipe (efficiency + growth):
  60% red, 25% blue, 10% white, 5% far-red
  Average efficacy: 2.9 µmol/J
  10-15% more efficient than white-only (2.5 µmol/J)
```

---

## 3.5 Lighting System Design

### Uniform Coverage Calculations

**Fixture Spacing Formula:**

```
Mounting Height Ratio Method:

Spacing (ft) = Mounting Height (ft) × Spacing Ratio

LED Spacing Ratios:
  Tight spacing (high uniformity): 1.0-1.2
  Standard spacing: 1.3-1.5
  Wide spacing (lower uniformity): 1.6-2.0

Example:
  Mounting height: 8 feet above canopy
  Target: High uniformity
  Spacing ratio: 1.2
  Spacing = 8 ft × 1.2 = 9.6 ft

Grid Layout:
  For 10,000 sq ft area
  Fixtures per row: 100 ft ÷ 9.6 = 10.4 → 11 fixtures
  Number of rows: 100 ft ÷ 9.6 = 10.4 → 11 rows
  Total fixtures: 11 × 11 = 121 fixtures
```

**Uniformity Assessment:**

```
LIGHT UNIFORMITY METRICS
═══════════════════════════════════════════════════════════════════

Coefficient of Variation (CV):
  CV = (Standard Deviation ÷ Mean) × 100%

Uniformity Ratio:
  U = Minimum PPFD ÷ Average PPFD

Quality Standards:
  Excellent:  CV < 10%,  U > 0.90
  Good:       CV < 15%,  U > 0.80
  Acceptable: CV < 20%,  U > 0.70
  Poor:       CV > 20%,  U < 0.70

Example Measurement (9-point grid):

  Position    PPFD (µmol/m²/s)
  ────────────────────────────
  1 (corner)       220
  2 (edge)         245
  3 (corner)       225
  4 (edge)         250
  5 (center)       260
  6 (edge)         255
  7 (corner)       230
  8 (edge)         248
  9 (corner)       227
  ────────────────────────────
  Mean:            240
  Std Dev:         13.4
  Minimum:         220

  CV = (13.4 ÷ 240) × 100% = 5.6% → Excellent
  U = 220 ÷ 240 = 0.92 → Excellent
```

### Vertical Farming Light Design

**Multi-Tier Considerations:**

```
VERTICAL RACK LIGHTING DESIGN
═══════════════════════════════════════════════════════════════════

Rack Configuration:
  6 tiers × 4 ft wide × 8 ft long = 192 sq ft growing area
  Tier spacing: 18 inches vertical

Lighting per Tier:
  Target: 250 µmol/m²/s for lettuce
  Area: 32 sq ft (3 m²) per tier
  Required flux: 250 × 3 = 750 µmol/s per tier

LED Selection:
  120W LED bar, 2.8 µmol/J efficacy
  Output: 120W × 2.8 = 336 µmol/s per bar
  Bars needed: 750 ÷ 336 = 2.2 → 3 bars per tier

Power Calculation:
  Per tier: 3 bars × 120W = 360W
  Per rack (6 tiers): 360W × 6 = 2,160W = 2.16 kW

Energy for 10 Racks:
  Total power: 10 racks × 2.16 kW = 21.6 kW
  Daily (18 hrs): 21.6 kW × 18 hrs = 388.8 kWh
  Annual: 141,912 kWh
  Cost: $17,030/year (at $0.12/kWh)

Growing Area Served:
  10 racks × 192 sq ft = 1,920 sq ft
  Power density: 21.6 kW ÷ 1,920 sq ft = 11.25 W/sq ft
  Energy intensity: 141,912 kWh ÷ 1,920 = 73.9 kWh/sq ft/year
```

---

## 3.6 Advanced Efficiency Strategies

### Light Interception Optimization

**Canopy Management:**

```
LIGHT CAPTURE EFFICIENCY
═══════════════════════════════════════════════════════════════════

Leaf Area Index (LAI) Impact:

LAI    Light Interception   Production    Energy Efficiency
────────────────────────────────────────────────────────────────
1.0    50%                  Low           Poor (50% wasted)
2.0    75%                  Medium        Fair
3.0    90%                  High          Good (optimal)
4.0    95%                  High          Fair (diminishing returns)
5.0    97%                  Medium        Poor (too dense)

Recommendation: Maintain LAI of 3.0-3.5 for optimal efficiency

Energy Impact Example:
  Installed light: 25 kW providing 300 µmol/m²/s

  At LAI 2.0 (75% capture):
    Useful light: 225 µmol/m²/s
    Wasted: 75 µmol/m²/s (25% of energy)

  At LAI 3.0 (90% capture):
    Useful light: 270 µmol/m²/s
    Wasted: 30 µmol/m²/s (10% of energy)

  Improvement: 20% better light utilization
  Equivalent to reducing power by 5 kW while maintaining production
```

### Photoperiod Optimization

**DLI Targeting:**

```
INTELLIGENT PHOTOPERIOD STRATEGY
═══════════════════════════════════════════════════════════════════

Crop: Lettuce, target DLI = 16 mol/m²/day

Traditional Approach:
  PPFD: 250 µmol/m²/s
  Photoperiod: 16 hours
  DLI: 250 × 16 × 3.6 = 14.4 mol/m²/day (UNDER target)

Optimized Approach:
  PPFD: 275 µmol/m²/s
  Photoperiod: 16 hours
  DLI: 275 × 16 × 3.6 = 15.8 mol/m²/day (ON target)

Alternative Optimization (same DLI, less energy):
  PPFD: 320 µmol/m²/s
  Photoperiod: 14 hours
  DLI: 320 × 14 × 3.6 = 16.1 mol/m²/day

Energy Comparison (1,000 sq ft):
  16-hour option: 5.1 kW × 16 hrs = 81.6 kWh/day
  14-hour option: 5.9 kW × 14 hrs = 82.6 kWh/day (similar)

  But demand charge savings:
  Lower operating hours = potential for demand charge reduction
  Better alignment with cheap power periods (if TOU rates)
```

### Heat Recovery from Lighting

**Waste Heat Utilization:**

```
LED HEAT RECOVERY POTENTIAL
═══════════════════════════════════════════════════════════════════

LED System Efficiency:
  Electrical input: 100%
  Photosynthetic photons (PAR): 45-50%
  Heat: 50-55%

Example: 25 kW LED System
  PAR output: 25 kW × 47% = 11.75 kW (light)
  Heat output: 25 kW × 53% = 13.25 kW (heat)

Heat Recovery Options:

1. Passive Recovery (greenhouse winter):
   Heat stays in growing space
   Reduces heating requirement by 13.25 kW
   16 hours/day × 180 days = 2,880 hours
   Heat recovered: 38,160 kWh thermal
   Natural gas offset: 38,160 ÷ 29.3 kWh/therm = 1,302 therms
   Savings: 1,302 × $1.20 = $1,562/year

2. Active Recovery (need cooling):
   Water-cooled LED fixtures
   Heat exchanger to pre-heat water
   Efficiency: 70% recovery
   Heat captured: 13.25 kW × 0.70 = 9.3 kW thermal
   Annual: 26,712 kWh thermal
   Savings: $1,283/year
   System cost: $8,500
   Payback: 6.6 years
```

---

## 3.7 Maintenance for Efficiency

### Light Depreciation Management

**Understanding Lumen Maintenance:**

```
FIXTURE OUTPUT OVER TIME
═══════════════════════════════════════════════════════════════════

HPS Lumen Depreciation:
  Initial: 100%
  6 months: 90%
  12 months: 80%
  18 months: 70%
  24 months: 60% ← Replacement recommended

LED Lumen Maintenance (L90):
  Initial: 100%
  10,000 hrs: 98%
  25,000 hrs: 95%
  50,000 hrs: 90%
  75,000 hrs: 85%
  100,000 hrs: 80%

Energy Impact of Depreciation:

System: 60 HPS fixtures, 66 kW
Initial PPFD: 200 µmol/m²/s

After 1 year (80% output):
  Actual PPFD: 160 µmol/m²/s
  Shortfall: 40 µmol/m²/s (20%)

Options:
  a) Add fixtures: +13.2 kW → Energy increase
  b) Accept reduced production → Revenue loss
  c) Replace lamps → Maintenance cost

LED Alternative (90% at 50,000 hours):
  After 6 years of operation:
  Still at 180 µmol/m²/s (90%)
  Only 10% reduction over 6x longer period
```

### Cleaning Protocols

**Fixture Cleanliness:**

```
LIGHT LOSS DUE TO DIRT/DUST
═══════════════════════════════════════════════════════════════════

Accumulation Rate (typical greenhouse):
  1 month: 5% light loss
  3 months: 12% light loss
  6 months: 20% light loss
  12 months: 30% light loss

Energy Impact:
  25 kW system with 20% light loss
  Effective output: 80% of potential
  To maintain production: Increase power 25% → 31.25 kW
  Additional energy: 6.25 kW × 16 hrs × 365 = 36,500 kWh/year
  Additional cost: $4,380/year

Cleaning ROI:
  Professional cleaning: $1,200 (twice/year)
  Energy saved: ~$3,500/year
  Net benefit: $2,300/year
  Plus: Longer fixture life, better production

Recommended Schedule:
  High-dust environment: Monthly
  Moderate environment: Quarterly
  Clean environment: Semi-annually
```

---

## 3.8 Case Study: Complete Lighting Upgrade

### Facility Overview

**Urban Greens Vertical Farm**
- Size: 5,000 sq ft growing area (20 racks, 5 tiers each)
- Crop: Baby greens, microgreens
- Current: Older T5 fluorescent
- Goal: Maximize efficiency and production

### Current System Analysis

```
EXISTING T5 FLUORESCENT SYSTEM
═══════════════════════════════════════════════════════════════════

Configuration:
  100 fixtures × 4 lamps × 54W = 21,600W = 21.6 kW
  Efficacy: 1.3 µmol/J (with aging)
  Operating: 18 hours/day, year-round

Performance:
  Average PPFD: 180 µmol/m²/s (below target of 250)

Energy & Costs:
  Daily: 21.6 kW × 18 hrs = 388.8 kWh
  Annual: 141,912 kWh
  Cost: $17,030/year (at $0.12/kWh)

Maintenance:
  Lamp replacement: Every 18 months
  400 lamps × $8 = $3,200 × 0.67/year = $2,144/year
  Labor: $1,200/year
  Total maintenance: $3,344/year

Total Annual Cost: $20,374
Production: 50,000 lbs/year
Energy cost: $0.34/lb
```

### Proposed LED System

```
NEW LED SYSTEM
═══════════════════════════════════════════════════════════════════

Design:
  100 LED fixtures × 120W = 12,000W = 12 kW
  Efficacy: 2.9 µmol/J
  Dimming capability: 0-100%

Performance:
  PPFD capability: 290 µmol/m²/s (16% increase)
  Operating dimmed to 250 µmol/m²/s: 10.3 kW

Energy & Costs:
  Daily: 10.3 kW × 18 hrs = 185.4 kWh
  Annual: 67,671 kWh
  Cost: $8,121/year (at $0.12/kWh)

Maintenance:
  No lamp replacements (50,000+ hour lifespan)
  Minimal cleaning: $400/year
  Total maintenance: $400/year

Total Annual Cost: $8,521
Expected production (increased light): 58,000 lbs/year
Energy cost: $0.14/lb
```

### Financial Analysis

```
INVESTMENT SUMMARY
═══════════════════════════════════════════════════════════════════

Implementation Costs:
  LED fixtures: 100 × $600 = $60,000
  Installation: $8,000
  Dimming controls: $4,500
  Disposal (T5): $500
  ─────────────────────────────
  TOTAL: $73,000

Annual Savings:
  Energy: $17,030 - $8,121 = $8,909
  Maintenance: $3,344 - $400 = $2,944
  ─────────────────────────────
  Operating savings: $11,853/year

Additional Revenue:
  Increased production: 8,000 lbs × $3.50/lb = $28,000/year

Total Annual Benefit: $39,853/year

Financial Metrics:
  Simple payback: $73,000 ÷ $39,853 = 1.8 years
  10-year NPV (5% discount): $234,711
  IRR: 54%

Non-Financial Benefits:
  ✓ Improved product quality (better spectrum)
  ✓ Reduced heat load (easier climate control)
  ✓ Dimming flexibility (crop optimization)
  ✓ Longer lifespan (less disruption)
  ✓ Better uniformity (consistent growth)
```

---

## Key Takeaways

1. **LED technology has matured** - Now 50-70% more efficient than HPS
2. **Retrofit ROI is compelling** - Typical payback 2-5 years
3. **Controls add value** - Dimming and zoning can save 20-40% additional energy
4. **Design matters** - Proper spacing and mounting critical for efficiency
5. **Maintenance impacts efficiency** - Clean fixtures = maximum light output
6. **Heat is energy too** - Don't waste it; recover when possible
7. **Match light to need** - Different crops and stages have different requirements

---

## Practice Exercise

Design a lighting system for a 3,000 sq ft greenhouse growing tomatoes:
1. Determine target PPFD and DLI
2. Select appropriate technology
3. Calculate number of fixtures needed
4. Estimate annual energy consumption
5. Compare with alternative technology
6. Calculate payback period

---

**Next Module**: Module 4 - HVAC Efficiency

---

*Course 305: Energy Systems for CEA | Module 3 | EcoFusion Academy*
