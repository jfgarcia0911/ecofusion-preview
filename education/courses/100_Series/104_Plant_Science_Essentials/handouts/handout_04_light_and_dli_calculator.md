# HANDOUT: Light & DLI Calculator Reference
## Course 104: Plant Science Essentials

---

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                                                                              ║
║              💡 LIGHT & DAILY LIGHT INTEGRAL (DLI) GUIDE 🌱                 ║
║                                                                              ║
║            Understanding the "Food" Your Plants Need from Light             ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

---

## Understanding Light Measurements

```
    ╔═══════════════════════════════════════════════════════════════════════════╗
    ║                                                                           ║
    ║                    LIGHT MEASUREMENT BASICS                               ║
    ║                                                                           ║
    ║   ┌─────────────────────────────────────────────────────────────────┐    ║
    ║   │                                                                 │    ║
    ║   │   PPFD (Photosynthetic Photon Flux Density)                    │    ║
    ║   │   ═══════════════════════════════════════════                   │    ║
    ║   │                                                                 │    ║
    ║   │   • Measures INSTANTANEOUS light intensity                     │    ║
    ║   │   • Units: μmol/m²/s (micromoles per square meter per second)  │    ║
    ║   │   • Think of it as "water flow rate" from a hose               │    ║
    ║   │                                                                 │    ║
    ║   │         ~~~~                                                    │    ║
    ║   │        ( 💡 )  →→→  PPFD = 400 μmol/m²/s                       │    ║
    ║   │         ~~~~        (light hitting surface RIGHT NOW)          │    ║
    ║   │                                                                 │    ║
    ║   │                                                                 │    ║
    ║   │   DLI (Daily Light Integral)                                   │    ║
    ║   │   ═══════════════════════════                                   │    ║
    ║   │                                                                 │    ║
    ║   │   • Measures TOTAL light received in 24 hours                  │    ║
    ║   │   • Units: mol/m²/day (moles per square meter per day)         │    ║
    ║   │   • Think of it as "total water in the bucket"                 │    ║
    ║   │                                                                 │    ║
    ║   │         ☀️ ☀️ ☀️                                                │    ║
    ║   │         ↓ ↓ ↓     DLI = 17 mol/m²/day                          │    ║
    ║   │        [BUCKET]   (total light over 24 hours)                  │    ║
    ║   │                                                                 │    ║
    ║   └─────────────────────────────────────────────────────────────────┘    ║
    ║                                                                           ║
    ╚═══════════════════════════════════════════════════════════════════════════╝
```

---

## The DLI Formula

```
    ┌─────────────────────────────────────────────────────────────────────────────┐
    │                                                                             │
    │                         DLI CALCULATION                                    │
    │                                                                             │
    │   ╔═══════════════════════════════════════════════════════════════════╗   │
    │   ║                                                                   ║   │
    │   ║                  PPFD × Hours × 0.0036 = DLI                     ║   │
    │   ║                                                                   ║   │
    │   ╚═══════════════════════════════════════════════════════════════════╝   │
    │                                                                             │
    │   WHERE:                                                                   │
    │   • PPFD = Light intensity (μmol/m²/s)                                    │
    │   • Hours = Photoperiod (hours of light per day)                          │
    │   • 0.0036 = Conversion factor (seconds to hours, μmol to mol)            │
    │   • DLI = Daily Light Integral (mol/m²/day)                               │
    │                                                                             │
    │   ─────────────────────────────────────────────────────────────────────    │
    │                                                                             │
    │   EXAMPLE CALCULATIONS:                                                    │
    │                                                                             │
    │   Example 1: Growing lettuce                                               │
    │   ┌────────────────────────────────────────────────────────────────────┐  │
    │   │ PPFD = 250 μmol/m²/s                                               │  │
    │   │ Photoperiod = 16 hours                                             │  │
    │   │                                                                    │  │
    │   │ DLI = 250 × 16 × 0.0036 = 14.4 mol/m²/day  ✓                      │  │
    │   └────────────────────────────────────────────────────────────────────┘  │
    │                                                                             │
    │   Example 2: Growing tomatoes                                              │
    │   ┌────────────────────────────────────────────────────────────────────┐  │
    │   │ PPFD = 500 μmol/m²/s                                               │  │
    │   │ Photoperiod = 14 hours                                             │  │
    │   │                                                                    │  │
    │   │ DLI = 500 × 14 × 0.0036 = 25.2 mol/m²/day  ✓                      │  │
    │   └────────────────────────────────────────────────────────────────────┘  │
    │                                                                             │
    └─────────────────────────────────────────────────────────────────────────────┘
```

