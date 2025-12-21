# Module 8: Photoperiod Control

**Course:** 205 - LED Lighting Science
**Duration:** 60 minutes
**Level:** Intermediate

## Introduction

Photoperiod - the duration of light and dark periods - controls critical plant developmental processes including flowering, dormancy, bulb formation, and morphology. Understanding photoperiodic responses enables growers to schedule flowering, prevent bolting, and optimize production timing for market demands.

## Learning Objectives

By the end of this module, you will be able to:

1. Classify crops as short-day, long-day, or day-neutral plants
2. Determine critical day lengths for photoperiodic responses
3. Implement photoperiod strategies for flowering control
4. Apply night interruption and day extension techniques
5. Prevent unwanted bolting in vegetable crops
6. Schedule production using photoperiod manipulation

## 1. Photoperiodism Fundamentals

```
Photoperiodic Plant Classification
===================================

Plants measure day/night length to time developmental events

CLASSIFICATION SYSTEM:

SHORT-DAY PLANTS (SDP)
- Flower when day length < critical photoperiod
- More accurately: "Long-night plants"
- Require continuous dark period

Examples:
┌────────────────────────────────────┐
│ Crop              Critical Day     │
│ ────────          ────────────     │
│ Cannabis          <12-13 hours     │
│ Poinsettia        <12-13 hours     │
│ Chrysanthemum     <13-14 hours     │
│ Strawberry (some) <12-14 hours     │
│ Soybean           <14 hours        │
└────────────────────────────────────┘

Photoperiod Response:
    24 hrs
    ├─────────┬─────────┤
    │ Light   │  Dark   │
    │ 10 hrs  │ 14 hrs  │ → FLOWERS (long night)

    ├───────────────┬───┤
    │ Light         │Dark│
    │ 16 hrs        │8hrs│ → VEGETATIVE (short night)

LONG-DAY PLANTS (LDP)
- Flower when day length > critical photoperiod
- Require short nights

Examples:
┌────────────────────────────────────┐
│ Crop              Critical Day     │
│ ────────          ────────────     │
│ Lettuce           >12-14 hours     │
│ Spinach           >13-14 hours     │
│ Radish            >12-13 hours     │
│ Wheat             >12-14 hours     │
│ Dill              >11-12 hours     │
└────────────────────────────────────┘

Photoperiod Response:
    ├─────────┬─────────┤
    │ Light   │  Dark   │
    │ 10 hrs  │ 14 hrs  │ → VEGETATIVE

    ├───────────────┬───┤
    │ Light         │Dark│
    │ 16 hrs        │8hrs│ → FLOWERS/BOLTS

DAY-NEUTRAL PLANTS (DNP)
- Flowering independent of photoperiod
- Respond to other cues (age, stress, etc.)

Examples:
┌────────────────────────────────────┐
│ Crop                               │
│ ────────────────                   │
│ Tomato                             │
│ Cucumber                           │
│ Pepper                             │
│ Most fruiting vegetables           │
│ Many herbs (basil, oregano)        │
└────────────────────────────────────┘

CRITICAL DAY LENGTH CONCEPT:

Short-Day Plant:
Flowering ←─────────┼─────────→ Vegetative
Response   8 10 12  14  16 18 hrs
                ↑
         Critical day length

Long-Day Plant:
Vegetative ←───────┼─────────→ Flowering
Response   8 10 12 14  16 18 hrs
                ↑
         Critical day length
```

### Phytochrome System

```
Molecular Mechanism of Photoperiodism
======================================

PHYTOCHROME PHOTOCONVERSION:

          Red Light (660nm)
Pr (inactive) ⇄ Pfr (active)
         Far-Red Light (730nm)

During Day:
- Red light converts Pr → Pfr
- Pfr accumulates

During Night:
- Pfr slowly reverts to Pr (dark reversion)
- Pfr degradation

MEASURING NIGHT LENGTH:

Plant "measures" night by Pfr/Pr ratio

Short-Day Plant Flowering:
┌────────────────────────────────────┐
│ Requires LONG uninterrupted night  │
│                                    │
│ ────── DAY ──────┐                │
│  Pfr accumulates │                │
│                  ↓                 │
│ ══════ NIGHT ══════                │
│  Pfr → Pr conversion               │
│  (darkness measuring)              │
│                  ↓                 │
│ If night long enough:              │
│  Pfr drops below threshold         │
│  → Flowering signal activated      │
└────────────────────────────────────┘

NIGHT INTERRUPTION:

Short night break prevents flowering in SDP

Normal long night (flowers):
├─ Day ─┤├─────── Night ───────┤├─ Day ─┤
        Dark period >12 hrs → FLOWER ✓

Interrupted night (no flowering):
├─ Day ─┤├── Night ──┤┤── Night ──┤├─ Day ─┤
                   ↑
                 Flash
        Dark period broken → VEGETATIVE

Flash Requirements:
- Red light most effective
- Duration: 10-30 minutes
- Intensity: 10-50 μmol/m²/s sufficient
- Timing: Middle of night most effective
```

