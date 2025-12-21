# Sample Size Calculator Reference

**Course 309: Research Methodology for Agriculture**

---

## The Four Related Quantities

In any power analysis, if you know THREE of these, you can calculate the FOURTH:

1. **Sample size (n)** - How many subjects/units needed
2. **Effect size (δ or d)** - Magnitude of difference to detect
3. **Significance level (α)** - Probability of Type I error (usually 0.05)
4. **Statistical power (1-β)** - Probability of detecting true effect (usually 0.80)

---

## Comparing Two Means

### Formula

```
n = 2(Zα/2 + Zβ)² × (σ²/δ²)

Where:
n = sample size per group
Zα/2 = Z-value for significance level (1.96 for α=0.05, two-tailed)
Zβ = Z-value for power (0.84 for 80% power, 1.28 for 90% power)
σ = population standard deviation (estimate from pilot data)
δ = minimum detectable difference (effect size in original units)

Simplified for α=0.05, power=0.80:
n = 16 × (σ²/δ²)
```

### Step-by-Step Example

**Research Question:** Compare two nutrient formulations on lettuce yield

**Step 1: Estimate variability (σ)**
From pilot study: SD = 20 g

**Step 2: Define minimum meaningful difference (δ)**
We want to detect at least 15 g difference (10% of typical 150 g yield)

**Step 3: Set α and power**
- α = 0.05 (standard)
- Power = 0.80 (80%, standard)
- Zα/2 = 1.96
- Zβ = 0.84

**Step 4: Calculate**
```
n = 2(1.96 + 0.84)² × (20²/15²)
n = 2(2.8)² × (400/225)
n = 2(7.84) × (1.78)
n = 27.9

Round up: n = 28 per group (56 total)
```

**Step 5: Adjust for attrition**
If expecting 10% dropout:
```
n_adjusted = 28 / 0.90 = 31 per group
```

---

## Quick Reference Tables

### Table 1: Sample Size for Comparing Two Means
**(α=0.05, two-tailed, power=0.80)**

| Effect Size δ/σ | Cohen's d | n per group | Total n | Interpretation |
|-----------------|-----------|-------------|---------|----------------|
| 0.10 | 0.10 | 1571 | 3142 | Tiny difference |
| 0.20 | 0.20 | 393 | 786 | Small difference |
| 0.33 | 0.33 | 143 | 286 | Small-medium |
| 0.50 | 0.50 | 64 | 128 | Medium difference |
| 0.67 | 0.67 | 36 | 72 | Medium-large |
| 0.80 | 0.80 | 26 | 52 | Large difference |
| 1.00 | 1.00 | 17 | 34 | Very large |
| 1.50 | 1.50 | 8 | 16 | Huge difference |

### Table 2: Sample Size for Different Power Levels
**(α=0.05, two-tailed, d=0.5)**

| Power | Zβ | n per group | Total n |
|-------|-----|-------------|---------|
| 0.70 | 0.52 | 50 | 100 |
| 0.80 | 0.84 | 64 | 128 |
| 0.85 | 1.04 | 73 | 146 |
| 0.90 | 1.28 | 86 | 172 |
| 0.95 | 1.64 | 105 | 210 |

**Recommendation:** 80% power is standard; 90% for critical studies

---

## Estimating Proportions

### Formula for Single Proportion

```
n = (Zα/2)² × p(1-p) / e²

Where:
n = required sample size
Zα/2 = Z-value for confidence level (1.96 for 95%)
p = expected proportion (use 0.5 if unknown - most conservative)
e = margin of error (desired precision)
```

### Example: Survey of Grower Practices

**Question:** What proportion of aquaponic growers use automation?

**Parameters:**
- 95% confidence (Zα/2 = 1.96)
- ±5% margin of error (e = 0.05)
- Unknown proportion (p = 0.5)

**Calculate:**
```
n = (1.96)² × 0.5(1-0.5) / (0.05)²
n = 3.8416 × 0.25 / 0.0025
n = 0.9604 / 0.0025
n = 384.16

Round up: n = 385 growers
```

### Table 3: Sample Size for Estimating Proportions
**(95% confidence, different margins of error)**

