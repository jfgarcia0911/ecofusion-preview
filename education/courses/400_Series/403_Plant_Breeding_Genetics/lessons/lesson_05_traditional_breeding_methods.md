# Lesson 5: Traditional Breeding Methods

## Learning Objectives

By the end of this lesson, you will be able to:
- Apply mass selection strategies for rapid trait improvement
- Design pedigree breeding programs for multiple trait selection
- Implement bulk population and single seed descent methods
- Execute backcross breeding for gene introgression
- Evaluate recurrent selection for population improvement
- Select appropriate breeding methods for CEA crop objectives

## Introduction

Traditional breeding methods have successfully improved crops for centuries and remain fundamental even in the genomic era. These approaches are based on controlled crosses, selection of superior genotypes, and genetic recombination. Understanding these methods is essential for effective CEA variety development.

## 1. Mass Selection

### 1.1 Principle and Procedure

**Definition:** Individual plants selected based on phenotype without progeny testing.

**Process:**
```
Year 1: Grow base population
        ↓
        Evaluate and select superior individuals
        ↓
        Bulk seed from selected plants
        ↓
Year 2: Plant selected seed (next cycle)
        ↓
        Repeat selection
```

**Two Types:**

**Simple Mass Selection:**
- Select individuals
- Bulk all seed together
- No isolation of selections

**Modified Mass Selection:**
- Select individuals
- Keep selections separate
- Plant row plots
- Rogueout-types
- Bulk within-row seed

### 1.2 Genetic Considerations

**Effective when:**
- High heritability traits (h² > 0.5)
- Simple inheritance
- Readily observable traits
- Large populations available

**Response to Selection:**
```
R = i × h² × σP

Higher response with:
- High heritability
- Large phenotypic variance
- Intense selection (low i value)
```

**Limitations:**
- Environmental effects confound selection
- Cannot select for family value
- Ineffective for low heritability traits
- No control of genetic identity

### 1.3 CEA Applications

**Example: Lettuce Leaf Color Intensity**

**Program:**
```
Cycle 1:
- Grow 1,000 plants in controlled environment
- Select 100 darkest red individuals (10%)
- Bulk seed from selected plants

Cycle 2:
- Grow seed from Cycle 1
- Population mean darker than original
- Select top 10% again
- Continue for 3-5 cycles
```

**Expected Progress:**
```
If h² = 0.7, σP = 2.0 color units, i = 1.76 (10% selection)
R = 1.76 × 0.7 × 2.0 = 2.46 units per cycle

After 4 cycles: ~10 units improvement
```

**Traits Suitable for Mass Selection in CEA:**
- Leaf color and pigmentation
- Plant architecture (visible)
- Maturity timing
- Resistance to some diseases (visual symptoms)
- Bolting tendency

## 2. Pure Line Selection

### 2.1 Principle

**Definition:** Selection of individual plants from landraces or mixed populations, progeny testing, and release as pure lines.

**Historical Context:**
- Developed by Johannsen (1903)
- Foundation of early crop improvement
- Still relevant for landrace improvement

**Procedure:**
```
Year 1: Select individual plants from mixed population
        ↓
        Harvest seed separately (plant-to-row)
        ↓
Year 2: Plant progeny rows
        ↓
        Evaluate row performance
        ↓
        Select best rows
        ↓
Year 3: Replicated yield trials of selected lines
        ↓
        Identify superior pure line(s)
        ↓
        Release as variety
```

### 2.2 Application in CEA

**Scenario: Basil Landrace Improvement**

```
Starting material: Traditional Italian basil landrace (variable)

Year 1: Plant 500 individuals, select 50 based on:
        - Essential oil content
        - Leaf size
        - Disease resistance
        - Plant architecture

Year 2: Plant-to-row evaluation (50 rows)
        - Each row is progeny of one Year 1 plant
        - Measure traits within controlled environment
        - Row means indicate genetic value
        - Select 10 best rows

Year 3: Replicated trials
        - 3 reps × 10 lines × 2 environments (light spectra)
        - Detailed evaluation
        - Select top 2-3 lines

Year 4: Seed increase and release
```

**Advantages:**
- Preserves genetic purity
- Identifies superior genotypes
- Low cost
- Effective for self-pollinated crops

**Limitations:**
- No creation of new variation
- Limited to existing genetic diversity
- Time-consuming

## 3. Pedigree Breeding

### 3.1 Concept and Procedure

**Definition:** Selection of individual plants in segregating generations with complete pedigree records.

**Standard Pedigree Method:**

