# Lesson 5: Water Footprint Assessment

**Course:** 513 - Environmental Impact Assessment
**Module:** 5 of 14
**Duration:** Week 5
**Learning Time:** 8-10 hours

## Learning Objectives

By the end of this lesson, you will be able to:
1. Apply Water Footprint Network methodology to quantify blue, green, and grey water footprints
2. Calculate direct and indirect water consumption for CEA facilities
3. Assess water scarcity using regional indicators and stress indices
4. Evaluate virtual water content of inputs and products
5. Design water efficiency improvements using the water stewardship framework
6. Conduct water risk assessments for facility siting and operations
7. Align water footprint reporting with international standards (ISO 14046)

## Introduction

Water footprint assessment quantifies the total volume of freshwater used to produce goods and services, considering both direct and indirect water use throughout the supply chain. For CEA facilities, water management is often cited as a key sustainability advantage, with potential for 90-95% water savings compared to conventional agriculture. However, comprehensive water footprint assessment reveals complexities including embedded water in energy and materials, water quality impacts, and regional scarcity considerations.

## 1. Water Footprint Concepts

### 1.1 Blue, Green, and Grey Water

```
┌────────────────────────────────────────────────────────────┐
│                    BLUE WATER FOOTPRINT                    │
│  Surface and groundwater consumption (evaporated or        │
│  incorporated into product)                                │
│                                                            │
│  CEA Examples:                                             │
│  - Irrigation water consumed by plants                     │
│  - Evaporation from systems                                │
│  - Water incorporated into biomass                         │
│  - Cooling tower evaporation                               │
└────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────┐
│                    GREEN WATER FOOTPRINT                   │
│  Rainwater stored in soil and consumed by plants           │
│                                                            │
│  CEA Application:                                          │
│  - Typically zero for fully controlled environments        │
│  - May apply to greenhouse rainwater harvesting            │
│  - Relevant for outdoor/hybrid systems                     │
└────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────┐
│                    GREY WATER FOOTPRINT                    │
│  Volume of freshwater required to dilute pollutants to     │
│  meet water quality standards                              │
│                                                            │
│  Formula:                                                  │
│  Grey WF = (Load - Natural background) / (Cmax - Cnatural)│
│                                                            │
│  CEA Examples:                                             │
│  - Nutrient runoff/discharge                               │
│  - Cleaning chemical discharge                             │
│  - Pesticide discharge (if used)                           │
└────────────────────────────────────────────────────────────┘
```

### 1.2 Total Water Footprint

```
Total WF = Blue WF + Green WF + Grey WF

For most CEA facilities:
Total WF ≈ Blue WF + Grey WF (Green WF = 0)
```

### 1.3 Direct vs. Indirect Water Use

**Direct Water Use:**
- Water consumed within facility boundaries
- Irrigation, cooling, cleaning, employee use

**Indirect Water Use (Virtual Water):**
- Water embedded in purchased goods and services
- Energy production water footprint
- Materials and equipment production
- Transportation and distribution

## 2. Blue Water Footprint Calculation

### 2.1 Direct Irrigation Water

```
Blue WF_irrigation = Water supplied - Water returned

Components:
- Plant transpiration (largest)
- Evaporation from surfaces
- System leaks
- Water in harvested biomass
- Minus: Captured and reused water
```

**Example: Vertical Farm Lettuce**

```
Annual production: 500,000 kg lettuce
Water supplied: 10,000,000 L/year
Water recycled: 9,500,000 L/year
Water consumed: 500,000 L/year

Blue WF = 500,000 L / 500,000 kg = 1.0 L/kg lettuce

Compare to field lettuce (California):
Blue WF = 125 L/kg lettuce (irrigation)

Reduction: 99.2%
```

### 2.2 Recirculation Efficiency

```
Recirculation Rate = Water recycled / Water supplied × 100%

Example vertical farm:
RR = 9,500,000 / 10,000,000 × 100% = 95%

Water Use Efficiency = Product mass / Water consumed

WUE = 500,000 kg / 500,000 L = 1.0 kg/L
```

### 2.3 Evapotranspiration Estimation

**Penman-Monteith Equation (simplified for CEA):**

