# Module 7: Structural Engineering Basics

## Introduction

Structural integrity is non-negotiable in aquaponic facility design. Water is heavy (8.34 lb/gal), and system failures can be catastrophic—flooding facilities, killing livestock, and creating liability. Engineers must calculate loads, select appropriate materials, and design support systems with adequate safety factors.

This module covers structural principles for aquaponic systems: load calculations, beam sizing, foundation design, and safety factors. While not replacing a licensed structural engineer for large projects, this knowledge enables proper preliminary design and communication with structural professionals.

**Duration:** 1 hour

---

## Learning Objectives

By the end of this module, you will be able to:

1. Calculate dead loads, live loads, and dynamic loads
2. Size beams and columns for aquaponic system support
3. Design foundations and floor loading requirements
4. Apply appropriate safety factors
5. Understand building codes and permitting requirements
6. Specify materials for structural applications
7. Know when to engage a licensed structural engineer

---

## 1. Load Calculations

### 1.1 Load Types

**Dead Load (D):** Permanent, static weight
```
Components:
- Water weight (8.34 lb/gal)
- Tank and equipment weight
- Structural members themselves
- Piping, wiring, insulation
- Growing media (if applicable)

Example Fish Tank:
5,000 gallons × 8.34 lb/gal = 41,700 lb
HDPE tank weight: 800 lb
Support structure: 400 lb
Plumbing/accessories: 200 lb
Total Dead Load = 43,100 lb
```

**Live Load (L):** Temporary, variable weight
```
Components:
- Personnel (maintenance access)
- Fish biomass
- Harvested crops (temporary storage)
- Snow load (greenhouses)
- Equipment during service

Typical values:
- Floor access areas: 100-150 lb/ft²
- Maintenance platforms: 50-100 lb/ft²
- Greenhouse snow load: 15-40 lb/ft² (varies by region)
```

**Dynamic Load:** Time-varying forces
```
- Pump vibration
- Water hammer (sudden valve closure)
- Seismic loads (earthquake zones)
- Wind loads (greenhouses, outdoor structures)

Generally addressed with additional safety factor
```

### 1.2 Load Combinations

**Building Code Load Combinations (IBC):**
```
1. D (dead load only)
2. D + L (dead + live)
3. D + 0.75L + 0.75S (dead + reduced live + snow)
4. D + W (dead + wind)
5. D + E (dead + earthquake)

Design for the worst-case combination
```

**Aquaponic-Specific Example:**
```
DWC channel: 4 ft × 80 ft × 0.83 ft deep

Dead Load:
Water: 4 × 80 × 0.83 × 62.4 = 16,550 lb
Channel (HDPE): 500 lb
Rafts and plants: 800 lb
Total D = 17,850 lb

Live Load:
Maintenance access: 100 lb/ft² × 4 ft = 400 lb/ft
Over 80 ft: assume 2 people @ 200 lb each = 400 lb
Total L = 400 lb

Load combination (D + L):
Total = 17,850 + 400 = 18,250 lb
```

---

## 2. Beam Design

### 2.1 Simple Beam Theory

**Bending Moment:**
```
For uniformly distributed load:
M_max = w × L² / 8

Where:
M = Maximum bending moment (lb·ft)
w = Load per unit length (lb/ft)
L = Span length (ft)

For point load at center:
M_max = P × L / 4

Where:
P = Point load (lb)
L = Span length (ft)
```

**Bending Stress:**
```
σ = M × c / I

Where:
σ = Bending stress (psi)
M = Bending moment (lb·in)
c = Distance from neutral axis to outer fiber (in)
I = Moment of inertia (in⁴)

For rectangular section:
I = b × h³ / 12
S = I / c = b × h² / 6 (Section modulus)

Therefore: σ = M / S
```

**Beam Sizing Example:**
```
Design beam to support DWC channel:
Load: 18,250 lb over 80 ft span
Supports at each end (simple beam)

w = 18,250 / 80 = 228 lb/ft

M_max = 228 × 80² / 8 = 182,400 lb·ft = 2,188,800 lb·in

Using steel with allowable stress σ_allow = 24,000 psi
Safety factor built into allowable stress

Required S = M / σ_allow
S = 2,188,800 / 24,000 = 91.2 in³

From steel beam tables:
W12×53 (wide flange): S_x = 95.8 in³ ✓
Weight: 53 lb/ft

Verify deflection:
Maximum deflection = 5 × w × L⁴ / (384 × E × I)
Limit: L/240 = 80 × 12 / 240 = 4 inches maximum

E (steel) = 29,000,000 psi
I (W12×53) = 425 in⁴

δ = 5 × (228/12) × (80×12)⁴ / (384 × 29,000,000 × 425)
δ = 2.9 inches < 4 inches ✓

W12×53 beam is adequate
```

### 2.2 Cantilever Beams

**For overhanging platforms or supports:**
```
M_max = w × L² / 2 (uniformly distributed)
M_max = P × L (point load at end)

Deflection: δ = w × L⁴ / (8 × E × I)

Cantilevers require stronger beams than simple spans
Limit overhang where possible
```

---

