# Module 4: HVAC System Design - Part 1: Fundamentals

## Learning Objectives

By the end of this module, you will be able to:
- Apply psychrometric principles to CEA climate control design
- Calculate heating and cooling loads for greenhouses and vertical farms
- Design ventilation systems for various CEA facilities
- Specify dehumidification equipment and strategies
- Select air distribution methods for uniform climate control

## 4.1 Psychrometrics and Air Properties

### The Psychrometric Chart

```
PSYCHROMETRIC CHART COMPONENTS
===============================

          Wet Bulb Temperature (diagonal lines)
                     ╱╱╱╱╱╱
    100% RH ────────────────────
     │     ╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱
     │    ╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱
R    │   ╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱
H    │  ╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱  ← Enthalpy lines
     │ ╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱
     │╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱
     └────────────────────────
          Dry Bulb Temperature (°F or °C)
              ↑
         Humidity Ratio (lbs moisture/lb dry air)

Key Properties:
1. Dry Bulb Temperature (DB): Actual air temperature
2. Wet Bulb Temperature (WB): Temperature with evaporative cooling
3. Relative Humidity (RH): % of moisture saturation
4. Humidity Ratio (W): Actual moisture content (grains or lbs/lb)
5. Enthalpy (h): Total heat content (BTU/lb or kJ/kg)
6. Specific Volume: Volume per unit mass
7. Dew Point: Temperature where condensation begins
```

### Key Psychrometric Processes for CEA

```
TYPICAL HVAC PROCESSES ON PSYCHROMETRIC CHART
==============================================

1. HEATING (Winter Greenhouse)
   Outside air: 20°F, 80% RH
   │
   ├──► Sensible heating ────►
   │                          │
   Target: 70°F, 40% RH

2. COOLING + DEHUMIDIFICATION (Summer)
   Outside air: 90°F, 70% RH
   │
   ├──► Cool + dehumidify ──►
   │    (crosses saturation) │
   Target: 75°F, 60% RH

3. EVAPORATIVE COOLING
   Outside air: 95°F, 20% RH
   │
   ├──► Evaporative cooling ──►
   │    (follows wet bulb)    │
   Target: 75°F, 65% RH

4. DEHUMIDIFICATION ONLY
   Space air: 72°F, 90% RH
   │
   ├──► Desiccant or cooling coil
   │    then reheat            │
   Target: 72°F, 65% RH
```

### Humidity Calculations

**ABSOLUTE VS. RELATIVE HUMIDITY**

```
Relative Humidity (RH):
RH = (Actual vapor pressure / Saturation vapor pressure) × 100%

Humidity Ratio (W):
W = 0.622 × (Pv / (P - Pv))

Where:
Pv = Partial pressure of water vapor (psia)
P  = Atmospheric pressure (14.7 psia at sea level)

Example Calculation:
Given: 75°F, 60% RH

From psychrometric chart or equations:
Saturation pressure at 75°F: Psat = 0.4298 psia
Actual vapor pressure: Pv = 0.60 × 0.4298 = 0.2579 psia

Humidity Ratio:
W = 0.622 × (0.2579 / (14.7 - 0.2579))
W = 0.622 × 0.01786
W = 0.0111 lbs water / lb dry air
W = 77.7 grains / lb dry air

Dew Point:
Temperature at which RH = 100% for W = 0.0111
Dew point ≈ 59°F
```

**VAPOR PRESSURE DEFICIT (VPD)**

```
VPD = Critical parameter for plant transpiration

VPD = Saturation VP - Actual VP
VPD = VPsat × (1 - RH/100)

Example:
At 75°F, 60% RH
VPsat at 75°F = 25.0 mbar (from tables)
VPD = 25.0 × (1 - 0.60) = 10.0 mbar (1.0 kPa)

Optimal VPD Ranges by Growth Stage:
┌────────────────────────┬──────────────┐
│ Growth Stage           │ VPD (kPa)    │
├────────────────────────┼──────────────┤
│ Clone/Propagation      │ 0.4 - 0.8    │
│ Vegetative             │ 0.8 - 1.2    │
│ Flowering/Fruiting     │ 1.0 - 1.5    │
│ Late Flowering         │ 1.2 - 1.6    │
└────────────────────────┴──────────────┘

High VPD (>1.6 kPa): Excessive transpiration, stress
Low VPD (<0.4 kPa): Reduced transpiration, disease risk
```

