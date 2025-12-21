# PPFD & DLI Visual Guide

**Course:** 205 - LED Lighting Science

## Understanding Light Measurements

```
THE LIGHT MEASUREMENT HIERARCHY
════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────┐
│ LIGHT SOURCE (LED Fixture)                          │
│                                                      │
│ PPF = Total photon output (μmol/s)                  │
│ Example: 1,800 μmol/s                               │
└──────────────────────┬──────────────────────────────┘
                       │
                       │ Distance, Coverage Area
                       │ Subject to inverse square law
                       ↓
┌─────────────────────────────────────────────────────┐
│ GROWING SURFACE (Plant Canopy)                      │
│                                                      │
│ PPFD = Light intensity at surface (μmol/m²/s)       │
│ Example: 300 μmol/m²/s                              │
│ Varies by location (uniformity)                     │
└──────────────────────┬──────────────────────────────┘
                       │
                       │ Time (photoperiod)
                       │ Accumulation over 24 hours
                       ↓
┌─────────────────────────────────────────────────────┐
│ DAILY TOTAL (Daily Light Integral)                  │
│                                                      │
│ DLI = Cumulative light dose (mol/m²/d)              │
│ Example: 17.3 mol/m²/d (300 × 16 hrs)               │
└─────────────────────────────────────────────────────┘
```

## PPFD Visualization

```
PPFD THROUGHOUT THE DAY (With Dimming)
═══════════════════════════════════════════════════

PPFD
(μmol/m²/s)
    |
400 |           ╔════════════╗        Constant
    |           ║            ║        intensity
300 |           ║            ║
    |     ╱╲    ║            ║    ╱╲   Sunrise/
200 |    ╱  ╲   ║            ║   ╱  ╲  sunset
    |   ╱    ╲  ║            ║  ╱    ╲ ramp
100 |  ╱      ╲ ║            ║ ╱      ╲
  0 |──────────────────────────────────
    0   6   12  16   20   24 hrs
        └─────────┬─────────┘
          Photoperiod (16 hours)

DLI = Area under curve = 17.3 mol/m²/d
```

## DLI Accumulation Example

```
LETTUCE DAILY LIGHT ACCUMULATION
═════════════════════════════════════════════════

Hour  PPFD        Hourly      Cumulative
      (μmol/m²/s) (mol/m²)    DLI (mol/m²/d)
─────────────────────────────────────────────
00:00   0         0.00        0.00   │
01:00   0         0.00        0.00   │ NIGHT
02:00   0         0.00        0.00   │
03:00   0         0.00        0.00   │
04:00   0         0.00        0.00   │
05:00   0         0.00        0.00   │
06:00   100       0.36        0.36   │ DAWN
07:00   250       0.90        1.26   │ RAMP
08:00   300       1.08        2.34   ├─
09:00   300       1.08        3.42   │
10:00   300       1.08        4.50   │
11:00   300       1.08        5.58   │
12:00   300       1.08        6.66   │ DAY
13:00   300       1.08        7.74   │
14:00   300       1.08        8.82   │
15:00   300       1.08        9.90   │
16:00   300       1.08       10.98   │
17:00   300       1.08       12.06   │
18:00   300       1.08       13.14   │
19:00   300       1.08       14.22   │
20:00   300       1.08       15.30   ├─
21:00   250       0.90       16.20   │ DUSK
22:00   100       0.36       16.56   │ RAMP
23:00   0         0.00       16.56   │
24:00   0         0.00       16.56   │ NIGHT
─────────────────────────────────────────────
TOTAL DLI: 16.56 mol/m²/d

Formula: DLI = PPFD × hours × 3.6 / 1000
Check: 300 × 16 × 3.6 / 1000 = 17.28 mol/m²/d ✓
(Slight difference due to ramping)
```

## Same DLI, Different Strategies

