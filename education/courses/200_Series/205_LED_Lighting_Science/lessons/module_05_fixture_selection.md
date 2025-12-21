# Module 5: Fixture Selection

**Course:** 205 - LED Lighting Science
**Duration:** 60 minutes
**Level:** Intermediate

## Introduction

Selecting the right LED fixtures is one of the most critical decisions in CEA facility design. With hundreds of products claiming superior performance, evaluating specifications, understanding form factors, and calculating true cost of ownership requires systematic analysis. This module provides a framework for comparing fixtures, avoiding marketing hype, and making evidence-based purchasing decisions.

## Learning Objectives

By the end of this module, you will be able to:

1. Interpret LED fixture specifications and identify critical performance metrics
2. Compare fixtures across different brands using normalized metrics
3. Calculate coverage area and fixture quantity requirements
4. Evaluate total cost of ownership including energy and replacement costs
5. Identify red flags and avoid low-quality fixtures
6. Select appropriate fixture form factors for different applications

## 1. Fixture Form Factors

LED fixtures come in various physical configurations, each suited to specific applications.

```
LED Fixture Types
=================

1. LINEAR/BAR FIXTURES
   ═══════════════════════
   ████████████████████████
   ═══════════════════════

   Use Cases:
   ✓ Vertical farming racks
   ✓ Long, narrow growing areas
   ✓ Microgreens/seedling benches
   ✓ Modular installations

   Advantages: Flexible arrangement, easy scaling
   Disadvantages: Multiple units needed, wiring complexity

2. PANEL/BOARD FIXTURES
   ┌────────────────────┐
   │ ○ ○ ○ ○ ○ ○ ○ ○ ○ │
   │ ○ ○ ○ ○ ○ ○ ○ ○ ○ │
   │ ○ ○ ○ ○ ○ ○ ○ ○ ○ │
   │ ○ ○ ○ ○ ○ ○ ○ ○ ○ │
   └────────────────────┘

   Use Cases:
   ✓ Indoor grow tents
   ✓ Small-scale commercial
   ✓ Cannabis cultivation
   ✓ Home growing

   Advantages: Easy installation, good coverage
   Disadvantages: Fixed size, limited scalability

3. HIGH-BAY FIXTURES
        ┌─┐
        │█│  ← Hanging point
        └┬┘
     ┌───┴───┐
     │ ○○○○○ │  ← Compact, high-power
     │ ○○○○○ │
     └───────┘

   Use Cases:
   ✓ Greenhouse supplemental
   ✓ High-ceiling facilities
   ✓ Large canopy coverage
   ✓ Tall crops

   Advantages: High PPFD output, large coverage
   Disadvantages: Expensive, less uniform at edges

4. STRIP/TAPE LIGHTS
   ━━━━━━━━━━━━━━━━━━━━
   ••••••••••••••••••••••

   Use Cases:
   ✓ Shelving underlighting
   ✓ Supplemental/accent
   ✓ Low-intensity applications
   ✓ DIY projects

   Advantages: Low cost, flexible installation
   Disadvantages: Lower PPFD, limited lifespan

5. VERTICAL FARMING MODULES
   ┌───────────────┐
   │ ■■■■■■■■■■■■■ │ ← Integrated fixture
   ├───────────────┤
   │ Growing Area  │
   ├───────────────┤
   │ ■■■■■■■■■■■■■ │
   └───────────────┘

   Use Cases:
   ✓ Commercial vertical farms
   ✓ Multi-tier production
   ✓ Standardized operations

   Advantages: Optimized for application, uniform
   Disadvantages: Proprietary, expensive
```

## 2. Critical Specifications

Understanding which specifications matter enables accurate fixture comparison.

