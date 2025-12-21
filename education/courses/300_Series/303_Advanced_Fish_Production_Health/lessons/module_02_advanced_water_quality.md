# Module 2: Advanced Water Quality Management

**Duration:** 1 hour
**Course:** 303 - Advanced Fish Production & Health

---

## Learning Objectives

By the end of this module, you will be able to:
1. Analyze complex water chemistry interactions
2. Calculate buffering capacity and alkalinity requirements
3. Manage total gas pressure and supersaturation
4. Optimize dissolved oxygen delivery systems
5. Troubleshoot water quality problems in intensive systems

---

## 1. Advanced Water Chemistry

### The Nitrogen Cycle in Detail

```
COMPLETE NITROGEN CYCLE

Organic Waste (Fish, Feed)
         |
         v
┌────────────────────┐
│  AMMONIFICATION    │  Bacteria break down proteins
│  Proteins → NH₃    │
└────────┬───────────┘
         |
         v
┌────────────────────┐
│  NITRIFICATION     │
│  Step 1:           │  Nitrosomonas bacteria
│  NH₃ → NO₂⁻       │  (pH 7.5-8.0, DO >4 mg/L)
│                    │
│  Step 2:           │  Nitrobacter bacteria
│  NO₂⁻ → NO₃⁻      │  (pH 7.5-8.0, DO >4 mg/L)
└────────┬───────────┘
         |
         v
┌────────────────────┐
│  DENITRIFICATION   │  Anaerobic bacteria
│  NO₃⁻ → N₂ gas    │  (anoxic conditions)
└────────────────────┘
```

### Ammonia Chemistry

**NH₃ vs NH₄⁺ Equilibrium:**

```
Total Ammonia Nitrogen (TAN) = NH₃ + NH₄⁺

pH-Temperature Dependency:

At 25°C:
  pH 7.0: 0.5% NH₃ (99.5% NH₄⁺)
  pH 7.5: 1.8% NH₃ (98.2% NH₄⁺)
  pH 8.0: 5.4% NH₃ (94.6% NH₄⁺)
  pH 8.5: 15.3% NH₃ (84.7% NH₄⁺)
  pH 9.0: 35.6% NH₃ (64.4% NH₄⁺)

CRITICAL: NH₃ (unionized) is toxic
         NH₄⁺ (ionized) is relatively safe
```

**Toxicity Calculations:**

```
AMMONIA TOXICITY

Safe Limits:
  NH₃: <0.02 mg/L (chronic)
       <0.05 mg/L (acute)

  NH₄⁺: <2.0 mg/L

Example Calculation:
  TAN measured: 1.0 mg/L
  pH: 8.0
  Temperature: 25°C

  From table: 5.4% NH₃ at pH 8.0

  NH₃ = 1.0 × 0.054 = 0.054 mg/L

  Result: DANGEROUS (>0.05 mg/L)
  Action: Immediate water exchange required
```

### Temperature Effects

| Parameter | Effect of +10°C | Management Implication |
|-----------|----------------|------------------------|
| **Oxygen Solubility** | Decreases 20% | Increase aeration |
| **Fish Metabolism** | Doubles (Q10=2) | Increase feeding |
| **NH₃ Toxicity** | Increases 40% | More frequent testing |
| **Disease Risk** | Increases | Enhanced biosecurity |
| **DO Demand** | Doubles | Supplemental O₂ |

---

## 2. Alkalinity and Buffering Capacity

### Understanding Alkalinity

**Alkalinity** = Water's ability to resist pH changes

**Components:**
```
Total Alkalinity = HCO₃⁻ + CO₃²⁻ + OH⁻

Primary Buffer: Bicarbonate (HCO₃⁻)
  - Optimal range: 100-200 mg/L as CaCO₃
  - Below 50 mg/L: pH unstable
  - Above 300 mg/L: Usually not problematic
```

### Alkalinity Consumption

**Nitrification Alkalinity Demand:**

