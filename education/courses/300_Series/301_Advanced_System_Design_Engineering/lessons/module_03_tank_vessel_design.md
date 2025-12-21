# Module 3: Tank & Vessel Design

## Introduction

Tanks and vessels are the foundation of every aquaponic system. Whether designing fish culture tanks, sumps, biofilter vessels, or settlement chambers, engineers must consider structural integrity, hydraulic performance, material selection, and biological function.

This module covers the engineering principles for designing safe, efficient tanks that will last decades. We'll examine forces on tank walls, calculate required wall thickness, design inlet/outlet configurations, and specify appropriate materials. You'll learn to design tanks that won't fail, leak, or create dead zones.

**Duration:** 1 hour

---

## Learning Objectives

By the end of this module, you will be able to:

1. Calculate hydrostatic forces and required wall thickness
2. Design structurally sound tanks for various applications
3. Specify appropriate materials for tank construction
4. Design inlet and outlet configurations for optimal hydraulic performance
5. Calculate volume and surface area for complex geometries
6. Design tank supports and foundations
7. Specify tank accessories and penetrations

---

## 1. Tank Geometry and Volumes

### 1.1 Common Tank Shapes

**Circular Tanks:**
```
Volume = π × r² × h

Surface Area (bottom) = π × r²
Surface Area (wall) = 2 × π × r × h
Total Surface Area = π × r² + 2 × π × r × h

Where:
r = radius
h = height/depth
```

**Rectangular Tanks:**
```
Volume = L × W × D

Surface Area (bottom) = L × W
Surface Area (walls) = 2 × (L × D) + 2 × (W × D)
Total Surface Area = L × W + 2 × D × (L + W)

Where:
L = length
W = width
D = depth
```

**Conical Bottom Tanks:**
```
Cone Volume = (1/3) × π × r² × h_cone
Cylinder Volume = π × r² × h_cylinder
Total Volume = Cone + Cylinder

Tank Diagram:
     ←─── d ───→
    ┌─────────────┐  ─┐
    │             │   │
    │  Cylinder   │   │ h_cyl
    │             │   │
    ├─────────────┤  ─┤
    │    ╲ │ ╱    │   │ h_cone
    │     ╲│╱     │   │
    └──────●──────┘  ─┘
```

**Partially Filled Horizontal Cylinder:**
```
Volume = r² × L × [arccos((r-h)/r) - (r-h)/r × √(2rh - h²)]

Where:
r = radius
h = fill height
L = length
```

### 1.2 Volume Calculations with Freeboard

**Freeboard:** Space between maximum water level and tank top

```
Working Volume = Total Volume × (1 - Freeboard %)

Recommended Freeboard:
Fish tanks: 15-20%
Sumps: 25-30%
Biofilters: 10-15%
Settlement tanks: 20-25%

Example:
1000-gallon tank with 20% freeboard
Working volume = 1000 × 0.80 = 800 gallons
```

---

## 2. Hydrostatic Pressure and Forces

### 2.1 Hydrostatic Pressure

```
P = ρ × g × h

Where:
P = Pressure (Pa or psi)
ρ = Density of water (1000 kg/m³)
g = Gravitational acceleration (9.81 m/s²)
h = Depth below surface (m)

Simplified (English units):
P (psi) = h (ft) × 0.433

Example:
At 6 ft depth: P = 6 × 0.433 = 2.60 psi
```

### 2.2 Force on Tank Walls

**Rectangular Tank Wall:**
```
Total Force = (1/2) × ρ × g × h² × L

Where:
h = Water depth
L = Wall length

Force Distribution:
F(y) = ρ × g × y × L  (linear increase with depth)

Center of Pressure (from bottom):
y_cp = h/3

Tank Wall Diagram:
┌──────────┐  Water surface (P = 0)
│          │
│    ~     │  Pressure increases
│   ~~~    │  linearly with depth
│  ~~~~~   │
│ ~~~~~~~ ●│← Center of pressure (h/3 from bottom)
│~~~~~~~~~~│
└──────────┘  Maximum pressure
```

**Circular Tank Wall:**
```
Hoop Stress = P × r / t

Where:
P = Internal pressure (psi)
r = Tank radius (inches)
t = Wall thickness (inches)

For water at depth h:
σ_hoop = 0.433 × h × r / t

Vertical Stress (negligible for thin walls):
σ_vertical = 0.433 × h / 2
```

### 2.3 Required Wall Thickness

