# Module 4: Environmental Sensors
**Course 203: System Automation & Monitoring**
Duration: 1 hour

---

## Learning Objectives

By the end of this module, you will be able to:
1. Select and install temperature and humidity sensors for greenhouse environments
2. Understand PAR/PPFD light measurement for crop optimization
3. Monitor CO2 levels for enrichment control
4. Measure air velocity for ventilation management
5. Use soil/media moisture sensors effectively
6. Develop optimal sensor placement strategies

---

## 4.1 Air Temperature and Humidity Sensors

### Why Environmental Monitoring Matters

**Temperature Control:**
- Affects photosynthesis rate
- Influences transpiration
- Determines crop development speed
- Energy costs for heating/cooling

**Humidity Control:**
- Too high: Disease pressure (fungal, bacterial)
- Too low: Excessive transpiration, tip burn
- Optimal: 50-70% RH for most crops
- Vapor Pressure Deficit (VPD) optimization

### Temperature/Humidity Sensor Technologies

#### DHT22 (Digital Humidity/Temperature)

```
Specifications:
  Temperature: -40 to 80°C, ±0.5°C accuracy
  Humidity: 0-100% RH, ±2-5% accuracy
  Response time: 2 seconds
  Cost: $5-15
  Interface: Digital (1-wire protocol)

Best for: DIY projects, hobbyist greenhouses
Limitations: Consumer-grade accuracy, limited lifespan
```

#### SHT31/BME280 (Industrial-Grade Digital)

```
Specifications:
  Temperature: -40 to 125°C, ±0.2°C accuracy
  Humidity: 0-100% RH, ±2% accuracy
  Pressure: 300-1100 hPa (BME280 only)
  Interface: I2C or SPI
  Cost: $10-30

Best for: Reliable DIY, small commercial
Advantages: Better accuracy, longer life than DHT22
```

#### Capacitive Humidity Sensors (Commercial)

```
Specifications:
  Humidity: ±2-3% RH
  Temperature: ±0.3°C
  Cost: $100-500
  Output: 4-20mA or 0-10V

Best for: Commercial greenhouses, climate controllers
Features: Calibrated, weatherproof, long-term stable
```

### Sensor Placement for Accurate Readings

```
╔═══════════════════════════════════════════════════════════════╗
║         GREENHOUSE TEMPERATURE/HUMIDITY PLACEMENT             ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║                    [Roof/Ceiling]                             ║
║                         │                                     ║
║        ✗ TOO HIGH ──────┤                                     ║
║                         │                                     ║
║                    ┌────▼─────┐                               ║
║                    │ Aspirated│  ← Shielded from sun          ║
║   ✓ IDEAL ────────▶│  Shield  │  ← Fan-ventilated            ║
║   (canopy level)   │  ◯ Sensor│  ← At plant height           ║
║                    └──────────┘                               ║
║          ┌─────┬─────┬─────┬─────┐                            ║
║          │Plant│Plant│Plant│Plant│                            ║
║          └─────┴─────┴─────┴─────┘                            ║
║                                                               ║
║   ✗ AVOID:                                                    ║
║   • Direct sunlight (reads 10-20°F high)                      ║
║   • Near vents, fans, heaters (not representative)            ║
║   • Against walls (thermal mass effects)                      ║
║   • Above or below canopy (wrong microclimate)                ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
```

**Aspirated Radiation Shield:**
- White plastic shield reflects solar radiation
- Louvered design allows airflow
- Small fan ensures air circulation across sensor
- Prevents solar heating of sensor (critical!)

### Humidity Sensor Calibration

**Salt Solutions Method:**

```
Saturated Salt Solutions (DIY Calibration Points):

Lithium Chloride:    11% RH at 25°C
Magnesium Chloride:  33% RH at 25°C
Sodium Chloride:     75% RH at 25°C
Potassium Sulfate:   97% RH at 25°C

Procedure:
1. Place saturated salt solution in sealed container
2. Add sensor (not touching solution)
3. Wait 6-8 hours for equilibrium
4. Verify sensor reads expected RH
5. Adjust if necessary
```

