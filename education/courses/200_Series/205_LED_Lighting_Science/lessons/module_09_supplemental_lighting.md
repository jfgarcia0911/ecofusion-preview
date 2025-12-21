# Module 9: Supplemental Lighting

**Course:** 205 - LED Lighting Science
**Duration:** 60 minutes
**Level:** Intermediate

## Introduction

Greenhouse supplemental lighting combines natural sunlight with artificial LEDs to maintain target DLI throughout the year. This hybrid approach offers energy savings compared to sole-source lighting while enabling year-round production and consistent crop quality. Effective supplemental lighting requires understanding natural light variability, integration strategies, and control systems.

## Learning Objectives

By the end of this module, you will be able to:

1. Calculate supplemental lighting requirements based on natural light availability
2. Design LED systems for greenhouse supplemental applications
3. Implement sensor-based dimming for optimal energy efficiency
4. Apply photoperiod extension strategies using LEDs
5. Evaluate economics of supplemental vs. sole-source lighting
6. Troubleshoot common supplemental lighting challenges

## 1. Natural Light Analysis

```
Understanding Natural Light Availability
========================================

FACTORS AFFECTING NATURAL LIGHT IN GREENHOUSES:

1. Geographic Location (Latitude)
2. Season (Solar angle, day length)
3. Weather (Cloud cover)
4. Greenhouse Orientation
5. Glazing Material (Transmission %)
6. Structural Shading

SEASONAL VARIATION EXAMPLE:
Location: 40°N Latitude (Denver, CO area)

Month      Avg Daily DLI    Photoperiod    Comment
           (mol/m²/d)       (hours)
────────   ─────────────    ───────────    ───────
January    8-12             10             Low angle, short days
February   12-18            11             Increasing
March      20-28            12             Spring equinox
April      30-40            13             Good light
May        40-50            14             Peak spring
June       45-55            15             Summer peak
July       42-52            15             Hot, hazy
August     35-45            14             Decreasing
September  25-35            12             Fall equinox
October    18-25            11             Declining
November   10-15            10             Low light
December   6-10             9              Winter minimum

DLI DEFICIT CALCULATION:

Example: Tomato Production
Target DLI: 25 mol/m²/d
Location: 40°N
Month: January
Average natural DLI: 10 mol/m²/d

Deficit = Target - Natural
        = 25 - 10
        = 15 mol/m²/d required from supplemental

Photoperiod: 14 hours (extended)
Required PPFD = (15 × 1000) / (14 × 3.6)
              = 298 μmol/m²/s average supplemental

TRANSMISSION LOSSES:

Glazing Material        Transmission (PAR)
────────────────        ──────────────────
New glass              90-92%
Aged glass             85-88%
Polycarbonate (new)    80-85%
Polycarbonate (aged)   70-80%
Polyethylene (new)     85-90%
Polyethylene (aged)    75-82%

Structural shading:     5-15% additional loss

Example Calculation:
Outside PAR: 1000 μmol/m²/s (full sun)
Glass transmission: 88%
Structure shading: 10%
Inside PAR = 1000 × 0.88 × 0.90 = 792 μmol/m²/s

Effective transmission: ~79%
```

### Regional Light Availability

