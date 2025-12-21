# Module 6: Light & Plant Growth
## Course 104: Plant Science Essentials

---

## Introduction

Light is the energy source that powers plant life. Beyond photosynthesis, light controls plant shape, flowering, pigment production, and countless other processes. Understanding light science allows you to optimize growth, control development, and make informed decisions about lighting systems.

---

## Learning Objectives

By the end of this module, you will be able to:
- Explain the key metrics used to measure horticultural light
- Describe how different wavelengths affect plant growth
- Calculate Daily Light Integral (DLI) for your crops
- Understand photomorphogenesis and light-driven plant responses
- Select and position lights for optimal plant production

---

## 1. Light Fundamentals

### What Is Light?

Light is electromagnetic radiation. Plants use a specific portion called **Photosynthetically Active Radiation (PAR)**.

```
    ELECTROMAGNETIC SPECTRUM

    WAVELENGTH (nm)
    ────────────────────────────────────────────────────────────►

    100    280    380    500    600    700    800    1000
     │      │      │      │      │      │      │      │
     │      │      │      │      │      │      │      │
    UV-C   UV-B   UV-A   │      │      │      │   Infrared
                         │      │      │      │
                   VIOLET│ BLUE │GREEN │YELLOW│ORANGE│ RED
                         │      │      │      │      │
                   ╔═════╧══════╧══════╧══════╧══════╧═════╗
                   ║     VISIBLE LIGHT (380-700nm)          ║
                   ╠═══════════════════════════════════════╣
                   ║      PAR (400-700nm)                   ║
                   ║  Photosynthetically Active Radiation   ║
                   ╚═══════════════════════════════════════╝
```

### Light as Particles: Photons

Light travels as particles called **photons**. Each photon carries a specific amount of energy based on its wavelength.

| Wavelength | Color | Energy per Photon | Notes |
|------------|-------|-------------------|-------|
| 400-450nm | Blue | High | More energy, fewer photons per watt |
| 500-550nm | Green | Medium | Penetrates canopy well |
| 600-650nm | Orange-Red | Lower | More photons per watt |
| 700nm | Far-red | Lowest | Influences morphology |

---

## 2. Light Measurement Metrics

### The Key Measurements

```
    LIGHT METRICS FOR HORTICULTURE

    ┌─────────────────────────────────────────────────────────────┐
    │                                                             │
    │  PPF - Photosynthetic Photon Flux                          │
    │  ═══════════════════════════════                           │
    │  • Total light OUTPUT from fixture                          │
    │  • Unit: µmol/s (micromoles per second)                    │
    │  • Like a light bulb's total lumens                        │
    │                                                             │
    │  PPFD - Photosynthetic Photon Flux Density                 │
    │  ════════════════════════════════════════                  │
    │  • Light INTENSITY at a point                              │
    │  • Unit: µmol/m²/s (micromoles per square meter per second)│
    │  • What plants actually receive                            │
    │                                                             │
    │  DLI - Daily Light Integral                                │
    │  ═════════════════════════                                 │
    │  • Total light received per day                            │
    │  • Unit: mol/m²/day (moles per square meter per day)       │
    │  • The "dose" plants receive                               │
    │                                                             │
    └─────────────────────────────────────────────────────────────┘
```

### Understanding PPFD

```
    PPFD: Light Intensity at the Plant

    LIGHT SOURCE
         │
         │  PPF = 1000 µmol/s
         │  (total output)
         ▼
    ═══════════════════
         \         /
          \       /
           \     /
            \   /
             \ /
    ──────────────────
    │                │
    │   PPFD varies  │
    │   by location  │
    │                │
    │  Center: 600   │  ← µmol/m²/s
    │  Edge: 300     │
    │  Corner: 150   │
    │                │
    └────────────────┘
```

### Calculating DLI

**DLI = PPFD × Hours of light × 0.0036**

