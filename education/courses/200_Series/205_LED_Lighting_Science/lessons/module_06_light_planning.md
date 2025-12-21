# Module 6: Light Planning

**Course:** 205 - LED Lighting Science
**Duration:** 60 minutes
**Level:** Intermediate

## Introduction

Effective light planning integrates fixture selection, electrical design, mounting strategies, and control systems into a cohesive system that meets crop requirements while optimizing cost and operational efficiency. This module guides you through the complete planning process from concept to installation-ready specifications.

## Learning Objectives

By the end of this module, you will be able to:

1. Design facility lighting layouts with optimal fixture placement and spacing
2. Calculate electrical requirements including circuits, breakers, and wire sizing
3. Plan mounting systems appropriate for different facility types
4. Integrate control systems for automation and dimming
5. Create installation specifications and drawings
6. Budget complete lighting system costs

## 1. Lighting System Design Process

```
Design Workflow
===============

PHASE 1: REQUIREMENTS DEFINITION
┌────────────────────────────────────────┐
│ 1. Facility dimensions                 │
│ 2. Crop selection and rotation         │
│ 3. Target DLI by crop/zone             │
│ 4. Environmental conditions            │
│ 5. Existing infrastructure             │
│ 6. Budget constraints                  │
│ 7. Timeline and phasing                │
└────────────────────────────────────────┘
            ↓
PHASE 2: LIGHT CALCULATIONS
┌────────────────────────────────────────┐
│ 1. Calculate total PPF required        │
│ 2. Determine fixture quantity          │
│ 3. Calculate spacing and layout        │
│ 4. Model PPFD distribution             │
│ 5. Verify uniformity                   │
└────────────────────────────────────────┘
            ↓
PHASE 3: ELECTRICAL DESIGN
┌────────────────────────────────────────┐
│ 1. Calculate total electrical load     │
│ 2. Design circuit distribution         │
│ 3. Size conductors and protection      │
│ 4. Plan control wiring                 │
│ 5. Verify service capacity             │
└────────────────────────────────────────┘
            ↓
PHASE 4: MOUNTING & INFRASTRUCTURE
┌────────────────────────────────────────┐
│ 1. Select mounting method              │
│ 2. Calculate structural loads          │
│ 3. Design cable management             │
│ 4. Plan access for maintenance         │
└────────────────────────────────────────┘
            ↓
PHASE 5: CONTROL SYSTEM
┌────────────────────────────────────────┐
│ 1. Define control zones                │
│ 2. Select controllers and protocols    │
│ 3. Design sensor integration           │
│ 4. Program light schedules             │
└────────────────────────────────────────┘
            ↓
PHASE 6: DOCUMENTATION
┌────────────────────────────────────────┐
│ 1. Create layout drawings              │
│ 2. Develop electrical schematics       │
│ 3. Write specifications                │
│ 4. Prepare bill of materials           │
│ 5. Generate installation instructions  │
└────────────────────────────────────────┘
```

## 2. Facility Layout Design

