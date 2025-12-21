# Module 2: Temperature Management
## Course 211: Greenhouse Climate Management

---

## Learning Objectives

By the end of this module, you will be able to:
1. Calculate heat loss and heat load for greenhouse structures
2. Understand heat transfer mechanisms in greenhouses
3. Select appropriate heating strategies for different climates
4. Implement day/night temperature differentials (DIF)
5. Design temperature distribution systems
6. Optimize root zone temperature

---

## Introduction

Temperature is the master control of plant metabolism. Too cold, and growth stops; too hot, and stress begins. The challenge in greenhouses is maintaining optimal temperatures despite external weather conditions, using the minimum energy input required. This module covers the physics, calculations, and strategies for effective temperature management.

---

## Heat Transfer in Greenhouses

### The Three Modes of Heat Transfer

```
╔═══════════════════════════════════════════════════════════════════════╗
║                                                                       ║
║                    HEAT TRANSFER MECHANISMS                           ║
║                                                                       ║
║   1. CONDUCTION                                                       ║
║   ═══════════════                                                     ║
║                                                                       ║
║      Heat flow through solid materials                                ║
║                                                                       ║
║      [INSIDE WARM] ═══════════► [OUTSIDE COLD]                       ║
║                    Structure                                          ║
║                                                                       ║
║      Loss through: Glazing, frames, foundation                        ║
║      Controlled by: Insulation, material selection                    ║
║                                                                       ║
║   ─────────────────────────────────────────────────────────────────   ║
║                                                                       ║
║   2. CONVECTION                                                       ║
║   ═══════════════                                                     ║
║                                                                       ║
║      Heat transfer by air movement                                    ║
║                                                                       ║
║      Warm Air ↑↑↑                                                     ║
║      Cold Air ↓↓↓                                                     ║
║                                                                       ║
║      Loss through: Air infiltration, ventilation                      ║
║      Controlled by: Sealing, wind barriers, vestibules                ║
║                                                                       ║
║   ─────────────────────────────────────────────────────────────────   ║
║                                                                       ║
║   3. RADIATION                                                        ║
║   ═══════════════                                                     ║
║                                                                       ║
║      Electromagnetic energy transfer                                  ║
║                                                                       ║
║      Day:   ☀️ ─────► Greenhouse (GAIN)                              ║
║      Night: Greenhouse ─────► 🌙 (LOSS)                              ║
║                                                                       ║
║      Controlled by: Thermal curtains, reflective materials            ║
║                                                                       ║
╚═══════════════════════════════════════════════════════════════════════╝
```

### Heat Loss Calculation

Understanding heat loss is essential for sizing heating systems:

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│                    HEAT LOSS FORMULA                                │
│                                                                     │
│   Q = U × A × ΔT                                                    │
│                                                                     │
│   WHERE:                                                            │
│   Q = Heat loss (BTU/hour)                                          │
│   U = Overall heat transfer coefficient (BTU/hr·ft²·°F)            │
│   A = Surface area (ft²)                                            │
│   ΔT = Temperature difference (°F) (inside - outside)              │
│                                                                     │
│   ───────────────────────────────────────────────────────────────   │
│                                                                     │
│   U-VALUES FOR COMMON GLAZING MATERIALS:                            │
│                                                                     │
│   Material                         U-Value                          │
│   ────────────────────────────────────────                          │
│   Single glass                     1.13                             │
│   Double glass                     0.55                             │
│   Double poly                      0.70                             │
│   Double poly + thermal curtain    0.30                             │
│   Polycarbonate (8mm twin-wall)    0.60                             │
│   Polycarbonate (16mm triple-wall) 0.40                             │
│   Insulated wall (R-19)            0.05                             │
│                                                                     │
│   Lower U-value = Better insulation                                 │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Worked Example: Heat Loss Calculation

