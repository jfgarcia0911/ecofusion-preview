# Module 3: Humidity & VPD Control
## Course 105: Environmental Control Systems

---

## Learning Objectives

By the end of this module, you will be able to:
- Explain the relationship between temperature and relative humidity
- Calculate and interpret Vapor Pressure Deficit (VPD)
- Identify optimal VPD ranges for different growth stages
- Select appropriate humidification systems
- Choose effective dehumidification strategies
- Prevent disease through humidity management

---

## Understanding Humidity

### What is Relative Humidity?

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                                                                           ║
║                    RELATIVE HUMIDITY EXPLAINED                            ║
║                                                                           ║
║   Relative Humidity (RH) = Current water vapor ÷ Maximum possible × 100  ║
║                                                                           ║
║   Think of air as a sponge:                                              ║
║                                                                           ║
║   ┌────────────────────────────────────────────────────────────────┐     ║
║   │                                                                │     ║
║   │   100% RH                50% RH                 25% RH        │     ║
║   │   (Saturated)            (Half full)            (Dry)         │     ║
║   │                                                                │     ║
║   │   █████████              █████░░░░░             ███░░░░░░░    │     ║
║   │   █████████              █████░░░░░             ███░░░░░░░    │     ║
║   │   █████████              █████░░░░░             ███░░░░░░░    │     ║
║   │                                                                │     ║
║   │   Can't hold              Can absorb            Can absorb    │     ║
║   │   any more!               more water            lots more     │     ║
║   │                                                                │     ║
║   └────────────────────────────────────────────────────────────────┘     ║
║                                                                           ║
║   KEY INSIGHT: The "sponge" SIZE changes with temperature!               ║
║                                                                           ║
╚═══════════════════════════════════════════════════════════════════════════╝
```

### Temperature and Humidity Relationship

```
    ┌─────────────────────────────────────────────────────────────────────────────┐
    │                                                                             │
    │              WHY RH CHANGES WITH TEMPERATURE                               │
    │                                                                             │
    │   Warm air can hold MORE water than cold air                              │
    │                                                                             │
    │   SAME AMOUNT OF WATER VAPOR:                                             │
    │   ════════════════════════════                                             │
    │                                                                             │
    │   AT 60°F (16°C)              AT 80°F (27°C)                              │
    │                                                                             │
    │   ┌──────────┐                ┌────────────────────┐                      │
    │   │██████████│                │██████████░░░░░░░░░░│                      │
    │   │██████████│                │██████████░░░░░░░░░░│                      │
    │   │  80% RH  │                │      50% RH        │                      │
    │   └──────────┘                └────────────────────┘                      │
    │   (small container,           (larger container,                          │
    │    nearly full)                same water = less full)                    │
    │                                                                             │
    │   ─────────────────────────────────────────────────────────────────────   │
    │                                                                             │
    │   PRACTICAL IMPLICATION:                                                   │
    │   ══════════════════════                                                   │
    │   • Morning (cool): RH rises as temps drop                                │
    │   • Afternoon (warm): RH drops as temps rise                              │
    │   • Night: RH often peaks → condensation risk                             │
    │   • Heating air LOWERS RH even without removing moisture                  │
    │   • Cooling air RAISES RH even without adding moisture                    │
    │                                                                             │
    └─────────────────────────────────────────────────────────────────────────────┘