```
Example: Vertical Farm Tier Layout
===================================

Facility: 1000 sq ft vertical farm, 4 tiers
Crop: Lettuce (Target DLI: 15 mol/m²/d)
Photoperiod: 18 hours
Growing area per tier: 250 sq ft (23.2 m²)

STEP 1: PPFD REQUIREMENT
Target DLI: 15 mol/m²/d
Photoperiod: 18 hours
Required PPFD = (15 × 1000) / (18 × 3.6) = 231 μmol/m²/s

STEP 2: TOTAL PPF CALCULATION
Growing area per tier: 23.2 m²
Total PPF per tier = 23.2 m² × 231 μmol/m²/s / 0.85 efficiency
                   = 6,305 μmol/s per tier

STEP 3: FIXTURE SELECTION
Selected: Linear fixtures, 600 μmol/s each
Fixtures per tier = 6,305 / 600 = 10.5 ≈ 11 fixtures
Total fixtures (4 tiers) = 44 fixtures

STEP 4: LAYOUT DESIGN (Per Tier)
Tier dimensions: 25 ft × 10 ft (7.6 m × 3.0 m)

Layout Option 1: Perpendicular Bars
═══════════════════════  ← 11 bars
═══════════════════════     perpendicular
═══════════════════════     to length
═══════════════════════
═══════════════════════  Spacing: 27"
═══════════════════════     (69 cm)
═══════════════════════
═══════════════════════  Coverage:
═══════════════════════     Excellent
═══════════════════════  Wiring:
═══════════════════════     Sequential
═══════════════════════

Layout Option 2: Parallel Bars
║ ║ ║ ║ ║ ║ ║ ║ ║ ║ ║  ← 11 bars
║ ║ ║ ║ ║ ║ ║ ║ ║ ║ ║     parallel to
                            length
Spacing: 11" (28 cm)
Coverage: Excellent
Wiring: More complex

Selected: Option 1 (perpendicular)
Better for sequential installation and access

STEP 5: MOUNTING HEIGHT
Tier height: 24 inches
Canopy clearance needed: 6 inches
Mounting height: 18 inches above growing surface

STEP 6: PPFD VERIFICATION
At 18" height, fixtures provide:
- Center: 260 μmol/m²/s
- Edge: 200 μmol/m²/s
- Average: 235 μmol/m²/s (target: 231) ✓
- Uniformity: 200/260 = 77% (acceptable)
```

### Greenhouse Supplemental Lighting

```
Example: Greenhouse Supplemental Design
========================================

Facility: 10,000 sq ft greenhouse (929 m²)
Crop: Tomato in winter
Natural light: 5-8 mol/m²/d (winter average)
Target DLI: 25 mol/m²/d
Supplemental needed: 17-20 mol/m²/d

STRATEGY: Photoperiod Extension
Natural photoperiod: 9 hours (winter)
Extend to: 14 hours (5 hours supplemental)

PPFD Calculation:
Supplemental DLI: 18 mol/m²/d
Photoperiod: 14 hours
Required PPFD = (18 × 1000) / (14 × 3.6) = 357 μmol/m²/s

Total PPF:
PPF = 929 m² × 357 μmol/m²/s / 0.80 = 414,679 μmol/s

Fixture Selection:
High-bay fixtures: 2,400 μmol/s each
Quantity = 414,679 / 2,400 = 173 fixtures

Layout:
Mounting: Greenhouse structure (15 ft height)
Spacing: 8 ft × 8 ft grid pattern
Coverage: 64 sq ft per fixture

┌──□──┬──□──┬──□──┬──□──┐  □ = High-bay fixture
│     │     │     │     │  8'× 8' spacing
├──□──┼──□──┼──□──┼──□──┤
│     │     │     │     │  Over crop canopy
├──□──┼──□──┼──□──┼──□──┤
│     │     │     │     │  Supplemental only
└──□──┴──□──┴──□──┴──□──┘  (dawn/dusk)

Control Strategy:
- Sunrise: Lights on (5 AM)
- Sunup: Ramp down to maintain 357 μmol/m²/s total
- Afternoon: Ramp up as natural light fades
- Sunset: Lights off (7 PM)
- Total operating: ~10 hours/day (varies daily)
```

## 2. Electrical Design

