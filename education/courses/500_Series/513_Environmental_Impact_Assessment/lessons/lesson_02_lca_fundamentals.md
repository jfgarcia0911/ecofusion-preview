# Lesson 2: Life Cycle Assessment Fundamentals

**Course:** 513 - Environmental Impact Assessment
**Module:** 2 of 14
**Duration:** Week 2
**Learning Time:** 8-10 hours

## Learning Objectives

By the end of this lesson, you will be able to:
1. Explain the four phases of LCA according to ISO 14040/14044 standards
2. Define goal and scope for an LCA study of a CEA facility
3. Establish appropriate system boundaries and functional units
4. Conduct life cycle inventory (LCI) analysis using databases and primary data
5. Evaluate and select appropriate LCA software tools
6. Apply data quality requirements and uncertainty assessment methods

## Introduction

Life Cycle Assessment (LCA) is a systematic methodology for evaluating the environmental impacts of a product, process, or service throughout its entire life cycle—from raw material extraction through production, use, and end-of-life disposal or recycling. For CEA facilities, LCA provides a comprehensive framework for quantifying environmental performance and identifying opportunities for improvement across the entire value chain.

LCA is standardized internationally through ISO 14040:2006 (Principles and Framework) and ISO 14044:2006 (Requirements and Guidelines), ensuring consistency and comparability of studies worldwide. This lesson focuses on the foundational principles and the first two phases: Goal & Scope Definition and Life Cycle Inventory Analysis.

## 1. LCA Framework and Principles

### 1.1 ISO 14040/14044 Standards

**ISO 14040:2006** - Principles and Framework
This standard describes the principles and framework for conducting LCA studies, including:
- LCA phases and their interrelationships
- Iterative nature of LCA
- Applications and limitations
- Relationship to other environmental management tools
- Reporting and critical review requirements

**ISO 14044:2006** - Requirements and Guidelines
This standard provides detailed requirements and guidelines for:
- Goal and scope definition
- Inventory analysis procedures
- Impact assessment methods
- Interpretation techniques
- Reporting formats
- Critical review processes

### 1.2 LCA Phases

The LCA framework consists of four interconnected phases:

```
┌─────────────────────────────────────────────────────────┐
│                  LCA Framework                          │
│                                                         │
│  ┌──────────────────────────────────────────────┐     │
│  │  1. Goal and Scope Definition                │     │
│  │     - Purpose and audience                    │     │
│  │     - System boundaries                       │     │
│  │     - Functional unit                         │     │
│  └──────────────┬───────────────────────────────┘     │
│                 │                                      │
│                 ↓                                      │
│  ┌──────────────────────────────────────────────┐     │
│  │  2. Life Cycle Inventory (LCI)               │     │
│  │     - Data collection                         │     │
│  │     - Flow diagrams                           │←───┐│
│  │     - Calculations                            │    ││
│  └──────────────┬───────────────────────────────┘    ││
│                 │                                     ││
│                 ↓                                     ││
│  ┌──────────────────────────────────────────────┐    ││
│  │  3. Life Cycle Impact Assessment (LCIA)      │    ││
│  │     - Classification                          │    ││
│  │     - Characterization                        │    ││
│  │     - Normalization/weighting (optional)      │    ││
│  └──────────────┬───────────────────────────────┘    ││
│                 │                                     ││
│                 ↓                                     ││
│  ┌──────────────────────────────────────────────┐    ││
│  │  4. Life Cycle Interpretation                │    ││
│  │     - Identification of significant issues    │────┘│
│  │     - Evaluation (completeness, sensitivity)  │     │
│  │     - Conclusions and recommendations         │     │
│  └───────────────────────────────────────────────┘     │
│                                                        │
└────────────────────────────────────────────────────────┘
```

The phases are iterative—findings from later phases may require revisiting earlier phases to refine scope, collect additional data, or adjust assumptions.

### 1.3 LCA Applications

**Product Development and Improvement:**
- Identify environmental hotspots in product life cycle
- Compare design alternatives
- Optimize material selection and processes
- Support eco-design initiatives

**Strategic Planning:**
- Inform corporate sustainability strategies
- Set reduction targets for key impact categories
- Prioritize improvement investments
- Benchmark against competitors

**Marketing and Communication:**
- Support environmental product declarations (EPD)
- Substantiate green marketing claims
- Respond to customer inquiries
- Demonstrate sustainability leadership

**Policy and Regulation:**
- Inform regulatory development
- Evaluate policy effectiveness
- Support procurement criteria
- Guide incentive programs

**For CEA Facilities:**
- Compare CEA vs. conventional agriculture
- Evaluate technology options (LED vs. HPS lighting)
- Optimize energy and resource efficiency
- Assess impacts of different crops and growing methods