```

---

## Vapor Pressure Deficit (VPD)

### What is VPD?

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                                                                           ║
║                    VAPOR PRESSURE DEFICIT (VPD)                           ║
║                                                                           ║
║   VPD = "The drying power of the air"                                    ║
║                                                                           ║
║   VPD measures the DIFFERENCE between:                                   ║
║   • How much water vapor the air HOLDS                                   ║
║   • How much water vapor the air COULD hold at saturation               ║
║                                                                           ║
║   ┌─────────────────────────────────────────────────────────────────┐    ║
║   │                                                                 │    ║
║   │   LOW VPD (0.4 kPa)             HIGH VPD (1.6 kPa)             │    ║
║   │   High humidity                  Low humidity                   │    ║
║   │                                                                 │    ║
║   │   █████████░                    ███░░░░░░░                     │    ║
║   │                                                                 │    ║
║   │   • Air nearly saturated        • Air very "thirsty"           │    ║
║   │   • Little evaporation          • Rapid evaporation            │    ║
║   │   • Slow transpiration          • Fast transpiration           │    ║
║   │   • Disease risk HIGH           • Stress/wilt risk HIGH        │    ║
║   │   • Good for clones             • Good for ripening            │    ║
║   │                                                                 │    ║
║   └─────────────────────────────────────────────────────────────────┘    ║
║                                                                           ║
║   FORMULA: VPD = SVP × (1 - RH/100)                                      ║
║            where SVP = Saturation Vapor Pressure at given temperature    ║
║                                                                           ║
╚═══════════════════════════════════════════════════════════════════════════╝
```

### Why VPD is Better Than RH

```
    ┌─────────────────────────────────────────────────────────────────────────────┐
    │                                                                             │
    │                 VPD vs RH: WHY VPD IS SUPERIOR                             │
    │                                                                             │
    │   SCENARIO: Same 60% RH at two different temperatures                     │
    │                                                                             │
    │   AT 65°F (18°C), 60% RH            AT 85°F (29°C), 60% RH                │
    │   ════════════════════════            ════════════════════════             │
    │                                                                             │
    │   VPD = 0.62 kPa                     VPD = 1.36 kPa                        │
    │   (Low transpiration)                (High transpiration)                  │
    │                                                                             │
    │   The plant experiences these        VERY differently!                    │
    │                                                                             │
    │   ─────────────────────────────────────────────────────────────────────   │
    │                                                                             │
    │   VPD ACCOUNTS FOR TEMPERATURE!                                           │
    │   ═════════════════════════════                                            │
    │                                                                             │
    │   RH alone tells you about the air.                                       │
    │   VPD tells you what the PLANT experiences.                               │
    │                                                                             │
    │   Plants respond to VPD, not RH directly!                                 │
    │                                                                             │
    └─────────────────────────────────────────────────────────────────────────────┘
```

