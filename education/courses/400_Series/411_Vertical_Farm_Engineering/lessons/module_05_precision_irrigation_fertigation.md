# Module 5: Precision Irrigation and Fertigation Engineering

## Learning Objectives

By the end of this module, you will be able to:
- Design hydraulic systems for vertical farm irrigation
- Engineer fertigation injection and mixing systems
- Specify water treatment and filtration requirements
- Design drainage and recirculation systems
- Implement flow monitoring and control systems
- Calculate water and nutrient requirements

## 1. Hydraulic System Design Fundamentals

### 1.1 Water Demand Calculations

**Daily Water Requirements:**

```
Water Demand = Evapotranspiration + System Losses

For leafy greens in vertical farm:
ET per plant = 50-100 mL/day
Plants per m² = 20-30
ET per m² = 1.0-3.0 L/day

System losses:
- Evaporation from surfaces: 5-10%
- Leakage and drainage: 2-5%
- Cleaning and flushing: 5-10%

Total water factor = 1.20 (20% above ET)

Example for 1,000 m² facility:
Base ET = 1,000 m² × 2.0 L/m²/day = 2,000 L/day
With losses = 2,000 × 1.20 = 2,400 L/day
Peak hourly = 2,400 / 16 hours = 150 L/hr (during photoperiod)
```

### 1.2 Flow Rate Requirements by System Type

| System Type | Flow Rate | Pressure | Cycle Frequency | Distribution |
|-------------|-----------|----------|-----------------|--------------|
| NFT (Nutrient Film Technique) | 1-2 L/min per channel | 0.2-0.5 bar (3-7 psi) | Continuous | Gravity return |
| DWC (Deep Water Culture) | Recirculation: 2-4 system volumes/hr | 0.3-0.8 bar (4-12 psi) | Continuous | Pumped |
| Ebb and Flow | Fill rate: 100-200 L/m²/hr | 0.5-1.0 bar (7-15 psi) | 3-6 cycles/day | Gravity drain |
| Drip Irrigation | 2-4 L/hr per emitter | 1.0-2.0 bar (15-30 psi) | Multiple daily | Pressure compensated |
| Aeroponics | 5-10 L/min per zone | 5-8 bar (80-120 psi) | 10 sec every 5 min | High pressure spray |

### 1.3 Pipe Sizing and Hydraulics

**Flow Velocity Calculation:**

```
V = Q / A

Where:
V = Velocity (m/s)
Q = Flow rate (m³/s)
A = Pipe cross-sectional area (m²)

Target velocities:
Main lines: 1.0-2.0 m/s
Branch lines: 0.5-1.5 m/s
Drip laterals: 0.3-0.6 m/s

Example:
Required flow = 600 L/hr = 0.000167 m³/s
Target velocity = 1.2 m/s

Required area = Q / V = 0.000167 / 1.2 = 0.000139 m²
Diameter = √(4A/π) = √(4 × 0.000139/π) = 0.0133 m = 13.3 mm

Select: 15 mm (1/2") pipe (next standard size up)
```

**Friction Loss Calculation:**

```
Hazen-Williams Equation (for water):

hf = 10.67 × L × Q^1.852 / (C^1.852 × d^4.87)

Where:
hf = Head loss (m)
L = Pipe length (m)
Q = Flow rate (m³/s)
C = Hazen-Williams coefficient (140-150 for PVC)
d = Inside diameter (m)

Example:
L = 50 m
Q = 0.000167 m³/s (600 L/hr)
C = 145 (PVC pipe)
d = 0.015 m (15mm pipe)

hf = 10.67 × 50 × 0.000167^1.852 / (145^1.852 × 0.015^4.87)
   = 1.87 m (0.18 bar, 2.6 psi)

This is acceptable for low-pressure systems
```

**Pump Sizing:**

