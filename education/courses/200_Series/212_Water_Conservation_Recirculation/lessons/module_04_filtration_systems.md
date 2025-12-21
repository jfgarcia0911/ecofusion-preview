# Module 4: Filtration Systems for Recirculation
## Course 212: Water Conservation & Recirculation

---

## Learning Objectives

By the end of this module, you will be able to:
1. Select appropriate filtration methods for different applications
2. Design multi-stage filtration systems
3. Size filters for system flow rates and loading
4. Maintain and troubleshoot filtration equipment
5. Optimize filtration for water conservation

---

## Introduction

Filtration is the foundation of successful water recirculation. By removing suspended solids, organic matter, and debris, filtration systems protect plants, prevent pathogen buildup, and enable other treatment processes (UV, ozone) to work effectively. Poor filtration is the #1 cause of recirculation system failure.

---

## Types of Filtration

### Filtration Classification

```
╔════════════════════════════════════════════════════════════════════════════╗
║                      FILTRATION METHODS OVERVIEW                           ║
╠════════════════════════════════════════════════════════════════════════════╣
║                                                                            ║
║ MECHANICAL FILTRATION                    BIOLOGICAL FILTRATION             ║
║ ══════════════════════                   ═══════════════════               ║
║ Removes particles by physical            Uses bacteria to convert          ║
║ separation                                harmful compounds                ║
║                                                                            ║
║ • Screen filters       (>500 µm)         • Biofilters (aquaponics)        ║
║ • Bag filters          (50-500 µm)       • Moving bed (MBBR)              ║
║ • Cartridge filters    (5-100 µm)        • Fluidized bed                  ║
║ • Sand filters         (20-50 µm)                                         ║
║ • Drum filters         (50-200 µm)       CHEMICAL FILTRATION              ║
║ • Foam fractionators   (proteins)        ═══════════════════               ║
║                                          Adsorption/ion exchange           ║
║                                                                            ║
║                                          • Activated carbon                ║
║                                          • Ion exchange resins             ║
║                                          • Zeolites                        ║
║                                                                            ║
╚════════════════════════════════════════════════════════════════════════════╝
```

---

## Mechanical Filtration Systems

### Screen Filters

**Best for: Coarse pre-filtration, debris removal**

```
SCREEN FILTER OPERATION

    Influent                   Effluent
       │                          │
       ▼                          ▼
    ┌─────────────────────────────┐
    │  ╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱   │
    │ ╱ Screen Mesh           ╱   │─── Clean Water
    │╱  (100-500 µm)        ╱     │
    │╱                    ╱       │
    │  Solids Retained  ╱         │
    │                 ╱           │
    └─────────────────────────────┘
            │
            ▼
        Backwash
         Valve
```

**Specifications:**
- Mesh sizes: 100-500 microns typical
- Materials: Stainless steel, nylon, polyester
- Cleaning: Manual brush or automatic backwash
- Pressure drop: Low (1-5 psi clean)

### Bag Filters

**Best for: Medium filtration, easy maintenance**

```
BAG FILTER CROSS-SECTION

         Inlet
           │
           ▼
    ┌─────────────┐
    │   Basket    │
    │  ╔═══════╗  │
    │  ║ ~~~~~ ║  │ ← Filter Bag
    │  ║~~~~~  ║  │   (5-500 µm)
    │  ║ ~~~~ ~║  │
    │  ║~  ~~~  ║  │
    │  ║ ~~~~~ ║  │
    │  ╚═══╤═══╝  │
    └──────┼──────┘
           │
           ▼
        Outlet

Replace bag when pressure differential >5-10 psi
```

**Advantages:**
- Inexpensive ($2-15 per bag)
- Easy to service
- No backwash needed
- Good for variable flows

**Disadvantages:**
- Regular replacement required
- Not suitable for high solids loading
- Disposal costs

### Sand Filters

**Best for: High-quality filtration, large systems**

```
SAND FILTER OPERATION

         FILTRATION MODE              BACKWASH MODE

    Influent                          Backwash Water
       │                                    │
       ▼                                    │
    ┌──────────┐                    ┌──────▼──────┐
    │ ▒▒▒▒▒▒▒▒ │← Media             │ ▒▒▒▒▒▒▒▒▒▒  │
    │ ▒▒▒▒▒▒▒▒ │  (Sand)             │ ▒▒↑↑↑↑▒▒▒▒  │
    │▓▓▓▓▓▓▓▓▓ │← Support            │▓▓↑↑↑↑▓▓▓▓▓  │
    │█████████ │  Gravel             │█████████████│
    └────┬─────┘                     └──────┬──────┘
         │                                  │
         ▼                                  ▼
    Clean Water                        Waste Drain

Filtration: Water flows down through sand
Backwash: Water flows up, fluidizes sand, removes trapped particles
```

