# Module 3: Structural Engineering for CEA Facilities

## Learning Objectives

By the end of this module, you will be able to:
- Calculate dead, live, snow, wind, and seismic loads for CEA structures
- Design greenhouse structural systems and select appropriate materials
- Design vertical farm structural systems including racking
- Perform foundation design calculations for various soil conditions
- Apply structural analysis methods and safety factors

## 3.1 Load Calculations

### Load Types and Combinations

```
STRUCTURAL LOADS ON CEA FACILITIES
===================================

DEAD LOADS (D)
├─ Structure self-weight
├─ Glazing/cladding
├─ Equipment (permanent)
├─ Mechanical systems
└─ Growing systems

LIVE LOADS (L)
├─ Maintenance access
├─ Equipment (temporary)
└─ Walkways/catwalks

SNOW LOADS (S)
├─ Ground snow load
├─ Roof snow load
├─ Drift loads
└─ Sliding snow

WIND LOADS (W)
├─ External pressure
├─ Internal pressure
├─ Uplift
└─ Lateral loads

SEISMIC LOADS (E)
├─ Base shear
├─ Lateral forces
└─ Diaphragm forces

CROP LOADS (C)
├─ Growing medium
├─ Plants/fruit
├─ Water in systems
└─ Harvest equipment
```

### Load Combination Requirements

**Per ASCE 7 and IBC:**

```
REQUIRED LOAD COMBINATIONS
==========================

Basic Combinations (Strength Design):
1. 1.4D
2. 1.2D + 1.6L + 0.5(Lr or S)
3. 1.2D + 1.6(Lr or S) + (L or 0.5W)
4. 1.2D + 1.0W + L + 0.5(Lr or S)
5. 1.2D + 1.0E + L + 0.2S
6. 0.9D + 1.0W
7. 0.9D + 1.0E

For CEA Facilities, Add:
8. 1.2D + 1.6C + 0.5L
9. 1.2D + C + 1.0W

Where:
D  = Dead load
L  = Live load (floor, catwalk)
Lr = Roof live load
S  = Snow load
W  = Wind load
E  = Seismic load
C  = Crop load (CEA-specific)
```

### Dead Load Calculations

**GREENHOUSE DEAD LOADS**

```
┌────────────────────────────────────────────────────┐
│  TYPICAL GREENHOUSE DEAD LOADS                     │
├────────────────────────────────┬───────────────────┤
│ Component                      │ Load (psf)        │
├────────────────────────────────┼───────────────────┤
│ GLAZING                        │                   │
│ - Single glass (3mm)           │ 1.8               │
│ - Double glass (4mm each)      │ 4.5               │
│ - Polycarbonate (8mm)          │ 0.8               │
│ - Polycarbonate (16mm)         │ 1.2               │
│ - Polyethylene (single)        │ 0.1               │
│ - Polyethylene (double)        │ 0.2               │
│                                │                   │
│ STRUCTURE (per sq ft of roof)  │                   │
│ - Light aluminum frame         │ 1.5-2.0           │
│ - Heavy aluminum frame         │ 2.5-3.5           │
│ - Light steel frame            │ 2.0-3.0           │
│ - Heavy steel frame            │ 4.0-6.0           │
│                                │                   │
│ EQUIPMENT                      │                   │
│ - Shade/energy curtains        │ 0.3-0.5           │
│ - Overhead irrigation          │ 0.5-1.0           │
│ - Supplemental lighting        │ 1.0-3.0           │
│ - HVAC ducting                 │ 0.5-1.5           │
│                                │                   │
│ TYPICAL TOTAL DEAD LOAD        │ 6-12 psf          │
└────────────────────────────────┴───────────────────┘

VERTICAL FARM DEAD LOADS (per floor level)
┌────────────────────────────────────────────────────┐
│ Component                      │ Load (psf)        │
├────────────────────────────────┼───────────────────┤
│ - Concrete floor (6")          │ 75                │
│ - Steel decking + concrete     │ 50-60             │
│ - Ceiling/HVAC/MEP             │ 10-15             │
│ - Lighting (LED)               │ 3-8               │
│ - Partition allowance          │ 10-20             │
│                                │                   │
│ TYPICAL TOTAL DEAD LOAD        │ 150-180 psf       │
└────────────────────────────────┴───────────────────┘
```

