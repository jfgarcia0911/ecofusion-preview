# Module 2: Experimental Design Principles

## Learning Objectives

By the end of this module, you will be able to:
- Design randomized complete block experiments for aquaponics research
- Implement factorial experiments to study multiple factors simultaneously
- Apply split-plot and repeated measures designs appropriately
- Conduct power analysis to determine adequate sample sizes
- Implement proper control strategies and replication schemes

## 2.1 Fundamental Principles of Experimental Design

### The Three R's of Experimental Design

```
┌────────────────────────────────────────────────────────┐
│        CORE PRINCIPLES OF EXPERIMENTAL DESIGN          │
└────────────────────────────────────────────────────────┘

1. REPLICATION
   Purpose: Estimate experimental error
   │
   ├── Biological replication (independent units)
   ├── Technical replication (repeated measurements)
   └── Temporal replication (over time)

   Minimum: n ≥ 3 per treatment
   Recommended: n ≥ 4-6 per treatment

2. RANDOMIZATION
   Purpose: Remove systematic bias
   │
   ├── Random treatment assignment
   ├── Random spatial arrangement
   └── Random temporal order

   Methods: Random number tables, computer generation

3. CONTROL
   Purpose: Reduce variability and isolate effects
   │
   ├── Experimental control (untreated baseline)
   ├── Positive control (known effect)
   ├── Standardization (consistent conditions)
   └── Blocking (account for known variation)
```

### Experimental vs. Observational Studies

**Experimental Studies:**
- Researcher manipulates independent variable(s)
- Random assignment to treatments
- Can establish causation
- Higher internal validity

**Observational Studies:**
- No manipulation of variables
- Observe natural variation
- Can identify correlations
- Higher external validity but cannot prove causation

**Example in Aquaponics:**

```
EXPERIMENTAL APPROACH:
Question: Does supplemental iron increase basil yield?

Design: Assign systems randomly to:
├── Control: No iron supplementation (0 mg/L)
├── Treatment 1: Low iron (1 mg/L Fe)
├── Treatment 2: Medium iron (2 mg/L Fe)
└── Treatment 3: High iron (3 mg/L Fe)

Result: Can conclude iron causes yield changes

OBSERVATIONAL APPROACH:
Question: Does iron concentration relate to basil yield?

Design: Measure iron levels and yields in:
└── 20 commercial aquaponics systems

Result: Can only conclude iron is associated with yield
```

## 2.2 Randomized Complete Block Design (RCBD)

### When to Use RCBD

- Known source of variation exists (e.g., location, time, initial size)
- Want to reduce experimental error
- Can group experimental units into homogeneous blocks
- All treatments appear once in each block

### RCBD Structure

```
┌────────────────────────────────────────────────────────┐
│     RANDOMIZED COMPLETE BLOCK DESIGN EXAMPLE           │
│     (4 treatments, 4 blocks, n=16 experimental units)  │
└────────────────────────────────────────────────────────┘

SPATIAL BLOCKING (Greenhouse benches):

Block 1 (North)  │  Block 2 (North-Central)
─────────────────┼─────────────────────────
 [C]  [B]  [D]  [A] │  [D]  [A]  [C]  [B]
─────────────────┼─────────────────────────
Block 3 (South-Central) │ Block 4 (South)
─────────────────┼─────────────────────────
 [A]  [C]  [B]  [D] │  [B]  [D]  [A]  [C]

Treatment Key:
A = Control (standard feed)
B = High protein feed
C = High lipid feed
D = Plant-based feed

Blocking Factor: Position (light gradient north-south)

TEMPORAL BLOCKING (Sequential trials):

Block 1: January-March
Block 2: April-June
Block 3: July-September
Block 4: October-December

All 4 treatments run in each time period
```

### Statistical Model for RCBD

```
Mathematical Model:
Yij = μ + τi + βj + εij

Where:
Yij = Observed response for treatment i in block j
μ   = Overall mean
τi  = Effect of treatment i (fixed effect)
βj  = Effect of block j (can be fixed or random)
εij = Random error

Assumptions:
1. Errors are normally distributed: εij ~ N(0, σ²)
2. Errors are independent
3. Constant variance across treatments
4. Additive effects (no interaction between treatment and block)
```