```
Total Dynamic Head (TDH) = Static Head + Friction Loss + Pressure Head

Static Head:
- Elevation difference: 4 m (tallest growing level)

Friction Loss:
- Pipe friction: 2 m
- Fittings (elbows, valves): 1.5 m
- Filter: 0.5 m

Pressure Head:
- Required at emitter: 1.0 bar = 10 m water column

TDH = 4 + 2 + 1.5 + 0.5 + 10 = 18 m (26 psi, 1.8 bar)

Flow rate: 600 L/hr = 10 L/min = 2.6 GPM

Pump selection:
Required: 2.6 GPM @ 26 psi (18 m head)
Select: 1/4 HP centrifugal pump
- Flow range: 0-15 GPM
- Head range: 0-40 feet (0-18 m)
- Power: 0.25 HP (186 W)
```

## 2. Fertigation System Engineering

### 2.1 Nutrient Dosing Methods

**Option 1: Proportional Injector (Venturi)**

```
Configuration:
Main Water Line → Venturi → Concentrated Nutrient → Mixed Solution

Operating principle:
- Water flow creates vacuum in venturi
- Draws concentrated nutrient solution
- Fixed ratio injection (typically 1:100 or 1:200)

Advantages:
+ No electrical power required
+ Simple, reliable
+ Low maintenance
+ Inexpensive ($200-500)

Disadvantages:
- Fixed ratio (not adjustable during operation)
- Requires minimum flow rate
- Limited accuracy (±5-10%)
- Pressure loss (0.5-1.0 bar)

Application: Small systems, single crop type, stable recipe
```

**Option 2: Positive Displacement Pump**

```
Configuration:
Main Water → Flow Sensor → Controller → Dosing Pump → Nutrient Tank

Operating principle:
- Flow meter measures water flow
- Controller calculates nutrient needed
- Dosing pump injects precise volume
- Adjustable ratio in real-time

Advantages:
+ High accuracy (±1-2%)
+ Adjustable dosing ratio
+ Multiple channel capability
+ Flow-proportional dosing

Disadvantages:
- Requires electrical power
- More complex
- Higher cost ($1,500-5,000 per channel)
- Maintenance required

Application: Large systems, multiple crops, variable recipes
```

**Option 3: Inline Mixing System**

```
Configuration:
Tank A (Nutrients) → Pump A ↘
Tank B (Nutrients) → Pump B → Static Mixer → To Plants
Tank C (Acid/Base) → Pump C ↗
Water Main ─────────────────↗

Operating principle:
- Multiple concentrated stock solutions
- Individual pumps for each component
- Mixed inline with water
- pH/EC monitoring and adjustment

Advantages:
+ Maximum flexibility
+ Precise control of all elements
+ Real-time adjustment
+ Automated pH management

Disadvantages:
- Highest cost ($10,000-50,000)
- Complex programming required
- Multiple points of failure
- Requires skilled operator

Application: Commercial operations, research facilities
```

### 2.2 Nutrient Concentration Calculations

**Stock Solution Preparation:**

```
Concentration Factor = Target EC / Stock EC

Example for 1:100 dilution system:
Target solution EC: 2.0 mS/cm
Stock solution must be: 2.0 × 100 = 200 mS/cm

Fertilizer calculations:
For 100L stock tank to achieve 200 mS/cm:

Calcium Nitrate: 30 kg
Monopotassium Phosphate: 8 kg
Magnesium Sulfate: 12 kg
Potassium Nitrate: 15 kg
Micronutrient blend: 0.5 kg

Verification:
Measure EC of stock solution
Dilute 1:100 and measure EC
Should read ~2.0 mS/cm
```

**Injection Rate Calculation:**

```
Injection Rate = Water Flow × Concentration Ratio

Water flow rate: 600 L/hr
Concentration ratio: 1:100 (1%)

Injection rate = 600 / 100 = 6 L/hr of stock solution

Dosing pump specification:
Flow range: 0-10 L/hr
Pressure: up to 5 bar
Motor: 24V DC, 15W
Control: 4-20mA signal
```

### 2.3 Multi-Channel Fertigation Design

**A/B Tank System:**

```
Stock Solution Separation (to prevent precipitation):

Tank A (Calcium-containing):
- Calcium Nitrate
- Iron Chelate
- Potassium Nitrate (portion)

Tank B (Sulfate/Phosphate-containing):
- Monopotassium Phosphate
- Magnesium Sulfate
- Potassium Sulfate
- Micronutrients

Tank C (pH Adjustment):
- Acid (Nitric, Phosphoric, or Sulfuric)
- Base (Potassium Hydroxide) if needed

Injection sequence:
1. Measure incoming water flow
2. Inject Tank A (ratio: 1:200)
3. Inject Tank B (ratio: 1:200)
4. Monitor inline EC
5. Adjust Tank C to target pH
6. Final EC/pH verification before distribution

```

