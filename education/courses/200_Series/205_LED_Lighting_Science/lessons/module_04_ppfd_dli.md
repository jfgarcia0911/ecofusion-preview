# Module 4: PPFD and DLI

**Course:** 205 - LED Lighting Science
**Duration:** 60 minutes
**Level:** Intermediate

## Introduction

Determining the correct amount of light for your crops is fundamental to CEA success. Too little light limits photosynthesis and yield; too much wastes energy and can damage plants. Understanding PPFD (instantaneous light intensity) and DLI (daily light accumulation) enables you to calculate precise light requirements, design efficient photoperiod strategies, and maximize crop productivity.

This module provides comprehensive guidance on measuring, calculating, and applying PPFD and DLI across diverse crops and production systems.

## Learning Objectives

By the end of this module, you will be able to:

1. Calculate DLI from PPFD and photoperiod measurements
2. Determine optimal PPFD and DLI targets for common CEA crops
3. Design photoperiod strategies to achieve target DLI efficiently
4. Measure and map PPFD distribution across growing areas
5. Adjust light intensity and duration based on crop stage and environmental factors
6. Troubleshoot light-related growth issues using PPFD/DLI analysis

## 1. PPFD Fundamentals

PPFD (Photosynthetic Photon Flux Density) measures the number of PAR photons hitting a surface per unit time and area.

```
PPFD Visualization
==================

Light Source (LED Fixture)
         |
         | Photon flux
         ↓↓↓↓↓↓↓↓↓
    ━━━━━━━━━━━━━━━━  ← Measurement plane (canopy)
         PPFD
    (μmol/m²/s)

Units Breakdown:
- μmol: Micromoles of photons (6.022 × 10¹⁷ photons)
- m²: Per square meter of surface area
- s: Per second of time

Example: 300 μmol/m²/s means:
- 300 micromoles of PAR photons
- Hit each square meter
- Every second

Visual Analogy:
PPFD is like rainfall intensity (mm/hour)
- Measures how much light "falls" at any moment
- Varies with distance from source
- Changes with time of day (if dimming)
```

### PPFD Measurement Considerations

```
Factors Affecting PPFD Readings
================================

1. DISTANCE (Inverse Square Law)
   Fixture at 12": 400 μmol/m²/s
   Same fixture at 24": 100 μmol/m²/s
   Same fixture at 48": 25 μmol/m²/s

2. ANGLE (Cosine Law)
   Direct (0°): 100% reading
   30° angle: 87% of direct
   60° angle: 50% of direct
   90° angle: 0% (parallel)

3. FIXTURE OUTPUT
   - LED degradation over time
   - Temperature effects on output
   - Dimming level setting

4. ENVIRONMENTAL REFLECTANCE
   - White walls: +10-30% reflected light
   - Dark walls: Minimal reflection
   - Growing media: Minor reflection

Proper Measurement Technique:
┌─────────────────────────────────────┐
│ ✓ Sensor level and parallel to      │
│   light source                       │
│ ✓ Measure at actual canopy height   │
│ ✓ Multiple points across area       │
│ ✓ Block direct sunlight (if hybrid) │
│ ✓ Record all light sources          │
│ ✓ Calibrate sensor regularly        │
└─────────────────────────────────────┘
```

### PPFD Distribution Mapping

```
Creating a PPFD Map
===================

4' × 8' Growing Area - Single Fixture Centered

    0'   1'   2'   3'   4'   5'   6'   7'   8'
0' ├────┼────┼────┼────┼────┼────┼────┼────┤
   │ 180│ 210│ 240│ 260│ 270│ 260│ 240│ 210│
1' ├────┼────┼────┼────┼────┼────┼────┼────┤
   │ 210│ 260│ 300│ 330│ 340│ 330│ 300│ 260│
2' ├────┼────┼────┼────┼────┼────┼────┼────┤
   │ 240│ 300│ 350│ 380│ 390│ 380│ 350│ 300│
3' ├────┼────┼────┼────┼────┼────┼────┼────┤
   │ 260│ 330│ 380│ 420│ 430│ 420│ 380│ 330│
4' ├────┼────┼────┼────┼────┼────┼────┼────┤
   │ 240│ 300│ 350│ 380│ 390│ 380│ 350│ 300│
5' ├────┼────┼────┼────┼────┼────┼────┼────┤
   │ 210│ 260│ 300│ 330│ 340│ 330│ 300│ 260│
6' ├────┼────┼────┼────┼────┼────┼────┼────┤
   │ 180│ 210│ 240│ 260│ 270│ 260│ 240│ 210│

Analysis:
- Center: 430 μmol/m²/s (maximum)
- Edge: 180 μmol/m²/s (minimum)
- Average: 295 μmol/m²/s
- Uniformity: 180/430 = 42% (poor!)
- Target uniformity: >80%

Solution: Add perimeter fixtures or increase mounting height
```

