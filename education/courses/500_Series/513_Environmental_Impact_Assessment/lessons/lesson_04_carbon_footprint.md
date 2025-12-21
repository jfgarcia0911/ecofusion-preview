# Lesson 4: Carbon Footprint Analysis

**Course:** 513 - Environmental Impact Assessment
**Module:** 4 of 14
**Duration:** Week 4
**Learning Time:** 8-10 hours

## Learning Objectives

By the end of this lesson, you will be able to:
1. Apply GHG Protocol standards for organizational and product carbon footprints
2. Calculate Scope 1, 2, and 3 emissions for CEA facilities
3. Identify and quantify embodied carbon in infrastructure and materials
4. Select appropriate emission factors from reputable databases
5. Design carbon reduction strategies using mitigation hierarchy
6. Prepare carbon footprint reports meeting international standards
7. Evaluate carbon offset and neutrality claims critically

## Introduction

Carbon footprint analysis quantifies greenhouse gas (GHG) emissions associated with an organization, product, or activity. For CEA facilities, carbon footprinting is essential for understanding climate impacts, setting reduction targets, and communicating environmental performance to stakeholders. This lesson focuses on applying the GHG Protocol standards—the most widely used international accounting framework.

## 1. GHG Protocol Framework

### 1.1 Corporate Standard vs. Product Standard

**Corporate (Organizational) Standard:**
- Accounts for all emissions from operations
- Used for corporate sustainability reporting
- Focuses on organizational boundaries
- Annual inventory approach

**Product (Goods and Services) Standard:**
- Accounts for emissions across product life cycle
- Used for product comparisons and labeling
- Follows product from cradle to grave
- Per-unit functional basis

**For CEA Facilities:** Both may apply
- Corporate standard: Annual facility emissions
- Product standard: Emissions per kg of produce

### 1.2 Scope 1, 2, and 3 Emissions

```
┌─────────────────────────────────────────────────────────┐
│                 SCOPE 1: DIRECT EMISSIONS               │
│  Company-owned or controlled sources                    │
│  - Natural gas combustion (heating)                     │
│  - Refrigerant leaks (cooling systems)                  │
│  - Company vehicle fuel                                 │
│  - On-site backup generators                            │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│           SCOPE 2: INDIRECT ENERGY EMISSIONS            │
│  Purchased electricity, steam, heating, cooling         │
│  - Grid electricity for lighting, HVAC, equipment       │
│  - Purchased steam or hot water                         │
│  - District cooling                                     │
│                                                         │
│  Two accounting methods:                                │
│  - Location-based: Regional grid average               │
│  - Market-based: Supplier-specific mix                 │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│         SCOPE 3: OTHER INDIRECT EMISSIONS               │
│  Value chain emissions (15 categories)                  │
│                                                         │
│  Upstream:                                              │
│  1. Purchased goods and services                       │
│  2. Capital goods                                      │
│  3. Fuel and energy-related (not in 1&2)             │
│  4. Upstream transportation                            │
│  5. Waste generated in operations                      │
│  6. Business travel                                    │
│  7. Employee commuting                                 │
│  8. Upstream leased assets                             │
│                                                         │
│  Downstream:                                            │
│  9. Downstream transportation                          │
│  10. Processing of sold products                       │
│  11. Use of sold products                              │
│  12. End-of-life treatment                             │
│  13. Downstream leased assets                          │
│  14. Franchises                                        │
│  15. Investments                                       │
└─────────────────────────────────────────────────────────┘
```

### 1.3 Organizational Boundaries

**Control Approach (Recommended for most CEA):**
- **Operational control:** Account for 100% of emissions from operations you control
- **Financial control:** Account for emissions from operations you have financial control over
- **Equity share:** Account for emissions proportional to your ownership percentage

