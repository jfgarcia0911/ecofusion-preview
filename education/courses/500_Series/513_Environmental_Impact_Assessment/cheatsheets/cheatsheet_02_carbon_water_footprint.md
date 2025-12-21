# Carbon & Water Footprint Quick Reference

**Course:** 513 - Environmental Impact Assessment

---

## GHG Protocol Scopes

```
┌──────────────────────────────────────────┐
│ SCOPE 1: DIRECT EMISSIONS               │
│ • Natural gas combustion                 │
│ • Backup generators (diesel/propane)     │
│ • Company vehicles                       │
│ • Refrigerant leaks                      │
│ • CO₂ supplementation venting           │
└──────────────────────────────────────────┘

┌──────────────────────────────────────────┐
│ SCOPE 2: PURCHASED ENERGY                │
│ • Grid electricity                       │
│ • Purchased steam/heat                   │
│ • District cooling                       │
│   Two methods:                           │
│   - Location-based (grid average)        │
│   - Market-based (supplier-specific)     │
└──────────────────────────────────────────┘

┌──────────────────────────────────────────┐
│ SCOPE 3: VALUE CHAIN (15 categories)     │
│ Upstream:                                │
│ 1. Purchased goods (nutrients, media)    │
│ 2. Capital goods (equipment, building)   │
│ 3. Energy-related (T&D losses)           │
│ 4. Upstream transport                    │
│ 5. Waste from operations                 │
│ 6. Business travel                       │
│ 7. Employee commuting                    │
│ 8. Upstream leased assets                │
│ Downstream:                              │
│ 9. Downstream transport                  │
│ 10-15. Processing, use, end-of-life, etc.│
└──────────────────────────────────────────┘
```

---

## Key GWP Values (IPCC AR6, 100-year)

| Gas | Chemical Formula | GWP₁₀₀ | Common CEA Source |
|-----|------------------|---------|-------------------|
| Carbon dioxide | CO₂ | 1 | Combustion, electricity |
| Methane (fossil) | CH₄ | 29.8 | Natural gas leaks |
| Methane (biogenic) | CH₄ | 27.2 | Organic waste decomp. |
| Nitrous oxide | N₂O | 273 | Combustion, fertilizer |
| R-410A | — | 2,256 | HVAC refrigerant |
| R-404A | — | 3,922 | Refrigeration |
| R-134a | — | 1,530 | Chiller refrigerant |
| SF₆ | — | 25,200 | Electrical equipment |

---

## Emission Factor Quick Reference

### Combustion
| Fuel | CO₂ Factor | Unit |
|------|------------|------|
| Natural gas | 53.1 | kg CO₂/mmBtu |
| Natural gas | 1.91 | kg CO₂/m³ |
| Diesel | 2.68 | kg CO₂/L |
| Propane | 1.51 | kg CO₂/L |
| Gasoline | 2.32 | kg CO₂/L |

### Electricity (examples - use regional factors)
| Region | kg CO₂/kWh |
|--------|------------|
| U.S. Average | 0.40 |
| California | 0.20 |
| West Virginia | 0.73 |
| New York | 0.15 |
| Texas | 0.45 |
| Wind/Solar | ~0.01 |
| Hydro | 0.02-0.05 |

### Materials
| Material | kg CO₂eq/kg |
|----------|-------------|
| Nitrogen fertilizer (urea) | 1.9 |
| Phosphate fertilizer | 0.7 |
| Potassium fertilizer | 0.5 |
| Rockwool | 1.8 |
| PET plastic | 3.5 |
| Cardboard | 0.9 |
| Steel | 1.8 |
| Aluminum | 8.5 |

---

## Carbon Footprint Calculations

### Scope 1: Direct Combustion
```
CO₂ = Fuel consumed × Emission factor

Example:
Natural gas: 500,000 m³/year × 1.91 kg CO₂/m³ = 955,000 kg CO₂
```

### Scope 1: Refrigerant Leaks
```
CO₂eq = Mass leaked (kg) × GWP

Example:
R-410A leak: 15 kg × 2,256 = 33,840 kg CO₂eq
```

