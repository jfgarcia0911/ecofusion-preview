# Light Recipe Guide

**Course:** 205 - LED Lighting Science

## Light Recipe Framework

```
LIGHT RECIPE COMPONENTS
═══════════════════════════════════════════════════════════

A complete light recipe specifies:

1. INTENSITY (DLI)
   - Daily light integral target
   - Matches crop requirements
   - Adjusted for environment

2. PHOTOPERIOD (Duration)
   - Hours of light per day
   - Photoperiodic response consideration
   - Energy optimization

3. SPECTRUM (Quality)
   - Wavelength distribution
   - Light ratios (R:B, R:FR)
   - Growth stage specific

4. TIMING (Schedule)
   - On/off times
   - Sunrise/sunset simulation
   - Dynamic spectrum shifts (optional)

Example Light Recipe - Lettuce Production:
- DLI: 16 mol/m²/d
- Photoperiod: 16 hours (6am-10pm)
- Spectrum: 22B:33G:42R:3FR
- Special: None (constant spectrum)
```

## Light Recipes by Crop Type

### Leafy Greens

```
BUTTERHEAD LETTUCE
═══════════════════════════════════════════════════════════

SEEDLING (Days 0-7)
──────────────────────────────────────────────────────────
DLI:              8-10 mol/m²/d
PPFD:             174-217 μmol/m²/s
Photoperiod:      14 hours
Spectrum:         25B:30G:42R:3FR
R:B Ratio:        1.7
R:FR Ratio:       14.0
Goal:             Prevent stretching, healthy cotyledons

VEGETATIVE (Days 7-21)
──────────────────────────────────────────────────────────
DLI:              12-14 mol/m²/d
PPFD:             208-243 μmol/m²/s
Photoperiod:      16 hours
Spectrum:         22B:33G:42R:3FR
R:B Ratio:        1.9
R:FR Ratio:       14.0
Goal:             Compact heads, tender leaves

MATURATION (Days 21-35)
──────────────────────────────────────────────────────────
DLI:              13-15 mol/m²/d
PPFD:             226-260 μmol/m²/s
Photoperiod:      16 hours
Spectrum:         20B:35G:42R:3FR
R:B Ratio:        2.1
R:FR Ratio:       14.0
Goal:             Final sizing, prevent bolting


ROMAINE LETTUCE
═══════════════════════════════════════════════════════════

VEGETATIVE (Days 7-28)
──────────────────────────────────────────────────────────
DLI:              14-17 mol/m²/d
PPFD:             243-295 μmol/m²/s
Photoperiod:      16 hours
Spectrum:         23B:32G:42R:3FR
R:B Ratio:        1.8
R:FR Ratio:       14.0
Goal:             Upright growth, dark green color

MATURATION (Days 28-42)
──────────────────────────────────────────────────────────
DLI:              15-17 mol/m²/d
PPFD:             260-295 μmol/m²/s
Photoperiod:      16 hours
Spectrum:         21B:34G:42R:3FR
R:B Ratio:        2.0
R:FR Ratio:       14.0
Special:          Monitor for bolting (reduce to 14hr if needed)
Goal:             Full head development
```

### Herbs

```
BASIL (Sweet/Genovese)
═══════════════════════════════════════════════════════════

SEEDLING (Days 0-10)
──────────────────────────────────────────────────────────
DLI:              10-12 mol/m²/d
PPFD:             174-208 μmol/m²/s
Photoperiod:      16 hours
Spectrum:         26B:28G:43R:3FR
R:B Ratio:        1.7
R:FR Ratio:       14.3
Goal:             Strong seedlings, prevent stretch

VEGETATIVE GROWTH (Days 10-25)
──────────────────────────────────────────────────────────
DLI:              16-18 mol/m²/d
PPFD:             278-313 μmol/m²/s
Photoperiod:      16 hours
Spectrum:         22B:30G:45R:3FR
R:B Ratio:        2.0
R:FR Ratio:       15.0
Goal:             Bushy growth, leaf production

PRE-HARVEST (Days 25-35)
──────────────────────────────────────────────────────────
DLI:              18-20 mol/m²/d
PPFD:             313-347 μmol/m²/s
Photoperiod:      16 hours
Spectrum:         20B:28G:48R:4FR (optional 1% UV-A)
R:B Ratio:        2.4
R:FR Ratio:       12.0
Special:          UV-A for aroma enhancement
Goal:             Maximize flavor compounds, essential oils
```