**Example Decision Tree:**
```
Do you OWN the facility?
├─ Yes → Do you OPERATE it?
│         ├─ Yes → Operational control (100% of emissions)
│         └─ No → Financial control or equity share
└─ No → Do you LEASE it?
          ├─ Yes → Operational control if you control operations
          └─ No → Not in your organizational boundary
```

## 2. Scope 1 Emissions Calculation

### 2.1 Stationary Combustion

For natural gas heating, boilers, generators:

```
CO₂ emissions (kg) = Fuel consumed (m³) × Emission factor (kg CO₂/m³)

Example: Greenhouse heating
Natural gas consumed: 500,000 m³/year
Emission factor: 1.91 kg CO₂/m³ (EPA)

CO₂ = 500,000 × 1.91 = 955,000 kg CO₂/year = 955 tonnes CO₂/year
```

**Complete GHG Accounting:**
- CO₂: Primary combustion product
- CH₄: Incomplete combustion (multiply by GWP)
- N₂O: Combustion conditions dependent

```
GHG Emissions = (CO₂) + (CH₄ × GWP_CH₄) + (N₂O × GWP_N₂O)

Natural gas example (EPA factors):
CO₂: 0.0537 tonne CO₂/mmBtu
CH₄: 0.001 kg CH₄/mmBtu × GWP 29.8 = 0.0298 kg CO₂eq/mmBtu
N₂O: 0.0001 kg N₂O/mmBtu × GWP 273 = 0.0273 kg CO₂eq/mmBtu

Total: 53.76 kg CO₂eq/mmBtu (CO₂ dominates at 99.9%)
```

### 2.2 Mobile Combustion

For company-owned vehicles, forklifts, delivery trucks:

```
Emissions = Distance traveled (km) × Fuel economy (L/km) × EF (kg CO₂/L)

Example: Delivery truck
Annual distance: 25,000 km
Fuel economy: 0.15 L/km (diesel)
Emission factor: 2.68 kg CO₂/L diesel

CO₂ = 25,000 × 0.15 × 2.68 = 10,050 kg CO₂/year
```

**Alternative Method (Fuel-Based):**
```
Emissions = Fuel consumed (L) × Emission factor (kg CO₂/L)

If total diesel consumed: 3,750 L/year
CO₂ = 3,750 × 2.68 = 10,050 kg CO₂/year (same result)
```

### 2.3 Fugitive Emissions

Refrigerant leaks from cooling systems:

```
Emissions = Refrigerant lost (kg) × GWP

Example: R-404A leak
Annual recharge: 15 kg
GWP of R-404A: 3,922

CO₂eq = 15 × 3,922 = 58,830 kg CO₂eq/year
```

**Important:** Even small refrigerant leaks can be significant due to extremely high GWPs.

**Common Refrigerants:**
| Refrigerant | GWP (AR6) | Phase-out Status |
|-------------|-----------|------------------|
| R-22 (HCFC) | 1,924 | Being phased out |
| R-134a (HFC) | 1,530 | Widely used |
| R-404A (HFC) | 3,922 | Phase down |
| R-410A (HFC) | 2,256 | Common in HVAC |
| R-32 (HFC) | 771 | Lower GWP alternative |
| CO₂ (R-744) | 1 | Natural refrigerant |
| Ammonia (R-717) | 0 | Natural refrigerant |

**Leak Rate Estimation:**
```
Annual leak rate = (Initial charge + Refills - Final charge) / Initial charge

Example:
Initial charge: 100 kg R-410A
Annual refill: 12 kg
Final charge (year end): 100 kg (topped up)

Leak rate = 12 / 100 = 12% per year
Emissions = 12 kg × 2,256 = 27,072 kg CO₂eq/year
```

## 3. Scope 2 Emissions Calculation

### 3.1 Location-Based Method

Uses average emission intensity of regional grid:

```
Scope 2 emissions = Electricity consumed (MWh) × Grid EF (kg CO₂/MWh)

Example: Vertical farm in New York
Annual electricity: 11,000 MWh
NY grid factor: 150 kg CO₂/MWh (eGRID 2021)

Scope 2 = 11,000 × 150 = 1,650,000 kg CO₂ = 1,650 tonnes CO₂/year
```

