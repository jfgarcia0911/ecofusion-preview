# PPFD & DLI Quick Reference

**Course:** 205 - LED Lighting Science

## Quick Formulas

```
CALCULATING DLI FROM PPFD
=========================

DLI (mol/m²/d) = PPFD (μmol/m²/s) × Hours × 3.6 ÷ 1000

Example:
PPFD: 300 μmol/m²/s
Photoperiod: 16 hours
DLI = 300 × 16 × 3.6 ÷ 1000 = 17.28 mol/m²/d


CALCULATING PPFD FROM DLI
=========================

PPFD (μmol/m²/s) = DLI (mol/m²/d) × 1000 ÷ (Hours × 3.6)

Example:
Target DLI: 18 mol/m²/d
Photoperiod: 16 hours
PPFD = 18 × 1000 ÷ (16 × 3.6) = 313 μmol/m²/s
```

## PPFD to DLI Conversion Table

```
PHOTOPERIOD (Hours) → REQUIRED PPFD (μmol/m²/s) FOR TARGET DLI
═══════════════════════════════════════════════════════════════

TARGET     12hr    14hr    16hr    18hr    20hr    24hr
DLI        PPFD    PPFD    PPFD    PPFD    PPFD    PPFD
───────────────────────────────────────────────────────────
8          185     159     139     123     111      93
10         231     198     174     154     139     116
12         278     238     208     185     167     139
14         324     277     243     216     194     162
16         370     317     278     247     222     185
18         417     357     313     278     250     208
20         463     397     347     309     278     231
22         509     437     382     340     306     255
24         556     476     417     370     333     278
25         579     496     434     386     347     289
28         648     556     486     432     389     324
30         694     595     521     463     417     347
35         810     695     608     540     486     405
40         926     794     694     617     556     463
45        1041     893     781     694     625     521
50        1157     992     868     772     694     579
```

## DLI Requirements by Crop Type

```
LOW LIGHT CROPS (10-15 mol/m²/d)
═══════════════════════════════════════════════════════════
Crop                Min DLI    Optimal DLI    PPFD (16hr)
─────────────────────────────────────────────────────────
Butterhead Lettuce    10          12-14        208-243
Spinach               10          12-16        208-278
Arugula               10          12-15        208-260
Microgreens (most)    10          12-16        208-278
Kale                  12          14-18        243-313


MODERATE LIGHT CROPS (15-20 mol/m²/d)
═══════════════════════════════════════════════════════════
Romaine Lettuce       14          14-17        243-295
Leaf Lettuce          14          15-18        243-313
Basil                 15          16-20        278-347
Cilantro              14          14-18        243-313
Parsley               14          15-19        243-330
Pak Choi              14          14-17        243-295
Mint                  12          14-17        208-295


MODERATE-HIGH LIGHT CROPS (20-30 mol/m²/d)
═══════════════════════════════════════════════════════════
Tomato (vegetative)   18          20-25        347-434
Cucumber              20          22-30        382-521
Pepper (vegetative)   18          18-25        313-434
Strawberry            15          15-25        260-434
Eggplant              20          22-30        382-521


HIGH LIGHT CROPS (30-50 mol/m²/d)
═══════════════════════════════════════════════════════════
Tomato (fruiting)     25          25-35        434-608
Cannabis (vegetative) 22          25-35        382-608
Cannabis (flowering)  30          40-50        694-868*
Vine crops (fruit)    25          30-40        521-694

*12-hour photoperiod required for flowering
```

## DLI by Growth Stage

```
SEEDLING STAGE (Week 0-2)
─────────────────────────
Apply 50-70% of target DLI
- Prevents stretching
- Avoids light stress
- Builds photosynthetic capacity

Example: Tomato target = 25 mol/m²/d
Seedling DLI = 12-17 mol/m²/d


VEGETATIVE STAGE (Week 2-6)
────────────────────────────
Apply 70-100% of target DLI
- Builds canopy
- Maximizes growth rate
- Develops structure

Example: Tomato target = 25 mol/m²/d
Vegetative DLI = 18-25 mol/m²/d


REPRODUCTIVE STAGE (Week 6+)
─────────────────────────────
Apply 100-130% of target DLI
- Maximizes yield
- Supports fruit development
- May require CO₂ enrichment

Example: Tomato target = 25 mol/m²/d
Fruiting DLI = 25-32 mol/m²/d
```

## Environmental Adjustment Factors

