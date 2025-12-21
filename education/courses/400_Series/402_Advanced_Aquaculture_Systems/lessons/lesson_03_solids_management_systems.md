# Lesson 3: Solids Management Systems

## Course 402: Advanced Aquaculture Systems | Week 3

---

## Learning Objectives

By the end of this lesson, you will be able to:

1. Understand particle size distribution and settling characteristics in RAS
2. Design and optimize swirl separators and radial flow settlers
3. Select and size drum filters and microscreens for commercial operations
4. Implement foam fractionation and protein skimming systems
5. Manage sludge production, dewatering, and beneficial reuse
6. Calculate total suspended solids (TSS) removal efficiency
7. Integrate mechanical and biological solids treatment

---

## Introduction to Solids Management

Effective solids removal is the foundation of successful RAS operation. Fish produce feces, waste feed accumulates, and biofilm sloughs from filters - all contributing to total suspended solids (TSS) that must be rapidly removed to maintain water quality and protect biofilters.

### Why Solids Management is Critical

**Problems from Poor Solids Removal:**
- Dissolved oxygen depletion (bacterial respiration)
- Ammonia production (decomposition)
- Biofilter clogging and reduced efficiency
- Disease pathogen habitat
- Reduced water clarity and fish behavior
- Increased BOD and COD in system
- Nitrite/nitrate accumulation
- Off-flavor in fish flesh

**Benefits of Rapid Removal:**
- Improved water quality and fish health
- Reduced biofilter loading
- Lower oxygen consumption
- Decreased disease pressure
- Better system stability
- Reduced make-up water requirements
- Opportunity for waste valorization

---

## Solids Characteristics in RAS

### 1. Particle Size Distribution

```
┌───────────────────────────────────────────────────────┐
│        PARTICLE SIZE CATEGORIES IN RAS                │
├───────────────────────────────────────────────────────┤
│                                                        │
│  Size Range      Category         Examples            │
│  ───────────────────────────────────────────────       │
│                                                        │
│  >1000 μm       Coarse Solids     Feed pellets       │
│  (>1 mm)        (Settleable)      Fecal strings      │
│                                                        │
│  100-1000 μm    Fine Settleable   Fecal particles    │
│                 Solids            Feed fines          │
│                                                        │
│  10-100 μm      Suspended Solids  Biofloc            │
│                 (Slow settling)   Bacteria            │
│                                                        │
│  1-10 μm        Colloidal Solids  Fine organics      │
│                 (Non-settling)    Dissolved organics  │
│                                                        │
│  <1 μm          Dissolved         DOC, Proteins      │
│                 Organics          Amino acids         │
│                                                        │
└───────────────────────────────────────────────────────┘
```

### 2. Settling Velocity

Based on Stokes' Law (for spherical particles <100 μm):

```
V = (g × (ρp - ρw) × d²) / (18 × μ)

Where:
V = settling velocity (m/s)
g = gravity (9.81 m/s²)
ρp = particle density (kg/m³)
ρw = water density (kg/m³)
d = particle diameter (m)
μ = dynamic viscosity (Pa·s)
```

**Typical Settling Velocities:**

| Particle Type | Size | Settling Velocity |
|---------------|------|-------------------|
| Large feed pellets | 5 mm | 25-30 cm/s |
| Fecal pellets | 2-5 mm | 15-25 cm/s |
| Small feed particles | 1 mm | 8-12 cm/s |
| Fecal fragments | 100-500 μm | 0.5-5 cm/s |
| Fine organics | 10-100 μm | 0.01-0.5 cm/s |
| Biofloc | 1-10 μm | <0.01 cm/s |

### 3. Solids Production Rates

**From Feed:**
```
Total Solids Production = Feed Rate × (1 - Digestibility) × 1.3

Typical values:
- Tilapia (80% digestibility): Feed × 0.26
- Salmon (85% digestibility): Feed × 0.20
- Shrimp (70% digestibility): Feed × 0.39

Example:
100 kg/day feed for salmon:
Solids = 100 × 0.20 = 20 kg TSS/day
```

**From Biofilm Sloughing:**
```
Add 10-20% to feed-based calculation

Total = Feed-based solids × 1.15
```

---

## Solids Removal Technologies

