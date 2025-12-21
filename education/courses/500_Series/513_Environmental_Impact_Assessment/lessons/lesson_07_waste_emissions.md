# Lesson 7: Waste and Emissions Assessment

**Course:** 513 - Environmental Impact Assessment
**Module:** 7 of 14
**Duration:** Week 7
**Learning Time:** 8-10 hours

## Learning Objectives

1. Characterize and quantify waste streams from CEA facilities
2. Assess air emissions using modeling and measurement
3. Evaluate soil and water contamination risks
4. Apply chemical fate and transport modeling
5. Design pollution prevention strategies using source reduction
6. Implement waste valorization and circular economy approaches
7. Ensure regulatory compliance for waste and emissions

## 1. Waste Stream Characterization

### 1.1 Waste Categories for CEA

**Organic Waste (60-80% by mass):**
- Plant waste (trim, cull, end-of-crop)
- Growing media (rockwool, coco coir, peat)
- Root mat material
- Expired seeds

**Packaging Waste (10-20%):**
- Plastic clamshells and containers
- Cardboard boxes
- Stretch film and pallets
- Label materials

**Chemical Waste (1-5%):**
- Expired nutrients and pesticides
- Cleaning agents
- pH adjustment chemicals
- Laboratory chemicals

**Equipment/Infrastructure Waste (<5%):**
- LED fixtures at end-of-life
- HVAC filters
- Pump and valve components
- Electronic waste

### 1.2 Waste Quantification

```
Waste Generation Rate = Total waste (kg) / Production (kg)

Example vertical farm:
Annual production: 500,000 kg lettuce
Plant trim waste: 50,000 kg
Growing media: 10,000 kg
Packaging waste: 15,000 kg
Other: 5,000 kg
Total waste: 80,000 kg

Waste ratio = 80,000 / 500,000 = 0.16 kg waste/kg product

Benchmark: <0.20 kg/kg for efficient operations
```

### 1.3 Waste Composition Analysis

**Method: Manual sorting and weighing**

| Category | Mass (kg/yr) | % | Recyclable % | Compostable % | Landfill % |
|----------|--------------|---|--------------|---------------|------------|
| Plant waste | 50,000 | 62.5% | 0% | 100% | 0% |
| Rockwool | 10,000 | 12.5% | 5% | 0% | 95% |
| Plastic packaging | 12,000 | 15.0% | 80% | 0% | 20% |
| Cardboard | 3,000 | 3.8% | 95% | 0% | 5% |
| Chemicals | 2,000 | 2.5% | 0% | 0% | 100%* |
| Other | 3,000 | 3.8% | 30% | 20% | 50% |

*Hazardous waste requiring special disposal

**Diversion Rate Calculation:**
```
Diversion = (Recycled + Composted) / Total waste × 100%

Current: (11,000 + 50,000) / 80,000 = 76.3%
Target: >85%
```

## 2. Air Emissions Assessment

### 2.1 Emission Sources

**Direct Emissions:**
- Combustion (natural gas heating, backup generators)
- Refrigerant leaks (HVAC systems)
- VOCs from materials and cleaning agents
- CO₂ supplementation venting (if used)
- Odors from composting/waste storage

**Indirect Emissions:**
- Electricity generation (Scope 2, assessed in carbon footprint)
- Transportation (Scope 3)

### 2.2 Combustion Emissions Calculation

```
Natural gas boiler example:
Fuel consumption: 500,000 m³/yr
Emission factors (EPA AP-42):

NOx: 41 kg/million m³ = 20.5 kg/yr
CO: 28 kg/million m³ = 14.0 kg/yr
PM10: 7 kg/million m³ = 3.5 kg/yr
SO₂: 0.6 kg/million m³ = 0.3 kg/yr
VOC: 5 kg/million m³ = 2.5 kg/yr
```

### 2.3 Air Dispersion Modeling

**AERMOD (EPA regulatory model):**

Inputs:
- Emission rate (g/s)
- Stack height and diameter
- Exit velocity and temperature
- Meteorological data (5 years typical)
- Receptor locations

