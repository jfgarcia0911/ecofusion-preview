# Water Quality Testing Guide

**Course 412: Aquaponics Research & Development**

---

## Critical Parameters & Target Ranges

| Parameter | Target Range | Frequency | Accuracy |
|-----------|--------------|-----------|----------|
| **Temperature** | 22-28°C (species-dependent) | Continuous | ±0.1°C |
| **pH** | 6.8-7.2 | Daily | ±0.05 units |
| **Dissolved Oxygen** | >5 mg/L | Continuous | ±0.2 mg/L |
| **TAN (NH₃+NH₄⁺)** | <1 mg/L | Daily | ±0.1 mg/L |
| **Nitrite (NO₂⁻)** | <0.5 mg/L | Daily | ±0.05 mg/L |
| **Nitrate (NO₃⁻)** | 20-150 mg/L | Weekly | ±2 mg/L |
| **EC/TDS** | 0.5-2.0 mS/cm | Daily | ±1% |
| **Alkalinity** | 100-200 mg/L CaCO₃ | Weekly | ±5 mg/L |

---

## pH Measurement Protocol

**Equipment:** pH meter with automatic temperature compensation

**Procedure:**
1. Calibrate with 2-3 buffers (pH 4, 7, 10)
2. Rinse electrode with DI water
3. Immerse in sample (stirring gently)
4. Wait for stable reading (30-60 sec)
5. Record temperature-corrected value
6. Rinse and store in storage solution

**Calibration frequency:** Weekly or when drift >0.1 units

**Troubleshooting:**
- Slow response → Clean or replace electrode
- Drift → Recalibrate
- Unstable readings → Check temperature stability

---

## Dissolved Oxygen Measurement

**Optical Sensor (Recommended):**
- No membrane, no electrolyte
- Minimal drift
- Calibrate monthly

**Polarographic Sensor:**
- Consumes O₂ (requires stirring)
- Replace membrane/electrolyte every 3-6 months
- Calibrate weekly

**Calibration:**
- 100% sat: Air-saturated water
- 0% sat: Sodium sulfite solution

**Temperature correction:** Always use automatic compensation

**Critical levels:**
- <3 mg/L: Fish stress
- <2 mg/L: Mortality risk
- >8 mg/L: Supersaturation (gas bubble disease possible)

---

## Nitrogen Compound Testing

### Total Ammonia Nitrogen (TAN)

**Method:** Salicylate colorimetric (most common)

**Procedure:**
1. Add 1 mL sample to test tube
2. Add reagent 1 (salicylate), mix
3. Add reagent 2 (hypochlorite), mix
4. Wait 20 minutes for color development
5. Read absorbance at 655 nm
6. Compare to standard curve

**Range:** 0-3 mg/L (dilute if higher)
**Interference:** High salinity (>5 ppt)

**Un-ionized ammonia (toxic form):**
```
NH₃ (%) = 100 / (1 + 10^(pKa - pH))

Where pKa = 0.09018 + 2729.92/T(K)

Example: pH 7.0, T=25°C
pKa = 9.25
NH₃ = 0.4% of TAN
```

### Nitrite (NO₂-N)

**Method:** Diazotization (Griess reaction)

**Procedure:**
1. Add 10 mL sample
2. Add sulfanilamide reagent
3. Wait 5 minutes
4. Add NED reagent
5. Wait 5 minutes
6. Read at 540 nm

**Range:** 0-0.5 mg/L
**Toxic level:** >1 mg/L (brown blood disease)

### Nitrate (NO₃-N)

**Method 1:** Cadmium reduction
- Converts NO₃⁻ to NO₂⁻, then measure as nitrite
- Range: 0-10 mg/L (direct), up to 100 mg/L (diluted)

**Method 2:** Ion selective electrode (ISE)
- Direct measurement
- Faster but less accurate
- Range: 1-1000 mg/L

**Optimal range for plants:** 50-150 mg/L

---

## EC/TDS Measurement

**Electrical Conductivity (EC):**
- Units: mS/cm or μS/cm
- Measures total dissolved ions
- Temperature compensated to 25°C

**Total Dissolved Solids (TDS):**
- Estimated from EC
- Conversion: TDS (mg/L) ≈ EC (μS/cm) × 0.5-0.7

**Calibration:** Monthly with standard solutions (1.41 mS/cm typical)

