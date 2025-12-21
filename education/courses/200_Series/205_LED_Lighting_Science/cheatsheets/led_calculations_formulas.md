# LED Lighting Calculations & Formulas

**Course:** 205 - LED Lighting Science

## Essential Formulas

### DLI Calculations

```
DAILY LIGHT INTEGRAL (DLI)
══════════════════════════════════════════

Formula:
  DLI (mol/m²/d) = PPFD (μmol/m²/s) × Hours × 3.6 / 1000

Where:
  - PPFD = Photosynthetic Photon Flux Density
  - Hours = Photoperiod in hours
  - 3.6 = Conversion factor (3600 sec/hr ÷ 1000 μmol/mol)
  - 1000 = Converts μmol to mol

Example:
  PPFD = 300 μmol/m²/s
  Photoperiod = 16 hours
  DLI = 300 × 16 × 3.6 / 1000 = 17.28 mol/m²/d

INVERSE (PPFD from DLI):
════════════════════════

Formula:
  PPFD (μmol/m²/s) = (DLI × 1000) / (Hours × 3.6)

Example:
  Target DLI = 20 mol/m²/d
  Photoperiod = 14 hours
  PPFD = (20 × 1000) / (14 × 3.6) = 397 μmol/m²/s
```

### Fixture Efficacy

```
LED EFFICACY
══════════════════════════════════════════

Formula:
  Efficacy (μmol/J) = PPF (μmol/s) / Power (W)

Where:
  - PPF = Photosynthetic Photon Flux (total output)
  - Power = Electrical input in watts
  - μmol/J = Micromoles per joule

Example:
  PPF = 1800 μmol/s
  Power = 600W
  Efficacy = 1800 / 600 = 3.0 μmol/J

POWER from EFFICACY:
════════════════════

Formula:
  Power (W) = PPF (μmol/s) / Efficacy (μmol/J)

Example:
  Required PPF = 2000 μmol/s
  Fixture efficacy = 2.7 μmol/J
  Power = 2000 / 2.7 = 741W
```

### Coverage & Fixture Quantity

```
TOTAL PPF REQUIRED
══════════════════════════════════════════

Formula:
  Total PPF = Area (m²) × Target PPFD (μmol/m²/s) / Efficiency

Where:
  - Area = Growing area in square meters
  - Target PPFD = Desired light intensity
  - Efficiency = 0.75-0.90 typical (accounts for losses)

Example:
  Area = 100 m²
  Target PPFD = 300 μmol/m²/s
  Efficiency = 0.85
  Total PPF = 100 × 300 / 0.85 = 35,294 μmol/s

FIXTURE QUANTITY
════════════════

Formula:
  Fixtures = Total PPF Required / PPF per Fixture

Example:
  Total PPF = 35,294 μmol/s
  Fixture PPF = 1500 μmol/s
  Fixtures = 35,294 / 1500 = 23.5 ≈ 24 fixtures

Add 10-15% margin for degradation and uniformity
```

### Inverse Square Law

```
LIGHT INTENSITY vs DISTANCE
══════════════════════════════════════════

Formula:
  PPFD₂ = PPFD₁ × (Distance₁ / Distance₂)²

Example:
  PPFD at 12" = 400 μmol/m²/s
  What is PPFD at 24"?
  PPFD₂ = 400 × (12/24)²
        = 400 × (0.5)²
        = 400 × 0.25
        = 100 μmol/m²/s

DISTANCE from PPFD:
═══════════════════

Formula:
  Distance₂ = Distance₁ × √(PPFD₁ / PPFD₂)

Example:
  PPFD at 18" = 350 μmol/m²/s
  Desired PPFD = 280 μmol/m²/s
  Distance₂ = 18 × √(350/280)
            = 18 × √1.25
            = 18 × 1.12
            = 20.1 inches
```

### Uniformity

```
PPFD UNIFORMITY
══════════════════════════════════════════

Formula:
  Uniformity (%) = (Minimum PPFD / Maximum PPFD) × 100

Example:
  Minimum PPFD = 220 μmol/m²/s
  Maximum PPFD = 350 μmol/m²/s
  Uniformity = (220 / 350) × 100 = 62.9%

Target: >80% for commercial production

COEFFICIENT OF VARIATION (CV):
═══════════════════════════════

Formula:
  CV (%) = (Standard Deviation / Mean) × 100

Lower CV = Better uniformity
Target: CV < 10%
```

### Energy Calculations

```
ENERGY CONSUMPTION
══════════════════════════════════════════

Daily Energy (kWh):
  kWh/day = (Power in kW) × Hours

Example:
  Power = 40 kW
  Photoperiod = 16 hours
  kWh/day = 40 × 16 = 640 kWh

Annual Energy:
  kWh/year = kWh/day × 365 days

Example:
  kWh/year = 640 × 365 = 233,600 kWh

ENERGY COST:
════════════

Formula:
  Cost = kWh × Rate ($/kWh)

Example:
  Annual kWh = 233,600
  Rate = $0.12/kWh
  Annual cost = 233,600 × 0.12 = $28,032

PER-FIXTURE ANNUAL COST:
════════════════════════

Formula:
  Cost = (Power in W / 1000) × Hours/day × 365 × Rate

Example:
  Fixture = 400W
  Hours = 16/day
  Rate = $0.11/kWh
  Cost = (400/1000) × 16 × 365 × 0.11 = $257.84/year
```

### Electrical Load

