# Module 3: Experimental Design Fundamentals

## Learning Objectives

By the end of this module, you will be able to:
1. Identify and classify variables in agricultural experiments
2. Design appropriate experimental controls
3. Apply principles of replication, randomization, and blocking
4. Calculate required sample sizes
5. Recognize and control confounding variables
6. Choose experimental units appropriately

---

## Variables in Agricultural Research

### Variable Classification

```
┌─────────────────────────────────────────────────────────────────────┐
│                        VARIABLE TYPES                               │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  INDEPENDENT VARIABLE (IV)                                          │
│  ├─ What researcher manipulates                                    │
│  ├─ "Treatment" or "factor"                                        │
│  └─ Example: Nutrient concentration, light intensity               │
│                                                                     │
│  DEPENDENT VARIABLE (DV)                                            │
│  ├─ What researcher measures                                       │
│  ├─ "Response" or "outcome"                                        │
│  └─ Example: Plant height, yield, fish weight                      │
│                                                                     │
│  CONTROLLED VARIABLE                                                │
│  ├─ Held constant across treatments                                │
│  ├─ Prevents confounding                                           │
│  └─ Example: Temperature, photoperiod, plant variety               │
│                                                                     │
│  CONFOUNDING VARIABLE                                               │
│  ├─ Uncontrolled factor affecting results                         │
│  ├─ Can lead to false conclusions                                 │
│  └─ Example: Unnoticed equipment malfunction, seasonal change      │
│                                                                     │
│  EXTRANEOUS VARIABLE                                                │
│  ├─ May affect DV but not of interest                             │
│  ├─ Should be controlled or randomized                            │
│  └─ Example: Humidity when studying light effects                  │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Variable Measurement Scales

| Scale | Description | Examples | Statistics |
|-------|-------------|----------|------------|
| **Nominal** | Categories, no order | Plant species, color, system type | Mode, chi-square |
| **Ordinal** | Ordered categories | Quality rating (poor/fair/good), disease severity (1-5) | Median, rank tests |
| **Interval** | Equal intervals, no true zero | Temperature (°C/°F), pH | Mean, t-test, ANOVA |
| **Ratio** | Equal intervals, true zero | Weight, height, concentration | Mean, all parametric tests |

### Example Variable Identification

**Research Question:** "Does fish stocking density affect basil yield in aquaponic systems?"

| Variable Type | Variable | Values/Levels |
|---------------|----------|---------------|
| Independent | Fish stocking density | Low (10 kg/m³), Medium (20 kg/m³), High (30 kg/m³) |
| Dependent | Basil fresh weight | grams per plant |
| Controlled | Temperature | 72°F |
| Controlled | Light intensity | 300 μmol/m²/s |
| Controlled | Photoperiod | 16h light / 8h dark |
| Controlled | Basil variety | Genovese |
| Controlled | Plant spacing | 6 inches |
| Potential Confounding | Water quality (if not monitored) | pH, DO, ammonia, nitrate |

---

## Experimental Controls

### Types of Controls

**1. Negative Control**
- No treatment applied
- Baseline for comparison
- Example: Plants in standard nutrient solution

**2. Positive Control**
- Known effective treatment
- Validates that experiment can detect effects
- Example: Commercial fertilizer when testing new formulation

**3. Placebo Control**
- Appears like treatment but has no active component
- Controls for psychological/handling effects
- Example: Adding water volume equal to treatment solution

**4. Vehicle Control**
- Contains carrier/solvent but not active ingredient
- Example: Ethanol used to dissolve treatment compound

### Control Design Examples

```
┌─────────────────────────────────────────────────────────────────────┐
│                  AQUAPONIC NUTRIENT STUDY                           │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  TREATMENT GROUPS:                                                  │
│                                                                     │
│  Group 1: CONTROL (Conventional hydroponic solution)                │
│  └─► Baseline performance                                          │
│                                                                     │
│  Group 2: 100% Aquaponic water (fish-derived nutrients)             │
│  └─► Test treatment                                                │
│                                                                     │
│  Group 3: 50% Aquaponic + 50% Hydroponic                            │
│  └─► Intermediate level                                            │
│                                                                     │
│  Group 4: Aquaponic + Supplement (targeted additions)               │
│  └─► Optimized treatment                                           │
│                                                                     │
│  All groups receive:                                                │
│  ├─ Same plant variety                                             │
│  ├─ Same environmental conditions                                  │
│  ├─ Same container type and volume                                 │
│  └─ Same measurement schedule                                      │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## The Three R's of Experimental Design

### 1. Replication

**Definition:** Repeating experimental units under same treatment

