# Module 4: Lighting Design for Vertical Farms
## Course 213: Vertical Farming Techniques

---

## Module Overview

| Field | Details |
|-------|---------|
| **Module Number** | 4 of 12 |
| **Duration** | 60 minutes |
| **Format** | Lecture + Lab Demonstration |
| **Materials** | Light meters, spectrum analyzers, LED samples |

---

## Learning Objectives

By the end of this module, you will be able to:

1. **Design** lighting systems for specific crops and growth stages
2. **Calculate** light requirements and energy costs
3. **Select** appropriate LED fixtures and configurations
4. **Create** custom light recipes for crop optimization
5. **Optimize** spacing and mounting for uniform coverage

---

## Lesson Content

### 4.1 Light Fundamentals for Indoor Growing

#### Key Metrics

```
LIGHT MEASUREMENT METRICS

┌──────────────────────────────────────────────┐
│  PAR (Photosynthetically Active Radiation)  │
│  - Wavelength: 400-700 nm                   │
│  - Only light plants use for photosynthesis │
│                                              │
│  PPFD (Photosynthetic Photon Flux Density) │
│  - Unit: μmol/m²/s                          │
│  - Light intensity at plant surface         │
│  - Key metric for plant growth              │
│                                              │
│  DLI (Daily Light Integral)                 │
│  - Unit: mol/m²/day                         │
│  - Total light over 24 hours                │
│  - DLI = PPFD × hours × 0.0036              │
│                                              │
│  PPE (Photon Efficiency)                    │
│  - Unit: μmol/J                             │
│  - Photons produced per watt of energy      │
│  - Efficiency metric for LEDs               │
│                                              │
└──────────────────────────────────────────────┘
```

#### DLI Requirements by Crop

| Crop Type | DLI Range (mol/m²/day) | PPFD (16hr photoperiod) |
|-----------|----------------------|------------------------|
| **Microgreens** | 6-10 | 104-174 μmol/m²/s |
| **Lettuce** | 14-17 | 243-295 μmol/m²/s |
| **Basil** | 17-20 | 295-347 μmol/m²/s |
| **Kale/Chard** | 15-19 | 260-330 μmol/m²/s |
| **Strawberries** | 20-25 | 347-434 μmol/m²/s |
| **Tomatoes** | 25-35 | 434-607 μmol/m²/s |
| **Peppers** | 25-30 | 434-521 μmol/m²/s |

---

### 4.2 LED Technology for Vertical Farms

#### LED Spectrum Options

```
LIGHT SPECTRUM FOR PLANT GROWTH

UV        BLUE      GREEN     YELLOW    RED       FAR-RED
│         │         │         │         │         │
200nm     400nm     500nm     600nm     700nm     800nm
          └─────────────────────────────┘
                    PAR Region

PHOTOSYNTHETIC RESPONSE:
Blue (400-500nm):    ████████  High absorption
Green (500-600nm):   ████      Moderate absorption
Red (600-700nm):     ██████████ Highest absorption
Far-Red (700-800nm): ██        Morphology effects

TYPICAL VERTICAL FARM LED SPECTRUM:
Blue: 20-30%  │████████░░░░░░░░░░░░░░░░░░
Green: 5-15%  │██░░░░░░░░░░░░░░░░░░░░░░░░
Red: 60-70%   │████████████████████░░░░░░
Far-Red: 3-5% │█░░░░░░░░░░░░░░░░░░░░░░░░░
```

#### LED Types Comparison

| LED Type | Spectrum | Efficiency (PPE) | Cost | Best For |
|----------|----------|------------------|------|----------|
| **Red/Blue Only** | Narrow (peaks) | 2.5-2.8 μmol/J | $ | Leafy greens, lowest cost |
| **Full Spectrum (White)** | Broad | 2.0-2.3 μmol/J | $$ | Visual appeal, mixed crops |
| **Tunable Multi-Channel** | Adjustable | 2.2-2.6 μmol/J | $$$$ | Research, optimization |
| **Hybrid (RB + White)** | Balanced | 2.3-2.6 μmol/J | $$$ | Most commercial farms |

