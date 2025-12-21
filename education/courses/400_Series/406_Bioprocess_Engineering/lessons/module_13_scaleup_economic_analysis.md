# Module 13: Scale-up and Economic Analysis

## Learning Objectives

- Apply scale-up principles from laboratory to commercial scale
- Perform techno-economic analysis of bioprocess systems
- Calculate capital and operating costs
- Conduct sensitivity and risk analysis
- Evaluate project feasibility and optimization

## 13.1 Scale-up Fundamentals

### Scale-up Criteria

```
Parameter          Lab (5L)    Pilot (500L)   Production (50,000L)
Volume ratio       1×          100×           10,000×
Linear dimension   1×          4.6×           21.5×
Surface/Volume     1×          0.22×          0.047×
Power/Volume       Maintain    Maintain       Maintain (typical)
Mixing time        10 s        46 s           100 s (increases)
Heat transfer      Easy        Moderate       Challenging
Aeration (KLa)     High        Medium         Lower (maintain)
```

### Scale-up Strategies

**1. Constant Power per Volume (P/V):**
```
Most common for aerobic fermentations

(P/V)₁ = (P/V)₂

At constant geometry:
N₂ = N₁ × (V₁/V₂)^(2/9)

5L to 5000L (1000× scale-up):
N₂ = N₁ × (1/1000)^(2/9) = N₁ × 0.304

If N₁ = 300 RPM, then N₂ = 91 RPM

Power requirement:
P = Np × ρ × N³ × D⁵
P₂ = P₁ × (1000) = 1000× power increase for same P/V
```

**2. Constant Tip Speed:**
```
For shear-sensitive organisms (animal cells, some fungi)

v_tip = π × D × N = constant

N₂ = N₁ × (D₁/D₂)

Geometric scaling: D₂/D₁ = (V₂/V₁)^(1/3)

5L to 5000L:
D₂/D₁ = 10
N₂ = N₁ × 0.1 = 30 RPM (if N₁ = 300 RPM)

Result: Lower power input, gentler mixing
```

**3. Constant Oxygen Transfer (KLa):**
```
Critical for oxygen-limited processes

KLa ∝ (P/V)^α × (v_s)^β

Where α ≈ 0.4-0.7, β ≈ 0.3-0.5

To maintain KLa:
Increase specific power input at larger scale
Or increase aeration rate
Or use pure O₂ enrichment
```

## 13.2 Scale-up Challenges

### Mass Transfer Limitations

```
Problem: Surface area/volume decreases with scale

Lab (5L, D=0.15m):     A/V = 26.7 m²/m³
Production (50,000L, D=3.0m): A/V = 1.3 m²/m³

Impact on oxygen transfer:
OTR = KLa × (C* - C)

If KLa decreases 50% at large scale:
Must increase (C* - C) → Lower operating DO
Or increase KLa → Higher agitation/aeration → Higher costs

Solutions:
- O₂ enrichment (25-50% vs. 21% in air)
- Multiple impellers
- Higher pressure (increases C*)
- External loop with high-shear zone
```

### Heat Transfer Challenges

```
Metabolic heat generation ∝ Volume (V)
Heat removal ∝ Surface area (A)

A/V decreases with scale → Cooling more difficult

Example:
5L fermenter: Jacket cooling adequate
5000L fermenter: Jacket + internal coils required
50,000L: External heat exchanger necessary

Heat generation (aerobic fermentation):
Q = μ × X × V × (-ΔH_combustion)
  ≈ 20-40 kJ/g cells produced

50,000L at 2 g/L/day:
Q = 100 kg/day × 30 kJ/g = 3,000,000 kJ/day
  = 34.7 kW continuous

Cooling requirement:
U × A × ΔT > 34.7 kW
If U=300 W/m²K, ΔT=10K:
A > 11.6 m² (jacket provides ~15 m², adequate)
```

### Mixing Non-idealities