```
    DLI CALCULATION EXAMPLE

    Given:
    • PPFD: 400 µmol/m²/s
    • Photoperiod: 16 hours

    Calculate:
    DLI = 400 × 16 × 0.0036
    DLI = 400 × 16 × 0.0036
    DLI = 23.04 mol/m²/day

    ───────────────────────────────────────────

    QUICK REFERENCE:

    PPFD    × 12 hours  × 16 hours  × 18 hours
    ────    ──────────  ──────────  ──────────
    200      8.6 DLI    11.5 DLI    13.0 DLI
    300     13.0 DLI    17.3 DLI    19.4 DLI
    400     17.3 DLI    23.0 DLI    25.9 DLI
    500     21.6 DLI    28.8 DLI    32.4 DLI
    600     25.9 DLI    34.6 DLI    38.9 DLI
```

---

## 3. DLI Requirements by Crop

### Target DLI Values

```
    CROP DLI REQUIREMENTS (mol/m²/day)

    LOW DLI (10-15)
    ═══════════════
    │▓▓▓▓▓▓▓▓▓▓│ Lettuce
    │▓▓▓▓▓▓▓▓▓▓│ Microgreens
    │▓▓▓▓▓▓▓▓▓░│ Spinach
    │▓▓▓▓▓▓▓▓▓░│ Low-light herbs

    MODERATE DLI (15-25)
    ════════════════════
    │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│ Basil
    │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│ Kale
    │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░│ Strawberries
    │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░│ Cucumbers

    HIGH DLI (25-40)
    ════════════════
    │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│ Tomatoes
    │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│ Peppers
    │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░│ Roses

    VERY HIGH DLI (40+)
    ═══════════════════
    │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│ Cannabis
    │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│ Full sun crops
```

### DLI Effects on Plants

| DLI Level | Plant Response |
|-----------|----------------|
| Too low | Stretched, weak growth; poor yield |
| Adequate | Normal development |
| Optimal | Maximum productivity |
| Too high | Leaf burn; diminishing returns |

---

## 4. Light Spectrum and Plant Response

### Wavelength Effects

```
    SPECTRUM EFFECTS ON PLANTS

    UV (280-400nm)
    ══════════════
    • Increases secondary metabolites
    • Enhances color, flavor, aroma
    • Can cause damage in excess
    • Induces stress responses

    BLUE (400-500nm)
    ════════════════
    • Promotes compact growth
    • Enhances chlorophyll production
    • Regulates stomata opening
    • Suppresses stem elongation
    • Important for vegetative stage

    GREEN (500-600nm)
    ═════════════════
    • Penetrates canopy well
    • Drives photosynthesis in lower leaves
    • Less efficient per photon
    • Useful for working (visibility)

    RED (600-700nm)
    ═══════════════
    • Most efficient for photosynthesis
    • Promotes flowering
    • Increases biomass
    • Can cause stretching if excess

    FAR-RED (700-800nm)
    ═══════════════════
    • Triggers shade avoidance
    • Promotes stem elongation
    • Influences flowering
    • Red:Far-red ratio important
```

### The Red:Far-Red Ratio

```
    RED:FAR-RED AND PLANT MORPHOLOGY

    HIGH R:FR RATIO                LOW R:FR RATIO
    (Full sunlight)                (Shade/canopy)

         ┌─┐                           ┌─┐
         │ │                           │ │
         │ │ Compact                   │ │ Stretched
         │ │                           │ │
        ┌┴─┴┐                         ┌┴─┴┐
        │   │ Normal                  │   │ Tall
        │   │ internodes              │   │ internodes
        │   │                         │   │
        ├───┤                         │   │
        │   │                         ├───┤
        │   │                         │   │
        └───┘                         │   │
          │                           ├───┤
          │                           │   │
      ════╧════                       └───┘
                                        │
                                    ════╧════

    Plants sense R:FR to detect competition
    and respond by growing taller
```

---

## 5. Photomorphogenesis

### Light as a Signal

Beyond photosynthesis, light controls plant development through **photoreceptors**:

