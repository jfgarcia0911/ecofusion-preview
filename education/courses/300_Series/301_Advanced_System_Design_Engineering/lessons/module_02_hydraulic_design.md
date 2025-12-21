# Module 2: Hydraulic System Design

## Introduction

Hydraulic design is the backbone of any aquaponic or hydroponic system. Poor hydraulic design leads to dead zones, inadequate circulation, pump failures, and system crashes. Proper design ensures reliable operation, energy efficiency, and optimal biological performance.

This module covers complete hydraulic system design: calculating system curves, selecting pumps, sizing pipes, designing distribution manifolds, and creating backup systems. You'll learn to create professional hydraulic calculations that can be submitted for permitting and construction.

**Duration:** 1 hour

---

## Learning Objectives

By the end of this module, you will be able to:

1. Calculate total dynamic head for complex piping systems
2. Generate system curves and match to pump curves
3. Size pipes for optimal velocity and minimal head loss
4. Design distribution manifolds for uniform flow
5. Specify pumps with appropriate selection criteria
6. Design redundancy and backup systems
7. Create hydraulic calculation documentation

---

## 1. System Hydraulic Analysis

### 1.1 Total Dynamic Head Components

```
TDH = Hₛ + Hf + Hₘ + Hₚ + Hᵥ

Where:
Hₛ = Static head (elevation change)
Hf = Friction head loss (pipe)
Hₘ = Minor losses (fittings, valves)
Hₚ = Pressure head (operating pressure)
Hᵥ = Velocity head (usually negligible)
```

### 1.2 Static Head Calculation

```
Simple Case:
┌─────────────┐  ← Water Level 1 (Elevation = 10 ft)
│  Grow Bed   │
└──────┬──────┘
       │
       ↓ Pipe
       │
┌──────┴──────┐  ← Water Level 2 (Elevation = 0 ft)
│  Fish Tank  │
│             │
└─────────────┘

Hₛ = 10 ft - 0 ft = 10 ft (water must be lifted 10 ft)
```

**With Multiple Discharge Points:**
```
Hₛ = Σ(Qᵢ/Qₜₒₜₐₗ × Hᵢ)

Where:
Qᵢ = Flow to discharge point i
Qₜₒₜₐₗ = Total system flow
Hᵢ = Static head to point i
```

### 1.3 Friction Loss Calculations

**Hazen-Williams Method (Recommended for Water Systems):**

```
hf = 10.67 × L × Q^1.852 / (C^1.852 × D^4.87)

Imperial Units:
hf = Head loss per 100 ft of pipe (ft)
L  = Length (in units of 100 ft)
Q  = Flow rate (GPM)
C  = Roughness coefficient
D  = Inside diameter (inches)

C Values:
PVC/CPVC: 150
HDPE: 140-150
Steel (new): 130
Steel (10 years): 100
Steel (20+ years): 80
```

**Friction Loss Table (PVC C=150):**

| Pipe Size | 10 GPM | 25 GPM | 50 GPM | 100 GPM | 200 GPM |
|-----------|--------|--------|--------|---------|---------|
| 1" | 14.5 | 72.0 | 252 | - | - |
| 1.5" | 2.8 | 14.0 | 49.0 | 171 | - |
| 2" | 0.8 | 4.0 | 14.0 | 49.0 | 171 |
| 3" | 0.1 | 0.5 | 1.8 | 6.3 | 22.0 |
| 4" | 0.03 | 0.15 | 0.5 | 1.8 | 6.3 |

*Values in ft per 100 ft of pipe*

### 1.4 Minor Losses (Fittings and Valves)

**K-Value Method:**
```
h = K × V² / (2g)

Where:
K = Loss coefficient
V = Velocity (ft/s)
g = 32.2 ft/s²
```

**Standard K-Values:**

