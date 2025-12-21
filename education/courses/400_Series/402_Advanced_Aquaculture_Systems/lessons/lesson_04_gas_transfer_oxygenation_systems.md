# Lesson 4: Gas Transfer & Oxygenation Systems

## Course 402: Advanced Aquaculture Systems | Week 4

---

## Learning Objectives

By the end of this lesson, you will be able to:

1. Calculate oxygen requirements and consumption rates for various species
2. Understand oxygen transfer efficiency (OTE) and standard oxygen transfer rate (SOTR)
3. Design and size low head oxygenators (LHO) and oxygen cones
4. Implement pure oxygen injection systems for high-density culture
5. Design CO₂ degassing towers and cascade aerators
6. Optimize gas exchange economics and energy efficiency
7. Install emergency backup oxygenation systems

---

## Introduction to Gas Exchange in RAS

Fish are in a constant battle for oxygen. Unlike terrestrial animals, fish extract dissolved oxygen from water - a medium containing only 1/20th the oxygen content of air. In high-density RAS, maintaining adequate dissolved oxygen while removing toxic carbon dioxide is critical for survival and optimal growth.

### Critical Gas Parameters

```
┌──────────────────────────────────────────────────────┐
│           DISSOLVED GAS TARGETS IN RAS               │
├──────────────────────────────────────────────────────┤
│                                                       │
│  Parameter          Target Range      Critical Level │
│  ─────────────────────────────────────────────────── │
│                                                       │
│  Dissolved Oxygen   6-9 mg/L          <4 mg/L        │
│  (DO)               80-110% sat        <50% sat      │
│                                                       │
│  Carbon Dioxide     <15 mg/L           >25 mg/L      │
│  (CO₂)              <20 mg/L (safe)    >40 mg/L      │
│                                                       │
│  Nitrogen (N₂)      100-105% sat       >110% sat     │
│                     Normal air         (supersaturation│
│                                         → gas bubble  │
│                                           disease)    │
│                                                       │
│  Total Gas          100-105%           >110%         │
│  Pressure (TGP)     Safe range         Dangerous     │
│                                                       │
└──────────────────────────────────────────────────────┘
```

---

## Oxygen Dynamics

### 1. Oxygen Consumption Rates

Fish consume oxygen continuously for metabolism:

**Metabolic Oxygen Demand:**

```
OCR = a × W^b × Activity × Temperature Factor

Where:
OCR = Oxygen Consumption Rate (mg O₂/kg fish/hr)
a = species constant
W = fish weight (g)
b = weight exponent (typically 0.8-0.9)
Activity = activity multiplier (1.0-2.0)
Temperature Factor = Q₁₀ adjustment
```

**Typical Consumption Rates:**

| Species | mg O₂/kg/hr | kg O₂/kg feed |
|---------|-------------|---------------|
| Tilapia (28°C) | 200-300 | 0.4-0.6 |
| Rainbow trout (15°C) | 150-250 | 0.5-0.7 |
| Atlantic salmon (12°C) | 180-280 | 0.5-0.6 |
| Barramundi (28°C) | 250-350 | 0.6-0.8 |
| Channel catfish (25°C) | 180-250 | 0.4-0.5 |
| Shrimp (28°C) | 400-600 | 1.0-1.5 |

**Simplified Calculation Based on Feed:**

```
Daily O₂ Demand = Feed Rate (kg/day) × O₂:Feed Ratio

Example (salmon):
100 kg feed/day × 0.55 kg O₂/kg feed = 55 kg O₂/day
                                      = 2.3 kg O₂/hr average
                                      = 38 g O₂/min
```

### 2. Oxygen Solubility

Maximum dissolved oxygen varies with temperature and salinity:

**Freshwater Saturation at 1 atm:**

| Temperature (°C) | DO Saturation (mg/L) | DO at 110% |
|------------------|----------------------|------------|
| 10 | 11.3 | 12.4 |
| 15 | 10.1 | 11.1 |
| 20 | 9.1 | 10.0 |
| 25 | 8.2 | 9.0 |
| 30 | 7.5 | 8.3 |

