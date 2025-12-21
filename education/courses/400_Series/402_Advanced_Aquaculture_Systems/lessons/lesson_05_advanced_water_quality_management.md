# Lesson 5: Advanced Water Quality Management

## Course 402: Advanced Aquaculture Systems | Week 5

---

## Learning Objectives

By the end of this lesson, you will be able to:

1. Monitor and control critical water quality parameters in RAS
2. Implement advanced treatment technologies (UV, ozone)
3. Manage alkalinity and pH stability in intensive systems
4. Prevent and mitigate water quality emergencies
5. Design real-time monitoring and automated control systems
6. Understand heavy metal and micronutrient management
7. Develop water quality emergency response protocols

---

## Complete Water Quality Parameter Matrix

### Critical Parameters

| Parameter | Target Range | Lethal Level | Monitoring Frequency |
|-----------|--------------|--------------|----------------------|
| Temperature | Species-specific ±1°C | ±5°C from optimum | Continuous |
| Dissolved Oxygen | 6-9 mg/L (80-110%) | <3 mg/L | Continuous |
| pH | 6.8-8.2 | <6.0 or >9.0 | Continuous |
| TAN (Total Ammonia) | <1 mg/L | >5 mg/L | Daily |
| Nitrite (NO₂⁻) | <0.5 mg/L | >10 mg/L | Daily |
| Nitrate (NO₃⁻) | <100 mg/L | >400 mg/L | Weekly |
| Carbon Dioxide | <15 mg/L | >40 mg/L | Weekly |
| Alkalinity | 50-150 mg/L CaCO₃ | <30 mg/L | Weekly |
| Hardness | 50-300 mg/L CaCO₃ | <20 mg/L | Monthly |
| Salinity | Species-specific | N/A | Daily (marine) |
| Chlorine | <0.003 mg/L | >0.02 mg/L | Before use |
| Ozone | <0.01 mg/L residual | >0.05 mg/L | If using ozone |
| Suspended Solids | <10 mg/L | >50 mg/L | Weekly |

---

## Nitrogen Cycle Management

### Total Ammonia Nitrogen (TAN)

**Ammonia Equilibrium:**

```
NH₃ (toxic unionized) ⇌ NH₄⁺ (less toxic ionized)

% NH₃ depends on:
- pH: Higher pH = more NH₃
- Temperature: Higher temp = more NH₃
- Salinity: Higher salinity = less NH₃
```

**NH₃ Toxicity Table (25°C freshwater):**

| pH | % NH₃ | 1 mg/L TAN = ___mg/L NH₃ |
|----|-------|---------------------------|
| 7.0 | 0.4% | 0.004 |
| 7.5 | 1.2% | 0.012 |
| 8.0 | 3.7% | 0.037 |
| 8.5 | 11.2% | 0.112 |
| 9.0 | 28.4% | 0.284 |

**Safe NH₃ levels:** <0.02 mg/L for most species

**Management Strategies:**
- Maintain optimal biofilter performance
- Control feeding rate (primary source)
- Maintain pH 7.0-8.0 (reduces NH₃ toxicity)
- Emergency: Water exchange, reduce feeding
- Long-term: Increase biofilter capacity

### Nitrite (NO₂⁻)

**Toxicity Mechanism:**
- Oxidizes hemoglobin to methemoglobin
- Reduces oxygen-carrying capacity ("brown blood disease")
- Severity increased in low chloride environments

**Chloride Protection:**

```
Cl⁻:NO₂⁻ ratio of 10:1 or higher provides protection

Example:
NO₂⁻ = 5 mg/L
Required Cl⁻ = 50 mg/L minimum

Add salt (NaCl) if needed:
NaCl to add (g/L) = (Required Cl⁻ - Current Cl⁻) × 1.65
```

**Management:**
- Allow biofilter maturation (NOB development)
- Don't overload immature biofilters
- Add salt for emergency protection
- Reduce feeding during spikes
- Patience - will resolve with time

### Nitrate (NO₃⁻)

**Accumulation Calculation:**

```
Daily NO₃⁻ accumulation = Feed (kg) × Protein (%) × 0.092 × 3.57

Where 3.57 converts TAN-N to NO₃⁻-N (molecular weight ratio)

Example:
100 kg feed × 40% protein × 0.092 × 3.57 = 13.1 kg NO₃⁻/day

In 1000 m³ system:
Daily increase: 13.1 kg / 1000 m³ = 13.1 mg/L/day
Weekly: 92 mg/L increase
```