```
ACHIEVING 18 MOL/M²/D DLI
═════════════════════════════════════════════════

OPTION A: High Intensity, Short Day
    PPFD
     |
600  |     ████████████
     |     12 hours
     |
  0  |─────────────────────
     0    12    24 hrs

DLI = 600 × 12 × 3.6 / 1000 = 25.9 mol/m²/d ✗ Too high!


OPTION B: Moderate Intensity, Standard Day
    PPFD
     |
350  |   ████████████████
     |   14 hours
     |
  0  |───────────────────────
     0    14    24 hrs

DLI = 350 × 14 × 3.6 / 1000 = 17.64 mol/m²/d ✓


OPTION C: Lower Intensity, Long Day
    PPFD
     |
250  |  ██████████████████████
     |  18 hours
     |
  0  |─────────────────────────────
     0    18    24 hrs

DLI = 250 × 18 × 3.6 / 1000 = 16.2 mol/m²/d
Slightly low, adjust to 278 μmol/m²/s for 18.0

WHICH IS BEST?
- Option A: Requires higher-power fixtures, higher cost
- Option B: Balanced approach (recommended)
- Option C: Lower fixture cost, but check photoperiod
            sensitivity (may cause bolting in lettuce)
```

## Crop Comparison

```
DLI REQUIREMENTS BY CROP TYPE
═════════════════════════════════════════════════

mol/m²/d
    |
 50 |                               ████ Cannabis
    |                               ████ Flowering
 45 |                               ████
    |                               ████
 40 |                          ████ ████
    |                          ████ ████
 35 |                          ████ ████
    |                     ████ ████ ████
 30 |                     ████ ████ ████
    |                     ████ ████ ████ Tomato
 25 |                ████ ████ ████ ████ Fruiting
    |                ████ ████ ████ ████
 20 |           ████ ████ ████ ████ ████
    |           ████ ████ ████ ████ ████ Basil
 15 |      ████ ████ ████ ████ ████ ████
    | ████ ████ ████ ████ ████ ████ ████ Lettuce
 10 | ████ ████ ████ ████ ████ ████ ████
    | ████ ████ ████ ████ ████ ████ ████
  5 | ████ ████ ████ ████ ████ ████ ████
    | ████ ████ ████ ████ ████ ████ ████
  0 |─────────────────────────────────────
    Micro Lettuce Basil Tomato Cannabis
    greens              Veg    Flower

Low Light → Moderate → High Light
```

## PPFD Uniformity Illustration

```
POOR UNIFORMITY (50%)
═════════════════════════════════════════════════

    200   250   300   250   200
    250   300   350   300   250
    300   350   400   350   300  ← Hot spot
    250   300   350   300   250
    200   250   300   250   200

Min: 200  Max: 400  Uniformity: 50%

Result: Uneven growth, variable harvest timing


GOOD UNIFORMITY (85%)
═════════════════════════════════════════════════

    280   290   300   290   280
    290   300   310   300   290
    300   310   320   310   300  ← Even
    290   300   310   300   290
    280   290   300   290   280

Min: 280  Max: 320  Uniformity: 87.5%

Result: Even growth, uniform quality
```

## Quick Reference

```
┌───────────────────────────────────────────────────┐
│ KEY FORMULAS                                      │
├───────────────────────────────────────────────────┤
│ DLI = PPFD × Hours × 3.6 / 1000                  │
│                                                   │
│ PPFD = (DLI × 1000) / (Hours × 3.6)              │
│                                                   │
│ Uniformity = (Min / Max) × 100                   │
└───────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────┐
│ RULES OF THUMB                                    │
├───────────────────────────────────────────────────┤
│ • Leafy greens: 12-17 mol/m²/d                   │
│ • Herbs: 16-20 mol/m²/d                          │
│ • Fruiting crops: 25-35 mol/m²/d                 │
│ • Cannabis flowering: 40-50 mol/m²/d             │
│ • Target uniformity: >80%                        │
│ • Measure at canopy height                       │
└───────────────────────────────────────────────────┘
```

---

**Post this guide in your facility for daily reference!**