```
    PHOTORECEPTOR SYSTEMS

    ┌─────────────────────────────────────────────────────────────┐
    │  PHOTORECEPTOR    WAVELENGTH      FUNCTIONS                 │
    ├─────────────────────────────────────────────────────────────┤
    │                                                             │
    │  Phytochrome      Red/Far-red     • Seed germination        │
    │  (Pr/Pfr)         (660/730nm)     • Shade avoidance         │
    │                                   • Flowering               │
    │                                   • Stem elongation         │
    │                                                             │
    │  Cryptochrome     Blue/UV-A       • Phototropism            │
    │                   (400-500nm)     • Stomatal opening        │
    │                                   • Circadian rhythm        │
    │                                   • Stem inhibition         │
    │                                                             │
    │  Phototropin      Blue            • Phototropism            │
    │                   (400-500nm)     • Chloroplast movement    │
    │                                   • Stomatal opening        │
    │                                                             │
    │  UVR8             UV-B            • UV protection           │
    │                   (280-320nm)     • Secondary metabolites   │
    │                                   • Flavonoid synthesis     │
    │                                                             │
    └─────────────────────────────────────────────────────────────┘
```

### Phytochrome: The Master Switch

```
    PHYTOCHROME INTERCONVERSION

    Pr (inactive)  ←──────────── Far-Red Light (730nm)
         │                           or Darkness
         │
         │ Red Light (660nm)
         │
         ▼
    Pfr (active) ──────────────► Triggers responses:
                                 • Seed germination
                                 • De-etiolation
                                 • Flowering (in some plants)
                                 • Chlorophyll synthesis
```

---

## 6. Photoperiodism

### Plants Measure Night Length

Plants use photoperiod (day/night length) to time developmental events, especially flowering.

```
    PHOTOPERIODIC CLASSIFICATION

    SHORT-DAY PLANTS (actually "long-night")
    ═══════════════════════════════════════
    • Flower when nights EXCEED critical length
    • Examples: Cannabis, chrysanthemums, poinsettias
    • Trigger: Uninterrupted dark period

    Light   ████████████░░░░░░░░░░░░░░  (12h light)
    Response: FLOWERING

    Light   ██████████████████░░░░░░░░  (18h light)
    Response: VEGETATIVE

    LONG-DAY PLANTS (actually "short-night")
    ═══════════════════════════════════════
    • Flower when nights SHORTER than critical length
    • Examples: Lettuce, spinach, wheat
    • Need long days to flower

    Light   ██████████████████░░░░░░░░  (18h light)
    Response: FLOWERING

    Light   ████████████░░░░░░░░░░░░░░  (12h light)
    Response: VEGETATIVE

    DAY-NEUTRAL PLANTS
    ═════════════════
    • Flower based on age/size, not photoperiod
    • Examples: Tomatoes, peppers, day-neutral strawberries
```

### Night Interruption

```
    THE POWER OF NIGHT INTERRUPTION

    For short-day plants:

    Normal short day (triggers flowering):
    ████████████░░░░░░░░░░░░░░░░░░

    Night interruption (prevents flowering):
    ████████████░░░░░░█░░░░░░░░░░░
                      ↑
              Brief light pulse
              "breaks" the night

    Used commercially to:
    • Delay flowering in stock plants
    • Keep mother plants vegetative
    • Time holiday crop production
```

---

## 7. Light Saturation and Efficiency

### The Light Response Curve

```
    PHOTOSYNTHESIS vs. LIGHT INTENSITY

    Photosynthesis
    Rate
        │                      ┌──────────────────
        │                     /   Light saturated
        │                    /    (limited by CO₂)
        │                   /
        │                  /
        │                 /
        │                /
        │               /  Linear increase
        │              /   (light limited)
        │             /
        │            /
        │           /
        │          /
        │         /
        │________/
        │
        └─────────────────────────────────────────
                Light Intensity (PPFD)

             ↑                    ↑
       Compensation         Light Saturation
          Point                 Point
```

### Light Saturation Points

| Crop | Saturation PPFD | Notes |
|------|-----------------|-------|
| Lettuce | 400-600 | Tip burn risk at higher levels |
| Herbs | 400-600 | Depends on species |
| Tomatoes | 800-1000 | High-light crop |
| Peppers | 600-800 | Moderate-high |
| Cannabis | 1000-1500 | Very high light demand |