```
Essential Fixture Specifications
=================================

OPTICAL PERFORMANCE
┌────────────────────────────────────────┐
│ PPF (μmol/s)                           │
│ - Total photon output                  │
│ - Most important metric                │
│ - Compare at same wattage              │
│                                        │
│ Efficacy (μmol/J)                      │
│ - PPF per watt = efficiency            │
│ - Target: >2.5 μmol/J minimum          │
│ - Best: >3.0 μmol/J                    │
│                                        │
│ PPFD Map                               │
│ - Distribution at specified height     │
│ - Check uniformity                     │
│ - Verify coverage area claims          │
│                                        │
│ Spectrum                               │
│ - Wavelength distribution chart        │
│ - Match to crop requirements           │
│ - Verify claims with spectroradiometer │
└────────────────────────────────────────┘

ELECTRICAL PERFORMANCE
┌────────────────────────────────────────┐
│ Input Power (Watts)                    │
│ - Actual consumption (not LED watts)   │
│ - Include driver losses                │
│                                        │
│ Input Voltage                          │
│ - 120V, 240V, 277V options             │
│ - Verify compatibility                 │
│                                        │
│ Power Factor                           │
│ - Target: >0.90                        │
│ - Affects utility costs                │
│                                        │
│ Dimming Capability                     │
│ - 0-10V, PWM, DALI protocols           │
│ - Dimming range (10-100% typical)      │
└────────────────────────────────────────┘

RELIABILITY & LONGEVITY
┌────────────────────────────────────────┐
│ Rated Lifespan                         │
│ - L70: Hours to 70% output             │
│ - L90: Hours to 90% output             │
│ - Target: >50,000 hours L70            │
│                                        │
│ Operating Temperature                  │
│ - Range: -20°C to +40°C typical        │
│ - Derating above threshold             │
│                                        │
│ IP Rating                              │
│ - IP65: Dust-tight, water resistant    │
│ - IP66: Dust-tight, powerful water jets│
│ - Higher for wet environments          │
│                                        │
│ Warranty                               │
│ - Minimum: 3 years                     │
│ - Premium: 5-7 years                   │
│ - Read terms carefully                 │
└────────────────────────────────────────┘

AVOID MISLEADING SPECS
┌────────────────────────────────────────┐
│ ✗ "LED Watts" (actual consumption only)│
│ ✗ Lumens (use PPF instead)             │
│ ✗ "Equivalent to X watts HPS"          │
│ ✗ Coverage area without PPFD context   │
│ ✗ Theoretical max values               │
│ ✗ Cherry-picked test conditions        │
└────────────────────────────────────────┘
```

### Specification Comparison Example

```
Fixture Comparison Matrix
=========================

Spec              Fixture A  Fixture B  Fixture C
────              ────────   ────────   ────────
Price             $450       $380       $520
PPF (μmol/s)      1200       1000       1400
Power (W)         400        420        450
Efficacy (μmol/J) 3.0        2.4        3.1
Spectrum          Full       R+B        Full+UV
Dimming           0-10V      None       DALI
Warranty          5 yr       3 yr       5 yr
IP Rating         IP65       IP54       IP66
Lifespan (L70)    60k hrs    40k hrs    70k hrs

ANALYSIS:

Fixture A:
✓ Excellent efficacy (3.0)
✓ Good warranty
✓ 0-10V dimming
✗ Mid-range PPF
Score: 8/10 - Best value

Fixture B:
✓ Lowest price
✗ Poor efficacy (2.4)
✗ Limited spectrum
✗ No dimming
✗ Short warranty
Score: 5/10 - Avoid

Fixture C:
✓ Highest PPF
✓ Best efficacy (3.1)
✓ UV for quality
✓ DALI control
✗ Highest price
Score: 9/10 - Premium choice

Cost Per Photon:
A: $450/1200 = $0.375 per μmol/s
B: $380/1000 = $0.380 per μmol/s
C: $520/1400 = $0.371 per μmol/s ← Best value
```

## 3. Coverage Area Calculations

Determining how many fixtures you need requires understanding coverage patterns and target PPFD.

```
Coverage Area Analysis
======================

FACTORS AFFECTING COVERAGE:
1. Mounting height
2. Beam angle
3. Target PPFD
4. Acceptable uniformity

Coverage Pattern (Single Fixture):

Mounting Height = 12"        Mounting Height = 24"
        ↓                            ↓
    ┌───┴───┐                    ┌───┴───┐
    │FIXTURE│                    │FIXTURE│
    └───────┘                    └───────┘
       ↓↓↓                         ↓↓↓↓↓↓↓
    ▓▓▓▓▓▓▓                    ▓▓▓▓▓▓▓▓▓▓▓▓▓
     ▓▓▓▓▓                    ▓▓▓▓▓▓▓▓▓▓▓▓▓
      ▓▓▓                       ▓▓▓▓▓▓▓▓▓
       ▓                          ▓▓▓▓▓
                                   ▓▓▓

Coverage: 2'×2'              Coverage: 4'×4'
Avg PPFD: 400 μmol/m²/s      Avg PPFD: 100 μmol/m²/s
Uniformity: 60%              Uniformity: 85%

Trade-off: Lower = Higher PPFD, Lower Uniformity
          Higher = Lower PPFD, Better Uniformity

FIXTURE QUANTITY CALCULATION

Method 1: Target Average PPFD
─────────────────────────────
Given:
- Growing area: 100 m²
- Target PPFD: 300 μmol/m²/s
- Fixture PPF: 1500 μmol/s
- Coverage efficiency: 80% (wall/floor losses)

Required PPF:
Total PPF = Area × Target PPFD / Efficiency
         = 100 m² × 300 μmol/m²/s / 0.80
         = 37,500 μmol/s

Number of Fixtures:
Fixtures = Total PPF / Fixture PPF
        = 37,500 / 1500
        = 25 fixtures

Method 2: Coverage Area per Fixture
────────────────────────────────────
Given:
- Fixture coverage: 4 m² at 300 μmol/m²/s avg
- Growing area: 100 m²
- Overlap factor: 1.2 (20% overlap for uniformity)

Number of Fixtures:
Fixtures = (Growing Area / Coverage) × Overlap
        = (100 / 4) × 1.2
        = 30 fixtures

Use the higher number for safety margin
```