### 1.4 LCA Limitations

**Important Limitations to Recognize:**

1. **Snapshot in Time:** Results reflect current technology and practices
2. **Spatial Averaging:** Often uses average data, missing local variations
3. **Temporal Averaging:** Annual averages may miss seasonal variations
4. **Boundary Selection:** Results depend on where boundaries are drawn
5. **Data Quality:** Limited by availability and quality of data
6. **Impact Coverage:** Not all environmental issues can be quantified
7. **Social and Economic:** Traditional LCA focuses on environmental impacts only
8. **Uncertainty:** Models include assumptions and uncertainties

## 2. Goal and Scope Definition

### 2.1 Defining the Goal

The goal clearly states the intended application, reasons for carrying out the study, intended audience, and whether results will be used in comparative assertions disclosed to the public.

**Goal Statement Template:**

```
The goal of this LCA study is to [PURPOSE] for [PRODUCT/SYSTEM].
The intended application is to [USE OF RESULTS].
The target audience includes [STAKEHOLDERS].
[This study will/will not] be used in comparative assertions disclosed to the public.
The commissioner of the study is [ORGANIZATION].
```

**Example Goal Statement for CEA Facility:**

"The goal of this LCA study is to quantify the environmental impacts of tomato production in a vertical farming system for a commercial facility in New York. The intended application is to identify environmental hotspots and improvement opportunities to guide design optimization and inform sustainability reporting. The target audience includes facility designers, investors, and sustainability managers. This study will not be used in comparative assertions disclosed to the public. The commissioner of the study is GreenTech Farms, Inc."

**Key Questions to Address:**

1. **What is the reason for the study?**
   - Internal improvement
   - External communication
   - Regulatory compliance
   - Research and development

2. **Who is the intended audience?**
   - Internal management
   - Customers and consumers
   - Investors and financiers
   - Regulators
   - Academic community

3. **Will results be publicly disclosed?**
   - If yes, critical review required per ISO 14044
   - Higher standards for data quality and transparency
   - Need to avoid misrepresentation

4. **What decisions will the study inform?**
   - Design choices
   - Technology selection
   - Investment decisions
   - Policy development

### 2.2 Functional Unit

The functional unit defines what is being studied and provides a reference to which all inputs and outputs are related. It must be clearly defined and measurable.

**Functional Unit Criteria:**
1. **Relevant:** Reflects the function(s) of the system
2. **Measurable:** Can be quantified
3. **Consistent:** Same across alternatives being compared
4. **Appropriate:** Suitable for the goal of the study

**CEA Functional Unit Examples:**

**Production-Based:**
- 1 kg of leafy greens (fresh weight)
- 1 tonne of tomatoes (harvest weight)
- 1 kg of protein from fish (edible portion)

**Area-Based:**
- Production from 1 m² of growing area per year
- Production from 1 hectare per growing season

**Nutritional-Based:**
- 1000 kcal of food energy
- 100 g of protein
- Daily serving of vegetables (80g)

**Service-Based:**
- Feeding 1 person for 1 year
- Supplying 1 restaurant with greens for 1 month

**Selecting Functional Units - Example Analysis:**

For comparing lettuce production in CEA vs. field agriculture:

| Functional Unit | Advantages | Disadvantages | Best Use Case |
|----------------|------------|---------------|---------------|
| 1 kg lettuce | Simple, clear | Ignores nutritional differences | Internal analysis |
| 1 kg dry matter | Accounts for water content | Less intuitive | Technical comparison |
| 1000 kcal | Nutritional basis | Lettuce has low calories | Cross-crop comparison |
| 1 serving (80g) | Consumer-relevant | Variable serving definitions | Marketing communication |

**Recommendation:** Use primary functional unit (e.g., 1 kg lettuce) with supplementary units (e.g., per serving, per m², per nutritional value) for comprehensive analysis.

### 2.3 System Boundaries

System boundaries define which processes are included in the LCA and which are excluded. Boundaries can be temporal, geographical, and technological.

**Boundary Types:**

**1. Cradle-to-Grave:**
Includes all processes from raw material extraction through end-of-life
- Most comprehensive
- Required for full environmental profile
- Data intensive

**2. Cradle-to-Gate:**
Includes processes from raw material extraction to facility gate
- Focuses on production impacts
- Useful for product comparisons
- Excludes use and disposal phases

**3. Gate-to-Gate:**
Includes only processes within facility boundaries
- Useful for process optimization
- Limited scope for full impact assessment
- Requires clear definition of inputs/outputs

