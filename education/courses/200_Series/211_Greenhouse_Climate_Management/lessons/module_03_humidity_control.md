# Module 3: Humidity Control
## Course 211: Greenhouse Climate Management

---

## Learning Objectives

By the end of this module, you will be able to:
1. Distinguish between absolute and relative humidity
2. Manage VPD for optimal plant growth
3. Select and implement humidification systems
4. Control excessive humidity and prevent disease
5. Balance humidity with other climate parameters
6. Calculate moisture addition and removal requirements

---

## Introduction

Humidity management is one of the most challenging aspects of greenhouse climate control. Too little humidity causes plant stress and wilting; too much invites disease and poor growth. The key is understanding that humidity doesn't exist in isolation—it's intimately linked to temperature, ventilation, and plant transpiration. This module provides the knowledge to master humidity control.

---

## Understanding Humidity

### Absolute vs. Relative Humidity

```
╔═══════════════════════════════════════════════════════════════════════╗
║                                                                       ║
║              ABSOLUTE vs RELATIVE HUMIDITY                            ║
║                                                                       ║
║   ABSOLUTE HUMIDITY                                                   ║
║   ═══════════════════                                                 ║
║   Actual amount of water vapor in air (grams/cubic meter)            ║
║   CONSTANT regardless of temperature                                 ║
║                                                                       ║
║   Example: 10 g/m³ remains 10 g/m³ whether warm or cold              ║
║                                                                       ║
║   ─────────────────────────────────────────────────────────────────   ║
║                                                                       ║
║   RELATIVE HUMIDITY (RH)                                              ║
║   ════════════════════════                                            ║
║   Percentage of maximum water vapor air CAN hold at that temp        ║
║   CHANGES with temperature even if moisture stays same               ║
║                                                                       ║
║   RH = (Actual vapor / Maximum possible vapor) × 100                 ║
║                                                                       ║
║   ─────────────────────────────────────────────────────────────────   ║
║                                                                       ║
║   CRITICAL CONCEPT: TEMPERATURE-HUMIDITY RELATIONSHIP                 ║
║                                                                       ║
║   Same amount of moisture, different temperatures:                    ║
║                                                                       ║
║   60°F: Holds max 11 g/m³   │   If air has 8 g/m³:                  ║
║                             │   RH = 8/11 = 73%                      ║
║                             │                                         ║
║   70°F: Holds max 16 g/m³   │   If air has 8 g/m³:                  ║
║                             │   RH = 8/16 = 50%                      ║
║                             │                                         ║
║   80°F: Holds max 23 g/m³   │   If air has 8 g/m³:                  ║
║                             │   RH = 8/23 = 35%                      ║
║                                                                       ║
║   SAME MOISTURE → DIFFERENT RH DUE TO TEMPERATURE                     ║
║                                                                       ║
║   This is why heating lowers RH and cooling raises RH!               ║
║                                                                       ║
╚═══════════════════════════════════════════════════════════════════════╝
```

### Dew Point

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│                          DEW POINT                                  │
│                                                                     │
│   The temperature at which air becomes saturated (100% RH)          │
│   and condensation begins                                          │
│                                                                     │
│   Example:                                                          │
│   Current conditions: 70°F, 60% RH                                  │
│   Dew point: 55°F                                                   │
│                                                                     │
│   If any surface drops below 55°F → CONDENSATION                    │
│                                                                     │
│   ┌─────────────────────────────────────────────────────────┐      │
│   │  Air temp: 70°F                                         │      │
│   │  RH: 60%            No condensation                     │      │
│   │                                                         │      │
│   │  ╔══════════╗  ← Cold surface: 50°F                     │      │
│   │  ║💧💧💧💧  ║    (Below dew point)                       │      │
│   │  ║          ║    CONDENSATION FORMS                     │      │
│   │  ╚══════════╝                                           │      │
│   └─────────────────────────────────────────────────────────┘      │
│                                                                     │
│   GREENHOUSE IMPLICATIONS:                                          │
│   • Single-pane glass gets cold → condensation/drip               │
│   • Cold irrigation pipes → condensation/algae                     │
│   • Poor heating → cold spots → disease pressure                   │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## VPD Management in Detail

