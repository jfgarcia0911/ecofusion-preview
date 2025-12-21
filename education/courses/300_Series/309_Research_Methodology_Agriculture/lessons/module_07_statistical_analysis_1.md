# Module 7: Statistical Analysis I - Foundations

## Learning Objectives

By the end of this module, you will be able to:
1. Calculate and interpret descriptive statistics
2. Understand probability distributions
3. Apply the hypothesis testing framework
4. Conduct and interpret t-tests
5. Check statistical assumptions
6. Calculate and interpret confidence intervals

---

## Descriptive Statistics

### Measures of Central Tendency

```
┌─────────────────────────────────────────────────────────────────────┐
│                  MEASURES OF CENTRAL TENDENCY                       │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  MEAN (x̄)                                                           │
│  ├─► Sum of values divided by n                                    │
│  ├─► Formula: x̄ = Σx / n                                          │
│  ├─► Sensitive to outliers                                         │
│  └─► Use for: Symmetric distributions, interval/ratio data         │
│                                                                     │
│  MEDIAN                                                             │
│  ├─► Middle value when sorted                                      │
│  ├─► 50th percentile                                               │
│  ├─► Resistant to outliers                                         │
│  └─► Use for: Skewed distributions, ordinal data                   │
│                                                                     │
│  MODE                                                               │
│  ├─► Most frequent value                                           │
│  ├─► Can have multiple modes                                       │
│  ├─► Only measure for nominal data                                 │
│  └─► Use for: Categorical data                                     │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Example Calculation

**Data:** Lettuce yields (g): 120, 135, 125, 130, 128, 132, 180, 127, 131, 129

**Mean:**
```
x̄ = (120 + 135 + 125 + 130 + 128 + 132 + 180 + 127 + 131 + 129) / 10
x̄ = 1337 / 10 = 133.7 g
```

**Median:**
```
Sorted: 120, 125, 127, 128, 129, 130, 131, 132, 135, 180
Median = (129 + 130) / 2 = 129.5 g
```

**Note:** Median (129.5 g) less affected by outlier (180 g) than mean (133.7 g)

### Measures of Variability

| Statistic | Formula | Interpretation |
|-----------|---------|----------------|
| **Range** | Max - Min | Total spread; sensitive to outliers |
| **Variance (s²)** | Σ(x - x̄)² / (n-1) | Average squared deviation |
| **Standard Deviation (s)** | √variance | Typical deviation from mean (same units) |
| **Coefficient of Variation (CV)** | (s / x̄) × 100% | Relative variability; compare across studies |
| **Standard Error (SE)** | s / √n | Precision of mean estimate |

### Variability Example

**Data:** Same yields as above

**Variance:**
```
s² = [(120-133.7)² + (135-133.7)² + ... + (129-133.7)²] / (10-1)
s² = [187.69 + 1.69 + ... + 22.09] / 9
s² = 1906.1 / 9 = 211.8 g²
```

**Standard Deviation:**
```
s = √211.8 = 14.6 g
```

**Coefficient of Variation:**
```
CV = (14.6 / 133.7) × 100% = 10.9%
```

**Interpretation:** Average yield is 133.7 ± 14.6 g with 10.9% relative variability

### Measures of Distribution Shape

**Skewness:**
- Negative skew: Long left tail (mean < median)
- Zero skew: Symmetric (mean ≈ median)
- Positive skew: Long right tail (mean > median)

```
Negative Skew        Symmetric          Positive Skew
    Frequency        Frequency          Frequency
        ↑                ↑                  ↑
        │   ╱─╲          │    ╱─╲           │  ╱─╲
        │  ╱   ╲         │   ╱   ╲          │ ╱   ╲
        │ ╱     ╲─       │  ╱     ╲         │╱      ╲─
        └─────────→      └─────────→        └─────────→
        mean            mean               mean
         median          median             median
