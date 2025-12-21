# Module 13: Critical Evaluation

## Learning Objectives

By the end of this module, you will be able to:
1. Systematically evaluate research quality
2. Identify methodological strengths and weaknesses
3. Assess bias and conflicts of interest
4. Judge the generalizability of findings
5. Integrate evidence from multiple sources
6. Make evidence-informed decisions

---

## Framework for Critical Evaluation

### The CRAAP Test (Revisited)

```
┌─────────────────────────────────────────────────────────────────────┐
│                   EVALUATING RESEARCH QUALITY                       │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  CURRENCY     Is the information current?                           │
│  ├─ Publication date                                               │
│  ├─ Field evolution (older OK for foundational work)               │
│  └─ Outdated methods or interpretations?                           │
│                                                                     │
│  RELEVANCE    Does it address your question?                        │
│  ├─ Similar system/species/context                                 │
│  ├─ Appropriate scope                                              │
│  └─ Target audience match                                          │
│                                                                     │
│  AUTHORITY    Who conducted the research?                           │
│  ├─ Author credentials and expertise                               │
│  ├─ Institutional affiliation                                      │
│  └─ Journal reputation (peer review, impact factor)                │
│                                                                     │
│  ACCURACY     Is the information reliable?                          │
│  ├─ Appropriate methods                                            │
│  ├─ Sufficient sample size                                         │
│  ├─ Statistical rigor                                              │
│  ├─ Data support conclusions                                       │
│  └─ References to credible sources                                 │
│                                                                     │
│  PURPOSE      Why was it written?                                   │
│  ├─ Scientific inquiry vs. commercial promotion                    │
│  ├─ Conflicts of interest disclosed                                │
│  ├─ Funding sources noted                                          │
│  └─ Balanced presentation                                          │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Evaluating Study Design

### Internal Validity

**Question:** Does the study measure what it claims to measure?

**Threats to Internal Validity:**

| Threat | Description | Example | Impact |
|--------|-------------|---------|--------|
| **Confounding** | Unmeasured variable affects both IV and DV | Season coincides with treatment | Cannot isolate treatment effect |
| **Selection bias** | Non-random assignment | Best systems get new treatment | Overestimates effect |
| **Measurement error** | Inconsistent or inaccurate measurement | Uncalibrated pH meters | Unreliable data |
| **Attrition** | Differential dropout | Sick fish removed from one treatment only | Biased results |
| **Maturation** | Changes over time unrelated to treatment | Plants naturally grow larger | Confuses growth with treatment |
| **History** | External events during study | Power outage affects some systems | Unknown effect |

**Evaluating Internal Validity:**

**Questions to Ask:**
1. Was randomization used?
2. Were groups equivalent at baseline?
3. Were all variables controlled except treatment?
4. Was measurement standardized and blind?
5. Were dropouts handled appropriately?
6. Were statistical tests appropriate?

### External Validity

**Question:** Can results be generalized beyond this specific study?

**Considerations:**

**Population:**
- How representative was the sample?
- Species, varieties, strains used
- Geographic location and climate
- System scale (lab vs. commercial)

**Setting:**
- Controlled lab vs. real-world conditions
- Artificial vs. natural environment
- Monitored research station vs. working farm

**Time:**
- Season of study
- Duration (short-term vs. long-term)
- Historical context

**Example:**

```
Study: LED effects on basil in controlled growth chamber
- Species: One basil variety
- Location: University laboratory
- Duration: 4 weeks
- Conditions: 25°C, 60% RH, 16h photoperiod

Generalizability Questions:
✓ Likely applies to other basil varieties?
  Possibly, but needs verification
✓ Applies to commercial greenhouses?
  Unknown—different environmental control
✓ Applies year-round?
  Unknown—only tested in optimal conditions
✓ Long-term effects?
  Unknown—only 4 weeks
```

**Red Flags for Limited Generalizability:**
- Single site/system
- Optimal conditions only
- Unrealistic protocols
- Short duration
- Small sample from narrow population

---

## Evaluating Methods

### Sample Size and Power

**Questions:**

1. **Was sample size adequate?**
   - Power analysis reported?
   - Sample size justified?
   - Sufficient for detecting meaningful effects?

2. **Was replication appropriate?**
   - True replication vs. pseudoreplication?
   - Independent experimental units?

**Red Flags:**
- No justification for sample size
- Obvious pseudoreplication (e.g., n=100 but all from one tank)
- Very small n without acknowledgment of limitation
- Post-hoc power analysis only (controversial)

### Experimental Design

**Questions:**

1. **Was design appropriate for research question?**
   - Observational vs. experimental
   - Cross-sectional vs. longitudinal
   - Appropriate controls

2. **Were variables properly defined?**
   - Independent variables clearly stated
   - Dependent variables measurable
   - Confounding variables identified and controlled

3. **Was randomization used correctly?**
   - Treatment assignment random?
   - Blocking appropriate if used?

**Example Evaluation:**

```
Study: "Effect of stocking density on plant growth"