### PPFD Uniformity Calculations

```
Uniformity Metrics
==================

METHOD 1: Min/Max Ratio
Uniformity = (Minimum PPFD / Maximum PPFD) × 100%

Example:
Min: 180 μmol/m²/s
Max: 430 μmol/m²/s
Uniformity: (180/430) × 100 = 42%

Rating Scale:
>90%: Excellent uniformity
80-90%: Good uniformity (acceptable)
70-80%: Fair (may see growth variation)
<70%: Poor (significant variation expected)

METHOD 2: Coefficient of Variation (CV)
CV = (Standard Deviation / Mean) × 100%

Lower CV = Better uniformity
Target: CV < 10%

Importance of Uniformity:
┌─────────────────────────────────────┐
│ Poor Uniformity Impacts:            │
│ ✗ Uneven plant growth               │
│ ✗ Variable harvest timing           │
│ ✗ Inconsistent quality              │
│ ✗ Wasted light (some areas too high)│
│ ✗ Reduced yield (some areas too low)│
└─────────────────────────────────────┘
```

## 2. DLI (Daily Light Integral)

DLI measures the total amount of PAR photons received over 24 hours - the cumulative light "dose."

```
DLI Concept Visualization
=========================

PPFD (instantaneous intensity)
    |        Photoperiod
    |     ┌──────────────┐
400 |     │   Constant   │
    |     │   PPFD       │
300 |     │              │
    |     │              │
200 |     │              │
    |     │              │
100 |     │              │
    |─────┴──────────────┴─────────────
    0     8     12    16    20    24 hr

DLI = Area under the curve
    = PPFD × photoperiod × 3.6 / 1000

Example:
- PPFD: 300 μmol/m²/s
- Photoperiod: 16 hours
- DLI = 300 × 16 × 3.6 / 1000 = 17.28 mol/m²/d

Visual Analogy:
PPFD = Rain intensity (mm/hour)
DLI = Total rainfall (mm/day)

You can achieve the same DLI with:
- Low PPFD, long photoperiod
- High PPFD, short photoperiod
```

### DLI Calculation

```
DLI Formula and Examples
========================

FORMULA:
DLI (mol/m²/d) = PPFD (μmol/m²/s) × Hours × 3.6 / 1000

Conversion factor explanation:
- 3.6 = 3600 seconds/hour ÷ 1000 μmol/mol
- Converts μmol/s to mol/hour

EXAMPLE 1: Lettuce Production
Given:
- PPFD: 200 μmol/m²/s
- Photoperiod: 18 hours
Calculate DLI:
DLI = 200 × 18 × 3.6 / 1000
    = 12.96 mol/m²/d

EXAMPLE 2: Tomato Production
Given:
- Target DLI: 25 mol/m²/d
- Photoperiod: 14 hours
Calculate required PPFD:
PPFD = (DLI × 1000) / (Hours × 3.6)
     = (25 × 1000) / (14 × 3.6)
     = 496 μmol/m²/s

EXAMPLE 3: Variable PPFD (Sunrise/Sunset Simulation)
Hour:    0-2   2-4   4-6   6-8   8-16  16-18 18-20 20-24
PPFD:     0    100   200   300   400   300   200    0

DLI = Σ(PPFD × duration × 3.6 / 1000)
    = 0×2 + 100×2 + 200×2 + 300×2 + 400×8 + 300×2 + 200×2
    = 0 + 0.72 + 1.44 + 2.16 + 11.52 + 2.16 + 1.44
    = 19.44 mol/m²/d
```

### DLI Relationship Chart

```
PPFD-to-DLI Quick Reference
===========================

Photo-  PPFD (μmol/m²/s) Required for Target DLI
period  ─────────────────────────────────────────
(hrs)   10    15    20    25    30    35  mol/m²/d

  12    231   347   463   579   694   810
  14    198   298   397   496   595   694
  16    174   260   347   434   521   608
  18    154   231   309   386   463   540
  20    139   208   278   347   417   486
  22    126   189   253   316   379   442
  24    116   174   231   289   347   405

How to use this table:
1. Determine target DLI for your crop
2. Select your photoperiod strategy
3. Find required average PPFD
4. Design fixture layout to achieve PPFD

Example: Lettuce, DLI target 15 mol/m²/d, 18-hour day
Required PPFD: 231 μmol/m²/s average
```

