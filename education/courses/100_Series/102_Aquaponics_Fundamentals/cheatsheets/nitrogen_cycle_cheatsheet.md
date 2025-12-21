# Nitrogen Cycle Cheat Sheet
## Course 102: Aquaponics Fundamentals

---

## THE NITROGEN CYCLE AT A GLANCE

```
┌─────────────────────────────────────────────────────────────────────┐
│                     THE NITROGEN CYCLE                              │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│    FISH WASTE                                                       │
│        │                                                            │
│        ▼                                                            │
│   ┌─────────┐                                                       │
│   │ AMMONIA │  NH3/NH4+  ⚠️ TOXIC above 0.5 ppm                     │
│   │  (TAN)  │                                                       │
│   └────┬────┘                                                       │
│        │                                                            │
│        │  NITROSOMONAS bacteria                                     │
│        │  (Need oxygen + surface area)                              │
│        ▼                                                            │
│   ┌─────────┐                                                       │
│   │ NITRITE │  NO2⁻     ⚠️ TOXIC above 1 ppm                       │
│   │         │                                                       │
│   └────┬────┘                                                       │
│        │                                                            │
│        │  NITROBACTER bacteria                                      │
│        │  (Need oxygen + surface area)                              │
│        ▼                                                            │
│   ┌─────────┐                                                       │
│   │ NITRATE │  NO3⁻     ✅ SAFE up to ~150 ppm                     │
│   │         │           ✅ PLANT FOOD!                              │
│   └────┬────┘                                                       │
│        │                                                            │
│        │  Plant uptake                                              │
│        ▼                                                            │
│   ┌─────────┐                                                       │
│   │ PLANTS  │  Absorb NO3, grow, clean water                       │
│   │         │                                                       │
│   └────┬────┘                                                       │
│        │                                                            │
│        │  Clean water                                               │
│        ▼                                                            │
│   RETURNS TO FISH TANK                                              │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## WATER PARAMETER TARGETS

### Quick Reference Table

| Parameter | Target Range | Danger Level | Test Frequency |
|-----------|--------------|--------------|----------------|
| **Ammonia (NH3)** | 0 ppm | > 0.5 ppm | Daily (new), Weekly (established) |
| **Nitrite (NO2)** | 0 ppm | > 1 ppm | Daily (new), Weekly (established) |
| **Nitrate (NO3)** | 20-60 ppm | > 150 ppm | Weekly |
| **pH** | 6.8-7.2 | < 6 or > 8 | Daily |
| **Temperature** | 68-86°F | Species-specific | Daily |
| **Dissolved Oxygen** | > 5 ppm | < 4 ppm | Weekly |

### Visual Target Ranges

```
AMMONIA (NH3)
├──────────────────────────────────────────────────────────────┤
0 ppm              0.25              0.5               1.0+
[█████ SAFE █████][⚠️ CAUTION][❌ DANGER ❌❌❌❌❌❌❌❌❌]

NITRITE (NO2)
├──────────────────────────────────────────────────────────────┤
0 ppm              0.5               1.0               2.0+
[█████ SAFE █████][⚠️ CAUTION][❌ DANGER ❌❌❌❌❌❌❌❌❌]

NITRATE (NO3)
├──────────────────────────────────────────────────────────────┤
0 ppm        20        40        60        100       150+
[LOW][█████ OPTIMAL █████][ACCEPTABLE][⚠️][❌ DANGER]

pH
├──────────────────────────────────────────────────────────────┤
5.0    6.0    6.5    6.8    7.0    7.2    7.5    8.0    9.0
[❌❌❌][⚠️][████ OPTIMAL ████][⚠️][❌❌❌❌]
```

---

## BACTERIA ESSENTIALS

### The Two Key Players

| Bacteria | Converts | To | Optimal Conditions |
|----------|----------|-----|-------------------|
| **Nitrosomonas** | Ammonia (NH3) | Nitrite (NO2) | pH 7.0-8.0, Temp 77-86°F |
| **Nitrobacter** | Nitrite (NO2) | Nitrate (NO3) | pH 7.3-7.5, Temp 77-86°F |

### What Bacteria Need

```
BACTERIA REQUIREMENTS CHECKLIST

✅ SURFACE AREA
   - Grow media (clay pebbles, lava rock)
   - Bio balls, K1 media
   - Filter pads, sponges

