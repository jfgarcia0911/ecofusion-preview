# Module 5: Environmental Systems Integration

## Introduction

Environmental control is critical for optimizing plant growth and maintaining fish health in controlled environment agriculture (CEA). Temperature, humidity, CO₂, and lighting must be precisely managed and integrated with aquaponic systems. Poor environmental control leads to disease, reduced growth, and system failures.

This module covers HVAC design, dehumidification strategies, CO₂ supplementation, and thermal management for aquaponic greenhouses and indoor farms. You'll learn to calculate heating/cooling loads, design air circulation systems, and integrate environmental controls with water system automation.

**Duration:** 1 hour

---

## Learning Objectives

By the end of this module, you will be able to:

1. Calculate heating and cooling loads for controlled environments
2. Design HVAC systems for greenhouses and indoor farms
3. Size dehumidification equipment based on transpiration rates
4. Design CO₂ supplementation systems
5. Integrate environmental controls with aquaponic systems
6. Optimize energy efficiency in climate control
7. Specify sensors and control strategies

---

## 1. Heat Load Calculations

### 1.1 Heat Transfer Mechanisms

**Total Heat Load:**
```
Q_total = Q_conduction + Q_infiltration + Q_solar + Q_lighting + Q_equipment + Q_biological

Where each component is in BTU/hr or Watts
```

**Conduction Through Envelope:**
```
Q_cond = U × A × ΔT

Where:
U = Overall heat transfer coefficient (BTU/hr·ft²·°F)
A = Surface area (ft²)
ΔT = Temperature difference (°F)

U-Values (BTU/hr·ft²·°F):
Single glazing: 1.10
Double glazing: 0.50
Insulated wall (R-19): 0.05
Poly covering (double layer): 0.70
Polycarbonate (8mm): 0.60
```

**Example Greenhouse:**
```
Greenhouse: 30 ft × 96 ft × 12 ft high
Location: Vermont (winter design temp: 0°F)
Inside temp: 70°F, ΔT = 70°F

Surfaces:
- Walls (poly double): 2,100 ft² × 0.70 × 70 = 102,900 BTU/hr
- Roof (poly double): 3,000 ft² × 0.70 × 70 = 147,000 BTU/hr
- North wall (insulated): 360 ft² × 0.05 × 70 = 1,260 BTU/hr
- Floor (earth): 2,880 ft² × 0.10 × 35 = 10,080 BTU/hr

Total conduction loss = 261,240 BTU/hr
```

### 1.2 Infiltration Loss

```
Q_infil = 0.018 × CFM × ΔT

Where:
CFM = Air exchange rate (ft³/min)
ΔT = Temperature difference (°F)

Infiltration rates:
Tight greenhouse: 0.5-1.0 air changes/hour
Average greenhouse: 1.0-1.5 air changes/hour
Leaky greenhouse: 2.0+ air changes/hour

Example:
Volume = 30 × 96 × 12 = 34,560 ft³
Air changes = 1.0 per hour
CFM = 34,560 / 60 = 576 CFM

Q_infil = 0.018 × 576 × 70 = 726 BTU/hr
```

### 1.3 Cooling Loads

**Solar Gain:**
```
Q_solar = A × SHGC × I × CF

Where:
A = Glazing area (ft²)
SHGC = Solar heat gain coefficient (0.5-0.9)
I = Solar intensity (BTU/hr·ft²)
CF = Cooling load factor (0.7-1.0)

Peak solar intensity (summer, noon):
Clear sky: 300 BTU/hr·ft² (horizontal)
          250 BTU/hr·ft² (vertical)
```

**Lighting Heat:**
```
Q_lights = Watts × 3.412 BTU/W × Load Factor

LED efficiency: 40-50% light, 50-60% heat
HPS efficiency: 30-40% light, 60-70% heat

Example:
1000W LED fixture
Heat output = 1000 × 3.412 × 0.55 = 1,877 BTU/hr
```

**Transpiration Cooling:**
```
Plants transpire water, evaporation provides cooling:

Q_evap = m × λ

Where:
m = Water evaporation rate (lb/hr)
λ = Latent heat of vaporization (1,040 BTU/lb)

Typical transpiration: 50-100 gallons/day per 1000 ft²
= 0.35-0.70 lb/hr per ft²

For 2,880 ft² growing area:
Evaporation = 2,880 × 0.50 lb/hr = 1,440 lb/hr
Cooling = 1,440 × 1,040 = 1,497,600 BTU/hr!

This is significant cooling in summer
```

---

## 2. HVAC System Design

### 2.1 Heating Systems

