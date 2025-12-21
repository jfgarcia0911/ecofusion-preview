# Module 5: Sampling Methods

## Learning Objectives

By the end of this module, you will be able to:
1. Distinguish between population and sample
2. Select appropriate sampling methods for different research scenarios
3. Implement probability sampling techniques
4. Recognize bias in non-probability sampling
5. Calculate required sample sizes for surveys
6. Avoid common sampling errors

---

## Population vs. Sample

### Definitions

```
┌─────────────────────────────────────────────────────────────────────┐
│                  POPULATION AND SAMPLE                              │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  POPULATION (N)                                                     │
│  ├─► Complete set of all possible units                           │
│  ├─► Has parameters (μ, σ)                                        │
│  └─► Example: All aquaponic growers in United States              │
│                                                                     │
│  SAMPLE (n)                                                         │
│  ├─► Subset selected from population                              │
│  ├─► Has statistics (x̄, s)                                        │
│  └─► Example: 100 randomly selected aquaponic growers             │
│                                                                     │
│  PURPOSE OF SAMPLING                                                │
│  └─► Use sample statistics to estimate population parameters      │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Why Sample Instead of Census?

| Reason | Explanation | Example |
|--------|-------------|---------|
| **Cost** | Census too expensive | Surveying all CEA operations nationally |
| **Time** | Census takes too long | Need timely data for decision |
| **Feasibility** | Population too large or inaccessible | All hydroponic lettuce plants globally |
| **Destructive testing** | Measurement destroys unit | Testing fish for mercury content |
| **Accuracy** | Well-designed sample can be more accurate | Smaller, well-trained team vs. large census team |

### Parameters vs. Statistics

| Population Parameter | Sample Statistic | Description |
|---------------------|------------------|-------------|
| μ (mu) | x̄ (x-bar) | Mean |
| σ (sigma) | s | Standard deviation |
| σ² | s² | Variance |
| ρ (rho) | r | Correlation coefficient |
| P | p | Proportion |

---

## Sampling Frame

### Definition

**Sampling Frame:** Complete list of all units in the target population from which sample is drawn

### Quality of Sampling Frame

**Good Sampling Frame:**
- Complete (includes all population units)
- Accurate (current, correct information)
- Appropriate (matches target population)
- No duplication

**Common Problems:**

| Problem | Description | Example |
|---------|-------------|---------|
| **Undercoverage** | Some population units not in frame | Phone directory misses cell-only users |
| **Overcoverage** | Frame includes units not in population | List includes inactive growers |
| **Duplication** | Same unit listed multiple times | Grower listed under multiple farm names |
| **Clustering** | Units not independent | Multiple greenhouses owned by same company |

### Examples of Sampling Frames

**Agricultural Research:**
- List of certified organic farms (USDA database)
- Registry of aquaponic growers (industry association)
- Greenhouse operations (state agricultural census)
- Fish hatchery licenses (state fisheries department)
- Conference attendee list

---

## Probability Sampling Methods

### Characteristics

**Probability Sampling:**
- Every unit has known, non-zero probability of selection
- Selection is random
- Allows calculation of sampling error
- Supports statistical inference

### 1. Simple Random Sampling (SRS)

**Definition:** Every unit has equal probability of selection

**Process:**
1. Number all units in sampling frame (1 to N)
2. Use random number generator
3. Select n units corresponding to random numbers

```
┌────────────────────────────────────────────────────────────────┐
│              SIMPLE RANDOM SAMPLING                            │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  Population (N=20):                                            │
│  ┌──┬──┬──┬──┬──┬──┬──┬──┬──┬──┐                              │
│  │1 │2 │3 │4 │5 │6 │7 │8 │9 │10│                              │
│  └──┴──┴──┴──┴──┴──┴──┴──┴──┴──┘                              │
│  ┌──┬──┬──┬──┬──┬──┬──┬──┬──┬──┐                              │
│  │11│12│13│14│15│16│17│18│19│20│                              │
│  └──┴──┴──┴──┴──┴──┴──┴──┴──┴──┘                              │
│                                                                │
│  Random selection (n=5): 3, 7, 12, 15, 19                     │
│                                                                │
│  ┌──────────────────────────────────────────┐                 │
│  │ Each unit has probability = n/N = 5/20   │                 │
│  │            = 0.25 or 25%                 │                 │
│  └──────────────────────────────────────────┘                 │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

**Advantages:**
- Unbiased
- Simple to understand and implement
- Straightforward statistical analysis

**Disadvantages:**
- Requires complete sampling frame
- May miss small subgroups
- Can be expensive if population is spread out

**Example:**
"Survey 50 aquaponic growers from list of 500 to assess average system size."

