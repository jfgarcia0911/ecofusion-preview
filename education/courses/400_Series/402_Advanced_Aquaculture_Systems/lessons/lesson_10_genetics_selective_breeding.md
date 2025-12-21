# Lesson 10: Genetics & Selective Breeding

## Course 402: Advanced Aquaculture Systems | Week 10

---

## Learning Objectives

1. Understand quantitative genetics principles in aquaculture
2. Design selective breeding programs for commercial improvement
3. Manage genetic diversity and avoid inbreeding depression
4. Implement family-based selection protocols
5. Apply genomic selection tools
6. Produce triploid and monosex populations

---

## Quantitative Genetics Fundamentals

### Heritability (h²)

```
h² = Genetic Variance (VG) / Total Phenotypic Variance (VP)

Where: VP = VG + VE
- VG = Genetic variance (inherited)
- VE = Environmental variance (non-inherited)

Range: 0 to 1.0
- h² = 0: Trait not heritable (100% environmental)
- h² = 0.5: 50% genetic, 50% environmental
- h² = 1.0: 100% heritable
```

**Heritability of Common Aquaculture Traits:**

| Trait | Heritability (h²) | Breeding Potential |
|-------|-------------------|-------------------|
| Growth rate | 0.2-0.4 | Moderate-High |
| Body weight | 0.25-0.45 | Moderate-High |
| Feed efficiency (FCR) | 0.15-0.30 | Moderate |
| Disease resistance | 0.15-0.40 | Moderate |
| Fillet yield | 0.20-0.35 | Moderate |
| Flesh color | 0.30-0.60 | High |
| Age at maturity | 0.25-0.50 | High |
| Stress tolerance | 0.10-0.25 | Low-Moderate |

### Genetic Gain

**Breeder's Equation:**

```
R = h² × S

Where:
R = Response to selection (genetic gain per generation)
h² = Heritability
S = Selection differential (superiority of selected parents)

Example - Growth Rate Improvement:

Current average weight @ 6 months: 400g
Top 10% average: 550g
Selection differential (S): 550 - 400 = 150g
Heritability (h²): 0.30

Expected gain (R): 0.30 × 150g = 45g per generation

Next generation average: 400g + 45g = 445g
```

**Annual Genetic Gain:**

```
ΔG per year = (h² × i × σP) / L

Where:
- h² = heritability
- i = selection intensity (standardized selection differential)
- σP = phenotypic standard deviation
- L = generation interval (years)

Shorter generation interval = faster genetic progress
```

---

## Breeding Program Design

### Selection Methods

**1. Mass Selection**

```
┌────────────────────────────────────────────────────┐
│              MASS SELECTION                        │
├────────────────────────────────────────────────────┤
│                                                     │
│  Population (10,000 fish)                          │
│         ↓                                          │
│  Measure trait (e.g., weight)                      │
│         ↓                                          │
│  Select top 10% (1,000 fish)                       │
│         ↓                                          │
│  Use as breeders (breed randomly within selected)  │
│         ↓                                          │
│  Next generation                                   │
│                                                     │
│  ADVANTAGES:                                        │
│  - Simple                                          │
│  - Low cost                                        │
│  - No pedigree records needed                      │
│                                                     │
│  DISADVANTAGES:                                     │
│  - Environmental effects not accounted for         │
│  - Can't control inbreeding                        │
│  - Lower accuracy                                  │
│                                                     │
└────────────────────────────────────────────────────┘
```

**2. Family Selection**

```
┌────────────────────────────────────────────────────┐
│           FAMILY-BASED SELECTION                   │
├────────────────────────────────────────────────────┤
│                                                     │
│  Generation 1: Create 100 families                 │
│  (100 sires × 100 dams = 100 full-sib families)    │
│         ↓                                          │
│  Raise families separately or with tagging         │
│         ↓                                          │
│  Measure performance of each family                │
│         ↓                                          │
│  Rank families by average performance              │
│         ↓                                          │
│  Select best families (top 20)                     │
│         ↓                                          │
│  Within selected families, choose best individuals │
│         ↓                                          │
│  Create Generation 2 families (avoid inbreeding)   │
│                                                     │
│  ADVANTAGES:                                        │
│  - Higher accuracy (family mean more reliable)     │
│  - Can control inbreeding                          │
│  - Can estimate breeding values                    │
│                                                     │
│  DISADVANTAGES:                                     │
│  - Complex logistics                               │
│  - Requires tagging or separate rearing            │
│  - Higher cost                                     │
│                                                     │
└────────────────────────────────────────────────────┘
```

**3. Within-Family Selection**

```
Combine family and individual selection:

1. Rank families by performance
2. Select top 30% of families
3. Within selected families, choose top individuals
4. Mate selected individuals from different families

This maintains genetic diversity while maximizing gain
```

### Mating Designs

**Factorial Mating:**

