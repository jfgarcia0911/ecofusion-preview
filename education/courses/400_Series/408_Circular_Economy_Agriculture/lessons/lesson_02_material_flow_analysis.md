# Lesson 2: Material Flow Analysis & Systems Modeling

## Learning Objectives

By the end of this lesson, you will be able to:
1. Conduct comprehensive material flow analysis (MFA) for agricultural systems
2. Perform accurate mass balance calculations and accounting
3. Apply substance flow analysis (SFA) techniques
4. Develop input-output models for agricultural operations
5. Design and implement data collection protocols
6. Utilize software tools for MFA and modeling
7. Interpret and communicate MFA results effectively

---

## 1. Introduction to Material Flow Analysis

### 1.1 What is Material Flow Analysis?

**Definition:**
Material Flow Analysis (MFA) is a systematic assessment of flows and stocks of materials within a defined system boundary over a specified time period.

**Purpose in Circular Agriculture:**
- Quantify resource consumption and waste generation
- Identify inefficiencies and loss points
- Reveal opportunities for resource recovery
- Establish baseline for performance monitoring
- Support decision-making for system optimization

### 1.2 MFA Fundamental Concepts

```
┌─────────────────────────────────────────────────────────────┐
│                    MFA CORE ELEMENTS                         │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  SYSTEM BOUNDARY                                             │
│  ┌────────────────────────────────────────────────┐         │
│  │                                                 │         │
│  │  INPUTS ──→ [PROCESSES] ──→ [STOCKS] ──→ OUTPUTS│         │
│  │     ↑           │              │           │    │         │
│  │     │           ↓              ↓           ↓    │         │
│  │     │       Flows          Storage      Products│         │
│  │     │       Losses         Accumulation  Waste  │         │
│  │     │           │              │           │    │         │
│  │     └───────────┴──────────────┴───────────┘    │         │
│  │                  INTERNAL LOOPS                 │         │
│  └────────────────────────────────────────────────┘         │
│                                                              │
│  TIME PERIOD: t₀ to t₁                                       │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

**Key Parameters:**
- **Flows:** Material movements (mass/time) - kg/day, tonnes/year
- **Stocks:** Material inventories (mass) - kg, tonnes
- **Processes:** Transformation activities
- **System Boundary:** Spatial and temporal limits
- **Balance:** Inputs = Outputs + Stock Change

### 1.3 MFA Hierarchy

```
SCALE               FOCUS                   EXAMPLE
═════════════════════════════════════════════════════════════
Global/National     Economy-wide            National phosphorus flows
                    material accounts

Regional            Industrial sectors      Agricultural region N flows
                    Geographic areas

Facility            Single operations       Greenhouse nutrient flows
                    Production sites

Process             Specific activities     Anaerobic digester mass balance
                    Unit operations

Product             Product lifecycle       Tomato production chain
                    Supply chain
```

---

## 2. Mass Balance Principles

### 2.1 Conservation of Mass

**Fundamental Law:**
```
┌─────────────────────────────────────────────────────────┐
│                                                          │
│   INPUTS = OUTPUTS + ACCUMULATION + TRANSFORMATION       │
│                                                          │
│   Or simplified for steady-state:                        │
│                                                          │
│   ΣInputs = ΣOutputs (when no stock change)             │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

### 2.2 Mass Balance Equation

**General Form:**
```
ΔS = I - O

Where:
ΔS = Change in stock (kg)
I = Total inputs (kg)
O = Total outputs (kg)

Expanded:
ΔS = (I_import + I_natural) - (O_export + O_emissions + O_waste)
```

### 2.3 Application Example: Nitrogen Balance in Greenhouse