### Spacing and Layout

```
Fixture Spacing Patterns
========================

SQUARE/GRID LAYOUT (Most Common)
┌─────┬─────┬─────┬─────┐
│  □  │  □  │  □  │  □  │  □ = Fixture
├─────┼─────┼─────┼─────┤  Spacing: Equal X & Y
│  □  │  □  │  □  │  □  │
├─────┼─────┼─────┼─────┤  Advantages:
│  □  │  □  │  □  │  □  │  ✓ Uniform coverage
├─────┼─────┼─────┼─────┤  ✓ Easy installation
│  □  │  □  │  □  │  □  │  ✓ Scalable
└─────┴─────┴─────┴─────┘

Spacing Formula:
S = √(Coverage Area)

Example: 4 m² coverage per fixture
S = √4 = 2 meters spacing

STAGGERED/OFFSET LAYOUT
┌─────┬─────┬─────┬─────┐
│  □  │     │  □  │     │  Better uniformity
├─────┼─────┼─────┼─────┤  at fixture edges
│     │  □  │     │  □  │
├─────┼─────┼─────┼─────┤  Advantages:
│  □  │     │  □  │     │  ✓ Improved uniformity
├─────┼─────┼─────┼─────┤  ✓ Reduced hot spots
│     │  □  │     │  □  │
└─────┴─────┴─────┴─────┘  Disadvantages:
                           ✗ More complex wiring

ROW LAYOUT (Linear Fixtures)
═════════════════════════════
═════════════════════════════  Parallel rows
═════════════════════════════
═════════════════════════════  Use for:
═════════════════════════════  - Bench production
                               - Vertical farm tiers
Row Spacing: 40-60cm typical   - Microgreens

PERIMETER LIGHTING
┌═══════════════════════════┐
║ □   □   □   □   □   □   □ ║  Edge fixtures
║ □                       □ ║  prevent falloff
║ □                       □ ║
║ □                       □ ║  Use when:
║ □   □   □   □   □   □   □ ║  - Wall absorption
└═══════════════════════════┘  - Maximize uniformity
```

## 4. Total Cost of Ownership

Initial purchase price is only one component of fixture costs over their operational life.

```
Total Cost of Ownership (TCO) Analysis
=======================================

COST COMPONENTS (5-year analysis)

1. CAPITAL COST
   ├─ Fixture purchase price
   ├─ Shipping
   ├─ Installation labor
   ├─ Mounting hardware
   └─ Controls/dimming (if separate)

2. ENERGY COST
   ├─ kWh consumption
   ├─ Utility rate
   ├─ Demand charges
   └─ Power factor penalties

3. MAINTENANCE COST
   ├─ Cleaning labor
   ├─ Replacement parts
   └─ Early failures

4. REPLACEMENT COST
   └─ End-of-life fixture replacement

TCO COMPARISON EXAMPLE
─────────────────────

Fixture A (Premium)   Fixture B (Budget)
─────────────────    ──────────────────
CAPITAL (Year 0)
Unit Price: $500        Unit Price: $350
Qty: 100               Qty: 100
Total: $50,000         Total: $35,000

ENERGY (Annual)
Power: 400W            Power: 420W
Hours: 5840/yr         Hours: 5840/yr
kWh: 2336              kWh: 2453
Cost: $280/fixture     Cost: $294/fixture
5-yr: $28,000          5-yr: $29,400

MAINTENANCE (5-yr)
Failure rate: 2%       Failure rate: 8%
Replacements: 2        Replacements: 8
Cost: $1,000           Cost: $2,800

REPLACEMENT (Year 5)
Expected: None         Expected: Some
Cost: $0               Cost: ~$3,500

───────────────────────────────────────
5-YEAR TCO
───────────────────────────────────────
Capital:    $50,000       $35,000
Energy:     $28,000       $29,400
Maintain:   $ 1,000       $ 2,800
Replace:    $     0       $ 3,500
───────────────────────────────────────
TOTAL:      $79,000       $70,700

Cost/year:  $15,800       $14,140

10-YEAR TCO
───────────────────────────────────────
Capital:    $50,000       $35,000
Energy:     $56,000       $58,800
Maintain:   $ 5,000       $12,000
Replace:    $10,000       $35,000
───────────────────────────────────────
TOTAL:      $121,000      $140,800 ← Budget loses

Annual:     $12,100       $14,080

KEY INSIGHT: Premium fixtures often have
lower TCO over long term due to efficiency
and reliability.
```

