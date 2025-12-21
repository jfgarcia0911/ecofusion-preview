# Module 4: Advanced HVAC Design for Vertical Farms

## Learning Objectives

By the end of this module, you will be able to:
- Design multi-zone HVAC systems for vertical farm environments
- Calculate cooling loads including LED lighting heat
- Engineer dehumidification systems for high-density growing
- Optimize air distribution in vertical configurations
- Design heat recovery systems for energy efficiency
- Integrate HVAC with facility control systems

## 1. Vertical Farm HVAC Fundamentals

### 1.1 Unique HVAC Challenges

Vertical farms present distinct environmental control challenges:

```
Challenge Matrix:

1. High Heat Loads:
   - LED lighting: 50-150 W/m² (20-60% becomes heat)
   - Plant transpiration adds moisture
   - Equipment and motor heat
   - Building gains (walls, ceiling, infiltration)

2. High Humidity:
   - Plants transpire continuously
   - Enclosed space concentrates moisture
   - Target RH: 60-75% for most crops
   - Cooling coils condensate design

3. Spatial Constraints:
   - Limited ceiling height
   - Ductwork must navigate racking
   - Equipment access for maintenance
   - Noise control for personnel

4. Precision Requirements:
   - Temperature: ±1-2°F control
   - Humidity: ±5% RH control
   - CO2: ±50 ppm control
   - Air velocity: uniform distribution
```

### 1.2 Design Criteria by Crop Type

| Crop Type | Temp (°F) | RH (%) | Air Changes/Hour | VPD (kPa) |
|-----------|-----------|---------|------------------|-----------|
| Lettuce | 65-72 | 60-70 | 15-20 | 0.8-1.2 |
| Basil | 70-75 | 65-75 | 12-18 | 0.8-1.0 |
| Tomato | 70-78 | 60-70 | 20-30 | 0.8-1.2 |
| Cucumber | 72-78 | 70-80 | 20-30 | 0.6-1.0 |
| Strawberry | 65-75 | 65-75 | 15-25 | 0.8-1.2 |
| Microgreens | 65-70 | 70-80 | 10-15 | 0.5-0.8 |

## 2. Cooling Load Calculations

### 2.1 Sensible Heat Gains

**Major Heat Sources:**

```
Total Sensible Load = Lights + Equipment + People + Envelope + Ventilation

1. Lighting Load:
   Q_lights = Power × (1 - Light_efficiency) × Safety_factor

   Example:
   LED power: 100 kW
   Light efficiency: 45% (55% becomes heat)
   Safety factor: 1.0 (continuous load)

   Q_lights = 100 × 0.55 × 1.0 = 55 kW (188,000 BTU/hr)

2. Equipment Load:
   Q_equipment = Pump_power + Motor_power + Control_power

   Pumps: 10 kW
   Motors/automation: 5 kW
   Controls/sensors: 2 kW

   Q_equipment = 17 kW (58,000 BTU/hr)

3. Occupancy Load:
   Q_people = Number × Heat_per_person × Occupancy_factor

   Number: 10 workers
   Heat per person: 250 BTU/hr (light work)
   Occupancy factor: 0.5 (50% present at any time)

   Q_people = 10 × 250 × 0.5 = 1,250 BTU/hr (0.37 kW)

4. Envelope Load:
   Q_envelope = U × A × ΔT + Solar_gain

   For insulated warehouse conversion:
   Wall area: 2,000 m²
   U-value: 0.25 W/m²·K (R-20 insulation)
   ΔT: 10°C (summer design condition)
   Solar gain: Minimal (limited glazing)

   Q_envelope = 0.25 × 2,000 × 10 = 5 kW (17,000 BTU/hr)

5. Ventilation Load (if using outdoor air):
   Q_ventilation = CFM × 1.08 × ΔT

   For minimal code-required ventilation:
   CFM: 1,000 (code minimum)
   ΔT: 15°F (summer)

   Q_ventilation = 1,000 × 1.08 × 15 = 16,200 BTU/hr (4.7 kW)
```

