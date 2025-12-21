# Module 3: LED Lighting System Engineering

## Learning Objectives

By the end of this module, you will be able to:
- Apply photobiological engineering principles to LED system design
- Select appropriate LED technology and specifications for various crops
- Design electrical distribution systems for high-power lighting
- Engineer thermal management solutions for LED systems
- Calculate and optimize light uniformity across growing areas
- Perform energy analysis and ROI calculations for lighting systems

## 1. Photobiological Engineering Fundamentals

### 1.1 Light Measurement and Units

**Key Metrics:**

```
Photometric Units (Human Vision):
- Luminous Flux: lumens (lm)
- Illuminance: lux (lm/m²) or foot-candles (lm/ft²)

Radiometric Units (Plant-Relevant):
- Radiant Flux: watts (W)
- Irradiance: W/m²

Photosynthetic Units (Agriculture):
- Photosynthetic Photon Flux (PPF): μmol/s
- Photosynthetic Photon Flux Density (PPFD): μmol/m²/s
- Daily Light Integral (DLI): mol/m²/day
```

**Conversions and Relationships:**

```
Daily Light Integral (DLI) Calculation:

DLI = PPFD × Photoperiod × 0.0036

Where:
PPFD = Photosynthetic Photon Flux Density (μmol/m²/s)
Photoperiod = Hours of light per day
0.0036 = Conversion factor (3600 seconds/hour ÷ 1,000,000)

Example:
PPFD = 250 μmol/m²/s
Photoperiod = 16 hours

DLI = 250 × 16 × 0.0036
    = 14.4 mol/m²/day
```

### 1.2 Crop-Specific Light Requirements

| Crop Type | PPFD Target (μmol/m²/s) | DLI Target (mol/m²/day) | Photoperiod | Spectrum Notes |
|-----------|-------------------------|-------------------------|-------------|----------------|
| Lettuce | 150-250 | 12-17 | 16-18h | High blue for compactness |
| Basil | 200-350 | 15-20 | 16-18h | Red:Blue 3:1 to 5:1 |
| Tomato | 400-600 | 20-30 | 16-18h | Broad spectrum, far-red |
| Strawberry | 300-500 | 15-25 | 14-16h | Red-dominant, UV-A |
| Microgreens | 100-200 | 8-12 | 12-16h | Blue-rich for nutrition |
| Cannabis | 600-1000 | 30-50 | 12-18h | Spectrum varies by phase |

### 1.3 Spectral Design Considerations

**Photosynthetically Active Radiation (PAR): 400-700nm**

```
Spectral Distribution Effects:

Blue (400-500nm):
- Compact growth, shorter internodes
- Stomatal opening, gas exchange
- Enhanced secondary metabolites
- Higher at 15-25% of total PAR

Green (500-600nm):
- Canopy penetration
- Overall photosynthesis
- Balances morphology
- Typically 20-35% of total PAR

Red (600-700nm):
- Maximum photosynthetic efficiency
- Stem elongation, flowering
- Biomass accumulation
- Typically 40-60% of total PAR

Far-Red (700-750nm):
- Shade avoidance response
- Flowering trigger
- Stem elongation
- Usually 5-15% of total output
```

## 2. LED Technology Selection

### 2.1 LED Chip Types and Characteristics

**Technology Comparison:**

| LED Type | Efficacy (μmol/J) | Cost | Spectrum | Lifespan | Best Application |
|----------|-------------------|------|----------|----------|------------------|
| Mid-power white (3030) | 2.5-3.0 | Low | Broad, white | 50,000h | General leafy greens |
| High-power white (5050) | 2.3-2.7 | Medium | Broad, white | 40,000h | High-PPFD applications |
| Red monochromatic (660nm) | 3.0-3.5 | Low | Narrow red | 60,000h | Supplemental red |
| Blue monochromatic (450nm) | 2.0-2.5 | Low | Narrow blue | 60,000h | Supplemental blue |
| Full-spectrum custom | 2.4-2.8 | High | Tunable | 50,000h | Research, high-value crops |
| Purple/pink blend | 2.6-3.2 | Medium | Red+Blue | 50,000h | Energy-efficient production |

