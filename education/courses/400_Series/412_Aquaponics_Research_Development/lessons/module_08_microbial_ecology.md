# Module 8: Microbial Ecology Studies

## Learning Objectives

- Apply microbiome sampling and preservation techniques
- Conduct DNA extraction and sequencing for microbial analysis
- Analyze microbial community structure and diversity
- Characterize functional genes in aquaponics systems
- Study cultivable bacteria and their roles

## 8.1 Microbiome Sampling Strategies

### Sample Collection Protocols

```
SAMPLING LOCATIONS IN AQUAPONICS:

┌────────────────────────────────────────────┐
│  BIOFILM SAMPLES                           │
│  ├── Biofilter media (surface scraping)   │
│  ├── Tank walls (swab method)             │
│  ├── Plant roots (rhizosphere)            │
│  └── Pipe surfaces                        │
│                                            │
│  WATER SAMPLES                             │
│  ├── Fish tank water                      │
│  ├── Biofilter effluent                   │
│  ├── Plant bed water                      │
│  └── Sump water                           │
│                                            │
│  SOLID SAMPLES                             │
│  ├── Fish feces                           │
│  ├── Uneaten feed                         │
│  ├── Sludge                               │
│  └── Growing media                        │
└────────────────────────────────────────────┘

SAMPLE SIZE REQUIREMENTS:
├── DNA extraction: 0.5-2 g wet weight
├── Cultivable bacteria: 1-5 g
├── Replicates: ≥3 per location
└── Controls: Sterile equipment blanks
```

### Preservation Methods

```
PRESERVATION PROTOCOLS:

IMMEDIATE DNA EXTRACTION:
└── Best for accuracy, process within 4 hours

FROZEN STORAGE (-80°C):
├── For samples that cannot be processed immediately
├── Stable for months to years
├── Flash freeze in liquid nitrogen if available
└── Avoid freeze-thaw cycles

PRESERVATION BUFFERS:
├── RNAlater (commercial): 1:5 sample:buffer ratio
├── Ethanol (95%): Simple, effective for DNA
├── Lysis buffer: Immediate cell lysis
└── Storage: -20°C or -80°C

SAMPLE COLLECTION PROCEDURE:

1. BIOFILM SAMPLING:
   ├── Sterilize sampling tool (flame/autoclave)
   ├── Scrape 1-2 cm² surface area
   ├── Transfer to sterile tube
   ├── Add preservation buffer or freeze
   └── Record location, depth, date/time

2. WATER SAMPLING:
   ├── Collect 500-1000 mL
   ├── Filter through 0.22 μm membrane
   ├── Transfer filter to sterile tube
   ├── Freeze or add buffer
   └── Process within 24 hours if possible

3. QUALITY CONTROL:
   ├── Negative controls (sterile swabs)
   ├── Equipment blanks
   ├── Duplicate samples (10% of total)
   └── Chain of custody documentation
```

## 8.2 DNA Extraction and Sequencing

### DNA Extraction Protocols

```
COMMERCIAL DNA EXTRACTION KITS:

┌──────────────────┬──────────┬──────────┬──────────┐
│      Kit         │  Yield   │   Time   │   Cost   │
├──────────────────┼──────────┼──────────┼──────────┤
│ PowerSoil        │   High   │  45 min  │  $7/rxn  │
│ (Qiagen)         │          │          │          │
├──────────────────┼──────────┼──────────┼──────────┤
│ ZymoBIOMICS      │ Very High│  30 min  │  $6/rxn  │
│ (Zymo Research)  │          │          │          │
├──────────────────┼──────────┼──────────┼──────────┤
│ FastDNA Spin     │  Medium  │  60 min  │  $8/rxn  │
│ (MP Biomedicals) │          │          │          │
└──────────────────┴──────────┴──────────┴──────────┘

QUALITY ASSESSMENT:

DNA QUANTITY:
├── Method: Fluorometry (Qubit)
├── Target: 20-100 ng/μL
└── Minimum: 5 ng/μL for sequencing

DNA PURITY:
├── A₂₆₀/A₂₈₀ ratio: 1.8-2.0 (optimal)
├── A₂₆₀/A₂₃₀ ratio: 2.0-2.2 (optimal)
└── Low ratios indicate contamination

DNA INTEGRITY:
├── Method: Gel electrophoresis
├── Expect: High molecular weight band
└── Degraded DNA appears as smear
```

