# Activity 1: Conducting a Material Flow Analysis

## Objective
Perform a complete material flow analysis (MFA) for nitrogen in a small-scale agricultural operation, identifying losses and opportunities for circularity.

**Duration**: 3-4 hours
**Group Size**: 2-4 participants
**Materials Needed**: Calculator, spreadsheet software, graph paper or MFA software (STAN recommended)

---

## Scenario

**Happy Valley Farm** - 2 hectare greenhouse operation
- **Production**: Cherry tomatoes (80 tonnes/year)
- **System**: Recirculating hydroponic (NFT - nutrient film technique)
- **Staff**: 4 full-time employees
- **Location**: Temperate climate zone

---

## Part 1: Data Collection & System Boundary Definition (30 min)

### Step 1: Define System Boundary

Draw a box around the system you're analyzing:
- **Spatial**: The 2-hectare greenhouse facility (exclude packaging, distribution)
- **Temporal**: One full year of operation
- **Material**: Nitrogen (N) flows only

### Step 2: Identify Processes

List all processes within the boundary:
1. Nutrient solution preparation
2. Crop cultivation (uptake by plants)
3. Harvesting & processing
4. Water recirculation & treatment
5. Waste handling

### Step 3: Gather Data

**Provided Data for Happy Valley Farm:**

| Parameter | Value |
|-----------|-------|
| **INPUTS** | |
| Calcium nitrate fertilizer (15.5% N) | 2,800 kg/year |
| Potassium nitrate fertilizer (13% N) | 1,200 kg/year |
| Other fertilizers (avg 10% N) | 500 kg/year |
| Irrigation water (dissolved N) | 5 mg/L, 15,000 m³/year |
| Atmospheric deposition | Negligible |
| **OUTPUTS** | |
| Harvested fruit (protein content) | 80,000 kg, 0.9% protein |
| Plant residue (leaves, stems, roots) | 30,000 kg fresh (10% dry matter, 3% N dry basis) |
| Wastewater discharge (drain purges) | 750 m³/year, 120 mg N/L |
| Gaseous emissions (estimated) | Negligible (closed system) |
| **STOCKS** | |
| Nutrient solution volume | 40 m³ (constant) |
| Initial N concentration in solution | 180 mg/L |
| Final N concentration in solution | 220 mg/L |

---

## Part 2: Calculate Mass Balance (45 min)

### Step 1: Calculate Inputs

**Fertilizer nitrogen:**
- Calcium nitrate: 2,800 kg × 0.155 = ______ kg N/year
- Potassium nitrate: 1,200 kg × 0.13 = ______ kg N/year
- Other fertilizers: 500 kg × 0.10 = ______ kg N/year
- **Subtotal**: ______ kg N/year

**Water nitrogen:**
- 15,000 m³ × 5 mg/L = 15,000,000 L × 0.005 g/L = ______ kg N/year

**TOTAL INPUTS**: ______ kg N/year

---

### Step 2: Calculate Outputs

**Harvested fruit:**
- Protein content: 80,000 kg × 0.009 = 720 kg protein
- Nitrogen in protein (factor: 0.16 kg N/kg protein): 720 × 0.16 = ______ kg N/year

**Plant residue:**
- Dry matter: 30,000 kg × 0.10 = 3,000 kg DM
- Nitrogen: 3,000 kg DM × 0.03 = ______ kg N/year

**Wastewater discharge:**
- 750 m³ × 120 mg/L = 750,000 L × 0.120 g/L = ______ kg N/year

**Gaseous emissions**:
- Assumed: ______ kg N/year (negligible in closed hydroponic system)

**TOTAL OUTPUTS**: ______ kg N/year

---

### Step 3: Calculate Stock Change

**Stock change in nutrient solution:**
- Initial stock: 40 m³ × 180 mg/L = 40,000 L × 0.180 g/L = ______ kg N
- Final stock: 40 m³ × 220 mg/L = 40,000 L × 0.220 g/L = ______ kg N
- **ΔStock**: ______ kg N (accumulation)

---

### Step 4: Check Mass Balance

```
MASS BALANCE EQUATION:
Inputs - Outputs - ΔStock = 0 (if balanced)

_______ - _______ - _______ = _______

If result ≠ 0, there is:
- Measurement error
- Unaccounted flows
- Calculation mistake
```

**Analysis**: Discuss possible reasons for any imbalance.

---

## Part 3: Create Sankey Diagram (45 min)

Using graph paper or software, create a visual representation:

```
[INPUTS] ════════════════> [PROCESSES] ════════════════> [OUTPUTS]

Width of arrows proportional to flow magnitude
```

**Include**:
- All input flows (with values)
- Internal flows between processes
- All output flows (with values)
- Stock changes

**Color Coding** (optional):
- Green: Valuable outputs (harvested crop)
- Yellow: Recoverable losses (plant waste, wastewater)
- Red: Environmental losses (if any)

---

## Part 4: Calculate Efficiency Metrics (30 min)

### Nitrogen Use Efficiency (NUE)
```
NUE (%) = (N in harvest / Total N input) × 100

NUE = (_______ / _______) × 100 = _______ %
```

**Interpretation**:
- <40%: Poor efficiency
- 40-60%: Average for conventional systems
- >60%: Good efficiency
- >80%: Excellent (rarely achieved without recovery)

---

### Loss Analysis

Calculate percentage of total N input lost through each pathway:

| Loss Pathway | N Lost (kg) | % of Total Input |
|--------------|-------------|------------------|
| Plant residue | _______ | _______ % |
| Wastewater discharge | _______ | _______ % |
| Stock accumulation | _______ | _______ % |
| Unaccounted | _______ | _______ % |
| **TOTAL LOSSES** | _______ | _______ % |

---

## Part 5: Identify Circular Opportunities (45 min)

### Recovery Potential Assessment

For each loss pathway, evaluate recovery potential:

**1. Plant Residue Recovery**
- Current: 30 tonnes fresh waste → landfill/compost
- N content: _______ kg N/year

**Circular Options**:
- Option A: Composting with N retention
  - Recovery rate: 50-70%
  - Recovered N: _______ kg/year
  - Value (@ $3/kg N): $______

- Option B: Anaerobic digestion
  - N to digestate liquid: 60-70%
  - Recovered N (via ammonia stripping): _______ kg/year
  - Value: $______
  - Bonus: Biogas energy production

**Recommendation**: ________________

---

**2. Wastewater N Recovery**
- Current: 750 m³/year @ 120 mg/L = _______ kg N → discharge

**Circular Options**:
- Option A: Ion exchange
  - Recovery: 80-90%
  - Recovered N: _______ kg/year
  - Investment: ~$25,000
  - Operating cost: $3,000/year

- Option B: Integrate with plant waste treatment
  - Combined AD + struvite + ammonia stripping
  - Total N recovery: _______ kg/year
  - Investment: ~$75,000
  - Operating cost: $8,000/year
  - Additional value: Energy, P recovery

**Recommendation**: ________________

---

### Economic Analysis

**Total Recoverable N**: _______ kg/year

**Value of recovered N**:
- As fertilizer equivalent (@$3/kg N): $______/year
- Avoided disposal costs: $______/year
- **Total annual benefit**: $______/year

**Investment required**: $______
**Simple payback**: ______ years

**Recommendation**: Is circular intervention economically justified? ______

---

## Part 6: Reporting & Recommendations (30 min)

### Executive Summary Template

Prepare a one-page summary including:

**System Overview**:
- Farm: Happy Valley Farm, 2 ha greenhouse
- Material analyzed: Nitrogen
- Time period: One year

**Key Findings**:
- Total N input: _______ kg/year
- N in harvest: _______ kg/year
- NUE: _______ %
- Major losses:
  1. ____________: _______ kg N/year (___%)
  2. ____________: _______ kg N/year (___%)

**Circular Opportunities**:
1. ________________________
   - Recovery potential: _______ kg N/year
   - Investment: $______
   - Annual value: $______
   - Payback: ______ years

2. ________________________
   - Recovery potential: _______ kg N/year
   - Investment: $______
   - Annual value: $______
   - Payback: ______ years

**Recommendation**:
- Priority action: ________________________
- Expected NUE improvement: _______ % → _______ %
- Economic benefit: $______/year
- Environmental benefit: _______ kg N prevented from pollution

---

## Answer Key (for Instructors)

### Calculations:

**INPUTS**:
- Calcium nitrate: 434 kg N
- Potassium nitrate: 156 kg N
- Other: 50 kg N
- Water: 75 kg N
- **TOTAL: 715 kg N/year**

**OUTPUTS**:
- Fruit: 115 kg N
- Plant residue: 90 kg N
- Wastewater: 90 kg N
- Gaseous: 0 kg N
- **TOTAL: 295 kg N/year**

**STOCK CHANGE**:
- Initial: 7.2 kg N
- Final: 8.8 kg N
- **ΔStock: +1.6 kg N**

**BALANCE CHECK**:
715 - 295 - 1.6 = 418.4 kg N UNACCOUNTED

**Analysis**: Large imbalance indicates:
- Likely underestimation of gaseous losses (even in closed systems)
- Possible denitrification in recirculation system
- Measurement error in fertilizer application
- Additional system purges not accounted for

**Adjusted estimate**: Assume ~400 kg N additional system purges/losses

**NUE**: 115 / 715 × 100 = **16.1%** (very poor - typical issue with overfeeding)

**Recovery Potential**:
- Plant waste: 45-63 kg N/year (50-70% recovery)
- Wastewater: 72-81 kg N/year (80-90% recovery)
- **TOTAL: 117-144 kg N/year recoverable**

**Value**: 130 kg N × $3 = **$390/year** (minimum)

**Additional analysis**: The large unaccounted N suggests system optimization (better feed management) could reduce inputs by 50% (~$600/year savings) before even implementing recovery.

---

## Reflection Questions

1. What was the largest source of nitrogen loss in this system?
2. How did the actual NUE compare to typical greenhouse systems (50-70%)?
3. What explains the large mass balance discrepancy?
4. Which circular intervention would you prioritize and why?
5. What additional data would improve the MFA accuracy?
6. How might this analysis change seasonal patterns or system management?

---

## Extension Activities

1. **Repeat for Phosphorus**: Conduct P-MFA using similar methodology
2. **Scenario Analysis**: Model impact of 50% fertilizer reduction
3. **Software Practice**: Recreate analysis in STAN or Umberto
4. **Field Visit**: Conduct actual MFA for a local farm
5. **Comparison**: Analyze soil-based vs. hydroponic N efficiency

---

*Activity 1 Complete - Submit your MFA report and Sankey diagram*
