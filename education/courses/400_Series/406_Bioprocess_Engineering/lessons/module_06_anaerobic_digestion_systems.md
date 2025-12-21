# Module 6: Anaerobic Digestion Systems

## Learning Objectives

By the end of this module, you will be able to:
- Understand the microbiology and biochemistry of anaerobic digestion
- Design anaerobic digesters for agricultural waste treatment
- Calculate biogas production and energy recovery potential
- Optimize process conditions for stable digestion
- Design digestate processing and nutrient recovery systems
- Perform techno-economic analysis of anaerobic digestion projects

## 6.1 Anaerobic Digestion Fundamentals

### Four-Stage Process

**Complete Pathway:**

```
STAGE 1: HYDROLYSIS
Complex Organics → Simple Monomers
(Proteins, Carbohydrates, Lipids) → (Amino acids, Sugars, Fatty acids)
Microbes: Hydrolytic bacteria
Rate: Often limiting step for complex substrates

STAGE 2: ACIDOGENESIS (Fermentation)
Monomers → VFAs + H₂ + CO₂
Simple organics → Acetate, Propionate, Butyrate, H₂, CO₂
Microbes: Acidogenic bacteria (fast-growing)
Rate: Rapid, can cause pH drop if unbalanced

STAGE 3: ACETOGENESIS
VFAs + H₂ → Acetate + H₂
Propionate, Butyrate → Acetate + H₂ + CO₂
Microbes: Acetogenic bacteria
Rate: Thermodynamically unfavorable, requires low H₂

STAGE 4: METHANOGENESIS
Acetate → CH₄ + CO₂  (70% of CH₄)
H₂ + CO₂ → CH₄       (30% of CH₄)
Microbes: Methanogenic archaea (slow-growing)
Rate: Usually limiting step, sensitive to environment
```

**Integrated Process Diagram:**

```
                    ANAEROBIC DIGESTION

    Organic Waste (Carbs, Proteins, Lipids)
              │
              ▼ Hydrolytic Bacteria
    ┌─────────────────────────────────┐
    │  Soluble Organics               │
    │  (Sugars, Amino Acids, LCFA)    │
    └─────────┬───────────────────────┘
              ▼ Acidogenic Bacteria
    ┌─────────────────────────────────┐
    │  VFAs (Acetate, Propionate, etc)│
    │  + H₂ + CO₂                     │
    └─────┬───────────────────┬───────┘
          │                   │
          │                   ▼ Acetogenic Bacteria
          │         ┌─────────────────┐
          │         │ Acetate + H₂    │
          │         └────────┬────────┘
          │                  │
          ▼                  ▼
    ┌─────────────────────────────────┐
    │    METHANOGENESIS               │
    │  Acetoclastic:  Hydrogenotrophic│
    │  CH₃COOH → CH₄  H₂+CO₂ → CH₄    │
    └─────────┬───────────────────────┘
              ▼
         BIOGAS (CH₄ + CO₂)
```

### Microbiology

**Key Microbial Groups:**

```
Group              Doubling Time    pH Range    Temperature
Hydrolytic         0.5-2 days       6.0-8.0     Mesophilic/Thermophilic
Acidogenic         0.25-1 days      5.0-8.0     Wide range
Acetogenic         1-3 days         6.5-7.5     Narrow, sensitive
Methanogenic       3-20 days        6.8-7.5     Very narrow, sensitive

Methanogenic Archaea:
- Methanosarcina (acetoclastic, versatile)
- Methanosaeta (acetoclastic, high affinity for acetate)
- Methanobacterium (hydrogenotrophic)
- Methanococcus (hydrogenotrophic)
```

**Syntrophic Relationships:**

```
Critical partnership between acetogens and methanogens:

Propionate⁻ + 3H₂O → Acetate⁻ + H⁺ + HCO₃⁻ + 3H₂
ΔG°' = +76 kJ/mol (thermodynamically unfavorable)

Only proceeds if H₂ kept very low by methanogens:
4H₂ + CO₂ → CH₄ + 2H₂O
ΔG°' = -131 kJ/mol (favorable)

Result: H₂ partial pressure <10⁻⁴ atm required
Balance critical: Any disruption causes VFA accumulation
```

### Biogas Composition

**Typical Biogas:**

