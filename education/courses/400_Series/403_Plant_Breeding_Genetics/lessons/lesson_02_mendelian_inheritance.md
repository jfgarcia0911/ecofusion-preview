# Lesson 2: Mendelian Inheritance and Gene Interactions

## Learning Objectives

By the end of this lesson, you will be able to:
- Apply Mendel's laws to predict inheritance patterns in plant breeding
- Calculate phenotypic and genotypic ratios for mono hybrid and dihybrid crosses
- Understand gene interactions including epistasis and complementary genes
- Analyze linkage and recombination in breeding programs
- Interpret pedigrees and inheritance patterns in crop development
- Apply Mendelian principles to CEA-specific trait selection

## Introduction

Gregor Mendel's experiments with pea plants (1856-1863) laid the foundation for modern genetics. His laws of inheritance remain fundamental to plant breeding, including the development of varieties for controlled environment agriculture. Understanding these principles allows breeders to predict offspring phenotypes, design crossing schemes, and efficiently select superior genotypes.

## 1. Mendel's Laws of Inheritance

### 1.1 Mendel's Experimental Approach

**Why Pea Plants?**
- True-breeding lines available
- Short generation time
- Easy to cross-pollinate
- Clear, discrete traits
- Self-fertilization possible

**Mendel's Seven Traits:**
1. Seed shape (round vs. wrinkled)
2. Seed color (yellow vs. green)
3. Pod shape (inflated vs. constricted)
4. Pod color (green vs. yellow)
5. Flower color (purple vs. white)
6. Flower position (axial vs. terminal)
7. Plant height (tall vs. dwarf)

**Experimental Design:**
```
P Generation (Parents)
    |
    | Cross-pollination
    ↓
F1 Generation (First Filial)
    |
    | Self-pollination
    ↓
F2 Generation (Second Filial)
    |
    | Observe ratios
```

### 1.2 Law of Segregation (Mendel's First Law)

**Principle**: Each parent carries two alleles for each trait, and these alleles segregate (separate) during gamete formation, with each gamete receiving only one allele.

**Key Points:**
- Genes exist in pairs (diploid organisms)
- Alleles separate during meiosis
- Each gamete receives one allele
- Random fusion of gametes at fertilization

**Example: Seed Shape in Peas**
```
P:    RR (Round)  ×  rr (wrinkled)
       |               |
Gametes: R        ×     r
       |               |
F1:        Rr (All round)
           |
      Self-fertilize
           ↓
F2:    RR : Rr : Rr : rr
       (1 : 2 : 1 genotypic ratio)

Phenotypes: 3 Round : 1 Wrinkled
```

**Punnett Square:**
```
        R    r
    -----------
  R |  RR | Rr |
    -----------
  r |  Rr | rr |
    -----------

Genotypic ratio: 1 RR : 2 Rr : 1 rr
Phenotypic ratio: 3 Round : 1 Wrinkled
```

### 1.3 Law of Independent Assortment (Mendel's Second Law)

**Principle**: Alleles for different genes segregate independently during gamete formation (applies to genes on different chromosomes or far apart on the same chromosome).

**Example: Two Traits in Peas**
```
P:  RRYY (Round, Yellow)  ×  rryy (Wrinkled, Green)
         |                        |
    Gametes: RY              ×     ry
         |                        |
F1:           RrYy (All Round, Yellow)
              |
         Self-fertilize
              ↓
F2: 16 combinations (4×4 Punnett square)
```

**Dihybrid Cross Punnett Square:**
```
           RY    Ry    rY    ry
    ---------------------------
RY  | RRYY | RRYy | RrYY | RrYy |
    ---------------------------
Ry  | RRYy | RRyy | RrYy | Rryy |
    ---------------------------
rY  | RrYY | RrYy | rrYY | rrYy |
    ---------------------------
ry  | RrYy | Rryy | rrYy | rryy |
    ---------------------------

Phenotypic Ratio: 9:3:3:1
- 9 Round, Yellow
- 3 Round, Green
- 3 Wrinkled, Yellow
- 1 Wrinkled, Green
```

**Mathematical Approach:**
```
For n heterozygous gene pairs:
- Number of gamete types: 2ⁿ
- Number of F2 genotypes: 3ⁿ
- Number of F2 phenotypes: 2ⁿ (with complete dominance)
- Number of F2 individuals in Punnett square: 4ⁿ

Example for dihybrid (n=2):
- Gamete types: 2² = 4
- F2 genotypes: 3² = 9
- F2 phenotypes: 2² = 4
- Punnett square size: 4² = 16
```

