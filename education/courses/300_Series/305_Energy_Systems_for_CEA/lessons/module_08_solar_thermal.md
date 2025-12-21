# Module 8: Solar Thermal Applications

## Learning Objectives

By the end of this module, you will be able to:
- Design solar thermal systems for greenhouse heating
- Calculate thermal collector performance
- Size thermal storage for CEA applications
- Integrate solar thermal with existing heating systems
- Evaluate solar thermal vs. solar PV economics

---

## 8.1 Solar Thermal Fundamentals

### Solar Thermal vs. Solar PV

```
╔══════════════════════════════════════════════════════════════════╗
║              SOLAR THERMAL VS. SOLAR PV COMPARISON               ║
╠══════════════════════════════════════════════════════════════════╣
║                                                                  ║
║  Efficiency (sunlight to useful energy)                          ║
║    Solar Thermal  ████████████████████████████████░ 60-75%      ║
║    Solar PV       ████████████░░░░░░░░░░░░░░░░░░░░ 18-22%      ║
║                                                                  ║
║  Cost per kWth/kWe capacity                                      ║
║    Solar Thermal  ████████░░░░░░░░░░░░░░░░░░░░░░░ $800/kWth    ║
║    Solar PV       ████████████████████████████████░ $2,500/kWe  ║
║                                                                  ║
║  Application Versatility                                         ║
║    Solar Thermal  ████████████░░░░░░░░░░░░░░░░░░░ Heat only    ║
║    Solar PV       ████████████████████████████████░ All uses    ║
║                                                                  ║
╚══════════════════════════════════════════════════════════════════╝

Best Use Cases:
  Solar Thermal: High heating loads, year-round demand
  Solar PV: Electricity-dominant loads, net metering available
```

### Collector Types

```
SOLAR THERMAL COLLECTOR COMPARISON
═══════════════════════════════════════════════════════════════════

Type              Efficiency  Temp    Cost       Best For
                  Range       Range   ($/sq ft)
─────────────────────────────────────────────────────────────────
Unglazed          60-70%      <30°F   $15-25     Pool heating
Flat plate        50-70%      30-80°F $45-75     Space/water heat
Evacuated tube    60-80%      50-130°F $80-150   Higher temps
Concentrating     70-85%      >130°F  $150-300   Process heat

For Greenhouse Heating:
  Primary choice: Flat plate collectors
  Reason: Good efficiency at required temps (70-80°F delivery)
```

---

## 8.2 System Design

### Heating Load Assessment

```
GREENHOUSE HEATING REQUIREMENTS
═══════════════════════════════════════════════════════════════════

Example: 10,000 sq ft greenhouse
Design heat load: 500,000 Btu/hr (peak winter)
Annual heating demand: 3,500 MMBtu

Monthly Heating Distribution:
  Nov-Mar: 800 MMBtu/month (70% of annual)
  Apr, Oct: 200 MMBtu/month (20% of annual)
  May-Sep: 100 MMBtu/month (10% of annual)

Solar Contribution Target: 30-50% of annual demand
  Conservative: 1,000 MMBtu/year solar
  Aggressive: 1,750 MMBtu/year solar
```

### Collector Sizing

