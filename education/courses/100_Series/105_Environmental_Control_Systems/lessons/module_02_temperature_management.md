# Module 2: Temperature Management
## Course 105: Environmental Control Systems

---

## Learning Objectives

By the end of this module, you will be able to:
- Explain how temperature affects plant growth and development
- Calculate heating and cooling loads for a growing space
- Compare different heating and cooling technologies
- Implement day/night temperature differential (DIF) strategies
- Manage root zone temperature for optimal growth
- Troubleshoot common temperature problems

---

## Temperature and Plant Physiology

### The Temperature Response Curve

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                                                                           ║
║              PLANT GROWTH RATE vs. TEMPERATURE                            ║
║                                                                           ║
║   Growth                                                                  ║
║   Rate                           ╭────╮                                   ║
║    │                            ╱      ╲   OPTIMUM                        ║
║    │                           ╱        ╲  ZONE                           ║
║    │                          ╱          ╲                                ║
║    │                         ╱            ╲                               ║
║    │                        ╱              ╲                              ║
║    │                       ╱                ╲                             ║
║    │                      ╱                  ╲                            ║
║    │                     ╱                    ╲                           ║
║    │                    ╱                      ╲                          ║
║    │                   ╱                        ╲                         ║
║    │__________________╱                          ╲_______________________║
║    └────┬────┬────┬────┬────┬────┬────┬────┬────┬────┬────┬────┬────    ║
║         32   40   50   60   70   80   90  100  110  °F                   ║
║         0    4   10   16   21   27   32   38   43   °C                   ║
║                                                                           ║
║         │         │              │              │         │              ║
║       MINIMUM   BASE         OPTIMUM        MAXIMUM   LETHAL             ║
║       (survival)(growth starts)(best growth)(growth stops)(death)        ║
║                                                                           ║
╚═══════════════════════════════════════════════════════════════════════════╝
```

### Temperature Effects on Plant Processes

| Process | Cold Effect | Hot Effect |
|---------|-------------|------------|
| **Photosynthesis** | Slows dramatically below 50°F | Slows above 85-95°F |
| **Respiration** | Decreases (good for storage) | Increases (uses more energy) |
| **Nutrient Uptake** | Reduced, especially P | May increase, then crash |
| **Water Uptake** | Slowed | Increased, may cause stress |
| **Flowering** | May trigger (vernalization) | May inhibit or accelerate |
| **Fruit Set** | Poor below threshold | Poor above threshold |

### Crop-Specific Temperature Requirements

```
    ┌─────────────────────────────────────────────────────────────────────────────┐
    │                                                                             │
    │                OPTIMAL TEMPERATURE RANGES BY CROP                          │
    │                                                                             │
    │   °F     40    50    60    70    80    90   100                            │
    │   °C      4    10    16    21    27    32    38                            │
    │          │     │     │     │     │     │     │                             │
    │                                                                             │
    │   COOL SEASON CROPS                                                        │
    │   ═════════════════                                                        │
    │   Lettuce        [████████████████████]                                   │
    │                       45-75°F                                              │
    │   Spinach        [██████████████████]                                     │
    │                       45-70°F                                              │
    │   Kale           [██████████████████████]                                 │
    │                       45-75°F                                              │
    │                                                                             │
    │   WARM SEASON CROPS                                                        │
    │   ══════════════════                                                       │
    │   Tomato                   [████████████████████]                         │
    │                                 65-85°F                                    │
    │   Pepper                   [██████████████████████]                       │
    │                                 65-90°F                                    │
    │   Cucumber                   [████████████████████]                       │
    │                                   70-85°F                                  │
    │   Basil                      [██████████████████]                         │
    │                                   70-80°F                                  │
    │                                                                             │
    │   TROPICAL CROPS                                                           │
    │   ══════════════                                                           │
    │   Banana                          [████████████████████]                  │
    │                                        75-95°F                             │
    │                                                                             │
    └─────────────────────────────────────────────────────────────────────────────┘
