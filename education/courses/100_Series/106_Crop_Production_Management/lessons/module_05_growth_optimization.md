# Module 5: Growth Optimization
## Course 106: Crop Production & Management

---

## Learning Objectives

By the end of this module, you will be able to:
1. Apply environmental factors to optimize plant growth
2. Manipulate photoperiod for crop steering
3. Use temperature differentials (DIF) for growth control
4. Optimize light quality and quantity for specific outcomes
5. Implement stress techniques for improved quality

---

## The Growth Triangle

```
╔═══════════════════════════════════════════════════════════════════════════════════╗
║                                                                                   ║
║                         THE GROWTH OPTIMIZATION TRIANGLE                          ║
║                                                                                   ║
║                                    LIGHT                                          ║
║                                      △                                            ║
║                                     ╱ ╲                                           ║
║                                    ╱   ╲                                          ║
║                                   ╱     ╲                                         ║
║                                  ╱       ╲                                        ║
║                                 ╱  GROWTH  ╲                                      ║
║                                ╱   SWEET    ╲                                     ║
║                               ╱    SPOT      ╲                                    ║
║                              ╱                 ╲                                  ║
║                             ╱                   ╲                                 ║
║                            ▽─────────────────────▽                                ║
║                        CO₂/AIR              TEMPERATURE                           ║
║                                                                                   ║
║   All three factors must be balanced:                                            ║
║   • Increase light → Need more CO₂ and higher temp                              ║
║   • Increase CO₂ → Need more light to utilize                                   ║
║   • Increase temp → Need more light and CO₂                                     ║
║                                                                                   ║
║   LIMITING FACTOR PRINCIPLE: Growth is limited by the scarcest resource         ║
║                                                                                   ║
╚═══════════════════════════════════════════════════════════════════════════════════╝
```

---

## Light Optimization

### Daily Light Integral (DLI)

```
╔═══════════════════════════════════════════════════════════════════════════════════╗
║                                                                                   ║
║                         DAILY LIGHT INTEGRAL (DLI)                                ║
║                                                                                   ║
║   DLI = Total photons received per day (mol/m²/day)                              ║
║                                                                                   ║
║   FORMULA:                                                                        ║
║   ┌─────────────────────────────────────────────────────────────────────────────┐ ║
║   │                                                                             │ ║
║   │   DLI = PPFD (μmol/m²/s) × Hours × 3600 ÷ 1,000,000                        │ ║
║   │                                                                             │ ║
║   │   OR simplified:                                                            │ ║
║   │   DLI = PPFD × Hours × 0.0036                                              │ ║
║   │                                                                             │ ║
║   └─────────────────────────────────────────────────────────────────────────────┘ ║
║                                                                                   ║
║   EXAMPLE: 200 μmol/m²/s for 16 hours                                           ║
║   DLI = 200 × 16 × 0.0036 = 11.5 mol/m²/day                                    ║
║                                                                                   ║
║   ─────────────────────────────────────────────────────────────────────────────  ║
║                                                                                   ║
║   DLI REQUIREMENTS BY CROP:                                                       ║
║                                                                                   ║
║   mol/m²/day   4    8    12   16   20   24   28   32   36   40                  ║
║               ├────┼────┼────┼────┼────┼────┼────┼────┼────┤                   ║
║                                                                                   ║
║   Lettuce     │════════════│                                                     ║
║               12-17 optimal                                                       ║
║                                                                                   ║
║   Basil            │═══════════════│                                             ║
║                    15-25 optimal                                                  ║
║                                                                                   ║
║   Tomatoes                   │═══════════════════════│                           ║
║                              20-35 optimal                                        ║
║                                                                                   ║
║   Cannabis                        │═══════════════════════════│                  ║
║                                   25-45 optimal                                   ║
║                                                                                   ║
╚═══════════════════════════════════════════════════════════════════════════════════╝
```

### Light Spectrum Effects

