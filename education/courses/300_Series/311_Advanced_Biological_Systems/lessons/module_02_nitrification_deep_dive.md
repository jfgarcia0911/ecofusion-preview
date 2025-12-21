# Module 2: Nitrification Deep Dive

## Overview
Nitrification is the most critical biological process in aquaponic systems. This module explores the biochemistry, kinetics, and optimization strategies for the two-stage bacterial conversion of toxic ammonia into plant-available nitrate.

**Duration:** 1 hour
**Learning Objectives:**
- Understand nitrification biochemistry at the molecular level
- Calculate nitrification rates and biofilter capacity
- Optimize conditions for maximum nitrification efficiency
- Troubleshoot nitrification problems systematically

---

## The Nitrification Process

### Complete Biochemical Pathway

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                   COMPLETE NITRIFICATION PATHWAY                          ║
╠═══════════════════════════════════════════════════════════════════════════╣
║                                                                           ║
║  STAGE 1: AMMONIA OXIDATION (Ammonia-Oxidizing Bacteria/Archaea)         ║
║  ────────────────────────────────────────────────────────────────────     ║
║                                                                           ║
║  Step 1: Ammonia to Hydroxylamine                                        ║
║  NH3 + O2 + 2H+ + 2e- ──[AMO]──> NH2OH + H2O                             ║
║                        (Ammonia Monooxygenase)                            ║
║                                                                           ║
║  Step 2: Hydroxylamine to Nitrite                                        ║
║  NH2OH + H2O ──[HAO]──> NO2- + 5H+ + 4e-                                 ║
║              (Hydroxylamine Oxidoreductase)                               ║
║                                                                           ║
║  Overall Stage 1 Reaction:                                               ║
║  NH3 + 1.5 O2 ──────────> NO2- + H2O + H+                                ║
║                                                                           ║
║  Energy Yield: ~275 kJ/mol NH3                                            ║
║  Bacteria: Nitrosomonas, Nitrosospira, Nitrosococcus                     ║
║  Archaea: Nitrosopumilus, Nitrosotalea                                   ║
║                                                                           ║
║  ═════════════════════════════════════════════════════════════════════   ║
║                                                                           ║
║  STAGE 2: NITRITE OXIDATION (Nitrite-Oxidizing Bacteria)                 ║
║  ────────────────────────────────────────────────────────────────────     ║
║                                                                           ║
║  NO2- + 0.5 O2 ──[NXR]──> NO3-                                            ║
║               (Nitrite Oxidoreductase)                                    ║
║                                                                           ║
║  Energy Yield: ~76 kJ/mol NO2-                                            ║
║  Bacteria: Nitrobacter, Nitrospira, Nitrococcus, Nitrospina              ║
║                                                                           ║
║  ═════════════════════════════════════════════════════════════════════   ║
║                                                                           ║
║  COMPLETE PROCESS:                                                        ║
║  NH4+ ──> NH3 ──> NH2OH ──> NO ──> NO2- ──> NO3-                          ║
║   |        ↑                 ↑                                            ║
║   |        |                 |                                            ║
║  pKa=9.25  |            Intermediate                                      ║
║         pH-dependent    (toxic, reactive)                                 ║
║                                                                           ║
║  OXYGEN CONSUMPTION:                                                      ║
║  4.57 mg O2 per 1 mg NH4-N converted to NO3-N                             ║
║                                                                           ║
║  ALKALINITY CONSUMPTION:                                                  ║
║  7.14 mg CaCO3 per 1 mg NH4-N converted to NO3-N                          ║
║                                                                           ║
╚═══════════════════════════════════════════════════════════════════════════╝
```

---

## Nitrifying Organisms in Detail

### Ammonia-Oxidizing Bacteria (AOB)

**Nitrosomonas europaea:**
- Most common in aquaponic/aquaculture systems
- Temperature optimum: 25-30°C (77-86°F)
- pH optimum: 7.8-8.0
- Generation time: 8-12 hours
- Substrate affinity (Km): 0.2-2.0 mg NH3-N/L

**Nitrosospira:**
- More tolerant of low temperatures
- Common in cold-water systems
- Slower growth rate
- Lower substrate affinity

**Nitrosococcus:**
- Marine environments primarily
- Rare in freshwater aquaponics

---

### Ammonia-Oxidizing Archaea (AOA)

**Nitrosopumilus maritimus:**
- Very high substrate affinity (can scavenge low NH3)
- Slower growth rate than AOB
- More efficient per cell
- Important in oligotrophic (low-nutrient) conditions

**Advantages over AOB:**
- Lower NH3 concentrations tolerated
- Higher efficiency (more NH3 oxidized per cell)
- Potentially more resistant to some stressors

**Disadvantages:**
- Slower to establish
- Slower overall rates at high ammonia loads
- Less research on management in aquaponics

---

### Nitrite-Oxidizing Bacteria (NOB)

**Nitrospira:**
- Actually the DOMINANT NOB in most systems (not Nitrobacter!)
- High substrate affinity (K-strategist)
- Slow growth rate
- Multiple species with different niches
- Some species can perform complete nitrification (comammox)

**Nitrobacter:**
- Historically thought to be dominant (easier to culture)
- Fast growth in high nitrite conditions (r-strategist)
- Lower substrate affinity
- Less common than Nitrospira in stable systems

**Comammox (Complete Ammonia Oxidation) Bacteria:**
- **Nitrospira inopinata** and related species
- Can perform BOTH ammonia and nitrite oxidation
- Single organism does complete process
- Recently discovered (2015)
- Role in aquaponics still being researched

---

## Nitrification Kinetics

### Monod Kinetics

Nitrification follows Monod kinetics (similar to enzyme kinetics):

```
                    Vmax × [S]
