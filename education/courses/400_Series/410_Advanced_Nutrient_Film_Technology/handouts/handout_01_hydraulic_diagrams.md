# Handout 1: NFT Hydraulic System Diagrams and Calculations

## Complete NFT System Schematic

```
COMPLETE RECIRCULATING NFT SYSTEM:

                    [Fresh Water Input]
                            ↓
    ┌──────────────────────────────────────────────┐
    │         MAIN RESERVOIR (200-500L)            │
    │  ┌─────────────────────────────────────┐    │
    │  │  pH Sensor    EC Sensor             │    │
    │  │  DO Sensor    Temperature Sensor    │    │
    │  │  Level Sensor                       │    │
    │  │                                     │    │
    │  │  [Air Stones]  ○ ○ ○ ○             │    │
    │  │                                     │    │
    │  │  [Heater/Chiller Coil if needed]   │    │
    │  └─────────────────────────────────────┘    │
    │             ↓                                │
    │       [Main Pump]                            │
    └─────────┬────────────────────────────────────┘
              ↓
         [Filter]
              ↓
    [Flow Meter] ──→ [pH Dosing] ──→ [Nutrient Dosing]
              ↓
    ┌─────────┴─────────┐
    │   HEADER PIPE     │  (Large diameter for even distribution)
    │  ═══════╤═════════ │
    └─────────┼──────────┘
         ┌────┼────┬────┼────┬────┼────┐
         ↓    ↓    ↓    ↓    ↓    ↓    ↓
    ┌────────────────────────────────────────┐
    │  GROWING CHANNELS (Multiple parallel)  │
    │                                        │
    │  ▓▓▓  ▓▓▓  ▓▓▓  ▓▓▓  ▓▓▓  ▓▓▓  ▓▓▓   │  Plants
    │  ═══════════════════════════════════>  │  Film flow (slope 1%)
    │                                        │
    │  [Inline sensors: Temp, DO optional]  │
    └────────────┬───────────────────────────┘
                 ↓
    ┌────────────────────────────┐
    │   COLLECTION MANIFOLD      │
    │   ═══════════════════════   │
    └────────────┬────────────────┘
                 ↓
         [Return to Reservoir]
```

## Detailed Channel Cross-Section

```
CHANNEL INTERNAL GEOMETRY:

Side View:
           Net Pot
             ↓
    ┌────────○────────┐
    │   ┌────┴────┐   │  Channel wall (50-75mm height)
    │   │ ▓▓▓▓▓▓▓ │   │  Plant crown (kept dry)
    │   │         │   │
    │   │  Root   │   │
    │   │  Mass   │   │
    │   │ ║║║║║║║ │   │
    ├───┴─────────┴───┤
    │ ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈ │  Nutrient film (1-3mm depth)
    └───────────────────┘
    ↓  Slope 1%


Cross-Section (End View):
    ┌─────────────────┐
    │                 │  100mm width (standard)
    │  ≈≈≈≈≈≈≈≈≈≈≈≈≈  │  Film (2mm typical)
    │  ╚═════════════╝ │
    └─────────────────┘
         ↑     ↑
         2mm   Base


Multi-Plant Cross-Section:
    ○     ○     ○     ○     ○   Net pots (20-25cm spacing)
    │     │     │     │     │
    ║║   ║║║   ║║║   ║║║   ║║  Root systems
    ║║   ║║║   ║║║   ║║║   ║║
    ─────────────────────────   Channel surface
    ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈  Nutrient film
```

## Hydraulic Calculation Examples

### Example 1: Flow Rate Calculation Using Manning's Equation

**Given:**
- Channel width (b): 0.10 m
- Film depth (h): 0.002 m
- Slope (S): 0.01 (1%)
- Manning's n: 0.012 (smooth PVC)

**Step 1: Calculate cross-sectional area (A)**
```
A = b × h = 0.10 × 0.002 = 0.0002 m²
```

**Step 2: Calculate wetted perimeter (P)**
```
P = b + 2h = 0.10 + 2(0.002) = 0.104 m
```

