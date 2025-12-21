# Activity 2: Carbon Footprint Calculation Exercise

**Course:** 513 - Environmental Impact Assessment
**Activity Type:** Practical Calculation
**Duration:** 4-5 hours
**Group Size:** Individual or pairs
**Deliverable:** Carbon footprint report with GHG inventory (8-10 pages)

---

## Learning Objectives

1. Apply GHG Protocol Corporate Standard methodology
2. Calculate Scope 1, 2, and 3 emissions for a CEA facility
3. Select and apply appropriate emission factors
4. Quantify embodied carbon in infrastructure
5. Design carbon reduction strategies
6. Prepare compliant carbon footprint report

---

## Scenario

**AquaGreen Farms** operates a greenhouse facility and has commissioned you to calculate their corporate carbon footprint for the 2024 calendar year. They need this assessment for:
- Annual sustainability reporting
- Setting science-based reduction targets
- Customer and investor disclosure
- Internal management decision-making

---

## Facility Profile

**Facility Type:** Greenhouse tomato production
**Location:** [Your region - specify for electricity grid factor]
**Size:** 100,000 sq ft (9,290 m²) growing area
**Annual Production:** 1,000,000 kg (1,000 tonnes) tomatoes
**Operating Months:** Year-round
**Employees:** 45 full-time equivalent

---

## Part 1: Organizational Boundary (30 minutes)

### 1.1 Define Control Approach

**Control Approach:** Choose and justify
- ☐ Operational Control
- ☐ Financial Control
- ☐ Equity Share

**Recommended:** Operational Control (100% of emissions from facilities you operate)

### 1.2 Define Reporting Period

**Reporting Year:** 2024 (January 1 - December 31)

### 1.3 Organizational Structure

```
AquaGreen Farms, Inc.
│
├─ Main Greenhouse (100% owned, 100% operated) ← INCLUDE
├─ Administrative Office (leased, operated) ← INCLUDE (operational control)
└─ Off-site warehouse (owned, third-party operated) ← EXCLUDE (no operational control)
```

**Document decision:** Why each facility is included or excluded

---

## Part 2: Scope 1 Emissions (1 hour)

### 2.1 Natural Gas Heating

**Data Provided:**
- Monthly natural gas consumption (therms):
  - Jan: 15,000 | Feb: 12,000 | Mar: 8,000 | Apr: 4,000
  - May: 1,000 | Jun: 0 | Jul: 0 | Aug: 0
  - Sep: 1,000 | Oct: 5,000 | Nov: 10,000 | Dec: 14,000
- **Total:** 70,000 therms

**Calculate CO₂ Emissions:**

```
Conversion: 1 therm = 0.10 mmBtu = 100,000 Btu

Total energy: 70,000 therms × 0.10 mmBtu/therm = 7,000 mmBtu

Emission factors (EPA):
CO₂: 53.1 kg/mmBtu
CH₄: 0.001 kg/mmBtu × GWP 29.8 = 0.0298 kg CO₂eq/mmBtu
N₂O: 0.0001 kg/mmBtu × GWP 273 = 0.0273 kg CO₂eq/mmBtu

Total EF: 53.16 kg CO₂eq/mmBtu

Scope 1 (Natural Gas) = 7,000 mmBtu × 53.16 kg CO₂eq/mmBtu
                       = 372,120 kg CO₂eq
                       = 372.1 tonnes CO₂eq
```

### 2.2 Company Vehicles

**Fleet Data:**
- 2 delivery trucks (diesel)
- Annual fuel consumption: 8,000 L diesel

**Calculate:**
```
Emission factor: 2.68 kg CO₂/L diesel

Scope 1 (Vehicles) = 8,000 L × 2.68 kg CO₂/L
                    = 21,440 kg CO₂eq
                    = 21.4 tonnes CO₂eq
```

### 2.3 Refrigerant Leaks

**HVAC System:**
- Refrigerant: R-134a
- Annual refill (leak replacement): 25 kg
- GWP: 1,530

**Calculate:**
```
Scope 1 (Refrigerants) = 25 kg × 1,530 GWP
                        = 38,250 kg CO₂eq
                        = 38.3 tonnes CO₂eq
```

### 2.4 Total Scope 1