```
GREENHOUSE NITROGEN BALANCE (Annual)
═════════════════════════════════════════════════════════

SYSTEM BOUNDARY: 5,000 m² greenhouse producing tomatoes

INPUTS (kg N/year):
├─ Fertilizer (synthetic)          800
├─ Organic amendments              150
├─ Irrigation water (dissolved N)   25
├─ Atmospheric deposition           10
├─ Biological fixation               5
└─ TOTAL INPUTS                    990

OUTPUTS (kg N/year):
├─ Harvested fruit                 320
├─ Plant residue removal           180
├─ Leachate/drainage               275
├─ Gaseous emissions (NH₃, N₂O)     45
├─ Wastewater discharge             95
└─ TOTAL OUTPUTS                   915

BALANCE:
Input - Output = 990 - 915 = 75 kg N/year

INTERPRETATION:
• 75 kg N accumulating in system (soil/substrate)
• 32% N use efficiency (320/990)
• 28% loss to leachate (major inefficiency)
• 10% loss to drainage discharge

CIRCULAR OPPORTUNITY:
Implement water treatment and N recovery
→ Recover 275 + 95 = 370 kg N/year (37%)
→ Reduce fertilizer needs by 40%
→ Eliminate water pollution
```

---

## 3. Material Flow Analysis Methodology

### 3.1 Six-Step MFA Process

```
┌─────────────────────────────────────────────────────────┐
│  STEP 1: DEFINE SYSTEM BOUNDARIES & SCOPE               │
├─────────────────────────────────────────────────────────┤
│  • Spatial boundary (facility, region, value chain)     │
│  • Temporal boundary (day, season, year)                │
│  • Materials to analyze (nutrients, water, energy)      │
│  • Level of detail (processes to include)               │
└─────────────────────────────────────────────────────────┘
              ↓
┌─────────────────────────────────────────────────────────┐
│  STEP 2: IDENTIFY PROCESSES & FLOWS                     │
├─────────────────────────────────────────────────────────┤
│  • Map all processes within boundary                    │
│  • List material inputs and outputs                     │
│  • Identify transformation processes                    │
│  • Document internal flows                              │
└─────────────────────────────────────────────────────────┘
              ↓
┌─────────────────────────────────────────────────────────┐
│  STEP 3: QUANTIFY FLOWS & STOCKS                        │
├─────────────────────────────────────────────────────────┤
│  • Collect primary data (measurements)                  │
│  • Use secondary data (literature, databases)           │
│  • Apply calculations and estimates                     │
│  • Document data sources and quality                    │
└─────────────────────────────────────────────────────────┘
              ↓
┌─────────────────────────────────────────────────────────┐
│  STEP 4: RECONCILE DATA & BALANCE SYSTEM                │
├─────────────────────────────────────────────────────────┤
│  • Check mass balance for each process                  │
│  • Identify and resolve discrepancies                   │
│  • Adjust values within uncertainty ranges              │
│  • Validate with independent sources                    │
└─────────────────────────────────────────────────────────┘
              ↓
┌─────────────────────────────────────────────────────────┐
│  STEP 5: ANALYZE & INTERPRET RESULTS                    │
├─────────────────────────────────────────────────────────┤
│  • Calculate efficiency metrics                         │
│  • Identify major flows and losses                      │
│  • Assess environmental impacts                         │
│  • Benchmark performance                                │
└─────────────────────────────────────────────────────────┘
              ↓
┌─────────────────────────────────────────────────────────┐
│  STEP 6: COMMUNICATE FINDINGS & RECOMMENDATIONS         │
├─────────────────────────────────────────────────────────┤
│  • Create Sankey diagrams and visualizations            │
│  • Document methodology and assumptions                 │
│  • Provide actionable recommendations                   │
│  • Report uncertainty and limitations                   │
└─────────────────────────────────────────────────────────┘
```

### 3.2 System Boundary Definition

**Spatial Boundaries - Options:**
```
MICRO LEVEL (Process)
└─> Single equipment or unit operation
    Example: Nutrient recovery reactor

MESO LEVEL (Facility)
└─> Complete production facility
    Example: Vertical farm building

MACRO LEVEL (Regional)
└─> Geographic area or supply chain
    Example: Regional food system

MEGA LEVEL (National/Global)
└─> Economy-wide or global flows
    Example: Global phosphorus cycle
```