```
ET = (Δ × Rn + ρa × cp × VPD / ra) / (Δ + γ × (1 + rs/ra))

Where:
ET = Evapotranspiration (mm/day)
Δ = Slope of saturation vapor pressure curve
Rn = Net radiation
ρa = Air density
cp = Specific heat of air
VPD = Vapor pressure deficit
ra = Aerodynamic resistance
rs = Surface resistance
γ = Psychrometric constant
```

**Practical Estimation:**

```
ET (L/day) ≈ Crop transpiration coefficient × Leaf area × VPD × Hours

Example for lettuce:
Leaf area: 0.1 m² per plant
VPD: 1.0 kPa
Transpiration rate: 4 L/m²/day at 1.0 kPa
Plants: 100,000

Daily ET = 100,000 × 0.1 × 4 = 40,000 L/day
Annual ET = 40,000 × 365 = 14,600,000 L/year

But with dehumidification and recapture:
Actual consumption = 500,000 L/year (96.6% recaptured)
```

### 2.4 Cooling Water Consumption

**Evaporative Cooling Towers:**

```
Evaporation (L/hr) = Q (kW) × 0.85 / 2,260

Where:
Q = Heat rejection rate (kW)
0.85 = Cooling tower efficiency factor
2,260 = Latent heat of evaporation (kJ/kg)

Example:
Heat load: 500 kW (typical for 50,000 sq ft facility)
Operating hours: 4,000 hr/year

Annual evaporation = 500 × 0.85 / 2,260 × 4,000 = 753,000 L/year

Per kg lettuce = 753,000 / 500,000 = 1.5 L/kg
```

**Blowdown (water quality maintenance):**

```
Blowdown = Evaporation / (Cycles of concentration - 1)

With 4 cycles:
Blowdown = 753,000 / (4 - 1) = 251,000 L/year = 0.5 L/kg lettuce
```

**Total cooling water consumption:** 1.5 + 0.5 = 2.0 L/kg

### 2.5 Other Direct Blue Water

**Facility Cleaning:** 0.2 L/kg (estimated)
**Employee Use:** 50 employees × 50 L/day × 250 days = 625,000 L/year = 1.25 L/kg
**Humidification (if needed):** Variable, 0.5 L/kg (estimated)

**Total Direct Blue WF:**
- Irrigation: 1.0 L/kg
- Cooling: 2.0 L/kg
- Cleaning: 0.2 L/kg
- Employees: 1.25 L/kg
- Humidification: 0.5 L/kg
- **Total: 4.95 L/kg ≈ 5 L/kg lettuce**

## 3. Indirect Blue Water Footprint

### 3.1 Electricity Water Footprint

Water consumed in electricity generation:

```
Indirect WF_electricity = Electricity used × Water intensity of generation

U.S. Average: 1.9 L water per kWh (thermoelectric generation)
Renewable energy: 0.01-0.4 L/kWh (wind, solar PV low)
Hydropower: 17-22 L/kWh (reservoir evaporation)

Example vertical farm:
Electricity: 22 kWh/kg lettuce
Grid mix water intensity (NY): 1.5 L/kWh

Indirect WF_electricity = 22 × 1.5 = 33 L/kg lettuce
```

**Energy Type Comparison:**

| Energy Source | Water Intensity (L/kWh) |
|---------------|-------------------------|
| Coal (once-through cooling) | 1.4 |
| Coal (recirculating cooling) | 2.3 |
| Natural gas combined cycle | 0.8 |
| Nuclear | 2.5 |
| Solar PV | 0.03 |
| Wind | 0.01 |
| Hydropower | 17-22 |
| Geothermal | 0.15 |

**Implication:** Renewable energy transition reduces both carbon AND water footprint.

### 3.2 Materials and Inputs Water Footprint

Water embedded in purchased goods:

| Input | Water Footprint | Unit |
|-------|----------------|------|
| Nitrogen fertilizer | 1.5 | L/kg N |
| Phosphate fertilizer | 0.8 | L/kg P₂O₅ |
| Potassium fertilizer | 0.5 | L/kg K₂O |
| Rockwool growing media | 5.0 | L/kg |
| PET packaging | 8.0 | L/kg |
| Steel | 50 | L/kg |
| Aluminum | 150 | L/kg |
| Concrete | 1.0 | L/kg |

**Example Calculation:**