```

---

## Heating Systems

### Heating Technology Comparison

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                                                                           ║
║                      HEATING SYSTEM COMPARISON                            ║
║                                                                           ║
║   ┌───────────────┬───────────┬───────────┬───────────┬─────────────┐    ║
║   │ SYSTEM        │ EFFICIENCY│ COST      │ HUMIDITY  │ BEST FOR    │    ║
║   ├───────────────┼───────────┼───────────┼───────────┼─────────────┤    ║
║   │ Electric      │ 100%      │ $$$       │ No effect │ Small       │    ║
║   │ Resistance    │           │ operation │           │ spaces      │    ║
║   ├───────────────┼───────────┼───────────┼───────────┼─────────────┤    ║
║   │ Heat Pump     │ 200-400%  │ $$        │ Dehumid-  │ Moderate    │    ║
║   │ (Mini-split)  │ (COP)     │ operation │ ifies     │ climates    │    ║
║   ├───────────────┼───────────┼───────────┼───────────┼─────────────┤    ║
║   │ Natural Gas   │ 80-95%    │ $         │ Adds      │ Large       │    ║
║   │ Unit Heater   │           │ operation │ moisture  │ greenhouses │    ║
║   ├───────────────┼───────────┼───────────┼───────────┼─────────────┤    ║
║   │ Propane       │ 80-95%    │ $$        │ Adds      │ Off-grid    │    ║
║   │ Heater        │           │ operation │ moisture  │ locations   │    ║
║   ├───────────────┼───────────┼───────────┼───────────┼─────────────┤    ║
║   │ Hot Water     │ 85-95%    │ $$$       │ No direct │ Commercial  │    ║
║   │ Boiler        │ (boiler)  │ install   │ effect    │ operations  │    ║
║   ├───────────────┼───────────┼───────────┼───────────┼─────────────┤    ║
║   │ Radiant Floor │ Very High │ $$$$      │ No effect │ Root zone   │    ║
║   │               │           │ install   │           │ heating     │    ║
║   └───────────────┴───────────┴───────────┴───────────┴─────────────┘    ║
║                                                                           ║
╚═══════════════════════════════════════════════════════════════════════════╝
```

### Electric Heating Options

```
    ┌─────────────────────────────────────────────────────────────────────────────┐
    │                                                                             │
    │                      ELECTRIC HEATER TYPES                                 │
    │                                                                             │
    │   CONVECTION HEATERS                    RADIANT/INFRARED HEATERS           │
    │   ══════════════════                    ════════════════════════            │
    │                                                                             │
    │   ┌─────────────┐                       ~~~~~~~~~~~~~~~~~~~~~~~~            │
    │   │ ▓▓▓▓▓▓▓▓▓▓▓ │ ← Heating            ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓             │
    │   │ ↑   ↑   ↑   │   element            ══════════════════════              │
    │   │ │   │   │   │                      │ Infrared element   │              │
    │   │ AIR RISES   │                      ══════════════════════              │
    │   └─────────────┘                                                          │
    │                                         Heats OBJECTS directly             │
    │   • Heats AIR first                     not air                            │
    │   • Slow, uniform warming               • Instant warmth                   │
    │   • Fan-forced or natural              • Spot heating                      │
    │   • Lower surface temp                 • More efficient for                │
    │                                          targeted heating                  │
    │                                                                             │
    │   BEST FOR:                             BEST FOR:                          │
    │   • General space heating               • Propagation areas                │
    │   • Consistent temperatures             • Work stations                    │
    │   • Enclosed rooms                      • Supplemental heat                │
    │                                                                             │
    └─────────────────────────────────────────────────────────────────────────────┘
```