Design: 3 densities (10, 20, 30 kg/m³), 3 systems per density

STRENGTHS:
✓ Multiple levels of IV (can see dose-response)
✓ Adequate replication (n=3 per treatment)
✓ Appropriate controls (all other variables held constant)

WEAKNESSES:
✗ Small sample size (low power for small effects)
✗ No information on randomization procedure
✗ Single time point (could be confounded with tank age)
```

### Measurement Quality

**Questions:**

1. **Were measurements valid?**
   - Appropriate instruments/methods?
   - Validated measurement tools?
   - Measured what was intended?

2. **Were measurements reliable?**
   - Repeated measurements consistent?
   - Inter-rater reliability for subjective measures?
   - Calibration procedures described?

3. **Was bias minimized?**
   - Blinding used when possible?
   - Standardized protocols?
   - Measurement error quantified?

**Red Flags:**
- Vague methods ("water quality was measured")
- Unvalidated techniques
- Subjective measures without reliability assessment
- No quality control procedures

---

## Evaluating Statistics

### Appropriate Statistical Tests

**Questions:**

1. **Was the right test used?**
   - Match data type and distribution?
   - Assumptions checked?
   - Correct test for design?

2. **Were results reported completely?**
   - Test statistic, df, p-value?
   - Effect sizes?
   - Confidence intervals?

**Common Statistical Issues:**

| Issue | Problem | Impact |
|-------|---------|--------|
| **Multiple testing** | Many tests without correction | Inflated Type I error |
| **P-hacking** | Testing until significant | False positives |
| **Selective reporting** | Only significant results shown | Publication bias |
| **Assumption violations** | Using parametric tests on non-normal data | Unreliable p-values |
| **Pseudoreplication** | Treating non-independent samples as independent | Inflated significance |
| **No effect size** | Only p-values reported | Can't judge importance |

### Checking Assumptions

**Look for:**
- Statement of assumptions checked
- Diagnostic plots (residuals, Q-Q plots)
- Normality and homogeneity tests
- Transformations or non-parametric alternatives if needed

**Red Flag:**
"Assumptions were met" with no supporting evidence

### Results Interpretation

**Questions:**

1. **Do conclusions follow from data?**
   - Logical connection between results and conclusions?
   - Overgeneralization?
   - Alternative explanations considered?

2. **Are limitations acknowledged?**
   - Honest about study constraints?
   - Appropriate caveats?

3. **Is statistical significance overemphasized?**
   - Practical significance discussed?
   - Effect sizes reported?
   - "Trends" (p>0.05) overinterpreted?

**Warning Signs:**

```
OVERSTATED:
"This proves that LED lighting is superior."

APPROPRIATE:
"These results suggest LED lighting may improve yields,
though further research is needed to confirm effects across
varieties and production systems."

MISLEADING:
"Although not significant (p=0.09), there was a trend..."

HONEST:
"No significant difference was detected (p=0.09), possibly
due to limited statistical power (observed power = 0.35)."
```

---

## Identifying Bias

### Types of Bias

```
┌─────────────────────────────────────────────────────────────────────┐
│                        RESEARCH BIAS                                │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  SELECTION BIAS                                                     │
│  └─► Non-random selection of participants/units                    │
│      Example: Choosing healthiest plants for treatment             │
│                                                                     │
│  PERFORMANCE BIAS                                                   │
│  └─► Systematic differences in care between groups                 │
│      Example: Treating experimental systems more carefully         │
│                                                                     │
│  DETECTION BIAS                                                     │
│  └─► Systematic differences in outcome assessment                  │
│      Example: Knowing treatment when measuring plants              │
│                                                                     │
│  ATTRITION BIAS                                                     │
│  └─► Systematic differences in withdrawals                         │
│      Example: Removing sick fish only from control group           │
│                                                                     │
│  REPORTING BIAS                                                     │
│  └─► Selective reporting of outcomes or results                    │
│      Example: Publishing only significant findings                 │
│                                                                     │
│  PUBLICATION BIAS                                                   │
│  └─► Journals prefer positive results                              │
│      Example: File drawer problem (unpublished null results)       │
│                                                                     │
│  FUNDING BIAS                                                       │
│  └─► Results favor funder's interests                              │
│      Example: Industry-sponsored research showing product benefit  │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Conflict of Interest