**Total Sensible Load:**
```
Total = 55 + 17 + 0.37 + 5 + 4.7 = 82 kW (280,000 BTU/hr)
```

### 2.2 Latent Heat Gains (Moisture)

**Plant Transpiration:**

```
Transpiration Rate = Growing_area × Crop_factor × Light_factor

Typical values:
Lettuce: 3-5 L/m²/day
Basil: 4-6 L/m²/day
Tomato: 6-10 L/m²/day

Example for 1,000 m² lettuce:
Daily transpiration = 1,000 m² × 4 L/m²/day = 4,000 L/day

Hourly (during 16-hour photoperiod):
Hourly = 4,000 / 16 = 250 L/hr

Latent heat of vaporization = 2,260 kJ/kg
Q_latent = 250 kg/hr × 2,260 kJ/kg / 3,600 s/hr
         = 157 kW (535,000 BTU/hr)

This is SIGNIFICANT - often exceeds sensible load!
```

**Total HVAC Load:**
```
Total cooling capacity = Sensible + Latent
                       = 82 kW + 157 kW
                       = 239 kW (816,000 BTU/hr)
                       = 68 tons of cooling

Sensible Heat Ratio (SHR) = 82 / 239 = 0.34

This low SHR indicates need for substantial dehumidification
```

### 2.3 Safety Factors and Sizing

```
Design Capacity = Calculated Load × Safety Factor

Typical Safety Factors:
- Well-defined loads (lighting): 1.05-1.10
- Variable loads (transpiration): 1.15-1.25
- Unknown factors (new facility): 1.25-1.35

For our example:
Design capacity = 239 kW × 1.20 = 287 kW (82 tons)

Select equipment: (3) 30-ton units or (2) 40-ton units
Recommendation: (3) 30-ton units for redundancy
```

## 3. Dehumidification System Design

### 3.1 Dehumidification Requirements

**Moisture Removal Calculation:**

```
Required dehumidification capacity = Transpiration rate

From previous example:
250 L/hr = 250 kg/hr of water vapor to remove

Convert to common units:
250 kg/hr × 2.2 lb/kg = 550 lb/hr

Daily: 550 × 16 hours = 8,800 lb/day (during photoperiod)
```

### 3.2 Dehumidification Methods

**Option 1: Overcooling and Reheating**

```
Process:
1. Cool air below dewpoint to condense moisture
2. Reheat to desired temperature
3. Supply to space

Energy Analysis:
Cooling energy: 239 kW (to remove moisture)
Reheat energy: ~40 kW (to raise temperature)
Total: 279 kW

Pros:
- Simple control
- Uses standard AC equipment
- Reliable

Cons:
- High energy consumption (cool then heat)
- Inefficient
- High operating cost
```

**Option 2: Dedicated Dehumidification with Heat Recovery**

```
Process:
1. Dedicated DH unit removes moisture
2. Recover condenser heat for reheating
3. Separate sensible cooling system

Equipment:
- Desiccant dehumidifier, or
- Heat pump dehumidifier, or
- Condensing dehumidifier with heat recovery

Energy Analysis:
Dehumidification: 157 kW
Heat recovery efficiency: 60-80%
Net energy input: ~65 kW
Sensible cooling: 82 kW
Total: 147 kW

Savings: 279 - 147 = 132 kW (47% reduction)

Pros:
- Much more efficient
- Lower operating cost
- Better control

Cons:
- Higher capital cost
- More complex system
- Requires space
```

**Option 3: Subcooling Coils with Glycol Loop**

```
Process:
1. Deep cooling coils (35-40°F)
2. Removes maximum moisture
3. Reheat with recovered heat or separate system

Typical design:
Supply air temperature: 40°F off coil
Dewpoint depression: High moisture removal
Reheat to 68°F supply temperature

Moisture removal capacity:
At 40°F SAT and 95% RH: ~4 grains/lb removed
CFM needed = (550 lb/hr × 7000 grains/lb) / (4 grains/lb × 60 min/hr)
           = 16,042 CFM

Pros:
- Excellent moisture removal
- Standard chiller equipment
- Can use for process cooling too

Cons:
- Requires chiller
- Energy intensive
- Careful control needed
```

