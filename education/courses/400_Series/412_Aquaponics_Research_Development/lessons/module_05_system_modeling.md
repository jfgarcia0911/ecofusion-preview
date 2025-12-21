# Module 5: System Modeling and Simulation

## Learning Objectives

By the end of this module, you will be able to:
- Develop mass balance models for aquaponics systems
- Create dynamic system simulations
- Apply bioenergetics and growth models
- Model nutrient cycling processes
- Validate and perform sensitivity analysis on models

## 5.1 Mass Balance Modeling

### Mass Balance Principles

```
┌────────────────────────────────────────────────────────┐
│          CONSERVATION OF MASS PRINCIPLE                │
└────────────────────────────────────────────────────────┘

GENERAL EQUATION:
Accumulation = Input - Output + Generation - Consumption

dM/dt = Ṁᵢₙ - Ṁₒᵤₜ + Ṁ_gen - Ṁ_cons

For steady-state systems (dM/dt = 0):
Input + Generation = Output + Consumption

NITROGEN MASS BALANCE IN AQUAPONICS:

┌─────────────────────────────────────────┐
│          SYSTEM BOUNDARY                │
│                                         │
│  INPUT             PROCESSES     OUTPUT │
│  Feed N ──→ Fish ──→ TAN ──→ NO₂⁻ ──→  │
│             ↓       ↓      ↓      ↓     │
│           Growth  Excr.  Nitr.  Nitr.   │
│                    ↓              ↓     │
│              Sludge ←──── NO₃⁻ ──→     │
│                    ↓              ↓     │
│                 Removal      Plant      │
│                             Uptake      │
└─────────────────────────────────────────┘

Mass Balance Equation:
N_feed = N_fish_growth + N_sludge + N_plant + N_denitrif + N_other
```

### Nitrogen Mass Balance Model

```
COMPONENT FLOWS (g N/day):

INPUT:
├── Feed: F × P_N
│   Where: F = feed rate (g/day)
│          P_N = protein % / 6.25

OUTPUTS:
├── Fish biomass: Ḃ × 0.03
│   Where: Ḃ = growth rate (g/day)
│
├── TAN excretion: F × P_N × (1 - FCR⁻¹)
│   Where: FCR = feed conversion ratio
│
├── Plant uptake: Y × R_N
│   Where: Y = plant yield (g DW/day)
│          R_N = N content (% DW)
│
├── Sludge removal: V × [TSS] × f_N
│   Where: V = sludge volume (L/day)
│          [TSS] = solids concentration
│          f_N = N fraction in solids
│
└── Denitrification: V × k_d × [NO₃]
    Where: k_d = denitrification rate constant

WORKED EXAMPLE:
Given:
- Feed rate: 1000 g/day (32% protein)
- FCR: 1.5
- Plant harvest: 500 g DW/day (3.5% N)
- Sludge: 50 L/day at 500 mg TSS/L (8% N)

Calculations:
N_feed = 1000 × 0.32/6.25 = 51.2 g N/day

N_fish = 1000/1.5 × 0.03 = 20.0 g N/day

N_excretion = 51.2 × (1 - 1/1.5) = 17.1 g N/day

N_plant = 500 × 0.035 = 17.5 g N/day

N_sludge = 50 × 0.5 × 0.08 = 2.0 g N/day

N_balance = 51.2 - 20.0 - 17.5 - 2.0 = 11.7 g N/day
(Denitrification + system losses)
```

### Water Balance Model

```
WATER BALANCE EQUATION:

V × dC/dt = Q_in × C_in - Q_out × C_out + R - U

Where:
V = System volume (L)
C = Concentration (mg/L)
Q = Flow rate (L/h)
R = Internal generation rate (mg/h)
U = Internal removal rate (mg/h)

EXAMPLE - DO BALANCE IN FISH TANK:

Input sources:
├── Inflow: Q_in × DO_in
└── Aeration: k_L × a × (DO_sat - DO)

Output/consumption:
├── Outflow: Q_out × DO
├── Fish respiration: OCR × Biomass
└── Bacterial respiration: BOD × k_BOD

Equation:
V × dDO/dt = Q_in(DO_in - DO) + k_L×a(DO_sat - DO) - OCR×B - k_BOD×BOD

Where:
k_L = Mass transfer coefficient (m/h)
a = Specific surface area (m²/m³)
OCR = Oxygen consumption rate (mg O₂/kg fish/h)
B = Fish biomass (kg)
```

