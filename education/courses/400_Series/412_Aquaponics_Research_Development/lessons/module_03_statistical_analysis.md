# Module 3: Statistical Analysis for CEA Research

## Learning Objectives

By the end of this module, you will be able to:
- Calculate and interpret descriptive statistics for aquaponics data
- Select appropriate statistical tests based on data characteristics
- Conduct and interpret ANOVA and post-hoc tests
- Perform regression and correlation analyses
- Apply multivariate statistical methods to complex datasets

## 3.1 Descriptive Statistics and Data Visualization

### Measures of Central Tendency

```
┌────────────────────────────────────────────────────────┐
│           CENTRAL TENDENCY MEASURES                    │
└────────────────────────────────────────────────────────┘

MEAN (x̄):
Sum of all values / Number of observations
x̄ = Σxi / n

Best for: Normally distributed data without outliers

MEDIAN:
Middle value when data is ordered
Best for: Skewed data or data with outliers

MODE:
Most frequently occurring value
Best for: Categorical or discrete data

EXAMPLE - Fish Weights (g):
Data: 145, 152, 148, 151, 147, 149, 153, 148, 150, 148

Mean   = 1491/10 = 149.1 g
Median = (148 + 149)/2 = 148.5 g
Mode   = 148 g (appears 3 times)
```

### Measures of Variability

```
RANGE:
Maximum - Minimum
Range = 153 - 145 = 8 g
Limited usefulness (affected by outliers)

VARIANCE (s²):
s² = Σ(xi - x̄)² / (n-1)

STANDARD DEVIATION (s):
s = √(variance)
s = 2.47 g

Most commonly reported measure

COEFFICIENT OF VARIATION (CV):
CV = (s / x̄) × 100%
CV = (2.47/149.1) × 100 = 1.66%

Useful for comparing variability across different scales

STANDARD ERROR (SE):
SE = s / √n
SE = 2.47 / √10 = 0.78 g

Indicates precision of mean estimate
```

### Data Distribution Characteristics

```
┌────────────────────────────────────────────────────────┐
│              DISTRIBUTION SHAPES                       │
└────────────────────────────────────────────────────────┘

NORMAL DISTRIBUTION (Symmetric):
        ┌──────┐
      ┌─┘      └─┐
    ┌─┘          └─┐
  ┌─┘              └─┐
──┘                  └──
      μ
  68% within ±1 SD
  95% within ±2 SD

SKEWED RIGHT (Positive skew):
    ┌──┐
  ┌─┘  └─┐
┌─┘      └──┐
┘            └────
Mode<Median<Mean

SKEWED LEFT (Negative skew):
         ┌──┐
       ┌─┘  └─┐
     ┌─┘      └─┐
────┘          └─
Mean<Median<Mode

BIMODAL:
  ┌──┐    ┌──┐
┌─┘  └─┐┌─┘  └─┐
┘      └┘      └─
Two distinct peaks
```

### Assessing Normality

**Visual Methods:**

```
HISTOGRAM:
Frequency
    ↑
    │     ┌───┐
    │   ┌─┤   ├─┐
    │ ┌─┤ │   │ ├─┐
    │ │ │ │   │ │ │
    └─┴─┴─┴───┴─┴─┴─→ Value

Q-Q PLOT (Quantile-Quantile):
Sample
Quantiles
    ↑         ●
    │       ●
    │     ●
    │   ●
    │ ●
    └──────────→ Theoretical Quantiles

Points follow diagonal = Normal distribution
```

**Statistical Tests:**

```
SHAPIRO-WILK TEST:
H₀: Data is normally distributed
H₁: Data is not normally distributed

If p > 0.05: Assume normality
If p < 0.05: Reject normality

SKEWNESS:
Skewness = 0 → Symmetric
Skewness > 0 → Right skewed
Skewness < 0 → Left skewed

KURTOSIS:
Kurtosis = 0 → Normal "peakedness"
Kurtosis > 0 → Heavy tails (leptokurtic)
Kurtosis < 0 → Light tails (platykurtic)
```

### Effective Data Visualization

**Box Plots:**

