# Module 3: Water Quality Management in Recirculating Systems
## Course 212: Water Conservation & Recirculation

---

## Learning Objectives

By the end of this module, you will be able to:
1. Monitor and manage key water quality parameters in recirculating systems
2. Understand accumulation dynamics in closed-loop systems
3. Implement water quality correction strategies
4. Prevent and respond to water quality degradation
5. Balance water conservation with quality maintenance

---

## Introduction

Recirculating systems concentrate everything—beneficial and harmful. While this enables exceptional water efficiency, it demands rigorous water quality management. Understanding what accumulates, why it matters, and how to manage it determines the success or failure of recirculation strategies.

---

## Core Water Quality Parameters

### Essential Parameters for Recirculation

```
╔════════════════════════════════════════════════════════════════════════════╗
║              CRITICAL WATER QUALITY PARAMETERS                             ║
╠════════════════════════════════════════════════════════════════════════════╣
║                                                                            ║
║ PRIMARY PARAMETERS (Test Daily)                                            ║
║ ═══════════════════════════════                                            ║
║                                                                            ║
║ pH                    Target: 5.5-6.5 (most crops)                         ║
║                       Critical: <5.0 or >7.0                               ║
║                                                                            ║
║ EC (Electrical        Target: 1.5-2.5 mS/cm (leafy greens)                 ║
║ Conductivity)         Critical: >3.5 mS/cm                                 ║
║                                                                            ║
║ Temperature           Target: 65-75°F (varies by crop)                     ║
║                       Critical: <55°F or >85°F                             ║
║                                                                            ║
║ Dissolved Oxygen      Target: >6 mg/L                                      ║
║                       Critical: <4 mg/L                                    ║
║                                                                            ║
║ ════════════════════════════════════════════════════════════════════════   ║
║                                                                            ║
║ SECONDARY PARAMETERS (Test Weekly)                                         ║
║ ════════════════════════════════                                           ║
║                                                                            ║
║ Turbidity            Target: <5 NTU | Critical: >20 NTU                    ║
║ Alkalinity           Target: 50-100 ppm CaCO3                              ║
║ Individual Nutrients  Target: Crop-specific ranges                         ║
║                                                                            ║
╚════════════════════════════════════════════════════════════════════════════╝
```

### pH Management

**pH Dynamics in Recirculating Systems:**

```
pH BEHAVIOR OVER TIME IN RECIRCULATION

Week 1-2: Initial pH drop (biological activity establishes)
Week 3-6: Gradual pH decline (nitrate accumulation)
Week 6+:  Requires regular pH correction

┌─────────────────────────────────────────────────────────┐
│                                                         │
│  7.5 ─                                                  │
│       ╲                                                 │
│  7.0 ─ ╲___                                             │
│           ╲___                                          │
│  6.5 ─       ╲_______________  ◄─ Target Range         │
│                              ╲___                       │
│  6.0 ─                           ╲____                  │
│                                       ╲___              │
│  5.5 ─                                    ╲_____        │
│                                                 ╲____   │
│  5.0 ─                                               ╲_ │
│       │    │    │    │    │    │    │    │    │    │  │
│       0    2    4    6    8   10   12   14   16   18  │
│                        Weeks                            │
│                                                         │
│  Without pH correction →                                │
│  With regular correction → Stable in target range       │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**pH Correction Methods:**

| Method | Application | Advantages | Disadvantages |
|--------|-------------|------------|---------------|
| **Potassium Hydroxide (KOH)** | Raise pH | Adds K (beneficial), fast-acting | Caustic, requires careful handling |
| **Potassium Bicarbonate** | Raise pH | Safer to handle, buffers pH | More expensive, slower |
| **Calcium Carbonate** | Raise pH (slow) | Adds Ca, very safe | Very slow dissolution |
| **Phosphoric Acid** | Lower pH | Adds P (beneficial) | Can over-add phosphorus |
| **Nitric Acid** | Lower pH | Adds N (beneficial) | Corrosive, dangerous |
| **Citric Acid** | Lower pH | Organic, safe | Can feed microorganisms |

---

## Electrical Conductivity (EC) Management

### Understanding EC in Recirculation

**EC represents total dissolved solids (salts) in solution.**

```
EC ACCUMULATION PATTERN