### Live Load Requirements

**FLOOR LIVE LOADS (per IBC Table 1607.1)**

| Occupancy/Use | Uniform Load (psf) | Concentrated Load (lbs) |
|---------------|-------------------|------------------------|
| Agricultural buildings | 50 | - |
| Manufacturing (light) | 125 | 2,000 |
| Storage (light) | 125 | - |
| Storage (heavy) | 250 | - |
| Catwalks/Platforms | 40 | 300 |
| Offices | 50 | 2,000 |
| Corridors (first floor) | 100 | - |

**GREENHOUSE ROOF LIVE LOADS**

```
Minimum Roof Live Load:
- Greenhouses: 10 psf (for maintenance access)
- May be reduced per ASCE 7 based on:
  * Tributary area
  * Roof slope

Maintenance Load Provisions:
- Provide designated walkways: 40 psf
- Hanging equipment points: Design for specific loads
- Always check local code requirements
```

### Snow Load Calculations

**SNOW LOAD METHODOLOGY (ASCE 7 Chapter 7)**

```
CALCULATION SEQUENCE
====================

Step 1: Determine Ground Snow Load (pg)
- From ASCE 7 Figure 7.2-1 or local authority
- Site-specific study for critical projects

Step 2: Calculate Flat Roof Snow Load (pf)
pf = 0.7 × Ce × Ct × Is × pg

Where:
Ce = Exposure factor (0.7 to 1.2)
Ct = Thermal factor (1.0 to 1.2)
Is = Importance factor (0.8 to 1.2)

Step 3: Calculate Sloped Roof Snow Load (ps)
ps = Cs × pf

Where:
Cs = Roof slope factor (function of slope and surface)

Step 4: Check Minimum Values
ps,min = pg × Is  (for low-slope roofs)
or
ps,min = depends on pg  (see ASCE 7 Table 7.3-2)

Step 5: Consider Special Conditions
- Unbalanced loads
- Sliding snow
- Rain-on-snow surcharge
- Drift loads at parapets/projections
```

**EXAMPLE: GREENHOUSE SNOW LOAD**

```
Given:
Location: Boston, MA
pg = 50 psf (from ASCE 7)
Roof slope: 6:12 (26.6°)
Exposure: Sheltered (trees nearby)
Heating: Maintained at 65°F minimum

Solution:
Step 1: Ground snow load
pg = 50 psf

Step 2: Flat roof snow load
Ce = 1.0 (partially exposed, ASCE 7 Table 7.3-1)
Ct = 1.0 (heated structure > 50°F, Table 7.3-2)
Is = 1.0 (standard importance, Table 1.5-2)
pf = 0.7 × 1.0 × 1.0 × 1.0 × 50 = 35 psf

Step 3: Sloped roof snow load
For glass/plastic surfaces, θ ≥ 30°:
Warm roof: Cs can be reduced
Cold roof: Cs = 1.0 - (θ - 30)/40
26.6° < 30°, so: Cs = 1.0
ps = 1.0 × 35 = 35 psf

Step 4: Minimum load check
ps,min = 20 psf × Is = 20 psf (Table 7.3-2)
Use: ps = 35 psf

Design snow load = 35 psf (balanced)
Also check unbalanced: 1.5ps on one side
```

### Wind Load Calculations

**WIND LOAD PROCESS (ASCE 7 Chapter 27-31)**