```
SOLAR COLLECTOR CALCULATION
═══════════════════════════════════════════════════════════════════

Flat Plate Collector Performance (Midwest location):

Monthly Solar Resource and Collection:
                Solar      Collector    Output per
Month          Irradiance  Efficiency   sq ft
             (Btu/sq ft/day)           (Btu/sq ft/day)
─────────────────────────────────────────────────────────────────
January        850          45%          383
February       1,100        50%          550
March          1,400        55%          770
April          1,650        58%          957
May            1,850        60%         1,110
June           1,950        60%         1,170
July           1,900        58%         1,102
August         1,750        56%          980
September      1,500        54%          810
October        1,200        52%          624
November       900          48%          432
December       750          43%          323

Annual total: 8,211 Btu/sq ft/year

SYSTEM SIZING FOR 30% SOLAR FRACTION
───────────────────────────────────────────────────────────────────

Target solar contribution: 1,000 MMBtu/year
Required collector area: 1,000,000,000 ÷ 8,211 = 121,810 sq ft

This is impractically large! Need different approach...

PRACTICAL SIZING (Winter-Focused)
───────────────────────────────────────────────────────────────────

Target: Meet 50% of heating in shoulder seasons (Apr, Oct)
  Monthly demand: 200 MMBtu
  Target solar: 100 MMBtu/month = 3,333 MBtu/day

April production: 957 Btu/sq ft/day
Required area: 3,333,000 ÷ 957 = 3,482 sq ft of collectors

Annual contribution:
  3,482 sq ft × 8,211 Btu/sq ft = 28.6 MMBtu/year
  Percentage of total: 28.6 ÷ 3,500 = 0.8% (only 0.8%!)

Reality Check: Solar thermal difficult to economically justify
  for large greenhouse heating loads in cold climates

BETTER APPLICATION: Aquaponics Water Heating
───────────────────────────────────────────────────────────────────

Fish tank: 5,000 gallons, maintain 75°F
Daily heat loss (50°F average ΔT):
  5,000 gal × 8.34 lb/gal × 1 Btu/lb-°F × 50°F × 0.1 air change
  = 208,500 Btu/day ≈ 210,000 Btu/day

Collector area needed (winter, 383 Btu/sq ft/day):
  210,000 ÷ 383 = 548 sq ft

More reasonable! Could meet 50-80% of annual fish tank heating.
```

---

## 8.3 Thermal Storage

### Storage Sizing

```
THERMAL ENERGY STORAGE
═══════════════════════════════════════════════════════════════════

Purpose: Store daytime solar heat for nighttime use

Storage Capacity Formula:
  Q = m × Cp × ΔT

Where:
  Q = Heat stored (Btu)
  m = Mass of storage medium (lb)
  Cp = Specific heat (Btu/lb-°F)
  ΔT = Temperature swing (°F)

Water Storage (most common):
  Cp = 1.0 Btu/lb-°F
  Density = 8.34 lb/gallon

Example: Daily storage for 548 sq ft collector system
───────────────────────────────────────────────────────────────────

Daily collection (winter): 548 × 383 = 210,000 Btu
Usable temperature swing: 20°F (store at 90°F, use down to 70°F)

Storage volume needed:
  210,000 Btu = m × 1.0 × 20°F
  m = 10,500 lb water = 1,259 gallons ≈ 1,300 gallons

Tank sizing:
  1,300 gallon tank (approx 7 ft diameter × 5 ft tall)
  Insulation: R-20 minimum
  Cost: $3,500-5,000

Daily heat loss from tank (assuming R-20, 70°F inside, 50°F ambient):
  Surface area: ~200 sq ft
  U-value: 1/20 = 0.05
  Loss: 200 × 0.05 × 20 × 24 hrs = 4,800 Btu/day (2% of stored)
  Acceptable!
```

### Storage Strategies

```
THERMAL STORAGE OPTIONS
═══════════════════════════════════════════════════════════════════

Option 1: WATER TANKS (most common)
───────────────────────────────────────────────────────────────────
Pros:
  ✓ High heat capacity (1 Btu/lb-°F)
  ✓ Easy heat transfer
  ✓ Proven technology
  ✓ Can integrate with radiant heat

Cons:
  ✗ Large volume needed
  ✗ Weight concerns (10 lb/gallon)
  ✗ Leakage risk
  ✗ Maintenance (corrosion, sediment)

Cost: $3-8/gallon installed

Option 2: GRAVEL/ROCK BEDS
───────────────────────────────────────────────────────────────────
Pros:
  ✓ Low cost ($0.50-1.50/gallon equivalent)
  ✓ No leakage
  ✓ Long life
  ✓ Works with air systems

Cons:
  ✗ Lower heat capacity (0.2 Btu/lb-°F)
  ✗ Larger volume needed (5× water)
  ✗ Slower heat transfer
  ✗ Difficult to retrofit

Best for: New construction with space

Option 3: PHASE CHANGE MATERIALS (PCM)
───────────────────────────────────────────────────────────────────
Pros:
  ✓ High energy density
  ✓ Isothermal storage (constant temp)
  ✓ Compact

Cons:
  ✗ Very expensive ($15-40/gallon equivalent)
  ✗ Limited lifespan (cycle degradation)
  ✗ Heat transfer challenges

Best for: Research, high-value applications

Option 4: GROUND/SOIL STORAGE (BTES)
───────────────────────────────────────────────────────────────────
Borehole Thermal Energy Storage

Pros:
  ✓ Massive storage capacity
  ✓ Seasonal storage possible
  ✓ Long life (50+ years)

Cons:
  ✗ Very high upfront cost
  ✗ Requires suitable geology
  ✗ Complex engineering
  ✗ Large scale needed (>100 boreholes)

Best for: Large commercial operations, district heating
```