## 3. Column Design

### 3.1 Axial Loading

**Column Load Capacity:**
```
P_allow = σ_allow × A

Where:
P_allow = Allowable load (lb)
σ_allow = Allowable compressive stress (psi)
A = Cross-sectional area (in²)

For short columns (L/r < 50):
Use full material strength

For long columns: Must check buckling
```

### 3.2 Euler Buckling

**Critical Buckling Load:**
```
P_critical = π² × E × I / (K × L)²

Where:
E = Modulus of elasticity (psi)
I = Moment of inertia (in⁴)
K = End condition factor
L = Unsupported length (in)

K values:
Both ends pinned: K = 1.0
Both ends fixed: K = 0.5
One fixed, one pinned: K = 0.7
One fixed, one free: K = 2.0
```

**Column Example:**
```
Support load: 10,000 lb
Height: 10 feet
End conditions: Both pinned (K = 1.0)

Try 4" × 4" × 1/4" steel tube:
A = 3.59 in²
I = 7.80 in⁴
r (radius of gyration) = 1.48 in

Slenderness ratio = K × L / r
= 1.0 × 120 / 1.48 = 81

This is a long column, check buckling:
P_critical = π² × 29,000,000 × 7.80 / (1.0 × 120)²
P_critical = 155,700 lb

Apply safety factor of 2.0:
P_allow = 155,700 / 2.0 = 77,850 lb

Required: 10,000 lb ✓
4" × 4" × 1/4" tube is adequate (oversized, could use 3×3)
```

---

## 4. Foundation Design

### 4.1 Soil Bearing Capacity

**Allowable Soil Bearing Pressures:**

| Soil Type | Allowable Pressure (psf) |
|-----------|--------------------------|
| Bedrock | 10,000+ |
| Hardpan, dense gravel | 6,000-8,000 |
| Compact sand-gravel | 3,000-4,000 |
| Loose sand-gravel | 2,000-3,000 |
| Compact clay | 2,000-3,000 |
| Medium clay | 1,500-2,000 |
| Soft clay | 1,000-1,500 |
| Fill (compacted) | 1,500-2,500 |

*Always obtain soil report for projects >$100K*

### 4.2 Footing Design

**Spread Footing Size:**
```
A_footing = Load / Allowable Soil Pressure

Example:
Column load: 50,000 lb
Soil: Compact sand-gravel, 3,500 psf allowable

A_footing = 50,000 / 3,500 = 14.3 ft²

Use square footing:
Side = √14.3 = 3.8 ft
Use 4 ft × 4 ft footing (16 ft²)

Actual pressure: 50,000 / 16 = 3,125 psf ✓

Footing thickness (rule of thumb):
t = overhang dimension
Overhang = (4 - 0.33) / 2 = 1.84 ft
Use 24" thick footing with rebar reinforcement
```

### 4.3 Slab-on-Grade Design

**For aquaponic facilities:**
```
Typical slab specifications:
- Thickness: 6-8 inches
- Concrete: 4,000 psi minimum
- Reinforcement: #4 rebar @ 12" O.C. both ways
- Subbase: 4-6" compacted gravel
- Vapor barrier: 10-mil polyethylene
- Slope: 1/4" per foot to drains

Load capacity:
6" slab on good subgrade: ~250 psf
8" slab on good subgrade: ~400 psf

Tank weight example:
5,000 gallon tank, 8 ft diameter base
Weight: 41,700 + 800 = 42,500 lb
Area: π × 4² = 50.3 ft²
Pressure: 42,500 / 50.3 = 845 psf

Standard 6" slab insufficient
Options:
1. Thicken slab locally to 10-12" under tank
2. Spread load with steel platform
3. Install individual footings
```

---

## 5. Material Properties

### 5.1 Structural Steel

**Common Steel Grades:**

| Grade | Yield Strength (psi) | Allowable Stress (psi)* | Use |
|-------|---------------------|------------------------|-----|
| A36 | 36,000 | 24,000 | General purpose |
| A572-50 | 50,000 | 33,000 | High strength |
| A500-B | 42,000 | 28,000 | Structural tube |

*Allowable = Yield / Safety Factor (typically 1.5)

**Steel Sections:**
```
Wide Flange (W-shapes): I-beams, efficient for bending
Channels (C-shapes): Edge beams, lighter loads
Angles (L-shapes): Bracing, connections
Tubes (HSS): Columns, modern look, easy connections
```

### 5.2 Aluminum

**Advantages:**
- Corrosion resistant (aquaponic environments)
- Lightweight (easier installation)
- Non-toxic (safe for food production)

**Disadvantages:**
- Lower strength than steel (use larger sections)
- Higher cost
- Modulus only 1/3 of steel (more deflection)

**Common Alloys:**
```
6061-T6: General purpose, weldable
6063-T6: Extrusions, moderate strength
7075-T6: High strength (aircraft quality)

Allowable stress (6061-T6): 19,000 psi
Compare to A36 steel: 24,000 psi
```

### 5.3 Reinforced Concrete

