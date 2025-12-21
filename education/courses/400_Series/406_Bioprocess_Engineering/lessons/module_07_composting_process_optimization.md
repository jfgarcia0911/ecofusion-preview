# Module 7: Aerobic Composting Process Engineering

## Learning Objectives

By the end of this module, you will be able to:
- Understand the microbiology and biochemistry of aerobic composting
- Design and optimize composting systems for agricultural waste
- Calculate oxygen requirements and aeration strategies
- Control temperature, moisture, and C:N ratio for optimal decomposition
- Assess compost quality and maturity
- Implement odor control and environmental management strategies

## 7.1 Composting Fundamentals

### Definition and Process

**Composting:**
Biological decomposition of organic matter under controlled aerobic conditions, producing a stabilized, humus-like product suitable as soil amendment.

**Key Characteristics:**
- Aerobic process (requires oxygen)
- Thermophilic phase (self-heating to 40-70°C)
- Diverse microbial community (succession)
- Results in volume reduction (40-60%)
- Produces stable organic matter (humification)

### Phases of Composting

```
TEMPERATURE PROFILE DURING COMPOSTING

Temp (°C)
  70│     ╱╲
    │    ╱  ╲
  60│   ╱    ╲
    │  ╱      ╲
  50│ ╱        ╲___
    │╱              ╲___
  40│                   ╲___
    │                       ╲_______
  30│                               ╲_______
  20└────┴────┴────┴────┴────┴────┴────┴────► Time
     Meso  Thermo  Cooling    Maturation
     (days) (weeks) (weeks)    (months)

PHASE 1: MESOPHILIC (20-40°C, 2-3 days)
Microorganisms: Bacteria, fungi, actinomycetes
Activity: Rapid decomposition of readily available organics
          (sugars, amino acids, simple proteins)
Temperature: Increases rapidly due to metabolic heat

PHASE 2: THERMOPHILIC (40-70°C, weeks to months)
Microorganisms: Thermophilic bacteria, thermotolerant fungi
Activity: Degradation of cellulose, hemicellulose, proteins
          Pathogen destruction (>55°C)
          Weed seed devitalization
Temperature: Peaks at 55-65°C, self-regulating

PHASE 3: COOLING (40-20°C, weeks)
Microorganisms: Mesophilic organisms recolonize
Activity: Continued decomposition of resistant compounds
          Temperature gradually declines
Completion: When readily decomposable material exhausted

PHASE 4: MATURATION (ambient, months)
Microorganisms: Fungi, actinomycetes dominant
Activity: Humification (formation of humic substances)
          Polymerization of organic compounds
          Stabilization and curing
```

### Microbiology

**Microbial Succession:**

```
Phase           Dominant Microorganisms       Substrates
Initial         Bacteria (Pseudomonas,        Simple sugars
(mesophilic)    Enterobacter)                 Amino acids
                Fungi (Mucor, Aspergillus)    Organic acids

Thermophilic    Bacteria (Bacillus,           Cellulose
                Thermomyces)                  Hemicellulose
                Actinomycetes                 Proteins
                (Thermoactinomyces)           Fats

Cooling         Fungi (Aspergillus,           Resistant polymers
                Penicillium)                  Lignin
                Actinomycetes                 Cellulose

Maturation      Fungi                         Lignin
                Actinomycetes                 Resistant organics
                Specialized bacteria          Humification

Population density: 10⁸-10¹⁰ cells/g compost (peak)
```

### Biochemistry

**Decomposition Pathways:**

```
Readily Degradable (days-weeks):
- Sugars → CO₂ + H₂O + Energy (heat)
- Amino acids → NH₃ + Organic acids + CO₂
- Lipids → Fatty acids → CO₂ + H₂O

Moderately Degradable (weeks-months):
- Cellulose → Glucose → CO₂ + H₂O
- Hemicellulose → Pentoses, hexoses → CO₂ + H₂O
- Proteins → Peptides → Amino acids → NH₃ + CO₂

Resistant (months-years):
- Lignin → Partial degradation → Humic compounds
- Waxes, resins → Slow degradation
- Condensed aromatics → Very slow degradation

Energy yield:
Aerobic respiration: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + 2870 kJ/mol
(High energy release drives temperature increase)
```

