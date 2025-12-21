# Hydraulic Formulas Cheatsheet

**Course 301: Advanced System Design & Engineering**

---

## Flow and Velocity

### Continuity Equation
```
Q = A × V

Where:
Q = Flow rate
A = Cross-sectional area
V = Velocity

Units:
Imperial: Q [GPM], A [in²], V [ft/s]
  Q [GPM] = (A [in²] × V [ft/s]) / 0.321

SI: Q [m³/s], A [m²], V [m/s]
```

### Velocity Calculation
```
V = Q / A

Recommended Velocities:
- Pump suction: 2-5 ft/s
- Pump discharge: 4-8 ft/s
- Gravity drain: 2-4 ft/s
- Distribution header: 3-6 ft/s
```

### Pipe Areas (Common Sizes)

| Nominal Size | ID (inches) | Area (in²) | Area (ft²) |
|--------------|-------------|------------|------------|
| 3/4" | 0.824 | 0.53 | 0.0037 |
| 1" | 1.049 | 0.86 | 0.0060 |
| 1.5" | 1.610 | 2.04 | 0.0142 |
| 2" | 2.067 | 3.36 | 0.0233 |
| 3" | 3.068 | 7.39 | 0.0513 |
| 4" | 4.026 | 12.73 | 0.0884 |
| 6" | 6.065 | 28.89 | 0.2007 |

---

## Pressure and Head

### Pressure-Head Conversion
```
P [psi] = H [ft] × 0.433
H [ft] = P [psi] × 2.31

P [kPa] = H [m] × 9.81
H [m] = P [kPa] × 0.102
```

### Total Dynamic Head (TDH)
```
TDH = Hₛ + Hf + Hₘ + Hₚ

Where:
Hₛ = Static head (elevation change)
Hf = Friction head loss
Hₘ = Minor losses (fittings)
Hₚ = Pressure head
```

---

## Friction Loss

### Hazen-Williams Equation
```
hf = 10.67 × L × Q^1.852 / (C^1.852 × D^4.87)

Where:
hf = Head loss per 100 ft of pipe [ft]
L = Length in units of 100 ft
Q = Flow rate [GPM]
C = Roughness coefficient (dimensionless)
D = Inside diameter [inches]

C Values:
- PVC, CPVC: 150
- HDPE: 140-150
- New steel: 130
- 10-year steel: 100
```

### Darcy-Weisbach Equation
```
hf = f × (L/D) × (V²/2g)

Where:
f = Friction factor (from Moody diagram)
L = Pipe length [ft or m]
D = Diameter [ft or m]
V = Velocity [ft/s or m/s]
g = 32.2 ft/s² or 9.81 m/s²
```

---

## Minor Losses

### K-Value Method
```
h = K × V² / (2g)

Where:
K = Loss coefficient (dimensionless)
V = Velocity [ft/s]
g = 32.2 ft/s²
```

### Standard K-Values

| Fitting | K Value |
|---------|---------|
| 90° elbow (standard radius) | 0.9 |
| 90° elbow (long radius) | 0.6 |
| 45° elbow | 0.4 |
| Tee (flow through run) | 0.6 |
| Tee (flow through branch) | 1.8 |
| Ball valve (fully open) | 0.05 |
| Gate valve (fully open) | 0.15 |
| Check valve (swing) | 2.0 |
| Check valve (spring loaded) | 3.5 |
| Sudden enlargement | (1 - A₁/A₂)² |
| Sudden contraction | 0.5(1 - A₂/A₁) |
| Pipe entrance (sharp) | 0.5 |
| Pipe entrance (rounded) | 0.05 |
| Pipe exit | 1.0 |

---

## Pump Calculations

### Hydraulic Power
```
P = ρ × g × Q × H

Imperial:
P [HP] = (Q [GPM] × H [ft]) / 3,960

SI:
P [kW] = (ρ [kg/m³] × 9.81 × Q [m³/s] × H [m]) / 1000

Typical: ρ = 1000 kg/m³ for water
```

### Brake Horsepower (Actual Motor Power)
```
BHP = Hydraulic Power / Pump Efficiency

Typical pump efficiencies:
- Small pumps (<1 HP): 40-60%
- Medium pumps (1-5 HP): 60-75%
- Large pumps (>5 HP): 70-85%
```