### 16S rRNA Gene Sequencing

```
AMPLICON SEQUENCING WORKFLOW:

1. PCR AMPLIFICATION
   Target: 16S rRNA gene (bacteria/archaea)
   Primers:
   ├── V3-V4 region: 341F/805R (most common)
   ├── V4 region: 515F/806R
   └── Full length: 27F/1492R

   PCR Conditions:
   ├── Initial denaturation: 95°C, 3 min
   ├── 25-30 cycles:
   │   ├── 95°C, 30 sec (denature)
   │   ├── 55°C, 30 sec (anneal)
   │   └── 72°C, 30 sec (extend)
   └── Final extension: 72°C, 5 min

2. LIBRARY PREPARATION
   ├── Purify PCR products
   ├── Quantify DNA
   ├── Normalize concentrations
   ├── Add index sequences (barcode)
   └── Pool samples

3. SEQUENCING
   Platform: Illumina MiSeq (most common)
   ├── Read length: 2 × 250 bp (paired-end)
   ├── Depth: 10,000-50,000 reads per sample
   ├── Cost: ~$30-50 per sample
   └── Turnaround: 2-3 weeks

4. BIOINFORMATICS ANALYSIS
   └── See Section 8.3
```

### Shotgun Metagenomics

```
WHOLE GENOME SEQUENCING:

ADVANTAGES OVER 16S:
├── Species-level resolution
├── Functional gene identification
├── Metabolic pathway reconstruction
└── Novel organism discovery

LIMITATIONS:
├── Higher cost ($200-500 per sample)
├── Requires more DNA (>1 μg)
├── Complex bioinformatics
└── Requires high-performance computing

WORKFLOW:
1. DNA fragmentation (mechanical or enzymatic)
2. Library preparation (Illumina TruSeq)
3. Sequencing (≥10 million reads per sample)
4. Quality control and filtering
5. Assembly and annotation
6. Functional analysis

APPLICATIONS IN AQUAPONICS:
├── Identify novel nitrifying bacteria
├── Characterize nitrogen cycling pathways
├── Discover antibiotic resistance genes
└── Assess pathogen presence
```

## 8.3 Microbial Community Analysis

### Diversity Metrics

```
ALPHA DIVERSITY (Within-sample):

1. RICHNESS (Number of species)
   ├── Observed OTUs/ASVs
   ├── Chao1 estimator
   └── ACE (Abundance-based Coverage Estimator)

2. EVENNESS (Distribution of abundance)
   ├── Pielou's evenness
   └── Simpson's evenness

3. DIVERSITY INDICES (Combines richness + evenness)
   ├── Shannon index: H' = -Σ(pi × ln pi)
   │   Range: 1.5-3.5 (typical)
   │   Higher = more diverse
   │
   └── Simpson index: D = 1 - Σ(pi²)
       Range: 0-1
       Higher = more diverse

EXAMPLE COMPARISON:

┌────────────────┬──────────┬──────────┬──────────┐
│   Sample       │ Observed │  Shannon │ Simpson  │
│                │   OTUs   │  Index   │  Index   │
├────────────────┼──────────┼──────────┼──────────┤
│ Mature biofilm │   450    │   4.2    │   0.92   │
│ New biofilm    │   280    │   3.5    │   0.85   │
│ Fish tank      │   320    │   3.8    │   0.88   │
│ Plant roots    │   520    │   4.5    │   0.94   │
└────────────────┴──────────┴──────────┴──────────┘

Interpretation: Plant roots most diverse,
                new biofilm least diverse
```

### Beta Diversity Analysis