### VPD Reference Chart

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                                                                           ║
║                         VPD QUICK REFERENCE CHART                         ║
║                                                                           ║
║   Temperature →                                                           ║
║       ↓ RH      65°F    70°F    75°F    80°F    85°F    90°F             ║
║                 18°C    21°C    24°C    27°C    29°C    32°C             ║
║   ─────────────────────────────────────────────────────────────────────  ║
║                                                                           ║
║     40%         1.24    1.41    1.60    1.81    2.05    2.31   TOO HIGH  ║
║                  ██      ██      ██      ██      ██      ██              ║
║                                                                           ║
║     50%         1.03    1.17    1.33    1.51    1.71    1.93   HIGH      ║
║                  ▓▓      ▓▓      ▓▓      ██      ██      ██              ║
║                                                                           ║
║     60%         0.83    0.94    1.07    1.21    1.37    1.54   OPTIMAL   ║
║                  ▒▒      ▒▒      ▓▓      ▓▓      ▓▓      ██    (flower)  ║
║                                                                           ║
║     70%         0.62    0.70    0.80    0.90    1.02    1.16   OPTIMAL   ║
║                  ░░      ▒▒      ▒▒      ▒▒      ▓▓      ▓▓    (veg)     ║
║                                                                           ║
║     80%         0.41    0.47    0.53    0.60    0.68    0.77   LOW       ║
║                  ░░      ░░      ░░      ▒▒      ▒▒      ▒▒    (clones)  ║
║                                                                           ║
║     90%         0.21    0.23    0.27    0.30    0.34    0.39   TOO LOW   ║
║                  ░░      ░░      ░░      ░░      ░░      ░░              ║
║                                                                           ║
║   ─────────────────────────────────────────────────────────────────────  ║
║   KEY:  ░░ = Low (0.4-0.8)  ▒▒ = Optimal (0.8-1.2)                       ║
║         ▓▓ = High (1.2-1.5)  ██ = Very High (>1.5)                       ║
║                                                                           ║
╚═══════════════════════════════════════════════════════════════════════════╝
```

### VPD Targets by Growth Stage

```
    ┌─────────────────────────────────────────────────────────────────────────────┐
    │                                                                             │
    │                    VPD TARGETS BY GROWTH STAGE                             │
    │                                                                             │
    │   VPD (kPa)   0.4   0.6   0.8   1.0   1.2   1.4   1.6   1.8              │
    │               │     │     │     │     │     │     │     │                 │
    │                                                                             │
    │   PROPAGATION/CLONES                                                       │
    │               [████████████]                                               │
    │                  0.4-0.8 kPa                                               │
    │               Roots developing, minimize stress                            │
    │                                                                             │
    │   SEEDLINGS                                                                │
    │                    [████████████]                                          │
    │                       0.5-0.9 kPa                                          │
    │               Young plants, building root system                           │
    │                                                                             │
    │   VEGETATIVE GROWTH                                                        │
    │                         [████████████████]                                 │
    │                            0.8-1.2 kPa                                     │
    │               Active growth, driving nutrient uptake                       │
    │                                                                             │
    │   EARLY FLOWERING                                                          │
    │                              [████████████████]                            │
    │                                 1.0-1.4 kPa                                │
    │               Transition, moderate transpiration                           │
    │                                                                             │
    │   LATE FLOWERING/FRUITING                                                  │
    │                                   [████████████████]                       │
    │                                      1.2-1.6 kPa                           │
    │               Lower humidity for disease prevention                        │
    │               Higher VPD for flavor/quality                                │
    │                                                                             │
    └─────────────────────────────────────────────────────────────────────────────┘
```

---

## Humidification Systems

### When to Add Humidity

- VPD too high (plants stressed, stomata closing)
- Very dry climates or seasons
- Propagation areas with cuttings
- Seedling areas

### Humidification Options

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                                                                           ║
║                    HUMIDIFICATION SYSTEM COMPARISON                       ║
║                                                                           ║
║   ┌───────────────┬─────────────┬─────────────┬─────────────────────┐    ║
║   │ TYPE          │ OUTPUT      │ COST        │ NOTES               │    ║
║   ├───────────────┼─────────────┼─────────────┼─────────────────────┤    ║
║   │ Ultrasonic    │ Cool mist   │ $           │ • Quiet operation   │    ║
║   │ (cool mist)   │ Medium      │             │ • Can leave mineral │    ║
║   │               │             │             │   deposits          │    ║
║   │               │             │             │ • Use distilled H₂O │    ║
║   ├───────────────┼─────────────┼─────────────┼─────────────────────┤    ║
║   │ Evaporative   │ Cool        │ $           │ • No mineral dust   │    ║
║   │ (wick type)   │ Low-Medium  │             │ • Filter needs      │    ║
║   │               │             │             │   replacement       │    ║
║   │               │             │             │ • Good for small    │    ║
║   ├───────────────┼─────────────┼─────────────┼─────────────────────┤    ║
║   │ Steam/Warm    │ Warm mist   │ $$          │ • Sterile output    │    ║
║   │ Mist          │ Medium-High │             │ • Adds some heat    │    ║
║   │               │             │             │ • No mineral dust   │    ║
║   ├───────────────┼─────────────┼─────────────┼─────────────────────┤    ║
║   │ High-Pressure │ Fine mist   │ $$$         │ • Commercial grade  │    ║
║   │ Fog           │ Very High   │             │ • Very fine droplet │    ║
║   │               │             │             │ • Can also cool     │    ║
║   ├───────────────┼─────────────┼─────────────┼─────────────────────┤    ║
║   │ Wet Wall      │ Cool humid  │ $$          │ • Part of cooling   │    ║
║   │ (Evap cooler) │ Very High   │             │   system            │    ║
║   │               │             │             │ • Greenhouse only   │    ║
║   └───────────────┴─────────────┴─────────────┴─────────────────────┘    ║
║                                                                           ║
╚═══════════════════════════════════════════════════════════════════════════╝
```

