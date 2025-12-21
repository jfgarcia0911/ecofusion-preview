# Module 14: Lighting System Engineering

## Introduction

Horticultural lighting must deliver the correct spectrum, intensity, and photoperiod for optimal plant growth while minimizing energy consumption and heat generation. This module covers photometric principles, LED fixture selection, lighting layout design, and thermal management.

**Duration:** 1 hour

---

## Learning Objectives

1. Apply photometric principles (PAR, PPFD, DLI)
2. Calculate lighting requirements by crop type
3. Design lighting layouts for uniform coverage
4. Select LED fixtures based on efficacy and spectrum
5. Manage heat loads from lighting systems
6. Optimize energy efficiency and operating costs

---

## 1. Light Measurement

### 1.1 Key Metrics

```
PAR (Photosynthetically Active Radiation): 400-700 nm wavelength
PPFD (Photosynthetic Photon Flux Density): μmol/m²/s
DLI (Daily Light Integral): mol/m²/day

DLI = PPFD × photoperiod × 0.0036

Example:
PPFD = 400 μmol/m²/s
Photoperiod = 16 hours
DLI = 400 × 16 × 0.0036 = 23.0 mol/m²/day
```

### 1.2 Crop Light Requirements

| Crop Type | PPFD (μmol/m²/s) | DLI (mol/m²/day) | Photoperiod |
|-----------|------------------|------------------|-------------|
| Microgreens | 150-250 | 8-12 | 12-16 hrs |
| Lettuce/Herbs | 200-350 | 12-17 | 14-18 hrs |
| Tomato/Pepper | 400-800 | 20-30 | 16-18 hrs |
| Cannabis (veg) | 400-600 | 20-25 | 18 hrs |
| Cannabis (flower) | 600-1000 | 30-50 | 12 hrs |

---

## 2. LED Fixture Selection

### 2.1 Efficacy Comparison

```
Efficacy = Output (μmol/s) / Input Power (W)

LED Technology Evolution:
2015: 1.5-1.8 μmol/J
2020: 2.2-2.7 μmol/J
2025: 2.8-3.2 μmol/J (top tier)

Example Fixtures:
Budget LED: 330W, 550 μmol/s → 1.67 μmol/J
Mid-tier LED: 330W, 750 μmol/s → 2.27 μmol/J
Top-tier LED: 330W, 990 μmol/s → 3.00 μmol/J

For same light output (750 μmol/s):
Budget: 449W
Top-tier: 250W
Energy savings: 199W per fixture!
```

### 2.2 Spectrum Selection

```
Blue (400-500 nm): Vegetative growth, compact plants
Red (600-700 nm): Flowering, fruiting, highest efficiency
Far-red (700-750 nm): Elongation, flowering trigger
White (full spectrum): General purpose, human visibility

Recommended Spectra:
Leafy greens: 20% blue, 80% red
Fruiting crops: 15% blue, 70% red, 15% far-red
Full cycle: 20% blue, 60% red, 20% white (appearance)
```

---

## 3. Lighting Layout Design

### 3.1 Fixture Spacing

```
Mounting height affects coverage and uniformity:

Low height (1-2 ft): High intensity, small coverage, less uniform
Medium height (3-4 ft): Balanced intensity and coverage
High height (5-6 ft): Lower intensity, large coverage, more uniform

Coverage area per fixture:
At 2 ft height: 9-12 ft² per fixture
At 4 ft height: 16-20 ft² per fixture
At 6 ft height: 25-30 ft² per fixture

Spacing formula:
Spacing = 1.3 × Mounting Height (for uniform coverage)

Example: 4 ft mounting height
Spacing = 1.3 × 4 = 5.2 ft → Use 5 ft spacing
```

### 3.2 Uniformity Calculation

```
Uniformity Ratio = Minimum PPFD / Average PPFD

Target: >0.85 for commercial production

Layout example: 40 ft × 100 ft growing area
Mounting height: 4 ft
Fixture output: 1,000 μmol/s
Coverage: 20 ft² per fixture @ 4 ft height

Area = 4,000 ft²
Fixtures required = 4,000 / 20 = 200 fixtures

Grid spacing: 5 ft × 5 ft (25 ft² each, conservative)
Actual count = 8 rows × 20 columns = 160 fixtures

Average PPFD (from manufacturer photometrics):
= (1,000 μmol/s × 160) / (4,000 ft² × 0.0929 m²/ft²)
= 160,000 / 371.6 = 430 μmol/m²/s

Check corner/edge PPFD from photometric data:
Minimum = 375 μmol/m²/s
Uniformity = 375 / 430 = 0.87 ✓
```

---

## 4. Power and Heat

### 4.1 Electrical Load