| Fitting | K Value |
|---------|---------|
| 90° elbow, standard radius | 0.9 |
| 90° elbow, long radius | 0.6 |
| 45° elbow | 0.4 |
| Tee, flow through run | 0.6 |
| Tee, flow through branch | 1.8 |
| Ball valve (fully open) | 0.05 |
| Gate valve (fully open) | 0.15 |
| Check valve (swing type) | 2.0 |
| Check valve (spring loaded) | 3.5 |
| Sudden enlargement | (1 - A₁/A₂)² |
| Sudden contraction | 0.5(1 - A₂/A₁) |
| Pipe entrance (sharp) | 0.5 |
| Pipe entrance (rounded) | 0.05 |
| Pipe exit | 1.0 |

**Equivalent Length Method:**
```
Leq = K × D / f

For quick estimates, use equivalent lengths:
90° elbow: 30 × D
Tee (through branch): 60 × D
Gate valve: 8 × D
Check valve: 100 × D
```

---

## 2. System Curve Development

### 2.1 System Curve Equation

```
TDH = Hₛ + K × Q²

Where:
K = System resistance coefficient
Q = Flow rate
```

**Calculating K:**
```
K = (Hf + Hₘ + Hₚ) / Q² at design flow

This allows TDH to be calculated at any flow rate:
TDH(Q) = Hₛ + K × Q²
```

### 2.2 Example System Curve Generation

**Given System:**
- Static head: 8 ft
- Design flow: 100 GPM
- Friction + minor losses at 100 GPM: 12 ft
- Pressure head: 5 psi = 11.55 ft

**Calculate K:**
```
K = (12 + 11.55) / 100² = 0.002355
```

**Generate System Curve:**

| Flow (GPM) | Static (ft) | Friction (ft) | Total TDH (ft) |
|------------|-------------|---------------|----------------|
| 0 | 8.0 | 0 | 8.0 |
| 25 | 8.0 | 1.5 | 9.5 |
| 50 | 8.0 | 5.9 | 13.9 |
| 75 | 8.0 | 13.2 | 21.2 |
| 100 | 8.0 | 23.6 | 31.6 |
| 125 | 8.0 | 36.8 | 44.8 |
| 150 | 8.0 | 53.0 | 61.0 |

### 2.3 System Curve Visualization

```
TDH
(ft)
 70│                                    System Curve
    │                                  /
 60│                               /
    │                            /
 50│                          /
    │                       /    Operating Point
 40│                    /      ●
    │                 /      /   \
 30│              /        /       \  Pump Curve
    │           /        /           \
 20│        /        /                 \
    │     /        /                      \
 10│  /        /                            \
    │/______/________________________________\___
  0 └─────┴─────┴─────┴─────┴─────┴─────┴─────┴─ Flow
    0    25    50    75   100   125   150   175  (GPM)

Operating Point: Where pump curve intersects system curve
```

---

## 3. Pump Selection

### 3.1 Pump Types for Aquaponics

**Centrifugal Pumps:**
- Most common for aquaponics
- Handles solids when properly selected
- Smooth, non-pulsing flow
- Energy efficient at design point

**Submersible vs. External:**

| Feature | Submersible | External |
|---------|-------------|----------|
| Installation | In sump/tank | Separate pump room |
| Priming | Self-priming | Requires priming |
| Cooling | Water-cooled | Air/water-cooled |
| Maintenance | Must drain tank | Easy access |
| Noise | Quieter | Can be loud |
| Efficiency | Good | Better |
| Cost | Lower | Higher |

### 3.2 Pump Selection Criteria

**1. Flow Rate Requirements:**
```
Aquaponic Systems:
- Fish tank turnover: 1-2 times per hour minimum
- Biofilter: 3-6 times per hour
- Grow beds (flood/drain): 4-8 times per hour

System Flow = MAX(Tank Volume × Turnover Rate)
```

**2. Head Requirements:**
```
Select pump to operate at 80-90% of BEP (Best Efficiency Point)
Never operate at far right or left of curve
```

**3. Solids Handling:**
```
Minimum impeller clearance: 1/4" (6 mm) for solids
Vortex impellers for heavy solids
Open impellers for moderate solids
Enclosed impellers for clean water only
```

**4. Material Compatibility:**
```
Shaft: 316 Stainless Steel
Impeller: Noryl, Bronze, Stainless Steel
Seals: Viton, Silicon Carbide
Housing: Cast iron, Stainless Steel, Thermoplastic
```

