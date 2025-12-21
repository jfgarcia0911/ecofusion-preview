# Module 5: Denitrification and Nitrogen Management

## Learning Objectives

By the end of this module, you will be able to:
- Understand the biochemistry and microbiology of denitrification
- Design denitrification reactors for nitrogen removal
- Calculate carbon source requirements and dosing strategies
- Integrate nitrification-denitrification systems
- Optimize total nitrogen removal in CEA facilities
- Implement nitrogen mass balance for system design

## 5.1 Denitrification Fundamentals

### Biochemistry of Denitrification

**Sequential Reduction Process:**

```
NO₃⁻ → NO₂⁻ → NO → N₂O → N₂
(Nitrate) (Nitrite) (Nitric Oxide) (Nitrous Oxide) (Nitrogen Gas)

Enzymes:
- Nitrate reductase (NO₃⁻ → NO₂⁻)
- Nitrite reductase (NO₂⁻ → NO)
- Nitric oxide reductase (NO → N₂O)
- Nitrous oxide reductase (N₂O → N₂)

Overall stoichiometry (using methanol):
5 CH₃OH + 6 NO₃⁻ → 3 N₂ + 5 CO₂ + 7 H₂O + 6 OH⁻
```

**Energy Yield:**

```
Using glucose as electron donor:
C₆H₁₂O₆ + 4.8 NO₃⁻ → 2.4 N₂ + 6 CO₂ + 6 H₂O

ΔG°' = -2870 kJ/mol glucose

Much higher than aerobic respiration of same substrate
Explains why denitrifiers readily use NO₃⁻ when O₂ limited
```

### Denitrifying Bacteria

**Common Genera:**

```
Genus              Type            Carbon Source    Growth Rate
Pseudomonas       Heterotroph     Organic          Fast (μmax ~ 0.3 h⁻¹)
Paracoccus        Heterotroph     Organic/H₂       Fast (μmax ~ 0.25 h⁻¹)
Bacillus          Heterotroph     Organic          Medium (μmax ~ 0.2 h⁻¹)
Thiobacillus      Autotroph       Sulfur           Slow (μmax ~ 0.05 h⁻¹)
```

**Characteristics:**
- Facultative anaerobes (can use O₂ or NO₃⁻)
- Require carbon source (organic or inorganic)
- Produce alkalinity (opposite of nitrification)
- Present in most environments
- Fast-growing compared to nitrifiers

### Environmental Requirements

**Critical Conditions:**

```
Parameter          Optimal Range   Effect if Outside Range
Dissolved O₂      <0.5 mg/L       DO >2 mg/L inhibits denitrification
Temperature       20-30°C         Rate decreases ~50% per 10°C drop
pH                7.0-8.0         <6.0 or >9.0 significantly reduces rate
C:N Ratio         2.5-3.5:1       Insufficient C limits rate
                                  Excess C causes BOD in effluent
Redox Potential   -50 to +50 mV   >+50 mV indicates aerobic conditions
```

## 5.2 Process Kinetics

### Growth and Denitrification Rate

**Monod Kinetics:**

```
μ = μmax × (SNO₃/(KNO₃ + SNO₃)) × (SC/(KC + SC)) × (KO₂/(KO₂ + SO₂))

Where:
μmax = 0.2-0.4 h⁻¹ (20°C)
KNO₃ = 0.1-0.5 mg N/L
KC = 5-20 mg COD/L
KO₂ = 0.1-0.3 mg/L (inhibition term)

Oxygen inhibition crucial: denitrification only when DO very low
```

**Specific Denitrification Rate:**

```
SDNR = (Q × (NO₃ᵢₙ - NO₃ₒᵤₜ)) / (V × X)

Where:
SDNR = specific denitrification rate (mg NO₃⁻-N/g VSS/h)
Q = flow rate (L/h)
V = reactor volume (L)
X = biomass concentration (g VSS/L)

Typical SDNR values:
- With readily biodegradable COD: 2-8 mg NO₃⁻-N/g VSS/h
- With methanol: 3-6 mg NO₃⁻-N/g VSS/h
- With acetate: 4-8 mg NO₃⁻-N/g VSS/h
- With complex organics: 1-3 mg NO₃⁻-N/g VSS/h
```