### 2.2 LED Fixture Configurations

**Form Factors:**

```
1. Linear Bar Fixtures
   ═══════════════════════════
   [LED][LED][LED][LED][LED]

   - Length: 0.6-2.4m
   - Power: 40-200W per bar
   - Mounting: Suspended or rack-mounted
   - Best for: Rack systems, uniform coverage

2. Panel/Board Fixtures
   ┌─────────────────────┐
   │ LED LED LED LED LED │
   │ LED LED LED LED LED │
   │ LED LED LED LED LED │
   └─────────────────────┘

   - Size: 600×600mm to 1200×1200mm
   - Power: 100-600W per panel
   - Mounting: Suspended, typically 300-600mm above canopy
   - Best for: Large areas, high uniformity

3. High-Bay Fixtures
        ╔═══════╗
        ║ LEDs  ║
        ║ Array ║
        ╚═══════╝

   - Power: 200-800W per fixture
   - Mounting: Ceiling, 2-6m above plants
   - Best for: Tall crops, greenhouse supplement
```

### 2.3 Driver and Control Selection

**Driver Types:**

```
Constant Current (CC) Drivers:
- Maintains fixed current output
- Voltage varies with LED load
- Most common for LED horticulture
- Dimming: 0-10V, PWM, or DALI

Constant Voltage (CV) Drivers:
- Maintains fixed voltage output
- Current varies with LED load
- Less common in commercial VF
- Used for LED strips and some modules

Key Specifications:
- Output current: Match LED string requirements
- Output voltage range: Must accommodate LED forward voltage
- Efficiency: 90-95% typical, >95% for premium
- Power factor: >0.95 for commercial applications
- THD: <20% (Total Harmonic Distortion)
```

## 3. Electrical System Design

### 3.1 Power Requirements Calculation

**System-Wide Power Calculation:**

```
Total Power = Growing Area × Target PPFD × Conversion Factor

Where:
Conversion Factor = 1 / (LED Efficacy × System Efficiency)

Example:
Growing area = 1,000 m²
Target PPFD = 250 μmol/m²/s
LED efficacy = 2.7 μmol/J
System efficiency = 0.90 (accounts for driver losses, optical losses)

Effective efficacy = 2.7 × 0.90 = 2.43 μmol/J

Total PPF required = 1,000 m² × 250 μmol/m²/s
                   = 250,000 μmol/s

Power required = PPF / Efficacy
               = 250,000 / 2.43
               = 102,881 W
               = 103 kW

Add 10% for future expansion: 113 kW
```

### 3.2 Circuit Design and Distribution

**Voltage Selection:**

```
Common Voltages for LED Systems:
- 120V AC: Small systems, <20kW (residential service)
- 208V AC: Medium systems, 20-100kW (commercial, 3-phase)
- 480V AC: Large systems, >100kW (industrial, most efficient)
- Low voltage DC (24V, 48V): Specialized applications, safety

Recommended: 480V 3-phase for facilities >50kW lighting load
```

**Branch Circuit Sizing:**

```
Per NEC (National Electrical Code):

Circuit Load = Connected Load × Demand Factor × Safety Factor

For lighting:
Demand Factor = 1.0 (continuous load)
Safety Factor = 1.25 (NEC 210.20)

Example for 480V 3-phase circuit:
Available current per circuit = 20A (typical breaker)
Usable current = 20A / 1.25 = 16A
Power per circuit = 16A × 480V × √3 × 0.95 (PF)
                  = 12.6 kW per circuit

For 113 kW total load:
Number of circuits = 113 / 12.6 = 9 circuits minimum

Recommend: 10-12 circuits for flexibility and redundancy
```

**Panel Board Design:**

