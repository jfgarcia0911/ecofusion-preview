# Module 6: Racking and Growing System Design

## Learning Objectives

- Design modular racking systems for vertical farming
- Engineer growing channels and trays for optimal performance
- Compare mobile vs. stationary system designs
- Calculate load distribution and safety factors
- Design for accessibility and maintenance

## 1. Racking System Types

### 1.1 Fixed Multi-Tier Racking

```
Standard Configuration:
┌────────────┬────────────┬────────────┐ Level 8
├────────────┼────────────┼────────────┤ Level 7
├────────────┼────────────┼────────────┤ Level 6
├────────────┼────────────┼────────────┤ Level 5
├────────────┼────────────┼────────────┤ Level 4
├────────────┼────────────┼────────────┤ Level 3
├────────────┼────────────┼────────────┤ Level 2
└────────────┴────────────┴────────────┘ Level 1

Specifications:
- Levels: 4-12 typical
- Vertical spacing: 350-600mm
- Bay width: 1.2-2.4m
- Bay depth: 6-12m
- Load capacity: 200-500 kg/m² per level
```

**Design Calculations:**
```
Post Loading (8-level system):
Bay: 2.4m × 10m = 24 m²
Load per level: 300 kg/m²
Total weight: 24 × 300 × 8 = 57,600 kg
Posts per bay: 6
Load per post: 57,600/6 = 9,600 kg

Required: 100mm × 100mm × 4mm SHS steel
Capacity: 15,000 kg (safety factor 1.56) ✓
```

### 1.2 Mobile Racking Systems

**Lateral移動 Systems:**
```
Track Layout (Top View):
═══╪═══╪═══╪═══╪═══╪═══  Track rails
   │   │   │   │   │
[Rack][Rack][Rack][Rack]  Mobile units

Aisle created by moving units apart
Space savings: 40-60% compared to fixed aisles

Components:
- Floor tracks: Steel rails embedded in slab
- Carriage system: Heavy-duty wheels (500kg capacity each)
- Drive mechanism: Manual crank or electric motor
- Safety: Anti-tip stabilizers, motion sensors

Advantages:
+ Maximum space utilization
+ Reduced aisle requirements
+ Flexible reconfiguration

Disadvantages:
- Higher cost ($200-400/m² vs. $80-150 for fixed)
- Complex installation
- Maintenance requirements
- Slower access times
```

### 1.3 Vertical Carousel Systems

```
Rotary Configuration:
     [Motor/Drive]
          ║
    ┌─────╨─────┐
    │   ╱│╲     │   Rotating carousel
    │  ╱ │ ╲    │   brings levels to operator
    │ ╱  │  ╲   │
    │╱   │   ╲  │
    └─────────┘
   [Operator Station]

Specifications:
- Diameter: 3-8m
- Height: 2-6m
- Levels: 10-40 trays
- Rotation time: 30-120 seconds
- Load per tray: 20-50 kg

Application: Propagation, microgreens, high-value crops
Cost: $15,000-50,000 per unit
```

## 2. Growing Channel Design

### 2.1 NFT Channel Engineering

**Channel Profile:**
```
Cross-Section:
    ┌────────────┐
    │            │  Width: 75-150mm
    │            │  Depth: 30-50mm
    │            │  Wall thickness: 2-3mm
    └────┘└──────┘  Film depth: 2-5mm

Material: Food-grade PVC or ABS
Color: White (reflects light) or black (prevents algae)
UV stabilized: Required for longevity

Flow Characteristics:
Slope: 1:100 to 1:50 (1-2%)
Flow rate: 1-2 L/min per channel
Velocity: 0.02-0.05 m/s
Reynolds number: <500 (laminar flow)

Channel Length Limits:
Maximum: 15-20m (nutrient depletion, DO reduction)
Optimal: 8-12m (uniform nutrient delivery)
```

**Nutrient Film Dynamics:**
```
Film thickness calculation:

h = (3μQ/ρgw sin θ)^(1/3)

Where:
h = Film thickness (m)
μ = Dynamic viscosity (0.001 Pa·s for water)
Q = Flow rate per unit width (m²/s)
ρ = Density (1000 kg/m³)
g = Gravity (9.81 m/s²)
w = Channel width (m)
θ = Channel angle

Example:
Q = 0.00002 m³/s (1.2 L/min)
w = 0.10 m (100mm channel)
θ = 1° (1:60 slope)

h = (3 × 0.001 × 0.0002 / (1000 × 9.81 × 0.10 × sin(1°)))^(1/3)
  ≈ 0.003 m = 3mm film thickness ✓
```

### 2.2 DWC Raft System Design