**Emission Factor Sources:**
- **U.S.:** EPA eGRID (state/subregion specific)
- **EU:** European Environment Agency
- **Global:** IEA country factors
- **Facility-specific:** Utility disclosure

### 3.2 Market-Based Method

Uses emission factor from contractual instruments:

**Hierarchy:**
1. Energy attribute certificates (RECs, GOs)
2. Supplier-specific emission rates
3. Utility emission rates
4. Residual mix (grid minus contracted renewable)

```
Example: 100% renewable energy purchase
Annual electricity: 11,000 MWh
RECs purchased: 11,000 MWh wind (0 kg CO₂/MWh)

Market-based Scope 2 = 11,000 × 0 = 0 tonnes CO₂

Location-based still reported = 1,650 tonnes CO₂ (for comparison)
```

**Dual Reporting:**
Per GHG Protocol, report both location-based AND market-based Scope 2.

### 3.3 Renewable Energy Claims

**Credible Renewable Energy Accounting:**
✓ Purchase Green-e certified RECs (North America) or Guarantees of Origin (Europe)
✓ Match timing (same year/quarter as consumption)
✓ Match location (same grid region)
✓ Avoid double counting (each REC retired once)
✓ Document contracts and certificates
✓ Third-party verification

**Not Acceptable:**
✗ Generic "green" utility program without certificates
✗ RECs from different grid (e.g., TX RECs for NY facility)
✗ Expired or used certificates
✗ Claimed but not purchased renewable energy

## 4. Scope 3 Emissions Calculation

Scope 3 typically represents 70-90% of total carbon footprint for CEA facilities.

### 4.1 Category 1: Purchased Goods and Services

**Spend-Based Method:**
```
Emissions = Spend ($) × Emission factor (kg CO₂/$)

Example: Annual nutrient purchases
Fertilizer spend: $250,000/year
EEIO factor for fertilizer: 1.2 kg CO₂/$

Emissions = 250,000 × 1.2 = 300,000 kg CO₂eq/year
```

**Activity-Based Method (More Accurate):**
```
Emissions = Quantity × Specific EF

Example: Nitrogen fertilizer
Urea purchased: 10,000 kg/year
EF for urea production: 1.9 kg CO₂eq/kg urea

Emissions = 10,000 × 1.9 = 19,000 kg CO₂eq/year
```

**Major Inputs for CEA:**
| Input | Typical EF | Unit |
|-------|------------|------|
| Nitrogen fertilizer (urea) | 1.9 | kg CO₂eq/kg N |
| Phosphate fertilizer | 0.7 | kg CO₂eq/kg P₂O₅ |
| Potassium fertilizer | 0.5 | kg CO₂eq/kg K₂O |
| Rockwool growing media | 1.8 | kg CO₂eq/kg |
| PET packaging | 3.5 | kg CO₂eq/kg |
| LED fixtures | 150 | kg CO₂eq/fixture |
| HVAC equipment | 500 | kg CO₂eq/unit |

### 4.2 Category 2: Capital Goods

Infrastructure embodied carbon, amortized over asset life:

```
Annual emissions = (Total embodied carbon) / (Asset lifespan in years)

Example: Building construction
Total embodied carbon: 500,000 kg CO₂eq
Building lifespan: 30 years

Annual amortized = 500,000 / 30 = 16,667 kg CO₂eq/year
```

**Embodied Carbon Sources:**
- Structural steel: 1,800 kg CO₂eq/tonne
- Concrete: 150 kg CO₂eq/m³
- Glass: 850 kg CO₂eq/tonne
- Aluminum: 8,500 kg CO₂eq/tonne

### 4.3 Category 3: Fuel and Energy-Related Activities

Emissions from fuel extraction, refining, and transmission not included in Scope 1 & 2:

```
Emissions = Energy consumed × Upstream emission factor

Example: Electricity transmission losses
Electricity consumed: 11,000 MWh
Upstream factor: 15 kg CO₂/MWh (includes generation losses, T&D)

Emissions = 11,000 × 15 = 165,000 kg CO₂eq/year
```

Typically adds 10-20% to Scope 2 electricity emissions.

### 4.4 Category 4: Upstream Transportation

Transportation of purchased goods to facility:

```
Emissions = Mass (tonnes) × Distance (km) × EF (kg CO₂/tonne·km)

Example: Nutrient delivery
Mass: 50 tonnes/year
Distance: 500 km average
EF for diesel truck: 0.062 kg CO₂/tonne·km

Emissions = 50 × 500 × 0.062 = 1,550 kg CO₂eq/year
```

### 4.5 Category 9: Downstream Transportation

Product distribution to customers:

```
Example: Local delivery within 100 km radius
Annual production: 500 tonnes lettuce
Average distance to customer: 50 km
EF for refrigerated truck: 0.18 kg CO₂/tonne·km

Emissions = 500 × 50 × 0.18 = 4,500 kg CO₂eq/year
```

### 4.6 Other Scope 3 Categories

**Category 5: Waste (Operations):**
```
Emissions = Waste mass × EF for disposal method

Example: Landfill waste
Annual waste: 20 tonnes
EF for landfill: 50 kg CO₂eq/tonne

Emissions = 20 × 50 = 1,000 kg CO₂eq/year
```

**Category 7: Employee Commuting:**
```
Emissions = Employees × Avg. commute distance × Work days × EF

Example:
Employees: 50
Round-trip commute: 30 km
Work days: 250/year
EF for average vehicle: 0.17 kg CO₂/km

Emissions = 50 × 30 × 250 × 0.17 = 63,750 kg CO₂eq/year
```

**Category 12: End-of-Life:**
Typically minimal for food products (short life, biodegradable)
Focus on packaging waste disposal.

### 4.7 Scope 3 Screening

Not all 15 categories are material. Screen each:

```
Screening Criteria:
□ Magnitude: >5% of estimated total Scope 3?
□ Influence: Can we reduce these emissions?
□ Stakeholder interest: Do stakeholders care?
□ Data availability: Can we measure it?

If YES to 2+ criteria → Include in inventory
If NO to all → Document exclusion rationale
```

## 5. Embodied Carbon Analysis

### 5.1 Infrastructure Embodied Carbon

**Major Components for CEA:**

**Building Structure:**
```
Concrete foundations: Volume (m³) × 150 kg CO₂eq/m³
Steel structure: Mass (tonnes) × 1,800 kg CO₂eq/tonne
Glass/polycarbonate: Area (m²) × thickness × density × 850 kg CO₂eq/tonne
Insulation: Volume (m³) × material-specific EF
```

**Example Calculation:**
```
50,000 sq ft vertical farm (4,645 m²)
- Concrete: 500 m³ × 150 = 75,000 kg CO₂eq
- Structural steel: 80 tonnes × 1,800 = 144,000 kg CO₂eq
- HVAC equipment: 20 units × 500 = 10,000 kg CO₂eq
- LED fixtures: 1,000 units × 150 = 150,000 kg CO₂eq
- Growing systems: 100 tonnes steel × 1,800 = 180,000 kg CO₂eq
- Electrical/controls: Estimated 50,000 kg CO₂eq

Total embodied carbon: 609,000 kg CO₂eq

Amortization:
- Building (30-year life): 75,000 + 144,000 / 30 = 7,300 kg CO₂eq/year
- Equipment (10-year life): (10,000 + 150,000 + 180,000 + 50,000) / 10
                           = 39,000 kg CO₂eq/year

Total annual embodied carbon: 46,300 kg CO₂eq/year
```

### 5.2 Reducing Embodied Carbon

