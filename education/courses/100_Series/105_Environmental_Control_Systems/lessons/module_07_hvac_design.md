# Module 7: HVAC System Design
## Course 105: Environmental Control Systems

---

## Learning Objectives

By the end of this module, you will be able to:
- Calculate heating and cooling loads for growing spaces
- Select appropriate HVAC equipment for specific applications
- Design integrated climate control systems
- Understand zoning and multi-zone management
- Evaluate HVAC system efficiency and costs

---

## HVAC Load Calculations

### Cooling Load Components

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                                                                           ║
║                    COOLING LOAD COMPONENTS                                ║
║                                                                           ║
║   Total Cooling Load = Sum of all heat sources                           ║
║                                                                           ║
║   HEAT SOURCES IN A GROW ROOM:                                           ║
║   ════════════════════════════                                            ║
║                                                                           ║
║   1. LIGHTING (usually largest!)                                         ║
║      HPS: 100% of watts becomes heat                                     ║
║      LED: 50-60% of watts becomes heat                                   ║
║                                                                           ║
║   2. EQUIPMENT                                                           ║
║      Pumps, fans, dehumidifiers, controllers                             ║
║      Rule: 90% of watts becomes heat                                     ║
║                                                                           ║
║   3. INFILTRATION                                                        ║
║      Outside air leaking in (or intentional intake)                      ║
║                                                                           ║
║   4. TRANSMISSION                                                        ║
║      Heat through walls, ceiling, floor                                  ║
║                                                                           ║
║   5. PLANT TRANSPIRATION                                                 ║
║      Latent heat from evaporation (significant!)                         ║
║      ~60-80% of light energy used for transpiration                      ║
║                                                                           ║
║   FORMULA:                                                               ║
║   BTU/hr = (Watts × 3.412) + Infiltration + Transmission + Latent       ║
║                                                                           ║
╚═══════════════════════════════════════════════════════════════════════════╝
```

### Simplified Calculation Method

```
    ┌─────────────────────────────────────────────────────────────────────────────┐
    │                                                                             │
    │              SIMPLIFIED HVAC SIZING APPROACH                               │
    │                                                                             │
    │   FOR SEALED GROW ROOMS:                                                   │
    │   ═══════════════════════                                                  │
    │                                                                             │
    │   AC Tonnage = Total Lighting Watts × Multiplier                          │
    │                                                                             │
    │   MULTIPLIERS:                                                             │
    │   ┌─────────────────────────────────────────────────────────────────┐     │
    │   │ LIGHT TYPE        │ MULTIPLIER  │ AC TONS PER 1000W            │     │
    │   ├─────────────────────────────────────────────────────────────────┤     │
    │   │ HPS/MH            │ 4 BTU/W     │ 0.33 tons per 1000W          │     │
    │   │ LED (typical)     │ 2.5 BTU/W   │ 0.21 tons per 1000W          │     │
    │   │ LED (efficient)   │ 2 BTU/W     │ 0.17 tons per 1000W          │     │
    │   └─────────────────────────────────────────────────────────────────┘     │
    │                                                                             │
    │   NOTE: 1 Ton of cooling = 12,000 BTU/hr                                  │
    │                                                                             │
    │   EXAMPLE:                                                                 │
    │   ═════════                                                                │
    │   10 × 600W HPS lights = 6,000W total                                     │
    │   Cooling needed = 6,000W × 4 BTU/W = 24,000 BTU/hr                       │
    │   = 2 tons of cooling                                                     │
    │                                                                             │
    │   Add 20% safety margin: 2.4 tons → Select 2.5-3 ton system              │
    │                                                                             │
    └─────────────────────────────────────────────────────────────────────────────┘
