# Module 5: Electrical Systems
## Course 107: System Design & Construction

---

## Module Overview

| Field | Details |
|-------|---------|
| **Module Number** | 5 of 8 |
| **Duration** | 1 hour |
| **Format** | Lecture + Safety Demonstration |
| **Materials** | Workbook, electrical diagrams, safety equipment |

---

## Learning Objectives

By the end of this module, you will be able to:

1. **Calculate** electrical load requirements for system components
2. **Identify** appropriate wire gauges and circuit protection
3. **Install** GFCI outlets and water-safe electrical connections
4. **Design** electrical layouts following safety codes
5. **Implement** timers and automation controllers
6. **Apply** electrical safety practices around water systems

---

## Module Outline

| Time | Activity | Type |
|------|----------|------|
| 0:00-0:05 | Welcome & Electrical Safety | Interactive |
| 0:05-0:15 | Lecture: Electrical Basics | Presentation |
| 0:15-0:25 | Lecture: Components & Wiring | Presentation |
| 0:25-0:30 | Knowledge Check | Assessment |
| 0:30-0:40 | Activity: Calculate Electrical Load | Hands-on |
| 0:40-0:50 | Demo: GFCI Installation | Demonstration |
| 0:50-0:55 | Timer & Automation Setup | Practice |
| 0:55-1:00 | Summary & Safety Review | Wrap-up |

---

## Lesson Content

### 5.1 Electrical Safety Fundamentals

#### Critical Safety Rules

```
ELECTRICAL SAFETY - NON-NEGOTIABLE

⚠️  DANGER: WATER + ELECTRICITY = FATAL

MANDATORY SAFETY MEASURES:

1. GFCI PROTECTION
   ✓ All outlets near water must have GFCI
   ✓ Test monthly
   ✓ Replace if trips frequently

2. PROPER GROUNDING
   ✓ All equipment grounded
   ✓ Three-prong plugs only
   ✓ Never remove ground pin

3. QUALIFIED INSTALLATION
   ✓ Hire licensed electrician for major work
   ✓ Follow local electrical codes
   ✓ Obtain permits when required

4. WATER PROTECTION
   ✓ Outlets above flood level
   ✓ Waterproof enclosures for outdoor
   ✓ Drip loops on all cords

5. CIRCUIT CAPACITY
   ✓ Never overload circuits
   ✓ Dedicated circuits for large loads
   ✓ Proper wire gauge for amperage

⚡ WHEN IN DOUBT, HIRE A PROFESSIONAL ⚡
```

#### GFCI Requirements

```
GFCI (GROUND FAULT CIRCUIT INTERRUPTER)

What It Does:
    Detects ground faults and cuts power in 1/40th second
    Prevents electrocution

Where Required:
    ✓ Within 6 feet of water
    ✓ Outdoor circuits
    ✓ Basements and garages
    ✓ Kitchens and bathrooms

Types:
    • GFCI Outlet (at point of use)
    • GFCI Breaker (protects entire circuit)
    • Portable GFCI (plug-in adapter)

Testing:
    1. Press TEST button
    2. Power should cut immediately
    3. Press RESET to restore
    4. Test monthly

    ┌─────────────────┐
    │   GFCI OUTLET   │
    │  ┌───┐   ┌───┐  │
    │  │   │   │   │  │
    │  └───┘   └───┘  │
    │  [TEST] [RESET] │
    └─────────────────┘
```

---

### 5.2 Electrical Load Calculation

#### Power Consumption Basics

```
ELECTRICAL FORMULAS

Power (Watts) = Voltage (V) × Current (A)
Current (Amps) = Power (W) ÷ Voltage (V)

Standard US: 120V
Heavy appliances: 240V

Example:
    600W water pump
    600W ÷ 120V = 5 amps
```

#### Typical System Component Loads