**Strategies:**
1. **Material selection:** Low-carbon concrete, recycled steel
2. **Design optimization:** Reduce material quantities
3. **Local sourcing:** Reduce transportation emissions
4. **Circular economy:** Use recycled/reclaimed materials
5. **Longevity:** Design for durability and adaptability

**Example Impact:**
Switching to 30% recycled content steel:
- Standard steel: 1,800 kg CO₂eq/tonne
- Recycled content steel: 1,200 kg CO₂eq/tonne
- Reduction: 33% on steel component

For 80 tonnes steel: 144,000 → 96,000 kg CO₂eq (48,000 kg saved)

## 6. Emission Factors and Databases

### 6.1 Reputable Sources

**Primary Sources:**

**U.S. EPA:**
- Emission Factors Hub
- eGRID (electricity)
- GHG Inventory Guidance

**IPCC:**
- Default emission factors
- GWP values (Assessment Reports)

**DEFRA (UK):**
- Government GHG Conversion Factors
- Annual updates

**IEA:**
- CO₂ Emissions from Fuel Combustion
- Country-specific factors

**ecoinvent:**
- Comprehensive LCA database
- Activity-based emission factors

### 6.2 Factor Selection Hierarchy

```
1. Site-specific data (best)
   ↓
2. Supplier-specific data
   ↓
3. Industry average, regional
   ↓
4. Industry average, national
   ↓
5. Proxy data from similar product
   ↓
6. Economic input-output factors (least accurate)
```

### 6.3 Uncertainty in Emission Factors

| Factor Type | Typical Uncertainty | Notes |
|-------------|---------------------|-------|
| Direct combustion | ±5% | Well-established |
| Electricity (grid average) | ±10% | Annual variation |
| Refrigerant GWPs | ±20% | Updated with IPCC reports |
| Upstream materials | ±30-50% | Production method variation |
| EEIO factors | ±50-100% | High variability |
| Services | ±100-200% | Very uncertain |

**Best Practice:** Document uncertainty and test sensitivity of results to key factors.

## 7. Carbon Reduction Strategies

### 7.1 Mitigation Hierarchy

```
1. AVOID: Eliminate emission sources
   Example: Passive heating/cooling design

2. REDUCE: Decrease emissions per unit
   Example: Energy-efficient LED lighting

3. SUBSTITUTE: Replace with lower-carbon alternatives
   Example: Renewable energy instead of grid electricity

4. OFFSET: Compensate for remaining emissions
   Example: Purchase verified carbon credits

Priority: 1 > 2 > 3 > 4 (Offset is last resort)
```

### 7.2 CEA-Specific Reduction Strategies

**Energy Efficiency (Scope 1 & 2):**
- High-efficiency LED lighting (3.0+ μmol/J)
- Optimized light recipes (reduce DLI where possible)
- Heat recovery systems
- Variable frequency drives on motors
- Building envelope improvements
- Predictive climate control algorithms

**Renewable Energy (Scope 2):**
- On-site solar PV
- On-site wind (if suitable)
- Power Purchase Agreements (PPAs)
- Green tariffs from utility
- Renewable Energy Certificates (RECs)

**Supply Chain (Scope 3):**
- Low-carbon fertilizer sources
- Reusable/recyclable growing media
- Minimal packaging
- Local suppliers (reduce transport)
- Circular water systems
- Waste valorization (composting, biogas)

### 7.3 Reduction Target Setting

**Science-Based Targets Initiative (SBTi) Framework:**

**Target Ambition Levels:**
- **1.5°C aligned:** 4.2% annual linear reduction (aggressive)
- **Well-below 2°C:** 2.5% annual linear reduction (moderate)

**Example Target:**
```
Base year (2024): 2,000 tonnes CO₂eq
Target year (2030): 6 years
1.5°C pathway: 4.2% annual reduction

Reduction factor = (1 - 0.042)^6 = 0.775
Target = 2,000 × 0.775 = 1,550 tonnes CO₂eq (22.5% total reduction)
```

