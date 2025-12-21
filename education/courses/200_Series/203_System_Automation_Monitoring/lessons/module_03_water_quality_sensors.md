# Module 3: Water Quality Sensors
**Course 203: System Automation & Monitoring**
Duration: 1 hour

---

## Learning Objectives

By the end of this module, you will be able to:
1. Explain the operating principles of pH, EC, DO, and temperature sensors
2. Select appropriate probes for aquaponics and hydroponics applications
3. Perform proper calibration procedures for water quality sensors
4. Troubleshoot common sensor problems
5. Maintain probes for optimal lifespan and accuracy
6. Integrate water quality sensors into monitoring systems

---

## 3.1 pH Sensors

### What is pH and Why It Matters

**pH** measures the acidity or alkalinity of a solution on a scale from 0 (very acidic) to 14 (very alkaline), with 7 being neutral.

**Critical for CEA:**
- **Hydroponics:** pH 5.5-6.5 optimal for nutrient uptake
- **Aquaponics:** pH 6.8-7.2 balances fish health and plant needs
- **Fish Health:** Most species thrive in pH 6.5-8.0
- **Nutrient Availability:** pH affects which nutrients plants can absorb

### How pH Sensors Work

**Glass Electrode pH Probe:**

```
╔════════════════════════════════════════════════════════════╗
║                  pH PROBE CONSTRUCTION                     ║
╠════════════════════════════════════════════════════════════╣
║                                                            ║
║         ┌─────────────────┐                                ║
║         │   BNC Connector │ ← To meter/controller          ║
║         └────────┬────────┘                                ║
║                  │                                         ║
║         ┌────────▼────────┐                                ║
║         │  Probe Body     │ ← Contains electronics         ║
║         │  (plastic/glass)│                                ║
║         └────────┬────────┘                                ║
║                  │                                         ║
║         ┌────────▼────────┐                                ║
║         │ Reference       │ ← KCl electrolyte              ║
║         │ Electrode       │    (liquid junction)           ║
║         ├─────────────────┤                                ║
║         │ Glass Bulb      │ ← pH-sensitive glass           ║
║         │ (sensing        │    (ion exchange)              ║
║         │  element)       │                                ║
║         └─────────────────┘                                ║
║              ↓                                             ║
║       [Solution being measured]                            ║
║                                                            ║
║  Principle: Glass bulb generates voltage proportional      ║
║  to pH difference across membrane (~59 mV per pH unit)     ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝
```

**The Science:**
- Glass membrane selectively allows H+ ions to pass
- Voltage develops based on H+ concentration difference
- Reference electrode provides stable comparison point
- Electronics convert voltage to pH reading

### pH Probe Types

| Type | Cost | Lifespan | Best Use | Notes |
|------|------|----------|----------|-------|
| **Glass Bulb** | $50-300 | 1-2 years | General purpose | Most common, accurate |
| **Flat Surface** | $100-400 | 1-2 years | Low-water, dirty media | Good for slurries |
| **Spear Tip** | $80-250 | 1-2 years | Soil/media insertion | Penetrates substrates |
| **Combination** | $50-200 | 1-2 years | Aqueous solutions | Integrated reference |
| **Industrial** | $200-800 | 2-5 years | Continuous monitoring | Chemical resistant |

### pH Calibration

**Two-Point Calibration (Standard Method):**

```
Step 1: Rinse probe with distilled water, blot dry

Step 2: Calibrate at pH 7.00 (neutral buffer)
  - Immerse probe in fresh pH 7.00 buffer
  - Wait for stable reading (30-60 seconds)
  - Adjust meter to read 7.00
  - This sets the "zero point"

Step 3: Rinse probe thoroughly

Step 4: Calibrate at second point (pH 4.00 or 10.00)
  - Use pH 4.00 for acidic applications (hydroponics)
  - Use pH 10.00 for alkaline applications
  - Immerse in buffer, wait for stability
  - Adjust meter to read correct value
  - This sets the "slope"

Step 5: Verification
  - Rinse and check pH 7.00 again
  - Should read within ±0.05 pH
  - If not, repeat calibration or check probe condition
```

**Calibration Frequency:**
- **Daily:** Critical control applications, high-value crops/livestock
- **Weekly:** Standard commercial operations
- **Monthly:** Hobby/home systems with low risk

