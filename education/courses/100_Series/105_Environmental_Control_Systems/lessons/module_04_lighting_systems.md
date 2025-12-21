# Module 4: Lighting Systems Deep Dive
## Course 105: Environmental Control Systems

---

## Learning Objectives

By the end of this module, you will be able to:
- Compare HID and LED lighting technologies
- Understand light spectrum and plant response
- Calculate lighting requirements for a growing space
- Design efficient lighting layouts with proper PPFD uniformity
- Implement photoperiod control strategies
- Evaluate lighting ROI and energy efficiency

---

## Light Technology Evolution

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                                                                           ║
║                    GROW LIGHT TECHNOLOGY TIMELINE                         ║
║                                                                           ║
║   1960s         1980s         2000s         2010s         2020s          ║
║     │             │             │             │             │             ║
║     ▼             ▼             ▼             ▼             ▼             ║
║                                                                           ║
║   ┌─────┐     ┌─────┐     ┌─────┐     ┌─────┐     ┌─────┐              ║
║   │FLUOR│ ──► │ HID │ ──► │T5/CFL│ ──► │EARLY│ ──► │MODERN│             ║
║   │ESCENT│     │HPS/MH│     │     │     │ LED │     │ LED  │             ║
║   └─────┘     └─────┘     └─────┘     └─────┘     └─────┘              ║
║                                                                           ║
║   Low output   High output  Efficient   Emerging   Industry              ║
║   Limited use  Industry     propagation viable     standard              ║
║                standard     & greens                                      ║
║                                                                           ║
║   EFFICIENCY IMPROVEMENT:                                                 ║
║                                                                           ║
║   μmol/J:  0.3       1.0        1.2        1.5        2.5-3.5           ║
║            ░░░       ▓▓▓▓       ▓▓▓▓▓      ██████     ████████████       ║
║                                                                           ║
╚═══════════════════════════════════════════════════════════════════════════╝
```

---

## HID Lighting Systems

### High Intensity Discharge Overview

```
    ┌─────────────────────────────────────────────────────────────────────────────┐
    │                                                                             │
    │                         HID LIGHTING TYPES                                 │
    │                                                                             │
    │   HIGH PRESSURE SODIUM (HPS)        METAL HALIDE (MH)                      │
    │   ══════════════════════════        ════════════════════                    │
    │                                                                             │
    │   ┌───────────────────────┐         ┌───────────────────────┐             │
    │   │                       │         │                       │             │
    │   │    🟡 🟡 🟡 🟡 🟡 🟡    │         │    🔵 🔵 🔵 🔵 🔵 🔵    │             │
    │   │                       │         │                       │             │
    │   │   YELLOW/ORANGE       │         │   BLUE/WHITE          │             │
    │   │     SPECTRUM          │         │     SPECTRUM          │             │
    │   │                       │         │                       │             │
    │   └───────────────────────┘         └───────────────────────┘             │
    │                                                                             │
    │   • Red-heavy spectrum               • Blue-heavy spectrum                 │
    │   • Best for flowering               • Best for vegetative growth          │
    │   • 1.0-1.7 μmol/J efficiency       • 0.9-1.5 μmol/J efficiency           │
    │   • Long proven track record         • More compact growth                 │
    │   • High heat output                 • Higher heat than LED                │
    │                                                                             │
    │   CERAMIC METAL HALIDE (CMH/LEC)                                          │
    │   ════════════════════════════════                                         │
    │                                                                             │
    │   ┌───────────────────────┐                                               │
    │   │                       │                                               │
    │   │    🌈 🌈 🌈 🌈 🌈 🌈    │   • Full spectrum, sun-like                  │
    │   │                       │   • Best color rendition                       │
    │   │   FULL SPECTRUM       │   • 1.5-1.9 μmol/J efficiency                 │
    │   │                       │   • Growing popularity                         │
    │   └───────────────────────┘   • Less heat than HPS                        │
    │                                                                             │
    └─────────────────────────────────────────────────────────────────────────────┘