---

## Dehumidification Systems

### When to Remove Humidity

- VPD too low (disease risk, poor transpiration)
- Night-time when temps drop and RH spikes
- Flowering/fruiting stages
- After irrigation events
- Dense canopy conditions

### Dehumidification Methods

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                                                                           ║
║                    DEHUMIDIFICATION OPTIONS                               ║
║                                                                           ║
║   METHOD              HOW IT WORKS                  BEST FOR              ║
║   ═══════════════════════════════════════════════════════════════════════ ║
║                                                                           ║
║   VENTILATION         Exchange humid inside air     Greenhouses,          ║
║   (exhaust fans)      with drier outside air        simple setups         ║
║                       ↓ Cost, ↓ Control             Free when conditions  ║
║                                                     allow                 ║
║                                                                           ║
║   ─────────────────────────────────────────────────────────────────────  ║
║                                                                           ║
║   AIR CONDITIONING    Cools air below dew point,    Sealed rooms,        ║
║   (mini-splits)       condensing water              year-round           ║
║                       Provides cooling + dehum      Moderate capacity    ║
║                                                                           ║
║   ─────────────────────────────────────────────────────────────────────  ║
║                                                                           ║
║   STANDALONE          Draws air across cold coils,  High humidity        ║
║   DEHUMIDIFIER        water condenses and drains    situations,          ║
║                       Adds heat to room!            sealed rooms         ║
║                       High capacity available       Night use            ║
║                                                                           ║
║   ─────────────────────────────────────────────────────────────────────  ║
║                                                                           ║
║   DESICCANT           Uses material that absorbs    Industrial,          ║
║   DEHUMIDIFIER        moisture (silica gel, etc.)   low temp operation   ║
║                       Works at any temperature      Expensive but        ║
║                       Very energy efficient         effective            ║
║                                                                           ║
╚═══════════════════════════════════════════════════════════════════════════╝
```

### Dehumidifier Sizing

```
    ┌─────────────────────────────────────────────────────────────────────────────┐
    │                                                                             │
    │                    DEHUMIDIFIER SIZING GUIDE                               │
    │                                                                             │
    │   RULE OF THUMB:                                                           │
    │   ══════════════                                                           │
    │   2-4 pints/day capacity per 100 sq ft of canopy                          │
    │                                                                             │
    │   FACTORS THAT INCREASE NEED:                                             │
    │   • More plants (more transpiration)                                      │
    │   • Larger plants (more leaf area)                                        │
    │   • Higher temps (more transpiration)                                     │
    │   • More frequent irrigation                                              │
    │   • Sealed room (no ventilation)                                          │
    │                                                                             │
    │   SIZING EXAMPLE:                                                          │
    │   ═══════════════                                                          │
    │                                                                             │
    │   1,000 sq ft room with dense canopy                                      │
    │   High transpiration conditions                                           │
    │                                                                             │
    │   1,000 sq ft × 4 pints/100 sq ft = 40 pints/day                         │
    │                                                                             │
    │   Select: 50-70 pint/day dehumidifier (with margin)                       │
    │   OR: Two 30-pint units for redundancy                                    │
    │                                                                             │
    │   ⚠️  DEHUMIDIFIERS ADD HEAT!                                             │
    │   A 70-pint unit adds ~1,000-1,500 BTU/hr to the room                     │
    │   Factor this into cooling calculations                                   │
    │                                                                             │
    └─────────────────────────────────────────────────────────────────────────────┘