#### Efficiency Evolution

```
LED EFFICIENCY IMPROVEMENTS

PPE    Year
(μmol/J)
  │
3.0│                                    ●─── Future (2026)
  │                                ●─────── Current Best (2025)
2.5│                        ●──────────────── Current Average
  │                  ●───────────────────────── 2022
2.0│          ●──────────────────────────────── 2019
  │   ●──────────────────────────────────────── 2016
1.5│●──────────────────────────────────────────── 2013
  │
  └────────────────────────────────────────────
  2013  2016  2019  2022  2025  2026

Energy Cost Impact:
1.5 → 2.5 μmol/J = 40% energy savings for same light output
```

---

### 4.3 Light Recipe Design

#### Lettuce Light Recipe Example

```
OPTIMIZED LETTUCE LIGHT RECIPE

SEEDLING STAGE (Days 1-7):
├─ PPFD: 150-200 μmol/m²/s
├─ Photoperiod: 18 hours
├─ DLI: 9.7-13.0 mol/m²/day
├─ Spectrum: 25% Blue / 70% Red / 5% Far-Red
└─ Goal: Compact, strong seedlings

VEGETATIVE STAGE (Days 8-21):
├─ PPFD: 250-300 μmol/m²/s
├─ Photoperiod: 16 hours
├─ DLI: 14.4-17.3 mol/m²/day
├─ Spectrum: 20% Blue / 75% Red / 5% Far-Red
└─ Goal: Rapid leaf expansion

FINISHING STAGE (Days 22-28):
├─ PPFD: 200-250 μmol/m²/s
├─ Photoperiod: 14-16 hours
├─ DLI: 12.1-14.4 mol/m²/day
├─ Spectrum: 15% Blue / 80% Red / 5% Far-Red
└─ Goal: Flavor development, harvest prep
```

#### Spectrum Effects on Plant Characteristics

| Spectrum Component | Increase = Effect | Decrease = Effect |
|-------------------|------------------|------------------|
| **Blue (400-500nm)** | Compact, thick leaves, dark color | Elongation, light color |
| **Red (600-700nm)** | Faster growth, larger leaves | Slower growth, smaller |
| **Far-Red (700-800nm)** | Stem elongation, flowering | Compact growth |
| **Green (500-600nm)** | Canopy penetration | Limited to surface |
| **UV (280-400nm)** | Flavor, color, stress response | Less flavor compounds |

#### Custom Recipes for Different Crops

**Basil (Flavor Focus):**
- High Blue (30-35%): Compact, high essential oils
- Moderate Red (60-65%): Adequate growth
- Low Far-Red (2-3%): Prevent stretching
- Add UV (2-3%): Enhanced aroma compounds

**Strawberries (Fruit Production):**
- Moderate Blue (20-25%): Balanced growth
- High Red (65-70%): Energy for fruiting
- Far-Red (5-10%): Flower induction
- High intensity: 400-500 μmol/m²/s

**Microgreens (Fast Turnover):**
- High PPFD (200-300 μmol/m²/s)
- Short photoperiod (12-14 hours)
- Balanced spectrum (20B/75R/5FR)
- 7-10 day cycles

---

### 4.4 Fixture Selection and Placement

#### Fixture Types

```
LED FIXTURE CONFIGURATIONS

1. LINEAR BARS (Most Common):
   ┌──────────────────────────────────┐
   │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
   └──────────────────────────────────┘
   Length: 4-8 feet
   Width: 1-3 inches
   Power: 100-300W per bar
   Coverage: 1-2 sq ft per bar

2. PANEL FIXTURES:
   ┌──────────────────┐
   │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
   │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
   │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
   └──────────────────┘
   Size: 2' × 4' typical
   Power: 200-600W
   Coverage: 8-16 sq ft

3. MODULAR ARRAYS:
   ┌────┬────┬────┬────┐
   │▓▓▓│▓▓▓│▓▓▓│▓▓▓│
   └────┴────┴────┴────┘
   Size: Customizable
   Power: 50-150W per module
   Coverage: Scalable
```