### Scope 2: Electricity
```
CO₂ = Electricity (kWh) × Grid EF (kg CO₂/kWh)

Example:
10,000,000 kWh × 0.40 kg CO₂/kWh = 4,000,000 kg CO₂ = 4,000 tonnes
```

### Scope 3: Purchased Goods
```
CO₂ = Quantity × Material EF

Example:
Nutrients: 5,000 kg N fertilizer × 1.9 kg CO₂/kg = 9,500 kg CO₂eq
```

### Scope 3: Transportation
```
CO₂ = Mass × Distance × Transport EF

Example:
100 tonnes × 500 km × 0.062 kg CO₂/tonne·km = 3,100 kg CO₂
```

### Capital Goods (Amortized)
```
Annual CO₂ = Total embodied carbon / Asset life (years)

Example:
Building: 500,000 kg CO₂ embodied / 30 yr = 16,667 kg CO₂/year
```

---

## Water Footprint Components

```
┌────────────────────────────────────┐
│ BLUE WATER                         │
│ Surface & groundwater consumed     │
│ • Irrigation (evapotranspiration)  │
│ • Cooling towers (evaporation)     │
│ • Incorporated in product          │
│ • System losses                    │
│ Formula: Supply - Returned         │
└────────────────────────────────────┘

┌────────────────────────────────────┐
│ GREEN WATER                        │
│ Rainwater consumed                 │
│ • Typically ZERO for CEA           │
│ • May apply to rainwater           │
│   harvesting systems               │
└────────────────────────────────────┘

┌────────────────────────────────────┐
│ GREY WATER                         │
│ Dilution volume for pollutants     │
│ Formula:                           │
│ L / (Cmax - Cnatural)              │
│ Where:                             │
│ L = pollutant load (kg)            │
│ Cmax = max acceptable conc. (kg/L) │
│ Cnatural = natural background      │
└────────────────────────────────────┘
```

---

## Water Footprint Calculations

### Direct Blue WF
```
Blue WF = Water supplied - Water returned

Example CEA:
Supplied: 10,000,000 L/year
Recirculated: 9,500,000 L/year
Consumed: 500,000 L/year

Production: 500,000 kg lettuce
Blue WF = 500,000 L / 500,000 kg = 1.0 L/kg
```

### Indirect WF (Electricity)
```
Indirect WF = Electricity (kWh) × Water intensity (L/kWh)

Example:
Electricity: 20 kWh/kg lettuce
Grid water intensity: 1.5 L/kWh
Indirect WF = 20 × 1.5 = 30 L/kg
```

### Grey WF (Nutrients)
```
Grey WF = Load / (Cmax - Cnatural)

Example - Nitrogen discharge:
Load: 50 kg N/year
Cmax: 0.00001 kg/L (10 mg/L drinking water std)
Cnatural: 0.000001 kg/L (1 mg/L)

Grey WF = 50 / (0.00001 - 0.000001)
        = 50 / 0.000009
        = 5,555,556 L

Per kg product (500,000 kg): 11.1 L/kg
```

---

## Water Scarcity Indicators

| Indicator | Threshold | Interpretation |
|-----------|-----------|----------------|
| **Falkenmark** | | |
| | <1,700 m³/cap/yr | Water stress |
| | <1,000 m³/cap/yr | Water scarcity |
| | <500 m³/cap/yr | Absolute scarcity |
| **Water Stress Index (WSI)** | | |
| | <0.2 | Low stress |
| | 0.2-0.4 | Medium stress |
| | >0.4 | High stress |

### Scarcity-Weighted Water Footprint
```
Scarcity WF = Blue WF × WSI

Example:
Blue WF: 5 L/kg
Location WSI: 0.75 (high stress)
Scarcity WF = 5 × 0.75 = 3.75 L_eq/kg

Compare to low stress location (WSI 0.05):
Scarcity WF = 5 × 0.05 = 0.25 L_eq/kg

15× difference in scarcity impact!
```

---

## Mitigation Hierarchy

```
1. AVOID
   └→ Don't create emissions/use water
      Example: Passive cooling vs. AC

2. REDUCE
   └→ Minimize per unit
      Example: High-efficiency LEDs

3. SUBSTITUTE
   └→ Lower-impact alternative
      Example: Renewable energy for grid

4. OFFSET
   └→ Compensate residual impacts
      Example: Carbon credits
      (Last resort, after 1-3)
```