**Calibration Frequency:**
- **Quarterly:** Most commercial sensors
- **Annually:** High-quality, stable sensors
- **After anomalies:** Unexpected readings or behavior

---

## 4.2 Light Sensors (PAR/PPFD)

### Understanding Light Measurement

**Why Not Use Lux or Foot-Candles?**

Human eyes see differently than plants photosynthesize.

```
╔═══════════════════════════════════════════════════════════════╗
║              LIGHT MEASUREMENT COMPARISON                     ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║  LUX (Lumens/m²)                                              ║
║  ────────────────────────────────────────────────────────     ║
║  • Weighted for human eye sensitivity (550nm green peak)      ║
║  • Good for: Office lighting, human spaces                    ║
║  • Poor for: Plant growth (misses red/blue important bands)   ║
║                                                               ║
║  PAR (Photosynthetically Active Radiation)                    ║
║  ────────────────────────────────────────────────────────     ║
║  • Wavelengths: 400-700nm (blue to red)                       ║
║  • Units: W/m² (energy) or µmol/m²/s (photon flux)            ║
║  • What plants actually use for photosynthesis                ║
║                                                               ║
║  PPFD (Photosynthetic Photon Flux Density)                    ║
║  ────────────────────────────────────────────────────────     ║
║  • Most useful for growers                                    ║
║  • Units: µmol/m²/s (micromoles per square meter per second)  ║
║  • Counts photons in PAR range                                ║
║                                                               ║
║  CONVERSION (very approximate, light-source dependent):       ║
║  ────────────────────────────────────────────────────────     ║
║  Sunlight:        1000 µmol/m²/s ≈ 50,000 lux                 ║
║  LED grow light:  500 µmol/m²/s ≈ 35,000 lux                  ║
║  (Use proper PAR sensor for accuracy!)                        ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
```

### PAR Sensor Types

| Type | Cost | Accuracy | Use Case |
|------|------|----------|----------|
| **Cosine-corrected quantum sensor** | $200-600 | ±5% | Research, commercial optimization |
| **Photodiode PAR sensor** | $50-150 | ±10-15% | Hobbyist, general monitoring |
| **Lux sensor + conversion** | $5-30 | ±25-50% | Very rough estimates only |
| **Spectroradiometer** | $5000-20000 | ±2% | Research, LED development |

### Optimal PPFD Levels by Crop

```
Low Light Crops (100-300 µmol/m²/s):
  • Lettuce, leafy greens
  • Herbs (basil, mint)
  • Microgreens

Medium Light Crops (300-600 µmol/m²/s):
  • Cannabis (vegetative)
  • Strawberries
  • Peppers

High Light Crops (600-1000+ µmol/m²/s):
  • Tomatoes
  • Cannabis (flowering)
  • Cucumbers

Maximum Useful:
  • Most C3 plants saturate at 1000-1500 µmol/m²/s
  • Higher light requires elevated CO₂ to benefit
  • Without CO₂ enrichment, >800 µmol/m²/s often wasteful
```

### Daily Light Integral (DLI)

**DLI:** Total photons received per day (accumulated PPFD)

```
Calculation:
  DLI (mol/m²/day) = PPFD (µmol/m²/s) × photoperiod (hours) × 3600 / 1,000,000

Example:
  PPFD: 400 µmol/m²/s
  Photoperiod: 16 hours
  DLI = 400 × 16 × 3.6 = 23.04 mol/m²/day

Target DLI by Crop:
  Lettuce: 12-16 mol/m²/day
  Tomatoes: 20-30 mol/m²/day
  Cannabis: 25-40 mol/m²/day (depends on stage)
```

**Using DLI for Lighting Decisions:**

```
Scenario: Cloudy winter day
  Natural DLI: 5 mol/m²/day
  Target for tomatoes: 25 mol/m²/day
  Deficit: 20 mol/m²/day

Supplemental lighting needed:
  20 mol/m²/day ÷ 3.6 = 5.56 µmol/m²/s per hour
  If lights on 16 hours: 5.56 × 16 = ~350 µmol/m²/s PPFD
```

### PAR Sensor Placement