## 4.2 Heating and Cooling Load Calculations

### Heating Load Calculation

**GREENHOUSE HEATING LOAD COMPONENTS**

```
TOTAL HEATING LOAD (Qh)
=======================

Qh = Qenvelope + Qinfiltration + Qventilation

1. ENVELOPE HEAT LOSS
   Qenvelope = U × A × ΔT

   Where:
   U  = Overall heat transfer coefficient (BTU/hr·ft²·°F)
   A  = Surface area (ft²)
   ΔT = Temperature difference (°F)

2. INFILTRATION HEAT LOSS
   Qinfiltration = 1.08 × CFM × ΔT + 0.68 × CFM × ΔW

   Where:
   CFM = Infiltration air flow rate
   ΔT  = Temperature difference
   ΔW  = Humidity ratio difference (grains/lb)
   1.08 = Sensible heat factor (BTU/CFM·°F)
   0.68 = Latent heat factor (BTU/CFM·grain/lb)

3. VENTILATION HEAT LOSS (minimum fresh air)
   Qventilation = 1.08 × CFMvent × ΔT
```

**EXAMPLE: GREENHOUSE HEATING LOAD**

```
Given:
Size: 30 ft wide × 96 ft long × 14 ft eave
Location: Boston, MA
Design temp: -10°F outside, 65°F inside (ΔT = 75°F)
Glazing: Double polycarbonate, U = 0.50 BTU/hr·ft²·°F

Step 1: Calculate Surface Areas
Roof area (gable): 2 × (15 ft × 96 ft / cos(22°))
  = 2 × 1,560 / 0.927 = 3,365 ft²
End walls: 2 × (30 ft × 14 ft + 30 ft × 4 ft / 2)
  = 2 × (420 + 60) = 960 ft²
Side walls: 2 × (96 ft × 14 ft)
  = 2,688 ft²
Total glazing area: 7,013 ft²

Step 2: Envelope Heat Loss
Qenvelope = 0.50 × 7,013 × 75
         = 263,000 BTU/hr

Step 3: Infiltration (assume 0.5 air changes/hour)
Volume = 30 × 96 × 14 (avg) = 40,320 ft³
CFM = 40,320 × 0.5 / 60 = 336 CFM

Sensible: 1.08 × 336 × 75 = 27,200 BTU/hr
Latent: Minimal in heating (dry outside air)
Qinfiltration = 27,200 BTU/hr

Step 4: Ventilation (0.1 CFM/ft² minimum)
CFMvent = 2,880 ft² × 0.1 = 288 CFM
Qventilation = 1.08 × 288 × 75 = 23,300 BTU/hr

Step 5: Total Heating Load
Qh = 263,000 + 27,200 + 23,300
   = 313,500 BTU/hr ≈ 314,000 BTU/hr

Add safety factor (1.15): 314,000 × 1.15 = 361,000 BTU/hr

Equipment Selection: 400,000 BTU/hr boiler (next size up)
```

### Cooling Load Calculation

**GREENHOUSE COOLING LOAD COMPONENTS**

```
TOTAL COOLING LOAD (Qc)
========================

Qc = Qsolar + Qconduction + Qinternal + Qventilation

1. SOLAR HEAT GAIN
   Qsolar = A × SHGC × Isolar

   Where:
   A     = Glazing area (ft²)
   SHGC  = Solar Heat Gain Coefficient (0-1)
   Isolar = Solar irradiance (BTU/hr·ft²)

2. CONDUCTION HEAT GAIN
   Qconduction = U × A × ΔT

3. INTERNAL HEAT GAINS
   - Lighting: Watts × 3.41 BTU/W
   - Equipment: Nameplate rating
   - People: 250-400 BTU/hr per person
   - Plants: Typically absorbed by transpiration

4. VENTILATION/INFILTRATION
   Qvent = 1.08 × CFM × ΔT + 0.68 × CFM × ΔW
```

