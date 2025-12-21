# Vertical Farm Engineering Calculations - Quick Reference

## 1. Space Utilization and Production

### Growing Area Calculation
```
Total Growing Area = Floor Area × Levels × Usable %
Space Utilization Ratio = Total Growing Area / Floor Area
```

### Production Capacity
```
Annual Production = Growing Area × Yield/m² × Turns/Year
Turns per Year = 365 / (Grow Days + Turnover Days)
Weekly Production = Annual Production / 52
```

**Example:**
- 1,000 m² floor, 8 levels, 60% usable = 4,800 m² growing area
- 2.5 kg/m² yield, 30-day cycle = 12.17 turns/year
- Annual: 4,800 × 2.5 × 12.17 = 146 MT/year

---

## 2. Structural Loading

### Design Load Formula
```
Design Load = (Dead Load × 1.2) + (Live Load × 1.6)
```

### Typical Loads (kg/m² per level)
```
Dead Load:  25-41 kg/m² (structure, equipment, dry media)
Live Load:  115-215 kg/m² (water, saturated media, crop, personnel)
Design Load: 280-350 kg/m² typical
```

### Point Load Distribution
```
Load per Post = (Bay Area × Design Load × Levels) / Posts
Pressure = Load / Base Plate Area
```

**Example:**
- Bay: 2.4m × 10m = 24 m², 8 levels, 300 kg/m², 6 posts
- Load/post: (24 × 300 × 8) / 6 = 9,600 kg
- With 400mm base plate: 9,600 / 0.16 m² = 60,000 kg/m² = 0.6 MPa ✓

---

## 3. Lighting Calculations

### PPFD and DLI
```
DLI = PPFD × Photoperiod (hours) × 0.0036
PPFD = DLI / (Photoperiod × 0.0036)

Where: DLI in mol/m²/day, PPFD in μmol/m²/s
```

### Power Requirements
```
Power (W) = Target PPFD × Area / LED Efficacy
LED Efficacy: 2.5-3.0 μmol/J typical
System Efficacy = LED × Driver Efficiency × Optical Efficiency
```

### Heat Generation
```
Heat (W) = LED Power × (1 - Light Efficiency)
Light Efficiency ≈ 40-50% for horticultural LEDs
Therefore: Heat ≈ 50-60% of electrical input
```

**Example:**
- Target: 250 μmol/m²/s, 1,000 m², 2.7 μmol/J efficacy
- Required PPF: 1,000 × 250 = 250,000 μmol/s
- Power: 250,000 / 2.7 = 92.6 kW
- Heat: 92.6 × 0.55 = 51 kW

### Electrical Sizing
```
Current (A) = Power (W) / (Voltage × √3 × Power Factor)
Circuits Required = Total Power / Power per Circuit

For 480V 3-phase, 20A circuit:
Power per circuit ≈ 480 × √3 × 20 × 0.95 = 15.8 kW
With safety factor (1.25): Usable = 12.6 kW per circuit
```

---

## 4. HVAC Load Calculations

### Sensible Load
```
Q_sensible = Lights (heat) + Equipment + People + Envelope + Ventilation
```

### Latent Load (Transpiration)
```
Q_latent = Transpiration Rate (kg/hr) × 2,260 kJ/kg / 3,600 s/hr
         = Transpiration Rate (kg/hr) × 0.628 kW/(kg/hr)

Typical Transpiration: 3-6 L/m²/day during photoperiod
Hourly Rate = Daily Rate / Photoperiod Hours
```

### Total Cooling
```
Total Cooling (kW) = Sensible + Latent
Tons = kW / 3.517
Sensible Heat Ratio (SHR) = Sensible / Total
```

### Airflow Requirements
```
CFM = Sensible Load (BTU/hr) / (1.08 × ΔT°F)
CFM = Latent Load (BTU/hr) / (4,840 × ΔW lb/lb)

Typical: 15-25 ACH for vertical farms
ACH = (CFM × 60) / Volume (ft³)
```

**Example:**
- Sensible: 280,000 BTU/hr, ΔT = 10°F
- CFM = 280,000 / (1.08 × 10) = 25,926 CFM

---

## 5. Irrigation Hydraulics