### 2. Systematic Sampling

**Definition:** Select every kth unit after random start

**Process:**
1. Calculate sampling interval: k = N/n
2. Random start between 1 and k
3. Select every kth unit thereafter

```
┌────────────────────────────────────────────────────────────────┐
│              SYSTEMATIC SAMPLING                               │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  Population N=100, desired sample n=10                         │
│  Sampling interval k = N/n = 100/10 = 10                       │
│                                                                │
│  Random start: 3 (between 1 and 10)                            │
│                                                                │
│  Selected units: 3, 13, 23, 33, 43, 53, 63, 73, 83, 93        │
│                                                                │
│  1  2 [3] 4  5  6  7  8  9  10 11 12[13]14 15 ... 93 94 95... │
│     ↑                          ↑                  ↑            │
│   Start                      +10                +10            │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

**Advantages:**
- Easy to implement
- Spreads sample across population
- No complete list needed (can sample as you go)

**Disadvantages:**
- Periodic patterns can cause bias
- If list has trend, can be biased
- Not truly random (once start selected, rest determined)

**Example:**
"Sample every 10th fish from production tank for weight measurement (after random start)."

**Warning:** Avoid if population has periodic pattern at interval k

### 3. Stratified Random Sampling

**Definition:** Divide population into homogeneous subgroups (strata), then randomly sample within each stratum

**Process:**
1. Identify stratification variable
2. Divide population into strata
3. Determine sample size per stratum
4. Random sample within each stratum

```
┌────────────────────────────────────────────────────────────────┐
│            STRATIFIED RANDOM SAMPLING                          │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  POPULATION stratified by farm size:                           │
│                                                                │
│  ┌─────────────────────────────────────────┐                  │
│  │ STRATUM 1: Small farms (N₁=400)         │                  │
│  │ → Random sample n₁=40                   │                  │
│  └─────────────────────────────────────────┘                  │
│  ┌─────────────────────────────────────────┐                  │
│  │ STRATUM 2: Medium farms (N₂=80)         │                  │
│  │ → Random sample n₂=8                    │                  │
│  └─────────────────────────────────────────┘                  │
│  ┌─────────────────────────────────────────┐                  │
│  │ STRATUM 3: Large farms (N₃=20)          │                  │
│  │ → Random sample n₂=2                    │                  │
│  └─────────────────────────────────────────┘                  │
│                                                                │
│  Total: N=500, n=50 (proportional allocation)                 │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

**Allocation Methods:**

| Method | Formula | When to Use |
|--------|---------|-------------|
| **Proportional** | nᵢ = n × (Nᵢ/N) | Strata have similar variability |
| **Equal** | nᵢ = n/k (k=number of strata) | Want to compare strata |
| **Optimal** | nᵢ ∝ Nᵢ × σᵢ | Minimize variance |

**Advantages:**
- More precise than SRS (reduces variance)
- Ensures representation of all subgroups
- Can analyze subgroups separately

**Disadvantages:**
- Requires knowledge of population composition
- More complex analysis
- Need separate frame for each stratum

**Example:**
"Survey growers stratified by system type (coupled, decoupled, hybrid) to ensure all systems represented."

### 4. Cluster Sampling

**Definition:** Divide population into clusters, randomly select clusters, sample all units within selected clusters

**Process:**
1. Divide population into clusters
2. Randomly select clusters
3. Sample all (or subsample) units within selected clusters