```
Component         Typical Range    Energy Impact
Methane (CH₄)     55-70%          Energy carrier (39.8 MJ/m³)
Carbon Dioxide    30-45%          Diluent (no energy)
Water Vapor       2-7%            Corrosion concern
Hydrogen Sulfide  100-5000 ppm   Toxic, corrosive
Nitrogen          0-5%            Diluent
Oxygen            0-2%            Oxidation concern
Ammonia           Trace-1%        Corrosion concern

Energy content:
- Raw biogas: 21-25 MJ/m³ (60% CH₄)
- Pure methane: 39.8 MJ/m³
- Natural gas: 35-40 MJ/m³
```

## 6.2 Process Design

### Substrate Characterization

**Key Parameters:**

```
Total Solids (TS):
TS (%) = (Dry weight / Wet weight) × 100

Typical ranges:
- Food waste: 15-25% TS
- Plant waste: 10-20% TS
- Animal manure: 5-15% TS
- Sludge: 2-8% TS

Volatile Solids (VS):
VS = TS - Ash (inorganic content)
VS/TS ratio typically 70-95%

Organic matter available for digestion ≈ VS
```

**Biochemical Composition:**

```
Substrate        Carbohydrates  Proteins  Lipids   C/N Ratio
Food waste       50-60%         15-20%   10-20%    14-16
Vegetable waste  60-80%         10-15%   2-5%      20-30
Animal manure    30-40%         15-25%   5-10%     6-25
Algae biomass    15-25%         40-60%   10-25%    6-10

C/N ratio optimization:
- Ideal: 20-30:1
- <15:1: Excess ammonia, pH rise, inhibition
- >35:1: Nitrogen limitation, slow degradation
```

**Biogas Potential Testing:**

```
BMP (Biochemical Methane Potential) test:
- Batch test, 30-90 days
- Measure cumulative CH₄ production
- Express as mL CH₄/g VS added

Typical BMP values:
- Carbohydrates: 370-415 mL CH₄/g VS
- Proteins: 496-700 mL CH₄/g VS
- Lipids: 1014-1250 mL CH₄/g VS
- Food waste: 350-550 mL CH₄/g VS
- Plant waste: 200-400 mL CH₄/g VS
- Manure: 150-300 mL CH₄/g VS

Theoretical maximum (Buswell equation):
CₙHₐOᵦNᵧ + (n-a/4-b/2+3y/4)H₂O →
    (n/2+a/8-b/4-3y/8)CH₄ + (n/2-a/8+b/4+3y/8)CO₂ + yNH₃
```

### Digester Sizing

**Organic Loading Rate (OLR) Approach:**

```
OLR = (Qfeed × VS) / Vdigester

Where:
OLR = organic loading rate (kg VS/m³/day)
Qfeed = feed rate (m³/day or kg/day)
VS = volatile solids concentration (kg VS/m³ or kg VS/kg)
Vdigester = digester volume (m³)

Typical OLR ranges:
- Mesophilic (35°C): 1-4 kg VS/m³/day
- Thermophilic (55°C): 2-6 kg VS/m³/day
- High-rate systems: 5-15 kg VS/m³/day

Conservative design: 2-3 kg VS/m³/day for stability
```

**Hydraulic Retention Time (HRT) Approach:**

```
HRT = Vdigester / Qfeed

Typical HRT:
- Mesophilic: 15-30 days
- Thermophilic: 10-20 days
- High-solids (>15% TS): 20-40 days
- Low-solids (<10% TS): 15-25 days

Relationship to SRT (Solids Retention Time):
For systems with solids settling/recycle: SRT > HRT
For complete mix systems: SRT = HRT
```

**Design Example:**

```
CEA facility generating:
- Vegetable waste: 500 kg/day (fresh weight)
- TS content: 15%
- VS/TS ratio: 85%

VS input = 500 kg/day × 0.15 × 0.85 = 63.75 kg VS/day

Design for OLR = 2.5 kg VS/m³/day:
Vdigester = 63.75 / 2.5 = 25.5 m³

Use 30 m³ digester (safety factor 1.18)

HRT calculation:
Density ≈ 1000 kg/m³
Qfeed = 500 kg/day / 1000 kg/m³ = 0.5 m³/day
HRT = 30 / 0.5 = 60 days

(High HRT due to high TS content - acceptable)

Expected biogas production:
BMP = 350 mL CH₄/g VS (typical for vegetable waste)
CH₄ production = 63.75 kg VS/day × 350 mL/g × 1000 g/kg
               = 22,312 L CH₄/day = 22.3 m³ CH₄/day

At 65% CH₄ in biogas:
Biogas production = 22.3 / 0.65 = 34.3 m³ biogas/day

Energy potential = 22.3 m³ CH₄/day × 9.97 kWh/m³ CH₄
                 = 222 kWh/day = 81,000 kWh/year
```