```

---

## Disease Prevention Through Humidity

### The Disease Triangle

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                                                                           ║
║                    THE DISEASE TRIANGLE                                   ║
║                                                                           ║
║   All three must be present for disease to occur:                        ║
║                                                                           ║
║                         SUSCEPTIBLE                                       ║
║                           HOST                                            ║
║                          ╱    ╲                                           ║
║                         ╱      ╲                                          ║
║                        ╱ DISEASE ╲                                        ║
║                       ╱  OCCURS!  ╲                                       ║
║                      ╱──────────────╲                                     ║
║                     ╱                ╲                                    ║
║               PATHOGEN ──────────── FAVORABLE                             ║
║               PRESENT              ENVIRONMENT                            ║
║                                                                           ║
║   ENVIRONMENTAL CONTROL focuses on breaking the third leg!               ║
║                                                                           ║
║   HIGH HUMIDITY CONDITIONS FAVOR:                                        ║
║   • Botrytis (gray mold): RH > 85%, free water                          ║
║   • Powdery mildew: RH 50-90%, swings problematic                       ║
║   • Downy mildew: RH > 85%, leaf wetness                                ║
║   • Pythium: Saturated conditions, cold or hot temps                    ║
║                                                                           ║
╚═══════════════════════════════════════════════════════════════════════════╝
```

### Prevention Strategies

```
    ┌─────────────────────────────────────────────────────────────────────────────┐
    │                                                                             │
    │              HUMIDITY MANAGEMENT FOR DISEASE PREVENTION                    │
    │                                                                             │
    │   KEY STRATEGIES:                                                          │
    │   ═══════════════                                                          │
    │                                                                             │
    │   1. PREVENT DEW POINT CONDITIONS                                          │
    │      ─────────────────────────────                                         │
    │      • Keep leaf surface above dew point                                   │
    │      • Don't let surfaces get wet (condensation)                          │
    │      • Heat and circulate air at night                                    │
    │                                                                             │
    │   2. MAINTAIN AIRFLOW                                                      │
    │      ──────────────────                                                    │
    │      • Break up humid microclimates                                       │
    │      • Dry leaf surfaces quickly                                          │
    │      • HAF (Horizontal Air Flow) fans essential                           │
    │                                                                             │
    │   3. IRRIGATE SMART                                                        │
    │      ──────────────────                                                    │
    │      • Water early so plants dry before dark                              │
    │      • Avoid overhead irrigation if possible                              │
    │      • Don't over-irrigate (soil evaporation)                             │
    │                                                                             │
    │   4. MANAGE NIGHT-TIME                                                     │
    │      ─────────────────────                                                 │
    │      • Most dangerous time for disease                                    │
    │      • Temperature drops, RH spikes                                       │
    │      • Run dehumidifiers and fans                                         │
    │      • Consider brief heating to lower RH                                 │
    │                                                                             │
    │   5. TARGET VPD WINDOWS                                                    │
    │      ─────────────────────                                                 │
    │      • Late flower: VPD 1.2-1.5 kPa (lower RH)                            │
    │      • Avoid prolonged periods above 80% RH                               │
    │                                                                             │
    └─────────────────────────────────────────────────────────────────────────────┘
```

---

## Integrated Humidity Management