**Temporal Considerations:**
- **Short-term:** Daily/weekly (operational management)
- **Seasonal:** Crop cycle (production optimization)
- **Annual:** Calendar/fiscal year (reporting, benchmarking)
- **Multi-year:** Long-term trends (strategic planning)

### 3.3 Process Mapping Example

**Aquaponic System MFA:**
```
┌─────────────────────────────────────────────────────────┐
│              AQUAPONIC SYSTEM PROCESSES                  │
└─────────────────────────────────────────────────────────┘

        FISH                BIOFILTER           PLANTS
        TANK                                    (NFT)
         │                     │                  │
    ┌────┴────┐          ┌────┴────┐       ┌────┴────┐
    │         │          │         │       │         │
IN: │ Feed    │    IN:   │ NH₄⁺    │  IN:  │ NO₃⁻    │
    │ Water   │          │ O₂      │       │ Water   │
    │ O₂      │          │         │       │ Light   │
    │         │          │         │       │ CO₂     │
    │  FISH   │   ──>    │ BACTERIA│  ──>  │ PLANT   │
    │ CULTURE │          │ CONVERT │       │ GROWTH  │
    │         │          │         │       │         │
OUT:│ Waste   │    OUT:  │ NO₃⁻    │  OUT: │ Biomass │
    │ NH₃/NH₄⁺│          │ NO₂⁻    │       │ O₂      │
    │ CO₂     │          │         │       │ H₂O     │
    │ Fish    │          │         │       │         │
    └────┬────┘          └────┬────┘       └────┬────┘
         │                     │                  │
         └─────────────────────┴──────────────────┘
                            │
                    ┌───────┴────────┐
                    │  SLUDGE REMOVAL│
                    │  & PROCESSING  │
                    └────────────────┘
                           │
                      Compost/Biogas
```

---

## 4. Substance Flow Analysis (SFA)

### 4.1 SFA vs. MFA

**Distinction:**
- **MFA:** Tracks all materials (total mass)
- **SFA:** Tracks specific substances (elements, compounds)

**When to Use SFA:**
- Nutrients (N, P, K)
- Heavy metals
- Pesticide residues
- Specific pollutants
- Trace elements

### 4.2 Phosphorus SFA Example

```
PHOSPHORUS FLOW ANALYSIS - Lettuce Production
═══════════════════════════════════════════════════════════

System: 10 hectare hydroponic lettuce farm
Production: 2,000 tonnes/year
Time frame: Annual

INPUTS (kg P/year):
┌─────────────────────────────────────────┐
│ Fertilizer (MAP, DAP)           1,500   │
│ Water (dissolved P)                15   │
│ Seeds (trace)                       2   │
├─────────────────────────────────────────┤
│ TOTAL INPUT                     1,517   │
└─────────────────────────────────────────┘

STOCK CHANGES (kg P/year):
┌─────────────────────────────────────────┐
│ System accumulation                50   │
│ Precipitates in irrigation          30   │
└─────────────────────────────────────────┘

OUTPUTS (kg P/year):
┌─────────────────────────────────────────┐
│ Harvested lettuce                  420   │
│ Plant waste (composted)            180   │
│ Wastewater discharge               750   │
│ System purges                       87   │
├─────────────────────────────────────────┤
│ TOTAL OUTPUT                     1,437   │
└─────────────────────────────────────────┘

MASS BALANCE CHECK:
Input - Output - ΔStock = 1,517 - 1,437 - 80 = 0 ✓

EFFICIENCY METRICS:
├─ P use efficiency: 420/1,517 = 27.7%
├─ Loss to discharge: 750/1,517 = 49.4%
└─ Recovery potential: 750 + 87 + 180 = 1,017 kg P/year (67%)

CIRCULAR INTERVENTION:
Implement P recovery from wastewater and plant waste
→ Struvite precipitation: 600 kg P recovered
→ Composting with P retention: 150 kg P recovered
→ Total recovery: 750 kg P/year
→ Reduce fertilizer needs by 50%
```

---

## 5. Data Collection & Measurement