Rate (V) = ─────────────────────
                   Km + [S]

Where:
V    = Reaction rate (mg N/L/day)
Vmax = Maximum rate at substrate saturation
[S]  = Substrate concentration (NH3 or NO2-)
Km   = Half-saturation constant (substrate conc. at 0.5 Vmax)
```

**Practical Implications:**

| [NH3] mg/L | % of Maximum Rate | Application |
|-----------|-------------------|-------------|
| 0.1 | 20-30% | Oligotrophic systems, need high biomass |
| 0.5 | 50-60% | Typical running system |
| 1.0 | 70-80% | Well-fed system |
| 5.0 | 90-95% | Near maximum, cycling system |
| 10+ | 95-100% | Maximum rate, but approaching inhibition |

**Key Insight:** Nitrification rate is NOT linear with ammonia concentration. Systems running at very low ammonia need much more biofilter surface area to achieve the same total conversion rate.

---

### Temperature Dependence

Nitrification rate approximately doubles every 10°C increase (Q10 ≈ 2):

```
Temperature Effect on Nitrification:

Rate
(relative)
  ^
 1.0|        ████████████████  (Optimal 25-30°C)
    |      ██
 0.8|    ██
    |   █
 0.6|  █
    | █
 0.4|█
    |█
 0.2|█
    |█
  0 +─────────────────────────────────>
    0   10   20   30   40   50°C
        50   68   86  104  122°F

