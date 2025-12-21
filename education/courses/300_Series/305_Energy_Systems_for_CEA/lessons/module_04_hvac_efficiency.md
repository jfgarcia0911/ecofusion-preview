# Module 4: HVAC Efficiency

## Learning Objectives

By the end of this module, you will be able to:
- Optimize HVAC systems for CEA applications
- Calculate heating and cooling loads
- Implement energy-efficient climate control strategies
- Design dehumidification systems for efficiency
- Reduce HVAC energy costs by 20-40%

---

## 4.1 HVAC Energy in CEA

### Energy Consumption Breakdown

```
╔══════════════════════════════════════════════════════════════════╗
║              HVAC ENERGY BY FACILITY TYPE                        ║
╠══════════════════════════════════════════════════════════════════╣
║                                                                  ║
║  GREENHOUSE (traditional)                                        ║
║  ═══════════════════════                                         ║
║    Heating      ████████████████████████████████░ 70-80%        ║
║    Ventilation  ████████░░░░░░░░░░░░░░░░░░░░░░░░ 15-20%        ║
║    Cooling      ████░░░░░░░░░░░░░░░░░░░░░░░░░░░░  5-10%        ║
║                                                                  ║
║  INDOOR/VERTICAL FARM                                            ║
║  ═══════════════════════                                         ║
║    Cooling      ████████████████████████░░░░░░░░ 45-55%        ║
║    Dehumidification ████████████████░░░░░░░░░░░░ 30-40%        ║
║    Air circulation  ████░░░░░░░░░░░░░░░░░░░░░░░░  8-12%        ║
║    Heating      ██░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2-5%         ║
║                                                                  ║
╚══════════════════════════════════════════════════════════════════╝
```

### Typical Energy Costs

| Facility Type | Heating | Cooling | Dehumid. | Total HVAC |
|---------------|---------|---------|----------|------------|
| Greenhouse (minimal light) | $8-15/sq ft | $1-2/sq ft | $1-3/sq ft | $10-20/sq ft |
| Greenhouse (supplemental) | $6-10/sq ft | $2-4/sq ft | $2-4/sq ft | $10-18/sq ft |
| Indoor farm | $0.50-1/sq ft | $8-12/sq ft | $5-8/sq ft | $14-21/sq ft |

---

## 4.2 Heating System Efficiency

### Heating Load Calculations

**Basic Heat Loss Formula:**

```
Q = U × A × ΔT

Where:
  Q = Heat loss (Btu/hr)
  U = Overall heat transfer coefficient (Btu/hr-sq ft-°F)
  A = Surface area (sq ft)
  ΔT = Temperature difference (°F)

Example: 10,000 sq ft Greenhouse
─────────────────────────────────────────────────────────────

Glazing: 10,000 sq ft double poly (U = 0.7)
Outdoor temp: 20°F
Indoor setpoint: 70°F
ΔT = 70 - 20 = 50°F

Heat loss:
  Q = 0.7 × 10,000 × 50 = 350,000 Btu/hr

Add infiltration (1 air change/hour):
  Volume = 10,000 sq ft × 12 ft height = 120,000 cu ft
  Infiltration = 120,000 × 1.08 × 50 = 6,480,000 Btu/hr
  Per hour = 6,480,000 ÷ 60 = 108,000 Btu/hr

Total design heat load: 458,000 Btu/hr ≈ 460 MBH

Boiler sizing (with 25% safety factor):
  Required capacity: 460,000 × 1.25 = 575,000 Btu/hr
  Select: 600 MBH boiler
```

### U-Values for Common Materials

```
THERMAL PERFORMANCE OF GLAZING SYSTEMS
═══════════════════════════════════════════════════════════════════

Material                           U-Value (Btu/hr-sq ft-°F)
─────────────────────────────────────────────────────────────────
Single glass                       1.13
Double glass (1/2" air space)      0.48
Double glass (argon filled)        0.44
Single poly film                   1.15
Double poly (inflated)             0.70
Double poly + thermal curtain      0.35
Triple poly                        0.50
Polycarbonate (8mm twin-wall)      0.62
Polycarbonate (16mm triple-wall)   0.40

INSULATED WALLS
─────────────────────────────────────────────────────────────────
R-10 insulation                    0.10
R-20 insulation                    0.05
R-30 insulation                    0.033
R-40 insulation                    0.025

Lower U-value = Better insulation = Less heat loss
```