```
Annual inputs (500,000 kg lettuce production):
- N fertilizer: 1,600 kg × 1.5 = 2,400 L
- P fertilizer: 550 kg × 0.8 = 440 L
- K fertilizer: 2,400 kg × 0.5 = 1,200 L
- Rockwool: 1,250 kg × 5.0 = 6,250 L
- PET packaging: 6,000 kg × 8.0 = 48,000 L

Total materials WF: 58,290 L/year = 0.12 L/kg lettuce
```

### 3.3 Total Water Footprint

```
Component                   L/kg lettuce    % of total
─────────────────────────────────────────────────────
Direct Blue (irrigation)          1.0           2.6%
Direct Blue (other)               4.0          10.3%
Indirect (electricity)           33.0          84.6%
Indirect (materials)              0.12          0.3%
Grey (nutrient discharge)         1.0           2.6%
─────────────────────────────────────────────────────
TOTAL                            39.1         100%

Comparison to field lettuce:
Direct + Grey: 5.1 L/kg (87% reduction vs. field's 40 L/kg)
Total (incl. electricity): 39.1 L/kg (field lettuce total ≈ 70 L/kg, 44% reduction)
```

**Key Insight:** While direct water use is dramatically lower, indirect water (primarily from electricity generation) is significant. Total water footprint advantage depends on electricity generation method.

## 4. Grey Water Footprint Calculation

### 4.1 Grey WF Formula

```
Grey WF = L / (Cmax - Cnatural)

Where:
L = Pollutant load discharged (kg)
Cmax = Maximum acceptable concentration (kg/L)
Cnatural = Natural background concentration (kg/L)
```

### 4.2 Nutrient Discharge Example

**Nitrogen Discharge:**

```
Scenario: Nutrient solution discharge
Annual N discharge: 50 kg
Cmax (drinking water standard): 0.00001 kg/L (10 mg/L)
Cnatural: 0.000001 kg/L (1 mg/L)

Grey WF_N = 50 / (0.00001 - 0.000001)
          = 50 / 0.000009
          = 5,555,556 L
          = 11.1 L per kg lettuce (500,000 kg production)
```

**Phosphorus Discharge:**

```
Annual P discharge: 15 kg
Cmax: 0.0001 kg/L (100 μg/L, surface water standard)
Cnatural: 0.00001 kg/L (10 μg/L)

Grey WF_P = 15 / (0.0001 - 0.00001)
          = 15 / 0.00009
          = 166,667 L
          = 0.3 L per kg lettuce
```

**Total Grey WF:** 11.1 + 0.3 = 11.4 L/kg

**However:** Most advanced CEA systems have near-zero discharge due to:
- Closed-loop recirculation
- Nutrient recovery systems
- Zero-discharge facility design

**With zero discharge:** Grey WF = 0 L/kg

This represents a significant advantage over field agriculture where nutrient runoff is common.

## 5. Water Scarcity Assessment

### 5.1 Water Scarcity Indicators

**Falkenmark Indicator:**
```
Water availability < 1,700 m³/person/year = Water stress
Water availability < 1,000 m³/person/year = Water scarcity
Water availability < 500 m³/person/year = Absolute scarcity
```

**Water Stress Index (WSI):**
```
WSI = Water withdrawal / Water availability

WSI > 0.4 = High stress
WSI 0.2-0.4 = Medium stress
WSI < 0.2 = Low stress
```

**Pfister et al. Water Stress Index (used in LCA):**

Ranges from 0 to 1, considering:
- Water availability
- Variability (seasonality)
- Human water requirements
- Environmental flow requirements

### 5.2 Regionalized Water Footprint

Apply water scarcity characterization factors:

```
Water Scarcity Footprint = Blue WF × WSI

Example:
Location 1 - New York (low stress, WSI = 0.05):
Blue WF = 5 L/kg
Scarcity footprint = 5 × 0.05 = 0.25 L_eq/kg

Location 2 - Arizona (high stress, WSI = 0.8):
Blue WF = 5 L/kg (same facility design)
Scarcity footprint = 5 × 0.8 = 4.0 L_eq/kg

16× higher scarcity impact despite identical water consumption
```

**Implication:** CEA water advantages are most significant in water-scarce regions.

### 5.3 Seasonal Variability

Consider temporal water availability:

```
Monthly WSI variation example (Mediterranean climate):

Month        Availability    Demand    WSI
January      High            Low       0.15
April        Medium          Medium    0.35
July         Low             High      0.85
October      Medium          Low       0.25

Average annual WSI: 0.40 (Medium stress)

CEA advantage: Consistent year-round demand vs. peak seasonal field irrigation
```