**4. Cradle-to-Cradle:**
Includes full cycle with recycling and closed-loop systems
- Appropriate for circular economy analysis
- Complex allocation challenges
- Reflects long-term system design

**Life Cycle Stages for CEA Facilities:**

```
┌─────────────────────────────────────────────────────────────────┐
│                    CEA FACILITY LIFE CYCLE                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  1. Raw Material Extraction & Processing                       │
│     - Steel, aluminum, glass extraction and production         │
│     - Plastic resin manufacturing                              │
│     - Electronics component production                         │
│     - Insulation materials                                     │
│                                                                 │
│  2. Infrastructure Manufacturing                               │
│     - Building materials production                            │
│     - HVAC equipment manufacturing                             │
│     - Lighting system production                               │
│     - Hydroponic system fabrication                            │
│     - Control systems and sensors                              │
│                                                                 │
│  3. Transportation to Site                                     │
│     - Freight of materials and equipment                       │
│     - Modal breakdown (truck, rail, ship)                      │
│                                                                 │
│  4. Construction and Installation                              │
│     - Site preparation                                         │
│     - Building construction                                    │
│     - Equipment installation                                   │
│     - Testing and commissioning                                │
│                                                                 │
│  5. Operations and Maintenance (largest impact typically)      │
│     - Energy consumption (lighting, HVAC, pumps)               │
│     - Water consumption                                        │
│     - Nutrients and growing media                              │
│     - Packaging materials                                      │
│     - Pest management inputs                                   │
│     - Labor (commuting)                                        │
│     - Maintenance and repairs                                  │
│     - Waste management                                         │
│                                                                 │
│  6. Distribution and Use                                       │
│     - Product transportation                                   │
│     - Cold storage                                             │
│     - Retail operations                                        │
│     - Consumer transport and storage                           │
│     - Food preparation                                         │
│                                                                 │
│  7. End-of-Life                                                │
│     - Building demolition                                      │
│     - Equipment dismantling                                    │
│     - Material recycling                                       │
│     - Waste disposal                                           │
│     - Site remediation                                         │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Inclusion/Exclusion Criteria:**

**Typically Included:**
- Processes contributing >1% of total mass or energy flows
- Processes with potentially significant environmental impacts
- Processes that differ between alternatives being compared

**May Be Excluded:**
- Processes with negligible contributions (<1% mass, energy, environmental impact)
- Processes identical across alternatives
- Capital equipment production (if service life >> study timeframe)
- Worker commuting (if not significantly different between alternatives)

**Must Justify Exclusions:**
- Document rationale for all exclusions
- Estimate potential impact of excluded processes
- Address in uncertainty analysis

**Example Boundary Definition for Vertical Farm Lettuce Production:**

```
INCLUDED:
✓ LED fixture production (significant energy in manufacturing)
✓ Electricity consumption (largest operational impact)
✓ Water consumption and wastewater treatment
✓ Nutrient solution production
✓ Growing media production and disposal
✓ Packaging materials
✓ Distribution within 100-mile radius
✓ Equipment replacement (10-year lifespan assumed)

EXCLUDED:
✗ Building construction (30-year life, multiple crops/uses)
✗ Worker commuting (negligible compared to energy use)
✗ Office equipment and IT infrastructure (<1% of total impacts)
✗ Consumer transport (beyond system boundary)
✗ Consumer food preparation (identical across alternatives)

