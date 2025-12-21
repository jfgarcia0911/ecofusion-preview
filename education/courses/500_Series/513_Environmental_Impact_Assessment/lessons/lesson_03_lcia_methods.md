# Lesson 3: Life Cycle Impact Assessment

**Course:** 513 - Environmental Impact Assessment
**Module:** 3 of 14
**Duration:** Week 3
**Learning Time:** 8-10 hours

## Learning Objectives

By the end of this lesson, you will be able to:
1. Explain the mandatory and optional elements of LCIA according to ISO 14044
2. Select and apply appropriate LCIA methodologies (ReCiPe, TRACI, CML)
3. Classify and characterize inventory flows into impact categories
4. Perform normalization and weighting analysis with awareness of limitations
5. Conduct uncertainty and sensitivity analysis of LCIA results
6. Interpret and compare LCIA results for decision-making
7. Prepare comparative assertions compliant with ISO standards

## Introduction

Life Cycle Impact Assessment (LCIA) translates the long list of resource use and emissions from the inventory phase (LCI) into a limited number of environmental impact indicators. This translation makes results interpretable and actionable for decision-makers. LCIA follows standardized methodologies that apply scientific models to link inventory flows to environmental impacts across categories such as climate change, acidification, eutrophication, and human toxicity.

## 1. LCIA Framework

### 1.1 LCIA Elements per ISO 14044

**Mandatory Elements:**
1. **Selection of impact categories, category indicators, and characterization models**
2. **Classification:** Assignment of LCI results to impact categories
3. **Characterization:** Calculation of category indicator results

**Optional Elements:**
4. **Normalization:** Calculation of magnitude relative to reference
5. **Grouping:** Sorting and possibly ranking categories
6. **Weighting:** Converting and aggregating indicator results across categories

### 1.2 LCIA Process Flow

```
┌────────────────────────────────────────────────────────────┐
│               Life Cycle Inventory Results                 │
│  (kg CO₂, kg SO₂, kg PO₄, kg 1,4-DCB eq., etc.)          │
└────────────┬───────────────────────────────────────────────┘
             │
             ↓
┌────────────────────────────────────────────────────────────┐
│  1. SELECTION OF IMPACT CATEGORIES & MODELS                │
│     - Climate change (GWP model)                           │
│     - Acidification (AP model)                             │
│     - Eutrophication (EP model)                            │
│     - Ecotoxicity (USEtox model)                           │
│     - Human toxicity (USEtox model)                        │
│     - etc.                                                 │
└────────────┬───────────────────────────────────────────────┘
             │
             ↓
┌────────────────────────────────────────────────────────────┐
│  2. CLASSIFICATION (Mandatory)                             │
│     Assign LCI flows to impact categories                  │
│     - CO₂, CH₄, N₂O → Climate change                       │
│     - SO₂, NOₓ, NH₃ → Acidification                        │
│     - NO₃⁻, PO₄³⁻ → Eutrophication                         │
└────────────┬───────────────────────────────────────────────┘
             │
             ↓
┌────────────────────────────────────────────────────────────┐
│  3. CHARACTERIZATION (Mandatory)                           │
│     Calculate category indicator results                   │
│     using characterization factors                         │
│     - kg CO₂ eq (for climate change)                       │
│     - kg SO₂ eq (for acidification)                        │
│     - kg PO₄ eq (for eutrophication)                       │
└────────────┬───────────────────────────────────────────────┘
             │
             ↓
┌────────────────────────────────────────────────────────────┐
│  4. NORMALIZATION (Optional)                               │
│     Express results relative to reference                  │
│     (e.g., per capita, per GDP)                            │
└────────────┬───────────────────────────────────────────────┘
             │
             ↓
┌────────────────────────────────────────────────────────────┐
│  5. GROUPING (Optional)                                    │
│     Sort categories by theme or priority                   │
└────────────┬───────────────────────────────────────────────┘
             │
             ↓
┌────────────────────────────────────────────────────────────┐
│  6. WEIGHTING (Optional)                                   │
│     Aggregate across categories using importance factors   │
│     → Single score result                                  │
└────────────────────────────────────────────────────────────┘
```

## 2. Impact Categories and Indicators