```
Light Zones and Supplemental Needs
===================================

U.S. LIGHT ZONES (Winter Avg DLI):

HIGH LIGHT (15-25 mol/m²/d)
├─ Southern regions (30-35°N)
├─ Examples: Southern CA, AZ, TX, FL
└─ Supplemental need: Minimal to moderate

MODERATE LIGHT (10-15 mol/m²/d)
├─ Mid-latitude regions (35-42°N)
├─ Examples: Central CA, NC, mid-Atlantic
└─ Supplemental need: Moderate to high

LOW LIGHT (5-10 mol/m²/d)
├─ Northern regions (42-50°N)
├─ Examples: Pacific NW, Great Lakes, New England
└─ Supplemental need: High

VERY LOW LIGHT (<5 mol/m²/d)
├─ Far northern regions (>50°N)
├─ Examples: Alaska, Northern Canada
└─ Supplemental need: Very high (approach sole-source)

SUPPLEMENTAL STRATEGY BY ZONE:

High Light Zone:
- Photoperiod extension only
- Supplemental on cloudy days
- Focus on light quality (spectrum)

Moderate Light Zone:
- Daily supplemental (winter)
- Photoperiod extension (year-round)
- Sensor-based control

Low Light Zone:
- Continuous supplemental (Nov-Feb)
- High-intensity systems
- Consider sole-source alternatives

CLOUD COVER IMPACT:

Clear Day:
Outside: 2000 μmol/m²/s
Inside (80% trans): 1600 μmol/m²/s
DLI (10 hr): 57.6 mol/m²/d
Supplemental needed: None

Partly Cloudy:
Average: 800 μmol/m²/s
Inside: 640 μmol/m²/s
DLI (10 hr): 23.0 mol/m²/d
Supplemental: 2 mol/m²/d for 25 target

Overcast:
Average: 200 μmol/m²/s
Inside: 160 μmol/m²/s
DLI (10 hr): 5.8 mol/m²/d
Supplemental: 19.2 mol/m²/d for 25 target
```

## 2. Supplemental Lighting Design

```
Designing Greenhouse Supplemental Systems
==========================================

DESIGN APPROACH:

Step 1: Determine Worst-Case Conditions
- Month with lowest natural DLI
- Overcast day conditions
- Target crop DLI requirement

Step 2: Calculate Maximum Supplemental Need
Target DLI - Minimum Natural DLI = Max Supplement

Step 3: Select Photoperiod Strategy
- Natural photoperiod only
- Extended photoperiod
- Day extension hours

Step 4: Calculate Required PPFD
PPFD = (Supplemental DLI × 1000) / (Hours × 3.6)

Step 5: Select Fixtures and Layout

EXAMPLE DESIGN:

Greenhouse: 10,000 sq ft (929 m²)
Crop: Tomato
Target DLI: 25 mol/m²/d
Location: 40°N latitude
Design month: January

Worst-case natural: 5 mol/m²/d (overcast)
Supplemental needed: 20 mol/m²/d
Photoperiod strategy: 14-hour extension
Required PPFD: (20 × 1000) / (14 × 3.6) = 397 μmol/m²/s

Total PPF Calculation:
Area: 929 m²
Average PPFD: 397 μmol/m²/s
Efficiency: 80% (losses)
Total PPF = 929 × 397 / 0.80 = 461,436 μmol/s

Fixture Selection:
High-bay LED: 2,400 μmol/s each
Quantity: 461,436 / 2,400 = 192 fixtures

Layout:
Greenhouse: 100 ft × 100 ft
Spacing: 8 ft × 8 ft grid
Coverage: 64 sq ft per fixture
Total capacity: 192 × 64 = 12,288 sq ft ✓

Electrical Load:
Power per fixture: 400W
Total power: 192 × 400W = 76.8 kW

MOUNTING CONSIDERATIONS:

High-Bay Fixtures:
        [Greenhouse Structure]
        ────┬──────┬──────┬────
            │      │      │
         [Cable] [Cable] [Cable]
            │      │      │
        [Fixture][Fixture][Fixture]
            ↓      ↓      ↓
        ═══════ Crop Canopy ═══════

Mounting height: 8-12 ft above canopy
Adjustable: Cable/chain for height changes
Clearance: Avoid shading from gutters/structures

Linear Fixtures (Alternative):
═════════════════════  ← Mounted to structure
Crop row             Crop row
═════════════════════
Crop row             Crop row

Better for:
- Row crop production
- Lower ceilings
- Targeted illumination
```

### Integration Patterns