**EXAMPLE: VERTICAL FARM COOLING LOAD**

```
Given:
Size: 10,000 ft² footprint, 6 growing levels
Location: Phoenix, AZ
Design temp: 110°F outside, 75°F inside
LED lighting: 35 W/ft² × 60,000 ft² growing area
Building: Insulated metal walls, R-25

Step 1: Envelope Heat Gain
Walls: 400 ft perimeter × 16 ft high = 6,400 ft²
U-value = 1/R = 1/25 = 0.04 BTU/hr·ft²·°F
Qwalls = 0.04 × 6,400 × (110 - 75) = 8,960 BTU/hr

Roof: 10,000 ft², R-30, U = 0.033
Qroof = 0.033 × 10,000 × 35 = 11,550 BTU/hr

Qconduction = 20,510 BTU/hr

Step 2: Internal Heat Gain - Lighting
LED power: 35 W/ft² × 60,000 ft² = 2,100,000 W
Heat gain: 2,100,000 × 3.41 = 7,161,000 BTU/hr

Note: This is the dominant load!

Step 3: Equipment and People
HVAC fans: 200,000 BTU/hr
Pumps: 50,000 BTU/hr
People (20): 20 × 300 = 6,000 BTU/hr
Qequipment = 256,000 BTU/hr

Step 4: Ventilation (minimum fresh air)
Outdoor air: 0.05 CFM/ft² × 10,000 = 500 CFM
Sensible: 1.08 × 500 × 35 = 18,900 BTU/hr
Latent: 0.68 × 500 × 40 grains = 13,600 BTU/hr
Qventilation = 32,500 BTU/hr

Step 5: Total Cooling Load
Qc = 20,510 + 7,161,000 + 256,000 + 32,500
   = 7,470,010 BTU/hr
   = 622.5 tons (1 ton = 12,000 BTU/hr)

Add safety factor (1.10): 622.5 × 1.10 = 685 tons

Required cooling capacity: 700 tons
Power consumption at EER 11: 700 × 12,000 / 11 = 764 kW
```

## 4.3 Ventilation Requirements and Strategies

### Ventilation Rates

**VENTILATION RATE CALCULATION METHODS**

```
METHOD 1: AIR CHANGES PER HOUR (ACH)
CFM = (Volume × ACH) / 60

Typical ACH Requirements:
┌────────────────────────────┬─────────────┐
│ Space Type                 │ ACH         │
├────────────────────────────┼─────────────┤
│ Greenhouse (summer)        │ 30-60       │
│ Greenhouse (winter)        │ 0.5-1.0     │
│ Vertical farm grow room    │ 15-30       │
│ Post-harvest/pack area     │ 6-12        │
│ Office spaces              │ 2-4         │
└────────────────────────────┴─────────────┘

METHOD 2: FLOOR AREA BASIS
CFM/ft² varies by use and climate

Greenhouse Ventilation Capacity:
Cool climates: 6-8 CFM/ft²
Moderate climates: 8-12 CFM/ft²
Hot climates: 12-16 CFM/ft²

METHOD 3: COOLING LOAD BASIS
CFM = Sensible cooling load (BTU/hr) / (1.08 × ΔT)

For evaporative cooling:
Assume ΔT = 5-7°F temperature reduction
CFM = Cooling load / (1.08 × 6°F)

METHOD 4: CO₂ BALANCE
CFM = (CO₂ production rate) / (Cambient - Ctarget)

For plant CO₂ uptake:
CFM = (CO₂ injection rate - Plant uptake) / ΔC
```

### Natural Ventilation Design

**VENT SIZING FOR GREENHOUSES**