```
Electrical Load Calculation
===========================

Example Facility: 44 fixtures × 400W each

TOTAL LOAD
Lighting load = 44 × 400W = 17,600W (17.6 kW)

DEMAND FACTOR
Code allows demand factor for horticultural lighting
Using 100% demand (conservative): 17.6 kW
With 80% demand factor: 14.1 kW

CIRCUIT DESIGN
Option 1: 120V circuits
Max per circuit: 16A × 120V × 0.80 = 1,536W
Fixtures per circuit: 1,536W / 400W = 3 fixtures
Circuits needed: 44 / 3 = 15 circuits

Option 2: 208V circuits (better choice)
Max per circuit: 16A × 208V × 0.80 = 2,662W
Fixtures per circuit: 2,662W / 400W = 6 fixtures
Circuits needed: 44 / 6 = 8 circuits

CIRCUIT LAYOUT (208V, 8 circuits)
┌─────────────────────────────────────┐
│ Panel: "TIER LIGHTING"              │
├─────────────────────────────────────┤
│ Ckt 1-2: Tier 1, Row 1 (6 fixtures) │ 20A
│ Ckt 3-4: Tier 1, Row 2 (5 fixtures) │ 20A
│ Ckt 5-6: Tier 2, Row 1 (6 fixtures) │ 20A
│ Ckt 7-8: Tier 2, Row 2 (5 fixtures) │ 20A
│ Ckt 9-10: Tier 3, Row 1 (6 fixtures)│ 20A
│ Ckt 11-12: Tier 3, Row 2 (5 fixtures)│ 20A
│ Ckt 13-14: Tier 4, Row 1 (6 fixtures)│ 20A
│ Ckt 15-16: Tier 4, Row 2 (5 fixtures)│ 20A
└─────────────────────────────────────┘

FEEDER SIZING
Total load: 17.6 kW
Voltage: 208V
Current: 17,600W / 208V = 84.6A
Conductor: #3 AWG THWN (100A rated)
Conduit: 1.25" EMT
Main breaker: 100A

WIRE SIZING CHART
┌──────────────────────────────────────┐
│ Circuit  Load   Wire    Breaker      │
│ ───────  ────   ────    ───────      │
│ Branch   2.4kW  #12     20A          │
│ Feeder   17.6kW #3      100A         │
│                                      │
│ Voltage drop check:                  │
│ Max run: 100 ft                      │
│ Drop: 2.3% (acceptable <3%)          │
└──────────────────────────────────────┘
```

### Control Wiring

```
Control System Wiring
=====================

DIMMING WIRING (0-10V)
Each fixture requires:
- Line (120/208V): Power supply
- 0-10V control: Two low-voltage wires

Wiring Diagram:
Controller → Dimming Signal → All Fixtures in Zone

    [Controller]
         │
    ┌────┴────┬────┬────┬────┐
    │ 0-10V Signal (18/2 wire)
    ↓         ↓    ↓    ↓    ↓
  [Fix1]  [Fix2] [Fix3]....[Fix6]
    ↑         ↑    ↑    ↓    ↑
    └─────────┴────┴────┴────┘
       120/208V Power Circuit

Zone Design:
- Tier 1: Zone 1 (11 fixtures)
- Tier 2: Zone 2 (11 fixtures)
- Tier 3: Zone 3 (11 fixtures)
- Tier 4: Zone 4 (11 fixtures)

Control Wire Sizing:
- 18 AWG acceptable for 0-10V
- Max run: <300 ft
- Separate conduit from power (code)

DALI SYSTEM (More Advanced)
- Digital protocol (two-wire bus)
- Individual fixture addressability
- 64 fixtures per bus
- Requires DALI controller and fixtures

Network Topology:
[Controller]─┬─[Fix1]─[Fix2]─[Fix3]...
             ├─[Fix4]─[Fix5]─[Fix6]...
             └─[Fix7]─[Fix8]─[Fix9]...

Advantages:
✓ Individual fixture control
✓ Bidirectional communication
✓ Status monitoring
✓ Complex scenes/schedules
```

## 3. Mounting Systems

```
Mounting Methods by Application
================================

VERTICAL FARM RACKS
────────────────────
Method: Direct mount to rack structure

   [Rack Uprights]
        ║ ║
   ═════╬═╬═════  ← Fixture bolted to
        ║ ║         crossbar
   ─────────────  Growing surface

Hardware:
- U-bolts or mounting clips
- Grounding bonding
- Vibration dampening (rubber washers)
- Tool-less removal preferred

Load: 10-15 lbs per linear fixture
Spacing: Per fixture layout plan

GREENHOUSE OVERHEAD
───────────────────
Method: Cable suspension from structure

    [Structure]─┬─[Structure]
                │
         ┌──Cable/Chain
         │
    [  Fixture  ]  ← Adjustable height
         │
    Growing Canopy

Hardware:
- Aircraft cable or chain
- Ratchet hangers (height adjustment)
- Canopy hooks
- Swivels for leveling

Load: 20-50 lbs per high-bay
Adjustment range: 2-10 ft typical

GROW TENT / INDOOR
──────────────────
Method: Hang from tent frame

    ┌─[Tent Frame]─┐
    │  Ratchet     │
    │    │         │
    │ [Fixture]    │
    │              │
    │  Plants      │
    └──────────────┘

Hardware:
- Ratchet hangers
- Carabiners
- Adjustable rope
- Load-rated tent frame

Load: Check tent capacity (typical 50-100 lbs)

FIXED CEILING MOUNT
───────────────────
Method: Ceiling junction box

    [Ceiling]
    ┌───┐
    │ J │ ← Junction box
    └─┬─┘
   [Fixture] Fixed position

Use when:
- Permanent installation
- High ceilings
- No height adjustment needed

Code Requirements:
- Electrical box rated for weight
- Proper grounding
- Accessible for maintenance
```