### VPD Zones for Plant Growth

```
╔═══════════════════════════════════════════════════════════════════════╗
║                                                                       ║
║                    VPD MANAGEMENT STRATEGY                            ║
║                                                                       ║
║   VPD Range          Plant Response          Action                  ║
║   ═══════════════════════════════════════════════════════════════════ ║
║                                                                       ║
║   < 0.4 kPa          ░░ TOO LOW                                       ║
║   (too humid)        • Stomata stay open                              ║
║                      • Weak transpiration                             ║
║                      • Disease risk HIGH                              ║
║                      • Poor nutrient transport                        ║
║                      • Edema possible                                 ║
║                                                                       ║
║   ACTION: Increase temperature, dehumidify, improve ventilation       ║
║                                                                       ║
║   ─────────────────────────────────────────────────────────────────   ║
║                                                                       ║
║   0.4-0.8 kPa        ▒▒ PROPAGATION ZONE                             ║
║   (gentle)           • Low stress                                     ║
║                      • Good for young plants                          ║
║                      • Seedlings, cuttings                            ║
║                      • Gentle transpiration                           ║
║                                                                       ║
║   BEST FOR: Germination, rooting, tender transplants                 ║
║                                                                       ║
║   ─────────────────────────────────────────────────────────────────   ║
║                                                                       ║
║   0.8-1.2 kPa        ▓▓ GROWTH ZONE (OPTIMAL)                        ║
║   (ideal)            • Active transpiration                           ║
║                      • Strong nutrient uptake                         ║
║                      • Vigorous growth                                ║
║                      • Healthy stress level                           ║
║                      • Disease pressure low                           ║
║                                                                       ║
║   BEST FOR: Vegetative growth, most production crops                 ║
║                                                                       ║
║   ─────────────────────────────────────────────────────────────────   ║
║                                                                       ║
║   1.2-1.6 kPa        ██ HIGH (Acceptable for some crops)             ║
║   (dry)              • Strong transpiration                           ║
║                      • Stress increasing                              ║
║                      • Smaller leaves                                 ║
║                      • Compact growth                                 ║
║                                                                       ║
║   BEST FOR: Finishing crops, herbs (flavor development)              ║
║                                                                       ║
║   ─────────────────────────────────────────────────────────────────   ║
║                                                                       ║
║   > 1.6 kPa          ██ TOO HIGH                                      ║
║   (too dry)          • Stomata close (stress response)                ║
║                      • Photosynthesis reduced                         ║
║                      • Growth slows/stops                             ║
║                      • Wilting                                        ║
║                      • Tip burn possible                              ║
║                                                                       ║
║   ACTION: Decrease temperature, humidify, reduce ventilation          ║
║                                                                       ║
╚═══════════════════════════════════════════════════════════════════════╝
```

### Adjusting VPD

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│              HOW TO ADJUST VPD (TWO VARIABLES)                      │
│                                                                     │
│   Current: 75°F, 70% RH → VPD = 0.58 kPa (too low)                 │
│   Target: 0.9-1.1 kPa                                               │
│                                                                     │
│   OPTION 1: Increase Temperature                                    │
│   ────────────────────────────                                      │
│   Raise to 80°F, keep 70% RH → VPD = 0.96 kPa ✓                    │
│                                                                     │
│   OPTION 2: Decrease Humidity                                       │
│   ────────────────────────────                                      │
│   Keep 75°F, lower to 55% RH → VPD = 1.09 kPa ✓                    │
│                                                                     │
│   OPTION 3: Combination (often best)                                │
│   ────────────────────────────────────                              │
│   Raise to 78°F, lower to 60% RH → VPD = 1.02 kPa ✓                │
│                                                                     │
│   ═══════════════════════════════════════════════════════════════   │
│                                                                     │
│   Current: 80°F, 40% RH → VPD = 1.94 kPa (too high)                │
│   Target: 0.9-1.1 kPa                                               │
│                                                                     │
│   OPTION 1: Decrease Temperature                                    │
│   ────────────────────────────────                                  │
│   Lower to 72°F, keep 40% RH → VPD = 1.51 kPa (still high)         │
│   Lower to 68°F, keep 40% RH → VPD = 1.26 kPa (better)             │
│                                                                     │
│   OPTION 2: Increase Humidity                                       │
│   ────────────────────────────                                      │
│   Keep 80°F, raise to 65% RH → VPD = 1.13 kPa ✓                    │
│                                                                     │
│   OPTION 3: Combination                                             │
│   ────────────────────                                              │
│   Lower to 75°F, raise to 55% RH → VPD = 1.09 kPa ✓                │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Humidification Systems