Critical Thresholds:
< 10°C (50°F):   Rate < 25% of optimum, cycling can take months
10-15°C (50-59°F): Slow but functional, 4-6 week cycling
15-20°C (59-68°F): Moderate, 3-4 week cycling
20-30°C (68-86°F): Optimal, 2-3 week cycling
30-35°C (86-95°F): Stress range, declining rates
> 35°C (95°F):     Rapid die-off, system crash
```

**Management Strategies:**
- Heat systems in winter if below 18°C (64°F)
- Cool systems in summer if above 30°C (86°F)
- Never exceed 32°C (90°F) water temperature
- Allow gradual seasonal transitions (acclimation)

---

### pH Effects

```
╔════════════════════════════════════════════════════════════════════╗
║            pH EFFECTS ON NITRIFICATION                             ║
╠════════════════════════════════════════════════════════════════════╣
║                                                                    ║
║  Nitrification Rate vs pH:                                         ║
║                                                                    ║
║   Rate                                                             ║
║   100%|      ┌────────────┐                                        ║
║       |    ╱              ╲                                        ║
║    80%|  ╱                  ╲                                      ║
║       | ╱                    ╲                                     ║
║    60%|╱                      ╲                                    ║
║       |                        ╲                                   ║
║    40%|                         ╲╲                                 ║
║       |                           ╲╲                               ║
║    20%|                             ╲╲╲                            ║
║       |                                ╲╲╲                         ║
║     0%+────────────────────────────────────╲╲                      ║
║       5.0  6.0  7.0  7.5  8.0  8.5  9.0  9.5  10.0                 ║
║                         pH                                         ║
║                                                                    ║
║  Optimal pH: 7.5-8.0                                               ║
║                                                                    ║
║  Complications:                                                    ║
║  • NH3/NH4+ equilibrium shifts with pH                             ║
║  • Higher pH = more toxic NH3 (free ammonia)                       ║
║  • Lower pH = more H+ needed to buffer                             ║
║                                                                    ║
║  Ammonia Speciation (25°C):                                        ║
║                                                                    ║
║  % NH3  |                              ╱████                       ║
║  (free) |                          ╱╱╱                             ║
║   100%  |                      ╱╱╱                                 ║
║         |                  ╱╱╱                                     ║
║    50%  |              ╱╱╱              ← pKa = 9.25               ║
║         |          ╱╱╱                                             ║
║     10% |      ╱╱╱                                                 ║
║      1% |  ╱╱╱                                                     ║
║         |╱                                                         ║
║     0%  +──────────────────────────────────                        ║
║         6.0  7.0  8.0  9.0  10.0  11.0                             ║
║                     pH                                             ║
║                                                                    ║
║  At pH 7.0: ~0.5% NH3, 99.5% NH4+                                  ║
║  At pH 8.0: ~4% NH3, 96% NH4+                                      ║
║  At pH 9.0: ~33% NH3, 67% NH4+                                     ║
║                                                                    ║
╚════════════════════════════════════════════════════════════════════╝
```

**Aquaponics pH Compromise:**
- **Nitrifiers prefer:** 7.5-8.0
- **Plants prefer:** 6.0-6.5
- **Fish tolerate:** 6.5-8.0
- **Best compromise:** 6.8-7.2
  - Nitrification runs at 70-80% of optimum
  - Still very functional
  - Plants and fish both happy

---

## Oxygen Requirements

### Stoichiometric Requirements

```
Oxygen Needed for Complete Nitrification:

NH4+ → NO2-:  3.43 mg O2 per 1 mg NH4-N
NO2- → NO3-:  1.14 mg O2 per 1 mg NO2-N
────────────────────────────────────────
TOTAL:        4.57 mg O2 per 1 mg NH4-N completely oxidized to NO3-N

Plus fish respiration: ~200-300 mg O2 per kg fish per hour

Example Calculation:
System with 50 kg fish, fed 1% body weight (500g feed/day)
Assume 35% protein, 60% protein metabolized to ammonia
= 500g × 0.35 × 0.60 × 0.16 (N in protein) = 16.8g TAN/day

O2 needed for nitrification: 16.8g × 4.57 = 76.8g O2/day
O2 needed for fish: 50kg × 250mg/kg/hr × 24hr = 300g O2/day
─────────────────────────────────────────────────────────
TOTAL O2 demand: ~377g O2/day or 15.7g/hour
```

**Practical Implications:**
- Aeration is critical (not just for fish!)
- 20-25% of O2 goes to nitrification
- Biofilter must have high DO (>4 mg/L minimum)
- Undersized aeration = nitrification failure

---

### Oxygen Gradients in Biofilm

```
Biofilm Oxygen Profile:

Bulk Water:     8 mg/L DO ════════════════════════
                           ↓ ↓ ↓ ↓ ↓ (diffusion)
Biofilm Surface: 6 mg/L ──────────────────────────
                         ╱ ╲ Active nitrification
Mid-Biofilm:    3 mg/L ───────────────────────────
                        ╱   ╲ Reduced activity
                       ╱     ╲