**Design Equation:**
```
t = P × r / (σ_allow × η)

Where:
t = Wall thickness
P = Design pressure
r = Radius
σ_allow = Allowable stress (material dependent)
η = Joint efficiency (0.85-1.0)

Safety Factor: 2.0-4.0 for aquaculture
```

**Material Allowable Stresses:**

| Material | Allowable Stress (psi) | Modulus (psi) |
|----------|------------------------|---------------|
| HDPE | 500 | 110,000 |
| Fiberglass | 3,000 | 1,000,000 |
| Steel (A36) | 14,400 | 29,000,000 |
| Concrete | 2,500 (compression) | 3,000,000 |
| Polypropylene | 800 | 200,000 |

**Example Calculation:**

```
Design 8 ft diameter × 6 ft deep HDPE fish tank

Pressure at bottom:
P = 6 ft × 0.433 = 2.60 psi

Hoop stress calculation:
r = 48 inches
σ_allow = 500 psi (HDPE)
Safety factor = 3

t = (2.60 × 48) / (500/3 × 0.9)
t = 124.8 / 150 = 0.83 inches

Use 1" wall thickness (next standard size)

Verification:
Actual stress = 2.60 × 48 / 1.0 = 125 psi
Safety factor = 500 / 125 = 4.0 ✓
```

---

## 3. Tank Materials

### 3.1 Material Comparison

| Material | Advantages | Disadvantages | Best Use |
|----------|-----------|---------------|----------|
| **HDPE** | Durable, UV resistant, seamless, FDA approved | Limited sizes, expensive for large tanks | Fish tanks 50-3000 gal |
| **Fiberglass** | Custom shapes, strong, repairable | Gel coat degrades, expensive, heavy | Large custom tanks |
| **Liner/Frame** | Low cost, any size, portable | Liner replacement needed, UV degradation | Very large systems |
| **Concrete** | Permanent, any size, strong | Must be sealed, expensive, not portable | In-ground, >10,000 gal |
| **Steel** | Strong, modular | Requires coating, rust risk, heavy | Industrial scale |
| **IBC Totes** | Cheap, available, 275 gal standard | Limited life, light blocking needed | Hobbyist, temporary |

### 3.2 Material Selection Criteria

**Chemical Compatibility:**
```
pH Range: 6.0-8.5 (typical aquaponics)
TDS: 200-800 ppm
Temperature: 50-85°F

Safe Materials:
✓ HDPE (High-Density Polyethylene)
✓ PP (Polypropylene)
✓ FRP (Fiberglass Reinforced Plastic)
✓ PVC (properly cured)
✓ Epoxy-coated steel
✓ Sealed concrete

Avoid:
✗ Untreated steel (rust toxicity)
✗ Galvanized (zinc toxicity)
✗ Treated wood (preservative toxicity)
✗ Recycled plastic (unknown additives)
```

**UV Resistance:**
```
Outdoor Tanks Require:
- UV stabilizers in plastic
- Opaque/black color (algae prevention)
- UV-resistant coating

Indoor Tanks:
- Light blocking still recommended
- Less critical UV requirements
```

**Thermal Properties:**

| Material | Thermal Conductivity (BTU/hr·ft²·°F/in) | Insulation Value |
|----------|----------------------------------------|------------------|
| HDPE | 3.5 | Poor |
| Fiberglass | 2.0 | Fair |
| Concrete | 12.0 | Very Poor |
| Liner (PE) | 3.0 | Poor |

*All tanks benefit from external insulation in climate-controlled environments*

---

## 4. Tank Hydraulic Design

### 4.1 Inlet Configuration

**Goals:**
- Uniform flow distribution
- No dead zones
- Minimal turbulence at low DO (fish tanks)
- Adequate mixing (biofilters)

**Center Bottom Inlet (Fish Tanks):**
```
Top View:              Side View:
                       ┌─────────────┐
     ╱───────╲        │      ↑↑↑    │
   ╱     ↑     ╲      │     ↑↑↑↑↑   │
  │      ↑      │     │    ↑↑↑↑↑↑↑  │
  │      ●      │     │   ↑↑↑●↑↑↑↑  │← Center inlet
  │    Inlet    │     │  Solids sink│
   ╲           ╱       │   to center │
     ╲───────╱         └──────┬──────┘
                              │
                         Drain valve

Advantages:
- Self-cleaning (Cornell dual-drain)
- Gentle upward flow
- Solids concentration

Design:
Flow velocity at inlet: <1 ft/s
Upward velocity in tank: 0.01-0.03 ft/s
```