### Net Positive Suction Head (NPSH)
```
NPSHₐ = Hₐₜₘ + Hₛ - Hf - Hvp

Where:
Hₐₜₘ = Atmospheric pressure head (34 ft at sea level)
Hₛ = Static head on suction (+ if above, - if below pump)
Hf = Friction loss on suction side
Hvp = Vapor pressure head (~0.8 ft at 20°C)

Requirement: NPSHₐ > NPSHᵣ + 3 ft safety margin
```

---

## Gravity Drainage

### Manning's Equation
```
V = (K/n) × R^(2/3) × S^(1/2)

Where:
V = Velocity [ft/s]
K = 1.486 (English) or 1.0 (SI)
n = Manning's roughness (0.010 for PVC)
R = Hydraulic radius = A/P [ft]
S = Slope [ft/ft]

For circular pipe flowing half full:
Q [GPM] = 21 × D^(8/3) × S^(1/2)
Where D = diameter [inches], S = slope [ft/ft]
```

### Drain Capacity (50% Full)

| Pipe Size | 1/4" slope | 1/2" slope | 1" slope |
|-----------|------------|------------|----------|
| 2" | 30 GPM | 42 GPM | 60 GPM |
| 3" | 90 GPM | 127 GPM | 180 GPM |
| 4" | 180 GPM | 254 GPM | 360 GPM |
| 6" | 540 GPM | 763 GPM | 1,080 GPM |

**Always include 2× safety factor for drains**

---

## Unit Conversions

### Flow Rate
```
1 GPM = 0.0631 L/s
1 GPM = 3.785 L/min
1 GPM = 0.00223 ft³/s
1 CFM = 0.472 L/s
1 m³/h = 4.403 GPM
```

### Pressure
```
1 psi = 6.895 kPa
1 psi = 2.31 ft H₂O
1 bar = 14.5 psi
1 kPa = 0.145 psi
```

### Power
```
1 HP = 0.746 kW
1 HP = 33,000 ft·lb/min
1 kW = 1.34 HP
```

### Volume
```
1 gallon = 3.785 L
1 ft³ = 7.48 gallons
1 m³ = 264.2 gallons
1 m³ = 1,000 L
```

---

## Quick Reference: Common Calculations

### Pipe Sizing for Target Velocity
```
Step 1: Calculate required area
A [in²] = Q [GPM] / (V [ft/s] × 0.321)

Step 2: Calculate required diameter
D [inches] = √(4A/π)

Step 3: Select next standard pipe size
```

### Pump Selection Procedure
```
1. Calculate system flow rate (Q)
2. Calculate TDH (static + friction + fittings + pressure)
3. Plot system curve: TDH vs. Q
4. Select pump where curve intersects at 80-90% BEP
5. Verify NPSH available > NPSH required + 3 ft
6. Calculate motor HP = Hydraulic HP / efficiency
7. Select next standard motor size
```

### System Curve Generation
```
TDH = Hₛ + K × Q²

Where K = (Hf + Hₘ) / Q² at design flow

Plot for Q = 0, 0.5Q, Q, 1.5Q, 2Q
```

---

## Troubleshooting

### Low Flow Issues
- Check for: Clogged filters, closed valves, air in lines
- Verify: Pump rotation direction correct
- Measure: Actual vs. design pressures
- Calculate: Actual TDH may exceed pump capability

### High Power Consumption
- Check: Operating point on pump curve (far right = overloaded)
- Verify: No recirculation through bypass
- Inspect: Impeller wear or damage
- Confirm: Correct voltage and phase

### Cavitation (Noisy Pump)
- Calculate: NPSHₐ vs. NPSHᵣ
- Check: Suction line for air leaks
- Reduce: Suction line velocity and length
- Raise: Sump level or lower pump

---

## Design Guidelines

### Recommended Practices
- Pipe velocity: 4-6 ft/s for efficiency and low noise
- Safety factor: 1.25-1.50 for pumps (allow for future expansion)
- Drain sizing: 2× minimum capacity
- NPSH margin: 3 ft minimum above required
- Service factor: Use 1.15 motors for reliability

### Common Mistakes to Avoid
- ❌ Using pump discharge size for drains (drains need larger!)
- ❌ Forgetting to include fittings in TDH
- ❌ Operating pump at far left or right of curve
- ❌ Insufficient NPSH (causes cavitation)
- ❌ Ignoring temperature effects on viscosity/pressure

---

**Remember:** Always show units in calculations and verify dimensional consistency!

*This cheatsheet covers Course 301 hydraulic design fundamentals. Refer to course modules for detailed derivations and examples.*