```
GREENHOUSE SPECIFICATIONS:
─────────────────────────
• Size: 30' × 96' × 12' high (2,880 sq ft floor)
• Covering: Double-layer poly
• Location: Zone 6 (design temp: 0°F outside, 65°F inside)
• U-value: 0.70 BTU/hr·ft²·°F

STEP 1: Calculate surface area
────────────────────────────
Walls: (30' × 12' × 2) + (96' × 12' × 2) = 720 + 2,304 = 3,024 ft²
Roof: 30' × 96' × 1.15 (slope factor) = 3,312 ft²
Total glazed area: 6,336 ft²

STEP 2: Calculate temperature difference
─────────────────────────────────────────
ΔT = 65°F - 0°F = 65°F

STEP 3: Calculate heat loss
────────────────────────────
Q = U × A × ΔT
Q = 0.70 × 6,336 × 65
Q = 288,288 BTU/hr

Add 10% for infiltration: 288,288 × 1.10 = 317,117 BTU/hr

HEATING CAPACITY NEEDED: ~320,000 BTU/hr minimum
```

---

## Heating System Selection

### Heating System Types

```
╔═══════════════════════════════════════════════════════════════════════╗
║                                                                       ║
║                        HEATING SYSTEM OPTIONS                         ║
║                                                                       ║
║   ┌─────────────────────────────────────────────────────────────┐   ║
║   │                                                             │   ║
║   │  1. UNIT HEATERS (Forced Air)                              │   ║
║   │  ══════════════════════════                                 │   ║
║   │                                                             │   ║
║   │     ┌──────────┐                                            │   ║
║   │     │  HEATER  │─────► Hot air                              │   ║
║   │     │   🔥     │                                             │   ║
║   │     └──────────┘                                            │   ║
║   │                                                             │   ║
║   │  PROS:                      CONS:                           │   ║
║   │  • Low initial cost         • Uneven heat distribution     │   ║
║   │  • Quick response           • Dry air                       │   ║
║   │  • Easy installation        • Higher operating cost        │   ║
║   │  • Good for small spaces    • Noise                         │   ║
║   │                                                             │   ║
║   │  Best for: Small greenhouses, backup heat                  │   ║
║   │                                                             │   ║
║   ├─────────────────────────────────────────────────────────────┤   ║
║   │                                                             │   ║
║   │  2. HOT WATER/STEAM (Radiant)                              │   ║
║   │  ═════════════════════════════                              │   ║
║   │                                                             │   ║
║   │     🔥 BOILER → ═══════════════════ Pipes                   │   ║
║   │                 (under benches/overhead)                    │   ║
║   │                                                             │   ║
║   │  PROS:                      CONS:                           │   ║
║   │  • Even distribution        • High initial cost            │   ║
║   │  • Efficient                • Slow response                │   ║
║   │  • Quiet                    • Complex installation         │   ║
║   │  • Gentle heat              • Maintenance required         │   ║
║   │                                                             │   ║
║   │  Best for: Commercial operations, high-value crops         │   ║
║   │                                                             │   ║
║   ├─────────────────────────────────────────────────────────────┤   ║
║   │                                                             │   ║
║   │  3. HEAT PUMPS                                              │   ║
║   │  ══════════════                                             │   ║
║   │                                                             │   ║
║   │     Outdoor ←→ Indoor                                       │   ║
║   │     (extracts heat from outside air)                        │   ║
║   │                                                             │   ║
║   │  PROS:                      CONS:                           │   ║
║   │  • Efficient (COP 2-4)      • Less effective in cold       │   ║
║   │  • Can cool too             • Higher initial cost          │   ║
║   │  • Lower operating cost     • Limited capacity             │   ║
║   │                                                             │   ║
║   │  Best for: Mild climates, year-round use                   │   ║
║   │                                                             │   ║
║   ├─────────────────────────────────────────────────────────────┤   ║
║   │                                                             │   ║
║   │  4. IN-FLOOR RADIANT                                        │   ║
║   │  ════════════════════                                       │   ║
║   │                                                             │   ║
║   │     🌱🌱🌱🌱                                                  │   ║
║   │     ═══════════ Hot water pipes in floor                    │   ║
║   │                                                             │   ║
║   │  PROS:                      CONS:                           │   ║
║   │  • Excellent root zone heat • Very high initial cost       │   ║
║   │  • Even distribution        • Difficult to modify          │   ║
║   │  • Energy efficient         • Slow response                │   ║
║   │                                                             │   ║
║   │  Best for: New construction, high-end operations           │   ║
║   │                                                             │   ║
║   └─────────────────────────────────────────────────────────────┘   ║
║                                                                       ║
╚═══════════════════════════════════════════════════════════════════════╝
```