### Digester Configurations

**Continuously Stirred Tank Reactor (CSTR):**

```
    Feed ─────►  ┌──────────────┐
                 │    ┌───┐     │ ──────► Biogas
                 │    │ M │     │
    Heat ──────► │    └─┬─┘     │ ──────► Digestate
                 │      │       │
                 └──────┴───────┘
                     Mixer

Advantages:
- Complete mixing (uniform conditions)
- Suitable for low-solids (<12% TS)
- Easy to control
- Well-understood technology

Disadvantages:
- Requires significant mixing energy
- May short-circuit
- Not ideal for high-solids

Typical parameters:
- OLR: 2-4 kg VS/m³/day
- HRT: 15-25 days
- Temperature: 35-38°C (mesophilic)
```

**Plug Flow Digester:**

```
    Feed ────►  ║════════════════╗
                ║ → → → → → → → ║ ──────► Biogas
    Heat ─────► ║ → → → → → → → ║
                ║════════════════╝ ──────► Digestate

Advantages:
- Suitable for high-solids (11-14% TS)
- Minimal mixing energy
- No short-circuiting
- Better VS destruction

Disadvantages:
- Requires stackable solids
- Temperature gradients possible
- More complex design

Typical parameters:
- OLR: 3-6 kg VS/m³/day
- HRT: 20-30 days
- L/D ratio: 5:1 to 10:1
```

**Covered Lagoon:**

```
    ┌─────────── Floating Cover ───────────┐
    │  ╱╱╱╱╱╱╱╱╱ (Biogas collection) ╱╱╱╱  │
    ├───────────────────────────────────────┤
    │                                       │
    │        Liquid with solids            │ Feed
    │                                       │◄────
    │                                       │
    └───────────────┬───────────────────────┘
                    ↓
                Effluent

Advantages:
- Very low capital cost
- Large capacity
- Minimal operation

Disadvantages:
- Large footprint
- Temperature not controlled
- Seasonal performance variation
- Long HRT (60-180 days)

Applications:
- Warm climates only
- Large-scale operations
- Low-value waste streams
```

## 6.3 Process Control and Optimization

### Critical Operating Parameters

**Temperature:**

```
Mesophilic (30-38°C):
- Optimum: 35-37°C
- More stable and forgiving
- Lower biogas yield
- Most common for agricultural applications

Thermophilic (50-60°C):
- Optimum: 55°C
- Higher biogas yield (+10-20%)
- Faster kinetics (shorter HRT)
- Better pathogen destruction
- More sensitive to upsets
- Higher energy requirement

Temperature stability critical: ±1-2°C maximum variation
```

**pH Control:**

```
Optimal pH: 6.8-7.4
Acceptable: 6.5-7.8

pH monitoring:
- Acidogenic bacteria: pH 5.5-6.5 (can tolerate low pH)
- Methanogenic archaea: pH 6.8-7.4 (sensitive to low pH)

Low pH (<6.5) indicates:
- VFA accumulation
- Overloading
- Inhibition of methanogens

High pH (>7.8) indicates:
- Ammonia accumulation
- Protein-rich substrate
- Potential free ammonia toxicity

Buffer capacity (alkalinity):
- Maintain >2000 mg/L as CaCO₃
- Bicarbonate buffering system critical
```

**Volatile Fatty Acids (VFAs):**

```
VFA monitoring essential for process stability:

VFA concentration:
- Stable operation: <1000 mg/L as acetate
- Accumulating: 1000-2000 mg/L
- Stressed: >2000 mg/L

VFA/Alkalinity ratio:
- Stable: <0.3
- Warning: 0.3-0.4
- Unstable: >0.4

VFA speciation important:
- Acetate: Directly converted to CH₄
- Propionate: Requires acetogenesis (sensitive)
- Butyrate: Intermediate

Propionate accumulation indicates syntrophic imbalance
```

