# Water Quality Troubleshooting Guide

## Course 402: Advanced Aquaculture Systems

**Quick Reference for RAS Problem Solving**

---

## Problem: Rising Ammonia (TAN)

### Symptoms
- TAN >1 mg/L and increasing
- Fish gasping at surface
- Lethargy, loss of appetite
- Inflamed gills

### Possible Causes

```
┌────────────────────────────────────────────────────┐
│ CAUSE                    │ INVESTIGATION           │
├────────────────────────────────────────────────────┤
│ Biofilter failure        │ Check aeration, flow    │
│ Overfeeding              │ Review feed records     │
│ Dead fish decomposing    │ Check tanks thoroughly  │
│ Biofilter too small      │ Calculate loading rate  │
│ Low pH (<7.0)            │ Test pH, alkalinity     │
│ Low DO in biofilter      │ Check blower operation  │
│ Chemical contamination   │ Review recent additions │
└────────────────────────────────────────────────────┘
```

### Immediate Actions (0-4 hours)

1. **Stop feeding immediately**
2. **Increase water exchange** (10-20% if possible)
3. **Check biofilter aeration** - should be vigorous
4. **Add Ammo-Lock or similar** (emergency only, not a solution)
5. **Test pH** - if <7.0, add buffer
6. **Remove any dead fish**

### Short-Term Actions (24-48 hours)

1. **Increase water exchange** to 25-50% if needed
2. **Feed minimally** (<50% normal) or not at all
3. **Monitor TAN every 4-6 hours**
4. **Test NO₂⁻** - will spike as ammonia converts
5. **Check biofilter temperature** - should be optimal

### Long-Term Solutions

1. **Expand biofilter capacity** if chronically undersized
2. **Improve feeding management**
3. **Reduce stocking density**
4. **Review maintenance protocols**

---

## Problem: Nitrite Spike

### Symptoms
- NO₂⁻ >1 mg/L
- Brown/gray gills
- Respiratory distress
- "Brown blood disease"

### pH Toxicity Relationship

```
┌────────────────────────────────────────────────────┐
│         NITRITE TOXICITY FACTORS                   │
├────────────────────────────────────────────────────┤
│                                                     │
│  LOW CHLORIDE = HIGHER TOXICITY                    │
│  SAFE RATIO: Cl⁻ : NO₂⁻ = 10:1 minimum            │
│                                                     │
│  Example:                                          │
│  If NO₂⁻ = 5 mg/L                                  │
│  Need Cl⁻ ≥ 50 mg/L                                │
│                                                     │
│  Add salt (NaCl):                                  │
│  1 ppt salt = 606 mg/L Cl⁻                         │
│  For 50 mg/L Cl⁻ need: 0.08 ppt = 80 mg/L salt    │
│                                                     │
└────────────────────────────────────────────────────┘
```

### Immediate Actions

1. **Add salt (NaCl)** to achieve 10:1 Cl⁻:NO₂⁻ ratio
   - Calculate: (Target Cl⁻ - Current Cl⁻) × 1.65 = g NaCl per liter
   - Add gradually over 2-4 hours

2. **Reduce feeding** to 50% or stop

3. **Increase aeration** - helps fish cope

4. **Check biofilter** - NOB (nitrite oxidizers) may be inhibited

### Short-Term Actions

- **Wait for NOB to establish** - typically 1-2 weeks after AOB
- **Continue salt supplementation**
- **Monitor daily**
- **Water exchange** if critically high (>10 mg/L)

### Long-Term Solutions

- **Be patient** - nitrite will drop as NOB population grows
- **Don't shock system** - sudden changes can reset biofilter
- **Maintain optimal conditions** for NOB (pH 7.5-8.0, DO >4 mg/L)

---

## Problem: pH Crash (pH <6.5)

### Symptoms
- pH dropping rapidly
- Fish stressed, erratic swimming
- Biofilter performance declining
- Alkalinity depleted

### Cause Analysis

```
┌────────────────────────────────────────────────────┐
│             pH DECLINE CAUSES                      │
├────────────────────────────────────────────────────┤
│                                                     │
│  PRIMARY CAUSE: Nitrification consuming alkalinity │
│                                                     │
│  Each kg TAN oxidized consumes:                    │
│  7.14 kg CaCO₃ (alkalinity)                        │
│  Produces: 2H⁺ (acidity)                           │
│                                                     │
│  CONTRIBUTING FACTORS:                             │
│  - Inadequate alkalinity addition                  │
│  - Poor degassing (CO₂ accumulation)               │
│  - Organic acid accumulation                       │
│  - Low water hardness                              │
│                                                     │
└────────────────────────────────────────────────────┘
```

### Immediate Actions

1. **Test alkalinity** - likely <30 mg/L

2. **Prepare sodium bicarbonate solution**
   ```
   Target: Raise pH by 0.5 units at a time
   Maximum: 0.5 pH units per 24 hours

   NaHCO₃ needed (kg) = Volume (m³) × 60 mg/L × 0.001

   Example for 1000 m³:
   NaHCO₃ = 1000 × 60 × 0.001 = 60 kg
   ```

3. **Add 50% of calculated buffer immediately**

4. **Add remainder over 24 hours**

5. **Increase aeration/degassing** - remove CO₂

6. **Reduce feeding** to 50%

### Preventive Measures

1. **Monitor alkalinity weekly**

2. **Maintain target: 50-150 mg/L CaCO₃**