### System Integration

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                                                                           ║
║              INTEGRATED HUMIDITY CONTROL SYSTEM                           ║
║                                                                           ║
║   ┌─────────────────────────────────────────────────────────────────┐    ║
║   │                                                                 │    ║
║   │                    ENVIRONMENTAL CONTROLLER                     │    ║
║   │                           ┌───┐                                │    ║
║   │                           │CPU│                                │    ║
║   │                           └─┬─┘                                │    ║
║   │              ┌──────────────┼──────────────┐                   │    ║
║   │              │              │              │                   │    ║
║   │              ▼              ▼              ▼                   │    ║
║   │         ┌────────┐    ┌────────┐    ┌────────┐               │    ║
║   │         │  TEMP  │    │   RH   │    │  VPD   │  ← SENSORS    │    ║
║   │         │ SENSOR │    │ SENSOR │    │ CALC   │               │    ║
║   │         └────────┘    └────────┘    └────────┘               │    ║
║   │                                                                 │    ║
║   │   CONTROLLER MANAGES:                                          │    ║
║   │   ═══════════════════                                          │    ║
║   │                                                                 │    ║
║   │   VPD too LOW?        VPD too HIGH?         VPD in range?     │    ║
║   │        │                    │                     │            │    ║
║   │        ▼                    ▼                     ▼            │    ║
║   │   ┌─────────┐         ┌─────────┐          ┌─────────┐       │    ║
║   │   │ DEHUM   │         │ HUMIDIFY│          │MAINTAIN │       │    ║
║   │   │   ON    │         │   ON    │          │ CURRENT │       │    ║
║   │   │ HEAT?   │         │ VENT?   │          │ SETTINGS│       │    ║
║   │   └─────────┘         └─────────┘          └─────────┘       │    ║
║   │                                                                 │    ║
║   └─────────────────────────────────────────────────────────────────┘    ║
║                                                                           ║
╚═══════════════════════════════════════════════════════════════════════════╝
```

---

## Troubleshooting Humidity Problems

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                                                                           ║
║                    HUMIDITY TROUBLESHOOTING GUIDE                         ║
║                                                                           ║
║   PROBLEM                POSSIBLE CAUSE           SOLUTION                ║
║   ═══════════════════════════════════════════════════════════════════════ ║
║                                                                           ║
║   Can't lower RH         • Undersized dehum       • Add capacity         ║
║                          • Poor drainage          • Drain condensate     ║
║                          • Leaky room             • Seal room better     ║
║                          • Over-irrigating        • Reduce watering      ║
║                                                                           ║
║   Can't raise RH         • Too much ventilation   • Reduce exhaust       ║
║                          • Undersized humidifier  • Add capacity         ║
║                          • Air too hot            • Cool air first       ║
║                          • Humidifier dry         • Fill reservoir       ║
║                                                                           ║
║   RH swings wildly       • On/off equipment       • Use variable speed   ║
║                          • Poor sensor placement  • Relocate sensors     ║
║                          • Irrigation events      • Water earlier        ║
║                          • Day/night transitions  • Pre-empt with control║
║                                                                           ║
║   Condensation on        • Surface below dew pt   • Insulate surfaces    ║
║   walls/equipment        • Poor circulation       • Add HAF fans         ║
║                          • Night temp drop        • Maintain overnight   ║
║                                                                           ║
║   High RH at night       • No dehumidification    • Run dehum at night   ║
║   only                   • Temp drop              • Add slight heat      ║
║                          • No air movement        • Run fans 24/7        ║
║                                                                           ║
╚═══════════════════════════════════════════════════════════════════════════╝
```

---

## Module Summary

### Key Takeaways

1. **Relative humidity** changes with temperature - warm air holds more moisture
2. **VPD** is superior to RH because it tells you what the plant experiences
3. **VPD targets** change by growth stage: low for clones, higher for flowering
4. **Humidification** needed in dry conditions or propagation
5. **Dehumidification** critical for disease prevention, especially at night
6. **Airflow** is essential for humidity management and disease prevention

### Preview of Module 4

Next, we'll explore lighting systems:
- HID vs LED technology comparison
- Light spectrum and plant response
- PPFD mapping and fixture layout
- Photoperiod control strategies
- Supplemental vs sole-source lighting

---

## Knowledge Check

1. Why does relative humidity rise when temperature drops?
2. What VPD range is optimal for vegetative growth?
3. Why do dehumidifiers add heat to a room?
4. At what conditions does Botrytis thrive?
5. How do you calculate dehumidifier sizing for a grow room?

---

*EcoFusion Academy - Course 105: Environmental Control Systems - Module 3*

