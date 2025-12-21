# Module 5: HVAC System Design - Part 2: Advanced Integration

## Learning Objectives

By the end of this module, you will be able to:
- Design multi-zone climate control systems for diverse crop requirements
- Implement heat recovery strategies to improve energy efficiency
- Integrate HVAC systems with growing systems and infrastructure
- Develop sophisticated control strategies and automation
- Select and specify appropriate HVAC equipment

## 5.1 Multi-Zone Climate Control Systems

### Zone Design Principles

```
CLIMATE ZONING STRATEGIES
=========================

GREENHOUSE ZONING OPTIONS
========================

1. SINGLE ZONE (Small facilities)
   ┌─────────────────────────────┐
   │                             │
   │    Uniform climate          │
   │    throughout               │
   │                             │
   └─────────────────────────────┘
   Pros: Simple, low cost
   Cons: Limited crop flexibility

2. HORIZONTAL ZONES (Multi-crop)
   ┌─────────┬──────────┬────────┐
   │ Zone 1  │ Zone 2   │ Zone 3 │
   │ 70°F    │ 75°F     │ 68°F   │
   │ Lettuce │ Tomato   │ Herbs  │
   └─────────┴──────────┴────────┘
   Pros: Crop specialization
   Cons: Thermal bridging between zones

3. VERTICAL ZONES (By height)
   ┌─────────────────────────────┐
   │   Upper: Warmer (75°F)      │
   ├─────────────────────────────┤
   │   Mid: Target (70°F)        │
   ├─────────────────────────────┤
   │   Lower: Cooler (68°F)      │
   └─────────────────────────────┘
   Challenge: Stratification control
   Solution: HAF circulation fans

4. HYBRID ZONING
   ┌──────────┬──────────┐
   │ Prop.    │ Veg      │ ← Cooler
   │ 72°F     │ 70°F     │
   ├──────────┴──────────┤
   │ Production          │ ← Warmer
   │ 75°F               │
   └─────────────────────┘
   Pros: Growth stage optimization
```

### Zone Separation Methods

**PHYSICAL SEPARATION**

```
1. FULL WALL SEPARATION
   ┌─────────────║─────────────┐
   │   Zone A    ║   Zone B    │
   │             ║             │
   │   Insulated wall          │
   │   R-10 to R-20            │
   └─────────────╨─────────────┘

   Benefits:
   - Complete climate isolation
   - Independent HVAC systems
   - Different crop types/schedules

   Considerations:
   - Higher construction cost
   - Reduced flexibility
   - Access doors required

2. POLY CURTAIN SEPARATION
   ┌─────────────░─────────────┐
   │   Zone A    ░   Zone B    │
   │             ░             │
   │   Retractable curtain     │
   │   Thermal efficiency 60-80%│
   └─────────────░─────────────┘

   Benefits:
   - Flexible reconfiguration
   - Lower cost
   - Can be automated

   Considerations:
   - Not airtight
   - Some thermal bridging
   - Regular maintenance

3. AIRLOCK VESTIBULES
   ┌─────────┐  ┌─┐  ┌─────────┐
   │ Zone A  │──│A│──│ Zone B  │
   │         │  │L│  │         │
   │         │  └─┘  │         │
   └─────────┘       └─────────┘

   Purpose: Minimize air transfer during access
   Design: Double doors with interlock
```

### Independent HVAC per Zone

**ZONE EQUIPMENT LAYOUT**

```
MULTI-ZONE GREENHOUSE SYSTEM
=============================

Zone 1: Propagation (72°F, 85% RH)
┌──────────────────────────┐
│ [Boiler] [Humidifier]    │
│    ↓         ↓           │
│  ══════════════          │
│  Poly tube distribution  │
└──────────────────────────┘

Zone 2: Vegetative (70°F, 65% RH)
┌──────────────────────────┐
│ [Unit Heater] [Exhaust]  │
│    ↓            ↑        │
│  Natural ventilation     │
└──────────────────────────┘

Zone 3: Flowering (75°F, 60% RH)
┌──────────────────────────┐
│ [Heat Pump] [Dehumid.]   │
│    ↓           ↓         │
│  Ducted distribution     │
└──────────────────────────┘

Central Control System
├─ Zone temperature sensors
├─ Zone humidity sensors
├─ Equipment control
└─ Alarm management
```