#### Mounting Height and Spacing

```
OPTIMAL LIGHT PLACEMENT

LED Height Above Canopy:
├─ Too High (>16"):  Wasted light, low PPFD
├─ OPTIMAL (6-12"): Maximum efficiency, even coverage
└─ Too Low (<4"):    Heat stress, uneven growth

        ↓ 6-12" ↓
   ─────▓▓▓▓▓▓▓▓▓───── LED Array
        ↓      ↓
       PPFD Distribution
   High ██████████ Target: ±10% uniformity
        ████████
   Low  ██████
        └──────┘
      Canopy Width

SPACING CALCULATION:
Fixture Spacing = Mounting Height × 1.5

Example:
8" mounting height = 12" spacing between bars
12" mounting height = 18" spacing between bars
```

#### Coverage Uniformity

| Metric | Target | Calculation |
|--------|--------|-------------|
| **Uniformity Ratio** | >0.9 | Min PPFD / Max PPFD |
| **CV (Coefficient of Variation)** | <10% | (Std Dev / Mean) × 100 |
| **Edge PPFD** | >80% of center | Measured at growing area edge |

**Achieving Uniformity:**
- Overlap fixture coverage areas
- Use diffusers or lenses
- Mount at proper height
- Regular PPFD mapping (quarterly)

---

### 4.5 Energy Calculations

#### Power Requirements

```
LIGHTING ENERGY CALCULATION

Facility: 10,000 sq ft growing area
Crop: Lettuce (target 280 μmol/m²/s)
LED Efficiency: 2.5 μmol/J
Photoperiod: 16 hours/day

STEP 1: Calculate Watts per Square Foot
Watts/sq ft = Target PPFD ÷ LED Efficiency
= 280 μmol/m²/s ÷ 2.5 μmol/J
= 112 W/m² = 10.4 W/sq ft

STEP 2: Total Power Draw
10,000 sq ft × 10.4 W/sq ft = 104,000 W = 104 kW

STEP 3: Daily Energy Use
104 kW × 16 hours = 1,664 kWh/day

STEP 4: Annual Energy Cost
1,664 kWh/day × 365 days × $0.12/kWh
= $73,099 per year

STEP 5: Cost per Pound Produced
Annual production: 520,000 lbs (13 cycles, 40,000 lbs/cycle)
Energy cost: $73,099
Cost per lb: $0.14
```

#### Energy Optimization Strategies

| Strategy | Energy Savings | Implementation Cost |
|----------|----------------|---------------------|
| **High-Efficiency LEDs** | 15-25% | $$$ (upfront premium) |
| **Dimming Controls** | 10-20% | $$ (controller investment) |
| **Spectral Tuning** | 5-15% | $$$$ (multi-channel LEDs) |
| **Photoperiod Optimization** | 10-15% | $ (programming only) |
| **Zonal Lighting** | 5-10% | $ (separate circuits) |
| **Reflective Surfaces** | 5-8% | $ (white paint/panels) |

---

### 4.6 Advanced Lighting Techniques

#### Dynamic Lighting Protocols

**Sunrise/Sunset Simulation:**
```
24-HOUR LIGHTING SCHEDULE

PPFD
μmol/m²/s
  │
300│     ┌────────────────┐
  │    ╱                  ╲
250│   ╱                    ╲
  │  ╱                      ╲
200│ ╱                        ╲
  │╱                          ╲
  └────────────────────────────────► Time
  0   2   4   6   8   10  12  14  16  18  20  22  24
      └─Sunrise─┘ └─Midday─┘ └─Sunset─┘

Benefits:
- Reduced plant stress
- Lower peak power demand
- Mimics natural conditions
- Potential yield increase (3-8%)
```

#### Interlighting

**Concept:** LEDs between plant rows, not just overhead