```
Supplemental Light Patterns
============================

PATTERN 1: Continuous Supplemental
Natural photoperiod + constant supplement

Natural Light (varies):
├────────────────────┤ 10 hrs natural
    ↑↑↑↑↑↑↑↑↑↑
  Variable intensity

Supplemental (constant):
├────────────────────┤ 10 hrs supplement
    ──────────────
  Constant ~300 μmol/m²/s

Total PPFD = Natural + Supplemental

Cloudy: 100 + 300 = 400 μmol/m²/s
Sunny: 1000 + 300 = 1300 μmol/m²/s (may exceed optimum)

PATTERN 2: Threshold-Based Dimming
Supplement only when natural < threshold

Control Logic:
IF Natural PPFD < 500 μmol/m²/s:
   Supplemental = 500 - Natural
ELSE:
   Supplemental = 0

Example Day:
Time   Natural  Supplement  Total
────   ───────  ──────────  ─────
6am    50       450         500
9am    300      200         500
12pm   800      0           800
3pm    400      100         500
6pm    100      400         500

Benefits:
✓ Optimal energy efficiency
✓ Prevents over-lighting
✓ Maintains target PPFD

PATTERN 3: Photoperiod Extension Only
Supplement before/after natural photoperiod

         Natural Photoperiod
    ┌─────────────────────┐
    │  High intensity     │
├─Sup─┤├─────Nat──────┤├─Sup─┤
  2hr   10hr natural    2hr
  300   Variable        300

Total photoperiod: 14 hours
Natural hours: 10 hours (winter)
Extension: 4 hours supplemental

Benefits:
✓ Lowest energy use
✓ Extends production season
✓ Natural light quality

PATTERN 4: DLI Target Control
Advanced: Accumulate to target DLI

Control System:
- Measures natural DLI accumulation
- Calculates remaining DLI needed
- Adjusts supplement intensity/duration

Example (Target 20 mol/m²/d):

Sunny Day:
Natural by 4pm: 22 mol/m²/d
Supplemental: OFF (target exceeded)

Cloudy Day:
Natural by 4pm: 8 mol/m²/d
Remaining: 12 mol/m²/d
Time remaining: 4 hours
Required PPFD: 833 μmol/m²/s
Supplemental: ON at 833 μmol/m²/s

Benefits:
✓ Precise DLI delivery
✓ Maximum efficiency
✓ Consistent plant response

Requirements:
- PAR sensor
- Integrating controller
- Dimmable fixtures
```

## 3. Control Systems for Supplemental Lighting

```
Sensor-Based Control Strategies
================================

BASIC SYSTEM: On/Off Threshold
┌────────────────────────────────────┐
│ [PAR Sensor] → [Controller]        │
│                     │               │
│                     ├→ [Lights]     │
│                                     │
│ Logic:                              │
│ IF PAR < 300 μmol/m²/s:            │
│    Lights = ON                      │
│ ELSE:                               │
│    Lights = OFF                     │
└────────────────────────────────────┘

Pros: Simple, reliable
Cons: Binary (on/off), no optimization

INTERMEDIATE: Proportional Dimming
┌────────────────────────────────────┐
│ [PAR Sensor] → [Dimming Controller]│
│                     │               │
│                     ├→ [Lights]     │
│                    0-10V            │
│                                     │
│ Logic:                              │
│ Target = 500 μmol/m²/s             │
│ Supplement = Target - Natural       │
│ IF Supplement > 0:                  │
│    Dim_Level = Supplement / Max     │
│ ELSE:                               │
│    Dim_Level = 0                    │
└────────────────────────────────────┘

Example:
Natural: 200 μmol/m²/s
Target: 500 μmol/m²/s
Max supplemental: 400 μmol/m²/s

Supplement needed: 300 μmol/m²/s
Dim level: 300/400 = 75%
Output: 0-10V × 0.75 = 7.5V

ADVANCED: DLI Accumulation
┌────────────────────────────────────┐
│ [PAR Sensor] ─┐                    │
│ [Clock] ──────┼→ [Computer]        │
│                     │               │
│                     ├→ [Lights]     │
│                  Dynamic            │
│                                     │
│ Logic:                              │
│ 1. Measure natural DLI accumulated  │
│ 2. Calculate DLI remaining          │
│ 3. Calculate time to sunset         │
│ 4. Determine required PPFD          │
│ 5. Dim lights accordingly           │
└────────────────────────────────────┘

Example Calculation (3pm):
Target DLI: 20 mol/m²/d
Accumulated (6am-3pm): 12 mol/m²/d
Remaining: 8 mol/m²/d
Time to end (5pm): 2 hours
Required PPFD: (8 × 1000) / (2 × 3.6) = 1,111 μmol/m²/s

If natural at 3pm: 400 μmol/m²/s
Supplemental: 711 μmol/m²/s

SENSOR PLACEMENT:

Multiple Sensors for Accuracy:
┌────────────────────────────────────┐
│  [S1]      [S2]      [S3]          │
│                                    │
│  [S4]      [S5]      [S6]          │
│                                    │
│  Greenhouse floor plan             │
│                                    │
│ Average reading = Control input    │
└────────────────────────────────────┘

Placement Guidelines:
✓ Canopy height
✓ Representative locations
✓ Avoid shadows from structure
✓ 3-6 sensors per zone
✓ Weatherproof (greenhouse humidity)

CONTROL ZONES:

Single Zone (Simple):
All fixtures controlled together
One average PAR reading

Multi-Zone (Advanced):
┌──────────┬──────────┐
│  Zone 1  │  Zone 2  │  Different crops
├──────────┼──────────┤  or light levels
│  Zone 3  │  Zone 4  │
└──────────┴──────────┘

Benefits:
✓ Crop-specific DLI
✓ Better efficiency
✓ Flexible production
```

