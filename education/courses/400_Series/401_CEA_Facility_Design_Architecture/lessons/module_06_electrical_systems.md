# Module 6: Electrical Systems and Power Distribution

## Learning Objectives

By the end of this module, you will be able to:
- Calculate electrical loads for CEA facilities
- Design power distribution systems meeting code requirements
- Specify lighting system electrical requirements
- Design emergency and backup power systems
- Ensure electrical code compliance (NEC)

## 6.1 Electrical Load Calculations

### Connected Load Analysis

```
ELECTRICAL LOAD CATEGORIES
===========================

1. LIGHTING LOADS
   ├─ Primary growing lights (LED, HPS)
   ├─ Supplemental lighting
   ├─ Work area lighting
   └─ Emergency/exit lighting

2. HVAC LOADS
   ├─ Air handlers and fans
   ├─ Chillers and heat pumps
   ├─ Boiler pumps and controls
   ├─ Ventilation fans
   └─ Dehumidification equipment

3. IRRIGATION & FERTIGATION
   ├─ Irrigation pumps
   ├─ Dosing pumps
   ├─ Mixing tanks (agitators)
   └─ UV/filtration systems

4. FACILITY SYSTEMS
   ├─ Conveyors and material handling
   ├─ Post-harvest equipment
   ├─ Refrigeration
   ├─ Water treatment
   └─ Packaging equipment

5. BUILDING LOADS
   ├─ Office equipment
   ├─ Receptacles
   ├─ Kitchen/break room
   └─ Computer/control systems

6. SPECIAL SYSTEMS
   ├─ CO₂ generation
   ├─ Ozone generators
   ├─ Research equipment
   └─ Battery charging
```

### Demand Load Calculations

**DEMAND FACTORS (PER NEC ARTICLE 220)**

```
┌─────────────────────────────────────────────────────┐
│  LOAD TYPE DEMAND FACTORS                           │
├──────────────────────────────┬──────────────────────┤
│ Load Type                    │ Demand Factor        │
├──────────────────────────────┼──────────────────────┤
│ Lighting (general)           │ 100%                 │
│ Receptacles (first 10 kVA)   │ 100%                 │
│ Receptacles (over 10 kVA)    │ 50%                  │
│ Kitchen equipment            │ 65%                  │
│ HVAC (largest)               │ 100%                 │
│ HVAC (additional)            │ 75%                  │
│ Motor loads                  │ 125% largest + 100%  │
│                              │ others               │
└──────────────────────────────┴──────────────────────┘

Agricultural/Industrial Buildings:
May use 50% demand factor for general lighting
if conditions qualify (NEC 220.42)
```

**EXAMPLE: VERTICAL FARM ELECTRICAL LOAD**

```
Facility: 40,000 sq ft, 6 growing levels

CONNECTED LOADS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. LED Lighting
   Growing area: 240,000 sq ft (6 levels)
   Intensity: 35 W/sq ft
   Connected: 240,000 × 35 = 8,400,000 W = 8,400 kW

2. HVAC Systems
   Chillers (3 × 250 tons):
     3 × 250 × 12,000 / 11 EER = 818 kW
   Air handlers (10 units):
     10 × 15 HP × 0.746 = 112 kW
   Dehumidifiers (6 units):
     6 × 15 kW = 90 kW
   HVAC subtotal: 1,020 kW

3. Irrigation & Fertigation
   Irrigation pumps (3): 3 × 5 HP = 11 kW
   Dosing pumps (6): 6 × 0.5 HP = 2 kW
   UV system: 10 kW
   Irrigation subtotal: 23 kW

4. Post-Harvest
   Wash line: 15 kW
   Conveyor: 8 kW
   Packaging: 12 kW
   Cold storage: 75 kW
   Post-harvest subtotal: 110 kW

5. Building Systems
   Receptacles (40,000 sf × 1.5 VA/sf): 60 kW
   Office/break (5,000 sf × 3 VA/sf): 15 kW
   Controls/computers: 25 kW
   Building subtotal: 100 kW

6. Other
   Pumps and misc.: 50 kW

TOTAL CONNECTED LOAD: 9,703 kW

DEMAND LOAD CALCULATION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. LED Lighting: 8,400 kW × 1.00 = 8,400 kW
2. HVAC: 1,020 kW × 1.00 = 1,020 kW
3. Irrigation: 23 kW × 1.00 = 23 kW
4. Post-harvest: 110 kW × 0.70 = 77 kW
5. Building: 100 kW × 0.75 = 75 kW
6. Other: 50 kW × 0.80 = 40 kW

TOTAL DEMAND LOAD: 9,635 kW

Add 25% for largest motor (818 kW chiller):
Motor adder: 818 × 0.25 = 205 kW

DESIGN DEMAND LOAD: 9,840 kW

Add future expansion (20%):
Final design: 9,840 × 1.20 = 11,808 kW ≈ 12,000 kW

SERVICE SIZE: 12,000 kW / (480V × √3 × 0.90 PF)
            = 16,014 Amps

Use: 20,000A service (next standard size)
Or: Multiple services (4 × 5,000A)
```

