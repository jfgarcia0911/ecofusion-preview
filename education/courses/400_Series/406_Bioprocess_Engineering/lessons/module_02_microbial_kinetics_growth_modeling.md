# Module 2: Microbial Kinetics and Growth Modeling

## Learning Objectives

By the end of this module, you will be able to:
- Analyze microbial growth patterns and calculate specific growth rates
- Apply Monod and extended kinetic models to predict growth behavior
- Calculate substrate utilization rates and product formation kinetics
- Design batch, continuous, and fed-batch cultivation systems
- Predict process performance using mathematical models
- Evaluate environmental effects on microbial kinetics

## 2.1 Fundamentals of Microbial Growth

### Growth Phases

**Batch Culture Growth Curve:**

```
Log(Cell Concentration)
    │
    │         ┌─────────────── Stationary Phase
    │        ╱
    │       ╱
    │      ╱ Exponential Phase
    │     ╱
    │    ╱
    │   ╱ Lag Phase
    │  ╱                        Death Phase
    │ ╱                              ╲
    │╱                                ╲
    └────────────────────────────────────► Time
```

**Phase Characteristics:**

1. **Lag Phase (Adaptation)**
   - Duration: Minutes to hours
   - Characteristics:
     * Enzyme synthesis for substrate utilization
     * Cell component repair and synthesis
     * Minimal cell division
     * Preparation for rapid growth

2. **Exponential (Log) Phase**
   - Duration: Hours to days
   - Characteristics:
     * Maximum specific growth rate (μmax)
     * Balanced growth (constant composition)
     * Predictable doubling time
     * Optimal for kinetic studies

3. **Stationary Phase**
   - Duration: Hours to weeks
   - Characteristics:
     * Growth rate equals death rate
     * Nutrient depletion or toxic accumulation
     * Secondary metabolite production
     * Stress responses activated

4. **Death (Decline) Phase**
   - Duration: Variable
   - Characteristics:
     * Cell lysis and death
     * Release of intracellular components
     * Exponential decline in viable cells
     * Can be delayed by dormancy

### Quantifying Microbial Growth

**Biomass Concentration (X)**

Measured as:
- Dry cell weight (DCW): g/L or kg/m³
- Optical density (OD): Absorbance at 600 nm
- Cell count: cells/mL
- Protein concentration: g protein/L

**Specific Growth Rate (μ)**

```
μ = (1/X) × (dX/dt)

Where:
μ = specific growth rate (h⁻¹)
X = biomass concentration (g/L)
t = time (h)
dX/dt = rate of biomass change
```

During exponential phase:

```
X = X₀ × e^(μt)

ln(X) = ln(X₀) + μt

Doubling time (td) = ln(2)/μ = 0.693/μ
```

**Example Calculation:**

A bacterial culture grows from 0.5 g/L to 4.0 g/L in 6 hours.

```
μ = [ln(4.0) - ln(0.5)] / 6
μ = [1.386 - (-0.693)] / 6
μ = 2.079 / 6
μ = 0.347 h⁻¹

Doubling time = 0.693 / 0.347 = 2.0 hours
```

## 2.2 Monod Growth Kinetics

### The Monod Equation

The most widely used model for microbial growth:

```
μ = μmax × (S / (Ks + S))

Where:
μ = specific growth rate (h⁻¹)
μmax = maximum specific growth rate (h⁻¹)
S = substrate concentration (g/L)
Ks = half-saturation constant (g/L)
```

**Physical Interpretation:**

- When S >> Ks: μ ≈ μmax (zero-order kinetics)
- When S = Ks: μ = μmax/2
- When S << Ks: μ ≈ (μmax/Ks) × S (first-order kinetics)

**Graphical Representation:**

```
μ/μmax
  1.0│        ┌────────────────
     │       ╱
     │      ╱
     │     ╱
  0.5│    ├─────── μ = μmax/2 when S = Ks
     │   ╱
     │  ╱
     │ ╱
  0.0└─┴──────┴──────┴──────┴─────► S
     0  Ks   2Ks   3Ks   4Ks
```

### Substrate Utilization

**Yield Coefficient:**

```
YX/S = ΔX / ΔS

Where:
YX/S = cell yield on substrate (g cells/g substrate)
ΔX = change in biomass concentration
ΔS = change in substrate concentration
```

Typical yield values:
- Glucose (aerobic): 0.4-0.6 g/g
- Methanol (aerobic): 0.3-0.5 g/g
- Acetate (anaerobic): 0.05-0.1 g/g

**Substrate Consumption Rate:**

