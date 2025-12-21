# Quiz 5: Statistical Analysis Basics

## Course 304: Precision Agriculture & Data Analytics

**Module:** 5 | **Points:** 3 | **Passing Score:** 2/3

---

### Question 1
Which measure of central tendency is most resistant to outliers?

A) Mean
B) Median
C) Mode
D) Midrange

**Correct Answer:** B

**Explanation:** The median is the middle value when data is sorted, making it resistant to extreme outliers. For example, pH readings of [6.5, 6.6, 6.7, 6.8, 12.3] have mean 7.78 (misleading) but median 6.7 (representative). Use median when data may contain sensor errors or true outliers.

---

### Question 2
What does a coefficient of variation (CV) of 15% indicate?

A) Low variability, good process control
B) Moderate variability, acceptable for most applications
C) High variability, poor process control
D) Extreme variability, system failure

**Correct Answer:** B

**Explanation:** CV = (standard deviation / mean) × 100%. Guidelines: <10% = low variability, 10-20% = moderate, >20% = high. 15% CV indicates acceptable but improvable control. For example, if average DO is 6.5 mg/L, CV of 15% means std dev of 0.98 mg/L, which is manageable.

---

### Question 3
In hypothesis testing for comparing two growing conditions, what does a p-value of 0.03 indicate?

A) 3% chance the null hypothesis is true
B) 3% chance of observing this result if the null hypothesis is true
C) 97% confidence in the result
D) The effect size is 3%

**Correct Answer:** B

**Explanation:** P-value is the probability of observing results at least this extreme if the null hypothesis (no difference) is true. p=0.03 means there's a 3% chance of seeing this difference by random chance. At α=0.05 significance level, we reject H₀ and conclude the conditions differ significantly.

---

### Question 4
You measure pH in 30 locations across a greenhouse. Mean = 6.5, SD = 0.3. What is the 95% confidence interval for the true mean pH?

A) 6.5 ± 0.11
B) 6.5 ± 0.30
C) 6.5 ± 0.59
D) 6.5 ± 0.03

**Correct Answer:** A

**Explanation:** 95% CI = mean ± 1.96 × SE, where SE = SD/√n = 0.3/√30 = 0.055. Thus CI = 6.5 ± (1.96 × 0.055) = 6.5 ± 0.11. This means we're 95% confident the true greenhouse mean pH is between 6.39 and 6.61.

---

### Question 5
What correlation coefficient (r) indicates a strong positive linear relationship?

A) r = 0.2
B) r = 0.5
C) r = 0.85
D) r = -0.9

**Correct Answer:** C

**Explanation:** Correlation interpretation: |r| < 0.4 = weak, 0.4-0.7 = moderate, >0.7 = strong. r = 0.85 indicates strong positive correlation. r = -0.9 is strong but negative. r = 0.5 is only moderate. Note: strong correlation doesn't prove causation, but suggests a relationship worth investigating.

---

### Question 6
You test whether a new LED spectrum increases lettuce yield. Control: 4.2 ± 0.5 lbs/plant, Treatment: 4.8 ± 0.6 lbs/plant. t-test gives p=0.08. What should you conclude?

A) The LED increases yield significantly
B) No significant difference at α=0.05
C) The LED decreases yield
D) The test is invalid

**Correct Answer:** B

**Explanation:** With p=0.08 > 0.05, we fail to reject the null hypothesis. While the treatment shows higher mean yield, the difference is not statistically significant at the conventional α=0.05 level. This could indicate inadequate sample size or genuine lack of effect. Consider repeating with larger sample.

---

### Question 7
What is the purpose of calculating R² (coefficient of determination) in regression analysis?

A) Tests statistical significance
B) Measures proportion of variance explained by the model
C) Identifies outliers
D) Calculates prediction intervals

**Correct Answer:** B

**Explanation:** R² indicates how much of the variation in the dependent variable is explained by the independent variable(s). R²=0.75 means 75% of yield variation is explained by temperature, with 25% due to other factors. R² ranges from 0 (no explanatory power) to 1 (perfect prediction).

---

### Question 8
When comparing three different nutrient formulations, which statistical test is appropriate?

A) t-test
B) ANOVA (Analysis of Variance)
C) Chi-square test
D) Correlation analysis

**Correct Answer:** B

**Explanation:** ANOVA compares means across three or more groups simultaneously. Using multiple t-tests inflates Type I error (false positives). ANOVA tests whether at least one formulation differs significantly, then post-hoc tests (Tukey, Bonferroni) identify which specific pairs differ.

---

### Question 9
Daily harvest data shows mean = 50 lbs, median = 48 lbs. What does this suggest about the distribution?

A) Normal distribution
B) Left-skewed distribution
C) Right-skewed distribution
D) Bimodal distribution

**Correct Answer:** C

**Explanation:** When mean > median, the distribution is right-skewed (positive skew) with a long tail toward higher values. This is common in harvest data when occasional high-yield days pull the mean upward. For symmetric distributions, mean ≈ median. For left-skewed, mean < median.

---

### Question 10
A quality control chart shows pH measurements with UCL=7.5, LCL=6.0, and 8 consecutive points below the center line. What does this indicate?

A) Random variation, system is in control
B) Special cause variation, investigate the process
C) Measurement error
D) Normal seasonal pattern

**Correct Answer:** B

**Explanation:** Eight consecutive points on one side of the center line violate control chart rules, indicating non-random pattern (special cause). Even though all points are within control limits (6.0-7.5), this pattern suggests systematic shift. Possible causes: calibration drift, process change, or seasonal effect requiring investigation.

---

**End of Quiz 5**
