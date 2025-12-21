# Module 6: Novel Species Integration Research

## Learning Objectives

- Evaluate species suitability for aquaponics integration
- Design compatibility assessment protocols
- Conduct growth performance trials
- Measure feed conversion efficiency
- Assess behavioral and welfare indicators

## 6.1 Species Selection Criteria

### Multi-Criteria Evaluation Framework

```
┌──────────────────────────────────────────────────────┐
│      SPECIES SUITABILITY ASSESSMENT MATRIX           │
└──────────────────────────────────────────────────────┘

CRITERIA (Weighted Scoring):

1. BIOLOGICAL COMPATIBILITY (30%)
   ├── Water quality tolerance
   ├── Temperature range
   ├── pH tolerance
   ├── DO requirements
   └── Ammonia/nitrite tolerance

2. GROWTH PERFORMANCE (25%)
   ├── Growth rate
   ├── Feed conversion ratio
   ├── Protein efficiency
   └── Size at maturity

3. MARKET FACTORS (20%)
   ├── Consumer demand
   ├── Market price
   ├── Year-round availability
   └── Processing ease

4. PRODUCTION FACTORS (15%)
   ├── Seed/fingerling availability
   ├── Feed availability
   ├── Disease resistance
   └── Handling tolerance

5. REGULATORY/SOCIAL (10%)
   ├── Legal status
   ├── Invasiveness risk
   ├── Animal welfare considerations
   └── Cultural acceptance

SCORING: 1 (Poor) to 5 (Excellent)
```

### Example: Native Fish Evaluation

```
SPECIES COMPARISON:

┌─────────────┬─────────┬─────────┬─────────┬──────────┐
│  Criterion  │ Rainbow │  Arctic │  Yellow │  Channel │
│             │  Trout  │  Char   │  Perch  │  Catfish │
├─────────────┼─────────┼─────────┼─────────┼──────────┤
│ Temp range  │   4.0   │   5.0   │   3.5   │    4.5   │
│ Water qual. │   4.5   │   4.0   │   4.0   │    5.0   │
│ Growth rate │   4.0   │   3.0   │   2.5   │    4.5   │
│ FCR         │   4.5   │   4.0   │   3.5   │    4.0   │
│ Market value│   4.5   │   5.0   │   3.0   │    3.5   │
│ Hardiness   │   3.5   │   4.0   │   4.5   │    5.0   │
├─────────────┼─────────┼─────────┼─────────┼──────────┤
│ TOTAL SCORE │   4.15  │   4.08  │   3.42  │    4.38  │
└─────────────┴─────────┴─────────┴─────────┴──────────┘

Recommendation: Channel catfish highest score for warm
                temperate aquaponics
```

## 6.2 Compatibility Assessment Protocols

### Water Quality Tolerance Testing

```
ACUTE TOXICITY TESTING (96-hour LC₅₀):

PROCEDURE:
1. Acclimate fish to test conditions (7 days)
2. Expose to concentration series
3. Monitor mortality every 24 hours
4. Calculate LC₅₀ (concentration lethal to 50%)

AMMONIA TOLERANCE EXAMPLE:

Test concentrations (mg/L TAN):
├── Control: 0
├── Low: 0.5
├── Medium: 1.0
├── High: 2.0
├── Very high: 4.0
└── Extreme: 8.0

Results after 96 hours:
┌─────────────┬──────────┬───────────┐
│Concentration│ Mortality│ Cumulative│
│   (mg/L)    │  (n=10)  │     %     │
├─────────────┼──────────┼───────────┤
│     0.0     │    0     │     0%    │
│     0.5     │    0     │     0%    │
│     1.0     │    1     │    10%    │
│     2.0     │    3     │    40%    │
│     4.0     │    6     │    100%   │
│     8.0     │   10     │    100%   │
└─────────────┴──────────┴───────────┘

LC₅₀ ≈ 2.5 mg/L TAN

Safe level for chronic exposure: LC₅₀/10 = 0.25 mg/L
```

### Behavioral Compatibility