```
MODIFY BASE DLI BASED ON CONDITIONS
═══════════════════════════════════════════════════════════

Condition                        Adjustment    Multiplier
──────────────────────────────   ──────────    ──────────
Optimal (22-25°C, 400ppm CO₂)    Baseline      1.0×
CO₂ enriched (800-1000 ppm)      Increase      1.2-1.3×
CO₂ enriched (1000-1200 ppm)     Increase      1.3-1.5×
Low temperature (<18°C)          Decrease      0.8-0.9×
High temperature (>30°C)         Decrease      0.7-0.9×
Water stress                     Decrease      0.6-0.8×
Nutrient stress                  Decrease      0.7-0.9×
Young seedlings                  Decrease      0.5-0.7×
Recent transplant                Decrease      0.7-0.8×
Disease/pest pressure            Decrease      0.7-0.9×
High VPD (>1.5 kPa)             Decrease      0.8-0.9×
Low VPD (<0.4 kPa)              Decrease      0.9×

EXAMPLE:
Tomato baseline: 25 mol/m²/d
With CO₂ at 1000 ppm: 25 × 1.3 = 32.5 mol/m²/d
With low temp (16°C): 25 × 0.85 = 21.25 mol/m²/d
```

## Light Saturation Points

```
MAXIMUM USEFUL PPFD BY CROP
═══════════════════════════════════════════════════════════

Crop Category          Saturation PPFD    Above This Point
────────────────────   ───────────────    ────────────────
Leafy Greens           300-400            Diminishing returns
Spinach                300-450            Risk photoinhibition
Basil/Herbs            400-500            Wasted energy
Cucumber               700-900            Needs CO₂ enrichment
Tomato                 800-1000           Needs CO₂ enrichment
Pepper                 600-800            Needs CO₂ enrichment
Strawberry             600-800            Diminishing returns
Cannabis               1200-1500          Needs CO₂ + cooling

Note: Saturation points increase 20-40% with CO₂ enrichment
```

## Photoperiod Selection Guide

```
CHOOSING OPTIMAL PHOTOPERIOD
═══════════════════════════════════════════════════════════

Crop Type              Photoperiod    Rationale
───────────────────    ───────────    ──────────────────────
Short-Day Plants       12 hours       Required for flowering
(Cannabis, Poinsettia)                (photoperiodic response)

Long-Day Plants        14-16 hours    Prevent bolting, but
(Lettuce, Spinach)                    provide adequate DLI

Day-Neutral Plants     14-18 hours    Optimize for DLI target
(Tomato, Cucumber)                    and energy efficiency

Microgreens            16-20 hours    Rapid growth phase,
                                      maximize DLI delivery

Seedlings              14-16 hours    Prevent stretching,
                                      moderate DLI


ENERGY OPTIMIZATION STRATEGY
═══════════════════════════════════════════════════════════

Target DLI: 20 mol/m²/d

Photoperiod    PPFD Required    Fixture Power    Daily kWh
───────────    ─────────────    ─────────────    ─────────
12 hours       463 μmol/m²/s    200W             2.4 kWh
14 hours       397 μmol/m²/s    180W             2.5 kWh
16 hours       347 μmol/m²/s    160W             2.6 kWh
18 hours       309 μmol/m²/s    140W             2.5 kWh
20 hours       278 μmol/m²/s    125W             2.5 kWh

Key Insight: Longer photoperiods need lower PPFD (cheaper fixtures)
            but similar daily energy consumption for same DLI
```

## PPFD Uniformity Guidelines

```
MEASURING AND EVALUATING UNIFORMITY
═══════════════════════════════════════════════════════════

Uniformity Calculation:
Uniformity (%) = (Minimum PPFD ÷ Maximum PPFD) × 100

Performance Ratings:
>90%         Excellent    Professional production
80-90%       Good         Commercial acceptable
70-80%       Fair         Some growth variation
<70%         Poor         Significant issues


EXAMPLE PPFD MAP (4' × 8' area)
        0'    2'    4'    6'    8'
    0' ├─────┼─────┼─────┼─────┤
       │ 180 │ 240 │ 270 │ 240 │ 180
    2' ├─────┼─────┼─────┼─────┤
       │ 240 │ 350 │ 390 │ 350 │ 240
    4' ├─────┼─────┼─────┼─────┤
       │ 180 │ 240 │ 270 │ 240 │ 180

    Analysis:
    Min: 180 μmol/m²/s
    Max: 390 μmol/m²/s
    Average: 265 μmol/m²/s
    Uniformity: 180/390 = 46% (POOR - needs improvement)


SOLUTIONS FOR POOR UNIFORMITY:
□ Increase mounting height (reduces peaks, improves edges)
□ Add perimeter fixtures (addresses edge falloff)
□ Overlap fixture coverage (20-30% overlap)
□ Use diffuser lenses (spreads light more evenly)
□ Adjust fixture spacing (closer = better uniformity)
```

