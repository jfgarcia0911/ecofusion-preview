# Module 7: Rainwater Harvesting for CEA
## Course 212: Water Conservation & Recirculation

---

## Learning Objectives

By the end of this module, you will be able to:
1. Calculate rainwater collection potential for your facility
2. Design rainwater harvesting systems for agricultural use
3. Treat rainwater for horticultural applications
4. Integrate rainwater with recirculating systems
5. Evaluate economic and regulatory considerations

---

## Introduction

Rainwater harvesting represents the ultimate in water independence—capturing free, high-quality water from your facility's footprint. For CEA operations, rainwater can reduce municipal water costs, provide naturally soft water ideal for crops, and enhance sustainability credentials.

---

## Rainwater Collection Potential

### Calculating Catchment Yield

**Basic Formula:**
```
Annual Rainwater Yield (gallons) = Catchment Area (sq ft) × Annual Rainfall (inches) × 0.623 × Collection Efficiency

Collection Efficiency:
• Metal roof: 0.90-0.95
• Asphalt shingle: 0.85-0.90
• Tile roof: 0.80-0.85
• Gravel roof: 0.50-0.70

Example Calculation:
Greenhouse: 10,000 sq ft roof
Location: Portland, OR (37" annual rainfall)
Roof type: Metal (0.90 efficiency)

Yield = 10,000 × 37 × 0.623 × 0.90
     = 207,861 gallons/year
```

### Monthly Rainfall Patterns

```
EXAMPLE: Portland, OR Rainfall Distribution

Jan ████████░░  6.2"  →  51,750 gal
Feb ██████░░░░  4.5"  →  37,537 gal
Mar ██████░░░░  4.3"  →  35,870 gal
Apr ████░░░░░░  3.0"  →  25,020 gal
May ███░░░░░░░  2.3"  →  19,182 gal
Jun ██░░░░░░░░  1.6"  →  13,344 gal
Jul █░░░░░░░░░  0.7"  →   5,838 gal
Aug █░░░░░░░░░  0.9"  →   7,506 gal
Sep ██░░░░░░░░  1.6"  →  13,344 gal
Oct ████░░░░░░  3.3"  →  27,522 gal
Nov ████████░░  6.1"  →  50,916 gal
Dec ████████░░  6.4"  →  53,376 gal

Total: 37.9"      341,205 gal/year (adjusted for actual efficiency)

Note: Storage needed to span dry season (Jul-Sep)
```

---

## Rainwater Harvesting System Design

### Basic System Components

```
┌─────────────────────────────────────────────────────────────┐
│         RAINWATER HARVESTING SYSTEM OVERVIEW                │
└─────────────────────────────────────────────────────────────┘

                    Rainfall
                       │
                       ▼
              ┌────────────────┐
              │  ROOF          │
              │  (Catchment)   │
              └───────┬────────┘
                      │
                      ▼
              ┌────────────────┐
              │  GUTTERS &     │
              │  DOWNSPOUTS    │
              └───────┬────────┘
                      │
                      ▼
              ┌────────────────┐
              │  FIRST FLUSH   │  ──────► To Waste (first 0.01")
              │  DIVERTER      │
              └───────┬────────┘
                      │
                      ▼
              ┌────────────────┐
              │  PRE-FILTER    │
              │  (Leaf screen) │
              └───────┬────────┘
                      │
                      ▼
              ┌────────────────┐
              │  STORAGE       │
              │  TANK(S)       │
              └───────┬────────┘
                      │
                      ▼
              ┌────────────────┐
              │  TREATMENT     │
              │  • Filtration  │
              │  • UV/Ozone    │
              └───────┬────────┘
                      │
                      ▼
              To Growing System
```

### Storage Tank Sizing

**Sizing Strategies:**

| Strategy | Tank Size | Best For |
|----------|-----------|----------|
| **Event-based** | Largest single rain event | Frequent rain, limited budget |
| **Weekly supply** | 1 week of use | Moderate rainfall |
| **Monthly buffer** | 1 month of use | Seasonal rainfall |
| **Dry season bridge** | 2-3 months supply | Long dry periods |

