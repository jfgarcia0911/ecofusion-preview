# Module 10: Data Interpretation

## Learning Objectives

By the end of this module, you will be able to:
1. Distinguish between statistical and practical significance
2. Interpret confidence intervals correctly
3. Understand and apply effect sizes
4. Recognize and avoid common interpretation errors
5. Communicate uncertainty appropriately
6. Make evidence-based recommendations

---

## Statistical vs. Practical Significance

### The Distinction

```
┌─────────────────────────────────────────────────────────────────────┐
│          STATISTICAL VS. PRACTICAL SIGNIFICANCE                     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  STATISTICAL SIGNIFICANCE (p < 0.05)                                │
│  └─► Low probability result occurred by chance                     │
│      Depends heavily on sample size                                │
│      Does NOT indicate importance                                  │
│                                                                     │
│  PRACTICAL SIGNIFICANCE                                             │
│  └─► Meaningful difference in real-world context                   │
│      Depends on effect size, cost, implementation                  │
│      Requires domain knowledge                                     │
│                                                                     │
│  FOUR SCENARIOS:                                                    │
│                                                                     │
│  1. Statistically significant + Practically important              │
│     → Ideal: Implement finding                                     │
│                                                                     │
│  2. Statistically significant + NOT practically important          │
│     → Large sample detected trivial effect                         │
│                                                                     │
│  3. NOT statistically significant + Potentially important          │
│     → Underpowered study, consider replication                     │
│                                                                     │
│  4. NOT significant + NOT important                                │
│     → True null effect                                             │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Example: Large Sample, Small Effect

**Study:** Compare two nutrient formulas
- **Sample:** n = 500 plants per treatment
- **Result:** Formula B yields 102.5 g vs. Formula A yields 100.0 g
- **Statistic:** p = 0.001 (highly significant!)
- **Difference:** 2.5 g (2.5% increase)

**Interpretation:**
- Statistically significant: Yes (p < 0.001)
- Practically significant: Depends on:
  - Cost difference between formulas
  - Profit margin on crop
  - Implementation complexity
  - Market value of extra yield

**If Formula B costs $50 more per 1000 L and adds only $10 in crop value:**
→ Not economically viable despite statistical significance

### Example: Small Sample, Large Effect

**Study:** Test new LED spectrum
- **Sample:** n = 10 plants per treatment
- **Result:** New LED yields 150 g vs. Standard yields 120 g
- **Statistic:** p = 0.08 (not significant)
- **Difference:** 30 g (25% increase!)
- **Effect size:** d = 1.2 (very large)

**Interpretation:**
- Statistically significant: No (p > 0.05)
- Practically significant: Possibly! Large effect but underpowered
- **Recommendation:** Replicate with larger sample before concluding no effect

---

## Interpreting P-Values

### What P-Value Means

**Correct:** "If there were truly no effect (H₀ true), the probability of obtaining results as extreme or more extreme than observed is p = 0.03"

**Incorrect Interpretations:**

| Wrong Statement | Why It's Wrong |
|-----------------|----------------|
| "Probability H₀ is true is 3%" | p-value is NOT P(H₀ is true) |
| "Probability of replication is 97%" | Replication depends on many factors |
| "Effect size is 3%" | p-value doesn't measure effect size |
| "99.7% chance difference is real" | Confuses p-value with confidence level |

### P-Value Limitations

1. **Affected by sample size**
   - Large n: Even tiny effects can be "significant"
   - Small n: Large effects may not reach significance

2. **Dichotomous thinking**
   - p = 0.049 vs. p = 0.051: Trivial difference, different conclusions
   - Better to report exact p-value

3. **Publication bias**
   - Non-significant results less likely published
   - Inflates perceived effect sizes in literature

4. **Doesn't measure importance**
   - Need effect size and context

### Beyond P-Values

**Report:**
- Exact p-value (not just "p < 0.05")
- Confidence intervals
- Effect sizes
- Descriptive statistics (means, SDs)
- Sample sizes

**Example Good Reporting:**
"New formula increased yield by 15.2 g (95% CI: 8.3-22.1 g, p = 0.002, Cohen's d = 0.85). This represents a 12% increase over standard formula and would increase revenue by $450/greenhouse/year."

---

## Confidence Intervals

### Interpretation

**95% CI for mean = [65, 75]**

**Correct Interpretations:**
- "We are 95% confident the true population mean lies between 65 and 75"
- "If we repeated this study 100 times, approximately 95 of the resulting CIs would contain the true mean"

**Incorrect Interpretations:**
- "95% of the data falls between 65 and 75" (that's a range or percentile)
- "There's a 95% probability the mean is between 65 and 75" (frequentist CI doesn't work this way)

### Using CIs for Inference

**CI and Hypothesis Testing:**

If 95% CI for difference does NOT include 0:
→ p < 0.05 (significant difference)

If 95% CI for difference INCLUDES 0:
→ p ≥ 0.05 (no significant difference)

**Example:**

```
Comparison: Formula B - Formula A

Scenario 1: Difference = 15 g, 95% CI [8, 22]
→ CI doesn't include 0
→ Significant increase (p < 0.05)