**Why Replicate?**
- Estimate variability
- Increase statistical power
- Account for random variation
- Detect true treatment effects

**True Replication vs. Pseudoreplication**

```
TRUE REPLICATION (Correct):
┌─────────┐  ┌─────────┐  ┌─────────┐
│ Tank 1  │  │ Tank 2  │  │ Tank 3  │  ← Treatment A
│ 10 fish │  │ 10 fish │  │ 10 fish │
└─────────┘  └─────────┘  └─────────┘
     ↑            ↑            ↑
3 independent tanks = 3 replicates (n=3)

PSEUDOREPLICATION (Incorrect):
┌─────────────────────────────────────┐
│           Single Tank               │
│  Fish 1, Fish 2, Fish 3, ..., 10    │  ← Treatment A
└─────────────────────────────────────┘
                ↑
10 fish in one tank ≠ 10 replicates (n=1)
```

**Determining Replication Level:**

Factors to consider:
- Expected effect size
- Variability in system
- Statistical power desired
- Resources available
- Practical constraints

### 2. Randomization

**Definition:** Random assignment of treatments to experimental units

**Purpose:**
- Eliminate selection bias
- Distribute confounding variables evenly
- Validate statistical assumptions
- Enable valid inference

**Randomization Methods:**

```
SIMPLE RANDOMIZATION:
┌────┬────┬────┬────┬────┬────┬────┬────┬────┐
│ B  │ A  │ C  │ B  │ C  │ A  │ A  │ C  │ B  │
└────┴────┴────┴────┴────┴────┴────┴────┴────┘
Each unit assigned randomly (coin flip, random number generator)

BLOCK RANDOMIZATION:
Block 1: A B C (randomized within block)
Block 2: C A B (randomized within block)
Block 3: B C A (randomized within block)
```

**How to Randomize:**

1. Number all experimental units
2. Use random number generator or table
3. Assign treatments based on random sequence
4. Document randomization scheme

**Online Tools:**
- random.org
- R: `sample()` function
- Excel: `=RAND()` function
- Research Randomizer: randomizer.org

### 3. Blocking

**Definition:** Grouping similar experimental units before randomization

**When to Block:**
- Known source of variability exists
- Units are heterogeneous
- Treatments applied over time
- Spatial gradients present

**Common Blocking Factors in CEA:**

| Blocking Factor | Reason | Example |
|-----------------|--------|---------|
| Greenhouse section | Light/temperature gradients | North vs. South benches |
| Time | Seasonal effects | Week 1, Week 2, Week 3 |
| Tank position | Water flow differences | Inlet vs. outlet position |
| Initial size | Plant/fish variability | Small, medium, large |
| Equipment | Different systems | Greenhouse 1 vs. 2 |

**Blocking Diagram:**

```
┌──────────────────────────────────────────────────────────────────┐
│                 RANDOMIZED COMPLETE BLOCK DESIGN                 │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Block 1 (North Bench):   [C] [A] [B] [D]  ← Randomized         │
│                                                                  │
│  Block 2 (Middle Bench):  [B] [D] [C] [A]  ← Randomized         │
│                                                                  │
│  Block 3 (South Bench):   [A] [C] [D] [B]  ← Randomized         │
│                                                                  │
│  Each treatment appears once per block                          │
│  Randomization within each block                                │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

---

## Sample Size Determination

### Why Sample Size Matters

- **Too Small:** May miss real effects (Type II error)
- **Too Large:** Waste of resources, ethical concerns
- **Just Right:** Adequate power, efficient use of resources

### Power Analysis Components

**Four Related Quantities:**

1. **Sample size (n)** - Number of experimental units
2. **Effect size (d)** - Magnitude of difference to detect
3. **Significance level (α)** - Probability of Type I error (usually 0.05)
4. **Statistical power (1-β)** - Probability of detecting real effect (usually 0.80)

**Relationship:** If you know 3, you can calculate the 4th

### Sample Size Formula (Comparing Two Means)

```
n = 2(Zα/2 + Zβ)² × (σ²/δ²)

Where:
n = sample size per group
Zα/2 = Z-value for significance level (1.96 for α=0.05, two-tailed)
Zβ = Z-value for power (0.84 for power=0.80)
σ = population standard deviation
δ = minimum detectable difference (effect size)

Simplified for α=0.05, power=0.80:
n = 16 × (σ²/δ²)
```

### Practical Example

**Scenario:** Comparing two nutrient formulations for lettuce yield

**Known/Estimated Values:**
- Current mean yield: 150 g/plant
- Standard deviation (from pilot study): 20 g
- Minimum meaningful difference: 15 g (10% increase)
- Desired power: 80%
- Significance level: 0.05

**Calculation:**
```
σ = 20 g
δ = 15 g