---

## 8.4 System Integration

### Hydronic Heating Integration

```
SOLAR THERMAL + CONVENTIONAL SYSTEM
═══════════════════════════════════════════════════════════════════

                    ┌──────────────┐
                    │ Solar        │
                    │ Collectors   │
                    │ (548 sq ft)  │
                    └──────┬───────┘
                           │ Hot fluid (90°F)
                           ▼
    ┌──────────────┐ ┌─────────────────┐
    │ Expansion    │ │ Heat Exchanger  │
    │ Tank         │ │ (if needed)     │
    └──────────────┘ └────────┬────────┘
                              │
                              ▼
                    ┌──────────────────┐
                    │ Storage Tank     │
                    │ (1,300 gallon)   │
                    │                  │
                    │ Hot water 90°F   │
                    │ (stratified)     │
                    │ Cool water 70°F  │
                    └────────┬─────────┘
                             │
                   ┌─────────┴─────────┐
                   │                   │
                   ▼                   ▼
          ┌─────────────┐    ┌─────────────────┐
          │ Radiant     │    │ Backup Boiler   │
          │ Floor Heat  │    │ (conventional)  │
          └─────────────┘    └─────────────────┘

Control Logic:
  1. If storage temp > 75°F → use solar stored heat
  2. If storage temp < 75°F → engage backup boiler
  3. Solar pump runs when collectors 10°F warmer than storage
  4. Stratification maintained (hot on top)

Key Components:
  • Solar collectors: $35,000
  • Storage tank (insulated): $5,000
  • Circulation pumps: $2,000
  • Controls & sensors: $3,000
  • Heat exchanger (if needed): $2,500
  • Piping & installation: $12,500
  ────────────────────────────────
  Total system cost: $60,000
```

---

## 8.5 Economic Analysis

### Solar Thermal ROI

```
SOLAR THERMAL FINANCIAL ANALYSIS
═══════════════════════════════════════════════════════════════════

System: 548 sq ft collectors for aquaponics heating
Location: Midwest
Application: Fish tank heating (5,000 gal, 75°F)

Investment:
  Equipment & installation: $60,000
  No federal tax credit (unlike solar PV)
  Some states offer incentives: $0-10,000

Annual Performance:
  Solar contribution: 28.6 MMBtu/year
  Natural gas offset: 28.6 ÷ 0.85 efficiency = 33.6 MMBtu
  Therms saved: 336 therms/year
  Savings: 336 × $1.20 = $403/year

  PROBLEM: Poor economics!
  Payback: $60,000 ÷ $403 = 149 years

COMPARISON TO SOLAR PV + ELECTRIC RESISTANCE
───────────────────────────────────────────────────────────────────

Alternative: Solar PV + electric water heater

Same heat delivery: 28.6 MMBtu/year
  Electricity needed: 28.6 MMBtu ÷ 3,412 Btu/kWh = 8,381 kWh

Solar PV to generate 8,381 kWh:
  System size: 8,381 ÷ 1,348 kWh/kW = 6.2 kW
  Cost: 6.2 kW × $2,500/kW = $15,500
  Federal ITC (30%): -$4,650
  Net cost: $10,850

Annual savings: 8,381 kWh × $0.14 = $1,173
Payback: $10,850 ÷ $1,173 = 9.2 years

Conclusion: Solar PV is 5-6× more cost-effective than solar thermal!

WHEN SOLAR THERMAL MAKES SENSE
───────────────────────────────────────────────────────────────────

Favorable Conditions:
  ✓ No electric service available (off-grid)
  ✓ Very high natural gas prices (>$2.50/therm)
  ✓ DIY installation (labor = 50% of cost)
  ✓ Existing storage tanks available
  ✓ Integrated with pool/spa heating
  ✓ Year-round hot water demand
  ✓ Incentives available (25%+ of cost)

Example: DIY solar pool heating
  Cost: $5,000 (vs. $60,000 professional)
  Savings: $800/year (pool heating season)
  Payback: 6.3 years (acceptable)
```

