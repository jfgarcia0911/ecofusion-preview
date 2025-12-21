# Module 4: Common Design Types

## Learning Objectives

By the end of this module, you will be able to:
1. Select appropriate experimental designs for different research scenarios
2. Implement completely randomized designs (CRD)
3. Apply randomized complete block designs (RCBD)
4. Utilize Latin square designs for two blocking factors
5. Design factorial experiments to study interactions
6. Understand split-plot and repeated measures designs

---

## Overview of Experimental Designs

### Design Selection Framework

```
┌─────────────────────────────────────────────────────────────────────┐
│                 CHOOSING THE RIGHT DESIGN                           │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  START: What are you studying?                                      │
│     │                                                               │
│     ├─► One factor, homogeneous units?                             │
│     │   └─► COMPLETELY RANDOMIZED DESIGN (CRD)                     │
│     │                                                               │
│     ├─► One factor, known variation source?                        │
│     │   └─► RANDOMIZED COMPLETE BLOCK DESIGN (RCBD)                │
│     │                                                               │
│     ├─► One factor, two sources of variation?                      │
│     │   └─► LATIN SQUARE DESIGN                                    │
│     │                                                               │
│     ├─► Two or more factors, studying interactions?                │
│     │   └─► FACTORIAL DESIGN                                       │
│     │                                                               │
│     ├─► Some factors harder to randomize?                          │
│     │   └─► SPLIT-PLOT DESIGN                                      │
│     │                                                               │
│     └─► Measurements over time on same units?                      │
│         └─► REPEATED MEASURES DESIGN                               │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Completely Randomized Design (CRD)

### When to Use CRD

**Ideal Conditions:**
- Experimental units are homogeneous
- Environmental conditions are uniform
- No obvious gradients or patterns
- Laboratory settings
- Controlled environment chambers

**Advantages:**
- Simple to design and analyze
- Flexible number of replicates per treatment
- Maximum degrees of freedom for error

**Disadvantages:**
- Less precise if units are heterogeneous
- Cannot control for spatial variation
- May miss blocking opportunities

### CRD Structure

```
┌────────────────────────────────────────────────────────────────┐
│         COMPLETELY RANDOMIZED DESIGN (CRD)                     │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  Treatment A (n=5):  Unit 3, Unit 7, Unit 11, Unit 14, Unit 2 │
│                                                                │
│  Treatment B (n=5):  Unit 5, Unit 9, Unit 13, Unit 1, Unit 8  │
│                                                                │
│  Treatment C (n=5):  Unit 4, Unit 10, Unit 6, Unit 12, Unit 15│
│                                                                │
│  Random Layout:                                                │
│  ┌───┬───┬───┬───┬───┐                                         │
│  │ B │ A │ B │ C │ B │                                         │
│  ├───┼───┼───┼───┼───┤                                         │
│  │ A │ C │ A │ C │ B │                                         │
│  ├───┼───┼───┼───┼───┤                                         │
│  │ A │ C │ B │ A │ C │                                         │
│  └───┴───┴───┴───┴───┘                                         │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

### Example: Nutrient Solution Comparison

**Research Question:** "Which of three nutrient formulations produces highest lettuce yield?"

**Design:**
- **Treatments:** Formula A, Formula B, Formula C
- **Experimental units:** Individual hydroponic containers
- **Replicates:** 6 per treatment (n=6)
- **Total units:** 18 containers
- **Assignment:** Random using random number table