```
Large vessels develop:
- Dead zones (poor circulation)
- Concentration gradients
- Settling of solids

Circulation time:
t_circ ≈ V / Q_pump ≈ H / v_tip

5L: ~10 seconds
5000L: ~60 seconds

Consequence:
- Substrate pulses at feed point
- pH variations in vessel
- Temperature stratification

Mitigation:
- Multiple feed points
- Multiple impellers (top + bottom)
- Baffles (4 standard, 90° apart)
- Ensure turbulent flow (Re > 10,000)
```

## 13.3 Pilot-Scale Studies

### Purpose and Design

```
Pilot scale objectives:
1. Validate lab-scale results at intermediate scale
2. Identify scale-up challenges early
3. Generate data for commercial design
4. Train operators
5. Produce material for market testing

Typical pilot scales:
- 10-100× lab scale
- 10-100L for cell culture
- 100-1000L for microbial fermentation
- 1-10 m³ for waste treatment

Duration:
- 10-50 batches
- Vary conditions systematically
- Include failure modes
```

### Scale-down Approach

```
Concept: Mimic large-scale environment in lab

Why: Large-scale reactors have gradients
Lab: Well-mixed, homogeneous (unrealistic)

Scale-down reactor:
- Two vessels: Well-mixed + poorly-mixed
- Circulation between them
- Recreates concentration/pH pulses
- Better predicts industrial performance

Example: E. coli fermentation
- Lab (homogeneous): Yield = 0.50 g/g
- Scale-down (gradients): Yield = 0.42 g/g
- Industrial (actual): Yield = 0.40 g/g

Scale-down predicts industrial better than standard lab
```

## 13.4 Capital Cost Estimation

### Equipment Costs

```
Major equipment (2025 costs):

Stainless steel fermenters:
- 100L: $15,000-30,000
- 1,000L: $50,000-100,000
- 10,000L: $200,000-400,000
- 100,000L: $1,000,000-2,000,000

Scaling factor method:
Cost₂ = Cost₁ × (Size₂/Size₁)^n

Where n ≈ 0.6-0.7 (economy of scale)

Example:
1,000L fermenter: $75,000
10,000L = $75,000 × (10)^0.65 = $335,000

Auxiliary equipment (% of fermenter cost):
- Heating/cooling system: 20-30%
- Aeration system: 15-25%
- Instrumentation: 20-40%
- Pumps and valves: 10-20%
- Harvest/separation: 30-60%
```

### Total Capital Investment

```
Installation factors:

Purchased equipment (PE): $1,000,000

Installation factors (Lang method):
Piping: 0.3 × PE = $300,000
Instrumentation: 0.2 × PE = $200,000
Electrical: 0.1 × PE = $100,000
Buildings: 0.4 × PE = $400,000
Site preparation: 0.1 × PE = $100,000
Utilities: 0.3 × PE = $300,000

Installed cost: 2.4 × PE = $2,400,000

Indirect costs:
Engineering (15% IC): $360,000
Contingency (20% IC): $480,000
Working capital (10% TCI): $324,000

Total Capital Investment: $3,564,000

Quick estimate: TCI ≈ 3-4 × PE (process dependent)
```

## 13.5 Operating Cost Analysis

### Cost Components

```
Variable costs (per batch or per unit time):

Raw materials:
- Substrate: $X per kg product
- Nutrients: $Y per kg product
- Inoculumpreparation: $Z per batch

Utilities:
- Steam: $15-30 per ton
- Electricity: $0.08-0.15 per kWh
- Water: $1-3 per m³
- Cooling: $5-15 per ton refrigeration-hour
- Compressed air: $0.02-0.05 per m³

Fixed costs (annual):

Labor:
- Operators: 3-6 FTE @ $40,000-80,000 each
- Supervisors: 1-2 FTE @ $60,000-100,000
- QC technicians: 1-3 FTE @ $45,000-75,000
- Maintenance: 1-3 FTE @ $50,000-85,000

Overhead:
- Maintenance (3-5% of capital annually)
- Insurance (0.5-1% of capital)
- Property tax (1-2% of capital)
- Administration (10-20% of labor)
- R&D (2-5% of sales)
```