## 6.2 Power Distribution System Design

### Service and Distribution

**ELECTRICAL DISTRIBUTION HIERARCHY**

```
TYPICAL CEA FACILITY POWER DISTRIBUTION
========================================

UTILITY SERVICE
    │ 13.2kV or 34.5kV (medium voltage)
    ↓
┌───────────────────┐
│ UTILITY METER     │
│ (Demand meter)    │
└────────┬──────────┘
         │
    ↓ 13.2kV
┌───────────────────┐
│ PAD-MOUNT         │
│ TRANSFORMER       │
│ (2500 kVA)        │
└────────┬──────────┘
         │
    ↓ 480/277V, 3-phase
┌───────────────────┐
│ MAIN SWITCHBOARD  │
│ (5000A)           │
│ - Main breaker    │
│ - Metering        │
│ - Distribution    │
└────────┬──────────┘
         │
    ┌────┼────┬────────┬─────────┐
    │    │    │        │         │
    ↓    ↓    ↓        ↓         ↓
┌────┐ ┌────┐ ┌────┐ ┌────┐  ┌────┐
│MCC │ │MCC │ │MCC │ │Panel│  │Panel│
│ 1  │ │ 2  │ │ 3  │ │ A  │  │ B  │
└────┘ └────┘ └────┘ └────┘  └────┘
  │      │      │       │        │
  ↓      ↓      ↓       ↓        ↓
Lights  HVAC  Pumps  Recept.  Office

MCC = Motor Control Center
Typical rating: 800-1600A
```

**VOLTAGE SELECTION**

```
┌──────────────────────────────────────────────────┐
│ VOLTAGE LEVELS FOR CEA FACILITIES                │
├────────────┬──────────────┬──────────────────────┤
│ Voltage    │ Application  │ Advantages           │
├────────────┼──────────────┼──────────────────────┤
│ 120V       │ - Receptacles│ - Standard           │
│ 1-phase    │ - Small equip│ - Safe               │
│            │ - Lighting   │ - Plug-in            │
│            │              │                      │
│ 208V       │ - Small      │ - More efficient     │
│ 3-phase    │   motors     │ - Lower current      │
│            │ - Some HVAC  │ - Common             │
│            │              │                      │
│ 277V       │ - LED lights │ - Efficient for      │
│ 1-phase    │ - HPS lights │   lighting           │
│            │              │ - Direct from 480V   │
│            │              │                      │
│ 480V       │ - Large HVAC │ - Most efficient     │
│ 3-phase    │ - Chillers   │ - Smallest wire      │
│            │ - Big motors │ - Industry standard  │
│            │ - Transformers│                     │
│            │              │                      │
│ 4160V      │ - Very large │ - Utility primary    │
│ 3-phase    │   loads      │ - Lowest loss        │
│ (Medium V) │ - Large sites│ - Requires expertise │
└────────────┴──────────────┴──────────────────────┘

Recommendation for typical CEA:
Primary distribution: 480V, 3-phase, 4-wire
Step down to 208V and 120V as needed
```

### Conductor and Conduit Sizing

**WIRE SIZING EXAMPLE**

