# Activity 1: Life Cycle Assessment Case Study

**Course:** 513 - Environmental Impact Assessment
**Activity Type:** Hands-on Analysis
**Duration:** 6-8 hours
**Group Size:** Individual or teams of 2-3
**Deliverable:** Complete LCA report (10-15 pages)

---

## Learning Objectives

By completing this activity, you will:
1. Apply ISO 14040/14044 LCA methodology to a real CEA system
2. Define appropriate goal, scope, and functional unit
3. Conduct life cycle inventory using primary and secondary data
4. Calculate characterized impacts using ReCiPe or TRACI method
5. Interpret results and identify improvement opportunities
6. Prepare a professional LCA report

---

## Scenario

You are an environmental consultant hired by **GreenLeaf Farms**, a company planning to build a new vertical farming facility in your region. They want to understand the environmental performance of their proposed system compared to conventional field agriculture and need an LCA to support sustainability claims and identify optimization opportunities.

---

## Facility Specifications

**Proposed Vertical Farm:**
- Location: [Select city in your region]
- Size: 50,000 sq ft (4,645 m²)
- Crop: Leafy greens (lettuce mix)
- Annual production: 500,000 kg (500 tonnes)
- Growing method: Vertical racks, hydroponic NFT
- Light source: LED (2.8 μmol/J efficacy)
- Growing cycles: 28 days per cycle, 13 cycles/year
- Energy consumption: 11,000,000 kWh/year
- Water supply: Municipal water, closed-loop recirculation
- Water consumption: 2,500,000 L/year (95% recycled)
- Nutrient inputs: 1,600 kg N, 550 kg P₂O₅, 2,400 kg K₂O per year
- Growing media: Rockwool, 1,250 kg/year
- Packaging: PET clamshells, 6,000 kg/year
- Building: Steel frame with insulated panels
- Equipment: 1,000 LED fixtures, HVAC, pumps, controls
- Facility lifespan: 30 years
- Equipment lifespan: 10 years (LEDs, HVAC)

---

## Task 1: Goal and Scope Definition (1-2 hours)

### 1.1 Goal Statement

Write a complete goal statement addressing:
- Purpose of the study
- Intended application
- Target audience
- Whether results will be used for comparative assertions disclosed to public
- Commissioner of the study

**Template:**
```
The goal of this LCA study is to [purpose] for [system]. The intended
application is to [use]. The target audience includes [stakeholders].
[This study will/will not] be used in comparative assertions disclosed
to the public. The study is commissioned by [organization].
```

### 1.2 Functional Unit

Define and justify the functional unit for this study. Consider:
- Mass-based (kg lettuce)
- Nutritional-based (kcal, protein)
- Service-based (servings)

**Recommended:** 1 kg lettuce (fresh weight, at farm gate)

### 1.3 System Boundaries

**Draw a system boundary diagram** showing all life cycle stages:
1. Infrastructure production (amortized)
2. Construction
3. Operations (1 year)
4. Distribution (to local market, 50 km average)
5. End-of-life (infrastructure only)

**Specify what is included and excluded:**
- Included: [List all processes]
- Excluded: [List and justify]

**Set cut-off criteria:** Processes contributing <1% of mass or energy may be excluded if documented.

---

## Task 2: Life Cycle Inventory (LCI) (2-3 hours)

### 2.1 Data Collection

For each life cycle stage, quantify inputs and outputs per functional unit (1 kg lettuce).

**2.1.1 Infrastructure (Amortized over 30 years)**

Use database values or estimates:

| Component | Quantity | Embodied Impact (kg CO₂eq) | Annual Amortized |
|-----------|----------|----------------------------|------------------|
| Steel structure | 100 tonnes | 180,000 | 6,000 |
| LED fixtures | 1,000 units | 150,000 | 15,000 |
| HVAC equipment | 20 units | 10,000 | 1,000 |
| Insulation | 500 m³ | 25,000 | 833 |
| Other | — | 50,000 | 1,667 |
| **Total** | — | **415,000** | **13,833/yr** |

Per kg lettuce: 13,833 / 500,000 = **0.028 kg CO₂eq/kg**

**2.1.2 Operations (Annual Basis)**

| Input | Annual Quantity | Per kg Lettuce | Data Source |
|-------|----------------|----------------|-------------|
| Electricity | 11,000,000 kWh | 22 kWh | Facility spec |
| Water | 2,500,000 L | 5 L | Facility spec |
| N fertilizer (urea) | 1,600 kg | 3.2 g | Facility spec |
| P fertilizer | 550 kg | 1.1 g | Facility spec |
| K fertilizer | 2,400 kg | 4.8 g | Facility spec |
| Rockwool media | 1,250 kg | 2.5 g | Facility spec |
| PET packaging | 6,000 kg | 12 g | Facility spec |
| Seeds | 25 kg | 0.05 g | Estimate |