n = 16 × (20²/15²)
n = 16 × (400/225)
n = 16 × 1.78
n = 28.4

Round up: n = 29 plants per treatment group
```

### Sample Size Tables

**For comparing two means (α=0.05, power=0.80, two-tailed t-test):**

| Effect Size (δ/σ) | n per group | Total n | Interpretation |
|-------------------|-------------|---------|----------------|
| 0.2 (small) | 393 | 786 | Very subtle difference |
| 0.5 (medium) | 64 | 128 | Moderate difference |
| 0.8 (large) | 26 | 52 | Substantial difference |
| 1.0 (very large) | 17 | 34 | Dramatic difference |
| 1.5 (huge) | 8 | 16 | Obvious difference |

**For ANOVA (3 groups, α=0.05, power=0.80):**

| Effect Size (f) | n per group | Total n |
|-----------------|-------------|---------|
| 0.1 (small) | 322 | 966 |
| 0.25 (medium) | 52 | 156 |
| 0.4 (large) | 21 | 63 |

### Adjusting for Practical Constraints

**Accounting for Attrition:**

If expecting 10% dropout:
```
n_adjusted = n / (1 - dropout_rate)
n_adjusted = 29 / (1 - 0.10)
n_adjusted = 32 plants per group
```

**Unequal Group Sizes:**

Sometimes practical constraints require different group sizes:
- Still valid but less efficient
- May need to increase larger group to maintain power

---

## Experimental Units

### Defining the Experimental Unit

**Experimental Unit:** The smallest unit to which treatment is independently applied

**Critical for:**
- Determining true sample size
- Selecting appropriate statistical test
- Avoiding pseudoreplication

### Examples in Aquaponics/CEA

| Research Context | Treatment | Experimental Unit | NOT the Unit |
|------------------|-----------|-------------------|--------------|
| Fish growth study | Feed type | Individual tank | Individual fish in tank |
| Lettuce variety trial | Variety | Individual plant | Leaf from plant |
| System comparison | System type | Complete system | Plants within system |
| Nutrient experiment | Concentration | Grow bed or container | Multiple plants in same bed |
| Light study | Light spectrum | Individual plant (if isolated) | Measurements from same plant |

### Observational vs. Experimental Units

**Observational Unit:** What you measure

**Experimental Unit:** What receives treatment

**Example:**
```
Treatment: Different fish feeds (A, B, C)
Experimental Units: 9 tanks (3 per treatment)
Observational Units: 90 fish (10 per tank)

Sample size for statistics: n = 3 per treatment (tanks)
NOT n = 30 (fish per treatment)
```

---

## Controlling Confounding Variables

### What is Confounding?

**Confounding occurs when:**
- An extraneous variable correlates with both IV and DV
- Cannot separate treatment effect from confounding variable effect
- Leads to spurious conclusions

### Example of Confounding

```
CONFOUNDED DESIGN:
Treatment A applied in Greenhouse 1
Treatment B applied in Greenhouse 2

Problem: Any difference could be due to:
- Treatment (what you want to know)
- Greenhouse differences (confounding)
- Interaction of treatment × greenhouse

UNCONFOUNDED DESIGN:
Both treatments randomly distributed within both greenhouses

