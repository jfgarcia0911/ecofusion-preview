# Module 5: Climate Control Systems
## Course 213: Vertical Farming Techniques

---

## Module Overview

| Field | Details |
|-------|---------|
| **Module Number** | 5 of 12 |
| **Duration** | 60 minutes |
| **Format** | Lecture + System Design Exercise |
| **Materials** | HVAC diagrams, psychrometric charts |

---

## Learning Objectives

By the end of this module, you will be able to:

1. **Design** HVAC systems for vertical farm requirements
2. **Calculate** cooling loads from LEDs and transpiration
3. **Manage** humidity and prevent disease
4. **Implement** CO2 supplementation strategies
5. **Optimize** air circulation patterns

---

## Lesson Content

### 5.1 Climate Control Challenges in Vertical Farms

#### Unique Requirements

```
VERTICAL FARM CLIMATE CHALLENGES

┌─────────────────────────────────────────────┐
│                                             │
│  HEAT LOAD: 50-70% from LED lighting       │
│  - 10,000 sq ft = 100-150 kW heat          │
│  - Concentrated in small volume            │
│                                             │
│  HUMIDITY: Transpiration in closed space   │
│  - Plants release 90% of water absorbed    │
│  - Can reach 90%+ RH without dehumidification│
│                                             │
│  CO2 DEPLETION: Rapid photosynthesis       │
│  - Ambient 420 ppm → 200 ppm in minutes    │
│  - Requires active supplementation         │
│                                             │
│  AIRFLOW: Dense vertical stacking          │
│  - Dead zones between tiers                │
│  - Uneven temperature distribution         │
│                                             │
└─────────────────────────────────────────────┘
```

#### Target Climate Parameters

| Parameter | Lettuce | Herbs | Strawberries | Tomatoes |
|-----------|---------|-------|--------------|----------|
| **Temperature (Day)** | 68-72°F | 70-75°F | 65-70°F | 70-78°F |
| **Temperature (Night)** | 62-65°F | 65-68°F | 60-65°F | 65-70°F |
| **Humidity (Day)** | 50-65% | 45-60% | 60-70% | 60-70% |
| **Humidity (Night)** | 60-70% | 55-65% | 70-80% | 70-80% |
| **CO2 Concentration** | 800-1200 ppm | 1000-1400 ppm | 800-1000 ppm | 1000-1500 ppm |
| **Air Velocity** | 0.2-0.5 m/s | 0.3-0.6 m/s | 0.2-0.4 m/s | 0.3-0.5 m/s |

---

### 5.2 HVAC System Design

#### Cooling Load Calculation

```
COOLING LOAD ANALYSIS (10,000 sq ft facility)

SENSIBLE HEAT GAINS:
├─ LED Lighting:           104 kW (100W/sq ft × 10,000 sq ft × 0.95 heat)
├─ People (20 workers):    5 kW (250W per person)
├─ Equipment (pumps):      8 kW (motors, controls)
├─ Building envelope:      12 kW (walls, roof, infiltration)
└─ TOTAL SENSIBLE:         129 kW (440,000 BTU/hr)

LATENT HEAT (from transpiration):
├─ Lettuce production:     25,000 lbs/week
├─ Water release:          22,500 lbs water/week (90% of uptake)
├─ Evaporation rate:       3,214 lbs/day = 134 lbs/hr
├─ Latent heat:            134 lbs/hr × 1,050 BTU/lb = 140,700 BTU/hr
└─ TOTAL LATENT:           41 kW

TOTAL COOLING LOAD:        170 kW (580,000 BTU/hr)
                           = 48 tons of cooling

Safety Factor (1.2x):      58 tons required capacity
```

#### HVAC System Types

**1. Central Air Handling Unit (AHU)**

