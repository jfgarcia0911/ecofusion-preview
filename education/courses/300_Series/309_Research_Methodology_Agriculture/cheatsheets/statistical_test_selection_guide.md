# Statistical Test Selection Guide

**Course 309: Research Methodology for Agriculture**

---

## Quick Decision Tree

```
START: What is your research question?

├─ Comparing MEANS/MEDIANS
│  │
│  ├─ How many groups?
│  │  │
│  │  ├─ 2 groups
│  │  │  │
│  │  │  ├─ Independent groups? → Independent t-test
│  │  │  │   (Assumptions violated?) → Mann-Whitney U test
│  │  │  │
│  │  │  └─ Paired/matched groups? → Paired t-test
│  │  │      (Assumptions violated?) → Wilcoxon signed-rank test
│  │  │
│  │  └─ 3+ groups
│  │     │
│  │     ├─ One factor? → One-way ANOVA
│  │     │   (Assumptions violated?) → Kruskal-Wallis test
│  │     │
│  │     └─ Two+ factors? → Factorial ANOVA / Two-way ANOVA
│  │
│  └─ Repeated measures over time? → Repeated Measures ANOVA
│      (Assumptions violated?) → Friedman test
│
├─ Testing RELATIONSHIPS
│  │
│  ├─ Two continuous variables → Pearson correlation
│  │   (Non-normal data?) → Spearman rank correlation
│  │
│  ├─ Predicting Y from X → Linear regression
│  │   (Multiple predictors?) → Multiple regression
│  │
│  └─ Multiple variables → Multivariate analysis
│
└─ Comparing PROPORTIONS/FREQUENCIES
   │
   ├─ One categorical variable → Chi-square goodness of fit
   │
   └─ Two categorical variables → Chi-square test of independence
       (Small expected frequencies?) → Fisher's exact test
```

---

## Test Selection Table

| Research Question | Data Type | Test | Assumptions |
|-------------------|-----------|------|-------------|
| **Compare 2 group means (independent)** | Continuous | **Independent t-test** | Normality, equal variance, independence |
| **Compare 2 group means (paired)** | Continuous | **Paired t-test** | Normality of differences, independence of pairs |
| **Compare 3+ group means** | Continuous | **One-way ANOVA** | Normality, equal variance, independence |
| **Compare 2 groups (non-normal)** | Continuous/Ordinal | **Mann-Whitney U** | Independence, similar distributions |
| **Compare 3+ groups (non-normal)** | Continuous/Ordinal | **Kruskal-Wallis** | Independence, similar distributions |
| **Compare paired groups (non-normal)** | Continuous/Ordinal | **Wilcoxon signed-rank** | Symmetric differences |
| **Test 2 factors + interaction** | Continuous | **Two-way ANOVA** | Normality, equal variance, independence |
| **Relationship between 2 variables** | Continuous | **Pearson correlation** | Bivariate normality, linear relationship |
| **Relationship (non-normal)** | Continuous/Ordinal | **Spearman correlation** | Monotonic relationship |
| **Predict Y from X** | Continuous | **Linear regression** | Linearity, normality of residuals, homoscedasticity |
| **Compare categorical data** | Categorical | **Chi-square test** | Expected frequency ≥5 in 80% of cells |
| **Compare proportions (small n)** | Categorical | **Fisher's exact test** | None |

---

## Parametric vs. Non-Parametric

| Parametric | Non-Parametric Alternative | Use Non-Parametric When: |
|------------|---------------------------|--------------------------|
| Independent t-test | Mann-Whitney U test | • Non-normal distributions<br>• Ordinal data<br>• Severe outliers |
| Paired t-test | Wilcoxon signed-rank | • Non-normal differences<br>• Ordinal data |
| One-way ANOVA | Kruskal-Wallis | • Non-normal data<br>• Unequal variances<br>• Ordinal data |
| Repeated measures ANOVA | Friedman test | • Non-normal data<br>• Sphericity violated |
| Pearson correlation | Spearman rank correlation | • Non-normal data<br>• Ordinal data<br>• Non-linear but monotonic |

---

## Agricultural Research Examples

### Example 1: Nutrient Comparison

**Question:** Do 3 nutrient formulas produce different yields?

**Data:** Continuous (grams)
**Groups:** 3 independent groups
**Test:** **One-way ANOVA**
**Post-hoc:** Tukey's HSD (if significant)

```
H₀: μ₁ = μ₂ = μ₃
H₁: At least one mean differs
```

---

### Example 2: Before/After Treatment

**Question:** Does pH adjustment change plant growth?

**Data:** Continuous (height in cm)
**Design:** Same plants measured before and after
**Test:** **Paired t-test**

```
H₀: μ_difference = 0
H₁: μ_difference ≠ 0
```

---

### Example 3: Light × Nutrient Experiment

**Question:** Do light and nutrients interact to affect yield?

**Data:** Continuous (grams)
**Factors:** 2 (Light: 2 levels; Nutrient: 3 levels)
**Test:** **Two-way ANOVA (2×3 factorial)**

```
Tests:
1. Main effect of Light
2. Main effect of Nutrient
3. Light × Nutrient interaction
```

