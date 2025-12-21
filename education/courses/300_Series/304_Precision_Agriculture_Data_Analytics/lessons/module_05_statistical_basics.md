# Module 5: Statistical Analysis Basics

## Course 304: Precision Agriculture & Data Analytics
**Duration:** 1 hour | **Level:** Advanced

---

## Learning Objectives

By the end of this module, you will be able to:
1. Calculate and interpret descriptive statistics
2. Test data for normal distributions
3. Conduct correlation and regression analysis
4. Implement statistical process control
5. Design agricultural experiments and A/B tests
6. Make statistically valid decisions from data

---

## 1. Descriptive Statistics

### Measures of Central Tendency

```
┌────────────────────────────────────────────────────────────┐
│            CENTRAL TENDENCY MEASURES                       │
├────────────────────────────────────────────────────────────┤
│                                                            │
│  MEAN (Average)                                            │
│  Formula: x̄ = Σx / n                                      │
│  Use: When data is normally distributed                    │
│  Sensitive to: Outliers                                    │
│                                                            │
│  Example: Daily lettuce harvest (lbs)                      │
│  Data: 45, 48, 52, 47, 49, 51, 48, 50, 46, 180            │
│  Mean = 616 / 10 = 61.6 lbs                               │
│  ↑ Skewed by outlier (180)                                │
│                                                            │
│  MEDIAN (Middle value)                                     │
│  Formula: Middle value when sorted                         │
│  Use: When data has outliers                               │
│  Robust to: Outliers                                       │
│                                                            │
│  Same data sorted: 45, 46, 47, 48, 48, 49, 50, 51, 52, 180│
│  Median = (48 + 49) / 2 = 48.5 lbs                        │
│  ↑ Better representation                                   │
│                                                            │
│  MODE (Most common)                                        │
│  Formula: Most frequently occurring value                  │
│  Use: Categorical data, quality grades                     │
│                                                            │
│  Example: 48 appears twice (most common)                   │
│  Mode = 48 lbs                                             │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

### Measures of Variability

**Standard Deviation (σ or s):**
```
Formula: s = √[Σ(x - x̄)² / (n-1)]

Interpretation:
• Low SD: Data points close to mean (consistent)
• High SD: Data points spread out (variable)

Example: Water temperature
Dataset A: 22.1, 22.3, 22.2, 22.4, 22.0°C
  Mean = 22.2°C, SD = 0.15°C ← Very stable

Dataset B: 20.5, 23.1, 21.8, 24.2, 19.9°C
  Mean = 21.9°C, SD = 1.71°C ← Highly variable
```

**Coefficient of Variation (CV):**
```
Formula: CV = (SD / Mean) × 100%

Use: Compare variability across different units

Example:
Temperature: Mean=22°C, SD=2°C → CV=9.1%
pH: Mean=6.8, SD=0.3 → CV=4.4%

Interpretation: pH is more stable (lower CV)
```

### Application to Agricultural Data

```python
import numpy as np
import pandas as pd
from scipy import stats

# Sample data: Daily lettuce yield (lbs)
yields = [45, 48, 52, 47, 49, 51, 48, 50, 46, 49]

# Descriptive statistics
mean_yield = np.mean(yields)
median_yield = np.median(yields)
std_yield = np.std(yields, ddof=1)  # Sample std dev
cv_yield = (std_yield / mean_yield) * 100

print(f"Mean: {mean_yield:.2f} lbs")
print(f"Median: {median_yield:.2f} lbs")
print(f"Std Dev: {std_yield:.2f} lbs")
print(f"CV: {cv_yield:.2f}%")

# Quartiles and IQR
q1, q3 = np.percentile(yields, [25, 75])
iqr = q3 - q1

print(f"Q1: {q1:.2f} lbs")
print(f"Q3: {q3:.2f} lbs")
print(f"IQR: {iqr:.2f} lbs")

# Outlier detection (1.5 × IQR rule)
lower_bound = q1 - 1.5 * iqr
upper_bound = q3 + 1.5 * iqr
outliers = [x for x in yields if x < lower_bound or x > upper_bound]