```
Load calculation:
200 fixtures × 330W = 66,000W = 66 kW

Circuits (240V, 20A circuits):
Each circuit = 240V × 20A × 0.8 = 3,840W capacity
Fixtures per circuit = 3,840 / 330 = 11.6 → 11 fixtures
Circuits needed = 200 / 11 = 18.2 → 19 circuits

Wire sizing: 12 AWG THWN-2, 20A breakers
Distribution: 3-phase panel for load balancing
```

### 4.2 Heat Management

```
Heat output = Power × (1 - Light Efficiency)

LED light efficiency: 40-50% (rest becomes heat)

Example: 330W LED @ 45% light efficiency
Heat output = 330W × 0.55 = 181.5W = 620 BTU/hr

For 200 fixtures:
Total heat = 200 × 620 = 124,000 BTU/hr

Cooling requirement:
= 124,000 / 12,000 BTU/ton = 10.3 tons of cooling

This is significant! Options:
1. Ventilation (if outside temp allows)
2. Air conditioning (expensive)
3. Heat rejection to water (if cooler than air)
4. Heat recovery for heating season
```

---

## 5. Control Systems

### 5.1 Dimming and Zoning

```
0-10V Dimming:
- Industry standard
- 0V = off, 10V = 100%
- Allows sunrise/sunset simulation
- Reduces power during lower light needs

PWM (Pulse Width Modulation):
- Digital on/off control at high frequency
- Can cause electromagnetic interference
- Check compatibility with other systems

Zones:
Divide facility into controllable zones:
- Edge zones (higher intensity to compensate)
- Center zones (standard intensity)
- Allows staged harvesting/planting
```

### 5.2 Photoperiod Control

```
Astronomical Timer:
- Adjusts automatically for season
- Maintains consistent photoperiod year-round
- Useful for greenhouse supplemental lighting

DLI Control:
Adjust intensity based on natural light:
DLI target = 20 mol/m²/day

If natural light provides 10 mol/m²/day:
Supplemental needed = 10 mol/m²/day
= 10 / (photoperiod × 0.0036)
= 10 / (16 × 0.0036) = 174 μmol/m²/s
Dim fixtures to 40% (if 400 μmol/m²/s capable)
Energy savings: 60%
```

---

## 6. Economic Analysis

### 6.1 Operating Costs

```
Annual cost = Power × Hours/Year × Rate

Example: 66 kW lighting, 16 hrs/day, $0.12/kWh
Hours/year = 16 × 365 = 5,840
Energy = 66 kW × 5,840 hr = 385,440 kWh/year
Cost = 385,440 × $0.12 = $46,253/year

Compare to HPS (same light output):
HPS efficacy: 1.7 μmol/J vs LED 2.7 μmol/J
HPS power = 66 × (2.7/1.7) = 105 kW
HPS cost = 105 × 5,840 × $0.12 = $73,584/year
Annual savings with LED: $27,331

LED premium cost: ~$50,000 more upfront
Payback = $50,000 / $27,331 = 1.8 years
```

### 6.2 Fixture Lifespan

```
LED L70 lifespan: 50,000-70,000 hours
(L70 = time to 70% of original output)

Operating hours:
16 hrs/day × 365 days = 5,840 hrs/year

Fixture life = 60,000 / 5,840 = 10.3 years

Replacement strategy:
- Monitor light levels annually
- Replace when output drops <80% (6-8 years typical)
- Group replacement reduces labor costs
```

---

## Summary

Lighting system engineering optimizes crop production and energy efficiency:

1. Calculate PPFD and DLI requirements by crop
2. Select fixtures based on efficacy (>2.5 μmol/J)
3. Design layouts for >0.85 uniformity
4. Manage heat loads from lighting
5. Implement control systems for optimization
6. Analyze economics including energy and replacement costs

Proper lighting design maximizes yield per watt.

---

## Check Your Understanding

1. Calculate DLI for 450 μmol/m²/s PPFD with 14-hour photoperiod.

2. Size lighting for 5,000 ft² lettuce production requiring 300 μmol/m²/s avg. Using 2.6 μmol/J fixtures, calculate total power.

3. Design fixture layout for 30 ft × 80 ft area with 4 ft mounting height and 20 ft² coverage per fixture.

4. Calculate uniformity ratio if minimum PPFD = 320 μmol/m²/s and average = 390 μmol/m²/s.

5. Determine heat output for 150 fixtures @ 400W each with 48% light conversion efficiency.

6. Compare annual operating cost: (100) 600W HPS vs (100) 330W LED, 18 hrs/day, $0.13/kWh.

7. Calculate payback period: LED costs $80,000 more upfront but saves $35,000/year in electricity.

8. Size electrical circuits for 80 fixtures @ 330W each on 240V, 20A circuits.

9. Design DLI-based dimming: Target 18 mol/m²/day, natural light provides 6 mol/m²/day over 12 hours. What PPFD from supplemental lighting?

10. A facility has 120 fixtures @ 400W. Dimming to 75% intensity for 8 months saves how much energy per year @ $0.12/kWh?

---

**Next Module:** Module 15 - Material Selection