**Dosing Logic:**

```
IF Water_Flow > 0 THEN
    Tank_A_Rate = Water_Flow / 200
    Tank_B_Rate = Water_Flow / 200

    IF EC_Measured < EC_Target - 0.1 THEN
        Tank_A_Rate = Tank_A_Rate × 1.05
        Tank_B_Rate = Tank_B_Rate × 1.05
    END IF

    IF EC_Measured > EC_Target + 0.1 THEN
        Tank_A_Rate = Tank_A_Rate × 0.95
        Tank_B_Rate = Tank_B_Rate × 0.95
    END IF

    IF pH_Measured < pH_Target - 0.2 THEN
        Enable_Base_Injection
    END IF

    IF pH_Measured > pH_Target + 0.2 THEN
        Enable_Acid_Injection
    END IF
END IF

Data logging every 5 minutes:
- Water flow rate
- Tank A injection rate
- Tank B injection rate
- Acid/Base injection
- EC measured
- pH measured
- Timestamp
```

## 3. Water Treatment and Filtration

### 3.1 Source Water Quality Assessment

**Critical Parameters:**

| Parameter | Acceptable Range | Treatment if Exceeded |
|-----------|------------------|----------------------|
| Total Dissolved Solids (TDS) | <300 ppm | Reverse osmosis |
| Calcium (Ca) | 40-100 ppm | RO or ion exchange |
| Magnesium (Mg) | 20-50 ppm | RO or ion exchange |
| Sodium (Na) | <50 ppm | RO required |
| Chlorine (Cl) | 0 ppm | Carbon filtration |
| pH | 5.5-7.5 | Acid/base injection |
| Alkalinity | <100 ppm as CaCO₃ | Acid injection |
| Iron (Fe) | <0.3 ppm | Oxidation + filtration |
| Manganese (Mn) | <0.05 ppm | Oxidation + filtration |

### 3.2 Filtration System Design

**Multi-Stage Filtration:**

```
Stage 1: Sediment Filtration
    ↓
┌─────────────────┐
│  50 micron      │  Removes large particles, sediment
│  Cartridge      │  Flow: up to 20 GPM
│  Filter         │  Pressure drop: 2-5 psi
└─────────────────┘
    ↓

Stage 2: Carbon Filtration
    ↓
┌─────────────────┐
│  Activated      │  Removes chlorine, organics, taste/odor
│  Carbon         │  Flow: up to 15 GPM
│  Filter         │  Pressure drop: 5-8 psi
│  (GAC)          │  Replacement: 6-12 months
└─────────────────┘
    ↓

Stage 3: Fine Filtration
    ↓
┌─────────────────┐
│  5 micron       │  Removes fine particles, protects emitters
│  Pleated        │  Flow: up to 10 GPM
│  Cartridge      │  Pressure drop: 3-6 psi
└─────────────────┘
    ↓

Optional: UV Sterilization
    ↓
┌─────────────────┐
│  UV Chamber     │  Kills bacteria, algae, pathogens
│  254 nm         │  Dose: 40-60 mJ/cm²
│  40W lamp       │  Flow: up to 15 GPM
└─────────────────┘
    ↓

To Fertigation System
```

**Filter Sizing:**

```
Flow rate requirement: 10 GPM (2,400 L/hr)
Peak flow: 15 GPM (to account for multiple zones)

Cartridge selection:
Stage 1 (50 micron): 20" length, 2.5" diameter
    Rated flow: 20 GPM @ 3 psi drop
    Service life: 3-6 months
    Cost: $15 each, 4/year = $60

Stage 2 (Carbon block): 20" length, 2.5" diameter
    Rated flow: 15 GPM @ 7 psi drop
    Service life: 6-12 months
    Cost: $45 each, 2/year = $90

Stage 3 (5 micron): 20" length, 2.5" diameter
    Rated flow: 12 GPM @ 5 psi drop
    Service life: 2-4 months
    Cost: $18 each, 6/year = $108

Annual filter costs: $258 for 10 GPM system
```