SENSITIVITY ANALYSIS:
± Building construction impacts (test assumption)
± Distribution distance (50-mile vs. 200-mile scenarios)
```

### 2.4 Cut-off Criteria and Allocation

**Cut-off Rules:**
Processes may be excluded if they contribute less than a specified threshold to the total:
- Mass: <1% of total mass flows
- Energy: <1% of total energy use
- Environmental impact: <1% of total impact score

**Cumulative threshold:** Sum of all cut-offs should not exceed 5% of total impacts

**Allocation in Multi-Product Systems:**

When a process produces multiple products, environmental burdens must be allocated. ISO 14044 provides a hierarchy:

**Step 1: Avoid Allocation (Preferred)**
- Subdivide process into sub-processes
- Expand system boundaries to include additional functions

**Step 2: Physical Relationship**
- Allocate based on physical properties (mass, energy content)
- Reflects causal relationship between products and impacts

**Step 3: Other Relationship**
- Economic value allocation
- Use when physical relationship unclear

**CEA Allocation Example: Aquaponics System**

An aquaponics facility produces both fish (tilapia) and vegetables (lettuce):

Annual production:
- 50,000 kg tilapia
- 100,000 kg lettuce

Total electricity use: 2,000,000 kWh/year

**Allocation Method 1: Mass Basis**
- Total mass = 150,000 kg
- Tilapia: (50,000 / 150,000) × 2,000,000 = 666,667 kWh
- Lettuce: (100,000 / 150,000) × 2,000,000 = 1,333,333 kWh

**Allocation Method 2: Economic Value**
- Tilapia value: 50,000 kg × $8/kg = $400,000
- Lettuce value: 100,000 kg × $4/kg = $400,000
- Total value = $800,000
- Tilapia: ($400,000 / $800,000) × 2,000,000 = 1,000,000 kWh
- Lettuce: ($400,000 / $800,000) × 2,000,000 = 1,000,000 kWh

**Allocation Method 3: System Expansion (Avoided Allocation)**
- Compare aquaponics system to separate fish + vegetable production
- Credit aquaponics for avoided impacts of separate systems
- More complex but avoids arbitrary allocation

**Recommendation:** Perform sensitivity analysis using multiple allocation methods to understand impact on results.

## 3. Life Cycle Inventory Analysis

### 3.1 LCI Process Overview

Life Cycle Inventory (LCI) is the phase where all inputs (resources) and outputs (emissions, waste) associated with the system are identified and quantified.

**LCI Steps:**
1. Construct process flow diagrams
2. Collect data for each process
3. Validate data quality
4. Relate data to functional unit
5. Aggregate data
6. Refine system boundaries (iterative)

### 3.2 Process Flow Diagrams

Flow diagrams visually represent the system, showing all processes and their interconnections.

**Example: Lettuce Production in Vertical Farm**

```
┌─────────────────────────────────────────────────────────────┐
│                    SYSTEM BOUNDARY                          │
│                                                             │
│  INPUTS                  PROCESSES              OUTPUTS     │
│                                                             │
│  Electricity  ─────→  LED Lighting  ─────→  Heat           │
│  Water ───────────→  Irrigation    ─────→  Wastewater      │
│  Nutrients ────────→  Fertigation  ─────→  Effluent        │
│  Seeds ─────────────→  Germination ─────→  Waste biomass   │
│  Growing Media ─────→  Cultivation ─────→  Used media      │
│  CO₂ (supplemental)→  Plant Growth ─────→  O₂ (absorbed)   │
│  Packaging ─────────→  Harvest &   ─────→  Package waste   │
│  Cleaning agents ───→  Packing     ─────→  Product (lettuce)│
│                                                             │
│  INFRASTRUCTURE (amortized over facility life):             │
│  - Building materials                                       │
│  - LED fixtures                                             │
│  - HVAC equipment                                           │
│  - Growing systems                                          │
│  - Control systems                                          │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 3.3 Data Collection

**Data Types:**

**Primary Data (Site-Specific):**
- Direct measurements from facility
- Utility bills (electricity, water, gas)
- Purchase records (nutrients, media, packaging)
- Production records (yield, growing cycles)
- Waste manifests

**Advantages:** Accurate, specific to system, credible
**Disadvantages:** Time-consuming, costly, may not be available for new facilities

**Secondary Data (Generic):**
- Literature values
- Industry averages
- LCA databases (ecoinvent, GaBi, USDA LCI)
- Government statistics
- Supplier information

**Advantages:** Readily available, comprehensive
**Disadvantages:** May not match specific conditions, variable quality

**Data Quality Requirements (ISO 14044):**

The "Pedigree Matrix" evaluates data quality across five criteria:

| Criterion | Score 1 (Best) | Score 2 | Score 3 | Score 4 | Score 5 (Worst) |
|-----------|----------------|---------|---------|---------|-----------------|
| **Reliability** | Verified data | Verified but incomplete | Qualified estimate | Non-verified | Non-qualified estimate |
| **Completeness** | Representative data | <80% complete | <60% complete | <40% complete | Unknown completeness |
| **Temporal correlation** | <3 years old | <6 years | <10 years | <15 years | Age unknown or >15 years |
| **Geographical correlation** | Site-specific | Same country | Same continent | Different continent | Unknown origin |
| **Technological correlation** | Identical process | Similar process | Similar sector | Different sector | Unknown technology |

**Data Quality Goal:** Average score ≤ 3.0 for primary processes

**Data Collection Template:**

