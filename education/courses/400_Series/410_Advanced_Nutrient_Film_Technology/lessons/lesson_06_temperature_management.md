# Lesson 6: Temperature Management and Thermal Engineering

## Introduction

Temperature management in NFT systems critically affects dissolved oxygen availability, nutrient uptake rates, root respiration, and pathogen development. The thin film and large exposed surface area make NFT particularly sensitive to thermal fluctuations. This lesson explores thermal dynamics, heat transfer mechanisms, and engineering solutions for maintaining optimal root zone temperatures.

## Optimal Temperature Ranges

### Crop-Specific Requirements

```
TEMPERATURE OPTIMA BY CROP:

Crop Category    Root Zone Optimal   Tolerance Range   Critical Max
──────────────────────────────────────────────────────────────────────
Cool-Season:
  Lettuce        18-20°C             15-22°C           24°C
  Spinach        16-19°C             14-21°C           23°C
  Arugula        17-20°C             15-22°C           24°C

Moderate:
  Basil          20-22°C             18-25°C           28°C
  Cilantro       18-21°C             16-24°C           26°C
  Strawberry     18-22°C             15-25°C           27°C

Warm-Season:
  Tomato         22-24°C             18-28°C           30°C
  Cucumber       24-26°C             20-30°C           32°C
  Pepper         23-26°C             20-30°C           31°C

General NFT Target: 18-22°C (optimal for most leafy greens)
```

### Temperature Effects on Plant Physiology

```
METABOLIC RESPONSE CURVES:

Process              Q₁₀    Effect of +10°C
────────────────────────────────────────────
Root respiration     2.0    Doubles
Nutrient uptake      1.4    40% increase
Water uptake         1.3    30% increase
Enzyme activity      1.8    80% increase
Growth rate          1.3    30% increase
Pathogen growth      2.5    150% increase

Q₁₀ = Rate(T+10°C) / Rate(T°C)

Example: Root respiration at 30°C vs. 20°C
R(30) = R(20) × 2.0^((30-20)/10)
R(30) = R(20) × 2.0 = DOUBLE the O₂ demand

Combined with reduced DO saturation:
30°C: DO_sat = 7.5 mg/L (vs. 9.1 at 20°C)
Result: 18% less O₂ available + 100% more demand
= CRITICAL STRESS CONDITION
```

## Heat Load Analysis

### Sources of Heat Gain

```
HEAT BUDGET COMPONENTS:

1. Solar Radiation (Dominant):
   Q_solar = I × A × α

   Where:
   I = Solar irradiance (W/m²): 200-1000 depending on conditions
   A = Exposed surface area (m²)
   α = Absorption coefficient (0.7-0.9 for water)

   Example: 10m² exposed film surface, 500 W/m² solar
   Q_solar = 500 × 10 × 0.8 = 4,000 W = 4.0 kW

2. Ambient Air Temperature:
   Q_air = h × A × (T_air - T_solution)

   Where:
   h = Heat transfer coefficient: 5-25 W/m²·°C (depends on air velocity)
   A = Surface area (m²)
   T_air, T_solution = Temperatures (°C)

   Example: 10m² surface, T_air = 28°C, T_solution = 20°C, h = 10
   Q_air = 10 × 10 × (28 - 20) = 800 W = 0.8 kW

3. Pump Heat:
   Q_pump = P_electrical × (1 - η)

   Where:
   P_electrical = Pump power (W)
   η = Pump efficiency (typically 0.5-0.7)

   Example: 100W pump at 60% efficiency
   Q_pump = 100 × (1 - 0.6) = 40 W = 0.04 kW

4. Light Heat (Indoor/Supplemental):
   Q_light = P_light × f_heat

   Where:
   P_light = Light fixture power (W)
   f_heat = Fraction converted to heat (0.6-0.8 for LEDs, 0.85-0.95 for HPS)

   Example: 200W LED fixtures (60% heat)
   Q_light = 200 × 0.6 = 120 W = 0.12 kW

5. Root Respiration (Negligible):
   Typically <1% of total heat load

TOTAL HEAT LOAD:
Q_total = Q_solar + Q_air + Q_pump + Q_light + Q_respiration
Q_total = 4.0 + 0.8 + 0.04 + 0.12 + 0.01 = 4.97 kW

For this example system
```