```
INTERLIGHTING CONFIGURATION

        Overhead LEDs
        ↓↓↓↓↓↓↓↓↓↓↓
    🌿🌿🌿🌿🌿🌿🌿🌿🌿
  ↓│              │↓ Side
  ↓│  🌿🌿🌿🌿🌿  │↓ LEDs
  ↓│  🌿🌿🌿🌿🌿  │↓
  ↓│              │↓
    🌿🌿🌿🌿🌿🌿🌿🌿🌿

Best For:
- Tall crops (tomatoes, peppers)
- Dense canopies
- Fruiting crops (light to lower fruit)

Results:
- 15-25% yield increase
- Better fruit quality throughout canopy
- 30% more energy input required
```

#### Spectral Shifting by Growth Stage

**Automated Recipe Changes:**
- Seedling → Vegetative → Flowering
- Microcontroller adjusts spectrum
- Tunable LED fixtures required
- Data-driven optimization

**Example - Strawberry Production:**
1. Vegetative: 20% Blue, 70% Red, 10% Green
2. Flower Initiation: 15% Blue, 65% Red, 10% Green, 10% Far-Red
3. Fruit Development: 10% Blue, 75% Red, 10% Green, 5% Far-Red
4. Ripening: 5% Blue, 80% Red, 10% Green, 5% Far-Red

---

### 4.7 Lighting Controls and Automation

#### Control System Architecture

```
LIGHTING CONTROL HIERARCHY

┌─────────────────────────────────────┐
│  CENTRAL CONTROL SYSTEM             │
│  - Scheduling                       │
│  - Recipe management                │
│  - Energy optimization              │
└──────────────┬──────────────────────┘
               │
       ┌───────┴────────┬──────────┐
       ↓                ↓          ↓
┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│ ZONE 1       │ │ ZONE 2       │ │ ZONE 3       │
│ Controller   │ │ Controller   │ │ Controller   │
└──────┬───────┘ └──────┬───────┘ └──────┬───────┘
       │                │                │
   ┌───┴───┬───┐   ┌───┴───┬───┐   ┌───┴───┬───┐
   ↓       ↓   ↓   ↓       ↓   ↓   ↓       ↓   ↓
  Rack  Rack Rack Rack  Rack Rack Rack  Rack Rack
   1     2   3    4     5   6    7     8   9
  LED   LED LED  LED   LED LED  LED   LED LED
 Arrays
```

#### Sensors and Feedback

**Essential Sensors:**
- PAR sensors (PPFD measurement): 1 per 500-1000 sq ft
- Temperature sensors (heat from LEDs): 1 per rack
- Photodiodes (light verification): 1 per zone
- Power meters: Per circuit or zone

**Automated Responses:**
- Dimming on hot days (reduce heat load)
- Intensity compensation for aging LEDs
- Failure alerts and backup activation
- Energy demand response (utility coordination)

---

### 4.8 Maintenance and Longevity

#### LED Degradation

```
LED PERFORMANCE OVER TIME

Light Output
    100% ├──●────────────────────────────────
         │    ●●●●
         │        ●●●●●
         │            ●●●●●●
     90% ├                  ●●●●●●●─────────── L90
         │                         ●●●●●●●●
     80% ├                                ●──── L80
         │
         └──────────────────────────────────────►
         0    10K   20K   30K   40K   50K  Hours

L90: 90% light output (still acceptable)
L80: 80% light output (replacement recommended)

Quality LEDs in Vertical Farms:
- L90: 35,000-50,000 hours (4-6 years continuous)
- L80: 50,000-70,000 hours (6-8 years)
```

#### Maintenance Schedule

| Task | Frequency | Purpose |
|------|-----------|---------|
| **Visual Inspection** | Weekly | Identify failures early |
| **PPFD Measurement** | Monthly | Verify light levels |
| **Fixture Cleaning** | Quarterly | Remove dust (10-15% loss) |
| **Comprehensive Mapping** | Annually | Update light maps |
| **LED Replacement** | As needed | Maintain uniformity |
| **Driver Testing** | Annually | Prevent failures |

#### Cleaning Impact

