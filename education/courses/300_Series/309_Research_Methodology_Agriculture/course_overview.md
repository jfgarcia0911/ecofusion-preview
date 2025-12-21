# Course 309: Research Methodology for Agriculture
## Course Overview & Syllabus

---

## Course Information

| Field | Details |
|-------|---------|
| **Course Number** | 309 |
| **Course Title** | Research Methodology for Agriculture |
| **Duration** | 14 hours |
| **Level** | Advanced |
| **Prerequisites** | Intermediate Certificate, Basic Statistics |
| **Format** | Online, Live, or Hybrid |
| **Price** | $449 |

---

## Course Description

Develop skills to conduct and evaluate agricultural research. This course covers experimental design, data collection, statistical analysis, and research communication for aquaponics and controlled environment agriculture research.

---

## Learning Outcomes

Upon successful completion, learners will be able to:
1. Design valid agricultural experiments
2. Collect and manage research data
3. Apply appropriate statistical analyses
4. Interpret and communicate research findings
5. Evaluate published research critically
6. Develop original research proposals

---

## Course Structure

| Module | Title | Duration |
|--------|-------|----------|
| 1 | Scientific Method in Agriculture | 1 hour |
| 2 | Literature Review | 1 hour |
| 3 | Experimental Design Fundamentals | 1 hour |
| 4 | Common Design Types | 1 hour |
| 5 | Sampling Methods | 1 hour |
| 6 | Data Collection | 1 hour |
| 7 | Statistical Analysis I | 1 hour |
| 8 | Statistical Analysis II | 1 hour |
| 9 | Statistical Software | 1 hour |
| 10 | Data Interpretation | 1 hour |
| 11 | Research Writing | 1 hour |
| 12 | Research Presentation | 1 hour |
| 13 | Critical Evaluation | 1 hour |
| 14 | Research Project | 1 hour |

---

## The Scientific Method

### Research Process Framework

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                    AGRICULTURAL RESEARCH PROCESS                             ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║   ┌─────────────────┐                                                        ║
║   │   OBSERVATION   │ ◄──────────────────────────────────┐                  ║
║   │ Notice patterns │                                     │                  ║
║   └────────┬────────┘                                     │                  ║
║            ▼                                              │                  ║
║   ┌─────────────────┐                                     │                  ║
║   │    QUESTION     │                                     │                  ║
║   │ What? Why? How? │                                     │                  ║
║   └────────┬────────┘                                     │                  ║
║            ▼                                              │                  ║
║   ┌─────────────────┐         ┌─────────────────┐        │                  ║
║   │  LITERATURE     │────────►│    HYPOTHESIS   │        │                  ║
║   │   REVIEW        │         │ Testable predict│        │                  ║
║   └─────────────────┘         └────────┬────────┘        │                  ║
║                                        ▼                  │                  ║
║                               ┌─────────────────┐        │                  ║
║                               │   EXPERIMENT    │        │                  ║
║                               │ Design & Execute│        │                  ║
║                               └────────┬────────┘        │                  ║
║                                        ▼                  │                  ║
║                               ┌─────────────────┐        │                  ║
║                               │     ANALYZE     │        │                  ║
║                               │  Statistical    │        │                  ║
║                               └────────┬────────┘        │                  ║
║                                        ▼                  │                  ║
║   ┌─────────────────┐         ┌─────────────────┐        │                  ║
║   │   COMMUNICATE   │◄────────│   CONCLUDE      │────────┘                  ║
║   │ Publish/Present │         │ Support/Reject  │  (Refine hypothesis)      ║
║   └─────────────────┘         └─────────────────┘                           ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

---

## Experimental Design Fundamentals

### Key Concepts

| Concept | Definition | Importance |
|---------|------------|------------|
| **Variable** | Factor that can change | Basis of measurement |
| **Treatment** | What you manipulate | Creates comparison |
| **Control** | Baseline comparison | Validates results |
| **Replication** | Repeated observations | Statistical power |
| **Randomization** | Random assignment | Reduces bias |
| **Blocking** | Grouping similar units | Controls variation |

### Variable Types

| Type | Description | Examples |
|------|-------------|----------|
| **Independent** | Manipulated by researcher | Nutrient concentration, light level |
| **Dependent** | Measured response | Yield, growth rate, quality |
| **Controlled** | Held constant | Temperature, photoperiod |
| **Confounding** | Unwanted influence | Equipment variation |

---

## Common Experimental Designs

### Design Selection Guide

| Design | When to Use | Complexity | Example |
|--------|-------------|------------|---------|
| **Completely Randomized (CRD)** | Uniform conditions | Simple | Comparing 3 nutrient formulas |
| **Randomized Complete Block (RCB)** | Known variation source | Moderate | Testing across greenhouse sections |
| **Latin Square** | Two sources of variation | Moderate | Location × time effects |
| **Factorial** | Multiple factors | Complex | Light × nutrients interaction |
| **Split-Plot** | Some factors hard to change | Complex | Irrigation × variety |

### Sample Size Determination