```
┌───────────────────────────────────────────────────────────────────────────────────┐
│                                                                                   │
│   LIGHT SPECTRUM AND PLANT RESPONSE                                               │
│                                                                                   │
│   Wavelength (nm)  380     450     500     550     600     650     700     750   │
│                   ├───────┼───────┼───────┼───────┼───────┼───────┼───────┤      │
│                    UV      BLUE    CYAN   GREEN    ORANGE   RED    FAR-RED       │
│                                                                                   │
│   ═══════════════════════════════════════════════════════════════════════════    │
│                                                                                   │
│   BLUE (400-500nm)                                                                │
│   ┌─────────────────────────────────────────────────────────────────────────────┐ │
│   │ • Compact growth (shorter internodes)                                       │ │
│   │ • Thicker leaves                                                            │ │
│   │ • Increased stomatal opening                                                │ │
│   │ • Enhanced chlorophyll production                                           │ │
│   │ Best for: Leafy greens, vegetative stage                                   │ │
│   └─────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                   │
│   RED (600-700nm)                                                                 │
│   ┌─────────────────────────────────────────────────────────────────────────────┐ │
│   │ • Promotes stem elongation                                                  │ │
│   │ • Flowering stimulation                                                     │ │
│   │ • Photosynthesis efficiency                                                 │ │
│   │ • Fruit development                                                         │ │
│   │ Best for: Fruiting crops, flowering stage                                  │ │
│   └─────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                   │
│   FAR-RED (700-750nm)                                                             │
│   ┌─────────────────────────────────────────────────────────────────────────────┐ │
│   │ • Shade avoidance response (stretch)                                        │ │
│   │ • Faster flowering initiation                                               │ │
│   │ • Larger leaf area                                                          │ │
│   │ • End-of-day far-red manipulation                                           │ │
│   │ Best for: Flowering timing, reducing compactness                           │ │
│   └─────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                   │
│   RATIO EFFECTS:                                                                  │
│   • High Blue:Red = Compact, vegetative growth                                   │
│   • High Red:Blue = Elongated, flowering promotion                               │
│   • Red:Far-Red ratio controls phytochrome state                                │
│                                                                                   │
└───────────────────────────────────────────────────────────────────────────────────┘
```

---

## Temperature Management

### DIF (Day-night Temperature Differential)

```
╔═══════════════════════════════════════════════════════════════════════════════════╗
║                                                                                   ║
║                         DIF - TEMPERATURE DIFFERENTIAL                            ║
║                                                                                   ║
║   DIF = Day Temperature - Night Temperature                                       ║
║                                                                                   ║
║   ┌─────────────────────────────────────────────────────────────────────────────┐ ║
║   │                                                                             │ ║
║   │   POSITIVE DIF (+DIF)           ZERO DIF               NEGATIVE DIF (-DIF) │ ║
║   │   Day warmer than night         Day = Night            Night warmer than day│ ║
║   │                                                                             │ ║
║   │        DAY   NIGHT                DAY   NIGHT              DAY   NIGHT      │ ║
║   │        ┌─┐                        ┌─┐   ┌─┐                      ┌─┐        │ ║
║   │        │█│                        │█│   │█│                ┌─┐   │█│        │ ║
║   │        │█│   ┌─┐                  │█│   │█│                │█│   │█│        │ ║
║   │        │█│   │█│                  │█│   │█│                │█│   │█│        │ ║
║   │        │█│   │█│                  │█│   │█│                │█│   │█│        │ ║
║   │        └─┘   └─┘                  └─┘   └─┘                └─┘   └─┘        │ ║
║   │        75°F  65°F                 70°F  70°F               65°F  75°F       │ ║
║   │        DIF = +10°F               DIF = 0°F                DIF = -10°F       │ ║
║   │                                                                             │ ║
║   │   RESULT:                        RESULT:                  RESULT:           │ ║
║   │   Taller stems                   Moderate height          Compact plants    │ ║
║   │   Stretched growth               Balanced growth          Short internodes  │ ║
║   │                                                                             │ ║
║   └─────────────────────────────────────────────────────────────────────────────┘ ║
║                                                                                   ║
║   APPLICATIONS:                                                                   ║
║   • Prevent stretch → Use negative DIF or zero DIF                              ║
║   • Control height → Morning temperature drop most effective                    ║
║   • Tomato steering → Use DIF to balance vegetative vs generative              ║
║                                                                                   ║
╚═══════════════════════════════════════════════════════════════════════════════════╝
```

