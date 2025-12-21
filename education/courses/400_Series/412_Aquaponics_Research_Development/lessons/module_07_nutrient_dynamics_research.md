# Module 7: Nutrient Dynamics Research

## Learning Objectives

- Develop comprehensive nutrient budget methodologies
- Apply isotope tracing techniques
- Study nutrient mineralization and transformation
- Investigate plant uptake kinetics
- Assess nutrient bioavailability

## 7.1 Comprehensive Nutrient Budget Methodology

### System-Wide Nutrient Accounting

```
COMPLETE NUTRIENT BUDGET FRAMEWORK:

┌─────────────────────────────────────────────┐
│  INPUT → TRANSFORMATION → OUTPUT            │
└─────────────────────────────────────────────┘

NITROGEN:
Feed N → Fish tissue + Excretion → TAN → NO₂⁻ → NO₃⁻ → Plants
                                   ↓      ↓      ↓
                              Sludge  Sludge  Effluent

PHOSPHORUS:
Feed P → Fish tissue + Excretion → Dissolved P → Plants
                                   ↓
                              Solid removal

POTASSIUM:
Feed K → Fish tissue + Excretion → K⁺ → Plants
                                   ↓
                              Water change

MICRONUTRIENTS:
Feed (Fe, Mn, Zn...) → Fish + Excretion → Dissolved → Plants
                                          ↓
                                    Precipitation
```

### Sampling Strategy

```
TEMPORAL SAMPLING DESIGN:

FREQUENCY BASED ON RATE OF CHANGE:
├── Continuous (automated): DO, T, pH
├── Hourly: TAN (high-density systems)
├── Daily: TAN, NO₂⁻, NO₃⁻
├── Weekly: PO₄³⁻, K⁺, micronutrients
├── Bi-weekly: Plant tissue analysis
└── Monthly: Fish tissue analysis

SPATIAL SAMPLING LOCATIONS:

Fish Tank → Solids Filter → Biofilter → Plant Beds → Sump
   ↓            ↓             ↓            ↓          ↓
Sample pt 1   Sample 2    Sample 3     Sample 4   Sample 5

Sludge collected from solids filter
Plant tissue from each bed
Fish samples (non-destructive if possible)

COMPOSITE vs. GRAB SAMPLES:
├── Composite: Better represents average (24-h flow-weighted)
├── Grab: Captures specific time points
└── Use composite for mass balance, grab for dynamics
```

### Analytical Methods

```
NITROGEN SPECIES ANALYSIS:

┌──────────────┬───────────────┬──────────────┬──────────┐
│  Parameter   │    Method     │  Detection   │   Range  │
│              │               │    Limit     │          │
├──────────────┼───────────────┼──────────────┼──────────┤
│ TAN          │ Salicylate    │  0.01 mg/L   │ 0-50     │
│              │ spectrophoto. │              │          │
├──────────────┼───────────────┼──────────────┼──────────┤
│ NO₂-N        │ Diazotization │  0.002 mg/L  │ 0-1.0    │
│              │ (Griess)      │              │          │
├──────────────┼───────────────┼──────────────┼──────────┤
│ NO₃-N        │ Cadmium red.  │  0.01 mg/L   │ 0-200    │
│              │ or enzymatic  │              │          │
├──────────────┼───────────────┼──────────────┼──────────┤
│ Organic N    │ Kjeldahl      │  0.1 mg/L    │ 0-100    │
│ (TKN - TAN)  │ digestion     │              │          │
├──────────────┼───────────────┼──────────────┼──────────┤
│ Total N      │ Persulfate    │  0.05 mg/L   │ 0-200    │
│              │ oxidation     │              │          │
└──────────────┴───────────────┴──────────────┴──────────┘

TISSUE NITROGEN:
Method: Dumas combustion or Kjeldahl digestion
Sample: 0.1-0.5 g dry tissue
Accuracy: ±0.1% N (dry weight basis)
```

## 7.2 Isotope Tracing Techniques

### Stable Isotope Methodology

```
ISOTOPE TRACERS IN AQUAPONICS:

¹⁵N (Nitrogen):
├── Natural abundance: 0.366%
├── Enrichment: 1-99 atom%
├── Detection: Mass spectrometry (IRMS)
└── Cost: $50-100 per sample

¹³C (Carbon):
├── Natural abundance: 1.11%
├── Useful for organic matter tracing
└── Often analyzed with ¹⁵N

EXPERIMENTAL DESIGN:

1. PULSE LABELING:
   Single dose of ¹⁵N-enriched compound
   Track movement through system over time

   Example: ¹⁵N-ammonium chloride addition

   Day 0: Add ¹⁵NH₄Cl to system (10 atom% excess)
   Days 1, 3, 7, 14, 21: Sample all compartments
   Measure: ¹⁵N enrichment in TAN, NO₂⁻, NO₃⁻, plants, fish

2. CONTINUOUS LABELING:
   Ongoing addition via labeled feed
   Steady-state enrichment

   Use: ¹⁵N-labeled fish feed
   Duration: 30-60 days
   Measure: Enrichment at steady state

ISOTOPE CALCULATIONS:

Atom% excess = Atom% sample - Atom% background

Fraction of N derived from source:
f = (Atom% sample - Atom% control) / (Atom% source - Atom% control)

Recovery in compartment:
R = (f × N_compartment) / N_added × 100%
```