### Fuel Options Comparison

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│         FUEL COMPARISON (per million BTU delivered)                 │
│                                                                     │
│   FUEL            COST*    EFFICIENCY   PROS            CONS        │
│   ═══════════════════════════════════════════════════════════════   │
│                                                                     │
│   Natural Gas     $15-25   80-95%       Clean, cheap   Not avail.  │
│                                          reliable       everywhere  │
│                                                                     │
│   Propane         $25-40   80-95%       Available      More exp.   │
│                                          anywhere       storage     │
│                                                                     │
│   Heating Oil     $20-30   75-85%       High density   Dirty,      │
│                                                         price vol.  │
│                                                                     │
│   Electricity     $40-80   100%         Clean, simple  Expensive   │
│                                          precise                    │
│                                                                     │
│   Wood/Biomass    $10-20   60-75%       Renewable      Labor int.  │
│                                          cheap          variable    │
│                                                                     │
│   Solar Thermal   Variable  N/A         Free fuel      High cap.   │
│                                          renewable      cost,       │
│                                                         intermit.   │
│                                                                     │
│   * Costs vary significantly by region and time                    │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Temperature Distribution Strategies

### Horizontal Air Flow (HAF)

```
    ┌─────────────────────────────────────────────────────────────────┐
    │                                                                 │
    │              HORIZONTAL AIR FLOW SYSTEM                         │
    │                                                                 │
    │       ╱╲              ╱╲              ╱╲              ╱╲        │
    │      ╱  ╲            ╱  ╲            ╱  ╲            ╱  ╲       │
    │     ╱    ╲          ╱    ╲          ╱    ╲          ╱    ╲      │
    │    │                                                      │     │
    │    │  FAN ──────────────────────────────────────────► FAN │     │
    │    │   ↓                                                ↑  │     │
    │    │   │  🌱🌱🌱        🌱🌱🌱        🌱🌱🌱        🌱🌱🌱  │  │     │
    │    │   │                                                │  │     │
    │    │  FAN ◄────────────────────────────────────────── FAN │     │
    │    │                                                      │     │
    │    └──────────────────────────────────────────────────────┘     │
    │                                                                 │
    │   DESIGN PRINCIPLES:                                            │
    │   ──────────────────                                            │
    │   • Create circular air pattern                                │
    │   • 1 CFM per sq ft of floor area                              │
    │   • Fans at 1/3 height from floor                              │
    │   • Alternate direction seasonally                             │
    │   • Run continuously                                           │
    │                                                                 │
    │   BENEFITS:                                                     │
    │   • Eliminates stratification                                  │
    │   • Uniform temperature (±2°F)                                 │
    │   • Better humidity distribution                               │
    │   • Stronger stems                                             │
    │                                                                 │
    └─────────────────────────────────────────────────────────────────┘
```

### Zone-Based Heating

