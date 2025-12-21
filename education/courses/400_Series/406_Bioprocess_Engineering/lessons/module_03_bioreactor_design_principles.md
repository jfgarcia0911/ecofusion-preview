# Module 3: Bioreactor Design Principles

## Learning Objectives

By the end of this module, you will be able to:
- Select appropriate bioreactor configurations for specific applications
- Calculate oxygen transfer rates and design aeration systems
- Analyze mixing requirements and power consumption
- Design heat transfer systems for temperature control
- Scale bioreactors from laboratory to commercial operation
- Evaluate mass transfer limitations and optimization strategies

## 3.1 Bioreactor Types and Selection

### Classification of Bioreactors

```
BIOREACTOR TYPES FOR CEA APPLICATIONS

├── Suspended Cell Reactors
│   ├── Stirred Tank Reactor (STR)
│   ├── Bubble Column
│   ├── Airlift Reactor
│   └── Membrane Bioreactor (MBR)
│
├── Attached Growth Reactors
│   ├── Trickling Filter
│   ├── Rotating Biological Contactor (RBC)
│   ├── Moving Bed Biofilm Reactor (MBBR)
│   └── Fixed Bed Reactor
│
├── Hybrid Systems
│   ├── Integrated Fixed-Film Activated Sludge (IFAS)
│   └── Sequencing Batch Reactor (SBR)
│
└── Specialized Reactors
    ├── Photobioreactor (PBR)
    ├── Membrane Aerated Biofilm Reactor (MABR)
    └── Electrochemical Bioreactor
```

### Stirred Tank Reactor (STR)

**Configuration:**

```
         Gas Out
            ↑
    ┌───────┼───────┐
    │   ╱───┴───╲   │  ← Baffles
    │  │         │  │
    │  │    ○    │  │  ← Impeller
    │  │   ─┼─   │  │
    │  │    │    │  │
    │   ╲───┬───╱   │
    └───────┼───────┘
         Gas In →
```

**Advantages:**
- Excellent mixing and mass transfer
- Precise control of environmental conditions
- Suitable for high cell density cultures
- Scalable from mL to 100,000+ L

**Disadvantages:**
- High energy consumption
- Shear stress may damage cells
- Complex mechanical systems
- Higher capital and maintenance costs

**Applications in CEA:**
- Biocontrol agent production
- Enzyme production
- Inoculum preparation

**Key Design Parameters:**
```
Parameter              Typical Range
Working volume        50-80% of total
Aspect ratio (H/D)    1:1 to 3:1
Impeller/tank dia     0.3-0.5
Impeller speed        50-500 RPM
Power input           0.5-5 kW/m³
```

### Moving Bed Biofilm Reactor (MBBR)

**Configuration:**

```
    Influent                        Effluent
       ↓                               ↑
    ┌──┴────────────────────────┬─────┴──┐
    │  ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○   │  ╱╱╱   │
    │  ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○   │ Screen │
    │  ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○   │  ╲╲╲   │
    │                            │        │
    └─────────┬──────────────────┴────────┘
              ↑
          Air Input

    ○ = Biofilm carriers (40-70% fill)
```

**Advantages:**
- High biomass retention
- Resistant to shock loads
- Minimal maintenance
- Compact footprint
- Self-regulating biofilm thickness

**Disadvantages:**
- Limited mixing control
- Carrier cost
- Potential for clogging in high-solids applications

**Applications in CEA:**
- Nitrification in aquaponics (primary application)
- Denitrification with anoxic zones
- General wastewater treatment

**Design Criteria:**
```
Hydraulic retention time:  1-4 hours
Carrier fill ratio:        40-70% by volume
Specific surface area:     300-800 m²/m³
Organic loading rate:      5-20 kg BOD/m³/day
Ammonia loading rate:      0.5-2.0 kg N/m³/day
Air flow rate:            20-30 m³/m³ reactor/h
```

### Trickling Filter

**Configuration:**

```
    Distributor Arm (rotating)
           ↓
    ┌─────────────────┐
    │ ooOOoo          │  ← Wastewater distribution
    │ oooooooooo      │
    ├─────────────────┤
    │ ████████████    │
    │ ████████████    │  ← Media (plastic/rock)
    │ ████████████    │     with biofilm
    │ ████████████    │
    ├─────────────────┤
    │  ╲  ↓  ╱        │  ← Underdrain
    └───────┴─────────┘
         Effluent + Air
```