### Case Study: N Transfer Pathways

```
¹⁵N TRACER STUDY RESULTS:

Addition: 100 mg ¹⁵N as NH₄⁺ (99 atom%)

Recovery after 14 days:
┌──────────────────┬──────────┬───────────┬──────────┐
│  Compartment     │ Total N  │ Atom%     │ Recovery │
│                  │   (mg)   │  excess   │    (%)   │
├──────────────────┼──────────┼───────────┼──────────┤
│ Water TAN        │    5     │   45.2    │    2.3   │
│ Water NO₂⁻       │    2     │   38.1    │    0.8   │
│ Water NO₃⁻       │   85     │   28.5    │   24.2   │
│ Plant tissue     │  320     │   15.3    │   48.9   │
│ Biofilm          │  180     │   12.1    │   21.8   │
│ Sludge           │   45     │    4.2    │    1.9   │
│ Fish tissue      │  150     │    0.1    │    0.1   │
├──────────────────┼──────────┼───────────┼──────────┤
│ TOTAL RECOVERY   │    -     │     -     │  100.0   │
└──────────────────┴──────────┴───────────┴──────────┘

INTERPRETATION:
- Rapid conversion: TAN → NO₂⁻ → NO₃⁻
- ~50% taken up by plants in 2 weeks
- ~22% immobilized in biofilm
- Minimal incorporation into fish (long turnover time)
```

## 7.3 Mineralization and Transformation Studies

### Organic Matter Decomposition

```
MINERALIZATION RATE DETERMINATION:

INCUBATION EXPERIMENT:
1. Collect solid waste (fish feces, uneaten feed)
2. Place in sealed containers with aeration
3. Measure TAN release over time
4. Calculate mineralization rate

FIRST-ORDER KINETICS MODEL:

TAN(t) = TAN_max × (1 - e^(-k×t))

Where:
TAN(t) = Cumulative TAN released (mg N)
TAN_max = Maximum mineralizable N (mg N)
k = Mineralization rate constant (day⁻¹)
t = Time (days)

EXAMPLE DATA:

Time  │ TAN Released │ Model Fit
(day) │    (mg N)    │  (mg N)
──────┼──────────────┼───────────
  0   │     0.0      │    0.0
  1   │     3.2      │    3.1
  2   │     5.8      │    5.8
  3   │     8.0      │    8.1
  5   │    11.5      │   11.6
  7   │    13.8      │   14.1
 10   │    16.2      │   16.4
 14   │    18.1      │   18.2
 21   │    19.5      │   19.4

Parameters: TAN_max = 20 mg N, k = 0.25 day⁻¹
Half-time: t₁/₂ = ln(2)/k = 2.8 days
```

### Nitrification Kinetics Research

```
BIOFILTER PERFORMANCE TESTING:

BATCH EXPERIMENT:
1. Collect biofilm sample
2. Place in reactor with known TAN
3. Monitor TAN, NO₂⁻, NO₃⁻ over time (hourly)
4. Maintain constant T, pH, DO
5. Calculate rates

ZERO-ORDER KINETICS (high substrate):
Rate = k₀ (mg N/L/h)
Independent of concentration

FIRST-ORDER KINETICS (low substrate):
Rate = k₁ × [TAN] (mg N/L/h)
Dependent on concentration

EXAMPLE RESULTS:

Ammonia Oxidation:
┌──────────┬─────────┬─────────┬─────────┐
│   Time   │   TAN   │   NO₂⁻  │   NO₃⁻  │
│   (h)    │ (mg N/L)│ (mg N/L)│ (mg N/L)│
├──────────┼─────────┼─────────┼─────────┤
│    0     │   5.0   │   0.1   │   0.2   │
│    2     │   3.8   │   1.2   │   0.3   │
│    4     │   2.7   │   2.1   │   0.5   │
│    6     │   1.8   │   2.6   │   0.9   │
│    8     │   1.1   │   2.5   │   1.8   │
│   10     │   0.6   │   1.9   │   3.0   │
│   12     │   0.3   │   1.1   │   4.2   │
│   14     │   0.1   │   0.5   │   4.9   │
└──────────┴─────────┴─────────┴─────────┘

AOB rate: 0.35 mg N/L/h
NOB rate: 0.32 mg N/L/h (slight lag)
```

## 7.4 Plant Uptake Kinetics

### Nutrient Depletion Studies