### 3.3 Recommended System Design

**Hybrid Approach:**

```
System Architecture:

Primary Cooling:
- Standard DX or chilled water units
- Handles sensible load
- Supply temperature: 55-60°F

Dedicated Dehumidification:
- Heat pump dehumidifiers
- Remove latent load
- Heat recovery for efficiency

Sizing:
Primary cooling: 30 tons (sensible)
Dehumidification: 550 lb/hr capacity

Annual Energy Comparison:
Standard system: 350,000 kWh/year
Hybrid system: 220,000 kWh/year
Savings: 130,000 kWh/year × $0.12 = $15,600/year

Capital cost premium: ~$50,000
Simple payback: 3.2 years ✓
```

## 4. Air Distribution System Design

### 4.1 Airflow Requirements

**Air Changes Calculation:**

```
Required air changes = 15-25 ACH for most crops (from design criteria)

For 1,000 m² facility with 6m ceiling height:
Volume = 1,000 m² × 6m = 6,000 m³

At 20 ACH:
Airflow = 6,000 m³ × 20 / 60 min
        = 2,000 m³/min
        = 70,600 CFM

This is total air movement (includes recirculation)
```

**Supply Air Calculation:**

```
Supply CFM = Sensible Load (BTU/hr) / (1.08 × ΔT)

Where:
1.08 = Constant for standard air
ΔT = Supply to room temperature difference

Sensible load = 280,000 BTU/hr
Target ΔT = 10°F (for good distribution)

Supply CFM = 280,000 / (1.08 × 10)
           = 25,926 CFM

Say 26,000 CFM supply air
This is what must come from HVAC units
```

### 4.2 Ductwork Design

**Duct Sizing:**

```
Velocity Method:

Main duct (26,000 CFM):
Target velocity: 1,200-1,800 FPM in mains
Use 1,500 FPM

Area = CFM / Velocity
     = 26,000 / 1,500
     = 17.3 sq ft

For round duct:
Diameter = √(Area × 4 / π)
         = √(17.3 × 4 / 3.14159)
         = 4.7 ft = 56 inches

Select: 56" diameter main duct or equivalent rectangular

Branch ducts (serving 100 m² zones):
CFM per zone = 26,000 / 10 zones = 2,600 CFM
Velocity: 800-1,200 FPM in branches (lower for noise)
Use 1,000 FPM

Area = 2,600 / 1,000 = 2.6 sq ft
Diameter = 21 inches

Select: 20" round or 16"×20" rectangular
```

**Friction Loss Calculation:**

```
Darcy-Weisbach for ducts:

ΔP = f × (L/D) × (ρV²/2)

Simplified (using friction charts):
ΔP per 100 ft = 0.10 in. w.g. (at 1,500 FPM, medium smooth duct)

For 200 ft equivalent length:
Total friction = 0.10 × (200/100) = 0.20 in. w.g.

Add fittings (elbows, transitions, dampers):
Fittings loss = 0.30 in. w.g. (typical)

Total static pressure:
TSP = 0.20 + 0.30 + 0.50 (diffusers) + 1.00 (coils, filters)
    = 2.0 in. w.g.

Fan selection: 26,000 CFM @ 2.0" static pressure
```

### 4.3 Distribution Strategies for Vertical Farms

**Option 1: Overhead Distribution**

```
Configuration:
    [Main Duct]════════════════════
         ║     ║     ║     ║     ║
      [Diff] [Diff] [Diff] [Diff] [Diff]
         ↓     ↓     ↓     ↓     ↓
    ┌────────────────────────────────┐
    │ Growing Level                  │
    │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │
    └────────────────────────────────┘

Pros:
- Simple installation
- Gravity assists air movement
- Easy access for maintenance

Cons:
- Limited ceiling height
- Potential for short-circuiting
- Uneven temperature stratification
```

