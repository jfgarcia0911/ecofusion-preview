# Module 2: Sensor Technologies Overview
**Course 203: System Automation & Monitoring**
Duration: 1 hour

---

## Learning Objectives

By the end of this module, you will be able to:
1. Explain the fundamental operating principles of common sensor types
2. Differentiate between accuracy, precision, and resolution in sensor specifications
3. Compare analog vs. digital sensor outputs and their applications
4. Select appropriate sensors based on application requirements
5. Understand calibration principles and procedures
6. Evaluate cost vs. performance trade-offs in sensor selection

---

## 2.1 Sensor Fundamentals

### What is a Sensor?

A **sensor** (or transducer) is a device that detects or measures a physical property and converts it into an electrical signal that can be read and interpreted.

```
Physical Property → Sensor → Electrical Signal → Display/Controller
   (pH, temp,              (voltage, current,    (numbers,
    light, etc.)            resistance, digital)   decisions)
```

### Why Sensors Matter in CEA

Quality sensors are the foundation of good automation:
- **Accurate data** enables good decisions
- **Reliable sensors** prevent false alarms
- **Appropriate sensors** match application needs
- **Well-maintained sensors** maintain performance over time

**Garbage In, Garbage Out:** No amount of sophisticated control can compensate for poor sensor data.

---

## 2.2 Key Sensor Specifications

### 2.2.1 Accuracy

**Definition:** How close a measurement is to the TRUE value.

```
Example: pH Sensor Accuracy ±0.1 pH

True pH: 6.5
Sensor A reads: 6.4 to 6.6 (ACCURATE - within ±0.1)
Sensor B reads: 7.2 (INACCURATE - outside ±0.1)
```

**Factors Affecting Accuracy:**
- Sensor quality and design
- Calibration status
- Age and wear
- Environmental conditions
- Interference from other substances

**Typical Accuracy Specifications:**

| Sensor Type | Good Accuracy | Acceptable | Poor |
|-------------|---------------|------------|------|
| pH | ±0.05 pH | ±0.1 pH | ±0.2+ pH |
| Temperature | ±0.2°C | ±0.5°C | ±1.0+ °C |
| EC/TDS | ±1% | ±2% | ±5%+ |
| Dissolved Oxygen | ±0.1 mg/L | ±0.2 mg/L | ±0.5+ mg/L |
| Humidity | ±2% RH | ±3% RH | ±5%+ RH |

### 2.2.2 Precision (Repeatability)

**Definition:** How consistently a sensor reports the same value for the same condition.

```
Example: Temperature Sensor Precision

True temperature: 25.0°C

High Precision Sensor:
  Reading 1: 25.1°C
  Reading 2: 25.1°C
  Reading 3: 25.1°C
  (Consistent, but slightly inaccurate)

Low Precision Sensor:
  Reading 1: 24.8°C
  Reading 2: 25.4°C
  Reading 3: 24.9°C
  (Inconsistent and inaccurate)
```

**Important Distinction:**
- A sensor can be **precise but inaccurate** (consistently wrong)
- A sensor can be **accurate but imprecise** (sometimes right, but variable)
- Best sensors are both **accurate AND precise**

```
╔══════════════════════════════════════════════════════════╗
║        ACCURACY vs. PRECISION VISUALIZATION              ║
╠══════════════════════════════════════════════════════════╣
║                                                          ║
║  High Accuracy          Low Accuracy                     ║
║  High Precision         High Precision                   ║
║                                                          ║
║       •                        •                         ║
║      •◯•                      •••                        ║
║       •                        •                         ║
║   (centered on          (clustered, but                  ║
║    true value)           away from target)               ║
║                                                          ║
║                                                          ║
║  High Accuracy          Low Accuracy                     ║
║  Low Precision          Low Precision                    ║
║                                                          ║
║     • ◯                    •                             ║
║    •     •                •   •                          ║
║       •                      •   •                       ║
║   (scattered but        (scattered AND                   ║
║    around target)        away from target)               ║
║                                                          ║
║  ◯ = True Value                                          ║
║                                                          ║
╚══════════════════════════════════════════════════════════╝
```

### 2.2.3 Resolution

**Definition:** The smallest change in the measured value that the sensor can detect.

```
Example: Temperature Sensor Resolution

Sensor A: 0.1°C resolution
  Can distinguish: 25.0°C, 25.1°C, 25.2°C

Sensor B: 1.0°C resolution
  Can only report: 25°C, 26°C, 27°C
  (Cannot detect 25.5°C)
```