## 5.2 Dynamic System Simulation

### State Variable Modeling

```
SYSTEM STATE VARIABLES:

For coupled aquaponics system:

STATE VECTOR X(t):
├── X₁: Fish biomass (kg)
├── X₂: TAN concentration (mg/L)
├── X₃: NO₂⁻ concentration (mg/L)
├── X₄: NO₃⁻ concentration (mg/L)
├── X₅: Plant biomass (kg)
└── X₆: Dissolved oxygen (mg/L)

DIFFERENTIAL EQUATIONS:

dX₁/dt = μ_fish × X₁                    (Fish growth)

dX₂/dt = E_TAN - k₁×X₂ - Q/V×X₂        (TAN dynamics)

dX₃/dt = k₁×X₂ - k₂×X₃ - Q/V×X₃       (NO₂⁻ dynamics)

dX₄/dt = k₂×X₃ - U_plant - Q/V×X₄      (NO₃⁻ dynamics)

dX₅/dt = μ_plant × X₅                   (Plant growth)

dX₆/dt = Aeration - Respiration - Q/V×(X₆-DO_in)

Where:
μ = Specific growth rate (day⁻¹)
E_TAN = TAN excretion rate (mg/L/day)
k₁, k₂ = Nitrification rate constants (day⁻¹)
U_plant = Plant uptake rate (mg/L/day)
Q/V = Hydraulic retention time (day⁻¹)
```

### Numerical Integration Methods

```
EULER'S METHOD (Simple but less accurate):

X(t+Δt) = X(t) + Δt × dX/dt|ₜ

RUNGE-KUTTA 4TH ORDER (More accurate):

k₁ = f(t, X)
k₂ = f(t + Δt/2, X + Δt×k₁/2)
k₃ = f(t + Δt/2, X + Δt×k₂/2)
k₄ = f(t + Δt, X + Δt×k₃)

X(t+Δt) = X(t) + Δt/6 × (k₁ + 2k₂ + 2k₃ + k₄)

SIMULATION EXAMPLE (TAN dynamics):

Time step: Δt = 0.1 day
Initial TAN: X₂(0) = 0.5 mg/L
Parameters:
- E_TAN = 10 mg/L/day
- k₁ = 0.5 day⁻¹
- Q/V = 1.0 day⁻¹

Results:
t (days) │ TAN (mg/L)
─────────┼───────────
   0.0   │   0.50
   0.5   │   2.15
   1.0   │   2.85
   2.0   │   3.20
   5.0   │   3.33
  10.0   │   3.33  (steady state)

Steady-state: TAN_ss = E_TAN/(k₁ + Q/V) = 10/1.5 = 6.67...
(Simplified model)
```

### Software Tools for Simulation

```
STELLA/iThink:
├── Graphical interface
├── Stock-flow diagrams
├── Built-in functions
└── Good for beginners

MATLAB/Simulink:
├── Powerful numerical methods
├── Extensive toolboxes
├── Professional standard
└── Steep learning curve

Python (SciPy):
├── Free and open-source
├── odeint, solve_ivp functions
├── Extensive libraries
└── Flexible

R (deSolve package):
├── Statistical integration
├── Good for data analysis
└── Research-oriented
```

## 5.3 Bioenergetics and Growth Models

### Fish Growth Models

```
VON BERTALANFFY GROWTH MODEL:

Lt = L∞ × (1 - e^(-K(t-t₀)))

Where:
Lt = Length at time t (cm)
L∞ = Asymptotic maximum length (cm)
K = Growth coefficient (year⁻¹)
t₀ = Theoretical age at length zero

Convert to weight:
Wt = a × Lt^b

EXAMPLE - Tilapia Growth:
Parameters:
- L∞ = 40 cm
- K = 0.8 year⁻¹
- t₀ = -0.1 year
- a = 0.0245, b = 3.02

Weight (g)
    ↑
1000│                          ●
    │                      ●
 800│                   ●
    │               ●
 600│           ●
    │       ●
 400│    ●
    │  ●
 200│●
    │
  0 └────────────────────────→ Time (months)
      0  2  4  6  8 10 12
```