**Ammonia:**

```
Total Ammonia Nitrogen (TAN):
- Low: <1000 mg/L (no inhibition)
- Moderate: 1000-3000 mg/L (some inhibition)
- High: 3000-5000 mg/L (significant inhibition)
- Toxic: >5000 mg/L (severe inhibition)

Free ammonia (NH₃) is inhibitory form:
NH₃ (mg/L) = (TAN × 10^pH) / (e^(6344/(273+T)) + 10^pH)

At pH 7.5, 35°C, TAN 3000 mg/L:
NH₃ ≈ 200 mg/L (moderate inhibition)

Mitigation strategies:
1. Dilution with low-N substrates
2. Co-digestion with C-rich materials
3. Recirculation of digestate
4. Ammonia stripping
5. Addition of zeolites (ammonia adsorption)
```

### Monitoring Program

**Routine Monitoring:**

```
Parameter           Frequency    Target Range
Biogas production   Daily        Track trend
Biogas composition  Weekly       60-70% CH₄
pH                  Daily        6.8-7.4
Temperature         Continuous   ±1°C of setpoint
VFA                 Weekly       <1000 mg/L
VFA/Alk ratio       Weekly       <0.3
Alkalinity          Weekly       >2000 mg/L CaCO₃
TAN                 Weekly       <3000 mg/L
TS/VS (feed)        Weekly       Track variation
TS/VS (digestate)   Monthly      Measure destruction

Advanced:
ORP                 Continuous   -300 to -400 mV
H₂S in biogas       Weekly       <2000 ppm
Foam/scum           Daily        Visual inspection
```

### Process Optimization

**Co-Digestion:**

```
Mixing complementary substrates improves performance:

Example combinations:
1. Vegetable waste + Fish sludge
   - Balances C/N ratio
   - Increases biogas yield
   - Dilutes potential inhibitors

2. Plant waste + Manure
   - Manure provides nutrients and alkalinity
   - Plant waste increases VS content
   - Synergistic effect

Optimization approach:
- Characterize individual substrates (C/N, VS, BMP)
- Test mixing ratios in bench-scale BMP tests
- Identify optimal blend
- Scale up gradually

Typical improvement: 10-30% biogas yield increase
```

**Trace Nutrient Addition:**

```
Methanogens require trace metals:

Essential nutrients (mg/L):
- Nickel (Ni): 0.005-0.5
- Cobalt (Co): 0.003-0.5
- Molybdenum (Mo): 0.001-0.05
- Selenium (Se): 0.001-0.08
- Tungsten (W): 0.001-0.05
- Iron (Fe): 1-10

Deficiency symptoms:
- Low biogas yield
- VFA accumulation
- Slow recovery from upsets

Testing:
- Analyze digestate for trace metals
- Compare to recommended levels
- Add commercial trace element solutions if deficient
```

## 6.4 Biogas Utilization

### Gas Cleanup and Conditioning

**H₂S Removal:**

```
Methods:

1. Biological desulfurization (in-situ):
   - Inject 2-6% air into headspace
   - Sulfide-oxidizing bacteria (Thiobacillus)
   - 2H₂S + O₂ → 2S + 2H₂O
   - Cost: Low, simple
   - Efficiency: 90-99%

2. Iron sponge (ex-situ):
   - Fe₂O₃ + 3H₂S → Fe₂S₃ + 3H₂O
   - Cost: Moderate
   - Efficiency: >99%
   - Maintenance: Replace when saturated

3. Activated carbon (ex-situ):
   - Adsorption + catalytic oxidation
   - Cost: Moderate-high
   - Efficiency: >99%
   - Maintenance: Regenerable

4. Chemical scrubbing:
   - NaOH or KOH solution
   - Cost: High (chemical consumption)
   - Efficiency: >99.9%
   - Best for large-scale
```

**Moisture Removal:**

```
Methods:
1. Refrigeration chilling
   - Cool biogas to 4-8°C
   - Condense water vapor
   - Simple, effective

2. Desiccant drying
   - Silica gel, molecular sieves
   - Achieves -40°C dewpoint
   - Required for vehicle fuel use

3. Membrane separation
   - Selectively permeable membranes
   - Simultaneous H₂O and CO₂ removal
   - High efficiency, compact
```

