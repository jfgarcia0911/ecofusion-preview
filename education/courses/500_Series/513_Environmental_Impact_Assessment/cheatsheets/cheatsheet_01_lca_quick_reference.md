# LCA Quick Reference Guide

**Course:** 513 - Environmental Impact Assessment
**Topic:** Life Cycle Assessment Fundamentals & LCIA

---

## LCA Four Phases

```
┌─────────────────────────────────────┐
│ 1. GOAL & SCOPE DEFINITION          │
│    - Purpose and audience            │
│    - Functional unit                 │
│    - System boundaries               │
│    - Assumptions and limitations     │
└─────────────────────────────────────┘
             ↓
┌─────────────────────────────────────┐
│ 2. LIFE CYCLE INVENTORY (LCI)       │
│    - Data collection                 │
│    - Flow diagrams                   │
│    - Calculations to functional unit │
└─────────────────────────────────────┘
             ↓
┌─────────────────────────────────────┐
│ 3. LIFE CYCLE IMPACT ASSESSMENT      │
│    - Classification                  │
│    - Characterization                │
│    - (Optional: Normalization)       │
└─────────────────────────────────────┘
             ↓
┌─────────────────────────────────────┐
│ 4. INTERPRETATION                    │
│    - Identify significant issues     │
│    - Evaluate completeness           │
│    - Conclusions and recommendations │
└─────────────────────────────────────┘
```

---

## Functional Unit Examples for CEA

| Product Type | Functional Unit Options |
|--------------|------------------------|
| Leafy greens | 1 kg fresh weight |
| Tomatoes | 1 kg harvest weight |
| Herbs | 100 g fresh weight |
| Microgreens | 1 tray (30×60 cm) |
| Nutritional basis | 1000 kcal or 100 g protein |
| Area-based | 1 m² growing area per year |

**Selection criteria:** Relevant, measurable, consistent, appropriate for goal

---

## System Boundaries

**Cradle-to-Gate:** Raw materials → Production → Facility gate
**Cradle-to-Grave:** Full life cycle including use and disposal
**Gate-to-Gate:** Only processes within facility
**Cradle-to-Cradle:** Including recycling loops

**CEA Life Cycle Stages:**
1. Raw materials & manufacturing (infrastructure)
2. Construction
3. Operations (largest impact typically)
4. Distribution
5. Use
6. End-of-life

---

## Allocation Hierarchy (ISO 14044)

```
1st Priority: AVOID allocation
   - Subdivide processes
   - System expansion

2nd Priority: PHYSICAL relationship
   - Mass, energy content, volume

3rd Priority: OTHER relationship
   - Economic value
   - Use when physical not applicable
```

**Example:** Aquaponics fish + vegetables
- Avoid: Model separately vs. combined
- Physical: Allocate by mass (fish kg vs. veg kg)
- Economic: Allocate by revenue ($fish vs. $veg)

---

## Impact Categories Cheat Sheet

| Category | Indicator | Unit | Main Causes in CEA |
|----------|-----------|------|-------------------|
| **Climate Change** | GWP | kg CO₂ eq | Electricity, natural gas, refrigerants |
| **Acidification** | AP | kg SO₂ eq | Electricity generation, nutrient production |
| **Eutrophication (FW)** | EP | kg P eq | Nutrient discharge |
| **Eutrophication (Marine)** | EP | kg N eq | Nutrient discharge |
| **Ecotoxicity** | CTUe | PAF·m³·day/kg | Chemicals, pesticides (if used) |
| **Human Toxicity** | CTUh | cases/kg | Chemicals, electricity generation |
| **Water Consumption** | WF | m³ water eq | Irrigation, cooling, electricity |
| **Land Use** | LU | m²·year | Site occupation |
| **Fossil Depletion** | FD | kg oil eq | Electricity, heating fuel, materials |

---

## LCIA Methods Comparison

| Method | Geographic Scope | Midpoint Categories | Endpoint | Best For |
|--------|-----------------|---------------------|----------|----------|
| **ReCiPe 2016** | Europe/Global | 18 | 3 (Human Health, Ecosystems, Resources) | Comprehensive analysis |
| **TRACI 2.1** | North America | 10 | No | U.S. facilities |
| **CML-IA** | Global | 11 | No | Conservative, established method |
| **ILCD/EF** | Europe | 16 | No | EU Product Environmental Footprint |

---

## Characterization Example: Climate Change

```
Impact = Σ(Substance mass × GWP)

GWP₁₀₀ values (IPCC AR6):
CO₂:  1
CH₄:  29.8 (fossil)
N₂O:  273
SF₆:  25,200
R-404A: 3,922

Example Calculation:
Emissions:
- 5,000 kg CO₂
- 20 kg CH₄
- 1 kg N₂O

Climate Change Impact = (5,000 × 1) + (20 × 29.8) + (1 × 273)
                      = 5,000 + 596 + 273
                      = 5,869 kg CO₂ eq
```