### Structural Considerations

```
Load Calculations and Safety
=============================

Example: Greenhouse High-Bay Installation

FIXTURE SPECIFICATIONS
Weight: 35 lbs each
Quantity: 173 fixtures
Mounting: Cable suspension

LOAD ANALYSIS
Single fixture load: 35 lbs
Safety factor: 2.0× minimum
Design load: 35 × 2 = 70 lbs per fixture

Cable Selection:
Working load: 70 lbs
Cable size: 1/8" aircraft cable (500 lb capacity) ✓

STRUCTURAL VERIFICATION
Greenhouse beam spacing: 8 ft
Fixtures per beam: 5 fixtures
Total load per beam: 5 × 35 = 175 lbs

Check beam capacity:
Existing beam: 500 lb capacity ✓
Additional lighting load: 175 lbs
Remaining capacity: 325 lbs
Status: Acceptable

ATTACHMENT DETAILS
         [I-Beam]
            │
        [U-Bolt Clamp]
            │
        [Turnbuckle] ← For leveling
            │
        [Cable 1/8"]
            │
        [S-Hook]
            │
    ┌───[Fixture]───┐

Hardware Checklist:
□ Beam clamps (rated capacity)
□ Turnbuckles (leveling)
□ Aircraft cable (1/8")
□ S-hooks (rated)
□ Cable stops (secure length)
□ Grounding provision
```

## 4. Control System Integration

```
Control System Architecture
===========================

BASIC SYSTEM (Timer Only)
┌────────────────────────────────────┐
│          [Timer]                   │
│             │                      │
│     ────────┼────────              │
│     │       │       │              │
│  [Zone1] [Zone2] [Zone3]          │
│                                    │
│ Capabilities:                      │
│ - On/off scheduling                │
│ - Simple photoperiod control       │
│                                    │
│ Limitations:                       │
│ - No dimming                       │
│ - No sensor integration            │
│ - Manual adjustments               │
└────────────────────────────────────┘

INTERMEDIATE SYSTEM (Dimming Controller)
┌────────────────────────────────────┐
│      [Dimming Controller]          │
│       w/ Photoperiod               │
│             │                      │
│       ┌─────┼─────┐               │
│       │     │     │               │
│    [Zone1] [Zone2] [Zone3]        │
│    0-10V   0-10V   0-10V          │
│                                    │
│ Capabilities:                      │
│ - Programmable schedules           │
│ - Intensity control (%)            │
│ - Sunrise/sunset ramping           │
│ - Multiple zones                   │
│                                    │
│ Typical Manufacturers:             │
│ - Titan Controls                   │
│ - Argus Controls                   │
│ - Priva                            │
└────────────────────────────────────┘

ADVANCED SYSTEM (Integrated Environment)
┌────────────────────────────────────┐
│   [Central Controller/Computer]    │
│              │                     │
│   ┌──────────┼──────────┐         │
│   │          │          │         │
│ [Light] [Sensors] [Climate]       │
│   │          │          │         │
│ Zone1-4   PAR/Temp  HVAC/CO₂     │
│ DALI      Feedback  Integration   │
│                                    │
│ Capabilities:                      │
│ - DLI targeting                    │
│ - Sensor-based dimming             │
│ - Climate integration              │
│ - Data logging                     │
│ - Remote monitoring                │
│ - Crop-specific recipes            │
│                                    │
│ Platforms:                         │
│ - Priva Connext                    │
│ - Argus Titan                      │
│ - Hoogendoorn IIVO                 │
│ - Custom IoT solutions             │
└────────────────────────────────────┘
```

