# Cheatsheet 1: Essential Genetics & Breeding Formulas

## Quick Reference Guide for Plant Breeding Calculations

---

## Mendelian Genetics

### Basic Ratios

**Monohybrid Cross (Aa × Aa)**
```
Genotypic ratio: 1 AA : 2 Aa : 1 aa
Phenotypic ratio (complete dominance): 3 Dominant : 1 Recessive
Phenotypic ratio (incomplete dominance): 1:2:1
```

**Dihybrid Cross (AaBb × AaBb)**
```
Phenotypic ratio: 9:3:3:1
Genotypic classes: 9 different genotypes
```

**Test Cross**
```
Unknown (A_) × Homozygous recessive (aa)
If 100% dominant offspring → Unknown is AA
If 1:1 ratio → Unknown is Aa
```

### Linkage and Mapping

**Recombination Frequency**
```
r = (Number of recombinants / Total offspring) × 100%
```

**Map Distance**
```
Map distance (cM) = Recombination frequency (%)
1 cM = 1% recombination

Example: 15% recombination = 15 cM apart
```

**Expected Genotype Frequency**
```
For n heterozygous independent genes in F2:
- Specific homozygous genotype: (1/4)^n
- Example: 3 genes homozygous = (1/4)³ = 1/64
```

---

## Quantitative Genetics

### Heritability

**Broad-Sense Heritability (H²)**
```
H² = VG / VP
H² = (VA + VD + VI) / VP

Where:
VG = Genetic variance
VP = Phenotypic variance
VA = Additive variance
VD = Dominance variance
VI = Epistatic variance
```

**Narrow-Sense Heritability (h²)**
```
h² = VA / VP

Most important for predicting selection response
```

**From Parent-Offspring Regression**
```
h² = 2 × b(offspring on mid-parent)
h² = b(offspring on one parent)
```

### Response to Selection

**Breeder's Equation**
```
R = h² × S

Where:
R = Response to selection (genetic gain)
h² = Narrow-sense heritability
S = Selection differential (mean of selected - population mean)
```

**Alternative Form**
```
R = i × h² × σP

Where:
i = Selection intensity (standardized)
σP = Phenotypic standard deviation
```

**Selection Intensity (i) Values**

| % Selected | Selection Intensity (i) |
|------------|------------------------|
| 50% | 0.80 |
| 20% | 1.40 |
| 10% | 1.76 |
| 5% | 2.06 |
| 1% | 2.67 |

### Multi-Generation Response

**Cumulative Gain**
```
Total gain after n generations = n × R
(Assumes constant h² and S)
```

---

## Backcross Breeding

### Genome Recovery

**Recurrent Parent Genome Percentage**
```
% RP genome = [1 - (0.5)^(n+1)] × 100

Where n = backcross generation

BC1: 75.0%
BC2: 87.5%
BC3: 93.75%
BC4: 96.875%
BC5: 98.4375%
BC6: 99.22%
```

### Inbreeding Coefficient

**After Selfing**
```
F = 1 - (0.5)^t

Where t = generations of selfing

F2: F = 0.50 (50% homozygous)
F3: F = 0.75
F4: F = 0.875
F5: F = 0.9375
F7: F = 0.9844 (~98.5%)
```

---

## Hybrid Breeding

### Heterosis

**Mid-Parent Heterosis**
```
MPH = F1 - [(P1 + P2) / 2]

Percent MPH = [F1 - MP] / MP × 100%
```

**Best-Parent Heterosis**
```
BPH = F1 - Better Parent

Percent BPH = [F1 - BP] / BP × 100%
```

### QTL Effects

**Additive Effect (a)**
```
a = (Mean of BB - Mean of AA) / 2
```

**Dominance Effect (d)**
```
d = Mean of AB - [(Mean of AA + Mean of BB) / 2]
```

**Proportion of Variance Explained**
```
R² = Variance explained by QTL / Total phenotypic variance
```

---

## Population Genetics

### Hardy-Weinberg Equilibrium