## 4. Economics of Supplemental Lighting

```
Cost-Benefit Analysis
=====================

COMPARISON: Supplemental vs. Sole-Source

Greenhouse: 10,000 sq ft
Crop: Tomato
Target DLI: 25 mol/m²/d

OPTION A: Sole-Source LED (Indoor)
─────────────────────────────────────
Capital Cost:
- LED fixtures: $600,000
- Electrical: $80,000
- HVAC upgrade: $120,000
- Structure: $200,000 (opaque building)
- Total: $1,000,000

Operating Cost (Annual):
- Lighting: 16 hrs × 495 μmol/m²/s × 929 m²
  = 113 kW × 16 hr × 365 = 660,880 kWh
- Cost: 660,880 × $0.12 = $79,306
- Cooling: $25,000
- Total: $104,306/year

OPTION B: Greenhouse + Supplemental LED
────────────────────────────────────────
Capital Cost:
- Greenhouse: $350,000
- LED fixtures: $250,000
- Electrical: $50,000
- HVAC: $80,000
- Total: $730,000 (27% less)

Operating Cost (Annual):
- Natural light: Free (50% of annual DLI)
- Supplemental: 10 hrs avg × 298 μmol/m²/s × 929 m²
  = 62 kW × 10 hr × 365 = 226,300 kWh
- Cost: 226,300 × $0.12 = $27,156
- Heating offset: -$15,000 (solar gain)
- Cooling: $8,000
- Total: $20,156/year (81% less!)

PAYBACK COMPARISON:
┌────────────────────────────────────┐
│                  Option A  Option B│
│ Capital          $1.0M    $730K    │
│ Annual Operating $104K    $20K     │
│ 5-year Total     $1.52M   $830K    │
│ 10-year Total    $2.04M   $931K    │
│                                    │
│ Supplemental saves: $1.1M over 10yr│
└────────────────────────────────────┘

SEASONAL ECONOMICS:

Winter Supplemental Cost:
November-February (120 days)
Hours: 12 hrs/day average
Power: 62 kW
kWh: 62 × 12 × 120 = 89,280 kWh
Cost: 89,280 × $0.12 = $10,714

Summer Supplemental Cost:
June-August (90 days)
Hours: 2 hrs/day average (extension only)
Power: 62 kW
kWh: 62 × 2 × 90 = 11,160 kWh
Cost: 11,160 × $0.12 = $1,339

Annual: $10,714 + $1,339 + ~$5,100 (spring/fall)
      = $17,153

SENSOR CONTROL ROI:

Without Sensors (Fixed Schedule):
Annual energy: 300,000 kWh
Cost: $36,000

With Sensor Control:
Annual energy: 226,300 kWh (25% savings)
Cost: $27,156

Sensor System Cost: $8,000
Annual Savings: $8,844
Payback: 0.9 years ✓
```

## 5. Spectrum Considerations for Supplemental