**Step 3: Calculate hydraulic radius (R)**
```
R = A / P = 0.0002 / 0.104 = 0.00192 m
```

**Step 4: Apply Manning's equation**
```
Q = (1/n) × A × R^(2/3) × S^(1/2)
Q = (1/0.012) × 0.0002 × (0.00192)^(2/3) × (0.01)^(1/2)
Q = 83.33 × 0.0002 × 0.0159 × 0.10
Q = 0.0000265 m³/s
```

**Step 5: Convert to L/min**
```
Q = 0.0000265 m³/s × 1000 L/m³ × 60 s/min
Q = 1.59 L/min
```

**Conclusion:** This configuration delivers approximately 1.6 L/min, ideal for NFT.

---

### Example 2: Pump Sizing for Multi-Channel System

**System specifications:**
- 30 channels
- Flow per channel: 1.5 L/min
- Vertical lift: 2.0 m
- Pipe length: 25 m
- Pipe diameter: 50 mm
- Channel length: 10 m
- Channel slope: 1%

**Step 1: Total flow rate**
```
Q_total = 30 × 1.5 = 45 L/min = 0.00075 m³/s
```

**Step 2: Static head**
```
H_static = 2.0 m (vertical lift) + 0.10 m (channel drop)
H_static = 2.10 m
```

**Step 3: Friction losses (Hazen-Williams equation)**
```
H_f = (10.67 × L × Q^1.85) / (C^1.85 × d^4.87)

Where:
L = 25 m
Q = 0.00075 m³/s
C = 150 (PVC)
d = 0.05 m

H_f = (10.67 × 25 × 0.00075^1.85) / (150^1.85 × 0.05^4.87)
H_f = 0.32 m
```

**Step 4: Total Dynamic Head (TDH)**
```
TDH = H_static + H_f + safety margin (20%)
TDH = (2.10 + 0.32) × 1.2
TDH = 2.90 m
```

**Step 5: Pump power**
```
P = (ρ × g × Q × TDH) / η

Where:
ρ = 1000 kg/m³
g = 9.81 m/s²
Q = 0.00075 m³/s
TDH = 2.90 m
η = 0.60 (pump efficiency)

P = (1000 × 9.81 × 0.00075 × 2.90) / 0.60
P = 35.5 W
```

**Pump selection:** 50-75W pump rated for 45 L/min @ 3.0m head

---

### Example 3: Dissolved Oxygen Budget

**System:**
- 100 mature lettuce plants
- Reservoir: 200 L
- Initial DO: 8.5 mg/L
- Target minimum DO: 6.0 mg/L

**Oxygen consumption:**
```
OCR = 100 plants × 0.75 mg O₂/plant/hr = 75 mg O₂/hr
```

**Available oxygen:**
```
O₂_available = (8.5 - 6.0) mg/L × 200 L = 500 mg
```

**Time to critical threshold (without replenishment):**
```
t = O₂_available / OCR = 500 mg / 75 mg/hr = 6.67 hours
```

**Required aeration rate:**
```
Must supply ≥75 mg O₂/hr continuously

Using air stones with 1.5% efficiency:
Air flow = 75 mg/hr / (0.015 × 0.30 g O₂/L × 1000 mg/g)
         = 16.7 L/hr = 0.28 L/min

Practical: Use 2-3 air stones @ 0.5 L/min each for safety
```

---

## Flow Distribution Design

### Header Pipe Sizing

**Principle:** Header must maintain constant pressure along length

```
HEADER PRESSURE DROP:

Good Design (minimal pressure drop):
    ┌────────────────────────────┐
    │    Pressure uniform        │
    │  ●────●────●────●────●    │  Takeoffs
    ╞══════════════════════════╡  Large header
    └────────────────────────────┘

Poor Design (excessive pressure drop):
    ┌────────────────────────────┐
    │    Pressure decreases  →   │
    │  ●────●────●────●────●    │  Unequal flow
    ├══════════════════════════┤  Small header
    └────────────────────────────┘

Rule of thumb:
D_header ≥ 3 × √(Q_total / v_max)

Example:
Q_total = 45 L/min = 0.00075 m³/s
v_max = 1.5 m/s

D_header ≥ 3 × √(0.00075 / 1.5)
        ≥ 3 × 0.0224
        ≥ 0.067 m = 67 mm

Use 75mm (3") header pipe minimum
```

