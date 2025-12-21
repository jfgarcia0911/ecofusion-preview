# Psychrometric Chart Guide
## Course 211: Greenhouse Climate Management

---

## What is a Psychrometric Chart?

A psychrometric chart is a graphical representation of the thermodynamic properties of moist air. It's an essential tool for understanding and managing greenhouse climate, showing the relationships between temperature, humidity, and other air properties.

---

## Reading the Psychrometric Chart

```
╔═══════════════════════════════════════════════════════════════════════╗
║                                                                       ║
║                    PSYCHROMETRIC CHART ELEMENTS                       ║
║                                                                       ║
║                    Relative Humidity Lines                            ║
║                    (curved, labeled 10%, 20%...100%)                  ║
║                       ╱╱╱╱╱╱╱╱╱╱╱╱╱╱                                  ║
║   Enthalpy         ╱╱   100% ╱╱  90%  ╱╱                             ║
║   (diagonal)     ╱╱           ╱╱      ╱╱      80%                     ║
║                ╱╱             ╱╱      ╱╱      ╱╱                      ║
║ Humidity      ╱               ╱       ╱      ╱                        ║
║ Ratio        ╱               ╱       ╱      ╱    70%                  ║
║ (vertical)  ╱               ╱       ╱      ╱     ╱                    ║
║            ╱               ╱       ╱      ╱     ╱                     ║
║           └───────────────────────────────────────────                ║
║            Dry Bulb Temperature (horizontal)                          ║
║                                                                       ║
╚═══════════════════════════════════════════════════════════════════════╝
```

### Key Lines and Scales

**1. Dry Bulb Temperature (horizontal axis)**
- The temperature you read with a regular thermometer
- Runs left to right, typically 30-120°F

**2. Humidity Ratio (vertical axis, right side)**
- Mass of water vapor per mass of dry air
- Units: grains/lb or grams/kg
- Increases from bottom to top

**3. Relative Humidity Curves**
- Curved lines from lower left to upper right
- Labeled 10%, 20%, 30%...100%
- 100% RH = saturation line (top curve)

**4. Wet Bulb Temperature (diagonal, sloping down left to right)**
- Temperature read by thermometer with wet wick in moving air
- Used to determine evaporative cooling potential

**5. Dew Point Temperature (horizontal, read at saturation line)**
- Temperature at which condensation begins
- Follow humidity ratio line left to 100% RH curve

**6. Enthalpy (diagonal, similar to wet bulb)**
- Total heat content of air
- Units: BTU/lb or kJ/kg

---

## Practical Applications for Greenhouse Operators

### Application 1: Determining VPD

```
EXAMPLE: Current conditions 75°F and 60% RH

STEP 1: Find the point on the chart
───────────────────────────────────
- Start at 75°F on horizontal axis
- Follow vertical line up
- Stop at intersection with 60% RH curve
- Mark this point: CURRENT CONDITIONS

STEP 2: Find saturation vapor pressure
───────────────────────────────────────
- From current conditions point, go straight up
- Stop at 100% RH curve
- Read temperature on horizontal axis: approximately 61°F
- This is the dew point

STEP 3: Calculate VPD
─────────────────────
VPD relates to distance from current point to saturation
At 75°F, saturation vapor pressure ≈ 2.5 kPa
At 60% RH, actual vapor pressure = 2.5 × 0.60 = 1.5 kPa
VPD = 2.5 - 1.5 = 1.0 kPa (optimal range!)
```

### Application 2: Evaporative Cooling Potential

```
SCENARIO: Outside air is 95°F, 30% RH
Want to know: How much can evaporative cooling reduce temperature?

STEP 1: Plot outside conditions
────────────────────────────────
95°F, 30% RH on chart

STEP 2: Find wet bulb temperature
──────────────────────────────────
- Follow wet bulb line from this point
- Diagonally down and to the left
- Read where it intersects horizontal axis
- Wet bulb ≈ 70°F

STEP 3: Calculate potential cooling
────────────────────────────────────
Maximum cooling = Dry bulb - Wet bulb
Maximum cooling = 95°F - 70°F = 25°F

With 80% efficient evaporative cooler:
Actual cooling = 25°F × 0.80 = 20°F
Final temperature ≈ 75°F

CONCLUSION: Evaporative cooling very effective!
```

### Application 3: Heating Effects on Humidity