### Thermal Growth Coefficient (TGC)

```
TGC = (W₂^(1/3) - W₁^(1/3)) × 1000 / (T × days)

Where:
W₁, W₂ = Initial and final weight (g)
T = Average temperature (°C)
days = Duration of growth period

EXAMPLE:
Initial weight: 50 g
Final weight: 200 g
Temperature: 28°C
Duration: 60 days

TGC = (200^0.333 - 50^0.333) × 1000 / (28 × 60)
    = (5.848 - 3.684) × 1000 / 1680
    = 1.29

Useful for:
├── Comparing growth across temperatures
├── Predicting growth at different temperatures
└── Standardizing research results
```

### Specific Growth Rate (SGR)

```
SGR = [(ln W₂ - ln W₁) / days] × 100

Where:
W₁, W₂ = Initial and final weight (g)
days = Duration

TEMPERATURE DEPENDENCE:

SGR = SGR_max × f(T)

Where f(T) is thermal tolerance function:

f(T) = e^(-((T-T_opt)²)/(2σ²))

EXAMPLE - Tilapia SGR vs. Temperature:

SGR (%/day)
    ↑
  4 │         ┌───┐
    │       ┌─┘   └─┐
  3 │     ┌─┘       └─┐
    │   ┌─┘           └─┐
  2 │ ┌─┘               └─┐
    │─┘                   └──
  1 │
    └───────────────────────────→ Temperature (°C)
      15  20  25  30  35  40

Optimal range: 27-30°C
SGR_max ≈ 4%/day
```

## 5.4 Nutrient Cycling Models

### Nitrification Kinetics

```
MONOD KINETICS:

μ = μ_max × [S] / (K_s + [S])

Where:
μ = Specific growth rate (day⁻¹)
μ_max = Maximum growth rate (day⁻¹)
[S] = Substrate concentration (mg/L)
K_s = Half-saturation constant (mg/L)

AMMONIA OXIDATION (AOB):

r_AOB = μ_max,AOB × [NH₄⁺]/(K_s,NH₄ + [NH₄⁺]) × [O₂]/(K_o,AOB + [O₂]) × X_AOB

NITRITE OXIDATION (NOB):

r_NOB = μ_max,NOB × [NO₂⁻]/(K_s,NO₂ + [NO₂⁻]) × [O₂]/(K_o,NOB + [O₂]) × X_NOB

TYPICAL PARAMETERS:
┌──────────────┬──────────┬───────────┐
│ Parameter    │   AOB    │    NOB    │
├──────────────┼──────────┼───────────┤
│ μ_max (day⁻¹)│  0.7-1.0 │  0.5-0.7  │
│ K_s (mg N/L) │  0.5-1.0 │  0.5-1.5  │
│ K_o (mg O₂/L)│  0.5-1.0 │  0.5-1.5  │
│ Temp opt (°C)│  25-30   │  25-30    │
│ pH optimum   │  7.5-8.0 │  7.0-7.5  │
└──────────────┴──────────┴───────────┘
```

### Plant Nutrient Uptake

```
MICHAELIS-MENTEN KINETICS:

V = V_max × [C] / (K_m + [C])

Where:
V = Uptake rate (mg/g DW/day)
V_max = Maximum uptake rate
[C] = Nutrient concentration (mg/L)
K_m = Michaelis constant (mg/L)

MULTIPLE NUTRIENT MODEL:

Growth = min(f_N, f_P, f_K, f_light, f_temp)

Liebig's Law of the Minimum

EXAMPLE - Lettuce N Uptake:

Uptake Rate
(mg N/g/day)
    ↑
 15 │           ┌────────
    │         ┌─┘
 10 │       ┌─┘
    │     ┌─┘
  5 │   ┌─┘
    │ ┌─┘
  0 └──────────────────→ NO₃⁻-N (mg/L)
      0  10 20 30 40 50

V_max = 15 mg N/g DW/day
K_m = 5 mg N/L
```

## 5.5 Model Validation and Sensitivity Analysis

### Model Validation Metrics