```
For Canopy Measurement:
  • At plant height (moves as plants grow)
  • Representative of average light level
  • Avoid shadows from structure

For Fixture Testing:
  • Grid pattern (every 2-4 feet)
  • Create PPFD map
  • Identify hot spots and dim areas
  • Adjust fixture height/spacing

For Automation:
  • Fixed position at representative location
  • Logs natural + supplemental light
  • Triggers lights based on DLI targets
```

---

## 4.3 CO₂ Sensors

### Why Measure CO₂?

**Photosynthesis Requires CO₂:**

```
6 CO₂ + 6 H₂O + light energy → C₆H₁₂O₆ (glucose) + 6 O₂

Atmospheric CO₂: ~420 ppm (parts per million)
Optimal for enrichment: 800-1200 ppm
Maximum safe: 1500 ppm (5000 ppm OSHA limit for humans)
```

**Benefits of CO₂ Enrichment:**
- 20-40% yield increase (with adequate light)
- Faster growth
- Improved stress tolerance
- Better water use efficiency

**When CO₂ Enrichment Makes Sense:**
- High light levels (>600 µmol/m²/s)
- Sealed or semi-sealed greenhouse
- High-value crops
- Can control venting (doesn't waste CO₂)

### CO₂ Sensor Technologies

#### NDIR (Non-Dispersive Infrared)

```
How it works:
  • Infrared light passes through air sample
  • CO₂ molecules absorb specific wavelengths
  • Detector measures light attenuation
  • More CO₂ = more absorption

Advantages:
  • Accurate (±50 ppm)
  • Specific to CO₂ (not confused by other gases)
  • Long-term stable
  • No consumables

Disadvantages:
  • More expensive than chemical sensors
  • Requires periodic calibration

Cost: $100-500 for quality NDIR sensor
Lifespan: 5-10 years
```

#### Chemical/Electrochemical Sensors

```
NOT RECOMMENDED for CEA:
  • Less accurate
  • Drift over time
  • Consumable elements
  • Better for safety alarms than precision control
```

### CO₂ Sensor Specifications

| Sensor | Range | Accuracy | Cost | Use Case |
|--------|-------|----------|------|----------|
| **SCD30** | 0-40,000 ppm | ±30 ppm ±3% | $60 | DIY, small greenhouse |
| **K30/K33** | 0-10,000 ppm | ±30 ppm ±3% | $100-150 | Commercial monitoring |
| **GMP252** | 0-10,000 ppm | ±20 ppm ±1% | $400-600 | High-precision control |
| **LI-COR LI-850** | 0-20,000 ppm | ±10 ppm | $4000+ | Research |

### CO₂ Sensor Calibration

**Fresh Air Calibration (Simple Method):**

```
Outdoor air CO₂ ≈ 420 ppm (global average, varies 400-440)

Procedure:
1. Take sensor outdoors (away from buildings, traffic)
2. Allow 15 minutes for stabilization
3. Adjust sensor to read 420 ppm
4. Or use automatic baseline correction (ABC) feature

Frequency: Monthly for critical control
```

**Span Calibration (Two-Point, More Accurate):**

```
Materials:
  • Fresh air (420 ppm)
  • CO₂ calibration gas (1000 or 2000 ppm)

Procedure:
1. Calibrate zero point with fresh air
2. Expose to known CO₂ concentration
3. Adjust span/slope to match standard
4. Verify with third gas or re-check fresh air

Frequency: Quarterly or annually
```

**Automatic Baseline Correction (ABC):**

Many NDIR sensors include ABC logic:
- Assumes sensor sees outdoor air occasionally
- Auto-calibrates to lowest reading over 7-14 days
- Works if greenhouse vents to outside air regularly
- Disable if using sealed room with elevated CO₂

### CO₂ Sensor Placement

```
╔═══════════════════════════════════════════════════════════════╗
║              CO₂ SENSOR PLACEMENT IN GREENHOUSE               ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║   [CO₂ Generator/Burner]                                      ║
║           │                                                   ║
║           │ ✗ NOT directly in plume                           ║
║           ▼                                                   ║
║      ≈≈≈≈≈≈≈≈≈≈                                               ║
║    ≈ CO₂ plume  ≈                                             ║
║  ≈               ≈                                            ║
║                                                               ║
║          ┌─────┬─────┬─────┬─────┐                            ║
║   ✓ HERE │Plant│Plant│Plant│Plant│ ◯ ← Sensor at canopy      ║
║          │ ▲▲▲ │ ▲▲▲ │ ▲▲▲ │ ▲▲▲ │    (plants uptake CO₂)   ║
║          └─────┴─────┴─────┴─────┘                            ║
║                                                               ║
║   ✗ NOT at floor (CO₂ heavier than air, settles)             ║
║   ✗ NOT at ceiling (already mixed, not where plants need)    ║
║   ✓ GOOD at plant canopy (where photosynthesis happens)      ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
```

**Best Practices:**
- Canopy height (where leaves are)
- Circulating air, not stagnant pocket
- Away from direct CO₂ injection point
- Representative of average greenhouse conditions
- Protected from water spray

---

## 4.4 Air Velocity Sensors

### Why Monitor Air Movement?

**Plant Benefits:**
- Strengthens stems (mechanical stimulation)
- Reduces boundary layer (improves transpiration and gas exchange)
- Distributes temperature and humidity evenly
- Prevents disease (stagnant air promotes fungi)

**HVAC Efficiency:**
- Verifies fan operation
- Optimizes air circulation
- Balances intake/exhaust

**Target Air Velocity:**
- Gentle circulation: 0.2-0.5 m/s (40-100 fpm)
- Moderate: 0.5-1.0 m/s (100-200 fpm)
- Too high: >2 m/s (>400 fpm) - excessive transpiration, physical damage

### Air Velocity Sensor Types

#### Hot Wire Anemometer

```
How it works:
  • Heated wire exposed to airflow
  • Moving air cools wire
  • Measure power needed to maintain temperature
  • More airflow = more cooling = higher power

Advantages:
  • Fast response
  • Sensitive to low velocities

Disadvantages:
  • Delicate (wire can break)
  • Affected by humidity, temperature
  • Requires calibration

Cost: $100-500 (portable meters)
```

#### Vane/Propeller Anemometer

```
How it works:
  • Small propeller rotates in airflow
  • Rotation speed proportional to air velocity

Advantages:
  • Simple, robust
  • Visual confirmation (spinning vane)
  • No power needed (some versions)

Disadvantages:
  • Slower response than hot wire
  • Less accurate at low velocities (<0.5 m/s)
  • Mechanical wear

Cost: $50-300
```

#### Ultrasonic Anemometer

```
How it works:
  • Ultrasonic pulses between transducers
  • Time-of-flight affected by air velocity
  • Can measure speed and direction

Advantages:
  • No moving parts
  • Highly accurate
  • Multi-axis measurement

Disadvantages:
  • Expensive
  • Overkill for most CEA applications

Cost: $1000-5000+
```

### Practical Air Velocity Monitoring

**For Most CEA Operations:**
- **Periodic spot checks** with handheld meter: $50-200
- Not typically continuous monitoring (unless research)
- Use to verify fan performance during setup
- Recheck seasonally or after modifications

**Measurement Locations:**
- At plant canopy level
- Near fans (verify output)
- In aisles (worker comfort, air mixing)
- At vents (intake/exhaust verification)

---

## 4.5 Soil and Media Moisture Sensors

### Why Monitor Substrate Moisture?

**Hydroponics (Soilless Media):**
- Rockwool, coco coir, peat, perlite mixes
- Prevents over-watering (root rot, anaerobic)
- Prevents under-watering (stress, wilting)
- Optimizes irrigation frequency

**Container Growing:**
- Ensure uniform moisture throughout pots
- Avoid wet/dry cycles that stress plants

**Target Moisture Levels:**
- Varies by media and crop
- Rockwool: 60-80% saturation
- Coco coir: 50-75% saturation
- Peat mix: 40-60% saturation

### Soil Moisture Sensor Types

#### Capacitive Sensors

```
How it works:
  • Measures dielectric constant of media
  • Water has high dielectric constant (80)
  • Dry media: low constant (2-5)
  • More water = higher capacitance

Advantages:
  • No direct soil contact (non-corrosive)
  • Accurate with calibration
  • Works in various media types

Disadvantages:
  • Requires media-specific calibration
  • Affected by salts (EC)

Cost: $10-50 (DIY/consumer)
      $100-300 (commercial)
```

#### Resistive Sensors (Gypsum Blocks)

```
How it works:
  • Measures electrical resistance between probes
  • Wet soil: low resistance
  • Dry soil: high resistance

Advantages:
  • Very inexpensive ($5-20)
  • Robust, long-lasting

Disadvantages:
  • Less accurate than capacitive
  • Slower response (hours)
  • Probes corrode over time in soil

Cost: $5-20 per block

NOT IDEAL for hydroponics (best for field soil)
```

#### Tensiometer

```
How it works:
  • Measures soil water tension (suction)
  • Porous ceramic cup filled with water
  • Vacuum gauge shows how hard plants must "pull" water

Advantages:
  • Directly measures plant-available water
  • Good for deficit irrigation strategies

Disadvantages:
  • Requires maintenance (refilling)
  • Can't measure very dry conditions
  • More complex to interpret

Cost: $100-300 per unit

Best for: Research, precision agriculture
Not common in CEA
```

#### TDR (Time Domain Reflectometry)

```
How it works:
  • Sends electromagnetic pulse into media
  • Measures reflection time
  • Water slows pulse (high dielectric)

Advantages:
  • Very accurate
  • Also measures EC and temperature
  • Research-grade

Disadvantages:
  • Expensive ($500-2000 per sensor)
  • Complex interpretation

Best for: Research, high-value crops
```

### Moisture Sensor Calibration

**Media-Specific Calibration:**

```
Dry Calibration:
  1. Completely dry media in oven (105°C, 24 hours)
  2. Insert sensor, record reading
  3. This is 0% moisture

Wet Calibration:
  1. Saturate media completely
  2. Allow free drainage (field capacity)
  3. Insert sensor, record reading
  4. This is 100% (or field capacity %)

Intermediate Points:
  - Mix known ratios of dry and wet media
  - Create calibration curve
  - Or use gravimetric method (weigh, dry, weigh again)
```

**Practical Approach for Growers:**
```
Instead of absolute moisture %:
  1. Find optimal moisture for your crop/media by trial
  2. Note sensor reading at that moisture level
  3. Set irrigation triggers based on that reading
  4. "Target reading" method vs. absolute %
```

### Sensor Placement Strategies

```
╔═══════════════════════════════════════════════════════════════╗
║           MOISTURE SENSOR PLACEMENT IN CONTAINERS             ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║         [Container Cross-Section]                             ║
║                                                               ║
║     │                                  │                      ║
║     │        ┌─────────┐               │                      ║
║     │        │  Plant  │               │                      ║
║     │        └────┬────┘               │                      ║
║     │             │roots                │                      ║
║     │         ╱╲  │  ╱╲                │                      ║
║     │       ╱    ╲│╱    ╲              │                      ║
║     │      ├──────◯──────┤  ← Mid-depth│                      ║
║     │      │  ✓ Sensor   │    (2-4" down)                    ║
║     │      │   at root   │                                    ║
║     │      │   zone      │                                    ║
║     │      └─────────────┘                                    ║
║     │            ║                                            ║
║     └────────────║────────┘                                   ║
║                  ▼                                            ║
║              [drainage]                                       ║
║                                                               ║
║   ✓ GOOD: Mid-depth, root zone                                ║
║   ✗ POOR: Too shallow (surface dry, roots wet)               ║
║   ✗ POOR: Too deep (bottom wet, top dry)                     ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
```

**For Uniform Media (Rockwool Slabs, NFT):**
- Representative location (middle of system)
- Insert horizontally into slab
- Monitor 1-2 locations per zone

**For Variable Systems:**
- Multiple sensors in different zones
- Driest location (farthest from irrigation)
- Wettest location (check for over-watering)
- Irrigate based on driest sensor

---

## 4.6 Integrated Environmental Monitoring

### All-in-One Environmental Stations

**What They Measure:**
- Temperature (air)
- Humidity
- Light (PAR)
- Sometimes: CO₂, air pressure

**Advantages:**
- Single installation point
- Unified software/display
- Pre-calibrated suite
- Professional appearance

**Cost:** $500-3000

**Examples:**
- Onset HOBO weather stations: $300-1000
- Davis Instruments: $500-2000
- Campbell Scientific: $2000-5000+ (research-grade)

### Wireless Sensor Networks

**Concept:**
Multiple sensor nodes throughout greenhouse, wireless data transmission.

```
╔═══════════════════════════════════════════════════════════════╗
║                WIRELESS SENSOR NETWORK                        ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║     [Zone 1]      [Zone 2]      [Zone 3]      [Zone 4]       ║
║        │              │              │              │         ║
║     ┌──▼──┐       ┌──▼──┐       ┌──▼──┐       ┌──▼──┐       ║
║     │Node │       │Node │       │Node │       │Node │       ║
║     │ T+H │       │ T+H │       │ T+H │       │ T+H │       ║
║     │ CO₂ │       │ CO₂ │       │Light│       │Light│       ║
║     └─┬───┘       └─┬───┘       └─┬───┘       └─┬───┘       ║
║       │             │             │             │           ║
║       └─────────────┴──────┬──────┴─────────────┘           ║
║                            │ Wireless                        ║
║                     ┌──────▼──────┐                          ║
║                     │   Gateway   │                          ║
║                     │  (receiver) │                          ║
║                     └──────┬──────┘                          ║
║                            │                                 ║
║                     ┌──────▼──────┐                          ║
║                     │  Controller/│                          ║
║                     │  Computer   │                          ║
║                     └─────────────┘                          ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
```

**Benefits:**
- Zone-specific monitoring
- Identify microclimates
- No cables to run
- Easy to add sensors

**Challenges:**
- Battery replacement (if battery-powered)
- Radio range limitations (metal structures interfere)
- Multiple points of failure

---

## Summary

Environmental sensors provide critical data for optimizing crop production:

**Key Takeaways:**

1. **Temperature/Humidity:** Use aspirated shields, place at canopy level
2. **Light (PAR):** Essential for DLI calculations and supplemental lighting control
3. **CO₂:** NDIR sensors for accuracy, calibrate monthly in fresh air
4. **Air Velocity:** Periodic spot checks usually sufficient, 0.2-1.0 m/s ideal
5. **Moisture:** Capacitive sensors best for hydroponics, calibrate per media
6. **Placement:** Sensor location dramatically affects readings - plan carefully
7. **Integration:** Multi-parameter systems simplify installation and data management

**Recommended Starter System:**
- Temperature/humidity sensor: $50-200
- PAR sensor: $200-400 (if using supplemental lighting)
- CO₂ sensor: $100-200 (if enriching)
- Total: $350-800 for basic environmental monitoring

---

## Review Questions

1. Why can't you use a lux meter to measure plant-usable light?
2. What is DLI and how do you calculate it?
3. How does an NDIR CO₂ sensor work?
4. What is the optimal CO₂ concentration for enrichment?
5. Why must temperature/humidity sensors be shielded from direct sun?
6. What is the target air velocity for most greenhouse crops?
7. How do capacitive moisture sensors work?
8. What's the difference between accuracy and precision?

---

## Practical Exercise

**Exercise: Environmental Monitoring System Design**

Design a complete environmental monitoring system for a 2,000 sq ft greenhouse growing tomatoes:

1. **Identify critical parameters** to monitor
2. **Select specific sensors:**
   - Research real products
   - Justify choices based on accuracy, cost, features
3. **Determine sensor quantities and placement:**
   - How many of each sensor?
   - Exact placement (diagram)
4. **Create a budget:**
   - Initial purchase costs
   - Annual calibration/maintenance
   - Replacement schedule (3-year projection)
5. **Design data logging strategy:**
   - How often to sample each parameter?
   - Local vs. cloud storage?
   - Alert thresholds

**Deliverable:** Complete system design with sensor specifications, placement diagram, and budget.

---

*End of Module 4*