## 2. Flowering Control Strategies

```
Commercial Photoperiod Manipulation
===================================

APPLICATION 1: Cannabis Production
Objective: Control vegetative vs. flowering phase

VEGETATIVE PHASE (18/6):
├──────────── 18 hrs Light ────────────┤├─ 6 hrs Dark ─┤
Day 1 ────────────────────────────────────────────────→
Day 30 ───────────────────────────────────────────────→

Goals:
- Build plant structure
- Develop canopy
- Prepare for flowering

DLI Target: 25-35 mol/m²/d
PPFD: 385-540 μmol/m²/s

TRANSITION TO FLOWERING (12/12):
├──── 12 hrs Light ────┤├──── 12 hrs Dark ────┤
Week 1 ───────────────────────────────────────→
Week 8 ───────────────────────────────────────→

Trigger: Reduce photoperiod to <13 hours
Dark period: Completely uninterrupted (critical!)
DLI Target: 35-45 mol/m²/d
PPFD: 810-1040 μmol/m²/s (higher to maintain DLI)

Light Leak Prevention:
┌────────────────────────────────────┐
│ CRITICAL: Complete darkness        │
│                                    │
│ Even small light leaks can:        │
│ ✗ Delay flowering                  │
│ ✗ Cause hermaphroditism            │
│ ✗ Reduce yields                    │
│                                    │
│ Requirements:                      │
│ - <1 μmol/m²/s during dark period  │
│ - No indicator LEDs visible        │
│ - Sealed entry points              │
│ - Light-proof zippers/doors        │
└────────────────────────────────────┘

APPLICATION 2: Lettuce Bolt Prevention
Objective: Maintain vegetative growth, prevent flowering

SPRING/SUMMER CHALLENGE:
Natural photoperiod: 14-16 hours (long days)
Risk: Bolting in long-day lettuce varieties

Strategy 1: Short Photoperiod
├──── 12 hrs Light ────┤├──── 12 hrs Dark ────┤

- Prevents bolting trigger
- Reduces daily energy consumption
- May reduce growth rate slightly

DLI: 12-15 mol/m²/d
PPFD: 278-347 μmol/m²/s

Strategy 2: Moderate Photoperiod + Cooling
├──────── 14 hrs Light ────────┤├── 10 hrs Dark ──┤

- Balanced growth and bolting resistance
- Combine with cool temperatures (18-22°C)
- Select bolt-resistant varieties

DLI: 14-17 mol/m²/d
PPFD: 278-337 μmol/m²/s

APPLICATION 3: Chrysanthemum Year-Round Production
Objective: Force flowering on schedule for holidays

VEGETATIVE STAGE (Long Days):
Natural photoperiod too short → Extend with lighting

├─ 6hrs ─┤├── 10 hrs Natural ──┤├─ 2hrs ─┤
         Sunrise               Sunset
         ↑                            ↑
      Pre-dawn                   Evening
      extension                  extension

Total: 18 hours light
Duration: 4-6 weeks vegetative growth

FLOWERING STAGE (Short Days):
Natural photoperiod too long → Create short days

├──── 10 hrs Light ────┤├──── 14 hrs Dark ────┤
                        │                      │
                   Black cloth deployed

Black Cloth Protocol:
- Automated system
- Blocks all light
- Creates artificial "night"
- Duration: 6-9 weeks to flower

Timing for Christmas Sales:
- Start SD treatment: Mid-October
- 8 weeks flowering: Late December
- Harvest: December 20-23

APPLICATION 4: Strawberry Forcing
Objective: Induce flowering in day-neutral varieties

PROPAGATION (Long Days):
├──────── 16 hrs Light ────────┤├── 8 hrs Dark ──┤

- Strong runner production
- Vegetative growth
- Crown development

FLOWER INDUCTION (Short Days):
├──── 10 hrs Light ────┤├──── 14 hrs Dark ────┤

- 4-6 weeks short days
- Combined with cool temps (10-15°C)
- Initiates flowering

PRODUCTION (Day-Neutral):
├──────── 14-16 hrs Light ──────────┤

- Maintain continuous flowering
- Optimize fruit production
```

### Day Extension and Night Interruption