## 7.2 Critical Process Parameters

### Carbon to Nitrogen Ratio (C:N)

**Optimal Range:**

```
C:N Ratio   Effect
<20:1       Excess nitrogen → Ammonia volatilization → Odor
            Nitrogen loss, pH rise
20-30:1     OPTIMAL for composting
            Balanced decomposition
            Minimal N loss
30-40:1     Acceptable, slower decomposition
>40:1       Nitrogen limitation
            Very slow decomposition
            Incomplete stabilization

Microbial requirement: C:N ≈ 10:1 for cell synthesis
About 2/3 of carbon respired to CO₂
Therefore optimal feed C:N ≈ 25-30:1
```

**Substrate C:N Ratios:**

```
Material              C:N Ratio    Application
Food waste           15-20:1      Needs C-rich amendment
Vegetable waste      12-25:1      Good base material
Grass clippings      15-25:1      Good but wet
Leaves (fresh)       30-80:1      C-rich amendment
Straw                50-150:1     High C amendment
Wood chips           200-700:1    Very slow decomposition
Sawdust              200-500:1    C-rich bulking agent
Coffee grounds       20:1         Excellent N source
Manure (chicken)     7-10:1       Needs C-rich mix
Manure (cow)         18-25:1      Good base material
Paper/cardboard      150-200:1    C-rich amendment
```

**Blending Calculation:**

```
Formula for blending two materials:

C:N_mix = (C:N₁ × W₁ + C:N₂ × W₂) / (W₁ + W₂)

Example:
Mix food waste (C:N = 15:1) with wood chips (C:N = 400:1)
Target C:N = 30:1

Let W₁ = 1 (food waste, reference)
Solve for W₂ (wood chips):

30 = (15 × 1 + 400 × W₂) / (1 + W₂)
30(1 + W₂) = 15 + 400W₂
30 + 30W₂ = 15 + 400W₂
15 = 370W₂
W₂ = 0.041

Ratio: 1 : 0.041 or 24:1 (food waste : wood chips by weight)
```

### Moisture Content

**Optimal Range:**

```
Moisture Content    Effect
<40%               Too dry: Biological activity ceases
                   Insufficient water for microbial metabolism
40-50%             Suboptimal: Slow decomposition
50-60%             OPTIMAL: Active decomposition
                   Good aeration, high microbial activity
60-70%             Acceptable: May reduce aeration
>70%               Too wet: Anaerobic conditions
                   Poor oxygen diffusion, odors
>80%               Waterlogged: Anaerobic, leachate generation

Design target: 50-60% moisture
```

**Moisture Determination:**

```
Gravimetric method:
Moisture (%) = [(Wet weight - Dry weight) / Wet weight] × 100

Dry weight = Weight after drying at 105°C for 24 hours

Field test (squeeze test):
- Too dry: Does not form ball when squeezed
- Optimal: Forms ball, few drops of water on pressure
- Too wet: Water streams freely when squeezed
```

**Moisture Adjustment:**

```
Add water (if too dry):
Water needed (kg) = Total mass × [(Target MC - Current MC) / (100 - Target MC)]

Example:
1000 kg compost at 40% moisture, target 55%

Water = 1000 × [(55 - 40) / (100 - 55)]
      = 1000 × (15 / 45)
      = 333 kg water

Add bulking agent (if too wet):
Use materials with <20% moisture (wood chips, sawdust, straw)
Absorb excess water and add structure for aeration
```

### Oxygen and Aeration

**Oxygen Requirements:**