### Cost of Goods Sold (COGS)

```
Example: Citric acid production (10,000 L batch)

Variable costs per batch:
- Glucose (1500 kg @ $0.60/kg): $900
- Other nutrients: $150
- Steam (2 tons @ $20/ton): $40
- Electricity (500 kWh @ $0.10/kWh): $50
- Water (15 m³ @ $2/m³): $30
- Enzymes/chemicals: $100
Total variable: $1,270

Production: 1000 kg citric acid
Variable cost: $1.27/kg

Fixed costs (annual, 100 batches/year):
- Labor (4 FTE @ $60,000): $240,000
- Maintenance (4% of $2M capital): $80,000
- Insurance/tax: $40,000
- Overhead: $60,000
Total fixed: $420,000

Fixed cost per batch: $4,200
Fixed cost per kg: $4.20/kg

COGS = $1.27 + $4.20 = $5.47/kg

If market price = $8/kg:
Gross margin = $8 - $5.47 = $2.53/kg (32%)
```

## 13.6 Profitability Analysis

### Financial Metrics

**Net Present Value (NPV):**

```
NPV = Σ[CFₜ / (1+r)ᵗ] - Initial Investment

Where:
CFₜ = cash flow in year t
r = discount rate (8-15% typical)
t = year (0 to project life)

Example: 10-year project, r=10%
Year 0: -$3,000,000 (capital)
Years 1-10: +$500,000/year (profit)

NPV = -$3,000,000 + $500,000 × [1-(1.1)⁻¹⁰]/0.1
    = -$3,000,000 + $500,000 × 6.145
    = -$3,000,000 + $3,072,500
    = +$72,500

NPV > 0: Project is economically viable
```

**Internal Rate of Return (IRR):**

```
Discount rate where NPV = 0

Same example:
0 = -$3,000,000 + $500,000 × [(1-(1+IRR)⁻¹⁰)/IRR]

Solve iteratively: IRR = 10.6%

Interpretation:
If required return = 10%, project acceptable (IRR > 10%)
If required return = 12%, project not acceptable
```

**Payback Period:**

```
Time to recover initial investment

Payback = Initial Investment / Annual Cash Flow
        = $3,000,000 / $500,000
        = 6 years

Simple metric but ignores time value of money
Discounted payback more accurate
```

## 13.7 Sensitivity and Risk Analysis

### Sensitivity Analysis

```
Identify critical parameters affecting profitability

Base case: NPV = $72,500

Vary key parameters ±20%:

Parameter           -20%        Base       +20%        Sensitivity
Selling price     -$775k      $72.5k     $920k       Very High
Production volume -$650k      $72.5k     $795k       Very High
Raw material cost  $425k      $72.5k    -$280k       High
Capital cost       $245k      $72.5k    -$100k       Medium
Labor cost         $160k      $72.5k     -$15k       Low

Tornado diagram ranks sensitivities
Focus optimization on high-sensitivity parameters
```

### Monte Carlo Simulation

```
Probabilistic analysis:

Define distributions for uncertain parameters:
- Selling price: Normal (μ=$8/kg, σ=$1/kg)
- Yield: Triangular (min=0.60, mode=0.70, max=0.75 g/g)
- Capital: Uniform ($2.5M to $3.5M)

Run 10,000 simulations:
- Sample from distributions
- Calculate NPV for each scenario
- Generate probability distribution of outcomes

Results:
- P(NPV > 0) = 68% (probability of profit)
- Expected NPV = $125,000 (mean of distribution)
- 5th percentile NPV = -$450,000 (worst case)
- 95th percentile NPV = $710,000 (best case)

Decision support: 68% success probability acceptable?
```

## 13.8 Case Study: AD System Scale-up