```

### HID Pros and Cons

| Advantages | Disadvantages |
|------------|---------------|
| Proven technology | High heat output |
| Lower initial cost | Higher energy consumption |
| Deep canopy penetration | Bulbs degrade (replace yearly) |
| Wide coverage per fixture | Less spectrum control |
| Simple installation | Requires ballast |

---

## LED Lighting Systems

### LED Technology Overview

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                                                                           ║
║                    LED TECHNOLOGY EXPLAINED                               ║
║                                                                           ║
║   LED = Light Emitting Diode                                             ║
║                                                                           ║
║   ┌─────────────────────────────────────────────────────────────────┐    ║
║   │                                                                 │    ║
║   │   HOW LEDs WORK:                                                │    ║
║   │                                                                 │    ║
║   │           Electricity                                           │    ║
║   │               │                                                 │    ║
║   │               ▼                                                 │    ║
║   │         ┌─────────┐                                            │    ║
║   │         │ N-TYPE  │                                            │    ║
║   │         │─────────│ ──► PHOTON (light) emitted                 │    ║
║   │         │ P-TYPE  │     at specific wavelength                 │    ║
║   │         └─────────┘                                            │    ║
║   │               │                                                 │    ║
║   │               ▼                                                 │    ║
║   │          HEAT SINK                                              │    ║
║   │         (heat management critical!)                             │    ║
║   │                                                                 │    ║
║   └─────────────────────────────────────────────────────────────────┘    ║
║                                                                           ║
║   LED ADVANTAGES:                                                        ║
║   ═══════════════                                                        ║
║   • 2.5-3.5 μmol/J efficiency (vs 1.0-1.7 for HPS)                     ║
║   • Tunable spectrum                                                     ║
║   • Lower heat at plant level                                           ║
║   • Longer lifespan (50,000+ hours)                                     ║
║   • Dimmable                                                            ║
║   • Lower operating cost                                                 ║
║                                                                           ║
╚═══════════════════════════════════════════════════════════════════════════╝
```

### LED Form Factors

```
    ┌─────────────────────────────────────────────────────────────────────────────┐
    │                                                                             │
    │                      LED FIXTURE TYPES                                     │
    │                                                                             │
    │   BAR/STRIP STYLE                   PANEL/QUANTUM BOARD                    │
    │   ═══════════════                   ═════════════════════                   │
    │                                                                             │
    │   ════════════════════              ┌─────────────────────┐                │
    │   ════════════════════              │▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪│                │
    │   ════════════════════              │▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪│                │
    │   ════════════════════              │▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪│                │
    │                                     │▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪│                │
    │   • Even light distribution         └─────────────────────┘                │
    │   • Good canopy penetration                                                │
    │   • Modular/scalable               • Compact design                        │
    │   • Popular commercial             • Good for smaller spaces               │
    │   • Easy to clean/maintain         • Lower cost per unit                   │
    │                                    • DIY friendly                          │
    │                                                                             │
    │   COB (Chip on Board)              UFO/SPOT STYLE                         │
    │   ═══════════════════              ══════════════════                       │
    │                                                                             │
    │       ┌───────────┐                     ╭───────╮                          │
    │       │  ┌─────┐  │                    ╱  ▪▪▪▪▪  ╲                         │
    │       │  │ COB │  │                   ╱           ╲                        │
    │       │  └─────┘  │                  ╱             ╲                       │
    │       └───────────┘                                                        │
    │                                                                             │
    │   • High intensity point source    • Hobbyist/budget                       │
    │   • Deep penetration               • Limited coverage                      │
    │   • Higher heat concentration      • Often lower quality                   │
    │   • Supplemental/spot use                                                 │
    │                                                                             │
    └─────────────────────────────────────────────────────────────────────────────┘
```

---

## Light Spectrum and Plant Response