✅ OXYGEN
   - Adequate water flow
   - Aeration
   - Avoid stagnant areas

✅ AMMONIA SOURCE
   - Fish waste
   - Uneaten food
   - Decaying plant matter

✅ STABLE CONDITIONS
   - Consistent temperature
   - Stable pH
   - No sudden changes

❌ WHAT KILLS BACTERIA
   - Chlorine/chloramine
   - Extreme pH (< 6 or > 8)
   - Lack of oxygen
   - Temperature shock
   - Antibiotics/medications
```

---

## CYCLING A NEW SYSTEM

### Fishless Cycling Timeline

| Week | What Happens | What to Do | Target Levels |
|------|--------------|------------|---------------|
| **1** | System setup, ammonia added | Add ammonia to 2-4 ppm | NH3: 2-4 ppm |
| **2** | Ammonia stays high | Continue daily ammonia, wait | NH3: 2-4 ppm |
| **3** | Nitrite appears | Keep adding ammonia | NH3: 2-4, NO2 rising |
| **4** | Nitrite peaks | Reduce ammonia additions | NH3 down, NO2 high |
| **5** | Nitrate appears | Continue monitoring | NO2 dropping, NO3 rising |
| **6** | Cycle completes | Test: add 2 ppm NH3 | NH3 & NO2 → 0 in 24 hrs |

### Cycling Progress Chart

```
CYCLING TIMELINE (Fishless Method)

Week 1   Week 2   Week 3   Week 4   Week 5   Week 6
  │        │        │        │        │        │
  │        │        │        │        │        │
  │        │    ┌───┴───┐    │        │        │
  │        │    │ NITRITE│    │        │        │
  │        │    │  PEAK  │    │        │        │
  │    ┌───┴────┴───────┴────┴──┐     │        │
  │    │        AMMONIA          │     │        │
  │    │      (gradually drops)  │     │        │
  └────┴─────────────────────────┴─────┴────────┘
                                       │
                               ┌───────┴───────┐
                               │    NITRATE    │
                               │   (climbing)  │
                               └───────────────┘
                                       │
                                       ▼
                              SYSTEM CYCLED!
                         (NH3 & NO2 → 0 in 24 hrs)
```

---

## TROUBLESHOOTING GUIDE

### High Ammonia

```
HIGH AMMONIA EMERGENCY PROTOCOL

Symptoms:
• Fish gasping at surface
• Red/inflamed gills
• Lethargy, loss of appetite
• Test shows > 0.5 ppm

Causes:
□ Overfeeding
□ Dead fish
□ Overstocking
□ New system (not cycled)
□ Bacteria die-off

Immediate Actions:
1. STOP feeding (24-48 hours)
2. Check for dead fish/material
3. 25% water change (dechlorinated)
4. Increase aeration
5. Test again in 12 hours

Long-term Fix:
• Reduce feeding permanently
• Reduce fish population
• Add more biofilter capacity
```

### High Nitrite

```
HIGH NITRITE EMERGENCY PROTOCOL

Symptoms:
• "Brown blood disease"
• Fish lethargic
• Darkened color
• Test shows > 1 ppm

Causes:
□ System still cycling
□ Bacteria imbalance
□ pH crash (bacteria die-off)
□ Temperature swing

Immediate Actions:
1. Reduce/stop feeding
2. 25% water change
3. Add salt (1 ppt) - reduces toxicity
4. Increase aeration
5. Wait for Nitrobacter to catch up

Prevention:
• Complete cycling before adding fish
• Maintain stable conditions
• Never overfeed
```

### High Nitrate

```
HIGH NITRATE (> 150 ppm)

Not immediately toxic, but indicates imbalance

Causes:
□ Not enough plants
□ Overfeeding
□ High fish density
□ Infrequent water changes

Solutions:
1. Add more plants!
2. Reduce feeding
3. 10-25% water change
4. Check plant health (roots?)
5. Ensure plants are actively growing
```

---

## pH MANAGEMENT

### The pH Balancing Act

```
pH COMPROMISE ZONE

Fish prefer: pH 7.0-8.0
Plants prefer: pH 5.5-6.5
Bacteria prefer: pH 7.0-8.0

        COMPROMISE ZONE: pH 6.8-7.2
        ┌────────────────────────────┐
        │    EVERYONE DOES OKAY     │
        │         here!             │
        └────────────────────────────┘