**Raft Specifications:**
```
Standard Raft:
Dimensions: 1,200mm × 600mm × 25mm
Material: Expanded polystyrene (EPS) or extruded polystyrene (XPS)
Density: 30-35 kg/m³
Buoyancy: Supports 15-20 kg of plants
Net cup holes: 50mm diameter, 200mm spacing
Holes per raft: 15-18

Pool Design:
Width: 1,200mm (matches raft)
Length: 12-24m (multiple rafts end-to-end)
Depth: 200-250mm (water level)
Liner: EPDM or PVC (food-grade)
Bottom slope: Level or <0.5% slope

Water Volume:
1.2m × 12m × 0.2m = 2.88 m³ = 2,880 L per channel

Aeration:
DO requirement: >6 mg/L
Air stones: 1 per 2m of length
Air pump: 30 L/min per 1,000L of water
```

### 2.3 Vertical Tower Systems

**Tower Design:**
```
ZipGrow-Style Tower:

    ║ Support
    ║ Structure
[═══╬═══]
[═══╬═══]  Growing pockets
[═══╬═══]  both sides
[═══╬═══]
[═══╬═══]
[═══╬═══]
    ║

Height: 1.5-2.5m
Width: 150-200mm
Pocket spacing: 150mm vertical
Growing media: Perlite, coco coir, or rockwool
Water delivery: Top-fed, trickle down
Drainage: Bottom collection

Capacity:
20-30 plants per tower
Footprint: 0.15 × 0.20 = 0.03 m²
Plant density: 667-1,000 plants/m²

Irrigation:
Flow rate: 0.5-1.0 L/min per tower
Cycle: 5-10 min on, 10-15 min off
Daily water: 10-15 L per tower
```

## 3. Material Selection

### 3.1 Growing System Materials

| Material | Advantages | Disadvantages | Cost Factor | Best Use |
|----------|-----------|---------------|-------------|----------|
| Food-grade PVC | Low cost, durable, easy to fabricate | Can leach plasticizers, not UV stable | 1.0× | NFT channels, pipes |
| ABS Plastic | Strong, UV stable, food-safe | More expensive than PVC | 1.3× | UV-exposed components |
| Polypropylene | Chemical resistant, flexible, food-safe | Lower strength | 1.1× | Trays, containers |
| HDPE | Excellent chemical resistance, durable | Harder to bond/weld | 1.2× | Tanks, large containers |
| Stainless Steel 304 | Corrosion resistant, long life, cleanable | High cost, heavy | 4.0× | Structural, food contact |
| Aluminum | Lightweight, corrosion resistant | Can react with acids | 2.5× | Frames, supports |

### 3.2 Surface Treatments

**Anti-Microbial Coatings:**
- Silver ion embedded plastics
- Copper-infused surfaces
- Reduces biofilm formation
- Cost premium: 15-25%

**UV Stabilization:**
- Essential for any light-exposed plastic
- Prevents degradation and brittleness
- Extends life from 2-3 years to 10+ years
- Minimal cost impact (<5%)

## 4. Modularity and Standardization

### 4.1 Modular Design Principles

**Standard Module Sizes:**
```
Base Unit: 1.2m × 2.4m
- Matches standard material sheets
- Easy handling (2-person lift when empty)
- Standardized connections
- Stackable and interchangeable

Module Connectivity:
┌────┐┌────┐┌────┐
│ A  ││ B  ││ C  │  Horizontal expansion
└────┘└────┘└────┘

  ┌────┐
  │ A  │
  ├────┤
  │ B  │  Vertical stacking
  ├────┤
  │ C  │
  └────┘

Connection methods:
- Bolt-together (tool required, secure)
- Quick-connect clips (tool-free, faster)
- Slide-and-lock (best for mobile systems)
```

### 4.2 Standardized Components

**Inventory Reduction Strategy:**
```
Instead of custom per level:
- Standard beam lengths: 1.2m, 2.4m, 3.0m only
- Standard posts: 3.2m (cut to length on-site)
- Standard brackets: Universal fit
- Standard growing trays: 3 sizes total

Benefits:
- Reduced inventory: 70% fewer SKUs
- Lower costs: Bulk purchasing
- Easier maintenance: Common spare parts
- Faster installation: Familiar components

Example cost savings:
Custom approach: 50 unique parts, $180/m²
Standardized approach: 12 unique parts, $135/m²
Savings: 25% reduction in materials cost
```

## 5. Accessibility and Ergonomics

### 5.1 Reach and Access Design

**Anthropometric Considerations:**
```
Human Factors:

Comfortable reach (standing):
- Forward: 600mm
- Upward: 2,100mm from floor
- Downward: 750mm from floor

Optimal working height:
- Light work (planting): 900-1,050mm
- Harvesting: 750-1,200mm
- Inspection: Eye level ±300mm

Aisle Width Requirements:
- Single person: 900mm minimum, 1,200mm comfortable
- Two people passing: 1,500mm
- Cart access: 1,800mm minimum
- Wheelchair accessible: 1,500mm minimum

Level Access Strategy:
Bottom 2 levels: Accessible from ground
Middle 4 levels: Accessible from platforms
Top 2 levels: Accessible from rolling ladder or lift

Platform Design:
- Width: 1,200mm minimum
- Railings: 1,100mm height, toe boards
- Surface: Non-slip grating
- Load capacity: 500 kg/m² (personnel + carts)
```