### The PAR Spectrum

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                                                                           ║
║              PAR: PHOTOSYNTHETICALLY ACTIVE RADIATION                     ║
║                        (400-700nm)                                        ║
║                                                                           ║
║   ║                                                                       ║
║   ║           UV    BLUE    GREEN    YELLOW    RED    FAR-RED            ║
║   ║          <400  400-500  500-600  570-590  600-700  700-800           ║
║   ║           │       │        │        │        │        │              ║
║   ║                                                                       ║
║   ║          ░░░░████████░░░░░░░░░░░░░░░░░░░████████░░░░                 ║
║   ║          ░░░░████████░░░░░░░░░░░░░░░░░░░████████░░░░                 ║
║   ║          ░░░░████████░░░░░░░░░░░░░░░░░░░████████░░░░                 ║
║   ║             BLUE                          RED                        ║
║   ║           PEAK                          PEAK                         ║
║   ║                                                                       ║
║   ║   ════════════════════════════════════════════════════               ║
║   ║              Chlorophyll Absorption Peaks                            ║
║   ║                                                                       ║
║   ╚═══════════════════════════════════════════════════════════════════   ║
║                                                                           ║
║   WAVELENGTH EFFECTS:                                                    ║
║                                                                           ║
║   BLUE (400-500nm)         GREEN (500-600nm)       RED (600-700nm)       ║
║   • Compact growth         • Canopy penetration    • Photosynthesis      ║
║   • Thick leaves           • Visual assessment     • Flowering trigger   ║
║   • Stomatal opening       • Some photosynthesis   • Stem elongation     ║
║   • Chlorophyll production • Quality improvement   • Fruit development   ║
║                                                                           ║
╚═══════════════════════════════════════════════════════════════════════════╝
```

### Spectrum Strategies by Growth Stage

```
    ┌─────────────────────────────────────────────────────────────────────────────┐
    │                                                                             │
    │                SPECTRUM STRATEGIES BY STAGE                                │
    │                                                                             │
    │   PROPAGATION/CLONES                                                       │
    │   ══════════════════                                                       │
    │   Blue: ████████████  High blue promotes root development                 │
    │   Red:  ████████░░░░  and compact growth                                  │
    │                                                                             │
    │   VEGETATIVE GROWTH                                                        │
    │   ══════════════════                                                       │
    │   Blue: ████████░░░░  Balanced spectrum for healthy                       │
    │   Red:  ████████░░░░  vegetative development                              │
    │                                                                             │
    │   FLOWERING/FRUITING                                                       │
    │   ══════════════════                                                       │
    │   Blue: ████░░░░░░░░  Red-heavy promotes flowering                        │
    │   Red:  ████████████  and fruit development                               │
    │                                                                             │
    │   FINISHING/RIPENING                                                       │
    │   ══════════════════                                                       │
    │   Blue: ████░░░░░░░░  Far-red can accelerate ripening                     │
    │   Red:  ████████████  UV can increase quality compounds                   │
    │   +FR:  ██░░░░░░░░░░                                                      │
    │                                                                             │
    │   ─────────────────────────────────────────────────────────────────────   │
    │                                                                             │
    │   FULL-CYCLE RECOMMENDATION:                                              │
    │   Most growers use full-spectrum (3000-4000K) LEDs with                   │
    │   good blue:red ratio throughout, relying on photoperiod                  │
    │   rather than spectrum shifts for stage control.                          │
    │                                                                             │
    └─────────────────────────────────────────────────────────────────────────────┘
```

---

## Lighting Calculations

### Key Metrics

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                                                                           ║
║                    LIGHTING METRICS EXPLAINED                             ║
║                                                                           ║
║   PPF (Photosynthetic Photon Flux)                                       ║
║   ════════════════════════════════                                        ║
║   Total light output from a fixture                                      ║
║   Units: μmol/s (micromoles per second)                                  ║
║   USE: Comparing fixtures                                                ║
║                                                                           ║
║   PPFD (Photosynthetic Photon Flux Density)                              ║
║   ══════════════════════════════════════════                              ║
║   Light intensity at a specific point                                    ║
║   Units: μmol/m²/s (micromoles per square meter per second)              ║
║   USE: Measuring what plants receive                                     ║
║                                                                           ║
║   DLI (Daily Light Integral)                                             ║
║   ════════════════════════════                                            ║
║   Total light received in 24 hours                                       ║
║   Units: mol/m²/day                                                      ║
║   USE: Managing total light dosage                                       ║
║                                                                           ║
║   EFFICACY                                                               ║
║   ════════                                                                ║
║   Efficiency of converting electricity to PAR light                      ║
║   Units: μmol/J (micromoles per joule)                                   ║
║   USE: Comparing fixture efficiency                                      ║
║                                                                           ║
║   FORMULAS:                                                              ║
║   ═════════                                                               ║
║   DLI = PPFD × Hours × 0.0036                                            ║
║   PPFD = DLI ÷ (Hours × 0.0036)                                          ║
║                                                                           ║
╚═══════════════════════════════════════════════════════════════════════════╝
```

### Fixture Sizing Calculation