### 1. Swirl Separator (Settling Basin)

Simplest and most economical primary solids removal.

```
┌────────────────────────────────────────────────────┐
│         SWIRL SEPARATOR - TOP VIEW                  │
├────────────────────────────────────────────────────┤
│                                                     │
│              ╔══════════════╗                      │
│              ║              ║                      │
│         ────>║     ↻       ║───> Effluent         │
│    Influent  ║              ║    (overflow)        │
│         ────>║   ∴∴∴∴∴∴    ║                      │
│              ║   ∴ ∴ ∴     ║                      │
│              ║     ∴       ║                      │
│              ║      ↓      ║                      │
│              ╚══════╪═══════╝                      │
│                     │                              │
│                     ↓                              │
│              Sludge drain valve                    │
│                                                     │
│  Flow enters tangentially creating vortex          │
│  Solids settle to center cone                      │
│  Clean water exits from top                        │
└────────────────────────────────────────────────────┘

SIDE VIEW:
        Overflow weir
            ┌─┐
    ───────>│ │───> Effluent
       ┌────┴─┴────┐
       │    ↻↻↻    │
       │   ∴∴∴∴∴   │
       │    ∴∴∴    │
       │     ∴     │
       │      ↓    │
       └─────┬─────┘
             │
          Sludge
```

**Design Parameters:**

| Parameter | Value | Notes |
|-----------|-------|-------|
| Diameter | 1-4 m | Depends on flow |
| Depth | 1-2 m | D:H ratio ~1.5:1 |
| Retention time | 30-90 seconds | Quick settling |
| Inlet velocity | 0.3-0.5 m/s | Creates swirl |
| Overflow rate | 20-40 m³/m²/hr | Surface loading |
| Bottom slope | 45-60° | Steep cone |
| Removal efficiency | 40-70% TSS | Settleables only |

**Sizing Example:**

```
System flow: 100 m³/hr
Target retention: 60 seconds = 0.0167 hours

Volume required: 100 m³/hr × 0.0167 hr = 1.67 m³

Using D:H = 1.5:1 (D = 1.5 × H)
Cone volume ≈ 1/3 × π × r² × h

For H = 1.5 m, D = 2.25 m:
V = 1/3 × 3.14 × 1.125² × 1.5 = 1.99 m³ ✓

Select: 2.5 m diameter × 1.7 m depth swirl separator
```

**Advantages:**
- Simple, no moving parts
- Low cost
- No power required
- Easy maintenance
- Reliable

**Disadvantages:**
- Only removes large particles (>100 μm)
- Requires frequent purging
- Needs elevated placement for gravity drain
- Variable efficiency with flow changes

### 2. Radial Flow Settler

Enhanced settling basin with better performance.

```
┌────────────────────────────────────────────────────┐
│      RADIAL FLOW SETTLER - SIDE VIEW               │
├────────────────────────────────────────────────────┤
│                                                     │
│      Effluent ←──────────────────────              │
│    ┌─────────────────────────────────┐            │
│    │  ═════════════════════════════  │            │
│    │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │ Overflow   │
│    └───────────────────────────────┬─┘            │
│         ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑         │              │
│         │ │ │ │ │ │ │ │ │         │              │
│    ┌────┴─┴─┴─┴─┴─┴─┴─┴─┴────┐    │              │
│    │                          │    │              │
│    │  ∴∴∴∴∴∴∴∴∴∴∴∴∴∴∴∴∴∴   │    │              │
│    │      Sludge zone         │    │              │
│    │          ↓               │    │              │
│    └──────────┬───────────────┘    │              │
│               │                    │              │
│          Sludge drain         Return to system    │
│                                                     │
│  Influent enters at bottom center                  │
│  Flows radially outward and upward                 │
│  Solids settle against upward flow                 │
└────────────────────────────────────────────────────┘
```

**Design Parameters:**

| Parameter | Value | Notes |
|-----------|-------|-------|
| Diameter | 2-8 m | Commercial scale |
| Depth | 2-4 m | Side wall depth |
| Retention time | 15-30 minutes | Longer than swirl |
| Upflow velocity | 1-3 m/hr | Critical parameter |
| Surface loading | 1.0-2.5 m³/m²/hr | Conservative |
| Removal efficiency | 60-85% TSS | Better than swirl |