### Beyond Saturation: Diminishing Returns

```
    COST vs. BENEFIT OF INCREASING LIGHT

    Yield
    Increase
        │
        │        ●
        │       ●
        │      ●
        │     ●
        │    ●
        │   ●               ● ● ● ● ● ● Plateau
        │  ●
        │ ●
        │●
        └─────────────────────────────────────
          Low              High
               Light Intensity

    At some point, more light costs more than
    the yield increase is worth
```

---

## 8. Artificial Lighting Technologies

### Light Source Comparison

```
    HORTICULTURAL LIGHTING TECHNOLOGIES

    ┌──────────────┬──────────────┬──────────────┬───────────────┐
    │              │ EFFICIENCY   │ SPECTRUM     │ LIFESPAN      │
    │              │ (µmol/J)     │ QUALITY      │ (hours)       │
    ├──────────────┼──────────────┼──────────────┼───────────────┤
    │ LED          │ 2.5 - 3.5    │ Customizable │ 50,000+       │
    │ (Modern)     │ EXCELLENT    │ EXCELLENT    │ EXCELLENT     │
    ├──────────────┼──────────────┼──────────────┼───────────────┤
    │ HPS          │ 1.7 - 2.1    │ Red-heavy    │ 10,000-24,000 │
    │ (High Press  │ GOOD         │ LIMITED      │ GOOD          │
    │  Sodium)     │              │              │               │
    ├──────────────┼──────────────┼──────────────┼───────────────┤
    │ CMH/LEC      │ 1.5 - 2.0    │ Full spectrum│ 15,000-20,000 │
    │ (Ceramic MH) │ GOOD         │ GOOD         │ GOOD          │
    ├──────────────┼──────────────┼──────────────┼───────────────┤
    │ Fluorescent  │ 0.8 - 1.5    │ Variable     │ 10,000-20,000 │
    │ (T5/CFL)     │ FAIR         │ FAIR-GOOD    │ GOOD          │
    └──────────────┴──────────────┴──────────────┴───────────────┘
```

### LED Advantages

1. **Energy efficiency** - 2-3x more efficient than HPS
2. **Spectrum control** - Can tune to plant needs
3. **Low heat** - Less cooling required
4. **Long life** - 50,000+ hours
5. **Dimmable** - Adjustable output
6. **Instant on** - No warm-up time

### LED Spectrum Options

```
    COMMON LED SPECTRUM CONFIGURATIONS

    FULL SPECTRUM (White LEDs)
    ══════════════════════════
    │  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  │
    │  Similar to sunlight       │
    │  Good for general growing  │

    TARGETED SPECTRUM
    ═════════════════
    │▓▓▓│    │    │▓▓▓▓▓│       │
    │Blue│    │    │ Red │       │
    │    │    │    │     │       │
    More efficient for photosynthesis
    "Blurple" appearance

    HYBRID SPECTRUM
    ═══════════════
    │▓▓▓│▓▓▓▓▓▓▓▓▓│▓▓▓▓▓│▓│    │
    │Blue│ White  │ Red │FR│    │
    Best of both worlds
    Most versatile
```

---

## 9. Light Placement and Uniformity

### The Inverse Square Law

```
    LIGHT INTENSITY vs. DISTANCE

    PPFD decreases with square of distance:

    Distance    Relative PPFD
    ────────    ─────────────
    1x             100%
    2x              25%
    3x              11%
    4x               6%

    ════════════════════════════════════
         LIGHT
           │
       1ft │ → 1000 PPFD
           │
       2ft │ → 250 PPFD
           │
       3ft │ → 111 PPFD
           │
       4ft │ → 63 PPFD
    ════════════════════════════════════
```

### Achieving Uniform Light Distribution