---

## 8.6 Simplified Systems

### Thermosiphon Solar Air Heaters

```
PASSIVE SOLAR AIR HEATING
═══════════════════════════════════════════════════════════════════

Concept: Simple, low-cost solar air collectors
  No pumps, controls, or storage needed

Design:
  ┌─────────────────────────────────────────────┐
  │  Glazing (polycarbonate or glass)           │ ← Sun
  ├─────────────────────────────────────────────┤
  │  Air space (2-4 inches)                     │
  ├─────────────────────────────────────────────┤
  │  Absorber (black painted metal)             │
  ├─────────────────────────────────────────────┤
  │  Insulation (R-10)                          │
  └─────────────────────────────────────────────┘
        │                           │
     Cold air in              Hot air out
     (bottom)                 (top)

Performance:
  Size: 4 ft × 8 ft = 32 sq ft
  Output (sunny day): 500-1,000 Btu/hr per unit
  Daily contribution: 4,000-8,000 Btu/day (winter)

Construction Cost (DIY):
  Glazing: $60
  Framing: $40
  Absorber: $30
  Insulation: $25
  Vents/hardware: $20
  ─────────────
  Total: $175 per 32 sq ft unit

10 units installed on south wall:
  Total area: 320 sq ft
  Cost: $1,750 (DIY)
  Daily output (winter): 40,000-80,000 Btu/day
  Annual contribution: ~10 MMBtu
  Natural gas offset: 118 therms
  Savings: $142/year

  Payback: 12 years (still marginal, but acceptable for DIY)

Benefits Beyond Heating:
  ✓ Ventilation (summer mode: bypass to exhaust)
  ✓ Humidity control (air circulation)
  ✓ Simple, reliable (no moving parts)
  ✓ Educational/demonstration value
```

---

## 8.7 Hybrid Solar Strategies

### Combined PV + Thermal

```
PVT (PHOTOVOLTAIC-THERMAL) SYSTEMS
═══════════════════════════════════════════════════════════════════

Concept: Capture both electricity AND heat from same panel

Standard PV: 18% → electricity, 82% → waste heat
PVT: 18% → electricity, 50% → useful heat

Benefits:
  1. Better PV efficiency (cooler panels = +5-10% electric output)
  2. Bonus heat recovery (50% of solar energy)
  3. Space-efficient (one system, dual output)

Challenges:
  ✗ More expensive than separate systems
  ✗ Limited commercial availability
  ✗ Complexity
  ✗ Maintenance

Economics (emerging technology):
  Cost premium: +$1.50/W over standard PV
  50 kW PVT system: $200,000 (vs. $125,000 PV only)
  Additional heat: ~150 MMBtu/year
  Value: $1,765/year (at $1.18/therm)

  Incremental payback: $75,000 ÷ $1,765 = 42 years

  Conclusion: Not yet economically competitive
  Watch for: Technology improvements, cost reductions
```

---

## 8.8 Case Study: Solar Thermal Pool Heating

### Application Profile