```

**Kurtosis:**
- Measures "tailedness" of distribution
- High kurtosis: Heavy tails, outliers
- Low kurtosis: Light tails

---

## Probability Distributions

### Normal Distribution

**Properties:**
- Bell-shaped, symmetric
- Mean = Median = Mode
- Defined by mean (μ) and SD (σ)
- Area under curve = 1 (100%)

**Empirical Rule (68-95-99.7):**
```
        ╱─────────────────────────╲
       ╱           68%             ╲
      ╱     ┌───────────────┐      ╲
     ╱      │      95%      │       ╲
    ╱    ┌──┴───────────────┴──┐    ╲
   ╱     │       99.7%         │     ╲
  ╱───────────────────────────────────╲
       μ-3σ  μ-2σ  μ-σ  μ  μ+σ μ+2σ μ+3σ

68% of data within ±1 SD
95% of data within ±2 SD
99.7% of data within ±3 SD
```

### Standard Normal Distribution (Z)

**Standardization:**
```
Z = (X - μ) / σ

Converts any normal distribution to:
Mean = 0, SD = 1
```

**Example:**
```
Plant height: Mean = 25 cm, SD = 3 cm
Question: What proportion of plants > 28 cm?

Z = (28 - 25) / 3 = 1.0

From Z-table: P(Z > 1.0) = 0.1587
Answer: 15.87% of plants exceed 28 cm
```

### t-Distribution

**Used when:**
- Population SD unknown (estimate with sample SD)
- Small sample sizes (n < 30)

**Properties:**
- Similar to normal but heavier tails
- Shape depends on degrees of freedom (df = n - 1)
- As n increases, approaches normal distribution

```
t-distribution vs. Normal

Probability
    ↑
    │     ─── Normal
    │    ╱ ╲  --- t (df=5)
    │   ╱   ╲ ... t (df=2)
    │  ╱ . . ╲
    │ ╱ .   . ╲
    └───────────→
   Heavier tails for smaller df
```

---

## Hypothesis Testing Framework

### The Logic of Hypothesis Testing

```
┌─────────────────────────────────────────────────────────────────────┐
│              HYPOTHESIS TESTING PROCESS                             │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  1. STATE HYPOTHESES                                                │
│     H₀: Null hypothesis (no effect, no difference)                 │
│     H₁: Alternative hypothesis (effect exists)                     │
│                                                                     │
│  2. SET SIGNIFICANCE LEVEL (α)                                      │
│     Typically α = 0.05 (5% Type I error rate)                      │
│                                                                     │
│  3. COLLECT DATA                                                    │
│     Following experimental design                                  │
│                                                                     │
│  4. CALCULATE TEST STATISTIC                                        │
│     Depends on test type (t, F, χ², etc.)                          │
│                                                                     │
│  5. DETERMINE P-VALUE                                               │
│     Probability of observing data if H₀ true                       │
│                                                                     │
│  6. MAKE DECISION                                                   │
│     If p < α: Reject H₀ (statistically significant)                │
│     If p ≥ α: Fail to reject H₀ (not significant)                  │
│                                                                     │
│  7. INTERPRET IN CONTEXT                                            │
│     What does this mean practically?                               │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Errors in Hypothesis Testing

|  | H₀ True (Reality) | H₀ False (Reality) |
|---|-------------------|---------------------|
| **Reject H₀ (Decision)** | TYPE I ERROR (α) | CORRECT (Power = 1-β) |
| **Fail to reject H₀ (Decision)** | CORRECT (1-α) | TYPE II ERROR (β) |

**Type I Error (α):**
- Rejecting true H₀
- "False positive"
- Concluding effect exists when it doesn't
- Controlled by setting α (typically 0.05)

**Type II Error (β):**
- Failing to reject false H₀
- "False negative"
- Missing real effect
- Reduced by increasing sample size, effect size

**Statistical Power (1 - β):**
- Probability of detecting effect when it exists
- Typically want power ≥ 0.80
- Increased by: larger n, larger effect, lower variability

---

## One-Sample t-Test

### Purpose

Test if sample mean differs from hypothesized population mean

### Hypotheses

```
H₀: μ = μ₀  (population mean equals hypothesized value)
H₁: μ ≠ μ₀  (two-tailed)
OR
H₁: μ > μ₀  (one-tailed, upper)
H₁: μ < μ₀  (one-tailed, lower)
```