**Sizing Formula:**
```
Filter Area (sq ft) = Flow Rate (GPM) ÷ Filtration Rate (GPM/sq ft)

Typical filtration rates:
• Standard: 15-20 GPM/sq ft
• High rate: 20-25 GPM/sq ft
• Low rate: 10-15 GPM/sq ft (better filtration)

Example:
Flow: 100 GPM
Rate: 15 GPM/sq ft
Required area: 100 ÷ 15 = 6.67 sq ft
Tank diameter: ~3 feet
```

**Backwash Requirements:**
- Frequency: When pressure differential >10 psi
- Duration: 3-5 minutes
- Flow rate: 15-20 GPM/sq ft (upflow)
- Water usage: 1-3% of total flow

### Drum Filters

**Best for: Aquaponics, high solids loading**

```
ROTATING DRUM FILTER

                    ┌─ Spray Bar (backwash)
                    │
    ┌───────────────▼───────────────┐
    │        ╱╱╱╱╱╱╱╱╱╱╱            │
    │      ╱  Rotating   ╱           │
    │    ╱   Drum Screen  ╱          │
    │  ╱  (50-200 µm)      ╱         │
    │ ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼╱          │
    │   Dirty Water                  │
    └────────────────┬───────────────┘
                     │
                     ▼
                Clean Water

Rotation: Continuous or intermittent
Backwash: Spray removes solids to waste trough
Efficiency: 90-95% solids removal
```

---

## Multi-Stage Filtration Design

### Staged Filtration Strategy

**The progression from coarse to fine removes particles efficiently**

```
┌────────────────────────────────────────────────────────────────┐
│              MULTI-STAGE FILTRATION SCHEMATIC                  │
└────────────────────────────────────────────────────────────────┘

Influent
   │
   ▼
┌──────────────┐
│   STAGE 1    │  Screen Filter (200-500 µm)
│  Coarse      │  • Removes large debris
│  Filtration  │  • Protects downstream equipment
└──────┬───────┘  • Low maintenance
       │
       ▼
┌──────────────┐
│   STAGE 2    │  Bag or Sand Filter (20-100 µm)
│  Medium      │  • Removes suspended solids
│  Filtration  │  • Primary filtration
└──────┬───────┘  • Most important stage
       │
       ▼
┌──────────────┐
│   STAGE 3    │  Cartridge or Fine Sand (5-20 µm)
│  Fine        │  • Polishing filtration
│  Filtration  │  • Prepares for UV/ozone
└──────┬───────┘  • Optional for most systems
       │
       ▼
  To UV/Ozone
  Sterilization
```

**Stage Selection Guide:**

| System Type | Recommended Stages | Primary Filter | Notes |
|-------------|-------------------|----------------|-------|
| **NFT (clean)** | 2 stages | Bag (50 µm) | Minimal solids |
| **DWC/Raft** | 2 stages | Bag or sand (50 µm) | Moderate solids |
| **Media beds** | 2-3 stages | Sand (20-50 µm) | Higher solids |
| **Aquaponics** | 3-4 stages | Drum + sand | High solids, biofilter |

---

## Filtration System Sizing

### Calculating Filter Capacity

**Key Factors:**
1. System flow rate (GPM)
2. Solids loading (amount of debris)
3. Desired filtration quality (micron rating)
4. Maintenance frequency tolerance

**Sizing Example - Medium System:**

```
System Parameters:
• Total volume: 5,000 gallons
• Desired turnover: 2 hours
• Required flow: 5,000 ÷ 120 = 42 GPM

Filtration Design:
┌─────────────────────────────────────────────┐
│ Stage 1: Screen Filter                      │
│ • 200 micron mesh                           │
│ • 50 GPM capacity                           │
│ • Manual clean weekly                       │
│                                             │
│ Stage 2: Sand Filter                        │
│ • 30" diameter (4.9 sq ft)                  │
│ • 50 GPM at 10 GPM/sq ft                    │
│ • Automatic backwash (pressure sensor)      │
│                                             │
│ Optional Stage 3: Bag Filter                │
│ • 25 micron                                 │
│ • 50 GPM capacity                           │
│ • Polish before UV                          │
│                                             │
│ Total Cost: $3,000-5,000                    │
│ Maintenance: 2-4 hrs/month                  │
└─────────────────────────────────────────────┘
```

---

## Biological Filtration

### Biofilters for Aquaponics

**Purpose:** Convert ammonia → nitrite → nitrate

```
BIOFILTER PROCESS

    Fish Waste              Beneficial
       │                    Bacteria
       ▼                       │
    ┌─────────────────────────▼──────┐
    │  ○ ○ ○ ○ ○ ○ ○ ○              │
    │ ○ ○ ○ ○ ○ ○ ○ ○ ○             │ ← Media
    │  ○ ○ ○ ○ ○ ○ ○ ○              │   (High SA)
    │ ○ ○ ○ ○ ○ ○ ○ ○ ○             │
    │  ○ ○ ○ ○ ○ ○ ○ ○              │
    └─────────────────────────────────┘
           │
           ▼
    NH3 → NO2 → NO3
    (Toxic)   (Plant food)

Surface Area Requirements:
• 1 sq ft per 1 lb fish (minimum)
• 1.5-2 sq ft per 1 lb fish (recommended)
```