```
CENTRAL AHU SYSTEM

┌────────────────────────────────────┐
│  OUTDOOR AIR INTAKE                │
│  (Fresh air, CO2 supplemented)     │
└──────────┬─────────────────────────┘
           ↓
┌────────────────────────────────────┐
│  PRE-FILTER (MERV 8)               │
└──────────┬─────────────────────────┘
           ↓
┌────────────────────────────────────┐
│  COOLING COILS                     │
│  (Chilled water or DX)             │
└──────────┬─────────────────────────┘
           ↓
┌────────────────────────────────────┐
│  DEHUMIDIFICATION                  │
│  (Condensate removal)              │
└──────────┬─────────────────────────┘
           ↓
┌────────────────────────────────────┐
│  HEPA FILTER (Optional)            │
│  (MERV 13-16 for sterile environments)│
└──────────┬─────────────────────────┘
           ↓
┌────────────────────────────────────┐
│  SUPPLY FAN (Variable Speed)       │
└──────────┬─────────────────────────┘
           ↓
    ┌──────┴──────┬──────┬──────┐
    ↓             ↓      ↓      ↓
┌─────────┐ ┌─────────┐ ┌─────────┐
│ ZONE 1  │ │ ZONE 2  │ │ ZONE 3  │
│ Ducting │ │ Ducting │ │ Ducting │
└─────────┘ └─────────┘ └─────────┘
```

**Advantages:**
- Centralized control
- High efficiency at scale
- Good filtration
- Energy recovery options

**Disadvantages:**
- High upfront cost ($150K-300K for 10,000 sq ft)
- Single point of failure
- Ductwork space requirements
- Complex installation

**2. Mini-Split/VRF Systems**

```
VRF (Variable Refrigerant Flow) LAYOUT

OUTDOOR CONDENSING UNITS
┌──────┐  ┌──────┐  ┌──────┐
│ Unit │  │ Unit │  │ Unit │
│  1   │  │  2   │  │  3   │
└───┬──┘  └───┬──┘  └───┬──┘
    │         │         │
    └─────────┴─────────┘
            │ Refrigerant Lines
            ↓
    ┌───────┴──────┬──────┬──────┐
    ↓              ↓      ↓      ↓
┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐
│Indoor  │ │Indoor  │ │Indoor  │ │Indoor  │
│Unit 1  │ │Unit 2  │ │Unit 3  │ │Unit 4  │
│Rack A  │ │Rack B  │ │Rack C  │ │Rack D  │
└────────┘ └────────┘ └────────┘ └────────┘
```

**Advantages:**
- Modular/scalable
- Zone-specific control
- Redundancy (multiple units)
- Lower upfront cost

**Disadvantages:**
- Higher energy use than central
- Limited fresh air integration
- Individual unit maintenance
- Less humidity control

**3. Hybrid Approach** (Recommended for >5,000 sq ft)
- Central AHU for fresh air and dehumidification
- VRF for supplemental zone cooling
- Combines benefits of both systems

---

### 5.3 Humidity Management

#### Dehumidification Requirements

```
HUMIDITY REMOVAL CALCULATION

Daily Water Addition (transpiration):
├─ 25,000 lbs lettuce harvested/week
├─ Water uptake during growth: ~250,000 lbs/week
├─ 90% transpired: 225,000 lbs/week
└─ Per hour: 1,339 lbs water/hour

Dehumidification Capacity Needed:
├─ Latent load: 1,339 lbs/hr × 1,050 BTU/lb
├─ = 1,406,000 BTU/hr latent
├─ Dehumidifier capacity: 175 pints/hour
└─ Equipment: 8-10 commercial dehumidifiers (20-25 pints/hr each)
    OR integrated into HVAC (more efficient)
```

#### Humidity Control Strategies

| Method | Efficiency | Cost | Best For |
|--------|------------|------|----------|
| **Chilled Water Coils** | High (COP 3-4) | $$$ | Large facilities |
| **Desiccant Dehumidification** | Medium (COP 1-2) | $$$$ | Low temperature needs |
| **Direct Expansion (DX)** | Medium-High (COP 2.5-3.5) | $$ | Small-medium facilities |
| **Heat Recovery** | Very High (COP 5-8) | $$$$$ | Energy-conscious operations |

#### Humidity Problems and Solutions