```
BETWEEN-SAMPLE COMPARISONS:

DISTANCE METRICS:
├── Bray-Curtis: Abundance-based, 0-1
├── Jaccard: Presence/absence, 0-1
├── Weighted UniFrac: Phylogenetic, considers abundance
└── Unweighted UniFrac: Phylogenetic, presence/absence

ORDINATION METHODS:

1. PCoA (Principal Coordinates Analysis)
2. NMDS (Non-metric Multidimensional Scaling)
3. PCA (Principal Component Analysis)

EXAMPLE PCoA PLOT:

PC2 (18%)
    ↑
    │  ○ ○     ● ●
    │ ○  ○   ● ● ●
    │  ○ ○   ● ●
    │────────────────→ PC1 (42%)
    │    □ □
    │   □  □ □
    │  □ □  □

○ = Biofilter samples (cluster)
● = Plant root samples (cluster)
□ = Water samples (cluster)

STATISTICAL TESTING:
├── PERMANOVA (adonis2 in R)
├── ANOSIM
└── Mantel test (correlation with environmental variables)
```

### Taxonomic Composition

```
RELATIVE ABUNDANCE ANALYSIS:

PHYLUM-LEVEL COMPOSITION:

Sample: Mature Aquaponics Biofilter

Proteobacteria ████████████████████░░ 65%
Nitrospirae     ████░░░░░░░░░░░░░░░░ 12%
Bacteroidetes   ███░░░░░░░░░░░░░░░░░  8%
Planctomycetes  ██░░░░░░░░░░░░░░░░░░  6%
Actinobacteria  ██░░░░░░░░░░░░░░░░░░  5%
Other           █░░░░░░░░░░░░░░░░░░░  4%

GENUS-LEVEL (Top 10):

┌─────────────────────┬────────────┐
│      Genus          │  Rel. Ab.  │
├─────────────────────┼────────────┤
│ Nitrosomonas        │   18.5%    │
│ Nitrospira          │   12.3%    │
│ Nitrobacter         │    8.7%    │
│ Flavobacterium      │    5.2%    │
│ Pseudomonas         │    4.8%    │
│ Acinetobacter       │    3.9%    │
│ Aeromonas           │    3.4%    │
│ Rhodobacter         │    2.8%    │
│ Bacillus            │    2.3%    │
│ Sphingomonas        │    1.9%    │
│ Other               │   36.2%    │
└─────────────────────┴────────────┘

FUNCTIONAL GROUPS:
├── Nitrifiers (AOB/NOB): 39.5%
├── Heterotrophs: 45.3%
├── Denitrifiers: 8.6%
└── Other: 6.6%
```

## 8.4 Functional Gene Characterization

### Nitrogen Cycle Genes

```
QUANTITATIVE PCR (qPCR) FOR FUNCTIONAL GENES:

TARGET GENES:

1. AMMONIA OXIDATION
   ├── amoA (bacterial): Nitrosomonas, Nitrosospira
   ├── amoA (archaeal): Nitrosopumilus, Nitrosocaldus
   └── hao (hydroxylamine oxidoreductase)

2. NITRITE OXIDATION
   ├── nxrA: Nitrobacter, Nitrospira
   └── nxrB: Alternative nitrite oxidoreductase

3. DENITRIFICATION
   ├── nirS, nirK: Nitrite reductase
   ├── norB: Nitric oxide reductase
   └── nosZ: Nitrous oxide reductase

4. ANAMMOX
   └── hzs: Hydrazine synthase

qPCR PROTOCOL:
├── Standard curve: 10¹-10⁸ gene copies
├── Replicates: Triplicate reactions
├── Efficiency: 90-110%
├── R²: >0.98
└── Quantification: Gene copies per μL or per g sample

EXAMPLE RESULTS:

┌──────────────┬─────────────────┬─────────────────┐
│   Sample     │  amoA (AOB)     │   nxrA (NOB)    │
│              │ (copies/g DW)   │  (copies/g DW)  │
├──────────────┼─────────────────┼─────────────────┤
│ Biofilter 1  │  2.3 × 10⁸      │   1.8 × 10⁸     │
│ Biofilter 2  │  1.9 × 10⁸      │   1.5 × 10⁸     │
│ Plant roots  │  3.4 × 10⁶      │   2.1 × 10⁶     │
│ Fish tank    │  5.2 × 10⁵      │   3.8 × 10⁵     │
└──────────────┴─────────────────┴─────────────────┘

AOB:NOB ratio ≈ 1.3:1 (balanced nitrification)
```

### Metatranscriptomics