---

## Reverse Calculation: Finding Required PPFD

```
    ┌─────────────────────────────────────────────────────────────────────────────┐
    │                                                                             │
    │                    FINDING REQUIRED PPFD                                   │
    │                                                                             │
    │   "I know what DLI I need - how much PPFD do I require?"                  │
    │                                                                             │
    │   ╔═══════════════════════════════════════════════════════════════════╗   │
    │   ║                                                                   ║   │
    │   ║               PPFD = DLI ÷ (Hours × 0.0036)                      ║   │
    │   ║                                                                   ║   │
    │   ╚═══════════════════════════════════════════════════════════════════╝   │
    │                                                                             │
    │   EXAMPLE: I want DLI of 17 with 18-hour photoperiod                      │
    │                                                                             │
    │   ┌────────────────────────────────────────────────────────────────────┐  │
    │   │ PPFD = 17 ÷ (18 × 0.0036)                                          │  │
    │   │ PPFD = 17 ÷ 0.0648                                                 │  │
    │   │ PPFD = 262 μmol/m²/s  ← Required light intensity                  │  │
    │   └────────────────────────────────────────────────────────────────────┘  │
    │                                                                             │
    │   ─────────────────────────────────────────────────────────────────────    │
    │                                                                             │
    │   QUICK REFERENCE TABLE: PPFD needed for common DLI targets               │
    │                                                                             │
    │   ┌──────────────┬──────────────┬──────────────┬──────────────┐           │
    │   │   Target     │  12-hour     │  16-hour     │  18-hour     │           │
    │   │   DLI        │  photoperiod │  photoperiod │  photoperiod │           │
    │   ├──────────────┼──────────────┼──────────────┼──────────────┤           │
    │   │   10 mol     │   231 PPFD   │   174 PPFD   │   154 PPFD   │           │
    │   │   15 mol     │   347 PPFD   │   260 PPFD   │   231 PPFD   │           │
    │   │   20 mol     │   463 PPFD   │   347 PPFD   │   309 PPFD   │           │
    │   │   25 mol     │   579 PPFD   │   434 PPFD   │   386 PPFD   │           │
    │   │   30 mol     │   694 PPFD   │   521 PPFD   │   463 PPFD   │           │
    │   └──────────────┴──────────────┴──────────────┴──────────────┘           │
    │                                                                             │
    └─────────────────────────────────────────────────────────────────────────────┘
```

---

## DLI Requirements by Crop