**Interpretation:**
- <0.5 mS/cm: Low (supplement needed)
- 0.5-1.5 mS/cm: Optimal for most systems
- 1.5-2.0 mS/cm: High (monitor carefully)
- >2.0 mS/cm: Excessive (water exchange needed)

---

## Alkalinity Testing

**Purpose:** Buffer capacity, maintains stable pH

**Method:** Titration with sulfuric acid to pH 4.5

**Procedure:**
1. Measure 50 mL sample
2. Add bromocresol green indicator
3. Titrate with 0.02 N H₂SO₄
4. Stop at color change (blue → yellow)
5. Calculate: Alkalinity (mg/L CaCO₃) = mL acid × 20

**Target:** 100-200 mg/L CaCO₃
- Too low (<50): pH unstable
- Too high (>250): May limit micronutrient availability

**Adjustment:**
- Increase: Add sodium bicarbonate (NaHCO₃)
- Decrease: Add acid or increase feeding rate

---

## Sample Collection Best Practices

**Containers:**
- TAN, NO₂⁻, NO₃⁻: Clean plastic or glass
- Metals: Acid-washed plastic
- Organics: Amber glass

**Preservation:**
- TAN: Acidify to pH <2 (H₂SO₄), freeze
- NO₂⁻, NO₃⁻: Refrigerate, analyze within 48 h
- Metals: Acidify, room temperature
- General: Refrigerate at 4°C

**Holding times (max):**
- DO: Immediate analysis
- pH: 2 hours
- TAN: 28 days (preserved)
- NO₂⁻, NO₃⁻: 48 hours (refrigerated)

---

## Quality Control

**Daily:**
- Check calibration with standard
- Record on control chart
- Blank sample (DI water): Should read 0

**Weekly:**
- Full recalibration
- Duplicate sample analysis (RPD <10%)
- Known standard (recovery 90-110%)

**Monthly:**
- Proficiency testing
- Cross-check with external lab
- Review control charts

**Control Chart Example:**

```
Result
(mg/L)
  │
5.5├─────────────────────UCL
  │
5.0├─ ─ ─ ─ ─ ─ ─ ─ ─UWL
  │    ●     ●
4.5├──●───●───●──●─────Target
  │        ●
4.0├─ ─ ─ ─ ─ ─ ─ ─ ─LWL
  │
3.5├─────────────────────LCL
  └────────────────────────→ Time

UCL/LCL: Control limits (±3σ)
UWL/LWL: Warning limits (±2σ)
```

---

## Troubleshooting Guide

### High Ammonia
**Causes:**
- Overfeeding
- Insufficient biofilter capacity
- New system (not cycled)
- Dead fish/organic matter

**Solutions:**
- Reduce feeding
- Increase aeration
- Partial water change (20-30%)
- Check biofilter function

### High Nitrite
**Causes:**
- Incomplete nitrification
- pH too low (<6.5)
- Low DO (<4 mg/L)
- Temperature stress

**Solutions:**
- Add salt (1-2 ppt, reduces toxicity)
- Increase aeration
- Adjust pH to 7.0-7.2
- Reduce feeding temporarily

### Low Nitrate
**Causes:**
- Excessive denitrification
- Low feeding rate
- Heavy plant uptake
- Frequent water changes

**Solutions:**
- Increase feeding (if fish allow)
- Reduce water changes
- Add supplemental nitrogen

### pH Drift
**Causes:**
- Low alkalinity
- Excessive nitrification (acidifies)
- CO₂ off-gassing
- Plant photosynthesis

**Solutions:**
- Add buffer (sodium bicarbonate)
- Monitor alkalinity weekly
- Adjust gradually (<0.2 units/day)

---

## Emergency Response Thresholds

**Immediate action required:**

| Parameter | Critical Value | Action |
|-----------|----------------|--------|
| DO | <3 mg/L | Increase aeration, reduce feeding |
| pH | <6.0 or >8.5 | Adjust immediately, investigate cause |
| TAN | >3 mg/L | 50% water change, stop feeding |
| NO₂⁻ | >2 mg/L | Add salt, water change |
| Temperature | >32°C | Add ice, shade, increase circulation |

---

## Recommended Test Kit Brands

**Budget:** API, Tetra (±10-15% accuracy)
**Mid-range:** Hach, LaMotte (±5% accuracy)
**Professional:** YSI, Hanna, Thermo Scientific (±1-2% accuracy)

**For research:** Professional grade required

---

*For detailed analytical methods, see Module 4: Instrumentation and Data Collection*