**Aquaponics Facility**
- Fish tanks: 10,000 gallons total
- Target temperature: 75°F year-round
- Location: Southern climate (mild winters)
- Current: Propane water heater

### Current System

```
EXISTING PROPANE HEATING
═══════════════════════════════════════════════════════════════════

Daily heat loss:
  10,000 gal × 8.34 lb/gal × 1 Btu/lb-°F × 15°F avg ΔT
  = 1,251,000 Btu/day

Annual heating load:
  1,251,000 × 365 = 456.6 MMBtu/year

Propane consumption:
  456.6 MMBtu ÷ 0.80 efficiency ÷ 0.0913 MMBtu/gal
  = 6,250 gallons/year

Cost: 6,250 gal × $2.80/gal = $17,500/year
```

### Solar Thermal Solution

```
SOLAR POOL HEATING SYSTEM
═══════════════════════════════════════════════════════════════════

Unglazed Collector System (optimal for mild climate):
  Target: 60% solar fraction
  Required output: 274 MMBtu/year

Collector Performance (Southern climate):
  Annual average: 25,000 Btu/sq ft/year (unglazed, low temp)

Collector area: 274,000,000 ÷ 25,000 = 10,960 sq ft

Uh oh - that's huge! Rethink...

REVISED: 40% Solar Fraction (more practical)
───────────────────────────────────────────────────────────────────

Target: 183 MMBtu/year
Collector area: 7,320 sq ft

But: Can mount directly on greenhouse roof (dual use)
  Available south-facing roof: 8,000 sq ft
  Use: 7,300 sq ft for solar pool heating

System Cost:
  Collectors (unglazed): $18/sq ft × 7,300 = $131,400
  Plumbing: $25,000
  Pumps & controls: $8,000
  Installation: $22,000
  ────────────────────────────
  Total: $186,400

Annual Savings:
  Propane offset: 183 MMBtu ÷ 0.80 ÷ 0.0913 = 2,506 gallons
  Savings: 2,506 × $2.80 = $7,017/year

Payback: $186,400 ÷ $7,017 = 26.6 years (not attractive)

ALTERNATIVE: DIY Installation
───────────────────────────────────────────────────────────────────

Material cost only: $131,400 + $8,000 = $139,400
Owner installs with staff labor

Payback: $139,400 ÷ $7,017 = 19.9 years (marginal)

BETTER ALTERNATIVE: Solar PV + Heat Pump
───────────────────────────────────────────────────────────────────

Heat pump water heater:
  COP = 3.5 (delivers 3.5 units heat per 1 unit electricity)
  Electricity for 183 MMBtu: 183,000 ÷ 3,412 ÷ 3.5 = 15,317 kWh

Solar PV to offset:
  15,317 kWh/yr ÷ 1,600 kWh/kW = 9.6 kW system
  Cost: $24,000 - $7,200 ITC = $16,800

Annual savings: 15,317 × $0.14 = $2,144 (electricity)
                + $7,017 (propane offset)
                = $9,161/year

Payback: ($16,800 + $8,000 heat pump) ÷ $9,161 = 2.7 years

WINNER: Solar PV + heat pump is 10× better payback!
```

---

## Key Takeaways

1. **Solar thermal efficiency is high** - But doesn't translate to economic advantage
2. **Solar PV is usually better** - Lower cost, more versatile, incentives
3. **Storage is expensive** - Adds significantly to system cost
4. **Best for specific applications** - Pool heating, domestic hot water, off-grid
5. **DIY can improve economics** - Labor is 40-50% of cost
6. **Consider heat pumps** - Often better than solar thermal
7. **Emerging PVT technology** - Watch for future improvements

---

## Practice Exercise

Compare solar thermal vs. solar PV for a heating application:
1. Calculate annual heating load
2. Size solar thermal system
3. Size equivalent solar PV + heat pump
4. Compare costs and paybacks
5. Make recommendation

---

**Next Module**: Module 9 - Combined Heat & Power

---

*Course 305: Energy Systems for CEA | Module 8 | EcoFusion Academy*