### 5.1 Data Categories

```
┌─────────────────────────────────────────────────────────┐
│                    DATA HIERARCHY                        │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  PRIMARY DATA (Measured)                 [HIGHEST]       │
│  ├─ Direct measurement                   Quality         │
│  ├─ Sampling and analysis                   ↑            │
│  └─ Continuous monitoring                               │
│                                                          │
│  CALCULATED DATA (Derived)                              │
│  ├─ Mass balance calculations                           │
│  ├─ Stoichiometric relationships                        │
│  └─ Statistical estimates                               │
│                                                          │
│  SECONDARY DATA (Literature)                            │
│  ├─ Industry averages                                   │
│  ├─ Technical specifications                            │
│  └─ Published studies                                   │
│                                                          │
│  PROXY DATA (Estimated)                  [LOWEST]       │
│  ├─ Expert judgment                      Quality         │
│  ├─ Analogous systems                       ↓            │
│  └─ Order-of-magnitude estimates                        │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

### 5.2 Measurement Methods

**Direct Measurement Techniques:**

| Parameter | Method | Accuracy | Cost |
|-----------|--------|----------|------|
| **Water Flow** | Flow meters (electromagnetic, ultrasonic) | ±1-2% | $$$ |
| **Nutrient Concentration** | Ion-selective electrodes, lab analysis | ±5-10% | $$ |
| **Solid Waste** | Weighing scales, load cells | ±0.5% | $ |
| **Energy Use** | Smart meters, sub-metering | ±1% | $$ |
| **Gas Emissions** | Gas analyzers (FTIR, GC) | ±3-5% | $$$$ |
| **Biomass** | Destructive sampling, imaging | ±5-15% | $$ |

### 5.3 Data Collection Protocol Template

```
DATA COLLECTION PROTOCOL

Parameter: _________________________
Unit: _________________________
Collection Method: _________________________

SAMPLING DESIGN:
├─ Frequency: ___ (continuous/hourly/daily/weekly)
├─ Duration: ___ (days/weeks/months)
├─ Sample Size: ___ (n samples)
├─ Locations: ___ (where to sample)
└─ Timing: ___ (time of day, crop stage)

MEASUREMENT PROCEDURE:
1. _________________________________
2. _________________________________
3. _________________________________
4. _________________________________

QUALITY ASSURANCE:
├─ Calibration: ___ (frequency, standards)
├─ Blanks/Controls: ___ (how many, when)
├─ Duplicates: ___ (% of samples)
├─ Chain of Custody: ___ (documentation)
└─ Data Validation: ___ (checks, outliers)

RECORDING:
├─ Data Sheet/Digital Form: ___
├─ Database Entry: ___
├─ Responsible Person: ___
└─ Review/QC: ___

UNCERTAINTY ASSESSMENT:
├─ Method Uncertainty: ±__%
├─ Sampling Uncertainty: ±__%
├─ Combined Uncertainty: ±__%
└─ Confidence Level: ___%
```

### 5.4 Handling Data Gaps & Uncertainty

**Strategies:**
1. **Direct Substitution:** Use similar system data
2. **Mass Balance Calculation:** Derive from other flows
3. **Stoichiometric Estimation:** Use chemical relationships
4. **Statistical Modeling:** Regression, interpolation
5. **Sensitivity Analysis:** Test impact of assumptions
6. **Conservative Estimates:** Use ranges, worst-case scenarios

**Uncertainty Propagation:**
```
For multiplication/division:

σ_result = result × √[(σ_A/A)² + (σ_B/B)²]

For addition/subtraction:

σ_result = √[σ_A² + σ_B²]

Where:
σ = standard deviation (uncertainty)
A, B = measured values
```

---

## 6. Input-Output Modeling

### 6.1 Concept & Application

**Input-Output Table Structure:**
```
         │ Process 1 │ Process 2 │ Process 3 │ Final  │ Total
         │           │           │           │ Output │ Output