**Resolution Requirements by Application:**

| Application | Needed Resolution | Why |
|-------------|-------------------|-----|
| Fish tank temperature | 0.1°C | Fish sensitive to small changes |
| Greenhouse air temp | 0.5°C | Adequate for climate control |
| Nutrient solution pH | 0.01 pH | Small pH changes matter |
| Greenhouse humidity | 1% RH | Sufficient for most crops |
| Nutrient EC | 0.01 mS/cm | Precision fertilization |

**Rule of Thumb:** Sensor resolution should be at least 5-10× finer than your control deadband.

### 2.2.4 Response Time

**Definition:** How quickly a sensor responds to changes in the measured parameter.

```
Example: Temperature Sensor Response Time

Water temperature drops from 75°F to 70°F

Fast Response (T90 = 10 seconds):
  - Reads 70°F within 10 seconds
  - Controller responds quickly

Slow Response (T90 = 5 minutes):
  - Takes 5 minutes to read 70°F
  - Controller lags behind actual conditions
```

**T90 Specification:** Time to reach 90% of the final value after a step change.

**Application Considerations:**

| Application | Response Time Needed | Reason |
|-------------|---------------------|---------|
| Fish tank DO alarm | Fast (< 30 sec) | Rapid O2 changes can be fatal |
| Greenhouse air temp | Medium (1-2 min) | Changes relatively slowly |
| Nutrient solution pH | Medium (1 min) | Allows stabilization |
| Soil moisture | Slow (5+ min) | Changes very gradually |

### 2.2.5 Range and Span

**Range:** The minimum and maximum values the sensor can measure.

```
Examples:

pH Sensor: Range 0-14 pH
  - Covers all aqueous solutions
  - May have best accuracy in 4-10 pH range

Temperature Sensor: Range -40 to 125°C
  - Covers all CEA applications
  - But may be overkill for 15-30°C greenhouse
```

**Match Sensor Range to Application:**
- Wider range often means lower accuracy in your specific zone
- Narrower range can mean better performance in target zone
- Choose sensor optimized for your typical conditions

---

## 2.3 Analog vs. Digital Sensors

### Analog Sensors

**Output:** Continuous voltage or current signal

```
Example: Analog Temperature Sensor (Thermistor)

Temperature → Resistance → Voltage (via circuit) → ADC → Digital Value

Typical Output: 0-5V or 0-10V or 4-20mA

10°C → 1.0V
15°C → 1.5V
20°C → 2.0V
25°C → 2.5V
```

**Advantages:**
- Simple and inexpensive
- Widely compatible
- No complex protocols
- Good for short distances (< 10 meters)

**Disadvantages:**
- Susceptible to electrical noise
- Signal degrades over long cables
- Requires analog-to-digital conversion
- Less information (just the value)
- No error checking

**Common Analog Outputs:**

| Output Type | Range | Use Case | Distance Limit |
|-------------|-------|----------|----------------|
| 0-5V | 0 to 5 volts | Arduino, basic controllers | 3 meters |
| 0-10V | 0 to 10 volts | Industrial controllers | 10 meters |
| 4-20mA | 4 to 20 milliamps | Industrial (noise-resistant) | 300 meters |

**Why 4-20mA Instead of 0-20mA?**
- 4mA = 0% (sensor working, reading minimum)
- 0mA = Broken wire or power failure (distinguishable from low reading)
- 20mA = 100% (maximum reading)

### Digital Sensors

**Output:** Digital data stream (numbers, not voltage levels)

```
Example: Digital Temperature Sensor (DS18B20)

Temperature → Digital Chip → Direct Digital Reading

Output: "25.3°C" (or 0x019D in hex)

No voltage interpretation needed - it's already a number.
```

**Advantages:**
- Immune to electrical noise
- Works over long distances (100+ meters)
- No ADC needed
- Can include multiple values (temp + humidity + pressure)
- Built-in error checking
- Multiple sensors on one wire (addressable)

**Disadvantages:**
- More complex to interface
- Requires compatible controller
- Usually more expensive
- Requires specific communication protocol

**Common Digital Protocols:**

| Protocol | Speed | Distance | Common Use |
|----------|-------|----------|------------|
| I2C | Medium | < 1 meter | Sensors on same board |
| SPI | Fast | < 1 meter | High-speed local sensing |
| 1-Wire | Slow | 100+ meters | Temperature sensors |
| RS485 | Medium | 1200 meters | Industrial sensors |
| Modbus | Medium | 1000+ meters | Industrial automation |