### 1.4 Law of Dominance

**Principle**: In a heterozygote, one allele (dominant) may mask the expression of another allele (recessive).

**Terminology:**
- **Dominant allele**: Expressed in heterozygotes (uppercase, e.g., R)
- **Recessive allele**: Only expressed in homozygotes (lowercase, e.g., r)
- **Homozygous dominant**: AA (shows dominant phenotype)
- **Heterozygous**: Aa (shows dominant phenotype)
- **Homozygous recessive**: aa (shows recessive phenotype)

## 2. Monohybrid Crosses

### 2.1 Complete Dominance

**Cross Analysis:**
```
Parents:   Aa  ×  Aa
           |     |
Gametes:  A,a   A,a
           |     |
F1:     AA, Aa, Aa, aa

Genotypic ratio: 1:2:1 (AA:Aa:aa)
Phenotypic ratio: 3:1 (Dominant:Recessive)
```

**Test Cross:**
Used to determine if an individual showing dominant phenotype is homozygous or heterozygous.

```
Unknown × Homozygous recessive (aa)

If unknown is AA:
AA × aa → All Aa (dominant phenotype)

If unknown is Aa:
Aa × aa → 1 Aa : 1 aa (1:1 ratio)
```

### 2.2 Incomplete Dominance

Neither allele is completely dominant; heterozygote shows intermediate phenotype.

**Example: Flower Color in Snapdragons**
```
P:    RR (Red)  ×  WW (White)
       |              |
F1:        RW (Pink - intermediate)
           |
      Self-pollinate
           ↓
F2:    RR : RW : RW : WW
       Red  Pink Pink White

Ratio: 1 Red : 2 Pink : 1 White
(Genotypic and phenotypic ratios same: 1:2:1)
```

**CEA Application:**
- Anthocyanin production in lettuce
- Leaf color intensity
- Some fruit pigmentation patterns

### 2.3 Codominance

Both alleles are fully expressed in heterozygotes.

**Example: Blood Type AB in Humans**
```
Genotype    Phenotype
IAIA        Type A
IBIB        Type B
IAIB        Type AB (both expressed)
ii          Type O
```

**Plant Examples:**
- Some flower color patterns
- Certain enzyme isoforms
- Molecular markers (codominant markers show both alleles)

## 3. Dihybrid and Polyhybrid Crosses

### 3.1 Dihybrid Cross Analysis

**Example in CEA: Lettuce Traits**

Let's consider:
- Leaf color: G (green, dominant) vs. g (red)
- Leaf shape: C (crisp, dominant) vs. c (butterhead)

```
P:  GGCC (Green, Crisp) × ggcc (Red, Butterhead)
         |                      |
F1:          GgCc (All Green, Crisp)
             |
        Self-pollinate
             ↓
F2: Expected ratio 9:3:3:1

9 Green, Crisp (G_C_)
3 Green, Butterhead (G_cc)
3 Red, Crisp (ggC_)
1 Red, Butterhead (ggcc)
```

**Genotype Distribution:**
```
1 GGCC    2 GGCc    1 GGcc
2 GgCC    4 GgCc    2 Ggcc
1 ggCC    2 ggCc    1 ggcc
```

### 3.2 Branch Diagram Method

Alternative to Punnett squares for multiple genes:

```
Lettuce Cross: GgCc × GgCc

Leaf Color (Gg × Gg):
3/4 G_ (Green) ─┬─ 3/4 C_ (Crisp) = 9/16 Green, Crisp
                └─ 1/4 cc (Butterhead) = 3/16 Green, Butterhead

1/4 gg (Red) ───┬─ 3/4 C_ (Crisp) = 3/16 Red, Crisp
                └─ 1/4 cc (Butterhead) = 1/16 Red, Butterhead
```

### 3.3 Trihybrid Crosses

Three genes segregating independently.

**Example: Tomato Breeding for CEA**
- Plant height: D (dwarf, dominant) vs. d (tall)
- Fruit color: R (red, dominant) vs. r (yellow)
- Leaf type: P (potato leaf, dominant) vs. p (regular)

