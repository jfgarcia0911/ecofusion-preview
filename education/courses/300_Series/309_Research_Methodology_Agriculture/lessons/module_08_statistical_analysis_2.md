# Module 8: Statistical Analysis II - ANOVA and Beyond

## Learning Objectives

By the end of this module, you will be able to:
1. Conduct and interpret one-way ANOVA
2. Perform post-hoc multiple comparisons
3. Analyze factorial designs with two-way ANOVA
4. Apply non-parametric alternatives
5. Calculate and interpret correlation coefficients
6. Perform simple linear regression

---

## Analysis of Variance (ANOVA)

### When to Use ANOVA

```
┌─────────────────────────────────────────────────────────────────────┐
│                   CHOOSING BETWEEN TESTS                            │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  Comparing MEANS of groups:                                         │
│                                                                     │
│  2 groups     → Independent samples t-test                          │
│  3+ groups    → ANOVA (Analysis of Variance)                        │
│                                                                     │
│  Why not multiple t-tests?                                          │
│  └─► Inflates Type I error rate (α)                                │
│                                                                     │
│  Example with 4 groups:                                             │
│  - Need 6 pairwise comparisons (AB, AC, AD, BC, BD, CD)            │
│  - Family-wise error: 1 - (1-0.05)⁶ = 0.265 or 26.5%              │
│  - ANOVA maintains α = 0.05 for overall test                       │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## One-Way ANOVA

### Purpose

Test if means of 3+ groups differ

### Hypotheses

```
H₀: μ₁ = μ₂ = μ₃ = ... = μₖ  (all group means equal)
H₁: At least one mean differs
```

**Note:** ANOVA tells you IF groups differ, not WHICH groups differ

### Logic of ANOVA

**Partition Total Variability:**

```
TOTAL VARIATION = BETWEEN-GROUP + WITHIN-GROUP
                  VARIATION       VARIATION
                  (treatment)     (error)

If treatment has effect:
Between-group variation >> Within-group variation

F-ratio = Between-group variance / Within-group variance
```

### ANOVA Table

| Source | SS | df | MS | F | p-value |
|--------|----|----|----|----|---------|
| Between Groups (Treatment) | SS_between | k-1 | MS_between = SS_between/(k-1) | F = MS_between/MS_within | from F-distribution |
| Within Groups (Error) | SS_within | N-k | MS_within = SS_within/(N-k) | - | - |
| Total | SS_total | N-1 | - | - | - |

**Where:**
- k = number of groups
- N = total sample size
- SS = Sum of Squares
- MS = Mean Square (variance estimate)

### Formulas

```
SS_total = Σ(Xᵢⱼ - X̄_grand)²

SS_between = Σ nⱼ(X̄ⱼ - X̄_grand)²

SS_within = SS_total - SS_between

F = MS_between / MS_within
```

### Example: Nutrient Formula Comparison

**Question:** Do 4 nutrient formulas produce different lettuce yields?

**Data:**

| Formula A | Formula B | Formula C | Formula D |
|-----------|-----------|-----------|-----------|
| 120       | 135       | 140       | 125       |
| 125       | 142       | 145       | 130       |
| 118       | 138       | 138       | 128       |
| 122       | 140       | 143       | 132       |
| 115       | 137       | 142       | 127       |

**Summary Statistics:**

| Group | n | Mean | SD |
|-------|---|------|-----|
| A     | 5 | 120  | 4.0 |
| B     | 5 | 138.4| 3.0 |
| C     | 5 | 141.6| 2.9 |
| D     | 5 | 128.4| 2.7 |
| Total | 20| 132.1| 9.4 |

**ANOVA Table:**

| Source | SS | df | MS | F | p-value |
|--------|----|----|----|----|---------|
| Between | 1534.2 | 3 | 511.4 | 47.6 | <0.001 |
| Within | 171.6 | 16 | 10.7 | - | - |
| Total | 1705.8 | 19 | - | - | - |

**Calculations:**
```
MS_between = 511.4
MS_within = 10.7

F = 511.4 / 10.7 = 47.6

