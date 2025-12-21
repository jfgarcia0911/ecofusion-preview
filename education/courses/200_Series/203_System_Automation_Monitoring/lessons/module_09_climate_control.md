# Module 9: Climate Control Automation
**Course 203: System Automation & Monitoring**
Duration: 1 hour

---

## Learning Objectives

By the end of this module, you will be able to:
1. Design integrated HVAC automation for greenhouses
2. Implement intelligent lighting control systems
3. Automate ventilation based on temperature and humidity
4. Control shade and curtain systems for climate optimization
5. Manage multi-zone climate control
6. Optimize energy usage through automation

---

## 9.1 HVAC Integration

### Greenhouse Heating Systems

**Common Heating Methods:**
1. **Unit Heaters** (forced air)
   - Gas, propane, or electric
   - Quick response, good air circulation
   - Control: Simple on/off via thermostat

2. **Radiant Floor Heating**
   - Hot water through floor pipes
   - Gentle, even heat
   - Control: Zone valves, boiler temperature

3. **Boiler Systems** (hot water/steam)
   - Central boiler, distribution pipes
   - Can heat large areas
   - Control: Modulating burner, zone valves

**Basic Heating Control:**

```
Simple Staged Heating:

Stage 1: Heat mat (gentle, always on when cold)
  IF Temp < 68°F THEN Heat_Mat = ON

Stage 2: Unit heater low fire
  IF Temp < 66°F THEN Heater_Low = ON

Stage 3: Unit heater high fire
  IF Temp < 64°F THEN Heater_High = ON

Hysteresis: Turn off 2°F above setpoint
```

**Advanced: Outdoor Temperature Compensation**

```
Adjust indoor setpoint based on outdoor conditions:

IF Outdoor_Temp < 32°F THEN
  Indoor_Target = 72°F (higher to compensate for cold structure)
ELSE IF Outdoor_Temp < 50°F THEN
  Indoor_Target = 70°F
ELSE
  Indoor_Target = 68°F
END IF

Reduces energy waste, maintains plant comfort
```

### Cooling Strategies

**1. Evaporative Cooling (Pad-and-Fan)**

```
╔═══════════════════════════════════════════════════════════════╗
║              PAD-AND-FAN COOLING SYSTEM                       ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║   [Wet Pad]              [Greenhouse]         [Exhaust Fans]  ║
║      │                        │                     │         ║
║   Outside    →→→    Cooled Air Inside    →→→    Hot Air Out  ║
║   Hot Air            (evaporative              (negative      ║
║                       cooling)                  pressure)     ║
║                                                               ║
║   Control:                                                    ║
║   IF Temp > 80°F AND Humidity < 80% THEN                      ║
║     Pad_Pump = ON (wet the pads)                              ║
║     Fans = ON (pull air through)                              ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
```

**Effectiveness:** Can cool 10-20°F below ambient (depends on humidity)

**Limitations:**
- Doesn't work well in high humidity
- Adds moisture to air
- Requires water supply

**2. Ventilation (Natural or Forced)**

```
Natural Ventilation:
  • Roof vents open (hot air rises, escapes)
  • Side vents open (cool air enters)
  • Driven by temperature differential and wind

Forced Ventilation:
  • Exhaust fans pull air out
  • Intake vents allow fresh air in
  • Positive control, reliable

Staged Ventilation Control:
  75°F: Open vents 10%
  80°F: Open vents 50%, fan 1 ON low speed
  85°F: Vents 100%, fan 1 high, fan 2 ON
  90°F: All fans full speed
```

**3. Mechanical Cooling (Air Conditioning)**

```
Rare in greenhouses (expensive) but used for:
  • Seed starting rooms
  • High-value crops requiring precise temp
  • Hot climates where other methods insufficient

Control: Standard thermostat or VFD for modulation
```

---

## 9.2 Lighting Control Systems

### Why Automate Lighting?

**Benefits:**
1. **Consistent DLI** (Daily Light Integral)
   - Supplement natural light to hit target
   - Uniform crop development

2. **Energy Savings**
   - Only use supplemental light when needed
   - Dim or turn off lights during bright days

3. **Photoperiod Control**
   - Specific day length for flowering crops
   - Precise timing for short/long-day plants

### Control Strategies

#### 1. Simple Timer Control

```
Basic ON/OFF Schedule:

ON at 6:00 AM
OFF at 10:00 PM
(16-hour photoperiod)

Implementation:
  • Digital timer ($20-50)
  • Lighting contactor (relay for high current)

Limitations:
  • Doesn't account for natural light
  • Wastes energy on sunny days
```

#### 2. Light-Level Based Control (Better)

