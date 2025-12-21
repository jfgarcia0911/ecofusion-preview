# Lesson 2: Biofilter Engineering & Optimization

## Course 402: Advanced Aquaculture Systems | Week 2

---

## Learning Objectives

By the end of this lesson, you will be able to:

1. Explain nitrification kinetics and bacterial ecology in RAS biofilters
2. Design and size moving bed bioreactors (MBBR) for commercial systems
3. Compare trickling filters, fluidized bed, and fixed film biofilter technologies
4. Calculate biofilter loading rates and surface area requirements
5. Implement start-up protocols and manage biofilm development
6. Design denitrification systems for nitrate management
7. Troubleshoot biofilter performance issues

---

## Introduction to RAS Biofilration

Biological filtration is the cornerstone of successful recirculating aquaculture systems. Fish excrete toxic ammonia (NH₃/NH₄⁺) through their gills and in waste, which must be continuously converted to less toxic forms to maintain fish health. Biofilters provide habitat for beneficial bacteria that perform this critical transformation.

### The Nitrogen Cycle in RAS

```
┌──────────────────────────────────────────────────────────┐
│               NITROGEN CYCLE IN RAS                       │
├──────────────────────────────────────────────────────────┤
│                                                           │
│  PROTEIN (feed) ──> FISH ──> AMMONIA (NH₃/NH₄⁺)         │
│                               │ TOXIC                     │
│                               │ pH >8: NH₃ dominant       │
│                               │ pH <7: NH₄⁺ dominant      │
│                               v                           │
│                      ┌─────────────────┐                  │
│                      │  Nitrosomonas   │                  │
│                      │  Nitrosospira   │                  │
│                      └────────┬────────┘                  │
│                               │                           │
│                               v                           │
│                      NITRITE (NO₂⁻)                       │
│                               │ TOXIC                     │
│                               v                           │
│                      ┌─────────────────┐                  │
│                      │  Nitrobacter    │                  │
│                      │  Nitrospira     │                  │
│                      └────────┬────────┘                  │
│                               │                           │
│                               v                           │
│                      NITRATE (NO₃⁻)                       │
│                               │ Low toxicity              │
│                               │                           │
│                      ┌────────┴────────┐                  │
│                      │                 │                  │
│                 Water Change    Denitrification           │
│                 (dilution)      (anaerobic)               │
│                                      │                    │
│                                      v                    │
│                                 Nitrogen Gas (N₂)         │
│                                                           │
└──────────────────────────────────────────────────────────┘
```

### Why Biofilters are Critical

**Ammonia Toxicity:**
- TAN >2 mg/L: Chronic stress, reduced growth
- TAN >5 mg/L: Acute stress, gill damage
- TAN >10 mg/L: Lethal in hours

**Nitrite Toxicity:**
- NO₂⁻ >5 mg/L: "Brown blood disease" (methemoglobinemia)
- NO₂⁻ >10 mg/L: Often lethal
- Severity increases with low chloride levels

**Nitrate Accumulation:**
- NO₃⁻ <100 mg/L: Generally safe for most species
- NO₃⁻ 100-200 mg/L: May reduce growth
- NO₃⁻ >400 mg/L: Toxic to sensitive species

---

## Nitrification Kinetics

### 1. Bacterial Requirements

Nitrifying bacteria are chemolithoautotrophs:
- Energy source: Oxidation of ammonia/nitrite
- Carbon source: CO₂ (not organic carbon)
- Growth rate: Very slow (doubling time: 10-30 hours)
- Attachment: Require surfaces (biofilm formers)

**Optimal Conditions:**

| Parameter | Nitrosomonas | Nitrobacter |
|-----------|--------------|-------------|
| Temperature | 25-30°C | 25-35°C |
| pH | 7.5-8.0 | 7.0-8.0 |
| DO | >2 mg/L | >2 mg/L (preferably >4) |
| Alkalinity | >50 mg/L | >50 mg/L |
| Salinity | 0-35 ppt | 0-35 ppt |

