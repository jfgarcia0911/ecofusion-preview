# Quiz 5: Sampling Methods

**Course:** 309 - Research Methodology for Agriculture
**Module:** 5 - Sampling Methods
**Time Limit:** 20 minutes
**Points:** 10 points
**Passing Score:** 80%

---

## Multiple Choice (1 point each)

**1. The key difference between a population parameter and a sample statistic is:**

a) Parameters are calculated, statistics are measured
b) Parameters describe populations (μ, σ), statistics describe samples (x̄, s)
c) There is no difference
d) Parameters are always larger than statistics

**Answer:** b

---

**2. In simple random sampling, each unit has:**

a) Different probabilities of selection
b) Equal probability of selection
c) No probability of selection
d) Probability based on strata size

**Answer:** b

---

**3. Which sampling method selects every kth unit after a random start?**

a) Simple random sampling
b) Stratified sampling
c) Systematic sampling
d) Cluster sampling

**Answer:** c

---

**4. Stratified random sampling is most beneficial when:**

a) The population is homogeneous
b) Subgroups are similar within but different between strata
c) You want to reduce costs
d) Sample size is very small

**Answer:** b

---

**5. The main advantage of cluster sampling is:**

a) Higher precision than simple random sampling
b) Cost-effectiveness for geographically dispersed populations
c) Simpler statistical analysis
d) Smaller sample size requirements

**Answer:** b

---

**6. Which is NOT a probability sampling method?**

a) Stratified random sampling
b) Systematic sampling
c) Convenience sampling
d) Cluster sampling

**Answer:** c

---

**7. For a large population (N=100,000), what sample size is needed to estimate a proportion with 95% confidence and ±5% margin of error?**

a) About 100
b) About 384
c) About 1,000
d) About 5,000

**Answer:** b

---

**8. Non-response bias occurs when:**

a) The sample size is too small
b) Respondents differ systematically from non-respondents
c) Questions are poorly worded
d) Random sampling is not used

**Answer:** b

---

## Calculation (2 points)

**9. Calculate the systematic sampling interval (k) for selecting a sample of n=50 from a population of N=800. If the random start is 7, list the first 5 selected units.**

**Show your work.**

**Example Answer:**
```
k = N/n = 800/50 = 16

Random start = 7

Selected units:
1st: 7
2nd: 7 + 16 = 23
3rd: 23 + 16 = 39
4th: 39 + 16 = 55
5th: 55 + 16 = 71

First 5 units: 7, 23, 39, 55, 71
```

---

## Short Answer (2 points)

**10. Explain the difference between cluster sampling and stratified sampling. When would you choose each method for agricultural research?**

**Example Answer:**

**Cluster Sampling:**
- Divide population into clusters, randomly select some clusters, sample all units within selected clusters
- Units within clusters are similar (homogeneous)
- Choose when: Population is geographically dispersed, complete frame unavailable, need cost savings
- Example: Randomly select 5 farms, measure all plants on those farms

**Stratified Sampling:**
- Divide population into strata, randomly sample within each stratum
- Units within strata are similar, but strata differ from each other
- Choose when: Want to ensure all subgroups represented, strata have different characteristics, want increased precision
- Example: Sample growers stratified by farm size (small, medium, large) to ensure all sizes represented

**Key difference:** In stratified, you sample FROM all strata; in cluster, you sample ALL from SOME clusters.

---

## Application (2 points each)

**11. Design a sampling plan for the following scenario: You want to estimate average dissolved oxygen (DO) levels in a commercial aquaponic facility with 8 fish tanks, 12 grow beds, and 1 sump. You can take 15 water samples total. What sampling method would you use and why? Describe your specific sampling plan.**

**Example Answer:**

**Method:** Stratified Random Sampling

**Justification:** Different system components have different DO characteristics. Stratified sampling ensures representation from all zones and increases precision.

**Sampling Plan:**
- **Stratum 1 - Fish tanks:** 6 samples (proportional to importance and variation)
- **Stratum 2 - Grow beds:** 6 samples
- **Stratum 3 - Sump:** 3 samples

**Implementation:**
- Randomly select 6 tanks from 8 available fish tanks
- Randomly select 6 beds from 12 available grow beds
- Sample sump at 3 random locations (or 3 random times if single point)

This ensures all system components are represented while accounting for their different DO profiles.

---

**12. A researcher surveyed 200 greenhouse growers about automation adoption, but only 85 responded (42.5% response rate). When comparing early responders (first 50) to late responders (last 35), they found early responders reported 65% automation adoption while late responders reported 40% adoption. What does this suggest about potential bias? What should the researcher do?**

**Example Answer:**

**Potential Bias:**
This pattern suggests significant non-response bias. Late responders (who required more reminders) are likely more similar to non-responders than early responders are. The 25% difference (65% vs 40%) between early and late responders indicates non-respondents may have even lower automation adoption rates. The reported overall average likely overestimates true automation adoption because non-adopters may be less likely to respond.

**Actions:**
1. Weight the results to account for the early/late responder difference
2. Conduct follow-up with non-responders (phone calls, incentives) to increase response rate
3. Compare respondent characteristics to known population characteristics
4. Report the low response rate and potential bias as a limitation
5. Consider the 40% (late responder rate) as a more conservative estimate
6. Do not generalize findings without acknowledging the serious non-response bias

---

## Scoring Guide

| Question | Points | Topic |
|----------|--------|-------|
| 1-8 | 1 each (8 total) | Sampling concepts |
| 9 | 2 | Systematic sampling calculation |
| 10 | 2 | Comparing methods |
| 11-12 | 2 each (4 total) | Application and bias recognition |
| **Total** | **16 points** | |

**Note:** Quiz is out of 16 points, scaled to 10 points for gradebook.

---

*Quiz 5 | Course 309: Research Methodology for Agriculture*
