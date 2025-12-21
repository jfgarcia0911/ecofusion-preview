# Module 3: Light Spectrum

**Course:** 205 - LED Lighting Science
**Duration:** 60 minutes
**Level:** Intermediate

## Introduction

While light intensity (PPFD) determines the rate of photosynthesis, light spectrum (wavelength composition) controls plant morphology, biochemistry, and quality attributes. Understanding spectral effects enables you to manipulate plant architecture, accelerate flowering, enhance flavors, and optimize nutritional content through strategic wavelength selection.

This module explores the photobiological responses to different wavelengths, introduces the McCree curve and action spectra, and provides practical strategies for spectrum design in commercial CEA operations.

## Learning Objectives

By the end of this module, you will be able to:

1. Interpret the McCree curve and understand relative photosynthetic efficiency by wavelength
2. Explain how blue, green, red, and far-red light affect plant morphology
3. Design spectrum strategies for different crops and growth stages
4. Calculate and apply red:blue and red:far-red ratios for morphological control
5. Understand UV effects on secondary metabolite production
6. Evaluate commercial fixture spectra for specific applications

## 1. The McCree Curve

The McCree curve (1972) describes the relative quantum efficiency of photosynthesis across the PAR spectrum, establishing the foundation for understanding spectral efficacy.

```
McCree Curve - Relative Photosynthetic Efficiency
===================================================

Relative
Efficiency
(%)     Blue Peak        Green Valley    Red Peak
        ↓                ↓               ↓
100%|                                   ***
    |                                 **   **
 90%|                                *       *
    |   ***                         *         *
 80%|  *   **                      *
    | *      *                    *
 70%|*        *                  *
    |          *                *
 60%|           *              *
    |            **          **
 50%|              ***    ***
    |                 ****
 40%|
    |________________________________
    400   450   500   550   600   650   700 nm
    Blue        Green        Red

Key Observations:
1. Red light (600-700nm): Highest efficiency per photon
2. Blue light (400-500nm): High efficiency, secondary peak
3. Green light (500-600nm): Lower efficiency but still valuable
4. Peak efficiency: ~630nm and ~450nm

IMPORTANT: This measures photosynthetic EFFICIENCY (per photon),
not total photosynthetic RATE (which requires total photon flux).
```

### Interpreting the McCree Curve

| Wavelength Range | Relative Efficiency | Implications |
|------------------|---------------------|--------------|
| **Blue (400-500nm)** | 70-85% | Highly efficient, but also drives morphology |
| **Green (500-600nm)** | 50-70% | Less efficient but penetrates canopy well |
| **Red (600-700nm)** | 85-100% | Most efficient for photosynthesis |
| **Far-Red (700-800nm)** | 0-5% | Minimal photosynthesis, strong morphology effects |

```
Practical Application
=====================

Scenario: Designing spectrum for maximum photosynthetic efficiency

OPTION A: Blue + Red Only (Traditional)
Spectrum:  ****        ****
          Blue        Red
Efficiency: High per photon
Drawbacks: Unnatural color, potential canopy penetration issues

OPTION B: Full Spectrum (White + Red)
Spectrum:  ******************
          Blue Green Red
Efficiency: Slightly lower per photon
Benefits: Better canopy penetration, natural appearance, worker comfort

RECOMMENDATION: Full spectrum for most applications
- 3-5% efficiency loss is offset by practical benefits
- Worker productivity and plant inspection quality matter
```

## 2. Wavelength-Specific Effects

Different wavelengths trigger distinct photoreceptors and physiological responses beyond photosynthesis.

### Blue Light (400-500nm)