```
F1: DdRrPp × DdRrPp

Expected F2 ratio: (3:1)(3:1)(3:1) = 27:9:9:9:3:3:3:1

Number of phenotypic classes: 2³ = 8
Number of genotypic classes: 3³ = 27
```

**Phenotypic Categories:**
- 27/64 Dwarf, Red, Potato leaf
- 9/64 Dwarf, Red, Regular leaf
- 9/64 Dwarf, Yellow, Potato leaf
- 9/64 Tall, Red, Potato leaf
- 3/64 Dwarf, Yellow, Regular leaf
- 3/64 Tall, Red, Regular leaf
- 3/64 Tall, Yellow, Potato leaf
- 1/64 Tall, Yellow, Regular leaf

## 4. Gene Interactions

### 4.1 Epistasis

One gene masks or modifies the expression of another gene at a different locus.

**Types of Epistasis:**

**A. Dominant Epistasis (12:3:1 ratio)**

Example: Squash color
```
W_ = White (epistatic, masks color gene)
wwY_ = Yellow
wwyy = Green

Cross: WwYy × WwYy
Ratio: 12 White : 3 Yellow : 1 Green
```

**B. Recessive Epistasis (9:3:4 ratio)**

Example: Flower color pathway
```
Gene C: C_ = allows color, cc = blocks color (albino)
Gene P: P_ = purple, pp = red

Cross: CcPp × CcPp

9 C_P_ = Purple
3 C_pp = Red
3 ccP_ = White (epistatic)
1 ccpp = White (epistatic)

Ratio: 9 Purple : 3 Red : 4 White
```

**C. Duplicate Dominant Epistasis (15:1 ratio)**

Example: Seed capsule shape in Shepherd's purse
```
Either A_ or B_ = Triangular
Only aabb = Ovoid

Cross: AaBb × AaBb
Ratio: 15 Triangular : 1 Ovoid
```

**D. Duplicate Recessive Epistasis (9:7 ratio)**

Example: Flower color requiring two enzymes
```
Both C_ and P_ needed for purple
Any recessive homozygote = White

Cross: CcPp × CcPp
Ratio: 9 Purple : 7 White
```

**E. Dominant and Recessive Epistasis (13:3 ratio)**

```
A_ epistatic (masks B)
aaB_ = different color
aabb = third color

Cross: AaBb × AaBb
Ratio varies based on specific epistatic relationships
```

### 4.2 Complementary Gene Action

Two or more genes must be present in dominant form for trait expression.

**Example: Sweet Pea Flower Color**
```
Gene C (enzyme 1) and Gene P (enzyme 2) both needed for purple

Pathway:
Precursor --[C enzyme]--> Intermediate --[P enzyme]--> Purple Pigment

Cross: CcPp × CcPp

9 C_P_ = Purple (both enzymes present)
3 C_pp = White (enzyme 2 missing)
3 ccP_ = White (enzyme 1 missing)
1 ccpp = White (both enzymes missing)

Ratio: 9 Purple : 7 White
```

**CEA Application: Anthocyanin Biosynthesis**
```
Multiple genes required for full pigment pathway:
- Regulatory genes (MYB, bHLH)
- Structural genes (CHS, F3H, DFR, ANS)
- Modification genes (glycosyltransferases)

Missing any critical gene → No anthocyanin
```

### 4.3 Supplementary Gene Interaction

One gene requires another to be expressed.

**Example: Fruit Shape in Squash**
```
Gene A: A_ = Disc, aa = Sphere
Gene B: B_ = modification (only if A present)

AaB_ = Disc
Aabb = Sphere
aaB_ = Sphere
aabb = Sphere

Ratio: 9:6:1 or 9:7 depending on interaction
```

### 4.4 Modifier Genes

Genes that enhance or suppress expression of other genes.

**Example: Color Intensity**
```
Main gene: R_ = red, rr = white
Modifier: I_ = intensifies red, ii = normal

R_I_ = Dark red
R_ii = Red
rrI_ = White
rrii = White
```

**CEA Applications:**
- Leaf color intensity in lettuce
- Fruit size modifiers in tomato
- Plant height regulation
- Flowering time fine-tuning

### 4.5 Calculating Modified Ratios

**General Approach:**
1. Determine expected 9:3:3:1 ratio
2. Identify which genotypic classes have same phenotype
3. Combine classes with identical phenotypes
4. Reduce to simplest ratio