**2.1.3 Distribution**

| Parameter | Value |
|-----------|-------|
| Distance to market | 50 km |
| Transport mode | Refrigerated truck |
| Load factor | 10 tonnes per trip |
| Trips per year | 50 |

Transport impact: 500 tonnes × 50 km × 0.18 kg CO₂/tonne·km = 4,500 kg CO₂eq/year
Per kg lettuce: 4,500 / 500,000 = **0.009 kg CO₂eq/kg**

**2.1.4 Outputs**

| Output | Annual Quantity | Per kg Lettuce |
|--------|----------------|----------------|
| Lettuce (product) | 500,000 kg | 1.0 kg |
| Plant waste | 50,000 kg | 0.1 kg |
| Used rockwool | 1,200 kg | 2.4 g |
| Wastewater (if any) | 125,000 L | 0.25 L |

### 2.2 Link to Background Data

For each input, identify the appropriate database process:
- **Electricity:** Use regional grid mix from ecoinvent or USDA LCI
  - Example: "Electricity, medium voltage, {US-NY}"
- **Water:** Municipal water supply process
- **Fertilizers:** Nutrient production processes
  - "Nitrogen fertilizer, as N"
  - "Phosphate fertilizer, as P₂O₅"
- **Materials:** Rockwool, PET plastic production
- **Transport:** Truck transport (ton·km)

**Software:** Use openLCA, SimaPro, or manual calculations in Excel with emission factors from EPA, ecoinvent, or literature.

### 2.3 LCI Results Table

Create a complete inventory table with all flows:

| Flow | Category | Amount | Unit | Source |
|------|----------|--------|------|--------|
| [List all elementary flows from background data] |

---

## Task 3: Life Cycle Impact Assessment (LCIA) (2 hours)

### 3.1 Select LCIA Method

**Choose:** ReCiPe 2016 Midpoint (H) or TRACI 2.1

Justify your selection based on geographic scope.

### 3.2 Calculate Characterized Impacts

Calculate impact scores for these categories (minimum):
1. Climate change (kg CO₂ eq)
2. Freshwater eutrophication (kg P eq)
3. Terrestrial acidification (kg SO₂ eq)
4. Water consumption (m³)
5. Fossil resource scarcity (kg oil eq)
6. Land use (m² crop eq·year)

**Example Calculation - Climate Change:**

```
Component                    kg CO₂eq/kg lettuce
────────────────────────────────────────────────
Infrastructure (amortized)         0.028
Electricity (11,000,000 kWh × 0.40 kg CO₂/kWh / 500,000 kg) = 8.80
Nitrogen fertilizer (3.2 g × 1.9 kg CO₂/kg)   0.006
Phosphate fertilizer               0.001
Potassium fertilizer               0.002
Rockwool (2.5 g × 1.8 kg CO₂/kg)  0.005
PET packaging (12 g × 3.5 kg CO₂/kg) 0.042
Distribution                       0.009
────────────────────────────────────────────────
TOTAL CLIMATE CHANGE              8.89 kg CO₂eq/kg

Note: Electricity dominates (99%)
```

Repeat for all impact categories.

### 3.3 Contribution Analysis

For each impact category, identify the top 3 contributors.

Create a table:

| Impact Category | 1st Contributor | 2nd | 3rd |
|----------------|----------------|-----|-----|
| Climate change | Electricity (99%) | Infrastructure (1%) | Packaging (<1%) |
| Water consumption | Electricity (indirect) | Direct water | Materials |
| [etc.] | | | |

### 3.4 Normalization (Optional)

Normalize results to world or regional per capita values.

```
Normalized Climate Change = 8.89 kg CO₂eq / 8,610 kg CO₂eq per cap/yr
                          = 0.001 person·year equivalent
```

Interpretation: Producing 1 kg lettuce equals 0.1% of average annual per capita climate change impact.

---

## Task 4: Comparison to Field Lettuce (1 hour)

Using literature values or database entries, compare your results to conventional field lettuce production (e.g., California field lettuce transported to your region).

**Typical Field Lettuce Values (literature):**
- Climate change: 0.8-1.5 kg CO₂eq/kg (depending on transport distance)
- Water consumption: 125 L/kg (irrigation)
- Freshwater eutrophication: 0.005 kg P eq/kg
- Land use: 1.2 m²·year/kg

**Create Comparison Table:**

| Impact Category | Vertical Farm | Field Lettuce | Difference |
|----------------|---------------|---------------|------------|
| Climate change (kg CO₂eq) | 8.89 | 1.2 | **+640%** |
| Water consumption (L) | 38* | 125 | **-70%** |
| Eutrophication (kg P eq) | [calculate] | 0.005 | [%] |
| Land use (m²·year) | 0.085 | 1.2 | **-93%** |

*Including indirect water from electricity