### pH Probe Maintenance

**Daily Care:**
- Rinse with distilled water after each use
- Store in storage solution (NOT distilled water)
- Keep junction moist

**Weekly Maintenance:**
- Check for cracks or damage
- Clean any deposits with soft brush
- Verify storage solution level

**Monthly Maintenance:**
- Deep clean with pH electrode cleaning solution
- Check cable and connector
- Test in multiple buffers to verify linearity

**Storage Solutions:**
```
Proper Storage: pH 4.0 buffer or dedicated storage solution
  - Keeps glass bulb hydrated
  - Maintains junction

NEVER Store In:
  ✗ Distilled water (leaches electrolyte)
  ✗ Tap water (contaminates reference)
  ✗ Dry (damages glass membrane)
```

### Common pH Sensor Problems

| Problem | Symptom | Cause | Solution |
|---------|---------|-------|----------|
| **Slow response** | Takes minutes to stabilize | Dried out, fouled | Soak in storage solution overnight |
| **Drifting readings** | Can't calibrate, values change | Old probe, contamination | Replace probe or deep clean |
| **Erratic readings** | Jumpy, inconsistent | Broken glass, bad cable | Replace probe |
| **Offset error** | Reads consistently wrong | Needs calibration | Calibrate |
| **Slope error** | Wrong at extremes | Junction clogged | Clean or replace |

---

## 3.2 EC/TDS Sensors

### What is EC/TDS?

**EC (Electrical Conductivity):** Measure of solution's ability to conduct electricity, indicates total dissolved solids.

**TDS (Total Dissolved Solids):** Derived from EC, estimates mass of dissolved substances.

**Units:**
- EC: millisiemens/cm (mS/cm) or microsiemens/cm (µS/cm)
- TDS: parts per million (ppm) or mg/L
- Conversion: TDS (ppm) ≈ EC (µS/cm) × 0.5 to 0.7 (varies by solution)