```
COMMON HUMIDITY ISSUES

PROBLEM: Excessive Humidity (>80% RH)
├─ Symptoms: Condensation, mold, disease
├─ Causes: Insufficient dehumidification, poor airflow
└─ Solutions:
    ├─ Increase dehumidification capacity
    ├─ Improve air circulation
    ├─ Reduce plant density
    └─ Lower irrigation frequency

PROBLEM: Low Humidity (<40% RH)
├─ Symptoms: Tip burn, slow growth, wilting
├─ Causes: Over-dehumidification, dry outdoor air
└─ Solutions:
    ├─ Add humidification (foggers, misters)
    ├─ Reduce fresh air intake
    ├─ Seal facility better
    └─ Adjust dehumidifier setpoints
```

---

### 5.4 CO2 Supplementation

#### CO2 Depletion in Vertical Farms

```
CO2 CONCENTRATION OVER TIME (without supplementation)

CO2 (ppm)
  │
420├─Ambient─────────────────────────────────────
  │ ●
400│  ●
  │   ●●
350│     ●●
  │       ●●●
300│          ●●●●
  │              ●●●●
250│                  ●●●●●
  │                       ●●●●●
200│                            ●●●●────────────
  │    Growth Limitation Zone
  └────────────────────────────────────────────►
  0   5   10  15  20  25  30  35  40  45  Minutes

In dense vertical farm:
- 420 ppm → 200 ppm in 20-30 minutes
- Photosynthesis slows by 50% at 200 ppm
- Continuous supplementation essential
```

#### CO2 Delivery Systems

**1. Compressed CO2 Tanks**

```
COMPRESSED CO2 SYSTEM

┌──────────────┐
│ Liquid CO2   │ Bulk tank (outside)
│ Storage Tank │ 6-ton capacity typical
│ (refrigerated│
└──────┬───────┘
       │ Vaporizer
       ↓
┌──────────────┐
│ Regulator    │ Pressure control
│ (50-100 PSI) │
└──────┬───────┘
       │
       ├─────────┬─────────┬─────────┐
       ↓         ↓         ↓         ↓
    Zone 1    Zone 2    Zone 3    Zone 4
    Injector  Injector  Injector  Injector
    (controlled by CO2 sensors)
```

**Advantages:**
- Pure CO2 (99.9%)
- Precise control
- No combustion byproducts
- Safest for plants

**Costs:**
- Equipment: $5,000-15,000
- CO2: $200-300 per ton
- Usage: 0.5-1 ton per 10,000 sq ft per month

**2. Natural Gas CO2 Generators**

**Process:**
- Burn natural gas: CH₄ + 2O₂ → CO₂ + 2H₂O + Heat
- Produces CO2 + water vapor + heat
- Requires venting to prevent ethylene buildup

**Advantages:**
- Lower operating cost ($50-100/month gas vs. $200-300 CO2)
- Produces heat (can offset heating in winter)

**Disadvantages:**
- Adds heat load (problem in summer)
- Adds humidity
- Requires gas line
- Combustion byproducts
- Less precise control

**3. Composting/Fermentation CO2**

**Concept:** Capture CO2 from organic decomposition

**Status:** Experimental, limited commercial use

---

### 5.5 Air Circulation

#### Circulation Patterns

```
OPTIMAL AIRFLOW IN VERTICAL FARM

HORIZONTAL AIRFLOW (Rack Level):
┌─────────────────────────────────────┐
│ ←←←←←←←←← Fan ←←←←←←←←←             │
│ 🌱🌱🌱🌱🌱🌱🌱🌱                     │
│ →→→→→→→→→ Air →→→→→→→→→            │
└─────────────────────────────────────┘

VERTICAL AIRFLOW (Between Tiers):
        ↓↓↓↓↓  Supply Air
┌─────────────────────────────┐
│ Tier 4  🌱🌱🌱              │
├─────────────────────────────┤
│ Tier 3  🌱🌱🌱              │ Vertical
├─────────────────────────────┤ mixing
│ Tier 2  🌱🌱🌱              │ fans
├─────────────────────────────┤
│ Tier 1  🌱🌱🌱              │
└─────────────────────────────┘
        ↑↑↑↑↑  Return Air
```

#### Fan Placement Strategy