---

### Example 4: Temperature and Growth Relationship

**Question:** Is temperature correlated with growth rate?

**Data:** Both continuous
**Test:** **Pearson correlation** (or Spearman if non-normal)

```
H₀: ρ = 0 (no correlation)
H₁: ρ ≠ 0 (correlation exists)
```

---

### Example 5: Disease Incidence

**Question:** Is disease frequency independent of system type?

**Data:** Categorical (disease: yes/no; system: A/B/C)
**Test:** **Chi-square test of independence**

```
H₀: Disease and system type are independent
H₁: Disease and system type are associated
```

---

## Assumption Checking

### For t-tests and ANOVA

**1. Normality**
- Visual: Histogram, Q-Q plot
- Statistical: Shapiro-Wilk test
- Action if violated: Transform data or use non-parametric alternative

**2. Homogeneity of Variance**
- Visual: Boxplots (similar spread?)
- Statistical: Levene's test
- Rule of thumb: Largest SD / Smallest SD < 2
- Action if violated: Welch's t-test (unequal variance version) or transformation

**3. Independence**
- Check experimental design
- No statistical test
- Ensure true replication (not pseudoreplication)

### For Correlation/Regression

**1. Linearity**
- Visual: Scatterplot
- Action if violated: Transform or use non-linear regression

**2. Normality of Residuals**
- Visual: Q-Q plot of residuals, histogram
- Statistical: Shapiro-Wilk on residuals

**3. Homoscedasticity**
- Visual: Residuals vs. fitted plot (equal spread?)
- Statistical: Breusch-Pagan test
- Action if violated: Transform Y variable

**4. Independence of Residuals**
- Durbin-Watson test (for time series)
- No autocorrelation

---

## Effect Size Guide

| Test | Effect Size Measure | Small | Medium | Large |
|------|---------------------|-------|--------|-------|
| t-test | Cohen's d | 0.2 | 0.5 | 0.8 |
| ANOVA | Eta-squared (η²) | 0.01 | 0.06 | 0.14 |
| ANOVA | Omega-squared (ω²) | 0.01 | 0.06 | 0.14 |
| Regression | R² | 0.02 | 0.13 | 0.26 |
| Correlation | \|r\| | 0.1 | 0.3 | 0.5 |
| Chi-square | Cramér's V | 0.1 | 0.3 | 0.5 |

---

## Sample Size Quick Reference

**For comparing two means (α=0.05, power=0.80):**

| Effect Size (Cohen's d) | n per group | Total n |
|-------------------------|-------------|---------|
| 0.2 (small) | 393 | 786 |
| 0.5 (medium) | 64 | 128 |
| 0.8 (large) | 26 | 52 |
| 1.0 (very large) | 17 | 34 |

**For ANOVA (3 groups, α=0.05, power=0.80):**

| Effect Size (f) | n per group | Total n |
|-----------------|-------------|---------|
| 0.1 (small) | 322 | 966 |
| 0.25 (medium) | 52 | 156 |
| 0.4 (large) | 21 | 63 |

---

## P-Value Interpretation

| p-value | Interpretation | Symbol | Reporting |
|---------|----------------|--------|-----------|
| p < 0.001 | Very strong evidence against H₀ | *** | "highly significant" |
| p < 0.01 | Strong evidence against H₀ | ** | "very significant" |
| p < 0.05 | Moderate evidence against H₀ | * | "significant" |
| p < 0.10 | Weak evidence against H₀ | † | "marginally significant" (use cautiously) |
| p ≥ 0.05 | Insufficient evidence against H₀ | ns | "not significant" |

**Important:** Always report exact p-values (e.g., p=0.023) rather than just "p<0.05"

---

## Common Mistakes to Avoid

1. **Multiple t-tests instead of ANOVA** → Inflates Type I error
2. **Ignoring assumptions** → Invalid results
3. **Confusing correlation with causation** → Misinterpretation
4. **Pseudoreplication** → Inflated significance
5. **Cherry-picking significant results** → P-hacking
6. **Reporting only p-values** → Omits effect size
7. **Using parametric tests on ordinal data** → Inappropriate
8. **Forgetting to check normality of residuals (regression)** → Invalid inference

---

## Quick R Code Reference

```r
# Independent t-test
t.test(yield ~ treatment, data = mydata)

# Paired t-test
t.test(before, after, paired = TRUE)

# One-way ANOVA
model <- aov(yield ~ treatment, data = mydata)
summary(model)
TukeyHSD(model)  # Post-hoc

# Two-way ANOVA
model <- aov(yield ~ factor1 * factor2, data = mydata)
summary(model)

# Mann-Whitney U
wilcox.test(yield ~ treatment, data = mydata)

# Kruskal-Wallis
kruskal.test(yield ~ treatment, data = mydata)

# Correlation
cor.test(x, y, method = "pearson")
cor.test(x, y, method = "spearman")

# Regression
model <- lm(yield ~ days, data = mydata)
summary(model)

# Chi-square
chisq.test(table(var1, var2))
```

---

*Statistical Test Selection Guide | Course 309: Research Methodology for Agriculture*
*Keep this guide handy for quick reference!*