```
Blue Light Effects
==================

Primary Photoreceptor: Cryptochromes, Phototropins

VEGETATIVE RESPONSES:
┌─────────────────────────────────────┐
│ Increased Blue Light:               │
│ ✓ Compact, shorter internodes       │
│ ✓ Thicker leaves                    │
│ ✓ Darker green color (chlorophyll)  │
│ ✓ Stomatal opening                  │
│ ✓ Enhanced antioxidant production   │
│ ✓ Reduced stem elongation           │
└─────────────────────────────────────┘

Blue % Recommendations:
Seedlings:      20-30% (prevent stretching)
Vegetative:     15-25% (balanced growth)
Flowering:      10-20% (reduce if leggy)
Leafy Greens:   20-30% (compact heads)

Example Spectrum:
Intensity
    |   Blue    Green      Red
    |    ↓        ↓         ↓
100%|   ***    ******    ******
    |  *   *  *      *  *      *
 50%| *     **        **        *
    |*                           *
  0%|_____________________________
    400    500    600    700 nm
    25%    35%    40% (by photon count)
```

**Optimal Blue Levels**:
- Too Low (<10%): Excessive elongation, pale leaves, weak stems
- Optimal (15-25%): Compact growth, healthy morphology
- Too High (>35%): Stunted growth, reduced yield, dark leaves

### Green Light (500-600nm)

Once considered "useless" for plants, green light research has revealed important functions:

```
Green Light Functions
=====================

Primary Value: Canopy Penetration

Light Penetration Comparison:
         Top Canopy         Mid Canopy        Lower Canopy
              |                  |                  |
Red:     ████████          ████               █     (10% reaches bottom)
Blue:    ████████          ████              ██     (15% reaches bottom)
Green:   ████████          ██████           ████    (30% reaches bottom)

Benefits of Green Light:
┌─────────────────────────────────────┐
│ ✓ Penetrates deeper into canopy     │
│ ✓ Drives photosynthesis in          │
│   lower/shaded leaves                │
│ ✓ Modulates shade avoidance         │
│ ✓ Facilitates stomatal conductance  │
│ ✓ Natural appearance for workers    │
└─────────────────────────────────────┘

Recommended Green Content:
General: 20-40% of spectrum
Dense Canopy Crops: 30-50%
Leafy Greens: 20-30%

MISCONCEPTION: "Green light is reflected and wasted"
REALITY: ~80-90% of green light is absorbed by leaves
```

### Red Light (600-700nm)

The workhorse of photosynthesis, red light provides maximum quantum efficiency.

```
Red Light Effects
=================

Primary Photoreceptor: Phytochrome (Pr ↔ Pfr)

Intensity
    |              Red Peak
    |                 ↓
100%|                ***
    |              **   **
 50%|            **       **
    |          **           **
  0%|________**_____________**________
    600      640      680      720 nm
          660nm = Peak Absorption

RESPONSES TO RED LIGHT:
┌─────────────────────────────────────┐
│ ✓ Maximum photosynthetic efficiency │
│ ✓ Promotes flowering (long-day)     │
│ ✓ Leaf expansion                    │
│ ✓ Biomass accumulation              │
│ ✓ Lower cost per photon (LED)       │
└─────────────────────────────────────┘

Optimal Red Content:
Vegetative: 40-60% of spectrum
Flowering: 50-70% of spectrum
Maximum: 80% (becomes limiting without blue/green)

Red Wavelength Selection:
660nm (Deep Red): Maximum photosynthetic efficiency
630nm: Balanced photosynthesis + morphology
660nm + 730nm: Emerson enhancement effect
```

### Far-Red Light (700-800nm)

Far-red drives morphological responses through phytochrome regulation with minimal photosynthetic contribution.

```
Far-Red Light Effects
=====================

Primary Photoreceptor: Phytochrome (Pfr → Pr conversion)

Phytochrome Photoequilibrium:
        Red Light (660nm)
Pr (inactive) ⟷ Pfr (active)
        Far-Red Light (730nm)

MORPHOLOGICAL RESPONSES:
┌─────────────────────────────────────┐
│ Increased Far-Red:                  │
│ ↑ Stem elongation (shade avoidance) │
│ ↑ Leaf expansion                    │
│ ↑ Flowering (some species)          │
│ ↓ Branching                         │
│ ↓ Compactness                       │
└─────────────────────────────────────┘

Far-Red Applications:
1. End-of-Day Treatment (EOD-FR)
   └─ 15-30 min of far-red at end of photoperiod
   └─ Accelerates flowering in photoperiodic crops
   └─ Extends stem length for cut flowers

2. Continuous Low-Level FR
   └─ 5-10% of total spectrum
   └─ Emerson enhancement (improved efficiency)
   └─ Controlled stem elongation

3. High FR for Specific Crops
   └─ Cut flowers: Longer stems
   └─ Transplants: Faster establishment

Far-Red Dosage:
Low (R:FR 5-10): Subtle effects, efficiency boost
Medium (R:FR 2-4): Moderate elongation, flowering
High (R:FR <2): Strong elongation, shade simulation

WARNING: Excessive far-red causes weak, leggy plants
```