| Location | Purpose | Specifications |
|----------|---------|----------------|
| **Between Rack Rows** | Horizontal circulation | 12-18" diameter, 2000-4000 CFM |
| **End of Racks** | Push air through tiers | 8-12" diameter, 500-1500 CFM |
| **Supply Ducts** | Fresh air distribution | Sized for 0.5-1 ACH (air changes/hour) |
| **Return Ducts** | Extract humid air | Match supply CFM |
| **Spot Fans** | Eliminate dead zones | 6-8" diameter, 200-500 CFM |

#### Air Velocity Requirements

```
TARGET AIR VELOCITY BY CROP

Crop Type       Velocity        Rationale
─────────────────────────────────────────────
Microgreens     0.1-0.2 m/s     Delicate, low
Lettuce         0.2-0.4 m/s     Moderate, disease prevention
Herbs           0.3-0.6 m/s     Higher, strengthen stems
Strawberries    0.2-0.4 m/s     Moderate, flower pollination
Tomatoes        0.3-0.5 m/s     Stem strength, disease
```

**Too Low (<0.1 m/s):**
- Weak stems
- Disease risk (stagnant air)
- Poor CO2 distribution

**Too High (>1.0 m/s):**
- Plant stress
- Excessive transpiration
- Physical damage

---

### 5.6 Temperature Management

#### Zoning Strategies

```
TEMPERATURE ZONING

Facility divided into zones based on:
1. Crop type (different temp needs)
2. Growth stage (seedlings warmer)
3. Time of day (day/night cycling)

Example 10,000 sq ft facility:
┌────────────────────────────────────┐
│ PROPAGATION: 75-78°F              │
│ (Higher temp for germination)     │
├────────────────────────────────────┤
│ LEAFY GREENS: 68-72°F (day)       │
│               62-65°F (night)      │
│ (Main production area)            │
├────────────────────────────────────┤
│ HERBS: 70-75°F                    │
│ (Separate for different climate)  │
└────────────────────────────────────┘
```

#### Day/Night Temperature Differential (DIF)

**Concept:** Temperature difference between day and night affects plant morphology

| DIF | Effect | Application |
|-----|--------|-------------|
| **Positive (+)** (Day > Night) | Normal growth, moderate internode length | Standard production |
| **Zero (0)** (Day = Night) | Compact growth, short internodes | Space-limited, aesthetics |
| **Negative (-)** (Day < Night) | Very compact, thick stems | Compact cultivars, transplant prep |

**Example Lettuce:**
- Positive DIF: 72°F day / 62°F night = +10°F
- Result: Normal rosette, good leaf expansion

---

### 5.7 Energy Efficiency in Climate Control

#### Heat Recovery

```
HEAT RECOVERY VENTILATION (HRV)

FRESH AIR IN (Cold, Dry)           EXHAUST OUT (Warm, Humid)
      ↓                                    ↑
  ┌───────────────────────────────────────┐
  │         HEAT EXCHANGER                │
  │  Fresh Air ═══╬═══╬═══╬═══ Exhaust   │
  │     Warms ←───╬───╬───╬───→ Cools    │
  │               │   │   │               │
  └───────────────────────────────────────┘
      ↓                                    ↑
TO FACILITY (Pre-warmed)        FROM FACILITY (Pre-cooled)

Efficiency: 60-80% heat recovery
Energy Savings: 20-40% on HVAC
Payback: 2-4 years
```

#### Thermal Curtains

**Use:** Separate zones or reduce volume during off-hours

```
THERMAL CURTAIN DEPLOYMENT

DAY (Full Production):
┌─────────────────────────────────┐
│ Curtains OPEN                   │
│                                 │
│ ████ ████ ████ ████             │
│ All racks active                │
│                                 │
└─────────────────────────────────┘

NIGHT (Reduced Operations):
┌─────────────────────────────────┐
│ Curtains CLOSED ║               │
│                 ║               │
│ ████ ████       ║  Idle         │
│ Active  ║       ║               │
│ Section ║       ║               │
└─────────────────────────────────┘

Energy Savings: 15-30% during closed periods
```

#### Free Cooling

**Economizer Mode:** Use cool outdoor air when available

**Conditions for Free Cooling:**
- Outdoor temp < Indoor temp
- Outdoor humidity acceptable
- Air quality acceptable (filter)