### Temperature Rise Calculation

```
SOLUTION TEMPERATURE INCREASE:

ΔT = (Q_total × t) / (m × c_p)

Where:
ΔT = Temperature change (°C)
Q_total = Total heat input (W)
t = Time (seconds)
m = Mass of solution (kg)
c_p = Specific heat of solution ≈ 4,186 J/(kg·°C)

Example: 200L system, 5 kW heat load, 1 hour
m = 200 kg
Q = 5,000 W
t = 3,600 seconds

ΔT = (5,000 × 3,600) / (200 × 4,186)
ΔT = 18,000,000 / 837,200
ΔT = 21.5°C per hour WITHOUT cooling!

With continuous circulation and some heat loss:
Practical rise: 5-10°C/hour in hot conditions

Conclusion: Active cooling essential in warm climates
```

## Cooling Strategies

### Passive Cooling Methods

```
1. INSULATION:

R-value = Thermal resistance (m²·°C/W)

Common materials:
Material              R-value (per inch)    Application
────────────────────────────────────────────────────────────
Polystyrene (XPS)     R-5.0                 Reservoir walls
Polyisocyanurate      R-6.0                 Reservoir lid
Reflectix (foil)      R-1.0 (radiant)       Surface covering
Closed-cell foam      R-6.5                 Pipe insulation

Heat loss reduction:

Q = U × A × ΔT

Where U = 1/R (overall heat transfer coefficient)

Example: 2m² reservoir walls
Uninsulated (R-1): U = 1.0, Q = 1.0 × 2 × 10 = 20 W
R-10 insulation: U = 0.1, Q = 0.1 × 2 × 10 = 2 W

Result: 90% reduction in heat gain through walls

2. SHADING:

Shade cloth reduces solar load by 30-70%
Reflective films: 50-80% reduction
White surfaces: 40-60% reduction vs. dark colors

Effect on heat load:
Q_solar = 4.0 kW (unshaded)
With 50% shade: Q_solar = 2.0 kW
Savings: 2.0 kW = 40% of total heat load reduced

3. EVAPORATIVE COOLING (Pad/Spray):

Latent heat of vaporization: 2,260 kJ/kg water

Evaporating 1 L/hour removes:
Q = 1 kg/hr × 2,260 kJ/kg = 2,260 kJ/hr = 628 W

Can achieve 5-10°C ambient temperature reduction
Increases humidity (may or may not be desirable)
Best in hot, dry climates

4. GROUND COOLING:

Bury reservoirs or use earth coupling
Ground temperature: 12-18°C at 2m depth (temperate climates)
Passive heat sink with no energy cost
Limited by available space and installation cost
```

### Active Cooling Systems

```
CHILLER SYSTEMS:

Cooling capacity required:

Q_cooling ≥ Q_heat_load

Types:

1. Air-Cooled Chiller:
   Coefficient of Performance (COP): 2.5-3.5
   Power = Q_cooling / COP

   Example: 5 kW cooling load, COP = 3.0
   Power = 5.0 / 3.0 = 1.67 kW electrical input

   Advantages: Self-contained, simple installation
   Disadvantages: Less efficient in hot weather, noisy

2. Water-Cooled Chiller:
   COP: 4.0-6.0 (more efficient)
   Requires cooling tower or water source

   Same 5 kW load, COP = 5.0
   Power = 5.0 / 5.0 = 1.0 kW electrical

   Advantages: Higher efficiency, quieter
   Disadvantages: More complex, requires water source

3. Geothermal Heat Exchange:
   Uses stable ground temperature
   COP: 3.5-5.0
   High installation cost, low operating cost
   Best for permanent installations

SIZING METHODOLOGY:

Step 1: Calculate total heat load (kW)
Step 2: Add 20% safety margin
Step 3: Select chiller with adequate capacity
Step 4: Ensure adequate reservoir volume for thermal mass

Rule of thumb: 0.5-1.0 kW cooling per 1000L system volume
```

### Heat Exchanger Design