```
Photoperiod Extension Techniques
=================================

DAY EXTENSION (for long-day effect)

Morning Extension:
                Natural Photoperiod
    ┌─────────────────────────┐
    │                         │
├─Extend─┤├─────── Natural ─────────┤
  2-4 hrs  Sunrise              Sunset
  50-100 μmol/m²/s

Evening Extension:
                Natural Photoperiod
    ┌─────────────────────────┐
    │                         │
├─────── Natural ─────────┤├─Extend─┤
Sunrise              Sunset  2-4 hrs
                            50-100 μmol/m²/s

Both Ends:
    ┌─Natural─┐
    │         │
├─Ext─┤├─Nat─┤├─Ext─┤
  2hrs  10hrs  2hrs
  Total: 14 hours light

Lighting Requirements:
- PPFD: 50-150 μmol/m²/s (lower than main photoperiod)
- Spectrum: Red-enriched effective
- Control: Timer-based, programmable

NIGHT INTERRUPTION (for long-day effect)

Protocol:
├─ Day ─┤├─ Night part 1 ─┤├Flash┤├─ Night part 2 ─┤

Typical Schedule:
6am-6pm: Main lighting (12 hrs)
6pm-11pm: Dark (5 hrs)
11pm-12am: Night interruption (1 hr, 10-50 μmol/m²/s)
12am-6am: Dark (6 hrs)

Effect: Prevents SDP flowering, promotes LDP flowering

Advantages vs. Day Extension:
✓ Less total energy (1 hr vs. 4 hrs extension)
✓ Lower labor cost
✓ Can use lower intensity

Disadvantages:
✗ Requires middle-of-night operation
✗ More complex programming

CYCLIC LIGHTING

Energy-saving variation of night interruption

Protocol:
Night interruption period: 11pm-1am (2 hours)
Lighting cycle: 6 min ON, 24 min OFF (repeat)

Example:
11:00-11:06: Lights ON
11:06-11:30: Lights OFF
11:30-11:36: Lights ON
11:36-12:00: Lights OFF
[Repeat until 1am]

Energy savings: 80% vs. continuous night interruption
Effectiveness: Equal for many species

Requirements:
- Programmable controller
- Reliable timer precision
```

## 3. Species-Specific Photoperiod Requirements

```
Crop-Specific Photoperiod Strategies
=====================================

LEAFY GREENS
┌────────────────────────────────────┐
│ Lettuce (most varieties)           │
│ Type: Long-day (bolting)           │
│ Vegetative: 12-16 hours            │
│ Bolting trigger: >14-16 hours      │
│ Recommendation: 14-16 hrs if       │
│                 bolt-resistant     │
│                 12-14 hrs if       │
│                 bolt-prone         │
│                                    │
│ Spinach                            │
│ Type: Long-day (bolting)           │
│ Vegetative: 10-14 hours            │
│ Bolting trigger: >13 hours         │
│ Recommendation: 12 hours           │
│                                    │
│ Kale                               │
│ Type: Day-neutral (mostly)         │
│ Production: 14-18 hours            │
│ Note: Longer days = faster growth  │
└────────────────────────────────────┘

HERBS
┌────────────────────────────────────┐
│ Basil                              │
│ Type: Day-neutral to short-day     │
│ Vegetative: 14-18 hours optimal    │
│ Flowering: <12 hours triggers      │
│ Strategy: Maintain >14 hrs         │
│                                    │
│ Cilantro                           │
│ Type: Long-day (bolting)           │
│ Vegetative: 10-12 hours            │
│ Bolting trigger: >14 hours         │
│ Strategy: Short days (10-12 hrs)   │
│           Cool temps (15-20°C)     │
│                                    │
│ Dill                               │
│ Type: Long-day                     │
│ Vegetative: 10-12 hours            │
│ Flowering: >12 hours               │
│ Strategy: 10-12 hrs for leaves     │
│           16+ hrs for seeds        │
└────────────────────────────────────┘

FRUITING CROPS
┌────────────────────────────────────┐
│ Tomato                             │
│ Type: Day-neutral                  │
│ Production: 14-18 hours            │
│ Note: >16 hrs may reduce fruit     │
│       quality in some varieties    │
│ Recommendation: 16 hours           │
│                                    │
│ Cucumber                           │
│ Type: Day-neutral                  │
│ Production: 14-16 hours            │
│ Note: Photoperiod affects          │
│       sex expression               │
│ Long days: More male flowers       │
│ Short days: More female flowers    │
│                                    │
│ Pepper                             │
│ Type: Day-neutral                  │
│ Production: 14-18 hours            │
│ Note: Longer photoperiod =         │
│       more vegetative growth       │
└────────────────────────────────────┘

CANNABIS
┌────────────────────────────────────┐
│ Type: Short-day (qualitative)      │
│                                    │
│ VEGETATIVE PHASE:                  │
│ Photoperiod: 18-24 hours           │
│ - 18/6 most common                 │
│ - 20/4 faster growth               │
│ - 24/0 maximum growth (debated)    │
│ Duration: 4-8 weeks                │
│                                    │
│ FLOWERING PHASE:                   │
│ Photoperiod: 12/12 (strictly)      │
│ Critical: <13 hrs to maintain      │
│           flowering                │
│ Duration: 7-10 weeks               │
│ Dark period: Absolute darkness     │
│                                    │
│ AUTO-FLOWERING VARIETIES:          │
│ Type: Day-neutral (age-dependent)  │
│ Photoperiod: 18-20 hours constant  │
│ Flowers: 3-4 weeks from seed       │
│          regardless of photoperiod │
└────────────────────────────────────┘
```

