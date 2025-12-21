# Module 8: Advanced Water Treatment
## Course 212: Water Conservation & Recirculation

---

## Learning Objectives

By the end of this module, you will be able to:
1. Implement reverse osmosis for water purification
2. Use activated carbon for contaminant removal
3. Apply ion exchange for water softening
4. Select appropriate treatment for specific water issues
5. Evaluate treatment costs and benefits

---

## Introduction

Source water quality varies dramatically by location. Municipal water may contain chlorine, chloramine, or excess minerals. Well water might have high iron, hardness, or contaminants. Advanced water treatment technologies address these issues, producing ideal water for recirculating systems.

---

## Reverse Osmosis (RO)

### How RO Works

```
REVERSE OSMOSIS PROCESS

High Pressure      Semi-Permeable        Pure Water
    │              Membrane                  │
    ▼                  │                     ▼
┌──────────┐      ┌────┴────┐         ┌──────────┐
│          │      │ ◄◄◄◄◄◄◄ │         │          │
│ Feed     ├─────►│   ►►►   ├────────►│ Permeate │
│ Water    │      │ ◄◄◄◄◄◄◄ │         │ (Product)│
│ (Dirty)  │      │   ►►►   │         │          │
│          │      │ ◄◄◄◄◄◄◄ │         └──────────┘
└──────────┘      └────┬────┘
                       │
                       ▼
                  ┌──────────┐
                  │ Reject   │
                  │ (Waste)  │
                  │ 25-75%   │
                  └──────────┘

Membrane pore size: 0.0001 microns
Removes: 95-99% of dissolved solids, minerals, salts
Pressure required: 40-100 PSI
```

### RO System Components

```
╔════════════════════════════════════════════════════════════╗
║            RO SYSTEM CONFIGURATION                         ║
╠════════════════════════════════════════════════════════════╣
║                                                            ║
║  Feed Water                                                ║
║      │                                                     ║
║      ▼                                                     ║
║  ┌─────────────┐                                           ║
║  │ Sediment    │  5 micron pre-filter                      ║
║  │ Filter      │  Protects membrane                        ║
║  └──────┬──────┘                                           ║
║         │                                                  ║
║         ▼                                                  ║
║  ┌─────────────┐                                           ║
║  │ Carbon      │  Removes chlorine (damages membrane)      ║
║  │ Pre-filter  │  10 micron                                ║
║  └──────┬──────┘                                           ║
║         │                                                  ║
║         ▼                                                  ║
║  ┌─────────────┐                                           ║
║  │ Booster     │  Increases pressure to 60-80 PSI          ║
║  │ Pump        │                                           ║
║  └──────┬──────┘                                           ║
║         │                                                  ║
║         ▼                                                  ║
║  ┌─────────────┐                                           ║
║  │ RO          │  Semi-permeable membrane                  ║
║  │ Membrane    │  Removes 95-99% TDS                       ║
║  └──┬────┬─────┘                                           ║
║     │    │                                                 ║
║     │    └──► Concentrate (waste)                          ║
║     │                                                      ║
║     ▼                                                      ║
║  Pure Water (Product)                                      ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝
```

### RO System Sizing

**Production Rate Formula:**
```
Actual Production = Rated GPD ÷ 24 hours = GPH

Temperature Correction:
Cold water produces slower (77°F is standard rating)
60°F water: ~70% of rated capacity
50°F water: ~50% of rated capacity

Example:
Rated: 1,000 GPD @ 77°F
Actual: 1,000 ÷ 24 = 41.7 GPH
At 60°F: 41.7 × 0.7 = 29.2 GPH

Daily need: 500 gallons
Hours of operation needed: 500 ÷ 29.2 = 17.1 hours/day
Result: Need larger system or storage tank
```

**Recovery Rate:**
```
Recovery Rate (%) = (Permeate Flow ÷ Feed Flow) × 100

Typical: 25-50% recovery
High efficiency: 50-75% recovery

Example:
Feed: 100 GPH
Permeate: 40 GPH
Reject: 60 GPH
Recovery: 40%

For every 100 gallons fed, 40 gallons product, 60 gallons waste
```

