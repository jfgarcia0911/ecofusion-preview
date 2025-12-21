# Module 5: CO₂ Enrichment & Air Quality
## Course 105: Environmental Control Systems

---

## Learning Objectives

By the end of this module, you will be able to:
- Explain the role of CO₂ in photosynthesis
- Determine when CO₂ enrichment is beneficial
- Compare different CO₂ delivery methods
- Implement safe CO₂ handling practices
- Integrate CO₂ management with ventilation
- Calculate ROI for CO₂ enrichment

---

## CO₂ and Photosynthesis

### The CO₂ Relationship

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                                                                           ║
║                    CO₂ IN PHOTOSYNTHESIS                                  ║
║                                                                           ║
║   PHOTOSYNTHESIS SIMPLIFIED:                                             ║
║                                                                           ║
║   6CO₂ + 6H₂O + LIGHT ENERGY → C₆H₁₂O₆ + 6O₂                            ║
║                                                                           ║
║   Carbon    Water    Light      Sugar     Oxygen                         ║
║   Dioxide                       (food)    (released)                     ║
║                                                                           ║
║   CO₂ is a RAW MATERIAL for making plant food!                          ║
║   More CO₂ (up to a point) = more potential photosynthesis              ║
║                                                                           ║
║   ─────────────────────────────────────────────────────────────────────  ║
║                                                                           ║
║   PHOTOSYNTHESIS RATE vs. CO₂ CONCENTRATION                              ║
║                                                                           ║
║   Rate │                              ╭─────────────────                  ║
║        │                           ╱╱╱                                    ║
║        │                        ╱╱╱   ← Saturation point                 ║
║        │                     ╱╱╱        (diminishing returns)            ║
║        │                  ╱╱╱                                             ║
║        │               ╱╱╱                                                ║
║        │            ╱╱╱                                                   ║
║        │         ╱╱╱                                                      ║
║        │      ╱╱╱    ← Steep increase zone                               ║
║        │   ╱╱╱                                                            ║
║        │╱╱╱                                                               ║
║        └──────┬──────┬──────┬──────┬──────┬──────                        ║
║             200    400    800   1200   1500   ppm                        ║
║                     │                   │                                 ║
║                  Normal              Enriched                             ║
║                  Outdoor             Target                               ║
║                                                                           ║
╚═══════════════════════════════════════════════════════════════════════════╝
```

### CO₂ Levels Reference

| Level (ppm) | Source/Condition | Effect on Plants |
|-------------|------------------|------------------|
| 200-280 | Pre-industrial atmosphere | Photosynthesis limited |
| 400-420 | Current outdoor air | Baseline |
| 600-800 | Light depletion in grow rooms | Reduced growth |
| 1000-1200 | Moderate enrichment | 20-30% growth increase |
| 1200-1500 | Optimal enrichment | Maximum benefit |
| >1500 | Excessive | Diminishing returns, waste |
| >2000 | Very high | Potential plant stress |
| >5000 | Dangerous | Human health risk |

---

## When to Enrich

### Prerequisites for CO₂ Enrichment

```
    ┌─────────────────────────────────────────────────────────────────────────────┐
    │                                                                             │
    │              CO₂ ENRICHMENT DECISION CHECKLIST                             │
    │                                                                             │
    │   CO₂ enrichment is ONLY beneficial when these conditions are met:        │
    │                                                                             │
    │   □ ADEQUATE LIGHT                                                         │
    │     ─────────────────                                                      │
    │     PPFD > 600 μmol/m²/s                                                  │
    │     Plants need light to USE the extra CO₂                                │
    │     Low light + high CO₂ = wasted money                                   │
    │                                                                             │
    │   □ OPTIMAL TEMPERATURE                                                    │
    │     ─────────────────────                                                  │
    │     Can run 5-10°F warmer with elevated CO₂                               │
    │     Photosynthesis rate increases with CO₂ + temperature                  │
    │                                                                             │
    │   □ ADEQUATE NUTRITION                                                     │
    │     ────────────────────                                                   │
    │     Plants grow faster, need more nutrients                               │
    │     Increase feeding to match increased growth                            │
    │                                                                             │
    │   □ PROPER VPD                                                             │
    │     ────────────                                                           │
    │     Stomata must be open to take in CO₂                                   │
    │     VPD too high = stomata closed = CO₂ wasted                            │
    │                                                                             │
    │   □ SEALED OR CONTROLLED ENVIRONMENT                                       │
    │     ───────────────────────────────────                                    │
    │     CO₂ escapes quickly with ventilation                                  │
    │     Best in sealed rooms with AC                                          │
    │                                                                             │
    │   ⚠️  If ANY of these are not met, enrichment may not be worthwhile!     │
    │                                                                             │
    └─────────────────────────────────────────────────────────────────────────────┘