```
COUNTERFLOW HEAT EXCHANGER:

Hot solution in →  ═══════════════════════ → Cooled solution out
                    ║                  ║
Cold water in  ← ═══════════════════════ ← Warm water out

Heat Transfer Rate:

Q = U × A × ΔT_lm

Where:
Q = Heat transfer (W)
U = Overall heat transfer coefficient (W/m²·°C): 500-1500 typical
A = Heat exchanger surface area (m²)
ΔT_lm = Log mean temperature difference (°C)

Log Mean Temperature Difference:

ΔT_lm = (ΔT₁ - ΔT₂) / ln(ΔT₁/ΔT₂)

Example:
Hot solution: 25°C → 20°C
Cold water: 15°C → 18°C
ΔT₁ = 25 - 18 = 7°C
ΔT₂ = 20 - 15 = 5°C
ΔT_lm = (7 - 5) / ln(7/5) = 2 / 0.336 = 5.95°C

For Q = 3 kW, U = 1000 W/m²·°C:
A = Q / (U × ΔT_lm)
A = 3000 / (1000 × 5.95) = 0.504 m²

Select heat exchanger with ≥0.5 m² surface area

Types:
- Plate heat exchangers: Compact, efficient, easy to clean
- Shell and tube: Robust, higher capacity, larger
- Coil in reservoir: Simple, lower efficiency, easy to install
```

## Heating Strategies (Cold Climates)

### Heating Requirements

```
WINTER HEATING NEEDS:

Heat loss through surfaces:

Q_loss = U × A × (T_inside - T_outside)

Example: Greenhouse in winter
Inside target: 20°C
Outside: 5°C
Reservoir surface area: 3 m²
U-value (insulated): 0.3 W/m²·°C

Q_loss = 0.3 × 3 × (20 - 5) = 13.5 W

Channel exposed surface: 20 m²
U-value (thin film, air above): 5.0 W/m²·°C

Q_loss = 5.0 × 20 × (20 - 5) = 1,500 W = 1.5 kW

Total heating requirement: ~1.5 kW continuous

HEATING METHODS:

1. Immersion Heater:
   Direct, efficient
   Titanium or stainless steel (food-safe)
   Thermostat controlled
   Cost: $100-$300
   Efficiency: 95-98%

2. Inline Heat Exchanger:
   Hot water from building heating
   No electricity direct to water
   Efficient if heat source available
   Cost: $200-$600

3. Heat Pump:
   Reverse cycle for heating
   COP: 2.5-4.0 (heating mode)
   Can provide heating and cooling
   Cost: $1,500-$5,000

4. Geothermal:
   Stable ground temp as heat source
   Moderate year-round temperatures
   High installation, low operating cost
```

## Temperature Monitoring and Control

### Sensor Placement

```
MONITORING STRATEGY:

Critical Points:
1. Reservoir (primary control point)
2. Channel inlet (verify delivery temperature)
3. Channel outlet (detect warming along channel)
4. Return line (assess heat gain)
5. Ambient air (environmental correlation)

┌─────────────────────────────────────────┐
│          (5) Air Temp                   │
│                                         │
│  (2) Inlet    Channel    (3) Outlet     │
│     →  ═══════════════════════  →       │
│        ↑                        ↓       │
│    ┌───┴────────────────────────┴───┐   │
│    │   (1) Reservoir (Control)      │   │
│    │        (4) Return              │   │
│    └────────────────────────────────┘   │
└─────────────────────────────────────────┘

Sensor Specifications:
- Range: 0-50°C minimum
- Accuracy: ±0.2°C desirable, ±0.5°C acceptable
- Response time: <30 seconds
- Output: 4-20mA or digital (RS-485, Modbus)
- Waterproof: IP68 rating for submersible
```

### Control Logic

```
AUTOMATED TEMPERATURE CONTROL:

COOLING MODE:
IF Temp > 22°C THEN
    Activate chiller
    Continue until Temp < 20°C
    Deactivate chiller

IF Temp > 24°C (Critical) THEN
    Chiller to maximum
    Alert operator
    Consider emergency measures

HEATING MODE:
IF Temp < 18°C THEN
    Activate heater
    Continue until Temp > 19°C
    Deactivate heater

IF Temp < 15°C (Critical) THEN
    Heater to maximum
    Alert operator

PID CONTROL (Advanced):
Output = K_p × Error + K_i × ∫Error + K_d × dError/dt

Where:
Error = Setpoint - Actual temperature
K_p = Proportional gain
K_i = Integral gain
K_d = Derivative gain

Benefit: Smoother control, less overshoot
Prevents temperature cycling
Reduces equipment wear
```