**Advantages:**
- Low energy consumption
- Simple operation
- Natural air circulation
- Robust to variations

**Disadvantages:**
- Large footprint
- Potential odor issues
- Limited environmental control
- Seasonal performance variation

**Applications in CEA:**
- Low-tech aquaponic biofilter
- Pre-treatment for recycled water
- Odor control (biofilter)

**Design Equations:**
```
Hydraulic loading rate (HLR):
Q/A = 1-4 m³/m²/day (low rate)
Q/A = 4-40 m³/m²/day (high rate)

Organic loading rate (OLR):
(Q × BOD) / V = 0.1-0.4 kg BOD/m³/day (low rate)
                0.4-2.0 kg BOD/m³/day (high rate)

Recirculation ratio:
R = Qr/Q = 0.5-3.0 (typically 1-2)
```

### Bubble Column and Airlift Reactors

**Bubble Column:**

```
    ← Gas Out
    ┌──────────┐
    │ ○  ○  ○ │
    │  ○  ○  ○│  Liquid + suspended cells
    │ ○  ○  ○ │
    │  ○  ○  ○│
    │ ○  ○  ○ │
    └────┬─────┘
         ↑
      Gas In
```

**Airlift:**

```
    Gas Out →
    ┌──────┬──────┐
    │  ↑   │  ↓   │  Riser │ Downcomer
    │  ↑   │  ↓   │
    │  ↑○  │  ↓   │
    │  ↑○  │  ↓   │
    │  ↑○  │  ↓   │
    └──┴───┴──────┘
       ↑
    Gas In
```

**Advantages:**
- Low shear stress
- No moving parts
- Simple construction
- Suitable for shear-sensitive organisms

**Applications in CEA:**
- Algae cultivation
- Anaerobic digestion mixing
- Suspended-cell fermentation

**Design Parameters:**
```
Superficial gas velocity:   0.01-0.15 m/s
Column height/diameter:     5:1 to 10:1
Gas holdup:                 5-30%
Volumetric mass transfer:   50-300 h⁻¹
```

## 3.2 Oxygen Transfer

### Fundamentals

**Oxygen Transfer Rate (OTR):**

```
OTR = KLa × (C* - CL)

Where:
OTR = oxygen transfer rate (mg/L/h)
KLa = volumetric mass transfer coefficient (h⁻¹)
C* = saturation dissolved oxygen (mg/L)
CL = actual dissolved oxygen (mg/L)
```

**Oxygen Demand:**

```
OUR = qO₂ × X = (μ/YX/O + mO) × X

Where:
OUR = oxygen uptake rate (mg/L/h)
qO₂ = specific oxygen uptake rate (mg/g/h)
YX/O = yield on oxygen (g cells/g O₂)
mO = maintenance oxygen coefficient
```

**Steady State Condition:**

```
OTR = OUR

KLa × (C* - CL) = (μ/YX/O + mO) × X
```

### Factors Affecting KLa

**Temperature Effect:**

```
KLa(T) = KLa(20°C) × θ^(T-20)

Where:
θ = temperature coefficient (typically 1.024)
T = temperature (°C)
```

**Pressure Effect on C*:**

```
C*(P,T) = C*(1 atm, T) × (P/1 atm)

Where:
P = absolute pressure (atm)
```

**Henry's Law:**

```
C* = H × pO₂

Where:
H = Henry's constant (mg/L/atm)
pO₂ = partial pressure of oxygen (atm)

At 20°C, 1 atm, pure O₂: C* = 43 mg/L
At 20°C, 1 atm, air (21% O₂): C* = 9.0 mg/L
```

**Empirical Correlations for KLa:**

For stirred tanks:
```
KLa = k × (P/V)^α × (vs)^β

Where:
P/V = power input per volume (W/m³)
vs = superficial gas velocity (m/s)
α = 0.4-0.7
β = 0.3-0.5
k = empirical constant
```

### Aeration System Design

**Air Flow Rate Calculation:**

```
Qair = (OUR × V) / (YO₂ × ρO₂)

Where:
Qair = air flow rate (m³/h)
V = reactor volume (m³)
YO₂ = oxygen transfer efficiency (typically 5-15%)
ρO₂ = oxygen density in air (0.28 kg O₂/m³ at STP)
```

