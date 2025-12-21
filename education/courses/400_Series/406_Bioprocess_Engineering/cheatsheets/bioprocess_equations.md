# Bioprocess Engineering Equations - Quick Reference

## Microbial Growth Kinetics

### Specific Growth Rate
```
μ = (1/X) × (dX/dt)  [h⁻¹]

Exponential growth:
X(t) = X₀ × e^(μt)

Doubling time:
td = ln(2)/μ = 0.693/μ
```

### Monod Equation
```
μ = μmax × (S/(Ks + S))

Where:
μmax = maximum specific growth rate [h⁻¹]
S = substrate concentration [g/L]
Ks = half-saturation constant [g/L]
```

### Dual Substrate Limitation
```
μ = μmax × (S₁/(Ks1 + S₁)) × (S₂/(Ks2 + S₂))

Common for nitrification (NH₃ and O₂)
```

### Substrate Utilization
```
qs = (1/X) × (dS/dt) = -μ/YX/S - ms

YX/S = ΔX/ΔS  [g cells/g substrate]
ms = maintenance coefficient [g substrate/g cells/h]
```

### Product Formation (Luedeking-Piret)
```
qp = α × μ + β

α = growth-associated coefficient
β = non-growth-associated coefficient
```

### Temperature Effects
```
μ(T) = μ(20°C) × θ^(T-20)

θ = temperature coefficient (typically 1.05-1.12 for bioprocesses)

Arrhenius:
μ(T) = A × e^(-Ea/RT)
```

## Reactor Design

### Batch Reactor
```
Biomass:
dX/dt = μ × X

Substrate:
dS/dt = -(μ/YX/S + ms) × X

Integration time:
t = (1/μmax) × ln(Xf/X₀)
```

### Continuous Stirred Tank Reactor (CSTR)
```
At steady state:
μ = D

D = F/V  [dilution rate, h⁻¹]

Substrate:
S = (Ks × D)/(μmax - D)

Biomass:
X = YX/S × (S₀ - S)

Critical dilution rate (washout):
Dmax = μmax × S₀/(Ks + S₀)
```

### Fed-Batch (Exponential Feeding)
```
F(t) = (μ/YX/S) × X₀ × e^(μt) × V₀/(S₀ - S)

Maintains constant μ throughout fermentation
```

## Mass Transfer

### Oxygen Transfer
```
OTR = KLa × (C* - CL)

OUR = qO₂ × X = (μ/YX/O + mO) × X

At steady state: OTR = OUR

KLa correlation:
KLa ∝ (P/V)^α × (vs)^β

α = 0.4-0.7, β = 0.3-0.5
```

### Henry's Law
```
C* = H × pO₂

At 20°C, 1 atm, air: C* = 9.0 mg/L O₂
At 20°C, 1 atm, pure O₂: C* = 43 mg/L O₂
```

### Air Flow Calculation
```
Qair = (OUR × V)/(YO₂ × ρO₂)

YO₂ = oxygen transfer efficiency (5-15%)
ρO₂ = 0.28 kg O₂/m³ air at STP
```

## Mixing and Power

### Power Number
```
Np = P/(ρ × N³ × D⁵)

P = power [W]
ρ = density [kg/m³]
N = impeller speed [rev/s]
D = impeller diameter [m]

Typical Np:
- Rushton turbine: 5-6
- Pitched blade: 1.5-2.5
```

### Mixing Time
```
θm = k × (V/(N × D³))^(1/3)

k = constant (5-10, geometry dependent)
```

### Reynolds Number
```
Re = (ρ × N × D²)/μ

Re > 10,000 = Turbulent (typical)
Re < 2,100 = Laminar
```

## Heat Transfer
```
Q = U × A × ΔTlm

ΔTlm = (ΔT₁ - ΔT₂)/ln(ΔT₁/ΔT₂)

Metabolic heat:
Qmet ≈ μ × X × V × (-ΔHcombustion)
ΔHcombustion ≈ 18-20 kJ/g cells

Typical U values [W/m²·K]:
- Jacket: 150-300
- Internal coils: 300-600
- External HX: 800-1500
```

## Nitrification

### Stoichiometry
```
Overall: NH₃ + 2 O₂ → NO₃⁻ + H⁺ + H₂O

Oxygen demand: 4.57 g O₂/g NH₄⁺-N
Alkalinity consumption: 7.14 g CaCO₃/g NH₄⁺-N
```

