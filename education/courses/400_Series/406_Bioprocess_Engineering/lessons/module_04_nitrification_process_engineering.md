# Module 4: Nitrification Process Engineering

## Learning Objectives

By the end of this module, you will be able to:
- Understand the biochemistry and microbiology of nitrification
- Design biofilters for aquaponic and recirculating aquaculture systems
- Calculate nitrification rates and sizing requirements
- Optimize process conditions for stable nitrification
- Troubleshoot common nitrification problems
- Implement monitoring and control strategies

## 4.1 Nitrification Fundamentals

### Biochemistry of Nitrification

**Two-Step Process:**

```
Step 1: Ammonia Oxidation (Nitrosomonas, Nitrosospira)
NH₃ + 1.5 O₂ → NO₂⁻ + H₂O + H⁺
ΔG°' = -275 kJ/mol NH₃

Step 2: Nitrite Oxidation (Nitrobacter, Nitrospira)
NO₂⁻ + 0.5 O₂ → NO₃⁻
ΔG°' = -76 kJ/mol NO₂⁻

Overall:
NH₃ + 2 O₂ → NO₃⁻ + H⁺ + H₂O
ΔG°' = -351 kJ/mol NH₃
```

**Stoichiometric Relationships:**

```
Oxygen requirement:
4.57 g O₂ / g NH₄⁺-N oxidized

Alkalinity consumption:
7.14 g CaCO₃ / g NH₄⁺-N oxidized

Nitrite accumulation (if incomplete):
2.86 g NO₂⁻-N / g NH₄⁺-N partially oxidized
```

### Nitrifying Bacteria Characteristics

**Ammonia Oxidizers:**

```
Genus          Growth Rate    Ks (NH₃)    Optimum pH    Optimum T
Nitrosomonas   0.02-0.05 h⁻¹  0.5-2.0     7.5-8.0      28-32°C
Nitrosospira   0.01-0.03 h⁻¹  0.3-1.5     7.0-8.5      25-30°C
Nitrosococcus  0.03-0.06 h⁻¹  1.0-3.0     7.5-8.5      30-35°C
```

**Nitrite Oxidizers:**

```
Genus          Growth Rate    Ks (NO₂⁻)   Optimum pH    Optimum T
Nitrobacter    0.03-0.07 h⁻¹  0.1-0.5     7.5-8.5      28-32°C
Nitrospira     0.02-0.05 h⁻¹  0.05-0.2    7.0-8.0      25-30°C
Nitrococcus    0.04-0.08 h⁻¹  0.2-0.8     7.5-9.0      30-35°C
```

**Key Properties:**
- Obligate aerobes (require O₂)
- Chemolithoautotrophs (use CO₂ as carbon source)
- Slow growth (doubling time 8-40 hours)
- Sensitive to pH, temperature, and toxic compounds
- Form biofilms in natural systems

### Energy and Carbon Requirements

**Energy Yield:**

```
Nitrosomonas:
1 mol NH₃ → 275 kJ energy
Cell yield: YX/N = 0.05-0.15 g cells/g N

Nitrobacter:
1 mol NO₂⁻ → 76 kJ energy
Cell yield: YX/N = 0.02-0.08 g cells/g N

Low yield = slow growth = long retention time required
```

**CO₂ Requirement:**

```
Cell synthesis requires inorganic carbon:

C₅H₇O₂N (cell formula) from CO₂

Approximately 0.15 g C / g N oxidized

In aquaponics: CO₂ from fish respiration usually sufficient
In RAS: May need CO₂ addition or carbonate buffer
```

## 4.2 Process Kinetics

### Growth Kinetics

**Monod Model with Dual Substrate Limitation:**

```
μ = μmax × (SNH₃/(KNH₃ + SNH₃)) × (SO₂/(KO₂ + SO₂))

Where:
μmax = 0.02-0.05 h⁻¹ at 25°C
KNH₃ = 0.5-2.0 mg N/L
KO₂ = 0.3-1.5 mg/L
```

**Temperature Effect:**