### Flow Velocity
```
Velocity (m/s) = Flow Rate (m³/s) / Area (m²)
Area = π × (Diameter/2)²

Target Velocities:
- Main lines: 1.0-2.0 m/s
- Branch lines: 0.5-1.5 m/s
- Drip laterals: 0.3-0.6 m/s
```

### Hazen-Williams (Friction Loss)
```
hf = 10.67 × L × Q^1.852 / (C^1.852 × d^4.87)

Where:
hf = head loss (m)
L = length (m)
Q = flow (m³/s)
C = coefficient (145 for PVC)
d = diameter (m)
```

### Pump Sizing
```
TDH = Static Head + Friction Loss + Pressure Head
Power (HP) = (GPM × TDH × SG) / (3,960 × Efficiency)

Typical efficiency: 70-85% for centrifugal pumps
```

---

## 6. Energy Calculations

### Annual Consumption
```
Annual kWh = Power (kW) × Hours/Day × Days/Year
Cost = kWh × Rate ($/kWh)
```

### Energy Per Kilogram
```
kWh/kg = Total Facility kWh / Total Production (kg)

Benchmarks:
- Excellent: <12 kWh/kg
- Good: 12-15 kWh/kg
- Average: 15-18 kWh/kg
- Poor: >18 kWh/kg
```

### Power Usage Effectiveness
```
PUE-VF = Total Facility Power / Growing System Power

Growing System = Lights + Pumps + Controls
Total = Growing System + HVAC + Other

Target: PUE-VF < 1.4 (good), <1.3 (excellent)
```

### Load Factor
```
Load Factor = Average Demand / Peak Demand
Higher load factor = better utility rate efficiency
```

---

## 7. Water Efficiency

### Water Use
```
L/kg = Total Water Consumed / Total kg Produced

Benchmarks:
- Excellent: <18 L/kg
- Good: 18-22 L/kg
- Average: 22-28 L/kg
- Field agriculture: 200-300+ L/kg
```

### Recirculation Rate
```
Recirculation % = (Recirculated Water / Total Water) × 100%
Target: >95%
```

---

## 8. ROI and Payback

### Simple Payback
```
Payback (years) = Initial Investment / Annual Savings
```

### Net Present Value (NPV)
```
NPV = Σ [Cash Flow_year / (1 + discount rate)^year] - Initial Investment

PV Factor Table (10 years):
5% discount: 7.72
8% discount: 6.71
10% discount: 6.14
```

### Internal Rate of Return (IRR)
```
IRR is the discount rate where NPV = 0
Use financial calculator or spreadsheet solver
Decision: Accept if IRR > Required Return
```

---

## 9. Quick Conversions

### Units
```
Power:
1 HP = 0.746 kW
1 kW = 3,412 BTU/hr

Pressure:
1 bar = 14.5 PSI = 10 m water column
1 PSI = 6.89 kPa = 0.0689 bar

Flow:
1 GPM = 3.785 L/min = 0.227 m³/hr
1 CFM = 28.3 L/min = 1.70 m³/hr

Area:
1 m² = 10.76 ft²
1 acre = 4,047 m² = 43,560 ft²

Temperature:
°C = (°F - 32) / 1.8
°F = (°C × 1.8) + 32
```

---

## 10. Quick Design Rules

### Structural
- Design load: 300-400 kg/m² per level for most systems
- Safety factor: 1.5-2.0× on capacity
- Deflection limit: L/240 (conservative)

### Lighting
- Leafy greens: 200-300 μmol/m²/s
- DLI target: 12-17 mol/m²/day
- Mounting height: 300-500mm above canopy

### HVAC
- Cooling: 60-100 W/m² of growing area
- Dehumidification: Size for peak transpiration
- Air changes: 15-25 ACH

### Electrical
- Service: 125% of calculated demand load
- Power density: 100-150 W/m² floor area
- Circuits: 20A max continuous load = 16A usable

### Water
- Daily use: 2-4 L/m²/day growing area
- System volume: 2-3× minimum working volume
- Filtration: 5 micron before emitters

---

**This cheatsheet provides quick reference formulas. Always verify calculations and consult detailed engineering resources for critical applications.**