## 3. Crop-Specific DLI Requirements

Different crops have evolved under different light environments, resulting in varied DLI requirements for optimal growth.

```
DLI Requirements by Crop Category
==================================

LOW LIGHT CROPS (10-15 mol/m²/d)
├─ Lettuce (Butterhead)
├─ Spinach
├─ Kale
├─ Arugula
├─ Microgreens
└─ Many ornamental foliage plants

MODERATE LIGHT CROPS (15-20 mol/m²/d)
├─ Lettuce (Romaine, Leaf)
├─ Herbs (Basil, Cilantro, Parsley)
├─ Pak Choi
├─ Swiss Chard
└─ Ornamental bedding plants

MODERATE-HIGH LIGHT CROPS (20-30 mol/m²/d)
├─ Tomato
├─ Cucumber
├─ Pepper
├─ Strawberry
├─ Cannabis (vegetative)
└─ Cut flowers

HIGH LIGHT CROPS (30-40+ mol/m²/d)
├─ Cannabis (flowering)
├─ High-wire tomato (fruiting)
├─ Vine crops (peak production)
└─ Some tropical fruits

DLI Response Curves:
Growth
Rate         Optimal DLI Range
    |              ↓───↓
100%|          ************  ← Saturation
    |        **            *
 75%|      **
    |    **
 50%|  **         Light-limited
    | *
 25%|*
  0%|________________________________
    0   10   20   30   40   50  DLI (mol/m²/d)

    Low Light     High Light
       Crop          Crop
```

### Detailed Crop Requirements

```
Specific Crop DLI Targets
=========================

LEAFY GREENS
┌────────────────────────────────────────┐
│ Crop              Optimal DLI           │
│ ────────────      ───────────           │
│ Butterhead Lettuce  12-14 mol/m²/d     │
│ Romaine Lettuce     14-17 mol/m²/d     │
│ Red Leaf Lettuce    15-18 mol/m²/d     │
│ Spinach             12-16 mol/m²/d     │
│ Kale                14-18 mol/m²/d     │
│ Arugula             12-15 mol/m²/d     │
│ Pak Choi            14-17 mol/m²/d     │
└────────────────────────────────────────┘

HERBS
┌────────────────────────────────────────┐
│ Basil               16-20 mol/m²/d     │
│ Cilantro            14-18 mol/m²/d     │
│ Parsley             15-19 mol/m²/d     │
│ Mint                14-17 mol/m²/d     │
│ Dill                16-20 mol/m²/d     │
│ Oregano             17-22 mol/m²/d     │
└────────────────────────────────────────┘

FRUITING CROPS
┌────────────────────────────────────────┐
│ Tomato (seedling)   12-15 mol/m²/d     │
│ Tomato (vegetative) 20-25 mol/m²/d     │
│ Tomato (fruiting)   25-35 mol/m²/d     │
│ Cucumber            22-30 mol/m²/d     │
│ Pepper              20-28 mol/m²/d     │
│ Strawberry          15-25 mol/m²/d     │
│ Eggplant            22-30 mol/m²/d     │
└────────────────────────────────────────┘

CANNABIS
┌────────────────────────────────────────┐
│ Seedling/Clone      12-16 mol/m²/d     │
│ Vegetative          25-35 mol/m²/d     │
│ Early Flower        30-40 mol/m²/d     │
│ Peak Flower         40-50 mol/m²/d     │
│ Late Flower         35-45 mol/m²/d     │
└────────────────────────────────────────┘

MICROGREENS
┌────────────────────────────────────────┐
│ Sunflower           10-14 mol/m²/d     │
│ Pea Shoots          12-16 mol/m²/d     │
│ Radish              14-18 mol/m²/d     │
│ Broccoli            12-16 mol/m²/d     │
│ Wheatgrass          10-14 mol/m²/d     │
└────────────────────────────────────────┘
```

## 4. Photoperiod Strategies

Photoperiod (day length) interacts with PPFD to determine DLI and influences photoperiodic responses (flowering, dormancy).