### ANOVA Table for RCBD

```
┌──────────────┬─────┬──────────┬──────────┬────────┬─────────┐
│ Source of    │ df  │    SS    │    MS    │   F    │ P-value │
│ Variation    │     │          │          │        │         │
├──────────────┼─────┼──────────┼──────────┼────────┼─────────┤
│ Blocks       │ b-1 │  SSB     │ MSB      │ MSB/MSE│    -    │
├──────────────┼─────┼──────────┼──────────┼────────┼─────────┤
│ Treatments   │ t-1 │  SST     │ MST      │ MST/MSE│  p < α  │
├──────────────┼─────┼──────────┼──────────┼────────┼─────────┤
│ Error        │(b-1)│  SSE     │ MSE      │   -    │    -    │
│              │(t-1)│          │          │        │         │
├──────────────┼─────┼──────────┼──────────┼────────┼─────────┤
│ Total        │bt-1 │  SSTotal │    -     │   -    │    -    │
└──────────────┴─────┴──────────┴──────────┴────────┴─────────┘

b = number of blocks
t = number of treatments
df = degrees of freedom
SS = sum of squares
MS = mean square (SS/df)
F = F-statistic
```

### Design Example: Stocking Density Experiment

**Research Question:** Does fish stocking density affect lettuce yield in coupled aquaponics?

**Experimental Design:**

```
TREATMENTS (4 levels):
├── T1: 5 kg/m³ (low density)
├── T2: 10 kg/m³ (medium density)
├── T3: 15 kg/m³ (high density)
└── T4: 20 kg/m³ (very high density)

BLOCKS (4 replicates):
└── 4 independent aquaponics systems (blocks)

EXPERIMENTAL UNITS:
└── 16 deep water culture rafts (4 per system)

BLOCKING FACTOR:
└── System (accounts for system-to-system variation)

RANDOMIZATION:
└── Random assignment of stocking density to rafts within each system

MEASUREMENTS:
├── Primary: Lettuce fresh weight (g) at harvest
├── Secondary: Plant height, leaf number, root length
└── Covariates: Water quality, light intensity
```

## 2.3 Factorial Experimental Designs

### Purpose of Factorial Designs

**Advantages:**
- Test multiple factors simultaneously
- More efficient than one-factor-at-a-time
- Detect interactions between factors
- Better represents complex systems

**Two-Factor Factorial Design:**

```
┌────────────────────────────────────────────────────────┐
│          2 × 3 FACTORIAL DESIGN STRUCTURE              │
│                                                        │
│    Factor A: Fish Species (2 levels)                   │
│    Factor B: Plant Density (3 levels)                  │
│    Total Treatment Combinations: 2 × 3 = 6            │
└────────────────────────────────────────────────────────┘

                    FACTOR B (Plant Density)
                    Low    Medium    High
                   (10/m²) (20/m²)  (30/m²)
              ┌─────────┬─────────┬─────────┐
              │         │         │         │
    FACTOR A  │  T1     │  T2     │  T3     │
    Tilapia   │         │         │         │
              ├─────────┼─────────┼─────────┤
              │         │         │         │
    Catfish   │  T4     │  T5     │  T6     │
              │         │         │         │
              └─────────┴─────────┴─────────┘

Each treatment combination replicated n times
Total experimental units = 2 × 3 × n
```

### Main Effects and Interactions

```
MAIN EFFECT:
Effect of one factor averaged across levels of other factors

INTERACTION EFFECT:
Effect of one factor depends on level of another factor

GRAPHICAL INTERPRETATION:

NO INTERACTION (Parallel lines):
Yield
  ↑
  │        Tilapia ────────
  │               ╱
  │              ╱
  │   Catfish ──────────
  │    ╱
  │   ╱
  └────────────────────────→
     Low   Med   High
      Plant Density

INTERACTION PRESENT (Non-parallel lines):
Yield
  ↑
  │   Tilapia ────────────
  │          ╱  ╲
  │         ╱    ╲
  │  Catfish      ╲
  │ ────────────────╲
  │
  └────────────────────────→
     Low   Med   High
      Plant Density

Interpretation: Tilapia yield increases with plant density,
but catfish yield decreases at high density (competition?)
```