```
LIGHT OUTPUT WITH/WITHOUT CLEANING

PPFD
  │
300├─Clean─────Clean─────Clean─────Clean──── With Quarterly Cleaning
  │    ╲      ╱    ╲      ╱    ╲      ╱
  │     ╲    ╱      ╲    ╱      ╲    ╱
250├      ╲  ╱        ╲  ╱        ╲  ╱
  │       ╲╱          ╲╱          ╲╱
  │        ╲           ╲           ╲
200├        ─●──────────●───────────●─────── No Cleaning (15% loss/year)
  │
  └─────────────────────────────────────────► Time
          Year 1      Year 2      Year 3
```

---

### 4.9 Case Study: Plenty Unlimited Lighting System

#### System Specifications

| Parameter | Specification |
|-----------|---------------|
| **LED Type** | Custom full-spectrum arrays |
| **Efficiency** | 2.6+ μmol/J |
| **Mounting** | Vertical towers with interlighting |
| **Control** | AI-optimized dynamic recipes |
| **Fixtures per Acre** | 2,500-3,000 |
| **Total Power** | 1.2-1.5 MW per acre |
| **PPFD Range** | 200-500 μmol/m²/s (adjustable) |

#### Innovation

- Machine learning adjusts spectrum daily
- Individual tower control (not rack-level)
- Integrated with plant vision systems
- 24/7 optimization based on growth rates
- Claimed 20% efficiency gain vs. static lighting

#### Results

- 400x productivity vs. field agriculture
- Year-round consistent quality
- Reduced energy cost to $0.08/lb produced
- 6-year LED lifespan achieved

---

### 4.10 Key Takeaways

```
MODULE 4 SUMMARY

┌─────────────────────────────────────────────┐
│                                             │
│ LIGHT METRICS: PPFD (intensity), DLI       │
│ (daily total), PPE (efficiency)            │
│                                             │
│ TARGET PPFD for lettuce: 250-300 μmol/m²/s │
│ LED efficiency: 2.3-2.6 μmol/J current     │
│                                             │
│ POWER REQUIREMENTS: 10-15 W/sq ft          │
│ (40-50% of total operating cost)           │
│                                             │
│ MOUNTING HEIGHT: 6-12" above canopy        │
│ Uniformity target: >90%                    │
│                                             │
│ MAINTENANCE: Quarterly cleaning essential  │
│ (prevents 10-15% light loss)               │
│                                             │
└─────────────────────────────────────────────┘
```

---

## Discussion Questions

1. **How would you balance** energy costs vs. crop quality when designing a lighting system?

2. **What role will LED efficiency improvements** play in vertical farming economics over the next 5 years?

3. **Should farms invest** in tunable multi-channel LEDs or simpler fixed-spectrum systems?

---

## Vocabulary

| Term | Definition |
|------|------------|
| **PAR** | Photosynthetically Active Radiation (400-700nm light) |
| **PPFD** | Photosynthetic Photon Flux Density (light intensity) |
| **DLI** | Daily Light Integral (total light per day) |
| **PPE** | Photon Efficacy (efficiency of LED, μmol/J) |
| **Photoperiod** | Duration of light exposure per day |
| **Light Recipe** | Specific spectrum, intensity, and duration for a crop |
| **Interlighting** | Supplemental lighting between or within canopy |
| **L90** | Time until LED output drops to 90% |
| **Uniformity** | Consistency of light across growing area |
| **Far-Red** | Light wavelength 700-800nm affecting plant morphology |

---

## Activity Preview

**Lighting Design Exercise:** Calculate power requirements and fixture placement for a 5,000 sq ft lettuce operation.

**See: activities/lighting_design_worksheet.md**

---

## Quiz Preview

**Quiz 4: Lighting Design** covers metrics, calculations, fixture selection, and energy optimization.

**See: quizzes/quiz_04.md**

---

## Next Module Preview

**Module 5: Climate Control Systems**

We'll explore HVAC design, humidity management, and CO2 supplementation.

---

*Module 4 of 12 | Course 213: Vertical Farming Techniques*
*EcoFusion Academy*