print(f"Outliers: {outliers}")
```

---

## 2. Probability Distributions

### Normal Distribution

```
┌────────────────────────────────────────────────────────────┐
│              NORMAL DISTRIBUTION                           │
├────────────────────────────────────────────────────────────┤
│                                                            │
│              │                                             │
│              │        ╱‾‾‾╲                                │
│              │      ╱       ╲                              │
│              │    ╱           ╲                            │
│              │  ╱               ╲                          │
│         ─────┼──────────────────────────                   │
│              μ-2σ  μ-σ   μ   μ+σ  μ+2σ                    │
│                                                            │
│  68% of data within ±1σ                                    │
│  95% of data within ±2σ                                    │
│  99.7% of data within ±3σ                                  │
│                                                            │
│  Properties:                                               │
│  • Symmetric around mean                                   │
│  • Mean = Median = Mode                                    │
│  • Defined by μ (mean) and σ (std dev)                     │
│                                                            │
│  Example: Lettuce head weight                              │
│  μ = 250g, σ = 25g                                         │
│  68% between 225-275g                                      │
│  95% between 200-300g                                      │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

### Testing for Normality

```python
from scipy.stats import shapiro, normaltest
import matplotlib.pyplot as plt

# Shapiro-Wilk test
stat, p_value = shapiro(yields)

if p_value > 0.05:
    print("Data appears normally distributed (fail to reject H0)")
else:
    print("Data does not appear normally distributed (reject H0)")

# Q-Q plot (visual test)
from scipy.stats import probplot

fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(12, 4))

# Histogram with normal curve
ax1.hist(yields, bins=10, density=True, alpha=0.7)
mu, sigma = np.mean(yields), np.std(yields, ddof=1)
x = np.linspace(min(yields), max(yields), 100)
ax1.plot(x, stats.norm.pdf(x, mu, sigma), 'r-', lw=2)
ax1.set_title('Histogram vs. Normal Distribution')

# Q-Q plot
probplot(yields, dist="norm", plot=ax2)
ax2.set_title('Q-Q Plot')

plt.tight_layout()
plt.show()
```

---

## 3. Correlation Analysis

### Pearson Correlation Coefficient (r)

```
┌────────────────────────────────────────────────────────────┐
│           CORRELATION INTERPRETATION                       │
├────────────────────────────────────────────────────────────┤
│                                                            │
│  r = 1.0     Perfect positive correlation                  │
│  r = 0.7-0.9 Strong positive correlation                   │
│  r = 0.4-0.7 Moderate positive correlation                 │
│  r = 0.1-0.4 Weak positive correlation                     │
│  r = 0       No correlation                                │
│  r = -0.1 to -0.4  Weak negative correlation               │
│  r = -0.4 to -0.7  Moderate negative correlation           │
│  r = -0.7 to -0.9  Strong negative correlation             │
│  r = -1.0    Perfect negative correlation                  │
│                                                            │
│  Formula:                                                  │
│  r = Σ[(x-x̄)(y-ȳ)] / √[Σ(x-x̄)² × Σ(y-ȳ)²]                │
│                                                            │
│  IMPORTANT: Correlation ≠ Causation!                       │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

### Example: Light vs. Growth Rate

```python
# Data: Daily Light Integral (DLI) vs. Growth Rate
dli = [15, 18, 20, 22, 25, 28, 30, 32, 35, 38]  # mol/m²/day
growth = [8, 10, 12, 14, 16, 18, 19, 20, 21, 21]  # mm/day

# Calculate correlation
r, p_value = stats.pearsonr(dli, growth)

print(f"Pearson r: {r:.3f}")
print(f"P-value: {p_value:.4f}")

if p_value < 0.05:
    print("Correlation is statistically significant")

# Scatter plot with trendline
plt.scatter(dli, growth)
plt.xlabel('Daily Light Integral (mol/m²/day)')
plt.ylabel('Growth Rate (mm/day)')

# Add trendline
z = np.polyfit(dli, growth, 1)
p = np.poly1d(z)
plt.plot(dli, p(dli), "r--", alpha=0.8)
plt.title(f'DLI vs. Growth Rate (r = {r:.3f})')
plt.show()

# Interpretation
if r > 0.7:
    print("Strong positive correlation: Higher DLI → faster growth")
```

### Correlation Matrix

```python
# Multiple parameters
data = pd.DataFrame({
    'temperature': [22, 23, 24, 21, 22, 25, 23, 24, 22, 23],
    'humidity': [65, 68, 70, 62, 64, 72, 67, 69, 63, 66],
    'co2': [800, 850, 900, 750, 800, 950, 850, 900, 775, 825],
    'growth_rate': [12, 14, 16, 10, 12, 18, 14, 16, 11, 13]
})