```
CONDUCTOR SIZING CALCULATION
=============================

Load: LED lighting panel
Total load: 200 kW
Voltage: 480V, 3-phase
Power factor: 0.95
Ambient temp: 86°F (30°C)
Installation: Conduit with 6 conductors

Step 1: Calculate Current
I = P / (V × √3 × PF)
I = 200,000 / (480 × 1.732 × 0.95)
I = 253 Amps

Step 2: Apply NEC 125% Rule (continuous load)
Design current = 253 × 1.25 = 316 Amps

Step 3: Select Conductor Size
From NEC Table 310.16 (75°C conductor):
- 350 kcmil: 310A (too small)
- 400 kcmil: 335A ✓
- 500 kcmil: 380A (next size up, more margin)

Step 4: Apply Adjustment Factors
Temperature correction (86°F): 0.91
Conduit fill (6 conductors): 0.80
Adjusted ampacity: 335 × 0.91 × 0.80 = 244A

244A < 316A required ✗

Upsize to 500 kcmil:
380 × 0.91 × 0.80 = 276A
Still insufficient!

Try 600 kcmil:
420 × 0.91 × 0.80 = 306A
Still slightly low, use 750 kcmil:
475 × 0.91 × 0.80 = 346A ✓

Step 5: Voltage Drop Check
Distance: 200 feet
Max voltage drop: 3% = 14.4V

VD = (2 × K × I × D) / CM
K = 12.9 (copper constant)
VD = (2 × 12.9 × 253 × 200) / 750,000
VD = 1.74V (0.36%) ✓ Acceptable

Final selection: 750 kcmil THHN copper
Conduit size (3 conductors + ground):
NEC Table 4: 3" conduit
```

**BUSWAY VS. CABLE**

```
DISTRIBUTION METHOD COMPARISON
===============================

CABLE IN CONDUIT
┌────────────────────────────────────┐
│ Pros:                              │
│ - Lower initial cost               │
│ - Flexible routing                 │
│ - Standard installation            │
│                                    │
│ Cons:                              │
│ - Labor-intensive                  │
│ - Limited tap points               │
│ - Difficult to modify              │
└────────────────────────────────────┘

BUSWAY (BUS DUCT)
┌────────────────────────────────────┐
│ Pros:                              │
│ - Fast installation                │
│ - Easy tap-off (plug-in units)     │
│ - High capacity                    │
│ - Modular and reconfigurable       │
│ - Lower voltage drop               │
│                                    │
│ Cons:                              │
│ - Higher material cost             │
│ - Requires engineered layout       │
│ - Not suitable for wet areas       │
└────────────────────────────────────┘

Busway Application in Vertical Farms:
┌────────────────────────────────┐
│        │ Busway (600A)         │
│        │                       │
│   ┌────┴────┐  ┌────┴────┐    │
│   │Plug-in  │  │Plug-in  │    │
│   │ 100A    │  │ 100A    │    │
│   └────┬────┘  └────┬────┘    │
│        │            │          │
│    [Rack 1]     [Rack 2]       │
│     Lights      Lights         │
└────────────────────────────────┘

Cost breakeven: Typically at 400A+
```

## 6.3 Lighting System Electrical Design

### Lighting Circuits and Controls

**LED LIGHTING ELECTRICAL REQUIREMENTS**

```
LED DRIVER TYPES
================

1. CONSTANT CURRENT DRIVERS
   Output: Fixed current (mA), varying voltage
   Used for: High-power LEDs
   Control: 0-10V dimming or PWM

2. CONSTANT VOLTAGE DRIVERS
   Output: Fixed voltage (12V, 24V, 48V)
   Used for: LED strips, modules
   Control: PWM dimming

3. PROGRAMMABLE DRIVERS
   Output: Adjustable current and voltage
   Features: Spectrum control, sunrise/sunset
   Control: DMX, DALI, Ethernet

POWER FACTOR CORRECTION
========================
LED drivers without PFC: PF = 0.5-0.7
LED drivers with PFC: PF = 0.90-0.98

Impact on electrical system:
100 kW LED load @ PF 0.60:
Apparent power = 100 / 0.60 = 167 kVA
Current @ 480V = 167,000 / (480×1.732) = 201A

Same load @ PF 0.95:
Apparent power = 100 / 0.95 = 105 kVA
Current @ 480V = 105,000 / (480×1.732) = 126A

Savings: 75A (37% current reduction)

Specify: >0.90 PF for all LED drivers
```

**LIGHTING CIRCUIT DESIGN**

