# Experimental Design Quick Reference

**Course 412: Aquaponics Research & Development**

---

## Design Selection Flowchart

```
How many factors?
    │
    ├──► ONE FACTOR
    │     │
    │     ├──► How many levels?
    │     │     ├──► 2 levels → t-test or 2-group ANOVA
    │     │     └──► 3+ levels → One-way ANOVA
    │     │
    │     └──► Blocking needed? → RCBD
    │
    └──► MULTIPLE FACTORS
          │
          ├──► 2-3 factors → Factorial Design
          ├──► Some factors hard to randomize → Split-Plot
          └──► Repeated measurements → Repeated Measures ANOVA
```

---

## Common Designs at a Glance

| Design | When to Use | Min. Replicates | Analysis |
|--------|-------------|-----------------|----------|
| **CRD** | One factor, homogeneous conditions | n≥3 | One-way ANOVA |
| **RCBD** | One factor, known variation source | n≥3 blocks | Two-way ANOVA (block as factor) |
| **Factorial** | 2+ factors, test interactions | n≥3 | Multi-way ANOVA |
| **Split-Plot** | Factors at different scales | n≥4 | Mixed model ANOVA |

---

## Sample Size Quick Calculator

**For two-group comparison:**
```
n = 2(z_α/2 + z_β)² × (σ/Δ)²

Where:
z_α/2 = 1.96 (for α=0.05, two-tailed)
z_β = 0.84 (for 80% power)
σ = standard deviation
Δ = expected difference

QUICK ESTIMATE:
Small effect (d=0.2): n ≈ 400 per group
Medium effect (d=0.5): n ≈ 64 per group
Large effect (d=0.8): n ≈ 26 per group
```

**Practical recommendations for aquaponics:**
- System-level: n = 4-6 systems per treatment
- Within-system: n = 8-12 samples per system
- Always conduct power analysis!

---

## ANOVA Assumptions Checklist

**Before running ANOVA, verify:**

☐ **Independence** - Observations not influenced by each other
☐ **Normality** - Data approximately normal (Shapiro-Wilk test)
☐ **Homogeneity of variance** - Equal variances across groups (Levene's test)

**If assumptions violated:**
- Non-normal data → Transform or use non-parametric test
- Unequal variances → Welch's ANOVA
- Non-independence → Mixed models

---

## Post-Hoc Test Selection

| Test | Use When | Conservativeness |
|------|----------|------------------|
| **Tukey HSD** | All pairwise comparisons, equal n | Moderate |
| **Bonferroni** | Few planned comparisons | Very conservative |
| **Dunnett** | All vs. control only | Moderate |
| **Fisher LSD** | After significant ANOVA only | Liberal |

**Rule of thumb:** Use Tukey for most aquaponics experiments

---

## Statistical Power

**Target: ≥0.80 (80% power)**

Power affected by:
1. **Significance level (α)** - Lower α = lower power
2. **Effect size** - Larger effect = higher power
3. **Sample size (n)** - Larger n = higher power
4. **Variability (σ)** - Lower σ = higher power

**Increasing power:**
- Increase n (most practical)
- Reduce variability (blocking, standardization)
- Accept higher α (not recommended)

---

## Effect Size Interpretation

**Cohen's d:**
- 0.2 = Small
- 0.5 = Medium
- 0.8 = Large

**R² (proportion variance explained):**
- 0.01 = Small
- 0.09 = Medium
- 0.25 = Large

**Always report effect sizes along with p-values!**

---

## Randomization Methods

**Simple Random Assignment:**
```
1. List all experimental units
2. Use random number generator
3. Assign to treatments sequentially
```

**Stratified Random Assignment:**
```
1. Group units by known characteristic
2. Randomly assign within each stratum
3. Ensures balance across strata
```

**Online tools:** random.org, R (sample function), Excel (RAND)

---

## Blocking Strategies

**When to block:**
- Spatial gradients (light, temperature)
- Temporal variation (sequential runs)
- Size/age variability
- Different equipment/operators

**How to block:**
1. Identify blocking factor
2. Create homogeneous groups
3. Include all treatments in each block
4. Randomize treatment order within blocks
5. Analyze with block as factor

---

## Common Pitfalls to Avoid

❌ **Pseudoreplication** - Subsamples ≠ replicates
❌ **Insufficient power** - Too few replicates
❌ **P-hacking** - Testing until p<0.05
❌ **HARKing** - Hypothesizing after results known
❌ **Ignoring assumptions** - Use tests without checking
❌ **Multiple testing** - No correction for multiple comparisons
❌ **Confounding** - Treatments not properly randomized

---

## Replication Rule

**Absolute minimum:** n = 3
**Recommended:** n = 4-6
**Ideal:** n ≥ 8

**Remember:** More replication > Complex statistics with poor design

---

## Quick Statistical Test Selection

```
COMPARING GROUPS:

2 groups, independent, normal → Independent t-test
2 groups, paired, normal → Paired t-test
2 groups, non-normal → Mann-Whitney U

3+ groups, independent, normal → One-way ANOVA
3+ groups, non-normal → Kruskal-Wallis

RELATIONSHIPS:

2 continuous variables, linear → Pearson correlation
2 variables, non-linear/ordinal → Spearman correlation
Predict Y from X → Linear regression
Predict Y from multiple X → Multiple regression

CATEGORICAL DATA:

2 categorical variables → Chi-square test
Small sample categorical → Fisher's exact test
```

---

## Key Formulas

**Mean:** x̄ = Σx / n

**Standard Deviation:** s = √[Σ(x - x̄)² / (n-1)]

**Standard Error:** SE = s / √n

**Coefficient of Variation:** CV = (s / x̄) × 100%

**95% Confidence Interval:** x̄ ± (t₀.₀₂₅ × SE)

**t-statistic:** t = (x̄₁ - x̄₂) / SE_diff

**F-ratio:** F = MS_treatment / MS_error

---

## Reporting Results Checklist

Statistical reporting should include:

☐ Test used and why
☐ Sample size (n)
☐ Mean ± SD (or SE) for each group
☐ Test statistic value (t, F, etc.)
☐ Degrees of freedom
☐ P-value (exact if p>0.001)
☐ Effect size
☐ 95% confidence intervals
☐ Post-hoc test results (if applicable)

**Example:** "Lettuce yield was significantly higher in treatment A (245 ± 18 g, n=6) compared to control (198 ± 22 g, n=6); t(10)=4.32, p=0.002, d=2.36, 95% CI of difference: 22-72 g."

---

**Remember:** Good experimental design prevents problems that no statistical analysis can fix!

*For more details, see Module 2: Experimental Design Principles*
