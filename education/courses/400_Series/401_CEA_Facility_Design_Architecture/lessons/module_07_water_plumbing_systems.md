# Module 7: Water and Plumbing Systems Design

## Learning Objectives

By the end of this module, you will be able to:
- Design water supply and treatment systems for CEA facilities
- Integrate irrigation systems with facility plumbing
- Design drainage and waste management systems
- Ensure plumbing code compliance
- Implement water conservation and recycling strategies

## 7.1 Water Supply and Treatment System Design

### Water Demand Calculations

```
WATER USE CATEGORIES IN CEA
============================

1. IRRIGATION/FERTIGATION (70-85% of total)
2. EVAPORATIVE COOLING (seasonal, 5-15%)
3. WASH-DOWN/CLEANING (3-8%)
4. DOMESTIC USE (2-5%)
5. PROCESS WATER (equipment cooling, <5%)

IRRIGATION WATER DEMAND
=======================

Daily water use varies by:
├─ Crop type (leafy greens: 0.3-0.5 gal/sq ft/day)
├─ Growth stage (mature plants use more)
├─ Climate control (temperature, humidity)
├─ Growing system (NFT, DWC, media-based)
└─ Season (higher in summer)

Example Calculation:
────────────────────
Facility: 50,000 sq ft greenhouse, tomatoes
Daily water use: 0.8 gal/sq ft/day (peak summer)
Daily demand: 50,000 × 0.8 = 40,000 gallons/day

Peak flow rate (assume 16 hour irrigation day):
40,000 gal / 16 hr = 2,500 gal/hr = 42 GPM

Add factors:
- System flushing: +20%
- Evaporative cooling (peak): +15 GPM
- Wash-down: +10 GPM
- Domestic: +5 GPM
- Future expansion: +25%

Total peak demand: 42 × 1.20 + 15 + 10 + 5 = 80 GPM
With expansion: 80 × 1.25 = 100 GPM

Design water supply: 100 GPM minimum
```

### Water Source Options

```
WATER SOURCE COMPARISON
========================

┌─────────────────┬──────────┬─────────┬──────────┬──────────┐
│ Source          │ Quality  │ Cost    │ Reliab.  │ Treatment│
├─────────────────┼──────────┼─────────┼──────────┼──────────┤
│ Municipal Water │ Good     │ Medium  │ High     │ Minimal  │
│                 │ (varies) │         │          │          │
│                 │          │         │          │          │
│ Well Water      │ Variable │ Low     │ High*    │ Moderate │
│                 │ (test!)  │ (pump)  │          │ to High  │
│                 │          │         │          │          │
│ Surface Water   │ Poor     │ Low     │ Variable │ High     │
│ (pond, stream)  │          │         │ (season) │          │
│                 │          │         │          │          │
│ Rainwater       │ Good     │ Low     │ Variable │ Low to   │
│ Harvest         │ (soft)   │ (system)│ (climate)│ Moderate │
│                 │          │         │          │          │
│ Reclaimed/      │ Good     │ Medium  │ High     │ Moderate │
│ Recycled        │ (treated)│         │          │          │
└─────────────────┴──────────┴─────────┴──────────┴──────────┘

*Well reliability depends on aquifer recharge
```

### Water Treatment Systems

**TREATMENT PROCESS FLOW**

```
TYPICAL CEA WATER TREATMENT TRAIN
==================================

RAW WATER SOURCE
      ↓
┌─────────────────┐
│ PRE-FILTRATION  │ ← Remove large particles
│ - Screen filter │   (>100 microns)
│ - Sand filter   │
└────────┬────────┘
         ↓
┌─────────────────┐
│ CARBON          │ ← Remove chlorine, organics
│ FILTRATION      │   odor, taste
└────────┬────────┘
         ↓
┌─────────────────┐
│ FINE FILTRATION │ ← Remove particles >1-5 microns
│ - Bag filters   │   bacteria, sediment
│ - Cartridge     │
└────────┬────────┘
         ↓
┌─────────────────┐
│ DISINFECTION    │ ← Kill pathogens
│ - UV            │   (UV preferred for CEA -
│ - Ozone         │    no chemical residual)
└────────┬────────┘
         ↓
┌─────────────────┐
│ SPECIALIZED     │ ← As needed:
│ - RO (reverse   │   - Reduce dissolved solids
│   osmosis)      │   - Adjust hardness
│ - Ion exchange  │   - Remove specific ions
│ - pH adjustment │   - Match crop requirements
└────────┬────────┘
         ↓
TREATED WATER STORAGE
```

**TREATMENT SYSTEM SIZING EXAMPLE**