## Common PPFD/DLI Problems

```
TROUBLESHOOTING GUIDE
═══════════════════════════════════════════════════════════

SYMPTOM: Slow growth, pale leaves
PPFD/DLI Issue: Too low
Solution:
  □ Increase PPFD by 20-30%
  □ Or extend photoperiod by 2-3 hours
  □ Verify fixtures operating at full power
  □ Check for LED degradation


SYMPTOM: Stretching, leggy plants, long internodes
PPFD/DLI Issue: Insufficient light (or spectrum issue)
Solution:
  □ Increase DLI by 30-40%
  □ Lower mounting height
  □ Check spectrum (may need more blue)


SYMPTOM: Leaf bleaching, tips burning, photoinhibition
PPFD/DLI Issue: Too high
Solution:
  □ Reduce PPFD by 20-30%
  □ Increase mounting height
  □ Reduce photoperiod
  □ Check environmental stress (temp, water)


SYMPTOM: Uneven growth across bench/room
PPFD/DLI Issue: Poor uniformity
Solution:
  □ Map PPFD distribution
  □ Adjust fixture spacing
  □ Add perimeter lighting
  □ Increase mounting height


SYMPTOM: High energy costs
PPFD/DLI Issue: Inefficient photoperiod strategy
Solution:
  □ Optimize photoperiod for crop
  □ Use higher efficacy fixtures
  □ Ensure fixtures not over-delivering DLI
  □ Implement dimming/scheduling
```

## Quick Reference: Common Calculations

```
FIXTURE REQUIREMENTS
═══════════════════════════════════════════════════════════

Growing Area: 100 m²
Target PPFD: 300 μmol/m²/s
Fixture PPF: 1500 μmol/s
Efficiency: 80% (accounting for losses)

Total PPF Needed = Area × PPFD ÷ Efficiency
                 = 100 × 300 ÷ 0.80
                 = 37,500 μmol/s

Fixtures Required = Total PPF ÷ Fixture PPF
                  = 37,500 ÷ 1500
                  = 25 fixtures


ANNUAL ENERGY COST
═══════════════════════════════════════════════════════════

Fixture Power: 400W
Photoperiod: 16 hours/day
Operating Days: 365 days/year
Electricity Rate: $0.12/kWh

Annual kWh = (Power × Hours × Days) ÷ 1000
           = (400 × 16 × 365) ÷ 1000
           = 2,336 kWh/year

Annual Cost = kWh × Rate
            = 2,336 × $0.12
            = $280.32 per fixture

100 fixtures = $28,032 per year
```

## Measurement Best Practices

```
PPFD MEASUREMENT PROTOCOL
═══════════════════════════════════════════════════════════

Equipment Needed:
□ Quantum sensor (PAR meter)
□ Grid map template
□ Data recording sheet
□ Measuring tape

Steps:
1. Create measurement grid
   - Small area (<10 m²): 9-point grid (3×3)
   - Medium area (10-50 m²): 16-25 points
   - Large area (>50 m²): 1 point per 5-10 m²

2. Sensor positioning
   - Level and parallel to light source
   - At canopy height (actual crop plane)
   - Block ambient/sunlight if present
   - Allow fixtures to warm up (15 min)

3. Recording data
   - Measure each grid point
   - Note fixture settings (dimming %)
   - Record mounting height
   - Document date/time

4. Calculate metrics
   - Average PPFD (mean of all points)
   - Minimum and maximum values
   - Uniformity ratio (min/max × 100)
   - Standard deviation (optional)

5. Calculate DLI
   - DLI = Average PPFD × Hours × 3.6 ÷ 1000
   - Compare to crop target
   - Adjust fixtures as needed
```

---

**Pro Tips:**
- Always measure PPFD at actual canopy height, not at floor level
- Re-map quarterly to detect LED degradation
- Keep baseline measurements for comparison
- Most crops tolerate ±10% DLI variation
- When in doubt, start low and increase gradually
- High DLI without adequate environment = wasted energy + stressed plants

**Remember:** DLI is the daily "dose" of light. Think of PPFD as rainfall intensity (mm/hour) and DLI as total rainfall (mm/day). You can achieve the same DLI with different PPFD/photoperiod combinations!