```
Year 1: Cross P1 × P2 → F1 seed
Year 2: Grow F1, self-pollinate → F2 seed
Year 3: Grow F2 population (1000-5000 plants)
        - Select superior individuals (100-200)
        - Harvest individually
Year 4: Grow F3 plant-to-row (100-200 rows)
        - Select within and among rows
        - Harvest best individuals from best rows (50-100)
Year 5: Grow F4 plant-to-row
        - Continue selection
        - Some lines homozygous
        - Harvest bulk within selected rows (20-30 lines)
Year 6: F5 preliminary yield trials
        - Replicated trials
        - Select best lines (5-10)
Year 7-8: Advanced yield trials
        - Multi-environment testing
        - Select elite line(s) for release
```

**Selection Emphasis by Generation:**

```
F2-F3: Select for high heritability traits
       (disease resistance, plant type, maturity)

F4-F5: Select for all traits including yield
       Lines becoming homozygous
       More accurate phenotyping

F6-F8: Select for overall performance
       Replicated trials
       Statistical analysis
```

### 3.2 Pedigree Records

**Example Format:**
```
Line Designation: CEA-T-2024-001

Pedigree:
'Red Salad Bowl' / 'Winter Density' // 'Buttercrunch'
       P1                P2                BC1P2

Full Pedigree Code:
RSB/WD//BC-F2:3-15-6-2-1

Interpretation:
- F2 generation plant #3
- F3 row from plant 3, individual #15
- F4 row from 3-15, individual #6
- F5 row from 3-15-6, individual #2
- F6 row from 3-15-6-2, individual #1
```

**Maintains:**
- Parent information
- Selection history
- Trait segregation patterns
- Family relationships

### 3.3 Modified Pedigree Methods

**Early Generation Testing:**
```
F3-F4: Replicated plots instead of space-planted
       - Better yield estimation
       - Earlier discard of poor families
       - Reduces numbers advanced
```

**Single Pod Descent (for legumes) / Single Plant Descent:**
```
Advance one seed/plant per family without selection
Reaches homozygosity faster
Selection in later generations only
```

### 3.4 CEA Pedigree Breeding Example

**Objective:** Develop compact, fast-growing lettuce for vertical farms

**Parents:**
- 'Salanova Green' (compact rosette, slow)
- 'Fast Red' (loose head, rapid growth)

**Program:**

```
2024: Cross SG × FR

2025: Grow F1 (verify hybrid)
      Self → F2 seed

2026: F2 (2000 plants)
      Select: Compact + intermediate speed (200 plants)
      CEA chamber: Red/Blue LED, 20°C

2027: F3 plant-to-row (200 rows)
      Select within/among rows
      Focus: Architecture, growth rate, color
      Advance 50 families

2028: F4 plant-to-row (50 rows)
      More uniform within rows
      Measure: Days to harvest, head weight, height
      Advance 15 families (bulk within rows)

2029: F5 preliminary trials
      3 reps, 2 light conditions
      Statistical analysis
      Select top 5 lines

2030: F6 advanced trials
      Multiple facilities
      Commercial production simulation
      Final selection

2031: F7 seed increase, variety release
```

**Traits Selected:**

| Generation | Primary Selection Criteria |
|------------|----------------------------|
| F2 | Rosette architecture, red color |
| F3 | Plant height, leaf number, growth rate |
| F4 | Head compactness, uniformity, bolting resistance |
| F5-F6 | Yield, quality, adaptation, shelf-life |

### 3.5 Advantages and Limitations

**Advantages:**
- Maximum information on each line
- Flexibility in selection
- Can track specific trait combinations
- Ideal for multiple trait improvement

**Disadvantages:**
- Labor intensive (individual plant handling)
- Requires large space
- Extensive record keeping
- Environmental effects in early generations

## 4. Bulk Population Method

### 4.1 Principle

**Definition:** Segregating generations grown in bulk without individual selection until later generations.

**Procedure:**
```
Year 1: Cross P1 × P2 → F1
Year 2: Grow F1 → F2 seed (bulk)
Year 3: Plant F2 in bulk (space planted)
        Harvest in bulk → F3 seed
Year 4: Plant F3 in bulk
        Harvest in bulk → F4 seed
Year 5: Plant F4 in bulk
        Harvest in bulk → F5 seed
Year 6: Plant F5 in bulk
        Harvest in bulk → F6 seed (mostly homozygous)
Year 7: F6 individual plant selection begins
        Plant-to-row evaluation
        Continue as pedigree method
```

**Natural Selection During Bulk Generations:**
- Competition favors vigorous plants
- Disease pressure selects for resistance
- Environment selects for adaptation
- May not favor desired traits