### Temperature Effects by Growth Stage

```
┌───────────────────────────────────────────────────────────────────────────────────┐
│                                                                                   │
│   TEMPERATURE EFFECTS ON PLANT GROWTH                                             │
│                                                                                   │
│   °F    50   55   60   65   70   75   80   85   90   95                         │
│        ├────┼────┼────┼────┼────┼────┼────┼────┼────┤                          │
│                                                                                   │
│   GERMINATION                                                                     │
│   Cool season     │═══════════│                                                  │
│   Warm season              │═══════════════│                                     │
│                                                                                   │
│   ─────────────────────────────────────────────────────────────────────────────  │
│                                                                                   │
│   PHOTOSYNTHESIS RATE                                                             │
│        │                        ╱╲                                               │
│        │                       ╱  ╲                                              │
│   Rate │                      ╱    ╲                                             │
│        │                     ╱      ╲                                            │
│        │              ─────╱        ╲─────                                       │
│        └────────────────────────────────────────                                 │
│           55    65    75    85    95   °F                                        │
│                      Peak ~77°F for most crops                                   │
│                                                                                   │
│   ─────────────────────────────────────────────────────────────────────────────  │
│                                                                                   │
│   RESPIRATION vs TEMPERATURE                                                      │
│   • Respiration increases exponentially with temperature                         │
│   • Net photosynthesis = Photosynthesis - Respiration                           │
│   • At high temps, respiration can exceed photosynthesis                         │
│                                                                                   │
│   KEY: Night temperature affects respiration losses                              │
│   Lower night temps = More energy retained = Better yields                       │
│                                                                                   │
└───────────────────────────────────────────────────────────────────────────────────┘
```

---

## Crop Steering

### Vegetative vs Generative Balance

```
╔═══════════════════════════════════════════════════════════════════════════════════╗
║                                                                                   ║
║                         CROP STEERING FUNDAMENTALS                                ║
║                                                                                   ║
║   ◄─────────────────────────────────────────────────────────────────────────────► ║
║   VEGETATIVE                          BALANCED                        GENERATIVE ║
║                                                                                   ║
║   ┌─────────────────┐              ┌─────────────────┐          ┌─────────────────┐║
║   │     🌿🌿🌿       │              │    🌿 🍅 🌿     │          │    🍅🍅🍅       │║
║   │    🌿🌿🌿🌿      │              │   🌿 🍅🍅 🌿    │          │   🍅🍅🍅🍅      │║
║   │   🌿🌿🌿🌿🌿     │              │  🌿 🍅🍅🍅 🌿   │          │  🍅🍅🍅🍅🍅     │║
║   │       │         │              │      │         │          │      │         │║
║   └───────┴─────────┘              └──────┴─────────┘          └──────┴─────────┘║
║   Lots of leaves                   Balanced growth              Lots of fruit    ║
║   Few flowers/fruit                                             Smaller plant    ║
║                                                                                   ║
║   ═══════════════════════════════════════════════════════════════════════════    ║
║                                                                                   ║
║   STEERING FACTORS:                                                               ║
║                                                                                   ║
║   FACTOR              VEGETATIVE              GENERATIVE                         ║
║   ─────────────────────────────────────────────────────────────────────────────  ║
║   Temperature         Higher (warmer)         Lower (cooler)                     ║
║   Day/Night DIF       Positive (+DIF)         Negative (-DIF)                    ║
║   EC                  Lower                   Higher                             ║
║   Water               More frequent           Less frequent (dry-back)           ║
║   Light               Less intense            More intense                       ║
║   Nitrogen            Higher                  Lower                              ║
║   Phosphorus/K        Lower                   Higher                             ║
║                                                                                   ║
╚═══════════════════════════════════════════════════════════════════════════════════╝
```