**Temperature Correction:**

```
SDNR(T) = SDNR(20) × 1.09^(T-20)

Example:
At 20°C: SDNR = 5.0 mg/g/h
At 15°C: SDNR = 5.0 × 1.09^(-5) = 3.2 mg/g/h
At 25°C: SDNR = 5.0 × 1.09^5 = 7.7 mg/g/h
```

### Carbon Source Requirements

**Theoretical COD/N Ratios:**

```
Using methanol (CH₃OH):
5 CH₃OH + 6 NO₃⁻ → 3 N₂ + 5 CO₂ + 7 H₂O + 6 OH⁻

COD of methanol = 1.5 g COD/g methanol
Stoichiometric ratio = (5 × 32 × 1.5) / (6 × 14) = 2.86 g COD/g NO₃⁻-N

Using glucose (C₆H₁₂O₆):
C₆H₁₂O₆ + 4.8 NO₃⁻ → 2.4 N₂ + 6 CO₂ + 6 H₂O + 4.8 OH⁻

COD of glucose = 1.07 g COD/g glucose
Stoichiometric ratio = (180 × 1.07) / (4.8 × 14) = 2.86 g COD/g NO₃⁻-N

Using acetate (CH₃COO⁻):
5 CH₃COO⁻ + 8 NO₃⁻ → 4 N₂ + 10 CO₂ + 6 H₂O + 8 OH⁻

Stoichiometric ratio = 3.57 g COD/g NO₃⁻-N
```

**Practical COD/N Ratios:**

```
Purpose                    COD:N Ratio
Stoichiometric (minimum)   2.86:1
With cell synthesis        3.5-4.0:1
Complete denitrification   4.0-5.0:1
Excess (BOD in effluent)   >5.5:1

Design recommendation: 3.5-4.0:1 for most applications
```

**Carbon Source Selection:**

```
Carbon Source    Cost ($/kg)   COD (g/g)   Advantages              Disadvantages
Methanol        $0.40-0.80     1.5         Pure, predictable       Toxic, flammable
Ethanol         $0.60-1.20     2.1         Less toxic              More expensive
Acetate         $0.80-1.50     1.07        Fast uptake             Expensive
Glucose         $0.50-1.00     1.07        Safe, available         Variable quality
Glycerol        $0.30-0.70     1.22        Byproduct, cheap        Viscous, variable
Waste organics  $0-0.20        0.5-1.5     Very cheap/free         Inconsistent
```

## 5.3 Reactor Configurations

### Suspended Growth Systems

**Pre-Anoxic Configuration:**

```
Influent → [Anoxic Zone] → [Aerobic Zone] → Effluent
                ↑              │
                │              │
                └─ Recycle ────┘
                (RAS + Internal Recycle)

Advantages:
- Protects nitrifiers from organic loading
- Utilizes influent organics for denitrification
- Reduces aeration costs

Design Parameters:
- Anoxic HRT: 1-3 hours
- Aerobic HRT: 2-6 hours
- Internal recycle ratio: 2:1 to 4:1
- MLSS: 2000-4000 mg/L
```

**Post-Anoxic Configuration:**

```
Influent → [Aerobic Zone] → [Anoxic Zone] → Effluent
                │              ↑
                │              │
                └─ Recycle ────┘

Advantages:
- Complete nitrification before denitrification
- Better for high ammonia loads
- Easier process control

Design Parameters:
- Aerobic HRT: 3-8 hours
- Anoxic HRT: 2-4 hours
- Recycle ratio: 3:1 to 6:1
- Carbon addition required (no influent organics)
```

**Four-Stage Bardenpho:**

```
Influent → [Anoxic 1] → [Aerobic] → [Anoxic 2] → [Re-aeration] → Effluent
              ↑            │            ↑
              │            │            │
              └─ Recycle ─-┘            │
              (Internal)                │
                                       │
              Carbon addition ─────────┘

Advantages:
- Very high TN removal (>90%)
- Handles variable loads
- Flexibility in operation

Total HRT: 10-16 hours
```