**Saltwater (35 ppt):**
- Reduce freshwater values by ~20%
- Example: 20°C saltwater = 7.3 mg/L vs 9.1 mg/L fresh

### 3. Oxygen Balance in Culture Tanks

```
┌────────────────────────────────────────────────────┐
│          OXYGEN BALANCE IN CULTURE TANK            │
├────────────────────────────────────────────────────┤
│                                                     │
│  DO IN (mg/L) = DO supply from oxygenation system  │
│      │                                             │
│      v                                             │
│  ┌──────────────────────┐                         │
│  │                      │                         │
│  │   Culture Tank       │                         │
│  │                      │                         │
│  │  DO decreases due to:│                         │
│  │  - Fish respiration  │ (primary)               │
│  │  - Bacterial respir. │ (biofilm, organics)     │
│  │  - Chemical demand   │ (minimal)               │
│  │                      │                         │
│  └──────────────────────┘                         │
│      │                                             │
│      v                                             │
│  DO OUT (mg/L) = Minimum acceptable level          │
│                                                     │
│  Required Δ DO = DO_in - DO_out                   │
│  Typical: 8.5 mg/L in → 6.0 mg/L out = 2.5 mg/L  │
│                                                     │
└────────────────────────────────────────────────────┘
```

**Tank Oxygen Depletion:**

```
DO Consumption (kg/hr) = Flow (m³/hr) × Δ DO (mg/L) × 0.001

Example:
Tank flow: 25 m³/hr
DO in: 8.5 mg/L
DO out: 6.0 mg/L
Δ DO: 2.5 mg/L

O₂ consumed: 25 × 2.5 × 0.001 = 0.0625 kg/hr = 62.5 g/hr

For 32 tanks: 32 × 62.5 = 2,000 g/hr = 2.0 kg O₂/hr
```

---

## Oxygen Transfer Principles

### 1. Gas Transfer Fundamentals

**Fick's Law of Diffusion:**

```
dC/dt = KLa × (Cs - C)

Where:
dC/dt = rate of DO change (mg/L/hr)
KLa = overall mass transfer coefficient (hr⁻¹)
Cs = saturation concentration (mg/L)
C = actual concentration (mg/L)
(Cs - C) = concentration gradient (driving force)
```

**Key Factors Affecting Transfer:**

1. **Temperature**: Higher temp = faster transfer (but lower saturation)
2. **Mixing**: Turbulence increases KLa
3. **Bubble size**: Smaller bubbles = more surface area
4. **Contact time**: Longer exposure = more transfer
5. **Pressure**: Higher pressure = higher saturation
6. **Salinity**: Salt reduces DO solubility and transfer rate

### 2. Standard Oxygen Transfer Rate (SOTR)

Industry standard for comparing devices:

```
SOTR (kg O₂/hr) = Oxygen transferred under standard conditions

Standard conditions:
- Temperature: 20°C
- DO: 0 mg/L (clean water)
- Pressure: 1 atm
- Salinity: 0 ppt
```

### 3. Oxygen Transfer Efficiency (OTE)

```
OTE (%) = (Oxygen transferred / Oxygen supplied) × 100

For air systems:
OTE = (O₂ absorbed / O₂ in air supplied) × 100

Typical ranges:
- Diffused aeration: 2-8% OTE
- Paddle wheels: 1-3% OTE
- Venturi injectors: 5-15% OTE
- LHO (Low Head Oxygenator): 60-90% OTE
- Oxygen cones (pure O₂): 80-95% OTE
```

---

## Oxygenation Technologies

### 1. Diffused Aeration (Air Stones/Diffusers)

Simplest and lowest cost, but least efficient.