Critical F₀.₀₅,₃,₁₆ = 3.24
```

**Decision:** F = 47.6 > 3.24, reject H₀

**Conclusion:** Strong evidence that nutrient formulas produce different yields (p < 0.001)

**Next Step:** Post-hoc tests to determine which formulas differ

### Assumptions

1. **Independence:** Observations are independent
2. **Normality:** Data in each group approximately normal
3. **Homogeneity of variance:** Groups have similar variances

**Checking Assumptions:**
- Levene's test for equal variances
- Shapiro-Wilk test for normality in each group
- Residual plots

**Robustness:**
- ANOVA fairly robust to normality violations with equal n
- More sensitive to unequal variances (use Welch's ANOVA)

---

## Post-Hoc Tests

### Purpose

After significant ANOVA, identify which specific groups differ

### Common Post-Hoc Tests

| Test | When to Use | Controls for |
|------|-------------|--------------|
| **Tukey's HSD** | Equal sample sizes, all pairwise comparisons | Family-wise error rate |
| **Bonferroni** | Few planned comparisons | Family-wise error rate (conservative) |
| **Scheffé** | Complex comparisons, unequal n | Family-wise error rate (very conservative) |
| **Dunnett's** | Compare all treatments to one control | Family-wise error rate |
| **LSD (Fisher's)** | Protected by significant ANOVA | None (liberal) |

### Tukey's HSD Example

**From previous ANOVA:**

```
Tukey's HSD = q × √(MS_within / n)

Where:
q = studentized range statistic (from table)
MS_within = 10.7
n = 5 per group
q₀.₀₅,₄,₁₆ = 4.05 (from table)

HSD = 4.05 × √(10.7 / 5) = 4.05 × 1.46 = 5.91
```

**Pairwise Comparisons:**

| Comparison | Difference | HSD | Significant? |
|------------|------------|-----|--------------|
| C vs A | 141.6 - 120.0 = 21.6 | 5.91 | Yes*** |
| C vs D | 141.6 - 128.4 = 13.2 | 5.91 | Yes*** |
| C vs B | 141.6 - 138.4 = 3.2 | 5.91 | No |
| B vs A | 138.4 - 120.0 = 18.4 | 5.91 | Yes*** |
| B vs D | 138.4 - 128.4 = 10.0 | 5.91 | Yes** |
| D vs A | 128.4 - 120.0 = 8.4 | 5.91 | Yes* |

**Interpretation:**
```
Groups (from highest to lowest yield):
C (141.6) ────┐
               ├─── Not significantly different
B (138.4) ────┘
D (128.4) ──────── Intermediate
A (120.0) ──────── Lowest (significantly lower than all)

Compact Letter Display:
A: a
D: b
B: bc
C: c
```

---

## Two-Way ANOVA

### Purpose

Analyze effects of TWO factors simultaneously

### Advantages

- Test main effects of both factors
- **Test interaction** between factors
- More efficient than separate experiments

### Model

```
Yijk = μ + Αi + Βj + (ΑΒ)ij + εijk

Where:
Αi = main effect of factor A (level i)
Βj = main effect of factor B (level j)
(ΑΒ)ij = interaction effect
εijk = error
```

### ANOVA Table

| Source | df | Interpretation |
|--------|----|----|
| Factor A | a-1 | Main effect of A |
| Factor B | b-1 | Main effect of B |
| A × B Interaction | (a-1)(b-1) | Does effect of A depend on B? |
| Error | ab(n-1) | Within-cell variation |
| Total | abn-1 | - |

### Example: Light × Nutrient Factorial

**Design:** 2 light levels × 3 nutrient levels, n=4 per cell

**Data Summary (Mean Yield, g):**

|             | Low Nutrient | Medium Nutrient | High Nutrient |
|-------------|--------------|-----------------|---------------|
| **Low Light**   | 100          | 110             | 115           |
| **High Light**  | 120          | 145             | 150           |

**ANOVA Results:**

| Source | df | SS | MS | F | p-value |
|--------|----|----|----|----|---------|
| Light | 1 | 4800 | 4800 | 96.0 | <0.001 |
| Nutrient | 2 | 3200 | 1600 | 32.0 | <0.001 |
| Light × Nutrient | 2 | 800 | 400 | 8.0 | 0.002 |
| Error | 18 | 900 | 50 | - | - |
| Total | 23 | 9700 | - | - | - |

**Interpretation:**

1. **Main effect of Light:** Significant (p < 0.001)
   - High light increases yield overall

2. **Main effect of Nutrient:** Significant (p < 0.001)
   - Higher nutrients increase yield overall

3. **Interaction:** Significant (p = 0.002)
   - Effect of nutrients differs by light level
   - High light amplifies nutrient effect

**Interaction Plot:**

```
Yield (g)
  ↑
160├                                     High Light ────
  │                                    ╱
140├                                 ╱
  │                               ╱
120├                           ╱
  │                        ╱