### Light Schedule Programming

```
Example Control Schedules
==========================

SCHEDULE 1: Simple Photoperiod
Crop: Lettuce
DLI Target: 15 mol/m²/d
Photoperiod: 18 hours

Time     Intensity  PPFD           Action
────     ─────────  ────           ──────
00:00    0%         0              Lights OFF
06:00    100%       231 μmol/m²/s  Lights ON
24:00    100%       231 μmol/m²/s  Continue
00:00    0%         0              Lights OFF

Daily DLI: 231 × 18 × 3.6/1000 = 15.0 mol/m²/d ✓

SCHEDULE 2: Sunrise/Sunset Simulation
Crop: Basil
DLI Target: 18 mol/m²/d
Photoperiod: 16 hours with ramping

Time     Intensity  PPFD           Action
────     ─────────  ────           ──────
00:00    0%         0              Night
06:00    20%        63             Dawn starts
07:00    100%       313            Ramp to full
21:00    100%       313            Day continues
22:00    20%        63             Sunset ramp
23:00    0%         0              Night

DLI calculation (trapezoidal):
= (63×2) + (313×14) / 1 × 3.6/1000
= 17.8 mol/m²/d ✓

SCHEDULE 3: Cannabis Vegetative→Flowering
Transition from 18hr → 12hr

WEEKS 1-6 (Vegetative):
Time     Intensity  PPFD
────     ─────────  ────
06:00    100%       500 μmol/m²/s
24:00    100%       500
00:00    OFF        0
DLI: 500 × 18 × 3.6/1000 = 32.4 mol/m²/d

WEEKS 7+ (Flowering):
Time     Intensity  PPFD
────     ─────────  ────
06:00    100%       900 μmol/m²/s
18:00    100%       900
18:00    OFF        0
DLI: 900 × 12 × 3.6/1000 = 38.9 mol/m²/d

SCHEDULE 4: Greenhouse Supplemental
Natural + Supplemental to maintain target

Target: 25 mol/m²/d total
Natural: Variable (5-15 mol/m²/d)
Control: PAR sensor feedback

Logic:
IF natural PPFD + supplemental PPFD < 500:
   Set supplemental = 500 - natural
ELSE:
   Set supplemental = 0

Example (cloudy day):
Time   Natural  Supplement  Total   Action
────   ───────  ──────────  ─────   ──────
06:00  50       450         500     Supplement ON
12:00  200      300         500     Reduce supplement
15:00  100      400         500     Increase supplement
18:00  0        0           0       All OFF
```

## 5. Installation Documentation