```

---

## Equipment Selection

### Mini-Split Systems

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                                                                           ║
║                    MINI-SPLIT AIR CONDITIONERS                            ║
║                                                                           ║
║   The most common choice for grow rooms and small commercial             ║
║                                                                           ║
║       OUTDOOR UNIT                    INDOOR UNIT(S)                     ║
║       ┌─────────────┐                 ┌─────────────┐                    ║
║       │  ○○○○○○○○○  │                 │ ═══════════ │                    ║
║       │  ○○○○○○○○○  │ ═══════════════ │     ↓↓↓     │                    ║
║       │  COMPRESSOR │   Refrigerant   │  AIR OUTPUT │                    ║
║       │  + CONDENSER│   Lines         │  (cool/heat)│                    ║
║       └─────────────┘                 └─────────────┘                    ║
║                                                                           ║
║   ADVANTAGES:                          DISADVANTAGES:                    ║
║   ════════════                          ════════════════                  ║
║   • High efficiency (SEER 15-25)       • Higher initial cost            ║
║   • Quiet operation                    • Professional install needed    ║
║   • No ductwork needed                 • Limited to ~60,000 BTU/unit    ║
║   • Heats AND cools                    • Outdoor unit required          ║
║   • Dehumidifies while cooling                                          ║
║   • Multiple indoor heads possible                                       ║
║                                                                           ║
║   SIZING:                                                                ║
║   ════════                                                               ║
║   9,000 BTU (0.75 ton) - Small closets                                  ║
║   12,000 BTU (1 ton) - Small rooms (up to 2kW lighting)                 ║
║   18,000 BTU (1.5 ton) - Medium rooms (3-4kW lighting)                  ║
║   24,000 BTU (2 ton) - Larger rooms (4-6kW lighting)                    ║
║   36,000-60,000 BTU - Commercial applications                           ║
║                                                                           ║
╚═══════════════════════════════════════════════════════════════════════════╝
```

### System Types Comparison

| System | Best For | Capacity | Cost |
|--------|----------|----------|------|
| Window AC | Very small, temporary | 5-25k BTU | $ |
| Portable AC | Temporary, rentals | 8-14k BTU | $ |
| Mini-split | Most grow rooms | 9-60k BTU | $$ |
| Multi-zone mini-split | Multiple rooms | 24-60k BTU | $$$ |
| Packaged rooftop | Commercial | 60k+ BTU | $$$$ |
| Chilled water | Large commercial | Unlimited | $$$$$ |

---

## Zone Design

### Multi-Zone Considerations

```
    ┌─────────────────────────────────────────────────────────────────────────────┐
    │                                                                             │
    │                    ZONING YOUR FACILITY                                    │
    │                                                                             │
    │   Why zone? Different areas have different needs!                          │
    │                                                                             │
    │   ┌───────────────────────────────────────────────────────────────────┐   │
    │   │                                                                   │   │
    │   │   PROPAGATION         VEGETATIVE          FLOWERING              │   │
    │   │   ┌─────────┐         ┌─────────┐         ┌─────────┐           │   │
    │   │   │ 75-80°F │         │ 75-85°F │         │ 70-80°F │           │   │
    │   │   │ 80% RH  │         │ 60-70%  │         │ 50-60%  │           │   │
    │   │   │ Low VPD │         │ Mod VPD │         │ High VPD│           │   │
    │   │   │ Low light│        │ Med light│        │High light│           │   │
    │   │   └─────────┘         └─────────┘         └─────────┘           │   │
    │   │       Zone 1              Zone 2              Zone 3             │   │
    │   │                                                                   │   │
    │   └───────────────────────────────────────────────────────────────────┘   │
    │                                                                             │
    │   ZONING OPTIONS:                                                          │
    │   ═══════════════                                                          │
    │                                                                             │
    │   1. SEPARATE SYSTEMS                                                      │
    │      Each zone has dedicated HVAC equipment                               │
    │      + Maximum control                                                    │
    │      - Highest cost                                                       │
    │                                                                             │
    │   2. MULTI-HEAD MINI-SPLIT                                                │
    │      One outdoor unit, multiple indoor heads                              │
    │      + Good control at moderate cost                                      │
    │      - Limited number of zones                                            │
    │                                                                             │
    │   3. DUCTED SYSTEM WITH DAMPERS                                           │
    │      Central unit with zone dampers                                       │
    │      + Scalable                                                           │
    │      - More complex, needs balancing                                      │
    │                                                                             │
    └─────────────────────────────────────────────────────────────────────────────┘
```

---

## Module Summary

### Key Takeaways

1. **Lighting is the primary heat source** in grow rooms
2. **Mini-splits** are the standard for most grow applications
3. **LED reduces cooling load** by 40-50% vs HPS
4. **Add margin** (20%+) to calculations for real-world conditions
5. **Zoning** allows different conditions for different growth stages

---

## Knowledge Check

1. What percentage of HPS wattage becomes heat that must be removed?
2. How many tons of AC are needed for 8,000W of HPS lighting?
3. Why is dehumidification important even when cooling?
4. What are the advantages of multi-zone systems?

---

*EcoFusion Academy - Course 105: Environmental Control Systems - Module 7*