**LOAD DIVERSITY FACTOR**

```
When designing central systems (chillers, boilers):
Use diversity factor to avoid oversizing

Total connected load = Sum of all zone loads
Actual simultaneous load = Connected load × Diversity factor

Diversity factors (typical):
- 2-3 zones: 0.90-0.95
- 4-6 zones: 0.80-0.90
- 7-10 zones: 0.75-0.85
- 10+ zones: 0.70-0.80

Example:
5 zones, each with 100 kW cooling load
Connected load: 5 × 100 = 500 kW
Diversity factor: 0.85
Design load: 500 × 0.85 = 425 kW
Savings: 75 kW (15% equipment reduction)
```

## 5.2 Heat Recovery and Energy Efficiency

### Heat Recovery Methods

**HEAT RECOVERY TECHNOLOGIES**

```
┌──────────────────────────────────────────────────────────┐
│  HEAT RECOVERY DEVICE COMPARISON                         │
├────────────────┬──────────┬──────────┬──────────┬────────┤
│ Type           │Efficiency│ Moisture │ Cost     │ Notes  │
│                │ (%)      │ Transfer │          │        │
├────────────────┼──────────┼──────────┼──────────┼────────┤
│ Sensible       │ 50-80%   │ No       │ Low      │Simple  │
│ Wheel          │          │          │          │        │
│                │          │          │          │        │
│ Enthalpy       │ 70-85%   │ Yes      │ Medium   │Best    │
│ Wheel          │          │          │          │overall │
│                │          │          │          │        │
│ Plate Heat     │ 60-75%   │ No       │ Medium   │No cross│
│ Exchanger      │          │          │          │contam. │
│                │          │          │          │        │
│ Heat Pipe      │ 45-65%   │ No       │ Medium   │Passive │
│                │          │          │          │        │
│                │          │          │          │        │
│ Run-Around     │ 50-65%   │ No       │ High     │Remote  │
│ Loop           │          │          │          │ducts   │
└────────────────┴──────────┴──────────┴──────────┴────────┘
```

**ENTHALPY WHEEL SYSTEM**

```
ENERGY RECOVERY VENTILATOR (ERV)
=================================

Exhaust Air                    Supply Air
(warm, humid)                  (cool, dry)
    →  ┌─────────────┐  ←
    →  │    ⊗⊗⊗⊗⊗   │  ←  Heat and
    →  │   Rotating  │  ←  moisture
    →  │    Wheel    │  ←  transfer
    →  │    ⊗⊗⊗⊗⊗   │  ←
    →  └─────────────┘  ←
Outside Air                    Exhaust
(cool, dry)                    (warm, humid)

Performance Example:
Outside air: 95°F, 40% RH (h = 38 BTU/lb)
Exhaust air: 75°F, 60% RH (h = 28.5 BTU/lb)
Effectiveness: 75%

Supply air entering:
T = 95 - 0.75(95-75) = 80°F
h = 38 - 0.75(38-28.5) = 30.9 BTU/lb

Energy saved per CFM:
ΔH = 38 - 30.9 = 7.1 BTU/lb
For 1000 CFM @ 0.075 lb/ft³:
Savings = 1000 × 60 × 0.075 × 7.1 = 31,950 BTU/hr

Annual savings (5000 hours operation):
31,950 × 5000 = 159,750,000 BTU/yr
At $0.10/kWh: $4,685/year
```

### Waste Heat Utilization

**SOURCES OF WASTE HEAT IN CEA**

```
HEAT RECOVERY OPPORTUNITIES
===========================

1. LIGHTING HEAT CAPTURE
   LED Fixtures (20% waste heat)
   ┌────────────────┐
   │  ████ LED ████ │ ← 35 W/ft² input
   │   ↓  Heat  ↓   │   7 W/ft² heat
   │  [Capture sys] │
   └────────────────┘

   Methods:
   - Liquid-cooled LED fixtures
   - Overhead return air plenum
   - Dedicated exhaust above lights

2. DEHUMIDIFIER CONDENSER HEAT
   Refrigerant dehumidification
   Evaporator: 55°F (removes moisture)
      ↓
   Compressor (adds heat of compression)
      ↓
   Condenser: 100-120°F (useful heat!)

   Application: Greenhouse heating
   COP improvement: 30-50%

3. EQUIPMENT HEAT
   Sources:
   - Pump motors
   - Air compressors
   - Refrigeration condensers
   - Electrical panels

   Recovery:
   - Ambient capture for space heating
   - Water loop heat pumps

4. COMBINED HEAT AND POWER (CHP)
   ┌────────────────────────┐
   │  Natural Gas          │
   │        ↓              │
   │  Engine/Turbine       │
   │   ↓            ↓      │
   │ Electricity  Heat     │
   │   (35-45%)  (40-50%)  │
   └────────────────────────┘

   Heat uses:
   - Space heating
   - CO₂ for enrichment (clean exhaust)
   - Hot water

   Overall efficiency: 75-85%
```