```
Installation Drawing Package
============================

DOCUMENT 1: LIGHTING PLAN
┌──────────────────────────────────┐
│ TIER 1 LIGHTING PLAN             │
│ Scale: 1/4" = 1'-0"              │
│                                  │
│  ═══ ═══ ═══ ═══ ═══ ═══        │
│                                  │
│  ═══ ═══ ═══ ═══ ═══             │
│                                  │
│ Legend:                          │
│ ═══ Linear LED fixture           │
│ ┊   Mounting rail                │
│ ●   Electrical connection        │
│                                  │
│ Dimensions:                      │
│ - Fixture spacing: 27"           │
│ - Height: 18" AFF                │
│ - Quantity: 11 fixtures          │
└──────────────────────────────────┘

DOCUMENT 2: ELECTRICAL RISER
┌──────────────────────────────────┐
│ LIGHTING ELECTRICAL RISER        │
│                                  │
│    [Main Panel]                  │
│         │                        │
│    [100A Feeder] #3 AWG         │
│         │                        │
│    [Lighting Panel]              │
│    ├─ Ckt 1-2: Tier 1A (20A)   │
│    ├─ Ckt 3-4: Tier 1B (20A)   │
│    ├─ Ckt 5-6: Tier 2A (20A)   │
│    ├─ Ckt 7-8: Tier 2B (20A)   │
│    ├─ Ckt 9-10: Tier 3A (20A)  │
│    ├─ Ckt 11-12: Tier 3B (20A) │
│    ├─ Ckt 13-14: Tier 4A (20A) │
│    └─ Ckt 15-16: Tier 4B (20A) │
│                                  │
│ Total Load: 17.6 kW             │
│ Demand: 100%                     │
└──────────────────────────────────┘

DOCUMENT 3: CONTROL DIAGRAM
┌──────────────────────────────────┐
│ LIGHTING CONTROL SCHEMATIC       │
│                                  │
│  [Controller]                    │
│       │                          │
│   ┌───┴───┬────┬────┐           │
│   │       │    │    │           │
│ Zone1  Zone2  Zone3 Zone4       │
│   │       │    │    │           │
│ Tier1  Tier2  Tier3 Tier4       │
│ (11)   (11)   (11)  (11)        │
│                                  │
│ Control Method: 0-10V            │
│ Wire: 18/2 CCOM                  │
│ Protocol: Analog dimming         │
│                                  │
│ Schedule: Programmable timer     │
│ - 18hr photoperiod               │
│ - Intensity: 100%                │
└──────────────────────────────────┘

DOCUMENT 4: MOUNTING DETAIL
┌──────────────────────────────────┐
│ FIXTURE MOUNTING DETAIL          │
│                                  │
│    [Rack Structure]              │
│         ║                        │
│    ┌────╬────┐                  │
│    │U-bolt    │                  │
│    └────┬────┘                  │
│         │                        │
│    ═════╬═════ Fixture           │
│         │                        │
│    Ground wire                   │
│                                  │
│ Hardware:                        │
│ - 1/4" U-bolts                   │
│ - Lock washers                   │
│ - Ground bonding                 │
│ - Rubber vibration dampeners     │
└──────────────────────────────────┘
```

## Summary

Comprehensive light planning integrates fixture selection, layout design, electrical engineering, mounting systems, and controls into a cohesive system. Proper planning ensures optimal plant performance, code compliance, safety, and operational efficiency.

**Key Takeaways**:

1. Follow systematic design process from requirements to documentation
2. Calculate total PPF, fixture quantity, and spacing for uniform coverage
3. Design electrical systems for safety, efficiency, and future expansion
4. Select mounting methods appropriate for facility type and loading
5. Integrate controls for automation and DLI management
6. Create complete installation documentation for contractors
7. Verify PPFD delivery before full installation
8. Plan for maintenance access and future modifications

**Design Checklist**:
- Target DLI and PPFD calculations
- Fixture quantity and spacing
- Electrical load and circuit design
- Mounting method and structural capacity
- Control zones and programming
- Installation drawings and specifications
- Budget and timeline
- Safety and code compliance

## Check Your Understanding

1. Why is zone-based control beneficial for multi-crop facilities?
2. Calculate circuits needed: 60 fixtures, 400W each, 208V, 20A breakers
3. What are advantages of 0-10V dimming vs. on/off control?
4. Why include 2× safety factor in structural load calculations?
5. List three essential documents for installation package.

**Answers**:
1. Different crops require different DLI levels and photoperiods. Zone control allows independent scheduling and intensity for each crop type without affecting others.
2. Max per circuit: 20A × 208V × 0.8 = 3,328W. Fixtures per circuit: 3,328/400 = 8. Circuits needed: 60/8 = 8 circuits
3. 0-10V allows gradual sunrise/sunset ramping, precise DLI control, intensity adjustment for crop stage, energy savings through dimming, and extended fixture life.
4. Safety factor accounts for dynamic loads (wind, maintenance), material degradation over time, load calculation uncertainties, and code compliance margins.
5. Any three: Lighting plan (fixture layout), electrical riser diagram, control schematic, mounting details, bill of materials, specifications

## Next Module Preview

In Module 7: Energy Efficiency, you'll learn to calculate lighting energy consumption, implement demand response strategies, optimize photoperiod for efficiency, calculate payback periods for upgrades, and reduce overall facility operating costs through intelligent lighting management.

---

**Estimated Time**: 60 minutes
**Difficulty**: Intermediate
**Prerequisites**: Modules 1-5