### Fruiting Crops - Tomato

```
TOMATO (Indeterminate Varieties)
═══════════════════════════════════════════════════════════

GERMINATION & SEEDLING (Weeks 0-2)
──────────────────────────────────────────────────────────
DLI:              10-12 mol/m²/d
PPFD:             238-286 μmol/m²/s
Photoperiod:      14 hours
Spectrum:         28B:27G:42R:3FR
R:B Ratio:        1.5
R:FR Ratio:       14.0
Goal:             Stocky seedlings, strong stems

TRANSPLANT & EARLY VEGETATIVE (Weeks 2-4)
──────────────────────────────────────────────────────────
DLI:              15-18 mol/m²/d
PPFD:             298-357 μmol/m²/s
Photoperiod:      14 hours
Spectrum:         23B:28G:46R:3FR
R:B Ratio:        2.0
R:FR Ratio:       15.3
Goal:             Canopy establishment, root development

LATE VEGETATIVE (Weeks 4-6)
──────────────────────────────────────────────────────────
DLI:              20-23 mol/m²/d
PPFD:             397-456 μmol/m²/s
Photoperiod:      14 hours
Spectrum:         20B:28G:49R:3FR
R:B Ratio:        2.5
R:FR Ratio:       16.3
Goal:             Pre-flowering vigor

FLOWERING & EARLY FRUITING (Weeks 6-10)
──────────────────────────────────────────────────────────
DLI:              25-28 mol/m²/d
PPFD:             496-556 μmol/m²/s
Photoperiod:      14 hours
Spectrum:         17B:26G:52R:5FR
R:B Ratio:        3.1
R:FR Ratio:       10.4
Special:          Consider CO₂ enrichment (800-1000ppm)
Goal:             Fruit set, early development

PEAK PRODUCTION (Weeks 10+)
──────────────────────────────────────────────────────────
DLI:              28-35 mol/m²/d
PPFD:             556-695 μmol/m²/s
Photoperiod:      14 hours
Spectrum:         15B:25G:54R:6FR
R:B Ratio:        3.6
R:FR Ratio:       9.0
Special:          CO₂ 1000-1200ppm recommended
                  Monitor leaf temperature
Goal:             Maximum yield, continuous production
```

### Fruiting Crops - Cucumber

```
CUCUMBER
═══════════════════════════════════════════════════════════

SEEDLING (Week 0-1)
──────────────────────────────────────────────────────────
DLI:              12-15 mol/m²/d
PPFD:             286-357 μmol/m²/s
Photoperiod:      14 hours
Spectrum:         25B:28G:44R:3FR
R:B Ratio:        1.8
R:FR Ratio:       14.7
Goal:             Strong transplants

VEGETATIVE (Weeks 1-3)
──────────────────────────────────────────────────────────
DLI:              18-22 mol/m²/d
PPFD:             357-437 μmol/m²/s
Photoperiod:      14 hours
Spectrum:         21B:27G:48R:4FR
R:B Ratio:        2.3
R:FR Ratio:       12.0
Goal:             Vine development, leaf area

FLOWERING & FRUITING (Weeks 3+)
──────────────────────────────────────────────────────────
DLI:              25-30 mol/m²/d
PPFD:             496-595 μmol/m²/s
Photoperiod:      14 hours
Spectrum:         18B:25G:51R:6FR
R:B Ratio:        2.8
R:FR Ratio:       8.5
Special:          CO₂ 800-1000ppm beneficial
Goal:             Continuous fruit production
```

### Cannabis