```
Example: 10 males × 10 females = 100 full-sib families

Male 1 × Female 1 = Family 1
Male 1 × Female 2 = Family 2
...
Male 10 × Female 10 = Family 100

Advantages:
- Maximum genetic diversity
- All combinations tested
- Can estimate combining ability

Disadvantages:
- Logistically challenging
- Many families to manage
```

**Nested Mating:**

```
Each male mated to 3-5 females:

Male 1 × Females 1, 2, 3
Male 2 × Females 4, 5, 6
Male 3 × Females 7, 8, 9
...

Advantages:
- Simpler than factorial
- Still maintains diversity
- Practical for commercial scale

Common in aquaculture breeding programs
```

---

## Managing Genetic Diversity

### Inbreeding and Its Effects

**Inbreeding Coefficient (F):**

```
F = Probability that two alleles are identical by descent

F = 0: No inbreeding (outbred)
F = 0.25: Offspring of half-siblings
F = 0.50: Offspring of full siblings
```

**Inbreeding Depression Effects:**

| F Value | Growth Loss | Survival Loss | Fertility Loss |
|---------|-------------|---------------|----------------|
| 0.10 | -5% | -5% | -10% |
| 0.20 | -10% | -10% | -20% |
| 0.30 | -15% | -15% | -30% |

**Preventing Inbreeding:**

```
1. Maintain large effective population size (Ne)
   - Minimum Ne = 50 (emergency)
   - Target Ne = 100-200 (sustainable)

2. Use balanced mating
   - Equal contribution from each parent
   - Ne = 4NmNf / (Nm + Nf)
   Where Nm = number of males, Nf = number of females

3. Avoid mating relatives
   - Track pedigrees
   - Mate individuals from different families
   - Use software to optimize matings

4. Occasional outcrossing
   - Every 3-5 generations
   - Introduce unrelated genetics
   - Refreshes genetic diversity
```

### Effective Population Size (Ne)

```
Rule: ΔF per generation ≈ 1/(2Ne)

Target: ΔF < 1% per generation

Required Ne:
Ne = 1 / (2 × 0.01) = 50 minimum

Better: Ne = 100-200 for long-term sustainability

Example calculation:
20 males, 80 females used for breeding

Ne = (4 × 20 × 80) / (20 + 80)
   = 6,400 / 100
   = 64

Conclusion: Acceptable but increase males for better Ne
```

---

## Advanced Breeding Technologies

### Genomic Selection

```
┌────────────────────────────────────────────────────┐
│          GENOMIC SELECTION PROCESS                 │
├────────────────────────────────────────────────────┤
│                                                     │
│  1. TRAINING POPULATION                            │
│     - Genotype 2,000-5,000 fish (DNA)              │
│     - Measure phenotypes (growth, etc.)            │
│     - Build prediction model                       │
│         ↓                                          │
│  2. GENOMIC PREDICTION                             │
│     - Genotype candidate breeders                  │
│     - Predict breeding value from DNA alone        │
│     - Select top individuals                       │
│         ↓                                          │
│  3. BREEDING                                       │
│     - Mate selected fish                           │
│     - Reduced generation interval                  │
│     - Higher accuracy for low h² traits            │
│                                                     │
│  ADVANTAGES:                                        │
│  - Early selection (before trait expressed)        │
│  - Can select for hard-to-measure traits           │
│  - Higher accuracy                                 │
│                                                     │
│  STATUS:                                           │
│  - Commercial use in salmon                        │
│  - Developing for tilapia, shrimp, others          │
│                                                     │
└────────────────────────────────────────────────────┘
```

### Marker-Assisted Selection (MAS)

```
Use DNA markers linked to specific genes:

Example: Disease Resistance

1. Identify gene(s) for disease resistance
2. Find DNA markers near these genes
3. Test breeding candidates for markers
4. Select individuals with beneficial markers
5. Accelerates genetic gain for specific traits

Applications:
- Disease resistance (IPN, Sea lice)
- Flesh color
- Temperature tolerance
- Age at maturity
```

---

## Chromosome Manipulation

### Triploid Production

**Purpose:**
- Sterile fish (no reproduction)
- All energy to growth (no gamete production)
- Prevents genetic contamination of wild stocks
- Year-round production (no spawning season)

**Induction Methods:**

**Pressure Shock:**
```
Timing: Shortly after fertilization

Protocol:
1. Fertilize eggs normally
2. Wait for specific time (species-dependent)
   - Salmon: 30 min @ 10°C
   - Trout: 25 min @ 10°C
   - Bass: 5 min @ 23°C
3. Apply pressure: 6,000-9,000 PSI
4. Duration: 5-10 minutes
5. Return to normal pressure
6. Incubate normally

Success rate: 95-100% triploids
```

**Heat/Cold Shock:**
```
Alternative to pressure:
- Heat: 26-30°C for 10-20 min
- Cold: 0-4°C for 20-40 min
- Lower success rate than pressure (70-95%)
```