### 3.3 Pump Curve Analysis

**Reading a Pump Curve:**
```
Example Pump Curve Data:

Flow (GPM) | Head (ft) | Efficiency (%) | NPSH (ft) | Power (HP)
-----------|-----------|----------------|-----------|------------
0          | 45        | 0              | 2         | 1.5
20         | 44        | 45             | 3         | 1.4
40         | 42        | 65             | 4         | 1.3
60         | 38        | 78             | 5         | 1.2  ← BEP
80         | 32        | 75             | 7         | 1.3
100        | 24        | 60             | 10        | 1.4
120        | 14        | 35             | 15        | 1.5

BEP (Best Efficiency Point): 60 GPM @ 38 ft @ 78% efficient
```

**Operating Point Selection:**
```
If system requires 65 GPM @ 35 ft:
This pump operates at ~77% efficiency ✓
NPSH available must exceed 6 ft ✓
Power draw ~1.25 HP
```

### 3.4 Net Positive Suction Head (NPSH)

**NPSH Available:**
```
NPSHₐ = Hₐₜₘ + Hₛ - Hf - Hvp

Where:
Hₐₜₘ = Atmospheric pressure head (34 ft at sea level)
Hₛ   = Static head on suction (positive if above pump)
Hf   = Friction loss on suction side
Hvp  = Vapor pressure head (0.8 ft at 20°C)

Requirement: NPSHₐ > NPSHᵣ (required) + 3 ft safety margin
```

**Preventing Cavitation:**
- Keep suction line velocity < 5 ft/s
- Minimize suction line length
- Eliminate air pockets
- Use foot valve only if necessary
- Locate pump below water level when possible

---

## 4. Pipe Sizing

### 4.1 Velocity Guidelines

**Recommended Velocities:**

| Application | Velocity Range |
|-------------|----------------|
| Pump suction | 2-5 ft/s |
| Pump discharge | 4-8 ft/s |
| Gravity drain | 2-4 ft/s |
| Distribution header | 3-6 ft/s |

**Economic Velocity:**
```
Vₑ = 1.2 × √Q

Where:
Vₑ = Economic velocity (ft/s)
Q  = Flow rate (GPM)

This balances pipe cost vs. pumping cost
```

### 4.2 Pipe Sizing Procedure

**Step 1: Calculate required flow**
```
Q = System Volume × Turnover Rate / 60

Example: 5000 gal tank, 1.5 turnovers/hour
Q = 5000 × 1.5 / 60 = 125 GPM
```

**Step 2: Select trial pipe size**
```
Use velocity method:
A = Q / (V × 448.8)  [A in ft², Q in GPM, V in ft/s]

For V = 5 ft/s, Q = 125 GPM:
A = 125 / (5 × 448.8) = 0.0557 ft² = 8.0 in²
D = √(4A/π) = 3.2"

Select 3" or 4" pipe for trial
```

**Step 3: Calculate head loss**
```
Check both sizes:
3" pipe: hf = 6.3 ft/100 ft @ 125 GPM
4" pipe: hf = 1.8 ft/100 ft @ 125 GPM

If total length = 80 ft:
3": Total friction = 5.0 ft
4": Total friction = 1.4 ft

Savings: 3.6 ft of head
```

**Step 4: Economic analysis**
```
Energy savings = ΔH × ρ × g × Q × Hours/Year
                = 3.6 × 62.4 × 125 × 8760 / 33000
                = 5900 kWh/year

At $0.12/kWh = $708/year savings

Price difference 4" vs 3" pipe: ~$200 for 80 ft
Payback: 3 months ✓

Select 4" pipe
```

### 4.3 Schedule Selection

**Pressure Rating vs. Schedule:**

| Schedule | PSI @ 73°F | Typical Use |
|----------|------------|-------------|
| SDR-35 | 100 | Gravity drain |
| SCH 40 | 280 | General purpose |
| SCH 80 | 400 | High pressure |

**Wall Thickness Impact:**