```
Natural Gas:    372.1 tonnes CO₂eq
Vehicles:        21.4 tonnes CO₂eq
Refrigerants:    38.3 tonnes CO₂eq
──────────────────────────────────
TOTAL SCOPE 1:  431.8 tonnes CO₂eq
```

---

## Part 3: Scope 2 Emissions (45 minutes)

### 3.1 Electricity Consumption

**Annual electricity:** 2,500,000 kWh

### 3.2 Location-Based Method

**Use your regional grid emission factor:**

Example for New York: 0.150 kg CO₂/kWh (eGRID 2021)

```
Scope 2 (Location-Based) = 2,500,000 kWh × 0.150 kg CO₂/kWh
                          = 375,000 kg CO₂eq
                          = 375.0 tonnes CO₂eq
```

**Action:** Look up actual emission factor for your region at EPA eGRID website.

### 3.3 Market-Based Method

**Scenario A: No renewable energy procurement**
Use supplier-specific factor or residual mix (if unavailable, same as location-based)

```
Scope 2 (Market-Based, Scenario A) = 375.0 tonnes CO₂eq
```

**Scenario B: 40% wind energy purchased via RECs**

```
Renewable portion: 2,500,000 × 0.40 = 1,000,000 kWh
Emission factor for wind: 0.01 kg CO₂/kWh

Remaining grid: 1,500,000 kWh × 0.150 = 225,000 kg CO₂eq
Renewable: 1,000,000 kWh × 0.01 = 10,000 kg CO₂eq

Scope 2 (Market-Based, Scenario B) = 235.0 tonnes CO₂eq
```

**Both must be reported per GHG Protocol Scope 2 Guidance.**

---

## Part 4: Scope 3 Emissions (2 hours)

### 4.1 Screening Assessment

For each of the 15 Scope 3 categories, determine relevance:

| Category | Relevant? | Rationale |
|----------|-----------|-----------|
| 1. Purchased goods & services | YES | Nutrients, materials significant |
| 2. Capital goods | YES | Infrastructure, equipment |
| 3. Fuel & energy-related | YES | Upstream electricity impacts |
| 4. Upstream transportation | YES | Input delivery |
| 5. Waste generated | YES | Waste disposal |
| 6. Business travel | MINOR | Minimal travel |
| 7. Employee commuting | YES | 45 employees |
| 8. Upstream leased assets | NO | Not applicable |
| 9. Downstream transportation | YES | Product distribution |
| 10. Processing | NO | Fresh product, no processing |
| 11. Use of sold products | NO | Food, no use-phase energy |
| 12. End-of-life | MINOR | Biodegradable product |
| 13. Downstream leased assets | NO | Not applicable |
| 14. Franchises | NO | Not applicable |
| 15. Investments | NO | Not applicable |

**Focus on: Categories 1, 2, 3, 4, 5, 7, 9**

### 4.2 Category 1: Purchased Goods and Services

**Annual Inputs:**

| Input | Quantity | Emission Factor | Source | CO₂eq (kg) |
|-------|----------|----------------|--------|------------|
| N fertilizer (urea) | 5,000 kg | 1.9 kg CO₂/kg | ecoinvent | 9,500 |
| P fertilizer | 2,000 kg | 0.7 kg CO₂/kg | ecoinvent | 1,400 |
| K fertilizer | 8,000 kg | 0.5 kg CO₂/kg | ecoinvent | 4,000 |
| Rockwool | 3,000 kg | 1.8 kg CO₂/kg | ecoinvent | 5,400 |
| Plastic clamshells | 20,000 kg | 3.5 kg CO₂/kg | ecoinvent | 70,000 |
| Cardboard boxes | 5,000 kg | 0.9 kg CO₂/kg | ecoinvent | 4,500 |
| Other supplies | $50,000 | 0.5 kg CO₂/$ | EEIO | 25,000 |

**Total Category 1:** 119,800 kg CO₂eq = **119.8 tonnes**

### 4.3 Category 2: Capital Goods (Amortized)

**Method:** Estimate embodied carbon and amortize over lifespan