```
μ(T) = μ(20°C) × θ^(T-20)

Where:
θ = 1.10-1.12 for nitrifiers

Example:
At 20°C: μmax = 0.033 h⁻¹
At 25°C: μmax = 0.033 × 1.11^5 = 0.055 h⁻¹
At 15°C: μmax = 0.033 × 1.11^(-5) = 0.020 h⁻¹
```

**pH Effect:**

```
Optimum pH: 7.5-8.5

Below pH 7.0: Activity decreases significantly
Below pH 6.5: Activity <50% of maximum
Above pH 9.0: Free ammonia toxicity increases

Free ammonia (NH₃) vs. ammonium (NH₄⁺):

NH₃ (%) = 100 / (1 + 10^(pKa - pH))

Where pKa = 9.25 at 25°C

At pH 7.5: 0.56% NH₃
At pH 8.0: 1.77% NH₃
At pH 8.5: 5.37% NH₃
```

### Nitrification Rate Models

**Surface Area Loading Model:**

```
Nitrification rate (g N/m²/day) = k × [NH₄⁺-N]

Where:
k = removal rate constant (m/day)
k = 0.1-0.5 m/day (typical for biofilters at 20-25°C)

Design equation:
A = (Q × ΔN) / (k × Navg)

Where:
A = required biofilter surface area (m²)
Q = flow rate (m³/day)
ΔN = nitrogen removal (g N/m³)
Navg = average nitrogen concentration
```

**Volumetric Loading Model:**

```
Nitrification rate (g N/m³/day) = kv × [NH₄⁺-N]

Where:
kv = volumetric rate constant (day⁻¹)
kv = 0.5-2.0 day⁻¹ at 20-25°C

Design equation:
V = (Q × ΔN) / (kv × Navg)
```

**Example Calculation:**

Aquaponic system:
- Flow rate: 10 m³/day
- Inlet NH₄⁺-N: 40 mg/L
- Target effluent: <1 mg/L
- Temperature: 25°C
- Surface area loading approach

```
ΔN = 40 - 1 = 39 mg/L = 39 g/m³

Assuming k = 0.3 m/day at 25°C
Navg = (40 + 1)/2 = 20.5 mg/L

A = (10 m³/day × 39 g/m³) / (0.3 m/day × 20.5 g/m³)
A = 390 / 6.15
A = 63.4 m²

For media with 300 m²/m³ specific surface area:
V = 63.4 / 300 = 0.21 m³ = 210 L

Hydraulic retention time = 210 L / (10,000 L/day)
                        = 0.021 days = 30 minutes
```

## 4.3 Biofilter Configurations

### Moving Bed Biofilm Reactor (MBBR)

**Design Parameters:**

```
┌─────────────────────────────────┐
│  MBBR Biofilter Configuration   │
├─────────────────────────────────┤
│ Fill ratio:        40-70% volume│
│ HRT:               30-120 min   │
│ Surface loading:   0.2-1.0 g/m²/d│
│ Volumetric loading: 0.5-2.0 kg/m³/d│
│ Air flow:          20-40 m³/h/m³│
│ DO target:         >4 mg/L      │
│ pH range:          7.0-8.5      │
└─────────────────────────────────┘
```

**Carrier Media Types:**

```
Media Type          Surface Area    Density      Cost
K1 (Kaldnes)       500 m²/m³       0.95 g/cm³   $$
K3                 500 m²/m³       0.95 g/cm³   $$
BioFlow 30         350 m²/m³       0.95 g/cm³   $
BioFlow 40         300 m²/m³       0.94 g/cm³   $
Custom HDPE        200-600 m²/m³   0.92-0.97    $-$$$
```

**Design Procedure:**

1. Calculate ammonia loading (g N/day)
2. Select carrier type and fill ratio
3. Calculate required surface area
4. Calculate reactor volume
5. Size aeration system
6. Add 20-30% safety factor

**Example:**

Fish farm RAS:
- Feed rate: 100 kg/day
- Protein content: 40%
- TAN excretion: 3% of feed
- Target removal: 95%

```
TAN production = 100 × 0.40 × 0.03 = 1.2 kg N/day

Removal required = 1.2 × 0.95 = 1.14 kg N/day

Using surface loading of 0.5 g/m²/day:
Area = 1140 g/day / 0.5 g/m²/day = 2280 m²

With K1 media (500 m²/m³) at 60% fill:
Volume = 2280 / (500 × 0.6) = 7.6 m³

Add 25% safety factor:
Design volume = 7.6 × 1.25 = 9.5 m³

Air requirement = 30 m³/h/m³ × 9.5 m³ = 285 m³/h
```