## 4. Production Scheduling

```
Using Photoperiod for Crop Timing
==================================

SCENARIO 1: Continuous Lettuce Production
Objective: Harvest-ready lettuce every week

Facility: 4 zones
Cycle: 28 days seed-to-harvest
Harvest: Weekly

Photoperiod Strategy:
All zones: 14 hours (bolt prevention)

Schedule:
┌────────────────────────────────────┐
│ Week  Zone1  Zone2  Zone3  Zone4  │
│ ────  ─────  ─────  ─────  ─────  │
│  1    Seed   Week3  Week2  Week1  │
│  2    Week1  Week4  Week3  Week2  │
│  3    Week2  HRVST  Week4  Week3  │
│  4    Week3  Seed   HRVST  Week4  │
│  5    Week4  Week1  Seed   HRVST  │
│  [Cycle repeats]                   │
└────────────────────────────────────┘

All zones use identical 14-hour photoperiod
Timing controlled by planting schedule, not lighting

SCENARIO 2: Holiday Poinsettia Production
Objective: Flowering for Christmas sales

Plant Type: Short-day (critical 12.5 hours)
Flowering time: 8-10 weeks
Target: December 20 sales

Reverse Scheduling:
December 20: Sales date
↑ 10 weeks flowering
October 11: Start short days (10/14)
↑ 6 weeks vegetative
August 30: Start long days (16/8)
↑ 2 weeks rooting
August 16: Take cuttings

Photoperiod Program:
┌────────────────────────────────────┐
│ Stage      Weeks    Photoperiod    │
│ ─────      ─────    ───────────    │
│ Rooting    2        16/8 LD        │
│ Vegetative 6        16/8 LD        │
│ Flowering  10       10/14 SD       │
│ ─────────────────────────────────  │
│ Total: 18 weeks                    │
└────────────────────────────────────┘

Black Cloth Schedule (Flowering):
Natural Sept/Oct: 12-13 hrs
Extend dark period with blackout:

5:00 PM: Deploy black cloth
7:00 AM: Retract black cloth
Dark period: 14 hours (5pm-7am)

SCENARIO 3: Year-Round Strawberry
Objective: Continuous fruit production

Variety: Day-neutral
Strategy: Optimize DLI, not photoperiod

Production Photoperiod: 14-16 hours year-round

Summer (long natural days):
├───────── Natural 15 hrs ─────────┤
No supplemental needed (sufficient DLI)
Optional: Shade to prevent heat stress

Winter (short natural days):
├── Natural 9 hrs ──┤├─ Supplement 5-7 hrs ─┤
Achieve 14-16 hr total photoperiod
Maintain target DLI: 12-15 mol/m²/d

Monthly Production:
Flower initiation → 4-5 weeks → Harvest
Continuous flowering = continuous harvest
```

## 5. Common Photoperiod Issues