┌─────────────────────────────────────────────────────────┐
│                                                         │
│ 3.5 ─                                    ┌─── Dump     │
│                                         /│   & Refill  │
│ 3.0 ─                              ____/ │   Point     │
│                                ___/      ▼             │
│ 2.5 ─ ═══════════════════ ___/      ═══════════════    │
│                      ____/               Target        │
│ 2.0 ─           ____/                    Range         │
│             ___/                                       │
│ 1.5 ─ ═════/══════════════════════════════════════     │
│          /                                             │
│ 1.0 ─   /                                              │
│        /                                               │
│ 0.5 ─ /                                                │
│      │    │    │    │    │    │    │    │    │    │   │
│      0    2    4    6    8   10   12   14   16   18   │
│                        Days                            │
│                                                        │
│  Accumulation rate depends on:                         │
│  • Evapotranspiration rate                             │
│  • Source water EC                                     │
│  • Nutrient addition rate                              │
│  • Crop uptake patterns                                │
│                                                        │
└─────────────────────────────────────────────────────────┘
```

**EC Management Strategies:**

1. **Controlled Discharge**
   - Dump 10-20% weekly
   - Replace with fresh water
   - Reset EC to target range

2. **Reverse Osmosis (RO) Blending**
   - Blend RO water with system water
   - Dilute EC without full dump
   - More water-efficient but higher cost

3. **Strategic Nutrient Management**
   - Use low-salt nutrient formulations
   - Minimize non-essential additions
   - Monitor source water contributions

---

## Dissolved Oxygen (DO)

### DO Requirements and Management

```
╔════════════════════════════════════════════════════════════╗
║          DISSOLVED OXYGEN TARGETS BY SYSTEM                ║
╠════════════════════════════════════════════════════════════╣
║                                                            ║
║ System Type          Minimum      Target      Ideal       ║
║ ─────────────────────────────────────────────────────────  ║
║ NFT                  4 mg/L       6 mg/L      8+ mg/L     ║
║ DWC/Raft             5 mg/L       7 mg/L      9+ mg/L     ║
║ Drip/Media Beds      3 mg/L       5 mg/L      6+ mg/L     ║
║ Aquaponics           5 mg/L       6 mg/L      8+ mg/L     ║
║                                                            ║
║ FACTORS REDUCING DO:                                       ║
║ • High temperature (+10°F = -20% DO)                       ║
║ • High biological oxygen demand (BOD)                      ║
║ • Poor water circulation                                   ║
║ • Organic matter accumulation                              ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝
```

**DO Enhancement Methods:**

| Method | Effectiveness | Cost | Application |
|--------|---------------|------|-------------|
| **Air Stones** | Moderate | Low | Small systems, backup |
| **Venturi Injectors** | Good | Low-Medium | Inline installation |
| **Pure Oxygen Injection** | Excellent | High | Large systems, high density |
| **Waterfall/Splash** | Moderate | Very Low | Passive, gravity returns |
| **Surface Agitation** | Good | Medium | Reservoirs, sumps |

---

## Nutrient Balance in Recirculation

### Nutrient Accumulation Dynamics

**Different nutrients behave differently in recirculating systems:**

```
┌──────────────────────────────────────────────────────────────┐
│         NUTRIENT BEHAVIOR PATTERNS                           │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│ DEPLETING NUTRIENTS (Require regular addition)              │
│ ═══════════════════════════════════════════                  │
│ • Nitrogen (N)      - Primary macronutrient                  │
│ • Phosphorus (P)    - Rapidly consumed                       │
│ • Potassium (K)     - High plant demand                      │
│ • Iron (Fe)         - Precipitates at high pH                │
│                                                              │
│ STABLE NUTRIENTS (Maintain relatively constant)              │
│ ═══════════════════════════════════════════                  │
│ • Calcium (Ca)      - Often in source water                  │
│ • Magnesium (Mg)    - Balanced uptake/addition               │
│                                                              │
│ ACCUMULATING NUTRIENTS (May need periodic flushing)          │
│ ════════════════════════════════════════════════             │
│ • Sodium (Na)       - From source water, pH adjustment       │
│ • Chloride (Cl)     - From source water                      │
│ • Sulfate (SO4)     - From fertilizers                       │
│ • Micronutrients    - Small additions, low uptake            │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

### Nutrient Monitoring Strategy

**Testing Schedule:**

| Frequency | Parameters | Purpose |
|-----------|------------|---------|
| **Daily** | EC, pH, Temperature | Basic system stability |
| **Weekly** | N, P, K, Fe | Primary nutrient status |
| **Bi-weekly** | Ca, Mg, S | Secondary nutrients |
| **Monthly** | Full micronutrient panel | Detect accumulation/deficiency |
| **Quarterly** | Complete lab analysis | Comprehensive audit |

---

## Water Quality Problems and Solutions

### Common Issues Matrix