**Statistical Analysis:**
- One-way ANOVA
- Post-hoc tests if significant (Tukey's HSD)

### CRD Statistical Model

```
Yij = μ + τi + εij

Where:
Yij = observation j in treatment i
μ = overall mean
τi = effect of treatment i
εij = random error

Assumptions:
- Errors are normally distributed
- Errors have equal variance (homoscedasticity)
- Errors are independent
```

---

## Randomized Complete Block Design (RCBD)

### When to Use RCBD

**Ideal Conditions:**
- Known source of variation exists
- Can group units into homogeneous blocks
- Environmental gradients present
- Want to increase precision

**Common Blocking Factors in CEA:**
- Greenhouse sections (light/temperature gradients)
- Time periods (weeks, seasons)
- Equipment batches
- Initial plant/fish size classes
- Shelf/bench position

### RCBD Structure

```
┌────────────────────────────────────────────────────────────────┐
│      RANDOMIZED COMPLETE BLOCK DESIGN (RCBD)                   │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  BLOCK 1 (North End):      C  |  A  |  D  |  B                 │
│                                                                │
│  BLOCK 2 (Middle):         B  |  D  |  A  |  C                 │
│                                                                │
│  BLOCK 3 (South End):      D  |  C  |  B  |  A                 │
│                                                                │
│  BLOCK 4 (Far South):      A  |  B  |  C  |  D                 │
│                                                                │
│  Each treatment appears exactly once per block                 │
│  Treatments randomized within each block                       │
│  Blocks account for spatial variation                          │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

### Example: Variety Trial Across Greenhouses

**Research Question:** "Which basil variety performs best across multiple greenhouses?"

**Design:**
- **Treatments:** 4 basil varieties (Genovese, Thai, Lemon, Purple)
- **Blocks:** 3 greenhouses
- **Experimental units:** Growing bed (10 plants per bed)
- **Replicates:** 3 blocks (greenhouses)

**Why Block by Greenhouse?**
- Different microclimates
- Slightly different management
- Varying light exposure
- Removes greenhouse variability from error term

**Statistical Analysis:**
- Two-way ANOVA with blocking
- Treatment effect is of interest
- Block effect removes variation

### RCBD Statistical Model

```
Yij = μ + τi + βj + εij

Where:
Yij = observation for treatment i in block j
μ = overall mean
τi = effect of treatment i
βj = effect of block j
εij = random error

Degrees of Freedom:
Total: n - 1
Treatments: t - 1
Blocks: b - 1
Error: (t - 1)(b - 1)
```

### Efficiency of RCBD vs CRD

**Relative Efficiency:**
```
RE = (MSE_CRD / MSE_RCBD) × 100%

If RE > 100%: Blocking improved precision
If RE ≈ 100%: Blocking made no difference
If RE < 100%: Blocking reduced precision (wasted df)

Example:
MSE_CRD = 45.2
MSE_RCBD = 28.7
RE = (45.2 / 28.7) × 100% = 157%

Interpretation: RCBD was 57% more efficient than CRD
```

---

## Latin Square Design

### When to Use Latin Square

**Ideal Conditions:**
- Two sources of variation to control
- Equal number of treatments, rows, and columns
- Both row and column effects are nuisance factors

**Common Applications:**
- Position effects in two dimensions (row × column)
- Time × location effects
- Operator × day effects

### Latin Square Structure

```
┌────────────────────────────────────────────────────────────────┐
│                LATIN SQUARE DESIGN (4×4)                       │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│              Column 1  Column 2  Column 3  Column 4            │
│           ┌──────────┬──────────┬──────────┬──────────┐        │
│  Row 1    │    A     │    B     │    C     │    D     │        │
│           ├──────────┼──────────┼──────────┼──────────┤        │
│  Row 2    │    B     │    C     │    D     │    A     │        │
│           ├──────────┼──────────┼──────────┼──────────┤        │
│  Row 3    │    C     │    D     │    A     │    B     │        │
│           ├──────────┼──────────┼──────────┼──────────┤        │
│  Row 4    │    D     │    A     │    B     │    C     │        │
│           └──────────┴──────────┴──────────┴──────────┘        │
│                                                                │
│  Each treatment appears once per row                           │
│  Each treatment appears once per column                        │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

### Example: Testing Over Time and Space

**Research Question:** "Do 4 LED spectrums differ in lettuce growth?"

**Design:**
- **Treatments:** 4 LED spectrums (A, B, C, D)
- **Rows:** 4 weeks (time blocking)
- **Columns:** 4 greenhouse sections (spatial blocking)
- **Experimental units:** 16 growing containers

**Controls for:**
- Temporal variation (week-to-week changes)
- Spatial variation (section-to-section differences)

**Constraints:**
- Number of treatments = number of rows = number of columns
- Each treatment appears once per row and once per column

### Latin Square Statistical Model

```
Yijk = μ + τi + ρj + κk + εijk

Where:
Yijk = observation for treatment i in row j and column k
μ = overall mean
τi = effect of treatment i
ρj = effect of row j
κk = effect of column k
εijk = random error
```

---

## Factorial Designs

### Purpose of Factorial Designs

**Study Multiple Factors Simultaneously:**
- Main effects of each factor
- **Interaction effects** between factors
- More efficient than separate experiments

### Factorial Design Structure

**2×2 Factorial (2 factors, 2 levels each):**

```
┌────────────────────────────────────────────────────────────────┐
│                  2×2 FACTORIAL DESIGN                          │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│                    Factor B (Light)                            │
│                    Low  │  High                                │
│              ┌─────────┼─────────┐                             │
│  Factor A    │         │         │                             │
│  (Nutrient)  │   A1B1  │   A1B2  │                             │
│     Low      │  (n=5)  │  (n=5)  │                             │
│              ├─────────┼─────────┤                             │
│              │         │         │                             │
│     High     │   A2B1  │   A2B2  │                             │
│              │  (n=5)  │  (n=5)  │                             │
│              └─────────┴─────────┘                             │
│                                                                │
│  4 treatment combinations                                      │
│  Total experimental units: 4 × 5 = 20                          │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

### Main Effects vs. Interactions

**Main Effect:** Average effect of one factor across all levels of other factors

**Interaction Effect:** Effect of one factor depends on level of another factor

```
NO INTERACTION:                    INTERACTION PRESENT:

Yield                              Yield
  ↑                                  ↑
  │    High Nutrient ─────           │    High Nutrient ╱
  │                                  │               ╱
  │                                  │            ╱
  │    Low Nutrient ─────            │         ╱
  │                                  │    Low Nutrient ─────
  └──────────────────→               └──────────────────→
    Low    High                        Low    High
       Light                               Light

Effect of light is same              Effect of light depends on
regardless of nutrient               nutrient level
```

### Example: 3×2 Factorial

**Research Question:** "How do stocking density and temperature affect tilapia growth?"

**Factors:**
- **Factor A (Density):** Low, Medium, High (3 levels)
- **Factor B (Temperature):** 77°F, 86°F (2 levels)

**Treatment Combinations:** 3 × 2 = 6

| Treatment | Density | Temperature |
|-----------|---------|-------------|
| 1 | Low | 77°F |
| 2 | Low | 86°F |
| 3 | Medium | 77°F |
| 4 | Medium | 86°F |
| 5 | High | 77°F |
| 6 | High | 86°F |

**With 4 replicates:** 6 treatments × 4 reps = 24 tanks total

### Factorial Analysis Components

**ANOVA Partition:**
```
Source of Variation    | df
-----------------------|----
Factor A (Density)     | a-1 = 2
Factor B (Temperature) | b-1 = 1
A × B Interaction      | (a-1)(b-1) = 2
Error                  | ab(r-1) = 18
Total                  | abr-1 = 23

Where: a=3, b=2, r=4
```

### Interpreting Factorial Results

**Scenario 1: Significant main effects, no interaction**
- Factors act independently
- Can make simple recommendations

**Scenario 2: Significant interaction**
- Must consider factors together
- Recommendations depend on combination

**Example Interpretation:**
```
Significant Interaction Found:

At 77°F:  Low density > Medium > High (for growth)
At 86°F:  Medium density > Low ≈ High

Recommendation: Optimal density depends on temperature
- Use low density at 77°F
- Use medium density at 86°F
```

---

## Split-Plot Design

### When to Use Split-Plot

**Situations:**
- Some factors harder/more expensive to randomize
- Different levels of replication needed
- Factors have different spatial/temporal scales

**Common in Agriculture:**
- Irrigation (whole plot) × Variety (subplot)
- Greenhouse (whole plot) × Treatment (subplot)
- Temperature (whole plot) × Nutrient (subplot)

### Split-Plot Structure

```
┌────────────────────────────────────────────────────────────────┐
│                   SPLIT-PLOT DESIGN                            │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  BLOCK 1:                                                      │
│  ┌─────────────────┬─────────────────┬─────────────────┐       │
│  │  Temperature A  │  Temperature B  │  Temperature C  │       │
│  │  (Whole Plot)   │  (Whole Plot)   │  (Whole Plot)   │       │
│  │                 │                 │                 │       │
│  │  [N1][N2][N3]   │  [N1][N2][N3]   │  [N1][N2][N3]   │       │
│  │   ↑ Subplots    │   ↑ Subplots    │   ↑ Subplots    │       │
│  └─────────────────┴─────────────────┴─────────────────┘       │
│                                                                │
│  BLOCK 2:                                                      │
│  ┌─────────────────┬─────────────────┬─────────────────┐       │
│  │  Temperature C  │  Temperature A  │  Temperature B  │       │
│  │                 │                 │                 │       │
│  │  [N2][N3][N1]   │  [N3][N1][N2]   │  [N1][N3][N2]   │       │
│  └─────────────────┴─────────────────┴─────────────────┘       │
│                                                                │
│  Whole plots: Temperature (randomized)                         │
│  Subplots: Nutrient levels (randomized within whole plots)    │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

### Example: Irrigation × Variety

**Scenario:** Testing 3 irrigation levels and 4 tomato varieties

**Why Split-Plot?**
- Irrigation requires separate zones (hard to randomize at small scale)
- Varieties easy to randomize within zones

**Design:**
- **Whole plots:** 3 irrigation zones per block
- **Subplots:** 4 varieties within each zone
- **Blocks:** 4 blocks
- **Total plots:** 3 × 4 × 4 = 48 subplots

### Split-Plot Analysis

**Two Error Terms:**
- **Whole-plot error:** For testing irrigation effect
- **Subplot error:** For testing variety and interaction

```
Source                  | df
------------------------|----
Blocks                  | 3
Irrigation (Whole)      | 2
Error (a) [Whole-plot]  | 6
Variety (Subplot)       | 3
Irrigation × Variety    | 6
Error (b) [Subplot]     | 27
Total                   | 47
```

**Key Point:** Whole-plot treatments tested less precisely than subplot treatments

---

## Repeated Measures Design

### When to Use Repeated Measures

**Ideal for:**
- Measurements over time on same subjects
- Pre/post comparisons
- Growth curves
- Reducing variability (each unit is own control)

**Advantages:**
- Fewer subjects needed
- Removes between-subject variability
- Efficient for tracking changes

**Challenges:**
- Must account for correlation between measurements
- Sphericity assumption
- Carryover effects

### Repeated Measures Structure

```
┌────────────────────────────────────────────────────────────────┐
│              REPEATED MEASURES DESIGN                          │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  Subject 1:  [Week 1] [Week 2] [Week 3] [Week 4] [Week 5]     │
│  Subject 2:  [Week 1] [Week 2] [Week 3] [Week 4] [Week 5]     │
│  Subject 3:  [Week 1] [Week 2] [Week 3] [Week 4] [Week 5]     │
│     ...                                                        │
│  Subject n:  [Week 1] [Week 2] [Week 3] [Week 4] [Week 5]     │
│                                                                │
│  Same subjects measured repeatedly over time                   │
│  Accounts for correlation within subjects                      │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

### Example: Plant Growth Over Time

**Research Question:** "Does growth rate differ between 3 nutrient formulations over 8 weeks?"

**Design:**
- **Between-subjects factor:** Nutrient formula (3 levels)
- **Within-subjects factor:** Time (8 weeks)
- **Experimental units:** 30 plants (10 per formula)
- **Measurements:** Weekly height measurement

**Analysis:** Repeated measures ANOVA or mixed model

### Assumptions and Violations

**Sphericity:** Variances of differences between all pairs of measurements are equal

**If violated:**
- Greenhouse-Geisser correction
- Huynh-Feldt correction
- Use mixed models instead

---

## Design Comparison Table

| Design | Factors | Blocking | Complexity | When to Use |
|--------|---------|----------|------------|-------------|
| **CRD** | 1 | None | Simple | Homogeneous units |
| **RCBD** | 1 | 1 factor | Simple | One source of variation |
| **Latin Square** | 1 | 2 factors | Moderate | Two sources of variation |
| **Factorial** | 2+ | Optional | Moderate-High | Study interactions |
| **Split-Plot** | 2+ | 1+ factor | High | Hard-to-randomize factor |
| **Repeated Measures** | 1+ time | None/optional | Moderate-High | Measurements over time |

---

## Practical Exercise: Design Selection

### Scenarios

**Scenario 1:**
"Compare 5 fish feed brands on tilapia growth. You have 25 identical tanks in a controlled room."

**Best Design:** CRD (homogeneous conditions)

---

**Scenario 2:**
"Test 4 lighting treatments on lettuce. Greenhouse has clear north-south temperature gradient. Need 6 replicates per treatment."

**Best Design:** RCBD (block by location along gradient)

---

**Scenario 3:**
"Evaluate 3 stocking densities AND 2 feed types on fish growth."

**Best Design:** Factorial (2×3; study interaction)

---

**Scenario 4:**
"Monitor plant growth weekly under 3 nutrient levels over 6 weeks."

**Best Design:** Repeated measures (same plants over time)

---

## Key Takeaways

1. **CRD:** Simplest design for homogeneous conditions
2. **RCBD:** Controls one source of variation through blocking
3. **Latin Square:** Controls two sources of variation simultaneously
4. **Factorial:** Studies multiple factors and their interactions
5. **Split-Plot:** For factors with different randomization constraints
6. **Repeated Measures:** For data collected over time on same units

**Design selection depends on:**
- Research question
- Number of factors
- Sources of variation
- Practical constraints
- Resources available

---

## Next Module Preview

**Module 5: Sampling Methods**

Learn about:
- Probability vs. non-probability sampling
- Simple random sampling
- Stratified sampling
- Systematic sampling
- Cluster sampling
- Sample size determination for surveys

---

*Module 4 Complete | Course 309: Research Methodology for Agriculture*
