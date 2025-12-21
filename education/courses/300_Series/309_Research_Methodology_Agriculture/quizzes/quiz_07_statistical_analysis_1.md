# Quiz 7: Statistical Analysis I

**Course:** 309 - Research Methodology for Agriculture
**Module:** 7 - Statistical Analysis I - Foundations
**Time Limit:** 20 minutes
**Points:** 10 points
**Passing Score:** 80%

---

## Multiple Choice (1 point each)

**1. Which measure of central tendency is most resistant to outliers?**

a) Mean
b) Median
c) Mode
d) Range

**Answer:** b

---

**2. A researcher calculates a 95% confidence interval for mean yield as [120, 140] grams. What is the correct interpretation?**

a) 95% of plants have yields between 120-140 grams
b) There is a 95% probability the true mean is between 120-140 grams
c) We are 95% confident the true population mean lies between 120-140 grams
d) 95% of future samples will have means between 120-140 grams

**Answer:** c

---

**3. What does a p-value of 0.03 mean?**

a) There is a 3% chance the null hypothesis is true
b) There is a 97% chance the alternative hypothesis is true
c) If the null hypothesis were true, there is a 3% probability of obtaining results this extreme or more extreme
d) The effect size is 3%

**Answer:** c

---

**4. Which statistical test would you use to compare the means of THREE independent groups?**

a) Two-sample t-test
b) Paired t-test
c) One-way ANOVA
d) Correlation

**Answer:** c

---

**5. Type I error occurs when:**

a) We fail to reject a false null hypothesis
b) We reject a true null hypothesis
c) We use the wrong statistical test
d) Our sample size is too small

**Answer:** b

---

**6. Which of the following increases statistical power?**

a) Decreasing sample size
b) Increasing variability
c) Decreasing significance level (α)
d) Increasing sample size

**Answer:** d

---

## Calculations (2 points each)

**7. Calculate the mean and standard deviation for the following lettuce yields (grams): 105, 110, 108, 112, 105**

**Show your work.**

**Example Answer:**
```
Mean = (105 + 110 + 108 + 112 + 105) / 5 = 540 / 5 = 108 g

Variance = [(105-108)² + (110-108)² + (108-108)² + (112-108)² + (105-108)²] / (5-1)
         = [9 + 4 + 0 + 16 + 9] / 4
         = 38 / 4 = 9.5

SD = √9.5 = 3.08 g

Mean = 108 g, SD = 3.08 g
```

---

**8. Two nutrient formulations are compared. Formula A: mean = 150g, SD = 15g, n = 10. Formula B: mean = 165g, n = 10. The pooled standard deviation is 16.6g. Calculate Cohen's d effect size.**

**Example Answer:**
```
Cohen's d = (M₁ - M₂) / SD_pooled
d = (165 - 150) / 16.6
d = 15 / 16.6
d = 0.90

Interpretation: Large effect size (d > 0.8)
```

---

## Short Answer (2 points)

**9. Explain the difference between statistical significance and practical significance, using an agricultural research example.**

**Example Answer:**
Statistical significance (p < 0.05) indicates a difference is unlikely due to chance but doesn't indicate importance. Practical significance refers to whether the difference matters in real-world terms.

Example: A study with 1,000 plants finds that a new fertilizer increases yield by 2 grams (p = 0.001). This is statistically significant but may not be practically significant if the fertilizer costs substantially more and the 2-gram increase doesn't justify the added expense.

---

## Critical Thinking (2 points)

**10. A researcher conducted an experiment comparing 4 fish feeds but forgot to conduct ANOVA first. Instead, they performed 6 pairwise t-tests (comparing all possible pairs). If α = 0.05 for each test, what is the approximate family-wise error rate, and why is this problematic?**

**Example Answer:**
With 6 independent tests at α = 0.05 each:
Family-wise error rate = 1 - (1 - 0.05)⁶ = 1 - 0.735 = 0.265 or 26.5%

This is problematic because the chance of making at least one Type I error (false positive) is 26.5% instead of the intended 5%. This inflates the risk of concluding a difference exists when it doesn't. ANOVA should be used first to control the overall Type I error rate.

---

## Scoring Guide

| Question | Points | Topic |
|----------|--------|-------|
| 1-6 | 1 each (6 total) | Statistical concepts |
| 7-8 | 2 each (4 total) | Calculations |
| 9 | 2 | Interpretation |
| 10 | 2 | Critical application |
| **Total** | **14 points** | |

**Note:** Quiz is out of 14 points, scaled to 10 points for gradebook.

---

*Quiz 7 | Course 309: Research Methodology for Agriculture*
