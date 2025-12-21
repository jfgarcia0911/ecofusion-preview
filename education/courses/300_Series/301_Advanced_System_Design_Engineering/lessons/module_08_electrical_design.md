# Module 8: Electrical System Design

## Introduction

Electrical systems power every component in modern aquaponic facilities—pumps, aerators, lights, sensors, and controls. Proper electrical design ensures safe, reliable operation while meeting National Electrical Code (NEC) requirements. Poor electrical design leads to equipment failure, fire hazards, and electrocution risks.

This module covers electrical load analysis, circuit design, wire sizing, protection devices, and safety requirements for aquaponic applications.

**Duration:** 1 hour

---

## Learning Objectives

1. Calculate electrical loads and size main service
2. Design branch circuits with proper wire sizing
3. Select appropriate overcurrent protection
4. Apply NEC requirements for wet locations
5. Design emergency backup power systems
6. Specify motors and motor protection
7. Create electrical single-line diagrams

---

## 1. Electrical Load Calculation

### 1.1 Connected Load Inventory

**Major Equipment Categories:**
```
Pumps: Largest load, continuous operation
Aerators: Continuous, critical for DO
Lighting: Intermittent (12-18 hours/day)
HVAC: Variable, weather-dependent
Controls: Minimal but essential
```

**Example System Load Analysis:**
```
Equipment List:
(2) Main pumps: 2 HP × 746 W/HP = 1,492 W each
(4) Aerator pumps: 100 W each = 400 W total
(20) LED fixtures: 330 W each = 6,600 W total
(1) Dehumidifier: 2,000 W
(1) Heater: 5,000 W
Controls/sensors: 500 W
Misc equipment: 1,000 W

Total Connected Load = 18,484 W = 18.5 kW
```

### 1.2 Demand Factor and Service Sizing

**NEC Demand Factors:**
```
Not all equipment operates simultaneously
Apply demand factors per NEC Article 220

Continuous loads (>3 hours): 125% multiplier
Non-continuous: 100%

Demand Calculation:
Pumps (continuous): 2,984 × 1.25 = 3,730 W
Aerators (continuous): 400 × 1.25 = 500 W
Lights (continuous): 6,600 × 1.25 = 8,250 W
HVAC: 7,000 × 0.75 (diversity) = 5,250 W
Other: 1,500 × 1.0 = 1,500 W

Total Demand = 19,230 W = 19.2 kW
```

**Service Size:**
```
For single-phase 240V:
I = P / V = 19,200 / 240 = 80 A

Add 25% for future expansion:
80 × 1.25 = 100 A

Specify: 100A main service panel
Use 125A if HVAC will be upgraded
```

---

## 2. Circuit Design

### 2.1 Branch Circuit Sizing

**Wire Ampacity (NEC Table 310.15(B)(16)):**

| Wire Size | 75°C Ampacity | 90°C Ampacity | Max OCPD* |
|-----------|---------------|---------------|-----------|
| 14 AWG | 20 A | 25 A | 15 A |
| 12 AWG | 25 A | 30 A | 20 A |
| 10 AWG | 35 A | 40 A | 30 A |
| 8 AWG | 50 A | 55 A | 40-50 A |
| 6 AWG | 65 A | 75 A | 60 A |

*OCPD = Overcurrent Protection Device (breaker/fuse)

**Voltage Drop Calculation:**
```
Vdrop = 2 × K × I × L / CM

Where:
K = 12.9 (copper) or 21.2 (aluminum)
I = Current (amperes)
L = One-way distance (feet)
CM = Circular mils (wire size)

NEC Recommendation: <3% branch circuits, <5% total

Example:
12 AWG wire (6,530 CM), 20A load, 80 ft run
Vdrop = 2 × 12.9 × 20 × 80 / 6,530 = 6.3V
% Drop = 6.3 / 120 = 5.3% (exceeds 3%)

Solution: Use 10 AWG (10,380 CM)
Vdrop = 2 × 12.9 × 20 × 80 / 10,380 = 4.0V = 3.3% ✓
```

### 2.2 Circuit Protection

**Overcurrent Protection:**
```
Breaker/Fuse sizing:
1. Protects wire from overheating
2. Must not exceed wire ampacity
3. Sized for 125% of continuous load

Example: 2 HP pump
FLA (Full Load Amps) = 12A @ 230V (from motor nameplate)
Continuous load multiplier: 12 × 1.25 = 15A
Wire: 14 AWG (20A ampacity)
Breaker: 15A (next size down, per NEC 430.52)
```

**Ground Fault Protection:**
```
GFCI Required:
- All 120V receptacles within 6 ft of water
- Outdoor receptacles
- Wet locations (NEC 210.8)

GFCI Type:
15A or 20A receptacle type (standard)
30-50A breaker type (feeders)
Trip threshold: 4-6 mA

Fish safety: Use isolation transformers for sensors in water
```