**CO₂ Removal (Biogas Upgrading):**

```
For pipeline injection or vehicle fuel:
Target: >95% CH₄, <2% CO₂

Technologies:

1. Water scrubbing:
   - High-pressure (6-10 bar)
   - Counter-current absorption
   - CH₄ loss: 2-4%
   - Cost: $0.20-0.35/m³ biogas

2. Chemical scrubbing:
   - Amine solutions
   - Low pressure
   - CH₄ loss: <1%
   - Cost: $0.25-0.40/m³ biogas

3. Pressure swing adsorption (PSA):
   - Molecular sieves
   - CH₄ purity: >98%
   - CH₄ loss: 2-4%
   - Cost: $0.30-0.50/m³ biogas

4. Membrane separation:
   - Selective permeation
   - Compact, modular
   - CH₄ loss: 2-8%
   - Cost: $0.25-0.45/m³ biogas
```

### Energy Recovery Technologies

**Combined Heat and Power (CHP):**

```
Internal combustion engine + generator:

Electrical efficiency: 30-42%
Thermal efficiency: 40-50%
Total efficiency: 70-90%

Example (100 kW_e unit):
Biogas input: 300 kW (LHV basis)
Electricity output: 100 kW_e
Heat output (recoverable): 140 kW_th
Losses: 60 kW

Applications of heat:
- Digester heating (first priority)
- Greenhouse heating
- Hot water production
- Absorption chilling

Payback: 3-7 years (with incentives)
        5-12 years (without incentives)
```

**Boiler Combustion:**

```
Direct combustion for heat only:

Thermal efficiency: 85-92%

Applications:
- Process heating
- Space heating
- Hot water

Simpler than CHP, lower capital cost
Best when heat demand high, electricity value low
```

**Vehicle Fuel:**

```
After upgrading to biomethane:
- Compressed Natural Gas (CNG) equivalent
- Use in natural gas vehicles
- Energy density: ~9.5 kWh/m³ at 200 bar

Infrastructure requirements:
- Compression to 200-250 bar
- Storage tanks
- Dispensing equipment

Economics:
- Capital cost: $500,000-1,000,000 (small station)
- Fuel value: $0.70-1.20/kg (gasoline equivalent)
- Best for fleet vehicles (return to base)
```

## 6.5 Digestate Management

### Characteristics

**Composition:**

```
Typical digestate (from food/plant waste):
- TS: 3-8%
- VS reduction: 40-60%
- pH: 7.5-8.5
- TAN: 1000-4000 mg/L
- Total N: 2000-6000 mg/L
- Total P: 500-1500 mg/L
- Total K: 1000-4000 mg/L

Nutrient form:
- Nitrogen: 60-80% as NH₄⁺ (plant-available)
- Phosphorus: Partially dissolved
- Potassium: Fully dissolved

Advantages as fertilizer:
- High nutrient availability
- Pathogen reduction
- Improved soil structure
- Slow-release nutrients
```

### Separation Technologies

**Solid-Liquid Separation:**

```
Methods:

1. Screw press:
   - Separation efficiency: 20-35% solids capture
   - Cake: 20-30% TS
   - Throughput: 5-50 m³/h
   - Cost: $20,000-100,000

2. Belt press:
   - Separation efficiency: 25-40%
   - Cake: 18-28% TS
   - Requires polymer addition
   - Cost: $50,000-200,000

3. Centrifuge:
   - Separation efficiency: 40-60%
   - Cake: 25-35% TS
   - High energy consumption
   - Cost: $100,000-500,000

4. Geotextile bags:
   - Passive drainage
   - Cake: 15-25% TS (after weeks)
   - Very low cost
   - Large footprint
```

**Nutrient Recovery:**

```
Ammonia stripping:
- Heat liquid digestate to 60-80°C
- Adjust pH >9.0
- Strip NH₃ with air
- Capture in acid solution → Ammonium sulfate fertilizer

Recovery efficiency: 70-95% of TAN
Product: 40% (NH₄)₂SO₄ solution

Struvite precipitation:
- Add Mg source (MgCl₂, MgO)
- Adjust pH 8.5-9.5
- Precipitate MgNH₄PO₄·6H₂O (struvite)

Recovery: 80-95% of P, 10-20% of N
Product: Slow-release fertilizer pellets
Market value: $300-600/ton
```