### 4.2 Modified Bulk Methods

**Bulk Pedigree:**
```
Early generations in bulk
Later generations as pedigree
Combines advantages of both methods
```

**Example:**
```
F2-F4: Bulk (no individual selection)
F5-F6: Pedigree (plant-to-row, individual selection)
```

### 4.3 CEA Application Considerations

**Challenges in CEA:**
- Lack of natural selection pressure
- Controlled environment may not select for adaptation
- Competition dynamics different than field

**Adapted Bulk Method for CEA:**

```
F2-F3: Bulk under target production conditions
       - Specific LED spectrum
       - Hydroponic system
       - High density planting
       Natural selection for:
         * Rapid growth
         * Disease resistance
         * Adaptation to system

F4-F5: Space-plant bulk
       Allow observation
       Remove obvious off-types

F6: Begin individual selection
    Plant-to-row evaluation

Advantages:
- Rapid generation advance (3 crops/year in CEA)
- Low labor in early generations
- Natural selection for system adaptation
```

### 4.4 Advantages and Limitations

**Advantages:**
- Minimal labor in early generations
- Small space requirement
- Natural selection operates
- Rapid generation advance possible
- Low cost

**Disadvantages:**
- Natural selection may not favor desired traits
- Cannot track specific families
- Limited flexibility
- May lose desirable rare alleles
- Delayed selection for some traits

## 5. Single Seed Descent (SSD)

### 5.1 Principle

**Definition:** Advance single seed from each F2 plant through generations to achieve homozygosity without selection.

**Procedure:**
```
F2: Plant population (e.g., 500 plants)
    Harvest 1 seed per plant → 500 F3 seeds

F3: Plant 500 seeds
    Harvest 1 seed per plant → 500 F4 seeds

F4: Plant 500 seeds
    Harvest 1 seed per plant → 500 F5 seeds

Continue until F6-F7 (mostly homozygous)

F6-F7: Begin selection
       - Plant families
       - Replicated trials
       - Select superior RILs (Recombinant Inbred Lines)
```

**Goal:** Create homozygous recombinant inbred lines (RILs) rapidly for selection in later generations.

### 5.2 Practical Implementation

**Space-Saving Techniques:**

**Controlled Environment Advantages:**
```
- Rapid generation cycling (6-8 weeks)
- Growth chambers or mini-greenhouse
- High density planting possible
- 4-6 generations per year

Example: Tomato SSD
- Plant F2-F5 in 4" pots
- 12-hour photoperiod for early flowering
- Harvest first flower for 1 seed
- Advance to next generation
```

**Large Populations:**
```
Can maintain 1000+ lines
Small containers
Minimal space
Only harvesting, no selection pressure
```

### 5.3 Rapid Generation Advance for CEA

**Optimized Protocol:**

```
Lettuce SSD in CEA:

F2-F6: Growth chamber protocol
       - 7-week cycles
       - LED lighting (16h photoperiod)
       - Hydroponic system
       - Small pots (3-inch)
       - 1 seed harvested per plant
       - 6 generations in 1 year possible

Result: F6 RILs in ~9-10 months
        vs. 4-5 years with traditional methods

F6-F7: Full evaluation
       - Replicated trials
       - Target production environment
       - Complete trait assessment
       - Select elite lines
```

### 5.4 Advantages and Limitations

**Advantages:**
- Fastest route to homozygosity
- Maintains maximum genetic diversity
- No bias from early selection
- Space efficient
- Excellent for QTL mapping populations (RILs)

**Disadvantages:**
- No early selection (may maintain poor genotypes)
- Requires rapid cycling ability
- Still need large F6 evaluation
- Labor for handling many lines

**Best Used When:**
- Creating mapping populations
- Species amenable to rapid cycling
- Want to preserve all variation
- Will conduct marker-assisted selection in F6

## 6. Backcross Breeding

### 6.1 Principle

**Definition:** Transfer of one or few genes from donor parent into elite recurrent parent background.

**Objective:** Improve elite variety for specific trait while maintaining all other characteristics.

**Standard Backcross Procedure:**

```
Recurrent Parent (RP) = Elite variety
Donor Parent (DP) = Source of desired gene

Year 1: RP × DP → F1

Year 2: F1 × RP → BC1
        (Select for donor trait)

Year 3: BC1 × RP → BC2
        (Select for donor trait)

Year 4: BC2 × RP → BC3
        (Select for donor trait)

Continue to BC5-BC6

Final: Self-pollinate final BC generation
       Select homozygous for donor gene
```