**Example Sizing:**

```
Operation Profile:
• Daily water use: 500 gallons
• Location: Variable rainfall
• Budget: Moderate

Option 1: Event-Based (Minimum)
Largest storm: 2" in 24 hours
Collection: 10,000 sf × 2" × 0.623 × 0.9 = 11,214 gal
Tank size: 12,000 gallons ($6,000-10,000)

Option 2: Weekly Buffer (Recommended)
Weekly use: 500 gal/day × 7 = 3,500 gallons
With collection: 5,000-gallon tank sufficient
Cost: $3,000-5,000

Option 3: Monthly Reserve (Ideal)
Monthly use: 500 × 30 = 15,000 gallons
Tank size: 15,000 gallons ($8,000-15,000)
Provides dry season security
```

### First Flush Diverters

**Purpose:** Remove initial contaminated runoff (dust, bird droppings, atmospheric pollution)

```
FIRST FLUSH DIVERTER OPERATION

Normal Flow:        After Chamber Fills:

Rain  ▼            Rain  ▼
      │                  │
    ┌─┴─┐              ┌─┴─┐
    │ ╱ │              │ ╱ │
    │╱  │──► Waste     │╱  │──────┐
    │▓▓▓│  (dirty      │███│       │ Clean water
    │▓▓▓│   first      │███│       │ to storage
    │▓▓▓│   flush)     │███│ Full  │
    └───┘              └───┘       ▼
     Ball valve              To Tank
     remains open            (overflow)

Sizing: Divert 0.01-0.02" of rainfall
10,000 sq ft roof × 0.01" = ~60 gallons to divert
```

---

## Water Quality Considerations

### Rainwater Characteristics

**Typical Rainwater Quality:**

| Parameter | Typical Value | Notes |
|-----------|---------------|-------|
| **pH** | 5.0-6.5 | Slightly acidic (atmospheric CO₂) |
| **EC** | 0.01-0.05 mS/cm | Very low (pure water) |
| **TDS** | 5-30 ppm | Minimal dissolved solids |
| **Hardness** | 0-20 ppm | Very soft |
| **Nitrate** | 0.1-2 ppm | Minimal N |

**Advantages for Horticulture:**
- No chlorine/chloramine
- Low sodium
- Soft (no Ca/Mg buildup)
- Ideal for nutrient formulation

**Concerns:**
- Potential atmospheric pollutants (industrial areas)
- Microbial contamination from roof surfaces
- Low alkalinity (pH buffering)

### Required Treatment

```
╔════════════════════════════════════════════════════════════╗
║         RAINWATER TREATMENT FOR CEA                        ║
╠════════════════════════════════════════════════════════════╣
║                                                            ║
║ MINIMUM TREATMENT                                          ║
║ ═══════════════════                                        ║
║ 1. First flush diverter                                    ║
║ 2. Pre-filtration (100-200 micron)                         ║
║ 3. Storage (dark, sealed tank)                             ║
║ 4. UV sterilization before use                             ║
║                                                            ║
║ RECOMMENDED TREATMENT                                      ║
║ ══════════════════════                                     ║
║ All minimum steps PLUS:                                    ║
║ 5. Fine filtration (20-50 micron)                          ║
║ 6. pH buffering (if needed)                                ║
║ 7. Periodic water quality testing                          ║
║                                                            ║
║ ADVANCED TREATMENT (If source contamination concern)       ║
║ ════════════════════════════════════════                   ║
║ All recommended steps PLUS:                                ║
║ 8. Activated carbon filtration                             ║
║ 9. Reverse osmosis (if heavy metals present)               ║
║ 10. Ozone treatment                                        ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝
```

---

## Integration with CEA Systems

### Rainwater + Recirculation

**Hybrid Water Strategy:**