### Analog vs. Digital Decision Matrix

| Factor | Choose Analog | Choose Digital |
|--------|---------------|----------------|
| **Distance** | < 10 meters | > 10 meters |
| **Environment** | Clean, low-noise | Noisy, industrial |
| **Number of sensors** | 1-4 | Many (5+) |
| **Controller** | Simple (Arduino) | Advanced (RPi, PLC) |
| **Budget** | Lower | Higher (but worth it) |
| **Precision needed** | Moderate | High |

---

## 2.4 Wired vs. Wireless Sensors

### Wired Sensors

**How They Work:** Physical cable connects sensor to controller.

```
╔════════════════════════════════════════════════════════╗
║               WIRED SENSOR SYSTEM                      ║
╠════════════════════════════════════════════════════════╣
║                                                        ║
║  [Sensor] ─────(cable)───── [Controller/Display]      ║
║                                                        ║
║  Advantages:                                           ║
║  • Reliable connection                                 ║
║  • No batteries to change                              ║
║  • No wireless interference                            ║
║  • Lower cost per sensor                               ║
║  • Fast, continuous data                               ║
║                                                        ║
║  Disadvantages:                                        ║
║  • Installation labor (running cables)                 ║
║  • Limited mobility                                    ║
║  • Cable can be damaged                                ║
║  • Messy in some installations                         ║
║                                                        ║
╚════════════════════════════════════════════════════════╝
```

**Best For:**
- Permanent installations
- Critical monitoring (reliability essential)
- Multiple sensors in same area
- High data rate applications
- Budget-conscious projects

### Wireless Sensors

**How They Work:** Radio transmission sends data from sensor to receiver.

```
╔════════════════════════════════════════════════════════╗
║              WIRELESS SENSOR SYSTEM                    ║
╠════════════════════════════════════════════════════════╣
║                                                        ║
║  [Sensor] ~~~(wireless)~~~ [Receiver/Controller]       ║
║    (battery)                                           ║
║                                                        ║
║  Advantages:                                           ║
║  • Easy installation (no cables)                       ║
║  • Flexible placement                                  ║
║  • Can reach difficult locations                       ║
║  • Clean appearance                                    ║
║  • Easy to relocate                                    ║
║                                                        ║
║  Disadvantages:                                        ║
║  • Battery replacement needed                          ║
║  • Radio interference possible                         ║
║  • Limited range (walls, metal obstacles)              ║
║  • Higher cost per sensor                              ║
║  • Data transmission gaps possible                     ║
║                                                        ║
╚════════════════════════════════════════════════════════╝
```

**Common Wireless Technologies:**

| Technology | Range | Power | Cost | Use Case |
|------------|-------|-------|------|----------|
| **Bluetooth** | 10-30m | Low | $$ | Personal devices, short range |
| **Wi-Fi** | 50-100m | High | $$$ | Internet-connected sensors |
| **LoRa** | 2-5 km | Very Low | $$ | Long range, rural areas |
| **Zigbee** | 10-100m | Very Low | $$ | Sensor networks, mesh |
| **Cellular** | Unlimited | High | $$$$ | Remote monitoring, backup |

**Battery Life Considerations:**

```
Typical Wireless Sensor Battery Life:

Frequent Transmission (every 5 seconds):
  → 2-6 months battery life

Moderate Transmission (every 5 minutes):
  → 1-2 years battery life

Infrequent Transmission (every 30 minutes):
  → 3-5 years battery life

Calculation:
  Battery life ∝ (Battery capacity) / (Transmission frequency × TX power)
```

### Hybrid Approach: Wired Power, Wireless Data

Best of both worlds for permanent installations:
- Sensor powered by wire (no batteries to change)
- Data transmitted wirelessly (easy installation)
- Example: Wi-Fi temperature sensor with USB power

---

## 2.5 Sensor Calibration Principles

### What is Calibration?

**Calibration** is the process of comparing a sensor's reading to a known standard and adjusting it to read correctly.

### Why Calibrate?

1. **Sensors drift over time** - Chemical changes, fouling, wear
2. **Initial accuracy varies** - Manufacturing tolerances
3. **Environmental effects** - Temperature, aging
4. **Regulatory compliance** - Food safety, quality standards

### Types of Calibration

#### 1. Single-Point Calibration

**Process:** Adjust sensor to match one known reference value.