---

## 3. Motors and Drives

### 3.1 Motor Specifications

**Nameplate Information:**
```
Voltage: 115V, 230V, or 460V (3-phase)
Full Load Amps (FLA): Running current
Locked Rotor Amps (LRA): Starting current (5-8× FLA)
Service Factor (SF): Overload capacity (1.15 typical)
Frame Size: NEMA standard dimensions
Insulation Class: Temperature rating
```

**Motor Efficiency:**
```
Standard Motors: 85-90% efficient
Premium Efficient (NEMA Premium): 90-95%
Variable speed (with VFD): 95%+ system efficiency

Energy savings example:
2 HP motor, 8,000 hours/year
Standard (88%): 1,492W / 0.88 = 1,695W input
Premium (93%): 1,492W / 0.93 = 1,604W input
Savings: 91W × 8,000 hr × $0.12/kWh = $87/year

Premium motor cost: +$50-100
Payback: 1-2 years
```

### 3.2 Variable Frequency Drives (VFDs)

**Benefits:**
```
- Soft start (reduces LRA, mechanical stress)
- Variable speed (energy savings at reduced flow)
- Overload protection
- Power factor correction

Energy savings at reduced speed:
Affinity laws: Power ∝ Speed³
50% speed → 12.5% power (87.5% savings!)
75% speed → 42% power (58% savings)
```

**VFD Specifications:**
```
Input: Voltage and phase (1-phase or 3-phase)
Output: Must match motor voltage
HP Rating: Equal to or greater than motor
Enclosure: NEMA 4X for wet environments

Installation requirements:
- Line reactors (harmonic mitigation)
- Shielded cable to motor (EMI reduction)
- Proper grounding
```

---

## 4. Wet Location Requirements

### 4.1 NEC Wet Location Standards

**Equipment Ratings:**
```
NEMA 1: Indoor, dry locations only
NEMA 3R: Outdoor, rain resistant
NEMA 4: Watertight (hose down safe)
NEMA 4X: Watertight + corrosion resistant
NEMA 6P: Submersible

Aquaponic facilities: NEMA 4 or 4X minimum
```

**Wiring Methods:**
```
Approved for wet locations:
- PVC conduit (most common, low cost)
- Rigid metal conduit (RMC)
- Intermediate metal conduit (IMC)
- Liquidtight flexible (LFMC)

Wire insulation:
THWN-2: Wet location rated, 90°C
XHHW-2: Wet location rated, 90°C

NOT approved:
Romex (NM cable): Dry locations only
```

### 4.2 Bonding and Grounding

**Grounding Electrode System:**
```
Required components:
- Ground rods (2 minimum, 8 ft deep, 6 ft spacing)
- Connection to metal water pipe (if present)
- Ground wire sized per NEC Table 250.66

For 100A service:
Ground wire: 8 AWG copper minimum
Clamp: Listed for direct burial
Connection: Exothermic weld or approved clamp
```

**Equipment Grounding:**
```
All metal enclosures must be grounded
Ground fault path: <25 ohms resistance

Testing: Annually with ground resistance tester
Corrective action if >25 ohms:
- Add additional ground rods
- Chemical enhancement (bentonite clay)
- Deep-driven rods (20-30 ft)
```

---

## 5. Emergency Backup Systems

### 5.1 Standby Generators

**Sizing:**
```
Critical loads only:
Pumps: 3,000W
Aerators: 500W
Controls: 500W
Lights (reduced): 2,000W
Total: 6,000W

Generator size:
Running watts: 6,000W
Starting surge (2×): 12,000W
Select: 10kW generator (continuous rating)

Fuel consumption:
Propane: ~1 gal/hr at 50% load
Natural gas: ~150 ft³/hr at 50% load
Diesel: ~0.6 gal/hr at 50% load
```

**Automatic Transfer Switch (ATS):**
```
Function: Switches between utility and generator
Detection: Voltage loss on utility (5-10 sec delay)
Transfer time: 10-20 seconds
Modes:
- Utility available → generator stops
- Utility fails → generator starts, load transfers

Sizing: Must handle full generator output
Example: 50A ATS for 10kW generator @ 240V
```

### 5.2 Battery Backup (UPS)

**For critical controls and aeration:**
```
Load: 1,000W (aerators + controls)
Duration: 4 hours (until generator starts or problem fixed)
Battery capacity: 1,000W × 4h = 4,000 Wh

Battery sizing:
12V deep cycle batteries
Capacity = 4,000Wh / 12V = 333 Ah

Use (4) 12V 100Ah batteries in series-parallel:
2S2P configuration = 24V, 200Ah
Energy: 24V × 200Ah = 4,800Wh ✓

Inverter: 1,500W pure sine wave
Charger: 20-30A automatic charger
```