```
CIRCUIT LAYOUT OPTIONS
======================

Option 1: Branch Circuits from Panel
┌──────────────────────────────────┐
│   Lighting Panel (277V)          │
│   ┌──┬──┬──┬──┬──┬──┬──┬──┐     │
│   └┬─┴┬─┴┬─┴┬─┴┬─┴┬─┴┬─┴┬─┘     │
└────┼──┼──┼──┼──┼──┼──┼──┼───────┘
     │  │  │  │  │  │  │  │
     ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓
    [LED][LED][LED][LED] (8 rows)

Branch circuit sizing:
277V, 20A circuit = 5,540 VA
LED fixtures: 400W each
Fixtures per circuit: 5,540 / 400 = 13 fixtures
Use: 10 fixtures (allow for inrush, diversity)

Option 2: Centralized Drivers
┌──────────────────────────────────┐
│   480V Distribution              │
│         ↓                        │
│   [LED Power Supply]             │
│   (Multiple outputs)             │
│    ↓  ↓  ↓  ↓  ↓  ↓             │
│   [LED arrays] (Low voltage DC)  │
└──────────────────────────────────┘

Advantages:
- Centralized control
- Service without high voltage
- Potential for battery backup

Disadvantages:
- Single point of failure
- Low-voltage drop concerns
- Higher copper cost

Option 3: Distributed with Controls
┌──────────────────────────────────┐
│   Lighting Panel                 │
│         ↓                        │
│   [Zone controllers]             │
│    ↓   ↓   ↓   ↓                │
│   [LED][LED][LED][LED]           │
│   0-10V dimming wiring           │
└──────────────────────────────────┘

Most flexible for vertical farms
```

### Harmonic Distortion

**LED DRIVER HARMONIC CONCERNS**

```
TOTAL HARMONIC DISTORTION (THD)
================================

LED drivers can generate harmonic currents
Impact: Overheating of transformers, neutrals

IEEE 519 Limits:
- THD < 5% (current)
- Individual harmonics < 3%

Poor quality LED driver:
THDi = 20-30% (unacceptable)

Quality LED driver with filtering:
THDi = 5-10% (acceptable)

Premium LED driver:
THDi < 5% (excellent)

Mitigation Strategies:
1. Specify low-THD drivers (<10%)
2. Derate transformer (k-factor)
3. Oversize neutral conductor
4. Use harmonic filters
5. Distribute loads across phases

Neutral Conductor Sizing:
Standard: Same size as phase conductors
With harmonics: May need 200% of phase size

Example:
Phase conductors: 400 kcmil (3 wires)
Neutral: 750 kcmil or 2×400 kcmil parallel
```

## 6.4 Emergency and Backup Power Systems

### Emergency Power Requirements

**NEC EMERGENCY SYSTEM REQUIREMENTS**

```
EMERGENCY SYSTEMS (NEC Article 700)
====================================

Required for:
├─ Exit signs and egress lighting
├─ Fire alarm systems
├─ Fire pumps
└─ Legally required systems

Transfer time: ≤10 seconds

Sources:
├─ Generator set
├─ Battery systems
└─ Separate utility service (if approved)

OPTIONAL STANDBY (NEC Article 702)
===================================

Protects:
├─ Critical production areas
├─ HVAC systems
├─ Refrigeration
├─ Data/control systems
└─ Security systems

Transfer time: Not specified (typically 10-30 sec)

CRITICAL OPERATIONS POWER (NEC Article 708)
============================================

For facilities where power loss = life safety
(Rare in CEA, possible in research facilities)
```

**GENERATOR SYSTEM DESIGN**

```
GENERATOR SIZING
================

Step 1: Identify Critical Loads
Emergency:
- Exit/egress lighting: 5 kW
- Fire alarm: 2 kW
- Emergency receptacles: 10 kW

Standby:
- Critical HVAC (30%): 300 kW
- Refrigeration: 75 kW
- Controls/IT: 50 kW
- Pumps (irrigation): 25 kW
- Minimal lighting (20%): 1,680 kW
- Security: 5 kW

Total standby: 2,135 kW

Step 2: Apply Demand Factors
Standby loads not simultaneous:
Effective demand: 2,135 × 0.75 = 1,601 kW

Step 3: Account for Motor Starting
Largest motor: 100 kW
Starting current: 6× run current
Additional capacity: 100 × (6-1) = 500 kW

Step 4: Generator Capacity
Required: 1,601 + 500 = 2,101 kW
Add reserve (10%): 2,311 kW

Select: 2,500 kW standby-rated generator

Step 5: Fuel Storage
Generator fuel consumption: ~17 gal/hr @ 100% load
Runtime requirement: 48 hours (typical)
Fuel needed: 17 × 48 = 816 gallons
Tank size: 1,000 gallons (with reserve)

Configuration:
2,500 kW diesel generator
1,000 gallon above-ground fuel tank
Automatic transfer switch (ATS)
Load bank for monthly testing
```