```
Design Criteria:
Raw water: Well water, 450 ppm TDS, iron present
Target: <150 ppm TDS for leafy greens
Flow rate: 100 GPM peak, 50 GPM average

COMPONENT SIZING:
═════════════════

1. PRE-FILTER (Sediment)
   Capacity: 120 GPM (120% of peak)
   Type: Automatic backwash sand filter
   Size: 36" diameter vessel
   Media: Graded sand, 24" depth
   Backwash: 150 GPM for 10 minutes

2. CARBON FILTER (Chlorine, organics)
   Capacity: 120 GPM
   Type: Granular activated carbon (GAC)
   Size: 48" diameter × 72" height
   Media: 20 cubic feet GAC
   Contact time: 5 minutes (minimum)
   Replacement: Annually

3. UV DISINFECTION
   Flow rate: 100 GPM
   Dosage: 30 mJ/cm² (minimum)
   Lamp power: 4 × 150W lamps
   Chamber: 6" diameter stainless steel
   UV transmittance: >75%
   Lamp life: 9,000-12,000 hours

4. REVERSE OSMOSIS (TDS reduction)
   Feed water: 450 ppm TDS
   Product water: <50 ppm TDS
   Recovery rate: 75%
   Feed flow required: 100 / 0.75 = 133 GPM
   Reject flow: 33 GPM (to drain or recycle)

   Membrane sizing:
   - 8" diameter membranes
   - 6-8 membranes in parallel
   - Each membrane: 20-25 GPM

   Pre-treatment requirements:
   - Hardness removal (if >150 ppm as CaCO₃)
   - pH adjustment (6.5-7.5 optimal)
   - Anti-scalant dosing

5. STORAGE TANK
   Treated water storage: 24 hours @ average use
   50 GPM × 60 min × 24 hr = 72,000 gallons
   Use: 75,000 gallon tank (multiple smaller tanks
        or one large tank)
   Material: Polyethylene, fiberglass, or concrete
            (food-grade approved)
```

## 7.2 Irrigation System Integration

### Plumbing Infrastructure for Irrigation

**IRRIGATION MAIN DISTRIBUTION**

```
GREENHOUSE IRRIGATION PIPING LAYOUT
====================================

        [Water Treatment]
                ↓
        [Pump Station] 60 PSI
                ↓
        [Main Header] 3" PVC
                ↓
        ┌───────┴───────┬───────┬───────┐
        ↓               ↓       ↓       ↓
    [Zone 1]        [Zone 2] [Zone 3] [Zone 4]
    2" lateral      2" lat.  2" lat.  2" lat.
        ↓               ↓       ↓       ↓
    Drip lines      Drip     Drip     Drip

Pipe Sizing (IPS PVC Schedule 40):
────────────────────────────────
Flow Rate   |  Pipe Size  |  Velocity
────────────────────────────────
< 15 GPM    |  1"         |  3-5 fps
15-30 GPM   |  1.5"       |  3-5 fps
30-60 GPM   |  2"         |  3-5 fps
60-120 GPM  |  3"         |  3-5 fps
120-240 GPM |  4"         |  3-5 fps

Target velocity: 3-5 fps (too high = erosion, noise)
                           (too low = stagnation)

Friction Loss (Hazen-Williams, C=150):
3" pipe, 100 GPM, 200 ft run:
Head loss = 2.5 ft (1.1 PSI)
```

**FERTIGATION SYSTEM INTEGRATION**

```
FERTIGATION INJECTION SCHEMATIC
================================

Water Supply (60 PSI)
        ↓
┌───────────────┐
│ Backflow      │ ← Required by code
│ Preventer     │   (prevent contamination)
└───────┬───────┘
        ↓
┌───────────────┐
│ Filter        │ ← Protect injection equipment
│ (200 mesh)    │
└───────┬───────┘
        ↓
┌───────────────┐
│ Injection     │ ← Venturi or pump injection
│ Point         │   Multiple nutrients if needed
└───────┬───────┘
        ↓
┌───────────────┐
│ Mixing        │ ← Allow complete mixing
│ Chamber       │   (3-5 seconds)
└───────┬───────┘
        ↓
┌───────────────┐
│ EC/pH         │ ← Monitor solution quality
│ Monitoring    │
└───────┬───────┘
        ↓
To Irrigation Zones

INJECTION METHODS:
══════════════════

1. VENTURI INJECTOR
   Pros: No power required, simple
   Cons: Requires pressure differential (15-25 PSI)
         Lower flow rates

2. DOSING PUMP
   Pros: Precise control, independent of pressure
         Wide flow range
   Cons: Requires power, more complex

3. INLINE MIXER
   Pros: Continuous blending
   Cons: Complex, expensive
```