```
Photoperiod Classification
==========================

PHOTOPERIODIC RESPONSES:

Short-Day Plants (SDP)
- Flower when day length < critical (typically <12-13 hrs)
- Examples: Cannabis, Poinsettia, Chrysanthemum
- Strategy: Long days for vegetative, short days for flowering

Long-Day Plants (LDP)
- Flower when day length > critical (typically >12-14 hrs)
- Examples: Lettuce, Spinach, some herbs
- Strategy: Long days promote flowering (often undesirable)

Day-Neutral Plants (DNP)
- Flowering independent of day length
- Examples: Tomato, Cucumber, most fruiting crops
- Strategy: Optimize for DLI and energy efficiency

Photoperiod Selection Framework:
┌─────────────────────────────────────┐
│ Consider:                           │
│ 1. Photoperiodic response           │
│ 2. Target DLI                       │
│ 3. Energy costs                     │
│ 4. Equipment utilization            │
│ 5. Labor scheduling                 │
└─────────────────────────────────────┘
```

### Photoperiod Design Examples

```
Optimizing Photoperiod for Different Goals
==========================================

SCENARIO 1: Lettuce Production
Goal: DLI 15 mol/m²/d, prevent bolting

Option A: 18-hour photoperiod
- PPFD: 231 μmol/m²/s
- Pro: Lower fixture cost (lower intensity needed)
- Con: Long-day may trigger bolting in some varieties
- Con: Higher daily energy consumption

Option B: 16-hour photoperiod
- PPFD: 260 μmol/m²/s
- Pro: Reduced bolting risk
- Pro: Lower daily energy consumption
- Con: Higher fixture cost (higher intensity needed)

Recommendation: 16-hour photoperiod
Rationale: Balances energy, bolting risk

SCENARIO 2: Tomato Production
Goal: DLI 28 mol/m²/d, day-neutral crop

Option A: 14-hour photoperiod
- PPFD: 556 μmol/m²/s
- Pro: Standard greenhouse practice
- Pro: Matches natural photoperiod
- Energy: 556 × 14 = 7,784 μmol/m²

Option B: 18-hour photoperiod
- PPFD: 432 μmol/m²/s
- Pro: Lower PPFD needed (lower fixture cost)
- Con: Higher daily energy consumption
- Energy: 432 × 18 = 7,776 μmol/m²

Recommendation: 14-hour photoperiod
Rationale: Standard practice, lower energy

SCENARIO 3: Cannabis Flowering
Goal: DLI 40 mol/m²/d, short-day plant

Photoperiod: 12 hours (required for flowering)
- PPFD: 926 μmol/m²/s
- No flexibility on duration
- Must achieve high PPFD
- Consider CO₂ supplementation at this intensity
```

### Energy Optimization

```
Photoperiod and Energy Costs
=============================

Same DLI, Different Strategies:
Target: 20 mol/m²/d

Strategy    Hours  PPFD      Fixture   Daily      Annual
                   (μmol/m²/s) Power   Energy     Cost*

Shortest    12     463       200W      2.4 kWh    $105
Short       14     397       180W      2.5 kWh    $110
Moderate    16     347       160W      2.6 kWh    $113
Long        18     309       140W      2.5 kWh    $110
Longest     20     278       125W      2.5 kWh    $110

*At $0.12/kWh

Key Insights:
┌─────────────────────────────────────┐
│ 1. Shorter photoperiods need higher │
│    PPFD (more fixture cost)         │
│                                     │
│ 2. Longer photoperiods need lower   │
│    PPFD (less fixture cost)         │
│                                     │
│ 3. Daily energy cost relatively     │
│    constant for same DLI            │
│                                     │
│ 4. Choose based on crop needs       │
│    and capital availability         │
└─────────────────────────────────────┘

Demand Charge Consideration:
- Shorter photoperiod = Higher peak demand
- May increase demand charges
- Consider off-peak scheduling
```

## 5. Environmental Factors Affecting DLI

Light requirements vary with temperature, CO₂, humidity, and plant stress.