### Heat Pump Technology

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                                                                           ║
║                    HEAT PUMP (MINI-SPLIT) SYSTEM                          ║
║                                                                           ║
║   Heat pumps move heat rather than generate it = super efficient!        ║
║                                                                           ║
║   HEATING MODE:                                                           ║
║   ═════════════                                                           ║
║                                                                           ║
║   OUTSIDE                │                    INSIDE                      ║
║   ┌─────────────┐        │             ┌─────────────┐                   ║
║   │ ○○○○○○○○○○○ │        │             │ ═══════════ │                   ║
║   │ OUTDOOR UNIT │ ══════╪═══════════► │ INDOOR HEAD │                   ║
║   │ (absorbs    │  Heat  │  moves      │ (releases   │                   ║
║   │  heat from  │  flows │  inside     │  heat into  │                   ║
║   │  outside)   │        │             │  room)      │                   ║
║   └─────────────┘        │             └─────────────┘                   ║
║                          │                                                ║
║   Even cold air contains │  Works down to -15°F with                     ║
║   extractable heat!      │  modern inverter models                       ║
║                          │                                                ║
║   EFFICIENCY: 200-400% (COP 2-4)                                         ║
║   For every 1 kW of electricity, delivers 2-4 kW of heat                 ║
║                                                                           ║
╚═══════════════════════════════════════════════════════════════════════════╝
```

---

## Cooling Systems

### Cooling Technology Comparison

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                                                                           ║
║                      COOLING SYSTEM COMPARISON                            ║
║                                                                           ║
║   ┌───────────────┬───────────┬───────────┬───────────┬─────────────┐    ║
║   │ SYSTEM        │ COOLING   │ HUMIDITY  │ COST      │ BEST FOR    │    ║
║   │               │ CAPACITY  │ EFFECT    │           │             │    ║
║   ├───────────────┼───────────┼───────────┼───────────┼─────────────┤    ║
║   │ Exhaust Fans  │ Low       │ None      │ $         │ Basic       │    ║
║   │               │           │           │           │ ventilation │    ║
║   ├───────────────┼───────────┼───────────┼───────────┼─────────────┤    ║
║   │ Evaporative   │ Med-High  │ INCREASES │ $         │ Dry         │    ║
║   │ Coolers       │ (in dry   │ humidity  │           │ climates    │    ║
║   │               │ climates) │           │           │             │    ║
║   ├───────────────┼───────────┼───────────┼───────────┼─────────────┤    ║
║   │ Mini-split AC │ High      │ DECREASES │ $$        │ Sealed      │    ║
║   │               │           │ humidity  │           │ rooms       │    ║
║   ├───────────────┼───────────┼───────────┼───────────┼─────────────┤    ║
║   │ Chilled Water │ Very High │ None      │ $$$       │ Commercial  │    ║
║   │               │           │ direct    │           │ scale       │    ║
║   ├───────────────┼───────────┼───────────┼───────────┼─────────────┤    ║
║   │ Shade Cloth   │ Passive   │ None      │ $         │ Greenhouse  │    ║
║   │               │           │           │           │ (reduce     │    ║
║   │               │           │           │           │ heat load)  │    ║
║   └───────────────┴───────────┴───────────┴───────────┴─────────────┘    ║
║                                                                           ║
╚═══════════════════════════════════════════════════════════════════════════╝
```

### Evaporative Cooling

```
    ┌─────────────────────────────────────────────────────────────────────────────┐
    │                                                                             │
    │                     EVAPORATIVE COOLING SYSTEM                             │
    │                                                                             │
    │                                                                             │
    │          HOT DRY AIR                     COOL HUMID AIR                    │
    │          ════════════                     ═════════════                     │
    │               →→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→                              │
    │                                                                             │
    │          ┌─────────────────────────────────────────┐                       │
    │          │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│ ← Wet pad            │
    │          │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│                       │
    │          │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│                       │
    │          │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│                       │
    │          └─────────────────────────────────────────┘                       │
    │                          │                                                  │
    │                    ┌─────┴─────┐                                           │
    │                    │   WATER   │                                           │
    │                    │   PUMP    │                                           │
    │                    └───────────┘                                           │
    │                                                                             │
    │   HOW IT WORKS:                                                            │
    │   ═════════════                                                            │
    │   1. Hot dry air pulled through wet pad by exhaust fans                   │
    │   2. Water evaporates, absorbing heat from the air                        │
    │   3. Air temperature drops as humidity rises                              │
    │   4. Cooled air circulates through growing space                          │
    │                                                                             │
    │   EFFECTIVENESS:                                                           │
    │   ══════════════                                                           │
    │   • Works BEST in dry climates (< 50% RH)                                 │
    │   • Can drop temps 10-30°F below outside air                              │
    │   • NOT effective in humid climates (> 70% RH)                            │
    │   • Uses 75% less energy than mechanical cooling                          │
    │                                                                             │
    └─────────────────────────────────────────────────────────────────────────────┘
```