### 2.1 Major Impact Categories

**Climate Change**
- **Definition:** Change in radiative forcing due to greenhouse gas emissions
- **Indicator:** Global Warming Potential (GWP)
- **Unit:** kg CO₂ equivalents (kg CO₂ eq)
- **Mechanism:** GHG absorb infrared radiation, trap heat in atmosphere
- **Time horizon:** Typically 100 years (GWP₁₀₀)

**Ozone Depletion**
- **Definition:** Degradation of stratospheric ozone layer
- **Indicator:** Ozone Depletion Potential (ODP)
- **Unit:** kg CFC-11 equivalents
- **Mechanism:** Chlorine and bromine compounds destroy ozone molecules
- **Relevance to CEA:** Minimal (CFCs phased out in refrigerants)

**Human Toxicity**
- **Definition:** Adverse effects on human health from toxic substance exposure
- **Indicator:** Comparative Toxic Unit (CTU)
- **Unit:** CTUh (cases per kg emitted)
- **Pathways:** Inhalation, ingestion, dermal contact
- **Subcategories:** Cancer and non-cancer effects

**Particulate Matter Formation**
- **Definition:** Health impacts from fine particulate matter (PM₂.₅)
- **Indicator:** PM₂.₅ exposure
- **Unit:** Disease incidences or kg PM₂.₅ eq
- **Mechanism:** Respiratory and cardiovascular diseases

**Photochemical Ozone Formation**
- **Definition:** Formation of ground-level ozone (smog)
- **Indicator:** Photochemical Ozone Creation Potential (POCP)
- **Unit:** kg NOₓ eq or kg NMVOC eq
- **Mechanism:** NOₓ and VOCs react in sunlight to form ozone

**Acidification**
- **Definition:** Increase in acidity of soil and water
- **Indicator:** Acidification Potential (AP)
- **Unit:** kg SO₂ eq
- **Mechanism:** Acidifying substances (SO₂, NOₓ, NH₃) form acids
- **Impacts:** Soil degradation, aquatic ecosystem damage

**Terrestrial Eutrophication**
- **Definition:** Excessive nutrient enrichment of terrestrial ecosystems
- **Indicator:** Accumulated Exceedance (AE)
- **Unit:** mol N eq
- **Mechanism:** Nitrogen deposition exceeds critical loads

**Freshwater Eutrophication**
- **Definition:** Excessive nutrient enrichment of freshwater bodies
- **Indicator:** Phosphorus equivalents
- **Unit:** kg P eq
- **Mechanism:** Algal blooms, oxygen depletion, ecosystem disruption

**Marine Eutrophication**
- **Definition:** Excessive nutrient enrichment of marine ecosystems
- **Indicator:** Nitrogen equivalents
- **Unit:** kg N eq
- **Mechanism:** Similar to freshwater, but N-limited systems

**Ecotoxicity**
- **Definition:** Toxic effects on aquatic and terrestrial ecosystems
- **Indicator:** Comparative Toxic Unit for ecosystems (CTUe)
- **Unit:** CTUe (PAF·m³·day/kg)
- **Subcategories:** Freshwater, marine, terrestrial

**Land Use**
- **Definition:** Occupation and transformation of land areas
- **Indicator:** Biodiversity damage potential
- **Unit:** m²·year or species loss
- **Aspects:** Occupation, transformation, soil quality

**Water Consumption**
- **Definition:** Depletion of freshwater resources
- **Indicator:** Water scarcity footprint
- **Unit:** m³ water eq or m³ world eq
- **Regional variation:** Depends on local water scarcity

**Mineral Resource Scarcity**
- **Definition:** Depletion of mineral and metal resources
- **Indicator:** Surplus Ore Potential (SOP)
- **Unit:** kg Cu eq
- **Basis:** Future extraction effort required

**Fossil Resource Scarcity**
- **Definition:** Depletion of fossil fuel resources
- **Indicator:** Fossil depletion
- **Unit:** kg oil eq
- **Basis:** Upper heating value

### 2.2 Impact Category Selection for CEA

For typical CEA facilities, prioritize these categories:

**High Priority (Always Include):**
1. Climate change (electricity consumption)
2. Freshwater eutrophication (nutrient discharge)
3. Water consumption (irrigation water)
4. Fossil resource scarcity (energy sources)
5. Particulate matter (indirect from electricity)

**Medium Priority (Usually Include):**
6. Terrestrial acidification (fertilizer production)
7. Photochemical ozone formation (energy-related)
8. Land use (site occupation)
9. Mineral resource scarcity (infrastructure)

**Lower Priority (Include if Relevant):**
10. Human toxicity (pesticide use if applicable)
11. Ecotoxicity (chemical discharge if applicable)
12. Marine eutrophication (if coastal discharge)

## 3. Classification

Classification assigns LCI results to impact categories based on the environmental mechanism.

### 3.1 Classification Examples

**Climate Change:**
- CO₂ (carbon dioxide)
- CH₄ (methane)
- N₂O (nitrous oxide)
- HFCs, PFCs, SF₆ (fluorinated gases)

**Acidification:**
- SO₂ (sulfur dioxide)
- NOₓ (nitrogen oxides)
- NH₃ (ammonia)
- HCl (hydrochloric acid)

**Freshwater Eutrophication:**
- PO₄³⁻ (phosphate)
- P (elemental phosphorus)
- Phosphorus compounds

**Terrestrial Eutrophication:**
- NOₓ (nitrogen oxides)
- NH₃ (ammonia)
- N deposition

**Some substances contribute to multiple categories:**
- NOₓ → Climate change (N₂O), Acidification, Eutrophication, Photochemical ozone formation
- NH₃ → Acidification, Terrestrial eutrophication, Particulate matter formation

## 4. Characterization

Characterization quantifies the contribution of each substance to each impact category using characterization factors.

### 4.1 Characterization Equation

```
Impact Score_category = Σ (Mass_substance × Characterization Factor_substance)

Where:
- Impact Score = total impact in category indicator units
- Mass = amount of substance from LCI (kg)
- CF = characterization factor (impact per unit mass)
- Σ = sum over all substances contributing to category
```

### 4.2 Climate Change Characterization

**Global Warming Potential (GWP):**

GWP measures the radiative forcing impact of a GHG relative to CO₂ over a specified time horizon.

**GWP₁₀₀ Values (IPCC AR6):**
- CO₂: 1 (reference)
- CH₄ (fossil): 29.8
- CH₄ (biogenic): 27.2
- N₂O: 273
- SF₆: 25,200
- HFC-134a: 1,530

**Example Calculation:**

LCI results from vertical farm lettuce production:
- CO₂: 4,500 g
- CH₄: 15 g (fossil)
- N₂O: 2 g

```
Climate Change Impact = (CO₂ × 1) + (CH₄ × 29.8) + (N₂O × 273)
                      = (4,500 × 1) + (15 × 29.8) + (2 × 273)
                      = 4,500 + 447 + 546
                      = 5,493 g CO₂ eq
                      = 5.49 kg CO₂ eq per kg lettuce
```

**Interpretation:** Methane contributes 8% and N₂O contributes 10% to total GWP despite much smaller mass, due to high GWP factors.

### 4.3 Acidification Characterization

**Acidification Potential (AP):**

Measures contribution to acid deposition relative to SO₂.

**AP Values (various methods):**
- SO₂: 1.0 (reference)
- NOₓ (as NO₂): 0.7
- NH₃: 1.9
- HCl: 0.88

**Example Calculation:**

LCI results:
- SO₂: 5 g
- NOₓ: 10 g
- NH₃: 3 g

```
Acidification = (SO₂ × 1.0) + (NOₓ × 0.7) + (NH₃ × 1.9)
              = (5 × 1.0) + (10 × 0.7) + (3 × 1.9)
              = 5 + 7 + 5.7
              = 17.7 g SO₂ eq per kg lettuce
```

### 4.4 Eutrophication Characterization

**Freshwater Eutrophication:**

Based on phosphorus as limiting nutrient.

**EP Values:**
- PO₄³⁻: 1.0 (reference)
- P: 3.06
- P₂O₅: 1.34

**Example:**
- PO₄³⁻ emissions: 0.5 g
- Impact = 0.5 g PO₄ eq

**Terrestrial Eutrophication:**