─────────┼───────────┼───────────┼───────────┼────────┼───────
Process 1│    X₁₁    │    X₁₂    │    X₁₃    │   Y₁   │  Q₁
Process 2│    X₂₁    │    X₂₂    │    X₂₃    │   Y₂   │  Q₂
Process 3│    X₃₁    │    X₃₂    │    X₃₃    │   Y₃   │  Q₃
─────────┼───────────┼───────────┼───────────┼────────┼───────
Imports  │    M₁     │    M₂     │    M₃     │        │
Total    │    Q₁     │    Q₂     │    Q₃     │        │
Input    │           │           │           │        │

Where:
Xᵢⱼ = Flow from process i to process j
Yᵢ = Final output from process i
Qᵢ = Total output from process i
Mᵢ = Imports to process i
```

### 6.2 Agricultural System Example

**Integrated Farm Input-Output Model:**
```
PROCESSES:
1. Crop Production
2. Livestock Production
3. Biogas Plant
4. Composting

INPUT-OUTPUT TABLE (tonnes/year):

From/To  │  Crop  │ Livestock │ Biogas │ Compost │ Market │ Total
─────────┼────────┼───────────┼────────┼─────────┼────────┼──────
Crop     │    0   │    500    │   200  │    0    │  2,300 │ 3,000
Livestock│   50   │     0     │   450  │    0    │    500 │ 1,000
Biogas   │    0   │     0     │    0   │    0    │    300 │   300
Compost  │  800   │    100    │    0   │    0    │    100 │ 1,000
─────────┼────────┼───────────┼────────┼─────────┼────────┼──────
Imports  │  200   │    400    │   (n/a)│    (n/a)│        │

ANALYSIS:
• Crop: 77% to market, 17% to livestock, 7% to biogas
• Livestock: 50% to market, 45% to biogas, 5% to crop
• High internal cycling: 800 t compost to crops
• Self-sufficiency in fertilizer: 80%
```

### 6.3 Leontief Inverse Application

**Mathematical Framework:**
```
X = (I - A)⁻¹ × Y

Where:
X = Total output vector
I = Identity matrix
A = Technical coefficient matrix (input/output ratios)
Y = Final demand vector
(I - A)⁻¹ = Leontief inverse

Application: Calculate total production needed to meet final demand
```

---

## 7. Software Tools for MFA

### 7.1 Tool Comparison

| Software | Type | Strengths | Best For | Cost |
|----------|------|-----------|----------|------|
| **STAN** | MFA-specific | User-friendly, good visualization | Facility-level MFA | Free |
| **Umberto** | LCA/MFA | Comprehensive, professional | Complex systems, LCA integration | $$$ |
| **openLCA** | LCA | Open-source, extensive databases | LCA with material tracking | Free |
| **Excel/Python** | General | Customizable, widely accessible | Custom analysis, automation | Free/$ |
| **MATLAB** | Mathematical | Powerful computation, modeling | Advanced modeling, optimization | $$ |
| **GaBi** | LCA/MFA | Industry-standard, robust | Professional consulting | $$$$ |

### 7.2 STAN Software Tutorial

**Basic Workflow:**
```
1. CREATE NEW PROJECT
   └─> Set system name, time period, units

2. DEFINE PROCESSES
   └─> Add process boxes to canvas
   └─> Name and categorize each process

3. ADD FLOWS
   └─> Draw connections between processes
   └─> Specify materials (N, P, water, etc.)

4. INPUT DATA
   └─> Enter measured/calculated values
   └─> Specify uncertainties (standard deviation)

5. RUN BALANCE
   └─> Software reconciles data
   └─> Identifies imbalances
   └─> Suggests corrections

6. VISUALIZE RESULTS
   └─> Generate Sankey diagrams
   └─> Export data tables
   └─> Create reports

7. SCENARIO ANALYSIS
   └─> Modify flows for "what-if" scenarios
   └─> Compare baseline vs. circular interventions
```

### 7.3 Python MFA Example Code

```python
# Simple MFA using Python

import numpy as np
import matplotlib.pyplot as plt