### Methods Comparison

```
╔═══════════════════════════════════════════════════════════════════════╗
║                                                                       ║
║                      HUMIDIFICATION SYSTEMS                           ║
║                                                                       ║
║   1. MISTING SYSTEMS (High Pressure Fog)                             ║
║   ═══════════════════════════════════════                             ║
║                                                                       ║
║   High pressure pump (800-1000 psi) → Fine nozzles → Fog             ║
║                                                                       ║
║   Droplet size: 5-10 microns (instantly evaporates)                  ║
║                                                                       ║
║   PROS:                           CONS:                               ║
║   • Very effective                • High initial cost ($2-5K+)       ║
║   • No wetting of plants          • Water quality critical           ║
║   • Can cool simultaneously       • Maintenance (nozzles clog)       ║
║   • Precise control               • Energy use (pump)                ║
║                                                                       ║
║   BEST FOR: Commercial operations, propagation areas                 ║
║                                                                       ║
║   ─────────────────────────────────────────────────────────────────   ║
║                                                                       ║
║   2. ULTRASONIC FOGGERS                                               ║
║   ═══════════════════════                                             ║
║                                                                       ║
║   Ultrasonic vibration → Water droplets → Fog                        ║
║                                                                       ║
║   PROS:                           CONS:                               ║
║   • Low cost ($50-500)            • Limited capacity                 ║
║   • Easy installation             • Requires clean water             ║
║   • Quiet                         • Short lifespan                   ║
║   • Fine fog                      • Small areas only                 ║
║                                                                       ║
║   BEST FOR: Small greenhouses, propagation chambers                  ║
║                                                                       ║
║   ─────────────────────────────────────────────────────────────────   ║
║                                                                       ║
║   3. EVAPORATIVE COOLING PADS (Indirect Humidification)              ║
║   ═══════════════════════════════════════════════════════             ║
║                                                                       ║
║   Water trickles over pad → Air drawn through → Evaporation          ║
║                                                                       ║
║   PROS:                           CONS:                               ║
║   • Cools AND humidifies          • Works best in dry climates      ║
║   • Proven technology             • Adds moisture even if not needed ║
║   • Lower cost                    • Less precise control            ║
║   • Reliable                      • Maintenance (algae, minerals)   ║
║                                                                       ║
║   BEST FOR: Hot, dry climates; combined cooling/humidification       ║
║                                                                       ║
║   ─────────────────────────────────────────────────────────────────   ║
║                                                                       ║
║   4. SPRAY SYSTEMS (Low Pressure)                                     ║
║   ═════════════════════════════════                                   ║
║                                                                       ║
║   Low pressure pump (40-60 psi) → Spray nozzles                      ║
║                                                                       ║
║   Droplet size: 50-100 microns (some wetting possible)               ║
║                                                                       ║
║   PROS:                           CONS:                               ║
║   • Lower cost than fog           • Can wet plants (disease risk)   ║
║   • Simple                        • Less effective                   ║
║   • Low maintenance               • Uneven distribution             ║
║                                                                       ║
║   BEST FOR: Budget operations, less critical applications            ║
║                                                                       ║
╚═══════════════════════════════════════════════════════════════════════╝
```