```
    ╔═══════════════════════════════════════════════════════════════════════════╗
    ║                                                                           ║
    ║                    CROP DLI REQUIREMENTS GUIDE                            ║
    ║                                                                           ║
    ╠═══════════════════════════════════════════════════════════════════════════╣
    ║                                                                           ║
    ║   LOW LIGHT CROPS (6-12 mol/m²/day)                                      ║
    ║   ═══════════════════════════════════                                     ║
    ║                                                                           ║
    ║   ┌─────────────────────────────────────────────────────────────────┐    ║
    ║   │  🥬 Lettuce           │  10-12 mol  │  Minimum: 6 mol          │    ║
    ║   │  🌿 Spinach           │  10-12 mol  │  Bolts at high DLI       │    ║
    ║   │  🥗 Microgreens       │   6-10 mol  │  Short growth period     │    ║
    ║   │  🌱 Herbs (basil)     │  12-14 mol  │  Higher = more compact   │    ║
    ║   │  🥬 Arugula           │   8-12 mol  │  Becomes spicy at high   │    ║
    ║   └─────────────────────────────────────────────────────────────────┘    ║
    ║                                                                           ║
    ║   MODERATE LIGHT CROPS (12-20 mol/m²/day)                                ║
    ║   ═══════════════════════════════════════                                 ║
    ║                                                                           ║
    ║   ┌─────────────────────────────────────────────────────────────────┐    ║
    ║   │  🥒 Cucumber          │  15-20 mol  │  Higher for fruiting     │    ║
    ║   │  🫑 Peppers (sweet)   │  15-20 mol  │  Seedling: 12-15 mol     │    ║
    ║   │  🍓 Strawberry        │  12-18 mol  │  Higher = more fruit     │    ║
    ║   │  🌸 Ornamentals       │  10-15 mol  │  Varies by species       │    ║
    ║   │  🥦 Brassicas         │  15-18 mol  │  Cool + high light       │    ║
    ║   └─────────────────────────────────────────────────────────────────┘    ║
    ║                                                                           ║
    ║   HIGH LIGHT CROPS (20-40+ mol/m²/day)                                   ║
    ║   ═══════════════════════════════════════                                 ║
    ║                                                                           ║
    ║   ┌─────────────────────────────────────────────────────────────────┐    ║
    ║   │  🍅 Tomato            │  22-30 mol  │  More light = more fruit │    ║
    ║   │  🌶️ Peppers (hot)     │  20-25 mol  │  High DLI = more heat    │    ║
    ║   │  🍆 Eggplant          │  20-25 mol  │  Loves intense light     │    ║
    ║   │  🌻 Cannabis*         │  30-40 mol  │  Flower: 40-50 mol       │    ║
    ║   │  🌹 Cut flowers       │  15-30 mol  │  Species dependent       │    ║
    ║   └─────────────────────────────────────────────────────────────────┘    ║
    ║                                                                           ║
    ║   *Where legally cultivated                                              ║
    ║                                                                           ║
    ╚═══════════════════════════════════════════════════════════════════════════╝
```

---

## Light Intensity Zones

```
    ┌─────────────────────────────────────────────────────────────────────────────┐
    │                                                                             │
    │                    PPFD INTENSITY REFERENCE                                │
    │                                                                             │
    │   ┌───────────────────────────────────────────────────────────────────┐   │
    │   │                                                                   │   │
    │   │   PPFD SCALE (μmol/m²/s)                                         │   │
    │   │                                                                   │   │
    │   │   0         200        400        600        800       1000+     │   │
    │   │   │──────────│──────────│──────────│──────────│──────────│       │   │
    │   │   ░░░░░░░░░░░▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓█████████████████████████      │   │
    │   │   │          │          │          │          │          │       │   │
    │   │   TOO LOW    SEEDLINGS  LEAFY      MODERATE   FRUITING   FULL    │   │
    │   │              CLONES     GREENS     CROPS      CROPS      SUN     │   │
    │   │                                                                   │   │
    │   │                                                                   │   │
    │   │   REFERENCE POINTS:                                              │   │
    │   │   ─────────────────                                               │   │
    │   │                                                                   │   │
    │   │   🏠 Indoor office light    =    10-50 μmol/m²/s                 │   │
    │   │   🪟 Bright window          =   100-300 μmol/m²/s                │   │
    │   │   ☁️ Overcast day           =   200-500 μmol/m²/s                │   │
    │   │   🌤️ Partly cloudy          =   500-1000 μmol/m²/s               │   │
    │   │   ☀️ Direct sunlight        = 1500-2000 μmol/m²/s                │   │
    │   │                                                                   │   │
    │   │                                                                   │   │
    │   │   LIGHT COMPENSATION POINT:                                      │   │
    │   │   ═════════════════════════                                       │   │
    │   │   ~50-100 μmol/m²/s = Where photosynthesis = respiration         │   │
    │   │   Below this, plant is consuming more than producing!            │   │
    │   │                                                                   │   │
    │   │   LIGHT SATURATION POINT:                                        │   │
    │   │   ═════════════════════════                                       │   │
    │   │   Varies by crop: 400-1200 μmol/m²/s                             │   │
    │   │   Beyond this, more light doesn't help (can even hurt!)          │   │
    │   │                                                                   │   │
    │   └───────────────────────────────────────────────────────────────────┘   │
    │                                                                             │
    └─────────────────────────────────────────────────────────────────────────────┘
```