**Option 2: Side Wall Distribution**

```
Configuration:
║                                   ║
║  [Supply]              [Return]  ║
║     →→→→→→→→→→→→→→→→→→→           ║
║  ┌──────────────────────────┐    ║
║  │ Growing Racks            │    ║
║  │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │    ║
║  └──────────────────────────┘    ║
║                                   ║

Pros:
- Good horizontal distribution
- Minimal interference with racks
- Easier to balance

Cons:
- Requires wall space
- Longer duct runs
- Dead zones possible
```

**Option 3: Under-Rack Plenum (Recommended)**

```
Configuration:

Growing Racks ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
              ══════════════════  Access floor grating
                 ↑  ↑  ↑  ↑  ↑
              ┌────────────────┐
              │ Supply Plenum  │  Pressurized zone
              └────────────────┘
                      ↑
                 [Supply Fan]

Pros:
- Excellent uniformity
- Minimizes overhead obstacles
- Natural upward flow through canopy
- Easy to create zones

Cons:
- Requires raised floor or basement
- Higher construction cost
- Harder to access
```

## 5. Heat Recovery Systems

### 5.1 Heat Recovery Opportunities

**Available Heat Sources:**

```
1. HVAC Condensers:
   Heat rejected = Cooling load + Compressor work
                 = 239 kW + 45 kW = 284 kW
   Available at: 90-110°F

2. LED Fixtures:
   Heat dissipated = 55 kW
   Available at: 100-130°F

3. Dehumidifier Condensers:
   Heat rejected = Latent load + Compressor work
                 = 157 kW + 30 kW = 187 kW
   Available at: 100-120°F

Total available heat: ~530 kW
```

**Heat Demands:**

```
1. Hot Water for Cleaning:
   Daily demand: 2,000 gallons
   Temperature rise: 50°F to 130°F (80°F rise)
   Energy = 2,000 gal × 8.33 lb/gal × 1 BTU/lb·°F × 80°F
          = 1,332,800 BTU/day
          = 55,533 BTU/hr average (continuous)
          = 16.3 kW

2. Space Heating (winter):
   Design heating load: 50 kW
   Average winter demand: 25 kW

3. Root Zone Heating (if applicable):
   For 100 m² propagation area: 5 kW

Total demand: 46 kW average
```

### 5.2 Heat Recovery System Design

**Configuration:**

```
Heat Recovery Loop:

HVAC Condenser → Heat Exchanger → Hot Water Tank
       ↓                              ↓
LED Fixtures  →  Glycol Loop   →  Space Heat Coils
       ↓                              ↓
Dehumidifier  →  Controls      →  Root Zone Heat

System components:
- Primary loop: 50% propylene glycol
- Flow rate: 100 GPM
- Heat exchangers: Plate and frame type
- Storage tank: 500 gallon insulated
- Pumps: Variable speed, 2 HP
- Controls: Modulating 3-way valves
```

**Energy Savings:**

```
Heat recovered: 46 kW average load
Hours of operation: 8,760 hours/year
Percentage of time heat needed: 60% (varies by season)

Annual heat recovered = 46 kW × 8,760 hr × 0.60
                      = 241,776 kWh/year

If replaced by electric resistance heat:
Savings = 241,776 kWh × $0.12/kWh = $29,013/year

Or by natural gas heat (80% efficient, $0.70/therm):
Savings = (241,776 kWh × 3,412 BTU/kWh) / (100,000 BTU/therm × 0.80)
        = 10,306 therms × $0.70 = $7,214/year

System cost: ~$35,000
Payback: 1.2 - 4.9 years (depending on fuel replaced)
```

## 6. Multi-Zone Control Strategies

### 6.1 Zoning Approaches

**Option 1: Multi-Unit System**