## 7.3 Drainage and Waste Management

### Drainage System Design

**FLOOR DRAIN REQUIREMENTS**

```
FLOOR DRAINAGE SIZING
=====================

Greenhouse/Growing Area:
────────────────────────
Drainage rate: 0.5 GPM per 100 sq ft (typical)
              1.0 GPM per 100 sq ft (wash-down areas)

50,000 sq ft greenhouse:
Drainage capacity needed: 50,000 / 100 × 0.5 = 250 GPM

Number of drains (4" diameter, 30 GPM each):
250 / 30 = 8.3 → Use 10 drains minimum

Drain spacing: Maximum 50 ft from any point
Floor slope: 1-2% (1/8" to 1/4" per foot)

Drain Detail:
┌────────────────────────────────┐
│     Floor surface              │
│  ╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱ │ Slope to drain
└─────────────┬──────────────────┘
              ↓
        ┌─────────┐
        │ [Grate] │ 12" × 12" (typical)
        │         │
        │ [Trap]  │ P-trap or drum trap
        │    ↓    │
        │ [Pipe]  │ 4" minimum
        └────┬────┘
             ↓
        To drainage system

TRENCH DRAINS (Alternative):
═══════════════════════════
Used in: High-volume wash areas, aisles
Width: 4-12 inches
Depth: 4-8 inches
Capacity: 50-200 GPM per 10 ft length
Grating: Removable for cleaning, load-rated
```

**DRAINAGE SYSTEM LAYOUT**

```
Building Drainage Schematic:
════════════════════════════

Floor Drains (10 locations)
        ↓  ↓  ↓  ↓  ↓
        └──┴──┴──┴──┘
             ↓
    ┌────────────────┐
    │ Collection     │ 6" PVC main
    │ Main           │
    └────────┬───────┘
             ↓
    ┌────────────────┐
    │ Solids         │ ← Remove particles
    │ Separator      │   >1mm
    └────────┬───────┘
             ↓
    ┌────────────────┐
    │ Optional:      │
    │ - Oil/grease   │
    │   separator    │
    │ - pH           │
    │   neutralization│
    └────────┬───────┘
             ↓
    Decision Point: Discharge or Recycle?
             ↓
        ┌────┴────┐
        ↓         ↓
    To Sewer   [Water Recovery]
              Treatment & Reuse
```

### Wastewater Management

```
WASTEWATER STREAMS IN CEA
==========================

1. IRRIGATION RUNOFF/LEACHATE
   Characteristics:
   - High nutrient content (N, P, K)
   - Variable pH (5.5-7.5)
   - May contain pesticide residues
   - Low suspended solids (if filtered)

   Treatment options:
   ├─ Recirculation (after filtration/treatment)
   ├─ Land application (if permitted)
   ├─ Discharge to sewer (may require permit)
   └─ Constructed wetland treatment

2. WASH-DOWN WATER
   Characteristics:
   - Organic matter (plant debris)
   - Soil/media particles
   - Cleaning chemicals
   - Variable pH

   Treatment:
   ├─ Solids separation
   ├─ pH neutralization (if needed)
   └─ Discharge to sewer (typically allowed)

3. DOMESTIC WASTEWATER
   Characteristics: Standard sanitary waste
   Treatment: Standard plumbing to sewer/septic

DISCHARGE PERMITS:
══════════════════

Many jurisdictions require:
├─ Industrial wastewater discharge permit
├─ Monitoring of discharge quality
├─ Limits on nutrients (N, P)
├─ pH limits (6.0-9.0 typical)
├─ Temperature limits (<140°F typical)
└─ Reporting requirements

Check local requirements early in design!
```

## 7.4 Plumbing Code Compliance

### International Plumbing Code (IPC)