```
DIRECTIONAL PROCEDURE FOR BUILDINGS
====================================

Step 1: Determine Basic Wind Speed (V)
- ASCE 7 Figure 26.5-1A through 1D
- Risk category II: 3-second gust
- 700-year return period (typical)

Step 2: Calculate Velocity Pressure (qz)
qz = 0.00256 × Kz × Kzt × Kd × V² (psf)

Where:
Kz  = Velocity pressure exposure coefficient
Kzt = Topographic factor
Kd  = Wind directionality factor
V   = Basic wind speed (mph)

Step 3: Calculate External Pressure
p = qz × GCp (psf)

Where:
GCp = External pressure coefficient

Step 4: Calculate Internal Pressure
pi = qi × GCpi

Where:
GCpi = Internal pressure coefficient
       (+0.18 or -0.18 for enclosed buildings)
       (+0.55 or -0.55 for open buildings)

Step 5: Design Wind Pressure
p = qz(GCp) - qi(GCpi)
```

**GREENHOUSE WIND LOAD CONSIDERATIONS**

```
┌────────────────────────────────────────────────────┐
│  GREENHOUSE WIND PRESSURE ZONES                    │
├────────────────────────────────────────────────────┤
│                                                     │
│         ▲  ▲  ▲  WIND  ▲  ▲  ▲                    │
│         │  │  │   →    │  │  │                    │
│                                                     │
│      ╱─────────────────────────────╲              │
│     ╱ 1  │  2  │  3  │  4  │  5  │ ╲             │
│    ╱─────┼─────┼─────┼─────┼─────┼──╲            │
│   │      │     │     │     │     │   │           │
│   │ (-)  │ (-) │ (±) │ (-) │ (±) │   │           │
│   │      │     │     │     │     │   │           │
│                                                     │
│   Zone 1 (Windward): Positive pressure             │
│   Zone 2: Negative (suction)                       │
│   Zone 3 (Ridge): Can be + or -                    │
│   Zone 4: Negative (suction)                       │
│   Zone 5 (Leeward): Positive or negative           │
│                                                     │
│   CRITICAL CASE: Often Zone 2 (maximum suction)    │
│   Design must resist uplift forces                 │
└────────────────────────────────────────────────────┘

Greenhouse-Specific Factors:
1. High surface area to mass ratio = high wind sensitivity
2. Uplift often governs design
3. Gable ends require special attention
4. Open vents increase internal pressure
5. Adjacent structures create wind tunnels
```

## 3.2 Greenhouse Structural Systems

### Structural Frame Types

**GABLE GREENHOUSE STRUCTURE**

```
┌────────────────────────────────────────────────────┐
│  POST AND TRUSS SYSTEM                             │
├────────────────────────────────────────────────────┤
│                                                     │
│              Ridge                                  │
│                ▲                                    │
│               ╱│╲                                   │
│              ╱ │ ╲  Truss                          │
│             ╱  │  ╲                                 │
│            ╱   │   ╲                                │
│        Purlin──┼────Purlin                         │
│          ╱     │     ╲                              │
│         ╱      │      ╲                             │
│        ╱       │       ╲                            │
│       ╱        │        ╲                           │
│      ▕─────────┼─────────▏                          │
│      │         │         │                          │
│      │  Post   │   Post  │                          │
│      │         │         │                          │
│    ──┴─────────┴─────────┴──  Foundation            │
│                                                     │
│  Typical Spacing:                                   │
│  - Post spacing: 10-12 ft (along length)           │
│  - Bay width: 20-30 ft                             │
│  - Purlin spacing: 4-6 ft                          │
│  - Eave height: 10-16 ft                           │
└────────────────────────────────────────────────────┘
```

**GUTTER-CONNECTED MULTI-BAY**