## 3. Light Ratios for Morphological Control

Spectral ratios provide a standardized way to predict and control plant morphology.

### Red:Blue Ratio (R:B)

```
Red:Blue Ratio Effects
======================

R:B Ratio = Red Photons (600-700nm) / Blue Photons (400-500nm)

Morphology Response:
        Compact                    Elongated
           ↓                          ↓
    |──────┼──────────────────────────┼──────|
    0.5    1      2      3      4     5      6
    ↑             ↑                    ↑
  Very            Balanced             Very
  Compact         Growth               Leggy

Recommended R:B Ratios by Crop:
┌──────────────────────────────────────────┐
│ Crop Type          R:B Ratio             │
│ ────────────       ────────              │
│ Microgreens        1.5-2.5               │
│ Leafy Greens       2.0-3.0               │
│ Herbs              2.5-4.0               │
│ Tomato (veg)       3.0-5.0               │
│ Tomato (fruit)     4.0-6.0               │
│ Cannabis (veg)     2.0-3.0               │
│ Cannabis (flower)  4.0-6.0               │
│ Cucumber           3.5-5.5               │
│ Strawberry         3.0-5.0               │
└──────────────────────────────────────────┘

Visual Comparison:
R:B = 1.5 (High Blue)        R:B = 5.0 (High Red)
    Plant                        Plant
      │                            │
      ├─┐ Short                    │ Tall
      │ │ internodes               ├─┐ internodes
      ├─┤                          │ │
      │ │ Thick                    │ │ Thin
      ├─┤ leaves                   ├─┤ leaves
    ──┴─┴──                      ──┴─┴──
    Compact                      Elongated
```

### Red:Far-Red Ratio (R:FR)

```
Red:Far-Red Ratio Effects
=========================

R:FR Ratio = Red Photons (600-700nm) / Far-Red Photons (700-800nm)

Shade Avoidance Response:
    High R:FR              Low R:FR
    (Sun)                  (Shade)
       ↓                      ↓
    |──┼──────────────────────┼──|
    8  6   4   2   1   0.5    0.2
       ↑                      ↑
    Compact               Elongated

Phytochrome Photostationary State (PSS):
High R:FR → High Pfr/Ptotal → Compact growth
Low R:FR → Low Pfr/Ptotal → Shade avoidance

Application Examples:
┌─────────────────────────────────────┐
│ COMPACT GROWTH (R:FR 5-10):         │
│ - Seedling production               │
│ - Leafy greens                      │
│ - Compact ornamentals               │
│                                     │
│ BALANCED GROWTH (R:FR 2-4):         │
│ - General vegetable production      │
│ - Cannabis vegetative phase         │
│ - Standard greenhouse supplemental  │
│                                     │
│ ELONGATION (R:FR 1-2):              │
│ - Cut flowers (stem length)         │
│ - Transplant conditioning           │
│ - Flowering induction               │
└─────────────────────────────────────┘

End-of-Day Far-Red Treatment:
Normal Photoperiod          EOD-FR
|████████████████|          |████████████████|▒▒|
0              16hr         0              16 16.5hr
                             ↑
                        15-30 min FR pulse
Effect: Mimics sunset, promotes flowering
```

## 4. UV Radiation Effects

UV radiation (280-400nm) is not part of PAR but has significant effects on plant quality and stress responses.