**Practice Problem:**
```
Pepper fruit color and shape:
Gene R: R_ = Red, rr = yellow
Gene L: L_ = Long, ll = round
Epistasis: rr is epistatic to L (yellow always round)

Cross: RrLl × RrLl

Expected classes:
9 R_L_ = Red, Long
3 R_ll = Red, Round
3 rrL_ = Yellow, Round (epistasis)
1 rrll = Yellow, Round

Modified ratio: 9 Red Long : 3 Red Round : 4 Yellow Round
                (9:3:4)
```

## 5. Linkage and Recombination

### 5.1 Linked Genes

Genes located on the same chromosome tend to be inherited together.

**Complete Linkage (very rare):**
```
Parent: AB/ab × ab/ab

If complete linkage:
Offspring: 50% AB/ab : 50% ab/ab
(Only parental types, no recombinants)
```

**Incomplete Linkage (common):**
```
Parent: AB/ab × ab/ab

Offspring:
40% AB/ab (Parental)
40% ab/ab (Parental)
10% Ab/ab (Recombinant)
10% aB/ab (Recombinant)

Recombination frequency = 20% (10% + 10%)
```

### 5.2 Recombination Frequency and Map Distance

**Relationship:**
- 1% recombination = 1 map unit (centiMorgan, cM)
- Maximum observable recombination = 50% (genes unlinked)

**Calculating Map Distance:**
```
Map distance (cM) = (Number of recombinants / Total offspring) × 100

Example:
Testcross: AB/ab × ab/ab
Offspring: 460 AB/ab, 440 ab/ab, 50 Ab/ab, 50 aB/ab
Total = 1000

Recombinants = 50 + 50 = 100
Map distance = (100/1000) × 100 = 10 cM
```

### 5.3 Three-Point Testcross

Used to determine gene order and map distances.

**Example:**
```
Genes: A, B, C
Testcross: ABC/abc × abc/abc

Offspring counts:
ABC: 320 ─┐
abc: 315 ─┤ Parental (most frequent)
         ─┘
AbC: 65  ─┐
aBc: 60  ─┤ Single crossover (region 1)
         ─┘
Abc: 50  ─┐
aBC: 45  ─┤ Single crossover (region 2)
         ─┘
ABc: 3   ─┐
abC: 2   ─┤ Double crossover (least frequent)
         ─┘

Steps:
1. Identify parental types (most frequent)
2. Identify double crossover class (least frequent)
3. Compare double crossover to parentals to determine gene order
4. Calculate map distances
```

**Gene Order Determination:**
```
Parentals:  ABC and abc
DCO:        ABc and abC

Middle gene changes in DCO compared to parentals.
Here, C changes → B is in the middle

Correct order: A—B—C or C—B—A
```

**Map Distance Calculation:**
```
Region A-B:
Single CO (region 1) + DCO = 65 + 60 + 3 + 2 = 130
Distance = (130/1000) × 100 = 13 cM

Region B-C:
Single CO (region 2) + DCO = 50 + 45 + 3 + 2 = 100
Distance = (100/1000) × 100 = 10 cM

Genetic Map:
A————13 cM————B————10 cM————C
```

### 5.4 Coefficient of Coincidence (COC) and Interference

**COC** measures whether double crossovers occur at expected frequency.

```
COC = Observed DCO / Expected DCO

Expected DCO = (Map distance A-B/100) × (Map distance B-C/100) × Total

Example:
Expected DCO = (0.13) × (0.10) × 1000 = 13
Observed DCO = 3 + 2 = 5

COC = 5/13 = 0.385
```

**Interference (I):**
```
I = 1 - COC = 1 - 0.385 = 0.615

Interpretation:
I = 0: No interference (DCO as expected)
I = 1: Complete interference (no DCO)
I = 0.615: 61.5% of expected DCO are prevented
```

### 5.5 Linkage in Breeding Programs

**Implications:**
- Linked genes inherited together (linkage drag)
- Difficult to break unfavorable associations
- Can be advantageous for multi-trait selection
- Affects population size needed
- Influences breeding method choice

**Strategies to Break Linkage:**
1. Large population sizes (more recombinants)
2. Multiple generations of crossing
3. Marker-assisted selection
4. Induced recombination