### Attached Growth Systems

**Packed Bed Denitrification Filter:**

```
    Effluent (low NO₃⁻)
           ↑
    ┌──────────────┐
    │   ╱╱╱╱╱╱╱╱   │  ← Effluent screen
    │              │
    │  ▓▓▓▓▓▓▓▓▓  │
    │  ▓▓▓▓▓▓▓▓▓  │  ← Media with biofilm
    │  ▓▓▓▓▓▓▓▓▓  │     (plastic, sand, etc.)
    │              │
    │   ╲╲╲╲╲╲╲╲   │  ← Influent distribution
    └──────────────┘
           ↓
    Influent (high NO₃⁻)
         +
    Carbon source

Upflow configuration (typical)
```

**Design Parameters:**

```
Media type:            Sand, anthracite, plastic
Hydraulic loading:     5-15 m/h
Organic loading:       1-3 kg COD/m³/day
Nitrogen loading:      0.2-0.8 kg NO₃⁻-N/m³/day
Empty bed contact time: 10-30 minutes
Backwash frequency:    Daily to weekly
```

**Example Calculation:**

Design for 100 m³/day, 30 mg NO₃⁻-N/L:

```
Nitrogen load = 100 m³/day × 30 g/m³ = 3.0 kg N/day

At 0.4 kg N/m³/day loading:
Volume = 3.0 / 0.4 = 7.5 m³

EBCT = 20 minutes = 0.014 days
Flow check: V / Q = 7.5 / 100 = 0.075 days = 108 min
(Too long, revise)

At 15 min EBCT:
Volume = 100 m³/day × (15/1440) = 1.04 m³

Nitrogen loading = 3.0 / 1.04 = 2.88 kg N/m³/day
(Acceptable, but high - monitor carefully)

Carbon requirement (COD:N = 4:1):
COD needed = 3.0 kg N/day × 4 = 12 kg COD/day

Using methanol (1.5 g COD/g methanol):
Methanol = 12 / 1.5 = 8.0 kg/day

At $0.60/kg: $4.80/day = $1,752/year
```

### Fluidized Bed Denitrification

**Configuration:**

```
Similar to nitrifying fluidized bed, but:
- Anoxic conditions (no aeration)
- Carbon source addition
- Upflow velocity for media fluidization
- Very compact (high biomass density)

Surface area loading: 2-5 g NO₃⁻-N/m²/day
Volumetric loading:   3-10 kg NO₃⁻-N/m³/day
Hydraulic loading:    10-40 m/h
```

## 5.4 Carbon Source Dosing

### Methanol Dosing Strategies

**Stoichiometric Dosing:**

```
Methanol (mg/L) = 2.47 × NO₃⁻-N (mg/L) + 1.53 × NO₂⁻-N (mg/L)
                  + 0.87 × DO (mg/L)

Where:
2.47 = stoichiometric methanol for NO₃⁻ reduction
1.53 = stoichiometric methanol for NO₂⁻ reduction
0.87 = stoichiometric methanol for O₂ reduction

For safety, add 10-20% excess:
Actual dose = Calculated × 1.1 to 1.2
```

**Proportional Dosing:**

```
Flow-paced dosing:
Methanol pump rate ∝ Influent flow rate

Set point based on average influent NO₃⁻-N:
Pump rate (L/h) = Q (m³/h) × C_NO₃ (g/m³) × Dose_factor

Where Dose_factor = 2.47-3.0 mg methanol/mg N
                    / (ρ_methanol × 1000)

Example:
Q = 10 m³/h
C_NO₃ = 30 g/m³
Dose_factor = 2.7 mg/mg / (792 g/L) = 0.00341 L methanol/g N

Pump rate = 10 × 30 × 0.00341 = 1.02 L/h
```

**Feedback Control:**