### Heating Efficiency Improvements

**1. Thermal Screens/Curtains**

```
THERMAL CURTAIN ANALYSIS
═══════════════════════════════════════════════════════════════════

Scenario: 10,000 sq ft greenhouse
Current: Double poly (U = 0.70)
Addition: Thermal curtain deployed at night

Effective U-value with curtain: 0.35 (50% reduction)

Night operation: 14 hours/day × 180 heating days = 2,520 hours

Heat Loss Reduction:
  Without curtain: 0.70 × 10,000 × 50°F × 2,520 hrs
                 = 882,000,000 Btu = 882 MMBtu

  With curtain: 0.35 × 10,000 × 50 × 2,520
              = 441 MMBtu

  Savings: 441 MMBtu/year (50%)

Natural Gas Savings (80% efficient boiler):
  441 MMBtu ÷ 0.80 efficiency = 551.25 MMBtu input
  551.25 ÷ 0.1 MMBtu/therm = 5,513 therms/year

Cost Savings: 5,513 therms × $1.20 = $6,616/year

Implementation:
  Material & installation: $2.50/sq ft × 10,000 = $25,000
  Payback: $25,000 ÷ $6,616 = 3.8 years

Additional Benefits:
  ✓ Summer shade (cooling savings)
  ✓ Automated operation
  ✓ Blackout capability (photoperiod control)
```

**2. Air Sealing**

```
INFILTRATION REDUCTION
═══════════════════════════════════════════════════════════════════

Typical greenhouse: 1.5 air changes/hour (ACH)
Improved sealing: 0.8 ACH
Reduction: 0.7 ACH

Volume: 10,000 sq ft × 12 ft = 120,000 cu ft

Infiltration heat loss at 50°F ΔT:
  Formula: CFM × 1.08 × ΔT

Before: (120,000 cu ft × 1.5 ACH ÷ 60) × 1.08 × 50
      = 3,000 CFM × 1.08 × 50 = 162,000 Btu/hr

After: (120,000 × 0.8 ÷ 60) × 1.08 × 50
     = 1,600 CFM × 1.08 × 50 = 86,400 Btu/hr

Savings: 75,600 Btu/hr

Annual (heating season 4,320 hrs):
  75,600 Btu/hr × 4,320 hrs = 326.6 MMBtu

Natural gas: 326.6 ÷ 0.8 ÷ 0.1 = 4,082 therms
Cost savings: $4,899/year

Implementation cost: $3,500
  - Weather stripping
  - Door sweeps
  - Poly repair
  - Vent sealing

Payback: 0.7 years (8 months)
```

**3. Zone Heating**

```
ZONE CONTROL STRATEGY
═══════════════════════════════════════════════════════════════════

Facility: 10,000 sq ft divided into 4 zones
Crop Requirements:
  - Propagation: 75°F (2,000 sq ft)
  - Vegetative: 68°F (3,000 sq ft)
  - Mature: 65°F (3,000 sq ft)
  - Storage: 55°F (2,000 sq ft)

Single-Zone Scenario (all at 70°F):
  Heat loss: 460,000 Btu/hr at 20°F outdoor

Multi-Zone Scenario:
  Propagation (75°F): 0.7 × 2,000 × 55 = 77,000 Btu/hr
  Vegetative (68°F):  0.7 × 3,000 × 48 = 100,800 Btu/hr
  Mature (65°F):      0.7 × 3,000 × 45 = 94,500 Btu/hr
  Storage (55°F):     0.7 × 2,000 × 35 = 49,000 Btu/hr
  ──────────────────────────────────────────────────
  Total: 321,300 Btu/hr

Reduction: 460,000 - 321,300 = 138,700 Btu/hr (30%)

Annual savings (4,320 hrs):
  138,700 × 4,320 = 599.2 MMBtu
  Natural gas: 7,490 therms
  Cost: $8,988/year

Zone implementation:
  Separate thermostats: $2,000
  Zone valves/dampers: $5,500
  Total: $7,500

Payback: 0.8 years (10 months)
```

---

## 4.3 Cooling System Optimization

### Cooling Load Calculations

**Sensible Cooling Load:**