**CHP SYSTEM SIZING EXAMPLE**

```
Facility Requirements:
Electrical: 500 kW average
Heating: 2,000,000 BTU/hr (586 kW thermal)
Operating: 8,000 hours/year

CHP System:
Electrical output: 500 kW
Heat recovery: 500 kW × 1.0 (heat-to-power ratio)
                = 500 kW (1,706,000 BTU/hr)

Performance:
Fuel input: 500 kW / 0.38 efficiency = 1,316 kW (HHV)
Heat recovery: 500 kW (from jacket, exhaust)
Total useful: 500 + 500 = 1,000 kW
Overall efficiency: 1,000 / 1,316 = 76%

Economics (simplified):
Natural gas: $0.50/therm ($14.66/MMBTU)
Grid electricity: $0.12/kWh

Annual fuel cost: 1,316 kW × 8,000 hr × 3,412 BTU/kWh
                  ÷ 100,000 BTU/therm × $0.50
                  = $180,000/year

Avoided costs:
Electricity: 500 kW × 8,000 × $0.12 = $480,000
Heat: 1,706,000 BTU/hr × 8,000 / 100,000 × $0.50 = $68,240
Total avoided: $548,240

Annual savings: $548,240 - $180,000 = $368,240
Simple payback (assuming $1M system): 2.7 years
```

## 5.3 Integration with Growing Systems

### HVAC-Irrigation Integration

**TRANSPIRATION-BASED CLIMATE CONTROL**

```
CLOSED-LOOP CLIMATE-IRRIGATION CONTROL
=======================================

Sensors:
├─ Air temperature
├─ Air humidity
├─ Substrate moisture
├─ Plant temperature (IR)
└─ VPD calculation

Control Logic:
┌──────────────────────────────────────┐
│ IF VPD > 1.5 kPa (too dry)          │
│   THEN                               │
│   ├─ Increase humidity (mist/fog)   │
│   ├─ Reduce temperature             │
│   └─ Increase irrigation frequency  │
│                                      │
│ IF VPD < 0.5 kPa (too humid)        │
│   THEN                               │
│   ├─ Decrease humidity (dehumid.)   │
│   ├─ Increase temperature           │
│   └─ Reduce irrigation frequency    │
│                                      │
│ IF substrate moisture < setpoint    │
│   THEN                               │
│   ├─ Irrigation cycle initiated     │
│   └─ HVAC prepares for moisture     │
└──────────────────────────────────────┘

Coordinated Actions:
- Pre-cooling before irrigation
- Dehumidification ramp-up during lights-on
- Night temperature control (DIF strategy)
```

### Vertical Integration Challenges

**RACK-LEVEL CLIMATE MANAGEMENT**

```
AIRFLOW THROUGH MULTI-TIER RACKS
=================================

Configuration A: Top-Down Flow
┌─────────────────────────────┐
│ Supply air (cooled)         │
└─────────────↓───────────────┘
┌──────────────────────────────┐
│ Level 6 ▓▓▓▓▓▓▓▓▓▓  T+0°F   │
├──────────────────────────────┤
│ Level 5 ▓▓▓▓▓▓▓▓▓▓  T+1°F   │ Heat
├──────────────────────────────┤ accumulation
│ Level 4 ▓▓▓▓▓▓▓▓▓▓  T+2°F   │
├──────────────────────────────┤
│ Level 3 ▓▓▓▓▓▓▓▓▓▓  T+3°F   │
├──────────────────────────────┤
│ Level 2 ▓▓▓▓▓▓▓▓▓▓  T+4°F   │
├──────────────────────────────┤
│ Level 1 ▓▓▓▓▓▓▓▓▓▓  T+5°F   │
└──────────────↓───────────────┘
Problem: Bottom tier too warm!

Configuration B: Horizontal Flow
         Supply →
┌──────────────────────────────┐
│→ Level 6 ▓▓▓▓▓▓▓ → Return   │
│→ Level 5 ▓▓▓▓▓▓▓ → Return   │
│→ Level 4 ▓▓▓▓▓▓▓ → Return   │
│→ Level 3 ▓▓▓▓▓▓▓ → Return   │
│→ Level 2 ▓▓▓▓▓▓▓ → Return   │
│→ Level 1 ▓▓▓▓▓▓▓ → Return   │
└──────────────────────────────┘
Better: Each tier receives fresh supply

Design Requirements:
- 50-100 CFM per rack tier (typical)
- Plenum or duct distribution to each level
- Return path below or behind racks
- Temperature monitoring per tier
```