```
ALKALINITY CONSUMED BY NITRIFICATION

Reaction:
  NH₄⁺ + 2O₂ → NO₃⁻ + H₂O + 2H⁺

Result: Produces acid (H⁺), consuming alkalinity

Consumption Rate:
  7.14 kg alkalinity (as CaCO₃) per 1 kg NH₄⁺-N oxidized


CALCULATION EXAMPLE:

Daily Feed: 100 kg
TAN Production: 4% of feed = 4 kg
Alkalinity Consumed: 4 × 7.14 = 28.6 kg CaCO₃/day

System Volume: 100 m³ = 100,000 L
Daily Reduction: 28.6 kg ÷ 100 m³ = 286 mg/L/day

If starting at 150 mg/L:
  Day 0: 150 mg/L
  Day 1: 150 - 286 = CRITICALLY LOW

Action: Buffer addition essential
```

### Buffer Addition

**Common Buffers:**

| Buffer | Formula | Alkalinity Boost | Notes |
|--------|---------|------------------|-------|
| **Sodium Bicarbonate** | NaHCO₃ | High | Most common, food-grade |
| **Calcium Carbonate** | CaCO₃ | High | Slow dissolution |
| **Calcium Hydroxide** | Ca(OH)₂ | Very High | Fast acting, caustic |
| **Potassium Bicarbonate** | KHCO₃ | High | Adds K (nutrient) |

**Dosing Calculation:**
```
Required Buffer (kg) = Volume (m³) × Target Increase (mg/L) ÷ 1,000

Example:
  Volume: 50 m³
  Current: 75 mg/L
  Target: 150 mg/L
  Increase needed: 75 mg/L

  Sodium Bicarbonate: 50 × 75 ÷ 1,000 = 3.75 kg
```

---

## 3. Dissolved Oxygen Management

### Oxygen Solubility

**Saturation Table (mg/L):**

| Temp (°C) | Freshwater | Saltwater (35 ppt) |
|-----------|------------|-------------------|
| 15 | 10.1 | 8.6 |
| 20 | 9.1 | 7.8 |
| 25 | 8.3 | 7.1 |
| 30 | 7.6 | 6.5 |
| 35 | 7.0 | 6.0 |

**Key Points:**
- Warmer water holds less oxygen
- Saltwater holds less oxygen than freshwater
- Altitude reduces saturation levels
- High density systems need >100% saturation

### Oxygen Transfer Efficiency

**Aeration Devices:**

| Device Type | O₂ Transfer (kg/kWh) | Efficiency | Application |
|-------------|---------------------|------------|-------------|
| **Paddle Wheels** | 1.5-2.0 | Moderate | Ponds, raceways |
| **Air Diffusers** | 1.0-2.5 | Variable | Tanks, ponds |
| **Venturi Injectors** | 0.5-1.5 | Low-Moderate | Small systems |
| **Pure O₂ Cone** | 4.0-6.0 | Very High | RAS, intensive |
| **Low Head Oxygenator (LHO)** | 3.0-5.0 | High | RAS systems |

### Oxygen Demand Calculations

```
SYSTEM OXYGEN REQUIREMENT

Components of O₂ Demand:
  1. Fish respiration
  2. Bacterial respiration (biofilter)
  3. Organic matter decomposition
  4. Safety margin


CALCULATION:

1. Fish Respiration:
   O₂ = Biomass (kg) × Consumption Rate (mg/kg/hr) ÷ 1,000

   Example:
     2,000 kg tilapia
     Rate: 300 mg/kg/hr (active)
     O₂ = 2,000 × 300 ÷ 1,000 = 600 g/hr

2. Biofilter Demand:
   O₂ = TAN (kg/day) × 4.57 kg O₂/kg TAN ÷ 24

   Example:
     TAN: 8 kg/day
     O₂ = 8 × 4.57 ÷ 24 = 1.52 kg/hr = 1,520 g/hr

3. Safety Factor: 1.5×

   Total O₂ = (600 + 1,520) × 1.5 = 3,180 g/hr = 3.18 kg/hr


PURE OXYGEN REQUIREMENT:

If using O₂ cones (5 kg O₂/kWh):
  Power: 3.18 ÷ 5 = 0.64 kW continuous

Daily O₂ consumption:
  3.18 kg/hr × 24 hr = 76.3 kg/day

Liquid O₂ tank (at $0.50/kg):
  Cost: 76.3 × $0.50 = $38.15/day = $13,925/year
```