---

## Heat Load Calculations

### Basic Heat Load Formula

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                                                                           ║
║                    HEATING LOAD CALCULATION                               ║
║                                                                           ║
║   BTU/hr = Area × ΔT × U-value × 1.1                                     ║
║                                                                           ║
║   WHERE:                                                                  ║
║   ══════                                                                  ║
║   Area = Surface area in square feet                                     ║
║   ΔT = Temperature difference (inside vs coldest outside)                ║
║   U-value = Heat transfer coefficient of material                        ║
║   1.1 = Safety factor (10% extra capacity)                               ║
║                                                                           ║
║   ─────────────────────────────────────────────────────────────────────  ║
║                                                                           ║
║   SIMPLIFIED METHOD:                                                      ║
║   ══════════════════                                                      ║
║                                                                           ║
║   For quick estimates, use BTU per sq ft of floor space:                 ║
║                                                                           ║
║   ┌──────────────────────────────────────────────────────────────────┐   ║
║   │ STRUCTURE TYPE           │ BTU/sq ft (for 50°F temp rise)       │   ║
║   ├──────────────────────────────────────────────────────────────────┤   ║
║   │ Single-layer poly        │ 40-50 BTU/sq ft                      │   ║
║   │ Double-layer poly        │ 25-35 BTU/sq ft                      │   ║
║   │ Polycarbonate            │ 20-30 BTU/sq ft                      │   ║
║   │ Glass greenhouse         │ 35-45 BTU/sq ft                      │   ║
║   │ Insulated building       │ 15-25 BTU/sq ft                      │   ║
║   │ Well-insulated indoor    │ 10-15 BTU/sq ft                      │   ║
║   └──────────────────────────────────────────────────────────────────┘   ║
║                                                                           ║
╚═══════════════════════════════════════════════════════════════════════════╝
```

### Example Calculation

```
    ┌─────────────────────────────────────────────────────────────────────────────┐
    │                                                                             │
    │                    HEATING CALCULATION EXAMPLE                             │
    │                                                                             │
    │   SCENARIO:                                                                │
    │   ══════════                                                               │
    │   • 1,000 sq ft double-poly greenhouse                                    │
    │   • Maintain 65°F inside                                                  │
    │   • Coldest outside temp: 20°F                                            │
    │   • Temperature rise needed: 45°F                                         │
    │                                                                             │
    │   CALCULATION:                                                             │
    │   ════════════                                                             │
    │   BTU/hr = 1,000 sq ft × 30 BTU/sq ft × (45°F ÷ 50°F)                     │
    │   BTU/hr = 1,000 × 30 × 0.9                                               │
    │   BTU/hr = 27,000 BTU/hr needed                                           │
    │                                                                             │
    │   Add 10% safety factor: 27,000 × 1.1 = 29,700 BTU/hr                     │
    │                                                                             │
    │   HEATER SELECTION:                                                        │
    │   ═════════════════                                                        │
    │   Select a heater rated for 30,000+ BTU/hr                                │
    │                                                                             │
    │   CONVERSION:                                                              │
    │   ══════════                                                               │
    │   • 30,000 BTU/hr = 8.8 kW electric                                       │
    │   • 1 kW = 3,412 BTU/hr                                                   │
    │                                                                             │
    └─────────────────────────────────────────────────────────────────────────────┘