```
Process: Electricity Consumption - LED Lighting
Functional Unit: 1 kg lettuce

┌──────────────────────────────────────────────────────────────┐
│ Input Parameter: Electricity for lighting                    │
├──────────────────────────────────────────────────────────────┤
│ Value: 25.5 kWh per kg lettuce                              │
│ Source: Direct measurement, facility energy meter           │
│ Data Quality:                                                │
│   - Reliability: 1 (verified data from calibrated meter)     │
│   - Completeness: 1 (full year, all batches)                │
│   - Temporal: 1 (current year data)                         │
│   - Geographical: 1 (site-specific)                         │
│   - Technological: 1 (exact system)                         │
│ Overall Quality Score: 1.0 (excellent)                      │
│                                                              │
│ Calculation:                                                 │
│ - Total lighting electricity: 750,000 kWh/year              │
│ - Total lettuce production: 29,412 kg/year                  │
│ - Specific consumption: 750,000 / 29,412 = 25.5 kWh/kg      │
│                                                              │
│ Uncertainty: ±5% (based on measurement uncertainty and      │
│              yield variability)                              │
└──────────────────────────────────────────────────────────────┘
```

### 3.4 LCA Databases

**Major LCA Databases:**

**1. ecoinvent (Switzerland)**
- Most comprehensive global database
- 18,000+ datasets
- Covers energy, materials, chemicals, agriculture, transport, waste
- Unit process and system process formats
- Annual updates
- License required (~$200-10,000/year depending on user type)

**2. GaBi (Sphera)**
- 14,000+ datasets
- Strong in materials and chemicals
- Extension databases for specific sectors
- Integrated with GaBi software
- License required

**3. USDA LCI (United States)**
- Free, open-access
- Focus on agriculture and forestry
- Limited coverage compared to commercial databases
- Good for U.S. agricultural comparisons

**4. ELCD (European Life Cycle Database)**
- Free, EU-focused
- Core datasets for key processes
- More limited than ecoinvent
- Good quality, well-documented

**5. Ökobaudat (Germany)**
- Focus on construction materials
- Free access
- Useful for building components of CEA facilities

**Selecting Database Data:**

**Priority Hierarchy:**
1. Site-specific data for foreground processes (direct facility operations)
2. Technology-specific data from databases for background processes
3. Region-specific data when available
4. Global average data as last resort

**Example Database Selection:**

For electricity consumption in vertical farm:
1. Measure actual kWh consumption (primary data)
2. Use country/region-specific electricity grid mix from ecoinvent
   - "Electricity, medium voltage {US-NY}" for New York facility
   - Includes generation mix, transmission losses, infrastructure
3. If renewable energy purchased, use specific generation datasets:
   - "Electricity, from wind turbine {US}"
   - "Electricity, from photovoltaic {US}"

### 3.5 Calculations and Scaling

All LCI data must be scaled to the functional unit.

**Basic Calculation:**

```
Environmental Flow per FU = (Total Annual Flow / Total Annual Production) × FU size

Example:
Total annual electricity: 2,000,000 kWh/year
Total annual lettuce: 100,000 kg/year
Functional unit: 1 kg lettuce

Electricity per FU = (2,000,000 kWh / 100,000 kg) × 1 kg = 20 kWh/kg
```

**Allocation Calculation:**

```
Allocated Flow = Total Flow × Allocation Factor

Example (from aquaponics earlier):
Total electricity: 2,000,000 kWh/year
Allocation to lettuce (economic basis): 50%

Lettuce electricity = 2,000,000 × 0.50 = 1,000,000 kWh/year
Per kg lettuce = 1,000,000 / 100,000 kg = 10 kWh/kg
```

**Infrastructure Amortization:**

```
Amortized Impact per FU = (Total Infrastructure Impact / Total Production over Lifetime) × FU size

Example:
LED fixture production impact: 500 kg CO₂eq per fixture
Number of fixtures: 1,000
Total impact: 500,000 kg CO₂eq
Fixture lifespan: 10 years
Annual production: 100,000 kg lettuce/year
Total lifetime production: 1,000,000 kg lettuce

Amortized impact per kg = 500,000 / 1,000,000 = 0.5 kg CO₂eq/kg lettuce
```

### 3.6 LCI Results Format

LCI results are typically presented in a table format:

**Sample LCI Table for 1 kg Lettuce Production in Vertical Farm:**