**Why It Matters:**
- **Nutrient Strength:** Higher EC = more concentrated nutrients
- **Osmotic Stress:** Too high causes wilting (plants can't uptake water)
- **Too Low:** Nutrient deficiency
- **Optimal Ranges:**
  - Lettuce: 1.0-1.6 mS/cm
  - Tomatoes: 2.0-3.5 mS/cm
  - Aquaponics: 0.5-1.5 mS/cm

### How EC/TDS Sensors Work

**Conductivity Probe:**

```
╔════════════════════════════════════════════════════════════╗
║              EC/TDS PROBE CONSTRUCTION                     ║
╠════════════════════════════════════════════════════════════╣
║                                                            ║
║         ┌─────────────────┐                                ║
║         │   Connector     │ ← To meter                     ║
║         └────────┬────────┘                                ║
║                  │                                         ║
║         ┌────────▼────────┐                                ║
║         │  Probe Body     │                                ║
║         └────────┬────────┘                                ║
║                  │                                         ║
║         ┌────────▼────────┐                                ║
║         │   Electrodes    │ ← Usually 2 or 4 metal         ║
║         │   ║    ║        │    conductors                  ║
║         │   ║    ║        │                                ║
║         └───║────║────────┘                                ║
║             ║    ║                                         ║
║             ▼    ▼                                         ║
║       [Solution being measured]                            ║
║                                                            ║
║  Principle: Apply voltage across electrodes                ║
║  Measure current flow (proportional to dissolved ions)     ║
║  Higher conductivity = more dissolved solids               ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝
```

**Temperature Compensation:**

EC changes with temperature (~2% per °C). Quality meters automatically compensate.

```
Measured at 20°C: 1.50 mS/cm
Measured at 25°C: 1.65 mS/cm (higher due to temp)
Temperature-compensated reading: 1.50 mS/cm (normalized to 25°C)
```

### EC Probe Types

| Type | Cost | Range | Application |
|------|------|-------|-------------|
| **Pen-style** | $20-100 | 0-10 mS/cm | Portable testing, spot checks |
| **Inline probe** | $100-400 | 0-20 mS/cm | Continuous monitoring |
| **Lab-grade** | $200-800 | Wide range | High accuracy, calibration standard |

### EC/TDS Calibration

**Single-Point Calibration:**

```
Step 1: Prepare standard solution
  Common: 1413 µS/cm (1.413 mS/cm) or 12.88 mS/cm

Step 2: Rinse probe with distilled water

Step 3: Immerse probe in standard
  Wait for stable reading

Step 4: Adjust meter to match standard value

Step 5: Rinse and verify
  Re-check standard or use second standard
```

**Calibration Frequency:**
- **Monthly:** Most applications
- **Weekly:** High-precision or critical control

### EC Probe Maintenance

**Routine Care:**
- Rinse with distilled water after use
- Wipe electrodes gently with soft cloth
- Store dry or in tap water (not distilled)

**Cleaning (when readings drift):**
```
Method 1: Mild Acid
  - Soak in white vinegar for 15 minutes
  - Rinse thoroughly
  - Recalibrate

Method 2: Commercial Electrode Cleaner
  - Follow product instructions
  - Usually 5-15 minute soak
  - Rinse and recalibrate
```

**Replacement Indicators:**
- Unstable readings
- Can't calibrate
- Physical damage to electrodes
- Typical lifespan: 1-3 years

---

## 3.3 Dissolved Oxygen (DO) Sensors

### Why Dissolved Oxygen Matters

**Critical for Aquaponics/Aquaculture:**
- Fish require oxygen to survive
- Low DO = stress, disease, death
- Optimal: >5 mg/L for most fish
- Critical low: <3 mg/L (danger zone)

**Also Important for:**
- Root health in hydroponics (prevents root rot)
- Beneficial bacteria in biofilters

### How DO Sensors Work

**Two Main Types:**

#### 1. Galvanic (Electrochemical) Probes

```
╔════════════════════════════════════════════════════════════╗
║            GALVANIC DO PROBE (Cross-section)               ║
╠════════════════════════════════════════════════════════════╣
║                                                            ║
║    ┌──────────────────────────────────────┐               ║
║    │         Probe Body                   │               ║
║    │  ┌────────────────────────────────┐  │               ║
║    │  │ Lead (Pb) Anode               │  │               ║
║    │  │ Silver (Ag) Cathode            │  │               ║
║    │  │ KCl Electrolyte                │  │               ║
║    │  └────────────┬───────────────────┘  │               ║
║    │               │                      │               ║
║    │    ┌──────────▼──────────┐           │               ║
║    │    │ Oxygen-Permeable    │           │               ║
║    │    │ Membrane (Teflon)   │           │               ║
║    └────┴─────────────────────┴───────────┘               ║
║              ↓     ↓     ↓                                ║
║        O₂ diffuses through membrane                        ║
║        Electrochemical reaction produces current           ║
║        Current proportional to O₂ concentration            ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝
```

**Pros:** No external power needed, generates own signal
**Cons:** Membrane replacement needed (6-12 months), consumes oxygen during measurement

#### 2. Optical (Luminescent) Probes

```
Principle:
  LED emits light → Oxygen-sensitive dye → Fluorescence
  More O₂ = less fluorescence (quenching effect)
  Measure fluorescence lifetime → Calculate O₂ concentration
```

**Pros:** No membrane, longer lifespan, no stirring needed
**Cons:** More expensive ($500-2000 vs. $200-800)

### DO Sensor Comparison

| Feature | Galvanic | Optical |
|---------|----------|---------|
| **Cost** | $200-800 | $500-2000 |
| **Accuracy** | ±0.2 mg/L | ±0.1 mg/L |
| **Maintenance** | Membrane every 6-12 mo | Sensor cap every 1-2 yrs |
| **Drift** | Moderate | Low |
| **Flow requirement** | Yes (stir or flow) | No |
| **Response time** | 60-90 seconds | 30-60 seconds |
| **Lifespan** | 2-3 years | 3-5 years |

### DO Calibration

**Two Methods:**

#### Method 1: Air Saturation (100% DO)

```
Step 1: Create 100% saturated air environment
  - Half-fill container with water
  - Shake vigorously for 30 seconds
  - Let settle 1-2 minutes
  - Or use air bubbler for 15 minutes

Step 2: Immerse probe in aerated water
  - Do NOT submerge fully (probe tip in water, body in air)
  - Wait for stable reading

Step 3: Adjust meter to 100% saturation
  - OR enter altitude/temperature for mg/L value
  - Sea level, 25°C = 8.25 mg/L
  - Use DO saturation table for your conditions

Step 4: Verify in zero DO solution (optional)
```

#### Method 2: Zero DO Calibration

```
Create zero-oxygen solution:
  - Dissolve 1 tablespoon sodium sulfite in 100ml water
  - Immerse probe
  - Adjust to read 0.0 mg/L
```

**Calibration Frequency:**
- **Weekly:** Aquaculture (critical parameter)
- **Bi-weekly:** Aquaponics
- **Monthly:** Hydroponics root zone monitoring

### DO Probe Maintenance

**Galvanic Probes:**
```
Daily:
  - Rinse with clean water
  - Check membrane for bubbles or damage

Weekly:
  - Check electrolyte level (visible in some models)
  - Gently wipe membrane

Monthly:
  - Check calibration
  - Replace membrane if damaged or readings drift

Membrane Replacement:
  1. Unscrew old membrane cap
  2. Clean electrode surfaces
  3. Fill with fresh electrolyte
  4. Install new membrane (avoid bubbles)
  5. Recalibrate
```

**Optical Probes:**
```
Weekly:
  - Clean optical window with soft cloth
  - Remove any biofilm

Quarterly:
  - Check calibration
  - Inspect sensor cap

Annually:
  - Replace sensor cap (if needed)
```

### Troubleshooting DO Sensors

| Problem | Possible Cause | Solution |
|---------|---------------|----------|
| **Reads low in air** | Membrane damaged, dried out | Replace membrane |
| **Slow response** | Membrane fouled, old electrolyte | Clean or replace membrane |
| **Unstable readings** | Insufficient water flow | Increase circulation or stir |
| **Won't calibrate** | Membrane bubbles, old sensor | Check membrane, may need replacement |
| **Drifts quickly** | Temperature changes, sensor age | Recalibrate, check temp compensation |

---

## 3.4 Temperature Sensors

### Why Temperature Monitoring is Critical

**Fish Health:**
- Most species have narrow optimal range (±2-3°F)
- Rapid changes cause stress
- Too high: Reduced DO, ammonia toxicity
- Too low: Reduced metabolism, disease susceptibility

**Plant Growth:**
- Root zone temperature affects nutrient uptake
- Air temperature affects photosynthesis and transpiration
- Each crop has optimal range

**System Performance:**
- Temperature affects pH and EC readings
- Influences bacterial activity in biofilters

### Temperature Sensor Types

#### 1. Thermistors

```
How it works: Resistance changes with temperature

Advantages:
  • Inexpensive ($5-20)
  • Good accuracy (±0.5°C)
  • Fast response
  • Small size

Disadvantages:
  • Non-linear (requires calibration curve)
  • Limited range (-50 to 150°C)
  • Needs conditioning circuit

Common: NTC thermistors (Negative Temperature Coefficient)
```

#### 2. RTD (Resistance Temperature Detector)

```
How it works: Platinum resistance element

Advantages:
  • Excellent accuracy (±0.1°C)
  • Very stable and repeatable
  • Wide range (-200 to 850°C)
  • Linear response

Disadvantages:
  • More expensive ($50-200)
  • Slower response than thermistor
  • Requires precision measurement

Best for: Laboratory, critical applications
```

#### 3. Thermocouples

```
How it works: Voltage from junction of dissimilar metals

Advantages:
  • Very wide range (-270 to 2500°C)
  • Rugged
  • No self-heating

Disadvantages:
  • Lower accuracy (±1-2°C)
  • Requires cold junction compensation
  • Non-linear

Best for: Industrial processes, high temperatures
NOT ideal for CEA (overkill and less accurate)
```

#### 4. Digital Temperature Sensors (IC-based)

```
Popular: DS18B20 (1-Wire digital sensor)

How it works: Integrated circuit with digital output

Advantages:
  • Very easy to use (plug and read)
  • Good accuracy (±0.5°C)
  • Multiple sensors on one wire
  • Pre-calibrated from factory
  • Inexpensive ($2-10)

Disadvantages:
  • Limited range (-55 to 125°C - but adequate for CEA)
  • Slower than thermistors

Best for: DIY automation, Arduino/Raspberry Pi projects
```

### Temperature Sensor Comparison for CEA

| Type | Cost | Accuracy | Range | Best Use Case |
|------|------|----------|-------|---------------|
| **Thermistor** | $5-20 | ±0.5°C | -50 to 150°C | General purpose, analog systems |
| **RTD (Pt100)** | $50-200 | ±0.1°C | -200 to 850°C | High-precision commercial |
| **DS18B20** | $2-10 | ±0.5°C | -55 to 125°C | DIY, digital systems |
| **Thermocouple** | $10-50 | ±1-2°C | Very wide | Not recommended for CEA |

### Temperature Sensor Calibration

**Verification Method (Ice Bath):**

```
Step 1: Create ice bath
  - Fill container with crushed ice
  - Add water to cover ice
  - Stir well
  - Temperature should be 0°C (32°F)

Step 2: Immerse sensor
  - Wait 2-3 minutes for equilibrium
  - Reading should be 0.0°C ±0.5°C

Step 3: Boiling water (optional second point)
  - Boil water
  - Temperature at sea level: 100°C (212°F)
  - Adjust for altitude if needed

If readings are off:
  - Digital sensors: Usually factory calibrated, may need replacement
  - Analog sensors: Adjust offset in controller software
  - RTDs: May have calibration trim adjustment
```

**Calibration Frequency:**
- **Annually:** Most temperature sensors are very stable
- **After impact or suspected damage:** Verify immediately
- **New sensors:** Check against known reference before use

### Temperature Sensor Placement

**Water Temperature (Aquaponics/Hydroponics):**
```
✓ GOOD Placement:
  • In main tank/reservoir
  • Away from heaters/chillers (not in direct flow)
  • At typical fish depth
  • In waterproof housing
  • Secured (won't float away)

✗ POOR Placement:
  • Right next to heater (reads too high)
  • Surface water only (doesn't represent bulk)
  • In direct sunlight
  • Where it can be knocked loose
```

**Air Temperature (Greenhouse):**
```
✓ GOOD Placement:
  • At plant canopy level
  • In shaded aspirated housing (prevents solar heating)
  • Away from vents, heaters, doors
  • Central location

✗ POOR Placement:
  • In direct sun (reads 10-20°F too high!)
  • Near heat sources
  • Against walls (thermal mass effects)
```

---

## 3.5 Other Important Water Quality Sensors

### ORP (Oxidation-Reduction Potential)

**What it Measures:** Oxidizing or reducing power of solution

**Relevant for:**
- Water disinfection monitoring (chlorine, ozone)
- Indication of dissolved oxygen (indirect)
- Biofilter performance

**Sensor:** Platinum electrode (similar to pH probe)

**Typical Values:**
- Healthy aquatic system: +200 to +400 mV
- Over-oxidized (too much disinfectant): +500 to +800 mV
- Reduced (anaerobic, poor): -100 to +100 mV

**Calibration:** Using +470 mV standard solution (quinhydrone)

**Frequency:** Monthly

### Ammonia Sensors

**Why it Matters (Aquaponics):**
- Fish excrete ammonia (toxic)
- Biofilter converts to nitrite, then nitrate
- Ammonia spike = biofilter problem or overstocking

**Sensor Types:**
- **Ion-selective electrodes:** $500-2500, lab accuracy
- **Colorimetric test kits:** $10-30, manual testing
- **Inline analyzers:** $2000-5000, automated but expensive

**Typical Use:**
- Most operations: Weekly manual testing ($0.50/test)
- Critical/large operations: Continuous monitoring sensor
- Research: High-end automated systems

**Target Values:**
- Total Ammonia Nitrogen (TAN): <1 mg/L (ideally <0.5)
- Unionized ammonia (NH₃): <0.02 mg/L (toxic form)

### Nitrite/Nitrate Sensors

**Nitrite (NO₂⁻):**
- Intermediate product, toxic to fish
- Should be <0.5 mg/L
- Usually monitored with test kits ($10-30)

**Nitrate (NO₃⁻):**
- Final product, fertilizer for plants
- Target 5-150 mg/L (depends on crops)
- Test kits or sensors available

### Turbidity Sensors

**What it Measures:** Water clarity (suspended particles)

**Useful for:**
- Detecting algae blooms
- Filter performance
- System cleanliness

**Sensor Cost:** $200-1000

**Units:** NTU (Nephelometric Turbidity Units)

---

## 3.6 Sensor Integration and System Design

### Multi-Parameter Controllers

**All-in-One Solutions:**

```
Typical Features:
  • pH, EC, temperature in single unit
  • Some include DO, ORP
  • Built-in data logging
  • Relay outputs for control
  • Alarms and alerts

Price Range: $500-3000

Benefits:
  • Simplified wiring
  • Unified calibration and logging
  • Pre-integrated software
  • Professional appearance

Drawbacks:
  • Single point of failure
  • May pay for features you don't need
  • Less flexible than modular
```

**Popular Brands:**
- Bluelab (Guardian Monitor): pH, EC, temp - $400-600
- Milwaukee SMS controllers: $300-800
- Atlas Scientific: Modular system - $200-1500
- Sensorex: Industrial-grade - $1000-3000

### Modular Sensor Systems

**Individual Sensors + Controller:**

```
Components:
  • Separate pH probe → Transmitter → Controller
  • Separate EC probe → Transmitter → Controller
  • Temperature sensor → Controller
  • PLC or Arduino or Raspberry Pi as controller

Benefits:
  • Replace individual sensors
  • Mix and match quality levels
  • Expandable
  • DIY-friendly

Drawbacks:
  • More complex wiring
  • More calibration procedures
  • Requires technical skill
```

### Data Logging Best Practices

**What to Log:**
- Sensor readings (timestamped)
- Calibration events
- Alarm events
- Control actions (heater on/off, dosing, etc.)

**How Often:**
- Critical parameters (temp, DO): Every 1-5 minutes
- Slower parameters (pH, EC): Every 15-30 minutes
- Long-term trends: Hourly averages

**Storage:**
- Local: SD card, local database
- Cloud: Backup and remote access
- Retention: 1-3 years for trend analysis

---

## Summary

Water quality sensors are essential for successful automated CEA systems:

**Key Takeaways:**

1. **pH Sensors:** Glass electrode, calibrate weekly, store wet
2. **EC/TDS Sensors:** Conductivity measurement, calibrate monthly
3. **DO Sensors:** Galvanic or optical, critical for fish health
4. **Temperature:** Digital sensors (DS18B20) excellent for most uses
5. **Calibration:** Regular calibration = accurate data = good decisions
6. **Maintenance:** Clean probes, replace membranes, verify readings
7. **Integration:** Choose multi-parameter or modular based on needs

**Investment Priority for Aquaponics:**
1. Temperature (critical, cheap)
2. pH (important, moderate cost)
3. Dissolved Oxygen (critical for fish, moderate-high cost)
4. EC (useful, moderate cost)
5. Ammonia (useful, expensive - start with test kits)

**Investment Priority for Hydroponics:**
1. pH (critical, moderate cost)
2. EC (critical, moderate cost)
3. Temperature (important, cheap)
4. DO (nice to have, moderate-high cost)

---

## Review Questions

1. How does a glass electrode pH sensor work?
2. What is the difference between EC and TDS?
3. Why must DO sensors have water flow or stirring (galvanic type)?
4. What is the proper storage method for a pH probe?
5. How do you create a 100% DO saturation standard for calibration?
6. What type of temperature sensor is best for DIY automation projects?
7. How often should you calibrate pH vs. EC sensors?
8. What are the advantages of optical vs. galvanic DO probes?

---

## Practical Exercise

**Exercise: Water Quality Monitoring System Design**

Design a complete monitoring system for a 1,000 gallon aquaponics operation:

1. **Select sensors** for:
   - Water temperature
   - pH
   - Dissolved oxygen
   - EC/TDS

2. **For each sensor, specify:**
   - Exact model (research real products)
   - Cost
   - Calibration requirements
   - Maintenance schedule

3. **Create a calibration schedule:**
   - What to calibrate
   - How often
   - What standards needed
   - Estimated annual cost for calibration supplies

4. **Calculate total cost:**
   - Initial sensor purchase
   - Annual calibration supplies
   - Estimated replacement schedule (3-year projection)

**Deliverable:** Complete monitoring system specification with budget and maintenance plan.

---

*End of Module 3*
