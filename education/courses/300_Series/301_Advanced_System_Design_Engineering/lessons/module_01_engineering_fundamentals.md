# Module 1: Engineering Fundamentals Review

## Introduction

Welcome to Course 301: Advanced System Design & Engineering. This foundational module reviews essential engineering principles that underpin aquaponic and hydroponic system design. We'll cover fluid mechanics, thermodynamics, mass transfer, and electrical fundamentals—all critical for advanced system engineering.

As a systems engineer, you must integrate multiple engineering disciplines: hydraulic, structural, electrical, mechanical, and environmental. This module establishes the theoretical framework for the practical design work ahead.

**Duration:** 1 hour

---

## Learning Objectives

By the end of this module, you will be able to:

1. Apply fundamental fluid mechanics principles to aquaponic systems
2. Calculate energy requirements using thermodynamic principles
3. Understand mass transfer in biological and physical systems
4. Apply electrical engineering basics to system design
5. Use engineering units and dimensional analysis correctly
6. Interpret engineering drawings and symbols

---

## 1. Fluid Mechanics Fundamentals

### 1.1 Properties of Water

**Key Properties at 20°C:**

| Property | Value | Units |
|----------|-------|-------|
| Density (ρ) | 998.2 | kg/m³ |
| Kinematic Viscosity (ν) | 1.004 × 10⁻⁶ | m²/s |
| Dynamic Viscosity (μ) | 1.002 × 10⁻³ | Pa·s |
| Surface Tension (σ) | 0.0728 | N/m |
| Vapor Pressure | 2.34 | kPa |

**Temperature Effects:**
- Density decreases with temperature (≈0.2 kg/m³ per °C)
- Viscosity decreases with temperature (affects pump performance)
- Dissolved oxygen capacity decreases with temperature

### 1.2 Continuity Equation

The continuity equation expresses conservation of mass in fluid systems:

```
Q = A₁V₁ = A₂V₂

Where:
Q  = Volumetric flow rate (m³/s or GPM)
A  = Cross-sectional area (m² or in²)
V  = Velocity (m/s or ft/s)
```

**Example:**
```
Given: 2" pipe (ID = 2.067"), flow = 50 GPM
Find: Velocity

A = π × (2.067/2)² = 3.355 in²
V = Q/A = (50 GPM × 231 in³/gal) / (3.355 in² × 60 s/min)
V = 57.5 in/s = 4.8 ft/s
```

### 1.3 Bernoulli's Equation

Energy conservation in flowing fluids:

```
P₁/ρg + V₁²/2g + z₁ = P₂/ρg + V₂²/2g + z₂ + hₗ

Where:
P  = Pressure (Pa or psi)
ρ  = Density (kg/m³)
g  = Gravitational acceleration (9.81 m/s²)
V  = Velocity (m/s)
z  = Elevation (m)
hₗ = Head loss (m)
```

### 1.4 Reynolds Number

Determines flow regime (laminar vs. turbulent):

```
Re = ρVD/μ = VD/ν

Where:
Re = Reynolds number (dimensionless)
ρ  = Density (kg/m³)
V  = Velocity (m/s)
D  = Pipe diameter (m)
μ  = Dynamic viscosity (Pa·s)
ν  = Kinematic viscosity (m²/s)

Flow Regimes:
Re < 2,000:  Laminar flow
2,000 < Re < 4,000: Transition
Re > 4,000:  Turbulent flow
```

### 1.5 Head Loss Calculations

**Darcy-Weisbach Equation:**
```
hₗ = f × (L/D) × (V²/2g)

Where:
hₗ = Head loss (m or ft)
f  = Friction factor (dimensionless)
L  = Pipe length (m or ft)
D  = Pipe diameter (m or ft)
V  = Velocity (m/s or ft/s)
g  = 9.81 m/s² or 32.2 ft/s²
```

**Hazen-Williams Equation (Common for Water):**
```
hₗ = 10.67 × L × Q^1.852 / (C^1.852 × D^4.87)

Where:
hₗ = Head loss (ft per 100 ft pipe)
L  = Length (ft)
Q  = Flow rate (GPM)
C  = Roughness coefficient (140 for PVC, 100 for old steel)
D  = Diameter (inches)
```

---

## 2. Thermodynamics

### 2.1 First Law of Thermodynamics

Energy balance for system analysis:

```
ΔE = Q - W

Where:
ΔE = Change in system energy
Q  = Heat added to system
W  = Work done by system
```

### 2.2 Heat Transfer

**Conduction:**
```
Q = k × A × ΔT / Δx

Where:
Q  = Heat transfer rate (W)
k  = Thermal conductivity (W/m·K)
A  = Area (m²)
ΔT = Temperature difference (K)
Δx = Thickness (m)
```

**Convection:**
```
Q = h × A × ΔT

Where:
h = Convective heat transfer coefficient (W/m²·K)
```

**Insulation R-Values:**