| Flow Category | Flow Name | Amount | Unit |
|---------------|-----------|--------|------|
| **Resource Inputs** | | | |
| Energy carriers | Electricity, medium voltage, US-NY | 22.5 | kWh |
| Water | Water, deionized | 18.2 | L |
| Inorganic chemicals | Nitrogen fertilizer, as N | 3.2 | g |
| Inorganic chemicals | Phosphorus fertilizer, as P₂O₅ | 1.1 | g |
| Inorganic chemicals | Potassium fertilizer, as K₂O | 4.8 | g |
| Agricultural products | Seeds, lettuce | 0.05 | g |
| Plastics | Growing media, rockwool | 2.5 | g |
| Plastics | Packaging, PET clamshell | 12.0 | g |
| Air | Carbon dioxide, liquid | 35.0 | g |
| **Product Output** | | | |
| Agricultural products | Lettuce, fresh | 1.0 | kg |
| **Emissions to Air** | | | |
| Inorganic emissions | Heat, waste | 21.1 | kWh |
| Organic emissions | VOC from packaging | 0.15 | g |
| **Emissions to Water** | | | |
| Inorganic emissions | Nitrogen, total N | 0.8 | g |
| Inorganic emissions | Phosphorus, total P | 0.2 | g |
| **Waste Flows** | | | |
| Solid waste | Growing media, to disposal | 2.4 | g |
| Solid waste | Plant waste, to composting | 45.0 | g |
| Solid waste | Packaging waste, to recycling | 11.5 | g |

Note: This is illustrative; actual LCI includes hundreds to thousands of flows from background processes.

## 4. LCA Software Tools

### 4.1 Software Comparison

| Software | Developer | License Type | Cost Range | Database | Best For |
|----------|-----------|--------------|------------|----------|----------|
| **openLCA** | GreenDelta | Open source | Free | ecoinvent, USDA LCI, others | Students, researchers, budget projects |
| **SimaPro** | PRé Sustainability | Commercial | $10k-50k/year | ecoinvent, Agri-footprint, others | Industry standard, comprehensive |
| **GaBi** | Sphera | Commercial | $15k-60k/year | GaBi database | Industry, detailed modeling |
| **Umberto** | ifu Hamburg | Commercial | $5k-15k/year | Various | Material flow analysis, circular economy |
| **Brightway** | Open source community | Open source | Free | ecoinvent, others | Advanced users, Python programming |

### 4.2 openLCA Tutorial - Basic Setup

**Step 1: Download and Install**
- Visit www.openlca.org
- Download version 2.0+ for your operating system
- Install with default settings
- Minimum requirements: 4GB RAM, 10GB disk space
- Recommended: 8GB RAM, 50GB disk space

**Step 2: Import Database**
- Download free databases: USDA LCI, ELCD
- Or purchase ecoinvent license (recommended for comprehensive studies)
- In openLCA: File → Import → Database
- Select .zolca or .zip file
- Import takes 10-60 minutes depending on database size

**Step 3: Create Product System**
- Right-click on Flows → New Flow → Product flow
- Name: "Lettuce, vertical farm production"
- Category: Agricultural products
- Flow property: Mass (kg)
- Save

**Step 4: Create Process**
- Right-click on Processes → New Process
- Name: "Lettuce production, vertical farm, US"
- Category: Agriculture
- Add quantitative reference: Lettuce, vertical farm, 1 kg
- Add inputs (electricity, water, nutrients, etc.)
- Link to database processes
- Add outputs (product, emissions, waste)
- Save

**Step 5: Build Product System**
- Right-click on process → Create product system
- Auto-link: Yes
- Include all inputs/outputs: Yes
- Save as: "Lettuce vertical farm system"

**Step 6: Calculate Results**
- Open product system
- Click "Calculate" button
- Select impact method (e.g., ReCiPe 2016 Midpoint)
- Calculate
- View results in various formats

### 4.3 Data Entry Best Practices

**Organization:**
- Create consistent naming conventions
- Use categories to organize processes
- Document data sources in description fields
- Version control for multiple scenarios

**Documentation:**
- Record all assumptions
- Note data quality scores
- Include calculation methods
- Reference sources

**Quality Control:**
- Mass balance checks (input mass ≈ output mass)
- Energy balance checks
- Compare results to literature for reasonableness
- Peer review by colleague

**Uncertainty:**
- Use uncertainty fields in openLCA/SimaPro
- Define distributions (normal, lognormal, triangular)
- Run Monte Carlo simulations (1,000-10,000 iterations)
- Report 95% confidence intervals

## 5. Data Quality and Uncertainty

### 5.1 Data Quality Assessment

**Data Quality Indicators (DQI):**

Building on the pedigree matrix, calculate overall data quality score:

```
DQI = (Reliability + Completeness + Temporal + Geographical + Technological) / 5

Interpretation:
1.0-1.5: Excellent quality
1.6-2.5: Good quality
2.6-3.5: Fair quality
3.6-4.5: Poor quality
4.6-5.0: Very poor quality
```

**Data Quality Goal:**
- Foreground processes (direct operations): DQI ≤ 2.0
- Background processes (supply chain): DQI ≤ 3.0
- Overall study: DQI ≤ 2.5

**Improving Data Quality:**
1. Collect primary data for key processes
2. Use recent database versions
3. Select geographically appropriate datasets
4. Match technology types closely
5. Validate with multiple sources
6. Document all assumptions