**EQUIPMENT MOUNTING STRATEGIES**

```
Location Options:
┌────────────────────────────────────┐
│ 1. CEILING-MOUNTED EQUIPMENT       │
│    Pros: Above crops, accessible   │
│    Cons: Structural load, height   │
│                                    │
│ 2. DEDICATED MECHANICAL ROOM       │
│    Pros: Separate from grow, quiet│
│    Cons: Long duct runs, space    │
│                                    │
│ 3. SPLIT SYSTEMS                   │
│    Evaporator: In-room            │
│    Condenser: Outside/mech room   │
│    Pros: Flexible, efficient      │
│    Cons: Refrigerant lines        │
│                                    │
│ 4. INTEGRATED WITH RACKS           │
│    Packaged unit serving rack group│
│    Pros: Modular, short distances │
│    Cons: Many small units         │
└────────────────────────────────────┘
```

## 5.4 Control Strategies and Automation

### Multi-Stage Control Logic

**TEMPERATURE CONTROL SEQUENCE**

```
SEQUENTIAL HEATING/COOLING CONTROL
===================================

Temperature Setpoint: 72°F
Deadband: ±2°F
Control stages:

    80°F │
         │                    Stage 4: Evap cooling
    78°F ├────────────────────────────────────
         │                    Stage 3: Mechanical cooling
    76°F ├────────────────────────────────────
         │                    Stage 2: Vent cooling
    74°F ├────────────────────────────────────
         │                    Stage 1: Vent increase
    72°F ├═══════════════════ SETPOINT ═══════
         │                    Stage 1: Reduce vent
    70°F ├────────────────────────────────────
         │                    Stage 2: Heat Stage 1
    68°F ├────────────────────────────────────
         │                    Stage 3: Heat Stage 2
    66°F ├────────────────────────────────────
         │                    Stage 4: Emergency heat
    64°F │

Time delays between stages: 5-15 minutes
Prevents short-cycling and equipment wear

P.I.D. Control Option:
Proportional: Output proportional to error
Integral: Accounts for sustained error
Derivative: Responds to rate of change

Best for: Modulating equipment (VFD fans, valves)
```

**INTEGRATED ENVIRONMENTAL CONTROL**

```
MULTI-PARAMETER OPTIMIZATION
=============================

Objective Function:
Optimize: Plant growth + Energy efficiency
Subject to: Equipment constraints

Example: Tomato Greenhouse
┌──────────────────────────────────────┐
│ Parameter    │ Target │ Priority     │
├──────────────┼────────┼──────────────┤
│ Temperature  │ 72°F   │ High         │
│ Humidity     │ 65% RH │ High         │
│ VPD          │ 1.0kPa │ Very High    │
│ CO₂          │ 800ppm │ Medium       │
│ Light (DLI)  │ 25 mol │ High         │
│ Energy $/hr  │ Minimize│ Medium      │
└──────────────┴────────┴──────────────┘

Control Actions (prioritized):
1. Maintain VPD (override temp/RH if needed)
2. Achieve temperature within ±3°F
3. Maintain CO₂ during photoperiod
4. Minimize energy while meeting 1-3
5. Trend toward DLI target

Advanced: Model Predictive Control (MPC)
- Forecasts future conditions
- Optimizes over time horizon
- Accounts for weather, electricity pricing
- Pre-cooling before heat wave
- Thermal storage strategies
```

### Automation and Monitoring

**SENSOR REQUIREMENTS**