**Radial Flow (Clarifiers):**
```
Side View:
              ┌─────────────────┐
              │  ←  Weir        │
    Inlet ──→ │    ╱───────╲    │
              │   │    ↓    │   │
              │   │    ↓    │   │
              │    ╲───┼───╱    │
              └────────┼────────┘
                       │
                    Cone drain

Center feed pipe with radial deflector
Outward flow allows settling
Surface overflow weir
Bottom cone drain for solids
```

**Tangential Inlet (Swirl Separator):**
```
Top View:
        ┌─────────────┐
        │      ↓      │  Outlet (top)
        │    ╱───╲    │
   Inlet│→  │  ↓  │   │  Creates swirl
  ────→│   │  ↓  │   │  Centrifugal force
        │    ╲─●─╱    │  separates solids
        │      ↓      │
        └──────┼──────┘
               ↓
        Bottom drain (solids)
```

### 4.2 Outlet Configuration

**Fish Tank Outlets:**

**Cornell Dual Drain:**
```
                Tank Floor
    ┌───────────────────────────┐
    │        Water Level        │
    │~~~~~~~~~~~~~~~~~~~~~~~~~  │
    │                       ↓   │
    │                      ┌─┐  │
    │                      │ │  │ Outer pipe (main flow)
    │         Dome         │ │  │
    │         ┌─┐          │ │  │
    │        ╱   ╲         │ │  │
    └───────┤     ├────────┼─┼──┘
            │  ●  │        │ │   Inner pipe (solids)
            ╲     ╱        │ │
             ╲───╱         └─┘
              │             │
         Solids drain   Main drain

Advantages:
- Separate solids removal (20% of flow)
- Clean water to biofilter (80% of flow)
- Adjustable split ratio
- Simple maintenance
```

**Bottom Center Drain:**
```
Required drain diameter:
d = √(4Q / πV)

Where:
Q = Flow rate (ft³/s)
V = Drain velocity (ft/s), typically 3-5 ft/s

Example: 100 GPM = 0.223 ft³/s, V = 4 ft/s
d = √(4 × 0.223 / (π × 4)) = 0.27 ft = 3.2"
Use 4" drain
```

### 4.3 Baffles and Flow Distribution

**Baffle Design Principles:**
```
┌────────────────────────────────┐
│  In →   │          │      → Out│
│         │          │           │
│    ┌────┘    ┌─────┘    ┌──    │  Serpentine baffles
│    │         │          │      │  increase retention time
│    └────┐    └─────┐    └──    │
│         │          │           │
└─────────────────────────────────┘

Baffle spacing: 2-4 × water depth
Gap under/over baffles: 1.5-2 × water depth
Velocity through gaps: <0.5 ft/s (fish)
```

**Dead Zone Elimination:**
```
Check using dye test:
- Inject dye at inlet
- Observe flow patterns
- Ensure all areas contacted within 2 × retention time

Computational methods:
- CFD modeling (ANSYS Fluent, OpenFOAM)
- Tracer studies
- Retention time distribution analysis
```

---

## 5. Specialized Tank Designs

### 5.1 Fish Culture Tanks

**Circular Tank Design:**
```
Diameter to Depth Ratio: 4:1 to 10:1
Typical: 6:1

Example: 12 ft diameter × 2 ft depth
Volume = π × 6² × 2 = 226 ft³ = 1,690 gallons

Stocking density: 0.5 lb/gal maximum
Fish capacity = 1,690 × 0.5 = 845 lb

Center drain: 4-6" diameter
Inlet flow: 1-2 tank turnovers/hour
  Flow = 1,690 gal / 60 min = 28 GPM minimum
```

**Rectangular Raceway:**
```
Length to Width Ratio: 10:1 to 30:1
Typical: 20:1

Example: 40 ft L × 2 ft W × 2 ft D
Volume = 40 × 2 × 2 = 160 ft³ = 1,197 gallons

Flow velocity: 0.5-1.5 ft/s
Cross-sectional area = 2 × 2 = 4 ft²
Required flow = Velocity × Area
  = 1.0 ft/s × 4 ft² = 4 ft³/s = 1,795 GPM

High flow, high DO, high energy use
Best for trout, salmon
```

### 5.2 Sump Tanks