### Dry-Back Strategy

```
┌───────────────────────────────────────────────────────────────────────────────────┐
│                                                                                   │
│   DRY-BACK STRATEGY FOR GENERATIVE STEERING                                       │
│                                                                                   │
│   Substrate moisture over 24-hour cycle:                                          │
│                                                                                   │
│   100%│      Irrigation events                                                   │
│       │      ↓   ↓   ↓   ↓   ↓   ↓                                              │
│    80%│  ╱╲  ╱╲  ╱╲  ╱╲  ╱╲  ╱╲                                                 │
│       │ ╱  ╲╱  ╲╱  ╲╱  ╲╱  ╲╱  ╲                                                │
│    60%│╱                        ╲                                                │
│       │                          ╲        ◄── Night dry-back                     │
│    40%│                           ╲                                              │
│       │                            ╲                                             │
│    20%│                             ╲__                                          │
│       │                                                                          │
│       └───────────────────────────────────────────────────────────────────────   │
│        6AM        12PM        6PM        12AM       6AM                          │
│        │←── Day irrigation ──→│←── Night dry-back ──→│                          │
│                                                                                   │
│   KEY CONCEPTS:                                                                   │
│   ═══════════════════════════════════════════════════════════════════════════    │
│                                                                                   │
│   • First irrigation: Start 2-3 hours after lights on                           │
│   • Last irrigation: Stop 2-3 hours before lights off                           │
│   • Target dry-back: 10-30% overnight (crop dependent)                          │
│   • More dry-back = More generative push                                         │
│   • Too much dry-back = Plant stress, reduced photosynthesis                    │
│                                                                                   │
│   VEGETATIVE: Small dry-back (5-10%)                                            │
│   GENERATIVE: Large dry-back (20-30%)                                           │
│                                                                                   │
└───────────────────────────────────────────────────────────────────────────────────┘
```

---

## Photoperiod Management

### Day Length Effects

```
╔═══════════════════════════════════════════════════════════════════════════════════╗
║                                                                                   ║
║                         PHOTOPERIOD RESPONSES                                     ║
║                                                                                   ║
║   SHORT-DAY PLANTS              DAY-NEUTRAL              LONG-DAY PLANTS         ║
║   (Flower when days short)      (Flower regardless)      (Flower when days long) ║
║                                                                                   ║
║   ┌─────────────────┐          ┌─────────────────┐     ┌─────────────────┐       ║
║   │ 🌸 12hrs light  │          │ 🌸 Any duration │     │ 🌸 14+hrs light │       ║
║   │                 │          │                 │     │                 │       ║
║   │ Examples:       │          │ Examples:       │     │ Examples:       │       ║
║   │ • Chrysanthemum │          │ • Tomatoes      │     │ • Spinach       │       ║
║   │ • Poinsettia    │          │ • Peppers       │     │ • Lettuce       │       ║
║   │ • Some cannabis │          │ • Cucumbers     │     │ • Radish        │       ║
║   │                 │          │ • Most herbs    │     │ • Dill          │       ║
║   └─────────────────┘          └─────────────────┘     └─────────────────┘       ║
║                                                                                   ║
║   ═══════════════════════════════════════════════════════════════════════════    ║
║                                                                                   ║
║   COMMON PHOTOPERIODS:                                                            ║
║                                                                                   ║
║   PHOTOPERIOD        LIGHT : DARK       USE                                      ║
║   ─────────────────────────────────────────────────────────────────────────────  ║
║   Short day          12:12              Flowering trigger                        ║
║   Standard           16:8               Most vegetative crops                    ║
║   Long day           18:6               Vegetative growth                        ║
║   Continuous         24:0               Propagation, some greens                 ║
║                                                                                   ║
║   ⚠️ Some crops need dark period for metabolic processes - research specific crop║
║                                                                                   ║
╚═══════════════════════════════════════════════════════════════════════════════════╝
```

### Light Cycle Strategies