**Sizing:**
```
Heater Capacity (BTU/hr) = Heat Loss × Safety Factor

Safety factor: 1.25-1.50

From previous example:
Heat loss = 261,240 BTU/hr
Required capacity = 261,240 × 1.30 = 339,600 BTU/hr

Select: 350,000 BTU/hr unit heater or boiler
```

**Heating Options:**

| Type | Efficiency | Cost | Best Use |
|------|------------|------|----------|
| Natural gas unit heater | 80-95% | $ | Small greenhouses |
| Propane unit heater | 80-90% | $$ | Off-grid locations |
| Hot water boiler | 85-95% | $$$ | Large facilities |
| Heat pump | 200-300%* | $$$ | Moderate climates |
| Waste heat recovery | Varies | $$$$ | Integration opportunity |

*COP expressed as efficiency percentage

**Distribution:**
```
Horizontal Air Flow (HAF):
- Fans mounted at plant height
- Create gentle horizontal airflow (50-100 ft/min)
- Prevents stratification and disease
- Rule: 0.5-1.0 CFM per ft² of floor area

Example:
2,880 ft² growing area
Required: 2,880 × 0.75 = 2,160 CFM
Use (4) 18" circulation fans @ 550 CFM each
```

### 2.2 Cooling Systems

**Ventilation Cooling:**
```
Required CFM = Heat Gain / (ΔT × 0.018)

Where:
ΔT = Acceptable temperature rise (°F)

Example:
Summer heat gain: 500,000 BTU/hr
Allow 5°F rise above outside temp
CFM = 500,000 / (5 × 0.018) = 5,555,556 CFM

This is impractical! Need supplemental cooling.
```

**Evaporative Cooling:**
```
Pad-and-Fan System:

        Exhaust Fans
             ╔═══╗
    ░░░░    ║     ║
    ░░░░ →  ║ GH  ║ →→→→
    ░░░░    ║     ║
    Pad     ╚═══╝

Wet pad cooling efficiency: 70-90%
Dry climates: Better performance
Humid climates: Limited effectiveness

Pad sizing:
Velocity: 150-250 ft/min face velocity
Area = CFM / Velocity

Fan sizing:
Rule: 8-10 CFM per ft² floor area (arid climates)
      4-6 CFM per ft² (humid climates)
```

**Mechanical Cooling:**
```
Requires significant power:
Ton of cooling = 12,000 BTU/hr
Typical AC efficiency: 10-15 EER (BTU/hr per Watt)

For 500,000 BTU/hr load:
Tons = 500,000 / 12,000 = 41.7 tons
Power = 500,000 / 12 EER = 41,667 Watts = 42 kW

At $0.12/kWh, 12 hours/day:
Daily cost = 42 × 12 × $0.12 = $60/day = $1,800/month

Often economically prohibitive for greenhouses
```

---

## 3. Humidity Control

### 3.1 Moisture Balance

**Sources of Moisture:**
```
1. Plant transpiration (largest source)
2. Water surface evaporation (tanks, sumps)
3. Infiltration (outside humidity)
4. Irrigation/spraying

Total moisture = m_trans + m_evap + m_infil
```

**Plant Transpiration:**
```
Transpiration Rate = LAI × Crop Factor × VPD

Typical rates:
Leafy greens: 50-100 gal/day per 1000 ft²
Fruiting crops: 80-150 gal/day per 1000 ft²

Example:
2,880 ft² leafy greens @ 75 gal/day per 1000 ft²
Daily transpiration = 2,880 × 0.075 = 216 gallons/day
= 9 gallons/hour = 75 lb/hr moisture

This must be removed to control humidity!
```

**Open Water Evaporation:**
```
E = A × (Pₛ - Pₐ) × k

Where:
E = Evaporation rate (lb/hr)
A = Water surface area (ft²)
Pₛ = Saturation vapor pressure at water temp
Pₐ = Actual vapor pressure in air
k = Mass transfer coefficient (varies with airflow)

Rule of thumb:
Still water: 0.02-0.04 lb/hr per ft²
Moving water: 0.05-0.10 lb/hr per ft²

Example:
200 ft² of open tank surface
Rate = 200 × 0.03 = 6 lb/hr

Mitigation:
- Cover tanks where possible
- Reduce water surface exposure
- Use sumps instead of open channels
```

### 3.2 Dehumidification

**Ventilation (Simplest):**
```
Required CFM = Moisture Rate / (ωᵢ - ωₒ)

Where:
ω = Humidity ratio (lb moisture/lb dry air)

Limitations:
- Only works when outside humidity < inside
- Energy loss in heating/cooling seasons
- Not reliable year-round
```