**Example Calculation:**

Design aeration for 10 m³ bioreactor:
- OUR = 100 mg/L/h = 0.1 g/L/h
- YO₂ = 8% = 0.08

```
Total oxygen demand = 0.1 g/L/h × 10,000 L = 1000 g/h = 1.0 kg/h

Air required = 1.0 kg/h / (0.08 × 0.28 kg/m³)
            = 44.6 m³/h
            = 0.74 m³/min
            = 740 L/min

Specific aeration rate = 740 L/min / 10 m³ = 74 L/min/m³
```

**Diffuser Selection:**

```
Diffuser Type      Bubble Size    KLa Range    Efficiency
Fine bubble        1-3 mm         50-150 h⁻¹   10-15%
Coarse bubble      5-10 mm        20-50 h⁻¹    5-10%
Membrane           <1 mm          100-300 h⁻¹  15-25%
Venturi ejector    Variable       30-100 h⁻¹   8-12%
```

### Oxygen Limitation Analysis

**Critical Oxygen Concentration:**

```
μ = μmax × (DO / (KO + DO))

For DO > 10 × KO: μ ≈ μmax (no oxygen limitation)

Typical KO values:
- Bacteria: 0.1-0.5 mg/L
- Fungi: 0.5-1.5 mg/L
- Nitrifiers: 0.5-2.0 mg/L
```

**Oxygen Penetration in Biofilms:**

```
Maximum biofilm thickness (δmax) without anoxic core:

δmax = √(2 × Deff × C* / q)

Where:
Deff = effective diffusivity in biofilm (m²/s)
C* = surface oxygen concentration (mg/L)
q = volumetric oxygen consumption rate (mg/L/s)
```

## 3.3 Mixing and Power Requirements

### Mixing Objectives

1. **Homogenization:** Uniform distribution of nutrients, pH, temperature
2. **Suspension:** Keep solids suspended
3. **Dispersion:** Break up gas bubbles, distribute air
4. **Heat Transfer:** Remove metabolic heat

### Mixing Time

**Definition:** Time to achieve 95% homogeneity

**Empirical Correlation:**

```
θm = k × (V/N×D³)^(1/3)

Where:
θm = mixing time (s)
k = constant (depends on geometry, typically 5-10)
N = impeller speed (rev/s)
D = impeller diameter (m)
V = liquid volume (m³)
```

**Example:**

1000 L reactor, 0.3 m impeller, 100 RPM:

```
θm = 7 × (1.0 / ((100/60) × 0.3³))^(1/3)
   = 7 × (1.0 / 0.045)^0.33
   = 7 × 2.87
   = 20 seconds
```

### Power Consumption

**Power Number Correlation:**

```
Np = P / (ρ × N³ × D⁵)

Where:
Np = power number (dimensionless)
P = power (W)
ρ = fluid density (kg/m³)
N = impeller speed (rev/s)
D = impeller diameter (m)
```

**For Unaerated Conditions:**

```
P = Np × ρ × N³ × D⁵

Typical Np values:
- Rushton turbine: 5-6
- Pitched blade turbine: 1.5-2.5
- Marine propeller: 0.3-0.5
```

**For Aerated Conditions:**

```
Pg/P = f(Fr, Fl)

Where:
Pg = gassed power
P = ungassed power
Fr = Froude number
Fl = Flow number

Typically: Pg = 0.4-0.7 × P (40-70% power reduction)
```

**Example Calculation:**

Design agitation for 5000 L fermenter:
- Impeller diameter: 0.5 m
- Speed: 150 RPM = 2.5 rev/s
- Rushton turbine (Np = 5)
- Fluid density: 1000 kg/m³

```
Ungassed power:
P = 5 × 1000 × (2.5)³ × (0.5)⁵
  = 5 × 1000 × 15.625 × 0.03125
  = 2441 W
  = 2.4 kW

Gassed power (assuming 60% of ungassed):
Pg = 0.6 × 2.4 = 1.4 kW

Specific power input:
P/V = 1400 W / 5 m³ = 280 W/m³
```

### Scale of Mixing

**Reynolds Number:**