```
POLYCULTURE COMPATIBILITY TESTING:

EXPERIMENTAL DESIGN:
├── Monoculture controls (each species alone)
├── Mixed culture treatments
├── Different ratios tested
└── Replicated tanks (n≥4)

MEASURED PARAMETERS:
1. Aggressive interactions (hourly observations)
2. Spatial distribution (video analysis)
3. Feeding competition (feed consumption)
4. Stress indicators (cortisol, glucose)
5. Growth performance
6. Injury/mortality rates

EXAMPLE - Tilapia + Catfish Polyculture:

Ratio tested: 70% tilapia : 30% catfish (by biomass)

Observations (24-hour period):
┌────────────────────┬─────────┬──────────┬─────────┐
│    Behavior        │  Mono-  │  Mono-   │  Mixed  │
│                    │ Tilapia │ Catfish  │ Culture │
├────────────────────┼─────────┼──────────┼─────────┤
│ Aggression events  │   15    │    3     │    8    │
│ Fin damage (%)     │    5    │    2     │    3    │
│ Feed competition   │  High   │   Low    │ Moderate│
│ Spatial overlap    │   N/A   │   N/A    │   Low   │
│ Growth (g/day)     │   4.2   │   3.8    │   4.0   │
└────────────────────┴─────────┴──────────┴─────────┘

Conclusion: Compatible - minimal interaction, different
            feeding niches (surface vs. bottom)
```

## 6.3 Growth Performance Studies

### Experimental Design

```
GROWTH TRIAL PROTOCOL:

DURATION: 8-12 weeks minimum
SAMPLE SIZE: n ≥ 4 tanks per treatment
STOCKING: 20-30 fish per tank (allows sampling)

TREATMENTS:
├── Control (standard conditions)
├── Test conditions (varied parameters)
└── Positive control (known optimal)

MEASUREMENTS:
┌─────────────────────────────────────────┐
│ WEEKLY:                                 │
│ ├── Individual weight (n=10 per tank)  │
│ ├── Fork length                        │
│ ├── Feed consumed                      │
│ └── Water quality parameters           │
│                                         │
│ BI-WEEKLY:                              │
│ ├── Tank biomass (batch weight)        │
│ ├── Size distribution                  │
│ └── Uniformity (CV of weight)          │
│                                         │
│ FINAL:                                  │
│ ├── Individual weights (all fish)      │
│ ├── Morphometric measurements          │
│ ├── Condition factor                   │
│ ├── Hepatosomatic index                │
│ └── Survival rate                      │
└─────────────────────────────────────────┘
```

### Growth Metrics

```
KEY PERFORMANCE INDICATORS:

1. SPECIFIC GROWTH RATE (SGR):
   SGR = [(ln Wf - ln Wi)/days] × 100
   Target: >2% per day

2. FEED CONVERSION RATIO (FCR):
   FCR = Feed given / Weight gained
   Target: <1.5 for carnivores, <2.0 herbivores

3. PROTEIN EFFICIENCY RATIO (PER):
   PER = Weight gain / Protein fed
   Target: >2.0

4. CONDITION FACTOR (K):
   K = (Weight/Length³) × 100
   Healthy range: 1.0-2.0

5. SURVIVAL RATE:
   Survival = (Final count/Initial count) × 100%
   Target: >90%

STATISTICAL ANALYSIS:
├── One-way ANOVA (treatment effects)
├── Repeated measures (growth over time)
├── Post-hoc tests (Tukey HSD)
└── Regression (growth models)
```

## 6.4 Nutrient Dynamics Research

### Nitrogen Budget Methodology