**Sump Sizing:**
```
Minimum Volume = System Volume × 0.25

Includes:
- Drain-down volume (if power fails)
- Evaporation reserve (3-5 days)
- Working volume for level fluctuation

Example System:
Fish tanks: 3,000 gallons
Grow beds (drained): 500 gallons
Pipes: 100 gallons
Total system: 3,600 gallons

Sump minimum = 3,600 × 0.25 = 900 gallons
Add drain-down = 500 gallons
Add evaporation = 200 gallons
Total sump = 1,600 gallons minimum
```

**Sump Configuration:**
```
┌──────────┬─────────┬──────────┐
│  Solids  │ Biofilt │  Pump    │
│ Settling │ Backup  │ Chamber  │
│  Zone    │  Media  │          │
├──────┐   │         │    ┌─────┤
│      │   │         │    │Pump │
│ Drain└───┼─────────┼────┘  ●  │
└──────────┴─────────┴──────────┘
    20%        40%       40%

Advantages:
- Redundant biofiltration
- Solids settling
- Quiet pump operation
```

### 5.3 Biofilter Vessels

**Moving Bed Biofilter:**
```
          Gas exchange
               ↓
    ┌──────────●──────────┐
    │ ~~~~~ Air  ~~~~~~~~ │← Water level
    │  ○ ○ ○ ○ ○ ○ ○ ○   │
    │ ○ ○ Media ○ ○ ○ ○  │← 50-60% fill
    │  ○ ○ ○ ○ ○ ○ ○ ○   │
    ├─────────────────────┤
    │     ╲  │  ╱         │
    │      ╲ │ ╱          │
    └───────●──────────┘
        Cone drain

Media volume = Tank volume × 0.50-0.60
Specific surface area: 500-1200 m²/m³
Aeration: 3-5 CFM per ft³ of media
Tank shape: Conical or sloped bottom
Retention time: 20-30 minutes
```

**Fluidized Bed:**
```
    ┌──────────────┐
    │   Outlet     │
    ├──────────────┤← Expansion zone
    │              │
    │  ○  ○  ○  ○  │← Fluidized media
    │   ○  ○  ○  ○ │  (sand 0.5-2mm)
    │ ○  ○  ○  ○  ○│
    ├──────────────┤← Distribution plate
    │   ↑  ↑  ↑  ↑ │
    └──────────────┘
         Inlet

Upflow velocity: 15-30 m/h
Bed expansion: 20-30%
Backwash requirement: Daily
Excellent nitrification
High pressure drop
```

---

## 6. Structural Support

### 6.1 Foundation Requirements

**Point Loads:**
```
Weight = Volume × Density × Safety Factor

Example: 2,000 gallon tank
Weight = 2,000 gal × 8.34 lb/gal × 1.2 = 20,016 lb

Bearing pressure = Weight / Area
If tank base = 8 ft diameter = 50.3 ft²
Pressure = 20,016 / 50.3 = 398 psf

Soil requirements:
Compacted gravel: 3,000 psf ✓
Clay: 1,500 psf ✗ (needs larger footprint)
Concrete slab: 10,000+ psf ✓
```

**Floor Loading:**