```
┌───────────────────────────────────────────────────────────────────────────────────┐
│                                                                                   │
│   PHOTOPERIOD STRATEGIES                                                          │
│                                                                                   │
│   STRATEGY 1: Night Interruption                                                  │
│   ─────────────────────────────────────────────────────────────────────────────  │
│   Purpose: Prevent flowering in long-night conditions                            │
│                                                                                   │
│   12AM   2AM   4AM   6AM   8AM   10AM  12PM  2PM   4PM   6PM   8PM   10PM  12AM │
│   ├─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤     │
│   ░░░░░░████░░░░░░░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░         │
│         ↑                                                                         │
│         30-60 min light pulse breaks dark period                                 │
│                                                                                   │
│   STRATEGY 2: End-of-Day Far-Red (EOD-FR)                                        │
│   ─────────────────────────────────────────────────────────────────────────────  │
│   Purpose: Promote elongation, faster flowering                                  │
│                                                                                   │
│   6PM        6:15PM      Night                                                    │
│   │          │           │                                                        │
│   ▓▓▓▓▓▓▓▓▓▓▓████████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░         │
│   Main light  Far-red    Darkness                                                 │
│              (15-30 min)                                                          │
│                                                                                   │
│   STRATEGY 3: Dawn/Dusk Simulation                                               │
│   ─────────────────────────────────────────────────────────────────────────────  │
│   Purpose: Reduce stress, gradual intensity change                               │
│                                                                                   │
│   Intensity                                                                       │
│   100%│           ▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂                                        │
│       │         ▂▀                      ▀▂                                       │
│    50%│       ▂▀                          ▀▂                                     │
│       │     ▂▀                              ▀▂                                   │
│     0%│▂▂▂▀▀                                  ▀▀▂▂▂                              │
│       └───────────────────────────────────────────────                           │
│        Sunrise   Full intensity (14-16 hrs)   Sunset                             │
│        (30min)                               (30min)                              │
│                                                                                   │
└───────────────────────────────────────────────────────────────────────────────────┘
```

---

## CO₂ Enrichment for Growth

### CO₂ Response Curves

```
╔═══════════════════════════════════════════════════════════════════════════════════╗
║                                                                                   ║
║                         CO₂ AND PHOTOSYNTHESIS RATE                               ║
║                                                                                   ║
║   Photosynthesis                                                                  ║
║   Rate                                                                            ║
║        │                                     ●───────── High light + High CO₂   ║
║        │                               ●────●                                    ║
║        │                          ●────                                          ║
║        │                     ●───●                                               ║
║        │                ●───●                                                    ║
║        │           ●───●              ●───●───●───●── High light, ambient CO₂  ║
║        │      ●───●              ●────                                           ║
║        │ ●───●              ●────                                                ║
║        │            ●───●────●───●───●───●── Low light (CO₂ limited by light)  ║
║        │       ●────                                                             ║
║        │  ●────                                                                  ║
║        └───────────────────────────────────────────────────────────────────────  ║
║         400    600    800    1000   1200   1400   1600                           ║
║                          CO₂ Concentration (ppm)                                 ║
║                                                                                   ║
║   KEY INSIGHTS:                                                                   ║
║   • Ambient CO₂ (~420ppm) limits photosynthesis under high light                ║
║   • Doubling CO₂ can increase yield 20-30% with adequate light                  ║
║   • Above 1200-1500ppm: diminishing returns                                      ║
║   • Must increase light and temperature to utilize elevated CO₂                 ║
║                                                                                   ║
╚═══════════════════════════════════════════════════════════════════════════════════╝
```

### CO₂ Integration Strategy