```
    ┌─────────────────────────────────────────────────────────────────────────────┐
    │                                                                             │
    │                    LIGHTING CALCULATION EXAMPLE                            │
    │                                                                             │
    │   GOAL: Light a 4' × 4' (16 sq ft) area for tomatoes                      │
    │   TARGET: 600 PPFD average                                                │
    │                                                                             │
    │   STEP 1: Calculate required PPF                                          │
    │   ══════════════════════════════                                           │
    │                                                                             │
    │   Area = 4' × 4' = 16 sq ft = 1.49 m²                                     │
    │                                                                             │
    │   PPF needed = PPFD × Area                                                │
    │   PPF needed = 600 μmol/m²/s × 1.49 m²                                    │
    │   PPF needed = 894 μmol/s                                                 │
    │                                                                             │
    │   STEP 2: Account for efficiency loss                                     │
    │   ═══════════════════════════════════                                      │
    │                                                                             │
    │   Not all PPF reaches plants (walls, reflection losses)                   │
    │   Assume 85% efficiency                                                   │
    │                                                                             │
    │   Actual PPF needed = 894 ÷ 0.85 = 1,052 μmol/s                          │
    │                                                                             │
    │   STEP 3: Select fixture                                                  │
    │   ═══════════════════════                                                  │
    │                                                                             │
    │   Choose fixture(s) with combined PPF ≥ 1,052 μmol/s                     │
    │                                                                             │
    │   Example: 650W LED at 2.5 μmol/J                                         │
    │   PPF = 650W × 2.5 = 1,625 μmol/s  ✓ Adequate                            │
    │                                                                             │
    │   OR: 480W LED at 2.7 μmol/J                                              │
    │   PPF = 480W × 2.7 = 1,296 μmol/s  ✓ Adequate                            │
    │                                                                             │
    └─────────────────────────────────────────────────────────────────────────────┘
```

---

## Lighting Layout Design

### PPFD Mapping

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                                                                           ║
║                    PPFD UNIFORMITY MAPPING                                ║
║                                                                           ║
║   POOR UNIFORMITY                    GOOD UNIFORMITY                      ║
║   (Single center fixture)            (Multi-bar or multiple fixtures)    ║
║                                                                           ║
║   ┌────────────────────┐            ┌────────────────────┐               ║
║   │ 250  350  400  350 │            │ 520  550  580  550 │               ║
║   │ 350  800  900  350 │            │ 550  600  620  600 │               ║
║   │ 400  900  950  400 │            │ 580  620  640  620 │               ║
║   │ 350  800  900  350 │            │ 550  600  620  600 │               ║
║   │ 250  350  400  350 │            │ 520  550  580  550 │               ║
║   └────────────────────┘            └────────────────────┘               ║
║                                                                           ║
║   Hot spot in center!               Even coverage!                        ║
║   Edges starving!                   Consistent growth!                   ║
║                                                                           ║
║   UNIFORMITY RATIO = Minimum PPFD ÷ Maximum PPFD                         ║
║   Poor: 250/950 = 0.26              Good: 520/640 = 0.81                 ║
║                                                                           ║
║   TARGET: Uniformity ratio > 0.70 for commercial operations              ║
║                                                                           ║
╚═══════════════════════════════════════════════════════════════════════════╝
```

### Hanging Height Guidelines

```
    ┌─────────────────────────────────────────────────────────────────────────────┐
    │                                                                             │
    │                    FIXTURE HANGING HEIGHT                                  │
    │                                                                             │
    │   HEIGHT AFFECTS:                                                          │
    │   • PPFD intensity (inverse square law)                                   │
    │   • Coverage area (spread)                                                │
    │   • Uniformity                                                            │
    │   • Heat at canopy level                                                  │
    │                                                                             │
    │   GENERAL GUIDELINES:                                                      │
    │   ═══════════════════                                                      │
    │                                                                             │
    │   LIGHT TYPE        SEEDLING      VEGETATIVE     FLOWERING                │
    │   ─────────────────────────────────────────────────────────                │
    │   LED (bar style)   24-36"        18-24"         12-18"                   │
    │   LED (panel)       30-42"        24-30"         18-24"                   │
    │   HPS 600W          36-48"        24-36"         18-24"                   │
    │   HPS 1000W         48-60"        36-48"         24-36"                   │
    │   T5 Fluorescent    6-12"         4-8"           N/A                      │
    │                                                                             │
    │   ⚠️  Always check manufacturer recommendations!                          │
    │   Many modern LEDs are designed for specific heights.                     │
    │                                                                             │
    │   RULE: Start higher, lower gradually while monitoring plants            │
    │         Light burn = bleached/white leaves, curling                       │
    │                                                                             │
    └─────────────────────────────────────────────────────────────────────────────┘