Outputs:
- Ground-level concentrations
- Comparison to ambient air quality standards
- Identification of maximum impact locations

**Example Output:**
```
Maximum 1-hour NOx concentration: 15 μg/m³ at 150m downwind
Ambient standard: 100 μg/m³ (1-hour)
Compliance: Yes (15 < 100)
```

### 2.4 Fugitive Emissions

**VOCs from Materials:**
```
Emission rate = Surface area × Emission factor

Example: Plastic growing trays
Surface area: 10,000 m²
Emission factor: 0.5 μg/m²/hr (low-emitting plastic)
Hours: 8,760/yr

Annual VOC = 10,000 × 0.5 × 8,760 / 1,000,000 = 43.8 kg/yr
```

**Ammonia from Nutrient Solutions:**
```
NH₃ volatilization ∝ pH, temperature, ventilation

With pH control (5.5-6.5) and covered reservoirs:
NH₃ emissions typically <1% of N applied
```

## 3. Water Emissions

### 3.1 Wastewater Characterization

**Parameters to Monitor:**
- Nutrients: N, P, K
- pH and electrical conductivity
- Total dissolved solids (TDS)
- Biological oxygen demand (BOD)
- Chemical oxygen demand (COD)
- Heavy metals (if applicable)
- Pesticide residues (if used)

**Example Analysis:**
```
Vertical farm nutrient discharge (if not 100% recirculated):

Parameter          Concentration    Discharge Limit    Compliance
─────────────────────────────────────────────────────────────────
Total N            45 mg/L          10 mg/L            Non-compliant
Total P            12 mg/L          1 mg/L             Non-compliant
pH                 6.2              6-9                Compliant
TDS                1,200 mg/L       2,000 mg/L         Compliant
BOD                25 mg/L          30 mg/L            Compliant

Conclusion: Treatment required before discharge or zero-discharge design
```

### 3.2 Nutrient Mass Balance

```
N inputs = Fertilizer N + Seed N + Water N
N outputs = Product N + Waste N + Discharge N + Losses (NH₃, N₂O)

Example (kg N/year):
Inputs:
- Fertilizer: 1,600
- Other: 5
- Total: 1,605

Outputs:
- Product (lettuce): 1,500 (absorbed in crop)
- Waste plant material: 50
- Discharge/losses: 55
- Total: 1,605

Efficiency = 1,500 / 1,605 = 93.5% (good)
```

### 3.3 Zero-Discharge Systems

**Design Strategies:**
- Closed-loop recirculation (95-98% recycling)
- Evapotranspiration beds for residuals
- Reverse osmosis treatment and reuse
- Nutrient recovery (struvite precipitation)
- On-site treatment wetlands

**Benefits:**
- Eliminates discharge permits
- Reduces grey water footprint to zero
- Recovers valuable nutrients
- Demonstrates environmental leadership

## 4. Chemical Fate and Transport

### 4.1 Pesticide Fate (if used)

**Environmental Partitioning:**
```
Fugacity model:
Chemical distributes among phases (air, water, soil, biota) based on:
- Partition coefficients (Kow, Koc, Kaw)
- Half-life in each medium
- Transport processes (advection, diffusion)

For integrated pest management in CEA:
- Prioritize biocontrols (zero environmental release)
- If pesticides needed, select low-persistence, low-mobility options
- Monitor residues in discharge
```

### 4.2 Nutrient Fate

**Nitrogen transformations:**
```
Organic N → NH₄⁺ (ammonification)
NH₄⁺ → NO₂⁻ → NO₃⁻ (nitrification)
NO₃⁻ → N₂, N₂O (denitrification)
NH₃ volatilization (pH > 7)

Management:
- Maintain pH 5.5-6.5 to minimize NH₃ volatilization
- Aerobic conditions to prevent denitrification
- Rapid plant uptake (high N use efficiency)
```

**Phosphorus fate:**
```
Relatively immobile in most scenarios
Concerns:
- Discharge to surface water (eutrophication)
- Accumulation in growing media

Management:
- Precise fertigation (avoid over-application)
- Recirculation systems
- P recovery technologies
```