100├──Low Light ─────────────
  │
  └──────────────────────────────────────────→
     Low        Medium        High
              Nutrient Level

Interpretation: Lines not parallel = interaction present
Effect of nutrient stronger under high light
```

### Interpreting Interactions

**No Interaction (Parallel Lines):**
- Effects are additive
- Can interpret main effects independently

**Significant Interaction (Non-Parallel Lines):**
- Effects are NOT additive
- Must interpret carefully
- Simple effects analysis needed
- Consider interaction in recommendations

---

## Non-Parametric Alternatives

### When to Use

- **Assumptions violated:** Non-normal data, unequal variances
- **Small sample sizes:** Can't rely on robustness
- **Ordinal data:** Rankings, scales
- **Outliers present:** Resistant methods

### Common Tests

| Parametric Test | Non-Parametric Alternative | Purpose |
|-----------------|---------------------------|---------|
| Independent t-test | Mann-Whitney U test | Compare 2 independent groups |
| Paired t-test | Wilcoxon signed-rank test | Compare 2 paired groups |
| One-way ANOVA | Kruskal-Wallis test | Compare 3+ independent groups |
| Repeated measures ANOVA | Friedman test | Compare 3+ repeated measures |

### Mann-Whitney U Test

**Example:**

**Data:** Compare yields of 2 formulas (non-normal distributions)

| Formula A | Formula B |
|-----------|-----------|
| 95        | 120       |
| 102       | 135       |
| 88        | 128       |
| 110       | 140       |
| 92        | 132       |

**Process:**
1. Combine and rank all data (1 = lowest)
2. Sum ranks for each group
3. Calculate U statistic
4. Compare to critical value

**Interpretation:**
- Tests if distributions differ in location (median)
- Does NOT require normality
- Less powerful than t-test if assumptions met

### Kruskal-Wallis Test

**Purpose:** Non-parametric alternative to one-way ANOVA

**Example:** Compare 3+ groups with ordinal or non-normal data

**Process:**
1. Rank all observations across groups
2. Calculate H statistic based on rank sums
3. Compare to chi-square distribution

**Post-Hoc:** Dunn's test for pairwise comparisons

---

## Correlation

### Purpose

Measure strength and direction of linear relationship between two continuous variables

### Pearson Correlation (r)

```
r = Σ[(X - X̄)(Y - Ȳ)] / √[Σ(X - X̄)² × Σ(Y - Ȳ)²]

Range: -1 to +1

r = +1:  Perfect positive correlation
r = 0:   No linear correlation
r = -1:  Perfect negative correlation
```

### Interpretation Guidelines

| |r| Value | Interpretation |
|-----------|----------------|
| 0.00 - 0.19 | Very weak |
| 0.20 - 0.39 | Weak |
| 0.40 - 0.59 | Moderate |
| 0.60 - 0.79 | Strong |
| 0.80 - 1.00 | Very strong |

### Example

**Question:** Is there a relationship between water temperature and fish growth rate?

**Data:** 15 observations

| Temperature (°F) | Growth (g/day) |
|------------------|----------------|
| 72               | 2.1            |
| 75               | 2.5            |
| 78               | 3.2            |
| ...              | ...            |

**Result:** r = 0.78, p = 0.001

**Interpretation:** Strong positive correlation between temperature and growth (p = 0.001)

### Important Points

- **Correlation ≠ Causation**
- Only measures LINEAR relationships
- Sensitive to outliers
- Requires bivariate normality for inference

### Spearman's Rank Correlation

**Non-parametric alternative:**
- Use when data not normally distributed
- Appropriate for ordinal data
- Resistant to outliers
- Measures monotonic (not just linear) relationships

---

## Simple Linear Regression

### Purpose

Model relationship: predict Y from X

### Equation

```
Ŷ = b₀ + b₁X

Where:
Ŷ = predicted value of Y
b₀ = y-intercept (value when X=0)
b₁ = slope (change in Y per unit change in X)
X = predictor variable
```

### Least Squares Method

**Minimize sum of squared residuals:**

```
b₁ = Σ[(X - X̄)(Y - Ȳ)] / Σ(X - X̄)²

b₀ = Ȳ - b₁X̄
```

### Example

**Question:** Predict lettuce yield from days of growth

**Data:** 20 observations

```
Summary:
X̄ = 28 days
Ȳ = 125 g
Σ(X - X̄)(Y - Ȳ) = 1680
Σ(X - X̄)² = 280

b₁ = 1680 / 280 = 6.0 g/day