```

---

## Day/Night Temperature Differential (DIF)

### Understanding DIF

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                                                                           ║
║                    DIF = DAY TEMP - NIGHT TEMP                            ║
║                                                                           ║
║   DIF affects plant morphology (shape) and development:                  ║
║                                                                           ║
║   ┌─────────────────────────────────────────────────────────────────┐    ║
║   │                                                                 │    ║
║   │   POSITIVE DIF (+DIF)          NEGATIVE DIF (-DIF)             │    ║
║   │   Day warmer than night         Night warmer than day           │    ║
║   │                                                                 │    ║
║   │        ┌──┐                           ┌──┐                     │    ║
║   │       ╱╲  │                          ╱╲  │                     │    ║
║   │      ╱  ╲ │                         ╱  ╲ │                     │    ║
║   │     ╱    ╲│                        ╱    ╲│                     │    ║
║   │    ╱      │                       │      │                     │    ║
║   │   ╱       │                       │      │                     │    ║
║   │  │        │                       │      │                     │    ║
║   │  TALLER   │                       SHORTER│                     │    ║
║   │  STRETCH  │                       COMPACT│                     │    ║
║   │                                                                 │    ║
║   │   • Promotes stem elongation      • Reduces stretch            │    ║
║   │   • Natural pattern               • Creates compact plants     │    ║
║   │   • Typical: +10 to +15°F        • Typical: -5 to -10°F       │    ║
║   │                                                                 │    ║
║   └─────────────────────────────────────────────────────────────────┘    ║
║                                                                           ║
║   ZERO DIF: Same day/night temps = intermediate stretch                  ║
║                                                                           ║
╚═══════════════════════════════════════════════════════════════════════════╝
```

### DIF Strategies by Crop Goal

| Goal | DIF Strategy | Example |
|------|--------------|---------|
| Compact seedlings | Negative DIF | 65°F day / 70°F night (-5) |
| Taller cut flowers | Positive DIF | 75°F day / 60°F night (+15) |
| Balanced growth | Zero/Small DIF | 72°F day / 68°F night (+4) |
| Reduce stretch in tomatoes | DROP: Cool morning pulse | 55°F at sunrise for 2 hrs |

---

## Root Zone Temperature

### Why Root Temperature Matters

```
    ┌─────────────────────────────────────────────────────────────────────────────┐
    │                                                                             │
    │                    ROOT ZONE TEMPERATURE EFFECTS                           │
    │                                                                             │
    │   Root zone temp directly affects:                                         │
    │   • Nutrient uptake rate                                                   │
    │   • Water absorption                                                       │
    │   • Beneficial microbe activity                                            │
    │   • Disease pressure (Pythium loves cold/warm extremes)                   │
    │                                                                             │
    │   OPTIMAL ROOT ZONE: 65-72°F (18-22°C) for most crops                     │
    │                                                                             │
    │   TEMPERATURE EFFECT ON NUTRIENT UPTAKE:                                  │
    │   ══════════════════════════════════════                                   │
    │                                                                             │
    │   Root Temp        P Uptake      Overall Uptake                           │
    │   ─────────────────────────────────────────────                            │
    │   50°F (10°C)      [██░░░░░░░░]  Severely limited                         │
    │   60°F (16°C)      [████░░░░░░]  Reduced                                  │
    │   68°F (20°C)      [████████░░]  Good                                     │
    │   72°F (22°C)      [██████████]  Optimal                                  │
    │   80°F (27°C)      [████████░░]  Reduced O₂                               │
    │   90°F (32°C)      [████░░░░░░]  Stress, disease risk                     │
    │                                                                             │
    │   Note: Phosphorus (P) uptake is especially temperature-sensitive!        │
    │                                                                             │
    └─────────────────────────────────────────────────────────────────────────────┘
```