```
Environmental Interactions
==========================

TEMPERATURE EFFECTS:

Lower Temperature → Reduce DLI
┌─────────────────────────────────────┐
│ At 15°C: Reduce DLI by 15-20%       │
│ - Slower metabolism                 │
│ - Reduced photosynthetic capacity   │
│ - Risk of photoinhibition           │
└─────────────────────────────────────┘

Higher Temperature → May increase DLI capacity
┌─────────────────────────────────────┐
│ At 28°C (vs 22°C):                  │
│ - Faster metabolism                 │
│ - Higher light saturation point     │
│ - Requires adequate VPD/cooling     │
└─────────────────────────────────────┘

CO₂ ENRICHMENT:

Ambient CO₂ (400 ppm): Standard DLI targets

Enriched CO₂ (800-1200 ppm): Increase DLI 20-40%
┌─────────────────────────────────────┐
│ Example: Tomato                     │
│ Ambient CO₂: 25 mol/m²/d optimal    │
│ 1000 ppm CO₂: 30-35 mol/m²/d optimal│
│                                     │
│ Higher CO₂ raises light saturation  │
│ point, enabling more efficient use  │
│ of higher PPFD                      │
└─────────────────────────────────────┘

Light-CO₂ Response Surface:
CO₂
(ppm)
1200|                    ********* ← High yield plateau
    |              ******
 800|        ******
    |  ******
 400|**
    |_________________________________
    10    20    30    40    50  DLI (mol/m²/d)

WATER STRESS:
- Drought stress → Reduce DLI 20-30%
- Stomatal closure limits CO₂ uptake
- High light + water stress = leaf damage
```

### DLI Adjustment Guidelines

```
Adjusting DLI for Conditions
=============================

BASELINE DLI (Optimal Conditions)
↓
ADJUST FOR ENVIRONMENTAL FACTORS

┌──────────────────────────────────────┐
│ REDUCE DLI when:                     │
│ ─────────────────                    │
│ □ Temperature <18°C or >30°C         │
│ □ Low CO₂ (<300 ppm)                 │
│ □ High VPD (>1.5 kPa)                │
│ □ Water/nutrient stress              │
│ □ Disease/pest pressure              │
│ □ Young seedlings (50-70% of target) │
│ □ Recently transplanted              │
│                                      │
│ INCREASE DLI when:                   │
│ ───────────────────                  │
│ □ CO₂ enrichment (800-1200 ppm)      │
│ □ Optimal temperature (22-25°C)      │
│ □ Healthy, mature plants             │
│ □ Peak production phase              │
│ □ High nutritional demand crops      │
└──────────────────────────────────────┘

Adjustment Multipliers:
Condition              Multiplier
---------              ----------
Young seedling         0.5-0.7×
Recent transplant      0.7-0.8×
Optimal conditions     1.0×
CO₂ 800-1000 ppm       1.2-1.3×
CO₂ 1000-1200 ppm      1.3-1.5×
Heat stress            0.7-0.9×
Water stress           0.6-0.8×

Example:
Tomato baseline: 25 mol/m²/d
With 1000 ppm CO₂: 25 × 1.3 = 32.5 mol/m²/d
```

## 6. Measuring and Monitoring

Establishing a regular measurement protocol ensures consistent light delivery and early problem detection.

```
Light Measurement Protocol
==========================

INITIAL SETUP (One-time)
┌─────────────────────────────────────┐
│ 1. Create PPFD map (grid pattern)   │
│ 2. Calculate average PPFD           │
│ 3. Assess uniformity                │
│ 4. Calculate delivered DLI          │
│ 5. Document fixture settings        │
│ 6. Establish baseline               │
└─────────────────────────────────────┘

ROUTINE MONITORING (Monthly)
┌─────────────────────────────────────┐
│ 1. Measure PPFD at 5-10 key points  │
│ 2. Compare to baseline              │
│ 3. Check for degradation (>5% drop) │
│ 4. Clean fixtures if needed         │
│ 5. Adjust dimming if required       │
│ 6. Update records                   │
└─────────────────────────────────────┘

COMPREHENSIVE AUDIT (Quarterly)
┌─────────────────────────────────────┐
│ 1. Full PPFD remapping              │
│ 2. Assess uniformity changes        │
│ 3. Evaluate energy consumption      │
│ 4. Check driver/dimming function    │
│ 5. Thermal inspection (IR camera)   │
│ 6. Plan maintenance/replacement     │
└─────────────────────────────────────┘

Measurement Grid Example:
    Small Area (4'×4'): 9 points (3×3 grid)
    Medium Area (8'×8'): 16-25 points
    Large Area (>100 ft²): 1 point per 10 ft²

┌────┬────┬────┬────┐
│ 1  │ 2  │ 3  │ 4  │  Record PPFD at each
├────┼────┼────┼────┤  numbered location
│ 5  │ 6  │ 7  │ 8  │
├────┼────┼────┼────┤  Calculate:
│ 9  │ 10 │ 11 │ 12 │  - Mean
├────┼────┼────┼────┤  - Min/Max
│ 13 │ 14 │ 15 │ 16 │  - Std Dev
└────┴────┴────┴────┘  - Uniformity
```