```
┌───────────────────────────────────────────────────────────────────────────────────┐
│                                                                                   │
│   CO₂ ENRICHMENT GUIDELINES                                                       │
│                                                                                   │
│   LIGHT LEVEL (PPFD)    RECOMMENDED CO₂    TEMPERATURE                           │
│   ═══════════════════════════════════════════════════════════════════════════    │
│                                                                                   │
│   <200 μmol/m²/s        400-600 ppm        65-75°F                               │
│   (Low - ambient OK)    (little benefit)                                         │
│                                                                                   │
│   200-400 μmol/m²/s     600-800 ppm        70-78°F                               │
│   (Medium)              (moderate benefit)                                        │
│                                                                                   │
│   400-600 μmol/m²/s     800-1200 ppm       75-82°F                               │
│   (High)                (significant benefit)                                     │
│                                                                                   │
│   >600 μmol/m²/s        1000-1500 ppm      78-85°F                               │
│   (Very high)           (maximum benefit)                                         │
│                                                                                   │
│   ─────────────────────────────────────────────────────────────────────────────  │
│                                                                                   │
│   IMPLEMENTATION RULES:                                                           │
│                                                                                   │
│   1. Only enrich during lights-on (plants don't use CO₂ in dark)                │
│   2. Ensure good air circulation to deliver CO₂ to leaves                       │
│   3. Match CO₂ to light level - no benefit enriching in low light               │
│   4. Increase watering/nutrients to support faster growth                        │
│   5. Monitor for faster pest/disease pressure with accelerated growth            │
│                                                                                   │
└───────────────────────────────────────────────────────────────────────────────────┘
```

---

## Stress Techniques for Quality

### Controlled Stress Benefits

```
╔═══════════════════════════════════════════════════════════════════════════════════╗
║                                                                                   ║
║                         EUSTRESS - BENEFICIAL PLANT STRESS                        ║
║                                                                                   ║
║   Controlled, moderate stress can improve crop quality                           ║
║                                                                                   ║
║   STRESS TYPE          APPLICATION              BENEFIT                          ║
║   ═══════════════════════════════════════════════════════════════════════════    ║
║                                                                                   ║
║   Water stress         Reduced irrigation       • Concentrated flavors           ║
║   (Deficit irrigation) before harvest           • Higher sugar content           ║
║                                                 • Improved shelf life            ║
║                                                                                   ║
║   Salt stress          Higher EC               • More compact growth             ║
║   (Osmotic)            near harvest             • Thicker cell walls             ║
║                                                 • Enhanced flavor                ║
║                                                                                   ║
║   UV exposure          UV-A/UV-B               • Increased antioxidants          ║
║                        supplementation         • Enhanced pigmentation           ║
║                                                 • Improved nutrition             ║
║                                                                                   ║
║   Temperature stress   Brief cold exposure     • Anthocyanin production          ║
║                        (for some crops)        • Red coloration                  ║
║                                                 • Stress compound production      ║
║                                                                                   ║
║   ⚠️ CAUTION: Too much stress = Reduced yield, plant damage, death              ║
║              Start conservatively, observe plant response                        ║
║                                                                                   ║
╚═══════════════════════════════════════════════════════════════════════════════════╝
```

### Pre-Harvest Finishing Techniques

```
┌───────────────────────────────────────────────────────────────────────────────────┐
│                                                                                   │
│   PRE-HARVEST OPTIMIZATION                                                        │
│                                                                                   │
│   TECHNIQUE              TIMING           IMPLEMENTATION                          │
│   ═══════════════════════════════════════════════════════════════════════════    │
│                                                                                   │
│   EC Boost               Last 5-7 days    Increase EC by 20-30%                  │
│                                           Concentrates flavors                    │
│                                                                                   │
│   Dry-Down               Last 2-3 days    Reduce irrigation 30-50%               │
│                                           Reduces water weight                    │
│                                           Concentrates compounds                  │
│                                                                                   │
│   Temperature Drop       Last 3-5 days    Drop night temp 5-10°F                 │
│                                           Enhances color (lettuce, herbs)         │
│                                                                                   │
│   Extended Dark          Final 24-48 hrs  Complete darkness                       │
│   (some crops)                            May enhance certain compounds           │
│                                                                                   │
│   Harvest Timing         Morning          Higher turgor, better crispness        │
│                          vs Evening       May have higher sugar (afternoon)       │
│                                                                                   │
│   ─────────────────────────────────────────────────────────────────────────────  │
│                                                                                   │
│   EXAMPLE: Premium Lettuce Finish                                                │
│                                                                                   │
│   Day -7 to -4:  Maintain normal conditions                                      │
│   Day -3 to -2:  Slight EC increase (1.2 → 1.4 mS/cm)                           │
│   Day -2 to -1:  Reduce irrigation frequency by 25%                             │
│   Day -1:        Night temperature drop (68°F → 60°F)                           │
│   Harvest:       Morning, before heat of day                                     │
│                                                                                   │
└───────────────────────────────────────────────────────────────────────────────────┘
```