Based on nitrogen accumulation.

**Values (mol N eq per kg):**
- NOₓ: 0.74
- NH₃: 2.88
- N deposition: 3.57

### 4.5 Human Toxicity Characterization

**USEtox Model:**

Characterization factors express toxic impact as Comparative Toxic Units (CTU).

```
CTUh = Emission [kg] × Effect Factor [cases/kg]

Where Effect Factor combines:
- Fate Factor: environmental persistence and distribution
- Exposure Factor: human intake
- Effect Factor: toxicological potency
```

**Example Substances (CTUh per kg emitted):**
- Lead (to air): 5.4 × 10⁻⁶
- Mercury (to water): 8.1 × 10⁻⁶
- Benzene (to air): 1.2 × 10⁻⁸
- Pesticides: Highly variable (10⁻¹⁰ to 10⁻⁴)

**Important:** Human toxicity results are highly uncertain due to:
- Limited toxicological data
- Complex exposure pathways
- Variable human susceptibility
- Long-term health effect modeling

## 5. LCIA Methodologies

### 5.1 ReCiPe Method

**Origin:** Netherlands (RIVM, CML, PRé Sustainability)
**Version:** ReCiPe 2016 (latest)
**Structure:** Hierarchist (H), Individualist (I), Egalitarian (E) perspectives

**Midpoint Impact Categories (18):**
1. Global warming
2. Stratospheric ozone depletion
3. Ionizing radiation
4. Ozone formation (Human health)
5. Ozone formation (Terrestrial ecosystems)
6. Fine particulate matter formation
7. Terrestrial acidification
8. Freshwater eutrophication
9. Marine eutrophication
10. Terrestrial ecotoxicity
11. Freshwater ecotoxicity
12. Marine ecotoxicity
13. Human carcinogenic toxicity
14. Human non-carcinogenic toxicity
15. Land use
16. Mineral resource scarcity
17. Fossil resource scarcity
18. Water consumption

**Endpoint Impact Categories (3):**
1. Human Health (DALY - Disability-Adjusted Life Years)
2. Ecosystems (species·year)
3. Resources ($)

**Damage Pathways:**
```
Midpoint          →          Endpoint

Climate change    →    Human health (heat stress, disease)
                  →    Ecosystems (species loss)

Acidification     →    Ecosystems (forest/aquatic damage)

Eutrophication    →    Ecosystems (biodiversity loss)

Toxicity          →    Human health (cancer, disease)
                  →    Ecosystems (species effects)

Resource use      →    Resources (surplus cost)
```

**When to Use ReCiPe:**
- Comprehensive analysis desired
- European context
- Want both midpoint and endpoint results
- Research and academic studies

### 5.2 TRACI Method

**Origin:** U.S. EPA
**Version:** TRACI 2.1 (latest)
**Geographic Scope:** North America (U.S.-specific)

**Impact Categories (10):**
1. Ozone depletion
2. Global warming
3. Smog formation
4. Acidification
5. Eutrophication
6. Carcinogenics (human health)
7. Non-carcinogenics (human health)
8. Respiratory effects
9. Ecotoxicity
10. Fossil fuel depletion

**Strengths:**
- U.S.-specific characterization factors
- Accounts for regional differences (e.g., electricity grid mix)
- Validated for North American conditions
- Required for some U.S. government applications

**When to Use TRACI:**
- U.S.-based study
- Comparing U.S. facilities
- Regulatory reporting in U.S.
- Regional variation important

### 5.3 CML Method

**Origin:** Leiden University (Netherlands)
**Version:** CML-IA baseline
**Approach:** Midpoint-only (problem-oriented)

**Impact Categories:**
1. Abiotic depletion (elements)
2. Abiotic depletion (fossil fuels)
3. Global warming (GWP100)
4. Ozone layer depletion (ODP)
5. Human toxicity
6. Freshwater aquatic ecotoxicity
7. Marine aquatic ecotoxicity
8. Terrestrial ecotoxicity
9. Photochemical oxidation
10. Acidification
11. Eutrophication

**Characteristics:**
- Well-established, widely used
- Conservative approach (midpoint only)
- Avoids uncertainties of endpoint modeling
- Good for comparative studies