### Statistical Model for Factorial Design

```
Two-Factor Model:
Yijk = μ + αi + βj + (αβ)ij + εijk

Where:
Yijk = Observed response
μ    = Overall mean
αi   = Main effect of factor A (level i)
βj   = Main effect of factor B (level j)
(αβ)ij = Interaction effect
εijk = Random error

ANOVA Table:
┌──────────────┬─────┬──────┬──────┬────────┬─────────┐
│ Source       │ df  │  SS  │  MS  │   F    │ P-value │
├──────────────┼─────┼──────┼──────┼────────┼─────────┤
│ Factor A     │ a-1 │ SSA  │ MSA  │ MSA/MSE│  p < α  │
├──────────────┼─────┼──────┼──────┼────────┼─────────┤
│ Factor B     │ b-1 │ SSB  │ MSB  │ MSB/MSE│  p < α  │
├──────────────┼─────┼──────┼──────┼────────┼─────────┤
│ A × B        │(a-1)│ SSAB │ MSAB │MSAB/MSE│  p < α  │
│              │(b-1)│      │      │        │         │
├──────────────┼─────┼──────┼──────┼────────┼─────────┤
│ Error        │ab(n-1) SSE │ MSE  │   -    │    -    │
├──────────────┼─────┼──────┼──────┼────────┼─────────┤
│ Total        │abn-1│ SST  │  -   │   -    │    -    │
└──────────────┴─────┴──────┴──────┴────────┴─────────┘
```

### Three-Factor Factorial Example

**Research Question:** How do light spectrum, photoperiod, and nutrient strength affect basil essential oil content?

```
FACTORS:
├── Factor A: Light Spectrum (2 levels)
│   ├── A1: Blue-Red LED
│   └── A2: Full Spectrum LED
│
├── Factor B: Photoperiod (2 levels)
│   ├── B1: 12 hours
│   └── B2: 16 hours
│
└── Factor C: Nutrient EC (3 levels)
    ├── C1: 1.0 mS/cm
    ├── C2: 1.5 mS/cm
    └── C3: 2.0 mS/cm

TREATMENT COMBINATIONS: 2 × 2 × 3 = 12

REPLICATION: n = 4 per treatment

TOTAL EXPERIMENTAL UNITS: 12 × 4 = 48 plants

POSSIBLE INTERACTIONS:
├── A × B (Light × Photoperiod)
├── A × C (Light × Nutrient)
├── B × C (Photoperiod × Nutrient)
└── A × B × C (Three-way interaction)
```

## 2.4 Split-Plot and Repeated Measures Designs

### Split-Plot Design

**When to Use:**
- Some factors harder to randomize than others
- Different factors applied at different scales
- Practical constraints prevent full randomization

**Structure:**

```
┌────────────────────────────────────────────────────────┐
│              SPLIT-PLOT DESIGN                         │
│                                                        │
│  Whole-Plot Factor: System Type (hard to randomize)   │
│  Sub-Plot Factor: Plant Species (easy to randomize)   │
└────────────────────────────────────────────────────────┘

BLOCK 1                    BLOCK 2
┌──────────────────┐      ┌──────────────────┐
│  COUPLED SYSTEM  │      │ DECOUPLED SYSTEM │
│ ┌───┬───┬───┐   │      │ ┌───┬───┬───┐   │
│ │ L │ B │ K │   │      │ │ K │ L │ B │   │
│ └───┴───┴───┘   │      │ └───┴───┴───┘   │
└──────────────────┘      └──────────────────┘

BLOCK 3                    BLOCK 4
┌──────────────────┐      ┌──────────────────┐
│ DECOUPLED SYSTEM │      │  COUPLED SYSTEM  │
│ ┌───┬───┬───┐   │      │ ┌───┬───┬───┐   │
│ │ B │ K │ L │   │      │ │ L │ K │ B │   │
│ └───┴───┴───┘   │      │ └───┴───┴───┘   │
└──────────────────┘      └──────────────────┘

L = Lettuce, B = Basil, K = Kale

Whole-Plot: System type (2 levels)
Sub-Plot: Plant species (3 levels)
Blocks: 4 replicates
```