```
Advanced strategy using effluent NO₃⁻ measurement:

If NO₃⁻-N_eff > Setpoint:
    Increase methanol dose by ΔM
If NO₃⁻-N_eff < Setpoint and BOD detected:
    Decrease methanol dose by ΔM
Else:
    Maintain dose

Typical control:
- PID controller
- Effluent NO₃⁻-N setpoint: 5-10 mg/L
- BOD alarm setpoint: 5 mg/L
- Adjustment frequency: Every 15-60 minutes
```

### Alternative Carbon Sources

**Glycerol (Biodiesel Byproduct):**

```
Stoichiometric requirement:
4 C₃H₈O₃ + 7 NO₃⁻ → 3.5 N₂ + 12 CO₂ + 8 H₂O + 7 OH⁻

Glycerol requirement = 1.97 g/g NO₃⁻-N (stoichiometric)
                     = 2.2-2.5 g/g NO₃⁻-N (practical)

Advantages:
- Low cost ($0.30-0.70/kg)
- Biodiesel industry byproduct

Considerations:
- May contain methanol, soap, salts
- Quality varies (crude vs. refined)
- Viscous (requires heating/dilution for pumping)
```

**On-Site Organics (Waste Vegetables):**

```
Plant waste slurry from CEA facility:
- Chop/blend plant waste
- Dilute to pumpable consistency
- Store anaerobically (fermentation increases availability)

Typical COD content: 50-150 g COD/kg fresh waste

Advantages:
- No cost (waste valorization)
- Eliminates disposal fees
- Reduces purchased carbon

Challenges:
- Variable composition
- Requires empirical dosing optimization
- Potential for solids accumulation
- May introduce pathogens if not handled properly
```

## 5.5 Integrated Nitrogen Management

### Nitrogen Mass Balance

**System Inputs:**

```
N_in = N_feed + N_makeup_water + N_atmosphere

For aquaponics/RAS:
N_feed = Feed × Protein × 0.16 (N content of protein)

For greenhouse:
N_in = Fertilizer additions
```

**System Outputs:**

```
N_out = N_harvest + N_denitrified + N_discharge + N_sludge

Target:
N_harvest maximized
N_denitrified only for excess N
N_discharge minimized
```

**Example Mass Balance - Aquaponic System:**

```
Inputs:
- Fish feed: 50 kg/day @ 40% protein
  N_feed = 50 × 0.40 × 0.16 = 3.2 kg N/day

- Fish retain: 25% of N
  N_retained = 3.2 × 0.25 = 0.8 kg N/day

- N available = 3.2 - 0.8 = 2.4 kg N/day

Outputs:
- Plants uptake: 1.5 kg N/day (target)
- Excess N: 2.4 - 1.5 = 0.9 kg N/day

Management options for excess:
1. Denitrification: Remove 0.9 kg/day
2. Water discharge: Replace 5-10%/day
3. Increase plant capacity: Add growing area
4. Reduce fish feeding: Decrease to 40 kg/day
```

### Balancing Nitrification and Denitrification

**Integrated Design:**

```
Step 1: Size nitrification for peak ammonia load
Step 2: Calculate nitrate production rate
Step 3: Subtract plant/algae nitrogen uptake
Step 4: Size denitrification for excess nitrate
Step 5: Calculate carbon requirement
Step 6: Select carbon source and dosing system

Verification:
Total N in = Total N out
Ensure no nitrite accumulation
Check alkalinity balance
```

**Example Integration:**

```
Aquaponic facility: 5000 kg fish biomass

Ammonia production:
3% of feed × 0.16 N content = 0.48% of feed
Feed = 1.5% body weight/day = 75 kg/day
TAN = 75 × 0.0048 = 0.36 kg N/day

Nitrate production (assume 95% nitrification efficiency):
NO₃⁻-N = 0.36 × 0.95 = 0.342 kg/day

Plant uptake (200 m² lettuce @ 1.5 g N/m²/day):
N_plant = 200 × 1.5 = 300 g/day = 0.30 kg/day

Excess for denitrification:
0.342 - 0.30 = 0.042 kg/day = 42 g/day

Denitrification reactor:
At 0.5 kg/m³/day loading: V = 0.042 / 0.5 = 0.084 m³ = 84 L

Methanol requirement:
42 g N/day × 2.7 g methanol/g N = 113 g/day = 0.14 L/day

Annual methanol cost: 0.14 L/day × 365 × $0.60/kg × 0.792 kg/L
                    = $24.80/year (minimal)
```