### 5.2 Uncertainty Analysis

**Sources of Uncertainty:**

**Parameter Uncertainty:**
- Measurement errors
- Sampling variability
- Estimation errors
- Lack of precise data

**Model Uncertainty:**
- System boundary choices
- Allocation methods
- Impact assessment models
- Temporal and spatial aggregation

**Scenario Uncertainty:**
- Future technology changes
- Market developments
- Policy changes
- Behavioral factors

**Quantifying Uncertainty:**

**Method 1: Propagation of Uncertainty (Analytical)**

For independent variables with normal distributions:

```
If Y = f(X₁, X₂, ..., Xₙ)

Variance of Y:
Var(Y) = Σ (∂f/∂Xᵢ)² × Var(Xᵢ)

Standard deviation:
SD(Y) = √Var(Y)

Example:
Energy per kg lettuce = Total Energy / Total Production

E = Total Energy = 2,000,000 kWh, SD = 50,000 kWh
P = Total Production = 100,000 kg, SD = 5,000 kg

e = E/P = 20 kWh/kg

Var(e) = (∂e/∂E)² Var(E) + (∂e/∂P)² Var(P)
       = (1/P)² Var(E) + (-E/P²)² Var(P)
       = (1/100,000)² × 50,000² + (-2,000,000/100,000²)² × 5,000²
       = 0.25 + 1.00 = 1.25

SD(e) = √1.25 = 1.12 kWh/kg

Result: 20 ± 2.2 kWh/kg (95% CI, assuming ± 2 SD)
```

**Method 2: Monte Carlo Simulation**

1. Define probability distributions for uncertain parameters
2. Randomly sample from distributions
3. Calculate result for each sample
4. Repeat 1,000-10,000 times
5. Analyze distribution of results

**Common Distributions:**
- **Normal:** Symmetric, unbounded (use for errors)
- **Lognormal:** Right-skewed, positive only (use for emissions, resource use)
- **Triangular:** Min, most likely, max (use when limited data)
- **Uniform:** All values equally likely (use when no information on distribution)

**Reporting Uncertainty:**

"Electricity consumption for lettuce production is 20 kWh/kg with a 95% confidence interval of 18-24 kWh/kg based on Monte Carlo simulation with 5,000 iterations."

### 5.3 Sensitivity Analysis

Sensitivity analysis tests how results change when input parameters vary.

**Local Sensitivity Analysis:**
Change one parameter at a time by fixed percentage (±10%, ±25%)

**Example:**
Base case: 20 kWh/kg lettuce

| Parameter | -25% | Base | +25% | Sensitivity* |
|-----------|------|------|------|--------------|
| Electricity intensity | 15 | 20 | 25 | 1.00 (high) |
| Yield per cycle | 22.2 | 20 | 18.2 | -0.36 (medium) |
| LED efficiency | 18.5 | 20 | 21.5 | 0.30 (low) |

*Sensitivity = (% change in result) / (% change in parameter)

**Global Sensitivity Analysis:**
Vary multiple parameters simultaneously to identify interactions.

**Tornado Diagram:**
Visual representation of sensitivity results, with parameters sorted by impact magnitude.

## 6. Case Study: LCA of Vertical Farm Lettuce

### Study Goal and Scope

**Goal:** Quantify environmental impacts of lettuce production in a commercial vertical farm to identify hotspots and compare to conventional field production.

**Functional Unit:** 1 kg of lettuce (fresh weight, at farm gate)

**System Boundary:** Cradle-to-gate, including:
- Infrastructure production (amortized)
- Energy production and consumption
- Water treatment and consumption
- Nutrient production
- Growing media production
- Packaging production
- Waste treatment

**Geographic Scope:** New York, USA

**Temporal Scope:** Current technology (2024-2025)

### Life Cycle Inventory

**Facility Description:**
- 50,000 sq ft vertical farm
- 10 levels of growing area
- LED lighting, 600W fixtures
- Recirculating hydroponic system
- Annual production: 500,000 kg lettuce

**Primary Data Collected:**
- Electricity: 11,000,000 kWh/year (metered)
- Water: 10,000,000 L/year (metered)
- Nutrients: 1,600 kg N, 550 kg P₂O₅, 2,400 kg K₂O per year
- Growing media: 1,250 kg rockwool per year
- Packaging: 6,000 kg PET clamshell per year
- LED replacement: 100 fixtures per year

**LCI Results per kg Lettuce:**