```
GOODNESS-OF-FIT MEASURES:

1. COEFFICIENT OF DETERMINATION (R²):
   R² = 1 - SS_res/SS_tot
   Range: 0-1 (higher better)
   Target: >0.8 for good fit

2. ROOT MEAN SQUARE ERROR (RMSE):
   RMSE = √(Σ(Y_obs - Y_pred)²/n)
   Units: Same as Y
   Target: RMSE < 10% of mean

3. MEAN ABSOLUTE PERCENTAGE ERROR (MAPE):
   MAPE = (100/n) × Σ|Y_obs - Y_pred|/Y_obs
   Units: Percentage
   Target: <15%

4. NASH-SUTCLIFFE EFFICIENCY (NSE):
   NSE = 1 - Σ(Y_obs - Y_pred)²/Σ(Y_obs - Ȳ_obs)²
   Range: -∞ to 1
   Interpretation:
   ├── NSE = 1: Perfect fit
   ├── 0.5 < NSE < 1: Good
   ├── 0 < NSE < 0.5: Acceptable
   └── NSE < 0: Model worse than mean
```

### Sensitivity Analysis

```
LOCAL SENSITIVITY ANALYSIS:

S_i = (∂Y/∂X_i) × (X_i/Y)

Where:
S_i = Sensitivity coefficient for parameter i
Y = Model output
X_i = Parameter i

INTERPRETATION:
|S_i| > 1: Highly sensitive
|S_i| ≈ 1: Moderately sensitive
|S_i| < 1: Low sensitivity

EXAMPLE - Fish Growth Model:

┌───────────────┬───────────┬──────────────┐
│   Parameter   │   Value   │ Sensitivity  │
├───────────────┼───────────┼──────────────┤
│ Feed rate     │ 30 g/kg/d │    +1.85     │
│ FCR           │   1.5     │    -1.42     │
│ Temperature   │   28°C    │    +0.95     │
│ DO            │  6 mg/L   │    +0.32     │
│ Stocking dens.│ 20 kg/m³  │    -0.18     │
└───────────────┴───────────┴──────────────┘

Priority for accurate measurement:
Feed rate > FCR > Temperature
```

### Monte Carlo Simulation

```
UNCERTAINTY PROPAGATION:

1. Define parameter distributions
2. Random sampling (n = 1000-10000)
3. Run model for each sample
4. Analyze output distribution

EXAMPLE - Nitrogen Balance Uncertainty:

Input Parameters (mean ± SD):
├── Feed rate: 1000 ± 50 g/day
├── Protein %: 32 ± 2%
├── FCR: 1.5 ± 0.2
└── Plant uptake: 17.5 ± 3 mg N/day

Monte Carlo Output:
N available for plants: 24.3 ± 4.8 mg N/day

Probability Distribution:
Frequency
    ↑
    │       ┌──┐
    │     ┌─┤  ├─┐
    │   ┌─┤ │  │ ├─┐
    │ ┌─┤ │ │  │ │ ├─┐
    └─┴─┴─┴─┴──┴─┴─┴─┴──→ N available
      14 17 20 23 26 29 32 (mg/day)

95% CI: 15.0 - 33.6 mg N/day
```

## Key Takeaways

1. **Mass Balance Foundation** - All models must respect conservation of mass
2. **Dynamic Simulation** - Captures system behavior over time more realistically than steady-state
3. **Parameter Estimation** - Use experimental data to determine model parameters
4. **Validation Essential** - Always validate models against independent data
5. **Sensitivity Analysis** - Identify critical parameters requiring precise measurement

## Practical Application

**Modeling Exercise:**

Develop a simplified aquaponics model with:
- Fish biomass growth (von Bertalanffy)
- TAN excretion and nitrification
- Plant nutrient uptake

Tasks:
1. Write differential equations for all state variables
2. Estimate parameters from literature
3. Implement in Excel, Python, or R
4. Run simulation for 90 days
5. Perform sensitivity analysis on key parameters
6. Validate against provided experimental data

## Further Reading

- Goddek, S., et al. (2016). "Modelling approaches for aquaponics." *Aquaculture Engineering*
- Karimanzira, D., et al. (2016). "Dynamic modeling of the INAPRO aquaponic system"
- Yogev, U., et al. (2016). "Nitrogen mass balance across an aquaponics system"
- Timmons, M.B., & Ebeling, J.M. (2013). *Recirculating Aquaculture* (3rd ed.)

---

**Next Module:** [Module 6: Novel Species Integration Research](module_06_novel_species_research.md)