```
NATURAL VENTILATION PRINCIPLES
===============================

        ┌────────[Ridge vent]────────┐
        │    ↑    ↑    ↑    ↑    ↑   │
        │    │    │    │    │    │   │  Hot air
        │    │    │    │    │    │   │  rises
        │    │    │    │    │    │   │
        │    │    │    │    │    │   │
        │  Stack effect + wind      │
        │                            │
    [Side vent]  ←── Cool air in    │
        │                            │
        └────────────────────────────┘

Stack Effect:
ΔP = 0.192 × h × (1/To - 1/Ti)

Where:
ΔP = Pressure difference (in. w.g.)
h  = Height difference (ft)
To = Outside air temp (°R = °F + 460)
Ti = Inside air temp (°R)

Vent Area Sizing:
Minimum vent area = 15-25% of floor area
- Ridge vent: 10-15% of floor area
- Side vents: 10-15% of floor area

Example:
1 acre greenhouse (43,560 ft²)
Ridge vent: 6,500 ft² (15%)
Side vents: 6,500 ft² (15%)
Total vent area: 13,000 ft² (30% of floor)
```

**WIND-DRIVEN VENTILATION**

```
Airflow from wind pressure:
Q = C × A × V

Where:
Q = Air flow rate (CFM)
C = Effectiveness coefficient (0.5-0.7)
A = Vent opening area (ft²)
V = Wind velocity (ft/min)

Example:
Wind speed: 10 mph = 880 ft/min
Vent area: 6,000 ft²
C = 0.6

Q = 0.6 × 6,000 × 880 = 3,168,000 CFM

For 40,000 ft² greenhouse:
ACH = 3,168,000 × 60 / (40,000 × 14 ft avg height)
    = 339 ACH (very high ventilation rate)

Note: Natural ventilation highly variable
Mechanical ventilation provides consistent control
```

### Mechanical Ventilation Systems

**FAN SELECTION AND SIZING**

```
EXHAUST FAN TYPES
=================

1. CIRCULATION FANS (HAF - Horizontal Air Flow)
   Purpose: Air mixing, eliminate stratification
   Typical size: 12-36 inch diameter
   Flow rate: 5,000-20,000 CFM per fan
   Spacing: 50-75 ft apart
   Not for ventilation - for circulation only

2. EXHAUST FANS (Negative pressure)
   Purpose: Remove heat and humidity
   Mounting: Wall or roof
   Sizes: 24", 36", 48", 54" common
   Flow rates:
   ┌──────────────┬─────────────────┐
   │ Fan Size     │ CFM @ 0.1" SP   │
   ├──────────────┼─────────────────┤
   │ 36"          │ 10,000-14,000   │
   │ 48"          │ 18,000-22,000   │
   │ 54"          │ 22,000-28,000   │
   └──────────────┴─────────────────┘

3. SUPPLY FANS (Positive pressure)
   Purpose: Distribute conditioned air
   Used with: Heating, cooling systems
   Configuration: Duct distribution

FAN LAWS (for variable speed control):
CFM₂ = CFM₁ × (RPM₂/RPM₁)
Power₂ = Power₁ × (RPM₂/RPM₁)³

Reducing fan speed to 80% reduces:
- Flow to 80%
- Power to 51% (0.8³ = 0.512)
```

## 4.4 Dehumidification Strategies

### Moisture Load Calculations

**SOURCES OF MOISTURE IN CEA**

```
MOISTURE BALANCE
================

Moisture Gains:
├─ Plant transpiration (dominant)
├─ Irrigation/fertigation
├─ Soil/media evaporation
├─ Outside air infiltration/ventilation
└─ People (minimal)

Moisture Removal:
├─ Ventilation (dilution)
├─ Dehumidification (condensation or desiccant)
└─ Heating (reduces RH without removing moisture)

Transpiration Rate:
For leafy greens: 0.5-2.0 lbs water/ft²/day
For fruiting crops: 1.5-4.0 lbs water/ft²/day

Example Calculation:
10,000 ft² lettuce production
Transpiration: 1.2 lbs/ft²/day
Daily moisture: 10,000 × 1.2 = 12,000 lbs water/day
Hourly rate (16 hr photoperiod): 12,000/16 = 750 lbs/hr

Convert to grains/hour:
750 lbs/hr × 7,000 grains/lb = 5,250,000 grains/hr
```

**DEHUMIDIFICATION CAPACITY REQUIRED**