### 2. Nitrification Reactions

**Step 1: Ammonia Oxidation (AOB - Ammonia Oxidizing Bacteria)**

```
2 NH₄⁺ + 3 O₂ → 2 NO₂⁻ + 4 H⁺ + 2 H₂O + Energy

Key points:
- Requires 3.43 g O₂ per g NH₄⁺-N oxidized
- Produces acidity (consumes alkalinity)
- Rate-limiting step in most systems
```

**Step 2: Nitrite Oxidation (NOB - Nitrite Oxidizing Bacteria)**

```
2 NO₂⁻ + O₂ → 2 NO₃⁻ + Energy

Key points:
- Requires 1.14 g O₂ per g NO₂⁻-N oxidized
- Faster than step 1 under ideal conditions
- Total O₂ required: 4.57 g per g TAN-N
```

**Overall Nitrification:**

```
NH₄⁺ + 2 O₂ → NO₃⁻ + 2 H⁺ + H₂O

Alkalinity consumption:
7.14 g CaCO₃ per g NH₄⁺-N oxidized
```

### 3. Reaction Kinetics

**Monod Kinetics Model:**

r = (rmax × S) / (Ks + S)

Where:
- r = reaction rate (g N/m²/day)
- rmax = maximum reaction rate
- S = substrate concentration (mg/L TAN)
- Ks = half-saturation constant (~0.5-1.0 mg/L TAN)

**Practical Implications:**

```
At high TAN (>2 mg/L):
- Reaction approaches rmax (zero-order kinetics)
- Rate independent of concentration
- Design for maximum loading

At low TAN (<0.5 mg/L):
- First-order kinetics
- Rate proportional to concentration
- More challenging to achieve low effluent TAN
```

**Temperature Effects:**

Nitrification rate approximately doubles with each 10°C increase (Q₁₀ = 2)

```
Rate at T₂ = Rate at T₁ × Q₁₀^((T₂-T₁)/10)

Example:
Rate at 20°C = 1.0 g N/m²/day
Rate at 30°C = 1.0 × 2^((30-20)/10) = 2.0 g N/m²/day
```

---

## Biofilter Technologies

### 1. Moving Bed Bioreactor (MBBR)

Most popular technology for commercial RAS.

```
┌────────────────────────────────────────────────────┐
│            MBBR BIOFILTER - SIDE VIEW              │
├────────────────────────────────────────────────────┤
│                                                     │
│  Water In ──>  ┌─────────────────────┐  ──> Out   │
│                │   ░░░░░░░░░░░░░░░░  │            │
│                │   ░ Media ░Media ░  │            │
│                │   ░ ░ ░ ░ ░ ░ ░ ░  │            │
│    Aeration ──>│   ░ ░ ░ ░ ░ ░ ░ ░  │            │
│    Blower      │   ░ ░ ░ ░ ░ ░ ░ ░  │            │
│         ○━━━━━>│○○○○○○○○○○○○○○○○○○○○│            │
│                │     Air Bubbles     │            │
│                │          ▲          │            │
│                │          ║          │            │
│                └──────────╨──────────┘            │
│                      Air Diffuser                  │
└────────────────────────────────────────────────────┘

Media fills 50-70% of reactor volume
Continuous mixing via aeration
Biofilm grows on suspended media
```

**MBBR Media Types:**

```
Common Designs (top view):

Kaldnes K1:        Biomedia Chip:      ActiveCell:
   ┌─────┐            ┌─────┐            ╱▔▔▔▔▔╲
   │ ╱─╲ │            │ ┼ ┼ │           │ ╱─╲ │
   │ │ │ │            │ ┼ ┼ │           │ ╲─╱ │
   │ ╲─╱ │            │ ┼ ┼ │            ╲_____╱
   └─────┘            └─────┘

   500 m²/m³          800 m²/m³          1200 m²/m³
```

**Design Parameters:**