## 6. Water Risk Assessment

### 6.1 WRI Aqueduct Water Risk Atlas

World Resources Institute tool assesses:

**Physical Risks:**
1. Baseline water stress
2. Interannual variability
3. Seasonal variability
4. Groundwater table decline
5. Riverine flood risk
6. Coastal flood risk
7. Drought risk

**Regulatory/Reputational Risks:**
8. Upstream protected land
9. Threatened amphibians
10. Wastewater treatment access
11. Unimproved/no drinking water
12. Unimproved/no sanitation

**Overall Risk Score:** Aggregated 0-5 (Low to Extremely High)

### 6.2 Facility Siting Considerations

**High-Priority Locations for CEA (Water Perspective):**
- High water stress regions (maximize water-saving advantage)
- Drought-prone areas
- Regions with declining groundwater
- Areas with seasonal water scarcity
- Locations near water-stressed population centers

**Risk Mitigation:**
- Municipal water supply agreements
- On-site water storage (resilience)
- Rainwater harvesting systems
- Treatment and reuse infrastructure
- Contingency water sources

### 6.3 Water Risk Scoring Model

```
Risk Level = (Water Stress × Physical Risk) + (Regulatory Risk × 0.5)

Example scoring:
Location A (Phoenix, AZ):
- Water stress: 4 (High)
- Physical risk: 4 (Declining groundwater, drought)
- Regulatory risk: 3 (Stringent water rights)
- Risk Level = (4 × 4) + (3 × 0.5) = 17.5/25 (HIGH)

Location B (Seattle, WA):
- Water stress: 1 (Low)
- Physical risk: 1 (Abundant surface water)
- Regulatory risk: 2 (Moderate regulation)
- Risk Level = (1 × 1) + (2 × 0.5) = 2/25 (LOW)

Decision: CEA in Phoenix has higher business risk BUT higher environmental value
         due to water scarcity context
```

## 7. Water Efficiency and Stewardship

### 7.1 Water Stewardship Framework

**Alliance for Water Stewardship (AWS) Standard:**

**Five Outcomes:**
1. Good water governance
2. Sustainable water balance
3. Good water quality status
4. Important water-related areas (ecosystems)
5. Safe water, sanitation, and hygiene (WASH)

**CEA Application:**

**Step 1: Gather and understand**
- Assess facility water use
- Understand catchment context
- Identify stakeholders

**Step 2: Commit and plan**
- Public commitment to stewardship
- Set site water targets
- Develop water stewardship plan

**Step 3: Implement**
- Execute improvement projects
- Collaborate with catchment stakeholders
- Report progress

**Step 4: Evaluate**
- Monitor performance
- Periodic review
- Continuous improvement

**Step 5: Communicate and disclose**
- Public reporting (CDP Water, AWS)
- Stakeholder engagement
- Transparency

### 7.2 Water Efficiency Technologies

**CEA-Specific Strategies:**

**1. Advanced Recirculation:**
```
Target: >98% recirculation rate
Technologies:
- Closed-loop hydroponics
- Condensate capture from dehumidification
- Greywater recycling
- Reverse osmosis treatment
```

**2. Precision Irrigation:**
```
Savings potential: 20-30%
Technologies:
- Sensor-based control (soil moisture, plant stress)
- Fertigation optimization
- Demand-driven scheduling
- Leak detection systems
```

**3. Cooling System Optimization:**
```
Savings potential: 30-50%
Strategies:
- Air-cooled chillers (zero water)
- Indirect evaporative cooling
- High cycles of concentration (>6)
- Cooling water reuse for irrigation
```

**4. Rainwater Harvesting:**
```
Potential: 20-100% of non-irrigation needs

Calculation:
Roof area: 5,000 m² (50,000 sq ft facility)
Annual rainfall: 1,000 mm
Runoff coefficient: 0.8
Harvestable water = 5,000 × 1.0 × 0.8 = 4,000 m³/year = 4,000,000 L

Non-irrigation needs: 2,000,000 L/year
Rainwater can supply: 100% (with adequate storage)
```

**5. Treatment and Reuse:**
```
Wastewater treatment for reuse:
- Sand/biofilter systems
- Constructed wetlands
- Membrane bioreactors
- UV disinfection

Target: 90-95% of wastewater reused
```