Deep Biofilm:   <1 mg/L ═══════════════════════════
                       Anaerobic zone
                       (denitrification, sulfate reduction)

Substrate:      ═══════════════════════════════════
```

**Implications:**
- Only outer biofilm layers actively nitrify
- Excessive biofilm thickness = wasted depth
- Some anaerobic zone is OK (denitrification)
- Very thick biofilm can go septic (H2S production)

---

## Alkalinity Consumption

### The pH Drop Problem

Every mg of NH4-N oxidized to NO3-N consumes 7.14 mg of alkalinity (as CaCO3).

```
Alkalinity Depletion:

Initial pH: 7.5, Alkalinity: 150 mg/L

                  Nitrification proceeds...
                           ↓
              H+ ions released by nitrifiers
                           ↓
              Alkalinity buffers H+ ions
                           ↓
              Alkalinity depleted over time
                           ↓
              pH drops (no more buffer)
                           ↓
              pH 6.0-6.5: Nitrification slows
                           ↓
              pH < 6.0: Nitrification stops
                           ↓
              AMMONIA SPIKE!

Prevention: Maintain alkalinity 100-200 mg/L
```

**Alkalinity Management:**

| Method | Pros | Cons |
|--------|------|------|
| **Calcium carbonate (CaCO3)** | Cheap, adds Ca | Slow dissolving, residue |
| **Potassium carbonate (K2CO3)** | Fast, adds K | Expensive, caustic |
| **Calcium hydroxide (Ca(OH)2)** | Strong buffer, adds Ca | Very caustic, dangerous |
| **Potassium bicarbonate (KHCO3)** | Safe, adds K | Expensive |
| **Sodium bicarbonate (NaHCO3)** | Safe, cheap | Adds sodium (not ideal) |

**Best Practice:**
- Rotate CaCO3 (daily maintenance) and K2CO3 (weekly boost)
- Monitor alkalinity weekly
- Target 120-150 mg/L as CaCO3
- Add buffer BEFORE pH drops (proactive)

---

## Biofilter Design Calculations

### Surface Area Requirements

```
Required Surface Area Calculation:

Step 1: Calculate daily ammonia production
TAN = Feed (g/day) × Protein % × 0.092

Example: 500g feed, 40% protein
TAN = 500 × 0.40 × 0.092 = 18.4g NH3-N/day

Step 2: Determine nitrification rate per unit area
Typical: 0.2-0.5 g NH3-N/m²/day (depends on temperature, pH, DO)
Use conservative 0.3 g/m²/day

Step 3: Calculate required surface area
Area = TAN production / Nitrification rate
Area = 18.4 g/day ÷ 0.3 g/m²/day = 61.3 m² minimum

Step 4: Add safety factor (1.5-2x for stability)
Final Area = 61.3 × 1.5 = 92 m²

Step 5: Select media
If using LECA (specific surface area ~300 m²/m³):
Volume = 92 m² ÷ 300 m²/m³ = 0.31 m³ = 310 liters