| Parameter | Value | Notes |
|-----------|-------|-------|
| Media fill rate | 50-70% | By volume |
| Surface area | 500-1200 m²/m³ | Media dependent |
| HRT (Hydraulic Retention Time) | 20-45 minutes | Depends on loading |
| Aeration rate | 15-25 m³ air/m³ media/hr | For mixing and O₂ |
| Loading rate | 0.5-1.5 g TAN/m²/day | Conservative to aggressive |
| Water temperature | 15-30°C | Affects rate |

**Advantages:**
- High surface area per volume
- Self-cleaning (no backwash)
- Scalable (add media as needed)
- Resistant to shock loads
- No clogging issues
- Low maintenance

**Disadvantages:**
- Requires continuous aeration (energy cost)
- Media can be expensive
- Media retention screens needed
- Not suitable for high-solids water

**Sizing Example:**

```
Given:
- Feed rate: 100 kg/day
- TAN production: 3% of feed = 3 kg TAN/day
- Target loading: 1.0 g TAN/m²/day
- Media surface area: 800 m²/m³
- Media fill: 60%

Calculation:
Required surface area: 3000 g/day ÷ 1.0 g/m²/day = 3000 m²

Media volume: 3000 m² ÷ 800 m²/m³ = 3.75 m³ media

Reactor volume: 3.75 m³ ÷ 0.60 fill = 6.25 m³

Select: 6.5 m³ reactor (e.g., 2.0 m diameter × 2.0 m depth)

Aeration: 3.75 m³ media × 20 m³ air/m³/hr = 75 m³ air/hr
         = 44 CFM blower capacity
```

### 2. Trickling Filter (TF)

Gravity-flow biofilter, water drips over stationary media.

```
┌────────────────────────────────────────────────────┐
│          TRICKLING FILTER - SIDE VIEW               │
├────────────────────────────────────────────────────┤
│                                                     │
│     Water In ──> ┌─────────────┐                   │
│                  │ Distributor │                   │
│                  │  ─ ─ ─ ─ ─  │                   │
│                  │ ↓ ↓ ↓ ↓ ↓ ↓ │                   │
│                  ├─────────────┤                   │
│                  │ ███████████ │ <── Biofilm media │
│    Air In ─────> │ ███████████ │                   │
│                  │ ███████████ │                   │
│                  │ ███████████ │ <── Void space    │
│                  │ ███████████ │     for airflow   │
│                  │ ███████████ │                   │
│                  ├─────────────┤                   │
│                  │ Underdrain  │                   │
│                  └──────┬──────┘                   │
│                         ↓                          │
│                     Water Out                      │
└────────────────────────────────────────────────────┘

Natural or forced air circulation
Water trickles down through media
High oxygen transfer efficiency
```

**Media Types:**

| Media | Surface Area | Void Space | Cost |
|-------|--------------|------------|------|
| Plastic modular | 100-150 m²/m³ | 95% | Medium |
| Corrugated plates | 150-250 m²/m³ | 90% | High |
| Foam blocks | 300-500 m²/m³ | 80% | Medium |
| Lava rock | 50-100 m²/m³ | 50% | Low |

**Design Parameters:**

| Parameter | Value | Notes |
|-----------|-------|-------|
| Hydraulic loading | 0.5-2.0 m³/m²/hr | Water flow per surface area |
| Loading rate | 0.3-0.8 g TAN/m²/day | Conservative |
| Media depth | 1.0-2.5 m | Deeper = more treatment |
| Void space | >90% | Prevent clogging |
| Recirculation ratio | 1:1 to 5:1 | Internal recirculation |

**Advantages:**
- No moving parts in filter
- Natural aeration (low energy)
- High oxygen transfer
- Good CO₂ stripping
- Visual inspection easy
- Can handle variable loads

**Disadvantages:**
- Larger footprint than MBBR
- Requires elevated placement (gravity flow)
- Distribution system maintenance
- Sloughing can clog downstream
- Lower volumetric efficiency

### 3. Fluidized Bed Biofilter

High-performance, compact design using upward water flow.