**CEA Example: Tomato Breeding**
```
Desired: Dwarf plant (sp gene) + Large fruit
Problem: sp linked to small fruit genes

Solution:
- Large F2 population to find recombinants
- Select rare dwarf plants with large fruit
- Marker-assisted selection to identify recombinants early
```

## 6. Sex-Linked Inheritance

### 6.1 Sex Determination in Plants

**Types:**
- **Dioecious**: Separate male and female plants (e.g., asparagus, hemp, hops)
- **Monoecious**: Male and female flowers on same plant (e.g., cucumber, maize)
- **Hermaphroditic**: Perfect flowers (most plants)

**Sex Chromosomes:**
```
Some dioecious plants:
Female: XX
Male: XY (or X0 in some species)

Example: Asparagus
Female: XX (desired for production)
Male: XY (more vigorous but not harvested)
```

### 6.2 Sex-Linked Traits

Genes located on sex chromosomes show sex-linked inheritance.

**X-Linked Recessive:**
```
Example (theoretical):
Female: XAXA or XAXa (normal)
        XaXa (affected)
Male:   XAY (normal)
        XaY (affected)

Cross: XAXa × XAY
Offspring:
25% XAXA (normal female)
25% XAXa (carrier female)
25% XAY (normal male)
25% XaY (affected male)
```

### 6.3 Applications in CEA

**Cucumber Sex Expression:**
Controlled by genes, not sex chromosomes:
- M gene: Monoecious (male and female flowers)
- F gene: Increased femaleness
- A gene: Androecious (male only)

**Breeding Strategy:**
```
Gynoecious (all female) × Monoecious (male flowers)
        ↓
Produces hybrid seed efficiently
Maximizes fruit production in CEA
```

## 7. Pedigree Analysis

### 7.1 Pedigree Symbols

```
Standard Symbols:

○ = Female
□ = Male
◇ = Unknown sex
● = Affected female
■ = Affected male
○—□ = Mating
  |
  ○ = Offspring
○=□ = Consanguineous mating (related individuals)
```

### 7.2 Inheritance Patterns

**Dominant Trait Pedigree:**
```
        □—○
       /  |  \
      ■   ○   □

Characteristics:
- Appears in every generation
- Affected individuals have at least one affected parent
- Males and females equally affected
- ~50% of offspring affected (if parent heterozygous)
```

**Recessive Trait Pedigree:**
```
        □—○
       /  |  \
      □   ●   □
          |
        □—●—□
           |
          /|\
         ■ ○ ■

Characteristics:
- Can skip generations
- Affected individuals may have unaffected parents
- More common with consanguinity
- ~25% of offspring affected (if both parents carriers)
```

### 7.3 Pedigree Analysis in Plant Breeding

**Uses:**
- Track trait inheritance in breeding lines
- Identify heterozygous individuals
- Plan crossing strategies
- Predict offspring genotypes

**Example: Lettuce Breeding Pedigree**
```
Generation 1:   Red Leaf (RR) × Green Leaf (GG)
                        |
Generation 2:      All Red/Green (RG) - F1 hybrid
                        |
Generation 3:      Self-pollinate F1
                        |
                   /    |    \
                  RR   RG    GG
                 Red  Red   Green
                (Selected breeding line)
                        |
Generation 4:      Continued selection...
```

## 8. CEA-Specific Applications

### 8.1 Trait Inheritance in Leafy Greens

**Lettuce Leaf Color:**
```
Gene R: Red pigmentation
Inheritance: Partially dominant

RR = Deep red
Rr = Medium red
rr = Green

CEA Breeding Goal:
- Select for consistent color under LED lighting
- R/r ratio affects anthocyanin under blue light
- Test under different light spectra
```

**Bolting Resistance:**
```
Multiple genes involved (quantitative trait)
Some major genes identified:
- LsLFY controls flowering time
- LsFT regulates bolting

Breeding approach:
- Select late-bolting in warm CEA conditions
- Test under various photoperiods
- Combine with other desirable traits
```

### 8.2 Tomato Genetics for CEA

**Plant Architecture:**
```
Gene sp (self-pruning): Determinate growth
Inheritance: Recessive

SP/SP or SP/sp = Indeterminate (climbing)
sp/sp = Determinate (compact, bush)

CEA Application:
- sp/sp preferred for vertical farms
- Space-efficient
- Easier harvest management
```