```
        ┌────┬────┬────┬────┐  Treatment Groups
        │  A │  B │  C │  D │
Yield   │    │    │    │    │
(kg/m²) │    │    ┌───┐│    │
        │    │  ┌─┤   ├┤    │  ← Maximum (or Q3 + 1.5×IQR)
   20   ├────┤  │ └───┘│    │  ← Q3 (75th percentile)
        │ ┌──┤  │  ───││  ┌─│  ← Median (50th percentile)
   15   ├─┤  │ ┌┤  ┌──┴┤ ┌┤ │  ← Q1 (25th percentile)
        │ └──┤ │└──┤   └─┤└─│  ← Minimum (or Q1 - 1.5×IQR)
   10   ├────┴─┴───┴─────┴──┤
        │     ●          ●   │  ● = Outliers
    5   └────────────────────┘

IQR = Q3 - Q1 (Interquartile Range)
```

**Bar Charts with Error Bars:**

```
Yield
(kg/m²)
   ↑
 25│
   │
 20│     ┬
   │     │        ┬
 15│   ┌─┴─┐    ┌─┴─┐      ┬
   │   │   │    │   │    ┌─┴─┐
 10│   │ A │    │ B │    │ C │
   │   │   │    │   │    │   │
  5│   └───┘    └───┘    └───┘
   │
  0└──────────────────────────→

Error bars can represent:
├── Standard Deviation (variability)
├── Standard Error (precision of mean)
└── 95% Confidence Interval (plausible range for true mean)
```

## 3.2 Parametric and Non-Parametric Tests

### Choosing the Right Test

```
┌────────────────────────────────────────────────────────┐
│              TEST SELECTION FLOWCHART                  │
└────────────────────────────────────────────────────────┘

START: What are you comparing?
   │
   ├─► TWO GROUPS
   │      │
   │      ├─► Paired samples? ─► YES ─► Paired t-test
   │      │                              (or Wilcoxon signed-rank)
   │      │
   │      └─► Independent samples? ─► YES
   │             │
   │             ├─► Normal + Equal variance? ─► YES ─► Two-sample t-test
   │             │
   │             └─► Non-normal or unequal variance? ─► Mann-Whitney U test
   │
   └─► THREE OR MORE GROUPS
          │
          ├─► One factor? ─► Normal + Equal variance? ─► YES ─► One-way ANOVA
          │                                                      (+ post-hoc tests)
          │                  Non-normal? ─► Kruskal-Wallis test
          │
          ├─► Two factors? ─► Two-way ANOVA
          │
          └─► Repeated measures? ─► Repeated measures ANOVA
                                    (or mixed models)
```

### Independent Samples t-Test

**Assumptions:**
1. Independent observations
2. Normal distribution in both groups
3. Equal variances (homogeneity)

**Hypotheses:**

```
H₀: μ₁ = μ₂  (No difference between groups)
H₁: μ₁ ≠ μ₂  (Difference exists)

TEST STATISTIC:
t = (x̄₁ - x̄₂) / √(s²pooled × (1/n₁ + 1/n₂))

Where:
s²pooled = [(n₁-1)s₁² + (n₂-1)s₂²] / (n₁ + n₂ - 2)

df = n₁ + n₂ - 2
```

**Example:**

```
COMPARISON: Lettuce yield in coupled vs. decoupled systems

Coupled Systems (n=6):
Yields: 2.1, 2.3, 2.0, 2.4, 2.2, 2.1 kg/m²
Mean = 2.18 kg/m²
SD = 0.14 kg/m²

Decoupled Systems (n=6):
Yields: 2.5, 2.7, 2.6, 2.8, 2.6, 2.7 kg/m²
Mean = 2.65 kg/m²
SD = 0.11 kg/m²

CALCULATION:
s²pooled = (5×0.14² + 5×0.11²)/(6+6-2) = 0.0163
SE = √(0.0163 × (1/6 + 1/6)) = 0.0737
t = (2.18 - 2.65) / 0.0737 = -6.38
df = 10
p < 0.001

CONCLUSION:
Decoupled systems yield significantly higher than coupled
(p < 0.001), with a difference of 0.47 kg/m² (95% CI: 0.30-0.64)
```