### 3.3 Reverse Osmosis (RO) System

**When RO is Needed:**

```
Required when:
- Source water TDS > 300 ppm
- Sodium > 50 ppm
- Specific contaminants (fluoride, heavy metals)
- Consistent water quality critical

RO System Sizing:

Water demand: 2,400 L/day (634 gallons/day)
Recovery ratio: 75% (typical)
Required feed water: 2,400 / 0.75 = 3,200 L/day

Commercial RO selection:
Production rate: 150 GPD per membrane
Membranes needed: 634 / 150 = 4.2 → Use 5 membranes
System configuration: 5-membrane array
Operating pressure: 150-200 psi
Power: 2 HP pump
Waste water: 25% of feed (800 L/day to drain)

Cost analysis:
Capital: $8,000-12,000 installed
Membrane replacement: $200 each × 5, every 3 years = $333/year
Pre-filter replacement: $200/year
Power: 1.5 kW × 8 hr/day × 365 × $0.12 = $526/year
Water waste: 800 L/day × 365 × $0.003/L = $876/year
Total annual cost: $1,935/year
```

## 4. Drainage and Recirculation Systems

### 4.1 Drainage System Design

**Gravity Drainage:**

```
Design Criteria:

Slope: Minimum 1% (1:100) for reliable drainage
        Recommended 2% (1:50) for quick drainage

Drain pipe sizing:
Manning's Equation for open channel flow:

Q = (1/n) × A × R^(2/3) × S^(1/2)

Where:
Q = Flow rate (m³/s)
n = Manning's roughness (0.010 for smooth PVC)
A = Cross-sectional area (m²)
R = Hydraulic radius (A/P, where P is wetted perimeter)
S = Slope (m/m)

Example:
Required capacity: 50 L/min = 0.00083 m³/s
Slope: 2% = 0.02
Pipe: 50mm (2") diameter, flowing half-full

A = πr²/2 = π(0.025)²/2 = 0.00098 m²
P = πr = π(0.025) = 0.0785 m
R = A/P = 0.00098/0.0785 = 0.0125

Q = (1/0.010) × 0.00098 × 0.0125^(2/3) × 0.02^(1/2)
  = 0.00176 m³/s = 105 L/min

Capacity (105 L/min) > Required (50 L/min) ✓
50mm pipe is adequate
```

**Drainage Collection:**

```
System Layout:

Growing Level Trays
        ↓
    Drip Edge/Gutter
        ↓
    Downspout (50mm)
        ↓
    Main Collector (100mm)
        ↓
    Return Tank/Drain

Sizing main collector:
Number of levels: 8
Peak drainage per level: 50 L/min
Total if all drain simultaneously: 400 L/min

Main collector sizing for 400 L/min:
Use 100mm (4") pipe at 2% slope
Capacity: ~650 L/min (adequate) ✓
```

### 4.2 Recirculation Tank Design

**Tank Sizing:**

```
Tank Volume = System Volume × Safety Factor

System volume calculation:
- Growing channels: 500 L
- Pipes and fittings: 200 L
- Sump volume: 300 L
- Working volume: 1,000 L

Safety factor: 2.0 (allows for mixing, level control, surge)

Tank volume = 1,000 × 2.0 = 2,000 L (500 gallons)

Select: 2,500 L tank (next standard size)
Dimensions: 1.5m diameter × 1.5m height
Material: Food-grade HDPE or fiberglass
```

**Tank Features:**

```
Required Components:

1. Level Control:
   - Float switch (low level alarm)
   - Ultrasonic level sensor (monitoring)
   - Makeup water solenoid valve
   - High level overflow

2. Mixing/Aeration:
   - Submersible pump (recirculation)
   - Air stone or venturi aeration
   - Target DO: >6 mg/L

3. Monitoring:
   - EC sensor (inline)
   - pH sensor (inline)
   - Temperature sensor
   - Flow meter

4. Access:
   - Removable lid
   - Inspection port
   - Drain valve
   - Sample port

5. Safety:
   - Overflow to drain
   - Backflow preventer
   - Ground fault protection
```