```
UV Spectrum and Effects
========================

Wavelength Range and Responses:
    UV-C        UV-B         UV-A
    <280nm      280-315nm    315-400nm
      |            |            |
   Harmful    Hormetic      Beneficial
   (Blocked)   Stress       Morphology

UV-B Effects (280-315nm):
┌─────────────────────────────────────┐
│ LOW DOSE (Beneficial):              │
│ ✓ Increased flavonoids              │
│ ✓ Enhanced anthocyanins (color)     │
│ ✓ Improved pest/disease resistance  │
│ ✓ Thicker cuticle (water retention) │
│ ✓ Compact growth                    │
│                                     │
│ HIGH DOSE (Damaging):               │
│ ✗ DNA damage                        │
│ ✗ Reduced photosynthesis            │
│ ✗ Leaf burn                         │
│ ✗ Stunted growth                    │
└─────────────────────────────────────┘

UV-A Effects (315-400nm):
┌─────────────────────────────────────┐
│ ✓ Anthocyanin production (coloring) │
│ ✓ Compact morphology                │
│ ✓ Enhanced terpene production       │
│ ✓ Improved stress tolerance         │
│ ✓ Minimal photodamage risk          │
└─────────────────────────────────────┘

UV Dosage Recommendations:
Leafy Greens: 0-1% UV-A (color enhancement)
Herbs: 1-3% UV-A (flavor/aroma compounds)
Cannabis: 2-5% UV-A, 0.5-1% UV-B (terpenes/cannabinoids)
Ornamentals: 1-3% UV-A (color intensity)

WARNING: Start low and increase gradually
Monitor plants for stress symptoms
```

## 5. Spectrum Design Strategies

Designing optimal spectra requires balancing photosynthetic efficiency, morphological control, and crop-specific requirements.

### Full-Spectrum Baseline

```
General-Purpose Full Spectrum
==============================

Wavelength Distribution:
Intensity
    |  B   G      R       FR
    |  ↓   ↓      ↓       ↓
100%| *** ****** ****** ***
    |*   *      *      **  *
 50%|                        *
    |                         *
  0%|___________________________
    400  500  600  700  800 nm

Component Breakdown:
- Blue (400-500nm): 20%
- Green (500-600nm): 30%
- Red (600-700nm): 45%
- Far-Red (700-800nm): 5%

Ratios:
- R:B = 2.25 (balanced)
- R:FR = 9.0 (moderate compactness)

Suitable For:
- General vegetable production
- Leafy greens (lettuce, kale)
- Herbs (basil, cilantro)
- Young plants/propagation
```

### Crop-Specific Spectra

```
Spectrum Customization Examples
================================

1. MICROGREENS (High Blue)
   ────────────────────────
   Intensity
       | ████  ████  ████
       |Blue  Green  Red
   Blue: 30%  Green: 25%  Red: 43%  FR: 2%
   R:B: 1.43  R:FR: 21.5
   Goal: Compact, dark green, thick leaves

2. TOMATO FLOWERING (High Red)
   ────────────────────────────
   Intensity
       | ██  ████  ████████  ██
       |Blue Grn    Red     FR
   Blue: 12%  Green: 23%  Red: 58%  FR: 7%
   R:B: 4.83  R:FR: 8.29
   Goal: Maximize fruit set, good yield

3. CANNABIS VEGETATIVE (Balanced)
   ────────────────────────────────
   Intensity
       | ████  ████  ████  ██
       |Blue  Green  Red   FR
   Blue: 25%  Green: 30%  Red: 42%  FR: 3%
   R:B: 1.68  R:FR: 14.0
   Goal: Compact nodes, vegetative growth

4. CANNABIS FLOWERING (High Red + UV)
   ───────────────────────────────────
   Intensity
       |█ ██  ████  ██████  ███
       |U B   Grn    Red    FR
   UV-A: 2%  Blue: 15%  Green: 23%  Red: 52%  FR: 8%
   R:B: 3.47  R:FR: 6.5
   Goal: Flowering, terpenes, cannabinoids

5. LETTUCE (Moderate Blue, High Green)
   ─────────────────────────────────────
   Intensity
       | ████  ██████  ████  █
       |Blue   Green   Red   FR
   Blue: 23%  Green: 35%  Red: 40%  FR: 2%
   R:B: 1.74  R:FR: 20.0
   Goal: Tender leaves, good flavor, compact
```

### Stage-Specific Spectra