```
┌────────────────────────────────────────────────────┐
│  VENLO-STYLE GREENHOUSE                            │
├────────────────────────────────────────────────────┤
│                                                     │
│    ╱╲    ╱╲    ╱╲    ╱╲    ╱╲    ╱╲               │
│   ╱  ╲  ╱  ╲  ╱  ╲  ╱  ╲  ╱  ╲  ╱  ╲              │
│  ╱    ╲╱    ╲╱    ╲╱    ╲╱    ╲╱    ╲             │
│ │  1  │  2  │  3  │  4  │  5  │  6  │            │
│ │     │     │     │     │     │     │            │
│ │     │     │     │     │     │     │            │
│ └─────┴─────┴─────┴─────┴─────┴─────┘            │
│   Gutter Gutter Gutter Gutter Gutter              │
│                                                     │
│  Components:                                        │
│  - Roof bars: Support glazing (5-6 ft spacing)     │
│  - Gutter: Collects water, supports bars           │
│  - Columns: 10-12 ft spacing                       │
│  - Truss: Spans across bay width                   │
│                                                     │
│  Standard Bay Widths:                               │
│  - Venlo: 12.8 ft (3.9 m) or 16 ft (4.8 m)        │
│  - Wide-span: 20-40 ft                             │
└────────────────────────────────────────────────────┘
```

### Member Design

**COLUMN DESIGN EXAMPLE**

```
STEEL COLUMN DESIGN
===================

Given:
- Column height: 14 ft
- Column spacing: 12 ft along length, 24 ft across width
- Tributary area: 12 × 24 = 288 sq ft
- Loads:
  * Dead load: 8 psf
  * Snow load: 30 psf
  * Wind uplift: -25 psf

Load Combination 1: 1.2D + 1.6S
P = 1.2(8 psf) + 1.6(30 psf)
P = 9.6 + 48 = 57.6 psf
P = 57.6 psf × 288 sq ft = 16,589 lbs

Try: HSS 3×3×1/4 (Hollow Structural Section)
Properties:
A = 2.59 sq in
rx = ry = 1.15 in
Fy = 46 ksi (A500 Grade B steel)

Check Axial Capacity:
KL/r = (1.0 × 14 ft × 12)/1.15 = 146
φcPn = φcFcrAg

For KL/r = 146:
Fcr ≈ 16 ksi (from AISC tables)
φc = 0.90
φcPn = 0.90 × 16 × 2.59 = 37.3 kips = 37,300 lbs

Capacity (37,300 lbs) > Required (16,589 lbs) ✓
Utilization = 16,589 / 37,300 = 44% ✓

HSS 3×3×1/4 is adequate
```

**TRUSS DESIGN PARAMETERS**

```
Typical Greenhouse Truss Spans and Depths:
┌──────────────────────────────────────────┐
│ Span (ft) │ Depth (in) │ Configuration  │
├───────────┼────────────┼────────────────┤
│ 20-30     │ 24-36      │ Fink, Howe     │
│ 30-40     │ 36-48      │ Howe, Pratt    │
│ 40-60     │ 48-72      │ Warren, Pratt  │
│ 60-80     │ 72-96      │ Warren w/ subs │
│ 80-100    │ 96-120     │ Custom heavy   │
└───────────┴────────────┴────────────────┘

Typical span-to-depth ratio: 10:1 to 15:1
```

## 3.3 Vertical Farm Structural Design

### Rack Structure Systems

**MULTI-TIER GROWING RACK DESIGN**

```
┌────────────────────────────────────────────────────┐
│  6-TIER VERTICAL RACK SYSTEM                       │
├────────────────────────────────────────────────────┤
│                                                     │
│  ┌─────────────────────────────┐ ← Level 6         │
│  │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│   (Lights + plants)│
│  ├─────────────────────────────┤                   │
│  │                             │                   │
│  ├─────────────────────────────┤ ← Level 5         │
│  │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│                   │
│  ├─────────────────────────────┤                   │
│  │                             │                   │
│  ├─────────────────────────────┤ ← Level 4         │
│  │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│                   │
│  ├─────────────────────────────┤                   │
│  │                             │                   │
│  ├─────────────────────────────┤ ← Level 3         │
│  │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│                   │
│  ├─────────────────────────────┤                   │
│  │                             │                   │
│  ├─────────────────────────────┤ ← Level 2         │
│  │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│                   │
│  ├─────────────────────────────┤                   │
│  │                             │                   │
│  ├─────────────────────────────┤ ← Level 1         │
│  │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│                   │
│  ├─────────────────────────────┤                   │
│  ▕▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▏                   │
│   │          │          │                          │
│   Post       Post       Post                       │
│                                                     │
│  Typical Dimensions:                                │
│  - Rack width: 4-8 ft                              │
│  - Rack depth: 2-4 ft                              │
│  - Level spacing: 18-30 in                         │
│  - Total height: 10-14 ft                          │
│  - Post spacing: 4-8 ft                            │
└────────────────────────────────────────────────────┘
```