**Advantages:**
- High efficiency
- Handles fine particles better
- Less frequent purging
- Stable performance

**Disadvantages:**
- Larger footprint
- Higher cost
- Requires careful design
- Can become anaerobic if not managed

### 3. Drum Filter (Rotary Microscreen)

Most common fine solids removal in commercial RAS.

```
┌────────────────────────────────────────────────────┐
│          DRUM FILTER - SIDE VIEW                   │
├────────────────────────────────────────────────────┤
│                                                     │
│   Backwash                                         │
│   Spray ──→  ▓▓▓▓▓                                │
│              ▓▓▓▓▓  ←── Rotating drum              │
│         ╔════▓▓▓▓▓════╗  (mesh screen)            │
│         ║ ▓▓▓▓▓▓▓▓▓▓▓ ║                            │
│ Influent║ ▓▓▓▓▓▓▓▓▓▓▓ ║──→ Filtered               │
│    ────>║ ▓▓▓▓▓▓▓▓▓▓▓ ║    Effluent               │
│         ║ ▓▓▓▓▓▓▓▓▓▓▓ ║                            │
│         ║  Water level ║                            │
│         ╚═════════════╝                            │
│              ↓                                      │
│         Sludge trough                              │
│                                                     │
│  Drum rotates slowly (1-3 RPM)                     │
│  Water enters inside drum                          │
│  Backwash sprays clean exposed mesh                │
│  Solids fall to trough for collection              │
└────────────────────────────────────────────────────┘
```

**Mesh Sizes:**

| Mesh Size | Application | TSS Removal |
|-----------|-------------|-------------|
| 200 μm | Primary filtration | 50-70% |
| 100 μm | Standard RAS | 60-80% |
| 60 μm | Fine filtration | 75-90% |
| 40 μm | Ultra-fine | 85-95% |

**Design Parameters:**

| Parameter | Value | Notes |
|-----------|-------|-------|
| Filter area | 0.5-1.0 m²/(m³/hr) | Specific loading |
| Mesh submersion | 30-40% | Percentage underwater |
| Rotation speed | 1-3 RPM | Slow, continuous |
| Backwash pressure | 2-4 bar | Clean mesh |
| Backwash flow | 5-10% of influent | Reuse or waste |

**Sizing Example:**

```
System flow: 200 m³/hr
Mesh size: 60 μm
Loading rate: 0.8 m²/(m³/hr)

Required filter area: 200 m³/hr × 0.8 = 160 m²

Drum dimensions:
Diameter: 3.0 m
Length: 2.5 m
Surface area: π × 3.0 × 2.5 = 23.6 m²

Number of drums: 160 ÷ 23.6 = 6.8
Select: 7 drums (or 2 larger units)

Alternatively: Use 2 × 3m dia × 5m length drums = 94.2 m²
With 40% submersion effective area: 188.4 m² ✓
```

**Advantages:**
- Continuous operation
- High removal efficiency
- Automated cleaning
- Compact design
- Scalable

**Disadvantages:**
- High capital cost ($20,000-$100,000+)
- Moving parts require maintenance
- Power required
- Mesh can clog with biofilm
- Backwash water disposal needed

### 4. Bead Filter

Fixed bed filter with backwash capability.

```
┌────────────────────────────────────────────────────┐
│            BEAD FILTER - SIDE VIEW                 │
├────────────────────────────────────────────────────┤
│                                                     │
│  Influent ──> ┌────────────────┐ ──> Effluent     │
│               │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │                   │
│               │ ▓ Plastic ▓▓▓▓ │ ← Floating        │
│               │ ▓ Beads ▓▓▓▓▓▓ │   bead media      │
│               │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │                   │
│               │                │                   │
│         Air──>│ ○○○○○○○○○○○○○○ │ ← Backwash       │
│               │                │   air diffuser    │
│               └────────────────┘                   │
│                       │                            │
│                   Waste drain                      │
│                                                     │
│  FILTRATION MODE:                                  │
│  Water flows up through beads                      │
│  Solids trapped in bead matrix                     │
│                                                     │
│  BACKWASH MODE:                                    │
│  Air + reverse flow expands beads                  │
│  Solids released and drained                       │
└────────────────────────────────────────────────────┘
```