```

---

## CO₂ Delivery Methods

### Method Comparison

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                                                                           ║
║                    CO₂ DELIVERY METHODS                                   ║
║                                                                           ║
║   ┌─────────────────┬──────────────┬──────────────┬──────────────────┐   ║
║   │ METHOD          │ COST         │ PURITY       │ BEST FOR         │   ║
║   ├─────────────────┼──────────────┼──────────────┼──────────────────┤   ║
║   │ Compressed      │ $$ per fill  │ 100% pure    │ Small-medium     │   ║
║   │ CO₂ Tanks       │ $ equipment  │ No byproducts│ sealed rooms     │   ║
║   ├─────────────────┼──────────────┼──────────────┼──────────────────┤   ║
║   │ CO₂ Burners     │ $ per BTU    │ ~99% CO₂     │ Large spaces     │   ║
║   │ (Propane/NG)    │ $$ equipment │ +Heat +H₂O   │ Winter heating   │   ║
║   ├─────────────────┼──────────────┼──────────────┼──────────────────┤   ║
║   │ Liquid CO₂      │ $ per lb     │ 100% pure    │ Commercial       │   ║
║   │ (Bulk tanks)    │ $$$ install  │ No byproducts│ Large operations │   ║
║   ├─────────────────┼──────────────┼──────────────┼──────────────────┤   ║
║   │ Fermentation    │ $ ongoing    │ Variable     │ Small hobby,     │   ║
║   │ (DIY/bags)      │ $ equipment  │ Low output   │ budget grows     │   ║
║   └─────────────────┴──────────────┴──────────────┴──────────────────┘   ║
║                                                                           ║
╚═══════════════════════════════════════════════════════════════════════════╝
```

### Compressed CO₂ Tanks

```
    ┌─────────────────────────────────────────────────────────────────────────────┐
    │                                                                             │
    │                    COMPRESSED CO₂ SYSTEM                                   │
    │                                                                             │
    │                         ┌─────┐                                            │
    │                         │TIMER│                                            │
    │                         └──┬──┘                                            │
    │                            │                                                │
    │      ┌─────────┐       ┌───┴───┐       ┌─────────────────┐                │
    │      │   CO₂   │ ───── │REGUL- │ ───── │   SOLENOID      │                │
    │      │  TANK   │       │ ATOR  │       │   VALVE         │                │
    │      │  (50lb) │       │(preset│       │  (opens when    │                │
    │      │         │       │  PSI) │       │   called)       │                │
    │      └─────────┘       └───────┘       └────────┬────────┘                │
    │                                                 │                          │
    │                                        ┌────────┴────────┐                │
    │                                        │  DISTRIBUTION   │                │
    │                                        │   TUBING        │                │
    │                                        └─────────────────┘                │
    │                                                                             │
    │   COMPONENTS:                                                              │
    │   ════════════                                                             │
    │   • CO₂ Tank (20-50 lb typical)                                           │
    │   • Regulator (reduces tank pressure)                                     │
    │   • Solenoid valve (electric on/off)                                      │
    │   • Timer or controller                                                   │
    │   • Distribution tubing                                                   │
    │                                                                             │
    │   TANK SIZE GUIDE (1000 sq ft, 1500 ppm target):                          │
    │   ─────────────────────────────────────────────                            │
    │   • 20 lb tank: ~2 weeks                                                  │
    │   • 50 lb tank: ~5 weeks                                                  │
    │   • Depends on room tightness and ventilation                             │
    │                                                                             │
    └─────────────────────────────────────────────────────────────────────────────┘
```

### CO₂ Burners/Generators