### 7.3 Water-Energy Nexus

Optimize for both:

```
Scenario Comparison (per kg lettuce):

Option A: Standard grid electricity + high water recirculation
- Electricity: 25 kWh
- Blue water: 3 L
- Carbon: 6.25 kg CO₂eq
- Water scarcity footprint: 0.15 L_eq (low stress region)

Option B: Solar PV + moderate water recirculation
- Electricity: 30 kWh (less efficient cooling, no grid backup)
- Blue water: 8 L
- Carbon: 0.3 kg CO₂eq
- Water scarcity footprint: 0.40 L_eq

Option C: Grid electricity + maximum water saving
- Electricity: 28 kWh (air-cooled systems, more energy-intensive)
- Blue water: 1.5 L
- Carbon: 7.0 kg CO₂eq
- Water scarcity footprint: 0.075 L_eq

Optimal choice depends on regional context:
- Water-scarce, carbon-intensive grid → Option C
- Water-abundant, carbon-intensive grid → Option A
- Either context with available renewable energy → Option B
```

## 8. ISO 14046 Water Footprint Standard

### 8.1 Standard Requirements

**ISO 14046:2014** - Environmental management — Water footprint — Principles, requirements and guidelines

**Key Principles:**
1. Life cycle perspective
2. Consideration of multiple environmental mechanisms
3. Water availability (scarcity) consideration
4. Site-specific assessment where appropriate
5. Transparency in methodology and assumptions

**Assessment Components:**

**Water Scarcity Footprint:** Volume-based indicators weighted by scarcity
**Water Degradation Footprint:** Quality impacts (acidification, eutrophication, ecotoxicity of water)

### 8.2 Impact Categories

**Commonly Assessed (per ISO 14046):**
1. Water scarcity (blue water consumption)
2. Human toxicity (water pollution)
3. Aquatic ecotoxicity
4. Freshwater eutrophication
5. Marine eutrophication
6. Acidification of freshwater

### 8.3 Reporting Requirements

**Water Footprint Profile Must Include:**
- Goal and scope definition
- Inventory analysis (blue, green water consumption)
- Impact assessment (scarcity-weighted)
- Interpretation and conclusions
- Data quality assessment
- Limitations and assumptions
- Verification statement (if disclosed publicly)

**Water Footprint Statement:**

"The water scarcity footprint of our lettuce production is 0.25 L_world_eq per kg, based on life cycle assessment following ISO 14046:2014. This represents a 92% reduction compared to conventionally-grown lettuce in California (3.2 L_world_eq/kg). Direct water consumption is 5 L/kg with 95% recirculation efficiency. The assessment includes Scope 3 water embedded in electricity and materials. The assessment was independently verified by [third party]. Full water footprint study available at [URL]."

## 9. Case Study: Greenhouse Tomato Water Footprint

**Facility Profile:**
- 10-acre greenhouse (43,560 m²)
- Location: Arizona (high water stress, WSI = 0.75)
- Production: 4,000 tonnes tomatoes/year
- Soilless culture, recirculating system

**Direct Blue Water Use:**

```
Irrigation supplied: 200,000 m³/year
Recirculated: 185,000 m³/year
Consumed (ET + system losses): 15,000 m³/year
= 3.75 L/kg tomato

Cooling (evaporative pads): 8,000 m³/year = 2.0 L/kg
Cleaning and other: 1,000 m³/year = 0.25 L/kg

Total direct blue: 6.0 L/kg tomato
```

**Indirect Blue Water:**

```
Electricity: 8 kWh/kg × 2.3 L/kWh (AZ grid) = 18.4 L/kg
Natural gas (heating): 0.5 m³/kg × 0.1 L/m³ = 0.05 L/kg
Materials: 0.2 L/kg

Total indirect blue: 18.65 L/kg
```

**Grey Water:**

```
Nutrient discharge: Minimal with recirculation
Cleaning chemicals: 0.5 L_eq/kg

Total grey: 0.5 L/kg
```

**Total Water Footprint:** 6.0 + 18.65 + 0.5 = **25.15 L/kg tomato**

**Water Scarcity Footprint:**

```
Blue WF × WSI = 24.65 L/kg × 0.75 = 18.5 L_eq/kg
```