## 5. Soil and Groundwater Protection

### 5.1 Risk Assessment

For facilities with soil contact (greenhouses, outdoor components):

**Contaminant Pathways:**
```
Source → Soil → Groundwater → Receptor

Assessment steps:
1. Identify potential contaminants (nutrients, pesticides, heavy metals)
2. Characterize soil properties (permeability, organic matter)
3. Determine depth to groundwater
4. Assess receptor proximity (wells, surface water)
5. Model transport using analytical or numerical models
6. Compare to risk-based screening levels
```

**Example Screening:**
```
Scenario: Greenfield site, sandy soil, shallow groundwater (5m depth)

Risk Level Assessment:
- Nutrients from fertigation spills: Medium (mobile, high concentration)
- Fuel from equipment: Low (secondary containment)
- Pesticides: Low (minimal use, low persistence)
- Heavy metals: Very Low (not present)

Mitigation:
- Impermeable liner under growing areas
- Spill containment systems
- Monitoring wells (upgradient and downgradient)
- Quarterly groundwater sampling
```

### 5.2 Groundwater Monitoring

**Monitoring Well Network:**
- 1 upgradient well (background)
- 2-4 downgradient wells (compliance)
- Depth: Screen water table

**Sampling Frequency:**
- Quarterly first 2 years
- Semi-annual thereafter (if no exceedances)

**Parameters:**
- Nitrate-N
- Total phosphorus
- Electrical conductivity
- pH
- Pesticides (if used)

## 6. Pollution Prevention Strategies

### 6.1 Source Reduction Hierarchy

```
1. ELIMINATE: Remove hazardous materials
   Example: Biocontrols instead of chemical pesticides

2. REDUCE: Minimize quantities used
   Example: Precision fertigation reducing excess application

3. SUBSTITUTE: Replace with less hazardous alternatives
   Example: Green cleaning products vs. harsh chemicals

4. RECYCLE/REUSE: Close material loops
   Example: Growing media sterilization and reuse

5. TREAT: Reduce hazard before disposal
   Example: Nutrient recovery from waste streams

6. DISPOSE: Only remaining non-recoverable waste
   Example: Landfill for exhausted rockwool (after maximizing use)
```

### 6.2 CEA-Specific P2 Strategies

**Nutrient Management:**
- Real-time monitoring and adjustment
- Batch testing and calibration
- Closed-loop recirculation (target >95%)
- Nutrient film technique (NFT) or deep flow technique (DFT)

**Water Management:**
- Leakage detection and repair
- Condensate capture from dehumidification
- Rainwater harvesting
- Greywater treatment and reuse

**Energy Efficiency:**
- High-efficacy LEDs (3.0+ μmol/J)
- Natural ventilation (greenhouse)
- Heat recovery systems
- Renewable energy integration

**Waste Reduction:**
- Selective breeding for higher yield/lower trim waste
- Growing media reuse protocols
- Reusable packaging systems
- Take-back programs for containers

**Example Reduction Results:**
```
Facility implementing comprehensive P2:
Year 1 baseline:
- Waste: 0.20 kg/kg product
- Water discharge: 5% of supply
- Hazardous waste: 2,000 kg/yr

Year 3 post-P2:
- Waste: 0.12 kg/kg product (40% reduction)
- Water discharge: <1% of supply (80% reduction)
- Hazardous waste: 200 kg/yr (90% reduction)

Cost savings: $50,000/yr from reduced disposal and material costs
```

## 7. Waste Valorization

### 7.1 Organic Waste Composting

```
Feedstock: Plant trim and cull (50,000 kg/yr)
Process: Aerobic composting (60 days)
Yield: 15,000 kg finished compost (70% mass reduction)

Applications:
- Soil amendment for landscaping (sell or donate)
- Growing media component (partial replacement)
- Community garden programs

Value: $5-15/cubic yard
Revenue potential: 15,000 kg / 500 kg/m³ × $10/m³ = $300/yr
(Modest, but eliminates disposal cost of ~$5,000/yr)
```