```
┌────────────────────────────────────────────────────┐
│        FLUIDIZED BED FILTER - SIDE VIEW            │
├────────────────────────────────────────────────────┤
│                                                     │
│                  ┌───────────┐                     │
│                  │           │  ──> Effluent       │
│                  ├───────────┤                     │
│                  │ ░░░░░░░░░ │ <── Expanded bed    │
│                  │ ░ Media ░ │     (fluidized      │
│                  │ ░ ░ ░ ░ ░ │      media)         │
│                  │ ░ ░ ░ ░ ░ │                     │
│                  │ ░ ░ ░ ░ ░ │ 30-50% expansion    │
│                  │ ░ ░ ░ ░ ░ │                     │
│     Influent ──> ├───────────┤                     │
│                  │   ↑↑↑↑↑   │ <── Distribution    │
│                  └───────────┘                     │
│                                                     │
│  Upflow velocity: 15-30 m/hr maintains expansion   │
└────────────────────────────────────────────────────┘
```

**Media:**
- Sand (0.5-2.0 mm diameter)
- Activated carbon
- Plastic beads
- Must be size-uniform for even fluidization

**Design Parameters:**

| Parameter | Value | Notes |
|-----------|-------|-------|
| Upflow velocity | 15-30 m/hr | Maintains fluidization |
| Bed expansion | 30-50% | Above settled bed |
| Loading rate | 1.0-2.0 g TAN/m²/day | Aggressive |
| Media size | 0.5-2.0 mm | Sand typical |
| Backwash frequency | Daily to weekly | Remove excess biofilm |

**Advantages:**
- Highest volumetric efficiency
- Very high loading rates
- Compact design
- Excellent mass transfer
- Plugging resistant

**Disadvantages:**
- Requires precise flow control
- Energy intensive (pumping)
- Backwash system needed
- Complex operation
- Media loss during backwash

### 4. Fixed Bed Biofilter

Stationary media, water flows through.

```
┌────────────────────────────────────────────────────┐
│          FIXED BED FILTER - SIDE VIEW              │
├────────────────────────────────────────────────────┤
│                                                     │
│  Water In ──> ┌───────────────┐ ──> Water Out     │
│               │ ██████████████│                    │
│               │ ██████████████│ <── Fixed media    │
│               │ ██████████████│     (biofilm)      │
│  Air In ────> │ ██████████████│                    │
│               │ ██████████████│                    │
│               └───────────────┘                    │
│                                                     │
│  Submerged or partially submerged                  │
│  Requires periodic backwashing                     │
└────────────────────────────────────────────────────┘
```

**Media Options:**
- Ceramic rings
- Plastic balls
- Oyster shell
- Lava rock

**Design Parameters:**

| Parameter | Value | Notes |
|-----------|-------|-------|
| Hydraulic loading | 0.5-1.5 m³/m²/hr | Conservative |
| Loading rate | 0.3-0.6 g TAN/m²/day | Lower than MBBR |
| Backwash frequency | Weekly to monthly | Prevent clogging |
| Media life | 5-10+ years | Depends on type |

**Advantages:**
- Simple construction
- Low cost
- Reliable
- Minimal maintenance

**Disadvantages:**
- Clogging potential
- Lower efficiency than MBBR
- Backwash required
- Channeling can occur

---

## Biofilter Sizing Methodology

### Step-by-Step Design Process

**Step 1: Calculate TAN Production**

```
Method 1: From Feed Rate
TAN (kg/day) = Feed Rate (kg/day) × % Protein × 0.092

Where:
- 0.092 = conversion factor (protein to TAN)
- Assumes 30% protein utilization by fish

Example:
100 kg/day feed × 40% protein × 0.092 = 3.68 kg TAN/day

Method 2: From Stocking Density
TAN (kg/day) = Biomass (kg) × 0.03 kg TAN/kg fish/day

Example:
50,000 kg fish × 0.03 = 1,500 kg TAN/day
```

**Step 2: Select Loading Rate**

Choose based on system requirements and risk tolerance:

| System Type | Loading Rate (g TAN/m²/day) | Risk Level |
|-------------|----------------------------|------------|
| Hatchery | 0.3-0.5 | Very conservative |
| Grow-out, conservative | 0.5-0.8 | Low risk |
| Commercial standard | 0.8-1.2 | Moderate |
| Intensive production | 1.2-1.8 | Higher risk |

**Step 3: Calculate Required Surface Area**

```
Surface Area (m²) = TAN Production (g/day) / Loading Rate (g/m²/day)

Example:
3,680 g TAN/day ÷ 1.0 g/m²/day = 3,680 m² required
```

**Step 4: Determine Reactor Volume**

For MBBR:

```
Media Volume = Surface Area / Media SA per m³

Example (800 m²/m³ media):
3,680 m² ÷ 800 m²/m³ = 4.6 m³ media

Reactor Volume = Media Volume / Fill Rate

Example (60% fill):
4.6 m³ ÷ 0.60 = 7.67 m³ reactor

Select: 8.0 m³ reactor volume
```

**Step 5: Add Safety Factor**

Apply 20-50% safety factor for:
- Temperature fluctuations
- Feed rate increases
- Seasonal variations
- Startup allowances

```
Final Design = Calculated Volume × Safety Factor

Example:
8.0 m³ × 1.3 = 10.4 m³

Select: Two 6 m³ reactors (12 m³ total)
```

### Comprehensive Example: 200-Tonne Salmon RAS

**System Parameters:**
- Annual production: 200 tonnes Atlantic salmon
- Daily feed: 800 kg/day (peak)
- Feed protein: 45%
- Water temperature: 12-14°C
- Conservative design target

**TAN Production:**
```
TAN = 800 kg/day × 0.45 × 0.092 = 33.1 kg TAN/day
```

**Biofilter Selection: MBBR**
- Media: ActiveCell (1000 m²/m³)
- Loading rate: 0.6 g/m²/day (conservative for cold water)
- Temperature factor: Cold water = reduce loading 30%
- Adjusted loading: 0.6 × 0.7 = 0.42 g/m²/day

**Surface Area Required:**
```
SA = 33,100 g/day ÷ 0.42 g/m²/day = 78,810 m²
```

**Reactor Sizing:**
```
Media volume: 78,810 m² ÷ 1000 m²/m³ = 78.8 m³
Reactor volume (60% fill): 78.8 ÷ 0.60 = 131.3 m³
With 30% safety factor: 131.3 × 1.30 = 170.7 m³

Design: Four 45 m³ reactors (180 m³ total)
Each: 3.5 m diameter × 4.7 m height
```

**Aeration Requirements:**
```
Total media: 180 × 0.60 = 108 m³
Aeration: 108 m³ × 20 m³/m³/hr = 2,160 m³/hr
CFM: 2,160 × 0.59 = 1,274 CFM

Blowers: Two 700 CFM blowers (one backup)
```

**Oxygen Demand:**
```
Nitrification O₂: 33.1 kg TAN × 4.57 kg O₂/kg TAN = 151.3 kg O₂/day

Fish respiration: 800 kg feed × 0.5 kg O₂/kg feed = 400 kg O₂/day

Total O₂: 151.3 + 400 = 551.3 kg O₂/day = 23.0 kg/hr
```

---

## Biofilter Start-Up and Maturation

### 1. Start-Up Strategies

**Method 1: Natural Colonization (Slow)**

Timeline: 4-8 weeks

```
Week 1-2:  Add ammonia source (feed or ammonium chloride)
           Target 2-3 mg/L TAN
           Monitor NO₂⁻, NO₃⁻ daily

Week 3-4:  TAN begins dropping
           NO₂⁻ rises (up to 5-10 mg/L)
           Continue ammonia dosing

Week 5-6:  NO₂⁻ begins dropping
           NO₃⁻ accumulates
           Reduce ammonia dosing

Week 7-8:  Stable TAN <1 mg/L, NO₂⁻ <1 mg/L
           Ready for fish at 50% capacity
```