### 4.3 Recirculation vs. Drain-to-Waste

**Comparison:**

| Factor | Recirculation | Drain-to-Waste |
|--------|---------------|----------------|
| Water use | Low (5-10% waste) | High (0% reuse) |
| Nutrient use | High efficiency | Lower efficiency |
| Disease risk | Higher (can spread) | Lower (isolated) |
| System complexity | Higher | Lower |
| Monitoring required | Continuous | Periodic |
| Capital cost | Higher | Lower |
| Operating cost | Lower | Higher |
| Best application | Established operations | Startup, quarantine |

**Recommendation for vertical farms:**
- Recirculation for main production (cost/efficiency)
- Drain-to-waste for propagation/quarantine (disease control)
- Hybrid: Recirculate with periodic purge and refresh

## 5. Flow Monitoring and Control

### 5.1 Flow Measurement Technologies

**Sensor Selection:**

| Technology | Range | Accuracy | Cost | Application |
|------------|-------|----------|------|-------------|
| Turbine meter | 0.3-300 GPM | ±1% | $$ | Clean water, wide range |
| Magnetic meter | 0.1-10,000 GPM | ±0.5% | $$$ | Any conductivity, best accuracy |
| Ultrasonic meter | 1-1,000 GPM | ±2% | $$$$ | Non-invasive, versatile |
| Paddlewheel | 0.1-50 GPM | ±2-5% | $ | Low cost, adequate for VF |
| Vortex meter | 1-100 GPM | ±1% | $$$ | Steam/gas/liquid capable |

**Recommended for Vertical Farms:**
- Main lines (>10 GPM): Magnetic or turbine
- Branch lines (1-10 GPM): Paddlewheel or turbine
- Precision dosing (<1 GPM): Magnetic or gear meter

### 5.2 Control Valve Specifications

**Valve Types:**

```
Solenoid Valve (On/Off Control):
- Actuation: Electric (24V AC/DC common)
- Speed: Fast (<1 second)
- Control: Binary (open or closed)
- Cost: Low ($50-200)
- Application: Zone control, drainage, mixing

Motorized Ball Valve (Proportional Control):
- Actuation: Electric motor
- Speed: Moderate (10-30 seconds)
- Control: 0-100% open (typically 0-10V or 4-20mA)
- Cost: Medium ($200-500)
- Application: Flow modulation, blending

Pressure Regulating Valve (Passive):
- Actuation: Spring and diaphragm
- Speed: Instant
- Control: Maintains set pressure
- Cost: Low ($30-150)
- Application: Drip systems, protecting emitters
```

**Control System Architecture:**

```
                    [PLC or BMS Controller]
                              ↓
        ┌──────────┬──────────┼──────────┬──────────┐
        ↓          ↓          ↓          ↓          ↓
   [Flow Meter] [EC Meter] [pH Meter] [Level] [Pressure]
        ↓          ↓          ↓          ↓          ↓
    Feedback   Feedback   Feedback   Feedback   Feedback
        ↓          ↓          ↓          ↓          ↓
        └──────────┴──────────┴──────────┴──────────┘
                              ↓
                     [Control Algorithm]
                              ↓
        ┌──────────┬──────────┼──────────┬──────────┐
        ↓          ↓          ↓          ↓          ↓
    [Pumps]  [Dosing Pumps] [Valves] [Alarms] [Data Log]

Control Loop (executed every 10 seconds):
1. Read all sensors
2. Calculate error (target - actual)
3. Apply PID algorithm
4. Output control signals
5. Log data
6. Check alarm conditions
```

### 5.3 PID Control Implementation

**PID Algorithm for EC Control:**

```
Error = EC_target - EC_measured
Proportional = Kp × Error
Integral = Integral + (Ki × Error × dt)
Derivative = Kd × (Error - Previous_error) / dt

Output = Proportional + Integral + Derivative

Tuning parameters:
Kp = 5.0   (Proportional gain)
Ki = 0.5   (Integral gain)
Kd = 0.1   (Derivative gain)

Example:
EC_target = 2.0 mS/cm
EC_measured = 1.8 mS/cm
Error = 0.2 mS/cm

Proportional = 5.0 × 0.2 = 1.0
Integral = (previous) 0.5 + (0.5 × 0.2 × 10s) = 1.5
Derivative = 0.1 × (0.2 - 0.15) / 10 = 0.0005

Output = 1.0 + 1.5 + 0.0005 = 2.5

This output scales dosing pump speed (e.g., 2.5 → 25% increase)
```