```
CANNABIS
═══════════════════════════════════════════════════════════

CLONE/SEEDLING (Weeks 0-2)
──────────────────────────────────────────────────────────
DLI:              12-15 mol/m²/d
PPFD:             185-231 μmol/m²/s
Photoperiod:      18 hours
Spectrum:         28B:27G:42R:3FR
R:B Ratio:        1.5
R:FR Ratio:       14.0
Goal:             Root development, prevent stretch

EARLY VEGETATIVE (Weeks 2-4)
──────────────────────────────────────────────────────────
DLI:              20-25 mol/m²/d
PPFD:             309-386 μmol/m²/s
Photoperiod:      18 hours
Spectrum:         25B:28G:44R:3FR
R:B Ratio:        1.8
R:FR Ratio:       14.7
Goal:             Compact nodes, branching

LATE VEGETATIVE (Weeks 4-6)
──────────────────────────────────────────────────────────
DLI:              28-35 mol/m²/d
PPFD:             432-540 μmol/m²/s
Photoperiod:      18 hours
Spectrum:         22B:28G:47R:3FR
R:B Ratio:        2.1
R:FR Ratio:       15.7
Special:          Consider CO₂ 800-1000ppm
Goal:             Canopy fill, structural development

TRANSITION TO FLOWER (Week 1 of 12/12)
──────────────────────────────────────────────────────────
DLI:              25-30 mol/m²/d
PPFD:             579-694 μmol/m²/s
Photoperiod:      12 hours (REQUIRED for flowering)
Spectrum:         20B:26G:49R:5FR
R:B Ratio:        2.5
R:FR Ratio:       9.8
Special:          Switch to 12/12 light cycle
                  Expect stretch period
Goal:             Flowering initiation

EARLY FLOWER (Weeks 2-4 of 12/12)
──────────────────────────────────────────────────────────
DLI:              35-40 mol/m²/d
PPFD:             810-926 μmol/m²/s
Photoperiod:      12 hours
Spectrum:         17B:24G:52R:7FR (1% UV-A)
R:B Ratio:        3.1
R:FR Ratio:       7.4
Special:          CO₂ 1000-1200ppm strongly recommended
                  UV-A for terpene initiation
Goal:             Flower site development

PEAK FLOWER (Weeks 4-7 of 12/12)
──────────────────────────────────────────────────────────
DLI:              40-50 mol/m²/d
PPFD:             926-1157 μmol/m²/s
Photoperiod:      12 hours
Spectrum:         15B:23G:54R:8FR (2% UV-A, 0.5% UV-B)
R:B Ratio:        3.6
R:FR Ratio:       6.8
Special:          CO₂ 1200ppm
                  UV-B for cannabinoid/terpene boost
                  Monitor heat stress
Goal:             Maximum cannabinoid/terpene production

LATE FLOWER/RIPENING (Weeks 7-9+ of 12/12)
──────────────────────────────────────────────────────────
DLI:              35-45 mol/m²/d
PPFD:             810-1041 μmol/m²/s
Photoperiod:      12 hours
Spectrum:         14B:22G:55R:9FR (2.5% UV-A, 0.7% UV-B)
R:B Ratio:        3.9
R:FR Ratio:       6.1
Special:          Reduce DLI last 3-5 days if desired
                  UV stress for quality
Goal:             Final maturation, trichome development
```

### Microgreens

```
MICROGREENS - GENERAL PROTOCOL
═══════════════════════════════════════════════════════════

BLACKOUT PHASE (Days 0-3)
──────────────────────────────────────────────────────────
DLI:              0 mol/m²/d (complete darkness)
PPFD:             0 μmol/m²/s
Photoperiod:      0 hours
Goal:             Germination, initial stretch for stem length

GREENING PHASE (Days 3-7)
──────────────────────────────────────────────────────────
DLI:              8-12 mol/m²/d
PPFD:             139-208 μmol/m²/s
Photoperiod:      16 hours
Spectrum:         30B:25G:42R:3FR
R:B Ratio:        1.4
R:FR Ratio:       14.0
Goal:             Chlorophyll development, prevent stretching

HARVEST PHASE (Days 7-14)
──────────────────────────────────────────────────────────
DLI:              12-16 mol/m²/d
PPFD:             208-278 μmol/m²/s
Photoperiod:      16 hours
Spectrum:         28B:27G:42R:3FR (optional 1% UV-A last 2 days)
R:B Ratio:        1.5
R:FR Ratio:       14.0
Special:          UV-A pulse for color/flavor enhancement
Goal:             Nutrient density, color, flavor


RADISH MICROGREENS (High-Color Variety)
═══════════════════════════════════════════════════════════

GREENING PHASE (Days 3-7)
──────────────────────────────────────────────────────────
DLI:              14-16 mol/m²/d
PPFD:             243-278 μmol/m²/s
Photoperiod:      16 hours
Spectrum:         32B:25G:40R:3FR (2% UV-A)
R:B Ratio:        1.25
R:FR Ratio:       13.3
Special:          Higher blue for anthocyanin production
Goal:             Deep purple/red color development
```