**Statistical Model:**

```
Yijk = μ + βk + αi + δik + γj + (αγ)ij + εijk

Where:
βk   = Block effect
αi   = Whole-plot treatment effect (system type)
δik  = Whole-plot error
γj   = Sub-plot treatment effect (plant species)
(αγ)ij = Interaction
εijk = Sub-plot error

ANOVA:
┌──────────────────┬─────┬──────┬──────┬──────────┐
│ Source           │ df  │  MS  │  F   │ Error term│
├──────────────────┼─────┼──────┼──────┼──────────┤
│ Block            │ b-1 │ MSB  │  -   │    -     │
├──────────────────┼─────┼──────┼──────┼──────────┤
│ Whole-Plot (WP)  │ a-1 │ MSWP │MSWP/ │   MSE_WP │
│                  │     │      │MSE_WP│          │
├──────────────────┼─────┼──────┼──────┼──────────┤
│ Error(WP)        │(a-1)│MSE_WP│  -   │    -     │
│                  │(b-1)│      │      │          │
├──────────────────┼─────┼──────┼──────┼──────────┤
│ Sub-Plot (SP)    │ c-1 │ MSSP │MSSP/ │   MSE_SP │
│                  │     │      │MSE_SP│          │
├──────────────────┼─────┼──────┼──────┼──────────┤
│ WP × SP          │(a-1)│ MSINT│MSINT/│   MSE_SP │
│                  │(c-1)│      │MSE_SP│          │
├──────────────────┼─────┼──────┼──────┼──────────┤
│ Error(SP)        │a(b-1)│MSE_SP│ -   │    -     │
│                  │(c-1)│      │      │          │
└──────────────────┴─────┴──────┴──────┴──────────┘
```

### Repeated Measures Design

**When to Use:**
- Same experimental unit measured multiple times
- Track changes over time
- Reduce between-subject variability
- More efficient use of resources

**Example: Fish Growth Over Time**

```
REPEATED MEASURES DESIGN
Research Question: Does probiotic supplementation affect
                   tilapia growth trajectory?

TREATMENTS:
├── Control (no probiotic)
└── Probiotic (1 g/kg feed)

EXPERIMENTAL UNITS:
└── 8 tanks (4 per treatment)

TIME POINTS (Repeated Measures):
├── Week 0 (baseline)
├── Week 2
├── Week 4
├── Week 6
├── Week 8
└── Week 10 (final)

DATA STRUCTURE:
┌──────┬───────────┬──────┬──────┬──────┬──────┬──────┬──────┐
│ Tank │ Treatment │ Wk 0 │ Wk 2 │ Wk 4 │ Wk 6 │ Wk 8 │ Wk10 │
├──────┼───────────┼──────┼──────┼──────┼──────┼──────┼──────┤
│  1   │  Control  │  50  │  75  │ 110  │ 155  │ 210  │ 275  │
│  2   │  Control  │  48  │  72  │ 105  │ 150  │ 205  │ 270  │
│  3   │  Control  │  51  │  77  │ 112  │ 160  │ 215  │ 280  │
│  4   │  Control  │  49  │  74  │ 108  │ 153  │ 208  │ 273  │
│  5   │ Probiotic │  50  │  78  │ 120  │ 175  │ 240  │ 315  │
│  6   │ Probiotic │  48  │  76  │ 118  │ 172  │ 235  │ 310  │
│  7   │ Probiotic │  51  │  80  │ 123  │ 178  │ 245  │ 320  │
│  8   │ Probiotic │  49  │  77  │ 119  │ 174  │ 238  │ 313  │
└──────┴───────────┴──────┴──────┴──────┴──────┴──────┴──────┘

ASSUMPTIONS:
1. Sphericity: Equal variance of differences between time points
2. Compound symmetry: Equal correlation between time points
3. If violated: Use corrections (Greenhouse-Geisser, Huynh-Feldt)
                or multivariate approach (MANOVA)
```

**Growth Trajectory Visualization:**