```
Spectral Strategies for Greenhouse
===================================

NATURAL SUNLIGHT SPECTRUM:
Full spectrum with all wavelengths
- Blue: 25%
- Green: 35%
- Red: 35%
- Far-red: 5%

SUPPLEMENTAL SPECTRUM OPTIONS:

Option 1: Broad Spectrum (White LED)
─────────────────────────────────────
Matches natural sunlight
┌────────────────────────────────────┐
│ Advantages:                        │
│ ✓ Natural appearance               │
│ ✓ Easy plant inspection            │
│ ✓ Worker comfort                   │
│ ✓ Balanced plant response          │
│                                    │
│ Disadvantages:                     │
│ ✗ Lower efficacy (~2.5 μmol/J)    │
│ ✗ Higher cost per photon           │
└────────────────────────────────────┘

Spectrum:
Intensity
    |  ████████████████████████
    | Blue Green   Red    Far-Red
  0%|_____________________________
    400     500     600     700 nm

Option 2: Red-Enriched
──────────────────────
White + supplemental red
┌────────────────────────────────────┐
│ Advantages:                        │
│ ✓ Higher efficacy (~2.8 μmol/J)   │
│ ✓ Complements blue-rich sunlight  │
│ ✓ Lower operating cost             │
│ ✓ Enhanced flowering               │
│                                    │
│ Disadvantages:                     │
│ ✗ Pinkish appearance               │
│ ✗ Slightly harder to inspect      │
└────────────────────────────────────┘

Spectrum:
Intensity
    |     █████████   ████████
    |    Blue Green    Red  Far-Red
  0%|_____________________________
    400     500     600     700 nm

Composition: 60% white + 40% red 660nm

Option 3: Blue + Red Only
─────────────────────────
Traditional "purple" supplemental
┌────────────────────────────────────┐
│ Advantages:                        │
│ ✓ Highest efficacy (~3.0 μmol/J)  │
│ ✓ Lowest energy cost               │
│ ✓ Targeted photosynthesis          │
│                                    │
│ Disadvantages:                     │
│ ✗ Purple glow (worker issues)     │
│ ✗ Difficult plant inspection       │
│ ✗ Missing green (canopy penetration)│
│ ✗ Not recommended for supplemental │
└────────────────────────────────────┘

RECOMMENDATION FOR SUPPLEMENTAL:
┌────────────────────────────────────┐
│ BEST: Red-Enriched White           │
│                                    │
│ Rationale:                         │
│ - Sunlight already provides blue   │
│   and green                        │
│ - Adding red boosts photosynthesis │
│ - Maintains acceptable appearance  │
│ - Balances efficiency & practicality│
│                                    │
│ Typical Spec:                      │
│ - 3000K white: 60-70%              │
│ - 660nm red: 30-40%                │
│ - Optional 730nm FR: 5-10%         │
│ - Efficacy: 2.7-3.0 μmol/J         │
└────────────────────────────────────┘
```

## 6. Common Challenges and Solutions

```
Troubleshooting Supplemental Systems
=====================================

CHALLENGE 1: Uneven Light Distribution
────────────────────────────────────────
Symptoms:
- Variable plant growth
- Some areas over-lit, others under-lit

Causes:
- Structural shading (gutters, trusses)
- Fixture spacing too wide
- Natural light patterns

Solutions:
┌────────────────────────────────────┐
│ 1. Map combined natural + supplemental│
│    PPFD at various times/weather   │
│ 2. Adjust fixture spacing/height   │
│ 3. Add perimeter fixtures           │
│ 4. Use light-moving systems         │
│ 5. Accept some variation (tolerable)│
└────────────────────────────────────┘

CHALLENGE 2: Light Sensor Calibration Drift
────────────────────────────────────────────
Symptoms:
- Supplemental running too much/little
- DLI not meeting target

Causes:
- Sensor fouling (dust, condensation)
- Electronic drift over time
- Incorrect placement

Solutions:
┌────────────────────────────────────┐
│ 1. Clean sensors monthly            │
│ 2. Calibrate quarterly              │
│ 3. Verify with handheld meter       │
│ 4. Replace sensors every 3-5 years  │
│ 5. Use weatherproof sensors         │
└────────────────────────────────────┘

CHALLENGE 3: Over-Lighting on Sunny Days
─────────────────────────────────────────
Symptoms:
- Leaf bleaching/photoinhibition
- Excessive DLI (>50 mol/m²/d)
- Wasted energy

Causes:
- Fixed supplemental without dimming
- Sensor control not implemented

Solutions:
┌────────────────────────────────────┐
│ 1. Install dimming control          │
│ 2. Set PPFD threshold (500-700)     │
│ 3. Implement DLI limiting           │
│ 4. Use shade curtains on peak days  │
└────────────────────────────────────┘

CHALLENGE 4: High Energy Costs
───────────────────────────────
Symptoms:
- Supplemental costs exceed projections
- Low ROI

Causes:
- Inefficient fixtures
- Poor control strategy
- Operating during peak rate periods

Solutions:
┌────────────────────────────────────┐
│ 1. Upgrade to higher efficacy       │
│    fixtures (>2.7 μmol/J)          │
│ 2. Implement sensor-based dimming   │
│ 3. Shift photoperiod extension to   │
│    off-peak hours                   │
│ 4. Optimize photoperiod duration    │
│ 5. Consider demand response programs│
└────────────────────────────────────┘

CHALLENGE 5: Spectrum Mismatch
───────────────────────────────
Symptoms:
- Excessive elongation or compactness
- Poor flowering response
- Color issues in ornamentals

Analysis:
Natural + Supplemental = Total Spectrum

Example Issue:
Natural (sunny): High blue
Supplemental: High blue white LEDs
Total: Excessive blue → over-compact

Solution:
Switch to red-enriched supplemental
Balances total spectrum
```