```
Growth Stage Spectrum Progression
==================================

PROPAGATION (Weeks 0-2)
Spectrum: High Blue (25-30%)
R:B: 1.5-2.0
Goal: Prevent stretching, strong seedlings

         ↓ Transition

VEGETATIVE (Weeks 2-6)
Spectrum: Balanced (20% Blue)
R:B: 2.5-3.5
Goal: Healthy growth, canopy development

         ↓ Transition

FLOWERING/FRUITING (Weeks 6+)
Spectrum: High Red (50-60%)
R:B: 4.0-6.0
Goal: Reproductive development, yield

Example: Tomato Production
Week  Blue%  Red%  R:B   Stage
────  ─────  ────  ───   ─────
0-2   28     60    2.1   Germination
2-4   23     62    2.7   Early veg
4-6   20     64    3.2   Late veg
6-8   17     66    3.9   Pre-flower
8+    15     68    4.5   Flowering/fruit
```

## 6. Evaluating Commercial Spectra

Understanding how to read and interpret spectral distribution charts helps you select appropriate fixtures.

```
Reading Spectral Distribution Charts
=====================================

EXAMPLE 1: "Purple" LED (Red + Blue Only)
Relative
Intensity
100%|  ****                    ****
    | *    *                 **    **
 50%|*      *               *        *
    |        *            **          **
  0%|_________*__________*______________
    400      500      600      700  nm

Evaluation:
✓ High photosynthetic efficiency
✗ No green (poor canopy penetration)
✗ Unnatural appearance (purple glow)
✗ Difficult plant health assessment
Rating: 6/10 (Acceptable for vegetative, avoid fruiting)

EXAMPLE 2: 3000K White LED
Relative
Intensity
100%|    **
    |   *  *************
 50%|  *                  ******
    | *                         ****
  0%|*________________________________
    400      500      600      700  nm

Evaluation:
✓ Natural appearance
✓ Good green content (canopy penetration)
✗ Lower red content (less efficient)
✗ May need supplemental 660nm
Rating: 7/10 (Good general purpose)

EXAMPLE 3: Full-Spectrum (White + 660nm + 730nm)
Relative
Intensity
100%|    **            ****    **
    |   *  *********  *    *  *  *
 50%|  *             *      **    *
    | *                           *
  0%|*_________________________________
    400      500      600      700  800 nm

Evaluation:
✓ Complete PAR coverage
✓ Natural appearance
✓ Supplemental red (efficiency)
✓ Far-red (Emerson effect)
✓ Morphological control capability
Rating: 9/10 (Excellent for most crops)
```

### Spectrum Quality Checklist

```
Evaluating LED Fixture Spectrum
================================

□ PAR Coverage
  □ Minimal gaps in 400-700nm range
  □ Adequate blue (15-30%)
  □ Adequate red (40-60%)
  □ Green content (20-40%) for canopy penetration

□ Peak Wavelengths
  □ Blue peak 440-460nm (cryptochrome activation)
  □ Red peak 650-670nm (max photosynthesis)
  □ Far-red 720-740nm if included

□ Spectrum Balance
  □ R:B ratio appropriate for crop (check target)
  □ R:FR ratio suitable for morphology goals
  □ UV content if secondary metabolites important

□ Application Fit
  □ Matches crop requirements
  □ Suitable for growth stage
  □ Aligns with production goals (yield vs quality)

□ Practical Considerations
  □ Natural enough appearance for workers
  □ Enables visual plant health monitoring
  □ Compatible with imaging/sensors if used
```

## 7. Advanced Spectral Techniques

### Dynamic Spectrum Control

```
Time-Based Spectrum Modulation
================================

"Sunrise" to "Sunset" Spectrum Shift:

Hour 0 (Dawn):     High Blue, Low Red
  |               B: 30%  R: 55%  FR: 2%
  |
Hour 8 (Day):      Balanced Spectrum
  |               B: 20%  R: 60%  FR: 5%
  |
Hour 16 (Dusk):    Lower Blue, High Red+FR
  |               B: 12%  R: 62%  FR: 10%
  ↓
Dark Period

Benefits:
✓ Mimics natural light progression
✓ Optimizes circadian rhythm
✓ Enhanced plant quality
✓ Potential yield improvements (5-15%)

Implementation Requirements:
- Multi-channel LED fixtures
- Programmable controllers
- Crop-specific light recipes
```