```
qs = (1/X) × (dS/dt) = -μ/YX/S - ms

Where:
qs = specific substrate uptake rate (g substrate/g cells/h)
ms = maintenance coefficient (g substrate/g cells/h)
```

**Maintenance Energy:**

Non-growth-associated substrate consumption for:
- Cell maintenance and repair
- Motility
- Osmoregulation
- Transport processes

### Product Formation

**Luedeking-Piret Equation:**

```
qp = α × μ + β

Where:
qp = specific product formation rate (g product/g cells/h)
α = growth-associated product formation coefficient
β = non-growth-associated product formation coefficient
```

**Product Classification:**

1. **Growth-Associated (α > 0, β = 0)**
   - Product formation coupled to growth
   - Example: Biomass itself, some enzymes

2. **Non-Growth-Associated (α = 0, β > 0)**
   - Product formation during stationary phase
   - Example: Secondary metabolites, some antibiotics

3. **Mixed Growth-Associated (α > 0, β > 0)**
   - Product formation during both phases
   - Example: Lactic acid, ethanol

## 2.3 Extended Kinetic Models

### Substrate Inhibition (Haldane Model)

For substrates that inhibit growth at high concentrations:

```
μ = μmax × S / (Ks + S + S²/Ki)

Where:
Ki = inhibition constant (g/L)
```

Common in:
- Phenol degradation
- High ammonia concentrations
- Volatile fatty acid accumulation

**Graphical Behavior:**

```
μ
  │     ╱╲
  │    ╱  ╲
  │   ╱    ╲
  │  ╱      ╲
  │ ╱        ╲___
  │╱              ╲___
  └────────────────────► S
          Sopt
```

### Product Inhibition

**Linear Inhibition Model:**

```
μ = μmax × (S / (Ks + S)) × (1 - P/Pmax)

Where:
P = product concentration (g/L)
Pmax = critical product concentration (g/L)
```

**Exponential Inhibition Model:**

```
μ = μmax × (S / (Ks + S)) × e^(-KI×P)

Where:
KI = product inhibition constant (L/g)
```

### Multiple Substrate Limitation

**Interactive Model (Complementary Substrates):**

```
μ = μmax × (S₁/(Ks1 + S₁)) × (S₂/(Ks2 + S₂))
```

**Substitutable Substrates:**

```
μ = μmax × (S₁/(Ks1 + S₁) + S₂/(Ks2 + S₂))
```

**Example: Nitrification**

Nitrosomonas growth limited by ammonia and oxygen:

```
μ = μmax × (NH₃/(KNH₃ + NH₃)) × (O₂/(KO₂ + O₂))

Typical values:
μmax = 0.03-0.05 h⁻¹ (25°C)
KNH₃ = 0.5-2.0 mg N/L
KO₂ = 0.3-0.6 mg/L
```

## 2.4 Environmental Effects on Growth

### Temperature Effects

**Arrhenius Relationship:**

```
μ(T) = A × e^(-Ea/RT)

Where:
A = pre-exponential factor
Ea = activation energy (J/mol)
R = gas constant (8.314 J/mol·K)
T = absolute temperature (K)
```

**Modified Ratkowsky Model:**

```
√μ = b(T - Tmin)

Where:
b = regression coefficient
Tmin = theoretical minimum growth temperature
```

**Temperature Classification:**

```
Organism Type    Tmin    Topt    Tmax
Psychrophile     -5°C    15°C    20°C
Mesophile        5°C     37°C    45°C
Thermophile      40°C    65°C    80°C
Hyperthermophile 65°C    90°C    110°C
```

**Q10 Temperature Coefficient:**

```
Q10 = (μ at T+10°C) / (μ at T)

Typical values:
- 10-30°C: Q10 = 1.5-2.5
- 30-40°C: Q10 = 1.2-1.8
- Above 40°C: Q10 < 1.0 (above optimum)
```

### pH Effects

**Optimal pH Ranges:**

```
Organism Group      pH Range    pH Optimum
Acidophiles        <3.0        2.0-3.5
Neutrophiles       5.0-9.0     6.5-7.5
Alkaliphiles       >9.0        9.5-11.0
```

**pH Inhibition Model:**

```
μ(pH) = μmax × CPH

Where CPH is a correction factor:

CPH = 1 / (1 + 10^(pHopt-pH)/ΔpH + 10^(pH-pHopt)/ΔpH)

ΔpH = pH tolerance range
```

### Oxygen Effects

**Critical Dissolved Oxygen (DO):**

```
μ = μmax × (DO / (KDO + DO))

Where:
KDO = critical oxygen concentration (mg/L)
```

Typical KDO values:
- Bacteria: 0.1-0.5 mg/L
- Fungi: 0.3-1.0 mg/L
- Nitrifiers: 0.5-2.0 mg/L