| Margin of Error (e) | p = 0.5 (unknown) | p = 0.3 or 0.7 | p = 0.2 or 0.8 |
|---------------------|-------------------|----------------|----------------|
| ±10% | 96 | 81 | 61 |
| ±7% | 196 | 165 | 125 |
| ±5% | 384 | 323 | 246 |
| ±3% | 1067 | 897 | 683 |
| ±2% | 2401 | 2017 | 1537 |
| ±1% | 9604 | 8067 | 6147 |

**Key Insight:** Smaller margin of error requires much larger sample!

---

## ANOVA (One-Way)

### Formula

```
n = λ / (k × effect_size²) + 1

Where:
n = sample size per group
k = number of groups
λ = non-centrality parameter (from tables based on α, power, k)
effect_size = f (Cohen's f)

For α=0.05, power=0.80:
- k=3 groups: λ ≈ 9.8
- k=4 groups: λ ≈ 11.8
- k=5 groups: λ ≈ 13.5
```

### Table 4: Sample Size for One-Way ANOVA
**(α=0.05, power=0.80)**

| Cohen's f | k=3 groups | k=4 groups | k=5 groups |
|-----------|------------|------------|------------|
| 0.10 (small) | 322/group | 274/group | 242/group |
| 0.25 (medium) | 52/group | 45/group | 39/group |
| 0.40 (large) | 21/group | 18/group | 16/group |

---

## Factorial Designs

### 2×2 Factorial

**Sample size similar to two-group comparison for detecting:**
- Main effects: Use two-group formula
- Interaction: Typically need 4× more for same power

**Rule of thumb:** Plan for interaction detection (larger n)

### Example: Light (2 levels) × Nutrient (2 levels)

**To detect medium main effect (d=0.5) with 80% power:**
- n = 64 per cell × 4 cells = 256 total

**To detect medium interaction (typically need d=0.25 for same power):**
- n ≈ 256 per cell × 4 cells = 1024 total

**Practical compromise:**
- n = 30-50 per cell (120-200 total) detects large interactions

---

## Correlation

### Formula

```
n = [(Zα/2 + Zβ) / C]² + 3

Where:
C = 0.5 × ln[(1 + r) / (1 - r)]  (Fisher's Z transformation)
r = expected correlation coefficient

Simplified approximation:
n ≈ 8 / r² + 3
```

### Table 5: Sample Size for Detecting Correlations
**(α=0.05, two-tailed, power=0.80)**

| Expected \|r\| | Interpretation | Required n |
|-------------|----------------|------------|
| 0.10 | Very weak | 783 |
| 0.20 | Weak | 194 |
| 0.30 | Weak-moderate | 85 |
| 0.40 | Moderate | 47 |
| 0.50 | Moderate-strong | 30 |
| 0.60 | Strong | 21 |
| 0.70 | Strong | 15 |
| 0.80 | Very strong | 11 |
| 0.90 | Very strong | 8 |

---

## Finite Population Correction

**When sample is >5% of population, adjust for finite population:**

```
n_adjusted = n / [1 + (n-1)/N]

Where:
n = calculated sample size (infinite population)
N = population size
```

### Example

**Calculated n = 384, Population N = 500**

```
n_adjusted = 384 / [1 + (383/500)]
n_adjusted = 384 / 1.766
n_adjusted = 217
```

### Table 6: Finite Population Adjustment

| Population (N) | n (infinite) | n (adjusted) | Reduction |
|----------------|--------------|--------------|-----------|
| 50 | 384 | 42 | 89% |
| 100 | 384 | 80 | 79% |
| 200 | 384 | 132 | 66% |
| 500 | 384 | 217 | 43% |
| 1,000 | 384 | 278 | 28% |
| 5,000 | 384 | 357 | 7% |
| 10,000 | 384 | 370 | 4% |
| 100,000+ | 384 | 384 | 0% |

**Key Point:** For large populations (>5,000), population size barely affects required sample

---

## Practical Considerations

### Factors That INCREASE Required Sample Size

- Smaller effect size (want to detect subtle differences)
- Higher desired power (90% vs. 80%)
- Lower significance level (α=0.01 vs. 0.05)
- Greater variability (high SD)
- More groups (ANOVA)
- Detecting interactions (factorial)

### Factors That DECREASE Required Sample Size

- Larger effect size
- Lower power (not recommended)
- Less stringent α (not recommended)
- Lower variability (better controls)
- Paired/matched designs (removes between-subject variability)
- Blocking (accounts for known variation)