**Scope Coverage:**
- Scope 1 & 2: Absolute reduction targets
- Scope 3: Intensity targets (kg CO₂eq per kg product) or engagement targets

### 7.4 Marginal Abatement Cost Curve (MACC)

Prioritize reduction strategies by cost-effectiveness:

```
Example MACC for Vertical Farm:

Strategy                    Cost ($/tonne CO₂eq)    Potential (tonnes CO₂eq/yr)
LED upgrade                 -$50 (savings)          200
HVAC optimization          -$20                    100
Heat recovery              $0                      150
Building insulation        $30                     80
On-site solar PV           $80                     500
Wind PPA                   $100                    800
Green tariff               $120                    1,650

Interpretation:
- LED upgrade and HVAC optimization have negative costs (save money)
- Implement these first
- Solar and wind cost more but eliminate large emissions
- Green tariff covers 100% of electricity but highest cost
```

## 8. Carbon Offsetting and Neutrality

### 8.1 Carbon Offset Quality Criteria

High-quality offsets must be:

**1. Real:** Actually eliminate or reduce GHG emissions
**2. Additional:** Wouldn't happen without offset revenue
**3. Permanent:** Sequestration is long-lasting (or insured)
**4. Verified:** Third-party certified
**5. Unique:** Not double-counted
**6. Co-benefits:** Provide environmental and social benefits

### 8.2 Offset Types

**Avoidance/Reduction:**
- Renewable energy projects
- Methane capture (landfills, agriculture)
- Energy efficiency programs
- Avoided deforestation (REDD+)

**Removal/Sequestration:**
- Reforestation/afforestation
- Soil carbon sequestration
- Direct air capture (DAC)
- Biochar
- Ocean-based sequestration

**Preference Shift:** Growing emphasis on removal/sequestration over avoidance, especially for "net zero" claims.

### 8.3 Offset Standards and Registries

**Verification Standards:**
- Verified Carbon Standard (VCS/Verra)
- Gold Standard
- American Carbon Registry (ACR)
- Climate Action Reserve (CAR)

**Registry Requirements:**
✓ Transparent project documentation
✓ Independent third-party verification
✓ Unique serial numbers for credits
✓ Public tracking of issuance and retirement
✓ Methodology adherence

### 8.4 Carbon Neutrality Claims

**ISO 14068 (in development) - Carbon Neutrality:**

Requirements for carbon neutral claim:
1. Define boundary (organizational or product)
2. Complete GHG inventory per GHG Protocol
3. Reduce emissions (reduction targets required)
4. Offset only remaining emissions with high-quality credits
5. Transparent disclosure of inventory and offsets
6. Third-party verification
7. Avoid claims of "zero emissions" (use "net zero" or "carbon neutral")

**Example Claim:**
"Our vertical farm achieved carbon neutrality in 2024 through a 30% reduction in operational emissions since 2020 and offsetting of remaining 1,400 tonnes CO₂eq via verified reforestation projects. View our carbon inventory report at [URL]."

**Avoid Greenwashing:**
✗ "Carbon neutral" without emissions reduction efforts
✗ Offsetting low-quality credits
✗ Narrow boundary that excludes major emissions
✗ Lack of transparency or verification
✗ Misleading use of "zero emissions" or "climate positive"

## 9. Reporting and Disclosure

### 9.1 Carbon Footprint Report Structure

**1. Executive Summary**
- Total emissions by scope
- Key findings and trends
- Reduction targets and progress

**2. Methodology**
- Organizational boundary and control approach
- Reporting period
- GHG Protocol standards applied
- Emission factors sources

**3. Scope 1 Results**
- Stationary combustion breakdown
- Mobile combustion
- Fugitive emissions
- Data quality

**4. Scope 2 Results**
- Electricity consumption
- Location-based emissions
- Market-based emissions
- Renewable energy purchases