**Oxygen Uptake Rate (OUR):**

```
OUR = qO₂ × X = (μ/YX/O₂ + mO₂) × X

Where:
qO₂ = specific oxygen uptake rate (g O₂/g cells/h)
YX/O₂ = yield on oxygen
mO₂ = maintenance oxygen requirement
```

## 2.5 Reactor Configurations and Modeling

### Batch Reactor

**Mass Balance for Biomass:**

```
dX/dt = μ × X

With Monod kinetics:
dX/dt = μmax × (S/(Ks + S)) × X
```

**Mass Balance for Substrate:**

```
dS/dt = -(μ/YX/S + ms) × X
```

**Integration for Exponential Phase:**

```
X(t) = X₀ × e^(μmax×t)

Time to reach Xf from X₀:
t = (1/μmax) × ln(Xf/X₀)
```

**Example Calculation:**

Design a batch reactor to grow E. coli from 0.1 to 10 g/L.

Given:
- μmax = 0.8 h⁻¹
- YX/S = 0.5 g/g
- S₀ = 20 g/L glucose

```
Growth time:
t = ln(10/0.1) / 0.8 = 4.6 / 0.8 = 5.75 hours

Substrate consumed:
ΔS = ΔX / YX/S = (10 - 0.1) / 0.5 = 19.8 g/L

Final substrate:
Sf = 20 - 19.8 = 0.2 g/L
```

### Continuous Stirred-Tank Reactor (CSTR)

**Steady-State Mass Balances:**

Biomass:
```
D × X₀ + μ × X = D × X

At steady state (X₀ = 0):
μ = D

Where:
D = dilution rate (h⁻¹) = F/V
F = flow rate (L/h)
V = reactor volume (L)
```

Substrate:
```
D × S₀ = D × S + (μ/YX/S + ms) × X

At steady state:
X = YX/S × (S₀ - S) - ms × YX/S × X / μ
```

**Combining with Monod equation:**

```
D = μmax × S / (Ks + S)

Solving for S:
S = (Ks × D) / (μmax - D)

X = YX/S × (S₀ - S)
```

**Critical Dilution Rate:**

```
Dmax = μmax × S₀ / (Ks + S₀)

If D > Dmax: washout occurs (X → 0)
```

**Example Calculation:**

CSTR for nitrifying bacteria:

Given:
- μmax = 0.04 h⁻¹
- Ks = 1.0 mg NH₃-N/L
- S₀ = 50 mg NH₃-N/L
- YX/S = 0.15 g cells/g N
- V = 1000 L

At D = 0.02 h⁻¹:

```
S = (1.0 × 0.02) / (0.04 - 0.02) = 1.0 mg/L

X = 0.15 × (50 - 1.0) = 7.35 g/L

Flow rate = D × V = 0.02 × 1000 = 20 L/h

Hydraulic retention time = V/F = 1000/20 = 50 hours
```

### Fed-Batch Reactor

**Exponential Feeding Strategy:**

To maintain constant μ:

```
F(t) = (μ/YX/S) × X₀ × e^(μt) × V₀/(S₀ - S)

Where:
F(t) = feed rate at time t (L/h)
V₀ = initial volume (L)
S₀ = substrate concentration in feed (g/L)
```

**Advantages:**
- Control growth rate to prevent overflow metabolism
- Maintain optimal substrate concentration
- Achieve high cell densities
- Reduce substrate inhibition effects

## 2.6 Parameter Estimation

### Determining μmax and Ks

**Lineweaver-Burk Plot:**

```
1/μ = (Ks/μmax) × (1/S) + 1/μmax

Plot 1/μ vs. 1/S:
- Slope = Ks/μmax
- Intercept = 1/μmax
```

**Eadie-Hofstee Plot:**

```
μ = μmax - Ks × (μ/S)

Plot μ vs. μ/S:
- Slope = -Ks
- Intercept = μmax
```

**Hanes-Woolf Plot:**

```
S/μ = (S/μmax) + (Ks/μmax)

Plot S/μ vs. S:
- Slope = 1/μmax
- Intercept = Ks/μmax
```

**Nonlinear Regression:**

Modern approach using software (MATLAB, Python, R):
- Fit Monod equation directly to (S, μ) data
- Provides statistical confidence intervals
- Can handle extended models

### Experimental Design

**Batch Growth Experiment:**

1. Inoculate reactor with known X₀
2. Sample at regular intervals (1-2 hour intervals)
3. Measure X, S, and optionally P
4. Plot ln(X) vs. t to determine μ
5. Plot S vs. t to determine qs and YX/S