**Discuss trade-offs:** Vertical farm has higher energy/carbon but lower water/land.

---

## Task 5: Scenario Analysis (1 hour)

Evaluate the impact of using 100% renewable energy:

**Scenario 1: Grid Electricity (Baseline)**
- Carbon intensity: 0.40 kg CO₂/kWh
- Water intensity: 1.5 L/kWh

**Scenario 2: 100% Wind Energy (via PPA/RECs)**
- Carbon intensity: 0.01 kg CO₂/kWh
- Water intensity: 0.01 L/kWh

**Recalculate climate change and water consumption impacts.**

**Expected Result:**
- Climate change: 8.89 → ~0.30 kg CO₂eq/kg (97% reduction!)
- Now better than field lettuce
- Water consumption: Significant reduction

**Conclusion:** Energy source is critical determinant of environmental performance.

---

## Task 6: Improvement Recommendations (30 min)

Based on your results, recommend top 5 improvement strategies:

1. **Renewable Energy Procurement** (highest priority)
   - Impact: 97% carbon reduction
   - Implementation: Solar PV + wind PPA
   - Cost: Moderate initial investment, long-term savings

2. **LED Efficiency Upgrade**
   - From 2.8 to 3.5 μmol/J
   - Impact: 20% energy reduction
   - Payback: 2-4 years

3. [Continue with 3 more recommendations]

For each, specify:
- Expected environmental benefit
- Implementation requirements
- Economic considerations

---

## Deliverable: LCA Report Structure

**Executive Summary** (1 page)
- Key findings
- Major impacts
- Recommendations

**1. Introduction** (1 page)
- Background
- Study purpose

**2. Goal and Scope Definition** (2 pages)
- Goal statement
- Functional unit and justification
- System boundaries diagram
- Assumptions and limitations

**3. Life Cycle Inventory** (2-3 pages)
- Data sources
- LCI table
- Data quality assessment

**4. Life Cycle Impact Assessment** (3-4 pages)
- LCIA method selection
- Impact results by category
- Contribution analysis
- Comparison to field lettuce

**5. Scenario Analysis** (1-2 pages)
- Renewable energy scenario
- Comparative results

**6. Interpretation and Recommendations** (2 pages)
- Significant findings
- Limitations and uncertainties
- Improvement opportunities

**7. Conclusions** (1 page)

**Appendices**
- Detailed calculations
- Emission factors table
- References

---

## Assessment Rubric

| Criterion | Points | Evaluation |
|-----------|--------|------------|
| Goal & Scope (clarity, completeness) | 15 | Well-defined, justified |
| LCI Data Quality | 20 | Comprehensive, documented sources |
| LCIA Calculations | 25 | Correct methods, accurate results |
| Interpretation | 20 | Insightful analysis, hotspots identified |
| Comparison & Scenarios | 10 | Thorough analysis of alternatives |
| Recommendations | 10 | Practical, prioritized, justified |
| Report Quality | 10 | Professional, clear, well-organized |
| **Total** | **110** | (10 bonus points for exceptional work) |

**Grading:**
- A: 90-110 points
- B: 80-89 points
- C: 70-79 points
- Below 70: Revisions required

---

## Software Resources

**openLCA (Free):**
- Download: www.openlca.org
- Databases: Import USDA LCI (free) or ecoinvent (license)
- Tutorials: Available on YouTube and GreenDelta website

**Excel Template:**
- Available on course website
- Includes emission factor tables
- Built-in calculation formulas

**Emission Factor Sources:**
- EPA Emission Factors Hub
- ecoinvent database (via university license)
- DEFRA GHG Conversion Factors
- Literature values (cite sources)

---

## Submission Requirements

- **Format:** PDF document
- **File name:** LastName_LCA_Activity.pdf
- **Due date:** [As specified by instructor]
- **Submit:** Via course LMS
- **Include:** Excel calculations as appendix or separate file

---

## Tips for Success

1. **Start with goal and scope** - Clear definitions prevent scope creep
2. **Document everything** - Record all assumptions and sources
3. **Use consistent units** - Convert all data to functional unit basis
4. **Check reasonableness** - Compare to literature benchmarks
5. **Focus on hotspots** - Don't get lost in insignificant details
6. **Be transparent about limitations** - Acknowledge data gaps and uncertainties
7. **Make it visual** - Include charts and diagrams
8. **Proofread carefully** - Professional presentation matters

---

## Extension Opportunities

For students wanting to go deeper:
- Conduct full uncertainty analysis (Monte Carlo)
- Include more impact categories (toxicity, etc.)
- Model additional scenarios (building efficiency, waste valorization)
- Compare multiple crops (lettuce vs. herbs vs. tomatoes)
- Expand to full cradle-to-grave (including consumer use and disposal)

---

**This activity represents real-world consulting work. Take it seriously and produce a report you'd be proud to show a potential employer!**