# Correlation matrix
corr_matrix = data.corr()
print(corr_matrix)

# Heatmap visualization
import seaborn as sns

plt.figure(figsize=(8, 6))
sns.heatmap(corr_matrix, annot=True, cmap='coolwarm', center=0,
            vmin=-1, vmax=1, square=True)
plt.title('Parameter Correlation Matrix')
plt.show()
```

---

## 4. Regression Analysis

### Simple Linear Regression

```
Model: y = β₀ + β₁x + ε

Where:
  y = dependent variable (growth rate)
  x = independent variable (DLI)
  β₀ = intercept (baseline growth)
  β₁ = slope (effect of DLI)
  ε = error term

Example: Growth Rate = β₀ + β₁(DLI)
```

```python
from scipy.stats import linregress

# Perform regression
slope, intercept, r_value, p_value, std_err = linregress(dli, growth)

print(f"Equation: Growth = {intercept:.2f} + {slope:.2f} × DLI")
print(f"R²: {r_value**2:.3f}")
print(f"P-value: {p_value:.4f}")

# Interpretation
print(f"\nFor every 1 mol/m²/day increase in DLI,")
print(f"growth rate increases by {slope:.2f} mm/day")

# Predict growth at DLI = 25
predicted_growth = intercept + slope * 25
print(f"\nPredicted growth at 25 mol/m²/day: {predicted_growth:.2f} mm/day")

# Confidence interval
from scipy.stats import t
n = len(dli)
dof = n - 2  # degrees of freedom
t_val = t.ppf(0.975, dof)  # 95% CI

# Standard error of estimate
y_pred = intercept + slope * np.array(dli)
mse = np.sum((growth - y_pred)**2) / dof
se = np.sqrt(mse)

print(f"Standard error: ±{se:.2f} mm/day")
```

### Multiple Linear Regression

```python
from sklearn.linear_model import LinearRegression

# Multiple predictors
X = data[['temperature', 'humidity', 'co2']]
y = data['growth_rate']

# Fit model
model = LinearRegression()
model.fit(X, y)

# Coefficients
print("Growth Rate = {:.2f}".format(model.intercept_))
for i, col in enumerate(X.columns):
    print(f"  + {model.coef_[i]:.3f} × {col}")

# R² score
r2 = model.score(X, y)
print(f"\nR²: {r2:.3f}")

# Predict
new_conditions = [[23, 67, 850]]  # temp, humidity, CO2
predicted = model.predict(new_conditions)
print(f"\nPredicted growth: {predicted[0]:.2f} mm/day")
```

---

## 5. Statistical Process Control (SPC)

### Control Charts

```
┌────────────────────────────────────────────────────────────┐
│              CONTROL CHART EXAMPLE                         │
├────────────────────────────────────────────────────────────┤
│                                                            │
│  UCL (Upper Control Limit) = μ + 3σ ─────────────────     │
│                                                            │
│  UWL (Upper Warning Limit) = μ + 2σ ─ ─ ─ ─ ─ ─ ─       │
│                                    ●                       │
│                              ●           ●                 │
│                         ●          ●         ●             │
│  Target (μ) ────────────────●──────────────────────       │
│                   ●                   ●                    │
│              ●                                             │
│  LWL (Lower Warning Limit) = μ - 2σ ─ ─ ─ ─ ─ ─ ─       │
│                                                            │
│  LCL (Lower Control Limit) = μ - 3σ ─────────────────     │
│                                                            │
│  Time →                                                    │
│                                                            │
│  Out-of-Control Signals:                                   │
│  1. Point beyond control limits                            │
│  2. 7+ points on one side of center line                   │
│  3. 6+ points trending up or down                          │
│  4. 14+ points alternating up and down                     │
│  5. 2/3 points in outer 1/3 (between 2σ and 3σ)           │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

### Implementing SPC