| Floor Type | Safe Load (psf) |
|------------|-----------------|
| Residential wood frame | 40 |
| Commercial floor | 100 |
| Reinforced concrete (6") | 250 |
| Industrial slab (8") | 500+ |

```
Always verify building load rating before installation
Tank weight > Floor rating → Requires structural reinforcement
```

### 6.2 Tank Supports

**Leg Support Design:**
```
┌──────────────┐
│     Tank     │
└──┬──┬──┬──┬──┘
   │  │  │  │   4 legs
   ●  ●  ●  ●

Load per leg = Total weight / Number of legs
Leg strength = π × d² × σ_yield / 4

Example: 10,000 lb tank, 4 legs, steel pipe
Load per leg = 10,000 / 4 = 2,500 lb

Using Sch 40 steel pipe, σ_yield = 35,000 psi
2" pipe: A = 1.07 in², Capacity = 37,450 lb ✓
3" pipe: A = 2.23 in², Capacity = 78,050 lb (oversized)

Use 2" steel pipe legs with safety factor of 15
```

**Ring Support (Large Tanks):**
```
Top View:
    ┌─────────────┐
    │             │
    │    Tank     │
    │             │
    └─────────────┘
   ═════════════════  Continuous ring beam

Distributes load evenly
Prevents point stresses
Required for tanks >10 ft diameter
```

---

## 7. Tank Accessories

### 7.1 Level Indicators

**Float Switches:**
```
Application: Automatic level control
Types:
- Normally Open (NO): Closes when water rises
- Normally Closed (NC): Opens when water rises
- Dual-function: Both NO and NC contacts

Installation height:
High level alarm: Maximum fill - 2"
Pump shutoff: Minimum level + 6"
```

**Sight Tubes:**
```
    Tank          Sight Tube
    ┌───┐         ┌─┐
    │ ~ │─────────│~│  Clear tube shows level
    │~~~│─────────│~│
    │~~~│         │~│  Isolation valves allow service
    └───┘         └─┘

Size: 1/2" to 3/4" clear PVC
Materials: PVC, acrylic, polycarbonate
Include shutoff valves for maintenance
```

### 7.2 Bulkhead Fittings

**Sizing:**
```
Bulkhead ID ≥ Pipe ID

Standard sizes:
3/4", 1", 1.5", 2", 3", 4", 6"

Wall thickness requirements:
Minimum: 1/4" for up to 2"
Recommended: 3/8" for 3-4"
Heavy duty: 1/2" for 6"+
```

**Installation:**
```
1. Drill hole = Bulkhead thread OD
2. Smooth edges, remove burrs
3. Install gasket on inside
4. Thread bulkhead through hole
5. Install gasket and nut on outside
6. Hand tighten + 1/4 turn with wrench
7. Allow 24 hours before filling

Do not overtighten (cracks tank wall)
Use silicone only if specified
```

### 7.3 Overflow Protection

**Simple Overflow:**
```
    Tank Wall
    │
    │~~~~~~~  ← Water level
    │ ┌───┐
    │ │   │  Overflow pipe
    │ └─┬─┘
    │   │
    └───┼───
        ↓ To drain

Set 1-2" above normal operating level
Size for maximum flow + 50%
Screen to prevent fish escape
```

**Anti-Siphon Break:**
```
        Air gap
          ↓
    ┌────┐●┌────┐
    │Tank│ │    │ Drain
    │~~~~│ │    │
    └────┴─┴────┘

Prevents back-siphon
Air gap ≥ 2 × pipe diameter
Essential for safety
```

---

## Summary

Tank and vessel design requires integrating multiple engineering disciplines:

1. **Geometry**: Calculate volumes accurately including freeboard
2. **Structural**: Determine wall thickness using hydrostatic pressure and allowable stress
3. **Materials**: Select compatible materials for durability and safety
4. **Hydraulics**: Design inlet/outlet configurations to eliminate dead zones
5. **Specialized Design**: Apply specific principles for fish tanks, sumps, and biofilters
6. **Support**: Ensure adequate foundation and structural support
7. **Accessories**: Specify bulkheads, level controls, and safety features

Professional tank specifications include:
- Detailed drawings with dimensions
- Material specifications
- Structural calculations
- Hydraulic flow patterns
- Accessory schedule
- Installation requirements

---

## Check Your Understanding

1. Calculate the volume of a 10 ft diameter × 4 ft deep circular tank with 20% freeboard. What is the working volume?

2. Determine the required wall thickness for an 8 ft diameter × 6 ft deep HDPE tank (allowable stress = 500 psi, safety factor = 3).

3. A rectangular tank is 6 ft × 4 ft × 3 ft deep. Calculate the total hydrostatic force on the 6 ft long wall.

4. Size a bottom center drain for a fish tank with 150 GPM flow, targeting 4 ft/s drain velocity.

5. Design a sump for a system with 4,000 gallons of fish tanks and 600 gallons of grow beds (which drain when pumps stop). Include evaporation reserve for 5 days @ 2% loss per day.

6. Calculate the floor loading for a 3,000 gallon tank with base dimensions of 8 ft × 8 ft. Is this safe for a commercial concrete floor (250 psf rating)?

7. A 12 ft diameter circular tank needs to be supported on 6 legs. Calculate the load per leg if the tank holds 5,000 gallons.

8. Design an overflow system for a 100 GPM tank. Specify pipe size with 50% safety margin.

9. Sketch a Cornell dual-drain configuration showing inner and outer standpipes with flow percentages.

10. Compare HDPE, fiberglass, and liner tanks for a 3,000-gallon outdoor fish tank. List 3 advantages and 3 disadvantages of each.

---

**Next Module:** Module 4 - Biofilter Engineering

*"The difference between theory and practice is greater in practice than in theory."* - Unknown Engineer