```
Main Lighting Panel:
┌─────────────────────────┐
│  480V 3-Phase Panel     │
│  Main: 100A             │
├─────────────────────────┤
│ Zone 1 │ 20A │ 3-pole  │  12.6 kW
│ Zone 2 │ 20A │ 3-pole  │  12.6 kW
│ Zone 3 │ 20A │ 3-pole  │  12.6 kW
│ Zone 4 │ 20A │ 3-pole  │  12.6 kW
│ Zone 5 │ 20A │ 3-pole  │  12.6 kW
│ Zone 6 │ 20A │ 3-pole  │  12.6 kW
│ Zone 7 │ 20A │ 3-pole  │  12.6 kW
│ Zone 8 │ 20A │ 3-pole  │  12.6 kW
│ Zone 9 │ 20A │ 3-pole  │  12.6 kW
│ Spare  │ 20A │ 3-pole  │  Future
│ Spare  │ 20A │ 3-pole  │  Future
│ Spare  │ 20A │ 3-pole  │  Future
└─────────────────────────┘

Notes:
- Each zone serves ~100 m² of growing area
- Enables independent control by zone
- Spares allow for future expansion
- Coordinate with HVAC load for total facility power
```

### 3.3 Wiring and Installation

**Wire Sizing:**

```
For 20A, 480V 3-phase circuit:

Ampacity requirement = 20A × 1.25 = 25A

Wire size (THWN-2, 75°C, copper):
- In conduit: #10 AWG (30A rating) ✓
- Free air: #12 AWG (adequate but use #10 for consistency)

Voltage drop calculation:
VD = (2 × L × I × R) / 1000    (for DC or single-phase)
VD = (√3 × L × I × R) / 1000   (for 3-phase)

Where:
L = One-way circuit length (meters)
I = Current (amps)
R = Resistance per km (Ω/km)

Example:
L = 50m
I = 16A (actual load)
R = 3.28 Ω/km (#10 AWG copper)

VD = (√3 × 50 × 16 × 3.28) / 1000
   = 4.54V

Voltage drop % = (4.54 / 480) × 100 = 0.95%

NEC recommends <3% for branch circuits, <5% total
Result: Acceptable ✓
```

## 4. Thermal Management Engineering

### 4.1 LED Heat Generation

**Heat Output Calculation:**

```
Heat Generated = Electrical Input Power × (1 - Light Efficiency)

Where:
Light Efficiency = Fraction of electrical power converted to light

For typical horticultural LED:
Electrical power: 200W
LED efficacy: 2.7 μmol/J
Average photon energy: 4.0 μJ (mid-PAR wavelength)

Light output power = 200W × (2.7 μmol/s/W) × (4.0 μJ/μmol)
                   = 200 × 2.7 × 4.0 / 1,000,000
                   = 0.00216W...

Actually, simpler approach:
LED electrical-to-light efficiency ≈ 40-50%

Heat generated = 200W × (1 - 0.45)
               = 110W as heat

For 103 kW lighting system:
Total heat = 103 kW × 0.55
           = 56.7 kW heat load added to HVAC
```

### 4.2 LED Junction Temperature Management

**Critical Temperatures:**

```
Typical High-Power LED:
- Maximum junction temperature (Tj): 120-150°C
- Recommended operating Tj: 80-100°C
- Ambient temperature in VF: 20-25°C

Thermal resistance path:
Tj = Ta + (P × Rth)

Where:
Tj = Junction temperature
Ta = Ambient temperature
P = Power dissipated per LED
Rth = Total thermal resistance (junction to ambient)

Example:
Ta = 25°C
P = 3W per LED
Target Tj = 85°C
Required Rth = (85 - 25) / 3 = 20 °C/W

Thermal resistance breakdown:
Rth_j-c (junction to case) = 4 °C/W (LED spec)
Rth_c-h (case to heatsink) = 2 °C/W (TIM + interface)
Rth_h-a (heatsink to ambient) = 14 °C/W (heatsink design)
Total = 20 °C/W ✓

Heatsink requirements drive this design parameter
```

### 4.3 Heat Sink Design

**Natural Convection Heat Sink:**