# Define processes
processes = ['Input', 'Production', 'Processing', 'Consumption', 'Waste', 'Recovery']

# Create flow matrix (from row to column)
flows = np.array([
    [0,   1000,  0,    0,    0,   0],      # Input
    [0,   0,     800,  0,    200, 0],      # Production
    [0,   0,     0,    700,  100, 0],      # Processing
    [0,   0,     0,    0,    350, 0],      # Consumption
    [0,   0,     0,    0,    0,   300],    # Waste
    [0,   400,   0,    0,    0,   0]       # Recovery
])

# Calculate mass balance for each process
inputs = flows.sum(axis=0)
outputs = flows.sum(axis=1)
balance = inputs - outputs

print("Mass Balance Check:")
for i, proc in enumerate(processes):
    print(f"{proc}: In={inputs[i]}, Out={outputs[i]}, Balance={balance[i]}")

# Calculate efficiency metrics
efficiency = outputs[3] / inputs[0] * 100  # Consumption / Input
recovery_rate = flows[5, 1] / flows[1, 4] * 100  # Recovered / Production waste

print(f"\nSystem Efficiency: {efficiency:.1f}%")
print(f"Recovery Rate: {recovery_rate:.1f}%")
```

---

## 8. Sankey Diagrams & Visualization

### 8.1 Sankey Diagram Principles

**Design Elements:**
```
WIDTH = Flow Magnitude
  │
  ↓
┌────────┐  ════════════>  ┌────────┐  ══════>  ┌────────┐
│        │   Flow 1 (500)  │        │  Flow 2   │        │
│Process │  ══════════════>│Process │  (300)    │Process │
│   A    │   Flow 3 (200)  │   B    │  ══════>  │   C    │
└────────┘  ────────────>   └────────┘  ──────>  └────────┘
                              │
                              │ Flow 4 (200)
                              ↓
                          ┌────────┐
                          │ Loss   │
                          └────────┘

COLOR = Material Type or Quality
Flow direction = Left to Right (typically)
```

### 8.2 Example: Nutrient Flow Sankey

```
NITROGEN FLOW - Vegetable Production System
(All values in kg N/year)

Fertilizer (1000) ════════════════╗
                                  ║
                                  ↓
                            ┌──────────┐
Water (50) ════════════════>│          │
                            │   Crop   │
Atmosphere (10) ═══════════>│ Production│
                            │          │
                            └──────────┘
                                  ║
          ┌───────────────────────╬───────────────────┐
          ║                       ║                   ║
          ↓                       ↓                   ↓
    ┌─────────┐           ┌──────────┐        ┌──────────┐
    │ Harvest │           │ Residues │        │ Leachate │
    │  (350)  │           │  (200)   │        │  (400)   │
    └─────────┘           └──────────┘        └──────────┘
          │                       │                   │
          ↓                       ↓                   ↓
      To Market            To Compost (180)    To Environment
                                  │
                                  ↓
                          Recovery & Reuse (150)
                                  │
                                  └──> Back to Production
```

### 8.3 Best Practices for Visualization

**Effective Communication:**
1. **Clear Labels:** Show process names and flow values
2. **Consistent Units:** Use same units throughout
3. **Color Coding:** Distinguish materials or qualities
4. **Highlight Key Flows:** Emphasize major flows/losses
5. **Simplification:** Aggregate minor flows for clarity
6. **Context:** Provide reference scales and benchmarks
7. **Narrative:** Include interpretation and insights

---

## 9. Case Study: Complete MFA

### Commercial Greenhouse Operation

**System Description:**
- Location: Controlled environment greenhouse
- Size: 20,000 m² growing area
- Production: Cherry tomatoes (600 tonnes/year)
- Technology: Recirculating hydroponic (NFT)
- Study Period: One complete year

**Step 1: System Boundary**
```
INCLUDED:
├─ Greenhouse structure and equipment
├─ Nutrient management system
├─ Water treatment and recirculation
├─ Climate control (heating, cooling, CO₂)
├─ Waste handling and storage
└─ On-site energy generation (if applicable)