### Troubleshooting Light Issues

```
Diagnosing Problems with PPFD/DLI
==================================

SYMPTOM: Elongated, leggy growth
Possible Causes:
├─ DLI too low → Increase PPFD or photoperiod
├─ R:B ratio too high → Add blue light
├─ R:FR ratio too low → Reduce far-red
└─ Temperature too high → Check HVAC

SYMPTOM: Slow growth, pale leaves
Possible Causes:
├─ DLI too low → Increase light
├─ Poor uniformity → Plants in low zones
├─ Nutrient deficiency → Not light issue
└─ Root problems → Not light issue

SYMPTOM: Leaf burn, necrosis, bleaching
Possible Causes:
├─ DLI too high → Reduce PPFD or hours
├─ Heat stress → Check leaf temperature
├─ Poor acclimation → Gradual DLI increase
└─ Combined stress → Check environment

SYMPTOM: Uneven plant growth
Possible Causes:
├─ Poor PPFD uniformity → Remap, adjust fixtures
├─ Canopy shading → Crop management
└─ Non-uniform irrigation → Not light issue

SYMPTOM: Early flowering/bolting (lettuce)
Possible Causes:
├─ Photoperiod too long → Reduce to 14-16 hrs
├─ DLI too high → May trigger stress response
├─ High temperature → Check HVAC
└─ Genetic/variety → Select bolt-resistant

Diagnostic Decision Tree:
                Plant Issue?
                     |
          ┌──────────┴──────────┐
      Morphology           Growth Rate
          |                     |
    ┌─────┴─────┐         ┌────┴────┐
  Leggy      Compact    Slow       Fast
    |           |         |          |
Check R:B   Check      Check      Check
R:FR        Blue %     DLI        Environment
```

## Summary

PPFD and DLI are foundational metrics for lighting management in CEA. PPFD measures instantaneous light intensity, while DLI quantifies daily light accumulation. Understanding crop-specific requirements, photoperiod strategies, and environmental interactions enables precise light delivery for optimal growth and resource efficiency.

**Key Takeaways**:

1. PPFD (μmol/m²/s) measures instantaneous light intensity at the canopy
2. DLI (mol/m²/d) measures cumulative daily light dose
3. DLI = PPFD × photoperiod (hours) × 3.6 / 1000
4. Different crops require different DLI ranges (10-50 mol/m²/d)
5. Same DLI can be achieved with various PPFD/photoperiod combinations
6. Environmental factors (temperature, CO₂) affect optimal DLI
7. Uniformity is critical - target >80% min/max ratio
8. Regular monitoring detects degradation and ensures consistent delivery

**Essential Formulas**:
- DLI = PPFD × Hours × 3.6 / 1000
- PPFD = (DLI × 1000) / (Hours × 3.6)
- Uniformity = (Min PPFD / Max PPFD) × 100%

## Check Your Understanding

1. Calculate DLI: PPFD = 350 μmol/m²/s, photoperiod = 16 hours
2. Calculate required PPFD: Target DLI = 18 mol/m²/d, photoperiod = 18 hours
3. A PPFD map shows minimum 220, maximum 380 μmol/m²/s. Calculate uniformity.
4. Why might you reduce DLI for a crop experiencing water stress?
5. What are two ways to increase DLI without changing fixtures?

**Answers**:
1. DLI = 350 × 16 × 3.6 / 1000 = 20.16 mol/m²/d
2. PPFD = (18 × 1000) / (18 × 3.6) = 278 μmol/m²/s
3. Uniformity = (220 / 380) × 100 = 57.9% (poor, needs improvement)
4. Water stress limits stomatal opening and CO₂ uptake, reducing photosynthetic capacity. High light without adequate CO₂ can cause photoinhibition and damage.
5. (a) Increase PPFD through dimming adjustment or lower mounting height; (b) Extend photoperiod duration (if crop appropriate)

## Next Module Preview

In Module 5: Fixture Selection, you'll learn to evaluate commercial LED fixtures, compare specifications, calculate coverage areas, determine fixture quantity and spacing, and make informed purchasing decisions. You'll develop practical skills in matching fixtures to your specific application needs and budget.

---

**Additional Resources**:
- Cheatsheet: DLI requirements by crop
- Cheatsheet: PPFD-to-DLI conversion table
- Activity: Light measurement and mapping exercise
- Glossary: PPFD and DLI terminology

**Estimated Time**: 60 minutes
**Difficulty**: Intermediate
**Prerequisites**: Module 1 - Light Fundamentals