```
Stoichiometric oxygen demand:
Organic matter + O₂ → CO₂ + H₂O + Biomass + Energy

Approximately 1-2 kg O₂ / kg VS degraded

Oxygen consumption rate:
- Initial phase: 2-6 g O₂/kg VS/hour
- Active phase: 1-3 g O₂/kg VS/hour
- Maturation: 0.1-0.5 g O₂/kg VS/hour

Minimum O₂ concentration in pore space: >5% (preferably >10%)
Below 5% O₂: Anaerobic pockets develop → Odors
```

**Aeration Strategies:**

```
1. Passive aeration:
   - Natural convection (chimney effect)
   - Requires coarse structure (bulking agents)
   - Limited to small-scale or low-activity compost

2. Turned windrows:
   - Mechanical mixing with turner
   - Frequency: Every 3-7 days during active phase
   - Restores porosity, removes heat and moisture

3. Forced aeration (positive or negative pressure):
   - Continuous or intermittent blowing/suction
   - Air flow rate: 0.1-0.5 m³ air/m³ compost/minute
   - Temperature-controlled (on/off or variable speed)

4. Aerated static pile (ASP):
   - Perforated pipes beneath pile
   - Negative pressure (suction) common
   - No turning required
   - Better process control
```

**Air Flow Calculation:**

```
Oxygen-based air flow requirement:

Q_air = (OUR × V) / (0.21 × ρ_O₂)

Where:
Q_air = air flow rate (m³/min)
OUR = oxygen uptake rate (g O₂/m³/min)
V = compost volume (m³)
0.21 = oxygen fraction in air
ρ_O₂ = oxygen density (1.33 g/L = 1330 g/m³)

Example:
10 m³ compost, OUR = 2 g/m³/min (active composting)

Q_air = (2 × 10) / (0.21 × 1330)
      = 20 / 279
      = 0.072 m³/min = 72 L/min

Add 50% safety factor: 108 L/min = 10.8 L/min/m³ compost
```

### Temperature Control

**Temperature Ranges:**

```
Temperature     Activity Level    Purpose
<15°C          Minimal           Too cold, slow/no composting
15-40°C        Mesophilic        Initial decomposition
40-55°C        Thermophilic      Active decomposition
55-65°C        High thermophilic Pathogen destruction, optimal
>65°C          Excessive         Inhibits many organisms, N loss
>70°C          Critical          Can kill all biology, spontaneous combustion risk

Design target: Maintain 55-65°C for pathogen destruction
               Then allow cooling for maturation
```

**Temperature Management:**

```
To reduce temperature (if >70°C):
1. Increase aeration (cooling effect, removes heat)
2. Turn pile (exposes hot core to ambient)
3. Add moisture (evaporative cooling)
4. Increase surface area (enhances heat loss)

To increase temperature (if <40°C):
1. Reduce aeration (conserve metabolic heat)
2. Increase pile size (better insulation, V/A ratio)
3. Add nitrogen-rich materials (stimulate activity)
4. Insulate pile (covers, walls)
5. Ensure adequate moisture

Self-heating mechanism:
Heat generation (metabolism) > Heat loss (conduction, convection, evaporation)
Typically achieved with pile volume >1 m³
```

### Particle Size

**Optimal Range:**

```
Particle Size      Effect
<5 mm             Too fine: Compaction, poor aeration
                  High surface area: Rapid decomposition
5-12 mm           Optimal for most applications
                  Good balance of surface area and porosity
12-50 mm          Acceptable: Good aeration
                  Lower surface area: Slower decomposition
>50 mm            Too coarse: Slow decomposition
                  Excellent aeration but low surface area

Recommendation:
- Initial size: 12-25 mm (good aeration during active phase)
- Final screening: <12 mm (uniform product)
```

## 7.3 Composting System Design

### Turned Windrow System

**Configuration:**

```
Cross-section view:

          ╱╲
         ╱  ╲
        ╱    ╲
       ╱      ╲
      ╱────────╲
    ─┴──────────┴─
    Ground surface

Dimensions:
Height: 1.2-2.5 m (center)
Base width: 2-4 m
Length: Variable (10-100 m)
Side slope: 1:1 to 2:1

Turning equipment:
- Self-propelled windrow turner
- Front-end loader (smaller scale)
- Turned every 3-7 days
```