| Asset | Embodied Carbon (tonnes CO₂eq) | Lifespan (years) | Annual (tonnes/yr) |
|-------|-------------------------------|------------------|--------------------|
| Greenhouse structure | 150 | 30 | 5.0 |
| HVAC equipment | 20 | 15 | 1.3 |
| LED lighting | 50 | 10 | 5.0 |
| Irrigation systems | 10 | 15 | 0.7 |
| Other equipment | 20 | 10 | 2.0 |

**Total Category 2:** **14.0 tonnes/year**

### 4.4 Category 3: Fuel and Energy-Related Activities

**Upstream electricity impacts (T&D losses, generation losses):**

```
Typically 10-15% of Scope 2 emissions

Estimate: 375 tonnes × 0.12 = 45 tonnes CO₂eq
```

**Total Category 3:** **45.0 tonnes**

### 4.5 Category 4: Upstream Transportation

**Inputs delivery:**
```
Average distance: 300 km
Total mass: 43,000 kg
Transport mode: Diesel truck
EF: 0.062 kg CO₂/tonne·km

Emissions = 43 tonnes × 300 km × 0.062 = 800 kg CO₂eq
```

**Total Category 4:** **0.8 tonnes**

### 4.6 Category 5: Waste Generated in Operations

**Annual waste:**
- Organic waste to composting: 50 tonnes (low emissions)
- Plastic to landfill: 2 tonnes
- Cardboard recycled: 4 tonnes (minimal)

```
Landfill EF: 50 kg CO₂eq/tonne waste
Emissions = 2 tonnes × 50 = 100 kg CO₂eq
```

**Total Category 5:** **0.1 tonnes**

### 4.7 Category 7: Employee Commuting

**Assumptions:**
- 45 employees
- Average round-trip commute: 40 km
- Work days: 250/year
- Average vehicle: 0.17 kg CO₂/km

```
Emissions = 45 × 40 km × 250 days × 0.17 kg CO₂/km
          = 76,500 kg CO₂eq
```

**Total Category 7:** **76.5 tonnes**

### 4.8 Category 9: Downstream Transportation

**Product distribution:**
```
Production: 1,000 tonnes
Average distance to customer: 100 km
Refrigerated truck EF: 0.18 kg CO₂/tonne·km

Emissions = 1,000 tonnes × 100 km × 0.18
          = 18,000 kg CO₂eq
```

**Total Category 9:** **18.0 tonnes**

### 4.9 Total Scope 3

```
Category 1 (Purchased goods):     119.8 tonnes
Category 2 (Capital goods):        14.0 tonnes
Category 3 (Energy-related):       45.0 tonnes
Category 4 (Upstream transport):    0.8 tonnes
Category 5 (Waste):                 0.1 tonnes
Category 7 (Employee commuting):   76.5 tonnes
Category 9 (Downstream transport): 18.0 tonnes
───────────────────────────────────────────────
TOTAL SCOPE 3:                    274.2 tonnes CO₂eq
```

---

## Part 5: Total Carbon Footprint (15 minutes)

### 5.1 Corporate Carbon Footprint Summary

```
SCOPE 1 (Direct):                 431.8 tonnes CO₂eq (39.8%)
SCOPE 2 (Location-based):         375.0 tonnes CO₂eq (34.5%)
SCOPE 3 (Value Chain):            274.2 tonnes CO₂eq (25.3%)
───────────────────────────────────────────────────────────
TOTAL (Location-based):         1,081.0 tonnes CO₂eq
```

**Alternative with renewable energy (market-based Scope 2):**
```
SCOPE 1:                          431.8 tonnes CO₂eq
SCOPE 2 (Market-based, 40% RE):  235.0 tonnes CO₂eq
SCOPE 3:                          274.2 tonnes CO₂eq
───────────────────────────────────────────────────────────
TOTAL (Market-based, 40% RE):     941.0 tonnes CO₂eq (13% reduction)
```

### 5.2 Intensity Metrics

```
Carbon intensity (per kg tomatoes) = 1,081 tonnes / 1,000,000 kg
                                   = 1.08 kg CO₂eq/kg tomatoes

Carbon intensity (per revenue) = 1,081 tonnes / $4,000,000 revenue
                                = 0.27 kg CO₂eq/$

Carbon intensity (per m²) = 1,081,000 kg / 9,290 m²
                           = 116.4 kg CO₂eq/m²/year
```

---