### Humidification Capacity Calculation

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│          CALCULATING HUMIDIFICATION REQUIREMENT                     │
│                                                                     │
│   Step 1: Determine moisture deficit                               │
│   ──────────────────────────────                                    │
│                                                                     │
│   Current: 75°F, 40% RH                                             │
│   Target:  75°F, 60% RH                                             │
│                                                                     │
│   At 75°F, saturation = 19.4 g/m³                                   │
│   Current moisture: 19.4 × 0.40 = 7.76 g/m³                         │
│   Target moisture:  19.4 × 0.60 = 11.64 g/m³                        │
│   Deficit: 11.64 - 7.76 = 3.88 g/m³                                 │
│                                                                     │
│   Step 2: Calculate greenhouse volume                              │
│   ────────────────────────────────                                  │
│                                                                     │
│   30' × 96' × 10' avg height = 28,800 ft³                          │
│   Convert to m³: 28,800 × 0.0283 = 815 m³                          │
│                                                                     │
│   Step 3: Total moisture needed                                    │
│   ─────────────────────────────                                     │
│                                                                     │
│   815 m³ × 3.88 g/m³ = 3,162 grams                                 │
│   = 3.16 kg = 6.97 lbs of water                                    │
│   = 0.84 gallons                                                   │
│                                                                     │
│   If need to raise humidity in 30 minutes:                         │
│   0.84 gal / 0.5 hr = 1.68 gallons/hour capacity needed            │
│                                                                     │
│   Add 50% for air exchange losses:                                 │
│   1.68 × 1.5 = 2.5 gallons/hour system capacity                    │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Dehumidification Strategies

### When Dehumidification is Needed

```
╔═══════════════════════════════════════════════════════════════════════╗
║                                                                       ║
║              HIGH HUMIDITY SCENARIOS                                  ║
║                                                                       ║
║   SITUATION 1: Winter (Cold outside)                                  ║
║   ═══════════════════════════════════                                 ║
║                                                                       ║
║   • Cannot ventilate (loses heat)                                     ║
║   • Plants still transpire                                            ║
║   • Moisture accumulates                                              ║
║   • RH climbs to 80-90%+                                              ║
║                                                                       ║
║   SOLUTION: Active dehumidification required                          ║
║                                                                       ║
║   ─────────────────────────────────────────────────────────────────   ║
║                                                                       ║
║   SITUATION 2: Humid Climate                                          ║
║   ═══════════════════════                                             ║
║                                                                       ║
║   • Outside air already humid                                         ║
║   • Ventilation brings in moisture                                    ║
║   • Plant transpiration adds more                                     ║
║   • Struggle to keep RH below 70%                                     ║
║                                                                       ║
║   SOLUTION: Dehumidification + strategic ventilation                  ║
║                                                                       ║
║   ─────────────────────────────────────────────────────────────────   ║
║                                                                       ║
║   SITUATION 3: High Density Planting                                  ║
║   ══════════════════════════════════                                  ║
║                                                                       ║
║   • Large leaf area transpiring                                       ║
║   • Poor air circulation between plants                               ║
║   • Microclimate pockets of high RH                                   ║
║                                                                       ║
║   SOLUTION: Improve spacing, air movement, + dehumidification         ║
║                                                                       ║
╚═══════════════════════════════════════════════════════════════════════╝
```

### Dehumidification Methods

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│              DEHUMIDIFICATION METHODS RANKED                        │
│                                                                     │
│   1. VENTILATION (First Choice - Free!)                            │
│   ═══════════════════════════════════                               │
│                                                                     │
│   Exhaust humid air, bring in drier outside air                    │
│                                                                     │
│   WHEN IT WORKS:                                                    │
│   • Outside RH < Inside RH                                         │
│   • Temperature allows ventilation                                 │
│   • Can accept temperature change                                  │
│                                                                     │
│   LIMITATIONS:                                                      │
│   • Winter: Loses heat                                             │
│   • Humid climates: Outside air also humid                         │
│   • Night: Often not effective                                     │
│                                                                     │
│   ───────────────────────────────────────────────────────────────   │
│                                                                     │
│   2. HEATING (Indirect Dehumidification)                            │
│   ═══════════════════════════════════                               │
│                                                                     │
│   Raise temperature → RH drops (same absolute humidity)             │
│                                                                     │
│   Example:                                                          │
│   70°F, 80% RH → Heat to 75°F → RH drops to 64%                    │
│                                                                     │
│   PROS: Uses existing equipment                                     │
│   CONS: May overheat plants, energy cost                           │
│                                                                     │
│   BEST USED: Combined with ventilation                             │
│   (Heat → Ventilate humid air → Bring in drier air)                │
│                                                                     │
│   ───────────────────────────────────────────────────────────────   │
│                                                                     │
│   3. ACTIVE DEHUMIDIFIERS                                           │
│   ═══════════════════════                                           │
│                                                                     │
│   Refrigerant-based: Cool air below dew point → Condensation        │
│   Desiccant-based: Material absorbs moisture                        │
│                                                                     │
│   REFRIGERANT DEHUMIDIFIERS:                                        │
│   • Most common                                                     │
│   • Moderate cost ($500-5,000+)                                    │
│   • 50-200+ pints/day capacity                                     │
│   • Less effective below 60°F                                      │
│   • Adds heat to space                                             │
│                                                                     │
│   DESICCANT DEHUMIDIFIERS:                                          │
│   • Work at any temperature                                        │
│   • Higher cost                                                     │
│   • Commercial scale                                                │
│   • Add significant heat                                           │
│                                                                     │
│   SIZING:                                                           │
│   Calculate similar to humidification (reverse)                    │
│   Rule of thumb: 1 pint capacity per 500 cubic feet                │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Integrated Humidity Management