```
    ┌─────────────────────────────────────────────────────────────────────────────┐
    │                                                                             │
    │                    CO₂ BURNER/GENERATOR                                    │
    │                                                                             │
    │                      ┌─────────────────┐                                   │
    │                      │  🔥 🔥 🔥 🔥 🔥  │                                   │
    │                      │    BURNER       │                                   │
    │                      │                 │                                   │
    │                      └────────┬────────┘                                   │
    │                               │                                            │
    │              ┌────────────────┼────────────────┐                          │
    │              │                │                │                          │
    │              ▼                ▼                ▼                          │
    │           CO₂            HEAT           WATER VAPOR                       │
    │                                                                             │
    │   Propane/Natural Gas + Oxygen → CO₂ + H₂O + Heat                        │
    │                                                                             │
    │   ADVANTAGES:                      DISADVANTAGES:                         │
    │   ════════════                      ═══════════════                        │
    │   • Lower cost per CO₂ unit        • Adds significant heat                │
    │   • No tank refills                • Adds humidity                        │
    │   • Good for large spaces          • Requires gas line                    │
    │   • Doubles as heater              • Fire/safety considerations           │
    │   • High output available          • Incomplete combustion risk           │
    │                                                                             │
    │   SIZING:                                                                  │
    │   ════════                                                                 │
    │   ~1 lb CO₂ per 1 lb propane burned                                       │
    │   8-burner unit: ~3 lb CO₂/hr output                                      │
    │                                                                             │
    │   IMPORTANT: Only use burners rated for indoor/grow use!                  │
    │   Must have safety shutoff and proper combustion                          │
    │                                                                             │
    └─────────────────────────────────────────────────────────────────────────────┘
```

---

## CO₂ Control Strategies

### Control Methods

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                                                                           ║
║                    CO₂ CONTROL STRATEGIES                                 ║
║                                                                           ║
║   TIMER-BASED (Simple)                                                   ║
║   ════════════════════                                                    ║
║                                                                           ║
║   ON for X minutes every Y hours during lights-on                        ║
║   + Cheap, simple                                                        ║
║   - Imprecise, may over/under supply                                     ║
║   - Wastes CO₂ during ventilation                                        ║
║                                                                           ║
║   SENSOR-CONTROLLED (Recommended)                                        ║
║   ════════════════════════════════                                        ║
║                                                                           ║
║   ┌───────────────────────────────────────────────────────────────────┐  ║
║   │                                                                   │  ║
║   │         CO₂ SENSOR                                               │  ║
║   │             │                                                     │  ║
║   │             ▼                                                     │  ║
║   │       CONTROLLER                                                  │  ║
║   │         ╱     ╲                                                   │  ║
║   │        ╱       ╲                                                  │  ║
║   │       ▼         ▼                                                 │  ║
║   │   CO₂ ON    CO₂ OFF                                              │  ║
║   │   (if below  (if above                                           │  ║
║   │   setpoint)  setpoint)                                           │  ║
║   │                                                                   │  ║
║   └───────────────────────────────────────────────────────────────────┘  ║
║                                                                           ║
║   + Maintains precise level                                              ║
║   + Efficient - no waste                                                 ║
║   + Can integrate with ventilation                                       ║
║   - Higher equipment cost                                                ║
║                                                                           ║
╚═══════════════════════════════════════════════════════════════════════════╝
```

### Ventilation Integration

```
    ┌─────────────────────────────────────────────────────────────────────────────┐
    │                                                                             │
    │              CO₂ AND VENTILATION INTEGRATION                               │
    │                                                                             │
    │   THE CONFLICT:                                                            │
    │   ══════════════                                                           │
    │   • Ventilation removes CO₂                                               │
    │   • Sealed rooms can overheat without ventilation                         │
    │   • Must balance CO₂ retention with temperature control                   │
    │                                                                             │
    │   STRATEGY 1: SEALED ROOM + AC                                            │
    │   ───────────────────────────────                                          │
    │   • No ventilation = CO₂ stays                                            │
    │   • Air conditioning handles cooling                                      │
    │   • Dehumidifier handles humidity                                         │
    │   • Most efficient for CO₂                                                │
    │   • Higher equipment cost                                                 │
    │                                                                             │
    │   STRATEGY 2: ENRICHMENT + VENTILATION                                    │
    │   ──────────────────────────────────────                                   │
    │   • CO₂ ON when vents CLOSED                                              │
    │   • Vents OPEN only when needed (heat)                                    │
    │   • CO₂ OFF during ventilation                                            │
    │   • Less efficient, but simpler                                           │
    │                                                                             │
    │   PRIORITY LOGIC:                                                          │
    │   ═══════════════                                                          │
    │                                                                             │
    │   IF Temperature > max setpoint:                                          │
    │       → VENTILATION ON, CO₂ OFF                                           │
    │   ELSE IF CO₂ < setpoint:                                                 │
    │       → CO₂ ON, VENTILATION OFF                                           │
    │   ELSE:                                                                    │
    │       → MAINTAIN (both may be off)                                        │
    │                                                                             │
    └─────────────────────────────────────────────────────────────────────────────┘