Below 6.0:
• Bacteria slow/stop
• Nitrogen cycle breaks down
• Fish stressed

Above 8.0:
• Ammonia more toxic (NH3 vs NH4+)
• Nutrient lockout for plants
• Iron becomes unavailable
```

### pH Adjustment Methods

| Direction | Method | Notes |
|-----------|--------|-------|
| **Raise pH** | Calcium carbonate (shells, limestone) | Slow, stable |
| **Raise pH** | Potassium bicarbonate | Fast, also adds potassium |
| **Raise pH** | Calcium hydroxide | Very fast, use carefully |
| **Lower pH** | Phosphoric acid | Safe for systems |
| **Lower pH** | Let system naturally drop | Nitrification produces acid |

⚠️ **NEVER USE:** Vinegar, citric acid, baking soda (sodium)

---

## AMMONIA FORMS & TOXICITY

### Understanding TAN (Total Ammonia Nitrogen)

```
AMMONIA TOXICITY vs pH

TAN exists in two forms:
• NH3 (un-ionized) = TOXIC
• NH4+ (ionized) = Less toxic

Percentage of toxic NH3 increases with:
• Higher pH
• Higher temperature

Example: 1 ppm TAN at different conditions:

pH 7.0 at 77°F:  0.5% toxic NH3 = 0.005 ppm ✅
pH 8.0 at 77°F:  4.5% toxic NH3 = 0.045 ppm ⚠️
pH 8.5 at 86°F:  18% toxic NH3  = 0.18 ppm  ❌

KEY TAKEAWAY:
Higher pH = More toxic ammonia
Keep pH in optimal range (6.8-7.2)!
```

---

## TESTING PROTOCOL

### Daily Testing (New System)

```
DAILY TESTING CHECKLIST

□ Temperature (thermometer)
□ pH (meter or test kit)
□ Ammonia (liquid test kit)
□ Nitrite (liquid test kit)

Record in log book!
```

### Weekly Testing (Established System)

```
WEEKLY TESTING CHECKLIST

□ Temperature
□ pH
□ Ammonia
□ Nitrite
□ Nitrate
□ Visual inspection
□ Fish behavior check
□ Plant health check

Record & compare to trends!
```

### Test Kit Recommendations

| Type | Accuracy | Cost | Best For |
|------|----------|------|----------|
| **Test Strips** | Low-Medium | $ | Quick checks |
| **Liquid Kits** | High | $$ | Regular testing |
| **Digital Meters** | Very High | $$$ | Serious growers |
| **Lab Testing** | Highest | $$$$ | Troubleshooting |

**Recommended:** API Freshwater Master Test Kit ($25-35)

---

## QUICK FORMULAS

### Ammonia Production

```
Daily Ammonia Production ≈ Feed × 0.03

Example:
100g feed/day × 0.03 = 3g ammonia/day
```

### Biofilter Sizing

```
Nitrification Rate = 0.5-1.0 g TAN/m²/day

Required Surface Area = Daily TAN ÷ Nitrification Rate

Example:
3g TAN/day ÷ 0.5 g/m²/day = 6 m² minimum
```

---

## MEMORY AIDS

### The Cycle Order

**"A Nice Night"**
- **A**mmonia → **N**itrite → **N**itrate

### Bacteria Names

**"Nitro-SO-monas = SO first"** (First bacteria)
**"Nitro-BACTER = BETTER last"** (Finishes the job)

### Safe Levels

**"Zero-Zero-Sixty"**
- Ammonia: **0** ppm
- Nitrite: **0** ppm
- Nitrate: Up to **60** ppm optimal

---

## EMERGENCY QUICK REFERENCE

| Situation | Immediate Action |
|-----------|-----------------|
| **Ammonia spike** | Stop feeding, water change, add aeration |
| **Nitrite spike** | Stop feeding, water change, add salt (1 ppt) |
| **pH crash (<6)** | Add buffer slowly, check for dead matter |
| **pH spike (>8)** | Small water change, identify source |
| **Fish gasping** | Check DO, add aeration, reduce feeding |
| **All parameters off** | 25% water change, reassess system |

---

*Nitrogen Cycle Cheat Sheet | Course 102: Aquaponics Fundamentals*
*Print this sheet and post near your system!*
*EcoFusion Academy*