```
SCENARIO: Winter greenhouse at 60°F, 80% RH
Heat to 70°F without adding moisture
What happens to RH?

STEP 1: Plot starting conditions
─────────────────────────────────
60°F, 80% RH

STEP 2: Find humidity ratio
────────────────────────────
Read on right vertical axis: approximately 65 grains/lb

STEP 3: Move horizontally right (constant moisture)
────────────────────────────────────────────────────
Stay at 65 grains/lb
Move right to 70°F

STEP 4: Read new RH
───────────────────
At intersection: approximately 55% RH

CONCLUSION: Heating from 60°F to 70°F dropped RH from 80% to 55%
This is why heating reduces humidity!
```

### Application 4: Humidification Requirements

```
SCENARIO: Need to raise RH from 40% to 65% at 72°F
How much moisture must be added?

STEP 1: Plot starting point
───────────────────────────
72°F, 40% RH
Read humidity ratio: approximately 50 grains/lb

STEP 2: Plot target point
─────────────────────────
72°F, 65% RH (same temperature, move up vertically)
Read humidity ratio: approximately 80 grains/lb

STEP 3: Calculate moisture needed
──────────────────────────────────
Difference: 80 - 50 = 30 grains/lb of dry air

For a greenhouse with 100,000 lbs of air:
100,000 lbs × 30 grains/lb = 3,000,000 grains
÷ 7,000 grains/lb = 428 lbs of water
≈ 51 gallons of water needed
```

---

## Common Climate Strategies on the Chart

### Strategy 1: Night Dehumidification

```
PROBLEM: 65°F, 85% RH (too humid, disease risk)
TARGET: Maintain 65°F, reduce to 70% RH

OPTIONS SHOWN ON CHART:

Option A: Heat to reduce RH
──────────────────────────
- Follow constant moisture line (horizontal on humidity ratio)
- Move right until hitting 70% RH curve
- Required temp: approximately 70°F
- 5°F temperature increase needed

Option B: Active dehumidification
──────────────────────────────────
- Remove moisture at constant temperature
- Move straight down on 65°F line
- From 85% RH to 70% RH
- Moisture removed: approximately 25 grains/lb

Most practical: Combination (heat slightly + dehumidify)
```

### Strategy 2: Summer Cooling

```
OUTSIDE: 95°F, 40% RH
TARGET: 80°F, 60% RH

PATH ON CHART:
1. Start at 95°F, 40% RH
2. Evaporative cooling: Follow wet bulb line down-left
3. Ventilation mixing: Mix outside and inside air
4. Result: Lower temperature, moderate humidity increase
```

---

## Quick Reference Points

### Comfort and Growing Zones

```
HUMAN COMFORT ZONE:
Temperature: 68-78°F
RH: 30-60%
(Area on chart where people feel comfortable)

OPTIMAL VEGETATIVE GROWTH:
Temperature: 70-80°F
RH: 60-70%
VPD: 0.8-1.2 kPa
(Slightly more humid than human comfort)

PROPAGATION ZONE:
Temperature: 72-80°F
RH: 75-90%
VPD: 0.4-0.8 kPa
(High humidity area of chart)

DISEASE RISK ZONE:
RH > 85% at any temperature
(Upper curves of chart, avoid at night)

PLANT STRESS ZONE:
RH < 30% or VPD > 1.6 kPa
(Lower curves at high temperature)
```

---

## Practice Exercises

### Exercise 1
**Current conditions:** 78°F, 45% RH
**Question:** What is the dew point? At what temperature will condensation form?

**Answer:** _________________________________

### Exercise 2
**Current:** 65°F, 75% RH
**Action:** Heat to 72°F without adding moisture
**Question:** What will the new RH be?

**Answer:** _________________________________

### Exercise 3
**Outside:** 90°F, 35% RH
**Question:** What is the maximum cooling potential with evaporative cooling?

**Answer:** _________________________________

---

## Tips for Using Psychrometric Charts

1. **Always start with two known values** (typically temperature and RH)

2. **Follow the right lines:**
   - Horizontal for constant moisture content
   - Vertical for constant temperature
   - Along RH curves for constant relative humidity

3. **Use the chart for "what if" scenarios:**
   - What if I heat 10°F?
   - What if I add humidification?
   - What if I mix outside and inside air?

4. **Check the scale and units** (different charts use °F or °C, grains/lb or g/kg)

5. **Understand the limits:**
   - Chart shows equilibrium conditions
   - Real greenhouses have spatial variation
   - Plants modify the environment (transpiration)

---

## Additional Resources

**Online Psychrometric Calculators:**
- Allow instant calculations without manual chart reading
- Input any two variables, calculate all others
- Show VPD directly

**Mobile Apps:**
- Psychrometric chart apps for smartphones
- Field calculations on-site
- Some include VPD calculations

**Advanced Charts:**
- High-altitude versions (different pressure)
- Extended range (very hot or cold)
- Metric units

---

*EcoFusion Academy - Course 211 Handout*