**Verification:**
```
Methods to confirm triploidy:
1. Flow cytometry (DNA content)
2. Blood smear (cell size)
3. Coulter counter

Test 60+ fish per batch for QC
```

### Sex Reversal and Monosex Production

**All-Male Tilapia Production:**

```
Method 1: Hormone Sex Reversal

1. Hatch mixed-sex fry
2. Feed 17α-methyltestosterone (MT) in feed
   - 60 mg MT/kg feed
   - Feed for 21-28 days during sex differentiation
3. Result: >95% phenotypic males
4. Grow out for market

Note: Regulatory restrictions vary by country
```

```
Method 2: YY "Super Male" Production

1. Produce all-male stock via hormone treatment
2. Progeny test to identify YY males (all offspring male)
3. Breed YY males × Normal XX females
4. All offspring are XY males (genetic males)
5. No hormones needed in commercial production

Advantages:
- Genetic males (not hormone-induced)
- Sustainable approach
- Higher market acceptance
```

**All-Female Production:**

Used in some species for better growth/quality:
- Gynogenesis (all female offspring)
- Used in sturgeon for caviar production
- Complex techniques

---

## Breeding Program Example: Tilapia

**Year 1-2: Base Population Establishment**

```
Founders: 50 unrelated males + 50 unrelated females
From multiple sources for genetic diversity

Create 100 full-sib families (1 male × 1 female each)

Raise families separately with PIT tags
Measure: Growth, survival, FCR, body shape

Data: 50-100 fish per family
```

**Year 3: Generation 1 Selection**

```
Analysis:
- Rank families by breeding value
- Select top 30 families
- Within selected families, choose top 20% individuals

Mating:
- Nested design: Each male × 3 females
- Avoid mating relatives (F < 0.05)
- Create 150 new families
```

**Year 4+: Continuing Selection**

```
Annual genetic gain target: 10% per generation for growth

Actual results (tilapia programs):
- Growth: 10-15% per generation
- Survival: 5-10% per generation
- FCR: 3-5% per generation

After 5 generations (10 years):
- 50-75% improvement in growth rate
- 25-50% improvement in feed efficiency
- Substantial economic benefit
```

**Economic Impact:**

```
Example Farm:
- 100 tonnes production
- Improved strain reduces grow-out by 20 days
- 20% better FCR

Benefits:
- Faster turnover: +15% production capacity
- Feed savings: $0.20/kg × 100,000 kg = $20,000/year
- ROI on breeding program: 500-1000%
```

---

## Breeding for Specific Traits

### Disease Resistance

**Approaches:**

1. **Challenge Testing:**
```
- Expose families to specific pathogen
- Measure survival
- Select families/individuals with best survival
- Heritability: 0.15-0.40 depending on disease
```

2. **QTL Mapping:**
```
- Identify genomic regions linked to resistance
- Use markers for selection
- Faster progress than phenotypic selection
```

### Flesh Quality Traits

**Fillet Yield:**
```
Heritability: 0.20-0.35
Selection: Via body shape indices or direct measurement
Response: 3-5% per generation improvement possible
```

**Flesh Color:**
```
Heritability: 0.30-0.60 (moderate-high)
Measurement:
- Chromameter readings
- Visual assessment
- Select for desired color
Important for salmon, trout market value
```

---

## Record Keeping

**Essential Records:**

```
Individual Level:
- Unique ID (PIT tag, passive transponder)
- Parents (sire and dam)
- Hatch date
- Growth measurements (dates and weights)
- Health records
- Disposition (selected, culled, fate)

Family Level:
- Family ID
- Parents
- Number of offspring
- Performance summary statistics
- Ranking

Population Level:
- Generation number
- Average performance by generation
- Genetic parameters
- Inbreeding coefficients
```

**Software Tools:**
- AquaBreed
- BLUP software (Best Linear Unbiased Prediction)
- Custom databases
- Excel-based systems for small programs

---

## Key Takeaways

1. **Genetic improvement is cumulative** - benefits compound over generations
2. **Heritability determines response** - high h² = faster progress
3. **Manage inbreeding carefully** - maintain Ne >50, preferably >100
4. **Family selection is powerful** - worth the extra effort
5. **Triploids offer advantages** - sterility and growth benefits
6. **Disease resistance is heritable** - can breed resistant strains
7. **Record keeping is essential** - track pedigrees and performance
8. **Long-term commitment needed** - breeding programs take years

---

## Further Reading

1. Gjedrem, T. & Rye, M. (2018). "Selection response in fish and shellfish"
2. Falconer, D.S. & Mackay, T.F.C. (1996). "Introduction to Quantitative Genetics"
3. Lush, J.L. (1994). "The Genetics of Populations"
4. Gjedrem, T. (2005). "Selection and Breeding Programs in Aquaculture"

---

*Next Lesson: Module 11 - Production Planning & Optimization*

*EcoFusion Academy - Course 402: Advanced Aquaculture Systems*