**Management Options:**

1. **Water Exchange:**
   - Simple but wasteful
   - 5-10% daily exchange controls levels

2. **Denitrification:**
   - Biological conversion to N₂ gas
   - Requires anaerobic conditions + carbon source

3. **Plant Integration:**
   - Aquaponics removes nitrate
   - Also removes phosphate and micronutrients

4. **Tolerance:**
   - Many species tolerate 200-300 mg/L
   - Monitor and act if approaching limits

---

## pH and Alkalinity Management

### pH Dynamics in RAS

**pH Factors:**

```
pH Decreasing (acidification):
- Nitrification (primary cause)
  Each 1 g NH₄⁺-N oxidized consumes 7.14 g CaCO₃
- CO₂ accumulation
- Fish respiration
- Organic acid production

pH Increasing:
- Denitrification (if present)
- Photosynthesis (if algae/plants)
- Degassing CO₂
- Base addition
```

**Daily Alkalinity Consumption:**

```
Alkalinity used (kg CaCO₃/day) = Feed (kg) × Protein (%) × 0.092 × 7.14

Example:
100 kg feed × 40% protein × 0.092 × 7.14 = 26.3 kg CaCO₃/day

In 1000 m³ system:
Daily decrease: 26.3 mg/L CaCO₃
Weekly: 184 mg/L decrease
```

**Buffer Addition:**

Common buffers:
- Sodium bicarbonate (NaHCO₃): Most common, safe
- Calcium carbonate (CaCO₃): Limestone, slow dissolving
- Calcium hydroxide (Ca(OH)₂): Hydrated lime, raises pH quickly
- Sodium carbonate (Na₂CO₃): Soda ash, strong alkalizer

**Sodium Bicarbonate Dosing:**

```
NaHCO₃ required (kg) = System Volume (m³) × Alkalinity Deficit (mg/L) × 0.001 × 1.0

Example:
1000 m³ system
Current alkalinity: 40 mg/L
Target: 100 mg/L
Deficit: 60 mg/L

NaHCO₃ = 1000 × 60 × 0.001 × 1.0 = 60 kg

Dissolve and add gradually over 24-48 hours
```

---

## Advanced Treatment Technologies

### UV Sterilization

**UV Germicidal Irradiation:**

```
┌────────────────────────────────────────────────────┐
│          UV STERILIZER - CROSS SECTION             │
├────────────────────────────────────────────────────┤
│                                                     │
│         ┌──────────────────────────┐               │
│  Water  │  ═══════════════════════ │  Water        │
│  In ───>│ ═══════╦════════════════ │───> Out       │
│         │ ═══════║════════════════ │               │
│         │ ═══════║════════════════ │               │
│         │ ═══════║════════════════ │               │
│         └────────║─────────────────┘               │
│                  ║                                  │
│              UV Lamp (254 nm)                       │
│           in quartz sleeve                          │
│                                                     │
│  Pathogens exposed to UV-C radiation               │
│  DNA damage prevents reproduction                   │
│  No chemical residuals                             │
└────────────────────────────────────────────────────┘
```

**Design Parameters:**

| Parameter | Value | Notes |
|-----------|-------|-------|
| UV dose | 30-100 mJ/cm² | Fish pathogens |
| Flow rate | Per manufacturer spec | |
| Transmittance | >75% UVT | Water clarity critical |
| Lamp life | 9,000-14,000 hours | ~1 year continuous |
| Contact time | 1-5 seconds | Short residence |

**Effectiveness:**

| Pathogen Type | UV Dose (mJ/cm²) | % Inactivation |
|---------------|------------------|----------------|
| Bacteria | 30-40 | 99-99.9% |
| Viruses | 40-60 | 90-99% |
| Protozoa | 60-100 | 99-99.99% |
| Algae spores | 30-50 | 95-99% |

**Sizing Example:**

```
System flow: 200 m³/hr
Target dose: 60 mJ/cm²
UVT: 80%

UV unit selection:
- Commercial unit: 200 m³/hr @ 60 mJ/cm² = ~120W lamp
- Multiple smaller units or one large unit
- Provide bypass for maintenance

Operating cost:
120W × 24 hr × 365 days = 1,051 kWh/year
At $0.12/kWh = $126/year electricity
Plus lamp replacement: ~$200/year
Total: ~$330/year operating cost
```

**Advantages:**
- No chemical residuals
- Fast acting
- Effective against most pathogens
- Low operating cost
- Easy to install