```
╔═══════════════════════════════════════════════════════════════════════╗
║                                                                       ║
║                    MULTI-ZONE TEMPERATURE CONTROL                     ║
║                                                                       ║
║     ┌────────────────┬────────────────┬────────────────┐             ║
║     │                │                │                │             ║
║     │  ZONE 1        │  ZONE 2        │  ZONE 3        │             ║
║     │  Warm Crops    │  Cool Crops    │  Propagation   │             ║
║     │                │                │                │             ║
║     │  T1: 78°F      │  T2: 68°F      │  T3: 75°F      │             ║
║     │  🌶️🍅          │  🥬🥗          │  🌱 seedlings  │             ║
║     │                │                │                │             ║
║     │  [Heater 1]    │  [Heater 2]    │  [Heater 3]    │             ║
║     │  [Sensor 1]    │  [Sensor 2]    │  [Sensor 3]    │             ║
║     │                │                │                │             ║
║     └────────────────┴────────────────┴────────────────┘             ║
║                                                                       ║
║   ADVANTAGES:                                                         ║
║   • Grow multiple crop types optimally                                ║
║   • Energy savings (don't overheat cool zones)                        ║
║   • Better crop quality                                               ║
║                                                                       ║
║   REQUIREMENTS:                                                       ║
║   • Separate heating zones                                            ║
║   • Multiple sensors and controllers                                  ║
║   • Physical separation (curtains or walls)                           ║
║                                                                       ║
╚═══════════════════════════════════════════════════════════════════════╝
```

---

## Day/Night Temperature Strategies

### DIF (Day-Night Differential)

```
╔═══════════════════════════════════════════════════════════════════════╗
║                                                                       ║
║                    DIF: DAY - NIGHT TEMPERATURE                       ║
║                                                                       ║
║   Positive DIF (+DIF)                                                 ║
║   ═════════════════                                                   ║
║                                                                       ║
║   Day temp > Night temp                                               ║
║                                                                       ║
║   Temperature                                                         ║
║     80°F │    ┌───────────┐                                          ║
║          │    │    DAY    │                                          ║
║     70°F │────┘           └────                                      ║
║          │      NIGHT            NIGHT                               ║
║     60°F │                                                           ║
║          └────────────────────────────                               ║
║          0   6   12   18   24  Hours                                 ║
║                                                                       ║
║   Example: Day 78°F, Night 65°F = +13°F DIF                          ║
║                                                                       ║
║   EFFECTS:                                                            ║
║   • More stem elongation (stretching)                                 ║
║   • Taller plants                                                     ║
║   • Good for cut flowers, tomatoes                                    ║
║                                                                       ║
║   ─────────────────────────────────────────────────────────────────   ║
║                                                                       ║
║   Negative DIF (-DIF)                                                 ║
║   ══════════════════                                                  ║
║                                                                       ║
║   Day temp < Night temp                                               ║
║                                                                       ║
║   Temperature                                                         ║
║     75°F │      ┌────┐                                                ║
║          │      │NIGHT│                                               ║
║     70°F │      │    │                                                ║
║          │──────┘    └──────                                          ║
║     68°F │        DAY                                                 ║
║          └────────────────────────────                               ║
║          0   6   12   18   24  Hours                                 ║
║                                                                       ║
║   Example: Day 68°F, Night 75°F = -7°F DIF                           ║
║                                                                       ║
║   EFFECTS:                                                            ║
║   • Compact, shorter plants                                           ║
║   • Reduced internode length                                          ║
║   • Good for bedding plants, herbs                                    ║
║                                                                       ║
║   ─────────────────────────────────────────────────────────────────   ║
║                                                                       ║
║   Zero DIF                                                            ║
║   ═════════                                                           ║
║                                                                       ║
║   Day temp = Night temp                                               ║
║                                                                       ║
║   Temperature                                                         ║
║     72°F │─────────────────────────                                   ║
║          │                                                            ║
║          │                                                            ║
║          └────────────────────────────                               ║
║                                                                       ║
║   EFFECTS:                                                            ║
║   • Neutral growth habit                                              ║
║   • Simplifies climate control                                        ║
║                                                                       ║
╚═══════════════════════════════════════════════════════════════════════╝
```