### The 24-Hour Humidity Strategy

```
╔═══════════════════════════════════════════════════════════════════════╗
║                                                                       ║
║                DAILY HUMIDITY MANAGEMENT CYCLE                        ║
║                                                                       ║
║   MORNING (Sunrise to 10 AM)                                          ║
║   ════════════════════════════                                        ║
║                                                                       ║
║   • RH typically HIGH (night accumulation)                            ║
║   • Temperature rising                                                ║
║   • VPD increasing naturally                                          ║
║                                                                       ║
║   ACTIONS:                                                            ║
║   → Ventilate if possible (purge humid air)                          ║
║   → Heat to accelerate RH drop                                        ║
║   → Ensure air circulation active                                     ║
║                                                                       ║
║   ─────────────────────────────────────────────────────────────────   ║
║                                                                       ║
║   MIDDAY (10 AM to 4 PM)                                              ║
║   ═══════════════════════                                             ║
║                                                                       ║
║   • RH typically LOW (high temps, ventilation)                        ║
║   • VPD may become excessive                                          ║
║   • Plants transpiring heavily                                        ║
║                                                                       ║
║   ACTIONS:                                                            ║
║   → Monitor for excessive VPD (>1.5 kPa)                             ║
║   → Reduce ventilation if RH too low                                  ║
║   → Activate fog/mist if needed                                       ║
║   → Shade to reduce temperature                                       ║
║                                                                       ║
║   ─────────────────────────────────────────────────────────────────   ║
║                                                                       ║
║   EVENING (4 PM to Sunset)                                            ║
║   ══════════════════════════                                          ║
║                                                                       ║
║   • Temperature declining                                             ║
║   • RH rising                                                         ║
║   • Transpiration slowing                                             ║
║                                                                       ║
║   ACTIONS:                                                            ║
║   → Prepare for night (last chance to ventilate)                     ║
║   → Check VPD trending toward target range                            ║
║                                                                       ║
║   ─────────────────────────────────────────────────────────────────   ║
║                                                                       ║
║   NIGHT (Sunset to Sunrise)                                           ║
║   ═══════════════════════════                                         ║
║                                                                       ║
║   • Temperature at setback (lower)                                    ║
║   • RH climbs (cooler air holds less moisture)                        ║
║   • Minimal transpiration                                             ║
║   • Disease risk period                                               ║
║                                                                       ║
║   ACTIONS:                                                            ║
║   → Maintain minimum air movement                                     ║
║   → Heat if RH exceeds 85%                                            ║
║   → Dehumidify if heating insufficient                                ║
║   → Avoid irrigation late in day                                      ║
║                                                                       ║
╚═══════════════════════════════════════════════════════════════════════╝
```

---