**Mechanical Dehumidification:**
```
Dehumidifier capacity (pints/day) = Moisture × Conversion

Moisture removal: 75 lb/hr from plants + 6 from water = 81 lb/hr
Convert: 81 lb/hr × 24 hr/day = 1,944 lb/day
In pints: 1,944 lb × 1.04 pint/lb = 2,022 pints/day

Commercial dehumidifier: 100-300 pints/day capacity
Required: (7-20) units or large industrial system

Large system cost:
250 pints/hr capacity ≈ $15,000
Power consumption: 15-20 kW

This is why covering water and optimizing VPD is critical!
```

**Heat Recovery Ventilation (HRV):**
```
                Exhaust (warm, humid)
                        ↑
    ┌──────────────────┼──────────┐
    │    Heat          │          │
    │    Exchanger  ←──┼──→       │
    │                  │          │
    └──────────────────┼──────────┘
                        ↓
                Fresh (cool, dry)

Efficiency: 60-85% heat recovery
Reduces dehumidification cost significantly
Best for cold climates
```

---

## 4. CO₂ Supplementation

### 4.1 CO₂ Requirements

**Ambient vs. Enriched:**
```
Ambient CO₂: 400-420 ppm
Optimal for C3 plants: 1000-1500 ppm
Maximum safe (humans): 5,000 ppm (8-hr TWA)

Photosynthesis rate increase:
400 ppm (baseline): 100%
800 ppm: 125-140%
1200 ppm: 140-160%
1600 ppm: 145-165% (diminishing returns)

Economic optimum: 1000-1200 ppm
```

### 4.2 CO₂ Injection Rate

```
Injection Rate = (Target - Ambient) × Volume × ACH / 1,000,000

Where:
Target = Desired CO₂ (ppm)
Ambient = Background CO₂ (ppm)
Volume = Space volume (ft³)
ACH = Air changes per hour

Example:
Volume: 34,560 ft³
Target: 1200 ppm
Ambient: 420 ppm
Air changes: 0.5 per hour (sealed greenhouse)

Injection = (1200-420) × 34,560 × 0.5 / 1,000,000
         = 13.5 ft³ CO₂ per hour

Convert to lb/hr:
CO₂ density = 0.1234 lb/ft³
Rate = 13.5 × 0.1234 = 1.67 lb/hr
```

### 4.3 CO₂ Sources

**Bottled CO₂:**
```
Pros: Pure, precise control, clean
Cons: Expensive, tank handling, refills

Cost analysis:
50 lb CO₂ cylinder: $25-35 refill
1.67 lb/hr × 12 hours = 20 lb/day
Cylinder lasts 2.5 days
Monthly cost: ~$450 (12 cylinders)
```

**Burner:**
```
Combustion reaction:
CH₄ + 2O₂ → CO₂ + 2H₂O + Heat

Stoichiometry:
1 lb propane → 3.0 lb CO₂
1 ft³ natural gas → 0.12 lb CO₂

For 1.67 lb/hr CO₂:
Natural gas = 1.67 / 0.12 = 13.9 ft³/hr

Pros: Cheap, provides heat
Cons: Water vapor, combustion byproducts, heat (unwanted in summer)
```

**Exhaust Gas (From Generators):**
```
Generator exhaust ≈ 5-8% CO₂

Requires:
- Gas conditioning (cooling, filtration)
- CO₂ concentration monitoring
- Safety interlocks

Best for facilities with backup generators
Waste heat and CO₂ utilization
```

---

## 5. System Integration

### 5.1 Water-Air Heat Exchange

**Heat Rejection to Water:**
```
During cooling season, reject heat to water:

Q = ṁ × Cp × ΔT

Where:
ṁ = Water mass flow (lb/hr)
Cp = Specific heat (1 BTU/lb·°F)
ΔT = Temperature rise (°F)

Example:
Reject 100,000 BTU/hr to fish tanks
Flow rate: 200 GPM = 100,000 lb/hr
ΔT = 100,000 / (100,000 × 1) = 1°F

Heat exchanger required to prevent overheating fish
```

**Heat Recovery from Water:**
```
During heating season, extract heat from water:

Sources:
- Lighting heat in water
- Biological activity heat
- Pump heat

Typically 10-20% of heating load can be recovered
Requires heat pump or heat exchanger
```

### 5.2 Integrated Control Strategy

**Setpoints:**
```
Parameter      | Day        | Night      | Action
---------------|------------|------------|------------------
Air Temp       | 75-78°F    | 65-70°F    | Heat/cool/vent
Water Temp     | 75-82°F    | 75-82°F    | Heat/cool
Humidity       | 60-70%     | 70-80%     | Dehumidify/vent
CO₂            | 1000-1200  | Ambient    | Inject (lights on)
VPD            | 0.8-1.2kPa | 0.4-0.8kPa | Temp + RH control
```