```
Example: Offset Calibration

Known standard: 7.00 pH buffer
Sensor reads: 7.23 pH
Adjustment: -0.23 pH offset

After calibration:
  All readings adjusted by -0.23
  7.23 → 7.00 (at calibration point)
  6.50 → 6.27 (at other pH values)
```

**Best For:**
- Quick checks
- Sensors with primarily offset errors
- Limited time/resources

**Limitations:**
- Doesn't correct for slope errors
- Less accurate far from calibration point

#### 2. Two-Point Calibration

**Process:** Adjust sensor using two known reference values.

```
Example: pH Two-Point Calibration

Known standards: 4.00 pH and 7.00 pH buffers

Before calibration:
  Sensor at pH 4.00 reads: 4.15
  Sensor at pH 7.00 reads: 7.10

Adjustment: Offset AND slope correction

After calibration:
  Sensor at pH 4.00 reads: 4.00 ✓
  Sensor at pH 7.00 reads: 7.00 ✓
  Sensor at pH 6.00 reads: 6.00 (interpolated)
```

**Best For:**
- Most routine calibrations
- Sensors used across a range
- Production environments

#### 3. Multi-Point Calibration

**Process:** Use 3+ reference points for best accuracy.

**Best For:**
- Critical measurements
- Wide measurement ranges
- Non-linear sensors
- Laboratory/research applications

### Calibration Standards

**Requirements for Good Standards:**
- Certified accuracy (traceable to national standards)
- Fresh and uncontaminated
- Stored properly (sealed, cool, dark)
- Within expiration date
- Appropriate for sensor type

**Common Calibration Standards:**

| Parameter | Standard Solutions | Cost | Shelf Life |
|-----------|-------------------|------|------------|
| pH | Buffer packets (4.01, 7.00, 10.01) | $10-30 | 1-2 years |
| EC/TDS | Conductivity standard (1413 µS/cm) | $15-25 | 2+ years |
| DO | Air saturation (100%) or zero-DO | Free/$ | N/A / 1 year |
| ORP | 470 mV standard solution | $30-50 | 1 year |

### Calibration Frequency

**General Guidelines:**

| Sensor Type | Calibration Frequency | Rationale |
|-------------|----------------------|-----------|
| pH | Weekly | Drifts quickly, critical parameter |
| EC/TDS | Monthly | More stable than pH |
| Dissolved Oxygen | Weekly | Membrane degrades, fouling |
| Temperature | Annually | Very stable |
| Humidity | Quarterly | Moderately stable |
| ORP | Monthly | Less critical, slower drift |

**High-Use or Critical Applications:** Calibrate more frequently.

**How to Tell if Calibration is Needed:**
```
Warning Signs:
• Sensor reads far from expected (e.g., pH 7 buffer reads 6.5)
• Sensor value drifts while standard is stable
• Noisy or unstable readings
• Doesn't respond to changes
• Failed calibration check
• After any impact or mishandling
```

### Calibration Procedure Best Practices

**Step-by-Step Process:**

1. **Prepare:**
   - Gather fresh standards
   - Clean sensor probe
   - Let probe acclimate to room temperature
   - Have clean rinse water (DI or distilled)

2. **Calibrate:**
   - Start with standard closest to expected readings
   - Immerse sensor completely (check manufacturer specs)
   - Wait for stable reading (30-60 seconds)
   - Adjust to correct value
   - Rinse thoroughly
   - Repeat for second standard

3. **Verify:**
   - Check a third standard or recheck first standard
   - Reading should be within specification
   - If not, repeat calibration or replace sensor

4. **Document:**
   - Record date, time, operator
   - Record pre-calibration readings
   - Record post-calibration readings
   - Note any issues or sensor condition

**Calibration Log Example:**

```
═══════════════════════════════════════════════════════════
               SENSOR CALIBRATION LOG
═══════════════════════════════════════════════════════════
Date: 2025-12-10
Sensor: pH Probe #2 (Nutrient Tank A)
Operator: J. Smith

Standard 1: 7.00 pH buffer
  Before: 7.18 pH
  After:  7.01 pH  ✓

Standard 2: 4.00 pH buffer
  Before: 4.22 pH
  After:  4.01 pH  ✓

Verification: 7.00 pH buffer
  Reading: 7.00 pH  ✓

Sensor condition: Good, no visible fouling
Next calibration due: 2025-12-17
═══════════════════════════════════════════════════════════
```

---