```
Configuration:
Zone 1: Germination (3 dedicated units)
Zone 2: Grow Area 1 (4 dedicated units)
Zone 3: Grow Area 2 (4 dedicated units)
Zone 4: Harvest/Pack (1 dedicated unit)

Pros:
- Independent control
- Failure doesn't affect all zones
- Simple to understand
- Easy to sequence

Cons:
- Higher capital cost
- Lower part-load efficiency
- More maintenance points
```

**Option 2: Central System with Zone Dampers**

```
Configuration:
          [Central AHU: 90 tons]
                    ↓
         ┌────────┬─────────┬────────┐
         ↓        ↓         ↓        ↓
      Zone 1   Zone 2   Zone 3   Zone 4
      (VAV)    (VAV)    (VAV)    (VAV)

Pros:
- Lower capital cost
- Better part-load efficiency
- Centralized maintenance
- Easier to balance

Cons:
- Single point of failure risk
- More complex controls
- Limited zone independence
- Requires backup plan
```

**Option 3: Hybrid Approach (Recommended)**

```
Configuration:
Central system (70% capacity) + Zone backup units (30% capacity)

Central: Handles base load, provides primary cooling
Zone units: Provide supplemental capacity and backup

Benefits:
- Efficiency of central system
- Redundancy for critical zones
- Flexible operation
- Best of both approaches
```

### 6.2 Control Sequences

**Temperature Control:**

```
Sequence of Operation:

1. Cooling Mode (T > Setpoint + 1°F):
   - Enable mechanical cooling
   - Modulate cooling output to maintain setpoint
   - If T > Setpoint + 3°F, enable all stages

2. Economizer Mode (if applicable):
   - If outdoor T < indoor T - 5°F
   - And outdoor T > 35°F
   - Open outdoor air damper
   - Use free cooling

3. Heating Mode (T < Setpoint - 1°F):
   - In vertical farms, rarely needed
   - May use recovered heat
   - Or disable cooling to allow heat buildup

4. Deadband (Setpoint ± 1°F):
   - Maintain current state
   - Reduces cycling
   - Improves efficiency
```

**Humidity Control:**

```
Sequence of Operation:

1. Dehumidification (RH > Setpoint + 5%):
   - Enable dedicated dehumidification
   - Increase cooling (if using overcool/reheat)
   - Monitor and log moisture removal

2. Humidification (RH < Setpoint - 5%):
   - Rarely needed in vertical farms
   - If required, use ultrasonic or steam
   - Coordinate with cooling to avoid conflict

3. Normal Range (Setpoint ± 5%):
   - Maintain current humidity control state
   - Monitor transpiration rates
   - Adjust if trending toward limits

Interlocks:
- Disable humidification if cooling active
- Disable dehumidification if heating active
- Override: If RH > 85%, maximum dehumidification
```

## 7. Energy Efficiency Optimization

### 7.1 Efficiency Metrics

**Key Performance Indicators:**

```
1. Energy Efficiency Ratio (EER):
   EER = Cooling Output (BTU/hr) / Power Input (W)

   Target for VF: EER > 12 (good), >15 (excellent)

2. Coefficient of Performance (COP):
   COP = Cooling Output (W) / Power Input (W)

   Target for VF: COP > 3.5 (good), >4.5 (excellent)

3. Power Usage Effectiveness (PUE):
   PUE = Total Facility Power / IT Equipment Power

   Adapted for VF:
   VF-PUE = Total Facility Power / Growing System Power

   Growing system power = Lights + Pumps + Controls
   Total = Growing + HVAC + Other

   Target: VF-PUE < 1.5 (good), <1.3 (excellent)

Example:
Growing system: 120 kW
HVAC: 50 kW
Other: 10 kW
Total: 180 kW

VF-PUE = 180 / 120 = 1.50 (at target) ✓
```

### 7.2 Optimization Strategies

**Variable Speed Drives:**