```
Required heat dissipation area:

A = Q / (h × ΔT)

Where:
A = Surface area (m²)
Q = Heat to dissipate (W)
h = Heat transfer coefficient (W/m²·K)
    Natural convection: h ≈ 5-10 W/m²·K
    Forced convection: h ≈ 25-250 W/m²·K
ΔT = Temperature difference (K)

Example for 200W fixture:
Q = 110W heat
ΔT = 60°C (heatsink to air)
h = 8 W/m²·K (natural convection)

A = 110 / (8 × 60)
  = 0.229 m²
  = 2,290 cm²

For typical extrusion heatsink (10cm wide × 60cm long fixture):
Single-sided: 600 cm²
With fins (10 fins, 2cm tall): ~3,000 cm² effective area ✓
```

**Forced Air Cooling:**

```
When natural convection is insufficient:

Option 1: Active heatsink with fans
- Adds 5-15W per fixture for fan power
- Reduces heatsink size by 50-70%
- Requires maintenance (fan replacement)
- Not recommended for 24/7 operation

Option 2: Facility air movement
- Use HVAC airflow across fixtures
- Position fixtures in airstream
- No additional power required
- Preferred for commercial VF

Airflow calculation:
CFM required = (Q × 3.16) / ΔT

Where:
Q = Heat in watts
ΔT = Temperature rise in °F
3.16 = Constant for air

For 110W fixture with 10°F rise:
CFM = (110 × 3.16) / 10 = 34.8 CFM per fixture
```

## 5. Light Uniformity Calculations and Optimization

### 5.1 Uniformity Metrics

**Key Measurements:**

```
Uniformity Ratio (U₀) = Minimum PPFD / Average PPFD

Classification:
U₀ > 0.90: Excellent uniformity
U₀ = 0.80-0.90: Good uniformity
U₀ = 0.70-0.80: Acceptable uniformity
U₀ < 0.70: Poor uniformity (not recommended)

Coefficient of Variation (CV) = (Standard Deviation / Mean) × 100%

Classification:
CV < 10%: Excellent uniformity
CV = 10-15%: Good uniformity
CV = 15-25%: Acceptable uniformity
CV > 25%: Poor uniformity
```

### 5.2 Fixture Spacing Calculation

**Spacing-to-Mounting-Height Ratio:**

```
S/MH Ratio = Fixture Spacing / Mounting Height

General guidelines:
Linear fixtures: S/MH = 1.0 to 1.5
Panel fixtures: S/MH = 1.0 to 1.3
High-bay fixtures: S/MH = 1.2 to 2.0

Example:
Mounting height = 400mm above canopy
Target S/MH = 1.2 for good uniformity

Spacing = 1.2 × 400mm = 480mm

For 2.4m wide rack:
Number of fixture rows = 2,400mm / 480mm = 5 rows
```

### 5.3 Inverse Square Law and Cosine Effect

**Light Intensity at Distance:**

```
PPFD at point = (PPF × cos³(θ)) / (2π × d²)

Where:
PPF = Total photon flux from source (μmol/s)
θ = Angle from fixture normal (degrees)
d = Distance from fixture (m)

Example:
Fixture PPF = 1,000 μmol/s
Distance d = 0.5m
Angle θ = 0° (directly below)

PPFD = (1,000 × cos³(0°)) / (2π × 0.5²)
     = 1,000 / 1.571
     = 637 μmol/m²/s

At θ = 30° (off-center):
PPFD = (1,000 × cos³(30°)) / (2π × 0.5²)
     = (1,000 × 0.650) / 1.571
     = 414 μmol/m²/s

Note: This is for point source; real fixtures have extended sources
requiring integration across the emitting surface
```

### 5.4 Grid Measurement and Uniformity Analysis

**Measurement Grid:**