## 6.6 Economic Analysis

**Capital Costs (2025):**

```
Component              Cost ($/m³ digester volume)
CSTR digester tank     $400-800
Plug flow digester     $300-600
Mixing system          $50-150
Heating system         $100-200
Gas storage            $50-100
Gas cleanup            $100-300
CHP system            $800-1500/kW_e installed
Digestate storage      $50-150/m³
Total (typical)        $1500-3000/m³

Example 1000 m³ digester:
Capital cost: $1.5-3.0 million

Economies of scale apply:
<100 m³: $3000-5000/m³
100-500 m³: $2000-3500/m³
500-2000 m³: $1500-2500/m³
>2000 m³: $1000-2000/m³
```

**Operating Costs:**

```
Annual O&M: 3-5% of capital cost
Energy consumption: 10-15% of produced energy
Labor: 0.5-2 FTE depending on size
Maintenance: 1-2% of capital annually
Insurance: 0.5-1% of capital
```

**Revenue Streams:**

```
1. Electricity sales:
   $0.05-0.15/kWh (depends on incentives)

2. Heat utilization:
   $0.03-0.08/kWh equivalent

3. Tipping fees avoided:
   $30-150/ton waste

4. Fertilizer value:
   $10-30/ton digestate

5. Carbon credits:
   $10-50/ton CO₂-eq avoided
```

**Example Economics:**

```
500 kg/day vegetable waste, 30 m³ digester:

Capital cost: $75,000

Biogas: 34 m³/day
Electricity (CHP): 140 kWh/day = 51,000 kWh/year

Revenues:
- Electricity: 51,000 kWh × $0.10 = $5,100/year
- Tipping fee avoided: 180 tons × $50 = $9,000/year
- Fertilizer value: 180 tons × $15 = $2,700/year
Total: $16,800/year

Operating costs: $3,000/year

Net annual benefit: $13,800/year
Simple payback: 5.4 years
IRR: 15-18%
```

## Summary

Anaerobic digestion transforms organic waste into valuable biogas and nutrient-rich digestate. Successful implementation requires understanding of the four-stage microbial process, appropriate reactor design, careful process control, and integration with energy and nutrient recovery systems. For CEA facilities, AD offers waste valorization, renewable energy generation, and nutrient recycling opportunities.

## Key Takeaways

1. AD is a four-stage microbial process requiring syntrophic relationships
2. Methanogens are slow-growing and sensitive, requiring stable conditions
3. OLR and HRT are key design parameters for reactor sizing
4. Temperature, pH, VFA, and ammonia must be monitored and controlled
5. Co-digestion improves biogas yield and process stability
6. Biogas requires cleanup before energy recovery (H₂S, moisture removal)
7. CHP provides highest overall efficiency for energy recovery
8. Digestate is valuable as fertilizer with high nutrient availability

## Further Reading

- Angelidaki, I. et al. (2009). "Defining the Biomethane Potential (BMP)." *Water Science & Technology*.
- Deublein, D. & Steinhauser, A. (2011). *Biogas from Waste and Renewable Resources*, 2nd ed.
- Ward, A.J. et al. (2008). "Optimisation of the Anaerobic Digestion of Agricultural Resources." *Bioresource Technology*.
- Weiland, P. (2010). "Biogas Production: Current State and Perspectives." *Applied Microbiology and Biotechnology*.

## Review Questions

1. Describe the four stages of anaerobic digestion and key microorganisms.
2. Why is the syntrophic relationship between acetogens and methanogens critical?
3. Calculate required digester volume for 1000 kg/day waste at 12% VS, OLR = 3 kg/m³/day.
4. What is the optimal pH range for methanogenesis and why?
5. How does ammonia concentration affect the digestion process?
6. Calculate expected biogas production from 100 kg VS/day vegetable waste (BMP = 400 mL/g VS).
7. What are the advantages and disadvantages of thermophilic vs. mesophilic operation?
8. Describe three methods for H₂S removal from biogas.
9. What is the typical electrical efficiency of CHP systems?
10. How does digestate compare to raw organic waste as a fertilizer?

---

**Next Module:** Module 7 - Aerobic Composting Process Engineering