```
┌────────────────────────────────────────────────────┐
│        DIFFUSED AERATION - SIDE VIEW               │
├────────────────────────────────────────────────────┤
│                                                     │
│  ╔═══════════════════════════════════════════╗    │
│  ║   ○  ○   ○   ○   ○   ○   ○   ○   ○      ║    │
│  ║     ↑ ↑   ↑   ↑   ↑   ↑   ↑   ↑   ↑     ║    │
│  ║   ○   ○   ○   ○   ○   ○   ○   ○   ○     ║    │
│  ║     ↑ ↑   ↑   ↑   ↑   ↑   ↑   ↑   ↑     ║    │
│  ║                                           ║    │
│  ║          Water body (tank/pond)           ║    │
│  ║                                           ║    │
│  ╚═══════════════════════════════════════════╝    │
│         ○○○○○○○○○○○○○○○○○○○○○○○○○○              │
│         Diffuser (air stones/membrane)             │
│                 ↑                                  │
│            Air blower                              │
│                                                     │
│  Fine bubbles rise through water column            │
│  O₂ transfers during rise time                     │
│  Also provides mixing and water circulation        │
└────────────────────────────────────────────────────┘
```

**Design Parameters:**

| Parameter | Value | Notes |
|-----------|-------|-------|
| Air flow rate | 0.5-2.0 m³/min per diffuser | |
| Placement depth | 1-3 m | Deeper = more contact time |
| OTE | 2-8% | Low efficiency |
| Power | 0.02-0.05 kW per kg O₂/hr | |
| Cost | $ - Low | Simple equipment |

**Advantages:**
- Low capital cost
- Simple installation
- Provides mixing
- Easy maintenance

**Disadvantages:**
- Very low OTE (wasteful)
- High operating cost
- Large air volumes needed
- Not suitable for high-density culture
- Can cause gas supersaturation

### 2. Low Head Oxygenator (LHO)

Packed column aerator - industry standard for RAS.

```
┌────────────────────────────────────────────────────┐
│      LOW HEAD OXYGENATOR (LHO) - SIDE VIEW         │
├────────────────────────────────────────────────────┤
│                                                     │
│          Water In (top)                            │
│               ↓                                     │
│      ┌────────┴────────┐                          │
│      │  Distribution   │                          │
│      │     Plate       │                          │
│      ├─────────────────┤                          │
│      │ ████████████████│                          │
│      │ ████████████████│ ← Packing media          │
│      │ ████████████████│   (plastic rings/sheets) │
│  Air │ ████████████████│                          │
│  In→ │ ████████████████│                          │
│      │ ████████████████│ ↑ Counter-current        │
│      │ ████████████████│ │ air flow                │
│      ├─────────────────┤ │                        │
│      │    Plenum       │─┘                        │
│      └────────┬────────┘                          │
│               ↓                                     │
│          Water Out                                 │
│               ↓                                     │
│          Blower exhaust                            │
│                                                     │
│  Water flows down through packing                  │
│  Air flows up (counter-current)                    │
│  Large surface area for O₂ transfer                │
│  Also strips CO₂ efficiently                       │
└────────────────────────────────────────────────────┘
```

**Design Parameters:**

| Parameter | Value | Notes |
|-----------|-------|-------|
| Height | 2-4 m | Taller = better transfer |
| Hydraulic loading | 40-80 m³/m²/hr | Water flow per area |
| Air:Water ratio | 10:1 to 20:1 | Volume basis |
| Packing depth | 1.5-3.0 m | Media depth |
| OTE | 60-90% | Very efficient |
| Pressure drop | 100-300 Pa | Low head requirement |

**Packing Media:**
- Random packing (plastic rings, saddles)
- Structured packing (corrugated sheets)
- Surface area: 100-300 m²/m³

**Sizing Example:**