EXCLUDED:
├─ Packaging and distribution
├─ Employee commuting
├─ Infrastructure construction
└─ Off-site waste treatment
```

**Step 2: Process Identification**
```
MAIN PROCESSES:
1. Nutrient Solution Preparation
2. Crop Cultivation
3. Harvesting & Processing
4. Water Treatment & Recirculation
5. Waste Management
6. Climate Control
```

**Step 3: Data Collection Summary**
```
DATA SOURCES:
├─ Fertilizer purchases: Invoices, delivery records
├─ Water use: Meter readings (daily)
├─ Energy: Utility bills, sub-meters
├─ Harvests: Production records (weekly)
├─ Waste: Weighing records (weekly)
├─ Solution concentration: Lab analysis (bi-weekly)
└─ Climate data: SCADA system (continuous)

DATA QUALITY:
├─ High quality (measured): 70%
├─ Calculated (mass balance): 20%
├─ Estimated (literature): 10%
```

**Step 4: Quantified Flows - Water**
```
WATER MASS BALANCE (m³/year):

INPUTS:
├─ Municipal supply            15,000
├─ Condensate recovery          2,500
└─ TOTAL INPUT                17,500

PROCESSES:
├─ Crop evapotranspiration    12,000
├─ System leaks/evaporation      800
├─ Fruit water content          5,400 (90% of 600 t fruit)
├─ Plant biomass water            900
└─ Solution purges                400

OUTPUTS:
├─ In harvested fruit           5,400
├─ In plant waste                 900
├─ To atmosphere (ET)          12,000
├─ Wastewater discharge           400
└─ TOTAL OUTPUT               18,700

STOCK CHANGE:
├─ Beginning inventory            600
├─ Ending inventory               400
└─ ΔStock                        -200

BALANCE CHECK:
Input - Output - ΔStock = 17,500 - 18,700 - (-200) = 0 ✓

EFFICIENCY METRICS:
├─ Water use efficiency: 29.1 L/kg fruit
├─ Recirculation rate: 95.8%
├─ Loss to atmosphere: 68.6%
└─ Productive use: 30.9%
```

**Step 5: Quantified Flows - Nitrogen**
```
NITROGEN MASS BALANCE (kg N/year):

INPUTS:
├─ Calcium nitrate              2,100
├─ Potassium nitrate              850
├─ Other fertilizers              150
├─ Water (dissolved)               30
└─ TOTAL INPUT                  3,130

INTERNAL FLOWS:
├─ Solution to plants           3,000
├─ Drain recirculation          2,700
└─ Net uptake                     300

OUTPUTS:
├─ Fruit (3% protein, 16% N)      288
├─ Plant biomass removal          180
├─ Wastewater purge                90
├─ Volatilization (NH₃)            12
└─ TOTAL OUTPUT                   570

STOCK CHANGE:
├─ Solution accumulation          260
├─ Substrate accumulation          50
└─ TOTAL ΔStock                   310

UNACCOUNTED:
Input - Output - ΔStock = 3,130 - 570 - 310 = 2,250

ERROR ANALYSIS:
Likely causes of discrepancy:
├─ Overestimation of fertilizer input (invoice timing)
├─ Unmeasured solution disposal
├─ Denitrification in system
└─ → Requires data reconciliation and additional sampling

EFFICIENCY (based on corrected input ~880 kg):
├─ N use efficiency: 32.7% (288/880)
├─ Total plant uptake: 53.2%
└─ Recovery potential: 30.6% (wastewater + plant waste)
```

**Step 6: Results & Recommendations**

**Key Findings:**
1. Water recirculation highly effective (96%)
2. Nitrogen use efficiency low (33%) - room for improvement
3. Significant N in wastewater and plant waste (270 kg)
4. Data quality issues with fertilizer accounting

**Circular Economy Interventions:**
```
PROPOSED IMPROVEMENTS:

1. NUTRIENT RECOVERY SYSTEM
   ├─ Install wastewater treatment with N capture
   ├─ Estimated recovery: 85 kg N/year from wastewater
   ├─ Investment: $45,000
   └─ Payback: 2.8 years

2. PLANT WASTE COMPOSTING
   ├─ On-site composting with N conservation
   ├─ Estimated recovery: 120 kg N/year
   ├─ Investment: $15,000
   └─ Payback: 3.5 years

3. PRECISION NUTRITION MANAGEMENT
   ├─ Real-time monitoring and control
   ├─ Reduce fertilizer use by 15-20%
   ├─ Investment: $30,000
   └─ Payback: 1.9 years

COMBINED IMPACT:
├─ Fertilizer cost savings: $8,500/year
├─ Waste disposal savings: $2,000/year
├─ Environmental compliance: Improved
├─ N use efficiency: 33% → 55%
└─ Total NPV (10 years, 8%): $42,000
```

---

## 10. Advanced Applications

### 10.1 Dynamic MFA

**Time-Dependent Modeling:**
```
Stock(t) = Stock(t-1) + Input(t) - Output(t)

Applications:
├─ Seasonal variation analysis
├─ Nutrient accumulation over crop cycles
├─ Long-term soil/substrate quality trends
└─ Growth stage-specific resource use
```

### 10.2 Spatially Explicit MFA

**Geographic Distribution:**
- Regional nutrient flows and cycling
- Transportation and logistics optimization
- Industrial symbiosis network mapping
- Watershed-scale analysis

### 10.3 Uncertainty Analysis

**Monte Carlo Simulation:**
```
1. Assign probability distributions to inputs
2. Run simulation (1,000-10,000 iterations)
3. Generate output distributions
4. Calculate confidence intervals
5. Identify sensitive parameters

Example Output:
├─ N use efficiency: 32.7% ± 4.2% (95% CI)
├─ Most sensitive: Fruit N content measurement
└─ Recommendation: Improve fruit sampling protocol
```

---

## Summary

Material Flow Analysis provides a rigorous, quantitative foundation for circular economy implementation in agriculture. By systematically tracking resource flows and stocks, MFA reveals inefficiencies, identifies opportunities, and enables evidence-based decision-making.

**Key Takeaways:**
1. MFA applies conservation of mass to quantify system flows
2. Six-step methodology ensures comprehensive, accurate analysis
3. Data quality and mass balance reconciliation are critical
4. Visualization through Sankey diagrams enhances communication
5. Software tools streamline analysis and enable scenario modeling
6. MFA reveals specific opportunities for circular interventions
7. Integration with economic analysis supports business case development

**Practical Applications:**
- Baseline assessment for sustainability initiatives
- Optimization of resource use efficiency
- Design of closed-loop systems and recovery technologies
- Performance monitoring and reporting
- Regulatory compliance and environmental permitting

---

## Exercises

### Exercise 1: Simple Mass Balance
Conduct a nitrogen mass balance for a small-scale lettuce production system using provided data. Identify the largest flows and loss pathways.

### Exercise 2: Sankey Diagram Creation
Using STAN or Excel, create a Sankey diagram showing water flows in an aquaponic system based on provided flow data.

### Exercise 3: Data Reconciliation
Given an imbalanced dataset for a greenhouse operation, apply mass balance principles to identify and correct errors or estimate missing values.

### Exercise 4: Scenario Analysis
Model the impact of implementing a nutrient recovery system on overall nitrogen flows and efficiency in a case study facility.

---

## Further Reading

1. Brunner, P.H. & Rechberger, H. (2016). "Handbook of Material Flow Analysis"
2. Chen, W.Q. & Graedel, T.E. (2012). "Anthropogenic Cycles of the Elements: A Critical Review"
3. Cencic, O. & Rechberger, H. (2008). "Material Flow Analysis with Software STAN"
4. Cordell, D., et al. (2009). "The Story of Phosphorus: Global Food Security and Food for Thought"
5. Van der Voet, E. (2002). "Substance Flow Analysis Methodology"

---

*End of Lesson 2*