| Input | Amount | Unit | Data Source |
|-------|--------|------|-------------|
| Electricity (NY grid) | 22 | kWh | Primary + ecoinvent |
| Water, deionized | 20 | L | Primary + USDA |
| Nitrogen fertilizer | 3.2 | g | Primary + ecoinvent |
| Phosphate fertilizer | 1.1 | g | Primary + ecoinvent |
| Potassium fertilizer | 4.8 | g | Primary + ecoinvent |
| Rockwool production | 2.5 | g | ecoinvent |
| PET packaging | 12 | g | ecoinvent |
| LED fixture (amortized) | 0.0002 | unit | GaBi |

### Preliminary Impact Results

(Impact assessment covered in next lesson, but preview here)

**Carbon Footprint:** 5.8 kg CO₂eq per kg lettuce
- Electricity (lighting): 72%
- Electricity (HVAC): 15%
- Infrastructure: 7%
- Nutrients: 4%
- Other: 2%

**Key Finding:** Electricity for lighting is dominant hotspot (87% combined with HVAC)

**Improvement Opportunities Identified:**
1. Increase LED efficiency (switch to newer generation)
2. Optimize light recipe (reduce DLI where possible)
3. Increase renewable energy procurement
4. Improve building thermal efficiency

## Summary

Life Cycle Assessment provides a systematic, standardized methodology for quantifying environmental impacts across the full life cycle of products and systems. The ISO 14040/14044 standards ensure rigor and consistency. Key elements of LCA fundamentals include:

- Clear goal and scope definition with appropriate functional unit
- Comprehensive system boundaries capturing all significant life cycle stages
- Detailed life cycle inventory with high-quality primary and secondary data
- Proper handling of allocation and cut-off criteria
- Use of LCA software and databases for efficiency and comprehensiveness
- Rigorous data quality assessment and uncertainty analysis

For CEA facilities, LCA is essential for understanding environmental performance, identifying improvement opportunities, and comparing to conventional agriculture alternatives.

## Key Takeaways

1. ISO 14040/14044 provide international standards for LCA methodology
2. Goal and scope definition sets the foundation for the entire study
3. Functional unit must be clearly defined and relevant to the system function
4. System boundaries significantly influence results; document all decisions
5. LCI requires both primary (site-specific) and secondary (database) data
6. Data quality varies; assess and document using pedigree matrix
7. LCA software (openLCA, SimaPro) enables efficient modeling of complex systems
8. Uncertainty and sensitivity analysis are essential for robust conclusions
9. CEA LCA typically shows energy as dominant impact driver

## Review Questions

1. What are the four phases of LCA according to ISO 14040?
2. Explain the difference between cradle-to-gate and cradle-to-grave system boundaries. When would each be appropriate?
3. Define functional unit and provide three examples appropriate for CEA facilities.
4. Describe the ISO 14044 hierarchy for handling multi-product allocation. Why is avoiding allocation preferred?
5. What are the five data quality criteria in the pedigree matrix?
6. Compare primary and secondary data sources. What are the advantages and disadvantages of each?
7. Why is uncertainty analysis important in LCA? Describe two methods for quantifying uncertainty.
8. For a vertical farm, what life cycle stage typically contributes most to environmental impacts? Why?

## Practical Exercise

**Exercise: Define Goal and Scope for CEA Facility LCA**

Select one of the following CEA systems:
A) Greenhouse tomato production (heated, supplemental lighting)
B) Indoor vertical farming (leafy greens)
C) Aquaponics system (fish + vegetables)

Develop a complete goal and scope definition including:
1. Goal statement (purpose, application, audience)
2. Functional unit with justification
3. System boundary diagram showing all life cycle stages
4. List of processes to include and exclude with rationale
5. Data requirements and potential sources
6. Allocation approach (if applicable)

**Deliverable:** 4-6 page goal and scope document following ISO 14044 guidelines

## Additional Resources

**Standards:**
- ISO 14040:2006 (available from ISO or national standards bodies)
- ISO 14044:2006
- ISO/TS 14067:2018 (Carbon footprint of products)

**Handbooks:**
- "Life Cycle Assessment: Theory and Practice" - Hauschild, Rosenbaum, Olsen
- "The LCA Sourcebook" - PRé Sustainability
- "Life Cycle Assessment Handbook" - Curran (editor)

**Software and Databases:**
- openLCA: www.openlca.org (free, open source)
- ecoinvent: www.ecoinvent.org (database)
- USDA LCI: www.lcacommons.gov (free database)
- SimaPro tutorials: www.pre-sustainability.com

**Online Courses:**
- edX: Life Cycle Assessment (TU Delft)
- Coursera: Life Cycle Assessment for Sustainable Design
- SETAC: Introduction to LCA (professional development)

---

**Next Lesson:** Lesson 3 - Life Cycle Impact Assessment