**RACK LOAD ANALYSIS**

```
LOAD BREAKDOWN PER LEVEL (4 ft × 8 ft = 32 sq ft)
==================================================

Component Loads:
┌────────────────────────────────────────────┐
│ LED Fixtures        │ 1.5-3 lbs/sq ft     │
│ Trays/Channels      │ 1-2 lbs/sq ft       │
│ Growing Medium      │ 3-8 lbs/sq ft       │
│ Water (saturated)   │ 2-4 lbs/sq ft       │
│ Mature Plants       │ 2-6 lbs/sq ft       │
│ Harvest Equipment   │ 2-4 lbs/sq ft       │
├────────────────────────────────────────────┤
│ TOTAL PER LEVEL     │ 11.5-27 lbs/sq ft   │
└────────────────────────────────────────────┘

Conservative Design Load: 30 psf per level
Safety Factor: 1.5-2.0
Design Load: 45-60 psf per level

6-Tier Rack (32 sq ft per level):
Total Load = 60 psf × 32 sq ft × 6 levels = 11,520 lbs

Divided among posts (4 posts):
Per post = 11,520 / 4 = 2,880 lbs

Add impact/dynamic factor: 1.2
Design load per post = 3,456 lbs
```

### Building Structure for Vertical Farms

**STRUCTURAL SYSTEM OPTIONS**

```
1. STEEL FRAME + CONCRETE SLAB
   ┌──────────────────────────────┐
   │  Concrete slab on metal deck │
   ├──────────────────────────────┤
   │  ╱│╲    ╱│╲    ╱│╲    ╱│╲   │
   │ Steel beams and columns      │
   └──────────────────────────────┘
   Pros: Speed, flexibility, long spans
   Cons: Fire protection required

2. CONCRETE FRAME
   ┌──────────────────────────────┐
   │  Concrete flat slab          │
   ├──────────────────────────────┤
   │  │      │      │      │      │
   │  Concrete columns            │
   └──────────────────────────────┘
   Pros: Fire resistance, durability
   Cons: Longer construction, cost

3. HYBRID SYSTEM
   ┌──────────────────────────────┐
   │  Concrete slab               │
   ├──────────────────────────────┤
   │  │  ╱│╲  │  ╱│╲  │  ╱│╲  │  │
   │  Concrete + steel            │
   └──────────────────────────────┘
   Pros: Optimized performance
   Cons: Complex construction
```

## 3.4 Foundation Design

### Foundation Types

```
FOUNDATION SELECTION MATRIX
===========================

┌─────────────────┬──────────────┬─────────────┬──────────────┐
│ Foundation Type │ Soil Bearing │ Structure   │ Cost         │
│                 │ Capacity     │ Type        │ Relative     │
├─────────────────┼──────────────┼─────────────┼──────────────┤
│ Spread Footing  │ >2000 psf    │ Light GH    │ Low          │
│ (isolated)      │              │ columns     │              │
│                 │              │             │              │
│ Continuous      │ >1500 psf    │ Wall/light  │ Low-Medium   │
│ Strip Footing   │              │ frame       │              │
│                 │              │             │              │
│ Mat/Raft        │ <1500 psf    │ Heavy bldg, │ High         │
│ Foundation      │              │ poor soil   │              │
│                 │              │             │              │
│ Pier/Caisson    │ Any (bear on │ Heavy loads,│ Very High    │
│                 │ deeper soil) │ poor surface│              │
│                 │              │             │              │
│ Helical Piles   │ Any          │ Expansive   │ High         │
│                 │              │ soil, fast  │              │
│                 │              │ install     │              │
└─────────────────┴──────────────┴─────────────┴──────────────┘
```