## Spectrum Ratios Quick Reference

```
TARGET LIGHT RATIOS BY GOAL
═══════════════════════════════════════════════════════════

COMPACT, STOCKY GROWTH
R:B Ratio:        1.2-1.8
Blue Content:     25-35%
Application:      Seedlings, transplants, microgreens

BALANCED GROWTH
R:B Ratio:        2.0-3.0
Blue Content:     18-25%
Application:      General vegetative production

ELONGATED GROWTH / FLOWERING
R:B Ratio:        3.5-6.0
Blue Content:     12-18%
Application:      Fruiting crops, flowering stage

PREVENT SHADE AVOIDANCE
R:FR Ratio:       >8.0
Far-Red Content:  <5%
Application:      Dense canopy crops, compact plants

CONTROLLED ELONGATION
R:FR Ratio:       4.0-8.0
Far-Red Content:  5-10%
Application:      Balanced morphology

PROMOTE FLOWERING / STEM ELONGATION
R:FR Ratio:       <4.0
Far-Red Content:  >10%
Application:      Cut flowers, flowering induction
```

## Dynamic Light Recipes (Advanced)

```
SUNRISE/SUNSET SIMULATION
═══════════════════════════════════════════════════════════

Example: 16-Hour Photoperiod (6:00 AM - 10:00 PM)

TIME        PPFD           SPECTRUM              PURPOSE
────────    ──────────     ──────────────────    ─────────────
6:00 AM     100 μmol/m²/s  30B:30G:35R:5FR      Sunrise (high B)
7:00        200            27B:30G:38R:5FR      Morning ramp
8:00        300            23B:31G:42R:4FR      Peak begins
9:00-5:00   350            20B:32G:44R:4FR      Midday plateau
6:00 PM     300            18B:30G:46R:6FR      Evening shift
7:00        200            17B:28G:48R:7FR      Sunset (high R)
8:00        100            15B:25G:50R:10FR     Dusk (FR boost)
9:00        50 (FR only)   0B:0G:0R:100FR       EOD-FR treatment
9:30-6:00   0              Dark period          Night

Benefits:
- Mimics natural progression
- Optimizes circadian rhythm
- May improve yield 5-15%
- Enhances plant quality


SPECTRAL PULSE TREATMENTS
═══════════════════════════════════════════════════════════

BASE RECIPE (All Day):
DLI: 18 mol/m²/d
Spectrum: 20B:30G:45R:5FR

PLUS TARGETED PULSES:

Morning Blue Boost (7:00-8:00 AM):
- Add 100 μmol/m²/s blue (450nm)
- Enhances stomatal opening
- Boosts morning photosynthesis

Midday UV Pulse (12:00-12:30 PM):
- Add 10 μmol/m²/s UV-A (or 2 μmol/m²/s UV-B)
- Triggers stress response
- Enhances flavonoids, anthocyanins

End-of-Day Far-Red (30 min after lights off):
- 15-30 min of 730nm far-red
- Accelerates flowering
- Improves stem elongation if needed
```

## Special Applications