---

## 4. Carbon Dioxide Management

### CO₂ Sources and Effects

**Production:**
```
CO₂ Sources in Aquaculture:
  1. Fish respiration: ~1.4 kg CO₂ per kg O₂ consumed
  2. Bacterial respiration: Additional CO₂
  3. Feed decomposition: Organic matter breakdown
```

**Effects on Fish:**

| CO₂ Level (mg/L) | Effect | Action Required |
|------------------|--------|-----------------|
| <10 | Safe | Normal operation |
| 10-15 | Acceptable | Monitor closely |
| 15-20 | Stress threshold | Increase degassing |
| 20-30 | Chronic stress | Immediate action |
| >30 | Acute toxicity | Emergency response |

### Degassing Methods

**1. Aeration Towers:**
```
     ┌───┐
     │ ↓ │  Water in (high CO₂)
     │   │
     │≈≈≈│  Packing media
     │≈≈≈│  (increases surface area)
     │ ↑ │  Air flow counter-current
     │   │
     └─┬─┘
       ↓
   Water out (low CO₂)

Efficiency: 50-80% CO₂ removal
```

**2. Cascade Aerators:**
- Multiple steps/falls
- 20-40% removal per meter of fall
- Simple, low energy

**3. Forced Air Stripping:**
- High-pressure air injection
- 60-90% removal efficiency
- Higher energy cost

### pH-CO₂-Alkalinity Relationship

```
CARBONATE EQUILIBRIUM

CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻ ⇌ 2H⁺ + CO₃²⁻

Effect on pH:
  High CO₂ → More H⁺ → Lower pH
  Low CO₂ → Less H⁺ → Higher pH

Example Problem:
  pH drops from 7.5 to 6.8
  Alkalinity normal (150 mg/L)

  Likely Cause: CO₂ accumulation
  Test: Measure CO₂ (likely >20 mg/L)
  Solution: Increase degassing/aeration
```

---

## 5. Total Gas Pressure (TGP)

### Understanding Supersaturation

**Total Gas Pressure = Σ(N₂ + O₂ + CO₂ + others)**

**Causes of Supersaturation:**
1. Pump cavitation
2. Air leaks in suction lines
3. Heating cold water
4. Pure O₂ over-injection
5. Pressure changes

**Gas Bubble Disease (GBD):**
```
Effects:
  - Bubbles in blood, eyes, fins
  - Exophthalmia (pop-eye)
  - Disorientation
  - Mortality

Prevention:
  - Keep TGP <103% saturation
  - Degassing units
  - Proper pump operation
```

### Measuring TGP

**Equipment:**
- Total Gas Pressure meter
- Measures dissolved gas pressure
- Compares to atmospheric pressure

**Calculation:**
```
TGP (%) = (Measured Pressure ÷ Barometric Pressure) × 100

Safe Range: 95-103%
Action Level: >105%
Dangerous: >110%
```

---

## 6. Advanced Water Testing Protocols

### Testing Frequency

| Parameter | Intensive RAS | Semi-Intensive | Monitoring Method |
|-----------|---------------|----------------|-------------------|
| **DO** | Continuous | 3× daily | Probe/meter |
| **Temperature** | Continuous | 3× daily | Thermometer |
| **pH** | Continuous | 2× daily | Probe/meter |
| **Ammonia** | 2× daily | Daily | Test kit/probe |
| **Nitrite** | Daily | 2× weekly | Test kit |
| **Nitrate** | 2× weekly | Weekly | Test kit |
| **Alkalinity** | 2× weekly | Weekly | Titration |
| **Hardness** | Weekly | Monthly | Test kit |
| **CO₂** | Daily | As needed | Test kit/calculation |

### Quality Control

**Calibration Schedule:**
```
Daily:
  - pH probe (2-point calibration)
  - DO probe (air saturation)

Weekly:
  - Conductivity meter
  - Temperature sensors

Monthly:
  - Replace pH probe electrolyte
  - Verify test kit standards
  - Ammonia probe service
```