```
Required O₂ transfer: 50 kg/day = 2.08 kg/hr
System flow: 200 m³/hr
Influent DO: 6.0 mg/L
Target DO: 9.0 mg/L
Temperature: 25°C

Required Δ DO: 9.0 - 6.0 = 3.0 mg/L

Check if possible:
O₂ mass = 200 m³/hr × 3.0 mg/L × 0.001 = 0.6 kg/hr

This provides only 0.6 kg/hr, but we need 2.08 kg/hr total.

Options:
1. Use pure O₂ injection (oxygen cones) for main load
2. Use LHO primarily for CO₂ stripping and partial O₂
3. Supersaturate to >100% with LHO + pure O₂
```

**Advantages:**
- High OTE (efficient)
- Excellent CO₂ removal
- Low maintenance
- Scalable design
- No moving parts in column

**Disadvantages:**
- Moderate capital cost
- Requires elevation (gravity flow)
- Packing can clog with biofilm
- Blower energy costs
- Limited to ~110% DO saturation with air

### 3. Oxygen Cones (Pure Oxygen Injection)

High-performance oxygen addition for intensive RAS.

```
┌────────────────────────────────────────────────────┐
│         OXYGEN CONE - SIDE VIEW                    │
├────────────────────────────────────────────────────┤
│                                                     │
│         Water In (top)                             │
│             ↓                                       │
│      ┌──────┴──────┐                              │
│      │             │                              │
│      │   ↓  ↓  ↓   │ ← Downward swirling flow    │
│      │   ↓  ↓  ↓   │                              │
│      │  ↓○↓○↓○↓○↓  │ ← Fine O₂ bubbles           │
│      │ ↓○ ↓○ ↓○ ↓○ │   sheared by turbulence     │
│      │↓○  ↓○  ↓○  ↓│                              │
│      ╲↓    ↓    ↓  ╱                              │
│       ╲    ↓    ↓ ╱  ← Cone shape                 │
│        ╲   ↓   ↓ ╱     increases pressure         │
│         ╲  ↓  ↓ ╱                                  │
│          ╲ ↓ ↓ ╱                                   │
│           ╲↓ ↓╱                                    │
│            ╲_╱                                     │
│             │                                       │
│        Pure O₂ injection point                     │
│                                                     │
│             ↓                                       │
│        Water Out (>150% saturation possible)       │
│                                                     │
│  Venturi effect + swirl creates fine bubbles       │
│  High pressure and contact time = high OTE         │
│  Can achieve 120-180% DO saturation               │
└────────────────────────────────────────────────────┘
```

**Design Parameters:**

| Parameter | Value | Notes |
|-----------|-------|-------|
| Retention time | 1-3 minutes | In cone |
| Height | 2-4 m | Taller = more pressure |
| Diameter (top) | 0.5-2.0 m | Depends on flow |
| OTE | 80-95% | Excellent efficiency |
| DO achievable | 120-180% sat | Supersaturation |
| Cone angle | 45-60° | Optimal geometry |

**Pure Oxygen Requirements:**

```
O₂ Gas (kg/day) = O₂ Demand (kg/day) / OTE

Example:
50 kg O₂/day needed
OTE = 90%

O₂ gas required: 50 / 0.90 = 55.6 kg/day

Oxygen cylinder:
- Standard cylinder: 50 L at 200 bar = ~10 kg O₂
- Daily usage: 55.6 kg ÷ 10 kg/cylinder = 5.6 cylinders/day

Large facilities use:
- Liquid oxygen dewars (several tonnes)
- On-site oxygen generators (PSA or membrane)
```

**Oxygen Cost Analysis:**

| Source | Cost per kg O₂ | Advantages | Disadvantages |
|--------|----------------|------------|---------------|
| Cylinders | $2-5 | Simple, no equipment | Handling, delivery |
| Liquid O₂ | $0.50-1.50 | Bulk storage | Tank rental, evaporation |
| PSA generator | $0.20-0.80 | On-demand, reliable | High capital cost |
| Membrane | $0.30-1.00 | Low maintenance | Lower purity (90-95%) |

**Advantages:**
- Very high OTE
- Compact design
- Can supersaturate (>100% DO)
- Low energy consumption
- Fast response time