| Size | SCH 40 ID | SCH 80 ID | % Difference |
|------|-----------|-----------|--------------|
| 1" | 1.049" | 0.957" | 9.6% |
| 2" | 2.067" | 1.939" | 6.6% |
| 4" | 4.026" | 3.826" | 5.2% |

*Use SCH 40 for most aquaponic applications*

---

## 5. Distribution Manifold Design

### 5.1 Uniform Flow Distribution

**Goal:** Achieve <10% flow variation across all outlets

**Manifold Sizing Rule:**
```
D_manifold ≥ 1.5 × D_branch

For uniform flow:
- Manifold velocity should decrease along length
- Use reverse flow where possible
- Tap outlets on top/sides, not bottom
```

### 5.2 Flow Distribution Analysis

**Equal Branch Lengths:**
```
        Branch 1  Branch 2  Branch 3  Branch 4
            │         │         │         │
            ↓         ↓         ↓         ↓
    ═══════╪═════════╪═════════╪═════════╪═══════
    Q →                                   Dead End

Flow distribution:
Q₁ > Q₂ > Q₃ > Q₄  (unequal due to pressure drop)

To equalize:
- Increase manifold size
- Use flow restrictors at outlets
- Use reverse-return piping
```

**Reverse-Return Design:**
```
    Branch 1  Branch 2  Branch 3  Branch 4
        │         │         │         │
        ↓         ↓         ↓         ↓
    ════╪═════════╪═════════╪═════════╪════
    Q → │                             │
        │         Return Manifold     │
        └─────────────────────────────┘

Total piping length equal for all branches → Equal flow
```

### 5.3 Header Sizing Calculation

**Example: 4-Branch Distribution**

Given:
- Total flow: 100 GPM
- 4 equal branches @ 25 GPM each
- Branch pipes: 1.5"

**Method 1: Constant Diameter**
```
Use 3" header (carries 100 GPM)
Velocity: 5.6 ft/s at inlet, 0 at end
Flow variation: ±15% (poor)
```

**Method 2: Stepped Diameter**
```
Section 1 (100 GPM): 3" → V = 5.6 ft/s
Section 2 (75 GPM): 2.5" → V = 5.5 ft/s
Section 3 (50 GPM): 2" → V = 5.2 ft/s
Section 4 (25 GPM): 1.5" → V = 5.0 ft/s

Flow variation: ±5% (excellent)
Material cost: +15%
Labor cost: +30%
```

**Method 3: Orifice Balancing**
```
Use 3" header with orifice plates:
Branch 1: 0.25" orifice
Branch 2: 0.30" orifice
Branch 3: 0.35" orifice
Branch 4: No orifice (full 1.5")

Flow variation: ±3% (excellent)
Additional cost: ~$100
Head loss: +2 ft
```

---

## 6. Gravity Drainage Systems

### 6.1 Drain Sizing

**Never use pump discharge size for drains!**

```
Gravity drains flow ~50% full for air circulation

Minimum drain slope: 1/4" per foot (2%)
Recommended slope: 1/2" per foot (4%)

Drain capacity (flowing 50% full):
```

| Pipe Size | Capacity @ 1/4" slope | Capacity @ 1/2" slope |
|-----------|----------------------|----------------------|
| 1.5" | 15 GPM | 21 GPM |
| 2" | 30 GPM | 42 GPM |
| 3" | 90 GPM | 127 GPM |
| 4" | 180 GPM | 254 GPM |

**Safety Factor:**
```
Drain Size = 1.5 × Flow Rate / Capacity

Example: 100 GPM flow
From table, 3" @ 1/2" slope = 127 GPM
Safety factor: 127/100 = 1.27 (inadequate)

Use 4" drain (254 GPM capacity)
Safety factor: 254/100 = 2.54 ✓
```

### 6.2 Standpipe Design

**Bell Siphon Alternative:**
```
Simple Standpipe:

    ┌─────────────────┐
    │    Grow Bed     │ Water Level
    │~~~~~~~~~~~~~~~~~│←── Set by standpipe height
    │     Media       │
    │        │        │
    │        │ ┌───┐  │
    └────────┴─┤ │ └──┘
               │ │ Standpipe (2")
               │ │
               └─┴─ Drain (3")

Standpipe height = Desired water depth - 1"
Standpipe diameter = 50% of drain size minimum
Screen standpipe to prevent media entry
```