### Flow Balancing with Orifices

```
ORIFICE FLOW EQUATION:

Q = C_d × A × √(2gh)

To achieve 1.5 L/min per channel with 0.5m pressure head:

Q = 1.5 L/min = 0.000025 m³/s
h = 0.5 m
C_d = 0.62 (sharp-edged orifice)
g = 9.81 m/s²

Solve for A:
A = Q / (C_d × √(2gh))
A = 0.000025 / (0.62 × √(2 × 9.81 × 0.5))
A = 0.000025 / (0.62 × 3.13)
A = 0.0000129 m² = 12.9 mm²

Orifice diameter:
d = √(4A/π) = √(4 × 12.9 / 3.14) = 4.05 mm

Use 4mm orifice plates at each channel inlet
```

---

## Troubleshooting Hydraulic Issues

### Common Problems and Diagnostic Flowchart

```
NO FLOW OR LOW FLOW:

Check pump operation
    ├─> Not running? → Check power, breaker, wiring
    ├─> Running but no flow? → Check impeller, blockage
    └─> Flow reduced? → Continue...

Check for blockages
    ├─> Inlet filter clogged? → Clean/replace filter
    ├─> Channel roots blocking? → Thin root mat
    └─> Valves closed? → Open valves

Check for leaks
    ├─> Visible leaks? → Repair fittings/pipes
    ├─> Air in lines? → Bleed air from high points
    └─> Pump losing prime? → Check seals, valves


UNEVEN FLOW BETWEEN CHANNELS:

Measure flow in multiple channels
    ├─> All low? → System-wide issue (pump, header)
    ├─> Some high, some low? → Continue...
    └─> One very different? → Local blockage

Check header pressure uniformity
    ├─> Pressure drops along header? → Header too small
    ├─> Pressure uniform? → Continue...
    └─> No pressure measurement? → Install gauge

Check individual channel factors
    ├─> Root mat density varies? → Thin excessive mats
    ├─> Channel slope varies? → Verify and adjust slope
    ├─> Orifices missing/different? → Standardize orifices
    └─> Elevation differences? → Level benches
```

---

## Performance Monitoring

### Key Hydraulic Performance Indicators

```
PARAMETER MONITORING LOCATIONS:

                Header Pressure
                      ↓
    [Main pump] → [P_gauge] → [Header] → Channels
         ↓                                   ↓
    Flow meter                          Flow meters
    (total Q)                           (per channel)
                                            ↓
                                     Monitor gradient:
                                     - Inlet DO: ____
                                     - Outlet DO: ____
                                     - ΔDO: <2 mg/L

Target values:
- Header pressure: 0.3-0.8 bar (stable)
- Total flow: Within 5% of design
- Individual channels: Within 10% of each other
- DO gradient: <2 mg/L inlet to outlet
- Temperature rise: <2°C inlet to outlet
```

---

## Design Optimization Tips

**1. Minimize pressure losses:**
- Use smooth-bore piping
- Avoid sharp bends (use long-radius elbows)
- Minimize fittings and valves
- Size pipes generously (larger is better for headers)

**2. Ensure uniform distribution:**
- Oversized header pipe (3-5× channel diameter)
- Pressure-compensating emitters or orifices
- Regular flow verification and balancing
- Monitor differential pressure across system

**3. Facilitate maintenance:**
- Install isolation valves for each channel bank
- Provide drain points at low spots
- Include air vents at high points
- Easy filter access
- Clear labeling of all components

**4. Plan for expansion:**
- Size pump and header for 120-150% of initial needs
- Modular channel additions
- Extra capacity in reservoir
- Space for additional equipment

---

*This handout provides essential hydraulic design information. Keep for reference during system design and troubleshooting.*

*EcoFusion Academy - Course 410*