**Standard Curve Verification:**
```
For Spectrophotometric Tests:

1. Prepare known standards:
   - 0.0, 0.5, 1.0, 2.0, 5.0 mg/L

2. Test standards with kit

3. Plot actual vs. measured

4. Accept if R² > 0.95

5. Replace kit if outside spec
```

---

## 7. Water Quality Troubleshooting

### Problem: High Ammonia

**Diagnostic Tree:**
```
High NH₃ (>0.05 mg/L)
    |
    ├─ Recent increase in feeding?
    │   └─ Yes → Reduce feed, increase biofilter capacity
    │
    ├─ Biofilter functioning?
    │   ├─ Check DO in biofilter (need >4 mg/L)
    │   ├─ Check pH (optimal 7.5-8.0)
    │   ├─ Verify flow rate
    │   └─ Check for clogging
    │
    ├─ Water exchange adequate?
    │   └─ Increase exchange rate temporarily
    │
    └─ Temperature spike?
        └─ More NH₃ toxic at higher temp + pH
```

**Immediate Actions:**
1. STOP feeding
2. Increase water exchange (50-100%)
3. Add extra aeration
4. Lower pH slightly (if >8.0) to reduce NH₃ fraction
5. Consider emergency treatments (zeolite, salt)

### Problem: Low pH Crash

**Diagnostic Tree:**
```
pH < 6.5
    |
    ├─ Check Alkalinity
    │   └─ <50 mg/L → ADD BUFFER IMMEDIATELY
    │       - Sodium bicarbonate: 1-2 g/L
    │       - Dissolve before adding
    │       - Monitor pH recovery
    │
    ├─ Check CO₂
    │   └─ >20 mg/L → INCREASE DEGASSING
    │       - Add aeration
    │       - Reduce feeding
    │       - Check ventilation
    │
    └─ Organic acid accumulation?
        └─ Increase water exchange
            Clean filters
```

### Problem: Oxygen Depletion

**Emergency Response:**
```
DO < 4 mg/L = EMERGENCY

Immediate (< 5 minutes):
  1. Activate all aerators
  2. Add pure O₂ if available
  3. Reduce feeding
  4. Lower stocking density if possible

Short-term (< 1 hour):
  1. Check for equipment failure
  2. Verify flow rates
  3. Remove dead fish/waste
  4. Increase water exchange

Long-term prevention:
  1. Install backup aeration
  2. Add alarm systems
  3. Reduce density
  4. Review feeding schedule
```

---

## 8. Water Quality Modeling

### Ammonia Production Model

```
PREDICTIVE MODEL

TAN Production (kg/day) = Feed Rate (kg/day) × Protein (%) × 0.092

Example:
  Feed: 200 kg/day
  Protein: 35%

  TAN = 200 × 0.35 × 0.092 = 6.44 kg/day


TAN Concentration (mg/L) = (TAN Production - TAN Removed) ÷ Volume

If Biofilter removes 90%:
  TAN remaining = 6.44 × 0.10 = 0.644 kg/day

  In 100 m³ system:
  TAN accumulation = 644 g ÷ 100,000 L = 6.44 mg/L/day

  With 10% water exchange:
  Net accumulation = 6.44 × 0.9 = 5.8 mg/L/day

  Steady state: When removal = production
```

### Oxygen Budget Model

```
SYSTEM OXYGEN BALANCE

Input = Output

Sources:
  + Mechanical aeration
  + O₂ injection
  + Surface diffusion
  + Incoming water

Sinks:
  - Fish respiration
  - Biofilter demand
  - Organic matter decay
  - Outgoing water

Balance Example:
  Input: 5.0 kg/hr (O₂ system)
  Fish: -2.5 kg/hr
  Biofilter: -1.8 kg/hr
  Decay: -0.5 kg/hr

  Net: +0.2 kg/hr (accumulation)

  Safe margin maintained
```

---

## 9. Advanced Treatment Technologies

### Ozone Treatment