### Root Zone Heating Methods

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                                                                           ║
║                    ROOT ZONE HEATING OPTIONS                              ║
║                                                                           ║
║   HEATING MATS                        IN-FLOOR RADIANT                   ║
║   ════════════                        ════════════════                    ║
║                                                                           ║
║   ┌───────────────────┐              ┌───────────────────┐               ║
║   │ 🌱  🌱  🌱  🌱  🌱 │              │ 🌱  🌱  🌱  🌱  🌱 │               ║
║   │═══════════════════│              │░░░░░░░░░░░░░░░░░░░│               ║
║   │ ▓▓▓ HEAT MAT ▓▓▓ │              │─────────────────── │ ← Tubing     ║
║   └───────────────────┘              │░░░░CONCRETE░░░░░░░│               ║
║                                      └───────────────────┘               ║
║   • Flexible, portable               • Permanent installation            ║
║   • Good for propagation             • Even, consistent heat             ║
║   • Limited capacity                 • High initial cost                 ║
║   • Thermostat controlled            • Hot water or electric             ║
║                                                                           ║
║   NUTRIENT SOLUTION HEATING          AIR-TO-ROOT TEMP                    ║
║   ═════════════════════════          ════════════════                     ║
║                                                                           ║
║   ┌───────────────────┐              Heating air also heats roots        ║
║   │ RESERVOIR         │              but less efficiently.               ║
║   │    ┌───────┐      │                                                  ║
║   │    │HEATER │      │              Root zone typically 2-5°F          ║
║   │    └───────┘      │              below air temperature.              ║
║   │  (Aquarium type)  │                                                  ║
║   └───────────────────┘              In hydro, solution temp             ║
║                                      IS root temp!                       ║
║   • Direct control                                                       ║
║   • Easy temperature monitoring                                          ║
║   • Watch for algae growth                                               ║
║                                                                           ║
╚═══════════════════════════════════════════════════════════════════════════╝
```

---

## Temperature Troubleshooting

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                                                                           ║
║                    TEMPERATURE PROBLEM DIAGNOSIS                          ║
║                                                                           ║
║   SYMPTOM                 POSSIBLE CAUSE           SOLUTION               ║
║   ════════════════════════════════════════════════════════════════════   ║
║                                                                           ║
║   Can't reach setpoint    • Undersized heater     • Add capacity         ║
║   (too cold)              • Poor insulation       • Seal air leaks       ║
║                           • Heater malfunction    • Service/replace      ║
║                                                                           ║
║   Wild temperature        • No air circulation    • Add HAF fans         ║
║   swings                  • Thermostat placement  • Relocate sensor      ║
║                           • On/off cycling        • Add thermal mass     ║
║                                                                           ║
║   Hot spots               • Uneven airflow        • Adjust fans          ║
║                           • Direct sun exposure   • Add shade cloth      ║
║                           • Heat near fixtures    • Improve exhaust      ║
║                                                                           ║
║   Cold spots              • Poor circulation      • Add fans             ║
║                           • Near walls/doors      • Add insulation       ║
║                           • Cold drafts           • Seal openings        ║
║                                                                           ║
║   Cooling insufficient    • Undersized AC         • Add capacity         ║
║                           • Dirty filters         • Clean/replace        ║
║                           • High heat load        • Reduce light hours   ║
║                                                                           ║
╚═══════════════════════════════════════════════════════════════════════════╝
```

---

## Module Summary

### Key Takeaways

1. **Temperature affects** all plant processes differently
2. **Heating options** range from simple electric to complex hot water systems
3. **Cooling options** depend on climate - evaporative works only in dry areas
4. **Heat load calculations** ensure proper equipment sizing
5. **DIF** (day/night differential) controls plant stretch and morphology
6. **Root zone temperature** is critical for nutrient uptake, especially phosphorus

### Preview of Module 3

Next, we'll explore humidity and VPD management:
- Relative humidity science
- Vapor Pressure Deficit (VPD) explained
- Humidification systems
- Dehumidification strategies
- Disease prevention through humidity control

---

## Knowledge Check

1. What happens to phosphorus uptake when root zone temperature drops below 60°F?
2. Why doesn't evaporative cooling work well in humid climates?
3. Calculate the BTU needed for a 500 sq ft insulated room with a 40°F temperature rise.
4. What DIF strategy would you use to create compact bedding plants?
5. What is the COP of a heat pump, and why is it significant?

---

*EcoFusion Academy - Course 105: Environmental Control Systems - Module 2*

