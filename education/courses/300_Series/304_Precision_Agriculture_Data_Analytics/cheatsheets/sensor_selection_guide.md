# Sensor Selection Guide

## Course 304: Precision Agriculture & Data Analytics

---

## Quick Selection Matrix

### By Application Priority

| Priority | Parameter | Sensor Type | Accuracy | Cost | Recommended |
|----------|-----------|-------------|----------|------|-------------|
| **CRITICAL (Life Safety)** |
| 1 | DO (Fish Tank) | Optical | ±0.05 mg/L | $$$$ | Hach LDO, Mettler Toledo |
| 2 | Water Temp | RTD (Pt100) | ±0.05°C | $$$ | Industrial RTD |
| 3 | pH | Glass electrode | ±0.05 | $$ | Atlas Scientific, YSI |
| **IMPORTANT (Production)** |
| 4 | EC/TDS | 2-pole conductivity | ±1% | $$ | Atlas Scientific |
| 5 | Air Temp | Thermistor/BME280 | ±0.5°C | $ | BME280, SHT31 |
| 6 | Humidity | Capacitive | ±2% RH | $ | SHT31, BME280 |
| 7 | Ammonia | ISE or test kit | ±10-15% | $$$$ | Manual backup OK |
| **OPTIMIZATION** |
| 8 | CO₂ | NDIR | ±30 ppm | $$$ | SenseAir S8, Vaisala |
| 9 | PAR/PPFD | Quantum sensor | ±5% | $$$$ | Apogee SQ-500, LI-COR |
| 10 | Nitrate/Nitrite | Test kit | ±20% | $ | Manual is OK |

**Cost Scale:** $ = <$50, $$ = $50-150, $$$ = $150-500, $$$$ = $500+

---

## Sensor Specifications by Type

### Water Quality Sensors

#### pH Sensors

**Budget Option:**
- Type: Epoxy body electrode
- Accuracy: ±0.1 pH
- Cost: $50-100
- Example: Atlas Scientific pH Kit
- Maintenance: Weekly calibration
- Lifespan: 12-18 months

**Production Option:**
- Type: Glass body with automatic temp compensation
- Accuracy: ±0.05 pH
- Cost: $150-300
- Example: YSI Pro Series
- Maintenance: Weekly calibration
- Lifespan: 18-24 months

**Requirements:**
- Temperature compensation (automatic preferred)
- Waterproof: IP68 minimum
- Calibration fluids: pH 4.01, 7.01, 10.01
- Storage: 4M KCl solution

---

#### Dissolved Oxygen (DO)

**Budget Option:**
- Type: Galvanic (self-powered)
- Accuracy: ±0.2 mg/L
- Cost: $200-350
- Example: Atlas Scientific DO Kit
- Maintenance: Monthly membrane replacement
- Lifespan: 12-24 months

**Production Option:**
- Type: Optical (luminescent)
- Accuracy: ±0.05 mg/L
- Cost: $600-1,200
- Example: Hach LDO, Mettler Toledo OptiOx
- Maintenance: Minimal (no membrane)
- Lifespan: 3-5 years

**Critical for aquaponics:**
- Minimum reading frequency: Every 15-30 seconds
- Alert threshold: <5.5 mg/L
- Critical threshold: <4.0 mg/L

---

#### EC/TDS Sensors

**Standard Option:**
- Type: 2-pole conductivity
- Accuracy: ±2%
- Range: 0-5,000 µS/cm
- Cost: $80-150
- Example: Atlas Scientific EC Kit
- Maintenance: Bi-weekly calibration
- Calibration standards: 1413 µS/cm, 12.88 mS/cm

**High Range Option:**
- Type: 4-pole conductivity
- Accuracy: ±1%
- Range: 0-20,000 µS/cm
- Cost: $200-400
- For: High EC systems, seawater

---

### Environmental Sensors

#### Temperature

**Air Temperature:**
- Type: Digital (BME280, SHT31)
- Accuracy: ±0.5°C acceptable
- Cost: $10-30
- Placement: Canopy height, shaded from direct light
- Quantity: 1 per 500-1,000 sqft

**Water Temperature:**
- Type: DS18B20 (budget) or RTD (precision)
- Accuracy: ±0.1°C (DS18B20), ±0.05°C (RTD)
- Cost: $5-15 (DS18B20), $50-150 (RTD)
- Waterproof: Required
- Response time: <30 seconds

---

#### Humidity

**Recommended:**
- Type: Capacitive (SHT31, BME280)
- Accuracy: ±2% RH
- Cost: $15-40
- Features: I2C digital output, temp + RH combined
- Avoid: Resistive sensors (drift quickly)

**Placement:**
- Canopy level
- Away from irrigation/misting
- Shield from direct spray

---

#### CO₂

**Production Grade:**
- Type: NDIR (Non-Dispersive Infrared)
- Accuracy: ±30-50 ppm
- Range: 0-5,000 ppm
- Cost: $200-400
- Example: SenseAir S8, Vaisala GMP252
- Drift: <2% over 10 years
- Worth the investment vs. chemical sensors

**Placement:**
- Canopy level
- Central location
- 1 per greenhouse or zone

---

#### Light (PAR/PPFD)

**Research Grade:**
- Type: Calibrated quantum sensor
- Accuracy: ±5%
- Range: 0-2,000+ µmol/m²/s
- Cost: $350-600
- Example: Apogee SQ-500, LI-COR LI-190