---

## 7. System Redundancy

### 7.1 Pump Backup Strategies

**Option 1: Dual Pumps (50% Each)**
```
Advantages:
- Either pump can maintain minimum flow
- Easy to service (isolate one pump)
- Load sharing extends pump life

Disadvantages:
- Higher initial cost
- Requires manifold and valves
- Two pumps to maintain
```

**Option 2: Primary + Backup (100% Each)**
```
Advantages:
- Full capacity backup
- Simple plumbing
- Automatic switchover possible

Disadvantages:
- Backup sits idle (may seize)
- Double the pump cost
- Requires alarm system
```

**Option 3: Emergency Backup (Air Pump)**
```
For DO maintenance during power outage:
Air Pump = Fish Weight (kg) × 10 L/min/kg
Battery capacity = Air Pump Watts × Hours × 1.3

Example: 500 kg fish, 8-hour backup
Air pump: 500 × 10 = 5000 L/min (distributed)
Use (5) 1000 L/min pumps @ 50W each = 250W
Battery: 250W × 8h × 1.3 = 2600 Wh
Use (2) 12V 125Ah batteries
```

### 7.2 Emergency Protocols

**Power Failure Response:**
```
Hour 0: Power fails
  - Battery backup activates aeration
  - Feeding stops automatically

Hour 1-4:
  - Monitor DO (must stay >4 ppm)
  - Minimize fish activity

Hour 4-8:
  - Consider emergency water exchange
  - Portable generator if available

Hour 8+:
  - Begin emergency harvest if DO <3 ppm
```

---

## Summary

Hydraulic design is a systematic process:

1. **Calculate TDH**: Static head + friction loss + minor losses + pressure head
2. **Generate System Curve**: Plot TDH vs. flow rate
3. **Select Pump**: Match pump curve to system curve at 80-90% BEP
4. **Size Pipes**: Balance velocity, friction loss, and economics
5. **Design Manifolds**: Ensure uniform distribution across outlets
6. **Size Drains**: Use gravity drain tables with safety factors
7. **Plan Redundancy**: Design backup systems for critical components

Professional hydraulic documentation includes:
- Complete TDH calculations
- System curve and pump curve overlay
- Pipe sizing table with velocities
- Manifold hydraulic analysis
- Drainage capacity calculations
- Single-line hydraulic diagram

---

## Check Your Understanding

1. A system has 12 ft static head, 50 ft of 2" pipe carrying 60 GPM (PVC C=150), 4 × 90° elbows, 2 × ball valves, and requires 8 psi discharge pressure. Calculate total TDH.

2. Generate a system curve (0, 50, 100, 150 GPM) for a system with 6 ft static head and K = 0.0015.

3. A pump curve shows: 80 GPM @ 35 ft @ 72% efficiency. Your system curve intersects at 80 GPM @ 33 ft. Will this pump work efficiently?

4. Size a pipe for 175 GPM targeting 5-6 ft/s velocity. Calculate actual velocity for your selected size.

5. Design a 4-branch manifold for 100 GPM (25 GPM per branch). Specify header pipe size(s) using the stepped diameter method.

6. What drain size is needed for 150 GPM at 1/2" per foot slope? Include safety factor.

7. Calculate NPSH available for a pump located 3 ft above water level with 6 ft of 3" suction pipe carrying 100 GPM.

8. A 5000-gallon system requires 1.5 turnovers per hour. Specify pump flow rate and recommend two suitable commercial pumps.

9. Design an emergency aeration system for 300 kg of fish requiring 8 hours of backup. Specify air pump capacity and battery bank.

10. Create a simple hydraulic diagram showing primary and backup pumps with isolation valves and check valves.

---

**Next Module:** Module 3 - Tank & Vessel Design

*"In theory, there is no difference between theory and practice. In practice, there is."* - Yogi Berra (applies to hydraulics!)