**Comparison to Field Tomatoes (California):**

```
Field tomatoes:
- Direct + Grey: 50 L/kg
- Total: 65 L/kg
- Scarcity-weighted (WSI 0.6): 39 L_eq/kg

Greenhouse reduction:
- Total WF: 61% reduction
- Scarcity footprint: 53% reduction
```

**Key Findings:**
- Significant water savings even in water-intensive greenhouse operation
- Electricity water footprint substantial (need to consider energy source)
- Water savings most valuable in water-scarce Arizona context
- Recirculation is critical (without it, WF would be 50+ L/kg)

**Improvement Opportunities:**
1. Increase recirculation to 98% → Save 5 m³/year per tonne
2. Switch to air-cooled system → Eliminate 8,000 m³/year cooling water
3. Solar PV for electricity → Reduce indirect WF by 80%
4. Rainwater harvesting → Offset non-irrigation needs

**With all improvements:** 12 L/kg total, 6 L_eq/kg scarcity-weighted (69% reduction)

## Summary

Water footprint assessment using blue/green/grey categorization and scarcity weighting provides comprehensive understanding of water-related impacts. CEA facilities demonstrate significant direct water savings through recirculation, but indirect water (primarily from electricity generation) remains material. Regional water scarcity context is critical for evaluating CEA water advantages. ISO 14046 provides standardized methodology for transparent water footprint reporting.

## Key Takeaways

1. Water footprint includes blue (consumption), green (rain), and grey (pollution dilution) water
2. CEA typically achieves 90-95% direct water savings vs. conventional agriculture
3. Indirect water from electricity generation is significant (often 70-80% of total)
4. Recirculation efficiency is the critical parameter for CEA water performance
5. Water scarcity weighting accounts for regional availability and stress
6. CEA water advantages are most valuable in water-scarce regions
7. Water-energy nexus requires integrated optimization
8. ISO 14046 provides standardized water footprint methodology
9. Zero-discharge systems eliminate grey water footprint
10. Virtual water in supply chain should be quantified and managed

## Review Questions

1. Define blue, green, and grey water footprints. Which are most relevant for CEA?
2. Calculate blue water footprint for a facility consuming 5,000 m³/year producing 1,000 tonnes/year.
3. Why is indirect water from electricity significant? How does energy source affect total water footprint?
4. Explain the grey water footprint formula and calculate it for 10 kg nitrogen discharge (Cmax = 10 mg/L, Cnatural = 1 mg/L).
5. What is water stress index and why is regionalization important?
6. Compare water footprints of CEA in Phoenix (WSI 0.8) vs. Seattle (WSI 0.05) with identical blue WF.
7. Describe the Alliance for Water Stewardship framework and its application to CEA.
8. What are the five most effective water efficiency technologies for CEA?
9. Explain the water-energy nexus and trade-offs in optimization.
10. What are key requirements of ISO 14046 water footprint assessment?

## Practical Exercise

**Exercise: Complete Water Footprint Assessment for CEA Facility**

Conduct comprehensive water footprint analysis:

1. Quantify direct blue water consumption (all sources)
2. Calculate recirculation efficiency
3. Estimate indirect blue water (electricity, materials)
4. Assess grey water footprint (if applicable)
5. Calculate total water footprint per functional unit
6. Apply regional water scarcity factors
7. Compare to conventional agriculture benchmark
8. Identify top 3 water consumption hotspots
9. Design water efficiency improvement plan
10. Estimate improved water footprint
11. Prepare water footprint statement per ISO 14046

**Deliverable:** 8-10 page water footprint report with calculations, regional context, and improvement recommendations

## Additional Resources

**Standards:**
- ISO 14046:2014 - Water footprint standard
- Alliance for Water Stewardship Standard v2.0

**Methodologies:**
- Water Footprint Network: www.waterfootprint.org
- WRI Aqueduct Water Risk Atlas: www.wri.org/aqueduct
- WBCSD Global Water Tool: www.wbcsd.org

**Databases:**
- Water Footprint Network product gallery
- LCA databases (ecoinvent water flows)
- FAO AQUASTAT (national water statistics)

**Assessment Tools:**
- Water Footprint Assessment Tool (WFA)
- SimaPro/openLCA with water scarcity methods
- AWS Standard implementation guidance

---

**Next Lesson:** Lesson 6 - Energy Analysis and Modeling