```
GREENHOUSE COOLING LOAD COMPONENTS
═══════════════════════════════════════════════════════════════════

10,000 sq ft greenhouse, summer day

1. Solar Gain through Glazing:
   Peak solar: 250 Btu/hr-sq ft
   SHGC (shading coefficient): 0.6
   Solar load: 10,000 × 250 × 0.6 = 1,500,000 Btu/hr

2. Equipment Heat Gain:
   Lighting: 20 kW × 3,412 Btu/kW = 68,240 Btu/hr
   Pumps: 5 kW × 3,412 = 17,060 Btu/hr
   Equipment total: 85,300 Btu/hr

3. Crop Transpiration (cooling credit):
   Evaporation: -200,000 Btu/hr (reduces load)

4. Ventilation Load:
   Outdoor air: 85°F, Indoor target: 78°F
   ΔT = 7°F
   CFM needed for exhaust: 20,000 CFM
   Load: 20,000 × 1.08 × 7 = 151,200 Btu/hr

Total Cooling Load: 1,536,500 Btu/hr ≈ 128 tons

Cooling Options:
  a) Natural ventilation (free): Limited effectiveness
  b) Evaporative cooling ($): 70-80% effective in dry climates
  c) Mechanical AC ($$$$): 100% effective, high energy cost
```

### Natural Ventilation Optimization

```
VENTILATION RATE CALCULATIONS
═══════════════════════════════════════════════════════════════════

Target: 1-2 air changes per minute (ACM) for cooling

Greenhouse volume: 120,000 cu ft
Required CFM: 120,000 × 1.5 ACM = 180,000 CFM

Exhaust Fan Sizing:
  Number of fans: 180,000 ÷ 10,000 CFM per fan = 18 fans

Energy Consumption:
  Per fan: 1.5 HP × 0.746 kW/HP = 1.12 kW
  Total: 18 × 1.12 = 20.2 kW

  Summer operation: 8 hours/day × 120 days
  Annual: 20.2 kW × 960 hrs = 19,392 kWh
  Cost: $2,327/year (at $0.12/kWh)

Efficiency Improvements:
  • Variable speed fans (VFD): 30-50% savings
  • Staged operation: Run only fans needed
  • Temperature-based control: Optimize runtime
  • High-efficiency motors: 2-5% savings

With VFD (40% average savings):
  Energy: 19,392 × 0.60 = 11,635 kWh
  Cost: $1,396/year
  Savings: $931/year

VFD cost: $4,500 (for 18 fans)
Payback: 4.8 years
```

### Evaporative Cooling

```
EVAPORATIVE COOLING ANALYSIS
═══════════════════════════════════════════════════════════════════

System: Pad & fan evaporative cooling
Facility: 10,000 sq ft × 12 ft = 120,000 cu ft

Components:
  Cooling pads: 200 sq ft × $15/sq ft = $3,000
  Fans (6 × 10,000 CFM): 6 × $1,200 = $7,200
  Distribution system: $2,500
  Controls: $1,800
  Installation: $3,000
  Total cost: $17,500

Performance (80°F dry bulb, 30% RH example):
  Wet bulb temperature: 61°F
  Achievable indoor: 65-68°F
  Temperature drop: 12-15°F

Energy Consumption:
  Fans: 6 × 1.12 kW = 6.7 kW
  Pump: 0.5 kW
  Total: 7.2 kW

  Summer operation: 8 hrs/day × 120 days = 960 hours
  Annual energy: 6,912 kWh
  Cost: $830/year

Comparison to Mechanical AC (same load):
  Required capacity: 100 tons
  Power: 100 tons × 1.2 kW/ton = 120 kW
  Annual energy: 115,200 kWh
  Cost: $13,824/year

Savings: $12,994/year
Payback: $17,500 ÷ $12,994 = 1.3 years

Limitations:
  ✗ Not effective in humid climates (>60% RH)
  ✓ Works best in dry climates (<40% RH)
  ✓ Adds humidity (good for some crops)
```

---

## 4.4 Dehumidification Strategies

### Dehumidification Load

**Moisture Removal Calculation:**

```
MOISTURE LOAD ANALYSIS
═══════════════════════════════════════════════════════════════════

Indoor farm: 5,000 sq ft, leafy greens
Plant density: 25 plants/sq ft = 125,000 plants
Transpiration: 10 ml/plant/day = 1,250 liters/day = 330 gallons/day

Moisture removal needed: 330 gallons/day × 8.34 lbs/gallon
                        = 2,752 lbs water/day

Energy Required (refrigerant dehumidification):
  Energy factor: 0.85 kWh/lb (typical)
  Daily energy: 2,752 lbs × 0.85 kWh/lb = 2,339 kWh/day
  Annual: 853,735 kWh/year
  Cost: $102,448/year (at $0.12/kWh)

This represents 40-50% of total energy in indoor farms!
```