```
Target: 400 µmol/m²/s PPFD (lettuce)

Controller reads PAR sensor:
  Natural light: 200 µmol/m²/s
  Deficit: 400 - 200 = 200 µmol/m²/s needed

IF PAR < Target THEN
  Lights = ON
ELSE
  Lights = OFF
END IF

Benefit: Lights only on when needed, saving energy
```

#### 3. DLI-Based Control (Best)

```
Target: 17 mol/m²/day DLI (lettuce)

Controller tracks cumulative light throughout day:

Current time: 2:00 PM (10 hours into 16-hour photoperiod)
Accumulated DLI so far: 8 mol/m²/day (from sun and lights)
Target at this point: 10.6 mol/m²/day (17 × 10/16)
Deficit: 2.6 mol/m²/day

Adjust supplemental lighting intensity to meet deficit:
  Hours remaining: 6
  PPFD needed: 2.6 mol ÷ 6 hrs ÷ 3.6 = 120 µmol/m²/s

Controller dims lights to 30% (if max output = 400 µmol/m²/s)

Benefits:
  • Minimizes energy use
  • Ensures target DLI met even on cloudy days
  • Prevents excessive light on sunny days
```

### Dimming Methods

**1. PWM (Pulse Width Modulation)**

```
Rapidly switch lights on/off:
  100% brightness: ON continuously
  50% brightness: ON 50% of time, OFF 50% (very fast switching)
  25% brightness: ON 25% of time, OFF 75%

Frequency: 1000+ Hz (invisible to human eye, plants)

Advantages:
  • Simple, inexpensive
  • Compatible with most LED drivers

Disadvantages:
  • Not all lights support PWM
  • Can cause flicker if frequency too low
```

**2. 0-10V Analog Dimming**

```
Dimming signal: 0-10V

0V = 0% brightness (off)
5V = 50% brightness
10V = 100% brightness (full)

Controller outputs analog voltage
LED driver adjusts current accordingly

Advantages:
  • Smooth dimming
  • Standard in commercial lighting

Disadvantages:
  • Requires compatible drivers
  • More expensive than on/off
```

**3. DALI (Digital Addressable Lighting Interface)**

```
Digital protocol for lighting control
Each fixture has unique address

Controller can:
  • Dim individual fixtures or groups
  • Monitor fixture status
  • Receive feedback

Advantages:
  • Precise, individual control
  • Two-way communication
  • Scalable

Disadvantages:
  • Most expensive
  • Requires DALI-compatible fixtures and controller
```

---

## 9.3 Ventilation Automation

### Ventilation Requirements

**Air Exchange Goals:**
1. **Temperature control:** Remove excess heat
2. **Humidity control:** Remove moisture, prevent disease
3. **CO₂ replenishment:** Fresh air for photosynthesis (if not enriching)
4. **Air circulation:** Prevent stratification, strengthen plants

**Target Air Exchange Rates:**
- Minimum: 1-2 air changes per hour (low ventilation)
- Moderate: 4-8 air changes per hour (active ventilation)
- Maximum: 30-60 air changes per hour (cooling mode)

### Motorized Vent Control

**Vent Actuators:**
```
Types:
  • Linear actuators: Push/pull to open roof vents
  • Rack-and-pinion: Motor drives gear to open vents
  • Chain drive: Continuous vents (roll-up sides)

Control:
  • 24VAC or 120VAC motor
  • Limit switches (fully open, fully closed positions)
  • 0-10V or 4-20mA for proportional control

Cost: $100-500 per actuator
```

**Proportional Vent Control:**

```
Temperature-based vent positioning:

65°F: Vents 0% (closed)
70°F: Vents 20% (crack open for minimum fresh air)
75°F: Vents 50%
80°F: Vents 75%
85°F: Vents 100% (fully open)

Formula:
Vent_Position = ((Temp - 65) / (85 - 65)) × 100%

Benefits:
  • Gradual response, avoids shocking plants
  • Energy efficient (use free cooling before fans)
```

**Rain and Wind Interlocks:**

```
Safety overrides:

IF Rain_Sensor = WET THEN
  Close all vents immediately
  Switch to recirculation fans
END IF

IF Wind_Speed > 25 MPH THEN
  Close windward vents (prevent damage)
  Reduce vent opening to 50% max
END IF
```

### Exhaust Fan Staging

**Multi-Stage Fan Control:**

```
Stage 1 (Temp > 75°F): Fan 1 at 25% speed (VFD)
Stage 2 (Temp > 78°F): Fan 1 at 50% speed
Stage 3 (Temp > 80°F): Fan 1 at 100% speed
Stage 4 (Temp > 82°F): Fan 2 at 50% speed
Stage 5 (Temp > 85°F): Fan 2 at 100% speed
Stage 6 (Temp > 88°F): Fan 3 at 100% (emergency)

Advantages:
  • Smooth temperature control
  • Energy savings (VFD reduces power at low speeds)
  • Reduced noise
  • Longer equipment life
```