**Chemostat Experiment:**

1. Operate at steady state for multiple D values
2. For each D, measure steady-state X and S
3. Plot D vs. S to fit Monod parameters
4. Determine Dmax experimentally (approach from below)

## 2.7 Case Studies in CEA Applications

### Case Study 1: Nitrification Kinetics

**System:** Moving bed biofilm reactor (MBBR) for aquaponics

**Objective:** Determine kinetic parameters for Nitrosomonas growth

**Experimental Data:**

```
NH₃-N (mg/L)    μ (h⁻¹)
0.5             0.010
1.0             0.015
2.0             0.020
5.0             0.027
10.0            0.031
20.0            0.034
```

**Analysis:**

Using nonlinear regression on Monod equation:
- μmax = 0.037 h⁻¹
- Ks = 1.8 mg NH₃-N/L
- R² = 0.995

**Design Application:**

For target effluent NH₃-N = 0.5 mg/L, inlet = 40 mg/L:

```
At steady state in CSTR:
S = (Ks × D) / (μmax - D)
0.5 = (1.8 × D) / (0.037 - D)

Solving: D = 0.01 h⁻¹

Required HRT = 1/D = 100 hours

For 1000 L/day flow:
V = Flow × HRT = (1000/24) × 100 = 4167 L

With 40% biofilm filling:
Reactor volume = 4167 / 0.4 = 10,417 L
```

### Case Study 2: Anaerobic Digestion of Greenhouse Waste

**Substrate:** Mixed vegetable waste and fish sludge

**Kinetic Model:** Modified Gompertz for biogas production

```
B(t) = Bmax × exp{-exp[(Rmax × e / Bmax) × (λ - t) + 1]}

Where:
B(t) = cumulative biogas production (mL)
Bmax = maximum biogas potential (mL)
Rmax = maximum production rate (mL/day)
λ = lag phase duration (days)
e = Euler's number (2.718)
```

**Fitted Parameters:**
- Bmax = 425 mL/g VS
- Rmax = 48 mL/g VS/day
- λ = 2.3 days

**Scale-up Design:**

For 100 kg VS/day input:

```
Daily biogas production = 100 × 0.425 = 42.5 m³/day

Peak production rate = Rmax × input
                    = 48 mL/g VS/day × 100 kg × 1000 g/kg
                    = 4,800 L/day = 4.8 m³/day at peak

With 20-day HRT:
Digester volume = 100 kg/day × 20 days / 0.05 kg VS/L
                = 40,000 L = 40 m³
```

## Summary

Microbial kinetics provide the quantitative foundation for bioprocess design. The Monod equation and its extensions allow prediction of growth, substrate consumption, and product formation rates. Understanding these relationships enables rational design of batch, continuous, and fed-batch systems for CEA applications.

Key principles:
- Growth follows predictable patterns described by mathematical models
- Environmental conditions (T, pH, DO) significantly affect kinetics
- Reactor configuration affects process performance and stability
- Parameter estimation requires careful experimental design
- Scale-up must account for kinetic limitations and environmental control

## Key Takeaways

1. Specific growth rate (μ) quantifies microbial growth velocity
2. Monod equation relates growth rate to substrate concentration
3. Yield coefficients connect biomass growth to substrate consumption
4. Temperature, pH, and oxygen critically affect growth kinetics
5. Reactor configuration (batch, CSTR, fed-batch) determines operational strategy
6. Kinetic parameters must be experimentally determined for each system
7. Mathematical models enable quantitative bioprocess design

## Further Reading

- Doran, P.M. (2012). *Bioprocess Engineering Principles*, Chapter 6-8.
- Shuler, M.L. & Kargi, F. (2017). *Bioprocess Engineering: Basic Concepts*, 3rd ed.
- Grady, C.P.L. et al. (2011). *Biological Wastewater Treatment*, Chapter 3.
- Bailey, J.E. & Ollis, D.F. (1986). *Biochemical Engineering Fundamentals*, 2nd ed.

## Review Questions

1. What are the four phases of batch microbial growth?
2. Calculate the doubling time for a culture with μ = 0.5 h⁻¹.
3. What is the physical meaning of Ks in the Monod equation?
4. How does the Haldane model differ from the Monod model?
5. Write the steady-state mass balance for biomass in a CSTR.
6. What happens in a CSTR if D > Dmax?
7. Why is fed-batch operation advantageous for high cell density culture?
8. What are three methods to determine μmax and Ks from experimental data?
9. How does temperature affect specific growth rate?
10. What is the relationship between OUR and specific growth rate?

---

**Next Module:** Module 3 - Bioreactor Design Principles