### RO Economics

**Cost Analysis:**

| System Size | Capital Cost | Operating Cost/1000 gal | Best For |
|-------------|--------------|-------------------------|----------|
| **100 GPD** | $300-600 | $5-8 | Small systems, home use |
| **500 GPD** | $1,500-3,000 | $4-6 | Small commercial |
| **1,000 GPD** | $3,000-6,000 | $3-5 | Medium commercial |
| **5,000 GPD** | $10,000-20,000 | $2-4 | Large commercial |

**Operating Costs Include:**
- Pre-filters: $50-200/year
- Membrane replacement: $100-500 every 2-3 years
- Carbon filters: $50-150/year
- Electricity: $100-500/year
- Waste water discharge: Variable

---

## Activated Carbon Filtration

### Carbon Types and Applications

```
╔════════════════════════════════════════════════════════════╗
║          ACTIVATED CARBON APPLICATIONS                     ║
╠════════════════════════════════════════════════════════════╣
║                                                            ║
║ GRANULAR ACTIVATED CARBON (GAC)                            ║
║ ═════════════════════════════════                          ║
║ Removes:                                                   ║
║ • Chlorine (complete removal)                              ║
║ • Chloramine (slower, needs longer contact)                ║
║ • Organic compounds                                        ║
║ • Taste and odor                                           ║
║ • Some pesticides/herbicides                               ║
║                                                            ║
║ Flow Rate: 1-2 GPM per cubic foot of carbon                ║
║ Replacement: 6-12 months (chlorine degrades carbon)        ║
║ Cost: $100-300 per cubic foot                              ║
║                                                            ║
║ CATALYTIC CARBON                                           ║
║ ══════════════════                                         ║
║ Removes:                                                   ║
║ • Chloramine (effective)                                   ║
║ • Hydrogen sulfide                                         ║
║ • Iron (some)                                              ║
║                                                            ║
║ More expensive but necessary for chloramine                ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝
```

### Carbon System Design

```
CARBON FILTER CONFIGURATION

    Feed Water
        │
        ▼
    ┌───────────┐
    │ ░░░░░░░░░ │
    │ ░░░GAC░░░ │  Granular Activated Carbon
    │ ░░░░░░░░░ │  (2-4 cubic feet typical)
    │ ░░░░░░░░░ │
    └─────┬─────┘
          │
          ▼
    Treated Water

Bed Depth: 24-48 inches minimum
Flow Rate: 1 GPM per cu ft (dechlorination)
           0.5 GPM per cu ft (chloramine)
Contact Time: 5-10 minutes (chloramine)

Backwash: Monthly to prevent channeling
```

---

## Iron and Manganese Removal

### Oxidation and Filtration

**Common in Well Water**

```
IRON/MANGANESE TREATMENT PROCESS

1. OXIDATION
   Fe²⁺ (soluble) + O₂ → Fe³⁺ (insoluble)

   Methods:
   • Aeration
   • Chlorine injection
   • Ozone
   • Permanganate

2. FILTRATION
   Removes oxidized precipitate

   ┌────────────────┐
   │ Greensand or   │
   │ Birm Media     │  Catalytic oxidation media
   │ (Specialty)    │
   └────────────────┘

3. BACKWASH
   Regular cleaning removes accumulated iron
```

**Treatment Requirements:**

| Iron/Mn Level | Treatment | Notes |
|---------------|-----------|-------|
| **<0.3 ppm** | None needed | Acceptable for most crops |
| **0.3-3 ppm** | Oxidation + filtration | Standard approach |
| **3-10 ppm** | Enhanced oxidation + filtration | Heavy treatment |
| **>10 ppm** | RO or professional system | Severe contamination |

---

## Water Softening (Ion Exchange)

### How Water Softening Works