### Energy Cost Calculation

```
Calculating Annual Energy Costs
================================

FORMULA:
Annual Cost = (Power × Hours × Days × Rate) / 1000

Example Calculation:
Fixture: 400W
Photoperiod: 16 hours/day
Operating days: 365 days/year
Electricity rate: $0.12/kWh

Step 1: Annual kWh
kWh = (400W × 16 hr × 365 days) / 1000
    = 2,336 kWh/year

Step 2: Annual Cost
Cost = 2,336 kWh × $0.12/kWh
     = $280.32 per fixture per year

Step 3: Facility Total (100 fixtures)
Total = $280.32 × 100
      = $28,032 per year

ENERGY SAVINGS WITH HIGHER EFFICACY

Scenario: Replace 2.4 μmol/J with 3.0 μmol/J

Same PPF Output: 1200 μmol/s

Old Fixture:
Power = 1200 / 2.4 = 500W
Annual: 500 × 16 × 365 / 1000 = 2,920 kWh
Cost: 2,920 × $0.12 = $350/year

New Fixture:
Power = 1200 / 3.0 = 400W
Annual: 400 × 16 × 365 / 1000 = 2,336 kWh
Cost: 2,336 × $0.12 = $280/year

Annual Savings: $70 per fixture
100 fixtures: $7,000/year savings
5 years: $35,000 savings

Payback Analysis:
Price premium: $500 - $350 = $150
Payback: $150 / $70 = 2.14 years
```

## 5. Quality Indicators and Red Flags

Not all LED fixtures are created equal. Knowing what to look for protects your investment.

```
Quality Indicators
==================

GREEN FLAGS (Good Signs)
┌────────────────────────────────────────┐
│ ✓ Detailed PPFD map provided           │
│ ✓ PPF and efficacy clearly stated      │
│ ✓ Spectroradiometer test report        │
│ ✓ Third-party certification (DLC, ETL) │
│ ✓ Thermal testing data                 │
│ ✓ Named LED chip manufacturer          │
│ ✓ Driver brand specified (Meanwell,    │
│   Inventronics, etc.)                  │
│ ✓ >3 year warranty with clear terms    │
│ ✓ Established company history          │
│ ✓ Transparent technical support        │
│ ✓ Published case studies/growers       │
└────────────────────────────────────────┘

RED FLAGS (Warning Signs)
┌────────────────────────────────────────┐
│ ✗ Only lumens specified (no PPF)       │
│ ✗ "Equivalent to XXX watts HPS" claims │
│ ✗ No PPFD map or vague coverage claims │
│ ✗ Unrealistic efficacy (>4.0 μmol/J)   │
│ ✗ Unknown LED chip source              │
│ ✗ Generic "high quality" drivers       │
│ ✗ Very short warranty (<2 years)       │
│ ✗ Unrealistic lifespan claims (>100k)  │
│ ✗ No technical support contact         │
│ ✗ Pressure sales tactics               │
│ ✗ Too-good-to-be-true pricing          │
│ ✗ No established grower testimonials   │
└────────────────────────────────────────┘

VERIFICATION STEPS
┌────────────────────────────────────────┐
│ 1. Request independent test reports    │
│ 2. Check for DLC/ETL listing           │
│ 3. Ask for customer references         │
│ 4. Verify warranty terms in writing    │
│ 5. Request sample for testing          │
│ 6. Measure actual PPFD before bulk buy │
│ 7. Research company reputation          │
│ 8. Compare specs to established brands │
└────────────────────────────────────────┘
```

## 6. Fixture Selection Decision Framework