**Mix Specifications:**
```
Residential: 2,500-3,000 psi
Commercial: 3,000-4,000 psi
Industrial: 4,000-5,000 psi

Aquaponic facilities: 4,000 psi minimum
High moisture environment requires durable concrete

Additives:
- Air entrainment (freeze-thaw resistance)
- Water reducers (higher strength)
- Accelerators/retarders (temperature control)
```

---

## 6. Safety Factors

### 6.1 Factor of Safety (FOS)

**Definition:**
```
FOS = Failure Load / Working Load
FOS = Ultimate Strength / Allowable Stress

Higher FOS = More conservative design
```

**Typical Safety Factors:**

| Application | FOS | Rationale |
|-------------|-----|-----------|
| Dead load only | 1.5-2.0 | Well-known loading |
| Dead + live load | 2.0-3.0 | Some variability |
| Dynamic loads | 3.0-5.0 | Uncertain magnitude |
| Life safety | 5.0-10.0 | Catastrophic failure consequences |

**Aquaponic-Specific:**
```
Fish tank supports: FOS = 3.0 minimum
- Failure = animal death, flooding, liability
- Conservative design is prudent

Greenhouse structure: FOS = 2.0-2.5
- Per building code
- Accounts for snow, wind loads

Walkways, platforms: FOS = 3.0
- Personnel safety critical
```

### 6.2 Redundancy

**Design Principles:**
```
1. No single point of failure
   - Multiple supports for heavy loads
   - If one fails, others carry load

2. Fail-safe design
   - Failure mode is controlled
   - Containment for water systems

3. Inspection access
   - Allow monitoring of critical elements
   - Enable maintenance without system shutdown
```

---

## 7. Building Codes and Permits

### 7.1 International Building Code (IBC)

**Applicable Sections:**
- Chapter 16: Structural Design
- Chapter 18: Foundations
- Chapter 22: Steel Design
- Chapter 23: Wood Design

**Occupancy Classification:**
```
F-1: Moderate-hazard factory (most aquaponic facilities)
U: Agricultural buildings (some exemptions possible)
S-1: Storage (processing, packaging areas)

Each classification has different requirements
```

### 7.2 Permitting Requirements

**When Professional Engineer Required:**
```
- Buildings >3,600 ft² (varies by jurisdiction)
- Structural modifications to existing buildings
- Loads exceeding original building design
- Any public-accessible structure
- As required by local authority

Cost: $5,000-50,000 depending on project size
Timeline: 4-12 weeks for design + approval
```

**Typical Permit Process:**
```
1. Submit drawings (stamped by PE if required)
2. Submit calculations
3. Building department review (2-6 weeks)
4. Corrections and resubmission
5. Approval and permit issuance
6. Inspections during construction
7. Final inspection and certificate of occupancy
```

---

## Summary

Structural engineering for aquaponic systems requires rigorous analysis:

1. **Calculate Loads**: Dead, live, and dynamic loads with appropriate combinations
2. **Size Members**: Use beam and column formulas with adequate safety factors
3. **Design Foundations**: Match soil bearing capacity and distribute loads
4. **Select Materials**: Consider strength, corrosion resistance, and cost
5. **Apply Safety Factors**: Use conservative values for water-filled systems
6. **Follow Codes**: Comply with IBC and local building codes
7. **Engage Professionals**: Know when to hire licensed structural engineers

Professional structural documentation includes:
- Complete load calculations
- Member sizing with formulas shown
- Foundation design
- Material specifications
- Safety factor justification
- Code compliance statement

---

## Check Your Understanding

1. Calculate the total dead load for a 3,000-gallon circular fish tank (HDPE, 800 lb empty) with support structure (300 lb) and plumbing (150 lb).

2. Design a simple beam to support a uniformly distributed load of 300 lb/ft over a 60-foot span. Calculate maximum moment and required section modulus (allowable stress = 24,000 psi).

3. A column supports 25,000 lb, height = 12 ft, both ends pinned. Check if a 4" × 4" × 1/4" steel tube is adequate (A = 3.59 in², I = 7.80 in⁴, E = 29,000,000 psi). Use FOS = 2.0.

4. Size a square footing for a 40,000 lb load on compact sand-gravel soil (allowable = 3,200 psf).

5. Calculate floor pressure for a 10,000-gallon rectangular tank with base dimensions 10 ft × 12 ft. Is this safe for a 6" concrete slab (capacity = 250 psf)?

6. A DWC channel is 4 ft × 100 ft × 0.83 ft deep. Calculate the water weight and total dead load including 600 lb for structure.

7. What safety factor would you use for the main support beam under a 15,000-gallon fish tank? Justify your choice.

8. A greenhouse roof must support 25 psf snow load over a 3,000 ft² area. Calculate total snow load in pounds.

9. Compare the deflection of a W12×53 steel beam (I = 425 in⁴, E = 29×10⁶ psi) vs. an aluminum beam of same size (E = 10×10⁶ psi) under identical loading.

10. When would you be legally required to hire a licensed structural engineer for an aquaponic facility project? List three scenarios.

---

**Next Module:** Module 8 - Electrical System Design

*"Measure twice, calculate thrice, build once."* - Structural engineering wisdom