## Thermal Mass and Buffering

### Solution Volume Effects

```
THERMAL BUFFER CAPACITY:

Heat capacity = m × c_p

Where:
m = Mass of solution (kg)
c_p = 4,186 J/(kg·°C)

Comparison:
System A: 100L solution
Heat capacity = 100 kg × 4,186 = 418,600 J/°C

System B: 500L solution
Heat capacity = 500 kg × 4,186 = 2,093,000 J/°C

For 1 kW heat load:
System A: ΔT = 1000 W / (418,600 J/°C) = 0.0024 °C/second
         = 8.6°C/hour

System B: ΔT = 1000 W / (2,093,000 J/°C) = 0.00048 °C/second
         = 1.7°C/hour

Larger volume = 5× slower temperature change
More stable, easier to control
Recommendation: 1-2 L solution per plant minimum
```

## Regional Adaptation Strategies

```
CLIMATE-SPECIFIC APPROACHES:

Hot, Arid (Desert):
- Challenge: Extreme heat, low humidity
- Strategy: Heavy insulation, active cooling, shading
- Equipment: Chiller (4-6 kW per 1000L), shade structures
- Benefit: Evaporative cooling very effective

Hot, Humid (Tropical):
- Challenge: High heat + humidity
- Strategy: Active cooling, dehumidification
- Equipment: Air-cooled or water-cooled chiller
- Note: Evaporative cooling ineffective

Temperate (Four Seasons):
- Challenge: Variable temperatures
- Strategy: Insulation, reversible heat pump
- Equipment: Heat pump for heating/cooling
- Benefit: Moderate year-round conditions

Cold (High Latitude):
- Challenge: Winter heating, summer brief
- Strategy: Heavy insulation, efficient heating
- Equipment: Immersion heaters, greenhouse integration
- Benefit: Cooling rarely needed

High Altitude:
- Challenge: Temperature swings, high solar radiation
- Strategy: Insulation, thermal mass, shading
- Note: Lower atmospheric pressure affects DO saturation
```

## Economic Analysis

```
COST COMPARISON (1000L System, Hot Climate):

Method              Capital    Annual Energy    Annual Total
──────────────────────────────────────────────────────────────
Passive (shade)     $200       $0              $200
Insulation only     $400       $0              $400
Evaporative         $600       $240            $640
Chiller (air)       $2,000     $960            $1,360
Chiller (water)     $3,500     $480            $1,280
Geothermal          $8,000     $180            $1,380 (year 1)

Productivity Impact:
Maintaining 20°C vs. 26°C:
- Growth rate: 15-20% faster
- Yield: 10-15% higher
- Quality: Superior color, shelf life
- Reduced disease pressure

ROI: Depends on crop value
High-value crops (herbs, specialty): 6-12 months payback
Commodity (lettuce): 12-24 months payback
```

## Conclusion

Temperature management is essential for NFT success, affecting dissolved oxygen, nutrient uptake, and plant health. Key strategies include understanding heat loads, implementing appropriate cooling/heating systems, monitoring effectively, and optimizing for local climate conditions. Maintaining root zone temperatures of 18-22°C maximizes productivity and prevents stress-related problems.

## Key Takeaways

1. Optimal NFT temperature: 18-22°C for most leafy greens
2. Temperature affects DO saturation, respiration, and pathogen risk
3. Solar radiation typically dominates heat load in greenhouses
4. Temperature rise can reach 5-10°C/hour without cooling
5. Insulation and shading provide cost-effective passive cooling
6. Active chillers required in hot climates for reliable control
7. Larger solution volumes provide better temperature stability
8. Monitor temperature at reservoir, inlet, and outlet minimum
9. Automated control essential for consistent management
10. ROI on cooling systems: 6-24 months depending on crop value

---

*Next Lesson: Module 7 - Multi-Tier NFT System Design*