### Efficient Dehumidification Methods

**Method Comparison:**

```
DEHUMIDIFICATION TECHNOLOGY COMPARISON
═══════════════════════════════════════════════════════════════════

Method              Energy     Cost    Heat      Effectiveness
                    Factor              Recovery
─────────────────────────────────────────────────────────────────
Refrigerant         0.7-1.0    $$$$    Possible  Excellent
  (standard)        kWh/lb

Heat pump           0.4-0.6    $$$$    Integral  Excellent
  (optimized)       kWh/lb

Desiccant wheel     1.2-1.8    $$$     Yes       Good
  (requires heat)   kWh/lb

Ventilation         Variable   $       No        Climate-dependent
  (free cooling)

Combined            0.3-0.5    $$$$$   Yes       Excellent
  (heat pump +      kWh/lb
   recovery)
```

**Example: Heat Pump Dehumidifier with Recovery**

```
ADVANCED DEHUMIDIFICATION SYSTEM
═══════════════════════════════════════════════════════════════════

System: Heat pump dehumidifier with heat recovery
Capacity: 330 gallons/day (2,752 lbs/day)

Energy Consumption:
  Improved energy factor: 0.45 kWh/lb
  Daily: 2,752 lbs × 0.45 = 1,238 kWh/day
  Annual: 452,000 kWh/year
  Cost: $54,240/year

Comparison to Standard:
  Standard: $102,448/year
  Advanced: $54,240/year
  Savings: $48,208/year (47% reduction)

Heat Recovery:
  Latent heat: 2,752 lbs × 1,000 Btu/lb = 2,752,000 Btu/day
  Sensible heat (compressor): 1,238 kWh × 3,412 = 4,224,000 Btu/day
  Total available: 6,976,000 Btu/day

  If heating needed (winter):
    Annual heat recovered: 1,273 MMBtu
    Natural gas offset: 15,913 therms
    Value: $19,096/year

System Cost:
  Equipment: $85,000
  Installation: $25,000
  Total: $110,000

Payback (energy savings only): 2.3 years
Payback (with heat recovery): 1.6 years
```

---

## 4.5 Equipment Efficiency

### High-Efficiency Equipment Selection

**Boiler Efficiency:**

```
BOILER COMPARISON
═══════════════════════════════════════════════════════════════════

Type                    AFUE    Cost        Application
─────────────────────────────────────────────────────────────────
Atmospheric             78-82%  $          Baseline
Standard efficiency     80-84%  $-$$       Common
High-efficiency         85-90%  $$-$$$     Recommended
Condensing              92-98%  $$$-$$$$   Best performance
Modulating condensing   95-98%  $$$$       Premium

Annual Comparison (500 MMBtu/year heat requirement):

Atmospheric (80% AFUE):
  Input required: 500 ÷ 0.80 = 625 MMBtu
  Natural gas: 6,250 therms
  Cost: $7,500/year

Condensing (96% AFUE):
  Input required: 500 ÷ 0.96 = 521 MMBtu
  Natural gas: 5,210 therms
  Cost: $6,252/year

Annual Savings: $1,248/year
Incremental cost: $12,000
Payback: 9.6 years

But consider:
  + Longer lifespan (condensing boilers last longer)
  + Lower maintenance costs
  + Better modulation = more precise control
  + Environmental benefits

With rebates ($3,000 typical):
  Net cost: $9,000
  Payback: 7.2 years
```

**Air Conditioner/Heat Pump Efficiency:**

```
COOLING EQUIPMENT COMPARISON
═══════════════════════════════════════════════════════════════════

Rating System:
  SEER (Seasonal Energy Efficiency Ratio) = Btu/Watt-hour
  EER (Energy Efficiency Ratio) = Btu/Watt
  Higher numbers = better efficiency

Equipment         SEER    kW/ton    Annual Cost (100 tons, 1000 hrs)
───────────────────────────────────────────────────────────────────
Minimum (2020)    13      1.31      $15,720
Standard          15      1.14      $13,680
High-efficiency   18      0.95      $11,400
Premium           21      0.81      $9,720

Comparison: Premium vs. Standard
  Annual savings: $13,680 - $9,720 = $3,960/year
  Incremental cost: 100 tons × $800/ton = $80,000
  Simple payback: 20.2 years

BUT for CEA with high cooling hours (3,000+ hrs/year):
  Annual savings: $3,960 × 3 = $11,880/year
  Payback: 6.7 years ← Much more attractive

Key Lesson: High-efficiency equipment pays off better with:
  • High operating hours
  • High energy costs
  • Critical cooling needs
```