Result: Greenhouse effects averaged out
```

### Strategies to Control Confounding

| Strategy | Method | Example |
|----------|--------|---------|
| **Randomization** | Random assignment of treatments | Random placement of treatment groups |
| **Standardization** | Keep variables constant | Use same variety, equipment, protocols |
| **Balancing** | Ensure equal distribution | Equal number of males/females per treatment |
| **Blocking** | Group similar units | Block by greenhouse section |
| **Matching** | Pair similar units | Match fish by initial weight |
| **Statistical control** | Measure and adjust in analysis | Record temperature, use as covariate |

### Environmental Control Checklist

**Physical Environment:**
- [ ] Temperature uniformity
- [ ] Light distribution
- [ ] Humidity consistency
- [ ] Air circulation
- [ ] Spatial positioning

**System Management:**
- [ ] Timing of activities
- [ ] Personnel consistency
- [ ] Equipment calibration
- [ ] Water source
- [ ] Measurement protocols

**Biological Factors:**
- [ ] Genetic uniformity
- [ ] Age/size matching
- [ ] Health status
- [ ] Acclimatization period

---

## Common Experimental Design Errors

### 1. Pseudoreplication

**Error:** Treating subsamples as independent replicates

**Example:**
```
Wrong: 3 tanks, 10 plants per tank, analyzed as n=30
Right: 3 tanks analyzed as n=3 (average the 10 plants per tank)
```

**Solution:** Identify true experimental unit

### 2. Confounding

**Error:** Treatment coincides with another variable

**Example:**
```
Wrong: Treatment A tested in Spring, Treatment B in Summer
Right: Both treatments tested simultaneously, randomized
```

**Solution:** Randomize and control variables

### 3. Insufficient Replication

**Error:** Too few experimental units for adequate power

**Example:**
```
Wrong: 2 replicates per treatment
Right: Minimum 3, preferably 5+ based on power analysis
```

**Solution:** Conduct power analysis beforehand

### 4. No True Control

**Error:** All groups receive some form of treatment

**Example:**
```
Wrong: Comparing 3 new formulations with no standard
Right: Include commercial standard or no-treatment control
```

**Solution:** Include appropriate control group

### 5. Non-Random Assignment

**Error:** Systematic assignment of treatments

**Example:**
```
Wrong: Assigning best-looking plants to favored treatment
Right: Random assignment regardless of appearance
```

**Solution:** Use randomization procedures

---

## Experimental Design Workflow

```
┌─────────────────────────────────────────────────────────────────────┐
│              EXPERIMENTAL DESIGN PROCESS                            │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  STEP 1: Define Research Question                                  │
│  └─► Clear, specific, testable                                     │
│                                                                     │
│  STEP 2: Identify Variables                                        │
│  ├─► Independent variable(s) and levels                           │
│  ├─► Dependent variable(s)                                        │
│  └─► Variables to control                                         │
│                                                                     │
│  STEP 3: Choose Experimental Design                                │
│  └─► CRD, RCBD, factorial, etc.                                    │
│                                                                     │
│  STEP 4: Determine Sample Size                                     │
│  └─► Power analysis                                                │
│                                                                     │
│  STEP 5: Plan Randomization                                        │
│  └─► Method and documentation                                      │
│                                                                     │
│  STEP 6: Identify Blocking Factors                                 │
│  └─► Known sources of variation                                    │
│                                                                     │
│  STEP 7: Define Experimental Unit                                  │
│  └─► What receives treatment independently?                        │
│                                                                     │
│  STEP 8: Plan Controls                                             │
│  └─► Negative, positive, or both                                   │
│                                                                     │
│  STEP 9: Standardize Procedures                                    │
│  └─► Written protocols for consistency                             │
│                                                                     │
│  STEP 10: Consider Practical Constraints                           │
│  ├─► Resources                                                     │
│  ├─► Time                                                          │
│  ├─► Space                                                         │
│  └─► Equipment                                                     │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Practical Exercise: Design Critique

### Scenario

**Proposed Experiment:**

"A grower wants to test three LED light spectrums (red, blue, red+blue) on basil growth. They have one greenhouse with three benches. They plan to put spectrum A on bench 1, spectrum B on bench 2, and spectrum C on bench 3. Each bench will have 20 basil plants. They will measure total fresh weight at harvest after 4 weeks."

### Critique Questions

1. What is the sample size (n) for each treatment?

2. What is the experimental unit?

3. What is confounded with treatment in this design?

4. How could randomization be implemented?

5. What variables should be controlled?

6. What type of control group is needed?

7. What improvements would you suggest?

---

## Key Takeaways

1. **Variables must be clearly identified:** independent (manipulated), dependent (measured), controlled (held constant)

2. **Experimental controls** provide baseline comparisons and validate that experiments can detect effects

3. **The three R's are essential:**
   - Replication: Repeat experimental units
   - Randomization: Eliminate bias
   - Blocking: Account for known variation

4. **Sample size determination** requires considering effect size, variability, significance level, and power

5. **Experimental unit** is what receives treatment independently; critical for avoiding pseudoreplication

6. **Confounding variables** must be controlled through randomization, standardization, or statistical methods

7. **Careful planning** prevents common design errors that can invalidate results

---

## Additional Resources

**Sample Size Calculators:**
- G*Power (free software)
- R packages: `pwr`, `simr`
- Online calculators: Sample Size Calculator by ClinCalc

**Randomization Tools:**
- random.org
- Research Randomizer
- R: `sample()` function

---

## Next Module Preview

**Module 4: Common Design Types**

Learn about:
- Completely Randomized Design (CRD)
- Randomized Complete Block Design (RCBD)
- Latin Square Design
- Factorial designs
- Split-plot designs
- Repeated measures designs

---

*Module 3 Complete | Course 309: Research Methodology for Agriculture*