```
┌────────────────────────────────────────────────────────────────┐
│                 CLUSTER SAMPLING                               │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  Population divided into 10 clusters (greenhouses):            │
│                                                                │
│  C1  C2  C3  C4  C5  C6  C7  C8  C9  C10                       │
│  █   ░   █   ░   ░   █   ░   ░   ░   ░                        │
│  ↑       ↑           ↑                                         │
│  Selected clusters (3 randomly chosen)                         │
│                                                                │
│  Within selected clusters, measure ALL units or subsample      │
│                                                                │
│  Two-Stage Cluster Sampling:                                   │
│  Stage 1: Select clusters (greenhouses)                        │
│  Stage 2: Select units within clusters (plants)               │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

**Advantages:**
- Cost-effective for geographically dispersed populations
- No complete frame needed (only for selected clusters)
- Practical for field research

**Disadvantages:**
- Less precise than SRS (units within clusters are similar)
- Needs larger sample size for same precision
- Complex analysis (accounts for clustering)

**Example:**
"Select 5 farms randomly, then measure water quality from all tanks on those farms."

**Cluster vs. Stratified:**
- **Stratified:** Sample FROM all strata (heterogeneous between, homogeneous within)
- **Cluster:** Sample ALL from SOME clusters (homogeneous within, heterogeneous between)

### 5. Multistage Sampling

**Definition:** Sampling in multiple stages, often combining methods

**Example Structure:**
1. **Stage 1:** Select states (cluster sampling)
2. **Stage 2:** Select counties within states (cluster sampling)
3. **Stage 3:** Select farms within counties (stratified by size)
4. **Stage 4:** Select plants within farms (simple random)

**Used in:**
- Large-scale agricultural surveys
- National studies
- Complex populations

---

## Non-Probability Sampling Methods

### Characteristics

**Non-Probability Sampling:**
- Selection not random
- Unknown probability of selection
- Cannot calculate sampling error
- No statistical inference to population
- Useful for exploratory research

### Common Non-Probability Methods

| Method | Description | When to Use | Limitations |
|--------|-------------|-------------|-------------|
| **Convenience** | Sample easiest to access units | Pilot studies, quick feedback | Severe bias, not representative |
| **Purposive** | Deliberately select specific units | Expert opinions, specific criteria | Researcher bias |
| **Quota** | Meet predetermined quotas for subgroups | Market research | Similar to stratified but not random |
| **Snowball** | Existing subjects recruit future subjects | Hard-to-reach populations | Network bias |
| **Volunteer** | Self-selection by respondents | Surveys, online polls | Self-selection bias |

### When Non-Probability Sampling is Acceptable

- Exploratory research
- Qualitative studies
- Hypothesis generation
- Pretesting surveys
- Case studies
- Resource constraints preclude probability sampling

**Critical:** Cannot generalize findings to population

---

## Sample Size for Surveys

### Factors Affecting Sample Size

1. **Population size (N)** - Less important for large populations
2. **Desired precision (margin of error, e)** - Narrower interval requires larger n
3. **Confidence level (1-α)** - Higher confidence requires larger n
4. **Population variability (σ or p)** - More variable requires larger n
5. **Expected response rate** - Lower rate requires larger initial n

### Formula for Proportion

```
Sample size for estimating proportion (infinite population):

n = (Z²α/2 × p × (1-p)) / e²

Where:
Z²α/2 = Z-value squared (1.96² = 3.84 for 95% confidence)
p = expected proportion (use 0.5 if unknown, most conservative)
e = margin of error (desired precision)

Example:
Estimate proportion of growers using automation
95% confidence, ±5% margin of error, p=0.5

n = (1.96² × 0.5 × 0.5) / 0.05²
n = (3.84 × 0.25) / 0.0025
n = 0.96 / 0.0025
n = 384 growers
```

### Formula for Mean

```
Sample size for estimating mean:

n = (Z²α/2 × σ²) / e²

Where:
σ = population standard deviation (estimate from pilot study)
e = margin of error

Example:
Estimate average system size
95% confidence, ±10 m² precision
Estimated σ = 50 m² (from pilot data)

n = (1.96² × 50²) / 10²
n = (3.84 × 2500) / 100
n = 9600 / 100
n = 96 growers
```

### Finite Population Correction

**For small populations (n > 5% of N):**

```
n_adjusted = n / (1 + (n-1)/N)

Example:
Calculated n = 384
Population N = 500

n_adjusted = 384 / (1 + 383/500)
n_adjusted = 384 / 1.766
n_adjusted = 217
```

### Sample Size Table for Proportions

**95% Confidence, ±5% margin of error:**

| Population Size (N) | Sample Size (n) |
|---------------------|-----------------|
| 100 | 80 |
| 200 | 132 |
| 500 | 217 |
| 1,000 | 278 |
| 2,000 | 322 |
| 5,000 | 357 |
| 10,000 | 370 |
| 100,000 | 383 |
| 1,000,000+ | 384 |

**Key Insight:** Beyond ~5,000, population size has minimal effect on required sample size

### Adjusting for Response Rate

```
n_initial = n_required / expected_response_rate

Example:
Required sample: 300
Expected response rate: 60%

n_initial = 300 / 0.60 = 500

Need to contact 500 to get 300 responses
```

---

## Sampling Errors and Bias

### Types of Errors

```
┌─────────────────────────────────────────────────────────────────────┐
│                    SURVEY ERRORS                                    │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  SAMPLING ERROR (Random)                                            │
│  └─► Due to studying sample instead of entire population           │
│      Can be quantified (confidence intervals)                      │
│      Reduced by increasing sample size                             │
│                                                                     │
│  NON-SAMPLING ERROR (Systematic)                                    │
│  ├─► Selection bias                                                │
│  ├─► Non-response bias                                             │
│  ├─► Measurement bias                                              │
│  ├─► Processing errors                                             │
│  └─► Cannot be reduced by increasing sample size                   │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Selection Bias