### Surface Loading Design
```
A = (Q × ΔN)/(k × Navg)

k = removal rate constant (0.1-0.5 m/day at 20-25°C)
A = biofilter surface area [m²]
Q = flow rate [m³/day]
ΔN = nitrogen removal [g N/m³]
```

### Free Ammonia
```
NH₃ (%) = 100/(1 + 10^(pKa - pH))

pKa = 9.25 at 25°C

NH₃ becomes inhibitory at >10-50 mg/L
```

## Denitrification

### Stoichiometry (Methanol)
```
5 CH₃OH + 6 NO₃⁻ → 3 N₂ + 5 CO₂ + 7 H₂O + 6 OH⁻

COD:N ratio = 2.86:1 (stoichiometric)
Practical: 3.5-4.0:1
```

### Methanol Dosing
```
CH₃OH (mg/L) = 2.47 × NO₃⁻-N + 1.53 × NO₂⁻-N + 0.87 × DO

Add 10-20% safety factor
```

## Anaerobic Digestion

### Biogas Production
```
Theoretical (Buswell):
CₙHₐOᵦNᵧ + (n-a/4-b/2+3y/4)H₂O →
  (n/2+a/8-b/4-3y/8)CH₄ + (n/2-a/8+b/4+3y/8)CO₂ + yNH₃

Practical BMP:
- Carbohydrates: 370-415 mL CH₄/g VS
- Proteins: 496-700 mL CH₄/g VS
- Lipids: 1014-1250 mL CH₄/g VS
- Food/plant waste: 200-550 mL CH₄/g VS
```

### Digester Sizing
```
OLR = (Qfeed × VS)/Vdigester  [kg VS/m³/day]

Typical: 2-4 kg VS/m³/day (mesophilic)

HRT = Vdigester/Qfeed  [days]

Typical: 15-30 days
```

### Energy Content
```
Biogas (60% CH₄): 21-25 MJ/m³
Pure CH₄: 39.8 MJ/m³ = 9.97 kWh/m³
```

## Composting

### C:N Ratio Blending
```
C:N_mix = (C:N₁ × W₁ + C:N₂ × W₂)/(W₁ + W₂)

Optimal C:N = 25-30:1
```

### Moisture Adjustment
```
Water needed (kg) = Mass × [(MCᵗᵃʳᵍᵉᵗ - MCᶜᵘʳʳᵉⁿᵗ)/(100 - MCᵗᵃʳᵍᵉᵗ)]

Optimal MC = 50-60%
```

### Oxygen Requirement
```
~1-2 kg O₂/kg VS degraded

Qair = (OUR × V)/(0.21 × ρO₂)

Typical: 0.1-0.5 m³ air/m³ compost/min
```

## Algae Cultivation

### Light Penetration (Beer-Lambert)
```
I(z) = I₀ × e^(-k × X × z)

k = extinction coefficient (0.02-0.10 m²/g)
Limits practical depth at high cell density
```

### CO₂ Requirement
```
~1.8 kg CO₂/kg algae biomass

Photosynthesis:
6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂
```

### Productivity
```
Areal: g/m²/day
Volumetric: g/L/day

Photosynthetic efficiency = (Energy in biomass/Light energy) × 100%
Practical: 3-8%
```

## Scale-up

### Geometric Scaling
```
(D₂/D₁) = (V₂/V₁)^(1/3)

For constant P/V:
N₂ = N₁ × (V₁/V₂)^(2/9)

For constant tip speed:
N₂ = N₁ × (D₁/D₂)
```

### Cost Estimation
```
Cost₂ = Cost₁ × (Size₂/Size₁)^n

n ≈ 0.6-0.7 (economy of scale)

TCI ≈ 3-4 × Purchased Equipment Cost
```

## Economics

### NPV
```
NPV = Σ[CFₜ/(1+r)ᵗ] - Initial Investment

r = discount rate (8-15% typical)
```

### IRR
```
Solve for r where NPV = 0
```

### Payback Period
```
Payback = Initial Investment/Annual Cash Flow
```

---

## Useful Constants

- Gas constant R = 8.314 J/mol·K
- Gravity g = 9.81 m/s²
- Water density ≈ 1000 kg/m³
- O₂ density in air = 0.28 kg/m³ (STP)
- Energy: 1 kWh = 3.6 MJ
- Pressure: 1 bar = 100 kPa = 14.5 psi

---

**Note:** Use consistent units throughout calculations. Convert as needed.