```
Re = (ρ × N × D²) / μ

Where:
μ = dynamic viscosity (Pa·s)

Re > 10,000: Turbulent (typical for bioprocesses)
Re < 2,100: Laminar
```

**Kolmogorov Microscale:**

```
λ = (ν³/ε)^0.25

Where:
λ = Kolmogorov length scale (m)
ν = kinematic viscosity (m²/s)
ε = energy dissipation rate (W/kg) = P/(ρ×V)

Interpretation:
- λ > cell size: Low shear environment
- λ < cell size: Potential cell damage
```

## 3.4 Heat Transfer

### Heat Generation

**Metabolic Heat:**

```
Qmetabolic = μ × X × V × (-ΔH)

Where:
Qmetabolic = heat generation rate (W)
-ΔH = heat of combustion (typically 18-20 kJ/g cells)
```

**Agitation Heat:**

```
Qagitation = P × ηm

Where:
P = shaft power (W)
ηm = mechanical efficiency (typically 0.9-0.95)
```

**Total Heat Load:**

```
Qtotal = Qmetabolic + Qagitation + Qcompression - Qevaporation
```

### Cooling System Design

**Jacketed Vessel:**

```
Qremoved = U × A × ΔTlm

Where:
U = overall heat transfer coefficient (W/m²·K)
A = heat transfer area (m²)
ΔTlm = log mean temperature difference (K)

ΔTlm = (ΔT1 - ΔT2) / ln(ΔT1/ΔT2)
```

**Typical U Values:**

```
Configuration                    U (W/m²·K)
Jacket, water cooling           150-300
Internal coils                  300-600
External heat exchanger         800-1500
```

**Cooling Area Calculation:**

```
A = Qtotal / (U × ΔTlm)
```

**Example:**

5 m³ fermenter with:
- Heat generation: 5000 W
- Desired temperature: 30°C
- Cooling water: 15°C in, 20°C out
- Jacket U = 200 W/m²·K

```
ΔT1 = 30 - 15 = 15°C
ΔT2 = 30 - 20 = 10°C

ΔTlm = (15 - 10) / ln(15/10) = 5 / 0.405 = 12.3°C

Required area = 5000 / (200 × 12.3) = 2.03 m²

For cylinder with H/D = 2:
V = π × D² × H / 4 = π × D² × 2D / 4 = π × D³ / 2
5 = π × D³ / 2
D³ = 3.18
D = 1.47 m, H = 2.94 m

Jacket area = π × D × H = π × 1.47 × 2.94 = 13.6 m²

Since 13.6 > 2.03 m², jacket cooling is adequate.
```

## 3.5 Scale-up Principles

### Scale-up Criteria

**Common Criteria:**

1. **Constant Power per Unit Volume (P/V)**
   - Maintains similar mixing intensity
   - Most common for aerobic processes

2. **Constant Tip Speed (π×N×D)**
   - Reduces shear stress at larger scale
   - Preferred for shear-sensitive cultures

3. **Constant KLa**
   - Maintains oxygen transfer capability
   - Critical for oxygen-limited processes

4. **Constant Mixing Time (θm)**
   - Maintains homogeneity
   - Important for fast reactions

### Scale-up Relationships

**Geometric Similarity:**

```
(D2/D1) = (V2/V1)^(1/3)

(H2/H1) = (V2/V1)^(1/3)
```

**Constant P/V Scale-up:**

```
(P/V)1 = (P/V)2

Np × ρ × N1³ × D1⁵ / V1 = Np × ρ × N2³ × D2⁵ / V2

For geometric similarity (D2/D1 = (V2/V1)^(1/3)):

N2/N1 = (V1/V2)^(2/9)

Speed decreases as volume increases!
```

**Example Scale-up:**

Lab scale: 10 L, D = 0.1 m, N = 300 RPM, P/V = 500 W/m³
Production scale: 10,000 L (1000× scale-up)

```
D2 = 0.1 × (10,000/10)^(1/3) = 0.1 × 10 = 1.0 m

N2 = 300 × (10/10,000)^(2/9)
   = 300 × (0.001)^0.222
   = 300 × 0.215
   = 64.5 RPM

Power required:
P = 500 W/m³ × 10 m³ = 5000 W = 5 kW
```

### Scale-up Challenges

**1. Mass Transfer Limitations**