**Design Parameters:**

| Parameter | Value | Notes |
|-----------|-------|-------|
| Bead size | 3-6 mm diameter | Plastic, floating |
| Hydraulic loading | 10-20 m³/m²/hr | Filter surface area |
| Backwash frequency | 1-4 times/day | Based on head loss |
| Backwash duration | 3-5 minutes | Per cycle |
| Removal efficiency | 50-80% TSS | Also provides biofilter |

**Advantages:**
- Dual function: solids + biofiltration
- Simple construction
- Lower cost than drum filters
- Proven technology

**Disadvantages:**
- Backwash interrupts filtration
- Can channel if not uniform
- Bead loss during backwash
- Lower efficiency than drum filters

### 5. Foam Fractionator (Protein Skimmer)

Removes dissolved and fine particulate organics - primarily used in marine systems.

```
┌────────────────────────────────────────────────────┐
│        FOAM FRACTIONATOR - SIDE VIEW               │
├────────────────────────────────────────────────────┤
│                                                     │
│              ┌───┐                                 │
│              │ ░ │ ← Foam collection cup           │
│              │░░░│   (concentrated organics)       │
│              ├───┤                                 │
│              │ ░ │                                 │
│              │░░░│ ← Foam column                   │
│      ╔═══════╪═░═╪═══════╗                        │
│      ║       │░░░│       ║                        │
│      ║       │ ░ │       ║                        │
│      ║       └───┘       ║                        │
│      ║                   ║ ← Contact column        │
│      ║  ↑↑↑↑↑↑↑↑↑↑↑↑↑   ║   (fine bubbles)        │
│      ║  ○○○○○○○○○○○○○   ║                        │
│      ║  ○ ○ ○ ○ ○ ○ ○   ║                        │
│  ───>║  ○ ○ ○ ○ ○ ○ ○   ║───> Effluent           │
│      ║                   ║                        │
│      ╚═══════════════════╝                        │
│              ↑                                      │
│         Venturi or                                 │
│         fine bubble diffuser                       │
│                                                     │
│  Fine bubbles carry proteins to surface            │
│  Foam concentrates organics                        │
│  Collected foam = 10-20% of influent volume        │
└────────────────────────────────────────────────────┘
```

**Design Parameters:**

| Parameter | Value | Notes |
|-----------|-------|-------|
| Contact time | 3-10 minutes | In reaction column |
| Air:Water ratio | 1:1 to 4:1 | Volume basis |
| Bubble size | 0.5-2.0 mm | Fine bubbles critical |
| Column height | 1.5-3.0 m | Taller = better |
| Collection rate | 3-10% of flow | As foam concentrate |

**Removal Capabilities:**
- Dissolved proteins: 60-90%
- Fine colloids: 50-80%
- BOD reduction: 30-50%
- Color removal: 40-70%
- Some bacteria removal

**Applications:**
- Marine RAS (highly effective)
- Freshwater RAS (less effective without salt)
- Pre-biofilter treatment
- Water clarification

**Advantages:**
- Removes dissolved organics
- Reduces biofilter loading
- Improves water clarity
- No filter media to clean
- Adds oxygen

**Disadvantages:**
- Works best in saltwater
- High air volume required
- Foaming inconsistent without surfactants
- Capital cost moderate to high
- Requires regular foam collection

---

## Integrated Solids Management Strategy

### Multi-Stage Removal

```
┌─────────────────────────────────────────────────────────┐
│        COMPREHENSIVE SOLIDS REMOVAL SYSTEM              │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  Culture Tanks                                          │
│       │                                                  │
│       ├──> 80% of flow ──> STAGE 1: SETTLING            │
│       │                    (Swirl Separator)            │
│       │                    Remove >200 μm               │
│       │                    Efficiency: 50-70%           │
│       │                          │                      │
│       │                          v                      │
│       │                    STAGE 2: FINE FILTRATION     │
│       │                    (Drum Filter 60μm)           │
│       │                    Remove >60 μm                │
│       │                    Efficiency: 80-90%           │
│       │                          │                      │
│       └──> 20% of flow ──>      │                      │
│            (Surface skim)        v                      │
│                            STAGE 3: BIOFILTRATION       │
│                            (MBBR)                       │
│                            Dissolved organics           │
│                                  │                      │
│                                  v                      │
│                            OPTIONAL: FOAM FRACTIONATION │
│                            Fine organics removal        │
│                                  │                      │
│                                  v                      │
│                            Back to Culture Tanks        │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

### Sludge Management

**Daily Sludge Production:**

```
From 100 kg feed/day (salmon):
Total solids: 100 × 0.20 = 20 kg TSS/day