**When to Use CML:**
- Want established, conservative method
- Midpoint results preferred
- International study
- Academic research

### 5.4 Other Methods

**ILCD (International Reference Life Cycle Data System):**
- European Commission JRC
- Recommends best methods for each category
- Uses methods from ReCiPe, CML, others

**IMPACT World+:**
- CIRAIG (Canada)
- Global coverage with regionalized factors
- 50+ midpoint categories
- 2 endpoint categories (human health, ecosystem quality)

**EF (Environmental Footprint):**
- European Commission
- Adapted from ILCD
- Required for EU Product Environmental Footprint studies

### 5.5 Method Selection Criteria

| Criterion | ReCiPe | TRACI | CML |
|-----------|--------|-------|-----|
| Geographic focus | Europe/Global | North America | Europe/Global |
| Comprehensiveness | High (18 midpoint) | Medium (10) | Medium (11) |
| Endpoint modeling | Yes | No | No |
| Toxicity detail | High | Medium | Medium |
| Resource categories | Good | Limited | Good |
| Regular updates | Yes | Periodic | Stable |
| Software support | Excellent | Good | Excellent |

**Recommendation for CEA Studies:**
- U.S.-based: TRACI 2.1
- Europe-based: ReCiPe 2016 (H) or EF method
- Global/comparative: ReCiPe 2016 (H) for consistency

## 6. Normalization and Weighting

### 6.1 Normalization

Normalization expresses impact category results relative to a reference value, enabling comparison across categories with different units.

**Normalization Equation:**

```
Normalized Impact = Impact Score / Reference Value

Common references:
- Per capita (per person per year)
- Per GDP (per monetary unit)
- Total regional/global impact per year
```

**Example Normalization:**

ReCiPe 2016 - World (H) normalization factors (per person per year):

| Impact Category | Reference Value | Unit |
|----------------|-----------------|------|
| Climate change | 8,610 kg CO₂ eq | per person·year |
| Terrestrial acidification | 55 kg SO₂ eq | per person·year |
| Freshwater eutrophication | 1.02 kg P eq | per person·year |
| Water consumption | 1,280 m³ | per person·year |

**Lettuce Production Example:**

Impact scores per kg lettuce:
- Climate change: 5.5 kg CO₂ eq
- Acidification: 0.018 kg SO₂ eq
- Water consumption: 0.020 m³

Normalized results:
- Climate change: 5.5 / 8,610 = 0.00064 person·year
- Acidification: 0.018 / 55 = 0.00033 person·year
- Water consumption: 0.020 / 1,280 = 0.000016 person·year

**Interpretation:** One kg of lettuce production represents 0.064% of average annual per capita climate change impact.

**Normalized Results Visualization:**

Normalization allows comparing impact categories on the same scale:
```
Impact Category        Normalized Score (×10⁻⁴ person·year)
Climate change         |████████████████████████| 6.4
Acidification          |████████████| 3.3
Eutrophication         |██████| 1.9
Water consumption      |█| 0.16
```

### 6.2 Weighting

Weighting assigns relative importance to impact categories and aggregates to a single score.

**WARNING:** Weighting involves value choices and is subjective. ISO 14044 prohibits weighting in studies for comparative assertions disclosed to the public.

**Weighting Equation:**

```
Single Score = Σ (Normalized Impact_i × Weight_i)

Where:
- Weight_i = importance factor for category i
- Σ Weight_i = 1.0 (typically)
```

**Weighting Approaches:**

**1. Panel-based:**
- Expert or stakeholder panel assigns weights
- Reflects societal preferences
- Example: ReCiPe endpoint weighting

**2. Distance-to-target:**
- Based on gap between current and policy target
- Larger gaps receive higher weights
- Example: EF method weighting

**3. Monetary:**
- Express impacts in economic terms
- Willingness to pay or damage costs
- Example: Eco-costs method

**ReCiPe 2016 Endpoint Weighting (Example):**

Hierarchist perspective equal weighting:
- Human Health: 33.3%
- Ecosystems: 33.3%
- Resources: 33.3%

**Single Score Calculation:**