**Design Criteria:**

```
Loading rate: 100-300 kg/m² surface area
Process time: 6-12 weeks (active composting)
              2-6 months (total with maturation)
Land requirement: 0.5-2 m² per ton/year throughput
Turning frequency: Daily (first week)
                   2-3 times/week (weeks 2-4)
                   Weekly (weeks 5-12)
```

**Advantages and Disadvantages:**

```
Advantages:
- Simple, low capital cost
- Flexible (batch processing)
- Visual monitoring easy
- Suitable for variety of feedstocks

Disadvantages:
- Labor/equipment intensive
- Weather dependent
- Large land requirement
- Odor and dust generation
- Runoff management required
```

### Aerated Static Pile (ASP)

**Configuration:**

```
Side view:

    Biofilter (wood chips)
    ╔═══════════════╗
    ║               ║ ← Compost pile
    ║               ║   (1.5-3 m height)
    ║▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓║
    ║▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓║
    ╚═══════════════╝
    ═══════┬═══════  ← Perforated pipes
           │
           ▼
         Blower

Negative pressure (most common):
- Draws air through pile
- Captures exhaust in biofilter
- Odor control

Positive pressure:
- Blows air into pile
- Simpler but no odor control
```

**Design Calculations:**

```
Air flow design:

Q = k × V × OUR / (21% × 1.33 g/L)

Where:
Q = air flow (L/min)
k = safety factor (1.5-2.0)
V = pile volume (m³)
OUR = oxygen uptake rate (g/m³/min)

Pile size:
Volume = Feedstock mass / Bulk density
Typical bulk density: 400-700 kg/m³ (depends on materials)

Example:
20 tons feedstock, bulk density 500 kg/m³
Volume = 20,000 / 500 = 40 m³

For 4 m base width, 2 m height, triangular cross-section:
Length = V / (0.5 × base × height)
       = 40 / (0.5 × 4 × 2)
       = 10 m

Air requirement (OUR = 2 g/m³/min, k = 1.5):
Q = 1.5 × 40 × 2 / (0.21 × 1.33)
  = 120 / 0.28
  = 430 L/min

Blower selection: 500 L/min capacity
                  Static pressure: 1000-3000 Pa
```

**Process Control:**

```
Temperature feedback control:

If T < 50°C: Reduce aeration (conserve heat)
If T = 50-60°C: Maintain aeration (optimal)
If T > 65°C: Increase aeration (cooling)
If T > 70°C: Maximum aeration + moisture addition

Cycle timing:
- ON: 10-30 minutes
- OFF: 10-60 minutes
Adjust based on temperature response

Duration:
- Active phase: 3-6 weeks
- Extended curing: Additional 4-8 weeks
```

### In-Vessel Composting

**Reactor Types:**

```
1. Rotating drum:
   - Horizontal cylinder, slow rotation (1-4 RPM)
   - Continuous mixing, excellent aeration
   - Retention time: 3-14 days (intensive phase)
   - Capacity: 10-500 m³

2. Vertical tower:
   - Auger or gravity-driven descent
   - Upward air flow
   - Retention time: 7-21 days
   - Continuous or batch operation

3. Tunnel/channel:
   - Rectangular enclosed vessel
   - Material moved by agitator or front-end loader
   - Aeration from below
   - Retention time: 14-28 days

4. Containerized:
   - Modular shipping container units
   - Automated turning and aeration
   - Capacity: 20-40 m³ per unit
   - Good for distributed small-scale composting
```

**Advantages:**

```
- Weather independent (enclosed)
- Excellent process control
- Small footprint (vertical systems)
- Automated operation
- Odor containment and treatment
- Faster processing (intensive conditions)
- Consistent product quality

Disadvantages:
- High capital cost ($200,000-2,000,000+)
- Complex mechanical systems
- Higher O&M requirements
- Less flexibility for varying feedstocks
```