If using K1 media (~650 m²/m³):
Volume = 92 m² ÷ 650 m²/m³ = 0.14 m³ = 140 liters
```

---

### Media Surface Area Comparison

| Media Type | Specific Surface Area (m²/m³) | Void Space | Notes |
|-----------|-------------------------------|------------|-------|
| **Gravel (8-16mm)** | 200-250 | 35-45% | Cheapest, lowest performance |
| **LECA (10-20mm)** | 250-350 | 40-50% | Good balance, common |
| **BioGrog** | 300-400 | 45-55% | Excellent, porous |
| **Kaldnes K1** | 650-800 | 85%+ | Moving bed, expensive, excellent |
| **Matala mat** | 200-400 | 95% | Sheet material, good flow |
| **Sponge filters** | 300-500 | 90% | Clogs easily, frequent cleaning |
| **Plastic bio-balls** | 150-250 | 90% | Lower surface area, less clogging |
| **Ceramic rings** | 300-400 | 50-60% | Fragile, good performance |

**Selection Criteria:**
- Surface area (higher = better)
- Void space (for water flow)
- Durability
- Cost
- Clogging resistance
- Weight (structural considerations)

---

## Advanced Biofilter Designs

### 1. Moving Bed Biofilm Reactor (MBBR)

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                    MBBR DESIGN                                            ║
╠═══════════════════════════════════════════════════════════════════════════╣
║                                                                           ║
║  Water In ───────────────────────────────────────> Water Out              ║
║     ↓                                                  ↑                  ║
║     │   ┌──────────────────────────────────────┐      │                  ║
║     │   │  ○ ○  ○ ○  ○ ○  ○ ○  ○ ○  ○ ○  ○ ○ │      │                  ║
║     └──>│ ○  ○  ○  ○  ○  ○  ○  ○  ○  ○  ○  ○  │──────┘                  ║
║         │  ○ ○  ○ ○  ○ ○  ○ ○  ○ ○  ○ ○  ○ ○ │     ↑                   ║
║         │ ○  ○  ○  ○  ○  ○  ○  ○  ○  ○  ○  ○  │     │                   ║
║         │  ○ ○  ○ ○  ○ ○  ○ ○  ○ ○  ○ ○  ○ ○ │   Screen                ║
║         │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│   (retains              ║
║         └──────────────────────────────────────┘    media)               ║
║                  ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑                                         ║
║              Air diffusers (mix & oxygenate)                              ║
║                                                                           ║
║  Media: K1 or similar floating carriers (fill 50-70% of volume)          ║
║  Advantages:                                                              ║
║  • Self-cleaning (abrasion between carriers)                              ║
║  • High surface area                                                      ║
║  • Excellent oxygen transfer                                              ║
║  • No clogging                                                            ║
║  • Easy to monitor biofilm thickness                                      ║
║                                                                           ║
║  Disadvantages:                                                           ║
║  • Expensive media                                                        ║
║  • High energy (continuous mixing)                                        ║
║  • Noisy                                                                  ║
║  • Requires screen to retain media                                        ║
║                                                                           ║
╚═══════════════════════════════════════════════════════════════════════════╝
```

---

### 2. Trickling Filter (Trickle Tower)

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                    TRICKLING FILTER DESIGN                                ║
╠═══════════════════════════════════════════════════════════════════════════╣
║                                                                           ║
║                    Water Distribution                                     ║
║                    ═══════════════════                                    ║
║                      ↓ ↓ ↓ ↓ ↓ ↓ ↓                                       ║
║                 ┌─────────────────────┐                                   ║
║                 │ ░░░░░░░░░░░░░░░░░░░ │  ← Media layer 1                 ║
║                 │ ░░░░░░░░░░░░░░░░░░░ │     (biofilm on media)           ║
║   Air    ─────> │ ░░░░░░░░░░░░░░░░░░░ │  <───── Air (passive)            ║
║   intake        │ ░░░░░░░░░░░░░░░░░░░ │                                  ║
║                 │═════════════════════│  ← Support grid                   ║
║                 │ ░░░░░░░░░░░░░░░░░░░ │  ← Media layer 2                 ║
║   Air    ─────> │ ░░░░░░░░░░░░░░░░░░░ │  <───── Air                      ║
║   intake        │ ░░░░░░░░░░░░░░░░░░░ │                                  ║
║                 │═════════════════════│  ← Support grid                   ║
║                 │ ░░░░░░░░░░░░░░░░░░░ │  ← Media layer 3                 ║
║   Air    ─────> │ ░░░░░░░░░░░░░░░░░░░ │  <───── Air                      ║
║   intake        │ ░░░░░░░░░░░░░░░░░░░ │                                  ║
║                 └─────────────────────┘                                   ║
║                      ↓ Collection                                         ║
║                  Water Return                                             ║
║                                                                           ║
║  Media: LECA, bio-balls, plastic media                                    ║
║  Height: 0.6-1.5m typically                                               ║
║                                                                           ║
║  Advantages:                                                              ║
║  • Excellent oxygenation (air contact)                                    ║
║  • Lower energy (no pumping through media)                                ║
║  • Large surface area                                                     ║
║  • Natural biofilm control (drying/sloughing)                             ║
║  • Passive aeration (no diffusers needed)                                 ║
║                                                                           ║
║  Disadvantages:                                                           ║
║  • Evaporative water loss                                                 ║
║  • Requires pumping to height                                             ║
║  • Cooling effect in cold weather                                         ║
║  • Humidifies greenhouse (can be pro or con)                              ║
║  • Needs even water distribution                                          ║
║                                                                           ║
╚═══════════════════════════════════════════════════════════════════════════╝
```

---

### 3. Bead Filter (Pressurized)

```
Pressurized Bead Filter with Nitrification:

         Inlet ──→ ╔════════════════╗ ──→ Outlet
                   ║   ○ ○ ○ ○ ○   ║ (filtered, nitrified)
                   ║  ○ ○ ○ ○ ○ ○  ║
    Air for        ║ ○ ○ ○ ○ ○ ○ ○ ║
    backwash ──→   ║  ○ ○ ○ ○ ○ ○  ║
                   ║ ○ Beads ○ ○ ○ ║
                   ║  ○ ○ ○ ○ ○ ○  ║
                   ║ ○ ○ ○ ○ ○ ○ ○ ║
                   ╚════════════════╝
                          ↓
                    Waste drain
                  (during backwash)