### 7.2 Anaerobic Digestion

```
For facilities with high organic waste volume:

Feedstock: 100 tonnes/yr organic waste
Biogas yield: 100 m³ CH₄/tonne
Total biogas: 10,000 m³/yr
Energy content: 10,000 m³ × 10 kWh/m³ = 100,000 kWh
CHP conversion: 35% electric, 50% heat

Electricity: 35,000 kWh/yr
Heat: 50,000 kWh_thermal/yr
Digestate: 80 tonnes/yr (nutrient-rich fertilizer)

Economics:
- Capital: $250,000 (scaled system)
- Energy savings: $4,200/yr
- Fertilizer value: $2,000/yr
- Tipping fee avoided: $5,000/yr
- Simple payback: 22 years (marginal without economies of scale)

Best for: Large operations (>500 tonnes/yr waste) or co-digestion partnerships
```

### 7.3 Nutrient Recovery

**Struvite Precipitation:**
```
Mg²⁺ + NH₄⁺ + PO₄³⁻ → MgNH₄PO₄ (struvite)

Recovers N and P from wastewater in slow-release fertilizer form

Process:
1. Add MgO or MgCl₂ to wastewater
2. Adjust pH to 8.5-9.5
3. Precipitate forms and settles
4. Harvest struvite crystals
5. Dry and package

Recovery efficiency: 80-90% of P, 10-20% of N

For 100 kg P and 500 kg N in annual discharge:
Struvite recovered: ~800 kg
Fertilizer value: ~$1,000/yr
Treatment cost: ~$800/yr
Net benefit: Minimal economically, but eliminates discharge
```

### 7.4 Packaging Waste Reduction

**Reusable Clamshells:**
```
Scenario: Retail partnership for reusable packaging

Disposable clamshells:
- Cost: $0.25/unit
- Annual use: 500,000 units
- Waste: 12,000 kg/yr
- Annual cost: $125,000

Reusable system:
- Clamshell cost: $2.00/unit (10× single-use)
- Inventory needed: 50,000 units (10% of annual use)
- Capital: $100,000
- Washing cost: $0.05/unit
- Annual operating cost: $25,000
- Lifespan: 25 uses
- Replacement: 20,000 units/yr = $40,000/yr

Total annual cost: $25,000 + $40,000 = $65,000
Savings: $125,000 - $65,000 = $60,000/yr
Payback: $100,000 / $60,000 = 1.7 years

Waste reduction: 12,000 kg → 2,400 kg (80% reduction)
```

## 8. Regulatory Compliance

### 8.1 Key Regulations (U.S. Example)

**Clean Air Act:**
- Permits required if emissions exceed thresholds
- Title V: Major sources (>100 tonnes/yr criteria pollutants)
- Most CEA facilities exempt (minor sources)

**Clean Water Act:**
- NPDES permits for discharge to surface water
- Pretreatment standards for discharge to sewer
- Zero-discharge facilities exempt

**Resource Conservation and Recovery Act (RCRA):**
- Hazardous waste generator status (depends on quantity)
  - Very Small Quantity Generator: <100 kg/month
  - Small Quantity Generator: 100-1,000 kg/month
  - Large Quantity Generator: >1,000 kg/month
- Most CEA facilities qualify as VSQG or SQG

**State/Local Regulations:**
- May be more stringent than federal
- Odor ordinances
- Noise limits
- Solid waste permits

### 8.2 Compliance Strategy

```
1. Identify applicable regulations
   ↓
2. Determine permit requirements
   ↓
3. Design systems for compliance
   ↓
4. Implement monitoring and recordkeeping
   ↓
5. Train personnel
   ↓
6. Conduct periodic audits
   ↓
7. Report to agencies as required
   ↓
8. Maintain continuous compliance
```

**Typical Permits for CEA:**
- Air permit (if combustion sources)
- Water discharge permit (if not zero-discharge)
- Hazardous waste generator ID
- Stormwater permit (construction and industrial)
- Business license and zoning approval

## 9. Case Study: Waste Minimization Program

