# Statistical Formulas Cheatsheet

## Course 304: Precision Agriculture & Data Analytics

---

## Descriptive Statistics

### Central Tendency

**Mean (Average)**
```
x̄ = Σx / n

where:
  x̄ = sample mean
  Σx = sum of all values
  n = number of observations
```

**Median**
```
Middle value when data sorted
If n is odd: median = value at position (n+1)/2
If n is even: median = average of values at positions n/2 and (n/2)+1
```

**Mode**
```
Most frequently occurring value
```

---

### Variability

**Variance**
```
s² = Σ(x - x̄)² / (n-1)

where:
  s² = sample variance
  x = each value
  x̄ = mean
  n = sample size
  (n-1) = degrees of freedom
```

**Standard Deviation**
```
s = √[Σ(x - x̄)² / (n-1)]

Simpler: s = √(variance)
```

**Coefficient of Variation**
```
CV = (s / x̄) × 100%

Interpretation:
  CV < 10% = Low variability
  CV 10-20% = Moderate variability
  CV > 20% = High variability
```

**Range**
```
Range = Maximum - Minimum
```

**Interquartile Range (IQR)**
```
IQR = Q3 - Q1

where:
  Q1 = 25th percentile
  Q3 = 75th percentile

Outlier detection:
  Lower fence = Q1 - 1.5 × IQR
  Upper fence = Q3 + 1.5 × IQR
```

---

## Correlation and Regression

**Pearson Correlation Coefficient**
```
r = Σ[(x - x̄)(y - ȳ)] / √[Σ(x - x̄)² × Σ(y - ȳ)²]

Alternative:
r = (n∑xy - ∑x∑y) / √[(n∑x² - (∑x)²)(n∑y² - (∑y)²)]

Interpretation:
  r = +1: Perfect positive correlation
  r = 0: No correlation
  r = -1: Perfect negative correlation
  |r| > 0.7: Strong correlation
  |r| 0.4-0.7: Moderate correlation
  |r| < 0.4: Weak correlation
```

**Simple Linear Regression**
```
y = β₀ + β₁x

where:
  β₁ (slope) = r × (sᵧ / sₓ)
  β₀ (intercept) = ȳ - β₁x̄

  r = correlation coefficient
  sₓ, sᵧ = standard deviations of x and y
```

**Coefficient of Determination (R²)**
```
R² = r²

Interpretation:
  R² = proportion of variance in y explained by x
  Range: 0 to 1
  R² = 0.85 means 85% of variation explained
```

---

## Hypothesis Testing

**t-Test (Two Independent Samples)**
```
t = (x̄₁ - x̄₂) / √(s₁²/n₁ + s₂²/n₂)

where:
  x̄₁, x̄₂ = sample means
  s₁², s₂² = sample variances
  n₁, n₂ = sample sizes

Degrees of freedom (approx):
  df = smaller of (n₁-1) or (n₂-1)

Decision:
  If |t| > t_critical (from table): Reject H₀
  If p-value < α (usually 0.05): Reject H₀
```

**Standard Error**
```
SE = s / √n

where:
  s = standard deviation
  n = sample size
```

**Confidence Interval**
```
CI = x̄ ± t(α/2, df) × SE

For 95% CI:
  CI = x̄ ± 1.96 × SE  (large samples, n>30)
  CI = x̄ ± t₀.₀₂₅ × SE  (small samples, use t-table)
```

---

## Agricultural Applications

**Vapor Pressure Deficit (VPD)**
```
VPD = SVP - AVP

where:
  SVP = Saturation Vapor Pressure (kPa)
  AVP = Actual Vapor Pressure (kPa)

SVP = 0.6108 × exp[(17.27 × T) / (T + 237.3)]
  T = temperature in °C

AVP = SVP × (RH / 100)
  RH = relative humidity in %

Target VPD ranges:
  Seedling: 0.4-0.8 kPa
  Vegetative: 0.8-1.2 kPa
  Flowering: 1.0-1.4 kPa
```

**Feed Conversion Ratio (FCR)**
```
FCR = Feed Given (kg) / Weight Gain (kg)

Example:
  10 kg feed → 6.5 kg fish growth
  FCR = 10 / 6.5 = 1.54

Lower FCR = better efficiency
Good FCR for tilapia: 1.5-1.8
```

**Nutrient Use Efficiency (NUE)**
```
NUE = Harvest (kg) / Fertilizer Applied (kg)

Good NUE for leafy greens: 30-50
Good NUE for fruiting crops: 20-35
```

**Yield per Square Foot**
```
Yield/sqft/year = Total Annual Harvest (lbs) / Growing Area (sqft)

Industry benchmarks (leafy greens):
  Average: 4-5 lbs/sqft/year
  Good: 6-8 lbs/sqft/year
  Excellent: 10+ lbs/sqft/year
```

---

## Model Evaluation Metrics

**Mean Absolute Error (MAE)**
```
MAE = Σ|yᵢ - ŷᵢ| / n

where:
  yᵢ = actual value
  ŷᵢ = predicted value
  n = number of predictions
```

**Root Mean Squared Error (RMSE)**
```
RMSE = √[Σ(yᵢ - ŷᵢ)² / n]

Penalizes large errors more than MAE
Same units as target variable
```

**Mean Absolute Percentage Error (MAPE)**
```
MAPE = (100 / n) × Σ|(yᵢ - ŷᵢ) / yᵢ|

Expressed as percentage
Easy to interpret, but issues when yᵢ near zero
```

**Accuracy (Classification)**
```
Accuracy = (TP + TN) / (TP + TN + FP + FN)

where:
  TP = True Positives
  TN = True Negatives
  FP = False Positives
  FN = False Negatives
```

**Precision**
```
Precision = TP / (TP + FP)

"Of predicted positives, how many are correct?"
```

**Recall (Sensitivity)**
```
Recall = TP / (TP + FN)

"Of actual positives, how many did we catch?"
```

**F1-Score**
```
F1 = 2 × (Precision × Recall) / (Precision + Recall)

Harmonic mean of precision and recall
Balanced metric
```

---

## Quick Reference Values

### Common Confidence Levels
| Confidence | α | Z-score | t-score (df=30) |
|------------|---|---------|-----------------|
| 90% | 0.10 | 1.645 | 1.697 |
| 95% | 0.05 | 1.960 | 2.042 |
| 99% | 0.01 | 2.576 | 2.750 |

### Effect Size (Cohen's d)
| d value | Interpretation |
|---------|----------------|
| 0.2 | Small effect |
| 0.5 | Medium effect |
| 0.8 | Large effect |

### Sample Size Rules of Thumb
- Minimum for t-test: 30 per group
- Minimum for regression: 10-20 observations per predictor
- Minimum for ML: 100+ observations (more is better)

---

## Python Quick Reference

```python
import numpy as np
import pandas as pd
from scipy import stats

# Descriptive statistics
mean = np.mean(data)
median = np.median(data)
std = np.std(data, ddof=1)  # Sample std dev
cv = (std / mean) * 100

# Correlation
r, p_value = stats.pearsonr(x, y)

# t-test
t_stat, p_value = stats.ttest_ind(group1, group2)

# Regression
from sklearn.linear_model import LinearRegression
model = LinearRegression()
model.fit(X, y)
predictions = model.predict(X_new)

# RMSE
from sklearn.metrics import mean_squared_error
rmse = np.sqrt(mean_squared_error(y_true, y_pred))
```

---

*EcoFusion Academy - Course 304*
*Quick Reference - Keep this handy!*