**5. Scope 3 Results**
- Screening assessment
- Category-by-category results
- Material categories analysis

**6. Total Footprint and Intensity Metrics**
- Total Scope 1+2+3
- Intensity metrics (per kg product, per revenue, per m²)
- Year-over-year comparison

**7. Reduction Strategies and Targets**
- Current initiatives
- Future plans
- Science-based targets

**8. Verification and Assurance**
- Third-party verification statement
- Data quality assessment

**9. Appendices**
- Calculation details
- Emission factors table
- Assumptions and exclusions

### 9.2 CDP (Carbon Disclosure Project)

Global disclosure platform for climate reporting:

**CDP Climate Questionnaire Sections:**
- Governance
- Business strategy
- Risks and opportunities
- Targets and performance
- Emissions methodology
- Scope 1, 2, 3 data
- Energy usage
- Verification

**Scoring:** A (Leadership) to D- (Disclosure)

**Benefits of CDP Reporting:**
- Investor transparency
- Benchmarking against peers
- Stakeholder communication
- Drive internal action

### 9.3 TCFD Alignment

Task Force on Climate-related Financial Disclosures framework:

**Four Pillars:**
1. **Governance:** Board oversight of climate risks
2. **Strategy:** Climate risks and opportunities
3. **Risk Management:** Process for identifying and managing risks
4. **Metrics & Targets:** KPIs, GHG emissions, targets

**TCFD Metrics for CEA:**
- Absolute Scope 1, 2, 3 emissions
- Emission intensity (kg CO₂eq / kg product)
- Climate-related risks (physical and transition)
- Transition plan and targets

## 10. Case Study: Vertical Farm Carbon Footprint

**Facility Profile:**
- 50,000 sq ft, 10-level vertical farm
- Location: New York
- Production: 500 tonnes lettuce/year
- Electricity: 11,000 MWh/year
- Natural gas: None (all-electric)

**Carbon Footprint Results:**

**Scope 1:** 15 tonnes CO₂eq/year
- Backup generator (diesel): 8 tonnes
- Refrigerant leaks (R-410A): 7 tonnes

**Scope 2 (Location-Based):** 1,650 tonnes CO₂eq/year
- Grid electricity: 100%

**Scope 2 (Market-Based):** 825 tonnes CO₂eq/year
- 50% renewable energy (wind RECs): 825 tonnes avoided

**Scope 3:** 680 tonnes CO₂eq/year
- Cat 1 (Purchased goods): 400 tonnes
- Cat 2 (Capital goods): 40 tonnes
- Cat 3 (Energy-related): 165 tonnes
- Cat 4 (Upstream transport): 5 tonnes
- Cat 7 (Employee commute): 60 tonnes
- Cat 9 (Distribution): 10 tonnes

**Total (Market-Based):** 1,520 tonnes CO₂eq/year

**Intensity Metrics:**
- 3.04 kg CO₂eq / kg lettuce (market-based)
- 4.69 kg CO₂eq / kg lettuce (location-based)

**Comparison to Field Lettuce:**
- Field lettuce: ~0.8 kg CO₂eq / kg (California production, transported to NY)
- Vertical farm: 3.04 kg CO₂eq / kg
- Difference: +280% carbon intensity

**However, Trade-Offs:**
- Water use: 95% reduction
- Land use: 99% reduction
- Pesticides: Zero
- Food miles: 90% reduction
- Freshness: Significantly improved

**Reduction Targets (1.5°C Aligned):**
- 2024 baseline: 1,520 tonnes CO₂eq
- 2030 target: 1,178 tonnes CO₂eq (22.5% reduction)
- 2035 target: 1,008 tonnes CO₂eq (33.7% reduction)

**Reduction Strategies:**
1. Increase renewable energy to 100% (saves 825 tonnes)
2. LED efficiency upgrade (saves 200 tonnes)
3. HVAC optimization (saves 100 tonnes)
4. Heat recovery (saves 150 tonnes)
5. Offset remaining ~245 tonnes with verified reforestation credits