```
Systematic Fixture Selection Process
=====================================

STEP 1: DEFINE REQUIREMENTS
┌────────────────────────────────────────┐
│ □ Crop type(s)                         │
│ □ Target DLI                           │
│ □ Growing area size                    │
│ □ Mounting height available            │
│ □ Environmental conditions (temp, RH)  │
│ □ Budget (capital + operating)         │
│ □ Control requirements (dimming, etc.) │
│ □ Expandability needs                  │
└────────────────────────────────────────┘

STEP 2: CALCULATE REQUIREMENTS
┌────────────────────────────────────────┐
│ □ Total PPF needed (Area × PPFD / η)  │
│ □ Number of fixtures                   │
│ □ Mounting height and spacing          │
│ □ Electrical capacity required         │
└────────────────────────────────────────┘

STEP 3: SHORTLIST OPTIONS
┌────────────────────────────────────────┐
│ □ Match form factor to application     │
│ □ Efficacy >2.5 μmol/J minimum         │
│ □ Spectrum appropriate for crop        │
│ □ Within budget range                  │
│ □ Reputable manufacturer               │
└────────────────────────────────────────┘

STEP 4: DETAILED COMPARISON
┌────────────────────────────────────────┐
│ □ Create comparison matrix             │
│ □ Normalize metrics ($/μmol/s, etc.)   │
│ □ Calculate TCO (5-10 years)           │
│ □ Evaluate warranty and support        │
│ □ Check availability and lead time     │
└────────────────────────────────────────┘

STEP 5: VALIDATION
┌────────────────────────────────────────┐
│ □ Request sample fixture               │
│ □ Measure actual PPFD                  │
│ □ Verify spectrum with meter           │
│ □ Check build quality                  │
│ □ Test dimming functionality           │
│ □ Confirm compatibility                │
└────────────────────────────────────────┘

STEP 6: PURCHASE DECISION
┌────────────────────────────────────────┐
│ □ Negotiate pricing (bulk discount)    │
│ □ Confirm warranty terms in writing    │
│ □ Establish support contact            │
│ □ Plan installation timeline           │
│ □ Order spares (5-10% extra)           │
└────────────────────────────────────────┘
```

## Summary

Fixture selection requires balancing performance, cost, and reliability. By focusing on critical metrics (PPF, efficacy, spectrum), calculating total cost of ownership, and verifying manufacturer claims, you can make informed decisions that optimize your lighting investment.

**Key Takeaways**:

1. PPF and efficacy are the most important performance metrics
2. Form factor should match application (bars, panels, high-bay)
3. Calculate coverage area based on target PPFD and mounting height
4. Total cost of ownership often favors higher-quality fixtures
5. Verify manufacturer claims with independent testing
6. Look for green flags (transparency, testing data) and avoid red flags
7. Energy costs typically exceed capital costs over fixture life
8. Higher efficacy reduces both energy costs and cooling loads

**Decision Criteria Priority**:
1. Efficacy (μmol/J) - Long-term operational cost
2. PPF output - Matches application needs
3. Spectrum - Appropriate for crops
4. Build quality - Reliability and lifespan
5. Warranty - Protects investment
6. Price - TCO, not just purchase price

## Check Your Understanding

1. Why is PPF a better comparison metric than wattage?
2. Calculate fixtures needed: 200 m² area, 300 μmol/m²/s target, 1500 μmol/s per fixture, 80% efficiency
3. Fixture A: $400, 3.0 μmol/J. Fixture B: $300, 2.4 μmol/J. Which has better value for same PPF?
4. What are three red flags when evaluating a fixture manufacturer?
5. Why does TCO often favor premium fixtures over budget options?

**Answers**:
1. PPF measures actual photon output for plants, while wattage only indicates power consumption. Same wattage can produce vastly different PPF depending on efficiency.
2. Total PPF = (200 × 300) / 0.80 = 75,000 μmol/s. Fixtures = 75,000 / 1500 = 50 fixtures
3. Fixture A requires less power for same output: 1200 μmol/s = 400W vs 500W. Lower operating cost over life despite higher purchase price.
4. Any three: No PPF data, only lumens, "equivalent" claims, no PPFD map, unknown components, very short warranty, unrealistic claims, no customer references, pressure sales
5. Premium fixtures typically have higher efficacy (lower energy cost), better reliability (lower maintenance), longer lifespan (delayed replacement), resulting in lower total cost over 5-10 years

## Next Module Preview

In Module 6: Light Planning, you'll learn to design complete lighting systems from scratch. You'll create facility layouts, calculate electrical requirements, design mounting structures, plan controls and automation, and develop installation specifications. This module brings together all previous concepts into practical system design.

---

**Additional Resources**:
- Cheatsheet: Fixture specification comparison template
- Activity: Fixture selection exercise with real products
- Handout: TCO calculation worksheet
- Glossary: Fixture terminology

**Estimated Time**: 60 minutes
**Difficulty**: Intermediate
**Prerequisites**: Modules 1-4