### Formula

```
t = (x̄ - μ₀) / (s / √n)

Where:
x̄ = sample mean
μ₀ = hypothesized population mean
s = sample standard deviation
n = sample size

df = n - 1
```

### Example

**Question:** Does aquaponic basil differ from commercial standard (25 g/plant)?

**Data:** 12 plants, mean = 28.5 g, SD = 4.2 g

**Hypotheses:**
- H₀: μ = 25 g
- H₁: μ ≠ 25 g (two-tailed)

**Calculations:**
```
t = (28.5 - 25) / (4.2 / √12)
t = 3.5 / (4.2 / 3.464)
t = 3.5 / 1.213
t = 2.89

df = 12 - 1 = 11
```

**Critical value:** t₀.₀₅,₁₁ = ±2.201

**Decision:** t = 2.89 > 2.201, so reject H₀

**Conclusion:** Aquaponic basil significantly differs from 25 g standard (p < 0.05)

---

## Two-Sample t-Test

### Purpose

Compare means of two independent groups

### Assumptions

1. Independence of observations
2. Normal distribution in each group (or n ≥ 30)
3. Equal variances (homogeneity of variance)

### Types

**Independent samples t-test:**
- Two separate groups
- Different subjects in each group

**Equal variances (pooled t-test):**
```
t = (x̄₁ - x̄₂) / √[s²pooled(1/n₁ + 1/n₂)]

Where:
s²pooled = [(n₁-1)s₁² + (n₂-1)s₂²] / (n₁ + n₂ - 2)

df = n₁ + n₂ - 2
```