3. **Calculate expected consumption:**
   ```
   Feed rate × Protein × 0.092 × 7.14 = CaCO₃ consumed/day

   Example:
   100 kg feed × 40% protein × 0.092 × 7.14 = 26.3 kg/day

   Weekly consumption: 184 kg for 1000 m³ system
   = 184 mg/L drop
   ```

4. **Automated buffer dosing** if possible

---

## Problem: Low Dissolved Oxygen

### Critical Levels

```
┌────────────────────────────────────────────────────┐
│         DO EMERGENCY RESPONSE                      │
├────────────────────────────────────────────────────┤
│                                                     │
│  DO < 4 mg/L:  CRITICAL - IMMEDIATE ACTION         │
│  DO < 5 mg/L:  High Alert - Investigate            │
│  DO < 6 mg/L:  Warning - Monitor Closely           │
│                                                     │
│  TIME TO MORTALITY:                                │
│  DO 3 mg/L: 2-6 hours                              │
│  DO 2 mg/L: 30-120 minutes                         │
│  DO 1 mg/L: 15-30 minutes                          │
│  DO 0 mg/L: 5-15 minutes                           │
│                                                     │
└────────────────────────────────────────────────────┘
```

### Immediate Actions (Minutes Count!)

1. **Check oxygen supply**
   - Oxygen tank pressure/level
   - Generator operation
   - Blower function

2. **Activate backup aeration** immediately

3. **Stop feeding** completely

4. **Call for help** - all hands needed

5. **Check for blockages**
   - Clogged pipes
   - Closed valves
   - Equipment failure

6. **Emergency measures:**
   - Portable generators if power failed
   - Pure oxygen from cylinders
   - Bucket water exchange if necessary

### Troubleshooting Decision Tree

```
┌─────────────────────────────────────────────────┐
│                                                  │
│  Low DO Detected                                │
│       │                                          │
│       v                                          │
│  Check Oxygen System Working?                   │
│       │                                          │
│       ├─ NO ──> Repair/Replace Immediately      │
│       │         Activate Backup                 │
│       │                                          │
│       └─ YES ─> System Overloaded?              │
│                 │                                │
│                 ├─ YES ──> Reduce density       │
│                 │          Add O₂ capacity      │
│                 │                                │
│                 └─ NO ──> Check for:            │
│                           - Algae bloom         │
│                           - Organic overload    │
│                           - Equipment failure   │
│                                                  │
└─────────────────────────────────────────────────┘
```

---

## Problem: High Nitrate Accumulation

### When NO₃⁻ >200 mg/L

### Options

```
┌────────────────────────────────────────────────────┐
│       NITRATE MANAGEMENT STRATEGIES                │
├────────────────────────────────────────────────────┤
│                                                     │
│  1. WATER EXCHANGE                                 │
│     - Simplest but wasteful                        │
│     - 10-20% exchange reduces by same amount       │
│     - Ongoing cost and environmental impact        │
│                                                     │
│  2. DENITRIFICATION REACTOR                        │
│     - Biological conversion NO₃⁻ → N₂ gas          │
│     - Requires carbon source                       │
│     - Capital investment                           │
│     - Operating cost for carbon                    │
│                                                     │
│  3. PLANT INTEGRATION                              │
│     - Aquaponics for nutrient removal              │
│     - Additional product stream                    │
│     - Complex management                           │
│                                                     │
│  4. TOLERANCE APPROACH                             │
│     - Many species tolerate 200-300 mg/L           │
│     - Monitor for adverse effects                  │
│     - Maintain with minimal exchange               │
│                                                     │
└────────────────────────────────────────────────────┘
```

---

## Problem: Off-Flavor in Fish

### Common Causes

| Cause | Indicator | Solution |
|-------|-----------|----------|
| Geosmin/MIB (algae/bacteria) | Earthy/musty | UV, ozone, purging |
| Organic accumulation | Various | Water exchange, filtration |
| Poor diet | Feed-related | Change feed, purge longer |
| High nitrate | Chemical | Reduce NO₃⁻ levels |
| Poor water quality | Multiple factors | System cleanup |

### Purging Protocol

```
STANDARD PURGE:
Duration: 3-7 days
Water: Clean, high-quality
DO: >6 mg/L
Temperature: Slightly cooler if possible
Feed: None
Flow: High turnover

EXTENDED PURGE (severe):
Duration: 7-14 days
May need to move fish to separate purge tank
```

---

## Emergency Contact Checklist

Keep these numbers readily available:

- [ ] Oxygen supplier emergency line: __________
- [ ] Electrical service/generator repair: __________
- [ ] Aquaculture veterinarian: __________
- [ ] Equipment supplier technical support: __________
- [ ] Backup staff contact numbers: __________
- [ ] Water testing laboratory: __________

---

## Daily Monitoring Checklist

```
MORNING CHECKS:
□ Visual inspection all tanks
□ Fish behavior normal
□ Feeding response good
□ DO readings >6 mg/L
□ Temperature within range
□ Equipment operating normally
□ No alarms active

WATER QUALITY (minimum):
□ DO: _____ mg/L
□ Temperature: _____ °C
□ pH: _____
□ TAN: _____ mg/L (weekly minimum)
□ NO₂⁻: _____ mg/L (weekly minimum)

EVENING CHECKS:
□ Repeat morning observations
□ Record daily mortality
□ Check feed consumption
□ Log any irregularities
```

---

## Key Principle

**Early Detection = Easier Solution**

Monitor continuously, respond quickly, prevent when possible.

---

*Keep this guide accessible at all times when managing RAS facilities!*

*EcoFusion Academy - Course 402: Advanced Aquaculture Systems*