**Result:** Carbon neutral by 2026

## Summary

Carbon footprint analysis using GHG Protocol standards provides a comprehensive framework for quantifying, managing, and reducing greenhouse gas emissions. For CEA facilities, Scope 2 electricity typically dominates, with significant Scope 3 contributions from supply chain. Renewable energy procurement and energy efficiency improvements are the highest-impact reduction strategies. Transparent reporting and credible offsetting are essential for carbon neutrality claims.

## Key Takeaways

1. GHG Protocol provides globally accepted standards for carbon accounting
2. Scope 1 (direct), Scope 2 (purchased energy), and Scope 3 (value chain) must all be quantified
3. CEA facilities typically show Scope 2 as dominant emission source
4. Both location-based and market-based Scope 2 should be reported
5. Embodied carbon in infrastructure is significant and often overlooked
6. Emission factor selection significantly impacts results; use reputable sources
7. Mitigation hierarchy: Avoid > Reduce > Substitute > Offset
8. High-quality carbon offsets must be real, additional, permanent, and verified
9. Carbon neutrality requires reduction efforts, not just offsetting
10. Transparent reporting builds credibility with stakeholders

## Review Questions

1. Explain the difference between Scope 1, 2, and 3 emissions with CEA examples.
2. Calculate Scope 2 emissions for a facility using 5,000 MWh/year in a region with 200 kg CO₂/MWh grid factor.
3. What is the difference between location-based and market-based Scope 2 accounting?
4. Why are fugitive refrigerant emissions potentially significant despite small mass?
5. List the 15 Scope 3 categories and identify the 3 most material for typical CEA.
6. Calculate amortized embodied carbon for equipment with 800,000 kg CO₂eq total and 20-year life.
7. Describe the carbon offset quality criteria. Why is "additionality" important?
8. What are the key elements of a credible carbon neutrality claim per emerging standards?
9. Compare carbon footprints of CEA vs. conventional agriculture. What are the trade-offs?
10. Design a carbon reduction pathway for a CEA facility to achieve 1.5°C-aligned targets.

## Practical Exercise

**Exercise: Calculate Carbon Footprint for CEA Facility**

Develop a complete carbon footprint for your CEA facility design:

1. Define organizational boundary and reporting period
2. Quantify Scope 1 emissions (if any)
3. Calculate Scope 2 emissions (location-based and market-based)
4. Screen Scope 3 categories for materiality
5. Quantify material Scope 3 categories
6. Calculate total footprint and intensity metrics
7. Identify top 5 emission hotspots
8. Design reduction strategy targeting 25% reduction
9. Evaluate offset options for remaining emissions
10. Prepare summary carbon footprint report

**Deliverable:** 8-10 page carbon footprint report with calculations, data sources, and reduction plan

**Tools:** Excel template, EPA emission factor database, GHG Protocol calculation tools

## Additional Resources

**Standards:**
- GHG Protocol Corporate Standard: www.ghgprotocol.org
- GHG Protocol Product Standard: www.ghgprotocol.org
- ISO 14064 series (GHG accounting and verification)
- PAS 2050 (Product carbon footprinting)

**Emission Factor Databases:**
- EPA Emission Factors Hub: www.epa.gov/climateleadership
- DEFRA GHG Conversion Factors: www.gov.uk/government/collections/government-conversion-factors-for-company-reporting
- IPCC Emission Factor Database: www.ipcc-nggip.iges.or.jp

**Tools:**
- GHG Protocol Calculation Tools (Excel-based)
- Carbon Trust Footprinting Software
- SimaPro/openLCA (with GHG Protocol method)

**Guidance Documents:**
- GHG Protocol Scope 3 Standard
- GHG Protocol Scope 2 Guidance
- EPA Greenhouse Gas Inventory Guidance

---

**Next Lesson:** Lesson 5 - Water Footprint Assessment