```
Moisture to be removed:
M = CFM × Δω × 60

Where:
M  = Moisture removal rate (grains/hr)
CFM = Air flow rate
Δω = Change in humidity ratio (grains/lb)
60 = Minutes per hour

Solving for required CFM:
CFM = M / (Δω × 60)

Example:
Must remove: 5,250,000 grains/hr (from above)
ω_in = 100 grains/lb (75°F, 80% RH)
ω_out = 50 grains/lb (desired after dehumidification)
Δω = 50 grains/lb

CFM = 5,250,000 / (50 × 60) = 1,750 CFM

Through dehumidifier
(This air is then mixed with room air)
```

### Dehumidification Methods

**COMPARISON OF DEHUMIDIFICATION TECHNOLOGIES**

```
┌─────────────────────────────────────────────────────────────┐
│  DEHUMIDIFICATION METHOD COMPARISON                         │
├────────────────┬──────────┬───────────┬─────────┬──────────┤
│ Method         │ Capacity │ Energy    │ Heat    │ Cost     │
│                │ Range    │ Eff.      │ Byproduct│         │
├────────────────┼──────────┼───────────┼─────────┼──────────┤
│ Ventilation    │ Unlimited│ Low cost  │ None    │ Low      │
│ (dilution)     │          │ (if cool) │         │          │
│                │          │           │         │          │
│ Refrigerant    │ 30-300   │ Moderate  │ Yes     │ Medium   │
│ (DX coil)      │ lbs/hr   │ EF=1.5-2.5│ (reheat)│          │
│                │          │           │         │          │
│ Desiccant      │ 50-500   │ Lower     │ Yes     │ High     │
│ (rotary wheel) │ lbs/hr   │ EF=0.8-1.5│ (regen.)│          │
│                │          │           │         │          │
│ Heat Pump      │ 40-400   │ High      │ Useful  │ High     │
│ Dehumidifier   │ lbs/hr   │ EF=2.5-4.0│ heat    │          │
└────────────────┴──────────┴───────────┴─────────┴──────────┘

EF = Energy Factor (lbs water removed per kWh)
```

**REFRIGERANT DEHUMIDIFICATION**

```
PROCESS SCHEMATIC
=================

Air flow:
Humid air → Cooling coil → Condensate → Reheat → Dry air
(80°F, 80% RH)  (55°F)     (removed)   (70°F)  (70°F, 55% RH)

Psychrometric process:
1. Cool below dew point (condensation occurs)
2. Moisture condenses and is drained
3. Reheat to comfortable temperature
4. Supply dry air to space

Equipment sizing:
Sensible capacity: Handle cooling load
Latent capacity: Handle moisture removal

Typical ratio:
Sensible Heat Ratio (SHR) = Sensible / Total
For dehumidification: SHR = 0.6-0.7 (high latent)
Standard AC: SHR = 0.75-0.85 (less latent capacity)
```

## 4.5 Air Distribution System Design

### Distribution Methods

**GREENHOUSE AIR DISTRIBUTION**

```
1. POLY TUBE DISTRIBUTION
   ════════════════════════════════
   ╔═══════════════════════════════╗
   ║  ○    ○    ○    ○    ○    ○  ║ Perforated
   ╚═══════════════════════════════╝ poly tube
        Supply air from heater/fan

   Pros: Low cost, flexible, even distribution
   Cons: Limited to low pressure, annual replacement

2. FABRIC DUCT
   ════════════════════════════════
   ╔═══════════════════════════════╗
   ║  ░░░░░░░░░░░░░░░░░░░░░░░░░░░ ║ Porous fabric
   ╚═══════════════════════════════╝ entire surface

   Pros: Even distribution, washable, durable
   Cons: Higher cost, cleaning required

3. UNIT HEATERS (stratified approach)
         [Heater]
            ║
            ↓ Discharge

   Used with HAF fans for mixing

4. OVERHEAD DUCT SYSTEM
   ┌──────┬──────┬──────┬──────┐
   │  ↓   │  ↓   │  ↓   │  ↓   │
   └──────┴──────┴──────┴──────┘
   Metal ductwork with diffusers

   Pros: Precise control, durable
   Cons: High cost, permanent installation
```