Laboratory reactors often have:
- Higher surface area to volume ratio
- Better mixing (higher P/V)
- More uniform environment

Solution: Increase agitation, aeration, or use fed-batch

**2. Oxygen Transfer**

KLa often decreases with scale:
- Larger bubbles in bigger reactors
- Less efficient gas dispersion

Solution: Enhance aeration, use pure O₂ enrichment

**3. Heat Transfer**

Surface area to volume ratio decreases:
- A/V ∝ 1/L

Solution: Internal coils, external heat exchangers

**4. Mixing Non-Ideality**

Large vessels develop:
- Dead zones
- Concentration gradients
- pH and temperature stratification

Solution: Multiple impellers, baffles, circulation pumps

### Scale-down Strategies

**Purpose:** Predict large-scale performance in lab

**Approach:**
- Create similar environment (P/V, KLa, gradients)
- Use compartmented reactors
- Introduce controlled fluctuations

## 3.6 Advanced Bioreactor Concepts

### Membrane Bioreactor (MBR)

**Configuration:**

```
    Feed ─────►  ┌──────────────┐
                 │  Bioreactor  │
                 │  ╱╱╱╱╱╱╱╱    │
    Air  ─────►  │  Membrane    │  ──────► Permeate
                 │  ╲╲╲╲╲╲╲╲    │
                 └──────┬───────┘
                        │
                   Waste Sludge
```

**Advantages:**
- Complete biomass retention
- High effluent quality
- Compact footprint
- Decoupling of HRT and SRT

**Design Parameters:**
```
Flux:                      10-30 L/m²/h
Transmembrane pressure:    5-50 kPa
MLSS concentration:        8-15 g/L
Membrane pore size:        0.03-0.4 μm
SRT:                       10-50 days
```

### Photobioreactor (PBR)

**Tubular PBR:**

```
    ┌──►──►──►──►──►──┐
    │                 │
    │                 ▼
    │  ◄──◄──◄──◄──┐ │
    │              │ │
    │              ▼ │
    └──►──►──►──►──►─┘

    Transparent tubes
    Sunlight/LED illumination
```

**Design Considerations:**
- Light penetration depth: 2-10 cm
- Optimal cell concentration: 0.5-3 g/L
- Light/dark cycles for photosynthesis
- CO₂ mass transfer
- Temperature control (overheating in sunlight)

**Performance Metrics:**
```
Areal productivity:   10-30 g/m²/day
Volumetric productivity: 0.1-1.5 g/L/day
Photosynthetic efficiency: 3-8%
```

## Summary

Bioreactor design requires integration of biological requirements with engineering principles. Key considerations include reactor configuration, oxygen transfer, mixing, heat removal, and scale-up strategy. Selection depends on application-specific criteria including cell type, growth mode, product formation, and economic constraints.

## Key Takeaways

1. Reactor configuration affects mass transfer, mixing, and shear stress
2. Oxygen transfer rate must match oxygen uptake rate at steady state
3. Mixing ensures homogeneity but consumes power
4. Heat generation requires adequate cooling capacity
5. Scale-up requires maintaining critical parameters (P/V, KLa, etc.)
6. Advanced reactors (MBR, PBR) offer specialized advantages
7. Design must balance biological requirements with economic constraints

## Further Reading

- Doran, P.M. (2012). *Bioprocess Engineering Principles*, Chapters 9-10.
- Stanbury, P.F. et al. (2017). *Principles of Fermentation Technology*, 3rd ed.
- van't Riet, K. & Tramper, J. (1991). *Basic Bioreactor Design*.
- Wen, Z. (2019). *Photobioreactor Design for Microalgae*. Springer.

## Review Questions

1. What are the advantages and disadvantages of MBBR vs. STR?
2. Calculate the air flow rate required for OUR = 150 mg/L/h in a 5 m³ reactor.
3. How does KLa change with temperature?
4. What is the relationship between power input and mixing time?
5. Why does gassed power consumption decrease compared to ungassed?
6. What is the Kolmogorov microscale and why is it important?
7. If scaling up 100×, how does impeller speed change for constant P/V?
8. What are three major challenges in scale-up?
9. How does an MBR differ from conventional activated sludge?
10. What limits productivity in photobioreactors?

---

**Next Module:** Module 4 - Nitrification Process Engineering