**Questions to Ask:**

1. **Who funded the research?**
   - Government grant (neutral)
   - Industry sponsor (potential bias)
   - Funding source disclosed?

2. **Do authors have financial interests?**
   - Consultancies
   - Patents
   - Stock ownership
   - Employment

3. **Are conflicts disclosed?**
   - Clear statement (even if none)
   - Transparent about relationships

**Example Conflict of Interest Statements:**

**Good (transparent):**
"This work was supported by XYZ Corporation. Author JS serves as a paid consultant for XYZ Corporation. Authors AB and CD declare no conflicts of interest."

**Red Flag (vague or absent):**
"No conflicts of interest" when study was industry-funded

**Not Necessarily Bias:**
Funding source alone doesn't invalidate research, but warrants scrutiny of:
- Study design (was it rigorous?)
- Results interpretation (balanced?)
- Comparators (fair controls?)

---

## Assessing Evidence Quality

### Evidence Hierarchy

```
        HIGH
         ┌─────────────────────┐
         │   Systematic         │
         │   Reviews &          │
         │   Meta-Analyses      │
         ├─────────────────────┤
         │   Randomized         │
         │   Controlled         │
         │   Trials (RCTs)      │
         ├─────────────────────┤
         │   Cohort Studies     │
         │   Controlled Exps    │
         ├─────────────────────┤
         │   Case-Control       │
         │   Studies            │
         ├─────────────────────┤
         │   Cross-Sectional    │
         │   Surveys            │
         ├─────────────────────┤
         │   Case Reports       │
         │   Case Series        │
         ├─────────────────────┤
         │   Expert Opinion     │
         │   Anecdotal          │
         └─────────────────────┘
        LOW
```

**Note:** Quality varies within each level. A poorly conducted RCT may be less reliable than a well-conducted observational study.

### Systematic Reviews and Meta-Analyses

**Strengths:**
- Comprehensive literature search
- Combines multiple studies
- Greater statistical power
- Can detect patterns across studies

**Evaluate:**
- Was search systematic and reproducible?
- Were inclusion criteria clear?
- Was study quality assessed?
- Was heterogeneity addressed?
- Were unpublished studies sought? (mitigates publication bias)

**Red Flags:**
- Narrative review presented as systematic
- Mixing incompatible studies
- High heterogeneity not explained
- No quality assessment of included studies

---

## Practical Evaluation: Case Study

### Study to Evaluate

**Title:** "LED Lighting Increases Basil Yield in Hydroponic Systems"

**Abstract Summary:**
- Compared red LED, blue LED, and fluorescent control
- 12 plants per treatment (36 total)
- Grown for 4 weeks
- Red LED produced highest yield (p<0.05)
- Funded by LED-Grow Inc.

**Evaluate This Study:**

**1. Study Design:**

**Strengths:**
- Three treatment groups (allows comparison)
- Randomized assignment mentioned
- Adequate duration for basil

**Weaknesses:**
- Sample size modest (n=12 per group)
- Single variety tested
- Lab conditions may not reflect commercial

**2. Methods:**

**Look For:**
- Light intensity specified and equalized?
- Photoperiod consistent?
- All other conditions controlled (temp, nutrients)?
- Measurement procedures (fresh weight? dry weight?)
- Independent systems or shared reservoir?

**Red Flags if:**
- Light intensity not equalized (confounds spectrum with intensity)
- Pseudoreplication (all LEDs in one reservoir)

**3. Statistics:**

**Appropriate:**
- One-way ANOVA with post-hoc test
- Effect size reported
- Assumptions checked

**Red Flags if:**
- Multiple t-tests instead of ANOVA
- No effect size
- "Trend" language for non-significant results

**4. Conflicts of Interest:**

**Question:**
- Study funded by LED-Grow Inc. → potential bias

**Assess:**
- Was study pre-registered?
- Independent verification?
- Results seem too good to be true?
- Fair comparison to controls?
- Limitations acknowledged?

**5. Conclusions:**

**Appropriate:**
"Red LED improved basil yield compared to fluorescent lighting under controlled conditions. Further research is needed to validate effects in commercial production and with other varieties."

**Overreach:**
"LED lighting is superior to all other lighting for all crops."

### Overall Assessment

**Rate Study Quality:**
- **High:** Rigorous methods, large sample, randomized, controlled, appropriate analysis, limitations noted
- **Medium:** Generally sound but with limitations (sample size, single site, etc.)
- **Low:** Major methodological flaws, bias evident, inappropriate analysis