**Fruit Characteristics:**
```
Gene o (old gold): Beta-carotene content
Gene r (ripening): Ethylene regulation

Cross: oo (high beta-carotene) × rr (extended shelf life)
F1: Oo Rr (normal beta-carotene, normal ripening)
F2: Segregation for both traits

Select: oo rr (high nutrition, long shelf life)
```

### 8.3 Herb Breeding Applications

**Basil Essential Oils:**
```
Multiple genes control oil composition:
- Linalool content
- Methyl chavicol levels
- Eugenol production

Complex inheritance (likely polygenic)
Selection strategy:
- Phenotype: GC-MS analysis of oils
- Select parents with desired profiles
- Progeny testing under LED conditions
```

## Practical Examples

### Example 1: Predicting F2 Ratios

**Problem:**
In CEA lettuce, red leaf (R) is dominant to green (r), and crisp texture (C) is dominant to butterhead (c). If you cross two F1 plants (RrCc × RrCc), what proportion of F2 plants will be green and butterhead?

**Solution:**
```
For green (rr): 1/4
For butterhead (cc): 1/4
For both (independent assortment): 1/4 × 1/4 = 1/16

Answer: 1/16 or 6.25% of F2 plants
```

### Example 2: Modified Ratio with Epistasis

**Problem:**
In peppers, gene R controls red color (R_) vs. yellow (rr), and gene H controls heat (H_) vs. mild (hh). However, rr is epistatic to H (yellow peppers are always mild regardless of H genotype). What ratio is expected from RrHh × RrHh?

**Solution:**
```
Expected 9:3:3:1 becomes:
9 R_H_ = Red, Hot
3 R_hh = Red, Mild
3 rrH_ = Yellow, Mild (epistasis)
1 rrhh = Yellow, Mild

Modified ratio: 9 Red Hot : 3 Red Mild : 4 Yellow Mild
                (9:3:4)
```

### Example 3: Linkage Calculation

**Problem:**
In tomato, genes for plant height (D = dwarf) and leaf type (P = potato leaf) are linked. A testcross (DdPp × ddpp) produces:
- 420 Dwarf, Potato leaf
- 425 Tall, Regular leaf
- 55 Dwarf, Regular leaf
- 50 Tall, Potato leaf

Calculate the map distance between D and P.

**Solution:**
```
Total progeny = 950
Recombinants = 55 + 50 = 105

Map distance = (105/950) × 100 = 11.05 cM

Genes are ~11 cM apart
```

## Summary

This lesson covered Mendelian inheritance and its applications in plant breeding:

1. **Mendel's Laws**: Segregation, independent assortment, and dominance
2. **Monohybrid and Dihybrid Crosses**: Predicting ratios and analyzing inheritance
3. **Gene Interactions**: Epistasis, complementary genes, and modifier genes
4. **Linkage**: Recombination frequency and genetic mapping
5. **Sex-Linked Inheritance**: Applications in dioecious crops
6. **Pedigree Analysis**: Tracking traits through generations
7. **CEA Applications**: Specific examples in lettuce, tomato, and herbs

Understanding these principles is essential for designing efficient breeding programs and predicting the outcomes of crosses in CEA crop development.

## Key Takeaways

- Mendelian ratios (3:1, 9:3:3:1) are foundation for predicting inheritance
- Gene interactions modify expected ratios
- Linkage affects independent assortment
- Pedigree analysis helps plan breeding strategies
- CEA environments may affect trait expression
- Test crosses verify genotypes
- Modified ratios indicate gene interactions

## Review Questions

1. What is the expected phenotypic ratio from a monohybrid cross (Aa × Aa) with complete dominance?
2. How does incomplete dominance differ from complete dominance?
3. Explain the difference between epistasis and dominance.
4. If two genes are 20 cM apart, what percentage of gametes will be recombinant?
5. How would you determine if a gene is sex-linked in a dioecious plant?
6. What is a testcross and what is its purpose?
7. Draw a Punnett square for a dihybrid cross and label all genotypes.
8. Why is linkage important in plant breeding programs?
9. Describe how to identify the middle gene in a three-point testcross.
10. Give an example of epistasis relevant to CEA crop breeding.

## Next Lesson

**Lesson 3: Quantitative Genetics and Trait Analysis** - We will explore the genetics of continuous variation, heritability, and selection strategies for complex traits in CEA environments.

---

*Lesson 2 Complete*