**Design Example:**

```
In-vessel system for 2000 kg/day vegetable waste:

Annual throughput: 730 tons/year

Intensive phase (in-vessel): 14 days
Curing phase (windrows): 30 days

In-vessel volume required:
Daily input: 2000 kg
Bulk density: 500 kg/m³
Daily volume: 2000 / 500 = 4 m³/day

Volume for 14-day retention:
V = 4 m³/day × 14 days = 56 m³

With 70% working volume:
Total vessel volume = 56 / 0.7 = 80 m³

Select: Two 40 m³ rotating drums (redundancy)

Air requirements (intensive):
OUR = 3 g/m³/min (high activity)
Q = 56 m³ × 3 g/m³/min / (0.21 × 1330 g/m³)
  = 168 / 279 = 0.6 m³/min = 600 L/min

Temperature control:
Sensors: Every 2-3 m along vessel
Cooling: Increase aeration + water spray
Heating: Insulation + reduce aeration (usually not needed)

Capital cost estimate:
Equipment: $400,000
Installation: $100,000
Building/infrastructure: $150,000
Total: $650,000

Cost per ton annual capacity: $650,000 / 730 = $890/ton/year
```

## 7.4 Compost Quality and Maturity

### Stability Indicators

**Oxygen Uptake Rate (OUR):**

```
Measurement:
- Respirometry test (standardized)
- Measure O₂ consumption over time

Stability criteria:
OUR < 1.0 g O₂/kg VS/hour = Stable
OUR 1.0-2.0 = Moderately stable
OUR > 2.0 = Unstable

Stable compost will not:
- Self-heat significantly
- Compete with plants for oxygen
- Immobilize nitrogen
```

**Self-Heating Test:**

```
Dewar flask test (Solvita):
- Place compost in insulated container
- Monitor temperature increase over 24-72 hours

Temperature rise:
< 8°C = Mature, stable
8-20°C = Moderately mature
> 20°C = Immature, unstable
```

**C:N Ratio:**

```
Final C:N ratio indicator of maturity:

C:N > 25:1 = Immature (nitrogen immobilization risk)
C:N 15-25:1 = Mature
C:N < 15:1 = Very mature (nitrogen release)

Note: C:N alone not sufficient (depends on feedstock)
```

### Maturity Indicators

**Phytotoxicity Tests:**

```
Germination index (GI):

GI (%) = (Seeds germinated in extract / Seeds in control) ×
         (Root length in extract / Root length in control) × 100

Interpretation:
GI > 80% = No phytotoxicity, mature
GI 50-80% = Moderate phytotoxicity
GI < 50% = High phytotoxicity, immature

Test species: Cress, radish, lettuce (sensitive)
```

**Chemical Indicators:**

```
Parameter          Mature Compost    Immature
pH                 6.5-8.0          Variable
NH₄⁺/NO₃⁻ ratio    < 0.5            > 1.0
Volatile solids    < 60% of initial  > 60%
Humification       > 30%            < 20%
```

### Quality Parameters

**Physical Properties:**

```
Property           Target Specification
Particle size      < 12 mm (80% passing)
Bulk density       400-700 kg/m³
Moisture content   30-50% (for storage/handling)
Foreign matter     < 1% (plastic, metal, glass)
Color              Dark brown to black
Odor               Earthy, soil-like (no putrid odor)
```

**Chemical Properties:**

```
Nutrient content (typical):
- Total nitrogen: 1.0-3.0%
- Total phosphorus: 0.3-1.5%
- Total potassium: 0.5-2.0%
- Organic matter: 40-70%
- pH: 6.5-8.0
- Salinity (EC): < 4 dS/m

Heavy metals (maximum, mg/kg dry basis):
- Arsenic: < 20
- Cadmium: < 3
- Chromium: < 200
- Copper: < 1000
- Lead: < 150
- Mercury: < 10
- Nickel: < 100
- Zinc: < 2500
```

