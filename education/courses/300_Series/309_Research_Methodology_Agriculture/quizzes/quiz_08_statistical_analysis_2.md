# Quiz 8: Statistical Analysis II - ANOVA and Beyond

**Course:** 309 - Research Methodology for Agriculture
**Module:** 8 - Statistical Analysis II
**Time Limit:** 20 minutes
**Points:** 10 points
**Passing Score:** 80%

---

## Multiple Choice (1 point each)

**1. Why should you use ANOVA instead of multiple t-tests when comparing 4 treatment groups?**

a) ANOVA is easier to calculate
b) Multiple t-tests inflate the family-wise Type I error rate
c) ANOVA requires fewer assumptions
d) t-tests cannot compare more than 2 groups

**Answer:** b

---

**2. What does a significant F-test in ANOVA tell you?**

a) Exactly which groups differ from each other
b) The magnitude of differences between groups
c) At least one group mean differs from the others
d) All groups are significantly different

**Answer:** c

---

**3. Which post-hoc test is most appropriate for making all pairwise comparisons with equal sample sizes?**

a) Bonferroni
b) Tukey's HSD
c) Dunnett's test
d) LSD (Fisher's)

**Answer:** b

---

**4. In a two-way ANOVA factorial design, a significant interaction effect means:**

a) Both main effects must be significant
b) The effect of one factor depends on the level of another factor
c) The factors are independent
d) An error occurred in the analysis

**Answer:** b

---

**5. Which non-parametric test is the alternative to one-way ANOVA?**

a) Mann-Whitney U test
b) Chi-square test
c) Kruskal-Wallis test
d) Friedman test

**Answer:** c

---

**6. A correlation coefficient of r = -0.85 indicates:**

a) Weak negative relationship
b) Strong positive relationship
c) Strong negative relationship
d) No relationship

**Answer:** c

---

## Calculation (2 points)

**7. Given the following ANOVA table, calculate the F-statistic and determine if it's significant at α = 0.05 (critical F₀.₀₅,₂,₁₅ = 3.68).**

| Source | SS | df | MS | F |
|--------|----|----|----|----|
| Between Groups | 450 | 2 | ? | ? |
| Within Groups | 300 | 15 | ? | |
| Total | 750 | 17 | | |

**Show your work.**

**Example Answer:**
```
MS_between = SS_between / df_between = 450 / 2 = 225

MS_within = SS_within / df_within = 300 / 15 = 20

F = MS_between / MS_within = 225 / 20 = 11.25

Critical value: F₀.₀₅,₂,₁₅ = 3.68

Decision: F = 11.25 > 3.68, therefore reject H₀

Conclusion: Significant difference between groups at α = 0.05 (p < 0.05)
```

---

## Short Answer (2 points each)

**8. A researcher performed ANOVA on 5 nutrient treatments and found F = 8.45, p = 0.002. They then used Tukey's HSD post-hoc test. Explain why this two-step process is necessary.**

**Example Answer:**
The ANOVA F-test is an omnibus test that only tells us whether at least one group differs from the others—it doesn't identify which specific groups differ. The significant F-test (p = 0.002) gives us permission to proceed with post-hoc comparisons. Tukey's HSD controls the family-wise error rate while testing all pairwise comparisons to determine which specific treatment pairs are significantly different. Without this second step, we would know there's a difference somewhere but not where or between which treatments.

---

**9. Interpret the following regression equation for lettuce yield (g) based on days of growth: Yield = 25 + 3.5(Days), R² = 0.78, p < 0.001. What does each component tell you?**

**Example Answer:**
- **Intercept (25):** Predicted yield at day 0 is 25g (starting biomass or seedling weight)
- **Slope (3.5):** For each additional day of growth, yield increases by 3.5g on average
- **R² (0.78):** 78% of variation in yield is explained by days of growth; remaining 22% due to other factors
- **p < 0.001:** Relationship is highly statistically significant—days of growth is a strong predictor of yield
- **Practical use:** Can predict yield for any day (e.g., Day 30: Yield = 25 + 3.5(30) = 130g)

---

## Application (2 points each)

**10. You compared 3 irrigation frequencies (daily, twice-daily, three times daily) on strawberry yield with 8 replicates per treatment. ANOVA showed F = 12.3, p < 0.001. Tukey's HSD results:**
```
Daily vs. Twice-daily: difference = 45g, p = 0.002
Daily vs. Three times: difference = 48g, p = 0.001
Twice-daily vs. Three times: difference = 3g, p = 0.95
```
**Interpret these results and make a practical recommendation.**

**Example Answer:**

**Interpretation:**
- ANOVA confirms irrigation frequency significantly affects yield
- Daily watering produces significantly lower yields than both twice-daily and three times daily (45-48g less)
- Twice-daily and three times daily produce statistically equivalent yields (only 3g difference, p = 0.95)

**Practical Recommendation:**
Irrigate twice daily. This provides significantly better yields than once daily (45g increase, ~p = 0.002) while avoiding the extra labor, water, and equipment wear of three times daily for no additional benefit. The lack of difference between twice and three times daily (p = 0.95) means three times daily provides no return on the additional investment. Cost-benefit clearly favors twice-daily irrigation.

---

## Scoring Guide

| Question | Points | Topic |
|----------|--------|-------|
| 1-6 | 1 each (6 total) | ANOVA concepts |
| 7 | 2 | F-statistic calculation |
| 8 | 2 | Post-hoc justification |
| 9 | 2 | Regression interpretation |
| 10 | 2 | Practical application |
| **Total** | **14 points** | |

**Note:** Quiz is out of 14 points, scaled to 10 points for gradebook.

---

*Quiz 8 | Course 309: Research Methodology for Agriculture*