Scenario 2: Difference = 5 g, 95% CI [-2, 12]
→ CI includes 0
→ No significant difference (p ≥ 0.05)

Scenario 3: Difference = 15 g, 95% CI [14, 16]
→ Narrow CI, precise estimate
→ Highly significant, well-powered study
```

### Width of Confidence Intervals

**Narrow CI:**
- More precise estimate
- Larger sample size
- Lower variability
- More informative

**Wide CI:**
- Less precise estimate
- Smaller sample size
- Higher variability
- Less informative

**Factors Affecting Width:**

```
CI Width ∝ (t-value × SE)

Where SE = s / √n

Width decreases with:
- Larger n (↑sample size)
- Smaller s (↓variability)
- Lower confidence level (90% narrower than 95%)
```

---

## Effect Sizes

### Why Effect Sizes Matter

**P-values tell you:** IF there's an effect
**Effect sizes tell you:** HOW LARGE the effect is

### Common Effect Size Measures

| Measure | Context | Interpretation |
|---------|---------|----------------|
| **Cohen's d** | Difference between means | d=0.2 small, 0.5 medium, 0.8 large |
| **Eta-squared (η²)** | ANOVA | Proportion of variance explained |
| **Omega-squared (ω²)** | ANOVA | Less biased than η² |
| **R²** | Regression | Proportion of variance explained |
| **Odds ratio** | Categorical outcomes | Relative likelihood |
| **Number Needed to Treat (NNT)** | Intervention studies | How many to treat for one benefit |

### Cohen's d

```
d = (M₁ - M₂) / SD_pooled

Guidelines (Cohen, 1988):
d = 0.2    Small effect
d = 0.5    Medium effect
d = 0.8    Large effect

But context matters!
```

**Example:**

```
Treatment A: M = 100 g, SD = 15 g
Treatment B: M = 115 g, SD = 18 g
SD_pooled = 16.6 g

d = (115 - 100) / 16.6 = 0.90

Interpretation: Large effect (approaching 1 SD difference)
```

### Effect Size in ANOVA

**Eta-squared (η²):**

```
η² = SS_between / SS_total

Interpretation:
η² = 0.01    Small effect (1% of variance)
η² = 0.06    Medium effect (6% of variance)
η² = 0.14    Large effect (14% of variance)
```

**Example:**

```
ANOVA Results:
SS_between = 1534.2
SS_total = 1705.8

η² = 1534.2 / 1705.8 = 0.90

Interpretation: Treatment explains 90% of variance in yield (very large effect)
```

### Practical Significance Thresholds

**Context-Dependent Examples:**

**Aquaponics Yield:**
- Minimum economically important difference: 10% yield increase
- d = 0.5 may or may not be practically important
- Depends on costs, market prices, implementation

**Water Quality:**
- 0.1 pH unit change: Statistically detectable, biologically negligible
- 1.0 pH unit change: May be critical for fish health
- Context determines importance

**Energy Use:**
- 2% reduction in electricity: Small d but high practical value if system runs 24/7
- Cost savings compound over time

---

## Common Interpretation Errors

### 1. Confusing Correlation with Causation

**Error:** "pH correlates with yield (r = 0.75), therefore pH causes higher yield"

**Problem:** Correlation doesn't establish causation

**Possible Explanations:**
- A causes B (pH → yield)
- B causes A (higher-yielding plants alter pH)
- C causes both A and B (better management → optimal pH and higher yield)
- Coincidence

**Solution:** Use experimental manipulation to establish causation

### 2. Accepting the Null Hypothesis

**Error:** "p = 0.15, therefore there is no effect"

**Problem:** Failing to reject H₀ ≠ accepting H₀

**Correct:** "Insufficient evidence to conclude an effect exists" (could be underpowered)

**Absence of evidence ≠ Evidence of absence**

### 3. HARKing

**Hypothesizing After Results are Known**

**Error:** Conducting exploratory analysis, finding surprising result, then claiming it was hypothesized

**Problem:** Inflates Type I error, misleading

**Solution:** Clearly distinguish:
- Confirmatory (a priori hypotheses)
- Exploratory (post-hoc observations)

### 4. P-Hacking

**Fishing for significance through:**
- Trying multiple analyses until one is significant
- Selective reporting of outcomes
- Optional stopping (check p-value, add more data if not significant)
- Removing "outliers" to achieve significance

**Solution:**
- Pre-register analysis plan
- Report all analyses conducted
- Correct for multiple comparisons
- Don't peek at p-values during data collection

### 5. Overinterpreting Non-Significant Trends

**Error:** "Although not significant (p = 0.08), there was a trend toward higher yield"

**Problem:** "Trend" is subjective; sets lower bar than α = 0.05

**Better:** Report exact p-value and effect size, discuss power

### 6. Ignoring Effect Size

**Error:** Focusing only on p-value

**Example:**
- Study 1: p = 0.001, difference = 2 g, n = 500
- Study 2: p = 0.08, difference = 20 g, n = 10

**Error:** Concluding Study 1 more important because smaller p-value

**Correct:** Study 2 shows larger effect but needs replication with larger sample

### 7. Misunderstanding Confidence Intervals

**Error:** "The mean is probably near the center of the CI"

**Truth:** Mean estimate is your best guess regardless of CI width

**Error:** "95% of my data falls in the 95% CI"

**Truth:** CI is for the population parameter (mean), not individual observations

### 8. Cherry-Picking Data

**Error:** Excluding data that doesn't fit expectations without valid reason

**Problem:** Introduces bias, invalidates results

**Valid reasons to exclude data:**
- Equipment malfunction (documented)
- Protocol violation (documented)
- Extreme outliers (defined a priori, reported)

**Solution:** Pre-specify exclusion criteria, report all exclusions

---

## Communicating Uncertainty

### Embrace Uncertainty

**Science is probabilistic, not absolute**

Good: "Our results suggest that..."
Good: "The data are consistent with..."
Good: "We found evidence for..."

Avoid: "This proves that..."
Avoid: "We showed definitively that..."

### Quantify Uncertainty

**Use Confidence Intervals:**

```
Poor: "The mean is 72°F"
Better: "The mean is 72°F (95% CI: 70-74°F)"
Best: "The mean is 72°F (95% CI: 70-74°F), suggesting the true temperature is likely between 70-74°F"
```

**Discuss Limitations:**
- Sample size constraints
- Generalizability
- Assumptions
- Unmeasured confounders

### Error Bars in Figures

**Common Types:**

| Error Bar | Meaning | When to Use |
|-----------|---------|-------------|
| **Standard Deviation (SD)** | Variability of data | Show data spread |
| **Standard Error (SE)** | Precision of mean estimate | Compare means informally |
| **95% Confidence Interval** | Range for true mean | Formal comparison, inference |

**Key Point:** Always label what error bars represent!

**Visual Comparison:**

```
Same data, different error bars:

Mean = 100, SD = 20, n = 16

SD error bars:  ±20 (one SD)
SE error bars:  ±5 (SD/√n = 20/4)
95% CI:         ±10 (SE × t = 5 × 2.13)
```

---

## Making Recommendations

### Evidence-Based Decision Framework

```
┌─────────────────────────────────────────────────────────────────────┐
│              RECOMMENDATION DECISION TREE                           │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  Is effect statistically significant?                               │
│  │                                                                  │
│  ├─ YES ──► Is effect size large enough to matter?                 │
│  │           │                                                      │
│  │           ├─ YES ──► Is it cost-effective?                      │
│  │           │           │                                          │
│  │           │           ├─ YES ──► Is it practical to implement?  │
│  │           │           │           │                              │
│  │           │           │           ├─ YES ──► RECOMMEND           │
│  │           │           │           └─ NO  ──► NOT RECOMMENDED    │
│  │           │           │                                          │
│  │           │           └─ NO ──► NOT ECONOMICAL                  │
│  │           │                                                      │
│  │           └─ NO ──► TRIVIAL EFFECT (Don't recommend)            │
│  │                                                                  │
│  └─ NO ───► Was study well-powered?                                │
│              │                                                      │
│              ├─ YES ──► Likely no effect (Don't recommend)         │
│              └─ NO  ──► Inconclusive (Need more research)          │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Example Recommendation

**Study Results:**
- New LED spectrum increases yield by 25%
- p < 0.001, d = 1.3, 95% CI: [18%, 32%]
- Initial cost: $5,000 per greenhouse
- Annual yield value increase: $3,000
- Implementation complexity: Moderate

**Recommendation:**
"We recommend adopting the new LED spectrum. The treatment produced a substantial and statistically significant increase in yield (25%, 95% CI: 18-32%, p < 0.001). The system would pay for itself in less than 2 years and continue providing benefits thereafter. While implementation requires electrical modifications, the long-term economic benefit justifies the investment."

---

## Practical Exercise

### Scenario Analysis

**Study:** Testing automated pH control system

**Results:**
- Control: Mean pH = 6.8, SD = 0.5, n = 20
- Automated: Mean pH = 6.5, SD = 0.1, n = 20
- Difference: -0.3 pH units
- p = 0.003
- 95% CI for difference: [-0.48, -0.12]
- Automated system cost: $2,000
- Labor savings: $500/year

**Questions:**

1. Is the difference statistically significant?
2. Is the difference practically significant for fish health?
3. What is the effect size (Cohen's d)?
4. Is the system cost-effective?
5. What would you recommend?

---

## Key Takeaways

1. **Statistical significance ≠ practical importance:** Consider effect size and context
2. **P-values have limitations:** Report exact values, CIs, and effect sizes
3. **Confidence intervals** provide range of plausible values and enable inference
4. **Effect sizes** quantify magnitude independent of sample size
5. **Common errors** include confusing correlation/causation, p-hacking, ignoring effect size
6. **Communicate uncertainty** honestly using CIs and acknowledging limitations
7. **Recommendations** should integrate statistical evidence with practical considerations

---

## Next Module Preview

**Module 11: Research Writing**

Learn about:
- Scientific paper structure
- Writing methods and results
- Creating effective tables and figures
- Citation management
- Common writing errors

---

*Module 10 Complete | Course 309: Research Methodology for Agriculture*