---

## Optimization by Crop Type

### Quick Reference: Optimization Settings

```
╔═══════════════════════════════════════════════════════════════════════════════════╗
║                                                                                   ║
║                         CROP OPTIMIZATION QUICK REFERENCE                         ║
║                                                                                   ║
║   CROP          DLI      TEMP (D/N)   CO₂      EC       PHOTOPERIOD              ║
║   ════════════════════════════════════════════════════════════════════════════   ║
║                                                                                   ║
║   LEAFY GREENS                                                                    ║
║   Lettuce       12-17    68-75/60-65  400-800  0.8-1.4  16-18 hrs               ║
║   Spinach       10-15    60-70/50-60  400-600  1.0-1.8  12-14 hrs               ║
║   Arugula       12-16    65-72/55-62  400-800  1.0-1.6  14-16 hrs               ║
║                                                                                   ║
║   HERBS                                                                           ║
║   Basil         15-25    72-82/65-72  600-1000 1.0-1.6  14-18 hrs               ║
║   Cilantro      10-15    60-70/55-62  400-600  1.2-1.8  12-14 hrs               ║
║   Mint          12-18    65-75/58-65  400-800  1.2-2.0  14-16 hrs               ║
║                                                                                   ║
║   FRUITING                                                                        ║
║   Tomato        20-35    75-85/65-70  800-1200 2.0-3.5  14-16 hrs               ║
║   Pepper        18-30    75-82/65-70  800-1200 1.8-2.8  14-16 hrs               ║
║   Cucumber      20-30    78-85/68-72  800-1200 1.8-2.5  16-18 hrs               ║
║   Strawberry    15-25    68-75/55-62  600-1000 1.0-1.8  14-16 hrs               ║
║                                                                                   ║
║   Notes:                                                                          ║
║   • DLI in mol/m²/day                                                            ║
║   • Temperature in °F                                                             ║
║   • CO₂ in ppm                                                                   ║
║   • EC in mS/cm                                                                  ║
║                                                                                   ║
╚═══════════════════════════════════════════════════════════════════════════════════╝
```

---

## Summary

### Key Takeaways

1. **Balance the triangle** - Light, CO₂, and temperature must be coordinated
2. **DLI matters** - Total daily light often more important than instantaneous intensity
3. **Use DIF strategically** - Temperature differentials control plant height
4. **Steer with intention** - Push vegetative or generative growth as needed
5. **Finish with care** - Pre-harvest techniques enhance quality

### Optimization Checklist

| Factor | Check | Optimize For |
|--------|-------|--------------|
| Light intensity | PPFD matches crop | Growth rate |
| DLI | Accumulated light meets needs | Yield |
| Photoperiod | Hours match crop type | Flowering/bolting |
| Day temperature | Within optimal range | Photosynthesis |
| Night temperature | DIF strategy applied | Height control |
| CO₂ | Matched to light level | Growth rate |
| EC | Matched to growth stage | Quality vs quantity |
| Irrigation | Dry-back appropriate | Veg/gen balance |

---

## Review Questions

1. How does the limiting factor principle affect your optimization decisions?
2. Why must CO₂ enrichment be matched with light intensity?
3. How would you use DIF to control plant height without chemicals?
4. What pre-harvest techniques could improve lettuce quality?
5. How does the ratio of blue to red light affect plant morphology?

---

*EcoFusion Academy - Course 106: Module 5*