## Summary

Greenhouse supplemental lighting combines natural sunlight with LEDs to achieve consistent DLI year-round while minimizing energy consumption. Effective implementation requires understanding natural light variability, sensor-based control systems, and strategic spectrum selection.

**Key Takeaways**:

1. Supplemental lighting is most economical in moderate-to-high light regions
2. Calculate deficits based on worst-case natural light conditions
3. Sensor-based dimming provides 25-40% energy savings vs. fixed schedules
4. Red-enriched spectrum balances efficiency and practicality for supplemental
5. DLI accumulation control optimizes supplemental operation
6. Photoperiod extension uses minimal energy for significant production benefit
7. Total cost of ownership strongly favors supplemental vs. sole-source
8. Multi-zone control enables crop-specific DLI management

**Design Priorities**:
1. Accurate natural light assessment (location, season, glazing)
2. Worst-case supplemental capacity calculation
3. Sensor-based dimming control (essential for ROI)
4. Appropriate spectrum (red-enriched white recommended)
5. Regular sensor calibration and maintenance
6. Economic analysis vs. sole-source alternatives

## Check Your Understanding

1. Calculate supplemental PPFD needed: Target DLI 20 mol/m²/d, natural DLI 8 mol/m²/d, 12-hour photoperiod
2. Why is red-enriched spectrum preferred over broad white for greenhouse supplemental?
3. A greenhouse receives 15 mol/m²/d natural light. Supplemental adds 10 mol/m²/d. What's the total DLI?
4. List three benefits of sensor-based dimming over fixed schedules.
5. Why is supplemental lighting more economical than sole-source in most regions?

**Answers**:
1. Deficit: 20 - 8 = 12 mol/m²/d. PPFD: (12 × 1000) / (12 × 3.6) = 278 μmol/m²/s supplemental
2. Natural sunlight already provides blue and green. Adding red-enriched increases photosynthetic efficiency while maintaining acceptable appearance and worker comfort.
3. Total DLI = 15 + 10 = 25 mol/m²/d (assuming supplemental during natural photoperiod)
4. Any three: Energy savings (25-40%), prevents over-lighting, maintains consistent DLI regardless of weather, extends fixture lifespan (less runtime), reduces cooling load
5. Free natural light provides 30-70% of annual DLI (depending on region), reducing energy costs and installed fixture capacity. Lower capital and operating costs with maintained production quality.

## Next Module Preview

In Module 10: Lighting Project, you'll apply all concepts from this course in a comprehensive capstone project. You'll design a complete LED lighting system from requirements through installation specifications, including fixture selection, layout, electrical design, controls, and economic analysis.

---

**Estimated Time**: 60 minutes
**Difficulty**: Intermediate
**Prerequisites**: Modules 1-8