**Method 2: Biofilter Seeding (Fast)**

Timeline: 2-4 weeks

- Transfer media from established biofilter (20-30% of volume)
- Or use commercial bacterial additives
- Still requires gradual loading increase

**Method 3: Fish-In Cycling (Traditional)**

- Stock at 25% capacity
- Feed conservatively
- Monitor water quality closely
- Risk of fish stress/loss
- Gradually increase stocking

### 2. Bacterial Seeding

**Commercial Products:**
- Nitrospira spp. concentrates
- FritzZyme, Dr. Tim's, API, etc.
- Effectiveness varies widely

**Inoculation Protocol:**
```
1. Add bacteria to biofilter directly
2. Dose ammonia to 2-3 mg/L
3. Turn off UV/ozone temporarily
4. Maintain optimal pH (7.5-8.0) and DO (>5 mg/L)
5. Monitor daily: TAN, NO₂⁻, NO₃⁻
6. Re-dose bacteria if no progress in 7 days
```

### 3. Monitoring During Start-Up

| Parameter | Test Frequency | Action Level |
|-----------|---------------|--------------|
| TAN | Daily | >5 mg/L: water change |
| NO₂⁻ | Daily | >10 mg/L: add salt (reduce toxicity) |
| NO₃⁻ | 2-3× weekly | >200 mg/L: water change |
| pH | Daily | <7.0: add buffer |
| DO | Continuous | <5 mg/L: increase aeration |
| Temperature | Continuous | Maintain stable |

---

## Denitrification Systems

As nitrate accumulates in RAS, denitrification may be needed:

### Denitrification Reaction

```
Anaerobic conditions + Carbon source:

2 NO₃⁻ + Organic C → N₂↑ + CO₂ + H₂O

Examples:
5 NO₃⁻ + 2 CH₃OH → 2.5 N₂ + 2 CO₂ + 3 H₂O + 5 OH⁻
5 NO₃⁻ + C₆H₁₂O₆ → 2.5 N₂ + 6 CO₂ + 3 H₂O + 5 OH⁻
```

### Denitrification Reactor Design

```
┌────────────────────────────────────────────────────┐
│         DENITRIFICATION REACTOR                    │
├────────────────────────────────────────────────────┤
│                                                     │
│   Carbon Source In                                 │
│         ↓                                          │
│  Water In ──> ┌────────────────┐ ──> Water Out    │
│               │ ████████████████│                  │
│               │ ████████████████│ <── Anaerobic    │
│               │ ████████████████│     biofilm      │
│               │ ████████████████│                  │
│               └────────────────┘                   │
│                                                     │
│   NO OXYGEN - must maintain anaerobic conditions   │
│   HRT: 1-4 hours                                   │
│   Temperature: 20-30°C optimal                     │
└────────────────────────────────────────────────────┘
```

**Design Parameters:**

| Parameter | Value | Notes |
|-----------|-------|-------|
| HRT | 1-4 hours | Depends on NO₃⁻ concentration |
| DO | <0.5 mg/L | Must be anaerobic |
| Loading | 0.5-2.0 kg NO₃⁻-N/m³/day | |
| C:N ratio | 2-3:1 | Carbon to nitrate-nitrogen |
| pH | 7.0-8.0 | Optimal range |

**Carbon Sources:**

| Source | C:N Ratio | Cost | Issues |
|--------|-----------|------|--------|
| Methanol | 2.5:1 | Low | Toxic if overdosed |
| Ethanol | 3:1 | Low | Same as methanol |
| Glucose | 4:1 | Medium | Can support other bacteria |
| Glycerol | 3.5:1 | Medium | Good alternative |
| Acetate | 3:1 | High | Very safe |

---

## Troubleshooting Biofilter Performance

### Common Issues and Solutions

**Problem 1: TAN Not Decreasing**