```
    LIGHT UNIFORMITY STRATEGIES

    SINGLE POINT SOURCE           MULTIPLE FIXTURES
    (Hot spot, weak edges)        (Better uniformity)

         ●                         ●       ●
        /|\                       /|\     /|\
       / | \                     / | \   / | \
      /  |  \                   /  |  \ /  |  \
     ────────────              ─────────────────
     ▓▓▓░░░░░▓▓▓              ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
     High variation            More uniform

    TARGET: < 20% variation across growing area
```

### Light Mapping

```
    SAMPLE PPFD MAP (µmol/m²/s)

    ┌─────┬─────┬─────┬─────┬─────┐
    │ 350 │ 450 │ 500 │ 450 │ 350 │
    ├─────┼─────┼─────┼─────┼─────┤
    │ 400 │ 550 │ 600 │ 550 │ 400 │
    ├─────┼─────┼─────┼─────┼─────┤
    │ 450 │ 600 │ 650 │ 600 │ 450 │  ← Center highest
    ├─────┼─────┼─────┼─────┼─────┤
    │ 400 │ 550 │ 600 │ 550 │ 400 │
    ├─────┼─────┼─────┼─────┼─────┤
    │ 350 │ 450 │ 500 │ 450 │ 350 │
    └─────┴─────┴─────┴─────┴─────┘

    Rotate plants from edges to center for
    more uniform growth
```

---

## 10. Practical Lighting Guidelines

### Lighting by Growth Stage

| Stage | PPFD Target | Photoperiod | DLI Target |
|-------|-------------|-------------|------------|
| Germination | 100-200 | 16-18h | 6-12 |
| Seedling | 200-300 | 16-18h | 12-17 |
| Vegetative | 300-600 | 16-18h | 17-30 |
| Flowering | 400-800 | 12-16h* | 20-40 |
| Clone/cutting | 100-200 | 18-24h | 8-12 |

*Depends on photoperiodic response

### Quick Reference for Light Height

```
    STARTING HEIGHT GUIDELINES

    Fixture Type       Starting Height    Adjust Based On:
    ────────────────   ────────────────   ────────────────
    LED Bar (200W)     18-24"             • Stretching = too far
    LED Panel (400W)   24-30"             • Bleaching = too close
    HPS 600W           24-36"             • Temperature at canopy
    HPS 1000W          36-48"             • PPFD readings
    T5 Fluorescent     6-12"              • Leaf response
```

### Troubleshooting Light Issues

| Symptom | Likely Cause | Solution |
|---------|--------------|----------|
| Stretching | Too little light | Lower fixture, increase intensity |
| Bleaching (white tips) | Too much light | Raise fixture, reduce intensity |
| Slow growth | Insufficient DLI | Longer photoperiod or higher PPFD |
| Leaf curl (up) | Light/heat stress | Raise fixture, improve airflow |
| Purple stems | UV stress or P deficiency | Check for other symptoms |

---

## Summary

### Key Takeaways

1. **PAR** (400-700nm) is the range plants use for photosynthesis
2. **PPFD** measures intensity; **DLI** measures daily total dose
3. **Different wavelengths** have distinct effects on plant form and function
4. **Photoperiod** controls flowering in many crops
5. **Light saturation** means more light doesn't always help
6. **LED technology** offers efficiency and spectrum control advantages

### The Light Management Checklist

```
    ✓ Know your crop's DLI requirement
    ✓ Measure PPFD at canopy level
    ✓ Calculate actual DLI delivered
    ✓ Ensure uniform light distribution
    ✓ Match spectrum to growth stage
    ✓ Control photoperiod for flowering crops
    ✓ Monitor for light stress symptoms
```

---

## Check Your Understanding

1. What is DLI and how do you calculate it?
2. Why does PPFD decrease so dramatically as distance from the light increases?
3. How do short-day plants actually determine when to flower?
4. Why is spectrum customization possible with LEDs but not HPS?
5. What symptoms indicate a plant is receiving too much light?

---

## Next Module Preview

In **Module 7: Temperature Effects**, we'll explore how temperature affects every aspect of plant growth—from enzyme activity to vernalization.

---

*EcoFusion Academy - Course 104: Plant Science Essentials*
*Module 6: Light & Plant Growth*