### Energy Savings with Night Setback

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│              ENERGY SAVINGS FROM NIGHT SETBACK                      │
│                                                                     │
│   Scenario: 30' × 96' greenhouse, Zone 6                           │
│                                                                     │
│   CONSTANT 70°F (24/7)                                              │
│   ──────────────────────                                            │
│   Average heating: 250,000 BTU/hr × 12 hrs/night                   │
│   = 3,000,000 BTU/night                                             │
│                                                                     │
│   WITH NIGHT SETBACK TO 60°F                                        │
│   ────────────────────────────                                      │
│   Average heating: 180,000 BTU/hr × 12 hrs/night                   │
│   = 2,160,000 BTU/night                                             │
│                                                                     │
│   SAVINGS: 840,000 BTU/night (28% reduction!)                       │
│                                                                     │
│   Over 180-day heating season:                                      │
│   840,000 × 180 = 151,200,000 BTU                                   │
│                                                                     │
│   At $15/million BTU (natural gas):                                 │
│   Savings = $2,268/season                                           │
│                                                                     │
│   RULE OF THUMB:                                                    │
│   Each 1°F setback saves approximately 2-3% on heating              │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Root Zone Temperature

### Importance of Root Temperature

Root zone temperature can be as critical as air temperature:

```
╔═══════════════════════════════════════════════════════════════════════╗
║                                                                       ║
║                  ROOT ZONE TEMPERATURE EFFECTS                        ║
║                                                                       ║
║   Temperature    Water Uptake    Nutrient Uptake    Growth Rate      ║
║   ═══════════════════════════════════════════════════════════════════ ║
║                                                                       ║
║   < 50°F         Very Low        Minimal            Stunted          ║
║   (too cold)     Stress          Deficiencies       Yellowing        ║
║                                                                       ║
║   50-60°F        Low              Reduced            Slow            ║
║                                                                       ║
║   60-70°F        ██████████       ██████████         ████████        ║
║   OPTIMAL        Good              Active            Strong          ║
║                                                                       ║
║   70-80°F        ██████████       ██████████         ██████████      ║
║   IDEAL          Excellent         Maximum           Rapid           ║
║                                                                       ║
║   80-90°F        ████████         ████████           ████████        ║
║                  Declining        Declining          Declining       ║
║                                                                       ║
║   > 90°F         Low              Poor                Stress         ║
║   (too hot)      Root damage      Disease risk       Wilting         ║
║                                                                       ║
║   ─────────────────────────────────────────────────────────────────   ║
║                                                                       ║
║   CROP-SPECIFIC TARGETS:                                              ║
║                                                                       ║
║   Lettuce/Greens:        65-70°F                                      ║
║   Tomatoes:              70-75°F                                      ║
║   Cucumbers:             72-78°F                                      ║
║   Herbs:                 68-72°F                                      ║
║   Propagation:           75-80°F                                      ║
║                                                                       ║
╚═══════════════════════════════════════════════════════════════════════╝
```

### Root Zone Heating Methods

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│            ROOT ZONE HEATING OPTIONS                                │
│                                                                     │
│   1. HEATED BENCHES                                                 │
│   ═══════════════════                                               │
│                                                                     │
│      🌱🌱🌱🌱🌱🌱                                                     │
│      ═══════════════ Hot water pipes or heating cable              │
│      Bench structure                                               │
│                                                                     │
│   • Most common commercial method                                  │
│   • Efficient (heat goes to roots, not air)                        │
│   • Precise control                                                │
│   • Initial cost: Moderate                                         │
│                                                                     │
│   2. HEATING MATS                                                   │
│   ═════════════════                                                 │
│                                                                     │
│      [Tray with plants]                                             │
│      [Heating mat - electric]                                       │
│      [Bench or table]                                               │
│                                                                     │
│   • Best for propagation, small scale                              │
│   • Easy to install                                                │
│   • Good temperature control                                       │
│   • Operating cost: Higher (electricity)                           │
│                                                                     │
│   3. IN-FLOOR HEATING                                               │
│   ═══════════════════                                               │
│                                                                     │
│      🌱🌱🌱 (floor-grown crops)                                      │
│      ═══════════════ Hot water pipes in concrete                   │
│                                                                     │
│   • Permanent installation                                         │
│   • Excellent uniformity                                           │
│   • Energy efficient                                               │
│   • Initial cost: Very high                                        │
│                                                                     │
│   4. WARM IRRIGATION WATER                                          │
│   ══════════════════════════                                        │
│                                                                     │
│      Heat irrigation water to 70-75°F                              │
│                                                                     │
│   • Indirect heating method                                        │
│   • Works for any system                                           │
│   • Gradual, gentle warming                                        │
│   • Requires water heating capacity                                │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Thermal Mass and Heat Storage