**VERTICAL FARM AIR DISTRIBUTION**

```
HORIZONTAL DISTRIBUTION (Typical)
==================================

Supply air duct (ceiling mounted)
┌──────────────────────────────────┐
│   ↓      ↓      ↓      ↓      ↓  │
│  [][][][][][][][][][][][][]      │
│  [][][][][][][][][][][][][]      │ Growing racks
│  [][][][][][][][][][][][][]      │
│   ↑      ↑      ↑      ↑      ↑  │
└──────────────────────────────────┘
Return air (floor or lower wall)

Air flow path: Supply → Down through crops → Return

VERTICAL DISTRIBUTION (Alternative)
====================================

│ Supply shaft │ ← Vertical riser
↓   ↓   ↓   ↓
[][][][][][][] Growing racks (horizontal flow)
↑   ↑   ↑   ↑
│ Return shaft │

Benefits: Shorter duct runs, modular design

AIR CHANGES AND VELOCITIES

Target air velocity at crop: 50-150 fpm
- Too low: Stagnant air, disease risk
- Too high: Plant stress, excessive transpiration

Room air changes: 15-30 ACH (as calculated earlier)
```

### Duct Sizing

**FRICTION LOSS METHOD**

```
Duct sizing based on:
1. Air flow rate (CFM)
2. Allowable friction loss (in. w.g. per 100 ft)
3. Maximum velocity (to limit noise)

Friction Loss Equation (simplified):
ΔP = f × (L/D) × (V²/2g)

Or use friction loss charts/tables

Example:
CFM = 10,000
Maximum velocity = 2,000 fpm
Allowable friction = 0.1 in. w.g. per 100 ft

From duct sizing chart:
Round duct diameter = 20 inches
Rectangular equivalent: 18" × 22"

Velocity = CFM / Area
For 20" round: A = π(10")²/144 = 2.18 ft²
V = 10,000 / 2.18 = 4,587 fpm

Too high! Increase to 24" diameter:
A = 3.14 ft²
V = 10,000 / 3.14 = 3,185 fpm

Still high - use 28" diameter:
A = 4.28 ft²
V = 10,000 / 4.28 = 2,336 fpm ✓

Acceptable velocity for main duct
```

**DIFFUSER AND REGISTER SELECTION**

```
SUPPLY AIR DEVICES
==================

Ceiling Diffusers:
- Square or round
- Adjustable pattern
- Low pressure drop
- NC 25-35 (noise criteria)

Selection based on:
1. Throw distance (to occupied zone)
2. CFM per diffuser
3. Pressure drop
4. Noise level

Throw = 0.8 × √(CFM × neck velocity)

Example:
Room: 30 ft × 40 ft × 12 ft high
Supply air: 4,000 CFM
Number of diffusers: 8
CFM per diffuser: 500

Required throw: 15 ft (half room width)
Select: 12" round diffuser, 500 CFM
Check: Throw = 18 ft ✓
       Pressure drop = 0.05 in. w.g. ✓
       NC = 30 ✓
```

## Summary

This module covered HVAC fundamentals essential for CEA facility design:
- Psychrometric principles and air property relationships
- Heating and cooling load calculation methods
- Ventilation rate determination and system design
- Dehumidification technologies and sizing
- Air distribution strategies and duct design

## Key Takeaways

1. **Psychrometrics is foundational** - Understanding air properties and processes is essential for effective climate control design.

2. **Lighting dominates vertical farm cooling loads** - Internal heat gains from LEDs often exceed all other loads combined.

3. **Ventilation must balance multiple needs** - Fresh air, cooling, dehumidification, and CO₂ management all require careful coordination.

4. **Dehumidification is critical but energy-intensive** - Plant transpiration creates large moisture loads requiring dedicated removal systems.

5. **Distribution uniformity affects crop quality** - Even air distribution eliminates hot/cold spots and ensures consistent growing conditions.

## Next Module

**Module 5: HVAC System Design - Part 2: Advanced Integration** will cover multi-zone climate control, heat recovery, system integration with growing systems, control strategies, and equipment selection.