| Material | R-Value (ft²·°F·h/BTU) |
|----------|------------------------|
| Polystyrene (1") | 5.0 |
| Polyurethane (1") | 6.5 |
| Fiberglass (1") | 3.5 |
| Air gap (1") | 1.0 |

### 2.3 Humidity and Psychrometrics

**Relative Humidity:**
```
RH = (Pᵥ / Pᵥₛ) × 100%

Where:
RH  = Relative humidity (%)
Pᵥ  = Partial pressure of water vapor (kPa)
Pᵥₛ = Saturation pressure at temperature (kPa)
```

**Vapor Pressure Deficit (VPD):**
```
VPD = Pᵥₛ - Pᵥ

Optimal VPD ranges:
Seedlings: 0.4-0.8 kPa
Vegetative: 0.8-1.2 kPa
Flowering: 1.0-1.5 kPa
```

---

## 3. Mass Transfer

### 3.1 Fick's Law of Diffusion

```
J = -D × (dC/dx)

Where:
J  = Diffusive flux (mol/m²·s)
D  = Diffusion coefficient (m²/s)
dC/dx = Concentration gradient (mol/m⁴)
```

### 3.2 Oxygen Transfer

**Oxygen Transfer Rate (OTR):**
```
OTR = KₗA × (Cₛ - C)

Where:
KₗA = Volumetric mass transfer coefficient (h⁻¹)
Cₛ  = Saturation concentration (mg/L)
C   = Actual concentration (mg/L)
```

**Standard Oxygen Transfer Rate (SOTR):**
```
SOTR = KₗA₂₀ × Cₛ₂₀ × V

Where:
KₗA₂₀ = Transfer coefficient at 20°C
Cₛ₂₀  = Saturation at 20°C (9.1 mg/L at sea level)
V     = Volume (m³)
```

### 3.3 Temperature Correction

```
KₗAₜ = KₗA₂₀ × θ^(T-20)

Where:
θ = Temperature coefficient (typically 1.024)
T = Actual temperature (°C)
```

---

## 4. Electrical Fundamentals

### 4.1 Ohm's Law

```
V = I × R
P = V × I = I²R = V²/R

Where:
V = Voltage (volts)
I = Current (amperes)
R = Resistance (ohms)
P = Power (watts)
```

### 4.2 AC Power

**Single Phase:**
```
P = V × I × PF

Where:
PF = Power factor (typically 0.7-0.9 for motors)
```

**Three Phase:**
```
P = √3 × V × I × PF
```

### 4.3 Wire Sizing

**Voltage Drop:**
```
Vdrop = 2 × I × L × R / 1000

Where:
I = Current (A)
L = One-way length (ft)
R = Resistance (Ω/1000 ft)

Maximum voltage drop: 3% for branch circuits
```

**Current Carrying Capacity:**

| Wire Gauge | 75°C Rating | 90°C Rating |
|------------|-------------|-------------|
| 14 AWG | 20 A | 25 A |
| 12 AWG | 25 A | 30 A |
| 10 AWG | 35 A | 40 A |
| 8 AWG | 50 A | 55 A |
| 6 AWG | 65 A | 75 A |

---

## 5. Dimensional Analysis

### 5.1 Unit Conversion Factors

**Flow Rate:**
```
1 GPM = 0.0631 L/s
1 GPM = 3.785 L/min
1 CFM = 0.472 L/s
1 m³/h = 4.403 GPM
```

**Pressure:**
```
1 psi = 6.895 kPa
1 psi = 2.31 ft H₂O
1 bar = 14.5 psi
1 kPa = 0.145 psi
```

**Power:**
```
1 HP = 0.746 kW
1 HP = 33,000 ft·lb/min
1 kW = 1.34 HP
```

**Volume:**
```
1 gallon = 3.785 L
1 ft³ = 7.48 gallons
1 m³ = 264.2 gallons
```

### 5.2 Dimensional Consistency

Always verify dimensional homogeneity:

```
Example: Pump Power
P = ρ × g × Q × H / η

Check dimensions:
[P] = [kg/m³] × [m/s²] × [m³/s] × [m] / [dimensionless]
    = kg·m²/s³ = Watts ✓
```

---

## 6. Engineering Documentation

### 6.1 Drawing Types

**P&ID (Process & Instrumentation Diagram):**
- Shows process flow and instrumentation
- Uses standard ISA symbols
- Includes control loops and interlocks

**Schematic Diagram:**
```
Simple System Schematic:

┌─────────┐      ┌──────────┐      ┌──────────┐
│  Fish   │─────>│ Biofilter│─────>│   Grow   │
│  Tank   │      │          │      │   Bed    │
└─────────┘      └──────────┘      └──────────┘
     ↑                                    │
     │           ┌──────────┐             │
     └───────────│  Sump    │<────────────┘
                 │  + Pump  │
                 └──────────┘
```

**Isometric Drawing:**
- 3D representation on 2D plane
- Shows piping layout and elevation changes
- Uses 30° angles for depth

### 6.2 Standard Symbols

**Piping:**
```
─────────  Pipe
─────●───  Reducer
────┤├───  Valve
────><───  Check valve
────()───  Pump
```

**Instrumentation:**
```
(TI)  Temperature Indicator
(PI)  Pressure Indicator
(FI)  Flow Indicator
(LI)  Level Indicator
(AIT) Analytical Indicator/Transmitter
```

---

## 7. Engineering Problem-Solving Method

### Step 1: Define the Problem
- What is known?
- What is unknown?
- What are the constraints?

### Step 2: Diagram the System
- Sketch the system
- Identify control volumes
- Label known/unknown values

### Step 3: List Applicable Principles
- Continuity equation?
- Energy balance?
- Mass balance?

### Step 4: Solve Mathematically
- Set up equations
- Solve for unknowns
- Check dimensional consistency

### Step 5: Verify Results
- Do values make physical sense?
- Are units correct?
- Compare to typical values

---

## Practical Example: Complete System Analysis

**Problem:** Size a pump for a recirculating aquaponic system.

**Given:**
- Flow rate: 100 GPM
- Static lift: 6 ft
- Pipe: 3" Schedule 40 PVC, 50 ft total length
- Fittings: 4 × 90° elbows, 2 × ball valves
- Operating pressure: 5 psi at discharge

**Solution:**

**Step 1: Calculate velocity**
```
Pipe ID = 3.068"
A = π × (3.068/2)² = 7.39 in²
V = Q/A = (100 × 231)/(7.39 × 60) = 52.1 in/s = 4.34 ft/s ✓
(Within recommended 5-6 ft/s range)
```

**Step 2: Calculate friction loss**
```
Using Hazen-Williams (C = 140 for PVC):
hf = 10.67 × 50 × 100^1.852 / (140^1.852 × 3.068^4.87)
hf = 1.8 ft per 100 ft × 0.5 = 0.9 ft
```

**Step 3: Calculate fitting losses**
```
K-values:
90° elbow: K = 0.9 (4 elbows = 3.6)
Ball valve: K = 0.05 (2 valves = 0.1)
Total K = 3.7

hfittings = K × V²/(2g) = 3.7 × (4.34)²/(2 × 32.2) = 1.08 ft
```

**Step 4: Calculate Total Dynamic Head**
```
TDH = Static Head + Friction Loss + Fitting Loss + Pressure Head
TDH = 6 + 0.9 + 1.08 + (5 × 2.31)
TDH = 6 + 0.9 + 1.08 + 11.55 = 19.5 ft
```

**Step 5: Calculate hydraulic power**
```
P = ρ × g × Q × H
P = (998.2 kg/m³) × (9.81 m/s²) × (6.31 L/s × 10⁻³) × (5.94 m)
P = 367 W = 0.49 HP

With pump efficiency of 70%:
Motor HP = 0.49 / 0.70 = 0.70 HP

Select: 1 HP pump (next standard size)
```

---

## Summary

This module reviewed fundamental engineering principles essential for aquaponic system design:

1. **Fluid Mechanics**: Continuity, Bernoulli's equation, Reynolds number, and head loss calculations form the basis of hydraulic design.

2. **Thermodynamics**: Heat transfer and psychrometric principles govern environmental control system design.

3. **Mass Transfer**: Oxygen transfer and diffusion principles are critical for biological system support.

4. **Electrical Engineering**: Ohm's law and power calculations enable proper electrical system design.

5. **Dimensional Analysis**: Consistent units and proper conversions prevent design errors.

6. **Engineering Documentation**: Standard symbols and drawing types communicate design intent.

These fundamentals will be applied throughout the course as we design increasingly complex systems. Engineering is both an art and a science—rigorous calculation combined with practical judgment.

---

## Check Your Understanding

1. Calculate the velocity in a 2" pipe carrying 40 GPM. Is this within recommended limits?

2. A system requires lifting water 8 feet with 3 feet of friction losses. If the pump is 65% efficient and you need 75 GPM, what motor horsepower is required?

3. What is the Reynolds number for water at 20°C flowing at 5 ft/s in a 4" pipe? What flow regime is this?

4. A greenhouse has 1000 m² of growing area. If the VPD is 0.6 kPa and plants transpire 2 L/m²/day, how much water vapor is released per hour?

5. You need to heat 500 gallons of water from 15°C to 22°C in 2 hours. What heater wattage is required (assuming 90% efficiency)?

6. Convert these values:
   - 150 GPM to L/s
   - 25 psi to kPa
   - 3 HP to kW
   - 1000 gallons to m³

7. A 3 HP motor runs 8 hours per day. At $0.12/kWh, what is the monthly electricity cost?

8. Using the oxygen transfer equation, calculate the OTR if KₗA = 5 h⁻¹, Cₛ = 9.1 mg/L, and C = 6.0 mg/L in a 1000 L tank.

9. What wire gauge is needed for a 30 A circuit with a 75 ft run to stay under 3% voltage drop at 240V?

10. Sketch a simple aquaponic system P&ID showing a fish tank, biofilter, grow bed, sump, and pump with appropriate symbols.

---

**Next Module:** Module 2 - Hydraulic System Design

*Engineering is the art of modeling materials we do not wholly understand, into shapes we cannot precisely analyze, to resist forces we cannot properly assess, in such a way that the public has no reason to suspect the extent of our ignorance.* - Dr. A.R. Dykes