### 5.2 Maintenance Access

**Serviceability Features:**
```
Essential Access Points:

1. LED Fixtures:
   - Removable from below or side
   - No tools required (preferred)
   - Can service without removing plants

2. Irrigation Lines:
   - Accessible connection points
   - Shut-off valves every 10m
   - Clear labeling

3. Sensors and Controls:
   - Mounted at eye level when possible
   - Clear sight lines for visual inspection
   - Removable for calibration

4. Structural Connections:
   - Accessible bolt heads
   - Standardized tools (minimize variety)
   - Color-coded by function

Maintenance Pathways:
Reserve 10% of facility for access aisles
Plan for equipment movement (pumps, ballasts)
Emergency egress routes must stay clear
```

## 6. Safety and Compliance

### 6.1 Safety Factors

**Structural Safety:**
```
Design Load Factors:

Dead Load: Factor = 1.2
Live Load: Factor = 1.6
Seismic: Factor per code (varies by location)

Design Capacity = Calculated Load × Safety Factors

Example:
Calculated load: 300 kg/m²
Dead load portion: 50 kg/m²
Live load portion: 250 kg/m²

Design load = (50 × 1.2) + (250 × 1.6)
            = 60 + 400 = 460 kg/m²

Additional safety margin: 1.15× for commercial agriculture
Final design capacity: 460 × 1.15 = 529 kg/m²
Use: 550 kg/m² for design basis
```

### 6.2 Regulatory Compliance

**Building Code Requirements:**
- Structural certification by PE required for >4 levels
- Fire-rated materials for certain applications
- Emergency egress must be maintained
- Platform railings and fall protection
- Electrical compliance (NEC, local codes)

**Food Safety Requirements:**
- FDA Food Safety Modernization Act (FSMA)
- Materials: Food contact safe (NSF certified preferred)
- Cleanability: Smooth, non-porous surfaces
- Drainage: Prevents standing water
- Pest exclusion: Sealed connections, no harboring points

## 7. Case Study: 1,000 m² Racking System Design

**Project Requirements:**
- Growing area: 1,000 m² (8 levels × 125 m² per level)
- System: NFT channels
- Budget: $150,000 for racking
- Accessibility: Full maintenance access required

**Design Solution:**
```
Configuration:
- Fixed racking: 10 bays
- Bay size: 2.4m wide × 12m long
- Levels: 8 per bay
- Vertical spacing: 450mm
- Total height: 3.6m

Structural:
- Posts: 100×100×4mm SHS @ 2.4m spacing
- Beams: C-channel 150×75mm
- Decking: Wire mesh, 250 kg/m² capacity
- Anchoring: M16 wedge anchors, 4 per post

Growing Channels:
- Profile: 100mm wide × 40mm deep
- Length: 12m per channel
- Channels per level: 20 (2.4m width / 0.12m spacing)
- Total channels: 10 bays × 8 levels × 20 = 1,600 channels

Costs:
- Structural steel: $45,000
- Growing channels: $32,000 (1,600 × $20)
- Decking and supports: $18,000
- LED mounting hardware: $12,000
- Installation labor: $28,000
- Engineering and design: $8,000
- Contingency (10%): $14,300
Total: $157,300 ($157/m²)

Performance:
- Growing area: 1,000 m²
- Plant sites: 128,000 (80 plants/m²)
- Access: 1.5m aisles between bays
- Maintenance: Side access to all levels
```

## 8. Key Takeaways

1. **Modular design reduces costs** - Standardization enables bulk purchasing and simplified inventory

2. **Material selection impacts longevity** - Food-safe, corrosion-resistant materials cost more initially but last longer

3. **Accessibility must be designed in** - Retrofitting access is expensive and often inadequate

4. **Safety factors are not negotiable** - Over-design is cheaper than catastrophic failure

5. **Growing system drives racking requirements** - NFT, DWC, and towers each need specific support

6. **Ergonomics improve productivity** - Well-designed access reduces labor time and injury

7. **Compliance is complex** - Engage structural engineers and food safety consultants early

## 9. Practical Exercise

Design racking system for:
- 500 m² vertical farm
- 6 levels of DWC rafts
- 2.4m ceiling height limit per level
- Must support 400 kg/m² per level
- Budget: $75,000

Deliverables:
1. Layout and configuration
2. Structural calculations
3. Material specifications
4. Cost estimate
5. Maintenance access plan

## Additional Resources

- AISC Steel Construction Manual
- ASABE Agricultural Structures Standards
- NSF/ANSI 61: Drinking Water System Components
- ASTM standards for plastics and composites

## Next Module

**Module 7: Material Handling and Logistics Engineering** - Design systems for efficient movement of plants, supplies, and harvested products.

---

**Module 6 Complete** - Proceed to Module 6 Quiz.