---

## Carbon Reduction Strategies for CEA

| Strategy | Impact | Payback | Scope |
|----------|--------|---------|-------|
| LED upgrade (2.5→3.5 μmol/J) | 20-30% | 2-4 yr | 2 |
| HVAC optimization + VFD | 10-20% | 2-3 yr | 2 |
| Heat recovery | 15-25%* | 4-6 yr | 1 |
| On-site solar PV | 30-60% | 7-12 yr | 2 |
| Renewable PPA/RECs | 50-100% | Variable | 2 |
| Building insulation | 5-15% | 3-7 yr | 2 |

*Reduces natural gas, not electricity

---

## Water Efficiency Strategies for CEA

| Strategy | Water Savings | Implementation |
|----------|---------------|----------------|
| Closed-loop recirculation | 90-95% | Standard CEA design |
| Condensate capture | 10-30% | Dehumidifier integration |
| Rainwater harvesting | 20-100%** | Roof + storage system |
| Precision irrigation | 10-20% | Sensors + control |
| Air-cooled HVAC | 100%*** | vs. evaporative cooling |
| Greywater reuse | 30-50% | Treatment system |

**Non-irrigation needs
***Cooling water only

---

## Benchmarks

### Carbon Intensity (kg CO₂eq/kg product)
| System | Lettuce | Tomato |
|--------|---------|--------|
| Field (CA, to NY) | 0.8 | 1.5 |
| Greenhouse (local) | 2.5 | 3.5 |
| Vertical farm (grid) | 5.5 | — |
| Vertical farm (renewable) | 0.4 | — |

### Water Consumption (L/kg product)
| System | Lettuce | Tomato |
|--------|---------|--------|
| Field irrigation | 125 | 50 |
| Greenhouse | 15 | 25 |
| CEA (direct only) | 1-5 | 2-8 |
| CEA (total w/ electricity) | 30-40 | 20-30 |

---

## Reporting Templates

### Carbon Footprint Statement
```
"Our [product] carbon footprint is [X] kg CO₂eq per [unit], including Scope 1, 2, and material Scope 3 emissions per GHG Protocol standards. This represents a [Y]% reduction compared to [baseline]. Calculated using [emission factors source] and verified by [third party if applicable]."
```

### Water Footprint Statement
```
"The water footprint of our [product] is [X] L per [unit], including [Y] L blue water (direct consumption) and [Z] L indirect water (embedded in energy and materials) per ISO 14046. Grey water footprint is [value or zero with zero-discharge]. Our facility achieves [%] water recirculation."
```

---

## Key Standards

- **GHG Protocol** - Corporate & Product Standards
- **ISO 14064** - GHG accounting and verification
- **ISO 14067** - Carbon footprint of products
- **ISO 14046** - Water footprint
- **PAS 2050** - Product carbon footprinting
- **Water Footprint Network** - Water accounting methodology

---

## Online Calculators & Tools

**Carbon:**
- GHG Protocol Calculation Tools (Excel)
- EPA Climate Leadership Tools
- Carbon Trust Footprinting Tool

**Water:**
- Water Footprint Network Assessment Tool
- WRI Aqueduct (water risk mapping)
- WBCSD Global Water Tool

**Databases:**
- EPA eGRID (electricity emission factors)
- DEFRA conversion factors (UK, comprehensive)
- ecoinvent (LCA database with CF/WF)

---

## Quick Checks

**Is my carbon footprint reasonable?**
```
CEA electricity: 15-30 kWh/kg typical
× grid factor 0.4 kg CO₂/kWh
= 6-12 kg CO₂eq/kg (operations)

If total >15 kg CO₂eq/kg → investigate
If <3 kg CO₂eq/kg → excellent (likely renewable energy)
```

**Is my water use efficient?**
```
Target recirculation: >95%
Blue WF: <5 L/kg (direct)
Total WF: <40 L/kg (including indirect)

If direct >10 L/kg → leaks or inefficiency
If indirect >50 L/kg → energy-intensive or water-intensive grid
```

---

**Print double-sided for pocket reference!**