```
UPTAKE RATE METHODOLOGY:

SETUP:
├── Small-scale hydroponic systems
├── Individual plants or small groups
├── Recirculating nutrient solution
├── Volume: 5-10 L per plant
└── Duration: 24-72 hours

PROTOCOL:
1. Prepare nutrient solution at known concentration
2. Acclimate plants (2-3 days)
3. Replenish to target concentration
4. Monitor decline over time
5. Sample every 2-4 hours
6. Maintain constant pH, T, aeration

DATA ANALYSIS:

Uptake rate = (C₀ - Ct) × V / (Biomass × t)

Units: mg nutrient / g DW / day

MICHAELIS-MENTEN FIT:

V = V_max × [C] / (K_m + [C])

Plot: Uptake rate vs. Concentration
Determine: V_max (maximum rate), K_m (affinity)
```

### Multi-Nutrient Interactions

```
FACTORIAL NUTRIENT EXPERIMENT:

DESIGN: 3 × 3 factorial (N × P levels)

Nitrogen levels (mg N/L):  25, 50, 100
Phosphorus levels (mg P/L): 5, 10, 20

RESPONSE SURFACE:

Plant Biomass (g DW)
      ↑
      │           ┌─────┐
  100 │         ┌─┘     └─┐
      │       ┌─┘         └─┐
   80 │     ┌─┘             └─┐
      │   ┌─┘                 └─┐
   60 │ ┌─┘                     │
      │─┘                       └──
   40 └────────────────────────────→
        Low    Med    High  N level
             P level gradient

STATISTICAL MODEL:

Biomass = β₀ + β₁N + β₂P + β₃NP + ε

Where NP = interaction term

INTERPRETATION:
- Significant interaction: Optimal N depends on P level
- Identify limiting nutrient at each combination
- Determine optimal ratio for maximum growth
```

## 7.5 Bioavailability Assessment

### Chelated vs. Unchelated Micronutrients

```
IRON BIOAVAILABILITY STUDY:

TREATMENTS:
├── FeSO₄ (ferrous sulfate)
├── Fe-EDTA (synthetic chelate)
├── Fe-DTPA (synthetic chelate)
├── Fe-citrate (organic chelate)
└── Control (no addition)

MEASURED PARAMETERS:
1. Total Fe in solution (ICP-MS)
2. Dissolved Fe (<0.45 μm filter)
3. Plant tissue Fe content
4. Chlorophyll content (SPAD meter)
5. Plant biomass

RESULTS EXAMPLE:

┌──────────────┬──────────┬──────────┬──────────┐
│  Treatment   │ Plant Fe │ SPAD     │ Biomass  │
│              │ (mg/kg)  │ units    │ (g DW)   │
├──────────────┼──────────┼──────────┼──────────┤
│ Control      │   45     │   32.1   │   8.2    │
│ FeSO₄        │   82     │   38.5   │  11.5    │
│ Fe-EDTA      │  158     │   45.2   │  15.3    │
│ Fe-DTPA      │  142     │   43.8   │  14.8    │
│ Fe-citrate   │  121     │   41.5   │  13.9    │
└──────────────┴──────────┴──────────┴──────────┘

Bioavailability ranking:
Fe-EDTA > Fe-DTPA > Fe-citrate > FeSO₄ > Control

Cost-benefit analysis determines best choice
```

### pH Effects on Nutrient Availability

```
pH AVAILABILITY STUDY:

pH LEVELS TESTED: 5.0, 5.5, 6.0, 6.5, 7.0, 7.5, 8.0

NUTRIENT SOLUBILITY vs. pH:

Relative
Availability
   ↑
100%│ N ─────────────────────
    │ P      ┌──────┐
 75%│ K ────────────────────
    │       ┌┘      └┐
 50%│ Fe ──┘         └────
    │    Ca ────────────┐
 25%│  Mn  ┌──────┐    └──
    │     ┘      └┐
  0%└──────────────────────→ pH
      5.0  6.0  7.0  8.0

OPTIMAL pH RANGES:
├── N, P, K: Available across wide range
├── Fe, Mn, Zn: Prefer acidic (5.5-6.5)
├── Ca, Mg: Prefer slightly alkaline (6.5-7.5)
└── Compromise for aquaponics: 6.0-7.0

EXPERIMENTAL VERIFICATION:
- Maintain each pH for 4 weeks
- Monitor plant deficiency symptoms
- Measure tissue nutrient concentrations
- Correlate with growth performance
```

## Key Takeaways

1. **Complete Accounting** - Track all nutrient inputs and outputs
2. **Isotope Precision** - Use tracers for mechanistic understanding
3. **Process Rates** - Quantify transformation kinetics
4. **Uptake Dynamics** - Characterize plant nutrient requirements
5. **Bioavailability** - Assess actual plant-available fractions

## Practical Application

Design a comprehensive nutrient dynamics study:
1. Develop complete N and P budget protocol
2. Plan isotope tracer experiment
3. Design mineralization rate study
4. Outline plant uptake kinetics experiment
5. Create bioavailability assessment for Fe

## Further Reading

- Goddek, S., & Vermeulen, T. (2018). "Comparison of Lactuca sativa growth performance in RAS and aquaponics"
- Delaide, B., et al. (2016). "Plant and fish production performance in aquaponics"

---

**Next Module:** [Module 8: Microbial Ecology Studies](module_08_microbial_ecology.md)