**Baseline (Year 1):**
- Production: 500,000 kg lettuce
- Total waste: 100,000 kg (0.20 kg/kg)
- Landfill: 55,000 kg
- Compost: 40,000 kg
- Recycle: 5,000 kg
- Diversion rate: 45%
- Disposal cost: $8,800/yr

**Waste Reduction Initiatives:**

1. **Growing media reuse program:**
   - Sterilize and reuse rockwool 2× before disposal
   - Reduction: 5,000 kg/yr

2. **Trim waste reduction:**
   - Optimize harvesting to reduce cull rate from 12% to 8%
   - Reduction: 20,000 kg/yr organic waste

3. **Packaging optimization:**
   - Switch to lighter-weight clamshells
   - Reduction: 3,000 kg/yr plastic

4. **Cardboard baling and sale:**
   - Previously landfilled, now recycled
   - Diversion: 2,500 kg/yr
   - Revenue: $125/yr

5. **Food donation program:**
   - Edible cull produce donated to food bank
   - Diversion: 10,000 kg/yr

**Results (Year 3):**
- Total waste: 60,000 kg (0.12 kg/kg, 40% reduction)
- Landfill: 22,500 kg (59% reduction)
- Compost: 30,000 kg
- Recycle: 7,500 kg
- Diversion rate: 62.5% (up from 45%)
- Disposal cost: $3,600/yr (59% reduction)

**Economic Summary:**
- Disposal savings: $5,200/yr
- Recycling revenue: $125/yr
- Material savings: $8,000/yr (less growing media, lighter packaging)
- Investment: $15,000 (sterilization equipment, baler)
- Payback: 1.1 years

**Environmental Benefits:**
- 37,500 kg diverted from landfill annually
- 14.5 tonnes CO₂eq avoided (landfill methane)
- Enhanced community relations (food donation)

## Summary

Waste and emissions assessment identifies, quantifies, and manages pollution from CEA operations. Key strategies include source reduction through pollution prevention, closed-loop systems for water and nutrients, waste valorization through composting and energy recovery, and regulatory compliance. CEA facilities have significant advantages over conventional agriculture in controlling emissions and waste through enclosed systems.

## Key Takeaways

1. Organic waste represents 60-80% of CEA waste by mass and is fully compostable
2. Zero-discharge water systems eliminate grey water footprint and discharge permits
3. Air emissions from CEA are minimal compared to conventional agriculture (no soil dust, limited combustion)
4. Pollution prevention hierarchy: Eliminate > Reduce > Substitute > Recycle > Treat > Dispose
5. Waste valorization through composting and energy recovery reduces disposal costs
6. Chemical fate and transport modeling assesses environmental risks
7. Regulatory compliance requires identifying applicable rules and implementing management systems
8. Waste diversion rates >80% are achievable with comprehensive programs
9. Growing media represents largest non-organic waste challenge
10. Closed-loop nutrient management provides environmental and economic benefits

## Review Questions

1. Characterize the major waste streams from a vertical farm and estimate generation rates.
2. Calculate diversion rate for a facility with 10,000 kg recycled, 30,000 kg composted, 5,000 kg landfilled.
3. Estimate air emissions from natural gas combustion of 250,000 m³/year using EPA emission factors.
4. Explain zero-discharge water system design and benefits.
5. Apply the pollution prevention hierarchy to nutrient management in CEA.
6. Calculate compost yield from 100,000 kg plant trim waste assuming 70% mass reduction.
7. What key regulations apply to CEA facilities for air, water, and waste?
8. Design a comprehensive waste minimization program targeting 50% reduction.
9. Evaluate the economics of reusable vs. disposable packaging for CEA products.
10. Assess groundwater contamination risk from a greenhouse facility.

## Additional Resources

- EPA AP-42 Emission Factors
- EPA AERMOD Modeling System
- EPA Pollution Prevention (P2) Program
- Resource Conservation and Recovery Act (RCRA) guidance
- ASTM standards for waste characterization
- Composting and anaerobic digestion technical guides

---

**Next Lesson:** Lesson 8 - Biodiversity Impact Assessment