```
COMPLETE N BUDGET DETERMINATION:

INPUTS (measured):
├── Feed nitrogen
└── Water additions

OUTPUTS (measured):
├── Fish biomass N
├── Plant biomass N
├── Sludge N
├── Water discharge N
└── Gaseous losses (estimated)

SAMPLING PROTOCOL:

DAILY:
├── Feed input (weighed)
├── Water quality (TAN, NO₂, NO₃)
└── Sludge removal volume

WEEKLY:
├── Fish sampling (growth, N content)
├── Plant sampling (biomass, N content)
├── Water volume measurements
└── Makeup water additions

FINAL:
├── Complete harvest
├── Full system water analysis
├── Biofilter N content
└── Complete mass balance

EXAMPLE RESULTS (60-day trial):
┌───────────────────┬──────────┬──────────┐
│   N Flow          │  Amount  │  Percent │
│                   │  (g N)   │  of Input│
├───────────────────┼──────────┼──────────┤
│ INPUT             │          │          │
│ Feed              │  1500    │  100.0%  │
├───────────────────┼──────────┼──────────┤
│ OUTPUTS           │          │          │
│ Fish biomass      │   450    │   30.0%  │
│ Plant harvest     │   520    │   34.7%  │
│ Sludge removal    │   180    │   12.0%  │
│ Water discharge   │   150    │   10.0%  │
│ Denitrification*  │   120    │    8.0%  │
│ Accumulation      │    80    │    5.3%  │
├───────────────────┼──────────┼──────────┤
│ TOTAL OUTPUT      │  1500    │  100.0%  │
└───────────────────┴──────────┴──────────┘

* Estimated by difference
```

## 6.5 Welfare and Behavior Research

### Welfare Assessment Protocol

```
FIVE DOMAINS MODEL:

1. NUTRITION
   ├── Body condition score (1-5)
   ├── Growth rate (compare to optimal)
   └── Feeding behavior (normal/abnormal)

2. ENVIRONMENT
   ├── Water quality parameters
   ├── Temperature stability
   ├── Space per fish
   └── Light:dark cycle

3. HEALTH
   ├── Disease prevalence
   ├── Parasite load
   ├── Mortality rate
   └── Fin condition index

4. BEHAVIOR
   ├── Swimming patterns
   ├── Social interactions
   ├── Stress behaviors
   └── Response to stimuli

5. MENTAL STATE (inferred)
   ├── Fearfulness
   ├── Frustration
   └── Positive experiences

SCORING MATRIX:
┌───────────┬─────────────────────────────────┐
│  Score    │  Description                    │
├───────────┼─────────────────────────────────┤
│ +2        │ Very good (enhances welfare)    │
│ +1        │ Good                            │
│  0        │ Neutral (acceptable)            │
│ -1        │ Poor (compromises welfare)      │
│ -2        │ Very poor (severe compromise)   │
└───────────┴─────────────────────────────────┘

Overall welfare = Sum of domain scores
Target: ≥0 across all domains
```

### Stress Biomarkers

```
PHYSIOLOGICAL STRESS INDICATORS:

PRIMARY (Immediate):
├── Cortisol (blood/water) - <50 ng/mL baseline
├── Catecholamines - Acute stress marker
└── Response time: Minutes

SECONDARY (Metabolic):
├── Glucose - >80 mg/dL indicates stress
├── Lactate - Anaerobic metabolism
├── Hematocrit - Blood cell concentration
└── Response time: Minutes to hours

TERTIARY (Whole animal):
├── Growth rate reduction
├── Immune suppression
├── Reproductive impairment
└── Response time: Days to weeks

SAMPLING PROTOCOL:
1. Minimize handling stress
2. Sample within 3 minutes of netting
3. Anesthetize if needed (MS-222, 100 mg/L)
4. Blood from caudal vein
5. Immediate processing or preservation
6. Include undisturbed controls
```

## Key Takeaways

1. **Systematic Evaluation** - Use multi-criteria assessment for species selection
2. **Controlled Trials** - Follow rigorous protocols for compatibility testing
3. **Comprehensive Metrics** - Measure growth, efficiency, and welfare
4. **Mass Balance** - Account for all nutrient flows in the system
5. **Animal Welfare** - Prioritize ethical treatment in all research

## Practical Application

Design a novel species integration study for evaluating a native fish species in your region for aquaponics production. Include:
1. Species selection justification
2. Compatibility testing protocol
3. Growth trial design (12 weeks)
4. Nitrogen budget methodology
5. Welfare assessment plan
6. Statistical analysis approach

## Further Reading

- Yildiz, H.Y., et al. (2017). "Physiological indices of Nile tilapia"
- Junge, R., et al. (2017). "Strategic points in aquaponics"
- Palm, H.W., et al. (2018). "African catfish in aquaponics"

---

**Next Module:** [Module 7: Nutrient Dynamics Research](module_07_nutrient_dynamics_research.md)