**Disadvantages:**
- Only treats flowing water (not tank)
- Requires clear water (TSS <10 mg/L)
- No residual protection
- Lamp aging reduces effectiveness
- Regular maintenance needed

### Ozone Treatment

**Ozone (O₃) Applications:**
- Pathogen inactivation
- Organic compound oxidation
- Color removal
- Microflocculation (aids solids removal)
- Nitrite oxidation to nitrate

**Ozone System:**

```
┌────────────────────────────────────────────────────┐
│           OZONE TREATMENT SYSTEM                   │
├────────────────────────────────────────────────────┤
│                                                     │
│  Air/O₂ ──> [Ozone Generator] ──> O₃ Gas          │
│                                      │             │
│                                      v             │
│              Water ──> [Contact Chamber] ──>       │
│                         (5-10 min RT)              │
│                             │                       │
│                             v                       │
│                    [Ozone Destruct]                │
│                    (residual removal)              │
│                             │                       │
│                             v                       │
│                        To biofilter                │
│                (O₃ toxic to bacteria!)             │
└────────────────────────────────────────────────────┘
```

**Design Parameters:**

| Parameter | Value | Notes |
|-----------|-------|-------|
| Dose | 0.5-3.0 mg/L | Conservative |
| Contact time | 5-10 minutes | Reaction time |
| Residual | <0.01 mg/L | Before biofilter |
| Redox potential | 300-400 mV | Indicator of oxidation |

**CRITICAL SAFETY:**
- Ozone is highly toxic to fish and biofilter
- Must completely destruct before returning to system
- Monitor residual continuously
- Foam fractionation or carbon filtration for residual removal
- Off-gas containment (O₃ toxic to humans)

**Advantages:**
- Powerful oxidizer and disinfectant
- Improves water clarity
- Oxidizes organics and colors
- Can enhance solids removal

**Disadvantages:**
- Expensive equipment
- Complex operation
- Safety concerns
- Toxic to biofilter if not removed
- High maintenance
- Energy intensive

---

## Real-Time Monitoring and Control

### Sensor Technology

**Essential Sensors:**

```
┌─────────────────────────────────────────────────────┐
│        RAS MONITORING SENSOR ARRAY                  │
├─────────────────────────────────────────────────────┤
│                                                      │
│  Culture Tank:                                      │
│    - DO probe (continuous)                          │
│    - Temperature probe (continuous)                 │
│    - pH probe (continuous)                          │
│    - Level sensor (continuous)                      │
│                                                      │
│  Biofilter:                                         │
│    - DO in/out                                      │
│    - Temperature                                    │
│    - Flow meter                                     │
│                                                      │
│  Sump:                                              │
│    - DO                                             │
│    - pH                                             │
│    - ORP (oxidation-reduction potential)            │
│    - Level sensors (high/low alarms)                │
│    - Temperature                                    │
│                                                      │
│  System:                                            │
│    - Main pump flow                                 │
│    - Make-up water flow                             │
│    - Backup power status                            │
│    - Oxygen supply pressure/level                   │
│                                                      │
└─────────────────────────────────────────────────────┘
```

**Probe Maintenance:**

| Probe Type | Calibration Frequency | Maintenance |
|------------|----------------------|-------------|
| DO | Weekly | Clean monthly, replace membrane quarterly |
| pH | Weekly | Clean weekly, replace quarterly |
| ORP | Monthly | Clean monthly |
| Conductivity | Monthly | Clean as needed |
| Temperature | Rarely | Check accuracy quarterly |

### SCADA Integration

**Supervisory Control and Data Acquisition:**

```
Components:
1. Sensors (field devices)
2. PLCs (programmable logic controllers)
3. Network communication
4. Central computer/HMI (human-machine interface)
5. Data historian (logging)
6. Alarm management
7. Remote access capability
```

**Automated Control Examples:**

**DO Control Loop:**
```
IF DO < 6.5 mg/L THEN
  Increase oxygen injection
  Alarm if DO < 5.0 mg/L
ELSE IF DO > 9.0 mg/L THEN
  Decrease oxygen injection
  Alarm if DO > 10.0 mg/L (supersaturation)
END IF
```

**pH Control Loop:**
```
IF pH < 7.0 THEN
  Dose sodium bicarbonate
  Increase CO₂ degassing
  Alarm if pH < 6.5
ELSE IF pH > 8.5 THEN
  Reduce alkalinity addition
  Alarm if pH > 9.0
END IF
```