**Recovery of Recurrent Parent Genome:**

| Generation | % RP Genome | % DP Genome |
|------------|-------------|-------------|
| F1 | 50 | 50 |
| BC1 | 75 | 25 |
| BC2 | 87.5 | 12.5 |
| BC3 | 93.75 | 6.25 |
| BC4 | 96.875 | 3.125 |
| BC5 | 98.44 | 1.56 |
| BC6 | 99.22 | 0.78 |

**Formula:** % RP = [1 - (0.5)^(n+1)] × 100, where n = backcross generation

### 6.2 Marker-Assisted Backcrossing (MABC)

**Advantage:** Accelerates background recovery using molecular markers.

**Three Types of Selection:**

**1. Foreground Selection:**
- Select for target gene
- Molecular marker for gene of interest
- Ensures gene transferred

**2. Recombinant Selection:**
- Select for recombination near target gene
- Minimize linkage drag
- Reduce donor genome around target

**3. Background Selection:**
- Genotype with genome-wide markers
- Select individual with most RP alleles
- Accelerates background recovery
- May achieve 98% RP in BC2-BC3

**Workflow:**
```
Each BC generation:
1. Foreground: Verify presence of target gene (heterozygous)
2. Background: Genotype with 100-200 markers
   - Calculate % RP genome
   - Select individual with highest % RP
   - Reduces linkage drag
3. Backcross selected individual to RP
4. Repeat

Final generation:
- Self-pollinate BC3-BC4
- Foreground selection for homozygous target gene
- Background verification
```

### 6.3 CEA Backcross Example

**Objective:** Introgress TYLCV resistance gene into elite CEA tomato variety

**Parents:**
- Recurrent: 'CEA-Elite' (compact, high yield, poor disease resistance)
- Donor: 'TY-Resistant' (wild relative, resistant but poor quality)

**Program with MABC:**

```
2024: CE × TYR → F1
      Verify hybrid with markers

2025: F1 × CE → BC1 (200 plants)
      - Foreground: Select Ty-1 heterozygotes (100 plants)
      - Background: Genotype with 150 SNPs
      - Select plant with 85% CE genome (best of 100)
      - Backcross to CE

2026: BC1 × CE → BC2 (200 plants)
      - Foreground: Select Ty-1 heterozygotes
      - Background: Select for 95% CE genome
      - Focus on recombinants near Ty-1
      - Backcross to CE

2027: BC2 × CE → BC3 (200 plants)
      - Foreground: Select Ty-1 heterozygotes
      - Background: Select for >98% CE genome
      - Self-pollinate selected plants

2028: BC3F2 (500 plants)
      - Foreground: Select Ty-1 homozygotes
      - Phenotype: Verify resistance
      - Evaluate agronomic traits
      - Select elite BC3F2 lines

2029: Advanced testing
      - Multi-environment trials
      - Compare to original 'CEA-Elite'
      - Should be nearly identical except resistance
```

**Efficiency Gain:**
```
Traditional backcross: 6-7 BC generations, 7-8 years
MABC approach: 3 BC generations, 5 years
Faster recovery, less linkage drag
```

### 6.4 Advanced Backcross QTL (AB-QTL)

**Concept:** Combine backcrossing with QTL analysis to discover favorable alleles in donor parent.

**Procedure:**
```
1. Backcross to BC2-BC3
2. Develop large segregating population
3. QTL mapping
4. Identify unexpected positive QTL from donor
5. Introgress valuable QTL while discarding rest of donor genome
```

**Example:**
```
Wild lettuce backcross:
- Primary goal: Disease resistance
- Discover: QTL for heat tolerance from wild donor
- Benefit: Introgress both traits
```

## 7. Recurrent Selection

### 7.1 Principle

**Definition:** Cyclical selection and recombination to gradually increase frequency of favorable alleles.

**Procedure:**
```
Cycle 1:
- Evaluate base population
- Select superior individuals/families (10-20%)
- Intermating of selected individuals
- Create new population

Cycle 2:
- Evaluate progeny of selected parents
- Select again
- Intermating

Continue indefinitely

Each cycle increases frequency of favorable alleles
```

### 7.2 Types of Recurrent Selection

**Simple Recurrent Selection:**
```
- Select individuals based on phenotype
- Intermating selected
- Effective for high heritability traits
```

**Recurrent Selection with Progeny Testing:**
```
- Test progeny of candidate parents
- Select based on progeny performance
- More accurate for low heritability traits
```