Endpoint impacts for 1 kg lettuce (ReCiPe H):
- Human Health: 0.00045 DALY
- Ecosystems: 0.000012 species·year
- Resources: $0.08

Single Score = (0.00045 × 0.333) + (0.000012 × 0.333) + (0.08 × 0.333)
             = 0.00015 + 0.000004 + 0.027
             = 0.027 points

**Cautions on Weighting:**
1. Value-laden and subjective
2. Can obscure important impacts
3. Reduces transparency
4. Different weighting schemes produce different results
5. Not allowed for public comparative claims per ISO 14044

**When to Use Weighting:**
- Internal decision-making only
- Single score needed for simplification
- Stakeholder preferences documented
- Multiple weighting scenarios tested
- Detailed midpoint results also reported

## 7. Uncertainty in LCIA

### 7.1 Sources of LCIA Uncertainty

**Characterization Factor Uncertainty:**
- Model parameter uncertainty
- Variability in environmental conditions
- Incomplete scientific understanding
- Example: GWP values revised with each IPCC report

**Model Uncertainty:**
- Choice of impact assessment method
- Pathway assumptions
- Spatial and temporal averaging
- Example: Different toxicity models produce different results

**Normalization Uncertainty:**
- Reference year selection
- Geographic scope
- Data completeness for reference system

**Weighting Uncertainty:**
- Subjective value choices
- Panel representativeness
- Cultural and regional differences

### 7.2 Uncertainty Analysis Methods

**Method 1: Characterization Factor Ranges**

Report uncertainty ranges for key factors:

GWP₁₀₀ (AR6 with uncertainty):
- CO₂: 1 (reference)
- CH₄: 27.9-31.8 (90% confidence interval)
- N₂O: 261-286 (90% confidence interval)

**Method 2: Monte Carlo with LCIA**

Propagate LCI uncertainty through LCIA:
1. Run Monte Carlo on LCI (as in Lesson 2)
2. Calculate impact scores for each iteration
3. Analyze distribution of impact results

**Method 3: Alternative Method Comparison**

Calculate results using multiple LCIA methods:

Climate change impact for 1 kg lettuce:
- ReCiPe 2016: 5.5 kg CO₂ eq
- TRACI 2.1: 5.4 kg CO₂ eq
- CML-IA: 5.6 kg CO₂ eq

Range: ±2% (low uncertainty for climate change)

Human toxicity impact:
- ReCiPe 2016: 0.00032 CTUh
- TRACI 2.1: 0.00089 CTUh
- CML-IA: 0.00041 CTUh

Range: -64% to +178% (high uncertainty for toxicity)

**Reporting Uncertainty:**

"Climate change impacts are estimated at 5.5 kg CO₂ eq per kg lettuce with ±15% uncertainty (95% CI) based on Monte Carlo simulation. Results are consistent across multiple LCIA methods (±2%). Human toxicity results have high uncertainty (±170%) due to model differences and should be interpreted with caution."

## 8. Interpretation and Comparison

### 8.1 Identifying Significant Issues

**Contribution Analysis:**

Determine which life cycle stages, processes, or substances contribute most to each impact category.

**Example for Vertical Farm Lettuce - Climate Change:**

| Life Cycle Stage | CO₂ eq (kg) | Contribution (%) |
|------------------|-------------|-------------------|
| Electricity - Lighting | 4.0 | 73% |
| Electricity - HVAC | 0.8 | 15% |
| Infrastructure (amortized) | 0.4 | 7% |
| Nutrients | 0.2 | 4% |
| Packaging | 0.1 | 2% |
| **Total** | **5.5** | **100%** |

**Key Finding:** Lighting electricity dominates climate change impact (73%).

**Multi-Category Hotspot Analysis:**

| Process | Climate | Eutro. | Water | Overall Priority |
|---------|---------|--------|-------|------------------|
| LED lighting | High | Low | Low | **High** |
| HVAC | Medium | Low | Low | Medium |
| Nutrients | Low | High | Low | **High** |
| Water system | Low | Medium | High | **High** |
| Packaging | Low | Low | Low | Low |

### 8.2 Comparative Assertions

When comparing alternatives (e.g., CEA vs. conventional agriculture), ISO 14044 requires:

**Requirements for Public Comparisons:**
1. Identical functional unit
2. Identical system boundaries
3. Same LCIA methods
4. Equivalent data quality
5. Critical review by external expert
6. Uncertainty and sensitivity analysis
7. Transparent reporting

**Statistical Significance:**

Test whether differences are statistically meaningful:

```
Alternative A: 5.5 ± 0.8 kg CO₂ eq (95% CI)
Alternative B: 8.2 ± 1.2 kg CO₂ eq (95% CI)

Difference: 2.7 kg CO₂ eq
Combined uncertainty: √(0.8² + 1.2²) = 1.44 kg CO₂ eq

Difference > 2 × Combined uncertainty?
2.7 > 2 × 1.44 = 2.88?
No - Not statistically significant at 95% confidence level

Conclusion: Cannot claim Alternative A is better with high confidence
```

**Trade-off Analysis:**

Improvements in one impact category may worsen another:

Example: Switching from HPS to LED lighting in greenhouse
- Climate change: Improved (50% less electricity)
- Mineral resource scarcity: Worsened (rare earth elements in LEDs)
- Human toxicity: Worsened (electronics production)

→ Overall: Net positive, but recognize trade-offs

### 8.3 Interpretation Completeness Check

**ISO 14044 Completeness Checklist:**

✓ All relevant impact categories included?
✓ All significant life cycle stages included?
✓ System boundaries consistent across alternatives?
✓ Data quality adequate for goal?
✓ Exclusions justified and documented?
✓ Assumptions stated and reasonable?
✓ Uncertainties identified and quantified?
✓ Sensitivities tested?
✓ Results consistent with goal and scope?

## 9. Case Study: LCIA Results for Vertical Farm

Continuing the lettuce production case study from Lesson 2:

### Characterized Impact Results (per kg lettuce)

| Impact Category | Result | Unit |
|----------------|--------|------|
| Climate change | 5.49 | kg CO₂ eq |
| Ozone depletion | 2.1 × 10⁻⁷ | kg CFC-11 eq |
| Human toxicity, cancer | 3.2 × 10⁻⁸ | CTUh |
| Human toxicity, non-cancer | 1.8 × 10⁻⁷ | CTUh |
| Particulate matter | 2.8 × 10⁻⁴ | Disease incidences |
| Photochemical ozone form. | 0.015 | kg NOₓ eq |
| Acidification | 0.018 | kg SO₂ eq |
| Eutrophication, freshwater | 0.0011 | kg P eq |
| Eutrophication, terrestrial | 0.042 | mol N eq |
| Ecotoxicity, freshwater | 0.12 | CTUe |
| Land use | 0.085 | m²·year crop eq |
| Water consumption | 0.020 | m³ |
| Mineral resource scarcity | 0.35 | kg Cu eq |
| Fossil resource scarcity | 1.85 | kg oil eq |

### Contribution Analysis - Climate Change

```
Electricity production       87%  ████████████████████
Infrastructure (amortized)    7%  ██
Nutrient production          4%  █
Packaging production         2%  █
Other                        <1%
```

### Normalized Results (World, per person·year)

```
Impact Category              Normalized Score (×10⁻⁴)
Climate change               ████████████████ 6.4
Fossil resource scarcity     ██████████████ 5.8
Acidification                ████████ 3.3
Particulate matter           ██████ 2.5
Eutrophication, freshwater   ████ 1.8
Water consumption            █ 0.4
```

**Interpretation:** Climate change and fossil resource scarcity are the most significant impact categories relative to average per capita impacts.

### Comparison to Field Lettuce Production

| Impact Category | Vertical Farm | Field | Difference |
|----------------|---------------|-------|------------|
| Climate change (kg CO₂ eq) | 5.5 | 0.8 | **+588%** |
| Water consumption (m³) | 0.020 | 0.25 | **-92%** |
| Eutrophication, FW (kg P eq) | 0.0011 | 0.0045 | -76% |
| Land use (m²·year) | 0.085 | 1.2 | -93% |
| Fossil resources (kg oil eq) | 1.85 | 0.45 | +311% |

**Key Findings:**
- Vertical farm has significantly higher climate change and fossil resource impacts due to electricity consumption
- Vertical farm has much lower water consumption, land use, and eutrophication
- Trade-offs exist: energy intensity vs. resource efficiency