### Trickling Filter

**Configuration:**

```
Media depth:          1.5-3.0 m
Hydraulic loading:    1-5 m³/m²/day
Organic loading:      0.1-0.5 kg BOD/m³/day
TAN loading:          0.05-0.3 kg N/m³/day
Recirculation ratio:  1:1 to 4:1
Air flow:             Natural or forced draft
```

**Design Equation (Velz):**

```
Se/S0 = e^(-k×D/Q^n)

Where:
Se = effluent TAN concentration
S0 = influent TAN concentration
k = treatability constant (depends on media)
D = media depth (m)
Q = hydraulic loading rate (m/day)
n = constant (typically 0.5)
```

**Media Selection:**

```
Media Type        Size        Void Space    Surface Area
Rock             5-10 cm     40-50%        50-80 m²/m³
Plastic (random) 5-8 cm      90-95%        100-200 m²/m³
Plastic (modular) -          95-97%        100-250 m²/m³
```

### Fluidized Bed Reactor

**Characteristics:**

```
Media:              Sand (0.5-2 mm) or light plastic beads
Fluidization:       Upflow velocity to suspend media
Surface area:       >1000 m²/m³ (for sand)
Compactness:        10-20× smaller than MBBR
Capital cost:       2-3× higher than MBBR
O&M complexity:     Higher (backwashing, pressure drop)
```

**Design Criteria:**

```
Upflow velocity:    10-30 m/h
Bed expansion:      15-30%
Surface loading:    1-3 g N/m²/day
Volumetric loading: 2-8 kg N/m³/day
Backwash frequency: Daily to weekly
```

**Fluidization Velocity:**

```
vf = √((4×g×(ρs - ρw)×dp)/(3×CD×ρw))

Where:
vf = fluidization velocity (m/s)
g = gravity (9.81 m/s²)
ρs = particle density (kg/m³)
ρw = water density (kg/m³)
dp = particle diameter (m)
CD = drag coefficient
```

## 4.4 Process Control and Optimization

### Critical Process Parameters

**1. Dissolved Oxygen**

```
Target: >4 mg/L minimum
Optimal: 5-8 mg/L

Control strategy:
- Continuous DO monitoring
- Variable frequency drive (VFD) on blowers
- Adjust air flow to maintain setpoint

If DO < 2 mg/L:
- Nitrification rate drops >50%
- Risk of nitrite accumulation
- Anoxic zones may develop
```

**2. pH Control**

```
Target range: 7.0-8.0
Optimal: 7.5-8.0

Alkalinity management:
- Monitor alkalinity weekly
- Maintain >100 mg/L as CaCO₃
- Add sodium bicarbonate or calcium carbonate if low

pH calculation from alkalinity depletion:
ΔAlkalinity = 7.14 × TAN oxidized (g CaCO₃/g N)

Example:
100 g N/day oxidized requires:
714 g CaCO₃/day = 0.71 kg/day

In 10 m³ system:
71 mg/L/day alkalinity consumed
```

**3. Temperature**

```
Optimal: 25-30°C
Acceptable: 15-35°C

Below 15°C: Significant rate reduction
Above 35°C: Inhibition and die-off

Temperature compensation:
Adjust HRT or volume based on seasonal temperature

Winter operation (15°C vs. 25°C):
Rate reduction = 1.11^(15-25) = 1.11^(-10) = 0.36
Need 2.8× longer HRT or volume
```

**4. Hydraulic Loading**

```
Avoid sudden flow changes:
- Gradual startup (weeks to months)
- Buffer tanks for flow equalization
- Bypass during extreme peaks

Recommended:
- Design for average flow
- Peak flow <2× average
- Use recirculation to stabilize loading
```

### Monitoring Program

**Routine Monitoring (Daily-Weekly):**