```
RNA-BASED FUNCTIONAL ANALYSIS:

PURPOSE:
└── Identify actively expressed genes (not just presence)

WORKFLOW:
1. RNA extraction (RNAlater-preserved samples)
2. rRNA depletion (>95% of RNA is rRNA)
3. cDNA synthesis (reverse transcription)
4. Library prep and sequencing
5. Map reads to reference databases
6. Quantify gene expression (RPKM, TPM)

APPLICATIONS:
├── Nitrification gene expression under stress
├── Response to environmental changes
├── Diurnal cycling of metabolism
└── Active metabolic pathways

CHALLENGES:
├── RNA degrades rapidly (handle carefully)
├── High cost ($300-600 per sample)
├── Complex bioinformatics
└── Requires transcriptome assembly or references
```

## 8.5 Cultivable Bacteria Studies

### Isolation and Enumeration

```
CULTURE-BASED METHODS:

HETEROTROPHIC PLATE COUNT:
Media: Tryptic Soy Agar (TSA) or R2A
Dilution: 10⁻³ to 10⁻⁷
Incubation: 25-30°C, 24-48 hours
Count: 30-300 colonies per plate

Result: CFU/mL or CFU/g

NITRIFYING BACTERIA:
Media: Mineral salts + NH₄⁺ or NO₂⁻
Incubation: 28°C, 2-4 weeks
Detection: TAN/NO₂⁻ depletion
Enumeration: Most Probable Number (MPN)

MPN PROCEDURE:
1. Serial dilution in nitrification medium
2. Incubate 3-5 tubes per dilution
3. Score positive (nitrification occurred)
4. Use MPN table for estimate

Example:
Dilution: 10⁻² 10⁻³ 10⁻⁴ 10⁻⁵
Positive:  3/3  3/3  2/3  0/3
Code: 3-3-2-0
MPN = 9.3 × 10⁴ cells/mL
```

### Functional Characterization

```
ISOLATE TESTING:

1. IDENTIFICATION
   ├── 16S rRNA gene sequencing (Sanger)
   ├── BLAST against databases
   └── Phylogenetic tree construction

2. PHYSIOLOGICAL TESTS
   ├── Growth rate at different temperatures
   ├── pH tolerance range
   ├── Salt tolerance
   ├── Oxygen requirements
   └── Substrate utilization (Biolog plates)

3. NITRIFICATION CAPACITY
   ├── TAN oxidation rate
   ├── NO₂⁻ oxidation rate
   ├── Optimal conditions
   └── Inhibitor sensitivity

4. BIOFILM FORMATION
   ├── Crystal violet assay
   ├── Attachment to surfaces
   └── Exopolysaccharide production

EXAMPLE ISOLATE PROFILE:

Strain: AQ-BF-15
Identity: Nitrosomonas europaea (99.2% 16S similarity)
Origin: Moving bed biofilter

Growth characteristics:
├── T optimum: 28°C
├── pH optimum: 7.5
├── TAN oxidation: 0.42 mg N/L/h
├── Biofilm formation: Strong
└── Inhibition by high TAN (>5 mg/L)
```

## Key Takeaways

1. **Proper Sampling** - Use aseptic technique and appropriate preservation
2. **Molecular Methods** - DNA sequencing reveals unculturable diversity
3. **Functional Genes** - qPCR quantifies key metabolic capabilities
4. **Community Analysis** - Diversity metrics and composition reveal system health
5. **Culture Integration** - Combine molecular and culture methods for comprehensive understanding

## Practical Application

Design a microbial ecology study for an aquaponics system:
1. Sampling plan (locations, replicates, time points)
2. DNA extraction and sequencing approach
3. Bioinformatics pipeline for 16S analysis
4. Functional gene quantification (qPCR)
5. Cultivable bacteria enumeration
6. Data interpretation framework

## Further Reading

- Schmautz, Z., et al. (2017). "Microbial diversity in aquaponics systems"
- Bartelme, R.P., et al. (2018). "Strains of the aquarium nitrifying bacterium *Nitrospira*"
- Munguia-Fragozo, P., et al. (2015). "Perspective on aquaponics microbiology"

---

**Next Module:** [Module 9: Product Quality Research](module_09_product_quality_research.md)