```
KEY IPC REQUIREMENTS FOR CEA
=============================

WATER SUPPLY (IPC Chapter 6)
────────────────────────────
- Minimum pressure: 15 PSI at fixtures
- Maximum pressure: 80 PSI (reducer required if >80)
- Pipe sizing based on fixture units
- Backflow prevention required

DRAINAGE (IPC Chapter 7)
────────────────────────
- Minimum slope: 1/4" per foot (2%) for drains
- Maximum slope: 1/2" per foot (for most pipes)
- Trap required for each drain
- Vent system required

VENTING (IPC Chapter 9)
───────────────────────
Purpose: Prevent siphoning, allow air circulation

Vent Sizing Example:
4" drain line → 2" vent minimum
Multiple fixtures → Common vent (sized per code)

BACKFLOW PREVENTION (IPC 608)
─────────────────────────────

Required Devices:
┌────────────────────────────────────────┐
│ Hazard Level  │ Device Required        │
├───────────────┼────────────────────────┤
│ High (Toxic)  │ Air gap or RP          │
│               │ (Reduced Pressure)     │
│               │                        │
│ Moderate      │ Double check valve     │
│               │                        │
│ Low           │ Vacuum breaker         │
└────────────────────────────────────────┘

CEA Applications:
- Fertigation: HIGH HAZARD → RP backflow preventer
- Irrigation: MODERATE → Double check valve
- Hose bibs: LOW → Vacuum breaker

Backflow Preventer Detail:
┌─────────────────────────────┐
│  Water Supply               │
│      ↓                      │
│  ┌───────┐                 │
│  │  RP   │ ← Testable      │
│  │Device │    Annual test  │
│  └───┬───┘    required     │
│      ↓                      │
│  To Irrigation/Fertigation  │
└─────────────────────────────┘
```

### Pipe Material Selection

```
PLUMBING PIPE MATERIALS
=======================

┌──────────────┬───────────────┬────────────┬──────────┐
│ Material     │ Application   │ Pressure   │ Life     │
│              │               │ Rating     │          │
├──────────────┼───────────────┼────────────┼──────────┤
│ PVC          │ Cold water    │ 100-315PSI │ 50+ yr   │
│ (Schedule 40)│ Drain/vent    │ (varies)   │          │
│              │ Irrigation    │            │          │
│              │               │            │          │
│ CPVC         │ Hot water     │ 100 PSI    │ 50+ yr   │
│              │ Drinking water│ @ 180°F    │          │
│              │               │            │          │
│ PEX          │ Hot/cold water│ 80-100 PSI │ 50+ yr   │
│              │ Flexible runs │            │          │
│              │               │            │          │
│ Copper       │ Potable water │ High       │ 50+ yr   │
│ (Type L)     │ All temps     │            │ (if water│
│              │               │            │ quality  │
│              │               │            │ good)    │
│              │               │            │          │
│ HDPE         │ Irrigation    │ 100-200PSI │ 50+ yr   │
│              │ Underground   │            │          │
│              │               │            │          │
│ Stainless    │ Corrosive env.│ High       │ 50+ yr   │
│ Steel        │ Food-grade    │            │          │
└──────────────┴───────────────┴────────────┴──────────┘

Recommendations for CEA:
- Potable water: PEX or CPVC (flexibility, cost)
- Irrigation mains: PVC Schedule 40 (durable, low cost)
- Underground: HDPE (flexible, freeze-resistant)
- Corrosive areas: PVC or stainless steel
- Nutrient solution: PVC, HDPE (avoid metal corrosion)
```

## 7.5 Water Conservation and Recycling

### Water Recovery Systems

```
IRRIGATION RUNOFF CAPTURE AND REUSE
====================================

System Components:
──────────────────

1. COLLECTION
   ┌────────────────────────────┐
   │ Gutter/Trough System       │
   │ Under growing benches/beds │
   │ Slope: 1-2% to collection  │
   └─────────────┬──────────────┘
                 ↓
2. FILTRATION
   ┌────────────────────────────┐
   │ Screen Filter (>100 micron)│
   │ ↓                          │
   │ Sand Filter (>20 micron)   │
   │ ↓                          │
   │ Disk/Cartridge (<10 micron)│
   └─────────────┬──────────────┘
                 ↓
3. DISINFECTION
   ┌────────────────────────────┐
   │ UV Treatment (30 mJ/cm²)   │
   │ or                         │
   │ Ozone (0.1-0.5 ppm)        │
   │ or                         │
   │ Chlorine dioxide           │
   └─────────────┬──────────────┘
                 ↓
4. NUTRIENT ADJUSTMENT
   ┌────────────────────────────┐
   │ EC/pH Monitoring           │
   │ Nutrient Dosing (to target)│
   └─────────────┬──────────────┘
                 ↓
5. STORAGE & REUSE
   ┌────────────────────────────┐
   │ Recycled Water Tank        │
   │ Back to irrigation system  │
   └────────────────────────────┘

Water Savings:
Recirculation efficiency: 75-95%
Example: 40,000 gal/day use
         With 85% recirculation
         Makeup water: 40,000 × 0.15 = 6,000 gal/day
         Savings: 34,000 gal/day (85%)
```

**RAINWATER HARVESTING**