```
Project: Scale up anaerobic digester from 1 m³ pilot to 500 m³ commercial

Pilot data (1 m³, 2 years operation):
- OLR: 2.5 kg VS/m³/day
- HRT: 25 days
- Biogas yield: 0.35 m³/kg VS
- CH₄ content: 62%
- Stability: VFA <1000 mg/L

Commercial design (500 m³):

Capacity:
- Volume: 500 m³
- OLR: 2.0 kg VS/m³/day (conservative, 80% of pilot)
- Daily input: 1000 kg VS/day
- Feed: 2000 kg/day @ 50% VS content

Production:
- Biogas: 350 m³/day
- CH₄: 217 m³/day
- Energy: 2,170 kWh/day = 792,000 kWh/year

Capital costs:
- Digester tank (CSTR, insulated): $400,000
- Mixing system: $80,000
- Heating system: $60,000
- Gas handling: $100,000
- Feed/discharge: $60,000
- Instrumentation: $80,000
- CHP unit (100 kW_e): $250,000
- Installation (40%): $404,000
- Engineering/contingency (30%): $422,000
Total: $1,856,000

Operating costs (annual):
- Labor (0.5 FTE): $40,000
- Maintenance (3% capital): $56,000
- Utilities (net after CHP): $10,000
- Insurance/overhead: $30,000
Total: $136,000

Revenue (annual):
- Electricity (792,000 kWh @ $0.10): $79,200
- Tipping fee avoided (730 tons @ $50/ton): $36,500
- Digestate fertilizer value: $15,000
Total: $130,700

Analysis:
Annual benefit = $130,700 - $136,000 = -$5,300 (negative!)

Problem: Operating costs exceed revenue

Solutions:
1. Increase scale (economy of scale)
2. Higher tipping fees ($80/ton → +$22,000/year)
3. Renewable energy incentives ($0.03/kWh → +$24,000/year)
4. Reduce O&M through automation

Revised (with incentives):
Annual benefit = $177,000 - $136,000 = $41,000
Simple payback = 45 years (still marginal)
NPV (20 years, 8%) = -$450,000 (not viable)

Conclusion: Needs larger scale (2000-5000 m³) or better market conditions
```

## Summary

Scale-up requires careful consideration of physical, biological, and economic factors. Maintaining critical parameters (P/V, KLa, mixing) ensures process performance. Comprehensive economic analysis including capital costs, operating costs, and profitability metrics guides decision-making. Sensitivity and risk analysis quantify uncertainty and identify optimization priorities.

## Key Takeaways

1. Scale-up maintains critical parameters (P/V, KLa, tip speed)
2. Mass and heat transfer become more challenging at larger scale
3. Pilot studies validate lab results and identify scale-up issues
4. Capital costs estimated using scaling factors and installation multipliers
5. Operating costs include variable (materials, utilities) and fixed (labor, overhead)
6. NPV, IRR, and payback period assess project viability
7. Sensitivity analysis identifies critical parameters
8. Many bioprocesses require large scale for profitability

## Further Reading

- Marques, M.P.C. (2018). "Scale-up of Biotechnology Processes." *Biotech. Adv.*
- Doran, P.M. (2012). *Bioprocess Engineering Principles*, Chapter 15.
- Peters, M.S. et al. (2003). *Plant Design and Economics for Chemical Engineers*, 5th ed.

## Review Questions

1. Calculate impeller speed for 100× scale-up maintaining constant P/V.
2. Why does heat transfer become more difficult at larger scale?
3. Estimate capital cost for 20,000L fermenter using 2,000L cost of $120,000.
4. Calculate COGS for enzyme production (detail variable and fixed costs).
5. Compute NPV for project with $2M investment, $300k/year profit, 10 years, 8% discount.
6. What is IRR and how does it differ from NPV?
7. Perform sensitivity analysis for selling price variation ±30%.
8. Why did the AD case study show negative economics initially?

---

**Next Module:** Module 14 - Regulatory Compliance and Sustainability