---

## Estimating Variability (σ)

**Sources for σ estimates:**

1. **Pilot study** (best)
   - Conduct small pilot (n=5-10)
   - Calculate SD from pilot data
   - Use for power analysis

2. **Published literature**
   - Similar studies, species, conditions
   - Use reported SDs or calculate from SEM (SD = SEM × √n)

3. **Coefficient of Variation (CV)**
   - Typical CV for biological data: 10-30%
   - Estimate: σ = mean × CV
   - Example: Mean yield = 150g, CV = 20% → σ = 30g

4. **Expert estimate**
   - Consult experienced researchers
   - Conservative estimate (larger σ)

---

## Worked Example: Complete Power Analysis

### Scenario

**Research Question:** Does LED lighting increase basil yield compared to fluorescent?

**Step 1: Define parameters**
- Comparison: 2 independent groups (LED vs. Fluorescent)
- Outcome: Fresh weight (grams) at harvest
- α = 0.05 (two-tailed)
- Desired power = 0.80

**Step 2: Estimate variability**
- Pilot study (n=5 per group):
  - Fluorescent: Mean = 100g, SD = 18g
  - LED: Mean = 125g, SD = 22g
  - Pooled SD = 20g (estimate)

**Step 3: Define minimum meaningful difference**
- Want to detect: 20g difference (20% increase)
- This would justify LED cost if achieved

**Step 4: Calculate Cohen's d**
```
d = δ / σ = 20 / 20 = 1.0 (very large effect)
```

**Step 5: Determine sample size**
```
Using Table 1: d = 1.0 → n = 17 per group

Or calculate:
n = 16 × (σ²/δ²)
n = 16 × (20²/20²)
n = 16 × 1
n = 16 per group
```

**Step 6: Adjust for attrition**
- Expect 10% plant loss (disease, accidents)
```
n_adjusted = 16 / 0.90 = 17.8 ≈ 18 per group
```

**Step 7: Final sample size**
- **18 plants per treatment group**
- **36 plants total**

**Step 8: Verify power**
- With n=18, d=1.0, α=0.05
- Power ≈ 85% (exceeds 80% target ✓)

---

## Software Tools

### Free Online Calculators

- **G*Power** (free software, comprehensive)
  - https://www.psychologie.hhu.de/arbeitsgruppen/allgemeine-psychologie-und-arbeitspsychologie/gpower

- **R packages:**
  - `pwr` package
  - `simr` for mixed models

- **Online calculators:**
  - ClinCalc Sample Size Calculator
  - SealedEnvelope Power Calculator

### R Code Examples

```r
# Install package
install.packages("pwr")
library(pwr)

# Two-sample t-test
pwr.t.test(d = 0.5, sig.level = 0.05, power = 0.80, type = "two.sample")

# One-way ANOVA
pwr.anova.test(k = 3, f = 0.25, sig.level = 0.05, power = 0.80)

# Correlation
pwr.r.test(r = 0.3, sig.level = 0.05, power = 0.80)

# Proportion
pwr.p.test(h = 0.2, sig.level = 0.05, power = 0.80)
```

---

## Common Mistakes to Avoid

1. **Using pilot study TO TEST hypothesis** → Pilot is for estimating parameters only
2. **Forgetting finite population correction** → Overestimates n for small populations
3. **Not accounting for attrition** → Ends up underpowered
4. **Post-hoc power analysis after nonsignificant result** → Controversial, generally not useful
5. **Using SD from different population** → May overestimate or underestimate n
6. **Planning for mean differences but detecting interaction** → Need larger n for interactions
7. **Confusing Cohen's d (standardized) with δ (raw difference)** → Check which formula requires

---

## Quick Reference Formulas

```
COMPARING TWO MEANS (α=0.05, power=0.80):
n = 16 × (σ²/δ²)  per group

ESTIMATING PROPORTION (95% CI, p=0.5):
n = 1 / e²  (where e = margin of error as decimal)
Example: ±5% → n = 1 / 0.05² = 400

CORRELATION:
n ≈ 8 / r²

FINITE POPULATION ADJUSTMENT:
n_adjusted = n / [1 + (n-1)/N]
```

---

*Sample Size Calculator Reference | Course 309: Research Methodology for Agriculture*
*Use power analysis BEFORE conducting research!*