**Causes:**
- Non-random sampling
- Poor sampling frame (undercoverage)
- Volunteer samples
- Convenience sampling

**Example:**
"Surveying only farms that attend conferences" → Misses non-attendees who may differ

### Non-Response Bias

**Causes:**
- Low response rate
- Respondents differ from non-respondents

**Mitigation:**
- Follow-up reminders
- Incentives
- Mixed-mode surveys (mail, online, phone)
- Weight adjustments for non-response
- Compare early vs. late responders

**Rule of Thumb:** Response rate > 60% is acceptable, > 75% is good

### Measurement Bias

**Causes:**
- Leading questions
- Poor question wording
- Interviewer effects
- Social desirability bias
- Recall bias

**Example:**
Leading: "Don't you agree that aquaponics is the best farming method?"
Better: "What is your opinion of aquaponics compared to other methods?"

---

## Practical Applications in CEA Research

### Sampling Plants

**Scenario:** Measure yield in commercial greenhouse with 10,000 lettuce plants

**Options:**

**1. Simple Random Sample:**
- Number all plants
- Randomly select 100
- Measure individually

**2. Systematic Sample:**
- Every 100th plant
- Random start
- Walk down rows

**3. Cluster Sample:**
- Randomly select 10 growing beds
- Measure all plants in selected beds
- Accounts for bed-level variation

**Best Choice:** Cluster sampling (practical, accounts for clustering by bed)

### Sampling Fish

**Scenario:** Estimate average weight of 500 tilapia in tank

**Challenge:** Cannot identify individual fish

**Solution:**
- Net random subsample (n=50)
- Minimize stress
- Weigh fish
- Return to tank
- Calculate mean and CI

**Consideration:** Fish may not be equally catchable (bias toward slower/larger fish)

### Sampling Water

**Scenario:** Assess water quality across aquaponic system

**Stratified Approach:**
- **Stratum 1:** Fish tanks (3 samples)
- **Stratum 2:** Biofilter (2 samples)
- **Stratum 3:** Grow beds (4 samples)
- **Stratum 4:** Sump (1 sample)

**Rationale:** Different zones have different characteristics

### Temporal Sampling

**Scenario:** Monitor daily variation in dissolved oxygen

**Systematic Sampling:**
- Measure every 4 hours
- 6 readings per 24-hour period
- Captures diurnal pattern

**Alternative - Stratified by Time:**
- Stratum 1: Night (12am-6am) - 1 sample
- Stratum 2: Morning (6am-12pm) - 2 samples
- Stratum 3: Afternoon (12pm-6pm) - 2 samples
- Stratum 4: Evening (6pm-12am) - 1 sample

---

## Common Sampling Mistakes

| Mistake | Consequence | Solution |
|---------|-------------|----------|
| **Convenience sampling for inference** | Biased results, not generalizable | Use probability sampling |
| **Insufficient sample size** | Low power, wide CIs | Power analysis beforehand |
| **Ignoring clustering** | Inflated Type I error rate | Account for clustering in analysis |
| **Poor sampling frame** | Coverage bias | Verify frame quality |
| **Low response rate** | Non-response bias | Follow-up, incentives |
| **Treating dependent samples as independent** | Incorrect statistics | Use appropriate methods (e.g., paired t-test) |

---

## Practical Exercise

### Design a Sampling Plan

**Scenario:**
"You want to assess the adoption rate of automation technologies among commercial aquaponic growers in the United States."

**Tasks:**

1. **Define the target population**

2. **Identify a potential sampling frame**

3. **Choose a sampling method and justify**

4. **Calculate required sample size** for:
   - 95% confidence
   - ±7% margin of error
   - Unknown proportion (use p=0.5)

5. **Identify potential sources of bias**

6. **Describe strategies to maximize response rate**

---

## Key Takeaways

1. **Probability sampling** enables statistical inference; non-probability sampling does not

2. **Common probability methods:**
   - Simple random: Equal probability for all units
   - Systematic: Every kth unit
   - Stratified: Random sample within subgroups
   - Cluster: Random selection of groups, sample all within

3. **Sample size** depends on desired precision, confidence level, and variability

4. **Larger populations** don't necessarily require proportionally larger samples

5. **Multiple error sources:** Both sampling (random) and non-sampling (systematic) errors affect results

6. **Practical considerations** in agriculture often favor cluster or systematic sampling

---

## Next Module Preview

**Module 6: Data Collection**

Learn about:
- Data collection instruments
- Measurement protocols
- Quality control procedures
- Data recording systems
- Sensor calibration
- Preventing data collection errors

---

*Module 5 Complete | Course 309: Research Methodology for Agriculture*