**UNINTERRUPTIBLE POWER SUPPLY (UPS)**

```
UPS SYSTEM FOR CONTROLS
========================

Critical loads requiring UPS:
├─ Climate control systems
├─ Irrigation controllers
├─ Data logging/SCADA
├─ Security systems
└─ Network equipment

UPS Sizing Example:
Control panels: 15 kW
Network/servers: 10 kW
Monitoring: 5 kW
Total: 30 kW

UPS capacity: 30 kW / 0.90 efficiency = 33 kVA
Select: 40 kVA UPS (next standard size)

Runtime: 15 minutes (until generator starts)
Battery capacity: 40 kVA × 0.25 hr = 10 kWh
Battery configuration: 192V DC, 52 Ah

UPS Types:
┌────────────────────────────────────────┐
│ 1. STANDBY (OFFLINE)                   │
│    - Lowest cost                       │
│    - 5-10 ms transfer time             │
│    - Small loads only                  │
│                                        │
│ 2. LINE-INTERACTIVE                    │
│    - Medium cost                       │
│    - 2-4 ms transfer                   │
│    - Voltage regulation                │
│    - Good for most applications        │
│                                        │
│ 3. DOUBLE-CONVERSION (ONLINE)          │
│    - Highest cost                      │
│    - Zero transfer time                │
│    - Complete isolation                │
│    - Best for critical systems         │
└────────────────────────────────────────┘

Recommendation: Line-interactive for controls
                Double-conversion for research/critical
```

## 6.5 Electrical Code Compliance (NEC)

### Key NEC Articles for CEA

```
RELEVANT NEC ARTICLES
=====================

Article 90: Introduction
Article 100: Definitions
Article 110: Requirements for Electrical Installations

WIRING AND PROTECTION
Article 210: Branch Circuits
Article 215: Feeders
Article 220: Branch-Circuit, Feeder Calculations
Article 225: Outside Branch Circuits and Feeders
Article 230: Services
Article 240: Overcurrent Protection
Article 250: Grounding and Bonding
Article 280: Surge Protection

EQUIPMENT
Article 300: Wiring Methods
Article 310: Conductors for General Wiring
Article 312: Cabinets, Cutout Boxes, Meter Sockets
Article 314: Outlet, Device, Pull, Junction Boxes
Article 334: Nonmetallic-Sheathed Cable (NM)
Article 392: Cable Trays
Article 430: Motors, Motor Circuits
Article 450: Transformers
Article 480: Batteries

SPECIAL OCCUPANCIES
Article 547: Agricultural Buildings
  (May apply to greenhouses)

SPECIAL EQUIPMENT
Article 600: Electric Signs and Outline Lighting
Article 645: Information Technology Equipment
Article 680: Swimming Pools, Fountains
  (Relevant for water features)

COMMUNICATION SYSTEMS
Article 725: Class 1, 2, and 3 Circuits
  (Control wiring)
Article 760: Fire Alarm Systems
```

### Grounding and Bonding

**GROUNDING SYSTEM DESIGN**

```
GROUNDING ELECTRODE SYSTEM
==========================

Required electrodes (if present):
├─ Metal water pipe (10 ft minimum)
├─ Building steel (if effectively grounded)
├─ Concrete-encased electrode (Ufer ground)
└─ Ground ring (if required)

Supplemental electrodes:
├─ Ground rods (8 ft minimum, 6 ft spacing)
├─ Ground plates
└─ Other approved electrodes

Grounding Electrode Conductor Sizing:
Service size → GEC size (NEC Table 250.66)

Example:
Service: 2,000A (4×500 kcmil per phase)
Largest conductor: 500 kcmil
From Table 250.66: 1/0 AWG copper GEC

Configuration:
┌────────────────────────────────────┐
│     Service Equipment              │
│         ↓ GEC                      │
│    [Ground Bar]                    │
│         ↓                          │
│   ┌─────┴─────┬──────┬──────┐     │
│   ↓           ↓      ↓      ↓     │
│ Water    Building  Rods  Ufer      │
│ Pipe     Steel    (2)   Ground     │
└────────────────────────────────────┘

EQUIPMENT GROUNDING
===================

Equipment grounding conductor sizing:
Based on overcurrent device size
(NEC Table 250.122)

Breaker size → EGC size
100A → #8 AWG copper
200A → #6 AWG copper
400A → #3 AWG copper
800A → 1/0 AWG copper
1200A → 3/0 AWG copper

Grounding Methods:
1. Separate EGC (preferred)
2. Metallic conduit (if continuous)
3. Cable armor (if listed)
```

