# RAS Design Quick Reference

## Course 402: Advanced Aquaculture Systems

**Expert-Level Cheat Sheet**

---

## Critical Design Parameters

### Flow Rates & Turnover

```
FORMULA: Q = V / RT

Where:
Q = Flow rate (m³/hr)
V = System volume (m³)
RT = Retention time (hours)

TYPICAL TURNOVERS:
Hatchery: 1-2 per hour
Grow-out: 0.5-1 per hour
High-density: 1-3 per hour
```

### Stocking Densities

| Species | Density (kg/m³) |
|---------|-----------------|
| Tilapia | 60-100 |
| Atlantic salmon | 60-80 |
| Rainbow trout | 80-120 |
| Barramundi | 50-80 |
| Catfish | 75-100 |
| Shrimp | 10-20 |

---

## Biofilter Sizing

### TAN Production

```
TAN (kg/day) = Feed (kg/day) × Protein (%) × 0.092

Example:
100 kg feed × 40% protein × 0.092 = 3.68 kg TAN/day
```

### MBBR Design

```
Surface Area = TAN Production (g/day) / Loading Rate (g/m²/day)

LOADING RATES:
Conservative: 0.5-0.8 g/m²/day
Moderate: 0.8-1.2 g/m²/day
Intensive: 1.2-1.8 g/m²/day

Media Surface Area: 500-1200 m²/m³
Fill Rate: 50-70% of reactor volume
```

---

## Oxygen Requirements

### Consumption Rates

```
METHOD 1: From Feed
O₂ (kg/day) = Feed (kg/day) × 0.5

METHOD 2: From Biomass
Tilapia @ 28°C: 200-300 mg/kg/hr
Salmon @ 15°C: 180-280 mg/kg/hr

NITRIFICATION O₂:
4.57 g O₂ per g TAN oxidized
```

### Saturation Values (mg/L)

| Temp (°C) | Freshwater | Saltwater |
|-----------|------------|-----------|
| 10 | 11.3 | 9.0 |
| 15 | 10.1 | 8.1 |
| 20 | 9.1 | 7.3 |
| 25 | 8.2 | 6.6 |
| 30 | 7.5 | 6.0 |

---

## Water Quality Targets

```
┌─────────────────────────────────────┐
│ Parameter      Target    Lethal     │
├─────────────────────────────────────┤
│ DO             6-9       <3 mg/L    │
│ TAN            <1        >5 mg/L    │
│ NO₂⁻           <0.5      >10 mg/L   │
│ NO₃⁻           <100      >400 mg/L  │
│ CO₂            <15       >40 mg/L   │
│ pH             7.0-8.0   <6.0/>9.0  │
│ Alkalinity     50-150    <30 mg/L   │
│ Temperature    Species   ±5°C       │
└─────────────────────────────────────┘
```

---

## Alkalinity Management

```
CONSUMPTION:
7.14 g CaCO₃ per g NH₄⁺-N oxidized

DOSING (Sodium Bicarbonate):
NaHCO₃ (kg) = Volume (m³) × Deficit (mg/L) × 0.001

Example:
1000 m³, 60 mg/L deficit
NaHCO₃ = 1000 × 60 × 0.001 = 60 kg
```

---

## Solids Production

```
TSS Production = Feed Rate × (1 - Digestibility) × 1.3

DIGESTIBILITY:
Tilapia: 80% → Feed × 0.26 = solids
Salmon: 85% → Feed × 0.20 = solids
Shrimp: 70% → Feed × 0.39 = solids

Example:
100 kg salmon feed
Solids = 100 × 0.20 = 20 kg TSS/day
```

---

## Economic Formulas

### FCR (Feed Conversion Ratio)

```
FCR = Feed Given (kg) / Weight Gain (kg)

TARGET FCR:
Tilapia: 1.0-1.4
Salmon: 0.9-1.2
Catfish: 1.4-1.8
```

### SGR (Specific Growth Rate)

```
SGR (%/day) = [(ln W₂ - ln W₁) / Days] × 100

Example:
50g → 200g in 60 days
SGR = [(ln 200 - ln 50) / 60] × 100 = 2.3%/day
```

### Break-Even

```
Break-Even (kg) = Fixed Costs / (Price/kg - Variable Cost/kg)
```

---

## Tank Geometry

### Circular Tanks

```
Optimal D:H = 4:1

Volume = π × r² × h

Example:
Diameter 5m, Depth 1.25m
V = 3.14159 × 2.5² × 1.25 = 24.5 m³
```

### Inlet/Outlet Design

- Inlet: Tangential, 10-20cm below surface
- Velocity: 0.3-0.5 m/s
- Bottom drain: 200-300mm diameter
- Dual drain: 80% bottom, 20% surface

---

## Pipe Sizing

### Velocity Guidelines

| Application | Velocity (m/s) |
|-------------|----------------|
| Gravity drains | 0.6-1.0 |
| Pump suction | 0.9-1.5 |
| Pump discharge | 1.5-2.4 |

### Diameter Calculation

```
D = √(4Q / πV)

Where:
D = diameter (m)
Q = flow (m³/s)
V = velocity (m/s)
```

---

## Emergency Thresholds

### Critical Alarms

```
RED (Immediate Action):
- DO < 4.0 mg/L
- Sump low level
- Power failure
- Main pump failure

YELLOW (Monitor Closely):
- DO < 6.0 mg/L
- pH < 7.0 or > 8.0
- Temp ±2°C from setpoint
- TAN > 1.0 mg/L
```

---

## Scale-Up Factor

```
Cost_new = Cost_base × (Capacity_new / Capacity_base)^0.7

Example:
100-tonne: $2.7M
200-tonne: $2.7M × (200/100)^0.7 = $4.4M
```

---

## Quick Conversions

```
1 m³ = 1,000 L = 264 gal
1 kg/m³ = 1 g/L = 1000 mg/L = 1000 ppm
1 hp = 0.746 kW
°F = (°C × 1.8) + 32
mg/L O₂ to % saturation: depends on temp/salinity (see tables)
```

---

## Common Mistakes to Avoid

1. Under-sizing biofilter (use safety factor)
2. Inadequate backup systems
3. Skipping quarantine
4. Overfeeding
5. Poor biosecurity
6. Insufficient aeration
7. No emergency action plan
8. Undersizing for future needs

---

## Design Checklist

- [ ] Target production defined
- [ ] Species selected and researched
- [ ] Tank sizing calculated
- [ ] Flow rates determined
- [ ] Biofilter sized with safety factor
- [ ] Oxygenation capacity verified
- [ ] Solids removal adequate
- [ ] Backup systems specified
- [ ] Monitoring/alarms planned
- [ ] Emergency protocols written
- [ ] Economic analysis complete
- [ ] Permitting requirements identified

---

*Keep this reference handy for quick calculations and system design!*

*EcoFusion Academy - Course 402*