```
SENSOR DEPLOYMENT STRATEGY
==========================

Greenhouse (per zone):
├─ Temperature: 3-6 sensors
│  ├─ High (near ridge)
│  ├─ Mid (crop level)
│  └─ Low (near floor)
├─ Humidity: 2-4 sensors
│  ├─ Aspirated for accuracy
│  └─ Calibration annual
├─ CO₂: 1-2 sensors
│  ├─ NDIR type preferred
│  └─ Crop canopy height
├─ Light (PAR): 1-3 sensors
│  ├─ Above canopy
│  └─ Multiple if supplemental lighting
├─ Wind speed/direction: 1 (roof)
└─ Rain sensor: 1

Vertical Farm (per grow room):
├─ Temperature: 4-8 sensors
│  ├─ Supply air
│  ├─ Return air
│  ├─ 2-4 at crop level (corners)
│  └─ Critical zones
├─ Humidity: 2-4 sensors
├─ CO₂: 2-3 sensors
├─ PAR: 2-4 sensors (per rack tier)
└─ Air velocity: 1-2 (verify circulation)

Equipment Sensors:
├─ Flow meters (water, air)
├─ Pressure transducers
├─ Motor status/current
├─ Valve position feedback
└─ Energy meters (electric, gas)

Sensor Specifications:
- Accuracy: ±1-2% of reading
- Response time: <30 seconds
- Calibration: Annually minimum
- Redundancy: Critical parameters
```

**CONTROL SYSTEM ARCHITECTURE**

```
HIERARCHICAL CONTROL STRUCTURE
===============================

┌────────────────────────────────────┐
│  LEVEL 3: ENTERPRISE MANAGEMENT    │
│  ├─ Production planning            │
│  ├─ Energy management              │
│  ├─ Reporting & analytics          │
│  └─ Connection to ERP/business     │
└──────────────┬─────────────────────┘
               │ Data exchange
┌──────────────┴─────────────────────┐
│  LEVEL 2: SUPERVISORY CONTROL      │
│  ├─ BAS (Building Automation)      │
│  ├─ Recipe management              │
│  ├─ Alarms and notifications       │
│  ├─ Data logging                   │
│  └─ User interface (HMI/SCADA)     │
└──────────────┬─────────────────────┘
               │ Control signals
┌──────────────┴─────────────────────┐
│  LEVEL 1: FIELD CONTROLLERS        │
│  ├─ Zone controllers (PLC/DDC)     │
│  ├─ Equipment controllers          │
│  ├─ Local loops (P.I.D.)           │
│  └─ Safety interlocks              │
└──────────────┬─────────────────────┘
               │ I/O signals
┌──────────────┴─────────────────────┐
│  LEVEL 0: FIELD DEVICES            │
│  ├─ Sensors (temp, humid., etc.)   │
│  ├─ Actuators (valves, dampers)    │
│  ├─ VFDs (variable frequency)      │
│  └─ Equipment (heaters, fans, etc.)│
└────────────────────────────────────┘

Communication Protocols:
- BACnet (building automation standard)
- Modbus (industrial standard)
- Ethernet/IP
- OPC UA (interoperability)
```

## 5.5 System Sizing and Equipment Selection

### Equipment Selection Process

**SYSTEMATIC SELECTION METHODOLOGY**

```
STEP 1: LOAD CALCULATIONS
├─ Heating loads (design day)
├─ Cooling loads (design day)
├─ Dehumidification requirements
└─ Ventilation air quantities

STEP 2: EQUIPMENT CAPACITY
Heating capacity ≥ Design load × 1.10-1.25
Cooling capacity ≥ Design load × 1.10-1.20

Safety factors account for:
- Load calculation uncertainty
- Future expansion
- Extreme conditions
- Equipment degradation

STEP 3: EFFICIENCY REQUIREMENTS
Heating equipment:
├─ Boiler: ≥90% AFUE (condensing)
├─ Furnace: ≥95% AFUE
├─ Heat pump: ≥8.5 HSPF, COP ≥3.0

Cooling equipment:
├─ Air-cooled chiller: ≥11 EER
├─ Water-cooled chiller: ≥16 EER
├─ DX units: ≥14 SEER, ≥11 EER

STEP 4: PART-LOAD PERFORMANCE
Equipment operates at part-load 90% of time
Check: IPLV (Integrated Part Load Value)

Good design: IPLV > Full load efficiency

STEP 5: COMPATIBILITY & INTEGRATION
├─ Refrigerant type (phase-out schedule)
├─ Control interfaces (BACnet, etc.)
├─ Physical dimensions and access
├─ Noise levels (dBA)
├─ Maintenance requirements
└─ Manufacturer support
```