**SPREAD FOOTING DESIGN EXAMPLE**

```
GREENHOUSE COLUMN FOOTING
=========================

Given:
- Column load: 16,500 lbs (from earlier example)
- Soil bearing capacity: 2,500 psf
- Frost depth: 36 inches
- Concrete: f'c = 3,000 psi
- Reinforcing steel: fy = 60,000 psi

Step 1: Determine Footing Size
Required area = Load / Bearing capacity
A_req = 16,500 lbs / 2,500 psf = 6.6 sq ft

Try square footing:
B = √6.6 = 2.57 ft
Use 3 ft × 3 ft footing (A = 9 sq ft) ✓

Actual bearing pressure:
q = 16,500 / 9 = 1,833 psf < 2,500 psf ✓

Step 2: Determine Footing Thickness
Critical section at face of column (12" square)
Distance from face to edge: (36 - 12)/2 = 12 in

Assuming footing thickness h = 12 inches:
Effective depth: d = 12 - 3 (cover) = 9 inches

Moment calculation:
Cantilever length: c = 12 inches
M = q × B × c²/2
M = 1,833 psf × 3 ft × (1 ft)²/2
M = 2,750 lb-ft = 33,000 lb-in

Step 3: Check Reinforcement
φMn ≥ Mu
Assume minimum steel: As,min = 0.0018 × b × h
As,min = 0.0018 × 36 × 12 = 0.78 sq in

Use #4 bars @ 12" o.c. each way (As = 0.79 sq in/ft)

Step 4: Check Shear (One-Way)
Vu = q × B × (cantilever - d)
Vu = 1,833 × 3 × (1.0 - 0.75) = 1,375 lbs

φVc = φ × 2√f'c × b × d
φVc = 0.75 × 2√3000 × 36 × 9 = 26,700 lbs

φVc (26,700 lbs) >> Vu (1,375 lbs) ✓

Final Design:
3 ft × 3 ft × 12 in thick concrete footing
#4 bars @ 12 in o.c. each way, bottom
Minimum depth below grade: 36 inches (frost)
```

### Soil Mechanics Fundamentals

**BEARING CAPACITY CALCULATION**

```
TERZAGHI'S BEARING CAPACITY EQUATION
=====================================

Ultimate Bearing Capacity:
qu = c × Nc + γ × Df × Nq + 0.5 × γ × B × Nγ

Where:
c  = Soil cohesion (psf)
γ  = Soil unit weight (pcf)
Df = Footing depth below grade (ft)
B  = Footing width (ft)
Nc, Nq, Nγ = Bearing capacity factors (function of φ)

Allowable Bearing Capacity:
qa = qu / FS

Where:
FS = Factor of safety (typically 3.0)

Example:
Soil: Sandy clay
c = 500 psf
φ = 25° (friction angle)
γ = 120 pcf
Df = 3 ft
B = 3 ft

Bearing capacity factors (for φ = 25°):
Nc = 20.7
Nq = 10.7
Nγ = 6.8

qu = 500(20.7) + 120(3)(10.7) + 0.5(120)(3)(6.8)
qu = 10,350 + 3,852 + 1,224
qu = 15,426 psf

qa = 15,426 / 3.0 = 5,142 psf

Use: qa = 5,000 psf (rounded conservatively)
```

## 3.5 Structural Analysis and Safety Factors

### Analysis Methods

```
STRUCTURAL ANALYSIS APPROACHES
==============================

1. SIMPLIFIED/PRESCRIPTIVE
   - Use standard details
   - Pre-engineered systems
   - Limited to specific conditions
   - Fastest, least expensive

2. TRIBUTARY AREA METHOD
   - Hand calculations
   - Simple load paths
   - Adequate for typical structures
   - Common for small projects

3. 2D FRAME ANALYSIS
   - Software analysis (RISA, SAP2000)
   - Planar structures
   - Detailed member forces
   - Standard for engineered projects

4. 3D STRUCTURAL ANALYSIS
   - Complete building model
   - Complex geometries
   - Wind/seismic analysis
   - Required for large/complex projects

5. FINITE ELEMENT ANALYSIS (FEA)
   - Detailed stress analysis
   - Complex connections
   - Non-standard geometries
   - Used for specialty components
```

