# Equipment Sizing Guide
## Course 211: Greenhouse Climate Management

---

## Heating Capacity

```
╔═══════════════════════════════════════════════════════════════════════╗
║                                                                       ║
║                    HEATING CAPACITY CALCULATION                       ║
║                                                                       ║
║   Q = U × A × ΔT                                                      ║
║                                                                       ║
║   Q = Heat loss (BTU/hour)                                            ║
║   U = U-value (BTU/hr·ft²·°F)                                        ║
║   A = Surface area (ft²)                                              ║
║   ΔT = Temperature difference (°F)                                    ║
║                                                                       ║
║   Add 10-15% for infiltration                                         ║
║   Add 20% safety factor                                               ║
║                                                                       ║
╚═══════════════════════════════════════════════════════════════════════╝

U-VALUES FOR COMMON COVERINGS:
────────────────────────────────
Single glass                     1.13
Double glass                     0.55
Single poly                      1.00
Double poly                      0.70
Double poly + thermal curtain    0.30
Polycarbonate (8mm)              0.60
Polycarbonate (16mm)             0.40
Insulated wall (R-19)            0.05

EXAMPLE CALCULATION:
────────────────────
Greenhouse: 30' × 96' × 12' high
Covering: Double poly (U = 0.70)
Location: Design temp 0°F, target inside 65°F

Surface area ≈ 8,000 ft² (walls + roof)
ΔT = 65 - 0 = 65°F

Q = 0.70 × 8,000 × 65 = 364,000 BTU/hr
Add 15% infiltration: 364,000 × 1.15 = 418,600
Add 20% safety: 418,600 × 1.20 = 502,320 BTU/hr

HEATER SIZE NEEDED: ~500,000 BTU/hr
```

---

## Ventilation Capacity

```
SUMMER COOLING VENTILATION:
───────────────────────────

Method 1: Floor Area
CFM = Floor Area (ft²) × 8 to 12

Method 2: Air Changes
CFM = (Volume × ACH) / 60

TARGET ACH:
Winter minimum: 15-30 ACH (humidity/CO₂ only)
Spring/Fall: 30-60 ACH
Summer: 60-120 ACH

EXAMPLE:
────────
30' × 96' greenhouse = 2,880 ft²

Method 1: 2,880 × 10 = 28,800 CFM
Method 2: Volume = 2,880 × 12 = 34,560 ft³
         CFM = (34,560 × 90) / 60 = 51,840 CFM

Use larger value for hot climates: ~35,000-50,000 CFM

FAN SELECTION:
──────────────
48" fans ≈ 8,000-10,000 CFM each
36" fans ≈ 4,000-6,000 CFM each
24" fans ≈ 2,000-3,000 CFM each

For 35,000 CFM: Use 4-5 × 48" fans (staging capability)
```

---

## Humidification Capacity

```
MOISTURE ADDITION CALCULATION:
───────────────────────────────

Step 1: Moisture deficit (g/m³)
Current moisture = SVP × (RH_current / 100)
Target moisture = SVP × (RH_target / 100)
Deficit = Target - Current

Step 2: Greenhouse volume (m³)
Volume_ft³ × 0.0283 = Volume_m³

Step 3: Total moisture needed (grams)
Deficit × Volume = Total grams
Convert to gallons: grams / 3,785 = gallons

Step 4: Account for air exchange
Add 50-100% for ventilation losses

EXAMPLE:
────────
Current: 75°F, 40% RH
Target: 75°F, 60% RH
Volume: 30,000 ft³ = 850 m³
SVP at 75°F ≈ 19.4 g/m³

Current: 19.4 × 0.40 = 7.76 g/m³
Target: 19.4 × 0.60 = 11.64 g/m³
Deficit: 3.88 g/m³

Total needed: 850 × 3.88 = 3,298 grams ≈ 0.87 gallons

To raise in 30 min: 1.74 gal/hr
With losses (×1.5): 2.6 gal/hr capacity needed

FOGGER SIZING:
High-pressure fog: 2-3 gallons/hr capacity
```

---

## Dehumidification Capacity

```
DEHUMIDIFIER SIZING:
────────────────────

Rule of thumb: 1 pint capacity per 500 cubic feet

EXAMPLE:
30,000 ft³ greenhouse
30,000 / 500 = 60 pints/day minimum

Commercial dehumidifiers: 50-200+ pints/day

For high transpiration loads (dense planting):
Add 50-100% to calculated capacity

REFRIGERANT DEHUMIDIFIERS:
Small (30-50 pints/day): <5,000 ft³
Medium (70-100 pints/day): 5,000-15,000 ft³
Large (150-200+ pints/day): 15,000-40,000 ft³
Industrial: >40,000 ft³
```

---

## HAF Fan Capacity

```
HORIZONTAL AIR FLOW (HAF):
──────────────────────────

Target: 1 CFM per square foot of floor area

EXAMPLE:
2,880 ft² floor = 2,880 CFM total circulation

Typical HAF fans: 200-500 CFM each

Number needed: 2,880 / 300 = ~10 fans
Spacing: Place evenly, create circular pattern

FAN PLACEMENT:
Height: 1/3 up from floor (at crop canopy)
Pattern: Horizontal circular flow
Spacing: 20-30 feet apart maximum
```

---

## Supplemental Lighting

```
LIGHT REQUIREMENT CALCULATION:
───────────────────────────────

Target DLI (mol/m²/day) - Natural light DLI = Supplement needed

Convert to photoperiod:
Hours needed = (DLI × 1,000,000) / (PPFD × 3,600)

EXAMPLE:
Target: 16 mol/m²/day (tomatoes)
Natural light (winter): 5 mol/m²/day
Supplement needed: 11 mol/m²/day

If using fixtures providing 200 μmol/m²/s PPFD:
Hours = (11 × 1,000,000) / (200 × 3,600) = 15.3 hours

FIXTURE SELECTION:
Calculate area coverage per fixture (manufacturer spec)
Divide greenhouse area by coverage area
Add 10-20% for edge losses

LED EFFICIENCY:
Entry-level: 2.0-2.5 μmol/J
Mid-range: 2.5-2.8 μmol/J
High-end: 2.8-3.2+ μmol/J

Power = (Target PPFD × Area) / (Efficiency × 1,000,000)
```

---

## CO₂ Generation

```
CO₂ REQUIREMENT:
────────────────

Approximate: 0.1-0.2 lbs CO₂ per square foot per day
(when sealed, enriching to 1000-1200 ppm)

EXAMPLE:
3,000 ft² greenhouse
CO₂ needed: 3,000 × 0.15 = 450 lbs/day

CO₂ GENERATOR SIZING:
Small (4-10 lbs/hr): <2,000 ft²
Medium (10-20 lbs/hr): 2,000-6,000 ft²
Large (20-40 lbs/hr): 6,000-15,000 ft²

Note: Only needed during sealed periods (winter, early morning)
Actual daily consumption much less than theoretical maximum
```

---

## Quick Reference Summary

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│   EQUIPMENT          SIZING RULE                                    │
│   ═══════════════════════════════════════════════════════════════   │
│                                                                     │
│   Heating            Q = U × A × ΔT, add 35% total                 │
│   Ventilation        8-12 CFM/ft² floor (summer)                   │
│   Humidification     Calculate moisture deficit                     │
│   Dehumidification   1 pint per 500 ft³                            │
│   HAF Fans           1 CFM per ft² floor                            │
│   Lighting           Match DLI requirements                         │
│   CO₂                0.1-0.2 lbs/ft²/day (sealed periods)          │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

*EcoFusion Academy - Course 211 Cheatsheet*