**Sensitivity Analysis:**

If vertical farm uses 100% renewable electricity:
- Climate change: 0.4 kg CO₂ eq (-93%, now better than field)
- Other categories: Minimal change

→ **Conclusion:** Energy source is critical determinant of vertical farm environmental performance

## Summary

Life Cycle Impact Assessment translates LCI results into interpretable environmental impact indicators using standardized methods and models. Key elements include:

- Classification and characterization (mandatory) convert inventory to impact scores
- Multiple LCIA methods exist (ReCiPe, TRACI, CML); select appropriate for context
- Normalization and weighting (optional) enable comparison across categories
- Uncertainty in LCIA is significant, especially for toxicity categories
- Comparative assertions require rigorous methodology and critical review
- Contribution analysis identifies hotspots for improvement
- Trade-offs between impact categories are common

For CEA facilities, LCIA typically shows energy-related impacts as dominant, with trade-offs between energy use and resource efficiency.

## Key Takeaways

1. LCIA consists of mandatory (classification, characterization) and optional (normalization, weighting) elements
2. Select LCIA method based on geographic scope and study goals
3. Climate change, eutrophication, and water consumption are typically most relevant for CEA
4. Characterization uses scientifically-based factors to calculate impact scores
5. Normalization enables comparing impacts across categories
6. Weighting is subjective and prohibited for public comparative claims
7. Uncertainty is inherent in LCIA, especially for toxicity categories
8. Contribution analysis identifies improvement priorities
9. Comparative studies require consistent methodology and critical review
10. Trade-off analysis reveals where improving one impact worsens another

## Review Questions

1. What are the three mandatory elements of LCIA according to ISO 14044?
2. Explain the difference between midpoint and endpoint impact assessment.
3. Calculate the climate change impact of a process emitting 100 kg CO₂, 5 kg CH₄, and 1 kg N₂O.
4. Why is human toxicity characterization more uncertain than climate change characterization?
5. Compare ReCiPe, TRACI, and CML methods. When should each be used?
6. What is normalization, and how does it aid interpretation of LCA results?
7. Why does ISO 14044 prohibit weighting in studies disclosed to the public?
8. Describe contribution analysis and explain its importance for identifying improvement opportunities.
9. What requirements must be met for comparative assertions per ISO 14044?
10. How should trade-offs between impact categories be addressed in interpretation?

## Practical Exercise

**Exercise: Conduct LCIA for your CEA facility design**

Using the LCI data developed in Lesson 2's exercise:

1. Select appropriate LCIA method for your geographic region
2. Classify inventory flows to impact categories
3. Calculate characterized impact scores for 5-10 key categories
4. Perform contribution analysis to identify hotspots
5. Normalize results using appropriate reference
6. Create visualizations (bar charts, pie charts) of results
7. Interpret findings and identify 3 priority improvement areas
8. Conduct sensitivity analysis on 2 key parameters

**Deliverable:** 6-8 page LCIA report with calculations, figures, and interpretation

**Software:** Use openLCA, SimaPro, or manual calculations in spreadsheet

## Additional Resources

**LCIA Methods Documentation:**
- ReCiPe 2016: www.rivm.nl/en/life-cycle-assessment-lca/recipe
- TRACI 2.1: www.epa.gov/chemical-research/tool-reduction-and-assessment-chemicals-and-other-environmental-impacts-traci
- CML-IA: www.universiteitleiden.nl/en/research/research-output/science/cml-ia-characterisation-factors

**Impact Assessment Tools:**
- USEtox model (toxicity): www.usetox.org
- Water scarcity footprint: www.waterfootprint.org
- Biodiversity impact: www.globio.info

**Scientific Literature:**
- Hauschild et al. (2018) "Life Cycle Assessment: Theory and Practice"
- Rosenbaum et al. (2018) "The Glasgow consensus on the delineation between life cycle assessment and risk assessment"
- Huijbregts et al. (2017) "ReCiPe2016: a harmonised life cycle impact assessment method at midpoint and endpoint level"

---

**Next Lesson:** Lesson 4 - Carbon Footprint Analysis