```
Weight (g)
    ↑
350 │                              ● Probiotic
    │                          ●
300 │                      ●
    │                  ●               ○ Control
250 │              ●           ○
    │          ●           ○
200 │      ●           ○
    │  ●           ○
150 │          ○
    │      ○
100 │  ○
    │
 50 │○●
    └─────────────────────────────────────→ Time (weeks)
      0    2    4    6    8   10

Interpretation: Probiotic group shows steeper growth
trajectory after week 4 (potential interaction effect)
```

## 2.5 Power Analysis and Sample Size Determination

### Statistical Power Concepts

```
┌────────────────────────────────────────────────────────┐
│              STATISTICAL POWER FRAMEWORK               │
└────────────────────────────────────────────────────────┘

POWER (1 - β) = Probability of detecting a real effect

FACTORS AFFECTING POWER:
├── 1. Significance level (α)
│      Lower α → Lower power
│      Typical: α = 0.05
│
├── 2. Effect size
│      Larger effect → Higher power
│      Cohen's d: Small (0.2), Medium (0.5), Large (0.8)
│
├── 3. Sample size (n)
│      Larger n → Higher power
│      Most controllable factor
│
└── 4. Variability (σ)
     Lower σ → Higher power
     Improved by: blocking, standardization, precise measurement

TARGET POWER: ≥ 0.80 (80% chance of detecting real effect)
```

### Effect Size Calculation

**Cohen's d for Two-Group Comparison:**

```
d = (μ₁ - μ₂) / σ

Where:
μ₁, μ₂ = Means of two groups
σ      = Pooled standard deviation

Example:
Treatment mean = 150 g
Control mean   = 120 g
Pooled SD      = 20 g

d = (150 - 120) / 20 = 1.5 (large effect)

INTERPRETATION:
├── d = 0.2 → Small effect
├── d = 0.5 → Medium effect
└── d = 0.8 → Large effect
```

### Sample Size Formulas

**Two-Group t-test (Equal sample sizes):**

```
n = 2(zα/2 + zβ)² × σ² / (μ₁ - μ₂)²

Where:
n     = Sample size per group
zα/2  = Z-value for significance level (1.96 for α=0.05, two-tailed)
zβ    = Z-value for power (0.84 for power=0.80)
σ     = Standard deviation
μ₁-μ₂ = Expected difference between means

WORKED EXAMPLE:
Expected difference: 30 g
Standard deviation: 25 g
α = 0.05, Power = 0.80

n = 2(1.96 + 0.84)² × 25² / 30²
n = 2(2.8)² × 625 / 900
n = 2(7.84) × 625 / 900
n = 10.89 ≈ 11 per group

TOTAL SAMPLE SIZE: 22 experimental units
```

**ANOVA (Multiple groups):**

```
n = [λ/(k-1)] + 1

Where:
k = Number of groups
λ = Non-centrality parameter (from power tables or software)

For aquaponics: Often use software (G*Power, R, SAS)
```

### Power Analysis Software

**G*Power (Free):**
```
Steps:
1. Select test family (t-test, ANOVA, etc.)
2. Select statistical test
3. Input parameters:
   - Effect size
   - α error probability (0.05)
   - Power (0.80)
4. Calculate required sample size
```

**R code example:**

```r
# Two-group t-test power analysis
library(pwr)

# Calculate sample size
pwr.t.test(
  d = 0.5,           # Effect size (medium)
  sig.level = 0.05,  # Significance level
  power = 0.80,      # Desired power
  type = "two.sample"
)

# Output: n = 64 per group

# ANOVA power analysis
pwr.anova.test(
  k = 4,             # Number of groups
  f = 0.25,          # Effect size
  sig.level = 0.05,
  power = 0.80
)

# Output: n = 45 per group (180 total)
```

### Practical Sample Size Considerations

```
MINIMUM RECOMMENDATIONS FOR AQUAPONICS:

SYSTEM-LEVEL STUDIES:
├── Minimum: n = 3 systems per treatment
├── Recommended: n = 4-6 systems per treatment
└── Note: Systems are expensive; may need to compromise

WITHIN-SYSTEM STUDIES:
├── Minimum: n = 4 plants/fish per treatment per system
├── Recommended: n = 8-12 per treatment per system
└── Use blocking by system

PILOT STUDIES:
├── Purpose: Estimate variability for power analysis
├── Sample size: n = 6-10 total
└── Do NOT use for hypothesis testing
```

