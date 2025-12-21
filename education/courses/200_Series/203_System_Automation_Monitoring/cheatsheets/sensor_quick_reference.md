# Sensor Quick Reference Guide
**Course 203: System Automation & Monitoring**

---

## Water Quality Sensors

### pH Sensors

| Specification | Typical Value | Notes |
|---------------|---------------|-------|
| **Type** | Glass electrode (combination) | Most common |
| **Range** | 0-14 pH | Full range |
| **Accuracy** | ±0.05 to ±0.1 pH | Commercial grade |
| **Response Time** | 30-90 seconds | T90 |
| **Calibration** | 2-point (pH 4.0 & 7.0 or 7.0 & 10.0) | Weekly |
| **Storage** | pH 4.0 buffer or storage solution | NEVER distilled water |
| **Lifespan** | 12-18 months | Continuous use |
| **Cost** | $50-300 | Probe only |
| **Common Brands** | Atlas Scientific, Bluelab, Milwaukee | |

**Quick Troubleshooting:**
- Slow response → Soak in storage solution overnight
- Stuck reading → Probe failed, replace
- Drift > 0.2 pH → Clean and recalibrate or replace

---

### EC/TDS Sensors

| Specification | Typical Value | Notes |
|---------------|---------------|-------|
| **Type** | Conductivity (2 or 4 electrode) | |
| **Range** | 0-10 mS/cm typical | Expandable |
| **Accuracy** | ±2% | Commercial |
| **Temp Compensation** | Automatic (25°C reference) | Essential |
| **Calibration** | 1-point (1413 µS/cm standard) | Monthly |
| **Storage** | Dry or tap water | NOT distilled |
| **Lifespan** | 2-3 years | With cleaning |
| **Cost** | $30-300 | Probe only |

**Conversion:**
- TDS (ppm) ≈ EC (µS/cm) × 0.5 to 0.7
- 1 mS/cm = 1000 µS/cm

---

### Dissolved Oxygen (DO) Sensors

| Specification | Galvanic | Optical |
|---------------|----------|---------|
| **Range** | 0-20 mg/L | 0-20 mg/L |
| **Accuracy** | ±0.2 mg/L | ±0.1 mg/L |
| **Response Time** | 60-90 sec | 30-60 sec |
| **Calibration** | Weekly | Bi-weekly |
| **Membrane** | Replace 6-12 mo | Replace 1-2 yrs |
| **Cost** | $200-800 | $500-2000 |
| **Flow Required** | Yes | No |

**Calibration Standards:**
- 100% air saturation (8.25 mg/L at 25°C, sea level)
- Zero oxygen (sodium sulfite solution)

**Critical Levels (Fish):**
- Optimal: >6 mg/L
- Stress: 4-6 mg/L
- Critical: <4 mg/L
- Lethal: <2 mg/L

---

### Temperature Sensors

| Type | Accuracy | Range | Cost | Best Use |
|------|----------|-------|------|----------|
| **DS18B20** | ±0.5°C | -55 to 125°C | $2-10 | Arduino/RPi projects |
| **Thermistor (NTC)** | ±0.5°C | -50 to 150°C | $5-20 | Analog systems |
| **RTD (Pt100)** | ±0.1°C | -200 to 850°C | $50-200 | High-precision commercial |
| **Thermocouple** | ±1-2°C | Very wide | $10-50 | Not ideal for CEA |

**Calibration Check:**
- Ice bath: 0°C (32°F) ± 0.5°C
- Room temp: Compare to calibrated thermometer

---

## Environmental Sensors

### Temperature & Humidity

| Type | Temp Accuracy | Humidity Accuracy | Cost | Interface |
|------|---------------|-------------------|------|-----------|
| **DHT22** | ±0.5°C | ±2-5% RH | $5-15 | Digital (1-wire) |
| **SHT31** | ±0.2°C | ±2% RH | $10-30 | I2C |
| **BME280** | ±1°C | ±3% RH | $10-20 | I2C (includes pressure) |
| **Commercial** | ±0.3°C | ±2-3% RH | $100-500 | 4-20mA or 0-10V |

**Key Points:**
- MUST shield from direct sun (reads 10-20°F high!)
- Aspirated housing recommended
- Place at canopy level

---

### Light (PAR) Sensors

| Specification | Value | Notes |
|---------------|-------|-------|
| **Measurement** | µmol/m²/s (PPFD) | Photosynthetic photon flux density |
| **Range** | 0-2000+ µmol/m²/s | Full sunlight ~2000 |
| **Accuracy** | ±5-10% | Quantum sensors |
| **Cost** | $200-600 | Good quality |
| **Calibration** | Factory (rarely field calibrated) | |