```
Energy Savings from VFDs:

Fan law relationship:
Power ∝ Speed³

If fan speed reduced to 80% of full:
Power = 0.80³ = 0.512 (51.2% of full power)
Savings = 48.8% when running at 80% speed

Example:
Fan motor: 20 HP (15 kW)
Operating profile:
- 100% speed: 10% of hours
- 80% speed: 60% of hours
- 60% speed: 30% of hours

Annual energy without VFD:
15 kW × 8,760 hours = 131,400 kWh

Annual energy with VFD:
(15 × 0.10 × 1.0) + (15 × 0.60 × 0.512) + (15 × 0.30 × 0.216) × 8,760
= (1.5 + 4.61 + 0.97) × 8,760
= 62,107 kWh

Savings: 69,293 kWh/year × $0.12 = $8,315/year
VFD cost: ~$3,000
Payback: 4.3 months ✓
```

**Night Setback:**

```
Strategy: Reduce cooling during lights-off period

Lights-on (16 hours):
Full cooling load: 239 kW

Lights-off (8 hours):
Reduced load: 40 kW (no lighting heat, minimal transpiration)
Setpoint increased 5°F (saves ~30% cooling)
Effective load: 28 kW

Daily savings:
Normal: (239 × 16) + (184 × 8) = 5,296 kWh/day
Optimized: (239 × 16) + (28 × 8) = 4,048 kWh/day
Savings: 1,248 kWh/day

Annual: 1,248 × 365 = 455,520 kWh
Cost savings: $54,662/year

Implementation cost: Minimal (programming only)
Payback: Immediate ✓
```

## 8. Design Example: Complete HVAC System

**Project Parameters:**
- Facility: 2,000 m² growing area, 8 levels
- Crop: Mixed leafy greens
- LED power: 200 kW installed
- Location: Moderate climate
- Target: Temperature 68°F ± 2°F, RH 65% ± 5%

**Solution:**

```
Load Calculations:
Sensible load: 165 kW (563,000 BTU/hr)
Latent load: 314 kW (1,071,000 BTU/hr)
Total load: 479 kW (1,634,000 BTU/hr) = 137 tons

System Selection:
(4) 40-ton air-cooled condensing units with hot gas reheat
(2) 300 lb/hr heat pump dehumidifiers with heat recovery
Variable speed supply and return fans

Distribution:
Main supply: 52,000 CFM via underfloor plenum
(8) zone VAV dampers for level control
Return through ceiling plenum

Controls:
BAS with zone temperature and humidity control
VFD on all fans
Sequencing for efficiency
Heat recovery prioritization

Performance:
Design EER: 14.2
VF-PUE: 1.42
Annual energy: 825,000 kWh
Annual cost: $99,000

With heat recovery:
Net energy: 675,000 kWh
Net cost: $81,000
Savings: $18,000/year
```

## 9. Key Takeaways

1. **Latent load dominates** - Moisture removal often requires more energy than cooling

2. **Dehumidification strategy is critical** - Dedicated dehumidification with heat recovery provides best ROI

3. **Air distribution matters** - Uniform airflow prevents hot spots and disease issues

4. **Heat recovery is valuable** - Abundant waste heat can offset other energy needs

5. **Zone control adds efficiency** - Different areas have different needs; don't over-condition

6. **Variable speed is essential** - Loads vary dramatically; VFDs save substantial energy

7. **Controls make or break performance** - Good sequences extract maximum efficiency from equipment

## 10. Practical Exercise

Design HVAC system for:
- 1,500 m² facility
- Tomato production (high transpiration)
- 150 kW LED lighting
- Target: 72°F, 65% RH

Deliverables:
1. Complete load calculations
2. Equipment selection and sizing
3. Distribution system design
4. Control sequences
5. Energy analysis and payback

## Additional Resources

- ASHRAE Handbook: HVAC Applications (Chapter on Controlled Environment Agriculture)
- ASHRAE Standard 62.1: Ventilation for Acceptable Indoor Air Quality
- Manufacturer equipment selection software
- Psychrometric analysis tools

## Next Module

**Module 5: Precision Irrigation and Fertigation Engineering** - Design water delivery systems with precision control for optimal plant nutrition.

---

**Module 4 Complete** - Proceed to Module 4 Quiz to test your understanding of advanced HVAC design.
