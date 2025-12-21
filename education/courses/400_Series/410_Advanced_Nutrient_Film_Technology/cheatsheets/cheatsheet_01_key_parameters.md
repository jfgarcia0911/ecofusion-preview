# Cheatsheet 1: Key NFT Parameters Quick Reference

## Essential System Parameters

### Channel Design
```
Parameter                Value               Notes
─────────────────────────────────────────────────────────────────
Slope                   1:100 (1%)          Standard for most crops
                        Range: 0.5-2%       Adjust for specific needs
Channel width           100-150 mm          Leafy greens standard
Film depth              1-3 mm              Critical for O2 transfer
Flow rate               1-2 L/min           Per channel
Velocity                0.02-0.05 m/s       Laminar flow regime
Max channel length      10-15 m             Nutrient/DO limits
Plant spacing           150-250 mm          Crop dependent
```

### Solution Parameters
```
Parameter                Lettuce      Basil        Herbs        Strawberry
──────────────────────────────────────────────────────────────────────────────
EC (mS/cm)              1.6-2.2      2.0-2.4      1.4-2.4      1.4-2.0
pH                      5.8-6.2      6.0-6.5      5.8-6.5      5.5-6.0
Temperature (°C)        18-20        21-23        18-22        18-22
DO (mg/L)               >8           >8           >7           >8
N (ppm)                 180-220      200-220      160-220      180-200
K (ppm)                 240-300      270-320      240-300      300-350
Ca (ppm)                160-200      180-220      160-200      180-220
```

### Environmental Targets
```
Parameter                Range              Optimal          Critical
─────────────────────────────────────────────────────────────────────
Air temperature         18-24°C            20-22°C          >26°C
Humidity                55-75%             60-70%           >80%
VPD                     0.6-1.4 kPa        0.8-1.2 kPa      <0.4 or >1.6
CO2                     400-1200 ppm       800-1000 ppm     <300
Light (PPFD)            200-400 µmol/m²/s  250-300          <150
Photoperiod             14-18 hours        16 hours         varies
```

## Quick Calculations

### Flow Rate from Film Depth
```
Q (L/min) ≈ Width (m) × Depth (m) × Velocity (m/s) × 60,000

Example: 0.1m wide, 0.002m deep, 0.03 m/s velocity
Q = 0.1 × 0.002 × 0.03 × 60,000 = 0.36 L/min
Adjust to 1.0-1.5 L/min for reliability
```

### Pump Head Requirements
```
TDH = Static lift + Friction + Channel drop + 20% safety

Example: 2m lift, 0.5m friction, 0.1m channel = 2.6m × 1.2 = 3.12m
```

### DO Saturation vs. Temperature
```
Temp (°C)    DO_sat (mg/L)     % of 20°C
────────────────────────────────────────────
15           10.1              111%
18           9.5               104%
20           9.1               100%
22           8.7               96%
24           8.4               92%
26           8.1               89%
28           7.8               86%
30           7.5               82%
```

### Nutrient Concentration Conversions
```
From ppm to mM: ppm / (atomic weight × valence)
From mM to ppm: mM × (atomic weight × valence)

Example: 200 ppm NO3⁻
200 / (14 × 1) = 14.3 mM nitrogen as nitrate

Element     Atomic Wt    Common Valence
────────────────────────────────────────
N           14.01        1 (as NO3⁻)
P           30.97        1 (as H2PO4⁻)
K           39.10        1
Ca          40.08        2
Mg          24.31        2
S           32.07        2 (as SO4²⁻)
```

## Troubleshooting Decision Tree

```
POOR GROWTH?
├─> Check pH (5.5-6.5)? → Adjust if outside range
├─> Check EC (target range)? → Adjust concentration
├─> Check Temperature (<22°C)? → Cool if hot
├─> Check DO (>6 mg/L)? → Increase aeration
├─> Check Light (>200 µmol)? → Increase intensity
└─> Check roots → See root health section

TIP BURN?
├─> Ca adequate (>160 ppm)? → Add if low
├─> EC too high (>2.5)? → Dilute solution
├─> Humidity low (<60%)? → Increase humidity
└─> Temperature high (>24°C)? → Cool facility

SLOW GROWTH?
├─> Temperature low (<18°C)? → Add heating
├─> Light low (<200 µmol)? → Increase or extend photoperiod
├─> Nutrient deficiency? → Check specific nutrients
└─> Root disease? → Inspect roots, treat if needed

ROOT ROT?
├─> DO low (<6 mg/L)? → Increase aeration IMMEDIATELY
├─> Temperature high (>22°C)? → Cool solution
├─> Remove affected plants
└─> Treat with H2O2 or biocontrol
```

## Critical Alert Thresholds

```
Parameter           WARNING          CRITICAL          Action
──────────────────────────────────────────────────────────────────
pH                  <5.3 or >6.8     <5.0 or >7.2     Adjust immediately
EC                  ±0.4 target      ±0.8 target      Add stock or dilute
Temperature         >23°C            >25°C            Activate cooling
DO (reservoir)      <7 mg/L          <6 mg/L          Increase aeration
DO (outlet)         <6 mg/L          <5 mg/L          Emergency response
Flow stopped        -                Any duration     Hand water plants
Power loss          >15 min          >1 hour          Backup systems
```

## Daily Monitoring Checklist

```
□ pH reading (adjust if outside 5.5-6.5)
□ EC reading (adjust if outside target ±0.2)
□ Solution temperature (<22°C preferred)
□ DO reading (>8 mg/L reservoir, >6 mg/L outlet)
□ Solution level (top off as needed)
□ Visual plant health (color, vigor, no wilting)
□ Root appearance (white/cream, healthy)
□ Flow continuity (all channels flowing)
□ Equipment operation (pumps, fans, lights)
□ Remove dead/damaged plant material
```

## Maintenance Schedule Summary

```
DAILY: Check parameters, visual inspection (10 min)
WEEKLY: Clean filters, verify sensors, flow rates (45 min)
MONTHLY: Calibrate sensors, deep clean, replace consumables (3 hrs)
QUARTERLY: Major inspection, replace scheduled parts (6 hrs)
BETWEEN CROPS: Complete system sanitization (8 hrs)
```

## Common Mistakes to Avoid

```
❌ Channel too long (>15m) → Nutrient depletion
❌ Slope incorrect (not 1%) → Poor flow or flooding
❌ Flow too low (<0.8 L/min) → Dry spots, stress
❌ Flow too high (>3 L/min) → Nutrient bypass, disturbance
❌ Temperature >24°C → Low DO, disease risk
❌ pH outside 5.5-6.5 → Nutrient availability issues
❌ Ignoring root mat buildup → Flow restriction
❌ Infrequent sensor calibration → Inaccurate control
❌ No backup pump → Catastrophic failure risk
❌ Commodity pricing strategy → Usually unprofitable
```

## Emergency Contacts

```
POWER FAILURE:
1. Start generator if available
2. Manual aeration (stir solution)
3. Monitor DO closely
4. Consider early harvest if extended

PUMP FAILURE:
1. Switch to backup pump
2. Hand water if no backup
3. Order replacement immediately
4. Repair failed unit as spare

DISEASE OUTBREAK:
1. Isolate affected area
2. Remove symptomatic plants
3. Increase DO, reduce temperature
4. Apply treatment protocol
5. Monitor all plants 2×daily

CONTAMINATION:
1. Stop circulation
2. Isolate affected system
3. Document thoroughly
4. Drain and sanitize
5. Test before refilling
```

---

**Print this cheatsheet and keep near your NFT system for quick reference!**

*EcoFusion Academy - Course 410*