```
CUT FLOWERS - STEM ELONGATION
═══════════════════════════════════════════════════════════

VEGETATIVE PHASE
DLI:              18-22 mol/m²/d
Spectrum:         15B:28G:48R:9FR
R:B Ratio:        3.2
R:FR Ratio:       5.3 (low R:FR for elongation)
Special:          EOD-FR treatment (20 min @ 730nm)
Goal:             Long, straight stems


ORNAMENTAL FOLIAGE - COMPACT HABIT
═══════════════════════════════════════════════════════════

PRODUCTION PHASE
DLI:              12-16 mol/m²/d
Spectrum:         32B:28G:37R:3FR (optional 1% UV-A)
R:B Ratio:        1.16 (very low for compactness)
R:FR Ratio:       12.3
Special:          High blue prevents stretch
Goal:             Dense, compact plants


STRAWBERRY - RUNNER SUPPRESSION
═══════════════════════════════════════════════════════════

VEGETATIVE PHASE
DLI:              15-18 mol/m²/d
Spectrum:         28B:27G:42R:3FR
R:B Ratio:        1.5 (high blue suppresses runners)
Photoperiod:      16 hours (long day)
Goal:             Minimize vegetative propagation

FLOWERING & FRUITING
DLI:              20-25 mol/m²/d
Spectrum:         20B:26G:49R:5FR
R:B Ratio:        2.5
Photoperiod:      14 hours
Special:          Reduce photoperiod to trigger flowering
Goal:             Fruit production
```

## Recipe Adjustment Guidelines

```
WHEN TO ADJUST YOUR LIGHT RECIPE
═══════════════════════════════════════════════════════════

PROBLEM              OBSERVATION           ADJUSTMENT
───────────────────  ──────────────────    ─────────────────
Excessive stretch    Long internodes       • Reduce R:B ratio
                     Thin stems            • Increase blue 5-10%
                                          • Increase DLI 20%

Stunted growth       Very short plants     • Increase R:B ratio
                     Dark green            • Reduce blue 5-10%
                                          • Add far-red 2-3%

Slow growth          Small leaves          • Increase DLI 20-30%
                     Light green           • Check spectrum peaks

Leaf burn            Bleaching             • Reduce DLI 20%
                     Crispy edges          • Check temperature
                                          • Verify environment

Poor flowering       Few flowers           • Increase R:B ratio
                     Slow development      • Add far-red
                                          • Verify photoperiod

Bolting (lettuce)    Premature flowering   • Reduce photoperiod
                     Elongation            • Reduce temperature
                                          • Check variety

Pale color           Lacking anthocyanins  • Add UV-A (1-2%)
                                          • Increase blue
                                          • Reduce temperature

Weak flavor          Low aromatics         • Add UV-A last week
                                          • Mild stress
                                          • Check nutrients
```

## Environmental Integration

```
LIGHT RECIPE + ENVIRONMENT
═══════════════════════════════════════════════════════════

Standard Conditions:
Temperature: 22-24°C
CO₂: 400-450 ppm
RH: 60-70%
VPD: 0.8-1.2 kPa

TEMPERATURE ADJUSTMENTS
─────────────────────────────────────────────────────────
Cool (<20°C):        Reduce DLI by 15-20%
                     Metabolism slows, less light needed

Warm (26-28°C):      Increase DLI by 10-15%
                     Higher metabolism, can use more light

Hot (>30°C):         Reduce DLI by 20-30%
                     Stress reduction, prevent damage


CO₂ ADJUSTMENTS
─────────────────────────────────────────────────────────
800-1000 ppm CO₂:    Increase DLI by 20-30%
                     Higher photosynthetic capacity

1000-1200 ppm CO₂:   Increase DLI by 30-50%
                     Maximum light saturation increased


VPD ADJUSTMENTS
─────────────────────────────────────────────────────────
Low VPD (<0.6 kPa):  Reduce DLI by 10%
                     Limited transpiration

High VPD (>1.5 kPa): Reduce DLI by 10-20%
                     Water stress risk
```

---

**Pro Tips for Light Recipes:**
- Start conservative (lower DLI) and increase gradually
- Document recipes and plant responses for optimization
- Use consistent spectrum within growth stage for 3-5 days minimum
- Monitor plant morphology daily - adjust if needed
- Environmental conditions affect optimal light recipe
- UV should always be ramped up slowly (start at 25% target)
- Spectrum matters more at low light; less critical at high DLI
- When changing recipes, transition gradually over 2-3 days