---

## 4.6 Control Strategies

### Temperature Setpoint Optimization

```
OPTIMAL SETPOINT STRATEGY
═══════════════════════════════════════════════════════════════════

Crop: Leafy greens
Optimal growth: 68-72°F
Tolerance range: 60-78°F

Standard Setpoints:
  Day: 72°F
  Night: 68°F
  Average: 70°F

Optimized Setpoints:
  Day: 70°F (2° reduction)
  Night: 64°F (4° reduction)
  Average: 67°F

Energy Impact (heating):
  Each 1°F reduction = 3-5% energy savings
  Average reduction: 3°F
  Savings: 3 × 4% = 12% heating energy

Annual heating: 50,000 therms × $1.20 = $60,000
Savings: $60,000 × 12% = $7,200/year

Production Impact:
  Growth rate: ~3% slower (acceptable trade-off)
  Quality: No impact if within tolerance

Implementation: $0 (just programming)
Payback: Immediate
```

### Deadband Control

```
DEADBAND STRATEGY
═══════════════════════════════════════════════════════════════════

Problem: Too-narrow deadband causes equipment short-cycling

Poor Control:
  Heat setpoint: 70°F
  Cool setpoint: 72°F
  Deadband: 2°F
  Result: Frequent heating/cooling switching

Optimized Control:
  Heat setpoint: 68°F
  Cool setpoint: 74°F
  Deadband: 6°F
  Result: Reduced equipment cycling

Energy Savings:
  Reduced runtime: 15-25%
  Reduced wear: Longer equipment life
  Better humidity control

Example (10,000 sq ft greenhouse):
  Current HVAC cost: $40,000/year
  Savings: 20% = $8,000/year

  Control upgrade: $3,500
  Payback: 0.4 years (5 months)
```

### Demand-Based Ventilation

```
CO2-BASED VENTILATION CONTROL
═══════════════════════════════════════════════════════════════════

Traditional: Continuous ventilation
  Fan: 10,000 CFM × 1.5 HP = 1.12 kW
  Runtime: 12 hrs/day × 365 days = 4,380 hrs/year
  Energy: 4,905 kWh/year
  Cost: $588/year

CO2-Optimized:
  Monitor CO2 levels
  Ventilate only when CO2 < 800 ppm
  Average runtime: 40% of traditional

  Energy: 4,905 × 0.40 = 1,962 kWh/year
  Cost: $235/year

  Savings: $353/year

CO2 sensor & control: $1,200
Payback: 3.4 years

Additional benefits:
  + Optimized CO2 for growth
  + Reduced heat loss (winter)
  + Better humidity control
```

---

## 4.7 Heat Recovery Systems

### Air-to-Air Heat Recovery

```
HEAT RECOVERY VENTILATOR (HRV) ANALYSIS
═══════════════════════════════════════════════════════════════════

Application: Indoor farm with continuous ventilation
Exhaust rate: 10,000 CFM
Temperature difference (winter): 50°F average

Heat Loss Without Recovery:
  10,000 CFM × 1.08 × 50°F = 540,000 Btu/hr
  Operating hours: 8,760 hours/year
  Annual loss: 4,730 MMBtu

Heat Recovered (75% efficient HRV):
  4,730 × 0.75 = 3,548 MMBtu/year

Natural Gas Savings:
  3,548 MMBtu ÷ 0.85 boiler efficiency = 4,174 MMBtu input
  41,740 therms/year
  Savings: $50,088/year

HRV System Cost:
  Equipment: $35,000
  Installation: $15,000
  Total: $50,000

Simple Payback: 1.0 years

Additional Benefits:
  ✓ Pre-cooling in summer
  ✓ Humidity recovery
  ✓ Reduced heating/cooling load
```

### Waste Heat Recovery from Dehumidifiers