**Budget Alternative:**
- Type: Lux sensor with conversion
- Accuracy: ±10-15% after conversion
- Cost: $10-30
- Example: BH1750, TSL2591
- Conversion: PPFD ≈ Lux × 0.0185 (approximate)

**Placement:**
- Representative of average light
- Multiple sensors for variability assessment

---

## Sensor Placement Guidelines

### Aquaponics System

```
Fish Tank:
  - DO: 1-2 sensors (critical, redundancy recommended)
  - Temperature: 1 sensor
  - Placement: In flow, away from aerator bubbles

Biofilter Outlet:
  - DO: 1 sensor
  - pH: 1 sensor
  - Ammonia: 1 sensor (or manual testing 2x/week)
  - Nitrite: Manual testing 2x/week

Sump Tank:
  - pH: 1 sensor (system-wide indicator)
  - EC: 1 sensor
  - DO: 1 sensor (optional)
  - Temperature: 1 sensor

Grow Beds:
  - EC: 1 sensor (plant zone)
  - Temperature: 1 sensor (optional)
```

### Greenhouse/Grow Room

```
Environmental Sensors (per zone):
  - Temperature: 2-3 sensors (high, mid, low)
  - Humidity: 1-2 sensors
  - CO₂: 1 sensor (canopy level, central)
  - PAR: 1-2 sensors (representative locations)

Zone Size Guidelines:
  - Small (<500 sqft): 1 zone
  - Medium (500-2,000 sqft): 2-3 zones
  - Large (>2,000 sqft): Multiple zones
```

---

## Calibration Schedule

| Sensor | Frequency | Standards/Method |
|--------|-----------|------------------|
| pH | Weekly | 2-point: pH 4.01, 7.01 (or 7.01, 10.01) |
| EC | Bi-weekly | 1413 µS/cm and/or 12.88 mS/cm |
| DO (optical) | Monthly | 100% air saturation |
| DO (galvanic) | Bi-weekly | 100% air saturation |
| Temperature | Quarterly | Ice water (0°C) or certified thermometer |
| RH | Quarterly | Salt solutions (33%, 75%) |
| CO₂ | Monthly | 400 ppm (ambient) or certified gas |
| PAR | Annually | Send to manufacturer or cross-check |

---

## Communication Protocols

### By Range and Application

| Protocol | Speed | Range | Power | Best For |
|----------|-------|-------|-------|----------|
| **I2C** | 100-400 kbps | <2m | Low | On-board sensors (temp, RH) |
| **1-Wire** | 16 kbps | 100m+ | Very low | DS18B20 temperature arrays |
| **Modbus RTU** | 9.6-115 kbps | 1,200m | Low | Industrial sensors (pH, DO, EC) |
| **UART/Serial** | 9.6-115 kbps | 15m | Low | General sensor modules |
| **WiFi** | 54-600 Mbps | 50m | High | Wireless data loggers |
| **LoRa** | 0.3-50 kbps | 2-15 km | Very low | Remote outdoor sensors |
| **Ethernet** | 10-1000 Mbps | 100m | Medium | Controllers, cameras |

---

## Budget Planning

### Starter System (2,000 sqft, $5,000)

```
Water Quality:
  pH sensors (2) ×  $100 = $200
  EC sensors (1) × $120 = $120
  DO sensors (2) × $300 = $600
  Temp sensors (4) × $15 = $60

Environmental:
  Temp/RH sensors (3) × $25 = $75
  CO₂ sensor (1) × $200 = $200
  Lux sensors (2) × $20 = $40

Data Collection:
  Raspberry Pi (2) × $75 = $150
  Arduino Mega (1) × $50 = $50
  ESP32 modules (4) × $10 = $40
  Power supplies, wiring = $300

Software/Services:
  Initial setup, database = $500
  Dashboard/Grafana = Free
  Cloud services (first year) = $200

Installation Labor:
  20 hours × $50/hr = $1,000

Contingency (20%) = $700

TOTAL ≈ $4,235
```

### Professional System (2,000 sqft, $15,000)

Upgrade to:
- Optical DO sensors ($800 each)
- RTD temperature sensors
- Calibrated quantum PAR sensors
- Ammonia ISE sensors
- Professional data logger/controller
- Advanced analytics software

---

## Troubleshooting Common Issues

| Issue | Likely Cause | Solution |
|-------|--------------|----------|
| **pH sensor drifts quickly** | Membrane degradation | Clean, recalibrate, or replace if slope <90% |
| **DO reading unstable** | Membrane fouling or bubbles | Clean membrane, ensure proper flow |
| **EC reading high noise** | Poor electrical grounding | Check grounding, shield cables |
| **Temperature spikes** | Direct sunlight on sensor | Shield sensor, relocate |
| **Humidity reads 99% constantly** | Sensor saturated | Dry sensor, relocate away from spray |
| **CO₂ reads 0 ppm** | Sensor not warmed up | Wait 3-5 minutes after power-on |

---

## Vendor Recommendations

### Quality Budget-Friendly:
- Atlas Scientific (pH, EC, DO)
- Adafruit (environmental sensors)
- DFRobot (sensor kits)

### Industrial/Professional:
- YSI (water quality)
- Hach (water quality)
- Vaisala (CO₂, climate)
- Apogee (PAR sensors)
- Mettler Toledo (pH, DO)
- Onset (HOBO data loggers)

### Electronics/Controllers:
- Raspberry Pi Foundation
- Arduino
- Espressif (ESP32)

---

*EcoFusion Academy - Course 304*
*Sensor Selection Guide*