## 5.6 Process Monitoring and Control

### Key Performance Indicators

```
Parameter              Target           Warning Level
Effluent NO₃⁻-N       <10 mg/L         >15 mg/L
Effluent NO₂⁻-N       <0.5 mg/L        >1 mg/L
Effluent NH₄⁺-N       <1 mg/L          >2 mg/L
Effluent BOD          <5 mg/L          >10 mg/L
DO in anoxic zone     <0.5 mg/L        >1.0 mg/L
ORP in anoxic zone    -50 to +50 mV    >+100 mV
pH                    7.0-8.0          <6.5 or >8.5
Alkalinity recovery   50-75% of lost   <40%
```

### Operational Troubleshooting

**Problem: Incomplete Denitrification**

```
Symptoms: High effluent NO₃⁻, low BOD
Causes:
1. Insufficient carbon source
   → Increase dose by 10-20%
   → Check for carbon source depletion

2. Short retention time
   → Increase anoxic volume
   → Reduce flow rate

3. Oxygen intrusion
   → Check for air leaks
   → Improve mixing to prevent surface aeration
   → Verify DO <0.5 mg/L

4. Low temperature
   → Increase HRT proportionally
   → Heat if economically feasible
```

**Problem: Excess BOD in Effluent**

```
Symptoms: Low NO₃⁻, elevated BOD
Causes:
1. Carbon overdose
   → Reduce dosing by 10-20%
   → Improve flow/feed matching

2. Low nitrate load
   → Reduce carbon dose
   → Check nitrification performance

3. Short-circuiting
   → Improve mixing
   → Check for channeling
```

## Summary

Denitrification is essential for managing excess nitrogen in closed-loop CEA systems. Integration with nitrification allows near-complete nitrogen control, converting ammonia to nitrate (for plant use) and removing excess as nitrogen gas. Proper carbon source selection and dosing are critical for efficient, cost-effective operation.

## Key Takeaways

1. Denitrification converts nitrate to nitrogen gas under anoxic conditions
2. Requires organic carbon source at approximately 3.5-4.0 g COD/g NO₃⁻-N
3. Pre-anoxic configuration most common for utilizing influent organics
4. Methanol most reliable carbon source, but alternatives can reduce costs
5. Integrated nitrogen management requires mass balance and process coordination
6. Process control based on effluent NO₃⁻-N with feedback to carbon dosing
7. Alkalinity recovery approximately 50-75% of nitrification consumption

## Further Reading

- Grady, C.P.L. et al. (2011). *Biological Wastewater Treatment*, Chapter 10.
- Henze, M. et al. (2008). *Biological Wastewater Treatment: Principles, Modelling and Design*.
- Zhu, G. & Chen, Y. (2011). "Denitrification in Aquaculture Systems." *Aquacultural Engineering*.
- EPA (2010). *Nitrogen Control Design Manual*, EPA/600/R-10/100.

## Review Questions

1. Write the overall equation for denitrification using methanol.
2. Why must DO be <0.5 mg/L for effective denitrification?
3. Calculate methanol requirement for 50 mg/L NO₃⁻-N removal.
4. What is the advantage of pre-anoxic vs. post-anoxic configuration?
5. How does denitrification affect system pH and alkalinity?
6. Design a denitrification reactor for 200 m³/day, 25 mg/L NO₃⁻-N.
7. What are the symptoms of carbon source overdosing?
8. How is nitrogen mass balance used in integrated system design?
9. What is ORP and why is it useful for monitoring anoxic zones?
10. Compare methanol vs. glycerol as carbon sources.

---

**Next Module:** Module 6 - Anaerobic Digestion Systems