## Disease Prevention Through Humidity Control

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│         HUMIDITY-RELATED DISEASE MANAGEMENT                         │
│                                                                     │
│   DISEASE              RH THRESHOLD    PREVENTION STRATEGY          │
│   ═══════════════════════════════════════════════════════════════   │
│                                                                     │
│   Botrytis (Gray Mold) >85% RH        • Keep night RH <80%        │
│                        Stagnant air    • Continuous air movement   │
│                                        • Heat/dehumidify at night  │
│                                        • Space plants adequately   │
│                                                                     │
│   Powdery Mildew       60-80% RH       • Maintain VPD >0.8 kPa    │
│                        + poor air      • Strong air circulation    │
│                                        • Avoid RH extremes         │
│                                        • Sulfur vaporizers         │
│                                                                     │
│   Downy Mildew         >85% RH         • Keep foliage dry         │
│                        + leaf wetness  • Night RH <75%             │
│                                        • Avoid overhead irrigation │
│                                        • Morning ventilation       │
│                                                                     │
│   Bacterial Diseases   Free moisture   • Prevent condensation     │
│                        on leaves       • Dry before nightfall      │
│                                        • Gentle irrigation         │
│                                        • Warm surfaces             │
│                                                                     │
│   Root Rots            Saturated media • Proper drainage           │
│                        + poor air      • Don't overwater           │
│                                        • Warm root zone            │
│                                                                     │
│   GOLDEN RULES:                                                     │
│   1. Keep night RH <80% (ideally <75%)                             │
│   2. Ensure continuous air movement                                │
│   3. Avoid leaf wetness (condensation or irrigation)               │
│   4. Ventilate humidity in morning                                 │
│   5. Space plants to allow air penetration                         │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Troubleshooting Humidity Issues

### Common Problems and Solutions

```
PROBLEM: Cannot reduce humidity below 75% in winter
───────────────────────────────────────────────────

CAUSES:
• Too much plant transpiration for greenhouse volume
• Insufficient heating capacity
• No dehumidification
• Air leaks bringing in cold, humid air

SOLUTIONS:
✓ Heat more aggressively (raises air's moisture capacity)
✓ Install dehumidifier (remove moisture directly)
✓ Increase air circulation (prevents stagnant pockets)
✓ Strategic ventilation (brief bursts when outside RH lower)
✓ Reduce irrigation frequency if possible
✓ Seal greenhouse (prevent infiltration)

═════════════════════════════════════════════════════════════════════

PROBLEM: VPD too high during day (wilting, stress)
──────────────────────────────────────────────────

CAUSES:
• Excessive temperature
• Too much ventilation
• Dry climate
• Insufficient humidification

SOLUTIONS:
✓ Activate fog/mist system
✓ Reduce ventilation rate
✓ Increase shading (lower temperature)
✓ Evaporative cooling if appropriate
✓ Check for equipment malfunction
✓ Verify sensor accuracy

═════════════════════════════════════════════════════════════════════

PROBLEM: Condensation on plants at night
─────────────────────────────────────────

CAUSES:
• Leaf temperature below dew point
• Excessive humidity
• Poor air circulation
• Cold spots in greenhouse

SOLUTIONS:
✓ Increase night temperature minimum
✓ Improve heating uniformity
✓ Run circulation fans continuously
✓ Dehumidify to lower RH
✓ Insulate cold surfaces
✓ Thermal curtains to prevent radiant cooling
```

---

## Module Summary

### Key Takeaways

1. **Understand humidity types** - Absolute humidity (actual moisture) vs. relative humidity (percentage of maximum) vs. VPD (plant experience)

2. **VPD is the management target** - 0.8-1.2 kPa for most production crops; adjust by changing temperature and/or humidity

3. **Multiple humidification options** - High-pressure fog (best), ultrasonic (small scale), evaporative cooling (dual purpose)

4. **Dehumidification hierarchy** - Ventilation first (free), heating (existing equipment), active dehumidifiers (most effective)

5. **Daily humidity cycles** - Manage differently at different times of day; night is critical for disease prevention

6. **Disease prevention** - Keep night RH <80%, ensure air movement, prevent leaf wetness

### Preview of Module 4

Next, we'll explore ventilation systems:
- Natural vs. mechanical ventilation
- Fan sizing and placement
- Ventilation rates and air exchange
- Integration with heating/cooling
- Energy recovery ventilation

---

*EcoFusion Academy - Course 211: Greenhouse Climate Management - Module 3*