**EQUIPMENT COMPARISON EXAMPLE**

```
Cooling Requirement: 100 tons (1,200,000 BTU/hr)

OPTION A: Single 100-ton chiller
Capital cost: $85,000
Efficiency: 12.0 EER (full load)
IPLV: 14.5 EER
Part-load performance: Excellent
Redundancy: None (single point failure)

OPTION B: Two 60-ton chillers
Capital cost: $110,000 (2 × $55,000)
Efficiency: 11.5 EER each
IPLV: 13.8 EER
Part-load: One unit cycles, one modulates
Redundancy: 60% capacity if one fails

OPTION C: Three 40-ton chillers
Capital cost: $135,000 (3 × $45,000)
Efficiency: 11.0 EER each
IPLV: 13.2 EER
Part-load: Sequential staging
Redundancy: 67% capacity with one down

Annual Cooling Hours: 3,000 hours
Average load: 60 tons (60% of peak)

Energy Calculations:
Option A: 60 tons × 12,000/14.5 × 3,000 = 149,000 kWh
Option B: 60 tons × 12,000/13.8 × 3,000 = 157,000 kWh
Option C: 60 tons × 12,000/13.2 × 3,000 = 164,000 kWh

@ $0.12/kWh:
Option A: $17,880/year
Option B: $18,840/year (+$960)
Option C: $19,680/year (+$1,800)

Life Cycle Cost Analysis (15 years):
Option A: $85,000 + $17,880×15 = $353,200
Option B: $110,000 + $18,840×15 = $392,600
Option C: $135,000 + $19,680×15 = $430,200

Value of Redundancy:
Crop loss risk from AC failure: $50,000+
Risk mitigation value: Significant

Recommendation: Option B (balance of efficiency,
cost, and redundancy)
```

### Modulating vs. Staged Equipment

```
ON/OFF CONTROL (Single Stage)
==============================
Capacity
100% ┐     ┌───┐     ┌───┐     ┌───┐
     │     │   │     │   │     │   │
  0% └─────┘   └─────┘   └─────┘   └──
     Temperature fluctuates ±3-5°F
     High cycling, wear on equipment

STAGED CONTROL (Multiple Stages)
=================================
Capacity
100% ┐         ┌─────────┐
 75% ├───┐     │         │
 50% │   ├─────┤         │
 25% │   │     │         │
  0% └───┘     └─────────┘
     Better control, ±2-3°F

MODULATING CONTROL (Variable Capacity)
=======================================
Capacity
100% ┐       ╱─────────╲
 75% ├──────╱           ╲
 50% ├─────╱             ╲────
 25% │    ╱
  0% └───╱
     Excellent control, ±1-2°F
     Highest efficiency at part-load

Technologies for Modulation:
- VFD (Variable Frequency Drives) on motors
- Modulating valves
- Variable-speed compressors
- EC (Electronically Commutated) fans
```

## Summary

This module covered advanced HVAC integration for CEA facilities:
- Multi-zone climate control design and separation methods
- Heat recovery technologies and waste heat utilization
- Integration of HVAC with growing systems and infrastructure
- Sophisticated control strategies and automation architecture
- Equipment selection methodology and sizing considerations

## Key Takeaways

1. **Multi-zone design enables crop diversity** - Physical separation and independent HVAC systems allow simultaneous production of crops with different climate requirements.

2. **Heat recovery significantly improves economics** - ERVs, CHP systems, and waste heat utilization can reduce energy costs by 20-50%.

3. **Vertical farm HVAC requires rack-level distribution** - Proper airflow through multi-tier racks prevents temperature stratification and ensures uniform growing conditions.

4. **Advanced controls optimize multiple objectives** - Model predictive control and integrated environmental management balance plant growth, energy efficiency, and operational constraints.

5. **Equipment redundancy reduces crop risk** - Multiple smaller units provide part-load efficiency and backup capacity in case of failure.

## Next Module

**Module 6: Electrical Systems and Power Distribution** will cover electrical load calculations, power distribution system design, lighting system electrical requirements, emergency power, and electrical code compliance.