As concentrated sludge (5-10% solids):
Volume: 20 kg ÷ 0.075 (7.5% solids) = 267 kg = 267 liters/day

Monthly: 8,000 liters (~2,000 gallons)
```

**Sludge Treatment Options:**

1. **Settling and Concentration**
   - Gravity thickening in cone-bottom tanks
   - 1-2% solids → 5-10% solids
   - Reduces volume 5-10×

2. **Dewatering**
   - Belt press: 15-25% solids
   - Screw press: 20-30% solids
   - Centrifuge: 25-35% solids
   - Further reduces volume and weight

3. **Beneficial Reuse**
   - Composting with carbon source
   - Anaerobic digestion for biogas
   - Direct land application (with regulations)
   - Vermiculture (worm composting)
   - Integration with plant production (aquaponics)

**Sludge Characteristics:**

| Parameter | Typical Range |
|-----------|---------------|
| TSS | 2-10% |
| Organic content | 70-85% of TS |
| N content | 5-8% of TS |
| P content | 2-4% of TS |
| C:N ratio | 8-12:1 |
| pH | 6.5-7.5 |

---

## Performance Monitoring

### Key Metrics

**Total Suspended Solids (TSS):**
```
Measure weekly:
- Culture tank effluent
- After primary treatment
- After secondary treatment
- Biofilter influent

Calculate removal efficiency:
Efficiency (%) = [(TSS_in - TSS_out) / TSS_in] × 100
```

**Target TSS Levels:**

| Location | Target TSS |
|----------|------------|
| Culture tank | 10-30 mg/L |
| Post-swirl | 5-15 mg/L |
| Post-drum filter | 2-8 mg/L |
| Biofilter influent | <5 mg/L |

**Sludge Volume:**
- Track daily/weekly
- Correlate with feed input
- Calculate settling efficiency
- Optimize purge frequency

**Filter Performance:**
- Drum filter backwash frequency
- Pressure drop across filters
- Mesh condition and cleaning
- Backwash water volume

---

## Practical Exercise: Solids System Design

**Scenario:**
Design complete solids removal for 100-tonne/year barramundi RAS:

**Given:**
- Feed rate: 300 kg/day (peak)
- System flow: 150 m³/hr
- Digestibility: 75%
- Target: <5 mg/L TSS to biofilter

**Tasks:**

1. Calculate daily TSS production
2. Size a swirl separator (primary treatment)
3. Size drum filter(s) (secondary treatment)
4. Calculate expected TSS at each stage
5. Estimate daily sludge volume
6. Recommend sludge management strategy

---

## Key Takeaways

1. **Remove solids early and often** - prevents water quality degradation

2. **Multi-stage approach is best** - combine technologies for >90% removal

3. **Particle size matters** - different technologies for different sizes

4. **Swirl separators are essential** - simple, cheap, effective primary treatment

5. **Drum filters dominate commercial RAS** - automated, reliable, high efficiency

6. **Sludge is a resource** - multiple options for beneficial reuse

7. **Monitor TSS regularly** - early indicator of system problems

8. **Don't let solids reach biofilter** - protects nitrification capacity

---

## Further Reading

1. Timmons, M.B. & Ebeling, J.M. (2013). "Recirculating Aquaculture" - Chapter 5
2. Cripps, S.J. & Bergheim, A. (2000). "Solids management and removal"
3. Patterson, R.N. & Watts, K.C. (2003). "Micro-particles in RAS"
4. Summerfelt, S.T. (1999). "Waste-handling systems"
5. Ebeling, J.M. et al. (2006). "Evaluation of chemical coagulation-flocculation"

---

*Next Lesson: Module 4 - Gas Transfer & Oxygenation Systems*

*EcoFusion Academy - Course 402: Advanced Aquaculture Systems*