## 2.6 Cost vs. Performance Trade-offs

### Sensor Price Spectrum

```
╔══════════════════════════════════════════════════════════════════╗
║                  SENSOR COST vs. PERFORMANCE                     ║
╠══════════════════════════════════════════════════════════════════╣
║                                                                  ║
║  $10-50: HOBBY/ENTRY LEVEL                                       ║
║  ────────────────────────────────────────────────────────────    ║
║  Accuracy: ±5-10%                                                ║
║  Lifespan: 6-12 months                                           ║
║  Calibration: Difficult or impossible                            ║
║  Use Case: Learning, non-critical monitoring                     ║
║  Example: $15 TDS pen, $30 Arduino pH module                     ║
║                                                                  ║
║  $50-200: PROSUMER/SMALL COMMERCIAL                              ║
║  ────────────────────────────────────────────────────────────    ║
║  Accuracy: ±2-5%                                                 ║
║  Lifespan: 1-2 years                                             ║
║  Calibration: Manual, 1-2 point                                  ║
║  Use Case: Small farms, serious hobbyists                        ║
║  Example: $100 pH controller, $150 EC meter                      ║
║                                                                  ║
║  $200-1000: COMMERCIAL/PROFESSIONAL                              ║
║  ────────────────────────────────────────────────────────────    ║
║  Accuracy: ±1-2%                                                 ║
║  Lifespan: 2-5 years with maintenance                            ║
║  Calibration: Multi-point, temperature compensated               ║
║  Use Case: Commercial operations, critical control               ║
║  Example: $500 DO meter, $800 multiparameter probe               ║
║                                                                  ║
║  $1000+: INDUSTRIAL/LABORATORY                                   ║
║  ────────────────────────────────────────────────────────────    ║
║  Accuracy: ±0.5-1%                                               ║
║  Lifespan: 5-10 years with maintenance                           ║
║  Calibration: Automatic, fully compensated                       ║
║  Use Case: Research, regulatory compliance                       ║
║  Example: $2000 multiparameter controller                        ║
║                                                                  ║
╚══════════════════════════════════════════════════════════════════╝
```

### True Cost of Ownership

Don't just look at purchase price - consider:

```
╔══════════════════════════════════════════════════════════════════╗
║                  TOTAL COST OF OWNERSHIP (3 YEARS)               ║
╠══════════════════════════════════════════════════════════════════╣
║                                                                  ║
║  OPTION A: Cheap pH Sensor                                       ║
║  ─────────────────────────────────────────────────────────────   ║
║  Purchase price: $50                                             ║
║  Replacement (every 6 months × 6):  $300                         ║
║  Calibration solution (monthly):    $180                         ║
║  Labor for frequent recalibration:  $200                         ║
║  TOTAL 3-YEAR COST: $730                                         ║
║                                                                  ║
║  OPTION B: Quality pH Sensor                                     ║
║  ─────────────────────────────────────────────────────────────   ║
║  Purchase price: $300                                            ║
║  Replacement (every 2 years × 1.5): $450                         ║
║  Calibration solution (monthly):    $180                         ║
║  Labor (less frequent cal):         $100                         ║
║  TOTAL 3-YEAR COST: $1,030                                       ║
║                                                                  ║
║  OPTION C: Industrial pH System                                  ║
║  ─────────────────────────────────────────────────────────────   ║
║  Purchase price: $1,500                                          ║
║  Replacement (lasts 5+ years):      $0                           ║
║  Calibration solution (quarterly):  $60                          ║
║  Labor (auto-cal):                  $20                          ║
║  TOTAL 3-YEAR COST: $1,580                                       ║
║                                                                  ║
║  But consider VALUE:                                             ║
║  • Option A: Constant uncertainty, frequent failures             ║
║  • Option B: Good reliability, manageable maintenance            ║
║  • Option C: Excellent reliability, prevents costly losses       ║
║                                                                  ║
║  For $10,000+ livestock: Option C prevents one loss and          ║
║  pays for itself many times over.                                ║
║                                                                  ║
╚══════════════════════════════════════════════════════════════════╝
```

### Sensor Selection Framework

**Ask These Questions:**

1. **What is at risk?**
   - High value ($1000+) → Invest in quality sensors
   - Low value or non-critical → Budget sensors OK

2. **How often will I use it?**
   - Continuous monitoring → Reliable, long-life sensors
   - Occasional checks → Portable meter may be better

3. **What accuracy do I need?**
   - Critical control (pH, DO) → High accuracy
   - General monitoring → Moderate accuracy OK