```
Parameter              Frequency    Action Level
Ammonia (inlet)       Daily        >50 mg/L
Ammonia (outlet)      Daily        >2 mg/L
Nitrite               Daily        >5 mg/L
Nitrate               Weekly       -
pH                    Daily        <6.8 or >8.5
DO                    Continuous   <4 mg/L
Temperature           Daily        <15 or >35°C
Alkalinity            Weekly       <50 mg/L CaCO₃
```

**Performance Indicators:**

```
Nitrification efficiency:
η = [(TAN_in - TAN_out) / TAN_in] × 100%

Target: >95%
Warning: <90%
Failure: <80%

Nitrite accumulation ratio:
NAR = NO₂⁻-N / (NO₂⁻-N + NO₃⁻-N)

Normal: <5%
Elevated: 5-20% (incomplete oxidation)
Problem: >20% (inhibition or imbalance)
```

### Troubleshooting Guide

**Problem: High Effluent Ammonia**

```
Possible Causes              Solutions
1. Insufficient biofilter    - Increase volume/area
   capacity                  - Reduce loading rate
                            - Add additional unit

2. Low dissolved oxygen      - Increase aeration
                            - Clean/unclog diffusers
                            - Reduce organic loading

3. Low pH/alkalinity        - Add buffer (NaHCO₃)
                            - Increase water exchange
                            - Reduce feed rate

4. Low temperature          - Increase HRT
                            - Heat water
                            - Accept seasonal variation

5. Toxic inhibition         - Check for chlorine, antibiotics
                            - Dilute/flush system
                            - Review chemical additions
```

**Problem: Nitrite Accumulation**

```
Possible Causes              Solutions
1. Nitrobacter inhibition   - Check pH (may be too low)
                            - Reduce organic loading
                            - Check for toxins

2. Incomplete startup       - Continue maturation
                            - Seed with Nitrobacter
                            - Reduce loading temporarily

3. Free ammonia toxicity    - Lower pH to <8.0
   (high pH)                - Dilute with freshwater
                            - Reduce feeding

4. Low DO in portions       - Improve mixing
   of biofilter             - Increase aeration
                            - Clean biofilm buildup
```

## 4.5 Startup and Operation

### Biofilter Startup Procedures

**Conventional Startup (4-8 weeks):**

```
Week 1-2: Acclimation
- Introduce ammonia source (feed fish or add NH₄Cl)
- Start with 25% of design loading
- Monitor daily: NH₃, NO₂⁻, NO₃⁻
- Expect: NH₃ accumulation, NO₂⁻ begins to appear

Week 3-4: Nitrosomonas Establishment
- Increase loading to 50% of design
- Expect: NH₃ begins to decline, NO₂⁻ peaks
- Continue monitoring daily
- Maintain pH >7.0, DO >4 mg/L

Week 5-6: Nitrobacter Establishment
- Increase loading to 75% of design
- Expect: NO₂⁻ begins to decline, NO₃⁻ increases
- Monitor for complete oxidation

Week 7-8: Full Capacity
- Increase to 100% design loading
- Confirm: <1 mg/L NH₃, <0.5 mg/L NO₂⁻
- Establish routine monitoring schedule
```

**Accelerated Startup (2-4 weeks):**

```
Methods:
1. Bioaugmentation
   - Add commercial nitrifying bacteria
   - Seed from established biofilter
   - Cost: $100-500 for commercial products

2. Pre-colonized Media
   - Purchase media with established biofilm
   - Transfer media from existing system
   - Cost: 2-3× regular media cost

3. Optimized Conditions
   - Maintain 28-30°C temperature
   - Keep pH 7.8-8.2
   - Ensure DO >6 mg/L
   - Add 10 mg/L phosphate (if deficient)
```

### Operational Best Practices

**Feeding and Loading:**

```
- Gradually increase loading rate (10-20% per week)
- Avoid sudden large feeding increases
- Use automatic feeders for consistent loading
- Match biofilter capacity to fish biomass
- Plan for seasonal growth of fish
```

**Maintenance Schedule:**

```
Daily:
- Check DO levels
- Visual inspection for flow/aeration
- Record water quality data

Weekly:
- Clean mechanical filters
- Check pH and alkalinity
- Inspect air diffusers

Monthly:
- Calibrate sensors
- Clean/inspect pumps
- Review performance trends
- Adjust loading as needed

Annually:
- Deep cleaning of biofilter (if needed)
- Replace worn media
- System audit and optimization
```