```
╔════════════════════════════════════════════════════════════════════════════╗
║                     TROUBLESHOOTING GUIDE                                  ║
╠════════════════════════════════════════════════════════════════════════════╣
║                                                                            ║
║ PROBLEM: Rising EC, Normal pH                                              ║
║ ────────────────────────────────                                           ║
║ Likely Cause: Salt accumulation from evapotranspiration                    ║
║ Solution: Partial water change (10-20%), reduce nutrient concentration     ║
║                                                                            ║
║ PROBLEM: Dropping pH, Rising EC                                            ║
║ ────────────────────────────────────                                       ║
║ Likely Cause: Nitrate accumulation, excess fertilization                   ║
║ Solution: Water change, reduce feeding, check alkalinity                   ║
║                                                                            ║
║ PROBLEM: Low DO Despite Aeration                                           ║
║ ────────────────────────────────────                                       ║
║ Likely Cause: High temperature or organic matter accumulation              ║
║ Solution: Improve filtration, cool water, increase aeration                ║
║                                                                            ║
║ PROBLEM: Cloudy Water (High Turbidity)                                     ║
║ ────────────────────────────────────                                       ║
║ Likely Cause: Bacterial bloom or inadequate filtration                     ║
║ Solution: Check/clean filters, verify UV function, reduce organics         ║
║                                                                            ║
║ PROBLEM: Algae Growth                                                      ║
║ ────────────────────────────────────                                       ║
║ Likely Cause: Light exposure to nutrient solution                          ║
║ Solution: Shield system from light, improve filtration, clean              ║
║                                                                            ║
║ PROBLEM: Nutrient Lockout Symptoms                                         ║
║ ────────────────────────────────────                                       ║
║ Likely Cause: pH out of range or nutrient imbalance                        ║
║ Solution: Correct pH first, then test and adjust individual nutrients      ║
║                                                                            ║
╚════════════════════════════════════════════════════════════════════════════╝
```

---

## Water Quality Maintenance Schedule

```
DAILY CHECKS
□ Visual inspection (color, clarity, smell)
□ pH reading
□ EC reading
□ Temperature
□ System operation (pumps, aerators)

WEEKLY TASKS
□ Major nutrient test (N, P, K)
□ Adjust nutrients as needed
□ Clean pre-filters
□ Check UV lamp hours
□ Partial water change (if needed)

MONTHLY TASKS
□ Full water quality test
□ Deep clean filters
□ Replace UV lamp (per schedule)
□ System cleaning (algae, biofilm)
□ Calibrate meters/probes

QUARTERLY TASKS
□ Professional lab analysis
□ System audit (all parameters)
□ Equipment inspection
□ Replace sacrificial components
```

---

## Balancing Conservation and Quality

### The Conservation-Quality Trade-off

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  Maximum Conservation ←──────────→ Maximum Quality     │
│  (No discharge)                    (Frequent flushing)  │
│                                                         │
│  99% Recirculation                 80% Recirculation    │
│  • Highest water savings           • Easier management  │
│  • Requires intensive monitoring   • More stable        │
│  • Advanced treatment needed       • Lower risk         │
│  • Higher technical skill          • Simpler systems    │
│                                                         │
│               OPTIMAL ZONE                              │
│            ┌──────────────┐                             │
│            │  90-95%      │                             │
│            │  Recirculation│                            │
│            └──────────────┘                             │
│         • Good water savings                            │
│         • Manageable complexity                         │
│         • Acceptable risk                               │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Recommended Strategies by Scale:**

| Scale | Recirculation % | Discharge Strategy | Testing Frequency |
|-------|-----------------|-------------------|-------------------|
| **Small (<1,000 sf)** | 85-90% | 10-15% weekly dump | Daily: pH, EC, temp |
| **Medium (1-10k sf)** | 90-95% | 5-10% weekly dump + targeted | Daily basics + weekly nutrients |
| **Large (>10k sf)** | 95-98% | Minimal strategic discharge | Continuous automated + lab verification |

---

## Module Summary

### Key Takeaways

1. **Recirculation concentrates everything** - beneficial nutrients and harmful accumulations require active management

2. **Core parameters drive success** - pH, EC, temperature, and DO are the foundation; monitor daily

3. **EC management is critical** - salt accumulation is inevitable; plan for periodic dilution or discharge

4. **DO often limits performance** - temperature control and adequate aeration prevent oxygen-related crop issues

5. **Balance conservation with quality** - 90-95% recirculation is the sweet spot for most operations

### Action Items

Before proceeding to Module 4:
- [ ] Establish water quality testing schedule
- [ ] Calibrate pH and EC meters
- [ ] Set target ranges for your crop type
- [ ] Plan water change/discharge strategy
- [ ] Create troubleshooting response guide

---

*EcoFusion Academy - Course 212, Module 3*