```

---

## Photoperiod Control

### Photoperiod Basics

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                                                                           ║
║                    PHOTOPERIOD AND PLANT RESPONSE                         ║
║                                                                           ║
║   Photoperiod = Hours of light per 24-hour period                        ║
║                                                                           ║
║   PLANT CATEGORIES:                                                       ║
║   ═════════════════                                                       ║
║                                                                           ║
║   SHORT-DAY PLANTS                    LONG-DAY PLANTS                    ║
║   (Flower when days < critical)       (Flower when days > critical)      ║
║   ─────────────────────────────       ────────────────────────────       ║
║   • Cannabis                          • Spinach                          ║
║   • Chrysanthemum                     • Lettuce (bolting)                ║
║   • Poinsettia                        • Wheat                            ║
║   • Strawberry (some varieties)       • Onion (bulbing)                  ║
║                                                                           ║
║   Trigger flowering with              Trigger flowering with             ║
║   12/12 or shorter days              14+ hour days                       ║
║                                                                           ║
║   DAY-NEUTRAL PLANTS                                                     ║
║   ─────────────────────                                                   ║
║   • Tomatoes                                                             ║
║   • Peppers                                                              ║
║   • Cucumbers                                                            ║
║   • Most herbs                                                           ║
║                                                                           ║
║   Flower based on age/size, not photoperiod                              ║
║   Can grow under any reasonable photoperiod                              ║
║                                                                           ║
╚═══════════════════════════════════════════════════════════════════════════╝
```

### Common Photoperiod Schedules

| Schedule | Application | Notes |
|----------|-------------|-------|
| 18/6 | Vegetative growth | Standard veg cycle |
| 20/4 | Maximum vegetative growth | High DLI, some prefer |
| 24/0 | Continuous light | Stressful for most, some clones |
| 16/8 | Leafy greens, herbs | Good balance |
| 14/10 | Transitional | Short-day prep |
| 12/12 | Flowering trigger | Short-day plants |

---

## Energy Efficiency

### Comparing Lighting Costs

```
    ┌─────────────────────────────────────────────────────────────────────────────┐
    │                                                                             │
    │                    ANNUAL OPERATING COST COMPARISON                        │
    │                                                                             │
    │   SCENARIO: 1,000 PPFD target, 1,000 sq ft, 12 hours/day                  │
    │   Electricity: $0.12/kWh                                                  │
    │                                                                             │
    │   ┌───────────────┬───────────┬───────────┬───────────┬─────────────┐     │
    │   │ TECHNOLOGY    │ EFFICACY  │ WATTS     │ ANNUAL    │ 5-YEAR      │     │
    │   │               │ (μmol/J)  │ NEEDED    │ ELECTRIC  │ TOTAL COST  │     │
    │   ├───────────────┼───────────┼───────────┼───────────┼─────────────┤     │
    │   │ HPS (DE)      │ 1.7       │ 5,400W    │ $2,839    │ $17,775*    │     │
    │   │               │           │           │           │             │     │
    │   │ LED (Mid)     │ 2.5       │ 3,700W    │ $1,946    │ $12,950     │     │
    │   │               │           │           │           │             │     │
    │   │ LED (Premium) │ 3.0       │ 3,100W    │ $1,630    │ $13,150**   │     │
    │   └───────────────┴───────────┴───────────┴───────────┴─────────────┘     │
    │                                                                             │
    │   * Includes bulb replacements ($300/year)                                │
    │   ** Higher initial cost ($5,000 more) but lower operating                │
    │                                                                             │
    │   ALSO CONSIDER:                                                           │
    │   • Cooling costs (HPS generates more heat requiring more AC)             │
    │   • Maintenance and labor                                                  │
    │   • Rebates/incentives for LED upgrades                                   │
    │                                                                             │
    └─────────────────────────────────────────────────────────────────────────────┘
```

---

## Module Summary

### Key Takeaways

1. **LED technology** has become the industry standard for efficiency
2. **Spectrum** affects plant morphology - blue for compact, red for flowering
3. **PPFD uniformity** is critical for consistent crop quality
4. **DLI** (total daily light) matters more than instant intensity
5. **Photoperiod** controls flowering in day-length sensitive plants
6. **ROI analysis** must include energy costs, not just fixture price

### Preview of Module 5

Next, we'll explore CO₂ enrichment:
- CO₂ and photosynthesis relationship
- Enrichment methods and equipment
- Safety considerations
- Integration with ventilation
- Cost-benefit analysis

---

## Knowledge Check

1. What is the typical efficacy range for modern LED grow lights?
2. How does blue light affect plant growth compared to red light?
3. Calculate the PPF needed for 500 PPFD over 2 m² area.
4. What photoperiod triggers flowering in short-day plants?
5. Why is uniformity ratio important in commercial production?

---

*EcoFusion Academy - Course 105: Environmental Control Systems - Module 4*

