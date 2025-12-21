# DLI Requirements by Crop

**Course:** 205 - LED Lighting Science

## Quick Reference: Daily Light Integral Targets

### Leafy Greens & Microgreens

```
CROP                    OPTIMAL DLI       PPFD (16hr)     PPFD (18hr)
══════════════════════════════════════════════════════════════════════
Butterhead Lettuce      12-14 mol/m²/d    208-243 μmol/m²/s   185-216 μmol/m²/s
Romaine Lettuce         14-17             243-295            216-260
Red Leaf Lettuce        15-18             260-313            231-278
Arugula                 12-15             208-260            185-231
Spinach                 12-16             208-278            185-247
Kale                    14-18             243-313            216-278
Pak Choi                14-17             243-295            216-260
Swiss Chard             13-17             226-295            201-260
Mustard Greens          13-16             226-278            201-247

MICROGREENS
Sunflower               10-14             174-243            154-216
Pea Shoots              12-16             208-278            185-247
Radish                  14-18             243-313            216-278
Broccoli                12-16             208-278            185-247
Wheatgrass              10-14             174-243            154-216
```

### Herbs

```
CROP                    OPTIMAL DLI       PPFD (16hr)     PPFD (18hr)
══════════════════════════════════════════════════════════════════════
Basil                   16-20 mol/m²/d    278-347 μmol/m²/s   247-309 μmol/m²/s
Cilantro                14-18             243-313            216-278
Parsley                 15-19             260-330            231-293
Mint                    14-17             243-295            216-260
Dill                    16-20             278-347            247-309
Oregano                 17-22             295-382            260-340
Thyme                   15-20             260-347            231-309
Chives                  13-17             226-295            201-260
```

### Fruiting Crops

```
CROP & STAGE           OPTIMAL DLI       PPFD (14hr)     PPFD (16hr)
══════════════════════════════════════════════════════════════════════
TOMATO
  Seedling              12-15 mol/m²/d    238-298 μmol/m²/s   208-260 μmol/m²/s
  Vegetative            20-25             397-496            347-434
  Fruiting              25-35             496-695            434-608

CUCUMBER                22-30             437-595            382-521

PEPPER
  Vegetative            18-25             357-496            313-434
  Fruiting              20-28             397-556            347-486

STRAWBERRY              15-25             298-496            260-434

EGGPLANT               22-30             437-595            382-521

MELON                  25-35             496-695            434-608
```

### Cannabis

```
STAGE                  OPTIMAL DLI       PPFD (18hr)     PPFD (12hr)
══════════════════════════════════════════════════════════════════════
Clone/Seedling          12-16 mol/m²/d    185-247 μmol/m²/s   278-370 μmol/m²/s
Early Vegetative        18-25             278-386            417-579
Late Vegetative         25-35             386-540            579-810
Early Flower            30-40             -                  694-926
Peak Flower             40-50             -                  926-1157
Late Flower             35-45             -                  810-1041

Note: Flowering requires 12-hour photoperiod (short-day response)
```

## PPFD Conversion Table

Use this table to quickly convert between DLI and PPFD for different photoperiods:

```
                        PHOTOPERIOD (Hours)
DLI         12hr    14hr    16hr    18hr    20hr    24hr
mol/m²/d    ────────────────────────────────────────────── μmol/m²/s
5           116     99      87      77      69      58
10          231     198     174     154     139     116
12          278     238     208     185     167     139
14          324     277     243     216     194     162
16          370     317     278     247     222     185
18          417     357     313     278     250     208
20          463     397     347     309     278     231
22          509     437     382     340     306     255
25          579     496     434     386     347     289
28          648     556     486     432     389     324
30          694     595     521     463     417     347
35          810     695     608     540     486     405
40          926     794     694     617     556     463
45          1041    893     781     694     625     521
50          1157    992     868     772     694     579

Formula: PPFD = (DLI × 1000) / (Hours × 3.6)
```

## Environmental Adjustments