```
For 2.4m × 10m growing area:

Measurement points on 600mm grid:
┌───┬───┬───┬───┐
│ X │ X │ X │ X │  Row 1
├───┼───┼───┼───┤
│ X │ X │ X │ X │  Row 2
├───┼───┼───┼───┤
│ X │ X │ X │ X │  Row 3
├───┼───┼───┼───┤
│ X │ X │ X │ X │  Row 4
└───┴───┴───┴───┘

Grid: 4 wide × 4 deep = 16 measurement points
Edge points: 0.3m from edge
Spacing: 0.6m between points

Record PPFD at each point:
Point 1: 245 μmol/m²/s
Point 2: 258 μmol/m²/s
...
Point 16: 252 μmol/m²/s

Calculate:
Average = 251 μmol/m²/s
Minimum = 238 μmol/m²/s
Maximum = 265 μmol/m²/s
Std Dev = 7.2 μmol/m²/s

Uniformity = 238 / 251 = 0.948 (excellent)
CV = (7.2 / 251) × 100% = 2.9% (excellent)
```

## 6. Energy Analysis and Optimization

### 6.1 Energy Consumption Calculation

**Annual Energy Use:**

```
Annual kWh = Power × Hours per Day × Days per Year / 1000

For 103 kW lighting system:
Photoperiod = 16 hours/day
Days = 365

Annual kWh = 103 × 16 × 365 / 1000
           = 601,480 kWh/year

At $0.12/kWh:
Annual cost = 601,480 × $0.12 = $72,178
```

### 6.2 Efficacy Optimization

**System Component Efficiencies:**

```
Total System Efficacy = LED Efficacy × Driver Efficiency × Optical Efficiency

Example:
LED chip efficacy: 2.9 μmol/J
Driver efficiency: 95%
Optical efficiency: 92% (lens/reflector losses)

System efficacy = 2.9 × 0.95 × 0.92
                = 2.53 μmol/J

Improvement scenario:
LED chip efficacy: 3.2 μmol/J (newer technology)
Driver efficiency: 96%
Optical efficiency: 94% (better optics)

Improved efficacy = 3.2 × 0.96 × 0.94
                  = 2.89 μmol/J

Energy savings = (1 - 2.53/2.89) × 100% = 12.5%

New annual cost = $72,178 × (1 - 0.125) = $63,156
Annual savings = $9,022
```

### 6.3 Return on Investment (ROI) Analysis

**Comparison: Standard vs. High-Efficiency System**

```
Standard System:
- Efficacy: 2.5 μmol/J
- Capital cost: $180/m² of growing area
- Annual energy: 105 kW average
- Annual energy cost: $73,584 (105 kW × 16h × 365d × $0.12/kWh)

High-Efficiency System:
- Efficacy: 3.0 μmol/J
- Capital cost: $250/m² of growing area
- Annual energy: 87.5 kW average
- Annual energy cost: $61,320

For 1,000 m² facility:
Standard capital: $180,000
High-efficiency capital: $250,000
Additional investment: $70,000

Annual savings: $73,584 - $61,320 = $12,264

Simple payback = $70,000 / $12,264 = 5.7 years

With 2% annual energy price escalation:
NPV over 10 years (5% discount rate): $24,891
IRR: 14.8%

Conclusion: High-efficiency system justified for long-term operation
```

## 7. Dimming and Control Strategies

### 7.1 Dimming Methods

**Control Protocols:**

```
0-10V Dimming:
- Analog signal: 0V = off, 10V = 100%
- Simple, reliable, industry standard
- Limited to dimming only (no other data)
- Maximum cable run: 100m

PWM (Pulse Width Modulation):
- Digital signal: pulse frequency 200Hz-20kHz
- Very precise dimming (0.1% increments)
- Can cause flickering if frequency too low
- Use >1kHz for plant applications

DALI (Digital Addressable Lighting Interface):
- Digital protocol, bidirectional communication
- Individual fixture addressing
- Feedback from fixtures (status, errors)
- Maximum 64 devices per bus

DMX512:
- Entertainment lighting protocol
- Fast updates, complex programming
- 512 channels per universe
- Overkill for most VF applications
```