```
Sample Size Formula (comparing means):

n = 2(Zα/2 + Zβ)² × σ² / δ²

Where:
n = sample size per group
Zα/2 = Z-value for significance level (1.96 for α=0.05)
Zβ = Z-value for power (0.84 for 80% power)
σ = estimated standard deviation
δ = minimum detectable difference

Example:
To detect 10% yield difference with 80% power:
σ = 15% (estimated variability)
δ = 10% (difference to detect)
n = 2(1.96 + 0.84)² × 15² / 10²
n = 2(7.84) × 225 / 100 = 35.3 ≈ 36 per treatment
```

---

## Statistical Analysis Methods

### Choosing the Right Test

| Research Question | Data Type | Statistical Test |
|-------------------|-----------|------------------|
| Compare 2 group means | Continuous | t-test |
| Compare 3+ group means | Continuous | ANOVA |
| Relationship between variables | Continuous | Correlation/Regression |
| Compare proportions | Categorical | Chi-square |
| Before/after comparison | Paired | Paired t-test |
| Non-normal data | Any | Non-parametric alternatives |

### ANOVA Applications in CEA

| Application | Factors | Analysis |
|-------------|---------|----------|
| Nutrient trial | Formula (3 levels) | One-way ANOVA |
| Variety comparison | Variety (5) × Location (3) | Two-way ANOVA |
| Light study | Intensity × Spectrum × Duration | Factorial ANOVA |
| Growth over time | Treatment × Time | Repeated Measures |

### Interpreting Results

| Statistical Term | Meaning | Action |
|------------------|---------|--------|
| p < 0.05 | Statistically significant | Likely real difference |
| p > 0.05 | Not significant | Cannot conclude difference |
| R² = 0.85 | 85% variation explained | Strong relationship |
| CI 95% [10, 15] | True value between 10-15 | Range estimate |

---

## Data Collection Best Practices

### Data Quality Checklist

| Requirement | Implementation |
|-------------|----------------|
| Consistency | Standardized protocols |
| Accuracy | Calibrated instruments |
| Precision | Multiple measurements |
| Completeness | No missing data |
| Timeliness | Regular collection |
| Documentation | Detailed records |

### Common Measurements in CEA Research

| Category | Parameters | Units | Frequency |
|----------|------------|-------|-----------|
| **Environment** | Temperature, humidity, CO2 | °F, %, ppm | Continuous |
| **Water Quality** | pH, EC, DO, ammonia | pH, mS/cm, mg/L | Daily |
| **Plant Growth** | Height, leaf count, weight | cm, #, g | Weekly |
| **Yield** | Fresh weight, dry weight | kg/m², g/plant | Harvest |
| **Quality** | Color, firmness, Brix | Scale, N, % | Harvest |

---

## Research Communication

### Scientific Paper Structure

| Section | Purpose | Length |
|---------|---------|--------|
| **Abstract** | Summary of entire paper | 150-250 words |
| **Introduction** | Background, hypothesis | 10-15% |
| **Methods** | How study was conducted | 20-25% |
| **Results** | What was found | 25-30% |
| **Discussion** | What it means | 25-30% |
| **Conclusion** | Key takeaways | 5-10% |

### Research Poster Elements

```
┌────────────────────────────────────────────────────────────────────────────┐
│                              TITLE (Large, Clear)                          │
│                          Authors & Affiliations                            │
├────────────────────┬────────────────────┬──────────────────────────────────┤
│   INTRODUCTION     │     METHODS        │           RESULTS                │
│                    │                    │                                  │
│  • Background      │  • Design          │  • Tables                        │
│  • Objectives      │  • Treatments      │  • Graphs                        │
│  • Hypothesis      │  • Measurements    │  • Statistics                    │
│                    │  • Analysis        │                                  │
├────────────────────┴────────────────────┼──────────────────────────────────┤
│              DISCUSSION                 │          CONCLUSIONS             │
│                                         │                                  │
│  • Interpretation                       │  • Key findings                  │
│  • Comparison to literature            │  • Practical applications        │
│  • Limitations                          │  • Future research               │
├─────────────────────────────────────────┴──────────────────────────────────┤
│   REFERENCES                           ACKNOWLEDGMENTS            QR CODE  │
└────────────────────────────────────────────────────────────────────────────┘
```

---

## Critical Evaluation Framework

### Evaluating Published Research

| Criterion | Questions to Ask |
|-----------|------------------|
| **Validity** | Was the design appropriate? Controls adequate? |
| **Reliability** | Sufficient replication? Methods reproducible? |
| **Bias** | Random assignment? Blinding? Conflicts? |
| **Statistics** | Appropriate tests? Effect size reported? |
| **Generalizability** | Applicable to your situation? |
| **Practical significance** | Is the effect meaningful in practice? |

---

## Assessment Strategy

| Assessment | Points |
|------------|--------|
| Module Quizzes (14) | 42 points |
| Experimental Design Exercise | 30 points |
| Statistical Analysis Project | 35 points |
| Literature Review Assignment | 25 points |
| Research Proposal Development | 45 points |
| **Total** | **177 points** |

**Passing Threshold:** 80%

---

*EcoFusion Academy - Course 309*