Possible causes:
- Insufficient biofilter surface area
- Low dissolved oxygen (<2 mg/L)
- Low pH (<6.5)
- Low alkalinity (<50 mg/L)
- Low temperature
- Toxic substances present

Solutions:
- Add more media or additional biofilter
- Increase aeration
- Add sodium bicarbonate (buffer)
- Wait for temperature increase
- Check for chlorine, heavy metals, medications

**Problem 2: Nitrite Spike**

Possible causes:
- Biofilter immature (NOB not established)
- Overfeeding/sudden load increase
- Low DO in biofilter
- pH too low for NOB

Solutions:
- Reduce feeding temporarily
- Add salt (chloride reduces nitrite toxicity: 10:1 ratio)
- Increase aeration
- Buffer pH to 7.5-8.0
- Patience - NOB will catch up

**Problem 3: Biofilter Crash**

Possible causes:
- Power outage (anaerobic conditions)
- Chemical exposure (chlorine, medications)
- pH shock
- Extended high temperature

Recovery:
- Large water change immediately
- Reduce feeding to minimum
- Re-seed biofilter if needed
- Monitor closely for 2-4 weeks

**Problem 4: High Nitrate Accumulation**

Solutions:
- Increase water exchange rate
- Install denitrification reactor
- Integrate aquaponics system
- Reduce feeding (lower input)

---

## Key Performance Indicators

Monitor these metrics to ensure biofilter health:

**Daily:**
- TAN: <1 mg/L (target <0.5 mg/L)
- NO₂⁻: <1 mg/L (target <0.2 mg/L)
- DO in biofilter: >4 mg/L
- pH: 7.0-8.0

**Weekly:**
- NO₃⁻: Trend analysis
- Alkalinity: >50 mg/L (replenish as needed)
- Temperature: Record and track

**Monthly:**
- Calculate TAN removal rate
- Calculate conversion efficiency
- Assess biofilm development

**Calculations:**

```
TAN Removal Efficiency (%) =
  [(TAN_in - TAN_out) / TAN_in] × 100

Conversion Rate (g TAN/m²/day) =
  (TAN_in - TAN_out)(mg/L) × Flow(m³/day) × 1000(mg/g) / Surface Area(m²)
```

---

## Practical Exercise

**Design Challenge: Tilapia RAS Biofilter**

**Given:**
- Production: 50 tonnes/year tilapia
- Peak feed: 200 kg/day
- Feed protein: 36%
- Water temp: 28°C
- Technology: MBBR

**Tasks:**

1. Calculate TAN production
2. Select appropriate loading rate
3. Determine required surface area
4. Size the biofilter reactor(s)
5. Calculate aeration requirements
6. Estimate oxygen demand for nitrification
7. Create start-up timeline

**Deliverable:** Complete biofilter specification sheet

---

## Key Takeaways

1. **Nitrification is essential** - biofilters convert toxic ammonia to less toxic nitrate

2. **MBBR is most common** - moving bed bioreactors dominate commercial RAS

3. **Surface area is key** - more biofilm surface area = more nitrification capacity

4. **Loading rates matter** - conservative designs = stable systems

5. **Start-up takes time** - plan 4-8 weeks for full biofilter maturation

6. **Monitor constantly** - TAN and NO₂⁻ must be tracked daily initially

7. **Denitrification is optional** - needed when nitrate >200 mg/L

8. **Temperature affects rate** - cold water = lower nitrification rates

---

## Further Reading

1. Timmons, M.B. & Ebeling, J.M. (2013). "Recirculating Aquaculture" - Chapter 6
2. Malone, R.F. & Pfeiffer, T.J. (2006). "Rating fixed film nitrifying biofilters"
3. Chen, S. et al. (2006). "Suspended solids removal by foam fractionation"
4. Eding, E.H. et al. (2006). "Design and operation of nitrifying trickling filters"
5. van Rijn, J. et al. (2006). "Denitrification in recirculating systems"

---

*Next Lesson: Module 3 - Solids Management Systems*

*EcoFusion Academy - Course 402: Advanced Aquaculture Systems*