**Potential Savings:**
- Cool climates: 500-1000 hours/year
- Energy reduction: 20-50% during economizer hours
- ROI: 1-2 years on damper/control investment

---

### 5.8 Monitoring and Control

#### Sensor Network

```
CLIMATE MONITORING NETWORK

┌────────────────────────────────────────┐
│ CENTRAL CONTROL SYSTEM                 │
│ (BMS - Building Management System)     │
└──────────┬─────────────────────────────┘
           │ Communication Bus
    ┌──────┴──────┬──────┬──────┬──────┐
    ↓             ↓      ↓      ↓      ↓
┌────────┐  ┌────────┐ ┌────────┐ ┌────────┐
│ Zone 1 │  │ Zone 2 │ │ Zone 3 │ │ Zone 4 │
│────────│  │────────│ │────────│ │────────│
│Temp×3  │  │Temp×3  │ │Temp×3  │ │Temp×3  │
│RH×2    │  │RH×2    │ │RH×2    │ │RH×2    │
│CO2×1   │  │CO2×1   │ │CO2×1   │ │CO2×1   │
│Light×1 │  │Light×1 │ │Light×1 │ │Light×1 │
└────────┘  └────────┘ └────────┘ └────────┘

Sensor Density:
- Temperature: 1 per 500-1000 sq ft
- Humidity: 1 per 1000-2000 sq ft
- CO2: 1 per 2000-5000 sq ft
- Air velocity: Spot checks with handheld
```

#### Automated Control Loops

**PID Control for Temperature:**
```
Setpoint: 70°F
Actual: 72°F
Error: +2°F

Controller Response:
├─ Proportional: Increase cooling in proportion to error
├─ Integral: Account for sustained error over time
└─ Derivative: Anticipate rate of change

Result: Smooth approach to setpoint, minimal overshoot
```

**Typical Control Bands:**
- Temperature: ±1-2°F
- Humidity: ±5-10% RH
- CO2: ±50-100 ppm

---

### 5.9 Key Takeaways

```
MODULE 5 SUMMARY

┌──────────────────────────────────────────────┐
│                                              │
│ COOLING LOAD: 50-70% from LEDs              │
│ Plan for 5-7 tons per 1,000 sq ft          │
│                                              │
│ DEHUMIDIFICATION: Essential in closed system│
│ Plants transpire 90% of water absorbed      │
│                                              │
│ CO2 SUPPLEMENTATION: 800-1200 ppm target    │
│ Compressed CO2 most reliable and clean      │
│                                              │
│ AIRFLOW: 0.2-0.5 m/s for most crops         │
│ Prevent stagnant zones between tiers        │
│                                              │
│ ENERGY: HVAC = 20-35% of operating cost     │
│ Heat recovery can save 20-40%               │
│                                              │
└──────────────────────────────────────────────┘
```

---

## Discussion Questions

1. **What are the trade-offs** between central AHU and VRF systems?

2. **How would you design climate control** for a facility growing both lettuce (cool) and basil (warm)?

3. **Is CO2 enrichment always worth the cost?** Under what conditions might you skip it?

---

## Vocabulary

| Term | Definition |
|------|------------|
| **Sensible Heat** | Heat that changes temperature (not phase) |
| **Latent Heat** | Heat from moisture evaporation/condensation |
| **Transpiration** | Water release from plant leaves |
| **DIF** | Day-night temperature differential |
| **ACH** | Air Changes per Hour |
| **VRF** | Variable Refrigerant Flow HVAC system |
| **HRV** | Heat Recovery Ventilation |
| **PID** | Proportional-Integral-Derivative control |
| **Economizer** | System using outdoor air for free cooling |
| **CFM** | Cubic Feet per Minute (airflow) |

---

## Quiz Preview

**Quiz 5: Climate Control** covers HVAC design, humidity management, CO2 supplementation, and airflow.

**See: quizzes/quiz_05.md**

---

## Next Module Preview

**Module 6: Automation and Monitoring Systems**

We'll explore control systems, sensors, data analytics, and automation strategies.

---

*Module 5 of 12 | Course 213: Vertical Farming Techniques*
*EcoFusion Academy*