```
MODIFY DLI BASED ON CONDITIONS
═══════════════════════════════════════════════════════════

CONDITION                          ADJUSTMENT    MULTIPLIER
────────────────────────────────   ──────────    ──────────
Optimal (22-25°C, adequate CO₂)    Baseline      1.0×
CO₂ enriched (800-1200 ppm)        Increase      1.2-1.4×
Low temperature (<18°C)            Decrease      0.8-0.9×
High temperature (>30°C)           Decrease      0.8-0.9×
Water stress                       Decrease      0.7-0.8×
Young seedlings                    Decrease      0.5-0.7×
Recent transplant                  Decrease      0.7-0.8×
Disease/pest stress                Decrease      0.7-0.9×

EXAMPLE:
Tomato baseline DLI: 25 mol/m²/d
With CO₂ at 1000ppm: 25 × 1.3 = 32.5 mol/m²/d
```

## Quick Calculations

```
CALCULATING DLI FROM PPFD
─────────────────────────

Example 1: Lettuce
PPFD: 250 μmol/m²/s
Photoperiod: 16 hours
DLI = 250 × 16 × 3.6 / 1000 = 14.4 mol/m²/d ✓

Example 2: Tomato
PPFD: 500 μmol/m²/s
Photoperiod: 14 hours
DLI = 500 × 14 × 3.6 / 1000 = 25.2 mol/m²/d ✓

CALCULATING PPFD FROM DLI
─────────────────────────

Example 1: Cannabis Flowering
Target DLI: 40 mol/m²/d
Photoperiod: 12 hours
PPFD = (40 × 1000) / (12 × 3.6) = 926 μmol/m²/s

Example 2: Basil
Target DLI: 18 mol/m²/d
Photoperiod: 16 hours
PPFD = (18 × 1000) / (16 × 3.6) = 313 μmol/m²/s
```

## Light Response Categories

```
CROP CLASSIFICATION BY LIGHT DEMAND
════════════════════════════════════

LOW LIGHT (10-15 mol/m²/d)
├─ Most microgreens
├─ Butterhead lettuce
├─ Spinach
├─ Arugula
└─ Shade-adapted ornamentals

MODERATE LIGHT (15-20 mol/m²/d)
├─ Most leafy greens
├─ Herbs (basil, parsley)
├─ Pak choi
└─ Young fruiting crops

MODERATE-HIGH LIGHT (20-30 mol/m²/d)
├─ Mature fruiting crops
├─ Cucumber
├─ Pepper
├─ Strawberry
└─ Cannabis (vegetative)

HIGH LIGHT (30-50 mol/m²/d)
├─ Fruiting tomato (peak)
├─ Cannabis (flowering)
├─ Vine crops (production)
└─ High-intensity herbs
```

## Saturation Points

```
Light saturation = point where additional PPFD provides minimal benefit

CROP                    SATURATION PPFD
═══════════════════════════════════════════
Lettuce                 300-400 μmol/m²/s
Spinach                 300-450
Basil                   400-500
Tomato                  800-1000
Cucumber                700-900
Pepper                  600-800
Cannabis                1200-1500
Strawberry              600-800

Above saturation: Diminishing returns
- Additional light = minimal yield increase
- Risk of photoinhibition
- Wasted energy
```

## Troubleshooting by DLI

```
SYMPTOM                 LIKELY DLI ISSUE        SOLUTION
─────────────────────   ──────────────────      ─────────────────────
Slow growth             Too low                 Increase by 20%
Pale, yellow leaves     Too low                 Increase by 30%
Leaf bleaching          Too high                Reduce by 20%
Photoinhibition         Too high                Reduce by 30%
Stretching/leggy        Too low OR wrong        Check DLI + spectrum
                        spectrum
Bolting (lettuce)       May be too high         Reduce slightly OR
                        (heat stress)           check temperature
Poor flowering          Too low (fruiting)      Increase to crop target
Thin stems              Too low                 Increase DLI
```

---

**PRO TIP:** Start at the lower end of DLI range and increase gradually while monitoring plant response. Easier to increase than recover from light stress!

**Remember:** DLI is cumulative. You can achieve same DLI with:
- High PPFD × Short photoperiod
- Low PPFD × Long photoperiod

Choose based on crop photoperiodic requirements and energy costs.