Advantages:
• Combines mechanical and biological filtration
• Compact
• Easy backwashing
• Clean appearance

Disadvantages:
• Expensive
• Backwashing removes biofilm (temporary capacity loss)
• Lower surface area than MBBR
• Requires pressure pump
```

---

## Optimizing Nitrification Performance

### Optimization Checklist

**Environmental Factors:**
- [ ] Temperature: 22-28°C (72-82°F)
- [ ] pH: 7.0-7.5
- [ ] Dissolved oxygen: >4 mg/L in biofilter
- [ ] Alkalinity: 100-200 mg/L as CaCO3
- [ ] No chlorine/chloramine in water

**Design Factors:**
- [ ] Adequate surface area (0.3-0.5 g NH3-N/m²/day)
- [ ] Good water distribution across media
- [ ] Sufficient water flow (not too fast, not too slow)
- [ ] Aeration to biofilter
- [ ] Protection from UV light (for MBBR, open systems)

**Operational Factors:**
- [ ] Gradual feeding increases (match capacity growth)
- [ ] Regular monitoring (ammonia, nitrite, nitrate)
- [ ] Minimal disturbance to biofilm
- [ ] Consistent temperatures (avoid shocks)
- [ ] Avoid antibiotics in main system

---

### Troubleshooting Decision Tree

```
START: Ammonia or Nitrite Elevated
           │
           ├──> Recent system start/restart?
           │    YES → Normal cycling (4-6 weeks needed)
           │           • Reduce feeding
           │           • Add established media
           │           • Monitor daily
           │
           ├──> Sudden spike in established system?
           │    │
           │    ├──> Chemical addition (chlorine, meds)?
           │    │    YES → BIOFILTER CRASH
           │    │           • Major water change
           │    │           • Cease feeding
           │    │           • Re-seed biofilter
           │    │           • May take 2-4 weeks to recover
           │    │
           │    ├──> Temperature extreme?
           │    │    YES → Temperature stress
           │    │           • Correct temperature
           │    │           • Reduce feeding
           │    │           • Wait for population recovery
           │    │
           │    └──> Massive feeding increase?
           │         YES → Overload
           │                • Reduce feeding immediately
           │                • Increase aeration
           │                • Monitor, will stabilize in days
           │
           ├──> Ammonia OK but nitrite elevated?
           │    → NOB lag or inhibition
           │      • Check pH (raise to 7.0-7.5)
           │      • Verify DO (>4 mg/L)
           │      • Check for free ammonia toxicity (pH >8 + ammonia)
           │      • Be patient (NOB slower than AOB)
           │
           └──> Gradual increase over weeks?
                → Insufficient capacity
                  • Reduce feeding
                  • Add biofilter media
                  • Improve flow/aeration
                  • Check for clogging