b₀ = 125 - 6.0(28) = -43 g

Regression equation:
Yield = -43 + 6.0(Days)
```

**Interpretation:**
- For each additional day, yield increases by 6.0 g
- At day 0, predicted yield is -43 g (not meaningful; extrapolation)

### Coefficient of Determination (R²)

```
R² = proportion of variance in Y explained by X

R² = SSR / SST

Where:
SSR = regression sum of squares (explained)
SST = total sum of squares

Range: 0 to 1 (or 0% to 100%)
```

**Example:** R² = 0.72

**Interpretation:** 72% of variation in yield is explained by days of growth; 28% due to other factors

### Regression ANOVA

| Source | df | SS | MS | F |
|--------|----|----|----|----|
| Regression | 1 | SSR | MSR | MSR/MSE |
| Error | n-2 | SSE | MSE | - |
| Total | n-1 | SST | - | - |

**F-test:** Tests if regression is significant (is slope ≠ 0?)

### Assumptions

1. **Linearity:** Relationship is linear
2. **Independence:** Residuals are independent
3. **Homoscedasticity:** Constant variance of residuals
4. **Normality:** Residuals are normally distributed

**Check with:**
- Residual plots (residuals vs. fitted values)
- Q-Q plot of residuals
- Histogram of residuals

### Prediction

**Point prediction:**
```
Ŷ = b₀ + b₁X

Example: Predict yield at 30 days
Ŷ = -43 + 6.0(30) = 137 g
```

**Confidence interval:** Range for mean response at given X

**Prediction interval:** Range for individual observation at given X (wider than CI)

---

## Chi-Square Tests

### Chi-Square Goodness of Fit

**Purpose:** Test if observed frequencies match expected distribution

**Example:** Are lettuce varieties equally popular?

**Data:**
| Variety | Observed | Expected |
|---------|----------|----------|
| Green   | 45       | 37.5     |
| Red     | 30       | 37.5     |
| Romaine | 35       | 37.5     |
| Butterhead | 40    | 37.5     |

```
χ² = Σ[(O - E)² / E]
χ² = [(45-37.5)²/37.5] + [(30-37.5)²/37.5] + [(35-37.5)²/37.5] + [(40-37.5)²/37.5]
χ² = 1.5 + 1.5 + 0.17 + 0.17 = 3.34

df = k - 1 = 4 - 1 = 3
Critical χ²₀.₀₅,₃ = 7.815
```

**Decision:** 3.34 < 7.815, fail to reject H₀

**Conclusion:** No evidence that varieties differ in popularity

### Chi-Square Test of Independence

**Purpose:** Test if two categorical variables are independent

**Example:** Is disease presence independent of system type?

**Contingency Table:**

|        | Disease | No Disease | Total |
|--------|---------|------------|-------|
| System A | 12    | 38         | 50    |
| System B | 8     | 42         | 50    |
| Total    | 20    | 80         | 100   |

**Expected frequencies calculated from marginal totals**

**Chi-square test determines if association exists**

---

## Practical Exercise

### Problem Set

**1. One-Way ANOVA:**
Test if 3 growing systems produce different basil yields:
- System A: 105, 110, 108, 112, 107 (mean=108.4)
- System B: 115, 118, 120, 117, 115 (mean=117.0)
- System C: 125, 128, 130, 127, 125 (mean=127.0)

Tasks: Conduct ANOVA, interpret, perform post-hoc if significant

**2. Correlation:**
Calculate and interpret correlation between pH (X) and yield (Y):
- Data: 10 paired observations
- Given: r = -0.65

**3. Regression:**
Given: Yield = 50 + 2.5(Nutrient)
- Interpret slope and intercept
- Predict yield at nutrient = 20
- What does R² = 0.81 mean?

---

## Key Takeaways

1. **ANOVA** tests if 3+ group means differ; use post-hoc tests to identify specific differences
2. **Two-way ANOVA** evaluates main effects and interactions between two factors
3. **Non-parametric tests** are alternatives when assumptions violated (Mann-Whitney, Kruskal-Wallis)
4. **Correlation** measures strength of linear relationship (doesn't imply causation)
5. **Regression** models relationships and enables prediction
6. **Chi-square tests** analyze categorical data

---

## Next Module Preview

**Module 9: Statistical Software**

Learn about:
- R and RStudio basics
- Excel for statistics
- Statistical software comparison
- Data visualization
- Reproducible analysis

---

*Module 8 Complete | Course 309: Research Methodology for Agriculture*