## 2.6 Control Strategies and Replication

### Types of Controls

**1. Negative Control (Untreated)**
- Standard conditions without experimental treatment
- Establishes baseline performance

**2. Positive Control**
- Known effective treatment
- Validates that experiment can detect effects

**3. Sham Control**
- Receives all procedures except active treatment
- Controls for handling/procedure effects

**4. Concurrent Control**
- Run simultaneously with treatments
- Same environmental conditions

**Example in Aquaponics:**

```
EXPERIMENT: Testing novel biofilter inoculant

TREATMENT GROUPS:
├── Negative Control: No inoculant added
├── Positive Control: Established biofilter media from mature system
├── Test Treatment 1: Commercial inoculant A
├── Test Treatment 2: Commercial inoculant B
└── Test Treatment 3: Novel inoculant (experimental)

All groups receive same feeding, stocking, water exchanges
```

### Replication Strategies

```
TRUE REPLICATION:
Independent experimental units receiving same treatment

PSEUDOREPLICATION (AVOID):
Non-independent samples treated as independent

EXAMPLE:

CORRECT REPLICATION:
┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐
│ System 1│  │ System 2│  │ System 3│  │ System 4│
│         │  │         │  │         │  │         │
│Treatment│  │Treatment│  │ Control │  │ Control │
│    A    │  │    A    │  │         │  │         │
└─────────┘  └─────────┘  └─────────┘  └─────────┘
n = 2 per treatment (true replication)

PSEUDOREPLICATION (INCORRECT):
┌─────────┐  ┌─────────┐
│ System 1│  │ System 2│
│ ┌─┬─┬─┐ │  │ ┌─┬─┬─┐ │
│ │A│A│A│ │  │ │C│C│C│ │
│ └─┴─┴─┘ │  │ └─┴─┴─┘ │
└─────────┘  └─────────┘

Claims n=3, but only 1 independent system per treatment!
All "replicates" share same water = NOT independent
```

### Hierarchical Replication

```
NESTED DESIGN STRUCTURE:

LEVEL 1: SYSTEMS (n=4)
├── System 1 (Treatment A)
│   │
│   ├── LEVEL 2: TANKS (3 tanks per system)
│   │   ├── Tank 1.1
│   │   ├── Tank 1.2
│   │   └── Tank 1.3
│   │       │
│   │       └── LEVEL 3: FISH (10 fish per tank)
│   │           ├── Fish 1
│   │           ├── Fish 2
│   │           └── ... (10 total)
│
└── Systems 2, 3, 4 follow same structure

ANALYSIS CONSIDERATIONS:
├── Primary experimental unit: System (n=4)
├── Sub-sampling unit: Tank (n=3 per system)
└── Measurement unit: Fish (n=10 per tank)

Use hierarchical/mixed models to account for structure
```

## Key Takeaways

1. **Follow Core Principles** - Always incorporate replication, randomization, and control
2. **Match Design to Question** - Choose appropriate design based on research objectives and constraints
3. **Plan Sample Size** - Conduct power analysis before starting to ensure adequate sample size
4. **Avoid Pseudoreplication** - Ensure experimental units are truly independent
5. **Consider Interactions** - Factorial designs reveal how factors work together

## Practical Application

**Design Challenge:**

Research Question: "How do fish species, feeding rate, and plant type interact to affect system productivity?"

Your task:
1. Identify all experimental factors and levels
2. Select an appropriate experimental design
3. Calculate required sample size (assume medium effect)
4. Diagram the layout showing randomization
5. Describe controls and blocking strategy
6. List all possible interactions to test

## Further Reading

- Montgomery, D.C. (2017). *Design and Analysis of Experiments* (9th ed.)
- Quinn, G.P., & Keough, M.J. (2002). *Experimental Design and Data Analysis for Biologists*
- Kuehl, R.O. (2000). *Design of Experiments: Statistical Principles of Research Design*

---

**Next Module:** [Module 3: Statistical Analysis for CEA Research](module_03_statistical_analysis.md)