**Target PPFD:**
- Lettuce/Greens: 200-400 µmol/m²/s
- Tomatoes/Peppers: 600-1000 µmol/m²/s
- Cannabis: 800-1500 µmol/m²/s

**DLI Calculation:**
```
DLI (mol/m²/day) = PPFD (µmol/m²/s) × hours × 3.6 ÷ 1000

Example: 400 µmol/m²/s × 16 hours × 3.6 ÷ 1000 = 23 mol/m²/day
```

---

### CO2 Sensors

| Specification | Value | Notes |
|---------------|-------|-------|
| **Type** | NDIR (non-dispersive infrared) | Most accurate |
| **Range** | 0-10,000 ppm | Typical |
| **Accuracy** | ±30-50 ppm ±3% | |
| **Calibration** | Fresh air (420 ppm) | Monthly |
| **Cost** | $100-500 | Quality NDIR |

**Target Levels:**
- Ambient: ~420 ppm
- Enrichment: 800-1200 ppm
- Maximum: 1500 ppm (plant safety)
- Human safety: 5000 ppm OSHA limit

---

## Quick Calibration Guide

### Two-Point pH Calibration

1. **Rinse** probe with distilled water, blot dry
2. **Buffer 1:** Immerse in pH 7.00, wait for stability, adjust to 7.00
3. **Rinse** thoroughly
4. **Buffer 2:** Immerse in pH 4.00 (acidic systems) or 10.00 (alkaline), adjust
5. **Verify:** Re-check pH 7.00 (should read within ±0.05)

**Frequency:** Weekly (commercial), monthly (hobby)

---

### EC Calibration

1. **Rinse** probe with distilled water
2. **Standard:** Immerse in 1413 µS/cm (1.413 mS/cm) solution
3. **Adjust:** Set meter to 1413
4. **Verify:** Re-check standard

**Frequency:** Monthly

---

### DO Calibration (100% Air Saturation)

1. **Aerate:** Shake water vigorously or bubble air for 15 min
2. **Immerse:** Place probe in aerated water (not fully submerged - probe tip in water, body in air)
3. **Adjust:** Set to 100% or enter temp/altitude for mg/L value
4. **Verify:** Should be stable

**Frequency:** Weekly (fish systems), bi-weekly (hydroponics)

---

## Sensor Placement Guide

```
╔═══════════════════════════════════════════════════════════════╗
║              GREENHOUSE SENSOR PLACEMENT                      ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║                   [Roof/Ceiling]                              ║
║                        │                                      ║
║   [Aspirated Shield] ──┤ ← Air temp/humidity                  ║
║   @ canopy level       │   (shaded, fan-ventilated)           ║
║                        │                                      ║
║        ┌──────────┬────┴────┬──────────┐                      ║
║        │  Plant   │  Plant  │  Plant   │                      ║
║        │          │         │          │                      ║
║        │  [PAR]   │  [CO₂]  │          │ ← At plant level    ║
║        │  sensor  │  sensor │          │                      ║
║        └──────────┴─────────┴──────────┘                      ║
║                                                               ║
║   [Nutrient Tank]                                             ║
║        │                                                      ║
║   [pH probe] ← Submerged, circulating area                    ║
║   [EC probe] ← Submerged, away from dosing injection          ║
║   [Temp sensor] ← Mid-depth                                   ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
```

**Key Rules:**
- Air sensors: Canopy level, shaded, aspirated
- Water sensors: Circulating areas, not stagnant pockets
- Light sensors: Representative of plant exposure
- CO2: Plant level (heavier than air)

---

## Maintenance Schedule

| Sensor | Daily | Weekly | Monthly | Annually |
|--------|-------|--------|---------|----------|
| **pH** | Rinse | Calibrate | Deep clean | Replace |
| **EC** | Rinse | Check | Calibrate, clean | - |
| **DO** | Check | Calibrate | Clean, check membrane | Replace membrane |
| **Temp** | - | - | Verify accuracy | Check/replace if needed |
| **Humidity** | - | - | Check accuracy | Calibrate or replace |
| **PAR** | Clean lens | - | - | Factory recalibration |
| **CO2** | - | - | Calibrate (fresh air) | - |

---

## Common Problems & Solutions

| Problem | Sensor | Solution |
|---------|--------|----------|
| **Slow response** | pH | Soak in storage solution overnight |
| **Stuck reading** | pH, temp | Sensor failed, replace |
| **Drifting values** | pH, EC | Clean and recalibrate, may need replacement |
| **Erratic readings** | Any | Check wiring, connections, electrical interference |
| **Reading way off** | Any | Check calibration, verify with known standard |

---

*Quick Reference Guide - Course 203*