**Media Types:**

| Media | Surface Area | Advantages | Disadvantages |
|-------|--------------|------------|---------------|
| **K1 Moving Bed** | 500 m²/m³ | Self-cleaning, efficient | Requires constant motion |
| **Bio-balls** | 200-250 m²/m³ | Good flow, durable | Can clog over time |
| **Lava rock** | 100-200 m²/m³ | Inexpensive, natural | Heavy, variable quality |
| **Matala mats** | 200-300 m²/m³ | Good flow, layerable | Moderate cost |

---

## Filtration Maintenance

### Maintenance Schedule

```
DAILY
□ Check pressure gauges (filters and system)
□ Visual inspection for leaks
□ Verify backwash automation functioning

WEEKLY
□ Clean pre-filters/screens
□ Check solids accumulation
□ Verify flow rates through stages
□ Log pressure differentials

MONTHLY
□ Deep clean all filters
□ Replace filter bags (if applicable)
□ Inspect media for wear
□ Clean biofilm from surfaces
□ Check valve operation

QUARTERLY
□ Media replacement (cartridges)
□ System pressure test
□ Inspect all plumbing connections
□ Performance evaluation
```

### Troubleshooting Guide

```
╔════════════════════════════════════════════════════════════╗
║         FILTRATION TROUBLESHOOTING                         ║
╠════════════════════════════════════════════════════════════╣
║                                                            ║
║ PROBLEM: Rapid pressure increase                          ║
║ ────────────────────────────                               ║
║ Cause: Filter clogged or undersized                        ║
║ Solution: Increase cleaning frequency, verify sizing       ║
║                                                            ║
║ PROBLEM: Cloudy water persists                             ║
║ ────────────────────────────                               ║
║ Cause: Inadequate filtration or bacterial bloom            ║
║ Solution: Add/upgrade filtration, check UV system          ║
║                                                            ║
║ PROBLEM: Poor flow rate                                    ║
║ ────────────────────────────                               ║
║ Cause: Clogged filter or undersized pump                   ║
║ Solution: Clean/replace media, verify pump capacity        ║
║                                                            ║
║ PROBLEM: Frequent backwash cycles                          ║
║ ────────────────────────────                               ║
║ Cause: High solids loading or inadequate pre-filtration    ║
║ Solution: Add coarse stage, reduce feeding                 ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝
```

---

## Water Conservation Through Filtration

### Optimizing Backwash Water Use

**Standard vs. Optimized Backwash:**

```
Standard Backwash:
• Timed cycles: Every 24 hours regardless
• Water use: 2-4% of system volume daily
• Efficiency: Moderate

Optimized Backwash:
• Pressure-differential triggered
• Backwash only when needed
• Water use: 1-2% of system volume
• Efficiency: High

Annual Water Savings:
10,000 gal system × 2% daily × 365 days = 73,000 gal/year savings
```

**Backwash Water Recovery:**

```
┌──────────────────────────────────────────┐
│  BACKWASH WATER RECOVERY OPTIONS         │
├──────────────────────────────────────────┤
│                                          │
│ Option 1: Settling Tank Recovery         │
│ • Allow solids to settle                 │
│ • Return supernatant to system           │
│ • Reduces water waste by 50-70%          │
│                                          │
│ Option 2: Irrigation Reuse               │
│ • Rich in nutrients                      │
│ • Use for outdoor plants                 │
│ • Zero waste discharge                   │
│                                          │
│ Option 3: Sequential Filtration          │
│ • Use as pre-rinse for next backwash     │
│ • Cascade to lower-grade uses            │
│ • Reduces fresh water input              │
│                                          │
└──────────────────────────────────────────┘
```

---

## Module Summary

### Key Takeaways

1. **Multi-stage filtration is most effective** - coarse to fine progression removes particles efficiently and protects equipment

2. **Proper sizing prevents problems** - undersized filters create maintenance burdens and water quality issues

3. **Different systems need different approaches** - aquaponics requires biofilters; clean hydroponics needs less intensive filtration

4. **Maintenance is non-negotiable** - filters only work when clean; establish and follow schedules

5. **Optimize for water conservation** - pressure-differential triggering and backwash recovery reduce water waste

### Action Items

Before proceeding to Module 5:
- [ ] Determine filtration stages needed for your system
- [ ] Calculate filter sizing based on flow rates
- [ ] Select appropriate filter types
- [ ] Plan maintenance schedule and procedures
- [ ] Consider backwash water recovery options

---

*EcoFusion Academy - Course 212, Module 4*