### Mann-Whitney U Test (Non-Parametric)

**When to Use:**
- Ordinal data
- Non-normal distributions
- Small sample sizes
- Outliers present

```
PROCEDURE:
1. Rank all observations (both groups combined)
2. Sum ranks for each group (R₁, R₂)
3. Calculate U statistic:

U₁ = n₁×n₂ + n₁(n₁+1)/2 - R₁
U₂ = n₁×n₂ + n₂(n₂+1)/2 - R₂

U = min(U₁, U₂)

4. Compare U to critical value or calculate p-value

EXAMPLE:
Group A: 12, 15, 18, 20, 22
Group B: 25, 28, 30, 32, 35

Ranks:
A: 1, 2, 3, 4, 5 → R₁ = 15
B: 6, 7, 8, 9, 10 → R₂ = 40

U₁ = 5×5 + 5×6/2 - 15 = 25
U₂ = 5×5 + 5×6/2 - 40 = 0

U = 0 (very small → significant difference)
p = 0.008
```

## 3.3 Analysis of Variance (ANOVA)

### One-Way ANOVA

**Purpose:** Compare means of 3+ groups

**Assumptions:**
1. Independence of observations
2. Normal distribution within groups
3. Homogeneity of variance (Levene's test)

**Conceptual Framework:**

```
┌────────────────────────────────────────────────────────┐
│           ANOVA PARTITIONS VARIANCE                    │
└────────────────────────────────────────────────────────┘

TOTAL VARIATION = BETWEEN-GROUP + WITHIN-GROUP
                  (Signal)         (Noise)

             ┌─────────────────┐
             │  Total Variance │
             │     (SSTotal)   │
             └────────┬────────┘
                      │
        ┌─────────────┴─────────────┐
        │                           │
   ┌────▼────┐              ┌───────▼───────┐
   │ Between │              │    Within     │
   │ Groups  │              │    Groups     │
   │ (SSTr)  │              │   (SSError)   │
   └─────────┘              └───────────────┘
   Treatment                Experimental
   Effect                   Error

F-ratio = MSTreatment / MSError
        = Variance between groups / Variance within groups

Large F → Groups differ significantly
```

**ANOVA Table Structure:**

```
┌────────────┬─────┬───────┬────────┬────────┬─────────┐
│ Source     │ df  │  SS   │   MS   │   F    │ P-value │
├────────────┼─────┼───────┼────────┼────────┼─────────┤
│ Treatment  │ k-1 │ SSTr  │ MSTr   │ MSTr/  │ p < α ? │
│            │     │       │        │ MSE    │         │
├────────────┼─────┼───────┼────────┼────────┼─────────┤
│ Error      │ N-k │ SSE   │ MSE    │   -    │    -    │
├────────────┼─────┼───────┼────────┼────────┼─────────┤
│ Total      │ N-1 │ SST   │   -    │   -    │    -    │
└────────────┴─────┴───────┴────────┴────────┴─────────┘

Where:
k = number of groups
N = total sample size
SS = Sum of Squares
MS = Mean Square (SS/df)
```

**Worked Example:**

```
EXPERIMENT: Compare basil yield across 4 lighting treatments

Treatment A (HPS):      18, 20, 19, 21 g/plant → Mean = 19.5
Treatment B (Red LED):  22, 24, 23, 25 g/plant → Mean = 23.5
Treatment C (Blue LED): 16, 18, 17, 15 g/plant → Mean = 16.5
Treatment D (Full LED): 24, 26, 25, 27 g/plant → Mean = 25.5

Grand Mean = 21.25 g/plant

CALCULATIONS:
SSTr = 4[(19.5-21.25)² + (23.5-21.25)² + (16.5-21.25)² + (25.5-21.25)²]
     = 4[3.06 + 5.06 + 22.56 + 18.06] = 194.80

SSE = Σ(within-group deviations)²
    = [(18-19.5)² + (20-19.5)² + ...] = 24.00

SST = SSTr + SSE = 218.80

ANOVA TABLE:
┌────────────┬─────┬────────┬────────┬────────┬─────────┐
│ Source     │ df  │   SS   │   MS   │   F    │ P-value │
├────────────┼─────┼────────┼────────┼────────┼─────────┤
│ Treatment  │  3  │ 194.80 │ 64.93  │ 32.47  │ < 0.001 │
├────────────┼─────┼────────┼────────┼────────┼─────────┤
│ Error      │ 12  │  24.00 │  2.00  │   -    │    -    │
├────────────┼─────┼────────┼────────┼────────┼─────────┤
│ Total      │ 15  │ 218.80 │   -    │   -    │    -    │
└────────────┴─────┴────────┴────────┴────────┴─────────┘

F(3,12) = 32.47, p < 0.001

CONCLUSION: Lighting treatment significantly affects basil yield
```

### Post-Hoc Tests

**Why Needed:**
ANOVA tells us groups differ, but not which groups differ from each other

**Common Post-Hoc Tests:**

```
┌────────────────────────────────────────────────────────┐
│              POST-HOC TEST SELECTION                   │
└────────────────────────────────────────────────────────┘

TUKEY'S HSD (Honestly Significant Difference)
├── Most commonly used
├── Controls familywise error rate
├── All pairwise comparisons
└── Assumes equal sample sizes

BONFERRONI CORRECTION
├── Very conservative
├── Divide α by number of comparisons
├── α_adjusted = 0.05 / k(k-1)/2
└── Use when few comparisons planned

DUNNETT'S TEST
├── Compare all treatments to control only
├── More powerful than Tukey for this purpose
└── Does not compare treatments to each other

FISHER'S LSD (Least Significant Difference)
├── Liberal (increased Type I error)
├── Only use if ANOVA is significant
└── Not recommended for many comparisons
```

**Tukey HSD Example:**

```
Critical value for q at α=0.05, df=12, k=4: q = 4.20

HSD = q × √(MSE/n) = 4.20 × √(2.00/4) = 2.97

PAIRWISE COMPARISONS:
┌────────────┬───────────┬────────┬───────────┐
│ Comparison │ Difference│  HSD   │Significant?│
├────────────┼───────────┼────────┼───────────┤
│ D vs. C    │   9.0     │  2.97  │    ***    │
│ D vs. A    │   6.0     │  2.97  │    ***    │
│ B vs. C    │   7.0     │  2.97  │    ***    │
│ D vs. B    │   2.0     │  2.97  │    ns     │
│ B vs. A    │   4.0     │  2.97  │    **     │
│ A vs. C    │   3.0     │  2.97  │    *      │
└────────────┴───────────┴────────┴───────────┘

COMPACT LETTER DISPLAY:
Treatment C: 16.5  a
Treatment A: 19.5    b
Treatment B: 23.5      c
Treatment D: 25.5      c

Treatments with same letter not significantly different
```

### Two-Way ANOVA

**Purpose:** Test effects of two factors and their interaction

```
EXAMPLE: Fish species × Temperature

                Temperature (°C)
                20    24    28    32
          ┌─────┬─────┬─────┬─────┐
          │     │     │     │     │
Species   │  SGR values for each │
Tilapia   │     combination      │
          ├─────┼─────┼─────┼─────┤
          │     │     │     │     │
Catfish   │                       │
          │                       │
          └─────┴─────┴─────┴─────┘

ANOVA TABLE:
┌────────────────┬─────┬──────┬──────┬────────┬─────────┐
│ Source         │ df  │  SS  │  MS  │   F    │ P-value │
├────────────────┼─────┼──────┼──────┼────────┼─────────┤
│ Species (A)    │  1  │ SSA  │ MSA  │ MSA/MSE│  p₁     │
├────────────────┼─────┼──────┼──────┼────────┼─────────┤
│ Temp (B)       │  3  │ SSB  │ MSB  │ MSB/MSE│  p₂     │
├────────────────┼─────┼──────┼──────┼────────┼─────────┤
│ A × B          │  3  │ SSAB │ MSAB │MSAB/MSE│  p₃     │
├────────────────┼─────┼──────┼──────┼────────┼─────────┤
│ Error          │ 24  │ SSE  │ MSE  │   -    │    -    │
├────────────────┼─────┼──────┼──────┼────────┼─────────┤
│ Total          │ 31  │ SST  │  -   │   -    │    -    │
└────────────────┴─────┴──────┴──────┴────────┴─────────┘

INTERPRETATION PRIORITY:
1. Check interaction first (A × B)
   - If significant: Main effects may be misleading
   - Analyze simple effects at each level
2. If no interaction: Interpret main effects
```

## 3.4 Regression and Correlation Analysis

### Simple Linear Regression

**Model:** Y = β₀ + β₁X + ε

```
Yield (Y)
    ↑
    │                    ●
 25 │                  ●
    │              ● ●
 20 │           ●●
    │        ●●
 15 │     ●●
    │   ●
 10 │ ●
    │
    └────────────────────────→ Stocking Density (X)
      0   5  10  15  20  25

Regression Line: Ŷ = β₀ + β₁X

Where:
β₀ = Y-intercept
β₁ = Slope (change in Y per unit change in X)
Ŷ = Predicted value
```

**Least Squares Estimation:**

```
β₁ = Σ(xi - x̄)(yi - ȳ) / Σ(xi - x̄)²
   = Covariance(X,Y) / Variance(X)

β₀ = ȳ - β₁x̄

EXAMPLE:
Stocking Density (kg/m³): 5, 10, 15, 20, 25
Plant Yield (kg/m²):      12, 15, 18, 19, 21

x̄ = 15, ȳ = 17
β₁ = 0.58
β₀ = 17 - 0.58(15) = 8.3

Regression equation: Yield = 8.3 + 0.58(Density)
```

**Assessing Model Fit:**

```
R² (Coefficient of Determination):
Proportion of variance in Y explained by X

R² = 1 - (SSresidual / SStotal)
R² = SSregression / SStotal

Range: 0 to 1
R² = 0.75 → 75% of variance explained

INTERPRETATION:
R² < 0.3  → Weak relationship
R² 0.3-0.7 → Moderate relationship
R² > 0.7  → Strong relationship

RESIDUAL ANALYSIS:
Residuals = Observed Y - Predicted Y

Check for:
├── Normality (Q-Q plot)
├── Constant variance (residual plot)
├── Independence (no patterns)
└── Outliers (Cook's distance)
```

### Correlation Coefficients

**Pearson's r (Parametric):**

```
r = Σ(xi - x̄)(yi - ȳ) / √[Σ(xi - x̄)² × Σ(yi - ȳ)²]

Range: -1 to +1

r = +1 → Perfect positive correlation
r = 0  → No linear correlation
r = -1 → Perfect negative correlation

SIGNIFICANCE TEST:
H₀: ρ = 0 (no correlation in population)

t = r√(n-2) / √(1-r²)
df = n - 2

EXAMPLE:
Fish biomass vs. nitrate concentration
n = 20, r = 0.68

t = 0.68√18 / √(1-0.68²) = 3.89
p < 0.001

Conclusion: Significant positive correlation
```

**Spearman's ρ (Non-Parametric):**

```
Used when:
├── Ordinal data
├── Non-linear monotonic relationship
├── Non-normal distributions
└── Outliers present

Based on ranks rather than raw values

ρ = 1 - (6Σd²) / [n(n²-1)]

Where d = difference between ranks
```

**Correlation vs. Causation:**

```
IMPORTANT DISTINCTIONS:

Correlation ≠ Causation

Possible explanations for correlation:
├── 1. X causes Y
├── 2. Y causes X
├── 3. Third variable (Z) causes both X and Y
└── 4. Coincidence

EXAMPLE:
Correlation: Ice cream sales and drowning deaths (r = 0.85)

NOT causation!
Third variable: Temperature/season affects both
```

## 3.5 Multivariate Statistical Methods

### Multiple Regression

**Model:** Y = β₀ + β₁X₁ + β₂X₂ + ... + βₖXₖ + ε

```
EXAMPLE: Predicting lettuce yield

Y = Yield (kg/m²)
X₁ = Light intensity (μmol/m²/s)
X₂ = Temperature (°C)
X₃ = EC (mS/cm)
X₄ = pH

Model: Yield = β₀ + β₁(Light) + β₂(Temp) + β₃(EC) + β₄(pH)

OUTPUT:
┌──────────┬────────┬────────┬────────┬─────────┐
│Variable  │Coefficient│ SE  │   t    │ P-value │
├──────────┼────────┼────────┼────────┼─────────┤
│Intercept │ -15.3  │  3.2   │ -4.78  │ < 0.001 │
│Light     │  0.035 │  0.008 │  4.38  │ < 0.001 │
│Temp      │  0.42  │  0.12  │  3.50  │  0.002  │
│EC        │  2.8   │  0.6   │  4.67  │ < 0.001 │
│pH        │  0.15  │  0.31  │  0.48  │  0.634  │
└──────────┴────────┴────────┴────────┴─────────┘

R² = 0.82, Adjusted R² = 0.79

INTERPRETATION:
- Light, temp, and EC significant predictors
- pH not significant (p > 0.05)
- Model explains 82% of yield variation
```

### Principal Component Analysis (PCA)

**Purpose:** Reduce dimensionality while retaining information

```
AQUAPONICS APPLICATION:
Multiple water quality parameters measured:
├── pH
├── Temperature
├── DO
├── EC
├── TAN
├── NO₂⁻
├── NO₃⁻
├── PO₄³⁻
└── K⁺

PCA creates new uncorrelated variables (Principal Components)
that capture maximum variance

PC1 might represent "Overall water quality"
PC2 might represent "Nutrient balance"
PC3 might represent "Microbial activity"

SCREE PLOT:
Variance
Explained
   ↑
   │ ●
60%│
   │
40%│   ●
   │
20%│     ●
   │       ● ● ● ● ● ●
   └──────────────────→
     PC1 PC2 PC3 PC4...

Keep components explaining >5-10% variance
Typically 2-4 components capture 70-90% of variance
```

### Cluster Analysis

**Purpose:** Group similar observations

```
HIERARCHICAL CLUSTERING DENDROGRAM:

System performance profiles across facilities

Height
  ↑
  │         ┌───────────┐
  │         │           │
8 │     ┌───┴───┐   ┌───┴───┐
  │     │       │   │       │
6 │   ┌─┴─┐   ┌─┴─┐ │     ┌─┴─┐
  │   │   │   │   │ │     │   │
4 │  ┌┴┐ ┌┴┐ ┌┴┐ ┌┴┐│    ┌┴┐ ┌┴┐
  │  │ │ │ │ │ │ │ ││    │ │ │ │
  └──A B C D E F G H I────J K L M

Identifies:
├── Cluster 1: High-performing systems (A-H)
├── Cluster 2: Medium performers (I)
└── Cluster 3: Struggling systems (J-M)

Can guide management recommendations
```

## Key Takeaways

1. **Visualize First** - Always plot data before statistical analysis
2. **Check Assumptions** - Verify test requirements are met
3. **Choose Appropriate Tests** - Match test to data type and research question
4. **Report Completely** - Include test statistics, p-values, effect sizes, and confidence intervals
5. **Interpret Meaningfully** - Statistical significance ≠ practical significance

## Practical Application

**Analysis Exercise:**

You collected the following data on basil growth in 4 aquaponics systems over 6 weeks:

```
Week: 0, 1, 2, 3, 4, 5, 6
System A: 2, 5, 9, 15, 23, 33, 45 (cm height)
System B: 2, 4, 7, 11, 17, 25, 35
System C: 2, 6, 11, 18, 27, 38, 51
System D: 2, 4, 8, 13, 20, 29, 40
```

Tasks:
1. Calculate descriptive statistics for final height
2. Create appropriate visualizations
3. Determine if systems differ significantly
4. Perform post-hoc comparisons if appropriate
5. Analyze growth trajectories over time
6. Report results in scientific format

## Further Reading

- Zar, J.H. (2010). *Biostatistical Analysis* (5th ed.)
- Quinn & Keough (2002). *Experimental Design and Data Analysis for Biologists*
- Field, A. (2013). *Discovering Statistics Using IBM SPSS Statistics*
- Crawley, M.J. (2012). *The R Book* (2nd ed.)

---

**Next Module:** [Module 4: Instrumentation and Data Collection](module_04_instrumentation_data_collection.md)