```
ION EXCHANGE PROCESS

Hard Water In:           Resin Bead:         Soft Water Out:
Ca²⁺, Mg²⁺              (Charged)            Na⁺

┌────────────┐          ┌──────────┐        ┌────────────┐
│ Ca²⁺       │          │ ○ Na⁺    │        │ Na⁺        │
│ Mg²⁺       ├─────────►│ ○ Na⁺    ├───────►│ Na⁺        │
│            │          │ ● Ca²⁺   │        │            │
└────────────┘          │ ● Mg²⁺   │        └────────────┘
                        └──────────┘

Exchange: Ca²⁺/Mg²⁺ removed, Na⁺ added

REGENERATION (with brine):
NaCl solution flushes Ca/Mg, replaces with Na
```

**Considerations for CEA:**

```
⚠ WARNING: Water softening adds sodium

Softened water typically:
• 20-100 ppm sodium added
• Problematic for sodium-sensitive crops
• Can accumulate in recirculating systems

BETTER ALTERNATIVES FOR CEA:
1. Reverse osmosis (removes hardness without Na)
2. Blend softened + hard water
3. Use hardness (Ca/Mg beneficial for plants)

Softening recommended ONLY if:
• Extreme hardness (>300 ppm)
• Blended with RO or other sources
• Discharge available for excess Na
```

---

## Treatment Selection Guide

```
╔════════════════════════════════════════════════════════════════════════════╗
║               WATER PROBLEM → TREATMENT SOLUTION                           ║
╠════════════════════════════════════════════════════════════════════════════╣
║                                                                            ║
║ Problem              Treatment              Cost         Effectiveness     ║
║ ═══════════════════════════════════════════════════════════════════════    ║
║                                                                            ║
║ Chlorine             Carbon filter          Low          Excellent         ║
║ Chloramine           Catalytic carbon       Medium       Good              ║
║ High TDS/salts       Reverse osmosis        High         Excellent         ║
║ Hardness (extreme)   RO or blend            Medium-High  Good              ║
║ Iron/Manganese       Oxidation + filter     Medium       Good              ║
║ Bacteria/pathogens   UV or ozone            Medium       Excellent         ║
║ Organic compounds    Carbon + RO            High         Excellent         ║
║ Heavy metals         RO                     High         Excellent         ║
║ Sediment/turbidity   Mechanical filter      Low          Excellent         ║
║ pH (extreme)         Chemical adjustment    Low          Good              ║
║                                                                            ║
╚════════════════════════════════════════════════════════════════════════════╝
```

---

## Multi-Stage Treatment Systems

### Comprehensive Source Water Treatment

```
EXAMPLE: Municipal Water with Chloramine + High TDS

Source Water → Sediment Filter → Catalytic Carbon → RO → UV → Growing System
   (180 ppm)      (5 micron)       (chloramine)    (↓95%)      (sterilize)
                                                    10 ppm TDS

Benefits:
• Removes chloramine (toxic to plants/beneficial bacteria)
• Reduces TDS to ideal starting point
• Sterilizes water
• Consistent, high-quality water

Cost:
• Capital: $5,000-10,000 (medium system)
• Operating: $3-5 per 1,000 gallons
```

---

## Module Summary

### Key Takeaways

1. **Source water quality drives treatment needs** - test comprehensively to identify specific issues requiring treatment

2. **RO provides ultimate purity** - removes 95-99% of contaminants but wastes 50-75% of input water; balance with recirculation

3. **Carbon excels at chlorine/chloramine** - essential pre-treatment for municipal water; prevents crop damage and beneficial bacteria mortality

4. **Water softening adds sodium** - generally avoid for CEA; use RO or accept hardness (Ca/Mg are beneficial nutrients)

5. **Multi-stage treatment for complex water** - combination of technologies addresses multiple issues effectively

### Action Items

Before proceeding to Module 9:
- [ ] Get comprehensive source water test
- [ ] Identify specific water quality issues
- [ ] Select appropriate treatment technology(ies)
- [ ] Calculate treatment system sizing
- [ ] Develop treatment cost budget

---

*EcoFusion Academy - Course 212, Module 8*