4. **Can I calibrate and maintain it?**
   - If yes → More sensor options available
   - If no → Consider factory-calibrated or service contract

5. **What is my technical skill level?**
   - Beginner → Simple, plug-and-play sensors
   - Advanced → Can work with raw sensors, custom integration

---

## 2.7 Practical Sensor Selection Examples

### Example 1: Backyard Aquaponics

**Situation:**
- 500 gallon system, $500 fish stock
- Hobbyist, moderate technical skills
- Budget: $200 for monitoring

**Recommended Sensors:**
1. **Water Temperature:** $15 digital sensor (DS18B20)
   - Critical for fish
   - Reliable, accurate
   - Easy to integrate with Arduino

2. **pH:** $100 commercial pH controller with probe
   - Important for system health
   - User-friendly calibration
   - Built-in display

3. **Water Level:** $10 float switch
   - Prevents pump damage
   - Simple and reliable

**Total: $125** - Under budget, covers critical parameters.

### Example 2: Commercial Greenhouse

**Situation:**
- 5,000 sq ft, $50,000 annual crop value
- Full-time operation
- Budget: $5,000 for monitoring

**Recommended Sensors:**
1. **Climate Controller with Sensors:** $3,500
   - Temperature, humidity, integrated
   - Professional calibration
   - Controls HVAC, vents

2. **PAR Light Sensor:** $400
   - Optimizes supplemental lighting
   - ROI through energy savings

3. **CO2 Sensor:** $300
   - Optimize enrichment
   - Prevent over-application

4. **Leaf Wetness Sensors (3):** $300
   - Early disease detection
   - Prevents crop losses

5. **Soil Moisture Sensors (10):** $500
   - Precision irrigation
   - Water savings

**Total: $5,000** - Comprehensive coverage, commercial-grade.

### Example 3: Research Aquaculture

**Situation:**
- 10,000 gallon RAS, $30,000+ fish
- Research requiring data documentation
- Budget: $15,000 for monitoring

**Recommended Sensors:**
1. **Multiparameter Water Quality Controller:** $8,000
   - pH, DO, ORP, EC, temp in one system
   - Auto-calibration
   - Data logging and export

2. **Backup DO Monitor:** $1,500
   - Redundancy for critical parameter
   - Independent alarm

3. **Ammonia Sensor:** $2,500
   - Real-time nitrification monitoring
   - Early warning of biofilter issues

4. **Flow Meters (3):** $1,500
   - Monitor system hydraulics
   - Detect pump failures

5. **Power Monitor:** $500
   - Track energy use
   - Detect electrical issues

6. **Data Acquisition System:** $1,000
   - Centralized logging
   - Cloud backup

**Total: $15,000** - Research-grade, redundant, documented.

---

## Summary

Sensors are the eyes and ears of automated CEA systems. Key takeaways:

1. **Understand specifications:** Accuracy, precision, resolution, and response time all matter.

2. **Choose appropriate technology:** Analog vs. digital, wired vs. wireless based on application.

3. **Calibrate regularly:** Good sensors need maintenance to stay accurate.

4. **Consider total cost:** Purchase price + maintenance + replacement over time.

5. **Match sensor to risk:** Critical applications deserve quality sensors.

6. **Start simple:** Monitor before automating, learn your system's behavior.

7. **Plan for failure:** Backup sensors or manual checks for critical parameters.

---

## Review Questions

1. What is the difference between accuracy and precision?
2. What does "resolution" mean in sensor specifications?
3. Why use a 4-20mA output instead of 0-20mA?
4. What are the advantages and disadvantages of wireless sensors?
5. What is two-point calibration and when should you use it?
6. How often should a pH sensor be calibrated in a commercial operation?
7. What factors should you consider when choosing between a $50 and $500 sensor?
8. What is "T90" response time?

---

## Practical Exercise

**Exercise: Sensor Selection Decision**

You are setting up a 1,000 gallon aquaponics system with tilapia (value: $2,000).

**Your task:**

1. List the 5 most critical parameters to monitor
2. Research sensors for each (find at least 2 options per parameter)
3. For each parameter, create a comparison table with:
   - Sensor model and price
   - Accuracy specification
   - Calibration requirements
   - Pros and cons
4. Make a recommendation for each parameter with justification
5. Calculate total monitoring system cost

**Deliverable:** Sensor selection report with specifications and budget.

---

*End of Module 2*