## 6. System Integration Example

**Complete 1,000 m² NFT System Design:**

```
System Specifications:

Growing Area: 1,000 m² (40 channels × 25 m length each)
Flow per channel: 1.5 L/min
Total flow: 60 L/min = 16 GPM

Water Requirements:
Daily ET: 2,400 L
System volume: 3,000 L
Recirculation: 99%+
Makeup water: 2,500 L/day (includes cleaning)

Main Components:

1. Recirculation Pump:
   - Flow: 20 GPM @ 30 psi
   - Power: 0.5 HP (373W)
   - Type: Centrifugal, stainless steel

2. Fertigation System:
   - Type: A/B dosing pumps
   - Injection ratio: 1:200
   - Pumps: Dual channel, 0-1 L/hr each
   - Control: PLC with EC/pH feedback

3. Filtration:
   - Stage 1: 50 micron sediment
   - Stage 2: Activated carbon
   - Stage 3: 25 micron pleated
   - Total ΔP: <15 psi

4. Distribution:
   - Main header: 2" PVC
   - Branch lines: 1" PVC
   - Channel inlets: 1/2" tubing
   - Pressure regulators: 5 psi

5. Return System:
   - Channel slope: 2%
   - Return lines: 2" PVC
   - Main collector: 4" PVC
   - Return tank: 3,500 L

6. Monitoring:
   - Flow meters: (2) - supply and makeup
   - EC probes: (2) - inline and tank
   - pH probes: (2) - inline and tank
   - Level sensors: (3) - return tank
   - Pressure sensors: (2) - pump and system

7. Controls:
   - PLC: Modular design, 16 I/O
   - HMI: 7" touchscreen
   - Data logging: Cloud-based
   - Alarms: SMS/email notifications

Cost Estimate:
Pumps and motors: $3,500
Fertigation system: $8,000
Filtration: $1,200
Plumbing and fittings: $5,000
Sensors and instruments: $6,000
Control system: $4,500
Installation labor: $8,000
Engineering: $3,000
Total: $39,200 ($39.20/m²)

Operating Costs (Annual):
Electricity: 0.5 kW × 16 hr/day × 365 × $0.12 = $350
Water: 900 m³/year × $2/m³ = $1,800
Nutrients: 1,000 m² × $5/m²/year = $5,000
Filters: $500
Maintenance: $1,000
Total annual: $8,650
```

## 7. Key Takeaways

1. **Hydraulics matter** - Proper pipe sizing and pressure management ensure uniform distribution

2. **Fertigation accuracy is critical** - ±2% accuracy or better prevents nutrient imbalances

3. **Water quality affects everything** - Treat source water to prevent emitter clogging and nutrient interactions

4. **Recirculation saves resources** - But requires careful monitoring to prevent disease spread

5. **Monitor and control** - Automated systems with feedback loops maintain optimal conditions

6. **Plan for maintenance** - Filters, sensors, and pumps require regular service

7. **Data is valuable** - Logging irrigation and nutrition data enables optimization

## 8. Practical Exercise

Design irrigation system for:
- 500 m² drip-irrigated vertical farm
- Substrate: Coco coir in grow bags
- Crop: Basil (high water use)
- Target: 4 L/m²/day delivery

Deliverables:
1. Water demand calculations
2. Pump and pipe sizing
3. Fertigation system design
4. Filtration specification
5. Control system architecture

## Additional Resources

- ASABE Standards: Agricultural Irrigation Systems
- Irrigation Association Design Manual
- Fertigation equipment manufacturer specifications
- Hydraulic calculation software and tools

## Next Module

**Module 6: Racking and Growing System Design** - Engineer the mechanical systems that support plants in vertical configurations.

---

**Module 5 Complete** - Proceed to Module 5 Quiz to test your understanding of irrigation and fertigation engineering.