## 4.6 Advanced Nitrification Systems

### Anammox Process

**Anaerobic Ammonia Oxidation:**

```
NH₄⁺ + NO₂⁻ → N₂ + 2 H₂O
(Anammox bacteria: Brocadia, Kuenenia)

Advantages:
- 60% reduction in oxygen requirement
- No organic carbon needed (vs. denitrification)
- 90% less sludge production
- Lower operating costs

Challenges:
- Very slow growth (doubling time 11-30 days)
- Long startup time (6-12 months)
- Sensitive to DO, temperature, inhibitors
- Requires partial nitritation (NO₂⁻ production)
```

**Two-Stage PN-Anammox:**

```
Stage 1: Partial Nitritation
NH₄⁺ + 0.75 O₂ → 0.5 NO₂⁻ + 0.5 NH₄⁺ + H₂O + H⁺

Stage 2: Anammox
0.5 NH₄⁺ + 0.5 NO₂⁻ → 0.5 N₂ + H₂O

Overall:
NH₄⁺ + 0.75 O₂ → 0.5 N₂ + 1.5 H₂O + H⁺

Oxygen savings: 63% vs. conventional nitrification
```

### Nitrification-Denitrification Integration

**Combined System Design:**

```
┌──────────────┐      ┌──────────────┐
│ Anoxic Zone  │ ───► │ Aerobic Zone │
│ (Denitrif.)  │ ◄─── │ (Nitrif.)    │
│              │ Recirculation       │
│ NO₃⁻ → N₂   │      │ NH₄⁺ → NO₃⁻ │
└──────────────┘      └──────────────┘

Internal recirculation ratio: 2:1 to 4:1
Total nitrogen removal: 70-90%
```

**Design Considerations:**
- Anoxic zone first (protects nitrifiers from organics)
- Recirculation to deliver NO₃⁻ to anoxic zone
- Carbon source for denitrification (organic waste, methanol)
- DO control: <0.5 mg/L anoxic, >4 mg/L aerobic

## Summary

Nitrification is a critical bioprocess for nitrogen management in aquaponic and recirculating aquaculture systems. Successful implementation requires understanding of nitrifier physiology, appropriate biofilter design, careful process control, and systematic troubleshooting. MBBR systems have emerged as the preferred technology for most applications due to reliability, compactness, and ease of operation.

## Key Takeaways

1. Nitrification is a two-step process requiring specialized autotrophic bacteria
2. Process rate is affected by temperature, pH, DO, and substrate concentration
3. MBBR is the most common biofilter configuration for aquaponics/RAS
4. Surface area loading models enable practical biofilter sizing
5. Startup requires 4-8 weeks for complete establishment
6. pH management through alkalinity supplementation is essential
7. Continuous DO monitoring and control prevents process failure
8. Nitrite accumulation indicates incomplete nitrification or imbalance

## Further Reading

- Grady, C.P.L. et al. (2011). *Biological Wastewater Treatment*, 3rd ed., Chapters 8-9.
- Timmons, M.B. & Ebeling, J.M. (2013). *Recirculating Aquaculture*, 3rd ed.
- Wortman, S.E. (2015). "Biofilter Design for Aquaponics." *Aquaponics Journal*.
- Rusten, B. et al. (2006). "Design and Operation of MBBR." *Water Science & Technology*.

## Review Questions

1. Write the balanced equations for ammonia and nitrite oxidation.
2. Why do nitrifying bacteria grow slowly compared to heterotrophs?
3. Calculate oxygen requirement for oxidizing 100 g NH₄⁺-N per day.
4. What is the optimal pH range for nitrification and why?
5. How does temperature affect nitrification rate?
6. Design an MBBR for 500 g N/day loading using K1 media.
7. What causes nitrite accumulation and how is it resolved?
8. Describe the biofilter startup process and timeline.
9. Why is alkalinity monitoring important in nitrifying systems?
10. What are the advantages of Anammox over conventional nitrification?

---

**Next Module:** Module 5 - Denitrification and Nitrogen Management
