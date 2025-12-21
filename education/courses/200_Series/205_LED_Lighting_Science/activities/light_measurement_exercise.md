# Activity 1: Light Measurement & PPFD Mapping

**Course:** 205 - LED Lighting Science
**Duration:** 90 minutes
**Level:** Hands-on practical

## Objective

Learn to properly measure and map PPFD distribution across a growing area using a quantum sensor (PAR meter).

## Required Equipment

- Quantum sensor/PAR meter (calibrated)
- Measuring tape
- Clipboard and data sheets
- Calculator or smartphone
- Stakes or markers for grid points
- Optional: Laptop with spreadsheet software

## Part 1: Equipment Familiarization (15 minutes)

### Quantum Sensor Basics

```
Typical PAR Meter Components
═════════════════════════════

    [Digital Display]
          │
    ┌─────┴─────┐
    │  SENSOR   │
    │  METER    │
    │           │
    │  [Mode]   │  ← Select units (μmol/m²/s)
    │  [Zero]   │  ← Calibrate/zero
    │  [Hold]   │  ← Freeze reading
    └─────┬─────┘
          │
    [Sensor Probe]
          │
      ╔═══╧═══╗
      ║ ○ ○ ○ ║  ← Photodiode sensor head
      ║ ○ ○ ○ ║     (keep level, parallel to light)
      ╚═══════╝
```

### Pre-Measurement Checklist

□ Battery charged/fresh
□ Sensor calibrated (zero in dark)
□ Units set to μmol/m²/s
□ Sensor head clean (no dust/water)
□ Understand hold/freeze function

## Part 2: Single-Point Measurement (15 minutes)

Practice taking accurate measurements:

1. **Position sensor at canopy height**
   - Use plant top as reference
   - Typically 6-12" below fixtures

2. **Keep sensor level**
   - Parallel to light source
   - Perpendicular to floor

3. **Take reading**
   - Wait 5-10 seconds for stabilization
   - Use hold function to freeze
   - Record value

### Practice Measurements

Take 5 readings at the same location:

```
Reading    PPFD (μmol/m²/s)    Notes
──────────────────────────────────────
1          ___________
2          ___________
3          ___________
4          ___________
5          ___________

Average:   ___________
Std Dev:   ___________         (Should be <5%)
```

**If std dev >5%:** Check for sensor movement, lighting fluctuations, or equipment issues

## Part 3: Grid Mapping (45 minutes)

Map PPFD across a 4' × 4' (or available) growing area.

### Create Measurement Grid

```
4' × 4' Area - 16 Point Grid
═════════════════════════════

Mark grid points every 12 inches:

    0'    1'    2'    3'    4'
0' ┌─────┬─────┬─────┬─────┐
   │  1  │  2  │  3  │  4  │
1' ├─────┼─────┼─────┼─────┤
   │  5  │  6  │  7  │  8  │
2' ├─────┼─────┼─────┼─────┤
   │  9  │ 10  │ 11  │ 12  │
3' ├─────┼─────┼─────┼─────┤
   │ 13  │ 14  │ 15  │ 16  │
4' └─────┴─────┴─────┴─────┘
```

### Data Collection Sheet

```
PPFD Mapping Data
Location: _____________    Date: ___________
Fixture Type: _________    Mounting Height: __________
Sensor: ______________    Calibration Date: __________

Point   X (ft)   Y (ft)   PPFD (μmol/m²/s)   Notes
─────────────────────────────────────────────────────
1       0        0        __________
2       1        0        __________
3       2        0        __________
4       3        0        __________
5       0        1        __________
6       1        1        __________
7       2        1        __________
8       3        1        __________
9       0        2        __________
10      1        2        __________
11      2        2        __________
12      3        2        __________
13      0        3        __________
14      1        3        __________
15      2        3        __________
16      3        3        __________
```

## Part 4: Data Analysis (15 minutes)

### Calculate Key Metrics

**1. Average PPFD**
```
Average = Sum of all readings / Number of points
        = (_____ + _____ + ... ) / 16
        = __________ μmol/m²/s
```

**2. Minimum & Maximum**
```
Minimum PPFD: __________ μmol/m²/s (Point #___)
Maximum PPFD: __________ μmol/m²/s (Point #___)
```

**3. Uniformity**
```
Uniformity = (Minimum / Maximum) × 100
           = (_____ / _____) × 100
           = _______%

Target: >80%    Your result: _______ (Pass/Fail)
```

**4. Coefficient of Variation**
```
1. Calculate standard deviation
2. CV = (Std Dev / Mean) × 100
   CV = (_____ / _____) × 100 = _______%

Target: <10%    Your result: _______ (Pass/Fail)
```

**5. Calculate DLI**
```
If photoperiod is 16 hours:
DLI = Average PPFD × 16 × 3.6 / 1000
    = _____ × 16 × 3.6 / 1000
    = _______ mol/m²/d

Compare to crop requirement: __________
Status: Above/Below/On target
```

### Create Visual Map

Draw contour map showing PPFD distribution:

```
Example Heat Map (Your values):

    Low                    High
     ↓                      ↓
    180  200  220  240  260  280  300+

4' ┌──────────────────────────┐
   │ 200  240  260  240  200  │  Edge effects
   │                          │
3' │ 240  280  300  280  240  │
   │                          │  Higher in
2' │ 260  300  320  300  260  │  center
   │                          │
1' │ 240  280  300  280  240  │
   │                          │
0' │ 200  240  260  240  200  │  Edge effects
   └──────────────────────────┘
   0'   1'   2'   3'   4'
```

## Part 5: Troubleshooting & Improvements (Optional)

Based on your measurements, identify issues and solutions:

### Common Patterns & Solutions

```
PROBLEM: Low edge values
Pattern: Center high, edges low
  280  300  280
  300  320  300
  280  300  280

Solution:
□ Add perimeter fixtures
□ Increase mounting height
□ Use wider beam angle fixtures

PROBLEM: Hot spot in center
Pattern: Very high center
  200  240  200
  240  400  240
  200  240  200

Solution:
□ Raise fixture height
□ Reduce intensity (if dimmable)
□ Redistribute fixtures

PROBLEM: Overall too low
Pattern: All values < target
  150  180  160
  180  200  180
  160  180  160

Solution:
□ Lower fixture height
□ Add more fixtures
□ Increase intensity (if dimmable)
```

## Deliverables

Submit completed:
1. Data collection sheet (all 16 points)
2. Calculated metrics (average, min, max, uniformity, DLI)
3. Visual PPFD map
4. Brief analysis (100 words):
   - Is uniformity acceptable?
   - Is average PPFD appropriate for your crop?
   - What improvements would you recommend?

## Discussion Questions

1. Why is uniformity important for crop quality?
2. How would non-uniform lighting affect harvest timing?
3. What environmental factors might affect PPFD readings?
4. How often should you remap PPFD in a production facility?
5. What are the limitations of single-height measurements?

## Advanced Challenge (Optional)

Create a 3D map measuring PPFD at multiple heights:
- Canopy level (baseline)
- 6" above canopy
- 6" below canopy

Analyze how PPFD changes with height and implications for crop management.

---

**Safety Note:** Ensure all electrical equipment is properly installed before taking measurements. Do not touch fixtures that may be hot.

**Calibration Note:** Quantum sensors should be professionally calibrated annually for accurate measurements.