```
Troubleshooting Photoperiod Problems
====================================

PROBLEM 1: Unexpected Flowering/Bolting

Symptoms:
- Lettuce/spinach bolting prematurely
- Basil flowering early
- Reduced leaf quality

Causes & Solutions:
┌────────────────────────────────────┐
│ Cause: Photoperiod too long        │
│ Solution: Reduce to 12-14 hours    │
│                                    │
│ Cause: High temperature            │
│ Solution: Cool to 18-22°C          │
│           (interacts with PP)      │
│                                    │
│ Cause: Water stress                │
│ Solution: Maintain consistent      │
│           irrigation               │
│                                    │
│ Cause: Plant maturity              │
│ Solution: Harvest before bolting   │
│           age                      │
└────────────────────────────────────┘

PROBLEM 2: Cannabis Won't Flower

Symptoms:
- Vegetative growth continues
- No pistil development
- Elongated internodes

Causes & Solutions:
┌────────────────────────────────────┐
│ Cause: Light leaks during dark     │
│ Solution: Check all light sources  │
│           - Indicator LEDs         │
│           - Door gaps              │
│           - Adjacent rooms         │
│           Target: <1 μmol/m²/s     │
│                                    │
│ Cause: Photoperiod >13 hours       │
│ Solution: Verify timer accuracy    │
│           Ensure 12/12 or less     │
│                                    │
│ Cause: Auto-flower variety         │
│ Solution: Age-dependent flowering  │
│           Wait 3-4 weeks           │
└────────────────────────────────────┘

PROBLEM 3: Irregular Flowering in Ornamentals

Symptoms:
- Staggered bloom timing
- Poor flower quality
- Extended production time

Causes & Solutions:
┌────────────────────────────────────┐
│ Cause: Inconsistent photoperiod    │
│ Solution: Verify timer programming │
│           Check backup battery     │
│                                    │
│ Cause: Uneven light distribution   │
│ Solution: Map PPFD uniformity      │
│           Ensure >80% uniformity   │
│                                    │
│ Cause: Temperature variation       │
│ Solution: Photoperiod + temp       │
│           interact (control both)  │
└────────────────────────────────────┘

PROBLEM 4: Reduced Yields After Photoperiod Change

Symptoms:
- Lower fruit/flower production
- Slower growth rate

Analysis:
┌────────────────────────────────────┐
│ Check: Did DLI decrease?           │
│                                    │
│ Example:                           │
│ Before: 18 hrs × 300 μmol/m²/s     │
│         = 19.4 mol/m²/d            │
│                                    │
│ After:  12 hrs × 300 μmol/m²/s     │
│         = 13.0 mol/m²/d ✗          │
│                                    │
│ Solution: Increase PPFD to         │
│          maintain DLI              │
│                                    │
│ Required: 19.4 mol/m²/d ÷ 12 hrs   │
│         = 448 μmol/m²/s needed     │
└────────────────────────────────────┘
```

## Summary

Photoperiod control is a powerful tool for regulating plant development, flowering timing, and preventing unwanted bolting. Understanding short-day, long-day, and day-neutral responses enables precise crop scheduling and year-round production.

**Key Takeaways**:

1. Short-day plants flower with long nights (<12-14 hrs light)
2. Long-day plants flower with short nights (>12-16 hrs light)
3. Day-neutral plants flower independent of photoperiod
4. Critical day length is the photoperiod threshold for responses
5. Night interruption can substitute for day extension with less energy
6. Light leaks can disrupt short-day plant flowering
7. Photoperiod interacts with temperature and plant age
8. DLI must be maintained when changing photoperiod

**Practical Applications**:
- Cannabis: 18/6 veg, 12/12 flower, zero light leaks
- Lettuce: 12-14 hrs to prevent bolting
- Ornamentals: Black cloth for short days, extension for long days
- Day-neutral crops: Optimize DLI regardless of photoperiod
- Production scheduling: Use photoperiod for precise timing

## Check Your Understanding

1. Classify these crops: Cannabis, Tomato, Lettuce, Chrysanthemum
2. Why is "short-day plant" a misnomer?
3. Design photoperiod for lettuce to prevent bolting while achieving 15 mol/m²/d DLI
4. How does night interruption work to prevent SDP flowering?
5. Why are light leaks critical in cannabis flowering rooms?

**Answers**:
1. Cannabis: SDP, Tomato: DNP, Lettuce: LDP (bolting), Chrysanthemum: SDP
2. SDPs actually measure night length (long nights), not day length. They should be called "long-night plants."
3. Use 14-hour photoperiod (below bolting trigger). Required PPFD: (15 × 1000) / (14 × 3.6) = 298 μmol/m²/s
4. A brief light period in the middle of the dark period converts Pr to Pfr, preventing the Pfr level from dropping below the threshold needed for flowering.
5. Cannabis is an obligate SDP requiring >12 hours uninterrupted darkness. Even small light leaks (>1 μmol/m²/s) can prevent flowering or cause hermaphroditism.

## Next Module Preview

In Module 9: Supplemental Lighting, you'll learn to integrate LEDs with natural light in greenhouses, calculate supplemental requirements, design hybrid lighting systems, implement photoperiod extension, and optimize supplemental strategies for energy efficiency.

---

**Estimated Time**: 60 minutes
**Difficulty**: Intermediate
**Prerequisites**: Modules 1-7