```
DEHUMIDIFIER HEAT CAPTURE
═══════════════════════════════════════════════════════════════════

Indoor farm dehumidifier:
  Capacity: 2,000 lbs water/day
  Heat output: 2,000 × 1,000 Btu/lb = 2,000,000 Btu/day
  Plus compressor heat: 1,500,000 Btu/day
  Total: 3,500,000 Btu/day

Without Recovery:
  Heat exhausted to outdoor (wasted)
  Need separate heating in winter

With Recovery (water-to-air heat exchanger):
  Capture 80% of heat: 2,800,000 Btu/day
  Heating season (180 days): 504 MMBtu/year

Heating Offset:
  Natural gas: 5,040 therms
  Savings: $6,048/year

Heat Recovery System:
  Heat exchanger: $8,500
  Plumbing/ductwork: $4,500
  Controls: $2,000
  Total: $15,000

Payback: 2.5 years
```

---

## 4.8 Case Study: Complete HVAC Optimization

### Facility Profile

**Green Valley Greenhouse**
- Size: 15,000 sq ft
- Crops: Tomatoes (year-round)
- Location: Midwest (cold winters, warm summers)
- Current energy: $85,000/year HVAC costs

### Current System

```
EXISTING HVAC SYSTEM
═══════════════════════════════════════════════════════════════════

Heating:
  Equipment: 800 MBH atmospheric boiler (78% AFUE)
  Annual use: 75,000 therms
  Cost: $90,000/year
  Setpoint: 70°F constant

Cooling:
  Equipment: Exhaust fans (no cooling pads)
  Power: 15 kW
  Annual use: 7,200 kWh
  Cost: $864/year
  Poor temperature control in summer

Ventilation:
  Constant speed fans
  No heat recovery
  High infiltration (1.8 ACH)

Total Annual Cost: $90,864/year
```

### Recommended Improvements

```
HVAC OPTIMIZATION PACKAGE
═══════════════════════════════════════════════════════════════════

Improvement 1: High-Efficiency Condensing Boiler
  Current: 78% AFUE → Proposed: 95% AFUE

  Savings calculation:
    Current input: 75,000 therms
    New input: 75,000 × 0.78 ÷ 0.95 = 61,579 therms
    Savings: 13,421 therms/year
    Value: $16,105/year

  Cost: $28,000 (with rebate: $25,000)
  Payback: 1.6 years

Improvement 2: Thermal Curtain System
  Reduce nighttime U-value by 50%

  Savings: 20,000 therms/year
  Value: $24,000/year

  Cost: $37,500
  Payback: 1.6 years

Improvement 3: Air Sealing
  Reduce infiltration from 1.8 to 0.9 ACH

  Savings: 8,500 therms/year
  Value: $10,200/year

  Cost: $5,000
  Payback: 0.5 years

Improvement 4: Evaporative Cooling System
  Add cooling pads and optimize fans

  Better temperature control
  Reduced crop stress
  Energy: Minimal increase

  Cost: $22,000
  Payback: Via increased yield (5-10%)

Improvement 5: Control System Upgrade
  Optimized setpoints
  Deadband control
  Weather-based adjustments

  Savings: 10% overall = $9,000/year
  Cost: $8,500
  Payback: 0.9 years

───────────────────────────────────────────────────────────────────
TOTAL PACKAGE SUMMARY
───────────────────────────────────────────────────────────────────

Total Investment: $106,000
Annual Savings: $59,305/year (65% reduction)
Simple Payback: 1.8 years
10-Year NPV (5%): $351,683

New Annual HVAC Cost: $31,559 (vs. $90,864)
Savings: $59,305/year
```

---

## Key Takeaways

1. **Heating dominates greenhouse energy** - Focus here first
2. **Dehumidification is expensive** - Indoor farms must optimize
3. **Thermal curtains are low-hanging fruit** - Often <4 year payback
4. **Equipment efficiency matters** - Especially with high operating hours
5. **Controls are critical** - Often best ROI of any upgrade
6. **Heat recovery pays off** - Capture and reuse waste heat
7. **Design holistically** - Lighting, HVAC, and envelope interact

---

## Practice Exercise

Analyze an HVAC system for a 5,000 sq ft greenhouse:
1. Calculate design heating load
2. Estimate annual heating energy
3. Identify 3 efficiency improvements
4. Calculate savings and payback for each
5. Recommend implementation priority

---

**Next Module**: Module 5 - Water & Pumping Efficiency

---

*Course 305: Energy Systems for CEA | Module 4 | EcoFusion Academy*