```
┌────────────────────────────────────────────────────┐
│     INTEGRATED WATER SYSTEM                        │
├────────────────────────────────────────────────────┤
│                                                    │
│  RAINWATER (Primary makeup water)                  │
│       │                                            │
│       ├──► Treatment ──► Growing System            │
│       │                      │                     │
│       │                      ▼                     │
│       │              Recirculation (95%)           │
│       │                      │                     │
│       │                      ▼                     │
│       └──► Makeup (5%) ◄─────┘                     │
│                                                    │
│  MUNICIPAL WATER (Backup/supplement)               │
│       │                                            │
│       └──► When rainwater depleted                 │
│                                                    │
│  Benefits:                                         │
│  • Reduced municipal water costs                   │
│  • High-quality source water                       │
│  • Sustainability credentials                      │
│  • Grid independence                               │
│                                                    │
└────────────────────────────────────────────────────┘
```

### Seasonal Management

**Wet Season Strategy:**
- Collect and store maximum volume
- Potentially discharge excess (if no storage)
- Monitor water quality (dilution from heavy rain)

**Dry Season Strategy:**
- Conserve stored rainwater
- Blend with municipal if needed
- Maximize recirculation percentage
- Reduce non-essential water use

---

## Economic Analysis

### Cost-Benefit Calculation

```
RAINWATER HARVESTING ECONOMICS

CAPITAL COSTS (10,000 sq ft greenhouse)
─────────────────────────────────────
Gutters & downspouts        $2,000 - $4,000
First flush diverter        $300 - $600
Pre-filtration             $500 - $1,000
Storage tank (5,000 gal)   $3,000 - $5,000
Pump & plumbing            $1,000 - $2,000
Treatment (UV)             $800 - $1,500
Installation labor         $2,000 - $4,000
─────────────────────────────────────
TOTAL                      $9,600 - $18,100

ANNUAL SAVINGS
─────────────────────────────────────
Rainwater collected:       200,000 gallons/year
Municipal water cost:      $5.00 per 1,000 gallons
Annual savings:            $1,000/year

Payback period:            10-18 years (water cost only)

ADDITIONAL VALUE
─────────────────────────────────────
• Better water quality → improved crop performance
• Marketing/sustainability value
• Insurance against water restrictions
• Reduced stormwater discharge fees (some areas)

Realistic payback:         5-10 years (with full value)
```

---

## Regulatory Considerations

### Common Requirements

```
┌──────────────────────────────────────────────────┐
│     RAINWATER HARVESTING REGULATIONS             │
├──────────────────────────────────────────────────┤
│                                                  │
│ VARIES BY JURISDICTION - Always check local!     │
│                                                  │
│ Common Requirements:                             │
│ • Backflow prevention (from municipal backup)    │
│ • Plumbing code compliance                       │
│ • Building permit (for roof modifications)       │
│ • Electrical permit (for pumps)                  │
│ • Cross-connection control                       │
│                                                  │
│ Some Areas Prohibit:                             │
│ • Rainwater collection for potable use           │
│ • Large-scale commercial collection              │
│                                                  │
│ Some Areas Incentivize:                          │
│ • Tax credits for installation                   │
│ • Rebates for storage tanks                      │
│ • Stormwater fee reductions                      │
│                                                  │
└──────────────────────────────────────────────────┘
```

---

## Module Summary

### Key Takeaways

1. **Significant collection potential exists** - a 10,000 sq ft greenhouse roof can collect 200,000+ gallons annually in moderate rainfall areas

2. **Storage sizing determines utility** - larger tanks bridge dry periods but increase capital costs; balance based on rainfall patterns

3. **Treatment is essential** - never use untreated rainwater; minimum is first flush, filtration, and UV

4. **Rainwater complements recirculation** - use as high-quality makeup water to replace evapotranspiration losses

5. **Economics vary by water costs** - payback is faster in high water-cost regions and when full value is considered

### Action Items

Before proceeding to Module 8:
- [ ] Calculate rainwater potential for your facility
- [ ] Research local rainfall patterns and seasonality
- [ ] Determine storage strategy and tank size
- [ ] Check local regulations and permits
- [ ] Develop economic analysis for your situation

---

*EcoFusion Academy - Course 212, Module 7*