**Disadvantages:**
- Oxygen cost (ongoing expense)
- Requires pure O₂ supply
- Moderate capital cost
- Must prevent over-saturation (gas bubble disease)
- Safety considerations (O₂ is oxidizer)

### 4. Venturi Injectors

Uses water flow velocity to draw and mix air/oxygen.

```
┌────────────────────────────────────────────────────┐
│          VENTURI INJECTOR - SIDE VIEW              │
├────────────────────────────────────────────────────┤
│                                                     │
│  ╔════════════════════════════════════════╗       │
│  ║ ──────>→→→→→→   ←○←──   ──→──→──→─── ║       │
│  ╚════════════════════════════════════════╝       │
│           ↑         ↑  Air inlet                   │
│       Converging  Throat  Diffuser                 │
│       section            (velocity drops,          │
│    (velocity increases)   pressure rises)          │
│                                                     │
│  Bernoulli principle creates vacuum at throat      │
│  Draws air/O₂ into high-velocity water             │
│  Bubbles sheared into fine size                    │
│  Mixing occurs in diffuser section                 │
└────────────────────────────────────────────────────┘
```

**Design Parameters:**

| Parameter | Value | Notes |
|-----------|-------|-------|
| Throat velocity | 5-15 m/s | Creates suction |
| Pressure drop | 0.3-0.8 bar | Energy cost |
| OTE (air) | 5-15% | Moderate |
| OTE (pure O₂) | 40-70% | Better with O₂ |
| Gas:Water ratio | 1:4 to 1:10 | Self-induced |

**Advantages:**
- Simple, no moving parts
- Self-priming gas injection
- Compact
- Can use air or pure O₂

**Disadvantages:**
- Requires pumping pressure
- Moderate OTE
- Energy intensive
- Can cause gas supersaturation

---

## Carbon Dioxide Management

### CO₂ Production and Toxicity

**CO₂ Generation:**

```
From fish respiration:
CO₂ production ≈ O₂ consumption (1:1 molar ratio)

From nitrification:
Biofilter consumes alkalinity → releases CO₂

Total CO₂ = Fish respiration + Biofilter production
```

**Toxicity Levels:**

| CO₂ Level | Effect on Fish |
|-----------|----------------|
| <10 mg/L | Safe, no impact |
| 10-20 mg/L | Acceptable for most species |
| 20-30 mg/L | Chronic stress, reduced growth |
| 30-50 mg/L | Acute stress, mortality possible |
| >50 mg/L | Often lethal |

**Species Sensitivity:**
- Salmonids: More sensitive (<15 mg/L preferred)
- Tilapia: More tolerant (<25 mg/L)
- Catfish: Tolerant (<30 mg/L)

### CO₂ Removal Technologies

**1. Cascade Aerator**

```
┌────────────────────────────────────────────────────┐
│         CASCADE AERATOR - SIDE VIEW                │
├────────────────────────────────────────────────────┤
│                                                     │
│  Water In ──> ┌─────┐                             │
│               │     │                             │
│               └──┬──┘                             │
│                  ↓ ↓ ↓                            │
│            ┌─────────────┐ Step 1                 │
│            │             │                        │
│            └──────┬──────┘                        │
│                   ↓ ↓ ↓                           │
│             ┌─────────────┐ Step 2                │
│             │             │                        │
│             └──────┬──────┘                        │
│                    ↓ ↓ ↓                          │
│              ┌─────────────┐ Step 3               │
│              │             │                       │
│              └──────┬──────┘                       │
│                     ↓                              │
│                Water Out                           │
│                                                     │
│  Water falls through air in steps                  │
│  CO₂ stripped, O₂ added                           │
│  Simple, low cost, dual function                   │
└────────────────────────────────────────────────────┘
```

**Performance:**
- CO₂ removal: 50-80%
- O₂ addition: 10-30%
- Height: 1-3 m
- Steps: 3-6 typically

**2. Packed Column Degasser**

Same design as LHO but optimized for CO₂ stripping:

- Counter-current air flow
- 70-90% CO₂ removal efficiency
- Also adds oxygen
- Most effective method

**3. Spray Aerators**

Water sprayed into air:

- Simple design
- 30-50% CO₂ removal
- Adds some O₂
- Can cause temperature change

---

## System Design Example: 200-Tonne Salmon RAS

**Production Parameters:**
- Feed: 800 kg/day
- O₂ demand: 0.55 kg O₂/kg feed
- Water temperature: 13°C
- System flow: 400 m³/hr

**Oxygen Requirements:**

```
Daily O₂: 800 kg feed × 0.55 = 440 kg O₂/day
Hourly: 440 ÷ 24 = 18.3 kg O₂/hr
Peak (1.5× average): 27.5 kg O₂/hr
```

**Design Selection:**

**Primary: Oxygen Cones**
- Number: 4 cones (100 m³/hr each)
- Capacity: 8 kg O₂/hr per cone = 32 kg O₂/hr total
- Target DO: 140% saturation = 14.0 mg/L at 13°C
- Pure O₂: 27.5 kg/hr ÷ 0.90 OTE = 30.6 kg/hr = 734 kg/day

**Secondary: LHO for CO₂ Stripping**
- Dimensions: 2.5 m dia × 3.5 m height
- Flow: 400 m³/hr
- Packing: 2.5 m depth structured media
- Air:Water: 15:1
- CO₂ removal: 75%

**Backup: Diffused Aeration**
- Emergency blowers: 2 × 100 CFM
- Provide minimum DO during oxygen supply failure
- Keep fish alive for 4-6 hours

**Pure Oxygen Supply:**
- Option 1: PSA generator (100 kg/day capacity)
  - Capital: $150,000-200,000
  - Operating: ~$0.40/kg O₂
  - Daily cost: $294

- Option 2: Liquid O₂ bulk tank
  - Tank rental: $200/month
  - O₂ cost: ~$0.80/kg
  - Daily cost: $587

**Economic Analysis:**
- PSA payback: ~2-3 years for this scale
- Recommend PSA for reliability and long-term cost

---

## Emergency Backup Systems

**Critical Importance:**
- Fish can die in <1 hour without oxygen
- All systems must have backup
- Redundancy is not optional

**Backup Strategies:**

1. **Dual blowers** - one running, one standby
2. **Emergency generators** - power backup
3. **Alarm systems** - low DO alerts
4. **Emergency oxygen** - cylinder backup
5. **Automatic switchover** - sensor-activated

**Alarm Setpoints:**

| Parameter | Warning | Critical |
|-----------|---------|----------|
| DO | <6 mg/L | <4 mg/L |
| CO₂ | >20 mg/L | >30 mg/L |
| Power failure | Immediate | N/A |

---

## Key Takeaways

1. **Oxygen is life** - most critical parameter in RAS

2. **Calculate precisely** - oxygen demand based on feed and species

3. **Pure O₂ is superior** - high-density RAS requires oxygen injection

4. **LHOs are workhorses** - excellent for CO₂ removal and O₂ addition

5. **Don't over-saturate** - >120% can cause gas bubble disease

6. **CO₂ is toxic too** - must actively strip from system

7. **Backup everything** - redundancy prevents catastrophic loss

8. **Monitor continuously** - DO and CO₂ require real-time tracking

---

## Further Reading

1. Timmons, M.B. & Ebeling, J.M. (2013). "Recirculating Aquaculture" - Chapter 7
2. Colt, J. (2006). "Water quality requirements for reuse systems"
3. Summerfelt, S.T. et al. (2000). "Oxygenation and carbon dioxide control"
4. Grace, G.R. & Piedrahita, R.H. (1994). "Carbon dioxide accumulation"
5. Watten, B.J. et al. (2004). "Modeling oxygen transfer"

---

*Next Lesson: Module 5 - Advanced Water Quality Management*

*EcoFusion Academy - Course 402: Advanced Aquaculture Systems*