**Temperature Control:**
```
IF Temp < Setpoint - 0.5°C THEN
  Activate heating
ELSE IF Temp > Setpoint + 0.5°C THEN
  Activate cooling
END IF

Alarm if outside ± 1.5°C from setpoint
```

---

## Emergency Response Protocols

### Low DO Emergency

```
IMMEDIATE ACTIONS (Minutes matter):
1. Check oxygen supply (tank pressure, generator function)
2. Activate backup aeration
3. Reduce feeding to zero
4. Increase water exchange if possible
5. Turn on all backup blowers
6. Check for system blockages

INVESTIGATION (Once stable):
- Review data logs (when did DO drop?)
- Check equipment failure
- Verify sensor accuracy
- Assess fish health
```

### High Ammonia Crisis

```
IMMEDIATE ACTIONS:
1. Stop feeding immediately
2. Begin water exchange (10-20%)
3. Add Ammo-Lock or similar detoxifier (emergency only)
4. Reduce pH if >8.0 (reduces NH₃ toxicity)
5. Check biofilter function (aeration, flow)
6. Test water to confirm ammonia level

NEXT 24 HOURS:
- Increase water exchange to 25-50%
- Feed minimally (<50% normal)
- Monitor TAN every 4-6 hours
- Check NO₂⁻ (will spike as ammonia converts)

RECOVERY (Days to weeks):
- Gradual return to normal feeding
- Monitor biofilter recovery
- May need to re-seed biofilter
- Daily water testing for 2 weeks
```

### pH Crash

```
IMMEDIATE ACTIONS:
1. Test alkalinity
2. Prepare buffer solution (sodium bicarbonate)
3. Add 50% of calculated dose immediately
4. Add remainder over 24 hours
5. Increase aeration/degassing
6. Reduce feeding 50%

BUFFER DOSING:
Target: Raise pH by 0.5 units at a time
Maximum rate: 0.5 pH units per 24 hours
Never add all buffer at once (osmotic shock)
```

### Power Failure

```
BACKUP POWER PRIORITY:
1. Oxygen delivery (most critical)
2. Recirculation pumps
3. Biofilter aeration
4. Heating/cooling (depends on season)
5. Monitoring systems

MANUAL BACKUP (if no generator):
1. Battery-powered air stones in tanks
2. Portable gasoline generator for critical pumps
3. Oxygen cylinders with manual injection
4. Reduce feeding to zero
5. Can survive 4-12 hours with minimal aeration
```

---

## Water Quality Troubleshooting Guide

| Problem | Likely Causes | Solutions |
|---------|---------------|-----------|
| Rising TAN | Biofilter failure, overfeeding, dead fish | Check biofilter, reduce feed, remove dead fish |
| Rising NO₂⁻ | Immature biofilter, cold water, low DO | Wait for maturation, add salt, check aeration |
| Rising NO₃⁻ | Normal accumulation, low water exchange | Increase exchange, add denitrification |
| Low pH | Insufficient alkalinity, poor degassing | Add buffer, increase CO₂ stripping |
| High pH | Excessive alkalinity, algae bloom | Reduce buffer, check for algae |
| Low DO | Equipment failure, overfeeding, high density | Check O₂ system, reduce feed, add capacity |
| High TSS | Filter failure, dead fish, overfeeding | Check filters, clean system |
| Off-flavor | Organic accumulation, algae, bacteria | Water exchange, carbon filtration, reduce organics |

---

## Key Takeaways

1. **Monitor continuously** - automated systems prevent disasters
2. **pH and alkalinity are linked** - manage together
3. **Nitrification drives acidification** - buffer addition essential
4. **UV is safe and effective** - good for pathogen control
5. **Ozone is powerful but dangerous** - requires expertise
6. **Have emergency protocols** - practice before crisis
7. **Redundancy saves lives** - backup everything critical
8. **Data is invaluable** - trend analysis prevents problems

---

## Further Reading

1. Timmons, M.B. & Ebeling, J.M. (2013). "Recirculating Aquaculture" - Chapters 8-9
2. Wedemeyer, G.A. (1996). "Physiology of Fish in Intensive Culture Systems"
3. Boyd, C.E. & Tucker, C.S. (2014). "Handbook for Aquaculture Water Quality"
4. Summerfelt, S.T. & Vinci, B.J. (2008). "Better management practices for recirculating systems"

---

*Next Lesson: Module 6 - Multi-Species Production Systems*

*EcoFusion Academy - Course 402: Advanced Aquaculture Systems*