---

## Data Quality Pedigree Matrix

| Score | Reliability | Completeness | Temporal | Geographical | Technological |
|-------|------------|--------------|----------|--------------|---------------|
| **1** | Verified | Representative | <3 yrs | Site-specific | Identical |
| **2** | Verified incomplete | <80% | <6 yrs | Same country | Similar |
| **3** | Qualified estimate | <60% | <10 yrs | Same continent | Similar sector |
| **4** | Non-verified | <40% | <15 yrs | Different continent | Different sector |
| **5** | Non-qualified | Unknown | >15 yrs/unknown | Unknown | Unknown |

**Data Quality Score = Average of 5 criteria**
- Target: ≤2.0 for foreground, ≤3.0 for background

---

## Uncertainty Analysis

**Monte Carlo Simulation Steps:**
1. Define probability distributions for uncertain parameters
2. Sample randomly (1,000-10,000 iterations)
3. Calculate result for each iteration
4. Analyze distribution of results

**Common Distributions:**
- **Normal:** Symmetric (use for errors)
- **Lognormal:** Right-skewed (use for emissions, resource use)
- **Triangular:** Min-Most likely-Max (use for estimates)

**Reporting:**
"Result: 25 ± 4 kWh/kg (95% CI based on Monte Carlo, 5,000 iterations)"

---

## Software Quick Start

**openLCA (Free, Open Source):**
1. Import database (ecoinvent, USDA LCI)
2. Create process with inputs/outputs
3. Build product system (auto-link background data)
4. Select LCIA method (ReCiPe, TRACI)
5. Calculate and analyze results

**SimaPro (Commercial):**
1. Create project
2. Define assemblies and processes
3. Link to database processes
4. Analyze with methods library
5. Export results and graphs

---

## Key Formulas

**Energy per Functional Unit:**
```
Energy intensity = Total annual energy (kWh) / Total annual production (kg)
```

**Allocation by Mass:**
```
Product A allocation = Mass of A / Total mass of all products
```

**Allocation by Economic Value:**
```
Product A allocation = Value of A ($) / Total value of all products ($)
```

**Normalized Impact:**
```
Normalized Impact = Impact score / Reference value (e.g., per capita/year)
```

---

## Common Pitfalls to Avoid

❌ **DON'T:**
- Mix functional units when comparing alternatives
- Exclude significant life cycle stages arbitrarily
- Use outdated databases (>5 years old)
- Ignore uncertainty
- Apply weighting for public comparative claims

✓ **DO:**
- Clearly document all assumptions
- Use consistent system boundaries
- Perform sensitivity analysis on key parameters
- Report both midpoint and endpoint (if using ReCiPe)
- Seek third-party review for comparative claims

---

## CEA-Specific LCA Tips

**Typical Hotspots:**
1. **Electricity consumption** (60-80% of total impact)
   - Focus on LED efficiency
   - Consider renewable energy
   - Include upstream electricity impacts

2. **Infrastructure** (10-20% amortized)
   - Document lifespan assumptions
   - Include all major equipment

3. **Nutrients** (5-10%)
   - Use activity-based factors (kg fertilizer), not spend-based

4. **Water** (indirect impact from electricity)
   - Don't forget water footprint of energy generation

**Comparison Benchmark:**
- Field agriculture: Lower energy, higher water/land
- Greenhouse: Moderate energy, moderate water
- Vertical farm: High energy, low water/land

**Quick Check:**
If vertical farm energy > 25 kWh/kg lettuce → investigate inefficiency
If <15 kWh/kg → excellent performance

---

## Standards Reference

- **ISO 14040:2006** - LCA Principles and Framework
- **ISO 14044:2006** - LCA Requirements and Guidelines
- **ISO 14067:2018** - Carbon Footprint of Products
- **ISO 14046:2014** - Water Footprint

---

## Online Resources

- **ecoinvent:** www.ecoinvent.org (LCA database)
- **openLCA:** www.openlca.org (free software)
- **USDA LCI:** lcacommons.gov (free U.S. agriculture data)
- **IPCC AR6 GWPs:** www.ipcc.ch
- **GHG Protocol:** www.ghgprotocol.org

---

**Quick Decision Tree: Is LCA Right for My Question?**

```
Need to compare environmental performance of products/systems?
   ↓ YES
Full life cycle matters (not just operations)?
   ↓ YES
Multiple environmental impacts (not just carbon)?
   ↓ YES
   → LCA is appropriate

If NO to any:
- Operations only → Energy audit
- Carbon only → Carbon footprint (GHG Protocol)
- Single site → Environmental audit
```

---

**Print this 2-page cheatsheet for quick reference during LCA projects!**