```

---

## Safety Considerations

### CO₂ Safety

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                                                                           ║
║              ⚠️  CO₂ SAFETY GUIDELINES  ⚠️                               ║
║                                                                           ║
║   CO₂ EXPOSURE EFFECTS ON HUMANS:                                        ║
║   ═════════════════════════════════                                       ║
║                                                                           ║
║   LEVEL (ppm)    EFFECT                                                  ║
║   ─────────────────────────────────────────────────────────────────────  ║
║   400-1000       Normal, safe (outdoor to office levels)                 ║
║   1000-2000      Drowsiness may occur with prolonged exposure           ║
║   2000-5000      Headaches, sleepiness, poor concentration              ║
║   5000+          OSHA workplace limit - do not exceed                    ║
║   40,000+        Immediately dangerous to life (IDLH)                   ║
║   100,000+       Loss of consciousness, death                            ║
║                                                                           ║
║   SAFETY RULES:                                                          ║
║   ═════════════                                                          ║
║                                                                           ║
║   □ Install CO₂ alarm/monitor at working height                         ║
║   □ Never enter enriched space without checking levels first            ║
║   □ Ensure adequate ventilation before entry                            ║
║   □ CO₂ is heavier than air - settles low (check low areas)            ║
║   □ Keep tanks secured and upright                                      ║
║   □ Check for leaks regularly (soap water test)                         ║
║   □ Ensure proper combustion with burners                               ║
║   □ Have fire extinguisher nearby for burner systems                    ║
║                                                                           ║
║   EMERGENCY: If symptoms occur, leave area immediately!                  ║
║              Fresh air reverses CO₂ effects quickly                     ║
║                                                                           ║
╚═══════════════════════════════════════════════════════════════════════════╝
```

---

## Cost-Benefit Analysis

### ROI Calculation

```
    ┌─────────────────────────────────────────────────────────────────────────────┐
    │                                                                             │
    │                    CO₂ ENRICHMENT ROI ANALYSIS                             │
    │                                                                             │
    │   SCENARIO: 1,000 sq ft flowering room                                    │
    │   Crop: High-value, 4 cycles per year                                     │
    │   Current yield: 2 lbs/light (10 lights)                                  │
    │   Value: $500/lb                                                          │
    │                                                                             │
    │   COSTS:                                                                   │
    │   ═══════                                                                  │
    │   Equipment (one-time):                                                   │
    │   • CO₂ controller + sensor      $300                                     │
    │   • Regulator + solenoid         $150                                     │
    │   • Tank (refundable deposit)    $100                                     │
    │   • Tubing, fittings             $50                                      │
    │   TOTAL EQUIPMENT:               $600                                     │
    │                                                                             │
    │   Ongoing (annual):                                                       │
    │   • CO₂ refills (~50 lb × 20)    $1,000                                   │
    │   TOTAL ANNUAL OPERATING:        $1,000                                   │
    │                                                                             │
    │   BENEFITS:                                                               │
    │   ═════════                                                               │
    │   Expected yield increase: 25% (conservative)                             │
    │   Additional yield: 2 lbs × 10 lights × 0.25 = 5 lbs/cycle               │
    │   Annual additional: 5 lbs × 4 cycles = 20 lbs                           │
    │   Additional revenue: 20 lbs × $500 = $10,000                            │
    │                                                                             │
    │   ROI:                                                                     │
    │   ═════                                                                    │
    │   Year 1: $10,000 - $1,600 = $8,400 profit                               │
    │   Year 2+: $10,000 - $1,000 = $9,000 profit/year                         │
    │                                                                             │
    │   PAYBACK: Equipment paid off in < 1 month!                               │
    │                                                                             │
    └─────────────────────────────────────────────────────────────────────────────┘
```

---

## Module Summary

### Key Takeaways

1. **CO₂ is essential** for photosynthesis - it's a raw material for making sugar
2. **Enrichment benefits** depend on adequate light, temperature, and nutrition
3. **Tanks vs burners** - tanks are cleaner, burners add heat
4. **Sensor control** is more efficient than timer-based dosing
5. **Safety first** - CO₂ can be dangerous at high concentrations
6. **ROI is excellent** when conditions support enrichment

### Preview of Module 6

Next, we'll explore ventilation and airflow:
- Passive vs active ventilation
- Air exchange calculations
- HAF (horizontal air flow) systems
- Intake and exhaust design
- Air filtration and pest prevention

---

## Knowledge Check

1. At what PPFD level does CO₂ enrichment become beneficial?
2. What byproducts do CO₂ burners produce besides CO₂?
3. Why should CO₂ be turned off during ventilation events?
4. What is the OSHA workplace limit for CO₂ exposure?
5. Calculate the expected yield increase from CO₂ enrichment at 25% improvement.

---

*EcoFusion Academy - Course 105: Environmental Control Systems - Module 5*