**BONDING REQUIREMENTS**

```
BONDING IN CEA FACILITIES
==========================

Required bonding:
├─ Metal enclosures
├─ Greenhouse structural metal
├─ Racking systems (vertical farms)
├─ Metal piping systems
├─ Metal ductwork
└─ Lightning protection system

Bonding conductor sizing:
Same as EGC per NEC 250.122

Special considerations:
┌────────────────────────────────────┐
│ METAL GROWING RACKS                │
│                                    │
│ Each rack must be bonded:          │
│ - To building ground system        │
│ - Continuous bonding jumpers       │
│ - Listed connectors                │
│ - Low-impedance path               │
│                                    │
│ Reason: Safety, EMI reduction      │
└────────────────────────────────────┘

ISOLATED GROUND SYSTEMS
========================

For sensitive electronic equipment:
├─ Dedicated ground conductor (IG)
├─ Isolated ground receptacles
├─ Separate ground path to service
└─ Reduce electrical noise

Not isolated from safety ground!
Provides parallel path for noise reduction
```

### Wet and Damp Locations

**MOISTURE PROTECTION**

```
LOCATION CLASSIFICATIONS (NEC Article 100)
===========================================

DRY LOCATION
Not normally subject to dampness
Example: Office areas

DAMP LOCATION
Protected from weather, subject to moderate moisture
Examples:
- Greenhouses (typically classified as damp)
- Partially protected outdoor areas
- Indoor areas with periodic moisture

WET LOCATION
Subject to saturation with water
Examples:
- Outdoor areas
- Wash-down areas
- Water features

REQUIREMENTS BY LOCATION
=========================

Wet Locations (NEC 314.15):
├─ Weatherproof enclosures (NEMA 3R, 4, 4X)
├─ Wet location-rated fixtures
├─ Watertight conduit seals
├─ Listed for wet use
└─ GFCI protection (15-20A, 125V receptacles)

Damp Locations:
├─ Moisture-resistant enclosures (NEMA 3)
├─ Damp-rated fixtures
├─ Corrosion-resistant materials
└─ Elevated mounting where possible

Greenhouse-Specific:
┌────────────────────────────────────┐
│ Use corrosion-resistant materials: │
│ - PVC/Rigid nonmetallic conduit    │
│ - Stainless steel enclosures       │
│ - Coated metal boxes (NEMA 4X)     │
│ - Outdoor-rated wire (THWN-2)      │
│                                    │
│ Avoid:                             │
│ - Standard steel boxes             │
│ - Aluminum in fertilizer areas     │
│ - Non-coated ferrous metals        │
└────────────────────────────────────┘

GFCI REQUIREMENTS
=================

Required for (NEC 210.8):
├─ Receptacles in damp/wet locations
├─ Outdoor receptacles
├─ Receptacles within 6 ft of sinks
├─ Temporary power (construction)
└─ 15A and 20A, 125V receptacles

Exception: Industrial facilities may have
alternative ground-fault protection
```

## Summary

This module covered electrical system design for CEA facilities:
- Electrical load calculation methods and demand factors
- Power distribution system design and equipment selection
- Lighting electrical requirements including harmonics
- Emergency and backup power system design
- National Electrical Code compliance requirements

## Key Takeaways

1. **LED lighting dominates electrical load** - In vertical farms, lighting can represent 70-85% of total power demand.

2. **Demand factors reduce required capacity** - Proper application of demand factors can reduce service size by 15-30%.

3. **Power quality matters for LEDs** - Specify high power factor (>0.90) and low THD (<10%) LED drivers.

4. **Backup power protects investment** - Generator systems sized for critical loads prevent crop loss during outages.

5. **Corrosion protection is essential** - High humidity environments require corrosion-resistant materials and wet-location equipment.

## Next Module

**Module 7: Water and Plumbing Systems Design** will cover water supply and treatment, irrigation system integration, drainage and waste management, plumbing code compliance, and water conservation strategies.