**Confidence in Results:**
- **High:** Would implement based on this study alone
- **Moderate:** Useful evidence but seek corroboration
- **Low:** Suggestive only; need replication

**Applicability to Your Context:**
- **High:** Directly relevant (same species, system, scale)
- **Moderate:** Similar but not identical conditions
- **Low:** Different enough to require verification

---

## Integrating Multiple Sources

### Triangulation

**Use multiple types of evidence:**
- Experimental studies (causation)
- Observational studies (real-world patterns)
- Review articles (synthesis)
- Expert opinion (practical experience)
- Economic analyses (feasibility)

### Dealing with Conflicting Findings

**When studies disagree:**

1. **Compare study quality**
   - Better-designed studies carry more weight
   - Larger samples more reliable
   - More recent may be more relevant

2. **Look for explanations**
   - Different methods?
   - Different populations/species?
   - Different conditions?
   - Different outcome measures?

3. **Consider totality of evidence**
   - Majority of high-quality studies agree?
   - Dose-response relationship consistent?
   - Biologically plausible?

**Example:**

```
Question: Does high stocking density improve plant growth?

Study A: Yes (n=100, commercial scale, 12 months)
Study B: No (n=12, lab scale, 4 weeks)
Study C: Yes (n=50, pilot scale, 6 months)
Study D: Mixed (n=30, commercial scale, 3 months, depends on species)

Synthesis:
Weight evidence toward larger, longer, more realistic studies (A, C, D).
Consider context-dependency (Study D suggests species matters).
Study B's short duration may not capture long-term effects.
```

---

## Making Evidence-Informed Decisions

### Decision Framework

```
1. DEFINE QUESTION
   What specifically do you need to know?

2. SEARCH EVIDENCE
   Find relevant, high-quality sources

3. CRITICALLY APPRAISE
   Assess validity, reliability, applicability

4. INTEGRATE WITH CONTEXT
   Your specific conditions, constraints, values

5. IMPLEMENT & EVALUATE
   Try in your system, monitor results

6. ITERATE
   Update as new evidence emerges
```

### Strength of Recommendation

**Grade A (Strong):**
- High-quality evidence
- Large effect
- Low cost/risk
- Directly applicable
- **Recommendation:** Implement

**Grade B (Moderate):**
- Moderate evidence quality
- Moderate effect
- Some cost/risk
- Fairly applicable
- **Recommendation:** Consider implementation

**Grade C (Weak):**
- Low evidence quality
- Small or uncertain effect
- Higher cost/risk
- Limited applicability
- **Recommendation:** Case-by-case decision

**Grade I (Insufficient):**
- Inadequate evidence
- **Recommendation:** Seek more evidence before implementing

---

## Red Flags Checklist

**Be Skeptical If:**
- [ ] No peer review
- [ ] Results seem too good to be true
- [ ] Major conflicts of interest not disclosed
- [ ] Methodology vague or unreproducible
- [ ] Extraordinary claims without extraordinary evidence
- [ ] Exclusively positive results (no null findings)
- [ ] P-hacking or selective reporting suspected
- [ ] Conclusions don't match data
- [ ] Limitations not acknowledged
- [ ] Data not shared or available

---

## Practical Exercise

### Critical Appraisal Assignment

**Task:** Find and evaluate a published research article on aquaponics or CEA

**Use this template:**

1. **Citation:** Full reference

2. **Study Design:** Experimental? Observational? RCT?

3. **Sample:** Size, selection, representativeness

4. **Methods:** Appropriate? Clearly described? Reproducible?

5. **Statistics:** Correct tests? Assumptions checked? Effect sizes?

6. **Results:** Support conclusions? Alternative explanations?

7. **Bias:** Potential sources? Conflicts disclosed?

8. **Generalizability:** Applies to your context?

9. **Overall Quality:** High/Medium/Low

10. **Recommendation:** Would you implement findings? Why or why not?

---

## Key Takeaways

1. **Critical evaluation** is essential for evidence-based practice
2. **Internal validity:** Does study measure what it claims?
3. **External validity:** Can results generalize to your context?
4. **Bias assessment:** Consider funding, conflicts, and methodological issues
5. **Evidence hierarchy:** Higher-level studies generally more reliable
6. **Triangulation:** Integrate multiple sources of evidence
7. **Conflict doesn't invalidate:** Even conflicting studies provide information
8. **Context matters:** Best evidence + your situation = informed decision

---

## Next Module Preview

**Module 14: Research Project**

Learn about:
- Developing research proposals
- Planning a complete study
- Creating timelines and budgets
- Integrating all course concepts
- Final project requirements

---

*Module 13 Complete | Course 309: Research Methodology for Agriculture*