**Biological Properties:**

```
Pathogen reduction requirements (PFRP - Process to Further Reduce Pathogens):

Temperature-time: 55°C for 3 days (turned windrow)
                  55°C for 15 days (static pile)
                  60°C for 3 days (in-vessel)

Indicator organisms (post-composting):
- Fecal coliform: < 1000 MPN/g
- Salmonella: Not detected in 25 g sample

Beneficial organisms:
- Actinomycetes: 10⁶-10⁸ CFU/g
- Fungi: 10⁵-10⁷ CFU/g
- Total bacteria: 10⁸-10¹⁰ CFU/g
```

## 7.5 Troubleshooting and Optimization

**Common Problems:**

```
Problem: Low temperature (<40°C)
Causes:
- Pile too small (heat loss > generation)
- Insufficient nitrogen (C:N too high)
- Too wet or too dry (inhibits microbes)
- Insufficient oxygen
Solutions:
- Increase pile size
- Add nitrogen-rich materials
- Adjust moisture to 50-60%
- Turn pile or increase aeration

Problem: Excessive temperature (>70°C)
Causes:
- High nitrogen content (C:N too low)
- Insufficient aeration (heat accumulation)
- Large pile size (insulation)
Solutions:
- Add carbon-rich materials
- Increase turning frequency
- Increase forced aeration
- Add moisture (evaporative cooling)

Problem: Ammonia odor
Causes:
- C:N ratio too low (excess nitrogen)
- Insufficient oxygen (anaerobic pockets)
- pH too high (>8.5)
Solutions:
- Add carbon-rich bulking agents
- Increase aeration/turning
- Balance feedstock ratio

Problem: Putrid/sulfur odor
Causes:
- Anaerobic conditions (insufficient O₂)
- Too wet (>70% moisture)
- Compaction, poor structure
Solutions:
- Add dry bulking agents
- Turn immediately
- Increase aeration
- Improve drainage
```

## Summary

Aerobic composting is a controlled microbial process that stabilizes organic waste while producing a valuable soil amendment. Success requires careful management of C:N ratio, moisture, oxygen, and temperature. Various system configurations (windrows, ASP, in-vessel) offer different trade-offs between capital cost, land requirements, and process control. Proper maturation and quality testing ensure a safe, beneficial end product.

## Key Takeaways

1. Composting progresses through mesophilic, thermophilic, cooling, and maturation phases
2. Optimal C:N ratio is 25-30:1; blend materials to achieve target
3. Maintain 50-60% moisture and >5% O₂ in pore space
4. Thermophilic phase (55-65°C) critical for pathogen destruction
5. System selection depends on scale, capital, and operational requirements
6. Stability measured by OUR, self-heating, and respiration tests
7. Maturity assessed by phytotoxicity and chemical indicators
8. Final product should meet regulatory and quality standards

## Further Reading

- Rynk, R. et al. (2022). *The Composting Handbook*, Academic Press.
- Haug, R.T. (1993). *The Practical Handbook of Compost Engineering*. CRC Press.
- USDA & NRCS (2000). *Compost Utilization in Landscaping, Erosion Control, and Revegetation*.
- Diaz, L.F. et al. (2007). *Compost Science and Technology*. Elsevier.

## Review Questions

1. Describe the four phases of composting and associated temperatures.
2. Why is C:N ratio critical? Calculate blend ratio for C:N=15 and C:N=100 materials to achieve C:N=30.
3. What is the optimal moisture content range and why?
4. Calculate air flow requirement for 20 m³ compost at OUR = 2.5 g/m³/min.
5. Compare windrow, ASP, and in-vessel systems.
6. What temperature-time combination required for pathogen reduction?
7. How is compost stability assessed?
8. What causes ammonia odor and how is it corrected?
9. List five indicators of mature, high-quality compost.
10. Why is particle size important in composting?

---

**Next Module:** Module 8 - Algae Cultivation and Harvesting