```python
class ControlChart:
    def __init__(self, data, sigma_level=3):
        self.mean = np.mean(data)
        self.std = np.std(data, ddof=1)
        self.sigma_level = sigma_level
        self.ucl = self.mean + sigma_level * self.std
        self.lcl = self.mean - sigma_level * self.std
        self.uwl = self.mean + 2 * self.std
        self.lwl = self.mean - 2 * self.std

    def check_point(self, value):
        """Check if point is in control."""
        if value > self.ucl or value < self.lcl:
            return False, "OUT OF CONTROL: Beyond control limits"
        elif value > self.uwl or value < self.lwl:
            return True, "WARNING: Approaching control limits"
        return True, "IN CONTROL"

    def plot(self, data):
        plt.figure(figsize=(12, 6))
        plt.plot(data, 'bo-', label='Measurements')
        plt.axhline(self.mean, color='g', linestyle='-', label='Mean')
        plt.axhline(self.ucl, color='r', linestyle='--', label='UCL')
        plt.axhline(self.lcl, color='r', linestyle='--', label='LCL')
        plt.axhline(self.uwl, color='orange', linestyle=':', label='Warning')
        plt.axhline(self.lwl, color='orange', linestyle=':')
        plt.xlabel('Sample Number')
        plt.ylabel('Measurement')
        plt.title('Control Chart')
        plt.legend()
        plt.grid(True, alpha=0.3)
        plt.show()

# Usage: pH monitoring
ph_readings = [6.8, 6.9, 6.7, 6.8, 6.9, 6.8, 6.7, 6.9, 6.8, 6.7]
chart = ControlChart(ph_readings)

# Check new reading
new_ph = 7.2
in_control, message = chart.check_point(new_ph)
print(f"pH {new_ph}: {message}")

chart.plot(ph_readings + [new_ph])
```

---

## 6. Experimental Design and A/B Testing

### Hypothesis Testing Framework

```
┌────────────────────────────────────────────────────────────┐
│           HYPOTHESIS TESTING STEPS                         │
├────────────────────────────────────────────────────────────┤
│                                                            │
│  1. STATE HYPOTHESES                                       │
│     H₀ (Null): No difference between groups                │
│     H₁ (Alternative): There is a difference                │
│                                                            │
│  2. CHOOSE SIGNIFICANCE LEVEL (α)                          │
│     Typically α = 0.05 (5% chance of Type I error)         │
│                                                            │
│  3. COLLECT DATA                                           │
│     Ensure random sampling and adequate sample size        │
│                                                            │
│  4. CALCULATE TEST STATISTIC                               │
│     t-test, ANOVA, chi-square, etc.                        │
│                                                            │
│  5. DETERMINE P-VALUE                                      │
│     Probability of observing results if H₀ is true         │
│                                                            │
│  6. MAKE DECISION                                          │
│     If p < α: Reject H₀ (significant difference)           │
│     If p ≥ α: Fail to reject H₀ (no significant diff)      │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

### Two-Sample t-Test

```python
from scipy.stats import ttest_ind

# Example: Does LED light increase yield vs. fluorescent?

led_yields = [52, 54, 53, 55, 54, 53, 56, 54, 55, 53]  # lbs
fluorescent_yields = [48, 49, 47, 50, 48, 49, 48, 47, 49, 48]

# Perform t-test
t_stat, p_value = ttest_ind(led_yields, fluorescent_yields)

print(f"LED mean: {np.mean(led_yields):.2f} lbs")
print(f"Fluorescent mean: {np.mean(fluorescent_yields):.2f} lbs")
print(f"Difference: {np.mean(led_yields) - np.mean(fluorescent_yields):.2f} lbs")
print(f"\nt-statistic: {t_stat:.3f}")
print(f"p-value: {p_value:.4f}")

if p_value < 0.05:
    print("\nResult: SIGNIFICANT difference (p < 0.05)")
    print("LED lights increase yield compared to fluorescent")
else:
    print("\nResult: NO significant difference (p ≥ 0.05)")
    print("Cannot conclude LED is better than fluorescent")

# Effect size (Cohen's d)
pooled_std = np.sqrt(((len(led_yields)-1)*np.std(led_yields, ddof=1)**2 +
                      (len(fluorescent_yields)-1)*np.std(fluorescent_yields, ddof=1)**2) /
                     (len(led_yields) + len(fluorescent_yields) - 2))
cohens_d = (np.mean(led_yields) - np.mean(fluorescent_yields)) / pooled_std
print(f"\nEffect size (Cohen's d): {cohens_d:.2f}")
if abs(cohens_d) > 0.8:
    print("Large effect size")