**HAF (Horizontal Air Flow) Fans:**

```
Purpose: Circulate air within greenhouse, prevent stratification

Control:
  • Typically run continuously or on 15-minute cycles
  • Alternate direction every 30 minutes (if reversible)
  • Low speed for gentle air movement

Benefit: More uniform temperature, reduced disease pressure
```

---

## 9.4 Shade and Curtain Systems

### Types of Curtains

**1. Energy Curtains (Thermal Blankets)**
```
Purpose: Reduce heat loss at night, trap heat near plants

Material: Aluminized or reflective fabric

Schedule:
  Close: Sunset or when heating demand increases
  Open: Sunrise or when photosynthesis begins

Energy savings: 30-60% reduction in heating costs

Automation:
  Motorized system on tracks
  Controller based on light level, time, temperature
```

**2. Shade Curtains**
```
Purpose: Reduce light intensity and heat load in summer

Material: Woven shade cloth (30-70% shade)

Control based on:
  • Light intensity (PAR sensor)
  • Temperature (cool greenhouse on hot days)
  • Crop requirements (some crops prefer shade)

Example Logic:
  IF (PAR > 1000 µmol/m²/s) OR (Temp > 85°F) THEN
    Shade = 50% closed
  END IF
```

**3. Blackout Curtains**
```
Purpose: Photoperiod control for day-length sensitive crops

Material: Opaque fabric (blocks all light)

Use cases:
  • Extend night for short-day plants (poinsettias, cannabis)
  • Provide complete darkness for quality/flowering

Critical: Must be lightproof, precisely timed
```

### Curtain Control Logic

**Energy-Optimized Curtain Control:**

```
Multi-factor decision:

Outside_Temp = 30°F
Inside_Temp = 68°F
Solar_Radiation = 200 W/m² (cloudy)
Time = 8:00 PM

Decision tree:
  Is it nighttime? YES
  Is it cold outside (<50°F)? YES
  Is solar gain available? NO (nighttime)
  → CLOSE energy curtain (conserve heat)

Different scenario:
Outside_Temp = 30°F
Inside_Temp = 68°F
Solar_Radiation = 800 W/m² (sunny)
Time = 11:00 AM

Decision:
  Is it daytime? YES
  Is heating needed? YES (cold outside)
  Is solar gain available? YES (sunny)
  → OPEN curtain (allow free solar heating)
```

**Advanced: VPD-Based Curtain Control**

```
VPD (Vapor Pressure Deficit) = f(Temperature, Humidity)

Ideal VPD for most crops: 0.8-1.2 kPa

IF VPD > 1.5 kPa THEN
  Plants stressed (too dry)
  CLOSE curtains partially (trap moisture, reduce transpiration)

IF VPD < 0.6 kPa THEN
  Too humid, disease risk
  OPEN curtains (increase air exchange, dehumidify)
```

---

## 9.5 Climate Zone Management

### Multi-Zone Control

**Scenario: Greenhouse with 4 Growing Zones**

```
╔═══════════════════════════════════════════════════════════════╗
║              MULTI-ZONE GREENHOUSE LAYOUT                     ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║   ┌────────────┬────────────┬────────────┬────────────┐      ║
║   │  Zone 1    │  Zone 2    │  Zone 3    │  Zone 4    │      ║
║   │  Seedlings │  Lettuce   │  Tomatoes  │  Herbs     │      ║
║   │  75°F      │  65°F      │  70°F      │  68°F      │      ║
║   │  80% RH    │  60% RH    │  70% RH    │  65% RH    │      ║
║   └────────────┴────────────┴────────────┴────────────┘      ║
║                                                               ║
║   Each zone has:                                              ║
║   • Temperature sensor                                        ║
║   • Humidity sensor                                           ║
║   • Heating valve (hot water zone)                            ║
║   • Ventilation control (vent or fan)                         ║
║   • Optional: Separate curtain or lighting                    ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
```

**Zone-Specific Control:**
- Each zone maintains its own setpoints
- Controller manages zone valves, vents independently
- Challenges: Heat/humidity migration between zones
- Solutions: Physical barriers, independent HVAC

### Master Control Strategies

**Option 1: Prioritize Coldest Zone (Heating)**

```
Read all zone temperatures:
  Zone 1: 74°F (target 75°F) → needs heat
  Zone 2: 66°F (target 65°F) → OK
  Zone 3: 69°F (target 70°F) → needs heat
  Zone 4: 68°F (target 68°F) → OK

Boiler setpoint = Max temperature needed across all zones
Open zone valves for zones needing heat
Result: Efficient, all zones satisfied
```