```
CIRCUIT CAPACITY
══════════════════════════════════════════

Maximum Load per Circuit:
  Max Load (W) = Voltage (V) × Current (A) × 0.80

Where 0.80 = 80% capacity per NEC code

Example (208V, 20A circuit):
  Max Load = 208 × 20 × 0.80 = 3,328W

FIXTURES PER CIRCUIT:
═════════════════════

Formula:
  Fixtures = Max Circuit Load / Fixture Wattage

Example:
  Max Load = 3,328W
  Fixture = 400W
  Fixtures/circuit = 3,328 / 400 = 8.3 ≈ 8 fixtures

TOTAL CURRENT DRAW:
═══════════════════

Formula:
  Current (A) = Power (W) / Voltage (V)

Example:
  Total Power = 50,000W
  Voltage = 208V
  Current = 50,000 / 208 = 240A
```

### Spectrum Ratios

```
RED:BLUE RATIO
══════════════════════════════════════════

Formula:
  R:B = Red Photons (μmol/m²/s) / Blue Photons (μmol/m²/s)

Example:
  Red PPFD = 450 μmol/m²/s
  Blue PPFD = 150 μmol/m²/s
  R:B = 450 / 150 = 3.0

RED:FAR-RED RATIO
═════════════════

Formula:
  R:FR = Red Photons (600-700nm) / Far-Red Photons (700-800nm)

Example:
  Red = 500 μmol/m²/s
  Far-Red = 50 μmol/m²/s
  R:FR = 500 / 50 = 10.0
```

### ROI & Payback

```
SIMPLE PAYBACK PERIOD
══════════════════════════════════════════

Formula:
  Payback (years) = Initial Investment / Annual Savings

Example:
  Investment = $50,000 (LED upgrade)
  Annual Savings = $12,000 (energy + maintenance)
  Payback = 50,000 / 12,000 = 4.2 years

TOTAL COST OF OWNERSHIP (5 years)
══════════════════════════════════

Formula:
  TCO = Capital + (Operating Cost/year × 5)

Example:
  Capital = $100,000
  Operating = $20,000/year
  TCO = 100,000 + (20,000 × 5) = $200,000

ENERGY SAVINGS:
═══════════════

Formula:
  Savings = (Old kWh - New kWh) × Rate

Example:
  Old HPS: 300,000 kWh/year
  New LED: 180,000 kWh/year
  Rate: $0.13/kWh
  Savings = (300,000 - 180,000) × 0.13 = $15,600/year
```

## Quick Reference Table

```
COMMON CONVERSIONS
═══════════════════════════════════════════════════════

1 foot = 0.3048 meters
1 meter = 3.281 feet
1 sq ft = 0.0929 m²
1 m² = 10.764 sq ft
1 kW = 1000 W
3412 BTU/hr = 1 kW (heat output)

PHOTOPERIOD MULTIPLIERS FOR DLI
═══════════════════════════════════════════════════════

To calculate DLI from PPFD, multiply by:

12 hours → × 0.0432
14 hours → × 0.0504
16 hours → × 0.0576
18 hours → × 0.0648
20 hours → × 0.0720
24 hours → × 0.0864

Example: 300 μmol/m²/s × 16 hrs
DLI = 300 × 0.0576 = 17.28 mol/m²/d
```

## Example Problems with Solutions

```
PROBLEM 1: System Design
═════════════════════════

Given:
- Growing area: 200 m²
- Target DLI: 18 mol/m²/d
- Photoperiod: 16 hours
- Available fixtures: 1200 μmol/s, 400W, 3.0 μmol/J
- System efficiency: 85%

Find: Number of fixtures, total power, annual cost ($0.11/kWh)

Solution:
1) Required PPFD = (18 × 1000) / (16 × 3.6) = 313 μmol/m²/s
2) Total PPF = 200 × 313 / 0.85 = 73,647 μmol/s
3) Fixtures = 73,647 / 1200 = 61.4 ≈ 62 fixtures
4) Total power = 62 × 400W = 24.8 kW
5) Daily kWh = 24.8 × 16 = 396.8 kWh
6) Annual kWh = 396.8 × 365 = 144,832 kWh
7) Annual cost = 144,832 × $0.11 = $15,931

PROBLEM 2: Fixture Comparison
══════════════════════════════

Fixture A: $450, 1500 μmol/s, 600W
Fixture B: $380, 1200 μmol/s, 500W

Which is better value for same 50,000 μmol/s output?

Solution:
Fixture A:
- Quantity = 50,000 / 1500 = 33.3 ≈ 34 fixtures
- Cost = 34 × $450 = $15,300
- Power = 34 × 600W = 20.4 kW
- Efficacy = 1500/600 = 2.5 μmol/J

Fixture B:
- Quantity = 50,000 / 1200 = 41.7 ≈ 42 fixtures
- Cost = 42 × $380 = $15,960
- Power = 42 × 500W = 21.0 kW
- Efficacy = 1200/500 = 2.4 μmol/J

Result: Fixture A has lower capital cost ($15,300 vs $15,960)
        and lower operating cost (20.4kW vs 21.0kW)
        → Fixture A is better value

PROBLEM 3: Mounting Height
═══════════════════════════

Fixture provides 500 μmol/m²/s at 18" height.
What height achieves 320 μmol/m²/s?

Solution:
Distance₂ = 18 × √(500/320)
          = 18 × √1.5625
          = 18 × 1.25
          = 22.5 inches

Answer: Mount at 22.5" height
```

---

**TIP:** Laminate this sheet and keep it in your facility for quick calculations!

**Remember:** These formulas assume ideal conditions. Always verify with actual measurements using calibrated PAR meters.