| Component | Wattage | Amps @ 120V | Run Time | Daily kWh |
|-----------|---------|-------------|----------|-----------|
| **Water Pump (600 GPH)** | 75W | 0.6A | 24 hrs | 1.8 kWh |
| **Water Pump (1200 GPH)** | 150W | 1.25A | 24 hrs | 3.6 kWh |
| **Air Pump (small)** | 15W | 0.13A | 24 hrs | 0.36 kWh |
| **Air Pump (large)** | 60W | 0.5A | 24 hrs | 1.44 kWh |
| **LED Grow Lights (4' fixture)** | 40W | 0.33A | 16 hrs | 0.64 kWh |
| **LED Grow Lights (600W equiv)** | 100W | 0.83A | 16 hrs | 1.6 kWh |
| **Heater (100W)** | 100W | 0.83A | Varies | 0-2.4 kWh |
| **Fan (circulation)** | 50W | 0.42A | 24 hrs | 1.2 kWh |

#### Complete System Load Example

```
SMALL AQUAPONIC SYSTEM ELECTRICAL LOAD

Component List:
    • Water pump (75W) × 1 = 75W
    • Air pump (20W) × 1 = 20W
    • Grow lights (80W) × 2 = 160W
    • Circulation fan (50W) × 1 = 50W
    ─────────────────────────────────
    TOTAL CONNECTED LOAD = 305W

Peak Amperage:
    305W ÷ 120V = 2.54 amps

Circuit Requirement:
    2.54A × 1.25 safety factor = 3.18A
    Minimum: 15A circuit ✓
    Recommended: Dedicated 15A or 20A circuit

Daily Energy Use:
    • Pumps/fan: 145W × 24hr = 3.48 kWh
    • Lights: 160W × 16hr = 2.56 kWh
    ─────────────────────────────────
    TOTAL: 6.04 kWh/day

Monthly Cost (at $0.12/kWh):
    6.04 × 30 days = 181.2 kWh
    181.2 × $0.12 = $21.74/month
```

---

### 5.3 Wire Sizing and Circuit Protection

#### Wire Gauge Selection

| Wire Gauge (AWG) | Max Amperage | Typical Use | Max Distance @ 120V |
|------------------|--------------|-------------|---------------------|
| **18 AWG** | 7A | Extension cords, small devices | 25 feet |
| **16 AWG** | 10A | Extension cords, fans | 40 feet |
| **14 AWG** | 15A | 15A circuits, outlets | 60 feet |
| **12 AWG** | 20A | 20A circuits, heavy equipment | 80 feet |
| **10 AWG** | 30A | Large pumps, heaters | 100+ feet |

```
WIRE GAUGE RULE

Smaller number = Thicker wire = More capacity

Never use smaller gauge than required!

Circuit Breaker Protection:
    • 15A circuit → 14 AWG minimum
    • 20A circuit → 12 AWG minimum
    • 30A circuit → 10 AWG minimum

Voltage Drop Consideration:
    Long runs need larger wire to prevent voltage drop
    >5% voltage drop = performance issues

    Formula:
    Voltage Drop = (2 × Length × Current × Resistance) ÷ 1000

    Use online calculators for accuracy
```

#### Circuit Breaker Sizing

```
CIRCUIT PROTECTION

Continuous Load Rule:
    Circuit breaker should be rated 125% of continuous load

Example:
    Pump runs 24/7 at 12 amps
    12A × 1.25 = 15A minimum breaker

Common Breaker Sizes:
    • 15A - Standard lighting and outlets
    • 20A - Heavy duty outlets, equipment
    • 30A - Large pumps, HVAC
    • 40A - Commercial equipment

Double-Pole vs. Single-Pole:
    • Single-pole: 120V circuits
    • Double-pole: 240V circuits (2 spaces in panel)
```

---

### 5.4 Wiring Techniques

#### Drip Loop Formation

```
DRIP LOOP - PREVENTS WATER ENTRY

WITHOUT Drip Loop (BAD):
    Wall Outlet
         │
         └─── Cord ──► Equipment
                (water runs down cord into outlet!)

WITH Drip Loop (GOOD):
    Wall Outlet
         │
         └──╮
            │  ← Drip loop
            ╰─╮
              └──► Equipment
                    (water drips off loop)

Install ALL cords with drip loops below outlet
```

#### Weatherproof Installation

```
OUTDOOR/GREENHOUSE ELECTRICAL

Required Components:
    ✓ Weatherproof outlet boxes (NEMA 3R or better)
    ✓ In-use covers (protect while plugged in)
    ✓ GFCI protection
    ✓ UV-rated cable/conduit
    ✓ Elevated above ground level

Conduit Types:
    • PVC conduit (Schedule 40 or 80)
    • Flexible liquid-tight conduit
    • Metallic conduit (EMT)

Installation:
    1. Mount boxes securely
    2. Seal all penetrations
    3. Slope conduit for drainage
    4. Support every 3-4 feet
    5. Use waterproof connectors
```

---

### 5.5 Timers and Automation

#### Timer Types

| Timer Type | Function | Best For | Cost |
|------------|----------|----------|------|
| **Mechanical 24hr** | Simple on/off daily | Lights, pumps | $10-20 |
| **Digital 7-day** | Weekly programming | Variable schedules | $20-40 |
| **Cycle Timer** | Minutes on/off | Irrigation, aeroponics | $30-60 |
| **Astronomical** | Sunrise/sunset | Lighting automation | $40-80 |
| **Smart Outlet** | WiFi/app control | Remote monitoring | $25-50 |

#### Programming Common Schedules

```
TYPICAL TIMER SETTINGS

LIGHTING (Photoperiod)
    Vegetative Growth:
        ON: 6:00 AM
        OFF: 10:00 PM
        (16 hours on, 8 hours off)

    Fruiting/Flowering:
        ON: 6:00 AM
        OFF: 6:00 PM
        (12 hours on, 12 hours off)

WATER PUMP (Flood & Drain)
    15 minutes ON every 1 hour
    Or: Continuous (24/7)

AEROPONIC MISTING
    1 minute ON
    4 minutes OFF
    Cycle continuously

AIR PUMPS
    Usually: Continuous (24/7)
    Optional: 15 min ON, 15 min OFF (saves energy)
```

#### Automation Controller Setup

```
BASIC AUTOMATION SYSTEM

┌─────────────────────────────────────────┐
│     CONTROLLER HUB                      │
│                                         │
│  Monitors:                              │
│    • Temperature                        │
│    • pH                                 │
│    • Water level                        │
│                                         │
│  Controls:                              │
│    • Heater (if temp < 70°F)           │
│    • Fan (if temp > 80°F)              │
│    • pH dosing (if out of range)       │
│    • Fill valve (if level low)         │
│    • Alerts/notifications               │
└─────────────────────────────────────────┘

Entry Level: $200-500
    • Basic monitoring
    • Simple if/then automation
    • Email/SMS alerts

Advanced: $1000-3000+
    • Multi-zone control
    • Data logging
    • Remote access
    • Integration with other systems
```

---

### 5.6 Electrical Layout Design

#### Panel and Outlet Planning

```
ELECTRICAL LAYOUT EXAMPLE

Main Service Panel
    │
    ├─[15A GFCI Breaker]─► Circuit 1: Grow Room Outlets
    │                       • 4 outlets for pumps/equipment
    │
    ├─[15A GFCI Breaker]─► Circuit 2: Lighting
    │                       • Grow lights (dedicated)
    │
    ├─[20A GFCI Breaker]─► Circuit 3: Greenhouse
    │                       • Outdoor-rated outlets
    │
    └─[20A Breaker]──────► Circuit 4: Climate Control
                           • Heaters, fans, dehumidifier

Outlet Placement:
    ✓ Every 6 feet along walls
    ✓ Above water level (4+ feet)
    ✓ Accessible for maintenance
    ✓ Weatherproof if needed
```

#### Equipment Placement Diagram

```
SAMPLE GROW ROOM ELECTRICAL

              North Wall
    ┌─────────────────────────────┐
    │     [O]         [O]          │  [O] = GFCI Outlet
    │   Outlet 1    Outlet 2       │  [L] = Light fixture
    │                              │  [S] = Switch
    │   [L]           [L]          │
West│  Light 1      Light 2        │East
Wall│                              │Wall
    │                              │
    │   [Equipment Area]           │
    │   • Pumps on shelf           │
    │   • Timers accessible        │
    │   • Drip loops visible       │
    │                              │
    │     [O]         [S]          │
    │   Outlet 3    Master         │
    └─────────────────────────────┘
              South Wall
            (Entry door)

Key Considerations:
    • Outlets above flood risk
    • Switches at entry
    • Equipment grouped
    • Cable management (avoid trip hazards)
```

---

### 5.7 Backup Power Considerations

#### Critical System Components

```
POWER PRIORITY RANKING

CRITICAL (Must stay on):
    1. Aeration (fish will die without O2)
    2. Water circulation (prevents toxicity)

IMPORTANT (Should stay on):
    3. Heating/cooling (depends on climate)
    4. Monitoring systems

NON-CRITICAL (Can be off):
    5. Lighting (short term)
    6. Automation features
```

#### Backup Power Options

| Option | Capacity | Runtime | Cost | Best For |
|--------|----------|---------|------|----------|
| **UPS (Uninterruptible)** | 500-1500W | 30-120 min | $150-500 | Short outages, critical pumps |
| **Generator (portable)** | 2000-7000W | Hours (with fuel) | $400-1500 | Extended outages |
| **Generator (standby)** | 7000-20000W | Days (auto-start) | $3000-8000 | Commercial, automatic |
| **Battery Bank + Inverter** | Custom | Hours to days | $500-5000+ | Off-grid, renewable |

```
MINIMUM BACKUP SYSTEM

For 500-gallon aquaponic system:

Essential Load:
    • Air pump: 20W
    • Small circulation pump: 50W
    ────────────────────────
    Total: 70W

UPS Recommendation:
    70W × 4 hours = 280 watt-hours
    Choose 600W UPS (provides ~4-6 hour runtime)

Cost: ~$200

Protects fish during:
    ✓ Short power outages
    ✓ Time to start generator
    ✓ Critical system maintenance
```

---

### 5.8 Energy Efficiency

#### Reducing Power Consumption

| Strategy | Savings | Implementation |
|----------|---------|----------------|
| **LED Lighting** | 50-70% vs fluorescent | Replace all fixtures |
| **Efficient Pumps** | 20-40% vs standard | Choose high-efficiency models |
| **Timers for Intermittent** | 30-50% | Air pumps, some circulation |
| **Insulation** | 20-50% heating/cooling | Greenhouse, tanks |
| **Solar Supplement** | Variable | Offset daytime loads |

```
ENERGY AUDIT EXAMPLE

BEFORE Optimization:
    • Old fluorescent lights: 320W × 16hr = 5.12 kWh
    • Standard pump: 150W × 24hr = 3.60 kWh
    • Continuous air: 60W × 24hr = 1.44 kWh
    • Always-on heater: 100W × 12hr = 1.20 kWh
    ─────────────────────────────────────────────
    Daily Total: 11.36 kWh × $0.12 = $1.36/day
    Monthly: $40.80

AFTER Optimization:
    • LED lights: 120W × 16hr = 1.92 kWh
    • Efficient pump: 75W × 24hr = 1.80 kWh
    • Timed air (15/15): 30W × 24hr = 0.72 kWh
    • Insulated + thermostat: 50W × 8hr = 0.40 kWh
    ─────────────────────────────────────────────
    Daily Total: 4.84 kWh × $0.12 = $0.58/day
    Monthly: $17.40

SAVINGS: $23.40/month (57% reduction!)
Annual: $280.80
```

---

### 5.9 Troubleshooting Electrical Issues

#### Common Problems and Solutions

| Problem | Possible Cause | Solution |
|---------|---------------|----------|
| **GFCI trips repeatedly** | Ground fault, moisture | Dry area, check for damaged cords |
| | Pump failure | Replace pump |
| **Circuit breaker trips** | Overloaded circuit | Reduce load or add circuit |
| | Short circuit | Inspect for damaged wiring |
| **Equipment won't run** | No power | Check outlet, breaker, GFCI reset |
| | Timer malfunction | Test timer, replace if needed |
| **Lights flickering** | Loose connection | Tighten connections |
| | Voltage drop | Increase wire gauge |
| **Shock from equipment** | Missing/poor ground | DO NOT USE - repair immediately |
| | Water entry | Dry and seal, check GFCI |

---

### 5.10 Installation Checklist

```
ELECTRICAL INSTALLATION CHECKLIST

PLANNING
□ Load calculation complete
□ Circuit plan approved
□ Permits obtained (if required)
□ Licensed electrician hired (if needed)

MATERIALS
□ Proper wire gauge for all runs
□ GFCI outlets/breakers
□ Weatherproof boxes (if outdoor)
□ Conduit and fittings
□ Wire nuts, terminals
□ Labels and markers

INSTALLATION
□ Circuits properly sized
□ All connections tight
□ Proper grounding
□ GFCI protection installed
□ Drip loops on all cords
□ Outlets above water level
□ Weatherproofing complete (outdoor)

TESTING
□ Continuity test
□ GFCI test (all outlets)
□ Load test (all equipment)
□ No voltage drop under load
□ All timers programmed correctly
□ Emergency shutdown accessible

DOCUMENTATION
□ Circuit diagram created
□ Equipment manuals saved
□ Maintenance schedule posted
□ Emergency procedures posted
```

---

### 5.11 Key Takeaways

```
MODULE 5 KEY POINTS

┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  1. GFCI PROTECTION is mandatory for all                   │
│     electrical near water - non-negotiable                 │
│                                                             │
│  2. CALCULATE LOADS properly and don't                     │
│     overload circuits                                      │
│                                                             │
│  3. USE CORRECT WIRE GAUGE for amperage                    │
│     and distance                                           │
│                                                             │
│  4. DRIP LOOPS and elevated outlets prevent                │
│     water from entering electrical                         │
│                                                             │
│  5. BACKUP POWER for aeration can save                     │
│     your fish during outages                               │
│                                                             │
│  6. WHEN IN DOUBT, hire a licensed                         │
│     electrician - safety first!                            │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Discussion Questions

1. **Why is GFCI protection** so critical for growing systems?

2. **How would you prioritize** electrical loads during a power outage?

3. **What are the risks** of using undersized wire or overloading circuits?

4. **How can automation** improve both efficiency and safety?

5. **What factors** would determine if you need a dedicated circuit vs. using existing outlets?

---

## Vocabulary

| Term | Definition |
|------|------------|
| **GFCI** | Ground Fault Circuit Interrupter - safety device that cuts power on ground faults |
| **Amperage** | Measure of electrical current flow (amps) |
| **Wire Gauge (AWG)** | American Wire Gauge - standard for wire thickness |
| **Circuit Breaker** | Safety device that interrupts circuit when overloaded |
| **Drip Loop** | Downward loop in cord preventing water entry to outlet |
| **UPS** | Uninterruptible Power Supply - battery backup for equipment |
| **Voltage Drop** | Reduction in voltage along wire length |
| **Conduit** | Protective tube for electrical wiring |

---

## Activity: Calculate System Electrical Load

**See: activities/activity_05_electrical_load_calculation.md**

In this activity, you will calculate the complete electrical load for a system design and determine circuit requirements.

---

## Quiz Preview

After completing this module, you will take **Quiz 5: Electrical Systems**

The quiz covers:
- Electrical safety requirements
- Load calculations
- Wire sizing and circuit protection
- GFCI installation and testing
- Timer and automation basics

**See: quizzes/quiz_05_electrical_systems.md**

---

## Next Module Preview

**Module 6: Construction Methods**

In the next module, we'll cover the actual building process, from site preparation through system assembly and structural support.

---

## Additional Resources

- Video: "Electrical Safety for Aquaponics" (20 minutes)
- Reading: National Electrical Code (NEC) excerpts
- Tool: Load Calculator
- Guide: GFCI Installation Instructions
- Safety: Emergency Response Procedures

---

*Module 5 of 8 | Course 107: System Design & Construction*
*EcoFusion Academy*