**Option 2: Hottest Zone Controls Cooling**

```
Read all zone temperatures:
  Zone 1: 76°F (target 75°F, +1°F over)
  Zone 2: 68°F (target 65°F, +3°F over) ← HOTTEST delta
  Zone 3: 71°F (target 70°F, +1°F over)
  Zone 4: 69°F (target 68°F, +1°F over)

Ventilation controlled by Zone 2 (hottest relative to target)
All zones cool together
```

---

## 9.6 Energy Optimization

### Energy Monitoring

**Key Metrics:**
```
Track:
  • kWh used by lighting
  • kWh used by heating/cooling
  • Gas/propane consumption (heating)
  • Water usage (evaporative cooling)

Analyze:
  • Energy per pound of produce
  • Seasonal trends
  • Identify waste (heating and cooling simultaneously)
```

**Energy Reduction Strategies:**

**1. Thermal Curtains**
- Close at night → Reduce heat loss
- Savings: 30-60%
- Payback: 1-3 years

**2. Efficient Lighting**
- LEDs vs. HPS: 40-50% energy savings
- Dimming based on natural light
- Proper light targeting (no spillage)

**3. Heat Recovery**
```
Capture waste heat:
  • Exhaust air heat exchanger
  • Capture heat from lights (air-cooled fixtures)
  • Ground-source heat pumps

Can recover 50-70% of exhaust heat
```

**4. Intelligent Setpoint Management**
```
DIF (Day/Night Temperature Differential):

Day: 70°F
Night: 68°F (only 2°F drop)

Benefits:
  • Reduced stem elongation (compact plants)
  • Energy savings (less heating at night)

Some crops benefit from wider DIF (4-6°F) for quality
```

**5. Demand-Based Ventilation**

```
Don't ventilate on timer - ventilate based on need:

Traditional: Ventilate every 15 minutes for 5 minutes
  → Wastes energy if not needed

Optimized: Ventilate when:
  • Temp > setpoint + 1°F, OR
  • Humidity > 80%, OR
  • CO₂ < 300 ppm (if enriching)

Savings: 20-40% reduction in heating/cooling load
```

---

## Summary

Climate control automation creates optimal growing conditions while minimizing energy waste:

**Key Takeaways:**

1. **Staging:** Gradual response (vents → fans low → fans high) prevents overcorrection
2. **Integration:** Coordinate heating, cooling, vents, curtains for efficiency
3. **Lighting:** DLI-based control optimizes supplemental lighting energy
4. **Ventilation:** Proportional control and rain/wind interlocks
5. **Curtains:** Energy curtains dramatically reduce heating costs
6. **Multi-Zone:** Independent control allows diverse crops
7. **Energy Monitoring:** Track and optimize energy usage continuously

**Implementation Priority:**
1. Basic heating/cooling control
2. Ventilation automation
3. Lighting timers → DLI control
4. Energy curtains (high ROI)
5. Advanced strategies (VPD, DIF, heat recovery)

**Energy Savings Potential:**
- Basic automation: 20-30% savings
- Advanced optimization: 40-60% savings
- Payback period: 1-5 years depending on scale

---

## Review Questions

1. What is staged heating/cooling control and why is it beneficial?
2. How does evaporative cooling work and when is it effective?
3. What is DLI and how can automation optimize supplemental lighting?
4. What are the three main types of greenhouse curtains and their purposes?
5. How should ventilation respond to rain sensor input?
6. What is VPD and how can it guide climate control decisions?
7. What energy savings can energy curtains provide?
8. How does multi-zone control work in a greenhouse?

---

## Practical Exercise

**Exercise: Design an Integrated Climate Control System**

Design a complete climate control system for a 3,000 sq ft greenhouse growing tomatoes year-round:

**System Requirements:**
- Temperature control (heating and cooling)
- Humidity management
- Supplemental lighting
- Ventilation
- Energy curtains

**Your tasks:**

1. **Select equipment:**
   - Heaters (type, capacity in BTU)
   - Cooling (evaporative, fans)
   - Lights (type, wattage, coverage)
   - Vents/fans (CFM calculations)
   - Curtain system
   - Sensors needed

2. **Design control logic:**
   - Heating stages and setpoints
   - Cooling/ventilation stages
   - Lighting schedule and intensity
   - Curtain automation
   - Safety interlocks (rain, wind, etc.)

3. **Energy analysis:**
   - Estimate annual energy consumption
   - Calculate energy savings from curtains and automation
   - Project ROI

4. **Create diagrams:**
   - System layout
   - Control logic flowchart
   - Wiring diagram (basic)

**Deliverable:** Complete climate control system design with equipment specifications, control logic, energy analysis, and diagrams.

---

*End of Module 9*