### Pulsed Spectrum Strategy

```
Spectral Pulse Treatments
=========================

BASE SPECTRUM (16 hours):
Full spectrum (20B:30G:45R:5FR)

PLUS SHORT PULSES:
┌─────────────────────────────────────┐
│ UV-B Pulse (30 minutes, midday)     │
│ - Enhance flavonoids                │
│ - Increase anthocyanins             │
│ - Improve pest resistance           │
│                                     │
│ EOD Far-Red (15 minutes, end of day)│
│ - Accelerate flowering              │
│ - Extend internodes (if desired)    │
│ - Improve stem elongation           │
│                                     │
│ High Blue Pulse (1 hour, morning)   │
│ - Stomatal opening                  │
│ - Enhanced compact growth           │
│ - Antioxidant boost                 │
└─────────────────────────────────────┘

Example Timeline:
Hour:  0   2   4   6   8   10  12  14  16  18
       |───|───|───|───|───|───|───|───|   |
Base:  ████████████████████████████████
Blue:  ██
UV-B:                      █
EOD-FR:                                    ██
```

## Summary

Light spectrum is a powerful tool for controlling plant morphology, quality, and secondary metabolite production. By understanding wavelength-specific effects and applying spectral ratios (R:B, R:FR), you can design lighting strategies optimized for specific crops and production goals.

**Key Takeaways**:

1. The McCree curve shows red (600-700nm) and blue (400-500nm) are most efficient for photosynthesis
2. Blue light promotes compact growth; red promotes elongation and flowering
3. Green light penetrates canopy better than red or blue
4. Far-red triggers shade avoidance and can accelerate flowering
5. R:B ratio controls compactness (lower = compact, higher = elongated)
6. R:FR ratio affects phytochrome state and morphology
7. UV radiation enhances secondary metabolites but requires careful dosing
8. Full-spectrum (white + supplemental red/far-red) balances efficiency with practicality

**Spectrum Design Principles**:
- Start with full-spectrum baseline (20B:30G:45R:5FR)
- Adjust R:B ratio for morphology control
- Include green for canopy penetration
- Add far-red for specific morphology goals
- Consider UV for quality enhancement
- Match spectrum to crop and growth stage

## Check Your Understanding

1. Why does the McCree curve show green light as less efficient than red or blue?
2. A crop is growing too tall and leggy. Should you increase or decrease the R:B ratio?
3. Calculate R:B ratio: Blue = 180 μmol/m²/s, Red = 540 μmol/m²/s
4. What is the purpose of end-of-day far-red treatment?
5. How does green light contribute to photosynthesis in dense canopies?

**Answers**:
1. Green light photons are absorbed less efficiently by chlorophyll compared to red and blue photons, though green is still photosynthetically active and valuable for canopy penetration.
2. Decrease R:B ratio (increase blue content). More blue promotes compact, shorter growth.
3. R:B = 540 / 180 = 3.0 (moderate, balanced growth)
4. EOD far-red converts Pfr to Pr, mimicking sunset and accelerating flowering in photoperiodic crops while promoting controlled stem elongation.
5. Green light penetrates deeper into canopies than red or blue, driving photosynthesis in lower, shaded leaves that receive little red/blue light.

## Next Module Preview

In Module 4: PPFD and DLI, you'll learn to calculate target light levels for different crops, measure and map PPFD distribution, convert between PPFD and DLI, and design photoperiod strategies. You'll gain practical skills in determining the right amount of light for optimal growth and yield.

---

**Additional Resources**:
- Cheatsheet: Light spectrum quick reference chart
- Cheatsheet: R:B and R:FR ratio guide
- Activity: Spectrum analysis exercise
- Glossary: Spectral terminology

**Estimated Time**: 60 minutes
**Difficulty**: Intermediate
**Prerequisites**: Module 1 - Light Fundamentals, Module 2 - LED Technology