### Using Thermal Mass

```
╔═══════════════════════════════════════════════════════════════════════╗
║                                                                       ║
║                      THERMAL MASS STRATEGY                            ║
║                                                                       ║
║   Thermal mass stores heat during day, releases at night              ║
║                                                                       ║
║   DAYTIME (sunny):                                                    ║
║   ☀️ ──────► Greenhouse ──────► Heat stored in mass                  ║
║                                                                       ║
║             ┌───────────────────────────────────────┐                 ║
║             │  🌱  🌱  🌱  🌱  Air heats             │                 ║
║             │  ╔═══════════════════╗                │                 ║
║             │  ║   WATER BARRELS   ║ ← Absorb heat  │                 ║
║             │  ║   or Rock bed     ║                │                 ║
║             │  ╚═══════════════════╝                │                 ║
║             └───────────────────────────────────────┘                 ║
║                                                                       ║
║   NIGHTTIME:                                                          ║
║   Thermal mass releases heat ──────► Reduces heating need            ║
║                                                                       ║
║             ┌───────────────────────────────────────┐                 ║
║             │  🌱  🌱  🌱  🌱                         │                 ║
║             │  ╔═══════════════════╗                │                 ║
║             │  ║   WATER BARRELS   ║ → Release heat │                 ║
║             │  ║   (warmer than    ║                │                 ║
║             │  ║    surrounding)   ║                │                 ║
║             │  ╚═══════════════════╝                │                 ║
║             └───────────────────────────────────────┘                 ║
║                                                                       ║
║   THERMAL MASS OPTIONS:                                               ║
║   ══════════════════════                                              ║
║   • Water barrels (55-gal drums): 8.3 BTU/gal·°F                     ║
║   • Rock beds: 25 BTU/ft³·°F                                         ║
║   • Concrete floor/walls: 30 BTU/ft³·°F                              ║
║   • Water is best: High capacity, low cost                            ║
║                                                                       ║
║   RULE OF THUMB:                                                      ║
║   2-5 gallons of water per sq ft of floor area                       ║
║   provides significant thermal buffering                              ║
║                                                                       ║
╚═══════════════════════════════════════════════════════════════════════╝
```

---

## Advanced Temperature Control Strategies

### Temperature Integration

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│               TEMPERATURE INTEGRATION CONCEPT                       │
│                                                                     │
│   Instead of fixed setpoints, adjust based on conditions:           │
│                                                                     │
│   SUNNY DAY                          CLOUDY DAY                     │
│   ─────────                          ───────────                    │
│                                                                     │
│   ☀️ High light                      ☁️ Low light                   │
│   → Higher temp setpoint             → Lower temp setpoint          │
│   → Photosynthesis can use heat      → Conserve energy              │
│   → Example: 78°F                    → Example: 70°F                │
│                                                                     │
│   BENEFITS:                                                         │
│   • Better light-temp relationship                                 │
│   • Energy savings on cloudy days                                  │
│   • Prevents "soft growth" in low light + high temp                │
│   • More efficient use of photosynthesis                           │
│                                                                     │
│   IMPLEMENTATION:                                                   │
│   Requires light sensor + advanced controller                      │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Averaging vs. Throttling