### Safety Factors and Design Philosophy

**LOAD AND RESISTANCE FACTOR DESIGN (LRFD)**

```
Design Requirement:
φRn ≥ Σ(γi × Qi)

Where:
φ    = Resistance factor (< 1.0)
Rn   = Nominal resistance
γi   = Load factor (> 1.0)
Qi   = Load effect

TYPICAL RESISTANCE FACTORS (φ):
┌──────────────────────────────┬─────────┐
│ Structural Element           │ φ       │
├──────────────────────────────┼─────────┤
│ Tension yielding (steel)     │ 0.90    │
│ Tension rupture (steel)      │ 0.75    │
│ Compression (steel)          │ 0.90    │
│ Flexure (steel)              │ 0.90    │
│ Shear (steel)                │ 0.90    │
│                              │         │
│ Flexure (concrete)           │ 0.90    │
│ Shear (concrete)             │ 0.75    │
│ Compression (concrete)       │ 0.65    │
│                              │         │
│ Bearing on soil              │ 1.0*    │
└──────────────────────────────┴─────────┘
*Already factored in geotechnical report

Overall Safety Approach:
- Loads increased (factored up)
- Resistances decreased (factored down)
- Result: Conservative design
- Actual safety factor: Typically 1.5-2.5
```

### Connection Design

**CRITICAL GREENHOUSE CONNECTIONS**

```
1. COLUMN BASE PLATE
   ┌────────────────┐
   │    Column      │
   │     ║║║        │
   │     ║║║        │
   └─────╨╨╨────────┘
   ┌────────────────┐ ← Base plate
   │  ⊕  ⊕  ⊕  ⊕   │
   └────────────────┘
        │  │  │  │
        Anchor bolts
   ═════════════════
   Concrete foundation

   Design Considerations:
   - Moment resistance (if required)
   - Anchor bolt size and spacing
   - Base plate thickness
   - Uplift resistance

2. TRUSS-TO-COLUMN CONNECTION
      ╱│╲
     ╱ │ ╲ Truss
    ╱  │  ╲
   ╱   │   ╲
   ════╪════ Connection plate
       │
       │ Column
       │

   Design Considerations:
   - Eccentric loading
   - Bolt or weld capacity
   - Plate thickness
   - Ease of assembly

3. RACKING-TO-FLOOR CONNECTION
   ┌───────────┐
   │   Rack    │
   │    ║      │
   │    ║      │
   └────╨──────┘
        ⊕ Anchor bolt
   ══════════════ Slab

   Design Considerations:
   - Shear and tension loads
   - Concrete capacity
   - Anchor embedment
   - Corrosion protection
```

## Summary

This module covered the essential structural engineering principles for CEA facilities:
- Load calculations including dead, live, snow, wind, and seismic loads
- Greenhouse structural systems and member design
- Vertical farm structures including rack systems
- Foundation design for various soil conditions
- Structural analysis methods and safety factors

## Key Takeaways

1. **Load combinations are critical** - Multiple load cases must be checked to find the governing design condition.

2. **Wind and snow often govern greenhouse design** - Light weight and large surface area make CEA structures sensitive to these loads.

3. **Rack systems require careful load analysis** - Cumulative loads from multiple tiers create significant forces on posts and foundations.

4. **Soil conditions drive foundation design** - Geotechnical investigation is essential for economical and safe foundation design.

5. **Safety factors provide reliability** - LRFD methodology ensures adequate safety margins through load and resistance factors.

## Next Module

**Module 4: HVAC System Design - Part 1: Fundamentals** will cover psychrometrics, heating and cooling load calculations, ventilation requirements, and dehumidification strategies.