---

## Seasonal DLI Changes (Outdoor Reference)

```
    ╔═══════════════════════════════════════════════════════════════════════════╗
    ║                                                                           ║
    ║            NATURAL DLI BY SEASON (40°N Latitude, Clear Day)              ║
    ║                                                                           ║
    ║   DLI (mol/m²/day)                                                       ║
    ║    │                                                                      ║
    ║ 60 ┤                      ╭────╮                                         ║
    ║    │                   ╭──╯    ╰──╮                                       ║
    ║ 50 ┤                 ╭─╯          ╰─╮                                     ║
    ║    │                ╱                ╲                                    ║
    ║ 40 ┤              ╭╯                  ╰╮                                  ║
    ║    │             ╱                      ╲                                 ║
    ║ 30 ┤           ╭╯                        ╰╮                               ║
    ║    │          ╱                            ╲                              ║
    ║ 20 ┤        ╭╯                              ╰╮         ← Tomato target   ║
    ║    │       ╱                                  ╲                           ║
    ║ 10 ┤    ──╯                                    ╰──     ← Lettuce target  ║
    ║    │                                                                      ║
    ║  0 ┼────┬────┬────┬────┬────┬────┬────┬────┬────┬────┬────┬────┬────    ║
    ║       Jan  Feb  Mar  Apr  May  Jun  Jul  Aug  Sep  Oct  Nov  Dec         ║
    ║                                                                           ║
    ║   KEY OBSERVATIONS:                                                       ║
    ║   ─────────────────                                                       ║
    ║   • Winter DLI (Dec-Feb): 10-20 mol/m²/day - supplemental light needed  ║
    ║   • Summer DLI (Jun-Aug): 50-60 mol/m²/day - may need shade cloth       ║
    ║   • Spring/Fall: Natural light often ideal for most crops               ║
    ║                                                                           ║
    ║   GREENHOUSE IMPACT:                                                      ║
    ║   ──────────────────                                                      ║
    ║   • Glass reduces DLI by ~30%                                            ║
    ║   • Poly film reduces DLI by ~20%                                        ║
    ║   • Dirty covers can reduce by additional 10-30%!                        ║
    ║                                                                           ║
    ╚═══════════════════════════════════════════════════════════════════════════╝
```

---

## Light Spectrum Reference

```
    ┌─────────────────────────────────────────────────────────────────────────────┐
    │                                                                             │
    │                      PAR SPECTRUM (400-700nm)                              │
    │                                                                             │
    │   ┌───────────────────────────────────────────────────────────────────┐   │
    │   │                                                                   │   │
    │   │   400nm           500nm           600nm           700nm          │   │
    │   │    │               │               │               │             │   │
    │   │    ▼               ▼               ▼               ▼             │   │
    │   │   ████████████████████████████████████████████████████████████   │   │
    │   │   BLUE            GREEN           RED                            │   │
    │   │   400-500nm       500-600nm       600-700nm                      │   │
    │   │                                                                   │   │
    │   │                                                                   │   │
    │   │   BLUE LIGHT (400-500nm)                                         │   │
    │   │   ══════════════════════                                          │   │
    │   │   • Compact growth (shorter internodes)                          │   │
    │   │   • Stomatal opening                                             │   │
    │   │   • Chlorophyll production                                       │   │
    │   │   • Vegetative growth                                            │   │
    │   │                                                                   │   │
    │   │   RED LIGHT (600-700nm)                                          │   │
    │   │   ══════════════════════                                          │   │
    │   │   • Most efficient for photosynthesis                            │   │
    │   │   • Stem elongation                                              │   │
    │   │   • Flowering trigger (with far-red)                             │   │
    │   │   • Fruit development                                            │   │
    │   │                                                                   │   │
    │   │   GREEN LIGHT (500-600nm)                                        │   │
    │   │   ═══════════════════════                                         │   │
    │   │   • Penetrates deeper into canopy                                │   │
    │   │   • Lower efficiency but still useful                            │   │
    │   │   • Important for under-canopy leaves                            │   │
    │   │                                                                   │   │
    │   │   IDEAL RATIO: 20-30% Blue : 70-80% Red (+ some green)          │   │
    │   │                                                                   │   │
    │   └───────────────────────────────────────────────────────────────────┘   │
    │                                                                             │
    └─────────────────────────────────────────────────────────────────────────────┘
```