```

---

## Advanced Concepts

### Partial Nitritation-Anammox

**Emerging technology for nitrogen removal:**

```
Traditional: NH3 → NO2- → NO3- (complete nitrification)
                            ↓
                     Plants uptake or accumulation

Partial Nitritation-Anammox:
NH3 → NO2- (stop here)
      ↓
NH3 + NO2- ──[Anammox bacteria]──> N2 gas (removed from system)

Benefits:
• Lower oxygen consumption (60% savings)
• Lower alkalinity consumption
• Nitrogen removal without denitrification
• Lower sludge production

Challenges:
• Very slow-growing bacteria (doubling time 11 days!)
• Sensitive to oxygen, temperature
• Requires precise control
• Not yet practical for small systems
• Research ongoing for aquaponics application
```

---

### Nitrification Inhibition

Sometimes nitrification inhibition is desirable (e.g., fish-only systems with water exchange):

**Natural Inhibitors:**
- **Allylthiourea (ATU)** - Research use only
- **Nitrapyrin** - Agricultural use, toxic to fish
- **Low DO** - <2 mg/L suppresses nitrification

**Why inhibit?** (Not applicable to aquaponics, but useful to know)
- Reduce oxygen consumption in hauling tanks
- Prevent nitrite spike in new systems (debated)
- Research on nitrifier physiology

**In aquaponics:** NEVER inhibit nitrification intentionally!

---

## Monitoring Nitrification

### Key Parameters and Targets

| Parameter | Target Range | Measurement Frequency | Action Level |
|-----------|--------------|----------------------|--------------|
| **Ammonia (TAN)** | <0.5 mg/L | Daily (cycling), weekly (established) | >1.0 mg/L - reduce feeding |
| **Nitrite** | <0.5 mg/L | Daily (cycling), weekly (established) | >1.0 mg/L - investigate cause |
| **Nitrate** | 40-100 mg/L | Weekly | <20: underloaded, >150: overloaded |
| **pH** | 6.8-7.2 | Daily | <6.5 or >7.5 - adjust |
| **Alkalinity** | 100-200 mg/L | Weekly | <80 - add buffer |
| **DO** | >5 mg/L | Daily | <4 mg/L - increase aeration |
| **Temperature** | 22-28°C | Daily | <18°C or >30°C - climate control |

---

### Nitrification Rate Testing

**Measure actual biofilter performance:**

1. **Closed-loop ammonia addition test:**
   - Isolate biofilter in recirculating loop
   - Add known ammonia concentration (2-3 mg/L)
   - Measure ammonia every 30-60 minutes
   - Calculate removal rate

2. **Calculation:**
```
Nitrification Rate (mg N/L/hr) = (NH3 start - NH3 end) / Time (hours)

Surface Area Specific Rate = Rate × Volume / Surface Area
(mg N/m²/day)
```

3. **Interpretation:**
   - >0.3 g/m²/day: Excellent
   - 0.2-0.3 g/m²/day: Good
   - 0.1-0.2 g/m²/day: Marginal
   - <0.1 g/m²/day: Poor (investigate)

---

## Summary

Nitrification is the heart of biological filtration in aquaponics:

**Key Takeaways:**
1. Two-stage process: AOB/AOA convert NH3→NO2-, NOB convert NO2-→NO3-
2. Nitrifiers are slow-growing and sensitive (protect them!)
3. Optimal conditions: 22-28°C, pH 7.0-7.5, DO >4 mg/L, alkalinity 100-200 mg/L
4. Oxygen consumption: 4.57 mg O2 per mg NH3-N
5. Alkalinity consumption: 7.14 mg CaCO3 per mg NH3-N
6. Surface area requirements: 0.3-0.5 g NH3-N/m²/day processing capacity
7. Monitor ammonia, nitrite, pH, alkalinity regularly
8. Make changes gradually; patience during cycling and after disturbances

**Next Module:** Biofilm Science - how bacteria organize on surfaces and how to manage biofilm development.

---

*Module 2 of 14 - Course 311: Advanced Biological Systems*
*EcoFusion Academy*