**Control Sequences:**
```
Heating Mode:
1. Activate heater if T < setpoint - 2°F
2. Stage HAF fans for circulation
3. Close vents to prevent infiltration

Cooling Mode:
1. Open vents if T > setpoint + 2°F
2. Activate evaporative cooling if T > setpoint + 5°F
3. Activate mechanical cooling if T > setpoint + 8°F

Dehumidification Mode:
1. Increase ventilation if outside ω < inside ω
2. Activate dehumidifier if RH > 80%
3. Reduce irrigation frequency

CO₂ Enrichment Mode:
1. Close vents when lights on
2. Inject to maintain 1000-1200 ppm
3. Suspend injection if vents open >20%
```

---

## 6. Energy Optimization

### 6.1 Energy Audit

**Major Energy Consumers:**
```
Component         | % of Total | Optimization Strategies
------------------|------------|-------------------------
Heating           | 30-50%     | Insulation, sealing, thermal curtains
Lighting          | 20-40%     | LED conversion, light management
Cooling/Dehumid   | 10-25%     | Shading, ventilation, covering water
Pumps             | 5-15%      | Efficient pumps, pipe sizing
Other             | 5-10%      | Controls, monitoring
```

### 6.2 Energy Conservation Measures

**Thermal Curtains:**
```
Energy savings: 30-50% heating cost reduction

U-value reduction:
Double poly without curtain: 0.70
Double poly with curtain: 0.40

From previous example:
Roof area: 3,000 ft²
Original loss: 147,000 BTU/hr
With curtain: 3,000 × 0.40 × 70 = 84,000 BTU/hr
Savings: 63,000 BTU/hr = 43% reduction

Curtain cost: $1-2 per ft²
ROI: 1-3 years in cold climates
```

**LED Lighting:**
```
HPS vs LED comparison (per 1000 μmol/s):

HPS: 600W fixture, 60% heat = 360W heat
LED: 330W fixture, 50% heat = 165W heat

Power savings: 270W per fixture
Heat reduction: 195W per fixture = 665 BTU/hr

For 100 fixtures:
Power savings: 27 kW
Annual savings: 27 kW × 12 hr/day × 365 days × $0.12/kWh = $14,200
Cooling savings: 66,500 BTU/hr less heat to remove
```

---

## Summary

Environmental systems integration requires balancing multiple factors:

1. **Heat Loads**: Calculate conduction, infiltration, solar, equipment, and biological loads
2. **HVAC Design**: Size heating and cooling systems with appropriate safety factors
3. **Humidity Control**: Manage plant transpiration and water evaporation
4. **CO₂ Enrichment**: Optimize photosynthesis with controlled injection
5. **System Integration**: Leverage heat exchange between air and water systems
6. **Energy Efficiency**: Implement insulation, LED lighting, and heat recovery

Professional environmental system specifications include:
- Complete heat load calculations
- Equipment sizing and selection
- Psychrometric analysis
- Control sequences and setpoints
- Energy consumption estimates
- Integration with aquaponic system operations

---

## Check Your Understanding

1. Calculate conduction heat loss for a greenhouse: 40 ft × 100 ft × 14 ft high, double poly (U=0.70), design ΔT = 65°F.

2. Size a heater for the greenhouse in #1 with 1.0 air changes per hour and 30% safety factor.

3. A facility has 4,000 ft² of leafy greens transpiring 80 gal/day per 1000 ft². Calculate moisture removal in lb/hr.

4. Calculate CO₂ injection rate for a 50,000 ft³ greenhouse with 0.75 ACH, targeting 1200 ppm from 420 ppm ambient.

5. Design a HAF system for 3,600 ft² growing area at 0.8 CFM/ft². How many 600 CFM fans are needed?

6. Calculate the temperature rise if rejecting 150,000 BTU/hr to 250 GPM of recirculating water.

7. Compare annual operating cost of (10) 600W HPS vs (10) 330W LED fixtures operating 14 hours/day at $0.13/kWh.

8. A thermal curtain reduces roof U-value from 0.70 to 0.35 on 4,000 ft² of greenhouse. Calculate BTU/hr savings with ΔT = 60°F.

9. Calculate the cooling capacity (in tons) needed for 720,000 BTU/hr heat gain.

10. Design a control sequence for a greenhouse that integrates heating, ventilation, and CO₂ injection. Specify setpoints and staging.

---

**Next Module:** Module 6 - Grow System Engineering

*"Every watt of energy you use twice is a watt you don't have to pay for twice."* - Energy efficiency principle