---

## Practical Worksheet

```
    ╔═══════════════════════════════════════════════════════════════════════════╗
    ║                                                                           ║
    ║                    DLI CALCULATION WORKSHEET                              ║
    ║                                                                           ║
    ║   Complete these calculations for your growing situation:                ║
    ║                                                                           ║
    ║   STEP 1: Identify Your Crop                                             ║
    ║   ────────────────────────────                                            ║
    ║   Crop: ____________________  Target DLI: ________ mol/m²/day            ║
    ║                                                                           ║
    ║   STEP 2: Measure Your Light                                             ║
    ║   ──────────────────────────                                              ║
    ║   Current PPFD: ________ μmol/m²/s                                       ║
    ║   (Use a PAR meter or phone app for estimate)                            ║
    ║                                                                           ║
    ║   STEP 3: Set Your Photoperiod                                           ║
    ║   ────────────────────────────                                            ║
    ║   Planned hours of light: ________ hours/day                             ║
    ║                                                                           ║
    ║   STEP 4: Calculate Your DLI                                             ║
    ║   ──────────────────────────                                              ║
    ║   DLI = PPFD × Hours × 0.0036                                            ║
    ║   DLI = ________ × ________ × 0.0036                                     ║
    ║   DLI = ________ mol/m²/day                                              ║
    ║                                                                           ║
    ║   STEP 5: Compare to Target                                              ║
    ║   ─────────────────────────                                               ║
    ║   □ DLI is LOWER than target → Need more light or longer photoperiod    ║
    ║   □ DLI is AT target → Perfect!                                         ║
    ║   □ DLI is HIGHER than target → May need to reduce intensity/duration   ║
    ║                                                                           ║
    ║   STEP 6: Adjust (if needed)                                             ║
    ║   ──────────────────────────                                              ║
    ║   Required PPFD = Target DLI ÷ (Hours × 0.0036)                          ║
    ║   Required PPFD = ________ ÷ (________ × 0.0036)                         ║
    ║   Required PPFD = ________ μmol/m²/s                                     ║
    ║                                                                           ║
    ╚═══════════════════════════════════════════════════════════════════════════╝
```

---

## Quick Reference Card

```
    ╔═══════════════════════════════════════════════════════════════════════════╗
    ║                         LIGHT QUICK REFERENCE                             ║
    ╠═══════════════════════════════════════════════════════════════════════════╣
    ║                                                                           ║
    ║   FORMULAS:                                                              ║
    ║   DLI = PPFD × Hours × 0.0036                                            ║
    ║   PPFD = DLI ÷ (Hours × 0.0036)                                          ║
    ║                                                                           ║
    ║   QUICK DLI TARGETS:                                                     ║
    ║   Lettuce/Herbs:  10-15 mol     Tomatoes/Peppers: 20-30 mol             ║
    ║   Microgreens:     6-10 mol     Cucumbers:        15-20 mol             ║
    ║                                                                           ║
    ║   RULE OF THUMB:                                                         ║
    ║   200 PPFD × 16 hours ≈ 12 mol DLI (good for leafy greens)             ║
    ║   400 PPFD × 16 hours ≈ 23 mol DLI (good for fruiting crops)           ║
    ║                                                                           ║
    ╚═══════════════════════════════════════════════════════════════════════════╝
```

---

*EcoFusion Academy - Course 104: Plant Science Essentials*
*Use this reference when designing your lighting system*