## Part 6: Carbon Reduction Strategy (1 hour)

### 6.1 Hotspot Analysis

**Top 5 emission sources:**
1. Natural gas heating (372 tonnes, 34%)
2. Electricity (375 tonnes, 35%)
3. Purchased goods (120 tonnes, 11%)
4. Employee commuting (77 tonnes, 7%)
5. Capital goods (14 tonnes, 1%)

### 6.2 Reduction Opportunities

**Develop 5 reduction strategies with quantified impacts:**

| Strategy | Annual Reduction (tonnes CO₂eq) | % Reduction | Investment | Payback |
|----------|--------------------------------|-------------|------------|---------|
| 1. Renewable energy (100% wind PPA) | 365 | 34% | $50,000 | 4 yr |
| 2. Thermal curtains + improved insulation | 110 | 10% | $75,000 | 5 yr |
| 3. Heat pump to replace gas heating | 300 | 28% | $200,000 | 8 yr |
| 4. LED upgrade (higher efficacy) | 40 | 4% | $30,000 | 3 yr |
| 5. Employee EV charging + carpooling | 30 | 3% | $15,000 | — |

**Total potential reduction:** 845 tonnes CO₂eq (78% of baseline)

### 6.3 Science-Based Target

**Set target aligned with 1.5°C pathway (4.2% annual linear reduction):**

```
Base year (2024): 1,081 tonnes CO₂eq
Target year (2030): 6 years

Reduction factor = (1 - 0.042)^6 = 0.775

Target (2030) = 1,081 × 0.775 = 838 tonnes CO₂eq

Absolute reduction required: 243 tonnes (22.5%)
```

**Pathway:**
- Year 1 (2025): Renewable energy 40% → 941 tonnes
- Year 2 (2026): Renewable 100% + LED upgrade → 676 tonnes
- Year 3 (2027): Thermal efficiency improvements → 566 tonnes
- Years 4-6: Continued optimization → 838 tonnes (on target)

---

## Deliverable: Carbon Footprint Report

### Report Structure (8-10 pages)

**Executive Summary** (1 page)
- Total footprint: 1,081 tonnes CO₂eq
- Key sources: Natural gas 34%, Electricity 35%
- Reduction target: 22.5% by 2030 (SBT-aligned)

**1. Introduction**
- Company background
- Report purpose and scope

**2. Methodology**
- GHG Protocol standards applied
- Organizational boundary (operational control)
- Reporting period (2024)
- Emission factor sources

**3. Scope 1 Results**
- Natural gas: 372.1 tonnes
- Vehicles: 21.4 tonnes
- Refrigerants: 38.3 tonnes
- Subtotal: 431.8 tonnes

**4. Scope 2 Results**
- Location-based: 375.0 tonnes
- Market-based: 235.0 tonnes (with 40% renewable)
- Dual reporting rationale

**5. Scope 3 Results**
- Screening and materiality assessment
- Category-by-category results
- Total: 274.2 tonnes
- Top categories: Purchased goods, commuting

**6. Total Footprint and Trends**
- Summary table (Scope 1+2+3)
- Intensity metrics
- [If available] Year-over-year comparison

**7. Reduction Strategy**
- Hotspot analysis
- 5 reduction opportunities (quantified)
- Science-based target (1.5°C aligned)
- Implementation roadmap

**8. Conclusions**

**Appendices**
- Detailed calculations
- Emission factors table
- Assumptions documentation

---

## Assessment Rubric (100 points)

| Criterion | Points |
|-----------|--------|
| Methodology (boundary, standards) | 15 |
| Scope 1 calculations | 20 |
| Scope 2 calculations (both methods) | 15 |
| Scope 3 screening and calculations | 25 |
| Reduction strategy | 15 |
| Report quality and clarity | 10 |

---

## Submission

- Format: PDF
- Filename: LastName_CarbonFootprint.pdf
- Include: Excel calculation workbook
- Due: [As specified]

---

## Extension: CDP Climate Questionnaire

For advanced students, complete selected sections of CDP Climate Change questionnaire based on your results:
- C6: Emissions data
- C7: Emissions breakdown
- C4: Targets and performance

---

**This exercise mirrors real corporate carbon accounting. Your results should be defensible to auditors and stakeholders!**