**For two alleles (A and a) with frequencies p and q:**
```
p + q = 1

Genotype frequencies:
AA: p²
Aa: 2pq
aa: q²

p² + 2pq + q² = 1
```

**Example:**
```
If freq(A) = 0.7, freq(a) = 0.3
AA = 0.49 (49%)
Aa = 0.42 (42%)
aa = 0.09 (9%)
```

---

## Marker-Assisted Selection

### Foreground Selection

**Number of Plants with Target Genotype**
```
For recessive (aa) in F2:
Frequency = 1/4 = 25%

For dominant (A_) in F2:
Frequency = 3/4 = 75%
```

### Background Selection

**Genome Recovery Calculation**
```
% RP genome = (# RP marker alleles / Total alleles) × 100

Example: 100 markers (200 alleles)
185 RP alleles / 200 = 92.5% RP genome
```

---

## Statistical Calculations

### Coefficient of Variation (CV)

**Measure of Uniformity**
```
CV = (Standard Deviation / Mean) × 100%

Example:
Mean = 200 g
SD = 16 g
CV = (16/200) × 100 = 8%

Lower CV = More uniform (desirable for CEA)
```

### Standard Error

```
SE = SD / √n

Where n = sample size
```

### Confidence Interval (95%)

```
CI = Mean ± (1.96 × SE)
```

---

## CEA-Specific Calculations

### Crop Cycles Per Year

```
Cycles/year = 365 / Days to maturity

Example:
Variety A: 365 / 35 days = 10.4 cycles
Variety B: 365 / 28 days = 13.0 cycles
Difference = 2.6 more cycles with Variety B
```

### Selection Index

**General Form**
```
I = b₁X₁ + b₂X₂ + b₃X₃ + ... + bₙXₙ

Where:
I = Index value
bᵢ = Weight for trait i
Xᵢ = Value for trait i

Example CEA Lettuce:
I = 10(Compactness score) + 8(Growth rate) + 5(Yield, g/10) + 3(Quality score)
```

---

## Quick Conversion Table

### Probability to Plant Number

| Genotype Frequency | Plants Needed for 95% Probability |
|-------------------|-----------------------------------|
| 1/4 (25%) | 12 |
| 1/16 (6.25%) | 48 |
| 1/64 (1.56%) | 192 |
| 1/256 (0.39%) | 768 |

**Formula:**
```
N = -ln(1-0.95) / p ≈ 3 / p

Where p = genotype frequency
```

---

## Genomic Selection

### Prediction Accuracy

**Approximate Formula**
```
r ≈ √[n × h² / (n × h² + M)]

Where:
r = Prediction accuracy
n = Training population size
h² = Heritability
M = Effective number of chromosome segments
```

---

## Common Abbreviations

- **R**: Response to selection
- **h²**: Narrow-sense heritability
- **H²**: Broad-sense heritability
- **S**: Selection differential
- **i**: Selection intensity
- **σP**: Phenotypic standard deviation
- **VA**: Additive genetic variance
- **VE**: Environmental variance
- **VP**: Phenotypic variance
- **cM**: CentiMorgan (map distance)
- **QTL**: Quantitative trait locus
- **MAS**: Marker-assisted selection
- **GCA**: General combining ability
- **SCA**: Specific combining ability
- **DH**: Doubled haploid
- **BC**: Backcross
- **RP**: Recurrent parent

---

## Pro Tips

1. **Always check units** - Ensure consistency (g vs. kg, cm vs. m)
2. **Round appropriately** - Report to reasonable precision
3. **Use selection intensity tables** - More accurate than approximations
4. **Document assumptions** - Especially for heritability estimates
5. **Validate calculations** - Double-check critical breeding decisions
6. **Consider G×E** - Formulas assume consistent environments
7. **Population size matters** - Larger populations = more accurate estimates

---

**Keep this cheatsheet handy during problem sets and breeding program planning!**

*Course 403: Plant Breeding & Genetics for CEA - EcoFusion Academy*