```
RAINWATER COLLECTION SYSTEM
============================

Sizing Calculation:
───────────────────
Roof area: 50,000 sq ft
Annual rainfall: 40 inches
Collection efficiency: 80% (losses from splash, etc.)

Annual harvestable water:
50,000 sq ft × (40 in / 12 in/ft) × 0.80 × 7.48 gal/cu ft
= 996,800 gallons/year

Daily average: 996,800 / 365 = 2,731 gallons/day

Storage tank sizing:
Depends on rainfall distribution
Dry season reserve: 30-60 days typical
60 days × 2,731 gal/day = 163,860 gallons

Use: 4 × 50,000 gallon tanks = 200,000 gallons
(Allows for system flexibility)

System Design:
──────────────

Roof → Gutters → First Flush Diverter →
   ↓
Screen Filter (leaf removal) →
   ↓
Storage Tank(s) →
   ↓
Pump Station (with pressure tank) →
   ↓
Additional Treatment (UV, filtration) →
   ↓
To Irrigation System

First Flush Diverter:
- Diverts initial runoff (roof contaminants)
- Size: 10 gallons per 1,000 sq ft roof
- For 50,000 sq ft: 500 gallon first flush
```

### Condensate Recovery

```
HVAC CONDENSATE COLLECTION
===========================

Source: Air conditioning/dehumidification
Quality: Typically clean, low TDS
pH: Slightly acidic (5.5-6.5)

Condensate Production:
─────────────────────
Dehumidification: 100 lbs water/hour
= 100 lbs/hr × 24 hr/day / 8.34 lbs/gal
= 288 gallons/day

For 6 dehumidifiers:
288 × 6 = 1,728 gallons/day

Annual: 1,728 × 365 = 630,720 gallons

Treatment Needs:
├─ pH adjustment (if needed for irrigation)
├─ Filtration (minimal - already clean)
└─ Disinfection (UV recommended)

Collection System:
──────────────────

Each HVAC unit → Condensate drain pan →
   ↓
Condensate line (1" PVC min.) →
   ↓
Central collection tank (500-1,000 gal) →
   ↓
pH adjustment (optional) →
   ↓
UV treatment →
   ↓
To irrigation or makeup water

Economic Value:
At $5.00 per 1,000 gallons:
630,720 gal/yr × $5/1,000 = $3,154/year savings

System cost: $5,000-10,000
Payback: 2-3 years
```

### Water Use Monitoring

```
WATER METER INSTALLATION STRATEGY
==================================

Multi-Level Metering:
─────────────────────

LEVEL 1: MASTER METER
└─ Total facility water use
   Location: Service entrance
   Purpose: Utility billing, overall tracking

LEVEL 2: SYSTEM METERS
├─ Irrigation system total
├─ Cooling system total
├─ Domestic water total
└─ Wash-down/cleaning total
   Purpose: Identify high-use systems

LEVEL 3: ZONE METERS
├─ Irrigation zone 1, 2, 3, etc.
├─ Individual cooling towers
└─ Process areas
   Purpose: Detailed analysis, leak detection

Meter Selection:
────────────────
┌────────────────────────────────────────┐
│ Type          │ Application            │
├───────────────┼────────────────────────┤
│ Turbine       │ Large flows (>100 GPM) │
│               │ Irrigation mains       │
│               │                        │
│ Ultrasonic    │ Any flow, no moving    │
│               │ parts, high accuracy   │
│               │                        │
│ Magnetic      │ Conductive fluids,     │
│               │ large diameter         │
│               │                        │
│ Positive      │ Small flows (<20 GPM)  │
│ Displacement  │ Domestic, precise      │
└───────────────┴────────────────────────┘

Data Integration:
All meters connected to BAS (Building Automation)
- Real-time monitoring
- Alarm on high flow (leak detection)
- Historical tracking
- Water use intensity (WUI) calculation
```

## Summary

This module covered water and plumbing system design for CEA facilities:
- Water supply sizing and treatment system design
- Irrigation infrastructure integration
- Drainage and wastewater management
- Plumbing code compliance requirements
- Water conservation and recycling strategies

## Key Takeaways

1. **Treatment is essential** - CEA water quality requirements often exceed municipal standards, necessitating filtration, UV, and sometimes RO treatment.

2. **Backflow prevention is non-negotiable** - Fertigation systems require reduced pressure backflow preventers to protect potable water supplies.

3. **Drainage capacity must handle wash-down** - Size floor drains for periodic high-flow cleaning operations, not just routine drainage.

4. **Water recycling dramatically reduces costs** - Recirculation systems can reduce makeup water needs by 75-95%.

5. **Metering enables optimization** - Multi-level water metering identifies inefficiencies and enables continuous improvement.

## Next Module

**Module 8: Building Codes and Regulatory Compliance** will cover IBC requirements, agricultural vs. industrial classifications, fire protection, accessibility, and local zoning regulations.