**Applications:**
- Pathogen reduction
- Organic matter oxidation
- Water clarification
- Improved biosecurity

**Dosing:**
```
Typical Range: 0.05-0.20 mg/L in system
Contact Time: 3-10 minutes

IMPORTANT:
  - Remove ozone before fish contact
  - Use activated carbon or UV destruction
  - Toxic to fish at >0.01 mg/L
```

### UV Sterilization

**Sizing:**
```
UV Dose = Flow Rate × Required Dose

Pathogen Reduction:
  - Bacteria: 30,000-40,000 μW·s/cm²
  - Viruses: 40,000-60,000 μW·s/cm²
  - Parasites: 80,000-100,000 μW·s/cm²

Example:
  Flow: 100 L/min = 6,000 L/hr
  Target: 40,000 μW·s/cm²

  UV System: 40W unit (check manufacturer specs)
```

### Protein Skimmers

**Function:**
- Remove dissolved organics
- Reduce BOD (Biological Oxygen Demand)
- Improve water clarity
- Reduce disease risk

**Efficiency:**
```
Removal Rate: 20-60% of dissolved organics
Best for marine/brackish systems
Less effective in freshwater
```

---

## 10. Case Study: Water Quality Crisis Recovery

### Scenario

**Day 1 - Crisis Detection:**
```
Morning readings:
  DO: 3.2 mg/L (critical)
  pH: 6.2 (low)
  NH₃: 0.12 mg/L (dangerous)
  Temp: 29°C
  Fish: Gasping, lethargy, 2% mortality
```

**Immediate Response (Hour 0-2):**
```
1. Emergency aeration activated
2. Feeding stopped completely
3. 50% water exchange initiated
4. Pure O₂ injection started

Hour 2 readings:
  DO: 5.8 mg/L (improving)
  pH: 6.4 (still low)
  NH₃: 0.06 mg/L (improving)
```

**Short-term Recovery (Hour 2-24):**
```
1. Buffer addition:
   - Sodium bicarbonate: 3 kg/100 m³
   - Dissolved in mixing tank
   - Added slowly over 2 hours

2. Biofilter check:
   - Flow verified
   - Media cleaned
   - DO in biofilter: 6.5 mg/L

Hour 24 readings:
  DO: 6.5 mg/L (stable)
  pH: 7.2 (safe)
  NH₃: 0.03 mg/L (acceptable)
  Fish: Improved behavior
```

**Long-term Prevention (Week 1+):**
```
1. Reduced stocking density 20%
2. Installed backup aerators
3. Added DO alarm system
4. Implemented 3× daily testing
5. Reduced feeding rate 15%
6. Added automatic buffer dosing

Week 2 readings:
  All parameters stable
  Mortality returned to <0.1%/day
  Production resumed
```

**Lessons Learned:**
- Early detection critical
- Backup systems essential
- Multiple stressors compound
- Recovery takes time
- Prevention cheaper than treatment

---

## Summary

Advanced water quality management requires:

1. **Understanding complex chemistry** - pH, alkalinity, nitrogen cycle
2. **Continuous monitoring** - Automated systems and manual testing
3. **Predictive modeling** - Anticipate problems before they occur
4. **Rapid response** - Emergency protocols and backup systems
5. **Optimization** - Balance all parameters for maximum production

Critical Success Factors:
- Maintain alkalinity >100 mg/L
- Keep DO >6 mg/L in intensive systems
- Monitor NH₃ (not just TAN)
- Control CO₂ <15 mg/L
- Prevent TGP supersaturation
- Calibrate equipment regularly

---

## Key Takeaways

1. **pH and alkalinity** are linked - manage together
2. **Temperature** affects all chemical parameters
3. **Ammonia toxicity** depends on pH and temperature
4. **Oxygen** is the most critical parameter
5. **CO₂** often overlooked but important
6. **Prevention** is cheaper than emergency response

---

## Module Quiz

Test your knowledge in Quiz 2 before proceeding to Module 3.

---

**Next Module:** Module 3 - Fish Nutrition Science

---

*EcoFusion Academy - Course 303: Advanced Fish Production & Health*