**Reciprocal Recurrent Selection (RRS):**
```
- Two populations (e.g., heterotic groups)
- Select in Pop A based on testcross with Pop B
- Select in Pop B based on testcross with Pop A
- Improves hybrid performance
```

### 7.3 Application to CEA Crops

**Example: Lettuce Population Improvement**

**Objective:** Improve general combining ability for CEA traits

**Base Population:**
- 50 diverse lettuce lines
- Intermated to create synthetic population

**Cycle 1:**
```
- Plant 500 individuals from synthetic
- Grow in vertical farm conditions
- Measure: Growth rate, compactness, quality
- Calculate index scores
- Select top 50 individuals (10%)
- Intermating crosses: 50 × 50 (partial diallel)
- Harvest seed (Cycle 2 population)
```

**Cycle 2:**
```
- Plant 500 from Cycle 2 seed
- Population mean should be improved
- Select top 50 again
- Intermating
- Continue...
```

**Expected Progress:**
```
ΔG = i × h² × σP

If continuous traits with h² = 0.4
Selection intensity i = 1.76 (10%)
Expect gradual improvement each cycle

After 5 cycles: Significant gain
Frequency of favorable alleles increased
```

**CEA Advantages:**
```
- Rapid cycling (3 cycles/year possible)
- Precise phenotyping
- Controlled intermating
- Faster population improvement
```

## 8. Selecting the Appropriate Method

### 8.1 Decision Framework

**Consider:**
1. Crop reproduction system (self vs. cross-pollinated)
2. Number of traits to improve
3. Trait heritability
4. Available resources (time, space, labor)
5. Generation time
6. Need for pedigree information

**Comparison Table:**

| Method | Best For | Advantages | Time to Variety |
|--------|----------|------------|-----------------|
| Mass Selection | High h², simple traits | Fast, low cost | 3-5 years |
| Pure Line | Landrace improvement | Preserves purity | 4-6 years |
| Pedigree | Multiple traits | Maximum control | 8-12 years |
| Bulk | Natural selection | Low labor early | 8-10 years |
| SSD | Creating RILs, MAS | Rapid homozygosity | 2-3 years + testing |
| Backcross | Single gene transfer | Maintains elite | 5-7 years |
| Recurrent | Population improvement | Continuous gain | Ongoing |

### 8.2 Hybrid Approaches for CEA

**Combining Methods:**

**Example 1: Pedigree + SSD**
```
F2-F3: Pedigree (select for high priority traits)
F4-F6: SSD (rapid advance of selected families)
F7: Evaluation and final selection
```

**Example 2: Bulk + Marker-Assisted Selection**
```
F2-F4: Bulk (under selection pressure)
F5: Genotype with markers for key genes
     Select desired genotypes
F6-F7: Pedigree method
```

**Example 3: Backcross + Genomic Selection**
```
BC1-BC3: Marker-assisted background selection
Final BC: Genomic selection for additional traits
         While maintaining target gene
```

## Summary

Traditional breeding methods remain the foundation of variety development:

1. **Mass Selection**: Quick improvement of high heritability traits
2. **Pedigree Method**: Maximum control for multiple traits
3. **Bulk Method**: Low labor, natural selection
4. **Single Seed Descent**: Rapid route to homozygosity
5. **Backcross**: Precise gene transfer
6. **Recurrent Selection**: Continuous population improvement

Choice of method depends on objectives, resources, and crop characteristics. Molecular markers enhance all methods. CEA environments enable rapid generation advance and precise selection.

## Key Takeaways

- Different methods suit different objectives and crops
- Pedigree provides maximum information but requires most labor
- SSD fastest route to homozygous lines
- Backcrossing maintains elite varieties while adding traits
- CEA advantages: rapid cycling, precise phenotyping, controlled selection pressure
- Combining methods often optimal
- Molecular markers enhance efficiency of all methods

## Review Questions

1. When is mass selection most effective?
2. Describe the difference between pedigree and bulk methods.
3. How much of the recurrent parent genome is recovered in BC3?
4. What are the advantages of single seed descent?
5. Why might bulk method be less effective in CEA than field?
6. How does marker-assisted backcrossing accelerate breeding?
7. What is recurrent selection and when is it used?
8. Compare time requirements for pedigree vs. SSD approaches.
9. How can CEA environments enhance traditional breeding methods?
10. Design a breeding program for transferring disease resistance into an elite lettuce variety.

## Next Lesson

**Lesson 6: Hybrid Breeding and Heterosis** - We will explore hybrid vigor, development of inbred lines, hybrid seed production systems, and economics of hybrid varieties in CEA.

---

*Lesson 5 Complete*