```
╔═══════════════════════════════════════════════════════════════════════╗
║                                                                       ║
║                    TEMPERATURE CONTROL METHODS                        ║
║                                                                       ║
║   AVERAGING (multiple sensors)                                        ║
║   ═══════════════════════════════                                     ║
║                                                                       ║
║   Sensor 1: 68°F │                                                    ║
║   Sensor 2: 72°F │─── Average = 70°F → Control based on this        ║
║   Sensor 3: 70°F │                                                    ║
║                                                                       ║
║   PROS: Better overall climate, less cycling                          ║
║   CONS: May miss localized problems                                   ║
║                                                                       ║
║   ─────────────────────────────────────────────────────────────────   ║
║                                                                       ║
║   THROTTLING (single sensor, modulating control)                      ║
║   ════════════════════════════════════════════════                    ║
║                                                                       ║
║   Temperature                                                         ║
║   72°F ├─────── High fire                                             ║
║   71°F ├─────── Medium fire                                           ║
║   70°F ├─────── Setpoint                                              ║
║   69°F ├─────── Medium fire                                           ║
║   68°F ├─────── High fire                                             ║
║                                                                       ║
║   Heating output adjusts proportionally to distance from setpoint     ║
║                                                                       ║
║   PROS: Smooth control, energy efficient                              ║
║   CONS: Requires modulating equipment                                 ║
║                                                                       ║
╚═══════════════════════════════════════════════════════════════════════╝
```

---

## Troubleshooting Temperature Issues

### Common Problems and Solutions

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│   PROBLEM: Temperature stratification (hot near roof, cold floor)   │
│                                                                     │
│   SYMPTOMS:                                                         │
│   • Large temp difference top to bottom (>10°F)                    │
│   • Cold plants despite heater running                             │
│   • Uneven growth                                                  │
│                                                                     │
│   SOLUTIONS:                                                        │
│   → Install HAF fans                                               │
│   → Add destratification fans (blow air down)                      │
│   → Improve air circulation                                        │
│   → Lower sensor height                                            │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   PROBLEM: Insufficient heating capacity                            │
│                                                                     │
│   SYMPTOMS:                                                         │
│   • Cannot maintain setpoint on cold nights                        │
│   • Heater runs continuously                                       │
│   • Gradual temperature decline                                    │
│                                                                     │
│   SOLUTIONS:                                                        │
│   → Add insulation (thermal curtain most cost-effective)           │
│   → Seal air leaks                                                 │
│   → Add supplemental heating                                       │
│   → Lower night setpoint                                           │
│   → Check heater for proper function                               │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   PROBLEM: Temperature cycling (overshooting setpoint)              │
│                                                                     │
│   SYMPTOMS:                                                         │
│   • Temperature swings ±5°F                                        │
│   • Heater short-cycles                                            │
│   • Uneven plant growth                                            │
│                                                                     │
│   SOLUTIONS:                                                        │
│   → Adjust controller differential                                 │
│   → Add modulating control                                         │
│   → Improve sensor placement                                       │
│   → Check for drafts on sensor                                     │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Module Summary

### Key Takeaways

1. **Heat loss calculation** determines required heating capacity: Q = U × A × ΔT

2. **Multiple heating options** exist, each with trade-offs in cost, efficiency, and distribution

3. **Temperature distribution** is as important as total heat—use HAF fans and proper design

4. **DIF management** (day-night differential) controls plant morphology and saves energy

5. **Root zone temperature** can be as critical as air temperature for optimal growth

6. **Thermal mass** provides passive temperature buffering and energy savings

7. **Advanced strategies** like temperature integration optimize plant response to conditions

### Preview of Module 3

Next, we'll cover humidity control:
- Understanding absolute vs. relative humidity
- VPD management strategies
- Humidification systems
- Dehumidification methods
- Disease prevention through humidity control

---

## Practical Exercises

**Exercise 1:** Calculate the heating requirement for your greenhouse or a hypothetical facility

**Exercise 2:** Design a DIF strategy for tomatoes vs. basil—what temperatures would you use and why?

**Exercise 3:** Evaluate whether thermal mass makes sense for your operation

---

*EcoFusion Academy - Course 211: Greenhouse Climate Management - Module 2*