elif abs(cohens_d) > 0.5:
    print("Medium effect size")
else:
    print("Small effect size")
```

### Power Analysis (Sample Size Calculation)

```python
from statsmodels.stats.power import ttest_power

# How many samples needed to detect 10% yield difference?
effect_size = 0.5  # Cohen's d
alpha = 0.05
power = 0.80  # 80% power (standard)

n_samples = ttest_power(effect_size, power, alpha)
print(f"Required sample size per group: {int(np.ceil(n_samples))}")
```

### ANOVA (Comparing 3+ Groups)

```python
from scipy.stats import f_oneway

# Example: Three different nutrient formulations
formula_a = [50, 52, 51, 53, 52, 51, 52]
formula_b = [48, 49, 47, 48, 49, 48, 47]
formula_c = [54, 55, 56, 54, 55, 56, 55]

# Perform one-way ANOVA
f_stat, p_value = f_oneway(formula_a, formula_b, formula_c)

print(f"F-statistic: {f_stat:.3f}")
print(f"P-value: {p_value:.4f}")

if p_value < 0.05:
    print("\nAt least one formula is significantly different")

    # Post-hoc pairwise comparisons (Tukey HSD)
    from scipy.stats import ttest_ind
    from itertools import combinations

    groups = [('A', formula_a), ('B', formula_b), ('C', formula_c)]
    for (name1, group1), (name2, group2) in combinations(groups, 2):
        t, p = ttest_ind(group1, group2)
        print(f"{name1} vs {name2}: p = {p:.4f}", end='')
        if p < 0.05:
            print(" *")
        else:
            print()
```

---

## Key Formulas Reference

```
┌────────────────────────────────────────────────────────────┐
│              ESSENTIAL FORMULAS                            │
├────────────────────────────────────────────────────────────┤
│                                                            │
│  Mean: x̄ = Σx / n                                         │
│                                                            │
│  Variance: s² = Σ(x - x̄)² / (n-1)                         │
│                                                            │
│  Standard Deviation: s = √[Σ(x - x̄)² / (n-1)]             │
│                                                            │
│  Coefficient of Variation: CV = (s / x̄) × 100%            │
│                                                            │
│  Pearson Correlation: r = Σ[(x-x̄)(y-ȳ)] / √[Σ(x-x̄)²Σ(y-ȳ)²]│
│                                                            │
│  Linear Regression: y = β₀ + β₁x                           │
│    β₁ = r × (sᵧ / sₓ)                                      │
│    β₀ = ȳ - β₁x̄                                            │
│                                                            │
│  R²: Coefficient of Determination = r²                     │
│                                                            │
│  t-statistic: t = (x̄₁ - x̄₂) / √(s₁²/n₁ + s₂²/n₂)          │
│                                                            │
│  Standard Error: SE = s / √n                               │
│                                                            │
│  Confidence Interval: x̄ ± t(α/2, n-1) × SE                │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

---

## Key Takeaways

1. **Descriptive statistics summarize data** - Use mean/median for center, SD for spread, CV for relative variability.

2. **Correlation shows relationships** - But correlation ≠ causation. Always test mechanisms.

3. **Regression quantifies effects** - Use to model relationships and make predictions.

4. **SPC detects process changes** - Control charts alert you to problems before they become critical.

5. **Proper experimental design is essential** - Random assignment, adequate samples, hypothesis testing.

6. **Statistical significance ≠ practical significance** - A small but statistically significant effect may not be worth implementing.

7. **Always visualize your data** - Plots reveal patterns statistics alone may miss.

---

## Practical Exercise

1. **Calculate descriptive statistics** for your harvest data (last 20 harvests)
2. **Test for normality** - Is your yield normally distributed?
3. **Correlation analysis** - Which environmental factor correlates most with yield?
4. **Regression model** - Build a model to predict yield from 2-3 variables
5. **A/B test design** - Plan an experiment to test a new growing technique
6. **Create control chart** - For pH or temperature monitoring

---

## Next Module Preview

**Module 6: Advanced Analytics Methods** will cover:
- Time series analysis and forecasting
- Clustering and segmentation
- Principal component analysis (PCA)
- Anomaly detection algorithms
- Multi-variate optimization

---

*EcoFusion Academy - Course 304 - Module 5*
*Precision Agriculture & Data Analytics*