---

## 6. Lighting Circuits

### 6.1 LED Lighting Loads

**Circuit Design:**
```
(20) 330W LED fixtures = 6,600W total
At 120V: I = 6,600W / 120V = 55A
At 240V: I = 6,600W / 240V = 27.5A

Option 1: Multiple 120V circuits
(4) 20A circuits @ 1,650W each
Wire: 12 AWG, 20A breakers

Option 2: Single 240V circuit
(1) 30A circuit @ 6,600W
Wire: 10 AWG, 30A breaker

Option 2 preferred: Lower current, less voltage drop
```

### 6.2 Lighting Control

**Contactors and Timers:**
```
Contactor: Heavy-duty relay for switching lights
Rating: Must handle LED inrush current (2-3× running)
For 27.5A continuous: Use 40A contactor

Timer control:
Astronomical timers (sunrise/sunset tracking)
7-day programmable
Battery backup (maintains schedule during outage)

Wiring:
120V control circuit to timer/contactor coil
240V power through contactor to lights
```

---

## 7. Electrical Documentation

### 7.1 Single-Line Diagram

**Standard Symbols:**
```
Main Service: ═══⊓⊔═══
Panel: ⊏━━━⊐
Breaker: ─┤├─
Motor: M●
Light: ⊗
Receptacle: ⊚
Transformer: ⊃||⊂
```

**Sample Diagram:**
```
Utility Service (240V, 100A)
    ║
    ⊓ Main Breaker (100A)
    ║
    ⊏━━━━━━━━━━━⊐ Main Panel
    ┃
    ├─┤30A├─→ Lighting (240V, 6,600W)
    ┃
    ├─┤20A├─→ Pump 1 (2 HP, 240V)
    ┃
    ├─┤20A├─→ Pump 2 (2 HP, 240V)
    ┃
    ├─┤15A├─→ Aerators (120V, 400W)
    ┃
    ├─┤20A├─→ GFCI Receptacles (120V)
    ┃
    └─┤50A├─→ HVAC (240V, 7,000W)
```

### 7.2 Load Schedule

**Format:**
```
Circuit | Description | Voltage | Load (VA) | Breaker | Wire
--------|-------------|---------|-----------|---------|------
1 | Pump 1 | 240V | 2,984 | 20A | 12 AWG
2 | Pump 2 | 240V | 2,984 | 20A | 12 AWG
3-4 | Lighting | 240V | 6,600 | 30A | 10 AWG
5 | Aerators | 120V | 500 | 15A | 14 AWG
6-7 | Receptacles (GFCI) | 120V | 1,500 | 20A | 12 AWG
8-9 | HVAC | 240V | 7,000 | 50A | 6 AWG
10 | Controls | 120V | 500 | 15A | 14 AWG

Total Connected Load: 22,068 VA
Total Demand Load: 19,230 VA
```

---

## Summary

Electrical system design for aquaponic facilities requires:

1. Accurate load calculation with demand factors
2. Proper wire sizing for ampacity and voltage drop
3. Appropriate overcurrent protection
4. Wet location compliance (NEMA 4X, GFCI)
5. Emergency backup for critical loads
6. Energy-efficient motors and lighting
7. Complete electrical documentation

Always consult with licensed electrician for installation and inspection.

---

## Check Your Understanding

1. Calculate service size for: (3) 2 HP pumps, (6) 330W lights, 5 kW heater, 2 kW miscellaneous loads. Use continuous load multipliers where applicable.

2. Size wire for a 20A, 120V circuit with 150 ft run, keeping voltage drop under 3%.

3. A 3 HP motor has FLA = 17A at 230V. What breaker size is required for continuous duty?

4. Calculate annual energy savings of replacing (10) 600W HPS with (10) 330W LED, operating 14 hrs/day at $0.13/kWh.

5. Size a backup generator for: 3 kW pumps, 500W aerators, 1 kW controls, 2 kW lights (reduced). Include starting surge.

6. Design a battery backup system for 800W aeration, 6-hour runtime. Specify battery capacity and inverter size.

7. What NEMA rating is required for electrical panels in a greenhouse with periodic hosing for cleaning?

8. Calculate the locked rotor current for a 5 HP motor if LRA = 6 × FLA and FLA = 28A.

9. Draw a single-line diagram for a system with: 100A main, (2) 20A pump circuits, (1) 30A lighting circuit, (1) 20A GFCI receptacle circuit.

10. Compare VFD energy savings: 2 HP pump running 75% speed vs. full speed, 24/7 operation, $0.12/kWh.

---

**Next Module:** Module 9 - Plumbing Detailed Design