**Unequal variances (Welch's t-test):**
```
t = (x̄₁ - x̄₂) / √(s₁²/n₁ + s₂²/n₂)

df = complex formula (calculated by software)
```

### Example

**Question:** Do two nutrient formulas produce different lettuce yields?

**Data:**
- Formula A: n=10, mean=150 g, SD=15 g
- Formula B: n=10, mean=165 g, SD=18 g

**Hypotheses:**
- H₀: μ₁ = μ₂
- H₁: μ₁ ≠ μ₂

**Calculations:**
```
s²pooled = [(10-1)(15²) + (10-1)(18²)] / (10 + 10 - 2)
s²pooled = [9(225) + 9(324)] / 18
s²pooled = [2025 + 2916] / 18 = 274.5

t = (150 - 165) / √[274.5(1/10 + 1/10)]
t = -15 / √[274.5(0.2)]
t = -15 / √54.9
t = -15 / 7.41
t = -2.02

df = 18
```

**p-value:** ≈ 0.058 (from t-table or software)

**Decision:** p = 0.058 > 0.05, fail to reject H₀

**Conclusion:** No significant difference between formulas at α=0.05 level (though borderline)

---

## Paired t-Test

### Purpose

Compare two measurements on same subjects (before/after, matched pairs)

### When to Use

- Pre-test and post-test
- Same units measured under two conditions
- Matched pairs design

### Formula

```
t = (d̄ - 0) / (sd / √n)

Where:
d̄ = mean of differences
sd = standard deviation of differences
n = number of pairs

df = n - 1
```

### Example

**Question:** Does supplementation increase plant weight?

**Data:** 8 paired grow beds (before/after supplementation)

| Bed | Before (g) | After (g) | Difference (d) |
|-----|------------|-----------|----------------|
| 1   | 120        | 135       | 15             |
| 2   | 115        | 128       | 13             |
| 3   | 125        | 142       | 17             |
| 4   | 118        | 130       | 12             |
| 5   | 122        | 138       | 16             |
| 6   | 119        | 125       | 6              |
| 7   | 121        | 140       | 19             |
| 8   | 117        | 132       | 15             |

**Calculations:**
```
d̄ = (15 + 13 + 17 + 12 + 16 + 6 + 19 + 15) / 8 = 14.1 g
sd = 4.05 g (calculated from differences)

t = 14.1 / (4.05 / √8)
t = 14.1 / 1.43
t = 9.86

df = 7
```

**Critical value:** t₀.₀₅,₇ = 2.365

**Decision:** t = 9.86 > 2.365, strongly reject H₀

**Conclusion:** Supplementation significantly increases plant weight (p < 0.001)

---

## Confidence Intervals

### Definition

Range of plausible values for population parameter

### Interpretation

"We are 95% confident that the true population mean lies between X and Y"

**NOT:** "There is a 95% probability the mean is between X and Y"

### Formula for Mean

```
95% CI = x̄ ± (t₀.₀₂₅,df × SE)

Where:
SE = s / √n
df = n - 1
```

### Example

**Data:** n=15, mean=72°F, SD=2.5°F

**95% CI:**
```
SE = 2.5 / √15 = 0.645
t₀.₀₂₅,₁₄ = 2.145

CI = 72 ± (2.145 × 0.645)
CI = 72 ± 1.38
CI = [70.62, 73.38]
```

**Interpretation:** We are 95% confident the true average temperature is between 70.6°F and 73.4°F

### Relationship to Hypothesis Testing

If 95% CI does not include hypothesized value, then p < 0.05

---

## Checking Assumptions

### Normality

**Visual Tests:**
- Histogram (bell-shaped?)
- Q-Q plot (points follow line?)
- Boxplot (symmetric?)

**Statistical Tests:**
- Shapiro-Wilk test
- Kolmogorov-Smirnov test
- Anderson-Darling test

**Note:** t-test is robust to moderate violations with n ≥ 30

### Homogeneity of Variance

**Visual Test:**
- Side-by-side boxplots (similar spread?)

**Statistical Tests:**
- Levene's test
- Bartlett's test (sensitive to non-normality)
- F-test (two groups only)

**Rule of Thumb:** Largest SD ÷ Smallest SD < 2 is acceptable

### What If Assumptions Violated?

**Options:**
1. **Transform data** (log, square root, reciprocal)
2. **Use non-parametric alternative** (Mann-Whitney, Wilcoxon)
3. **Increase sample size** (improves robustness)
4. **Use robust statistics** (trimmed means, permutation tests)

---

## Effect Size

### Why Report Effect Size?

- **Statistical significance ≠ practical importance**
- p-value depends on sample size
- Effect size quantifies magnitude of difference
- Enables meta-analysis

### Cohen's d

```
d = (x̄₁ - x̄₂) / spooled

Interpretation:
d = 0.2  Small effect
d = 0.5  Medium effect
d = 0.8  Large effect
```

### Example

**Formula A:** mean = 150 g, SD = 15 g
**Formula B:** mean = 165 g, SD = 18 g
**s_pooled = 16.57 g**

```
d = (165 - 150) / 16.57
d = 15 / 16.57
d = 0.91

Interpretation: Large effect size (approaching 1 SD difference)
```

**Conclusion:** Although not statistically significant (p=0.058), the effect size is large and may be practically important. Larger sample size would likely achieve significance.

---

## Practical Exercise

### Problem

**Scenario:** Test if new LED spectrum improves basil yield compared to standard

**Data:**
- Standard: n=12, mean=105 g, SD=12 g
- New LED: n=12, mean=118 g, SD=15 g

**Tasks:**

1. State null and alternative hypotheses
2. Check assumptions (assume met)
3. Conduct independent samples t-test
4. Calculate 95% CI for difference
5. Calculate Cohen's d
6. Interpret results

---

## Key Takeaways

1. **Descriptive statistics** summarize data (central tendency, variability, distribution)
2. **Normal distribution** is foundation for many statistical tests
3. **Hypothesis testing** framework: state hypotheses, set α, calculate statistic, determine p-value, decide
4. **t-tests** compare means: one-sample, two-sample, paired
5. **Assumptions matter:** normality, independence, equal variance
6. **Confidence intervals** provide range of plausible values
7. **Effect size** indicates practical significance beyond p-value

---

## Next Module Preview

**Module 8: Statistical Analysis II - ANOVA and Beyond**

Learn about:
- One-way ANOVA
- Two-way ANOVA
- Post-hoc tests
- Non-parametric alternatives
- Correlation and regression

---

*Module 7 Complete | Course 309: Research Methodology for Agriculture*