### 7.2 Zoning and Control Architecture

**Multi-Zone System:**

```
Zone Configuration:
┌──────────────┬──────────────┬──────────────┐
│   Zone 1     │   Zone 2     │   Zone 3     │
│   Germination│   Grow 1     │   Grow 2     │
│   PPFD: 150  │   PPFD: 200  │   PPFD: 250  │
│   16h/day    │   18h/day    │   16h/day    │
└──────────────┴──────────────┴──────────────┘

Control Hierarchy:
Main Controller (PLC or BMS)
    ↓
Lighting Controller (DMX or DALI master)
    ↓
Zone Controllers (one per zone)
    ↓
Individual Fixtures or Fixture Groups

Benefits of multi-zone:
- Optimize DLI for crop stage
- Different photoperiods by area
- Reduce energy for low-light crops
- Maintenance without full shutdown
```

### 7.3 Sunrise/Sunset Ramping

**Progressive Dimming Schedule:**

```
Benefits:
- Reduces electrical inrush current
- Minimizes thermal shock to LEDs
- Mimics natural light transitions
- May improve plant responses

Typical ramp schedule:
Hour 0:00 - Lights off (0%)
Hour 6:00 - Start ramp up
Hour 6:00-6:30 - Ramp 0% to 100% over 30 minutes
Hour 6:30-22:00 - Full intensity (100%)
Hour 22:00-22:30 - Ramp 100% to 0% over 30 minutes
Hour 22:30-6:00 - Lights off (0%)

Ramp curve options:
Linear: Simple, equal steps
Logarithmic: Slow start, faster finish
S-curve: Smooth acceleration/deceleration (preferred)
```

## 8. Design Example: 1,000 m² Leafy Green Facility

### Problem Statement

Design a complete LED lighting system for a commercial leafy green vertical farm:

**Requirements:**
- Growing area: 1,000 m² (10 levels × 100 m² per level)
- Crop: Lettuce, basil, herbs
- Target PPFD: 250 μmol/m²/s
- Photoperiod: 16 hours/day
- Voltage: 480V 3-phase available
- Budget: $200-250/m²

### Solution

**Step 1: Select LED Technology**

```
Technology: Mid-power white LED (3000K) + red supplementation
Fixture type: Linear bars
LED efficacy: 2.8 μmol/J (system)
Power per bar: 80W
PPF per bar: 224 μmol/s
Bar dimensions: 1200mm × 50mm × 40mm
```

**Step 2: Fixture Layout Design**

```
Rack bay: 2.4m × 10m per level
Mounting height: 350mm above plants

Linear bars oriented perpendicular to 10m length:
Bars per level = 10m / 1.2m = 8.3 → use 9 bars
Bar spacing = 10,000mm / 9 = 1,111mm
S/MH ratio = 1,111mm / 350mm = 3.17 (high, check uniformity)

Alternative: 12 bars at closer spacing
Bar spacing = 10,000mm / 12 = 833mm
S/MH ratio = 833mm / 350mm = 2.38 (better)

Use 12 bars per level × 10 levels = 120 bars total
```

**Step 3: PPFD Verification**

```
Total PPF per level = 12 bars × 224 μmol/s = 2,688 μmol/s
Growing area per level = 2.4m × 10m = 24 m²

Average PPFD = 2,688 μmol/s / 24 m²
             = 112 μmol/m²/s

This is too low! Need more fixtures or higher power.

Revised design:
Use 160W bars instead of 80W
PPF per bar = 448 μmol/s
Total PPF = 12 × 448 = 5,376 μmol/s
Average PPFD = 5,376 / 24 = 224 μmol/m²/s

Still slightly low; adjust to 13 bars per level:
Total PPF = 13 × 448 = 5,824 μmol/s
Average PPFD = 5,824 / 24 = 243 μmol/m²/s ✓

With 85% fixture efficiency and uniformity:
Effective PPFD = 243 × 0.85 = 207 μmol/m²/s (below target)

Final design: Use 14 bars per level at 160W
Total PPF = 14 × 448 = 6,272 μmol/s
Average PPFD = 261 μmol/m²/s
Effective PPFD = 222 μmol/m²/s (close to target) ✓
```

**Step 4: Electrical Design**

```
Total fixtures: 14 bars × 10 levels = 140 bars
Power per bar: 160W
Total power: 140 × 160W = 22,400W = 22.4 kW

Circuit design (480V 3-phase):
Power per 20A circuit = 12.6 kW
Number of circuits = 22.4 / 12.6 = 1.78 → 2 circuits

Zone layout:
Zone 1: Levels 1-5 (70 bars, 11.2 kW, 1 circuit)
Zone 2: Levels 6-10 (70 bars, 11.2 kW, 1 circuit)

Panel: 3-phase, 60A main breaker
- Circuit 1: 20A 3-pole breaker
- Circuit 2: 20A 3-pole breaker
- Spare: 20A 3-pole breaker
```

**Step 5: Cost Analysis**

```
Component costs:
160W LED bars: $150 each × 140 = $21,000
Drivers (included in bars): $0
Mounting hardware: $30/bar × 140 = $4,200
Wire and conduit: $15/m × 200m = $3,000
Panel and breakers: $2,500
Installation labor: $50/bar × 140 = $7,000
Controls (basic timer): $1,500
Engineering/design: $3,000
Total capital cost: $42,200

Cost per m²: $42,200 / 1,000 m² = $42.2/m² ✓
(Well within budget)

Annual operating cost:
Energy: 22.4 kW × 16 h/day × 365 days × $0.12/kWh
      = $15,735/year

Maintenance (replace 5% of bars annually):
      = 7 bars × $150 = $1,050/year

Total annual operating cost: $16,785
```

**Step 6: Performance Summary**

```
System Specifications:
- Growing area: 1,000 m²
- Installed power: 22.4 kW
- Average PPFD: 222 μmol/m²/s
- DLI: 12.8 mol/m²/day (16h photoperiod)
- System efficacy: 2.8 μmol/J
- Capital cost: $42,200 ($42.2/m²)
- Annual energy cost: $15,735
- Power density: 22.4 W/m²

Performance Rating: Excellent for leafy greens ✓
```

## 9. Key Takeaways

1. **Use photosynthetic units** - PPFD and DLI are the only relevant metrics for plant growth; lumens and lux are for human vision

2. **System efficacy matters more than LED efficacy** - Drivers, optics, and thermal management all reduce delivered light

3. **Uniformity is critical** - Poor uniformity wastes energy and creates inconsistent crop quality

4. **Thermal management enables performance** - Keeping LEDs cool maintains efficiency and extends lifespan

5. **Electrical design must be proper** - Undersized circuits cause voltage drop, overheating, and safety hazards

6. **Energy is the largest operating cost** - Investing in efficiency pays back over the facility lifetime

7. **Zone control adds flexibility** - Different crops and growth stages benefit from independent light control

## 10. Practical Exercise

**Design Challenge:**

Design LED lighting for a 500 m² facility growing tomatoes:
- Required PPFD: 500 μmol/m²/s
- Photoperiod: 18 hours/day
- Target DLI: 32 mol/m²/day
- Available voltage: 208V 3-phase
- Budget: $350/m²

Deliverables:
1. Fixture selection and layout
2. Electrical load calculations
3. Circuit and panel design
4. Thermal analysis
5. Energy and cost projections

## Additional Resources

- Illuminating Engineering Society (IES) TM-33: Horticultural Lighting
- ASABE Standards for LED Lighting Systems
- LED manufacturer photometric data and IES files
- Dialux or AGi32 lighting simulation software tutorials

## Next Module

**Module 4: Advanced HVAC Design for Vertical Farms** - Learn to design environmental control systems that manage the heat loads from high-intensity LED lighting while maintaining optimal growing conditions.

---

**Module 3 Complete** - Proceed to Module 3 Quiz to test your understanding of LED lighting system engineering.
